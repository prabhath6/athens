goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__47818 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47819 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47819);

try{try{var seq__47820 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47821 = null;
var count__47822 = (0);
var i__47823 = (0);
while(true){
if((i__47823 < count__47822)){
var vec__47834 = chunk__47821.cljs$core$IIndexed$_nth$arity$2(null,i__47823);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47834,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47834,(1),null);
var temp__5733__auto___47892 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47892)){
var effect_fn_47893 = temp__5733__auto___47892;
(effect_fn_47893.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47893.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47893.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47894 = seq__47820;
var G__47895 = chunk__47821;
var G__47896 = count__47822;
var G__47897 = (i__47823 + (1));
seq__47820 = G__47894;
chunk__47821 = G__47895;
count__47822 = G__47896;
i__47823 = G__47897;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47820);
if(temp__5735__auto__){
var seq__47820__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47820__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47820__$1);
var G__47898 = cljs.core.chunk_rest(seq__47820__$1);
var G__47899 = c__4609__auto__;
var G__47900 = cljs.core.count(c__4609__auto__);
var G__47901 = (0);
seq__47820 = G__47898;
chunk__47821 = G__47899;
count__47822 = G__47900;
i__47823 = G__47901;
continue;
} else {
var vec__47840 = cljs.core.first(seq__47820__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840,(1),null);
var temp__5733__auto___47902 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47902)){
var effect_fn_47903 = temp__5733__auto___47902;
(effect_fn_47903.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47903.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47903.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47904 = cljs.core.next(seq__47820__$1);
var G__47905 = null;
var G__47906 = (0);
var G__47907 = (0);
seq__47820 = G__47904;
chunk__47821 = G__47905;
count__47822 = G__47906;
i__47823 = G__47907;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__47471__auto___47908 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__47472__auto___47909 = (end__47471__auto___47908 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47472__auto___47909,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__47471__auto___47908);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47818);
}} else {
var seq__47843 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47844 = null;
var count__47845 = (0);
var i__47846 = (0);
while(true){
if((i__47846 < count__47845)){
var vec__47853 = chunk__47844.cljs$core$IIndexed$_nth$arity$2(null,i__47846);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47853,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47853,(1),null);
var temp__5733__auto___47910 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47910)){
var effect_fn_47911 = temp__5733__auto___47910;
(effect_fn_47911.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47911.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47911.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47912 = seq__47843;
var G__47913 = chunk__47844;
var G__47914 = count__47845;
var G__47915 = (i__47846 + (1));
seq__47843 = G__47912;
chunk__47844 = G__47913;
count__47845 = G__47914;
i__47846 = G__47915;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47843);
if(temp__5735__auto__){
var seq__47843__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47843__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47843__$1);
var G__47916 = cljs.core.chunk_rest(seq__47843__$1);
var G__47917 = c__4609__auto__;
var G__47918 = cljs.core.count(c__4609__auto__);
var G__47919 = (0);
seq__47843 = G__47916;
chunk__47844 = G__47917;
count__47845 = G__47918;
i__47846 = G__47919;
continue;
} else {
var vec__47856 = cljs.core.first(seq__47843__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47856,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47856,(1),null);
var temp__5733__auto___47920 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47920)){
var effect_fn_47921 = temp__5733__auto___47920;
(effect_fn_47921.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47921.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47921.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47922 = cljs.core.next(seq__47843__$1);
var G__47923 = null;
var G__47924 = (0);
var G__47925 = (0);
seq__47843 = G__47922;
chunk__47844 = G__47923;
count__47845 = G__47924;
i__47846 = G__47925;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47860 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47861 = null;
var count__47862 = (0);
var i__47863 = (0);
while(true){
if((i__47863 < count__47862)){
var map__47872 = chunk__47861.cljs$core$IIndexed$_nth$arity$2(null,i__47863);
var map__47872__$1 = (((((!((map__47872 == null))))?(((((map__47872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47872):map__47872);
var effect = map__47872__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47872__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47872__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47860,chunk__47861,count__47862,i__47863,map__47872,map__47872__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47860,chunk__47861,count__47862,i__47863,map__47872,map__47872__$1,effect,ms,dispatch))
,ms);
}


var G__47926 = seq__47860;
var G__47927 = chunk__47861;
var G__47928 = count__47862;
var G__47929 = (i__47863 + (1));
seq__47860 = G__47926;
chunk__47861 = G__47927;
count__47862 = G__47928;
i__47863 = G__47929;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47860);
if(temp__5735__auto__){
var seq__47860__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47860__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47860__$1);
var G__47930 = cljs.core.chunk_rest(seq__47860__$1);
var G__47931 = c__4609__auto__;
var G__47932 = cljs.core.count(c__4609__auto__);
var G__47933 = (0);
seq__47860 = G__47930;
chunk__47861 = G__47931;
count__47862 = G__47932;
i__47863 = G__47933;
continue;
} else {
var map__47882 = cljs.core.first(seq__47860__$1);
var map__47882__$1 = (((((!((map__47882 == null))))?(((((map__47882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47882):map__47882);
var effect = map__47882__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47882__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47882__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47860,chunk__47861,count__47862,i__47863,map__47882,map__47882__$1,effect,ms,dispatch,seq__47860__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47860,chunk__47861,count__47862,i__47863,map__47882,map__47882__$1,effect,ms,dispatch,seq__47860__$1,temp__5735__auto__))
,ms);
}


var G__47934 = cljs.core.next(seq__47860__$1);
var G__47935 = null;
var G__47936 = (0);
var G__47937 = (0);
seq__47860 = G__47934;
chunk__47861 = G__47935;
count__47862 = G__47936;
i__47863 = G__47937;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__47884 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47885 = null;
var count__47886 = (0);
var i__47887 = (0);
while(true){
if((i__47887 < count__47886)){
var event = chunk__47885.cljs$core$IIndexed$_nth$arity$2(null,i__47887);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__47938 = seq__47884;
var G__47939 = chunk__47885;
var G__47940 = count__47886;
var G__47941 = (i__47887 + (1));
seq__47884 = G__47938;
chunk__47885 = G__47939;
count__47886 = G__47940;
i__47887 = G__47941;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47884);
if(temp__5735__auto__){
var seq__47884__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47884__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47884__$1);
var G__47942 = cljs.core.chunk_rest(seq__47884__$1);
var G__47943 = c__4609__auto__;
var G__47944 = cljs.core.count(c__4609__auto__);
var G__47945 = (0);
seq__47884 = G__47942;
chunk__47885 = G__47943;
count__47886 = G__47944;
i__47887 = G__47945;
continue;
} else {
var event = cljs.core.first(seq__47884__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__47946 = cljs.core.next(seq__47884__$1);
var G__47947 = null;
var G__47948 = (0);
var G__47949 = (0);
seq__47884 = G__47946;
chunk__47885 = G__47947;
count__47886 = G__47948;
i__47887 = G__47949;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__47888 = cljs.core.seq(value);
var chunk__47889 = null;
var count__47890 = (0);
var i__47891 = (0);
while(true){
if((i__47891 < count__47890)){
var event = chunk__47889.cljs$core$IIndexed$_nth$arity$2(null,i__47891);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47950 = seq__47888;
var G__47951 = chunk__47889;
var G__47952 = count__47890;
var G__47953 = (i__47891 + (1));
seq__47888 = G__47950;
chunk__47889 = G__47951;
count__47890 = G__47952;
i__47891 = G__47953;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47888);
if(temp__5735__auto__){
var seq__47888__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47888__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47888__$1);
var G__47954 = cljs.core.chunk_rest(seq__47888__$1);
var G__47955 = c__4609__auto__;
var G__47956 = cljs.core.count(c__4609__auto__);
var G__47957 = (0);
seq__47888 = G__47954;
chunk__47889 = G__47955;
count__47890 = G__47956;
i__47891 = G__47957;
continue;
} else {
var event = cljs.core.first(seq__47888__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47958 = cljs.core.next(seq__47888__$1);
var G__47959 = null;
var G__47960 = (0);
var G__47961 = (0);
seq__47888 = G__47958;
chunk__47889 = G__47959;
count__47890 = G__47960;
i__47891 = G__47961;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
