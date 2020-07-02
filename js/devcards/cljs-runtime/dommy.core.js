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
var G__34695 = arguments.length;
switch (G__34695) {
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
var G__34743 = arguments.length;
switch (G__34743) {
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
var G__34757 = arguments.length;
switch (G__34757) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34753_SHARP_){
return (!((p1__34753_SHARP_ === base)));
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
var len__4789__auto___35704 = arguments.length;
var i__4790__auto___35705 = (0);
while(true){
if((i__4790__auto___35705 < len__4789__auto___35704)){
args__4795__auto__.push((arguments[i__4790__auto___35705]));

var G__35707 = (i__4790__auto___35705 + (1));
i__4790__auto___35705 = G__35707;
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
var seq__34844_35728 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34845_35729 = null;
var count__34846_35730 = (0);
var i__34847_35731 = (0);
while(true){
if((i__34847_35731 < count__34846_35730)){
var vec__34861_35743 = chunk__34845_35729.cljs$core$IIndexed$_nth$arity$2(null,i__34847_35731);
var k_35744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34861_35743,(0),null);
var v_35745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34861_35743,(1),null);
style.setProperty(dommy.utils.as_str(k_35744),v_35745);


var G__35748 = seq__34844_35728;
var G__35749 = chunk__34845_35729;
var G__35750 = count__34846_35730;
var G__35751 = (i__34847_35731 + (1));
seq__34844_35728 = G__35748;
chunk__34845_35729 = G__35749;
count__34846_35730 = G__35750;
i__34847_35731 = G__35751;
continue;
} else {
var temp__5735__auto___35753 = cljs.core.seq(seq__34844_35728);
if(temp__5735__auto___35753){
var seq__34844_35755__$1 = temp__5735__auto___35753;
if(cljs.core.chunked_seq_QMARK_(seq__34844_35755__$1)){
var c__4609__auto___35756 = cljs.core.chunk_first(seq__34844_35755__$1);
var G__35758 = cljs.core.chunk_rest(seq__34844_35755__$1);
var G__35759 = c__4609__auto___35756;
var G__35760 = cljs.core.count(c__4609__auto___35756);
var G__35761 = (0);
seq__34844_35728 = G__35758;
chunk__34845_35729 = G__35759;
count__34846_35730 = G__35760;
i__34847_35731 = G__35761;
continue;
} else {
var vec__34865_35763 = cljs.core.first(seq__34844_35755__$1);
var k_35764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34865_35763,(0),null);
var v_35765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34865_35763,(1),null);
style.setProperty(dommy.utils.as_str(k_35764),v_35765);


var G__35766 = cljs.core.next(seq__34844_35755__$1);
var G__35767 = null;
var G__35768 = (0);
var G__35769 = (0);
seq__34844_35728 = G__35766;
chunk__34845_35729 = G__35767;
count__34846_35730 = G__35768;
i__34847_35731 = G__35769;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34826){
var G__34827 = cljs.core.first(seq34826);
var seq34826__$1 = cljs.core.next(seq34826);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34827,seq34826__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35776 = arguments.length;
var i__4790__auto___35777 = (0);
while(true){
if((i__4790__auto___35777 < len__4789__auto___35776)){
args__4795__auto__.push((arguments[i__4790__auto___35777]));

var G__35779 = (i__4790__auto___35777 + (1));
i__4790__auto___35777 = G__35779;
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
var seq__34887_35780 = cljs.core.seq(keywords);
var chunk__34888_35781 = null;
var count__34889_35782 = (0);
var i__34890_35783 = (0);
while(true){
if((i__34890_35783 < count__34889_35782)){
var kw_35784 = chunk__34888_35781.cljs$core$IIndexed$_nth$arity$2(null,i__34890_35783);
style.removeProperty(dommy.utils.as_str(kw_35784));


var G__35786 = seq__34887_35780;
var G__35789 = chunk__34888_35781;
var G__35790 = count__34889_35782;
var G__35791 = (i__34890_35783 + (1));
seq__34887_35780 = G__35786;
chunk__34888_35781 = G__35789;
count__34889_35782 = G__35790;
i__34890_35783 = G__35791;
continue;
} else {
var temp__5735__auto___35840 = cljs.core.seq(seq__34887_35780);
if(temp__5735__auto___35840){
var seq__34887_35843__$1 = temp__5735__auto___35840;
if(cljs.core.chunked_seq_QMARK_(seq__34887_35843__$1)){
var c__4609__auto___35845 = cljs.core.chunk_first(seq__34887_35843__$1);
var G__35846 = cljs.core.chunk_rest(seq__34887_35843__$1);
var G__35847 = c__4609__auto___35845;
var G__35848 = cljs.core.count(c__4609__auto___35845);
var G__35849 = (0);
seq__34887_35780 = G__35846;
chunk__34888_35781 = G__35847;
count__34889_35782 = G__35848;
i__34890_35783 = G__35849;
continue;
} else {
var kw_35856 = cljs.core.first(seq__34887_35843__$1);
style.removeProperty(dommy.utils.as_str(kw_35856));


var G__35858 = cljs.core.next(seq__34887_35843__$1);
var G__35859 = null;
var G__35860 = (0);
var G__35861 = (0);
seq__34887_35780 = G__35858;
chunk__34888_35781 = G__35859;
count__34889_35782 = G__35860;
i__34890_35783 = G__35861;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq34875){
var G__34877 = cljs.core.first(seq34875);
var seq34875__$1 = cljs.core.next(seq34875);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34877,seq34875__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35869 = arguments.length;
var i__4790__auto___35870 = (0);
while(true){
if((i__4790__auto___35870 < len__4789__auto___35869)){
args__4795__auto__.push((arguments[i__4790__auto___35870]));

var G__35871 = (i__4790__auto___35870 + (1));
i__4790__auto___35870 = G__35871;
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

var seq__34913_35874 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__34914_35875 = null;
var count__34915_35876 = (0);
var i__34916_35877 = (0);
while(true){
if((i__34916_35877 < count__34915_35876)){
var vec__34930_35879 = chunk__34914_35875.cljs$core$IIndexed$_nth$arity$2(null,i__34916_35877);
var k_35880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34930_35879,(0),null);
var v_35881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34930_35879,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35880,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35881),"px"].join('')], 0));


var G__35886 = seq__34913_35874;
var G__35887 = chunk__34914_35875;
var G__35888 = count__34915_35876;
var G__35889 = (i__34916_35877 + (1));
seq__34913_35874 = G__35886;
chunk__34914_35875 = G__35887;
count__34915_35876 = G__35888;
i__34916_35877 = G__35889;
continue;
} else {
var temp__5735__auto___35890 = cljs.core.seq(seq__34913_35874);
if(temp__5735__auto___35890){
var seq__34913_35891__$1 = temp__5735__auto___35890;
if(cljs.core.chunked_seq_QMARK_(seq__34913_35891__$1)){
var c__4609__auto___35892 = cljs.core.chunk_first(seq__34913_35891__$1);
var G__35893 = cljs.core.chunk_rest(seq__34913_35891__$1);
var G__35894 = c__4609__auto___35892;
var G__35895 = cljs.core.count(c__4609__auto___35892);
var G__35896 = (0);
seq__34913_35874 = G__35893;
chunk__34914_35875 = G__35894;
count__34915_35876 = G__35895;
i__34916_35877 = G__35896;
continue;
} else {
var vec__34937_35897 = cljs.core.first(seq__34913_35891__$1);
var k_35898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937_35897,(0),null);
var v_35899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937_35897,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_35898,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_35899),"px"].join('')], 0));


var G__35902 = cljs.core.next(seq__34913_35891__$1);
var G__35903 = null;
var G__35904 = (0);
var G__35905 = (0);
seq__34913_35874 = G__35902;
chunk__34914_35875 = G__35903;
count__34915_35876 = G__35904;
i__34916_35877 = G__35905;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq34909){
var G__34910 = cljs.core.first(seq34909);
var seq34909__$1 = cljs.core.next(seq34909);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34910,seq34909__$1);
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
var G__34958 = arguments.length;
switch (G__34958) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35910 = arguments.length;
var i__4790__auto___35911 = (0);
while(true){
if((i__4790__auto___35911 < len__4789__auto___35910)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35911]));

var G__35912 = (i__4790__auto___35911 + (1));
i__4790__auto___35911 = G__35912;
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
var G__34963 = elem;
(G__34963[k__$1] = v);

return G__34963;
} else {
var G__34964 = elem;
G__34964.setAttribute(k__$1,v);

return G__34964;
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

var seq__34971_35933 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__34972_35934 = null;
var count__34973_35935 = (0);
var i__34974_35936 = (0);
while(true){
if((i__34974_35936 < count__34973_35935)){
var vec__34987_35938 = chunk__34972_35934.cljs$core$IIndexed$_nth$arity$2(null,i__34974_35936);
var k_35940__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35938,(0),null);
var v_35941__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987_35938,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35940__$1,v_35941__$1);


var G__35945 = seq__34971_35933;
var G__35946 = chunk__34972_35934;
var G__35947 = count__34973_35935;
var G__35948 = (i__34974_35936 + (1));
seq__34971_35933 = G__35945;
chunk__34972_35934 = G__35946;
count__34973_35935 = G__35947;
i__34974_35936 = G__35948;
continue;
} else {
var temp__5735__auto___35949 = cljs.core.seq(seq__34971_35933);
if(temp__5735__auto___35949){
var seq__34971_35950__$1 = temp__5735__auto___35949;
if(cljs.core.chunked_seq_QMARK_(seq__34971_35950__$1)){
var c__4609__auto___35952 = cljs.core.chunk_first(seq__34971_35950__$1);
var G__35953 = cljs.core.chunk_rest(seq__34971_35950__$1);
var G__35954 = c__4609__auto___35952;
var G__35955 = cljs.core.count(c__4609__auto___35952);
var G__35956 = (0);
seq__34971_35933 = G__35953;
chunk__34972_35934 = G__35954;
count__34973_35935 = G__35955;
i__34974_35936 = G__35956;
continue;
} else {
var vec__34991_35957 = cljs.core.first(seq__34971_35950__$1);
var k_35958__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34991_35957,(0),null);
var v_35959__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34991_35957,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_35958__$1,v_35959__$1);


var G__35972 = cljs.core.next(seq__34971_35950__$1);
var G__35973 = null;
var G__35974 = (0);
var G__35975 = (0);
seq__34971_35933 = G__35972;
chunk__34972_35934 = G__35973;
count__34973_35935 = G__35974;
i__34974_35936 = G__35975;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq34951){
var G__34952 = cljs.core.first(seq34951);
var seq34951__$1 = cljs.core.next(seq34951);
var G__34953 = cljs.core.first(seq34951__$1);
var seq34951__$2 = cljs.core.next(seq34951__$1);
var G__34955 = cljs.core.first(seq34951__$2);
var seq34951__$3 = cljs.core.next(seq34951__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34952,G__34953,G__34955,seq34951__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__35012 = arguments.length;
switch (G__35012) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___35979 = arguments.length;
var i__4790__auto___35980 = (0);
while(true){
if((i__4790__auto___35980 < len__4789__auto___35979)){
args_arr__4810__auto__.push((arguments[i__4790__auto___35980]));

var G__35983 = (i__4790__auto___35980 + (1));
i__4790__auto___35980 = G__35983;
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
var k_35988__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__35022 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__35022.cljs$core$IFn$_invoke$arity$1 ? fexpr__35022.cljs$core$IFn$_invoke$arity$1(k_35988__$1) : fexpr__35022.call(null,k_35988__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_35988__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__35028_36017 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__35029_36018 = null;
var count__35030_36019 = (0);
var i__35031_36020 = (0);
while(true){
if((i__35031_36020 < count__35030_36019)){
var k_36023__$1 = chunk__35029_36018.cljs$core$IIndexed$_nth$arity$2(null,i__35031_36020);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_36023__$1);


var G__36025 = seq__35028_36017;
var G__36026 = chunk__35029_36018;
var G__36027 = count__35030_36019;
var G__36028 = (i__35031_36020 + (1));
seq__35028_36017 = G__36025;
chunk__35029_36018 = G__36026;
count__35030_36019 = G__36027;
i__35031_36020 = G__36028;
continue;
} else {
var temp__5735__auto___36041 = cljs.core.seq(seq__35028_36017);
if(temp__5735__auto___36041){
var seq__35028_36042__$1 = temp__5735__auto___36041;
if(cljs.core.chunked_seq_QMARK_(seq__35028_36042__$1)){
var c__4609__auto___36044 = cljs.core.chunk_first(seq__35028_36042__$1);
var G__36045 = cljs.core.chunk_rest(seq__35028_36042__$1);
var G__36046 = c__4609__auto___36044;
var G__36047 = cljs.core.count(c__4609__auto___36044);
var G__36048 = (0);
seq__35028_36017 = G__36045;
chunk__35029_36018 = G__36046;
count__35030_36019 = G__36047;
i__35031_36020 = G__36048;
continue;
} else {
var k_36050__$1 = cljs.core.first(seq__35028_36042__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_36050__$1);


var G__36052 = cljs.core.next(seq__35028_36042__$1);
var G__36053 = null;
var G__36054 = (0);
var G__36055 = (0);
seq__35028_36017 = G__36052;
chunk__35029_36018 = G__36053;
count__35030_36019 = G__36054;
i__35031_36020 = G__36055;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq35006){
var G__35007 = cljs.core.first(seq35006);
var seq35006__$1 = cljs.core.next(seq35006);
var G__35008 = cljs.core.first(seq35006__$1);
var seq35006__$2 = cljs.core.next(seq35006__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35007,G__35008,seq35006__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__35039 = arguments.length;
switch (G__35039) {
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
var G__35046 = arguments.length;
switch (G__35046) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___36075 = arguments.length;
var i__4790__auto___36076 = (0);
while(true){
if((i__4790__auto___36076 < len__4789__auto___36075)){
args_arr__4810__auto__.push((arguments[i__4790__auto___36076]));

var G__36077 = (i__4790__auto___36076 + (1));
i__4790__auto___36076 = G__36077;
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
var temp__5733__auto___36079 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___36079)){
var class_list_36080 = temp__5733__auto___36079;
var seq__35051_36081 = cljs.core.seq(classes__$1);
var chunk__35052_36082 = null;
var count__35053_36083 = (0);
var i__35054_36086 = (0);
while(true){
if((i__35054_36086 < count__35053_36083)){
var c_36091 = chunk__35052_36082.cljs$core$IIndexed$_nth$arity$2(null,i__35054_36086);
class_list_36080.add(c_36091);


var G__36093 = seq__35051_36081;
var G__36094 = chunk__35052_36082;
var G__36095 = count__35053_36083;
var G__36096 = (i__35054_36086 + (1));
seq__35051_36081 = G__36093;
chunk__35052_36082 = G__36094;
count__35053_36083 = G__36095;
i__35054_36086 = G__36096;
continue;
} else {
var temp__5735__auto___36098 = cljs.core.seq(seq__35051_36081);
if(temp__5735__auto___36098){
var seq__35051_36100__$1 = temp__5735__auto___36098;
if(cljs.core.chunked_seq_QMARK_(seq__35051_36100__$1)){
var c__4609__auto___36101 = cljs.core.chunk_first(seq__35051_36100__$1);
var G__36102 = cljs.core.chunk_rest(seq__35051_36100__$1);
var G__36103 = c__4609__auto___36101;
var G__36104 = cljs.core.count(c__4609__auto___36101);
var G__36105 = (0);
seq__35051_36081 = G__36102;
chunk__35052_36082 = G__36103;
count__35053_36083 = G__36104;
i__35054_36086 = G__36105;
continue;
} else {
var c_36106 = cljs.core.first(seq__35051_36100__$1);
class_list_36080.add(c_36106);


var G__36108 = cljs.core.next(seq__35051_36100__$1);
var G__36109 = null;
var G__36110 = (0);
var G__36111 = (0);
seq__35051_36081 = G__36108;
chunk__35052_36082 = G__36109;
count__35053_36083 = G__36110;
i__35054_36086 = G__36111;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35063_36112 = cljs.core.seq(classes__$1);
var chunk__35064_36113 = null;
var count__35065_36114 = (0);
var i__35066_36115 = (0);
while(true){
if((i__35066_36115 < count__35065_36114)){
var c_36116 = chunk__35064_36113.cljs$core$IIndexed$_nth$arity$2(null,i__35066_36115);
var class_name_36117 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_36117,c_36116))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_36117 === ""))?c_36116:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_36117)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_36116)].join('')));
}


var G__36125 = seq__35063_36112;
var G__36126 = chunk__35064_36113;
var G__36127 = count__35065_36114;
var G__36128 = (i__35066_36115 + (1));
seq__35063_36112 = G__36125;
chunk__35064_36113 = G__36126;
count__35065_36114 = G__36127;
i__35066_36115 = G__36128;
continue;
} else {
var temp__5735__auto___36129 = cljs.core.seq(seq__35063_36112);
if(temp__5735__auto___36129){
var seq__35063_36139__$1 = temp__5735__auto___36129;
if(cljs.core.chunked_seq_QMARK_(seq__35063_36139__$1)){
var c__4609__auto___36140 = cljs.core.chunk_first(seq__35063_36139__$1);
var G__36141 = cljs.core.chunk_rest(seq__35063_36139__$1);
var G__36142 = c__4609__auto___36140;
var G__36143 = cljs.core.count(c__4609__auto___36140);
var G__36144 = (0);
seq__35063_36112 = G__36141;
chunk__35064_36113 = G__36142;
count__35065_36114 = G__36143;
i__35066_36115 = G__36144;
continue;
} else {
var c_36146 = cljs.core.first(seq__35063_36139__$1);
var class_name_36147 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_36147,c_36146))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_36147 === ""))?c_36146:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_36147)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_36146)].join('')));
}


var G__36149 = cljs.core.next(seq__35063_36139__$1);
var G__36150 = null;
var G__36151 = (0);
var G__36152 = (0);
seq__35063_36112 = G__36149;
chunk__35064_36113 = G__36150;
count__35065_36114 = G__36151;
i__35066_36115 = G__36152;
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
var seq__35072_36154 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__35073_36155 = null;
var count__35074_36156 = (0);
var i__35075_36157 = (0);
while(true){
if((i__35075_36157 < count__35074_36156)){
var c_36158 = chunk__35073_36155.cljs$core$IIndexed$_nth$arity$2(null,i__35075_36157);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_36158);


var G__36160 = seq__35072_36154;
var G__36161 = chunk__35073_36155;
var G__36162 = count__35074_36156;
var G__36163 = (i__35075_36157 + (1));
seq__35072_36154 = G__36160;
chunk__35073_36155 = G__36161;
count__35074_36156 = G__36162;
i__35075_36157 = G__36163;
continue;
} else {
var temp__5735__auto___36164 = cljs.core.seq(seq__35072_36154);
if(temp__5735__auto___36164){
var seq__35072_36165__$1 = temp__5735__auto___36164;
if(cljs.core.chunked_seq_QMARK_(seq__35072_36165__$1)){
var c__4609__auto___36166 = cljs.core.chunk_first(seq__35072_36165__$1);
var G__36167 = cljs.core.chunk_rest(seq__35072_36165__$1);
var G__36168 = c__4609__auto___36166;
var G__36169 = cljs.core.count(c__4609__auto___36166);
var G__36170 = (0);
seq__35072_36154 = G__36167;
chunk__35073_36155 = G__36168;
count__35074_36156 = G__36169;
i__35075_36157 = G__36170;
continue;
} else {
var c_36171 = cljs.core.first(seq__35072_36165__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_36171);


var G__36174 = cljs.core.next(seq__35072_36165__$1);
var G__36175 = null;
var G__36176 = (0);
var G__36177 = (0);
seq__35072_36154 = G__36174;
chunk__35073_36155 = G__36175;
count__35074_36156 = G__36176;
i__35075_36157 = G__36177;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq35043){
var G__35044 = cljs.core.first(seq35043);
var seq35043__$1 = cljs.core.next(seq35043);
var G__35045 = cljs.core.first(seq35043__$1);
var seq35043__$2 = cljs.core.next(seq35043__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35044,G__35045,seq35043__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__35089 = arguments.length;
switch (G__35089) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___36187 = arguments.length;
var i__4790__auto___36188 = (0);
while(true){
if((i__4790__auto___36188 < len__4789__auto___36187)){
args_arr__4810__auto__.push((arguments[i__4790__auto___36188]));

var G__36189 = (i__4790__auto___36188 + (1));
i__4790__auto___36188 = G__36189;
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
var temp__5733__auto___36205 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___36205)){
var class_list_36227 = temp__5733__auto___36205;
class_list_36227.remove(c__$1);
} else {
var class_name_36228 = dommy.core.class$(elem);
var new_class_name_36229 = dommy.utils.remove_class_str(class_name_36228,c__$1);
if((class_name_36228 === new_class_name_36229)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_36229);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__35103 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__35104 = null;
var count__35105 = (0);
var i__35106 = (0);
while(true){
if((i__35106 < count__35105)){
var c = chunk__35104.cljs$core$IIndexed$_nth$arity$2(null,i__35106);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__36253 = seq__35103;
var G__36254 = chunk__35104;
var G__36255 = count__35105;
var G__36256 = (i__35106 + (1));
seq__35103 = G__36253;
chunk__35104 = G__36254;
count__35105 = G__36255;
i__35106 = G__36256;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35103);
if(temp__5735__auto__){
var seq__35103__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35103__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35103__$1);
var G__36257 = cljs.core.chunk_rest(seq__35103__$1);
var G__36258 = c__4609__auto__;
var G__36259 = cljs.core.count(c__4609__auto__);
var G__36260 = (0);
seq__35103 = G__36257;
chunk__35104 = G__36258;
count__35105 = G__36259;
i__35106 = G__36260;
continue;
} else {
var c = cljs.core.first(seq__35103__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__36262 = cljs.core.next(seq__35103__$1);
var G__36263 = null;
var G__36264 = (0);
var G__36265 = (0);
seq__35103 = G__36262;
chunk__35104 = G__36263;
count__35105 = G__36264;
i__35106 = G__36265;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq35085){
var G__35086 = cljs.core.first(seq35085);
var seq35085__$1 = cljs.core.next(seq35085);
var G__35087 = cljs.core.first(seq35085__$1);
var seq35085__$2 = cljs.core.next(seq35085__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35086,G__35087,seq35085__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__35115 = arguments.length;
switch (G__35115) {
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
var temp__5733__auto___36299 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___36299)){
var class_list_36300 = temp__5733__auto___36299;
class_list_36300.toggle(c__$1);
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
var G__35124 = arguments.length;
switch (G__35124) {
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
var G__35136 = arguments.length;
switch (G__35136) {
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
var G__35156 = arguments.length;
switch (G__35156) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___36309 = arguments.length;
var i__4790__auto___36310 = (0);
while(true){
if((i__4790__auto___36310 < len__4789__auto___36309)){
args_arr__4810__auto__.push((arguments[i__4790__auto___36310]));

var G__36311 = (i__4790__auto___36310 + (1));
i__4790__auto___36310 = G__36311;
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
var G__35159 = parent;
G__35159.appendChild(child);

return G__35159;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35160_36318 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35161_36319 = null;
var count__35162_36320 = (0);
var i__35163_36321 = (0);
while(true){
if((i__35163_36321 < count__35162_36320)){
var c_36323 = chunk__35161_36319.cljs$core$IIndexed$_nth$arity$2(null,i__35163_36321);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_36323);


var G__36324 = seq__35160_36318;
var G__36325 = chunk__35161_36319;
var G__36326 = count__35162_36320;
var G__36327 = (i__35163_36321 + (1));
seq__35160_36318 = G__36324;
chunk__35161_36319 = G__36325;
count__35162_36320 = G__36326;
i__35163_36321 = G__36327;
continue;
} else {
var temp__5735__auto___36346 = cljs.core.seq(seq__35160_36318);
if(temp__5735__auto___36346){
var seq__35160_36347__$1 = temp__5735__auto___36346;
if(cljs.core.chunked_seq_QMARK_(seq__35160_36347__$1)){
var c__4609__auto___36348 = cljs.core.chunk_first(seq__35160_36347__$1);
var G__36349 = cljs.core.chunk_rest(seq__35160_36347__$1);
var G__36350 = c__4609__auto___36348;
var G__36351 = cljs.core.count(c__4609__auto___36348);
var G__36352 = (0);
seq__35160_36318 = G__36349;
chunk__35161_36319 = G__36350;
count__35162_36320 = G__36351;
i__35163_36321 = G__36352;
continue;
} else {
var c_36353 = cljs.core.first(seq__35160_36347__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_36353);


var G__36354 = cljs.core.next(seq__35160_36347__$1);
var G__36355 = null;
var G__36356 = (0);
var G__36357 = (0);
seq__35160_36318 = G__36354;
chunk__35161_36319 = G__36355;
count__35162_36320 = G__36356;
i__35163_36321 = G__36357;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq35152){
var G__35153 = cljs.core.first(seq35152);
var seq35152__$1 = cljs.core.next(seq35152);
var G__35154 = cljs.core.first(seq35152__$1);
var seq35152__$2 = cljs.core.next(seq35152__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35153,G__35154,seq35152__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__35182 = arguments.length;
switch (G__35182) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___36362 = arguments.length;
var i__4790__auto___36363 = (0);
while(true){
if((i__4790__auto___36363 < len__4789__auto___36362)){
args_arr__4810__auto__.push((arguments[i__4790__auto___36363]));

var G__36364 = (i__4790__auto___36363 + (1));
i__4790__auto___36363 = G__36364;
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
var G__35186 = parent;
G__35186.insertBefore(child,parent.firstChild);

return G__35186;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35189_36366 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__35190_36367 = null;
var count__35191_36368 = (0);
var i__35192_36369 = (0);
while(true){
if((i__35192_36369 < count__35191_36368)){
var c_36376 = chunk__35190_36367.cljs$core$IIndexed$_nth$arity$2(null,i__35192_36369);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_36376);


var G__36378 = seq__35189_36366;
var G__36379 = chunk__35190_36367;
var G__36380 = count__35191_36368;
var G__36381 = (i__35192_36369 + (1));
seq__35189_36366 = G__36378;
chunk__35190_36367 = G__36379;
count__35191_36368 = G__36380;
i__35192_36369 = G__36381;
continue;
} else {
var temp__5735__auto___36382 = cljs.core.seq(seq__35189_36366);
if(temp__5735__auto___36382){
var seq__35189_36383__$1 = temp__5735__auto___36382;
if(cljs.core.chunked_seq_QMARK_(seq__35189_36383__$1)){
var c__4609__auto___36384 = cljs.core.chunk_first(seq__35189_36383__$1);
var G__36385 = cljs.core.chunk_rest(seq__35189_36383__$1);
var G__36386 = c__4609__auto___36384;
var G__36387 = cljs.core.count(c__4609__auto___36384);
var G__36388 = (0);
seq__35189_36366 = G__36385;
chunk__35190_36367 = G__36386;
count__35191_36368 = G__36387;
i__35192_36369 = G__36388;
continue;
} else {
var c_36428 = cljs.core.first(seq__35189_36383__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_36428);


var G__36429 = cljs.core.next(seq__35189_36383__$1);
var G__36430 = null;
var G__36431 = (0);
var G__36432 = (0);
seq__35189_36366 = G__36429;
chunk__35190_36367 = G__36430;
count__35191_36368 = G__36431;
i__35192_36369 = G__36432;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq35179){
var G__35180 = cljs.core.first(seq35179);
var seq35179__$1 = cljs.core.next(seq35179);
var G__35181 = cljs.core.first(seq35179__$1);
var seq35179__$2 = cljs.core.next(seq35179__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35180,G__35181,seq35179__$2);
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
var temp__5733__auto___36440 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___36440)){
var next_36441 = temp__5733__auto___36440;
dommy.core.insert_before_BANG_(elem,next_36441);
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
var G__35211 = arguments.length;
switch (G__35211) {
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
var G__35222 = p;
G__35222.removeChild(elem);

return G__35222;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35225){
var vec__35226 = p__35225;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226,(1),null);
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
var len__4789__auto___36464 = arguments.length;
var i__4790__auto___36465 = (0);
while(true){
if((i__4790__auto___36465 < len__4789__auto___36464)){
args__4795__auto__.push((arguments[i__4790__auto___36465]));

var G__36466 = (i__4790__auto___36465 + (1));
i__4790__auto___36465 = G__36466;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq35236){
var G__35237 = cljs.core.first(seq35236);
var seq35236__$1 = cljs.core.next(seq35236);
var G__35238 = cljs.core.first(seq35236__$1);
var seq35236__$2 = cljs.core.next(seq35236__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35237,G__35238,seq35236__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__35247 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__35247.cljs$core$IFn$_invoke$arity$1 ? fexpr__35247.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__35247.call(null,elem_sel));
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
var len__4789__auto___36472 = arguments.length;
var i__4790__auto___36473 = (0);
while(true){
if((i__4790__auto___36473 < len__4789__auto___36472)){
args__4795__auto__.push((arguments[i__4790__auto___36473]));

var G__36474 = (i__4790__auto___36473 + (1));
i__4790__auto___36473 = G__36474;
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

var vec__35261_36486 = dommy.core.elem_and_selector(elem_sel);
var elem_36487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_36486,(0),null);
var selector_36489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35261_36486,(1),null);
var seq__35265_36495 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35272_36496 = null;
var count__35273_36497 = (0);
var i__35274_36498 = (0);
while(true){
if((i__35274_36498 < count__35273_36497)){
var vec__35367_36500 = chunk__35272_36496.cljs$core$IIndexed$_nth$arity$2(null,i__35274_36498);
var orig_type_36501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35367_36500,(0),null);
var f_36502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35367_36500,(1),null);
var seq__35275_36504 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_36501,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_36501,cljs.core.identity])));
var chunk__35277_36505 = null;
var count__35278_36506 = (0);
var i__35279_36507 = (0);
while(true){
if((i__35279_36507 < count__35278_36506)){
var vec__35394_36508 = chunk__35277_36505.cljs$core$IIndexed$_nth$arity$2(null,i__35279_36507);
var actual_type_36509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35394_36508,(0),null);
var factory_36510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35394_36508,(1),null);
var canonical_f_36511 = (function (){var G__35399 = (factory_36510.cljs$core$IFn$_invoke$arity$1 ? factory_36510.cljs$core$IFn$_invoke$arity$1(f_36502) : factory_36510.call(null,f_36502));
var fexpr__35398 = (cljs.core.truth_(selector_36489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_36487,selector_36489):cljs.core.identity);
return (fexpr__35398.cljs$core$IFn$_invoke$arity$1 ? fexpr__35398.cljs$core$IFn$_invoke$arity$1(G__35399) : fexpr__35398.call(null,G__35399));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_36487,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36489,actual_type_36509,f_36502], null),canonical_f_36511], 0));

if(cljs.core.truth_(elem_36487.addEventListener)){
elem_36487.addEventListener(cljs.core.name(actual_type_36509),canonical_f_36511);
} else {
elem_36487.attachEvent(cljs.core.name(actual_type_36509),canonical_f_36511);
}


var G__36513 = seq__35275_36504;
var G__36515 = chunk__35277_36505;
var G__36516 = count__35278_36506;
var G__36517 = (i__35279_36507 + (1));
seq__35275_36504 = G__36513;
chunk__35277_36505 = G__36515;
count__35278_36506 = G__36516;
i__35279_36507 = G__36517;
continue;
} else {
var temp__5735__auto___36519 = cljs.core.seq(seq__35275_36504);
if(temp__5735__auto___36519){
var seq__35275_36520__$1 = temp__5735__auto___36519;
if(cljs.core.chunked_seq_QMARK_(seq__35275_36520__$1)){
var c__4609__auto___36521 = cljs.core.chunk_first(seq__35275_36520__$1);
var G__36522 = cljs.core.chunk_rest(seq__35275_36520__$1);
var G__36523 = c__4609__auto___36521;
var G__36524 = cljs.core.count(c__4609__auto___36521);
var G__36525 = (0);
seq__35275_36504 = G__36522;
chunk__35277_36505 = G__36523;
count__35278_36506 = G__36524;
i__35279_36507 = G__36525;
continue;
} else {
var vec__35403_36526 = cljs.core.first(seq__35275_36520__$1);
var actual_type_36527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35403_36526,(0),null);
var factory_36528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35403_36526,(1),null);
var canonical_f_36530 = (function (){var G__35407 = (factory_36528.cljs$core$IFn$_invoke$arity$1 ? factory_36528.cljs$core$IFn$_invoke$arity$1(f_36502) : factory_36528.call(null,f_36502));
var fexpr__35406 = (cljs.core.truth_(selector_36489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_36487,selector_36489):cljs.core.identity);
return (fexpr__35406.cljs$core$IFn$_invoke$arity$1 ? fexpr__35406.cljs$core$IFn$_invoke$arity$1(G__35407) : fexpr__35406.call(null,G__35407));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_36487,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36489,actual_type_36527,f_36502], null),canonical_f_36530], 0));

if(cljs.core.truth_(elem_36487.addEventListener)){
elem_36487.addEventListener(cljs.core.name(actual_type_36527),canonical_f_36530);
} else {
elem_36487.attachEvent(cljs.core.name(actual_type_36527),canonical_f_36530);
}


var G__36533 = cljs.core.next(seq__35275_36520__$1);
var G__36534 = null;
var G__36535 = (0);
var G__36536 = (0);
seq__35275_36504 = G__36533;
chunk__35277_36505 = G__36534;
count__35278_36506 = G__36535;
i__35279_36507 = G__36536;
continue;
}
} else {
}
}
break;
}

var G__36538 = seq__35265_36495;
var G__36539 = chunk__35272_36496;
var G__36540 = count__35273_36497;
var G__36541 = (i__35274_36498 + (1));
seq__35265_36495 = G__36538;
chunk__35272_36496 = G__36539;
count__35273_36497 = G__36540;
i__35274_36498 = G__36541;
continue;
} else {
var temp__5735__auto___36542 = cljs.core.seq(seq__35265_36495);
if(temp__5735__auto___36542){
var seq__35265_36543__$1 = temp__5735__auto___36542;
if(cljs.core.chunked_seq_QMARK_(seq__35265_36543__$1)){
var c__4609__auto___36556 = cljs.core.chunk_first(seq__35265_36543__$1);
var G__36557 = cljs.core.chunk_rest(seq__35265_36543__$1);
var G__36558 = c__4609__auto___36556;
var G__36559 = cljs.core.count(c__4609__auto___36556);
var G__36560 = (0);
seq__35265_36495 = G__36557;
chunk__35272_36496 = G__36558;
count__35273_36497 = G__36559;
i__35274_36498 = G__36560;
continue;
} else {
var vec__35412_36561 = cljs.core.first(seq__35265_36543__$1);
var orig_type_36562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412_36561,(0),null);
var f_36563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412_36561,(1),null);
var seq__35266_36564 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_36562,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_36562,cljs.core.identity])));
var chunk__35268_36565 = null;
var count__35269_36566 = (0);
var i__35270_36567 = (0);
while(true){
if((i__35270_36567 < count__35269_36566)){
var vec__35439_36568 = chunk__35268_36565.cljs$core$IIndexed$_nth$arity$2(null,i__35270_36567);
var actual_type_36569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35439_36568,(0),null);
var factory_36570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35439_36568,(1),null);
var canonical_f_36572 = (function (){var G__35443 = (factory_36570.cljs$core$IFn$_invoke$arity$1 ? factory_36570.cljs$core$IFn$_invoke$arity$1(f_36563) : factory_36570.call(null,f_36563));
var fexpr__35442 = (cljs.core.truth_(selector_36489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_36487,selector_36489):cljs.core.identity);
return (fexpr__35442.cljs$core$IFn$_invoke$arity$1 ? fexpr__35442.cljs$core$IFn$_invoke$arity$1(G__35443) : fexpr__35442.call(null,G__35443));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_36487,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36489,actual_type_36569,f_36563], null),canonical_f_36572], 0));

if(cljs.core.truth_(elem_36487.addEventListener)){
elem_36487.addEventListener(cljs.core.name(actual_type_36569),canonical_f_36572);
} else {
elem_36487.attachEvent(cljs.core.name(actual_type_36569),canonical_f_36572);
}


var G__36574 = seq__35266_36564;
var G__36575 = chunk__35268_36565;
var G__36576 = count__35269_36566;
var G__36577 = (i__35270_36567 + (1));
seq__35266_36564 = G__36574;
chunk__35268_36565 = G__36575;
count__35269_36566 = G__36576;
i__35270_36567 = G__36577;
continue;
} else {
var temp__5735__auto___36579__$1 = cljs.core.seq(seq__35266_36564);
if(temp__5735__auto___36579__$1){
var seq__35266_36580__$1 = temp__5735__auto___36579__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35266_36580__$1)){
var c__4609__auto___36581 = cljs.core.chunk_first(seq__35266_36580__$1);
var G__36582 = cljs.core.chunk_rest(seq__35266_36580__$1);
var G__36583 = c__4609__auto___36581;
var G__36584 = cljs.core.count(c__4609__auto___36581);
var G__36585 = (0);
seq__35266_36564 = G__36582;
chunk__35268_36565 = G__36583;
count__35269_36566 = G__36584;
i__35270_36567 = G__36585;
continue;
} else {
var vec__35446_36587 = cljs.core.first(seq__35266_36580__$1);
var actual_type_36588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35446_36587,(0),null);
var factory_36589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35446_36587,(1),null);
var canonical_f_36590 = (function (){var G__35452 = (factory_36589.cljs$core$IFn$_invoke$arity$1 ? factory_36589.cljs$core$IFn$_invoke$arity$1(f_36563) : factory_36589.call(null,f_36563));
var fexpr__35451 = (cljs.core.truth_(selector_36489)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_36487,selector_36489):cljs.core.identity);
return (fexpr__35451.cljs$core$IFn$_invoke$arity$1 ? fexpr__35451.cljs$core$IFn$_invoke$arity$1(G__35452) : fexpr__35451.call(null,G__35452));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_36487,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36489,actual_type_36588,f_36563], null),canonical_f_36590], 0));

if(cljs.core.truth_(elem_36487.addEventListener)){
elem_36487.addEventListener(cljs.core.name(actual_type_36588),canonical_f_36590);
} else {
elem_36487.attachEvent(cljs.core.name(actual_type_36588),canonical_f_36590);
}


var G__36592 = cljs.core.next(seq__35266_36580__$1);
var G__36593 = null;
var G__36594 = (0);
var G__36595 = (0);
seq__35266_36564 = G__36592;
chunk__35268_36565 = G__36593;
count__35269_36566 = G__36594;
i__35270_36567 = G__36595;
continue;
}
} else {
}
}
break;
}

var G__36598 = cljs.core.next(seq__35265_36543__$1);
var G__36599 = null;
var G__36600 = (0);
var G__36601 = (0);
seq__35265_36495 = G__36598;
chunk__35272_36496 = G__36599;
count__35273_36497 = G__36600;
i__35274_36498 = G__36601;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq35257){
var G__35258 = cljs.core.first(seq35257);
var seq35257__$1 = cljs.core.next(seq35257);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35258,seq35257__$1);
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
var len__4789__auto___36604 = arguments.length;
var i__4790__auto___36605 = (0);
while(true){
if((i__4790__auto___36605 < len__4789__auto___36604)){
args__4795__auto__.push((arguments[i__4790__auto___36605]));

var G__36606 = (i__4790__auto___36605 + (1));
i__4790__auto___36605 = G__36606;
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

var vec__35463_36608 = dommy.core.elem_and_selector(elem_sel);
var elem_36609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35463_36608,(0),null);
var selector_36610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35463_36608,(1),null);
var seq__35467_36611 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35474_36612 = null;
var count__35475_36613 = (0);
var i__35476_36614 = (0);
while(true){
if((i__35476_36614 < count__35475_36613)){
var vec__35556_36617 = chunk__35474_36612.cljs$core$IIndexed$_nth$arity$2(null,i__35476_36614);
var orig_type_36618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35556_36617,(0),null);
var f_36619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35556_36617,(1),null);
var seq__35477_36621 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_36618,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_36618,cljs.core.identity])));
var chunk__35479_36622 = null;
var count__35480_36623 = (0);
var i__35481_36624 = (0);
while(true){
if((i__35481_36624 < count__35480_36623)){
var vec__35574_36631 = chunk__35479_36622.cljs$core$IIndexed$_nth$arity$2(null,i__35481_36624);
var actual_type_36632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35574_36631,(0),null);
var __36633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35574_36631,(1),null);
var keys_36636 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36610,actual_type_36632,f_36619], null);
var canonical_f_36637 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_36609),keys_36636);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_36609,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_36636], 0));

if(cljs.core.truth_(elem_36609.removeEventListener)){
elem_36609.removeEventListener(cljs.core.name(actual_type_36632),canonical_f_36637);
} else {
elem_36609.detachEvent(cljs.core.name(actual_type_36632),canonical_f_36637);
}


var G__36640 = seq__35477_36621;
var G__36641 = chunk__35479_36622;
var G__36642 = count__35480_36623;
var G__36643 = (i__35481_36624 + (1));
seq__35477_36621 = G__36640;
chunk__35479_36622 = G__36641;
count__35480_36623 = G__36642;
i__35481_36624 = G__36643;
continue;
} else {
var temp__5735__auto___36644 = cljs.core.seq(seq__35477_36621);
if(temp__5735__auto___36644){
var seq__35477_36646__$1 = temp__5735__auto___36644;
if(cljs.core.chunked_seq_QMARK_(seq__35477_36646__$1)){
var c__4609__auto___36647 = cljs.core.chunk_first(seq__35477_36646__$1);
var G__36648 = cljs.core.chunk_rest(seq__35477_36646__$1);
var G__36649 = c__4609__auto___36647;
var G__36650 = cljs.core.count(c__4609__auto___36647);
var G__36651 = (0);
seq__35477_36621 = G__36648;
chunk__35479_36622 = G__36649;
count__35480_36623 = G__36650;
i__35481_36624 = G__36651;
continue;
} else {
var vec__35580_36653 = cljs.core.first(seq__35477_36646__$1);
var actual_type_36654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35580_36653,(0),null);
var __36655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35580_36653,(1),null);
var keys_36657 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36610,actual_type_36654,f_36619], null);
var canonical_f_36658 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_36609),keys_36657);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_36609,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_36657], 0));

if(cljs.core.truth_(elem_36609.removeEventListener)){
elem_36609.removeEventListener(cljs.core.name(actual_type_36654),canonical_f_36658);
} else {
elem_36609.detachEvent(cljs.core.name(actual_type_36654),canonical_f_36658);
}


var G__36659 = cljs.core.next(seq__35477_36646__$1);
var G__36660 = null;
var G__36661 = (0);
var G__36662 = (0);
seq__35477_36621 = G__36659;
chunk__35479_36622 = G__36660;
count__35480_36623 = G__36661;
i__35481_36624 = G__36662;
continue;
}
} else {
}
}
break;
}

var G__36664 = seq__35467_36611;
var G__36665 = chunk__35474_36612;
var G__36666 = count__35475_36613;
var G__36667 = (i__35476_36614 + (1));
seq__35467_36611 = G__36664;
chunk__35474_36612 = G__36665;
count__35475_36613 = G__36666;
i__35476_36614 = G__36667;
continue;
} else {
var temp__5735__auto___36668 = cljs.core.seq(seq__35467_36611);
if(temp__5735__auto___36668){
var seq__35467_36669__$1 = temp__5735__auto___36668;
if(cljs.core.chunked_seq_QMARK_(seq__35467_36669__$1)){
var c__4609__auto___36670 = cljs.core.chunk_first(seq__35467_36669__$1);
var G__36671 = cljs.core.chunk_rest(seq__35467_36669__$1);
var G__36672 = c__4609__auto___36670;
var G__36673 = cljs.core.count(c__4609__auto___36670);
var G__36674 = (0);
seq__35467_36611 = G__36671;
chunk__35474_36612 = G__36672;
count__35475_36613 = G__36673;
i__35476_36614 = G__36674;
continue;
} else {
var vec__35594_36677 = cljs.core.first(seq__35467_36669__$1);
var orig_type_36678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35594_36677,(0),null);
var f_36679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35594_36677,(1),null);
var seq__35468_36681 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_36678,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_36678,cljs.core.identity])));
var chunk__35470_36682 = null;
var count__35471_36683 = (0);
var i__35472_36684 = (0);
while(true){
if((i__35472_36684 < count__35471_36683)){
var vec__35610_36686 = chunk__35470_36682.cljs$core$IIndexed$_nth$arity$2(null,i__35472_36684);
var actual_type_36687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35610_36686,(0),null);
var __36688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35610_36686,(1),null);
var keys_36689 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36610,actual_type_36687,f_36679], null);
var canonical_f_36690 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_36609),keys_36689);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_36609,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_36689], 0));

if(cljs.core.truth_(elem_36609.removeEventListener)){
elem_36609.removeEventListener(cljs.core.name(actual_type_36687),canonical_f_36690);
} else {
elem_36609.detachEvent(cljs.core.name(actual_type_36687),canonical_f_36690);
}


var G__36693 = seq__35468_36681;
var G__36694 = chunk__35470_36682;
var G__36695 = count__35471_36683;
var G__36696 = (i__35472_36684 + (1));
seq__35468_36681 = G__36693;
chunk__35470_36682 = G__36694;
count__35471_36683 = G__36695;
i__35472_36684 = G__36696;
continue;
} else {
var temp__5735__auto___36698__$1 = cljs.core.seq(seq__35468_36681);
if(temp__5735__auto___36698__$1){
var seq__35468_36699__$1 = temp__5735__auto___36698__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35468_36699__$1)){
var c__4609__auto___36700 = cljs.core.chunk_first(seq__35468_36699__$1);
var G__36701 = cljs.core.chunk_rest(seq__35468_36699__$1);
var G__36702 = c__4609__auto___36700;
var G__36703 = cljs.core.count(c__4609__auto___36700);
var G__36704 = (0);
seq__35468_36681 = G__36701;
chunk__35470_36682 = G__36702;
count__35471_36683 = G__36703;
i__35472_36684 = G__36704;
continue;
} else {
var vec__35615_36706 = cljs.core.first(seq__35468_36699__$1);
var actual_type_36707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35615_36706,(0),null);
var __36708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35615_36706,(1),null);
var keys_36709 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36610,actual_type_36707,f_36679], null);
var canonical_f_36710 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_36609),keys_36709);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_36609,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_36709], 0));

if(cljs.core.truth_(elem_36609.removeEventListener)){
elem_36609.removeEventListener(cljs.core.name(actual_type_36707),canonical_f_36710);
} else {
elem_36609.detachEvent(cljs.core.name(actual_type_36707),canonical_f_36710);
}


var G__36714 = cljs.core.next(seq__35468_36699__$1);
var G__36715 = null;
var G__36716 = (0);
var G__36717 = (0);
seq__35468_36681 = G__36714;
chunk__35470_36682 = G__36715;
count__35471_36683 = G__36716;
i__35472_36684 = G__36717;
continue;
}
} else {
}
}
break;
}

var G__36718 = cljs.core.next(seq__35467_36669__$1);
var G__36719 = null;
var G__36720 = (0);
var G__36721 = (0);
seq__35467_36611 = G__36718;
chunk__35474_36612 = G__36719;
count__35475_36613 = G__36720;
i__35476_36614 = G__36721;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35458){
var G__35459 = cljs.core.first(seq35458);
var seq35458__$1 = cljs.core.next(seq35458);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35459,seq35458__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36723 = arguments.length;
var i__4790__auto___36725 = (0);
while(true){
if((i__4790__auto___36725 < len__4789__auto___36723)){
args__4795__auto__.push((arguments[i__4790__auto___36725]));

var G__36726 = (i__4790__auto___36725 + (1));
i__4790__auto___36725 = G__36726;
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

var vec__35634_36757 = dommy.core.elem_and_selector(elem_sel);
var elem_36758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35634_36757,(0),null);
var selector_36759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35634_36757,(1),null);
var seq__35638_36760 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__35639_36761 = null;
var count__35640_36762 = (0);
var i__35641_36763 = (0);
while(true){
if((i__35641_36763 < count__35640_36762)){
var vec__35652_36764 = chunk__35639_36761.cljs$core$IIndexed$_nth$arity$2(null,i__35641_36763);
var type_36765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35652_36764,(0),null);
var f_36766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35652_36764,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36765,((function (seq__35638_36760,chunk__35639_36761,count__35640_36762,i__35641_36763,vec__35652_36764,type_36765,f_36766,vec__35634_36757,elem_36758,selector_36759){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36765,dommy$core$this_fn], 0));

return (f_36766.cljs$core$IFn$_invoke$arity$1 ? f_36766.cljs$core$IFn$_invoke$arity$1(e) : f_36766.call(null,e));
});})(seq__35638_36760,chunk__35639_36761,count__35640_36762,i__35641_36763,vec__35652_36764,type_36765,f_36766,vec__35634_36757,elem_36758,selector_36759))
], 0));


var G__36768 = seq__35638_36760;
var G__36769 = chunk__35639_36761;
var G__36770 = count__35640_36762;
var G__36771 = (i__35641_36763 + (1));
seq__35638_36760 = G__36768;
chunk__35639_36761 = G__36769;
count__35640_36762 = G__36770;
i__35641_36763 = G__36771;
continue;
} else {
var temp__5735__auto___36772 = cljs.core.seq(seq__35638_36760);
if(temp__5735__auto___36772){
var seq__35638_36774__$1 = temp__5735__auto___36772;
if(cljs.core.chunked_seq_QMARK_(seq__35638_36774__$1)){
var c__4609__auto___36775 = cljs.core.chunk_first(seq__35638_36774__$1);
var G__36776 = cljs.core.chunk_rest(seq__35638_36774__$1);
var G__36777 = c__4609__auto___36775;
var G__36778 = cljs.core.count(c__4609__auto___36775);
var G__36779 = (0);
seq__35638_36760 = G__36776;
chunk__35639_36761 = G__36777;
count__35640_36762 = G__36778;
i__35641_36763 = G__36779;
continue;
} else {
var vec__35657_36780 = cljs.core.first(seq__35638_36774__$1);
var type_36781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35657_36780,(0),null);
var f_36782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35657_36780,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36781,((function (seq__35638_36760,chunk__35639_36761,count__35640_36762,i__35641_36763,vec__35657_36780,type_36781,f_36782,seq__35638_36774__$1,temp__5735__auto___36772,vec__35634_36757,elem_36758,selector_36759){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_36781,dommy$core$this_fn], 0));

return (f_36782.cljs$core$IFn$_invoke$arity$1 ? f_36782.cljs$core$IFn$_invoke$arity$1(e) : f_36782.call(null,e));
});})(seq__35638_36760,chunk__35639_36761,count__35640_36762,i__35641_36763,vec__35657_36780,type_36781,f_36782,seq__35638_36774__$1,temp__5735__auto___36772,vec__35634_36757,elem_36758,selector_36759))
], 0));


var G__36783 = cljs.core.next(seq__35638_36774__$1);
var G__36784 = null;
var G__36785 = (0);
var G__36786 = (0);
seq__35638_36760 = G__36783;
chunk__35639_36761 = G__36784;
count__35640_36762 = G__36785;
i__35641_36763 = G__36786;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35630){
var G__35631 = cljs.core.first(seq35630);
var seq35630__$1 = cljs.core.next(seq35630);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35631,seq35630__$1);
}));


//# sourceMappingURL=dommy.core.js.map
