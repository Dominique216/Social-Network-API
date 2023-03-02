const router = require('express').Router();
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../../models');
// get all users 
router.get('/', (req,res) => {
    User.find()
    .then((users) => res.json(users))
    .catch((err)=> res.status(500).json(err))
})

// get single user by id
router.get('/:userId', (req, res) => {
    User.findOne({ _id: req.params.userId })
    .select('-__v')
    .then((user) => res.json(user))
    .catch((err)=> res.status(500).json(err))
})

// create a user
router.post('/', (req, res) => {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err)=> res.status(500).json(err))
})


// update a user 
router.put('/:userId', (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  });


// delete a user 
router.delete('/:userId', (req, res) => {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts} })
        //   && User.deleteMany({ _id: { $in: user.friends} })

      )
      .then(() => res.json({ message: 'User deleted!' }))
      .catch((err) => res.status(500).json(err));
})

// add a friend to a user's friend list
router.post('/:userId/friends/:friendId', (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      )
    .then((user) => res.json(user))
    .catch((err)=> res.status(500).json(err))
})

// remove a user's friend
router.delete('/:userId/friends/:friendId', (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      )
    .then((user) => res.json(user))
    .catch((err)=> res.status(500).json(err))
})

module.exports = router;

