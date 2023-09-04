import { myDataSource } from "../dataSource.js";
import { ClientCar } from "../entities/clientCar.entity.js";


export const clientCarsRepo = myDataSource.getRepository(ClientCar).extend({
    async unique (columnName: keyof ClientCar) {
        try{
            const uniqueArr = await this.query(`SELECT DISTINCT ${columnName} FROM CLIENT_CAR`)
            const list = uniqueArr.map(item => item[columnName])
            console.log(list);
            return list
        }
        catch{
            console.log('unique clientCarsRepo');
        }
    }
})