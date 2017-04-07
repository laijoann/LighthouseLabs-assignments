class Library {
  constructor(name, creator) {
    this.name = name
    this.creator = creator
    this.playlists = []
  }
  addPlaylists(itemArr) {
    itemArr.forEach(item => {
      this.playlists.push(item)
    })
  }
}

class Playlist {
  constructor(name) {
    this.name = name
    this.tracks = []
  }
  addTracks(tracksArr) {
    tracksArr.forEach(track => {
      this.tracks.push(track)
    })
  }
  getOverallRating() {
    let totalRating = 0
    this.tracks.forEach(track => {
      totalRating += track.rating
    })
    return totalRating/this.tracks.length
  }
  getTotalDuration() {
    let dur = 0
    this.tracks.forEach(track => {
      dur += track.length
    })
    return dur
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title
    this.rating = rating
    this.length = length
  }
}

const jojoLib = new Library('JojoLib', 'Jojo')
const ultimateJojo = new Playlist('ultimateJojo')
const track1 = new Track('On My Way', 5, 100)
const track2 = new Track('Something Just Like This', 4, 200)
ultimateJojo.addTracks([track1, track2])
jojoLib.addPlaylists([ultimateJojo])
console.log(jojoLib, ultimateJojo, ultimateJojo.getTotalDuration(), ultimateJojo.getOverallRating())
