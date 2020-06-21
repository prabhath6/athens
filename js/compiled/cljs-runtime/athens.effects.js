goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__46363_46496 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__46364_46497 = (function (datoms){
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__46363_46496,G__46364_46497) : re_frame.core.reg_fx.call(null,G__46363_46496,G__46364_46497));
var G__46365_46500 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__46366_46501 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__46365_46500,G__46366_46501) : re_frame.core.reg_fx.call(null,G__46365_46500,G__46366_46501));
var G__46367_46502 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__46368_46503 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__46367_46502,G__46368_46503) : re_frame.core.reg_fx.call(null,G__46367_46502,G__46368_46503));
var G__46369_46505 = new cljs.core.Keyword(null,"http","http",382524695);
var G__46370_46506 = (function (p__46371){
var map__46372 = p__46371;
var map__46372__$1 = (((((!((map__46372 == null))))?(((((map__46372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46372):map__46372);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46372__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46372__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46372__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46372__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46372__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_46418){
var state_val_46419 = (state_46418[(1)]);
if((state_val_46419 === (7))){
var inst_46385 = (state_46418[(7)]);
var inst_46385__$1 = (state_46418[(2)]);
var inst_46387 = (inst_46385__$1 == null);
var inst_46388 = cljs.core.not(inst_46387);
var state_46418__$1 = (function (){var statearr_46420 = state_46418;
(statearr_46420[(7)] = inst_46385__$1);

return statearr_46420;
})();
if(inst_46388){
var statearr_46421_46514 = state_46418__$1;
(statearr_46421_46514[(1)] = (8));

} else {
var statearr_46422_46517 = state_46418__$1;
(statearr_46422_46517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (1))){
var state_46418__$1 = state_46418;
var G__46423_46518 = method;
var G__46423_46519__$1 = (((G__46423_46518 instanceof cljs.core.Keyword))?G__46423_46518.fqn:null);
switch (G__46423_46519__$1) {
case "post":
var statearr_46430_46522 = state_46418__$1;
(statearr_46430_46522[(1)] = (3));


break;
case "get":
var statearr_46431_46526 = state_46418__$1;
(statearr_46431_46526[(1)] = (4));


break;
case "put":
var statearr_46432_46535 = state_46418__$1;
(statearr_46432_46535[(1)] = (5));


break;
case "delete":
var statearr_46433_46539 = state_46418__$1;
(statearr_46433_46539[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46423_46519__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (4))){
var state_46418__$1 = state_46418;
var statearr_46434_46542 = state_46418__$1;
(statearr_46434_46542[(2)] = cljs_http.client.get);

(statearr_46434_46542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (15))){
var inst_46385 = (state_46418[(7)]);
var state_46418__$1 = state_46418;
var statearr_46435_46543 = state_46418__$1;
(statearr_46435_46543[(2)] = inst_46385);

(statearr_46435_46543[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (13))){
var inst_46398 = (state_46418[(2)]);
var state_46418__$1 = state_46418;
var statearr_46436_46544 = state_46418__$1;
(statearr_46436_46544[(2)] = inst_46398);

(statearr_46436_46544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (6))){
var state_46418__$1 = state_46418;
var statearr_46437_46545 = state_46418__$1;
(statearr_46437_46545[(2)] = cljs_http.client.delete$);

(statearr_46437_46545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (17))){
var inst_46408 = (state_46418[(8)]);
var inst_46410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_46408);
var inst_46411 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_46410) : re_frame.core.dispatch.call(null,inst_46410));
var state_46418__$1 = state_46418;
var statearr_46438_46555 = state_46418__$1;
(statearr_46438_46555[(2)] = inst_46411);

(statearr_46438_46555[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (3))){
var state_46418__$1 = state_46418;
var statearr_46439_46562 = state_46418__$1;
(statearr_46439_46562[(2)] = cljs_http.client.post);

(statearr_46439_46562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (12))){
var state_46418__$1 = state_46418;
var statearr_46440_46563 = state_46418__$1;
(statearr_46440_46563[(2)] = false);

(statearr_46440_46563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (2))){
var inst_46382 = (state_46418[(2)]);
var inst_46383 = (inst_46382.cljs$core$IFn$_invoke$arity$2 ? inst_46382.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_46382.call(null,url,opts));
var state_46418__$1 = state_46418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46418__$1,(7),inst_46383);
} else {
if((state_val_46419 === (19))){
var inst_46416 = (state_46418[(2)]);
var state_46418__$1 = state_46418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46418__$1,inst_46416);
} else {
if((state_val_46419 === (11))){
var state_46418__$1 = state_46418;
var statearr_46441_46568 = state_46418__$1;
(statearr_46441_46568[(2)] = true);

(statearr_46441_46568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (9))){
var state_46418__$1 = state_46418;
var statearr_46442_46579 = state_46418__$1;
(statearr_46442_46579[(2)] = false);

(statearr_46442_46579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (5))){
var state_46418__$1 = state_46418;
var statearr_46443_46581 = state_46418__$1;
(statearr_46443_46581[(2)] = cljs_http.client.put);

(statearr_46443_46581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (14))){
var inst_46385 = (state_46418[(7)]);
var inst_46403 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46385);
var state_46418__$1 = state_46418;
var statearr_46444_46583 = state_46418__$1;
(statearr_46444_46583[(2)] = inst_46403);

(statearr_46444_46583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (16))){
var inst_46406 = (state_46418[(9)]);
var inst_46406__$1 = (state_46418[(2)]);
var inst_46407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46406__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_46408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46406__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_46418__$1 = (function (){var statearr_46445 = state_46418;
(statearr_46445[(9)] = inst_46406__$1);

(statearr_46445[(8)] = inst_46408);

return statearr_46445;
})();
if(cljs.core.truth_(inst_46407)){
var statearr_46446_46589 = state_46418__$1;
(statearr_46446_46589[(1)] = (17));

} else {
var statearr_46447_46590 = state_46418__$1;
(statearr_46447_46590[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (10))){
var inst_46401 = (state_46418[(2)]);
var state_46418__$1 = state_46418;
if(cljs.core.truth_(inst_46401)){
var statearr_46448_46593 = state_46418__$1;
(statearr_46448_46593[(1)] = (14));

} else {
var statearr_46449_46596 = state_46418__$1;
(statearr_46449_46596[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (18))){
var inst_46406 = (state_46418[(9)]);
var inst_46413 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_46406);
var inst_46414 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_46413) : re_frame.core.dispatch.call(null,inst_46413));
var state_46418__$1 = state_46418;
var statearr_46452_46597 = state_46418__$1;
(statearr_46452_46597[(2)] = inst_46414);

(statearr_46452_46597[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46419 === (8))){
var inst_46385 = (state_46418[(7)]);
var inst_46390 = inst_46385.cljs$lang$protocol_mask$partition0$;
var inst_46391 = (inst_46390 & (64));
var inst_46392 = inst_46385.cljs$core$ISeq$;
var inst_46393 = (cljs.core.PROTOCOL_SENTINEL === inst_46392);
var inst_46394 = ((inst_46391) || (inst_46393));
var state_46418__$1 = state_46418;
if(cljs.core.truth_(inst_46394)){
var statearr_46458_46598 = state_46418__$1;
(statearr_46458_46598[(1)] = (11));

} else {
var statearr_46459_46599 = state_46418__$1;
(statearr_46459_46599[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__41713__auto__ = null;
var athens$effects$state_machine__41713__auto____0 = (function (){
var statearr_46460 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46460[(0)] = athens$effects$state_machine__41713__auto__);

(statearr_46460[(1)] = (1));

return statearr_46460;
});
var athens$effects$state_machine__41713__auto____1 = (function (state_46418){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_46418);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e46475){if((e46475 instanceof Object)){
var ex__41716__auto__ = e46475;
var statearr_46477_46601 = state_46418;
(statearr_46477_46601[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46602 = state_46418;
state_46418 = G__46602;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$effects$state_machine__41713__auto__ = function(state_46418){
switch(arguments.length){
case 0:
return athens$effects$state_machine__41713__auto____0.call(this);
case 1:
return athens$effects$state_machine__41713__auto____1.call(this,state_46418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__41713__auto____0;
athens$effects$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__41713__auto____1;
return athens$effects$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_46478 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_46478[(6)] = c__41735__auto__);

return statearr_46478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__46369_46505,G__46370_46506) : re_frame.core.reg_fx.call(null,G__46369_46505,G__46370_46506));
var G__46481_46615 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__46482_46616 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__46483){
var map__46484 = p__46483;
var map__46484__$1 = (((((!((map__46484 == null))))?(((((map__46484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46484):map__46484);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46484__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46484__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46484__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46484__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__46487 = action;
var G__46487__$1 = (((G__46487 instanceof cljs.core.Keyword))?G__46487.fqn:null);
switch (G__46487__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46487__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__46481_46615,G__46482_46616) : re_frame.core.reg_fx.call(null,G__46481_46615,G__46482_46616));

//# sourceMappingURL=athens.effects.js.map
