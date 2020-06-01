export class Iset {
    private _id: number;
    private _nom: string;
    private _adresse: string;
    constructor(id: number, nom: string, adresse: string) {
        this._id = id;
        this._nom = nom;
        this._adresse = adresse;
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

    public getadresse(): string {
        return this._adresse;
    }
    public setadresse(adresse: string) {
        this._adresse = adresse;
    }

}