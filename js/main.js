/* 
LOGIC

Use Import functions from modules for nameDistance from modules into javascript function
Use Javascript to import variables values for keyboard and distance
Return the values from there

*/

/* Import helper functions
// console.log('DEBUG: Main js hit');
// if (typeof document !== "undefined") {
//     console.log('document exists')
// } else {
//     console.log('document does not exist')
*/ 

import nameDistance from '../modules/AstarModules/nameDistance.mjs';

// DEFINE TEST CONSTANTS
// let name = "Marissa"
// let keyboard = "qwerty"
// htmlDistance('Scott', 'qwerty')

function htmlDistance(name, keyboard) {
    let data = nameDistance(name, keyboard)
    console.log(data);
    return data
}

