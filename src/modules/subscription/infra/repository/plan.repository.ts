import Id from '../../../@shared/domain/value-object/id.value-object'
import Plan from '../../domain/entity/plan.entity'
import PlanGateway from '../../domain/gateway/plan.gateway'
import PlanModel from './plan.model'

export default class PlanRepository implements PlanGateway {
  async find (id: string): Promise<Plan> {
    const plan = await PlanModel.findOne({ where: { id } })
    if (!plan) {
      throw new Error(`Plan with ${id} not found`)
    }
    return new Plan({
      id: new Id(plan.id),
      name: plan.name,
      min: plan.min,
      max: plan.max,
      days: plan.days,
      createdAt: plan.createdAt,
      updatedAt: plan.updatedAt
    })
  }

  async add (plan: Plan): Promise<void> {

  }
}
