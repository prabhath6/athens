goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.loggers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"log","log",-1595516004),console.log.bind(console),new cljs.core.Keyword(null,"warn","warn",-436710552),console.warn.bind(console),new cljs.core.Keyword(null,"error","error",-978969032),console.error.bind(console),new cljs.core.Keyword(null,"debug","debug",-1608172596),console.debug.bind(console),new cljs.core.Keyword(null,"group","group",582596132),(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$loggers$console(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46508 = arguments.length;
var i__4790__auto___46509 = (0);
while(true){
if((i__4790__auto___46509 < len__4789__auto___46508)){
args__4795__auto__.push((arguments[i__4790__auto___46509]));

var G__46510 = (i__4790__auto___46509 + (1));
i__4790__auto___46509 = G__46510;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
if(cljs.core.contains_QMARK_(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.loggers),level)){
} else {
throw (new Error(["Assert failed: ",["re-frame: log called with unknown level: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join(''),"\n","(contains? (clojure.core/deref loggers) level)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__46507 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.loggers);
return (level.cljs$core$IFn$_invoke$arity$1 ? level.cljs$core$IFn$_invoke$arity$1(G__46507) : level.call(null,G__46507));
})(),args);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$lang$applyTo = (function (seq46505){
var G__46506 = cljs.core.first(seq46505);
var seq46505__$1 = cljs.core.next(seq46505);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46506,seq46505__$1);
}));

/**
 * Change the set (or a subset) of logging functions used by re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.set_loggers_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$loggers$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_loggers)),cljs.core.set(cljs.core.keys(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.loggers)))))){
} else {
throw (new Error(["Assert failed: ","Unknown keys in new-loggers","\n","(empty? (difference (set (keys new-loggers)) (-> (clojure.core/deref loggers) keys set)))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
/**
 * Get the current logging functions used by re-frame.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.get_loggers = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$loggers$get_loggers(){
return cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.loggers);
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.js.map
