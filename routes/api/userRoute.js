const router = require('express').Router();
const Thought = require('../../models/thought');
const friends = require('../../models/user');
const {
    getUsers,
    getSingleUser, 
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController')

// /api/users
router.route('/').get(getUsers)

// /api/users/:userId
router.route('/users/:userId')
    .get(getSingleUser)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

//get user by id and populate friends and thoughts data
router.route('/:userId/thoughts')
    .get(getSingleUser)
    .get(Thought)
    .get(friends)

// /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId')
    .get(friends)
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;