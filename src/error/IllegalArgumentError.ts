import {KXingError} from "./KXingError";

export default class IllegalArgumentError extends KXingError {
    private _name: string = 'IllegalArgumentError';
    private _message: string;

    constructor(message?: string) {
        super();
        this._message = message;
    }

    get name(): string {
        return this._name;
    }

    get message(): string {
        return this._message;
    }
}