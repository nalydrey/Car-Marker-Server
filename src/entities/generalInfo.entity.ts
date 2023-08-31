import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { ClientCar } from "./clientCar.entity.js";

@Entity()
export class GeneralInfo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    bodyType: string

    @Column()
    color: string

    @Column()
    passangerCapacity: number

    @OneToOne (clientCar => ClientCar, clientCar => clientCar.generalInfo, {onDelete: 'CASCADE'})
    @JoinColumn()
    clientCar: Relation<ClientCar>
}