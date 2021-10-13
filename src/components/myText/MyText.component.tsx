import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {FONT_SIZE} from '../../assets/themes/globals';

type MyProps = {
  text: String;
  variant: any;
  color?: any;
  align?: any;
  spacing?: any;
};

const TEXT_STYLE = {
  title: 'title',
  normal: 'normal',
  header: 'header',
};

export class MyText extends Component<MyProps> {
  changeByVariant = (variant: any) => {
    if (variant === TEXT_STYLE.normal) {
      return styles.normal;
    }
    if (variant === TEXT_STYLE.title) {
      return styles.title;
    }
    if (variant === TEXT_STYLE.header) {
      return styles.header;
    }
  };

  render() {
    const {variant, text, color, align, spacing} = this.props;
    const myStyles = this.changeByVariant(variant);
    return (
      <Text
        {...variant}
        style={[
          myStyles,
          {color: color, textAlign: align, lineHeight: spacing},
        ]}>
        {text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  normal: {
    fontSize: FONT_SIZE.normal,
    fontWeight: 'normal',
  },
  title: {
    fontSize: FONT_SIZE.title,
    fontWeight: 'bold',
  },
  header: {
    fontSize: FONT_SIZE.header,
    fontWeight: 'bold',
  },
});
