export type ThemeType = 'light' | 'dark';

export type UserType = {
  _id: string;
  userId: string;
  createdAt: Date;
  updated: Date;
  phoneNumber: string;
  profileImage?: string;
};
