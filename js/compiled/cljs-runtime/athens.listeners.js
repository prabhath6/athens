goog.provide('athens.listeners');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.events');
goog.require('re_frame.core');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyCodes');

athens.listeners.mouse_down_bullet = (function athens$listeners$mouse_down_bullet(e){
var class_list = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.classList);
if(cljs.core.truth_(cljs.core.some((function (p1__74421_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bullet",p1__74421_SHARP_);
}),class_list))){
var start_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null);
var uid = e.target.dataset.uid;
var on_move = (athens.listeners.mouse_move_bullet.cljs$core$IFn$_invoke$arity$2 ? athens.listeners.mouse_move_bullet.cljs$core$IFn$_invoke$arity$2(start_pos,uid) : athens.listeners.mouse_move_bullet.call(null,start_pos,uid));
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return (e.target.onmouseup = (athens.listeners.mouse_up_bullet.cljs$core$IFn$_invoke$arity$1 ? athens.listeners.mouse_up_bullet.cljs$core$IFn$_invoke$arity$1(on_move) : athens.listeners.mouse_up_bullet.call(null,on_move)));
} else {
return null;
}
});
athens.listeners.mouse_up_bullet = (function athens$listeners$mouse_up_bullet(on_move){
return (function (_){
var map__74424 = cljs.core.deref((function (){var G__74425 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__74425) : re_frame.core.subscribe.call(null,G__74425));
})());
var map__74424__$1 = (((((!((map__74424 == null))))?(((((map__74424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74424):map__74424);
var target_uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74424__$1,new cljs.core.Keyword("closest","uid","closest/uid",-582260451));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74424__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74424__$1,new cljs.core.Keyword("closest","kind","closest/kind",429209294));
if(cljs.core.truth_((function (){var and__4174__auto__ = uid;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = kind;
if(cljs.core.truth_(and__4174__auto____$1)){
return target_uid;
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
var G__74429_74450 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop-bullet","drop-bullet",1177869489),uid,target_uid,kind], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74429_74450) : re_frame.core.dispatch.call(null,G__74429_74450));
} else {
}

var G__74430_74451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74430_74451) : re_frame.core.dispatch.call(null,G__74430_74451));

return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
/**
 * Must set hidden to true for bullet, otherwise bullet is captured when calling `elementFromPoint`.
 *   Closest child always takes precedent over closest sibling, because .block-contents is nested within .block-container.
 *   `cljs-oops` provides macros that let you bypass null `when` checks
 */
athens.listeners.mouse_move_bullet = (function athens$listeners$mouse_move_bullet(start_pos,uid){
return (function (e){
var cX = e.clientX;
var cY = e.clientY;
var x = (cX - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_pos));
var y = (cY - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_pos));
(e.target.hidden = true);

var closest_child = document.elementFromPoint(cX,cY).closest(".block-contents");
var closest_sibling = document.elementFromPoint(cX,cY).closest(".block-container");
var closest_child_uid = (cljs.core.truth_(closest_child)?closest_child.dataset.uid:null);
var closest_sibling_uid = (cljs.core.truth_(closest_sibling)?closest_sibling.dataset.uid:null);
var closest_uid = (function (){var or__4185__auto__ = closest_child_uid;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return closest_sibling_uid;
}
})();
var closest_kind = (cljs.core.truth_(closest_child_uid)?new cljs.core.Keyword(null,"child","child",623967545):(cljs.core.truth_(closest_sibling_uid)?new cljs.core.Keyword(null,"sibling","sibling",-1183865000):null));
(e.target.hidden = false);

var G__74431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid,new cljs.core.Keyword("closest","uid","closest/uid",-582260451),closest_uid,new cljs.core.Keyword("closest","kind","closest/kind",429209294),closest_kind], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74431) : re_frame.core.dispatch.call(null,G__74431));
});
});
athens.listeners.mouse_down_block = (function athens$listeners$mouse_down_block(e){
var closest_block = e.target.closest(".block-contents");
var closest_block_header = e.target.closest(".block-header");
var closest_page_header = e.target.closest(".page-header");
var closest = (function (){var or__4185__auto__ = closest_block;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = closest_block_header;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return closest_page_header;
}
}
})();
if(cljs.core.truth_(closest)){
var G__74432 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),closest.dataset.uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74432) : re_frame.core.dispatch.call(null,G__74432));
} else {
return null;
}
});
athens.listeners.mouse_over_bullet = (function athens$listeners$mouse_over_bullet(e){
var class_list = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.classList);
var closest = e.target.closest(".tooltip");
var uid = e.target.dataset.uid;
var tooltip_uid = cljs.core.deref((function (){var G__74434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__74434) : re_frame.core.subscribe.call(null,G__74434));
})());
if(cljs.core.truth_(cljs.core.some((function (p1__74433_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bullet",p1__74433_SHARP_);
}),class_list))){
var G__74435 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74435) : re_frame.core.dispatch.call(null,G__74435));
} else {
if(cljs.core.truth_(closest)){
return null;
} else {
if((tooltip_uid == null)){
return null;
} else {
var G__74436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74436) : re_frame.core.dispatch.call(null,G__74436));

}
}
}
});
athens.listeners.mouse_down_outside_athena = (function athens$listeners$mouse_down_outside_athena(e){
var athena_QMARK_ = cljs.core.deref((function (){var G__74437 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athena","athena",-1523991628)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__74437) : re_frame.core.subscribe.call(null,G__74437));
})());
var closest = e.target.closest(".athena");
if(cljs.core.truth_((function (){var and__4174__auto__ = athena_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (closest == null);
} else {
return and__4174__auto__;
}
})())){
var G__74438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74438) : re_frame.core.dispatch.call(null,G__74438));
} else {
return null;
}
});
athens.listeners.key_down = (function athens$listeners$key_down(e){
var key = e.keyCode;
var ctrl = e.ctrlKey;
var meta = e.metaKey;
var shift = e.shiftKey;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.Z))?(function (){var and__4174__auto__ = meta;
if(cljs.core.truth_(and__4174__auto__)){
return shift;
} else {
return and__4174__auto__;
}
})():false))){
var G__74439 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo","redo",501190664)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74439) : re_frame.core.dispatch.call(null,G__74439));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.Z))?meta:false))){
var G__74440 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74440) : re_frame.core.dispatch.call(null,G__74440));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.K))?meta:false))){
var G__74441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74441) : re_frame.core.dispatch.call(null,G__74441));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.G))?ctrl:false))){
var G__74442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-devtool","toggle-devtool",-1568832653)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74442) : re_frame.core.dispatch.call(null,G__74442));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.R))?ctrl:false))){
var G__74443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74443) : re_frame.core.dispatch.call(null,G__74443));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.L))?ctrl:false))){
var G__74444 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-left-sidebar","toggle-left-sidebar",-468830841)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74444) : re_frame.core.dispatch.call(null,G__74444));
} else {
return null;
}
}
}
}
}
}
});
athens.listeners.init = (function athens$listeners$init(){
goog.events.listen(window,goog.events.EventType.MOUSEDOWN,athens.listeners.mouse_down_block);

goog.events.listen(window,goog.events.EventType.MOUSEDOWN,athens.listeners.mouse_down_bullet);

goog.events.listen(window,goog.events.EventType.MOUSEOVER,athens.listeners.mouse_over_bullet);

goog.events.listen(window,goog.events.EventType.MOUSEDOWN,athens.listeners.mouse_down_outside_athena);

return goog.events.listen(window,goog.events.EventType.KEYDOWN,athens.listeners.key_down);
});

//# sourceMappingURL=athens.listeners.js.map
