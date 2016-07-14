$(document).ready(function(){ 
    $("#btn").on("click", function(event){ 
        event.preventDefault();
        var song = $("#input").val();
        var request = $.get("https://api.spotify.com/v1/search?type=track&query=" + '"' + song + '"');

            
            function onsuccess (song){
                var track = song.tracks.items[0];
                    $(".title").text(track.name);
                    $(".author").html(track.artists[0].name);
                    $(".imagen").prop("src", track.album.images[0].url);
                    $(".songsAudio").prop ("src", track.preview_url);   
            }
                    request.done(onsuccess);
        });


    $ (".btn-play").on("click", function(){
        if ($(this).hasClass("disabled")){
            $(this).removeClass("disabled");
            $(this).addClass("playing");
            $(".songsAudio").trigger("play");
        }
        else { 
            $(this).removeClass("playing");
            $(this).addClass("disabled");
            $(".songsAudio").trigger("pause");
        }
    });

    function printTime (){ 
        var current = $(".songsAudio").prop("currentTime");
        $("#progress").val((current));
        console.debug ("Current time: " + current);
    }
        $(".songsAudio").on("timeupdate", printTime);

});