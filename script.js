(function () {
  var play = function () {
    var context, delayGain, delay, osc, lfo;

    document.getElementById('play').style.display = 'none';
    document.getElementById('desc').style.display = 'block';

    context = new webkitAudioContext();
    delayGain = context.createGain();
    delayGain.gain.value = 0;

    delay = context.createDelay();

    delay.connect(context.destination);
    delay.connect(delayGain);
    delay.delayTime.value = 0.3;
    delayGain.connect(delay);

    osc = context.createOscillator();
    osc.connect(delay);
    osc.frequency.value = 220;
    gain = context.createGain();

    lfo = context.createOscillator();
    lfo.connect(gain);

    gain.connect(osc.frequency);
    gain.gain.value = 220;
    osc.start(0);

    lfo.start(0);
    lfo.frequency.value = 2;

    window.addEventListener('deviceorientation', function (event) {
      var f;

      if (event.beta === 0) {
        f = 220;
      } else {
        f = 220 + 220 / 90 * event.beta;
      }
      gain.gain.value = f;

      lfo.frequency.value = ((event.alpha + 360 + 180) % 360) / 360 * 8;

      // delay.delayTime.value = event.beta / 90;
      // alpha = Math.round(event.alpha);
      // beta = Math.round(event.beta);
      // gamma = Math.round(event.gamma);
    });

  };
  document.getElementById('play').addEventListener('click', play);
})();
