import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import Categories from './screens/Categories/index';
import Questions from './screens/Questions';

const AppStack = createAppContainer(
  createStackNavigator(
    {
      CategoryScreen: Categories,
      QuestionScreen: Questions,
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
