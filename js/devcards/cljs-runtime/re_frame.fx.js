goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__46666 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46667 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46667);

try{try{var seq__46697 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46698 = null;
var count__46699 = (0);
var i__46700 = (0);
while(true){
if((i__46700 < count__46699)){
var vec__46711 = chunk__46698.cljs$core$IIndexed$_nth$arity$2(null,i__46700);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46711,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46711,(1),null);
var temp__5733__auto___46802 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46802)){
var effect_fn_46803 = temp__5733__auto___46802;
(effect_fn_46803.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46803.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46803.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46804 = seq__46697;
var G__46805 = chunk__46698;
var G__46806 = count__46699;
var G__46807 = (i__46700 + (1));
seq__46697 = G__46804;
chunk__46698 = G__46805;
count__46699 = G__46806;
i__46700 = G__46807;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46697);
if(temp__5735__auto__){
var seq__46697__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46697__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46697__$1);
var G__46809 = cljs.core.chunk_rest(seq__46697__$1);
var G__46810 = c__4609__auto__;
var G__46811 = cljs.core.count(c__4609__auto__);
var G__46812 = (0);
seq__46697 = G__46809;
chunk__46698 = G__46810;
count__46699 = G__46811;
i__46700 = G__46812;
continue;
} else {
var vec__46724 = cljs.core.first(seq__46697__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46724,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46724,(1),null);
var temp__5733__auto___46814 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46814)){
var effect_fn_46816 = temp__5733__auto___46814;
(effect_fn_46816.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46816.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46816.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46817 = cljs.core.next(seq__46697__$1);
var G__46818 = null;
var G__46819 = (0);
var G__46820 = (0);
seq__46697 = G__46817;
chunk__46698 = G__46818;
count__46699 = G__46819;
i__46700 = G__46820;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__44544__auto___46821 = re_frame.interop.now();
var duration__44545__auto___46822 = (end__44544__auto___46821 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44545__auto___46822,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__44544__auto___46821);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46666);
}} else {
var seq__46731 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46732 = null;
var count__46733 = (0);
var i__46734 = (0);
while(true){
if((i__46734 < count__46733)){
var vec__46749 = chunk__46732.cljs$core$IIndexed$_nth$arity$2(null,i__46734);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46749,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46749,(1),null);
var temp__5733__auto___46827 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46827)){
var effect_fn_46829 = temp__5733__auto___46827;
(effect_fn_46829.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46829.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46829.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46830 = seq__46731;
var G__46831 = chunk__46732;
var G__46832 = count__46733;
var G__46833 = (i__46734 + (1));
seq__46731 = G__46830;
chunk__46732 = G__46831;
count__46733 = G__46832;
i__46734 = G__46833;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46731);
if(temp__5735__auto__){
var seq__46731__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46731__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46731__$1);
var G__46836 = cljs.core.chunk_rest(seq__46731__$1);
var G__46837 = c__4609__auto__;
var G__46838 = cljs.core.count(c__4609__auto__);
var G__46839 = (0);
seq__46731 = G__46836;
chunk__46732 = G__46837;
count__46733 = G__46838;
i__46734 = G__46839;
continue;
} else {
var vec__46754 = cljs.core.first(seq__46731__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46754,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46754,(1),null);
var temp__5733__auto___46842 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46842)){
var effect_fn_46843 = temp__5733__auto___46842;
(effect_fn_46843.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46843.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46843.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46844 = cljs.core.next(seq__46731__$1);
var G__46845 = null;
var G__46846 = (0);
var G__46847 = (0);
seq__46731 = G__46844;
chunk__46732 = G__46845;
count__46733 = G__46846;
i__46734 = G__46847;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__46761 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46762 = null;
var count__46763 = (0);
var i__46764 = (0);
while(true){
if((i__46764 < count__46763)){
var map__46772 = chunk__46762.cljs$core$IIndexed$_nth$arity$2(null,i__46764);
var map__46772__$1 = (((((!((map__46772 == null))))?(((((map__46772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46772):map__46772);
var effect = map__46772__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46772__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46772__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46761,chunk__46762,count__46763,i__46764,map__46772,map__46772__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46761,chunk__46762,count__46763,i__46764,map__46772,map__46772__$1,effect,ms,dispatch))
,ms);
}


var G__46850 = seq__46761;
var G__46851 = chunk__46762;
var G__46852 = count__46763;
var G__46853 = (i__46764 + (1));
seq__46761 = G__46850;
chunk__46762 = G__46851;
count__46763 = G__46852;
i__46764 = G__46853;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46761);
if(temp__5735__auto__){
var seq__46761__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46761__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46761__$1);
var G__46854 = cljs.core.chunk_rest(seq__46761__$1);
var G__46855 = c__4609__auto__;
var G__46856 = cljs.core.count(c__4609__auto__);
var G__46857 = (0);
seq__46761 = G__46854;
chunk__46762 = G__46855;
count__46763 = G__46856;
i__46764 = G__46857;
continue;
} else {
var map__46774 = cljs.core.first(seq__46761__$1);
var map__46774__$1 = (((((!((map__46774 == null))))?(((((map__46774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46774):map__46774);
var effect = map__46774__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46774__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46774__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46761,chunk__46762,count__46763,i__46764,map__46774,map__46774__$1,effect,ms,dispatch,seq__46761__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46761,chunk__46762,count__46763,i__46764,map__46774,map__46774__$1,effect,ms,dispatch,seq__46761__$1,temp__5735__auto__))
,ms);
}


var G__46858 = cljs.core.next(seq__46761__$1);
var G__46859 = null;
var G__46860 = (0);
var G__46861 = (0);
seq__46761 = G__46858;
chunk__46762 = G__46859;
count__46763 = G__46860;
i__46764 = G__46861;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__46781 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46782 = null;
var count__46783 = (0);
var i__46784 = (0);
while(true){
if((i__46784 < count__46783)){
var event = chunk__46782.cljs$core$IIndexed$_nth$arity$2(null,i__46784);
re_frame.router.dispatch(event);


var G__46862 = seq__46781;
var G__46863 = chunk__46782;
var G__46864 = count__46783;
var G__46865 = (i__46784 + (1));
seq__46781 = G__46862;
chunk__46782 = G__46863;
count__46783 = G__46864;
i__46784 = G__46865;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46781);
if(temp__5735__auto__){
var seq__46781__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46781__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46781__$1);
var G__46866 = cljs.core.chunk_rest(seq__46781__$1);
var G__46867 = c__4609__auto__;
var G__46868 = cljs.core.count(c__4609__auto__);
var G__46869 = (0);
seq__46781 = G__46866;
chunk__46782 = G__46867;
count__46783 = G__46868;
i__46784 = G__46869;
continue;
} else {
var event = cljs.core.first(seq__46781__$1);
re_frame.router.dispatch(event);


var G__46870 = cljs.core.next(seq__46781__$1);
var G__46871 = null;
var G__46872 = (0);
var G__46873 = (0);
seq__46781 = G__46870;
chunk__46782 = G__46871;
count__46783 = G__46872;
i__46784 = G__46873;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__46787 = cljs.core.seq(value);
var chunk__46788 = null;
var count__46789 = (0);
var i__46790 = (0);
while(true){
if((i__46790 < count__46789)){
var event = chunk__46788.cljs$core$IIndexed$_nth$arity$2(null,i__46790);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46874 = seq__46787;
var G__46875 = chunk__46788;
var G__46876 = count__46789;
var G__46877 = (i__46790 + (1));
seq__46787 = G__46874;
chunk__46788 = G__46875;
count__46789 = G__46876;
i__46790 = G__46877;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46787);
if(temp__5735__auto__){
var seq__46787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46787__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46787__$1);
var G__46878 = cljs.core.chunk_rest(seq__46787__$1);
var G__46879 = c__4609__auto__;
var G__46880 = cljs.core.count(c__4609__auto__);
var G__46881 = (0);
seq__46787 = G__46878;
chunk__46788 = G__46879;
count__46789 = G__46880;
i__46790 = G__46881;
continue;
} else {
var event = cljs.core.first(seq__46787__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46882 = cljs.core.next(seq__46787__$1);
var G__46883 = null;
var G__46884 = (0);
var G__46885 = (0);
seq__46787 = G__46882;
chunk__46788 = G__46883;
count__46789 = G__46884;
i__46790 = G__46885;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
