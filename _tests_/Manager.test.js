const Manager = require('../lib/Manager')
const worker = Manager('Tammer', '4', 'tammer@yahoo.com', '1')//name, id, email

describe('Manager', () => {
describe('Tammer', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.name).toEqual('Tammer')
    })
})
describe('4', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.id).toEqual('4')
    })
})
describe('tammer@yahoo.com', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.email).toEqual('tammer@yahoo.com')
    })
})
describe('1', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.officeNumber).toEqual('1')
    })
})
})

//Describe var reference in OOP > 01 Activities > 18-Stu_First-Mock