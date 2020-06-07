goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__79700,match){
var map__79701 = p__79700;
var map__79701__$1 = (((((!((map__79701 == null))))?(((((map__79701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79701):map__79701);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79701__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79701__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79701__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__79703(s__79704){
return (new cljs.core.LazySeq(null,(function (){
var s__79704__$1 = s__79704;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__79704__$1);
if(temp__5735__auto__){
var s__79704__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79704__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__79704__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__79706 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__79705 = (0);
while(true){
if((i__79705 < size__4581__auto__)){
var vec__79707 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__79705);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79707,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79707,(1),null);
cljs.core.chunk_append(b__79706,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__79723 = (i__79705 + (1));
i__79705 = G__79723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79706),reitit$frontend$controllers$get_identity_$_iter__79703(cljs.core.chunk_rest(s__79704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79706),null);
}
} else {
var vec__79710 = cljs.core.first(s__79704__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79710,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79710,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__79703(cljs.core.rest(s__79704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__79714 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__79714) : f.call(null,G__79714));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__79715_79724 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__79716_79725 = null;
var count__79717_79726 = (0);
var i__79718_79727 = (0);
while(true){
if((i__79718_79727 < count__79717_79726)){
var controller_79728 = chunk__79716_79725.cljs$core$IIndexed$_nth$arity$2(null,i__79718_79727);
reitit.frontend.controllers.apply_controller(controller_79728,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__79729 = seq__79715_79724;
var G__79730 = chunk__79716_79725;
var G__79731 = count__79717_79726;
var G__79732 = (i__79718_79727 + (1));
seq__79715_79724 = G__79729;
chunk__79716_79725 = G__79730;
count__79717_79726 = G__79731;
i__79718_79727 = G__79732;
continue;
} else {
var temp__5735__auto___79733 = cljs.core.seq(seq__79715_79724);
if(temp__5735__auto___79733){
var seq__79715_79734__$1 = temp__5735__auto___79733;
if(cljs.core.chunked_seq_QMARK_(seq__79715_79734__$1)){
var c__4609__auto___79735 = cljs.core.chunk_first(seq__79715_79734__$1);
var G__79736 = cljs.core.chunk_rest(seq__79715_79734__$1);
var G__79737 = c__4609__auto___79735;
var G__79738 = cljs.core.count(c__4609__auto___79735);
var G__79739 = (0);
seq__79715_79724 = G__79736;
chunk__79716_79725 = G__79737;
count__79717_79726 = G__79738;
i__79718_79727 = G__79739;
continue;
} else {
var controller_79740 = cljs.core.first(seq__79715_79734__$1);
reitit.frontend.controllers.apply_controller(controller_79740,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__79741 = cljs.core.next(seq__79715_79734__$1);
var G__79742 = null;
var G__79743 = (0);
var G__79744 = (0);
seq__79715_79724 = G__79741;
chunk__79716_79725 = G__79742;
count__79717_79726 = G__79743;
i__79718_79727 = G__79744;
continue;
}
} else {
}
}
break;
}

var seq__79719_79745 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__79720_79746 = null;
var count__79721_79747 = (0);
var i__79722_79748 = (0);
while(true){
if((i__79722_79748 < count__79721_79747)){
var controller_79749 = chunk__79720_79746.cljs$core$IIndexed$_nth$arity$2(null,i__79722_79748);
reitit.frontend.controllers.apply_controller(controller_79749,new cljs.core.Keyword(null,"start","start",-355208981));


var G__79750 = seq__79719_79745;
var G__79751 = chunk__79720_79746;
var G__79752 = count__79721_79747;
var G__79753 = (i__79722_79748 + (1));
seq__79719_79745 = G__79750;
chunk__79720_79746 = G__79751;
count__79721_79747 = G__79752;
i__79722_79748 = G__79753;
continue;
} else {
var temp__5735__auto___79754 = cljs.core.seq(seq__79719_79745);
if(temp__5735__auto___79754){
var seq__79719_79755__$1 = temp__5735__auto___79754;
if(cljs.core.chunked_seq_QMARK_(seq__79719_79755__$1)){
var c__4609__auto___79756 = cljs.core.chunk_first(seq__79719_79755__$1);
var G__79757 = cljs.core.chunk_rest(seq__79719_79755__$1);
var G__79758 = c__4609__auto___79756;
var G__79759 = cljs.core.count(c__4609__auto___79756);
var G__79760 = (0);
seq__79719_79745 = G__79757;
chunk__79720_79746 = G__79758;
count__79721_79747 = G__79759;
i__79722_79748 = G__79760;
continue;
} else {
var controller_79761 = cljs.core.first(seq__79719_79755__$1);
reitit.frontend.controllers.apply_controller(controller_79761,new cljs.core.Keyword(null,"start","start",-355208981));


var G__79762 = cljs.core.next(seq__79719_79755__$1);
var G__79763 = null;
var G__79764 = (0);
var G__79765 = (0);
seq__79719_79745 = G__79762;
chunk__79720_79746 = G__79763;
count__79721_79747 = G__79764;
i__79722_79748 = G__79765;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
