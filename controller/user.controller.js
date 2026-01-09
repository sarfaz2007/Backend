const { createUserService,getAllUsersService,getUserByIdService,updateUserService,deleteUserService} = require("../service/user.service");
  


 const createUserController = async (req, res) => {
  try {
    const user = await userService.createUserService(req.body);
    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


 const getUsersController = async (req, res) => {
  try {
    const users = await userService.getAllUsersService();
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

 const getUserController = async (req, res) => {
  try {
    const user = await userService.getUserByIdService(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


 const updateUserController = async (req, res) => {
  try {
    const user = await userService.updateUserService(req.params.id, req.body);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


 const deleteUserController = async (req, res) => {
  try {
    const user = await userService.deleteUserService(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
    createUserController,
    getUsersController,
    getUserController,
    updateUserController,
    deleteUserController
};
