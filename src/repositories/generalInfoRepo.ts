import { myDataSource } from "../dataSource.js";
import { GeneralInfo } from "../entities/generalInfo.entity.js";


export const generalInfoRepo = myDataSource.getRepository(GeneralInfo)