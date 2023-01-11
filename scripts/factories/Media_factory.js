/**
 * Import file
 */
import Media from '../models/Media_model.js'

/**
 * Get JSON type
 */
export default class MediaFactory {
    constructor(data, type) {
        if (type === 'JSON_V1') {
            return new Media(data);
  
        } else if (type === 'JSON_V2') {
            return new MediaV2(data);

        } else {
            throw 'Unknown type format';
        }
    }
}


