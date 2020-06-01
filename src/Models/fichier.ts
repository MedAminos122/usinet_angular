export class Fichier {
    private _id: number;

    private _nom: string;

    private _extension: string;

    private _contenu: File;

    private _id_cour: number;


    constructor(id: number, nom: string, extension: string, contenu: File, id_cour: number) {
        this._id = id;
        this._nom = nom;
        this._extension = extension;
        this._contenu = contenu;
        this._id_cour = id_cour;
    }
    public getid(): number {
        return this._id;
    }
    public setid(value: number) {
        this._id = value;
    }

    public getnom(): string {
        return this._nom;
    }
    public setnom(value: string) {
        this._nom = value;
    }

    public getextension(): string {
        return this._extension;
    }
    public setextension(value: string) {
        this._extension = value;
    }

    public getcontenu(): File {
        return this._contenu;
    }
    public setcontenu(value: File) {
        this._contenu = value;
    }

    public getid_cour(): number {
        return this._id_cour;
    }
    public setid_cour(value: number) {
        this._id_cour = value;
    }
}