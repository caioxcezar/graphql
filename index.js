import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL App");
});

const root = {
  hello: () => "Hi!",
};

app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));

app.listen(8080, () => console.log("Running serevr on ::8080/graphql"));
