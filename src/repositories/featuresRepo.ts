import { myDataSource } from "../dataSource.js";
import { Feature } from "../entities/features.entity.js";


export const featuresRepo = myDataSource.getRepository(Feature)