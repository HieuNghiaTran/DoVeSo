import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";





const CheckTicket = () => {
    const navigation = useNavigation();
    const imageUrl = "https://res.cloudinary.com/dofj1px4t/image/upload/v1715603684/DoVeSo/uqepeyv5hzk7onnghxdg.png";

    const styles = StyleSheet.create({
        textWelcome: {
            textAlign: "center",
            marginBottom: "30%",
            fontSize: 30,
        },
        header: {
            top: 0,
            height: "10%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomColor: "red",
            borderBottomWidth: 2,
            backgroundColor: "#fff"

        },
        image: {
            margin: "auto",
            width: "60%",
            height: "50%",
            resizeMode: "cover",
        },
        footer: {
            position: "absolute",
            flexDirection: "row",
            backgroundColor: "red",
            justifyContent: "space-around",
            alignItems: "center",
            bottom: 0,
            height: "10%",
            width: "100%",
        },
        footerItem: {
            flexDirection: "row",
            alignItems: "center",
        },
        footerText: {
            color: "#fff",
            fontWeight: "bold",
            marginLeft: 5,
            marginTop: 5,
        },
        iconTextContainer: {
            alignItems: 'center',
        },
        mainItem: {
            alignItems: "center",
            margin: 10,
            borderRadius: 8,
            backgroundColor: "#ffaf40",
            padding: 20,
            width: 200,
        },
        main: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        mainText:{

            color: "#fff",
            fontWeight: "bold",
            marginTop:10,


        }
    });

    return (
        <>
            <View style={styles.header}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>

            <View style={styles.main}>
                <TouchableOpacity style={styles.mainItem} onPress={() => navigation.navigate('CheckTicketByCamera')}>
                    <View style={styles.iconTextContainer}>
                    <Fontisto name="camera" size={34} color="black" />
                        <Text style={styles.mainText}>CAMERA</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainItem}>
                    <View style={styles.iconTextContainer}>
                    <Entypo name="keyboard" size={34} color="black" />
                        <Text style={styles.mainText}>NHẬP TRỰC TIẾP</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome name="home" size={24} color="#fff" />
                        <Text style={styles.footerText}>TRANG CHỦ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome name="credit-card-alt" size={22} color="#fff" />
                        <Text style={styles.footerText}>NẠP CARD</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('CheckTicket')}>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome6 name="money-check-dollar" size={24} color="#fff" />
                        <Text style={styles.footerText}>DÒ XSKT</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <View style={styles.iconTextContainer}>
                        <MaterialIcons name="policy" size={24} color="#fff" />
                        <Text style={styles.footerText}>CHÍNH SÁCH</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default CheckTicket;
