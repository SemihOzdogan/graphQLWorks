import React from 'react';
import { SafeAreaView } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import UserList from './src/components/Card/User';

const clientConfig = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={clientConfig}>
      <SafeAreaView style={{ flex: 1 }}>
        <UserList />
      </SafeAreaView>
    </ApolloProvider>
  )
}

export default App