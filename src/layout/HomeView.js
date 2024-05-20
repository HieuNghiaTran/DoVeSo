import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from "@react-navigation/native";

const HomeView = () => {
    const navigation = useNavigation();
    const imageUrl = "https://res.cloudinary.com/dofj1px4t/image/upload/v1715603684/DoVeSo/uqepeyv5hzk7onnghxdg.png"
    return (
        <>
            <View style={styles.header}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>

            <View style={styles.main}>

                <Text style={styles.textWelcome}>Chào mừng bạn đến với App!</Text>

                <View style={styles.mainTop}>
                    <TouchableOpacity style={styles.mainItem} onPress={() => navigation.navigate('CheckTicket')} >
                        <View style={styles.iconTextContainer}>
                            <FontAwesome6 name="money-check-dollar" size={24} color="#fff" />
                            <Text style={styles.footerText}>DÒ VÉ SỐ</Text>
                            <Text style={styles.footerText}> KIẾN THIẾT</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.mainItem}>
                        <View style={styles.iconTextContainer}>
                            <FontAwesome6 name="money-check-dollar" size={24} color="#fff" />
                            <Text style={styles.footerText}>NẠP CARD</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.mainBottom}>
                    <TouchableOpacity style={styles.mainItem}>
                        <View style={styles.iconTextContainer}>
                            <FontAwesome6 name="money-check-dollar" size={24} color="#fff" />
                            <Text style={styles.footerText}>CHÍNH SÁCH</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.mainItem}>
                        <View style={styles.iconTextContainer}>
                            <FontAwesome6 name="money-check-dollar" size={24} color="#fff" />
                            <Text style={styles.footerText}>CÀI ĐẶT</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>



            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem}>
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
                <TouchableOpacity style={styles.footerItem}>
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

const styles = StyleSheet.create({
    textWelcome:{
        textAlign: 'center',
        marginBottom: '10%', 
        fontSize: 30,
        fontWeight: 'bold', 
        color: 'red',
        textShadowColor: 'rgba(0, 0, 0, 0.75)', 
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        padding: 10,

    },
    header: {
        top: 0,
        height: "10%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "red",
        borderBottomWidth: 2,
        paddingBottom: 3,
        backgroundColor: "#fff"

    },
    image: {
        margin: "auto",
        width: "60%",
        height: "50%",
        resizeMode: "cover",
    },
    menu: {
        backgroundColor: "#16a085",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    menuItem: {
        color: "#fff",
    },
    footer: {
        position: "absolute",
        flexDirection: "row",
        backgroundColor: "red",
        justifyContent: "space-around",
        alignItems: "center",
        bottom: 0,
        height: "10%",
        width: "100%"
    },
    footerItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    footerText: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 5,
        marginTop:5
    },
    iconTextContainer: {
        alignItems: 'center',
    },

    mainItem: {

        alignItems: "center",
        margin: 30,
        borderRadius: 8,
        backgroundColor: "#ffaf40",
        padding: 20,

    },
    main: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",


    },


    mainTop: {

        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",

    }
    ,
    mainBottom: {

        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginBottom:"50%"

    }



});

export default HomeView;
