/**
 * Import object from file
 */
import Media from '../models/Media.js';

/**
 * Get JSON type
 */
export default class MediaFactory {
  constructor(data, type) {
    this.objData = data;
    this.objType = type;
    if (type === 'JSON_V1') {
    return new Media(data);
    }
  throw 'Unknown type format';
  }
}
