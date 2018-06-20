const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    // if (res != 44) {
    //     throw new Error(`Expected 44, but got ${res}`);
    // }

    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var res = utils.square(9);

    // if (res != 81) {
    //     throw new Error(`Expected 81, but got ${res}`);
    // }

    expect(res).toBe(81).toBeA('number');
});

it('should expect some values', () => {
    // expect(12).toNotBe(12);
    // expect({name:'Andres'}).toNotEqual({name: 'Andrees'});
    // expect([2, 3, 4]).toExclude(1);
    expect({
        name: 'Andrew',
        age: 25,
        location: 'Philadelphia'
    }).toInclude({age: 25});
});

// should verify first and last names are set
// Assert it includes firstName and lastName with proper values
it('should have valid first name and last name', () => {
    var user = {location: 'Pereira', age: 25};
    var res = utils.setName(user, 'Felipe Mejia');

    expect(user).toEqual(res);

    expect(res).toInclude({firstName: 'Felipe', lastName: 'Mejia'});
});