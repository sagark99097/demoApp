import React from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import strings from '../../../common/strings';
import {CharacterDetailsProps} from '../../../types/Modal';

/**
 * CharacterDetails - CharacterDetails Modal is a component that slides up from the bottom of the screen to showcase additional content in screen.
 **/
const CharacterDetails = ({
  onBackdropPress,
  isVisible,
  item,
  locationData,
}: CharacterDetailsProps) => {
  return (
    <Modal
      onBackdropPress={onBackdropPress}
      isVisible={isVisible}
      style={styles.modalStyle}>
      <View style={styles.flex1}>
        <TouchableOpacity onPress={onBackdropPress} style={styles.flex1} />
        <View style={styles.modalContainer}>
          <View style={styles.panel} />
          <ScrollView style={styles.scroll}>
            <FastImage
              style={styles.characterImage}
              source={{
                uri: item?.image || '',
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <Text children={item?.name} style={styles.nameText} />
            <Text
              children={`${strings.GENDER}: ${item?.gender}`}
              style={styles.regularText}
            />
            <Text
              children={`${strings.SEPCIES}: ${item?.species}`}
              style={styles.regularText}
            />
            <Text
              children={`${strings.LOCATION_NAME}: ${locationData?.name || ''}`}
              style={styles.regularText}
            />
            <Text
              children={`${strings.DIMENSION}: ${
                locationData?.dimension || ''
              }`}
              style={styles.regularText}
            />
            <Text
              children={`${strings.LOCATION_TYPE}: ${locationData?.type || ''}`}
              style={styles.regularText}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CharacterDetails;
