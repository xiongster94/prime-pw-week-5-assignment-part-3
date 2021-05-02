console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished){
  let newSong = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  } // create new object
  return collection.unshift(newSong);
} // end addToCollection

addToCollection ('Here Comes The Sun', 'The Beatles', 1969);

console.log(collection);
