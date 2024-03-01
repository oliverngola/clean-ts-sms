import { Sequelize } from 'sequelize-typescript'
import PlanModel from './plan.model'
import PlanRepository from './plan.repository'

describe('PlanRepository unit test', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      logging: false,
      sync: { force: true }
    })
    sequelize.addModels([PlanModel])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should find a plan', async () => {
    await PlanModel.create({
      id: 'p1',
      name: 'Plan 1',
      min: 20,
      max: 100,
      days: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    const repository = new PlanRepository()
    const result = await repository.find('p1')
    expect(result).toBeTruthy()
    expect(result.id.id).toBe('p1')
    expect(result.name).toBe('Plan 1')
    expect(result.min).toBe(20)
    expect(result.max).toBe(100)
    expect(result.days).toBe(10)
    expect(result.createdAt).toBeDefined()
    expect(result.updatedAt).toBeDefined()
  })
})
