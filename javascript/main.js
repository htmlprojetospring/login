    // this will work in IE 10, 11 and Safari/Chrome/Firefox/Edge	   
    // this will work in IE 10, 11 and Safari/Chrome/Firefox/Edge
    // add ES6 poly-fill for the Promise, if needed (or rewrite to use a callback)	  
    // add ES6 poly-fill for the Promise, if needed (or rewrite to use a callback)
    // função que efetua troca dinâmica da folha de estilo
  function addcss(css){	  function addcss(css){
    var head = document.getElementsByTagName('head')[0];
    var head = document.getElementsByTagName('head')[0];
    head.removeChild(head.childNodes[8])	    head.removeChild(head.childNodes[8])
    var s = document.createElement('link');	 
    var s = document.createElement('link');
    s.rel  = 'stylesheet';	    s.rel  = 'stylesheet';
    s.type = 'text/css';	    s.type = 'text/css';
    s.href = css;	    s.href = css;
    s.media = 'all';	    s.media = 'all';
    head.appendChild(s);	    head.appendChild(s);
 }