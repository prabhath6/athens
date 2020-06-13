goog.provide('athens.devcards.all_pages');
goog.require('cljs.core');
goog.require('athens.devcards.buttons');
goog.require('athens.devcards.db');
goog.require('athens.lib.dom.attributes');
goog.require('athens.router');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('garden.color');
goog.require('garden.core');
goog.require('garden.selectors');
goog.require('posh.reagent');
goog.require('stylefy.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages50506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages50506 = (function (meta50507){
this.meta50507 = meta50507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages50506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50508,meta50507__$1){
var self__ = this;
var _50508__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages50506(meta50507__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50508){
var self__ = this;
var _50508__$1 = this;
return self__.meta50507;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50506.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages50506.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
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

(athens.devcards.all_pages.t_athens$devcards$all_pages50506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50507","meta50507",-835099286,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50506.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages50506.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages50506");

(athens.devcards.all_pages.t_athens$devcards$all_pages50506.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages50506");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages50506.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages50506 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages50506(meta50507){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages50506(meta50507));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages50506(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages50509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages50509 = (function (meta50510){
this.meta50510 = meta50510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages50509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50511,meta50510__$1){
var self__ = this;
var _50511__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages50509(meta50510__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50511){
var self__ = this;
var _50511__$1 = this;
return self__.meta50510;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50509.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages50509.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50510","meta50510",-422668795,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50509.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages50509.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages50509");

(athens.devcards.all_pages.t_athens$devcards$all_pages50509.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages50509");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages50509.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages50509 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages50509(meta50510){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages50509(meta50510));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages50509(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Instantiate-Dsdb","Instantiate-Dsdb",-544389239)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Instantiate-Dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.conn !== 'undefined')){
} else {
athens.devcards.all_pages.conn = athens.devcards.db.new_conn();
}
athens.devcards.db.posh_conn_BANG_(athens.devcards.all_pages.conn);
athens.devcards.all_pages.handler = (function athens$devcards$all_pages$handler(){
var n = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.devcards.all_pages.conn));
var G__50512 = athens.devcards.all_pages.conn;
var G__50513 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Title ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),"a block string",new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join('')], null)], null),new cljs.core.Keyword("create","time","create/time",-1563077754),(new Date()).getTime(),new cljs.core.Keyword("edit","time","edit/time",1384867476),(new Date()).getTime()], null)], null);
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__50512,G__50513) : posh.reagent.transact_BANG_.call(null,G__50512,G__50513));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Page title increments by more than one each time because we create multiple entities (the child blocks).",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages50514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages50514 = (function (meta50515){
this.meta50515 = meta50515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages50514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50516,meta50515__$1){
var self__ = this;
var _50516__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages50514(meta50515__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50516){
var self__ = this;
var _50516__$1 = this;
return self__.meta50515;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50514.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages50514.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),athens.devcards.all_pages.handler,new cljs.core.Keyword(null,"label","label",1718410804),"Create Page"], null)], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50515","meta50515",353640156,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50514.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages50514.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages50514");

(athens.devcards.all_pages.t_athens$devcards$all_pages50514.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages50514");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages50514.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages50514 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages50514(meta50515){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages50514(meta50515));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages50514(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages50517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages50517 = (function (meta50518){
this.meta50518 = meta50518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages50517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50519,meta50518__$1){
var self__ = this;
var _50519__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages50517(meta50518__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50519){
var self__ = this;
var _50519__$1 = this;
return self__.meta50518;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50517.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages50517.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.devcards.all_pages.conn], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50518","meta50518",955308662,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50517.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages50517.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages50517");

(athens.devcards.all_pages.t_athens$devcards$all_pages50517.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages50517");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages50517.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages50517 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages50517(meta50518){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages50517(meta50518));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages50517(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.all_pages.date_string = (function athens$devcards$all_pages$date_string(x){
if((x < (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(unknown date)"], null);
} else {
return (new Date(x)).toLocaleString();
}
});
athens.devcards.all_pages.table_cell_background_color_hover = garden.color.opacify(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),cljs.core.first(athens.style.OPACITIES));
athens.devcards.all_pages.tables = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.Keyword(null,"th-title","th-title",461313507),new cljs.core.Keyword(null,"th-date","th-date",-1579394172),new cljs.core.Keyword(null,"td-date","td-date",-1089366042),new cljs.core.Keyword(null,"td-body","td-body",65962215),new cljs.core.Keyword(null,"th-body","th-body",-1334893625),new cljs.core.Keyword(null,"td-title","td-title",-2048420439),new cljs.core.Keyword(null,"tr-item","tr-item",448171118),new cljs.core.Keyword(null,"body-preview","body-preview",-543779304)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.75",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"9em"], null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS),new cljs.core.Keyword(null,"width","width",-384071477),"15vw",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"10em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"21px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"27px"], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"wrap",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"display","display",242065432),"-webkit-box",new cljs.core.Keyword(null,"-webkit-line-clamp","-webkit-line-clamp",438845631),"3",new cljs.core.Keyword(null,"-webkit-box-orient","-webkit-box-orient",-2043252050),"vertical"], null)]),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.devcards.all_pages.table_cell_background_color_hover,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50520 = (garden.selectors.first_child.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.first_child.cljs$core$IFn$_invoke$arity$0() : garden.selectors.first_child.call(null));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__50520) : garden.selectors._AMPERSAND_.call(null,G__50520));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px 0 0 8px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-16px 0 hsla(30, 11.11%, 93%, 0.1)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50521 = (garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.last_child.cljs$core$IFn$_invoke$arity$0() : garden.selectors.last_child.call(null));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__50521) : garden.selectors._AMPERSAND_.call(null,G__50521));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0 8px 8px 0",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"16px 0 hsla(30, 11.11%, 93%, 0.1)"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5"], null)], null)], null)], null)], null);
athens.devcards.all_pages.table = (function athens$devcards$all_pages$table(conn){
var page_eids = (function (){var G__50523 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null)], null);
var G__50524 = conn;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$2(G__50523,G__50524) : posh.reagent.q.call(null,G__50523,G__50524));
})();
var pages = (function (){var G__50525 = conn;
var G__50526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447)], null),new cljs.core.Keyword(null,"limit","limit",-1355822363),(5)], null)], null);
var G__50527 = cljs.core.deref(page_eids);
return (posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3(G__50525,G__50526,G__50527) : posh.reagent.pull_many.call(null,G__50525,G__50526,G__50527));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.all_pages.tables),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"thead","thead",-291875296)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"th-title","th-title",461313507)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Title"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"th-body","th-body",-1334893625)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Body"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"th-date","th-date",-1579394172)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Modified"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"th-date","th-date",-1579394172)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Created"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$all_pages$table_$_iter__50531(s__50532){
return (new cljs.core.LazySeq(null,(function (){
var s__50532__$1 = s__50532;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50532__$1);
if(temp__5735__auto__){
var s__50532__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50532__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50532__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50534 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50533 = (0);
while(true){
if((i__50533 < size__4581__auto__)){
var map__50535 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50533);
var map__50535__$1 = (((((!((map__50535 == null))))?(((((map__50535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50535):map__50535);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50535__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50535__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50535__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50535__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50535__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
cljs.core.chunk_append(b__50534,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"tr-item","tr-item",448171118)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"td-title","td-title",-2048420439)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50533,map__50535,map__50535__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__50534,s__50532__$2,temp__5735__auto__,page_eids,pages){
return (function (){
return athens.router.navigate_page(uid);
});})(i__50533,map__50535,map__50535__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__50534,s__50532__$2,temp__5735__auto__,page_eids,pages))
], null)], 0)),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"td-body","td-body",65962215)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"body-preview","body-preview",-543779304)),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__50533,map__50535,map__50535__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__50534,s__50532__$2,temp__5735__auto__,page_eids,pages){
return (function (p1__50522_SHARP_){
return ["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(p1__50522_SHARP_))].join('');
});})(i__50533,map__50535,map__50535__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__50534,s__50532__$2,temp__5735__auto__,page_eids,pages))
,children))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"td-date","td-date",-1089366042)),athens.devcards.all_pages.date_string(modified)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"td-date","td-date",-1089366042)),athens.devcards.all_pages.date_string(created)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__50563 = (i__50533 + (1));
i__50533 = G__50563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50534),athens$devcards$all_pages$table_$_iter__50531(cljs.core.chunk_rest(s__50532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50534),null);
}
} else {
var map__50540 = cljs.core.first(s__50532__$2);
var map__50540__$1 = (((((!((map__50540 == null))))?(((((map__50540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50540):map__50540);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50540__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50540__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50540__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50540__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50540__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"tr-item","tr-item",448171118)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"td-title","td-title",-2048420439)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__50540,map__50540__$1,uid,title,modified,created,children,s__50532__$2,temp__5735__auto__,page_eids,pages){
return (function (){
return athens.router.navigate_page(uid);
});})(map__50540,map__50540__$1,uid,title,modified,created,children,s__50532__$2,temp__5735__auto__,page_eids,pages))
], null)], 0)),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"td-body","td-body",65962215)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"body-preview","body-preview",-543779304)),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__50540,map__50540__$1,uid,title,modified,created,children,s__50532__$2,temp__5735__auto__,page_eids,pages){
return (function (p1__50522_SHARP_){
return ["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(p1__50522_SHARP_))].join('');
});})(map__50540,map__50540__$1,uid,title,modified,created,children,s__50532__$2,temp__5735__auto__,page_eids,pages))
,children))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"td-date","td-date",-1089366042)),athens.devcards.all_pages.date_string(modified)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.all_pages.tables,new cljs.core.Keyword(null,"td-date","td-date",-1089366042)),athens.devcards.all_pages.date_string(created)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$all_pages$table_$_iter__50531(cljs.core.rest(s__50532__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(pages));
})())], null)], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Table","Table",-45928924)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Table",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages50543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages50543 = (function (meta50544){
this.meta50544 = meta50544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages50543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50545,meta50544__$1){
var self__ = this;
var _50545__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages50543(meta50544__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50545){
var self__ = this;
var _50545__$1 = this;
return self__.meta50544;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50543.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages50543.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.all_pages.table,athens.devcards.all_pages.conn], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50544","meta50544",1560479023,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages50543.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages50543.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages50543");

(athens.devcards.all_pages.t_athens$devcards$all_pages50543.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages50543");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages50543.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages50543 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages50543(meta50544){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages50543(meta50544));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages50543(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.all_pages.js.map
