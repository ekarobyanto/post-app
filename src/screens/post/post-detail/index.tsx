import { View, Text, Pressable, ScrollView } from "react-native";
import SafeAreaWrapper from "../../../components/safe-area-wrapper";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { postAtom } from "../state/post_state";
import { useAtom } from "jotai";
import AuthorCard from "../component/author_card";
import Divider from "../../../components/divider";
import Comments from "./component/comment";

const PostDetailScreen = ({ navigation }) => {
  const [post, setPost] = useAtom(postAtom);
  const [author, setAuthor] = useAtom(postAtom);

  return (
    <SafeAreaWrapper>
      <View className="flex-1 px-2.5 pt-3 bg-violet-950">
        <View className="flex-row items-center space-x-4">
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View className="p-2 bg-white rounded-full justify-center">
              <Ionicons name="arrow-back" size={20} className="bg-violet-950" />
            </View>
          </Pressable>
          <Text className="text-4xl font-bold text-white py-5">Post</Text>
        </View>
        <ScrollView>
          <View className="flex-1 rounded-lg bg-white p-2">
            <View>
              <Text className="font-bold text-3xl">{post.title}</Text>
              <Divider />
              <Text className="font-light text-lg py-3">{post.body}</Text>
              <AuthorCard userId={post.userId} />
              <Text className="pt-5 text-lg font-medium">Comments</Text>
              <Comments postId={post.id} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaWrapper>
  );
};

export default PostDetailScreen;
