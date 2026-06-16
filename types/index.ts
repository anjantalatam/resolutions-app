export type Priority = 'high' | 'medium' | 'low'

export type Category =
  | 'Health'
  | 'Fitness'
  | 'Learning'
  | 'Finance'
  | 'Career'
  | 'Project'
  | 'Personal'
  | 'Other'

export interface Resolution {
  id: string
  title: string
  category: Category
  deadline?: Date
  createdAt: Date
  updatedAt: Date
}

export interface Milestone {
  id: string
  resolutionId: string
  title: string
  deadline?: Date
  sortOrder: number
  createdAt: Date
  updatedAt: Date
}

export interface Task {
  id: string
  milestoneId?: string
  resolutionId: string
  title: string
  isCompleted: boolean
  priority: Priority
  deadline?: Date
  sortOrder: number
  createdAt: Date
  updatedAt: Date
}

export interface TodayPlan {
  date: string
  taskIds: string[]
  focusTaskId?: string
}

export interface Progress {
  completed: number
  total: number
}
