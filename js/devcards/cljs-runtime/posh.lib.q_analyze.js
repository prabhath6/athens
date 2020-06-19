goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__43305 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__43305) : stop_at_QMARK_.call(null,G__43305));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__43306 = stop_at_QMARK_;
var G__43307 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__43306,G__43307) : posh.lib.q_analyze.take_until.call(null,G__43306,G__43307));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__43309 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__43309) : rest_at_QMARK_.call(null,G__43309));
}
})())){
return ls;
} else {
var G__43696 = rest_at_QMARK_;
var G__43697 = cljs.core.rest(ls);
rest_at_QMARK_ = G__43696;
ls = G__43697;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__43310 = split_at_QMARK_;
var G__43311 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__43310,G__43311) : posh.lib.q_analyze.split_list_at.call(null,G__43310,G__43311));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__43312 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__43312) : posh.lib.q_analyze.get_all_vars.call(null,G__43312));
})(),(function (){var G__43313 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__43313) : posh.lib.q_analyze.get_all_vars.call(null,G__43313));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__43314 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__43314) : posh.lib.q_analyze.get_all_vars.call(null,G__43314));
})(),cljs.core.first(query));
} else {
var G__43315 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__43315) : posh.lib.q_analyze.get_all_vars.call(null,G__43315));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4174__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4174__auto__;
}
})())){
var G__43316 = cljs.core.rest(eav);
var G__43317 = (n - (1));
var G__43318 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__43319 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__43316,G__43317,G__43318,G__43319) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__43316,G__43317,G__43318,G__43319));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__43320 = cljs.core.rest(eav);
var G__43321 = (n - (1));
var G__43322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__43323 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__43320,G__43321,G__43322,G__43323) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__43320,G__43321,G__43322,G__43323));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__43324 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__43324) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__43324));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__43325 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__43325) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__43325));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__43326 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43326) : posh.lib.q_analyze.get_eavs.call(null,G__43326));
})(),(function (){var G__43327 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43327) : posh.lib.q_analyze.get_eavs.call(null,G__43327));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__43328 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43328) : posh.lib.q_analyze.get_eavs.call(null,G__43328));
})(),(function (){var G__43329 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43329) : posh.lib.q_analyze.get_eavs.call(null,G__43329));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__43330 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43330) : posh.lib.q_analyze.get_eavs.call(null,G__43330));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_43331 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_43331)) && ((cljs.core.count(ocr_43331) === 2)))){
try{var ocr_43331_0__43334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43331,(0));
if(((cljs.core.vector_QMARK_(ocr_43331_0__43334)) && ((cljs.core.count(ocr_43331_0__43334) === 5)))){
try{var ocr_43331_0__43334_0__43336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43331_0__43334,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43331_0__43334_0__43336,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43331_0__43334,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43331_0__43334,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43331_0__43334,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43331,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__43345 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43345) : posh.lib.q_analyze.get_eavs.call(null,G__43345));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e43344){if((e43344 instanceof Error)){
var e__42299__auto__ = e43344;
if((e__42299__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto__;
}
} else {
throw e43344;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43343){if((e43343 instanceof Error)){
var e__42299__auto__ = e43343;
if((e__42299__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto__;
}
} else {
throw e43343;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43341){if((e43341 instanceof Error)){
var e__42299__auto__ = e43341;
if((e__42299__auto__ === cljs.core.match.backtrack)){
var G__43342 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43342) : posh.lib.q_analyze.get_eavs.call(null,G__43342));
} else {
throw e__42299__auto__;
}
} else {
throw e43341;

}
}} else {
var G__43346 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__43346) : posh.lib.q_analyze.get_eavs.call(null,G__43346));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__43347){
var vec__43348 = p__43347;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43348,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43348,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43351_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__43351_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__43351_SHARP_);
} else {
return p1__43351_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__43352 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__43352) : posh.lib.q_analyze.count_qvars.call(null,G__43352));
})(),(function (){var G__43353 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__43353) : posh.lib.q_analyze.count_qvars.call(null,G__43353));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__43354 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__43354) : posh.lib.q_analyze.count_qvars.call(null,G__43354));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__43355(s__43356){
return (new cljs.core.LazySeq(null,(function (){
var s__43356__$1 = s__43356;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43356__$1);
if(temp__5735__auto__){
var s__43356__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43356__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43356__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43358 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43357 = (0);
while(true){
if((i__43357 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43357);
cljs.core.chunk_append(b__43358,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__43753 = (i__43357 + (1));
i__43357 = G__43753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43358),posh$lib$q_analyze$fill_qvar_set_$_iter__43355(cljs.core.chunk_rest(s__43356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43358),null);
}
} else {
var r = cljs.core.first(s__43356__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__43355(cljs.core.rest(s__43356__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__43360 = cljs.core.first(seq1);
var G__43361 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__43360,G__43361) : f.call(null,G__43360,G__43361));
})(),(function (){var G__43362 = f;
var G__43363 = cljs.core.rest(seq1);
var G__43364 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__43362,G__43363,G__43364) : posh.lib.q_analyze.seq_merge_with.call(null,G__43362,G__43363,G__43364));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__43369){
var vec__43370 = p__43369;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43370,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43370,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43370,(2),null);
var eav = vec__43370;
var vec__43373 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43373,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43373,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43373,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__43376(s__43377){
return (new cljs.core.LazySeq(null,(function (){
var s__43377__$1 = s__43377;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43377__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__43377__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__43376_$_iter__43378(s__43379){
return (new cljs.core.LazySeq(null,((function (s__43377__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav){
return (function (){
var s__43379__$1 = s__43379;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__43379__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__43379__$1,s__43377__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__43376_$_iter__43378_$_iter__43380(s__43381){
return (new cljs.core.LazySeq(null,((function (s__43379__$1,s__43377__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav){
return (function (){
var s__43381__$1 = s__43381;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__43381__$1);
if(temp__5735__auto____$2){
var s__43381__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__43381__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43381__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43383 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43382 = (0);
while(true){
if((i__43382 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43382);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__43382,s__43381__$1,s__43379__$1,s__43377__$1,vv,c__4580__auto__,size__4581__auto__,b__43383,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav){
return (function (p1__43367_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__43367_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__43382,s__43381__$1,s__43379__$1,s__43377__$1,vv,c__4580__auto__,size__4581__auto__,b__43383,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__43382,s__43381__$1,s__43379__$1,s__43377__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__43383,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav){
return (function (p__43384){
var vec__43385 = p__43384;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43385,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43385,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__43382,s__43381__$1,s__43379__$1,s__43377__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__43383,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__43382,s__43381__$1,s__43379__$1,s__43377__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__43383,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav){
return (function (p1__43368_SHARP_){
if(cljs.core.truth_(p1__43368_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__43382,s__43381__$1,s__43379__$1,s__43377__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__43383,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__43383,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__43773 = (i__43382 + (1));
i__43382 = G__43773;
continue;
} else {
var G__43774 = (i__43382 + (1));
i__43382 = G__43774;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43383),posh$lib$q_analyze$pattern_from_eav__old_$_iter__43376_$_iter__43378_$_iter__43380(cljs.core.chunk_rest(s__43381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43383),null);
}
} else {
var vv = cljs.core.first(s__43381__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__43381__$1,s__43379__$1,s__43377__$1,vv,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav){
return (function (p1__43367_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__43367_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__43381__$1,s__43379__$1,s__43377__$1,vv,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__43381__$1,s__43379__$1,s__43377__$1,wildcard_count,vv,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav){
return (function (p__43388){
var vec__43389 = p__43388;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43389,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43389,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__43381__$1,s__43379__$1,s__43377__$1,wildcard_count,vv,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__43381__$1,s__43379__$1,s__43377__$1,wildcard_count,exposed_qvars,vv,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav){
return (function (p1__43368_SHARP_){
if(cljs.core.truth_(p1__43368_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__43381__$1,s__43379__$1,s__43377__$1,wildcard_count,exposed_qvars,vv,s__43381__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__43376_$_iter__43378_$_iter__43380(cljs.core.rest(s__43381__$2)));
} else {
var G__43777 = cljs.core.rest(s__43381__$2);
s__43381__$1 = G__43777;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__43379__$1,s__43377__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav))
,null,null));
});})(s__43379__$1,s__43377__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__43376_$_iter__43378(cljs.core.rest(s__43379__$1)));
} else {
var G__43783 = cljs.core.rest(s__43379__$1);
s__43379__$1 = G__43783;
continue;
}
} else {
return null;
}
break;
}
});})(s__43377__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav))
,null,null));
});})(s__43377__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__43373,qe,qa,qv,vec__43370,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__43376(cljs.core.rest(s__43377__$1)));
} else {
var G__43784 = cljs.core.rest(s__43377__$1);
s__43377__$1 = G__43784;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_43392 = cljs.core.vec(eav);
var ocr_43393 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_43392)) && ((cljs.core.count(ocr_43392) === 3)))){
try{var ocr_43392_0__43421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_0__43421,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_43392_1__43422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_1__43422,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_43392_2__43423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_2__43423,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43497){if((e43497 instanceof Error)){
var e__42299__auto__ = e43497;
if((e__42299__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_43393)) && ((cljs.core.count(ocr_43393) === 3)))){
try{var ocr_43393_2__43426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43426 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43499){if((e43499 instanceof Error)){
var e__42299__auto____$1 = e43499;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43426 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43500){if((e43500 instanceof Error)){
var e__42299__auto____$2 = e43500;
if((e__42299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$2;
}
} else {
throw e43500;

}
}} else {
throw e__42299__auto____$1;
}
} else {
throw e43499;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43498){if((e43498 instanceof Error)){
var e__42299__auto____$1 = e43498;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43498;

}
}} else {
throw e__42299__auto__;
}
} else {
throw e43497;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43492){if((e43492 instanceof Error)){
var e__42299__auto__ = e43492;
if((e__42299__auto__ === cljs.core.match.backtrack)){
try{var ocr_43392_2__43423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_2__43423,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_43393)) && ((cljs.core.count(ocr_43393) === 3)))){
try{var ocr_43393_1__43428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43428 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43495){if((e43495 instanceof Error)){
var e__42299__auto____$1 = e43495;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_43393_1__43428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43428 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43496){if((e43496 instanceof Error)){
var e__42299__auto____$2 = e43496;
if((e__42299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$2;
}
} else {
throw e43496;

}
}} else {
throw e__42299__auto____$1;
}
} else {
throw e43495;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43494){if((e43494 instanceof Error)){
var e__42299__auto____$1 = e43494;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43494;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43493){if((e43493 instanceof Error)){
var e__42299__auto____$1 = e43493;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43493;

}
}} else {
throw e__42299__auto__;
}
} else {
throw e43492;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43434){if((e43434 instanceof Error)){
var e__42299__auto__ = e43434;
if((e__42299__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_43393)) && ((cljs.core.count(ocr_43393) === 3)))){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === false)){
try{var ocr_43392_1__43422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_1__43422,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_43392_2__43423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_2__43423,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43491){if((e43491 instanceof Error)){
var e__42299__auto____$1 = e43491;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43491;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43490){if((e43490 instanceof Error)){
var e__42299__auto____$1 = e43490;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43490;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43436){if((e43436 instanceof Error)){
var e__42299__auto____$1 = e43436;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === true)){
try{var ocr_43392_2__43423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_2__43423,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_43392_1__43422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_1__43422,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43487){if((e43487 instanceof Error)){
var e__42299__auto____$2 = e43487;
if((e__42299__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43488){if((e43488 instanceof Error)){
var e__42299__auto____$3 = e43488;
if((e__42299__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43489){if((e43489 instanceof Error)){
var e__42299__auto____$4 = e43489;
if((e__42299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$4;
}
} else {
throw e43489;

}
}} else {
throw e__42299__auto____$3;
}
} else {
throw e43488;

}
}} else {
throw e__42299__auto____$2;
}
} else {
throw e43487;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43486){if((e43486 instanceof Error)){
var e__42299__auto____$2 = e43486;
if((e__42299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$2;
}
} else {
throw e43486;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43437){if((e43437 instanceof Error)){
var e__42299__auto____$2 = e43437;
if((e__42299__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === false)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === true)){
try{var ocr_43392_2__43423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_2__43423,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43485){if((e43485 instanceof Error)){
var e__42299__auto____$3 = e43485;
if((e__42299__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$3;
}
} else {
throw e43485;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43482){if((e43482 instanceof Error)){
var e__42299__auto____$3 = e43482;
if((e__42299__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === false)){
try{var ocr_43392_2__43423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_2__43423,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43484){if((e43484 instanceof Error)){
var e__42299__auto____$4 = e43484;
if((e__42299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$4;
}
} else {
throw e43484;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43483){if((e43483 instanceof Error)){
var e__42299__auto____$4 = e43483;
if((e__42299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$4;
}
} else {
throw e43483;

}
}} else {
throw e__42299__auto____$3;
}
} else {
throw e43482;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43438){if((e43438 instanceof Error)){
var e__42299__auto____$3 = e43438;
if((e__42299__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === true)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === true)){
try{var ocr_43392_1__43422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_1__43422,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43481){if((e43481 instanceof Error)){
var e__42299__auto____$4 = e43481;
if((e__42299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$4;
}
} else {
throw e43481;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43480){if((e43480 instanceof Error)){
var e__42299__auto____$4 = e43480;
if((e__42299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$4;
}
} else {
throw e43480;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43439){if((e43439 instanceof Error)){
var e__42299__auto____$4 = e43439;
if((e__42299__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === false)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === true)){
try{var ocr_43392_1__43422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_1__43422,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43479){if((e43479 instanceof Error)){
var e__42299__auto____$5 = e43479;
if((e__42299__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$5;
}
} else {
throw e43479;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43478){if((e43478 instanceof Error)){
var e__42299__auto____$5 = e43478;
if((e__42299__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$5;
}
} else {
throw e43478;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43440){if((e43440 instanceof Error)){
var e__42299__auto____$5 = e43440;
if((e__42299__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === true)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === false)){
try{var ocr_43392_1__43422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_1__43422,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43477){if((e43477 instanceof Error)){
var e__42299__auto____$6 = e43477;
if((e__42299__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$6;
}
} else {
throw e43477;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43476){if((e43476 instanceof Error)){
var e__42299__auto____$6 = e43476;
if((e__42299__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$6;
}
} else {
throw e43476;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43441){if((e43441 instanceof Error)){
var e__42299__auto____$6 = e43441;
if((e__42299__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === false)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === false)){
try{var ocr_43392_1__43422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_1__43422,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43475){if((e43475 instanceof Error)){
var e__42299__auto____$7 = e43475;
if((e__42299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$7;
}
} else {
throw e43475;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43474){if((e43474 instanceof Error)){
var e__42299__auto____$7 = e43474;
if((e__42299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$7;
}
} else {
throw e43474;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43442){if((e43442 instanceof Error)){
var e__42299__auto____$7 = e43442;
if((e__42299__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === true)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === true)){
try{var ocr_43392_0__43421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_0__43421,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43473){if((e43473 instanceof Error)){
var e__42299__auto____$8 = e43473;
if((e__42299__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$8;
}
} else {
throw e43473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43472){if((e43472 instanceof Error)){
var e__42299__auto____$8 = e43472;
if((e__42299__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$8;
}
} else {
throw e43472;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43443){if((e43443 instanceof Error)){
var e__42299__auto____$8 = e43443;
if((e__42299__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === false)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === true)){
try{var ocr_43392_0__43421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_0__43421,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43471){if((e43471 instanceof Error)){
var e__42299__auto____$9 = e43471;
if((e__42299__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$9;
}
} else {
throw e43471;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43470){if((e43470 instanceof Error)){
var e__42299__auto____$9 = e43470;
if((e__42299__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$9;
}
} else {
throw e43470;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43444){if((e43444 instanceof Error)){
var e__42299__auto____$9 = e43444;
if((e__42299__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === true)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === false)){
try{var ocr_43392_0__43421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_0__43421,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43469){if((e43469 instanceof Error)){
var e__42299__auto____$10 = e43469;
if((e__42299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$10;
}
} else {
throw e43469;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43468){if((e43468 instanceof Error)){
var e__42299__auto____$10 = e43468;
if((e__42299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$10;
}
} else {
throw e43468;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43445){if((e43445 instanceof Error)){
var e__42299__auto____$10 = e43445;
if((e__42299__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === false)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === false)){
try{var ocr_43392_0__43421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43392_0__43421,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43467){if((e43467 instanceof Error)){
var e__42299__auto____$11 = e43467;
if((e__42299__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$11;
}
} else {
throw e43467;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43466){if((e43466 instanceof Error)){
var e__42299__auto____$11 = e43466;
if((e__42299__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$11;
}
} else {
throw e43466;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43446){if((e43446 instanceof Error)){
var e__42299__auto____$11 = e43446;
if((e__42299__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === true)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === true)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43465){if((e43465 instanceof Error)){
var e__42299__auto____$12 = e43465;
if((e__42299__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$12;
}
} else {
throw e43465;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43460){if((e43460 instanceof Error)){
var e__42299__auto____$12 = e43460;
if((e__42299__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === false)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43464){if((e43464 instanceof Error)){
var e__42299__auto____$13 = e43464;
if((e__42299__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$13;
}
} else {
throw e43464;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43461){if((e43461 instanceof Error)){
var e__42299__auto____$13 = e43461;
if((e__42299__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === true)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43463){if((e43463 instanceof Error)){
var e__42299__auto____$14 = e43463;
if((e__42299__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$14;
}
} else {
throw e43463;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43462){if((e43462 instanceof Error)){
var e__42299__auto____$14 = e43462;
if((e__42299__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$14;
}
} else {
throw e43462;

}
}} else {
throw e__42299__auto____$13;
}
} else {
throw e43461;

}
}} else {
throw e__42299__auto____$12;
}
} else {
throw e43460;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43447){if((e43447 instanceof Error)){
var e__42299__auto____$12 = e43447;
if((e__42299__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === false)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === true)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43459){if((e43459 instanceof Error)){
var e__42299__auto____$13 = e43459;
if((e__42299__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$13;
}
} else {
throw e43459;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43458){if((e43458 instanceof Error)){
var e__42299__auto____$13 = e43458;
if((e__42299__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$13;
}
} else {
throw e43458;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43448){if((e43448 instanceof Error)){
var e__42299__auto____$13 = e43448;
if((e__42299__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === true)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === false)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43457){if((e43457 instanceof Error)){
var e__42299__auto____$14 = e43457;
if((e__42299__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$14;
}
} else {
throw e43457;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43456){if((e43456 instanceof Error)){
var e__42299__auto____$14 = e43456;
if((e__42299__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$14;
}
} else {
throw e43456;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43449){if((e43449 instanceof Error)){
var e__42299__auto____$14 = e43449;
if((e__42299__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_43393_2__43432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(2));
if((ocr_43393_2__43432 === false)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === true)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43455){if((e43455 instanceof Error)){
var e__42299__auto____$15 = e43455;
if((e__42299__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$15;
}
} else {
throw e43455;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43451){if((e43451 instanceof Error)){
var e__42299__auto____$15 = e43451;
if((e__42299__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_43393_0__43430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(0));
if((ocr_43393_0__43430 === false)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43453){if((e43453 instanceof Error)){
var e__42299__auto____$16 = e43453;
if((e__42299__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_43393_1__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43393,(1));
if((ocr_43393_1__43431 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43392,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43454){if((e43454 instanceof Error)){
var e__42299__auto____$17 = e43454;
if((e__42299__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$17;
}
} else {
throw e43454;

}
}} else {
throw e__42299__auto____$16;
}
} else {
throw e43453;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43452){if((e43452 instanceof Error)){
var e__42299__auto____$16 = e43452;
if((e__42299__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$16;
}
} else {
throw e43452;

}
}} else {
throw e__42299__auto____$15;
}
} else {
throw e43451;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43450){if((e43450 instanceof Error)){
var e__42299__auto____$15 = e43450;
if((e__42299__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$15;
}
} else {
throw e43450;

}
}} else {
throw e__42299__auto____$14;
}
} else {
throw e43449;

}
}} else {
throw e__42299__auto____$13;
}
} else {
throw e43448;

}
}} else {
throw e__42299__auto____$12;
}
} else {
throw e43447;

}
}} else {
throw e__42299__auto____$11;
}
} else {
throw e43446;

}
}} else {
throw e__42299__auto____$10;
}
} else {
throw e43445;

}
}} else {
throw e__42299__auto____$9;
}
} else {
throw e43444;

}
}} else {
throw e__42299__auto____$8;
}
} else {
throw e43443;

}
}} else {
throw e__42299__auto____$7;
}
} else {
throw e43442;

}
}} else {
throw e__42299__auto____$6;
}
} else {
throw e43441;

}
}} else {
throw e__42299__auto____$5;
}
} else {
throw e43440;

}
}} else {
throw e__42299__auto____$4;
}
} else {
throw e43439;

}
}} else {
throw e__42299__auto____$3;
}
} else {
throw e43438;

}
}} else {
throw e__42299__auto____$2;
}
} else {
throw e43437;

}
}} else {
throw e__42299__auto____$1;
}
} else {
throw e43436;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43435){if((e43435 instanceof Error)){
var e__42299__auto____$1 = e43435;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43435;

}
}} else {
throw e__42299__auto__;
}
} else {
throw e43434;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43433){if((e43433 instanceof Error)){
var e__42299__auto__ = e43433;
if((e__42299__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__42299__auto__;
}
} else {
throw e43433;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_43501 = cljs.core.vec(eav);
var ocr_43502 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_43501)) && ((cljs.core.count(ocr_43501) === 3)))){
try{var ocr_43501_0__43527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_0__43527,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_43501_1__43528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_1__43528,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_43501_2__43529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_2__43529,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e43591){if((e43591 instanceof Error)){
var e__42299__auto__ = e43591;
if((e__42299__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_43502)) && ((cljs.core.count(ocr_43502) === 3)))){
try{var ocr_43502_2__43532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(2));
if((ocr_43502_2__43532 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43593){if((e43593 instanceof Error)){
var e__42299__auto____$1 = e43593;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_43502_2__43532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(2));
if((ocr_43502_2__43532 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43594){if((e43594 instanceof Error)){
var e__42299__auto____$2 = e43594;
if((e__42299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$2;
}
} else {
throw e43594;

}
}} else {
throw e__42299__auto____$1;
}
} else {
throw e43593;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43592){if((e43592 instanceof Error)){
var e__42299__auto____$1 = e43592;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43592;

}
}} else {
throw e__42299__auto__;
}
} else {
throw e43591;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43586){if((e43586 instanceof Error)){
var e__42299__auto__ = e43586;
if((e__42299__auto__ === cljs.core.match.backtrack)){
try{var ocr_43501_2__43529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_2__43529,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_43502)) && ((cljs.core.count(ocr_43502) === 3)))){
try{var ocr_43502_1__43534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43534 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43589){if((e43589 instanceof Error)){
var e__42299__auto____$1 = e43589;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_43502_1__43534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43534 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43590){if((e43590 instanceof Error)){
var e__42299__auto____$2 = e43590;
if((e__42299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$2;
}
} else {
throw e43590;

}
}} else {
throw e__42299__auto____$1;
}
} else {
throw e43589;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43588){if((e43588 instanceof Error)){
var e__42299__auto____$1 = e43588;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43587){if((e43587 instanceof Error)){
var e__42299__auto____$1 = e43587;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43587;

}
}} else {
throw e__42299__auto__;
}
} else {
throw e43586;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43540){if((e43540 instanceof Error)){
var e__42299__auto__ = e43540;
if((e__42299__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_43502)) && ((cljs.core.count(ocr_43502) === 3)))){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === false)){
try{var ocr_43501_1__43528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_1__43528,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_43501_2__43529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_2__43529,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43585){if((e43585 instanceof Error)){
var e__42299__auto____$1 = e43585;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43585;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43584){if((e43584 instanceof Error)){
var e__42299__auto____$1 = e43584;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43542){if((e43542 instanceof Error)){
var e__42299__auto____$1 = e43542;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === true)){
try{var ocr_43501_2__43529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_2__43529,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_43501_1__43528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_1__43528,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43581){if((e43581 instanceof Error)){
var e__42299__auto____$2 = e43581;
if((e__42299__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43582){if((e43582 instanceof Error)){
var e__42299__auto____$3 = e43582;
if((e__42299__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43583){if((e43583 instanceof Error)){
var e__42299__auto____$4 = e43583;
if((e__42299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$4;
}
} else {
throw e43583;

}
}} else {
throw e__42299__auto____$3;
}
} else {
throw e43582;

}
}} else {
throw e__42299__auto____$2;
}
} else {
throw e43581;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43580){if((e43580 instanceof Error)){
var e__42299__auto____$2 = e43580;
if((e__42299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$2;
}
} else {
throw e43580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43543){if((e43543 instanceof Error)){
var e__42299__auto____$2 = e43543;
if((e__42299__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === false)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === true)){
try{var ocr_43501_2__43529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_2__43529,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43579){if((e43579 instanceof Error)){
var e__42299__auto____$3 = e43579;
if((e__42299__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$3;
}
} else {
throw e43579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43578){if((e43578 instanceof Error)){
var e__42299__auto____$3 = e43578;
if((e__42299__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$3;
}
} else {
throw e43578;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43544){if((e43544 instanceof Error)){
var e__42299__auto____$3 = e43544;
if((e__42299__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_43502_2__43538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(2));
if((ocr_43502_2__43538 === true)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === true)){
try{var ocr_43501_1__43528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_1__43528,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43577){if((e43577 instanceof Error)){
var e__42299__auto____$4 = e43577;
if((e__42299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$4;
}
} else {
throw e43577;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43576){if((e43576 instanceof Error)){
var e__42299__auto____$4 = e43576;
if((e__42299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$4;
}
} else {
throw e43576;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43545){if((e43545 instanceof Error)){
var e__42299__auto____$4 = e43545;
if((e__42299__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_43502_2__43538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(2));
if((ocr_43502_2__43538 === false)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === true)){
try{var ocr_43501_1__43528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_1__43528,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43575){if((e43575 instanceof Error)){
var e__42299__auto____$5 = e43575;
if((e__42299__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$5;
}
} else {
throw e43575;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43574){if((e43574 instanceof Error)){
var e__42299__auto____$5 = e43574;
if((e__42299__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$5;
}
} else {
throw e43574;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43546){if((e43546 instanceof Error)){
var e__42299__auto____$5 = e43546;
if((e__42299__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_43502_2__43538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(2));
if((ocr_43502_2__43538 === true)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === false)){
try{var ocr_43501_1__43528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_1__43528,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43573){if((e43573 instanceof Error)){
var e__42299__auto____$6 = e43573;
if((e__42299__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$6;
}
} else {
throw e43573;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43570){if((e43570 instanceof Error)){
var e__42299__auto____$6 = e43570;
if((e__42299__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === true)){
try{var ocr_43501_0__43527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_0__43527,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43572){if((e43572 instanceof Error)){
var e__42299__auto____$7 = e43572;
if((e__42299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$7;
}
} else {
throw e43572;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43571){if((e43571 instanceof Error)){
var e__42299__auto____$7 = e43571;
if((e__42299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$7;
}
} else {
throw e43571;

}
}} else {
throw e__42299__auto____$6;
}
} else {
throw e43570;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43547){if((e43547 instanceof Error)){
var e__42299__auto____$6 = e43547;
if((e__42299__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_43502_2__43538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(2));
if((ocr_43502_2__43538 === false)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === true)){
try{var ocr_43501_0__43527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_0__43527,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43569){if((e43569 instanceof Error)){
var e__42299__auto____$7 = e43569;
if((e__42299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$7;
}
} else {
throw e43569;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43568){if((e43568 instanceof Error)){
var e__42299__auto____$7 = e43568;
if((e__42299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$7;
}
} else {
throw e43568;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43548){if((e43548 instanceof Error)){
var e__42299__auto____$7 = e43548;
if((e__42299__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_43502_2__43538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(2));
if((ocr_43502_2__43538 === true)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === false)){
try{var ocr_43501_0__43527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_43501_0__43527,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43567){if((e43567 instanceof Error)){
var e__42299__auto____$8 = e43567;
if((e__42299__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$8;
}
} else {
throw e43567;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43561){if((e43561 instanceof Error)){
var e__42299__auto____$8 = e43561;
if((e__42299__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === true)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43565){if((e43565 instanceof Error)){
var e__42299__auto____$9 = e43565;
if((e__42299__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43566){if((e43566 instanceof Error)){
var e__42299__auto____$10 = e43566;
if((e__42299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$10;
}
} else {
throw e43566;

}
}} else {
throw e__42299__auto____$9;
}
} else {
throw e43565;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43562){if((e43562 instanceof Error)){
var e__42299__auto____$9 = e43562;
if((e__42299__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === false)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43564){if((e43564 instanceof Error)){
var e__42299__auto____$10 = e43564;
if((e__42299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$10;
}
} else {
throw e43564;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43563){if((e43563 instanceof Error)){
var e__42299__auto____$10 = e43563;
if((e__42299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$10;
}
} else {
throw e43563;

}
}} else {
throw e__42299__auto____$9;
}
} else {
throw e43562;

}
}} else {
throw e__42299__auto____$8;
}
} else {
throw e43561;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43549){if((e43549 instanceof Error)){
var e__42299__auto____$8 = e43549;
if((e__42299__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_43502_2__43538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(2));
if((ocr_43502_2__43538 === false)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === true)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43560){if((e43560 instanceof Error)){
var e__42299__auto____$9 = e43560;
if((e__42299__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$9;
}
} else {
throw e43560;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43559){if((e43559 instanceof Error)){
var e__42299__auto____$9 = e43559;
if((e__42299__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$9;
}
} else {
throw e43559;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43550){if((e43550 instanceof Error)){
var e__42299__auto____$9 = e43550;
if((e__42299__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_43502_2__43538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(2));
if((ocr_43502_2__43538 === true)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === false)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43558){if((e43558 instanceof Error)){
var e__42299__auto____$10 = e43558;
if((e__42299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$10;
}
} else {
throw e43558;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43557){if((e43557 instanceof Error)){
var e__42299__auto____$10 = e43557;
if((e__42299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$10;
}
} else {
throw e43557;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43551){if((e43551 instanceof Error)){
var e__42299__auto____$10 = e43551;
if((e__42299__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_43502_2__43538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(2));
if((ocr_43502_2__43538 === false)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === true)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43556){if((e43556 instanceof Error)){
var e__42299__auto____$11 = e43556;
if((e__42299__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$11;
}
} else {
throw e43556;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43553){if((e43553 instanceof Error)){
var e__42299__auto____$11 = e43553;
if((e__42299__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_43502_0__43536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(0));
if((ocr_43502_0__43536 === false)){
try{var ocr_43502_1__43537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43502,(1));
if((ocr_43502_1__43537 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_43501,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43555){if((e43555 instanceof Error)){
var e__42299__auto____$12 = e43555;
if((e__42299__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$12;
}
} else {
throw e43555;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43554){if((e43554 instanceof Error)){
var e__42299__auto____$12 = e43554;
if((e__42299__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$12;
}
} else {
throw e43554;

}
}} else {
throw e__42299__auto____$11;
}
} else {
throw e43553;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43552){if((e43552 instanceof Error)){
var e__42299__auto____$11 = e43552;
if((e__42299__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$11;
}
} else {
throw e43552;

}
}} else {
throw e__42299__auto____$10;
}
} else {
throw e43551;

}
}} else {
throw e__42299__auto____$9;
}
} else {
throw e43550;

}
}} else {
throw e__42299__auto____$8;
}
} else {
throw e43549;

}
}} else {
throw e__42299__auto____$7;
}
} else {
throw e43548;

}
}} else {
throw e__42299__auto____$6;
}
} else {
throw e43547;

}
}} else {
throw e__42299__auto____$5;
}
} else {
throw e43546;

}
}} else {
throw e__42299__auto____$4;
}
} else {
throw e43545;

}
}} else {
throw e__42299__auto____$3;
}
} else {
throw e43544;

}
}} else {
throw e__42299__auto____$2;
}
} else {
throw e43543;

}
}} else {
throw e__42299__auto____$1;
}
} else {
throw e43542;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43541){if((e43541 instanceof Error)){
var e__42299__auto____$1 = e43541;
if((e__42299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42299__auto____$1;
}
} else {
throw e43541;

}
}} else {
throw e__42299__auto__;
}
} else {
throw e43540;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43539){if((e43539 instanceof Error)){
var e__42299__auto__ = e43539;
if((e__42299__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__42299__auto__;
}
} else {
throw e43539;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43596){
var vec__43597 = p__43596;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43597,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__43595_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__43595_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43601){
var vec__43602 = p__43601;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43602,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__43600_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__43600_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__43605 = cljs.core.rest(ins);
var G__43606 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__43605,G__43606) : posh.lib.q_analyze.just_qvars.call(null,G__43605,G__43606));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43607_SHARP_){
return cljs.core.zipmap(qvars,p1__43607_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__43608 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43608,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43608,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43608,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43608,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__44088 = var$;
var G__44089 = dbvarmap;
var G__44090 = cljs.core.rest(dbeavs);
var$ = G__44088;
dbvarmap = G__44089;
dbeavs = G__44090;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__43611 = cljs.core.rest(vars);
var G__43612 = dbvarmap;
var G__43613 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__43611,G__43612,G__43613) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__43611,G__43612,G__43613));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__44116 = (n + (1));
var G__44117 = cljs.core.rest(xs__$1);
n = G__44116;
xs__$1 = G__44117;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4174__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4174__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43614_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__43614_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__43614_SHARP_) : type.call(null,p1__43614_SHARP_));
} else {
return p1__43614_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__43615 = cljs.core.rest(ins);
var G__43616 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__43615,G__43616) : posh.lib.q_analyze.make_dbarg_map.call(null,G__43615,G__43616));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43617){
var vec__43618 = p__43617;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43618,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43618,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__43622_SHARP_,p2__43621_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__43621_SHARP_)){
return p1__43622_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__43626 = cljs.core._EQ_;
var expr__43627 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__43626.cljs$core$IFn$_invoke$arity$2 ? pred__43626.cljs$core$IFn$_invoke$arity$2((1),expr__43627) : pred__43626.call(null,(1),expr__43627)))){
return true;
} else {
if(cljs.core.truth_((pred__43626.cljs$core$IFn$_invoke$arity$2 ? pred__43626.cljs$core$IFn$_invoke$arity$2((3),expr__43627) : pred__43626.call(null,(3),expr__43627)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__44118 = cljs.core.first(remaining);
var G__44119 = cljs.core.rest(remaining);
clause = G__44118;
remaining = G__44119;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__44120 = cljs.core.first(remaining);
var G__44121 = cljs.core.rest(remaining);
clause = G__44120;
remaining = G__44121;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__43629(s__43630){
return (new cljs.core.LazySeq(null,(function (){
var s__43630__$1 = s__43630;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43630__$1);
if(temp__5735__auto__){
var s__43630__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43630__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43630__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43632 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43631 = (0);
while(true){
if((i__43631 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43631);
cljs.core.chunk_append(b__43632,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__44122 = (i__43631 + (1));
i__43631 = G__44122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43632),posh$lib$q_analyze$resolve_any_idents_$_iter__43629(cljs.core.chunk_rest(s__43630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43632),null);
}
} else {
var var_value = cljs.core.first(s__43630__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__43629(cljs.core.rest(s__43630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43637){
var vec__43638 = p__43637;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43638,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43638,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43641){
var vec__43642 = p__43641;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43642,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43642,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43645){
var vec__43646 = p__43645;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43646,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43646,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43649){
var vec__43650 = p__43649;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43650,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43650,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__43654 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__43655 = cljs.core.vec(r);
var fexpr__43653 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__43653.cljs$core$IFn$_invoke$arity$2 ? fexpr__43653.cljs$core$IFn$_invoke$arity$2(G__43654,G__43655) : fexpr__43653.call(null,G__43654,G__43655));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43656){
var vec__43657 = p__43656;
var seq__43658 = cljs.core.seq(vec__43657);
var first__43659 = cljs.core.first(seq__43658);
var seq__43658__$1 = cljs.core.next(seq__43658);
var db = first__43659;
var eav = seq__43658__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43660){
var vec__43661 = p__43660;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43661,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43661,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__43635_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__43635_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__43635_SHARP_) : linked_qvars.call(null,p1__43635_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__43635_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__43636_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__43636_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__43636_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
