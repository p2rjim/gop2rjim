(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/lib/admin-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminProvider",
    ()=>AdminProvider,
    "useAdmin",
    ()=>useAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const AdminContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ADMIN_PASSWORD = '5590';
const ADMIN_KEY = 'letsgo_admin';
function AdminProvider({ children }) {
    _s();
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInitializing, setIsInitializing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminProvider.useEffect": ()=>{
            const stored = sessionStorage.getItem(ADMIN_KEY);
            if (stored === 'true') {
                setIsAdmin(true);
            }
            setIsInitializing(false);
        }
    }["AdminProvider.useEffect"], []);
    const login = (password)=>{
        if (password === ADMIN_PASSWORD) {
            setIsAdmin(true);
            sessionStorage.setItem(ADMIN_KEY, 'true');
            return true;
        }
        return false;
    };
    const logout = ()=>{
        setIsAdmin(false);
        sessionStorage.removeItem(ADMIN_KEY);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminContext.Provider, {
        value: {
            isAdmin,
            isInitializing,
            login,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/lib/admin-context.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(AdminProvider, "j+LfagMA+rqAW6LgPrjE2huHq9E=");
_c = AdminProvider;
function useAdmin() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
}
_s1(useAdmin, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AdminProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/frontend/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/frontend/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/admin-login-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminLoginDialog",
    ()=>AdminLoginDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$admin$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/admin-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function AdminLoginDialog() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$admin$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdmin"])();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (login(password)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('관리자 모드로 전환되었습니다');
            setOpen(false);
            setPassword('');
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('비밀번호가 일치하지 않습니다');
            setPassword('');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden md:inline",
                            children: "관리자 로그인"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                "관리자 로그인"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "password",
                                placeholder: "비밀번호를 입력하세요",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>setOpen(false),
                                        children: "취소"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        children: "로그인"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/admin-login-dialog.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/admin-login-dialog.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(AdminLoginDialog, "8Ral911/akdglspHYM3pdMcqUqQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$admin$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdmin"]
    ];
});
_c = AdminLoginDialog;
var _c;
__turbopack_context__.k.register(_c, "AdminLoginDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$admin$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/admin-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$admin$2d$login$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/admin-login-dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const navItems = [
    {
        href: '/',
        label: '홈',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        color: 'purple'
    },
    {
        href: '/works',
        label: '웹툰',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        color: 'green'
    },
    {
        href: '/illustrations',
        label: '일러스트',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        color: 'yellow'
    },
    {
        href: '/activities',
        label: '활동',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        color: 'red'
    },
    {
        href: '/guestbook',
        label: '방명록',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
        color: 'cyan'
    }
];
const colorStyles = {
    purple: {
        base: 'bg-[#9845ff] text-white border-2',
        active: 'border-white scale-110 shadow-[0_0_20px_rgba(152,69,255,0.8)] z-10',
        inactive: 'border-transparent hover:border-white/50 hover:scale-105 hover:-translate-y-1 hover:brightness-110'
    },
    green: {
        base: 'bg-[#00c853] text-white border-2',
        active: 'border-white scale-110 shadow-[0_0_20px_rgba(0,200,83,0.8)] z-10',
        inactive: 'border-transparent hover:border-white/50 hover:scale-105 hover:-translate-y-1 hover:brightness-110'
    },
    yellow: {
        base: 'bg-[#ffd600] text-black border-2',
        active: 'border-black scale-110 shadow-[0_0_20px_rgba(255,214,0,0.8)] z-10',
        inactive: 'border-transparent hover:border-black/50 hover:scale-105 hover:-translate-y-1 hover:brightness-110'
    },
    red: {
        base: 'bg-[#ff3d00] text-white border-2',
        active: 'border-white scale-110 shadow-[0_0_20px_rgba(255,61,0,0.8)] z-10',
        inactive: 'border-transparent hover:border-white/50 hover:scale-105 hover:-translate-y-1 hover:brightness-110'
    },
    cyan: {
        base: 'bg-[#00b0ff] text-white border-2',
        active: 'border-white scale-110 shadow-[0_0_20px_rgba(0,176,255,0.8)] z-10',
        inactive: 'border-transparent hover:border-white/50 hover:scale-105 hover:-translate-y-1 hover:brightness-110'
    }
};
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isAdmin, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$admin$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdmin"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4 w-full px-4 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex justify-center gap-2 md:gap-4 w-full max-w-4xl pointer-events-auto",
                    children: navItems.map((item)=>{
                        const isActive = pathname === item.href || item.href !== '/' && pathname.startsWith(item.href);
                        const Icon = item.icon;
                        const styles = colorStyles[item.color];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col items-center justify-center w-16 h-16 md:w-28 md:h-24 transition-all duration-300 shadow-xl rounded-xl', styles.base, isActive ? styles.active : styles.inactive),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-5 h-5 md:w-7 md:h-7 mb-1 md:mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/sidebar.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] md:text-xs font-bold tracking-wider",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/sidebar.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/frontend/components/sidebar.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/frontend/components/sidebar.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/sidebar.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-6 right-6 z-40",
                children: isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 p-1.5 rounded-full shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200 text-sm', 'hover:bg-zinc-800 text-zinc-300 hover:text-white', pathname.startsWith('/admin') && 'bg-cyan-500/20 text-cyan-400'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/sidebar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold hidden md:inline",
                                    children: "관리자"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/sidebar.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/sidebar.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: logout,
                            className: "px-3 py-1.5 text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-400/20 rounded-full transition-colors",
                            children: "로그아웃"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/sidebar.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/sidebar.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-zinc-900/50 hover:bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-full shadow-lg transition-all",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$admin$2d$login$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminLoginDialog"], {}, void 0, false, {
                        fileName: "[project]/frontend/components/sidebar.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/components/sidebar.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/sidebar.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Sidebar, "vpHw3Hj0M8FNZ8gw25sQ3zX5zis=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$admin$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdmin"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/main-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainLayout",
    ()=>MainLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$admin$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/admin-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const PaintEffectsCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/frontend/components/paint-effects.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.PaintEffectsCanvas), {
    loadableGenerated: {
        modules: [
            "[project]/frontend/components/paint-effects.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = PaintEffectsCanvas;
function MainLayout({ children, showPaintEffects = true }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const getBgClass = ()=>{
        if (!pathname) return 'bg-background';
        if (pathname.startsWith('/works') || pathname.startsWith('/admin/works')) return 'bg-[#00c853]/40';
        if (pathname.startsWith('/illustrations') || pathname.startsWith('/admin/illustrations')) return 'bg-[#ffd600]/40';
        if (pathname.startsWith('/activities') || pathname.startsWith('/admin/activities')) return 'bg-[#ff3d00]/40';
        if (pathname.startsWith('/guestbook') || pathname.startsWith('/admin/comments')) return 'bg-[#00b0ff]/40';
        if (pathname === '/') return 'bg-[#9845ff]/40';
        return 'bg-background';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$admin$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen overflow-x-hidden transition-colors duration-500 ${getBgClass()}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/main-layout.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "min-h-[100dvh]",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/frontend/components/main-layout.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                showPaintEffects && pathname === '/' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaintEffectsCanvas, {}, void 0, false, {
                    fileName: "[project]/frontend/components/main-layout.tsx",
                    lineNumber: 35,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/main-layout.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/main-layout.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(MainLayout, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = MainLayout;
var _c, _c1;
__turbopack_context__.k.register(_c, "PaintEffectsCanvas");
__turbopack_context__.k.register(_c1, "MainLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
class MockQuery {
    table;
    action = 'select';
    data = null;
    _order = null;
    _limit = null;
    _eq = null;
    _is = null;
    _single = false;
    constructor(table){
        this.table = table;
    }
    select(cols) {
        if (!this.action || this.action === 'select') {
            this.action = 'select';
        }
        return this;
    }
    insert(data) {
        this.action = 'insert';
        this.data = data;
        return this;
    }
    update(data) {
        this.action = 'update';
        this.data = data;
        return this;
    }
    delete() {
        this.action = 'delete';
        return this;
    }
    order(col, opts) {
        this._order = {
            col,
            opts
        };
        return this;
    }
    limit(lim) {
        this._limit = lim;
        return this;
    }
    eq(col, val) {
        this._eq = {
            col,
            val
        };
        return this;
    }
    is(col, val) {
        this._is = {
            col,
            val
        };
        return this;
    }
    single() {
        this._single = true;
        return this;
    }
    async execute() {
        try {
            const baseUrl = ("TURBOPACK compile-time truthy", 1) ? '' : "TURBOPACK unreachable";
            const response = await fetch(`${baseUrl}/api/db`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                cache: 'no-store',
                body: JSON.stringify({
                    table: this.table,
                    action: this.action,
                    data: this.data,
                    id: this._eq ? this._eq.val : null,
                    col: this._eq ? this._eq.col : null,
                    isCol: this._is ? this._is.col : null,
                    isVal: this._is ? this._is.val : null
                })
            });
            const result = await response.json();
            if (this.action === 'select') {
                let res = result.data || [];
                if (this._eq) {
                    res = res.filter((r)=>String(r[this._eq.col]) === String(this._eq.val));
                }
                if (this._order) {
                    const { col, opts } = this._order;
                    res.sort((a, b)=>{
                        const valA = a[col] ?? 0;
                        const valB = b[col] ?? 0;
                        if (opts?.ascending === false) return valA < valB ? 1 : -1;
                        return valA > valB ? 1 : -1;
                    });
                }
                if (this._limit) {
                    res = res.slice(0, this._limit);
                }
                if (this._single) {
                    return {
                        data: res[0] || null,
                        error: null
                    };
                }
                return {
                    data: res,
                    error: null
                };
            }
            if (this.action === 'insert') {
                const items = result.data;
                if (this._single && Array.isArray(items)) {
                    return {
                        data: items[0],
                        error: null
                    };
                } else if (this._single) {
                    return {
                        data: items,
                        error: null
                    };
                }
                return {
                    data: items,
                    error: null
                };
            }
            return {
                data: result.data || null,
                error: null
            };
        } catch (e) {
            console.error('Mock DB error:', e);
            return {
                data: null,
                error: e
            };
        }
    }
    then(onfulfilled, onrejected) {
        return this.execute().then(onfulfilled, onrejected);
    }
}
function createClient() {
    return {
        from: (table)=>new MockQuery(table),
        auth: {
            getUser: async ()=>({
                    data: {
                        user: {
                            id: 'admin'
                        }
                    },
                    error: null
                })
        },
        storage: {
            from: ()=>({
                    upload: async ()=>({
                            error: 'Use standard file upload API instead'
                        }),
                    getPublicUrl: ()=>({
                            data: {
                                publicUrl: ''
                            }
                        })
                })
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/guestbook/guestbook-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuestbookForm",
    ()=>GuestbookForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function GuestbookForm() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!name.trim() || !content.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('이름과 메시지를 입력해주세요');
            return;
        }
        setLoading(true);
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            const { error } = await supabase.from('comments').insert({
                author_name: name.trim(),
                author_email: email.trim() || null,
                content: content.trim(),
                is_approved: false
            });
            if (error) throw error;
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('메시지가 등록되었습니다. 관리자 승인 후 표시됩니다.');
            setName('');
            setEmail('');
            setContent('');
            router.refresh();
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('메시지 등록에 실패했습니다. 다시 시도해주세요.');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-4 p-6 rounded-2xl bg-card border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "name",
                                className: "block text-sm font-medium mb-1",
                                children: [
                                    "이름 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-destructive",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                                        lineNumber: 58,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "name",
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                placeholder: "이름을 입력하세요",
                                required: true,
                                disabled: loading
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium mb-1",
                                children: "이메일 (선택)"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "email",
                                type: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                placeholder: "이메일 주소",
                                disabled: loading
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "content",
                        className: "block text-sm font-medium mb-1",
                        children: [
                            "메시지 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-destructive",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                        id: "content",
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        placeholder: "자유롭게 메시지를 남겨주세요",
                        rows: 4,
                        required: true,
                        disabled: loading
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                disabled: loading,
                className: "w-full sm:w-auto",
                children: loading ? '등록 중...' : '메시지 남기기'
            }, void 0, false, {
                fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground",
                children: "* 메시지는 관리자 승인 후 게시됩니다."
            }, void 0, false, {
                fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/guestbook/guestbook-form.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(GuestbookForm, "yZSE9mRNzgQPCY6/VkvtAHz30bY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GuestbookForm;
var _c;
__turbopack_context__.k.register(_c, "GuestbookForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/guestbook/guestbook-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuestbookList",
    ()=>GuestbookList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/date-fns/formatDistanceToNow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/date-fns/locale/ko.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
'use client';
;
;
;
;
function GuestbookList({ comments }) {
    if (comments.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12 text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "아직 등록된 메시지가 없습니다."
                }, void 0, false, {
                    fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm mt-1",
                    children: "첫 번째 메시지를 남겨주세요!"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-display flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "메시지"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-normal text-muted-foreground",
                        children: [
                            "(",
                            comments.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            comments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "p-5 rounded-xl bg-card border hover:border-primary/30 transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "w-5 h-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: comment.author_name
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-muted-foreground",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(comment.created_at), {
                                                    addSuffix: true,
                                                    locale: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ko"]
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground whitespace-pre-wrap",
                                        children: comment.content
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, comment.id, false, {
                    fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/guestbook/guestbook-list.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = GuestbookList;
var _c;
__turbopack_context__.k.register(_c, "GuestbookList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/random1.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/random1.0z4dk4hfq35~j.webp");}),
"[project]/frontend/src/assets/random1.webp.mjs { IMAGE => \"[project]/frontend/src/assets/random1.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/random1.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 1000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRmABAABXRUJQVlA4TFQBAAAvB8ABEM1VICICHghADgIAAIBLASDwUhAAQABAAMBAAAEAAAAAAADAAAAAgAEEIAAJE7atQqRkhL4BAAAeCAgOAgAAwPnf79VaUAFkAgAQBGAwAAAAAAAAAAAAAAAAAAAACAAAAECQkI8EsnkgaDkIAAAA5/+uQdFpQQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAIBAECABOM0qx+eSAgOAgAAADnfx+vkgCICsAAJAhAEwQCCAIgEAAAAAEAgAAIAQQIAAAKgBAEiEAiGQTAbJ6pfR5T/7wirUMVygkgTlds9vGyayi1Ni8AxBfUNK9rzVks6niOZajmAfgVWLmkzuVFjm1jgMqUJgbAgP9Dkh+Tmq6i54Ns3Q9yugEkgFAtFNNeqH7i/4J86SWEAD5wnFh+v50pn36rv3Y97yGy1QyDBPA3UdsO59X199y3dWqm/HhV/0AA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/random2.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/random2.0-.phq5b_hfg4.webp");}),
"[project]/frontend/src/assets/random2.webp.mjs { IMAGE => \"[project]/frontend/src/assets/random2.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/random2.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 1000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRnABAABXRUJQVlA4TGMBAAAvB8ABEM1VICICHgjQDiIAAIC3LAKJkACKMAQABBgGAgAAAAAAACAIAAQcAEAEBIQACQCkiBL1HbS0AAAAHggIDgIAAMD531YhiawCyCAAAAAAABgAYAAAAQAAAACAAAAAAEADAQEQQSlglSDvgYDgIAAAAJz/NR9foB5IIAABAAAAAAAAAAAAAAAAAAAAAAAAAACAASJSUPqalMwDwYBBAAAAOP/9JZyCgkAAUCAABAAIkABAAAAJADgCQCQEgAAEABzggAAAIBCo0tOA0IJfrN0oymRUfW62yt/2h9jV+QJgKf7beNC82lVhXOvd2nIZpvHWEgAD9y8S69VUQ6yb32Gaus2L8vcA8HGRlxoXc3sw2UXJyhc//U8AL8ggWiilJdS9yxOZFewMALB8IfPmpxDPRCrxybLbOHADOCFpt7LnocqPSW08invOQhkQAHZySv0l9TDrxO1D51fbm6++IAIAAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/random3.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/random3.0q.o9o16-7wu7.webp");}),
"[project]/frontend/src/assets/random3.webp.mjs { IMAGE => \"[project]/frontend/src/assets/random3.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/random3.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 1000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRmYBAABXRUJQVlA4TFkBAAAvB8ABEM1VICICHghADgIAAIBbAQQRkAQEBAFQAAABAAAAAAAAAAAAAAAAEAAAEpBKNKXaC+AtVq0BAAAeCAgKAwAAwPkfpA8yExMAAAAAssEAAAAAAAAAAAAAAAAAAAAQAADAAJhliYixbPJAQHAQAAAAzv9egzCWAWAEQAhAgIAAAAAAAAAAAAAIAADQABAAAQgAAESFD8SomgcCgoMAAABw/vfxKgmAqAAMQIIANEEggCAAAgEAABAAAAiAEECAAACgAAhBgAgk0oIAGKrNmtiOvn7eel2H2KQTgOtv16jptodJ9VxtAcCZkfVt6vJpoFRqe1WlHuIB+MesVhyxK2WUQk8s5arOnmMAFqBXks526rWdtCxUMh+R+m8AAsi9X4LF7TT3v3TDp/4m5a8IAXzg7JBfjze31JuxYZ16iFbEWBAN/qa+NgzHlWznnAWdnn17pLw9QwAA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/random4.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/random4.042d5pjm3yhkm.webp");}),
"[project]/frontend/src/assets/random4.webp.mjs { IMAGE => \"[project]/frontend/src/assets/random4.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/random4.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 1000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRmIBAABXRUJQVlA4TFUBAAAvB8ABEM1VICICHgjQDiIAAID3IwYKgQAChAQEIEABAgAAAAACAYgAAHIIAFACAABECVBIQUpaVyCzAAAAHkiBDiIAAMD5v78FSUqHEiIACAAAAAAAAAAAAAAAAAAAAAAAAEAAEAABhoBOQPJACHAQAAAAzv8EJaABAQQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAkKjQN1XoPBEUHEQAA4PzfVsTooCAQABQIAAEAApwAQAAACQAYAkAkBIAABAAMYIAAACAQqM79lKj3E6bnONptceHv2tSI3/Y2iZbiAijh/x9yVD5tl+/zWpXUZsc09f+uAhAimiLHNdTd3X+Lkuy6bIFVPwfgo/y/57yreTpZ1tVEfV6Mqp4AgX5C7IwH97aI391zwE4AGMknSj3AxOPhGDeAk/7oG1HUwrcIx0gUYBeZmV8dp88mYXCj+iFqc/EBAAA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/random5.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/random5.0ien-8b7kj_.d.webp");}),
"[project]/frontend/src/assets/random5.webp.mjs { IMAGE => \"[project]/frontend/src/assets/random5.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/random5.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 1000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRmgBAABXRUJQVlA4TFwBAAAvB8ABEM1VICICHghADgIAAID7UgKFIAAhhEQAQIBAAAAAABAgAIQAABEAAaQAAIAkAYoAVNFqoGQBAAA8ELQcBAAAgPN/fwqhEBAAAANCEABAAAAAAAgAAAAAAAAAAAACEACgDAQyIJyYqnkgBEiIAAAA5z8FTiAFAgQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAcgUqFL0VvrgaDoIAIAAJz/24oYHRQEAoACASAAQIATAAgAIAEAQwCIhAAQgACAAQwQAAAEAtW5nwLqzcLsmEa3flzUXpui/G1fm+guLwBJ/s9Qo7YpXbEuax2HNt/mabRSARBE7l9hb18P1n2rbrRs2gK7+g6An554ud/VOp7c82risi5mESfAJ/rYxc51wP1PguWew2AnADBn+RKVhkG9PX5onPa7ARjSUvouZdEkvj/JaWkEFMBOZpb768SFTcnBU/hJ0Vz4AAA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/random6.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/random6.119p.8ysxxjpv.webp");}),
"[project]/frontend/src/assets/random6.webp.mjs { IMAGE => \"[project]/frontend/src/assets/random6.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/random6.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 1000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRmQBAABXRUJQVlA4TFgBAAAvB8ABEM1VICICHghADgIAAIBLKAJC8BAAAgAAAsAEAAAAAAAAAAAAIAAAIAEECEBCLNuaBIqZir4BAAAeCAgOAgAAwPlfWWZAAABYAZECgQAAABCAIQABAEAAoAEAgAAAkAcBQEAAKDBAiPdAQHAQAAAAzv9+n4kaKwAAACAAAAAAAAAAAAAAAAAAAAAAAAAAEMAAEY0IkD775IGA4CAAAACc/328SgIgKgADkCAATRAIIAiAQAAAAAQAAAIgBBAgAAAoAEIQIAKJZBAAc0pZdyxjbNsrxnUgZyeAML252cvbWmf1klIBIDw5qqvgmiIj/0nHZy69igfg7+to2/h2x17kWjcG31XKaAyAAYsmWRzVND/r/JAux1FkfgOIAHHZUsu1N8F/MX1ftUl6fyEE8IGzqeTv3RuSuJWiqzuHSKkYBvHga+Nt0tUr7+tM7Tmdw/5I23oHAQ=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/random7.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/random7.10yex6j9y_e8-.webp");}),
"[project]/frontend/src/assets/random7.webp.mjs { IMAGE => \"[project]/frontend/src/assets/random7.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random7$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/random7.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random7$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 1000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRmYBAABXRUJQVlA4TFoBAAAvB8ABEM1VICICHghADgIAAIB7AQJFQgAAIAAgEEAggAAAAAAAAAAAAAAgIECACEBCkNV+FRGZYq0BAAAeCAgOAgAAwPnfK8uCVZAEAlAYABAAAAAAAAAAAAAAAAAAAACAAAAAAIAqGA360nsgIDgIAAAA539PlTBeqEQAABgBAAAAAAAAAAAAAAAAAACACAAQgBAAIETAKE3r5YGA4CAAAACc/328SgIgKgADkCAATRAIIAiAQAAAAAQAAAIgBBAgAAAoAEIQIAKJtCAAxuSyZvOjV6W3WNch8fEE4IZTG9XcVvpYT8kVANxrokrV5aNnvlrt97rUJh6Av707W+exe6ZKzFDS5aYSXxEDsIB884T+Q3dVDhsI++yIyu8GQEDe7Ysfl53m+TfL9PG4pZdYCOADZxHyU38TSNhid67bkyJhYiyIBp/F2ixcV1k/c+XeKW3DsxbW3xAA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/random8.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/random8.0f_nulgd84zld.webp");}),
"[project]/frontend/src/assets/random8.webp.mjs { IMAGE => \"[project]/frontend/src/assets/random8.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random8$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/random8.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random8$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 1000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRmgBAABXRUJQVlA4TFsBAAAvB8ABEM1VICICHghADgIAAIDLAyEQTEAEIAAAAQgJAAAAAAAAAAAAAAAAICAAElAJqZjmI5KyIq0BAAAeCAYMAgAAwPmvP70DARAIIMUJBAIcAAAAAAAAAAAAAAAAAABAAAAAnCtQob8A+O+BgOAgAAAAnP8NhZiaAioAAEoAAGEAAAAAAAAAAAAAAAIAgGBgAPAAYQQAQSbGSh4ICA4CAADA+d/HqyQAogIwAAkC0ASBAIIACAQAAEAAACAAQgABAgCAAiAEASKQSAMCoI86K/Z5JJXfbJMh0OkEYLunabh7rNKpHqIuANiXX6m53ecr2UKl9WVKXZQH4J+raMXgutxukqw7SsSKMzEAA6xJJeWxqNtexL2QGn/48rsBOEBEvZDo9tavf+XsN55TeqYiBPCBsxRyDq3Z32E7/n5t7jGSGWNANPiyfltvCpeYwxyO53QvxzOp3F8QAAA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/assets/random9.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/random9.14l95llpvr7pa.webp");}),
"[project]/frontend/src/assets/random9.webp.mjs { IMAGE => \"[project]/frontend/src/assets/random9.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/frontend/src/assets/random9.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 1000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRnYBAABXRUJQVlA4TGkBAAAvB8ABEM1VICICHghADgIAAIBb1YxUbACIUREICACAIAAAAAAAAAAhAEAAAEAABAxBqAAAgoIq4GUBAAA8EBQdRAAAgPN/f2UJwQggSCAKAAAAEAEAAgAIAABAAAAAAAAAWCBAkBCUDi5ARWDmgYDgIAAAAJz/9aQVQYIwBKABAEAAAgAAAAAAAAAAAABAAAAAAAQQCARJESmTVHkPBEUHEQAA4PzfVsTooCAQABQIAAEAApwAQAAACQAYAkAkBIAABAAMYIAAACAQqM79tKDIE7ZHMRbJ5Wpzbr7o73CSREovAI7wl26IzHV3/VStwz9ru7Wc1tdUABhIuvfCFurljr/zuNlYd4GOnwPAT1H6esGhxDNSbq1ptF9U+J8APkFvdR2rysFTK9Q0c57ZnQEA9k/ycP7KxC+IfH5kmTuu5AZwQTqeYR/YpHit8dUQifsLjAUF4ESzp/Ca+slm7T6YbvWTeZsbPgAAAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/falling-images.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FallingImages",
    ()=>FallingImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/frontend/src/assets/random1.webp.mjs { IMAGE => "[project]/frontend/src/assets/random1.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/frontend/src/assets/random2.webp.mjs { IMAGE => "[project]/frontend/src/assets/random2.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/frontend/src/assets/random3.webp.mjs { IMAGE => "[project]/frontend/src/assets/random3.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/frontend/src/assets/random4.webp.mjs { IMAGE => "[project]/frontend/src/assets/random4.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/frontend/src/assets/random5.webp.mjs { IMAGE => "[project]/frontend/src/assets/random5.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random6$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/frontend/src/assets/random6.webp.mjs { IMAGE => "[project]/frontend/src/assets/random6.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random7$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random7$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/frontend/src/assets/random7.webp.mjs { IMAGE => "[project]/frontend/src/assets/random7.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random8$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random8$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/frontend/src/assets/random8.webp.mjs { IMAGE => "[project]/frontend/src/assets/random8.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random9$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/frontend/src/assets/random9.webp.mjs { IMAGE => "[project]/frontend/src/assets/random9.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const RANDOM_IMAGES = [
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random6$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random7$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random7$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random8$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random8$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$assets$2f$random9$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$frontend$2f$src$2f$assets$2f$random9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
];
function FallingImages() {
    _s();
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FallingImages.useEffect": ()=>{
            const handleClick = {
                "FallingImages.useEffect.handleClick": (e)=>{
                    // Form 요소나 버튼 등을 클릭했을 때는 발생하지 않게 하려면 아래 주석 해제 (지금은 어디든 발생하게 둠)
                    // if ((e.target as HTMLElement).closest('button, a, input, textarea')) return;
                    // 한 번 클릭 시 1~3개의 이미지가 떨어지도록 설정
                    const count = Math.floor(Math.random() * 3) + 1;
                    const newImages = [];
                    for(let i = 0; i < count; i++){
                        const id = Math.random().toString(36).substring(2, 9) + Date.now();
                        const src = RANDOM_IMAGES[Math.floor(Math.random() * RANDOM_IMAGES.length)];
                        // 화면 너비 내의 랜덤한 X 위치
                        const startX = Math.random() * (window.innerWidth - 100);
                        // 시작 각도와 회전하면서 떨어질 각도 설정
                        const startAngle = Math.random() * 360;
                        const endAngle = startAngle + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 360 + 360);
                        // 떨어지는 속도 (2초 ~ 4초)
                        const duration = Math.random() * 2 + 2;
                        // 이미지 크기 (80px ~ 150px)
                        const size = Math.floor(Math.random() * 70) + 80;
                        newImages.push({
                            id,
                            src,
                            startX,
                            startAngle,
                            endAngle,
                            duration,
                            size
                        });
                        // 애니메이션이 끝나면 DOM에서 제거
                        setTimeout({
                            "FallingImages.useEffect.handleClick": ()=>{
                                setImages({
                                    "FallingImages.useEffect.handleClick": (prev)=>prev.filter({
                                            "FallingImages.useEffect.handleClick": (img)=>img.id !== id
                                        }["FallingImages.useEffect.handleClick"])
                                }["FallingImages.useEffect.handleClick"]);
                            }
                        }["FallingImages.useEffect.handleClick"], duration * 1000);
                    }
                    setImages({
                        "FallingImages.useEffect.handleClick": (prev)=>[
                                ...prev,
                                ...newImages
                            ]
                    }["FallingImages.useEffect.handleClick"]);
                }
            }["FallingImages.useEffect.handleClick"];
            // 전역 클릭 이벤트 등록
            window.addEventListener('click', handleClick);
            return ({
                "FallingImages.useEffect": ()=>{
                    window.removeEventListener('click', handleClick);
                }
            })["FallingImages.useEffect"];
        }
    }["FallingImages.useEffect"], []);
    // hydration 에러 방지를 위해 처음 렌더링 시에는 안 보이게 처리할 수도 있지만,
    // 아무 클릭도 일어나지 않으면 images 빈 배열이라 상관없음.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none z-[100] overflow-hidden",
        children: images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    left: `${img.startX}px`,
                    top: `-200px`,
                    width: `${img.size}px`,
                    height: `${img.size}px`,
                    animation: `fall-${img.id} ${img.duration}s linear forwards`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
            @keyframes fall-${img.id} {
              0% {
                transform: translateY(0) rotate(${img.startAngle}deg);
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateY(120vh) rotate(${img.endAngle}deg);
                opacity: 0;
              }
            }
          `
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/falling-images.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: img.src,
                        alt: "Falling Random",
                        fill: true,
                        className: "object-contain drop-shadow-xl"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/falling-images.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, img.id, true, {
                fileName: "[project]/frontend/components/falling-images.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/frontend/components/falling-images.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(FallingImages, "ScKwoilS3xNJP1q5r1COmrAdDIM=");
_c = FallingImages;
var _c;
__turbopack_context__.k.register(_c, "FallingImages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_07hjs8f._.js.map