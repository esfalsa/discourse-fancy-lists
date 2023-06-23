export function setup(helper) {
  helper.allowList(["ol[type=*]", "ol[start=*]"]);
  helper.registerPlugin(window.markdownItFancyListPlugin);
}
