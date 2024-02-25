# Anotações:

## Querying with Aliases

Imagine que o front-end necessite de um valor expefico.  
Ex.:

```
query {
  price: getProduct(id:"65dbb995291348f729de6229") {
    name
    price
  }
  description: getProduct(id:"65dbba11291348f729de622b") {
    name
    description
  }
}
```

## Querying with Fragments

Com fragment é possível agilizar e padronizar as queries

```
query {
  widget1: getProduct(id:"65dbb995291348f729de6229") {
    ...widgetFragment
  }
  widget2: getProduct(id:"65dbba11291348f729de622b") {
    ...widgetFragment
  }
}

fragment widgetFragment on Product {
  name
  price
  description
  soldout
}
```
