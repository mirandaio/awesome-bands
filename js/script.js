$(function () {

  function buildBandItems(num) {
    var i;
    var li = '<li>' +
               '<span class="band-name"></span>' +
               '<span class="mentions-container">' +
                 '<span class="num-mentions"></span>' +
                 '<span class="mention"> Mentions</span>' +
               '</span>' +
             '</li>';

    for(i = 0; i < num; i++) {
      ul.append(li);
    }
  }

  function updateBands(bands) {
    var i, len;

    ul.fadeOut('slow', function () {
      for(i = 0, len = bands.length; i < len; i++) {
        bandNames[i].textContent = bands[i].name;
        numMentions[i].textContent = bands[i].count;
      }

      ul.fadeIn('slow');
    });
  }

  var NUM_BANDS = 5;
  var ul = $('ul');
  buildBandItems(NUM_BANDS);
  var bandNames = $('.band-name');
  var numMentions = $('.num-mentions');
  var poller = new massrel.Poller({frequency: 15, limit: NUM_BANDS},
    updateBands);
  poller.start();
});
