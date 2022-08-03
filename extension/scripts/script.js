(async () => {
  const wait = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  if (getSpecialId() === null) {
    const { body, status } = await zlFetch(
      "http://localhost:3000/api/customRequest",
      {
        method: "post",
        body: {
          method: "POST",
          reqUrl: "/addTwitchee",
          name: getUsername(),
          stream: getCurrentStream() == "" ? null : getCurrentStream(),
          status: "online",
          id: Math.floor(Math.random() * 1000000),
          pfp: await getTwitchPFP(getUsername()),
          friends: [
            {
              name: "TFW Example",
              stream: "XQC",
              status: "custom",
              id: Math.floor(Math.random() * 1000000),
              friends: [],
              pfp: "https://static-cdn.jtvnw.net/jtv_user_pictures/xqc-profile_image-9298dca608632101-300x300.jpeg",
            },
          ],
        },
      }
    );
    if (status == 200) {
      saveSpecialId(body.tfwId);
      console.log("Twitchee added");
    }
  }

  wait(2000).then(async () => {
    var div = $(
      xpathToElement(
        '//*[@id="sideNav"]/div/div/div/div/div[3]/div/div/div[2]/div/div[1]'
      )
    );
    div.append(tfwCategory.render());

    const friends = await getFriends();
    const twitchFriendsDiv = $("#twitch-friends-a82882a");
    twitchFriendsDiv.empty();
    for (let i = 0; i < friends.length; i++) {
      const friend = friends[i];
      twitchFriendsDiv.append(tfwTwitchee.render(friend));
    }

    const self = await getTwitchee();
    twitchFriendsDiv.append(tfwSelf.render(self));

    const userPFP = $(
      xpathToElement(
        '//*[@id="root"]/div/div[2]/nav/div/div[3]/div[6]/div/div/div/div/button/div/figure/img'
      )
    );
    userPFP.css("border-radius", "100%");
    userPFP.css("border", "1px solid" + statusToColor(self.status));
    userPFP.css("display", "inline-block");
  });

  // ** jquery ** //
  $(document).on("click", (event) => {
    console.log(event);
  });
  $("#tfw-edit").on("click", () => {
    const clazz = $(this);
    console.log(clazz);
  });

  // ** Basic ** //
  function xpathToElement(xpath) {
    var xresult = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.ANY_TYPE,
      null
    );

    var xnodes = [],
      xres;
    while ((xres = xresult.iterateNext())) xnodes.push(xres);
    return xnodes;
  }

  function getCurrentStream() {
    return window.location.href.replace("https://www.twitch.tv/", "");
  }

  function statusToColor(status) {
    switch (status) {
      case "online":
        return "#00ff00";
      case "offline":
        return "#808080";
      case "idle":
        return "#ff6200";
      case "streaming":
        return "#6f00ff";
      case "busy":
        return "#ff2200";
      case "custom":
        return "#3446eb";
      default:
        return "#808080";
    }
  }

  // ** Local Storage ** //
  function saveSpecialId(specialId) {
    localStorage.setItem("specialId", specialId);
  }

  function getSpecialId() {
    return localStorage.getItem("specialId") === null
      ? null
      : localStorage.getItem("specialId");
  }

  function getUsername() {
    var cookies = document.cookie.split(";");
    for (var i = 1; i <= cookies.length; i++) {
      var cookieName = cookies[i].split("=")[0].toLowerCase().trimStart();
      var cookieValue = cookies[i].split("=")[1];
      if (cookieName == "name") return cookieValue;
    }
  }

  // ** API Requests ** //
  async function getTwitchPFP(username) {
    const { body } = await zlFetch("http://localhost:3000/api/customRequest", {
      method: "post",
      body: {
        method: "GET",
        reqUrl: "/getTwitchPFP",
        username: username,
      },
    });
    return body;
  }

  async function getFriends() {
    const { body } = await zlFetch("http://localhost:3000/api/customRequest", {
      method: "post",
      body: {
        method: "GET",
        reqUrl: "/getTwitchee/friends",
        tfwId: getSpecialId(),
      },
    });
    return body;
  }

  async function getTwitchee() {
    const { body } = await zlFetch("http://localhost:3000/api/customRequest", {
      method: "post",
      body: {
        method: "GET",
        reqUrl: "/getTwitchee",
        tfwId: getSpecialId(),
      },
    });
    return body;
  }
})();
