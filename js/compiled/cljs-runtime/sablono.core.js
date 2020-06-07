goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__54747__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__54562 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__54563 = cljs.core.seq(vec__54562);
var first__54564 = cljs.core.first(seq__54563);
var seq__54563__$1 = cljs.core.next(seq__54563);
var tag = first__54564;
var body = seq__54563__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__54747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54748__i = 0, G__54748__a = new Array(arguments.length -  0);
while (G__54748__i < G__54748__a.length) {G__54748__a[G__54748__i] = arguments[G__54748__i + 0]; ++G__54748__i;}
  args = new cljs.core.IndexedSeq(G__54748__a,0,null);
} 
return G__54747__delegate.call(this,args);};
G__54747.cljs$lang$maxFixedArity = 0;
G__54747.cljs$lang$applyTo = (function (arglist__54749){
var args = cljs.core.seq(arglist__54749);
return G__54747__delegate(args);
});
G__54747.cljs$core$IFn$_invoke$arity$variadic = G__54747__delegate;
return G__54747;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__54565(s__54566){
return (new cljs.core.LazySeq(null,(function (){
var s__54566__$1 = s__54566;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54566__$1);
if(temp__5735__auto__){
var s__54566__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54566__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54566__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54568 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54567 = (0);
while(true){
if((i__54567 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54567);
cljs.core.chunk_append(b__54568,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__54752 = (i__54567 + (1));
i__54567 = G__54752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54568),sablono$core$update_arglists_$_iter__54565(cljs.core.chunk_rest(s__54566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54568),null);
}
} else {
var args = cljs.core.first(s__54566__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__54565(cljs.core.rest(s__54566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54753 = arguments.length;
var i__4790__auto___54754 = (0);
while(true){
if((i__4790__auto___54754 < len__4789__auto___54753)){
args__4795__auto__.push((arguments[i__4790__auto___54754]));

var G__54755 = (i__4790__auto___54754 + (1));
i__4790__auto___54754 = G__54755;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__54570(s__54571){
return (new cljs.core.LazySeq(null,(function (){
var s__54571__$1 = s__54571;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54571__$1);
if(temp__5735__auto__){
var s__54571__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54571__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54571__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54573 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54572 = (0);
while(true){
if((i__54572 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54572);
cljs.core.chunk_append(b__54573,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__54757 = (i__54572 + (1));
i__54572 = G__54757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54573),sablono$core$iter__54570(cljs.core.chunk_rest(s__54571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54573),null);
}
} else {
var style = cljs.core.first(s__54571__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__54570(cljs.core.rest(s__54571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq54569){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54569));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__54574 = goog.dom.getDocument().body;
var G__54575 = (function (){var G__54576 = "script";
var G__54577 = ({"src": src});
return goog.dom.createDom(G__54576,G__54577);
})();
return goog.dom.appendChild(G__54574,G__54575);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to54578 = (function sablono$core$link_to54578(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54768 = arguments.length;
var i__4790__auto___54769 = (0);
while(true){
if((i__4790__auto___54769 < len__4789__auto___54768)){
args__4795__auto__.push((arguments[i__4790__auto___54769]));

var G__54770 = (i__4790__auto___54769 + (1));
i__4790__auto___54769 = G__54770;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to54578.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to54578.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to54578.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to54578.cljs$lang$applyTo = (function (seq54579){
var G__54580 = cljs.core.first(seq54579);
var seq54579__$1 = cljs.core.next(seq54579);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54580,seq54579__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to54578);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to54585 = (function sablono$core$mail_to54585(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54773 = arguments.length;
var i__4790__auto___54774 = (0);
while(true){
if((i__4790__auto___54774 < len__4789__auto___54773)){
args__4795__auto__.push((arguments[i__4790__auto___54774]));

var G__54775 = (i__4790__auto___54774 + (1));
i__4790__auto___54774 = G__54775;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to54585.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to54585.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__54591){
var vec__54593 = p__54591;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54593,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to54585.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to54585.cljs$lang$applyTo = (function (seq54586){
var G__54587 = cljs.core.first(seq54586);
var seq54586__$1 = cljs.core.next(seq54586);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54587,seq54586__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to54585);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list54598 = (function sablono$core$unordered_list54598(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list54598_$_iter__54602(s__54603){
return (new cljs.core.LazySeq(null,(function (){
var s__54603__$1 = s__54603;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54603__$1);
if(temp__5735__auto__){
var s__54603__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54603__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54603__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54605 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54604 = (0);
while(true){
if((i__54604 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54604);
cljs.core.chunk_append(b__54605,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__54820 = (i__54604 + (1));
i__54604 = G__54820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54605),sablono$core$unordered_list54598_$_iter__54602(cljs.core.chunk_rest(s__54603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54605),null);
}
} else {
var x = cljs.core.first(s__54603__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list54598_$_iter__54602(cljs.core.rest(s__54603__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list54598);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list54609 = (function sablono$core$ordered_list54609(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list54609_$_iter__54610(s__54611){
return (new cljs.core.LazySeq(null,(function (){
var s__54611__$1 = s__54611;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54611__$1);
if(temp__5735__auto__){
var s__54611__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54611__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54611__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54613 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54612 = (0);
while(true){
if((i__54612 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54612);
cljs.core.chunk_append(b__54613,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__54822 = (i__54612 + (1));
i__54612 = G__54822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54613),sablono$core$ordered_list54609_$_iter__54610(cljs.core.chunk_rest(s__54611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54613),null);
}
} else {
var x = cljs.core.first(s__54611__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list54609_$_iter__54610(cljs.core.rest(s__54611__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list54609);
/**
 * Create an image element.
 */
sablono.core.image54620 = (function sablono$core$image54620(var_args){
var G__54622 = arguments.length;
switch (G__54622) {
case 1:
return sablono.core.image54620.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image54620.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image54620.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image54620.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image54620.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image54620);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__54623_SHARP_,p2__54624_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54623_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__54624_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__54625_SHARP_,p2__54626_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54625_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__54626_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__54628 = arguments.length;
switch (G__54628) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field54629 = (function sablono$core$color_field54629(var_args){
var G__54631 = arguments.length;
switch (G__54631) {
case 1:
return sablono.core.color_field54629.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field54629.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field54629.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__54554__auto__);
}));

(sablono.core.color_field54629.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.color_field54629.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field54629);

/**
 * Creates a date input field.
 */
sablono.core.date_field54632 = (function sablono$core$date_field54632(var_args){
var G__54634 = arguments.length;
switch (G__54634) {
case 1:
return sablono.core.date_field54632.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field54632.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field54632.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__54554__auto__);
}));

(sablono.core.date_field54632.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.date_field54632.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field54632);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field54635 = (function sablono$core$datetime_field54635(var_args){
var G__54637 = arguments.length;
switch (G__54637) {
case 1:
return sablono.core.datetime_field54635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field54635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field54635.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__54554__auto__);
}));

(sablono.core.datetime_field54635.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.datetime_field54635.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field54635);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field54638 = (function sablono$core$datetime_local_field54638(var_args){
var G__54640 = arguments.length;
switch (G__54640) {
case 1:
return sablono.core.datetime_local_field54638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field54638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field54638.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__54554__auto__);
}));

(sablono.core.datetime_local_field54638.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.datetime_local_field54638.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field54638);

/**
 * Creates a email input field.
 */
sablono.core.email_field54643 = (function sablono$core$email_field54643(var_args){
var G__54645 = arguments.length;
switch (G__54645) {
case 1:
return sablono.core.email_field54643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field54643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field54643.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__54554__auto__);
}));

(sablono.core.email_field54643.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.email_field54643.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field54643);

/**
 * Creates a file input field.
 */
sablono.core.file_field54646 = (function sablono$core$file_field54646(var_args){
var G__54648 = arguments.length;
switch (G__54648) {
case 1:
return sablono.core.file_field54646.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field54646.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field54646.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__54554__auto__);
}));

(sablono.core.file_field54646.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.file_field54646.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field54646);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field54650 = (function sablono$core$hidden_field54650(var_args){
var G__54652 = arguments.length;
switch (G__54652) {
case 1:
return sablono.core.hidden_field54650.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field54650.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field54650.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__54554__auto__);
}));

(sablono.core.hidden_field54650.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.hidden_field54650.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field54650);

/**
 * Creates a month input field.
 */
sablono.core.month_field54653 = (function sablono$core$month_field54653(var_args){
var G__54658 = arguments.length;
switch (G__54658) {
case 1:
return sablono.core.month_field54653.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field54653.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field54653.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__54554__auto__);
}));

(sablono.core.month_field54653.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.month_field54653.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field54653);

/**
 * Creates a number input field.
 */
sablono.core.number_field54659 = (function sablono$core$number_field54659(var_args){
var G__54661 = arguments.length;
switch (G__54661) {
case 1:
return sablono.core.number_field54659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field54659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field54659.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__54554__auto__);
}));

(sablono.core.number_field54659.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.number_field54659.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field54659);

/**
 * Creates a password input field.
 */
sablono.core.password_field54662 = (function sablono$core$password_field54662(var_args){
var G__54664 = arguments.length;
switch (G__54664) {
case 1:
return sablono.core.password_field54662.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field54662.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field54662.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__54554__auto__);
}));

(sablono.core.password_field54662.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.password_field54662.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field54662);

/**
 * Creates a range input field.
 */
sablono.core.range_field54665 = (function sablono$core$range_field54665(var_args){
var G__54667 = arguments.length;
switch (G__54667) {
case 1:
return sablono.core.range_field54665.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field54665.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field54665.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__54554__auto__);
}));

(sablono.core.range_field54665.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.range_field54665.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field54665);

/**
 * Creates a search input field.
 */
sablono.core.search_field54668 = (function sablono$core$search_field54668(var_args){
var G__54673 = arguments.length;
switch (G__54673) {
case 1:
return sablono.core.search_field54668.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field54668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field54668.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__54554__auto__);
}));

(sablono.core.search_field54668.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.search_field54668.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field54668);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field54674 = (function sablono$core$tel_field54674(var_args){
var G__54676 = arguments.length;
switch (G__54676) {
case 1:
return sablono.core.tel_field54674.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field54674.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field54674.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__54554__auto__);
}));

(sablono.core.tel_field54674.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.tel_field54674.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field54674);

/**
 * Creates a text input field.
 */
sablono.core.text_field54680 = (function sablono$core$text_field54680(var_args){
var G__54682 = arguments.length;
switch (G__54682) {
case 1:
return sablono.core.text_field54680.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field54680.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field54680.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__54554__auto__);
}));

(sablono.core.text_field54680.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.text_field54680.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field54680);

/**
 * Creates a time input field.
 */
sablono.core.time_field54683 = (function sablono$core$time_field54683(var_args){
var G__54685 = arguments.length;
switch (G__54685) {
case 1:
return sablono.core.time_field54683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field54683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field54683.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__54554__auto__);
}));

(sablono.core.time_field54683.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.time_field54683.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field54683);

/**
 * Creates a url input field.
 */
sablono.core.url_field54686 = (function sablono$core$url_field54686(var_args){
var G__54688 = arguments.length;
switch (G__54688) {
case 1:
return sablono.core.url_field54686.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field54686.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field54686.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__54554__auto__);
}));

(sablono.core.url_field54686.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.url_field54686.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field54686);

/**
 * Creates a week input field.
 */
sablono.core.week_field54690 = (function sablono$core$week_field54690(var_args){
var G__54692 = arguments.length;
switch (G__54692) {
case 1:
return sablono.core.week_field54690.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field54690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field54690.cljs$core$IFn$_invoke$arity$1 = (function (name__54554__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__54554__auto__);
}));

(sablono.core.week_field54690.cljs$core$IFn$_invoke$arity$2 = (function (name__54554__auto__,value__54555__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__54554__auto__,value__54555__auto__);
}));

(sablono.core.week_field54690.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field54690);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box54693 = (function sablono$core$check_box54693(var_args){
var G__54695 = arguments.length;
switch (G__54695) {
case 1:
return sablono.core.check_box54693.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box54693.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box54693.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box54693.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box54693.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box54693.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box54693.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box54693);
/**
 * Creates a radio button.
 */
sablono.core.radio_button54697 = (function sablono$core$radio_button54697(var_args){
var G__54700 = arguments.length;
switch (G__54700) {
case 1:
return sablono.core.radio_button54697.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button54697.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button54697.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button54697.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button54697.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button54697.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button54697.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button54697);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__54709 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__54709);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options54710 = (function sablono$core$select_options54710(coll){
var iter__4582__auto__ = (function sablono$core$select_options54710_$_iter__54711(s__54712){
return (new cljs.core.LazySeq(null,(function (){
var s__54712__$1 = s__54712;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54712__$1);
if(temp__5735__auto__){
var s__54712__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54712__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54712__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54714 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54713 = (0);
while(true){
if((i__54713 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54713);
cljs.core.chunk_append(b__54714,((cljs.core.sequential_QMARK_(x))?(function (){var vec__54717 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54717,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54717,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54717,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options54710.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options54710.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options54710.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__54881 = (i__54713 + (1));
i__54713 = G__54881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54714),sablono$core$select_options54710_$_iter__54711(cljs.core.chunk_rest(s__54712__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54714),null);
}
} else {
var x = cljs.core.first(s__54712__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__54722 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54722,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54722,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54722,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options54710.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options54710.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options54710.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options54710_$_iter__54711(cljs.core.rest(s__54712__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options54710);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down54725 = (function sablono$core$drop_down54725(var_args){
var G__54727 = arguments.length;
switch (G__54727) {
case 2:
return sablono.core.drop_down54725.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down54725.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down54725.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down54725.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down54725.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down54725.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down54725);
/**
 * Creates a text area element.
 */
sablono.core.text_area54730 = (function sablono$core$text_area54730(var_args){
var G__54732 = arguments.length;
switch (G__54732) {
case 1:
return sablono.core.text_area54730.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area54730.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area54730.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area54730.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area54730.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area54730);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label54733 = (function sablono$core$label54733(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label54733);
/**
 * Creates a submit button.
 */
sablono.core.submit_button54735 = (function sablono$core$submit_button54735(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button54735);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button54736 = (function sablono$core$reset_button54736(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button54736);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to54737 = (function sablono$core$form_to54737(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54905 = arguments.length;
var i__4790__auto___54906 = (0);
while(true){
if((i__4790__auto___54906 < len__4789__auto___54905)){
args__4795__auto__.push((arguments[i__4790__auto___54906]));

var G__54907 = (i__4790__auto___54906 + (1));
i__4790__auto___54906 = G__54907;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to54737.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to54737.cljs$core$IFn$_invoke$arity$variadic = (function (p__54740,body){
var vec__54741 = p__54740;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54741,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54741,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__54744 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__54745 = "_method";
var G__54746 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__54744,G__54745,G__54746) : sablono.core.hidden_field.call(null,G__54744,G__54745,G__54746));
})()], null)),body));
}));

(sablono.core.form_to54737.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to54737.cljs$lang$applyTo = (function (seq54738){
var G__54739 = cljs.core.first(seq54738);
var seq54738__$1 = cljs.core.next(seq54738);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54739,seq54738__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to54737);

//# sourceMappingURL=sablono.core.js.map
