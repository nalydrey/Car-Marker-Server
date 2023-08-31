import { clientCarsRepo } from "../repositories/clientCarsRepo.js";


export const getClientCars = async (parent, args) => {
    console.log('getClientCars');
    
    try{
        const cars = await clientCarsRepo.find()
        console.log(cars);
        return cars
    }
    catch(error){
        console.log('error getClientCars', error.message);
    }
}