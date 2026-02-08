const IPO = require("../model/IPOModel");
const IPOApplication = require("../model/IPOApplicationModel");
const User = require("../model/UserModel");

//  APPLY IPO
exports.applyIPO = async (req, res) => {
  try {
    const userId = req.user._id;
    const { ipoId, lots } = req.body;

    if (!ipoId || !lots || lots <= 0) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const ipo = await IPO.findById(ipoId);
    if (!ipo || ipo.status !== "OPEN") {
      return res.status(400).json({ message: "IPO not open" });
    }

    const totalShares = ipo.lotSize * lots;
    const amount = ipo.price * ipo.lotSize * lots;

    const { FundsModel } = require("../model/FundsModel");

    const updatedFunds = await FundsModel.findOneAndUpdate(
      { userId, type: "EQUITY", availableCash: { $gte: amount } },
      { $inc: { availableCash: -amount, usedMargin: amount } },
      { new: true }
    );

    if (!updatedFunds) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

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
