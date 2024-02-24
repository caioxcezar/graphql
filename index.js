import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL App");
});

const root = {
  product: () => ({
    id: 1,
    name: "A Name",
    description: "A Description",
    price: 32.59,
    soldout: false,
    stores: [{ store: "BH" }, { store: "JF" }],
  }),
};

app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));

app.listen(8080, () => console.log("Running serevr on ::8080/graphql"));
