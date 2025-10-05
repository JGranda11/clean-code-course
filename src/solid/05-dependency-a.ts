import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {

    //const provider1 = new JsonDatabaseService();
    //const provider2 = new LocalDataBaseService();
    const provider3 = new WebApiPostService();
    const postService = new PostService(provider3);

    const posts = await postService.getPosts();

    console.log({ posts })


})();