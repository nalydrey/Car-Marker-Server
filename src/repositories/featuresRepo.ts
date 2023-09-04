import { myDataSource } from "../dataSource.js";
import { Feature } from "../entities/features.entity.js";


export const featuresRepo = myDataSource.getRepository(Feature).extend({
    async unique (columnName: keyof Feature) {
        try{
            const uniqueArr = await this.query(`SELECT DISTINCT ${columnName} FROM FEATURE`)
            const list = uniqueArr.map(item => item[columnName])
            return list
        }
        catch{
            console.log('unique featuresRepo');
            
        }
    }
})