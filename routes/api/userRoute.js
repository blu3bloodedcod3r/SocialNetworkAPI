const router = require('express').Router();
const thoughtSchema = require('../../models/thought');
const User = require('../../models/user');

// /api/users
router.route('/').get(User)
router.route('/:userId').get(User).findOneById(_id).get;


router.route('/:userId/thoughts').PopulatedPaths(thoughtSchema);

router.route('/users').post(newUser);
router.route('/users/:userId').delete(removeUser);

// /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId').post(newFriend);
router.route('/api/users/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;