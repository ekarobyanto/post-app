import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Author from "src/models/author";
import { useAtom } from "jotai";
import { authorsAtom } from "../state/post_state";

type Props = {
  userId: string;
};

const AuthorCard = ({ userId }: Props) => {
  const [authorInfo, setAuthorInfo] = useState<Author>();
  const [authors, setAuthor] = useAtom(authorsAtom);
  const author = authors.find((author) => author.id === userId);

  useEffect(() => {
    if (author === undefined) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          if (!authors.includes(data)) {
            setAuthor([...authors, data]);
          }
          setAuthorInfo(data);
        })
        .catch((error) => {
          console.error("Error fetching author information:", error);
        });
    } else {
      setAuthorInfo(author);
    }
  }, [userId]);

  if (!authorInfo) {
    return <ActivityIndicator size="small" color="#7C3AED" />;
  }
  return (
    <View className="rounded-lg bg-violet-300 p-2 shadow-lg shadow-black/40">
      <Text className="font-bold">Author : </Text>
      <View className="flex-row justify-between">
        <Text numberOfLines={1} className="font-normal max-w-[60%]">
          {authorInfo.username}
        </Text>
        <Text numberOfLines={1} className="font-normal max-w-[40%]">
          {authorInfo.email}
        </Text>
      </View>
    </View>
  );
};

export default AuthorCard;
