goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__67956,p__67957){
var map__67958 = p__67956;
var map__67958__$1 = (((((!((map__67958 == null))))?(((((map__67958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67958):map__67958);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67958__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67959 = p__67957;
var map__67959__$1 = (((((!((map__67959 == null))))?(((((map__67959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67959):map__67959);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67959__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__67962,p__67963){
var map__67964 = p__67962;
var map__67964__$1 = (((((!((map__67964 == null))))?(((((map__67964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67964):map__67964);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67964__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67965 = p__67963;
var map__67965__$1 = (((((!((map__67965 == null))))?(((((map__67965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67965):map__67965);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67965__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__67970,p__67971){
var map__67972 = p__67970;
var map__67972__$1 = (((((!((map__67972 == null))))?(((((map__67972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67972):map__67972);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67972__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67972__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67973 = p__67971;
var map__67973__$1 = (((((!((map__67973 == null))))?(((((map__67973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67973):map__67973);
var msg = map__67973__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67973__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__67976 = obj_support;
var map__67976__$1 = (((((!((map__67976 == null))))?(((((map__67976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67976):map__67976);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67976__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__67969_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67969_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67968_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67968_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__67978,tid){
var map__67979 = p__67978;
var map__67979__$1 = (((((!((map__67979 == null))))?(((((map__67979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67979):map__67979);
var svc = map__67979__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67979__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__67985 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__67986 = null;
var count__67987 = (0);
var i__67988 = (0);
while(true){
if((i__67988 < count__67987)){
var tid = chunk__67986.cljs$core$IIndexed$_nth$arity$2(null,i__67988);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__67992 = seq__67985;
var G__67993 = chunk__67986;
var G__67994 = count__67987;
var G__67995 = (i__67988 + (1));
seq__67985 = G__67992;
chunk__67986 = G__67993;
count__67987 = G__67994;
i__67988 = G__67995;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67985);
if(temp__5735__auto__){
var seq__67985__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67985__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67985__$1);
var G__67996 = cljs.core.chunk_rest(seq__67985__$1);
var G__67997 = c__4609__auto__;
var G__67998 = cljs.core.count(c__4609__auto__);
var G__67999 = (0);
seq__67985 = G__67996;
chunk__67986 = G__67997;
count__67987 = G__67998;
i__67988 = G__67999;
continue;
} else {
var tid = cljs.core.first(seq__67985__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68000 = cljs.core.next(seq__67985__$1);
var G__68001 = null;
var G__68002 = (0);
var G__68003 = (0);
seq__67985 = G__68000;
chunk__67986 = G__68001;
count__67987 = G__68002;
i__67988 = G__68003;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__67981_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__67981_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__67982_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__67982_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__67983_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__67983_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__67984_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__67984_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__67989){
var map__67990 = p__67989;
var map__67990__$1 = (((((!((map__67990 == null))))?(((((map__67990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67990):map__67990);
var svc = map__67990__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67990__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67990__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
