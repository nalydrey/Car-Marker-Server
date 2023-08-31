import { myDataSource } from "../dataSource.js";
import { EngineDetails } from "../entities/engineDetails.entity.js";


export const engineDetailsRepo = myDataSource.getRepository(EngineDetails)