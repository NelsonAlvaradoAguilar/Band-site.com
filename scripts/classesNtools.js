


export class body {
    constructor(name, comment) {
        this.name = name;
        this.comment = comment;
    }
}


let todayDate = new Date();

export const timeStamp = todayDate.toLocaleDateString();
