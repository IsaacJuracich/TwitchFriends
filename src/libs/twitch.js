import request from "request";

const TWITCH_CLIENT_ID = "dsqsmbitex17tvfyv4lxg1xlpuccw0";
const TWITCH_CLIENT_SECRET = "pye6bfuo5i1rdzsqk7t4cgu6ugotdx";
let ACCESS_TOKEN = "pcqgxj2g31gr4e8ghjzodg6fjp7zft";

const accessTokenOptions = {
  method: "POST",
  uri: `https://id.twitch.tv/oauth2/token`,
  qs: {
    client_id: TWITCH_CLIENT_ID,
    client_secret: TWITCH_CLIENT_SECRET,
    grant_type: "client_credentials",
  },
  json: true,
};
const userIdOptions = (username) => {
  return {
    method: "GET",
    uri: `https://api.twitch.tv/helix/users?login=${username}`,
    headers: {
      Authorization: `Bearer ` + ACCESS_TOKEN,
      "Client-ID": TWITCH_CLIENT_ID,
    },
    json: true,
  };
};

export default {
  getAccessToken: async () => {
    return new Promise(async (resolve, reject) => {
      request(accessTokenOptions, async (err, response, body) => {
        if (err) return reject(err);
        ACCESS_TOKEN = body.access_token;
        resolve(ACCESS_TOKEN);
      });
    });
  },
  getUserId: async (username) => {
    return new Promise(async (resolve, reject) => {
      request(userIdOptions(username), async (err, response, body) => {
        if (err) return reject(err);
        resolve(body.data[0].id);
      });
    });
  },
  isLive: async (username) => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("https://www.twitch.tv/" + username);
      if ((await response.text()).includes("isLiveBroadcast"))
        return resolve(true);
      resolve(false);
    });
  },
  getUserInfo: async (username) => {
    return new Promise(async (resolve, reject) => {
      request(userIdOptions(username), async (err, response, body) => {
        if (err) return reject(err);
        resolve(body.data[0]);
      });
    });
  },
  getUserPfp: async (username) => {
    return new Promise(async (resolve, reject) => {
      request(userIdOptions(username), async (err, response, body) => {
        if (err) return reject(err);
        resolve(body.data[0].profile_image_url);
      });
    });
  },
};
