const router = require('express').Router();
const thoughtSchema = require('../../models/thought');
const User = require('../../models/user');

// /api/thoughts
router.route('/').get(Thought);

//get single thought
router.route('/thoughts/:thoughtId').get(getSingleThought);

//new thought
router.route('/thoughts/:thoughtId').post(createThought);

//update thought
router.route('/thoughts/:thoughtId').update(updateThought);

//delete thoguht
router.route('/thoughts/:thoughtId').delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions').post(newReactions, [reactions]);
router.route('/thoughts/:thoughtId/reactions').delete(_id, reactionId)

module.exports = router;