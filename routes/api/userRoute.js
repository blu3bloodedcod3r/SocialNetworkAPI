const router = require('express').Router();
const User = require('../../models/user');


router.route('/').get(User).post(createUser);
router.route('/:userId').get(singleUser).delete(deleteUser)

router.route('/:userId').get()