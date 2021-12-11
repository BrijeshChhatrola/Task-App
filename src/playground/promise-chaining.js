require("../db/mongoose");

const User = require("../models/user");

// User.findByIdAndUpdate("61af3ced9f3d445a58f4d2d6", { age: 26 })
//   .then((user) => {
//     return User.countDocuments({ age: 23 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeCount("61af3ced9f3d445a58f4d2d6", 23)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
