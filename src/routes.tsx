import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import Camera from './pages/camera';
import Home from './pages/home';

const Routes: React.FC = () => {

    const [menuItem, setMenuItem] = useState(2);

    switch (menuItem) {
        case 1:
            return <Home />
        case 2:
            return <Camera />
        default:
            return <View>
                <Text>Selecione um menu</Text>
            </View>
    }
}

export default Routes;