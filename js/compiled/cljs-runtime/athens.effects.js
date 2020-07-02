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
var G__74018_74147 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__74019_74148 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__74018_74147,G__74019_74148) : re_frame.core.reg_fx.call(null,G__74018_74147,G__74019_74148));
var G__74020_74153 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__74021_74154 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__74020_74153,G__74021_74154) : re_frame.core.reg_fx.call(null,G__74020_74153,G__74021_74154));
var G__74025_74155 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__74026_74156 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__74025_74155,G__74026_74156) : re_frame.core.reg_fx.call(null,G__74025_74155,G__74026_74156));
var G__74028_74157 = new cljs.core.Keyword(null,"http","http",382524695);
var G__74029_74158 = (function (p__74030){
var map__74031 = p__74030;
var map__74031__$1 = (((((!((map__74031 == null))))?(((((map__74031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74031):map__74031);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74031__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74031__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74031__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74031__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74031__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__55910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55911__auto__ = (function (){var switch__55731__auto__ = (function (state_74082){
var state_val_74083 = (state_74082[(1)]);
if((state_val_74083 === (7))){
var inst_74048 = (state_74082[(7)]);
var inst_74048__$1 = (state_74082[(2)]);
var inst_74050 = (inst_74048__$1 == null);
var inst_74051 = cljs.core.not(inst_74050);
var state_74082__$1 = (function (){var statearr_74087 = state_74082;
(statearr_74087[(7)] = inst_74048__$1);

return statearr_74087;
})();
if(inst_74051){
var statearr_74088_74163 = state_74082__$1;
(statearr_74088_74163[(1)] = (8));

} else {
var statearr_74089_74165 = state_74082__$1;
(statearr_74089_74165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (1))){
var state_74082__$1 = state_74082;
var G__74090_74167 = method;
var G__74090_74168__$1 = (((G__74090_74167 instanceof cljs.core.Keyword))?G__74090_74167.fqn:null);
switch (G__74090_74168__$1) {
case "post":
var statearr_74091_74170 = state_74082__$1;
(statearr_74091_74170[(1)] = (3));


break;
case "get":
var statearr_74092_74171 = state_74082__$1;
(statearr_74092_74171[(1)] = (4));


break;
case "put":
var statearr_74093_74172 = state_74082__$1;
(statearr_74093_74172[(1)] = (5));


break;
case "delete":
var statearr_74096_74173 = state_74082__$1;
(statearr_74096_74173[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74090_74168__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (4))){
var state_74082__$1 = state_74082;
var statearr_74098_74174 = state_74082__$1;
(statearr_74098_74174[(2)] = cljs_http.client.get);

(statearr_74098_74174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (15))){
var inst_74048 = (state_74082[(7)]);
var state_74082__$1 = state_74082;
var statearr_74099_74176 = state_74082__$1;
(statearr_74099_74176[(2)] = inst_74048);

(statearr_74099_74176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (13))){
var inst_74062 = (state_74082[(2)]);
var state_74082__$1 = state_74082;
var statearr_74100_74178 = state_74082__$1;
(statearr_74100_74178[(2)] = inst_74062);

(statearr_74100_74178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (6))){
var state_74082__$1 = state_74082;
var statearr_74101_74180 = state_74082__$1;
(statearr_74101_74180[(2)] = cljs_http.client.delete$);

(statearr_74101_74180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (17))){
var inst_74072 = (state_74082[(8)]);
var inst_74074 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_74072);
var inst_74075 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_74074) : re_frame.core.dispatch.call(null,inst_74074));
var state_74082__$1 = state_74082;
var statearr_74102_74183 = state_74082__$1;
(statearr_74102_74183[(2)] = inst_74075);

(statearr_74102_74183[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (3))){
var state_74082__$1 = state_74082;
var statearr_74103_74184 = state_74082__$1;
(statearr_74103_74184[(2)] = cljs_http.client.post);

(statearr_74103_74184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (12))){
var state_74082__$1 = state_74082;
var statearr_74106_74185 = state_74082__$1;
(statearr_74106_74185[(2)] = false);

(statearr_74106_74185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (2))){
var inst_74044 = (state_74082[(2)]);
var inst_74045 = (inst_74044.cljs$core$IFn$_invoke$arity$2 ? inst_74044.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_74044.call(null,url,opts));
var state_74082__$1 = state_74082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74082__$1,(7),inst_74045);
} else {
if((state_val_74083 === (19))){
var inst_74080 = (state_74082[(2)]);
var state_74082__$1 = state_74082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74082__$1,inst_74080);
} else {
if((state_val_74083 === (11))){
var state_74082__$1 = state_74082;
var statearr_74108_74189 = state_74082__$1;
(statearr_74108_74189[(2)] = true);

(statearr_74108_74189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (9))){
var state_74082__$1 = state_74082;
var statearr_74111_74192 = state_74082__$1;
(statearr_74111_74192[(2)] = false);

(statearr_74111_74192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (5))){
var state_74082__$1 = state_74082;
var statearr_74113_74193 = state_74082__$1;
(statearr_74113_74193[(2)] = cljs_http.client.put);

(statearr_74113_74193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (14))){
var inst_74048 = (state_74082[(7)]);
var inst_74067 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74048);
var state_74082__$1 = state_74082;
var statearr_74115_74195 = state_74082__$1;
(statearr_74115_74195[(2)] = inst_74067);

(statearr_74115_74195[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (16))){
var inst_74070 = (state_74082[(9)]);
var inst_74070__$1 = (state_74082[(2)]);
var inst_74071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74070__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_74072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74070__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_74082__$1 = (function (){var statearr_74116 = state_74082;
(statearr_74116[(8)] = inst_74072);

(statearr_74116[(9)] = inst_74070__$1);

return statearr_74116;
})();
if(cljs.core.truth_(inst_74071)){
var statearr_74117_74200 = state_74082__$1;
(statearr_74117_74200[(1)] = (17));

} else {
var statearr_74118_74201 = state_74082__$1;
(statearr_74118_74201[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (10))){
var inst_74065 = (state_74082[(2)]);
var state_74082__$1 = state_74082;
if(cljs.core.truth_(inst_74065)){
var statearr_74119_74203 = state_74082__$1;
(statearr_74119_74203[(1)] = (14));

} else {
var statearr_74120_74204 = state_74082__$1;
(statearr_74120_74204[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (18))){
var inst_74070 = (state_74082[(9)]);
var inst_74077 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_74070);
var inst_74078 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_74077) : re_frame.core.dispatch.call(null,inst_74077));
var state_74082__$1 = state_74082;
var statearr_74122_74208 = state_74082__$1;
(statearr_74122_74208[(2)] = inst_74078);

(statearr_74122_74208[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74083 === (8))){
var inst_74048 = (state_74082[(7)]);
var inst_74054 = inst_74048.cljs$lang$protocol_mask$partition0$;
var inst_74055 = (inst_74054 & (64));
var inst_74056 = inst_74048.cljs$core$ISeq$;
var inst_74057 = (cljs.core.PROTOCOL_SENTINEL === inst_74056);
var inst_74058 = ((inst_74055) || (inst_74057));
var state_74082__$1 = state_74082;
if(cljs.core.truth_(inst_74058)){
var statearr_74126_74211 = state_74082__$1;
(statearr_74126_74211[(1)] = (11));

} else {
var statearr_74127_74212 = state_74082__$1;
(statearr_74127_74212[(1)] = (12));

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
var athens$effects$state_machine__55732__auto__ = null;
var athens$effects$state_machine__55732__auto____0 = (function (){
var statearr_74128 = [null,null,null,null,null,null,null,null,null,null];
(statearr_74128[(0)] = athens$effects$state_machine__55732__auto__);

(statearr_74128[(1)] = (1));

return statearr_74128;
});
var athens$effects$state_machine__55732__auto____1 = (function (state_74082){
while(true){
var ret_value__55733__auto__ = (function (){try{while(true){
var result__55734__auto__ = switch__55731__auto__(state_74082);
if(cljs.core.keyword_identical_QMARK_(result__55734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55734__auto__;
}
break;
}
}catch (e74130){if((e74130 instanceof Object)){
var ex__55735__auto__ = e74130;
var statearr_74131_74216 = state_74082;
(statearr_74131_74216[(5)] = ex__55735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_74082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74219 = state_74082;
state_74082 = G__74219;
continue;
} else {
return ret_value__55733__auto__;
}
break;
}
});
athens$effects$state_machine__55732__auto__ = function(state_74082){
switch(arguments.length){
case 0:
return athens$effects$state_machine__55732__auto____0.call(this);
case 1:
return athens$effects$state_machine__55732__auto____1.call(this,state_74082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__55732__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__55732__auto____0;
athens$effects$state_machine__55732__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__55732__auto____1;
return athens$effects$state_machine__55732__auto__;
})()
})();
var state__55912__auto__ = (function (){var statearr_74133 = (f__55911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55911__auto__.cljs$core$IFn$_invoke$arity$0() : f__55911__auto__.call(null));
(statearr_74133[(6)] = c__55910__auto__);

return statearr_74133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55912__auto__);
}));

return c__55910__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__74028_74157,G__74029_74158) : re_frame.core.reg_fx.call(null,G__74028_74157,G__74029_74158));
var G__74134_74221 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__74135_74222 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__74138){
var map__74139 = p__74138;
var map__74139__$1 = (((((!((map__74139 == null))))?(((((map__74139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74139):map__74139);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74139__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74139__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74139__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74139__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__74145 = action;
var G__74145__$1 = (((G__74145 instanceof cljs.core.Keyword))?G__74145.fqn:null);
switch (G__74145__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74145__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__74134_74221,G__74135_74222) : re_frame.core.reg_fx.call(null,G__74134_74221,G__74135_74222));

//# sourceMappingURL=athens.effects.js.map
