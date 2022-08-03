import request from "request";

request.post(
  "http://localhost:3000/api/customRequest",
  {
    body: {
      method: "GET",
      reqUrl: "/test",
    },
    json: true,
  },
  (err, res, body) => {
    if (err) return console.log(err);
    console.log(body);
  }
);
