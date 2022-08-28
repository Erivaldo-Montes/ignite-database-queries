import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class GenresGames1661712120843 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "genres_games",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "genre_id",
                        type: "uuid"
                    },
                    {
                        name: "game_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }

                ],
                foreignKeys: [
                    {
                        name: "FKgenre",
                        referencedTableName: "genres",
                        referencedColumnNames: ["id"],
                        columnNames: ["genre_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKgame",
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
        await queryRunner.dropTable("genres_games")
    }

}
