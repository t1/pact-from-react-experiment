import {PersonData} from "./PersonData";

function acceptJson(response: Response) {
    if (response.ok) return response.json();
    else throw new Error(response.statusText);
}

class PersonDataService {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getPersonalData(): Promise<PersonData> {
        return fetch(this.baseUrl).then(acceptJson);
    };
}

export default PersonDataService;
