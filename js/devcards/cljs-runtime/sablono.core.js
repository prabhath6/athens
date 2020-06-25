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
var G__38122__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__37879 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__37880 = cljs.core.seq(vec__37879);
var first__37881 = cljs.core.first(seq__37880);
var seq__37880__$1 = cljs.core.next(seq__37880);
var tag = first__37881;
var body = seq__37880__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38124__i = 0, G__38124__a = new Array(arguments.length -  0);
while (G__38124__i < G__38124__a.length) {G__38124__a[G__38124__i] = arguments[G__38124__i + 0]; ++G__38124__i;}
  args = new cljs.core.IndexedSeq(G__38124__a,0,null);
} 
return G__38122__delegate.call(this,args);};
G__38122.cljs$lang$maxFixedArity = 0;
G__38122.cljs$lang$applyTo = (function (arglist__38125){
var args = cljs.core.seq(arglist__38125);
return G__38122__delegate(args);
});
G__38122.cljs$core$IFn$_invoke$arity$variadic = G__38122__delegate;
return G__38122;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__37887(s__37888){
return (new cljs.core.LazySeq(null,(function (){
var s__37888__$1 = s__37888;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37888__$1);
if(temp__5735__auto__){
var s__37888__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37888__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37888__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37890 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37889 = (0);
while(true){
if((i__37889 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37889);
cljs.core.chunk_append(b__37890,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38127 = (i__37889 + (1));
i__37889 = G__38127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37890),sablono$core$update_arglists_$_iter__37887(cljs.core.chunk_rest(s__37888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37890),null);
}
} else {
var args = cljs.core.first(s__37888__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37887(cljs.core.rest(s__37888__$2)));
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
var len__4789__auto___38131 = arguments.length;
var i__4790__auto___38132 = (0);
while(true){
if((i__4790__auto___38132 < len__4789__auto___38131)){
args__4795__auto__.push((arguments[i__4790__auto___38132]));

var G__38133 = (i__4790__auto___38132 + (1));
i__4790__auto___38132 = G__38133;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__37897(s__37898){
return (new cljs.core.LazySeq(null,(function (){
var s__37898__$1 = s__37898;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37898__$1);
if(temp__5735__auto__){
var s__37898__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37898__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37898__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37900 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37899 = (0);
while(true){
if((i__37899 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37899);
cljs.core.chunk_append(b__37900,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38137 = (i__37899 + (1));
i__37899 = G__38137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37900),sablono$core$iter__37897(cljs.core.chunk_rest(s__37898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37900),null);
}
} else {
var style = cljs.core.first(s__37898__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37897(cljs.core.rest(s__37898__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq37894){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37894));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__37906 = goog.dom.getDocument().body;
var G__37907 = (function (){var G__37908 = "script";
var G__37909 = ({"src": src});
return goog.dom.createDom(G__37908,G__37909);
})();
return goog.dom.appendChild(G__37906,G__37907);
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
sablono.core.link_to37913 = (function sablono$core$link_to37913(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38142 = arguments.length;
var i__4790__auto___38143 = (0);
while(true){
if((i__4790__auto___38143 < len__4789__auto___38142)){
args__4795__auto__.push((arguments[i__4790__auto___38143]));

var G__38144 = (i__4790__auto___38143 + (1));
i__4790__auto___38143 = G__38144;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37913.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to37913.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to37913.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to37913.cljs$lang$applyTo = (function (seq37915){
var G__37916 = cljs.core.first(seq37915);
var seq37915__$1 = cljs.core.next(seq37915);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37916,seq37915__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to37913);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37922 = (function sablono$core$mail_to37922(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38147 = arguments.length;
var i__4790__auto___38148 = (0);
while(true){
if((i__4790__auto___38148 < len__4789__auto___38147)){
args__4795__auto__.push((arguments[i__4790__auto___38148]));

var G__38149 = (i__4790__auto___38148 + (1));
i__4790__auto___38148 = G__38149;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37922.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to37922.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37928){
var vec__37930 = p__37928;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37930,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to37922.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to37922.cljs$lang$applyTo = (function (seq37923){
var G__37924 = cljs.core.first(seq37923);
var seq37923__$1 = cljs.core.next(seq37923);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37924,seq37923__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to37922);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37937 = (function sablono$core$unordered_list37937(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list37937_$_iter__37938(s__37939){
return (new cljs.core.LazySeq(null,(function (){
var s__37939__$1 = s__37939;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37939__$1);
if(temp__5735__auto__){
var s__37939__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37939__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37939__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37941 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37940 = (0);
while(true){
if((i__37940 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37940);
cljs.core.chunk_append(b__37941,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38150 = (i__37940 + (1));
i__37940 = G__38150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37941),sablono$core$unordered_list37937_$_iter__37938(cljs.core.chunk_rest(s__37939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37941),null);
}
} else {
var x = cljs.core.first(s__37939__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37937_$_iter__37938(cljs.core.rest(s__37939__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list37937);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37946 = (function sablono$core$ordered_list37946(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list37946_$_iter__37947(s__37948){
return (new cljs.core.LazySeq(null,(function (){
var s__37948__$1 = s__37948;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37948__$1);
if(temp__5735__auto__){
var s__37948__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37948__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37948__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37950 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37949 = (0);
while(true){
if((i__37949 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37949);
cljs.core.chunk_append(b__37950,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38151 = (i__37949 + (1));
i__37949 = G__38151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37950),sablono$core$ordered_list37946_$_iter__37947(cljs.core.chunk_rest(s__37948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37950),null);
}
} else {
var x = cljs.core.first(s__37948__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37946_$_iter__37947(cljs.core.rest(s__37948__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list37946);
/**
 * Create an image element.
 */
sablono.core.image37955 = (function sablono$core$image37955(var_args){
var G__37957 = arguments.length;
switch (G__37957) {
case 1:
return sablono.core.image37955.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37955.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image37955.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image37955.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image37955.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image37955);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37960_SHARP_,p2__37961_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37960_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37961_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37962_SHARP_,p2__37963_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37962_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37963_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__37965 = arguments.length;
switch (G__37965) {
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
sablono.core.color_field37966 = (function sablono$core$color_field37966(var_args){
var G__37969 = arguments.length;
switch (G__37969) {
case 1:
return sablono.core.color_field37966.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37966.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field37966.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37864__auto__);
}));

(sablono.core.color_field37966.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.color_field37966.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field37966);

/**
 * Creates a date input field.
 */
sablono.core.date_field37970 = (function sablono$core$date_field37970(var_args){
var G__37972 = arguments.length;
switch (G__37972) {
case 1:
return sablono.core.date_field37970.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37970.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field37970.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37864__auto__);
}));

(sablono.core.date_field37970.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.date_field37970.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field37970);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37974 = (function sablono$core$datetime_field37974(var_args){
var G__37976 = arguments.length;
switch (G__37976) {
case 1:
return sablono.core.datetime_field37974.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field37974.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37864__auto__);
}));

(sablono.core.datetime_field37974.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.datetime_field37974.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field37974);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37977 = (function sablono$core$datetime_local_field37977(var_args){
var G__37979 = arguments.length;
switch (G__37979) {
case 1:
return sablono.core.datetime_local_field37977.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37977.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field37977.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37864__auto__);
}));

(sablono.core.datetime_local_field37977.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.datetime_local_field37977.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field37977);

/**
 * Creates a email input field.
 */
sablono.core.email_field37980 = (function sablono$core$email_field37980(var_args){
var G__37982 = arguments.length;
switch (G__37982) {
case 1:
return sablono.core.email_field37980.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37980.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field37980.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37864__auto__);
}));

(sablono.core.email_field37980.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.email_field37980.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field37980);

/**
 * Creates a file input field.
 */
sablono.core.file_field37983 = (function sablono$core$file_field37983(var_args){
var G__37986 = arguments.length;
switch (G__37986) {
case 1:
return sablono.core.file_field37983.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37983.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field37983.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37864__auto__);
}));

(sablono.core.file_field37983.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.file_field37983.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field37983);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37991 = (function sablono$core$hidden_field37991(var_args){
var G__37993 = arguments.length;
switch (G__37993) {
case 1:
return sablono.core.hidden_field37991.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37991.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field37991.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37864__auto__);
}));

(sablono.core.hidden_field37991.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.hidden_field37991.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field37991);

/**
 * Creates a month input field.
 */
sablono.core.month_field37997 = (function sablono$core$month_field37997(var_args){
var G__38000 = arguments.length;
switch (G__38000) {
case 1:
return sablono.core.month_field37997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field37997.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37864__auto__);
}));

(sablono.core.month_field37997.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.month_field37997.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field37997);

/**
 * Creates a number input field.
 */
sablono.core.number_field38005 = (function sablono$core$number_field38005(var_args){
var G__38007 = arguments.length;
switch (G__38007) {
case 1:
return sablono.core.number_field38005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38005.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37864__auto__);
}));

(sablono.core.number_field38005.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.number_field38005.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38005);

/**
 * Creates a password input field.
 */
sablono.core.password_field38011 = (function sablono$core$password_field38011(var_args){
var G__38013 = arguments.length;
switch (G__38013) {
case 1:
return sablono.core.password_field38011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38011.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37864__auto__);
}));

(sablono.core.password_field38011.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.password_field38011.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38011);

/**
 * Creates a range input field.
 */
sablono.core.range_field38016 = (function sablono$core$range_field38016(var_args){
var G__38019 = arguments.length;
switch (G__38019) {
case 1:
return sablono.core.range_field38016.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38016.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38016.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37864__auto__);
}));

(sablono.core.range_field38016.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.range_field38016.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38016);

/**
 * Creates a search input field.
 */
sablono.core.search_field38025 = (function sablono$core$search_field38025(var_args){
var G__38027 = arguments.length;
switch (G__38027) {
case 1:
return sablono.core.search_field38025.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38025.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38025.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37864__auto__);
}));

(sablono.core.search_field38025.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.search_field38025.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38025);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38029 = (function sablono$core$tel_field38029(var_args){
var G__38031 = arguments.length;
switch (G__38031) {
case 1:
return sablono.core.tel_field38029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38029.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37864__auto__);
}));

(sablono.core.tel_field38029.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.tel_field38029.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38029);

/**
 * Creates a text input field.
 */
sablono.core.text_field38035 = (function sablono$core$text_field38035(var_args){
var G__38038 = arguments.length;
switch (G__38038) {
case 1:
return sablono.core.text_field38035.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38035.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38035.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37864__auto__);
}));

(sablono.core.text_field38035.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.text_field38035.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38035);

/**
 * Creates a time input field.
 */
sablono.core.time_field38040 = (function sablono$core$time_field38040(var_args){
var G__38043 = arguments.length;
switch (G__38043) {
case 1:
return sablono.core.time_field38040.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38040.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38040.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37864__auto__);
}));

(sablono.core.time_field38040.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.time_field38040.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38040);

/**
 * Creates a url input field.
 */
sablono.core.url_field38045 = (function sablono$core$url_field38045(var_args){
var G__38047 = arguments.length;
switch (G__38047) {
case 1:
return sablono.core.url_field38045.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38045.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38045.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37864__auto__);
}));

(sablono.core.url_field38045.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.url_field38045.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38045);

/**
 * Creates a week input field.
 */
sablono.core.week_field38050 = (function sablono$core$week_field38050(var_args){
var G__38052 = arguments.length;
switch (G__38052) {
case 1:
return sablono.core.week_field38050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38050.cljs$core$IFn$_invoke$arity$1 = (function (name__37864__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37864__auto__);
}));

(sablono.core.week_field38050.cljs$core$IFn$_invoke$arity$2 = (function (name__37864__auto__,value__37865__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37864__auto__,value__37865__auto__);
}));

(sablono.core.week_field38050.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38050);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38054 = (function sablono$core$check_box38054(var_args){
var G__38057 = arguments.length;
switch (G__38057) {
case 1:
return sablono.core.check_box38054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38054.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38054.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38054.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38054.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38054.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38054);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38064 = (function sablono$core$radio_button38064(var_args){
var G__38066 = arguments.length;
switch (G__38066) {
case 1:
return sablono.core.radio_button38064.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38064.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38064.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38064.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38064.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38064.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38064.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38064);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38071 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38071);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38073 = (function sablono$core$select_options38073(coll){
var iter__4582__auto__ = (function sablono$core$select_options38073_$_iter__38074(s__38075){
return (new cljs.core.LazySeq(null,(function (){
var s__38075__$1 = s__38075;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38075__$1);
if(temp__5735__auto__){
var s__38075__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38075__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38075__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38077 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38076 = (0);
while(true){
if((i__38076 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38076);
cljs.core.chunk_append(b__38077,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38079 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38079,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38079,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38079,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38073.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38073.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38073.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38215 = (i__38076 + (1));
i__38076 = G__38215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38077),sablono$core$select_options38073_$_iter__38074(cljs.core.chunk_rest(s__38075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38077),null);
}
} else {
var x = cljs.core.first(s__38075__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38084 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38084,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38084,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38084,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38073.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38073.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38073.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38073_$_iter__38074(cljs.core.rest(s__38075__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38073);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38089 = (function sablono$core$drop_down38089(var_args){
var G__38091 = arguments.length;
switch (G__38091) {
case 2:
return sablono.core.drop_down38089.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38089.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38089.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38089.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38089.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38089.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38089);
/**
 * Creates a text area element.
 */
sablono.core.text_area38094 = (function sablono$core$text_area38094(var_args){
var G__38096 = arguments.length;
switch (G__38096) {
case 1:
return sablono.core.text_area38094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38094.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38094.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38094.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38094);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38100 = (function sablono$core$label38100(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38100);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38102 = (function sablono$core$submit_button38102(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38102);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38105 = (function sablono$core$reset_button38105(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38105);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38107 = (function sablono$core$form_to38107(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38227 = arguments.length;
var i__4790__auto___38228 = (0);
while(true){
if((i__4790__auto___38228 < len__4789__auto___38227)){
args__4795__auto__.push((arguments[i__4790__auto___38228]));

var G__38229 = (i__4790__auto___38228 + (1));
i__4790__auto___38228 = G__38229;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38107.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38107.cljs$core$IFn$_invoke$arity$variadic = (function (p__38112,body){
var vec__38113 = p__38112;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38113,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38113,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38117 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38118 = "_method";
var G__38119 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38117,G__38118,G__38119) : sablono.core.hidden_field.call(null,G__38117,G__38118,G__38119));
})()], null)),body));
}));

(sablono.core.form_to38107.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38107.cljs$lang$applyTo = (function (seq38109){
var G__38110 = cljs.core.first(seq38109);
var seq38109__$1 = cljs.core.next(seq38109);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38110,seq38109__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38107);

//# sourceMappingURL=sablono.core.js.map
