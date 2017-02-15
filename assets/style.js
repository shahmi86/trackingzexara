import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container": {
        "maxWidth": 800,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "overflow": "auto"
    },
    "h3": {
        "paddingTop": 18,
        "fontFamily": "Source Sans Pro, Arial, sans-serif"
    },
    "h1": {
        "fontSize": 36,
        "fontFamily": "Source Sans Pro, Arial, sans-serif"
    },
    "table": {
        "borderSpacing": 0
    },
    "tbody tr:nth-child(odd)": {
        "backgroundColor": "#f3f3f3"
    },
    "thead": {
        "textAlign": "left",
        "fontFamily": "Source Sans Pro, Arial, sans-serif"
    },
    "td": {
        "minWidth": 120,
        "verticalAlign": "top",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "td a": {
        "lineHeight": 24
    },
    "tr": {
        "height": 50
    },
    "ul": {
        "textIndent": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingLeft": 20
    },
    "ol": {
        "textIndent": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingLeft": 20,
        "lineHeight": 1.4
    },
    "ul li": {
        "paddingBottom": 6,
        "lineHeight": 22
    },
    "footer": {
        "paddingTop": 20,
        "marginTop": 60,
        "borderTop": "4px solid #CCF4FF",
        "WebkitColumnCount": 6,
        "columnCount": 6,
        "WebkitColumnGap": 20,
        "columnGap": 20,
        "MozColumnCount": 6,
        "MozColumnGap": 20,
        "height": 125
    },
    "footer ul": {
        "listStyle": "none",
        "paddingLeft": 0,
        "fontFamily": "Source Sans Pro, Baskerville, Georgia, serif"
    },
    "footer li": {
        "lineHeight": "inherit",
        "fontSize": 12
    },
    "footer h4": {
        "fontSize": 14,
        "WebkitColumnBreakBefore": "always",
        "breakBefore": "always",
        "MozColumnBreakBefore": "always",
        "marginTop": 0
    },
    "footer a": {
        "border": "none"
    },
    "half": {
        "maxWidth": "50%",
        "display": "inline-block",
        "verticalAlign": "top"
    },
    "half:nth-child(odd)": {
        "paddingLeft": 20
    },
    "body": {
        "fontFamily": "'Source Sans Pro'",
        "fontSize": 18,
        "background": "#fff",
        "color": "#535353",
        "border": "10px #47CCFC solid",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 100,
        "paddingLeft": 20,
        "overflow": "auto"
    },
    "h2": {
        "fontFamily": "Source Sans Pro, Arial, sans-serif",
        "marginTop": 40
    },
    "h4": {
        "fontFamily": "Source Sans Pro, Arial, sans-serif"
    },
    "h5": {
        "fontFamily": "Source Sans Pro, Arial, sans-serif"
    },
    "h6": {
        "fontFamily": "Source Sans Pro, Arial, sans-serif"
    },
    "img": {
        "width": "100%"
    },
    "hr": {
        "border": "2px solid #CCF4FF"
    },
    "p a": {
        "color": "#535353",
        "textDecoration": "none",
        "paddingBottom": 0,
        "borderBottom": "2px #CCF4FF solid"
    },
    "a": {
        "color": "#535353",
        "textDecoration": "none",
        "paddingBottom": 0,
        "borderBottom": "2px #CCF4FF solid"
    },
    "a:hover": {
        "color": "#47CCFC"
    },
    "a:active": {
        "color": "#47CCFC"
    },
    "small": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "p": {
        "lineHeight": 1.4
    },
    "text": {
        "fontSize": 12
    },
    "bodyindex p:nth-of-type(2)": {
        "fontSize": 30
    },
    "bodyindex table": {
        "border": "4px solid #CCF4FF",
        "paddingTop": 18,
        "paddingRight": 18,
        "paddingBottom": 18,
        "paddingLeft": 18
    },
    "home-link": {
        "color": "#47CCFC"
    },
    "pre": {
        "wordWrap": "break-word",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "background": "#F8F8F8"
    },
    "pre code": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "code": {
        "fontFamily": "\"Source Code Pro\", monospace",
        "fontSize": 14,
        "lineHeight": 1,
        "background": "#F8F8F8",
        "color": "#636363",
        "fontWeight": "400",
        "paddingTop": 2,
        "paddingRight": 6,
        "paddingBottom": 2,
        "paddingLeft": 6,
        "borderRadius": 2
    },
    "hljs": {
        "background": "#F8F8F8",
        "color": "#494949",
        "lineHeight": 1.4
    },
    "::selection": {
        "background": "#44FFB4"
    },
    "::-moz-selection": {
        "background": "#44FFB4"
    },
    "ssExample table": {
        "minWidth": 600
    },
    "tHeader::after": {
        "content": " \\2193 \\2191 ",
        "fontSize": 10,
        "paddingLeft": 3,
        "cursor": "pointer"
    },
    "leaflet-popup-content h2": {
        "marginBottom": 4,
        "marginTop": "auto"
    }
});