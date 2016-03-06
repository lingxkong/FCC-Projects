var userList = ["storbeck", "freecodecamp", "ESL_SC2", "OgamingSC2", "terakilobyte", "brunofin", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "comster404"];
//var userEntry="";


function loopJson(i) {
  var user = userList[i];
  $.getJSON("https://api.twitch.tv/kraken/streams/" + user + "?callback=?", function(data) {
    
    var userStatus = "";
    var userGame = "";
    var userGameStatus = "";
    var userURL = "";
    var userLogoURL = "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
    if (data.hasOwnProperty("stream")) {
      var userStream = data.stream;
      if (userStream==null) 
      {
        $.getJSON("https://api.twitch.tv/kraken/channels/" + user + "?callback=?", function(dataOff) {
          var userName = dataOff.display_name;
          var userStatus = "Offline";
          var userURL = dataOff.url;
          if (dataOff.logo !== null) {
            var userLogoURL = dataOff.logo;
          } else {
            var userLogoURL = "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
          }
          var userEntry = "<div class=\"row\"><div class=\"user col-sm-2\"><a href=\"" + userURL + "\" target=\"_blank\"><img src=\"" + userLogoURL + "\" class=\"logo\" width=\"50\" height=\"50\"></a></div><div class=\"user col-md-3\"><a href=\"" + userURL + "\" target=\"_blank\">" + userName + "</a></div><div class=\"status col-md-7\">" + userStatus + "</div></div>";
          var $entry = $("<p class='offline'>").html(userEntry);
          $(".channel-list").append($entry);
        });
      }
      else if (userStream.hasOwnProperty("channel")) {
        var userName = userStream.channel.display_name;
        userStatus = "Online";
        userGame = userStream.game;
        userGameStatus = userStream.channel.status;
        userURL = userStream.channel.url;
        if (userStream.channel.logo !== null) {
          userLogoURL = userStream.channel.logo;
        }
        var userEntry = "<div class=\"row\"><div class=\"user col-sm-2\"><a href=\"" + userURL + "\" target=\"_blank\"><img src=\"" + userLogoURL + "\" class=\"logo\" width=\"50\" height=\"50\"></a></div><div class=\"user col-md-3\"><a href=\"" + userURL + "\" target=\"_blank\">" + userName + "</a></div><div class=\"status col-md-7\">" + userGame + ": " + userGameStatus + "</div></div>";
        var $entry = $("<p class='online'>").html(userEntry);
        $(".channel-list").append($entry);
      } 
    }
    else if (data.hasOwnProperty("error")) {
	    userStatus = "Account closed";
	    var userLogoURL = "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
	    var userEntry = "<div class=\"row\"><div class=\"user col-sm-2\"><img src=\"" + userLogoURL + "\" class=\"logo\" width=\"50\" height=\"50\"></div><div class=\"user col-md-3\">" + user + "</div><div class=\"status col-md-7\">" + userStatus + "</div></div>";
	    var $entry = $("<p class='offline'>").html(userEntry);
	    $(".channel-list").append($entry);
    } 
  });

}

/*function onlineErrorUser(data) {
  
  
  
  
  
  else if ($userStream.hasOwnProperty("channel") === false) {
      getJsonChannel($user);

    }
  } else if (data.hasOwnProperty("error")) {
    $userStatus = "Account closed";
    $userLogoURL = "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
    $userEntry = $("<div>").html("<div class=\"user\"><img src=\"" + $userLogoURL + "\" class=\"logo\" width=\"50\" height=\"50\">" + $user + "</div><div class=\"status\">" + $userStatus + "</div>");
  }
}*/

$(document).ready(
  function() {
    for (var i = 0; i < userList.length; i++) {
      loopJson(i);
    }
  }
);
