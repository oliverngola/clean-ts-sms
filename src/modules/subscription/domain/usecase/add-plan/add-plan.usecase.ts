import UseCaseInterface from '../../../../@shared/domain/usecase/use-case.interface'
import Id from '../../../../@shared/domain/value-object/id.value-object'
import Plan from '../../entity/plan.entity'
import PlanGateway from '../../gateway/plan.gateway'
import { AddPlanInputDto, AddPlantOutputDto } from './add-plan.dto'

export default class AddPlanUseCase implements UseCaseInterface {
  constructor (private readonly _planRepository: PlanGateway) {}

  async execute (input: AddPlanInputDto): Promise<AddPlantOutputDto> {
    const props = {
      id: new Id(input.id),
      name: input.name,
      min: input.min,
      max: input.max,
      days: input.days
    }
    const plan = new Plan(props)
    await this._planRepository.add(plan)
    return {
      id: plan.id.id,
      name: plan.name,
      min: plan.min,
      max: plan.max,
      days: plan.days,
      createdAt: plan.createdAt,
      updatedAt: plan.updatedAt
    }
  }
}
