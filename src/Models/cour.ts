export class Cour {
    private _id: number;
    private _nom: string;
    private _niveau: number;
    private _id_classe: number;
    constructor(id: number, nom: string, niveau: number, id_classe: number) {
        this._id = id;
        this._nom = nom;
        this._niveau = niveau;
        this._id_classe = id_classe;
    }
    public getid(): number {
        return this._id;
    }
    public setid(id: number) {
        this._id = id;
    }

    public getnom(): string {
        return this._nom;
    }
    public setnom(nom: string) {
        this._nom = nom;
    }

    public getniveau(): number {
        return this._niveau;
    }
    public setniveau(niveau: number) {
        this._niveau = niveau;
    }

    public getid_classe(): number {
        return this._id_classe;
    }
    public setid_classe(id_classe: number) {
        this._id_classe = id_classe;
    }
}