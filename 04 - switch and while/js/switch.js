const currentDay = 'thu';

switch(currentDay){
    case 'mon':
        console.log("I'ts monday!");
        // break;
    case 'tue':
        console.log("I'ts tuesday!");
        // break;
    case 'wed':
        console.log("I'ts wednesday!");
        // break;
    case 'thu':
        console.log("I'ts thursday!");
        // break;
    case 'fri':
        console.log("I'ts friday!");
        // break;
    case 'sat':
        console.log("I'ts saturday!");
        // break;
    case 'sun':
        console.log("I'ts sunday!");
        break;
    default:
        console.log("Error");
}

// Bra för läsbarheten
const PAGE_NOT_FOUND = 404;
const SERVER_DOWN = 500;

const errorCode = 404;

switch(errorCode){

    case PAGE_NOT_FOUND:
        console.log('...')
        break;

    case SERVER_DOWN:
        console.log('...')
        break;
}
