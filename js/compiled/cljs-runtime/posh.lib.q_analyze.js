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
var G__68010 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__68010) : stop_at_QMARK_.call(null,G__68010));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__68011 = stop_at_QMARK_;
var G__68012 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__68011,G__68012) : posh.lib.q_analyze.take_until.call(null,G__68011,G__68012));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__68014 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__68014) : rest_at_QMARK_.call(null,G__68014));
}
})())){
return ls;
} else {
var G__68385 = rest_at_QMARK_;
var G__68386 = cljs.core.rest(ls);
rest_at_QMARK_ = G__68385;
ls = G__68386;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__68015 = split_at_QMARK_;
var G__68016 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__68015,G__68016) : posh.lib.q_analyze.split_list_at.call(null,G__68015,G__68016));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__68018 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__68018) : posh.lib.q_analyze.get_all_vars.call(null,G__68018));
})(),(function (){var G__68019 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__68019) : posh.lib.q_analyze.get_all_vars.call(null,G__68019));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__68020 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__68020) : posh.lib.q_analyze.get_all_vars.call(null,G__68020));
})(),cljs.core.first(query));
} else {
var G__68021 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__68021) : posh.lib.q_analyze.get_all_vars.call(null,G__68021));

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
var G__68022 = cljs.core.rest(eav);
var G__68023 = (n - (1));
var G__68024 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__68025 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__68022,G__68023,G__68024,G__68025) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__68022,G__68023,G__68024,G__68025));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__68026 = cljs.core.rest(eav);
var G__68027 = (n - (1));
var G__68028 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__68029 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__68026,G__68027,G__68028,G__68029) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__68026,G__68027,G__68028,G__68029));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__68031 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__68031) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__68031));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__68032 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__68032) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__68032));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__68033 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68033) : posh.lib.q_analyze.get_eavs.call(null,G__68033));
})(),(function (){var G__68034 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68034) : posh.lib.q_analyze.get_eavs.call(null,G__68034));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__68035 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68035) : posh.lib.q_analyze.get_eavs.call(null,G__68035));
})(),(function (){var G__68036 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68036) : posh.lib.q_analyze.get_eavs.call(null,G__68036));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__68037 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68037) : posh.lib.q_analyze.get_eavs.call(null,G__68037));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_68038 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_68038)) && ((cljs.core.count(ocr_68038) === 2)))){
try{var ocr_68038_0__68042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68038,(0));
if(((cljs.core.vector_QMARK_(ocr_68038_0__68042)) && ((cljs.core.count(ocr_68038_0__68042) === 5)))){
try{var ocr_68038_0__68042_0__68044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68038_0__68042,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68038_0__68042_0__68044,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68038_0__68042,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68038_0__68042,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68038_0__68042,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68038,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__68054 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68054) : posh.lib.q_analyze.get_eavs.call(null,G__68054));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e68053){if((e68053 instanceof Error)){
var e__66518__auto__ = e68053;
if((e__66518__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto__;
}
} else {
throw e68053;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68052){if((e68052 instanceof Error)){
var e__66518__auto__ = e68052;
if((e__66518__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto__;
}
} else {
throw e68052;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68050){if((e68050 instanceof Error)){
var e__66518__auto__ = e68050;
if((e__66518__auto__ === cljs.core.match.backtrack)){
var G__68051 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68051) : posh.lib.q_analyze.get_eavs.call(null,G__68051));
} else {
throw e__66518__auto__;
}
} else {
throw e68050;

}
}} else {
var G__68055 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__68055) : posh.lib.q_analyze.get_eavs.call(null,G__68055));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__68056){
var vec__68057 = p__68056;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68057,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68057,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68060_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__68060_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__68060_SHARP_);
} else {
return p1__68060_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__68061 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__68061) : posh.lib.q_analyze.count_qvars.call(null,G__68061));
})(),(function (){var G__68062 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__68062) : posh.lib.q_analyze.count_qvars.call(null,G__68062));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__68063 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__68063) : posh.lib.q_analyze.count_qvars.call(null,G__68063));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__68064(s__68065){
return (new cljs.core.LazySeq(null,(function (){
var s__68065__$1 = s__68065;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68065__$1);
if(temp__5735__auto__){
var s__68065__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68065__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68065__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68067 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68066 = (0);
while(true){
if((i__68066 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68066);
cljs.core.chunk_append(b__68067,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__68409 = (i__68066 + (1));
i__68066 = G__68409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68067),posh$lib$q_analyze$fill_qvar_set_$_iter__68064(cljs.core.chunk_rest(s__68065__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68067),null);
}
} else {
var r = cljs.core.first(s__68065__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__68064(cljs.core.rest(s__68065__$2)));
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
return cljs.core.cons((function (){var G__68069 = cljs.core.first(seq1);
var G__68070 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__68069,G__68070) : f.call(null,G__68069,G__68070));
})(),(function (){var G__68071 = f;
var G__68072 = cljs.core.rest(seq1);
var G__68073 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__68071,G__68072,G__68073) : posh.lib.q_analyze.seq_merge_with.call(null,G__68071,G__68072,G__68073));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__68076){
var vec__68077 = p__68076;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68077,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68077,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68077,(2),null);
var eav = vec__68077;
var vec__68080 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68080,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68080,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68080,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__68083(s__68084){
return (new cljs.core.LazySeq(null,(function (){
var s__68084__$1 = s__68084;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68084__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__68084__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__68083_$_iter__68085(s__68086){
return (new cljs.core.LazySeq(null,((function (s__68084__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav){
return (function (){
var s__68086__$1 = s__68086;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68086__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__68086__$1,s__68084__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__68083_$_iter__68085_$_iter__68087(s__68088){
return (new cljs.core.LazySeq(null,((function (s__68086__$1,s__68084__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav){
return (function (){
var s__68088__$1 = s__68088;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__68088__$1);
if(temp__5735__auto____$2){
var s__68088__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68088__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68088__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68090 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68089 = (0);
while(true){
if((i__68089 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68089);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68089,s__68088__$1,s__68086__$1,s__68084__$1,vv,c__4580__auto__,size__4581__auto__,b__68090,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav){
return (function (p1__68074_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__68074_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__68089,s__68088__$1,s__68086__$1,s__68084__$1,vv,c__4580__auto__,size__4581__auto__,b__68090,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68089,s__68088__$1,s__68086__$1,s__68084__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__68090,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav){
return (function (p__68091){
var vec__68092 = p__68091;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68092,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68092,(1),null);
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
});})(i__68089,s__68088__$1,s__68086__$1,s__68084__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__68090,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__68089,s__68088__$1,s__68086__$1,s__68084__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__68090,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav){
return (function (p1__68075_SHARP_){
if(cljs.core.truth_(p1__68075_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__68089,s__68088__$1,s__68086__$1,s__68084__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__68090,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__68090,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__68423 = (i__68089 + (1));
i__68089 = G__68423;
continue;
} else {
var G__68424 = (i__68089 + (1));
i__68089 = G__68424;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68090),posh$lib$q_analyze$pattern_from_eav__old_$_iter__68083_$_iter__68085_$_iter__68087(cljs.core.chunk_rest(s__68088__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68090),null);
}
} else {
var vv = cljs.core.first(s__68088__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__68088__$1,s__68086__$1,s__68084__$1,vv,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav){
return (function (p1__68074_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__68074_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__68088__$1,s__68086__$1,s__68084__$1,vv,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__68088__$1,s__68086__$1,s__68084__$1,wildcard_count,vv,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav){
return (function (p__68095){
var vec__68096 = p__68095;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68096,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68096,(1),null);
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
});})(s__68088__$1,s__68086__$1,s__68084__$1,wildcard_count,vv,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__68088__$1,s__68086__$1,s__68084__$1,wildcard_count,exposed_qvars,vv,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav){
return (function (p1__68075_SHARP_){
if(cljs.core.truth_(p1__68075_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__68088__$1,s__68086__$1,s__68084__$1,wildcard_count,exposed_qvars,vv,s__68088__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__68083_$_iter__68085_$_iter__68087(cljs.core.rest(s__68088__$2)));
} else {
var G__68425 = cljs.core.rest(s__68088__$2);
s__68088__$1 = G__68425;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__68086__$1,s__68084__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav))
,null,null));
});})(s__68086__$1,s__68084__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__68083_$_iter__68085(cljs.core.rest(s__68086__$1)));
} else {
var G__68426 = cljs.core.rest(s__68086__$1);
s__68086__$1 = G__68426;
continue;
}
} else {
return null;
}
break;
}
});})(s__68084__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav))
,null,null));
});})(s__68084__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__68080,qe,qa,qv,vec__68077,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__68083(cljs.core.rest(s__68084__$1)));
} else {
var G__68427 = cljs.core.rest(s__68084__$1);
s__68084__$1 = G__68427;
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
var ocr_68100 = cljs.core.vec(eav);
var ocr_68101 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_68100)) && ((cljs.core.count(ocr_68100) === 3)))){
try{var ocr_68100_0__68129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_0__68129,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68100_1__68130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_1__68130,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68100_2__68131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_2__68131,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68211){if((e68211 instanceof Error)){
var e__66518__auto__ = e68211;
if((e__66518__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_68101)) && ((cljs.core.count(ocr_68101) === 3)))){
try{var ocr_68101_2__68135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68135 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68213){if((e68213 instanceof Error)){
var e__66518__auto____$1 = e68213;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68135 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68214){if((e68214 instanceof Error)){
var e__66518__auto____$2 = e68214;
if((e__66518__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$2;
}
} else {
throw e68214;

}
}} else {
throw e__66518__auto____$1;
}
} else {
throw e68213;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68212){if((e68212 instanceof Error)){
var e__66518__auto____$1 = e68212;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68212;

}
}} else {
throw e__66518__auto__;
}
} else {
throw e68211;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68205){if((e68205 instanceof Error)){
var e__66518__auto__ = e68205;
if((e__66518__auto__ === cljs.core.match.backtrack)){
try{var ocr_68100_2__68131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_2__68131,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_68101)) && ((cljs.core.count(ocr_68101) === 3)))){
try{var ocr_68101_1__68137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68137 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68208){if((e68208 instanceof Error)){
var e__66518__auto____$1 = e68208;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68101_1__68137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68137 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68209){if((e68209 instanceof Error)){
var e__66518__auto____$2 = e68209;
if((e__66518__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$2;
}
} else {
throw e68209;

}
}} else {
throw e__66518__auto____$1;
}
} else {
throw e68208;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68207){if((e68207 instanceof Error)){
var e__66518__auto____$1 = e68207;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68207;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68206){if((e68206 instanceof Error)){
var e__66518__auto____$1 = e68206;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68206;

}
}} else {
throw e__66518__auto__;
}
} else {
throw e68205;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68145){if((e68145 instanceof Error)){
var e__66518__auto__ = e68145;
if((e__66518__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_68101)) && ((cljs.core.count(ocr_68101) === 3)))){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === false)){
try{var ocr_68100_1__68130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_1__68130,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68100_2__68131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_2__68131,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68204){if((e68204 instanceof Error)){
var e__66518__auto____$1 = e68204;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68204;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68203){if((e68203 instanceof Error)){
var e__66518__auto____$1 = e68203;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68203;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68147){if((e68147 instanceof Error)){
var e__66518__auto____$1 = e68147;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === true)){
try{var ocr_68100_2__68131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_2__68131,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68100_1__68130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_1__68130,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68200){if((e68200 instanceof Error)){
var e__66518__auto____$2 = e68200;
if((e__66518__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68201){if((e68201 instanceof Error)){
var e__66518__auto____$3 = e68201;
if((e__66518__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68202){if((e68202 instanceof Error)){
var e__66518__auto____$4 = e68202;
if((e__66518__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$4;
}
} else {
throw e68202;

}
}} else {
throw e__66518__auto____$3;
}
} else {
throw e68201;

}
}} else {
throw e__66518__auto____$2;
}
} else {
throw e68200;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68199){if((e68199 instanceof Error)){
var e__66518__auto____$2 = e68199;
if((e__66518__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$2;
}
} else {
throw e68199;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68148){if((e68148 instanceof Error)){
var e__66518__auto____$2 = e68148;
if((e__66518__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === false)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === true)){
try{var ocr_68100_2__68131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_2__68131,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68198){if((e68198 instanceof Error)){
var e__66518__auto____$3 = e68198;
if((e__66518__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$3;
}
} else {
throw e68198;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68194){if((e68194 instanceof Error)){
var e__66518__auto____$3 = e68194;
if((e__66518__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === false)){
try{var ocr_68100_2__68131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_2__68131,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68197){if((e68197 instanceof Error)){
var e__66518__auto____$4 = e68197;
if((e__66518__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$4;
}
} else {
throw e68197;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68196){if((e68196 instanceof Error)){
var e__66518__auto____$4 = e68196;
if((e__66518__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$4;
}
} else {
throw e68196;

}
}} else {
throw e__66518__auto____$3;
}
} else {
throw e68194;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68149){if((e68149 instanceof Error)){
var e__66518__auto____$3 = e68149;
if((e__66518__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === true)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === true)){
try{var ocr_68100_1__68130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_1__68130,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68193){if((e68193 instanceof Error)){
var e__66518__auto____$4 = e68193;
if((e__66518__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$4;
}
} else {
throw e68193;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68192){if((e68192 instanceof Error)){
var e__66518__auto____$4 = e68192;
if((e__66518__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$4;
}
} else {
throw e68192;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68150){if((e68150 instanceof Error)){
var e__66518__auto____$4 = e68150;
if((e__66518__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === false)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === true)){
try{var ocr_68100_1__68130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_1__68130,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68191){if((e68191 instanceof Error)){
var e__66518__auto____$5 = e68191;
if((e__66518__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$5;
}
} else {
throw e68191;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68190){if((e68190 instanceof Error)){
var e__66518__auto____$5 = e68190;
if((e__66518__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$5;
}
} else {
throw e68190;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68151){if((e68151 instanceof Error)){
var e__66518__auto____$5 = e68151;
if((e__66518__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === true)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === false)){
try{var ocr_68100_1__68130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_1__68130,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68189){if((e68189 instanceof Error)){
var e__66518__auto____$6 = e68189;
if((e__66518__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$6;
}
} else {
throw e68189;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68188){if((e68188 instanceof Error)){
var e__66518__auto____$6 = e68188;
if((e__66518__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$6;
}
} else {
throw e68188;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68152){if((e68152 instanceof Error)){
var e__66518__auto____$6 = e68152;
if((e__66518__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === false)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === false)){
try{var ocr_68100_1__68130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_1__68130,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68187){if((e68187 instanceof Error)){
var e__66518__auto____$7 = e68187;
if((e__66518__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$7;
}
} else {
throw e68187;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68186){if((e68186 instanceof Error)){
var e__66518__auto____$7 = e68186;
if((e__66518__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$7;
}
} else {
throw e68186;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68153){if((e68153 instanceof Error)){
var e__66518__auto____$7 = e68153;
if((e__66518__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === true)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === true)){
try{var ocr_68100_0__68129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_0__68129,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68185){if((e68185 instanceof Error)){
var e__66518__auto____$8 = e68185;
if((e__66518__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$8;
}
} else {
throw e68185;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68184){if((e68184 instanceof Error)){
var e__66518__auto____$8 = e68184;
if((e__66518__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$8;
}
} else {
throw e68184;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68154){if((e68154 instanceof Error)){
var e__66518__auto____$8 = e68154;
if((e__66518__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === false)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === true)){
try{var ocr_68100_0__68129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_0__68129,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68183){if((e68183 instanceof Error)){
var e__66518__auto____$9 = e68183;
if((e__66518__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$9;
}
} else {
throw e68183;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68182){if((e68182 instanceof Error)){
var e__66518__auto____$9 = e68182;
if((e__66518__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$9;
}
} else {
throw e68182;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68155){if((e68155 instanceof Error)){
var e__66518__auto____$9 = e68155;
if((e__66518__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === true)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === false)){
try{var ocr_68100_0__68129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_0__68129,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68181){if((e68181 instanceof Error)){
var e__66518__auto____$10 = e68181;
if((e__66518__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$10;
}
} else {
throw e68181;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68180){if((e68180 instanceof Error)){
var e__66518__auto____$10 = e68180;
if((e__66518__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$10;
}
} else {
throw e68180;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68156){if((e68156 instanceof Error)){
var e__66518__auto____$10 = e68156;
if((e__66518__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === false)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === false)){
try{var ocr_68100_0__68129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68100_0__68129,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68179){if((e68179 instanceof Error)){
var e__66518__auto____$11 = e68179;
if((e__66518__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$11;
}
} else {
throw e68179;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68178){if((e68178 instanceof Error)){
var e__66518__auto____$11 = e68178;
if((e__66518__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$11;
}
} else {
throw e68178;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68157){if((e68157 instanceof Error)){
var e__66518__auto____$11 = e68157;
if((e__66518__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === true)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === true)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68177){if((e68177 instanceof Error)){
var e__66518__auto____$12 = e68177;
if((e__66518__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$12;
}
} else {
throw e68177;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68172){if((e68172 instanceof Error)){
var e__66518__auto____$12 = e68172;
if((e__66518__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === false)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68176){if((e68176 instanceof Error)){
var e__66518__auto____$13 = e68176;
if((e__66518__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$13;
}
} else {
throw e68176;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68173){if((e68173 instanceof Error)){
var e__66518__auto____$13 = e68173;
if((e__66518__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === true)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68175){if((e68175 instanceof Error)){
var e__66518__auto____$14 = e68175;
if((e__66518__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$14;
}
} else {
throw e68175;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68174){if((e68174 instanceof Error)){
var e__66518__auto____$14 = e68174;
if((e__66518__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$14;
}
} else {
throw e68174;

}
}} else {
throw e__66518__auto____$13;
}
} else {
throw e68173;

}
}} else {
throw e__66518__auto____$12;
}
} else {
throw e68172;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68158){if((e68158 instanceof Error)){
var e__66518__auto____$12 = e68158;
if((e__66518__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === false)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === true)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68170){if((e68170 instanceof Error)){
var e__66518__auto____$13 = e68170;
if((e__66518__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$13;
}
} else {
throw e68170;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68169){if((e68169 instanceof Error)){
var e__66518__auto____$13 = e68169;
if((e__66518__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$13;
}
} else {
throw e68169;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68159){if((e68159 instanceof Error)){
var e__66518__auto____$13 = e68159;
if((e__66518__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === true)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === false)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68168){if((e68168 instanceof Error)){
var e__66518__auto____$14 = e68168;
if((e__66518__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$14;
}
} else {
throw e68168;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68167){if((e68167 instanceof Error)){
var e__66518__auto____$14 = e68167;
if((e__66518__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$14;
}
} else {
throw e68167;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68160){if((e68160 instanceof Error)){
var e__66518__auto____$14 = e68160;
if((e__66518__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_68101_2__68141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(2));
if((ocr_68101_2__68141 === false)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === true)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68166){if((e68166 instanceof Error)){
var e__66518__auto____$15 = e68166;
if((e__66518__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$15;
}
} else {
throw e68166;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68162){if((e68162 instanceof Error)){
var e__66518__auto____$15 = e68162;
if((e__66518__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_68101_0__68139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(0));
if((ocr_68101_0__68139 === false)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68164){if((e68164 instanceof Error)){
var e__66518__auto____$16 = e68164;
if((e__66518__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_68101_1__68140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68101,(1));
if((ocr_68101_1__68140 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68100,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68165){if((e68165 instanceof Error)){
var e__66518__auto____$17 = e68165;
if((e__66518__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$17;
}
} else {
throw e68165;

}
}} else {
throw e__66518__auto____$16;
}
} else {
throw e68164;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68163){if((e68163 instanceof Error)){
var e__66518__auto____$16 = e68163;
if((e__66518__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$16;
}
} else {
throw e68163;

}
}} else {
throw e__66518__auto____$15;
}
} else {
throw e68162;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68161){if((e68161 instanceof Error)){
var e__66518__auto____$15 = e68161;
if((e__66518__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$15;
}
} else {
throw e68161;

}
}} else {
throw e__66518__auto____$14;
}
} else {
throw e68160;

}
}} else {
throw e__66518__auto____$13;
}
} else {
throw e68159;

}
}} else {
throw e__66518__auto____$12;
}
} else {
throw e68158;

}
}} else {
throw e__66518__auto____$11;
}
} else {
throw e68157;

}
}} else {
throw e__66518__auto____$10;
}
} else {
throw e68156;

}
}} else {
throw e__66518__auto____$9;
}
} else {
throw e68155;

}
}} else {
throw e__66518__auto____$8;
}
} else {
throw e68154;

}
}} else {
throw e__66518__auto____$7;
}
} else {
throw e68153;

}
}} else {
throw e__66518__auto____$6;
}
} else {
throw e68152;

}
}} else {
throw e__66518__auto____$5;
}
} else {
throw e68151;

}
}} else {
throw e__66518__auto____$4;
}
} else {
throw e68150;

}
}} else {
throw e__66518__auto____$3;
}
} else {
throw e68149;

}
}} else {
throw e__66518__auto____$2;
}
} else {
throw e68148;

}
}} else {
throw e__66518__auto____$1;
}
} else {
throw e68147;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68146){if((e68146 instanceof Error)){
var e__66518__auto____$1 = e68146;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68146;

}
}} else {
throw e__66518__auto__;
}
} else {
throw e68145;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68144){if((e68144 instanceof Error)){
var e__66518__auto__ = e68144;
if((e__66518__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__66518__auto__;
}
} else {
throw e68144;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_68215 = cljs.core.vec(eav);
var ocr_68216 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_68215)) && ((cljs.core.count(ocr_68215) === 3)))){
try{var ocr_68215_0__68241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_0__68241,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68215_1__68242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_1__68242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68215_2__68243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_2__68243,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e68309){if((e68309 instanceof Error)){
var e__66518__auto__ = e68309;
if((e__66518__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_68216)) && ((cljs.core.count(ocr_68216) === 3)))){
try{var ocr_68216_2__68246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(2));
if((ocr_68216_2__68246 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68311){if((e68311 instanceof Error)){
var e__66518__auto____$1 = e68311;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68216_2__68246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(2));
if((ocr_68216_2__68246 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68312){if((e68312 instanceof Error)){
var e__66518__auto____$2 = e68312;
if((e__66518__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$2;
}
} else {
throw e68312;

}
}} else {
throw e__66518__auto____$1;
}
} else {
throw e68311;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68310){if((e68310 instanceof Error)){
var e__66518__auto____$1 = e68310;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68310;

}
}} else {
throw e__66518__auto__;
}
} else {
throw e68309;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68304){if((e68304 instanceof Error)){
var e__66518__auto__ = e68304;
if((e__66518__auto__ === cljs.core.match.backtrack)){
try{var ocr_68215_2__68243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_2__68243,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_68216)) && ((cljs.core.count(ocr_68216) === 3)))){
try{var ocr_68216_1__68248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68248 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68307){if((e68307 instanceof Error)){
var e__66518__auto____$1 = e68307;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68216_1__68248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68248 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68308){if((e68308 instanceof Error)){
var e__66518__auto____$2 = e68308;
if((e__66518__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$2;
}
} else {
throw e68308;

}
}} else {
throw e__66518__auto____$1;
}
} else {
throw e68307;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68306){if((e68306 instanceof Error)){
var e__66518__auto____$1 = e68306;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68306;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68305){if((e68305 instanceof Error)){
var e__66518__auto____$1 = e68305;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68305;

}
}} else {
throw e__66518__auto__;
}
} else {
throw e68304;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68255){if((e68255 instanceof Error)){
var e__66518__auto__ = e68255;
if((e__66518__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_68216)) && ((cljs.core.count(ocr_68216) === 3)))){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === false)){
try{var ocr_68215_1__68242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_1__68242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68215_2__68243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_2__68243,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68303){if((e68303 instanceof Error)){
var e__66518__auto____$1 = e68303;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68303;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68302){if((e68302 instanceof Error)){
var e__66518__auto____$1 = e68302;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68302;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68258){if((e68258 instanceof Error)){
var e__66518__auto____$1 = e68258;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === true)){
try{var ocr_68215_2__68243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_2__68243,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_68215_1__68242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_1__68242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68299){if((e68299 instanceof Error)){
var e__66518__auto____$2 = e68299;
if((e__66518__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68300){if((e68300 instanceof Error)){
var e__66518__auto____$3 = e68300;
if((e__66518__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68301){if((e68301 instanceof Error)){
var e__66518__auto____$4 = e68301;
if((e__66518__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$4;
}
} else {
throw e68301;

}
}} else {
throw e__66518__auto____$3;
}
} else {
throw e68300;

}
}} else {
throw e__66518__auto____$2;
}
} else {
throw e68299;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68298){if((e68298 instanceof Error)){
var e__66518__auto____$2 = e68298;
if((e__66518__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$2;
}
} else {
throw e68298;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68259){if((e68259 instanceof Error)){
var e__66518__auto____$2 = e68259;
if((e__66518__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === false)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === true)){
try{var ocr_68215_2__68243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_2__68243,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68297){if((e68297 instanceof Error)){
var e__66518__auto____$3 = e68297;
if((e__66518__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$3;
}
} else {
throw e68297;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68295){if((e68295 instanceof Error)){
var e__66518__auto____$3 = e68295;
if((e__66518__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$3;
}
} else {
throw e68295;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68260){if((e68260 instanceof Error)){
var e__66518__auto____$3 = e68260;
if((e__66518__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_68216_2__68252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(2));
if((ocr_68216_2__68252 === true)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === true)){
try{var ocr_68215_1__68242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_1__68242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68294){if((e68294 instanceof Error)){
var e__66518__auto____$4 = e68294;
if((e__66518__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$4;
}
} else {
throw e68294;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68293){if((e68293 instanceof Error)){
var e__66518__auto____$4 = e68293;
if((e__66518__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$4;
}
} else {
throw e68293;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68261){if((e68261 instanceof Error)){
var e__66518__auto____$4 = e68261;
if((e__66518__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_68216_2__68252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(2));
if((ocr_68216_2__68252 === false)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === true)){
try{var ocr_68215_1__68242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_1__68242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68292){if((e68292 instanceof Error)){
var e__66518__auto____$5 = e68292;
if((e__66518__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$5;
}
} else {
throw e68292;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68291){if((e68291 instanceof Error)){
var e__66518__auto____$5 = e68291;
if((e__66518__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$5;
}
} else {
throw e68291;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68262){if((e68262 instanceof Error)){
var e__66518__auto____$5 = e68262;
if((e__66518__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_68216_2__68252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(2));
if((ocr_68216_2__68252 === true)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === false)){
try{var ocr_68215_1__68242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_1__68242,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68290){if((e68290 instanceof Error)){
var e__66518__auto____$6 = e68290;
if((e__66518__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$6;
}
} else {
throw e68290;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68287){if((e68287 instanceof Error)){
var e__66518__auto____$6 = e68287;
if((e__66518__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === true)){
try{var ocr_68215_0__68241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_0__68241,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68289){if((e68289 instanceof Error)){
var e__66518__auto____$7 = e68289;
if((e__66518__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$7;
}
} else {
throw e68289;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68288){if((e68288 instanceof Error)){
var e__66518__auto____$7 = e68288;
if((e__66518__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$7;
}
} else {
throw e68288;

}
}} else {
throw e__66518__auto____$6;
}
} else {
throw e68287;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68263){if((e68263 instanceof Error)){
var e__66518__auto____$6 = e68263;
if((e__66518__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_68216_2__68252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(2));
if((ocr_68216_2__68252 === false)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === true)){
try{var ocr_68215_0__68241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_0__68241,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68286){if((e68286 instanceof Error)){
var e__66518__auto____$7 = e68286;
if((e__66518__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$7;
}
} else {
throw e68286;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68285){if((e68285 instanceof Error)){
var e__66518__auto____$7 = e68285;
if((e__66518__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$7;
}
} else {
throw e68285;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68264){if((e68264 instanceof Error)){
var e__66518__auto____$7 = e68264;
if((e__66518__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_68216_2__68252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(2));
if((ocr_68216_2__68252 === true)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === false)){
try{var ocr_68215_0__68241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_68215_0__68241,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68284){if((e68284 instanceof Error)){
var e__66518__auto____$8 = e68284;
if((e__66518__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$8;
}
} else {
throw e68284;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68277){if((e68277 instanceof Error)){
var e__66518__auto____$8 = e68277;
if((e__66518__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === true)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68282){if((e68282 instanceof Error)){
var e__66518__auto____$9 = e68282;
if((e__66518__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68283){if((e68283 instanceof Error)){
var e__66518__auto____$10 = e68283;
if((e__66518__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$10;
}
} else {
throw e68283;

}
}} else {
throw e__66518__auto____$9;
}
} else {
throw e68282;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68278){if((e68278 instanceof Error)){
var e__66518__auto____$9 = e68278;
if((e__66518__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === false)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68280){if((e68280 instanceof Error)){
var e__66518__auto____$10 = e68280;
if((e__66518__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$10;
}
} else {
throw e68280;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68279){if((e68279 instanceof Error)){
var e__66518__auto____$10 = e68279;
if((e__66518__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$10;
}
} else {
throw e68279;

}
}} else {
throw e__66518__auto____$9;
}
} else {
throw e68278;

}
}} else {
throw e__66518__auto____$8;
}
} else {
throw e68277;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68265){if((e68265 instanceof Error)){
var e__66518__auto____$8 = e68265;
if((e__66518__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_68216_2__68252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(2));
if((ocr_68216_2__68252 === false)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === true)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68276){if((e68276 instanceof Error)){
var e__66518__auto____$9 = e68276;
if((e__66518__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$9;
}
} else {
throw e68276;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68275){if((e68275 instanceof Error)){
var e__66518__auto____$9 = e68275;
if((e__66518__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$9;
}
} else {
throw e68275;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68266){if((e68266 instanceof Error)){
var e__66518__auto____$9 = e68266;
if((e__66518__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_68216_2__68252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(2));
if((ocr_68216_2__68252 === true)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === false)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68274){if((e68274 instanceof Error)){
var e__66518__auto____$10 = e68274;
if((e__66518__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$10;
}
} else {
throw e68274;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68273){if((e68273 instanceof Error)){
var e__66518__auto____$10 = e68273;
if((e__66518__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$10;
}
} else {
throw e68273;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68267){if((e68267 instanceof Error)){
var e__66518__auto____$10 = e68267;
if((e__66518__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_68216_2__68252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(2));
if((ocr_68216_2__68252 === false)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === true)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68272){if((e68272 instanceof Error)){
var e__66518__auto____$11 = e68272;
if((e__66518__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$11;
}
} else {
throw e68272;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68269){if((e68269 instanceof Error)){
var e__66518__auto____$11 = e68269;
if((e__66518__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_68216_0__68250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(0));
if((ocr_68216_0__68250 === false)){
try{var ocr_68216_1__68251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68216,(1));
if((ocr_68216_1__68251 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_68215,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e68271){if((e68271 instanceof Error)){
var e__66518__auto____$12 = e68271;
if((e__66518__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$12;
}
} else {
throw e68271;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68270){if((e68270 instanceof Error)){
var e__66518__auto____$12 = e68270;
if((e__66518__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$12;
}
} else {
throw e68270;

}
}} else {
throw e__66518__auto____$11;
}
} else {
throw e68269;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68268){if((e68268 instanceof Error)){
var e__66518__auto____$11 = e68268;
if((e__66518__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$11;
}
} else {
throw e68268;

}
}} else {
throw e__66518__auto____$10;
}
} else {
throw e68267;

}
}} else {
throw e__66518__auto____$9;
}
} else {
throw e68266;

}
}} else {
throw e__66518__auto____$8;
}
} else {
throw e68265;

}
}} else {
throw e__66518__auto____$7;
}
} else {
throw e68264;

}
}} else {
throw e__66518__auto____$6;
}
} else {
throw e68263;

}
}} else {
throw e__66518__auto____$5;
}
} else {
throw e68262;

}
}} else {
throw e__66518__auto____$4;
}
} else {
throw e68261;

}
}} else {
throw e__66518__auto____$3;
}
} else {
throw e68260;

}
}} else {
throw e__66518__auto____$2;
}
} else {
throw e68259;

}
}} else {
throw e__66518__auto____$1;
}
} else {
throw e68258;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68256){if((e68256 instanceof Error)){
var e__66518__auto____$1 = e68256;
if((e__66518__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__66518__auto____$1;
}
} else {
throw e68256;

}
}} else {
throw e__66518__auto__;
}
} else {
throw e68255;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e68254){if((e68254 instanceof Error)){
var e__66518__auto__ = e68254;
if((e__66518__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__66518__auto__;
}
} else {
throw e68254;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68314){
var vec__68315 = p__68314;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68315,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68315,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__68313_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__68313_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68319){
var vec__68320 = p__68319;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68320,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68320,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__68318_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__68318_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__68323 = cljs.core.rest(ins);
var G__68324 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__68323,G__68324) : posh.lib.q_analyze.just_qvars.call(null,G__68323,G__68324));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68325_SHARP_){
return cljs.core.zipmap(qvars,p1__68325_SHARP_);
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
var vec__68326 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68326,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68326,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68326,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68326,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__68561 = var$;
var G__68562 = dbvarmap;
var G__68563 = cljs.core.rest(dbeavs);
var$ = G__68561;
dbvarmap = G__68562;
dbeavs = G__68563;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__68330 = cljs.core.rest(vars);
var G__68331 = dbvarmap;
var G__68332 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__68330,G__68331,G__68332) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__68330,G__68331,G__68332));
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
var G__68570 = (n + (1));
var G__68571 = cljs.core.rest(xs__$1);
n = G__68570;
xs__$1 = G__68571;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68333_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__68333_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__68333_SHARP_) : type.call(null,p1__68333_SHARP_));
} else {
return p1__68333_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__68334 = cljs.core.rest(ins);
var G__68335 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__68334,G__68335) : posh.lib.q_analyze.make_dbarg_map.call(null,G__68334,G__68335));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68336){
var vec__68337 = p__68336;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68337,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68337,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__68341_SHARP_,p2__68340_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__68340_SHARP_)){
return p1__68341_SHARP_;
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
var pred__68345 = cljs.core._EQ_;
var expr__68346 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__68345.cljs$core$IFn$_invoke$arity$2 ? pred__68345.cljs$core$IFn$_invoke$arity$2((1),expr__68346) : pred__68345.call(null,(1),expr__68346)))){
return true;
} else {
if(cljs.core.truth_((pred__68345.cljs$core$IFn$_invoke$arity$2 ? pred__68345.cljs$core$IFn$_invoke$arity$2((3),expr__68346) : pred__68345.call(null,(3),expr__68346)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__68588 = cljs.core.first(remaining);
var G__68589 = cljs.core.rest(remaining);
clause = G__68588;
remaining = G__68589;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__68590 = cljs.core.first(remaining);
var G__68591 = cljs.core.rest(remaining);
clause = G__68590;
remaining = G__68591;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__68348(s__68349){
return (new cljs.core.LazySeq(null,(function (){
var s__68349__$1 = s__68349;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68349__$1);
if(temp__5735__auto__){
var s__68349__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68349__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68349__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68351 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68350 = (0);
while(true){
if((i__68350 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68350);
cljs.core.chunk_append(b__68351,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__68595 = (i__68350 + (1));
i__68350 = G__68595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68351),posh$lib$q_analyze$resolve_any_idents_$_iter__68348(cljs.core.chunk_rest(s__68349__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68351),null);
}
} else {
var var_value = cljs.core.first(s__68349__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__68348(cljs.core.rest(s__68349__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68357){
var vec__68358 = p__68357;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68358,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68358,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68361){
var vec__68362 = p__68361;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68362,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68365){
var vec__68366 = p__68365;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68366,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68366,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68369){
var vec__68370 = p__68369;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68370,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68370,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__68374 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__68375 = cljs.core.vec(r);
var fexpr__68373 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__68373.cljs$core$IFn$_invoke$arity$2 ? fexpr__68373.cljs$core$IFn$_invoke$arity$2(G__68374,G__68375) : fexpr__68373.call(null,G__68374,G__68375));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68377){
var vec__68378 = p__68377;
var seq__68379 = cljs.core.seq(vec__68378);
var first__68380 = cljs.core.first(seq__68379);
var seq__68379__$1 = cljs.core.next(seq__68379);
var db = first__68380;
var eav = seq__68379__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68381){
var vec__68382 = p__68381;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68382,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68382,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__68355_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__68355_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__68355_SHARP_) : linked_qvars.call(null,p1__68355_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__68355_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__68356_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__68356_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__68356_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
