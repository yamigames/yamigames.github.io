function recentTrack(e){var t=(new Array).concat(e.recenttracks.track)[0],n=t.name+"+"+t.artist["#text"];document.getElementById("artist").innerHTML=t.artist["#text"],document.getElementById("song").innerHTML=t.name,document.getElementById("song-link").href="https://www.youtube.com/results?search_query="+n}try{Typekit.load({async:!0})}catch(e){}$(document).ready(function(){var e=$("body");$("#menu").on("click",function(){return e.toggleClass("state-nav-active"),!1}),$("#full-view, #full-view-gallery").on("click",function(){return $("#full-view-gallery").toggleClass("state-active"),!1})});