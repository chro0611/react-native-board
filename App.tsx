import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { List } from './src/screens/List';
import 'react-native-gesture-handler';
import { StackNavigate } from './src/navigations/Main';
import { NavigationRef } from './src/common/Navigation';

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer ref={NavigationRef}>
          <StackNavigate />
      </NavigationContainer>
    </ApolloProvider>
  );
}

