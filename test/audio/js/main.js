(function () {
  var audio5;
  var btn = document.getElementById('play');
  //var loaded = document.getElementById('loaded');
  //var time = document.getElementById('time');
  //var engine = document.getElementById('engine');
  var audioOgg = document.getElementById("audioUrlOgg").value;
  var audioMp3 = document.getElementById("audioUrlMp3").value;

  function listen(evnt, elem, func) {
    if (elem.addEventListener)  // W3C DOM
      elem.addEventListener(evnt, func, false);
    else if (elem.attachEvent) { // IE DOM
      var r = elem.attachEvent("on"+evnt, func);
      return r;
    }
  }

  function unlisten(evnt, elem, func) {
    if (elem.removeEventListener)  // W3C DOM
      elem.removeEventListener(evnt, func, false);
    else if (elem.detachEvent) { // IE DOM
      var r = elem.detachEvent("on"+evnt, func);
      return r;
    }
  }

  

  function loadAudio () {
    var audioUrl;
    var audioFormat = audio5.settings.player.codec;
    switch (audioFormat) {
      case 'vorbis':
        audioUrl = audioOgg;
        break;
      default:
        audioUrl = audioMp3;
        break;
    }
    unlisten('click', btn, loadAudio);
    btn.src = 'imgs/btn-loading.png';
    listen('click', btn, playPause.bind(audio5));
    audio5.load(audioUrl);
  }



  function playPause () {
    if (this.playing) {
      this.pause();
      btn.src = 'imgs/btn-play.png';
    } else {
      this.play();
      btn.src = 'imgs/btn-pause.png';
    }
  }

  function audioEnded () {
    this.seek(0); 
    this.pause();
    btn.src = 'imgs/btn-play.png';
  }

  var audio5 = new Audio5js({
    swf_path: './swf/audio5js.swf',
    codecs: ['vorbis', 'mp3'],
    ready: function (player) {
      //engine.innerHTML = 'Engine: <strong>' + player.engine + '</strong>. Codec: <strong>' + player.codec + '</strong>';
      this.on('canplay', playPause, this);
      this.on('ended', audioEnded, this);
      this.on('progress', function(load_percent) {
        //loaded.innerHTML = 'Loaded <strong>' + load_percent + '%</strong>';
      }, this);
      this.on('timeupdate', function(position, duration) {
        //time.innerHTML = position + '/' + duration;
      }, this);

      listen('click', btn, loadAudio);
    }
  });
}());