import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClientCar } from "./clientCar.entity.js";

@Entity()
export class Feature{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true
    })
    name: string

    @ManyToMany(clientCar => ClientCar, clientCar => clientCar.features) 
    @JoinTable()
    clientCar: ClientCar[]
}
