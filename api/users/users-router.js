// Require the `restricted` middleware from `auth-middleware.js`. You will need it here!

const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', async (req, res, next) => {
  try {
    Users.find()
      .then()
    res.json({ status: 200, message: 'users router GETs it' });
  } catch (err) {
    next(err);
  }
})
/**
  [GET] /api/users

  This endpoint is RESTRICTED: only authenticated clients
  should have access.

  response:
  status 200
  [
    {
      "user_id": 1,
      "username": "bob"
    },
    // etc
  ]

  response on non-authenticated:
  status 401
  {
    "message": "You shall not pass!"
  }
 */


// Don't forget to add the router to the `exports` object so it can be required in other modules
modeule.exports = router; 