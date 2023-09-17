import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/safe-area-wrapper";
import { Image } from "expo-image";
import { useAssets } from "expo-asset";

const ProfileScreen = () => {
  const [profileImage, error] = useAssets([
    require("../../../assets/profile.jpg"),
  ]);
  const navigation =
    useNavigation<ProfileScreenNavigationType<"ProfileScreen">>();
  const navigateToProjectDetail = () => {
    navigation.navigate("ProjectDetail");
  };

  return (
    <SafeAreaWrapper>
      <ScrollView className=" bg-violet-950 ">
        <View className="flex-1 px-2.5 pt-3 bg-violet-950 ">
          <View className="items-center">
            {profileImage ? (
              // <Text onPress={navigateToProjectDetail}>WHY</Text>
              <Image
                source={profileImage[0]}
                style={{ width: 200, height: 200 }}
                className="rounded-full border border-white my-5"
              />
            ) : (
              <Text>Error Loading Image</Text>
            )}
            <Text className="text-white font-bold text-3xl">Eka Robyanto</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://github.com/ekarobyanto")}
              className="items-center"
            >
              <Image
                source={{
                  uri: "https://w7.pngwing.com/pngs/115/663/png-transparent-github-computer-icons-directory-github-mammal-cat-like-mammal-carnivoran-thumbnail.png",
                }}
                style={{
                  width: 75,
                  height: 75,
                  marginTop: -120,
                  marginRight: -120,
                }}
                className="rounded-full "
              />
            </TouchableOpacity>
          </View>
          <View className="items-start">
            <Text className="text-white font-medium text-2xl mt-5">
              About Me
            </Text>
            <Text className="text-white font-normal text-lg mt-2 ">
              I am a passionate college student studying Software Engineering,
              with a strong interest in mobile app development using Flutter. I
              am eager to learn and explore the realm of software engineering to
              create exceptional user experiences, aesthetically pleasing
              designs, and well-structured applications. My goal is to make apps
              that are not only easy to maintain but also scalable.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;
