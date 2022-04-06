import { expect } from 'chai';
import supertest, { agent as request } from 'supertest';
import server from '../src/server';

let serv: supertest.SuperAgentTest;

describe('Base Routes', function () {
    before(function () {
        serv = request(server);
    });

    it('GET /', async function () {
        const resp = await serv.get('/');
        expect(resp.status).to.equal(200);
    });
});
