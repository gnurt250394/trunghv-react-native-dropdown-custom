import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

function DropdownDivider({ color }) {
  return <View style={[styles.divider, { borderBottomColor: color }]} />;
}

DropdownDivider.defaultProps = {
  color: 'rgba(0,0,0,0.12)',
};

DropdownDivider.propTypes = {
  color: PropTypes.string,
};

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default DropdownDivider;
