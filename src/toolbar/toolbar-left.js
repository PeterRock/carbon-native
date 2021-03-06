import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  carbonStyles,
} from '../styles';

import {
  Container,
} from '../container';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.number,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any,
};

const defaultProps = {};

export default function ToolbarLeft(props) {
  return (
    <View style={[cs.container, props.padding && cs.padding, props.style]}>
      <View
        {...props}
        style={[
          cs.toolbarLeft,
          props.style,
        ]}
      >
        {props.children}
      </View>
    </View>
  );
}

ToolbarLeft.propTypes = propTypes;
ToolbarLeft.defaultProps = defaultProps;
