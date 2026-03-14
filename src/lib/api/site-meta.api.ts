export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export interface RequestArg {
  description: string;
  type: string;
  required: boolean;
}

export interface SiteMeta {
  name: string;
  description: string;
  url: string;
  home: string;
  gmt_offset: number; // +/- timezone
  timezone_string: string;
  page_for_posts: number;
  page_on_front: number;
  show_on_front: string;
  namespaces: string[];
  site_logo: number;
  site_icon: number;
  site_icon_url: string;
  _links: unknown[];

  authentication: {
    'application-passwords': {
      endpoints: {
        authorization: string;
      };
    };
  };

  routes: {
    [key: string]: {
      namespace: string;
      methods: HttpMethod[];
      endpoints: {
        methods: HttpMethod[];
        args: Record<string, RequestArg>;
      }[];
    };
  };
}

export async function fetchSiteMeta(): Promise<SiteMeta> {
  const res = await fetch(process.env.BLOG_URL!);

  if (res.ok) {
    return res.json();
  }

  throw new Error('Failed to fetch site meta - something very bad has probably happened');
}
