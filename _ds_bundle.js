/* @ds-bundle: {"format":4,"namespace":"IAMSDesignSystem_1406c8","components":[{"name":"ActivityFeed","sourcePath":"components/app/ActivityFeed.jsx"},{"name":"AssetTable","sourcePath":"components/app/AssetTable.jsx"},{"name":"Icon","sourcePath":"components/app/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/app/Icon.jsx"},{"name":"LockPanel","sourcePath":"components/app/LockPanel.jsx"},{"name":"MetricCard","sourcePath":"components/app/MetricCard.jsx"},{"name":"PageHeader","sourcePath":"components/app/PageHeader.jsx"},{"name":"ReportTile","sourcePath":"components/app/ReportTile.jsx"},{"name":"Seal","sourcePath":"components/app/Seal.jsx"},{"name":"NAVIGATION","sourcePath":"components/app/Sidebar.jsx"},{"name":"Sidebar","sourcePath":"components/app/Sidebar.jsx"},{"name":"StatusPill","sourcePath":"components/app/StatusPill.jsx"},{"name":"Topbar","sourcePath":"components/app/Topbar.jsx"},{"name":"Badge","sourcePath":"components/ui/Badge.jsx"},{"name":"Button","sourcePath":"components/ui/Button.jsx"},{"name":"Card","sourcePath":"components/ui/Card.jsx"},{"name":"CardTitle","sourcePath":"components/ui/Card.jsx"},{"name":"Input","sourcePath":"components/ui/Input.jsx"},{"name":"Label","sourcePath":"components/ui/Label.jsx"},{"name":"Select","sourcePath":"components/ui/Select.jsx"},{"name":"Table","sourcePath":"components/ui/Table.jsx"},{"name":"Th","sourcePath":"components/ui/Table.jsx"},{"name":"Td","sourcePath":"components/ui/Table.jsx"},{"name":"Tr","sourcePath":"components/ui/Table.jsx"}],"sourceHashes":{"components/app/ActivityFeed.jsx":"a577e6c39277","components/app/AssetTable.jsx":"4de5da3b444b","components/app/Icon.jsx":"09336f460192","components/app/LockPanel.jsx":"a26633afcfa8","components/app/MetricCard.jsx":"42cc9ce68a67","components/app/PageHeader.jsx":"d60b17ea2e61","components/app/ReportTile.jsx":"6db3b095cf7d","components/app/Seal.jsx":"4012ce111b0d","components/app/Sidebar.jsx":"c1ca5d6f50aa","components/app/StatusPill.jsx":"17f0b1031dfc","components/app/Topbar.jsx":"d50c089833c1","components/ui/Badge.jsx":"58ccdf4b7f36","components/ui/Button.jsx":"e52e68cdd2de","components/ui/Card.jsx":"33c408c442f0","components/ui/Input.jsx":"5395c37c2960","components/ui/Label.jsx":"e205852186cb","components/ui/Select.jsx":"0beb353088e6","components/ui/Table.jsx":"d9caad7f26cc","ui_kits/iams/app.jsx":"ce9f1ba101f4","ui_kits/iams/data.js":"ccefa3a37ef5","ui_kits/iams/screens.jsx":"0b76e10d04f7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IAMSDesignSystem_1406c8 = window.IAMSDesignSystem_1406c8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/app/ActivityFeed.jsx
try { (() => {
function ActivityFeed({
  items = []
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      listStyle: "none",
      padding: 0
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      padding: "10px 0",
      fontSize: 12.5,
      borderBottom: i === items.length - 1 ? "none" : "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6,
      height: 6,
      width: 6,
      flexShrink: 0,
      borderRadius: "50%",
      background: item.severity === "alert" ? "var(--danger)" : "var(--success)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, item.text), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-tertiary)"
    }
  }, item.time)))));
}
Object.assign(__ds_scope, { ActivityFeed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/ActivityFeed.jsx", error: String((e && e.message) || e) }); }

// components/app/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide icon glyphs (data-URI masks, colored via currentColor).
 * SVGs copied verbatim from lucide-icons/lucide; also on disk in assets/icons/.
 * Note: mask rendering fixes stroke-width at Lucide's default 2
 * (source kit uses 1.6–1.8) — visually near-identical at 14–17px. */
const ICONS = {
  "arrow-left-right": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M8%203%204%207l4%204%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M4%207h16%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m16%2021%204-4-4-4%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M20%2017H4%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "bell": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M10.268%2021a2%202%200%200%200%203.464%200%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M3.262%2015.326A1%201%200%200%200%204%2017h16a1%201%200%200%200%20.74-1.673C19.41%2013.956%2018%2012.499%2018%208A6%206%200%200%200%206%208c0%204.499-1.411%205.956-2.738%207.326%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "boxes": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M2.97%2012.92A2%202%200%200%200%202%2014.63v3.24a2%202%200%200%200%20.97%201.71l3%201.8a2%202%200%200%200%202.06%200L12%2019v-5.5l-5-3-4.03%202.42Z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m7%2016.5-4.74-2.85%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m7%2016.5%205-3%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M7%2016.5v5.17%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M12%2013.5V19l3.97%202.38a2%202%200%200%200%202.06%200l3-1.8a2%202%200%200%200%20.97-1.71v-3.24a2%202%200%200%200-.97-1.71L17%2010.5l-5%203Z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m17%2016.5-5-3%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m17%2016.5%204.74-2.85%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M17%2016.5v5.17%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M7.97%204.42A2%202%200%200%200%207%206.13v4.37l5%203%205-3V6.13a2%202%200%200%200-.97-1.71l-3-1.8a2%202%200%200%200-2.06%200l-3%201.8Z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M12%208%207.26%205.15%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m12%208%204.74-2.85%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M12%2013.5V8%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "clipboard-check": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Crect%20width%3D%228%22%20height%3D%224%22%20x%3D%228%22%20y%3D%222%22%20rx%3D%221%22%20ry%3D%221%22%3E%3C%2Frect%3E%20%3Cpath%20d%3D%22M16%204h2a2%202%200%200%201%202%202v14a2%202%200%200%201-2%202H6a2%202%200%200%201-2-2V6a2%202%200%200%201%202-2h2%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m9%2014%202%202%204-4%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "file-text": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M6%2022a2%202%200%200%201-2-2V4a2%202%200%200%201%202-2h8a2.4%202.4%200%200%201%201.704.706l3.588%203.588A2.4%202.4%200%200%201%2020%208v12a2%202%200%200%201-2%202z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M14%202v5a1%201%200%200%200%201%201h5%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M10%209H8%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M16%2013H8%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M16%2017H8%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "layout-dashboard": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Crect%20width%3D%227%22%20height%3D%229%22%20x%3D%223%22%20y%3D%223%22%20rx%3D%221%22%3E%3C%2Frect%3E%20%3Crect%20width%3D%227%22%20height%3D%225%22%20x%3D%2214%22%20y%3D%223%22%20rx%3D%221%22%3E%3C%2Frect%3E%20%3Crect%20width%3D%227%22%20height%3D%229%22%20x%3D%2214%22%20y%3D%2212%22%20rx%3D%221%22%3E%3C%2Frect%3E%20%3Crect%20width%3D%227%22%20height%3D%225%22%20x%3D%223%22%20y%3D%2216%22%20rx%3D%221%22%3E%3C%2Frect%3E%20%3C%2Fsvg%3E",
  "lock": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Crect%20width%3D%2218%22%20height%3D%2211%22%20x%3D%223%22%20y%3D%2211%22%20rx%3D%222%22%20ry%3D%222%22%3E%3C%2Frect%3E%20%3Cpath%20d%3D%22M7%2011V7a5%205%200%200%201%2010%200v4%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "moon": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M20.985%2012.486a9%209%200%201%201-9.473-9.472c.405-.022.617.46.402.803a6%206%200%200%200%208.268%208.268c.344-.215.825-.004.803.401%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "network": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%226%22%20height%3D%226%22%20rx%3D%221%22%3E%3C%2Frect%3E%20%3Crect%20x%3D%222%22%20y%3D%2216%22%20width%3D%226%22%20height%3D%226%22%20rx%3D%221%22%3E%3C%2Frect%3E%20%3Crect%20x%3D%229%22%20y%3D%222%22%20width%3D%226%22%20height%3D%226%22%20rx%3D%221%22%3E%3C%2Frect%3E%20%3Cpath%20d%3D%22M5%2016v-3a1%201%200%200%201%201-1h12a1%201%200%200%201%201%201v3%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M12%2012V8%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "package": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M11%2021.73a2%202%200%200%200%202%200l7-4A2%202%200%200%200%2021%2016V8a2%202%200%200%200-1-1.73l-7-4a2%202%200%200%200-2%200l-7%204A2%202%200%200%200%203%208v8a2%202%200%200%200%201%201.73z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M12%2022V12%22%3E%3C%2Fpath%3E%20%3Cpolyline%20points%3D%223.29%207%2012%2012%2020.71%207%22%3E%3C%2Fpolyline%3E%20%3Cpath%20d%3D%22m7.5%204.27%209%205.15%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "plug": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M12%2022v-5%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M15%208V2%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M17%208a1%201%200%200%201%201%201v4a4%204%200%200%201-4%204h-4a4%204%200%200%201-4-4V9a1%201%200%200%201%201-1z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M9%208V2%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "search": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22m21%2021-4.34-4.34%22%3E%3C%2Fpath%3E%20%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%3E%3C%2Fcircle%3E%20%3C%2Fsvg%3E",
  "shield-check": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M20%2013c0%205-3.5%207.5-7.66%208.95a1%201%200%200%201-.67-.01C7.5%2020.5%204%2018%204%2013V6a1%201%200%200%201%201-1c2%200%204.5-1.2%206.24-2.72a1.17%201.17%200%200%201%201.52%200C14.51%203.81%2017%205%2019%205a1%201%200%200%201%201%201z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m9%2012%202%202%204-4%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "shield": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M20%2013c0%205-3.5%207.5-7.66%208.95a1%201%200%200%201-.67-.01C7.5%2020.5%204%2018%204%2013V6a1%201%200%200%201%201-1c2%200%204.5-1.2%206.24-2.72a1.17%201.17%200%200%201%201.52%200C14.51%203.81%2017%205%2019%205a1%201%200%200%201%201%201z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "sun": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%224%22%3E%3C%2Fcircle%3E%20%3Cpath%20d%3D%22M12%202v2%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M12%2020v2%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m4.93%204.93%201.41%201.41%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m17.66%2017.66%201.41%201.41%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M2%2012h2%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M20%2012h2%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m6.34%2017.66-1.41%201.41%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m19.07%204.93-1.41%201.41%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E",
  "tag": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M12.586%202.586A2%202%200%200%200%2011.172%202H4a2%202%200%200%200-2%202v7.172a2%202%200%200%200%20.586%201.414l8.704%208.704a2.426%202.426%200%200%200%203.42%200l6.58-6.58a2.426%202.426%200%200%200%200-3.42z%22%3E%3C%2Fpath%3E%20%3Ccircle%20cx%3D%227.5%22%20cy%3D%227.5%22%20r%3D%22.5%22%20fill%3D%22currentColor%22%3E%3C%2Fcircle%3E%20%3C%2Fsvg%3E",
  "users": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M16%2021v-2a4%204%200%200%200-4-4H6a4%204%200%200%200-4%204v2%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M16%203.128a4%204%200%200%201%200%207.744%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M22%2021v-2a4%204%200%200%200-3-3.87%22%3E%3C%2Fpath%3E%20%3Ccircle%20cx%3D%229%22%20cy%3D%227%22%20r%3D%224%22%3E%3C%2Fcircle%3E%20%3C%2Fsvg%3E",
  "door-open": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%20%3Cpath%20d%3D%22M11%2020H2%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M11%204.562v16.157a1%201%200%200%200%201.242.97L19%2020V5.562a2%202%200%200%200-1.515-1.94l-4-1A2%202%200%200%200%2011%204.561z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M11%204H8a2%202%200%200%200-2%202v14%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M14%2012h.01%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M22%2020h-3%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E"
};
function Icon({
  name,
  size = 16,
  style,
  ...props
}) {
  const src = ICONS[name];
  if (!src) return null;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      flexShrink: 0,
      width: size,
      height: size,
      backgroundColor: "currentColor",
      WebkitMaskImage: `url("${src}")`,
      maskImage: `url("${src}")`,
      WebkitMaskSize: "100% 100%",
      maskSize: "100% 100%",
      ...style
    }
  }, props));
}
const ICON_NAMES = Object.keys(ICONS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/Icon.jsx", error: String((e && e.message) || e) }); }

// components/app/PageHeader.jsx
try { (() => {
function PageHeader({
  title,
  sub,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 21,
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, sub)), actions);
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/app/ReportTile.jsx
try { (() => {
/** Report catalog tile — icon, title, description; hover lifts 1px with gold border. */
function ReportTile({
  icon = "file-text",
  title,
  desc,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "iams-report-tile",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      display: "inline-block",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontSize: 13.5,
      fontWeight: 500,
      color: "var(--text-body)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, desc));
}
Object.assign(__ds_scope, { ReportTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/ReportTile.jsx", error: String((e && e.message) || e) }); }

// components/app/Seal.jsx
try { (() => {
/** IAMS brand seal — the signature verification mark. Copied verbatim from the kit. */
function Seal({
  size = 26
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 46 46",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "23",
    cy: "23",
    r: "21",
    stroke: "#3A4566",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "23",
    cy: "23",
    r: "15.5",
    stroke: "#B08D3F",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 23.5L20.5 28L31 16.5",
    stroke: "#B08D3F",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { Seal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/Seal.jsx", error: String((e && e.message) || e) }); }

// components/app/Sidebar.jsx
try { (() => {
/** Default navigation — mirrors lib/data.ts verbatim. */
const NAVIGATION = [{
  label: "Overview",
  items: [{
    id: "dsh-01",
    name: "Dashboard",
    href: "/dashboard",
    icon: "layout-dashboard",
    r1: true
  }]
}, {
  label: "Assets",
  items: [{
    id: "ast-01",
    name: "Asset list",
    href: "/assets",
    icon: "package",
    r1: true
  }, {
    id: "ast-04",
    name: "Label queue",
    href: "/labels",
    icon: "tag",
    r1: true
  }]
}, {
  label: "Inventory",
  items: [{
    id: "inv-01",
    name: "Stock list",
    href: "/stock",
    icon: "boxes",
    r1: false
  }]
}, {
  label: "Lifecycle",
  items: [{
    id: "lif-02",
    name: "Transfers",
    href: "/transfers",
    icon: "arrow-left-right",
    r1: false
  }]
}, {
  label: "Audits",
  items: [{
    id: "aud-01",
    name: "Audit list",
    href: "/audits",
    icon: "clipboard-check",
    r1: false
  }]
}, {
  label: "Reports",
  items: [{
    id: "rpt-01",
    name: "Report catalog",
    href: "/reports",
    icon: "file-text",
    r1: true
  }]
}, {
  label: "Organization",
  items: [{
    id: "org-01",
    name: "Hierarchy",
    href: "/hierarchy",
    icon: "network",
    r1: true
  }]
}, {
  label: "Users",
  items: [{
    id: "usr-01",
    name: "Users",
    href: "/users",
    icon: "users",
    r1: true
  }]
}, {
  label: "Security",
  items: [{
    id: "sec-01",
    name: "Activity log",
    href: "/activity",
    icon: "shield",
    r1: true
  }, {
    id: "cmp-01",
    name: "Retention policy",
    href: "/retention",
    icon: "shield-check",
    r1: true
  }]
}, {
  label: "Integrations",
  items: [{
    id: "int-01",
    name: "Integrations",
    href: "/integrations",
    icon: "plug",
    r1: false
  }]
}];
function Sidebar({
  activeHref = "/dashboard",
  onNavigate,
  navigation = NAVIGATION,
  signedInAs = "elena.m@example.org"
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary",
    className: "iams-sidebar"
  }, /*#__PURE__*/React.createElement("a", {
    className: "iams-sidebar-brand",
    onClick: () => onNavigate && onNavigate("/dashboard"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Seal, {
    size: 22
  }), /*#__PURE__*/React.createElement("span", null, "IAMS")), navigation.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.label
  }, /*#__PURE__*/React.createElement("p", {
    className: "iams-nav-group"
  }, group.label), group.items.map(item => {
    const active = activeHref.startsWith(item.href);
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      "aria-current": active ? "page" : undefined,
      className: "iams-nav-item",
      onClick: () => onNavigate && onNavigate(item.href)
    }, active && /*#__PURE__*/React.createElement("span", {
      className: "iams-nav-active-bar"
    }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: 16,
      style: {
        opacity: 0.85
      }
    }), /*#__PURE__*/React.createElement("span", null, item.name), !item.r1 && /*#__PURE__*/React.createElement("span", {
      className: "iams-nav-r2"
    }, "R2"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "iams-sidebar-footer"
  }, "Signed in as", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "email"
  }, signedInAs)));
}
Object.assign(__ds_scope, { NAVIGATION, Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/ui/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dotClass = {
  verify: "var(--success)",
  amber: "var(--warning)",
  rust: "var(--danger)",
  slate: "var(--text-tertiary)"
};
function Badge({
  tone = "slate",
  dot = true,
  children,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `iams-badge iams-badge-${tone} ${className}`
  }, props), dot && /*#__PURE__*/React.createElement("span", {
    className: "iams-badge-dot",
    style: {
      background: dotClass[tone]
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Badge.jsx", error: String((e && e.message) || e) }); }

// components/app/StatusPill.jsx
try { (() => {
const toneMap = {
  "In use": "verify",
  "In storage": "slate",
  "Under repair": "amber",
  Missing: "rust",
  Active: "verify",
  Offboarding: "amber",
  "Pending Delivery": "amber",
  Received: "verify"
};

/** Maps any domain status string to the correct badge tone. */
function StatusPill({
  status
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: toneMap[status] || "slate"
  }, status);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/ui/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "primary",
  size = "default",
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `iams-btn iams-btn-${variant} iams-btn-size-${size} ${className}`
  }, props));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Button.jsx", error: String((e && e.message) || e) }); }

// components/app/Topbar.jsx
try { (() => {
function Topbar({
  breadcrumb,
  dark = false,
  onToggleTheme,
  onBell,
  initials = "EM",
  userLabel = "Elena Marsh"
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "iams-topbar"
  }, breadcrumb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, breadcrumb), /*#__PURE__*/React.createElement("div", {
    className: "iams-search"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 14
  }), /*#__PURE__*/React.createElement("input", {
    type: "search",
    placeholder: "Search assets, people, orders",
    "aria-label": "Global search"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "icon",
    "aria-label": "Toggle theme",
    onClick: onToggleTheme
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: dark ? "sun" : "moon",
    size: 16
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "icon",
    "aria-label": "Notifications",
    onClick: onBell,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 7,
      top: 6,
      height: 7,
      width: 7,
      borderRadius: "50%",
      border: "1.5px solid var(--surface-card)",
      background: "var(--danger)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-label": userLabel,
    className: "iams-avatar"
  }, initials));
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/Topbar.jsx", error: String((e && e.message) || e) }); }

// components/ui/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `iams-card ${className}`
  }, props));
}
function CardTitle({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("h3", _extends({
    className: `iams-card-title ${className}`
  }, props));
}
Object.assign(__ds_scope, { Card, CardTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Card.jsx", error: String((e && e.message) || e) }); }

// components/app/LockPanel.jsx
try { (() => {
/** Placeholder for screens defined in the IA but outside Release R1 scope. */
function LockPanel({
  name
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      padding: 48,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      display: "inline-block",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 32
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: 14,
      fontWeight: 500
    }
  }, name, " is scoped for a later release"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12.5,
      color: "var(--text-secondary)"
    }
  }, "This screen is defined in the Information Architecture but out of Release R1 (MVP) scope."));
}
Object.assign(__ds_scope, { LockPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/LockPanel.jsx", error: String((e && e.message) || e) }); }

// components/app/MetricCard.jsx
try { (() => {
const deltaColor = {
  up: "var(--success)",
  warn: "var(--danger)",
  neutral: "var(--text-secondary)"
};
function MetricCard({
  label,
  value,
  delta,
  deltaTone = "neutral"
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: 12.5,
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: "var(--tracking-tight)"
    }
  }, value), delta && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: 11.5,
      color: deltaColor[deltaTone]
    }
  }, delta));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/ui/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: `iams-input ${className}`
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Input.jsx", error: String((e && e.message) || e) }); }

// components/ui/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Label({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    className: `iams-label ${className}`
  }, props));
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Label.jsx", error: String((e && e.message) || e) }); }

// components/ui/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: `iams-select ${className}`
  }, props));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Select.jsx", error: String((e && e.message) || e) }); }

// components/ui/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Table({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "iams-table-wrap"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: `iams-table ${className}`
  }, props), children));
}
function Th({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("th", _extends({
    className: className
  }, props));
}
function Td({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("td", _extends({
    className: className
  }, props));
}
function Tr({
  link,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("tr", _extends({
    className: `${link ? "iams-tr-link" : ""} ${className}`
  }, props));
}
Object.assign(__ds_scope, { Table, Th, Td, Tr });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Table.jsx", error: String((e && e.message) || e) }); }

// components/app/AssetTable.jsx
try { (() => {
/** Clickable asset table — rows navigate to the asset record. */
function AssetTable({
  rows = [],
  onOpen
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(__ds_scope.Th, null, "Asset"), /*#__PURE__*/React.createElement(__ds_scope.Th, null, "Category"), /*#__PURE__*/React.createElement(__ds_scope.Th, null, "Location"), /*#__PURE__*/React.createElement(__ds_scope.Th, null, "Assigned to"), /*#__PURE__*/React.createElement(__ds_scope.Th, null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(a => /*#__PURE__*/React.createElement(__ds_scope.Tr, {
    key: a.id,
    link: true,
    role: "link",
    tabIndex: 0,
    onClick: () => onOpen && onOpen(a),
    onKeyDown: e => e.key === "Enter" && onOpen && onOpen(a)
  }, /*#__PURE__*/React.createElement(__ds_scope.Td, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      color: "var(--success-deep)"
    }
  }, a.id), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, a.name)), /*#__PURE__*/React.createElement(__ds_scope.Td, null, a.category), /*#__PURE__*/React.createElement(__ds_scope.Td, null, a.location), /*#__PURE__*/React.createElement(__ds_scope.Td, null, a.assignee || "—"), /*#__PURE__*/React.createElement(__ds_scope.Td, null, /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    status: a.status
  }))))));
}
Object.assign(__ds_scope, { AssetTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/AssetTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/iams/app.jsx
try { (() => {
// IAMS app shell — sidebar + topbar + routed content, dark-mode toggle, fake auth.
const {
  Sidebar,
  Topbar
} = window.IAMSDesignSystem_1406c8;
const ROUTES = {
  "/dashboard": {
    breadcrumb: "Overview / Dashboard",
    render: () => /*#__PURE__*/React.createElement(DashboardScreen, null)
  },
  "/assets": {
    breadcrumb: "Assets / Asset list"
  },
  "/assets/new": {
    breadcrumb: "Assets / Register asset"
  },
  "/labels": {
    breadcrumb: "Assets / Label queue"
  },
  "/stock": {
    breadcrumb: "Inventory / Stock list",
    locked: "Stock list"
  },
  "/transfers": {
    breadcrumb: "Lifecycle / Transfers",
    locked: "Transfers"
  },
  "/audits": {
    breadcrumb: "Audits / Audit list",
    locked: "Audit list"
  },
  "/reports": {
    breadcrumb: "Reports / Report catalog",
    render: () => /*#__PURE__*/React.createElement(ReportsScreen, null)
  },
  "/hierarchy": {
    breadcrumb: "Organization / Hierarchy",
    render: () => /*#__PURE__*/React.createElement(HierarchyScreen, null)
  },
  "/users": {
    breadcrumb: "Users",
    render: () => /*#__PURE__*/React.createElement(UsersScreen, null)
  },
  "/activity": {
    breadcrumb: "Security / Activity log",
    render: () => /*#__PURE__*/React.createElement(ActivityLogScreen, null)
  },
  "/retention": {
    breadcrumb: "Security / Retention policy",
    render: () => /*#__PURE__*/React.createElement(RetentionScreen, null)
  },
  "/integrations": {
    breadcrumb: "Integrations",
    locked: "Integrations"
  },
  "/notifications": {
    breadcrumb: "Notifications",
    render: () => /*#__PURE__*/React.createElement(NotificationsScreen, null)
  }
};
function App() {
  const [signedIn, setSignedIn] = React.useState(() => localStorage.getItem("iams-kit-auth") === "1");
  const [route, setRoute] = React.useState(() => localStorage.getItem("iams-kit-route") || "/dashboard");
  const [asset, setAsset] = React.useState(null);
  const [dark, setDark] = React.useState(() => localStorage.getItem("iams-kit-dark") === "1");
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("iams-kit-dark", dark ? "1" : "0");
  }, [dark]);
  React.useEffect(() => {
    localStorage.setItem("iams-kit-route", route);
  }, [route]);
  React.useEffect(() => {
    localStorage.setItem("iams-kit-auth", signedIn ? "1" : "0");
  }, [signedIn]);
  if (!signedIn) return /*#__PURE__*/React.createElement(LoginScreen, {
    onSignIn: () => setSignedIn(true)
  });
  const navigate = href => {
    setAsset(null);
    setRoute(href);
  };
  const r = ROUTES[route] || ROUTES["/dashboard"];
  const activeHref = route === "/assets/new" ? "/assets" : route;
  let content;
  if (route === "/assets" && asset) {
    content = /*#__PURE__*/React.createElement(AssetDetailScreen, {
      asset: asset,
      onEdit: () => navigate("/assets/new")
    });
  } else if (route === "/assets") {
    content = /*#__PURE__*/React.createElement(AssetsScreen, {
      onOpen: setAsset,
      onRegister: () => navigate("/assets/new")
    });
  } else if (route === "/assets/new") {
    content = /*#__PURE__*/React.createElement(RegisterAssetScreen, {
      onSave: () => navigate("/assets")
    });
  } else if (route === "/labels") {
    content = /*#__PURE__*/React.createElement(LabelsScreen, {
      onOpen: a => {
        setRoute("/assets");
        setAsset(a);
      }
    });
  } else if (r.locked) {
    content = /*#__PURE__*/React.createElement(LockedScreen, {
      name: r.locked
    });
  } else {
    content = r.render();
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      height: "100vh",
      gridTemplateColumns: "232px 1fr"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    activeHref: activeHref,
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minWidth: 0,
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    breadcrumb: r.breadcrumb,
    dark: dark,
    onToggleTheme: () => setDark(!dark),
    onBell: () => navigate("/notifications")
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "28px 32px 64px",
      background: "var(--surface-app)"
    }
  }, content)));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/iams/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/iams/data.js
try { (() => {
// IAMS demo fixtures — copied from iams-next/lib/data.ts
window.IAMS_DATA = {
  assets: [{
    id: "AST-00482",
    name: "Dell Latitude 5440",
    category: "IT equipment",
    location: "Room 204",
    department: "IT Services",
    status: "In use",
    assignee: "Elena Marsh",
    cost: "1,180.00",
    vendor: "TechSupply Wholesale",
    purchased: "2025-11-02",
    warranty: "2028-11-02",
    fields: {
      "Serial number": "DL5440-8827",
      OS: "Windows 11",
      RAM: "16GB"
    }
  }, {
    id: "AST-00483",
    name: "Epson PowerLite Projector",
    category: "AV equipment",
    location: "Room 101",
    department: "Science",
    status: "In use",
    assignee: null,
    cost: "640.00",
    vendor: "ProAV Distributors",
    purchased: "2024-08-15",
    warranty: "2026-08-15",
    fields: {
      Lumens: "3600",
      Resolution: "1080p"
    }
  }, {
    id: "AST-00190",
    name: "Steel Folding Chairs (x40)",
    category: "Furniture",
    location: "Storage B",
    department: "Facilities",
    status: "In storage",
    assignee: null,
    cost: "1,200.00",
    vendor: "Campus Furnishings Co.",
    purchased: "2023-02-10",
    warranty: null,
    fields: {
      Material: "Steel",
      Color: "Black"
    }
  }, {
    id: "AST-00071",
    name: "Ford Transit Van",
    category: "Vehicle",
    location: "Motor Pool",
    department: "Facilities",
    status: "Under repair",
    assignee: null,
    cost: "38,500.00",
    vendor: "Fleet Motors Inc.",
    purchased: "2022-05-20",
    warranty: "2027-05-20",
    fields: {
      VIN: "1FTBW2CM5NKA12345",
      Registration: "STATE-8827JX",
      Mileage: "42,180"
    }
  }, {
    id: "AST-00512",
    name: "Thermo Fisher Centrifuge",
    category: "Lab equipment",
    location: "Chemistry Lab",
    department: "Science",
    status: "In use",
    assignee: "Dr. Adaeze Osei",
    cost: "4,200.00",
    vendor: "LabChem Supply",
    purchased: "2025-01-18",
    warranty: "2028-01-18",
    fields: {
      "Calibration due": "2026-09-01",
      "Hazard class": "None"
    }
  }, {
    id: "AST-00615",
    name: "Yamaha Upright Piano",
    category: "Musical instrument",
    location: "Boardroom",
    department: "Administration",
    status: "In use",
    assignee: null,
    cost: "5,600.00",
    vendor: "Harmony Music Supply",
    purchased: "2021-09-01",
    warranty: null,
    fields: {
      "Instrument type": "Upright piano",
      "Serial number": "YM-771234"
    }
  }, {
    id: "AST-00701",
    name: "HP LaserJet Printer",
    category: "IT equipment",
    location: "Office A10",
    department: "Administration",
    status: "Missing",
    assignee: "Marcus Webb",
    cost: "320.00",
    vendor: "TechSupply Wholesale",
    purchased: "2024-03-12",
    warranty: "2026-03-12",
    fields: {
      "Serial number": "HPLJ-99213"
    }
  }, {
    id: "AST-00722",
    name: "Bosch Cordless Drill Set",
    category: "Tools",
    location: "Storage A",
    department: "Facilities",
    status: "In storage",
    assignee: null,
    cost: "210.00",
    vendor: "Campus Furnishings Co.",
    purchased: "2025-06-01",
    warranty: "2027-06-01",
    fields: {
      "Power source": "Battery (18V)"
    }
  }],
  users: [{
    name: "Priya Nandakumar",
    email: "priya.n@example.org",
    role: "Super Administrator",
    department: "IT Services",
    status: "Active"
  }, {
    name: "Marcus Webb",
    email: "marcus.w@example.org",
    role: "Administrator",
    department: "Administration",
    status: "Active"
  }, {
    name: "Elena Marsh",
    email: "elena.m@example.org",
    role: "Inventory Manager",
    department: "Facilities",
    status: "Active"
  }, {
    name: "Devon Raike",
    email: "devon.r@example.org",
    role: "Auditor",
    department: "Finance & Accounting",
    status: "Active"
  }, {
    name: "Dr. Adaeze Osei",
    email: "a.osei@example.org",
    role: "Department Head",
    department: "Science",
    status: "Active"
  }, {
    name: "Sam Ortiz",
    email: "sam.ortiz@example.org",
    role: "Volunteer",
    department: "Volunteer Programs",
    status: "Active"
  }, {
    name: "J. Ferreira",
    email: "j.ferreira@example.org",
    role: "Volunteer",
    department: "Volunteer Programs",
    status: "Offboarding",
    pendingReturns: 1
  }],
  recentActivity: [{
    text: "AST-00482 assigned to Elena Marsh",
    time: "2 hours ago"
  }, {
    text: "Report exported: Asset register",
    time: "Yesterday"
  }, {
    text: "AST-00701 flagged Missing",
    time: "3 days ago",
    severity: "alert"
  }, {
    text: "J. Ferreira offboarding started",
    time: "4 days ago"
  }],
  reports: [{
    icon: "package",
    title: "Asset register",
    desc: "Full list, exportable to PDF/Excel/CSV"
  }, {
    icon: "clipboard-check",
    title: "Missing / damaged",
    desc: "Sourced from audit findings"
  }, {
    icon: "bell",
    title: "Warranty expiry",
    desc: "30 / 60 / 90 day lookahead"
  }, {
    icon: "arrow-left-right",
    title: "Asset movement",
    desc: "Location and assignment history"
  }, {
    icon: "users",
    title: "Employee asset list",
    desc: "Everything assigned to one person"
  }, {
    icon: "file-text",
    title: "Depreciation",
    desc: "GAAP/IFRS-aligned methods"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/iams/data.js", error: String((e && e.message) || e) }); }

// ui_kits/iams/screens.jsx
try { (() => {
// IAMS UI kit screens — recreations of SCR-GLB-01, SCR-DSH-01, SCR-AST-01/02, SCR-USR-01, SCR-RPT-01 + R2 locks.
const DS = window.IAMSDesignSystem_1406c8;
const {
  Seal,
  Icon,
  Button,
  Input,
  Select,
  Label,
  Card,
  CardTitle,
  Table,
  Th,
  Td,
  Tr,
  Badge,
  StatusPill,
  PageHeader,
  MetricCard,
  ActivityFeed,
  AssetTable,
  ReportTile,
  LockPanel
} = DS;
const {
  assets,
  users,
  recentActivity,
  reports
} = window.IAMS_DATA;

/* ── SCR-GLB-01 · Login ─────────────────────────────── */
function LoginScreen({
  onSignIn
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      minHeight: "100vh",
      gridTemplateColumns: "1fr 1fr"
    },
    "data-screen-label": "Login SCR-GLB-01"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      overflow: "hidden",
      background: "hsl(var(--ink))",
      padding: 80,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: -176,
      right: -176,
      height: 480,
      width: 480,
      borderRadius: "50%",
      border: "1px solid hsl(var(--ink-border))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: -80,
      right: -80,
      height: 300,
      width: 300,
      borderRadius: "50%",
      border: "1px solid hsl(var(--ink-border))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    size: 46
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 12px",
      fontSize: 30,
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "var(--tracking-tight)"
    }
  }, "Every asset accounted for.", /*#__PURE__*/React.createElement("br", null), "Every audit provable."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 40px",
      maxWidth: 360,
      fontSize: 15,
      lineHeight: 1.625,
      color: "hsl(var(--ink-text-dim))"
    }
  }, "IAMS is the on-premises system of record for physical assets and audits \u2014 built so nothing has to be taken on trust."), /*#__PURE__*/React.createElement("dl", {
    style: {
      display: "flex",
      gap: 40,
      margin: 0
    }
  }, [["41", "screens mapped"], ["16", "modules"], ["100%", "on-premises"]].map(([value, label]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      letterSpacing: "var(--tracking-tight)"
    }
  }, value), /*#__PURE__*/React.createElement("dt", {
    style: {
      marginTop: 2,
      fontSize: 12,
      color: "hsl(var(--ink-text-dim))"
    }
  }, label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("form", {
    style: {
      width: "100%",
      maxWidth: 340
    },
    onSubmit: e => {
      e.preventDefault();
      onSignIn();
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 6px",
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)"
    }
  }, "Sign in to IAMS"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "Main Campus deployment"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "email"
  }, "Email or username"), /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "text",
    defaultValue: "elena.m@example.org",
    autoComplete: "username"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement(Input, {
    id: "password",
    type: "password",
    defaultValue: "0000000000",
    autoComplete: "current-password"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    style: {
      width: "100%"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "18px 0",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 12,
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      background: "var(--border-hairline)"
    }
  }), "or", /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      background: "var(--border-hairline)"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "secondary",
    style: {
      width: "100%"
    }
  }, "Sign in with SSO"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      textAlign: "center",
      fontSize: 12,
      color: "var(--text-tertiary)"
    }
  }, "Screen SCR-GLB-01 \xB7 FR-SEC-01, FR-SEC-02"))));
}

/* ── SCR-DSH-01 · Dashboard ─────────────────────────── */
function DashboardScreen() {
  const count = s => assets.filter(a => a.status === s).length;
  const bars = [{
    label: "In use",
    value: count("In use"),
    bg: "var(--success)"
  }, {
    label: "Storage",
    value: count("In storage"),
    bg: "var(--success-soft)"
  }, {
    label: "Repair",
    value: count("Under repair"),
    bg: "var(--success-soft)"
  }, {
    label: "Missing",
    value: count("Missing"),
    bg: "var(--danger-soft)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Dashboard SCR-DSH-01"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Executive dashboard",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Screen ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "SCR-DSH-01"), " \xB7 demo dataset \xB7 ", assets.length, " assets")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Total assets",
    value: assets.length,
    delta: "Main Campus"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "In use",
    value: count("In use"),
    delta: "On track",
    deltaTone: "up"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Missing",
    value: count("Missing"),
    delta: "Needs review",
    deltaTone: "warn"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Warranty expiring (60d)",
    value: 1,
    delta: "Epson projector",
    deltaTone: "warn"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "Assets by status"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: 140,
      alignItems: "flex-end",
      gap: 14,
      paddingTop: 10
    },
    role: "img",
    "aria-label": "Bar chart of assets by status"
  }, bars.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.label,
    style: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 34,
      borderRadius: "4px 4px 0 0",
      background: b.bg,
      height: b.value * 28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-secondary)"
    }
  }, b.value), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "center",
      fontSize: 11,
      color: "var(--text-secondary)"
    }
  }, b.label))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "Recent activity"), /*#__PURE__*/React.createElement(ActivityFeed, {
    items: recentActivity
  }))));
}

/* ── SCR-AST-01 · Asset list ────────────────────────── */
function AssetsScreen({
  onOpen,
  onRegister
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Asset list SCR-AST-01"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Asset list",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Screen ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "SCR-AST-01"), " \xB7 click a row to open the record"),
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: onRegister
    }, "+ Register asset")
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(AssetTable, {
    rows: assets,
    onOpen: onOpen
  })));
}

/* ── SCR-AST-02 · Asset record ──────────────────────── */
function AssetDetailScreen({
  asset,
  onEdit
}) {
  if (!asset) return null;
  const rows = [["Category", asset.category], ["Location", asset.location], ["Department", asset.department], ["Assigned to", asset.assignee || "—"], ["Status", /*#__PURE__*/React.createElement(StatusPill, {
    key: "s",
    status: asset.status
  })], ["Vendor", asset.vendor], ["Purchase cost", "$" + asset.cost], ["Warranty expiry", asset.warranty || "—"], ...Object.entries(asset.fields)];
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Asset record SCR-AST-02"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: asset.name,
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, asset.id), " \xB7 Screen ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "SCR-AST-02")),
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onEdit
    }, "Edit")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "Details"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("tbody", null, rows.map(([k, v]) => /*#__PURE__*/React.createElement("tr", {
    key: k
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      borderBottom: "1px solid var(--border-hairline)",
      padding: 12,
      color: "var(--text-secondary)"
    }
  }, k), /*#__PURE__*/React.createElement("td", {
    style: {
      borderBottom: "1px solid var(--border-hairline)",
      padding: 12
    }
  }, v)))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "History"), /*#__PURE__*/React.createElement(ActivityFeed, {
    items: [{
      text: "Registered",
      time: asset.purchased
    }, {
      text: "Assigned to " + asset.department,
      time: asset.purchased
    }, {
      text: "Status set to " + asset.status,
      time: "Most recent"
    }]
  }))));
}

/* ── SCR-USR-01 · Users ─────────────────────────────── */
function UsersScreen() {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Users SCR-USR-01"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Users",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Screen ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "SCR-USR-01"), " \xB7 FR-USR-01 through FR-USR-05"),
    actions: /*#__PURE__*/React.createElement(Button, null, "+ Invite user")
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, null, "Name"), /*#__PURE__*/React.createElement(Th, null, "Role"), /*#__PURE__*/React.createElement(Th, null, "Department"), /*#__PURE__*/React.createElement(Th, null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, users.map(u => /*#__PURE__*/React.createElement(Tr, {
    key: u.email
  }, /*#__PURE__*/React.createElement(Td, null, u.name, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--text-tertiary)"
    }
  }, u.email)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: "var(--radius-full)",
      border: "1px solid var(--border-hairline)",
      background: "var(--surface-app)",
      padding: "2px 8px",
      fontSize: 11,
      color: "var(--text-secondary)"
    }
  }, u.role)), /*#__PURE__*/React.createElement(Td, null, u.department), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(StatusPill, {
    status: u.status
  }), u.pendingReturns ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      fontSize: 11,
      color: "var(--danger)"
    }
  }, u.pendingReturns, " asset pending return") : null)))))));
}

/* ── SCR-RPT-01 · Report catalog ────────────────────── */
function ReportsScreen() {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Report catalog SCR-RPT-01"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Report catalog",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Screen ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "SCR-RPT-01"), " \xB7 FR-RPT-01 through FR-RPT-10")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14
    }
  }, reports.map(r => /*#__PURE__*/React.createElement(ReportTile, {
    key: r.title,
    icon: r.icon,
    title: r.title,
    desc: r.desc
  }))));
}

/* ── SCR-AST-03 · Register asset ────────────────────── */
function RegisterAssetScreen({
  onSave
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Register asset SCR-AST-03"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Register asset",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Screen ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "SCR-AST-03"), " \xB7 FR-AST-01, 02, 05, 06")
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSave();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      maxWidth: 620,
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "ra-name"
  }, "Asset name"), /*#__PURE__*/React.createElement(Input, {
    id: "ra-name",
    placeholder: "e.g. Dell Latitude 5440",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "ra-category"
  }, "Category"), /*#__PURE__*/React.createElement(Select, {
    id: "ra-category"
  }, /*#__PURE__*/React.createElement("option", null, "IT equipment"), /*#__PURE__*/React.createElement("option", null, "Furniture"), /*#__PURE__*/React.createElement("option", null, "Vehicle"), /*#__PURE__*/React.createElement("option", null, "Lab equipment"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "ra-manufacturer"
  }, "Manufacturer"), /*#__PURE__*/React.createElement(Input, {
    id: "ra-manufacturer",
    placeholder: "e.g. Dell"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "ra-cost"
  }, "Purchase cost"), /*#__PURE__*/React.createElement(Input, {
    id: "ra-cost",
    inputMode: "decimal",
    placeholder: "0.00"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "ra-vendor"
  }, "Vendor"), /*#__PURE__*/React.createElement(Input, {
    id: "ra-vendor",
    placeholder: "e.g. TechSupply Wholesale"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "ra-location"
  }, "Location"), /*#__PURE__*/React.createElement(Select, {
    id: "ra-location"
  }, /*#__PURE__*/React.createElement("option", null, "Room 204"), /*#__PURE__*/React.createElement("option", null, "Room 101"), /*#__PURE__*/React.createElement("option", null, "Storage B")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Attachments")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      borderRadius: 10,
      border: "1.5px dashed var(--border-hairline)",
      padding: 24,
      textAlign: "center",
      fontSize: 13,
      color: "var(--text-tertiary)",
      boxSizing: "border-box"
    }
  }, "Drop a photo or invoice here, or click to browse"), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    style: {
      marginTop: 18
    }
  }, "Save and generate QR code"))));
}

/* ── SCR-AST-04 · Label print queue ─────────────────── */
function LabelsScreen({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Label print queue SCR-AST-04"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Label print queue",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Screen ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "SCR-AST-04"), " \xB7 FR-SCN-07 \xB7 Code128 / QR, 2\"\xD71\" label stock")
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(AssetTable, {
    rows: assets.slice(0, 3),
    onOpen: onOpen
  })), /*#__PURE__*/React.createElement(Button, {
    style: {
      marginTop: 16
    }
  }, "Print selected labels"));
}

/* ── SCR-ORG-01 · Hierarchy setup ───────────────────── */
function HierarchyNode({
  label,
  root
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      lineHeight: 2.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: root ? "network" : "door-open",
    size: 14
  })), root ? /*#__PURE__*/React.createElement("strong", null, label) : label);
}
function HierarchyChildren({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 26,
      borderLeft: "1px solid var(--border-hairline)",
      paddingLeft: 14
    }
  }, children);
}
function HierarchyScreen() {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Hierarchy setup SCR-ORG-01"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Hierarchy setup",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Screen ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "SCR-ORG-01"), " \xB7 FR-ORG-01, 02, 06")
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement(HierarchyNode, {
    label: "Main Campus",
    root: true
  }), /*#__PURE__*/React.createElement(HierarchyChildren, null, /*#__PURE__*/React.createElement(HierarchyNode, {
    label: "Science Building"
  }), /*#__PURE__*/React.createElement(HierarchyChildren, null, /*#__PURE__*/React.createElement(HierarchyNode, {
    label: "Room 101"
  }), /*#__PURE__*/React.createElement(HierarchyNode, {
    label: "Chemistry Lab"
  }), /*#__PURE__*/React.createElement(HierarchyNode, {
    label: "Room 204"
  })), /*#__PURE__*/React.createElement(HierarchyNode, {
    label: "Administration Building"
  }), /*#__PURE__*/React.createElement(HierarchyChildren, null, /*#__PURE__*/React.createElement(HierarchyNode, {
    label: "Office A10"
  }), /*#__PURE__*/React.createElement(HierarchyNode, {
    label: "Boardroom"
  })), /*#__PURE__*/React.createElement(HierarchyNode, {
    label: "Facilities & Storage"
  }), /*#__PURE__*/React.createElement(HierarchyChildren, null, /*#__PURE__*/React.createElement(HierarchyNode, {
    label: "Storage A"
  }), /*#__PURE__*/React.createElement(HierarchyNode, {
    label: "Motor Pool"
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      marginTop: 16
    }
  }, "+ Add node")));
}

/* ── SCR-SEC-01 · Activity log ──────────────────────── */
function ActivityLogScreen() {
  const events = [{
    time: "09:14",
    user: "m.reyes",
    event: "Login success",
    alert: false
  }, {
    time: "09:02",
    user: "unknown",
    event: "Login failed ×3",
    alert: true
  }, {
    time: "08:55",
    user: "p.chen",
    event: "Exported asset register",
    alert: false
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Activity log SCR-SEC-01"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Activity log",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Screen ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "SCR-SEC-01"), " \xB7 FR-SEC-04")
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, null, "Time"), /*#__PURE__*/React.createElement(Th, null, "User"), /*#__PURE__*/React.createElement(Th, null, "Event"))), /*#__PURE__*/React.createElement("tbody", null, events.map(e => /*#__PURE__*/React.createElement(Tr, {
    key: e.time
  }, /*#__PURE__*/React.createElement(Td, {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, e.time), /*#__PURE__*/React.createElement(Td, null, e.user), /*#__PURE__*/React.createElement(Td, null, e.alert && /*#__PURE__*/React.createElement(StatusPill, {
    status: "Missing"
  }), " ", e.event)))))));
}

/* ── SCR-CMP-01 · Retention policy ──────────────────── */
function RetentionScreen() {
  const policies = [{
    entity: "Login logs",
    period: "1 year",
    action: "Delete"
  }, {
    entity: "Former employee records",
    period: "2 years",
    action: "Anonymize"
  }, {
    entity: "Audit evidence",
    period: "Indefinite",
    action: "Legal hold eligible"
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Retention policy SCR-CMP-01"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Retention policy",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Screen ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "SCR-CMP-01"), " \xB7 FR-CMP-01")
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, null, "Entity type"), /*#__PURE__*/React.createElement(Th, null, "Retention period"), /*#__PURE__*/React.createElement(Th, null, "Action at expiry"))), /*#__PURE__*/React.createElement("tbody", null, policies.map(p => /*#__PURE__*/React.createElement(Tr, {
    key: p.entity
  }, /*#__PURE__*/React.createElement(Td, null, p.entity), /*#__PURE__*/React.createElement(Td, null, p.period), /*#__PURE__*/React.createElement(Td, null, p.action)))))));
}

/* ── SCR-GLB-03 · Notifications ─────────────────────── */
function NotificationsScreen() {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Notifications SCR-GLB-03"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Notifications",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Screen ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "SCR-GLB-03"), " \xB7 FR-NTF-03")
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(ActivityFeed, {
    items: [{
      text: "3 assets have warranty expiring within 30 days",
      time: "Today"
    }, {
      text: "AST-00701 marked Missing during last audit",
      time: "3 days ago",
      severity: "alert"
    }, {
      text: "J. Ferreira's record is eligible for anonymization review",
      time: "4 days ago"
    }]
  })));
}

/* ── R2 locked module ───────────────────────────────── */
function LockedScreen({
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": name + " (R2 locked)"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: name,
    sub: "Release R2 module"
  }), /*#__PURE__*/React.createElement(LockPanel, {
    name: name
  }));
}
Object.assign(window, {
  LoginScreen,
  DashboardScreen,
  AssetsScreen,
  AssetDetailScreen,
  RegisterAssetScreen,
  LabelsScreen,
  HierarchyScreen,
  ActivityLogScreen,
  RetentionScreen,
  NotificationsScreen,
  UsersScreen,
  ReportsScreen,
  LockedScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/iams/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ActivityFeed = __ds_scope.ActivityFeed;

__ds_ns.AssetTable = __ds_scope.AssetTable;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.LockPanel = __ds_scope.LockPanel;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.ReportTile = __ds_scope.ReportTile;

__ds_ns.Seal = __ds_scope.Seal;

__ds_ns.NAVIGATION = __ds_scope.NAVIGATION;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Topbar = __ds_scope.Topbar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Th = __ds_scope.Th;

__ds_ns.Td = __ds_scope.Td;

__ds_ns.Tr = __ds_scope.Tr;

})();
