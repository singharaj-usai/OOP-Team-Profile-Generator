const Engineer = require('../lib/Engineer')
const worker = new Engineer('Alec', '2', 'Alec@yahoo.com', 'Alec\'s Github')//name, id, email

describe('Engineer', () => {
describe('name', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.name).toBe('Alec')
    })
})
describe('id', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.id).toBe('2')
    })
})
describe('email', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.email).toBe('Alec@yahoo.com')
    })
})
describe('github', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
        expect(worker.github).toBe('Alec\'s Github')
    })
})
})

//Describe var reference in OOP > 01 Activities > 18-Stu_First-Mock