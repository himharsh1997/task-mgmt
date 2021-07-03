export class AppConfig {
   static STAGE = process.env.STAGE;
   static MONGO_URI = process.env.MONGO_URI;
   static AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
   static AUTH0_CLIENTID = process.env.AUTH0_CLIENTID;
   static AUTH0_SECRET = process.env.AUTH0_SECRET;
}