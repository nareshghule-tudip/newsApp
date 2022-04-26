import { StyleSheet, Dimensions } from 'react-native';
import fonts from '../../utility/fonts';
import colorConstant from '../../utility/colorConstant';
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  topNewsTextStyle: {
    color: colorConstant.BLACK_COLOR,
    fontSize: 20,
    fontFamily: fonts.BOLD,
    marginVertical: 15,
  },
  newsCategoryContainer: {
    width: '100%',
    marginLeft: 10,
    marginBottom: 2,
  },
  topNewsAndCountryDropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  categoryListFooter: { width: 15 },
  newsCategoryCard: {
    borderRadius: 15,
    paddingVertical: 5,
    marginTop: 8,
    paddingHorizontal: 15,
    marginHorizontal: 7,
    marginBottom: 2,
    shadowColor: colorConstant.BLACK_COLOR,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 2,
  },
  categoryName: {
    fontFamily: fonts.REGULAR,
    fontSize: 15,
  },
  flexOne: {
    flex: 1,
  },
  newsListParent: {
    width: '100%',
    marginBottom: 20,
  },
  showMoreButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  showMore: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: colorConstant.BLACK_COLOR,
    borderWidth: 0.2,
    borderRadius: 5,
    marginBottom: 5,
    color: colorConstant.BLACK_COLOR,
    fontFamily: fonts.REGULAR,
  },
  newsListCard: {
    shadowColor: colorConstant.BLACK_COLOR,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 1,
    backgroundColor: colorConstant.WHITE_COLOR,
    padding: 10,
    height: 200,
    borderRadius: 10,
    margin: 16,
  },
  newsDetailsParent: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    height: 180,
  },
  newsDetails: {
    width: '100%',
    flexDirection: 'row',
    height: 150,
  },
  newsHeadingDetailsContainerForImageAvailable: {
    width: '70%',
  },
  newsHeadingDetailsContainerForImageNotAvailable: {
    width: '100%',
  },
  newsTitle: {
    fontSize: 17,
    fontFamily: fonts.MEDIUM,
    color: colorConstant.BLACK_COLOR,
  },
  newsDescription: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: fonts.REGULAR,
    color: colorConstant.BLACK_COLOR,
    opacity: 0.6,
  },
  newsImageParent: {
    alignItems: 'center',
  },
  newsImage: {
    width: deviceWidth * 0.25,
    height: 130,
    borderRadius: 5,
    marginLeft: 6,
    alignSelf: 'center',
    backgroundColor: colorConstant.BLACK_COLOR,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  sourceNameView: {
    flexDirection: 'row',
    width: '70%',
  },
  newsCardFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  sourceName: {
    fontFamily: fonts.REGULAR,
    fontSize: 14,
    color: colorConstant.BLACK_COLOR,
    flexShrink: 1,
    opacity: 0.4,
  },
  circleImage: {
    width: 3,
    height: 3,
    resizeMode: 'contain',
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
  timeAgo: {
    fontFamily: fonts.REGULAR,
    fontSize: 14,
    color: colorConstant.BLACK_COLOR,
    opacity: 0.4,
  },
  shareAndPocketImageParent: {
    width: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  shareAndPocketImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  subscribeCard: {
    shadowColor: colorConstant.BLACK_COLOR,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 2,
    backgroundColor: colorConstant.WHITE_COLOR,
    padding: 10,
    borderRadius: 10,
    margin: 16,
    height: 174,
    alignItems: 'center',
  },
  subscribeCardHeadingParent: {
    width: '90%',
    paddingTop: 10,
  },
  subscribeCardHeading: {
    fontSize: 16,
    color: colorConstant.BLACK_COLOR,
    fontFamily: fonts.REGULAR,
  },
  inputParent: {
    width: '90%',
    backgroundColor: colorConstant.INPUT_BACKGROUND_COLOR,
    borderWidth: 0.1,
    borderColor: colorConstant.BLACK_COLOR,
    borderRadius: 2,
    marginVertical: 12,
    height: 40,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '90%',
  },
  footerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  separatorLine: {
    width: '89%',
    borderWidth: 0.2,
    borderColor: colorConstant.BLACK_COLOR,
    marginTop: 30,
    opacity: 0.2,
  },
  footerText: {
    color: colorConstant.BLACK_COLOR,
    opacity: 0.4,
    fontSize: 12,
    fontFamily: fonts.REGULAR,
  },
  footerTextMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  footerTextSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  topNewsTextAndDropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '93%'
  },
  dropDownButton: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 170,
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
  noNewsFoundView: {
    flex: 0.5,
    height: 270,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownStyle: { borderRadius: 5 },
});

export default styles;
