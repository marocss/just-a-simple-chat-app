import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './screens/Main';
import Chat from './screens/Chat';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    Chat,
  })
);

export default Routes;
