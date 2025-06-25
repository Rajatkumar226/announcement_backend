const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./database/db');
const announcementRoutes = require('./routes/route');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/announcements', announcementRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});
