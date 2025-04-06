import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ClerkAndConvexProvider from "../providers/clerkandconvexprovider";
import InitalLayout from "@/components/initalLayout";


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

export default function RootLayout() {
  return (
   
    <ClerkAndConvexProvider>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor:"black"}}>  
<InitalLayout/>
    </SafeAreaView>
    </SafeAreaProvider>
    </ClerkAndConvexProvider>   
      );

  
}
