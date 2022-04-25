import React from 'react';
import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import icons from '../../utility/icons';
import {
  Header,
  Input,
  Button,
  Container,
  Spinner,
  DropDown,
  RenderImage,
} from '../../components';
import Styles from './style';
import {getTimeAgo} from '../../utility/helper';
import constant from '../../utility/constant';
import colorConstant from '../../utility/colorConstant';

const NewsDashboardView = props => {
  const {
    handleCategoryTabChange,
    newsCategoryData,
    newsBasedOnCategory,
    fetching,
    handleNewsCardClick,
    handleShowMore,
    isShowMore,
    handleCountrySelection,
  } = props;

  const {NEWS_DASHBOARD_SCREEN} = constant;

  // eslint-disable-next-line no-shadow
  const RenderText = props => {
    const {value, style} = props;
    return (
      <Text style={style} {...props}>
        {value}
      </Text>
    );
  };
  const renderNewCategory = ({item}) => (
    <TouchableOpacity
      onPress={() => handleCategoryTabChange(item.name)}
      style={[
        Styles.newsCategoryCard,
        {
          backgroundColor: item.isTabFocused
            ? colorConstant.ORANGE_COLOR
            : colorConstant.WHITE_COLOR,
        },
      ]}>
      <Text
        style={[
          Styles.categoryName,
          {
            color: item.isTabFocused
              ? colorConstant.WHITE_COLOR
              : colorConstant.BLACK_COLOR,
          },
        ]}>
        {item.displayName}
      </Text>
    </TouchableOpacity>
  );

  const renderNewsList = ({item}) => (
    <View style={Styles.newsListCard}>
      <TouchableOpacity
        onPress={() => handleNewsCardClick(item.url)}
        style={Styles.newsDetailsParent}>
        <View style={Styles.newsDetails}>
          <View
            style={
              item.urlToImage
                ? Styles.newsHeadingDetailsContainerForImageAvailable
                : Styles.newsHeadingDetailsContainerForImageNotAvailable
            }>
            <RenderText value={item.title} style={Styles.newsTitle} />
            <RenderText
              value={item.description}
              style={Styles.newsDescription}
            />
          </View>
          <View style={Styles.newsImageParent}>
            {item.urlToImage ? (
              <RenderImage
                imageUri={item.urlToImage}
                imageStyle={Styles.newsImage}
              />
            ) : null}
          </View>
        </View>
        <View>
          <View style={Styles.newsCardFooterContainer}>
            <View style={Styles.sourceNameView}>
              <RenderText
                value={item.source?.name}
                style={Styles.sourceName}
                numberOfLines={1}
              />
              <RenderImage
                imageUri={icons.CIRCLE}
                isRemoteImage={false}
                imageStyle={Styles.circleImage}
              />
              <RenderText
                value={getTimeAgo(item.publishedAt)}
                style={Styles.timeAgo}
                numberOfLines={1}
              />
            </View>

            <View style={Styles.shareAndPocketImageParent}>
              <RenderImage
                imageUri={icons.SHARE}
                isRemoteImage={false}
                imageStyle={Styles.shareAndPocketImage}
              />
              <RenderImage
                imageUri={icons.POCKET}
                isRemoteImage={false}
                imageStyle={Styles.shareAndPocketImage}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <Container>
      <Header />
      <ScrollView>
        <View style={Styles.newsCategoryContainer}>
          <View style={Styles.topNewsTextAndDropDownContainer}>
            <RenderText
              value={NEWS_DASHBOARD_SCREEN.TOP_NEWS_TEXT}
              style={Styles.topNewsTextStyle}
            />
            <View style={Styles.dropDownView}>
              <DropDown
                data={NEWS_DASHBOARD_SCREEN.COUNTRY_LIST}
                defaultValue={NEWS_DASHBOARD_SCREEN.COUNTRY_DEFAULT_VALUE}
                handleDropDownValueSelection={handleCountrySelection}
              />
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={newsCategoryData}
            horizontal={true}
            renderItem={renderNewCategory}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={Styles.flexOne}>
          <View style={Styles.newsListParent}>
            {newsBasedOnCategory?.length > 0 ? (
              <FlatList
                ListFooterComponent={() => (
                  <TouchableOpacity
                    onPress={handleShowMore}
                    style={Styles.showMoreButtonParent}>
                    <Text style={Styles.showMore}>
                      {isShowMore
                        ? NEWS_DASHBOARD_SCREEN.SHOW_LESS
                        : NEWS_DASHBOARD_SCREEN.SHOW_MORE}
                    </Text>
                  </TouchableOpacity>
                )}
                data={newsBasedOnCategory}
                renderItem={renderNewsList}
                keyExtractor={(item, index) => index.toString()}
              />
            ) : (
              <View style={Styles.noNewsFoundView}>
                <RenderText
                  value={NEWS_DASHBOARD_SCREEN.NO_NEWS_FOUND}
                  style={Styles.noNewsFound}
                />
              </View>
            )}
            <View style={Styles.subscribeCard}>
              <View style={Styles.subscribeCardHeadingParent}>
                <Text style={Styles.subscribeCardHeading}>
                  {NEWS_DASHBOARD_SCREEN.SUBSCRIBE_CARD_HEADING}
                </Text>
              </View>
              <View style={Styles.inputParent}>
                <Input placeholder={NEWS_DASHBOARD_SCREEN.ENTER_EMAIL} />
              </View>
              <View style={Styles.buttonContainer}>
                <Button>{NEWS_DASHBOARD_SCREEN.SUBSCRIBE}</Button>
              </View>
            </View>
            <View style={Styles.footerContainer}>
              <View style={Styles.separatorLine} />
              <View style={Styles.footerTextMainContainer}>
                <View style={Styles.footerTextSubContainer}>
                  <RenderText
                    value={NEWS_DASHBOARD_SCREEN.COPY_RIGHT_TEXT}
                    style={Styles.footerText}
                  />
                  <RenderText
                    value={NEWS_DASHBOARD_SCREEN.PRIVACY_POLICY}
                    style={Styles.footerText}
                  />
                  <RenderText
                    value={NEWS_DASHBOARD_SCREEN.TERMS_OF_SERVICE}
                    style={Styles.footerText}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Spinner isVisible={fetching} color={colorConstant.BLACK_COLOR} />
    </Container>
  );
};

export default NewsDashboardView;
