import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SubmitButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffd700',
        borderRadius: 16,
        paddingVertical: 15,
        paddingHorizontal: 50,
        marginVertical: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF2929',
    },
});