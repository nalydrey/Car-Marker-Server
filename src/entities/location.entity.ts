import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { ClientCar } from "./clientCar.entity.js";


@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    country: string

    @Column()
    city: string

    @OneToOne(clientCar => ClientCar, clientCar => clientCar.location, {onDelete: 'CASCADE'})
    @JoinColumn()
    clientCar: Relation<ClientCar>
}