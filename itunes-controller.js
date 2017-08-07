function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSong); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  //first draw objects, then look up media tags, style out, due Monday
  function drawSong(songList) {
    var songElement = document.getElementById('song-list')
    var template = ''
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      template += `
      <div id="song">
                    <div id="song-list" class="row">
                        <div class="col-xs-12">
                            <h3>Title: </h3>
                            <p> ${song.title}</p>
                        </div>
                        <div class="col-xs-6">
                            <h3>Album Art: </h3>
                            <p>
                                <img src="${song.albumArt}"></p>
                        </div>
                        <div class="col-xs-6">
                            <h3>Artist: </h3>
                            <p>${song.artist}</p>
                        </div>
                        <div class="col-xs-12">
                            <h3>Collection: </h3>
                            <p> ${song.collection}</p>
                        </div>
                        <div class="col-xs-12">
                            <h3>Price: </h3>
                            <p> ${song.price}</p>
                        </div>
                        <div class="col-xs-12">
                            <h3>Preview: </h3>
                            <p> ${song.preview}</p>
                        </div>

                    </div>
                </div>
      `
    }
    songElement.innerHTML = template

  }



}