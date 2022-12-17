const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/form-submit", (req, res) => {
  //configure the webhooks
  axios
    .post(
      "https://hooks.slack.com/services/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",
      {
        blocks: [
          {
            type: "section",
            text: {
              type: "plain_text",
              emoji: true,
              text: `Name:*${req.body.name}*\n\n Email:*${req.body.email}*`,
            },
          },
        ],
      }
    )
    .then(() => {
      res.send("Form submitted");
    })
    .catch(() => {
      res.send("Form submissionfailed");
    });
});
app.listen(3000, () => {
  console.log("app listening at port 3000");
});
