import { ClientCar } from "../entities/clientCar.entity.js";
import { Dimension } from "../entities/dimension.entity.js";
import { EngineDetails } from "../entities/engineDetails.entity.js";
import { Feature } from "../entities/features.entity.js";
import { GeneralInfo } from "../entities/generalInfo.entity.js";
import { Location } from "../entities/location.entity.js";
import { clientCarImageRepo } from "../repositories/clientCarImageRepo.js";
import { clientCarsRepo } from "../repositories/clientCarsRepo.js";
import { dimensionRepo } from "../repositories/dimensionRepo.js";
import { engineDetailsRepo } from "../repositories/engineDetailsRepo.js";
import { featuresRepo } from "../repositories/featuresRepo.js";
import { generalInfoRepo } from "../repositories/generalInfoRepo.js";
import { locationRepo } from "../repositories/locationRepo.js";
import { fillEntity } from "../func/fillEntity.js";



export const createClientCar = async (parent, {car}) => {
    console.log('createClientCar'); 
    try{
        console.log(car);
        //CAR
        const newCar = new ClientCar()
        newCar.brand = car.brand
        newCar.condition = car.condition
        newCar.discription = car.discription
        newCar.model = car.model
        newCar.year = car.year
        newCar.price = car.price
        newCar.title = car.title
        const createdCar = await clientCarsRepo.save(newCar)

        //LOCATION
        await fillEntity(locationRepo, Location, car, 'location', createdCar)
        //ENGINE DETAILS
        await fillEntity(engineDetailsRepo, EngineDetails, car, 'engineDetails', createdCar)
        //GENERAL INFO
        await fillEntity(generalInfoRepo, GeneralInfo, car, 'generalInfo', createdCar)
        //DIMENSION
        await fillEntity(dimensionRepo, Dimension, car, 'dimension', createdCar)

        await clientCarImageRepo.update(car.picturesId, {clientCar: createdCar})
        
        await Promise.all(car.features.map(async (name) => {
            const item = await featuresRepo.findOne({where: {name}, relations: {clientCar: true}})
            if(!item){
                const newFeatures = new Feature()
                newFeatures.name = name
                newFeatures.clientCar = [createdCar]
                await featuresRepo.save(newFeatures)
            }
            else{
                item.clientCar = [...item.clientCar, createdCar]
                await featuresRepo.save(item)
            }
        }))

        const completeCar = await clientCarsRepo.findOneBy({id: createdCar.id})
        
        console.log('cars', completeCar);
        return {
            isSuccess: true,
            message: "Car wasn't add",
            car: completeCar
        }
    }
    catch(error) {
        console.log('error createClientCar', error.message);
        return {
                isSuccess: false,
                message: "Car wasn't add",
                car: null
        }
    }
}

