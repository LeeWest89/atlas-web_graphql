const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema');
const mongoose = require('mongoose');

const app = express();
const mongo = 'mongodb+srv://leewest:haCVed57qXMLJGoq@cluster0.pzumxsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
