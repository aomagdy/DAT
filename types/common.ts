export type Theme = 'light' | 'dark' | 'system'

export interface MenuItem {
  title: string
  href: string
  icon?: React.ComponentType
  children?: MenuItem[]
}

export interface MetaData {
  title: string
  description?: string
  keywords?: string[]
  image?: string
}

export type Status = 'idle' | 'loading' | 'success' | 'error'