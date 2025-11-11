import { Tabs } from 'expo-router';
import { Heart, ShoppingBag, Stethoscope } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF9A76',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopWidth: 1,
          borderTopColor: '#F0F0F0',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Health',
          tabBarIcon: ({ size, color }) => (
            <Heart size={size} color={color} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ size, color }) => (
            <ShoppingBag size={size} color={color} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="vets"
        options={{
          title: 'Vets',
          tabBarIcon: ({ size, color }) => (
            <Stethoscope size={size} color={color} strokeWidth={2} />
          ),
        }}
      />
    </Tabs>
  );
}
