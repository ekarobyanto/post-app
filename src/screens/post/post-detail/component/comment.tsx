import Divider from "@/components/divider";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch comments: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [postId]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#7C3AED" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View>
      {comments.map((comment) => (
        <View
          key={comment.id}
          className="border border-violet-950 rounded-lg mt-3 p-2"
        >
          <Text className="font-medium">{comment.name}</Text>
          <Text className="font-light">{comment.email}</Text>
          <Divider />
          <Text>{comment.body}</Text>
        </View>
      ))}
    </View>
  );
};

export default Comments;
