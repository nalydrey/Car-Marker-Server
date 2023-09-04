import { myDataSource } from "../dataSource.js";
import { Location } from "../entities/location.entity.js";


export const locationRepo = myDataSource.getRepository(Location).extend({
    async unique (columnName: keyof Location) {
        try{
            const uniqueArr = await this.query(`SELECT DISTINCT ${columnName} FROM LOCATION`)
            const list = uniqueArr.map(item => item[columnName])
            return list
        }
        catch{
            console.log('unique locationRepo');
        }
    }
})


