import { LeptonRequest } from './lepton-request';
import { LeptonResponse } from './lepton-response';

export class Lepton {

    static STATES = {
        UNNAMED: 'UNNAMED STATE',
        NO_ITEMS: 'NO HAY ELEMENTOS',
        NOT_FOUND: 'NO ENCONTRADO'
    };

    static UPON_RECEIVING = {
        DEFAULT: 'UNNAMED UPON RECEIVING',
        NOT_FOUND: 'El recurso no existe o no se ha encontrado'
    };

    state: string;
    uponReceiving: string = Lepton.UPON_RECEIVING.DEFAULT;
    withRequest: LeptonRequest;
    willRespondWith: any = {};

    constructor() {
        this.withRequest = new LeptonRequest();
        this.willRespondWith = new LeptonResponse();
        return this.setState();
    }

    setState(state?: string): Lepton {
        this.state = state ? state : Lepton.STATES.UNNAMED;
        return this;
    }

    setUponReceiving(uponReceiving?: string): Lepton {
        this.uponReceiving = uponReceiving ? uponReceiving : Lepton.UPON_RECEIVING.DEFAULT;
        return this;
    }

    setRequest(method: string, path: string): Lepton {
        this.withRequest = new LeptonRequest(method, path);
        return this;
    }

    setResponse(status: number): Lepton {
        this.willRespondWith = new LeptonResponse(status ? status : LeptonResponse.HTTP_STATES.SUCCCESS);
        return this;
    }

}
