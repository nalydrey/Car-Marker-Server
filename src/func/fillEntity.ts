import { Repository } from "typeorm"

export const fillEntity = async <Entity>(repo: Repository<Entity>, cb, object: object, name: string, createdObj ) => {
    const newObj: Entity = new cb()
    Object.entries(object).forEach(([key, value]) => {
        if(key === name){
            Object.entries(value).forEach(([key2, value2]) => {
                newObj[key2] = value2
            })
        }
    })
    newObj['clientCar'] = createdObj
    return await repo.save(newObj)
}