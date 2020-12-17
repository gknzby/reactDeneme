import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import { } from 'react-native';


class LoginInputs extends Component{

  render()
  {
    return(
      <>
      
      </>
    )
  }
}

class LoginPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            navigation: this.props.navigation,
        }
    }

    render()
    {
        return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={styles.loginLogo}>
            <Image source={require('../assets/loginLogo.png')} style={{ width: 120, height: 180 }} />
            </View>
            <View style={styles.loginInput}>
            <TextInput style={styles.usernameInput} placeholder="Kullanıcı Adı"/>
            <TextInput style={styles.usernameInput} placeholder="Şifre"/>
            <View style={styles.loginButton}>
                <Button color='#FC5130'
                title="Giriş"
                accessibilityLabel="Giriş yapın"
                onPress={() => this.state.navigation.navigate('HomePage')}
                />
            </View>
            </View>
            <View  style={styles.subPart}>
            <Text style={styles.subText}>Hesabınız yok mu?</Text>
            </View>
        </View>      
        );
    }
    }

    const styles = StyleSheet.create({
    loginLogo: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'flex-end',    
    },
    loginInput: {
        flex: 5,
        alignItems: 'center',
        paddingTop: 50,
    },
    usernameInput: {
        paddingLeft: 6,
        marginTop: 20,
        width: '50%',
        height: 30,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
    },
    loginButton: {
        marginTop: 30,
        width: '50%',
    
    },
    subPart: {
        alignItems: 'center',
        paddingBottom: '3%',
    },
    subText: {
        fontWeight: "bold",
        color: '#FC5130'
    }

});

export default LoginPage;