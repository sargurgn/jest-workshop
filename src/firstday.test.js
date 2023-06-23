const firstday = require('./firstday')

test('should return the sum', () => { 
    expect(firstday.sum(100, 200)).toBe(300)
})

test('should return full name when firstname and lastname is given', () => { 
    expect(firstday.getFullName('Narasimhan', 'Gopinath')).toBe('Narasimhan Gopinath')
})

test('should return full name when firstname is given', () => { 
    expect(firstday.getFullName('Narasimhan')).toBe('Narasimhan')
})