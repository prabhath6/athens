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
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_119899){
var state_val_119900 = (state_119899[(1)]);
if((state_val_119900 === (7))){
var state_119899__$1 = state_119899;
var statearr_119901_119937 = state_119899__$1;
(statearr_119901_119937[(2)] = false);

(statearr_119901_119937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119900 === (1))){
var inst_119862 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_119863 = [false];
var inst_119864 = cljs.core.PersistentHashMap.fromArrays(inst_119862,inst_119863);
var inst_119865 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_119864], 0));
var state_119899__$1 = state_119899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119899__$1,(2),inst_119865);
} else {
if((state_val_119900 === (4))){
var state_119899__$1 = state_119899;
var statearr_119902_119941 = state_119899__$1;
(statearr_119902_119941[(2)] = false);

(statearr_119902_119941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119900 === (13))){
var inst_119895 = alert("Failed to retrieve data from GitHub");
var state_119899__$1 = state_119899;
var statearr_119903_119952 = state_119899__$1;
(statearr_119903_119952[(2)] = inst_119895);

(statearr_119903_119952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119900 === (6))){
var state_119899__$1 = state_119899;
var statearr_119904_119957 = state_119899__$1;
(statearr_119904_119957[(2)] = true);

(statearr_119904_119957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119900 === (3))){
var inst_119867 = (state_119899[(7)]);
var inst_119872 = inst_119867.cljs$lang$protocol_mask$partition0$;
var inst_119873 = (inst_119872 & (64));
var inst_119874 = inst_119867.cljs$core$ISeq$;
var inst_119875 = (cljs.core.PROTOCOL_SENTINEL === inst_119874);
var inst_119876 = ((inst_119873) || (inst_119875));
var state_119899__$1 = state_119899;
if(cljs.core.truth_(inst_119876)){
var statearr_119905_119958 = state_119899__$1;
(statearr_119905_119958[(1)] = (6));

} else {
var statearr_119906_119959 = state_119899__$1;
(statearr_119906_119959[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119900 === (12))){
var inst_119890 = (state_119899[(8)]);
var inst_119892 = athens.db.str_to_db_tx(inst_119890);
var inst_119893 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_119892) : posh.reagent.transact_BANG_.call(null,conn,inst_119892));
var state_119899__$1 = state_119899;
var statearr_119907_119963 = state_119899__$1;
(statearr_119907_119963[(2)] = inst_119893);

(statearr_119907_119963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119900 === (2))){
var inst_119867 = (state_119899[(7)]);
var inst_119867__$1 = (state_119899[(2)]);
var inst_119869 = (inst_119867__$1 == null);
var inst_119870 = cljs.core.not(inst_119869);
var state_119899__$1 = (function (){var statearr_119908 = state_119899;
(statearr_119908[(7)] = inst_119867__$1);

return statearr_119908;
})();
if(inst_119870){
var statearr_119909_119964 = state_119899__$1;
(statearr_119909_119964[(1)] = (3));

} else {
var statearr_119910_119965 = state_119899__$1;
(statearr_119910_119965[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119900 === (11))){
var inst_119888 = (state_119899[(2)]);
var inst_119889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119888,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_119890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119888,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_119899__$1 = (function (){var statearr_119911 = state_119899;
(statearr_119911[(8)] = inst_119890);

return statearr_119911;
})();
if(cljs.core.truth_(inst_119889)){
var statearr_119912_119966 = state_119899__$1;
(statearr_119912_119966[(1)] = (12));

} else {
var statearr_119913_119967 = state_119899__$1;
(statearr_119913_119967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119900 === (9))){
var inst_119867 = (state_119899[(7)]);
var inst_119885 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119867);
var state_119899__$1 = state_119899;
var statearr_119914_119968 = state_119899__$1;
(statearr_119914_119968[(2)] = inst_119885);

(statearr_119914_119968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119900 === (5))){
var inst_119883 = (state_119899[(2)]);
var state_119899__$1 = state_119899;
if(cljs.core.truth_(inst_119883)){
var statearr_119915_119969 = state_119899__$1;
(statearr_119915_119969[(1)] = (9));

} else {
var statearr_119916_119970 = state_119899__$1;
(statearr_119916_119970[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119900 === (14))){
var inst_119897 = (state_119899[(2)]);
var state_119899__$1 = state_119899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119899__$1,inst_119897);
} else {
if((state_val_119900 === (10))){
var inst_119867 = (state_119899[(7)]);
var state_119899__$1 = state_119899;
var statearr_119917_119971 = state_119899__$1;
(statearr_119917_119971[(2)] = inst_119867);

(statearr_119917_119971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119900 === (8))){
var inst_119880 = (state_119899[(2)]);
var state_119899__$1 = state_119899;
var statearr_119918_119972 = state_119899__$1;
(statearr_119918_119972[(2)] = inst_119880);

(statearr_119918_119972[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0 = (function (){
var statearr_119919 = [null,null,null,null,null,null,null,null,null];
(statearr_119919[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_119919[(1)] = (1));

return statearr_119919;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_119899){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_119899);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e119920){if((e119920 instanceof Object)){
var ex__39596__auto__ = e119920;
var statearr_119921_119973 = state_119899;
(statearr_119921_119973[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_119899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e119920;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__119974 = state_119899;
state_119899 = G__119974;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_119899){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_119899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_119922 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_119922[(6)] = c__39615__auto__);

return statearr_119922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

return c__39615__auto__;
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
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db119923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db119923 = (function (meta119924){
this.meta119924 = meta119924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db119923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119925,meta119924__$1){
var self__ = this;
var _119925__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db119923(meta119924__$1));
}));

(athens.devcards.db.t_athens$devcards$db119923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119925){
var self__ = this;
var _119925__$1 = this;
return self__.meta119924;
}));

(athens.devcards.db.t_athens$devcards$db119923.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db119923.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
var self__ = this;
var this__46709__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46710__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46728__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__46728__auto__)){
return (function (data_atom__46729__auto__,owner__46730__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46728__auto__,data_atom__46729__auto__,owner__46730__auto__], null));
});
} else {
return reagent.core.as_element(v__46728__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46710__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db119923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta119924","meta119924",1739110180,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db119923.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db119923.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db119923");

(athens.devcards.db.t_athens$devcards$db119923.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db119923");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db119923.
 */
athens.devcards.db.__GT_t_athens$devcards$db119923 = (function athens$devcards$db$__GT_t_athens$devcards$db119923(meta119924){
return (new athens.devcards.db.t_athens$devcards$db119923(meta119924));
});

}

return (new athens.devcards.db.t_athens$devcards$db119923(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.db.new_conn = (function athens$devcards$db$new_conn(){
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
});
athens.devcards.db.posh_conn_BANG_ = (function athens$devcards$db$posh_conn_BANG_(conn){
return (posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(conn) : posh.reagent.posh_BANG_.call(null,conn));
});

//# sourceMappingURL=athens.devcards.db.js.map
