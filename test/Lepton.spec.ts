/// <reference path='../typings/index.d.ts' />

import { Lepton } from './../src/Lepton';
import { LeptonRequest } from '../src/lepton-request';
import { LeptonResponse } from './../src/lepton-response';
const DEFAULT_ROUTE = 'ruta_al_sitio';
const HEADERS = {
    'Accept-Language': 'es-ES',
    'Accept-Type': 'Application/json',
    'Authorization': 'Bearer token'
};

const INTERACTION = {
    state: Lepton.STATES.NO_ITEMS,
    uponReceiving: Lepton.UPON_RECEIVING.NOT_FOUND,
    withRequest: {
        method: LeptonRequest.HTTP_VERBS.GET,
        path: DEFAULT_ROUTE,
        headers: HEADERS
    },
    willRespondWith: {
        status: LeptonResponse.HTTP_STATES.NOT_FOUND
    }
};

const INTERACTION_TWO = new Lepton()
    .setState(Lepton.STATES.NO_ITEMS)
    .setRequest(LeptonRequest.HTTP_VERBS.GET, DEFAULT_ROUTE)
    .setResponse(LeptonResponse.HTTP_STATES.NOT_FOUND)
    .setUponReceiving(Lepton.UPON_RECEIVING.NOT_FOUND);

INTERACTION_TWO.withRequest
    .setQuery()
    .setBody()
    .setHeaders(HEADERS);

describe('Lepton', () => {

    let instance: Lepton;
    let leptonRequest: LeptonRequest;
    let leptonResponse: LeptonResponse;

    beforeEach(() => {
        instance = new Lepton();
    });

    it('existe la instancia', () => {
        expect(instance).toBeDefined();
    });

    describe('tiene las propiedades', () => {
        describe('state', () => {
            it('existe la propiedad', () => {
                expect(instance.state).toBeDefined();
            });
            it('el valor por defecto es ' + `${Lepton.STATES.UNNAMED}`, () => {
                expect(instance.state).toBe(Lepton.STATES.UNNAMED);
            });
        });
        describe('uponReceiving', () => {
            it('existe la propiedad', () => {
                expect(instance.uponReceiving).toBeDefined();
            });
            it('el valor por defecto es ' + `${Lepton.UPON_RECEIVING.DEFAULT}`, () => {
                expect(instance.uponReceiving).toBe(Lepton.UPON_RECEIVING.DEFAULT);
            });
        });
        describe('withRequest', () => {
            it('existe la propiedad', () => {
                expect(instance.withRequest).toBeDefined();
            });
            it('tiene la propiedad "method" que vale ' + `${LeptonRequest.HTTP_VERBS.GET}`, () => {
                expect(instance.withRequest.method).toBeDefined();
                expect(instance.withRequest.method).toBe(LeptonRequest.HTTP_VERBS.GET);
            });
            it('tiene la propiedad "path" que vale ', () => {
                expect(instance.withRequest.path).toBeDefined();
                expect(instance.withRequest.path).toBe(LeptonRequest.MESSAGES.UNDEFINED);
            });
            it('el valor por defecto del body es un objeto', () => {
                expect(instance.withRequest.body).toBeDefined();
            });
            it('el valor por defecto de los headers es un objeto', () => {
                expect(instance.withRequest.headers).toBeDefined();
            });
        });
        describe('willRespondWith', () => {
            it('existe la propiedad', () => {
                expect(instance.willRespondWith).toBeDefined();
            });
        });
        describe('creación de una interacción', () => {
            let interaction: Lepton;
            beforeEach(() => {
                interaction = new Lepton()
                    .setState(Lepton.STATES.NO_ITEMS)
                    .setRequest(LeptonRequest.HTTP_VERBS.GET, DEFAULT_ROUTE)
                    .setResponse(LeptonResponse.HTTP_STATES.NOT_FOUND)
                    .setUponReceiving(Lepton.UPON_RECEIVING.NOT_FOUND);
                interaction.withRequest
                    .setQuery()
                    .setBody()
                    .setHeaders(HEADERS);
            });
            it('tiene que obtener las propiedades básicas', () => {
                expect(interaction).toBeDefined();
                expect(interaction.state).toBeDefined();
                expect(interaction.uponReceiving).toBeDefined();
                expect(interaction.withRequest).toBeDefined();
            });
            it('las interacciones deben ser iguales', () => {
                expect(interaction.state).toBe(INTERACTION.state);
                expect(interaction.uponReceiving).toBe(INTERACTION.uponReceiving);
                expect(interaction.withRequest.method).toBe(INTERACTION.withRequest.method);
                expect(interaction.withRequest.path).toBe(INTERACTION.withRequest.path);
                expect(interaction.withRequest.headers).toBe(INTERACTION.withRequest.headers);
                // expect(interaction.withRequest.body).toBe(INTERACTION.withRequest.body);
                // expect(interaction.withRequest.query).toBe(INTERACTION.withRequest.query);
                expect(interaction.willRespondWith.status).toBe(INTERACTION.willRespondWith.status);
            });
        });

    });

});
