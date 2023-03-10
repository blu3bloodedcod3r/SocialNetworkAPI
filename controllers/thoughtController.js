const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
      Thought.find()
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    // Get a thought
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a thought
      createThought(req,res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch(err => {
          return res.status(500).json(err);
        })
      },
    // Delete a thought
    deleteThought(req, res) {
      Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : User.deleteMany({ _id: { $in: thought.users } })
        )
        .then(() => res.json({ message: 'Thought and Users deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    // Update a thought
    updateThought(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughteId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    //create reaction
      createReaction(req,res) {
        console.log(req.params.thoughtId)
      },
      deleteReaction(req,res) {
        console.log(req.params.reactionId)
        console.log(req.params.thoughtId)
      }
  };