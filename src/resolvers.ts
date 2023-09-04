import { createClientCar } from "./controllers/createClientCar.js";
import { deleteClientCar } from "./controllers/deleteClientCar.js";
import { getAllClientCarImages } from "./controllers/getAllClientCarImages.js";
import { getClientCars } from "./controllers/getClientCars.js";
import { bodyTypeList, brandList, cityList, colorList, countryList, drivetrainList, featuresList, fuelTypeList, modelList, transmissionList, yearList } from "./controllers/getLists.js";



export const resolvers = {
    Lists: {
      countries: countryList,
      cities:  cityList,
      brands: brandList,
      models: modelList,
      years: yearList,
      bodyTypes: bodyTypeList,
      colors: colorList,
      fuelTypes: fuelTypeList,
      transmissions:  transmissionList,
      drivetrains: drivetrainList,
      features: featuresList
    },
    Query: {
      clientCars: getClientCars,
      clientCarimages: getAllClientCarImages,
      lists: () => {return {}}
    },

    Mutation: {
      createClientCar, 
      deleteCar: deleteClientCar
    },

  
  };