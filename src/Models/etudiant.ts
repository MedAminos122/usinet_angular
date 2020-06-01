export class Etudiant {
    private _id: number
    private _nom: string;
    private _prenom: string;
    private _cin: number;
    private _date_naissance: Date;
    private _id_classe: number;
    constructor(id: number, nom: string, prenom: string, cin: number, date_naissance: Date, id_classe: number) {
        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
        this._cin = cin;
        this._date_naissance = date_naissance;
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



    public getprenom(): string {
        return this._prenom;
    }
    public setprenom(prenom: string) {
        this._prenom = prenom;
    }



    public getcin(): number {
        return this._cin;
    }
    public setcin(cin: number) {
        this._cin = cin;
    }


    public getdate_naissance(): Date {
        return this._date_naissance;
    }
    public setdate_naissance(date_naissance: Date) {
        this._date_naissance = date_naissance;
    }

    public getid_classe(): number {
        return this._id_classe;
    }
    public setid_classe(id_classe: number) {
        this._id_classe = id_classe;
    }


}