import fs from 'fs'

export const deleteFile = (path: string, fileName: string) => {
    if(fs.existsSync(`${path}/${fileName}`)){
        fs.unlink(`${path}/${fileName}`, (err) => {
            if(err){
                console.log('error in process of deleting file');
                return {
                    isDeleted: false,
                    message: 'error in process of deleting file'
                }
            }
            else{
                console.log('file is deleted');
                return {
                    isDeleted: true,
                    message: 'file is deleted'
                }
            }
        })
    }
}