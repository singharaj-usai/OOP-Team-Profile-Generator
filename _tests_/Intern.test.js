const Intern = require('../lib/Intern')
const worker = Intern('John', '3', 'John@yahoo.com', 'MSU')//name, id, email

describe('Intern', () => {
describe('John', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.name).toEqual('John')
    })
})
describe('3', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.id).toEqual('23')
    })
})
describe('John@yahoo.com', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.email).toEqual('John@yahoo.com')
    })
})
describe('MSU', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.school).toEqual('MSU')
    })
})
})

//Describe var reference in OOP > 01 Activities > 18-Stu_First-Mock