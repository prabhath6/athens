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
var _STAR_current_trace_STAR__orig_val__52652 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52653 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52653);

try{try{var seq__52668 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52669 = null;
var count__52670 = (0);
var i__52671 = (0);
while(true){
if((i__52671 < count__52670)){
var vec__52690 = chunk__52669.cljs$core$IIndexed$_nth$arity$2(null,i__52671);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52690,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52690,(1),null);
var temp__5733__auto___52779 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52779)){
var effect_fn_52780 = temp__5733__auto___52779;
(effect_fn_52780.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52780.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52780.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52781 = seq__52668;
var G__52782 = chunk__52669;
var G__52783 = count__52670;
var G__52784 = (i__52671 + (1));
seq__52668 = G__52781;
chunk__52669 = G__52782;
count__52670 = G__52783;
i__52671 = G__52784;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52668);
if(temp__5735__auto__){
var seq__52668__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52668__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52668__$1);
var G__52785 = cljs.core.chunk_rest(seq__52668__$1);
var G__52786 = c__4609__auto__;
var G__52787 = cljs.core.count(c__4609__auto__);
var G__52788 = (0);
seq__52668 = G__52785;
chunk__52669 = G__52786;
count__52670 = G__52787;
i__52671 = G__52788;
continue;
} else {
var vec__52703 = cljs.core.first(seq__52668__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52703,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52703,(1),null);
var temp__5733__auto___52790 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52790)){
var effect_fn_52791 = temp__5733__auto___52790;
(effect_fn_52791.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52791.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52791.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52792 = cljs.core.next(seq__52668__$1);
var G__52793 = null;
var G__52794 = (0);
var G__52795 = (0);
seq__52668 = G__52792;
chunk__52669 = G__52793;
count__52670 = G__52794;
i__52671 = G__52795;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52291__auto___52796 = re_frame.interop.now();
var duration__52292__auto___52797 = (end__52291__auto___52796 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52292__auto___52797,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52291__auto___52796);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52652);
}} else {
var seq__52707 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52708 = null;
var count__52709 = (0);
var i__52710 = (0);
while(true){
if((i__52710 < count__52709)){
var vec__52719 = chunk__52708.cljs$core$IIndexed$_nth$arity$2(null,i__52710);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52719,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52719,(1),null);
var temp__5733__auto___52798 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52798)){
var effect_fn_52799 = temp__5733__auto___52798;
(effect_fn_52799.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52799.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52799.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52800 = seq__52707;
var G__52801 = chunk__52708;
var G__52802 = count__52709;
var G__52803 = (i__52710 + (1));
seq__52707 = G__52800;
chunk__52708 = G__52801;
count__52709 = G__52802;
i__52710 = G__52803;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52707);
if(temp__5735__auto__){
var seq__52707__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52707__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52707__$1);
var G__52804 = cljs.core.chunk_rest(seq__52707__$1);
var G__52805 = c__4609__auto__;
var G__52806 = cljs.core.count(c__4609__auto__);
var G__52807 = (0);
seq__52707 = G__52804;
chunk__52708 = G__52805;
count__52709 = G__52806;
i__52710 = G__52807;
continue;
} else {
var vec__52722 = cljs.core.first(seq__52707__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52722,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52722,(1),null);
var temp__5733__auto___52808 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52808)){
var effect_fn_52809 = temp__5733__auto___52808;
(effect_fn_52809.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52809.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52809.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52810 = cljs.core.next(seq__52707__$1);
var G__52811 = null;
var G__52812 = (0);
var G__52813 = (0);
seq__52707 = G__52810;
chunk__52708 = G__52811;
count__52709 = G__52812;
i__52710 = G__52813;
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
var seq__52729 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52730 = null;
var count__52731 = (0);
var i__52732 = (0);
while(true){
if((i__52732 < count__52731)){
var map__52752 = chunk__52730.cljs$core$IIndexed$_nth$arity$2(null,i__52732);
var map__52752__$1 = (((((!((map__52752 == null))))?(((((map__52752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52752):map__52752);
var effect = map__52752__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52752__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52752__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52729,chunk__52730,count__52731,i__52732,map__52752,map__52752__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52729,chunk__52730,count__52731,i__52732,map__52752,map__52752__$1,effect,ms,dispatch))
,ms);
}


var G__52814 = seq__52729;
var G__52815 = chunk__52730;
var G__52816 = count__52731;
var G__52817 = (i__52732 + (1));
seq__52729 = G__52814;
chunk__52730 = G__52815;
count__52731 = G__52816;
i__52732 = G__52817;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52729);
if(temp__5735__auto__){
var seq__52729__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52729__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52729__$1);
var G__52818 = cljs.core.chunk_rest(seq__52729__$1);
var G__52819 = c__4609__auto__;
var G__52820 = cljs.core.count(c__4609__auto__);
var G__52821 = (0);
seq__52729 = G__52818;
chunk__52730 = G__52819;
count__52731 = G__52820;
i__52732 = G__52821;
continue;
} else {
var map__52767 = cljs.core.first(seq__52729__$1);
var map__52767__$1 = (((((!((map__52767 == null))))?(((((map__52767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52767):map__52767);
var effect = map__52767__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52729,chunk__52730,count__52731,i__52732,map__52767,map__52767__$1,effect,ms,dispatch,seq__52729__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52729,chunk__52730,count__52731,i__52732,map__52767,map__52767__$1,effect,ms,dispatch,seq__52729__$1,temp__5735__auto__))
,ms);
}


var G__52822 = cljs.core.next(seq__52729__$1);
var G__52823 = null;
var G__52824 = (0);
var G__52825 = (0);
seq__52729 = G__52822;
chunk__52730 = G__52823;
count__52731 = G__52824;
i__52732 = G__52825;
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
var seq__52770 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52771 = null;
var count__52772 = (0);
var i__52773 = (0);
while(true){
if((i__52773 < count__52772)){
var event = chunk__52771.cljs$core$IIndexed$_nth$arity$2(null,i__52773);
re_frame.router.dispatch(event);


var G__52826 = seq__52770;
var G__52827 = chunk__52771;
var G__52828 = count__52772;
var G__52829 = (i__52773 + (1));
seq__52770 = G__52826;
chunk__52771 = G__52827;
count__52772 = G__52828;
i__52773 = G__52829;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52770);
if(temp__5735__auto__){
var seq__52770__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52770__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52770__$1);
var G__52830 = cljs.core.chunk_rest(seq__52770__$1);
var G__52831 = c__4609__auto__;
var G__52832 = cljs.core.count(c__4609__auto__);
var G__52833 = (0);
seq__52770 = G__52830;
chunk__52771 = G__52831;
count__52772 = G__52832;
i__52773 = G__52833;
continue;
} else {
var event = cljs.core.first(seq__52770__$1);
re_frame.router.dispatch(event);


var G__52834 = cljs.core.next(seq__52770__$1);
var G__52835 = null;
var G__52836 = (0);
var G__52837 = (0);
seq__52770 = G__52834;
chunk__52771 = G__52835;
count__52772 = G__52836;
i__52773 = G__52837;
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
var seq__52775 = cljs.core.seq(value);
var chunk__52776 = null;
var count__52777 = (0);
var i__52778 = (0);
while(true){
if((i__52778 < count__52777)){
var event = chunk__52776.cljs$core$IIndexed$_nth$arity$2(null,i__52778);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52838 = seq__52775;
var G__52839 = chunk__52776;
var G__52840 = count__52777;
var G__52841 = (i__52778 + (1));
seq__52775 = G__52838;
chunk__52776 = G__52839;
count__52777 = G__52840;
i__52778 = G__52841;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52775);
if(temp__5735__auto__){
var seq__52775__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52775__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52775__$1);
var G__52842 = cljs.core.chunk_rest(seq__52775__$1);
var G__52843 = c__4609__auto__;
var G__52844 = cljs.core.count(c__4609__auto__);
var G__52845 = (0);
seq__52775 = G__52842;
chunk__52776 = G__52843;
count__52777 = G__52844;
i__52778 = G__52845;
continue;
} else {
var event = cljs.core.first(seq__52775__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52846 = cljs.core.next(seq__52775__$1);
var G__52847 = null;
var G__52848 = (0);
var G__52849 = (0);
seq__52775 = G__52846;
chunk__52776 = G__52847;
count__52777 = G__52848;
i__52778 = G__52849;
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
