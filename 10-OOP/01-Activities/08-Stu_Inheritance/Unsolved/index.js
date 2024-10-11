// TODO: Create a class constructor named ForumItem that takes in 'authorName' and 'createdOn'.
class ForumItem {
  constructor(authorName, createdOn){
    this.authorName = authorName;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    // this.authorName = authorName;
    super(authorName, createdOn);
    this.title = title;
    this.text = text;
    // this.createdOn = createdOn;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem{
  constructor(authorName, text, createdOn) {
    super(authorName, createdOn);
    // this.authorName = authorName;
    this.text = text;
    // this.createdOn = createdOn;
  }
}

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment(`Arnaud`, `This is Arnaud Tiam's comment`, `May 1th 2024`);

// TODO: Create a new object using the BlogPost class constructor.
const newBlogPost = new BlogPost(`Tiam`, `Tiam's blogPost`, `This is my first blogpost`, `May 1th 2024`);
// TODO: Log both newly created BlogPost and Comment to the console.

console.log(newComment);
console.log(newBlogPost);
