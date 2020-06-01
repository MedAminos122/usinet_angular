export class Livre {
    private _id: number;

    private _titre: string;

    private _nom_auteur: string;

    private _contenu: File;

    private _id_cour: number;


    constructor(id: number, titre: string, nom_auteur: string, contenu: File, id_cour: number) {
        this._id = id;
        this._titre = titre;
        this._nom_auteur = nom_auteur;
        this._contenu = contenu;
        this._id_cour = id_cour;
    }
    public getid(): number {
        return this._id;
    }
    public setid(id: number) {
        this._id = id;
    }

    public gettitre(): string {
        return this._titre;
    }
    public settitre(titre: string) {
        this._titre = titre;
    }

    public getnom_auteur(): string {
        return this._nom_auteur;
    }
    public setnom_auteur(nom_auteur: string) {
        this._nom_auteur = nom_auteur;
    }
    public getcontenu(): File {
        return this._contenu;
    }
    public setcontenu(fichier: File) {
        this._contenu = fichier;
    }

    public getid_cour(): number {
        return this._id_cour;
    }
    public setid_cour(_id_cour: number) {
        this._id_cour = _id_cour;
    }
}