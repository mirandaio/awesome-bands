$(function () {
  var NUM_BANDS = 5;

  function buildBandItems(num) {
    var i;
    var ul = $('ul');
    var li = '<li><span class="band-name"></span>' +
                    '<span class="mentions-container">' +
                      '<span class="num-mentions"></span>' +
                      '<span class="mention">Mentions</span></span></li>';

    for(i = 0; i < num; i++) {
      ul.append(li);
    }
  }

  function updateBands(bands) {
    var i, len;
    bandNames = $('.band-name');
    numMentions = $('.num-mentions');

    for(i = 0, len = bands.length; i < len; i++) {
      bandNames[i].textContent = bands[0].name;
      numMentions[i].textContent = bands[0].count;
    }
  }

  buildBandItems(NUM_BANDS);
  var poller = new massrel.Poller({frequency: NUM_BANDS, limit: 5},
    updateBands);
  poller.start();
});
