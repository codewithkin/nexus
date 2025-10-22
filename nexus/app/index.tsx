import { Stack, router } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session, isPending } = authClient.useSession();
  const [mounted, setMounted] = useState(false);

  // Mark the component as mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Redirect only after mount and after loading is done
  useEffect(() => {
    if (!mounted || isPending) return;

    if (!session) {
      router.replace("/auth");
    } else {
      router.replace("/dashboard"); 
    }
  }, [mounted, isPending, session]);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#22c55e" />
    </View>
  );
}
