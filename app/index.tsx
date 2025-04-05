import { Redirect } from 'expo-router';
import { View, Text,StyleSheet} from 'react-native'

export default function Index() {
  return <Redirect href="/auth/login" />


  
}