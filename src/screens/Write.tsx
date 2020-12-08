import { gql, useMutation } from '@apollo/client';
import { useLinkProps } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { writeQuery } from '../querys/BoardQuery';



const style = StyleSheet.create({
    textInput : {
        borderWidth : 1,
        borderColor : "black",
        backgroundColor : "white",
        height:40,
        margin: 10
    }
})


export const Write = (props) => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const [writeMutation, {data, loading, error}] = useMutation(writeQuery);

    const write = () => {
        writeMutation({
            variables : {
                user_id : userId,
                title,
                content
            }
        })
    }

    useEffect(()=>{
        console.log("userId===>", userId);
        console.log("title===>", title);
        console.log("content===>", content)

    }, [userId, title, content]);

    useEffect(()=>{
        if(error)
        {
            setErrorMessage(<Text>오류가 발생하였습니다</Text>);
        }else
        {
            setErrorMessage(null);
        }
    }, [error]);

    useEffect(()=>{
        if(data)
        {
            if(data.write == "success")
            {
                Alert.alert("저장에 성공하였습니다");
                props.navigation.navigate("List");
            }else
            {
                Alert.alert("저장에 실패하였습니다");
            }
        }
    }, [data]);

    return (
        <>
            <View>
                <Text>아이디</Text>
                <TextInput 
                    style={style.textInput}
                    onChangeText={value=>setUserId(value)}
                    value={userId}
                />
            </View>
            <View>
                <Text>제목</Text>
                <TextInput 
                    style={style.textInput}
                    onChangeText={value=>setTitle(value)}
                    value={title}
                />
            </View>
            <View>
                <Text>내용</Text>
                <TextInput 
                    style={[style.textInput, {height: 300}]}
                    onChangeText={value=>setContent(value)}
                    value={content}
                    multiline
                />
            </View>
            { errorMessage }
            <Button title={"저장"} onPress={write} />
        </>
    );
}