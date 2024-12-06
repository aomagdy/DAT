import { z } from "zod"

export const Roles = {
  ADMIN: "admin",
  INSTRUCTOR: "instructor",
  STUDENT: "student",
  GUEST: "guest",
} as const

export type Role = keyof typeof Roles

export const Permissions = {
  // Content Management
  CREATE_CONTENT: "create:content",
  EDIT_CONTENT: "edit:content",
  DELETE_CONTENT: "delete:content",
  VIEW_CONTENT: "view:content",

  // User Management
  MANAGE_USERS: "manage:users",
  VIEW_USERS: "view:users",

  // Course Management
  CREATE_COURSE: "create:course",
  EDIT_COURSE: "edit:course",
  DELETE_COURSE: "delete:course",
  VIEW_COURSE: "view:course",

  // Analytics
  VIEW_ANALYTICS: "view:analytics",
  EXPORT_ANALYTICS: "export:analytics",

  // Settings
  MANAGE_SETTINGS: "manage:settings",
  VIEW_SETTINGS: "view:settings",
} as const

export type Permission = keyof typeof Permissions

// Role-Permission mappings
export const RolePermissions: Record<Role, Permission[]> = {
  admin: Object.values(Permissions),
  instructor: [
    Permissions.CREATE_CONTENT,
    Permissions.EDIT_CONTENT,
    Permissions.VIEW_CONTENT,
    Permissions.VIEW_USERS,
    Permissions.CREATE_COURSE,
    Permissions.EDIT_COURSE,
    Permissions.VIEW_COURSE,
    Permissions.VIEW_ANALYTICS,
    Permissions.VIEW_SETTINGS,
  ],
  student: [
    Permissions.VIEW_CONTENT,
    Permissions.VIEW_COURSE,
  ],
  guest: [
    Permissions.VIEW_CONTENT,
  ],
}

// Validation schemas
export const roleSchema = z.enum(Object.keys(Roles) as [Role, ...Role[]])
export const permissionSchema = z.enum(Object.keys(Permissions) as [Permission, ...Permission[]])