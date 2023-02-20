{{- with $.Site.Data.themeParams.navbar.shortcuts -}}
  {{- template "setShortcutsMap" dict "this" . "context" $ -}}
{{- end -}}
{{- with $.Site.Params.navbar.shortcuts -}}
  {{- template "setShortcutsMap" dict "this" . "context" $ -}}
{{- end -}}
export const shortcutsKeys = {{- ($.Scratch.Get "shortcutsMap") | jsonify -}};
export const flexSearchThemeOptions = {
  minMatchCharLength: 2,
  highlightMaxCharOffset: 20,
  lineDelimiter: '<span class="search-delimiter"> ˍˍˍ </span>',
  inlineDelimiter: '<span class="search-delimiter"> ··· </span>',
  emptyLineDelimiter: '<span class="search-delimiter">[···]</span><br>'
}
export const flexSearchOptions = {
  charset: "latin:simple",
  tokenize: 'forward',
  optimize: true,
  document: {
    id: 'id',
    index: ['title','content'],
    store: ['title','content','rootTitleIndex','rootTitle','rootTitleIcon','rootTitlePath','rootTitleTitle','permalink','permalinkTitle']
  }
}
export const overlayOptions = {
  className: 'main-scrollbar-theme',
  paddingAbsolute: true,
  overflowBehavior: {
    x: 'hidden',
    y: 'scroll'
  },
  scrollbars : {
    autoHide: 'leave',
    dragScrolling: false,
    clickScrolling: false,
    touchSupport: true
  }
};
export const widescreenSize = 1216;
export const desktopSize = 1024;
export const tabletSize = 769;
export const sizeTriggerWidescreen = 'widescreen';
export const sizeTriggerDesktop = 'desktop';
export const sizeTriggerTouch = 'touch';
export const sizeTriggerMobile = 'mobile';
export const mediaTriggerHover = 'hover';
export const mediaTriggerNoHover = 'nohover';
export let resizeFunctionsList = [];
/* TEMPLATES */
{{- define "setShortcutsMap" -}}
  {{- $context := .context -}}
  {{- range $shortcutName, $parameters := .this -}}
    {{- with $parameters.keys -}}
      {{- $context.Scratch.Set (print $shortcutName "_keys") . -}}
    {{- end -}}
    {{- with $parameters.function -}}
      {{- $context.Scratch.SetInMap $shortcutName "function" . -}}
      {{- $context.Scratch.SetInMap $shortcutName "keys" ($context.Scratch.Get (print $shortcutName "_keys")) -}}
      {{- $context.Scratch.SetInMap "shortcutsMap" $shortcutName ($context.Scratch.Get $shortcutName) -}}
    {{- end -}}
  {{- end -}}
{{- end -}}