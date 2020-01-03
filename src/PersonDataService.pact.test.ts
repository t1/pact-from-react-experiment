import {Pact} from "@pact-foundation/pact";
import {MandatoryPactOptions} from "@pact-foundation/pact/dsl/options";
import * as path from "path";
import {PersonData} from "./PersonData";
import PersonDataService from "./PersonDataService";

const pact = new Pact({
    cors: true,
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    pactfileWriteMode: 'update',
    consumer: 'person-data-consumer',
    provider: 'person-data-provider',
    host: 'localhost'
});

describe('PersonData API', () => {

    let service: PersonDataService;
    let baseUrl: string;

    describe('get data', () => {
        beforeEach((done) => {
            pact.setup().then((options: MandatoryPactOptions) => {
                baseUrl = 'http://' + options.host + ':' + options.port;
                service = new PersonDataService(baseUrl);
                pact.addInteraction({
                    state: 'find-user',
                    uponReceiving: 'a GET request',
                    withRequest: {
                        method: 'GET',
                        path: '/'
                    },
                    willRespondWith: {
                        status: 200,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: new PersonData('Jane', 'jane@doe.org')
                    }
                }).then(() => done());
            });
        });
        afterEach((done) => {
            pact.finalize().then(done())
        });

        it('GET person data', (done) => {
            service.getPersonalData()
                .then((response: PersonData) => {
                    expect(response.name).toEqual('Jane');
                    expect(response.email).toEqual('jane@doe.org');
                })
                .then(() => pact.verify())
                .then(() => done(), (error: string) => done.fail(error))
        });
    });
});
