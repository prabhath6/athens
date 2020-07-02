goog.provide('posh.lib.datom_matcher');
goog.require('cljs.core');
goog.require('clojure.set');
posh.lib.datom_matcher.datom_match_pattern_QMARK_ = (function posh$lib$datom_matcher$datom_match_pattern_QMARK_(pattern,datom){
while(true){
if(cljs.core.empty_QMARK_(pattern)){
return true;
} else {
if(cljs.core.truth_((function (){var p = cljs.core.first(pattern);
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"_","_",-1201019570,null));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = ((cljs.core.set_QMARK_(p))?(function (){var G__26172 = cljs.core.first(datom);
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26172) : p.call(null,G__26172));
})():false);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.first(datom));
}
}
})())){
var G__26186 = cljs.core.rest(pattern);
var G__26187 = cljs.core.rest(datom);
pattern = G__26186;
datom = G__26187;
continue;
} else {
return null;
}
}
break;
}
});
posh.lib.datom_matcher.datom_match_QMARK_ = (function posh$lib$datom_matcher$datom_match_QMARK_(patterns,datom){
return cljs.core.some((function (p1__26173_SHARP_){
return posh.lib.datom_matcher.datom_match_pattern_QMARK_(p1__26173_SHARP_,datom);
}),patterns);
});
posh.lib.datom_matcher.any_datoms_match_QMARK_ = (function posh$lib$datom_matcher$any_datoms_match_QMARK_(patterns,datoms){
var G__26175 = patterns;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__26175)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__26175)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__26175)){
return true;
} else {
return cljs.core.some((function (p1__26174_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_(patterns,p1__26174_SHARP_);
}),datoms);

}
}
}
});
posh.lib.datom_matcher.matching_datoms = (function posh$lib$datom_matcher$matching_datoms(patterns,datoms){
var G__26178 = patterns;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__26178)){
return datoms;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__26178)){
return datoms;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__26178)){
return null;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26177_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_(patterns,p1__26177_SHARP_);
}),datoms);

}
}
}
});
posh.lib.datom_matcher.combine_entids = (function posh$lib$datom_matcher$combine_entids(entids,rest_datom,patterns,new_patterns,leftover_patterns){
while(true){
if(cljs.core.empty_QMARK_(patterns)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-patterns","new-patterns",404552774),cljs.core.cons(cljs.core.vec(cljs.core.cons(entids,rest_datom)),new_patterns),new cljs.core.Keyword(null,"leftover-patterns","leftover-patterns",377032963),leftover_patterns], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rest_datom,cljs.core.rest(cljs.core.first(patterns)))){
var G__26194 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(entids,((cljs.core.set_QMARK_(cljs.core.ffirst(patterns)))?cljs.core.ffirst(patterns):cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst(patterns)], null))));
var G__26195 = rest_datom;
var G__26196 = cljs.core.rest(patterns);
var G__26197 = new_patterns;
var G__26198 = leftover_patterns;
entids = G__26194;
rest_datom = G__26195;
patterns = G__26196;
new_patterns = G__26197;
leftover_patterns = G__26198;
continue;
} else {
var G__26199 = entids;
var G__26200 = rest_datom;
var G__26201 = cljs.core.rest(patterns);
var G__26202 = new_patterns;
var G__26203 = cljs.core.cons(cljs.core.first(patterns),leftover_patterns);
entids = G__26199;
rest_datom = G__26200;
patterns = G__26201;
new_patterns = G__26202;
leftover_patterns = G__26203;
continue;
}
}
break;
}
});
posh.lib.datom_matcher.reduce_patterns = (function posh$lib$datom_matcher$reduce_patterns(patterns){
var new_patterns = cljs.core.PersistentVector.EMPTY;
var leftover_patterns = patterns;
while(true){
if(cljs.core.empty_QMARK_(leftover_patterns)){
return new_patterns;
} else {
if((function (){var id = cljs.core.ffirst(leftover_patterns);
return ((cljs.core.set_QMARK_(id)) || (typeof id === 'number'));
})()){
var r = posh.lib.datom_matcher.combine_entids(cljs.core.PersistentHashSet.EMPTY,cljs.core.rest(cljs.core.first(leftover_patterns)),leftover_patterns,new_patterns,cljs.core.PersistentVector.EMPTY);
var G__26205 = new cljs.core.Keyword(null,"new-patterns","new-patterns",404552774).cljs$core$IFn$_invoke$arity$1(r);
var G__26206 = new cljs.core.Keyword(null,"leftover-patterns","leftover-patterns",377032963).cljs$core$IFn$_invoke$arity$1(r);
new_patterns = G__26205;
leftover_patterns = G__26206;
continue;
} else {
var G__26207 = cljs.core.cons(cljs.core.first(leftover_patterns),new_patterns);
var G__26208 = cljs.core.rest(leftover_patterns);
new_patterns = G__26207;
leftover_patterns = G__26208;
continue;
}
}
break;
}
});

//# sourceMappingURL=posh.lib.datom_matcher.js.map
