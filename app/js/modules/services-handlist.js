window.servicesHandlist = (function() {
  var servicesHandlistEl = document.querySelector("[data-services-handlist]");

  if (!servicesHandlistEl) {
    return;
  }

  var linksList = servicesHandlistEl.querySelectorAll("a");
  var serviceLetters = {};

  linksList.forEach(function(link) {
    var firstLetter = link.textContent.charAt(0).toUpperCase();
    if (!serviceLetters[firstLetter]) {
      serviceLetters[firstLetter] = [];
    }
    serviceLetters[firstLetter].push(link);
  });

  function createList(letter, links) {
    var dl = document.createElement("dl");
    var dt = document.createElement("dt");
    dt.textContent = letter;

    dl.appendChild(dt);

    links.sort(function(a, b) {
      var aText = a.textContent;
      var bText = b.textContent;
      return aText > bText ? 1 : -1;
    });

    links.forEach(function(link) {
      var dd = document.createElement("dd");
      dd.appendChild(link);
      dl.appendChild(dd);
    });

    return dl;
  }

  var serviceLettersList = Object.keys(serviceLetters);

  serviceLettersList.sort();

  servicesHandlistEl.hidden = false;
  serviceLettersList.forEach(function(letter) {
    servicesHandlistEl.appendChild(createList(letter, serviceLetters[letter]));
  });

})(window, jQuery);
