/**
 * Properties photographer
 */
export default class Photographer {
    constructor(data){
        this._id = data.id;
        this._name = data.name;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._price = data.price;
        this._portrait = data.portrait;
    }

    //get & set
    get id () {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    get city() {
        return this._city;
    }

    set city (value) {
        this._city = value;
    }

    get country() {
        return this._country;
    }

    set country (value) {
        this._country = value;
    }

    get tagline() {
        return this._tagline;
    }

    set tagline (value) {
        this._tagline = value;
    }

    get price() {
        return this._price;
    }

    set price (value) {
        this._price = value;
    }

    get portrait() {
        return `/assets/photographers/${this._portrait}`;
    }
}
