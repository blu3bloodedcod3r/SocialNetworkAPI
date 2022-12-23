const router = require('express').Router();
const Thought = require('../../models/thought');
const friends = require('../../models/user');
const {
    getUsers,
    getSingleUser, 
    createUser,
    updateUser,
    deleteUser,
    getFriends,
    addFriend,
    removeFriend
} = require('../../controllers/userController')

// /api/users(working don't touch)
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

//get user by id and populate friends and thoughts data
router.route('/:userId/thoughts')
    .get(getSingleUser)
    .get(Thought)
    .get(getFriends)

// /api/users/:userId/friends(able to add friends)
router.route('/:userId/friends')
    .get(getFriends)
    .post(addFriend)
    
//works, don't touch
router.route('/:userId/friends/:friendId')
    .delete(removeFriend);

module.exports = router;