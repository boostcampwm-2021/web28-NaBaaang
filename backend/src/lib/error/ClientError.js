export default class ClientError extends Error {
    #status;
    #errorCode;
    #message;
    constructor(errorCode, message) {
        super(message);
        this.#errorCode = errorCode;
        this.#status = errorCode.status;
        this.#message = message;
    }

    get status() {
        return this.#status;
    }
    get errorCode() {
        return this.#errorCode;
    }

    get message() {
        return this.#message;
    }

    toObject() {
        return {
            status: this.#status,
            errorSpec: this.#errorCode.toObject(),
            message: this.#message,
        };
    }
}
