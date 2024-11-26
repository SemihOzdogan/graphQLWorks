import React, { FC } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useQuery } from '@apollo/client';
import { generateUserQuery } from '../../query';

interface IUser {
    user: IUserItem
}
interface IUserItem {
    id: string;
    name: string;
    email: string;
    phone: string;
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
    const fields = `id name email phone`
    const { error, loading, data } = useQuery(generateUserQuery(fields));
    if (error) {
        return (
            <Text>{error.message}</Text>
        )
    }
    return (
        loading ?
            <ActivityIndicator size="large" color="#ccc" />
            :
            <FlatList data={data.users.data} renderItem={({ item }) => <User user={item} />} />
    )
}

export default UserList

const styles = StyleSheet.create({
    userItem: {
        width: "100%",
        borderRadius: 16,
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    }
})