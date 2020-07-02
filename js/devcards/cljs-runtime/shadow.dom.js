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
return cljs.core.cons((coll[idx]),(function (){var G__39630 = coll;
var G__39631 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39630,G__39631) : shadow.dom.lazy_native_coll_seq.call(null,G__39630,G__39631));
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
var G__39637 = arguments.length;
switch (G__39637) {
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
var G__39644 = arguments.length;
switch (G__39644) {
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
var G__39650 = arguments.length;
switch (G__39650) {
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
var G__39658 = arguments.length;
switch (G__39658) {
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
var G__39684 = arguments.length;
switch (G__39684) {
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
var G__39689 = document;
var G__39690 = shadow.dom.dom_node(el);
return goog.dom.contains(G__39689,G__39690);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__39696 = shadow.dom.dom_node(parent);
var G__39697 = shadow.dom.dom_node(el);
return goog.dom.contains(G__39696,G__39697);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__39703 = shadow.dom.dom_node(el);
var G__39704 = cls;
return goog.dom.classlist.add(G__39703,G__39704);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__39706 = shadow.dom.dom_node(el);
var G__39707 = cls;
return goog.dom.classlist.remove(G__39706,G__39707);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39713 = arguments.length;
switch (G__39713) {
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
var G__39715 = shadow.dom.dom_node(el);
var G__39716 = cls;
return goog.dom.classlist.toggle(G__39715,G__39716);
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
}catch (e39718){if((e39718 instanceof Object)){
var e = e39718;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39718;

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
var seq__39731 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39732 = null;
var count__39733 = (0);
var i__39734 = (0);
while(true){
if((i__39734 < count__39733)){
var el = chunk__39732.cljs$core$IIndexed$_nth$arity$2(null,i__39734);
var handler_40737__$1 = ((function (seq__39731,chunk__39732,count__39733,i__39734,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39731,chunk__39732,count__39733,i__39734,el))
;
var G__39747_40738 = el;
var G__39748_40739 = cljs.core.name(ev);
var G__39749_40740 = handler_40737__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39747_40738,G__39748_40739,G__39749_40740) : shadow.dom.dom_listen.call(null,G__39747_40738,G__39748_40739,G__39749_40740));


var G__40741 = seq__39731;
var G__40742 = chunk__39732;
var G__40743 = count__39733;
var G__40744 = (i__39734 + (1));
seq__39731 = G__40741;
chunk__39732 = G__40742;
count__39733 = G__40743;
i__39734 = G__40744;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39731);
if(temp__5735__auto__){
var seq__39731__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39731__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39731__$1);
var G__40745 = cljs.core.chunk_rest(seq__39731__$1);
var G__40746 = c__4609__auto__;
var G__40747 = cljs.core.count(c__4609__auto__);
var G__40748 = (0);
seq__39731 = G__40745;
chunk__39732 = G__40746;
count__39733 = G__40747;
i__39734 = G__40748;
continue;
} else {
var el = cljs.core.first(seq__39731__$1);
var handler_40749__$1 = ((function (seq__39731,chunk__39732,count__39733,i__39734,el,seq__39731__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39731,chunk__39732,count__39733,i__39734,el,seq__39731__$1,temp__5735__auto__))
;
var G__39750_40752 = el;
var G__39751_40753 = cljs.core.name(ev);
var G__39752_40754 = handler_40749__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39750_40752,G__39751_40753,G__39752_40754) : shadow.dom.dom_listen.call(null,G__39750_40752,G__39751_40753,G__39752_40754));


var G__40755 = cljs.core.next(seq__39731__$1);
var G__40756 = null;
var G__40757 = (0);
var G__40758 = (0);
seq__39731 = G__40755;
chunk__39732 = G__40756;
count__39733 = G__40757;
i__39734 = G__40758;
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
var G__39754 = arguments.length;
switch (G__39754) {
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
var G__39755 = shadow.dom.dom_node(el);
var G__39756 = cljs.core.name(ev);
var G__39757 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39755,G__39756,G__39757) : shadow.dom.dom_listen.call(null,G__39755,G__39756,G__39757));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__39758 = shadow.dom.dom_node(el);
var G__39759 = cljs.core.name(ev);
var G__39760 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__39758,G__39759,G__39760) : shadow.dom.dom_listen_remove.call(null,G__39758,G__39759,G__39760));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__39761 = cljs.core.seq(events);
var chunk__39762 = null;
var count__39763 = (0);
var i__39764 = (0);
while(true){
if((i__39764 < count__39763)){
var vec__39779 = chunk__39762.cljs$core$IIndexed$_nth$arity$2(null,i__39764);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39779,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39779,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40788 = seq__39761;
var G__40789 = chunk__39762;
var G__40790 = count__39763;
var G__40791 = (i__39764 + (1));
seq__39761 = G__40788;
chunk__39762 = G__40789;
count__39763 = G__40790;
i__39764 = G__40791;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39761);
if(temp__5735__auto__){
var seq__39761__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39761__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39761__$1);
var G__40792 = cljs.core.chunk_rest(seq__39761__$1);
var G__40793 = c__4609__auto__;
var G__40794 = cljs.core.count(c__4609__auto__);
var G__40795 = (0);
seq__39761 = G__40792;
chunk__39762 = G__40793;
count__39763 = G__40794;
i__39764 = G__40795;
continue;
} else {
var vec__39782 = cljs.core.first(seq__39761__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39782,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39782,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40796 = cljs.core.next(seq__39761__$1);
var G__40797 = null;
var G__40798 = (0);
var G__40799 = (0);
seq__39761 = G__40796;
chunk__39762 = G__40797;
count__39763 = G__40798;
i__39764 = G__40799;
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
var seq__39785 = cljs.core.seq(styles);
var chunk__39786 = null;
var count__39787 = (0);
var i__39788 = (0);
while(true){
if((i__39788 < count__39787)){
var vec__39801 = chunk__39786.cljs$core$IIndexed$_nth$arity$2(null,i__39788);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39801,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39801,(1),null);
var G__39804_40800 = dom;
var G__39805_40801 = cljs.core.name(k);
var G__39806_40802 = (((v == null))?"":v);
goog.style.setStyle(G__39804_40800,G__39805_40801,G__39806_40802);


var G__40803 = seq__39785;
var G__40804 = chunk__39786;
var G__40805 = count__39787;
var G__40806 = (i__39788 + (1));
seq__39785 = G__40803;
chunk__39786 = G__40804;
count__39787 = G__40805;
i__39788 = G__40806;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39785);
if(temp__5735__auto__){
var seq__39785__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39785__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39785__$1);
var G__40807 = cljs.core.chunk_rest(seq__39785__$1);
var G__40808 = c__4609__auto__;
var G__40809 = cljs.core.count(c__4609__auto__);
var G__40810 = (0);
seq__39785 = G__40807;
chunk__39786 = G__40808;
count__39787 = G__40809;
i__39788 = G__40810;
continue;
} else {
var vec__39807 = cljs.core.first(seq__39785__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39807,(1),null);
var G__39810_40811 = dom;
var G__39811_40812 = cljs.core.name(k);
var G__39812_40813 = (((v == null))?"":v);
goog.style.setStyle(G__39810_40811,G__39811_40812,G__39812_40813);


var G__40814 = cljs.core.next(seq__39785__$1);
var G__40815 = null;
var G__40816 = (0);
var G__40817 = (0);
seq__39785 = G__40814;
chunk__39786 = G__40815;
count__39787 = G__40816;
i__39788 = G__40817;
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
var G__39813_40818 = key;
var G__39813_40819__$1 = (((G__39813_40818 instanceof cljs.core.Keyword))?G__39813_40818.fqn:null);
switch (G__39813_40819__$1) {
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
var ks_40821 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_40821,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_40821,"aria-");
}
})())){
el.setAttribute(ks_40821,value);
} else {
(el[ks_40821] = value);
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
var G__39814 = shadow.dom.dom_node(el);
var G__39815 = cls;
return goog.dom.classlist.contains(G__39814,G__39815);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39824){
var map__39825 = p__39824;
var map__39825__$1 = (((((!((map__39825 == null))))?(((((map__39825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39825):map__39825);
var props = map__39825__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39825__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39831 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39831,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39831,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39831,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39834 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39834,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39834;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39838 = arguments.length;
switch (G__39838) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39843){
var vec__39844 = p__39843;
var seq__39845 = cljs.core.seq(vec__39844);
var first__39846 = cljs.core.first(seq__39845);
var seq__39845__$1 = cljs.core.next(seq__39845);
var nn = first__39846;
var first__39846__$1 = cljs.core.first(seq__39845__$1);
var seq__39845__$2 = cljs.core.next(seq__39845__$1);
var np = first__39846__$1;
var nc = seq__39845__$2;
var node = vec__39844;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39849 = nn;
var G__39850 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39849,G__39850) : create_fn.call(null,G__39849,G__39850));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39852 = nn;
var G__39853 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39852,G__39853) : create_fn.call(null,G__39852,G__39853));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39860 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39860,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39860,(1),null);
var seq__39863_40829 = cljs.core.seq(node_children);
var chunk__39864_40830 = null;
var count__39865_40831 = (0);
var i__39866_40832 = (0);
while(true){
if((i__39866_40832 < count__39865_40831)){
var child_struct_40833 = chunk__39864_40830.cljs$core$IIndexed$_nth$arity$2(null,i__39866_40832);
var children_40834 = shadow.dom.dom_node(child_struct_40833);
if(cljs.core.seq_QMARK_(children_40834)){
var seq__39905_40837 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40834));
var chunk__39907_40838 = null;
var count__39908_40839 = (0);
var i__39909_40840 = (0);
while(true){
if((i__39909_40840 < count__39908_40839)){
var child_40842 = chunk__39907_40838.cljs$core$IIndexed$_nth$arity$2(null,i__39909_40840);
if(cljs.core.truth_(child_40842)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40842);


var G__40844 = seq__39905_40837;
var G__40845 = chunk__39907_40838;
var G__40846 = count__39908_40839;
var G__40847 = (i__39909_40840 + (1));
seq__39905_40837 = G__40844;
chunk__39907_40838 = G__40845;
count__39908_40839 = G__40846;
i__39909_40840 = G__40847;
continue;
} else {
var G__40848 = seq__39905_40837;
var G__40849 = chunk__39907_40838;
var G__40850 = count__39908_40839;
var G__40851 = (i__39909_40840 + (1));
seq__39905_40837 = G__40848;
chunk__39907_40838 = G__40849;
count__39908_40839 = G__40850;
i__39909_40840 = G__40851;
continue;
}
} else {
var temp__5735__auto___40852 = cljs.core.seq(seq__39905_40837);
if(temp__5735__auto___40852){
var seq__39905_40853__$1 = temp__5735__auto___40852;
if(cljs.core.chunked_seq_QMARK_(seq__39905_40853__$1)){
var c__4609__auto___40854 = cljs.core.chunk_first(seq__39905_40853__$1);
var G__40855 = cljs.core.chunk_rest(seq__39905_40853__$1);
var G__40856 = c__4609__auto___40854;
var G__40857 = cljs.core.count(c__4609__auto___40854);
var G__40858 = (0);
seq__39905_40837 = G__40855;
chunk__39907_40838 = G__40856;
count__39908_40839 = G__40857;
i__39909_40840 = G__40858;
continue;
} else {
var child_40859 = cljs.core.first(seq__39905_40853__$1);
if(cljs.core.truth_(child_40859)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40859);


var G__40861 = cljs.core.next(seq__39905_40853__$1);
var G__40862 = null;
var G__40863 = (0);
var G__40864 = (0);
seq__39905_40837 = G__40861;
chunk__39907_40838 = G__40862;
count__39908_40839 = G__40863;
i__39909_40840 = G__40864;
continue;
} else {
var G__40866 = cljs.core.next(seq__39905_40853__$1);
var G__40867 = null;
var G__40868 = (0);
var G__40869 = (0);
seq__39905_40837 = G__40866;
chunk__39907_40838 = G__40867;
count__39908_40839 = G__40868;
i__39909_40840 = G__40869;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40834);
}


var G__40874 = seq__39863_40829;
var G__40875 = chunk__39864_40830;
var G__40876 = count__39865_40831;
var G__40877 = (i__39866_40832 + (1));
seq__39863_40829 = G__40874;
chunk__39864_40830 = G__40875;
count__39865_40831 = G__40876;
i__39866_40832 = G__40877;
continue;
} else {
var temp__5735__auto___40878 = cljs.core.seq(seq__39863_40829);
if(temp__5735__auto___40878){
var seq__39863_40885__$1 = temp__5735__auto___40878;
if(cljs.core.chunked_seq_QMARK_(seq__39863_40885__$1)){
var c__4609__auto___40888 = cljs.core.chunk_first(seq__39863_40885__$1);
var G__40890 = cljs.core.chunk_rest(seq__39863_40885__$1);
var G__40891 = c__4609__auto___40888;
var G__40892 = cljs.core.count(c__4609__auto___40888);
var G__40893 = (0);
seq__39863_40829 = G__40890;
chunk__39864_40830 = G__40891;
count__39865_40831 = G__40892;
i__39866_40832 = G__40893;
continue;
} else {
var child_struct_40895 = cljs.core.first(seq__39863_40885__$1);
var children_40896 = shadow.dom.dom_node(child_struct_40895);
if(cljs.core.seq_QMARK_(children_40896)){
var seq__39924_40899 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40896));
var chunk__39926_40900 = null;
var count__39927_40901 = (0);
var i__39928_40902 = (0);
while(true){
if((i__39928_40902 < count__39927_40901)){
var child_40906 = chunk__39926_40900.cljs$core$IIndexed$_nth$arity$2(null,i__39928_40902);
if(cljs.core.truth_(child_40906)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40906);


var G__40907 = seq__39924_40899;
var G__40908 = chunk__39926_40900;
var G__40909 = count__39927_40901;
var G__40910 = (i__39928_40902 + (1));
seq__39924_40899 = G__40907;
chunk__39926_40900 = G__40908;
count__39927_40901 = G__40909;
i__39928_40902 = G__40910;
continue;
} else {
var G__40911 = seq__39924_40899;
var G__40912 = chunk__39926_40900;
var G__40913 = count__39927_40901;
var G__40914 = (i__39928_40902 + (1));
seq__39924_40899 = G__40911;
chunk__39926_40900 = G__40912;
count__39927_40901 = G__40913;
i__39928_40902 = G__40914;
continue;
}
} else {
var temp__5735__auto___40916__$1 = cljs.core.seq(seq__39924_40899);
if(temp__5735__auto___40916__$1){
var seq__39924_40923__$1 = temp__5735__auto___40916__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39924_40923__$1)){
var c__4609__auto___40927 = cljs.core.chunk_first(seq__39924_40923__$1);
var G__40929 = cljs.core.chunk_rest(seq__39924_40923__$1);
var G__40930 = c__4609__auto___40927;
var G__40931 = cljs.core.count(c__4609__auto___40927);
var G__40932 = (0);
seq__39924_40899 = G__40929;
chunk__39926_40900 = G__40930;
count__39927_40901 = G__40931;
i__39928_40902 = G__40932;
continue;
} else {
var child_40936 = cljs.core.first(seq__39924_40923__$1);
if(cljs.core.truth_(child_40936)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40936);


var G__40942 = cljs.core.next(seq__39924_40923__$1);
var G__40943 = null;
var G__40944 = (0);
var G__40945 = (0);
seq__39924_40899 = G__40942;
chunk__39926_40900 = G__40943;
count__39927_40901 = G__40944;
i__39928_40902 = G__40945;
continue;
} else {
var G__40950 = cljs.core.next(seq__39924_40923__$1);
var G__40951 = null;
var G__40952 = (0);
var G__40953 = (0);
seq__39924_40899 = G__40950;
chunk__39926_40900 = G__40951;
count__39927_40901 = G__40952;
i__39928_40902 = G__40953;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40896);
}


var G__40961 = cljs.core.next(seq__39863_40885__$1);
var G__40962 = null;
var G__40963 = (0);
var G__40964 = (0);
seq__39863_40829 = G__40961;
chunk__39864_40830 = G__40962;
count__39865_40831 = G__40963;
i__39866_40832 = G__40964;
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
var G__39973 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__39973);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__39996 = cljs.core.seq(node);
var chunk__39997 = null;
var count__39998 = (0);
var i__39999 = (0);
while(true){
if((i__39999 < count__39998)){
var n = chunk__39997.cljs$core$IIndexed$_nth$arity$2(null,i__39999);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41000 = seq__39996;
var G__41001 = chunk__39997;
var G__41002 = count__39998;
var G__41003 = (i__39999 + (1));
seq__39996 = G__41000;
chunk__39997 = G__41001;
count__39998 = G__41002;
i__39999 = G__41003;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39996);
if(temp__5735__auto__){
var seq__39996__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39996__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39996__$1);
var G__41009 = cljs.core.chunk_rest(seq__39996__$1);
var G__41010 = c__4609__auto__;
var G__41011 = cljs.core.count(c__4609__auto__);
var G__41012 = (0);
seq__39996 = G__41009;
chunk__39997 = G__41010;
count__39998 = G__41011;
i__39999 = G__41012;
continue;
} else {
var n = cljs.core.first(seq__39996__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41014 = cljs.core.next(seq__39996__$1);
var G__41015 = null;
var G__41016 = (0);
var G__41017 = (0);
seq__39996 = G__41014;
chunk__39997 = G__41015;
count__39998 = G__41016;
i__39999 = G__41017;
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
var G__40013 = shadow.dom.dom_node(new$);
var G__40014 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__40013,G__40014);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40018 = arguments.length;
switch (G__40018) {
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
var G__40023 = arguments.length;
switch (G__40023) {
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
var G__40033 = arguments.length;
switch (G__40033) {
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
var len__4789__auto___41060 = arguments.length;
var i__4790__auto___41061 = (0);
while(true){
if((i__4790__auto___41061 < len__4789__auto___41060)){
args__4795__auto__.push((arguments[i__4790__auto___41061]));

var G__41063 = (i__4790__auto___41061 + (1));
i__4790__auto___41061 = G__41063;
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
var seq__40049_41064 = cljs.core.seq(nodes);
var chunk__40050_41065 = null;
var count__40051_41066 = (0);
var i__40052_41067 = (0);
while(true){
if((i__40052_41067 < count__40051_41066)){
var node_41070 = chunk__40050_41065.cljs$core$IIndexed$_nth$arity$2(null,i__40052_41067);
fragment.appendChild(shadow.dom._to_dom(node_41070));


var G__41071 = seq__40049_41064;
var G__41072 = chunk__40050_41065;
var G__41073 = count__40051_41066;
var G__41074 = (i__40052_41067 + (1));
seq__40049_41064 = G__41071;
chunk__40050_41065 = G__41072;
count__40051_41066 = G__41073;
i__40052_41067 = G__41074;
continue;
} else {
var temp__5735__auto___41078 = cljs.core.seq(seq__40049_41064);
if(temp__5735__auto___41078){
var seq__40049_41079__$1 = temp__5735__auto___41078;
if(cljs.core.chunked_seq_QMARK_(seq__40049_41079__$1)){
var c__4609__auto___41080 = cljs.core.chunk_first(seq__40049_41079__$1);
var G__41081 = cljs.core.chunk_rest(seq__40049_41079__$1);
var G__41082 = c__4609__auto___41080;
var G__41083 = cljs.core.count(c__4609__auto___41080);
var G__41084 = (0);
seq__40049_41064 = G__41081;
chunk__40050_41065 = G__41082;
count__40051_41066 = G__41083;
i__40052_41067 = G__41084;
continue;
} else {
var node_41086 = cljs.core.first(seq__40049_41079__$1);
fragment.appendChild(shadow.dom._to_dom(node_41086));


var G__41088 = cljs.core.next(seq__40049_41079__$1);
var G__41089 = null;
var G__41090 = (0);
var G__41091 = (0);
seq__40049_41064 = G__41088;
chunk__40050_41065 = G__41089;
count__40051_41066 = G__41090;
i__40052_41067 = G__41091;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40043){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40043));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40065_41096 = cljs.core.seq(scripts);
var chunk__40066_41097 = null;
var count__40067_41098 = (0);
var i__40068_41099 = (0);
while(true){
if((i__40068_41099 < count__40067_41098)){
var vec__40085_41102 = chunk__40066_41097.cljs$core$IIndexed$_nth$arity$2(null,i__40068_41099);
var script_tag_41103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40085_41102,(0),null);
var script_body_41104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40085_41102,(1),null);
eval(script_body_41104);


var G__41105 = seq__40065_41096;
var G__41106 = chunk__40066_41097;
var G__41107 = count__40067_41098;
var G__41108 = (i__40068_41099 + (1));
seq__40065_41096 = G__41105;
chunk__40066_41097 = G__41106;
count__40067_41098 = G__41107;
i__40068_41099 = G__41108;
continue;
} else {
var temp__5735__auto___41109 = cljs.core.seq(seq__40065_41096);
if(temp__5735__auto___41109){
var seq__40065_41112__$1 = temp__5735__auto___41109;
if(cljs.core.chunked_seq_QMARK_(seq__40065_41112__$1)){
var c__4609__auto___41113 = cljs.core.chunk_first(seq__40065_41112__$1);
var G__41114 = cljs.core.chunk_rest(seq__40065_41112__$1);
var G__41115 = c__4609__auto___41113;
var G__41116 = cljs.core.count(c__4609__auto___41113);
var G__41117 = (0);
seq__40065_41096 = G__41114;
chunk__40066_41097 = G__41115;
count__40067_41098 = G__41116;
i__40068_41099 = G__41117;
continue;
} else {
var vec__40089_41118 = cljs.core.first(seq__40065_41112__$1);
var script_tag_41119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40089_41118,(0),null);
var script_body_41120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40089_41118,(1),null);
eval(script_body_41120);


var G__41131 = cljs.core.next(seq__40065_41112__$1);
var G__41132 = null;
var G__41133 = (0);
var G__41134 = (0);
seq__40065_41096 = G__41131;
chunk__40066_41097 = G__41132;
count__40067_41098 = G__41133;
i__40068_41099 = G__41134;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__40093){
var vec__40098 = p__40093;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40098,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40098,(1),null);
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
var G__40106 = shadow.dom.dom_node(el);
var G__40107 = cls;
return goog.dom.getAncestorByClass(G__40106,G__40107);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40114 = arguments.length;
switch (G__40114) {
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
var G__40116 = shadow.dom.dom_node(el);
var G__40117 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__40116,G__40117);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__40123 = shadow.dom.dom_node(el);
var G__40124 = cljs.core.name(tag);
var G__40125 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__40123,G__40124,G__40125);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__40130 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__40130);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__40143 = shadow.dom.dom_node(dom);
var G__40144 = value;
return goog.dom.forms.setValue(G__40143,G__40144);
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
var seq__40165 = cljs.core.seq(style_keys);
var chunk__40166 = null;
var count__40167 = (0);
var i__40168 = (0);
while(true){
if((i__40168 < count__40167)){
var it = chunk__40166.cljs$core$IIndexed$_nth$arity$2(null,i__40168);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41155 = seq__40165;
var G__41156 = chunk__40166;
var G__41157 = count__40167;
var G__41158 = (i__40168 + (1));
seq__40165 = G__41155;
chunk__40166 = G__41156;
count__40167 = G__41157;
i__40168 = G__41158;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40165);
if(temp__5735__auto__){
var seq__40165__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40165__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40165__$1);
var G__41164 = cljs.core.chunk_rest(seq__40165__$1);
var G__41165 = c__4609__auto__;
var G__41166 = cljs.core.count(c__4609__auto__);
var G__41167 = (0);
seq__40165 = G__41164;
chunk__40166 = G__41165;
count__40167 = G__41166;
i__40168 = G__41167;
continue;
} else {
var it = cljs.core.first(seq__40165__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41169 = cljs.core.next(seq__40165__$1);
var G__41170 = null;
var G__41171 = (0);
var G__41172 = (0);
seq__40165 = G__41169;
chunk__40166 = G__41170;
count__40167 = G__41171;
i__40168 = G__41172;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k40233,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__40255 = k40233;
var G__40255__$1 = (((G__40255 instanceof cljs.core.Keyword))?G__40255.fqn:null);
switch (G__40255__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40233,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__40263){
var vec__40267 = p__40263;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40232){
var self__ = this;
var G__40232__$1 = this;
return (new cljs.core.RecordIter((0),G__40232__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__40292 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__40292(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40236,other40237){
var self__ = this;
var this40236__$1 = this;
return (((!((other40237 == null)))) && ((this40236__$1.constructor === other40237.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40236__$1.x,other40237.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40236__$1.y,other40237.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40236__$1.__extmap,other40237.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__40232){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__40300 = cljs.core.keyword_identical_QMARK_;
var expr__40301 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__40310 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__40311 = expr__40301;
return (pred__40300.cljs$core$IFn$_invoke$arity$2 ? pred__40300.cljs$core$IFn$_invoke$arity$2(G__40310,G__40311) : pred__40300.call(null,G__40310,G__40311));
})())){
return (new shadow.dom.Coordinate(G__40232,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40315 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__40316 = expr__40301;
return (pred__40300.cljs$core$IFn$_invoke$arity$2 ? pred__40300.cljs$core$IFn$_invoke$arity$2(G__40315,G__40316) : pred__40300.call(null,G__40315,G__40316));
})())){
return (new shadow.dom.Coordinate(self__.x,G__40232,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__40232),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__40232){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40232,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40243){
var extmap__4478__auto__ = (function (){var G__40330 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40243,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40243)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40330);
} else {
return G__40330;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40243),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40243),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__40338 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__40338);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__40345 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__40345);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__40354 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__40354);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k40357,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__40365 = k40357;
var G__40365__$1 = (((G__40365 instanceof cljs.core.Keyword))?G__40365.fqn:null);
switch (G__40365__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40357,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__40367){
var vec__40368 = p__40367;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40368,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40368,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40356){
var self__ = this;
var G__40356__$1 = this;
return (new cljs.core.RecordIter((0),G__40356__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__40378 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__40378(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40358,other40359){
var self__ = this;
var this40358__$1 = this;
return (((!((other40359 == null)))) && ((this40358__$1.constructor === other40359.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40358__$1.w,other40359.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40358__$1.h,other40359.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40358__$1.__extmap,other40359.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__40356){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__40384 = cljs.core.keyword_identical_QMARK_;
var expr__40385 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__40387 = new cljs.core.Keyword(null,"w","w",354169001);
var G__40388 = expr__40385;
return (pred__40384.cljs$core$IFn$_invoke$arity$2 ? pred__40384.cljs$core$IFn$_invoke$arity$2(G__40387,G__40388) : pred__40384.call(null,G__40387,G__40388));
})())){
return (new shadow.dom.Size(G__40356,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40389 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__40390 = expr__40385;
return (pred__40384.cljs$core$IFn$_invoke$arity$2 ? pred__40384.cljs$core$IFn$_invoke$arity$2(G__40389,G__40390) : pred__40384.call(null,G__40389,G__40390));
})())){
return (new shadow.dom.Size(self__.w,G__40356,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__40356),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__40356){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40356,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40360){
var extmap__4478__auto__ = (function (){var G__40410 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40360,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40360)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40410);
} else {
return G__40410;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40360),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40360),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__40419 = shadow.dom.dom_node(el);
return goog.style.getSize(G__40419);
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
var G__41339 = (i + (1));
var G__41340 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41339;
ret = G__41340;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40434){
var vec__40435 = p__40434;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40435,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40435,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40440 = arguments.length;
switch (G__40440) {
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
var G__40442_41364 = new_node;
var G__40443_41365 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__40442_41364,G__40443_41365);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__40447_41368 = new_node;
var G__40448_41369 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__40447_41368,G__40448_41369);

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
var G__41374 = ps;
var G__41375 = (i + (1));
el__$1 = G__41374;
i = G__41375;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__40456 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__40456);
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
var G__40467 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__40467);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__40470 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__40470);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40478 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40478,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40478,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40478,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40485_41398 = cljs.core.seq(props);
var chunk__40486_41399 = null;
var count__40487_41400 = (0);
var i__40488_41401 = (0);
while(true){
if((i__40488_41401 < count__40487_41400)){
var vec__40503_41404 = chunk__40486_41399.cljs$core$IIndexed$_nth$arity$2(null,i__40488_41401);
var k_41405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40503_41404,(0),null);
var v_41406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40503_41404,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_41405);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41405),v_41406);


var G__41410 = seq__40485_41398;
var G__41411 = chunk__40486_41399;
var G__41412 = count__40487_41400;
var G__41413 = (i__40488_41401 + (1));
seq__40485_41398 = G__41410;
chunk__40486_41399 = G__41411;
count__40487_41400 = G__41412;
i__40488_41401 = G__41413;
continue;
} else {
var temp__5735__auto___41416 = cljs.core.seq(seq__40485_41398);
if(temp__5735__auto___41416){
var seq__40485_41418__$1 = temp__5735__auto___41416;
if(cljs.core.chunked_seq_QMARK_(seq__40485_41418__$1)){
var c__4609__auto___41419 = cljs.core.chunk_first(seq__40485_41418__$1);
var G__41420 = cljs.core.chunk_rest(seq__40485_41418__$1);
var G__41421 = c__4609__auto___41419;
var G__41422 = cljs.core.count(c__4609__auto___41419);
var G__41423 = (0);
seq__40485_41398 = G__41420;
chunk__40486_41399 = G__41421;
count__40487_41400 = G__41422;
i__40488_41401 = G__41423;
continue;
} else {
var vec__40508_41425 = cljs.core.first(seq__40485_41418__$1);
var k_41426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40508_41425,(0),null);
var v_41427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40508_41425,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_41426);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41426),v_41427);


var G__41439 = cljs.core.next(seq__40485_41418__$1);
var G__41440 = null;
var G__41441 = (0);
var G__41442 = (0);
seq__40485_41398 = G__41439;
chunk__40486_41399 = G__41440;
count__40487_41400 = G__41441;
i__40488_41401 = G__41442;
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
var vec__40523 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40523,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40523,(1),null);
var seq__40527_41448 = cljs.core.seq(node_children);
var chunk__40529_41449 = null;
var count__40530_41450 = (0);
var i__40531_41451 = (0);
while(true){
if((i__40531_41451 < count__40530_41450)){
var child_struct_41454 = chunk__40529_41449.cljs$core$IIndexed$_nth$arity$2(null,i__40531_41451);
if((!((child_struct_41454 == null)))){
if(typeof child_struct_41454 === 'string'){
var text_41455 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41455),child_struct_41454].join(''));
} else {
var children_41456 = shadow.dom.svg_node(child_struct_41454);
if(cljs.core.seq_QMARK_(children_41456)){
var seq__40572_41457 = cljs.core.seq(children_41456);
var chunk__40574_41458 = null;
var count__40575_41459 = (0);
var i__40576_41460 = (0);
while(true){
if((i__40576_41460 < count__40575_41459)){
var child_41465 = chunk__40574_41458.cljs$core$IIndexed$_nth$arity$2(null,i__40576_41460);
if(cljs.core.truth_(child_41465)){
node.appendChild(child_41465);


var G__41467 = seq__40572_41457;
var G__41468 = chunk__40574_41458;
var G__41469 = count__40575_41459;
var G__41470 = (i__40576_41460 + (1));
seq__40572_41457 = G__41467;
chunk__40574_41458 = G__41468;
count__40575_41459 = G__41469;
i__40576_41460 = G__41470;
continue;
} else {
var G__41471 = seq__40572_41457;
var G__41472 = chunk__40574_41458;
var G__41473 = count__40575_41459;
var G__41474 = (i__40576_41460 + (1));
seq__40572_41457 = G__41471;
chunk__40574_41458 = G__41472;
count__40575_41459 = G__41473;
i__40576_41460 = G__41474;
continue;
}
} else {
var temp__5735__auto___41476 = cljs.core.seq(seq__40572_41457);
if(temp__5735__auto___41476){
var seq__40572_41477__$1 = temp__5735__auto___41476;
if(cljs.core.chunked_seq_QMARK_(seq__40572_41477__$1)){
var c__4609__auto___41478 = cljs.core.chunk_first(seq__40572_41477__$1);
var G__41479 = cljs.core.chunk_rest(seq__40572_41477__$1);
var G__41480 = c__4609__auto___41478;
var G__41481 = cljs.core.count(c__4609__auto___41478);
var G__41482 = (0);
seq__40572_41457 = G__41479;
chunk__40574_41458 = G__41480;
count__40575_41459 = G__41481;
i__40576_41460 = G__41482;
continue;
} else {
var child_41484 = cljs.core.first(seq__40572_41477__$1);
if(cljs.core.truth_(child_41484)){
node.appendChild(child_41484);


var G__41485 = cljs.core.next(seq__40572_41477__$1);
var G__41486 = null;
var G__41487 = (0);
var G__41488 = (0);
seq__40572_41457 = G__41485;
chunk__40574_41458 = G__41486;
count__40575_41459 = G__41487;
i__40576_41460 = G__41488;
continue;
} else {
var G__41493 = cljs.core.next(seq__40572_41477__$1);
var G__41494 = null;
var G__41495 = (0);
var G__41496 = (0);
seq__40572_41457 = G__41493;
chunk__40574_41458 = G__41494;
count__40575_41459 = G__41495;
i__40576_41460 = G__41496;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41456);
}
}


var G__41498 = seq__40527_41448;
var G__41499 = chunk__40529_41449;
var G__41500 = count__40530_41450;
var G__41501 = (i__40531_41451 + (1));
seq__40527_41448 = G__41498;
chunk__40529_41449 = G__41499;
count__40530_41450 = G__41500;
i__40531_41451 = G__41501;
continue;
} else {
var G__41502 = seq__40527_41448;
var G__41503 = chunk__40529_41449;
var G__41504 = count__40530_41450;
var G__41505 = (i__40531_41451 + (1));
seq__40527_41448 = G__41502;
chunk__40529_41449 = G__41503;
count__40530_41450 = G__41504;
i__40531_41451 = G__41505;
continue;
}
} else {
var temp__5735__auto___41506 = cljs.core.seq(seq__40527_41448);
if(temp__5735__auto___41506){
var seq__40527_41507__$1 = temp__5735__auto___41506;
if(cljs.core.chunked_seq_QMARK_(seq__40527_41507__$1)){
var c__4609__auto___41508 = cljs.core.chunk_first(seq__40527_41507__$1);
var G__41509 = cljs.core.chunk_rest(seq__40527_41507__$1);
var G__41510 = c__4609__auto___41508;
var G__41511 = cljs.core.count(c__4609__auto___41508);
var G__41512 = (0);
seq__40527_41448 = G__41509;
chunk__40529_41449 = G__41510;
count__40530_41450 = G__41511;
i__40531_41451 = G__41512;
continue;
} else {
var child_struct_41515 = cljs.core.first(seq__40527_41507__$1);
if((!((child_struct_41515 == null)))){
if(typeof child_struct_41515 === 'string'){
var text_41516 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41516),child_struct_41515].join(''));
} else {
var children_41517 = shadow.dom.svg_node(child_struct_41515);
if(cljs.core.seq_QMARK_(children_41517)){
var seq__40587_41518 = cljs.core.seq(children_41517);
var chunk__40589_41519 = null;
var count__40590_41520 = (0);
var i__40591_41521 = (0);
while(true){
if((i__40591_41521 < count__40590_41520)){
var child_41524 = chunk__40589_41519.cljs$core$IIndexed$_nth$arity$2(null,i__40591_41521);
if(cljs.core.truth_(child_41524)){
node.appendChild(child_41524);


var G__41525 = seq__40587_41518;
var G__41526 = chunk__40589_41519;
var G__41527 = count__40590_41520;
var G__41528 = (i__40591_41521 + (1));
seq__40587_41518 = G__41525;
chunk__40589_41519 = G__41526;
count__40590_41520 = G__41527;
i__40591_41521 = G__41528;
continue;
} else {
var G__41529 = seq__40587_41518;
var G__41530 = chunk__40589_41519;
var G__41531 = count__40590_41520;
var G__41532 = (i__40591_41521 + (1));
seq__40587_41518 = G__41529;
chunk__40589_41519 = G__41530;
count__40590_41520 = G__41531;
i__40591_41521 = G__41532;
continue;
}
} else {
var temp__5735__auto___41542__$1 = cljs.core.seq(seq__40587_41518);
if(temp__5735__auto___41542__$1){
var seq__40587_41544__$1 = temp__5735__auto___41542__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40587_41544__$1)){
var c__4609__auto___41545 = cljs.core.chunk_first(seq__40587_41544__$1);
var G__41546 = cljs.core.chunk_rest(seq__40587_41544__$1);
var G__41547 = c__4609__auto___41545;
var G__41548 = cljs.core.count(c__4609__auto___41545);
var G__41549 = (0);
seq__40587_41518 = G__41546;
chunk__40589_41519 = G__41547;
count__40590_41520 = G__41548;
i__40591_41521 = G__41549;
continue;
} else {
var child_41551 = cljs.core.first(seq__40587_41544__$1);
if(cljs.core.truth_(child_41551)){
node.appendChild(child_41551);


var G__41553 = cljs.core.next(seq__40587_41544__$1);
var G__41554 = null;
var G__41555 = (0);
var G__41556 = (0);
seq__40587_41518 = G__41553;
chunk__40589_41519 = G__41554;
count__40590_41520 = G__41555;
i__40591_41521 = G__41556;
continue;
} else {
var G__41558 = cljs.core.next(seq__40587_41544__$1);
var G__41559 = null;
var G__41560 = (0);
var G__41561 = (0);
seq__40587_41518 = G__41558;
chunk__40589_41519 = G__41559;
count__40590_41520 = G__41560;
i__40591_41521 = G__41561;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41517);
}
}


var G__41563 = cljs.core.next(seq__40527_41507__$1);
var G__41564 = null;
var G__41565 = (0);
var G__41566 = (0);
seq__40527_41448 = G__41563;
chunk__40529_41449 = G__41564;
count__40530_41450 = G__41565;
i__40531_41451 = G__41566;
continue;
} else {
var G__41568 = cljs.core.next(seq__40527_41507__$1);
var G__41569 = null;
var G__41570 = (0);
var G__41571 = (0);
seq__40527_41448 = G__41568;
chunk__40529_41449 = G__41569;
count__40530_41450 = G__41570;
i__40531_41451 = G__41571;
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

var G__40603_41572 = shadow.dom._to_svg;
var G__40604_41573 = "string";
var G__40605_41574 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__40603_41572,G__40604_41573,G__40605_41574);

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

var G__40609_41588 = shadow.dom._to_svg;
var G__40610_41589 = "null";
var G__40611_41590 = (function (_){
return null;
});
goog.object.set(G__40609_41588,G__40610_41589,G__40611_41590);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41593 = arguments.length;
var i__4790__auto___41595 = (0);
while(true){
if((i__4790__auto___41595 < len__4789__auto___41593)){
args__4795__auto__.push((arguments[i__4790__auto___41595]));

var G__41598 = (i__4790__auto___41595 + (1));
i__4790__auto___41595 = G__41598;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40613){
var G__40614 = cljs.core.first(seq40613);
var seq40613__$1 = cljs.core.next(seq40613);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40614,seq40613__$1);
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
var G__40622 = arguments.length;
switch (G__40622) {
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
var G__40625_41621 = shadow.dom.dom_node(el);
var G__40626_41622 = cljs.core.name(event);
var G__40627_41623 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40625_41621,G__40626_41622,G__40627_41623) : shadow.dom.dom_listen.call(null,G__40625_41621,G__40626_41622,G__40627_41623));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__39488__auto___41628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39489__auto__ = (function (){var switch__39465__auto__ = (function (state_40648){
var state_val_40651 = (state_40648[(1)]);
if((state_val_40651 === (1))){
var state_40648__$1 = state_40648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40648__$1,(2),once_or_cleanup);
} else {
if((state_val_40651 === (2))){
var inst_40641 = (state_40648[(2)]);
var inst_40642 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40648__$1 = (function (){var statearr_40661 = state_40648;
(statearr_40661[(7)] = inst_40641);

return statearr_40661;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40648__$1,inst_40642);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__39466__auto__ = null;
var shadow$dom$state_machine__39466__auto____0 = (function (){
var statearr_40667 = [null,null,null,null,null,null,null,null];
(statearr_40667[(0)] = shadow$dom$state_machine__39466__auto__);

(statearr_40667[(1)] = (1));

return statearr_40667;
});
var shadow$dom$state_machine__39466__auto____1 = (function (state_40648){
while(true){
var ret_value__39467__auto__ = (function (){try{while(true){
var result__39468__auto__ = switch__39465__auto__(state_40648);
if(cljs.core.keyword_identical_QMARK_(result__39468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39468__auto__;
}
break;
}
}catch (e40668){if((e40668 instanceof Object)){
var ex__39469__auto__ = e40668;
var statearr_40675_41636 = state_40648;
(statearr_40675_41636[(5)] = ex__39469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40668;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41637 = state_40648;
state_40648 = G__41637;
continue;
} else {
return ret_value__39467__auto__;
}
break;
}
});
shadow$dom$state_machine__39466__auto__ = function(state_40648){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__39466__auto____0.call(this);
case 1:
return shadow$dom$state_machine__39466__auto____1.call(this,state_40648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__39466__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__39466__auto____0;
shadow$dom$state_machine__39466__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__39466__auto____1;
return shadow$dom$state_machine__39466__auto__;
})()
})();
var state__39490__auto__ = (function (){var statearr_40681 = (f__39489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39489__auto__.cljs$core$IFn$_invoke$arity$0() : f__39489__auto__.call(null));
(statearr_40681[(6)] = c__39488__auto___41628);

return statearr_40681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39490__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
