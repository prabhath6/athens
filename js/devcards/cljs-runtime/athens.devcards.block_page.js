goog.provide('athens.devcards.block_page');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.router');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.block_page","athens.devcards.block_page",1745660043),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.block_page !== 'undefined') && (typeof athens.devcards.block_page.t_athens$devcards$block_page51898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.block_page.t_athens$devcards$block_page51898 = (function (meta51899){
this.meta51899 = meta51899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.block_page.t_athens$devcards$block_page51898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51900,meta51899__$1){
var self__ = this;
var _51900__$1 = this;
return (new athens.devcards.block_page.t_athens$devcards$block_page51898(meta51899__$1));
}));

(athens.devcards.block_page.t_athens$devcards$block_page51898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51900){
var self__ = this;
var _51900__$1 = this;
return self__.meta51899;
}));

(athens.devcards.block_page.t_athens$devcards$block_page51898.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.block_page.t_athens$devcards$block_page51898.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47882__auto__,devcard_opts__47883__auto__){
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

(athens.devcards.block_page.t_athens$devcards$block_page51898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51899","meta51899",520912951,null)], null);
}));

(athens.devcards.block_page.t_athens$devcards$block_page51898.cljs$lang$type = true);

(athens.devcards.block_page.t_athens$devcards$block_page51898.cljs$lang$ctorStr = "athens.devcards.block-page/t_athens$devcards$block_page51898");

(athens.devcards.block_page.t_athens$devcards$block_page51898.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.block-page/t_athens$devcards$block_page51898");
}));

/**
 * Positional factory function for athens.devcards.block-page/t_athens$devcards$block_page51898.
 */
athens.devcards.block_page.__GT_t_athens$devcards$block_page51898 = (function athens$devcards$block_page$__GT_t_athens$devcards$block_page51898(meta51899){
return (new athens.devcards.block_page.t_athens$devcards$block_page51898(meta51899));
});

}

return (new athens.devcards.block_page.t_athens$devcards$block_page51898(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.block_page","athens.devcards.block_page",1745660043),new cljs.core.Keyword(null,"Instantiate-Dsdb","Instantiate-Dsdb",-544389239)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Instantiate-Dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.block_page.datoms = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2381),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"OaSVyM_nr",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("node","title","node/title",628940777),"Athens FAQ",new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2158),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"BjIm6GeRP",new cljs.core.Keyword("block","string","block/string",-2066596447),"Why open-source?",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(3),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2163),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"GNaf3XzpE",new cljs.core.Keyword("block","string","block/string",-2066596447),"The short answer is the security and privacy of your data.",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(1)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2347),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"jbiKpcmIX",new cljs.core.Keyword("block","string","block/string",-2066596447),"Firstly, I wouldn't be surprised if Roam was eventually open-sourced.",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2176),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"gVINXaN8Y",new cljs.core.Keyword("block","string","block/string",-2066596447),"Suffice it to say that Roam being open-source is undeniably something that the team has already considered. Why is it not open-source already? You'd have to ask the Roam team, but Roam, a business, is not obligated to open-source anything.",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(2)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2346),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"ZOxwo0K_7",new cljs.core.Keyword("block","string","block/string",-2066596447),"The conclusion of the [[Roam White Paper]] states that Roam's vision is a collective, \"open-source\" intelligence.",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2174),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"WKWPPSYQa",new cljs.core.Keyword("block","string","block/string",-2066596447),"((iWmBJaChO))",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(0)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2349),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"VQ-ybRmNh",new cljs.core.Keyword("block","string","block/string",-2066596447),"In the Roam Slack, I recall Conor saying one eventual goal is to work on a protocol that affords interoperability between open source alternatives. I would share the message but can't find it because of Slack's 10k message limit.",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(1)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2351),new cljs.core.Keyword("block","uid","block/uid",-1623585167),"PGGS8MFH_",new cljs.core.Keyword("block","string","block/string",-2066596447),"Ultimately, we don't know when/if Roam will be open-sourced, but it's possible that Athens could accelerate or catalyze this. Regardless, there will always be some who are open-source maximalists and some who want to self-host, because that's probably really the most secure thing you can do (if you know what you're doing).",new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","order","block/order",-1429282437),(3)], null)], null)], null)], null)], null)], null)], null)], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.block_page !== 'undefined') && (typeof athens.devcards.block_page.conn !== 'undefined')){
} else {
athens.devcards.block_page.conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
}
(posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(athens.devcards.block_page.conn) : posh.reagent.posh_BANG_.call(null,athens.devcards.block_page.conn));
(posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.block_page.conn,athens.devcards.block_page.datoms) : posh.reagent.transact_BANG_.call(null,athens.devcards.block_page.conn,athens.devcards.block_page.datoms));
athens.devcards.block_page.block_page_el = (function athens$devcards$block_page$block_page_el(block,parents){
var map__51904 = block;
var map__51904__$1 = (((((!((map__51904 == null))))?(((((map__51904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51904):map__51904);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51904__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51904__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" > ",(function (){var iter__4582__auto__ = (function athens$devcards$block_page$block_page_el_$_iter__51906(s__51907){
return (new cljs.core.LazySeq(null,(function (){
var s__51907__$1 = s__51907;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51907__$1);
if(temp__5735__auto__){
var s__51907__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51907__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51907__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51909 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51908 = (0);
while(true){
if((i__51908 < size__4581__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51908);
cljs.core.chunk_append(b__51909,(function (){var map__51910 = p;
var map__51910__$1 = (((((!((map__51910 == null))))?(((((map__51910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51910):map__51910);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51910__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51910__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51910__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),uid,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__51908,map__51910,map__51910__$1,title,uid,string__$1,p,c__4580__auto__,size__4581__auto__,b__51909,s__51907__$2,temp__5735__auto__,map__51904,map__51904__$1,string,children){
return (function (){
return athens.router.navigate_page(uid);
});})(i__51908,map__51910,map__51910__$1,title,uid,string__$1,p,c__4580__auto__,size__4581__auto__,b__51909,s__51907__$2,temp__5735__auto__,map__51904,map__51904__$1,string,children))
], null),(function (){var or__4185__auto__ = string__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return title;
}
})()], null);
})());

var G__51958 = (i__51908 + (1));
i__51908 = G__51958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51909),athens$devcards$block_page$block_page_el_$_iter__51906(cljs.core.chunk_rest(s__51907__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51909),null);
}
} else {
var p = cljs.core.first(s__51907__$2);
return cljs.core.cons((function (){var map__51912 = p;
var map__51912__$1 = (((((!((map__51912 == null))))?(((((map__51912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51912):map__51912);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51912__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51912__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51912__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),uid,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__51912,map__51912__$1,title,uid,string__$1,p,s__51907__$2,temp__5735__auto__,map__51904,map__51904__$1,string,children){
return (function (){
return athens.router.navigate_page(uid);
});})(map__51912,map__51912__$1,title,uid,string__$1,p,s__51907__$2,temp__5735__auto__,map__51904,map__51904__$1,string,children))
], null),(function (){var or__4185__auto__ = string__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return title;
}
})()], null);
})(),athens$devcards$block_page$block_page_el_$_iter__51906(cljs.core.rest(s__51907__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parents);
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$block_page$block_page_el_$_iter__51914(s__51915){
return (new cljs.core.LazySeq(null,(function (){
var s__51915__$1 = s__51915;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51915__$1);
if(temp__5735__auto__){
var s__51915__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51915__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51915__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51917 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51916 = (0);
while(true){
if((i__51916 < size__4581__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51916);
cljs.core.chunk_append(b__51917,(function (){var map__51918 = child;
var map__51918__$1 = (((((!((map__51918 == null))))?(((((map__51918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51918):map__51918);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51918__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__51964 = (i__51916 + (1));
i__51916 = G__51964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51917),athens$devcards$block_page$block_page_el_$_iter__51914(cljs.core.chunk_rest(s__51915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51917),null);
}
} else {
var child = cljs.core.first(s__51915__$2);
return cljs.core.cons((function (){var map__51920 = child;
var map__51920__$1 = (((((!((map__51920 == null))))?(((((map__51920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51920):map__51920);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51920__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),athens$devcards$block_page$block_page_el_$_iter__51914(cljs.core.rest(s__51915__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)], null);
});
/**
 * 
 */
athens.devcards.block_page.block_page_component = (function athens$devcards$block_page$block_page_component(conn,ident){
var block = cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,athens.db.block_pull_pattern,ident) : posh.reagent.pull.call(null,conn,athens.db.block_pull_pattern,ident)));
var parents = athens.db.shape_parent_query(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(conn,athens.db.parents_pull_pattern,ident) : posh.reagent.pull.call(null,conn,athens.db.parents_pull_pattern,ident))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.block_page.block_page_el,block,parents], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.block_page","athens.devcards.block_page",1745660043),new cljs.core.Keyword(null,"Block-Page","Block-Page",1837866107)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Block-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"pull entity 2347: a block within Athens FAQ\n\n  two queries:\n\n  1. block+children\n  1. parents for context",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.block_page !== 'undefined') && (typeof athens.devcards.block_page.t_athens$devcards$block_page51922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.block_page.t_athens$devcards$block_page51922 = (function (meta51923){
this.meta51923 = meta51923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.block_page.t_athens$devcards$block_page51922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51924,meta51923__$1){
var self__ = this;
var _51924__$1 = this;
return (new athens.devcards.block_page.t_athens$devcards$block_page51922(meta51923__$1));
}));

(athens.devcards.block_page.t_athens$devcards$block_page51922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51924){
var self__ = this;
var _51924__$1 = this;
return self__.meta51923;
}));

(athens.devcards.block_page.t_athens$devcards$block_page51922.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.block_page.t_athens$devcards$block_page51922.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47882__auto__,devcard_opts__47883__auto__){
var self__ = this;
var this__47882__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47883__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47901__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.block_page.block_page_component,athens.devcards.block_page.conn,(2347)], null);
if(cljs.core.fn_QMARK_(v__47901__auto__)){
return (function (data_atom__47902__auto__,owner__47903__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47901__auto__,data_atom__47902__auto__,owner__47903__auto__], null));
});
} else {
return reagent.core.as_element(v__47901__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47883__auto__))], 0))], 0));
}));

(athens.devcards.block_page.t_athens$devcards$block_page51922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51923","meta51923",495821931,null)], null);
}));

(athens.devcards.block_page.t_athens$devcards$block_page51922.cljs$lang$type = true);

(athens.devcards.block_page.t_athens$devcards$block_page51922.cljs$lang$ctorStr = "athens.devcards.block-page/t_athens$devcards$block_page51922");

(athens.devcards.block_page.t_athens$devcards$block_page51922.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.block-page/t_athens$devcards$block_page51922");
}));

/**
 * Positional factory function for athens.devcards.block-page/t_athens$devcards$block_page51922.
 */
athens.devcards.block_page.__GT_t_athens$devcards$block_page51922 = (function athens$devcards$block_page$__GT_t_athens$devcards$block_page51922(meta51923){
return (new athens.devcards.block_page.t_athens$devcards$block_page51922(meta51923));
});

}

return (new athens.devcards.block_page.t_athens$devcards$block_page51922(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.block_page.js.map
