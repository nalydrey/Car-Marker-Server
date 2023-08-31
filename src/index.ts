import { ApolloServer } from '@apollo/server';
import { myDataSource } from './dataSource.js';
import { startStandaloneServer } from '@apollo/server/standalone';
import fileUpload from 'express-fileupload'
import cors from 'cors';
import  express from 'express';
import { typeDefs } from './typeDefs.js';
import {resolvers} from './resolvers.js'

import { createClientCarPicture } from './controllers/createClientCarPictue.js';


const app = express()

app.use(cors())
app.use(fileUpload())
app.use(express.static('uploads'))
app.post('/upload', createClientCarPicture)

app.listen(4002, () => console.log('server started'))

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
  

myDataSource
  .initialize()
  .then(() => {console.log("Data Source has been initialized!")})
  .catch((err) => {console.error("Error during Data Source initialization:", err)})