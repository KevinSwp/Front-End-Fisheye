/**
 * Import object from file
 */
import Photographer from "../models/Photographer.js";

/**
 * Export
 */
export const PHOTOGRAPHE_TYPES = {JSON_V1 : "JSON_V1"}

/**
 * Get JSON type
 */
export default class PhotographerFactory {
    constructor(data, type) {
        if (type === PHOTOGRAPHE_TYPES.JSON_V1) {
            return new Photographer(data);
        }

        else {
            throw "Unknown type format";
        }
    }
}
