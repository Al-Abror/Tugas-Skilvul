import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const value = [1, 2]
  const outputValue = 3

  // Act
  const expected = Add(value[0], value[1])

  // Assert
  expect(expected).toBe(outputValue)

})

test('Return substraction of a - b', () => {
  // Arrange
  const value = [2, 1]
  const outputValue = 1

  // Act
  const expected = Substract(value[0], value[1])

  // Assert
  expect(expected).toBe(outputValue)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const value = [3, 5]
  const outputValue = 15

  // Act
  const expected = Multiplication(value[0], value[1])

  // Assert
  expect(expected).toBe(outputValue)

})