import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1661648380077 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "game_id",
                        type: "uuid"
                    },
                    {
                        name: "isFinaly",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKGame",
                        referencedTableName: "games",
                        referencedColumnNames: ["id"],
                        columnNames: ["game_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
                
  
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("orders", "FKUser");

        await queryRunner.dropForeignKey("orders", "FKGame");        

        await queryRunner.dropTable("orders")
    }

}
