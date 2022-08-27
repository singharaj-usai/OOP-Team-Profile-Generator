const Employee = require('../lib/Employee')
const worker = Employee('Jared', '1', 'Jared@yahoo.com')//name, id, email

describe('Employee', () => {
describe('name', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.name).toBe('Jared')
    })
})
describe('id', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.id).toBe('1')
    })
})
describe('email', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.email).toBe('Jared@yahoo.com')
    })
})
})

//Describe var reference in OOP > 01 Activities > 18-Stu_First-Mock