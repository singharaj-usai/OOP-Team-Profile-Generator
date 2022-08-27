const Intern = require('../lib/Intern')
const worker = new Intern('John', '3', 'John@yahoo.com', 'MSU')//name, id, email

describe('Intern', () => {
describe('name', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.name).toBe('John')
    })
})
describe('id', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.id).toBe('3')
    })
})
describe('email', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.email).toBe('John@yahoo.com')
    })
})
describe('school', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.school).toBe('MSU')
    })
})
})

//Describe var reference in OOP > 01 Activities > 18-Stu_First-Mock