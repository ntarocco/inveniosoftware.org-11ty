import eleventySass from "@11tyrocks/eleventy-plugin-sass-lightningcss";
import eleventyNavigation from "@11ty/eleventy-navigation";

export default async function (eleventyConfig) {
  // copy all `src/assets` to `_site/static"
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });

  // enable SASS/SCSS
  eleventyConfig.addPlugin(eleventySass);

  // navigation menu support
  eleventyConfig.addPlugin(eleventyNavigation);

  eleventyConfig.addFilter("divideArrayInParts", (arr, n) => {
    const result = Array.from({ length: n }, () => []);
    arr.forEach((item, index) => {
      result[index % n].push(item);
    });
    return result;
  });

  eleventyConfig.addFilter("sliceArray", (arr, n) => {
    const result = [];
    for (let i = 0; i < arr.length; i += n) {
      result.push(arr.slice(i, i + n));
    }
    return result;
  });

  eleventyConfig.addFilter("sortBy", (arr, field, filterField, filterValue) => {
    let result = [...arr];
    if (filterField && filterValue) {
      result = result.filter((item) => item[filterField] === filterValue);
    }
    return result.sort((a, b) => a[field].localeCompare(b[field]));
  });

  eleventyConfig.addFilter("dateFormat", (date) => {
    const d = new Date(date);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  });
}

export const config = {
  templateFormats: ["md", "njk", "html", "liquid", "11ty.js"],
  markdownTemplateEngine: "liquid",
  dataTemplateEngine: "liquid",
  htmlTemplateEngine: "liquid",
  dir: {
    input: "src",
    includes: "_includes",
    data: "_data",
    output: "_site",
  },
};
