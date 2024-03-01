import Id from '../../../../@shared/domain/value-object/id.value-object'
import Plan from '../../entity/plan.entity'
import FindPlanUseCase from './find-plan.usecase'

const plan = new Plan({
  id: new Id('p1'),
  name: 'Sub 1',
  min: 1,
  max: 10000,
  days: 30
})

const mockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(plan))
  }
}

describe('FindPlanUseCase unit test', () => {
  it('should find a plan', async () => {
    const repository = mockRepository()
    const usecase = new FindPlanUseCase(repository)
    const input = {
      id: 'p1'
    }
    const output = await usecase.execute(input)
    expect(repository.find).toHaveBeenCalledTimes(1)
    expect(output).toBeDefined()
    expect(output.id).toEqual(plan.id.id)
    expect(output.name).toEqual(plan.name)
    expect(output.min).toEqual(plan.min)
    expect(output.max).toEqual(plan.max)
    expect(output.days).toEqual(plan.days)
    expect(output.createdAt).toBeDefined()
    expect(output.updatedAt).toBeDefined()
  })
})
