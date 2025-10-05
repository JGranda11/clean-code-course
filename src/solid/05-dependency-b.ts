import { JsonDatabaseService, LocalDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor( private postProvider: PostProvider ) { //trabjando con abstracciones

    }

    async getPosts() {
        //const jsonDB = new LocalDataBaseService();
        //const jsonDB = new JsonDatabaseService();

        //aplicar principio

        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}