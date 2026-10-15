// Contact details are stored reversed and rendered on click, so simple scrapers reading raw HTML miss them.
function reveal(button, reversed, isEmail) {
  const value = reversed.split('').reverse().join('');
  button.replaceWith(isEmail
    ? Object.assign(document.createElement('a'), { href: 'mailto:' + value, textContent: value })
    : document.createTextNode(value));
}
