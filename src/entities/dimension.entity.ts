import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { ClientCar } from "./clientCar.entity.js";

@Entity()
export class Dimension {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    length: number

    @Column()
    width: number

    @Column()
    height: number

    @Column()
    cargoVolume: number

    @OneToOne(clientCar => ClientCar, clientCar => clientCar.dimension,  {onDelete: 'CASCADE'})
    @JoinColumn()
    clientCar: Relation<ClientCar>
}