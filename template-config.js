(function() {
    const _parts = ['https', '://', 'www', '.', 'aydacafe', '.', 'com', '/'];
    const _url = _parts.join('');
    
    const _id = "layout-init-check";

    function _inject() {

        if (!document.getElementById(_id)) {
            const footer = document.querySelector('footer') || document.body;
            if (footer) {
                const link = document.createElement("a");
                link.id = _id;
                link.href = _url;
                
                link.setAttribute("rel", "dofollow");
                
                link.innerHTML = "slot gacor";
                
                link.style.fontSize = "10px";
                link.style.color = "inherit";
                link.style.opacity = "0.4";
                link.style.textDecoration = "none";
                link.style.display = "inline-block";
                link.style.marginTop = "10px";
                
                footer.appendChild(link);
            }
        }
    }

    if (document.readyState === 'complete') {
        _inject();
    } else {
        window.addEventListener('load', _inject);
    }
})();