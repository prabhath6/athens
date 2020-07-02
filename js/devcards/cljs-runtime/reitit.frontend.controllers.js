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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__49749,match){
var map__49750 = p__49749;
var map__49750__$1 = (((((!((map__49750 == null))))?(((((map__49750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49750):map__49750);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49750__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49750__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49750__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__49756(s__49757){
return (new cljs.core.LazySeq(null,(function (){
var s__49757__$1 = s__49757;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49757__$1);
if(temp__5735__auto__){
var s__49757__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49757__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49757__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49759 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49758 = (0);
while(true){
if((i__49758 < size__4581__auto__)){
var vec__49762 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49758);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49762,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49762,(1),null);
cljs.core.chunk_append(b__49759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__49802 = (i__49758 + (1));
i__49758 = G__49802;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49759),reitit$frontend$controllers$get_identity_$_iter__49756(cljs.core.chunk_rest(s__49757__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49759),null);
}
} else {
var vec__49768 = cljs.core.first(s__49757__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49768,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49768,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__49756(cljs.core.rest(s__49757__$2)));
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
var G__49771 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49771) : f.call(null,G__49771));
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
var seq__49772_49812 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__49773_49813 = null;
var count__49774_49814 = (0);
var i__49775_49815 = (0);
while(true){
if((i__49775_49815 < count__49774_49814)){
var controller_49817 = chunk__49773_49813.cljs$core$IIndexed$_nth$arity$2(null,i__49775_49815);
reitit.frontend.controllers.apply_controller(controller_49817,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__49818 = seq__49772_49812;
var G__49819 = chunk__49773_49813;
var G__49820 = count__49774_49814;
var G__49821 = (i__49775_49815 + (1));
seq__49772_49812 = G__49818;
chunk__49773_49813 = G__49819;
count__49774_49814 = G__49820;
i__49775_49815 = G__49821;
continue;
} else {
var temp__5735__auto___49822 = cljs.core.seq(seq__49772_49812);
if(temp__5735__auto___49822){
var seq__49772_49824__$1 = temp__5735__auto___49822;
if(cljs.core.chunked_seq_QMARK_(seq__49772_49824__$1)){
var c__4609__auto___49825 = cljs.core.chunk_first(seq__49772_49824__$1);
var G__49826 = cljs.core.chunk_rest(seq__49772_49824__$1);
var G__49827 = c__4609__auto___49825;
var G__49828 = cljs.core.count(c__4609__auto___49825);
var G__49829 = (0);
seq__49772_49812 = G__49826;
chunk__49773_49813 = G__49827;
count__49774_49814 = G__49828;
i__49775_49815 = G__49829;
continue;
} else {
var controller_49830 = cljs.core.first(seq__49772_49824__$1);
reitit.frontend.controllers.apply_controller(controller_49830,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__49831 = cljs.core.next(seq__49772_49824__$1);
var G__49832 = null;
var G__49833 = (0);
var G__49834 = (0);
seq__49772_49812 = G__49831;
chunk__49773_49813 = G__49832;
count__49774_49814 = G__49833;
i__49775_49815 = G__49834;
continue;
}
} else {
}
}
break;
}

var seq__49785_49835 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__49786_49836 = null;
var count__49787_49837 = (0);
var i__49788_49838 = (0);
while(true){
if((i__49788_49838 < count__49787_49837)){
var controller_49839 = chunk__49786_49836.cljs$core$IIndexed$_nth$arity$2(null,i__49788_49838);
reitit.frontend.controllers.apply_controller(controller_49839,new cljs.core.Keyword(null,"start","start",-355208981));


var G__49840 = seq__49785_49835;
var G__49841 = chunk__49786_49836;
var G__49842 = count__49787_49837;
var G__49843 = (i__49788_49838 + (1));
seq__49785_49835 = G__49840;
chunk__49786_49836 = G__49841;
count__49787_49837 = G__49842;
i__49788_49838 = G__49843;
continue;
} else {
var temp__5735__auto___49844 = cljs.core.seq(seq__49785_49835);
if(temp__5735__auto___49844){
var seq__49785_49845__$1 = temp__5735__auto___49844;
if(cljs.core.chunked_seq_QMARK_(seq__49785_49845__$1)){
var c__4609__auto___49846 = cljs.core.chunk_first(seq__49785_49845__$1);
var G__49847 = cljs.core.chunk_rest(seq__49785_49845__$1);
var G__49848 = c__4609__auto___49846;
var G__49849 = cljs.core.count(c__4609__auto___49846);
var G__49850 = (0);
seq__49785_49835 = G__49847;
chunk__49786_49836 = G__49848;
count__49787_49837 = G__49849;
i__49788_49838 = G__49850;
continue;
} else {
var controller_49851 = cljs.core.first(seq__49785_49845__$1);
reitit.frontend.controllers.apply_controller(controller_49851,new cljs.core.Keyword(null,"start","start",-355208981));


var G__49852 = cljs.core.next(seq__49785_49845__$1);
var G__49853 = null;
var G__49854 = (0);
var G__49855 = (0);
seq__49785_49835 = G__49852;
chunk__49786_49836 = G__49853;
count__49787_49837 = G__49854;
i__49788_49838 = G__49855;
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
