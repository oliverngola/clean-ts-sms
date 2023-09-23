import UseCaseInterface from '../../../../@shared/domain/usecase/use-case.interface'
import SubscriptionGateway from '../../gateway/subscription.gateway'
import { FindSubscripionInputDto, FindSubscripionOutputDto } from './find-subscription.dto'

export default class FindSubscriptionUseCase implements UseCaseInterface {
  constructor (private readonly _subscriptionRepository: SubscriptionGateway) {}

  async execute (input: FindSubscripionInputDto): Promise<FindSubscripionOutputDto> {
    const subscription = await this._subscriptionRepository.find(input.id)
    return {
      id: subscription.id.id,
      name: subscription.name,
      status: subscription.status,
      startDate: subscription.startDate,
      expirationDate: subscription.expirationDate,
      balance: subscription.balance,
      usedBalance: subscription.usedBalance,
      createdAt: subscription.createdAt,
      updatedAt: subscription.updatedAt
    }
  }
}
