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
var G__29822 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__29822) : stop_at_QMARK_.call(null,G__29822));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__29825 = stop_at_QMARK_;
var G__29826 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__29825,G__29826) : posh.lib.q_analyze.take_until.call(null,G__29825,G__29826));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__29828 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__29828) : rest_at_QMARK_.call(null,G__29828));
}
})())){
return ls;
} else {
var G__30437 = rest_at_QMARK_;
var G__30438 = cljs.core.rest(ls);
rest_at_QMARK_ = G__30437;
ls = G__30438;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__29829 = split_at_QMARK_;
var G__29830 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__29829,G__29830) : posh.lib.q_analyze.split_list_at.call(null,G__29829,G__29830));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__29831 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__29831) : posh.lib.q_analyze.get_all_vars.call(null,G__29831));
})(),(function (){var G__29833 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__29833) : posh.lib.q_analyze.get_all_vars.call(null,G__29833));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__29834 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__29834) : posh.lib.q_analyze.get_all_vars.call(null,G__29834));
})(),cljs.core.first(query));
} else {
var G__29835 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__29835) : posh.lib.q_analyze.get_all_vars.call(null,G__29835));

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
var G__29846 = cljs.core.rest(eav);
var G__29847 = (n - (1));
var G__29848 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__29849 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__29846,G__29847,G__29848,G__29849) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__29846,G__29847,G__29848,G__29849));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__29853 = cljs.core.rest(eav);
var G__29854 = (n - (1));
var G__29855 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__29856 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__29853,G__29854,G__29855,G__29856) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__29853,G__29854,G__29855,G__29856));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__29857 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__29857) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__29857));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__29858 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__29858) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__29858));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__29860 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__29860) : posh.lib.q_analyze.get_eavs.call(null,G__29860));
})(),(function (){var G__29861 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__29861) : posh.lib.q_analyze.get_eavs.call(null,G__29861));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__29862 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__29862) : posh.lib.q_analyze.get_eavs.call(null,G__29862));
})(),(function (){var G__29863 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__29863) : posh.lib.q_analyze.get_eavs.call(null,G__29863));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__29864 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__29864) : posh.lib.q_analyze.get_eavs.call(null,G__29864));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_29872 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_29872)) && ((cljs.core.count(ocr_29872) === 2)))){
try{var ocr_29872_0__29878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29872,(0));
if(((cljs.core.vector_QMARK_(ocr_29872_0__29878)) && ((cljs.core.count(ocr_29872_0__29878) === 5)))){
try{var ocr_29872_0__29878_0__29880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29872_0__29878,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29872_0__29878_0__29880,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29872_0__29878,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29872_0__29878,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29872_0__29878,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29872,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__29901 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__29901) : posh.lib.q_analyze.get_eavs.call(null,G__29901));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e29900){if((e29900 instanceof Error)){
var e__28452__auto__ = e29900;
if((e__28452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto__;
}
} else {
throw e29900;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29899){if((e29899 instanceof Error)){
var e__28452__auto__ = e29899;
if((e__28452__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto__;
}
} else {
throw e29899;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29891){if((e29891 instanceof Error)){
var e__28452__auto__ = e29891;
if((e__28452__auto__ === cljs.core.match.backtrack)){
var G__29898 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__29898) : posh.lib.q_analyze.get_eavs.call(null,G__29898));
} else {
throw e__28452__auto__;
}
} else {
throw e29891;

}
}} else {
var G__29902 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__29902) : posh.lib.q_analyze.get_eavs.call(null,G__29902));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__29903){
var vec__29904 = p__29903;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29904,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29907_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__29907_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__29907_SHARP_);
} else {
return p1__29907_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29916 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__29916) : posh.lib.q_analyze.count_qvars.call(null,G__29916));
})(),(function (){var G__29917 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__29917) : posh.lib.q_analyze.count_qvars.call(null,G__29917));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__29918 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__29918) : posh.lib.q_analyze.count_qvars.call(null,G__29918));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__29922(s__29923){
return (new cljs.core.LazySeq(null,(function (){
var s__29923__$1 = s__29923;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29923__$1);
if(temp__5735__auto__){
var s__29923__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29923__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29923__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29925 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29924 = (0);
while(true){
if((i__29924 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__29924);
cljs.core.chunk_append(b__29925,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__30488 = (i__29924 + (1));
i__29924 = G__30488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29925),posh$lib$q_analyze$fill_qvar_set_$_iter__29922(cljs.core.chunk_rest(s__29923__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29925),null);
}
} else {
var r = cljs.core.first(s__29923__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__29922(cljs.core.rest(s__29923__$2)));
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
return cljs.core.cons((function (){var G__29935 = cljs.core.first(seq1);
var G__29936 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29935,G__29936) : f.call(null,G__29935,G__29936));
})(),(function (){var G__29937 = f;
var G__29938 = cljs.core.rest(seq1);
var G__29939 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__29937,G__29938,G__29939) : posh.lib.q_analyze.seq_merge_with.call(null,G__29937,G__29938,G__29939));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__29946){
var vec__29947 = p__29946;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29947,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29947,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29947,(2),null);
var eav = vec__29947;
var vec__29950 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29950,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29950,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29950,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__29953(s__29954){
return (new cljs.core.LazySeq(null,(function (){
var s__29954__$1 = s__29954;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29954__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__29954__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__29953_$_iter__29955(s__29956){
return (new cljs.core.LazySeq(null,((function (s__29954__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav){
return (function (){
var s__29956__$1 = s__29956;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29956__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__29956__$1,s__29954__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__29953_$_iter__29955_$_iter__29957(s__29958){
return (new cljs.core.LazySeq(null,((function (s__29956__$1,s__29954__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav){
return (function (){
var s__29958__$1 = s__29958;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__29958__$1);
if(temp__5735__auto____$2){
var s__29958__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__29958__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__29958__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__29960 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__29959 = (0);
while(true){
if((i__29959 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__29959);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__29959,s__29958__$1,s__29956__$1,s__29954__$1,vv,c__4580__auto__,size__4581__auto__,b__29960,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav){
return (function (p1__29944_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__29944_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__29959,s__29958__$1,s__29956__$1,s__29954__$1,vv,c__4580__auto__,size__4581__auto__,b__29960,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__29959,s__29958__$1,s__29956__$1,s__29954__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__29960,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav){
return (function (p__29973){
var vec__29974 = p__29973;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29974,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29974,(1),null);
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
});})(i__29959,s__29958__$1,s__29956__$1,s__29954__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__29960,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__29959,s__29958__$1,s__29956__$1,s__29954__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__29960,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav){
return (function (p1__29945_SHARP_){
if(cljs.core.truth_(p1__29945_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__29959,s__29958__$1,s__29956__$1,s__29954__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__29960,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__29960,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__30516 = (i__29959 + (1));
i__29959 = G__30516;
continue;
} else {
var G__30517 = (i__29959 + (1));
i__29959 = G__30517;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29960),posh$lib$q_analyze$pattern_from_eav__old_$_iter__29953_$_iter__29955_$_iter__29957(cljs.core.chunk_rest(s__29958__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29960),null);
}
} else {
var vv = cljs.core.first(s__29958__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__29958__$1,s__29956__$1,s__29954__$1,vv,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav){
return (function (p1__29944_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__29944_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__29958__$1,s__29956__$1,s__29954__$1,vv,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__29958__$1,s__29956__$1,s__29954__$1,wildcard_count,vv,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav){
return (function (p__29977){
var vec__29978 = p__29977;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29978,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29978,(1),null);
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
});})(s__29958__$1,s__29956__$1,s__29954__$1,wildcard_count,vv,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__29958__$1,s__29956__$1,s__29954__$1,wildcard_count,exposed_qvars,vv,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav){
return (function (p1__29945_SHARP_){
if(cljs.core.truth_(p1__29945_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__29958__$1,s__29956__$1,s__29954__$1,wildcard_count,exposed_qvars,vv,s__29958__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__29953_$_iter__29955_$_iter__29957(cljs.core.rest(s__29958__$2)));
} else {
var G__30522 = cljs.core.rest(s__29958__$2);
s__29958__$1 = G__30522;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__29956__$1,s__29954__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav))
,null,null));
});})(s__29956__$1,s__29954__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__29953_$_iter__29955(cljs.core.rest(s__29956__$1)));
} else {
var G__30523 = cljs.core.rest(s__29956__$1);
s__29956__$1 = G__30523;
continue;
}
} else {
return null;
}
break;
}
});})(s__29954__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav))
,null,null));
});})(s__29954__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__29950,qe,qa,qv,vec__29947,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__29953(cljs.core.rest(s__29954__$1)));
} else {
var G__30530 = cljs.core.rest(s__29954__$1);
s__29954__$1 = G__30530;
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
var ocr_29988 = cljs.core.vec(eav);
var ocr_29989 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_29988)) && ((cljs.core.count(ocr_29988) === 3)))){
try{var ocr_29988_0__30017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_0__30017,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_29988_1__30018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_1__30018,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_29988_2__30019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_2__30019,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30132){if((e30132 instanceof Error)){
var e__28452__auto__ = e30132;
if((e__28452__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_29989)) && ((cljs.core.count(ocr_29989) === 3)))){
try{var ocr_29989_2__30022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30022 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30134){if((e30134 instanceof Error)){
var e__28452__auto____$1 = e30134;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30022 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30135){if((e30135 instanceof Error)){
var e__28452__auto____$2 = e30135;
if((e__28452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$2;
}
} else {
throw e30135;

}
}} else {
throw e__28452__auto____$1;
}
} else {
throw e30134;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30133){if((e30133 instanceof Error)){
var e__28452__auto____$1 = e30133;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30133;

}
}} else {
throw e__28452__auto__;
}
} else {
throw e30132;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30126){if((e30126 instanceof Error)){
var e__28452__auto__ = e30126;
if((e__28452__auto__ === cljs.core.match.backtrack)){
try{var ocr_29988_2__30019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_2__30019,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_29989)) && ((cljs.core.count(ocr_29989) === 3)))){
try{var ocr_29989_1__30024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30024 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30129){if((e30129 instanceof Error)){
var e__28452__auto____$1 = e30129;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_29989_1__30024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30024 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30130){if((e30130 instanceof Error)){
var e__28452__auto____$2 = e30130;
if((e__28452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$2;
}
} else {
throw e30130;

}
}} else {
throw e__28452__auto____$1;
}
} else {
throw e30129;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30128){if((e30128 instanceof Error)){
var e__28452__auto____$1 = e30128;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30128;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30127){if((e30127 instanceof Error)){
var e__28452__auto____$1 = e30127;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30127;

}
}} else {
throw e__28452__auto__;
}
} else {
throw e30126;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30033){if((e30033 instanceof Error)){
var e__28452__auto__ = e30033;
if((e__28452__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_29989)) && ((cljs.core.count(ocr_29989) === 3)))){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === false)){
try{var ocr_29988_1__30018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_1__30018,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_29988_2__30019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_2__30019,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30125){if((e30125 instanceof Error)){
var e__28452__auto____$1 = e30125;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30125;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30120){if((e30120 instanceof Error)){
var e__28452__auto____$1 = e30120;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30120;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30035){if((e30035 instanceof Error)){
var e__28452__auto____$1 = e30035;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === true)){
try{var ocr_29988_2__30019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_2__30019,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_29988_1__30018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_1__30018,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30114){if((e30114 instanceof Error)){
var e__28452__auto____$2 = e30114;
if((e__28452__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30115){if((e30115 instanceof Error)){
var e__28452__auto____$3 = e30115;
if((e__28452__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30117){if((e30117 instanceof Error)){
var e__28452__auto____$4 = e30117;
if((e__28452__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$4;
}
} else {
throw e30117;

}
}} else {
throw e__28452__auto____$3;
}
} else {
throw e30115;

}
}} else {
throw e__28452__auto____$2;
}
} else {
throw e30114;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30109){if((e30109 instanceof Error)){
var e__28452__auto____$2 = e30109;
if((e__28452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$2;
}
} else {
throw e30109;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30036){if((e30036 instanceof Error)){
var e__28452__auto____$2 = e30036;
if((e__28452__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === false)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === true)){
try{var ocr_29988_2__30019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_2__30019,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30107){if((e30107 instanceof Error)){
var e__28452__auto____$3 = e30107;
if((e__28452__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$3;
}
} else {
throw e30107;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30104){if((e30104 instanceof Error)){
var e__28452__auto____$3 = e30104;
if((e__28452__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === false)){
try{var ocr_29988_2__30019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_2__30019,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30106){if((e30106 instanceof Error)){
var e__28452__auto____$4 = e30106;
if((e__28452__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$4;
}
} else {
throw e30106;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30105){if((e30105 instanceof Error)){
var e__28452__auto____$4 = e30105;
if((e__28452__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$4;
}
} else {
throw e30105;

}
}} else {
throw e__28452__auto____$3;
}
} else {
throw e30104;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30037){if((e30037 instanceof Error)){
var e__28452__auto____$3 = e30037;
if((e__28452__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === true)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === true)){
try{var ocr_29988_1__30018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_1__30018,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30097){if((e30097 instanceof Error)){
var e__28452__auto____$4 = e30097;
if((e__28452__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$4;
}
} else {
throw e30097;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30092){if((e30092 instanceof Error)){
var e__28452__auto____$4 = e30092;
if((e__28452__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$4;
}
} else {
throw e30092;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30038){if((e30038 instanceof Error)){
var e__28452__auto____$4 = e30038;
if((e__28452__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === false)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === true)){
try{var ocr_29988_1__30018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_1__30018,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30091){if((e30091 instanceof Error)){
var e__28452__auto____$5 = e30091;
if((e__28452__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$5;
}
} else {
throw e30091;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30090){if((e30090 instanceof Error)){
var e__28452__auto____$5 = e30090;
if((e__28452__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$5;
}
} else {
throw e30090;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30039){if((e30039 instanceof Error)){
var e__28452__auto____$5 = e30039;
if((e__28452__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === true)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === false)){
try{var ocr_29988_1__30018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_1__30018,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30088){if((e30088 instanceof Error)){
var e__28452__auto____$6 = e30088;
if((e__28452__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$6;
}
} else {
throw e30088;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30087){if((e30087 instanceof Error)){
var e__28452__auto____$6 = e30087;
if((e__28452__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$6;
}
} else {
throw e30087;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30040){if((e30040 instanceof Error)){
var e__28452__auto____$6 = e30040;
if((e__28452__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === false)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === false)){
try{var ocr_29988_1__30018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_1__30018,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30086){if((e30086 instanceof Error)){
var e__28452__auto____$7 = e30086;
if((e__28452__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$7;
}
} else {
throw e30086;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30085){if((e30085 instanceof Error)){
var e__28452__auto____$7 = e30085;
if((e__28452__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$7;
}
} else {
throw e30085;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30041){if((e30041 instanceof Error)){
var e__28452__auto____$7 = e30041;
if((e__28452__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === true)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === true)){
try{var ocr_29988_0__30017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_0__30017,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30084){if((e30084 instanceof Error)){
var e__28452__auto____$8 = e30084;
if((e__28452__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$8;
}
} else {
throw e30084;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30080){if((e30080 instanceof Error)){
var e__28452__auto____$8 = e30080;
if((e__28452__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$8;
}
} else {
throw e30080;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30042){if((e30042 instanceof Error)){
var e__28452__auto____$8 = e30042;
if((e__28452__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === false)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === true)){
try{var ocr_29988_0__30017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_0__30017,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30078){if((e30078 instanceof Error)){
var e__28452__auto____$9 = e30078;
if((e__28452__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$9;
}
} else {
throw e30078;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30076){if((e30076 instanceof Error)){
var e__28452__auto____$9 = e30076;
if((e__28452__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$9;
}
} else {
throw e30076;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30043){if((e30043 instanceof Error)){
var e__28452__auto____$9 = e30043;
if((e__28452__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === true)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === false)){
try{var ocr_29988_0__30017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_0__30017,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30075){if((e30075 instanceof Error)){
var e__28452__auto____$10 = e30075;
if((e__28452__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$10;
}
} else {
throw e30075;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30073){if((e30073 instanceof Error)){
var e__28452__auto____$10 = e30073;
if((e__28452__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$10;
}
} else {
throw e30073;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30044){if((e30044 instanceof Error)){
var e__28452__auto____$10 = e30044;
if((e__28452__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === false)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === false)){
try{var ocr_29988_0__30017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_29988_0__30017,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30067){if((e30067 instanceof Error)){
var e__28452__auto____$11 = e30067;
if((e__28452__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$11;
}
} else {
throw e30067;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30066){if((e30066 instanceof Error)){
var e__28452__auto____$11 = e30066;
if((e__28452__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$11;
}
} else {
throw e30066;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30045){if((e30045 instanceof Error)){
var e__28452__auto____$11 = e30045;
if((e__28452__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === true)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === true)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30065){if((e30065 instanceof Error)){
var e__28452__auto____$12 = e30065;
if((e__28452__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$12;
}
} else {
throw e30065;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30060){if((e30060 instanceof Error)){
var e__28452__auto____$12 = e30060;
if((e__28452__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === false)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30064){if((e30064 instanceof Error)){
var e__28452__auto____$13 = e30064;
if((e__28452__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$13;
}
} else {
throw e30064;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30061){if((e30061 instanceof Error)){
var e__28452__auto____$13 = e30061;
if((e__28452__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === true)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30063){if((e30063 instanceof Error)){
var e__28452__auto____$14 = e30063;
if((e__28452__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$14;
}
} else {
throw e30063;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30062){if((e30062 instanceof Error)){
var e__28452__auto____$14 = e30062;
if((e__28452__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$14;
}
} else {
throw e30062;

}
}} else {
throw e__28452__auto____$13;
}
} else {
throw e30061;

}
}} else {
throw e__28452__auto____$12;
}
} else {
throw e30060;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30046){if((e30046 instanceof Error)){
var e__28452__auto____$12 = e30046;
if((e__28452__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === false)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === true)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30059){if((e30059 instanceof Error)){
var e__28452__auto____$13 = e30059;
if((e__28452__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$13;
}
} else {
throw e30059;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30058){if((e30058 instanceof Error)){
var e__28452__auto____$13 = e30058;
if((e__28452__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$13;
}
} else {
throw e30058;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30047){if((e30047 instanceof Error)){
var e__28452__auto____$13 = e30047;
if((e__28452__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === true)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === false)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30057){if((e30057 instanceof Error)){
var e__28452__auto____$14 = e30057;
if((e__28452__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$14;
}
} else {
throw e30057;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30056){if((e30056 instanceof Error)){
var e__28452__auto____$14 = e30056;
if((e__28452__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$14;
}
} else {
throw e30056;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30048){if((e30048 instanceof Error)){
var e__28452__auto____$14 = e30048;
if((e__28452__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_29989_2__30029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(2));
if((ocr_29989_2__30029 === false)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === true)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30054){if((e30054 instanceof Error)){
var e__28452__auto____$15 = e30054;
if((e__28452__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$15;
}
} else {
throw e30054;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30050){if((e30050 instanceof Error)){
var e__28452__auto____$15 = e30050;
if((e__28452__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_29989_0__30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(0));
if((ocr_29989_0__30027 === false)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30052){if((e30052 instanceof Error)){
var e__28452__auto____$16 = e30052;
if((e__28452__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_29989_1__30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29989,(1));
if((ocr_29989_1__30028 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_29988,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30053){if((e30053 instanceof Error)){
var e__28452__auto____$17 = e30053;
if((e__28452__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$17;
}
} else {
throw e30053;

}
}} else {
throw e__28452__auto____$16;
}
} else {
throw e30052;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30051){if((e30051 instanceof Error)){
var e__28452__auto____$16 = e30051;
if((e__28452__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$16;
}
} else {
throw e30051;

}
}} else {
throw e__28452__auto____$15;
}
} else {
throw e30050;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30049){if((e30049 instanceof Error)){
var e__28452__auto____$15 = e30049;
if((e__28452__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$15;
}
} else {
throw e30049;

}
}} else {
throw e__28452__auto____$14;
}
} else {
throw e30048;

}
}} else {
throw e__28452__auto____$13;
}
} else {
throw e30047;

}
}} else {
throw e__28452__auto____$12;
}
} else {
throw e30046;

}
}} else {
throw e__28452__auto____$11;
}
} else {
throw e30045;

}
}} else {
throw e__28452__auto____$10;
}
} else {
throw e30044;

}
}} else {
throw e__28452__auto____$9;
}
} else {
throw e30043;

}
}} else {
throw e__28452__auto____$8;
}
} else {
throw e30042;

}
}} else {
throw e__28452__auto____$7;
}
} else {
throw e30041;

}
}} else {
throw e__28452__auto____$6;
}
} else {
throw e30040;

}
}} else {
throw e__28452__auto____$5;
}
} else {
throw e30039;

}
}} else {
throw e__28452__auto____$4;
}
} else {
throw e30038;

}
}} else {
throw e__28452__auto____$3;
}
} else {
throw e30037;

}
}} else {
throw e__28452__auto____$2;
}
} else {
throw e30036;

}
}} else {
throw e__28452__auto____$1;
}
} else {
throw e30035;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30034){if((e30034 instanceof Error)){
var e__28452__auto____$1 = e30034;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30034;

}
}} else {
throw e__28452__auto__;
}
} else {
throw e30033;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30032){if((e30032 instanceof Error)){
var e__28452__auto__ = e30032;
if((e__28452__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__28452__auto__;
}
} else {
throw e30032;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_30143 = cljs.core.vec(eav);
var ocr_30144 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_30143)) && ((cljs.core.count(ocr_30143) === 3)))){
try{var ocr_30143_0__30170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_0__30170,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30143_1__30171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_1__30171,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30143_2__30172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_2__30172,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e30315){if((e30315 instanceof Error)){
var e__28452__auto__ = e30315;
if((e__28452__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_30144)) && ((cljs.core.count(ocr_30144) === 3)))){
try{var ocr_30144_2__30175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(2));
if((ocr_30144_2__30175 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30318){if((e30318 instanceof Error)){
var e__28452__auto____$1 = e30318;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30144_2__30175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(2));
if((ocr_30144_2__30175 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30319){if((e30319 instanceof Error)){
var e__28452__auto____$2 = e30319;
if((e__28452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$2;
}
} else {
throw e30319;

}
}} else {
throw e__28452__auto____$1;
}
} else {
throw e30318;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30316){if((e30316 instanceof Error)){
var e__28452__auto____$1 = e30316;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30316;

}
}} else {
throw e__28452__auto__;
}
} else {
throw e30315;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30310){if((e30310 instanceof Error)){
var e__28452__auto__ = e30310;
if((e__28452__auto__ === cljs.core.match.backtrack)){
try{var ocr_30143_2__30172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_2__30172,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_30144)) && ((cljs.core.count(ocr_30144) === 3)))){
try{var ocr_30144_1__30178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30178 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30313){if((e30313 instanceof Error)){
var e__28452__auto____$1 = e30313;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30144_1__30178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30178 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30314){if((e30314 instanceof Error)){
var e__28452__auto____$2 = e30314;
if((e__28452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$2;
}
} else {
throw e30314;

}
}} else {
throw e__28452__auto____$1;
}
} else {
throw e30313;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30312){if((e30312 instanceof Error)){
var e__28452__auto____$1 = e30312;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30312;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30311){if((e30311 instanceof Error)){
var e__28452__auto____$1 = e30311;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30311;

}
}} else {
throw e__28452__auto__;
}
} else {
throw e30310;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30209){if((e30209 instanceof Error)){
var e__28452__auto__ = e30209;
if((e__28452__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_30144)) && ((cljs.core.count(ocr_30144) === 3)))){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === false)){
try{var ocr_30143_1__30171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_1__30171,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30143_2__30172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_2__30172,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30309){if((e30309 instanceof Error)){
var e__28452__auto____$1 = e30309;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30309;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30308){if((e30308 instanceof Error)){
var e__28452__auto____$1 = e30308;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30308;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30211){if((e30211 instanceof Error)){
var e__28452__auto____$1 = e30211;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === true)){
try{var ocr_30143_2__30172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_2__30172,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30143_1__30171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_1__30171,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30301){if((e30301 instanceof Error)){
var e__28452__auto____$2 = e30301;
if((e__28452__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30306){if((e30306 instanceof Error)){
var e__28452__auto____$3 = e30306;
if((e__28452__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30307){if((e30307 instanceof Error)){
var e__28452__auto____$4 = e30307;
if((e__28452__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$4;
}
} else {
throw e30307;

}
}} else {
throw e__28452__auto____$3;
}
} else {
throw e30306;

}
}} else {
throw e__28452__auto____$2;
}
} else {
throw e30301;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30300){if((e30300 instanceof Error)){
var e__28452__auto____$2 = e30300;
if((e__28452__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$2;
}
} else {
throw e30300;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30212){if((e30212 instanceof Error)){
var e__28452__auto____$2 = e30212;
if((e__28452__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === false)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === true)){
try{var ocr_30143_2__30172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_2__30172,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30298){if((e30298 instanceof Error)){
var e__28452__auto____$3 = e30298;
if((e__28452__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$3;
}
} else {
throw e30298;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30297){if((e30297 instanceof Error)){
var e__28452__auto____$3 = e30297;
if((e__28452__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$3;
}
} else {
throw e30297;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30213){if((e30213 instanceof Error)){
var e__28452__auto____$3 = e30213;
if((e__28452__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_30144_2__30183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(2));
if((ocr_30144_2__30183 === true)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === true)){
try{var ocr_30143_1__30171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_1__30171,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30292){if((e30292 instanceof Error)){
var e__28452__auto____$4 = e30292;
if((e__28452__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$4;
}
} else {
throw e30292;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30290){if((e30290 instanceof Error)){
var e__28452__auto____$4 = e30290;
if((e__28452__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$4;
}
} else {
throw e30290;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30214){if((e30214 instanceof Error)){
var e__28452__auto____$4 = e30214;
if((e__28452__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_30144_2__30183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(2));
if((ocr_30144_2__30183 === false)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === true)){
try{var ocr_30143_1__30171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_1__30171,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30288){if((e30288 instanceof Error)){
var e__28452__auto____$5 = e30288;
if((e__28452__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$5;
}
} else {
throw e30288;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30287){if((e30287 instanceof Error)){
var e__28452__auto____$5 = e30287;
if((e__28452__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$5;
}
} else {
throw e30287;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30215){if((e30215 instanceof Error)){
var e__28452__auto____$5 = e30215;
if((e__28452__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_30144_2__30183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(2));
if((ocr_30144_2__30183 === true)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === false)){
try{var ocr_30143_1__30171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_1__30171,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30286){if((e30286 instanceof Error)){
var e__28452__auto____$6 = e30286;
if((e__28452__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$6;
}
} else {
throw e30286;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30283){if((e30283 instanceof Error)){
var e__28452__auto____$6 = e30283;
if((e__28452__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === true)){
try{var ocr_30143_0__30170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_0__30170,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30285){if((e30285 instanceof Error)){
var e__28452__auto____$7 = e30285;
if((e__28452__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$7;
}
} else {
throw e30285;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30284){if((e30284 instanceof Error)){
var e__28452__auto____$7 = e30284;
if((e__28452__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$7;
}
} else {
throw e30284;

}
}} else {
throw e__28452__auto____$6;
}
} else {
throw e30283;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30216){if((e30216 instanceof Error)){
var e__28452__auto____$6 = e30216;
if((e__28452__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_30144_2__30183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(2));
if((ocr_30144_2__30183 === false)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === true)){
try{var ocr_30143_0__30170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_0__30170,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30281){if((e30281 instanceof Error)){
var e__28452__auto____$7 = e30281;
if((e__28452__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$7;
}
} else {
throw e30281;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30280){if((e30280 instanceof Error)){
var e__28452__auto____$7 = e30280;
if((e__28452__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$7;
}
} else {
throw e30280;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30217){if((e30217 instanceof Error)){
var e__28452__auto____$7 = e30217;
if((e__28452__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_30144_2__30183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(2));
if((ocr_30144_2__30183 === true)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === false)){
try{var ocr_30143_0__30170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30143_0__30170,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30278){if((e30278 instanceof Error)){
var e__28452__auto____$8 = e30278;
if((e__28452__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$8;
}
} else {
throw e30278;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30269){if((e30269 instanceof Error)){
var e__28452__auto____$8 = e30269;
if((e__28452__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === true)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30276){if((e30276 instanceof Error)){
var e__28452__auto____$9 = e30276;
if((e__28452__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30277){if((e30277 instanceof Error)){
var e__28452__auto____$10 = e30277;
if((e__28452__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$10;
}
} else {
throw e30277;

}
}} else {
throw e__28452__auto____$9;
}
} else {
throw e30276;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30270){if((e30270 instanceof Error)){
var e__28452__auto____$9 = e30270;
if((e__28452__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === false)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30275){if((e30275 instanceof Error)){
var e__28452__auto____$10 = e30275;
if((e__28452__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$10;
}
} else {
throw e30275;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30274){if((e30274 instanceof Error)){
var e__28452__auto____$10 = e30274;
if((e__28452__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$10;
}
} else {
throw e30274;

}
}} else {
throw e__28452__auto____$9;
}
} else {
throw e30270;

}
}} else {
throw e__28452__auto____$8;
}
} else {
throw e30269;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30218){if((e30218 instanceof Error)){
var e__28452__auto____$8 = e30218;
if((e__28452__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_30144_2__30183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(2));
if((ocr_30144_2__30183 === false)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === true)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30267){if((e30267 instanceof Error)){
var e__28452__auto____$9 = e30267;
if((e__28452__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$9;
}
} else {
throw e30267;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30266){if((e30266 instanceof Error)){
var e__28452__auto____$9 = e30266;
if((e__28452__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$9;
}
} else {
throw e30266;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30219){if((e30219 instanceof Error)){
var e__28452__auto____$9 = e30219;
if((e__28452__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_30144_2__30183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(2));
if((ocr_30144_2__30183 === true)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === false)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30245){if((e30245 instanceof Error)){
var e__28452__auto____$10 = e30245;
if((e__28452__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$10;
}
} else {
throw e30245;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30240){if((e30240 instanceof Error)){
var e__28452__auto____$10 = e30240;
if((e__28452__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$10;
}
} else {
throw e30240;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30220){if((e30220 instanceof Error)){
var e__28452__auto____$10 = e30220;
if((e__28452__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_30144_2__30183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(2));
if((ocr_30144_2__30183 === false)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === true)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30233){if((e30233 instanceof Error)){
var e__28452__auto____$11 = e30233;
if((e__28452__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$11;
}
} else {
throw e30233;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30225){if((e30225 instanceof Error)){
var e__28452__auto____$11 = e30225;
if((e__28452__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_30144_0__30181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(0));
if((ocr_30144_0__30181 === false)){
try{var ocr_30144_1__30182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30144,(1));
if((ocr_30144_1__30182 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30143,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30228){if((e30228 instanceof Error)){
var e__28452__auto____$12 = e30228;
if((e__28452__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$12;
}
} else {
throw e30228;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30227){if((e30227 instanceof Error)){
var e__28452__auto____$12 = e30227;
if((e__28452__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$12;
}
} else {
throw e30227;

}
}} else {
throw e__28452__auto____$11;
}
} else {
throw e30225;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30224){if((e30224 instanceof Error)){
var e__28452__auto____$11 = e30224;
if((e__28452__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$11;
}
} else {
throw e30224;

}
}} else {
throw e__28452__auto____$10;
}
} else {
throw e30220;

}
}} else {
throw e__28452__auto____$9;
}
} else {
throw e30219;

}
}} else {
throw e__28452__auto____$8;
}
} else {
throw e30218;

}
}} else {
throw e__28452__auto____$7;
}
} else {
throw e30217;

}
}} else {
throw e__28452__auto____$6;
}
} else {
throw e30216;

}
}} else {
throw e__28452__auto____$5;
}
} else {
throw e30215;

}
}} else {
throw e__28452__auto____$4;
}
} else {
throw e30214;

}
}} else {
throw e__28452__auto____$3;
}
} else {
throw e30213;

}
}} else {
throw e__28452__auto____$2;
}
} else {
throw e30212;

}
}} else {
throw e__28452__auto____$1;
}
} else {
throw e30211;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30210){if((e30210 instanceof Error)){
var e__28452__auto____$1 = e30210;
if((e__28452__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28452__auto____$1;
}
} else {
throw e30210;

}
}} else {
throw e__28452__auto__;
}
} else {
throw e30209;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30208){if((e30208 instanceof Error)){
var e__28452__auto__ = e30208;
if((e__28452__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__28452__auto__;
}
} else {
throw e30208;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30324){
var vec__30325 = p__30324;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30325,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30323_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__30323_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30329){
var vec__30330 = p__30329;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30330,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30330,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30328_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__30328_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__30333 = cljs.core.rest(ins);
var G__30334 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__30333,G__30334) : posh.lib.q_analyze.just_qvars.call(null,G__30333,G__30334));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30335_SHARP_){
return cljs.core.zipmap(qvars,p1__30335_SHARP_);
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
var vec__30345 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__30668 = var$;
var G__30669 = dbvarmap;
var G__30670 = cljs.core.rest(dbeavs);
var$ = G__30668;
dbvarmap = G__30669;
dbeavs = G__30670;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__30348 = cljs.core.rest(vars);
var G__30349 = dbvarmap;
var G__30350 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__30348,G__30349,G__30350) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__30348,G__30349,G__30350));
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
var G__30672 = (n + (1));
var G__30673 = cljs.core.rest(xs__$1);
n = G__30672;
xs__$1 = G__30673;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30358_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__30358_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__30358_SHARP_) : type.call(null,p1__30358_SHARP_));
} else {
return p1__30358_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__30360 = cljs.core.rest(ins);
var G__30361 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__30360,G__30361) : posh.lib.q_analyze.make_dbarg_map.call(null,G__30360,G__30361));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30363){
var vec__30365 = p__30363;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30365,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30365,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__30372_SHARP_,p2__30371_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__30371_SHARP_)){
return p1__30372_SHARP_;
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
var pred__30381 = cljs.core._EQ_;
var expr__30382 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__30381.cljs$core$IFn$_invoke$arity$2 ? pred__30381.cljs$core$IFn$_invoke$arity$2((1),expr__30382) : pred__30381.call(null,(1),expr__30382)))){
return true;
} else {
if(cljs.core.truth_((pred__30381.cljs$core$IFn$_invoke$arity$2 ? pred__30381.cljs$core$IFn$_invoke$arity$2((3),expr__30382) : pred__30381.call(null,(3),expr__30382)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__30684 = cljs.core.first(remaining);
var G__30685 = cljs.core.rest(remaining);
clause = G__30684;
remaining = G__30685;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__30686 = cljs.core.first(remaining);
var G__30687 = cljs.core.rest(remaining);
clause = G__30686;
remaining = G__30687;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__30386(s__30387){
return (new cljs.core.LazySeq(null,(function (){
var s__30387__$1 = s__30387;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30387__$1);
if(temp__5735__auto__){
var s__30387__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30387__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30387__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30389 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30388 = (0);
while(true){
if((i__30388 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30388);
cljs.core.chunk_append(b__30389,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__30693 = (i__30388 + (1));
i__30388 = G__30693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30389),posh$lib$q_analyze$resolve_any_idents_$_iter__30386(cljs.core.chunk_rest(s__30387__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30389),null);
}
} else {
var var_value = cljs.core.first(s__30387__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__30386(cljs.core.rest(s__30387__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30397){
var vec__30398 = p__30397;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30398,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30398,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30401){
var vec__30402 = p__30401;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30402,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30402,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30407){
var vec__30408 = p__30407;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30408,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30408,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30411){
var vec__30412 = p__30411;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30412,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30412,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__30416 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__30417 = cljs.core.vec(r);
var fexpr__30415 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__30415.cljs$core$IFn$_invoke$arity$2 ? fexpr__30415.cljs$core$IFn$_invoke$arity$2(G__30416,G__30417) : fexpr__30415.call(null,G__30416,G__30417));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30418){
var vec__30419 = p__30418;
var seq__30420 = cljs.core.seq(vec__30419);
var first__30421 = cljs.core.first(seq__30420);
var seq__30420__$1 = cljs.core.next(seq__30420);
var db = first__30421;
var eav = seq__30420__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30422){
var vec__30423 = p__30422;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30423,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30423,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__30393_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__30393_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__30393_SHARP_) : linked_qvars.call(null,p1__30393_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__30393_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__30394_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__30394_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__30394_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
