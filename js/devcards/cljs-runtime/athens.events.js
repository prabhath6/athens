goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.patterns');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('day8.re_frame.async_flow_fx');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('re_posh.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null));

var opts__47646__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47647__auto__;
}catch (e119975){var e = e119975;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"athena","athena",-1523991628),cljs.core.not(new cljs.core.Keyword(null,"athena","athena",-1523991628).cljs$core$IFn$_invoke$arity$1(db)));
}));
var G__119976_120251 = new cljs.core.Keyword(null,"http","http",382524695);
var G__119977_120252 = (function (p__119978){
var map__119979 = p__119978;
var map__119979__$1 = (((((!((map__119979 == null))))?(((((map__119979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119979):map__119979);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119979__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119979__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119979__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119979__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119979__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_120023){
var state_val_120024 = (state_120023[(1)]);
if((state_val_120024 === (7))){
var inst_119990 = (state_120023[(7)]);
var inst_119990__$1 = (state_120023[(2)]);
var inst_119992 = (inst_119990__$1 == null);
var inst_119993 = cljs.core.not(inst_119992);
var state_120023__$1 = (function (){var statearr_120025 = state_120023;
(statearr_120025[(7)] = inst_119990__$1);

return statearr_120025;
})();
if(inst_119993){
var statearr_120026_120256 = state_120023__$1;
(statearr_120026_120256[(1)] = (8));

} else {
var statearr_120027_120257 = state_120023__$1;
(statearr_120027_120257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (1))){
var state_120023__$1 = state_120023;
var G__120028_120258 = method;
var G__120028_120259__$1 = (((G__120028_120258 instanceof cljs.core.Keyword))?G__120028_120258.fqn:null);
switch (G__120028_120259__$1) {
case "post":
var statearr_120029_120261 = state_120023__$1;
(statearr_120029_120261[(1)] = (3));


break;
case "get":
var statearr_120030_120262 = state_120023__$1;
(statearr_120030_120262[(1)] = (4));


break;
case "put":
var statearr_120031_120263 = state_120023__$1;
(statearr_120031_120263[(1)] = (5));


break;
case "delete":
var statearr_120032_120264 = state_120023__$1;
(statearr_120032_120264[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__120028_120259__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (4))){
var state_120023__$1 = state_120023;
var statearr_120033_120265 = state_120023__$1;
(statearr_120033_120265[(2)] = cljs_http.client.get);

(statearr_120033_120265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (15))){
var inst_119990 = (state_120023[(7)]);
var state_120023__$1 = state_120023;
var statearr_120034_120266 = state_120023__$1;
(statearr_120034_120266[(2)] = inst_119990);

(statearr_120034_120266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (13))){
var inst_120003 = (state_120023[(2)]);
var state_120023__$1 = state_120023;
var statearr_120035_120267 = state_120023__$1;
(statearr_120035_120267[(2)] = inst_120003);

(statearr_120035_120267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (6))){
var state_120023__$1 = state_120023;
var statearr_120036_120268 = state_120023__$1;
(statearr_120036_120268[(2)] = cljs_http.client.delete$);

(statearr_120036_120268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (17))){
var inst_120013 = (state_120023[(8)]);
var inst_120015 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_120013);
var inst_120016 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_120015) : re_frame.core.dispatch.call(null,inst_120015));
var state_120023__$1 = state_120023;
var statearr_120037_120269 = state_120023__$1;
(statearr_120037_120269[(2)] = inst_120016);

(statearr_120037_120269[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (3))){
var state_120023__$1 = state_120023;
var statearr_120038_120270 = state_120023__$1;
(statearr_120038_120270[(2)] = cljs_http.client.post);

(statearr_120038_120270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (12))){
var state_120023__$1 = state_120023;
var statearr_120041_120271 = state_120023__$1;
(statearr_120041_120271[(2)] = false);

(statearr_120041_120271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (2))){
var inst_119987 = (state_120023[(2)]);
var inst_119988 = (inst_119987.cljs$core$IFn$_invoke$arity$2 ? inst_119987.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_119987.call(null,url,opts));
var state_120023__$1 = state_120023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_120023__$1,(7),inst_119988);
} else {
if((state_val_120024 === (19))){
var inst_120021 = (state_120023[(2)]);
var state_120023__$1 = state_120023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_120023__$1,inst_120021);
} else {
if((state_val_120024 === (11))){
var state_120023__$1 = state_120023;
var statearr_120044_120275 = state_120023__$1;
(statearr_120044_120275[(2)] = true);

(statearr_120044_120275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (9))){
var state_120023__$1 = state_120023;
var statearr_120047_120276 = state_120023__$1;
(statearr_120047_120276[(2)] = false);

(statearr_120047_120276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (5))){
var state_120023__$1 = state_120023;
var statearr_120050_120277 = state_120023__$1;
(statearr_120050_120277[(2)] = cljs_http.client.put);

(statearr_120050_120277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (14))){
var inst_119990 = (state_120023[(7)]);
var inst_120008 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119990);
var state_120023__$1 = state_120023;
var statearr_120053_120278 = state_120023__$1;
(statearr_120053_120278[(2)] = inst_120008);

(statearr_120053_120278[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (16))){
var inst_120011 = (state_120023[(9)]);
var inst_120011__$1 = (state_120023[(2)]);
var inst_120012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120011__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_120013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120011__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_120023__$1 = (function (){var statearr_120056 = state_120023;
(statearr_120056[(8)] = inst_120013);

(statearr_120056[(9)] = inst_120011__$1);

return statearr_120056;
})();
if(cljs.core.truth_(inst_120012)){
var statearr_120057_120279 = state_120023__$1;
(statearr_120057_120279[(1)] = (17));

} else {
var statearr_120060_120280 = state_120023__$1;
(statearr_120060_120280[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (10))){
var inst_120006 = (state_120023[(2)]);
var state_120023__$1 = state_120023;
if(cljs.core.truth_(inst_120006)){
var statearr_120063_120281 = state_120023__$1;
(statearr_120063_120281[(1)] = (14));

} else {
var statearr_120064_120282 = state_120023__$1;
(statearr_120064_120282[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (18))){
var inst_120011 = (state_120023[(9)]);
var inst_120018 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_120011);
var inst_120019 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_120018) : re_frame.core.dispatch.call(null,inst_120018));
var state_120023__$1 = state_120023;
var statearr_120067_120283 = state_120023__$1;
(statearr_120067_120283[(2)] = inst_120019);

(statearr_120067_120283[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120024 === (8))){
var inst_119990 = (state_120023[(7)]);
var inst_119995 = inst_119990.cljs$lang$protocol_mask$partition0$;
var inst_119996 = (inst_119995 & (64));
var inst_119997 = inst_119990.cljs$core$ISeq$;
var inst_119998 = (cljs.core.PROTOCOL_SENTINEL === inst_119997);
var inst_119999 = ((inst_119996) || (inst_119998));
var state_120023__$1 = state_120023;
if(cljs.core.truth_(inst_119999)){
var statearr_120068_120284 = state_120023__$1;
(statearr_120068_120284[(1)] = (11));

} else {
var statearr_120069_120285 = state_120023__$1;
(statearr_120069_120285[(1)] = (12));

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
var athens$events$state_machine__39593__auto__ = null;
var athens$events$state_machine__39593__auto____0 = (function (){
var statearr_120070 = [null,null,null,null,null,null,null,null,null,null];
(statearr_120070[(0)] = athens$events$state_machine__39593__auto__);

(statearr_120070[(1)] = (1));

return statearr_120070;
});
var athens$events$state_machine__39593__auto____1 = (function (state_120023){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_120023);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e120071){if((e120071 instanceof Object)){
var ex__39596__auto__ = e120071;
var statearr_120072_120289 = state_120023;
(statearr_120072_120289[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_120023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e120071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120290 = state_120023;
state_120023 = G__120290;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$events$state_machine__39593__auto__ = function(state_120023){
switch(arguments.length){
case 0:
return athens$events$state_machine__39593__auto____0.call(this);
case 1:
return athens$events$state_machine__39593__auto____1.call(this,state_120023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$events$state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$events$state_machine__39593__auto____0;
athens$events$state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$events$state_machine__39593__auto____1;
return athens$events$state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_120073 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_120073[(6)] = c__39615__auto__);

return statearr_120073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

return c__39615__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__119976_120251,G__119977_120252) : re_frame.core.reg_fx.call(null,G__119976_120251,G__119977_120252));
var G__120076_120291 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__120077_120292 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__120078){
var map__120079 = p__120078;
var map__120079__$1 = (((((!((map__120079 == null))))?(((((map__120079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120079):map__120079);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120079__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120079__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120079__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120079__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__120085 = action;
var G__120085__$1 = (((G__120085 instanceof cljs.core.Keyword))?G__120085.fqn:null);
switch (G__120085__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__120085__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__120076_120291,G__120077_120292) : re_frame.core.reg_fx.call(null,G__120076_120291,G__120077_120292));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
var G__120097_120300 = new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577);
var G__120098_120301 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__120100){
var vec__120103 = p__120100;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120103,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120103,(1),null);
var _PLUS_debux_dbg_opts_PLUS__120302 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))));

var opts__47646__auto___120303 = _PLUS_debux_dbg_opts_PLUS__120302;
var result__47647__auto___120304 = datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS__120302;
var result__47647__auto___120304 = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto___120304,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto___120304;
})(),(function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS__120302;
var result__47647__auto___120304 = (function (){var G__120111 = (function (){var opts__47646__auto____$2 = _PLUS_debux_dbg_opts_PLUS__120302;
var result__47647__auto___120304 = athens.db.schema;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto___120304,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47647__auto___120304;
})();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__120111) : datascript.core.empty_db.call(null,G__120111));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto___120304,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto___120304;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto___120304,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e120109){var e_120312 = e120109;
throw e_120312;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)));

var opts__47646__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = athens.db.str_to_db_tx((function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = json_str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47647__auto__;
}catch (e120116){var e = e120116;
throw e;
}}):(function (_,p__120117){
var vec__120118 = p__120117;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120118,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120118,(1),null);
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));

return athens.db.str_to_db_tx(json_str);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__120097_120300,G__120098_120301) : re_posh.core.reg_event_ds.call(null,G__120097_120300,G__120098_120301));
var G__120125_120319 = new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710);
var G__120126_120320 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__120128){
var vec__120129 = p__120128;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120129,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120129,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120129,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null));

var opts__47646__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(function (){var opts__47646__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = eid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47647__auto__;
})(),new cljs.core.Keyword("block","open","block/open",-1875254829),(function (){var opts__47646__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = cljs.core.not((function (){var opts__47646__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = open_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47647__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47647__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47647__auto__;
}catch (e120132){var e = e120132;
throw e;
}}):(function (_,p__120137){
var vec__120138 = p__120137;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120138,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120138,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120138,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.not(open_state)], null)], null);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__120125_120319,G__120126_120320) : re_posh.core.reg_event_ds.call(null,G__120125_120319,G__120126_120320));
athens.events.node_with_title = (function athens$events$node_with_title(ds,title){
var G__120141 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)], null);
var G__120142 = ds;
var G__120143 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__120141,G__120142,G__120143) : datascript.core.q.call(null,G__120141,G__120142,G__120143));
});
athens.events.referencing_blocks = (function athens$events$referencing_blocks(ds,title){
var G__120144 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?s","?s",456183954,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__120145 = ds;
var G__120146 = athens.patterns.linked(title);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__120144,G__120145,G__120146) : datascript.core.q.call(null,G__120144,G__120145,G__120146));
});
athens.events.rename_refs_tx = (function athens$events$rename_refs_tx(old_title,new_title,p__120147){
var vec__120148 = p__120147;
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120148,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120148,(1),null);
var new_s = clojure.string.replace(s,athens.patterns.linked(old_title),["$1$3$4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_title),"$2$5"].join(''));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","string","block/string",-2066596447),new_s], null);
});
athens.events.rename_tx = (function athens$events$rename_tx(ds,old_title,new_title){
var eid = athens.events.node_with_title(ds,old_title);
var blocks = athens.events.referencing_blocks(ds,old_title);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("node","title","node/title",628940777),new_title], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.events.rename_refs_tx,old_title,new_title),blocks));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("node","renamed","node/renamed",-1655200587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__120180 = new cljs.core.Keyword(null,"ds","ds",-257415859);
return (re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__120180) : re_posh.core.inject_cofx.call(null,G__120180));
})()], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__120181,p__120182){
var map__120183 = p__120181;
var map__120183__$1 = (((((!((map__120183 == null))))?(((((map__120183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120183):map__120183);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120183__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120183__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__120184 = p__120182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120184,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120184,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120184,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null))));

var opts__47646__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = (((function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__47646__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = old_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47647__auto__;
})(),(function (){var opts__47646__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47647__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})())?(function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = (cljs.core.truth_((function (){var opts__47646__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = athens.events.node_with_title((function (){var opts__47646__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = ds;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47647__auto__;
})(),(function (){var opts__47646__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47647__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47647__auto__;
})())?(function (){var opts__47646__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),old_title,new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new_title], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47647__auto__;
})():(function (){var opts__47646__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.rename_tx(ds,old_title,new_title)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47647__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})():null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47647__auto__;
}catch (e120189){var e = e120189;
throw e;
}}):(function (p__120190,p__120191){
var map__120192 = p__120190;
var map__120192__$1 = (((((!((map__120192 == null))))?(((((map__120192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120192):map__120192);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120192__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120192__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__120193 = p__120191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120193,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120193,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120193,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_title,new_title)){
if(cljs.core.truth_(athens.events.node_with_title(ds,new_title))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),old_title,new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new_title], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.rename_tx(ds,old_title,new_title)], null);
}
} else {
return null;
}
})));
athens.events.count_children = (function athens$events$count_children(ds,title){
var G__120197 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?children","?children",2075030425,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?children","?children",2075030425,null)], null)], null);
var G__120198 = ds;
var G__120199 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__120197,G__120198,G__120199) : datascript.core.q.call(null,G__120197,G__120198,G__120199));
});
athens.events.get_children_eids = (function athens$events$get_children_eids(ds,title){
var G__120200 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?children","?children",2075030425,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?children","?children",2075030425,null)], null)], null);
var G__120201 = ds;
var G__120202 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__120200,G__120201,G__120202) : datascript.core.q.call(null,G__120200,G__120201,G__120202));
});
athens.events.move_blocks_tx = (function athens$events$move_blocks_tx(ds,from_title,to_title){
var block_count = athens.events.count_children(ds,to_title);
var block_eids = athens.events.get_children_eids(ds,from_title);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (eid){
var order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1((function (){var G__120203 = ds;
var G__120204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","order","block/order",-1429282437)], null);
var G__120205 = eid;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__120203,G__120204,G__120205) : datascript.core.pull.call(null,G__120203,G__120204,G__120205));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),to_title], null),new cljs.core.Keyword("block","children","block/children",-1040716209),eid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","order","block/order",-1429282437),(order + block_count)], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_eids], 0));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("node","merged","node/merged",1662072257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__120206 = new cljs.core.Keyword(null,"ds","ds",-257415859);
return (re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__120206) : re_posh.core.inject_cofx.call(null,G__120206));
})()], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__120207,p__120208){
var map__120209 = p__120207;
var map__120209__$1 = (((((!((map__120209 == null))))?(((((map__120209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120209):map__120209);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120209__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120209__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__120210 = p__120208;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120210,(0),null);
var primary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120210,(1),null);
var secondary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120210,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"move-blocks-tx","move-blocks-tx",857400980,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null)),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)))], null));

var opts__47646__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),secondary_title], null)], null)], null),athens.events.move_blocks_tx(ds,secondary_title,primary_title),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.events.rename_tx(ds,primary_title,secondary_title)], 0))], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"move-blocks-tx","move-blocks-tx",857400980,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null)),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47647__auto__;
}catch (e120214){var e = e120214;
throw e;
}}):(function (p__120233,p__120234){
var map__120235 = p__120233;
var map__120235__$1 = (((((!((map__120235 == null))))?(((((map__120235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120235):map__120235);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120235__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120235__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__120236 = p__120234;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120236,(0),null);
var primary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120236,(1),null);
var secondary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__120236,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),secondary_title], null)], null)], null),athens.events.move_blocks_tx(ds,secondary_title,primary_title),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.events.rename_tx(ds,primary_title,secondary_title)], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__120240,_){
var map__120241 = p__120240;
var map__120241__$1 = (((((!((map__120241 == null))))?(((((map__120241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120241):map__120241);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120241__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null));

var opts__47646__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47647__auto__;
}catch (e120243){var e = e120243;
throw e;
}}):(function (p__120244,_){
var map__120245 = p__120244;
var map__120245__$1 = (((((!((map__120245 == null))))?(((((map__120245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120245):map__120245);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120245__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,error){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__47646__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = cljs.core.assoc_in((function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})(),(function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})(),(function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47647__auto__;
}catch (e120247){var e = e120247;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__47646__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = cljs.core.assoc_in((function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})(),(function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})(),(function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47647__auto__;
}catch (e120248){var e = e120248;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__47646__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = cljs.core.assoc_in((function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})(),(function (){var opts__47646__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47647__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47647__auto__;
}catch (e120249){var e = e120249;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
})));
athens.events.boot_flow = (function athens$events$boot_flow(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boot","boot",2007860585),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null));

var opts__47646__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47647__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47647__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47647__auto__;
}catch (e120250){var e = e120250;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
})));

//# sourceMappingURL=athens.events.js.map
