let Vector = function (cords) {
    this.cords = cords;
    this.add = function (vector) {
        if (this.cords.length !== vector.cords.length) {
            throw new Error('Vectors must have the same length for addition.');
        }

        let result = [];
        for (let i = 0; i < this.cords.length; i++) {
            result.push(this.cords[i] + vector.cords[i]);
        }
        return new Vector(result);
    }
    this.subtract = function (vector){
        if (this.cords.length !== vector.cords.length) {
            throw new Error('Vectors must have the same length to subtract .');
        }

        let result = [];
        for (let i = 0; i < this.cords.length; i++) {
            result.push(this.cords[i] - vector.cords[i]);
        }
        return new Vector(result);
    }
    this.dot = function (vector){
        if (this.cords.length !== vector.cords.length) {
            throw new Error('Vectors must have the same length to subtract .');
        }

        let result = 0;
        for (let i = 0; i < this.cords.length; i++) {
            result += this.cords[i] * vector.cords[i];
        }
        return result;
    }
    this.norm = function (){
        let result = 0;
        for (let i = 0; i < this.cords.length; i++) {
            result += this.cords[i] * this.cords[i];
        }
        return Math.sqrt(result);
    }
    this.toString = function (){
        return "(" + this.cords.toString() + ")";
    }
    this.equals = function (vector){
        let isEqual = true;
        for (let i = 0; i < vector.cords.length; i++) {
            if (this.cords[i] !== vector.cords[i]) isEqual = false;
        }
        if (this.cords.length !== vector.cords.length) isEqual = false;
        return isEqual;
    }
}