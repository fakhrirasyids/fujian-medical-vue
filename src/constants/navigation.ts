export type PageId = 'home' | 'about' | 'services' | 'engineering' | 'projects'

export const primaryPages: Array<{ id: PageId; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'projects', label: 'Projects' },
]
