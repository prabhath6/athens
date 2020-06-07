goog.provide('athens.devcards.left_sidebar');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.devcards.athena');
goog.require('athens.devcards.db');
goog.require('athens.lib.dom.attributes');
goog.require('athens.router');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519 = (function (meta50520){
this.meta50520 = meta50520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50521,meta50520__$1){
var self__ = this;
var _50521__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519(meta50520__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50521){
var self__ = this;
var _50521__$1 = this;
return self__.meta50520;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
var self__ = this;
var this__46709__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46710__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46728__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.style_guide_css], null);
if(cljs.core.fn_QMARK_(v__46728__auto__)){
return (function (data_atom__46729__auto__,owner__46730__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46728__auto__,data_atom__46729__auto__,owner__46730__auto__], null));
});
} else {
return reagent.core.as_element(v__46728__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46710__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50520","meta50520",-415272694,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50519");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50519");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50519.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar50519 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar50519(meta50520){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519(meta50520));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50519(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Instantiate-Dsdb","Instantiate-Dsdb",-544389239)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Instantiate-Dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522 = (function (meta50523){
this.meta50523 = meta50523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50524,meta50523__$1){
var self__ = this;
var _50524__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522(meta50523__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50524){
var self__ = this;
var _50524__$1 = this;
return self__.meta50523;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
var self__ = this;
var this__46709__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46710__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46728__auto__ = null;
if(cljs.core.fn_QMARK_(v__46728__auto__)){
return (function (data_atom__46729__auto__,owner__46730__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46728__auto__,data_atom__46729__auto__,owner__46730__auto__], null));
});
} else {
return reagent.core.as_element(v__46728__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46710__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50523","meta50523",-1974388533,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50522");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50522");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50522.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar50522 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar50522(meta50523){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522(meta50523));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50522(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.conn !== 'undefined')){
} else {
athens.devcards.left_sidebar.conn = athens.devcards.db.new_conn();
}
athens.devcards.db.posh_conn_BANG_(athens.devcards.left_sidebar.conn);
athens.devcards.left_sidebar.handler = (function athens$devcards$left_sidebar$handler(){
var n = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.devcards.left_sidebar.conn));
var G__50526 = athens.devcards.left_sidebar.conn;
var G__50527 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),n,new cljs.core.Keyword("node","title","node/title",628940777),["Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null)], null);
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__50526,G__50527) : posh.reagent.transact_BANG_.call(null,G__50526,G__50527));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Create-Shortcut","Create-Shortcut",1916776015)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Shortcut",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528 = (function (meta50529){
this.meta50529 = meta50529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50530,meta50529__$1){
var self__ = this;
var _50530__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528(meta50529__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50530){
var self__ = this;
var _50530__$1 = this;
return self__.meta50529;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
var self__ = this;
var this__46709__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46710__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46728__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.devcards.left_sidebar.handler], null),"Create Shortcut"], null);
if(cljs.core.fn_QMARK_(v__46728__auto__)){
return (function (data_atom__46729__auto__,owner__46730__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46728__auto__,data_atom__46729__auto__,owner__46730__auto__], null));
});
} else {
return reagent.core.as_element(v__46728__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46710__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50529","meta50529",-477824830,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50528");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50528");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50528.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar50528 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar50528(meta50529){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528(meta50529));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50528(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.left_sidebar._PLUS_flex_column_align_start = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.style._PLUS_flex_column,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], 0));
athens.devcards.left_sidebar._PLUS_left_sidebar = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.left_sidebar._PLUS_flex_column_align_start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 288px",new cljs.core.Keyword(null,"padding","padding",1660304693),"32px 32px 16px 32px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"1px 0 #433f3880"], null)], 0));
athens.devcards.left_sidebar._PLUS_left_sidebar_collapsed = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.left_sidebar._PLUS_left_sidebar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 32px",new cljs.core.Keyword(null,"padding","padding",1660304693),"32px 0px",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden"], null)], 0));
athens.devcards.left_sidebar.q_shortcuts = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
athens.devcards.left_sidebar.left_sidebar = (function athens$devcards$left_sidebar$left_sidebar(conn){
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var shortcuts = (posh.reagent.q.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$2(athens.devcards.left_sidebar.q_shortcuts,conn) : posh.reagent.q.call(null,athens.devcards.left_sidebar.q_shortcuts,conn));
return (function (){
var sorted_shortcuts = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.deref(shortcuts)));
if(cljs.core.not(cljs.core.deref(open_QMARK_))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.devcards.left_sidebar._PLUS_left_sidebar_collapsed,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ChevronRight], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__50532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50532) : re_frame.core.dispatch.call(null,G__50532));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Search], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"auto"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_flex_column], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.TextFormat], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Settings], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.devcards.left_sidebar._PLUS_left_sidebar,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"40px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_flex_space_between], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena_prompt], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ChevronLeft], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.left_sidebar._PLUS_flex_column_align_start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"40px"], null)], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Today], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Daily Notes"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.router.navigate(new cljs.core.Keyword(null,"home","home",-74557309));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.FileCopy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"All Pages"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BubbleChart], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Graph Overview"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.left_sidebar._PLUS_flex_column_align_start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_width_100,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"60vh"], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.small","span.small",1761756015),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5], null)),"Shortcuts"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.style._PLUS_width_100,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], 0)),(function (){var iter__4582__auto__ = (function athens$devcards$left_sidebar$left_sidebar_$_iter__50533(s__50534){
return (new cljs.core.LazySeq(null,(function (){
var s__50534__$1 = s__50534;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50534__$1);
if(temp__5735__auto__){
var s__50534__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50534__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50534__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50536 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50535 = (0);
while(true){
if((i__50535 < size__4581__auto__)){
var vec__50537 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50535);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50537,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50537,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50537,(2),null);
cljs.core.chunk_append(b__50536,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px 0"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50535,vec__50537,_order,title,uid,c__4580__auto__,size__4581__auto__,b__50536,s__50534__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts){
return (function (){
return athens.router.navigate_page(uid);
});})(i__50535,vec__50537,_order,title,uid,c__4580__auto__,size__4581__auto__,b__50536,s__50534__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts))
], null)], 0)),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__50594 = (i__50535 + (1));
i__50535 = G__50594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50536),athens$devcards$left_sidebar$left_sidebar_$_iter__50533(cljs.core.chunk_rest(s__50534__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50536),null);
}
} else {
var vec__50543 = cljs.core.first(s__50534__$2);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50543,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50543,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50543,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px 0"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__50543,_order,title,uid,s__50534__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts){
return (function (){
return athens.router.navigate_page(uid);
});})(vec__50543,_order,title,uid,s__50534__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts))
], null)], 0)),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$left_sidebar$left_sidebar_$_iter__50533(cljs.core.rest(s__50534__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sorted_shortcuts);
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.style._PLUS_flex_space_between,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/athensresearch/athens",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'IBM Plex Serif', Sans-Serif"], null)),"Athens"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.TextFormat], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Settings], null)], null)], null)], null)], null);
}
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Comments","Comments",1933620116)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Comments",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"`position: fixed` for left-sidebar doesn't work with DevCards.\n\n  But `position: sticky` doesn't work well when in app.\n\n  Has to do with absolute vs relative positioning I believe.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546 = (function (meta50547){
this.meta50547 = meta50547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50548,meta50547__$1){
var self__ = this;
var _50548__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546(meta50547__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50548){
var self__ = this;
var _50548__$1 = this;
return self__.meta50547;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
var self__ = this;
var this__46709__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46710__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46728__auto__ = null;
if(cljs.core.fn_QMARK_(v__46728__auto__)){
return (function (data_atom__46729__auto__,owner__46730__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46728__auto__,data_atom__46729__auto__,owner__46730__auto__], null));
});
} else {
return reagent.core.as_element(v__46728__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46710__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50547","meta50547",1195102333,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50546");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50546");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50546.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar50546 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar50546(meta50547){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546(meta50547));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50546(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Left-Sidebar","Left-Sidebar",8868535)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Left-Sidebar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555 = (function (meta50556){
this.meta50556 = meta50556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50557,meta50556__$1){
var self__ = this;
var _50557__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555(meta50556__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50557){
var self__ = this;
var _50557__$1 = this;
return self__.meta50556;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
var self__ = this;
var this__46709__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46710__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46728__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.left_sidebar.left_sidebar,athens.devcards.left_sidebar.conn], null)], null);
if(cljs.core.fn_QMARK_(v__46728__auto__)){
return (function (data_atom__46729__auto__,owner__46730__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46728__auto__,data_atom__46729__auto__,owner__46730__auto__], null));
});
} else {
return reagent.core.as_element(v__46728__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46710__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50556","meta50556",1542568762,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50555");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50555");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50555.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar50555 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar50555(meta50556){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555(meta50556));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50555(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.left_sidebar.js.map
