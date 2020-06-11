goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.lib.dom.attributes');
goog.require('athens.style');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('sci.core');
athens.devcards.db_boxes.key_code__GT_key = new cljs.core.PersistentArrayMap(null, 3, [(8),new cljs.core.Keyword(null,"backspace","backspace",-696007848),(9),new cljs.core.Keyword(null,"tab","tab",-559583621),(13),new cljs.core.Keyword(null,"return","return",-1891502105)], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51614 = (function (meta51615){
this.meta51615 = meta51615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51616,meta51615__$1){
var self__ = this;
var _51616__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51614(meta51615__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51616){
var self__ = this;
var _51616__$1 = this;
return self__.meta51615;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51614.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51614.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47804__auto__,devcard_opts__47805__auto__){
var self__ = this;
var this__47804__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47805__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47823__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.base_styles], null);
if(cljs.core.fn_QMARK_(v__47823__auto__)){
return (function (data_atom__47824__auto__,owner__47825__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47823__auto__,data_atom__47824__auto__,owner__47825__auto__], null));
});
} else {
return reagent.core.as_element(v__47823__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47805__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51615","meta51615",1234807877,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51614.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51614.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51614");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51614.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51614");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51614.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51614 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51614(meta51615){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51614(meta51615));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51614(null));
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
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__51617){
var map__51618 = p__51617;
var map__51618__$1 = (((((!((map__51618 == null))))?(((((map__51618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51618):map__51618);
var box = map__51618__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51618__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__51620 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e51623){if((e51623 instanceof Error)){
var e = e51623;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e51623;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51620,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51620,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__51624_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51624_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.increase_limit_BANG_ = (function athens$devcards$db_boxes$increase_limit_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.db_boxes.box_state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10)], 0));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_51664){
var state_val_51665 = (state_51664[(1)]);
if((state_val_51665 === (7))){
var state_51664__$1 = state_51664;
var statearr_51666_51788 = state_51664__$1;
(statearr_51666_51788[(2)] = false);

(statearr_51666_51788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (1))){
var inst_51626 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51627 = [false];
var inst_51628 = cljs.core.PersistentHashMap.fromArrays(inst_51626,inst_51627);
var inst_51629 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51628], 0));
var state_51664__$1 = state_51664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51664__$1,(2),inst_51629);
} else {
if((state_val_51665 === (4))){
var state_51664__$1 = state_51664;
var statearr_51667_51789 = state_51664__$1;
(statearr_51667_51789[(2)] = false);

(statearr_51667_51789[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (13))){
var inst_51660 = alert("Failed to retrieve data from GitHub");
var state_51664__$1 = state_51664;
var statearr_51668_51790 = state_51664__$1;
(statearr_51668_51790[(2)] = inst_51660);

(statearr_51668_51790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (6))){
var state_51664__$1 = state_51664;
var statearr_51669_51791 = state_51664__$1;
(statearr_51669_51791[(2)] = true);

(statearr_51669_51791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (3))){
var inst_51631 = (state_51664[(7)]);
var inst_51636 = inst_51631.cljs$lang$protocol_mask$partition0$;
var inst_51637 = (inst_51636 & (64));
var inst_51638 = inst_51631.cljs$core$ISeq$;
var inst_51639 = (cljs.core.PROTOCOL_SENTINEL === inst_51638);
var inst_51640 = ((inst_51637) || (inst_51639));
var state_51664__$1 = state_51664;
if(cljs.core.truth_(inst_51640)){
var statearr_51670_51792 = state_51664__$1;
(statearr_51670_51792[(1)] = (6));

} else {
var statearr_51671_51793 = state_51664__$1;
(statearr_51671_51793[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (12))){
var inst_51654 = (state_51664[(8)]);
var inst_51656 = athens.db.str_to_db_tx(inst_51654);
var inst_51657 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_51656);
var inst_51658 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_51664__$1 = (function (){var statearr_51672 = state_51664;
(statearr_51672[(9)] = inst_51657);

return statearr_51672;
})();
var statearr_51673_51794 = state_51664__$1;
(statearr_51673_51794[(2)] = inst_51658);

(statearr_51673_51794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (2))){
var inst_51631 = (state_51664[(7)]);
var inst_51631__$1 = (state_51664[(2)]);
var inst_51633 = (inst_51631__$1 == null);
var inst_51634 = cljs.core.not(inst_51633);
var state_51664__$1 = (function (){var statearr_51674 = state_51664;
(statearr_51674[(7)] = inst_51631__$1);

return statearr_51674;
})();
if(inst_51634){
var statearr_51675_51795 = state_51664__$1;
(statearr_51675_51795[(1)] = (3));

} else {
var statearr_51676_51796 = state_51664__$1;
(statearr_51676_51796[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (11))){
var inst_51652 = (state_51664[(2)]);
var inst_51653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51652,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_51654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51652,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_51664__$1 = (function (){var statearr_51677 = state_51664;
(statearr_51677[(8)] = inst_51654);

return statearr_51677;
})();
if(cljs.core.truth_(inst_51653)){
var statearr_51678_51797 = state_51664__$1;
(statearr_51678_51797[(1)] = (12));

} else {
var statearr_51679_51798 = state_51664__$1;
(statearr_51679_51798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (9))){
var inst_51631 = (state_51664[(7)]);
var inst_51649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51631);
var state_51664__$1 = state_51664;
var statearr_51680_51799 = state_51664__$1;
(statearr_51680_51799[(2)] = inst_51649);

(statearr_51680_51799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (5))){
var inst_51647 = (state_51664[(2)]);
var state_51664__$1 = state_51664;
if(cljs.core.truth_(inst_51647)){
var statearr_51681_51800 = state_51664__$1;
(statearr_51681_51800[(1)] = (9));

} else {
var statearr_51682_51801 = state_51664__$1;
(statearr_51682_51801[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (14))){
var inst_51662 = (state_51664[(2)]);
var state_51664__$1 = state_51664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51664__$1,inst_51662);
} else {
if((state_val_51665 === (10))){
var inst_51631 = (state_51664[(7)]);
var state_51664__$1 = state_51664;
var statearr_51683_51802 = state_51664__$1;
(statearr_51683_51802[(2)] = inst_51631);

(statearr_51683_51802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (8))){
var inst_51644 = (state_51664[(2)]);
var state_51664__$1 = state_51664;
var statearr_51684_51803 = state_51664__$1;
(statearr_51684_51803[(2)] = inst_51644);

(statearr_51684_51803[(1)] = (5));


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
var statearr_51685 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51685[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_51685[(1)] = (1));

return statearr_51685;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_51664){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_51664);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e51686){if((e51686 instanceof Object)){
var ex__39596__auto__ = e51686;
var statearr_51687_51804 = state_51664;
(statearr_51687_51804[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51805 = state_51664;
state_51664 = G__51805;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_51664){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_51664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_51688 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_51688[(6)] = c__39615__auto__);

return statearr_51688;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51689 = (function (meta51690){
this.meta51690 = meta51690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51691,meta51690__$1){
var self__ = this;
var _51691__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51689(meta51690__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51691){
var self__ = this;
var _51691__$1 = this;
return self__.meta51690;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51689.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51689.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47804__auto__,devcard_opts__47805__auto__){
var self__ = this;
var this__47804__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47805__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47823__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47823__auto__)){
return (function (data_atom__47824__auto__,owner__47825__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47823__auto__,data_atom__47824__auto__,owner__47825__auto__], null));
});
} else {
return reagent.core.as_element(v__47823__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47805__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51690","meta51690",651321362,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51689.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51689.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51689");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51689.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51689");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51689.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51689 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51689(meta51690){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51689(meta51690));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51689(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51692 = (function (meta51693){
this.meta51693 = meta51693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51694,meta51693__$1){
var self__ = this;
var _51694__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51692(meta51693__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51694){
var self__ = this;
var _51694__$1 = this;
return self__.meta51693;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51692.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51692.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47804__auto__,devcard_opts__47805__auto__){
var self__ = this;
var this__47804__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47805__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47823__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__47823__auto__)){
return (function (data_atom__47824__auto__,owner__47825__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47823__auto__,data_atom__47824__auto__,owner__47825__auto__], null));
});
} else {
return reagent.core.as_element(v__47823__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47805__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51693","meta51693",775004843,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51692.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51692.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51692");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51692.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51692");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51692.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51692 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51692(meta51693){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51692(meta51693));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51692(null));
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
var G__51695 = mode;
var G__51695__$1 = (((G__51695 instanceof cljs.core.Keyword))?G__51695.fqn:null);
switch (G__51695__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51695__$1)].join('')));

}
});
athens.devcards.db_boxes.coll_rows = (function athens$devcards$db_boxes$coll_rows(coll){
var row = (function (p__51696){
var vec__51697 = p__51696;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51697,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51697,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.devcards.db_boxes.reverse_refs_for_attr = (function athens$devcards$db_boxes$reverse_refs_for_attr(attr,eid){
var G__51700 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__51701 = cljs.core.deref(athens.db.dsdb);
var G__51702 = attr;
var G__51703 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__51700,G__51701,G__51702,G__51703) : datascript.core.q.call(null,G__51700,G__51701,G__51702,G__51703));
});
athens.devcards.db_boxes.reverse_attr = (function athens$devcards$db_boxes$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.devcards.db_boxes.wrap_with_db_id = (function athens$devcards$db_boxes$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.devcards.db_boxes.reverse_refs = (function athens$devcards$db_boxes$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$reverse_refs_$_iter__51704(s__51705){
return (new cljs.core.LazySeq(null,(function (){
var s__51705__$1 = s__51705;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51705__$1);
if(temp__5735__auto__){
var s__51705__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51705__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51705__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51707 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51706 = (0);
while(true){
if((i__51706 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51706);
cljs.core.chunk_append(b__51707,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.wrap_with_db_id,athens.devcards.db_boxes.reverse_refs_for_attr(attr,eid))], null));

var G__51807 = (i__51706 + (1));
i__51706 = G__51807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51707),athens$devcards$db_boxes$reverse_refs_$_iter__51704(cljs.core.chunk_rest(s__51705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51707),null);
}
} else {
var attr = cljs.core.first(s__51705__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.wrap_with_db_id,athens.devcards.db_boxes.reverse_refs_for_attr(attr,eid))], null),athens$devcards$db_boxes$reverse_refs_$_iter__51704(cljs.core.rest(s__51705__$2)));
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
athens.devcards.db_boxes.reverse_rows = (function athens$devcards$db_boxes$reverse_rows(p__51708){
var map__51709 = p__51708;
var map__51709__$1 = (((((!((map__51709 == null))))?(((((map__51709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51709):map__51709);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51709__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.devcards.db_boxes.reverse_refs(id);
} else {
return null;
}
});
athens.devcards.db_boxes.map_rows = (function athens$devcards$db_boxes$map_rows(m){
var row = (function (p__51711){
var vec__51712 = p__51711;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51712,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51712,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.devcards.db_boxes.reverse_rows(m)));
});
athens.devcards.db_boxes.tuple_rows = (function athens$devcards$db_boxes$tuple_rows(tuples){
var row = (function (p__51715){
var vec__51716 = p__51715;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51716,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51716,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.devcards.db_boxes.maps_rows = (function athens$devcards$db_boxes$maps_rows(ms){
var hs = athens.devcards.db_boxes.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$devcards$db_boxes$maps_rows_$_iter__51719(s__51720){
return (new cljs.core.LazySeq(null,(function (){
var s__51720__$1 = s__51720;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51720__$1);
if(temp__5735__auto__){
var s__51720__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51720__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51720__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51722 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51721 = (0);
while(true){
if((i__51721 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51721);
cljs.core.chunk_append(b__51722,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__51721,idx,c__4580__auto__,size__4581__auto__,b__51722,s__51720__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__51719_$_iter__51723(s__51724){
return (new cljs.core.LazySeq(null,((function (i__51721,idx,c__4580__auto__,size__4581__auto__,b__51722,s__51720__$2,temp__5735__auto__,hs){
return (function (){
var s__51724__$1 = s__51724;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51724__$1);
if(temp__5735__auto____$1){
var s__51724__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51724__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__51724__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__51726 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__51725 = (0);
while(true){
if((i__51725 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__51725);
cljs.core.chunk_append(b__51726,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__51808 = (i__51725 + (1));
i__51725 = G__51808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51726),athens$devcards$db_boxes$maps_rows_$_iter__51719_$_iter__51723(cljs.core.chunk_rest(s__51724__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51726),null);
}
} else {
var h = cljs.core.first(s__51724__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__51719_$_iter__51723(cljs.core.rest(s__51724__$2)));
}
} else {
return null;
}
break;
}
});})(i__51721,idx,c__4580__auto__,size__4581__auto__,b__51722,s__51720__$2,temp__5735__auto__,hs))
,null,null));
});})(i__51721,idx,c__4580__auto__,size__4581__auto__,b__51722,s__51720__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__51809 = (i__51721 + (1));
i__51721 = G__51809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51722),athens$devcards$db_boxes$maps_rows_$_iter__51719(cljs.core.chunk_rest(s__51720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51722),null);
}
} else {
var idx = cljs.core.first(s__51720__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__51720__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__51719_$_iter__51727(s__51728){
return (new cljs.core.LazySeq(null,(function (){
var s__51728__$1 = s__51728;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51728__$1);
if(temp__5735__auto____$1){
var s__51728__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51728__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51728__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51730 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51729 = (0);
while(true){
if((i__51729 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51729);
cljs.core.chunk_append(b__51730,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__51810 = (i__51729 + (1));
i__51729 = G__51810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51730),athens$devcards$db_boxes$maps_rows_$_iter__51719_$_iter__51727(cljs.core.chunk_rest(s__51728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51730),null);
}
} else {
var h = cljs.core.first(s__51728__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__51719_$_iter__51727(cljs.core.rest(s__51728__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__51720__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$db_boxes$maps_rows_$_iter__51719(cljs.core.rest(s__51720__$2)));
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
var G__51731 = mode;
var G__51731__$1 = (((G__51731 instanceof cljs.core.Keyword))?G__51731.fqn:null);
switch (G__51731__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51731__$1)].join('')));

}
});
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__51733 = arguments.length;
switch (G__51733) {
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

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__51734){
var map__51735 = p__51734;
var map__51735__$1 = (((((!((map__51735 == null))))?(((((map__51735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51735):map__51735);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__51737(s__51738){
return (new cljs.core.LazySeq(null,(function (){
var s__51738__$1 = s__51738;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51738__$1);
if(temp__5735__auto__){
var s__51738__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51738__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51738__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51740 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51739 = (0);
while(true){
if((i__51739 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51739);
cljs.core.chunk_append(b__51740,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51741 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51741) : athens.devcards.db_boxes.cell.call(null,G__51741));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__51813 = (i__51739 + (1));
i__51739 = G__51813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51740),athens$devcards$db_boxes$cell_$_iter__51737(cljs.core.chunk_rest(s__51738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51740),null);
}
} else {
var v = cljs.core.first(s__51738__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51742 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51742) : athens.devcards.db_boxes.cell.call(null,G__51742));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__51737(cljs.core.rest(s__51738__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__51743(s__51744){
return (new cljs.core.LazySeq(null,(function (){
var s__51744__$1 = s__51744;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51744__$1);
if(temp__5735__auto__){
var s__51744__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51744__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51744__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51746 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51745 = (0);
while(true){
if((i__51745 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51745);
cljs.core.chunk_append(b__51746,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51747 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51747) : athens.devcards.db_boxes.cell.call(null,G__51747));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__51814 = (i__51745 + (1));
i__51745 = G__51814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51746),athens$devcards$db_boxes$cell_$_iter__51743(cljs.core.chunk_rest(s__51744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51746),null);
}
} else {
var v = cljs.core.first(s__51744__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51748 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51748) : athens.devcards.db_boxes.cell.call(null,G__51748));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__51743(cljs.core.rest(s__51744__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__51749(s__51750){
return (new cljs.core.LazySeq(null,(function (){
var s__51750__$1 = s__51750;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51750__$1);
if(temp__5735__auto__){
var s__51750__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51750__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51750__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51752 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51751 = (0);
while(true){
if((i__51751 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51751);
cljs.core.chunk_append(b__51752,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51753 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51753) : athens.devcards.db_boxes.cell.call(null,G__51753));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__51815 = (i__51751 + (1));
i__51751 = G__51815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51752),athens$devcards$db_boxes$cell_$_iter__51749(cljs.core.chunk_rest(s__51750__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51752),null);
}
} else {
var v = cljs.core.first(s__51750__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__51754 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__51754) : athens.devcards.db_boxes.cell.call(null,G__51754));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__51749(cljs.core.rest(s__51750__$2)));
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
athens.devcards.db_boxes.table_view = (function athens$devcards$db_boxes$table_view(data,mode,limit){
var hs = athens.devcards.db_boxes.headings(data,mode);
var rows = athens.devcards.db_boxes.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__51755(s__51756){
return (new cljs.core.LazySeq(null,(function (){
var s__51756__$1 = s__51756;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51756__$1);
if(temp__5735__auto__){
var s__51756__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51756__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51756__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51758 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51757 = (0);
while(true){
if((i__51757 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51757);
cljs.core.chunk_append(b__51758,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__51816 = (i__51757 + (1));
i__51757 = G__51816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51758),athens$devcards$db_boxes$table_view_$_iter__51755(cljs.core.chunk_rest(s__51756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51758),null);
}
} else {
var h = cljs.core.first(s__51756__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51755(cljs.core.rest(s__51756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__51759(s__51760){
return (new cljs.core.LazySeq(null,(function (){
var s__51760__$1 = s__51760;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51760__$1);
if(temp__5735__auto__){
var s__51760__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51760__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51760__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51762 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51761 = (0);
while(true){
if((i__51761 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51761);
cljs.core.chunk_append(b__51762,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__51761,row,c__4580__auto__,size__4581__auto__,b__51762,s__51760__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__51759_$_iter__51763(s__51764){
return (new cljs.core.LazySeq(null,((function (i__51761,row,c__4580__auto__,size__4581__auto__,b__51762,s__51760__$2,temp__5735__auto__,hs,rows){
return (function (){
var s__51764__$1 = s__51764;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51764__$1);
if(temp__5735__auto____$1){
var s__51764__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51764__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__51764__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__51766 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__51765 = (0);
while(true){
if((i__51765 < size__4581__auto____$1)){
var map__51767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__51765);
var map__51767__$1 = (((((!((map__51767 == null))))?(((((map__51767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51767):map__51767);
var c = map__51767__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51767__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51767__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__51766,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__51817 = (i__51765 + (1));
i__51765 = G__51817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51766),athens$devcards$db_boxes$table_view_$_iter__51759_$_iter__51763(cljs.core.chunk_rest(s__51764__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51766),null);
}
} else {
var map__51769 = cljs.core.first(s__51764__$2);
var map__51769__$1 = (((((!((map__51769 == null))))?(((((map__51769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51769):map__51769);
var c = map__51769__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51769__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51769__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51759_$_iter__51763(cljs.core.rest(s__51764__$2)));
}
} else {
return null;
}
break;
}
});})(i__51761,row,c__4580__auto__,size__4581__auto__,b__51762,s__51760__$2,temp__5735__auto__,hs,rows))
,null,null));
});})(i__51761,row,c__4580__auto__,size__4581__auto__,b__51762,s__51760__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__51818 = (i__51761 + (1));
i__51761 = G__51818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51762),athens$devcards$db_boxes$table_view_$_iter__51759(cljs.core.chunk_rest(s__51760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51762),null);
}
} else {
var row = cljs.core.first(s__51760__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__51760__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__51759_$_iter__51771(s__51772){
return (new cljs.core.LazySeq(null,(function (){
var s__51772__$1 = s__51772;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51772__$1);
if(temp__5735__auto____$1){
var s__51772__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51772__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51772__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51774 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51773 = (0);
while(true){
if((i__51773 < size__4581__auto__)){
var map__51775 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51773);
var map__51775__$1 = (((((!((map__51775 == null))))?(((((map__51775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51775):map__51775);
var c = map__51775__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51775__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51775__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__51774,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__51819 = (i__51773 + (1));
i__51773 = G__51819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51774),athens$devcards$db_boxes$table_view_$_iter__51759_$_iter__51771(cljs.core.chunk_rest(s__51772__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51774),null);
}
} else {
var map__51777 = cljs.core.first(s__51772__$2);
var map__51777__$1 = (((((!((map__51777 == null))))?(((((map__51777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51777):map__51777);
var c = map__51777__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51777__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51777__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51759_$_iter__51771(cljs.core.rest(s__51772__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__51760__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__51759(cljs.core.rest(s__51760__$2)));
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
))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((limit < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.devcards.db_boxes.increase_limit_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
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
var G__51779 = k;
var G__51779__$1 = (((G__51779 instanceof cljs.core.Keyword))?G__51779.fqn:null);
switch (G__51779__$1) {
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
var map__51780 = cljs.core.deref(box_state);
var map__51780__$1 = (((((!((map__51780 == null))))?(((((map__51780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51780):map__51780);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51780__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51780__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51780__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51780__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?athens.devcards.db_boxes.browser_component(result,limit):athens.devcards.db_boxes.error_component(result))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51782 = (function (meta51783){
this.meta51783 = meta51783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51784,meta51783__$1){
var self__ = this;
var _51784__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51782(meta51783__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51784){
var self__ = this;
var _51784__$1 = this;
return self__.meta51783;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51782.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51782.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47804__auto__,devcard_opts__47805__auto__){
var self__ = this;
var this__47804__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47805__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47823__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__47823__auto__)){
return (function (data_atom__47824__auto__,owner__47825__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47823__auto__,data_atom__47824__auto__,owner__47825__auto__], null));
});
} else {
return reagent.core.as_element(v__47823__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47805__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51783","meta51783",-781743786,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51782.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51782.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51782");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51782.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51782");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51782.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51782 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51782(meta51783){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51782(meta51783));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51782(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes51785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes51785 = (function (meta51786){
this.meta51786 = meta51786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes51785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51787,meta51786__$1){
var self__ = this;
var _51787__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51785(meta51786__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51787){
var self__ = this;
var _51787__$1 = this;
return self__.meta51786;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51785.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51785.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47804__auto__,devcard_opts__47805__auto__){
var self__ = this;
var this__47804__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47805__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47823__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__47823__auto__)){
return (function (data_atom__47824__auto__,owner__47825__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47823__auto__,data_atom__47824__auto__,owner__47825__auto__], null));
});
} else {
return reagent.core.as_element(v__47823__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47805__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51786","meta51786",-1748181559,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51785.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51785.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes51785");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes51785.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes51785");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes51785.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes51785 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes51785(meta51786){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51785(meta51786));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes51785(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
