module.exports = function toReadable (number) {
  answer = "";
  function oneNine(num) {
    let a = '';
    switch (num) {
            case 1: 
            a = 'one';
            break;
            case 2: 
            a = 'two';
            break;
            case 3: 
            a = 'three';
            break;
            case 4: 
            a = 'four';
            break;
            case 5: 
            a = 'five';
            break;
            case 6: 
            a = 'six';
            break;
            case 7: 
            a = 'seven';
            break;
            case 8: 
            a = 'eight';
            break;
            case 9: 
            a = 'nine';
            break;


        default:
            break;
    }

    return a;
  }









  if (number > 99) answer = oneNine(tMath.floor(number/100)) +  ' hundred';










  return answer;
}
