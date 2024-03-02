import AddPlanUseCase from './add-plan.usecase'

const mockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn()
  }
}

describe('AddPlanUsecase unit test', () => {
  test('should create a plan', async () => {
    const planRepository = mockRepository()
    const usecase = new AddPlanUseCase(planRepository)
    const input = {
      name: 'Plan 1',
      min: 1,
      max: 200,
      days: 30
    }
    const output = await usecase.execute(input)
    expect(planRepository.add).toHaveBeenCalledTimes(1)
    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      min: input.min,
      max: input.max,
      days: input.days,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)
    })
  })
})
