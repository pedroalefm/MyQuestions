import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import Categories from './screens/Categories/index';
import Questions from './screens/Questions';
import Result from './screens/Result';
const AppStack = createAppContainer(
  createStackNavigator(
    {
      CategoryScreen: Categories,
      QuestionScreen: Questions,
      Result: Result,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);

export default AppStack;
