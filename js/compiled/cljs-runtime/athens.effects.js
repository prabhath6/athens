goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__52170_52270 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__52171_52271 = (function (datoms){
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52170_52270,G__52171_52271) : re_frame.core.reg_fx.call(null,G__52170_52270,G__52171_52271));
var G__52172_52272 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__52173_52273 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52172_52272,G__52173_52273) : re_frame.core.reg_fx.call(null,G__52172_52272,G__52173_52273));
var G__52174_52274 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__52175_52275 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52174_52274,G__52175_52275) : re_frame.core.reg_fx.call(null,G__52174_52274,G__52175_52275));
var G__52178_52276 = new cljs.core.Keyword(null,"http","http",382524695);
var G__52179_52277 = (function (p__52180){
var map__52181 = p__52180;
var map__52181__$1 = (((((!((map__52181 == null))))?(((((map__52181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52181):map__52181);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52181__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52181__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52181__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52181__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52181__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__38856__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38857__auto__ = (function (){var switch__38788__auto__ = (function (state_52228){
var state_val_52229 = (state_52228[(1)]);
if((state_val_52229 === (7))){
var inst_52195 = (state_52228[(7)]);
var inst_52195__$1 = (state_52228[(2)]);
var inst_52197 = (inst_52195__$1 == null);
var inst_52198 = cljs.core.not(inst_52197);
var state_52228__$1 = (function (){var statearr_52230 = state_52228;
(statearr_52230[(7)] = inst_52195__$1);

return statearr_52230;
})();
if(inst_52198){
var statearr_52231_52278 = state_52228__$1;
(statearr_52231_52278[(1)] = (8));

} else {
var statearr_52232_52279 = state_52228__$1;
(statearr_52232_52279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (1))){
var state_52228__$1 = state_52228;
var G__52233_52280 = method;
var G__52233_52281__$1 = (((G__52233_52280 instanceof cljs.core.Keyword))?G__52233_52280.fqn:null);
switch (G__52233_52281__$1) {
case "post":
var statearr_52234_52283 = state_52228__$1;
(statearr_52234_52283[(1)] = (3));


break;
case "get":
var statearr_52235_52284 = state_52228__$1;
(statearr_52235_52284[(1)] = (4));


break;
case "put":
var statearr_52236_52285 = state_52228__$1;
(statearr_52236_52285[(1)] = (5));


break;
case "delete":
var statearr_52237_52286 = state_52228__$1;
(statearr_52237_52286[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52233_52281__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (4))){
var state_52228__$1 = state_52228;
var statearr_52238_52287 = state_52228__$1;
(statearr_52238_52287[(2)] = cljs_http.client.get);

(statearr_52238_52287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (15))){
var inst_52195 = (state_52228[(7)]);
var state_52228__$1 = state_52228;
var statearr_52239_52288 = state_52228__$1;
(statearr_52239_52288[(2)] = inst_52195);

(statearr_52239_52288[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (13))){
var inst_52208 = (state_52228[(2)]);
var state_52228__$1 = state_52228;
var statearr_52240_52289 = state_52228__$1;
(statearr_52240_52289[(2)] = inst_52208);

(statearr_52240_52289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (6))){
var state_52228__$1 = state_52228;
var statearr_52241_52290 = state_52228__$1;
(statearr_52241_52290[(2)] = cljs_http.client.delete$);

(statearr_52241_52290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (17))){
var inst_52218 = (state_52228[(8)]);
var inst_52220 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_52218);
var inst_52221 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52220) : re_frame.core.dispatch.call(null,inst_52220));
var state_52228__$1 = state_52228;
var statearr_52242_52291 = state_52228__$1;
(statearr_52242_52291[(2)] = inst_52221);

(statearr_52242_52291[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (3))){
var state_52228__$1 = state_52228;
var statearr_52243_52292 = state_52228__$1;
(statearr_52243_52292[(2)] = cljs_http.client.post);

(statearr_52243_52292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (12))){
var state_52228__$1 = state_52228;
var statearr_52244_52293 = state_52228__$1;
(statearr_52244_52293[(2)] = false);

(statearr_52244_52293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (2))){
var inst_52192 = (state_52228[(2)]);
var inst_52193 = (inst_52192.cljs$core$IFn$_invoke$arity$2 ? inst_52192.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_52192.call(null,url,opts));
var state_52228__$1 = state_52228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52228__$1,(7),inst_52193);
} else {
if((state_val_52229 === (19))){
var inst_52226 = (state_52228[(2)]);
var state_52228__$1 = state_52228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52228__$1,inst_52226);
} else {
if((state_val_52229 === (11))){
var state_52228__$1 = state_52228;
var statearr_52245_52294 = state_52228__$1;
(statearr_52245_52294[(2)] = true);

(statearr_52245_52294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (9))){
var state_52228__$1 = state_52228;
var statearr_52246_52295 = state_52228__$1;
(statearr_52246_52295[(2)] = false);

(statearr_52246_52295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (5))){
var state_52228__$1 = state_52228;
var statearr_52247_52296 = state_52228__$1;
(statearr_52247_52296[(2)] = cljs_http.client.put);

(statearr_52247_52296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (14))){
var inst_52195 = (state_52228[(7)]);
var inst_52213 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52195);
var state_52228__$1 = state_52228;
var statearr_52248_52297 = state_52228__$1;
(statearr_52248_52297[(2)] = inst_52213);

(statearr_52248_52297[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (16))){
var inst_52216 = (state_52228[(9)]);
var inst_52216__$1 = (state_52228[(2)]);
var inst_52217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52216__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_52218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52216__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_52228__$1 = (function (){var statearr_52249 = state_52228;
(statearr_52249[(8)] = inst_52218);

(statearr_52249[(9)] = inst_52216__$1);

return statearr_52249;
})();
if(cljs.core.truth_(inst_52217)){
var statearr_52250_52298 = state_52228__$1;
(statearr_52250_52298[(1)] = (17));

} else {
var statearr_52251_52299 = state_52228__$1;
(statearr_52251_52299[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (10))){
var inst_52211 = (state_52228[(2)]);
var state_52228__$1 = state_52228;
if(cljs.core.truth_(inst_52211)){
var statearr_52252_52300 = state_52228__$1;
(statearr_52252_52300[(1)] = (14));

} else {
var statearr_52253_52301 = state_52228__$1;
(statearr_52253_52301[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (18))){
var inst_52216 = (state_52228[(9)]);
var inst_52223 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_52216);
var inst_52224 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_52223) : re_frame.core.dispatch.call(null,inst_52223));
var state_52228__$1 = state_52228;
var statearr_52254_52302 = state_52228__$1;
(statearr_52254_52302[(2)] = inst_52224);

(statearr_52254_52302[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52229 === (8))){
var inst_52195 = (state_52228[(7)]);
var inst_52200 = inst_52195.cljs$lang$protocol_mask$partition0$;
var inst_52201 = (inst_52200 & (64));
var inst_52202 = inst_52195.cljs$core$ISeq$;
var inst_52203 = (cljs.core.PROTOCOL_SENTINEL === inst_52202);
var inst_52204 = ((inst_52201) || (inst_52203));
var state_52228__$1 = state_52228;
if(cljs.core.truth_(inst_52204)){
var statearr_52255_52303 = state_52228__$1;
(statearr_52255_52303[(1)] = (11));

} else {
var statearr_52256_52304 = state_52228__$1;
(statearr_52256_52304[(1)] = (12));

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
var athens$effects$state_machine__38789__auto__ = null;
var athens$effects$state_machine__38789__auto____0 = (function (){
var statearr_52257 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52257[(0)] = athens$effects$state_machine__38789__auto__);

(statearr_52257[(1)] = (1));

return statearr_52257;
});
var athens$effects$state_machine__38789__auto____1 = (function (state_52228){
while(true){
var ret_value__38790__auto__ = (function (){try{while(true){
var result__38791__auto__ = switch__38788__auto__(state_52228);
if(cljs.core.keyword_identical_QMARK_(result__38791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38791__auto__;
}
break;
}
}catch (e52259){if((e52259 instanceof Object)){
var ex__38792__auto__ = e52259;
var statearr_52260_52305 = state_52228;
(statearr_52260_52305[(5)] = ex__38792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52306 = state_52228;
state_52228 = G__52306;
continue;
} else {
return ret_value__38790__auto__;
}
break;
}
});
athens$effects$state_machine__38789__auto__ = function(state_52228){
switch(arguments.length){
case 0:
return athens$effects$state_machine__38789__auto____0.call(this);
case 1:
return athens$effects$state_machine__38789__auto____1.call(this,state_52228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__38789__auto____0;
athens$effects$state_machine__38789__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__38789__auto____1;
return athens$effects$state_machine__38789__auto__;
})()
})();
var state__38858__auto__ = (function (){var statearr_52261 = (f__38857__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38857__auto__.cljs$core$IFn$_invoke$arity$0() : f__38857__auto__.call(null));
(statearr_52261[(6)] = c__38856__auto__);

return statearr_52261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38858__auto__);
}));

return c__38856__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52178_52276,G__52179_52277) : re_frame.core.reg_fx.call(null,G__52178_52276,G__52179_52277));
var G__52263_52307 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__52264_52308 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__52266){
var map__52267 = p__52266;
var map__52267__$1 = (((((!((map__52267 == null))))?(((((map__52267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52267):map__52267);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52267__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52267__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52267__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52267__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__52269 = action;
var G__52269__$1 = (((G__52269 instanceof cljs.core.Keyword))?G__52269.fqn:null);
switch (G__52269__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52269__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__52263_52307,G__52264_52308) : re_frame.core.reg_fx.call(null,G__52263_52307,G__52264_52308));

//# sourceMappingURL=athens.effects.js.map
