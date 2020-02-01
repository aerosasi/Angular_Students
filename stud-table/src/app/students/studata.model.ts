export class studata{
    public id:number;
    public name: string;
    public gender:string;

    constructor(id:number,studname:string,studgender:string){
        this.id=id;
        this.name=studname;
        this.gender=studgender;
    }
}