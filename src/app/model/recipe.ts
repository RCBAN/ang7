export interface Instruction {
    instruction: string;
    photo: string;
}
export interface Ingredient {
    measure: string;
    photo: string;
}
export class Recipe {
    public title: string;
    public description: string;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public cover_photo: string;

    public constructor(t: string, d: string, ing: Ingredient[], ins: Instruction[], coverpic: string){
        this.title = t;
        this.description = d;
        this.ingredients = ing;
        this.instructions = ins;
        this.cover_photo = coverpic;
    }
}


