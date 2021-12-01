export default class ErrorSpec {
    #status;
    #code;
    #name;
    #description;
    constructor({ status, code, name, description }) {
        this.#status = status;
        this.#code = code;
        this.#name = name;
        this.#description = description;
    }

    get status() {
        return this.#status;
    }
    get code() {
        return this.#code;
    }
    get name() {
        return this.#name;
    }
    get description() {
        return this.#description;
    }

    toObject() {
        return {
            code: this.#code,
            name: this.#name,
            description: this.#description,
        };
    }
}
