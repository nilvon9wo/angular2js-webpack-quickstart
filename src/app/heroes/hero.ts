export class Hero {
    public id: number;
    public name: string;
    public state: string = 'inactive';

    constructor(config: {id: number, name: string}) {
        this.id = config.id;
        this.name = config.name;
        console.log('######## name', this.name);
    }

    public toggleState() {
        if (this.state === 'inactive') {
            this.state = 'active'
        } else {
            this.state = 'inactive'
        }
    }

}