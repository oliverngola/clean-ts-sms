import Plan from '../entity/plan.entity'

export default interface PlanGateway {
  add: (plan: Plan) => Promise<void>
  find: (id: string) => Promise<Plan>
}
