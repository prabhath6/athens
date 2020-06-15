goog.provide('athens.devcards.parser');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.parser !== 'undefined') && (typeof athens.devcards.parser.conn !== 'undefined')){
} else {
athens.devcards.parser.conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
}
(posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(athens.devcards.parser.conn) : posh.reagent.posh_BANG_.call(null,athens.devcards.parser.conn));
var G__51925_51959 = athens.devcards.parser.conn;
var G__51926_51960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(1),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"uid1",new cljs.core.Keyword("block","string","block/string",-2066596447),"block ref"], null)], null);
(posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__51925_51959,G__51926_51960) : posh.reagent.transact_BANG_.call(null,G__51925_51959,G__51926_51960));
athens.devcards.parser.strings = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This is a plain block","This is a [[page link]]","This is a ((uid1))","This is a **very** important block","This is an [external link](https://github.com/athensresearch/athens/)","This is an image: ![alt](https://raw.githubusercontent.com/athensresearch/athens/master/doc/athens-puk-patrick-unsplash.jpg)"], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.parser","athens.devcards.parser",1066018574),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.parser !== 'undefined') && (typeof athens.devcards.parser.t_athens$devcards$parser51927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.parser.t_athens$devcards$parser51927 = (function (meta51928){
this.meta51928 = meta51928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.parser.t_athens$devcards$parser51927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51929,meta51928__$1){
var self__ = this;
var _51929__$1 = this;
return (new athens.devcards.parser.t_athens$devcards$parser51927(meta51928__$1));
}));

(athens.devcards.parser.t_athens$devcards$parser51927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51929){
var self__ = this;
var _51929__$1 = this;
return self__.meta51928;
}));

(athens.devcards.parser.t_athens$devcards$parser51927.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.parser.t_athens$devcards$parser51927.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47882__auto__,devcard_opts__47883__auto__){
var self__ = this;
var this__47882__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47883__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47901__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.base_styles], null);
if(cljs.core.fn_QMARK_(v__47901__auto__)){
return (function (data_atom__47902__auto__,owner__47903__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47901__auto__,data_atom__47902__auto__,owner__47903__auto__], null));
});
} else {
return reagent.core.as_element(v__47901__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47883__auto__))], 0))], 0));
}));

(athens.devcards.parser.t_athens$devcards$parser51927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51928","meta51928",1733666078,null)], null);
}));

(athens.devcards.parser.t_athens$devcards$parser51927.cljs$lang$type = true);

(athens.devcards.parser.t_athens$devcards$parser51927.cljs$lang$ctorStr = "athens.devcards.parser/t_athens$devcards$parser51927");

(athens.devcards.parser.t_athens$devcards$parser51927.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.parser/t_athens$devcards$parser51927");
}));

/**
 * Positional factory function for athens.devcards.parser/t_athens$devcards$parser51927.
 */
athens.devcards.parser.__GT_t_athens$devcards$parser51927 = (function athens$devcards$parser$__GT_t_athens$devcards$parser51927(meta51928){
return (new athens.devcards.parser.t_athens$devcards$parser51927(meta51928));
});

}

return (new athens.devcards.parser.t_athens$devcards$parser51927(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.parser","athens.devcards.parser",1066018574),new cljs.core.Keyword(null,"Parse","Parse",382274654)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Parse",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.parser !== 'undefined') && (typeof athens.devcards.parser.t_athens$devcards$parser51944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.parser.t_athens$devcards$parser51944 = (function (meta51945){
this.meta51945 = meta51945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.parser.t_athens$devcards$parser51944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51946,meta51945__$1){
var self__ = this;
var _51946__$1 = this;
return (new athens.devcards.parser.t_athens$devcards$parser51944(meta51945__$1));
}));

(athens.devcards.parser.t_athens$devcards$parser51944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51946){
var self__ = this;
var _51946__$1 = this;
return self__.meta51945;
}));

(athens.devcards.parser.t_athens$devcards$parser51944.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.parser.t_athens$devcards$parser51944.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47882__auto__,devcard_opts__47883__auto__){
var self__ = this;
var this__47882__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47883__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47901__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$parser$iter__51947(s__51948){
return (new cljs.core.LazySeq(null,(function (){
var s__51948__$1 = s__51948;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51948__$1);
if(temp__5735__auto__){
var s__51948__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51948__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51948__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51950 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51949 = (0);
while(true){
if((i__51949 < size__4581__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51949);
cljs.core.chunk_append(b__51950,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","string","block/string",-2066596447),s], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)));

var G__51965 = (i__51949 + (1));
i__51949 = G__51965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51950),athens$devcards$parser$iter__51947(cljs.core.chunk_rest(s__51948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51950),null);
}
} else {
var s = cljs.core.first(s__51948__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","string","block/string",-2066596447),s], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)),athens$devcards$parser$iter__51947(cljs.core.rest(s__51948__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.parser.strings);
})()], null);
if(cljs.core.fn_QMARK_(v__47901__auto__)){
return (function (data_atom__47902__auto__,owner__47903__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47901__auto__,data_atom__47902__auto__,owner__47903__auto__], null));
});
} else {
return reagent.core.as_element(v__47901__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47883__auto__))], 0))], 0));
}));

(athens.devcards.parser.t_athens$devcards$parser51944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51945","meta51945",118853340,null)], null);
}));

(athens.devcards.parser.t_athens$devcards$parser51944.cljs$lang$type = true);

(athens.devcards.parser.t_athens$devcards$parser51944.cljs$lang$ctorStr = "athens.devcards.parser/t_athens$devcards$parser51944");

(athens.devcards.parser.t_athens$devcards$parser51944.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.parser/t_athens$devcards$parser51944");
}));

/**
 * Positional factory function for athens.devcards.parser/t_athens$devcards$parser51944.
 */
athens.devcards.parser.__GT_t_athens$devcards$parser51944 = (function athens$devcards$parser$__GT_t_athens$devcards$parser51944(meta51945){
return (new athens.devcards.parser.t_athens$devcards$parser51944(meta51945));
});

}

return (new athens.devcards.parser.t_athens$devcards$parser51944(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.parser.js.map
