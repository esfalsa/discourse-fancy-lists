# **Fancy Lists** Plugin

This Discourse plugin is a thin wrapper around the [`markdown-it-fancy-lists`](https://github.com/Moxio/markdown-it-fancy-lists) plugin. All credit goes there!

## How it works

[`index.js`](./index.js) imports the plugin and attaches it to the global `window` object. [Rollup](https://github.com/rollup/rollup) is used to bundle the plugin and all dependencies into a single file, [`assets/vendor/javascripts/mardown-it-fancy-lists.js`](./assets/vendor/javascripts/markdown-it-fancy-lists.js).

Attaching the plugin to the `window` object allows us to simply access the plugin as `window.markdownItFancyListPlugin`. Aside from this step (and the necessary bundling to inline dependencies), more information can be found in Discourse's official [documentation](https://meta.discourse.org/t/repackaging-a-markdown-it-extension-as-a-discourse-plugin/84614) for repackaging a markdown-it plugin for Discourse.

## License

MIT
