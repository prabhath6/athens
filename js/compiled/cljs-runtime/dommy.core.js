goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__36573 = arguments.length;
switch (G__36573) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__36575 = arguments.length;
switch (G__36575) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__36578 = arguments.length;
switch (G__36578) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__36576_SHARP_){
return (!((p1__36576_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37024 = arguments.length;
var i__4790__auto___37025 = (0);
while(true){
if((i__4790__auto___37025 < len__4789__auto___37024)){
args__4795__auto__.push((arguments[i__4790__auto___37025]));

var G__37026 = (i__4790__auto___37025 + (1));
i__4790__auto___37025 = G__37026;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__36583_37027 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36584_37028 = null;
var count__36585_37029 = (0);
var i__36586_37030 = (0);
while(true){
if((i__36586_37030 < count__36585_37029)){
var vec__36593_37031 = chunk__36584_37028.cljs$core$IIndexed$_nth$arity$2(null,i__36586_37030);
var k_37032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36593_37031,(0),null);
var v_37033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36593_37031,(1),null);
style.setProperty(dommy.utils.as_str(k_37032),v_37033);


var G__37035 = seq__36583_37027;
var G__37036 = chunk__36584_37028;
var G__37037 = count__36585_37029;
var G__37038 = (i__36586_37030 + (1));
seq__36583_37027 = G__37035;
chunk__36584_37028 = G__37036;
count__36585_37029 = G__37037;
i__36586_37030 = G__37038;
continue;
} else {
var temp__5735__auto___37040 = cljs.core.seq(seq__36583_37027);
if(temp__5735__auto___37040){
var seq__36583_37041__$1 = temp__5735__auto___37040;
if(cljs.core.chunked_seq_QMARK_(seq__36583_37041__$1)){
var c__4609__auto___37042 = cljs.core.chunk_first(seq__36583_37041__$1);
var G__37043 = cljs.core.chunk_rest(seq__36583_37041__$1);
var G__37044 = c__4609__auto___37042;
var G__37045 = cljs.core.count(c__4609__auto___37042);
var G__37046 = (0);
seq__36583_37027 = G__37043;
chunk__36584_37028 = G__37044;
count__36585_37029 = G__37045;
i__36586_37030 = G__37046;
continue;
} else {
var vec__36596_37047 = cljs.core.first(seq__36583_37041__$1);
var k_37048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_37047,(0),null);
var v_37049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596_37047,(1),null);
style.setProperty(dommy.utils.as_str(k_37048),v_37049);


var G__37050 = cljs.core.next(seq__36583_37041__$1);
var G__37051 = null;
var G__37052 = (0);
var G__37053 = (0);
seq__36583_37027 = G__37050;
chunk__36584_37028 = G__37051;
count__36585_37029 = G__37052;
i__36586_37030 = G__37053;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq36581){
var G__36582 = cljs.core.first(seq36581);
var seq36581__$1 = cljs.core.next(seq36581);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36582,seq36581__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37054 = arguments.length;
var i__4790__auto___37055 = (0);
while(true){
if((i__4790__auto___37055 < len__4789__auto___37054)){
args__4795__auto__.push((arguments[i__4790__auto___37055]));

var G__37056 = (i__4790__auto___37055 + (1));
i__4790__auto___37055 = G__37056;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__36601_37057 = cljs.core.seq(keywords);
var chunk__36602_37058 = null;
var count__36603_37059 = (0);
var i__36604_37060 = (0);
while(true){
if((i__36604_37060 < count__36603_37059)){
var kw_37061 = chunk__36602_37058.cljs$core$IIndexed$_nth$arity$2(null,i__36604_37060);
style.removeProperty(dommy.utils.as_str(kw_37061));


var G__37062 = seq__36601_37057;
var G__37063 = chunk__36602_37058;
var G__37064 = count__36603_37059;
var G__37065 = (i__36604_37060 + (1));
seq__36601_37057 = G__37062;
chunk__36602_37058 = G__37063;
count__36603_37059 = G__37064;
i__36604_37060 = G__37065;
continue;
} else {
var temp__5735__auto___37066 = cljs.core.seq(seq__36601_37057);
if(temp__5735__auto___37066){
var seq__36601_37067__$1 = temp__5735__auto___37066;
if(cljs.core.chunked_seq_QMARK_(seq__36601_37067__$1)){
var c__4609__auto___37068 = cljs.core.chunk_first(seq__36601_37067__$1);
var G__37069 = cljs.core.chunk_rest(seq__36601_37067__$1);
var G__37070 = c__4609__auto___37068;
var G__37071 = cljs.core.count(c__4609__auto___37068);
var G__37072 = (0);
seq__36601_37057 = G__37069;
chunk__36602_37058 = G__37070;
count__36603_37059 = G__37071;
i__36604_37060 = G__37072;
continue;
} else {
var kw_37073 = cljs.core.first(seq__36601_37067__$1);
style.removeProperty(dommy.utils.as_str(kw_37073));


var G__37074 = cljs.core.next(seq__36601_37067__$1);
var G__37075 = null;
var G__37076 = (0);
var G__37077 = (0);
seq__36601_37057 = G__37074;
chunk__36602_37058 = G__37075;
count__36603_37059 = G__37076;
i__36604_37060 = G__37077;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq36599){
var G__36600 = cljs.core.first(seq36599);
var seq36599__$1 = cljs.core.next(seq36599);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36600,seq36599__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37078 = arguments.length;
var i__4790__auto___37079 = (0);
while(true){
if((i__4790__auto___37079 < len__4789__auto___37078)){
args__4795__auto__.push((arguments[i__4790__auto___37079]));

var G__37080 = (i__4790__auto___37079 + (1));
i__4790__auto___37079 = G__37080;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36608_37081 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36609_37082 = null;
var count__36610_37083 = (0);
var i__36611_37084 = (0);
while(true){
if((i__36611_37084 < count__36610_37083)){
var vec__36618_37085 = chunk__36609_37082.cljs$core$IIndexed$_nth$arity$2(null,i__36611_37084);
var k_37086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_37085,(0),null);
var v_37087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618_37085,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37086,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37087),"px"].join('')], 0));


var G__37088 = seq__36608_37081;
var G__37089 = chunk__36609_37082;
var G__37090 = count__36610_37083;
var G__37091 = (i__36611_37084 + (1));
seq__36608_37081 = G__37088;
chunk__36609_37082 = G__37089;
count__36610_37083 = G__37090;
i__36611_37084 = G__37091;
continue;
} else {
var temp__5735__auto___37092 = cljs.core.seq(seq__36608_37081);
if(temp__5735__auto___37092){
var seq__36608_37093__$1 = temp__5735__auto___37092;
if(cljs.core.chunked_seq_QMARK_(seq__36608_37093__$1)){
var c__4609__auto___37094 = cljs.core.chunk_first(seq__36608_37093__$1);
var G__37095 = cljs.core.chunk_rest(seq__36608_37093__$1);
var G__37096 = c__4609__auto___37094;
var G__37097 = cljs.core.count(c__4609__auto___37094);
var G__37098 = (0);
seq__36608_37081 = G__37095;
chunk__36609_37082 = G__37096;
count__36610_37083 = G__37097;
i__36611_37084 = G__37098;
continue;
} else {
var vec__36621_37099 = cljs.core.first(seq__36608_37093__$1);
var k_37100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37099,(0),null);
var v_37101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621_37099,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37100,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37101),"px"].join('')], 0));


var G__37102 = cljs.core.next(seq__36608_37093__$1);
var G__37103 = null;
var G__37104 = (0);
var G__37105 = (0);
seq__36608_37081 = G__37102;
chunk__36609_37082 = G__37103;
count__36610_37083 = G__37104;
i__36611_37084 = G__37105;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq36606){
var G__36607 = cljs.core.first(seq36606);
var seq36606__$1 = cljs.core.next(seq36606);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36607,seq36606__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__36629 = arguments.length;
switch (G__36629) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37107 = arguments.length;
var i__4790__auto___37108 = (0);
while(true){
if((i__4790__auto___37108 < len__4789__auto___37107)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37108]));

var G__37109 = (i__4790__auto___37108 + (1));
i__4790__auto___37108 = G__37109;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__36630 = elem;
(G__36630[k__$1] = v);

return G__36630;
} else {
var G__36631 = elem;
G__36631.setAttribute(k__$1,v);

return G__36631;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36632_37110 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__36633_37111 = null;
var count__36634_37112 = (0);
var i__36635_37113 = (0);
while(true){
if((i__36635_37113 < count__36634_37112)){
var vec__36642_37114 = chunk__36633_37111.cljs$core$IIndexed$_nth$arity$2(null,i__36635_37113);
var k_37115__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36642_37114,(0),null);
var v_37116__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36642_37114,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37115__$1,v_37116__$1);


var G__37117 = seq__36632_37110;
var G__37118 = chunk__36633_37111;
var G__37119 = count__36634_37112;
var G__37120 = (i__36635_37113 + (1));
seq__36632_37110 = G__37117;
chunk__36633_37111 = G__37118;
count__36634_37112 = G__37119;
i__36635_37113 = G__37120;
continue;
} else {
var temp__5735__auto___37121 = cljs.core.seq(seq__36632_37110);
if(temp__5735__auto___37121){
var seq__36632_37122__$1 = temp__5735__auto___37121;
if(cljs.core.chunked_seq_QMARK_(seq__36632_37122__$1)){
var c__4609__auto___37123 = cljs.core.chunk_first(seq__36632_37122__$1);
var G__37124 = cljs.core.chunk_rest(seq__36632_37122__$1);
var G__37125 = c__4609__auto___37123;
var G__37126 = cljs.core.count(c__4609__auto___37123);
var G__37127 = (0);
seq__36632_37110 = G__37124;
chunk__36633_37111 = G__37125;
count__36634_37112 = G__37126;
i__36635_37113 = G__37127;
continue;
} else {
var vec__36645_37128 = cljs.core.first(seq__36632_37122__$1);
var k_37129__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645_37128,(0),null);
var v_37130__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645_37128,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37129__$1,v_37130__$1);


var G__37131 = cljs.core.next(seq__36632_37122__$1);
var G__37132 = null;
var G__37133 = (0);
var G__37134 = (0);
seq__36632_37110 = G__37131;
chunk__36633_37111 = G__37132;
count__36634_37112 = G__37133;
i__36635_37113 = G__37134;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq36625){
var G__36626 = cljs.core.first(seq36625);
var seq36625__$1 = cljs.core.next(seq36625);
var G__36627 = cljs.core.first(seq36625__$1);
var seq36625__$2 = cljs.core.next(seq36625__$1);
var G__36628 = cljs.core.first(seq36625__$2);
var seq36625__$3 = cljs.core.next(seq36625__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36626,G__36627,G__36628,seq36625__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__36652 = arguments.length;
switch (G__36652) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37136 = arguments.length;
var i__4790__auto___37137 = (0);
while(true){
if((i__4790__auto___37137 < len__4789__auto___37136)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37137]));

var G__37138 = (i__4790__auto___37137 + (1));
i__4790__auto___37137 = G__37138;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_37140__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__36653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__36653.cljs$core$IFn$_invoke$arity$1 ? fexpr__36653.cljs$core$IFn$_invoke$arity$1(k_37140__$1) : fexpr__36653.call(null,k_37140__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_37140__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__36654_37142 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__36655_37143 = null;
var count__36656_37144 = (0);
var i__36657_37145 = (0);
while(true){
if((i__36657_37145 < count__36656_37144)){
var k_37146__$1 = chunk__36655_37143.cljs$core$IIndexed$_nth$arity$2(null,i__36657_37145);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37146__$1);


var G__37147 = seq__36654_37142;
var G__37148 = chunk__36655_37143;
var G__37149 = count__36656_37144;
var G__37150 = (i__36657_37145 + (1));
seq__36654_37142 = G__37147;
chunk__36655_37143 = G__37148;
count__36656_37144 = G__37149;
i__36657_37145 = G__37150;
continue;
} else {
var temp__5735__auto___37151 = cljs.core.seq(seq__36654_37142);
if(temp__5735__auto___37151){
var seq__36654_37152__$1 = temp__5735__auto___37151;
if(cljs.core.chunked_seq_QMARK_(seq__36654_37152__$1)){
var c__4609__auto___37153 = cljs.core.chunk_first(seq__36654_37152__$1);
var G__37154 = cljs.core.chunk_rest(seq__36654_37152__$1);
var G__37155 = c__4609__auto___37153;
var G__37156 = cljs.core.count(c__4609__auto___37153);
var G__37157 = (0);
seq__36654_37142 = G__37154;
chunk__36655_37143 = G__37155;
count__36656_37144 = G__37156;
i__36657_37145 = G__37157;
continue;
} else {
var k_37158__$1 = cljs.core.first(seq__36654_37152__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37158__$1);


var G__37159 = cljs.core.next(seq__36654_37152__$1);
var G__37160 = null;
var G__37161 = (0);
var G__37162 = (0);
seq__36654_37142 = G__37159;
chunk__36655_37143 = G__37160;
count__36656_37144 = G__37161;
i__36657_37145 = G__37162;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq36649){
var G__36650 = cljs.core.first(seq36649);
var seq36649__$1 = cljs.core.next(seq36649);
var G__36651 = cljs.core.first(seq36649__$1);
var seq36649__$2 = cljs.core.next(seq36649__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36650,G__36651,seq36649__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__36659 = arguments.length;
switch (G__36659) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__36664 = arguments.length;
switch (G__36664) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37169 = arguments.length;
var i__4790__auto___37170 = (0);
while(true){
if((i__4790__auto___37170 < len__4789__auto___37169)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37170]));

var G__37172 = (i__4790__auto___37170 + (1));
i__4790__auto___37170 = G__37172;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___37177 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37177)){
var class_list_37178 = temp__5733__auto___37177;
var seq__36665_37179 = cljs.core.seq(classes__$1);
var chunk__36666_37180 = null;
var count__36667_37181 = (0);
var i__36668_37182 = (0);
while(true){
if((i__36668_37182 < count__36667_37181)){
var c_37183 = chunk__36666_37180.cljs$core$IIndexed$_nth$arity$2(null,i__36668_37182);
class_list_37178.add(c_37183);


var G__37185 = seq__36665_37179;
var G__37186 = chunk__36666_37180;
var G__37187 = count__36667_37181;
var G__37188 = (i__36668_37182 + (1));
seq__36665_37179 = G__37185;
chunk__36666_37180 = G__37186;
count__36667_37181 = G__37187;
i__36668_37182 = G__37188;
continue;
} else {
var temp__5735__auto___37190 = cljs.core.seq(seq__36665_37179);
if(temp__5735__auto___37190){
var seq__36665_37191__$1 = temp__5735__auto___37190;
if(cljs.core.chunked_seq_QMARK_(seq__36665_37191__$1)){
var c__4609__auto___37192 = cljs.core.chunk_first(seq__36665_37191__$1);
var G__37193 = cljs.core.chunk_rest(seq__36665_37191__$1);
var G__37194 = c__4609__auto___37192;
var G__37195 = cljs.core.count(c__4609__auto___37192);
var G__37196 = (0);
seq__36665_37179 = G__37193;
chunk__36666_37180 = G__37194;
count__36667_37181 = G__37195;
i__36668_37182 = G__37196;
continue;
} else {
var c_37197 = cljs.core.first(seq__36665_37191__$1);
class_list_37178.add(c_37197);


var G__37198 = cljs.core.next(seq__36665_37191__$1);
var G__37199 = null;
var G__37200 = (0);
var G__37201 = (0);
seq__36665_37179 = G__37198;
chunk__36666_37180 = G__37199;
count__36667_37181 = G__37200;
i__36668_37182 = G__37201;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36669_37202 = cljs.core.seq(classes__$1);
var chunk__36670_37203 = null;
var count__36671_37204 = (0);
var i__36672_37205 = (0);
while(true){
if((i__36672_37205 < count__36671_37204)){
var c_37207 = chunk__36670_37203.cljs$core$IIndexed$_nth$arity$2(null,i__36672_37205);
var class_name_37209 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37209,c_37207))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37209 === ""))?c_37207:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37209)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37207)].join('')));
}


var G__37212 = seq__36669_37202;
var G__37213 = chunk__36670_37203;
var G__37214 = count__36671_37204;
var G__37215 = (i__36672_37205 + (1));
seq__36669_37202 = G__37212;
chunk__36670_37203 = G__37213;
count__36671_37204 = G__37214;
i__36672_37205 = G__37215;
continue;
} else {
var temp__5735__auto___37216 = cljs.core.seq(seq__36669_37202);
if(temp__5735__auto___37216){
var seq__36669_37217__$1 = temp__5735__auto___37216;
if(cljs.core.chunked_seq_QMARK_(seq__36669_37217__$1)){
var c__4609__auto___37218 = cljs.core.chunk_first(seq__36669_37217__$1);
var G__37219 = cljs.core.chunk_rest(seq__36669_37217__$1);
var G__37220 = c__4609__auto___37218;
var G__37221 = cljs.core.count(c__4609__auto___37218);
var G__37222 = (0);
seq__36669_37202 = G__37219;
chunk__36670_37203 = G__37220;
count__36671_37204 = G__37221;
i__36672_37205 = G__37222;
continue;
} else {
var c_37223 = cljs.core.first(seq__36669_37217__$1);
var class_name_37224 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37224,c_37223))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37224 === ""))?c_37223:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37224)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37223)].join('')));
}


var G__37228 = cljs.core.next(seq__36669_37217__$1);
var G__37229 = null;
var G__37230 = (0);
var G__37231 = (0);
seq__36669_37202 = G__37228;
chunk__36670_37203 = G__37229;
count__36671_37204 = G__37230;
i__36672_37205 = G__37231;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__36673_37234 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36674_37235 = null;
var count__36675_37236 = (0);
var i__36676_37237 = (0);
while(true){
if((i__36676_37237 < count__36675_37236)){
var c_37238 = chunk__36674_37235.cljs$core$IIndexed$_nth$arity$2(null,i__36676_37237);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37238);


var G__37239 = seq__36673_37234;
var G__37240 = chunk__36674_37235;
var G__37241 = count__36675_37236;
var G__37242 = (i__36676_37237 + (1));
seq__36673_37234 = G__37239;
chunk__36674_37235 = G__37240;
count__36675_37236 = G__37241;
i__36676_37237 = G__37242;
continue;
} else {
var temp__5735__auto___37244 = cljs.core.seq(seq__36673_37234);
if(temp__5735__auto___37244){
var seq__36673_37247__$1 = temp__5735__auto___37244;
if(cljs.core.chunked_seq_QMARK_(seq__36673_37247__$1)){
var c__4609__auto___37250 = cljs.core.chunk_first(seq__36673_37247__$1);
var G__37251 = cljs.core.chunk_rest(seq__36673_37247__$1);
var G__37252 = c__4609__auto___37250;
var G__37253 = cljs.core.count(c__4609__auto___37250);
var G__37254 = (0);
seq__36673_37234 = G__37251;
chunk__36674_37235 = G__37252;
count__36675_37236 = G__37253;
i__36676_37237 = G__37254;
continue;
} else {
var c_37255 = cljs.core.first(seq__36673_37247__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37255);


var G__37256 = cljs.core.next(seq__36673_37247__$1);
var G__37257 = null;
var G__37258 = (0);
var G__37259 = (0);
seq__36673_37234 = G__37256;
chunk__36674_37235 = G__37257;
count__36675_37236 = G__37258;
i__36676_37237 = G__37259;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq36661){
var G__36662 = cljs.core.first(seq36661);
var seq36661__$1 = cljs.core.next(seq36661);
var G__36663 = cljs.core.first(seq36661__$1);
var seq36661__$2 = cljs.core.next(seq36661__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36662,G__36663,seq36661__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__36681 = arguments.length;
switch (G__36681) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37261 = arguments.length;
var i__4790__auto___37262 = (0);
while(true){
if((i__4790__auto___37262 < len__4789__auto___37261)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37262]));

var G__37263 = (i__4790__auto___37262 + (1));
i__4790__auto___37262 = G__37263;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___37264 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37264)){
var class_list_37265 = temp__5733__auto___37264;
class_list_37265.remove(c__$1);
} else {
var class_name_37266 = dommy.core.class$(elem);
var new_class_name_37267 = dommy.utils.remove_class_str(class_name_37266,c__$1);
if((class_name_37266 === new_class_name_37267)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_37267);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__36682 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__36683 = null;
var count__36684 = (0);
var i__36685 = (0);
while(true){
if((i__36685 < count__36684)){
var c = chunk__36683.cljs$core$IIndexed$_nth$arity$2(null,i__36685);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37268 = seq__36682;
var G__37269 = chunk__36683;
var G__37270 = count__36684;
var G__37271 = (i__36685 + (1));
seq__36682 = G__37268;
chunk__36683 = G__37269;
count__36684 = G__37270;
i__36685 = G__37271;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36682);
if(temp__5735__auto__){
var seq__36682__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36682__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36682__$1);
var G__37272 = cljs.core.chunk_rest(seq__36682__$1);
var G__37273 = c__4609__auto__;
var G__37274 = cljs.core.count(c__4609__auto__);
var G__37275 = (0);
seq__36682 = G__37272;
chunk__36683 = G__37273;
count__36684 = G__37274;
i__36685 = G__37275;
continue;
} else {
var c = cljs.core.first(seq__36682__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37276 = cljs.core.next(seq__36682__$1);
var G__37277 = null;
var G__37278 = (0);
var G__37279 = (0);
seq__36682 = G__37276;
chunk__36683 = G__37277;
count__36684 = G__37278;
i__36685 = G__37279;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq36678){
var G__36679 = cljs.core.first(seq36678);
var seq36678__$1 = cljs.core.next(seq36678);
var G__36680 = cljs.core.first(seq36678__$1);
var seq36678__$2 = cljs.core.next(seq36678__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36679,G__36680,seq36678__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__36688 = arguments.length;
switch (G__36688) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___37281 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37281)){
var class_list_37282 = temp__5733__auto___37281;
class_list_37282.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__36692 = arguments.length;
switch (G__36692) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__36694 = arguments.length;
switch (G__36694) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__36699 = arguments.length;
switch (G__36699) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37286 = arguments.length;
var i__4790__auto___37287 = (0);
while(true){
if((i__4790__auto___37287 < len__4789__auto___37286)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37287]));

var G__37288 = (i__4790__auto___37287 + (1));
i__4790__auto___37287 = G__37288;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36700 = parent;
G__36700.appendChild(child);

return G__36700;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36701_37289 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36702_37290 = null;
var count__36703_37291 = (0);
var i__36704_37292 = (0);
while(true){
if((i__36704_37292 < count__36703_37291)){
var c_37293 = chunk__36702_37290.cljs$core$IIndexed$_nth$arity$2(null,i__36704_37292);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37293);


var G__37294 = seq__36701_37289;
var G__37295 = chunk__36702_37290;
var G__37296 = count__36703_37291;
var G__37297 = (i__36704_37292 + (1));
seq__36701_37289 = G__37294;
chunk__36702_37290 = G__37295;
count__36703_37291 = G__37296;
i__36704_37292 = G__37297;
continue;
} else {
var temp__5735__auto___37298 = cljs.core.seq(seq__36701_37289);
if(temp__5735__auto___37298){
var seq__36701_37299__$1 = temp__5735__auto___37298;
if(cljs.core.chunked_seq_QMARK_(seq__36701_37299__$1)){
var c__4609__auto___37300 = cljs.core.chunk_first(seq__36701_37299__$1);
var G__37301 = cljs.core.chunk_rest(seq__36701_37299__$1);
var G__37302 = c__4609__auto___37300;
var G__37303 = cljs.core.count(c__4609__auto___37300);
var G__37304 = (0);
seq__36701_37289 = G__37301;
chunk__36702_37290 = G__37302;
count__36703_37291 = G__37303;
i__36704_37292 = G__37304;
continue;
} else {
var c_37305 = cljs.core.first(seq__36701_37299__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37305);


var G__37306 = cljs.core.next(seq__36701_37299__$1);
var G__37307 = null;
var G__37308 = (0);
var G__37309 = (0);
seq__36701_37289 = G__37306;
chunk__36702_37290 = G__37307;
count__36703_37291 = G__37308;
i__36704_37292 = G__37309;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq36696){
var G__36697 = cljs.core.first(seq36696);
var seq36696__$1 = cljs.core.next(seq36696);
var G__36698 = cljs.core.first(seq36696__$1);
var seq36696__$2 = cljs.core.next(seq36696__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36697,G__36698,seq36696__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__36709 = arguments.length;
switch (G__36709) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37311 = arguments.length;
var i__4790__auto___37312 = (0);
while(true){
if((i__4790__auto___37312 < len__4789__auto___37311)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37312]));

var G__37313 = (i__4790__auto___37312 + (1));
i__4790__auto___37312 = G__37313;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36710 = parent;
G__36710.insertBefore(child,parent.firstChild);

return G__36710;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36711_37314 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36712_37315 = null;
var count__36713_37316 = (0);
var i__36714_37317 = (0);
while(true){
if((i__36714_37317 < count__36713_37316)){
var c_37318 = chunk__36712_37315.cljs$core$IIndexed$_nth$arity$2(null,i__36714_37317);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37318);


var G__37319 = seq__36711_37314;
var G__37320 = chunk__36712_37315;
var G__37321 = count__36713_37316;
var G__37322 = (i__36714_37317 + (1));
seq__36711_37314 = G__37319;
chunk__36712_37315 = G__37320;
count__36713_37316 = G__37321;
i__36714_37317 = G__37322;
continue;
} else {
var temp__5735__auto___37323 = cljs.core.seq(seq__36711_37314);
if(temp__5735__auto___37323){
var seq__36711_37324__$1 = temp__5735__auto___37323;
if(cljs.core.chunked_seq_QMARK_(seq__36711_37324__$1)){
var c__4609__auto___37325 = cljs.core.chunk_first(seq__36711_37324__$1);
var G__37326 = cljs.core.chunk_rest(seq__36711_37324__$1);
var G__37327 = c__4609__auto___37325;
var G__37328 = cljs.core.count(c__4609__auto___37325);
var G__37329 = (0);
seq__36711_37314 = G__37326;
chunk__36712_37315 = G__37327;
count__36713_37316 = G__37328;
i__36714_37317 = G__37329;
continue;
} else {
var c_37330 = cljs.core.first(seq__36711_37324__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37330);


var G__37331 = cljs.core.next(seq__36711_37324__$1);
var G__37332 = null;
var G__37333 = (0);
var G__37334 = (0);
seq__36711_37314 = G__37331;
chunk__36712_37315 = G__37332;
count__36713_37316 = G__37333;
i__36714_37317 = G__37334;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq36706){
var G__36707 = cljs.core.first(seq36706);
var seq36706__$1 = cljs.core.next(seq36706);
var G__36708 = cljs.core.first(seq36706__$1);
var seq36706__$2 = cljs.core.next(seq36706__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36707,G__36708,seq36706__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___37335 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___37335)){
var next_37336 = temp__5733__auto___37335;
dommy.core.insert_before_BANG_(elem,next_37336);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__36716 = arguments.length;
switch (G__36716) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__36717 = p;
G__36717.removeChild(elem);

return G__36717;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36718){
var vec__36719 = p__36718;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36719,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36719,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37351 = arguments.length;
var i__4790__auto___37352 = (0);
while(true){
if((i__4790__auto___37352 < len__4789__auto___37351)){
args__4795__auto__.push((arguments[i__4790__auto___37352]));

var G__37353 = (i__4790__auto___37352 + (1));
i__4790__auto___37352 = G__37353;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq36722){
var G__36723 = cljs.core.first(seq36722);
var seq36722__$1 = cljs.core.next(seq36722);
var G__36724 = cljs.core.first(seq36722__$1);
var seq36722__$2 = cljs.core.next(seq36722__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36723,G__36724,seq36722__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__36726 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__36726.cljs$core$IFn$_invoke$arity$1 ? fexpr__36726.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__36726.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37363 = arguments.length;
var i__4790__auto___37364 = (0);
while(true){
if((i__4790__auto___37364 < len__4789__auto___37363)){
args__4795__auto__.push((arguments[i__4790__auto___37364]));

var G__37367 = (i__4790__auto___37364 + (1));
i__4790__auto___37364 = G__37367;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36731_37370 = dommy.core.elem_and_selector(elem_sel);
var elem_37371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36731_37370,(0),null);
var selector_37372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36731_37370,(1),null);
var seq__36734_37377 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36741_37378 = null;
var count__36742_37379 = (0);
var i__36743_37380 = (0);
while(true){
if((i__36743_37380 < count__36742_37379)){
var vec__36799_37382 = chunk__36741_37378.cljs$core$IIndexed$_nth$arity$2(null,i__36743_37380);
var orig_type_37383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799_37382,(0),null);
var f_37384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799_37382,(1),null);
var seq__36744_37385 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37383,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37383,cljs.core.identity])));
var chunk__36746_37386 = null;
var count__36747_37387 = (0);
var i__36748_37388 = (0);
while(true){
if((i__36748_37388 < count__36747_37387)){
var vec__36812_37393 = chunk__36746_37386.cljs$core$IIndexed$_nth$arity$2(null,i__36748_37388);
var actual_type_37394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36812_37393,(0),null);
var factory_37395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36812_37393,(1),null);
var canonical_f_37396 = (function (){var G__36820 = (factory_37395.cljs$core$IFn$_invoke$arity$1 ? factory_37395.cljs$core$IFn$_invoke$arity$1(f_37384) : factory_37395.call(null,f_37384));
var fexpr__36819 = (cljs.core.truth_(selector_37372)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37371,selector_37372):cljs.core.identity);
return (fexpr__36819.cljs$core$IFn$_invoke$arity$1 ? fexpr__36819.cljs$core$IFn$_invoke$arity$1(G__36820) : fexpr__36819.call(null,G__36820));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37371,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37372,actual_type_37394,f_37384], null),canonical_f_37396], 0));

if(cljs.core.truth_(elem_37371.addEventListener)){
elem_37371.addEventListener(cljs.core.name(actual_type_37394),canonical_f_37396);
} else {
elem_37371.attachEvent(cljs.core.name(actual_type_37394),canonical_f_37396);
}


var G__37401 = seq__36744_37385;
var G__37402 = chunk__36746_37386;
var G__37403 = count__36747_37387;
var G__37404 = (i__36748_37388 + (1));
seq__36744_37385 = G__37401;
chunk__36746_37386 = G__37402;
count__36747_37387 = G__37403;
i__36748_37388 = G__37404;
continue;
} else {
var temp__5735__auto___37406 = cljs.core.seq(seq__36744_37385);
if(temp__5735__auto___37406){
var seq__36744_37407__$1 = temp__5735__auto___37406;
if(cljs.core.chunked_seq_QMARK_(seq__36744_37407__$1)){
var c__4609__auto___37408 = cljs.core.chunk_first(seq__36744_37407__$1);
var G__37411 = cljs.core.chunk_rest(seq__36744_37407__$1);
var G__37412 = c__4609__auto___37408;
var G__37413 = cljs.core.count(c__4609__auto___37408);
var G__37414 = (0);
seq__36744_37385 = G__37411;
chunk__36746_37386 = G__37412;
count__36747_37387 = G__37413;
i__36748_37388 = G__37414;
continue;
} else {
var vec__36821_37418 = cljs.core.first(seq__36744_37407__$1);
var actual_type_37419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36821_37418,(0),null);
var factory_37420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36821_37418,(1),null);
var canonical_f_37421 = (function (){var G__36825 = (factory_37420.cljs$core$IFn$_invoke$arity$1 ? factory_37420.cljs$core$IFn$_invoke$arity$1(f_37384) : factory_37420.call(null,f_37384));
var fexpr__36824 = (cljs.core.truth_(selector_37372)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37371,selector_37372):cljs.core.identity);
return (fexpr__36824.cljs$core$IFn$_invoke$arity$1 ? fexpr__36824.cljs$core$IFn$_invoke$arity$1(G__36825) : fexpr__36824.call(null,G__36825));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37371,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37372,actual_type_37419,f_37384], null),canonical_f_37421], 0));

if(cljs.core.truth_(elem_37371.addEventListener)){
elem_37371.addEventListener(cljs.core.name(actual_type_37419),canonical_f_37421);
} else {
elem_37371.attachEvent(cljs.core.name(actual_type_37419),canonical_f_37421);
}


var G__37425 = cljs.core.next(seq__36744_37407__$1);
var G__37426 = null;
var G__37427 = (0);
var G__37428 = (0);
seq__36744_37385 = G__37425;
chunk__36746_37386 = G__37426;
count__36747_37387 = G__37427;
i__36748_37388 = G__37428;
continue;
}
} else {
}
}
break;
}

var G__37431 = seq__36734_37377;
var G__37432 = chunk__36741_37378;
var G__37433 = count__36742_37379;
var G__37434 = (i__36743_37380 + (1));
seq__36734_37377 = G__37431;
chunk__36741_37378 = G__37432;
count__36742_37379 = G__37433;
i__36743_37380 = G__37434;
continue;
} else {
var temp__5735__auto___37436 = cljs.core.seq(seq__36734_37377);
if(temp__5735__auto___37436){
var seq__36734_37437__$1 = temp__5735__auto___37436;
if(cljs.core.chunked_seq_QMARK_(seq__36734_37437__$1)){
var c__4609__auto___37438 = cljs.core.chunk_first(seq__36734_37437__$1);
var G__37441 = cljs.core.chunk_rest(seq__36734_37437__$1);
var G__37442 = c__4609__auto___37438;
var G__37443 = cljs.core.count(c__4609__auto___37438);
var G__37444 = (0);
seq__36734_37377 = G__37441;
chunk__36741_37378 = G__37442;
count__36742_37379 = G__37443;
i__36743_37380 = G__37444;
continue;
} else {
var vec__36826_37446 = cljs.core.first(seq__36734_37437__$1);
var orig_type_37447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826_37446,(0),null);
var f_37448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36826_37446,(1),null);
var seq__36735_37449 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37447,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37447,cljs.core.identity])));
var chunk__36737_37450 = null;
var count__36738_37451 = (0);
var i__36739_37452 = (0);
while(true){
if((i__36739_37452 < count__36738_37451)){
var vec__36846_37459 = chunk__36737_37450.cljs$core$IIndexed$_nth$arity$2(null,i__36739_37452);
var actual_type_37460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846_37459,(0),null);
var factory_37461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846_37459,(1),null);
var canonical_f_37466 = (function (){var G__36850 = (factory_37461.cljs$core$IFn$_invoke$arity$1 ? factory_37461.cljs$core$IFn$_invoke$arity$1(f_37448) : factory_37461.call(null,f_37448));
var fexpr__36849 = (cljs.core.truth_(selector_37372)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37371,selector_37372):cljs.core.identity);
return (fexpr__36849.cljs$core$IFn$_invoke$arity$1 ? fexpr__36849.cljs$core$IFn$_invoke$arity$1(G__36850) : fexpr__36849.call(null,G__36850));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37371,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37372,actual_type_37460,f_37448], null),canonical_f_37466], 0));

if(cljs.core.truth_(elem_37371.addEventListener)){
elem_37371.addEventListener(cljs.core.name(actual_type_37460),canonical_f_37466);
} else {
elem_37371.attachEvent(cljs.core.name(actual_type_37460),canonical_f_37466);
}


var G__37472 = seq__36735_37449;
var G__37473 = chunk__36737_37450;
var G__37474 = count__36738_37451;
var G__37475 = (i__36739_37452 + (1));
seq__36735_37449 = G__37472;
chunk__36737_37450 = G__37473;
count__36738_37451 = G__37474;
i__36739_37452 = G__37475;
continue;
} else {
var temp__5735__auto___37476__$1 = cljs.core.seq(seq__36735_37449);
if(temp__5735__auto___37476__$1){
var seq__36735_37477__$1 = temp__5735__auto___37476__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36735_37477__$1)){
var c__4609__auto___37478 = cljs.core.chunk_first(seq__36735_37477__$1);
var G__37481 = cljs.core.chunk_rest(seq__36735_37477__$1);
var G__37482 = c__4609__auto___37478;
var G__37483 = cljs.core.count(c__4609__auto___37478);
var G__37484 = (0);
seq__36735_37449 = G__37481;
chunk__36737_37450 = G__37482;
count__36738_37451 = G__37483;
i__36739_37452 = G__37484;
continue;
} else {
var vec__36851_37486 = cljs.core.first(seq__36735_37477__$1);
var actual_type_37487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851_37486,(0),null);
var factory_37488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851_37486,(1),null);
var canonical_f_37489 = (function (){var G__36855 = (factory_37488.cljs$core$IFn$_invoke$arity$1 ? factory_37488.cljs$core$IFn$_invoke$arity$1(f_37448) : factory_37488.call(null,f_37448));
var fexpr__36854 = (cljs.core.truth_(selector_37372)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37371,selector_37372):cljs.core.identity);
return (fexpr__36854.cljs$core$IFn$_invoke$arity$1 ? fexpr__36854.cljs$core$IFn$_invoke$arity$1(G__36855) : fexpr__36854.call(null,G__36855));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37371,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37372,actual_type_37487,f_37448], null),canonical_f_37489], 0));

if(cljs.core.truth_(elem_37371.addEventListener)){
elem_37371.addEventListener(cljs.core.name(actual_type_37487),canonical_f_37489);
} else {
elem_37371.attachEvent(cljs.core.name(actual_type_37487),canonical_f_37489);
}


var G__37496 = cljs.core.next(seq__36735_37477__$1);
var G__37497 = null;
var G__37498 = (0);
var G__37499 = (0);
seq__36735_37449 = G__37496;
chunk__36737_37450 = G__37497;
count__36738_37451 = G__37498;
i__36739_37452 = G__37499;
continue;
}
} else {
}
}
break;
}

var G__37500 = cljs.core.next(seq__36734_37437__$1);
var G__37501 = null;
var G__37502 = (0);
var G__37503 = (0);
seq__36734_37377 = G__37500;
chunk__36741_37378 = G__37501;
count__36742_37379 = G__37502;
i__36743_37380 = G__37503;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq36729){
var G__36730 = cljs.core.first(seq36729);
var seq36729__$1 = cljs.core.next(seq36729);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36730,seq36729__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37509 = arguments.length;
var i__4790__auto___37511 = (0);
while(true){
if((i__4790__auto___37511 < len__4789__auto___37509)){
args__4795__auto__.push((arguments[i__4790__auto___37511]));

var G__37512 = (i__4790__auto___37511 + (1));
i__4790__auto___37511 = G__37512;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36861_37515 = dommy.core.elem_and_selector(elem_sel);
var elem_37516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36861_37515,(0),null);
var selector_37517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36861_37515,(1),null);
var seq__36864_37539 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36873_37540 = null;
var count__36874_37541 = (0);
var i__36875_37542 = (0);
while(true){
if((i__36875_37542 < count__36874_37541)){
var vec__36961_37543 = chunk__36873_37540.cljs$core$IIndexed$_nth$arity$2(null,i__36875_37542);
var orig_type_37544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36961_37543,(0),null);
var f_37545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36961_37543,(1),null);
var seq__36876_37547 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37544,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37544,cljs.core.identity])));
var chunk__36878_37548 = null;
var count__36879_37549 = (0);
var i__36880_37550 = (0);
while(true){
if((i__36880_37550 < count__36879_37549)){
var vec__36973_37552 = chunk__36878_37548.cljs$core$IIndexed$_nth$arity$2(null,i__36880_37550);
var actual_type_37553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973_37552,(0),null);
var __37554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973_37552,(1),null);
var keys_37556 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37517,actual_type_37553,f_37545], null);
var canonical_f_37557 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37516),keys_37556);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37516,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37556], 0));

if(cljs.core.truth_(elem_37516.removeEventListener)){
elem_37516.removeEventListener(cljs.core.name(actual_type_37553),canonical_f_37557);
} else {
elem_37516.detachEvent(cljs.core.name(actual_type_37553),canonical_f_37557);
}


var G__37559 = seq__36876_37547;
var G__37560 = chunk__36878_37548;
var G__37561 = count__36879_37549;
var G__37562 = (i__36880_37550 + (1));
seq__36876_37547 = G__37559;
chunk__36878_37548 = G__37560;
count__36879_37549 = G__37561;
i__36880_37550 = G__37562;
continue;
} else {
var temp__5735__auto___37570 = cljs.core.seq(seq__36876_37547);
if(temp__5735__auto___37570){
var seq__36876_37571__$1 = temp__5735__auto___37570;
if(cljs.core.chunked_seq_QMARK_(seq__36876_37571__$1)){
var c__4609__auto___37573 = cljs.core.chunk_first(seq__36876_37571__$1);
var G__37574 = cljs.core.chunk_rest(seq__36876_37571__$1);
var G__37575 = c__4609__auto___37573;
var G__37576 = cljs.core.count(c__4609__auto___37573);
var G__37577 = (0);
seq__36876_37547 = G__37574;
chunk__36878_37548 = G__37575;
count__36879_37549 = G__37576;
i__36880_37550 = G__37577;
continue;
} else {
var vec__36977_37579 = cljs.core.first(seq__36876_37571__$1);
var actual_type_37580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977_37579,(0),null);
var __37581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977_37579,(1),null);
var keys_37589 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37517,actual_type_37580,f_37545], null);
var canonical_f_37590 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37516),keys_37589);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37516,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37589], 0));

if(cljs.core.truth_(elem_37516.removeEventListener)){
elem_37516.removeEventListener(cljs.core.name(actual_type_37580),canonical_f_37590);
} else {
elem_37516.detachEvent(cljs.core.name(actual_type_37580),canonical_f_37590);
}


var G__37595 = cljs.core.next(seq__36876_37571__$1);
var G__37596 = null;
var G__37597 = (0);
var G__37598 = (0);
seq__36876_37547 = G__37595;
chunk__36878_37548 = G__37596;
count__36879_37549 = G__37597;
i__36880_37550 = G__37598;
continue;
}
} else {
}
}
break;
}

var G__37601 = seq__36864_37539;
var G__37602 = chunk__36873_37540;
var G__37603 = count__36874_37541;
var G__37604 = (i__36875_37542 + (1));
seq__36864_37539 = G__37601;
chunk__36873_37540 = G__37602;
count__36874_37541 = G__37603;
i__36875_37542 = G__37604;
continue;
} else {
var temp__5735__auto___37605 = cljs.core.seq(seq__36864_37539);
if(temp__5735__auto___37605){
var seq__36864_37606__$1 = temp__5735__auto___37605;
if(cljs.core.chunked_seq_QMARK_(seq__36864_37606__$1)){
var c__4609__auto___37608 = cljs.core.chunk_first(seq__36864_37606__$1);
var G__37609 = cljs.core.chunk_rest(seq__36864_37606__$1);
var G__37610 = c__4609__auto___37608;
var G__37611 = cljs.core.count(c__4609__auto___37608);
var G__37612 = (0);
seq__36864_37539 = G__37609;
chunk__36873_37540 = G__37610;
count__36874_37541 = G__37611;
i__36875_37542 = G__37612;
continue;
} else {
var vec__36981_37615 = cljs.core.first(seq__36864_37606__$1);
var orig_type_37616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36981_37615,(0),null);
var f_37617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36981_37615,(1),null);
var seq__36865_37622 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37616,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37616,cljs.core.identity])));
var chunk__36867_37623 = null;
var count__36868_37624 = (0);
var i__36869_37625 = (0);
while(true){
if((i__36869_37625 < count__36868_37624)){
var vec__36990_37631 = chunk__36867_37623.cljs$core$IIndexed$_nth$arity$2(null,i__36869_37625);
var actual_type_37632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36990_37631,(0),null);
var __37633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36990_37631,(1),null);
var keys_37637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37517,actual_type_37632,f_37617], null);
var canonical_f_37638 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37516),keys_37637);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37516,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37637], 0));

if(cljs.core.truth_(elem_37516.removeEventListener)){
elem_37516.removeEventListener(cljs.core.name(actual_type_37632),canonical_f_37638);
} else {
elem_37516.detachEvent(cljs.core.name(actual_type_37632),canonical_f_37638);
}


var G__37647 = seq__36865_37622;
var G__37648 = chunk__36867_37623;
var G__37649 = count__36868_37624;
var G__37650 = (i__36869_37625 + (1));
seq__36865_37622 = G__37647;
chunk__36867_37623 = G__37648;
count__36868_37624 = G__37649;
i__36869_37625 = G__37650;
continue;
} else {
var temp__5735__auto___37652__$1 = cljs.core.seq(seq__36865_37622);
if(temp__5735__auto___37652__$1){
var seq__36865_37655__$1 = temp__5735__auto___37652__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36865_37655__$1)){
var c__4609__auto___37658 = cljs.core.chunk_first(seq__36865_37655__$1);
var G__37660 = cljs.core.chunk_rest(seq__36865_37655__$1);
var G__37661 = c__4609__auto___37658;
var G__37662 = cljs.core.count(c__4609__auto___37658);
var G__37663 = (0);
seq__36865_37622 = G__37660;
chunk__36867_37623 = G__37661;
count__36868_37624 = G__37662;
i__36869_37625 = G__37663;
continue;
} else {
var vec__36993_37667 = cljs.core.first(seq__36865_37655__$1);
var actual_type_37668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993_37667,(0),null);
var __37669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36993_37667,(1),null);
var keys_37673 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37517,actual_type_37668,f_37617], null);
var canonical_f_37674 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37516),keys_37673);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37516,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37673], 0));

if(cljs.core.truth_(elem_37516.removeEventListener)){
elem_37516.removeEventListener(cljs.core.name(actual_type_37668),canonical_f_37674);
} else {
elem_37516.detachEvent(cljs.core.name(actual_type_37668),canonical_f_37674);
}


var G__37675 = cljs.core.next(seq__36865_37655__$1);
var G__37676 = null;
var G__37677 = (0);
var G__37678 = (0);
seq__36865_37622 = G__37675;
chunk__36867_37623 = G__37676;
count__36868_37624 = G__37677;
i__36869_37625 = G__37678;
continue;
}
} else {
}
}
break;
}

var G__37679 = cljs.core.next(seq__36864_37606__$1);
var G__37680 = null;
var G__37681 = (0);
var G__37682 = (0);
seq__36864_37539 = G__37679;
chunk__36873_37540 = G__37680;
count__36874_37541 = G__37681;
i__36875_37542 = G__37682;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq36857){
var G__36858 = cljs.core.first(seq36857);
var seq36857__$1 = cljs.core.next(seq36857);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36858,seq36857__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37687 = arguments.length;
var i__4790__auto___37688 = (0);
while(true){
if((i__4790__auto___37688 < len__4789__auto___37687)){
args__4795__auto__.push((arguments[i__4790__auto___37688]));

var G__37693 = (i__4790__auto___37688 + (1));
i__4790__auto___37688 = G__37693;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36998_37697 = dommy.core.elem_and_selector(elem_sel);
var elem_37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36998_37697,(0),null);
var selector_37699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36998_37697,(1),null);
var seq__37001_37702 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__37002_37703 = null;
var count__37003_37704 = (0);
var i__37004_37705 = (0);
while(true){
if((i__37004_37705 < count__37003_37704)){
var vec__37011_37707 = chunk__37002_37703.cljs$core$IIndexed$_nth$arity$2(null,i__37004_37705);
var type_37708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011_37707,(0),null);
var f_37709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011_37707,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37708,((function (seq__37001_37702,chunk__37002_37703,count__37003_37704,i__37004_37705,vec__37011_37707,type_37708,f_37709,vec__36998_37697,elem_37698,selector_37699){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37708,dommy$core$this_fn], 0));

return (f_37709.cljs$core$IFn$_invoke$arity$1 ? f_37709.cljs$core$IFn$_invoke$arity$1(e) : f_37709.call(null,e));
});})(seq__37001_37702,chunk__37002_37703,count__37003_37704,i__37004_37705,vec__37011_37707,type_37708,f_37709,vec__36998_37697,elem_37698,selector_37699))
], 0));


var G__37721 = seq__37001_37702;
var G__37722 = chunk__37002_37703;
var G__37723 = count__37003_37704;
var G__37724 = (i__37004_37705 + (1));
seq__37001_37702 = G__37721;
chunk__37002_37703 = G__37722;
count__37003_37704 = G__37723;
i__37004_37705 = G__37724;
continue;
} else {
var temp__5735__auto___37728 = cljs.core.seq(seq__37001_37702);
if(temp__5735__auto___37728){
var seq__37001_37729__$1 = temp__5735__auto___37728;
if(cljs.core.chunked_seq_QMARK_(seq__37001_37729__$1)){
var c__4609__auto___37730 = cljs.core.chunk_first(seq__37001_37729__$1);
var G__37731 = cljs.core.chunk_rest(seq__37001_37729__$1);
var G__37732 = c__4609__auto___37730;
var G__37733 = cljs.core.count(c__4609__auto___37730);
var G__37734 = (0);
seq__37001_37702 = G__37731;
chunk__37002_37703 = G__37732;
count__37003_37704 = G__37733;
i__37004_37705 = G__37734;
continue;
} else {
var vec__37014_37735 = cljs.core.first(seq__37001_37729__$1);
var type_37736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014_37735,(0),null);
var f_37737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014_37735,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37736,((function (seq__37001_37702,chunk__37002_37703,count__37003_37704,i__37004_37705,vec__37014_37735,type_37736,f_37737,seq__37001_37729__$1,temp__5735__auto___37728,vec__36998_37697,elem_37698,selector_37699){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37736,dommy$core$this_fn], 0));

return (f_37737.cljs$core$IFn$_invoke$arity$1 ? f_37737.cljs$core$IFn$_invoke$arity$1(e) : f_37737.call(null,e));
});})(seq__37001_37702,chunk__37002_37703,count__37003_37704,i__37004_37705,vec__37014_37735,type_37736,f_37737,seq__37001_37729__$1,temp__5735__auto___37728,vec__36998_37697,elem_37698,selector_37699))
], 0));


var G__37747 = cljs.core.next(seq__37001_37729__$1);
var G__37748 = null;
var G__37749 = (0);
var G__37750 = (0);
seq__37001_37702 = G__37747;
chunk__37002_37703 = G__37748;
count__37003_37704 = G__37749;
i__37004_37705 = G__37750;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq36996){
var G__36997 = cljs.core.first(seq36996);
var seq36996__$1 = cljs.core.next(seq36996);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36997,seq36996__$1);
}));


//# sourceMappingURL=dommy.core.js.map
