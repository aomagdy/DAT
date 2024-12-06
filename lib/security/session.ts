import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/auth-options"
import { prisma } from "@/lib/prisma"

const MAX_SESSIONS = 5
const SESSION_EXPIRY = 30 * 24 * 60 * 60 * 1000 // 30 days

export async function validateSession(sessionToken: string) {
  const session = await prisma.session.findUnique({
    where: { sessionToken },
    include: { user: true }
  })

  if (!session) return false

  // Check if session is expired
  if (new Date() > session.expires) {
    await prisma.session.delete({
      where: { sessionToken }
    })
    return false
  }

  return true
}

export async function enforceSessionLimits(userId: string) {
  const sessions = await prisma.session.findMany({
    where: { userId },
    orderBy: { expires: "desc" }
  })

  // Remove expired sessions
  const validSessions = sessions.filter(
    session => new Date() <= session.expires
  )

  // If too many sessions, remove oldest ones
  if (validSessions.length > MAX_SESSIONS) {
    const sessionsToRemove = validSessions
      .slice(MAX_SESSIONS)
      .map(s => s.sessionToken)

    await prisma.session.deleteMany({
      where: {
        sessionToken: {
          in: sessionsToRemove
        }
      }
    })
  }
}

export async function rotateSessionToken(currentToken: string) {
  const newToken = crypto.randomUUID()
  
  await prisma.session.update({
    where: { sessionToken: currentToken },
    data: {
      sessionToken: newToken,
      expires: new Date(Date.now() + SESSION_EXPIRY)
    }
  })

  return newToken
}