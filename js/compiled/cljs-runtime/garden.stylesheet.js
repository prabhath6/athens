goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51791 = arguments.length;
var i__4790__auto___51792 = (0);
while(true){
if((i__4790__auto___51792 < len__4789__auto___51791)){
args__4795__auto__.push((arguments[i__4790__auto___51792]));

var G__51794 = (i__4790__auto___51792 + (1));
i__4790__auto___51792 = G__51794;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__51804__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__51804 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__51809__i = 0, G__51809__a = new Array(arguments.length -  0);
while (G__51809__i < G__51809__a.length) {G__51809__a[G__51809__i] = arguments[G__51809__i + 0]; ++G__51809__i;}
  children = new cljs.core.IndexedSeq(G__51809__a,0,null);
} 
return G__51804__delegate.call(this,children);};
G__51804.cljs$lang$maxFixedArity = 0;
G__51804.cljs$lang$applyTo = (function (arglist__51810){
var children = cljs.core.seq(arglist__51810);
return G__51804__delegate(children);
});
G__51804.cljs$core$IFn$_invoke$arity$variadic = G__51804__delegate;
return G__51804;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq51608){
var G__51609 = cljs.core.first(seq51608);
var seq51608__$1 = cljs.core.next(seq51608);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51609,seq51608__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__51818__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__51818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51819__i = 0, G__51819__a = new Array(arguments.length -  0);
while (G__51819__i < G__51819__a.length) {G__51819__a[G__51819__i] = arguments[G__51819__i + 0]; ++G__51819__i;}
  args = new cljs.core.IndexedSeq(G__51819__a,0,null);
} 
return G__51818__delegate.call(this,args);};
G__51818.cljs$lang$maxFixedArity = 0;
G__51818.cljs$lang$applyTo = (function (arglist__51820){
var args = cljs.core.seq(arglist__51820);
return G__51818__delegate(args);
});
G__51818.cljs$core$IFn$_invoke$arity$variadic = G__51818__delegate;
return G__51818;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51829 = arguments.length;
var i__4790__auto___51830 = (0);
while(true){
if((i__4790__auto___51830 < len__4789__auto___51829)){
args__4795__auto__.push((arguments[i__4790__auto___51830]));

var G__51831 = (i__4790__auto___51830 + (1));
i__4790__auto___51830 = G__51831;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq51644){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51644));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__51673 = arguments.length;
switch (G__51673) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___51834 = arguments.length;
var i__4790__auto___51835 = (0);
while(true){
if((i__4790__auto___51835 < len__4789__auto___51834)){
args_arr__4810__auto__.push((arguments[i__4790__auto___51835]));

var G__51836 = (i__4790__auto___51835 + (1));
i__4790__auto___51835 = G__51836;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq51670){
var G__51671 = cljs.core.first(seq51670);
var seq51670__$1 = cljs.core.next(seq51670);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51671,seq51670__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51847 = arguments.length;
var i__4790__auto___51848 = (0);
while(true){
if((i__4790__auto___51848 < len__4789__auto___51847)){
args__4795__auto__.push((arguments[i__4790__auto___51848]));

var G__51849 = (i__4790__auto___51848 + (1));
i__4790__auto___51848 = G__51849;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq51714){
var G__51716 = cljs.core.first(seq51714);
var seq51714__$1 = cljs.core.next(seq51714);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51716,seq51714__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51850 = arguments.length;
var i__4790__auto___51851 = (0);
while(true){
if((i__4790__auto___51851 < len__4789__auto___51850)){
args__4795__auto__.push((arguments[i__4790__auto___51851]));

var G__51852 = (i__4790__auto___51851 + (1));
i__4790__auto___51851 = G__51852;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq51729){
var G__51730 = cljs.core.first(seq51729);
var seq51729__$1 = cljs.core.next(seq51729);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51730,seq51729__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51857 = arguments.length;
var i__4790__auto___51858 = (0);
while(true){
if((i__4790__auto___51858 < len__4789__auto___51857)){
args__4795__auto__.push((arguments[i__4790__auto___51858]));

var G__51859 = (i__4790__auto___51858 + (1));
i__4790__auto___51858 = G__51859;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq51754){
var G__51755 = cljs.core.first(seq51754);
var seq51754__$1 = cljs.core.next(seq51754);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51755,seq51754__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
