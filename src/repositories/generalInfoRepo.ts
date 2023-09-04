import { myDataSource } from "../dataSource.js";
import { GeneralInfo } from "../entities/generalInfo.entity.js";


export const generalInfoRepo = myDataSource.getRepository(GeneralInfo).extend({
    async unique (columnName: keyof GeneralInfo) {
        try{
            const uniqueArr = await this.query(`SELECT DISTINCT ${columnName} FROM GENERAL_INFO`)
            const list = uniqueArr.map(item => item[columnName])
            return list
        }
        catch{
            console.log('unique generalInfoRepo');
            
        }
    }
})