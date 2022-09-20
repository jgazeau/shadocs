const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:1313/"
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: false,
  video: false,
  env: {
    "404_PATH"                     : "404.html",
    "SITEMAP_XML_PATH"             : "sitemap.xml",
    "FRENCH_URL_PREFIX"            : "/fr",
    "FUNC_TOC_PATH"                : "functionalities/toc/",
    "FUNC_TOC_DISABLED_PATH"       : "functionalities/toc/toc_disabled/",
    "FUNC_BANNER_PATHS"            : ["functionalities/banner/global/","functionalities/banner/single/"],
    "FUNC_MERMAID_PATH"            : "functionalities/mermaid/",
    "HOMEPAGE_URL"                 : "http://localhost:1313/",
    "NULL_STRING"                  : "bnVsbFN0cmluZw==",
    "SEARCH_TEST_INPUT"            : "theme",
    "SC_PATH"                      : "shortcodes/",
    "SC_ALERT_PATH"                : "alert/",
    "SC_ASYNCAPI_PATH"             : "asyncapi/",
    "SC_BLOCKQUOTE_PATH"           : "blockquote/",
    "SC_COLLAPSIBLE_PATH"          : "collapsible/",
    "SC_HIGHCHARTS_PATH"           : "highcharts/",
    "SC_INTRO_PATH"                : "intro/",
    "SC_OPENAPI_PATH"              : "openapi/",
    "SC_PAGEBREAK_PATH"            : "pagebreak/",
    "SC_PARAMETER_PATH"            : "parameter/",
    "SC_SNIPPET_PATH"              : "snippet/",
    "SC_TREEVIEW_PATH"             : "treeview/",
    "SITEMAP_PATH"                 : "sitemap/",
    "TAXONOMY_PATH"                : "categories/",
    "TERM_PATH"                    : "categories/markdown/",
    "THEME_PATH"                   : "theme/",
    "VIEWPORT_COMMON_HEIGHT"       : 1080,
    "VIEWPORT_WIDESCREEN_MAXWIDTH" : 1407,
    "VIEWPORT_WIDESCREEN_MINWIDTH" : 1216,
    "VIEWPORT_DESKTOP_MAXWIDTH"    : 1215,
    "VIEWPORT_DESKTOP_MINWIDTH"    : 1024,
    "VIEWPORT_TOUCH_MAXWIDTH"      : 1023,
    "VIEWPORT_TOUCH_MINWIDTH"      : 769,
    "VIEWPORT_MOBILE_MAXWIDTH"     : 768,
    "VIEWPORT_MOBILE_MINWIDTH"     : 300,
    "WAIT_FOR_ANIMATION"           : 500
  }
})
