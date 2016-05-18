$(function () {
      // init controllers
      var stickyController = new ScrollMagic.Controller();
      var displayController = new ScrollMagic.Controller({globalSceneOptions: {duration: 0}});

      // build scene for steps to appear
      for (var i = 6; i >= 1; i--) {
        new ScrollMagic.Scene({triggerElement: ("#sec" + i)})
              .setClassToggle("#step" + i, "active") // add class toggle
              .addTo(displayController);
      };

      // build scene for steps to be pinned
      var offset = ($(window).height() / 2) + 30;
      var duration = ($(window).width() * 3) + 150;
      var scene = new ScrollMagic.Scene({triggerElement: "#pin-trigger", offset: offset, duration: duration})
              .setPin("#pin1")
              .addTo(stickyController);

      // update offet and duration when window resized
      $(window).on("resize", function() {
        scene.offset(($(window).height() / 2) + 30);
        scene.duration(($(window).width() * 3) + 150);
      });
    });