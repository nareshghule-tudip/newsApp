import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Linking} from 'react-native';
import NewsDashboardView from './view';
import constant from '../../utility/constant';
import {getNewsBasedOnCountryCategory} from '../../redux';

const NewsDashboard = () => {
  const {NEWS_DASHBOARD_SCREEN} = constant;
  const dispatch = useDispatch();
  const fetching = useSelector(
    state => state.getNewsBasedOnCountryCategory.fetching,
  );
  const newsPayload = useSelector(
    state => state.getNewsBasedOnCountryCategory.newsPayload,
  );
  const isConnected = useSelector(state => state.checkNetwork.isConnected);
  const [newsCategoryData, setNewsCategoryData] = useState(
    NEWS_DASHBOARD_SCREEN.NEWS_CATEGORY_DATA,
  );
  const [newsBasedOnCategory, setNewsBasedOnCategory] = useState([]);
  const [isShowMore, setIsShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [selectedCountry, setSelectedCountry] = useState('au');
  useEffect(() => {
    if (isConnected) {
      getNewsList();
    }
  }, [isConnected, getNewsList]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getNewsList = () => {
    dispatch(getNewsBasedOnCountryCategory(selectedCategory, selectedCountry))
      .then(res => {
        setIsShowMore(false);
        setNewsBasedOnCategory(res?.articles?.slice(0, 2));
      })
      .catch(error => {
        // eslint-disable-next-line no-alert
        alert(error);
      });
  };
  /**
   *  Method to handle the tab click
   * @param categoryName on which click event occured
   */

  const handleCategoryTabChange = categoryName => {
    dispatch(getNewsBasedOnCountryCategory(categoryName, selectedCountry))
      .then(res => {
        setSelectedCategory(categoryName);
        setIsShowMore(false);
        setNewsBasedOnCategory(res?.articles?.slice(0, 2));
        const updatedNewsCategoryData = newsCategoryData.map(item => {
          if (item.name === categoryName) {
            return {...item, isTabFocused: true};
          } else {
            return {...item, isTabFocused: false};
          }
        });
        setNewsCategoryData(updatedNewsCategoryData);
      })
      .catch(error => {
        // eslint-disable-next-line no-alert
        alert(error);
      });
  };

  /**
   *  Method to open the particular news details on browser
   * @param url
   */
  const handleNewsCardClick = url => {
    Linking.openURL(url);
  };

  // To handle data based on show more button

  const handleShowMore = () => {
    const newsPayloadCopy = newsPayload?.articles.map(a =>
      Object.assign({}, a),
    );
    if (!isShowMore) {
      setNewsBasedOnCategory(newsPayloadCopy);
    } else {
      setNewsBasedOnCategory(newsPayloadCopy?.slice(0, 2));
    }
    setIsShowMore(!isShowMore);
  };

  const handleCountrySelection = countryCode => {
    setSelectedCountry(countryCode);
    dispatch(getNewsBasedOnCountryCategory(selectedCategory, countryCode))
      .then(res => {
        setIsShowMore(false);
        setNewsBasedOnCategory(res?.articles?.slice(0, 2));
      })
      .catch(error => {
        // eslint-disable-next-line no-alert
        alert(error);
      });
  };
  return (
    <NewsDashboardView
      handleCategoryTabChange={handleCategoryTabChange}
      newsCategoryData={newsCategoryData}
      newsBasedOnCategory={newsBasedOnCategory}
      fetching={fetching}
      handleNewsCardClick={handleNewsCardClick}
      handleShowMore={handleShowMore}
      isShowMore={isShowMore}
      handleCountrySelection={handleCountrySelection}
    />
  );
};

NewsDashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default NewsDashboard;
