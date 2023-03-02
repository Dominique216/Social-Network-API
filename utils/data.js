const connection = require('../config/connection');
const { User, Thought } = require('../models');

const uname = [
    'ryan123',
    'cbrown24',
    'pammy67',
    'mikes44',
    'halpj23', 
    'diana84', 
    'mjordan', 
    'schrutefamrs',
    'ckent', 
    'jonezzz' 
]

const uemails = [
    'justice@email.com',
    'league@email.com',
    'office@email.com',
    'dunder@email.com',
    'mifflin@email.com',
    'nba@email.com',
    'wnba@email.com',
    'salesman@email.com',
    'youtube@email.com',
    'hello@email.com', 
]

const thoughtsdata = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Suspendisse varius est at erat molestie porta.', 
    'Mauris vitae sapien eget arcu mattis luctus.', 
    'Nam euismod dui ut libero posuere, porta consectetur nisi dignissim.', 
    'Quisque vitae maximus est.', 
    'Duis lobortis nec tellus ac hendrerit.',
    'Suspendisse pretium volutpat faucibus.', 
    'Sed rutrum nulla odio.',
    'Cras accumsan a magna vel rutrum.', 
    'Proin sed ultricies purus.'
]

const reactiondata = [
    'Curabitur vel nisl mauris.', 
    'Nullam odio mauris, elementum vitae ante sit amet, ornare lobortis nisl.', 
    'Donec vitae libero est.', 
    'Ut aliquet ante et erat luctus viverra.', 
    'In sed ante in libero elementum placerat.', 
    'Pellentesque condimentum ac urna at ultrices.', 
    'Nulla sed libero tempus, sagittis nunc id, efficitur purus.', 
    'Praesent sed consectetur magna.', 
    'Aliquam sed egestas odio.', 
    'Aliquam imperdiet velit non velit vestibulum, id convallis lacus porttitor.',
]


const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await Thought.deleteMany({});

  const users = [];
  const thoughts = [];

  for (let i = 0; i < 10; i++){
    const username = uname[i];
    const email = uemails[i];
    const userthoughts = getRandomArrItem(2);
    const friends = getRandomArrItem(3);

    users.push({
      username, 
      email, 
      userthoughts, 
      friends
    })

    const thoughtText = []
  }



  await User.collection.insertMany(users)

  await Thought.collection.inserMany(thoughts2);
//   const users = [];

//   const thoughts2= [];

//   for (let i = 0; i < 10; i++) {
//     const reactions = reactiondata[i];

//     const thoughtText = thoughtsdata[i];
//     const username2 = uname[i];
//      thoughts2.push({
//       thoughtText, 
//       username2,
//       reactions
//   })
//   }

//   await Thought.collection.inserMany(thoughts2);

//  for (let i = 0; i < 10; i++) {
//     const usern = uname[i];
//     const email2 = uemails[i
//     await User.collection.insertMany({
//       username: usern,
//       email: email2,
//       thoughts: [...thoughts2]
//  })

  // }
})
