import React from 'react';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 
import * as theme from './theme';

export default settings =  {
  'light': {
    name: 'Light',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="lightbulb-on-outline"
        {...props}
      />
    ),
  },
  'ac': {
    name: 'AC',
    icon: ({size, color, ...props}) => (
      <Entypo
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="air"
        {...props}
      />
    ),
  },
  'wifi': {
    name: 'WIFI',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="wifi"
        {...props}
      />
    ),
  },
  'fan': {
    name: 'Fan',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="fan"
        {...props}
      />
    ),
  },
};