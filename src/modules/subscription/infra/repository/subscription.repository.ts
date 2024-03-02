import Id from '../../../@shared/domain/value-object/id.value-object'
import Client from '../../domain/entity/client.entity'
import Plan from '../../domain/entity/plan.entity'
import Subscription from '../../domain/entity/subscription.entity'
import SubscriptionGateway from '../../domain/gateway/subscription.gateway'
import SubscriptionModel from './subscription.model'

export default class SubscriptionRepository implements SubscriptionGateway {
  async find (id: string): Promise<Subscription> {
    const subscription = await SubscriptionModel.findOne({ where: { id }, include: ['plan', 'client'] })
    if (!subscription) {
      throw new Error(`Subscription with ${id} not found`)
    }
    return new Subscription({
      id: new Id(subscription.id),
      plan: new Plan({
        id: new Id(subscription.plan.id),
        name: subscription.plan.name,
        min: subscription.plan.min,
        max: subscription.plan.max,
        days: subscription.plan.days,
        createdAt: subscription.plan.createdAt,
        updatedAt: subscription.plan.updatedAt
      }),
      client: new Client({
        id: new Id(subscription.client.id),
        name: subscription.client.name,
        address: `${subscription.client.city} - ${subscription.client.zipCode}`,
        email: subscription.client.email
      }),
      status: subscription.status,
      balance: subscription.balance,
      usedBalance: subscription.usedBalance,
      startDate: subscription.startDate,
      expirationDate: subscription.expirationDate,
      createdAt: subscription.createdAt,
      updatedAt: subscription.updatedAt
    })
  }

  async add (subscription: Subscription): Promise<void> {

  }
}
