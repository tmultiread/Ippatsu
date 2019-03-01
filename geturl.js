function getUrl() {
    var src = $('body').html();
    var re_url = /html5player\.setVideoUrlHigh\s*\(\s*\'(.+)\'\s*\)\s*\;/g;
    var arr_url = re_url.exec( src );
    window.location.href = arr_url[1];
}

getUrl();
