goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__44623){
var map__44624 = p__44623;
var map__44624__$1 = (((((!((map__44624 == null))))?(((((map__44624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44624):map__44624);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44624__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44624__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44624__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44624__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__44629_44684 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__44630_44685 = null;
var count__44631_44686 = (0);
var i__44632_44687 = (0);
while(true){
if((i__44632_44687 < count__44631_44686)){
var vec__44649_44688 = chunk__44630_44685.cljs$core$IIndexed$_nth$arity$2(null,i__44632_44687);
var k_44689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44649_44688,(0),null);
var cb_44690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44649_44688,(1),null);
try{var G__44653_44691 = cljs.core.deref(re_frame.trace.traces);
(cb_44690.cljs$core$IFn$_invoke$arity$1 ? cb_44690.cljs$core$IFn$_invoke$arity$1(G__44653_44691) : cb_44690.call(null,G__44653_44691));
}catch (e44652){var e_44692 = e44652;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_44689,"while storing",cljs.core.deref(re_frame.trace.traces),e_44692], 0));
}

var G__44693 = seq__44629_44684;
var G__44694 = chunk__44630_44685;
var G__44695 = count__44631_44686;
var G__44696 = (i__44632_44687 + (1));
seq__44629_44684 = G__44693;
chunk__44630_44685 = G__44694;
count__44631_44686 = G__44695;
i__44632_44687 = G__44696;
continue;
} else {
var temp__5735__auto___44697 = cljs.core.seq(seq__44629_44684);
if(temp__5735__auto___44697){
var seq__44629_44698__$1 = temp__5735__auto___44697;
if(cljs.core.chunked_seq_QMARK_(seq__44629_44698__$1)){
var c__4609__auto___44699 = cljs.core.chunk_first(seq__44629_44698__$1);
var G__44702 = cljs.core.chunk_rest(seq__44629_44698__$1);
var G__44703 = c__4609__auto___44699;
var G__44704 = cljs.core.count(c__4609__auto___44699);
var G__44705 = (0);
seq__44629_44684 = G__44702;
chunk__44630_44685 = G__44703;
count__44631_44686 = G__44704;
i__44632_44687 = G__44705;
continue;
} else {
var vec__44656_44706 = cljs.core.first(seq__44629_44698__$1);
var k_44707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44656_44706,(0),null);
var cb_44708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44656_44706,(1),null);
try{var G__44660_44709 = cljs.core.deref(re_frame.trace.traces);
(cb_44708.cljs$core$IFn$_invoke$arity$1 ? cb_44708.cljs$core$IFn$_invoke$arity$1(G__44660_44709) : cb_44708.call(null,G__44660_44709));
}catch (e44659){var e_44710 = e44659;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_44707,"while storing",cljs.core.deref(re_frame.trace.traces),e_44710], 0));
}

var G__44711 = cljs.core.next(seq__44629_44698__$1);
var G__44712 = null;
var G__44713 = (0);
var G__44714 = (0);
seq__44629_44684 = G__44711;
chunk__44630_44685 = G__44712;
count__44631_44686 = G__44713;
i__44632_44687 = G__44714;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
