const IPO = require("../model/IPOModel");
const IPOApplication = require("../model/IPOApplicationModel");
const User = require("../model/UserModel");

//  APPLY IPO
exports.applyIPO = async (req, res) => {
  try {
    const userId = req.user._id; // from auth middleware
    const { ipoId, lots } = req.body;

    //  Validate input
    if (!ipoId || !lots || lots <= 0) {
      return res.status(400).json({ message: "Invalid input" });
    }

    //  Fetch IPO
    const ipo = await IPO.findById(ipoId);
    if (!ipo || ipo.status !== "OPEN") {
      return res.status(400).json({ message: "IPO not open" });
    }

    //  Fetch User
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //  Calculate
    const totalShares = ipo.lotSize * lots;
    const amount = ipo.price * totalShares;

    const { FundsModel } = require("../model/FundsModel");

    const funds = await FundsModel.findOne({ userId, type: "EQUITY" });

    if (!funds) {
      return res.status(404).json({ message: "Funds account not found" });
    }

    if (funds.availableCash < amount) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    const updatedFunds = await FundsModel.findOneAndUpdate(
  { userId, type: "EQUITY", availableCash: { $gte: amount } },
  {
    $inc: {
      availableCash: -amount,
      usedMargin: amount,
    },
  },
  { new: true }
);

if (!updatedFunds) {
  return res.status(400).json({ message: "Insufficient funds" });
}


    //  Save IPO Application
    const application = await IPOApplication.create({
      userId,
      ipoId,
      lots,
      totalShares,
      amountBlocked: amount,
    });

    res.status(201).json({
      message: "IPO applied successfully",
      application,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllIPOs = async (req, res) => {
  try {
    const ipos = await IPO.find({ status: "OPEN" });
    res.status(200).json(ipos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};