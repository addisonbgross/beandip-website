export interface Post {
    title: string;
    date: string;
    content: any;
}

export interface PostSample {
    page: string;
    thumbnail: string;
    title: string;
    date: string;
    text: string;
}

export enum Tabs {
    Blog,
    About
}