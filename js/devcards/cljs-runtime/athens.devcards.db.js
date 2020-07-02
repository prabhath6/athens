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
var c__37008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_46695){
var state_val_46696 = (state_46695[(1)]);
if((state_val_46696 === (7))){
var state_46695__$1 = state_46695;
var statearr_46704_46792 = state_46695__$1;
(statearr_46704_46792[(2)] = false);

(statearr_46704_46792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (1))){
var inst_46654 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_46655 = [false];
var inst_46656 = cljs.core.PersistentHashMap.fromArrays(inst_46654,inst_46655);
var inst_46657 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_46656], 0));
var state_46695__$1 = state_46695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46695__$1,(2),inst_46657);
} else {
if((state_val_46696 === (4))){
var state_46695__$1 = state_46695;
var statearr_46705_46793 = state_46695__$1;
(statearr_46705_46793[(2)] = false);

(statearr_46705_46793[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (13))){
var inst_46691 = alert("Failed to retrieve data from GitHub");
var state_46695__$1 = state_46695;
var statearr_46709_46794 = state_46695__$1;
(statearr_46709_46794[(2)] = inst_46691);

(statearr_46709_46794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (6))){
var state_46695__$1 = state_46695;
var statearr_46710_46795 = state_46695__$1;
(statearr_46710_46795[(2)] = true);

(statearr_46710_46795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (3))){
var inst_46659 = (state_46695[(7)]);
var inst_46664 = inst_46659.cljs$lang$protocol_mask$partition0$;
var inst_46665 = (inst_46664 & (64));
var inst_46668 = inst_46659.cljs$core$ISeq$;
var inst_46669 = (cljs.core.PROTOCOL_SENTINEL === inst_46668);
var inst_46670 = ((inst_46665) || (inst_46669));
var state_46695__$1 = state_46695;
if(cljs.core.truth_(inst_46670)){
var statearr_46715_46808 = state_46695__$1;
(statearr_46715_46808[(1)] = (6));

} else {
var statearr_46716_46813 = state_46695__$1;
(statearr_46716_46813[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (12))){
var inst_46685 = (state_46695[(8)]);
var inst_46688 = athens.db.str_to_db_tx(inst_46685);
var inst_46689 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_46688) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_46688));
var state_46695__$1 = state_46695;
var statearr_46723_46815 = state_46695__$1;
(statearr_46723_46815[(2)] = inst_46689);

(statearr_46723_46815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (2))){
var inst_46659 = (state_46695[(7)]);
var inst_46659__$1 = (state_46695[(2)]);
var inst_46661 = (inst_46659__$1 == null);
var inst_46662 = cljs.core.not(inst_46661);
var state_46695__$1 = (function (){var statearr_46729 = state_46695;
(statearr_46729[(7)] = inst_46659__$1);

return statearr_46729;
})();
if(inst_46662){
var statearr_46730_46823 = state_46695__$1;
(statearr_46730_46823[(1)] = (3));

} else {
var statearr_46735_46824 = state_46695__$1;
(statearr_46735_46824[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (11))){
var inst_46683 = (state_46695[(2)]);
var inst_46684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46683,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_46685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46683,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_46695__$1 = (function (){var statearr_46739 = state_46695;
(statearr_46739[(8)] = inst_46685);

return statearr_46739;
})();
if(cljs.core.truth_(inst_46684)){
var statearr_46740_46825 = state_46695__$1;
(statearr_46740_46825[(1)] = (12));

} else {
var statearr_46741_46826 = state_46695__$1;
(statearr_46741_46826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (9))){
var inst_46659 = (state_46695[(7)]);
var inst_46680 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46659);
var state_46695__$1 = state_46695;
var statearr_46742_46828 = state_46695__$1;
(statearr_46742_46828[(2)] = inst_46680);

(statearr_46742_46828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (5))){
var inst_46677 = (state_46695[(2)]);
var state_46695__$1 = state_46695;
if(cljs.core.truth_(inst_46677)){
var statearr_46746_46834 = state_46695__$1;
(statearr_46746_46834[(1)] = (9));

} else {
var statearr_46747_46835 = state_46695__$1;
(statearr_46747_46835[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (14))){
var inst_46693 = (state_46695[(2)]);
var state_46695__$1 = state_46695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46695__$1,inst_46693);
} else {
if((state_val_46696 === (10))){
var inst_46659 = (state_46695[(7)]);
var state_46695__$1 = state_46695;
var statearr_46748_46840 = state_46695__$1;
(statearr_46748_46840[(2)] = inst_46659);

(statearr_46748_46840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (8))){
var inst_46674 = (state_46695[(2)]);
var state_46695__$1 = state_46695;
var statearr_46752_46841 = state_46695__$1;
(statearr_46752_46841[(2)] = inst_46674);

(statearr_46752_46841[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto____0 = (function (){
var statearr_46753 = [null,null,null,null,null,null,null,null,null];
(statearr_46753[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto__);

(statearr_46753[(1)] = (1));

return statearr_46753;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto____1 = (function (state_46695){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_46695);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e46757){if((e46757 instanceof Object)){
var ex__36815__auto__ = e46757;
var statearr_46758_46848 = state_46695;
(statearr_46758_46848[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46849 = state_46695;
state_46695 = G__46849;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto__ = function(state_46695){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto____1.call(this,state_46695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_46760 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_46760[(6)] = c__37008__auto__);

return statearr_46760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));

return c__37008__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db46769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db46769 = (function (meta46770){
this.meta46770 = meta46770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db46769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46771,meta46770__$1){
var self__ = this;
var _46771__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db46769(meta46770__$1));
}));

(athens.devcards.db.t_athens$devcards$db46769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46771){
var self__ = this;
var _46771__$1 = this;
return self__.meta46770;
}));

(athens.devcards.db.t_athens$devcards$db46769.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db46769.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42498__auto__,devcard_opts__42499__auto__){
var self__ = this;
var this__42498__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42499__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42517__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__42517__auto__)){
return (function (data_atom__42518__auto__,owner__42519__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42517__auto__,data_atom__42518__auto__,owner__42519__auto__], null));
});
} else {
return reagent.core.as_element(v__42517__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42499__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db46769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta46770","meta46770",-989065989,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db46769.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db46769.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db46769");

(athens.devcards.db.t_athens$devcards$db46769.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db46769");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db46769.
 */
athens.devcards.db.__GT_t_athens$devcards$db46769 = (function athens$devcards$db$__GT_t_athens$devcards$db46769(meta46770){
return (new athens.devcards.db.t_athens$devcards$db46769(meta46770));
});

}

return (new athens.devcards.db.t_athens$devcards$db46769(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db46778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db46778 = (function (meta46779){
this.meta46779 = meta46779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db46778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46780,meta46779__$1){
var self__ = this;
var _46780__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db46778(meta46779__$1));
}));

(athens.devcards.db.t_athens$devcards$db46778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46780){
var self__ = this;
var _46780__$1 = this;
return self__.meta46779;
}));

(athens.devcards.db.t_athens$devcards$db46778.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db46778.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42498__auto__,devcard_opts__42499__auto__){
var self__ = this;
var this__42498__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42499__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42517__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__42517__auto__)){
return (function (data_atom__42518__auto__,owner__42519__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42517__auto__,data_atom__42518__auto__,owner__42519__auto__], null));
});
} else {
return reagent.core.as_element(v__42517__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42499__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db46778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta46779","meta46779",162004883,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db46778.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db46778.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db46778");

(athens.devcards.db.t_athens$devcards$db46778.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db46778");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db46778.
 */
athens.devcards.db.__GT_t_athens$devcards$db46778 = (function athens$devcards$db$__GT_t_athens$devcards$db46778(meta46779){
return (new athens.devcards.db.t_athens$devcards$db46778(meta46779));
});

}

return (new athens.devcards.db.t_athens$devcards$db46778(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
