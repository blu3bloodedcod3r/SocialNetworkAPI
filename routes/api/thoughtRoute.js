const router = require('express').Router();
const reactions = require('../../models/reaction')
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought
} = require('../../controllers/thoughtController')

// /api/thoughts
router.route('/').get(getThoughts);

router.route('/thoughts/:thoughtId')
    .get(getSingleThought)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions')
    .post([reactions])
    .delete(_id, reactionId);

module.exports = router;