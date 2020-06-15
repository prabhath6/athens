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
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_51924){
var state_val_51925 = (state_51924[(1)]);
if((state_val_51925 === (7))){
var state_51924__$1 = state_51924;
var statearr_51926_51948 = state_51924__$1;
(statearr_51926_51948[(2)] = false);

(statearr_51926_51948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51925 === (1))){
var inst_51887 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51888 = [false];
var inst_51889 = cljs.core.PersistentHashMap.fromArrays(inst_51887,inst_51888);
var inst_51890 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51889], 0));
var state_51924__$1 = state_51924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51924__$1,(2),inst_51890);
} else {
if((state_val_51925 === (4))){
var state_51924__$1 = state_51924;
var statearr_51927_51949 = state_51924__$1;
(statearr_51927_51949[(2)] = false);

(statearr_51927_51949[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51925 === (13))){
var inst_51920 = alert("Failed to retrieve data from GitHub");
var state_51924__$1 = state_51924;
var statearr_51928_51950 = state_51924__$1;
(statearr_51928_51950[(2)] = inst_51920);

(statearr_51928_51950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51925 === (6))){
var state_51924__$1 = state_51924;
var statearr_51929_51951 = state_51924__$1;
(statearr_51929_51951[(2)] = true);

(statearr_51929_51951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51925 === (3))){
var inst_51892 = (state_51924[(7)]);
var inst_51897 = inst_51892.cljs$lang$protocol_mask$partition0$;
var inst_51898 = (inst_51897 & (64));
var inst_51899 = inst_51892.cljs$core$ISeq$;
var inst_51900 = (cljs.core.PROTOCOL_SENTINEL === inst_51899);
var inst_51901 = ((inst_51898) || (inst_51900));
var state_51924__$1 = state_51924;
if(cljs.core.truth_(inst_51901)){
var statearr_51930_51952 = state_51924__$1;
(statearr_51930_51952[(1)] = (6));

} else {
var statearr_51931_51953 = state_51924__$1;
(statearr_51931_51953[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51925 === (12))){
var inst_51915 = (state_51924[(8)]);
var inst_51917 = athens.db.str_to_db_tx(inst_51915);
var inst_51918 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_51917) : posh.reagent.transact_BANG_.call(null,conn,inst_51917));
var state_51924__$1 = state_51924;
var statearr_51932_51954 = state_51924__$1;
(statearr_51932_51954[(2)] = inst_51918);

(statearr_51932_51954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51925 === (2))){
var inst_51892 = (state_51924[(7)]);
var inst_51892__$1 = (state_51924[(2)]);
var inst_51894 = (inst_51892__$1 == null);
var inst_51895 = cljs.core.not(inst_51894);
var state_51924__$1 = (function (){var statearr_51933 = state_51924;
(statearr_51933[(7)] = inst_51892__$1);

return statearr_51933;
})();
if(inst_51895){
var statearr_51934_51955 = state_51924__$1;
(statearr_51934_51955[(1)] = (3));

} else {
var statearr_51935_51956 = state_51924__$1;
(statearr_51935_51956[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51925 === (11))){
var inst_51913 = (state_51924[(2)]);
var inst_51914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51913,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_51915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51913,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_51924__$1 = (function (){var statearr_51936 = state_51924;
(statearr_51936[(8)] = inst_51915);

return statearr_51936;
})();
if(cljs.core.truth_(inst_51914)){
var statearr_51937_51957 = state_51924__$1;
(statearr_51937_51957[(1)] = (12));

} else {
var statearr_51938_51958 = state_51924__$1;
(statearr_51938_51958[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51925 === (9))){
var inst_51892 = (state_51924[(7)]);
var inst_51910 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51892);
var state_51924__$1 = state_51924;
var statearr_51939_51959 = state_51924__$1;
(statearr_51939_51959[(2)] = inst_51910);

(statearr_51939_51959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51925 === (5))){
var inst_51908 = (state_51924[(2)]);
var state_51924__$1 = state_51924;
if(cljs.core.truth_(inst_51908)){
var statearr_51940_51960 = state_51924__$1;
(statearr_51940_51960[(1)] = (9));

} else {
var statearr_51941_51961 = state_51924__$1;
(statearr_51941_51961[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51925 === (14))){
var inst_51922 = (state_51924[(2)]);
var state_51924__$1 = state_51924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51924__$1,inst_51922);
} else {
if((state_val_51925 === (10))){
var inst_51892 = (state_51924[(7)]);
var state_51924__$1 = state_51924;
var statearr_51942_51962 = state_51924__$1;
(statearr_51942_51962[(2)] = inst_51892);

(statearr_51942_51962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51925 === (8))){
var inst_51905 = (state_51924[(2)]);
var state_51924__$1 = state_51924;
var statearr_51943_51963 = state_51924__$1;
(statearr_51943_51963[(2)] = inst_51905);

(statearr_51943_51963[(1)] = (5));


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
var statearr_51944 = [null,null,null,null,null,null,null,null,null];
(statearr_51944[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__);

(statearr_51944[(1)] = (1));

return statearr_51944;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1 = (function (state_51924){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_51924);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e51945){if((e51945 instanceof Object)){
var ex__41716__auto__ = e51945;
var statearr_51946_51964 = state_51924;
(statearr_51946_51964[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51965 = state_51924;
state_51924 = G__51965;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = function(state_51924){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1.call(this,state_51924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_51947 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_51947[(6)] = c__41735__auto__);

return statearr_51947;
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
