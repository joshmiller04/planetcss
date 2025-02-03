module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(["liquid", "md", "html"]);
  eleventyConfig.addPassthroughCopy("styles");
};
