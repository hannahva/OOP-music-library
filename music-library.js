// prototypes //

function Library(name, creator){
  this.name = name;
  this.creator = creator;
  playlists = [];
};

function Playlist(name){
  this.name = name;
  tracks = [];
  this.overallRating = function(){
    let  totalRatings = 0;
    let totalTracks = 0;
    this.tracks.forEach((track)=>{
      totalRatings += track.rating;
      totalTracks += 1;
    })
    return "average rating: " + totalRatings / totalTracks;
  }
  this.totalDuration = function(){
    let sum = 0;
    this.tracks.forEach((track)=> {
      sum += track.length;
    })
     return sum + " seconds long";
  }
};

function Track(title, rating, length){
  this.title = title;
  this.rating = rating;//1-5
  this.length = length; //in seconds
};

//instantiations of new objects //
const newLibrary = new Library("muzak", "hannah");

const newPlaylist = new Playlist("traxxx");
const secondPlaylist = new Playlist("music iz my life");

const song1 = new Track("luv song", 4, 180);
const song2 = new Track("sad song", 2, 240);
const song3 = new Track("happy song", 5, 200);
const song4 = new Track("rock song", 2, 260);
const song5 = new Track("pop song", 3, 180);

//add tracks to playlists and playlists to library //
newPlaylist.tracks = [song1, song2, song3];
secondPlaylist.tracks = [song4, song5];

newLibrary.playlists = [newPlaylist, secondPlaylist];

console.log("new library ", newLibrary);
console.log("new playlist ", newPlaylist);
console.log("second playlist ", secondPlaylist);
console.log(song1, song2, song3);
console.log(secondPlaylist.totalDuration());
console.log(secondPlaylist.overallRating());
console.log(newPlaylist.totalDuration());
console.log(newPlaylist.overallRating());
console.log(newLibrary.playlists[1].tracks);


