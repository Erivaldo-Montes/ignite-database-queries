import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { Game } from "../../games/entities/Game";
import { User } from "./User";

@Entity("orders")
class Order{
  @PrimaryColumn({generated: "uuid"})
  id:string;

  @Column()
  user_id:string;

  @ManyToOne(() => User)
  @JoinColumn({name:"user_id"})
  user:User

  @ManyToOne(() => Game)
  @JoinColumn({name: "game_id"})
  game:Game

  @Column()
  game_id: string;

  @Column()
  isFinaly: Boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export {Order}