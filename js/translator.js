const inputText = document.getElementById('inputText');
    const convertButton = document.getElementById('convertButton');
    const output = document.getElementById('output');

    convertButton.addEventListener('click', () => {
      const lines = inputText.value.split('\n');
      let html = '';
      for (const line of lines) {
        if (line.startsWith('*')) {
          html += `<li>${line.slice(1)}</li>`;
        } else if (line.startsWith('#')) {
          html += `<ol value="1"><li>${line.slice(1)}</li></ol>`;
        } else if (line.startsWith('>>')) {
          html += `<div class="highlight">${line.slice(2)}</div>`;
        } 

        else if (line.startsWith('[[File:') && line.endsWith('|left]]')) {
          const imageUrl = line.slice(7, -7);
          html += `<div style="text-align: left"><img id="leftimg" src="${imageUrl}" alt="ObrĂĄzek v levo"></div>`;
        }
        else if (line.startsWith('[[File:') && line.endsWith('|right]]')) {
          const imageUrl = line.slice(7, -8);
          html += `<img id="rightimg" src="${imageUrl}" alt="ObrĂĄzek v pravo">`;
        }
        else if (line.startsWith('[[File:') && line.endsWith(']]')) {
          const imageUrl = line.slice(7, -2);
          html += `<img id="centerimg" src="${imageUrl}" alt="ObrĂĄzek">`;
        }
        else if (line.startsWith('[[Media:') && line.endsWith(']]')) {
          const videoCode = line.slice(8, -2);
          html += `<iframe id="ytvideo" src="https://www.youtube.com/embed/${videoCode}"></iframe>`;
        }
        else if (line.startsWith('---')) {
          const videoCode = line.slice(-3);
          html += `<hr>`;
        }
          else {
          let newLine = line;
          newLine = newLine.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
          newLine = newLine.replace(/==(.+?)==/g, '<h3>$1</h3>');
          newLine = newLine.replace(/##(.+?)##/g, '<h2>$1</h2>');
          html += `${newLine}<br>`;
        }
      }
      output.innerHTML = html;
    });