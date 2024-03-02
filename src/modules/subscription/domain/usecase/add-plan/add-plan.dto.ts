export interface AddPlanInputDto {
  id?: string
  name: string
  min: number
  max: number
  days: number
}

export interface AddPlantOutputDto {
  id: string
  name: string
  min: number
  max: number
  days: number
  createdAt: Date
  updatedAt: Date
}
