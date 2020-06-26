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
var G__38205__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37969 = cljs.core.seq(vec__37968);
var first__37970 = cljs.core.first(seq__37969);
var seq__37969__$1 = cljs.core.next(seq__37969);
var tag = first__37970;
var body = seq__37969__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38209__i = 0, G__38209__a = new Array(arguments.length -  0);
while (G__38209__i < G__38209__a.length) {G__38209__a[G__38209__i] = arguments[G__38209__i + 0]; ++G__38209__i;}
  args = new cljs.core.IndexedSeq(G__38209__a,0,null);
} 
return G__38205__delegate.call(this,args);};
G__38205.cljs$lang$maxFixedArity = 0;
G__38205.cljs$lang$applyTo = (function (arglist__38210){
var args = cljs.core.seq(arglist__38210);
return G__38205__delegate(args);
});
G__38205.cljs$core$IFn$_invoke$arity$variadic = G__38205__delegate;
return G__38205;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37973(s__37974){
return (new cljs.core.LazySeq(null,(function (){
var s__37974__$1 = s__37974;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37974__$1);
if(temp__5735__auto__){
var s__37974__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37974__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37974__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37976 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37975 = (0);
while(true){
if((i__37975 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37975);
cljs.core.chunk_append(b__37976,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38212 = (i__37975 + (1));
i__37975 = G__38212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37976),sablono$core$update_arglists_$_iter__37973(cljs.core.chunk_rest(s__37974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37976),null);
}
} else {
var args = cljs.core.first(s__37974__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37973(cljs.core.rest(s__37974__$2)));
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
var len__4789__auto___38215 = arguments.length;
var i__4790__auto___38216 = (0);
while(true){
if((i__4790__auto___38216 < len__4789__auto___38215)){
args__4795__auto__.push((arguments[i__4790__auto___38216]));

var G__38217 = (i__4790__auto___38216 + (1));
i__4790__auto___38216 = G__38217;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__37983(s__37984){
return (new cljs.core.LazySeq(null,(function (){
var s__37984__$1 = s__37984;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37984__$1);
if(temp__5735__auto__){
var s__37984__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37984__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37984__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37986 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37985 = (0);
while(true){
if((i__37985 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37985);
cljs.core.chunk_append(b__37986,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38221 = (i__37985 + (1));
i__37985 = G__38221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37986),sablono$core$iter__37983(cljs.core.chunk_rest(s__37984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37986),null);
}
} else {
var style = cljs.core.first(s__37984__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37983(cljs.core.rest(s__37984__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37980){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37980));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37989 = goog.dom.getDocument().body;
var G__37990 = (function (){var G__37992 = "script";
var G__37993 = ({"src": src});
return goog.dom.createDom(G__37992,G__37993);
})();
return goog.dom.appendChild(G__37989,G__37990);
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
sablono.core.link_to37996 = (function sablono$core$link_to37996(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38227 = arguments.length;
var i__4790__auto___38228 = (0);
while(true){
if((i__4790__auto___38228 < len__4789__auto___38227)){
args__4795__auto__.push((arguments[i__4790__auto___38228]));

var G__38230 = (i__4790__auto___38228 + (1));
i__4790__auto___38228 = G__38230;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37996.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to37996.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to37996.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to37996.cljs$lang$applyTo = (function (seq37997){
var G__37999 = cljs.core.first(seq37997);
var seq37997__$1 = cljs.core.next(seq37997);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37999,seq37997__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to37996);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38003 = (function sablono$core$mail_to38003(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38232 = arguments.length;
var i__4790__auto___38233 = (0);
while(true){
if((i__4790__auto___38233 < len__4789__auto___38232)){
args__4795__auto__.push((arguments[i__4790__auto___38233]));

var G__38234 = (i__4790__auto___38233 + (1));
i__4790__auto___38233 = G__38234;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38003.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to38003.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38008){
var vec__38009 = p__38008;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38009,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to38003.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to38003.cljs$lang$applyTo = (function (seq38005){
var G__38006 = cljs.core.first(seq38005);
var seq38005__$1 = cljs.core.next(seq38005);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38006,seq38005__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38003);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38013 = (function sablono$core$unordered_list38013(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list38013_$_iter__38015(s__38016){
return (new cljs.core.LazySeq(null,(function (){
var s__38016__$1 = s__38016;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38016__$1);
if(temp__5735__auto__){
var s__38016__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38016__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38016__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38018 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38017 = (0);
while(true){
if((i__38017 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38017);
cljs.core.chunk_append(b__38018,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38238 = (i__38017 + (1));
i__38017 = G__38238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38018),sablono$core$unordered_list38013_$_iter__38015(cljs.core.chunk_rest(s__38016__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38018),null);
}
} else {
var x = cljs.core.first(s__38016__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38013_$_iter__38015(cljs.core.rest(s__38016__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38013);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38021 = (function sablono$core$ordered_list38021(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list38021_$_iter__38023(s__38024){
return (new cljs.core.LazySeq(null,(function (){
var s__38024__$1 = s__38024;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38024__$1);
if(temp__5735__auto__){
var s__38024__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38024__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38024__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38026 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38025 = (0);
while(true){
if((i__38025 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38025);
cljs.core.chunk_append(b__38026,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38242 = (i__38025 + (1));
i__38025 = G__38242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38026),sablono$core$ordered_list38021_$_iter__38023(cljs.core.chunk_rest(s__38024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38026),null);
}
} else {
var x = cljs.core.first(s__38024__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38021_$_iter__38023(cljs.core.rest(s__38024__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38021);
/**
 * Create an image element.
 */
sablono.core.image38031 = (function sablono$core$image38031(var_args){
var G__38033 = arguments.length;
switch (G__38033) {
case 1:
return sablono.core.image38031.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38031.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image38031.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image38031.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image38031.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38031);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38038_SHARP_,p2__38039_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38038_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38039_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38042_SHARP_,p2__38043_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38042_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38043_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38047 = arguments.length;
switch (G__38047) {
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
sablono.core.color_field38048 = (function sablono$core$color_field38048(var_args){
var G__38050 = arguments.length;
switch (G__38050) {
case 1:
return sablono.core.color_field38048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38048.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37947__auto__);
}));

(sablono.core.color_field38048.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.color_field38048.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38048);

/**
 * Creates a date input field.
 */
sablono.core.date_field38051 = (function sablono$core$date_field38051(var_args){
var G__38053 = arguments.length;
switch (G__38053) {
case 1:
return sablono.core.date_field38051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38051.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37947__auto__);
}));

(sablono.core.date_field38051.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.date_field38051.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38051);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38054 = (function sablono$core$datetime_field38054(var_args){
var G__38056 = arguments.length;
switch (G__38056) {
case 1:
return sablono.core.datetime_field38054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38054.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37947__auto__);
}));

(sablono.core.datetime_field38054.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.datetime_field38054.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38054);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38057 = (function sablono$core$datetime_local_field38057(var_args){
var G__38059 = arguments.length;
switch (G__38059) {
case 1:
return sablono.core.datetime_local_field38057.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38057.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38057.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37947__auto__);
}));

(sablono.core.datetime_local_field38057.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.datetime_local_field38057.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38057);

/**
 * Creates a email input field.
 */
sablono.core.email_field38060 = (function sablono$core$email_field38060(var_args){
var G__38062 = arguments.length;
switch (G__38062) {
case 1:
return sablono.core.email_field38060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38060.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37947__auto__);
}));

(sablono.core.email_field38060.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.email_field38060.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38060);

/**
 * Creates a file input field.
 */
sablono.core.file_field38063 = (function sablono$core$file_field38063(var_args){
var G__38065 = arguments.length;
switch (G__38065) {
case 1:
return sablono.core.file_field38063.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38063.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38063.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37947__auto__);
}));

(sablono.core.file_field38063.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.file_field38063.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38063);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38067 = (function sablono$core$hidden_field38067(var_args){
var G__38069 = arguments.length;
switch (G__38069) {
case 1:
return sablono.core.hidden_field38067.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38067.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38067.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37947__auto__);
}));

(sablono.core.hidden_field38067.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.hidden_field38067.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38067);

/**
 * Creates a month input field.
 */
sablono.core.month_field38073 = (function sablono$core$month_field38073(var_args){
var G__38077 = arguments.length;
switch (G__38077) {
case 1:
return sablono.core.month_field38073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38073.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37947__auto__);
}));

(sablono.core.month_field38073.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.month_field38073.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38073);

/**
 * Creates a number input field.
 */
sablono.core.number_field38081 = (function sablono$core$number_field38081(var_args){
var G__38084 = arguments.length;
switch (G__38084) {
case 1:
return sablono.core.number_field38081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38081.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37947__auto__);
}));

(sablono.core.number_field38081.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.number_field38081.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38081);

/**
 * Creates a password input field.
 */
sablono.core.password_field38087 = (function sablono$core$password_field38087(var_args){
var G__38089 = arguments.length;
switch (G__38089) {
case 1:
return sablono.core.password_field38087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38087.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37947__auto__);
}));

(sablono.core.password_field38087.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.password_field38087.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38087);

/**
 * Creates a range input field.
 */
sablono.core.range_field38093 = (function sablono$core$range_field38093(var_args){
var G__38095 = arguments.length;
switch (G__38095) {
case 1:
return sablono.core.range_field38093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38093.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37947__auto__);
}));

(sablono.core.range_field38093.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.range_field38093.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38093);

/**
 * Creates a search input field.
 */
sablono.core.search_field38097 = (function sablono$core$search_field38097(var_args){
var G__38099 = arguments.length;
switch (G__38099) {
case 1:
return sablono.core.search_field38097.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38097.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38097.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37947__auto__);
}));

(sablono.core.search_field38097.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.search_field38097.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38097);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38103 = (function sablono$core$tel_field38103(var_args){
var G__38107 = arguments.length;
switch (G__38107) {
case 1:
return sablono.core.tel_field38103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38103.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37947__auto__);
}));

(sablono.core.tel_field38103.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.tel_field38103.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38103);

/**
 * Creates a text input field.
 */
sablono.core.text_field38109 = (function sablono$core$text_field38109(var_args){
var G__38113 = arguments.length;
switch (G__38113) {
case 1:
return sablono.core.text_field38109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38109.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37947__auto__);
}));

(sablono.core.text_field38109.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.text_field38109.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38109);

/**
 * Creates a time input field.
 */
sablono.core.time_field38115 = (function sablono$core$time_field38115(var_args){
var G__38117 = arguments.length;
switch (G__38117) {
case 1:
return sablono.core.time_field38115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38115.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37947__auto__);
}));

(sablono.core.time_field38115.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.time_field38115.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38115);

/**
 * Creates a url input field.
 */
sablono.core.url_field38120 = (function sablono$core$url_field38120(var_args){
var G__38124 = arguments.length;
switch (G__38124) {
case 1:
return sablono.core.url_field38120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38120.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37947__auto__);
}));

(sablono.core.url_field38120.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.url_field38120.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38120);

/**
 * Creates a week input field.
 */
sablono.core.week_field38128 = (function sablono$core$week_field38128(var_args){
var G__38132 = arguments.length;
switch (G__38132) {
case 1:
return sablono.core.week_field38128.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38128.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38128.cljs$core$IFn$_invoke$arity$1 = (function (name__37947__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37947__auto__);
}));

(sablono.core.week_field38128.cljs$core$IFn$_invoke$arity$2 = (function (name__37947__auto__,value__37948__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37947__auto__,value__37948__auto__);
}));

(sablono.core.week_field38128.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38128);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38136 = (function sablono$core$check_box38136(var_args){
var G__38139 = arguments.length;
switch (G__38139) {
case 1:
return sablono.core.check_box38136.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38136.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38136.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38136.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38136.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38136.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38136.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38136);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38143 = (function sablono$core$radio_button38143(var_args){
var G__38146 = arguments.length;
switch (G__38146) {
case 1:
return sablono.core.radio_button38143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38143.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38143.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38143.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38143.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38143.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38143);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38150 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38150);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38152 = (function sablono$core$select_options38152(coll){
var iter__4582__auto__ = (function sablono$core$select_options38152_$_iter__38153(s__38154){
return (new cljs.core.LazySeq(null,(function (){
var s__38154__$1 = s__38154;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38154__$1);
if(temp__5735__auto__){
var s__38154__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38154__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38154__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38156 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38155 = (0);
while(true){
if((i__38155 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38155);
cljs.core.chunk_append(b__38156,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38161 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38161,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38161,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38161,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38152.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38152.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38152.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38266 = (i__38155 + (1));
i__38155 = G__38266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38156),sablono$core$select_options38152_$_iter__38153(cljs.core.chunk_rest(s__38154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38156),null);
}
} else {
var x = cljs.core.first(s__38154__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38164 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38152.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38152.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38152.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38152_$_iter__38153(cljs.core.rest(s__38154__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38152);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38168 = (function sablono$core$drop_down38168(var_args){
var G__38172 = arguments.length;
switch (G__38172) {
case 2:
return sablono.core.drop_down38168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38168.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38168.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38168.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38168.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38168.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38168);
/**
 * Creates a text area element.
 */
sablono.core.text_area38175 = (function sablono$core$text_area38175(var_args){
var G__38179 = arguments.length;
switch (G__38179) {
case 1:
return sablono.core.text_area38175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38175.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38175.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38175.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38175);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38182 = (function sablono$core$label38182(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38182);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38184 = (function sablono$core$submit_button38184(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38184);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38186 = (function sablono$core$reset_button38186(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38186);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38189 = (function sablono$core$form_to38189(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38269 = arguments.length;
var i__4790__auto___38270 = (0);
while(true){
if((i__4790__auto___38270 < len__4789__auto___38269)){
args__4795__auto__.push((arguments[i__4790__auto___38270]));

var G__38271 = (i__4790__auto___38270 + (1));
i__4790__auto___38270 = G__38271;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38189.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38189.cljs$core$IFn$_invoke$arity$variadic = (function (p__38196,body){
var vec__38197 = p__38196;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38197,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38197,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38200 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38201 = "_method";
var G__38202 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38200,G__38201,G__38202) : sablono.core.hidden_field.call(null,G__38200,G__38201,G__38202));
})()], null)),body));
}));

(sablono.core.form_to38189.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38189.cljs$lang$applyTo = (function (seq38192){
var G__38193 = cljs.core.first(seq38192);
var seq38192__$1 = cljs.core.next(seq38192);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38193,seq38192__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38189);

//# sourceMappingURL=sablono.core.js.map
