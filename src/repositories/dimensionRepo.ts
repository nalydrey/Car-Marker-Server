import { myDataSource } from "../dataSource.js";
import { Dimension } from "../entities/dimension.entity.js";


export const dimensionRepo = myDataSource.getRepository(Dimension).extend({
    async unique (columnName: keyof Dimension) {
        try{
            const uniqueArr = await this.query(`SELECT DISTINCT ${columnName} FROM DIMENSION`)
            const list = uniqueArr.map(item => item[columnName])
            return list
        }
        catch{
            console.log('unique dimensionRepo');
        }
    }
})