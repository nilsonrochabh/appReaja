/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {WebView} from 'react-native';



import MyWebview from 'react-native-webview-autoheight';
export default class App extends Component {
  render() {
    return (
      <WebView
        source={{uri:'https://nilsonrochabh.github.io/reaja/'}}
     />
    );
  }
}


