import { prisma } from "@/lib/prisma"
import { Role, Permission, RolePermissions } from "./roles"

export class RBAC {
  private static instance: RBAC
  private constructor() {}

  public static getInstance(): RBAC {
    if (!RBAC.instance) {
      RBAC.instance = new RBAC()
    }
    return RBAC.instance
  }

  async hasPermission(userId: string, permission: Permission): Promise<boolean> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { role: true }
      })

      if (!user?.role) return false

      const permissions = RolePermissions[user.role as Role]
      return permissions.includes(permission)
    } catch (error) {
      console.error("Permission check failed:", error)
      return false
    }
  }

  async hasRole(userId: string, role: Role): Promise<boolean> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { role: true }
      })

      return user?.role === role
    } catch (error) {
      console.error("Role check failed:", error)
      return false
    }
  }

  async getUserPermissions(userId: string): Promise<Permission[]> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { role: true }
      })

      if (!user?.role) return []

      return RolePermissions[user.role as Role]
    } catch (error) {
      console.error("Failed to get user permissions:", error)
      return []
    }
  }

  async assignRole(userId: string, role: Role): Promise<boolean> {
    try {
      await prisma.user.update({
        where: { id: userId },
        data: { role }
      })
      return true
    } catch (error) {
      console.error("Failed to assign role:", error)
      return false
    }
  }
}

export const rbac = RBAC.getInstance()