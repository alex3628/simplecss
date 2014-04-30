describe('Audio5 Playback', function(){
  "use strict";

  it('should toggle playPause', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;
        this.on('canplay', function () {
          that.playPause();
        });

        this.on('play', function(){
          setTimeout(function(){
            that.playPause();
          }, 1000);
        });

        this.on('pause', function(){
          if(!that.playing){
            done();
          }
        });
        this.load('./assets/sample.mp3');
      }
    });
  });
  it('should have a duration', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      format_time: false,
      ready: function () {
        var that = this;

        this.on('timeupdate', function () {
          that.pause();
          var d = Math.round(that.duration);
          expect(d).to.be.equal(4);
          done();
        });

        this.load('./assets/sample.mp3');
        this.play();
      }
    });
  });

  it('should be seekable', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;

        this.on('canplay', function () {
          that.play();
          setTimeout(function(){
            that.pause();
            expect(that.audio.seekable).to.be.equal(true);
            done();
          }, 2000);
        });

        this.load('./assets/sample.mp3');
      }
    });
  });

  it('should seek to a position', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;

        this.on('canplay', function () {
          that.pause();
          that.seek(4);
          expect(that.position).to.be.equal(4);
          done();
        });

        this.load('./assets/sample.mp3');
      }
    });
  });

  it('should change volume', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;

        this.on('play', function () {
          setTimeout(function(){
            that.pause();
            that.volume(0);
            expect(that.volume()).to.be.equal(0);
            done();
          }, 1000);
        });

        this.load('./assets/sample.mp3');
        this.play();
      }
    });
  });

});