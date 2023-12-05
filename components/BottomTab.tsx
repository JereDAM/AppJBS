import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QRScreen from '../screens/QRScreen';
import PortfolioScreen from '../screens/PortFolioScreen';

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PortFolio" component={PortfolioScreen} />
      <Tab.Screen name="QR" component={QRScreen} />
    </Tab.Navigator>
  );
}