import { myDataSource } from "../dataSource.js";
import { ClientCarImage } from "../entities/clientCarImage.entity.js";


export const clientCarImageRepo = myDataSource.getRepository(ClientCarImage)