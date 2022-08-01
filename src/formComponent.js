export class MyForm {

    constructor(name = "", gender = "", region = "", type = []) { // assigning defaults in the parameter
            this.name = name,
            this.region = region,
            this.gender = gender,
            this.type = type
    }


    getInfo() {
        return {
            name: this.name,
            gender: this.gender,
            region: this.region,
            type: this.type
        }
    }

}
