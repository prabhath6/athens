goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59402,p__59403){
var map__59404 = p__59402;
var map__59404__$1 = (((((!((map__59404 == null))))?(((((map__59404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59404):map__59404);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59404__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59405 = p__59403;
var map__59405__$1 = (((((!((map__59405 == null))))?(((((map__59405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59405):map__59405);
var msg = map__59405__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59405__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59408,p__59409){
var map__59410 = p__59408;
var map__59410__$1 = (((((!((map__59410 == null))))?(((((map__59410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59410):map__59410);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59411 = p__59409;
var map__59411__$1 = (((((!((map__59411 == null))))?(((((map__59411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59411):map__59411);
var msg = map__59411__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59411__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59414 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59416 = null;
var count__59417 = (0);
var i__59418 = (0);
while(true){
if((i__59418 < count__59417)){
var map__59424 = chunk__59416.cljs$core$IIndexed$_nth$arity$2(null,i__59418);
var map__59424__$1 = (((((!((map__59424 == null))))?(((((map__59424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59424):map__59424);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59424__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59471 = seq__59414;
var G__59472 = chunk__59416;
var G__59473 = count__59417;
var G__59474 = (i__59418 + (1));
seq__59414 = G__59471;
chunk__59416 = G__59472;
count__59417 = G__59473;
i__59418 = G__59474;
continue;
} else {
var G__59475 = seq__59414;
var G__59476 = chunk__59416;
var G__59477 = count__59417;
var G__59478 = (i__59418 + (1));
seq__59414 = G__59475;
chunk__59416 = G__59476;
count__59417 = G__59477;
i__59418 = G__59478;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59414);
if(temp__5735__auto__){
var seq__59414__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59414__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59414__$1);
var G__59479 = cljs.core.chunk_rest(seq__59414__$1);
var G__59480 = c__4609__auto__;
var G__59481 = cljs.core.count(c__4609__auto__);
var G__59482 = (0);
seq__59414 = G__59479;
chunk__59416 = G__59480;
count__59417 = G__59481;
i__59418 = G__59482;
continue;
} else {
var map__59426 = cljs.core.first(seq__59414__$1);
var map__59426__$1 = (((((!((map__59426 == null))))?(((((map__59426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59426):map__59426);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59426__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59483 = cljs.core.next(seq__59414__$1);
var G__59484 = null;
var G__59485 = (0);
var G__59486 = (0);
seq__59414 = G__59483;
chunk__59416 = G__59484;
count__59417 = G__59485;
i__59418 = G__59486;
continue;
} else {
var G__59487 = cljs.core.next(seq__59414__$1);
var G__59488 = null;
var G__59489 = (0);
var G__59490 = (0);
seq__59414 = G__59487;
chunk__59416 = G__59488;
count__59417 = G__59489;
i__59418 = G__59490;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59428,msg){
var map__59429 = p__59428;
var map__59429__$1 = (((((!((map__59429 == null))))?(((((map__59429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59429):map__59429);
var runtime = map__59429__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59429__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59431,key,p__59432){
var map__59433 = p__59431;
var map__59433__$1 = (((((!((map__59433 == null))))?(((((map__59433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59433):map__59433);
var state = map__59433__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59433__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59434 = p__59432;
var map__59434__$1 = (((((!((map__59434 == null))))?(((((map__59434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59434):map__59434);
var spec = map__59434__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59434__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59437,key,spec){
var map__59438 = p__59437;
var map__59438__$1 = (((((!((map__59438 == null))))?(((((map__59438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59438):map__59438);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59438__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59445){
var map__59446 = p__59445;
var map__59446__$1 = (((((!((map__59446 == null))))?(((((map__59446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59446):map__59446);
var runtime = map__59446__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59446__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59440_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59440_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59441_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59441_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59442_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59442_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59443_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59443_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59444_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59444_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59448,key){
var map__59449 = p__59448;
var map__59449__$1 = (((((!((map__59449 == null))))?(((((map__59449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59449):map__59449);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59449__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59451,p__59452){
var map__59453 = p__59451;
var map__59453__$1 = (((((!((map__59453 == null))))?(((((map__59453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59453):map__59453);
var runtime = map__59453__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59453__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59454 = p__59452;
var map__59454__$1 = (((((!((map__59454 == null))))?(((((map__59454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59454):map__59454);
var msg = map__59454__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59457 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59459 = null;
var count__59460 = (0);
var i__59461 = (0);
while(true){
if((i__59461 < count__59460)){
var map__59467 = chunk__59459.cljs$core$IIndexed$_nth$arity$2(null,i__59461);
var map__59467__$1 = (((((!((map__59467 == null))))?(((((map__59467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59467):map__59467);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59467__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59491 = seq__59457;
var G__59492 = chunk__59459;
var G__59493 = count__59460;
var G__59494 = (i__59461 + (1));
seq__59457 = G__59491;
chunk__59459 = G__59492;
count__59460 = G__59493;
i__59461 = G__59494;
continue;
} else {
var G__59495 = seq__59457;
var G__59496 = chunk__59459;
var G__59497 = count__59460;
var G__59498 = (i__59461 + (1));
seq__59457 = G__59495;
chunk__59459 = G__59496;
count__59460 = G__59497;
i__59461 = G__59498;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59457);
if(temp__5735__auto__){
var seq__59457__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59457__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59457__$1);
var G__59499 = cljs.core.chunk_rest(seq__59457__$1);
var G__59500 = c__4609__auto__;
var G__59501 = cljs.core.count(c__4609__auto__);
var G__59502 = (0);
seq__59457 = G__59499;
chunk__59459 = G__59500;
count__59460 = G__59501;
i__59461 = G__59502;
continue;
} else {
var map__59469 = cljs.core.first(seq__59457__$1);
var map__59469__$1 = (((((!((map__59469 == null))))?(((((map__59469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59469):map__59469);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59469__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59503 = cljs.core.next(seq__59457__$1);
var G__59504 = null;
var G__59505 = (0);
var G__59506 = (0);
seq__59457 = G__59503;
chunk__59459 = G__59504;
count__59460 = G__59505;
i__59461 = G__59506;
continue;
} else {
var G__59507 = cljs.core.next(seq__59457__$1);
var G__59508 = null;
var G__59509 = (0);
var G__59510 = (0);
seq__59457 = G__59507;
chunk__59459 = G__59508;
count__59460 = G__59509;
i__59461 = G__59510;
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
