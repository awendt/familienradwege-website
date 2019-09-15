if (document.getElementById('last-modified')) {
  fetch('/data/berlin/roads.json', {method: 'HEAD'}).then((response) => {
    var date = new Date(response.headers.get('last-modified'));
    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    document.getElementById('last-modified').innerHTML = new Intl.DateTimeFormat('de-DE', options).format(date);
  });
}
