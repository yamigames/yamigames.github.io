function recentTrack(t){var e=(new Array).concat(t.recenttracks.track)[0],n=e.name+"+"+e.artist["#text"];document.getElementById("artist").innerHTML=e.artist["#text"],document.getElementById("song").innerHTML=e.name,document.getElementById("song-link").href="https://www.youtube.com/results?search_query="+n}try{Typekit.load({async:!0})}catch(e){}$(document).ready(function(){var t=$("body");$("#menu").on("click",function(){return t.toggleClass("state-nav-active"),!1})});