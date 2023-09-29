export class Pokemon {
    id: number;
    name: string;
    type: string[];
    description: string;
    photo: string;
    status: string[];

    constructor(id: number, name: string, type: string[], description: string, photo: string, status: string[]) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.photo = photo;
        this.status = status;
    }
}