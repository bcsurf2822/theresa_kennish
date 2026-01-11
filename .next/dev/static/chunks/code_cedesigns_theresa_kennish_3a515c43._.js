(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/code/cedesigns/theresa_kennish/schemaTypes/series.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@sanity+types@5.2.0_@types+react@19.2.2_debug@4.4.3/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: "series",
    title: "Series",
    type: "document",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "slug",
            title: "Slug",
            type: "slug",
            description: "URL-friendly identifier (e.g., 'ocean-landscapes' creates /series/ocean-landscapes)",
            options: {
                source: "title",
                maxLength: 96
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "description",
            title: "Description",
            type: "text",
            rows: 4
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            description: "Optional cover image to represent this series",
            options: {
                hotspot: true
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "order",
            title: "Display Order",
            type: "number",
            description: "Lower numbers appear first"
        })
    ],
    preview: {
        select: {
            title: "title",
            media: "coverImage"
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/cedesigns/theresa_kennish/schemaTypes/artwork.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@sanity+types@5.2.0_@types+react@19.2.2_debug@4.4.3/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: "artwork",
    title: "Artwork",
    type: "document",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "description",
            title: "Description",
            type: "text",
            rows: 4
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "series",
            title: "Series",
            type: "reference",
            to: [
                {
                    type: "series"
                }
            ],
            description: "Which series does this artwork belong to?"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "showOnHomepage",
            title: "Show on Homepage",
            type: "boolean",
            description: "Feature this artwork on the homepage",
            initialValue: false
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "order",
            title: "Display Order",
            type: "number",
            description: "Lower numbers appear first within its series"
        })
    ],
    preview: {
        select: {
            title: "title",
            series: "series.title",
            media: "image"
        },
        prepare ({ title, series, media }) {
            return {
                title: title,
                subtitle: series ? `Series: ${series}` : "No series",
                media: media
            };
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/cedesigns/theresa_kennish/schemaTypes/about.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@sanity+types@5.2.0_@types+react@19.2.2_debug@4.4.3/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: "about",
    title: "About",
    type: "document",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "bio",
            title: "Bio",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "secondaryTitle",
            title: "Secondary Title",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "secondaryAbout",
            title: "Secondary About",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$5$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "secondaryImage",
            title: "Secondary Image",
            type: "image",
            options: {
                hotspot: true
            }
        })
    ],
    preview: {
        select: {
            media: "profileImage"
        },
        prepare ({ media }) {
            return {
                title: "About",
                media: media
            };
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/cedesigns/theresa_kennish/schemaTypes/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schemaTypes",
    ()=>schemaTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$schemaTypes$2f$series$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/schemaTypes/series.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$schemaTypes$2f$artwork$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/schemaTypes/artwork.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$schemaTypes$2f$about$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/schemaTypes/about.ts [app-client] (ecmascript)");
;
;
;
const schemaTypes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$schemaTypes$2f$series$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$schemaTypes$2f$artwork$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$schemaTypes$2f$about$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/cedesigns/theresa_kennish/sanity.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$sanity$40$5$2e$2$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$reac_1fa5c8f85a09d43fbd968d38b7e8f92d$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/sanity@5.2.0_@emotion+is-prop-valid@1.4.0_@portabletext+sanity-bridge@2.0.0_@types+reac_1fa5c8f85a09d43fbd968d38b7e8f92d/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$sanity$40$5$2e$2$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$reac_1fa5c8f85a09d43fbd968d38b7e8f92d$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/sanity@5.2.0_@emotion+is-prop-valid@1.4.0_@portabletext+sanity-bridge@2.0.0_@types+reac_1fa5c8f85a09d43fbd968d38b7e8f92d/node_modules/sanity/lib/_chunks-es/pane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$vision$40$5$2e$2$2e$0_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$codemirror$2b$lint$40$6$2e$9$2e$2_$40$codemirror$2b$theme$2d$one_cc1bc35cea24dd888e9294e6234aa415$2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@sanity+vision@5.2.0_@babel+runtime@7.28.4_@codemirror+lint@6.9.2_@codemirror+theme-one_cc1bc35cea24dd888e9294e6234aa415/node_modules/@sanity/vision/lib/_chunks-es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/schemaTypes/index.ts [app-client] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$sanity$40$5$2e$2$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$reac_1fa5c8f85a09d43fbd968d38b7e8f92d$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    name: 'default',
    title: 'Theresa-Kennish',
    projectId: 'mcfd2t8i',
    dataset: 'production',
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$sanity$40$5$2e$2$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$reac_1fa5c8f85a09d43fbd968d38b7e8f92d$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$vision$40$5$2e$2$2e$0_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$codemirror$2b$lint$40$6$2e$9$2e$2_$40$codemirror$2b$theme$2d$one_cc1bc35cea24dd888e9294e6234aa415$2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visionTool"])()
    ],
    schema: {
        types: __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemaTypes"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/code/cedesigns/theresa_kennish/app/studio/[[...tool]]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/next@16.0.0_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$12$2e$0$2e$10_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$14$2e$0_$40$sanity$2b$types$40$5$2e$_310b6e367e13a95fe5544e6b7c057029$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/next-sanity@12.0.10_@emotion+is-prop-valid@1.4.0_@sanity+client@7.14.0_@sanity+types@5._310b6e367e13a95fe5544e6b7c057029/node_modules/next-sanity/dist/studio/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$sanity$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/sanity.config.ts [app-client] (ecmascript)");
"use client";
;
;
;
function StudioPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$12$2e$0$2e$10_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$14$2e$0_$40$sanity$2b$types$40$5$2e$_310b6e367e13a95fe5544e6b7c057029$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NextStudio"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$sanity$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }, void 0, false, {
        fileName: "[project]/code/cedesigns/theresa_kennish/app/studio/[[...tool]]/page.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = StudioPage;
var _c;
__turbopack_context__.k.register(_c, "StudioPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=code_cedesigns_theresa_kennish_3a515c43._.js.map