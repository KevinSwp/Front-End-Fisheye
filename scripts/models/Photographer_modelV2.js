class PhotographerV2 {
    constructor(data){
        this.firstname = data.firstname
        this.lastname = data.lastname
        this.name = data.name
        this.country = data.localisation.country
        this.city = data.localsiation.city 
    }

    get name() {
        return this.name
    }

    get identity(){
        return this.firstname + ' ' + this.lastname 
    }
    
}
