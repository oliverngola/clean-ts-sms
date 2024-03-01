import Plan from '../entity/plan.entity'

export default interface PlanGateway {
  find: (id: string) => Promise<Plan>
}
