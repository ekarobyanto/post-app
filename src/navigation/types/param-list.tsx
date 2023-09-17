import { NavigatorScreenParams } from "@react-navigation/native";

export type PostStackParamList = {
  PostList: undefined;
  PostDetail: { postId: number };
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
};

export type RootBottomTabParamList = {
  Post: NavigatorScreenParams<PostStackParamList>;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};

export type AppStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabParamList>;
};

export type RootStackParamList = {
  AppStack: NavigatorScreenParams<AppStackParamList>;
  PostStack: NavigatorScreenParams<PostStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};
