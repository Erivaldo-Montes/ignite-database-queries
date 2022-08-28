import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { Game } from "./Game";

@Entity("genres")
class Genre{
  @PrimaryColumn({generated: "uuid"})
  id: string;

  @Column()
  name:string;

  @ManyToMany(()=> Game)
  @JoinTable({
    name: "genres_games",
    joinColumns:[{name: "genre_id"}],
    inverseJoinColumns: [{name: "game_id"}]
  })
  games: Game[]

  @CreateDateColumn()
  created_at:Date;
  
  @UpdateDateColumn()
  updated_at:Date;
}

export {Genre}