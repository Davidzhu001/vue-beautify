var beautify = require('js-beautify');

/**
 * beautify html/js/css
 * @param {string} text the source code
 * @param {boolean} [isTabIndent=false] indent with tab? default: false
 * @param {number} [indentSize=2] indent size, default: 2
 * @return {string} beautify the code
 */
module.exports = function (text, isTabIndent, indentSize) {

  if (isTabIndent === undefined || typeof isTabIndent !== 'boolean') {
    isTabIndent = false;
  }
  if (indentSize === undefined || typeof indentSize !== 'number' || indentSize < 0) {
    indentSize = 2;
  }

  // beautify
  text = beautify.html(text, {
    indent_char: ' ',
    indent_size: indentSize,
    indent_with_tabs: isTabIndent,
    indent_inner_html: true,
    unformatted: ['code', 'pre', 'em', 'strong', 'span']
  });

  return text
    // // Remove any empty lines at the top of a file.
    // .replace(/^\s*/g, '')
    // // Normalize and condense all newlines
    // .replace(/(\r\n|\n){2,}/g, '\n')
    // // fix multiline, Bootstrap-style comments
    // .replace(/(\s*)(<!--.+)\s*(===.+)/g, '$1$2$1$3')
    // // make <li><a></li> on one line, but only when li > a
    // .replace(/(<li>)(\s*)(<a .+)(\s*)(<\/li>)/g, '$1 $3 $5')
    // // make <a><span></a> on one line, but only when a > span
    // .replace(/(<a.+)(\s*)(<span .+)(\s*)(<\/a>)/g, '$1 $3 $5')
    // // Adjust spacing for button > span
    // .replace(/(<button.+)(<span.+)(\s*)(<\/button>)/g, '$1$3  $2$3$4')
    // // Adjust spacing for span > input
    // .replace(/(\s*)(<span.+)(\s*)(<input.+)(\s*)(<\/span>)/g, '$1$2$1  $4$1$6')
    // // Add a newline for tags nested inside <h1-6>
    // .replace(/(\s*)(<h[0-6](?:.+)?>)(.*)(<(?:small|span|strong|em)(?:.+)?)(\s*)(<\/h[0-6]>)/g, '$1$2$3$1  $4$1$6')
    // // Add a space above each comment
    // .replace(/(\s*<!--)/g, '\n$1')
    // // Fix conditional comments
    // .replace(/( *)(<!--\[.+)(\s*)(.+\s*)?(.+\s*)?(<!\[endif\]-->)/g, '$1$2\n  $1$4$1$5$1$6')
    // // Bring closing comments up to the same line as closing tag.
    // .replace(/\s*(<!--\s*\/.+)/g, '$1')
    // // Add a space after some inline elements, since prettifying strips them sometimes
    // .replace(/(<\/(a|small|span|strong|em)>(?:(?!,)))/g, '$1 ')
    // // add new line after template
    // .replace(/(<\/template>)/, '$1\n')
    // // add new line after script
    // .replace(/(<\/script>)/, '$1\n')
    // // add new line after style
    // .replace(/(<\/style>)/, '$1\n');
}