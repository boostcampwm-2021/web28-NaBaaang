function Request(
    url,
    method,
    authToken,
    body
) {
    this.url = url;
    this.method = method;
    this.authToken = authToken;
    this.body = body;

    const generateHeader = () => {
        let headers = {
            'Content-Type': 'application/json;charset=UTF-8',
        };

        if (this.authToken) {
            headers = {
                ...headers,
                Authorization: `Bearer ${authToken.accessToken}`,
                refresh: `${authToken.refreshToken}`,
            };
        }
        return headers;
    };

    const generateBody = () => {
        return this.body ?
            {
                body: JSON.stringify(this.body),
            } :
            {};
    };

    const assemble = () => {
        switch (this.method) {
            case 'HEAD':
                return {
                    url: this.url,
                        option: {
                            method: this.method,
                        },
                };
            case 'GET':
            case 'POST':
            case 'PATCH':
                return {
                    url: this.url,
                        option: {
                            method: this.method,
                            headers: {
                                ...generateHeader(),
                            },
                            ...generateBody(),
                        },
                };
            default:
                return {};
        }
    };
    return assemble();
}

function RequestBuilder() {
    return {
        url(urlValue) {
            this.urlValue = urlValue;
            return this;
        },
        method(methodValue) {
            this.methodValue = methodValue;
            return this;
        },
        authToken() {
            this.authTokenValue = {
                accessToken: `${window.localStorage.accessToken}`,
                refreshToken: `${window.localStorage.refreshToken}`,
            };
            return this;
        },
        body(bodyValue) {
            this.bodyValue = bodyValue;
            return this;
        },
        build() {
            return new Request(
                this.urlValue,
                this.methodValue,
                this.authTokenValue,
                this.bodyValue,
            );
        },
    };
}

export {
    Request,
    RequestBuilder
};