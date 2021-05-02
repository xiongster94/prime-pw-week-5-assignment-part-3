console.log('***** Music Collection *****')

let collection = [];

// create  addToCollection function
function addToCollection ( title, artist, yearPublished ){
  let newSong = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    } // create new object && add to array
  collection.push(newSong);
  return collection[collection.length -1];
} // end addToCollection

// adding songs
console.log('Added', addToCollection ('Here Comes The Sun', 'The Beatles', 1969));
console.log('Added', addToCollection ('Hey Jude', 'The Beatles', 1968));
console.log('Added', addToCollection ('Hey Ya!', 'OutKast', 2003));
console.log('Added', addToCollection ('Where Is The Love?', 'Black Eyed Peas', 2003));
console.log('Added', addToCollection ('Best Day Of My Life', 'American Authors', 2014));
console.log('Added', addToCollection ('I Gotta Feeling', 'Black Eyed Peas', 2009));

console.log( collection ); // testing addToCollection function

// create showCollection function
function showCollection( array ){
  console.log(`Songs in collection: ${array.length}`);
  for (let i = 0; i < array.length; i++) {
    let values = Object.values(array[i]);
      // creating parameter for values in array
    console.log(`${values[0]} by ${values[1]}, published in ${values[2]}`);
  } // end loop for each value found in each array[i]
} // end show collection function

showCollection( collection ); // testing showCollection function

// create findByArtist function
function findByArtist( artist ){
  let artistList = []; // create empty array
  for (songs of collection){
  if (artist === songs.artist) {
    artistList.push(songs);
  } // adds song to artistList if match found
  else if (artist != songs.artist){
    null
    }// if no match, null
  }// ends loop and log results
  return console.log(artistList);
} // end findByArtist functions

findByArtist ('The Beatles'); // testing findByArtist function
findByArtist ('The Fray'); // testing null option
