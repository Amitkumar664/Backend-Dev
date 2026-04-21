const sanitizeHtml = require("sanitize-html");

module.exports = (dirty) => {
  return sanitizeHtml(dirty, {
    allowedTags: ["b", "i", "em", "strong", "a"],
    allowedAttributes: {
      a: ["href"]
    }
  });
};