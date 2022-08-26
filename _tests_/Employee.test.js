const Employee = require('../lib/Employee')
const worker = Employee('Jared', '1', 'Jared@yahoo.com')//name, id, email

describe('Employee', () => {
describe('Jared', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.name).toEqual('Jared')
    })
})
describe('1', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.id).toEqual('1')
    })
})
describe('Jared@yahoo.com', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.email).toEqual('Jared@yahoo.com')
    })
})
})

//Describe var reference in OOP > 01 Activities > 18-Stu_First-Mock