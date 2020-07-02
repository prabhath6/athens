goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60423,p__60424){
var map__60425 = p__60423;
var map__60425__$1 = (((((!((map__60425 == null))))?(((((map__60425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60425):map__60425);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60425__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60426 = p__60424;
var map__60426__$1 = (((((!((map__60426 == null))))?(((((map__60426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60426):map__60426);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60434,p__60435){
var map__60440 = p__60434;
var map__60440__$1 = (((((!((map__60440 == null))))?(((((map__60440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60440):map__60440);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60440__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60441 = p__60435;
var map__60441__$1 = (((((!((map__60441 == null))))?(((((map__60441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60441):map__60441);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60441__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60446,p__60447){
var map__60448 = p__60446;
var map__60448__$1 = (((((!((map__60448 == null))))?(((((map__60448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60448):map__60448);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60448__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60448__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60449 = p__60447;
var map__60449__$1 = (((((!((map__60449 == null))))?(((((map__60449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60449):map__60449);
var msg = map__60449__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60449__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60452 = obj_support;
var map__60452__$1 = (((((!((map__60452 == null))))?(((((map__60452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60452):map__60452);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60452__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60445_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60445_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60444_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60444_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60454,tid){
var map__60455 = p__60454;
var map__60455__$1 = (((((!((map__60455 == null))))?(((((map__60455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60455):map__60455);
var svc = map__60455__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60455__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60461 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60462 = null;
var count__60463 = (0);
var i__60464 = (0);
while(true){
if((i__60464 < count__60463)){
var tid = chunk__60462.cljs$core$IIndexed$_nth$arity$2(null,i__60464);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60468 = seq__60461;
var G__60469 = chunk__60462;
var G__60470 = count__60463;
var G__60471 = (i__60464 + (1));
seq__60461 = G__60468;
chunk__60462 = G__60469;
count__60463 = G__60470;
i__60464 = G__60471;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60461);
if(temp__5735__auto__){
var seq__60461__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60461__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60461__$1);
var G__60472 = cljs.core.chunk_rest(seq__60461__$1);
var G__60473 = c__4609__auto__;
var G__60474 = cljs.core.count(c__4609__auto__);
var G__60475 = (0);
seq__60461 = G__60472;
chunk__60462 = G__60473;
count__60463 = G__60474;
i__60464 = G__60475;
continue;
} else {
var tid = cljs.core.first(seq__60461__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60476 = cljs.core.next(seq__60461__$1);
var G__60477 = null;
var G__60478 = (0);
var G__60479 = (0);
seq__60461 = G__60476;
chunk__60462 = G__60477;
count__60463 = G__60478;
i__60464 = G__60479;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60457_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60457_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60458_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60458_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60459_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60459_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60460_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60460_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60465){
var map__60466 = p__60465;
var map__60466__$1 = (((((!((map__60466 == null))))?(((((map__60466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60466):map__60466);
var svc = map__60466__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60466__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60466__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
