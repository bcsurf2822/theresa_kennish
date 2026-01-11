(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/next-sanity@12.0.10_@emotion+is-prop-valid@1.4.0_@sanity+client@7.14.0_@sanity+types@5._310b6e367e13a95fe5544e6b7c057029/node_modules/next-sanity/dist/NextStudio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NextStudioComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$12$2e$0$2e$10_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$14$2e$0_$40$sanity$2b$types$40$5$2e$_310b6e367e13a95fe5544e6b7c057029$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$NextStudioNoScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/next-sanity@12.0.10_@emotion+is-prop-valid@1.4.0_@sanity+client@7.14.0_@sanity+types@5._310b6e367e13a95fe5544e6b7c057029/node_modules/next-sanity/dist/NextStudioNoScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/next@16.0.0_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/next@16.0.0_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$sanity$40$5$2e$2$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$reac_1fa5c8f85a09d43fbd968d38b7e8f92d$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/sanity@5.2.0_@emotion+is-prop-valid@1.4.0_@portabletext+sanity-bridge@2.0.0_@types+reac_1fa5c8f85a09d43fbd968d38b7e8f92d/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$history$40$5$2e$3$2e$0$2f$node_modules$2f$history$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/cedesigns/theresa_kennish/node_modules/.pnpm/history@5.3.0/node_modules/history/index.js [app-client] (ecmascript)");
;
;
;
;
;
function createHashHistoryForStudio() {
    const history = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$history$40$5$2e$3$2e$0$2f$node_modules$2f$history$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashHistory"])();
    return {
        get action () {
            return history.action;
        },
        get location () {
            return history.location;
        },
        get createHref () {
            return history.createHref;
        },
        get push () {
            return history.push;
        },
        get replace () {
            return history.replace;
        },
        get go () {
            return history.go;
        },
        get back () {
            return history.back;
        },
        get forward () {
            return history.forward;
        },
        get block () {
            return history.block;
        },
        listen (listener) {
            return history.listen(({ location })=>{
                listener(location);
            });
        }
    };
}
function useIsMounted() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(emptySubscribe, {
        "useIsMounted.useSyncExternalStore": ()=>true
    }["useIsMounted.useSyncExternalStore"], {
        "useIsMounted.useSyncExternalStore": ()=>false
    }["useIsMounted.useSyncExternalStore"]);
}
const emptySubscribe = ()=>()=>{};
function NextStudioComponent({ children, config, unstable__noScript = true, scheme, history, ...props }) {
    const isMounted = useIsMounted();
    const unstableHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NextStudioComponent.useMemo[unstableHistory]": ()=>{
            if (props.unstable_history && history) throw new Error("Cannot use both `unstable_history` and `history` props at the same time");
            if (isMounted && history === "hash") return createHashHistoryForStudio();
            return props.unstable_history;
        }
    }["NextStudioComponent.useMemo[unstableHistory]"], [
        history,
        isMounted,
        props.unstable_history
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            unstable__noScript && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$12$2e$0$2e$10_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$14$2e$0_$40$sanity$2b$types$40$5$2e$_310b6e367e13a95fe5544e6b7c057029$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$NextStudioNoScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"], {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$12$2e$0$2e$10_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$14$2e$0_$40$sanity$2b$types$40$5$2e$_310b6e367e13a95fe5544e6b7c057029$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$NextStudioNoScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"], {
                children: history === "hash" && !isMounted ? null : children || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$cedesigns$2f$theresa_kennish$2f$node_modules$2f2e$pnpm$2f$sanity$40$5$2e$2$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$portabletext$2b$sanity$2d$bridge$40$2$2e$0$2e$0_$40$types$2b$reac_1fa5c8f85a09d43fbd968d38b7e8f92d$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Studio"], {
                    config,
                    scheme,
                    unstable_globalStyles: true,
                    ...props,
                    unstable_history: unstableHistory
                })
            })
        ]
    });
}
;
 //# sourceMappingURL=NextStudio.js.map
}),
]);

//# sourceMappingURL=2beed_next-sanity_dist_NextStudio_d32d7097.js.map