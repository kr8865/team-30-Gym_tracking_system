const express= require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const membershipRoutes = require('./routes/membership.js');

app.use('/api/membership', membershipRoutes);

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase', {
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));





app.use(express.static(path.join(__dirname, 'frontend/build')));





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
