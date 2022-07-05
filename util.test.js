const { generateText, checkAndGenerate } = require('./util');

describe('testing example from youtube', () => {
    test('should return a string that uses both parameters', () => {
        // Arrange 
        // not much data to arrange so we go to act

        // Act
        const result = generateText('Bob', 17);

        // Assert
        expect(result).toBe(`Bob (17 years old)`)
    });

    describe('checkAndGenerate function', () => {

        test('validity should work for bad inputs', () => {
            const emptyName = checkAndGenerate('', 17);
            expect(emptyName).toBe(false);
            
            const notANumber = checkAndGenerate('Bob', '😀');
            expect(notANumber).toBe(false);
        });

        test('good inputs should return a string', () => {
            const result = checkAndGenerate('Patrick', 22);
            expect(result).toBe(`Patrick (22 years old)`)
        })
    })

})