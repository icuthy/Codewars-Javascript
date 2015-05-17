/*
Complementary DNA
__________________

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA(string) you need to get the other complementary side. DNA strand is never empty or there is no DNA at all.

DNAStrand ("ATTGC") # return "TAACG"

DNAStrand ("GTAT") # return "CATA"
*/

function DNAStrand(dna){
 var pairs = { A : "T", T : "A", C : "G", G : "C" };
 var comp = "";
   for (var i = 0; i < dna.length; i++) {
     comp += pairs[dna[i]];   
   }
   return comp;
}
