module.exports = [
"[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+editor@4.2.2_@portabletext+sanity-bridge@2.0.0_@types+react@19.2.2__@type_9e5c4a470ba434d0a1e40b5f8b2f25a3/node_modules/@portabletext/editor/lib/behaviors/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defineBehavior",
    ()=>defineBehavior,
    "effect",
    ()=>effect,
    "execute",
    ()=>execute,
    "forward",
    ()=>forward,
    "raise",
    ()=>raise
]);
function execute(event) {
    return {
        type: "execute",
        event
    };
}
function forward(event) {
    return {
        type: "forward",
        event
    };
}
function raise(event) {
    return {
        type: "raise",
        event
    };
}
function effect(effect2) {
    return {
        type: "effect",
        effect: effect2
    };
}
function defineBehavior(behavior) {
    return behavior;
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+editor@4.2.2_@portabletext+sanity-bridge@2.0.0_@types+react@19.2.2__@type_9e5c4a470ba434d0a1e40b5f8b2f25a3/node_modules/@portabletext/editor/lib/plugins/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BehaviorPlugin",
    ()=>BehaviorPlugin,
    "EditorRefPlugin",
    ()=>EditorRefPlugin,
    "EventListenerPlugin",
    ()=>EventListenerPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/next@16.0.0_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/next@16.0.0_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$use$2d$editor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+editor@4.2.2_@portabletext+sanity-bridge@2.0.0_@types+react@19.2.2__@type_9e5c4a470ba434d0a1e40b5f8b2f25a3/node_modules/@portabletext/editor/lib/_chunks-es/use-editor.js [app-ssr] (ecmascript)");
;
;
;
function BehaviorPlugin(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(4), editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$use$2d$editor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEditor"])();
    let t0, t1;
    return $[0] !== editor || $[1] !== props.behaviors ? (t0 = ()=>{
        const unregisterBehaviors = props.behaviors.map((behavior)=>editor.registerBehavior({
                behavior
            }));
        return ()=>{
            unregisterBehaviors.forEach(_temp);
        };
    }, t1 = [
        editor,
        props.behaviors
    ], $[0] = editor, $[1] = props.behaviors, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), null;
}
function _temp(unregister) {
    unregister();
}
const EditorRefPlugin = __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((_, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(2), editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$use$2d$editor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEditor"])(), portableTextEditorRef = __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(editor);
    let t0, t1;
    return $[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t0 = ()=>portableTextEditorRef.current, t1 = [], $[0] = t0, $[1] = t1) : (t0 = $[0], t1 = $[1]), __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(ref, t0, t1), null;
});
EditorRefPlugin.displayName = "EditorRefPlugin";
function EventListenerPlugin(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(4), editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$use$2d$editor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEditor"])();
    let t0, t1;
    return $[0] !== editor || $[1] !== props.on ? (t0 = ()=>{
        const subscription = editor.on("*", props.on);
        return ()=>{
            subscription.unsubscribe();
        };
    }, t1 = [
        editor,
        props.on
    ], $[0] = editor, $[1] = props.on, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), null;
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+editor@4.2.2_@portabletext+sanity-bridge@2.0.0_@types+react@19.2.2__@type_9e5c4a470ba434d0a1e40b5f8b2f25a3/node_modules/@portabletext/editor/lib/utils/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blockOffsetToBlockSelectionPoint",
    ()=>blockOffsetToBlockSelectionPoint,
    "blockOffsetToSelectionPoint",
    ()=>blockOffsetToSelectionPoint,
    "blockOffsetsToSelection",
    ()=>blockOffsetsToSelection,
    "childSelectionPointToBlockOffset",
    ()=>childSelectionPointToBlockOffset,
    "isEqualSelections",
    ()=>isEqualSelections,
    "mergeTextBlocks",
    ()=>mergeTextBlocks,
    "reverseSelection",
    ()=>reverseSelection,
    "selectionPointToBlockOffset",
    ()=>selectionPointToBlockOffset,
    "splitTextBlock",
    ()=>splitTextBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+editor@4.2.2_@portabletext+sanity-bridge@2.0.0_@types+react@19.2.2__@type_9e5c4a470ba434d0a1e40b5f8b2f25a3/node_modules/@portabletext/editor/lib/_chunks-es/util.slice-blocks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+schema@2.1.1/node_modules/@portabletext/schema/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$text$2d$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+editor@4.2.2_@portabletext+sanity-bridge@2.0.0_@types+react@19.2.2__@type_9e5c4a470ba434d0a1e40b5f8b2f25a3/node_modules/@portabletext/editor/lib/_chunks-es/util.slice-text-block.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function blockOffsetToBlockSelectionPoint({ context, blockOffset }) {
    let selectionPoint;
    for (const block of context.value)if (block._key === blockOffset.path[0]._key) {
        selectionPoint = {
            path: [
                {
                    _key: block._key
                }
            ],
            offset: blockOffset.offset
        };
        break;
    }
    return selectionPoint;
}
function blockOffsetToSelectionPoint({ context, blockOffset, direction }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockOffsetToSpanSelectionPoint"])({
        context,
        blockOffset,
        direction
    }) || blockOffsetToBlockSelectionPoint({
        context,
        blockOffset
    });
}
function blockOffsetsToSelection({ context, offsets, backward }) {
    const anchor = blockOffsetToSelectionPoint({
        context,
        blockOffset: offsets.anchor,
        direction: backward ? "backward" : "forward"
    }), focus = blockOffsetToSelectionPoint({
        context,
        blockOffset: offsets.focus,
        direction: backward ? "forward" : "backward"
    });
    return !anchor || !focus ? null : {
        anchor,
        focus,
        backward
    };
}
function childSelectionPointToBlockOffset({ context, selectionPoint }) {
    let offset = 0;
    const blockKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlockKeyFromSelectionPoint"])(selectionPoint), childKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChildKeyFromSelectionPoint"])(selectionPoint);
    if (!(!blockKey || !childKey)) {
        for (const block of context.value)if (block._key === blockKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTextBlock"])(context, block)) for (const child of block.children){
            if (child._key === childKey) return {
                path: [
                    {
                        _key: block._key
                    }
                ],
                offset: offset + selectionPoint.offset
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSpan"])(context, child) && (offset += child.text.length);
        }
    }
}
function isEqualSelections(a, b) {
    return !a && !b ? !0 : !a || !b ? !1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEqualSelectionPoints"])(a.anchor, b.anchor) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEqualSelectionPoints"])(a.focus, b.focus);
}
function mergeTextBlocks({ context, targetBlock, incomingBlock }) {
    const parsedIncomingBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseBlock"])({
        context,
        block: incomingBlock,
        options: {
            normalize: !1,
            removeUnusedMarkDefs: !0,
            validateFields: !1
        }
    });
    return !parsedIncomingBlock || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTextBlock"])(context, parsedIncomingBlock) ? targetBlock : {
        ...targetBlock,
        children: [
            ...targetBlock.children,
            ...parsedIncomingBlock.children
        ],
        markDefs: [
            ...targetBlock.markDefs ?? [],
            ...parsedIncomingBlock.markDefs ?? []
        ]
    };
}
function reverseSelection(selection) {
    return selection && (selection.backward ? {
        anchor: selection.focus,
        focus: selection.anchor,
        backward: !1
    } : {
        anchor: selection.focus,
        focus: selection.anchor,
        backward: !0
    });
}
function selectionPointToBlockOffset({ context, selectionPoint }) {
    const blockKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlockKeyFromSelectionPoint"])(selectionPoint);
    return selectionPoint.path.length === 1 && blockKey !== void 0 ? {
        path: [
            {
                _key: blockKey
            }
        ],
        offset: selectionPoint.offset
    } : childSelectionPointToBlockOffset({
        context,
        selectionPoint
    });
}
function splitTextBlock({ context, block, point }) {
    const firstChild = block.children.at(0), lastChild = block.children.at(block.children.length - 1);
    if (!firstChild || !lastChild) return;
    const before = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$text$2d$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceTextBlock"])({
        context: {
            schema: context.schema,
            selection: {
                anchor: {
                    path: [
                        {
                            _key: block._key
                        },
                        "children",
                        {
                            _key: firstChild._key
                        }
                    ],
                    offset: 0
                },
                focus: point
            }
        },
        block
    }), after = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$text$2d$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceTextBlock"])({
        context: {
            schema: context.schema,
            selection: {
                anchor: point,
                focus: {
                    path: [
                        {
                            _key: block._key
                        },
                        "children",
                        {
                            _key: lastChild._key
                        }
                    ],
                    offset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSpan"])(context, lastChild) ? lastChild.text.length : 0
                }
            }
        },
        block
    });
    return {
        before,
        after
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+editor@4.2.2_@portabletext+sanity-bridge@2.0.0_@types+react@19.2.2__@type_9e5c4a470ba434d0a1e40b5f8b2f25a3/node_modules/@portabletext/editor/lib/selectors/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAnchorBlock",
    ()=>getAnchorBlock,
    "getAnchorChild",
    ()=>getAnchorChild,
    "getAnchorSpan",
    ()=>getAnchorSpan,
    "getAnchorTextBlock",
    ()=>getAnchorTextBlock,
    "getBlockOffsets",
    ()=>getBlockOffsets,
    "getBlockTextAfter",
    ()=>getBlockTextAfter,
    "getBlockTextBefore",
    ()=>getBlockTextBefore,
    "getFirstBlock",
    ()=>getFirstBlock,
    "getNextInlineObjects",
    ()=>getNextInlineObjects,
    "getPreviousInlineObjects",
    ()=>getPreviousInlineObjects,
    "getSelection",
    ()=>getSelection,
    "getValue",
    ()=>getValue,
    "isPointAfterSelection",
    ()=>isPointAfterSelection,
    "isPointBeforeSelection",
    ()=>isPointBeforeSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+editor@4.2.2_@portabletext+sanity-bridge@2.0.0_@types+react@19.2.2__@type_9e5c4a470ba434d0a1e40b5f8b2f25a3/node_modules/@portabletext/editor/lib/_chunks-es/selector.is-selecting-entire-blocks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+editor@4.2.2_@portabletext+sanity-bridge@2.0.0_@types+react@19.2.2__@type_9e5c4a470ba434d0a1e40b5f8b2f25a3/node_modules/@portabletext/editor/lib/_chunks-es/util.slice-blocks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/@portabletext+schema@2.1.1/node_modules/@portabletext/schema/dist/index.js [app-ssr] (ecmascript)");
;
;
;
;
const getAnchorBlock = (snapshot)=>{
    if (!snapshot.context.selection) return;
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlockKeyFromSelectionPoint"])(snapshot.context.selection.anchor), index = key ? snapshot.blockIndexMap.get(key) : void 0, node = index !== void 0 ? snapshot.context.value.at(index) : void 0;
    return node && key ? {
        node,
        path: [
            {
                _key: key
            }
        ]
    } : void 0;
}, getAnchorTextBlock = (snapshot)=>{
    const anchorBlock = getAnchorBlock(snapshot);
    return anchorBlock && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTextBlock"])(snapshot.context, anchorBlock.node) ? {
        node: anchorBlock.node,
        path: anchorBlock.path
    } : void 0;
}, getAnchorChild = (snapshot)=>{
    if (!snapshot.context.selection) return;
    const anchorBlock = getAnchorTextBlock(snapshot);
    if (!anchorBlock) return;
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChildKeyFromSelectionPoint"])(snapshot.context.selection.anchor), node = key ? anchorBlock.node.children.find((span)=>span._key === key) : void 0;
    return node && key ? {
        node,
        path: [
            ...anchorBlock.path,
            "children",
            {
                _key: key
            }
        ]
    } : void 0;
}, getAnchorSpan = (snapshot)=>{
    const anchorChild = getAnchorChild(snapshot);
    return anchorChild && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSpan"])(snapshot.context, anchorChild.node) ? {
        node: anchorChild.node,
        path: anchorChild.path
    } : void 0;
}, getBlockOffsets = (snapshot)=>{
    if (!snapshot.context.selection) return;
    const selectionStartPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectionStartPoint"])(snapshot), selectionEndPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectionEndPoint"])(snapshot);
    if (!selectionStartPoint || !selectionEndPoint) return;
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spanSelectionPointToBlockOffset"])({
        context: snapshot.context,
        selectionPoint: selectionStartPoint
    }), end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spanSelectionPointToBlockOffset"])({
        context: snapshot.context,
        selectionPoint: selectionEndPoint
    });
    return start && end ? {
        start,
        end
    } : void 0;
}, getFirstBlock = (snapshot)=>{
    const node = snapshot.context.value[0];
    return node ? {
        node,
        path: [
            {
                _key: node._key
            }
        ]
    } : void 0;
}, getNextInlineObjects = (snapshot)=>{
    const focusTextBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFocusTextBlock"])(snapshot), selectionEndPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectionEndPoint"])(snapshot), selectionEndPointChildKey = selectionEndPoint && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isKeyedSegment"])(selectionEndPoint.path[2]) ? selectionEndPoint.path[2]._key : void 0;
    if (!focusTextBlock || !selectionEndPointChildKey) return [];
    let endPointChildFound = !1;
    const inlineObjects = [];
    for (const child of focusTextBlock.node.children){
        if (child._key === selectionEndPointChildKey) {
            endPointChildFound = !0;
            continue;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSpan"])(snapshot.context, child) && endPointChildFound) {
            inlineObjects.push({
                node: child,
                path: [
                    ...focusTextBlock.path,
                    "children",
                    {
                        _key: child._key
                    }
                ]
            });
            break;
        }
    }
    return inlineObjects;
}, getPreviousInlineObjects = (snapshot)=>{
    const focusTextBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFocusTextBlock"])(snapshot), selectionStartPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectionStartPoint"])(snapshot), selectionStartPointChildKey = selectionStartPoint && (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isKeyedSegment"])(selectionStartPoint.path[2]) ? selectionStartPoint.path[2]._key : void 0;
    if (!focusTextBlock || !selectionStartPointChildKey) return [];
    const inlineObjects = [];
    for (const child of focusTextBlock.node.children){
        if (child._key === selectionStartPointChildKey) break;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$schema$40$2$2e$1$2e$1$2f$node_modules$2f40$portabletext$2f$schema$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSpan"])(snapshot.context, child) || inlineObjects.push({
            node: child,
            path: [
                ...focusTextBlock.path,
                "children",
                {
                    _key: child._key
                }
            ]
        });
    }
    return inlineObjects;
}, getSelection = (snapshot)=>snapshot.context.selection, getBlockTextAfter = (snapshot)=>{
    if (!snapshot.context.selection) return "";
    const endPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectionEndPoint"])(snapshot.context.selection), block = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFocusBlock"])({
        ...snapshot,
        context: {
            ...snapshot.context,
            selection: {
                anchor: endPoint,
                focus: endPoint
            }
        }
    });
    if (!block) return "";
    const endOfBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlockEndPoint"])({
        context: snapshot.context,
        block
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectionText"])({
        ...snapshot,
        context: {
            ...snapshot.context,
            selection: {
                anchor: endPoint,
                focus: endOfBlock
            }
        }
    });
}, getBlockTextBefore = (snapshot)=>{
    if (!snapshot.context.selection) return "";
    const startPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectionStartPoint"])(snapshot.context.selection), block = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFocusBlock"])({
        ...snapshot,
        context: {
            ...snapshot.context,
            selection: {
                anchor: startPoint,
                focus: startPoint
            }
        }
    });
    if (!block) return "";
    const startOfBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlockStartPoint"])({
        context: snapshot.context,
        block
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectionText"])({
        ...snapshot,
        context: {
            ...snapshot.context,
            selection: {
                anchor: startOfBlock,
                focus: startPoint
            }
        }
    });
}, getValue = (snapshot)=>snapshot.context.value;
function isPointAfterSelection(point) {
    return (snapshot)=>{
        if (!snapshot.context.selection) return !1;
        const endPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectionEndPoint"])(snapshot.context.selection);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["comparePoints"])(snapshot, point, endPoint) === 1;
    };
}
function isPointBeforeSelection(point) {
    return (snapshot)=>{
        if (!snapshot.context.selection) return !1;
        const startPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$util$2e$slice$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectionStartPoint"])(snapshot.context.selection);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f40$portabletext$2b$editor$40$4$2e$2$2e$2_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_$5f40$type_9e5c4a470ba434d0a1e40b5f8b2f25a3$2f$node_modules$2f40$portabletext$2f$editor$2f$lib$2f$_chunks$2d$es$2f$selector$2e$is$2d$selecting$2d$entire$2d$blocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["comparePoints"])(snapshot, point, startPoint) === -1;
    };
}
;
 //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=538e0_%40portabletext_editor_lib_f94d7626._.js.map