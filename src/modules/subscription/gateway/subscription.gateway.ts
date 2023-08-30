import Subscription from '../domain/entity/subscription.entity'

export default interface SubscriptionGateway {
  find: (id: string) => Promise<Subscription>
}
