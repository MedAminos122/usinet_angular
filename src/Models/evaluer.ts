export class Evaluer {
    private _id: number;
    
    private _note: number;
    
   
    private _id_cour: number;
    

    private _id_etudiant: number;
    
    constructor(id:number,note:number,id_cour:number,id_etudiant:number){
        this._id=id;
        this._note=note;
        this._id_cour=id_cour;
        this._id_etudiant=id_etudiant;
    }

    public getid(): number {
        return this._id;
    }
    public setid(value: number) {
        this._id = value;
    }

    public getnote(): number {
        return this._note;
    }
    public setnote(value: number) {
        this._note = value;
    }

    public getid_cour(): number {
        return this._id_cour;
    }
    public setid_cour(value: number) {
        this._id_cour = value;
    }

    public getid_etudiant(): number {
        return this._id_etudiant;
    }
    public setid_etudiant(value: number) {
        this._id_etudiant = value;
    }
}