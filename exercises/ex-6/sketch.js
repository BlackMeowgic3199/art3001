function _toArray(arr) {
    return Array.isArray(arr) ? 
      arr : 
      Array.from(arr)
  }
  
  function makeSpans (selector) {
     var _document$querySelect = document.querySelectorAll(selector)
     var _document$querySelect2 = _toArray(_document$querySelect)
     var elements = _document$querySelect2.slice(0)
    
    return elements.map( function (element) {
      const text = element.innerText.split('')
      const spans = text.map( function (letter) {
        return '<span>' + letter + '</span>'
      }).join('')
      return element.innerHTML = spans
    })
  }
  
  makeSpans('h1')
  makeSpans('h3')

 // function([string1, string2],target id,[color1,color2])    
 consoleText(['“It is absolutely imperative that every human being’s freedom and human rights are respected, all over the world.”– Jóhanna Sigurðardóttir', '“Equality means more than passing laws. The struggle is really won in the hearts and minds of the community, where it really counts.” – Barbara Gittings', '“Nature made a mistake, which I have corrected.” – Christine Jorgensen', '“The Lord is my Shepherd and he knows I’m gay.” – Troy Perry', '“The richness, beauty and depths of love can only be fully experienced in a climate of complete openness, honesty and vulnerability.” – Anthony Venn Brown'], 'text',['darkred','orange','yellow','lightgreen','darkblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

const panels = document.querySelectorAll('.panel');
function toggleOpen() {
	this.classList.toggle('open');
}
function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}
panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));




