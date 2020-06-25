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
var G__38145__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37921 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37922 = cljs.core.seq(vec__37921);
var first__37923 = cljs.core.first(seq__37922);
var seq__37922__$1 = cljs.core.next(seq__37922);
var tag = first__37923;
var body = seq__37922__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38149__i = 0, G__38149__a = new Array(arguments.length -  0);
while (G__38149__i < G__38149__a.length) {G__38149__a[G__38149__i] = arguments[G__38149__i + 0]; ++G__38149__i;}
  args = new cljs.core.IndexedSeq(G__38149__a,0,null);
} 
return G__38145__delegate.call(this,args);};
G__38145.cljs$lang$maxFixedArity = 0;
G__38145.cljs$lang$applyTo = (function (arglist__38150){
var args = cljs.core.seq(arglist__38150);
return G__38145__delegate(args);
});
G__38145.cljs$core$IFn$_invoke$arity$variadic = G__38145__delegate;
return G__38145;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37925(s__37926){
return (new cljs.core.LazySeq(null,(function (){
var s__37926__$1 = s__37926;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37926__$1);
if(temp__5735__auto__){
var s__37926__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37926__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37926__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37928 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37927 = (0);
while(true){
if((i__37927 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37927);
cljs.core.chunk_append(b__37928,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38151 = (i__37927 + (1));
i__37927 = G__38151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37928),sablono$core$update_arglists_$_iter__37925(cljs.core.chunk_rest(s__37926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37928),null);
}
} else {
var args = cljs.core.first(s__37926__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37925(cljs.core.rest(s__37926__$2)));
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
var len__4789__auto___38154 = arguments.length;
var i__4790__auto___38155 = (0);
while(true){
if((i__4790__auto___38155 < len__4789__auto___38154)){
args__4795__auto__.push((arguments[i__4790__auto___38155]));

var G__38156 = (i__4790__auto___38155 + (1));
i__4790__auto___38155 = G__38156;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__37931(s__37932){
return (new cljs.core.LazySeq(null,(function (){
var s__37932__$1 = s__37932;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37932__$1);
if(temp__5735__auto__){
var s__37932__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37932__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37932__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37934 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37933 = (0);
while(true){
if((i__37933 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37933);
cljs.core.chunk_append(b__37934,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38158 = (i__37933 + (1));
i__37933 = G__38158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37934),sablono$core$iter__37931(cljs.core.chunk_rest(s__37932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37934),null);
}
} else {
var style = cljs.core.first(s__37932__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37931(cljs.core.rest(s__37932__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37930){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37930));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37935 = goog.dom.getDocument().body;
var G__37936 = (function (){var G__37937 = "script";
var G__37938 = ({"src": src});
return goog.dom.createDom(G__37937,G__37938);
})();
return goog.dom.appendChild(G__37935,G__37936);
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
sablono.core.link_to37939 = (function sablono$core$link_to37939(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38162 = arguments.length;
var i__4790__auto___38163 = (0);
while(true){
if((i__4790__auto___38163 < len__4789__auto___38162)){
args__4795__auto__.push((arguments[i__4790__auto___38163]));

var G__38164 = (i__4790__auto___38163 + (1));
i__4790__auto___38163 = G__38164;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37939.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to37939.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to37939.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to37939.cljs$lang$applyTo = (function (seq37941){
var G__37942 = cljs.core.first(seq37941);
var seq37941__$1 = cljs.core.next(seq37941);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37942,seq37941__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to37939);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37947 = (function sablono$core$mail_to37947(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38169 = arguments.length;
var i__4790__auto___38170 = (0);
while(true){
if((i__4790__auto___38170 < len__4789__auto___38169)){
args__4795__auto__.push((arguments[i__4790__auto___38170]));

var G__38171 = (i__4790__auto___38170 + (1));
i__4790__auto___38170 = G__38171;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37947.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to37947.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37954){
var vec__37955 = p__37954;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37955,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to37947.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to37947.cljs$lang$applyTo = (function (seq37949){
var G__37950 = cljs.core.first(seq37949);
var seq37949__$1 = cljs.core.next(seq37949);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37950,seq37949__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to37947);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37962 = (function sablono$core$unordered_list37962(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list37962_$_iter__37963(s__37964){
return (new cljs.core.LazySeq(null,(function (){
var s__37964__$1 = s__37964;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37964__$1);
if(temp__5735__auto__){
var s__37964__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37964__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37964__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37966 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37965 = (0);
while(true){
if((i__37965 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37965);
cljs.core.chunk_append(b__37966,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38175 = (i__37965 + (1));
i__37965 = G__38175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37966),sablono$core$unordered_list37962_$_iter__37963(cljs.core.chunk_rest(s__37964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37966),null);
}
} else {
var x = cljs.core.first(s__37964__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37962_$_iter__37963(cljs.core.rest(s__37964__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list37962);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37971 = (function sablono$core$ordered_list37971(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list37971_$_iter__37973(s__37974){
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
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37975);
cljs.core.chunk_append(b__37976,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38179 = (i__37975 + (1));
i__37975 = G__38179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37976),sablono$core$ordered_list37971_$_iter__37973(cljs.core.chunk_rest(s__37974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37976),null);
}
} else {
var x = cljs.core.first(s__37974__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37971_$_iter__37973(cljs.core.rest(s__37974__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list37971);
/**
 * Create an image element.
 */
sablono.core.image37980 = (function sablono$core$image37980(var_args){
var G__37983 = arguments.length;
switch (G__37983) {
case 1:
return sablono.core.image37980.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37980.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image37980.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image37980.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image37980.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image37980);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37986_SHARP_,p2__37987_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37986_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37987_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37989_SHARP_,p2__37990_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37989_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37990_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__37993 = arguments.length;
switch (G__37993) {
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
sablono.core.color_field37997 = (function sablono$core$color_field37997(var_args){
var G__38000 = arguments.length;
switch (G__38000) {
case 1:
return sablono.core.color_field37997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field37997.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37912__auto__);
}));

(sablono.core.color_field37997.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.color_field37997.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field37997);

/**
 * Creates a date input field.
 */
sablono.core.date_field38003 = (function sablono$core$date_field38003(var_args){
var G__38005 = arguments.length;
switch (G__38005) {
case 1:
return sablono.core.date_field38003.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38003.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38003.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37912__auto__);
}));

(sablono.core.date_field38003.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.date_field38003.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38003);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38007 = (function sablono$core$datetime_field38007(var_args){
var G__38010 = arguments.length;
switch (G__38010) {
case 1:
return sablono.core.datetime_field38007.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38007.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38007.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37912__auto__);
}));

(sablono.core.datetime_field38007.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.datetime_field38007.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38007);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38011 = (function sablono$core$datetime_local_field38011(var_args){
var G__38014 = arguments.length;
switch (G__38014) {
case 1:
return sablono.core.datetime_local_field38011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38011.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37912__auto__);
}));

(sablono.core.datetime_local_field38011.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.datetime_local_field38011.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38011);

/**
 * Creates a email input field.
 */
sablono.core.email_field38019 = (function sablono$core$email_field38019(var_args){
var G__38022 = arguments.length;
switch (G__38022) {
case 1:
return sablono.core.email_field38019.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38019.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38019.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37912__auto__);
}));

(sablono.core.email_field38019.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.email_field38019.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38019);

/**
 * Creates a file input field.
 */
sablono.core.file_field38027 = (function sablono$core$file_field38027(var_args){
var G__38030 = arguments.length;
switch (G__38030) {
case 1:
return sablono.core.file_field38027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38027.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37912__auto__);
}));

(sablono.core.file_field38027.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.file_field38027.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38027);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38032 = (function sablono$core$hidden_field38032(var_args){
var G__38035 = arguments.length;
switch (G__38035) {
case 1:
return sablono.core.hidden_field38032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38032.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37912__auto__);
}));

(sablono.core.hidden_field38032.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.hidden_field38032.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38032);

/**
 * Creates a month input field.
 */
sablono.core.month_field38037 = (function sablono$core$month_field38037(var_args){
var G__38040 = arguments.length;
switch (G__38040) {
case 1:
return sablono.core.month_field38037.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38037.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38037.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37912__auto__);
}));

(sablono.core.month_field38037.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.month_field38037.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38037);

/**
 * Creates a number input field.
 */
sablono.core.number_field38042 = (function sablono$core$number_field38042(var_args){
var G__38045 = arguments.length;
switch (G__38045) {
case 1:
return sablono.core.number_field38042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38042.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37912__auto__);
}));

(sablono.core.number_field38042.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.number_field38042.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38042);

/**
 * Creates a password input field.
 */
sablono.core.password_field38048 = (function sablono$core$password_field38048(var_args){
var G__38051 = arguments.length;
switch (G__38051) {
case 1:
return sablono.core.password_field38048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38048.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37912__auto__);
}));

(sablono.core.password_field38048.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.password_field38048.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38048);

/**
 * Creates a range input field.
 */
sablono.core.range_field38056 = (function sablono$core$range_field38056(var_args){
var G__38061 = arguments.length;
switch (G__38061) {
case 1:
return sablono.core.range_field38056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38056.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37912__auto__);
}));

(sablono.core.range_field38056.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.range_field38056.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38056);

/**
 * Creates a search input field.
 */
sablono.core.search_field38064 = (function sablono$core$search_field38064(var_args){
var G__38066 = arguments.length;
switch (G__38066) {
case 1:
return sablono.core.search_field38064.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38064.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38064.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37912__auto__);
}));

(sablono.core.search_field38064.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.search_field38064.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38064);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38068 = (function sablono$core$tel_field38068(var_args){
var G__38071 = arguments.length;
switch (G__38071) {
case 1:
return sablono.core.tel_field38068.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38068.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38068.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37912__auto__);
}));

(sablono.core.tel_field38068.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.tel_field38068.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38068);

/**
 * Creates a text input field.
 */
sablono.core.text_field38073 = (function sablono$core$text_field38073(var_args){
var G__38076 = arguments.length;
switch (G__38076) {
case 1:
return sablono.core.text_field38073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38073.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37912__auto__);
}));

(sablono.core.text_field38073.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.text_field38073.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38073);

/**
 * Creates a time input field.
 */
sablono.core.time_field38078 = (function sablono$core$time_field38078(var_args){
var G__38082 = arguments.length;
switch (G__38082) {
case 1:
return sablono.core.time_field38078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38078.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37912__auto__);
}));

(sablono.core.time_field38078.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.time_field38078.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38078);

/**
 * Creates a url input field.
 */
sablono.core.url_field38085 = (function sablono$core$url_field38085(var_args){
var G__38087 = arguments.length;
switch (G__38087) {
case 1:
return sablono.core.url_field38085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38085.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37912__auto__);
}));

(sablono.core.url_field38085.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.url_field38085.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38085);

/**
 * Creates a week input field.
 */
sablono.core.week_field38091 = (function sablono$core$week_field38091(var_args){
var G__38094 = arguments.length;
switch (G__38094) {
case 1:
return sablono.core.week_field38091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38091.cljs$core$IFn$_invoke$arity$1 = (function (name__37912__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37912__auto__);
}));

(sablono.core.week_field38091.cljs$core$IFn$_invoke$arity$2 = (function (name__37912__auto__,value__37913__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37912__auto__,value__37913__auto__);
}));

(sablono.core.week_field38091.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38091);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38097 = (function sablono$core$check_box38097(var_args){
var G__38101 = arguments.length;
switch (G__38101) {
case 1:
return sablono.core.check_box38097.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38097.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38097.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38097.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38097.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38097.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38097.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38097);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38102 = (function sablono$core$radio_button38102(var_args){
var G__38104 = arguments.length;
switch (G__38104) {
case 1:
return sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38102.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38102.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38102);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38105 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38105);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38106 = (function sablono$core$select_options38106(coll){
var iter__4582__auto__ = (function sablono$core$select_options38106_$_iter__38107(s__38108){
return (new cljs.core.LazySeq(null,(function (){
var s__38108__$1 = s__38108;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38108__$1);
if(temp__5735__auto__){
var s__38108__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38108__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38108__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38110 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38109 = (0);
while(true){
if((i__38109 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38109);
cljs.core.chunk_append(b__38110,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38111 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38111,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38111,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38111,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38106.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38106.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38106.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38252 = (i__38109 + (1));
i__38109 = G__38252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38110),sablono$core$select_options38106_$_iter__38107(cljs.core.chunk_rest(s__38108__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38110),null);
}
} else {
var x = cljs.core.first(s__38108__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38114 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38106.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38106.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38106.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38106_$_iter__38107(cljs.core.rest(s__38108__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38106);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38117 = (function sablono$core$drop_down38117(var_args){
var G__38119 = arguments.length;
switch (G__38119) {
case 2:
return sablono.core.drop_down38117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38117.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38117.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38117.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38117.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38117.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38117);
/**
 * Creates a text area element.
 */
sablono.core.text_area38120 = (function sablono$core$text_area38120(var_args){
var G__38122 = arguments.length;
switch (G__38122) {
case 1:
return sablono.core.text_area38120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38120.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38120.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38120.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38120);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38123 = (function sablono$core$label38123(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38123);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38124 = (function sablono$core$submit_button38124(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38124);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38126 = (function sablono$core$reset_button38126(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38126);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38128 = (function sablono$core$form_to38128(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38266 = arguments.length;
var i__4790__auto___38267 = (0);
while(true){
if((i__4790__auto___38267 < len__4789__auto___38266)){
args__4795__auto__.push((arguments[i__4790__auto___38267]));

var G__38268 = (i__4790__auto___38267 + (1));
i__4790__auto___38267 = G__38268;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38128.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38128.cljs$core$IFn$_invoke$arity$variadic = (function (p__38133,body){
var vec__38135 = p__38133;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38135,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38135,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38139 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38140 = "_method";
var G__38141 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38139,G__38140,G__38141) : sablono.core.hidden_field.call(null,G__38139,G__38140,G__38141));
})()], null)),body));
}));

(sablono.core.form_to38128.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38128.cljs$lang$applyTo = (function (seq38130){
var G__38131 = cljs.core.first(seq38130);
var seq38130__$1 = cljs.core.next(seq38130);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38131,seq38130__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38128);

//# sourceMappingURL=sablono.core.js.map
