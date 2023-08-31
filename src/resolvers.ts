import { createClientCar } from "./controllers/createClientCar.js";
import { deleteClientCar } from "./controllers/deleteClientCar.js";
import { getAllClientCarImages } from "./controllers/getAllClientCarImages.js";
import { getClientCars } from "./controllers/getClientCars.js";



export const resolvers = {
    Query: {
      clientCars: getClientCars,
      clientCarimages: getAllClientCarImages
    },

    Mutation: {
      createClientCar, 
      deleteCar: deleteClientCar
    }
  };