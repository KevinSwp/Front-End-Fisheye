class Photographer {
    constructor(data){
        // this.identity = data.identity
        this.name = data.name;
        this.city = data.city;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
    }

    // get identity(){
    //     return this.identity 
    // }

    get name() {
        return this.name;
    }

    get city() {
        return this.city;
    }

    get country() {
        return this.country;
    }

    get tagline() {
        return this.tagline;
    }

    get price() {
        return this.price;
    }

    get portrait() {
        return `assets/photographers/${this.portrait}`;
    }
}
