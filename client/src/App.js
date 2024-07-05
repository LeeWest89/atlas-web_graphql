import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
// components
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import AddProject from './components/AddProject';
// apollo client setup

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div id = "main" >
        <div id = "bg" ></div> 
        <h1 > Holberton school tasks </h1> 
        <TaskList />
        <AddProject />
        <AddTask />
      </div>
    </ApolloProvider>
  );
}

export default App;
