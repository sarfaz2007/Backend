const User = require("../Models/UserModel")



 const createUserService = async (userData) => {
  return await User.create(userData);
};


 const getAllUsersService = async () => {
  return await User.find();
};


 const getUserByIdService = async (id) => {
  return await User.findById(id);
};


 const updateUserService = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });
};

 const deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService 
}
