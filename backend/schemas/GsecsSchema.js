const Gsec = require("../model/GsecModel");
const GsecApplication = require("../model/GsecApplicationModel");
const { FundsModel } = require("../model/FundsModel");

exports.placeBid = async (req, res) => {
  try {
    const userId = req.user._id;
    const { gsecId, bidYield, investmentAmount } = req.body;

    const gsec = await Gsec.findById(gsecId);
    if (!gsec || gsec.status !== "OPEN") {
      return res.status(400).json({ message: "Bidding closed" });
    }

    if (investmentAmount < gsec.minInvestment) {
      return res.status(400).json({ message: "Below minimum investment" });
    }

    const units = Math.floor(investmentAmount / gsec.pricePerUnit);

    const funds = await FundsModel.findOneAndUpdate(
      { userId, type: "EQUITY", availableCash: { $gte: investmentAmount } },
      { $inc: { availableCash: -investmentAmount, usedMargin: investmentAmount } },
      { new: true }
    );

    if (!funds) return res.status(400).json({ message: "Insufficient funds" });

    const bid = await GsecApplication.create({
      userId,
      gsecId,
      bidYield,
      investmentAmount,
      unitsApplied: units
    });

    res.status(201).json({ message: "Bid placed", bid });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
