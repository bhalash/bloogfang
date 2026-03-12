export interface Author {
  id: number;
  name: string;
  description: string;
  url: string;

  avatar_urls: {
    24: string;
    48: string;
    96: string;
  };
}

export interface Post {
  id: number;
  date: string;
  modified: string;
  author: number; // id of author
  link: string;
  class_list: string[]; // seems like tags rendered as classes
  tags: number[]; // ids of tags

  comment_status: string; // 'open' - enum
  ping_status: string; // 'open' - enum

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
    protected: boolean;
  };

  excerpt: {
    rendered: string;
    protected: boolean;
  };
}
