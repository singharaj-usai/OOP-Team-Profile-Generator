const Manager = require('../lib/Manager')
const worker = Manager('Tammer', '4', 'tammer@yahoo.com', '1')//name, id, email

describe('Manager', () => {
describe('name', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.name).toBe('Tammer')
    })
})
describe('id', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.id).toBe('4')
    })
})
describe('email', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.email).toBe('tammer@yahoo.com')
    })
})
describe('officeNumber', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.officeNumber).toBe('1')
    })
})
})

//Describe var reference in OOP > 01 Activities > 18-Stu_First-Mock