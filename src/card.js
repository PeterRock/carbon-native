import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  carbonStyles,
} from './styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.any,
};

const defaultProps = {};

export default function Card(props) {
  return (
    <View
      shadowColor="rgba(128, 128, 128, 0.1)"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={1}
      shadowRadius={5}
      {...props}
      style={[cs.card, props.style]}
    >
      {props.children}
    </View>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
