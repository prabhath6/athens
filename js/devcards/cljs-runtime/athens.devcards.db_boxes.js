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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes50954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes50954 = (function (meta50955){
this.meta50955 = meta50955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes50954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50956,meta50955__$1){
var self__ = this;
var _50956__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes50954(meta50955__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50956){
var self__ = this;
var _50956__$1 = this;
return self__.meta50955;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50954.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50954.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50955","meta50955",-1845938900,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50954.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50954.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes50954");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50954.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes50954");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes50954.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes50954 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes50954(meta50955){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes50954(meta50955));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes50954(null));
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
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__50957){
var map__50958 = p__50957;
var map__50958__$1 = (((((!((map__50958 == null))))?(((((map__50958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50958):map__50958);
var box = map__50958__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50958__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__50960 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e50963){if((e50963 instanceof Error)){
var e = e50963;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e50963;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50960,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50960,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__50964_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50964_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.increase_limit_BANG_ = (function athens$devcards$db_boxes$increase_limit_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.db_boxes.box_state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10)], 0));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_51004){
var state_val_51005 = (state_51004[(1)]);
if((state_val_51005 === (7))){
var state_51004__$1 = state_51004;
var statearr_51006_51128 = state_51004__$1;
(statearr_51006_51128[(2)] = false);

(statearr_51006_51128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51005 === (1))){
var inst_50966 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_50967 = [false];
var inst_50968 = cljs.core.PersistentHashMap.fromArrays(inst_50966,inst_50967);
var inst_50969 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50968], 0));
var state_51004__$1 = state_51004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51004__$1,(2),inst_50969);
} else {
if((state_val_51005 === (4))){
var state_51004__$1 = state_51004;
var statearr_51007_51129 = state_51004__$1;
(statearr_51007_51129[(2)] = false);

(statearr_51007_51129[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51005 === (13))){
var inst_51000 = alert("Failed to retrieve data from GitHub");
var state_51004__$1 = state_51004;
var statearr_51008_51130 = state_51004__$1;
(statearr_51008_51130[(2)] = inst_51000);

(statearr_51008_51130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51005 === (6))){
var state_51004__$1 = state_51004;
var statearr_51009_51131 = state_51004__$1;
(statearr_51009_51131[(2)] = true);

(statearr_51009_51131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51005 === (3))){
var inst_50971 = (state_51004[(7)]);
var inst_50976 = inst_50971.cljs$lang$protocol_mask$partition0$;
var inst_50977 = (inst_50976 & (64));
var inst_50978 = inst_50971.cljs$core$ISeq$;
var inst_50979 = (cljs.core.PROTOCOL_SENTINEL === inst_50978);
var inst_50980 = ((inst_50977) || (inst_50979));
var state_51004__$1 = state_51004;
if(cljs.core.truth_(inst_50980)){
var statearr_51010_51132 = state_51004__$1;
(statearr_51010_51132[(1)] = (6));

} else {
var statearr_51011_51133 = state_51004__$1;
(statearr_51011_51133[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51005 === (12))){
var inst_50994 = (state_51004[(8)]);
var inst_50996 = athens.db.str_to_db_tx(inst_50994);
var inst_50997 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_50996);
var inst_50998 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_51004__$1 = (function (){var statearr_51012 = state_51004;
(statearr_51012[(9)] = inst_50997);

return statearr_51012;
})();
var statearr_51013_51134 = state_51004__$1;
(statearr_51013_51134[(2)] = inst_50998);

(statearr_51013_51134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51005 === (2))){
var inst_50971 = (state_51004[(7)]);
var inst_50971__$1 = (state_51004[(2)]);
var inst_50973 = (inst_50971__$1 == null);
var inst_50974 = cljs.core.not(inst_50973);
var state_51004__$1 = (function (){var statearr_51014 = state_51004;
(statearr_51014[(7)] = inst_50971__$1);

return statearr_51014;
})();
if(inst_50974){
var statearr_51015_51135 = state_51004__$1;
(statearr_51015_51135[(1)] = (3));

} else {
var statearr_51016_51136 = state_51004__$1;
(statearr_51016_51136[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51005 === (11))){
var inst_50992 = (state_51004[(2)]);
var inst_50993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50992,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_50994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50992,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_51004__$1 = (function (){var statearr_51017 = state_51004;
(statearr_51017[(8)] = inst_50994);

return statearr_51017;
})();
if(cljs.core.truth_(inst_50993)){
var statearr_51018_51137 = state_51004__$1;
(statearr_51018_51137[(1)] = (12));

} else {
var statearr_51019_51138 = state_51004__$1;
(statearr_51019_51138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51005 === (9))){
var inst_50971 = (state_51004[(7)]);
var inst_50989 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50971);
var state_51004__$1 = state_51004;
var statearr_51020_51139 = state_51004__$1;
(statearr_51020_51139[(2)] = inst_50989);

(statearr_51020_51139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51005 === (5))){
var inst_50987 = (state_51004[(2)]);
var state_51004__$1 = state_51004;
if(cljs.core.truth_(inst_50987)){
var statearr_51021_51140 = state_51004__$1;
(statearr_51021_51140[(1)] = (9));

} else {
var statearr_51022_51141 = state_51004__$1;
(statearr_51022_51141[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51005 === (14))){
var inst_51002 = (state_51004[(2)]);
var state_51004__$1 = state_51004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51004__$1,inst_51002);
} else {
if((state_val_51005 === (10))){
var inst_50971 = (state_51004[(7)]);
var state_51004__$1 = state_51004;
var statearr_51023_51142 = state_51004__$1;
(statearr_51023_51142[(2)] = inst_50971);

(statearr_51023_51142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51005 === (8))){
var inst_50984 = (state_51004[(2)]);
var state_51004__$1 = state_51004;
var statearr_51024_51143 = state_51004__$1;
(statearr_51024_51143[(2)] = inst_50984);

(statearr_51024_51143[(1)] = (5));


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
var statearr_51025 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51025[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_51025[(1)] = (1));

return statearr_51025;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_51004){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_51004);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e51026){if((e51026 instanceof Object)){
var ex__39596__auto__ = e51026;
var statearr_51027_51144 = state_51004;
(statearr_51027_51144[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51026;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51145 = state_51004;
state_51004 = G__51145;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_51004){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_51004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_51028 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_51028[(6)] = c__39615__auto__);

return statearr_51028;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51029 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51029 = (function (meta51030){
this.meta51030 = meta51030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51031,meta51030__$1){
var self__ = this;
var _51031__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51029(meta51030__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51031){
var self__ = this;
var _51031__$1 = this;
return self__.meta51030;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51029.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51029.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51030","meta51030",504117226,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51029.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51029.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51029");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51029.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51029");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51029.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51029 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51029(meta51030){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51029(meta51030));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51029(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51032 = (function (meta51033){
this.meta51033 = meta51033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51034,meta51033__$1){
var self__ = this;
var _51034__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51032(meta51033__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51034){
var self__ = this;
var _51034__$1 = this;
return self__.meta51033;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51032.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51032.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51033","meta51033",1418572540,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51032.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51032.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51032");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51032.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51032");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51032.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51032 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51032(meta51033){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51032(meta51033));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51032(null));
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
var G__51035 = mode;
var G__51035__$1 = (((G__51035 instanceof cljs.core.Keyword))?G__51035.fqn:null);
switch (G__51035__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51035__$1)].join('')));

}
});
athens.devcards.db_boxes.coll_rows = (function athens$devcards$db_boxes$coll_rows(coll){
var row = (function (p__51036){
var vec__51037 = p__51036;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51037,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51037,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.devcards.db_boxes.reverse_refs_for_attr = (function athens$devcards$db_boxes$reverse_refs_for_attr(attr,eid){
var G__51040 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__51041 = cljs.core.deref(athens.db.dsdb);
var G__51042 = attr;
var G__51043 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__51040,G__51041,G__51042,G__51043) : datascript.core.q.call(null,G__51040,G__51041,G__51042,G__51043));
});
athens.devcards.db_boxes.reverse_attr = (function athens$devcards$db_boxes$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.devcards.db_boxes.wrap_with_db_id = (function athens$devcards$db_boxes$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.devcards.db_boxes.reverse_refs = (function athens$devcards$db_boxes$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$reverse_refs_$_iter__51044(s__51045){
return (new cljs.core.LazySeq(null,(function (){
var s__51045__$1 = s__51045;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51045__$1);
if(temp__5735__auto__){
var s__51045__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51045__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51045__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51047 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51046 = (0);
while(true){
if((i__51046 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51046);
cljs.core.chunk_append(b__51047,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.wrap_with_db_id,athens.devcards.db_boxes.reverse_refs_for_attr(attr,eid))], null));

var G__51147 = (i__51046 + (1));
i__51046 = G__51147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51047),athens$devcards$db_boxes$reverse_refs_$_iter__51044(cljs.core.chunk_rest(s__51045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51047),null);
}
} else {
var attr = cljs.core.first(s__51045__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.wrap_with_db_id,athens.devcards.db_boxes.reverse_refs_for_attr(attr,eid))], null),athens$devcards$db_boxes$reverse_refs_$_iter__51044(cljs.core.rest(s__51045__$2)));
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
athens.devcards.db_boxes.reverse_rows = (function athens$devcards$db_boxes$reverse_rows(p__51048){
var map__51049 = p__51048;
var map__51049__$1 = (((((!((map__51049 == null))))?(((((map__51049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51049):map__51049);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51049__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.devcards.db_boxes.reverse_refs(id);
} else {
return null;
}
});
athens.devcards.db_boxes.map_rows = (function athens$devcards$db_boxes$map_rows(m){
var row = (function (p__51051){
var vec__51052 = p__51051;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51052,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51052,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.devcards.db_boxes.reverse_rows(m)));
});
athens.devcards.db_boxes.tuple_rows = (function athens$devcards$db_boxes$tuple_rows(tuples){
var row = (function (p__51055){
var vec__51056 = p__51055;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51056,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51056,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.devcards.db_boxes.maps_rows = (function athens$devcards$db_boxes$maps_rows(ms){
var hs = athens.devcards.db_boxes.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$devcards$db_boxes$maps_rows_$_iter__51059(s__51060){
return (new cljs.core.LazySeq(null,(function (){
var s__51060__$1 = s__51060;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51060__$1);
if(temp__5735__auto__){
var s__51060__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51060__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51060__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51062 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51061 = (0);
while(true){
if((i__51061 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51061);
cljs.core.chunk_append(b__51062,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__51061,idx,c__4580__auto__,size__4581__auto__,b__51062,s__51060__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__51059_$_iter__51063(s__51064){
return (new cljs.core.LazySeq(null,((function (i__51061,idx,c__4580__auto__,size__4581__auto__,b__51062,s__51060__$2,temp__5735__auto__,hs){
return (function (){
var s__51064__$1 = s__51064;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51064__$1);
if(temp__5735__auto____$1){
var s__51064__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51064__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__51064__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__51066 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__51065 = (0);
while(true){
if((i__51065 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__51065);
cljs.core.chunk_append(b__51066,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__51148 = (i__51065 + (1));
i__51065 = G__51148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51066),athens$devcards$db_boxes$maps_rows_$_iter__51059_$_iter__51063(cljs.core.chunk_rest(s__51064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51066),null);
}
} else {
var h = cljs.core.first(s__51064__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__51059_$_iter__51063(cljs.core.rest(s__51064__$2)));
}
} else {
return null;
}
break;
}
});})(i__51061,idx,c__4580__auto__,size__4581__auto__,b__51062,s__51060__$2,temp__5735__auto__,hs))
,null,null));
});})(i__51061,idx,c__4580__auto__,size__4581__auto__,b__51062,s__51060__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__51149 = (i__51061 + (1));
i__51061 = G__51149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51062),athens$devcards$db_boxes$maps_rows_$_iter__51059(cljs.core.chunk_rest(s__51060__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51062),null);
}
} else {
var idx = cljs.core.first(s__51060__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__51060__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__51059_$_iter__51067(s__51068){
return (new cljs.core.LazySeq(null,(function (){
var s__51068__$1 = s__51068;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51068__$1);
if(temp__5735__auto____$1){
var s__51068__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51068__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51068__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51070 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51069 = (0);
while(true){
if((i__51069 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51069);
cljs.core.chunk_append(b__51070,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__51150 = (i__51069 + (1));
i__51069 = G__51150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51070),athens$devcards$db_boxes$maps_rows_$_iter__51059_$_iter__51067(cljs.core.chunk_rest(s__51068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51070),null);
}
} else {
var h = cljs.core.first(s__51068__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__51059_$_iter__51067(cljs.core.rest(s__51068__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__51060__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$db_boxes$maps_rows_$_iter__51059(cljs.core.rest(s__51060__$2)));
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
var G__51071 = mode;
var G__51071__$1 = (((G__51071 instanceof cljs.core.Keyword))?G__51071.fqn:null);
switch (G__51071__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51071__$1)].join('')));

}
});
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__51073 = arguments.length;
switch (G__51073) {
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

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__51074){
var map__51075 = p__51074;
var map__51075__$1 = (((((!((map__51075 == null))))?(((((map__51075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51075):map__51075);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51075__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51075__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51075__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__51077(s__51078){
return (new cljs.core.LazySeq(null,(function (){
var s__51078__$1 = s__51078;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51078__$1);
if(temp__5735__auto__){
var s__51078__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51078__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51078__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51080 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51079 = (0);
while(true){
if((i__51079 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51079);
cljs.core.chunk_append(b__51080,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51081 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51081) : athens.devcards.db_boxes.cell.call(null,G__51081));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__51153 = (i__51079 + (1));
i__51079 = G__51153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51080),athens$devcards$db_boxes$cell_$_iter__51077(cljs.core.chunk_rest(s__51078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51080),null);
}
} else {
var v = cljs.core.first(s__51078__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51082 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51082) : athens.devcards.db_boxes.cell.call(null,G__51082));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__51077(cljs.core.rest(s__51078__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__51083(s__51084){
return (new cljs.core.LazySeq(null,(function (){
var s__51084__$1 = s__51084;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51084__$1);
if(temp__5735__auto__){
var s__51084__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51084__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51084__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51086 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51085 = (0);
while(true){
if((i__51085 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51085);
cljs.core.chunk_append(b__51086,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51087 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51087) : athens.devcards.db_boxes.cell.call(null,G__51087));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__51154 = (i__51085 + (1));
i__51085 = G__51154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51086),athens$devcards$db_boxes$cell_$_iter__51083(cljs.core.chunk_rest(s__51084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51086),null);
}
} else {
var v = cljs.core.first(s__51084__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51088 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51088) : athens.devcards.db_boxes.cell.call(null,G__51088));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__51083(cljs.core.rest(s__51084__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__51089(s__51090){
return (new cljs.core.LazySeq(null,(function (){
var s__51090__$1 = s__51090;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51090__$1);
if(temp__5735__auto__){
var s__51090__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51090__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51090__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51092 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51091 = (0);
while(true){
if((i__51091 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51091);
cljs.core.chunk_append(b__51092,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51093 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51093) : athens.devcards.db_boxes.cell.call(null,G__51093));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__51155 = (i__51091 + (1));
i__51091 = G__51155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51092),athens$devcards$db_boxes$cell_$_iter__51089(cljs.core.chunk_rest(s__51090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51092),null);
}
} else {
var v = cljs.core.first(s__51090__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51094 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51094) : athens.devcards.db_boxes.cell.call(null,G__51094));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__51089(cljs.core.rest(s__51090__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__51095(s__51096){
return (new cljs.core.LazySeq(null,(function (){
var s__51096__$1 = s__51096;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51096__$1);
if(temp__5735__auto__){
var s__51096__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51096__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51096__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51098 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51097 = (0);
while(true){
if((i__51097 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51097);
cljs.core.chunk_append(b__51098,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__51156 = (i__51097 + (1));
i__51097 = G__51156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51098),athens$devcards$db_boxes$table_view_$_iter__51095(cljs.core.chunk_rest(s__51096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51098),null);
}
} else {
var h = cljs.core.first(s__51096__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51095(cljs.core.rest(s__51096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__51099(s__51100){
return (new cljs.core.LazySeq(null,(function (){
var s__51100__$1 = s__51100;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51100__$1);
if(temp__5735__auto__){
var s__51100__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51100__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51100__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51102 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51101 = (0);
while(true){
if((i__51101 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51101);
cljs.core.chunk_append(b__51102,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__51101,row,c__4580__auto__,size__4581__auto__,b__51102,s__51100__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__51099_$_iter__51103(s__51104){
return (new cljs.core.LazySeq(null,((function (i__51101,row,c__4580__auto__,size__4581__auto__,b__51102,s__51100__$2,temp__5735__auto__,hs,rows){
return (function (){
var s__51104__$1 = s__51104;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51104__$1);
if(temp__5735__auto____$1){
var s__51104__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51104__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__51104__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__51106 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__51105 = (0);
while(true){
if((i__51105 < size__4581__auto____$1)){
var map__51107 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__51105);
var map__51107__$1 = (((((!((map__51107 == null))))?(((((map__51107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51107):map__51107);
var c = map__51107__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51107__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51107__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__51106,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__51157 = (i__51105 + (1));
i__51105 = G__51157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51106),athens$devcards$db_boxes$table_view_$_iter__51099_$_iter__51103(cljs.core.chunk_rest(s__51104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51106),null);
}
} else {
var map__51109 = cljs.core.first(s__51104__$2);
var map__51109__$1 = (((((!((map__51109 == null))))?(((((map__51109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51109):map__51109);
var c = map__51109__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51109__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51109__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51099_$_iter__51103(cljs.core.rest(s__51104__$2)));
}
} else {
return null;
}
break;
}
});})(i__51101,row,c__4580__auto__,size__4581__auto__,b__51102,s__51100__$2,temp__5735__auto__,hs,rows))
,null,null));
});})(i__51101,row,c__4580__auto__,size__4581__auto__,b__51102,s__51100__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__51158 = (i__51101 + (1));
i__51101 = G__51158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51102),athens$devcards$db_boxes$table_view_$_iter__51099(cljs.core.chunk_rest(s__51100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51102),null);
}
} else {
var row = cljs.core.first(s__51100__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__51100__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__51099_$_iter__51111(s__51112){
return (new cljs.core.LazySeq(null,(function (){
var s__51112__$1 = s__51112;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51112__$1);
if(temp__5735__auto____$1){
var s__51112__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51112__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51112__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51114 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51113 = (0);
while(true){
if((i__51113 < size__4581__auto__)){
var map__51115 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51113);
var map__51115__$1 = (((((!((map__51115 == null))))?(((((map__51115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51115):map__51115);
var c = map__51115__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51115__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51115__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__51114,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__51159 = (i__51113 + (1));
i__51113 = G__51159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51114),athens$devcards$db_boxes$table_view_$_iter__51099_$_iter__51111(cljs.core.chunk_rest(s__51112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51114),null);
}
} else {
var map__51117 = cljs.core.first(s__51112__$2);
var map__51117__$1 = (((((!((map__51117 == null))))?(((((map__51117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51117):map__51117);
var c = map__51117__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51117__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51117__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51099_$_iter__51111(cljs.core.rest(s__51112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__51100__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51099(cljs.core.rest(s__51100__$2)));
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
var G__51119 = k;
var G__51119__$1 = (((G__51119 instanceof cljs.core.Keyword))?G__51119.fqn:null);
switch (G__51119__$1) {
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
var map__51120 = cljs.core.deref(box_state);
var map__51120__$1 = (((((!((map__51120 == null))))?(((((map__51120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51120):map__51120);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51120__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51120__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51120__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51120__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?athens.devcards.db_boxes.browser_component(result,limit):athens.devcards.db_boxes.error_component(result))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51122 = (function (meta51123){
this.meta51123 = meta51123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51124,meta51123__$1){
var self__ = this;
var _51124__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51122(meta51123__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51124){
var self__ = this;
var _51124__$1 = this;
return self__.meta51123;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51122.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51122.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51123","meta51123",988186588,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51122.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51122.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51122");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51122.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51122");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51122.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51122 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51122(meta51123){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51122(meta51123));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51122(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51125 = (function (meta51126){
this.meta51126 = meta51126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51127,meta51126__$1){
var self__ = this;
var _51127__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51125(meta51126__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51127){
var self__ = this;
var _51127__$1 = this;
return self__.meta51126;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51125.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51125.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51126","meta51126",1056331000,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51125.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51125.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51125");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51125.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51125");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51125.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51125 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51125(meta51126){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51125(meta51126));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51125(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
