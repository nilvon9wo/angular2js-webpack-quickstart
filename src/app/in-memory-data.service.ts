import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];

        let contacts = [
            { id: 21, name: 'Sam Spade' },
            { id: 22, name: 'Nick Danger' },
            { id: 23, name: 'Nancy Drew' },
        ];

        let crisis = [
            { id: 1, name: 'Dragon Burning Cities' },
            { id: 2, name: 'Sky Rains Great White Sharks' },
            { id: 3, name: 'Giant Asteroid Heading For Earth' },
            { id: 4, name: 'Procrastinators Meeting Delayed Again' }
        ];

        return { heroes, contacts, crisis };
    }
}