import { Author } from '../entities/author';
import { Post } from '../entities/post';

const objectTypeResolver = {
  Author: new Author(),
  Post: new Post(),
};

export default objectTypeResolver;
