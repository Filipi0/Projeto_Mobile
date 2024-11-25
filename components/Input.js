import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function InputField({ placeholder, value, onChangeText, keyboardType = 'default' }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#fff"
                keyboardType={keyboardType}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    input: {
        width: 300,
        backgroundColor: '#ff6666',
        borderRadius: 16,
        padding: 10,
        color: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
    },
});