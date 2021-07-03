const {HTTP_STATUS} = require('../constant/http-status');
const { HEADER } = require('../constant/header');
export class MainController {

    ok(result, res){
      res.status(HTTP_STATUS.OK);
      res.header({ 'Content-Type' : HEADER.JSON });
      return res.send(JSON.stringify(result));
    }

}