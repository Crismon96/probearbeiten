import { Post } from "./post"

export class Author {

    get __typeName() {
        return 'Author'
    }

    get id() {
        return 'ID'
    }

    get posts() {
        return [new Post()]
    }
}