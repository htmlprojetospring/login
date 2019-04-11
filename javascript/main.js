    function addcss(css){
    var head = document.getElementsByTagName('head')[0];
    head.removeChild(head.childNodes[8])
    var s = document.createElement('link');
    s.rel  = 'stylesheet';
    s.type = 'text/css';
    s.href = css;
    s.media = 'all';
    head.appendChild(s);
 }
