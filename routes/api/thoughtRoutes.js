//  '/'
// '/:thoughtId'
// '/:thoughtId/reactions'
// '/:thoughtId/reactions/:reactionsId'
const router = require('express').Router();
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../../models');

// get all thoughts 
router.get('/', (req,res) => {
    Thought.find()
    .then((thoughts) => res.json(thoughts))
    .catch((err)=> res.status(500).json(err))
})

// get single thought by id
router.get('/:thoughtId', (req, res) => {
    Thought.findOne({ _id: req.params.thoughtId })
    .select('-__v')
    .then((thought) => res.json(thought))
    .catch((err)=> res.status(500).json(err))
})

// create a thought
router.post('/', (req, res) => {
    Thought.create(req.body)
    .then((thought) => {
     return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id }},
          { new: true }
        )
      })
    .then((user) =>
    !user
      ? res
          .status(404)
          .json({ message: 'Thought created, but found no user with that ID' })
      : res.json('Created the thought')
  )
    .catch((err)=> {
        console.log(err)
        res.status(500).json(err)
    })
})


// update a thought
router.put('/:thoughtId', (req, res) => {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  });


// delete a thought 
router.delete('/:thoughtId', (req, res) => {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({ message: 'Thought successfully deleted' })
      )
    //   .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
})

// add a friend to a user's friend list
// router.post('/:userId/friends/:friendId', (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $addToSet: { friends: req.params.friendId } },
//         { runValidators: true, new: true }
//       )
//     .then((user) => res.json(user))
//     .catch((err)=> res.status(500).json(err))
// })

// // remove a user's friend
// router.delete('/:userId/friends/:friendId', (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $pull: { friends: req.params.friendId } },
//         { runValidators: true, new: true }
//       )
//     .then((user) => res.json(user))
//     .catch((err)=> res.status(500).json(err))
// })

module.exports = router;