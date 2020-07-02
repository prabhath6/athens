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
return cljs.core.cons((coll[idx]),(function (){var G__57629 = coll;
var G__57630 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57629,G__57630) : shadow.dom.lazy_native_coll_seq.call(null,G__57629,G__57630));
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
var G__57647 = arguments.length;
switch (G__57647) {
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
var G__57649 = arguments.length;
switch (G__57649) {
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
var G__57651 = arguments.length;
switch (G__57651) {
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
var G__57657 = arguments.length;
switch (G__57657) {
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
var G__57673 = arguments.length;
switch (G__57673) {
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
var G__57676 = document;
var G__57677 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57676,G__57677);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__57678 = shadow.dom.dom_node(parent);
var G__57679 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57678,G__57679);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__57681 = shadow.dom.dom_node(el);
var G__57682 = cls;
return goog.dom.classlist.add(G__57681,G__57682);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__57685 = shadow.dom.dom_node(el);
var G__57686 = cls;
return goog.dom.classlist.remove(G__57685,G__57686);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57690 = arguments.length;
switch (G__57690) {
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
var G__57692 = shadow.dom.dom_node(el);
var G__57693 = cls;
return goog.dom.classlist.toggle(G__57692,G__57693);
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
}catch (e57700){if((e57700 instanceof Object)){
var e = e57700;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57700;

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
var seq__57705 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57706 = null;
var count__57707 = (0);
var i__57708 = (0);
while(true){
if((i__57708 < count__57707)){
var el = chunk__57706.cljs$core$IIndexed$_nth$arity$2(null,i__57708);
var handler_58458__$1 = ((function (seq__57705,chunk__57706,count__57707,i__57708,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57705,chunk__57706,count__57707,i__57708,el))
;
var G__57721_58459 = el;
var G__57722_58460 = cljs.core.name(ev);
var G__57723_58461 = handler_58458__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57721_58459,G__57722_58460,G__57723_58461) : shadow.dom.dom_listen.call(null,G__57721_58459,G__57722_58460,G__57723_58461));


var G__58462 = seq__57705;
var G__58463 = chunk__57706;
var G__58464 = count__57707;
var G__58465 = (i__57708 + (1));
seq__57705 = G__58462;
chunk__57706 = G__58463;
count__57707 = G__58464;
i__57708 = G__58465;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57705);
if(temp__5735__auto__){
var seq__57705__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57705__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57705__$1);
var G__58466 = cljs.core.chunk_rest(seq__57705__$1);
var G__58467 = c__4609__auto__;
var G__58468 = cljs.core.count(c__4609__auto__);
var G__58469 = (0);
seq__57705 = G__58466;
chunk__57706 = G__58467;
count__57707 = G__58468;
i__57708 = G__58469;
continue;
} else {
var el = cljs.core.first(seq__57705__$1);
var handler_58470__$1 = ((function (seq__57705,chunk__57706,count__57707,i__57708,el,seq__57705__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57705,chunk__57706,count__57707,i__57708,el,seq__57705__$1,temp__5735__auto__))
;
var G__57726_58471 = el;
var G__57727_58472 = cljs.core.name(ev);
var G__57728_58473 = handler_58470__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57726_58471,G__57727_58472,G__57728_58473) : shadow.dom.dom_listen.call(null,G__57726_58471,G__57727_58472,G__57728_58473));


var G__58474 = cljs.core.next(seq__57705__$1);
var G__58475 = null;
var G__58476 = (0);
var G__58477 = (0);
seq__57705 = G__58474;
chunk__57706 = G__58475;
count__57707 = G__58476;
i__57708 = G__58477;
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
var G__57734 = arguments.length;
switch (G__57734) {
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
var G__57738 = shadow.dom.dom_node(el);
var G__57739 = cljs.core.name(ev);
var G__57740 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57738,G__57739,G__57740) : shadow.dom.dom_listen.call(null,G__57738,G__57739,G__57740));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__57745 = shadow.dom.dom_node(el);
var G__57746 = cljs.core.name(ev);
var G__57747 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__57745,G__57746,G__57747) : shadow.dom.dom_listen_remove.call(null,G__57745,G__57746,G__57747));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57748 = cljs.core.seq(events);
var chunk__57749 = null;
var count__57750 = (0);
var i__57751 = (0);
while(true){
if((i__57751 < count__57750)){
var vec__57761 = chunk__57749.cljs$core$IIndexed$_nth$arity$2(null,i__57751);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57761,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57761,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58479 = seq__57748;
var G__58480 = chunk__57749;
var G__58481 = count__57750;
var G__58482 = (i__57751 + (1));
seq__57748 = G__58479;
chunk__57749 = G__58480;
count__57750 = G__58481;
i__57751 = G__58482;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57748);
if(temp__5735__auto__){
var seq__57748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57748__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57748__$1);
var G__58483 = cljs.core.chunk_rest(seq__57748__$1);
var G__58484 = c__4609__auto__;
var G__58485 = cljs.core.count(c__4609__auto__);
var G__58486 = (0);
seq__57748 = G__58483;
chunk__57749 = G__58484;
count__57750 = G__58485;
i__57751 = G__58486;
continue;
} else {
var vec__57764 = cljs.core.first(seq__57748__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57764,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58487 = cljs.core.next(seq__57748__$1);
var G__58488 = null;
var G__58489 = (0);
var G__58490 = (0);
seq__57748 = G__58487;
chunk__57749 = G__58488;
count__57750 = G__58489;
i__57751 = G__58490;
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
var seq__57767 = cljs.core.seq(styles);
var chunk__57768 = null;
var count__57769 = (0);
var i__57770 = (0);
while(true){
if((i__57770 < count__57769)){
var vec__57783 = chunk__57768.cljs$core$IIndexed$_nth$arity$2(null,i__57770);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57783,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57783,(1),null);
var G__57786_58491 = dom;
var G__57787_58492 = cljs.core.name(k);
var G__57788_58493 = (((v == null))?"":v);
goog.style.setStyle(G__57786_58491,G__57787_58492,G__57788_58493);


var G__58494 = seq__57767;
var G__58495 = chunk__57768;
var G__58496 = count__57769;
var G__58497 = (i__57770 + (1));
seq__57767 = G__58494;
chunk__57768 = G__58495;
count__57769 = G__58496;
i__57770 = G__58497;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57767);
if(temp__5735__auto__){
var seq__57767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57767__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57767__$1);
var G__58498 = cljs.core.chunk_rest(seq__57767__$1);
var G__58499 = c__4609__auto__;
var G__58500 = cljs.core.count(c__4609__auto__);
var G__58501 = (0);
seq__57767 = G__58498;
chunk__57768 = G__58499;
count__57769 = G__58500;
i__57770 = G__58501;
continue;
} else {
var vec__57789 = cljs.core.first(seq__57767__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57789,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57789,(1),null);
var G__57792_58502 = dom;
var G__57793_58503 = cljs.core.name(k);
var G__57794_58504 = (((v == null))?"":v);
goog.style.setStyle(G__57792_58502,G__57793_58503,G__57794_58504);


var G__58505 = cljs.core.next(seq__57767__$1);
var G__58506 = null;
var G__58507 = (0);
var G__58508 = (0);
seq__57767 = G__58505;
chunk__57768 = G__58506;
count__57769 = G__58507;
i__57770 = G__58508;
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
var G__57798_58509 = key;
var G__57798_58510__$1 = (((G__57798_58509 instanceof cljs.core.Keyword))?G__57798_58509.fqn:null);
switch (G__57798_58510__$1) {
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
var ks_58512 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_58512,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_58512,"aria-");
}
})())){
el.setAttribute(ks_58512,value);
} else {
(el[ks_58512] = value);
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
var G__57802 = shadow.dom.dom_node(el);
var G__57803 = cls;
return goog.dom.classlist.contains(G__57802,G__57803);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57813){
var map__57815 = p__57813;
var map__57815__$1 = (((((!((map__57815 == null))))?(((((map__57815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57815):map__57815);
var props = map__57815__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57815__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57820 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57820,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57820,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57820,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__57825 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__57825,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__57825;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__57831 = arguments.length;
switch (G__57831) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__57852){
var vec__57855 = p__57852;
var seq__57856 = cljs.core.seq(vec__57855);
var first__57857 = cljs.core.first(seq__57856);
var seq__57856__$1 = cljs.core.next(seq__57856);
var nn = first__57857;
var first__57857__$1 = cljs.core.first(seq__57856__$1);
var seq__57856__$2 = cljs.core.next(seq__57856__$1);
var np = first__57857__$1;
var nc = seq__57856__$2;
var node = vec__57855;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57860 = nn;
var G__57861 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57860,G__57861) : create_fn.call(null,G__57860,G__57861));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57863 = nn;
var G__57864 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57863,G__57864) : create_fn.call(null,G__57863,G__57864));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__57874 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57874,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57874,(1),null);
var seq__57877_58514 = cljs.core.seq(node_children);
var chunk__57878_58515 = null;
var count__57879_58516 = (0);
var i__57880_58517 = (0);
while(true){
if((i__57880_58517 < count__57879_58516)){
var child_struct_58518 = chunk__57878_58515.cljs$core$IIndexed$_nth$arity$2(null,i__57880_58517);
var children_58519 = shadow.dom.dom_node(child_struct_58518);
if(cljs.core.seq_QMARK_(children_58519)){
var seq__57930_58520 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58519));
var chunk__57932_58521 = null;
var count__57933_58522 = (0);
var i__57934_58523 = (0);
while(true){
if((i__57934_58523 < count__57933_58522)){
var child_58524 = chunk__57932_58521.cljs$core$IIndexed$_nth$arity$2(null,i__57934_58523);
if(cljs.core.truth_(child_58524)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58524);


var G__58525 = seq__57930_58520;
var G__58526 = chunk__57932_58521;
var G__58527 = count__57933_58522;
var G__58528 = (i__57934_58523 + (1));
seq__57930_58520 = G__58525;
chunk__57932_58521 = G__58526;
count__57933_58522 = G__58527;
i__57934_58523 = G__58528;
continue;
} else {
var G__58529 = seq__57930_58520;
var G__58530 = chunk__57932_58521;
var G__58531 = count__57933_58522;
var G__58532 = (i__57934_58523 + (1));
seq__57930_58520 = G__58529;
chunk__57932_58521 = G__58530;
count__57933_58522 = G__58531;
i__57934_58523 = G__58532;
continue;
}
} else {
var temp__5735__auto___58533 = cljs.core.seq(seq__57930_58520);
if(temp__5735__auto___58533){
var seq__57930_58534__$1 = temp__5735__auto___58533;
if(cljs.core.chunked_seq_QMARK_(seq__57930_58534__$1)){
var c__4609__auto___58535 = cljs.core.chunk_first(seq__57930_58534__$1);
var G__58536 = cljs.core.chunk_rest(seq__57930_58534__$1);
var G__58537 = c__4609__auto___58535;
var G__58538 = cljs.core.count(c__4609__auto___58535);
var G__58539 = (0);
seq__57930_58520 = G__58536;
chunk__57932_58521 = G__58537;
count__57933_58522 = G__58538;
i__57934_58523 = G__58539;
continue;
} else {
var child_58540 = cljs.core.first(seq__57930_58534__$1);
if(cljs.core.truth_(child_58540)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58540);


var G__58541 = cljs.core.next(seq__57930_58534__$1);
var G__58542 = null;
var G__58543 = (0);
var G__58544 = (0);
seq__57930_58520 = G__58541;
chunk__57932_58521 = G__58542;
count__57933_58522 = G__58543;
i__57934_58523 = G__58544;
continue;
} else {
var G__58545 = cljs.core.next(seq__57930_58534__$1);
var G__58546 = null;
var G__58547 = (0);
var G__58548 = (0);
seq__57930_58520 = G__58545;
chunk__57932_58521 = G__58546;
count__57933_58522 = G__58547;
i__57934_58523 = G__58548;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58519);
}


var G__58549 = seq__57877_58514;
var G__58550 = chunk__57878_58515;
var G__58551 = count__57879_58516;
var G__58552 = (i__57880_58517 + (1));
seq__57877_58514 = G__58549;
chunk__57878_58515 = G__58550;
count__57879_58516 = G__58551;
i__57880_58517 = G__58552;
continue;
} else {
var temp__5735__auto___58553 = cljs.core.seq(seq__57877_58514);
if(temp__5735__auto___58553){
var seq__57877_58554__$1 = temp__5735__auto___58553;
if(cljs.core.chunked_seq_QMARK_(seq__57877_58554__$1)){
var c__4609__auto___58555 = cljs.core.chunk_first(seq__57877_58554__$1);
var G__58556 = cljs.core.chunk_rest(seq__57877_58554__$1);
var G__58557 = c__4609__auto___58555;
var G__58558 = cljs.core.count(c__4609__auto___58555);
var G__58559 = (0);
seq__57877_58514 = G__58556;
chunk__57878_58515 = G__58557;
count__57879_58516 = G__58558;
i__57880_58517 = G__58559;
continue;
} else {
var child_struct_58560 = cljs.core.first(seq__57877_58554__$1);
var children_58561 = shadow.dom.dom_node(child_struct_58560);
if(cljs.core.seq_QMARK_(children_58561)){
var seq__57952_58562 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58561));
var chunk__57954_58563 = null;
var count__57955_58564 = (0);
var i__57956_58565 = (0);
while(true){
if((i__57956_58565 < count__57955_58564)){
var child_58566 = chunk__57954_58563.cljs$core$IIndexed$_nth$arity$2(null,i__57956_58565);
if(cljs.core.truth_(child_58566)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58566);


var G__58567 = seq__57952_58562;
var G__58568 = chunk__57954_58563;
var G__58569 = count__57955_58564;
var G__58570 = (i__57956_58565 + (1));
seq__57952_58562 = G__58567;
chunk__57954_58563 = G__58568;
count__57955_58564 = G__58569;
i__57956_58565 = G__58570;
continue;
} else {
var G__58571 = seq__57952_58562;
var G__58572 = chunk__57954_58563;
var G__58573 = count__57955_58564;
var G__58574 = (i__57956_58565 + (1));
seq__57952_58562 = G__58571;
chunk__57954_58563 = G__58572;
count__57955_58564 = G__58573;
i__57956_58565 = G__58574;
continue;
}
} else {
var temp__5735__auto___58575__$1 = cljs.core.seq(seq__57952_58562);
if(temp__5735__auto___58575__$1){
var seq__57952_58576__$1 = temp__5735__auto___58575__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57952_58576__$1)){
var c__4609__auto___58577 = cljs.core.chunk_first(seq__57952_58576__$1);
var G__58578 = cljs.core.chunk_rest(seq__57952_58576__$1);
var G__58579 = c__4609__auto___58577;
var G__58580 = cljs.core.count(c__4609__auto___58577);
var G__58581 = (0);
seq__57952_58562 = G__58578;
chunk__57954_58563 = G__58579;
count__57955_58564 = G__58580;
i__57956_58565 = G__58581;
continue;
} else {
var child_58582 = cljs.core.first(seq__57952_58576__$1);
if(cljs.core.truth_(child_58582)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58582);


var G__58583 = cljs.core.next(seq__57952_58576__$1);
var G__58584 = null;
var G__58585 = (0);
var G__58586 = (0);
seq__57952_58562 = G__58583;
chunk__57954_58563 = G__58584;
count__57955_58564 = G__58585;
i__57956_58565 = G__58586;
continue;
} else {
var G__58587 = cljs.core.next(seq__57952_58576__$1);
var G__58588 = null;
var G__58589 = (0);
var G__58590 = (0);
seq__57952_58562 = G__58587;
chunk__57954_58563 = G__58588;
count__57955_58564 = G__58589;
i__57956_58565 = G__58590;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58561);
}


var G__58591 = cljs.core.next(seq__57877_58554__$1);
var G__58592 = null;
var G__58593 = (0);
var G__58594 = (0);
seq__57877_58514 = G__58591;
chunk__57878_58515 = G__58592;
count__57879_58516 = G__58593;
i__57880_58517 = G__58594;
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
var G__57993 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__57993);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58017 = cljs.core.seq(node);
var chunk__58018 = null;
var count__58019 = (0);
var i__58020 = (0);
while(true){
if((i__58020 < count__58019)){
var n = chunk__58018.cljs$core$IIndexed$_nth$arity$2(null,i__58020);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58595 = seq__58017;
var G__58596 = chunk__58018;
var G__58597 = count__58019;
var G__58598 = (i__58020 + (1));
seq__58017 = G__58595;
chunk__58018 = G__58596;
count__58019 = G__58597;
i__58020 = G__58598;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58017);
if(temp__5735__auto__){
var seq__58017__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58017__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58017__$1);
var G__58599 = cljs.core.chunk_rest(seq__58017__$1);
var G__58600 = c__4609__auto__;
var G__58601 = cljs.core.count(c__4609__auto__);
var G__58602 = (0);
seq__58017 = G__58599;
chunk__58018 = G__58600;
count__58019 = G__58601;
i__58020 = G__58602;
continue;
} else {
var n = cljs.core.first(seq__58017__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58603 = cljs.core.next(seq__58017__$1);
var G__58604 = null;
var G__58605 = (0);
var G__58606 = (0);
seq__58017 = G__58603;
chunk__58018 = G__58604;
count__58019 = G__58605;
i__58020 = G__58606;
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
var G__58041 = shadow.dom.dom_node(new$);
var G__58042 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__58041,G__58042);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58060 = arguments.length;
switch (G__58060) {
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
var G__58074 = arguments.length;
switch (G__58074) {
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
var G__58121 = arguments.length;
switch (G__58121) {
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
var len__4789__auto___58610 = arguments.length;
var i__4790__auto___58611 = (0);
while(true){
if((i__4790__auto___58611 < len__4789__auto___58610)){
args__4795__auto__.push((arguments[i__4790__auto___58611]));

var G__58612 = (i__4790__auto___58611 + (1));
i__4790__auto___58611 = G__58612;
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
var seq__58141_58613 = cljs.core.seq(nodes);
var chunk__58142_58614 = null;
var count__58143_58615 = (0);
var i__58144_58616 = (0);
while(true){
if((i__58144_58616 < count__58143_58615)){
var node_58617 = chunk__58142_58614.cljs$core$IIndexed$_nth$arity$2(null,i__58144_58616);
fragment.appendChild(shadow.dom._to_dom(node_58617));


var G__58618 = seq__58141_58613;
var G__58619 = chunk__58142_58614;
var G__58620 = count__58143_58615;
var G__58621 = (i__58144_58616 + (1));
seq__58141_58613 = G__58618;
chunk__58142_58614 = G__58619;
count__58143_58615 = G__58620;
i__58144_58616 = G__58621;
continue;
} else {
var temp__5735__auto___58622 = cljs.core.seq(seq__58141_58613);
if(temp__5735__auto___58622){
var seq__58141_58623__$1 = temp__5735__auto___58622;
if(cljs.core.chunked_seq_QMARK_(seq__58141_58623__$1)){
var c__4609__auto___58624 = cljs.core.chunk_first(seq__58141_58623__$1);
var G__58625 = cljs.core.chunk_rest(seq__58141_58623__$1);
var G__58626 = c__4609__auto___58624;
var G__58627 = cljs.core.count(c__4609__auto___58624);
var G__58628 = (0);
seq__58141_58613 = G__58625;
chunk__58142_58614 = G__58626;
count__58143_58615 = G__58627;
i__58144_58616 = G__58628;
continue;
} else {
var node_58629 = cljs.core.first(seq__58141_58623__$1);
fragment.appendChild(shadow.dom._to_dom(node_58629));


var G__58630 = cljs.core.next(seq__58141_58623__$1);
var G__58631 = null;
var G__58632 = (0);
var G__58633 = (0);
seq__58141_58613 = G__58630;
chunk__58142_58614 = G__58631;
count__58143_58615 = G__58632;
i__58144_58616 = G__58633;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58138){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58138));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58149_58634 = cljs.core.seq(scripts);
var chunk__58150_58635 = null;
var count__58151_58636 = (0);
var i__58152_58637 = (0);
while(true){
if((i__58152_58637 < count__58151_58636)){
var vec__58162_58638 = chunk__58150_58635.cljs$core$IIndexed$_nth$arity$2(null,i__58152_58637);
var script_tag_58639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58162_58638,(0),null);
var script_body_58640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58162_58638,(1),null);
eval(script_body_58640);


var G__58641 = seq__58149_58634;
var G__58642 = chunk__58150_58635;
var G__58643 = count__58151_58636;
var G__58644 = (i__58152_58637 + (1));
seq__58149_58634 = G__58641;
chunk__58150_58635 = G__58642;
count__58151_58636 = G__58643;
i__58152_58637 = G__58644;
continue;
} else {
var temp__5735__auto___58645 = cljs.core.seq(seq__58149_58634);
if(temp__5735__auto___58645){
var seq__58149_58646__$1 = temp__5735__auto___58645;
if(cljs.core.chunked_seq_QMARK_(seq__58149_58646__$1)){
var c__4609__auto___58647 = cljs.core.chunk_first(seq__58149_58646__$1);
var G__58648 = cljs.core.chunk_rest(seq__58149_58646__$1);
var G__58649 = c__4609__auto___58647;
var G__58650 = cljs.core.count(c__4609__auto___58647);
var G__58651 = (0);
seq__58149_58634 = G__58648;
chunk__58150_58635 = G__58649;
count__58151_58636 = G__58650;
i__58152_58637 = G__58651;
continue;
} else {
var vec__58167_58652 = cljs.core.first(seq__58149_58646__$1);
var script_tag_58653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58167_58652,(0),null);
var script_body_58654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58167_58652,(1),null);
eval(script_body_58654);


var G__58655 = cljs.core.next(seq__58149_58646__$1);
var G__58656 = null;
var G__58657 = (0);
var G__58658 = (0);
seq__58149_58634 = G__58655;
chunk__58150_58635 = G__58656;
count__58151_58636 = G__58657;
i__58152_58637 = G__58658;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58171){
var vec__58174 = p__58171;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58174,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58174,(1),null);
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
var G__58186 = shadow.dom.dom_node(el);
var G__58187 = cls;
return goog.dom.getAncestorByClass(G__58186,G__58187);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58192 = arguments.length;
switch (G__58192) {
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
var G__58198 = shadow.dom.dom_node(el);
var G__58199 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__58198,G__58199);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__58201 = shadow.dom.dom_node(el);
var G__58202 = cljs.core.name(tag);
var G__58203 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__58201,G__58202,G__58203);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__58207 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__58207);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__58210 = shadow.dom.dom_node(dom);
var G__58211 = value;
return goog.dom.forms.setValue(G__58210,G__58211);
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
var seq__58219 = cljs.core.seq(style_keys);
var chunk__58220 = null;
var count__58221 = (0);
var i__58222 = (0);
while(true){
if((i__58222 < count__58221)){
var it = chunk__58220.cljs$core$IIndexed$_nth$arity$2(null,i__58222);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58660 = seq__58219;
var G__58661 = chunk__58220;
var G__58662 = count__58221;
var G__58663 = (i__58222 + (1));
seq__58219 = G__58660;
chunk__58220 = G__58661;
count__58221 = G__58662;
i__58222 = G__58663;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58219);
if(temp__5735__auto__){
var seq__58219__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58219__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58219__$1);
var G__58664 = cljs.core.chunk_rest(seq__58219__$1);
var G__58665 = c__4609__auto__;
var G__58666 = cljs.core.count(c__4609__auto__);
var G__58667 = (0);
seq__58219 = G__58664;
chunk__58220 = G__58665;
count__58221 = G__58666;
i__58222 = G__58667;
continue;
} else {
var it = cljs.core.first(seq__58219__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58668 = cljs.core.next(seq__58219__$1);
var G__58669 = null;
var G__58670 = (0);
var G__58671 = (0);
seq__58219 = G__58668;
chunk__58220 = G__58669;
count__58221 = G__58670;
i__58222 = G__58671;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58224,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58228 = k58224;
var G__58228__$1 = (((G__58228 instanceof cljs.core.Keyword))?G__58228.fqn:null);
switch (G__58228__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58224,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58229){
var vec__58230 = p__58229;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58230,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58230,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58223){
var self__ = this;
var G__58223__$1 = this;
return (new cljs.core.RecordIter((0),G__58223__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__58233 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58233(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58225,other58226){
var self__ = this;
var this58225__$1 = this;
return (((!((other58226 == null)))) && ((this58225__$1.constructor === other58226.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58225__$1.x,other58226.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58225__$1.y,other58226.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58225__$1.__extmap,other58226.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58223){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58234 = cljs.core.keyword_identical_QMARK_;
var expr__58235 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58237 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__58238 = expr__58235;
return (pred__58234.cljs$core$IFn$_invoke$arity$2 ? pred__58234.cljs$core$IFn$_invoke$arity$2(G__58237,G__58238) : pred__58234.call(null,G__58237,G__58238));
})())){
return (new shadow.dom.Coordinate(G__58223,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58239 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__58240 = expr__58235;
return (pred__58234.cljs$core$IFn$_invoke$arity$2 ? pred__58234.cljs$core$IFn$_invoke$arity$2(G__58239,G__58240) : pred__58234.call(null,G__58239,G__58240));
})())){
return (new shadow.dom.Coordinate(self__.x,G__58223,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58223),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58223){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58223,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58227){
var extmap__4478__auto__ = (function (){var G__58242 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58227,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58227)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58242);
} else {
return G__58242;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58227),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58227),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__58243 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__58243);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__58246 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__58246);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__58248 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__58248);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58250,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58258 = k58250;
var G__58258__$1 = (((G__58258 instanceof cljs.core.Keyword))?G__58258.fqn:null);
switch (G__58258__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58250,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58260){
var vec__58261 = p__58260;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58261,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58261,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58249){
var self__ = this;
var G__58249__$1 = this;
return (new cljs.core.RecordIter((0),G__58249__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__58268 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58268(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58251,other58252){
var self__ = this;
var this58251__$1 = this;
return (((!((other58252 == null)))) && ((this58251__$1.constructor === other58252.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58251__$1.w,other58252.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58251__$1.h,other58252.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58251__$1.__extmap,other58252.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58249){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58271 = cljs.core.keyword_identical_QMARK_;
var expr__58272 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58274 = new cljs.core.Keyword(null,"w","w",354169001);
var G__58275 = expr__58272;
return (pred__58271.cljs$core$IFn$_invoke$arity$2 ? pred__58271.cljs$core$IFn$_invoke$arity$2(G__58274,G__58275) : pred__58271.call(null,G__58274,G__58275));
})())){
return (new shadow.dom.Size(G__58249,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58277 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__58278 = expr__58272;
return (pred__58271.cljs$core$IFn$_invoke$arity$2 ? pred__58271.cljs$core$IFn$_invoke$arity$2(G__58277,G__58278) : pred__58271.call(null,G__58277,G__58278));
})())){
return (new shadow.dom.Size(self__.w,G__58249,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58249),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58249){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58249,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58254){
var extmap__4478__auto__ = (function (){var G__58286 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58254,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58254)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58286);
} else {
return G__58286;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58254),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58254),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__58289 = shadow.dom.dom_node(el);
return goog.style.getSize(G__58289);
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
var G__58674 = (i + (1));
var G__58675 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58674;
ret = G__58675;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58306){
var vec__58307 = p__58306;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58307,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58307,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58314 = arguments.length;
switch (G__58314) {
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
var G__58319_58677 = new_node;
var G__58320_58678 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__58319_58677,G__58320_58678);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58322_58679 = new_node;
var G__58323_58680 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__58322_58679,G__58323_58680);

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
var G__58681 = ps;
var G__58682 = (i + (1));
el__$1 = G__58681;
i = G__58682;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__58330 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__58330);
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
var G__58337 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__58337);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__58339 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__58339);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58342 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58342,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58342,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58342,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58346_58683 = cljs.core.seq(props);
var chunk__58347_58684 = null;
var count__58348_58685 = (0);
var i__58349_58686 = (0);
while(true){
if((i__58349_58686 < count__58348_58685)){
var vec__58362_58687 = chunk__58347_58684.cljs$core$IIndexed$_nth$arity$2(null,i__58349_58686);
var k_58688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58362_58687,(0),null);
var v_58689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58362_58687,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_58688);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58688),v_58689);


var G__58690 = seq__58346_58683;
var G__58691 = chunk__58347_58684;
var G__58692 = count__58348_58685;
var G__58693 = (i__58349_58686 + (1));
seq__58346_58683 = G__58690;
chunk__58347_58684 = G__58691;
count__58348_58685 = G__58692;
i__58349_58686 = G__58693;
continue;
} else {
var temp__5735__auto___58694 = cljs.core.seq(seq__58346_58683);
if(temp__5735__auto___58694){
var seq__58346_58695__$1 = temp__5735__auto___58694;
if(cljs.core.chunked_seq_QMARK_(seq__58346_58695__$1)){
var c__4609__auto___58696 = cljs.core.chunk_first(seq__58346_58695__$1);
var G__58697 = cljs.core.chunk_rest(seq__58346_58695__$1);
var G__58698 = c__4609__auto___58696;
var G__58699 = cljs.core.count(c__4609__auto___58696);
var G__58700 = (0);
seq__58346_58683 = G__58697;
chunk__58347_58684 = G__58698;
count__58348_58685 = G__58699;
i__58349_58686 = G__58700;
continue;
} else {
var vec__58368_58701 = cljs.core.first(seq__58346_58695__$1);
var k_58702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58368_58701,(0),null);
var v_58703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58368_58701,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_58702);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58702),v_58703);


var G__58704 = cljs.core.next(seq__58346_58695__$1);
var G__58705 = null;
var G__58706 = (0);
var G__58707 = (0);
seq__58346_58683 = G__58704;
chunk__58347_58684 = G__58705;
count__58348_58685 = G__58706;
i__58349_58686 = G__58707;
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
var vec__58377 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58377,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58377,(1),null);
var seq__58380_58708 = cljs.core.seq(node_children);
var chunk__58382_58709 = null;
var count__58383_58710 = (0);
var i__58384_58711 = (0);
while(true){
if((i__58384_58711 < count__58383_58710)){
var child_struct_58712 = chunk__58382_58709.cljs$core$IIndexed$_nth$arity$2(null,i__58384_58711);
if((!((child_struct_58712 == null)))){
if(typeof child_struct_58712 === 'string'){
var text_58713 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58713),child_struct_58712].join(''));
} else {
var children_58714 = shadow.dom.svg_node(child_struct_58712);
if(cljs.core.seq_QMARK_(children_58714)){
var seq__58416_58715 = cljs.core.seq(children_58714);
var chunk__58418_58716 = null;
var count__58419_58717 = (0);
var i__58420_58718 = (0);
while(true){
if((i__58420_58718 < count__58419_58717)){
var child_58719 = chunk__58418_58716.cljs$core$IIndexed$_nth$arity$2(null,i__58420_58718);
if(cljs.core.truth_(child_58719)){
node.appendChild(child_58719);


var G__58720 = seq__58416_58715;
var G__58721 = chunk__58418_58716;
var G__58722 = count__58419_58717;
var G__58723 = (i__58420_58718 + (1));
seq__58416_58715 = G__58720;
chunk__58418_58716 = G__58721;
count__58419_58717 = G__58722;
i__58420_58718 = G__58723;
continue;
} else {
var G__58724 = seq__58416_58715;
var G__58725 = chunk__58418_58716;
var G__58726 = count__58419_58717;
var G__58727 = (i__58420_58718 + (1));
seq__58416_58715 = G__58724;
chunk__58418_58716 = G__58725;
count__58419_58717 = G__58726;
i__58420_58718 = G__58727;
continue;
}
} else {
var temp__5735__auto___58728 = cljs.core.seq(seq__58416_58715);
if(temp__5735__auto___58728){
var seq__58416_58729__$1 = temp__5735__auto___58728;
if(cljs.core.chunked_seq_QMARK_(seq__58416_58729__$1)){
var c__4609__auto___58730 = cljs.core.chunk_first(seq__58416_58729__$1);
var G__58731 = cljs.core.chunk_rest(seq__58416_58729__$1);
var G__58732 = c__4609__auto___58730;
var G__58733 = cljs.core.count(c__4609__auto___58730);
var G__58734 = (0);
seq__58416_58715 = G__58731;
chunk__58418_58716 = G__58732;
count__58419_58717 = G__58733;
i__58420_58718 = G__58734;
continue;
} else {
var child_58735 = cljs.core.first(seq__58416_58729__$1);
if(cljs.core.truth_(child_58735)){
node.appendChild(child_58735);


var G__58736 = cljs.core.next(seq__58416_58729__$1);
var G__58737 = null;
var G__58738 = (0);
var G__58739 = (0);
seq__58416_58715 = G__58736;
chunk__58418_58716 = G__58737;
count__58419_58717 = G__58738;
i__58420_58718 = G__58739;
continue;
} else {
var G__58740 = cljs.core.next(seq__58416_58729__$1);
var G__58741 = null;
var G__58742 = (0);
var G__58743 = (0);
seq__58416_58715 = G__58740;
chunk__58418_58716 = G__58741;
count__58419_58717 = G__58742;
i__58420_58718 = G__58743;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58714);
}
}


var G__58744 = seq__58380_58708;
var G__58745 = chunk__58382_58709;
var G__58746 = count__58383_58710;
var G__58747 = (i__58384_58711 + (1));
seq__58380_58708 = G__58744;
chunk__58382_58709 = G__58745;
count__58383_58710 = G__58746;
i__58384_58711 = G__58747;
continue;
} else {
var G__58748 = seq__58380_58708;
var G__58749 = chunk__58382_58709;
var G__58750 = count__58383_58710;
var G__58751 = (i__58384_58711 + (1));
seq__58380_58708 = G__58748;
chunk__58382_58709 = G__58749;
count__58383_58710 = G__58750;
i__58384_58711 = G__58751;
continue;
}
} else {
var temp__5735__auto___58752 = cljs.core.seq(seq__58380_58708);
if(temp__5735__auto___58752){
var seq__58380_58753__$1 = temp__5735__auto___58752;
if(cljs.core.chunked_seq_QMARK_(seq__58380_58753__$1)){
var c__4609__auto___58754 = cljs.core.chunk_first(seq__58380_58753__$1);
var G__58755 = cljs.core.chunk_rest(seq__58380_58753__$1);
var G__58756 = c__4609__auto___58754;
var G__58757 = cljs.core.count(c__4609__auto___58754);
var G__58758 = (0);
seq__58380_58708 = G__58755;
chunk__58382_58709 = G__58756;
count__58383_58710 = G__58757;
i__58384_58711 = G__58758;
continue;
} else {
var child_struct_58759 = cljs.core.first(seq__58380_58753__$1);
if((!((child_struct_58759 == null)))){
if(typeof child_struct_58759 === 'string'){
var text_58760 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58760),child_struct_58759].join(''));
} else {
var children_58761 = shadow.dom.svg_node(child_struct_58759);
if(cljs.core.seq_QMARK_(children_58761)){
var seq__58422_58762 = cljs.core.seq(children_58761);
var chunk__58424_58763 = null;
var count__58425_58764 = (0);
var i__58426_58765 = (0);
while(true){
if((i__58426_58765 < count__58425_58764)){
var child_58766 = chunk__58424_58763.cljs$core$IIndexed$_nth$arity$2(null,i__58426_58765);
if(cljs.core.truth_(child_58766)){
node.appendChild(child_58766);


var G__58767 = seq__58422_58762;
var G__58768 = chunk__58424_58763;
var G__58769 = count__58425_58764;
var G__58770 = (i__58426_58765 + (1));
seq__58422_58762 = G__58767;
chunk__58424_58763 = G__58768;
count__58425_58764 = G__58769;
i__58426_58765 = G__58770;
continue;
} else {
var G__58771 = seq__58422_58762;
var G__58772 = chunk__58424_58763;
var G__58773 = count__58425_58764;
var G__58774 = (i__58426_58765 + (1));
seq__58422_58762 = G__58771;
chunk__58424_58763 = G__58772;
count__58425_58764 = G__58773;
i__58426_58765 = G__58774;
continue;
}
} else {
var temp__5735__auto___58775__$1 = cljs.core.seq(seq__58422_58762);
if(temp__5735__auto___58775__$1){
var seq__58422_58776__$1 = temp__5735__auto___58775__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58422_58776__$1)){
var c__4609__auto___58777 = cljs.core.chunk_first(seq__58422_58776__$1);
var G__58778 = cljs.core.chunk_rest(seq__58422_58776__$1);
var G__58779 = c__4609__auto___58777;
var G__58780 = cljs.core.count(c__4609__auto___58777);
var G__58781 = (0);
seq__58422_58762 = G__58778;
chunk__58424_58763 = G__58779;
count__58425_58764 = G__58780;
i__58426_58765 = G__58781;
continue;
} else {
var child_58782 = cljs.core.first(seq__58422_58776__$1);
if(cljs.core.truth_(child_58782)){
node.appendChild(child_58782);


var G__58783 = cljs.core.next(seq__58422_58776__$1);
var G__58784 = null;
var G__58785 = (0);
var G__58786 = (0);
seq__58422_58762 = G__58783;
chunk__58424_58763 = G__58784;
count__58425_58764 = G__58785;
i__58426_58765 = G__58786;
continue;
} else {
var G__58787 = cljs.core.next(seq__58422_58776__$1);
var G__58788 = null;
var G__58789 = (0);
var G__58790 = (0);
seq__58422_58762 = G__58787;
chunk__58424_58763 = G__58788;
count__58425_58764 = G__58789;
i__58426_58765 = G__58790;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58761);
}
}


var G__58791 = cljs.core.next(seq__58380_58753__$1);
var G__58792 = null;
var G__58793 = (0);
var G__58794 = (0);
seq__58380_58708 = G__58791;
chunk__58382_58709 = G__58792;
count__58383_58710 = G__58793;
i__58384_58711 = G__58794;
continue;
} else {
var G__58795 = cljs.core.next(seq__58380_58753__$1);
var G__58796 = null;
var G__58797 = (0);
var G__58798 = (0);
seq__58380_58708 = G__58795;
chunk__58382_58709 = G__58796;
count__58383_58710 = G__58797;
i__58384_58711 = G__58798;
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

var G__58428_58799 = shadow.dom._to_svg;
var G__58429_58800 = "string";
var G__58430_58801 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__58428_58799,G__58429_58800,G__58430_58801);

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

var G__58431_58802 = shadow.dom._to_svg;
var G__58432_58803 = "null";
var G__58433_58804 = (function (_){
return null;
});
goog.object.set(G__58431_58802,G__58432_58803,G__58433_58804);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58805 = arguments.length;
var i__4790__auto___58806 = (0);
while(true){
if((i__4790__auto___58806 < len__4789__auto___58805)){
args__4795__auto__.push((arguments[i__4790__auto___58806]));

var G__58807 = (i__4790__auto___58806 + (1));
i__4790__auto___58806 = G__58807;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58434){
var G__58435 = cljs.core.first(seq58434);
var seq58434__$1 = cljs.core.next(seq58434);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58435,seq58434__$1);
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
var G__58437 = arguments.length;
switch (G__58437) {
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
var G__58438_58809 = shadow.dom.dom_node(el);
var G__58439_58810 = cljs.core.name(event);
var G__58440_58811 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58438_58809,G__58439_58810,G__58440_58811) : shadow.dom.dom_listen.call(null,G__58438_58809,G__58439_58810,G__58440_58811));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__55910__auto___58812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55911__auto__ = (function (){var switch__55731__auto__ = (function (state_58445){
var state_val_58446 = (state_58445[(1)]);
if((state_val_58446 === (1))){
var state_58445__$1 = state_58445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58445__$1,(2),once_or_cleanup);
} else {
if((state_val_58446 === (2))){
var inst_58442 = (state_58445[(2)]);
var inst_58443 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58445__$1 = (function (){var statearr_58447 = state_58445;
(statearr_58447[(7)] = inst_58442);

return statearr_58447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58445__$1,inst_58443);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55732__auto__ = null;
var shadow$dom$state_machine__55732__auto____0 = (function (){
var statearr_58448 = [null,null,null,null,null,null,null,null];
(statearr_58448[(0)] = shadow$dom$state_machine__55732__auto__);

(statearr_58448[(1)] = (1));

return statearr_58448;
});
var shadow$dom$state_machine__55732__auto____1 = (function (state_58445){
while(true){
var ret_value__55733__auto__ = (function (){try{while(true){
var result__55734__auto__ = switch__55731__auto__(state_58445);
if(cljs.core.keyword_identical_QMARK_(result__55734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55734__auto__;
}
break;
}
}catch (e58449){if((e58449 instanceof Object)){
var ex__55735__auto__ = e58449;
var statearr_58450_58813 = state_58445;
(statearr_58450_58813[(5)] = ex__55735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58814 = state_58445;
state_58445 = G__58814;
continue;
} else {
return ret_value__55733__auto__;
}
break;
}
});
shadow$dom$state_machine__55732__auto__ = function(state_58445){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55732__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55732__auto____1.call(this,state_58445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55732__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55732__auto____0;
shadow$dom$state_machine__55732__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55732__auto____1;
return shadow$dom$state_machine__55732__auto__;
})()
})();
var state__55912__auto__ = (function (){var statearr_58451 = (f__55911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55911__auto__.cljs$core$IFn$_invoke$arity$0() : f__55911__auto__.call(null));
(statearr_58451[(6)] = c__55910__auto___58812);

return statearr_58451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55912__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
