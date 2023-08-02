import React from 'react';
import { Text } from 'react-native';

const MenuItem: React.FC = ({ content }) => {
    return <Text style={{ color: 'white', marginLeft: 50, marginRight: 50 }}>
        {content}
    </Text>;
}

export default MenuItem;