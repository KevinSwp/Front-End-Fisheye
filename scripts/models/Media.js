/**
 * Properties media
 */
export default class Media {
  constructor(data) {
    this.this_id = data.id;
    this.this_photographerId = data.photographerId;
    this.this_title = data.title;
    this.this_image = data.image;
    this.this_video = data.video;
    this.this_likes = data.likes;
    this.this_date = data.date;
    this.this_price = data.price;
  }

  // get & set
  get id() {
    return this.this_id;
  }

  get photographerId() {
    return this.this_photographerId;
  }

  set photographerId(value) {
    this.this_photographerId = value;
  }

  get title() {
    return this.this_title;
  }

  set title(value) {
    this.this_title = value;
  }

  get image() {
    if (this.this_image === undefined) {
      return undefined;
    }

    return `${this.this_image}`;
  }

  get video() {
    if (this.this_video === undefined) {
      return undefined;
    }
    return `${this.this_video}`;
  }

  get likes() {
    return this.this_likes;
  }

  set likes(value) {
    this.this_likes = value;
  }

  get date() {
    return this.this_date;
  }

  set date(value) {
    this.this_date = value;
  }

  get price() {
    return this.this_price;
  }

  set price(value) {
    this.this_price = value;
  }
}
