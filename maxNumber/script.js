const numbersList = [7, 2, 3, 4, 8];
const maxNumber = findMaxNumber(numbersList);


function findMaxNumber(numbers) {
    if (numbers.length === 0) {
      return "Список чисел пуст!";
    }
    
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
    
    return maxNumber;
  }

  console.log(maxNumber); 