import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { Permission } from "./roles"
import { rbac } from "./rbac"

export async function withPermission(
  request: NextRequest,
  permission: Permission
) {
  try {
    const token = await getToken({ req: request })
    
    if (!token?.sub) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    const hasPermission = await rbac.hasPermission(token.sub, permission)
    
    if (!hasPermission) {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Permission middleware error:", error)
    return NextResponse.redirect(new URL("/error", request.url))
  }
}

export function withRoleRoutes(routes: Record<string, Permission[]>) {
  return async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const permissions = routes[pathname]

    if (!permissions) return NextResponse.next()

    const token = await getToken({ req: request })
    
    if (!token?.sub) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    const userPermissions = await rbac.getUserPermissions(token.sub)
    const hasRequiredPermission = permissions.some(
      permission => userPermissions.includes(permission)
    )

    if (!hasRequiredPermission) {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }

    return NextResponse.next()
  }
}