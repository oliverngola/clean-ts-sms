import { Column, Model, PrimaryKey, Table, ForeignKey, BelongsTo } from 'sequelize-typescript'
import ClientModel from '../../../client-adm/infra/repository/client.model'
import PlanModel from './plan.model'

@Table({
  tableName: 'subscriptions',
  timestamps: false
})
export default class SubscriptionModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  declare id: string

  @Column({ allowNull: false })
  declare status: string

  @Column({ allowNull: false })
  declare balance: number

  @Column({ allowNull: false, field: 'used_balance' })
  declare usedBalance: number

  @Column({ allowNull: false, field: 'start_date' })
  declare startDate: Date

  @Column({ allowNull: false, field: 'expiration_date' })
  declare expirationDate: Date

  @ForeignKey(() => ClientModel)
  @Column({ allowNull: false })
  declare client_id: string

  @BelongsTo(() => ClientModel)
  declare client: ClientModel

  @ForeignKey(() => PlanModel)
  @Column({ allowNull: false })
  declare plan_id: string

  @BelongsTo(() => PlanModel)
  declare plan: PlanModel

  @Column({ allowNull: false, field: 'created_at' })
  declare createdAt: Date

  @Column({ allowNull: false, field: 'updated_at' })
  declare updatedAt: Date
}
