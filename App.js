import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Header } from './src/components/common';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import LibraryList from './src/components/LibraryList'


class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header text="Tech Stack" />
          <LibraryList />
        </View>
      </Provider> 
    );
  }
};

export default App;
