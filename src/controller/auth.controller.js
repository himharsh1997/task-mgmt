const { MainController } = require('./main.controller');

export class AuthController extends MainController {

   signup(req, res){
       try {
        super.ok(null, res); 
      } catch (error) {
       super.sendError(error, res)
      }
   }

}