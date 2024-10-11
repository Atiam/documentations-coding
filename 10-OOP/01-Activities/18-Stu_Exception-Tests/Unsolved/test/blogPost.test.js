const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  it("should throw and error when the authorName is less than 2 characters long", ()=> {
    const cb = () => new BlogPost(`A`);
    const err = new error (`Author must be at least 2 characters long.`)
    expect(cb).tothrowError(err);
  })
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
  it("Should throw an error if authorName constains more uppercase, lowercase, numbers, dashes, and underscores.", () => {
    const cb =() => BlogPost(arnau@##^);
    const err = new Error (`Author must only contain letters, numbers, dashes, and underscores`);
    expect(cb).toThrowErow(err);
});
});
