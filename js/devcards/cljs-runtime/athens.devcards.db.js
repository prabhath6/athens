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
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_49563){
var state_val_49564 = (state_49563[(1)]);
if((state_val_49564 === (7))){
var state_49563__$1 = state_49563;
var statearr_49565_49783 = state_49563__$1;
(statearr_49565_49783[(2)] = false);

(statearr_49565_49783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49564 === (1))){
var inst_49526 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_49527 = [false];
var inst_49528 = cljs.core.PersistentHashMap.fromArrays(inst_49526,inst_49527);
var inst_49529 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49528], 0));
var state_49563__$1 = state_49563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49563__$1,(2),inst_49529);
} else {
if((state_val_49564 === (4))){
var state_49563__$1 = state_49563;
var statearr_49566_49795 = state_49563__$1;
(statearr_49566_49795[(2)] = false);

(statearr_49566_49795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49564 === (13))){
var inst_49559 = alert("Failed to retrieve data from GitHub");
var state_49563__$1 = state_49563;
var statearr_49567_49796 = state_49563__$1;
(statearr_49567_49796[(2)] = inst_49559);

(statearr_49567_49796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49564 === (6))){
var state_49563__$1 = state_49563;
var statearr_49568_49798 = state_49563__$1;
(statearr_49568_49798[(2)] = true);

(statearr_49568_49798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49564 === (3))){
var inst_49531 = (state_49563[(7)]);
var inst_49536 = inst_49531.cljs$lang$protocol_mask$partition0$;
var inst_49537 = (inst_49536 & (64));
var inst_49538 = inst_49531.cljs$core$ISeq$;
var inst_49539 = (cljs.core.PROTOCOL_SENTINEL === inst_49538);
var inst_49540 = ((inst_49537) || (inst_49539));
var state_49563__$1 = state_49563;
if(cljs.core.truth_(inst_49540)){
var statearr_49569_49801 = state_49563__$1;
(statearr_49569_49801[(1)] = (6));

} else {
var statearr_49570_49803 = state_49563__$1;
(statearr_49570_49803[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49564 === (12))){
var inst_49554 = (state_49563[(8)]);
var inst_49556 = athens.db.str_to_db_tx(inst_49554);
var inst_49557 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_49556) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_49556));
var state_49563__$1 = state_49563;
var statearr_49590_49805 = state_49563__$1;
(statearr_49590_49805[(2)] = inst_49557);

(statearr_49590_49805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49564 === (2))){
var inst_49531 = (state_49563[(7)]);
var inst_49531__$1 = (state_49563[(2)]);
var inst_49533 = (inst_49531__$1 == null);
var inst_49534 = cljs.core.not(inst_49533);
var state_49563__$1 = (function (){var statearr_49592 = state_49563;
(statearr_49592[(7)] = inst_49531__$1);

return statearr_49592;
})();
if(inst_49534){
var statearr_49593_49806 = state_49563__$1;
(statearr_49593_49806[(1)] = (3));

} else {
var statearr_49595_49807 = state_49563__$1;
(statearr_49595_49807[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49564 === (11))){
var inst_49552 = (state_49563[(2)]);
var inst_49553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49552,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_49554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49552,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_49563__$1 = (function (){var statearr_49597 = state_49563;
(statearr_49597[(8)] = inst_49554);

return statearr_49597;
})();
if(cljs.core.truth_(inst_49553)){
var statearr_49598_49808 = state_49563__$1;
(statearr_49598_49808[(1)] = (12));

} else {
var statearr_49600_49809 = state_49563__$1;
(statearr_49600_49809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49564 === (9))){
var inst_49531 = (state_49563[(7)]);
var inst_49549 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49531);
var state_49563__$1 = state_49563;
var statearr_49610_49810 = state_49563__$1;
(statearr_49610_49810[(2)] = inst_49549);

(statearr_49610_49810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49564 === (5))){
var inst_49547 = (state_49563[(2)]);
var state_49563__$1 = state_49563;
if(cljs.core.truth_(inst_49547)){
var statearr_49615_49812 = state_49563__$1;
(statearr_49615_49812[(1)] = (9));

} else {
var statearr_49616_49813 = state_49563__$1;
(statearr_49616_49813[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49564 === (14))){
var inst_49561 = (state_49563[(2)]);
var state_49563__$1 = state_49563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49563__$1,inst_49561);
} else {
if((state_val_49564 === (10))){
var inst_49531 = (state_49563[(7)]);
var state_49563__$1 = state_49563;
var statearr_49619_49846 = state_49563__$1;
(statearr_49619_49846[(2)] = inst_49531);

(statearr_49619_49846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49564 === (8))){
var inst_49544 = (state_49563[(2)]);
var state_49563__$1 = state_49563;
var statearr_49622_49851 = state_49563__$1;
(statearr_49622_49851[(2)] = inst_49544);

(statearr_49622_49851[(1)] = (5));


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
var statearr_49625 = [null,null,null,null,null,null,null,null,null];
(statearr_49625[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_49625[(1)] = (1));

return statearr_49625;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_49563){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_49563);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e49632){if((e49632 instanceof Object)){
var ex__39596__auto__ = e49632;
var statearr_49637_49884 = state_49563;
(statearr_49637_49884[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49885 = state_49563;
state_49563 = G__49885;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_49563){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_49563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_49684 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_49684[(6)] = c__39615__auto__);

return statearr_49684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

return c__39615__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),handler,new cljs.core.Keyword(null,"label","label",1718410804),"Load Real Data"], null)], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset DB"], null)], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds. Can only press once.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49712 = (function (meta49713){
this.meta49713 = meta49713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49714,meta49713__$1){
var self__ = this;
var _49714__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49712(meta49713__$1));
}));

(athens.devcards.db.t_athens$devcards$db49712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49714){
var self__ = this;
var _49714__$1 = this;
return self__.meta49713;
}));

(athens.devcards.db.t_athens$devcards$db49712.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49712.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46449__auto__,devcard_opts__46450__auto__){
var self__ = this;
var this__46449__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46450__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46468__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__46468__auto__)){
return (function (data_atom__46469__auto__,owner__46470__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46468__auto__,data_atom__46469__auto__,owner__46470__auto__], null));
});
} else {
return reagent.core.as_element(v__46468__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46450__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49713","meta49713",-1135453171,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49712.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49712.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49712");

(athens.devcards.db.t_athens$devcards$db49712.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db49712");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49712.
 */
athens.devcards.db.__GT_t_athens$devcards$db49712 = (function athens$devcards$db$__GT_t_athens$devcards$db49712(meta49713){
return (new athens.devcards.db.t_athens$devcards$db49712(meta49713));
});

}

return (new athens.devcards.db.t_athens$devcards$db49712(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49745 = (function (meta49746){
this.meta49746 = meta49746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49747,meta49746__$1){
var self__ = this;
var _49747__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49745(meta49746__$1));
}));

(athens.devcards.db.t_athens$devcards$db49745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49747){
var self__ = this;
var _49747__$1 = this;
return self__.meta49746;
}));

(athens.devcards.db.t_athens$devcards$db49745.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49745.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46449__auto__,devcard_opts__46450__auto__){
var self__ = this;
var this__46449__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46450__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46468__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__46468__auto__)){
return (function (data_atom__46469__auto__,owner__46470__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46468__auto__,data_atom__46469__auto__,owner__46470__auto__], null));
});
} else {
return reagent.core.as_element(v__46468__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46450__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49746","meta49746",1819300716,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49745.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49745.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49745");

(athens.devcards.db.t_athens$devcards$db49745.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db49745");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49745.
 */
athens.devcards.db.__GT_t_athens$devcards$db49745 = (function athens$devcards$db$__GT_t_athens$devcards$db49745(meta49746){
return (new athens.devcards.db.t_athens$devcards$db49745(meta49746));
});

}

return (new athens.devcards.db.t_athens$devcards$db49745(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
