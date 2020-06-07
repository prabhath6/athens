goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
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
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_66779){
var state_val_66780 = (state_66779[(1)]);
if((state_val_66780 === (7))){
var state_66779__$1 = state_66779;
var statearr_66781_66864 = state_66779__$1;
(statearr_66781_66864[(2)] = false);

(statearr_66781_66864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66780 === (1))){
var inst_66693 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_66694 = [false];
var inst_66695 = cljs.core.PersistentHashMap.fromArrays(inst_66693,inst_66694);
var inst_66696 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66695], 0));
var state_66779__$1 = state_66779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66779__$1,(2),inst_66696);
} else {
if((state_val_66780 === (4))){
var state_66779__$1 = state_66779;
var statearr_66782_66871 = state_66779__$1;
(statearr_66782_66871[(2)] = false);

(statearr_66782_66871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66780 === (13))){
var inst_66775 = alert("Failed to retrieve data from GitHub");
var state_66779__$1 = state_66779;
var statearr_66783_66872 = state_66779__$1;
(statearr_66783_66872[(2)] = inst_66775);

(statearr_66783_66872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66780 === (6))){
var state_66779__$1 = state_66779;
var statearr_66784_66873 = state_66779__$1;
(statearr_66784_66873[(2)] = true);

(statearr_66784_66873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66780 === (3))){
var inst_66698 = (state_66779[(7)]);
var inst_66707 = inst_66698.cljs$lang$protocol_mask$partition0$;
var inst_66708 = (inst_66707 & (64));
var inst_66709 = inst_66698.cljs$core$ISeq$;
var inst_66710 = (cljs.core.PROTOCOL_SENTINEL === inst_66709);
var inst_66711 = ((inst_66708) || (inst_66710));
var state_66779__$1 = state_66779;
if(cljs.core.truth_(inst_66711)){
var statearr_66785_66874 = state_66779__$1;
(statearr_66785_66874[(1)] = (6));

} else {
var statearr_66786_66875 = state_66779__$1;
(statearr_66786_66875[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66780 === (12))){
var inst_66726 = (state_66779[(8)]);
var inst_66772 = athens.db.str_to_db_tx(inst_66726);
var inst_66773 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_66772) : posh.reagent.transact_BANG_.call(null,conn,inst_66772));
var state_66779__$1 = state_66779;
var statearr_66788_66880 = state_66779__$1;
(statearr_66788_66880[(2)] = inst_66773);

(statearr_66788_66880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66780 === (2))){
var inst_66698 = (state_66779[(7)]);
var inst_66698__$1 = (state_66779[(2)]);
var inst_66704 = (inst_66698__$1 == null);
var inst_66705 = cljs.core.not(inst_66704);
var state_66779__$1 = (function (){var statearr_66791 = state_66779;
(statearr_66791[(7)] = inst_66698__$1);

return statearr_66791;
})();
if(inst_66705){
var statearr_66792_66893 = state_66779__$1;
(statearr_66792_66893[(1)] = (3));

} else {
var statearr_66793_66894 = state_66779__$1;
(statearr_66793_66894[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66780 === (11))){
var inst_66724 = (state_66779[(2)]);
var inst_66725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66724,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_66726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66724,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_66779__$1 = (function (){var statearr_66794 = state_66779;
(statearr_66794[(8)] = inst_66726);

return statearr_66794;
})();
if(cljs.core.truth_(inst_66725)){
var statearr_66795_66895 = state_66779__$1;
(statearr_66795_66895[(1)] = (12));

} else {
var statearr_66796_66896 = state_66779__$1;
(statearr_66796_66896[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66780 === (9))){
var inst_66698 = (state_66779[(7)]);
var inst_66721 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_66698);
var state_66779__$1 = state_66779;
var statearr_66797_66897 = state_66779__$1;
(statearr_66797_66897[(2)] = inst_66721);

(statearr_66797_66897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66780 === (5))){
var inst_66719 = (state_66779[(2)]);
var state_66779__$1 = state_66779;
if(cljs.core.truth_(inst_66719)){
var statearr_66798_66898 = state_66779__$1;
(statearr_66798_66898[(1)] = (9));

} else {
var statearr_66799_66899 = state_66779__$1;
(statearr_66799_66899[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66780 === (14))){
var inst_66777 = (state_66779[(2)]);
var state_66779__$1 = state_66779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66779__$1,inst_66777);
} else {
if((state_val_66780 === (10))){
var inst_66698 = (state_66779[(7)]);
var state_66779__$1 = state_66779;
var statearr_66800_66900 = state_66779__$1;
(statearr_66800_66900[(2)] = inst_66698);

(statearr_66800_66900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66780 === (8))){
var inst_66716 = (state_66779[(2)]);
var state_66779__$1 = state_66779;
var statearr_66801_66901 = state_66779__$1;
(statearr_66801_66901[(2)] = inst_66716);

(statearr_66801_66901[(1)] = (5));


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
var statearr_66830 = [null,null,null,null,null,null,null,null,null];
(statearr_66830[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__);

(statearr_66830[(1)] = (1));

return statearr_66830;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1 = (function (state_66779){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_66779);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e66831){if((e66831 instanceof Object)){
var ex__41716__auto__ = e66831;
var statearr_66832_66910 = state_66779;
(statearr_66832_66910[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66911 = state_66779;
state_66779 = G__66911;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = function(state_66779){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1.call(this,state_66779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_66833 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_66833[(6)] = c__41735__auto__);

return statearr_66833;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
athens.devcards.db.new_conn = (function athens$devcards$db$new_conn(){
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
});
athens.devcards.db.posh_conn_BANG_ = (function athens$devcards$db$posh_conn_BANG_(conn){
return (posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(conn) : posh.reagent.posh_BANG_.call(null,conn));
});

//# sourceMappingURL=athens.devcards.db.js.map
