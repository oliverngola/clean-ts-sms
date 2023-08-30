import Id from '../../../@shared/domain/value-object/id.value-object'
import Subscription from '../../domain/entity/subscription.entity'
import FindSubscriptionUseCase from './find-subscription.usecase'

const subscription = new Subscription({
  id: new Id('s1'),
  name: 'Sub 1',
  status: 'active',
  balance: 20,
  usedBalance: 0,
  startDate: new Date(),
  expirationDate: new Date(new Date().getTime() + 1)
})

const mockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(subscription))
  }
}

describe('FindSubscriptionUseCase unit test', () => {
  it('should find a subscription', async () => {
    const repository = mockRepository()
    const usecase = new FindSubscriptionUseCase(repository)
    const input = {
      id: 's1'
    }
    const output = await usecase.execute(input)
    expect(repository.find).toHaveBeenCalledTimes(1)
    expect(output).toBeDefined()
    expect(output.id).toEqual(subscription.id.id)
    expect(output.name).toEqual(subscription.name)
    expect(output.balance).toEqual(subscription.balance)
    expect(output.status).toEqual(subscription.status)
    expect(output.usedBalance).toEqual(subscription.usedBalance)
    expect(output.startDate).toEqual(subscription.startDate)
    expect(output.expirationDate).toEqual(subscription.expirationDate)
    expect(output.createdAt).toBeDefined()
    expect(output.updatedAt).toBeDefined()
  })
})
