const asyncHandler = require('express-async-handler')
const express =  require('express');
const router = express.Router();

const Movie = require('../../models').Movie;
router.post('/',asyncHandler(async function(request, response){
    const found = await Movie.findAll({
      order: [
        ['view', 'DESC'],
    ],
    });
    if(found){
        return response.status(200).send( { Status: 'Complete',
                                            movie: found});
    }else{
      return response.status(400).send({ Status:'Error.'});
    }
     
  }));
  
module.exports = router;