import { Sequelize } from 'sequelize-typescript'
import SubscriptionModel from './subscription.model'
import SubscriptionRepository from './subscription.repository'
import PlanModel from './plan.model'
import ClientModel from '../../../client-adm/infra/repository/client.model'
import ClientAdmFacadeFactory from '../../../client-adm/application/factory/client-adm.facade.factory'

describe('SubscriptionRepository unit test', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      logging: false,
      sync: { force: true }
    })
    sequelize.addModels([PlanModel, ClientModel, SubscriptionModel])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should find a subscription', async () => {
    const clientFacade = ClientAdmFacadeFactory.create()
    await clientFacade.add({
      id: 'c1',
      name: 'John Doe',
      email: 'x@x.com',
      document: 'Documet',
      street: 'Street',
      number: '123',
      complement: 'Cazenga',
      city: 'Luanda',
      state: 'Luanda',
      zipCode: 'string'
    })
    await PlanModel.create({
      id: 'p1',
      name: 'Plan 1',
      min: 20,
      max: 100,
      days: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    await SubscriptionModel.create({
      id: 's1',
      plan_id: 'p1',
      client_id: 'c1',
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
    expect(result.plan.name).toBe('Plan 1')
    expect(result.status).toBe('active')
    expect(result.balance).toBe(20)
    expect(result.usedBalance).toBe(0)
  })
})
