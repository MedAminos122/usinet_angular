export class Message {
    private _id: number;

    private _date_discussion: Date;

    private _sujet: string;

    constructor(id: number, date_discussion: Date, sujet: string) {
        this._id = id;
        this._date_discussion = date_discussion;
        this._sujet = sujet;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get date_discussion(): Date {
        return this._date_discussion;
    }
    public set date_discussion(value: Date) {
        this._date_discussion = value;
    }
    public get sujet(): string {
        return this._sujet;
    }
    public set sujet(value: string) {
        this._sujet = value;
    }
}