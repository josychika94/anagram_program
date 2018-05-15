//anagram
/*a function tha takes two words as argument and returns true if they are
anagrams (contain the exact letters) and false otherwise
*/

function anagrammer (firstWord, secondWord) {
    if((typeof(firstWord) == "string") && (typeof(secondWord) == "string")){
    
        if(firstWord.length == secondWord.length){
            return true;
        }
            else{
                return false;//comparing the lengths of the function parameters
        }
         var checkStr1 = firstWord.toLowerCase().split('').sort().join('');
         var checkStr2 = secondWord.toLowerCase().split('').sort().join('');
         //convert to lower case, array it, sort it, smush it back
        if (checkStr1 === checkStr2) {
            console.log("true");
        }
        else {
            console.log("false");
        }
        
    }
    }

  console.log(anagrammer("Mary","Army"))
  console.log(anagrammer("slacks", "Mary"))
  console.log(anagrammer("ANGEL", "angle"))


  function fixSpelling(name){
	if(name = 'twittr'){
		name = 'twitter';
	}
	else{
		fixSpelling(name);
	}
    console.log(name);
	return 'name';
}
fixSpelling("twittr");