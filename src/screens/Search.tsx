import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { BoardList } from '../components/Board/BoardComponents';
import { ListProvider } from '../providers/BoardProvider';
import { listQuery } from '../querys/BoardQuery';

export const Search = (props) => {
    return (
        <ListProvider>
            <SearchUI {...props} />
        </ListProvider>
    )
}

export const SearchUI = ({navigation, ...props}) => {
    const [searchWord, setSearchWord] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const { data, refetch } = props;

    useEffect(()=> {
        if(searchWord && data){

            setSearchResult(data.filter(x=> x.title.includes(searchWord) || x.user_id.includes(searchWord)))
        }
    }, [searchWord]);

    useEffect(()=>{
        console.log("searchResult===>", searchResult);

    }, [searchResult]);

    return (
        <>
            <TextInput style={styles.search}
                onChangeText={text => setSearchWord(text)}
                value={searchWord}
            />
            <BoardList data={searchResult} navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    search : {
        borderWidth:1,
        backgroundColor:'white',
        borderColor:'black',
        padding:5,
        margin:10,
    }
})