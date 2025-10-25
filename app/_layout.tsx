import InitialLayout from "@/components/initialLayout";
import ClerkAndConvexProvider from "@/Providers/ClerkAndConvexProvider";
import { styles } from "@/styles/auth.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkAndConvexProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkAndConvexProvider>
  );
}
