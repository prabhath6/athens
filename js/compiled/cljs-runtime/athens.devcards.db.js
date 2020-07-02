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
var c__55910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55911__auto__ = (function (){var switch__55731__auto__ = (function (state_85087){
var state_val_85088 = (state_85087[(1)]);
if((state_val_85088 === (7))){
var state_85087__$1 = state_85087;
var statearr_85092_85150 = state_85087__$1;
(statearr_85092_85150[(2)] = false);

(statearr_85092_85150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85088 === (1))){
var inst_85050 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_85051 = [false];
var inst_85052 = cljs.core.PersistentHashMap.fromArrays(inst_85050,inst_85051);
var inst_85053 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_85052], 0));
var state_85087__$1 = state_85087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85087__$1,(2),inst_85053);
} else {
if((state_val_85088 === (4))){
var state_85087__$1 = state_85087;
var statearr_85093_85157 = state_85087__$1;
(statearr_85093_85157[(2)] = false);

(statearr_85093_85157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85088 === (13))){
var inst_85083 = alert("Failed to retrieve data from GitHub");
var state_85087__$1 = state_85087;
var statearr_85095_85158 = state_85087__$1;
(statearr_85095_85158[(2)] = inst_85083);

(statearr_85095_85158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85088 === (6))){
var state_85087__$1 = state_85087;
var statearr_85097_85159 = state_85087__$1;
(statearr_85097_85159[(2)] = true);

(statearr_85097_85159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85088 === (3))){
var inst_85055 = (state_85087[(7)]);
var inst_85060 = inst_85055.cljs$lang$protocol_mask$partition0$;
var inst_85061 = (inst_85060 & (64));
var inst_85062 = inst_85055.cljs$core$ISeq$;
var inst_85063 = (cljs.core.PROTOCOL_SENTINEL === inst_85062);
var inst_85064 = ((inst_85061) || (inst_85063));
var state_85087__$1 = state_85087;
if(cljs.core.truth_(inst_85064)){
var statearr_85099_85160 = state_85087__$1;
(statearr_85099_85160[(1)] = (6));

} else {
var statearr_85100_85162 = state_85087__$1;
(statearr_85100_85162[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85088 === (12))){
var inst_85078 = (state_85087[(8)]);
var inst_85080 = athens.db.str_to_db_tx(inst_85078);
var inst_85081 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_85080) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_85080));
var state_85087__$1 = state_85087;
var statearr_85102_85164 = state_85087__$1;
(statearr_85102_85164[(2)] = inst_85081);

(statearr_85102_85164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85088 === (2))){
var inst_85055 = (state_85087[(7)]);
var inst_85055__$1 = (state_85087[(2)]);
var inst_85057 = (inst_85055__$1 == null);
var inst_85058 = cljs.core.not(inst_85057);
var state_85087__$1 = (function (){var statearr_85104 = state_85087;
(statearr_85104[(7)] = inst_85055__$1);

return statearr_85104;
})();
if(inst_85058){
var statearr_85105_85165 = state_85087__$1;
(statearr_85105_85165[(1)] = (3));

} else {
var statearr_85107_85166 = state_85087__$1;
(statearr_85107_85166[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85088 === (11))){
var inst_85076 = (state_85087[(2)]);
var inst_85077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_85076,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_85078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_85076,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_85087__$1 = (function (){var statearr_85110 = state_85087;
(statearr_85110[(8)] = inst_85078);

return statearr_85110;
})();
if(cljs.core.truth_(inst_85077)){
var statearr_85111_85178 = state_85087__$1;
(statearr_85111_85178[(1)] = (12));

} else {
var statearr_85113_85181 = state_85087__$1;
(statearr_85113_85181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85088 === (9))){
var inst_85055 = (state_85087[(7)]);
var inst_85073 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_85055);
var state_85087__$1 = state_85087;
var statearr_85115_85192 = state_85087__$1;
(statearr_85115_85192[(2)] = inst_85073);

(statearr_85115_85192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85088 === (5))){
var inst_85071 = (state_85087[(2)]);
var state_85087__$1 = state_85087;
if(cljs.core.truth_(inst_85071)){
var statearr_85116_85193 = state_85087__$1;
(statearr_85116_85193[(1)] = (9));

} else {
var statearr_85121_85198 = state_85087__$1;
(statearr_85121_85198[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85088 === (14))){
var inst_85085 = (state_85087[(2)]);
var state_85087__$1 = state_85087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_85087__$1,inst_85085);
} else {
if((state_val_85088 === (10))){
var inst_85055 = (state_85087[(7)]);
var state_85087__$1 = state_85087;
var statearr_85123_85203 = state_85087__$1;
(statearr_85123_85203[(2)] = inst_85055);

(statearr_85123_85203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85088 === (8))){
var inst_85068 = (state_85087[(2)]);
var state_85087__$1 = state_85087;
var statearr_85125_85209 = state_85087__$1;
(statearr_85125_85209[(2)] = inst_85068);

(statearr_85125_85209[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto____0 = (function (){
var statearr_85126 = [null,null,null,null,null,null,null,null,null];
(statearr_85126[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto__);

(statearr_85126[(1)] = (1));

return statearr_85126;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto____1 = (function (state_85087){
while(true){
var ret_value__55733__auto__ = (function (){try{while(true){
var result__55734__auto__ = switch__55731__auto__(state_85087);
if(cljs.core.keyword_identical_QMARK_(result__55734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55734__auto__;
}
break;
}
}catch (e85127){if((e85127 instanceof Object)){
var ex__55735__auto__ = e85127;
var statearr_85128_85211 = state_85087;
(statearr_85128_85211[(5)] = ex__55735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_85087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e85127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85212 = state_85087;
state_85087 = G__85212;
continue;
} else {
return ret_value__55733__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto__ = function(state_85087){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto____1.call(this,state_85087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__55732__auto__;
})()
})();
var state__55912__auto__ = (function (){var statearr_85137 = (f__55911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55911__auto__.cljs$core$IFn$_invoke$arity$0() : f__55911__auto__.call(null));
(statearr_85137[(6)] = c__55910__auto__);

return statearr_85137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55912__auto__);
}));

return c__55910__auto__;
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
