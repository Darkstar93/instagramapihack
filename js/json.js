$.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/8773718/media/recent/?access_token=8773718.8025895.5c1e7a67e3a64265b39a518cd5b0485b",
        success:  function(data) {
for (var i = 0; i < 20; i++) {
$(".pics").append("<a target='_blank' href='" + data.data[i].link +
"'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
}
}
})