goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60275,p__60276){
var map__60277 = p__60275;
var map__60277__$1 = (((((!((map__60277 == null))))?(((((map__60277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60277):map__60277);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60277__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60278 = p__60276;
var map__60278__$1 = (((((!((map__60278 == null))))?(((((map__60278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60278):map__60278);
var msg = map__60278__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60278__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60281,p__60282){
var map__60283 = p__60281;
var map__60283__$1 = (((((!((map__60283 == null))))?(((((map__60283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60283):map__60283);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60283__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60284 = p__60282;
var map__60284__$1 = (((((!((map__60284 == null))))?(((((map__60284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60284):map__60284);
var msg = map__60284__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60284__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60287 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60289 = null;
var count__60290 = (0);
var i__60291 = (0);
while(true){
if((i__60291 < count__60290)){
var map__60297 = chunk__60289.cljs$core$IIndexed$_nth$arity$2(null,i__60291);
var map__60297__$1 = (((((!((map__60297 == null))))?(((((map__60297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60297):map__60297);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60297__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60344 = seq__60287;
var G__60345 = chunk__60289;
var G__60346 = count__60290;
var G__60347 = (i__60291 + (1));
seq__60287 = G__60344;
chunk__60289 = G__60345;
count__60290 = G__60346;
i__60291 = G__60347;
continue;
} else {
var G__60348 = seq__60287;
var G__60349 = chunk__60289;
var G__60350 = count__60290;
var G__60351 = (i__60291 + (1));
seq__60287 = G__60348;
chunk__60289 = G__60349;
count__60290 = G__60350;
i__60291 = G__60351;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60287);
if(temp__5735__auto__){
var seq__60287__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60287__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60287__$1);
var G__60352 = cljs.core.chunk_rest(seq__60287__$1);
var G__60353 = c__4609__auto__;
var G__60354 = cljs.core.count(c__4609__auto__);
var G__60355 = (0);
seq__60287 = G__60352;
chunk__60289 = G__60353;
count__60290 = G__60354;
i__60291 = G__60355;
continue;
} else {
var map__60299 = cljs.core.first(seq__60287__$1);
var map__60299__$1 = (((((!((map__60299 == null))))?(((((map__60299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60299):map__60299);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60299__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60356 = cljs.core.next(seq__60287__$1);
var G__60357 = null;
var G__60358 = (0);
var G__60359 = (0);
seq__60287 = G__60356;
chunk__60289 = G__60357;
count__60290 = G__60358;
i__60291 = G__60359;
continue;
} else {
var G__60360 = cljs.core.next(seq__60287__$1);
var G__60361 = null;
var G__60362 = (0);
var G__60363 = (0);
seq__60287 = G__60360;
chunk__60289 = G__60361;
count__60290 = G__60362;
i__60291 = G__60363;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60301,msg){
var map__60302 = p__60301;
var map__60302__$1 = (((((!((map__60302 == null))))?(((((map__60302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60302):map__60302);
var runtime = map__60302__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60302__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60304,key,p__60305){
var map__60306 = p__60304;
var map__60306__$1 = (((((!((map__60306 == null))))?(((((map__60306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60306):map__60306);
var state = map__60306__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60306__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60307 = p__60305;
var map__60307__$1 = (((((!((map__60307 == null))))?(((((map__60307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60307):map__60307);
var spec = map__60307__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60307__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60310,key,spec){
var map__60311 = p__60310;
var map__60311__$1 = (((((!((map__60311 == null))))?(((((map__60311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60311):map__60311);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60311__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60318){
var map__60319 = p__60318;
var map__60319__$1 = (((((!((map__60319 == null))))?(((((map__60319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60319):map__60319);
var runtime = map__60319__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60319__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60313_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60313_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60314_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60314_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60315_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60315_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60316_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60316_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60317_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60317_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60321,key){
var map__60322 = p__60321;
var map__60322__$1 = (((((!((map__60322 == null))))?(((((map__60322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60322):map__60322);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60322__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60324,p__60325){
var map__60326 = p__60324;
var map__60326__$1 = (((((!((map__60326 == null))))?(((((map__60326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60326):map__60326);
var runtime = map__60326__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60327 = p__60325;
var map__60327__$1 = (((((!((map__60327 == null))))?(((((map__60327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60327):map__60327);
var msg = map__60327__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60327__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60330 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60332 = null;
var count__60333 = (0);
var i__60334 = (0);
while(true){
if((i__60334 < count__60333)){
var map__60340 = chunk__60332.cljs$core$IIndexed$_nth$arity$2(null,i__60334);
var map__60340__$1 = (((((!((map__60340 == null))))?(((((map__60340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60340):map__60340);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60340__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60364 = seq__60330;
var G__60365 = chunk__60332;
var G__60366 = count__60333;
var G__60367 = (i__60334 + (1));
seq__60330 = G__60364;
chunk__60332 = G__60365;
count__60333 = G__60366;
i__60334 = G__60367;
continue;
} else {
var G__60368 = seq__60330;
var G__60369 = chunk__60332;
var G__60370 = count__60333;
var G__60371 = (i__60334 + (1));
seq__60330 = G__60368;
chunk__60332 = G__60369;
count__60333 = G__60370;
i__60334 = G__60371;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60330);
if(temp__5735__auto__){
var seq__60330__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60330__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60330__$1);
var G__60372 = cljs.core.chunk_rest(seq__60330__$1);
var G__60373 = c__4609__auto__;
var G__60374 = cljs.core.count(c__4609__auto__);
var G__60375 = (0);
seq__60330 = G__60372;
chunk__60332 = G__60373;
count__60333 = G__60374;
i__60334 = G__60375;
continue;
} else {
var map__60342 = cljs.core.first(seq__60330__$1);
var map__60342__$1 = (((((!((map__60342 == null))))?(((((map__60342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60342):map__60342);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60342__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60376 = cljs.core.next(seq__60330__$1);
var G__60377 = null;
var G__60378 = (0);
var G__60379 = (0);
seq__60330 = G__60376;
chunk__60332 = G__60377;
count__60333 = G__60378;
i__60334 = G__60379;
continue;
} else {
var G__60380 = cljs.core.next(seq__60330__$1);
var G__60381 = null;
var G__60382 = (0);
var G__60383 = (0);
seq__60330 = G__60380;
chunk__60332 = G__60381;
count__60333 = G__60382;
i__60334 = G__60383;
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
