import { DataSource } from "typeorm"
import { config } from "dotenv"
import { ClientCarImage } from "./entities/clientCarImage.entity.js"
import { ClientCar } from "./entities/clientCar.entity.js"
import { Dimension } from "./entities/dimension.entity.js"
import { Location } from "./entities/location.entity.js"
import { GeneralInfo } from "./entities/generalInfo.entity.js"
import { Feature } from "./entities/features.entity.js"
import { EngineDetails } from "./entities/engineDetails.entity.js"

config()

const {BASE_HOST, BASE_NAME, BASE_PASSWORD, BASE_USER_NAME } = process.env

export const myDataSource = new DataSource({
    type: "mysql",
    host: BASE_HOST,
    port: 3306,
    username: BASE_USER_NAME,
    password: BASE_PASSWORD,
    database: BASE_NAME,
    entities: [ClientCar, Dimension, ClientCarImage,  Location, GeneralInfo, Feature, EngineDetails ],
    logging: true,
    synchronize: true,
})