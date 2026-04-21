const sanitizeHtml = require("sanitize-html");

module.exports = (data) => {
  return sanitizeHtml(data, {
    allowedTags: ["b", "i", "p", "ul", "li"]
  });
};