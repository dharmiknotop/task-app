const app = require('./app');
const connectDatabase = require('./config/database');

connectDatabase();

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});
