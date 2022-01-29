/** global hexo */
const code = `${hexo.theme.config.google_adsense || ""}`;
if (code.length !== 0) {
    hexo.extend.injector.register("head_end", code, "default")
}
