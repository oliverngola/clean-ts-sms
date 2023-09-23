export interface FindSubscripionInputDto {
  id: string
}

export interface FindSubscripionOutputDto {
  id: string
  name: string
  status: string
  startDate: Date
  expirationDate: Date
  balance: number
  usedBalance: number
  createdAt: Date
  updatedAt: Date
}
