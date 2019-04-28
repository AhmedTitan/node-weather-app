var getUser = (id, callback) => {
  var user = {
    id: id,
    name: "Vikram"
  };
  console.log("Object created...");
  setTimeout(() => {
    callback(user);
  }, 3000);
};

// getUser(31, userObject => {
//   console.log("--------------------------------");
//   console.log(userObject);
//   console.log("User name is: ", userObject.name);
//   console.log("User id is: ", userObject.id);
// });

var functionWithcallback = (id, cb) => {
  if (id !== 1) {
    return cb("wrong ID");
  }
  var user = { id: id, name: "Titan", age: 20 };
  cb(undefined, user);
};

functionWithcallback(3, (err, user) => {
  if (err) {
    return console.log("there is an error");
  }
  console.log(user);
});
