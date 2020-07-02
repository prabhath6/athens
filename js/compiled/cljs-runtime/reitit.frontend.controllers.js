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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__79169,match){
var map__79171 = p__79169;
var map__79171__$1 = (((((!((map__79171 == null))))?(((((map__79171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79171):map__79171);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79171__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79171__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79171__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__79178(s__79179){
return (new cljs.core.LazySeq(null,(function (){
var s__79179__$1 = s__79179;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__79179__$1);
if(temp__5735__auto__){
var s__79179__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79179__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__79179__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__79181 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__79180 = (0);
while(true){
if((i__79180 < size__4581__auto__)){
var vec__79185 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__79180);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79185,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79185,(1),null);
cljs.core.chunk_append(b__79181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__79249 = (i__79180 + (1));
i__79180 = G__79249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79181),reitit$frontend$controllers$get_identity_$_iter__79178(cljs.core.chunk_rest(s__79179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79181),null);
}
} else {
var vec__79188 = cljs.core.first(s__79179__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79188,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79188,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__79178(cljs.core.rest(s__79179__$2)));
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
var G__79194 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__79194) : f.call(null,G__79194));
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
var seq__79209_79259 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__79210_79260 = null;
var count__79211_79261 = (0);
var i__79212_79262 = (0);
while(true){
if((i__79212_79262 < count__79211_79261)){
var controller_79266 = chunk__79210_79260.cljs$core$IIndexed$_nth$arity$2(null,i__79212_79262);
reitit.frontend.controllers.apply_controller(controller_79266,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__79267 = seq__79209_79259;
var G__79268 = chunk__79210_79260;
var G__79269 = count__79211_79261;
var G__79270 = (i__79212_79262 + (1));
seq__79209_79259 = G__79267;
chunk__79210_79260 = G__79268;
count__79211_79261 = G__79269;
i__79212_79262 = G__79270;
continue;
} else {
var temp__5735__auto___79272 = cljs.core.seq(seq__79209_79259);
if(temp__5735__auto___79272){
var seq__79209_79273__$1 = temp__5735__auto___79272;
if(cljs.core.chunked_seq_QMARK_(seq__79209_79273__$1)){
var c__4609__auto___79274 = cljs.core.chunk_first(seq__79209_79273__$1);
var G__79281 = cljs.core.chunk_rest(seq__79209_79273__$1);
var G__79282 = c__4609__auto___79274;
var G__79283 = cljs.core.count(c__4609__auto___79274);
var G__79284 = (0);
seq__79209_79259 = G__79281;
chunk__79210_79260 = G__79282;
count__79211_79261 = G__79283;
i__79212_79262 = G__79284;
continue;
} else {
var controller_79285 = cljs.core.first(seq__79209_79273__$1);
reitit.frontend.controllers.apply_controller(controller_79285,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__79286 = cljs.core.next(seq__79209_79273__$1);
var G__79287 = null;
var G__79288 = (0);
var G__79289 = (0);
seq__79209_79259 = G__79286;
chunk__79210_79260 = G__79287;
count__79211_79261 = G__79288;
i__79212_79262 = G__79289;
continue;
}
} else {
}
}
break;
}

var seq__79223_79290 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__79224_79291 = null;
var count__79225_79292 = (0);
var i__79226_79293 = (0);
while(true){
if((i__79226_79293 < count__79225_79292)){
var controller_79294 = chunk__79224_79291.cljs$core$IIndexed$_nth$arity$2(null,i__79226_79293);
reitit.frontend.controllers.apply_controller(controller_79294,new cljs.core.Keyword(null,"start","start",-355208981));


var G__79295 = seq__79223_79290;
var G__79296 = chunk__79224_79291;
var G__79297 = count__79225_79292;
var G__79298 = (i__79226_79293 + (1));
seq__79223_79290 = G__79295;
chunk__79224_79291 = G__79296;
count__79225_79292 = G__79297;
i__79226_79293 = G__79298;
continue;
} else {
var temp__5735__auto___79303 = cljs.core.seq(seq__79223_79290);
if(temp__5735__auto___79303){
var seq__79223_79305__$1 = temp__5735__auto___79303;
if(cljs.core.chunked_seq_QMARK_(seq__79223_79305__$1)){
var c__4609__auto___79306 = cljs.core.chunk_first(seq__79223_79305__$1);
var G__79310 = cljs.core.chunk_rest(seq__79223_79305__$1);
var G__79311 = c__4609__auto___79306;
var G__79312 = cljs.core.count(c__4609__auto___79306);
var G__79313 = (0);
seq__79223_79290 = G__79310;
chunk__79224_79291 = G__79311;
count__79225_79292 = G__79312;
i__79226_79293 = G__79313;
continue;
} else {
var controller_79314 = cljs.core.first(seq__79223_79305__$1);
reitit.frontend.controllers.apply_controller(controller_79314,new cljs.core.Keyword(null,"start","start",-355208981));


var G__79315 = cljs.core.next(seq__79223_79305__$1);
var G__79316 = null;
var G__79317 = (0);
var G__79318 = (0);
seq__79223_79290 = G__79315;
chunk__79224_79291 = G__79316;
count__79225_79292 = G__79317;
i__79226_79293 = G__79318;
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
