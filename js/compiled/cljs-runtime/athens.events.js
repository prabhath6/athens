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

var opts__46806__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46807__auto__;
}catch (e66687){var e = e66687;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"athena","athena",-1523991628),cljs.core.not(new cljs.core.Keyword(null,"athena","athena",-1523991628).cljs$core$IFn$_invoke$arity$1(db)));
}));
var G__66689_67010 = new cljs.core.Keyword(null,"http","http",382524695);
var G__66690_67011 = (function (p__66691){
var map__66692 = p__66691;
var map__66692__$1 = (((((!((map__66692 == null))))?(((((map__66692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66692):map__66692);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66692__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66692__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66692__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66692__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66692__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_66770){
var state_val_66771 = (state_66770[(1)]);
if((state_val_66771 === (7))){
var inst_66737 = (state_66770[(7)]);
var inst_66737__$1 = (state_66770[(2)]);
var inst_66739 = (inst_66737__$1 == null);
var inst_66740 = cljs.core.not(inst_66739);
var state_66770__$1 = (function (){var statearr_66789 = state_66770;
(statearr_66789[(7)] = inst_66737__$1);

return statearr_66789;
})();
if(inst_66740){
var statearr_66790_67021 = state_66770__$1;
(statearr_66790_67021[(1)] = (8));

} else {
var statearr_66802_67022 = state_66770__$1;
(statearr_66802_67022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (1))){
var state_66770__$1 = state_66770;
var G__66803_67023 = method;
var G__66803_67024__$1 = (((G__66803_67023 instanceof cljs.core.Keyword))?G__66803_67023.fqn:null);
switch (G__66803_67024__$1) {
case "post":
var statearr_66804_67026 = state_66770__$1;
(statearr_66804_67026[(1)] = (3));


break;
case "get":
var statearr_66807_67027 = state_66770__$1;
(statearr_66807_67027[(1)] = (4));


break;
case "put":
var statearr_66808_67028 = state_66770__$1;
(statearr_66808_67028[(1)] = (5));


break;
case "delete":
var statearr_66809_67029 = state_66770__$1;
(statearr_66809_67029[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66803_67024__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (4))){
var state_66770__$1 = state_66770;
var statearr_66816_67030 = state_66770__$1;
(statearr_66816_67030[(2)] = cljs_http.client.get);

(statearr_66816_67030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (15))){
var inst_66737 = (state_66770[(7)]);
var state_66770__$1 = state_66770;
var statearr_66819_67031 = state_66770__$1;
(statearr_66819_67031[(2)] = inst_66737);

(statearr_66819_67031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (13))){
var inst_66750 = (state_66770[(2)]);
var state_66770__$1 = state_66770;
var statearr_66824_67032 = state_66770__$1;
(statearr_66824_67032[(2)] = inst_66750);

(statearr_66824_67032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (6))){
var state_66770__$1 = state_66770;
var statearr_66825_67033 = state_66770__$1;
(statearr_66825_67033[(2)] = cljs_http.client.delete$);

(statearr_66825_67033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (17))){
var inst_66760 = (state_66770[(8)]);
var inst_66762 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_66760);
var inst_66763 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_66762) : re_frame.core.dispatch.call(null,inst_66762));
var state_66770__$1 = state_66770;
var statearr_66828_67034 = state_66770__$1;
(statearr_66828_67034[(2)] = inst_66763);

(statearr_66828_67034[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (3))){
var state_66770__$1 = state_66770;
var statearr_66829_67035 = state_66770__$1;
(statearr_66829_67035[(2)] = cljs_http.client.post);

(statearr_66829_67035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (12))){
var state_66770__$1 = state_66770;
var statearr_66846_67036 = state_66770__$1;
(statearr_66846_67036[(2)] = false);

(statearr_66846_67036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (2))){
var inst_66734 = (state_66770[(2)]);
var inst_66735 = (inst_66734.cljs$core$IFn$_invoke$arity$2 ? inst_66734.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_66734.call(null,url,opts));
var state_66770__$1 = state_66770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66770__$1,(7),inst_66735);
} else {
if((state_val_66771 === (19))){
var inst_66768 = (state_66770[(2)]);
var state_66770__$1 = state_66770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66770__$1,inst_66768);
} else {
if((state_val_66771 === (11))){
var state_66770__$1 = state_66770;
var statearr_66850_67039 = state_66770__$1;
(statearr_66850_67039[(2)] = true);

(statearr_66850_67039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (9))){
var state_66770__$1 = state_66770;
var statearr_66851_67040 = state_66770__$1;
(statearr_66851_67040[(2)] = false);

(statearr_66851_67040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (5))){
var state_66770__$1 = state_66770;
var statearr_66854_67045 = state_66770__$1;
(statearr_66854_67045[(2)] = cljs_http.client.put);

(statearr_66854_67045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (14))){
var inst_66737 = (state_66770[(7)]);
var inst_66755 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_66737);
var state_66770__$1 = state_66770;
var statearr_66858_67047 = state_66770__$1;
(statearr_66858_67047[(2)] = inst_66755);

(statearr_66858_67047[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (16))){
var inst_66758 = (state_66770[(9)]);
var inst_66758__$1 = (state_66770[(2)]);
var inst_66759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66758__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_66760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66758__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_66770__$1 = (function (){var statearr_66859 = state_66770;
(statearr_66859[(9)] = inst_66758__$1);

(statearr_66859[(8)] = inst_66760);

return statearr_66859;
})();
if(cljs.core.truth_(inst_66759)){
var statearr_66860_67052 = state_66770__$1;
(statearr_66860_67052[(1)] = (17));

} else {
var statearr_66861_67053 = state_66770__$1;
(statearr_66861_67053[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (10))){
var inst_66753 = (state_66770[(2)]);
var state_66770__$1 = state_66770;
if(cljs.core.truth_(inst_66753)){
var statearr_66862_67054 = state_66770__$1;
(statearr_66862_67054[(1)] = (14));

} else {
var statearr_66863_67055 = state_66770__$1;
(statearr_66863_67055[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (18))){
var inst_66758 = (state_66770[(9)]);
var inst_66765 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_66758);
var inst_66766 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_66765) : re_frame.core.dispatch.call(null,inst_66765));
var state_66770__$1 = state_66770;
var statearr_66881_67059 = state_66770__$1;
(statearr_66881_67059[(2)] = inst_66766);

(statearr_66881_67059[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66771 === (8))){
var inst_66737 = (state_66770[(7)]);
var inst_66742 = inst_66737.cljs$lang$protocol_mask$partition0$;
var inst_66743 = (inst_66742 & (64));
var inst_66744 = inst_66737.cljs$core$ISeq$;
var inst_66745 = (cljs.core.PROTOCOL_SENTINEL === inst_66744);
var inst_66746 = ((inst_66743) || (inst_66745));
var state_66770__$1 = state_66770;
if(cljs.core.truth_(inst_66746)){
var statearr_66882_67060 = state_66770__$1;
(statearr_66882_67060[(1)] = (11));

} else {
var statearr_66883_67061 = state_66770__$1;
(statearr_66883_67061[(1)] = (12));

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
var athens$events$state_machine__41713__auto__ = null;
var athens$events$state_machine__41713__auto____0 = (function (){
var statearr_66884 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66884[(0)] = athens$events$state_machine__41713__auto__);

(statearr_66884[(1)] = (1));

return statearr_66884;
});
var athens$events$state_machine__41713__auto____1 = (function (state_66770){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_66770);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e66885){if((e66885 instanceof Object)){
var ex__41716__auto__ = e66885;
var statearr_66886_67065 = state_66770;
(statearr_66886_67065[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66885;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67066 = state_66770;
state_66770 = G__67066;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$events$state_machine__41713__auto__ = function(state_66770){
switch(arguments.length){
case 0:
return athens$events$state_machine__41713__auto____0.call(this);
case 1:
return athens$events$state_machine__41713__auto____1.call(this,state_66770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$events$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$events$state_machine__41713__auto____0;
athens$events$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$events$state_machine__41713__auto____1;
return athens$events$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_66887 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_66887[(6)] = c__41735__auto__);

return statearr_66887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__66689_67010,G__66690_67011) : re_frame.core.reg_fx.call(null,G__66689_67010,G__66690_67011));
var G__66888_67068 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__66889_67069 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__66890){
var map__66891 = p__66890;
var map__66891__$1 = (((((!((map__66891 == null))))?(((((map__66891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66891):map__66891);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66891__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66891__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66891__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66891__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__66902 = action;
var G__66902__$1 = (((G__66902 instanceof cljs.core.Keyword))?G__66902.fqn:null);
switch (G__66902__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66902__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__66888_67068,G__66889_67069) : re_frame.core.reg_fx.call(null,G__66888_67068,G__66889_67069));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
var G__66903_67073 = new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577);
var G__66904_67074 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__66905){
var vec__66906 = p__66905;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66906,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66906,(1),null);
var _PLUS_debux_dbg_opts_PLUS__67075 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))));

var opts__46806__auto___67076 = _PLUS_debux_dbg_opts_PLUS__67075;
var result__46807__auto___67077 = datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS__67075;
var result__46807__auto___67077 = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto___67077,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto___67077;
})(),(function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS__67075;
var result__46807__auto___67077 = (function (){var G__66912 = (function (){var opts__46806__auto____$2 = _PLUS_debux_dbg_opts_PLUS__67075;
var result__46807__auto___67077 = athens.db.schema;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto___67077,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46807__auto___67077;
})();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__66912) : datascript.core.empty_db.call(null,G__66912));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto___67077,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto___67077;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto___67077,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e66909){var e_67080 = e66909;
throw e_67080;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)));

var opts__46806__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = athens.db.str_to_db_tx((function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = json_str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46807__auto__;
}catch (e66913){var e = e66913;
throw e;
}}):(function (_,p__66914){
var vec__66915 = p__66914;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66915,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66915,(1),null);
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));

return athens.db.str_to_db_tx(json_str);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__66903_67073,G__66904_67074) : re_posh.core.reg_event_ds.call(null,G__66903_67073,G__66904_67074));
var G__66918_67085 = new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710);
var G__66919_67086 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__66920){
var vec__66921 = p__66920;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66921,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66921,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66921,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null));

var opts__46806__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(function (){var opts__46806__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = eid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46807__auto__;
})(),new cljs.core.Keyword("block","open","block/open",-1875254829),(function (){var opts__46806__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = cljs.core.not((function (){var opts__46806__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = open_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46807__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46807__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46807__auto__;
}catch (e66924){var e = e66924;
throw e;
}}):(function (_,p__66925){
var vec__66926 = p__66925;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66926,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66926,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66926,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.not(open_state)], null)], null);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__66918_67085,G__66919_67086) : re_posh.core.reg_event_ds.call(null,G__66918_67085,G__66919_67086));
athens.events.node_with_title = (function athens$events$node_with_title(ds,title){
var G__66929 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)], null);
var G__66930 = ds;
var G__66931 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__66929,G__66930,G__66931) : datascript.core.q.call(null,G__66929,G__66930,G__66931));
});
athens.events.referencing_blocks = (function athens$events$referencing_blocks(ds,title){
var G__66935 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?s","?s",456183954,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__66936 = ds;
var G__66937 = athens.patterns.linked(title);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__66935,G__66936,G__66937) : datascript.core.q.call(null,G__66935,G__66936,G__66937));
});
athens.events.rename_refs_tx = (function athens$events$rename_refs_tx(old_title,new_title,p__66938){
var vec__66939 = p__66938;
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66939,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66939,(1),null);
var new_s = clojure.string.replace(s,athens.patterns.linked(old_title),["$1$3$4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_title),"$2$5"].join(''));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","string","block/string",-2066596447),new_s], null);
});
athens.events.rename_tx = (function athens$events$rename_tx(ds,old_title,new_title){
var eid = athens.events.node_with_title(ds,old_title);
var blocks = athens.events.referencing_blocks(ds,old_title);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("node","title","node/title",628940777),new_title], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.events.rename_refs_tx,old_title,new_title),blocks));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("node","renamed","node/renamed",-1655200587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__66942 = new cljs.core.Keyword(null,"ds","ds",-257415859);
return (re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__66942) : re_posh.core.inject_cofx.call(null,G__66942));
})()], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__66943,p__66944){
var map__66945 = p__66943;
var map__66945__$1 = (((((!((map__66945 == null))))?(((((map__66945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66945):map__66945);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66945__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66945__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__66946 = p__66944;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66946,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66946,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66946,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null))));

var opts__46806__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = (((function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__46806__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = old_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46807__auto__;
})(),(function (){var opts__46806__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46807__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})())?(function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = (cljs.core.truth_((function (){var opts__46806__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = athens.events.node_with_title((function (){var opts__46806__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = ds;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46807__auto__;
})(),(function (){var opts__46806__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46807__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46807__auto__;
})())?(function (){var opts__46806__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),old_title,new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new_title], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46807__auto__;
})():(function (){var opts__46806__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.rename_tx(ds,old_title,new_title)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46807__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})():null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46807__auto__;
}catch (e66950){var e = e66950;
throw e;
}}):(function (p__66951,p__66952){
var map__66953 = p__66951;
var map__66953__$1 = (((((!((map__66953 == null))))?(((((map__66953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66953):map__66953);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66953__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66953__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__66954 = p__66952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66954,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66954,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66954,(2),null);
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
var G__66958 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?children","?children",2075030425,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?children","?children",2075030425,null)], null)], null);
var G__66959 = ds;
var G__66960 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__66958,G__66959,G__66960) : datascript.core.q.call(null,G__66958,G__66959,G__66960));
});
athens.events.get_children_eids = (function athens$events$get_children_eids(ds,title){
var G__66961 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?children","?children",2075030425,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?children","?children",2075030425,null)], null)], null);
var G__66962 = ds;
var G__66963 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__66961,G__66962,G__66963) : datascript.core.q.call(null,G__66961,G__66962,G__66963));
});
athens.events.move_blocks_tx = (function athens$events$move_blocks_tx(ds,from_title,to_title){
var block_count = athens.events.count_children(ds,to_title);
var block_eids = athens.events.get_children_eids(ds,from_title);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (eid){
var order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1((function (){var G__66964 = ds;
var G__66965 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","order","block/order",-1429282437)], null);
var G__66966 = eid;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__66964,G__66965,G__66966) : datascript.core.pull.call(null,G__66964,G__66965,G__66966));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),to_title], null),new cljs.core.Keyword("block","children","block/children",-1040716209),eid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","order","block/order",-1429282437),(order + block_count)], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_eids], 0));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("node","merged","node/merged",1662072257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__66967 = new cljs.core.Keyword(null,"ds","ds",-257415859);
return (re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__66967) : re_posh.core.inject_cofx.call(null,G__66967));
})()], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__66968,p__66969){
var map__66970 = p__66968;
var map__66970__$1 = (((((!((map__66970 == null))))?(((((map__66970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66970):map__66970);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66970__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66970__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__66971 = p__66969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66971,(0),null);
var primary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66971,(1),null);
var secondary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66971,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"move-blocks-tx","move-blocks-tx",857400980,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null)),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)))], null));

var opts__46806__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),secondary_title], null)], null)], null),athens.events.move_blocks_tx(ds,secondary_title,primary_title),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.events.rename_tx(ds,primary_title,secondary_title)], 0))], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"move-blocks-tx","move-blocks-tx",857400980,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null)),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46807__auto__;
}catch (e66975){var e = e66975;
throw e;
}}):(function (p__66976,p__66977){
var map__66978 = p__66976;
var map__66978__$1 = (((((!((map__66978 == null))))?(((((map__66978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66978):map__66978);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66978__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66978__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__66979 = p__66977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66979,(0),null);
var primary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66979,(1),null);
var secondary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66979,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),secondary_title], null)], null)], null),athens.events.move_blocks_tx(ds,secondary_title,primary_title),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.events.rename_tx(ds,primary_title,secondary_title)], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__66985,_){
var map__66986 = p__66985;
var map__66986__$1 = (((((!((map__66986 == null))))?(((((map__66986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66986):map__66986);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66986__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null));

var opts__46806__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46807__auto__;
}catch (e66988){var e = e66988;
throw e;
}}):(function (p__66989,_){
var map__66990 = p__66989;
var map__66990__$1 = (((((!((map__66990 == null))))?(((((map__66990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66990):map__66990);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66990__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,error){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__46806__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = cljs.core.assoc_in((function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})(),(function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})(),(function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46807__auto__;
}catch (e66992){var e = e66992;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__46806__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = cljs.core.assoc_in((function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})(),(function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})(),(function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46807__auto__;
}catch (e66993){var e = e66993;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__46806__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = cljs.core.assoc_in((function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})(),(function (){var opts__46806__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46807__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46807__auto__;
}catch (e66994){var e = e66994;
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

var opts__46806__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46807__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46807__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46807__auto__;
}catch (e67005){var e = e67005;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
})));

//# sourceMappingURL=athens.events.js.map
