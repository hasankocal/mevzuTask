import { StyleSheet, Text, View, Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import React from 'react'

const Card = (card) => {
    return (
        <View style={styles.card_conrainer}>
            <View style={styles.card}>
                <View style={styles.card_image}>
                    <FastImage
                        style={styles.card_image}
                        source={{
                            uri: "https://api.mevzu.app/" + `${card.user_2_photo_link}`,
                        }}
                    />
                </View>
                <View style={styles.card_details}>

                    <Text style={styles.card_text}>{card.user_2_full_name}</Text>
                    <Text style={styles.card_age}>Yaş: {card.user_1_age}</Text>
                    <Text style={styles.card_age}>Son Görülme: {((card.updated_at.split('T')[1]).split(':')[0] + ":" + (card.updated_at.split('T')[1]).split(':')[1])}</Text>

                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card_conrainer: {
        flex: 1,

    },
    card: {
        justifyContent: 'center',
        marginTop: 100,
        borderRadius: 16,
        width: Dimensions.get('window').width - 30,
        height: 450,
        backgroundColor: "#EDDCD2",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    card_details: {

    },
    card_text: {
        fontSize: 22,
        padding: 12,
        paddingLeft: 32,
    },
    card_age: {
        fontSize: 20,
        paddingLeft: 32,
    },
    card_image: {
        alignSelf: "center",
        width: 300,
        height: 320,
        borderRadius: 18

    }
})