import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { ClientCar } from "./clientCar.entity.js";

@Entity()
export class ClientCarImage{
    @PrimaryGeneratedColumn()
    id: number

    @Column({default: null})
    name: string

    @ManyToOne(() => ClientCar, clientCar => clientCar.images, {onDelete: 'CASCADE'})
    @JoinColumn()
    clientCar: Relation<ClientCar>
 
    @CreateDateColumn()
    createdAt: Date
}