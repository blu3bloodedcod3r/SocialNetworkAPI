const router = require('express').Router();
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
router.route('/users/:userId').get(getSingleUser);

//get user by id and populate friends and thoughts data
router.route('/:userId/thoughts').get(getSingleUser).populate()

//create, upadte and delete user
router.route('/users').post(createUser);
router.route('/users/:userId').update(updateUser);
router.route('/users/:userId').delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId').post(addFriend);
router.route('/api/users/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;