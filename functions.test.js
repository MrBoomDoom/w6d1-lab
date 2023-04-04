const {returnTwo, greeting, add} = require('./functions')

test('returnTwo should return 2', () => {
    expect(returnTwo()).toBe(2)
})

test('Expect a input name for an output name', () => {
    expect(greeting('Jack')).toBe('Hello, Jack')
})

test('Add should add the sum of two numbers', () => {
    expect(add(10,11)).toBe(21)
})