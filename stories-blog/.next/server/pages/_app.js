(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2810:
/***/ ((module) => {

// Exports
module.exports = {
	"main__footer__container": "Footer_main__footer__container__zwgXa",
	"footer__icon": "Footer_footer__icon__5le_c"
};


/***/ }),

/***/ 9801:
/***/ ((module) => {

// Exports
module.exports = {
	"appBar": "NavBar_appBar__nrcgx",
	"navBarText": "NavBar_navBarText__7xuUb",
	"logo__image": "NavBar_logo__image__RvMSw"
};


/***/ }),

/***/ 3854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./redux/slices/stories.slice.ts + 2 modules
var stories_slice = __webpack_require__(5408);
;// CONCATENATED MODULE: ./redux/store.ts


const store = (0,toolkit_.configureStore)({
    reducer: {
        stories: stories_slice/* storiesReducer */.mg
    }
});
/* harmony default export */ const redux_store = ((/* unused pure expression or super */ null && (store)));

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(2810);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: external "@mui/icons-material/Instagram"
const Instagram_namespaceObject = require("@mui/icons-material/Instagram");
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Google"
const Google_namespaceObject = require("@mui/icons-material/Google");
var Google_default = /*#__PURE__*/__webpack_require__.n(Google_namespaceObject);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "@mui/icons-material/GitHub"
const GitHub_namespaceObject = require("@mui/icons-material/GitHub");
var GitHub_default = /*#__PURE__*/__webpack_require__.n(GitHub_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material"
const icons_material_namespaceObject = require("@mui/icons-material");
;// CONCATENATED MODULE: ./components/Footer/Footer.tsx









const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((Footer_module_default()).main__footer__container),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container py-4",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-6 pt-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "ONE MORE THING! If you have any stories of your own, please don't hesitate to write me on any of my social media platforms."
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-6 d-flex flex-row justify-content-center align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: external_classnames_default()((Footer_module_default()).footer__icon, ""),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://www.instagram.com/scry_monsters/",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Instagram_default()), {})
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: external_classnames_default()((Footer_module_default()).footer__icon, ""),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "mailto: krbnv.z@gmail.com",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Google_default()), {})
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: external_classnames_default()((Footer_module_default()).footer__icon, ""),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://github.com/scry-monsters",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((GitHub_default()), {})
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: external_classnames_default()((Footer_module_default()).footer__icon, ""),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://www.linkedin.com/in/scry/",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_namespaceObject.LinkedIn, {})
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const icons_material_Menu_namespaceObject = require("@mui/icons-material/Menu");
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./images/myLogo.png
/* harmony default export */ const myLogo = ({"src":"/_next/static/media/myLogo.c3be3c3d.png","height":290,"width":768,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAARklEQVR42mO4Wc8gBMSmN+oZ9G+CcAODLpQ2BdLCDEBCAchJBWJ/IDsdSKcDaX8gTr3RwKDIABRgBOrmZUADN4FiN+oZGAHjqB7Afai2PQAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./components/Navbar/NavBar.module.scss
var NavBar_module = __webpack_require__(9801);
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/Navbar/NavBar.tsx


















const pages = [
    "About",
    "Source"
];
const settings = (/* unused pure expression or super */ null && ([
    "Profile",
    "Account",
    "Dashboard",
    "Logout"
]));
const NavBar = ()=>{
    const [anchorElNav, setAnchorElNav] = external_react_default().useState(null);
    const [anchorElUser, setAnchorElUser] = external_react_default().useState(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        position: "static",
        className: (NavBar_module_default()).appBar,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            maxWidth: "xl",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                disableGutters: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            noWrap: true,
                            component: "div",
                            sx: {
                                mr: 2,
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pt-2",
                                style: {
                                    width: "120px !important"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    className: (NavBar_module_default()).myLogo__image,
                                    src: myLogo,
                                    alt: "myLogo"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "large",
                                "aria-label": "account of current user",
                                "aria-controls": "menu-appbar",
                                "aria-haspopup": "true",
                                onClick: handleOpenNavMenu,
                                color: "inherit",
                                style: {
                                    color: "black"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                id: "menu-appbar",
                                anchorEl: anchorElNav,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left"
                                },
                                keepMounted: true,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                },
                                open: Boolean(anchorElNav),
                                onClose: handleCloseNavMenu,
                                sx: {
                                    display: {
                                        xs: "block",
                                        md: "none"
                                    }
                                },
                                children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        onClick: handleCloseNavMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            textAlign: "center",
                                            className: (NavBar_module_default()).navBarText,
                                            children: page !== "Source" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/about",
                                                    children: page
                                                })
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    page,
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://github.com/scry-monsters/strs",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((GitHub_default()), {})
                                                    })
                                                ]
                                            })
                                        })
                                    }, page)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        noWrap: true,
                        component: "div",
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pt-2",
                            style: {
                                width: "120px !important"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                className: (NavBar_module_default()).myLogo__image,
                                src: myLogo,
                                alt: "myLogo"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                onClick: handleCloseNavMenu,
                                sx: {
                                    my: 2,
                                    color: "black",
                                    display: "block"
                                },
                                className: (NavBar_module_default()).navBarText,
                                children: page !== "Source" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/about",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                            style: {
                                                color: "black"
                                            },
                                            children: page
                                        })
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://github.com/scry-monsters/strs",
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
                                        style: {
                                            color: "black"
                                        },
                                        children: [
                                            page,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((GitHub_default()), {})
                                        ]
                                    })
                                })
                            }, page)
                        )
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Navbar_NavBar = (NavBar);

;// CONCATENATED MODULE: ./components/Layout/Layout.tsx




const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar_NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    }));
};
/* harmony default export */ const Layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,408], () => (__webpack_exec__(3854)));
module.exports = __webpack_exports__;

})();