import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL App");
});

app.listen(8080, () => console.log("Running serevr on ::8080/graphql"));
