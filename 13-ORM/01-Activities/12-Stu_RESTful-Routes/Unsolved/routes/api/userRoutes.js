const router = require('express').Router();
const User = require('../../models/User');

// TODO: Implement each of the three routes below using `async/await`
// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
    const bookData = await Book.create(req.body);

    return res.json(bookData);
  });

// UPDATE a user
router.put('/:id', async (req, res) => {
    const bookData = await Book.update(
        {
          title: req.body.title,
          author: req.body.author,
          isbn: req.body.isbn,
          pages: req.body.pages,
          edition: req.body.edition,
          is_paperback: req.body.is_paperback,
        },
        {
          where: {
            book_id: req.params.book_id,
          },
        }
      );
    
      return res.json(bookData);
    });
    

// DELETE a user
router.delete('/:id', async (req, res) => {
    const bookData = wait Book.destroy({
        where: {
            book_id: req.params.book_id,
        },
    });
    return res.json(bookData);
});

module.exports = router;
