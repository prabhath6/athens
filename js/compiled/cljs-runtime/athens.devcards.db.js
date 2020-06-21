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
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_52223){
var state_val_52224 = (state_52223[(1)]);
if((state_val_52224 === (7))){
var state_52223__$1 = state_52223;
var statearr_52225_52247 = state_52223__$1;
(statearr_52225_52247[(2)] = false);

(statearr_52225_52247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (1))){
var inst_52186 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_52187 = [false];
var inst_52188 = cljs.core.PersistentHashMap.fromArrays(inst_52186,inst_52187);
var inst_52189 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52188], 0));
var state_52223__$1 = state_52223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52223__$1,(2),inst_52189);
} else {
if((state_val_52224 === (4))){
var state_52223__$1 = state_52223;
var statearr_52226_52248 = state_52223__$1;
(statearr_52226_52248[(2)] = false);

(statearr_52226_52248[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (13))){
var inst_52219 = alert("Failed to retrieve data from GitHub");
var state_52223__$1 = state_52223;
var statearr_52227_52249 = state_52223__$1;
(statearr_52227_52249[(2)] = inst_52219);

(statearr_52227_52249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (6))){
var state_52223__$1 = state_52223;
var statearr_52228_52250 = state_52223__$1;
(statearr_52228_52250[(2)] = true);

(statearr_52228_52250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (3))){
var inst_52191 = (state_52223[(7)]);
var inst_52196 = inst_52191.cljs$lang$protocol_mask$partition0$;
var inst_52197 = (inst_52196 & (64));
var inst_52198 = inst_52191.cljs$core$ISeq$;
var inst_52199 = (cljs.core.PROTOCOL_SENTINEL === inst_52198);
var inst_52200 = ((inst_52197) || (inst_52199));
var state_52223__$1 = state_52223;
if(cljs.core.truth_(inst_52200)){
var statearr_52229_52251 = state_52223__$1;
(statearr_52229_52251[(1)] = (6));

} else {
var statearr_52230_52252 = state_52223__$1;
(statearr_52230_52252[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (12))){
var inst_52214 = (state_52223[(8)]);
var inst_52216 = athens.db.str_to_db_tx(inst_52214);
var inst_52217 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_52216) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_52216));
var state_52223__$1 = state_52223;
var statearr_52231_52253 = state_52223__$1;
(statearr_52231_52253[(2)] = inst_52217);

(statearr_52231_52253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (2))){
var inst_52191 = (state_52223[(7)]);
var inst_52191__$1 = (state_52223[(2)]);
var inst_52193 = (inst_52191__$1 == null);
var inst_52194 = cljs.core.not(inst_52193);
var state_52223__$1 = (function (){var statearr_52232 = state_52223;
(statearr_52232[(7)] = inst_52191__$1);

return statearr_52232;
})();
if(inst_52194){
var statearr_52233_52254 = state_52223__$1;
(statearr_52233_52254[(1)] = (3));

} else {
var statearr_52234_52255 = state_52223__$1;
(statearr_52234_52255[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (11))){
var inst_52212 = (state_52223[(2)]);
var inst_52213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52212,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_52214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52212,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_52223__$1 = (function (){var statearr_52235 = state_52223;
(statearr_52235[(8)] = inst_52214);

return statearr_52235;
})();
if(cljs.core.truth_(inst_52213)){
var statearr_52236_52256 = state_52223__$1;
(statearr_52236_52256[(1)] = (12));

} else {
var statearr_52237_52257 = state_52223__$1;
(statearr_52237_52257[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (9))){
var inst_52191 = (state_52223[(7)]);
var inst_52209 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52191);
var state_52223__$1 = state_52223;
var statearr_52238_52258 = state_52223__$1;
(statearr_52238_52258[(2)] = inst_52209);

(statearr_52238_52258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (5))){
var inst_52207 = (state_52223[(2)]);
var state_52223__$1 = state_52223;
if(cljs.core.truth_(inst_52207)){
var statearr_52239_52259 = state_52223__$1;
(statearr_52239_52259[(1)] = (9));

} else {
var statearr_52240_52260 = state_52223__$1;
(statearr_52240_52260[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (14))){
var inst_52221 = (state_52223[(2)]);
var state_52223__$1 = state_52223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52223__$1,inst_52221);
} else {
if((state_val_52224 === (10))){
var inst_52191 = (state_52223[(7)]);
var state_52223__$1 = state_52223;
var statearr_52241_52261 = state_52223__$1;
(statearr_52241_52261[(2)] = inst_52191);

(statearr_52241_52261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52224 === (8))){
var inst_52204 = (state_52223[(2)]);
var state_52223__$1 = state_52223;
var statearr_52242_52262 = state_52223__$1;
(statearr_52242_52262[(2)] = inst_52204);

(statearr_52242_52262[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0 = (function (){
var statearr_52243 = [null,null,null,null,null,null,null,null,null];
(statearr_52243[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__);

(statearr_52243[(1)] = (1));

return statearr_52243;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1 = (function (state_52223){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_52223);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e52244){if((e52244 instanceof Object)){
var ex__41716__auto__ = e52244;
var statearr_52245_52263 = state_52223;
(statearr_52245_52263[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52264 = state_52223;
state_52223 = G__52264;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = function(state_52223){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1.call(this,state_52223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_52246 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_52246[(6)] = c__41735__auto__);

return statearr_52246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
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

//# sourceMappingURL=athens.devcards.db.js.map
