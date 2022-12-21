const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const friendCount = async () =>
  User.aggregate()
    .count('friendCount')
    .then((numberOfFriends) => numberOfFriends);

model.exports = {  
    // Get all Users
    getUsers(req, res) {
      User.find()
        .then(async (users) => {
          const userObj = {
            users,
            headCount: await friendCount(),
          };
          return res.json(userObj);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Get a single user
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .lean()
        .then(async (user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json({
                user
              })
        )
        .then(async ([thoughts, friends]))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // create a new user
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    //update user by _id
    updateUser(req,res) {
        User.update(req.params.userId)
        .then((user) => res.json(user))
        .catch(err => res.status(500).json(err));
    },
    // Delete a user by _id
    deleteUser(req, res) {
      User.findOneAndRemove({ _id: req.params.userId })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No such user exists' })
            : Thought.findOneAndUpdate(
                { friends: req.params.friendId },
                { $pull: { user: req.params.userId } },
                { new: true }
              ))
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
  
    // Add a friend to a user
    addFriend(req, res) {
      console.log('You are adding an friend');
      console.log(req.body);
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Remove friend from a user
    removeFriend(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: { _id: req.params._id } } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    } 
};