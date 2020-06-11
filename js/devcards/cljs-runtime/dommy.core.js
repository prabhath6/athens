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
var G__48031 = arguments.length;
switch (G__48031) {
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
var G__48038 = arguments.length;
switch (G__48038) {
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
var G__48043 = arguments.length;
switch (G__48043) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__48039_SHARP_){
return (!((p1__48039_SHARP_ === base)));
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
var len__4789__auto___48420 = arguments.length;
var i__4790__auto___48421 = (0);
while(true){
if((i__4790__auto___48421 < len__4789__auto___48420)){
args__4795__auto__.push((arguments[i__4790__auto___48421]));

var G__48422 = (i__4790__auto___48421 + (1));
i__4790__auto___48421 = G__48422;
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
var seq__48046_48426 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__48047_48427 = null;
var count__48048_48428 = (0);
var i__48049_48429 = (0);
while(true){
if((i__48049_48429 < count__48048_48428)){
var vec__48056_48430 = chunk__48047_48427.cljs$core$IIndexed$_nth$arity$2(null,i__48049_48429);
var k_48431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48056_48430,(0),null);
var v_48432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48056_48430,(1),null);
style.setProperty(dommy.utils.as_str(k_48431),v_48432);


var G__48433 = seq__48046_48426;
var G__48434 = chunk__48047_48427;
var G__48435 = count__48048_48428;
var G__48436 = (i__48049_48429 + (1));
seq__48046_48426 = G__48433;
chunk__48047_48427 = G__48434;
count__48048_48428 = G__48435;
i__48049_48429 = G__48436;
continue;
} else {
var temp__5735__auto___48437 = cljs.core.seq(seq__48046_48426);
if(temp__5735__auto___48437){
var seq__48046_48438__$1 = temp__5735__auto___48437;
if(cljs.core.chunked_seq_QMARK_(seq__48046_48438__$1)){
var c__4609__auto___48439 = cljs.core.chunk_first(seq__48046_48438__$1);
var G__48440 = cljs.core.chunk_rest(seq__48046_48438__$1);
var G__48441 = c__4609__auto___48439;
var G__48442 = cljs.core.count(c__4609__auto___48439);
var G__48443 = (0);
seq__48046_48426 = G__48440;
chunk__48047_48427 = G__48441;
count__48048_48428 = G__48442;
i__48049_48429 = G__48443;
continue;
} else {
var vec__48059_48444 = cljs.core.first(seq__48046_48438__$1);
var k_48445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48059_48444,(0),null);
var v_48446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48059_48444,(1),null);
style.setProperty(dommy.utils.as_str(k_48445),v_48446);


var G__48447 = cljs.core.next(seq__48046_48438__$1);
var G__48448 = null;
var G__48449 = (0);
var G__48450 = (0);
seq__48046_48426 = G__48447;
chunk__48047_48427 = G__48448;
count__48048_48428 = G__48449;
i__48049_48429 = G__48450;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq48044){
var G__48045 = cljs.core.first(seq48044);
var seq48044__$1 = cljs.core.next(seq48044);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48045,seq48044__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48451 = arguments.length;
var i__4790__auto___48452 = (0);
while(true){
if((i__4790__auto___48452 < len__4789__auto___48451)){
args__4795__auto__.push((arguments[i__4790__auto___48452]));

var G__48453 = (i__4790__auto___48452 + (1));
i__4790__auto___48452 = G__48453;
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
var seq__48064_48454 = cljs.core.seq(keywords);
var chunk__48065_48455 = null;
var count__48066_48456 = (0);
var i__48067_48457 = (0);
while(true){
if((i__48067_48457 < count__48066_48456)){
var kw_48458 = chunk__48065_48455.cljs$core$IIndexed$_nth$arity$2(null,i__48067_48457);
style.removeProperty(dommy.utils.as_str(kw_48458));


var G__48459 = seq__48064_48454;
var G__48460 = chunk__48065_48455;
var G__48461 = count__48066_48456;
var G__48462 = (i__48067_48457 + (1));
seq__48064_48454 = G__48459;
chunk__48065_48455 = G__48460;
count__48066_48456 = G__48461;
i__48067_48457 = G__48462;
continue;
} else {
var temp__5735__auto___48463 = cljs.core.seq(seq__48064_48454);
if(temp__5735__auto___48463){
var seq__48064_48464__$1 = temp__5735__auto___48463;
if(cljs.core.chunked_seq_QMARK_(seq__48064_48464__$1)){
var c__4609__auto___48482 = cljs.core.chunk_first(seq__48064_48464__$1);
var G__48483 = cljs.core.chunk_rest(seq__48064_48464__$1);
var G__48484 = c__4609__auto___48482;
var G__48485 = cljs.core.count(c__4609__auto___48482);
var G__48486 = (0);
seq__48064_48454 = G__48483;
chunk__48065_48455 = G__48484;
count__48066_48456 = G__48485;
i__48067_48457 = G__48486;
continue;
} else {
var kw_48487 = cljs.core.first(seq__48064_48464__$1);
style.removeProperty(dommy.utils.as_str(kw_48487));


var G__48488 = cljs.core.next(seq__48064_48464__$1);
var G__48489 = null;
var G__48490 = (0);
var G__48491 = (0);
seq__48064_48454 = G__48488;
chunk__48065_48455 = G__48489;
count__48066_48456 = G__48490;
i__48067_48457 = G__48491;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq48062){
var G__48063 = cljs.core.first(seq48062);
var seq48062__$1 = cljs.core.next(seq48062);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48063,seq48062__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48492 = arguments.length;
var i__4790__auto___48493 = (0);
while(true){
if((i__4790__auto___48493 < len__4789__auto___48492)){
args__4795__auto__.push((arguments[i__4790__auto___48493]));

var G__48494 = (i__4790__auto___48493 + (1));
i__4790__auto___48493 = G__48494;
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

var seq__48070_48507 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__48071_48508 = null;
var count__48072_48509 = (0);
var i__48073_48510 = (0);
while(true){
if((i__48073_48510 < count__48072_48509)){
var vec__48080_48511 = chunk__48071_48508.cljs$core$IIndexed$_nth$arity$2(null,i__48073_48510);
var k_48512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48080_48511,(0),null);
var v_48513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48080_48511,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_48512,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_48513),"px"].join('')], 0));


var G__48514 = seq__48070_48507;
var G__48515 = chunk__48071_48508;
var G__48516 = count__48072_48509;
var G__48517 = (i__48073_48510 + (1));
seq__48070_48507 = G__48514;
chunk__48071_48508 = G__48515;
count__48072_48509 = G__48516;
i__48073_48510 = G__48517;
continue;
} else {
var temp__5735__auto___48518 = cljs.core.seq(seq__48070_48507);
if(temp__5735__auto___48518){
var seq__48070_48519__$1 = temp__5735__auto___48518;
if(cljs.core.chunked_seq_QMARK_(seq__48070_48519__$1)){
var c__4609__auto___48520 = cljs.core.chunk_first(seq__48070_48519__$1);
var G__48521 = cljs.core.chunk_rest(seq__48070_48519__$1);
var G__48522 = c__4609__auto___48520;
var G__48523 = cljs.core.count(c__4609__auto___48520);
var G__48524 = (0);
seq__48070_48507 = G__48521;
chunk__48071_48508 = G__48522;
count__48072_48509 = G__48523;
i__48073_48510 = G__48524;
continue;
} else {
var vec__48083_48525 = cljs.core.first(seq__48070_48519__$1);
var k_48526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48083_48525,(0),null);
var v_48527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48083_48525,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_48526,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_48527),"px"].join('')], 0));


var G__48528 = cljs.core.next(seq__48070_48519__$1);
var G__48529 = null;
var G__48530 = (0);
var G__48531 = (0);
seq__48070_48507 = G__48528;
chunk__48071_48508 = G__48529;
count__48072_48509 = G__48530;
i__48073_48510 = G__48531;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq48068){
var G__48069 = cljs.core.first(seq48068);
var seq48068__$1 = cljs.core.next(seq48068);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48069,seq48068__$1);
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
var G__48091 = arguments.length;
switch (G__48091) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48539 = arguments.length;
var i__4790__auto___48540 = (0);
while(true){
if((i__4790__auto___48540 < len__4789__auto___48539)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48540]));

var G__48541 = (i__4790__auto___48540 + (1));
i__4790__auto___48540 = G__48541;
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
var G__48092 = elem;
(G__48092[k__$1] = v);

return G__48092;
} else {
var G__48093 = elem;
G__48093.setAttribute(k__$1,v);

return G__48093;
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

var seq__48094_48542 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__48095_48543 = null;
var count__48096_48544 = (0);
var i__48097_48545 = (0);
while(true){
if((i__48097_48545 < count__48096_48544)){
var vec__48104_48550 = chunk__48095_48543.cljs$core$IIndexed$_nth$arity$2(null,i__48097_48545);
var k_48551__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48104_48550,(0),null);
var v_48552__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48104_48550,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_48551__$1,v_48552__$1);


var G__48553 = seq__48094_48542;
var G__48554 = chunk__48095_48543;
var G__48555 = count__48096_48544;
var G__48556 = (i__48097_48545 + (1));
seq__48094_48542 = G__48553;
chunk__48095_48543 = G__48554;
count__48096_48544 = G__48555;
i__48097_48545 = G__48556;
continue;
} else {
var temp__5735__auto___48559 = cljs.core.seq(seq__48094_48542);
if(temp__5735__auto___48559){
var seq__48094_48561__$1 = temp__5735__auto___48559;
if(cljs.core.chunked_seq_QMARK_(seq__48094_48561__$1)){
var c__4609__auto___48562 = cljs.core.chunk_first(seq__48094_48561__$1);
var G__48567 = cljs.core.chunk_rest(seq__48094_48561__$1);
var G__48568 = c__4609__auto___48562;
var G__48569 = cljs.core.count(c__4609__auto___48562);
var G__48570 = (0);
seq__48094_48542 = G__48567;
chunk__48095_48543 = G__48568;
count__48096_48544 = G__48569;
i__48097_48545 = G__48570;
continue;
} else {
var vec__48107_48571 = cljs.core.first(seq__48094_48561__$1);
var k_48572__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48107_48571,(0),null);
var v_48573__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48107_48571,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_48572__$1,v_48573__$1);


var G__48574 = cljs.core.next(seq__48094_48561__$1);
var G__48575 = null;
var G__48576 = (0);
var G__48577 = (0);
seq__48094_48542 = G__48574;
chunk__48095_48543 = G__48575;
count__48096_48544 = G__48576;
i__48097_48545 = G__48577;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq48087){
var G__48088 = cljs.core.first(seq48087);
var seq48087__$1 = cljs.core.next(seq48087);
var G__48089 = cljs.core.first(seq48087__$1);
var seq48087__$2 = cljs.core.next(seq48087__$1);
var G__48090 = cljs.core.first(seq48087__$2);
var seq48087__$3 = cljs.core.next(seq48087__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48088,G__48089,G__48090,seq48087__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__48114 = arguments.length;
switch (G__48114) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48579 = arguments.length;
var i__4790__auto___48580 = (0);
while(true){
if((i__4790__auto___48580 < len__4789__auto___48579)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48580]));

var G__48581 = (i__4790__auto___48580 + (1));
i__4790__auto___48580 = G__48581;
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
var k_48582__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__48115 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__48115.cljs$core$IFn$_invoke$arity$1 ? fexpr__48115.cljs$core$IFn$_invoke$arity$1(k_48582__$1) : fexpr__48115.call(null,k_48582__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_48582__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__48116_48583 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__48117_48584 = null;
var count__48118_48585 = (0);
var i__48119_48586 = (0);
while(true){
if((i__48119_48586 < count__48118_48585)){
var k_48587__$1 = chunk__48117_48584.cljs$core$IIndexed$_nth$arity$2(null,i__48119_48586);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_48587__$1);


var G__48588 = seq__48116_48583;
var G__48589 = chunk__48117_48584;
var G__48590 = count__48118_48585;
var G__48591 = (i__48119_48586 + (1));
seq__48116_48583 = G__48588;
chunk__48117_48584 = G__48589;
count__48118_48585 = G__48590;
i__48119_48586 = G__48591;
continue;
} else {
var temp__5735__auto___48592 = cljs.core.seq(seq__48116_48583);
if(temp__5735__auto___48592){
var seq__48116_48593__$1 = temp__5735__auto___48592;
if(cljs.core.chunked_seq_QMARK_(seq__48116_48593__$1)){
var c__4609__auto___48594 = cljs.core.chunk_first(seq__48116_48593__$1);
var G__48595 = cljs.core.chunk_rest(seq__48116_48593__$1);
var G__48596 = c__4609__auto___48594;
var G__48597 = cljs.core.count(c__4609__auto___48594);
var G__48598 = (0);
seq__48116_48583 = G__48595;
chunk__48117_48584 = G__48596;
count__48118_48585 = G__48597;
i__48119_48586 = G__48598;
continue;
} else {
var k_48599__$1 = cljs.core.first(seq__48116_48593__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_48599__$1);


var G__48600 = cljs.core.next(seq__48116_48593__$1);
var G__48601 = null;
var G__48602 = (0);
var G__48603 = (0);
seq__48116_48583 = G__48600;
chunk__48117_48584 = G__48601;
count__48118_48585 = G__48602;
i__48119_48586 = G__48603;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq48111){
var G__48112 = cljs.core.first(seq48111);
var seq48111__$1 = cljs.core.next(seq48111);
var G__48113 = cljs.core.first(seq48111__$1);
var seq48111__$2 = cljs.core.next(seq48111__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48112,G__48113,seq48111__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__48121 = arguments.length;
switch (G__48121) {
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
var G__48126 = arguments.length;
switch (G__48126) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48615 = arguments.length;
var i__4790__auto___48616 = (0);
while(true){
if((i__4790__auto___48616 < len__4789__auto___48615)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48616]));

var G__48618 = (i__4790__auto___48616 + (1));
i__4790__auto___48616 = G__48618;
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
var temp__5733__auto___48624 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___48624)){
var class_list_48625 = temp__5733__auto___48624;
var seq__48127_48630 = cljs.core.seq(classes__$1);
var chunk__48128_48631 = null;
var count__48129_48632 = (0);
var i__48130_48633 = (0);
while(true){
if((i__48130_48633 < count__48129_48632)){
var c_48634 = chunk__48128_48631.cljs$core$IIndexed$_nth$arity$2(null,i__48130_48633);
class_list_48625.add(c_48634);


var G__48635 = seq__48127_48630;
var G__48636 = chunk__48128_48631;
var G__48637 = count__48129_48632;
var G__48638 = (i__48130_48633 + (1));
seq__48127_48630 = G__48635;
chunk__48128_48631 = G__48636;
count__48129_48632 = G__48637;
i__48130_48633 = G__48638;
continue;
} else {
var temp__5735__auto___48641 = cljs.core.seq(seq__48127_48630);
if(temp__5735__auto___48641){
var seq__48127_48642__$1 = temp__5735__auto___48641;
if(cljs.core.chunked_seq_QMARK_(seq__48127_48642__$1)){
var c__4609__auto___48643 = cljs.core.chunk_first(seq__48127_48642__$1);
var G__48644 = cljs.core.chunk_rest(seq__48127_48642__$1);
var G__48645 = c__4609__auto___48643;
var G__48646 = cljs.core.count(c__4609__auto___48643);
var G__48647 = (0);
seq__48127_48630 = G__48644;
chunk__48128_48631 = G__48645;
count__48129_48632 = G__48646;
i__48130_48633 = G__48647;
continue;
} else {
var c_48652 = cljs.core.first(seq__48127_48642__$1);
class_list_48625.add(c_48652);


var G__48653 = cljs.core.next(seq__48127_48642__$1);
var G__48654 = null;
var G__48655 = (0);
var G__48656 = (0);
seq__48127_48630 = G__48653;
chunk__48128_48631 = G__48654;
count__48129_48632 = G__48655;
i__48130_48633 = G__48656;
continue;
}
} else {
}
}
break;
}
} else {
var seq__48131_48659 = cljs.core.seq(classes__$1);
var chunk__48132_48660 = null;
var count__48133_48661 = (0);
var i__48134_48662 = (0);
while(true){
if((i__48134_48662 < count__48133_48661)){
var c_48663 = chunk__48132_48660.cljs$core$IIndexed$_nth$arity$2(null,i__48134_48662);
var class_name_48664 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_48664,c_48663))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_48664 === ""))?c_48663:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_48664)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_48663)].join('')));
}


var G__48665 = seq__48131_48659;
var G__48666 = chunk__48132_48660;
var G__48667 = count__48133_48661;
var G__48668 = (i__48134_48662 + (1));
seq__48131_48659 = G__48665;
chunk__48132_48660 = G__48666;
count__48133_48661 = G__48667;
i__48134_48662 = G__48668;
continue;
} else {
var temp__5735__auto___48669 = cljs.core.seq(seq__48131_48659);
if(temp__5735__auto___48669){
var seq__48131_48670__$1 = temp__5735__auto___48669;
if(cljs.core.chunked_seq_QMARK_(seq__48131_48670__$1)){
var c__4609__auto___48671 = cljs.core.chunk_first(seq__48131_48670__$1);
var G__48672 = cljs.core.chunk_rest(seq__48131_48670__$1);
var G__48673 = c__4609__auto___48671;
var G__48674 = cljs.core.count(c__4609__auto___48671);
var G__48675 = (0);
seq__48131_48659 = G__48672;
chunk__48132_48660 = G__48673;
count__48133_48661 = G__48674;
i__48134_48662 = G__48675;
continue;
} else {
var c_48676 = cljs.core.first(seq__48131_48670__$1);
var class_name_48677 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_48677,c_48676))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_48677 === ""))?c_48676:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_48677)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_48676)].join('')));
}


var G__48678 = cljs.core.next(seq__48131_48670__$1);
var G__48679 = null;
var G__48680 = (0);
var G__48681 = (0);
seq__48131_48659 = G__48678;
chunk__48132_48660 = G__48679;
count__48133_48661 = G__48680;
i__48134_48662 = G__48681;
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
var seq__48135_48682 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__48136_48683 = null;
var count__48137_48684 = (0);
var i__48138_48685 = (0);
while(true){
if((i__48138_48685 < count__48137_48684)){
var c_48686 = chunk__48136_48683.cljs$core$IIndexed$_nth$arity$2(null,i__48138_48685);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_48686);


var G__48687 = seq__48135_48682;
var G__48688 = chunk__48136_48683;
var G__48689 = count__48137_48684;
var G__48690 = (i__48138_48685 + (1));
seq__48135_48682 = G__48687;
chunk__48136_48683 = G__48688;
count__48137_48684 = G__48689;
i__48138_48685 = G__48690;
continue;
} else {
var temp__5735__auto___48691 = cljs.core.seq(seq__48135_48682);
if(temp__5735__auto___48691){
var seq__48135_48692__$1 = temp__5735__auto___48691;
if(cljs.core.chunked_seq_QMARK_(seq__48135_48692__$1)){
var c__4609__auto___48693 = cljs.core.chunk_first(seq__48135_48692__$1);
var G__48694 = cljs.core.chunk_rest(seq__48135_48692__$1);
var G__48695 = c__4609__auto___48693;
var G__48696 = cljs.core.count(c__4609__auto___48693);
var G__48697 = (0);
seq__48135_48682 = G__48694;
chunk__48136_48683 = G__48695;
count__48137_48684 = G__48696;
i__48138_48685 = G__48697;
continue;
} else {
var c_48698 = cljs.core.first(seq__48135_48692__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_48698);


var G__48700 = cljs.core.next(seq__48135_48692__$1);
var G__48701 = null;
var G__48702 = (0);
var G__48703 = (0);
seq__48135_48682 = G__48700;
chunk__48136_48683 = G__48701;
count__48137_48684 = G__48702;
i__48138_48685 = G__48703;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq48123){
var G__48124 = cljs.core.first(seq48123);
var seq48123__$1 = cljs.core.next(seq48123);
var G__48125 = cljs.core.first(seq48123__$1);
var seq48123__$2 = cljs.core.next(seq48123__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48124,G__48125,seq48123__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__48143 = arguments.length;
switch (G__48143) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48705 = arguments.length;
var i__4790__auto___48706 = (0);
while(true){
if((i__4790__auto___48706 < len__4789__auto___48705)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48706]));

var G__48707 = (i__4790__auto___48706 + (1));
i__4790__auto___48706 = G__48707;
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
var temp__5733__auto___48708 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___48708)){
var class_list_48709 = temp__5733__auto___48708;
class_list_48709.remove(c__$1);
} else {
var class_name_48711 = dommy.core.class$(elem);
var new_class_name_48712 = dommy.utils.remove_class_str(class_name_48711,c__$1);
if((class_name_48711 === new_class_name_48712)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_48712);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__48144 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__48145 = null;
var count__48146 = (0);
var i__48147 = (0);
while(true){
if((i__48147 < count__48146)){
var c = chunk__48145.cljs$core$IIndexed$_nth$arity$2(null,i__48147);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__48713 = seq__48144;
var G__48714 = chunk__48145;
var G__48715 = count__48146;
var G__48716 = (i__48147 + (1));
seq__48144 = G__48713;
chunk__48145 = G__48714;
count__48146 = G__48715;
i__48147 = G__48716;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48144);
if(temp__5735__auto__){
var seq__48144__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48144__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48144__$1);
var G__48719 = cljs.core.chunk_rest(seq__48144__$1);
var G__48720 = c__4609__auto__;
var G__48721 = cljs.core.count(c__4609__auto__);
var G__48722 = (0);
seq__48144 = G__48719;
chunk__48145 = G__48720;
count__48146 = G__48721;
i__48147 = G__48722;
continue;
} else {
var c = cljs.core.first(seq__48144__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__48724 = cljs.core.next(seq__48144__$1);
var G__48725 = null;
var G__48726 = (0);
var G__48727 = (0);
seq__48144 = G__48724;
chunk__48145 = G__48725;
count__48146 = G__48726;
i__48147 = G__48727;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq48140){
var G__48141 = cljs.core.first(seq48140);
var seq48140__$1 = cljs.core.next(seq48140);
var G__48142 = cljs.core.first(seq48140__$1);
var seq48140__$2 = cljs.core.next(seq48140__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48141,G__48142,seq48140__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__48149 = arguments.length;
switch (G__48149) {
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
var temp__5733__auto___48733 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___48733)){
var class_list_48734 = temp__5733__auto___48733;
class_list_48734.toggle(c__$1);
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
var G__48151 = arguments.length;
switch (G__48151) {
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
var G__48153 = arguments.length;
switch (G__48153) {
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
var G__48158 = arguments.length;
switch (G__48158) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48768 = arguments.length;
var i__4790__auto___48769 = (0);
while(true){
if((i__4790__auto___48769 < len__4789__auto___48768)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48769]));

var G__48770 = (i__4790__auto___48769 + (1));
i__4790__auto___48769 = G__48770;
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
var G__48159 = parent;
G__48159.appendChild(child);

return G__48159;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__48160_48771 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__48161_48772 = null;
var count__48162_48773 = (0);
var i__48163_48774 = (0);
while(true){
if((i__48163_48774 < count__48162_48773)){
var c_48775 = chunk__48161_48772.cljs$core$IIndexed$_nth$arity$2(null,i__48163_48774);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_48775);


var G__48776 = seq__48160_48771;
var G__48777 = chunk__48161_48772;
var G__48778 = count__48162_48773;
var G__48779 = (i__48163_48774 + (1));
seq__48160_48771 = G__48776;
chunk__48161_48772 = G__48777;
count__48162_48773 = G__48778;
i__48163_48774 = G__48779;
continue;
} else {
var temp__5735__auto___48780 = cljs.core.seq(seq__48160_48771);
if(temp__5735__auto___48780){
var seq__48160_48781__$1 = temp__5735__auto___48780;
if(cljs.core.chunked_seq_QMARK_(seq__48160_48781__$1)){
var c__4609__auto___48782 = cljs.core.chunk_first(seq__48160_48781__$1);
var G__48783 = cljs.core.chunk_rest(seq__48160_48781__$1);
var G__48784 = c__4609__auto___48782;
var G__48785 = cljs.core.count(c__4609__auto___48782);
var G__48786 = (0);
seq__48160_48771 = G__48783;
chunk__48161_48772 = G__48784;
count__48162_48773 = G__48785;
i__48163_48774 = G__48786;
continue;
} else {
var c_48787 = cljs.core.first(seq__48160_48781__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_48787);


var G__48788 = cljs.core.next(seq__48160_48781__$1);
var G__48789 = null;
var G__48790 = (0);
var G__48791 = (0);
seq__48160_48771 = G__48788;
chunk__48161_48772 = G__48789;
count__48162_48773 = G__48790;
i__48163_48774 = G__48791;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq48155){
var G__48156 = cljs.core.first(seq48155);
var seq48155__$1 = cljs.core.next(seq48155);
var G__48157 = cljs.core.first(seq48155__$1);
var seq48155__$2 = cljs.core.next(seq48155__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48156,G__48157,seq48155__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__48168 = arguments.length;
switch (G__48168) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48793 = arguments.length;
var i__4790__auto___48794 = (0);
while(true){
if((i__4790__auto___48794 < len__4789__auto___48793)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48794]));

var G__48795 = (i__4790__auto___48794 + (1));
i__4790__auto___48794 = G__48795;
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
var G__48169 = parent;
G__48169.insertBefore(child,parent.firstChild);

return G__48169;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__48170_48796 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__48171_48797 = null;
var count__48172_48798 = (0);
var i__48173_48799 = (0);
while(true){
if((i__48173_48799 < count__48172_48798)){
var c_48800 = chunk__48171_48797.cljs$core$IIndexed$_nth$arity$2(null,i__48173_48799);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_48800);


var G__48801 = seq__48170_48796;
var G__48802 = chunk__48171_48797;
var G__48803 = count__48172_48798;
var G__48804 = (i__48173_48799 + (1));
seq__48170_48796 = G__48801;
chunk__48171_48797 = G__48802;
count__48172_48798 = G__48803;
i__48173_48799 = G__48804;
continue;
} else {
var temp__5735__auto___48805 = cljs.core.seq(seq__48170_48796);
if(temp__5735__auto___48805){
var seq__48170_48806__$1 = temp__5735__auto___48805;
if(cljs.core.chunked_seq_QMARK_(seq__48170_48806__$1)){
var c__4609__auto___48807 = cljs.core.chunk_first(seq__48170_48806__$1);
var G__48808 = cljs.core.chunk_rest(seq__48170_48806__$1);
var G__48809 = c__4609__auto___48807;
var G__48810 = cljs.core.count(c__4609__auto___48807);
var G__48811 = (0);
seq__48170_48796 = G__48808;
chunk__48171_48797 = G__48809;
count__48172_48798 = G__48810;
i__48173_48799 = G__48811;
continue;
} else {
var c_48812 = cljs.core.first(seq__48170_48806__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_48812);


var G__48813 = cljs.core.next(seq__48170_48806__$1);
var G__48814 = null;
var G__48815 = (0);
var G__48816 = (0);
seq__48170_48796 = G__48813;
chunk__48171_48797 = G__48814;
count__48172_48798 = G__48815;
i__48173_48799 = G__48816;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq48165){
var G__48166 = cljs.core.first(seq48165);
var seq48165__$1 = cljs.core.next(seq48165);
var G__48167 = cljs.core.first(seq48165__$1);
var seq48165__$2 = cljs.core.next(seq48165__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48166,G__48167,seq48165__$2);
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
var temp__5733__auto___48817 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___48817)){
var next_48818 = temp__5733__auto___48817;
dommy.core.insert_before_BANG_(elem,next_48818);
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
var G__48175 = arguments.length;
switch (G__48175) {
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
var G__48176 = p;
G__48176.removeChild(elem);

return G__48176;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48177){
var vec__48178 = p__48177;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48178,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48178,(1),null);
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
var len__4789__auto___48820 = arguments.length;
var i__4790__auto___48821 = (0);
while(true){
if((i__4790__auto___48821 < len__4789__auto___48820)){
args__4795__auto__.push((arguments[i__4790__auto___48821]));

var G__48822 = (i__4790__auto___48821 + (1));
i__4790__auto___48821 = G__48822;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq48181){
var G__48182 = cljs.core.first(seq48181);
var seq48181__$1 = cljs.core.next(seq48181);
var G__48183 = cljs.core.first(seq48181__$1);
var seq48181__$2 = cljs.core.next(seq48181__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48182,G__48183,seq48181__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__48184 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__48184.cljs$core$IFn$_invoke$arity$1 ? fexpr__48184.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__48184.call(null,elem_sel));
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
var len__4789__auto___48823 = arguments.length;
var i__4790__auto___48824 = (0);
while(true){
if((i__4790__auto___48824 < len__4789__auto___48823)){
args__4795__auto__.push((arguments[i__4790__auto___48824]));

var G__48825 = (i__4790__auto___48824 + (1));
i__4790__auto___48824 = G__48825;
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

var vec__48187_48826 = dommy.core.elem_and_selector(elem_sel);
var elem_48827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48187_48826,(0),null);
var selector_48828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48187_48826,(1),null);
var seq__48190_48829 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__48197_48830 = null;
var count__48198_48831 = (0);
var i__48199_48832 = (0);
while(true){
if((i__48199_48832 < count__48198_48831)){
var vec__48252_48833 = chunk__48197_48830.cljs$core$IIndexed$_nth$arity$2(null,i__48199_48832);
var orig_type_48834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48252_48833,(0),null);
var f_48835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48252_48833,(1),null);
var seq__48200_48836 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_48834,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_48834,cljs.core.identity])));
var chunk__48202_48837 = null;
var count__48203_48838 = (0);
var i__48204_48839 = (0);
while(true){
if((i__48204_48839 < count__48203_48838)){
var vec__48265_48840 = chunk__48202_48837.cljs$core$IIndexed$_nth$arity$2(null,i__48204_48839);
var actual_type_48841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48265_48840,(0),null);
var factory_48842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48265_48840,(1),null);
var canonical_f_48843 = (function (){var G__48269 = (factory_48842.cljs$core$IFn$_invoke$arity$1 ? factory_48842.cljs$core$IFn$_invoke$arity$1(f_48835) : factory_48842.call(null,f_48835));
var fexpr__48268 = (cljs.core.truth_(selector_48828)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_48827,selector_48828):cljs.core.identity);
return (fexpr__48268.cljs$core$IFn$_invoke$arity$1 ? fexpr__48268.cljs$core$IFn$_invoke$arity$1(G__48269) : fexpr__48268.call(null,G__48269));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48827,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48828,actual_type_48841,f_48835], null),canonical_f_48843], 0));

if(cljs.core.truth_(elem_48827.addEventListener)){
elem_48827.addEventListener(cljs.core.name(actual_type_48841),canonical_f_48843);
} else {
elem_48827.attachEvent(cljs.core.name(actual_type_48841),canonical_f_48843);
}


var G__48844 = seq__48200_48836;
var G__48845 = chunk__48202_48837;
var G__48846 = count__48203_48838;
var G__48847 = (i__48204_48839 + (1));
seq__48200_48836 = G__48844;
chunk__48202_48837 = G__48845;
count__48203_48838 = G__48846;
i__48204_48839 = G__48847;
continue;
} else {
var temp__5735__auto___48848 = cljs.core.seq(seq__48200_48836);
if(temp__5735__auto___48848){
var seq__48200_48849__$1 = temp__5735__auto___48848;
if(cljs.core.chunked_seq_QMARK_(seq__48200_48849__$1)){
var c__4609__auto___48850 = cljs.core.chunk_first(seq__48200_48849__$1);
var G__48851 = cljs.core.chunk_rest(seq__48200_48849__$1);
var G__48852 = c__4609__auto___48850;
var G__48853 = cljs.core.count(c__4609__auto___48850);
var G__48854 = (0);
seq__48200_48836 = G__48851;
chunk__48202_48837 = G__48852;
count__48203_48838 = G__48853;
i__48204_48839 = G__48854;
continue;
} else {
var vec__48270_48855 = cljs.core.first(seq__48200_48849__$1);
var actual_type_48856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48270_48855,(0),null);
var factory_48857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48270_48855,(1),null);
var canonical_f_48858 = (function (){var G__48274 = (factory_48857.cljs$core$IFn$_invoke$arity$1 ? factory_48857.cljs$core$IFn$_invoke$arity$1(f_48835) : factory_48857.call(null,f_48835));
var fexpr__48273 = (cljs.core.truth_(selector_48828)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_48827,selector_48828):cljs.core.identity);
return (fexpr__48273.cljs$core$IFn$_invoke$arity$1 ? fexpr__48273.cljs$core$IFn$_invoke$arity$1(G__48274) : fexpr__48273.call(null,G__48274));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48827,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48828,actual_type_48856,f_48835], null),canonical_f_48858], 0));

if(cljs.core.truth_(elem_48827.addEventListener)){
elem_48827.addEventListener(cljs.core.name(actual_type_48856),canonical_f_48858);
} else {
elem_48827.attachEvent(cljs.core.name(actual_type_48856),canonical_f_48858);
}


var G__48859 = cljs.core.next(seq__48200_48849__$1);
var G__48860 = null;
var G__48861 = (0);
var G__48862 = (0);
seq__48200_48836 = G__48859;
chunk__48202_48837 = G__48860;
count__48203_48838 = G__48861;
i__48204_48839 = G__48862;
continue;
}
} else {
}
}
break;
}

var G__48863 = seq__48190_48829;
var G__48864 = chunk__48197_48830;
var G__48865 = count__48198_48831;
var G__48866 = (i__48199_48832 + (1));
seq__48190_48829 = G__48863;
chunk__48197_48830 = G__48864;
count__48198_48831 = G__48865;
i__48199_48832 = G__48866;
continue;
} else {
var temp__5735__auto___48867 = cljs.core.seq(seq__48190_48829);
if(temp__5735__auto___48867){
var seq__48190_48868__$1 = temp__5735__auto___48867;
if(cljs.core.chunked_seq_QMARK_(seq__48190_48868__$1)){
var c__4609__auto___48869 = cljs.core.chunk_first(seq__48190_48868__$1);
var G__48870 = cljs.core.chunk_rest(seq__48190_48868__$1);
var G__48871 = c__4609__auto___48869;
var G__48872 = cljs.core.count(c__4609__auto___48869);
var G__48873 = (0);
seq__48190_48829 = G__48870;
chunk__48197_48830 = G__48871;
count__48198_48831 = G__48872;
i__48199_48832 = G__48873;
continue;
} else {
var vec__48275_48874 = cljs.core.first(seq__48190_48868__$1);
var orig_type_48875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48275_48874,(0),null);
var f_48876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48275_48874,(1),null);
var seq__48191_48877 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_48875,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_48875,cljs.core.identity])));
var chunk__48193_48878 = null;
var count__48194_48879 = (0);
var i__48195_48880 = (0);
while(true){
if((i__48195_48880 < count__48194_48879)){
var vec__48288_48881 = chunk__48193_48878.cljs$core$IIndexed$_nth$arity$2(null,i__48195_48880);
var actual_type_48882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48288_48881,(0),null);
var factory_48883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48288_48881,(1),null);
var canonical_f_48884 = (function (){var G__48292 = (factory_48883.cljs$core$IFn$_invoke$arity$1 ? factory_48883.cljs$core$IFn$_invoke$arity$1(f_48876) : factory_48883.call(null,f_48876));
var fexpr__48291 = (cljs.core.truth_(selector_48828)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_48827,selector_48828):cljs.core.identity);
return (fexpr__48291.cljs$core$IFn$_invoke$arity$1 ? fexpr__48291.cljs$core$IFn$_invoke$arity$1(G__48292) : fexpr__48291.call(null,G__48292));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48827,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48828,actual_type_48882,f_48876], null),canonical_f_48884], 0));

if(cljs.core.truth_(elem_48827.addEventListener)){
elem_48827.addEventListener(cljs.core.name(actual_type_48882),canonical_f_48884);
} else {
elem_48827.attachEvent(cljs.core.name(actual_type_48882),canonical_f_48884);
}


var G__48885 = seq__48191_48877;
var G__48886 = chunk__48193_48878;
var G__48887 = count__48194_48879;
var G__48888 = (i__48195_48880 + (1));
seq__48191_48877 = G__48885;
chunk__48193_48878 = G__48886;
count__48194_48879 = G__48887;
i__48195_48880 = G__48888;
continue;
} else {
var temp__5735__auto___48889__$1 = cljs.core.seq(seq__48191_48877);
if(temp__5735__auto___48889__$1){
var seq__48191_48890__$1 = temp__5735__auto___48889__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48191_48890__$1)){
var c__4609__auto___48891 = cljs.core.chunk_first(seq__48191_48890__$1);
var G__48892 = cljs.core.chunk_rest(seq__48191_48890__$1);
var G__48893 = c__4609__auto___48891;
var G__48894 = cljs.core.count(c__4609__auto___48891);
var G__48895 = (0);
seq__48191_48877 = G__48892;
chunk__48193_48878 = G__48893;
count__48194_48879 = G__48894;
i__48195_48880 = G__48895;
continue;
} else {
var vec__48293_48896 = cljs.core.first(seq__48191_48890__$1);
var actual_type_48897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48293_48896,(0),null);
var factory_48898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48293_48896,(1),null);
var canonical_f_48899 = (function (){var G__48297 = (factory_48898.cljs$core$IFn$_invoke$arity$1 ? factory_48898.cljs$core$IFn$_invoke$arity$1(f_48876) : factory_48898.call(null,f_48876));
var fexpr__48296 = (cljs.core.truth_(selector_48828)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_48827,selector_48828):cljs.core.identity);
return (fexpr__48296.cljs$core$IFn$_invoke$arity$1 ? fexpr__48296.cljs$core$IFn$_invoke$arity$1(G__48297) : fexpr__48296.call(null,G__48297));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48827,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48828,actual_type_48897,f_48876], null),canonical_f_48899], 0));

if(cljs.core.truth_(elem_48827.addEventListener)){
elem_48827.addEventListener(cljs.core.name(actual_type_48897),canonical_f_48899);
} else {
elem_48827.attachEvent(cljs.core.name(actual_type_48897),canonical_f_48899);
}


var G__48900 = cljs.core.next(seq__48191_48890__$1);
var G__48901 = null;
var G__48902 = (0);
var G__48903 = (0);
seq__48191_48877 = G__48900;
chunk__48193_48878 = G__48901;
count__48194_48879 = G__48902;
i__48195_48880 = G__48903;
continue;
}
} else {
}
}
break;
}

var G__48904 = cljs.core.next(seq__48190_48868__$1);
var G__48905 = null;
var G__48906 = (0);
var G__48907 = (0);
seq__48190_48829 = G__48904;
chunk__48197_48830 = G__48905;
count__48198_48831 = G__48906;
i__48199_48832 = G__48907;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq48185){
var G__48186 = cljs.core.first(seq48185);
var seq48185__$1 = cljs.core.next(seq48185);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48186,seq48185__$1);
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
var len__4789__auto___48908 = arguments.length;
var i__4790__auto___48909 = (0);
while(true){
if((i__4790__auto___48909 < len__4789__auto___48908)){
args__4795__auto__.push((arguments[i__4790__auto___48909]));

var G__48910 = (i__4790__auto___48909 + (1));
i__4790__auto___48909 = G__48910;
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

var vec__48300_48911 = dommy.core.elem_and_selector(elem_sel);
var elem_48912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48300_48911,(0),null);
var selector_48913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48300_48911,(1),null);
var seq__48303_48914 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__48310_48915 = null;
var count__48311_48916 = (0);
var i__48312_48917 = (0);
while(true){
if((i__48312_48917 < count__48311_48916)){
var vec__48349_48918 = chunk__48310_48915.cljs$core$IIndexed$_nth$arity$2(null,i__48312_48917);
var orig_type_48919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48349_48918,(0),null);
var f_48920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48349_48918,(1),null);
var seq__48313_48921 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_48919,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_48919,cljs.core.identity])));
var chunk__48315_48922 = null;
var count__48316_48923 = (0);
var i__48317_48924 = (0);
while(true){
if((i__48317_48924 < count__48316_48923)){
var vec__48358_48925 = chunk__48315_48922.cljs$core$IIndexed$_nth$arity$2(null,i__48317_48924);
var actual_type_48926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48358_48925,(0),null);
var __48927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48358_48925,(1),null);
var keys_48928 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48913,actual_type_48926,f_48920], null);
var canonical_f_48929 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_48912),keys_48928);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48912,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_48928], 0));

if(cljs.core.truth_(elem_48912.removeEventListener)){
elem_48912.removeEventListener(cljs.core.name(actual_type_48926),canonical_f_48929);
} else {
elem_48912.detachEvent(cljs.core.name(actual_type_48926),canonical_f_48929);
}


var G__48930 = seq__48313_48921;
var G__48931 = chunk__48315_48922;
var G__48932 = count__48316_48923;
var G__48933 = (i__48317_48924 + (1));
seq__48313_48921 = G__48930;
chunk__48315_48922 = G__48931;
count__48316_48923 = G__48932;
i__48317_48924 = G__48933;
continue;
} else {
var temp__5735__auto___48934 = cljs.core.seq(seq__48313_48921);
if(temp__5735__auto___48934){
var seq__48313_48935__$1 = temp__5735__auto___48934;
if(cljs.core.chunked_seq_QMARK_(seq__48313_48935__$1)){
var c__4609__auto___48936 = cljs.core.chunk_first(seq__48313_48935__$1);
var G__48937 = cljs.core.chunk_rest(seq__48313_48935__$1);
var G__48938 = c__4609__auto___48936;
var G__48939 = cljs.core.count(c__4609__auto___48936);
var G__48940 = (0);
seq__48313_48921 = G__48937;
chunk__48315_48922 = G__48938;
count__48316_48923 = G__48939;
i__48317_48924 = G__48940;
continue;
} else {
var vec__48361_48941 = cljs.core.first(seq__48313_48935__$1);
var actual_type_48942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361_48941,(0),null);
var __48943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361_48941,(1),null);
var keys_48944 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48913,actual_type_48942,f_48920], null);
var canonical_f_48945 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_48912),keys_48944);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48912,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_48944], 0));

if(cljs.core.truth_(elem_48912.removeEventListener)){
elem_48912.removeEventListener(cljs.core.name(actual_type_48942),canonical_f_48945);
} else {
elem_48912.detachEvent(cljs.core.name(actual_type_48942),canonical_f_48945);
}


var G__48946 = cljs.core.next(seq__48313_48935__$1);
var G__48947 = null;
var G__48948 = (0);
var G__48949 = (0);
seq__48313_48921 = G__48946;
chunk__48315_48922 = G__48947;
count__48316_48923 = G__48948;
i__48317_48924 = G__48949;
continue;
}
} else {
}
}
break;
}

var G__48950 = seq__48303_48914;
var G__48951 = chunk__48310_48915;
var G__48952 = count__48311_48916;
var G__48953 = (i__48312_48917 + (1));
seq__48303_48914 = G__48950;
chunk__48310_48915 = G__48951;
count__48311_48916 = G__48952;
i__48312_48917 = G__48953;
continue;
} else {
var temp__5735__auto___48954 = cljs.core.seq(seq__48303_48914);
if(temp__5735__auto___48954){
var seq__48303_48955__$1 = temp__5735__auto___48954;
if(cljs.core.chunked_seq_QMARK_(seq__48303_48955__$1)){
var c__4609__auto___48956 = cljs.core.chunk_first(seq__48303_48955__$1);
var G__48957 = cljs.core.chunk_rest(seq__48303_48955__$1);
var G__48958 = c__4609__auto___48956;
var G__48959 = cljs.core.count(c__4609__auto___48956);
var G__48960 = (0);
seq__48303_48914 = G__48957;
chunk__48310_48915 = G__48958;
count__48311_48916 = G__48959;
i__48312_48917 = G__48960;
continue;
} else {
var vec__48364_48961 = cljs.core.first(seq__48303_48955__$1);
var orig_type_48962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48364_48961,(0),null);
var f_48963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48364_48961,(1),null);
var seq__48304_48964 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_48962,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_48962,cljs.core.identity])));
var chunk__48306_48965 = null;
var count__48307_48966 = (0);
var i__48308_48967 = (0);
while(true){
if((i__48308_48967 < count__48307_48966)){
var vec__48373_48968 = chunk__48306_48965.cljs$core$IIndexed$_nth$arity$2(null,i__48308_48967);
var actual_type_48969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48373_48968,(0),null);
var __48970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48373_48968,(1),null);
var keys_48971 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48913,actual_type_48969,f_48963], null);
var canonical_f_48972 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_48912),keys_48971);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48912,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_48971], 0));

if(cljs.core.truth_(elem_48912.removeEventListener)){
elem_48912.removeEventListener(cljs.core.name(actual_type_48969),canonical_f_48972);
} else {
elem_48912.detachEvent(cljs.core.name(actual_type_48969),canonical_f_48972);
}


var G__48973 = seq__48304_48964;
var G__48974 = chunk__48306_48965;
var G__48975 = count__48307_48966;
var G__48976 = (i__48308_48967 + (1));
seq__48304_48964 = G__48973;
chunk__48306_48965 = G__48974;
count__48307_48966 = G__48975;
i__48308_48967 = G__48976;
continue;
} else {
var temp__5735__auto___48977__$1 = cljs.core.seq(seq__48304_48964);
if(temp__5735__auto___48977__$1){
var seq__48304_48978__$1 = temp__5735__auto___48977__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48304_48978__$1)){
var c__4609__auto___48979 = cljs.core.chunk_first(seq__48304_48978__$1);
var G__48980 = cljs.core.chunk_rest(seq__48304_48978__$1);
var G__48981 = c__4609__auto___48979;
var G__48982 = cljs.core.count(c__4609__auto___48979);
var G__48983 = (0);
seq__48304_48964 = G__48980;
chunk__48306_48965 = G__48981;
count__48307_48966 = G__48982;
i__48308_48967 = G__48983;
continue;
} else {
var vec__48376_48984 = cljs.core.first(seq__48304_48978__$1);
var actual_type_48985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48376_48984,(0),null);
var __48986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48376_48984,(1),null);
var keys_48987 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48913,actual_type_48985,f_48963], null);
var canonical_f_48988 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_48912),keys_48987);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48912,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_48987], 0));

if(cljs.core.truth_(elem_48912.removeEventListener)){
elem_48912.removeEventListener(cljs.core.name(actual_type_48985),canonical_f_48988);
} else {
elem_48912.detachEvent(cljs.core.name(actual_type_48985),canonical_f_48988);
}


var G__48989 = cljs.core.next(seq__48304_48978__$1);
var G__48990 = null;
var G__48991 = (0);
var G__48992 = (0);
seq__48304_48964 = G__48989;
chunk__48306_48965 = G__48990;
count__48307_48966 = G__48991;
i__48308_48967 = G__48992;
continue;
}
} else {
}
}
break;
}

var G__48993 = cljs.core.next(seq__48303_48955__$1);
var G__48994 = null;
var G__48995 = (0);
var G__48996 = (0);
seq__48303_48914 = G__48993;
chunk__48310_48915 = G__48994;
count__48311_48916 = G__48995;
i__48312_48917 = G__48996;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq48298){
var G__48299 = cljs.core.first(seq48298);
var seq48298__$1 = cljs.core.next(seq48298);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48299,seq48298__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48997 = arguments.length;
var i__4790__auto___48998 = (0);
while(true){
if((i__4790__auto___48998 < len__4789__auto___48997)){
args__4795__auto__.push((arguments[i__4790__auto___48998]));

var G__48999 = (i__4790__auto___48998 + (1));
i__4790__auto___48998 = G__48999;
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

var vec__48381_49000 = dommy.core.elem_and_selector(elem_sel);
var elem_49001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48381_49000,(0),null);
var selector_49002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48381_49000,(1),null);
var seq__48384_49003 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__48385_49004 = null;
var count__48386_49005 = (0);
var i__48387_49006 = (0);
while(true){
if((i__48387_49006 < count__48386_49005)){
var vec__48394_49007 = chunk__48385_49004.cljs$core$IIndexed$_nth$arity$2(null,i__48387_49006);
var type_49008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394_49007,(0),null);
var f_49009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394_49007,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_49008,((function (seq__48384_49003,chunk__48385_49004,count__48386_49005,i__48387_49006,vec__48394_49007,type_49008,f_49009,vec__48381_49000,elem_49001,selector_49002){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_49008,dommy$core$this_fn], 0));

return (f_49009.cljs$core$IFn$_invoke$arity$1 ? f_49009.cljs$core$IFn$_invoke$arity$1(e) : f_49009.call(null,e));
});})(seq__48384_49003,chunk__48385_49004,count__48386_49005,i__48387_49006,vec__48394_49007,type_49008,f_49009,vec__48381_49000,elem_49001,selector_49002))
], 0));


var G__49010 = seq__48384_49003;
var G__49011 = chunk__48385_49004;
var G__49012 = count__48386_49005;
var G__49013 = (i__48387_49006 + (1));
seq__48384_49003 = G__49010;
chunk__48385_49004 = G__49011;
count__48386_49005 = G__49012;
i__48387_49006 = G__49013;
continue;
} else {
var temp__5735__auto___49014 = cljs.core.seq(seq__48384_49003);
if(temp__5735__auto___49014){
var seq__48384_49015__$1 = temp__5735__auto___49014;
if(cljs.core.chunked_seq_QMARK_(seq__48384_49015__$1)){
var c__4609__auto___49016 = cljs.core.chunk_first(seq__48384_49015__$1);
var G__49017 = cljs.core.chunk_rest(seq__48384_49015__$1);
var G__49018 = c__4609__auto___49016;
var G__49019 = cljs.core.count(c__4609__auto___49016);
var G__49020 = (0);
seq__48384_49003 = G__49017;
chunk__48385_49004 = G__49018;
count__48386_49005 = G__49019;
i__48387_49006 = G__49020;
continue;
} else {
var vec__48397_49021 = cljs.core.first(seq__48384_49015__$1);
var type_49022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48397_49021,(0),null);
var f_49023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48397_49021,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_49022,((function (seq__48384_49003,chunk__48385_49004,count__48386_49005,i__48387_49006,vec__48397_49021,type_49022,f_49023,seq__48384_49015__$1,temp__5735__auto___49014,vec__48381_49000,elem_49001,selector_49002){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_49022,dommy$core$this_fn], 0));

return (f_49023.cljs$core$IFn$_invoke$arity$1 ? f_49023.cljs$core$IFn$_invoke$arity$1(e) : f_49023.call(null,e));
});})(seq__48384_49003,chunk__48385_49004,count__48386_49005,i__48387_49006,vec__48397_49021,type_49022,f_49023,seq__48384_49015__$1,temp__5735__auto___49014,vec__48381_49000,elem_49001,selector_49002))
], 0));


var G__49024 = cljs.core.next(seq__48384_49015__$1);
var G__49025 = null;
var G__49026 = (0);
var G__49027 = (0);
seq__48384_49003 = G__49024;
chunk__48385_49004 = G__49025;
count__48386_49005 = G__49026;
i__48387_49006 = G__49027;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq48379){
var G__48380 = cljs.core.first(seq48379);
var seq48379__$1 = cljs.core.next(seq48379);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48380,seq48379__$1);
}));


//# sourceMappingURL=dommy.core.js.map
