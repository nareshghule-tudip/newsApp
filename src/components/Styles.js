import {StyleSheet,Dimensions} from 'react-native';
import colorConstant from '../utility/colorConstant';
import fonts from '../utility/fonts';
const deviceWidth= Dimensions.get('window').width

const Styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: colorConstant.ORANGE_COLOR,
  },
  buttonLabel: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    color: colorConstant.WHITE_COLOR,
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: colorConstant.APP_THEME_COLOR,
  },
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    opacity: 0.8,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colorConstant.APP_THEME_COLOR,
  },
  headerParent: {
    height: 50,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    width: '90%',
    justifyContent: 'space-between',
  },
  headerMenuAndInstepLogoContainer: {
    flexDirection: 'row',
  },
  menuImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  inStepLogoView: {
    marginLeft: 15,
    marginTop: -15,
  },
  inStepLogo: {
    width: 65,
    height: 75,
    resizeMode: 'contain',
  },
  searchProfileIconContainer: {
    flexDirection: 'row',
  },
  search: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  profileImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginLeft: 25,
  },
  myProfileView: {
    marginLeft: 15,
    alignSelf: 'center',
  },
  profile: {
    alignSelf: 'center',
    fontSize: 15,
    color: colorConstant.BLACK_COLOR,
    fontFamily: fonts.REGULAR,
  },
  dropDownButton: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 150,
    marginLeft:10,
    backgroundColor: colorConstant.WHITE_COLOR,
  },
  dropDownIcon: {
    width: 10,
    height: 10,
    tintColor: colorConstant.BLACK_COLOR,
  },
  dropDownText: {
    color: colorConstant.BLACK_COLOR,
    fontFamily: fonts.REGULAR,
    fontSize: 16,
  },
  dropDownRow: {
    borderBottomColor: null,
    borderBottomWidth: null,
  },
  dropDownView: {
    marginLeft: 35,
  },
  noNewsFound: {
    fontSize: 14,
    fontFamily: fonts.REGULAR,
    color: colorConstant.BLACK_COLOR,
    opacity: 0.6,
  },
  dropDownStyle: {
    borderRadius: 5,
  },
  inputStyle: {
    width: '90%',
    opacity: 0.6,
  },
});

export default Styles;
