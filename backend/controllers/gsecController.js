const Gsec = require("../model/GsecModel");
const GsecApplication = require("../model/GsecApplicationModel");
const { FundsModel } = require("../model/FundsModel");

exports.seedGsecs = async (req, res) => {
  try {
    await Gsec.deleteMany();

    const data = [
      {
        name: "7.24% GS 2055",
        couponRate: 7.24,
        indicativeYield: 7.4,
        pricePerUnit: 106,
        maturityDate: "2035-10-06",
        minInvestment: 1000,
        biddingEndDate: "2026-01-22",
      },
      {
        name: "New GS 2029",
        couponRate: 5.93,
        indicativeYield: 5.93,
        pricePerUnit: 100,
        maturityDate: "2029-04-01",
        minInvestment: 1000,
        biddingEndDate: "2026-01-22",
      },
      {
        name: "New GS 2033",
        couponRate: 6.72,
        indicativeYield: 6.72,
        pricePerUnit: 100,
        maturityDate: "2033-03-01",
        minInvestment: 1000,
        biddingEndDate: "2026-01-22",
      },
    ];

    await Gsec.insertMany(data);
    res.json({ message: "GSEC data inserted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

    if (bidYield < gsec.couponRate - 2 || bidYield > gsec.couponRate + 2) {
      return res.status(400).json({ message: "Invalid bid yield range" });
    }

    const units = Math.floor(investmentAmount / gsec.pricePerUnit);

    const funds = await FundsModel.findOneAndUpdate(
      { userId, type: "EQUITY", availableCash: { $gte: investmentAmount } },
      {
        $inc: {
          availableCash: -investmentAmount,
          usedMargin: investmentAmount,
        },
      },
      { new: true },
    );

    if (!funds) return res.status(400).json({ message: "Insufficient funds" });

    const bid = await GsecApplication.create({
      userId,
      gsecId,
      bidYield,
      investmentAmount,
      unitsApplied: units,
    });

    res.status(201).json({ message: "Bid placed", bid });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllGsecs = async (req, res) => {
  try {
    const gsecs = await Gsec.find({ status: "OPEN" }).sort({ maturityDate: 1 });
    res.status(200).json(gsecs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

