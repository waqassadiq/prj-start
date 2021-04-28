import { ThrowStmt } from "@angular/compiler";

export class Recipe{
    public name: string;
    public description: String;
    public imagePath: String;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}