console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished){
  let newSong = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    } // create new object && add to array
  collection.push(newSong);
  return collection[collection.length -1];
} // end addToCollection

console.log('Added', addToCollection ('Here Comes The Sun', 'The Beatles', 1969));
console.log('Added', addToCollection ('Hey Jude', 'The Beatles', 1968));
console.log('Added', addToCollection ('Hey Ya!', 'OutKast', 2003));
console.log('Added', addToCollection ('Where Is The Love?', 'Black Eyed Peas', 2003));
console.log('Added', addToCollection ('Best Day Of My Life', 'American Authors', 2014));
console.log('Added', addToCollection ('I Gotta Feeling', 'Black Eyed Peas', 2009));

console.log(collection);
