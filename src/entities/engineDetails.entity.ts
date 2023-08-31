import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { ClientCar } from "./clientCar.entity.js";

@Entity()
export class EngineDetails {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fuelType: string

    @Column()
    milage: number

    @Column()
    transmission: string

    @Column()
    drivetrain: string

    @Column()
    engineCapacity: number

    @Column()
    power: number

    @OneToOne(clientCar => ClientCar, clientCar => clientCar.engineDetails, {onDelete: 'CASCADE'}) 
    @JoinColumn()
    clientCar: Relation<ClientCar>
}