const multer = require('multer');
const storage = multer.memoryStorage(); // store images in memory to save in MongoDB
const upload = multer({ storage });
module.exports = upload;
