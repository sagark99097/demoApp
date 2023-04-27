import {StyleSheet} from 'react-native';
import theme from '../../../common/theme';

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    marginHorizontal: 0,
    marginVertical: 0,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: theme.colors.white,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingBottom: 40,
    height: '80%',
  },
  scroll: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  flex1: {
    flex: 1,
    backgroundColor: theme.colors.blackTransparent,
  },
  panel: {
    height: 7,
    width: 60,
    backgroundColor: theme.colors.color2,
    borderRadius: 10,
    marginTop: 11,
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 25,
    color: theme.colors.black,
    fontWeight: 'bold',
    marginTop: 5,
  },
  characterImage: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  regularText: {
    fontSize: 20,
    color: theme.colors.black,
    fontWeight: '500',
    marginTop: 10,
  },
});

export default styles;
