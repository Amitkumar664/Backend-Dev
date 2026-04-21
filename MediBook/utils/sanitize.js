const sanitizeHtml = require("sanitize-html");

module.exports = (data) => {
  return sanitizeHtml(data);
};