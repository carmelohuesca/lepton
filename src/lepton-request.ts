export class LeptonRequest {

    static HTTP_VERBS = {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE',
        PATCH: 'PATCH'
    };

    static MESSAGES = {
        UNDEFINED: 'url no definida',
        INVALID: 'url no valida',
        NOT_FOUND: 'url no encontrada'
    };

    method: string;
    path: string;
    query: {};
    body = {};
    headers = {};

    constructor(method?: string, path?: string) {
        return this
            .setMethod(method)
            .setPath(path);
    }

    setMethod(method?: string): LeptonRequest {
        this.method = method ? method : LeptonRequest.HTTP_VERBS.GET;
        return this;
    }

    setPath(path?: string): LeptonRequest {
        this.path = path ? path : LeptonRequest.MESSAGES.UNDEFINED;
        return this;
    }

    setBody(body?: any): LeptonRequest {
        this.body = body ? body : {};
        return this;
    }

    setQuery(query?: any): LeptonRequest {
        this.query = query ? query : {};
        return this;
    }

    setHeaders(headers?: any): LeptonRequest {
        this.headers = headers ? headers : {};
        return this;
    }

}
