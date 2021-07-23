/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];


// ACCUMULATION STEPS:
// 1. Determine your output data type and default value.
// 2. Define your loop.
// 3. Accumulate!

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
function getTotalCount(animals) {
  
  //established my initial value of 0 since my return should be a number
  let total = 0
  //defined my loop
  for(let animal of animals){
    // made a variable for count 
    let animalCount = animal.count
    // adding the current value of animals[i].count to total and reassigning the value of total   
    total += animalCount
  }
  return total
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
  //established my initial value of [] since my return should be an array
  let allKinds = []
  //defined my loop
  for(let animal of animals){
    //  made a variable for kind
    let animalKind = animal.kind
    // pushing the current value of animals[i].kind into allKinds array 
    allKinds.push(animalKind)
  }

  return allKinds
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals, minimum) {
  //established my initial value of [] since my return should be an array
  let minimumAnimals = []
  //defined my loop
  for(let animal of animals){
    // made a variable for count  
    let animalCount = animal.count 
    // If the current value of animals[0].count is greater than or equal to the minimum   
    if(animalCount >= minimum)
    // push the current value of animals[i] into minimumAnimals array
    minimumAnimals.push(animal)

  }
  return minimumAnimals 
}
  

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
 function getMostCommonAnimal(animals) {
  // if the length of animals array is 0 
  if (animals.length === 0){
    // return null 
    return null
    } 
  // established variable for initial value but this time it is an animal[0] which is an object like out return value will be but we need this value to hold if our condition is not met later on 
  let  mostCommonAnimal = animals[0]
  //defined my loop
  for(let animal of animals){
    //established a variable for the current value of animals[0].count 
    let animalCount = animal.count
    //establish a variable for the current highest count value
    let currentHighCount = mostCommonAnimal.count  
    // if the current value of animals[0].count is higher than the currentHighCount value 
    if (animalCount > currentHighCount){
      // Our return Object will be the current value of animals[i]
      mostCommonAnimal = animal
    }
  }
  return mostCommonAnimal
}

// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
