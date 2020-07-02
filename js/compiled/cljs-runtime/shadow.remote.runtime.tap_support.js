goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__88720,p__88721){
var map__88722 = p__88720;
var map__88722__$1 = (((((!((map__88722 == null))))?(((((map__88722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88722):map__88722);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88722__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__88723 = p__88721;
var map__88723__$1 = (((((!((map__88723 == null))))?(((((map__88723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88723):map__88723);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88723__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__88726,p__88727){
var map__88728 = p__88726;
var map__88728__$1 = (((((!((map__88728 == null))))?(((((map__88728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88728):map__88728);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88728__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__88729 = p__88727;
var map__88729__$1 = (((((!((map__88729 == null))))?(((((map__88729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88729):map__88729);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88729__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__88734,p__88735){
var map__88736 = p__88734;
var map__88736__$1 = (((((!((map__88736 == null))))?(((((map__88736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88736):map__88736);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88736__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88736__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__88737 = p__88735;
var map__88737__$1 = (((((!((map__88737 == null))))?(((((map__88737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88737):map__88737);
var msg = map__88737__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88737__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__88740 = obj_support;
var map__88740__$1 = (((((!((map__88740 == null))))?(((((map__88740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88740):map__88740);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88740__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__88733_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__88733_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__88732_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__88732_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__88742,tid){
var map__88743 = p__88742;
var map__88743__$1 = (((((!((map__88743 == null))))?(((((map__88743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88743):map__88743);
var svc = map__88743__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88743__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__88749 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__88750 = null;
var count__88751 = (0);
var i__88752 = (0);
while(true){
if((i__88752 < count__88751)){
var tid = chunk__88750.cljs$core$IIndexed$_nth$arity$2(null,i__88752);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__88759 = seq__88749;
var G__88760 = chunk__88750;
var G__88761 = count__88751;
var G__88762 = (i__88752 + (1));
seq__88749 = G__88759;
chunk__88750 = G__88760;
count__88751 = G__88761;
i__88752 = G__88762;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__88749);
if(temp__5735__auto__){
var seq__88749__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__88749__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__88749__$1);
var G__88763 = cljs.core.chunk_rest(seq__88749__$1);
var G__88764 = c__4609__auto__;
var G__88765 = cljs.core.count(c__4609__auto__);
var G__88766 = (0);
seq__88749 = G__88763;
chunk__88750 = G__88764;
count__88751 = G__88765;
i__88752 = G__88766;
continue;
} else {
var tid = cljs.core.first(seq__88749__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__88767 = cljs.core.next(seq__88749__$1);
var G__88768 = null;
var G__88769 = (0);
var G__88770 = (0);
seq__88749 = G__88767;
chunk__88750 = G__88768;
count__88751 = G__88769;
i__88752 = G__88770;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__88745_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__88745_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__88746_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__88746_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__88747_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__88747_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__88748_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__88748_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__88753){
var map__88757 = p__88753;
var map__88757__$1 = (((((!((map__88757 == null))))?(((((map__88757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88757):map__88757);
var svc = map__88757__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88757__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88757__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
