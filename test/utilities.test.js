const chai = require('chai').expect;
const gatherNamesOf = require('../utilities');

describe('gatherNamesOf', () => {
    it('should return an array of names', () => {
        const people = [
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' },
        ];
        const names = gatherNamesOf(people);
        chai(names).to.eql(['Bart', 'Lisa', 'Maggie']);
    });
});