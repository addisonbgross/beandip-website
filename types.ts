export interface Post {
  title: string;
  date: string;
  slug: string;
  content: any;
}

export interface PostSample {
  page: string;
  thumbnail: string;
  title: string;
  date: string;
  text: string;
}

export interface PostLink {
  date: string;
  page: string;
}

export enum Tabs {
  Blog,
  About,
}

export enum Theme {
  Light,
  Dark,
}
