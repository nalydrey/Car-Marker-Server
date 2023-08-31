import {Request, Response} from 'express'
import { ClientCarImage } from '../entities/clientCarImage.entity.js';
import { clientCarImageRepo } from '../repositories/clientCarImageRepo.js';

const {EXPRESS_HOST, EXPRESS_PORT, EXPRESS_PROTOCOL} = process.env

export const createClientCarPicture = async(req: Request, res: Response) => {
    console.log('createPhoto');
      try{
        const files = req.files
        const fileList = Object.values(files).map(file => {
          if(!Array.isArray(file)){
            const newName = Date.now().toString()+file.name
            file.mv('uploads/'+ newName)
            const newPicture = new ClientCarImage()
            newPicture.name = `${EXPRESS_PROTOCOL}://${EXPRESS_HOST}:${EXPRESS_PORT}/${newName}` 
            return newPicture
          }
        })
        const createdImages = await clientCarImageRepo.save(fileList)
        res.json({
          isSuccess: true,
          message: 'pictures were created',
          images: createdImages
        })
      }
      catch(err){
        console.log('createPhoto', err.message);
        res.json({
          isSuccess: false,
          message: 'pictures were not created',
          images: null
        })
      }
    
  }