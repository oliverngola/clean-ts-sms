import { Sequelize } from 'sequelize-typescript'
import SubscriptionModel from './subscription.model'
import SubscriptionRepository from './subscription.repository'

describe('SubscriptionRepository unit test', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      logging: false,
      sync: { force: true }
    })
    sequelize.addModels([SubscriptionModel])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should find a subscription', async () => {
    await SubscriptionModel.create({
      id: 's1',
      name: 'Sub 1',
      status: 'active',
      balance: 20,
      usedBalance: 0,
      startDate: new Date(),
      expirationDate: new Date(new Date().getTime() + 1),
      createdAt: new Date(),
      updatedAt: new Date()
    })
    const repository = new SubscriptionRepository()
    const result = await repository.find('s1')
    expect(result).toBeTruthy()
    expect(result.id.id).toBe('s1')
    expect(result.name).toBe('Sub 1')
    expect(result.status).toBe('active')
    expect(result.balance).toBe(20)
    expect(result.usedBalance).toBe(0)
  })
})
