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
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_50408){
var state_val_50409 = (state_50408[(1)]);
if((state_val_50409 === (7))){
var state_50408__$1 = state_50408;
var statearr_50410_50452 = state_50408__$1;
(statearr_50410_50452[(2)] = false);

(statearr_50410_50452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50409 === (1))){
var inst_50371 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_50372 = [false];
var inst_50373 = cljs.core.PersistentHashMap.fromArrays(inst_50371,inst_50372);
var inst_50374 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50373], 0));
var state_50408__$1 = state_50408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50408__$1,(2),inst_50374);
} else {
if((state_val_50409 === (4))){
var state_50408__$1 = state_50408;
var statearr_50411_50453 = state_50408__$1;
(statearr_50411_50453[(2)] = false);

(statearr_50411_50453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50409 === (13))){
var inst_50404 = alert("Failed to retrieve data from GitHub");
var state_50408__$1 = state_50408;
var statearr_50412_50456 = state_50408__$1;
(statearr_50412_50456[(2)] = inst_50404);

(statearr_50412_50456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50409 === (6))){
var state_50408__$1 = state_50408;
var statearr_50413_50459 = state_50408__$1;
(statearr_50413_50459[(2)] = true);

(statearr_50413_50459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50409 === (3))){
var inst_50376 = (state_50408[(7)]);
var inst_50381 = inst_50376.cljs$lang$protocol_mask$partition0$;
var inst_50382 = (inst_50381 & (64));
var inst_50383 = inst_50376.cljs$core$ISeq$;
var inst_50384 = (cljs.core.PROTOCOL_SENTINEL === inst_50383);
var inst_50385 = ((inst_50382) || (inst_50384));
var state_50408__$1 = state_50408;
if(cljs.core.truth_(inst_50385)){
var statearr_50414_50463 = state_50408__$1;
(statearr_50414_50463[(1)] = (6));

} else {
var statearr_50415_50466 = state_50408__$1;
(statearr_50415_50466[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50409 === (12))){
var inst_50399 = (state_50408[(8)]);
var inst_50401 = athens.db.str_to_db_tx(inst_50399);
var inst_50402 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_50401) : posh.reagent.transact_BANG_.call(null,conn,inst_50401));
var state_50408__$1 = state_50408;
var statearr_50416_50469 = state_50408__$1;
(statearr_50416_50469[(2)] = inst_50402);

(statearr_50416_50469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50409 === (2))){
var inst_50376 = (state_50408[(7)]);
var inst_50376__$1 = (state_50408[(2)]);
var inst_50378 = (inst_50376__$1 == null);
var inst_50379 = cljs.core.not(inst_50378);
var state_50408__$1 = (function (){var statearr_50417 = state_50408;
(statearr_50417[(7)] = inst_50376__$1);

return statearr_50417;
})();
if(inst_50379){
var statearr_50418_50475 = state_50408__$1;
(statearr_50418_50475[(1)] = (3));

} else {
var statearr_50419_50476 = state_50408__$1;
(statearr_50419_50476[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50409 === (11))){
var inst_50397 = (state_50408[(2)]);
var inst_50398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50397,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_50399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50397,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_50408__$1 = (function (){var statearr_50420 = state_50408;
(statearr_50420[(8)] = inst_50399);

return statearr_50420;
})();
if(cljs.core.truth_(inst_50398)){
var statearr_50421_50477 = state_50408__$1;
(statearr_50421_50477[(1)] = (12));

} else {
var statearr_50422_50478 = state_50408__$1;
(statearr_50422_50478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50409 === (9))){
var inst_50376 = (state_50408[(7)]);
var inst_50394 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50376);
var state_50408__$1 = state_50408;
var statearr_50423_50479 = state_50408__$1;
(statearr_50423_50479[(2)] = inst_50394);

(statearr_50423_50479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50409 === (5))){
var inst_50392 = (state_50408[(2)]);
var state_50408__$1 = state_50408;
if(cljs.core.truth_(inst_50392)){
var statearr_50424_50480 = state_50408__$1;
(statearr_50424_50480[(1)] = (9));

} else {
var statearr_50425_50481 = state_50408__$1;
(statearr_50425_50481[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50409 === (14))){
var inst_50406 = (state_50408[(2)]);
var state_50408__$1 = state_50408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50408__$1,inst_50406);
} else {
if((state_val_50409 === (10))){
var inst_50376 = (state_50408[(7)]);
var state_50408__$1 = state_50408;
var statearr_50426_50482 = state_50408__$1;
(statearr_50426_50482[(2)] = inst_50376);

(statearr_50426_50482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50409 === (8))){
var inst_50389 = (state_50408[(2)]);
var state_50408__$1 = state_50408;
var statearr_50427_50483 = state_50408__$1;
(statearr_50427_50483[(2)] = inst_50389);

(statearr_50427_50483[(1)] = (5));


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
var statearr_50428 = [null,null,null,null,null,null,null,null,null];
(statearr_50428[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_50428[(1)] = (1));

return statearr_50428;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_50408){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_50408);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e50429){if((e50429 instanceof Object)){
var ex__39596__auto__ = e50429;
var statearr_50430_50484 = state_50408;
(statearr_50430_50484[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50429;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50485 = state_50408;
state_50408 = G__50485;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_50408){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_50408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_50431 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_50431[(6)] = c__39615__auto__);

return statearr_50431;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db50432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db50432 = (function (meta50433){
this.meta50433 = meta50433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db50432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50434,meta50433__$1){
var self__ = this;
var _50434__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db50432(meta50433__$1));
}));

(athens.devcards.db.t_athens$devcards$db50432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50434){
var self__ = this;
var _50434__$1 = this;
return self__.meta50433;
}));

(athens.devcards.db.t_athens$devcards$db50432.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db50432.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db50432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50433","meta50433",-1472853272,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db50432.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db50432.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db50432");

(athens.devcards.db.t_athens$devcards$db50432.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db50432");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db50432.
 */
athens.devcards.db.__GT_t_athens$devcards$db50432 = (function athens$devcards$db$__GT_t_athens$devcards$db50432(meta50433){
return (new athens.devcards.db.t_athens$devcards$db50432(meta50433));
});

}

return (new athens.devcards.db.t_athens$devcards$db50432(null));
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
