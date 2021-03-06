const {greet, isEven, isOdd, getCustomer, getPersons, downloadCV } = require('../greet');

describe('Greet Feature', () => {
    it ('should get the greet message', ()=>{
        const results = greet('Jane');
        expect(results).toBe('Hello Jane');
        expect(results).toMatch('Jane');
        expect(results).toMatch(/Jane/);
    });
});

describe('Even/Odd', () => {
    it('should return true if number is even', () =>{
        const results = isOdd(3);
        expect(results).toBeTruthy();
        expect(results).not.toBeFalsy();
    });

    it('should return false if number is not evenn', () => {
        const results = isOdd(4);
        expect(results).not.toBeTruthy();
        expect(results).toBeFalsy();
    })
});

describe('Customer', () => {
    it('should find customer by id', () => {
        const results = getCustomer(1);
        expect(results).toBeDefined();
        expect(results).not.toBeUndefined();

        expect(results).toEqual({id: 1, name: 'Jane'});
        expect(results).toHaveProperty('id', 1);

        expect(results).toEqual(expect.objectContaining({id: 1}));
    });
});

describe('Persons', () => {
    it('should fetch all the persons', () => {
        const results = getPersons();
        expect(results).toHaveLength(4);
        expect(results).toContain('Doe');

        expect(results).toEqual(expect.arrayContaining(['Jane', 'Doe']));
    });
});

describe('Download CV', () => {
    it('should throw error if user does not provide path', () => {
        expect(()=> {
            downloadCV();
        }).toThrow();
        expect(()=> {
            downloadCV();
        }).toThrow('invalid URL');
        expect(()=>{
            downloadCV(null);
        }).toThrow();
    });

    it('should get the contents from the CV', () => {
        const results = downloadCV('http://localhost:3000/cv/1');
        expect(results).toBe('Content');
    });
});