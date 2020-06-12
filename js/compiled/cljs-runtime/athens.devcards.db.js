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
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_52162){
var state_val_52163 = (state_52162[(1)]);
if((state_val_52163 === (7))){
var state_52162__$1 = state_52162;
var statearr_52164_52186 = state_52162__$1;
(statearr_52164_52186[(2)] = false);

(statearr_52164_52186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52163 === (1))){
var inst_52125 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_52126 = [false];
var inst_52127 = cljs.core.PersistentHashMap.fromArrays(inst_52125,inst_52126);
var inst_52128 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52127], 0));
var state_52162__$1 = state_52162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52162__$1,(2),inst_52128);
} else {
if((state_val_52163 === (4))){
var state_52162__$1 = state_52162;
var statearr_52165_52187 = state_52162__$1;
(statearr_52165_52187[(2)] = false);

(statearr_52165_52187[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52163 === (13))){
var inst_52158 = alert("Failed to retrieve data from GitHub");
var state_52162__$1 = state_52162;
var statearr_52166_52188 = state_52162__$1;
(statearr_52166_52188[(2)] = inst_52158);

(statearr_52166_52188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52163 === (6))){
var state_52162__$1 = state_52162;
var statearr_52167_52189 = state_52162__$1;
(statearr_52167_52189[(2)] = true);

(statearr_52167_52189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52163 === (3))){
var inst_52130 = (state_52162[(7)]);
var inst_52135 = inst_52130.cljs$lang$protocol_mask$partition0$;
var inst_52136 = (inst_52135 & (64));
var inst_52137 = inst_52130.cljs$core$ISeq$;
var inst_52138 = (cljs.core.PROTOCOL_SENTINEL === inst_52137);
var inst_52139 = ((inst_52136) || (inst_52138));
var state_52162__$1 = state_52162;
if(cljs.core.truth_(inst_52139)){
var statearr_52168_52190 = state_52162__$1;
(statearr_52168_52190[(1)] = (6));

} else {
var statearr_52169_52191 = state_52162__$1;
(statearr_52169_52191[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52163 === (12))){
var inst_52153 = (state_52162[(8)]);
var inst_52155 = athens.db.str_to_db_tx(inst_52153);
var inst_52156 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_52155) : posh.reagent.transact_BANG_.call(null,conn,inst_52155));
var state_52162__$1 = state_52162;
var statearr_52170_52192 = state_52162__$1;
(statearr_52170_52192[(2)] = inst_52156);

(statearr_52170_52192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52163 === (2))){
var inst_52130 = (state_52162[(7)]);
var inst_52130__$1 = (state_52162[(2)]);
var inst_52132 = (inst_52130__$1 == null);
var inst_52133 = cljs.core.not(inst_52132);
var state_52162__$1 = (function (){var statearr_52171 = state_52162;
(statearr_52171[(7)] = inst_52130__$1);

return statearr_52171;
})();
if(inst_52133){
var statearr_52172_52193 = state_52162__$1;
(statearr_52172_52193[(1)] = (3));

} else {
var statearr_52173_52194 = state_52162__$1;
(statearr_52173_52194[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52163 === (11))){
var inst_52151 = (state_52162[(2)]);
var inst_52152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52151,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_52153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52151,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_52162__$1 = (function (){var statearr_52174 = state_52162;
(statearr_52174[(8)] = inst_52153);

return statearr_52174;
})();
if(cljs.core.truth_(inst_52152)){
var statearr_52175_52195 = state_52162__$1;
(statearr_52175_52195[(1)] = (12));

} else {
var statearr_52176_52196 = state_52162__$1;
(statearr_52176_52196[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52163 === (9))){
var inst_52130 = (state_52162[(7)]);
var inst_52148 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52130);
var state_52162__$1 = state_52162;
var statearr_52177_52197 = state_52162__$1;
(statearr_52177_52197[(2)] = inst_52148);

(statearr_52177_52197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52163 === (5))){
var inst_52146 = (state_52162[(2)]);
var state_52162__$1 = state_52162;
if(cljs.core.truth_(inst_52146)){
var statearr_52178_52198 = state_52162__$1;
(statearr_52178_52198[(1)] = (9));

} else {
var statearr_52179_52199 = state_52162__$1;
(statearr_52179_52199[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52163 === (14))){
var inst_52160 = (state_52162[(2)]);
var state_52162__$1 = state_52162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52162__$1,inst_52160);
} else {
if((state_val_52163 === (10))){
var inst_52130 = (state_52162[(7)]);
var state_52162__$1 = state_52162;
var statearr_52180_52200 = state_52162__$1;
(statearr_52180_52200[(2)] = inst_52130);

(statearr_52180_52200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52163 === (8))){
var inst_52143 = (state_52162[(2)]);
var state_52162__$1 = state_52162;
var statearr_52181_52201 = state_52162__$1;
(statearr_52181_52201[(2)] = inst_52143);

(statearr_52181_52201[(1)] = (5));


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
var statearr_52182 = [null,null,null,null,null,null,null,null,null];
(statearr_52182[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__);

(statearr_52182[(1)] = (1));

return statearr_52182;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1 = (function (state_52162){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_52162);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e52183){if((e52183 instanceof Object)){
var ex__41716__auto__ = e52183;
var statearr_52184_52202 = state_52162;
(statearr_52184_52202[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52183;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52203 = state_52162;
state_52162 = G__52203;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = function(state_52162){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1.call(this,state_52162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_52185 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_52185[(6)] = c__41735__auto__);

return statearr_52185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
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
athens.devcards.db.new_conn = (function athens$devcards$db$new_conn(){
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
});
athens.devcards.db.posh_conn_BANG_ = (function athens$devcards$db$posh_conn_BANG_(conn){
return (posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(conn) : posh.reagent.posh_BANG_.call(null,conn));
});

//# sourceMappingURL=athens.devcards.db.js.map
