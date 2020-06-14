goog.provide('athens.devcards.style_guide');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('stylefy.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"CSS is imported here",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide51592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide51592 = (function (meta51593){
this.meta51593 = meta51593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide51592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51594,meta51593__$1){
var self__ = this;
var _51594__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51592(meta51593__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51594){
var self__ = this;
var _51594__$1 = this;
return self__.meta51593;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51592.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide51592.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
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

(athens.devcards.style_guide.t_athens$devcards$style_guide51592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51593","meta51593",-478092088,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51592.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide51592.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide51592");

(athens.devcards.style_guide.t_athens$devcards$style_guide51592.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide51592");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide51592.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide51592 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide51592(meta51593){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51592(meta51593));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide51592(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.style_guide.color_group_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat( auto-fit, minmax(9rem, 1fr))",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"3rem 1rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null);
athens.devcards.style_guide.color_item_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"0.25rem",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"height","height",1025178622),"4rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"4rem"], null)], null)], null)], null);
athens.devcards.style_guide.text_item_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Colors","Colors",572881364)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Colors",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide51595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide51595 = (function (meta51596){
this.meta51596 = meta51596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide51595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51597,meta51596__$1){
var self__ = this;
var _51597__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51595(meta51596__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51597){
var self__ = this;
var _51597__$1 = this;
return self__.meta51596;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51595.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide51595.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.style_guide.color_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971))], null)], 0))),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__51598(s__51599){
return (new cljs.core.LazySeq(null,(function (){
var s__51599__$1 = s__51599;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51599__$1);
if(temp__5735__auto__){
var s__51599__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51599__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51599__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51601 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51600 = (0);
while(true){
if((i__51600 < size__4581__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51600);
cljs.core.chunk_append(b__51601,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__51633 = (i__51600 + (1));
i__51600 = G__51633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51601),athens$devcards$style_guide$iter__51598(cljs.core.chunk_rest(s__51599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51601),null);
}
} else {
var c = cljs.core.first(s__51599__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),athens$devcards$style_guide$iter__51598(cljs.core.rest(s__51599__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.keys(athens.style.COLORS));
})())], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51596","meta51596",-3966992,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51595.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide51595.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide51595");

(athens.devcards.style_guide.t_athens$devcards$style_guide51595.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide51595");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide51595.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide51595 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide51595(meta51596){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51595(meta51596));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide51595(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Opacities","Opacities",-312274473)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Opacities",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide51602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide51602 = (function (meta51603){
this.meta51603 = meta51603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide51602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51604,meta51603__$1){
var self__ = this;
var _51604__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51602(meta51603__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51604){
var self__ = this;
var _51604__$1 = this;
return self__.meta51603;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51602.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide51602.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_group_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__51605(s__51606){
return (new cljs.core.LazySeq(null,(function (){
var s__51606__$1 = s__51606;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51606__$1);
if(temp__5735__auto__){
var s__51606__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51606__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51606__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51608 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51607 = (0);
while(true){
if((i__51607 < size__4581__auto__)){
var o = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51607);
cljs.core.chunk_append(b__51608,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)));

var G__51634 = (i__51607 + (1));
i__51607 = G__51634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51608),athens$devcards$style_guide$iter__51605(cljs.core.chunk_rest(s__51606__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51608),null);
}
} else {
var o = cljs.core.first(s__51606__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)),athens$devcards$style_guide$iter__51605(cljs.core.rest(s__51606__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.keys(athens.style.OPACITIES));
})())], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51603","meta51603",-1538006993,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51602.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide51602.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide51602");

(athens.devcards.style_guide.t_athens$devcards$style_guide51602.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide51602");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide51602.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide51602 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide51602(meta51603){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51602(meta51603));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide51602(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.style_guide.types = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"span.block-ref","span.block-ref",1894783192)], null);
athens.devcards.style_guide.fonts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Serif","serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Sans","sans-serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Mono","monospace"], null)], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Sans-Types","Sans-Types",-759330260)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Sans-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide51609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide51609 = (function (meta51610){
this.meta51610 = meta51610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide51609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51611,meta51610__$1){
var self__ = this;
var _51611__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51609(meta51610__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51611){
var self__ = this;
var _51611__$1 = this;
return self__.meta51610;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51609.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide51609.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__51612(s__51613){
return (new cljs.core.LazySeq(null,(function (){
var s__51613__$1 = s__51613;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51613__$1);
if(temp__5735__auto__){
var s__51613__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51613__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51613__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51615 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51614 = (0);
while(true){
if((i__51614 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51614);
cljs.core.chunk_append(b__51615,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__51635 = (i__51614 + (1));
i__51614 = G__51635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51615),athens$devcards$style_guide$iter__51612(cljs.core.chunk_rest(s__51613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51615),null);
}
} else {
var t = cljs.core.first(s__51613__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__51612(cljs.core.rest(s__51613__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51610","meta51610",-1843909336,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51609.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide51609.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide51609");

(athens.devcards.style_guide.t_athens$devcards$style_guide51609.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide51609");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide51609.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide51609 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide51609(meta51610){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51609(meta51610));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide51609(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Serif-Types","Serif-Types",-1395581219)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Serif-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide51616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide51616 = (function (meta51617){
this.meta51617 = meta51617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide51616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51618,meta51617__$1){
var self__ = this;
var _51618__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51616(meta51617__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51618){
var self__ = this;
var _51618__$1 = this;
return self__.meta51617;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51616.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide51616.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__51619(s__51620){
return (new cljs.core.LazySeq(null,(function (){
var s__51620__$1 = s__51620;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51620__$1);
if(temp__5735__auto__){
var s__51620__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51620__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51620__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51622 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51621 = (0);
while(true){
if((i__51621 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51621);
cljs.core.chunk_append(b__51622,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__51636 = (i__51621 + (1));
i__51621 = G__51636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51622),athens$devcards$style_guide$iter__51619(cljs.core.chunk_rest(s__51620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51622),null);
}
} else {
var t = cljs.core.first(s__51620__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__51619(cljs.core.rest(s__51620__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51617","meta51617",-353726617,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51616.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide51616.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide51616");

(athens.devcards.style_guide.t_athens$devcards$style_guide51616.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide51616");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide51616.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide51616 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide51616(meta51617){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51616(meta51617));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide51616(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Monospace-Types","Monospace-Types",-1076182681)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Monospace-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide51623 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide51623 = (function (meta51624){
this.meta51624 = meta51624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide51623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51625,meta51624__$1){
var self__ = this;
var _51625__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51623(meta51624__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51625){
var self__ = this;
var _51625__$1 = this;
return self__.meta51624;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51623.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide51623.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__51626(s__51627){
return (new cljs.core.LazySeq(null,(function (){
var s__51627__$1 = s__51627;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51627__$1);
if(temp__5735__auto__){
var s__51627__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51627__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51627__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51629 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51628 = (0);
while(true){
if((i__51628 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51628);
cljs.core.chunk_append(b__51629,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__51637 = (i__51628 + (1));
i__51628 = G__51637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51629),athens$devcards$style_guide$iter__51626(cljs.core.chunk_rest(s__51627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51629),null);
}
} else {
var t = cljs.core.first(s__51627__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__51626(cljs.core.rest(s__51627__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51624","meta51624",592734074,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51623.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide51623.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide51623");

(athens.devcards.style_guide.t_athens$devcards$style_guide51623.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide51623");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide51623.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide51623 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide51623(meta51624){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51623(meta51624));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide51623(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Material-UI-Icons","Material-UI-Icons",-1768918071)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Material-UI-Icons",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide51630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide51630 = (function (meta51631){
this.meta51631 = meta51631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide51630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51632,meta51631__$1){
var self__ = this;
var _51632__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51630(meta51631__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51632){
var self__ = this;
var _51632__$1 = this;
return self__.meta51631;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51630.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide51630.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/cards.html#!/athens.devcards.icons"], null),"Icons DevCard"], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51631","meta51631",1538099872,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide51630.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide51630.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide51630");

(athens.devcards.style_guide.t_athens$devcards$style_guide51630.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide51630");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide51630.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide51630 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide51630(meta51631){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide51630(meta51631));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide51630(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.style_guide.js.map
