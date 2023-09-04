import { myDataSource } from "../dataSource.js";
import { EngineDetails } from "../entities/engineDetails.entity.js";


export const engineDetailsRepo = myDataSource.getRepository(EngineDetails).extend({
    async unique (columnName: keyof EngineDetails) {
        try{
            const uniqueArr = await this.query(`SELECT DISTINCT ${columnName} FROM ENGINE_DETAILS`)
            const list = uniqueArr.map(item => item[columnName])
            return list
        }
        catch{
            console.log('unique engineDetailsRepo');
        }
    }
})