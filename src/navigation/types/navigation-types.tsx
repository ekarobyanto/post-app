import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  AppStackParamList,
  PostStackParamList,
  ProfileStackParamList,
  RootStackParamList,
} from "./param-list";

export type PostScreenNavigationType<
  RouteName extends keyof PostStackParamList
> = CompositeNavigationProp<
  NativeStackNavigationProp<PostStackParamList, RouteName>,
  NativeStackNavigationProp<AppStackParamList, "Root">
>;

export type ProfileScreenNavigationType<
  RouteName extends keyof ProfileStackParamList
> = CompositeNavigationProp<
  NativeStackNavigationProp<ProfileStackParamList, RouteName>,
  NativeStackNavigationProp<AppStackParamList, "Root">
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
