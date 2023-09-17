import { Text, Pressable } from "react-native";
import React from "react";
import Divider from "@/components/divider";
import { useNavigation } from "@react-navigation/native";
import { PostScreenNavigationType } from "@/navigation/types";
import AuthorCard from "./author_card";
import Post from "src/models/post";
import { authorIdAtom, postAtom } from "../state/post_state";
import { useAtom } from "jotai";

const PostCard = (post: Post) => {
  const navigation = useNavigation<PostScreenNavigationType<"Post">>();
  const [currentPost, setCurrentPost] = useAtom(postAtom);
  const [currentAuthor, setCurrentAuthor] = useAtom(authorIdAtom);
  const navigateToPostDetail = () => {
    setCurrentPost(post);
    setCurrentAuthor(post.userId);
    navigation.push("PostDetail");
  };
  return (
    <Pressable
      className="w-[100%] bg-white rounded-md p-3 shadow-lg my-1"
      onPress={navigateToPostDetail}
    >
      <Text className="text-base font-bold" numberOfLines={2}>
        {post.title}
      </Text>
      <Divider />
      <Text numberOfLines={3} className="text-sm font-medium truncate py-2">
        {post.body}
      </Text>
      <AuthorCard userId={post.userId} />
    </Pressable>
  );
};

export default PostCard;
