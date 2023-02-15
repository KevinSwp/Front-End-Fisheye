/**
 * Properties media
 */
export default class Media {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._image = data.image;
        this._video = data.video;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
    }

    // get & set
    get id() {
        return this._id;
    }

    get photographerId() {
        return this._photographerId;
    }

    set photographerId(value) {
        this._photographerId = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get image() {
        if (this._image === undefined ) {
            return undefined
        }

        return `/assets/samplePhotos/${this._image}`;
    }

    get video() {
        if (this._video === undefined ) {
            return undefined
        }
        return `/assets/samplePhotos/${this._video}`;
    }
    
    get likes() {
        return this._likes;
    }

    set likes(value) {
        this._likes = value;
    }
    
    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }
    
    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}