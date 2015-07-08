/* Write a function that returns a string in which firstname is swapped with last name. 

 nameSuffler('john McClane'); => "McClane john"
 */

function nameSuffler(str){
  return str.split(' ').reverse().join(' ');
}
