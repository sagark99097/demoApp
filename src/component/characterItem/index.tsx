import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import strings from '../../common/strings';

import {characterItemProps} from '../../types/componentType';
import styles from './styles';

const CharacterItem = ({onPressOpenModal, item, index}: characterItemProps) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      key={index.toString()}
      onPress={() => onPressOpenModal && onPressOpenModal(item)}
      activeOpacity={0.5}>
      <FastImage
        style={styles.characterImage}
        source={{
          uri: item.image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <Text children={item?.name} style={styles.nameText} />
      <View style={styles.genderBody}>
        <Text
          children={`${strings.GENDER}: ${item?.gender}`}
          style={styles.regularText}
        />
        <Text
          children={`${strings.SEPCIES}: ${item?.species}`}
          style={styles.regularText}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CharacterItem;
