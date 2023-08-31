import { myDataSource } from "../dataSource.js";
import { Dimension } from "../entities/dimension.entity.js";


export const dimensionRepo = myDataSource.getRepository(Dimension)