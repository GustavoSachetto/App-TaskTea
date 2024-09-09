import React from "react";
import { Text } from "react-native";
import PrivateView from "@/components/Route/Private/Private";

export default function HomePage() {   
    return (
        <PrivateView>
            <Text>Primeira página!</Text>
        </PrivateView>
    )
}