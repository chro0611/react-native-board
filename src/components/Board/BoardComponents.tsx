import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigate } from "../../common/Navigation";

export const BoardList = ({data, ...props}) => {
  
    const style = StyleSheet.create({
      list_item : {
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor : "gray"
      },
      title: {
        fontSize: 20
      },
      user_id : {
        fontSize: 15,
        color : "gray"
      }
    })
  
    const renderItem = ({item})=>{
      const goRead = () => {

        console.log(item);

        navigate("Read", { id: item.board_id });
      }
  
      return (
        <TouchableOpacity style={style.list_item} onPress={goRead}>
          <View>
              <Text style={style.title}>{item.title}</Text>
          </View>
          <View >
              <Text style={style.user_id}>{item.user_id}</Text>
          </View>
        </TouchableOpacity>
      )
    }
    
    return (
        <SafeAreaView>
          <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={(value, index)=>index.toString()}
          />
        </SafeAreaView>
    )
  }