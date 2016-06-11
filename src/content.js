import React, {
  PropTypes,
} from 'react';

import {
  ScrollView,
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
  scroll: PropTypes.bool,
  style: PropTypes.any,
};

const defaultProps = {
  scroll: true,
};

export default function Content(props) {
  const contentStyle = [cs.container, cs.padding, props.style];
  if (props.scroll === true) {
    return (
      <ScrollView
        style={contentStyle}
        {...props}
      >
        {props.children}
      </ScrollView>
    );
  }
  return (
    <View
      style={contentStyle}
      {...props}
    >
      {props.children}
    </View>
  );
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
