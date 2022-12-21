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
router.route('/:userId').get(getSingleUser).findOneById('_id').get;

router.route('/:userId/thoughts').PopulatedPaths(thoughtSchema);

//create, upadte and delte user
router.route('/users').post(createUser);
router.route('/users/:userId').update(updateUser);
router.route('/users/:userId').delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId').post(addFriend);
router.route('/api/users/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;