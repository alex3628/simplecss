describe('Audio5 Callbacks', function(){
  "use strict";

  it('should reach canPlay event', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;
        this.on('canplay', function () {
          done();
          that.pause();
        });
        this.load('./assets/sample.mp3');
      }
    });
  });

  it('should trigger loadstart event', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;
        this.on('loadstart', function () {
          done();
          that.pause();
        });
        this.load('./assets/sample.mp3');
      }
    });
  });

  it('should start downloading audio', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        this.on('progress', function (pos, dur) {
          done();
        });
        this.load('./assets/sample.mp3');
        this.play();
        this.pause();
      }
    });
  });

  it('should trigger play event', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;
        this.on('play', function () {
          setTimeout(function(){
            that.pause();
            done();
          }, 400);
        });
        this.load('./assets/sample.mp3');
        this.play();
      }
    });
  });

  it('should trigger pause event', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;
        this.on('play', function () {
          setTimeout(function(){
            that.pause();
          }, 500);
        });

        this.on('pause', function () {
          done();
        });
        this.load('./assets/sample.mp3');
        that.play();
      }
    });
  });

  it('should trigger timeupdate event', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;
        this.on('timeupdate', function () {
          that.pause();
          done();
        });
        this.load('./assets/sample.mp3');
        this.play();
      }
    });
  });

  it('should trigger ended event', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;
        this.on('ended', function () {
          done();
        });
        this.on('canplay', function () {
          that.seek(4);
          that.volume(0);
          that.play();
        });
        this.load('./assets/sample.mp3');
      }
    });
  });

  it('should trigger an event once', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;
        this.one('play', function () {
          that.pause();
        });
        this.on('pause', function () {
          that.play();
        });
        this.on('ended', function () {
          done();
        });

        this.on('canplay', function () {
          that.seek(3);
          that.volume(0);
          that.play();
        });
        this.load('./assets/sample.mp3');
      }
    });
  });

  it('should trigger seeking event', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;
        this.on('seeking', function () {
          done();
        });
        this.on('canplay', function () {
          that.pause();
          that.seek(4);
        });
        this.load('./assets/sample.mp3');
      }
    });
  });

  it('should trigger seeked event', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;
        this.on('seeked', function () {
          done();
        });
        this.on('canplay', function () {
          that.pause();
          that.seek(4);
        });
        this.load('./assets/sample.mp3');
      }
    });
  });

  it('should load metadata', function(done){
    var audio5 = new Audio5js({
      swf_path: '../swf/audio5js.swf',
      codecs: ['mp3'],
      ready: function () {
        var that = this;
        this.on('loadedmetadata', function () {
          done();
        });
        this.load('./assets/sample.mp3');
      }
    });
  });

});