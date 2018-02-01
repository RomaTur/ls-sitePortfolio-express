const mongoose = require('mongoose');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const config = require('./config/config');
mongoose.Promise = global.Promise;
mongoose
  .connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`, {
    useMongoClient: true
  })
  .catch(e => {
    console.error(e);
    throw e;
  });

let login = '',
  password = '';

rl.question('Логин: ', answer => {
  login = answer;

  rl.question('Пароль: ', answer => {
    password = answer;

    rl.close();
  });
});

rl.on('close', () => {
  require('./api/models/user');
  const User = mongoose.model('user');
  const adminUser = new User({ login: login });
  adminUser.setPassword(password);
  User.findOne({ login: login })
    .then(u => {
      if (u) {
        throw new Error('Такой пользователь уже существует!');
      }

      return adminUser.save();
    })
    .then(u => console.log('ok!'), e => console.error(e.message))
    .then(() =>
      mongoose.connection.close(function() {
        process.exit(0);
      })
    );
});
