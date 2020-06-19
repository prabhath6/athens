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
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_52884){
var state_val_52885 = (state_52884[(1)]);
if((state_val_52885 === (7))){
var state_52884__$1 = state_52884;
var statearr_52886_52908 = state_52884__$1;
(statearr_52886_52908[(2)] = false);

(statearr_52886_52908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52885 === (1))){
var inst_52847 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_52848 = [false];
var inst_52849 = cljs.core.PersistentHashMap.fromArrays(inst_52847,inst_52848);
var inst_52850 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52849], 0));
var state_52884__$1 = state_52884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52884__$1,(2),inst_52850);
} else {
if((state_val_52885 === (4))){
var state_52884__$1 = state_52884;
var statearr_52887_52909 = state_52884__$1;
(statearr_52887_52909[(2)] = false);

(statearr_52887_52909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52885 === (13))){
var inst_52880 = alert("Failed to retrieve data from GitHub");
var state_52884__$1 = state_52884;
var statearr_52888_52910 = state_52884__$1;
(statearr_52888_52910[(2)] = inst_52880);

(statearr_52888_52910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52885 === (6))){
var state_52884__$1 = state_52884;
var statearr_52889_52911 = state_52884__$1;
(statearr_52889_52911[(2)] = true);

(statearr_52889_52911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52885 === (3))){
var inst_52852 = (state_52884[(7)]);
var inst_52857 = inst_52852.cljs$lang$protocol_mask$partition0$;
var inst_52858 = (inst_52857 & (64));
var inst_52859 = inst_52852.cljs$core$ISeq$;
var inst_52860 = (cljs.core.PROTOCOL_SENTINEL === inst_52859);
var inst_52861 = ((inst_52858) || (inst_52860));
var state_52884__$1 = state_52884;
if(cljs.core.truth_(inst_52861)){
var statearr_52890_52912 = state_52884__$1;
(statearr_52890_52912[(1)] = (6));

} else {
var statearr_52891_52913 = state_52884__$1;
(statearr_52891_52913[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52885 === (12))){
var inst_52875 = (state_52884[(8)]);
var inst_52877 = athens.db.str_to_db_tx(inst_52875);
var inst_52878 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_52877) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_52877));
var state_52884__$1 = state_52884;
var statearr_52892_52914 = state_52884__$1;
(statearr_52892_52914[(2)] = inst_52878);

(statearr_52892_52914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52885 === (2))){
var inst_52852 = (state_52884[(7)]);
var inst_52852__$1 = (state_52884[(2)]);
var inst_52854 = (inst_52852__$1 == null);
var inst_52855 = cljs.core.not(inst_52854);
var state_52884__$1 = (function (){var statearr_52893 = state_52884;
(statearr_52893[(7)] = inst_52852__$1);

return statearr_52893;
})();
if(inst_52855){
var statearr_52894_52915 = state_52884__$1;
(statearr_52894_52915[(1)] = (3));

} else {
var statearr_52895_52916 = state_52884__$1;
(statearr_52895_52916[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52885 === (11))){
var inst_52873 = (state_52884[(2)]);
var inst_52874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52873,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_52875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52873,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_52884__$1 = (function (){var statearr_52896 = state_52884;
(statearr_52896[(8)] = inst_52875);

return statearr_52896;
})();
if(cljs.core.truth_(inst_52874)){
var statearr_52897_52917 = state_52884__$1;
(statearr_52897_52917[(1)] = (12));

} else {
var statearr_52898_52918 = state_52884__$1;
(statearr_52898_52918[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52885 === (9))){
var inst_52852 = (state_52884[(7)]);
var inst_52870 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52852);
var state_52884__$1 = state_52884;
var statearr_52899_52919 = state_52884__$1;
(statearr_52899_52919[(2)] = inst_52870);

(statearr_52899_52919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52885 === (5))){
var inst_52868 = (state_52884[(2)]);
var state_52884__$1 = state_52884;
if(cljs.core.truth_(inst_52868)){
var statearr_52900_52920 = state_52884__$1;
(statearr_52900_52920[(1)] = (9));

} else {
var statearr_52901_52921 = state_52884__$1;
(statearr_52901_52921[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52885 === (14))){
var inst_52882 = (state_52884[(2)]);
var state_52884__$1 = state_52884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52884__$1,inst_52882);
} else {
if((state_val_52885 === (10))){
var inst_52852 = (state_52884[(7)]);
var state_52884__$1 = state_52884;
var statearr_52902_52922 = state_52884__$1;
(statearr_52902_52922[(2)] = inst_52852);

(statearr_52902_52922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52885 === (8))){
var inst_52865 = (state_52884[(2)]);
var state_52884__$1 = state_52884;
var statearr_52903_52923 = state_52884__$1;
(statearr_52903_52923[(2)] = inst_52865);

(statearr_52903_52923[(1)] = (5));


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
var statearr_52904 = [null,null,null,null,null,null,null,null,null];
(statearr_52904[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__);

(statearr_52904[(1)] = (1));

return statearr_52904;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1 = (function (state_52884){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_52884);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e52905){if((e52905 instanceof Object)){
var ex__41716__auto__ = e52905;
var statearr_52906_52924 = state_52884;
(statearr_52906_52924[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52925 = state_52884;
state_52884 = G__52925;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = function(state_52884){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1.call(this,state_52884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_52907 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_52907[(6)] = c__41735__auto__);

return statearr_52907;
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
