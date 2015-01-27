$(function () {
  var NUM_BANDS = 5;

  function buildBandItems(num) {
    var i;
    var ul = $('ul');
    var li = '<li><span class="band-name"></span>' +
                    '<span class="mentions-container">' +
                      '<span class="num-mentions"></span>' +
                      '<span class="mention"> Mentions</span></span></li>';

    for(i = 0; i < num; i++) {
      ul.append(li);
    }
  }

  function updateBands(bands) {
    var i, len;
    var ul = $('ul');

    ul.fadeOut('slow', function () {
      var bandNames = $('.band-name');
      var numMentions = $('.num-mentions');
      
      for(i = 0, len = bands.length; i < len; i++) {
        bandNames[i].textContent = bands[i].name;
        numMentions[i].textContent = bands[i].count;
      }

      ul.fadeIn('slow');
    });
  }

  buildBandItems(NUM_BANDS);
  var poller = new massrel.Poller({frequency: 15, limit: NUM_BANDS},
    updateBands);
  poller.start();
});
