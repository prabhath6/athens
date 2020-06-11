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
var G__51962 = arguments.length;
switch (G__51962) {
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
var G__51970 = arguments.length;
switch (G__51970) {
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
var G__51974 = arguments.length;
switch (G__51974) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__51972_SHARP_){
return (!((p1__51972_SHARP_ === base)));
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
var len__4789__auto___52351 = arguments.length;
var i__4790__auto___52352 = (0);
while(true){
if((i__4790__auto___52352 < len__4789__auto___52351)){
args__4795__auto__.push((arguments[i__4790__auto___52352]));

var G__52354 = (i__4790__auto___52352 + (1));
i__4790__auto___52352 = G__52354;
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
var seq__51982_52358 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__51983_52359 = null;
var count__51984_52360 = (0);
var i__51985_52361 = (0);
while(true){
if((i__51985_52361 < count__51984_52360)){
var vec__51992_52362 = chunk__51983_52359.cljs$core$IIndexed$_nth$arity$2(null,i__51985_52361);
var k_52363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51992_52362,(0),null);
var v_52364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51992_52362,(1),null);
style.setProperty(dommy.utils.as_str(k_52363),v_52364);


var G__52365 = seq__51982_52358;
var G__52366 = chunk__51983_52359;
var G__52367 = count__51984_52360;
var G__52368 = (i__51985_52361 + (1));
seq__51982_52358 = G__52365;
chunk__51983_52359 = G__52366;
count__51984_52360 = G__52367;
i__51985_52361 = G__52368;
continue;
} else {
var temp__5735__auto___52369 = cljs.core.seq(seq__51982_52358);
if(temp__5735__auto___52369){
var seq__51982_52371__$1 = temp__5735__auto___52369;
if(cljs.core.chunked_seq_QMARK_(seq__51982_52371__$1)){
var c__4609__auto___52372 = cljs.core.chunk_first(seq__51982_52371__$1);
var G__52373 = cljs.core.chunk_rest(seq__51982_52371__$1);
var G__52374 = c__4609__auto___52372;
var G__52375 = cljs.core.count(c__4609__auto___52372);
var G__52376 = (0);
seq__51982_52358 = G__52373;
chunk__51983_52359 = G__52374;
count__51984_52360 = G__52375;
i__51985_52361 = G__52376;
continue;
} else {
var vec__51995_52377 = cljs.core.first(seq__51982_52371__$1);
var k_52378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51995_52377,(0),null);
var v_52379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51995_52377,(1),null);
style.setProperty(dommy.utils.as_str(k_52378),v_52379);


var G__52383 = cljs.core.next(seq__51982_52371__$1);
var G__52384 = null;
var G__52385 = (0);
var G__52386 = (0);
seq__51982_52358 = G__52383;
chunk__51983_52359 = G__52384;
count__51984_52360 = G__52385;
i__51985_52361 = G__52386;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq51979){
var G__51980 = cljs.core.first(seq51979);
var seq51979__$1 = cljs.core.next(seq51979);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51980,seq51979__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___52387 = arguments.length;
var i__4790__auto___52388 = (0);
while(true){
if((i__4790__auto___52388 < len__4789__auto___52387)){
args__4795__auto__.push((arguments[i__4790__auto___52388]));

var G__52389 = (i__4790__auto___52388 + (1));
i__4790__auto___52388 = G__52389;
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
var seq__52000_52390 = cljs.core.seq(keywords);
var chunk__52001_52391 = null;
var count__52002_52392 = (0);
var i__52003_52393 = (0);
while(true){
if((i__52003_52393 < count__52002_52392)){
var kw_52394 = chunk__52001_52391.cljs$core$IIndexed$_nth$arity$2(null,i__52003_52393);
style.removeProperty(dommy.utils.as_str(kw_52394));


var G__52395 = seq__52000_52390;
var G__52396 = chunk__52001_52391;
var G__52397 = count__52002_52392;
var G__52398 = (i__52003_52393 + (1));
seq__52000_52390 = G__52395;
chunk__52001_52391 = G__52396;
count__52002_52392 = G__52397;
i__52003_52393 = G__52398;
continue;
} else {
var temp__5735__auto___52399 = cljs.core.seq(seq__52000_52390);
if(temp__5735__auto___52399){
var seq__52000_52400__$1 = temp__5735__auto___52399;
if(cljs.core.chunked_seq_QMARK_(seq__52000_52400__$1)){
var c__4609__auto___52401 = cljs.core.chunk_first(seq__52000_52400__$1);
var G__52402 = cljs.core.chunk_rest(seq__52000_52400__$1);
var G__52403 = c__4609__auto___52401;
var G__52404 = cljs.core.count(c__4609__auto___52401);
var G__52405 = (0);
seq__52000_52390 = G__52402;
chunk__52001_52391 = G__52403;
count__52002_52392 = G__52404;
i__52003_52393 = G__52405;
continue;
} else {
var kw_52439 = cljs.core.first(seq__52000_52400__$1);
style.removeProperty(dommy.utils.as_str(kw_52439));


var G__52440 = cljs.core.next(seq__52000_52400__$1);
var G__52441 = null;
var G__52442 = (0);
var G__52443 = (0);
seq__52000_52390 = G__52440;
chunk__52001_52391 = G__52441;
count__52002_52392 = G__52442;
i__52003_52393 = G__52443;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq51998){
var G__51999 = cljs.core.first(seq51998);
var seq51998__$1 = cljs.core.next(seq51998);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51999,seq51998__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___52444 = arguments.length;
var i__4790__auto___52445 = (0);
while(true){
if((i__4790__auto___52445 < len__4789__auto___52444)){
args__4795__auto__.push((arguments[i__4790__auto___52445]));

var G__52448 = (i__4790__auto___52445 + (1));
i__4790__auto___52445 = G__52448;
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

var seq__52006_52451 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__52007_52452 = null;
var count__52008_52453 = (0);
var i__52009_52454 = (0);
while(true){
if((i__52009_52454 < count__52008_52453)){
var vec__52016_52455 = chunk__52007_52452.cljs$core$IIndexed$_nth$arity$2(null,i__52009_52454);
var k_52456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52016_52455,(0),null);
var v_52457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52016_52455,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_52456,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_52457),"px"].join('')], 0));


var G__52467 = seq__52006_52451;
var G__52468 = chunk__52007_52452;
var G__52469 = count__52008_52453;
var G__52470 = (i__52009_52454 + (1));
seq__52006_52451 = G__52467;
chunk__52007_52452 = G__52468;
count__52008_52453 = G__52469;
i__52009_52454 = G__52470;
continue;
} else {
var temp__5735__auto___52471 = cljs.core.seq(seq__52006_52451);
if(temp__5735__auto___52471){
var seq__52006_52472__$1 = temp__5735__auto___52471;
if(cljs.core.chunked_seq_QMARK_(seq__52006_52472__$1)){
var c__4609__auto___52473 = cljs.core.chunk_first(seq__52006_52472__$1);
var G__52474 = cljs.core.chunk_rest(seq__52006_52472__$1);
var G__52475 = c__4609__auto___52473;
var G__52476 = cljs.core.count(c__4609__auto___52473);
var G__52477 = (0);
seq__52006_52451 = G__52474;
chunk__52007_52452 = G__52475;
count__52008_52453 = G__52476;
i__52009_52454 = G__52477;
continue;
} else {
var vec__52019_52478 = cljs.core.first(seq__52006_52472__$1);
var k_52479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52019_52478,(0),null);
var v_52480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52019_52478,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_52479,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_52480),"px"].join('')], 0));


var G__52481 = cljs.core.next(seq__52006_52472__$1);
var G__52482 = null;
var G__52483 = (0);
var G__52484 = (0);
seq__52006_52451 = G__52481;
chunk__52007_52452 = G__52482;
count__52008_52453 = G__52483;
i__52009_52454 = G__52484;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq52004){
var G__52005 = cljs.core.first(seq52004);
var seq52004__$1 = cljs.core.next(seq52004);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52005,seq52004__$1);
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
var G__52027 = arguments.length;
switch (G__52027) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___52487 = arguments.length;
var i__4790__auto___52506 = (0);
while(true){
if((i__4790__auto___52506 < len__4789__auto___52487)){
args_arr__4810__auto__.push((arguments[i__4790__auto___52506]));

var G__52507 = (i__4790__auto___52506 + (1));
i__4790__auto___52506 = G__52507;
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
var G__52028 = elem;
(G__52028[k__$1] = v);

return G__52028;
} else {
var G__52029 = elem;
G__52029.setAttribute(k__$1,v);

return G__52029;
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

var seq__52030_52508 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__52031_52509 = null;
var count__52032_52510 = (0);
var i__52033_52511 = (0);
while(true){
if((i__52033_52511 < count__52032_52510)){
var vec__52040_52514 = chunk__52031_52509.cljs$core$IIndexed$_nth$arity$2(null,i__52033_52511);
var k_52515__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52040_52514,(0),null);
var v_52516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52040_52514,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_52515__$1,v_52516__$1);


var G__52517 = seq__52030_52508;
var G__52518 = chunk__52031_52509;
var G__52519 = count__52032_52510;
var G__52520 = (i__52033_52511 + (1));
seq__52030_52508 = G__52517;
chunk__52031_52509 = G__52518;
count__52032_52510 = G__52519;
i__52033_52511 = G__52520;
continue;
} else {
var temp__5735__auto___52527 = cljs.core.seq(seq__52030_52508);
if(temp__5735__auto___52527){
var seq__52030_52528__$1 = temp__5735__auto___52527;
if(cljs.core.chunked_seq_QMARK_(seq__52030_52528__$1)){
var c__4609__auto___52529 = cljs.core.chunk_first(seq__52030_52528__$1);
var G__52530 = cljs.core.chunk_rest(seq__52030_52528__$1);
var G__52531 = c__4609__auto___52529;
var G__52532 = cljs.core.count(c__4609__auto___52529);
var G__52533 = (0);
seq__52030_52508 = G__52530;
chunk__52031_52509 = G__52531;
count__52032_52510 = G__52532;
i__52033_52511 = G__52533;
continue;
} else {
var vec__52043_52534 = cljs.core.first(seq__52030_52528__$1);
var k_52535__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52043_52534,(0),null);
var v_52536__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52043_52534,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_52535__$1,v_52536__$1);


var G__52537 = cljs.core.next(seq__52030_52528__$1);
var G__52538 = null;
var G__52539 = (0);
var G__52540 = (0);
seq__52030_52508 = G__52537;
chunk__52031_52509 = G__52538;
count__52032_52510 = G__52539;
i__52033_52511 = G__52540;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq52023){
var G__52024 = cljs.core.first(seq52023);
var seq52023__$1 = cljs.core.next(seq52023);
var G__52025 = cljs.core.first(seq52023__$1);
var seq52023__$2 = cljs.core.next(seq52023__$1);
var G__52026 = cljs.core.first(seq52023__$2);
var seq52023__$3 = cljs.core.next(seq52023__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52024,G__52025,G__52026,seq52023__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__52050 = arguments.length;
switch (G__52050) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___52543 = arguments.length;
var i__4790__auto___52544 = (0);
while(true){
if((i__4790__auto___52544 < len__4789__auto___52543)){
args_arr__4810__auto__.push((arguments[i__4790__auto___52544]));

var G__52545 = (i__4790__auto___52544 + (1));
i__4790__auto___52544 = G__52545;
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
var k_52547__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__52051 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__52051.cljs$core$IFn$_invoke$arity$1 ? fexpr__52051.cljs$core$IFn$_invoke$arity$1(k_52547__$1) : fexpr__52051.call(null,k_52547__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_52547__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__52052_52548 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__52053_52549 = null;
var count__52054_52550 = (0);
var i__52055_52551 = (0);
while(true){
if((i__52055_52551 < count__52054_52550)){
var k_52552__$1 = chunk__52053_52549.cljs$core$IIndexed$_nth$arity$2(null,i__52055_52551);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_52552__$1);


var G__52553 = seq__52052_52548;
var G__52554 = chunk__52053_52549;
var G__52555 = count__52054_52550;
var G__52556 = (i__52055_52551 + (1));
seq__52052_52548 = G__52553;
chunk__52053_52549 = G__52554;
count__52054_52550 = G__52555;
i__52055_52551 = G__52556;
continue;
} else {
var temp__5735__auto___52557 = cljs.core.seq(seq__52052_52548);
if(temp__5735__auto___52557){
var seq__52052_52558__$1 = temp__5735__auto___52557;
if(cljs.core.chunked_seq_QMARK_(seq__52052_52558__$1)){
var c__4609__auto___52559 = cljs.core.chunk_first(seq__52052_52558__$1);
var G__52560 = cljs.core.chunk_rest(seq__52052_52558__$1);
var G__52561 = c__4609__auto___52559;
var G__52562 = cljs.core.count(c__4609__auto___52559);
var G__52563 = (0);
seq__52052_52548 = G__52560;
chunk__52053_52549 = G__52561;
count__52054_52550 = G__52562;
i__52055_52551 = G__52563;
continue;
} else {
var k_52566__$1 = cljs.core.first(seq__52052_52558__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_52566__$1);


var G__52568 = cljs.core.next(seq__52052_52558__$1);
var G__52569 = null;
var G__52570 = (0);
var G__52571 = (0);
seq__52052_52548 = G__52568;
chunk__52053_52549 = G__52569;
count__52054_52550 = G__52570;
i__52055_52551 = G__52571;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq52047){
var G__52048 = cljs.core.first(seq52047);
var seq52047__$1 = cljs.core.next(seq52047);
var G__52049 = cljs.core.first(seq52047__$1);
var seq52047__$2 = cljs.core.next(seq52047__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52048,G__52049,seq52047__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__52057 = arguments.length;
switch (G__52057) {
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
var G__52062 = arguments.length;
switch (G__52062) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___52575 = arguments.length;
var i__4790__auto___52576 = (0);
while(true){
if((i__4790__auto___52576 < len__4789__auto___52575)){
args_arr__4810__auto__.push((arguments[i__4790__auto___52576]));

var G__52577 = (i__4790__auto___52576 + (1));
i__4790__auto___52576 = G__52577;
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
var temp__5733__auto___52581 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___52581)){
var class_list_52582 = temp__5733__auto___52581;
var seq__52063_52583 = cljs.core.seq(classes__$1);
var chunk__52064_52584 = null;
var count__52065_52585 = (0);
var i__52066_52586 = (0);
while(true){
if((i__52066_52586 < count__52065_52585)){
var c_52591 = chunk__52064_52584.cljs$core$IIndexed$_nth$arity$2(null,i__52066_52586);
class_list_52582.add(c_52591);


var G__52592 = seq__52063_52583;
var G__52593 = chunk__52064_52584;
var G__52594 = count__52065_52585;
var G__52595 = (i__52066_52586 + (1));
seq__52063_52583 = G__52592;
chunk__52064_52584 = G__52593;
count__52065_52585 = G__52594;
i__52066_52586 = G__52595;
continue;
} else {
var temp__5735__auto___52596 = cljs.core.seq(seq__52063_52583);
if(temp__5735__auto___52596){
var seq__52063_52597__$1 = temp__5735__auto___52596;
if(cljs.core.chunked_seq_QMARK_(seq__52063_52597__$1)){
var c__4609__auto___52598 = cljs.core.chunk_first(seq__52063_52597__$1);
var G__52599 = cljs.core.chunk_rest(seq__52063_52597__$1);
var G__52600 = c__4609__auto___52598;
var G__52601 = cljs.core.count(c__4609__auto___52598);
var G__52602 = (0);
seq__52063_52583 = G__52599;
chunk__52064_52584 = G__52600;
count__52065_52585 = G__52601;
i__52066_52586 = G__52602;
continue;
} else {
var c_52603 = cljs.core.first(seq__52063_52597__$1);
class_list_52582.add(c_52603);


var G__52604 = cljs.core.next(seq__52063_52597__$1);
var G__52605 = null;
var G__52606 = (0);
var G__52607 = (0);
seq__52063_52583 = G__52604;
chunk__52064_52584 = G__52605;
count__52065_52585 = G__52606;
i__52066_52586 = G__52607;
continue;
}
} else {
}
}
break;
}
} else {
var seq__52067_52608 = cljs.core.seq(classes__$1);
var chunk__52068_52609 = null;
var count__52069_52610 = (0);
var i__52070_52611 = (0);
while(true){
if((i__52070_52611 < count__52069_52610)){
var c_52612 = chunk__52068_52609.cljs$core$IIndexed$_nth$arity$2(null,i__52070_52611);
var class_name_52613 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_52613,c_52612))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_52613 === ""))?c_52612:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_52613)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_52612)].join('')));
}


var G__52614 = seq__52067_52608;
var G__52615 = chunk__52068_52609;
var G__52616 = count__52069_52610;
var G__52617 = (i__52070_52611 + (1));
seq__52067_52608 = G__52614;
chunk__52068_52609 = G__52615;
count__52069_52610 = G__52616;
i__52070_52611 = G__52617;
continue;
} else {
var temp__5735__auto___52618 = cljs.core.seq(seq__52067_52608);
if(temp__5735__auto___52618){
var seq__52067_52619__$1 = temp__5735__auto___52618;
if(cljs.core.chunked_seq_QMARK_(seq__52067_52619__$1)){
var c__4609__auto___52620 = cljs.core.chunk_first(seq__52067_52619__$1);
var G__52621 = cljs.core.chunk_rest(seq__52067_52619__$1);
var G__52622 = c__4609__auto___52620;
var G__52623 = cljs.core.count(c__4609__auto___52620);
var G__52624 = (0);
seq__52067_52608 = G__52621;
chunk__52068_52609 = G__52622;
count__52069_52610 = G__52623;
i__52070_52611 = G__52624;
continue;
} else {
var c_52625 = cljs.core.first(seq__52067_52619__$1);
var class_name_52626 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_52626,c_52625))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_52626 === ""))?c_52625:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_52626)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_52625)].join('')));
}


var G__52627 = cljs.core.next(seq__52067_52619__$1);
var G__52628 = null;
var G__52629 = (0);
var G__52630 = (0);
seq__52067_52608 = G__52627;
chunk__52068_52609 = G__52628;
count__52069_52610 = G__52629;
i__52070_52611 = G__52630;
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
var seq__52071_52631 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__52072_52632 = null;
var count__52073_52633 = (0);
var i__52074_52634 = (0);
while(true){
if((i__52074_52634 < count__52073_52633)){
var c_52655 = chunk__52072_52632.cljs$core$IIndexed$_nth$arity$2(null,i__52074_52634);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_52655);


var G__52656 = seq__52071_52631;
var G__52657 = chunk__52072_52632;
var G__52658 = count__52073_52633;
var G__52659 = (i__52074_52634 + (1));
seq__52071_52631 = G__52656;
chunk__52072_52632 = G__52657;
count__52073_52633 = G__52658;
i__52074_52634 = G__52659;
continue;
} else {
var temp__5735__auto___52661 = cljs.core.seq(seq__52071_52631);
if(temp__5735__auto___52661){
var seq__52071_52662__$1 = temp__5735__auto___52661;
if(cljs.core.chunked_seq_QMARK_(seq__52071_52662__$1)){
var c__4609__auto___52664 = cljs.core.chunk_first(seq__52071_52662__$1);
var G__52665 = cljs.core.chunk_rest(seq__52071_52662__$1);
var G__52666 = c__4609__auto___52664;
var G__52667 = cljs.core.count(c__4609__auto___52664);
var G__52668 = (0);
seq__52071_52631 = G__52665;
chunk__52072_52632 = G__52666;
count__52073_52633 = G__52667;
i__52074_52634 = G__52668;
continue;
} else {
var c_52673 = cljs.core.first(seq__52071_52662__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_52673);


var G__52674 = cljs.core.next(seq__52071_52662__$1);
var G__52675 = null;
var G__52676 = (0);
var G__52677 = (0);
seq__52071_52631 = G__52674;
chunk__52072_52632 = G__52675;
count__52073_52633 = G__52676;
i__52074_52634 = G__52677;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq52059){
var G__52060 = cljs.core.first(seq52059);
var seq52059__$1 = cljs.core.next(seq52059);
var G__52061 = cljs.core.first(seq52059__$1);
var seq52059__$2 = cljs.core.next(seq52059__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52060,G__52061,seq52059__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__52079 = arguments.length;
switch (G__52079) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___52679 = arguments.length;
var i__4790__auto___52680 = (0);
while(true){
if((i__4790__auto___52680 < len__4789__auto___52679)){
args_arr__4810__auto__.push((arguments[i__4790__auto___52680]));

var G__52681 = (i__4790__auto___52680 + (1));
i__4790__auto___52680 = G__52681;
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
var temp__5733__auto___52682 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___52682)){
var class_list_52683 = temp__5733__auto___52682;
class_list_52683.remove(c__$1);
} else {
var class_name_52684 = dommy.core.class$(elem);
var new_class_name_52685 = dommy.utils.remove_class_str(class_name_52684,c__$1);
if((class_name_52684 === new_class_name_52685)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_52685);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__52080 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__52081 = null;
var count__52082 = (0);
var i__52083 = (0);
while(true){
if((i__52083 < count__52082)){
var c = chunk__52081.cljs$core$IIndexed$_nth$arity$2(null,i__52083);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__52686 = seq__52080;
var G__52687 = chunk__52081;
var G__52688 = count__52082;
var G__52689 = (i__52083 + (1));
seq__52080 = G__52686;
chunk__52081 = G__52687;
count__52082 = G__52688;
i__52083 = G__52689;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52080);
if(temp__5735__auto__){
var seq__52080__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52080__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52080__$1);
var G__52690 = cljs.core.chunk_rest(seq__52080__$1);
var G__52691 = c__4609__auto__;
var G__52692 = cljs.core.count(c__4609__auto__);
var G__52693 = (0);
seq__52080 = G__52690;
chunk__52081 = G__52691;
count__52082 = G__52692;
i__52083 = G__52693;
continue;
} else {
var c = cljs.core.first(seq__52080__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__52694 = cljs.core.next(seq__52080__$1);
var G__52695 = null;
var G__52696 = (0);
var G__52697 = (0);
seq__52080 = G__52694;
chunk__52081 = G__52695;
count__52082 = G__52696;
i__52083 = G__52697;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq52076){
var G__52077 = cljs.core.first(seq52076);
var seq52076__$1 = cljs.core.next(seq52076);
var G__52078 = cljs.core.first(seq52076__$1);
var seq52076__$2 = cljs.core.next(seq52076__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52077,G__52078,seq52076__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__52085 = arguments.length;
switch (G__52085) {
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
var temp__5733__auto___52699 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___52699)){
var class_list_52700 = temp__5733__auto___52699;
class_list_52700.toggle(c__$1);
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
var G__52087 = arguments.length;
switch (G__52087) {
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
var G__52089 = arguments.length;
switch (G__52089) {
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
var G__52094 = arguments.length;
switch (G__52094) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___52706 = arguments.length;
var i__4790__auto___52707 = (0);
while(true){
if((i__4790__auto___52707 < len__4789__auto___52706)){
args_arr__4810__auto__.push((arguments[i__4790__auto___52707]));

var G__52708 = (i__4790__auto___52707 + (1));
i__4790__auto___52707 = G__52708;
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
var G__52095 = parent;
G__52095.appendChild(child);

return G__52095;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__52096_52709 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__52097_52710 = null;
var count__52098_52711 = (0);
var i__52099_52712 = (0);
while(true){
if((i__52099_52712 < count__52098_52711)){
var c_52713 = chunk__52097_52710.cljs$core$IIndexed$_nth$arity$2(null,i__52099_52712);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_52713);


var G__52714 = seq__52096_52709;
var G__52715 = chunk__52097_52710;
var G__52716 = count__52098_52711;
var G__52717 = (i__52099_52712 + (1));
seq__52096_52709 = G__52714;
chunk__52097_52710 = G__52715;
count__52098_52711 = G__52716;
i__52099_52712 = G__52717;
continue;
} else {
var temp__5735__auto___52718 = cljs.core.seq(seq__52096_52709);
if(temp__5735__auto___52718){
var seq__52096_52719__$1 = temp__5735__auto___52718;
if(cljs.core.chunked_seq_QMARK_(seq__52096_52719__$1)){
var c__4609__auto___52720 = cljs.core.chunk_first(seq__52096_52719__$1);
var G__52721 = cljs.core.chunk_rest(seq__52096_52719__$1);
var G__52722 = c__4609__auto___52720;
var G__52723 = cljs.core.count(c__4609__auto___52720);
var G__52724 = (0);
seq__52096_52709 = G__52721;
chunk__52097_52710 = G__52722;
count__52098_52711 = G__52723;
i__52099_52712 = G__52724;
continue;
} else {
var c_52725 = cljs.core.first(seq__52096_52719__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_52725);


var G__52726 = cljs.core.next(seq__52096_52719__$1);
var G__52727 = null;
var G__52728 = (0);
var G__52729 = (0);
seq__52096_52709 = G__52726;
chunk__52097_52710 = G__52727;
count__52098_52711 = G__52728;
i__52099_52712 = G__52729;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq52091){
var G__52092 = cljs.core.first(seq52091);
var seq52091__$1 = cljs.core.next(seq52091);
var G__52093 = cljs.core.first(seq52091__$1);
var seq52091__$2 = cljs.core.next(seq52091__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52092,G__52093,seq52091__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__52104 = arguments.length;
switch (G__52104) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___52740 = arguments.length;
var i__4790__auto___52741 = (0);
while(true){
if((i__4790__auto___52741 < len__4789__auto___52740)){
args_arr__4810__auto__.push((arguments[i__4790__auto___52741]));

var G__52742 = (i__4790__auto___52741 + (1));
i__4790__auto___52741 = G__52742;
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
var G__52105 = parent;
G__52105.insertBefore(child,parent.firstChild);

return G__52105;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__52106_52743 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__52107_52744 = null;
var count__52108_52745 = (0);
var i__52109_52746 = (0);
while(true){
if((i__52109_52746 < count__52108_52745)){
var c_52747 = chunk__52107_52744.cljs$core$IIndexed$_nth$arity$2(null,i__52109_52746);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_52747);


var G__52748 = seq__52106_52743;
var G__52749 = chunk__52107_52744;
var G__52750 = count__52108_52745;
var G__52751 = (i__52109_52746 + (1));
seq__52106_52743 = G__52748;
chunk__52107_52744 = G__52749;
count__52108_52745 = G__52750;
i__52109_52746 = G__52751;
continue;
} else {
var temp__5735__auto___52755 = cljs.core.seq(seq__52106_52743);
if(temp__5735__auto___52755){
var seq__52106_52756__$1 = temp__5735__auto___52755;
if(cljs.core.chunked_seq_QMARK_(seq__52106_52756__$1)){
var c__4609__auto___52757 = cljs.core.chunk_first(seq__52106_52756__$1);
var G__52758 = cljs.core.chunk_rest(seq__52106_52756__$1);
var G__52759 = c__4609__auto___52757;
var G__52760 = cljs.core.count(c__4609__auto___52757);
var G__52761 = (0);
seq__52106_52743 = G__52758;
chunk__52107_52744 = G__52759;
count__52108_52745 = G__52760;
i__52109_52746 = G__52761;
continue;
} else {
var c_52762 = cljs.core.first(seq__52106_52756__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_52762);


var G__52763 = cljs.core.next(seq__52106_52756__$1);
var G__52764 = null;
var G__52765 = (0);
var G__52766 = (0);
seq__52106_52743 = G__52763;
chunk__52107_52744 = G__52764;
count__52108_52745 = G__52765;
i__52109_52746 = G__52766;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq52101){
var G__52102 = cljs.core.first(seq52101);
var seq52101__$1 = cljs.core.next(seq52101);
var G__52103 = cljs.core.first(seq52101__$1);
var seq52101__$2 = cljs.core.next(seq52101__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52102,G__52103,seq52101__$2);
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
var temp__5733__auto___52767 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___52767)){
var next_52768 = temp__5733__auto___52767;
dommy.core.insert_before_BANG_(elem,next_52768);
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
var G__52111 = arguments.length;
switch (G__52111) {
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
var G__52112 = p;
G__52112.removeChild(elem);

return G__52112;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52113){
var vec__52114 = p__52113;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52114,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52114,(1),null);
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
var len__4789__auto___52770 = arguments.length;
var i__4790__auto___52771 = (0);
while(true){
if((i__4790__auto___52771 < len__4789__auto___52770)){
args__4795__auto__.push((arguments[i__4790__auto___52771]));

var G__52772 = (i__4790__auto___52771 + (1));
i__4790__auto___52771 = G__52772;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq52117){
var G__52118 = cljs.core.first(seq52117);
var seq52117__$1 = cljs.core.next(seq52117);
var G__52119 = cljs.core.first(seq52117__$1);
var seq52117__$2 = cljs.core.next(seq52117__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52118,G__52119,seq52117__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__52120 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__52120.cljs$core$IFn$_invoke$arity$1 ? fexpr__52120.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__52120.call(null,elem_sel));
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
var len__4789__auto___52773 = arguments.length;
var i__4790__auto___52774 = (0);
while(true){
if((i__4790__auto___52774 < len__4789__auto___52773)){
args__4795__auto__.push((arguments[i__4790__auto___52774]));

var G__52775 = (i__4790__auto___52774 + (1));
i__4790__auto___52774 = G__52775;
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

var vec__52123_52776 = dommy.core.elem_and_selector(elem_sel);
var elem_52777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52123_52776,(0),null);
var selector_52778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52123_52776,(1),null);
var seq__52126_52779 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__52133_52780 = null;
var count__52134_52781 = (0);
var i__52135_52782 = (0);
while(true){
if((i__52135_52782 < count__52134_52781)){
var vec__52188_52783 = chunk__52133_52780.cljs$core$IIndexed$_nth$arity$2(null,i__52135_52782);
var orig_type_52784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52188_52783,(0),null);
var f_52785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52188_52783,(1),null);
var seq__52136_52786 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_52784,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_52784,cljs.core.identity])));
var chunk__52138_52787 = null;
var count__52139_52788 = (0);
var i__52140_52789 = (0);
while(true){
if((i__52140_52789 < count__52139_52788)){
var vec__52201_52790 = chunk__52138_52787.cljs$core$IIndexed$_nth$arity$2(null,i__52140_52789);
var actual_type_52791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52201_52790,(0),null);
var factory_52792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52201_52790,(1),null);
var canonical_f_52793 = (function (){var G__52205 = (factory_52792.cljs$core$IFn$_invoke$arity$1 ? factory_52792.cljs$core$IFn$_invoke$arity$1(f_52785) : factory_52792.call(null,f_52785));
var fexpr__52204 = (cljs.core.truth_(selector_52778)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_52777,selector_52778):cljs.core.identity);
return (fexpr__52204.cljs$core$IFn$_invoke$arity$1 ? fexpr__52204.cljs$core$IFn$_invoke$arity$1(G__52205) : fexpr__52204.call(null,G__52205));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52777,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52778,actual_type_52791,f_52785], null),canonical_f_52793], 0));

if(cljs.core.truth_(elem_52777.addEventListener)){
elem_52777.addEventListener(cljs.core.name(actual_type_52791),canonical_f_52793);
} else {
elem_52777.attachEvent(cljs.core.name(actual_type_52791),canonical_f_52793);
}


var G__52794 = seq__52136_52786;
var G__52795 = chunk__52138_52787;
var G__52796 = count__52139_52788;
var G__52797 = (i__52140_52789 + (1));
seq__52136_52786 = G__52794;
chunk__52138_52787 = G__52795;
count__52139_52788 = G__52796;
i__52140_52789 = G__52797;
continue;
} else {
var temp__5735__auto___52798 = cljs.core.seq(seq__52136_52786);
if(temp__5735__auto___52798){
var seq__52136_52799__$1 = temp__5735__auto___52798;
if(cljs.core.chunked_seq_QMARK_(seq__52136_52799__$1)){
var c__4609__auto___52800 = cljs.core.chunk_first(seq__52136_52799__$1);
var G__52801 = cljs.core.chunk_rest(seq__52136_52799__$1);
var G__52802 = c__4609__auto___52800;
var G__52803 = cljs.core.count(c__4609__auto___52800);
var G__52804 = (0);
seq__52136_52786 = G__52801;
chunk__52138_52787 = G__52802;
count__52139_52788 = G__52803;
i__52140_52789 = G__52804;
continue;
} else {
var vec__52206_52805 = cljs.core.first(seq__52136_52799__$1);
var actual_type_52806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52206_52805,(0),null);
var factory_52807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52206_52805,(1),null);
var canonical_f_52808 = (function (){var G__52210 = (factory_52807.cljs$core$IFn$_invoke$arity$1 ? factory_52807.cljs$core$IFn$_invoke$arity$1(f_52785) : factory_52807.call(null,f_52785));
var fexpr__52209 = (cljs.core.truth_(selector_52778)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_52777,selector_52778):cljs.core.identity);
return (fexpr__52209.cljs$core$IFn$_invoke$arity$1 ? fexpr__52209.cljs$core$IFn$_invoke$arity$1(G__52210) : fexpr__52209.call(null,G__52210));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52777,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52778,actual_type_52806,f_52785], null),canonical_f_52808], 0));

if(cljs.core.truth_(elem_52777.addEventListener)){
elem_52777.addEventListener(cljs.core.name(actual_type_52806),canonical_f_52808);
} else {
elem_52777.attachEvent(cljs.core.name(actual_type_52806),canonical_f_52808);
}


var G__52809 = cljs.core.next(seq__52136_52799__$1);
var G__52810 = null;
var G__52811 = (0);
var G__52812 = (0);
seq__52136_52786 = G__52809;
chunk__52138_52787 = G__52810;
count__52139_52788 = G__52811;
i__52140_52789 = G__52812;
continue;
}
} else {
}
}
break;
}

var G__52813 = seq__52126_52779;
var G__52814 = chunk__52133_52780;
var G__52815 = count__52134_52781;
var G__52816 = (i__52135_52782 + (1));
seq__52126_52779 = G__52813;
chunk__52133_52780 = G__52814;
count__52134_52781 = G__52815;
i__52135_52782 = G__52816;
continue;
} else {
var temp__5735__auto___52817 = cljs.core.seq(seq__52126_52779);
if(temp__5735__auto___52817){
var seq__52126_52818__$1 = temp__5735__auto___52817;
if(cljs.core.chunked_seq_QMARK_(seq__52126_52818__$1)){
var c__4609__auto___52819 = cljs.core.chunk_first(seq__52126_52818__$1);
var G__52820 = cljs.core.chunk_rest(seq__52126_52818__$1);
var G__52821 = c__4609__auto___52819;
var G__52822 = cljs.core.count(c__4609__auto___52819);
var G__52823 = (0);
seq__52126_52779 = G__52820;
chunk__52133_52780 = G__52821;
count__52134_52781 = G__52822;
i__52135_52782 = G__52823;
continue;
} else {
var vec__52211_52824 = cljs.core.first(seq__52126_52818__$1);
var orig_type_52825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52211_52824,(0),null);
var f_52826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52211_52824,(1),null);
var seq__52127_52827 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_52825,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_52825,cljs.core.identity])));
var chunk__52129_52828 = null;
var count__52130_52829 = (0);
var i__52131_52830 = (0);
while(true){
if((i__52131_52830 < count__52130_52829)){
var vec__52224_52831 = chunk__52129_52828.cljs$core$IIndexed$_nth$arity$2(null,i__52131_52830);
var actual_type_52832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52224_52831,(0),null);
var factory_52833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52224_52831,(1),null);
var canonical_f_52834 = (function (){var G__52228 = (factory_52833.cljs$core$IFn$_invoke$arity$1 ? factory_52833.cljs$core$IFn$_invoke$arity$1(f_52826) : factory_52833.call(null,f_52826));
var fexpr__52227 = (cljs.core.truth_(selector_52778)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_52777,selector_52778):cljs.core.identity);
return (fexpr__52227.cljs$core$IFn$_invoke$arity$1 ? fexpr__52227.cljs$core$IFn$_invoke$arity$1(G__52228) : fexpr__52227.call(null,G__52228));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52777,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52778,actual_type_52832,f_52826], null),canonical_f_52834], 0));

if(cljs.core.truth_(elem_52777.addEventListener)){
elem_52777.addEventListener(cljs.core.name(actual_type_52832),canonical_f_52834);
} else {
elem_52777.attachEvent(cljs.core.name(actual_type_52832),canonical_f_52834);
}


var G__52835 = seq__52127_52827;
var G__52836 = chunk__52129_52828;
var G__52837 = count__52130_52829;
var G__52838 = (i__52131_52830 + (1));
seq__52127_52827 = G__52835;
chunk__52129_52828 = G__52836;
count__52130_52829 = G__52837;
i__52131_52830 = G__52838;
continue;
} else {
var temp__5735__auto___52839__$1 = cljs.core.seq(seq__52127_52827);
if(temp__5735__auto___52839__$1){
var seq__52127_52840__$1 = temp__5735__auto___52839__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52127_52840__$1)){
var c__4609__auto___52841 = cljs.core.chunk_first(seq__52127_52840__$1);
var G__52842 = cljs.core.chunk_rest(seq__52127_52840__$1);
var G__52843 = c__4609__auto___52841;
var G__52844 = cljs.core.count(c__4609__auto___52841);
var G__52845 = (0);
seq__52127_52827 = G__52842;
chunk__52129_52828 = G__52843;
count__52130_52829 = G__52844;
i__52131_52830 = G__52845;
continue;
} else {
var vec__52229_52846 = cljs.core.first(seq__52127_52840__$1);
var actual_type_52847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52229_52846,(0),null);
var factory_52848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52229_52846,(1),null);
var canonical_f_52849 = (function (){var G__52233 = (factory_52848.cljs$core$IFn$_invoke$arity$1 ? factory_52848.cljs$core$IFn$_invoke$arity$1(f_52826) : factory_52848.call(null,f_52826));
var fexpr__52232 = (cljs.core.truth_(selector_52778)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_52777,selector_52778):cljs.core.identity);
return (fexpr__52232.cljs$core$IFn$_invoke$arity$1 ? fexpr__52232.cljs$core$IFn$_invoke$arity$1(G__52233) : fexpr__52232.call(null,G__52233));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52777,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52778,actual_type_52847,f_52826], null),canonical_f_52849], 0));

if(cljs.core.truth_(elem_52777.addEventListener)){
elem_52777.addEventListener(cljs.core.name(actual_type_52847),canonical_f_52849);
} else {
elem_52777.attachEvent(cljs.core.name(actual_type_52847),canonical_f_52849);
}


var G__52850 = cljs.core.next(seq__52127_52840__$1);
var G__52851 = null;
var G__52852 = (0);
var G__52853 = (0);
seq__52127_52827 = G__52850;
chunk__52129_52828 = G__52851;
count__52130_52829 = G__52852;
i__52131_52830 = G__52853;
continue;
}
} else {
}
}
break;
}

var G__52854 = cljs.core.next(seq__52126_52818__$1);
var G__52855 = null;
var G__52856 = (0);
var G__52857 = (0);
seq__52126_52779 = G__52854;
chunk__52133_52780 = G__52855;
count__52134_52781 = G__52856;
i__52135_52782 = G__52857;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq52121){
var G__52122 = cljs.core.first(seq52121);
var seq52121__$1 = cljs.core.next(seq52121);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52122,seq52121__$1);
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
var len__4789__auto___52858 = arguments.length;
var i__4790__auto___52859 = (0);
while(true){
if((i__4790__auto___52859 < len__4789__auto___52858)){
args__4795__auto__.push((arguments[i__4790__auto___52859]));

var G__52860 = (i__4790__auto___52859 + (1));
i__4790__auto___52859 = G__52860;
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

var vec__52236_52861 = dommy.core.elem_and_selector(elem_sel);
var elem_52862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52236_52861,(0),null);
var selector_52863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52236_52861,(1),null);
var seq__52239_52864 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__52246_52865 = null;
var count__52247_52866 = (0);
var i__52248_52867 = (0);
while(true){
if((i__52248_52867 < count__52247_52866)){
var vec__52285_52868 = chunk__52246_52865.cljs$core$IIndexed$_nth$arity$2(null,i__52248_52867);
var orig_type_52869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52285_52868,(0),null);
var f_52870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52285_52868,(1),null);
var seq__52249_52871 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_52869,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_52869,cljs.core.identity])));
var chunk__52251_52872 = null;
var count__52252_52873 = (0);
var i__52253_52874 = (0);
while(true){
if((i__52253_52874 < count__52252_52873)){
var vec__52294_52875 = chunk__52251_52872.cljs$core$IIndexed$_nth$arity$2(null,i__52253_52874);
var actual_type_52876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52294_52875,(0),null);
var __52877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52294_52875,(1),null);
var keys_52878 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52863,actual_type_52876,f_52870], null);
var canonical_f_52879 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_52862),keys_52878);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52862,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_52878], 0));

if(cljs.core.truth_(elem_52862.removeEventListener)){
elem_52862.removeEventListener(cljs.core.name(actual_type_52876),canonical_f_52879);
} else {
elem_52862.detachEvent(cljs.core.name(actual_type_52876),canonical_f_52879);
}


var G__52880 = seq__52249_52871;
var G__52881 = chunk__52251_52872;
var G__52882 = count__52252_52873;
var G__52883 = (i__52253_52874 + (1));
seq__52249_52871 = G__52880;
chunk__52251_52872 = G__52881;
count__52252_52873 = G__52882;
i__52253_52874 = G__52883;
continue;
} else {
var temp__5735__auto___52884 = cljs.core.seq(seq__52249_52871);
if(temp__5735__auto___52884){
var seq__52249_52885__$1 = temp__5735__auto___52884;
if(cljs.core.chunked_seq_QMARK_(seq__52249_52885__$1)){
var c__4609__auto___52886 = cljs.core.chunk_first(seq__52249_52885__$1);
var G__52887 = cljs.core.chunk_rest(seq__52249_52885__$1);
var G__52888 = c__4609__auto___52886;
var G__52889 = cljs.core.count(c__4609__auto___52886);
var G__52890 = (0);
seq__52249_52871 = G__52887;
chunk__52251_52872 = G__52888;
count__52252_52873 = G__52889;
i__52253_52874 = G__52890;
continue;
} else {
var vec__52297_52891 = cljs.core.first(seq__52249_52885__$1);
var actual_type_52892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52297_52891,(0),null);
var __52893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52297_52891,(1),null);
var keys_52894 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52863,actual_type_52892,f_52870], null);
var canonical_f_52895 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_52862),keys_52894);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52862,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_52894], 0));

if(cljs.core.truth_(elem_52862.removeEventListener)){
elem_52862.removeEventListener(cljs.core.name(actual_type_52892),canonical_f_52895);
} else {
elem_52862.detachEvent(cljs.core.name(actual_type_52892),canonical_f_52895);
}


var G__52896 = cljs.core.next(seq__52249_52885__$1);
var G__52897 = null;
var G__52898 = (0);
var G__52899 = (0);
seq__52249_52871 = G__52896;
chunk__52251_52872 = G__52897;
count__52252_52873 = G__52898;
i__52253_52874 = G__52899;
continue;
}
} else {
}
}
break;
}

var G__52900 = seq__52239_52864;
var G__52901 = chunk__52246_52865;
var G__52902 = count__52247_52866;
var G__52903 = (i__52248_52867 + (1));
seq__52239_52864 = G__52900;
chunk__52246_52865 = G__52901;
count__52247_52866 = G__52902;
i__52248_52867 = G__52903;
continue;
} else {
var temp__5735__auto___52904 = cljs.core.seq(seq__52239_52864);
if(temp__5735__auto___52904){
var seq__52239_52905__$1 = temp__5735__auto___52904;
if(cljs.core.chunked_seq_QMARK_(seq__52239_52905__$1)){
var c__4609__auto___52906 = cljs.core.chunk_first(seq__52239_52905__$1);
var G__52907 = cljs.core.chunk_rest(seq__52239_52905__$1);
var G__52908 = c__4609__auto___52906;
var G__52909 = cljs.core.count(c__4609__auto___52906);
var G__52910 = (0);
seq__52239_52864 = G__52907;
chunk__52246_52865 = G__52908;
count__52247_52866 = G__52909;
i__52248_52867 = G__52910;
continue;
} else {
var vec__52300_52911 = cljs.core.first(seq__52239_52905__$1);
var orig_type_52912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52300_52911,(0),null);
var f_52913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52300_52911,(1),null);
var seq__52240_52914 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_52912,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_52912,cljs.core.identity])));
var chunk__52242_52915 = null;
var count__52243_52916 = (0);
var i__52244_52917 = (0);
while(true){
if((i__52244_52917 < count__52243_52916)){
var vec__52309_52918 = chunk__52242_52915.cljs$core$IIndexed$_nth$arity$2(null,i__52244_52917);
var actual_type_52919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52309_52918,(0),null);
var __52920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52309_52918,(1),null);
var keys_52921 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52863,actual_type_52919,f_52913], null);
var canonical_f_52922 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_52862),keys_52921);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52862,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_52921], 0));

if(cljs.core.truth_(elem_52862.removeEventListener)){
elem_52862.removeEventListener(cljs.core.name(actual_type_52919),canonical_f_52922);
} else {
elem_52862.detachEvent(cljs.core.name(actual_type_52919),canonical_f_52922);
}


var G__52923 = seq__52240_52914;
var G__52924 = chunk__52242_52915;
var G__52925 = count__52243_52916;
var G__52926 = (i__52244_52917 + (1));
seq__52240_52914 = G__52923;
chunk__52242_52915 = G__52924;
count__52243_52916 = G__52925;
i__52244_52917 = G__52926;
continue;
} else {
var temp__5735__auto___52927__$1 = cljs.core.seq(seq__52240_52914);
if(temp__5735__auto___52927__$1){
var seq__52240_52928__$1 = temp__5735__auto___52927__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52240_52928__$1)){
var c__4609__auto___52929 = cljs.core.chunk_first(seq__52240_52928__$1);
var G__52930 = cljs.core.chunk_rest(seq__52240_52928__$1);
var G__52931 = c__4609__auto___52929;
var G__52932 = cljs.core.count(c__4609__auto___52929);
var G__52933 = (0);
seq__52240_52914 = G__52930;
chunk__52242_52915 = G__52931;
count__52243_52916 = G__52932;
i__52244_52917 = G__52933;
continue;
} else {
var vec__52312_52934 = cljs.core.first(seq__52240_52928__$1);
var actual_type_52935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52312_52934,(0),null);
var __52936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52312_52934,(1),null);
var keys_52937 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52863,actual_type_52935,f_52913], null);
var canonical_f_52938 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_52862),keys_52937);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52862,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_52937], 0));

if(cljs.core.truth_(elem_52862.removeEventListener)){
elem_52862.removeEventListener(cljs.core.name(actual_type_52935),canonical_f_52938);
} else {
elem_52862.detachEvent(cljs.core.name(actual_type_52935),canonical_f_52938);
}


var G__52939 = cljs.core.next(seq__52240_52928__$1);
var G__52940 = null;
var G__52941 = (0);
var G__52942 = (0);
seq__52240_52914 = G__52939;
chunk__52242_52915 = G__52940;
count__52243_52916 = G__52941;
i__52244_52917 = G__52942;
continue;
}
} else {
}
}
break;
}

var G__52943 = cljs.core.next(seq__52239_52905__$1);
var G__52944 = null;
var G__52945 = (0);
var G__52946 = (0);
seq__52239_52864 = G__52943;
chunk__52246_52865 = G__52944;
count__52247_52866 = G__52945;
i__52248_52867 = G__52946;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq52234){
var G__52235 = cljs.core.first(seq52234);
var seq52234__$1 = cljs.core.next(seq52234);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52235,seq52234__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___52947 = arguments.length;
var i__4790__auto___52948 = (0);
while(true){
if((i__4790__auto___52948 < len__4789__auto___52947)){
args__4795__auto__.push((arguments[i__4790__auto___52948]));

var G__52949 = (i__4790__auto___52948 + (1));
i__4790__auto___52948 = G__52949;
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

var vec__52317_52950 = dommy.core.elem_and_selector(elem_sel);
var elem_52951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52317_52950,(0),null);
var selector_52952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52317_52950,(1),null);
var seq__52320_52953 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__52321_52954 = null;
var count__52322_52955 = (0);
var i__52323_52956 = (0);
while(true){
if((i__52323_52956 < count__52322_52955)){
var vec__52330_52957 = chunk__52321_52954.cljs$core$IIndexed$_nth$arity$2(null,i__52323_52956);
var type_52958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52330_52957,(0),null);
var f_52959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52330_52957,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_52958,((function (seq__52320_52953,chunk__52321_52954,count__52322_52955,i__52323_52956,vec__52330_52957,type_52958,f_52959,vec__52317_52950,elem_52951,selector_52952){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_52958,dommy$core$this_fn], 0));

return (f_52959.cljs$core$IFn$_invoke$arity$1 ? f_52959.cljs$core$IFn$_invoke$arity$1(e) : f_52959.call(null,e));
});})(seq__52320_52953,chunk__52321_52954,count__52322_52955,i__52323_52956,vec__52330_52957,type_52958,f_52959,vec__52317_52950,elem_52951,selector_52952))
], 0));


var G__52960 = seq__52320_52953;
var G__52961 = chunk__52321_52954;
var G__52962 = count__52322_52955;
var G__52963 = (i__52323_52956 + (1));
seq__52320_52953 = G__52960;
chunk__52321_52954 = G__52961;
count__52322_52955 = G__52962;
i__52323_52956 = G__52963;
continue;
} else {
var temp__5735__auto___52964 = cljs.core.seq(seq__52320_52953);
if(temp__5735__auto___52964){
var seq__52320_52965__$1 = temp__5735__auto___52964;
if(cljs.core.chunked_seq_QMARK_(seq__52320_52965__$1)){
var c__4609__auto___52966 = cljs.core.chunk_first(seq__52320_52965__$1);
var G__52967 = cljs.core.chunk_rest(seq__52320_52965__$1);
var G__52968 = c__4609__auto___52966;
var G__52969 = cljs.core.count(c__4609__auto___52966);
var G__52970 = (0);
seq__52320_52953 = G__52967;
chunk__52321_52954 = G__52968;
count__52322_52955 = G__52969;
i__52323_52956 = G__52970;
continue;
} else {
var vec__52333_52971 = cljs.core.first(seq__52320_52965__$1);
var type_52972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52333_52971,(0),null);
var f_52973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52333_52971,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_52972,((function (seq__52320_52953,chunk__52321_52954,count__52322_52955,i__52323_52956,vec__52333_52971,type_52972,f_52973,seq__52320_52965__$1,temp__5735__auto___52964,vec__52317_52950,elem_52951,selector_52952){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_52972,dommy$core$this_fn], 0));

return (f_52973.cljs$core$IFn$_invoke$arity$1 ? f_52973.cljs$core$IFn$_invoke$arity$1(e) : f_52973.call(null,e));
});})(seq__52320_52953,chunk__52321_52954,count__52322_52955,i__52323_52956,vec__52333_52971,type_52972,f_52973,seq__52320_52965__$1,temp__5735__auto___52964,vec__52317_52950,elem_52951,selector_52952))
], 0));


var G__52974 = cljs.core.next(seq__52320_52965__$1);
var G__52975 = null;
var G__52976 = (0);
var G__52977 = (0);
seq__52320_52953 = G__52974;
chunk__52321_52954 = G__52975;
count__52322_52955 = G__52976;
i__52323_52956 = G__52977;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq52315){
var G__52316 = cljs.core.first(seq52315);
var seq52315__$1 = cljs.core.next(seq52315);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52316,seq52315__$1);
}));


//# sourceMappingURL=dommy.core.js.map
