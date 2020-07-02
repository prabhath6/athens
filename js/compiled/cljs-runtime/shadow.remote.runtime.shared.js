goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__88495,p__88496){
var map__88497 = p__88495;
var map__88497__$1 = (((((!((map__88497 == null))))?(((((map__88497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88497):map__88497);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88497__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__88498 = p__88496;
var map__88498__$1 = (((((!((map__88498 == null))))?(((((map__88498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88498):map__88498);
var msg = map__88498__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88498__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__88501,p__88502){
var map__88503 = p__88501;
var map__88503__$1 = (((((!((map__88503 == null))))?(((((map__88503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88503):map__88503);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88503__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__88504 = p__88502;
var map__88504__$1 = (((((!((map__88504 == null))))?(((((map__88504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88504):map__88504);
var msg = map__88504__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88504__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__88507 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__88509 = null;
var count__88510 = (0);
var i__88511 = (0);
while(true){
if((i__88511 < count__88510)){
var map__88517 = chunk__88509.cljs$core$IIndexed$_nth$arity$2(null,i__88511);
var map__88517__$1 = (((((!((map__88517 == null))))?(((((map__88517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88517):map__88517);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88517__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__88576 = seq__88507;
var G__88577 = chunk__88509;
var G__88578 = count__88510;
var G__88579 = (i__88511 + (1));
seq__88507 = G__88576;
chunk__88509 = G__88577;
count__88510 = G__88578;
i__88511 = G__88579;
continue;
} else {
var G__88580 = seq__88507;
var G__88581 = chunk__88509;
var G__88582 = count__88510;
var G__88583 = (i__88511 + (1));
seq__88507 = G__88580;
chunk__88509 = G__88581;
count__88510 = G__88582;
i__88511 = G__88583;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__88507);
if(temp__5735__auto__){
var seq__88507__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__88507__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__88507__$1);
var G__88584 = cljs.core.chunk_rest(seq__88507__$1);
var G__88585 = c__4609__auto__;
var G__88586 = cljs.core.count(c__4609__auto__);
var G__88587 = (0);
seq__88507 = G__88584;
chunk__88509 = G__88585;
count__88510 = G__88586;
i__88511 = G__88587;
continue;
} else {
var map__88519 = cljs.core.first(seq__88507__$1);
var map__88519__$1 = (((((!((map__88519 == null))))?(((((map__88519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88519):map__88519);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88519__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__88588 = cljs.core.next(seq__88507__$1);
var G__88589 = null;
var G__88590 = (0);
var G__88591 = (0);
seq__88507 = G__88588;
chunk__88509 = G__88589;
count__88510 = G__88590;
i__88511 = G__88591;
continue;
} else {
var G__88592 = cljs.core.next(seq__88507__$1);
var G__88593 = null;
var G__88594 = (0);
var G__88595 = (0);
seq__88507 = G__88592;
chunk__88509 = G__88593;
count__88510 = G__88594;
i__88511 = G__88595;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__88521,msg){
var map__88522 = p__88521;
var map__88522__$1 = (((((!((map__88522 == null))))?(((((map__88522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88522):map__88522);
var runtime = map__88522__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88522__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__88524,key,p__88525){
var map__88526 = p__88524;
var map__88526__$1 = (((((!((map__88526 == null))))?(((((map__88526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88526):map__88526);
var state = map__88526__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88526__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__88527 = p__88525;
var map__88527__$1 = (((((!((map__88527 == null))))?(((((map__88527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88527):map__88527);
var spec = map__88527__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88527__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__88533,key,spec){
var map__88534 = p__88533;
var map__88534__$1 = (((((!((map__88534 == null))))?(((((map__88534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88534):map__88534);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88534__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__88544){
var map__88545 = p__88544;
var map__88545__$1 = (((((!((map__88545 == null))))?(((((map__88545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88545):map__88545);
var runtime = map__88545__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88545__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__88536_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__88536_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__88540_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__88540_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__88541_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__88541_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__88542_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__88542_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__88543_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__88543_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__88553,key){
var map__88554 = p__88553;
var map__88554__$1 = (((((!((map__88554 == null))))?(((((map__88554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88554):map__88554);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88554__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__88556,p__88557){
var map__88558 = p__88556;
var map__88558__$1 = (((((!((map__88558 == null))))?(((((map__88558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88558):map__88558);
var runtime = map__88558__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88558__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__88559 = p__88557;
var map__88559__$1 = (((((!((map__88559 == null))))?(((((map__88559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88559):map__88559);
var msg = map__88559__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88559__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__88562 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__88564 = null;
var count__88565 = (0);
var i__88566 = (0);
while(true){
if((i__88566 < count__88565)){
var map__88572 = chunk__88564.cljs$core$IIndexed$_nth$arity$2(null,i__88566);
var map__88572__$1 = (((((!((map__88572 == null))))?(((((map__88572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88572):map__88572);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88572__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__88606 = seq__88562;
var G__88607 = chunk__88564;
var G__88608 = count__88565;
var G__88609 = (i__88566 + (1));
seq__88562 = G__88606;
chunk__88564 = G__88607;
count__88565 = G__88608;
i__88566 = G__88609;
continue;
} else {
var G__88610 = seq__88562;
var G__88611 = chunk__88564;
var G__88612 = count__88565;
var G__88613 = (i__88566 + (1));
seq__88562 = G__88610;
chunk__88564 = G__88611;
count__88565 = G__88612;
i__88566 = G__88613;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__88562);
if(temp__5735__auto__){
var seq__88562__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__88562__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__88562__$1);
var G__88614 = cljs.core.chunk_rest(seq__88562__$1);
var G__88615 = c__4609__auto__;
var G__88616 = cljs.core.count(c__4609__auto__);
var G__88617 = (0);
seq__88562 = G__88614;
chunk__88564 = G__88615;
count__88565 = G__88616;
i__88566 = G__88617;
continue;
} else {
var map__88574 = cljs.core.first(seq__88562__$1);
var map__88574__$1 = (((((!((map__88574 == null))))?(((((map__88574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88574):map__88574);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88574__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__88618 = cljs.core.next(seq__88562__$1);
var G__88619 = null;
var G__88620 = (0);
var G__88621 = (0);
seq__88562 = G__88618;
chunk__88564 = G__88619;
count__88565 = G__88620;
i__88566 = G__88621;
continue;
} else {
var G__88622 = cljs.core.next(seq__88562__$1);
var G__88623 = null;
var G__88624 = (0);
var G__88625 = (0);
seq__88562 = G__88622;
chunk__88564 = G__88623;
count__88565 = G__88624;
i__88566 = G__88625;
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
