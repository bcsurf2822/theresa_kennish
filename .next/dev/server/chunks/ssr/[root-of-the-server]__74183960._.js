module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/code/cedesigns/theresa_kennish/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeriesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/next@16.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/next@16.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/next@16.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
// Mock Data for Series
const seriesData = {
    "oceanic-horizons": {
        title: "Oceanic Horizons",
        year: "2024",
        description: "A series exploring the movement of water through texture and light, capturing the ephemeral nature of the coast.",
        artworks: [
            {
                src: "/artwork/minimal_geometric.png",
                title: "Tidal Shift",
                dimensions: "Oil on Canvas, 24x24",
                aspect: "square"
            },
            {
                src: "/artwork/waves1.png",
                title: "Horizon Line",
                dimensions: "Oil on Canvas, 60x20",
                aspect: "wide"
            },
            {
                src: "/artwork/surf1.JPG",
                title: "Blue Velocity",
                dimensions: "Digital, 30x40",
                aspect: "portrait"
            },
            {
                src: "/artwork/bold_abstract.png",
                title: "Deep Dive",
                dimensions: "Mixed Media, 40x40",
                aspect: "square"
            },
            {
                src: "/artwork/surf2.JPG",
                title: "Aqua Flow",
                dimensions: "Digital, 24x36",
                aspect: "portrait"
            },
            {
                src: "/artwork/beach1.png",
                title: "Sand Data",
                dimensions: "Digital, 30x30",
                aspect: "square"
            }
        ]
    },
    "coastal-rhythms": {
        title: "Coastal Rhythms",
        year: "2023",
        description: "Capturing the raw energy of the Pacific coast through expressive brushwork and texture. This collection focuses on the movement of water and the stillness of stone.",
        artworks: [
            {
                src: "/artwork/surf1.JPG",
                title: "Morning Break",
                dimensions: "Oil on Canvas, 36x48",
                aspect: "landscape"
            },
            {
                src: "/artwork/surf1.JPG",
                title: "Cresting Wave",
                dimensions: "Oil on Canvas, 30x40",
                aspect: "portrait"
            },
            {
                src: "/artwork/beach1.png",
                title: "Sand & Sky",
                dimensions: "Oil on Canvas, 24x24",
                aspect: "square"
            },
            {
                src: "/artwork/row1.jpg",
                title: "Rocky Shore",
                dimensions: "Impasto, 24x36",
                aspect: "portrait"
            },
            {
                src: "/artwork/surf2.JPG",
                title: "Deep Water",
                dimensions: "Oil on Canvas, 40x40",
                aspect: "square"
            },
            {
                src: "/artwork/waves1.png",
                title: "Pacific Panorama",
                dimensions: "Oil on Canvas, 60x24",
                aspect: "wide"
            },
            {
                src: "/artwork/jetty_ocean.jpg",
                title: "The Jetty",
                dimensions: "Oil on Canvas, 30x40",
                aspect: "landscape"
            }
        ]
    },
    "urban-echoes": {
        title: "Urban Echoes",
        year: "2022",
        description: "Reflections on city life and architecture. Finding silence in the noise and structure in the chaos of urban environments.",
        artworks: [
            {
                src: "/artwork/ocean_city.jpg",
                title: "City Shores",
                dimensions: "Photography, 24x36",
                aspect: "landscape"
            },
            {
                src: "/artwork/row1.jpg",
                title: "Vertical Horizon",
                dimensions: "Photography, 12x36",
                aspect: "tall"
            },
            {
                src: "/artwork/minimal_geometric.png",
                title: "Structure 01",
                dimensions: "Mixed Media, 24x24",
                aspect: "square"
            },
            {
                src: "/artwork/row1.jpg",
                title: "Concrete Texture",
                dimensions: "Photography, 24x36",
                aspect: "portrait"
            },
            {
                src: "/artwork/abstract_watercolor.png",
                title: "Urban Rain",
                dimensions: "Watercolor, 18x24",
                aspect: "portrait"
            },
            {
                src: "/artwork/bold_abstract.png",
                title: "Night Lights",
                dimensions: "Digital, 30x30",
                aspect: "square"
            }
        ]
    }
};
function SeriesPage({ params }) {
    const series = seriesData[params.id];
    if (!series) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: "Series Not Found"
                    }, void 0, false, {
                        fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-blue-600 hover:underline",
                        children: "Return Home"
                    }, void 0, false, {
                        fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white text-slate-900 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "font-bold text-lg tracking-tight",
                            children: "Theresa Kennish"
                        }, void 0, false, {
                            fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm text-slate-500 hover:text-slate-900 transition-colors",
                            children: "Back to Portfolio"
                        }, void 0, false, {
                            fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "pt-32 pb-16 px-6 max-w-4xl mx-auto text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-slate-100 rounded-full text-slate-600",
                        children: [
                            "Series Collection • ",
                            series.year
                        ]
                    }, void 0, true, {
                        fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-6xl font-bold mb-8 text-slate-900",
                        children: series.title
                    }, void 0, false, {
                        fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto",
                        children: series.description
                    }, void 0, false, {
                        fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-[1800px] mx-auto px-6 pb-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]",
                    children: series.artworks.map((art, index)=>{
                        // Dynamic span classes based on aspect ratio
                        const spanClass = art.aspect === "wide" ? "md:col-span-2 row-span-1" : art.aspect === "tall" ? "md:col-span-1 row-span-2" : art.aspect === "portrait" ? "row-span-2" : "col-span-1 row-span-1";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative group rounded-lg overflow-hidden bg-slate-100 ${spanClass}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: art.src,
                                    alt: art.title,
                                    fill: true,
                                    className: "object-cover transition-transform duration-700 group-hover:scale-105"
                                }, void 0, false, {
                                    fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold",
                                            children: art.title
                                        }, void 0, false, {
                                            fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm opacity-90",
                                            children: art.dimensions
                                        }, void 0, false, {
                                            fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                            lineNumber: 207,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-slate-50 border-t border-slate-200 py-12 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 text-sm",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Theresa Kennish. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
}),
"[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/app/series/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__74183960._.js.map