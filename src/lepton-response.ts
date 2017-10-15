export class LeptonResponse {
    status: number;
    body: any;

    static HTTP_STATES = {
        SUCCCESS: 200,
        CREATE_SUCCESS: 201,
        AUTHORIZED: 202,
        NO_BODY: 204,
        DELETE_SUCCESS: 205,
        UPDATE_SUCCESS: 206,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        DUPLICATE_DATA: 422,
        INTERNAL_SERVER_ERROR: 500
    };

    constructor(status?: number) {
        return this.setStatus(status);
    }

    setStatus(status?: number): LeptonResponse {
        this.status = status ? status : LeptonResponse.HTTP_STATES.SUCCCESS;
        return this;
    }

    setBody(body?: any) {
        this.body = body;
        return this;
    }

}
