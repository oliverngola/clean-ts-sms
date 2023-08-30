import AggregateRoot from '../../../@shared/domain/entity/aggregate-root.interface'
import BaseEntity from '../../../@shared/domain/entity/base.entity'
import Id from '../../../@shared/domain/value-object/id.value-object'

type SubscriptionProps = {
  id?: Id
  name: string
  status?: string
  balance: number
  usedBalance?: number
  startDate: Date
  expirationDate: Date
  createdAt?: Date
  updatedAt?: Date
}

export default class Subscription extends BaseEntity implements AggregateRoot {
  private readonly _name: string
  private readonly _status: string
  private readonly _balance: number
  private readonly _usedBalance: number
  private readonly _startDate: Date
  private readonly _expirationDate: Date

  constructor (props: SubscriptionProps) {
    super(props.id, props.createdAt, props.updatedAt)
    this._name = props.name
    this._status = props.status || 'active'
    this._balance = props.balance
    this._usedBalance = props.usedBalance || 0
    this._startDate = props.startDate
    this._expirationDate = props.expirationDate
  }

  get name (): string {
    return this._name
  }

  get status (): string {
    return this._status
  }

  get startDate (): Date {
    return this._startDate
  }

  get expirationDate (): Date {
    return this._expirationDate
  }

  get balance (): number {
    return this._balance
  }

  get usedBalance (): number {
    return this._usedBalance
  }
}
