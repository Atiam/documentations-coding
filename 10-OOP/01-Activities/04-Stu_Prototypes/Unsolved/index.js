// TODO: Add a comment describing what kind of function this is
// function BlogPost(authorName, title, text, createdOn) {
//   this.authorName = authorName;
//   this.title = title;
//   this.text = text;
//   this.createdOn = createdOn;
//   this.comments = [];
//   this.printMetaData = function () {
//     console.log(`Created by ${this.authorName} on ${this.createdOn}`);
//   };
// }

// // TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// BlogPost.prototype.addComment = function(comment) {
//   this.comments.push(comment);
// };

// const post = new BlogPost(
//   'John Doe',
//   'My Second Post',
//   'Cats are super cute!',
//   '12/16/2021'
// );

// post.addComment('Nice post, I like it!');

// // TODO: Add a comment describing what you expect to see printed in the console
// console.log(post.comments);

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log(`Zzzzzzzzzzzzzzzzz`);
  };
}

const newDog = new Dog(`Rex`, 2, `bulldog`);

Dog.nap();
