
//prmpt user for a sentence and assiagn it to a variable
const words=prompt('type a sentence')
/** 
 * this function is set up to count the vowels enter by the user in words
 * @param sentence which is later set to the value of words
 *  
 */
function vowelCounter(sentence){
  var vowels = 'AEIOUaeiou';
  var vowelCounter = 0;
  
  for(var x = 0; x < sentence.length ; x++)
  {
    if (vowels.indexOf(sentence[x]) !== -1)
    {
      vowelCounter += 1;
    }
  
  }
  return vowelCounter;
}

function consonantsCounter(sentence){
  var consonants = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz';
  var consonantsCounter = 0;
  
  for(var x = 0; x < sentence.length ; x++)
  {
    if (consonants.indexOf(sentence[x]) !== -1)
    {
      consonantsCounter += 1;
    }
  
  }
  return consonantsCounter;
}


function killswitch(words){
    if (words.length >= 1){
        console.log('Inside the sentence you typed there are '+ vowelCounter(words)+' vowels '+ 'and '+ consonantsCounter(words)+' consonants ');
    }else{
        alert('It appers you didnt type anything, as a result our records show that the sentence has 0 vowels and 0 consonants')
    }
}
//run code
killswitch(words)