const Engineer = require('../lib/Engineer')
const worker = Engineer('Alec', '2', 'Alec@yahoo.com', 'Alec\'s Github')//name, id, email

describe('Engineer', () => {
describe('Alec', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.name).toEqual('Alec')
    })
})
describe('2', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.id).toEqual('2')
    })
})
describe('Alec@yahoo.com', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.email).toEqual('Alec@yahoo.com')
    })
})
describe('Alec\'s Github', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.github).toEqual('Alec\'s Github')
    })
})
})

//Describe var reference in OOP > 01 Activities > 18-Stu_First-Mock