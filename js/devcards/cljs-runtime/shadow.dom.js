goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47738 = coll;
var G__47739 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47738,G__47739) : shadow.dom.lazy_native_coll_seq.call(null,G__47738,G__47739));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47756 = arguments.length;
switch (G__47756) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47767 = arguments.length;
switch (G__47767) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47773 = arguments.length;
switch (G__47773) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47779 = arguments.length;
switch (G__47779) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47785 = arguments.length;
switch (G__47785) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__47786 = document;
var G__47787 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47786,G__47787);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47788 = shadow.dom.dom_node(parent);
var G__47789 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47788,G__47789);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47790 = shadow.dom.dom_node(el);
var G__47791 = cls;
return goog.dom.classlist.add(G__47790,G__47791);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47792 = shadow.dom.dom_node(el);
var G__47793 = cls;
return goog.dom.classlist.remove(G__47792,G__47793);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47795 = arguments.length;
switch (G__47795) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__47796 = shadow.dom.dom_node(el);
var G__47797 = cls;
return goog.dom.classlist.toggle(G__47796,G__47797);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47798){if((e47798 instanceof Object)){
var e = e47798;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47798;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47801 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47802 = null;
var count__47803 = (0);
var i__47804 = (0);
while(true){
if((i__47804 < count__47803)){
var el = chunk__47802.cljs$core$IIndexed$_nth$arity$2(null,i__47804);
var handler_48414__$1 = ((function (seq__47801,chunk__47802,count__47803,i__47804,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47801,chunk__47802,count__47803,i__47804,el))
;
var G__47812_48415 = el;
var G__47813_48416 = cljs.core.name(ev);
var G__47814_48417 = handler_48414__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47812_48415,G__47813_48416,G__47814_48417) : shadow.dom.dom_listen.call(null,G__47812_48415,G__47813_48416,G__47814_48417));


var G__48418 = seq__47801;
var G__48419 = chunk__47802;
var G__48420 = count__47803;
var G__48421 = (i__47804 + (1));
seq__47801 = G__48418;
chunk__47802 = G__48419;
count__47803 = G__48420;
i__47804 = G__48421;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47801);
if(temp__5735__auto__){
var seq__47801__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47801__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47801__$1);
var G__48422 = cljs.core.chunk_rest(seq__47801__$1);
var G__48423 = c__4609__auto__;
var G__48424 = cljs.core.count(c__4609__auto__);
var G__48425 = (0);
seq__47801 = G__48422;
chunk__47802 = G__48423;
count__47803 = G__48424;
i__47804 = G__48425;
continue;
} else {
var el = cljs.core.first(seq__47801__$1);
var handler_48426__$1 = ((function (seq__47801,chunk__47802,count__47803,i__47804,el,seq__47801__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47801,chunk__47802,count__47803,i__47804,el,seq__47801__$1,temp__5735__auto__))
;
var G__47815_48427 = el;
var G__47816_48428 = cljs.core.name(ev);
var G__47817_48429 = handler_48426__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47815_48427,G__47816_48428,G__47817_48429) : shadow.dom.dom_listen.call(null,G__47815_48427,G__47816_48428,G__47817_48429));


var G__48430 = cljs.core.next(seq__47801__$1);
var G__48431 = null;
var G__48432 = (0);
var G__48433 = (0);
seq__47801 = G__48430;
chunk__47802 = G__48431;
count__47803 = G__48432;
i__47804 = G__48433;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47820 = arguments.length;
switch (G__47820) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__47824 = shadow.dom.dom_node(el);
var G__47825 = cljs.core.name(ev);
var G__47826 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47824,G__47825,G__47826) : shadow.dom.dom_listen.call(null,G__47824,G__47825,G__47826));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47829 = shadow.dom.dom_node(el);
var G__47830 = cljs.core.name(ev);
var G__47831 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47829,G__47830,G__47831) : shadow.dom.dom_listen_remove.call(null,G__47829,G__47830,G__47831));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47834 = cljs.core.seq(events);
var chunk__47835 = null;
var count__47836 = (0);
var i__47837 = (0);
while(true){
if((i__47837 < count__47836)){
var vec__47846 = chunk__47835.cljs$core$IIndexed$_nth$arity$2(null,i__47837);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47846,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48447 = seq__47834;
var G__48448 = chunk__47835;
var G__48449 = count__47836;
var G__48450 = (i__47837 + (1));
seq__47834 = G__48447;
chunk__47835 = G__48448;
count__47836 = G__48449;
i__47837 = G__48450;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47834);
if(temp__5735__auto__){
var seq__47834__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47834__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47834__$1);
var G__48452 = cljs.core.chunk_rest(seq__47834__$1);
var G__48453 = c__4609__auto__;
var G__48454 = cljs.core.count(c__4609__auto__);
var G__48455 = (0);
seq__47834 = G__48452;
chunk__47835 = G__48453;
count__47836 = G__48454;
i__47837 = G__48455;
continue;
} else {
var vec__47850 = cljs.core.first(seq__47834__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47850,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48458 = cljs.core.next(seq__47834__$1);
var G__48459 = null;
var G__48460 = (0);
var G__48461 = (0);
seq__47834 = G__48458;
chunk__47835 = G__48459;
count__47836 = G__48460;
i__47837 = G__48461;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47854 = cljs.core.seq(styles);
var chunk__47855 = null;
var count__47856 = (0);
var i__47857 = (0);
while(true){
if((i__47857 < count__47856)){
var vec__47875 = chunk__47855.cljs$core$IIndexed$_nth$arity$2(null,i__47857);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47875,(1),null);
var G__47879_48469 = dom;
var G__47880_48470 = cljs.core.name(k);
var G__47881_48471 = (((v == null))?"":v);
goog.style.setStyle(G__47879_48469,G__47880_48470,G__47881_48471);


var G__48473 = seq__47854;
var G__48474 = chunk__47855;
var G__48475 = count__47856;
var G__48476 = (i__47857 + (1));
seq__47854 = G__48473;
chunk__47855 = G__48474;
count__47856 = G__48475;
i__47857 = G__48476;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47854);
if(temp__5735__auto__){
var seq__47854__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47854__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47854__$1);
var G__48477 = cljs.core.chunk_rest(seq__47854__$1);
var G__48478 = c__4609__auto__;
var G__48479 = cljs.core.count(c__4609__auto__);
var G__48480 = (0);
seq__47854 = G__48477;
chunk__47855 = G__48478;
count__47856 = G__48479;
i__47857 = G__48480;
continue;
} else {
var vec__47885 = cljs.core.first(seq__47854__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47885,(1),null);
var G__47888_48481 = dom;
var G__47889_48482 = cljs.core.name(k);
var G__47890_48483 = (((v == null))?"":v);
goog.style.setStyle(G__47888_48481,G__47889_48482,G__47890_48483);


var G__48484 = cljs.core.next(seq__47854__$1);
var G__48485 = null;
var G__48486 = (0);
var G__48487 = (0);
seq__47854 = G__48484;
chunk__47855 = G__48485;
count__47856 = G__48486;
i__47857 = G__48487;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47893_48489 = key;
var G__47893_48490__$1 = (((G__47893_48489 instanceof cljs.core.Keyword))?G__47893_48489.fqn:null);
switch (G__47893_48490__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48493 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48493,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48493,"aria-");
}
})())){
el.setAttribute(ks_48493,value);
} else {
(el[ks_48493] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__47905 = shadow.dom.dom_node(el);
var G__47906 = cls;
return goog.dom.classlist.contains(G__47905,G__47906);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47910){
var map__47911 = p__47910;
var map__47911__$1 = (((((!((map__47911 == null))))?(((((map__47911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47911):map__47911);
var props = map__47911__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47911__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47915 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47915,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47915,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47915,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47919 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47919,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47919;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47925 = arguments.length;
switch (G__47925) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47932){
var vec__47933 = p__47932;
var seq__47934 = cljs.core.seq(vec__47933);
var first__47935 = cljs.core.first(seq__47934);
var seq__47934__$1 = cljs.core.next(seq__47934);
var nn = first__47935;
var first__47935__$1 = cljs.core.first(seq__47934__$1);
var seq__47934__$2 = cljs.core.next(seq__47934__$1);
var np = first__47935__$1;
var nc = seq__47934__$2;
var node = vec__47933;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47938 = nn;
var G__47939 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47938,G__47939) : create_fn.call(null,G__47938,G__47939));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47940 = nn;
var G__47941 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47940,G__47941) : create_fn.call(null,G__47940,G__47941));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47944 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47944,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47944,(1),null);
var seq__47947_48511 = cljs.core.seq(node_children);
var chunk__47948_48512 = null;
var count__47949_48513 = (0);
var i__47950_48514 = (0);
while(true){
if((i__47950_48514 < count__47949_48513)){
var child_struct_48515 = chunk__47948_48512.cljs$core$IIndexed$_nth$arity$2(null,i__47950_48514);
var children_48516 = shadow.dom.dom_node(child_struct_48515);
if(cljs.core.seq_QMARK_(children_48516)){
var seq__47975_48517 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48516));
var chunk__47977_48518 = null;
var count__47978_48519 = (0);
var i__47979_48520 = (0);
while(true){
if((i__47979_48520 < count__47978_48519)){
var child_48521 = chunk__47977_48518.cljs$core$IIndexed$_nth$arity$2(null,i__47979_48520);
if(cljs.core.truth_(child_48521)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48521);


var G__48522 = seq__47975_48517;
var G__48523 = chunk__47977_48518;
var G__48524 = count__47978_48519;
var G__48525 = (i__47979_48520 + (1));
seq__47975_48517 = G__48522;
chunk__47977_48518 = G__48523;
count__47978_48519 = G__48524;
i__47979_48520 = G__48525;
continue;
} else {
var G__48526 = seq__47975_48517;
var G__48527 = chunk__47977_48518;
var G__48528 = count__47978_48519;
var G__48529 = (i__47979_48520 + (1));
seq__47975_48517 = G__48526;
chunk__47977_48518 = G__48527;
count__47978_48519 = G__48528;
i__47979_48520 = G__48529;
continue;
}
} else {
var temp__5735__auto___48530 = cljs.core.seq(seq__47975_48517);
if(temp__5735__auto___48530){
var seq__47975_48531__$1 = temp__5735__auto___48530;
if(cljs.core.chunked_seq_QMARK_(seq__47975_48531__$1)){
var c__4609__auto___48532 = cljs.core.chunk_first(seq__47975_48531__$1);
var G__48533 = cljs.core.chunk_rest(seq__47975_48531__$1);
var G__48534 = c__4609__auto___48532;
var G__48535 = cljs.core.count(c__4609__auto___48532);
var G__48536 = (0);
seq__47975_48517 = G__48533;
chunk__47977_48518 = G__48534;
count__47978_48519 = G__48535;
i__47979_48520 = G__48536;
continue;
} else {
var child_48545 = cljs.core.first(seq__47975_48531__$1);
if(cljs.core.truth_(child_48545)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48545);


var G__48547 = cljs.core.next(seq__47975_48531__$1);
var G__48548 = null;
var G__48549 = (0);
var G__48550 = (0);
seq__47975_48517 = G__48547;
chunk__47977_48518 = G__48548;
count__47978_48519 = G__48549;
i__47979_48520 = G__48550;
continue;
} else {
var G__48551 = cljs.core.next(seq__47975_48531__$1);
var G__48552 = null;
var G__48553 = (0);
var G__48554 = (0);
seq__47975_48517 = G__48551;
chunk__47977_48518 = G__48552;
count__47978_48519 = G__48553;
i__47979_48520 = G__48554;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48516);
}


var G__48555 = seq__47947_48511;
var G__48556 = chunk__47948_48512;
var G__48557 = count__47949_48513;
var G__48558 = (i__47950_48514 + (1));
seq__47947_48511 = G__48555;
chunk__47948_48512 = G__48556;
count__47949_48513 = G__48557;
i__47950_48514 = G__48558;
continue;
} else {
var temp__5735__auto___48559 = cljs.core.seq(seq__47947_48511);
if(temp__5735__auto___48559){
var seq__47947_48560__$1 = temp__5735__auto___48559;
if(cljs.core.chunked_seq_QMARK_(seq__47947_48560__$1)){
var c__4609__auto___48561 = cljs.core.chunk_first(seq__47947_48560__$1);
var G__48562 = cljs.core.chunk_rest(seq__47947_48560__$1);
var G__48563 = c__4609__auto___48561;
var G__48564 = cljs.core.count(c__4609__auto___48561);
var G__48565 = (0);
seq__47947_48511 = G__48562;
chunk__47948_48512 = G__48563;
count__47949_48513 = G__48564;
i__47950_48514 = G__48565;
continue;
} else {
var child_struct_48566 = cljs.core.first(seq__47947_48560__$1);
var children_48567 = shadow.dom.dom_node(child_struct_48566);
if(cljs.core.seq_QMARK_(children_48567)){
var seq__47985_48569 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48567));
var chunk__47987_48570 = null;
var count__47988_48571 = (0);
var i__47989_48572 = (0);
while(true){
if((i__47989_48572 < count__47988_48571)){
var child_48573 = chunk__47987_48570.cljs$core$IIndexed$_nth$arity$2(null,i__47989_48572);
if(cljs.core.truth_(child_48573)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48573);


var G__48576 = seq__47985_48569;
var G__48577 = chunk__47987_48570;
var G__48578 = count__47988_48571;
var G__48579 = (i__47989_48572 + (1));
seq__47985_48569 = G__48576;
chunk__47987_48570 = G__48577;
count__47988_48571 = G__48578;
i__47989_48572 = G__48579;
continue;
} else {
var G__48580 = seq__47985_48569;
var G__48581 = chunk__47987_48570;
var G__48582 = count__47988_48571;
var G__48583 = (i__47989_48572 + (1));
seq__47985_48569 = G__48580;
chunk__47987_48570 = G__48581;
count__47988_48571 = G__48582;
i__47989_48572 = G__48583;
continue;
}
} else {
var temp__5735__auto___48584__$1 = cljs.core.seq(seq__47985_48569);
if(temp__5735__auto___48584__$1){
var seq__47985_48585__$1 = temp__5735__auto___48584__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47985_48585__$1)){
var c__4609__auto___48587 = cljs.core.chunk_first(seq__47985_48585__$1);
var G__48588 = cljs.core.chunk_rest(seq__47985_48585__$1);
var G__48589 = c__4609__auto___48587;
var G__48590 = cljs.core.count(c__4609__auto___48587);
var G__48591 = (0);
seq__47985_48569 = G__48588;
chunk__47987_48570 = G__48589;
count__47988_48571 = G__48590;
i__47989_48572 = G__48591;
continue;
} else {
var child_48592 = cljs.core.first(seq__47985_48585__$1);
if(cljs.core.truth_(child_48592)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48592);


var G__48593 = cljs.core.next(seq__47985_48585__$1);
var G__48594 = null;
var G__48595 = (0);
var G__48596 = (0);
seq__47985_48569 = G__48593;
chunk__47987_48570 = G__48594;
count__47988_48571 = G__48595;
i__47989_48572 = G__48596;
continue;
} else {
var G__48597 = cljs.core.next(seq__47985_48585__$1);
var G__48598 = null;
var G__48599 = (0);
var G__48600 = (0);
seq__47985_48569 = G__48597;
chunk__47987_48570 = G__48598;
count__47988_48571 = G__48599;
i__47989_48572 = G__48600;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48567);
}


var G__48602 = cljs.core.next(seq__47947_48560__$1);
var G__48603 = null;
var G__48604 = (0);
var G__48605 = (0);
seq__47947_48511 = G__48602;
chunk__47948_48512 = G__48603;
count__47949_48513 = G__48604;
i__47950_48514 = G__48605;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__48006 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48006);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48008 = cljs.core.seq(node);
var chunk__48009 = null;
var count__48010 = (0);
var i__48011 = (0);
while(true){
if((i__48011 < count__48010)){
var n = chunk__48009.cljs$core$IIndexed$_nth$arity$2(null,i__48011);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48615 = seq__48008;
var G__48616 = chunk__48009;
var G__48617 = count__48010;
var G__48618 = (i__48011 + (1));
seq__48008 = G__48615;
chunk__48009 = G__48616;
count__48010 = G__48617;
i__48011 = G__48618;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48008);
if(temp__5735__auto__){
var seq__48008__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48008__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48008__$1);
var G__48619 = cljs.core.chunk_rest(seq__48008__$1);
var G__48620 = c__4609__auto__;
var G__48621 = cljs.core.count(c__4609__auto__);
var G__48622 = (0);
seq__48008 = G__48619;
chunk__48009 = G__48620;
count__48010 = G__48621;
i__48011 = G__48622;
continue;
} else {
var n = cljs.core.first(seq__48008__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48624 = cljs.core.next(seq__48008__$1);
var G__48625 = null;
var G__48626 = (0);
var G__48627 = (0);
seq__48008 = G__48624;
chunk__48009 = G__48625;
count__48010 = G__48626;
i__48011 = G__48627;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__48012 = shadow.dom.dom_node(new$);
var G__48013 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48012,G__48013);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48015 = arguments.length;
switch (G__48015) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48017 = arguments.length;
switch (G__48017) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48028 = arguments.length;
switch (G__48028) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48654 = arguments.length;
var i__4790__auto___48655 = (0);
while(true){
if((i__4790__auto___48655 < len__4789__auto___48654)){
args__4795__auto__.push((arguments[i__4790__auto___48655]));

var G__48656 = (i__4790__auto___48655 + (1));
i__4790__auto___48655 = G__48656;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48041_48661 = cljs.core.seq(nodes);
var chunk__48042_48662 = null;
var count__48043_48663 = (0);
var i__48044_48664 = (0);
while(true){
if((i__48044_48664 < count__48043_48663)){
var node_48665 = chunk__48042_48662.cljs$core$IIndexed$_nth$arity$2(null,i__48044_48664);
fragment.appendChild(shadow.dom._to_dom(node_48665));


var G__48666 = seq__48041_48661;
var G__48667 = chunk__48042_48662;
var G__48668 = count__48043_48663;
var G__48669 = (i__48044_48664 + (1));
seq__48041_48661 = G__48666;
chunk__48042_48662 = G__48667;
count__48043_48663 = G__48668;
i__48044_48664 = G__48669;
continue;
} else {
var temp__5735__auto___48670 = cljs.core.seq(seq__48041_48661);
if(temp__5735__auto___48670){
var seq__48041_48671__$1 = temp__5735__auto___48670;
if(cljs.core.chunked_seq_QMARK_(seq__48041_48671__$1)){
var c__4609__auto___48672 = cljs.core.chunk_first(seq__48041_48671__$1);
var G__48674 = cljs.core.chunk_rest(seq__48041_48671__$1);
var G__48675 = c__4609__auto___48672;
var G__48676 = cljs.core.count(c__4609__auto___48672);
var G__48677 = (0);
seq__48041_48661 = G__48674;
chunk__48042_48662 = G__48675;
count__48043_48663 = G__48676;
i__48044_48664 = G__48677;
continue;
} else {
var node_48678 = cljs.core.first(seq__48041_48671__$1);
fragment.appendChild(shadow.dom._to_dom(node_48678));


var G__48680 = cljs.core.next(seq__48041_48671__$1);
var G__48681 = null;
var G__48682 = (0);
var G__48683 = (0);
seq__48041_48661 = G__48680;
chunk__48042_48662 = G__48681;
count__48043_48663 = G__48682;
i__48044_48664 = G__48683;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48038){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48038));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48051_48684 = cljs.core.seq(scripts);
var chunk__48052_48685 = null;
var count__48053_48686 = (0);
var i__48054_48687 = (0);
while(true){
if((i__48054_48687 < count__48053_48686)){
var vec__48067_48688 = chunk__48052_48685.cljs$core$IIndexed$_nth$arity$2(null,i__48054_48687);
var script_tag_48689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48067_48688,(0),null);
var script_body_48690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48067_48688,(1),null);
eval(script_body_48690);


var G__48691 = seq__48051_48684;
var G__48692 = chunk__48052_48685;
var G__48693 = count__48053_48686;
var G__48694 = (i__48054_48687 + (1));
seq__48051_48684 = G__48691;
chunk__48052_48685 = G__48692;
count__48053_48686 = G__48693;
i__48054_48687 = G__48694;
continue;
} else {
var temp__5735__auto___48699 = cljs.core.seq(seq__48051_48684);
if(temp__5735__auto___48699){
var seq__48051_48700__$1 = temp__5735__auto___48699;
if(cljs.core.chunked_seq_QMARK_(seq__48051_48700__$1)){
var c__4609__auto___48701 = cljs.core.chunk_first(seq__48051_48700__$1);
var G__48702 = cljs.core.chunk_rest(seq__48051_48700__$1);
var G__48703 = c__4609__auto___48701;
var G__48704 = cljs.core.count(c__4609__auto___48701);
var G__48705 = (0);
seq__48051_48684 = G__48702;
chunk__48052_48685 = G__48703;
count__48053_48686 = G__48704;
i__48054_48687 = G__48705;
continue;
} else {
var vec__48072_48707 = cljs.core.first(seq__48051_48700__$1);
var script_tag_48708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48072_48707,(0),null);
var script_body_48709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48072_48707,(1),null);
eval(script_body_48709);


var G__48712 = cljs.core.next(seq__48051_48700__$1);
var G__48713 = null;
var G__48714 = (0);
var G__48715 = (0);
seq__48051_48684 = G__48712;
chunk__48052_48685 = G__48713;
count__48053_48686 = G__48714;
i__48054_48687 = G__48715;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48076){
var vec__48077 = p__48076;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48077,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48077,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48084 = shadow.dom.dom_node(el);
var G__48085 = cls;
return goog.dom.getAncestorByClass(G__48084,G__48085);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48089 = arguments.length;
switch (G__48089) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48093 = shadow.dom.dom_node(el);
var G__48094 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48093,G__48094);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48097 = shadow.dom.dom_node(el);
var G__48098 = cljs.core.name(tag);
var G__48099 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48097,G__48098,G__48099);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48102 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48102);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48106 = shadow.dom.dom_node(dom);
var G__48107 = value;
return goog.dom.forms.setValue(G__48106,G__48107);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48114 = cljs.core.seq(style_keys);
var chunk__48115 = null;
var count__48116 = (0);
var i__48117 = (0);
while(true){
if((i__48117 < count__48116)){
var it = chunk__48115.cljs$core$IIndexed$_nth$arity$2(null,i__48117);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48727 = seq__48114;
var G__48728 = chunk__48115;
var G__48729 = count__48116;
var G__48730 = (i__48117 + (1));
seq__48114 = G__48727;
chunk__48115 = G__48728;
count__48116 = G__48729;
i__48117 = G__48730;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48114);
if(temp__5735__auto__){
var seq__48114__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48114__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48114__$1);
var G__48732 = cljs.core.chunk_rest(seq__48114__$1);
var G__48733 = c__4609__auto__;
var G__48734 = cljs.core.count(c__4609__auto__);
var G__48735 = (0);
seq__48114 = G__48732;
chunk__48115 = G__48733;
count__48116 = G__48734;
i__48117 = G__48735;
continue;
} else {
var it = cljs.core.first(seq__48114__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48736 = cljs.core.next(seq__48114__$1);
var G__48737 = null;
var G__48738 = (0);
var G__48739 = (0);
seq__48114 = G__48736;
chunk__48115 = G__48737;
count__48116 = G__48738;
i__48117 = G__48739;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48120,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48124 = k48120;
var G__48124__$1 = (((G__48124 instanceof cljs.core.Keyword))?G__48124.fqn:null);
switch (G__48124__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48120,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48125){
var vec__48126 = p__48125;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48126,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48126,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48119){
var self__ = this;
var G__48119__$1 = this;
return (new cljs.core.RecordIter((0),G__48119__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48135 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48135(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48121,other48122){
var self__ = this;
var this48121__$1 = this;
return (((!((other48122 == null)))) && ((this48121__$1.constructor === other48122.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48121__$1.x,other48122.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48121__$1.y,other48122.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48121__$1.__extmap,other48122.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48119){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48136 = cljs.core.keyword_identical_QMARK_;
var expr__48137 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48139 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48140 = expr__48137;
return (pred__48136.cljs$core$IFn$_invoke$arity$2 ? pred__48136.cljs$core$IFn$_invoke$arity$2(G__48139,G__48140) : pred__48136.call(null,G__48139,G__48140));
})())){
return (new shadow.dom.Coordinate(G__48119,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48141 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48142 = expr__48137;
return (pred__48136.cljs$core$IFn$_invoke$arity$2 ? pred__48136.cljs$core$IFn$_invoke$arity$2(G__48141,G__48142) : pred__48136.call(null,G__48141,G__48142));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48119,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48119),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48119){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48119,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48123){
var extmap__4478__auto__ = (function (){var G__48145 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48123,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48123)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48145);
} else {
return G__48145;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48123),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48123),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48148 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48148);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48151 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48151);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48156 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48156);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48160,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48167 = k48160;
var G__48167__$1 = (((G__48167 instanceof cljs.core.Keyword))?G__48167.fqn:null);
switch (G__48167__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48160,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48170){
var vec__48171 = p__48170;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48171,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48171,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48159){
var self__ = this;
var G__48159__$1 = this;
return (new cljs.core.RecordIter((0),G__48159__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48184 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48184(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48161,other48162){
var self__ = this;
var this48161__$1 = this;
return (((!((other48162 == null)))) && ((this48161__$1.constructor === other48162.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48161__$1.w,other48162.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48161__$1.h,other48162.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48161__$1.__extmap,other48162.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48159){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48194 = cljs.core.keyword_identical_QMARK_;
var expr__48195 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48197 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48198 = expr__48195;
return (pred__48194.cljs$core$IFn$_invoke$arity$2 ? pred__48194.cljs$core$IFn$_invoke$arity$2(G__48197,G__48198) : pred__48194.call(null,G__48197,G__48198));
})())){
return (new shadow.dom.Size(G__48159,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48200 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48201 = expr__48195;
return (pred__48194.cljs$core$IFn$_invoke$arity$2 ? pred__48194.cljs$core$IFn$_invoke$arity$2(G__48200,G__48201) : pred__48194.call(null,G__48200,G__48201));
})())){
return (new shadow.dom.Size(self__.w,G__48159,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48159),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48159){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48159,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48163){
var extmap__4478__auto__ = (function (){var G__48209 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48163,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48163)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48209);
} else {
return G__48209;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48163),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48163),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48210 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48210);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__48791 = (i + (1));
var G__48792 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48791;
ret = G__48792;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48220){
var vec__48221 = p__48220;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48221,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48221,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48225 = arguments.length;
switch (G__48225) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48227_48796 = new_node;
var G__48228_48797 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48227_48796,G__48228_48797);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48230_48798 = new_node;
var G__48231_48799 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48230_48798,G__48231_48799);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48800 = ps;
var G__48801 = (i + (1));
el__$1 = G__48800;
i = G__48801;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48232 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48232);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48234 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48234);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48238 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48238);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48241 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48241,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48241,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48241,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48246_48802 = cljs.core.seq(props);
var chunk__48247_48803 = null;
var count__48248_48804 = (0);
var i__48249_48805 = (0);
while(true){
if((i__48249_48805 < count__48248_48804)){
var vec__48264_48806 = chunk__48247_48803.cljs$core$IIndexed$_nth$arity$2(null,i__48249_48805);
var k_48807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48264_48806,(0),null);
var v_48808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48264_48806,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48807);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48807),v_48808);


var G__48809 = seq__48246_48802;
var G__48810 = chunk__48247_48803;
var G__48811 = count__48248_48804;
var G__48812 = (i__48249_48805 + (1));
seq__48246_48802 = G__48809;
chunk__48247_48803 = G__48810;
count__48248_48804 = G__48811;
i__48249_48805 = G__48812;
continue;
} else {
var temp__5735__auto___48813 = cljs.core.seq(seq__48246_48802);
if(temp__5735__auto___48813){
var seq__48246_48814__$1 = temp__5735__auto___48813;
if(cljs.core.chunked_seq_QMARK_(seq__48246_48814__$1)){
var c__4609__auto___48815 = cljs.core.chunk_first(seq__48246_48814__$1);
var G__48816 = cljs.core.chunk_rest(seq__48246_48814__$1);
var G__48817 = c__4609__auto___48815;
var G__48818 = cljs.core.count(c__4609__auto___48815);
var G__48819 = (0);
seq__48246_48802 = G__48816;
chunk__48247_48803 = G__48817;
count__48248_48804 = G__48818;
i__48249_48805 = G__48819;
continue;
} else {
var vec__48268_48820 = cljs.core.first(seq__48246_48814__$1);
var k_48821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48268_48820,(0),null);
var v_48822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48268_48820,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48821);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48821),v_48822);


var G__48823 = cljs.core.next(seq__48246_48814__$1);
var G__48824 = null;
var G__48825 = (0);
var G__48826 = (0);
seq__48246_48802 = G__48823;
chunk__48247_48803 = G__48824;
count__48248_48804 = G__48825;
i__48249_48805 = G__48826;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48277 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48277,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48277,(1),null);
var seq__48281_48827 = cljs.core.seq(node_children);
var chunk__48283_48828 = null;
var count__48284_48829 = (0);
var i__48285_48830 = (0);
while(true){
if((i__48285_48830 < count__48284_48829)){
var child_struct_48831 = chunk__48283_48828.cljs$core$IIndexed$_nth$arity$2(null,i__48285_48830);
if((!((child_struct_48831 == null)))){
if(typeof child_struct_48831 === 'string'){
var text_48832 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48832),child_struct_48831].join(''));
} else {
var children_48833 = shadow.dom.svg_node(child_struct_48831);
if(cljs.core.seq_QMARK_(children_48833)){
var seq__48310_48834 = cljs.core.seq(children_48833);
var chunk__48312_48835 = null;
var count__48313_48836 = (0);
var i__48314_48837 = (0);
while(true){
if((i__48314_48837 < count__48313_48836)){
var child_48838 = chunk__48312_48835.cljs$core$IIndexed$_nth$arity$2(null,i__48314_48837);
if(cljs.core.truth_(child_48838)){
node.appendChild(child_48838);


var G__48839 = seq__48310_48834;
var G__48840 = chunk__48312_48835;
var G__48841 = count__48313_48836;
var G__48842 = (i__48314_48837 + (1));
seq__48310_48834 = G__48839;
chunk__48312_48835 = G__48840;
count__48313_48836 = G__48841;
i__48314_48837 = G__48842;
continue;
} else {
var G__48843 = seq__48310_48834;
var G__48844 = chunk__48312_48835;
var G__48845 = count__48313_48836;
var G__48846 = (i__48314_48837 + (1));
seq__48310_48834 = G__48843;
chunk__48312_48835 = G__48844;
count__48313_48836 = G__48845;
i__48314_48837 = G__48846;
continue;
}
} else {
var temp__5735__auto___48847 = cljs.core.seq(seq__48310_48834);
if(temp__5735__auto___48847){
var seq__48310_48848__$1 = temp__5735__auto___48847;
if(cljs.core.chunked_seq_QMARK_(seq__48310_48848__$1)){
var c__4609__auto___48849 = cljs.core.chunk_first(seq__48310_48848__$1);
var G__48850 = cljs.core.chunk_rest(seq__48310_48848__$1);
var G__48851 = c__4609__auto___48849;
var G__48852 = cljs.core.count(c__4609__auto___48849);
var G__48853 = (0);
seq__48310_48834 = G__48850;
chunk__48312_48835 = G__48851;
count__48313_48836 = G__48852;
i__48314_48837 = G__48853;
continue;
} else {
var child_48854 = cljs.core.first(seq__48310_48848__$1);
if(cljs.core.truth_(child_48854)){
node.appendChild(child_48854);


var G__48855 = cljs.core.next(seq__48310_48848__$1);
var G__48856 = null;
var G__48857 = (0);
var G__48858 = (0);
seq__48310_48834 = G__48855;
chunk__48312_48835 = G__48856;
count__48313_48836 = G__48857;
i__48314_48837 = G__48858;
continue;
} else {
var G__48859 = cljs.core.next(seq__48310_48848__$1);
var G__48860 = null;
var G__48861 = (0);
var G__48862 = (0);
seq__48310_48834 = G__48859;
chunk__48312_48835 = G__48860;
count__48313_48836 = G__48861;
i__48314_48837 = G__48862;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48833);
}
}


var G__48863 = seq__48281_48827;
var G__48864 = chunk__48283_48828;
var G__48865 = count__48284_48829;
var G__48866 = (i__48285_48830 + (1));
seq__48281_48827 = G__48863;
chunk__48283_48828 = G__48864;
count__48284_48829 = G__48865;
i__48285_48830 = G__48866;
continue;
} else {
var G__48867 = seq__48281_48827;
var G__48868 = chunk__48283_48828;
var G__48869 = count__48284_48829;
var G__48870 = (i__48285_48830 + (1));
seq__48281_48827 = G__48867;
chunk__48283_48828 = G__48868;
count__48284_48829 = G__48869;
i__48285_48830 = G__48870;
continue;
}
} else {
var temp__5735__auto___48871 = cljs.core.seq(seq__48281_48827);
if(temp__5735__auto___48871){
var seq__48281_48872__$1 = temp__5735__auto___48871;
if(cljs.core.chunked_seq_QMARK_(seq__48281_48872__$1)){
var c__4609__auto___48873 = cljs.core.chunk_first(seq__48281_48872__$1);
var G__48874 = cljs.core.chunk_rest(seq__48281_48872__$1);
var G__48875 = c__4609__auto___48873;
var G__48876 = cljs.core.count(c__4609__auto___48873);
var G__48877 = (0);
seq__48281_48827 = G__48874;
chunk__48283_48828 = G__48875;
count__48284_48829 = G__48876;
i__48285_48830 = G__48877;
continue;
} else {
var child_struct_48878 = cljs.core.first(seq__48281_48872__$1);
if((!((child_struct_48878 == null)))){
if(typeof child_struct_48878 === 'string'){
var text_48879 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48879),child_struct_48878].join(''));
} else {
var children_48880 = shadow.dom.svg_node(child_struct_48878);
if(cljs.core.seq_QMARK_(children_48880)){
var seq__48323_48881 = cljs.core.seq(children_48880);
var chunk__48325_48882 = null;
var count__48326_48883 = (0);
var i__48327_48884 = (0);
while(true){
if((i__48327_48884 < count__48326_48883)){
var child_48885 = chunk__48325_48882.cljs$core$IIndexed$_nth$arity$2(null,i__48327_48884);
if(cljs.core.truth_(child_48885)){
node.appendChild(child_48885);


var G__48886 = seq__48323_48881;
var G__48887 = chunk__48325_48882;
var G__48888 = count__48326_48883;
var G__48889 = (i__48327_48884 + (1));
seq__48323_48881 = G__48886;
chunk__48325_48882 = G__48887;
count__48326_48883 = G__48888;
i__48327_48884 = G__48889;
continue;
} else {
var G__48890 = seq__48323_48881;
var G__48891 = chunk__48325_48882;
var G__48892 = count__48326_48883;
var G__48893 = (i__48327_48884 + (1));
seq__48323_48881 = G__48890;
chunk__48325_48882 = G__48891;
count__48326_48883 = G__48892;
i__48327_48884 = G__48893;
continue;
}
} else {
var temp__5735__auto___48894__$1 = cljs.core.seq(seq__48323_48881);
if(temp__5735__auto___48894__$1){
var seq__48323_48895__$1 = temp__5735__auto___48894__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48323_48895__$1)){
var c__4609__auto___48896 = cljs.core.chunk_first(seq__48323_48895__$1);
var G__48897 = cljs.core.chunk_rest(seq__48323_48895__$1);
var G__48898 = c__4609__auto___48896;
var G__48899 = cljs.core.count(c__4609__auto___48896);
var G__48900 = (0);
seq__48323_48881 = G__48897;
chunk__48325_48882 = G__48898;
count__48326_48883 = G__48899;
i__48327_48884 = G__48900;
continue;
} else {
var child_48905 = cljs.core.first(seq__48323_48895__$1);
if(cljs.core.truth_(child_48905)){
node.appendChild(child_48905);


var G__48906 = cljs.core.next(seq__48323_48895__$1);
var G__48907 = null;
var G__48908 = (0);
var G__48909 = (0);
seq__48323_48881 = G__48906;
chunk__48325_48882 = G__48907;
count__48326_48883 = G__48908;
i__48327_48884 = G__48909;
continue;
} else {
var G__48911 = cljs.core.next(seq__48323_48895__$1);
var G__48912 = null;
var G__48913 = (0);
var G__48914 = (0);
seq__48323_48881 = G__48911;
chunk__48325_48882 = G__48912;
count__48326_48883 = G__48913;
i__48327_48884 = G__48914;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48880);
}
}


var G__48916 = cljs.core.next(seq__48281_48872__$1);
var G__48917 = null;
var G__48918 = (0);
var G__48919 = (0);
seq__48281_48827 = G__48916;
chunk__48283_48828 = G__48917;
count__48284_48829 = G__48918;
i__48285_48830 = G__48919;
continue;
} else {
var G__48920 = cljs.core.next(seq__48281_48872__$1);
var G__48921 = null;
var G__48922 = (0);
var G__48923 = (0);
seq__48281_48827 = G__48920;
chunk__48283_48828 = G__48921;
count__48284_48829 = G__48922;
i__48285_48830 = G__48923;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48334_48924 = shadow.dom._to_svg;
var G__48335_48925 = "string";
var G__48336_48926 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48334_48924,G__48335_48925,G__48336_48926);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48340_48929 = shadow.dom._to_svg;
var G__48341_48930 = "null";
var G__48342_48931 = (function (_){
return null;
});
goog.object.set(G__48340_48929,G__48341_48930,G__48342_48931);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48932 = arguments.length;
var i__4790__auto___48933 = (0);
while(true){
if((i__4790__auto___48933 < len__4789__auto___48932)){
args__4795__auto__.push((arguments[i__4790__auto___48933]));

var G__48935 = (i__4790__auto___48933 + (1));
i__4790__auto___48933 = G__48935;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48344){
var G__48345 = cljs.core.first(seq48344);
var seq48344__$1 = cljs.core.next(seq48344);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48345,seq48344__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48351 = arguments.length;
switch (G__48351) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__48357_48944 = shadow.dom.dom_node(el);
var G__48358_48945 = cljs.core.name(event);
var G__48359_48946 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48357_48944,G__48358_48945,G__48359_48946) : shadow.dom.dom_listen.call(null,G__48357_48944,G__48358_48945,G__48359_48946));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46126__auto___48947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_48366){
var state_val_48367 = (state_48366[(1)]);
if((state_val_48367 === (1))){
var state_48366__$1 = state_48366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48366__$1,(2),once_or_cleanup);
} else {
if((state_val_48367 === (2))){
var inst_48362 = (state_48366[(2)]);
var inst_48363 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48366__$1 = (function (){var statearr_48370 = state_48366;
(statearr_48370[(7)] = inst_48362);

return statearr_48370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48366__$1,inst_48363);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46026__auto__ = null;
var shadow$dom$state_machine__46026__auto____0 = (function (){
var statearr_48371 = [null,null,null,null,null,null,null,null];
(statearr_48371[(0)] = shadow$dom$state_machine__46026__auto__);

(statearr_48371[(1)] = (1));

return statearr_48371;
});
var shadow$dom$state_machine__46026__auto____1 = (function (state_48366){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_48366);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e48372){if((e48372 instanceof Object)){
var ex__46029__auto__ = e48372;
var statearr_48373_48948 = state_48366;
(statearr_48373_48948[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48949 = state_48366;
state_48366 = G__48949;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
shadow$dom$state_machine__46026__auto__ = function(state_48366){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46026__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46026__auto____1.call(this,state_48366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46026__auto____0;
shadow$dom$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46026__auto____1;
return shadow$dom$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_48374 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_48374[(6)] = c__46126__auto___48947);

return statearr_48374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
