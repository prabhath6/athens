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
var G__45425 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__45425) : stop_at_QMARK_.call(null,G__45425));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__45426 = stop_at_QMARK_;
var G__45427 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__45426,G__45427) : posh.lib.q_analyze.take_until.call(null,G__45426,G__45427));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__45429 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__45429) : rest_at_QMARK_.call(null,G__45429));
}
})())){
return ls;
} else {
var G__45787 = rest_at_QMARK_;
var G__45788 = cljs.core.rest(ls);
rest_at_QMARK_ = G__45787;
ls = G__45788;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__45430 = split_at_QMARK_;
var G__45431 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__45430,G__45431) : posh.lib.q_analyze.split_list_at.call(null,G__45430,G__45431));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__45432 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__45432) : posh.lib.q_analyze.get_all_vars.call(null,G__45432));
})(),(function (){var G__45433 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__45433) : posh.lib.q_analyze.get_all_vars.call(null,G__45433));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__45434 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__45434) : posh.lib.q_analyze.get_all_vars.call(null,G__45434));
})(),cljs.core.first(query));
} else {
var G__45435 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__45435) : posh.lib.q_analyze.get_all_vars.call(null,G__45435));

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
var G__45436 = cljs.core.rest(eav);
var G__45437 = (n - (1));
var G__45438 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__45439 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__45436,G__45437,G__45438,G__45439) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__45436,G__45437,G__45438,G__45439));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__45440 = cljs.core.rest(eav);
var G__45441 = (n - (1));
var G__45442 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__45443 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__45440,G__45441,G__45442,G__45443) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__45440,G__45441,G__45442,G__45443));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__45444 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__45444) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__45444));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__45445 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__45445) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__45445));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__45446 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__45446) : posh.lib.q_analyze.get_eavs.call(null,G__45446));
})(),(function (){var G__45447 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__45447) : posh.lib.q_analyze.get_eavs.call(null,G__45447));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__45448 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__45448) : posh.lib.q_analyze.get_eavs.call(null,G__45448));
})(),(function (){var G__45449 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__45449) : posh.lib.q_analyze.get_eavs.call(null,G__45449));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__45450 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__45450) : posh.lib.q_analyze.get_eavs.call(null,G__45450));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_45451 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_45451)) && ((cljs.core.count(ocr_45451) === 2)))){
try{var ocr_45451_0__45457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45451,(0));
if(((cljs.core.vector_QMARK_(ocr_45451_0__45457)) && ((cljs.core.count(ocr_45451_0__45457) === 5)))){
try{var ocr_45451_0__45457_0__45459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45451_0__45457,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45451_0__45457_0__45459,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45451_0__45457,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45451_0__45457,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45451_0__45457,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45451,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__45468 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__45468) : posh.lib.q_analyze.get_eavs.call(null,G__45468));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e45467){if((e45467 instanceof Error)){
var e__44419__auto__ = e45467;
if((e__44419__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto__;
}
} else {
throw e45467;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45466){if((e45466 instanceof Error)){
var e__44419__auto__ = e45466;
if((e__44419__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto__;
}
} else {
throw e45466;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45464){if((e45464 instanceof Error)){
var e__44419__auto__ = e45464;
if((e__44419__auto__ === cljs.core.match.backtrack)){
var G__45465 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__45465) : posh.lib.q_analyze.get_eavs.call(null,G__45465));
} else {
throw e__44419__auto__;
}
} else {
throw e45464;

}
}} else {
var G__45469 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__45469) : posh.lib.q_analyze.get_eavs.call(null,G__45469));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__45470){
var vec__45471 = p__45470;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45471,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45471,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45474_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__45474_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__45474_SHARP_);
} else {
return p1__45474_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__45475 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__45475) : posh.lib.q_analyze.count_qvars.call(null,G__45475));
})(),(function (){var G__45476 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__45476) : posh.lib.q_analyze.count_qvars.call(null,G__45476));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__45477 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__45477) : posh.lib.q_analyze.count_qvars.call(null,G__45477));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__45478(s__45479){
return (new cljs.core.LazySeq(null,(function (){
var s__45479__$1 = s__45479;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45479__$1);
if(temp__5735__auto__){
var s__45479__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45479__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45479__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45481 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45480 = (0);
while(true){
if((i__45480 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__45480);
cljs.core.chunk_append(b__45481,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__45870 = (i__45480 + (1));
i__45480 = G__45870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45481),posh$lib$q_analyze$fill_qvar_set_$_iter__45478(cljs.core.chunk_rest(s__45479__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45481),null);
}
} else {
var r = cljs.core.first(s__45479__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__45478(cljs.core.rest(s__45479__$2)));
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
return cljs.core.cons((function (){var G__45482 = cljs.core.first(seq1);
var G__45483 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45482,G__45483) : f.call(null,G__45482,G__45483));
})(),(function (){var G__45484 = f;
var G__45485 = cljs.core.rest(seq1);
var G__45486 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__45484,G__45485,G__45486) : posh.lib.q_analyze.seq_merge_with.call(null,G__45484,G__45485,G__45486));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__45489){
var vec__45490 = p__45489;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(2),null);
var eav = vec__45490;
var vec__45493 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45493,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45493,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45493,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__45496(s__45497){
return (new cljs.core.LazySeq(null,(function (){
var s__45497__$1 = s__45497;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45497__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__45497__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__45496_$_iter__45498(s__45499){
return (new cljs.core.LazySeq(null,((function (s__45497__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav){
return (function (){
var s__45499__$1 = s__45499;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__45499__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__45499__$1,s__45497__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__45496_$_iter__45498_$_iter__45500(s__45501){
return (new cljs.core.LazySeq(null,((function (s__45499__$1,s__45497__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav){
return (function (){
var s__45501__$1 = s__45501;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__45501__$1);
if(temp__5735__auto____$2){
var s__45501__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__45501__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45501__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45503 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45502 = (0);
while(true){
if((i__45502 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__45502);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__45502,s__45501__$1,s__45499__$1,s__45497__$1,vv,c__4580__auto__,size__4581__auto__,b__45503,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav){
return (function (p1__45487_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__45487_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__45502,s__45501__$1,s__45499__$1,s__45497__$1,vv,c__4580__auto__,size__4581__auto__,b__45503,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__45502,s__45501__$1,s__45499__$1,s__45497__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__45503,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav){
return (function (p__45504){
var vec__45505 = p__45504;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45505,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45505,(1),null);
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
});})(i__45502,s__45501__$1,s__45499__$1,s__45497__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__45503,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__45502,s__45501__$1,s__45499__$1,s__45497__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__45503,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav){
return (function (p1__45488_SHARP_){
if(cljs.core.truth_(p1__45488_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__45502,s__45501__$1,s__45499__$1,s__45497__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__45503,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__45503,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__45891 = (i__45502 + (1));
i__45502 = G__45891;
continue;
} else {
var G__45893 = (i__45502 + (1));
i__45502 = G__45893;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45503),posh$lib$q_analyze$pattern_from_eav__old_$_iter__45496_$_iter__45498_$_iter__45500(cljs.core.chunk_rest(s__45501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45503),null);
}
} else {
var vv = cljs.core.first(s__45501__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__45501__$1,s__45499__$1,s__45497__$1,vv,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav){
return (function (p1__45487_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__45487_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__45501__$1,s__45499__$1,s__45497__$1,vv,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__45501__$1,s__45499__$1,s__45497__$1,wildcard_count,vv,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav){
return (function (p__45508){
var vec__45509 = p__45508;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45509,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45509,(1),null);
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
});})(s__45501__$1,s__45499__$1,s__45497__$1,wildcard_count,vv,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__45501__$1,s__45499__$1,s__45497__$1,wildcard_count,exposed_qvars,vv,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav){
return (function (p1__45488_SHARP_){
if(cljs.core.truth_(p1__45488_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__45501__$1,s__45499__$1,s__45497__$1,wildcard_count,exposed_qvars,vv,s__45501__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__45496_$_iter__45498_$_iter__45500(cljs.core.rest(s__45501__$2)));
} else {
var G__45898 = cljs.core.rest(s__45501__$2);
s__45501__$1 = G__45898;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__45499__$1,s__45497__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav))
,null,null));
});})(s__45499__$1,s__45497__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__45496_$_iter__45498(cljs.core.rest(s__45499__$1)));
} else {
var G__45899 = cljs.core.rest(s__45499__$1);
s__45499__$1 = G__45899;
continue;
}
} else {
return null;
}
break;
}
});})(s__45497__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav))
,null,null));
});})(s__45497__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__45493,qe,qa,qv,vec__45490,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__45496(cljs.core.rest(s__45497__$1)));
} else {
var G__45900 = cljs.core.rest(s__45497__$1);
s__45497__$1 = G__45900;
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
var ocr_45512 = cljs.core.vec(eav);
var ocr_45513 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_45512)) && ((cljs.core.count(ocr_45512) === 3)))){
try{var ocr_45512_0__45541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_0__45541,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_45512_1__45542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_1__45542,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_45512_2__45543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_2__45543,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45617){if((e45617 instanceof Error)){
var e__44419__auto__ = e45617;
if((e__44419__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_45513)) && ((cljs.core.count(ocr_45513) === 3)))){
try{var ocr_45513_2__45546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45546 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45619){if((e45619 instanceof Error)){
var e__44419__auto____$1 = e45619;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45546 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45620){if((e45620 instanceof Error)){
var e__44419__auto____$2 = e45620;
if((e__44419__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$2;
}
} else {
throw e45620;

}
}} else {
throw e__44419__auto____$1;
}
} else {
throw e45619;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45618){if((e45618 instanceof Error)){
var e__44419__auto____$1 = e45618;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45618;

}
}} else {
throw e__44419__auto__;
}
} else {
throw e45617;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45612){if((e45612 instanceof Error)){
var e__44419__auto__ = e45612;
if((e__44419__auto__ === cljs.core.match.backtrack)){
try{var ocr_45512_2__45543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_2__45543,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_45513)) && ((cljs.core.count(ocr_45513) === 3)))){
try{var ocr_45513_1__45548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45548 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45615){if((e45615 instanceof Error)){
var e__44419__auto____$1 = e45615;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45513_1__45548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45548 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45616){if((e45616 instanceof Error)){
var e__44419__auto____$2 = e45616;
if((e__44419__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$2;
}
} else {
throw e45616;

}
}} else {
throw e__44419__auto____$1;
}
} else {
throw e45615;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45614){if((e45614 instanceof Error)){
var e__44419__auto____$1 = e45614;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45614;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45613){if((e45613 instanceof Error)){
var e__44419__auto____$1 = e45613;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45613;

}
}} else {
throw e__44419__auto__;
}
} else {
throw e45612;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45554){if((e45554 instanceof Error)){
var e__44419__auto__ = e45554;
if((e__44419__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_45513)) && ((cljs.core.count(ocr_45513) === 3)))){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === false)){
try{var ocr_45512_1__45542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_1__45542,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_45512_2__45543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_2__45543,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45611){if((e45611 instanceof Error)){
var e__44419__auto____$1 = e45611;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45611;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45610){if((e45610 instanceof Error)){
var e__44419__auto____$1 = e45610;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45610;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45556){if((e45556 instanceof Error)){
var e__44419__auto____$1 = e45556;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === true)){
try{var ocr_45512_2__45543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_2__45543,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_45512_1__45542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_1__45542,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45607){if((e45607 instanceof Error)){
var e__44419__auto____$2 = e45607;
if((e__44419__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45608){if((e45608 instanceof Error)){
var e__44419__auto____$3 = e45608;
if((e__44419__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45609){if((e45609 instanceof Error)){
var e__44419__auto____$4 = e45609;
if((e__44419__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$4;
}
} else {
throw e45609;

}
}} else {
throw e__44419__auto____$3;
}
} else {
throw e45608;

}
}} else {
throw e__44419__auto____$2;
}
} else {
throw e45607;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45606){if((e45606 instanceof Error)){
var e__44419__auto____$2 = e45606;
if((e__44419__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$2;
}
} else {
throw e45606;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45557){if((e45557 instanceof Error)){
var e__44419__auto____$2 = e45557;
if((e__44419__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === false)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === true)){
try{var ocr_45512_2__45543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_2__45543,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45605){if((e45605 instanceof Error)){
var e__44419__auto____$3 = e45605;
if((e__44419__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$3;
}
} else {
throw e45605;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45602){if((e45602 instanceof Error)){
var e__44419__auto____$3 = e45602;
if((e__44419__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === false)){
try{var ocr_45512_2__45543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_2__45543,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45604){if((e45604 instanceof Error)){
var e__44419__auto____$4 = e45604;
if((e__44419__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$4;
}
} else {
throw e45604;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45603){if((e45603 instanceof Error)){
var e__44419__auto____$4 = e45603;
if((e__44419__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$4;
}
} else {
throw e45603;

}
}} else {
throw e__44419__auto____$3;
}
} else {
throw e45602;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45558){if((e45558 instanceof Error)){
var e__44419__auto____$3 = e45558;
if((e__44419__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === true)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === true)){
try{var ocr_45512_1__45542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_1__45542,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45601){if((e45601 instanceof Error)){
var e__44419__auto____$4 = e45601;
if((e__44419__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$4;
}
} else {
throw e45601;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45600){if((e45600 instanceof Error)){
var e__44419__auto____$4 = e45600;
if((e__44419__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$4;
}
} else {
throw e45600;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45559){if((e45559 instanceof Error)){
var e__44419__auto____$4 = e45559;
if((e__44419__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === false)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === true)){
try{var ocr_45512_1__45542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_1__45542,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45599){if((e45599 instanceof Error)){
var e__44419__auto____$5 = e45599;
if((e__44419__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$5;
}
} else {
throw e45599;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45598){if((e45598 instanceof Error)){
var e__44419__auto____$5 = e45598;
if((e__44419__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$5;
}
} else {
throw e45598;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45560){if((e45560 instanceof Error)){
var e__44419__auto____$5 = e45560;
if((e__44419__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === true)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === false)){
try{var ocr_45512_1__45542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_1__45542,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45597){if((e45597 instanceof Error)){
var e__44419__auto____$6 = e45597;
if((e__44419__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$6;
}
} else {
throw e45597;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45596){if((e45596 instanceof Error)){
var e__44419__auto____$6 = e45596;
if((e__44419__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$6;
}
} else {
throw e45596;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45561){if((e45561 instanceof Error)){
var e__44419__auto____$6 = e45561;
if((e__44419__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === false)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === false)){
try{var ocr_45512_1__45542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_1__45542,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45595){if((e45595 instanceof Error)){
var e__44419__auto____$7 = e45595;
if((e__44419__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$7;
}
} else {
throw e45595;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45594){if((e45594 instanceof Error)){
var e__44419__auto____$7 = e45594;
if((e__44419__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$7;
}
} else {
throw e45594;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45562){if((e45562 instanceof Error)){
var e__44419__auto____$7 = e45562;
if((e__44419__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === true)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === true)){
try{var ocr_45512_0__45541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_0__45541,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45593){if((e45593 instanceof Error)){
var e__44419__auto____$8 = e45593;
if((e__44419__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$8;
}
} else {
throw e45593;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45592){if((e45592 instanceof Error)){
var e__44419__auto____$8 = e45592;
if((e__44419__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$8;
}
} else {
throw e45592;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45563){if((e45563 instanceof Error)){
var e__44419__auto____$8 = e45563;
if((e__44419__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === false)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === true)){
try{var ocr_45512_0__45541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_0__45541,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45591){if((e45591 instanceof Error)){
var e__44419__auto____$9 = e45591;
if((e__44419__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$9;
}
} else {
throw e45591;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45590){if((e45590 instanceof Error)){
var e__44419__auto____$9 = e45590;
if((e__44419__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$9;
}
} else {
throw e45590;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45564){if((e45564 instanceof Error)){
var e__44419__auto____$9 = e45564;
if((e__44419__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === true)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === false)){
try{var ocr_45512_0__45541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_0__45541,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45589){if((e45589 instanceof Error)){
var e__44419__auto____$10 = e45589;
if((e__44419__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$10;
}
} else {
throw e45589;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45588){if((e45588 instanceof Error)){
var e__44419__auto____$10 = e45588;
if((e__44419__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$10;
}
} else {
throw e45588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45565){if((e45565 instanceof Error)){
var e__44419__auto____$10 = e45565;
if((e__44419__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === false)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === false)){
try{var ocr_45512_0__45541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45512_0__45541,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45587){if((e45587 instanceof Error)){
var e__44419__auto____$11 = e45587;
if((e__44419__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$11;
}
} else {
throw e45587;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45586){if((e45586 instanceof Error)){
var e__44419__auto____$11 = e45586;
if((e__44419__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$11;
}
} else {
throw e45586;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45566){if((e45566 instanceof Error)){
var e__44419__auto____$11 = e45566;
if((e__44419__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === true)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === true)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45585){if((e45585 instanceof Error)){
var e__44419__auto____$12 = e45585;
if((e__44419__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$12;
}
} else {
throw e45585;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45580){if((e45580 instanceof Error)){
var e__44419__auto____$12 = e45580;
if((e__44419__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === false)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45584){if((e45584 instanceof Error)){
var e__44419__auto____$13 = e45584;
if((e__44419__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$13;
}
} else {
throw e45584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45581){if((e45581 instanceof Error)){
var e__44419__auto____$13 = e45581;
if((e__44419__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === true)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45583){if((e45583 instanceof Error)){
var e__44419__auto____$14 = e45583;
if((e__44419__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$14;
}
} else {
throw e45583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45582){if((e45582 instanceof Error)){
var e__44419__auto____$14 = e45582;
if((e__44419__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$14;
}
} else {
throw e45582;

}
}} else {
throw e__44419__auto____$13;
}
} else {
throw e45581;

}
}} else {
throw e__44419__auto____$12;
}
} else {
throw e45580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45567){if((e45567 instanceof Error)){
var e__44419__auto____$12 = e45567;
if((e__44419__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === false)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === true)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45579){if((e45579 instanceof Error)){
var e__44419__auto____$13 = e45579;
if((e__44419__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$13;
}
} else {
throw e45579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45578){if((e45578 instanceof Error)){
var e__44419__auto____$13 = e45578;
if((e__44419__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$13;
}
} else {
throw e45578;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45568){if((e45568 instanceof Error)){
var e__44419__auto____$13 = e45568;
if((e__44419__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === true)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === false)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45577){if((e45577 instanceof Error)){
var e__44419__auto____$14 = e45577;
if((e__44419__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$14;
}
} else {
throw e45577;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45576){if((e45576 instanceof Error)){
var e__44419__auto____$14 = e45576;
if((e__44419__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$14;
}
} else {
throw e45576;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45569){if((e45569 instanceof Error)){
var e__44419__auto____$14 = e45569;
if((e__44419__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_45513_2__45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(2));
if((ocr_45513_2__45552 === false)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === true)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45575){if((e45575 instanceof Error)){
var e__44419__auto____$15 = e45575;
if((e__44419__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$15;
}
} else {
throw e45575;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45571){if((e45571 instanceof Error)){
var e__44419__auto____$15 = e45571;
if((e__44419__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_45513_0__45550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(0));
if((ocr_45513_0__45550 === false)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45573){if((e45573 instanceof Error)){
var e__44419__auto____$16 = e45573;
if((e__44419__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_45513_1__45551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45513,(1));
if((ocr_45513_1__45551 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45512,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45574){if((e45574 instanceof Error)){
var e__44419__auto____$17 = e45574;
if((e__44419__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$17;
}
} else {
throw e45574;

}
}} else {
throw e__44419__auto____$16;
}
} else {
throw e45573;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45572){if((e45572 instanceof Error)){
var e__44419__auto____$16 = e45572;
if((e__44419__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$16;
}
} else {
throw e45572;

}
}} else {
throw e__44419__auto____$15;
}
} else {
throw e45571;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45570){if((e45570 instanceof Error)){
var e__44419__auto____$15 = e45570;
if((e__44419__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$15;
}
} else {
throw e45570;

}
}} else {
throw e__44419__auto____$14;
}
} else {
throw e45569;

}
}} else {
throw e__44419__auto____$13;
}
} else {
throw e45568;

}
}} else {
throw e__44419__auto____$12;
}
} else {
throw e45567;

}
}} else {
throw e__44419__auto____$11;
}
} else {
throw e45566;

}
}} else {
throw e__44419__auto____$10;
}
} else {
throw e45565;

}
}} else {
throw e__44419__auto____$9;
}
} else {
throw e45564;

}
}} else {
throw e__44419__auto____$8;
}
} else {
throw e45563;

}
}} else {
throw e__44419__auto____$7;
}
} else {
throw e45562;

}
}} else {
throw e__44419__auto____$6;
}
} else {
throw e45561;

}
}} else {
throw e__44419__auto____$5;
}
} else {
throw e45560;

}
}} else {
throw e__44419__auto____$4;
}
} else {
throw e45559;

}
}} else {
throw e__44419__auto____$3;
}
} else {
throw e45558;

}
}} else {
throw e__44419__auto____$2;
}
} else {
throw e45557;

}
}} else {
throw e__44419__auto____$1;
}
} else {
throw e45556;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45555){if((e45555 instanceof Error)){
var e__44419__auto____$1 = e45555;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45555;

}
}} else {
throw e__44419__auto__;
}
} else {
throw e45554;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45553){if((e45553 instanceof Error)){
var e__44419__auto__ = e45553;
if((e__44419__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__44419__auto__;
}
} else {
throw e45553;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_45621 = cljs.core.vec(eav);
var ocr_45622 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_45621)) && ((cljs.core.count(ocr_45621) === 3)))){
try{var ocr_45621_0__45647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_0__45647,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_45621_1__45648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_1__45648,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_45621_2__45649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_2__45649,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e45711){if((e45711 instanceof Error)){
var e__44419__auto__ = e45711;
if((e__44419__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_45622)) && ((cljs.core.count(ocr_45622) === 3)))){
try{var ocr_45622_2__45652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(2));
if((ocr_45622_2__45652 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45713){if((e45713 instanceof Error)){
var e__44419__auto____$1 = e45713;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45622_2__45652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(2));
if((ocr_45622_2__45652 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45714){if((e45714 instanceof Error)){
var e__44419__auto____$2 = e45714;
if((e__44419__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$2;
}
} else {
throw e45714;

}
}} else {
throw e__44419__auto____$1;
}
} else {
throw e45713;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45712){if((e45712 instanceof Error)){
var e__44419__auto____$1 = e45712;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45712;

}
}} else {
throw e__44419__auto__;
}
} else {
throw e45711;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45706){if((e45706 instanceof Error)){
var e__44419__auto__ = e45706;
if((e__44419__auto__ === cljs.core.match.backtrack)){
try{var ocr_45621_2__45649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_2__45649,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_45622)) && ((cljs.core.count(ocr_45622) === 3)))){
try{var ocr_45622_1__45654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45654 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45709){if((e45709 instanceof Error)){
var e__44419__auto____$1 = e45709;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45622_1__45654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45654 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45710){if((e45710 instanceof Error)){
var e__44419__auto____$2 = e45710;
if((e__44419__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$2;
}
} else {
throw e45710;

}
}} else {
throw e__44419__auto____$1;
}
} else {
throw e45709;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45708){if((e45708 instanceof Error)){
var e__44419__auto____$1 = e45708;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45708;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45707){if((e45707 instanceof Error)){
var e__44419__auto____$1 = e45707;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45707;

}
}} else {
throw e__44419__auto__;
}
} else {
throw e45706;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45660){if((e45660 instanceof Error)){
var e__44419__auto__ = e45660;
if((e__44419__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_45622)) && ((cljs.core.count(ocr_45622) === 3)))){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === false)){
try{var ocr_45621_1__45648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_1__45648,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_45621_2__45649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_2__45649,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45705){if((e45705 instanceof Error)){
var e__44419__auto____$1 = e45705;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45705;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45704){if((e45704 instanceof Error)){
var e__44419__auto____$1 = e45704;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45704;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45662){if((e45662 instanceof Error)){
var e__44419__auto____$1 = e45662;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === true)){
try{var ocr_45621_2__45649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_2__45649,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_45621_1__45648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_1__45648,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45701){if((e45701 instanceof Error)){
var e__44419__auto____$2 = e45701;
if((e__44419__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45702){if((e45702 instanceof Error)){
var e__44419__auto____$3 = e45702;
if((e__44419__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45703){if((e45703 instanceof Error)){
var e__44419__auto____$4 = e45703;
if((e__44419__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$4;
}
} else {
throw e45703;

}
}} else {
throw e__44419__auto____$3;
}
} else {
throw e45702;

}
}} else {
throw e__44419__auto____$2;
}
} else {
throw e45701;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45700){if((e45700 instanceof Error)){
var e__44419__auto____$2 = e45700;
if((e__44419__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$2;
}
} else {
throw e45700;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45663){if((e45663 instanceof Error)){
var e__44419__auto____$2 = e45663;
if((e__44419__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === false)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === true)){
try{var ocr_45621_2__45649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_2__45649,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45699){if((e45699 instanceof Error)){
var e__44419__auto____$3 = e45699;
if((e__44419__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$3;
}
} else {
throw e45699;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45698){if((e45698 instanceof Error)){
var e__44419__auto____$3 = e45698;
if((e__44419__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$3;
}
} else {
throw e45698;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45664){if((e45664 instanceof Error)){
var e__44419__auto____$3 = e45664;
if((e__44419__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_45622_2__45658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(2));
if((ocr_45622_2__45658 === true)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === true)){
try{var ocr_45621_1__45648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_1__45648,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45697){if((e45697 instanceof Error)){
var e__44419__auto____$4 = e45697;
if((e__44419__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$4;
}
} else {
throw e45697;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45696){if((e45696 instanceof Error)){
var e__44419__auto____$4 = e45696;
if((e__44419__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$4;
}
} else {
throw e45696;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45665){if((e45665 instanceof Error)){
var e__44419__auto____$4 = e45665;
if((e__44419__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_45622_2__45658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(2));
if((ocr_45622_2__45658 === false)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === true)){
try{var ocr_45621_1__45648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_1__45648,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45695){if((e45695 instanceof Error)){
var e__44419__auto____$5 = e45695;
if((e__44419__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$5;
}
} else {
throw e45695;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45694){if((e45694 instanceof Error)){
var e__44419__auto____$5 = e45694;
if((e__44419__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$5;
}
} else {
throw e45694;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45666){if((e45666 instanceof Error)){
var e__44419__auto____$5 = e45666;
if((e__44419__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_45622_2__45658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(2));
if((ocr_45622_2__45658 === true)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === false)){
try{var ocr_45621_1__45648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_1__45648,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45693){if((e45693 instanceof Error)){
var e__44419__auto____$6 = e45693;
if((e__44419__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$6;
}
} else {
throw e45693;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45690){if((e45690 instanceof Error)){
var e__44419__auto____$6 = e45690;
if((e__44419__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === true)){
try{var ocr_45621_0__45647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_0__45647,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45692){if((e45692 instanceof Error)){
var e__44419__auto____$7 = e45692;
if((e__44419__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$7;
}
} else {
throw e45692;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45691){if((e45691 instanceof Error)){
var e__44419__auto____$7 = e45691;
if((e__44419__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$7;
}
} else {
throw e45691;

}
}} else {
throw e__44419__auto____$6;
}
} else {
throw e45690;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45667){if((e45667 instanceof Error)){
var e__44419__auto____$6 = e45667;
if((e__44419__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_45622_2__45658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(2));
if((ocr_45622_2__45658 === false)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === true)){
try{var ocr_45621_0__45647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_0__45647,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45689){if((e45689 instanceof Error)){
var e__44419__auto____$7 = e45689;
if((e__44419__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$7;
}
} else {
throw e45689;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45688){if((e45688 instanceof Error)){
var e__44419__auto____$7 = e45688;
if((e__44419__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$7;
}
} else {
throw e45688;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45668){if((e45668 instanceof Error)){
var e__44419__auto____$7 = e45668;
if((e__44419__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_45622_2__45658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(2));
if((ocr_45622_2__45658 === true)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === false)){
try{var ocr_45621_0__45647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45621_0__45647,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45687){if((e45687 instanceof Error)){
var e__44419__auto____$8 = e45687;
if((e__44419__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$8;
}
} else {
throw e45687;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45681){if((e45681 instanceof Error)){
var e__44419__auto____$8 = e45681;
if((e__44419__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === true)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45685){if((e45685 instanceof Error)){
var e__44419__auto____$9 = e45685;
if((e__44419__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45686){if((e45686 instanceof Error)){
var e__44419__auto____$10 = e45686;
if((e__44419__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$10;
}
} else {
throw e45686;

}
}} else {
throw e__44419__auto____$9;
}
} else {
throw e45685;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45682){if((e45682 instanceof Error)){
var e__44419__auto____$9 = e45682;
if((e__44419__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === false)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45684){if((e45684 instanceof Error)){
var e__44419__auto____$10 = e45684;
if((e__44419__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$10;
}
} else {
throw e45684;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45683){if((e45683 instanceof Error)){
var e__44419__auto____$10 = e45683;
if((e__44419__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$10;
}
} else {
throw e45683;

}
}} else {
throw e__44419__auto____$9;
}
} else {
throw e45682;

}
}} else {
throw e__44419__auto____$8;
}
} else {
throw e45681;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45669){if((e45669 instanceof Error)){
var e__44419__auto____$8 = e45669;
if((e__44419__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_45622_2__45658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(2));
if((ocr_45622_2__45658 === false)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === true)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45680){if((e45680 instanceof Error)){
var e__44419__auto____$9 = e45680;
if((e__44419__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$9;
}
} else {
throw e45680;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45679){if((e45679 instanceof Error)){
var e__44419__auto____$9 = e45679;
if((e__44419__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$9;
}
} else {
throw e45679;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45670){if((e45670 instanceof Error)){
var e__44419__auto____$9 = e45670;
if((e__44419__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_45622_2__45658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(2));
if((ocr_45622_2__45658 === true)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === false)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45678){if((e45678 instanceof Error)){
var e__44419__auto____$10 = e45678;
if((e__44419__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$10;
}
} else {
throw e45678;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45677){if((e45677 instanceof Error)){
var e__44419__auto____$10 = e45677;
if((e__44419__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$10;
}
} else {
throw e45677;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45671){if((e45671 instanceof Error)){
var e__44419__auto____$10 = e45671;
if((e__44419__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_45622_2__45658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(2));
if((ocr_45622_2__45658 === false)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === true)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45676){if((e45676 instanceof Error)){
var e__44419__auto____$11 = e45676;
if((e__44419__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$11;
}
} else {
throw e45676;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45673){if((e45673 instanceof Error)){
var e__44419__auto____$11 = e45673;
if((e__44419__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_45622_0__45656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(0));
if((ocr_45622_0__45656 === false)){
try{var ocr_45622_1__45657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45622,(1));
if((ocr_45622_1__45657 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45621,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45675){if((e45675 instanceof Error)){
var e__44419__auto____$12 = e45675;
if((e__44419__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$12;
}
} else {
throw e45675;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45674){if((e45674 instanceof Error)){
var e__44419__auto____$12 = e45674;
if((e__44419__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$12;
}
} else {
throw e45674;

}
}} else {
throw e__44419__auto____$11;
}
} else {
throw e45673;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45672){if((e45672 instanceof Error)){
var e__44419__auto____$11 = e45672;
if((e__44419__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$11;
}
} else {
throw e45672;

}
}} else {
throw e__44419__auto____$10;
}
} else {
throw e45671;

}
}} else {
throw e__44419__auto____$9;
}
} else {
throw e45670;

}
}} else {
throw e__44419__auto____$8;
}
} else {
throw e45669;

}
}} else {
throw e__44419__auto____$7;
}
} else {
throw e45668;

}
}} else {
throw e__44419__auto____$6;
}
} else {
throw e45667;

}
}} else {
throw e__44419__auto____$5;
}
} else {
throw e45666;

}
}} else {
throw e__44419__auto____$4;
}
} else {
throw e45665;

}
}} else {
throw e__44419__auto____$3;
}
} else {
throw e45664;

}
}} else {
throw e__44419__auto____$2;
}
} else {
throw e45663;

}
}} else {
throw e__44419__auto____$1;
}
} else {
throw e45662;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45661){if((e45661 instanceof Error)){
var e__44419__auto____$1 = e45661;
if((e__44419__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44419__auto____$1;
}
} else {
throw e45661;

}
}} else {
throw e__44419__auto__;
}
} else {
throw e45660;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45659){if((e45659 instanceof Error)){
var e__44419__auto__ = e45659;
if((e__44419__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__44419__auto__;
}
} else {
throw e45659;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45716){
var vec__45717 = p__45716;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45717,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__45715_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__45715_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45721){
var vec__45722 = p__45721;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45722,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__45720_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__45720_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__45725 = cljs.core.rest(ins);
var G__45726 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__45725,G__45726) : posh.lib.q_analyze.just_qvars.call(null,G__45725,G__45726));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45727_SHARP_){
return cljs.core.zipmap(qvars,p1__45727_SHARP_);
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
var vec__45728 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45728,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45728,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45728,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45728,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__46210 = var$;
var G__46211 = dbvarmap;
var G__46212 = cljs.core.rest(dbeavs);
var$ = G__46210;
dbvarmap = G__46211;
dbeavs = G__46212;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__45731 = cljs.core.rest(vars);
var G__45732 = dbvarmap;
var G__45733 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__45731,G__45732,G__45733) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__45731,G__45732,G__45733));
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
var G__46224 = (n + (1));
var G__46225 = cljs.core.rest(xs__$1);
n = G__46224;
xs__$1 = G__46225;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45734_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__45734_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__45734_SHARP_) : type.call(null,p1__45734_SHARP_));
} else {
return p1__45734_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__45735 = cljs.core.rest(ins);
var G__45736 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__45735,G__45736) : posh.lib.q_analyze.make_dbarg_map.call(null,G__45735,G__45736));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45737){
var vec__45738 = p__45737;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45738,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45738,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__45742_SHARP_,p2__45741_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__45741_SHARP_)){
return p1__45742_SHARP_;
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
var pred__45746 = cljs.core._EQ_;
var expr__45747 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__45746.cljs$core$IFn$_invoke$arity$2 ? pred__45746.cljs$core$IFn$_invoke$arity$2((1),expr__45747) : pred__45746.call(null,(1),expr__45747)))){
return true;
} else {
if(cljs.core.truth_((pred__45746.cljs$core$IFn$_invoke$arity$2 ? pred__45746.cljs$core$IFn$_invoke$arity$2((3),expr__45747) : pred__45746.call(null,(3),expr__45747)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__46238 = cljs.core.first(remaining);
var G__46239 = cljs.core.rest(remaining);
clause = G__46238;
remaining = G__46239;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__46240 = cljs.core.first(remaining);
var G__46241 = cljs.core.rest(remaining);
clause = G__46240;
remaining = G__46241;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__45749(s__45750){
return (new cljs.core.LazySeq(null,(function (){
var s__45750__$1 = s__45750;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45750__$1);
if(temp__5735__auto__){
var s__45750__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45750__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45750__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45752 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45751 = (0);
while(true){
if((i__45751 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__45751);
cljs.core.chunk_append(b__45752,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__46259 = (i__45751 + (1));
i__45751 = G__46259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45752),posh$lib$q_analyze$resolve_any_idents_$_iter__45749(cljs.core.chunk_rest(s__45750__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45752),null);
}
} else {
var var_value = cljs.core.first(s__45750__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__45749(cljs.core.rest(s__45750__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45757){
var vec__45758 = p__45757;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45758,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45758,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45761){
var vec__45762 = p__45761;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45762,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45765){
var vec__45766 = p__45765;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45766,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45766,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45769){
var vec__45770 = p__45769;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45770,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45770,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__45774 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__45775 = cljs.core.vec(r);
var fexpr__45773 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__45773.cljs$core$IFn$_invoke$arity$2 ? fexpr__45773.cljs$core$IFn$_invoke$arity$2(G__45774,G__45775) : fexpr__45773.call(null,G__45774,G__45775));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45776){
var vec__45777 = p__45776;
var seq__45778 = cljs.core.seq(vec__45777);
var first__45779 = cljs.core.first(seq__45778);
var seq__45778__$1 = cljs.core.next(seq__45778);
var db = first__45779;
var eav = seq__45778__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45780){
var vec__45781 = p__45780;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45781,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45781,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__45755_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__45755_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__45755_SHARP_) : linked_qvars.call(null,p1__45755_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__45755_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__45756_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__45756_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__45756_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
