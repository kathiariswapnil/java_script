// divisible by 3 => fizz
//divisible by 5 => buzz
//divisible by both 3 and 5 => fizzbuzz
//not divisible by 3 or 5 => input
//not a number => 'not a number'

function fizzbuzz(input){
  if (input !==  number){
    return 'not a number'
  }

  else if (input % 3 === 0 && input % 5 === 0){
    return 'fizzbuzz'
  }
  else if (input % 3 === 0){
    return 'fizz'
  }
  else if (input % 5 === 0){
    return 'buzz'
  }
  else {
    return input
  }
}