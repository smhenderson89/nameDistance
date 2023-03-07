/* Route for finding out the name Distance for a given persons name

INPUT: request parameter from frontend request
FUNCTIONS:
- Astar.mjs
- constants.mjs
- sliceName.mjs
- nameDistance.mjs

OUTPUT: JSON array to return to front end

*/

import express from 'express';
import cors from "cors" // Enable CORS
import nameDistance from '../modules/AstarModules/nameDistance.mjs'
var router = express.Router();

router.get('/test', function(req, res, next){
    res.send('testing route');
})

router.get('/:keyboard&:name', cors(), function(req, res, next) {
    var keyboard = req.params.keyboard;
    var name = req.params.name;
    // console.log(keyboard);
    // console.log(name);
    var nameData = nameDistance(name, keyboard)
    res.status(200).json({
        result : true, 
        data : nameData})
});

export default router;



