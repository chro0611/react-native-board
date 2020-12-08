import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigate, NavigationRef } from "../common/Navigation";
import { BoardList } from "../components/Board/BoardComponents";
import { ListProvider } from "../providers/BoardProvider";
import { listQuery } from "../querys/BoardQuery";

export const List = ({navigation}) => {

  return (
    <ListProvider>
      <ListUI navigation={navigation} />
    </ListProvider>
  )
}

const ListUI = ({navigation, ...props}) => {
  const { data, refetch } = props;

  useEffect(()=>{
    const subscribe = navigation.addListener("focus", ()=>{
      console.log("focus screen");
      refetch();
    });

    return subscribe;
  }, []);

  const goWrite = () => {
    navigate('Write');
  }

  return (
    <>
      <BoardList index={1} data={data} />
      <Button title={"글쓰기"} onPress={goWrite} />
    </>
  )
}
