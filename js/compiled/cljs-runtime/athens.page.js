goog.provide('athens.page');
goog.require('cljs.core');
goog.require('athens.parse_renderer');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.page.page_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 40px"], null);
athens.page.render_blocks = (function athens$page$render_blocks(){
return (function (block_uid){
var block = (function (){var G__53232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","children-sorted","block/children-sorted",106153544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),block_uid], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53232) : re_frame.core.subscribe.call(null,G__53232));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content-block"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$page$render_blocks_$_iter__53233(s__53234){
return (new cljs.core.LazySeq(null,(function (){
var s__53234__$1 = s__53234;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53234__$1);
if(temp__5735__auto__){
var s__53234__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53234__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53234__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53236 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53235 = (0);
while(true){
if((i__53235 < size__4581__auto__)){
var ch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53235);
cljs.core.chunk_append(b__53236,(function (){var map__53237 = ch;
var map__53237__$1 = (((((!((map__53237 == null))))?(((((map__53237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53237):map__53237);
var dbid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53237__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53237__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53237__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53237__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53237__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var children_QMARK_ = cljs.core.not_empty(children);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls","div.controls",1658515593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(5)], null)], null),(cljs.core.truth_((function (){var and__4174__auto__ = children_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return open;
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow-down","span.arrow-down",116928935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"5px solid transparent",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"5px solid transparent",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"5px solid black",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(4)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53235,map__53237,map__53237__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__53236,s__53234__$2,temp__5735__auto__,block){
return (function (){
return athens.router.toggle_open(dbid,open);
});})(i__53235,map__53237,map__53237__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__53236,s__53234__$2,temp__5735__auto__,block))
], null)], null):(cljs.core.truth_((function (){var and__4174__auto__ = children_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(open);
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow-right","span.arrow-right",-1150056712),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"border-top","border-top",-158897573),"5px solid transparent",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"5px solid transparent",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"5px solid black",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53235,map__53237,map__53237__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__53236,s__53234__$2,temp__5735__auto__,block){
return (function (){
return athens.router.toggle_open(dbid,open);
});})(i__53235,map__53237,map__53237__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__53236,s__53234__$2,temp__5735__auto__,block))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(10)], null)], null)], null)
)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center","middle",((cljs.core.not(open))?"lightgray":null),(12),"pointer","center","flex",(5),"50%",(12)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.controls","span.controls",-932064964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53235,map__53237,map__53237__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__53236,s__53234__$2,temp__5735__auto__,block){
return (function (){
return athens.router.navigate_page(uid);
});})(i__53235,map__53237,map__53237__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__53236,s__53234__$2,temp__5735__auto__,block))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.parse_renderer.parse_and_render(string)], null)], null),(cljs.core.truth_(open)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.render_blocks,uid], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null));
})());

var G__53279 = (i__53235 + (1));
i__53235 = G__53279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53236),athens$page$render_blocks_$_iter__53233(cljs.core.chunk_rest(s__53234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53236),null);
}
} else {
var ch = cljs.core.first(s__53234__$2);
return cljs.core.cons((function (){var map__53239 = ch;
var map__53239__$1 = (((((!((map__53239 == null))))?(((((map__53239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53239):map__53239);
var dbid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53239__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53239__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53239__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53239__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53239__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var children_QMARK_ = cljs.core.not_empty(children);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls","div.controls",1658515593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(5)], null)], null),(cljs.core.truth_((function (){var and__4174__auto__ = children_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return open;
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow-down","span.arrow-down",116928935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"5px solid transparent",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"5px solid transparent",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"5px solid black",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(4)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__53239,map__53239__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__53234__$2,temp__5735__auto__,block){
return (function (){
return athens.router.toggle_open(dbid,open);
});})(map__53239,map__53239__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__53234__$2,temp__5735__auto__,block))
], null)], null):(cljs.core.truth_((function (){var and__4174__auto__ = children_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(open);
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow-right","span.arrow-right",-1150056712),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"border-top","border-top",-158897573),"5px solid transparent",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"5px solid transparent",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"5px solid black",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__53239,map__53239__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__53234__$2,temp__5735__auto__,block){
return (function (){
return athens.router.toggle_open(dbid,open);
});})(map__53239,map__53239__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__53234__$2,temp__5735__auto__,block))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(10)], null)], null)], null)
)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center","middle",((cljs.core.not(open))?"lightgray":null),(12),"pointer","center","flex",(5),"50%",(12)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.controls","span.controls",-932064964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__53239,map__53239__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__53234__$2,temp__5735__auto__,block){
return (function (){
return athens.router.navigate_page(uid);
});})(map__53239,map__53239__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__53234__$2,temp__5735__auto__,block))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.parse_renderer.parse_and_render(string)], null)], null),(cljs.core.truth_(open)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.render_blocks,uid], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null));
})(),athens$page$render_blocks_$_iter__53233(cljs.core.rest(s__53234__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block)));
})())], null);
});
});
athens.page.block_page = (function athens$page$block_page(){
return (function (id){
var node = (function (){var G__53241 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),id], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53241) : re_frame.core.subscribe.call(null,G__53241));
})();
var parents = (function (){var G__53242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_children2","block/_children2",-1277243604),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),id], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53242) : re_frame.core.subscribe.call(null,G__53242));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" > ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
var map__53243 = b;
var map__53243__$1 = (((((!((map__53243 == null))))?(((((map__53243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53243):map__53243);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53243__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53243__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53243__$1,new cljs.core.Keyword("node","title","node/title",628940777));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.router.navigate_page(uid);
})], null),(function (){var or__4185__auto__ = string;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return title;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null));
}),cljs.core.deref(parents)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.render_blocks,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node))], null)], null)], null);
});
});
athens.page.enter_keycode = (13);
athens.page.esc_keycode = (27);
athens.page.title_comp = (function athens$page$title_comp(title){
var s = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"current-title","current-title",-156489454),title], null));
var save_BANG_ = (function (new_title){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword(null,"editing","editing",1365491601),false);

var G__53248 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","renamed","node/renamed",-1655200587),new cljs.core.Keyword(null,"current-title","current-title",-156489454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)),new_title], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53248) : re_frame.core.dispatch.call(null,G__53248));
});
var cancel_BANG_ = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
});
return (function (title__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__53245_SHARP_){
return save_BANG_(p1__53245_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__53246_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__53246_SHARP_.keyCode,athens.page.enter_keycode)){
return save_BANG_(p1__53246_SHARP_.target.value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__53246_SHARP_.keyCode,athens.page.esc_keycode)){
return cancel_BANG_();
} else {
return null;

}
}
})], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(s,(function (p1__53247_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53247_SHARP_,new cljs.core.Keyword(null,"editing","editing",1365491601),true),new cljs.core.Keyword(null,"current-title","current-title",-156489454),title__$1);
}));
})], null),title__$1], null);
}
});
});
athens.page.merge_prompt = (function athens$page$merge_prompt(p__53249){
var map__53250 = p__53249;
var map__53250__$1 = (((((!((map__53250 == null))))?(((((map__53250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53250):map__53250);
var old_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53250__$1,new cljs.core.Keyword(null,"old-title","old-title",-85478212));
var new_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53250__$1,new cljs.core.Keyword(null,"new-title","new-title",-2087375544));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"red",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_title),"\" already exists, merge pages?"].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53252 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merged","node/merged",1662072257),old_title,new_title], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53252) : re_frame.core.dispatch.call(null,G__53252));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"30px"], null)], null),"yes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53253) : re_frame.core.dispatch.call(null,G__53253));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"30px"], null)], null),"no"], null)], null);
});
athens.page.node_page = (function athens$page$node_page(){
return (function (node){
var linked_refs = (function (){var G__53254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","refs","node/refs",-1563406590),athens.patterns.linked(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53254) : re_frame.core.subscribe.call(null,G__53254));
})();
var unlinked_refs = (function (){var G__53255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","refs","node/refs",-1563406590),athens.patterns.unlinked(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53255) : re_frame.core.subscribe.call(null,G__53255));
})();
var merge = (function (){var G__53256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53256) : re_frame.core.subscribe.call(null,G__53256));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(merge),new cljs.core.Keyword(null,"active","active",1895962068),false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.merge_prompt,cljs.core.deref(merge)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.title_comp,new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.render_blocks,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Linked References"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$page$node_page_$_iter__53259(s__53260){
return (new cljs.core.LazySeq(null,(function (){
var s__53260__$1 = s__53260;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53260__$1);
if(temp__5735__auto__){
var s__53260__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53260__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53260__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53262 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53261 = (0);
while(true){
if((i__53261 < size__4581__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53261);
cljs.core.chunk_append(b__53262,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightblue",new cljs.core.Keyword(null,"margin","margin",-995903681),"15px 0px",new cljs.core.Keyword(null,"padding","padding",1660304693),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.block_page,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__53280 = (i__53261 + (1));
i__53261 = G__53280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53262),athens$page$node_page_$_iter__53259(cljs.core.chunk_rest(s__53260__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53262),null);
}
} else {
var id = cljs.core.first(s__53260__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightblue",new cljs.core.Keyword(null,"margin","margin",-995903681),"15px 0px",new cljs.core.Keyword(null,"padding","padding",1660304693),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.block_page,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),athens$page$node_page_$_iter__53259(cljs.core.rest(s__53260__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.deref(linked_refs)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Unlinked References"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$page$node_page_$_iter__53273(s__53274){
return (new cljs.core.LazySeq(null,(function (){
var s__53274__$1 = s__53274;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53274__$1);
if(temp__5735__auto__){
var s__53274__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53274__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53274__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53276 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53275 = (0);
while(true){
if((i__53275 < size__4581__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53275);
cljs.core.chunk_append(b__53276,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightblue",new cljs.core.Keyword(null,"margin","margin",-995903681),"15px 0px",new cljs.core.Keyword(null,"padding","padding",1660304693),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.block_page,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__53281 = (i__53275 + (1));
i__53275 = G__53281;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53276),athens$page$node_page_$_iter__53273(cljs.core.chunk_rest(s__53274__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53276),null);
}
} else {
var id = cljs.core.first(s__53274__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightblue",new cljs.core.Keyword(null,"margin","margin",-995903681),"15px 0px",new cljs.core.Keyword(null,"padding","padding",1660304693),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.block_page,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),athens$page$node_page_$_iter__53273(cljs.core.rest(s__53274__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.deref(unlinked_refs)));
})()], null)], null)], null);
});
});
athens.page.main = (function athens$page$main(){
var current_route = (function (){var G__53277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53277) : re_frame.core.subscribe.call(null,G__53277));
})();
return (function (){
var node = (function (){var G__53278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route)))], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53278) : re_frame.core.subscribe.call(null,G__53278));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.page.page_style),(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.node_page,cljs.core.deref(node)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.block_page,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node))], null))], null);
});
});

//# sourceMappingURL=athens.page.js.map
