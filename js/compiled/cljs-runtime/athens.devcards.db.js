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
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_51951){
var state_val_51952 = (state_51951[(1)]);
if((state_val_51952 === (7))){
var state_51951__$1 = state_51951;
var statearr_51953_51975 = state_51951__$1;
(statearr_51953_51975[(2)] = false);

(statearr_51953_51975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (1))){
var inst_51914 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51915 = [false];
var inst_51916 = cljs.core.PersistentHashMap.fromArrays(inst_51914,inst_51915);
var inst_51917 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51916], 0));
var state_51951__$1 = state_51951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51951__$1,(2),inst_51917);
} else {
if((state_val_51952 === (4))){
var state_51951__$1 = state_51951;
var statearr_51954_51976 = state_51951__$1;
(statearr_51954_51976[(2)] = false);

(statearr_51954_51976[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (13))){
var inst_51947 = alert("Failed to retrieve data from GitHub");
var state_51951__$1 = state_51951;
var statearr_51955_51977 = state_51951__$1;
(statearr_51955_51977[(2)] = inst_51947);

(statearr_51955_51977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (6))){
var state_51951__$1 = state_51951;
var statearr_51956_51978 = state_51951__$1;
(statearr_51956_51978[(2)] = true);

(statearr_51956_51978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (3))){
var inst_51919 = (state_51951[(7)]);
var inst_51924 = inst_51919.cljs$lang$protocol_mask$partition0$;
var inst_51925 = (inst_51924 & (64));
var inst_51926 = inst_51919.cljs$core$ISeq$;
var inst_51927 = (cljs.core.PROTOCOL_SENTINEL === inst_51926);
var inst_51928 = ((inst_51925) || (inst_51927));
var state_51951__$1 = state_51951;
if(cljs.core.truth_(inst_51928)){
var statearr_51957_51979 = state_51951__$1;
(statearr_51957_51979[(1)] = (6));

} else {
var statearr_51958_51980 = state_51951__$1;
(statearr_51958_51980[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (12))){
var inst_51942 = (state_51951[(8)]);
var inst_51944 = athens.db.str_to_db_tx(inst_51942);
var inst_51945 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_51944) : posh.reagent.transact_BANG_.call(null,conn,inst_51944));
var state_51951__$1 = state_51951;
var statearr_51959_51981 = state_51951__$1;
(statearr_51959_51981[(2)] = inst_51945);

(statearr_51959_51981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (2))){
var inst_51919 = (state_51951[(7)]);
var inst_51919__$1 = (state_51951[(2)]);
var inst_51921 = (inst_51919__$1 == null);
var inst_51922 = cljs.core.not(inst_51921);
var state_51951__$1 = (function (){var statearr_51960 = state_51951;
(statearr_51960[(7)] = inst_51919__$1);

return statearr_51960;
})();
if(inst_51922){
var statearr_51961_51982 = state_51951__$1;
(statearr_51961_51982[(1)] = (3));

} else {
var statearr_51962_51983 = state_51951__$1;
(statearr_51962_51983[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (11))){
var inst_51940 = (state_51951[(2)]);
var inst_51941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51940,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_51942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51940,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_51951__$1 = (function (){var statearr_51963 = state_51951;
(statearr_51963[(8)] = inst_51942);

return statearr_51963;
})();
if(cljs.core.truth_(inst_51941)){
var statearr_51964_51984 = state_51951__$1;
(statearr_51964_51984[(1)] = (12));

} else {
var statearr_51965_51985 = state_51951__$1;
(statearr_51965_51985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (9))){
var inst_51919 = (state_51951[(7)]);
var inst_51937 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51919);
var state_51951__$1 = state_51951;
var statearr_51966_51986 = state_51951__$1;
(statearr_51966_51986[(2)] = inst_51937);

(statearr_51966_51986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (5))){
var inst_51935 = (state_51951[(2)]);
var state_51951__$1 = state_51951;
if(cljs.core.truth_(inst_51935)){
var statearr_51967_51987 = state_51951__$1;
(statearr_51967_51987[(1)] = (9));

} else {
var statearr_51968_51988 = state_51951__$1;
(statearr_51968_51988[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (14))){
var inst_51949 = (state_51951[(2)]);
var state_51951__$1 = state_51951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51951__$1,inst_51949);
} else {
if((state_val_51952 === (10))){
var inst_51919 = (state_51951[(7)]);
var state_51951__$1 = state_51951;
var statearr_51969_51989 = state_51951__$1;
(statearr_51969_51989[(2)] = inst_51919);

(statearr_51969_51989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (8))){
var inst_51932 = (state_51951[(2)]);
var state_51951__$1 = state_51951;
var statearr_51970_51990 = state_51951__$1;
(statearr_51970_51990[(2)] = inst_51932);

(statearr_51970_51990[(1)] = (5));


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
var statearr_51971 = [null,null,null,null,null,null,null,null,null];
(statearr_51971[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__);

(statearr_51971[(1)] = (1));

return statearr_51971;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1 = (function (state_51951){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_51951);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e51972){if((e51972 instanceof Object)){
var ex__41716__auto__ = e51972;
var statearr_51973_51991 = state_51951;
(statearr_51973_51991[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51992 = state_51951;
state_51951 = G__51992;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = function(state_51951){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1.call(this,state_51951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_51974 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_51974[(6)] = c__41735__auto__);

return statearr_51974;
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
