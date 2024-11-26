import React, { FC } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useQuery } from '@apollo/client';
import { generateQuery, IRequest } from '../../query';

interface IUser {
    user: IUserItem
}
interface IUserItem {
    id: string;
    name: string;
    email?: string;
    phone?: string;
}

const User: FC<IUser> = ({ user }) => {
    return (
        <View key={user.id} style={styles.userItem}>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
            <Text>{user.phone}</Text>
        </View>
    )
}

const UserList = () => {
    const requestPayload: IRequest = {
        path: "users",
        payload: ["id", "name", "email", "phone"]
    }
    const { error, loading, data } = useQuery(generateQuery(requestPayload));
    if (error) {
        return (
            <Text>{error.message}</Text>
        )
    }
    return (
        loading ?
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#ccc" />
            </View>

            :
            <FlatList
                data={data.users.data}
                renderItem={({ item }) => <User user={item} />}
            />
    )
}

export default UserList

const styles = StyleSheet.create({
    userItem: {
        width: "100%",
        borderRadius: 16,
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignSelf: "baseline",
        alignItems: "center",
        marginVertical: 10,
        paddingVertical: 5
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})