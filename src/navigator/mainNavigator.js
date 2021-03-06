import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList98597Navigator from '../features/ArticleList98597/navigator';
import ArticleList98596Navigator from '../features/ArticleList98596/navigator';
import ArticleList98595Navigator from '../features/ArticleList98595/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList98597: { screen: ArticleList98597Navigator },
ArticleList98596: { screen: ArticleList98596Navigator },
ArticleList98595: { screen: ArticleList98595Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
