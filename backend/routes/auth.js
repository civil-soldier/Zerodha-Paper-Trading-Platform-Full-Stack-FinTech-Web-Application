router.delete("/auth/lead", async (req, res) => {
  try {
    const { email, mobile } = req.body;

    if (!email && !mobile) {
      return res.status(400).json({ success: false });
    }

    await User.deleteOne({
      $or: [{ email }, { mobile }],
      status: "LEAD",
      isEmailVerified: false,
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});
