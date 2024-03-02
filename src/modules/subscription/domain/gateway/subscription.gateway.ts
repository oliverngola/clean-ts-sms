import Subscription from '../entity/subscription.entity'

export default interface SubscriptionGateway {
  add: (subscription: Subscription) => Promise<void>
  find: (id: string) => Promise<Subscription>
}
