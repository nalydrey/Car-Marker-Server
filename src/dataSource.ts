import { DataSource } from "typeorm"
import { config } from "dotenv"

config()

const {BASE_HOST, BASE_NAME, BASE_PASSWORD, BASE_USER_NAME } = process.env

export const myDataSource = new DataSource({
    type: "mysql",
    host: BASE_HOST,
    port: 3306,
    username: BASE_USER_NAME,
    password: BASE_PASSWORD,
    database: BASE_NAME,
    entities: [],
    logging: true,
    synchronize: true,
})