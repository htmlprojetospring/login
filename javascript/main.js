function addcss(css){
    var head = document.getElementsByTagName('head')[0];
    const elem = document.getElementById('fancy');
    
    elem.disabled = true;

    head.removeChild(elem);

    var s = document.createElement('link');
    s.rel  = 'stylesheet';
    s.type = 'text/css';
    s.href = css;
    s.media = 'all';
    s.id = 'fancy';
    
    head.appendChild(s);

}