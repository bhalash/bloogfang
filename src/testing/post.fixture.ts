import { Post } from '@/lib/api/posts.api';
import{ faker } from '@faker-js/faker';

import { Fixture } from './fixture.util';

export const postFixture: Fixture<Post> = ({
  id = faker.number.int(),
  slug = faker.lorem.slug(),
  date = faker.date.recent().toISOString(),
  author = faker.number.int(), // todo
  link = faker.internet.url(),
  modified = faker.date.recent().toISOString(),
  class_list = [], // todo
  categories = [], // todo
  tags = [], // todo
  comment_status = 'closed',
  ping_status = 'closed',

  title = {
    rendered: faker.book.title(),
  },

  content = {
    rendered: `<p>${faker.lorem.paragraph()}</p>`,
    protected: false,
  },

  excerpt = {
    rendered: `<p>${faker.lorem.sentence()}</p>`,
    protected: false,
  }
} = {}) => ({
  id,
  slug,
  date,
  modified,
  author,
  link,
  class_list,
  categories,
  tags,
  comment_status,
  ping_status,
  title,
  content,
  excerpt,
});
