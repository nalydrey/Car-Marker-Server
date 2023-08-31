import { deleteFile } from "../func/deleteFile.js";
import { clientCarsRepo } from "../repositories/clientCarsRepo.js";

const {EXPRESS_HOST, EXPRESS_PORT, EXPRESS_PROTOCOL} = process.env

export const deleteClientCar = async (parent, {id}) => {
    console.log('deleteClientCar');
    try {
        const car = await clientCarsRepo.findOneBy({id})
        const deletedCar = await clientCarsRepo.delete(id)
        car.images.forEach(image => {
            const fileName = image.name.replace(`${EXPRESS_PROTOCOL}://${EXPRESS_HOST}:${EXPRESS_PORT}/`, '')
            deleteFile('uploads', fileName)
        })
        return {
            idSuccess: true,
            message: 'car and files were deleted',
            car
        }
    } catch (error) {
        console.log('error deleteClientCar', error.message);
        return {
            idSuccess: false,
            message: 'car and files were not deleted',
            car: null
        }
    }
}