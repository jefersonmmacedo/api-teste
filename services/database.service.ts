import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { 
  company?:mongoDB.Collection,
  account?:mongoDB.Collection,
  broker?:mongoDB.Collection,
  property?:mongoDB.Collection,
  favorite?:mongoDB.Collection,
  contact?:mongoDB.Collection,
  notification?:mongoDB.Collection,
  scheduling?:mongoDB.Collection,
  messages?:mongoDB.Collection,
  chats?:mongoDB.Collection,
  myPlan?:mongoDB.Collection,
  plains?:mongoDB.Collection,
  payments?:mongoDB.Collection,
  myPayments?:mongoDB.Collection,
  recuperation?:mongoDB.Collection,
  viewProperty?:mongoDB.Collection,
  myPlain?:mongoDB.Collection,
  financer?:mongoDB.Collection,
  access?:mongoDB.Collection,
  clientCompany?:mongoDB.Collection,
 } = {}

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
  await client.connect();
  const db: mongoDB.Db = client.db(process.env.DB_NAME);

      // company
      const companyCollection: mongoDB.Collection = db.collection(process.env.COMPANY_COLLECTION_NAME);
      collections.company = companyCollection;
      console.log(`Successfully connected to database: ${db.databaseName} and collection: ${companyCollection.collectionName}`);

      // client
      const accountCollection: mongoDB.Collection = db.collection(process.env.ACCOUNT_COLLECTION_NAME);
      collections.account = accountCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);

      // broker
      const brokerCollection: mongoDB.Collection = db.collection(process.env.BROKER_COLLECTION_NAME);
      collections.broker = brokerCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);
      
      // property
      const propertyCollection: mongoDB.Collection = db.collection(process.env.PROPERTY_COLLECTION_NAME);
      collections.property = propertyCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);
      
      
      // Favorite
      const favoriteCollection: mongoDB.Collection = db.collection(process.env.FAVORITE_COLLECTION_NAME);
      collections.favorite = favoriteCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);
      
      
      // Favorite
      const contactCollection: mongoDB.Collection = db.collection(process.env.CONTACT_COLLECTION_NAME);
      collections.contact = contactCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);
      
      // scheduling
      const schedulingCollection: mongoDB.Collection = db.collection(process.env.SCHEDULING_COLLECTION_NAME);
      collections.scheduling = schedulingCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);

      // Messagess
      const messagesCollection: mongoDB.Collection = db.collection(process.env.MESSAGEs_COLLECTION_NAME);
      collections.messages = messagesCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${messagesCollection.collectionName}`);

      // Messagess
      const chatCollection: mongoDB.Collection = db.collection(process.env.CHATS_COLLECTION_NAME);
      collections.chats = chatCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${chatCollection.collectionName}`);

      const notificationCollection: mongoDB.Collection = db.collection(process.env.NOTIFICATION_COLLECTION_NAME);
      collections.notification = notificationCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const recuperationCollection: mongoDB.Collection = db.collection(process.env.RECUPERATION_COLLECTION_NAME);
      collections.recuperation = recuperationCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      
      const myPaymentsCollection: mongoDB.Collection = db.collection(process.env.MYPAYMENTS_COLLECTION_NAME);
      collections.myPayments = myPaymentsCollection;

      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      const paymentsCollection: mongoDB.Collection = db.collection(process.env.PAYMENTS_COLLECTION_NAME);
      collections.payments = paymentsCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      const myPlainCollection: mongoDB.Collection = db.collection(process.env.MYPLAIN_COLLECTION_NAME);
      collections.myPlain = myPlainCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const plainsCollection: mongoDB.Collection = db.collection(process.env.PLAINS_COLLECTION_NAME);
      collections.plains = plainsCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const viewPropertyCollection: mongoDB.Collection = db.collection(process.env.VIEWPROPERTY_COLLECTION_NAME);
      collections.viewProperty = viewPropertyCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const FinancerCollection: mongoDB.Collection = db.collection(process.env.FINANCER_COLLECTION_NAME);
      collections.financer = FinancerCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const accessCollection: mongoDB.Collection = db.collection(process.env.ACCESS_COLLECTION_NAME);
      collections.access = accessCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      const clientCompanyCollection: mongoDB.Collection = db.collection(process.env.CLIENTCOMPANY_COLLECTION_NAME);
      collections.clientCompany = clientCompanyCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      }
  
