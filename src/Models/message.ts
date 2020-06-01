export class Message {
    private _id: number;

    private _text: string;

    private _id_etudiant: number;


    private _id_enseignant: number;


    private _id_discussion: number;

    constructor(id: number, text: string, id_etudiant: number, id_enseignant: number, id_discussion: number) {
        this._id = id;
        this._text = text;
        this._id_etudiant = id_etudiant;
        this._id_enseignant = id_enseignant;
        this._id_discussion = id_discussion;

    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get text(): string {
        return this._text;
    }
    public set text(value: string) {
        this._text = value;
    }
    public get id_etudiant(): number {
        return this._id_etudiant;
    }
    public set id_etudiant(value: number) {
        this._id_etudiant = value;
    }

    public get id_enseignant(): number {
        return this._id_enseignant;
    }
    public set id_enseignant(value: number) {
        this._id_enseignant = value;
    }
    public get id_discussion(): number {
        return this._id_discussion;
    }
    public set id_discussion(value: number) {
        this._id_discussion = value;
    }
}