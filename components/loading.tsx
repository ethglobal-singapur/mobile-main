import { View, Text, Modal, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import useLoading from "@/hooks/useLoading";
import { BlurView } from "expo-blur";

const Loading = () => {
  const { loading } = useLoading();

  return (
    <Modal visible={loading}>
      <BlurView
        intensity={60}
        tint="light"
        style={StyleSheet.absoluteFill}
        className="flex-1 items-center justify-center flex-row  space-x-4"
      >
        <Text className="text-primary text-xl font-bold">Loading</Text>
        <ActivityIndicator size="large" color="rgb(94,114,123)" />
      </BlurView>
    </Modal>
  );
};

export default Loading;
