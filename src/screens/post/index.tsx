import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import Post from "src/models/post";

import SafeAreaWrapper from "@/components/safe-area-wrapper";
import PostCard from "./component/post_card";

const PostScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const pageSize = 5;

  useEffect(() => {
    const fetchPosts = () => {
      posts.length === 0 ? null : setIsFetchingMore(true);
      fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`
      )
        .then((response) => response.json())
        .then((data: Post[]) => {
          setPosts([...posts, ...data]);
          setIsLoading(false);
          setIsFetchingMore(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
          setIsFetchingMore(false);
        });
    };
    fetchPosts();
  }, [page]);

  const loadMorePosts = () => {
    setPage(page + 1);
  };

  return (
    <SafeAreaWrapper>
      <View className="flex-1 px-2.5 pt-3 bg-violet-950">
        <Text className="text-4xl font-bold text-white py-5">Feeds</Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          <FlatList
            data={posts}
            keyExtractor={(item) => posts.indexOf(item).toString()}
            renderItem={({ item }) => (
              <PostCard
                key={item.id}
                userId={item.userId}
                body={item.body}
                id={item.id}
                title={item.title}
              />
            )}
            onEndReached={isLoading ? null : loadMorePosts}
            onEndReachedThreshold={0.5}
          />
        )}
        {isFetchingMore && <ActivityIndicator size="small" color="#ffffff" />}
      </View>
    </SafeAreaWrapper>
  );
};

export default PostScreen;
