import { myDataSource } from "../dataSource.js";
import { ClientCar } from "../entities/clientCar.entity.js";


export const clientCarsRepo = myDataSource.getRepository(ClientCar)