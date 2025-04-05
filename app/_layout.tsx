import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import InitalLayout from "@/components/initalLayout";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

export default function RootLayout() {
  return (
   
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor:"black"}}>  
<InitalLayout/>

    </SafeAreaView>
    </SafeAreaProvider>
    </ClerkProvider>
      )

  
}
