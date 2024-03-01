import BaseEntity from '../../../@shared/domain/entity/base.entity'
import Id from '../../../@shared/domain/value-object/id.value-object'

type PlanProps = {
  id?: Id
  name: string
  min?: number
  max: number
  days: number
  createdAt?: Date
  updatedAt?: Date
}

export default class Plan extends BaseEntity {
  private readonly _name: string
  private readonly _min: number
  private readonly _max: number
  private readonly _days: number

  constructor (props: PlanProps) {
    super(props.id, props.createdAt, props.updatedAt)
    this._name = props.name
    this._min = props.min || 1
    this._max = props.max
    this._days = props.days
  }

  get name (): string {
    return this._name
  }

  get min (): number {
    return this._min
  }

  get max (): number {
    return this._max
  }

  get days (): number {
    return this._days
  }
}
