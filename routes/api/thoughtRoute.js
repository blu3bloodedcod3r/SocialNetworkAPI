const router = require('express').Router();
const thoughtSchema = require('../../models/thought');
const User = require('../../models/user');

// /api/thoughts
router.route('/').get(thoughtSchema);
router.route('/thoughts/:thoughtId').get('_id', thoughtSchema);

router.route('/thoughts/:thoughtId').post('_id', newThought);
router.route('/thoughts/:thoughtId').update(updateThought);

router.route('/thoughts/:thoughtId').delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions').post(newReactions, [reactions]);
router.route('/thoughts/:thoughtId/reactions').delete(_id, reactionId)

module.exports = router;