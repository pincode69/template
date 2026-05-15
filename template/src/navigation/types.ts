import type { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = {
  HomeIndex: undefined;
  Details: { title?: string } | undefined;
};

export type AchievementsStackParamList = {
  AchievementsIndex: undefined;
  AchievementDetail: { id?: string } | undefined;
};

export type DailyStackParamList = {
  DailyIndex: undefined;
};

export type ProfileStackParamList = {
  ProfileIndex: undefined;
  AboutApp: undefined;
};

export type TabsParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Achievements: NavigatorScreenParams<AchievementsStackParamList>;
  Daily: NavigatorScreenParams<DailyStackParamList>;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};

export type RootStackParamList = TabsParamList;
