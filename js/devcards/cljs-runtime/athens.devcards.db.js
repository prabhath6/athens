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
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_51435){
var state_val_51436 = (state_51435[(1)]);
if((state_val_51436 === (7))){
var state_51435__$1 = state_51435;
var statearr_51437_51462 = state_51435__$1;
(statearr_51437_51462[(2)] = false);

(statearr_51437_51462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51436 === (1))){
var inst_51398 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51399 = [false];
var inst_51400 = cljs.core.PersistentHashMap.fromArrays(inst_51398,inst_51399);
var inst_51401 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51400], 0));
var state_51435__$1 = state_51435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51435__$1,(2),inst_51401);
} else {
if((state_val_51436 === (4))){
var state_51435__$1 = state_51435;
var statearr_51438_51463 = state_51435__$1;
(statearr_51438_51463[(2)] = false);

(statearr_51438_51463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51436 === (13))){
var inst_51431 = alert("Failed to retrieve data from GitHub");
var state_51435__$1 = state_51435;
var statearr_51439_51464 = state_51435__$1;
(statearr_51439_51464[(2)] = inst_51431);

(statearr_51439_51464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51436 === (6))){
var state_51435__$1 = state_51435;
var statearr_51440_51465 = state_51435__$1;
(statearr_51440_51465[(2)] = true);

(statearr_51440_51465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51436 === (3))){
var inst_51403 = (state_51435[(7)]);
var inst_51408 = inst_51403.cljs$lang$protocol_mask$partition0$;
var inst_51409 = (inst_51408 & (64));
var inst_51410 = inst_51403.cljs$core$ISeq$;
var inst_51411 = (cljs.core.PROTOCOL_SENTINEL === inst_51410);
var inst_51412 = ((inst_51409) || (inst_51411));
var state_51435__$1 = state_51435;
if(cljs.core.truth_(inst_51412)){
var statearr_51441_51476 = state_51435__$1;
(statearr_51441_51476[(1)] = (6));

} else {
var statearr_51442_51478 = state_51435__$1;
(statearr_51442_51478[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51436 === (12))){
var inst_51426 = (state_51435[(8)]);
var inst_51428 = athens.db.str_to_db_tx(inst_51426);
var inst_51429 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_51428) : posh.reagent.transact_BANG_.call(null,conn,inst_51428));
var state_51435__$1 = state_51435;
var statearr_51443_51479 = state_51435__$1;
(statearr_51443_51479[(2)] = inst_51429);

(statearr_51443_51479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51436 === (2))){
var inst_51403 = (state_51435[(7)]);
var inst_51403__$1 = (state_51435[(2)]);
var inst_51405 = (inst_51403__$1 == null);
var inst_51406 = cljs.core.not(inst_51405);
var state_51435__$1 = (function (){var statearr_51444 = state_51435;
(statearr_51444[(7)] = inst_51403__$1);

return statearr_51444;
})();
if(inst_51406){
var statearr_51445_51481 = state_51435__$1;
(statearr_51445_51481[(1)] = (3));

} else {
var statearr_51446_51482 = state_51435__$1;
(statearr_51446_51482[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51436 === (11))){
var inst_51424 = (state_51435[(2)]);
var inst_51425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51424,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_51426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51424,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_51435__$1 = (function (){var statearr_51447 = state_51435;
(statearr_51447[(8)] = inst_51426);

return statearr_51447;
})();
if(cljs.core.truth_(inst_51425)){
var statearr_51448_51483 = state_51435__$1;
(statearr_51448_51483[(1)] = (12));

} else {
var statearr_51449_51484 = state_51435__$1;
(statearr_51449_51484[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51436 === (9))){
var inst_51403 = (state_51435[(7)]);
var inst_51421 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51403);
var state_51435__$1 = state_51435;
var statearr_51450_51487 = state_51435__$1;
(statearr_51450_51487[(2)] = inst_51421);

(statearr_51450_51487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51436 === (5))){
var inst_51419 = (state_51435[(2)]);
var state_51435__$1 = state_51435;
if(cljs.core.truth_(inst_51419)){
var statearr_51451_51500 = state_51435__$1;
(statearr_51451_51500[(1)] = (9));

} else {
var statearr_51452_51501 = state_51435__$1;
(statearr_51452_51501[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51436 === (14))){
var inst_51433 = (state_51435[(2)]);
var state_51435__$1 = state_51435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51435__$1,inst_51433);
} else {
if((state_val_51436 === (10))){
var inst_51403 = (state_51435[(7)]);
var state_51435__$1 = state_51435;
var statearr_51453_51502 = state_51435__$1;
(statearr_51453_51502[(2)] = inst_51403);

(statearr_51453_51502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51436 === (8))){
var inst_51416 = (state_51435[(2)]);
var state_51435__$1 = state_51435;
var statearr_51454_51503 = state_51435__$1;
(statearr_51454_51503[(2)] = inst_51416);

(statearr_51454_51503[(1)] = (5));


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
var statearr_51455 = [null,null,null,null,null,null,null,null,null];
(statearr_51455[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_51455[(1)] = (1));

return statearr_51455;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_51435){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_51435);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e51456){if((e51456 instanceof Object)){
var ex__39596__auto__ = e51456;
var statearr_51457_51504 = state_51435;
(statearr_51457_51504[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51505 = state_51435;
state_51435 = G__51505;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_51435){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_51435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_51458 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_51458[(6)] = c__39615__auto__);

return statearr_51458;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db51459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db51459 = (function (meta51460){
this.meta51460 = meta51460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db51459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51461,meta51460__$1){
var self__ = this;
var _51461__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db51459(meta51460__$1));
}));

(athens.devcards.db.t_athens$devcards$db51459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51461){
var self__ = this;
var _51461__$1 = this;
return self__.meta51460;
}));

(athens.devcards.db.t_athens$devcards$db51459.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db51459.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47804__auto__,devcard_opts__47805__auto__){
var self__ = this;
var this__47804__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47805__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47823__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47823__auto__)){
return (function (data_atom__47824__auto__,owner__47825__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47823__auto__,data_atom__47824__auto__,owner__47825__auto__], null));
});
} else {
return reagent.core.as_element(v__47823__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47805__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db51459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51460","meta51460",701343581,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db51459.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db51459.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db51459");

(athens.devcards.db.t_athens$devcards$db51459.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db51459");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db51459.
 */
athens.devcards.db.__GT_t_athens$devcards$db51459 = (function athens$devcards$db$__GT_t_athens$devcards$db51459(meta51460){
return (new athens.devcards.db.t_athens$devcards$db51459(meta51460));
});

}

return (new athens.devcards.db.t_athens$devcards$db51459(null));
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
