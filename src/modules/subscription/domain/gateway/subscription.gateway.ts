import Subscription from '../entity/subscription.entity'

export default interface SubscriptionGateway {
  find: (id: string) => Promise<Subscription>
}
