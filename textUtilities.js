const expect = require('chai').expect;

const titleCase = (title) => title.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');
