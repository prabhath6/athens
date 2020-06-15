goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(conn){
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_50389){
var state_val_50390 = (state_50389[(1)]);
if((state_val_50390 === (7))){
var state_50389__$1 = state_50389;
var statearr_50427_50556 = state_50389__$1;
(statearr_50427_50556[(2)] = false);

(statearr_50427_50556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (1))){
var inst_50335 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_50336 = [false];
var inst_50337 = cljs.core.PersistentHashMap.fromArrays(inst_50335,inst_50336);
var inst_50338 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50337], 0));
var state_50389__$1 = state_50389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50389__$1,(2),inst_50338);
} else {
if((state_val_50390 === (4))){
var state_50389__$1 = state_50389;
var statearr_50428_50557 = state_50389__$1;
(statearr_50428_50557[(2)] = false);

(statearr_50428_50557[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (13))){
var inst_50377 = alert("Failed to retrieve data from GitHub");
var state_50389__$1 = state_50389;
var statearr_50429_50568 = state_50389__$1;
(statearr_50429_50568[(2)] = inst_50377);

(statearr_50429_50568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (6))){
var state_50389__$1 = state_50389;
var statearr_50430_50572 = state_50389__$1;
(statearr_50430_50572[(2)] = true);

(statearr_50430_50572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (3))){
var inst_50340 = (state_50389[(7)]);
var inst_50345 = inst_50340.cljs$lang$protocol_mask$partition0$;
var inst_50346 = (inst_50345 & (64));
var inst_50353 = inst_50340.cljs$core$ISeq$;
var inst_50354 = (cljs.core.PROTOCOL_SENTINEL === inst_50353);
var inst_50355 = ((inst_50346) || (inst_50354));
var state_50389__$1 = state_50389;
if(cljs.core.truth_(inst_50355)){
var statearr_50431_50580 = state_50389__$1;
(statearr_50431_50580[(1)] = (6));

} else {
var statearr_50432_50581 = state_50389__$1;
(statearr_50432_50581[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (12))){
var inst_50370 = (state_50389[(8)]);
var inst_50374 = athens.db.str_to_db_tx(inst_50370);
var inst_50375 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_50374) : posh.reagent.transact_BANG_.call(null,conn,inst_50374));
var state_50389__$1 = state_50389;
var statearr_50433_50600 = state_50389__$1;
(statearr_50433_50600[(2)] = inst_50375);

(statearr_50433_50600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (2))){
var inst_50340 = (state_50389[(7)]);
var inst_50340__$1 = (state_50389[(2)]);
var inst_50342 = (inst_50340__$1 == null);
var inst_50343 = cljs.core.not(inst_50342);
var state_50389__$1 = (function (){var statearr_50434 = state_50389;
(statearr_50434[(7)] = inst_50340__$1);

return statearr_50434;
})();
if(inst_50343){
var statearr_50435_50601 = state_50389__$1;
(statearr_50435_50601[(1)] = (3));

} else {
var statearr_50436_50602 = state_50389__$1;
(statearr_50436_50602[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (11))){
var inst_50368 = (state_50389[(2)]);
var inst_50369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50368,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_50370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50368,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_50389__$1 = (function (){var statearr_50437 = state_50389;
(statearr_50437[(8)] = inst_50370);

return statearr_50437;
})();
if(cljs.core.truth_(inst_50369)){
var statearr_50438_50605 = state_50389__$1;
(statearr_50438_50605[(1)] = (12));

} else {
var statearr_50439_50606 = state_50389__$1;
(statearr_50439_50606[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (9))){
var inst_50340 = (state_50389[(7)]);
var inst_50364 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50340);
var state_50389__$1 = state_50389;
var statearr_50440_50607 = state_50389__$1;
(statearr_50440_50607[(2)] = inst_50364);

(statearr_50440_50607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (5))){
var inst_50362 = (state_50389[(2)]);
var state_50389__$1 = state_50389;
if(cljs.core.truth_(inst_50362)){
var statearr_50441_50608 = state_50389__$1;
(statearr_50441_50608[(1)] = (9));

} else {
var statearr_50442_50609 = state_50389__$1;
(statearr_50442_50609[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (14))){
var inst_50379 = (state_50389[(2)]);
var state_50389__$1 = state_50389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50389__$1,inst_50379);
} else {
if((state_val_50390 === (10))){
var inst_50340 = (state_50389[(7)]);
var state_50389__$1 = state_50389;
var statearr_50443_50621 = state_50389__$1;
(statearr_50443_50621[(2)] = inst_50340);

(statearr_50443_50621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (8))){
var inst_50359 = (state_50389[(2)]);
var state_50389__$1 = state_50389;
var statearr_50444_50622 = state_50389__$1;
(statearr_50444_50622[(2)] = inst_50359);

(statearr_50444_50622[(1)] = (5));


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
});
return (function() {
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0 = (function (){
var statearr_50445 = [null,null,null,null,null,null,null,null,null];
(statearr_50445[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_50445[(1)] = (1));

return statearr_50445;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_50389){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_50389);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e50446){if((e50446 instanceof Object)){
var ex__39596__auto__ = e50446;
var statearr_50447_50623 = state_50389;
(statearr_50447_50623[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50624 = state_50389;
state_50389 = G__50624;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_50389){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_50389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_50460 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_50460[(6)] = c__39615__auto__);

return statearr_50460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

return c__39615__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),handler,new cljs.core.Keyword(null,"label","label",1718410804),"Load Real Data"], null)], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db50462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db50462 = (function (meta50463){
this.meta50463 = meta50463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db50462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50464,meta50463__$1){
var self__ = this;
var _50464__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db50462(meta50463__$1));
}));

(athens.devcards.db.t_athens$devcards$db50462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50464){
var self__ = this;
var _50464__$1 = this;
return self__.meta50463;
}));

(athens.devcards.db.t_athens$devcards$db50462.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db50462.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47882__auto__,devcard_opts__47883__auto__){
var self__ = this;
var this__47882__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47883__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47901__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47901__auto__)){
return (function (data_atom__47902__auto__,owner__47903__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47901__auto__,data_atom__47902__auto__,owner__47903__auto__], null));
});
} else {
return reagent.core.as_element(v__47901__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47883__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db50462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50463","meta50463",45461489,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db50462.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db50462.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db50462");

(athens.devcards.db.t_athens$devcards$db50462.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db50462");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db50462.
 */
athens.devcards.db.__GT_t_athens$devcards$db50462 = (function athens$devcards$db$__GT_t_athens$devcards$db50462(meta50463){
return (new athens.devcards.db.t_athens$devcards$db50462(meta50463));
});

}

return (new athens.devcards.db.t_athens$devcards$db50462(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.db.new_conn = (function athens$devcards$db$new_conn(){
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
});
athens.devcards.db.posh_conn_BANG_ = (function athens$devcards$db$posh_conn_BANG_(conn){
return (posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(conn) : posh.reagent.posh_BANG_.call(null,conn));
});

//# sourceMappingURL=athens.devcards.db.js.map
