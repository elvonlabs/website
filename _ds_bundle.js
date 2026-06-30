/* @ds-bundle: {"format":3,"namespace":"ElvonLabsDesignSystem_d7be89","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CheckboxCard","sourcePath":"components/forms/CheckboxCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/layout/NavBar.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"47a35b61b03a","components/core/Button.jsx":"112e25e25377","components/core/Card.jsx":"4229a9c2d87d","components/core/Icon.jsx":"8608de2b8406","components/core/Logo.jsx":"651078d6d093","components/core/StatCard.jsx":"a43bd4f43f2c","components/core/Tag.jsx":"bc846c9f07b6","components/forms/CheckboxCard.jsx":"585943f50130","components/forms/Input.jsx":"a78e382c8345","components/forms/Select.jsx":"5a4cb12a0478","components/forms/Textarea.jsx":"1e5b4d00a270","components/layout/NavBar.jsx":"9853e4f165e2","components/layout/SectionHeading.jsx":"ffccd4b2bf8c","ui_kits/website/App.jsx":"bf9c27f25d1e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElvonLabsDesignSystem_d7be89 = window.ElvonLabsDesignSystem_d7be89 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small label badge. A bold figure on a soft tinted chip — for citation
 * counts, "Most popular" flags, and inline metrics.
 */
function Badge({
  children,
  tone = 'indigo',
  style = {},
  ...rest
}) {
  const tones = {
    indigo: {
      color: 'var(--indigo-700)',
      background: 'var(--indigo-100)'
    },
    coral: {
      color: 'var(--coral-600)',
      background: 'var(--coral-100)'
    },
    sun: {
      color: '#9a6a12',
      background: 'var(--sun-100)'
    },
    solid: {
      color: 'var(--white)',
      background: 'var(--indigo-600)'
    },
    success: {
      color: '#1c7a60',
      background: 'var(--mint-100)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 700,
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill call-to-action button. Friendly and lifted: solid `primary`
 * indigo, warm `secondary` coral, low-key `soft` indigo tint, and an
 * outline `ghost`. Gentle bounce-lift on hover.
 */
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  type = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 18px',
      fontSize: '14px'
    },
    md: {
      padding: '13px 26px',
      fontSize: '16px'
    },
    lg: {
      padding: '16px 34px',
      fontSize: '18px'
    }
  };
  const base = {
    primary: {
      background: 'var(--indigo-600)',
      color: 'var(--white)',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--coral-500)',
      color: 'var(--white)',
      boxShadow: 'var(--shadow-sm)'
    },
    soft: {
      background: 'var(--indigo-100)',
      color: 'var(--indigo-700)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-900)',
      boxShadow: 'inset 0 0 0 1.5px var(--border-strong)'
    }
  };
  const hoverStyle = {
    primary: {
      background: 'var(--indigo-700)',
      boxShadow: 'var(--shadow-glow)'
    },
    secondary: {
      background: 'var(--coral-600)'
    },
    soft: {
      background: '#e1daf9'
    },
    ghost: {
      background: 'var(--cream-100)',
      boxShadow: 'inset 0 0 0 1.5px var(--ink-900)'
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      lineHeight: 1,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      width: full ? '100%' : 'auto',
      transition: 'background-color 220ms cubic-bezier(0.4,0,0.2,1), box-shadow 220ms ease, transform 240ms cubic-bezier(0.34,1.56,0.64,1)',
      transform: hover && !disabled ? 'translateY(-2px)' : 'none',
      ...sizes[size],
      ...base[variant],
      ...(hover && !disabled ? hoverStyle[variant] : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card surface. White, generously rounded, with a soft warm shadow that
 * deepens and lifts on hover. The workhorse container for program tiers,
 * research tracks, FAQs, and feature blocks.
 */
function Card({
  hover = true,
  padding = '28px',
  as = 'div',
  children,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => hover && setH(true),
    onMouseLeave: () => hover && setH(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-card)',
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow 240ms ease, transform 240ms cubic-bezier(0.34,1.56,0.64,1)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Elvon Labs outline icon set. Single-color, inherits `currentColor`,
 * 24x24 viewBox, rounded joins — matching the site's stroke icons.
 */
const PATHS = {
  ai: {
    sw: 2,
    d: ['M13 10V3L4 14h7v7l9-11h-7z', 'M12 4.5a7.5 7.5 0 11-7.5 7.5']
  },
  healthcare: {
    sw: 2,
    d: ['M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z']
  },
  quantum: {
    sw: 2,
    d: ['M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', 'M3.5 12h3m11 0h3M12 3.5v3m0 11v3']
  },
  telecom: {
    sw: 2,
    d: ['M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.393 9.393a15 15 0 0121.214 0']
  },
  cs: {
    sw: 2,
    d: ['M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4']
  },
  robotics: {
    sw: 2,
    d: ['M12 6V4m0 16v-2m8-8h2M4 12H2m16.938-6.938l1.414-1.414M4.646 19.354l1.414-1.414m13.292 0l-1.414-1.414M6.06 6.06l-1.414-1.414M12 18a6 6 0 100-12 6 6 0 000 12z']
  },
  book: {
    sw: 1.5,
    d: ['M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253']
  },
  check: {
    sw: 2,
    d: ['M5 13l4 4L19 7']
  },
  cube: {
    sw: 1.5,
    d: ['M12 2.5l-7 4v8l7 4 7-4v-8l-7-4z', 'M5 6.5l7 4 7-4', 'M12 21.5v-11', 'M12 2.5V1', 'M5 6.5L2 4.5', 'M19 6.5L22 4.5', 'M5 14.5L2 16.5', 'M19 14.5L22 16.5', 'M12 21.5V23']
  },
  arrow: {
    sw: 2,
    d: ['M13 7l5 5m0 0l-5 5m5-5H6']
  }
};
function Icon({
  name = 'cube',
  size = 24,
  strokeWidth,
  className = '',
  style = {},
  ...rest
}) {
  const def = PATHS[name] || PATHS.cube;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    width: size,
    height: size,
    className: className,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true"
  }, rest), def.d.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    stroke: "currentColor",
    strokeWidth: strokeWidth || def.sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Elvon Labs lockup — the circuit-cube mark plus the ELVON LABS
 * wordmark. The mark is always indigo; the wordmark inherits `color`
 * (ink on light surfaces). Use `markOnly` for favicon-style use.
 */
function Logo({
  size = 24,
  markOnly = false,
  color = 'var(--ink-900)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cube",
    size: size * 1.05,
    style: {
      color: 'var(--indigo-600)'
    }
  }), !markOnly && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      fontSize: `${size}px`,
      color,
      whiteSpace: 'nowrap'
    }
  }, "Elvon Labs"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat panel — a big display figure over a muted label, on a soft
 * tinted tile. Used for citations / outcomes / "weeks" style metrics.
 */
function StatCard({
  value,
  label,
  tone = 'lavender',
  style = {},
  ...rest
}) {
  const tones = {
    lavender: {
      background: 'var(--band-lavender)',
      fig: 'var(--indigo-700)'
    },
    peach: {
      background: 'var(--band-peach)',
      fig: 'var(--coral-600)'
    },
    butter: {
      background: 'var(--band-butter)',
      fig: '#9a6a12'
    },
    mint: {
      background: 'var(--band-mint)',
      fig: '#1c7a60'
    },
    plain: {
      background: 'var(--surface-card)',
      fig: 'var(--indigo-700)'
    }
  };
  const t = tones[tone] || tones.lavender;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t.background,
      borderRadius: 'var(--radius-md)',
      padding: '20px 24px',
      textAlign: 'center',
      minWidth: '150px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '36px',
      fontWeight: 700,
      color: t.fig,
      lineHeight: 1.05,
      letterSpacing: '-0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--text-muted)',
      marginTop: '6px'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill tag for research domains and topic labels. Soft, rounded, warm.
 * Color families: `indigo` (default), `coral`, `sun`, `mint`, `neutral`.
 */
function Tag({
  variant = 'indigo',
  children,
  style = {},
  ...rest
}) {
  const variants = {
    indigo: {
      color: 'var(--indigo-700)',
      background: 'var(--indigo-100)'
    },
    coral: {
      color: 'var(--coral-600)',
      background: 'var(--coral-100)'
    },
    sun: {
      color: '#9a6a12',
      background: 'var(--sun-100)'
    },
    mint: {
      color: '#1c7a60',
      background: 'var(--mint-100)'
    },
    neutral: {
      color: 'var(--ink-700)',
      background: 'var(--cream-100)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      padding: '5px 13px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/CheckboxCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selectable option card — a checkbox in a rounded tile that lights up
 * indigo when checked. For multi-select grids like "Areas of interest".
 */
function CheckboxCard({
  label,
  checked = false,
  onChange,
  name,
  value,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid',
      borderColor: checked ? 'var(--indigo-500)' : 'var(--border-strong)',
      background: checked ? 'var(--indigo-100)' : 'var(--white)',
      transition: 'border-color 200ms ease, background-color 200ms ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    style: {
      accentColor: 'var(--indigo-600)',
      width: '17px',
      height: '17px',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 500,
      color: checked ? 'var(--indigo-700)' : 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { CheckboxCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CheckboxCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input. White field, soft warm border, rounded, with an indigo
 * focus ring. Optional stacked `label`.
 */
function Input({
  label,
  id,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--text-body)',
      marginBottom: '8px'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--ink-900)',
      background: 'var(--white)',
      border: '1px solid',
      borderColor: focus ? 'var(--indigo-500)' : 'var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      outline: 'none',
      boxShadow: focus ? 'var(--ring-accent)' : 'none',
      transition: 'box-shadow 140ms ease, border-color 140ms ease',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dropdown select, matching the Input field. `options` is a string array. */
function Select({
  label,
  id,
  options = [],
  placeholder,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--text-body)',
      marginBottom: '8px'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--ink-900)',
      background: 'var(--white)',
      border: '1px solid',
      borderColor: focus ? 'var(--indigo-500)' : 'var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      outline: 'none',
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23726c84\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M6 9l6 6 6-6\'/></svg>")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 14px center',
      backgroundSize: '16px',
      paddingRight: '40px',
      boxShadow: focus ? 'var(--ring-accent)' : 'none',
      transition: 'box-shadow 140ms ease, border-color 140ms ease',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text field, matching the Input style. */
function Textarea({
  label,
  id,
  rows = 3,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--text-body)',
      marginBottom: '8px'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--ink-900)',
      background: 'var(--white)',
      border: '1px solid',
      borderColor: focus ? 'var(--indigo-500)' : 'var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? 'var(--ring-accent)' : 'none',
      transition: 'box-shadow 140ms ease, border-color 140ms ease',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Top navigation bar: a clean cream/white bar with the logo lockup,
 * nav links, and an optional CTA. Sticky, with a hairline bottom border.
 */
function NavBar({
  items = ['Programs', 'Method', 'Founder', 'FAQ'],
  active,
  onNavigate,
  cta,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(252,249,244,0.85)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1152px',
      margin: '0 auto',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('home');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 21
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '28px'
    }
  }, items.map(item => {
    const id = item.toLowerCase();
    const isActive = active === id;
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: `#${id}`,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(id);
      },
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '15px',
        fontWeight: 500,
        textDecoration: 'none',
        color: isActive ? 'var(--indigo-600)' : 'var(--text-body)',
        transition: 'color 200ms ease'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = 'var(--indigo-600)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = isActive ? 'var(--indigo-600)' : 'var(--text-body)';
      }
    }, item);
  }), cta)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Centered section heading block: optional eyebrow, bold display title,
 * muted lead paragraph constrained to a readable measure.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  style = {},
  ...rest
}) {
  const isCenter = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      maxWidth: isCenter ? '720px' : 'none',
      marginLeft: isCenter ? 'auto' : 0,
      marginRight: isCenter ? 'auto' : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--coral-600)',
      marginBottom: '14px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      fontWeight: 700,
      color: 'var(--text-strong)',
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      marginTop: '16px',
      marginBottom: 0
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Elvon Labs — website UI kit (warm mentorship landing page).
   A friendly, student-facing recreation built from the launch-kit copy
   and composed from the design-system primitives.
   Registers window.ElvonSite and mounts into #root. */

const DS = window.ElvonLabsDesignSystem_d7be89;
const {
  NavBar,
  SectionHeading,
  Card,
  Tag,
  Button,
  Badge,
  StatCard,
  Logo,
  Icon,
  Input,
  Textarea,
  Select,
  CheckboxCard
} = DS;
const SANS = "var(--font-sans)";
const DISP = "var(--font-display)";
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 72,
    behavior: 'smooth'
  });
}
const Section = ({
  id,
  bg,
  children,
  style
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  style: {
    background: bg || 'transparent',
    padding: '88px 24px',
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1120,
    margin: '0 auto'
  }
}, children));

/* ---------------- Hero ---------------- */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-canvas)',
      padding: '96px 24px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 360,
      height: 360,
      borderRadius: 9999,
      background: 'var(--glow-indigo)',
      filter: 'blur(60px)',
      top: -120,
      left: '6%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 320,
      height: 320,
      borderRadius: 9999,
      background: 'var(--glow-coral)',
      filter: 'blur(60px)',
      top: -80,
      right: '8%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 300,
      height: 300,
      borderRadius: 9999,
      background: 'var(--glow-sun)',
      filter: 'blur(60px)',
      bottom: -140,
      left: '40%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 860,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--white)',
      border: '1px solid var(--border-default)',
      borderRadius: 9999,
      padding: '6px 14px 6px 8px',
      boxShadow: 'var(--shadow-sm)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "New"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: SANS,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Now enrolling students & professionals")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: DISP,
      fontSize: 'clamp(40px, 6vw, 68px)',
      fontWeight: 700,
      lineHeight: 1.06,
      letterSpacing: '-0.025em',
      color: 'var(--ink-900)',
      margin: '0 0 22px'
    }
  }, "Learn to do real research \u2014 with a researcher who actually publishes."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: SANS,
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: 670,
      margin: '0 auto 32px'
    }
  }, "Elvon Labs mentors students ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--text-body)',
      fontWeight: 600
    }
  }, "and working professionals"), " one-on-one through a genuine AI or healthcare project \u2014 teaching a research method you'll use for the rest of your career. No formal research background required."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => scrollToId('apply')
  }, "Apply now"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => scrollToId('programs')
  }, "Start with a Foundations Pod")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "634",
    label: "Citations",
    tone: "lavender"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "10",
    label: "h-index",
    tone: "peach"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "1:1",
    label: "With a published PhD",
    tone: "mint"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "14 wks",
    label: "To a finished paper",
    tone: "butter"
  }))));
}

/* ---------------- Who it's for (dual audience) ---------------- */
const AUDIENCES = [{
  tone: 'indigo',
  icon: 'book',
  kicker: 'Students',
  title: 'High-schoolers & undergrads',
  body: "Start early and stand out. Learn how research actually works and finish with a paper you authored, understand, and can defend — plus a letter from a published researcher.",
  points: ['No experience needed — we start from how to read a paper', 'A portfolio-ready paper in your own name', 'Foundations Pod on-ramp from $499'],
  foot: 'Most younger students begin with a Foundations Pod.'
}, {
  tone: 'coral',
  icon: 'ai',
  kicker: 'Industry professionals',
  title: 'Pros with real-world expertise',
  body: "No formal research background required. Your day-to-day work is often the fastest bridge to a research question worth pursuing — and we've mentored professionals to co-author real, peer-reviewed papers.",
  points: ['Turn hard-won domain expertise into a research question', 'Publish alongside your job — async feedback between sessions', 'Genuine co-authorship where your contribution merits it'],
  foot: 'Bring the domain; we bring the method.'
}];
function AudienceCard({
  a
}) {
  const fill = TONE_FILL[a.tone],
    ink = TONE_INK[a.tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '32px 30px',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 18,
      background: fill,
      color: ink,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 28
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SANS,
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      color: ink
    }
  }, a.kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: DISP,
      fontSize: 24,
      fontWeight: 700,
      color: 'var(--ink-900)',
      margin: '2px 0 0',
      lineHeight: 1.15,
      letterSpacing: '-0.01em'
    }
  }, a.title))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: SANS,
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, a.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '2px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, a.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ink,
      flexShrink: 0,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: SANS,
      fontSize: 14.5,
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: SANS,
      fontSize: 13.5,
      fontWeight: 500,
      color: ink
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: ink,
      display: 'inline-block'
    }
  }), a.foot));
}
function Audience() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "who it's for",
    bg: "var(--band-mint)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who it's for",
    title: "No research background required",
    lead: "Two kinds of people thrive at Elvon \u2014 students starting early, and professionals turning real-world expertise into research. The method is the same; your starting point is what changes."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 24,
      marginTop: 56
    }
  }, AUDIENCES.map(a => /*#__PURE__*/React.createElement(AudienceCard, {
    key: a.kicker,
    a: a
  }))));
}

/* ---------------- Differentiators ---------------- */
const DIFFS = [{
  icon: 'ai',
  tone: 'indigo',
  title: 'A real researcher, not a matchmaker',
  body: 'You work directly with a published PhD in AI and healthcare — not a randomly assigned mentor from a directory of thousands.'
}, {
  icon: 'cs',
  tone: 'coral',
  title: 'Method over merit-badges',
  body: 'We teach a repeatable research process — frame, design, build, evaluate, conclude — that transfers to any field. The paper is the by-product; the thinking is the point.'
}, {
  icon: 'check',
  tone: 'mint',
  title: 'Honest about outcomes',
  body: 'We help students produce work worth publishing and support submission to legitimate venues. We never sell a guaranteed publication — and real researchers can tell the difference.'
}, {
  icon: 'healthcare',
  tone: 'sun',
  title: 'Specialists in AI & health',
  body: 'Depth in one domain beats a generalist at the same price. Our work lives where AI meets healthcare.'
}];
const TONE_FILL = {
  indigo: 'var(--indigo-100)',
  coral: 'var(--coral-100)',
  mint: 'var(--mint-100)',
  sun: 'var(--sun-100)'
};
const TONE_INK = {
  indigo: 'var(--indigo-600)',
  coral: 'var(--coral-600)',
  mint: '#1c7a60',
  sun: '#9a6a12'
};
function Differentiators() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "why",
    bg: "var(--surface-canvas)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What makes Elvon different",
    title: "Built for the thinking, not the trophy",
    lead: "A boutique program with a real publication record behind it \u2014 and a refusal to over-promise."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 22,
      marginTop: 56
    }
  }, DIFFS.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.title,
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 16,
      background: TONE_FILL[d.tone],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18,
      color: TONE_INK[d.tone]
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: DISP,
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--ink-900)',
      margin: '0 0 8px',
      lineHeight: 1.25
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: SANS,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, d.body)))));
}

/* ---------------- Programs ---------------- */
const TIERS = [{
  name: 'Research Foundations Pod',
  price: '$499',
  cadence: '6 weeks · small group',
  tone: 'sun',
  blurb: 'Learn how research actually works and leave with a real proposal. The best first step if you\'re exploring.',
  points: ['Live cohort of 4–6 students', 'One 90-min session/week + async', 'Literature review + research proposal', 'Readiness assessment for Core'],
  cta: 'Join a pod',
  featured: false
}, {
  name: 'Core Research Mentorship',
  price: '$3,500',
  cadence: '14 weeks · 1:1',
  tone: 'indigo',
  blurb: 'Your own project, start to finish, with weekly mentorship and a paper you can defend.',
  points: ['Weekly 1:1 with a published researcher', 'The full 5-stage Elvon method', 'A portfolio-ready research paper', 'A specific letter of recommendation'],
  cta: 'Apply now',
  featured: true
}, {
  name: 'Advanced / Undergrad Track',
  price: 'from $4,500',
  cadence: '16–20 weeks · 1:1',
  tone: 'coral',
  blurb: 'Ambitious AI/health work aimed at a workshop or near-publishable standard.',
  points: ['A more ambitious AI/health project', 'Targeted at peer-reviewed workshops', 'Genuine co-authorship where merited', 'Premium showcasing & submission support'],
  cta: 'Talk to us',
  featured: false
}];
function ProgramCard({
  t
}) {
  const accent = TONE_INK[t.tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: t.featured ? 'var(--surface-ink)' : 'var(--white)',
      border: t.featured ? 'none' : '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '30px 28px',
      boxShadow: t.featured ? 'var(--shadow-lg)' : 'var(--shadow-card)',
      transform: t.featured ? 'translateY(-8px)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, t.featured && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      right: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "coral"
  }, "Most popular")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    variant: t.tone === 'sun' ? 'sun' : t.tone === 'coral' ? 'coral' : 'indigo'
  }, t.cadence)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: DISP,
      fontSize: 23,
      fontWeight: 700,
      lineHeight: 1.2,
      margin: 0,
      color: t.featured ? 'var(--white)' : 'var(--ink-900)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DISP,
      fontSize: 38,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: t.featured ? 'var(--indigo-300)' : accent
    }
  }, t.price)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: SANS,
      fontSize: 14.5,
      lineHeight: 1.6,
      margin: 0,
      color: t.featured ? 'var(--text-on-ink)' : 'var(--text-muted)'
    }
  }, t.blurb), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '4px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, t.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.featured ? 'var(--indigo-300)' : accent,
      flexShrink: 0,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: SANS,
      fontSize: 14,
      lineHeight: 1.5,
      color: t.featured ? '#d9d2ea' : 'var(--text-body)'
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: t.featured ? 'primary' : t.tone === 'coral' ? 'secondary' : 'soft',
    full: true,
    onClick: () => scrollToId('apply')
  }, t.cta)));
}
function Programs() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "programs",
    bg: "var(--band-lavender)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Programs",
    title: "Three ways in",
    lead: "A low-risk pod that feeds the flagship 1:1 program, plus a deeper track for advanced students. Need-based partial scholarships available each cohort."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 22,
      marginTop: 60,
      alignItems: 'start'
    }
  }, TIERS.map(t => /*#__PURE__*/React.createElement(ProgramCard, {
    key: t.name,
    t: t
  }))));
}

/* ---------------- Method ---------------- */
const PHASES = [{
  n: '01',
  title: 'Background & framing',
  wk: 'Weeks 1–3',
  body: 'Read the literature, find the gap, and turn it into a sharp, answerable research question.'
}, {
  n: '02',
  title: 'Approach & design',
  wk: 'Weeks 4–6',
  body: 'Choose valid, testable methods; handle data responsibly; lock a concrete, scoped plan.'
}, {
  n: '03',
  title: 'Build / systems',
  wk: 'Weeks 7–9',
  body: 'Implement the model, system, or analysis with reproducibility and good practice.'
}, {
  n: '04',
  title: 'Evaluation',
  wk: 'Weeks 10–11',
  body: 'Design fair evaluations, run them, and interpret results honestly — limitations included.'
}, {
  n: '05',
  title: 'Conclusions & comms',
  wk: 'Weeks 12–14',
  body: 'Write the full paper, revise, defend it, and plan submission to legitimate venues.'
}];
function Method() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "method",
    bg: "var(--surface-canvas)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The Elvon method",
    title: "A method you'll use for life",
    lead: "Each phase maps to a part of a real paper \u2014 so by the end you have both the skill and the artifact."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 18,
      marginTop: 56
    }
  }, PHASES.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '22px 20px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DISP,
      fontSize: 30,
      fontWeight: 700,
      color: ['var(--indigo-500)', 'var(--coral-500)', 'var(--sun-400)', 'var(--mint-500)', 'var(--indigo-500)'][i],
      letterSpacing: '-0.02em',
      marginBottom: 6
    }
  }, p.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SANS,
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-faint)',
      marginBottom: 10
    }
  }, p.wk), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: DISP,
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--ink-900)',
      margin: '0 0 8px',
      lineHeight: 1.25
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: SANS,
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, p.body)))));
}

/* ---------------- Founder ---------------- */
function Founder() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "founder",
    bg: "var(--band-peach)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.4fr)',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'linear-gradient(150deg, var(--indigo-500), var(--coral-500))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DISP,
      fontSize: 64,
      fontWeight: 700,
      color: 'var(--white)'
    }
  }, "VW")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "634",
    label: "Citations",
    tone: "plain",
    style: {
      minWidth: 110,
      boxShadow: 'var(--shadow-card)'
    }
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "10",
    label: "h-index",
    tone: "plain",
    style: {
      minWidth: 110,
      boxShadow: 'var(--shadow-card)'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SANS,
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--coral-600)',
      marginBottom: 14
    }
  }, "Your mentor"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: DISP,
      fontSize: 38,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      margin: '0 0 18px',
      lineHeight: 1.12
    }
  }, "Vijay Walunj, PhD"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: SANS,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 16px'
    }
  }, "Researcher in AI, software engineering, and healthcare; published author and engineering leader. Vijay has mentored industry professionals to co-author real, peer-reviewed papers \u2014 and Elvon Labs brings that same standard to students."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "indigo"
  }, "Senior IEEE member"), /*#__PURE__*/React.createElement(Tag, {
    variant: "mint"
  }, "Deep learning"), /*#__PURE__*/React.createElement(Tag, {
    variant: "sun"
  }, "Beyond 5G"), /*#__PURE__*/React.createElement(Tag, {
    variant: "coral"
  }, "Healthcare")))));
}

/* ---------------- FAQ ---------------- */
const FAQS = [{
  q: 'Do you guarantee publication?',
  a: 'No. We help students produce strong work and support submission to legitimate venues, but no honest program can guarantee peer-reviewed publication — and guarantees are a red flag.'
}, {
  q: 'Who does the mentoring?',
  a: 'A published researcher in AI / healthcare — currently the founder, and vetted expert mentors as we grow.'
}, {
  q: 'How long and how much time?',
  a: '14 weeks for Core, about 5 hours a week including your independent work between weekly sessions.'
}, {
  q: 'What ages is this for?',
  a: "High-schoolers, undergraduates, and working professionals — there's no upper age limit, and no research background required. Younger students usually start with a Foundations Pod; for minors, the agreement and payment are with a parent or guardian."
}, {
  q: 'Is financial aid available?',
  a: 'Yes — a limited number of need-based partial scholarships each cohort.'
}];
function FaqItem({
  q,
  a,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '22px 4px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DISP,
      fontSize: 19,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      color: 'var(--indigo-600)',
      transform: open ? 'rotate(45deg)' : 'none',
      transition: 'transform 200ms ease',
      fontFamily: SANS,
      fontSize: 28,
      fontWeight: 300,
      lineHeight: 1
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? 200 : 0,
      overflow: 'hidden',
      transition: 'max-height 260ms ease'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: SANS,
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '0 4px 22px'
    }
  }, a)));
}
function Faq() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement(Section, {
    id: "faq",
    bg: "var(--surface-canvas)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "FAQ",
    title: "Honest answers"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, FAQS.map((f, i) => /*#__PURE__*/React.createElement(FaqItem, _extends({
    key: f.q
  }, f, {
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  }))))));
}

/* ---------------- Apply / CTA ---------------- */
const INTERESTS = ['Artificial Intelligence', 'Healthcare', 'Foundational Computer Science', 'Telecommunications', 'Quantum Computing', 'Robotics', 'Other'];
function Apply() {
  const [areas, setAreas] = React.useState([]);
  const [sent, setSent] = React.useState(false);
  const toggle = a => setAreas(p => p.includes(a) ? p.filter(x => x !== a) : [...p, a]);
  return /*#__PURE__*/React.createElement(Section, {
    id: "apply",
    bg: "var(--surface-ink)",
    style: {
      paddingTop: 80,
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SANS,
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--coral-300)',
      marginBottom: 16
    }
  }, "Apply"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: DISP,
      fontSize: 44,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--white)',
      margin: '0 0 18px',
      lineHeight: 1.1
    }
  }, "Start your research journey"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: SANS,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-on-ink)',
      margin: '0 0 24px'
    }
  }, "Tell us a little about you and what you'd like to work on. We'll follow up to find the right starting point \u2014 a Foundations Pod or a full Core project."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, ['A paper you authored and understand', 'A letter from a published researcher', 'A research method you can reuse'].map(o => /*#__PURE__*/React.createElement("li", {
    key: o,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontFamily: SANS,
      fontSize: 15,
      color: '#d9d2ea'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--indigo-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), o)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      padding: 30,
      boxShadow: 'var(--shadow-lg)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '30px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--mint-100)',
      color: '#1c7a60',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 28
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: DISP,
      fontSize: 24,
      fontWeight: 700,
      color: 'var(--ink-900)',
      margin: '0 0 8px'
    }
  }, "Thanks \u2014 you're on the list."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: SANS,
      color: 'var(--text-muted)',
      margin: '0 0 18px'
    }
  }, "We'll be in touch soon to find your starting point."), /*#__PURE__*/React.createElement(Button, {
    variant: "soft",
    onClick: () => setSent(false)
  }, "Submit another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    required: true,
    placeholder: "Vihaa W."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    required: true,
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "I'm a\u2026",
    placeholder: "Select one",
    options: ['High school student', 'Undergraduate', 'Industry professional / engineer', 'Parent / guardian', 'Other']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SANS,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-body)',
      marginBottom: 10
    }
  }, "What interests you?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, INTERESTS.map(a => /*#__PURE__*/React.createElement(CheckboxCard, {
    key: a,
    label: a,
    checked: areas.includes(a),
    onChange: () => toggle(a)
  })))), /*#__PURE__*/React.createElement(Textarea, {
    label: "Anything else? (optional)",
    rows: 3,
    placeholder: "Background, papers, projects, what you'd want to work on..."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    full: true
  }, "Submit application"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: SANS,
      fontSize: 12.5,
      color: 'var(--text-faint)',
      textAlign: 'center',
      margin: 0
    }
  }, "Under 18? We'll loop in a parent or guardian for enrollment.")))));
}

/* ---------------- Footer ---------------- */
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    id: "contact",
    style: {
      background: 'var(--surface-ink)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '40px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 22,
    color: "var(--white)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: SANS,
      color: '#9a93a8',
      fontSize: 13,
      margin: 0
    }
  }, "\xA9 ", new Date().getFullYear(), " Elvon Labs \xB7 Every student is the true author of their own work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, ['Standards', 'Scholar', 'Contact'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: SANS,
      color: '#c9c2d6',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, l)))));
}

/* ---------------- App ---------------- */
function App() {
  const nav = ["Who it's for", 'Programs', 'Method', 'Founder', 'FAQ'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: nav,
    onNavigate: scrollToId,
    cta: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => scrollToId('apply')
    }, "Apply")
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Audience, null), /*#__PURE__*/React.createElement(Differentiators, null), /*#__PURE__*/React.createElement(Programs, null), /*#__PURE__*/React.createElement(Method, null), /*#__PURE__*/React.createElement(Founder, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Apply, null)), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.ElvonSite = {
  App
};
const _root = document.getElementById('root');
if (_root) ReactDOM.createRoot(_root).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CheckboxCard = __ds_scope.CheckboxCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
