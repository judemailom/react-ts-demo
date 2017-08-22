export class OAuthor {
    id: string;
    firstName: string;
    lastName: string;
}

export class MockApi{
    constructor(){
        this.authors = 
            [
                {
                    id: 'cory-house', 
                    firstName: 'Cory', 
                    lastName: 'House'
                },	
                {
                    id: 'scott-allen', 
                    firstName: 'Scott', 
                    lastName: 'Allen'
                },	
                {
                    id: 'dan-wahlin', 
                    firstName: 'Dan', 
                    lastName: 'Wahlin'
                }
            ]
    };
    authors : OAuthor[]
}