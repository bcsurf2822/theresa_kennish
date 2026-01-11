(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+block-tools@5.0.0_@types+react@19.2.2_debug@4.4.3/node_modules/@portabletext/block-tools/lib/_chunks-es/helpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BLOCK_DEFAULT_STYLE",
    ()=>BLOCK_DEFAULT_STYLE,
    "DEFAULT_BLOCK",
    ()=>DEFAULT_BLOCK,
    "DEFAULT_SPAN",
    ()=>DEFAULT_SPAN,
    "HTML_BLOCK_TAGS",
    ()=>HTML_BLOCK_TAGS,
    "HTML_DECORATOR_TAGS",
    ()=>HTML_DECORATOR_TAGS,
    "HTML_HEADER_TAGS",
    ()=>HTML_HEADER_TAGS,
    "HTML_LIST_CONTAINER_TAGS",
    ()=>HTML_LIST_CONTAINER_TAGS,
    "HTML_LIST_ITEM_TAGS",
    ()=>HTML_LIST_ITEM_TAGS,
    "HTML_SPAN_TAGS",
    ()=>HTML_SPAN_TAGS,
    "PRESERVE_WHITESPACE_TAGS",
    ()=>PRESERVE_WHITESPACE_TAGS,
    "defaultParseHtml",
    ()=>defaultParseHtml,
    "ensureRootIsBlocks",
    ()=>ensureRootIsBlocks,
    "flattenNestedBlocks",
    ()=>flattenNestedBlocks,
    "isElement",
    ()=>isElement,
    "isEqualMarks",
    ()=>isEqualMarks,
    "isMinimalBlock",
    ()=>isMinimalBlock,
    "isMinimalSpan",
    ()=>isMinimalSpan,
    "isNodeList",
    ()=>isNodeList,
    "isPlaceholderAnnotation",
    ()=>isPlaceholderAnnotation,
    "isPlaceholderDecorator",
    ()=>isPlaceholderDecorator,
    "resolveJsType",
    ()=>resolveJsType,
    "tagName",
    ()=>tagName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+schema@2.1.1/node_modules/@portabletext/schema/dist/index.js [app-client] (ecmascript)");
;
const objectToString = Object.prototype.toString;
function resolveJsType(val) {
    switch(objectToString.call(val)){
        case "[object Function]":
            return "function";
        case "[object Date]":
            return "date";
        case "[object RegExp]":
            return "regexp";
        case "[object Arguments]":
            return "arguments";
        case "[object Array]":
            return "array";
        case "[object String]":
            return "string";
    }
    return val === null ? "null" : val === void 0 ? "undefined" : val && typeof val == "object" && "nodeType" in val && val.nodeType === 1 ? "element" : val === Object(val) ? "object" : typeof val;
}
function isEqualMarks(a, b) {
    if (!a || !b) return a === b;
    if (a.length !== b.length) return !1;
    for(let index = 0; index < a.length; index++)if (a[index] !== b[index]) return !1;
    return !0;
}
function isDeepEqual(data, other) {
    return isDeepEqualImplementation(data, other);
}
function isDeepEqualImplementation(data, other) {
    if (data === other || Object.is(data, other)) return !0;
    if (typeof data != "object" || typeof other != "object" || data === null || other === null || Object.getPrototypeOf(data) !== Object.getPrototypeOf(other)) return !1;
    if (Array.isArray(data)) return isDeepEqualArrays(data, other);
    if (data instanceof Map) return isDeepEqualMaps(data, other);
    if (data instanceof Set) return isDeepEqualSets(data, other);
    if (data instanceof Date) return data.getTime() === other.getTime();
    if (data instanceof RegExp) return data.toString() === other.toString();
    if (Object.keys(data).length !== Object.keys(other).length) return !1;
    for (const [key, value] of Object.entries(data))if (!(key in other) || !isDeepEqualImplementation(value, // @ts-expect-error [ts7053] - We already checked that `other` has `key`
    other[key])) return !1;
    return !0;
}
function isDeepEqualArrays(data, other) {
    if (data.length !== other.length) return !1;
    for (const [index, item] of data.entries())if (!isDeepEqualImplementation(item, other[index])) return !1;
    return !0;
}
function isDeepEqualMaps(data, other) {
    if (data.size !== other.size) return !1;
    for (const [key, value] of data.entries())if (!other.has(key) || !isDeepEqualImplementation(value, other.get(key))) return !1;
    return !0;
}
function isDeepEqualSets(data, other) {
    if (data.size !== other.size) return !1;
    const otherCopy = [
        ...other
    ];
    for (const dataItem of data){
        let isFound = !1;
        for (const [index, otherItem] of otherCopy.entries())if (isDeepEqualImplementation(dataItem, otherItem)) {
            isFound = !0, otherCopy.splice(index, 1);
            break;
        }
        if (!isFound) return !1;
    }
    return !0;
}
function isArbitraryTypedObject(object) {
    return isRecord(object) && typeof object._type == "string";
}
function isRecord(value) {
    return !!value && (typeof value == "object" || typeof value == "function");
}
function flattenNestedBlocks(context, blocks) {
    return blocks.flatMap((block)=>{
        if (isBlockContainer(block)) return flattenNestedBlocks(context, [
            block.block
        ]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextBlock"])(context, block)) {
            const hasBlockObjects = block.children.some((child)=>context.schema.blockObjects.some((blockObject)=>blockObject.name === child._type)), hasBlocks = block.children.some((child)=>child._type === "__block" || child._type === "block");
            if (hasBlockObjects || hasBlocks) {
                const splitChildren = getSplitChildren(context, block);
                return splitChildren.length === 1 && splitChildren[0].type === "children" && isDeepEqual(splitChildren[0].children, block.children) ? [
                    block
                ] : splitChildren.flatMap((slice)=>slice.type === "block object" ? [
                        slice.block
                    ] : slice.type === "block" ? flattenNestedBlocks(context, [
                        slice.block
                    ]) : slice.children.length > 0 ? slice.children.every((child)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSpan"])(context, child) && child.text.trim() === "") ? [] : flattenNestedBlocks(context, [
                        {
                            ...block,
                            children: slice.children
                        }
                    ]) : []);
            }
            return [
                block
            ];
        }
        return [
            block
        ];
    });
}
function isBlockContainer(block) {
    return block._type === "__block" && isArbitraryTypedObject(block.block);
}
function getSplitChildren(context, block) {
    return block.children.reduce((slices, child)=>{
        const knownInlineObject = context.schema.inlineObjects.some((inlineObject)=>inlineObject.name === child._type), knownBlockObject = context.schema.blockObjects.some((blockObject)=>blockObject.name === child._type), lastSlice = slices.pop();
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSpan"])(context, child) && !knownInlineObject && knownBlockObject ? [
            ...slices,
            ...lastSlice ? [
                lastSlice
            ] : [],
            {
                type: "block object",
                block: child
            }
        ] : child._type === "__block" ? [
            ...slices,
            ...lastSlice ? [
                lastSlice
            ] : [],
            {
                type: "block object",
                block: child.block
            }
        ] : child._type === "block" ? [
            ...slices,
            ...lastSlice ? [
                lastSlice
            ] : [],
            {
                type: "block",
                block: child
            }
        ] : lastSlice && lastSlice.type === "children" ? [
            ...slices,
            {
                type: "children",
                children: [
                    ...lastSlice.children,
                    child
                ]
            }
        ] : [
            ...slices,
            ...lastSlice ? [
                lastSlice
            ] : [],
            {
                type: "children",
                children: [
                    child
                ]
            }
        ];
    }, []);
}
const PRESERVE_WHITESPACE_TAGS = [
    "pre",
    "textarea",
    "code"
], BLOCK_DEFAULT_STYLE = "normal", DEFAULT_BLOCK = Object.freeze({
    _type: "block",
    markDefs: [],
    style: BLOCK_DEFAULT_STYLE
}), DEFAULT_SPAN = Object.freeze({
    _type: "span",
    marks: []
}), HTML_BLOCK_TAGS = {
    p: DEFAULT_BLOCK,
    blockquote: {
        ...DEFAULT_BLOCK,
        style: "blockquote"
    }
}, HTML_SPAN_TAGS = {
    span: {
        object: "text"
    }
}, HTML_LIST_CONTAINER_TAGS = {
    ol: {
        object: null
    },
    ul: {
        object: null
    }
}, HTML_HEADER_TAGS = {
    h1: {
        ...DEFAULT_BLOCK,
        style: "h1"
    },
    h2: {
        ...DEFAULT_BLOCK,
        style: "h2"
    },
    h3: {
        ...DEFAULT_BLOCK,
        style: "h3"
    },
    h4: {
        ...DEFAULT_BLOCK,
        style: "h4"
    },
    h5: {
        ...DEFAULT_BLOCK,
        style: "h5"
    },
    h6: {
        ...DEFAULT_BLOCK,
        style: "h6"
    }
}, HTML_MISC_TAGS = {
    br: {
        ...DEFAULT_BLOCK,
        style: BLOCK_DEFAULT_STYLE
    }
}, HTML_DECORATOR_TAGS = {
    b: "strong",
    strong: "strong",
    i: "em",
    em: "em",
    u: "underline",
    s: "strike-through",
    strike: "strike-through",
    del: "strike-through",
    code: "code",
    sup: "sup",
    sub: "sub",
    ins: "ins",
    mark: "mark",
    small: "small"
}, HTML_LIST_ITEM_TAGS = {
    li: {
        ...DEFAULT_BLOCK,
        style: BLOCK_DEFAULT_STYLE,
        level: 1,
        listItem: "bullet"
    }
}, ELEMENT_MAP = {
    ...HTML_BLOCK_TAGS,
    ...HTML_SPAN_TAGS,
    ...HTML_LIST_CONTAINER_TAGS,
    ...HTML_LIST_ITEM_TAGS,
    ...HTML_HEADER_TAGS,
    ...HTML_MISC_TAGS
};
[
    ...new Set(Object.values(ELEMENT_MAP).filter((tag)=>"style" in tag).map((tag)=>tag.style))
];
[
    ...new Set(Object.values(HTML_DECORATOR_TAGS))
];
function tagName(el) {
    if (el && "tagName" in el) return el.tagName.toLowerCase();
}
function defaultParseHtml() {
    if (resolveJsType(DOMParser) === "undefined") throw new Error("The native `DOMParser` global which the `Html` deserializer uses by default is not present in this environment. You must supply the `options.parseHtml` function instead.");
    return (html)=>new DOMParser().parseFromString(html, "text/html");
}
function ensureRootIsBlocks(schema, objects) {
    return objects.reduce((blocks, node, i, original)=>{
        if (node._type === "block") return blocks.push(node), blocks;
        if (node._type === "__block") return blocks.push(node.block), blocks;
        const lastBlock = blocks[blocks.length - 1];
        if (i > 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextBlock"])({
            schema
        }, original[i - 1]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextBlock"])({
            schema
        }, lastBlock)) return lastBlock.children.push(node), blocks;
        const block = {
            ...DEFAULT_BLOCK,
            children: [
                node
            ]
        };
        return blocks.push(block), blocks;
    }, []);
}
function isNodeList(node) {
    return Object.prototype.toString.call(node) === "[object NodeList]";
}
function isMinimalSpan(node) {
    return node._type === "span";
}
function isMinimalBlock(node) {
    return node._type === "block";
}
function isPlaceholderDecorator(node) {
    return node._type === "__decorator";
}
function isPlaceholderAnnotation(node) {
    return node._type === "__annotation";
}
function isElement(node) {
    return node.nodeType === 1;
}
;
 //# sourceMappingURL=helpers.js.map
}),
"[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+block-tools@5.0.0_@types+react@19.2.2_debug@4.4.3/node_modules/@portabletext/block-tools/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "htmlToBlocks",
    ()=>htmlToBlocks,
    "normalizeBlock",
    ()=>normalizeBlock,
    "randomKey",
    ()=>randomKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$sanity$2d$bridge$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+sanity-bridge@2.0.0_@types+react@19.2.2_debug@4.4.3/node_modules/@portabletext/sanity-bridge/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+schema@2.1.1/node_modules/@portabletext/schema/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+block-tools@5.0.0_@types+react@19.2.2_debug@4.4.3/node_modules/@portabletext/block-tools/lib/_chunks-es/helpers.js [app-client] (ecmascript)");
;
;
;
var l = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 8290,
    4: 8291,
    5: 8288,
    6: 65279,
    7: 8289,
    8: 119155,
    9: 119156,
    a: 119157,
    b: 119158,
    c: 119159,
    d: 119160,
    e: 119161,
    f: 119162
}, d = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 65279
}, a = {
    0: String.fromCodePoint(d[0]),
    1: String.fromCodePoint(d[1]),
    2: String.fromCodePoint(d[2]),
    3: String.fromCodePoint(d[3])
};
new Array(4).fill(String.fromCodePoint(d[0])).join("");
Object.fromEntries(Object.entries(a).map((t)=>[
        t[1],
        +t[0]
    ]));
Object.fromEntries(Object.entries(l).map((t)=>t.reverse()));
var _ = `${Object.values(l).map((t)=>`\\u{${t.toString(16)}}`).join("")}`, u = new RegExp(`[${_}]{4,}`, "gu");
function D(t) {
    var e;
    return {
        cleaned: t.replace(u, ""),
        encoded: ((e = t.match(u)) == null ? void 0 : e[0]) || ""
    };
}
function M(t) {
    return t && JSON.parse(D(JSON.stringify(t)).cleaned);
}
function keyGenerator() {
    return randomKey(12);
}
function whatwgRNG(length = 16) {
    const rnds8 = new Uint8Array(length);
    return crypto.getRandomValues(rnds8), rnds8;
}
const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex[i] = (i + 256).toString(16).slice(1);
function randomKey(length) {
    return whatwgRNG(length).reduce((str, n)=>str + byteToHex[n], "").slice(0, length);
}
function isWordOnlineHtml(html) {
    return /class="(?:TextRun|NormalTextRun)[^"]*SCXW\d+[^"]*BCX\d+/.test(html) || /class="EOP[^"]*SCXW\d+/.test(html);
}
function isWordOnlineTextRun(el) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) !== "span" ? !1 : el.classList.contains("TextRun") && !el.classList.contains("EOP");
}
function isNormalTextRun(el) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) !== "span" ? !1 : el.classList.contains("NormalTextRun");
}
function isTextRunSpan(el) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) !== "span" ? !1 : el.classList.contains("TextRun") && !el.classList.contains("NormalTextRun") && !el.classList.contains("EOP");
}
function isFindHit(el) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) !== "span" ? !1 : el.classList.contains("FindHit");
}
function isInHeading(el) {
    let current = el;
    for(; current;){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(current) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(current) === "word-online-block" && /^heading \d$/.test(current.getAttribute("data-parastyle") ?? "")) return !0;
        current = current.parentNode;
    }
    return !1;
}
function isInBlockquote(el) {
    let current = el;
    for(; current;){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(current) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(current) === "word-online-block" && current.getAttribute("data-parastyle") === "Quote") return !0;
        current = current.parentNode;
    }
    return !1;
}
function hasStrongFormatting(el) {
    const style = el.getAttribute("style") ?? "";
    return el.classList.contains("MacChromeBold") || /font-weight\s*:\s*bold/.test(style);
}
function hasEmphasisFormatting(el) {
    const style = el.getAttribute("style") ?? "";
    return /font-style\s*:\s*italic/.test(style);
}
function hasUnderlineFormatting(el) {
    const style = el.getAttribute("style") ?? "";
    return el.classList.contains("Underlined") || /text-decoration\s*:\s*underline/.test(style);
}
function hasStrikethroughFormatting(el) {
    const style = el.getAttribute("style") ?? "";
    return el.classList.contains("Strikethrough") || /text-decoration\s*:\s*line-through/.test(style);
}
function hasFormatting(el) {
    return hasStrongFormatting(el) || hasEmphasisFormatting(el) || hasUnderlineFormatting(el) || hasStrikethroughFormatting(el);
}
function preprocessWordOnline(html, doc) {
    if (!isWordOnlineHtml(html)) return doc;
    const paragraphs = Array.from(doc.querySelectorAll('p.Paragraph[role="heading"]'));
    for (const paragraph of paragraphs){
        const ariaLevel = paragraph.getAttribute("aria-level");
        if (ariaLevel) {
            const wrapper = doc.createElement("word-online-block");
            wrapper.setAttribute("data-parastyle", `heading ${ariaLevel}`);
            const parent = paragraph.parentNode;
            if (parent) {
                for(parent.insertBefore(wrapper, paragraph); paragraph.firstChild;)wrapper.appendChild(paragraph.firstChild);
                parent.removeChild(paragraph);
            }
        }
    }
    let child = doc.body.firstChild;
    for(; child;){
        const next = child.nextSibling;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(child) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(child)?.includes("span")) {
            child = next;
            continue;
        }
        const paraStyle = getParaStyle(child);
        if (!paraStyle) {
            child = next;
            continue;
        }
        const group = [
            child
        ];
        let sibling = next;
        for(; sibling && !(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(sibling) || getParaStyle(sibling) !== paraStyle);)group.push(sibling), sibling = sibling.nextSibling;
        const wrapper = doc.createElement("word-online-block");
        wrapper.setAttribute("data-parastyle", paraStyle), doc.body.insertBefore(wrapper, child);
        for (const span of group)wrapper.appendChild(span);
        child = sibling;
    }
    const textRunSpans = Array.from(doc.body.querySelectorAll("span")).filter(isTextRunSpan);
    for (const textRunSpan of textRunSpans){
        const normalTextRuns = Array.from(textRunSpan.childNodes).filter(isNormalTextRun);
        for (const normalTextRun of normalTextRuns){
            let foundNestedSpan = !0;
            for(; foundNestedSpan;){
                const children = Array.from(normalTextRun.childNodes), nestedSpanIndex = children.findIndex((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(node) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(node) === "span" && node.textContent.trim() === "");
                if (nestedSpanIndex === -1) {
                    foundNestedSpan = !1;
                    break;
                }
                const nestedSpan = children.at(nestedSpanIndex);
                if (!nestedSpan) {
                    foundNestedSpan = !1;
                    break;
                }
                const spaceText = nestedSpan.textContent?.replace(/\u00a0/g, " ") ?? "", isSpaceAtBeginning = !children.slice(0, nestedSpanIndex).some((n)=>n.nodeType === 3);
                if (normalTextRun.removeChild(nestedSpan), isSpaceAtBeginning) {
                    const firstTextNode = Array.from(normalTextRun.childNodes).find((n)=>n.nodeType === 3);
                    if (firstTextNode) firstTextNode.textContent = spaceText + (firstTextNode.textContent || "");
                    else {
                        const spaceNode = doc.createTextNode(spaceText);
                        normalTextRun.insertBefore(spaceNode, normalTextRun.firstChild);
                    }
                } else {
                    const nextSibling = textRunSpan.nextSibling, currentHasFormatting = hasFormatting(textRunSpan);
                    if (nextSibling && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(nextSibling) && isTextRunSpan(nextSibling)) {
                        const nextHasFormatting = hasFormatting(nextSibling);
                        if (currentHasFormatting && !nextHasFormatting) {
                            const nextNormalTextRun = Array.from(nextSibling.childNodes).find(isNormalTextRun);
                            if (nextNormalTextRun && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(nextNormalTextRun)) {
                                const firstChild = nextNormalTextRun.firstChild;
                                if (firstChild && firstChild.nodeType === 3) firstChild.textContent = spaceText + (firstChild.textContent ?? "");
                                else {
                                    const spaceNode = doc.createTextNode(spaceText);
                                    nextNormalTextRun.insertBefore(spaceNode, nextNormalTextRun.firstChild);
                                }
                            }
                        } else {
                            const lastTextNode = Array.from(normalTextRun.childNodes).find((n)=>n.nodeType === 3);
                            if (lastTextNode) lastTextNode.textContent = (lastTextNode.textContent ?? "") + spaceText;
                            else {
                                const spaceNode = doc.createTextNode(spaceText);
                                normalTextRun.appendChild(spaceNode);
                            }
                        }
                    } else {
                        const lastTextNode = Array.from(normalTextRun.childNodes).find((n)=>n.nodeType === 3);
                        if (lastTextNode) lastTextNode.textContent = (lastTextNode.textContent ?? "") + spaceText;
                        else {
                            const spaceNode = doc.createTextNode(spaceText);
                            normalTextRun.appendChild(spaceNode);
                        }
                    }
                }
            }
        }
    }
    return doc;
}
function getParaStyle(element) {
    const directStyle = element.getAttribute("data-ccp-parastyle");
    if (directStyle) return directStyle;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(element) === "span" && element.classList.contains("TextRun")) {
        const normalTextRuns = Array.from(element.querySelectorAll(".NormalTextRun"));
        if (normalTextRuns.length > 0) {
            const firstStyle = normalTextRuns[0].getAttribute("data-ccp-parastyle");
            if (firstStyle && normalTextRuns.every((normalTextRun)=>normalTextRun.getAttribute("data-ccp-parastyle") === firstStyle)) return firstStyle;
        }
    }
}
const _XPathResult = {
    BOOLEAN_TYPE: 3,
    ORDERED_NODE_ITERATOR_TYPE: 5,
    UNORDERED_NODE_SNAPSHOT_TYPE: 6
};
function preprocessGDocs(_html, doc) {
    let gDocsRootOrSiblingNode = doc.evaluate('//*[@id and contains(@id, "docs-internal-guid")]', doc, null, _XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext();
    if (gDocsRootOrSiblingNode) {
        const isWrappedRootTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(gDocsRootOrSiblingNode) === "b";
        isWrappedRootTag || (gDocsRootOrSiblingNode = doc.body);
        const childNodes = doc.evaluate("//*", doc, null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
        for(let i = childNodes.snapshotLength - 1; i >= 0; i--){
            const elm = childNodes.snapshotItem(i);
            elm?.setAttribute("data-is-google-docs", "true"), (elm?.parentElement === gDocsRootOrSiblingNode || !isWrappedRootTag && elm.parentElement === doc.body) && (elm?.setAttribute("data-is-root-node", "true"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(elm)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(elm) === "li" && elm.firstChild && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(elm?.firstChild) === "img" && elm.removeChild(elm.firstChild);
        }
        return isWrappedRootTag && doc.body.firstElementChild?.replaceWith(...Array.from(gDocsRootOrSiblingNode.childNodes)), doc;
    }
    return doc;
}
const unwantedWordDocumentPaths = [
    "/html/text()",
    "/html/head/text()",
    "/html/body/text()",
    "/html/body/ul/text()",
    "/html/body/ol/text()",
    "//comment()",
    "//style",
    "//xml",
    "//script",
    "//meta",
    "//link"
];
function preprocessHTML(_html, doc) {
    const bodyTextNodes = doc.evaluate("/html/body/text()", doc, null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for(let i = bodyTextNodes.snapshotLength - 1; i >= 0; i--){
        const node = bodyTextNodes.snapshotItem(i), text = node.textContent || "";
        if (text.replace(/[^\S\n]+$/g, "")) {
            const newNode = doc.createElement("span");
            newNode.appendChild(doc.createTextNode(text)), node.parentNode?.replaceChild(newNode, node);
        } else node.parentNode?.removeChild(node);
    }
    const unwantedNodes = doc.evaluate(unwantedWordDocumentPaths.join("|"), doc, null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for(let i = unwantedNodes.snapshotLength - 1; i >= 0; i--){
        const unwanted = unwantedNodes.snapshotItem(i);
        unwanted && unwanted.parentNode?.removeChild(unwanted);
    }
    return doc;
}
function preprocessNotion(html, doc) {
    const NOTION_REGEX = /<!-- notionvc:.*?-->/g;
    if (html.match(NOTION_REGEX)) {
        const childNodes = doc.evaluate("//*", doc, null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
        for(let i = childNodes.snapshotLength - 1; i >= 0; i--)childNodes.snapshotItem(i)?.setAttribute("data-is-notion", "true");
        return doc;
    }
    return doc;
}
const BLOCK_CONTAINER_ELEMENTS = [
    "body",
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr",
    "ul",
    "ol"
];
function preprocessWhitespace(_2, doc) {
    function processNode(node) {
        if (node.nodeType === _XPathResult.BOOLEAN_TYPE && !__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESERVE_WHITESPACE_TAGS"].includes(node.parentElement?.tagName.toLowerCase() || "")) {
            const normalized = node.textContent?.replace(/\s\s+/g, " ").replace(/[\r\n]+/g, " ") || "", parentTag = node.parentElement?.tagName.toLowerCase();
            parentTag && BLOCK_CONTAINER_ELEMENTS.includes(parentTag) && normalized.trim() === "" ? node.parentNode?.removeChild(node) : node.textContent = normalized;
        } else for(let i = node.childNodes.length - 1; i >= 0; i--)processNode(node.childNodes[i]);
    }
    return processNode(doc.body), doc;
}
const WORD_HTML_REGEX = /(class="?Mso|style=(?:"|')[^"]*?\bmso-|w:WordDocument|<o:\w+>|<\/font>)/, unwantedPaths = [
    "//o:p",
    "//span[@style='mso-list:Ignore']",
    "//span[@style='mso-list: Ignore']"
], mappedPaths = [
    "//p[@class='MsoTocHeading']",
    "//p[@class='MsoTitle']",
    "//p[@class='MsoToaHeading']",
    "//p[@class='MsoSubtitle']",
    "//span[@class='MsoSubtleEmphasis']",
    "//span[@class='MsoIntenseEmphasis']"
], elementMap = {
    MsoTocHeading: [
        "h3"
    ],
    MsoTitle: [
        "h1"
    ],
    MsoToaHeading: [
        "h2"
    ],
    MsoSubtitle: [
        "h5"
    ],
    MsoSubtleEmphasis: [
        "span",
        "em"
    ],
    MsoIntenseEmphasis: [
        "span",
        "em",
        "strong"
    ]
};
function isWordHtml(html) {
    return WORD_HTML_REGEX.test(html);
}
function preprocessWord(html, doc) {
    if (!isWordHtml(html)) return doc;
    const unwantedNodes = doc.evaluate(unwantedPaths.join("|"), doc, (prefix)=>prefix === "o" ? "urn:schemas-microsoft-com:office:office" : null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for(let i = unwantedNodes.snapshotLength - 1; i >= 0; i--){
        const unwanted = unwantedNodes.snapshotItem(i);
        unwanted?.parentNode && unwanted.parentNode.removeChild(unwanted);
    }
    const mappedElements = doc.evaluate(mappedPaths.join("|"), doc, null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for(let i = mappedElements.snapshotLength - 1; i >= 0; i--){
        const mappedElm = mappedElements.snapshotItem(i), tags = elementMap[mappedElm.className], text = doc.createTextNode(mappedElm.textContent || "");
        if (!tags) continue;
        const parentElement = doc.createElement(tags[0]);
        let parent = parentElement, child = parentElement;
        tags.slice(1).forEach((tag)=>{
            child = doc.createElement(tag), parent.appendChild(child), parent = child;
        }), child.appendChild(text), mappedElm?.parentNode?.replaceChild(parentElement, mappedElm);
    }
    return doc;
}
const preprocessors = [
    preprocessWhitespace,
    preprocessNotion,
    preprocessWord,
    preprocessWordOnline,
    preprocessGDocs,
    preprocessHTML
];
function mapParaStyleToBlockStyle(schema, paraStyle) {
    const blockStyle = {
        "heading 1": "h1",
        "heading 2": "h2",
        "heading 3": "h3",
        "heading 4": "h4",
        "heading 5": "h5",
        "heading 6": "h6",
        Quote: "blockquote"
    }[paraStyle] ?? "normal";
    return schema.styles.find((style)=>style.name === blockStyle)?.name;
}
function createWordOnlineRules(schema, options) {
    return [
        // Image rule - handles bare Word Online <img> tags with WACImage class
        {
            deserialize (el) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) !== "img") return;
                const classNameRaw = el.className;
                let className = "";
                if (typeof classNameRaw == "string" ? className = classNameRaw : classNameRaw && typeof classNameRaw == "object" && (className = classNameRaw.baseVal || ""), !className.includes("WACImage")) return;
                const src = el.getAttribute("src") ?? void 0, alt = el.getAttribute("alt") ?? void 0, props = Object.fromEntries(Array.from(el.attributes).map((attr)=>[
                        attr.name,
                        attr.value
                    ])), image = options.matchers?.image?.({
                    context: {
                        schema,
                        keyGenerator: options.keyGenerator ?? keyGenerator
                    },
                    props: {
                        ...props,
                        ...src ? {
                            src
                        } : {},
                        ...alt ? {
                            alt
                        } : {}
                    }
                });
                if (image) return {
                    _type: "__block",
                    block: image
                };
            }
        },
        // Image rule - handles Word Online images wrapped in WACImageContainer
        {
            deserialize (el) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el)) return;
                const classNameRaw = el.className;
                let className = "";
                if (typeof classNameRaw == "string" ? className = classNameRaw : classNameRaw && typeof classNameRaw == "object" && (className = classNameRaw.baseVal || ""), !className.includes("WACImageContainer")) return;
                const img = el.querySelector("img");
                if (!img) return;
                const src = img.getAttribute("src") ?? void 0, alt = img.getAttribute("alt") ?? void 0, props = Object.fromEntries(Array.from(img.attributes).map((attr)=>[
                        attr.name,
                        attr.value
                    ])), isInsideListItem = el.closest("li") !== null;
                if (el.closest("p") === null || isInsideListItem) {
                    const inlineImage = options.matchers?.inlineImage?.({
                        context: {
                            schema,
                            keyGenerator: options.keyGenerator ?? keyGenerator
                        },
                        props: {
                            ...props,
                            ...src ? {
                                src
                            } : {},
                            ...alt ? {
                                alt
                            } : {}
                        }
                    });
                    if (inlineImage) return inlineImage;
                }
                const image = options.matchers?.image?.({
                    context: {
                        schema,
                        keyGenerator: options.keyGenerator ?? keyGenerator
                    },
                    props: {
                        ...props,
                        ...src ? {
                            src
                        } : {},
                        ...alt ? {
                            alt
                        } : {}
                    }
                });
                if (image) return {
                    _type: "__block",
                    block: image
                };
            }
        },
        // List item rule - handles <li> elements with aria-level
        {
            deserialize (el, next) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) !== "li") return;
                const ariaLevel = el.getAttribute("data-aria-level");
                if (!ariaLevel) return;
                const listItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el.parentNode) === "ol" ? "number" : "bullet";
                let childNodesToProcess = el.childNodes, blockStyle = "normal";
                if (el.childNodes.length === 1 && el.firstChild && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el.firstChild)) {
                    const childTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el.firstChild);
                    if (childTag && (__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_BLOCK_TAGS"][childTag] || __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_HEADER_TAGS"][childTag] || childTag === "word-online-block")) {
                        if (childTag === "word-online-block") {
                            const paraStyle = el.firstChild.getAttribute("data-parastyle"), foundBlockStyle = paraStyle ? mapParaStyleToBlockStyle(schema, paraStyle) : void 0;
                            foundBlockStyle && (blockStyle = foundBlockStyle);
                        }
                        childNodesToProcess = el.firstChild.childNodes;
                    }
                }
                const children = next(childNodesToProcess);
                let childArray = Array.isArray(children) ? children : [
                    children
                ].filter(Boolean);
                for(; childArray.length > 0;){
                    const lastChild = childArray[childArray.length - 1];
                    if (lastChild && typeof lastChild == "object" && "text" in lastChild) {
                        const text = lastChild.text.trimEnd();
                        if (text === "") childArray = childArray.slice(0, -1);
                        else if (text !== lastChild.text) {
                            lastChild.text = text;
                            break;
                        } else break;
                    } else break;
                }
                return {
                    _type: schema.block.name,
                    children: childArray,
                    markDefs: [],
                    style: blockStyle,
                    listItem,
                    level: parseInt(ariaLevel, 10)
                };
            }
        },
        // Block style rule - handles paragraph styles like Quote
        // The preprocessor wraps grouped NormalTextRun spans in a word-online-block element
        {
            deserialize (el, next) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el)) return;
                const paraStyle = el.getAttribute("data-parastyle"), blockStyle = paraStyle ? mapParaStyleToBlockStyle(schema, paraStyle) : void 0;
                if (!blockStyle) return;
                const children = next(el.childNodes);
                return {
                    _type: schema.block.name,
                    style: blockStyle,
                    markDefs: [],
                    children: Array.isArray(children) ? children : children ? [
                        children
                    ] : []
                };
            }
        },
        // TextRun rule
        {
            deserialize (el) {
                if (isWordOnlineTextRun(el)) {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) || !el.textContent) return;
                    const text = Array.from(el.childNodes).filter((node)=>isNormalTextRun(node) || isFindHit(node)).map((span2)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(span2) ? span2.textContent ?? "" : "").join("");
                    if (!text) return;
                    const span = {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPAN"],
                        marks: [],
                        text
                    };
                    if (hasStrongFormatting(el) && span.marks.push("strong"), hasEmphasisFormatting(el) && !isInHeading(el) && !isInBlockquote(el) && span.marks.push("em"), hasUnderlineFormatting(el)) if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.parentElement && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el.parentElement) === "a") {
                        const linkElement = el.parentElement;
                        if (linkElement) {
                            const prevSibling = linkElement.previousSibling, nextSibling = linkElement.nextSibling, hasPrevUnderline = prevSibling && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(prevSibling) && hasUnderlineFormatting(prevSibling), hasNextUnderline = nextSibling && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(nextSibling) && hasUnderlineFormatting(nextSibling);
                            (hasPrevUnderline || hasNextUnderline) && span.marks.push("underline");
                        }
                    } else span.marks.push("underline");
                    return hasStrikethroughFormatting(el) && span.marks.push("strike-through"), span;
                }
            }
        }
    ];
}
const LIST_CONTAINER_TAGS = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_LIST_CONTAINER_TAGS"]);
function isEmphasis$1(el) {
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.getAttribute("style");
    return /font-style\s*:\s*italic/.test(style || "");
}
function isStrong$1(el) {
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.getAttribute("style");
    return /font-weight\s*:\s*700/.test(style || "");
}
function isUnderline$1(el) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el.parentNode) === "a") return !1;
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.getAttribute("style");
    return /text-decoration\s*:\s*underline/.test(style || "");
}
function isStrikethrough(el) {
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.getAttribute("style");
    return /text-decoration\s*:\s*(?:.*line-through.*;)/.test(style || "");
}
function isGoogleDocs(el) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && !!el.getAttribute("data-is-google-docs");
}
function isRootNode(el) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && !!el.getAttribute("data-is-root-node");
}
function getListItemStyle$1(el) {
    const parentTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el.parentNode);
    if (!(parentTag && !LIST_CONTAINER_TAGS.includes(parentTag))) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el.parentNode) === "ul" ? "bullet" : "number";
}
function getListItemLevel$1(el) {
    let level = 0;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "li") {
        let parentNode = el.parentNode;
        for(; parentNode;){
            const parentTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(parentNode);
            parentTag && LIST_CONTAINER_TAGS.includes(parentTag) && level++, parentNode = parentNode.parentNode;
        }
    } else level = 1;
    return level;
}
const blocks = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_BLOCK_TAGS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_HEADER_TAGS"]
};
function getBlockStyle(schema, el) {
    const childTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el.firstChild), block = childTag && blocks[childTag];
    return block ? schema.styles.some((style)=>style.name === block.style) ? block.style : __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_DEFAULT_STYLE"] : __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_DEFAULT_STYLE"];
}
function createGDocsRules(schema) {
    return [
        {
            deserialize (el, next) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "span" && isGoogleDocs(el)) {
                    if (!el.textContent) return !el.previousSibling && !el.nextSibling && el.setAttribute("data-lonely-child", "true"), next(el.childNodes);
                    const span = {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPAN"],
                        marks: [],
                        text: el.textContent
                    };
                    return isStrong$1(el) && span.marks.push("strong"), isUnderline$1(el) && span.marks.push("underline"), isStrikethrough(el) && span.marks.push("strike-through"), isEmphasis$1(el) && span.marks.push("em"), span;
                }
            }
        },
        {
            deserialize (el, next) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "li" && isGoogleDocs(el)) return {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_BLOCK"],
                    listItem: getListItemStyle$1(el),
                    level: getListItemLevel$1(el),
                    style: getBlockStyle(schema, el),
                    children: next(el.firstChild?.childNodes || [])
                };
            }
        },
        {
            deserialize (el) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "br" && isGoogleDocs(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.classList.contains("apple-interchange-newline")) return {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPAN"],
                    text: ""
                };
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "br" && isGoogleDocs(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el?.parentNode?.textContent === "") return {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPAN"],
                    text: ""
                };
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "br" && isGoogleDocs(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && isRootNode(el)) return {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPAN"],
                    text: ""
                };
            }
        }
    ];
}
const whitespaceTextNodeRule = {
    deserialize (node) {
        return node.nodeName === "#text" && isWhitespaceTextNode(node) ? {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPAN"],
            marks: [],
            text: (node.textContent ?? "").replace(/\s\s+/g, " ")
        } : void 0;
    }
};
function isWhitespaceTextNode(node) {
    return (node.nodeType === 3 && (node.textContent || "").replace(/[\r\n]/g, " ").replace(/\s\s+/g, " ") === " " && node.nextSibling && node.nextSibling.nodeType !== 3 && node.previousSibling && node.previousSibling.nodeType !== 3 || node.textContent !== " ") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(node.parentNode) !== "body";
}
function resolveListItem(schema, listNodeTagName) {
    if (listNodeTagName === "ul" && schema.lists.some((list)=>list.name === "bullet")) return "bullet";
    if (listNodeTagName === "ol" && schema.lists.some((list)=>list.name === "number")) return "number";
}
function createHTMLRules(schema, options) {
    return [
        whitespaceTextNodeRule,
        {
            // Pre element
            deserialize (el) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) !== "pre") return;
                const isCodeEnabled = schema.styles.some((style)=>style.name === "code");
                return {
                    _type: "block",
                    style: "normal",
                    markDefs: [],
                    children: [
                        {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPAN"],
                            marks: isCodeEnabled ? [
                                "code"
                            ] : [],
                            text: el.textContent || ""
                        }
                    ]
                };
            }
        },
        // Blockquote element
        {
            deserialize (el, next) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) !== "blockquote") return;
                const blocks2 = {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_BLOCK_TAGS"],
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_HEADER_TAGS"]
                };
                delete blocks2.blockquote;
                const nonBlockquoteBlocks = Object.keys(blocks2), children = [];
                return el.childNodes.forEach((node, index)=>{
                    if (el.ownerDocument) if (node.nodeType === 1 && nonBlockquoteBlocks.includes(node.localName.toLowerCase())) {
                        const span = el.ownerDocument.createElement("span"), previousChild = children[children.length - 1];
                        previousChild && previousChild.nodeType === 3 && previousChild.textContent?.trim() && span.appendChild(el.ownerDocument.createTextNode("\r")), node.childNodes.forEach((cn)=>{
                            span.appendChild(cn.cloneNode(!0));
                        }), index !== el.childNodes.length && span.appendChild(el.ownerDocument.createTextNode("\r")), children.push(span);
                    } else children.push(node);
                }), {
                    _type: "block",
                    style: "blockquote",
                    markDefs: [],
                    children: next(children)
                };
            }
        },
        // Block elements
        {
            deserialize (el, next) {
                const blocks2 = {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_BLOCK_TAGS"],
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_HEADER_TAGS"]
                }, tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el);
                let block = tag ? blocks2[tag] : void 0;
                if (!block) return;
                if (el.parentNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el.parentNode) === "li") return next(el.childNodes);
                const blockStyle = block.style;
                return schema.styles.some((style)=>style.name === blockStyle) || (block = __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_BLOCK"]), {
                    ...block,
                    children: next(el.childNodes)
                };
            }
        },
        // Ignore span tags
        {
            deserialize (el, next) {
                const tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el);
                if (!(!tag || !(tag in __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_SPAN_TAGS"]))) return next(el.childNodes);
            }
        },
        // Ignore div tags
        {
            deserialize (el, next) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "div") return next(el.childNodes);
            }
        },
        // Ignore list containers
        {
            deserialize (el, next) {
                const tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el);
                if (!(!tag || !(tag in __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_LIST_CONTAINER_TAGS"]))) return next(el.childNodes);
            }
        },
        // Deal with br's
        {
            deserialize (el) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "br") return {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPAN"],
                    text: `
`
                };
            }
        },
        // Deal with list items
        {
            deserialize (el, next, block) {
                const tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el), listItem = tag ? __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_LIST_ITEM_TAGS"][tag] : void 0, parentTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el.parentNode) || "";
                if (!listItem || !el.parentNode || !__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_LIST_CONTAINER_TAGS"][parentTag]) return;
                const enabledListItem = resolveListItem(schema, parentTag);
                return enabledListItem ? (listItem.listItem = enabledListItem, {
                    ...listItem,
                    children: next(el.childNodes)
                }) : block({
                    _type: "block",
                    children: next(el.childNodes)
                });
            }
        },
        // Deal with decorators - this is a limited set of known html elements that we know how to deserialize
        {
            deserialize (el, next) {
                const decorator = __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_DECORATOR_TAGS"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) || ""];
                if (!(!decorator || !schema.decorators.some((decoratorType)=>decoratorType.name === decorator))) return {
                    _type: "__decorator",
                    name: decorator,
                    children: next(el.childNodes)
                };
            }
        },
        // Special case for hyperlinks, add annotation (if allowed by schema),
        // If not supported just write out the link text and href in plain text.
        {
            deserialize (el, next) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) !== "a") return;
                const linkEnabled = schema.annotations.some((annotation)=>annotation.name === "link"), href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.getAttribute("href");
                return href ? linkEnabled ? {
                    _type: "__annotation",
                    markDef: {
                        _key: options.keyGenerator ? options.keyGenerator() : keyGenerator(),
                        _type: "link",
                        href
                    },
                    children: next(el.childNodes)
                } : el.appendChild(el.ownerDocument.createTextNode(` (${href})`)) && next(el.childNodes) : next(el.childNodes);
            }
        },
        {
            deserialize (el, next) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "td" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "th")) return {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_BLOCK"],
                    children: next(el.childNodes)
                };
            }
        },
        {
            deserialize (el) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "img") {
                    const src = el.getAttribute("src") ?? void 0, alt = el.getAttribute("alt") ?? void 0, props = Object.fromEntries(Array.from(el.attributes).map((attr)=>[
                            attr.name,
                            attr.value
                        ])), ancestorOfLonelyChild = el?.parentElement?.parentElement?.getAttribute("data-lonely-child"), ancestorOfListItem = el.closest("li") !== null;
                    if (ancestorOfLonelyChild && !ancestorOfListItem) {
                        const image2 = options.matchers?.image?.({
                            context: {
                                schema,
                                keyGenerator: options.keyGenerator ?? keyGenerator
                            },
                            props: {
                                ...props,
                                ...src ? {
                                    src
                                } : {},
                                ...alt ? {
                                    alt
                                } : {}
                            }
                        });
                        if (image2) return {
                            _type: "__block",
                            block: image2
                        };
                    }
                    const inlineImage = options.matchers?.inlineImage?.({
                        context: {
                            schema,
                            keyGenerator: options.keyGenerator ?? keyGenerator
                        },
                        props: {
                            ...props,
                            ...src ? {
                                src
                            } : {},
                            ...alt ? {
                                alt
                            } : {}
                        }
                    });
                    if (inlineImage) return inlineImage;
                    const image = options.matchers?.image?.({
                        context: {
                            schema,
                            keyGenerator: options.keyGenerator ?? keyGenerator
                        },
                        props: {
                            ...props,
                            ...src ? {
                                src
                            } : {},
                            ...alt ? {
                                alt
                            } : {}
                        }
                    });
                    if (image) return {
                        _type: "__block",
                        block: image
                    };
                }
            }
        }
    ];
}
function isEmphasis(el) {
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.getAttribute("style");
    return /font-style:italic/.test(style || "");
}
function isStrong(el) {
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.getAttribute("style");
    return /font-weight:700/.test(style || "") || /font-weight:600/.test(style || "");
}
function isUnderline(el) {
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.getAttribute("style");
    return /text-decoration:underline/.test(style || "");
}
function isNotion(el) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && !!el.getAttribute("data-is-notion");
}
function createNotionRules() {
    return [
        {
            deserialize (el) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el) === "span" && isNotion(el)) {
                    const span = {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SPAN"],
                        marks: [],
                        text: el.textContent
                    };
                    return isStrong(el) && span.marks.push("strong"), isUnderline(el) && span.marks.push("underline"), isEmphasis(el) && span.marks.push("em"), span;
                }
            }
        }
    ];
}
function getListItemStyle(el) {
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.getAttribute("style");
    if (style && style.match(/lfo\d+/)) return style.match("lfo1") ? "number" : "bullet";
}
function getListItemLevel(el) {
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && el.getAttribute("style");
    if (!style) return;
    const levelMatch = style.match(/level\d+/);
    if (!levelMatch) return;
    const [level] = levelMatch[0].match(/\d/) || [];
    return (level ? Number.parseInt(level, 10) : 1) || 1;
}
function isWordListElement(el) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el)) return !1;
    if (el.className && (el.className === "MsoListParagraphCxSpFirst" || el.className === "MsoListParagraphCxSpMiddle" || el.className === "MsoListParagraphCxSpLast")) return !0;
    const style = el.getAttribute("style");
    return !!(style && /mso-list:\s*l\d+\s+level\d+\s+lfo\d+/.test(style));
}
function getHeadingStyle(el) {
    const tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el);
    if (tag && __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_HEADER_TAGS"][tag]) return __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_HEADER_TAGS"][tag]?.style;
}
function createWordRules() {
    return [
        {
            deserialize (el, next) {
                const tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(el);
                if ((tag === "p" || __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTML_HEADER_TAGS"][tag || ""]) && isWordListElement(el)) {
                    const headingStyle = getHeadingStyle(el);
                    return {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_BLOCK"],
                        listItem: getListItemStyle(el),
                        level: getListItemLevel(el),
                        style: headingStyle || __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOCK_DEFAULT_STYLE"],
                        children: next(el.childNodes)
                    };
                }
            }
        }
    ];
}
function createRules(schema, options) {
    return [
        ...createWordRules(),
        ...createWordOnlineRules(schema, options),
        ...createNotionRules(),
        ...createGDocsRules(schema),
        ...createHTMLRules(schema, options)
    ];
}
function trimWhitespace(context, mode, blocks2) {
    const trimmedBlocks = [];
    let consecutiveEmptyCount = 0;
    for (const block of blocks2){
        const trimmedBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextBlock"])(context, block) ? trimTextBlockWhitespace(block) : block;
        if (mode === "preserve") {
            trimmedBlocks.push(trimmedBlock);
            continue;
        }
        if (mode === "remove") {
            if (isEmptyTextBlock(context, trimmedBlock)) continue;
            trimmedBlocks.push(trimmedBlock);
            continue;
        }
        if (mode === "normalize") {
            if (isEmptyTextBlock(context, trimmedBlock)) {
                consecutiveEmptyCount++, consecutiveEmptyCount === 1 && trimmedBlocks.push(trimmedBlock);
                continue;
            }
            trimmedBlocks.push(trimmedBlock), consecutiveEmptyCount = 0;
        }
    }
    return trimmedBlocks;
}
function isEmptyTextBlock(context, block) {
    return !(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextBlock"])(context, block) || block.children.some((child)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSpan"])(context, child) || child.text.trim() !== ""));
}
function trimTextBlockWhitespace(block) {
    let index = 0;
    for (const child of block.children){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMinimalSpan"])(child)) {
            index++;
            continue;
        }
        const nextChild = nextSpan(block, index), prevChild = prevSpan(block, index);
        index === 0 && (child.text = child.text.replace(/^[^\S\n]+/g, "")), index === block.children.length - 1 && (child.text = child.text.replace(/[^\S\n]+$/g, "")), /\s/.test(child.text.slice(Math.max(0, child.text.length - 1))) && nextChild && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMinimalSpan"])(nextChild) && /\s/.test(nextChild.text.slice(0, 1)) && (child.text = child.text.replace(/[^\S\n]+$/g, "")), /\s/.test(child.text.slice(0, 1)) && prevChild && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMinimalSpan"])(prevChild) && /\s/.test(prevChild.text.slice(Math.max(0, prevChild.text.length - 1))) && (child.text = child.text.replace(/^[^\S\n]+/g, "")), child.text || block.children.splice(index, 1), prevChild && Array.isArray(prevChild.marks) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEqualMarks"])(prevChild.marks, child.marks) && isWhiteSpaceChar(child.text) ? (prevChild.text += " ", block.children.splice(index, 1)) : nextChild && Array.isArray(nextChild.marks) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEqualMarks"])(nextChild.marks, child.marks) && isWhiteSpaceChar(child.text) && (nextChild.text = ` ${nextChild.text}`, block.children.splice(index, 1)), index++;
    }
    return block;
}
function nextSpan(block, index) {
    const next = block.children[index + 1];
    return next && next._type === "span" ? next : null;
}
function prevSpan(block, index) {
    const prev = block.children[index - 1];
    return prev && prev._type === "span" ? prev : null;
}
function isWhiteSpaceChar(text) {
    return [
        "\xA0",
        " "
    ].includes(text);
}
class HtmlDeserializer {
    keyGenerator;
    schema;
    rules;
    parseHtml;
    whitespaceMode;
    _markDefs = [];
    /**
   * Create a new serializer respecting a Sanity block content type's schema
   *
   * @param blockContentType - Schema type for array containing _at least_ a block child type
   * @param options - Options for the deserialization process
   */ constructor(schema, options = {}){
        const { rules = [], unstable_whitespaceOnPasteMode = "preserve" } = options, standardRules = createRules(schema, {
            keyGenerator: options.keyGenerator,
            matchers: options.matchers
        });
        this.schema = schema, this.keyGenerator = options.keyGenerator ?? keyGenerator, this.rules = [
            ...rules,
            ...standardRules
        ], this.whitespaceMode = unstable_whitespaceOnPasteMode;
        const parseHtml = options.parseHtml || (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultParseHtml"])();
        this.parseHtml = (html)=>{
            const cleanHTML = M(html), doc = parseHtml(cleanHTML);
            for (const processor of preprocessors)processor(cleanHTML, doc);
            return doc.body;
        };
    }
    /**
   * Deserialize HTML.
   *
   * @param html - The HTML to deserialize, as a string
   * @returns Array of blocks - either portable text blocks or other allowed blocks
   */ deserialize = (html)=>{
        this._markDefs = [];
        const { parseHtml } = this, fragment = parseHtml(html), children = Array.from(fragment.childNodes), blocks2 = trimWhitespace({
            schema: this.schema
        }, this.whitespaceMode, (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenNestedBlocks"])({
            schema: this.schema
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureRootIsBlocks"])(this.schema, this.deserializeElements(children))));
        return this._markDefs.length > 0 && blocks2.filter((block)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextBlock"])({
                schema: this.schema
            }, block)).forEach((block)=>{
            block.markDefs = block.markDefs || [], block.markDefs = block.markDefs.concat(this._markDefs.filter((def)=>block.children.flatMap((child)=>child.marks || []).includes(def._key)));
        }), blocks2.map((block)=>(block._type === "block" && (block._type = this.schema.block.name), block));
    };
    /**
   * Deserialize an array of DOM elements.
   *
   * @param elements - Array of DOM elements to deserialize
   * @returns
   */ deserializeElements = (elements = [])=>{
        let nodes = [];
        return elements.forEach((element)=>{
            nodes = nodes.concat(this.deserializeElement(element));
        }), nodes;
    };
    /**
   * Deserialize a DOM element
   *
   * @param element - Deserialize a DOM element
   * @returns
   */ deserializeElement = (element)=>{
        const next = (elements)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeList"])(elements)) return this.deserializeElements(Array.from(elements));
            if (Array.isArray(elements)) return this.deserializeElements(elements);
            if (elements) return this.deserializeElement(elements);
        }, block = (props)=>({
                _type: "__block",
                block: props
            });
        let node;
        for(let i = 0; i < this.rules.length; i++){
            const rule = this.rules[i];
            if (!rule.deserialize) continue;
            const ret = rule.deserialize(element, next, block), type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveJsType"])(ret);
            if (type !== "array" && type !== "object" && type !== "null" && type !== "undefined") throw new Error(`A rule returned an invalid deserialized representation: "${node}".`);
            if (ret !== void 0) {
                {
                    if (ret === null) throw new Error("Deserializer rule returned `null`");
                    Array.isArray(ret) ? node = ret : (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlaceholderDecorator"])(ret) ? node = this.deserializeDecorator(ret) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlaceholderAnnotation"])(ret) ? node = this.deserializeAnnotation(ret) : node = ret;
                }
                if (ret && !Array.isArray(ret) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMinimalBlock"])(ret) && "listItem" in ret) {
                    let parent = element.parentNode?.parentNode;
                    for(; parent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagName"])(parent) === "li";)parent = parent.parentNode?.parentNode, ret.level = ret.level ? ret.level + 1 : 1;
                }
                ret && !Array.isArray(ret) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMinimalBlock"])(ret) && ret.style === "blockquote" && ret.children.forEach((child, index)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMinimalSpan"])(child) && child.text === "\r" && (child.text = `
`, (index === 0 || index === ret.children.length - 1) && ret.children.splice(index, 1));
                });
                break;
            }
        }
        return node || next(element.childNodes) || [];
    };
    /**
   * Deserialize a `__decorator` type
   * (an internal made up type to process decorators exclusively)
   *
   * @param decorator -
   * @returns array of ...
   */ deserializeDecorator = (decorator)=>{
        const { name } = decorator, applyDecorator = (node)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlaceholderDecorator"])(node)) return this.deserializeDecorator(node);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMinimalSpan"])(node)) node.marks = node.marks || [], node.text.trim() && node.marks.unshift(name);
            else if ("children" in node && Array.isArray(node.children)) {
                const block = node;
                block.children = block.children.map(applyDecorator);
            }
            return node;
        };
        return decorator.children.reduce((children, node)=>{
            const ret = applyDecorator(node);
            return Array.isArray(ret) ? children.concat(ret) : (children.push(ret), children);
        }, []);
    };
    /**
   * Deserialize a `__annotation` object.
   * (an internal made up type to process annotations exclusively)
   *
   * @param annotation -
   * @returns Array of...
   */ deserializeAnnotation = (annotation)=>{
        const { markDef } = annotation;
        this._markDefs.push(markDef);
        const applyAnnotation = (node)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlaceholderAnnotation"])(node)) return this.deserializeAnnotation(node);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMinimalSpan"])(node)) node.marks = node.marks || [], node.text.trim() && node.marks.unshift(markDef._key);
            else if ("children" in node && Array.isArray(node.children)) {
                const block = node;
                block.children = block.children.map(applyAnnotation);
            }
            return node;
        };
        return annotation.children.reduce((children, node)=>{
            const ret = applyAnnotation(node);
            return Array.isArray(ret) ? children.concat(ret) : (children.push(ret), children);
        }, []);
    };
}
function normalizeBlock(node, options = {}) {
    const schema = {
        block: {
            name: options.blockTypeName || "block"
        },
        span: {
            name: "span"
        },
        styles: [],
        lists: [],
        decorators: [],
        annotations: [],
        blockObjects: [],
        inlineObjects: []
    };
    if (node._type !== (options.blockTypeName || "block")) return "_key" in node ? node : {
        ...node,
        _key: options.keyGenerator ? options.keyGenerator() : keyGenerator()
    };
    const block = {
        _key: options.keyGenerator ? options.keyGenerator() : keyGenerator(),
        children: [],
        markDefs: [],
        ...node
    }, lastChild = block.children[block.children.length - 1];
    if (!lastChild) return block.children = [
        {
            _type: "span",
            _key: options.keyGenerator ? options.keyGenerator() : keyGenerator(),
            text: "",
            marks: []
        }
    ], block;
    const usedMarkDefs = [], allowedDecorators = options.allowedDecorators && Array.isArray(options.allowedDecorators) ? options.allowedDecorators : !1;
    return block.children = block.children.reduce((acc, child)=>{
        const previousChild = acc[acc.length - 1];
        return previousChild && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSpan"])({
            schema
        }, child) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSpan"])({
            schema
        }, previousChild) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$block$2d$tools$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$block$2d$tools$2f$lib$2f$_chunks$2d$es$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEqualMarks"])(previousChild.marks, child.marks) ? (lastChild && lastChild === child && child.text === "" && block.children.length > 1 || (previousChild.text += child.text), acc) : (acc.push(child), acc);
    }, []).map((child)=>{
        if (!child) throw new Error("missing child");
        return child._key = options.keyGenerator ? options.keyGenerator() : keyGenerator(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSpan"])({
            schema
        }, child) && (child.marks ? allowedDecorators && (child.marks = child.marks.filter((mark)=>{
            const isAllowed = allowedDecorators.includes(mark), isUsed = block.markDefs?.some((def)=>def._key === mark);
            return isAllowed || isUsed;
        })) : child.marks = [], usedMarkDefs.push(...child.marks)), child;
    }), block.markDefs = (block.markDefs || []).filter((markDef)=>usedMarkDefs.includes(markDef._key)), block;
}
function htmlToBlocks(html, schemaType, options = {}) {
    const schema = isSanitySchema(schemaType) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$portabletext$2f$sanity$2d$bridge$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitySchemaToPortableTextSchema"])(schemaType) : schemaType;
    return new HtmlDeserializer(schema, options).deserialize(html).map((block)=>normalizeBlock(block, {
            keyGenerator: options.keyGenerator
        }));
}
function isSanitySchema(schema) {
    return schema.hasOwnProperty("jsonType");
}
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=5dfbc_%40portabletext_block-tools_lib_ba3c283e._.js.map