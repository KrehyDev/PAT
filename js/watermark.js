function updateLink() {
    // Získání hodnoty z formuláře
    var link = document.getElementById("link-input").value;
  
    // Úprava odkazu
    link = link.replace("cdn.alza.cz", "admin.alza.cz/External");
    link = link.replace("ImgW.ashx", "ImgCom.ashx");
    link = link.replace("fd=f3", "fd=f4");
  
    // Zobrazení upraveného odkazu
    document.getElementById("link-output").src = link;
  }
  
  function downloadImage() {
      // Get the image element with the specific class
      var imageElement = document.querySelector('.obrazekbezvodoznaku');
      
      // Create a new anchor element
      var a = document.createElement('a');
      
      // Set the href attribute to the image src
      a.href = imageElement.src;
      
      // Set the download attribute to specify the file name
      a.download = 'image.jpg';
      
      // Append the anchor element to the body
      document.body.appendChild(a);
      
      // Click the anchor element to trigger the download
      a.click();
      
      // Remove the anchor element
      document.body.removeChild(a);
    }