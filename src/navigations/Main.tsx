import { createStackNavigator } from "@react-navigation/stack";
import { List } from "../screens/List";
import { Write } from "../screens/Write";
import React from 'react';
import { Read } from "../screens/Read";
import { Button } from "react-native";
import { Search } from "../screens/Search";

const Stack = createStackNavigator();

export const StackNavigate = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:true}} >
        <Stack.Screen name="List" component={List} options={({navigation})=>({headerRight: ()=> (
          <Button onPress={()=>{
            navigation.navigate('Search')
          }} title="검색" color="blue" />
        )})}/>
        <Stack.Screen name="Write" component={Write} />
        <Stack.Screen name="Read" component={Read} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
  )
}