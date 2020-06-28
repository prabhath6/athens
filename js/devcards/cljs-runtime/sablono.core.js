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
var G__38210__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37994 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37995 = cljs.core.seq(vec__37994);
var first__37996 = cljs.core.first(seq__37995);
var seq__37995__$1 = cljs.core.next(seq__37995);
var tag = first__37996;
var body = seq__37995__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38213__i = 0, G__38213__a = new Array(arguments.length -  0);
while (G__38213__i < G__38213__a.length) {G__38213__a[G__38213__i] = arguments[G__38213__i + 0]; ++G__38213__i;}
  args = new cljs.core.IndexedSeq(G__38213__a,0,null);
} 
return G__38210__delegate.call(this,args);};
G__38210.cljs$lang$maxFixedArity = 0;
G__38210.cljs$lang$applyTo = (function (arglist__38214){
var args = cljs.core.seq(arglist__38214);
return G__38210__delegate(args);
});
G__38210.cljs$core$IFn$_invoke$arity$variadic = G__38210__delegate;
return G__38210;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37997(s__37998){
return (new cljs.core.LazySeq(null,(function (){
var s__37998__$1 = s__37998;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37998__$1);
if(temp__5735__auto__){
var s__37998__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37998__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37998__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38000 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37999 = (0);
while(true){
if((i__37999 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37999);
cljs.core.chunk_append(b__38000,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38217 = (i__37999 + (1));
i__37999 = G__38217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38000),sablono$core$update_arglists_$_iter__37997(cljs.core.chunk_rest(s__37998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38000),null);
}
} else {
var args = cljs.core.first(s__37998__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37997(cljs.core.rest(s__37998__$2)));
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
var len__4789__auto___38219 = arguments.length;
var i__4790__auto___38220 = (0);
while(true){
if((i__4790__auto___38220 < len__4789__auto___38219)){
args__4795__auto__.push((arguments[i__4790__auto___38220]));

var G__38221 = (i__4790__auto___38220 + (1));
i__4790__auto___38220 = G__38221;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__38002(s__38003){
return (new cljs.core.LazySeq(null,(function (){
var s__38003__$1 = s__38003;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38003__$1);
if(temp__5735__auto__){
var s__38003__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38003__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38003__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38005 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38004 = (0);
while(true){
if((i__38004 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38004);
cljs.core.chunk_append(b__38005,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38226 = (i__38004 + (1));
i__38004 = G__38226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38005),sablono$core$iter__38002(cljs.core.chunk_rest(s__38003__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38005),null);
}
} else {
var style = cljs.core.first(s__38003__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38002(cljs.core.rest(s__38003__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq38001){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38001));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__38011 = goog.dom.getDocument().body;
var G__38012 = (function (){var G__38014 = "script";
var G__38015 = ({"src": src});
return goog.dom.createDom(G__38014,G__38015);
})();
return goog.dom.appendChild(G__38011,G__38012);
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
sablono.core.link_to38017 = (function sablono$core$link_to38017(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38229 = arguments.length;
var i__4790__auto___38230 = (0);
while(true){
if((i__4790__auto___38230 < len__4789__auto___38229)){
args__4795__auto__.push((arguments[i__4790__auto___38230]));

var G__38232 = (i__4790__auto___38230 + (1));
i__4790__auto___38230 = G__38232;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38017.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to38017.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to38017.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to38017.cljs$lang$applyTo = (function (seq38018){
var G__38019 = cljs.core.first(seq38018);
var seq38018__$1 = cljs.core.next(seq38018);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38019,seq38018__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to38017);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38022 = (function sablono$core$mail_to38022(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38234 = arguments.length;
var i__4790__auto___38235 = (0);
while(true){
if((i__4790__auto___38235 < len__4789__auto___38234)){
args__4795__auto__.push((arguments[i__4790__auto___38235]));

var G__38237 = (i__4790__auto___38235 + (1));
i__4790__auto___38235 = G__38237;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38022.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to38022.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38025){
var vec__38026 = p__38025;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38026,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to38022.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to38022.cljs$lang$applyTo = (function (seq38023){
var G__38024 = cljs.core.first(seq38023);
var seq38023__$1 = cljs.core.next(seq38023);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38024,seq38023__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38022);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38029 = (function sablono$core$unordered_list38029(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list38029_$_iter__38030(s__38031){
return (new cljs.core.LazySeq(null,(function (){
var s__38031__$1 = s__38031;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38031__$1);
if(temp__5735__auto__){
var s__38031__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38031__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38031__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38033 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38032 = (0);
while(true){
if((i__38032 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38032);
cljs.core.chunk_append(b__38033,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38241 = (i__38032 + (1));
i__38032 = G__38241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38033),sablono$core$unordered_list38029_$_iter__38030(cljs.core.chunk_rest(s__38031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38033),null);
}
} else {
var x = cljs.core.first(s__38031__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38029_$_iter__38030(cljs.core.rest(s__38031__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38029);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38034 = (function sablono$core$ordered_list38034(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list38034_$_iter__38035(s__38036){
return (new cljs.core.LazySeq(null,(function (){
var s__38036__$1 = s__38036;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38036__$1);
if(temp__5735__auto__){
var s__38036__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38036__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38036__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38038 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38037 = (0);
while(true){
if((i__38037 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38037);
cljs.core.chunk_append(b__38038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38244 = (i__38037 + (1));
i__38037 = G__38244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38038),sablono$core$ordered_list38034_$_iter__38035(cljs.core.chunk_rest(s__38036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38038),null);
}
} else {
var x = cljs.core.first(s__38036__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38034_$_iter__38035(cljs.core.rest(s__38036__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38034);
/**
 * Create an image element.
 */
sablono.core.image38039 = (function sablono$core$image38039(var_args){
var G__38041 = arguments.length;
switch (G__38041) {
case 1:
return sablono.core.image38039.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38039.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image38039.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image38039.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image38039.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38039);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38042_SHARP_,p2__38043_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38042_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38043_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38044_SHARP_,p2__38045_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38044_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38045_SHARP_)].join('');
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
sablono.core.color_field38049 = (function sablono$core$color_field38049(var_args){
var G__38051 = arguments.length;
switch (G__38051) {
case 1:
return sablono.core.color_field38049.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38049.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38049.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37982__auto__);
}));

(sablono.core.color_field38049.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.color_field38049.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38049);

/**
 * Creates a date input field.
 */
sablono.core.date_field38055 = (function sablono$core$date_field38055(var_args){
var G__38057 = arguments.length;
switch (G__38057) {
case 1:
return sablono.core.date_field38055.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38055.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38055.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37982__auto__);
}));

(sablono.core.date_field38055.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.date_field38055.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38055);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38062 = (function sablono$core$datetime_field38062(var_args){
var G__38064 = arguments.length;
switch (G__38064) {
case 1:
return sablono.core.datetime_field38062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38062.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37982__auto__);
}));

(sablono.core.datetime_field38062.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.datetime_field38062.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38062);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38068 = (function sablono$core$datetime_local_field38068(var_args){
var G__38071 = arguments.length;
switch (G__38071) {
case 1:
return sablono.core.datetime_local_field38068.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38068.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38068.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37982__auto__);
}));

(sablono.core.datetime_local_field38068.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.datetime_local_field38068.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38068);

/**
 * Creates a email input field.
 */
sablono.core.email_field38073 = (function sablono$core$email_field38073(var_args){
var G__38076 = arguments.length;
switch (G__38076) {
case 1:
return sablono.core.email_field38073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38073.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37982__auto__);
}));

(sablono.core.email_field38073.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.email_field38073.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38073);

/**
 * Creates a file input field.
 */
sablono.core.file_field38078 = (function sablono$core$file_field38078(var_args){
var G__38080 = arguments.length;
switch (G__38080) {
case 1:
return sablono.core.file_field38078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38078.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37982__auto__);
}));

(sablono.core.file_field38078.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.file_field38078.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38078);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38082 = (function sablono$core$hidden_field38082(var_args){
var G__38084 = arguments.length;
switch (G__38084) {
case 1:
return sablono.core.hidden_field38082.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38082.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38082.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37982__auto__);
}));

(sablono.core.hidden_field38082.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.hidden_field38082.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38082);

/**
 * Creates a month input field.
 */
sablono.core.month_field38087 = (function sablono$core$month_field38087(var_args){
var G__38091 = arguments.length;
switch (G__38091) {
case 1:
return sablono.core.month_field38087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38087.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37982__auto__);
}));

(sablono.core.month_field38087.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.month_field38087.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38087);

/**
 * Creates a number input field.
 */
sablono.core.number_field38094 = (function sablono$core$number_field38094(var_args){
var G__38096 = arguments.length;
switch (G__38096) {
case 1:
return sablono.core.number_field38094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38094.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37982__auto__);
}));

(sablono.core.number_field38094.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.number_field38094.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38094);

/**
 * Creates a password input field.
 */
sablono.core.password_field38099 = (function sablono$core$password_field38099(var_args){
var G__38101 = arguments.length;
switch (G__38101) {
case 1:
return sablono.core.password_field38099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38099.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37982__auto__);
}));

(sablono.core.password_field38099.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.password_field38099.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38099);

/**
 * Creates a range input field.
 */
sablono.core.range_field38103 = (function sablono$core$range_field38103(var_args){
var G__38106 = arguments.length;
switch (G__38106) {
case 1:
return sablono.core.range_field38103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38103.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37982__auto__);
}));

(sablono.core.range_field38103.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.range_field38103.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38103);

/**
 * Creates a search input field.
 */
sablono.core.search_field38108 = (function sablono$core$search_field38108(var_args){
var G__38112 = arguments.length;
switch (G__38112) {
case 1:
return sablono.core.search_field38108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38108.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37982__auto__);
}));

(sablono.core.search_field38108.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.search_field38108.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38108);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38115 = (function sablono$core$tel_field38115(var_args){
var G__38118 = arguments.length;
switch (G__38118) {
case 1:
return sablono.core.tel_field38115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38115.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37982__auto__);
}));

(sablono.core.tel_field38115.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.tel_field38115.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38115);

/**
 * Creates a text input field.
 */
sablono.core.text_field38123 = (function sablono$core$text_field38123(var_args){
var G__38126 = arguments.length;
switch (G__38126) {
case 1:
return sablono.core.text_field38123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38123.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37982__auto__);
}));

(sablono.core.text_field38123.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.text_field38123.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38123);

/**
 * Creates a time input field.
 */
sablono.core.time_field38128 = (function sablono$core$time_field38128(var_args){
var G__38131 = arguments.length;
switch (G__38131) {
case 1:
return sablono.core.time_field38128.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38128.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38128.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37982__auto__);
}));

(sablono.core.time_field38128.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.time_field38128.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38128);

/**
 * Creates a url input field.
 */
sablono.core.url_field38134 = (function sablono$core$url_field38134(var_args){
var G__38136 = arguments.length;
switch (G__38136) {
case 1:
return sablono.core.url_field38134.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38134.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38134.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37982__auto__);
}));

(sablono.core.url_field38134.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.url_field38134.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38134);

/**
 * Creates a week input field.
 */
sablono.core.week_field38138 = (function sablono$core$week_field38138(var_args){
var G__38141 = arguments.length;
switch (G__38141) {
case 1:
return sablono.core.week_field38138.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38138.cljs$core$IFn$_invoke$arity$1 = (function (name__37982__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37982__auto__);
}));

(sablono.core.week_field38138.cljs$core$IFn$_invoke$arity$2 = (function (name__37982__auto__,value__37983__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37982__auto__,value__37983__auto__);
}));

(sablono.core.week_field38138.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38138);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38143 = (function sablono$core$check_box38143(var_args){
var G__38146 = arguments.length;
switch (G__38146) {
case 1:
return sablono.core.check_box38143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38143.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38143.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38143.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38143.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38143.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38143);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38152 = (function sablono$core$radio_button38152(var_args){
var G__38154 = arguments.length;
switch (G__38154) {
case 1:
return sablono.core.radio_button38152.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38152.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38152.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38152.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38152.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38152.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38152.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38152);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38158 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38158);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38160 = (function sablono$core$select_options38160(coll){
var iter__4582__auto__ = (function sablono$core$select_options38160_$_iter__38162(s__38163){
return (new cljs.core.LazySeq(null,(function (){
var s__38163__$1 = s__38163;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38163__$1);
if(temp__5735__auto__){
var s__38163__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38163__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38163__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38165 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38164 = (0);
while(true){
if((i__38164 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38164);
cljs.core.chunk_append(b__38165,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38167 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38167,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38167,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38167,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38160.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38160.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38160.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38266 = (i__38164 + (1));
i__38164 = G__38266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38165),sablono$core$select_options38160_$_iter__38162(cljs.core.chunk_rest(s__38163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38165),null);
}
} else {
var x = cljs.core.first(s__38163__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38172 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38172,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38172,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38172,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38160.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38160.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38160.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38160_$_iter__38162(cljs.core.rest(s__38163__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38160);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38176 = (function sablono$core$drop_down38176(var_args){
var G__38179 = arguments.length;
switch (G__38179) {
case 2:
return sablono.core.drop_down38176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38176.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38176.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38176.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38176.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38176.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38176);
/**
 * Creates a text area element.
 */
sablono.core.text_area38183 = (function sablono$core$text_area38183(var_args){
var G__38186 = arguments.length;
switch (G__38186) {
case 1:
return sablono.core.text_area38183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38183.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38183.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38183.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38183);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38190 = (function sablono$core$label38190(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38190);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38191 = (function sablono$core$submit_button38191(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38191);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38193 = (function sablono$core$reset_button38193(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38193);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38194 = (function sablono$core$form_to38194(var_args){
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
return sablono.core.form_to38194.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38194.cljs$core$IFn$_invoke$arity$variadic = (function (p__38201,body){
var vec__38202 = p__38201;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38202,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38202,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38205 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38206 = "_method";
var G__38207 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38205,G__38206,G__38207) : sablono.core.hidden_field.call(null,G__38205,G__38206,G__38207));
})()], null)),body));
}));

(sablono.core.form_to38194.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38194.cljs$lang$applyTo = (function (seq38195){
var G__38196 = cljs.core.first(seq38195);
var seq38195__$1 = cljs.core.next(seq38195);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38196,seq38195__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38194);

//# sourceMappingURL=sablono.core.js.map
