import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: colors.BACKGROUND_INPUT,
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerRight: {
    flexDirection: 'row',
  },
  title: {
    color: colors.PLACEHOLDER_TEXT_COLOR,
    fontFamily: fonts.BOLD,
    fontSize: 24,
  }
})
