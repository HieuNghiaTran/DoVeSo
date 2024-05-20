import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RNCamera } from 'react-native-camera';
import TesseractOcr, { LANG_ENGLISH } from 'react-native-tesseract-ocr';
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get('window');
const CheckTicketByCamera = () => {
    const cameraRef = useRef(null);
    const [ocrResult, setOcrResult] = useState('');
    const [imageUri, setImageUri] = useState(null);
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
      



        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          camera: {
            flex: 1,
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          },
          buttonContainer: {
            position: 'absolute',
            bottom: 20,
            width: '100%',
            alignItems: 'center',
          },
          captureButton: {
            width: 100,
            padding: 15,
            borderRadius: 5,
            backgroundColor: '#1c313a',
            alignItems: 'center',
          },
          buttonText: {
            color: '#fff',
            fontSize: 16,
          },
          previewImage: {
            width: 200,
            height: 200,
            resizeMode: 'contain',
            marginVertical: 20,
          },
          ocrResultContainer: {
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 5,
          },
          ocrResultText: {
            fontSize: 16,
            color: '#333',
          },
    });


    const takePicture = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            setImageUri(data.uri);
            recognizeText(data.uri);
        }
    };


    const recognizeText = async (imagePath) => {
        try {
            const text = await TesseractOcr.recognize(imagePath, LANG_ENGLISH, {
                whitelist: null,
                blacklist: null,
            });
            setOcrResult(text);
        } catch (err) {
            console.error(err);
        }
    };

    return (

        <>
            <View style={styles.header}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>

            <View style={styles.main}>



                <View style={styles.container}>
                    <RNCamera
                        ref={cameraRef}
                        style={styles.camera}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        captureAudio={false}
                    />
                    
                    {imageUri && (
                        <Image source={{ uri: imageUri }} style={styles.previewImage} />
                    )}
                    {ocrResult && (
                        <View style={styles.ocrResultContainer}>
                            <Text style={styles.ocrResultText}>{ocrResult}</Text>
                        </View>
                    )}
                </View>







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


    )


}


export default CheckTicketByCamera