import { NavigationContainer } from '@react-navigation/native';
import { useState,useEffect } from 'react';

import BadgerTabs from './navigation/BadgerTabs';
import BadgerPreferencesScreen from './screens/BadgerPreferencesScreen';
import BadgerNewsScreen from './screens/BadgerNewsScreen';
import PreferenceContext from './context/PreferenceContext';
import CS571 from '@cs571/mobile-client';

export default function BadgerNews(props) {

  // Just a suggestion for Step 4! Maybe provide this to child components via context...
  const [prefs, setPrefs] = useState({});

  return (
    <NavigationContainer>
      
      <PreferenceContext.Provider value={[prefs, setPrefs]}>
        <BadgerTabs />

      </PreferenceContext.Provider>
    </NavigationContainer>
  );
}