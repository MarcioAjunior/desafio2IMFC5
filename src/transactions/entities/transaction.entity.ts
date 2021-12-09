import { Column, Model, PrimaryKey, Table , DataType} from "sequelize-typescript";

@Table({
    tableName : 'transactions',
    createdAt : 'created_at',
    updatedAt : 'updated_at'
})
export class Transaction extends Model{

    @PrimaryKey
    @Column({type : DataType.UUID, defaultValue : DataType.UUIDV4})
    id : string

    @Column({ 
        defaultValue : () => Math.random().toString(36).slice(2) 
     })
    account_id : string

    @Column({allowNull: false})
    amount : string

}
