import UseCaseInterface from '../../../../@shared/domain/usecase/use-case.interface'
import PlanGateway from '../../gateway/plan.gateway'
import { FindPlanInputDto, FindPlanOutputDto } from './find-plan.dto'

export default class FindPlanUseCase implements UseCaseInterface {
  constructor (private readonly _PlanRepository: PlanGateway) {}

  async execute (input: FindPlanInputDto): Promise<FindPlanOutputDto> {
    const Plan = await this._PlanRepository.find(input.id)
    return {
      id: Plan.id.id,
      name: Plan.name,
      min: Plan.min,
      max: Plan.max,
      days: Plan.days,
      createdAt: Plan.createdAt,
      updatedAt: Plan.updatedAt
    }
  }
}
