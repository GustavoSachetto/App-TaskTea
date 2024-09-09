import { Tabs } from "expo-router";
import { SessionProvider } from "@/hooks/ctx";

export default function RootLayout() {
    return (
        <Tabs>
            <SessionProvider>
                <Tabs.Screen name="index" />
                <Tabs.Screen name="sign-in" />
                <Tabs.Screen name="sign-out" />
            </SessionProvider>
        </Tabs>
    )
}