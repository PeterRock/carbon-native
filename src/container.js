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

export default function Container(props) {
  return (
    <View
      {...props}
      style={[cs.container, props.style]}
    >
      {props.children}
    </View>
  );
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
