class Song {
  name;
  nextSong;

  constructor(name) {
    this.name = name;
  }


  isInRepeatingPlaylist(name) {
    if (!name) {
      name = this.nextSong;
    }
    const first = this.name;
    const next = name.name;
    if (first !== next) {
      return this.isInRepeatingPlaylist(name.nextSong);
    }
    return true;
  }
}

let first = new Song("Hello");
let second = new Song("Eye of the tiger");
let third = new Song("test");

first.nextSong = second;
second.nextSong = third;
third.nextSong = first;

console.log(first.isInRepeatingPlaylist());
