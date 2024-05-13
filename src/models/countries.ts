export class Countries {
    public name:string="";
    public coords:string="";
    public path : string = "";    

    constructor(name:string,coords:string,path : string){
        this.name = name;
        this.coords = coords;
        this.path =  path;
    }
}
