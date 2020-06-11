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
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_53016){
var state_val_53017 = (state_53016[(1)]);
if((state_val_53017 === (7))){
var state_53016__$1 = state_53016;
var statearr_53018_53040 = state_53016__$1;
(statearr_53018_53040[(2)] = false);

(statearr_53018_53040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53017 === (1))){
var inst_52979 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_52980 = [false];
var inst_52981 = cljs.core.PersistentHashMap.fromArrays(inst_52979,inst_52980);
var inst_52982 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52981], 0));
var state_53016__$1 = state_53016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53016__$1,(2),inst_52982);
} else {
if((state_val_53017 === (4))){
var state_53016__$1 = state_53016;
var statearr_53019_53041 = state_53016__$1;
(statearr_53019_53041[(2)] = false);

(statearr_53019_53041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53017 === (13))){
var inst_53012 = alert("Failed to retrieve data from GitHub");
var state_53016__$1 = state_53016;
var statearr_53020_53042 = state_53016__$1;
(statearr_53020_53042[(2)] = inst_53012);

(statearr_53020_53042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53017 === (6))){
var state_53016__$1 = state_53016;
var statearr_53021_53043 = state_53016__$1;
(statearr_53021_53043[(2)] = true);

(statearr_53021_53043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53017 === (3))){
var inst_52984 = (state_53016[(7)]);
var inst_52989 = inst_52984.cljs$lang$protocol_mask$partition0$;
var inst_52990 = (inst_52989 & (64));
var inst_52991 = inst_52984.cljs$core$ISeq$;
var inst_52992 = (cljs.core.PROTOCOL_SENTINEL === inst_52991);
var inst_52993 = ((inst_52990) || (inst_52992));
var state_53016__$1 = state_53016;
if(cljs.core.truth_(inst_52993)){
var statearr_53022_53044 = state_53016__$1;
(statearr_53022_53044[(1)] = (6));

} else {
var statearr_53023_53045 = state_53016__$1;
(statearr_53023_53045[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53017 === (12))){
var inst_53007 = (state_53016[(8)]);
var inst_53009 = athens.db.str_to_db_tx(inst_53007);
var inst_53010 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_53009) : posh.reagent.transact_BANG_.call(null,conn,inst_53009));
var state_53016__$1 = state_53016;
var statearr_53024_53046 = state_53016__$1;
(statearr_53024_53046[(2)] = inst_53010);

(statearr_53024_53046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53017 === (2))){
var inst_52984 = (state_53016[(7)]);
var inst_52984__$1 = (state_53016[(2)]);
var inst_52986 = (inst_52984__$1 == null);
var inst_52987 = cljs.core.not(inst_52986);
var state_53016__$1 = (function (){var statearr_53025 = state_53016;
(statearr_53025[(7)] = inst_52984__$1);

return statearr_53025;
})();
if(inst_52987){
var statearr_53026_53047 = state_53016__$1;
(statearr_53026_53047[(1)] = (3));

} else {
var statearr_53027_53048 = state_53016__$1;
(statearr_53027_53048[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53017 === (11))){
var inst_53005 = (state_53016[(2)]);
var inst_53006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53005,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_53007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53005,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_53016__$1 = (function (){var statearr_53028 = state_53016;
(statearr_53028[(8)] = inst_53007);

return statearr_53028;
})();
if(cljs.core.truth_(inst_53006)){
var statearr_53029_53049 = state_53016__$1;
(statearr_53029_53049[(1)] = (12));

} else {
var statearr_53030_53050 = state_53016__$1;
(statearr_53030_53050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53017 === (9))){
var inst_52984 = (state_53016[(7)]);
var inst_53002 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52984);
var state_53016__$1 = state_53016;
var statearr_53031_53051 = state_53016__$1;
(statearr_53031_53051[(2)] = inst_53002);

(statearr_53031_53051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53017 === (5))){
var inst_53000 = (state_53016[(2)]);
var state_53016__$1 = state_53016;
if(cljs.core.truth_(inst_53000)){
var statearr_53032_53052 = state_53016__$1;
(statearr_53032_53052[(1)] = (9));

} else {
var statearr_53033_53053 = state_53016__$1;
(statearr_53033_53053[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53017 === (14))){
var inst_53014 = (state_53016[(2)]);
var state_53016__$1 = state_53016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53016__$1,inst_53014);
} else {
if((state_val_53017 === (10))){
var inst_52984 = (state_53016[(7)]);
var state_53016__$1 = state_53016;
var statearr_53034_53054 = state_53016__$1;
(statearr_53034_53054[(2)] = inst_52984);

(statearr_53034_53054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53017 === (8))){
var inst_52997 = (state_53016[(2)]);
var state_53016__$1 = state_53016;
var statearr_53035_53055 = state_53016__$1;
(statearr_53035_53055[(2)] = inst_52997);

(statearr_53035_53055[(1)] = (5));


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
var statearr_53036 = [null,null,null,null,null,null,null,null,null];
(statearr_53036[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__);

(statearr_53036[(1)] = (1));

return statearr_53036;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1 = (function (state_53016){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_53016);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e53037){if((e53037 instanceof Object)){
var ex__41716__auto__ = e53037;
var statearr_53038_53056 = state_53016;
(statearr_53038_53056[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53057 = state_53016;
state_53016 = G__53057;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = function(state_53016){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1.call(this,state_53016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_53039 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_53039[(6)] = c__41735__auto__);

return statearr_53039;
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
