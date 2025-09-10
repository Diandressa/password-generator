import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './TextInputAppStyles';
interface TextInputAppProps{
    pass:string
}

export function TextInputApp(props:TextInputAppProps) {
  return (
    <TextInput 
      style={styles.inputer} 
      placeholder='pass'
      placeholderTextColor='#ffffff'
      value={props.pass}
    />
  );
}