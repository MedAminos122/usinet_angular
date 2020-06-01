export class Classe {
    private _id: number;
    private _nom: string;
    private _nbr_etudiant: number;
    private _id_iset: number;
    constructor(id: number, nom: string, nbr_etudiant: number, id_iset: number) {
        this._id = id;
        this._nom = nom;
        this._nbr_etudiant = nbr_etudiant;
        this._id_iset = id_iset;
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

    public getnbr_etudiant(): number {
        return this._nbr_etudiant;
    }
    public setnbr_etudiant(nbr_etudiant: number) {
        this._nbr_etudiant = nbr_etudiant;
    }

    public getid_iset(): number {
        return this._id_iset;
    }
    public setid_iset(id_iset: number) {
        this._id_iset = id_iset;
    }
}