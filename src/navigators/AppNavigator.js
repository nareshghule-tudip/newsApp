import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {useDispatch} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {checkNetwork} from '../redux';
import Root from './Root';

const AppNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    NetInfo.fetch().then(state => {
      const isConnected = state?.isConnected;
      handleConnectivityChange(isConnected === undefined ? true : isConnected);
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      handleConnectivityChange(state?.isConnected);
    });

    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      unsubscribe();
    };
  }, [handleConnectivityChange]);

  /**
   * Method calls on android hardware back press.
   * Dispatched to previous screen if available.
   */
  const onBackPress = () => {
    return false;
  };

  /**
   * Method to check network connectivity.
   * @param isConnected
   */

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleConnectivityChange = isConnected => {
    dispatch(checkNetwork(isConnected));
  };

  return <Root />;
};

export default AppNavigator;
