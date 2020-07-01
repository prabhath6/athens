goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__67957,p__67958){
var map__67959 = p__67957;
var map__67959__$1 = (((((!((map__67959 == null))))?(((((map__67959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67959):map__67959);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67959__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67960 = p__67958;
var map__67960__$1 = (((((!((map__67960 == null))))?(((((map__67960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67960):map__67960);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67960__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__67963,p__67964){
var map__67965 = p__67963;
var map__67965__$1 = (((((!((map__67965 == null))))?(((((map__67965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67965):map__67965);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67965__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67966 = p__67964;
var map__67966__$1 = (((((!((map__67966 == null))))?(((((map__67966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67966):map__67966);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67966__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__67971,p__67972){
var map__67973 = p__67971;
var map__67973__$1 = (((((!((map__67973 == null))))?(((((map__67973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67973):map__67973);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67973__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67973__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67974 = p__67972;
var map__67974__$1 = (((((!((map__67974 == null))))?(((((map__67974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67974):map__67974);
var msg = map__67974__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67974__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__67977 = obj_support;
var map__67977__$1 = (((((!((map__67977 == null))))?(((((map__67977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67977):map__67977);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__67970_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67970_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67969_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67969_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__67987,tid){
var map__67988 = p__67987;
var map__67988__$1 = (((((!((map__67988 == null))))?(((((map__67988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67988):map__67988);
var svc = map__67988__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67988__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68006 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68007 = null;
var count__68008 = (0);
var i__68009 = (0);
while(true){
if((i__68009 < count__68008)){
var tid = chunk__68007.cljs$core$IIndexed$_nth$arity$2(null,i__68009);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68016 = seq__68006;
var G__68017 = chunk__68007;
var G__68018 = count__68008;
var G__68019 = (i__68009 + (1));
seq__68006 = G__68016;
chunk__68007 = G__68017;
count__68008 = G__68018;
i__68009 = G__68019;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68006);
if(temp__5735__auto__){
var seq__68006__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68006__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68006__$1);
var G__68020 = cljs.core.chunk_rest(seq__68006__$1);
var G__68021 = c__4609__auto__;
var G__68022 = cljs.core.count(c__4609__auto__);
var G__68023 = (0);
seq__68006 = G__68020;
chunk__68007 = G__68021;
count__68008 = G__68022;
i__68009 = G__68023;
continue;
} else {
var tid = cljs.core.first(seq__68006__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68024 = cljs.core.next(seq__68006__$1);
var G__68025 = null;
var G__68026 = (0);
var G__68027 = (0);
seq__68006 = G__68024;
chunk__68007 = G__68025;
count__68008 = G__68026;
i__68009 = G__68027;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__67994_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__67994_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__67995_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__67995_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__67996_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__67996_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__67997_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__67997_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68010){
var map__68011 = p__68010;
var map__68011__$1 = (((((!((map__68011 == null))))?(((((map__68011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68011):map__68011);
var svc = map__68011__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68011__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68011__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
