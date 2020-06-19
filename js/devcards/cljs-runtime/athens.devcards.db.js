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
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_50301){
var state_val_50302 = (state_50301[(1)]);
if((state_val_50302 === (7))){
var state_50301__$1 = state_50301;
var statearr_50303_50371 = state_50301__$1;
(statearr_50303_50371[(2)] = false);

(statearr_50303_50371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50302 === (1))){
var inst_50264 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_50265 = [false];
var inst_50266 = cljs.core.PersistentHashMap.fromArrays(inst_50264,inst_50265);
var inst_50267 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50266], 0));
var state_50301__$1 = state_50301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50301__$1,(2),inst_50267);
} else {
if((state_val_50302 === (4))){
var state_50301__$1 = state_50301;
var statearr_50304_50372 = state_50301__$1;
(statearr_50304_50372[(2)] = false);

(statearr_50304_50372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50302 === (13))){
var inst_50297 = alert("Failed to retrieve data from GitHub");
var state_50301__$1 = state_50301;
var statearr_50305_50373 = state_50301__$1;
(statearr_50305_50373[(2)] = inst_50297);

(statearr_50305_50373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50302 === (6))){
var state_50301__$1 = state_50301;
var statearr_50306_50374 = state_50301__$1;
(statearr_50306_50374[(2)] = true);

(statearr_50306_50374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50302 === (3))){
var inst_50269 = (state_50301[(7)]);
var inst_50274 = inst_50269.cljs$lang$protocol_mask$partition0$;
var inst_50275 = (inst_50274 & (64));
var inst_50276 = inst_50269.cljs$core$ISeq$;
var inst_50277 = (cljs.core.PROTOCOL_SENTINEL === inst_50276);
var inst_50278 = ((inst_50275) || (inst_50277));
var state_50301__$1 = state_50301;
if(cljs.core.truth_(inst_50278)){
var statearr_50307_50376 = state_50301__$1;
(statearr_50307_50376[(1)] = (6));

} else {
var statearr_50308_50378 = state_50301__$1;
(statearr_50308_50378[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50302 === (12))){
var inst_50292 = (state_50301[(8)]);
var inst_50294 = athens.db.str_to_db_tx(inst_50292);
var inst_50295 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_50294) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_50294));
var state_50301__$1 = state_50301;
var statearr_50309_50379 = state_50301__$1;
(statearr_50309_50379[(2)] = inst_50295);

(statearr_50309_50379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50302 === (2))){
var inst_50269 = (state_50301[(7)]);
var inst_50269__$1 = (state_50301[(2)]);
var inst_50271 = (inst_50269__$1 == null);
var inst_50272 = cljs.core.not(inst_50271);
var state_50301__$1 = (function (){var statearr_50310 = state_50301;
(statearr_50310[(7)] = inst_50269__$1);

return statearr_50310;
})();
if(inst_50272){
var statearr_50311_50380 = state_50301__$1;
(statearr_50311_50380[(1)] = (3));

} else {
var statearr_50312_50381 = state_50301__$1;
(statearr_50312_50381[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50302 === (11))){
var inst_50290 = (state_50301[(2)]);
var inst_50291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50290,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_50292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50290,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_50301__$1 = (function (){var statearr_50313 = state_50301;
(statearr_50313[(8)] = inst_50292);

return statearr_50313;
})();
if(cljs.core.truth_(inst_50291)){
var statearr_50314_50382 = state_50301__$1;
(statearr_50314_50382[(1)] = (12));

} else {
var statearr_50315_50385 = state_50301__$1;
(statearr_50315_50385[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50302 === (9))){
var inst_50269 = (state_50301[(7)]);
var inst_50287 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50269);
var state_50301__$1 = state_50301;
var statearr_50316_50386 = state_50301__$1;
(statearr_50316_50386[(2)] = inst_50287);

(statearr_50316_50386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50302 === (5))){
var inst_50285 = (state_50301[(2)]);
var state_50301__$1 = state_50301;
if(cljs.core.truth_(inst_50285)){
var statearr_50317_50387 = state_50301__$1;
(statearr_50317_50387[(1)] = (9));

} else {
var statearr_50318_50388 = state_50301__$1;
(statearr_50318_50388[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50302 === (14))){
var inst_50299 = (state_50301[(2)]);
var state_50301__$1 = state_50301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50301__$1,inst_50299);
} else {
if((state_val_50302 === (10))){
var inst_50269 = (state_50301[(7)]);
var state_50301__$1 = state_50301;
var statearr_50325_50389 = state_50301__$1;
(statearr_50325_50389[(2)] = inst_50269);

(statearr_50325_50389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50302 === (8))){
var inst_50282 = (state_50301[(2)]);
var state_50301__$1 = state_50301;
var statearr_50327_50413 = state_50301__$1;
(statearr_50327_50413[(2)] = inst_50282);

(statearr_50327_50413[(1)] = (5));


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
var statearr_50329 = [null,null,null,null,null,null,null,null,null];
(statearr_50329[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_50329[(1)] = (1));

return statearr_50329;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_50301){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_50301);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e50330){if((e50330 instanceof Object)){
var ex__39596__auto__ = e50330;
var statearr_50331_50414 = state_50301;
(statearr_50331_50414[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50415 = state_50301;
state_50301 = G__50415;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_50301){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_50301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_50332 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_50332[(6)] = c__39615__auto__);

return statearr_50332;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db50346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db50346 = (function (meta50347){
this.meta50347 = meta50347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db50346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50348,meta50347__$1){
var self__ = this;
var _50348__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db50346(meta50347__$1));
}));

(athens.devcards.db.t_athens$devcards$db50346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50348){
var self__ = this;
var _50348__$1 = this;
return self__.meta50347;
}));

(athens.devcards.db.t_athens$devcards$db50346.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db50346.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48148__auto__,devcard_opts__48149__auto__){
var self__ = this;
var this__48148__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48149__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48167__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__48167__auto__)){
return (function (data_atom__48168__auto__,owner__48169__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48167__auto__,data_atom__48168__auto__,owner__48169__auto__], null));
});
} else {
return reagent.core.as_element(v__48167__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48149__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db50346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50347","meta50347",2038153622,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db50346.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db50346.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db50346");

(athens.devcards.db.t_athens$devcards$db50346.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db50346");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db50346.
 */
athens.devcards.db.__GT_t_athens$devcards$db50346 = (function athens$devcards$db$__GT_t_athens$devcards$db50346(meta50347){
return (new athens.devcards.db.t_athens$devcards$db50346(meta50347));
});

}

return (new athens.devcards.db.t_athens$devcards$db50346(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db50359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db50359 = (function (meta50360){
this.meta50360 = meta50360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db50359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50361,meta50360__$1){
var self__ = this;
var _50361__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db50359(meta50360__$1));
}));

(athens.devcards.db.t_athens$devcards$db50359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50361){
var self__ = this;
var _50361__$1 = this;
return self__.meta50360;
}));

(athens.devcards.db.t_athens$devcards$db50359.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db50359.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48148__auto__,devcard_opts__48149__auto__){
var self__ = this;
var this__48148__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48149__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48167__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__48167__auto__)){
return (function (data_atom__48168__auto__,owner__48169__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48167__auto__,data_atom__48168__auto__,owner__48169__auto__], null));
});
} else {
return reagent.core.as_element(v__48167__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48149__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db50359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50360","meta50360",-390601553,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db50359.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db50359.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db50359");

(athens.devcards.db.t_athens$devcards$db50359.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db50359");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db50359.
 */
athens.devcards.db.__GT_t_athens$devcards$db50359 = (function athens$devcards$db$__GT_t_athens$devcards$db50359(meta50360){
return (new athens.devcards.db.t_athens$devcards$db50359(meta50360));
});

}

return (new athens.devcards.db.t_athens$devcards$db50359(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
