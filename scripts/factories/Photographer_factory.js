/**
 * Import file
 */
import Photographer from '../models/Photographer_model.js'

/**
 * 
 */
export default class PhotographerFactory {
    constructor(data, type) {
        if (type === 'JSON_V1') {
            return new Photographer(data);
  
        } else if (type === 'JSON_V2') {
            return new PhotographerV2(data);

        } else {
            throw 'Unknown type format';
        }
    }
}


