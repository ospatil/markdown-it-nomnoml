const nomnoml = require('nomnoml');
function nomnomlPlugin(md) {
  const origRule = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    if (token.info === 'nomnoml') {
      const code = token.content.trim();
      return nomnoml.renderSvg(code);
    }

    // Other languages
    return origRule(tokens, idx, options, env, slf);
  };
}

module.exports = nomnomlPlugin;
