/**
 * Properties photographer
 */
export default class Photographer {
  constructor(data) {
    this.this_id = data.id;
    this.this_name = data.name;
    this.this_city = data.city;
    this.this_country = data.country;
    this.this_tagline = data.tagline;
    this.this_price = data.price;
    this.this_portrait = data.portrait;
  }

  // get & set
  get id() {
    return this.this_id;
  }

  get name() {
    return this.this_name;
  }

  set name(value) {
    this.this_name = value;
  }

  get city() {
    return this.this_city;
  }

  set city(value) {
    this.this_city = value;
  }

  get country() {
    return this.this_country;
  }

  set country(value) {
    this.this_country = value;
  }

  get tagline() {
    return this.this_tagline;
  }

  set tagline(value) {
    this.this_tagline = value;
  }

  get price() {
    return this.this_price;
  }

  set price(value) {
    this.this_price = value;
  }

  get portrait() {
    return `${this.this_portrait}`;
  }
}
