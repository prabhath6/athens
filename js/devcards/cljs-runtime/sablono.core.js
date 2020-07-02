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
var G__41139__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__40929 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__40930 = cljs.core.seq(vec__40929);
var first__40931 = cljs.core.first(seq__40930);
var seq__40930__$1 = cljs.core.next(seq__40930);
var tag = first__40931;
var body = seq__40930__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41140__i = 0, G__41140__a = new Array(arguments.length -  0);
while (G__41140__i < G__41140__a.length) {G__41140__a[G__41140__i] = arguments[G__41140__i + 0]; ++G__41140__i;}
  args = new cljs.core.IndexedSeq(G__41140__a,0,null);
} 
return G__41139__delegate.call(this,args);};
G__41139.cljs$lang$maxFixedArity = 0;
G__41139.cljs$lang$applyTo = (function (arglist__41141){
var args = cljs.core.seq(arglist__41141);
return G__41139__delegate(args);
});
G__41139.cljs$core$IFn$_invoke$arity$variadic = G__41139__delegate;
return G__41139;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__40932(s__40933){
return (new cljs.core.LazySeq(null,(function (){
var s__40933__$1 = s__40933;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40933__$1);
if(temp__5735__auto__){
var s__40933__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40933__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__40933__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__40935 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__40934 = (0);
while(true){
if((i__40934 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__40934);
cljs.core.chunk_append(b__40935,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41142 = (i__40934 + (1));
i__40934 = G__41142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40935),sablono$core$update_arglists_$_iter__40932(cljs.core.chunk_rest(s__40933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40935),null);
}
} else {
var args = cljs.core.first(s__40933__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__40932(cljs.core.rest(s__40933__$2)));
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
var len__4789__auto___41143 = arguments.length;
var i__4790__auto___41144 = (0);
while(true){
if((i__4790__auto___41144 < len__4789__auto___41143)){
args__4795__auto__.push((arguments[i__4790__auto___41144]));

var G__41145 = (i__4790__auto___41144 + (1));
i__4790__auto___41144 = G__41145;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__40947(s__40948){
return (new cljs.core.LazySeq(null,(function (){
var s__40948__$1 = s__40948;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40948__$1);
if(temp__5735__auto__){
var s__40948__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40948__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__40948__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__40950 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__40949 = (0);
while(true){
if((i__40949 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__40949);
cljs.core.chunk_append(b__40950,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41146 = (i__40949 + (1));
i__40949 = G__41146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40950),sablono$core$iter__40947(cljs.core.chunk_rest(s__40948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40950),null);
}
} else {
var style = cljs.core.first(s__40948__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__40947(cljs.core.rest(s__40948__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq40944){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40944));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__40957 = goog.dom.getDocument().body;
var G__40958 = (function (){var G__40959 = "script";
var G__40960 = ({"src": src});
return goog.dom.createDom(G__40959,G__40960);
})();
return goog.dom.appendChild(G__40957,G__40958);
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
sablono.core.link_to40962 = (function sablono$core$link_to40962(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41147 = arguments.length;
var i__4790__auto___41148 = (0);
while(true){
if((i__4790__auto___41148 < len__4789__auto___41147)){
args__4795__auto__.push((arguments[i__4790__auto___41148]));

var G__41149 = (i__4790__auto___41148 + (1));
i__4790__auto___41148 = G__41149;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to40962.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to40962.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to40962.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to40962.cljs$lang$applyTo = (function (seq40963){
var G__40964 = cljs.core.first(seq40963);
var seq40963__$1 = cljs.core.next(seq40963);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40964,seq40963__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to40962);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to40965 = (function sablono$core$mail_to40965(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41150 = arguments.length;
var i__4790__auto___41151 = (0);
while(true){
if((i__4790__auto___41151 < len__4789__auto___41150)){
args__4795__auto__.push((arguments[i__4790__auto___41151]));

var G__41152 = (i__4790__auto___41151 + (1));
i__4790__auto___41151 = G__41152;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to40965.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to40965.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__40968){
var vec__40969 = p__40968;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40969,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to40965.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to40965.cljs$lang$applyTo = (function (seq40966){
var G__40967 = cljs.core.first(seq40966);
var seq40966__$1 = cljs.core.next(seq40966);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40967,seq40966__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to40965);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list40972 = (function sablono$core$unordered_list40972(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list40972_$_iter__40973(s__40974){
return (new cljs.core.LazySeq(null,(function (){
var s__40974__$1 = s__40974;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40974__$1);
if(temp__5735__auto__){
var s__40974__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40974__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__40974__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__40976 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__40975 = (0);
while(true){
if((i__40975 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__40975);
cljs.core.chunk_append(b__40976,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41153 = (i__40975 + (1));
i__40975 = G__41153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40976),sablono$core$unordered_list40972_$_iter__40973(cljs.core.chunk_rest(s__40974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40976),null);
}
} else {
var x = cljs.core.first(s__40974__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list40972_$_iter__40973(cljs.core.rest(s__40974__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list40972);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list40977 = (function sablono$core$ordered_list40977(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list40977_$_iter__40978(s__40979){
return (new cljs.core.LazySeq(null,(function (){
var s__40979__$1 = s__40979;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40979__$1);
if(temp__5735__auto__){
var s__40979__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40979__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__40979__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__40981 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__40980 = (0);
while(true){
if((i__40980 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__40980);
cljs.core.chunk_append(b__40981,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41154 = (i__40980 + (1));
i__40980 = G__41154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40981),sablono$core$ordered_list40977_$_iter__40978(cljs.core.chunk_rest(s__40979__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40981),null);
}
} else {
var x = cljs.core.first(s__40979__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list40977_$_iter__40978(cljs.core.rest(s__40979__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list40977);
/**
 * Create an image element.
 */
sablono.core.image40982 = (function sablono$core$image40982(var_args){
var G__40984 = arguments.length;
switch (G__40984) {
case 1:
return sablono.core.image40982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image40982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image40982.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image40982.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image40982.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image40982);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__40985_SHARP_,p2__40986_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40985_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__40986_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__40991_SHARP_,p2__40992_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40991_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__40992_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__40994 = arguments.length;
switch (G__40994) {
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
sablono.core.color_field40997 = (function sablono$core$color_field40997(var_args){
var G__41002 = arguments.length;
switch (G__41002) {
case 1:
return sablono.core.color_field40997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field40997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field40997.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__40921__auto__);
}));

(sablono.core.color_field40997.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.color_field40997.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field40997);

/**
 * Creates a date input field.
 */
sablono.core.date_field41007 = (function sablono$core$date_field41007(var_args){
var G__41009 = arguments.length;
switch (G__41009) {
case 1:
return sablono.core.date_field41007.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41007.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41007.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__40921__auto__);
}));

(sablono.core.date_field41007.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.date_field41007.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41007);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41010 = (function sablono$core$datetime_field41010(var_args){
var G__41012 = arguments.length;
switch (G__41012) {
case 1:
return sablono.core.datetime_field41010.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41010.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41010.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__40921__auto__);
}));

(sablono.core.datetime_field41010.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.datetime_field41010.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41010);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41013 = (function sablono$core$datetime_local_field41013(var_args){
var G__41015 = arguments.length;
switch (G__41015) {
case 1:
return sablono.core.datetime_local_field41013.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41013.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41013.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__40921__auto__);
}));

(sablono.core.datetime_local_field41013.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.datetime_local_field41013.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41013);

/**
 * Creates a email input field.
 */
sablono.core.email_field41017 = (function sablono$core$email_field41017(var_args){
var G__41021 = arguments.length;
switch (G__41021) {
case 1:
return sablono.core.email_field41017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41017.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__40921__auto__);
}));

(sablono.core.email_field41017.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.email_field41017.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41017);

/**
 * Creates a file input field.
 */
sablono.core.file_field41036 = (function sablono$core$file_field41036(var_args){
var G__41038 = arguments.length;
switch (G__41038) {
case 1:
return sablono.core.file_field41036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41036.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__40921__auto__);
}));

(sablono.core.file_field41036.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.file_field41036.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41036);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41039 = (function sablono$core$hidden_field41039(var_args){
var G__41041 = arguments.length;
switch (G__41041) {
case 1:
return sablono.core.hidden_field41039.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41039.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field41039.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__40921__auto__);
}));

(sablono.core.hidden_field41039.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.hidden_field41039.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41039);

/**
 * Creates a month input field.
 */
sablono.core.month_field41042 = (function sablono$core$month_field41042(var_args){
var G__41044 = arguments.length;
switch (G__41044) {
case 1:
return sablono.core.month_field41042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field41042.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__40921__auto__);
}));

(sablono.core.month_field41042.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.month_field41042.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41042);

/**
 * Creates a number input field.
 */
sablono.core.number_field41045 = (function sablono$core$number_field41045(var_args){
var G__41047 = arguments.length;
switch (G__41047) {
case 1:
return sablono.core.number_field41045.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41045.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field41045.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__40921__auto__);
}));

(sablono.core.number_field41045.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.number_field41045.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41045);

/**
 * Creates a password input field.
 */
sablono.core.password_field41051 = (function sablono$core$password_field41051(var_args){
var G__41054 = arguments.length;
switch (G__41054) {
case 1:
return sablono.core.password_field41051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field41051.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__40921__auto__);
}));

(sablono.core.password_field41051.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.password_field41051.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41051);

/**
 * Creates a range input field.
 */
sablono.core.range_field41060 = (function sablono$core$range_field41060(var_args){
var G__41065 = arguments.length;
switch (G__41065) {
case 1:
return sablono.core.range_field41060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field41060.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__40921__auto__);
}));

(sablono.core.range_field41060.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.range_field41060.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41060);

/**
 * Creates a search input field.
 */
sablono.core.search_field41084 = (function sablono$core$search_field41084(var_args){
var G__41086 = arguments.length;
switch (G__41086) {
case 1:
return sablono.core.search_field41084.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41084.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field41084.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__40921__auto__);
}));

(sablono.core.search_field41084.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.search_field41084.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41084);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41087 = (function sablono$core$tel_field41087(var_args){
var G__41089 = arguments.length;
switch (G__41089) {
case 1:
return sablono.core.tel_field41087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field41087.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__40921__auto__);
}));

(sablono.core.tel_field41087.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.tel_field41087.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41087);

/**
 * Creates a text input field.
 */
sablono.core.text_field41090 = (function sablono$core$text_field41090(var_args){
var G__41092 = arguments.length;
switch (G__41092) {
case 1:
return sablono.core.text_field41090.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41090.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field41090.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__40921__auto__);
}));

(sablono.core.text_field41090.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.text_field41090.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41090);

/**
 * Creates a time input field.
 */
sablono.core.time_field41093 = (function sablono$core$time_field41093(var_args){
var G__41095 = arguments.length;
switch (G__41095) {
case 1:
return sablono.core.time_field41093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field41093.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__40921__auto__);
}));

(sablono.core.time_field41093.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.time_field41093.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41093);

/**
 * Creates a url input field.
 */
sablono.core.url_field41096 = (function sablono$core$url_field41096(var_args){
var G__41098 = arguments.length;
switch (G__41098) {
case 1:
return sablono.core.url_field41096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field41096.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__40921__auto__);
}));

(sablono.core.url_field41096.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.url_field41096.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41096);

/**
 * Creates a week input field.
 */
sablono.core.week_field41099 = (function sablono$core$week_field41099(var_args){
var G__41101 = arguments.length;
switch (G__41101) {
case 1:
return sablono.core.week_field41099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field41099.cljs$core$IFn$_invoke$arity$1 = (function (name__40921__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__40921__auto__);
}));

(sablono.core.week_field41099.cljs$core$IFn$_invoke$arity$2 = (function (name__40921__auto__,value__40922__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__40921__auto__,value__40922__auto__);
}));

(sablono.core.week_field41099.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41099);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41102 = (function sablono$core$check_box41102(var_args){
var G__41104 = arguments.length;
switch (G__41104) {
case 1:
return sablono.core.check_box41102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41102.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box41102.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box41102.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41102.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41102.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41102);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41105 = (function sablono$core$radio_button41105(var_args){
var G__41107 = arguments.length;
switch (G__41107) {
case 1:
return sablono.core.radio_button41105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41105.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button41105.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button41105.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41105.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41105.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41105);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__41108 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__41108);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41109 = (function sablono$core$select_options41109(coll){
var iter__4582__auto__ = (function sablono$core$select_options41109_$_iter__41110(s__41111){
return (new cljs.core.LazySeq(null,(function (){
var s__41111__$1 = s__41111;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41111__$1);
if(temp__5735__auto__){
var s__41111__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41111__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41111__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41113 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41112 = (0);
while(true){
if((i__41112 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41112);
cljs.core.chunk_append(b__41113,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41114 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41114,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41114,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41114,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41109.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41109.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41109.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41176 = (i__41112 + (1));
i__41112 = G__41176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41113),sablono$core$select_options41109_$_iter__41110(cljs.core.chunk_rest(s__41111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41113),null);
}
} else {
var x = cljs.core.first(s__41111__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41117 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41117,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41117,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41117,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41109.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41109.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41109.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41109_$_iter__41110(cljs.core.rest(s__41111__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41109);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41120 = (function sablono$core$drop_down41120(var_args){
var G__41122 = arguments.length;
switch (G__41122) {
case 2:
return sablono.core.drop_down41120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41120.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down41120.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41120.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down41120.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down41120.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41120);
/**
 * Creates a text area element.
 */
sablono.core.text_area41123 = (function sablono$core$text_area41123(var_args){
var G__41125 = arguments.length;
switch (G__41125) {
case 1:
return sablono.core.text_area41123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area41123.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area41123.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area41123.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41123);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41126 = (function sablono$core$label41126(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41126);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41127 = (function sablono$core$submit_button41127(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41127);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41128 = (function sablono$core$reset_button41128(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41128);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41129 = (function sablono$core$form_to41129(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41179 = arguments.length;
var i__4790__auto___41180 = (0);
while(true){
if((i__4790__auto___41180 < len__4789__auto___41179)){
args__4795__auto__.push((arguments[i__4790__auto___41180]));

var G__41181 = (i__4790__auto___41180 + (1));
i__4790__auto___41180 = G__41181;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41129.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to41129.cljs$core$IFn$_invoke$arity$variadic = (function (p__41132,body){
var vec__41133 = p__41132;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41133,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41133,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__41136 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__41137 = "_method";
var G__41138 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__41136,G__41137,G__41138) : sablono.core.hidden_field.call(null,G__41136,G__41137,G__41138));
})()], null)),body));
}));

(sablono.core.form_to41129.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to41129.cljs$lang$applyTo = (function (seq41130){
var G__41131 = cljs.core.first(seq41130);
var seq41130__$1 = cljs.core.next(seq41130);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41131,seq41130__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41129);

//# sourceMappingURL=sablono.core.js.map
