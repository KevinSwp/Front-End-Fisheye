/**
 * Import object from file
 */
import Photographer from '../models/Photographer.js';

/**
 * 
 */
export const PHOTOGRAPHE_TYPES = {
    JSON_V1 : 'JSON_V1',
    // JSON_V2 : 'JSON_V2'
 }

/**
 * Get JSON type
 */
export default class PhotographerFactory {
    constructor(data, type) {
        if (type === PHOTOGRAPHE_TYPES.JSON_V1) {
            return new Photographer(data);
        }

        else {
            throw 'Unknown type format';
        }

       //switch(type){
       //    case PHOTOGRAPHE_TYPES.JSON_V1:
       //        return new Photographer(data);
       //        break;

       //    case PHOTOGRAPHE_TYPES.JSON_V2:
       //        return new PhotographerV2(data);
       //        break;
       //        

       //    default:
       //        throw 'Unknown type format';
       //}
    }
}
