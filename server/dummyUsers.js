import User from './models/user';
const bcrypt = require('bcryptjs');

export default function () {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    const userAdmin = new User({
      userName: 'Andres',
      email: 'jandreus87@gmail.com',
      password: bcrypt.hashSync('Andres87', 10),
    });

    User.create([userAdmin], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
