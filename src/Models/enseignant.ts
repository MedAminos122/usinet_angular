export class Enseignant {
    private _id: number
    private _nom: string;
    private _prenom: string;
    private _cin: number;
    private _date_naissance: Date;
    private _id_cour: number;
    private _id_fichier: number;
    constructor(id: number, nom: string, prenom: string, cin: number, date_naissance: Date, id_cour: number, id_fichier) {
        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
        this._cin = cin;
        this._date_naissance = date_naissance;
        this._id_cour = id_cour;
        this._id_fichier = id_fichier;
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

    public getid_cour(): number {
        return this._id_cour;
    }
    public setid_cour(id_cour: number) {
        this._id_cour = id_cour;
    }

    public getid_fichier(): number {
        return this._id_fichier;
    }
    public setid_fichier(id_fichier: number) {
        this._id_fichier = id_fichier;
    }
}