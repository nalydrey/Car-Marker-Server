import { clientCarsRepo } from "../repositories/clientCarsRepo.js";
import { engineDetailsRepo } from "../repositories/engineDetailsRepo.js";
import { featuresRepo } from "../repositories/featuresRepo.js";
import { generalInfoRepo } from "../repositories/generalInfoRepo.js";
import { locationRepo } from "../repositories/locationRepo.js";


export const cityList = async () => {
    console.log('cityList');
    try {
        const cities = await locationRepo.unique('city')
        return cities
    } catch (error) {
        console.log('error cityList', error.message);
        return []
    }
}
export const countryList = async () => {
    console.log('countryList');
    try {
        const countries = await locationRepo.unique('country')
        return countries
    } catch (error) {
        console.log('error countryList', error.message);
        return []
    }
}
export const brandList = async () => {
    console.log('brandList');
    try {
        const brands = await clientCarsRepo.unique('brand')
        return brands
    } catch (error) {
        console.log('error brandList', error.message);
        return []
    }
}
export const modelList = async () => {
    console.log('modelList');
    try {
        const models = await clientCarsRepo.unique('model')
        return models
    } catch (error) {
        console.log('error modelList', error.message);
        return []
    }
}
export const yearList = async () => {
    console.log('yearList');
    try {
        const years = await clientCarsRepo.unique('year')
        return years
    } catch (error) {
        console.log('error yearList', error.message);
        return []
    }
}
export const bodyTypeList = async () => {
    console.log('bodyTypeList');
    try {
        const bodyTypes = await generalInfoRepo.unique('bodyType')
        return bodyTypes
    } catch (error) {
        console.log('error bodyTypeList', error.message);
        return []
    }
}
export const colorList = async () => {
    console.log('colorList');
    try {
        const colors = await generalInfoRepo.unique('color')
        return colors
    } catch (error) {
        console.log('error colorList', error.message);
        return []
    }
}
export const fuelTypeList = async () => {
    console.log('fuelTypeList');
    try {
        const fuelTypes = await engineDetailsRepo.unique('fuelType')
        return fuelTypes
    } catch (error) {
        console.log('error fuelTypeList', error.message);
        return []
    }
}
export const transmissionList = async () => {
    console.log('transmissionList');
    try {
        const transmissions = await engineDetailsRepo.unique('transmission')
        return transmissions
    } catch (error) {
        console.log('error transmissionList', error.message);
        return []
    }
}
export const drivetrainList = async () => {
    console.log('drivetrainList');
    try {
        const drivetrains = await engineDetailsRepo.unique('drivetrain')
        return drivetrains
    } catch (error) {
        console.log('error drivetrainList', error.message);
        return []
    }
}
export const featuresList = async () => {
    console.log('featuresList');
    try {
        const features = await featuresRepo.unique('name')
        return features
    } catch (error) {
        console.log('error featuresList', error.message);
        return []
    }
}
