const express = require('express');
const roeuter = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello World');
});

module.exports = roeuter;

const jwt = require('jsonwebtoken');

exports.generateToken = (req, res) => {
    const token = jwt.sign({ user: 'exampleUser' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/token', authController.generateToken);

module.exports = router;

const express = require('express');
const router = express.Router();

router.post('/post', (req, res) => {
    res.send('I am post body');
});

module.exports = router;

const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

