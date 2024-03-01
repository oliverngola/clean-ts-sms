export interface FindPlanInputDto {
  id: string
}

export interface FindPlanOutputDto {
  id: string
  name: string
  min: number
  max: number
  days: number
  createdAt: Date
  updatedAt: Date
}
