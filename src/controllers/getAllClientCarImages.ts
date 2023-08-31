import { clientCarImageRepo } from "../repositories/clientCarImageRepo.js";

export const getAllClientCarImages = async () => {
    console.log('getAllClientCarImages');
    try{
        const images = await clientCarImageRepo.find()
        return images
    }
    catch(err){
        console.log('error getAllClientCarImages', err.message);
        
    }
    
}