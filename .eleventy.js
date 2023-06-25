const tailwind = require('tailwindcss');
const postCss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const { DateTime } = require("luxon");


const postcssFilter = (cssCode, done) => {
  postCss([tailwind(require('./tailwind.config')), autoprefixer(), cssnano({ preset: 'default' })])
    .process(cssCode, {
      from: './_styles/tailwind.css'
    })
    .then(
      (r) => done(null, r.css),
      (e) => done(e, null)
    );
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./_styles/tailwind.css');
  eleventyConfig.addNunjucksAsyncFilter('postcss', postcssFilter);
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
};
