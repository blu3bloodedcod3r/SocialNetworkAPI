const router = require('express').Router();
const thoughtSchema = require('../../models/thought');
const User = require('../../models/user');

// /api/users
router.route('/').get(User)

// /api/users/:userId
router.route('/:userId').get(getSingleUser).findOneById('_id').get;


router.route('/:userId/thoughts').PopulatedPaths(thoughtSchema);

router.route('/users').post(createUser);
router.route('/users/:userId').delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId').post(addFriend);
router.route('/api/users/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;