import { useQuery } from "@apollo/client";
import React from "react";
import { Text } from "react-native";
import { listQuery, readQuery } from "../querys/BoardQuery";

export const ListProvider = ({children}) => {
    const { loading, error, data, refetch } = useQuery(listQuery, {
        variables : {
          offset : 0,
          limit: 10
        }
    });


    if(loading)
    {
        return <Text>...Loading</Text>;
    }
    if(error)
    {
        return <Text>Error</Text>;
    }

    console.log(data.list);

    return (
        <>
        { React.cloneElement(children, { data : data.list, refetch : refetch }) }
        </>

    )
}

export const ReadProvider = ({children, id}) => {
    const {loading, error, data, refetch} = useQuery(readQuery, {
        variables : {
            id
        }
    })

    if(loading)
    {
        return <Text>...Loading</Text>;
    }
    if(error)
    {
        return <Text>Error</Text>;
    }

    return (
        <>
        { React.cloneElement(children, { data : data.read, refetch : refetch }) }
        </>
    )
}