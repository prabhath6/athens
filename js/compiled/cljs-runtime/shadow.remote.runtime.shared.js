goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67730,p__67731){
var map__67732 = p__67730;
var map__67732__$1 = (((((!((map__67732 == null))))?(((((map__67732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67732):map__67732);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67732__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67733 = p__67731;
var map__67733__$1 = (((((!((map__67733 == null))))?(((((map__67733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67733):map__67733);
var msg = map__67733__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67733__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67736,p__67737){
var map__67738 = p__67736;
var map__67738__$1 = (((((!((map__67738 == null))))?(((((map__67738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67738):map__67738);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67738__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67739 = p__67737;
var map__67739__$1 = (((((!((map__67739 == null))))?(((((map__67739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67739):map__67739);
var msg = map__67739__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67739__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67742 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67744 = null;
var count__67745 = (0);
var i__67746 = (0);
while(true){
if((i__67746 < count__67745)){
var map__67752 = chunk__67744.cljs$core$IIndexed$_nth$arity$2(null,i__67746);
var map__67752__$1 = (((((!((map__67752 == null))))?(((((map__67752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67752):map__67752);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67752__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67799 = seq__67742;
var G__67800 = chunk__67744;
var G__67801 = count__67745;
var G__67802 = (i__67746 + (1));
seq__67742 = G__67799;
chunk__67744 = G__67800;
count__67745 = G__67801;
i__67746 = G__67802;
continue;
} else {
var G__67803 = seq__67742;
var G__67804 = chunk__67744;
var G__67805 = count__67745;
var G__67806 = (i__67746 + (1));
seq__67742 = G__67803;
chunk__67744 = G__67804;
count__67745 = G__67805;
i__67746 = G__67806;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67742);
if(temp__5735__auto__){
var seq__67742__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67742__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67742__$1);
var G__67807 = cljs.core.chunk_rest(seq__67742__$1);
var G__67808 = c__4609__auto__;
var G__67809 = cljs.core.count(c__4609__auto__);
var G__67810 = (0);
seq__67742 = G__67807;
chunk__67744 = G__67808;
count__67745 = G__67809;
i__67746 = G__67810;
continue;
} else {
var map__67754 = cljs.core.first(seq__67742__$1);
var map__67754__$1 = (((((!((map__67754 == null))))?(((((map__67754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67754):map__67754);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67754__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67811 = cljs.core.next(seq__67742__$1);
var G__67812 = null;
var G__67813 = (0);
var G__67814 = (0);
seq__67742 = G__67811;
chunk__67744 = G__67812;
count__67745 = G__67813;
i__67746 = G__67814;
continue;
} else {
var G__67815 = cljs.core.next(seq__67742__$1);
var G__67816 = null;
var G__67817 = (0);
var G__67818 = (0);
seq__67742 = G__67815;
chunk__67744 = G__67816;
count__67745 = G__67817;
i__67746 = G__67818;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67756,msg){
var map__67757 = p__67756;
var map__67757__$1 = (((((!((map__67757 == null))))?(((((map__67757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67757):map__67757);
var runtime = map__67757__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67757__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67759,key,p__67760){
var map__67761 = p__67759;
var map__67761__$1 = (((((!((map__67761 == null))))?(((((map__67761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67761):map__67761);
var state = map__67761__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67761__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67762 = p__67760;
var map__67762__$1 = (((((!((map__67762 == null))))?(((((map__67762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67762):map__67762);
var spec = map__67762__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67762__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67765,key,spec){
var map__67766 = p__67765;
var map__67766__$1 = (((((!((map__67766 == null))))?(((((map__67766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67766):map__67766);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__67773){
var map__67774 = p__67773;
var map__67774__$1 = (((((!((map__67774 == null))))?(((((map__67774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67774):map__67774);
var runtime = map__67774__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67774__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67768_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67768_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67769_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67769_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67770_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67770_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67771_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67771_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__67772_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__67772_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67776,key){
var map__67777 = p__67776;
var map__67777__$1 = (((((!((map__67777 == null))))?(((((map__67777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67777):map__67777);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67777__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67779,p__67780){
var map__67781 = p__67779;
var map__67781__$1 = (((((!((map__67781 == null))))?(((((map__67781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67781):map__67781);
var runtime = map__67781__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67781__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67782 = p__67780;
var map__67782__$1 = (((((!((map__67782 == null))))?(((((map__67782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67782):map__67782);
var msg = map__67782__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67782__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67785 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67787 = null;
var count__67788 = (0);
var i__67789 = (0);
while(true){
if((i__67789 < count__67788)){
var map__67795 = chunk__67787.cljs$core$IIndexed$_nth$arity$2(null,i__67789);
var map__67795__$1 = (((((!((map__67795 == null))))?(((((map__67795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67795):map__67795);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67795__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67819 = seq__67785;
var G__67820 = chunk__67787;
var G__67821 = count__67788;
var G__67822 = (i__67789 + (1));
seq__67785 = G__67819;
chunk__67787 = G__67820;
count__67788 = G__67821;
i__67789 = G__67822;
continue;
} else {
var G__67823 = seq__67785;
var G__67824 = chunk__67787;
var G__67825 = count__67788;
var G__67826 = (i__67789 + (1));
seq__67785 = G__67823;
chunk__67787 = G__67824;
count__67788 = G__67825;
i__67789 = G__67826;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67785);
if(temp__5735__auto__){
var seq__67785__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67785__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67785__$1);
var G__67827 = cljs.core.chunk_rest(seq__67785__$1);
var G__67828 = c__4609__auto__;
var G__67829 = cljs.core.count(c__4609__auto__);
var G__67830 = (0);
seq__67785 = G__67827;
chunk__67787 = G__67828;
count__67788 = G__67829;
i__67789 = G__67830;
continue;
} else {
var map__67797 = cljs.core.first(seq__67785__$1);
var map__67797__$1 = (((((!((map__67797 == null))))?(((((map__67797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67797):map__67797);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67797__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67831 = cljs.core.next(seq__67785__$1);
var G__67832 = null;
var G__67833 = (0);
var G__67834 = (0);
seq__67785 = G__67831;
chunk__67787 = G__67832;
count__67788 = G__67833;
i__67789 = G__67834;
continue;
} else {
var G__67835 = cljs.core.next(seq__67785__$1);
var G__67836 = null;
var G__67837 = (0);
var G__67838 = (0);
seq__67785 = G__67835;
chunk__67787 = G__67836;
count__67788 = G__67837;
i__67789 = G__67838;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
