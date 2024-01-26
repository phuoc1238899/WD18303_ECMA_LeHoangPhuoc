class BaseAPI {
  constructor() {
    this.baseUrl = "http://localhost:3000/";
    this.endpoint = "";
  }
  get(endpoint) {
    return fetch(this.baseUrl + endpoint)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
  getAll() {
    return this.get(this.endpoint);
  }

  getOne(id) {
    return this.get(`${this.endpoint}/${id}`);
  }
}
class Comment extends BaseAPI {
  constructor() {
    super();
    this.endpoint = "comments";
  }
}
class Post extends BaseAPI {
  constructor() {
    super();
    this.endpoint = "posts";
  }
}
console.log("COMMENT");
const cmt = new Comment();
console.log(cmt.getAll());
console.log(cmt.getOne("2"));

console.log("POST");
const post = new Post();
console.log(post.getAll());
console.log(post.getOne("4"));