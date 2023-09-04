export const typeDefs = `#graphql

  type Lists {
    countries: [String!]!
    cities:  [String!]!
    brands: [String!]!
    models: [String!]!
    years: [String!]!
    bodyTypes: [String!]!
    colors: [String!]!
    fuelTypes: [String!]!
    transmissions:  [String!]!
    drivetrains: [String!]!
    features: [String!]!
  }

  type ClientCar {
    id: Int!
    images: [ClientCarImage]
    title: String!
    condition: String!
    price: Int
    brand: String!
    model: String!
    year: Int
    discription: String
    generalInfo: GeneralInfo
    dimension: Dimension
    engineDetails: EngineDetails
    location: Location
    features: [Feature]
  }

  type GeneralInfo {
    bodyType: String
    color: String
    passangerCapacity: Int
  }

  type Dimension {
    length: Int
    width: Int
    height: Int
    cargoVolume: Int
  }

  type EngineDetails {
    fuelType: String
    milage: Int
    transmission: String
    drivetrain: String
    engineCapacity: Int
    power: Int
  }

  type Location {
    country: String
    city: String
  }

  type Feature {
    id: Int
    name: String
  }

  type ClientCarImage {
    id: Int!
    name: String! 
    createdAt: String!
  }

  type MutationClientCar {
    isSuccess: Boolean!
    message: String!
    car: ClientCar
  }

  input SellForm {
    title: String!
    condition: String!
    picturesId: [Int]
    price: Int
    brand: String!
    model: String!
    year: Int
    discription: String
    generalInfo: GeneralInfoInput
    dimension: DimensionInput
    engineDetails: EngineDetailsInput
    location: LocationInput
    features: [String]
  }

  input GeneralInfoInput {
    bodyType: String
    color: String
    passangerCapacity: Int
  }

  input DimensionInput {
    length: Int
    width: Int
    height: Int
    cargoVolume: Int
    }

  input EngineDetailsInput {
    fuelType: String
    milage: Int
    transmission: String
    drivetrain: String
    engineCapacity: Int
    power: Int
  }

  input LocationInput {
    country: String
    city: String
  }

  type Query {
    clientCars: [ClientCar]
    clientCarimages: [ClientCarImage]
    lists: Lists
  }

  type Mutation {
    createClientCar(car: SellForm): MutationClientCar
    deleteCar(id: Int!): MutationClientCar
  }
`;