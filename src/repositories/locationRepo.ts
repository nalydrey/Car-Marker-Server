import { myDataSource } from "../dataSource.js";
import { Location } from "../entities/location.entity.js";


export const locationRepo = myDataSource.getRepository(Location)