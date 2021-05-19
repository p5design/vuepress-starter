const mdItDisableUrlEncode = require("markdown-it-disable-url-encode");
const mdItImsize = require("markdown-it-imsize");
const mdItImLazyLoading = require("markdown-it-image-lazy-loading");
module.exports = {
  extendMarkdown: (md) => {
    md.use(mdItDisableUrlEncode);
    md.use(mdItImsize);
    md.use(mdItImLazyLoading);
  },
};
