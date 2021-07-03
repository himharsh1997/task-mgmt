const app = require('express')();
const { AppConfig}  = require('./config');
const Auth0Strategy = require('passport-auth0');

const a = new Auth0Strategy({
    clientID
});


app.post('/signup');

app.post('/login');

app.post('/tasks/add');

app.put('/tasks/:id/update-status')



if(!AppConfig.STAGE || AppConfig.STAGE === 'local'){
    const PORT = 3000;
    app.listen(PORT, ()=>{
        console.log(`Listening server on port ${PORT}`);
    });
}