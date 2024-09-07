import { User } from "../models/user.model.js";

export const getWatchList = async (req, res) => {
  try {
    res.status(200).json({ success: true, content: req.user.watchList });
  } catch (error) {
    console.log("Error in user controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteWatchList = async (req,res) => {
  try {
    const { id } = req.params;
    User.findByIdAndUpdate(req.user._id, {
      $pull: {
        watchList: { id: id },
      },
    });
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.log("Internal server error in user controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
