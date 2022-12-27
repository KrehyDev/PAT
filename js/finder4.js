//script který dělá to že se odkazy z menu otevírají na této stránce a ne na nové

  document.querySelectorAll('nav a').forEach(function(odkaz) {
    odkaz.addEventListener('click', function(event) {
      event.preventDefault();

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById('content').innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", this.href, true);
      xhttp.send();
    });
  });
  
