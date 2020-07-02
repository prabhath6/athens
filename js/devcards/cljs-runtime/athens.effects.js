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
var G__61081_61173 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__61082_61174 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61081_61173,G__61082_61174) : re_frame.core.reg_fx.call(null,G__61081_61173,G__61082_61174));
var G__61083_61175 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__61084_61176 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61083_61175,G__61084_61176) : re_frame.core.reg_fx.call(null,G__61083_61175,G__61084_61176));
var G__61085_61177 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__61086_61178 = (function (_){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb)));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61085_61177,G__61086_61178) : re_frame.core.reg_fx.call(null,G__61085_61177,G__61086_61178));
var G__61087_61179 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61088_61180 = (function (p__61089){
var map__61090 = p__61089;
var map__61090__$1 = (((((!((map__61090 == null))))?(((((map__61090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61090):map__61090);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_61134){
var state_val_61135 = (state_61134[(1)]);
if((state_val_61135 === (7))){
var inst_61101 = (state_61134[(7)]);
var inst_61101__$1 = (state_61134[(2)]);
var inst_61103 = (inst_61101__$1 == null);
var inst_61104 = cljs.core.not(inst_61103);
var state_61134__$1 = (function (){var statearr_61136 = state_61134;
(statearr_61136[(7)] = inst_61101__$1);

return statearr_61136;
})();
if(inst_61104){
var statearr_61137_61181 = state_61134__$1;
(statearr_61137_61181[(1)] = (8));

} else {
var statearr_61138_61182 = state_61134__$1;
(statearr_61138_61182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (1))){
var state_61134__$1 = state_61134;
var G__61139_61183 = method;
var G__61139_61184__$1 = (((G__61139_61183 instanceof cljs.core.Keyword))?G__61139_61183.fqn:null);
switch (G__61139_61184__$1) {
case "post":
var statearr_61140_61186 = state_61134__$1;
(statearr_61140_61186[(1)] = (3));


break;
case "get":
var statearr_61141_61187 = state_61134__$1;
(statearr_61141_61187[(1)] = (4));


break;
case "put":
var statearr_61142_61188 = state_61134__$1;
(statearr_61142_61188[(1)] = (5));


break;
case "delete":
var statearr_61143_61189 = state_61134__$1;
(statearr_61143_61189[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61139_61184__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (4))){
var state_61134__$1 = state_61134;
var statearr_61144_61190 = state_61134__$1;
(statearr_61144_61190[(2)] = cljs_http.client.get);

(statearr_61144_61190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (15))){
var inst_61101 = (state_61134[(7)]);
var state_61134__$1 = state_61134;
var statearr_61145_61191 = state_61134__$1;
(statearr_61145_61191[(2)] = inst_61101);

(statearr_61145_61191[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (13))){
var inst_61114 = (state_61134[(2)]);
var state_61134__$1 = state_61134;
var statearr_61146_61192 = state_61134__$1;
(statearr_61146_61192[(2)] = inst_61114);

(statearr_61146_61192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (6))){
var state_61134__$1 = state_61134;
var statearr_61147_61193 = state_61134__$1;
(statearr_61147_61193[(2)] = cljs_http.client.delete$);

(statearr_61147_61193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (17))){
var inst_61124 = (state_61134[(8)]);
var inst_61126 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61124);
var inst_61127 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61126) : re_frame.core.dispatch.call(null,inst_61126));
var state_61134__$1 = state_61134;
var statearr_61148_61194 = state_61134__$1;
(statearr_61148_61194[(2)] = inst_61127);

(statearr_61148_61194[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (3))){
var state_61134__$1 = state_61134;
var statearr_61149_61195 = state_61134__$1;
(statearr_61149_61195[(2)] = cljs_http.client.post);

(statearr_61149_61195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (12))){
var state_61134__$1 = state_61134;
var statearr_61150_61196 = state_61134__$1;
(statearr_61150_61196[(2)] = false);

(statearr_61150_61196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (2))){
var inst_61098 = (state_61134[(2)]);
var inst_61099 = (inst_61098.cljs$core$IFn$_invoke$arity$2 ? inst_61098.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61098.call(null,url,opts));
var state_61134__$1 = state_61134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61134__$1,(7),inst_61099);
} else {
if((state_val_61135 === (19))){
var inst_61132 = (state_61134[(2)]);
var state_61134__$1 = state_61134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61134__$1,inst_61132);
} else {
if((state_val_61135 === (11))){
var state_61134__$1 = state_61134;
var statearr_61151_61197 = state_61134__$1;
(statearr_61151_61197[(2)] = true);

(statearr_61151_61197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (9))){
var state_61134__$1 = state_61134;
var statearr_61152_61198 = state_61134__$1;
(statearr_61152_61198[(2)] = false);

(statearr_61152_61198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (5))){
var state_61134__$1 = state_61134;
var statearr_61153_61199 = state_61134__$1;
(statearr_61153_61199[(2)] = cljs_http.client.put);

(statearr_61153_61199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (14))){
var inst_61101 = (state_61134[(7)]);
var inst_61119 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61101);
var state_61134__$1 = state_61134;
var statearr_61154_61200 = state_61134__$1;
(statearr_61154_61200[(2)] = inst_61119);

(statearr_61154_61200[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (16))){
var inst_61122 = (state_61134[(9)]);
var inst_61122__$1 = (state_61134[(2)]);
var inst_61123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61122__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61122__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61134__$1 = (function (){var statearr_61155 = state_61134;
(statearr_61155[(8)] = inst_61124);

(statearr_61155[(9)] = inst_61122__$1);

return statearr_61155;
})();
if(cljs.core.truth_(inst_61123)){
var statearr_61156_61201 = state_61134__$1;
(statearr_61156_61201[(1)] = (17));

} else {
var statearr_61157_61202 = state_61134__$1;
(statearr_61157_61202[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (10))){
var inst_61117 = (state_61134[(2)]);
var state_61134__$1 = state_61134;
if(cljs.core.truth_(inst_61117)){
var statearr_61158_61203 = state_61134__$1;
(statearr_61158_61203[(1)] = (14));

} else {
var statearr_61159_61204 = state_61134__$1;
(statearr_61159_61204[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (18))){
var inst_61122 = (state_61134[(9)]);
var inst_61129 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61122);
var inst_61130 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61129) : re_frame.core.dispatch.call(null,inst_61129));
var state_61134__$1 = state_61134;
var statearr_61160_61205 = state_61134__$1;
(statearr_61160_61205[(2)] = inst_61130);

(statearr_61160_61205[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61135 === (8))){
var inst_61101 = (state_61134[(7)]);
var inst_61106 = inst_61101.cljs$lang$protocol_mask$partition0$;
var inst_61107 = (inst_61106 & (64));
var inst_61108 = inst_61101.cljs$core$ISeq$;
var inst_61109 = (cljs.core.PROTOCOL_SENTINEL === inst_61108);
var inst_61110 = ((inst_61107) || (inst_61109));
var state_61134__$1 = state_61134;
if(cljs.core.truth_(inst_61110)){
var statearr_61161_61206 = state_61134__$1;
(statearr_61161_61206[(1)] = (11));

} else {
var statearr_61162_61207 = state_61134__$1;
(statearr_61162_61207[(1)] = (12));

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
var athens$effects$state_machine__36812__auto__ = null;
var athens$effects$state_machine__36812__auto____0 = (function (){
var statearr_61163 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61163[(0)] = athens$effects$state_machine__36812__auto__);

(statearr_61163[(1)] = (1));

return statearr_61163;
});
var athens$effects$state_machine__36812__auto____1 = (function (state_61134){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_61134);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e61164){if((e61164 instanceof Object)){
var ex__36815__auto__ = e61164;
var statearr_61165_61208 = state_61134;
(statearr_61165_61208[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61209 = state_61134;
state_61134 = G__61209;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
athens$effects$state_machine__36812__auto__ = function(state_61134){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36812__auto____0.call(this);
case 1:
return athens$effects$state_machine__36812__auto____1.call(this,state_61134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36812__auto____0;
athens$effects$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36812__auto____1;
return athens$effects$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_61166 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_61166[(6)] = c__37008__auto__);

return statearr_61166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));

return c__37008__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61087_61179,G__61088_61180) : re_frame.core.reg_fx.call(null,G__61087_61179,G__61088_61180));
var G__61167_61210 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61168_61211 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61169){
var map__61170 = p__61169;
var map__61170__$1 = (((((!((map__61170 == null))))?(((((map__61170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61170):map__61170);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61170__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61170__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61170__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61170__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61172 = action;
var G__61172__$1 = (((G__61172 instanceof cljs.core.Keyword))?G__61172.fqn:null);
switch (G__61172__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61172__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61167_61210,G__61168_61211) : re_frame.core.reg_fx.call(null,G__61167_61210,G__61168_61211));

//# sourceMappingURL=athens.effects.js.map
