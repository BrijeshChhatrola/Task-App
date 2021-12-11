require("../db/mongoose");
const Task = require("../models/task");

// Task.findByIdAndDelete("61af400bd0c678a1d858cf73")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deletecount = async (id) => {
  const user = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: true });
  return count;
};

deletecount("61af5b2087547551fbefb774")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
