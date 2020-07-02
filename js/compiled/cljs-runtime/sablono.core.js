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
var G__71419__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__71171 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__71172 = cljs.core.seq(vec__71171);
var first__71173 = cljs.core.first(seq__71172);
var seq__71172__$1 = cljs.core.next(seq__71172);
var tag = first__71173;
var body = seq__71172__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__71419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71420__i = 0, G__71420__a = new Array(arguments.length -  0);
while (G__71420__i < G__71420__a.length) {G__71420__a[G__71420__i] = arguments[G__71420__i + 0]; ++G__71420__i;}
  args = new cljs.core.IndexedSeq(G__71420__a,0,null);
} 
return G__71419__delegate.call(this,args);};
G__71419.cljs$lang$maxFixedArity = 0;
G__71419.cljs$lang$applyTo = (function (arglist__71421){
var args = cljs.core.seq(arglist__71421);
return G__71419__delegate(args);
});
G__71419.cljs$core$IFn$_invoke$arity$variadic = G__71419__delegate;
return G__71419;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__71174(s__71175){
return (new cljs.core.LazySeq(null,(function (){
var s__71175__$1 = s__71175;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__71175__$1);
if(temp__5735__auto__){
var s__71175__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71175__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__71175__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__71177 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__71176 = (0);
while(true){
if((i__71176 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__71176);
cljs.core.chunk_append(b__71177,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__71423 = (i__71176 + (1));
i__71176 = G__71423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71177),sablono$core$update_arglists_$_iter__71174(cljs.core.chunk_rest(s__71175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71177),null);
}
} else {
var args = cljs.core.first(s__71175__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__71174(cljs.core.rest(s__71175__$2)));
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
var len__4789__auto___71424 = arguments.length;
var i__4790__auto___71425 = (0);
while(true){
if((i__4790__auto___71425 < len__4789__auto___71424)){
args__4795__auto__.push((arguments[i__4790__auto___71425]));

var G__71426 = (i__4790__auto___71425 + (1));
i__4790__auto___71425 = G__71426;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__71183(s__71184){
return (new cljs.core.LazySeq(null,(function (){
var s__71184__$1 = s__71184;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__71184__$1);
if(temp__5735__auto__){
var s__71184__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71184__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__71184__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__71186 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__71185 = (0);
while(true){
if((i__71185 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__71185);
cljs.core.chunk_append(b__71186,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__71427 = (i__71185 + (1));
i__71185 = G__71427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71186),sablono$core$iter__71183(cljs.core.chunk_rest(s__71184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71186),null);
}
} else {
var style = cljs.core.first(s__71184__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__71183(cljs.core.rest(s__71184__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq71182){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71182));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__71189 = goog.dom.getDocument().body;
var G__71190 = (function (){var G__71191 = "script";
var G__71192 = ({"src": src});
return goog.dom.createDom(G__71191,G__71192);
})();
return goog.dom.appendChild(G__71189,G__71190);
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
sablono.core.link_to71193 = (function sablono$core$link_to71193(var_args){
var args__4795__auto__ = [];
var len__4789__auto___71429 = arguments.length;
var i__4790__auto___71430 = (0);
while(true){
if((i__4790__auto___71430 < len__4789__auto___71429)){
args__4795__auto__.push((arguments[i__4790__auto___71430]));

var G__71431 = (i__4790__auto___71430 + (1));
i__4790__auto___71430 = G__71431;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to71193.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to71193.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to71193.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to71193.cljs$lang$applyTo = (function (seq71194){
var G__71195 = cljs.core.first(seq71194);
var seq71194__$1 = cljs.core.next(seq71194);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71195,seq71194__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to71193);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to71198 = (function sablono$core$mail_to71198(var_args){
var args__4795__auto__ = [];
var len__4789__auto___71433 = arguments.length;
var i__4790__auto___71434 = (0);
while(true){
if((i__4790__auto___71434 < len__4789__auto___71433)){
args__4795__auto__.push((arguments[i__4790__auto___71434]));

var G__71435 = (i__4790__auto___71434 + (1));
i__4790__auto___71434 = G__71435;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to71198.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to71198.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__71201){
var vec__71202 = p__71201;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71202,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to71198.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to71198.cljs$lang$applyTo = (function (seq71199){
var G__71200 = cljs.core.first(seq71199);
var seq71199__$1 = cljs.core.next(seq71199);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71200,seq71199__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to71198);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list71205 = (function sablono$core$unordered_list71205(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list71205_$_iter__71207(s__71208){
return (new cljs.core.LazySeq(null,(function (){
var s__71208__$1 = s__71208;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__71208__$1);
if(temp__5735__auto__){
var s__71208__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71208__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__71208__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__71210 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__71209 = (0);
while(true){
if((i__71209 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__71209);
cljs.core.chunk_append(b__71210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__71444 = (i__71209 + (1));
i__71209 = G__71444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71210),sablono$core$unordered_list71205_$_iter__71207(cljs.core.chunk_rest(s__71208__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71210),null);
}
} else {
var x = cljs.core.first(s__71208__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list71205_$_iter__71207(cljs.core.rest(s__71208__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list71205);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list71212 = (function sablono$core$ordered_list71212(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list71212_$_iter__71213(s__71214){
return (new cljs.core.LazySeq(null,(function (){
var s__71214__$1 = s__71214;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__71214__$1);
if(temp__5735__auto__){
var s__71214__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71214__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__71214__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__71216 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__71215 = (0);
while(true){
if((i__71215 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__71215);
cljs.core.chunk_append(b__71216,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__71463 = (i__71215 + (1));
i__71215 = G__71463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71216),sablono$core$ordered_list71212_$_iter__71213(cljs.core.chunk_rest(s__71214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71216),null);
}
} else {
var x = cljs.core.first(s__71214__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list71212_$_iter__71213(cljs.core.rest(s__71214__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list71212);
/**
 * Create an image element.
 */
sablono.core.image71217 = (function sablono$core$image71217(var_args){
var G__71219 = arguments.length;
switch (G__71219) {
case 1:
return sablono.core.image71217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image71217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image71217.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image71217.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image71217.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image71217);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__71223_SHARP_,p2__71224_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__71223_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__71224_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__71225_SHARP_,p2__71226_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__71225_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__71226_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__71230 = arguments.length;
switch (G__71230) {
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
sablono.core.color_field71233 = (function sablono$core$color_field71233(var_args){
var G__71235 = arguments.length;
switch (G__71235) {
case 1:
return sablono.core.color_field71233.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field71233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field71233.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__71163__auto__);
}));

(sablono.core.color_field71233.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.color_field71233.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field71233);

/**
 * Creates a date input field.
 */
sablono.core.date_field71237 = (function sablono$core$date_field71237(var_args){
var G__71240 = arguments.length;
switch (G__71240) {
case 1:
return sablono.core.date_field71237.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field71237.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field71237.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__71163__auto__);
}));

(sablono.core.date_field71237.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.date_field71237.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field71237);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field71245 = (function sablono$core$datetime_field71245(var_args){
var G__71251 = arguments.length;
switch (G__71251) {
case 1:
return sablono.core.datetime_field71245.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field71245.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field71245.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__71163__auto__);
}));

(sablono.core.datetime_field71245.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.datetime_field71245.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field71245);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field71256 = (function sablono$core$datetime_local_field71256(var_args){
var G__71261 = arguments.length;
switch (G__71261) {
case 1:
return sablono.core.datetime_local_field71256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field71256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field71256.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__71163__auto__);
}));

(sablono.core.datetime_local_field71256.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.datetime_local_field71256.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field71256);

/**
 * Creates a email input field.
 */
sablono.core.email_field71266 = (function sablono$core$email_field71266(var_args){
var G__71269 = arguments.length;
switch (G__71269) {
case 1:
return sablono.core.email_field71266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field71266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field71266.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__71163__auto__);
}));

(sablono.core.email_field71266.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.email_field71266.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field71266);

/**
 * Creates a file input field.
 */
sablono.core.file_field71271 = (function sablono$core$file_field71271(var_args){
var G__71273 = arguments.length;
switch (G__71273) {
case 1:
return sablono.core.file_field71271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field71271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field71271.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__71163__auto__);
}));

(sablono.core.file_field71271.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.file_field71271.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field71271);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field71282 = (function sablono$core$hidden_field71282(var_args){
var G__71288 = arguments.length;
switch (G__71288) {
case 1:
return sablono.core.hidden_field71282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field71282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field71282.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__71163__auto__);
}));

(sablono.core.hidden_field71282.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.hidden_field71282.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field71282);

/**
 * Creates a month input field.
 */
sablono.core.month_field71292 = (function sablono$core$month_field71292(var_args){
var G__71297 = arguments.length;
switch (G__71297) {
case 1:
return sablono.core.month_field71292.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field71292.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field71292.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__71163__auto__);
}));

(sablono.core.month_field71292.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.month_field71292.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field71292);

/**
 * Creates a number input field.
 */
sablono.core.number_field71298 = (function sablono$core$number_field71298(var_args){
var G__71302 = arguments.length;
switch (G__71302) {
case 1:
return sablono.core.number_field71298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field71298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field71298.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__71163__auto__);
}));

(sablono.core.number_field71298.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.number_field71298.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field71298);

/**
 * Creates a password input field.
 */
sablono.core.password_field71303 = (function sablono$core$password_field71303(var_args){
var G__71305 = arguments.length;
switch (G__71305) {
case 1:
return sablono.core.password_field71303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field71303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field71303.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__71163__auto__);
}));

(sablono.core.password_field71303.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.password_field71303.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field71303);

/**
 * Creates a range input field.
 */
sablono.core.range_field71313 = (function sablono$core$range_field71313(var_args){
var G__71315 = arguments.length;
switch (G__71315) {
case 1:
return sablono.core.range_field71313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field71313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field71313.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__71163__auto__);
}));

(sablono.core.range_field71313.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.range_field71313.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field71313);

/**
 * Creates a search input field.
 */
sablono.core.search_field71322 = (function sablono$core$search_field71322(var_args){
var G__71327 = arguments.length;
switch (G__71327) {
case 1:
return sablono.core.search_field71322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field71322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field71322.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__71163__auto__);
}));

(sablono.core.search_field71322.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.search_field71322.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field71322);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field71330 = (function sablono$core$tel_field71330(var_args){
var G__71332 = arguments.length;
switch (G__71332) {
case 1:
return sablono.core.tel_field71330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field71330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field71330.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__71163__auto__);
}));

(sablono.core.tel_field71330.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.tel_field71330.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field71330);

/**
 * Creates a text input field.
 */
sablono.core.text_field71333 = (function sablono$core$text_field71333(var_args){
var G__71335 = arguments.length;
switch (G__71335) {
case 1:
return sablono.core.text_field71333.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field71333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field71333.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__71163__auto__);
}));

(sablono.core.text_field71333.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.text_field71333.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field71333);

/**
 * Creates a time input field.
 */
sablono.core.time_field71338 = (function sablono$core$time_field71338(var_args){
var G__71340 = arguments.length;
switch (G__71340) {
case 1:
return sablono.core.time_field71338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field71338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field71338.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__71163__auto__);
}));

(sablono.core.time_field71338.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.time_field71338.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field71338);

/**
 * Creates a url input field.
 */
sablono.core.url_field71344 = (function sablono$core$url_field71344(var_args){
var G__71346 = arguments.length;
switch (G__71346) {
case 1:
return sablono.core.url_field71344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field71344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field71344.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__71163__auto__);
}));

(sablono.core.url_field71344.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.url_field71344.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field71344);

/**
 * Creates a week input field.
 */
sablono.core.week_field71347 = (function sablono$core$week_field71347(var_args){
var G__71349 = arguments.length;
switch (G__71349) {
case 1:
return sablono.core.week_field71347.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field71347.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field71347.cljs$core$IFn$_invoke$arity$1 = (function (name__71163__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__71163__auto__);
}));

(sablono.core.week_field71347.cljs$core$IFn$_invoke$arity$2 = (function (name__71163__auto__,value__71164__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__71163__auto__,value__71164__auto__);
}));

(sablono.core.week_field71347.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field71347);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box71353 = (function sablono$core$check_box71353(var_args){
var G__71355 = arguments.length;
switch (G__71355) {
case 1:
return sablono.core.check_box71353.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box71353.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box71353.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box71353.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box71353.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box71353.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box71353.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box71353);
/**
 * Creates a radio button.
 */
sablono.core.radio_button71356 = (function sablono$core$radio_button71356(var_args){
var G__71362 = arguments.length;
switch (G__71362) {
case 1:
return sablono.core.radio_button71356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button71356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button71356.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button71356.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button71356.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button71356.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button71356.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button71356);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__71371 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__71371);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options71374 = (function sablono$core$select_options71374(coll){
var iter__4582__auto__ = (function sablono$core$select_options71374_$_iter__71376(s__71377){
return (new cljs.core.LazySeq(null,(function (){
var s__71377__$1 = s__71377;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__71377__$1);
if(temp__5735__auto__){
var s__71377__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71377__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__71377__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__71379 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__71378 = (0);
while(true){
if((i__71378 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__71378);
cljs.core.chunk_append(b__71379,((cljs.core.sequential_QMARK_(x))?(function (){var vec__71383 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71383,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71383,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71383,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options71374.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options71374.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options71374.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__71541 = (i__71378 + (1));
i__71378 = G__71541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71379),sablono$core$select_options71374_$_iter__71376(cljs.core.chunk_rest(s__71377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71379),null);
}
} else {
var x = cljs.core.first(s__71377__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__71388 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71388,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71388,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71388,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options71374.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options71374.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options71374.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options71374_$_iter__71376(cljs.core.rest(s__71377__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options71374);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down71394 = (function sablono$core$drop_down71394(var_args){
var G__71397 = arguments.length;
switch (G__71397) {
case 2:
return sablono.core.drop_down71394.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down71394.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down71394.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down71394.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down71394.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down71394.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down71394);
/**
 * Creates a text area element.
 */
sablono.core.text_area71400 = (function sablono$core$text_area71400(var_args){
var G__71402 = arguments.length;
switch (G__71402) {
case 1:
return sablono.core.text_area71400.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area71400.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area71400.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area71400.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area71400.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area71400);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label71404 = (function sablono$core$label71404(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label71404);
/**
 * Creates a submit button.
 */
sablono.core.submit_button71405 = (function sablono$core$submit_button71405(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button71405);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button71406 = (function sablono$core$reset_button71406(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button71406);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to71407 = (function sablono$core$form_to71407(var_args){
var args__4795__auto__ = [];
var len__4789__auto___71544 = arguments.length;
var i__4790__auto___71545 = (0);
while(true){
if((i__4790__auto___71545 < len__4789__auto___71544)){
args__4795__auto__.push((arguments[i__4790__auto___71545]));

var G__71546 = (i__4790__auto___71545 + (1));
i__4790__auto___71545 = G__71546;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to71407.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to71407.cljs$core$IFn$_invoke$arity$variadic = (function (p__71411,body){
var vec__71412 = p__71411;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71412,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71412,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__71415 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__71416 = "_method";
var G__71417 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__71415,G__71416,G__71417) : sablono.core.hidden_field.call(null,G__71415,G__71416,G__71417));
})()], null)),body));
}));

(sablono.core.form_to71407.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to71407.cljs$lang$applyTo = (function (seq71409){
var G__71410 = cljs.core.first(seq71409);
var seq71409__$1 = cljs.core.next(seq71409);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71410,seq71409__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to71407);

//# sourceMappingURL=sablono.core.js.map
