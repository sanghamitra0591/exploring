const User = require('../models/User');

const addAdmin = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = new User({ username, password: hashedPassword, role: 'admin' });
  await admin.save();

  res.status(201).json({ message: 'Admin created' });
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = { addAdmin, getAllUsers };
