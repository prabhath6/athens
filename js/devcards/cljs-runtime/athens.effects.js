goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__60987_61081 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60988_61082 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60987_61081,G__60988_61082) : re_frame.core.reg_fx.call(null,G__60987_61081,G__60988_61082));
var G__60989_61083 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__60990_61084 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60989_61083,G__60990_61084) : re_frame.core.reg_fx.call(null,G__60989_61083,G__60990_61084));
var G__60991_61085 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__60992_61086 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60991_61085,G__60992_61086) : re_frame.core.reg_fx.call(null,G__60991_61085,G__60992_61086));
var G__60993_61087 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60994_61088 = (function (p__60995){
var map__60996 = p__60995;
var map__60996__$1 = (((((!((map__60996 == null))))?(((((map__60996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60996):map__60996);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60996__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60996__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60996__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60996__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60996__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_61040){
var state_val_61041 = (state_61040[(1)]);
if((state_val_61041 === (7))){
var inst_61007 = (state_61040[(7)]);
var inst_61007__$1 = (state_61040[(2)]);
var inst_61009 = (inst_61007__$1 == null);
var inst_61010 = cljs.core.not(inst_61009);
var state_61040__$1 = (function (){var statearr_61042 = state_61040;
(statearr_61042[(7)] = inst_61007__$1);

return statearr_61042;
})();
if(inst_61010){
var statearr_61043_61089 = state_61040__$1;
(statearr_61043_61089[(1)] = (8));

} else {
var statearr_61044_61090 = state_61040__$1;
(statearr_61044_61090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (1))){
var state_61040__$1 = state_61040;
var G__61045_61091 = method;
var G__61045_61092__$1 = (((G__61045_61091 instanceof cljs.core.Keyword))?G__61045_61091.fqn:null);
switch (G__61045_61092__$1) {
case "post":
var statearr_61046_61094 = state_61040__$1;
(statearr_61046_61094[(1)] = (3));


break;
case "get":
var statearr_61047_61095 = state_61040__$1;
(statearr_61047_61095[(1)] = (4));


break;
case "put":
var statearr_61048_61096 = state_61040__$1;
(statearr_61048_61096[(1)] = (5));


break;
case "delete":
var statearr_61049_61097 = state_61040__$1;
(statearr_61049_61097[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61045_61092__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (4))){
var state_61040__$1 = state_61040;
var statearr_61050_61098 = state_61040__$1;
(statearr_61050_61098[(2)] = cljs_http.client.get);

(statearr_61050_61098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (15))){
var inst_61007 = (state_61040[(7)]);
var state_61040__$1 = state_61040;
var statearr_61051_61099 = state_61040__$1;
(statearr_61051_61099[(2)] = inst_61007);

(statearr_61051_61099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (13))){
var inst_61020 = (state_61040[(2)]);
var state_61040__$1 = state_61040;
var statearr_61052_61100 = state_61040__$1;
(statearr_61052_61100[(2)] = inst_61020);

(statearr_61052_61100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (6))){
var state_61040__$1 = state_61040;
var statearr_61053_61101 = state_61040__$1;
(statearr_61053_61101[(2)] = cljs_http.client.delete$);

(statearr_61053_61101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (17))){
var inst_61030 = (state_61040[(8)]);
var inst_61032 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61030);
var inst_61033 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61032) : re_frame.core.dispatch.call(null,inst_61032));
var state_61040__$1 = state_61040;
var statearr_61054_61102 = state_61040__$1;
(statearr_61054_61102[(2)] = inst_61033);

(statearr_61054_61102[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (3))){
var state_61040__$1 = state_61040;
var statearr_61055_61103 = state_61040__$1;
(statearr_61055_61103[(2)] = cljs_http.client.post);

(statearr_61055_61103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (12))){
var state_61040__$1 = state_61040;
var statearr_61056_61104 = state_61040__$1;
(statearr_61056_61104[(2)] = false);

(statearr_61056_61104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (2))){
var inst_61004 = (state_61040[(2)]);
var inst_61005 = (inst_61004.cljs$core$IFn$_invoke$arity$2 ? inst_61004.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61004.call(null,url,opts));
var state_61040__$1 = state_61040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61040__$1,(7),inst_61005);
} else {
if((state_val_61041 === (19))){
var inst_61038 = (state_61040[(2)]);
var state_61040__$1 = state_61040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61040__$1,inst_61038);
} else {
if((state_val_61041 === (11))){
var state_61040__$1 = state_61040;
var statearr_61057_61105 = state_61040__$1;
(statearr_61057_61105[(2)] = true);

(statearr_61057_61105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (9))){
var state_61040__$1 = state_61040;
var statearr_61058_61106 = state_61040__$1;
(statearr_61058_61106[(2)] = false);

(statearr_61058_61106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (5))){
var state_61040__$1 = state_61040;
var statearr_61059_61107 = state_61040__$1;
(statearr_61059_61107[(2)] = cljs_http.client.put);

(statearr_61059_61107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (14))){
var inst_61007 = (state_61040[(7)]);
var inst_61025 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61007);
var state_61040__$1 = state_61040;
var statearr_61062_61108 = state_61040__$1;
(statearr_61062_61108[(2)] = inst_61025);

(statearr_61062_61108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (16))){
var inst_61028 = (state_61040[(9)]);
var inst_61028__$1 = (state_61040[(2)]);
var inst_61029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61028__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61028__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61040__$1 = (function (){var statearr_61063 = state_61040;
(statearr_61063[(9)] = inst_61028__$1);

(statearr_61063[(8)] = inst_61030);

return statearr_61063;
})();
if(cljs.core.truth_(inst_61029)){
var statearr_61064_61109 = state_61040__$1;
(statearr_61064_61109[(1)] = (17));

} else {
var statearr_61065_61110 = state_61040__$1;
(statearr_61065_61110[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (10))){
var inst_61023 = (state_61040[(2)]);
var state_61040__$1 = state_61040;
if(cljs.core.truth_(inst_61023)){
var statearr_61066_61111 = state_61040__$1;
(statearr_61066_61111[(1)] = (14));

} else {
var statearr_61067_61112 = state_61040__$1;
(statearr_61067_61112[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (18))){
var inst_61028 = (state_61040[(9)]);
var inst_61035 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61028);
var inst_61036 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61035) : re_frame.core.dispatch.call(null,inst_61035));
var state_61040__$1 = state_61040;
var statearr_61068_61113 = state_61040__$1;
(statearr_61068_61113[(2)] = inst_61036);

(statearr_61068_61113[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61041 === (8))){
var inst_61007 = (state_61040[(7)]);
var inst_61012 = inst_61007.cljs$lang$protocol_mask$partition0$;
var inst_61013 = (inst_61012 & (64));
var inst_61014 = inst_61007.cljs$core$ISeq$;
var inst_61015 = (cljs.core.PROTOCOL_SENTINEL === inst_61014);
var inst_61016 = ((inst_61013) || (inst_61015));
var state_61040__$1 = state_61040;
if(cljs.core.truth_(inst_61016)){
var statearr_61069_61114 = state_61040__$1;
(statearr_61069_61114[(1)] = (11));

} else {
var statearr_61070_61115 = state_61040__$1;
(statearr_61070_61115[(1)] = (12));

}

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
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__34207__auto__ = null;
var athens$effects$state_machine__34207__auto____0 = (function (){
var statearr_61071 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61071[(0)] = athens$effects$state_machine__34207__auto__);

(statearr_61071[(1)] = (1));

return statearr_61071;
});
var athens$effects$state_machine__34207__auto____1 = (function (state_61040){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_61040);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e61072){if((e61072 instanceof Object)){
var ex__34210__auto__ = e61072;
var statearr_61073_61116 = state_61040;
(statearr_61073_61116[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61117 = state_61040;
state_61040 = G__61117;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
athens$effects$state_machine__34207__auto__ = function(state_61040){
switch(arguments.length){
case 0:
return athens$effects$state_machine__34207__auto____0.call(this);
case 1:
return athens$effects$state_machine__34207__auto____1.call(this,state_61040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__34207__auto____0;
athens$effects$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__34207__auto____1;
return athens$effects$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_61074 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_61074[(6)] = c__34274__auto__);

return statearr_61074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60993_61087,G__60994_61088) : re_frame.core.reg_fx.call(null,G__60993_61087,G__60994_61088));
var G__61075_61118 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61076_61119 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61077){
var map__61078 = p__61077;
var map__61078__$1 = (((((!((map__61078 == null))))?(((((map__61078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61078):map__61078);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61078__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61078__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61078__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61078__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61080 = action;
var G__61080__$1 = (((G__61080 instanceof cljs.core.Keyword))?G__61080.fqn:null);
switch (G__61080__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61080__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61075_61118,G__61076_61119) : re_frame.core.reg_fx.call(null,G__61075_61118,G__61076_61119));

//# sourceMappingURL=athens.effects.js.map
