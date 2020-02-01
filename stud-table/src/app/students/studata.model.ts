export class studata{
    public id:number;
    public name: string;
    public gender:string;
    public dept:string;
    public desc:string;

    constructor(id:number,studname:string,studgender:string,dept:string,desc:string){
        this.id=id;
        this.name=studname;
        this.gender=studgender;
        this.dept=dept;
        this.desc=desc;
    }
}