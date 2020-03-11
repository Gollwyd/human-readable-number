module.exports = function toReadable (number) {
    let space = '';
    

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
              case 10: 
              a = 'ten';
              break;
              case 11: 
              a = 'eleven';
              break;
              case 12: 
              a = 'twelve';
              break;
              case 13: 
              a = 'thirteen';
              break;
              case 14: 
              a = 'fourteen';
              break;
              case 15: 
              a = 'fifteen';
              break;
              case 16: 
              a = 'sixteen';
              break;
              case 17: 
              a = 'seventeen';
              break;
              case 18: 
              a = 'eighteen';
              break;
              case 19: 
              a = 'nineteen';
              break;
  
  
          default:
              break;
      }
  
      return a;
    }
    function nty(num) {
        let a = '';
        switch (num) {
            
            
                case 2:
                a = 'twenty';
                break;
                case 3:
                a = 'thirty';
                break;
                case 4:
                a = 'forty';
                break;
                case 5:
                a = 'fifty';
                break;
                case 6:
                a = 'sixty';
                break;
                case 7:
                a = 'seventy';
                break;
                case 8:
                a = 'eighty';
                break;
                case 9:
                a = 'ninety';
                break;
  
        
            default:
                break;
        }
        return a;
    }
  
  
    if (number > 99) {answer = oneNine(Math.floor(number/100)) +  ' hundred'; space = ' '; number = number - 100*Math.floor(number/100); if (number == 0) return answer;}
    if (number > 19) {
        answer = answer + space + nty(Math.floor(number/10));
        if (number%10!=0) {answer = answer + ' ' + oneNine(Math.floor(number - 10*Math.floor(number/10)))}
    }
    if (number == 0) return 'zero';
    if (number < 20) {answer = answer + space + oneNine(number)}
  
    
    return answer;
  }
