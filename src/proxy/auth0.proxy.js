const { AppConfig } = require('../../config');
const { HEADER }= require('../constant/header');

export class Auth0Proxy {

    signup(user){
        try{
            console.log('Signing up company user in Auth0...');
            const url = `${AppConfig.AUTH0_DOMAIN}/dbconnections/signup`;
            const payload = {
              client_id: AppConfig.AUTH0_CLIENTID,
              connection: 'Username-Password-Authentication',
              email: userInfo.email,
              password: user.password,
              name: `${user.firstName} ${user.lastName}`
            };
            const params = {
            method: 'POST',
            headers: { 'Content-Type': HEADER.JSON },
            body: JSON.stringify(payload)
        };
            const res = await fetch(url, params);
            return res.json();
       } catch(err){
            throw err;
      }
    }

    async login(user) {
        try {
          const url = `${AppConfig.AUTH0_DOMAIN}/oauth/token`;
          const payload = {
            client_id: AppConfig.AUTH0_CLIENTID,
            client_secret: AppConfig.AUTH0_SECRET,
            username: user.username,
            password: user.password,
            grant_type: 'password',
            scope: 'offline_access'
          };
          const params = {
            method: 'POST',
            headers: { 'Content-Type': HEADER.JSON },
            body: JSON.stringify(payload)
          };
          const res = await fetch(url, params);
          return res.json();
        } catch (err) {
          throw err;
        }
      }
}