import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ClientCarImage } from "./clientCarImage.entity.js";
import { Feature } from "./features.entity.js";
import { Dimension } from "./dimension.entity.js";
import { EngineDetails } from "./engineDetails.entity.js";
import { GeneralInfo } from "./generalInfo.entity.js";
import { Location } from "./location.entity.js";

@Entity()
export class ClientCar {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    brand: string
    
    @Column()
    title: string
    
    @Column()
    condition: string
    
    @Column()
    price: number
    
    @Column()
    model: string
    
    @Column()
    discription: string
    
    @Column()
    year: number

    @OneToMany(()=>ClientCarImage, clientCarImage => clientCarImage.clientCar, {eager: true})
    images: ClientCarImage[]

    @ManyToMany(()=>Feature, features => features.clientCar, {eager: true})
    features: Feature[]

    @OneToOne(()=>Dimension, dimension => dimension.clientCar, {eager: true})
    dimension: Dimension

    @OneToOne(()=>EngineDetails, engineDetails => engineDetails.clientCar, {eager: true})
    engineDetails: EngineDetails

    @OneToOne(()=>GeneralInfo, generalInfo => generalInfo.clientCar, {eager: true})
    generalInfo: GeneralInfo

    @OneToOne(()=>Location, location => location.clientCar, {eager: true})
    location: Location

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}