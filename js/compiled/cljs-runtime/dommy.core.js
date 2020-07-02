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
var G__61832 = arguments.length;
switch (G__61832) {
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
var G__61837 = arguments.length;
switch (G__61837) {
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
var G__61841 = arguments.length;
switch (G__61841) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__61839_SHARP_){
return (!((p1__61839_SHARP_ === base)));
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
var len__4789__auto___62301 = arguments.length;
var i__4790__auto___62302 = (0);
while(true){
if((i__4790__auto___62302 < len__4789__auto___62301)){
args__4795__auto__.push((arguments[i__4790__auto___62302]));

var G__62303 = (i__4790__auto___62302 + (1));
i__4790__auto___62302 = G__62303;
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
var seq__61844_62304 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__61845_62305 = null;
var count__61846_62306 = (0);
var i__61847_62307 = (0);
while(true){
if((i__61847_62307 < count__61846_62306)){
var vec__61854_62308 = chunk__61845_62305.cljs$core$IIndexed$_nth$arity$2(null,i__61847_62307);
var k_62309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61854_62308,(0),null);
var v_62310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61854_62308,(1),null);
style.setProperty(dommy.utils.as_str(k_62309),v_62310);


var G__62311 = seq__61844_62304;
var G__62312 = chunk__61845_62305;
var G__62313 = count__61846_62306;
var G__62314 = (i__61847_62307 + (1));
seq__61844_62304 = G__62311;
chunk__61845_62305 = G__62312;
count__61846_62306 = G__62313;
i__61847_62307 = G__62314;
continue;
} else {
var temp__5735__auto___62315 = cljs.core.seq(seq__61844_62304);
if(temp__5735__auto___62315){
var seq__61844_62316__$1 = temp__5735__auto___62315;
if(cljs.core.chunked_seq_QMARK_(seq__61844_62316__$1)){
var c__4609__auto___62317 = cljs.core.chunk_first(seq__61844_62316__$1);
var G__62318 = cljs.core.chunk_rest(seq__61844_62316__$1);
var G__62319 = c__4609__auto___62317;
var G__62320 = cljs.core.count(c__4609__auto___62317);
var G__62321 = (0);
seq__61844_62304 = G__62318;
chunk__61845_62305 = G__62319;
count__61846_62306 = G__62320;
i__61847_62307 = G__62321;
continue;
} else {
var vec__61857_62322 = cljs.core.first(seq__61844_62316__$1);
var k_62323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61857_62322,(0),null);
var v_62324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61857_62322,(1),null);
style.setProperty(dommy.utils.as_str(k_62323),v_62324);


var G__62325 = cljs.core.next(seq__61844_62316__$1);
var G__62326 = null;
var G__62327 = (0);
var G__62328 = (0);
seq__61844_62304 = G__62325;
chunk__61845_62305 = G__62326;
count__61846_62306 = G__62327;
i__61847_62307 = G__62328;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq61842){
var G__61843 = cljs.core.first(seq61842);
var seq61842__$1 = cljs.core.next(seq61842);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61843,seq61842__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62329 = arguments.length;
var i__4790__auto___62330 = (0);
while(true){
if((i__4790__auto___62330 < len__4789__auto___62329)){
args__4795__auto__.push((arguments[i__4790__auto___62330]));

var G__62331 = (i__4790__auto___62330 + (1));
i__4790__auto___62330 = G__62331;
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
var seq__61862_62332 = cljs.core.seq(keywords);
var chunk__61863_62333 = null;
var count__61864_62334 = (0);
var i__61865_62335 = (0);
while(true){
if((i__61865_62335 < count__61864_62334)){
var kw_62336 = chunk__61863_62333.cljs$core$IIndexed$_nth$arity$2(null,i__61865_62335);
style.removeProperty(dommy.utils.as_str(kw_62336));


var G__62337 = seq__61862_62332;
var G__62338 = chunk__61863_62333;
var G__62339 = count__61864_62334;
var G__62340 = (i__61865_62335 + (1));
seq__61862_62332 = G__62337;
chunk__61863_62333 = G__62338;
count__61864_62334 = G__62339;
i__61865_62335 = G__62340;
continue;
} else {
var temp__5735__auto___62341 = cljs.core.seq(seq__61862_62332);
if(temp__5735__auto___62341){
var seq__61862_62342__$1 = temp__5735__auto___62341;
if(cljs.core.chunked_seq_QMARK_(seq__61862_62342__$1)){
var c__4609__auto___62343 = cljs.core.chunk_first(seq__61862_62342__$1);
var G__62344 = cljs.core.chunk_rest(seq__61862_62342__$1);
var G__62345 = c__4609__auto___62343;
var G__62346 = cljs.core.count(c__4609__auto___62343);
var G__62347 = (0);
seq__61862_62332 = G__62344;
chunk__61863_62333 = G__62345;
count__61864_62334 = G__62346;
i__61865_62335 = G__62347;
continue;
} else {
var kw_62348 = cljs.core.first(seq__61862_62342__$1);
style.removeProperty(dommy.utils.as_str(kw_62348));


var G__62349 = cljs.core.next(seq__61862_62342__$1);
var G__62350 = null;
var G__62351 = (0);
var G__62352 = (0);
seq__61862_62332 = G__62349;
chunk__61863_62333 = G__62350;
count__61864_62334 = G__62351;
i__61865_62335 = G__62352;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq61860){
var G__61861 = cljs.core.first(seq61860);
var seq61860__$1 = cljs.core.next(seq61860);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61861,seq61860__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62353 = arguments.length;
var i__4790__auto___62354 = (0);
while(true){
if((i__4790__auto___62354 < len__4789__auto___62353)){
args__4795__auto__.push((arguments[i__4790__auto___62354]));

var G__62355 = (i__4790__auto___62354 + (1));
i__4790__auto___62354 = G__62355;
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

var seq__61868_62356 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__61869_62357 = null;
var count__61870_62358 = (0);
var i__61871_62359 = (0);
while(true){
if((i__61871_62359 < count__61870_62358)){
var vec__61878_62360 = chunk__61869_62357.cljs$core$IIndexed$_nth$arity$2(null,i__61871_62359);
var k_62361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61878_62360,(0),null);
var v_62362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61878_62360,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_62361,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_62362),"px"].join('')], 0));


var G__62363 = seq__61868_62356;
var G__62364 = chunk__61869_62357;
var G__62365 = count__61870_62358;
var G__62366 = (i__61871_62359 + (1));
seq__61868_62356 = G__62363;
chunk__61869_62357 = G__62364;
count__61870_62358 = G__62365;
i__61871_62359 = G__62366;
continue;
} else {
var temp__5735__auto___62367 = cljs.core.seq(seq__61868_62356);
if(temp__5735__auto___62367){
var seq__61868_62368__$1 = temp__5735__auto___62367;
if(cljs.core.chunked_seq_QMARK_(seq__61868_62368__$1)){
var c__4609__auto___62369 = cljs.core.chunk_first(seq__61868_62368__$1);
var G__62370 = cljs.core.chunk_rest(seq__61868_62368__$1);
var G__62371 = c__4609__auto___62369;
var G__62372 = cljs.core.count(c__4609__auto___62369);
var G__62373 = (0);
seq__61868_62356 = G__62370;
chunk__61869_62357 = G__62371;
count__61870_62358 = G__62372;
i__61871_62359 = G__62373;
continue;
} else {
var vec__61881_62374 = cljs.core.first(seq__61868_62368__$1);
var k_62375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61881_62374,(0),null);
var v_62376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61881_62374,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_62375,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_62376),"px"].join('')], 0));


var G__62377 = cljs.core.next(seq__61868_62368__$1);
var G__62378 = null;
var G__62379 = (0);
var G__62380 = (0);
seq__61868_62356 = G__62377;
chunk__61869_62357 = G__62378;
count__61870_62358 = G__62379;
i__61871_62359 = G__62380;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq61866){
var G__61867 = cljs.core.first(seq61866);
var seq61866__$1 = cljs.core.next(seq61866);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61867,seq61866__$1);
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
var G__61889 = arguments.length;
switch (G__61889) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62382 = arguments.length;
var i__4790__auto___62383 = (0);
while(true){
if((i__4790__auto___62383 < len__4789__auto___62382)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62383]));

var G__62384 = (i__4790__auto___62383 + (1));
i__4790__auto___62383 = G__62384;
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
var G__61890 = elem;
(G__61890[k__$1] = v);

return G__61890;
} else {
var G__61891 = elem;
G__61891.setAttribute(k__$1,v);

return G__61891;
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

var seq__61892_62385 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__61893_62386 = null;
var count__61894_62387 = (0);
var i__61895_62388 = (0);
while(true){
if((i__61895_62388 < count__61894_62387)){
var vec__61902_62389 = chunk__61893_62386.cljs$core$IIndexed$_nth$arity$2(null,i__61895_62388);
var k_62390__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61902_62389,(0),null);
var v_62391__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61902_62389,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_62390__$1,v_62391__$1);


var G__62392 = seq__61892_62385;
var G__62393 = chunk__61893_62386;
var G__62394 = count__61894_62387;
var G__62395 = (i__61895_62388 + (1));
seq__61892_62385 = G__62392;
chunk__61893_62386 = G__62393;
count__61894_62387 = G__62394;
i__61895_62388 = G__62395;
continue;
} else {
var temp__5735__auto___62396 = cljs.core.seq(seq__61892_62385);
if(temp__5735__auto___62396){
var seq__61892_62397__$1 = temp__5735__auto___62396;
if(cljs.core.chunked_seq_QMARK_(seq__61892_62397__$1)){
var c__4609__auto___62398 = cljs.core.chunk_first(seq__61892_62397__$1);
var G__62399 = cljs.core.chunk_rest(seq__61892_62397__$1);
var G__62400 = c__4609__auto___62398;
var G__62401 = cljs.core.count(c__4609__auto___62398);
var G__62402 = (0);
seq__61892_62385 = G__62399;
chunk__61893_62386 = G__62400;
count__61894_62387 = G__62401;
i__61895_62388 = G__62402;
continue;
} else {
var vec__61905_62403 = cljs.core.first(seq__61892_62397__$1);
var k_62404__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61905_62403,(0),null);
var v_62405__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61905_62403,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_62404__$1,v_62405__$1);


var G__62406 = cljs.core.next(seq__61892_62397__$1);
var G__62407 = null;
var G__62408 = (0);
var G__62409 = (0);
seq__61892_62385 = G__62406;
chunk__61893_62386 = G__62407;
count__61894_62387 = G__62408;
i__61895_62388 = G__62409;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq61885){
var G__61886 = cljs.core.first(seq61885);
var seq61885__$1 = cljs.core.next(seq61885);
var G__61887 = cljs.core.first(seq61885__$1);
var seq61885__$2 = cljs.core.next(seq61885__$1);
var G__61888 = cljs.core.first(seq61885__$2);
var seq61885__$3 = cljs.core.next(seq61885__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61886,G__61887,G__61888,seq61885__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__61912 = arguments.length;
switch (G__61912) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62411 = arguments.length;
var i__4790__auto___62412 = (0);
while(true){
if((i__4790__auto___62412 < len__4789__auto___62411)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62412]));

var G__62413 = (i__4790__auto___62412 + (1));
i__4790__auto___62412 = G__62413;
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
var k_62414__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__61913 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__61913.cljs$core$IFn$_invoke$arity$1 ? fexpr__61913.cljs$core$IFn$_invoke$arity$1(k_62414__$1) : fexpr__61913.call(null,k_62414__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_62414__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__61914_62415 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__61915_62416 = null;
var count__61916_62417 = (0);
var i__61917_62418 = (0);
while(true){
if((i__61917_62418 < count__61916_62417)){
var k_62419__$1 = chunk__61915_62416.cljs$core$IIndexed$_nth$arity$2(null,i__61917_62418);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_62419__$1);


var G__62420 = seq__61914_62415;
var G__62421 = chunk__61915_62416;
var G__62422 = count__61916_62417;
var G__62423 = (i__61917_62418 + (1));
seq__61914_62415 = G__62420;
chunk__61915_62416 = G__62421;
count__61916_62417 = G__62422;
i__61917_62418 = G__62423;
continue;
} else {
var temp__5735__auto___62424 = cljs.core.seq(seq__61914_62415);
if(temp__5735__auto___62424){
var seq__61914_62425__$1 = temp__5735__auto___62424;
if(cljs.core.chunked_seq_QMARK_(seq__61914_62425__$1)){
var c__4609__auto___62426 = cljs.core.chunk_first(seq__61914_62425__$1);
var G__62427 = cljs.core.chunk_rest(seq__61914_62425__$1);
var G__62428 = c__4609__auto___62426;
var G__62429 = cljs.core.count(c__4609__auto___62426);
var G__62430 = (0);
seq__61914_62415 = G__62427;
chunk__61915_62416 = G__62428;
count__61916_62417 = G__62429;
i__61917_62418 = G__62430;
continue;
} else {
var k_62431__$1 = cljs.core.first(seq__61914_62425__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_62431__$1);


var G__62432 = cljs.core.next(seq__61914_62425__$1);
var G__62433 = null;
var G__62434 = (0);
var G__62435 = (0);
seq__61914_62415 = G__62432;
chunk__61915_62416 = G__62433;
count__61916_62417 = G__62434;
i__61917_62418 = G__62435;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq61909){
var G__61910 = cljs.core.first(seq61909);
var seq61909__$1 = cljs.core.next(seq61909);
var G__61911 = cljs.core.first(seq61909__$1);
var seq61909__$2 = cljs.core.next(seq61909__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61910,G__61911,seq61909__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__61919 = arguments.length;
switch (G__61919) {
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
var G__61926 = arguments.length;
switch (G__61926) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62438 = arguments.length;
var i__4790__auto___62439 = (0);
while(true){
if((i__4790__auto___62439 < len__4789__auto___62438)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62439]));

var G__62440 = (i__4790__auto___62439 + (1));
i__4790__auto___62439 = G__62440;
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
var temp__5733__auto___62441 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___62441)){
var class_list_62442 = temp__5733__auto___62441;
var seq__61927_62443 = cljs.core.seq(classes__$1);
var chunk__61928_62444 = null;
var count__61929_62445 = (0);
var i__61930_62446 = (0);
while(true){
if((i__61930_62446 < count__61929_62445)){
var c_62447 = chunk__61928_62444.cljs$core$IIndexed$_nth$arity$2(null,i__61930_62446);
class_list_62442.add(c_62447);


var G__62448 = seq__61927_62443;
var G__62449 = chunk__61928_62444;
var G__62450 = count__61929_62445;
var G__62451 = (i__61930_62446 + (1));
seq__61927_62443 = G__62448;
chunk__61928_62444 = G__62449;
count__61929_62445 = G__62450;
i__61930_62446 = G__62451;
continue;
} else {
var temp__5735__auto___62452 = cljs.core.seq(seq__61927_62443);
if(temp__5735__auto___62452){
var seq__61927_62453__$1 = temp__5735__auto___62452;
if(cljs.core.chunked_seq_QMARK_(seq__61927_62453__$1)){
var c__4609__auto___62454 = cljs.core.chunk_first(seq__61927_62453__$1);
var G__62455 = cljs.core.chunk_rest(seq__61927_62453__$1);
var G__62456 = c__4609__auto___62454;
var G__62457 = cljs.core.count(c__4609__auto___62454);
var G__62458 = (0);
seq__61927_62443 = G__62455;
chunk__61928_62444 = G__62456;
count__61929_62445 = G__62457;
i__61930_62446 = G__62458;
continue;
} else {
var c_62459 = cljs.core.first(seq__61927_62453__$1);
class_list_62442.add(c_62459);


var G__62460 = cljs.core.next(seq__61927_62453__$1);
var G__62461 = null;
var G__62462 = (0);
var G__62463 = (0);
seq__61927_62443 = G__62460;
chunk__61928_62444 = G__62461;
count__61929_62445 = G__62462;
i__61930_62446 = G__62463;
continue;
}
} else {
}
}
break;
}
} else {
var seq__61932_62464 = cljs.core.seq(classes__$1);
var chunk__61933_62465 = null;
var count__61934_62466 = (0);
var i__61935_62467 = (0);
while(true){
if((i__61935_62467 < count__61934_62466)){
var c_62468 = chunk__61933_62465.cljs$core$IIndexed$_nth$arity$2(null,i__61935_62467);
var class_name_62469 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_62469,c_62468))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_62469 === ""))?c_62468:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_62469)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_62468)].join('')));
}


var G__62470 = seq__61932_62464;
var G__62471 = chunk__61933_62465;
var G__62472 = count__61934_62466;
var G__62473 = (i__61935_62467 + (1));
seq__61932_62464 = G__62470;
chunk__61933_62465 = G__62471;
count__61934_62466 = G__62472;
i__61935_62467 = G__62473;
continue;
} else {
var temp__5735__auto___62474 = cljs.core.seq(seq__61932_62464);
if(temp__5735__auto___62474){
var seq__61932_62475__$1 = temp__5735__auto___62474;
if(cljs.core.chunked_seq_QMARK_(seq__61932_62475__$1)){
var c__4609__auto___62476 = cljs.core.chunk_first(seq__61932_62475__$1);
var G__62477 = cljs.core.chunk_rest(seq__61932_62475__$1);
var G__62478 = c__4609__auto___62476;
var G__62479 = cljs.core.count(c__4609__auto___62476);
var G__62480 = (0);
seq__61932_62464 = G__62477;
chunk__61933_62465 = G__62478;
count__61934_62466 = G__62479;
i__61935_62467 = G__62480;
continue;
} else {
var c_62481 = cljs.core.first(seq__61932_62475__$1);
var class_name_62482 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_62482,c_62481))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_62482 === ""))?c_62481:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_62482)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_62481)].join('')));
}


var G__62483 = cljs.core.next(seq__61932_62475__$1);
var G__62484 = null;
var G__62485 = (0);
var G__62486 = (0);
seq__61932_62464 = G__62483;
chunk__61933_62465 = G__62484;
count__61934_62466 = G__62485;
i__61935_62467 = G__62486;
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
var seq__61941_62487 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__61942_62488 = null;
var count__61943_62489 = (0);
var i__61944_62490 = (0);
while(true){
if((i__61944_62490 < count__61943_62489)){
var c_62491 = chunk__61942_62488.cljs$core$IIndexed$_nth$arity$2(null,i__61944_62490);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_62491);


var G__62492 = seq__61941_62487;
var G__62493 = chunk__61942_62488;
var G__62494 = count__61943_62489;
var G__62495 = (i__61944_62490 + (1));
seq__61941_62487 = G__62492;
chunk__61942_62488 = G__62493;
count__61943_62489 = G__62494;
i__61944_62490 = G__62495;
continue;
} else {
var temp__5735__auto___62496 = cljs.core.seq(seq__61941_62487);
if(temp__5735__auto___62496){
var seq__61941_62497__$1 = temp__5735__auto___62496;
if(cljs.core.chunked_seq_QMARK_(seq__61941_62497__$1)){
var c__4609__auto___62498 = cljs.core.chunk_first(seq__61941_62497__$1);
var G__62499 = cljs.core.chunk_rest(seq__61941_62497__$1);
var G__62500 = c__4609__auto___62498;
var G__62501 = cljs.core.count(c__4609__auto___62498);
var G__62502 = (0);
seq__61941_62487 = G__62499;
chunk__61942_62488 = G__62500;
count__61943_62489 = G__62501;
i__61944_62490 = G__62502;
continue;
} else {
var c_62503 = cljs.core.first(seq__61941_62497__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_62503);


var G__62504 = cljs.core.next(seq__61941_62497__$1);
var G__62505 = null;
var G__62506 = (0);
var G__62507 = (0);
seq__61941_62487 = G__62504;
chunk__61942_62488 = G__62505;
count__61943_62489 = G__62506;
i__61944_62490 = G__62507;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq61921){
var G__61922 = cljs.core.first(seq61921);
var seq61921__$1 = cljs.core.next(seq61921);
var G__61923 = cljs.core.first(seq61921__$1);
var seq61921__$2 = cljs.core.next(seq61921__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61922,G__61923,seq61921__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__61949 = arguments.length;
switch (G__61949) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62509 = arguments.length;
var i__4790__auto___62510 = (0);
while(true){
if((i__4790__auto___62510 < len__4789__auto___62509)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62510]));

var G__62511 = (i__4790__auto___62510 + (1));
i__4790__auto___62510 = G__62511;
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
var temp__5733__auto___62512 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___62512)){
var class_list_62513 = temp__5733__auto___62512;
class_list_62513.remove(c__$1);
} else {
var class_name_62514 = dommy.core.class$(elem);
var new_class_name_62515 = dommy.utils.remove_class_str(class_name_62514,c__$1);
if((class_name_62514 === new_class_name_62515)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_62515);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__61953 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__61954 = null;
var count__61955 = (0);
var i__61956 = (0);
while(true){
if((i__61956 < count__61955)){
var c = chunk__61954.cljs$core$IIndexed$_nth$arity$2(null,i__61956);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__62516 = seq__61953;
var G__62517 = chunk__61954;
var G__62518 = count__61955;
var G__62519 = (i__61956 + (1));
seq__61953 = G__62516;
chunk__61954 = G__62517;
count__61955 = G__62518;
i__61956 = G__62519;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61953);
if(temp__5735__auto__){
var seq__61953__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61953__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61953__$1);
var G__62520 = cljs.core.chunk_rest(seq__61953__$1);
var G__62521 = c__4609__auto__;
var G__62522 = cljs.core.count(c__4609__auto__);
var G__62523 = (0);
seq__61953 = G__62520;
chunk__61954 = G__62521;
count__61955 = G__62522;
i__61956 = G__62523;
continue;
} else {
var c = cljs.core.first(seq__61953__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__62528 = cljs.core.next(seq__61953__$1);
var G__62529 = null;
var G__62530 = (0);
var G__62531 = (0);
seq__61953 = G__62528;
chunk__61954 = G__62529;
count__61955 = G__62530;
i__61956 = G__62531;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq61946){
var G__61947 = cljs.core.first(seq61946);
var seq61946__$1 = cljs.core.next(seq61946);
var G__61948 = cljs.core.first(seq61946__$1);
var seq61946__$2 = cljs.core.next(seq61946__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61947,G__61948,seq61946__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__61962 = arguments.length;
switch (G__61962) {
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
var temp__5733__auto___62533 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___62533)){
var class_list_62534 = temp__5733__auto___62533;
class_list_62534.toggle(c__$1);
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
var G__61964 = arguments.length;
switch (G__61964) {
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
var G__61971 = arguments.length;
switch (G__61971) {
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
var G__61976 = arguments.length;
switch (G__61976) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62539 = arguments.length;
var i__4790__auto___62540 = (0);
while(true){
if((i__4790__auto___62540 < len__4789__auto___62539)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62540]));

var G__62541 = (i__4790__auto___62540 + (1));
i__4790__auto___62540 = G__62541;
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
var G__61977 = parent;
G__61977.appendChild(child);

return G__61977;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__61978_62542 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__61979_62543 = null;
var count__61980_62544 = (0);
var i__61981_62545 = (0);
while(true){
if((i__61981_62545 < count__61980_62544)){
var c_62546 = chunk__61979_62543.cljs$core$IIndexed$_nth$arity$2(null,i__61981_62545);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_62546);


var G__62547 = seq__61978_62542;
var G__62548 = chunk__61979_62543;
var G__62549 = count__61980_62544;
var G__62550 = (i__61981_62545 + (1));
seq__61978_62542 = G__62547;
chunk__61979_62543 = G__62548;
count__61980_62544 = G__62549;
i__61981_62545 = G__62550;
continue;
} else {
var temp__5735__auto___62551 = cljs.core.seq(seq__61978_62542);
if(temp__5735__auto___62551){
var seq__61978_62552__$1 = temp__5735__auto___62551;
if(cljs.core.chunked_seq_QMARK_(seq__61978_62552__$1)){
var c__4609__auto___62553 = cljs.core.chunk_first(seq__61978_62552__$1);
var G__62554 = cljs.core.chunk_rest(seq__61978_62552__$1);
var G__62555 = c__4609__auto___62553;
var G__62556 = cljs.core.count(c__4609__auto___62553);
var G__62557 = (0);
seq__61978_62542 = G__62554;
chunk__61979_62543 = G__62555;
count__61980_62544 = G__62556;
i__61981_62545 = G__62557;
continue;
} else {
var c_62562 = cljs.core.first(seq__61978_62552__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_62562);


var G__62563 = cljs.core.next(seq__61978_62552__$1);
var G__62564 = null;
var G__62565 = (0);
var G__62566 = (0);
seq__61978_62542 = G__62563;
chunk__61979_62543 = G__62564;
count__61980_62544 = G__62565;
i__61981_62545 = G__62566;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq61973){
var G__61974 = cljs.core.first(seq61973);
var seq61973__$1 = cljs.core.next(seq61973);
var G__61975 = cljs.core.first(seq61973__$1);
var seq61973__$2 = cljs.core.next(seq61973__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61974,G__61975,seq61973__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__61986 = arguments.length;
switch (G__61986) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___62568 = arguments.length;
var i__4790__auto___62569 = (0);
while(true){
if((i__4790__auto___62569 < len__4789__auto___62568)){
args_arr__4810__auto__.push((arguments[i__4790__auto___62569]));

var G__62570 = (i__4790__auto___62569 + (1));
i__4790__auto___62569 = G__62570;
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
var G__61987 = parent;
G__61987.insertBefore(child,parent.firstChild);

return G__61987;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__61988_62572 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__61989_62573 = null;
var count__61990_62574 = (0);
var i__61991_62575 = (0);
while(true){
if((i__61991_62575 < count__61990_62574)){
var c_62577 = chunk__61989_62573.cljs$core$IIndexed$_nth$arity$2(null,i__61991_62575);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_62577);


var G__62579 = seq__61988_62572;
var G__62580 = chunk__61989_62573;
var G__62581 = count__61990_62574;
var G__62582 = (i__61991_62575 + (1));
seq__61988_62572 = G__62579;
chunk__61989_62573 = G__62580;
count__61990_62574 = G__62581;
i__61991_62575 = G__62582;
continue;
} else {
var temp__5735__auto___62583 = cljs.core.seq(seq__61988_62572);
if(temp__5735__auto___62583){
var seq__61988_62584__$1 = temp__5735__auto___62583;
if(cljs.core.chunked_seq_QMARK_(seq__61988_62584__$1)){
var c__4609__auto___62585 = cljs.core.chunk_first(seq__61988_62584__$1);
var G__62586 = cljs.core.chunk_rest(seq__61988_62584__$1);
var G__62587 = c__4609__auto___62585;
var G__62588 = cljs.core.count(c__4609__auto___62585);
var G__62589 = (0);
seq__61988_62572 = G__62586;
chunk__61989_62573 = G__62587;
count__61990_62574 = G__62588;
i__61991_62575 = G__62589;
continue;
} else {
var c_62590 = cljs.core.first(seq__61988_62584__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_62590);


var G__62592 = cljs.core.next(seq__61988_62584__$1);
var G__62593 = null;
var G__62594 = (0);
var G__62595 = (0);
seq__61988_62572 = G__62592;
chunk__61989_62573 = G__62593;
count__61990_62574 = G__62594;
i__61991_62575 = G__62595;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq61983){
var G__61984 = cljs.core.first(seq61983);
var seq61983__$1 = cljs.core.next(seq61983);
var G__61985 = cljs.core.first(seq61983__$1);
var seq61983__$2 = cljs.core.next(seq61983__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61984,G__61985,seq61983__$2);
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
var temp__5733__auto___62599 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___62599)){
var next_62600 = temp__5733__auto___62599;
dommy.core.insert_before_BANG_(elem,next_62600);
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
var G__61993 = arguments.length;
switch (G__61993) {
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
var G__61996 = p;
G__61996.removeChild(elem);

return G__61996;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61998){
var vec__61999 = p__61998;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61999,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61999,(1),null);
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
var len__4789__auto___62607 = arguments.length;
var i__4790__auto___62608 = (0);
while(true){
if((i__4790__auto___62608 < len__4789__auto___62607)){
args__4795__auto__.push((arguments[i__4790__auto___62608]));

var G__62609 = (i__4790__auto___62608 + (1));
i__4790__auto___62608 = G__62609;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq62004){
var G__62005 = cljs.core.first(seq62004);
var seq62004__$1 = cljs.core.next(seq62004);
var G__62006 = cljs.core.first(seq62004__$1);
var seq62004__$2 = cljs.core.next(seq62004__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62005,G__62006,seq62004__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__62009 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__62009.cljs$core$IFn$_invoke$arity$1 ? fexpr__62009.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__62009.call(null,elem_sel));
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
var len__4789__auto___62610 = arguments.length;
var i__4790__auto___62611 = (0);
while(true){
if((i__4790__auto___62611 < len__4789__auto___62610)){
args__4795__auto__.push((arguments[i__4790__auto___62611]));

var G__62612 = (i__4790__auto___62611 + (1));
i__4790__auto___62611 = G__62612;
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

var vec__62012_62613 = dommy.core.elem_and_selector(elem_sel);
var elem_62614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62012_62613,(0),null);
var selector_62615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62012_62613,(1),null);
var seq__62015_62620 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__62022_62621 = null;
var count__62023_62622 = (0);
var i__62024_62623 = (0);
while(true){
if((i__62024_62623 < count__62023_62622)){
var vec__62077_62624 = chunk__62022_62621.cljs$core$IIndexed$_nth$arity$2(null,i__62024_62623);
var orig_type_62625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62077_62624,(0),null);
var f_62626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62077_62624,(1),null);
var seq__62025_62627 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_62625,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_62625,cljs.core.identity])));
var chunk__62027_62628 = null;
var count__62028_62629 = (0);
var i__62029_62630 = (0);
while(true){
if((i__62029_62630 < count__62028_62629)){
var vec__62090_62631 = chunk__62027_62628.cljs$core$IIndexed$_nth$arity$2(null,i__62029_62630);
var actual_type_62632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62090_62631,(0),null);
var factory_62633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62090_62631,(1),null);
var canonical_f_62634 = (function (){var G__62094 = (factory_62633.cljs$core$IFn$_invoke$arity$1 ? factory_62633.cljs$core$IFn$_invoke$arity$1(f_62626) : factory_62633.call(null,f_62626));
var fexpr__62093 = (cljs.core.truth_(selector_62615)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_62614,selector_62615):cljs.core.identity);
return (fexpr__62093.cljs$core$IFn$_invoke$arity$1 ? fexpr__62093.cljs$core$IFn$_invoke$arity$1(G__62094) : fexpr__62093.call(null,G__62094));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62614,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62615,actual_type_62632,f_62626], null),canonical_f_62634], 0));

if(cljs.core.truth_(elem_62614.addEventListener)){
elem_62614.addEventListener(cljs.core.name(actual_type_62632),canonical_f_62634);
} else {
elem_62614.attachEvent(cljs.core.name(actual_type_62632),canonical_f_62634);
}


var G__62643 = seq__62025_62627;
var G__62644 = chunk__62027_62628;
var G__62645 = count__62028_62629;
var G__62646 = (i__62029_62630 + (1));
seq__62025_62627 = G__62643;
chunk__62027_62628 = G__62644;
count__62028_62629 = G__62645;
i__62029_62630 = G__62646;
continue;
} else {
var temp__5735__auto___62651 = cljs.core.seq(seq__62025_62627);
if(temp__5735__auto___62651){
var seq__62025_62652__$1 = temp__5735__auto___62651;
if(cljs.core.chunked_seq_QMARK_(seq__62025_62652__$1)){
var c__4609__auto___62653 = cljs.core.chunk_first(seq__62025_62652__$1);
var G__62654 = cljs.core.chunk_rest(seq__62025_62652__$1);
var G__62655 = c__4609__auto___62653;
var G__62656 = cljs.core.count(c__4609__auto___62653);
var G__62657 = (0);
seq__62025_62627 = G__62654;
chunk__62027_62628 = G__62655;
count__62028_62629 = G__62656;
i__62029_62630 = G__62657;
continue;
} else {
var vec__62095_62658 = cljs.core.first(seq__62025_62652__$1);
var actual_type_62659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62095_62658,(0),null);
var factory_62660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62095_62658,(1),null);
var canonical_f_62661 = (function (){var G__62099 = (factory_62660.cljs$core$IFn$_invoke$arity$1 ? factory_62660.cljs$core$IFn$_invoke$arity$1(f_62626) : factory_62660.call(null,f_62626));
var fexpr__62098 = (cljs.core.truth_(selector_62615)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_62614,selector_62615):cljs.core.identity);
return (fexpr__62098.cljs$core$IFn$_invoke$arity$1 ? fexpr__62098.cljs$core$IFn$_invoke$arity$1(G__62099) : fexpr__62098.call(null,G__62099));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62614,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62615,actual_type_62659,f_62626], null),canonical_f_62661], 0));

if(cljs.core.truth_(elem_62614.addEventListener)){
elem_62614.addEventListener(cljs.core.name(actual_type_62659),canonical_f_62661);
} else {
elem_62614.attachEvent(cljs.core.name(actual_type_62659),canonical_f_62661);
}


var G__62664 = cljs.core.next(seq__62025_62652__$1);
var G__62665 = null;
var G__62666 = (0);
var G__62667 = (0);
seq__62025_62627 = G__62664;
chunk__62027_62628 = G__62665;
count__62028_62629 = G__62666;
i__62029_62630 = G__62667;
continue;
}
} else {
}
}
break;
}

var G__62668 = seq__62015_62620;
var G__62669 = chunk__62022_62621;
var G__62670 = count__62023_62622;
var G__62671 = (i__62024_62623 + (1));
seq__62015_62620 = G__62668;
chunk__62022_62621 = G__62669;
count__62023_62622 = G__62670;
i__62024_62623 = G__62671;
continue;
} else {
var temp__5735__auto___62672 = cljs.core.seq(seq__62015_62620);
if(temp__5735__auto___62672){
var seq__62015_62674__$1 = temp__5735__auto___62672;
if(cljs.core.chunked_seq_QMARK_(seq__62015_62674__$1)){
var c__4609__auto___62675 = cljs.core.chunk_first(seq__62015_62674__$1);
var G__62676 = cljs.core.chunk_rest(seq__62015_62674__$1);
var G__62677 = c__4609__auto___62675;
var G__62678 = cljs.core.count(c__4609__auto___62675);
var G__62679 = (0);
seq__62015_62620 = G__62676;
chunk__62022_62621 = G__62677;
count__62023_62622 = G__62678;
i__62024_62623 = G__62679;
continue;
} else {
var vec__62100_62681 = cljs.core.first(seq__62015_62674__$1);
var orig_type_62682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62100_62681,(0),null);
var f_62683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62100_62681,(1),null);
var seq__62016_62684 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_62682,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_62682,cljs.core.identity])));
var chunk__62018_62685 = null;
var count__62019_62686 = (0);
var i__62020_62687 = (0);
while(true){
if((i__62020_62687 < count__62019_62686)){
var vec__62113_62688 = chunk__62018_62685.cljs$core$IIndexed$_nth$arity$2(null,i__62020_62687);
var actual_type_62689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62113_62688,(0),null);
var factory_62690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62113_62688,(1),null);
var canonical_f_62691 = (function (){var G__62117 = (factory_62690.cljs$core$IFn$_invoke$arity$1 ? factory_62690.cljs$core$IFn$_invoke$arity$1(f_62683) : factory_62690.call(null,f_62683));
var fexpr__62116 = (cljs.core.truth_(selector_62615)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_62614,selector_62615):cljs.core.identity);
return (fexpr__62116.cljs$core$IFn$_invoke$arity$1 ? fexpr__62116.cljs$core$IFn$_invoke$arity$1(G__62117) : fexpr__62116.call(null,G__62117));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62614,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62615,actual_type_62689,f_62683], null),canonical_f_62691], 0));

if(cljs.core.truth_(elem_62614.addEventListener)){
elem_62614.addEventListener(cljs.core.name(actual_type_62689),canonical_f_62691);
} else {
elem_62614.attachEvent(cljs.core.name(actual_type_62689),canonical_f_62691);
}


var G__62692 = seq__62016_62684;
var G__62693 = chunk__62018_62685;
var G__62694 = count__62019_62686;
var G__62695 = (i__62020_62687 + (1));
seq__62016_62684 = G__62692;
chunk__62018_62685 = G__62693;
count__62019_62686 = G__62694;
i__62020_62687 = G__62695;
continue;
} else {
var temp__5735__auto___62696__$1 = cljs.core.seq(seq__62016_62684);
if(temp__5735__auto___62696__$1){
var seq__62016_62697__$1 = temp__5735__auto___62696__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62016_62697__$1)){
var c__4609__auto___62698 = cljs.core.chunk_first(seq__62016_62697__$1);
var G__62699 = cljs.core.chunk_rest(seq__62016_62697__$1);
var G__62700 = c__4609__auto___62698;
var G__62701 = cljs.core.count(c__4609__auto___62698);
var G__62702 = (0);
seq__62016_62684 = G__62699;
chunk__62018_62685 = G__62700;
count__62019_62686 = G__62701;
i__62020_62687 = G__62702;
continue;
} else {
var vec__62123_62703 = cljs.core.first(seq__62016_62697__$1);
var actual_type_62704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62123_62703,(0),null);
var factory_62705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62123_62703,(1),null);
var canonical_f_62706 = (function (){var G__62128 = (factory_62705.cljs$core$IFn$_invoke$arity$1 ? factory_62705.cljs$core$IFn$_invoke$arity$1(f_62683) : factory_62705.call(null,f_62683));
var fexpr__62127 = (cljs.core.truth_(selector_62615)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_62614,selector_62615):cljs.core.identity);
return (fexpr__62127.cljs$core$IFn$_invoke$arity$1 ? fexpr__62127.cljs$core$IFn$_invoke$arity$1(G__62128) : fexpr__62127.call(null,G__62128));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62614,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62615,actual_type_62704,f_62683], null),canonical_f_62706], 0));

if(cljs.core.truth_(elem_62614.addEventListener)){
elem_62614.addEventListener(cljs.core.name(actual_type_62704),canonical_f_62706);
} else {
elem_62614.attachEvent(cljs.core.name(actual_type_62704),canonical_f_62706);
}


var G__62709 = cljs.core.next(seq__62016_62697__$1);
var G__62710 = null;
var G__62711 = (0);
var G__62712 = (0);
seq__62016_62684 = G__62709;
chunk__62018_62685 = G__62710;
count__62019_62686 = G__62711;
i__62020_62687 = G__62712;
continue;
}
} else {
}
}
break;
}

var G__62713 = cljs.core.next(seq__62015_62674__$1);
var G__62714 = null;
var G__62715 = (0);
var G__62716 = (0);
seq__62015_62620 = G__62713;
chunk__62022_62621 = G__62714;
count__62023_62622 = G__62715;
i__62024_62623 = G__62716;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq62010){
var G__62011 = cljs.core.first(seq62010);
var seq62010__$1 = cljs.core.next(seq62010);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62011,seq62010__$1);
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
var len__4789__auto___62719 = arguments.length;
var i__4790__auto___62720 = (0);
while(true){
if((i__4790__auto___62720 < len__4789__auto___62719)){
args__4795__auto__.push((arguments[i__4790__auto___62720]));

var G__62721 = (i__4790__auto___62720 + (1));
i__4790__auto___62720 = G__62721;
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

var vec__62140_62722 = dommy.core.elem_and_selector(elem_sel);
var elem_62723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62140_62722,(0),null);
var selector_62724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62140_62722,(1),null);
var seq__62143_62725 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__62150_62726 = null;
var count__62151_62727 = (0);
var i__62152_62728 = (0);
while(true){
if((i__62152_62728 < count__62151_62727)){
var vec__62223_62729 = chunk__62150_62726.cljs$core$IIndexed$_nth$arity$2(null,i__62152_62728);
var orig_type_62730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62223_62729,(0),null);
var f_62731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62223_62729,(1),null);
var seq__62153_62732 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_62730,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_62730,cljs.core.identity])));
var chunk__62155_62733 = null;
var count__62156_62734 = (0);
var i__62157_62735 = (0);
while(true){
if((i__62157_62735 < count__62156_62734)){
var vec__62239_62736 = chunk__62155_62733.cljs$core$IIndexed$_nth$arity$2(null,i__62157_62735);
var actual_type_62737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62239_62736,(0),null);
var __62738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62239_62736,(1),null);
var keys_62740 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62724,actual_type_62737,f_62731], null);
var canonical_f_62741 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_62723),keys_62740);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62723,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62740], 0));

if(cljs.core.truth_(elem_62723.removeEventListener)){
elem_62723.removeEventListener(cljs.core.name(actual_type_62737),canonical_f_62741);
} else {
elem_62723.detachEvent(cljs.core.name(actual_type_62737),canonical_f_62741);
}


var G__62743 = seq__62153_62732;
var G__62744 = chunk__62155_62733;
var G__62745 = count__62156_62734;
var G__62746 = (i__62157_62735 + (1));
seq__62153_62732 = G__62743;
chunk__62155_62733 = G__62744;
count__62156_62734 = G__62745;
i__62157_62735 = G__62746;
continue;
} else {
var temp__5735__auto___62747 = cljs.core.seq(seq__62153_62732);
if(temp__5735__auto___62747){
var seq__62153_62748__$1 = temp__5735__auto___62747;
if(cljs.core.chunked_seq_QMARK_(seq__62153_62748__$1)){
var c__4609__auto___62749 = cljs.core.chunk_first(seq__62153_62748__$1);
var G__62750 = cljs.core.chunk_rest(seq__62153_62748__$1);
var G__62751 = c__4609__auto___62749;
var G__62752 = cljs.core.count(c__4609__auto___62749);
var G__62753 = (0);
seq__62153_62732 = G__62750;
chunk__62155_62733 = G__62751;
count__62156_62734 = G__62752;
i__62157_62735 = G__62753;
continue;
} else {
var vec__62247_62754 = cljs.core.first(seq__62153_62748__$1);
var actual_type_62755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62247_62754,(0),null);
var __62756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62247_62754,(1),null);
var keys_62757 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62724,actual_type_62755,f_62731], null);
var canonical_f_62758 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_62723),keys_62757);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62723,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62757], 0));

if(cljs.core.truth_(elem_62723.removeEventListener)){
elem_62723.removeEventListener(cljs.core.name(actual_type_62755),canonical_f_62758);
} else {
elem_62723.detachEvent(cljs.core.name(actual_type_62755),canonical_f_62758);
}


var G__62759 = cljs.core.next(seq__62153_62748__$1);
var G__62760 = null;
var G__62761 = (0);
var G__62762 = (0);
seq__62153_62732 = G__62759;
chunk__62155_62733 = G__62760;
count__62156_62734 = G__62761;
i__62157_62735 = G__62762;
continue;
}
} else {
}
}
break;
}

var G__62763 = seq__62143_62725;
var G__62764 = chunk__62150_62726;
var G__62765 = count__62151_62727;
var G__62766 = (i__62152_62728 + (1));
seq__62143_62725 = G__62763;
chunk__62150_62726 = G__62764;
count__62151_62727 = G__62765;
i__62152_62728 = G__62766;
continue;
} else {
var temp__5735__auto___62767 = cljs.core.seq(seq__62143_62725);
if(temp__5735__auto___62767){
var seq__62143_62768__$1 = temp__5735__auto___62767;
if(cljs.core.chunked_seq_QMARK_(seq__62143_62768__$1)){
var c__4609__auto___62769 = cljs.core.chunk_first(seq__62143_62768__$1);
var G__62770 = cljs.core.chunk_rest(seq__62143_62768__$1);
var G__62771 = c__4609__auto___62769;
var G__62772 = cljs.core.count(c__4609__auto___62769);
var G__62773 = (0);
seq__62143_62725 = G__62770;
chunk__62150_62726 = G__62771;
count__62151_62727 = G__62772;
i__62152_62728 = G__62773;
continue;
} else {
var vec__62255_62774 = cljs.core.first(seq__62143_62768__$1);
var orig_type_62775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62255_62774,(0),null);
var f_62776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62255_62774,(1),null);
var seq__62144_62777 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_62775,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_62775,cljs.core.identity])));
var chunk__62146_62778 = null;
var count__62147_62779 = (0);
var i__62148_62780 = (0);
while(true){
if((i__62148_62780 < count__62147_62779)){
var vec__62265_62781 = chunk__62146_62778.cljs$core$IIndexed$_nth$arity$2(null,i__62148_62780);
var actual_type_62782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62265_62781,(0),null);
var __62783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62265_62781,(1),null);
var keys_62784 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62724,actual_type_62782,f_62776], null);
var canonical_f_62785 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_62723),keys_62784);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62723,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62784], 0));

if(cljs.core.truth_(elem_62723.removeEventListener)){
elem_62723.removeEventListener(cljs.core.name(actual_type_62782),canonical_f_62785);
} else {
elem_62723.detachEvent(cljs.core.name(actual_type_62782),canonical_f_62785);
}


var G__62786 = seq__62144_62777;
var G__62787 = chunk__62146_62778;
var G__62788 = count__62147_62779;
var G__62789 = (i__62148_62780 + (1));
seq__62144_62777 = G__62786;
chunk__62146_62778 = G__62787;
count__62147_62779 = G__62788;
i__62148_62780 = G__62789;
continue;
} else {
var temp__5735__auto___62790__$1 = cljs.core.seq(seq__62144_62777);
if(temp__5735__auto___62790__$1){
var seq__62144_62791__$1 = temp__5735__auto___62790__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62144_62791__$1)){
var c__4609__auto___62792 = cljs.core.chunk_first(seq__62144_62791__$1);
var G__62793 = cljs.core.chunk_rest(seq__62144_62791__$1);
var G__62794 = c__4609__auto___62792;
var G__62795 = cljs.core.count(c__4609__auto___62792);
var G__62796 = (0);
seq__62144_62777 = G__62793;
chunk__62146_62778 = G__62794;
count__62147_62779 = G__62795;
i__62148_62780 = G__62796;
continue;
} else {
var vec__62268_62797 = cljs.core.first(seq__62144_62791__$1);
var actual_type_62798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62268_62797,(0),null);
var __62799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62268_62797,(1),null);
var keys_62800 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_62724,actual_type_62798,f_62776], null);
var canonical_f_62801 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_62723),keys_62800);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_62723,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_62800], 0));

if(cljs.core.truth_(elem_62723.removeEventListener)){
elem_62723.removeEventListener(cljs.core.name(actual_type_62798),canonical_f_62801);
} else {
elem_62723.detachEvent(cljs.core.name(actual_type_62798),canonical_f_62801);
}


var G__62802 = cljs.core.next(seq__62144_62791__$1);
var G__62803 = null;
var G__62804 = (0);
var G__62805 = (0);
seq__62144_62777 = G__62802;
chunk__62146_62778 = G__62803;
count__62147_62779 = G__62804;
i__62148_62780 = G__62805;
continue;
}
} else {
}
}
break;
}

var G__62806 = cljs.core.next(seq__62143_62768__$1);
var G__62807 = null;
var G__62808 = (0);
var G__62809 = (0);
seq__62143_62725 = G__62806;
chunk__62150_62726 = G__62807;
count__62151_62727 = G__62808;
i__62152_62728 = G__62809;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq62135){
var G__62136 = cljs.core.first(seq62135);
var seq62135__$1 = cljs.core.next(seq62135);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62136,seq62135__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62810 = arguments.length;
var i__4790__auto___62811 = (0);
while(true){
if((i__4790__auto___62811 < len__4789__auto___62810)){
args__4795__auto__.push((arguments[i__4790__auto___62811]));

var G__62812 = (i__4790__auto___62811 + (1));
i__4790__auto___62811 = G__62812;
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

var vec__62278_62813 = dommy.core.elem_and_selector(elem_sel);
var elem_62814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62278_62813,(0),null);
var selector_62815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62278_62813,(1),null);
var seq__62281_62816 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__62282_62817 = null;
var count__62283_62818 = (0);
var i__62284_62819 = (0);
while(true){
if((i__62284_62819 < count__62283_62818)){
var vec__62291_62820 = chunk__62282_62817.cljs$core$IIndexed$_nth$arity$2(null,i__62284_62819);
var type_62821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62291_62820,(0),null);
var f_62822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62291_62820,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_62821,((function (seq__62281_62816,chunk__62282_62817,count__62283_62818,i__62284_62819,vec__62291_62820,type_62821,f_62822,vec__62278_62813,elem_62814,selector_62815){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_62821,dommy$core$this_fn], 0));

return (f_62822.cljs$core$IFn$_invoke$arity$1 ? f_62822.cljs$core$IFn$_invoke$arity$1(e) : f_62822.call(null,e));
});})(seq__62281_62816,chunk__62282_62817,count__62283_62818,i__62284_62819,vec__62291_62820,type_62821,f_62822,vec__62278_62813,elem_62814,selector_62815))
], 0));


var G__62823 = seq__62281_62816;
var G__62824 = chunk__62282_62817;
var G__62825 = count__62283_62818;
var G__62826 = (i__62284_62819 + (1));
seq__62281_62816 = G__62823;
chunk__62282_62817 = G__62824;
count__62283_62818 = G__62825;
i__62284_62819 = G__62826;
continue;
} else {
var temp__5735__auto___62827 = cljs.core.seq(seq__62281_62816);
if(temp__5735__auto___62827){
var seq__62281_62828__$1 = temp__5735__auto___62827;
if(cljs.core.chunked_seq_QMARK_(seq__62281_62828__$1)){
var c__4609__auto___62829 = cljs.core.chunk_first(seq__62281_62828__$1);
var G__62830 = cljs.core.chunk_rest(seq__62281_62828__$1);
var G__62831 = c__4609__auto___62829;
var G__62832 = cljs.core.count(c__4609__auto___62829);
var G__62833 = (0);
seq__62281_62816 = G__62830;
chunk__62282_62817 = G__62831;
count__62283_62818 = G__62832;
i__62284_62819 = G__62833;
continue;
} else {
var vec__62294_62834 = cljs.core.first(seq__62281_62828__$1);
var type_62835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62294_62834,(0),null);
var f_62836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62294_62834,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_62835,((function (seq__62281_62816,chunk__62282_62817,count__62283_62818,i__62284_62819,vec__62294_62834,type_62835,f_62836,seq__62281_62828__$1,temp__5735__auto___62827,vec__62278_62813,elem_62814,selector_62815){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_62835,dommy$core$this_fn], 0));

return (f_62836.cljs$core$IFn$_invoke$arity$1 ? f_62836.cljs$core$IFn$_invoke$arity$1(e) : f_62836.call(null,e));
});})(seq__62281_62816,chunk__62282_62817,count__62283_62818,i__62284_62819,vec__62294_62834,type_62835,f_62836,seq__62281_62828__$1,temp__5735__auto___62827,vec__62278_62813,elem_62814,selector_62815))
], 0));


var G__62837 = cljs.core.next(seq__62281_62828__$1);
var G__62838 = null;
var G__62839 = (0);
var G__62840 = (0);
seq__62281_62816 = G__62837;
chunk__62282_62817 = G__62838;
count__62283_62818 = G__62839;
i__62284_62819 = G__62840;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq62276){
var G__62277 = cljs.core.first(seq62276);
var seq62276__$1 = cljs.core.next(seq62276);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62277,seq62276__$1);
}));


//# sourceMappingURL=dommy.core.js.map
