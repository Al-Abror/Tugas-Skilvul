import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const value1 = [{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  }] 
  const value2 ={
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  }
  const outputValue = [ 
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },{
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    }
  ]

  // Act
  const expected = AddTodo(value1, value2)

  // Assert
  expect(expected).toEqual(outputValue)
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const value = [[{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  }], {
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  }]
  const outputValue = [ 
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    }
  ]
  // Act
  const expected = AddTodo(value[0], value[1])

  // Assert
  expect(expected).not.toEqual(outputValue)

})