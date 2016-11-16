$(function(){

      setHeaderFooter();

      // get data and bind to #photogrid
      bindContent();

      // bind event handlers
      initializeEvents();

    });

    function setHeaderFooter(){
     
      $("#headertitle").html(headerTitle);
      $("#headerdate").html(headerDate);
      $("#headertext").html(headerText);
      $("#part1Text").html(part1Text);
      $("#part2Text").html(part2Text);
      $("#part3Text").html(part3Text);
      $("#summaryText").html(summaryText);
      $("#footertext").html(footerText);
      $("#copyrightText span").html(copyrightText);
    }

     function bindContent(){

      var smallImgPath = "asset/img/small/";
      var bigImgPath = "asset/img/src/";

      $.each(gridData, function(idx, obj) {
        $('<a class="fancybox" rel="part1" href="'+bigImgPath + obj.fileName+'" title="'+obj.title+'"><li><img src="' + smallImgPath + obj.fileName + '" alt="'+obj.id+'"></li></a>').appendTo('#imagegrid'); 
      });

       $.each(gridData1, function(idx, obj) {
        $('<a class="fancybox" rel="part2" href="'+bigImgPath + obj.fileName+'" title="'+obj.title+'"><li><img src="' + smallImgPath + obj.fileName + '" alt="'+obj.id+'"></li></a>').appendTo('#imagegrid1'); 
      });

     }

     function initializeEvents(){

      //initializing image player
      $(".fancybox").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        showNavArrows : true,
        closeBtn: false,
        helpers: { 
          title: { type : 'inside' },
          buttons: {}
        }
      });

      //initializing audio
      document.querySelector('#audio').addEventListener('play', setLowerVolume);

     }

     function setLowerVolume() { 
        document.getElementById("audio").volume /= 3;
    }
