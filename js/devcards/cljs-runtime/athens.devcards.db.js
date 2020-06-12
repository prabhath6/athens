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
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_50404){
var state_val_50405 = (state_50404[(1)]);
if((state_val_50405 === (7))){
var state_50404__$1 = state_50404;
var statearr_50406_50474 = state_50404__$1;
(statearr_50406_50474[(2)] = false);

(statearr_50406_50474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50405 === (1))){
var inst_50367 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_50368 = [false];
var inst_50369 = cljs.core.PersistentHashMap.fromArrays(inst_50367,inst_50368);
var inst_50370 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50369], 0));
var state_50404__$1 = state_50404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50404__$1,(2),inst_50370);
} else {
if((state_val_50405 === (4))){
var state_50404__$1 = state_50404;
var statearr_50407_50480 = state_50404__$1;
(statearr_50407_50480[(2)] = false);

(statearr_50407_50480[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50405 === (13))){
var inst_50400 = alert("Failed to retrieve data from GitHub");
var state_50404__$1 = state_50404;
var statearr_50408_50482 = state_50404__$1;
(statearr_50408_50482[(2)] = inst_50400);

(statearr_50408_50482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50405 === (6))){
var state_50404__$1 = state_50404;
var statearr_50409_50487 = state_50404__$1;
(statearr_50409_50487[(2)] = true);

(statearr_50409_50487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50405 === (3))){
var inst_50372 = (state_50404[(7)]);
var inst_50377 = inst_50372.cljs$lang$protocol_mask$partition0$;
var inst_50378 = (inst_50377 & (64));
var inst_50379 = inst_50372.cljs$core$ISeq$;
var inst_50380 = (cljs.core.PROTOCOL_SENTINEL === inst_50379);
var inst_50381 = ((inst_50378) || (inst_50380));
var state_50404__$1 = state_50404;
if(cljs.core.truth_(inst_50381)){
var statearr_50410_50488 = state_50404__$1;
(statearr_50410_50488[(1)] = (6));

} else {
var statearr_50411_50489 = state_50404__$1;
(statearr_50411_50489[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50405 === (12))){
var inst_50395 = (state_50404[(8)]);
var inst_50397 = athens.db.str_to_db_tx(inst_50395);
var inst_50398 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_50397) : posh.reagent.transact_BANG_.call(null,conn,inst_50397));
var state_50404__$1 = state_50404;
var statearr_50412_50490 = state_50404__$1;
(statearr_50412_50490[(2)] = inst_50398);

(statearr_50412_50490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50405 === (2))){
var inst_50372 = (state_50404[(7)]);
var inst_50372__$1 = (state_50404[(2)]);
var inst_50374 = (inst_50372__$1 == null);
var inst_50375 = cljs.core.not(inst_50374);
var state_50404__$1 = (function (){var statearr_50413 = state_50404;
(statearr_50413[(7)] = inst_50372__$1);

return statearr_50413;
})();
if(inst_50375){
var statearr_50414_50491 = state_50404__$1;
(statearr_50414_50491[(1)] = (3));

} else {
var statearr_50415_50492 = state_50404__$1;
(statearr_50415_50492[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50405 === (11))){
var inst_50393 = (state_50404[(2)]);
var inst_50394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50393,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_50395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50393,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_50404__$1 = (function (){var statearr_50416 = state_50404;
(statearr_50416[(8)] = inst_50395);

return statearr_50416;
})();
if(cljs.core.truth_(inst_50394)){
var statearr_50417_50493 = state_50404__$1;
(statearr_50417_50493[(1)] = (12));

} else {
var statearr_50418_50494 = state_50404__$1;
(statearr_50418_50494[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50405 === (9))){
var inst_50372 = (state_50404[(7)]);
var inst_50390 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50372);
var state_50404__$1 = state_50404;
var statearr_50419_50495 = state_50404__$1;
(statearr_50419_50495[(2)] = inst_50390);

(statearr_50419_50495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50405 === (5))){
var inst_50388 = (state_50404[(2)]);
var state_50404__$1 = state_50404;
if(cljs.core.truth_(inst_50388)){
var statearr_50420_50496 = state_50404__$1;
(statearr_50420_50496[(1)] = (9));

} else {
var statearr_50421_50497 = state_50404__$1;
(statearr_50421_50497[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50405 === (14))){
var inst_50402 = (state_50404[(2)]);
var state_50404__$1 = state_50404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50404__$1,inst_50402);
} else {
if((state_val_50405 === (10))){
var inst_50372 = (state_50404[(7)]);
var state_50404__$1 = state_50404;
var statearr_50422_50498 = state_50404__$1;
(statearr_50422_50498[(2)] = inst_50372);

(statearr_50422_50498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50405 === (8))){
var inst_50385 = (state_50404[(2)]);
var state_50404__$1 = state_50404;
var statearr_50423_50499 = state_50404__$1;
(statearr_50423_50499[(2)] = inst_50385);

(statearr_50423_50499[(1)] = (5));


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
var statearr_50424 = [null,null,null,null,null,null,null,null,null];
(statearr_50424[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_50424[(1)] = (1));

return statearr_50424;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_50404){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_50404);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e50425){if((e50425 instanceof Object)){
var ex__39596__auto__ = e50425;
var statearr_50426_50536 = state_50404;
(statearr_50426_50536[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50538 = state_50404;
state_50404 = G__50538;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_50404){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_50404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_50437 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_50437[(6)] = c__39615__auto__);

return statearr_50437;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db50445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db50445 = (function (meta50446){
this.meta50446 = meta50446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db50445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50447,meta50446__$1){
var self__ = this;
var _50447__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db50445(meta50446__$1));
}));

(athens.devcards.db.t_athens$devcards$db50445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50447){
var self__ = this;
var _50447__$1 = this;
return self__.meta50446;
}));

(athens.devcards.db.t_athens$devcards$db50445.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db50445.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47891__auto__,devcard_opts__47892__auto__){
var self__ = this;
var this__47891__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47892__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47910__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47910__auto__)){
return (function (data_atom__47911__auto__,owner__47912__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47910__auto__,data_atom__47911__auto__,owner__47912__auto__], null));
});
} else {
return reagent.core.as_element(v__47910__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47892__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db50445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50446","meta50446",669835397,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db50445.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db50445.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db50445");

(athens.devcards.db.t_athens$devcards$db50445.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db50445");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db50445.
 */
athens.devcards.db.__GT_t_athens$devcards$db50445 = (function athens$devcards$db$__GT_t_athens$devcards$db50445(meta50446){
return (new athens.devcards.db.t_athens$devcards$db50445(meta50446));
});

}

return (new athens.devcards.db.t_athens$devcards$db50445(null));
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
