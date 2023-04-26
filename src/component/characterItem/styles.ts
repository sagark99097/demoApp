import {StyleSheet} from 'react-native';
import theme from '../../common/theme';

const styles = StyleSheet.create({
  itemContainer: {
    width: '47%',
    backgroundColor: theme.colors.color1,
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    padding: 10,
  },
  characterImage: {
    height: 100,
    width: '100%',
    borderRadius: 10,
  },
  nameText: {
    fontSize: 15,
    color: theme.colors.white,
    fontWeight: 'bold',
    marginTop: 5,
  },
  regularText: {
    fontSize: 12,
    color: theme.colors.white,
    fontWeight: '600',
    lineHeight: 15,
  },
  genderBody: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
});

export default styles;
