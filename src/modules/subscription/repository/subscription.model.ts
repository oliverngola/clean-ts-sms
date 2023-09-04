import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table({
  tableName: 'subscriptions',
  timestamps: false
})
export default class SubscriptionModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  declare id: string

  @Column({ allowNull: false })
  declare name: string

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

  @Column({ allowNull: false, field: 'created_at' })
  declare createdAt: Date

  @Column({ allowNull: false, field: 'updated_at' })
  declare updatedAt: Date
}
