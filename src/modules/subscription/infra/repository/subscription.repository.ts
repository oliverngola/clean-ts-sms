import Id from '../../../@shared/domain/value-object/id.value-object'
import Subscription from '../../domain/entity/subscription.entity'
import SubscriptionGateway from '../../domain/gateway/subscription.gateway'
import SubscriptionModel from './subscription.model'

export default class SubscriptionRepository implements SubscriptionGateway {
  async find (id: string): Promise<Subscription> {
    const subscription = await SubscriptionModel.findOne({ where: { id } })
    if (!subscription) {
      throw new Error(`Subscription with ${id} not found`)
    }
    return new Subscription({
      id: new Id(subscription.id),
      name: subscription.name,
      status: subscription.status,
      balance: subscription.balance,
      usedBalance: subscription.usedBalance,
      startDate: subscription.startDate,
      expirationDate: subscription.expirationDate,
      createdAt: subscription.createdAt,
      updatedAt: subscription.updatedAt
    })
  }
}
