import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import MenuItem from './components/menuItem';
import Camera from './pages/camera';
import Home from './pages/home';

const Routes: React.FC = () => {

    const [menuItem, setMenuItem] = useState(2);
    const [selectedComponent, setSelectedComponent] = useState(<Home />);

    // Função que será chamada quando um item do menu for clicado
    const handleMenuItemClick = (content) => {
        Alert.alert(`Item do menu clicado: ${content}`);
    };

    switch (menuItem) {
        case 1:
            return (
                <View style={{ flex: 1 }}>
                    <Home />

                    {/* Passe a função handleMenuItemClick como prop para o componente Footer */}
                    <Footer onMenuItemClick={handleMenuItemClick} />
                </View>
            )
        case 2:
            return <Camera />
        default:
            return <View>
                <Text>Selecione um menu</Text>
            </View>
    }
}

const Footer: React.FC = ({ onMenuItemClick }) => {

    return (
        <View style={styles.footer}>
            {/* Chame a função onMenuItemClick passando o conteúdo do item clicado */}
            <MenuItem content='Home' onPress={() => onMenuItemClick('Home')} />
            <MenuItem content='Camera' onPress={() => onMenuItemClick('Camera')} />
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default Routes;
