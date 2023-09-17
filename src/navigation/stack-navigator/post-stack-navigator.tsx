import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostStackParamList } from "../types/param-list";
import PostDetailScreen from "@/screens/post/post-detail";
import PostScreen from "@/screens/post";

const Stack = createNativeStackNavigator<PostStackParamList>();

const PostStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
      }}
    >
      <Stack.Screen name="PostList" component={PostScreen} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
    </Stack.Navigator>
  );
};

export default PostStackNavigator;
