import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ReadProvider } from '../providers/BoardProvider';

export const Read = ({route, navigation}) => {

    const { id } = route.params;


    return (
        <ReadProvider id={id}>
            <ReadUI navigation={navigation} />
        </ReadProvider>
    )
}

const ReadUI = ({navigation, ...props}) => {
    const {data, refetch} = props;

    return (
        <>
            <View style={styles.headerWrapper}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.user_id}>{data.user_id}</Text>
            </View>
            <View style={styles.contentWrapper}>
                <Text style={styles.content}>{data.content}</Text>
            </View>
        </>
    );
}

const styles= StyleSheet.create({
    headerWrapper : { 
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : 'flex-end',
        borderBottomWidth:2,
        borderBottomColor : 'darkgray'
    },
    contentWrapper : {
        flex:11,
        backgroundColor:'white'
    },
    title : {
        fontSize:30,
    },
    user_id : {
        fontSize:20,
    },
    content : {

    }
})