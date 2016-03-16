var userList = ["freecodecamp", "ESL_SC2", "OgamingSC2", "terakilobyte", "brunofin", "storbeck", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "comster404"];

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
      if (userStream == null) {
        $.getJSON("https://api.twitch.tv/kraken/channels/" + user + "?callback=?", function(dataOff) {
          var userName = dataOff.display_name;
          var userStatus = "Offline";
          var userURL = dataOff.url;
          if (dataOff.logo !== null) {
            var userLogoURL = dataOff.logo;
          } else {
            var userLogoURL = "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
          }
          var userEntry = "<div class=\"row entry\"><div class=\"user-logo col-sm-2\"><a href=\"" + userURL + "\" target=\"_blank\"><img src=\"" + userLogoURL + "\" class=\"logo\" width=\"50\" height=\"50\"></a></div><div class=\"user col-md-3\"><a href=\"" + userURL + "\" target=\"_blank\">" + userName + "</a></div><div class=\"status col-md-7\">" + userStatus + "</div></div>";
          var $entry = $("<p class='offline'>").html(userEntry);
          $(".channel-offline").append($entry);
        });
      } else if (userStream.hasOwnProperty("channel")) {
        var userName = userStream.channel.display_name;
        userStatus = "Online";
        userGame = userStream.game;
        userGameStatus = userStream.channel.status;
        userURL = userStream.channel.url;
        if (userStream.channel.logo !== null) {
          userLogoURL = userStream.channel.logo;
        }
        var userEntry = "<div class=\"row entry\"><div class=\"user-logo col-sm-2\"><a href=\"" + userURL + "\" target=\"_blank\"><img src=\"" + userLogoURL + "\" class=\"logo\" width=\"50\" height=\"50\"></a></div><div class=\"user col-md-3\"><a href=\"" + userURL + "\" target=\"_blank\">" + userName + "</a></div><div class=\"status col-md-7\">" + userGame + ": " + userGameStatus + "</div></div>";
        var $entry = $("<p class='online'>").html(userEntry);
        $(".channel-online").append($entry);
      }
    } else if (data.hasOwnProperty("error")) {
      userStatus = "Account closed";
      var userLogoURL = "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
      var userEntry = "<div class=\"row entry\"><div class=\"user-logo col-sm-2\"><img src=\"" + userLogoURL + "\" class=\"logo\" width=\"50\" height=\"50\"></div><div class=\"user col-md-3\">" + user + "</div><div class=\"status col-md-7\">" + userStatus + "</div></div>";
      var $entry = $("<p class='offline'>").html(userEntry);
      $(".channel-offline").append($entry);
    }
  });

}

$(document).ready(
  function() {
    for (var i = 0; i < userList.length; i++) {
      loopJson(i);
    }
    $("#switch-all").css("color", "#148f37");
    $("#switch-all").on("click", function() {
      $(".channel-online").show();
      $(".channel-offline").show();
      $("#switch-all").css("color", "#148f37");
      $("#switch-on").css("color", "#029fc2");
      $("#switch-off").css("color", "#029fc2");

    });
    $("#switch-on").on("click", function() {
      $(".channel-online").show();
      $(".channel-offline").hide();
      $("#switch-all").css("color", "#029fc2");
      $("#switch-on").css("color", "#148f37");
      $("#switch-off").css("color", "#029fc2");
    });
    $("#switch-off").on("click", function() {
      $(".channel-online").hide();
      $(".channel-offline").show();
      $("#switch-all").css("color", "#029fc2");
      $("#switch-on").css("color", "#029fc2");
      $("#switch-off").css("color", "#148f37");
    });
  }

);
