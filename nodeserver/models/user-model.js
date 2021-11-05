const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new schema(
    {       
        username: { type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},

    }
);

const SALT = 10;


userSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, SALT, function (err, hash) {
      if (err) console.error(err);
      user.password = hash;
      return next();
    });
  });

// userSchema.methods.comparePassword = function (pwd)
// {
//     const user = this;
//     return bcrypt.compare(pwd, user.password);
// };

// userSchema.methods.comparePassword = function(pwd) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//       if (err) return cb(err);
//       cb(null, isMatch);
//   });
// };

userSchema.methods.comparePassword = async function(potentialPass) 
{
  const user = this;
  return await bcrypt.compare(potentialPass, user.password);
};

var userModel = mongoose.model('User', userSchema);
module.exports = userModel;