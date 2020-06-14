goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.color');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('sci.core');
goog.require('stylefy.core');
athens.devcards.db_boxes.key_code__GT_key = new cljs.core.PersistentArrayMap(null, 3, [(8),new cljs.core.Keyword(null,"backspace","backspace",-696007848),(9),new cljs.core.Keyword(null,"tab","tab",-559583621),(13),new cljs.core.Keyword(null,"return","return",-1891502105)], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51321 = (function (meta51322){
this.meta51322 = meta51322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51323,meta51322__$1){
var self__ = this;
var _51323__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51321(meta51322__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51323){
var self__ = this;
var _51323__$1 = this;
return self__.meta51322;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51321.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51321.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.base_styles], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51322","meta51322",-1672976043,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51321.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51321.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51321");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51321.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51321");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51321.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51321 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51321(meta51322){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51321(meta51322));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51321(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in browsing the datascript database\n\n  You can use these devcards to explore the Athens datascript database.\n\n  Initial data:\n  - Start by loading initial data with the \"Load Real Data\" button.\n  - This will load some sample datoms from the ego.datoms file\n\n  Executing queries:\n  - The browse-box uses [sci](https://github.com/borkdude/sci) to execute datascript queries.\n  - In addition to the (non-side-effecting) clojure.core functions, the following bindings are available:\n  - `athens/db` -> the datascript connection, dereference (`@`) to get the current database value\n  - `d/q` -> for querying the database\n  - `d/pull` -> pull one or more attributes of an entity, returns a map\n  - `d/pull-many` -> like `d/pull`, but pulls many entities at once\n  - Execute the query by pressing `shift-enter`\n\n  Browsing:\n  - The browser is a simple html table translating the query result into rows and cells.\n  - Browsing is possible if you've used a pull expression (in a query or with `d/pull` or `d/pull-many`).\n  - If you click a link, it will generate a new query and evaluate it.\n\n  History:\n  - Devcards keeps a history for us. Use the arrows at the bottom to navigate back to earlier states.\n\n  Possible improvements:\n  - Right now navigation is only possible by using a pull expression. By analysing queries it might also be possible for all other queries.\n  - No transctions are currently allowed, but this can easily be changed by adding `d/transact` to sci's bindings.\n  - There is absolutely no styling, some minimal styling would probably make reading the table easier.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)",new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__51327){
var map__51328 = p__51327;
var map__51328__$1 = (((((!((map__51328 == null))))?(((((map__51328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51328):map__51328);
var box = map__51328__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51328__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__51330 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e51333){if((e51333 instanceof Error)){
var e = e51333;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e51333;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51330,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51330,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__51337_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51337_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.increase_limit_BANG_ = (function athens$devcards$db_boxes$increase_limit_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.db_boxes.box_state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10)], 0));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_51380){
var state_val_51381 = (state_51380[(1)]);
if((state_val_51381 === (7))){
var state_51380__$1 = state_51380;
var statearr_51382_51530 = state_51380__$1;
(statearr_51382_51530[(2)] = false);

(statearr_51382_51530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (1))){
var inst_51339 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51340 = [false];
var inst_51341 = cljs.core.PersistentHashMap.fromArrays(inst_51339,inst_51340);
var inst_51342 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51341], 0));
var state_51380__$1 = state_51380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51380__$1,(2),inst_51342);
} else {
if((state_val_51381 === (4))){
var state_51380__$1 = state_51380;
var statearr_51383_51531 = state_51380__$1;
(statearr_51383_51531[(2)] = false);

(statearr_51383_51531[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (13))){
var inst_51373 = alert("Failed to retrieve data from GitHub");
var state_51380__$1 = state_51380;
var statearr_51384_51532 = state_51380__$1;
(statearr_51384_51532[(2)] = inst_51373);

(statearr_51384_51532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (6))){
var state_51380__$1 = state_51380;
var statearr_51385_51533 = state_51380__$1;
(statearr_51385_51533[(2)] = true);

(statearr_51385_51533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (3))){
var inst_51344 = (state_51380[(7)]);
var inst_51349 = inst_51344.cljs$lang$protocol_mask$partition0$;
var inst_51350 = (inst_51349 & (64));
var inst_51351 = inst_51344.cljs$core$ISeq$;
var inst_51352 = (cljs.core.PROTOCOL_SENTINEL === inst_51351);
var inst_51353 = ((inst_51350) || (inst_51352));
var state_51380__$1 = state_51380;
if(cljs.core.truth_(inst_51353)){
var statearr_51386_51534 = state_51380__$1;
(statearr_51386_51534[(1)] = (6));

} else {
var statearr_51387_51535 = state_51380__$1;
(statearr_51387_51535[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (12))){
var inst_51367 = (state_51380[(8)]);
var inst_51369 = athens.db.str_to_db_tx(inst_51367);
var inst_51370 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_51369);
var inst_51371 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_51380__$1 = (function (){var statearr_51388 = state_51380;
(statearr_51388[(9)] = inst_51370);

return statearr_51388;
})();
var statearr_51389_51536 = state_51380__$1;
(statearr_51389_51536[(2)] = inst_51371);

(statearr_51389_51536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (2))){
var inst_51344 = (state_51380[(7)]);
var inst_51344__$1 = (state_51380[(2)]);
var inst_51346 = (inst_51344__$1 == null);
var inst_51347 = cljs.core.not(inst_51346);
var state_51380__$1 = (function (){var statearr_51390 = state_51380;
(statearr_51390[(7)] = inst_51344__$1);

return statearr_51390;
})();
if(inst_51347){
var statearr_51391_51537 = state_51380__$1;
(statearr_51391_51537[(1)] = (3));

} else {
var statearr_51392_51538 = state_51380__$1;
(statearr_51392_51538[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (11))){
var inst_51365 = (state_51380[(2)]);
var inst_51366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51365,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_51367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51365,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_51380__$1 = (function (){var statearr_51393 = state_51380;
(statearr_51393[(8)] = inst_51367);

return statearr_51393;
})();
if(cljs.core.truth_(inst_51366)){
var statearr_51394_51539 = state_51380__$1;
(statearr_51394_51539[(1)] = (12));

} else {
var statearr_51395_51540 = state_51380__$1;
(statearr_51395_51540[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (9))){
var inst_51344 = (state_51380[(7)]);
var inst_51362 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51344);
var state_51380__$1 = state_51380;
var statearr_51396_51541 = state_51380__$1;
(statearr_51396_51541[(2)] = inst_51362);

(statearr_51396_51541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (5))){
var inst_51360 = (state_51380[(2)]);
var state_51380__$1 = state_51380;
if(cljs.core.truth_(inst_51360)){
var statearr_51397_51542 = state_51380__$1;
(statearr_51397_51542[(1)] = (9));

} else {
var statearr_51398_51543 = state_51380__$1;
(statearr_51398_51543[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (14))){
var inst_51375 = (state_51380[(2)]);
var state_51380__$1 = state_51380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51380__$1,inst_51375);
} else {
if((state_val_51381 === (10))){
var inst_51344 = (state_51380[(7)]);
var state_51380__$1 = state_51380;
var statearr_51399_51544 = state_51380__$1;
(statearr_51399_51544[(2)] = inst_51344);

(statearr_51399_51544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51381 === (8))){
var inst_51357 = (state_51380[(2)]);
var state_51380__$1 = state_51380;
var statearr_51400_51545 = state_51380__$1;
(statearr_51400_51545[(2)] = inst_51357);

(statearr_51400_51545[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____0 = (function (){
var statearr_51401 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51401[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_51401[(1)] = (1));

return statearr_51401;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_51380){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_51380);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e51402){if((e51402 instanceof Object)){
var ex__39596__auto__ = e51402;
var statearr_51403_51546 = state_51380;
(statearr_51403_51546[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51402;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51547 = state_51380;
state_51380 = G__51547;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_51380){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_51380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_51404 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_51404[(6)] = c__39615__auto__);

return statearr_51404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

return c__39615__auto__;
});
athens.devcards.db_boxes.load_real_db_button = (function athens$devcards$db_boxes$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db_boxes.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51405 = (function (meta51406){
this.meta51406 = meta51406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51407,meta51406__$1){
var self__ = this;
var _51407__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51405(meta51406__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51407){
var self__ = this;
var _51407__$1 = this;
return self__.meta51406;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51405.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51405.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51406","meta51406",707323345,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51405.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51405.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51405");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51405.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51405");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51405.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51405 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51405(meta51406){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51405(meta51406));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51405(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51408 = (function (meta51409){
this.meta51409 = meta51409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51410,meta51409__$1){
var self__ = this;
var _51410__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51408(meta51409__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51410){
var self__ = this;
var _51410__$1 = this;
return self__.meta51409;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51408.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51408.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51409","meta51409",747330244,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51408.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51408.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51408");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51408.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51408");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51408.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51408 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51408(meta51409){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51408(meta51409));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51408(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.attr_unique_QMARK_ = (function athens$devcards$db_boxes$attr_unique_QMARK_(attr){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.db.schema,attr),new cljs.core.Keyword("db","unique","db/unique",329396388));
});
athens.devcards.db_boxes.attr_many_QMARK_ = (function athens$devcards$db_boxes$attr_many_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
athens.devcards.db_boxes.attr_ref_QMARK_ = (function athens$devcards$db_boxes$attr_ref_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
athens.devcards.db_boxes.attr_reverse_QMARK_ = (function athens$devcards$db_boxes$attr_reverse_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return clojure.string.starts_with_QMARK_(cljs.core.name(attr),"_");
} else {
return null;
}
});
athens.devcards.db_boxes.headings = (function athens$devcards$db_boxes$headings(data,mode){
var G__51414 = mode;
var G__51414__$1 = (((G__51414 instanceof cljs.core.Keyword))?G__51414.fqn:null);
switch (G__51414__$1) {
case "coll":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx","val"], null);

break;
case "map":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","val"], null);

break;
case "tuples":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,data))));

break;
case "maps":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51414__$1)].join('')));

}
});
athens.devcards.db_boxes.coll_rows = (function athens$devcards$db_boxes$coll_rows(coll){
var row = (function (p__51415){
var vec__51416 = p__51415;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51416,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51416,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.devcards.db_boxes.reverse_refs_for_attr = (function athens$devcards$db_boxes$reverse_refs_for_attr(attr,eid){
var G__51422 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__51423 = cljs.core.deref(athens.db.dsdb);
var G__51424 = attr;
var G__51425 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__51422,G__51423,G__51424,G__51425) : datascript.core.q.call(null,G__51422,G__51423,G__51424,G__51425));
});
athens.devcards.db_boxes.reverse_attr = (function athens$devcards$db_boxes$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.devcards.db_boxes.wrap_with_db_id = (function athens$devcards$db_boxes$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.devcards.db_boxes.reverse_refs = (function athens$devcards$db_boxes$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$reverse_refs_$_iter__51426(s__51427){
return (new cljs.core.LazySeq(null,(function (){
var s__51427__$1 = s__51427;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51427__$1);
if(temp__5735__auto__){
var s__51427__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51427__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51427__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51429 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51428 = (0);
while(true){
if((i__51428 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51428);
cljs.core.chunk_append(b__51429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.wrap_with_db_id,athens.devcards.db_boxes.reverse_refs_for_attr(attr,eid))], null));

var G__51549 = (i__51428 + (1));
i__51428 = G__51549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51429),athens$devcards$db_boxes$reverse_refs_$_iter__51426(cljs.core.chunk_rest(s__51427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51429),null);
}
} else {
var attr = cljs.core.first(s__51427__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.wrap_with_db_id,athens.devcards.db_boxes.reverse_refs_for_attr(attr,eid))], null),athens$devcards$db_boxes$reverse_refs_$_iter__51426(cljs.core.rest(s__51427__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_attrs);
})());
});
athens.devcards.db_boxes.reverse_rows = (function athens$devcards$db_boxes$reverse_rows(p__51435){
var map__51436 = p__51435;
var map__51436__$1 = (((((!((map__51436 == null))))?(((((map__51436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51436):map__51436);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51436__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.devcards.db_boxes.reverse_refs(id);
} else {
return null;
}
});
athens.devcards.db_boxes.map_rows = (function athens$devcards$db_boxes$map_rows(m){
var row = (function (p__51438){
var vec__51439 = p__51438;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51439,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.devcards.db_boxes.reverse_rows(m)));
});
athens.devcards.db_boxes.tuple_rows = (function athens$devcards$db_boxes$tuple_rows(tuples){
var row = (function (p__51442){
var vec__51443 = p__51442;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51443,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51443,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.devcards.db_boxes.maps_rows = (function athens$devcards$db_boxes$maps_rows(ms){
var hs = athens.devcards.db_boxes.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$devcards$db_boxes$maps_rows_$_iter__51446(s__51447){
return (new cljs.core.LazySeq(null,(function (){
var s__51447__$1 = s__51447;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51447__$1);
if(temp__5735__auto__){
var s__51447__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51447__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51447__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51449 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51448 = (0);
while(true){
if((i__51448 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51448);
cljs.core.chunk_append(b__51449,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__51448,idx,c__4580__auto__,size__4581__auto__,b__51449,s__51447__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__51446_$_iter__51450(s__51451){
return (new cljs.core.LazySeq(null,((function (i__51448,idx,c__4580__auto__,size__4581__auto__,b__51449,s__51447__$2,temp__5735__auto__,hs){
return (function (){
var s__51451__$1 = s__51451;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51451__$1);
if(temp__5735__auto____$1){
var s__51451__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51451__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__51451__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__51453 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__51452 = (0);
while(true){
if((i__51452 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__51452);
cljs.core.chunk_append(b__51453,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__51550 = (i__51452 + (1));
i__51452 = G__51550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51453),athens$devcards$db_boxes$maps_rows_$_iter__51446_$_iter__51450(cljs.core.chunk_rest(s__51451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51453),null);
}
} else {
var h = cljs.core.first(s__51451__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__51446_$_iter__51450(cljs.core.rest(s__51451__$2)));
}
} else {
return null;
}
break;
}
});})(i__51448,idx,c__4580__auto__,size__4581__auto__,b__51449,s__51447__$2,temp__5735__auto__,hs))
,null,null));
});})(i__51448,idx,c__4580__auto__,size__4581__auto__,b__51449,s__51447__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__51551 = (i__51448 + (1));
i__51448 = G__51551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51449),athens$devcards$db_boxes$maps_rows_$_iter__51446(cljs.core.chunk_rest(s__51447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51449),null);
}
} else {
var idx = cljs.core.first(s__51447__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__51447__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__51446_$_iter__51454(s__51455){
return (new cljs.core.LazySeq(null,(function (){
var s__51455__$1 = s__51455;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51455__$1);
if(temp__5735__auto____$1){
var s__51455__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51455__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51455__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51457 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51456 = (0);
while(true){
if((i__51456 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51456);
cljs.core.chunk_append(b__51457,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__51552 = (i__51456 + (1));
i__51456 = G__51552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51457),athens$devcards$db_boxes$maps_rows_$_iter__51446_$_iter__51454(cljs.core.chunk_rest(s__51455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51457),null);
}
} else {
var h = cljs.core.first(s__51455__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__51446_$_iter__51454(cljs.core.rest(s__51455__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__51447__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$db_boxes$maps_rows_$_iter__51446(cljs.core.rest(s__51447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms)));
});
athens.devcards.db_boxes.get_rows = (function athens$devcards$db_boxes$get_rows(data,mode){
var G__51458 = mode;
var G__51458__$1 = (((G__51458 instanceof cljs.core.Keyword))?G__51458.fqn:null);
switch (G__51458__$1) {
case "coll":
return athens.devcards.db_boxes.coll_rows(data);

break;
case "map":
return athens.devcards.db_boxes.map_rows(data);

break;
case "tuples":
return athens.devcards.db_boxes.tuple_rows(data);

break;
case "maps":
return athens.devcards.db_boxes.maps_rows(data);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51458__$1)].join('')));

}
});
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__51474 = arguments.length;
switch (G__51474) {
case 1:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1 = (function (id){
return ["(d/pull @athens/db '[*] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2 = (function (attr,id){
return ["(d/pull @athens/db '[*] [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),"])"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$lang$maxFixedArity = 2);

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__51475){
var map__51476 = p__51475;
var map__51476__$1 = (((((!((map__51476 == null))))?(((((map__51476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51476):map__51476);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51476__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51476__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51476__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return value;
}
})()));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(athens.devcards.db_boxes.attr_unique_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2(attr,value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(((athens.devcards.db_boxes.attr_many_QMARK_(attr)) && (athens.devcards.db_boxes.attr_ref_QMARK_(attr)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__51478(s__51479){
return (new cljs.core.LazySeq(null,(function (){
var s__51479__$1 = s__51479;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51479__$1);
if(temp__5735__auto__){
var s__51479__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51479__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51479__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51481 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51480 = (0);
while(true){
if((i__51480 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51480);
cljs.core.chunk_append(b__51481,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51482 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51482) : athens.devcards.db_boxes.cell.call(null,G__51482));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__51555 = (i__51480 + (1));
i__51480 = G__51555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51481),athens$devcards$db_boxes$cell_$_iter__51478(cljs.core.chunk_rest(s__51479__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51481),null);
}
} else {
var v = cljs.core.first(s__51479__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51483 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51483) : athens.devcards.db_boxes.cell.call(null,G__51483));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__51478(cljs.core.rest(s__51479__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(cljs.core.truth_(athens.devcards.db_boxes.attr_reverse_QMARK_(attr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__51484(s__51485){
return (new cljs.core.LazySeq(null,(function (){
var s__51485__$1 = s__51485;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51485__$1);
if(temp__5735__auto__){
var s__51485__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51485__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51485__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51487 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51486 = (0);
while(true){
if((i__51486 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51486);
cljs.core.chunk_append(b__51487,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51488 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51488) : athens.devcards.db_boxes.cell.call(null,G__51488));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__51556 = (i__51486 + (1));
i__51486 = G__51556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51487),athens$devcards$db_boxes$cell_$_iter__51484(cljs.core.chunk_rest(s__51485__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51487),null);
}
} else {
var v = cljs.core.first(s__51485__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51489 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51489) : athens.devcards.db_boxes.cell.call(null,G__51489));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__51484(cljs.core.rest(s__51485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(athens.devcards.db_boxes.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__51490(s__51491){
return (new cljs.core.LazySeq(null,(function (){
var s__51491__$1 = s__51491;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51491__$1);
if(temp__5735__auto__){
var s__51491__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51491__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51491__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51493 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51492 = (0);
while(true){
if((i__51492 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51492);
cljs.core.chunk_append(b__51493,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51494 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51494) : athens.devcards.db_boxes.cell.call(null,G__51494));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__51557 = (i__51492 + (1));
i__51492 = G__51557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51493),athens$devcards$db_boxes$cell_$_iter__51490(cljs.core.chunk_rest(s__51491__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51493),null);
}
} else {
var v = cljs.core.first(s__51491__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51495 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51495) : athens.devcards.db_boxes.cell.call(null,G__51495));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__51490(cljs.core.rest(s__51491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

}
}
}
}
}
} else {
return "";
}
});
athens.devcards.db_boxes.table_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans Condensed",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.01em",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 0",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join(''),new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:first-child","td:first-child",-780376400),new cljs.core.Keyword(null,"th:first-child","th:first-child",-1470990681),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:last-child","td:last-child",1591731607),new cljs.core.Keyword(null,"th-last-child","th-last-child",1649800725),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr:hover","tr:hover",-638423922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),garden.color.opacify(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.15),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>ul","td>ul",1108138610),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 4px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"4px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li:first-child","li:first-child",-1847125916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"none",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.devcards.db_boxes.footer_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null)], null);
athens.devcards.db_boxes.table_view = (function athens$devcards$db_boxes$table_view(data,mode,limit){
var hs = athens.devcards.db_boxes.headings(data,mode);
var rows = athens.devcards.db_boxes.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__51496(s__51497){
return (new cljs.core.LazySeq(null,(function (){
var s__51497__$1 = s__51497;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51497__$1);
if(temp__5735__auto__){
var s__51497__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51497__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51497__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51499 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51498 = (0);
while(true){
if((i__51498 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51498);
cljs.core.chunk_append(b__51499,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__51558 = (i__51498 + (1));
i__51498 = G__51558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51499),athens$devcards$db_boxes$table_view_$_iter__51496(cljs.core.chunk_rest(s__51497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51499),null);
}
} else {
var h = cljs.core.first(s__51497__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51496(cljs.core.rest(s__51497__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__51500(s__51501){
return (new cljs.core.LazySeq(null,(function (){
var s__51501__$1 = s__51501;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51501__$1);
if(temp__5735__auto__){
var s__51501__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51501__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51501__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51503 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51502 = (0);
while(true){
if((i__51502 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51502);
cljs.core.chunk_append(b__51503,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__51502,row,c__4580__auto__,size__4581__auto__,b__51503,s__51501__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__51500_$_iter__51504(s__51505){
return (new cljs.core.LazySeq(null,((function (i__51502,row,c__4580__auto__,size__4581__auto__,b__51503,s__51501__$2,temp__5735__auto__,hs,rows){
return (function (){
var s__51505__$1 = s__51505;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51505__$1);
if(temp__5735__auto____$1){
var s__51505__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51505__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__51505__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__51507 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__51506 = (0);
while(true){
if((i__51506 < size__4581__auto____$1)){
var map__51508 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__51506);
var map__51508__$1 = (((((!((map__51508 == null))))?(((((map__51508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51508):map__51508);
var c = map__51508__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51508__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51508__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__51507,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__51559 = (i__51506 + (1));
i__51506 = G__51559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51507),athens$devcards$db_boxes$table_view_$_iter__51500_$_iter__51504(cljs.core.chunk_rest(s__51505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51507),null);
}
} else {
var map__51510 = cljs.core.first(s__51505__$2);
var map__51510__$1 = (((((!((map__51510 == null))))?(((((map__51510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51510):map__51510);
var c = map__51510__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51510__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51510__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51500_$_iter__51504(cljs.core.rest(s__51505__$2)));
}
} else {
return null;
}
break;
}
});})(i__51502,row,c__4580__auto__,size__4581__auto__,b__51503,s__51501__$2,temp__5735__auto__,hs,rows))
,null,null));
});})(i__51502,row,c__4580__auto__,size__4581__auto__,b__51503,s__51501__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__51560 = (i__51502 + (1));
i__51502 = G__51560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51503),athens$devcards$db_boxes$table_view_$_iter__51500(cljs.core.chunk_rest(s__51501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51503),null);
}
} else {
var row = cljs.core.first(s__51501__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__51501__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__51500_$_iter__51512(s__51513){
return (new cljs.core.LazySeq(null,(function (){
var s__51513__$1 = s__51513;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51513__$1);
if(temp__5735__auto____$1){
var s__51513__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51513__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51513__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51515 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51514 = (0);
while(true){
if((i__51514 < size__4581__auto__)){
var map__51516 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51514);
var map__51516__$1 = (((((!((map__51516 == null))))?(((((map__51516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51516):map__51516);
var c = map__51516__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51516__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51516__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__51515,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__51561 = (i__51514 + (1));
i__51514 = G__51561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51515),athens$devcards$db_boxes$table_view_$_iter__51500_$_iter__51512(cljs.core.chunk_rest(s__51513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51515),null);
}
} else {
var map__51519 = cljs.core.first(s__51513__$2);
var map__51519__$1 = (((((!((map__51519 == null))))?(((((map__51519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51519):map__51519);
var c = map__51519__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51519__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51519__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51500_$_iter__51512(cljs.core.rest(s__51513__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__51501__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51500(cljs.core.rest(s__51501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"map","map",1371690461)))?rows:cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,rows)));
})()], null)], null)], null);
});
athens.devcards.db_boxes.coll_of_maps_QMARK_ = (function athens$devcards$db_boxes$coll_of_maps_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,x)));
});
athens.devcards.db_boxes.tuples_QMARK_ = (function athens$devcards$db_boxes$tuples_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.coll_QMARK_,x)));
});
athens.devcards.db_boxes.browser_component = (function athens$devcards$db_boxes$browser_component(result,limit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.devcards.db_boxes.coll_of_maps_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134),limit):((cljs.core.map_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461),limit):((athens.devcards.db_boxes.tuples_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639),limit):((cljs.core.coll_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163),limit):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.footer_style),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((limit < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.devcards.db_boxes.increase_limit_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
});
athens.devcards.db_boxes.error_component = (function athens$devcards$db_boxes$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.db_boxes.handle_box_change_BANG_ = (function athens$devcards$db_boxes$handle_box_change_BANG_(e){
return athens.devcards.db_boxes.update_box_BANG_(e.target.value);
});
athens.devcards.db_boxes.handle_return_key_BANG_ = (function athens$devcards$db_boxes$handle_return_key_BANG_(e){
e.preventDefault();

return athens.devcards.db_boxes.eval_box_BANG_();
});
athens.devcards.db_boxes.insert_tab = (function athens$devcards$db_boxes$insert_tab(s,pos){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),pos),"  ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,pos)].join('');
});
athens.devcards.db_boxes.handle_tab_key_BANG_ = (function athens$devcards$db_boxes$handle_tab_key_BANG_(e){
var t = e.target;
var v = t.value;
var pos = t.selectionStart;
e.preventDefault();

athens.devcards.db_boxes.update_box_BANG_(athens.devcards.db_boxes.insert_tab(v,pos));

return (t.selectionEnd = ((2) + pos));
});
athens.devcards.db_boxes.handle_box_key_down_BANG_ = (function athens$devcards$db_boxes$handle_box_key_down_BANG_(e){
var key_code = e.keyCode;
var shift_QMARK_ = e.shiftKey;
var k = (athens.devcards.db_boxes.key_code__GT_key.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.key_code__GT_key.cljs$core$IFn$_invoke$arity$1(key_code) : athens.devcards.db_boxes.key_code__GT_key.call(null,key_code));
var G__51521 = k;
var G__51521__$1 = (((G__51521 instanceof cljs.core.Keyword))?G__51521.fqn:null);
switch (G__51521__$1) {
case "return":
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.db_boxes.handle_return_key_BANG_(e);
} else {
return null;
}

break;
case "tab":
return athens.devcards.db_boxes.handle_tab_key_BANG_(e);

break;
default:
return null;

}
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(box_state,_){
var map__51522 = cljs.core.deref(box_state);
var map__51522__$1 = (((((!((map__51522 == null))))?(((((map__51522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51522):map__51522);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51522__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51522__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51522__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51522__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?athens.devcards.db_boxes.browser_component(result,limit):athens.devcards.db_boxes.error_component(result))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51524 = (function (meta51525){
this.meta51525 = meta51525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51526,meta51525__$1){
var self__ = this;
var _51526__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51524(meta51525__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51526){
var self__ = this;
var _51526__$1 = this;
return self__.meta51525;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51524.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51524.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51525","meta51525",962351208,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51524.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51524.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51524");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51524.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51524");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51524.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51524 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51524(meta51525){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51524(meta51525));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51524(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51527 = (function (meta51528){
this.meta51528 = meta51528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51529,meta51528__$1){
var self__ = this;
var _51529__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51527(meta51528__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51529){
var self__ = this;
var _51529__$1 = this;
return self__.meta51528;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51527.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51527.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51528","meta51528",-163331009,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51527.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51527.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51527");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51527.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51527");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51527.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51527 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51527(meta51528){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51527(meta51528));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51527(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
