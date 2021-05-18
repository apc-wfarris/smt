module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats("html,liquid,cgi");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");
};
