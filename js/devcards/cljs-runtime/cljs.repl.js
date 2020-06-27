goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45094){
var map__45095 = p__45094;
var map__45095__$1 = (((((!((map__45095 == null))))?(((((map__45095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45095):map__45095);
var m = map__45095__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45097_45306 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45098_45307 = null;
var count__45099_45308 = (0);
var i__45100_45309 = (0);
while(true){
if((i__45100_45309 < count__45099_45308)){
var f_45310 = chunk__45098_45307.cljs$core$IIndexed$_nth$arity$2(null,i__45100_45309);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45310], 0));


var G__45311 = seq__45097_45306;
var G__45312 = chunk__45098_45307;
var G__45313 = count__45099_45308;
var G__45314 = (i__45100_45309 + (1));
seq__45097_45306 = G__45311;
chunk__45098_45307 = G__45312;
count__45099_45308 = G__45313;
i__45100_45309 = G__45314;
continue;
} else {
var temp__5735__auto___45315 = cljs.core.seq(seq__45097_45306);
if(temp__5735__auto___45315){
var seq__45097_45316__$1 = temp__5735__auto___45315;
if(cljs.core.chunked_seq_QMARK_(seq__45097_45316__$1)){
var c__4609__auto___45317 = cljs.core.chunk_first(seq__45097_45316__$1);
var G__45318 = cljs.core.chunk_rest(seq__45097_45316__$1);
var G__45319 = c__4609__auto___45317;
var G__45320 = cljs.core.count(c__4609__auto___45317);
var G__45321 = (0);
seq__45097_45306 = G__45318;
chunk__45098_45307 = G__45319;
count__45099_45308 = G__45320;
i__45100_45309 = G__45321;
continue;
} else {
var f_45322 = cljs.core.first(seq__45097_45316__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45322], 0));


var G__45323 = cljs.core.next(seq__45097_45316__$1);
var G__45324 = null;
var G__45325 = (0);
var G__45326 = (0);
seq__45097_45306 = G__45323;
chunk__45098_45307 = G__45324;
count__45099_45308 = G__45325;
i__45100_45309 = G__45326;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45327 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45327], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45327)))?cljs.core.second(arglists_45327):arglists_45327)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45102_45328 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45103_45329 = null;
var count__45104_45330 = (0);
var i__45105_45331 = (0);
while(true){
if((i__45105_45331 < count__45104_45330)){
var vec__45116_45332 = chunk__45103_45329.cljs$core$IIndexed$_nth$arity$2(null,i__45105_45331);
var name_45333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45116_45332,(0),null);
var map__45119_45334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45116_45332,(1),null);
var map__45119_45335__$1 = (((((!((map__45119_45334 == null))))?(((((map__45119_45334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45119_45334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45119_45334):map__45119_45334);
var doc_45336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45119_45335__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45119_45335__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45333], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45337], 0));

if(cljs.core.truth_(doc_45336)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45336], 0));
} else {
}


var G__45338 = seq__45102_45328;
var G__45339 = chunk__45103_45329;
var G__45340 = count__45104_45330;
var G__45341 = (i__45105_45331 + (1));
seq__45102_45328 = G__45338;
chunk__45103_45329 = G__45339;
count__45104_45330 = G__45340;
i__45105_45331 = G__45341;
continue;
} else {
var temp__5735__auto___45342 = cljs.core.seq(seq__45102_45328);
if(temp__5735__auto___45342){
var seq__45102_45343__$1 = temp__5735__auto___45342;
if(cljs.core.chunked_seq_QMARK_(seq__45102_45343__$1)){
var c__4609__auto___45344 = cljs.core.chunk_first(seq__45102_45343__$1);
var G__45345 = cljs.core.chunk_rest(seq__45102_45343__$1);
var G__45346 = c__4609__auto___45344;
var G__45347 = cljs.core.count(c__4609__auto___45344);
var G__45348 = (0);
seq__45102_45328 = G__45345;
chunk__45103_45329 = G__45346;
count__45104_45330 = G__45347;
i__45105_45331 = G__45348;
continue;
} else {
var vec__45122_45349 = cljs.core.first(seq__45102_45343__$1);
var name_45350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45122_45349,(0),null);
var map__45125_45351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45122_45349,(1),null);
var map__45125_45352__$1 = (((((!((map__45125_45351 == null))))?(((((map__45125_45351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45125_45351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45125_45351):map__45125_45351);
var doc_45353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45125_45352__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45125_45352__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45350], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45354], 0));

if(cljs.core.truth_(doc_45353)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45353], 0));
} else {
}


var G__45359 = cljs.core.next(seq__45102_45343__$1);
var G__45360 = null;
var G__45361 = (0);
var G__45362 = (0);
seq__45102_45328 = G__45359;
chunk__45103_45329 = G__45360;
count__45104_45330 = G__45361;
i__45105_45331 = G__45362;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45127 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45128 = null;
var count__45129 = (0);
var i__45130 = (0);
while(true){
if((i__45130 < count__45129)){
var role = chunk__45128.cljs$core$IIndexed$_nth$arity$2(null,i__45130);
var temp__5735__auto___45363__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45363__$1)){
var spec_45364 = temp__5735__auto___45363__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45364)], 0));
} else {
}


var G__45367 = seq__45127;
var G__45368 = chunk__45128;
var G__45369 = count__45129;
var G__45370 = (i__45130 + (1));
seq__45127 = G__45367;
chunk__45128 = G__45368;
count__45129 = G__45369;
i__45130 = G__45370;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45127);
if(temp__5735__auto____$1){
var seq__45127__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45127__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45127__$1);
var G__45373 = cljs.core.chunk_rest(seq__45127__$1);
var G__45374 = c__4609__auto__;
var G__45375 = cljs.core.count(c__4609__auto__);
var G__45376 = (0);
seq__45127 = G__45373;
chunk__45128 = G__45374;
count__45129 = G__45375;
i__45130 = G__45376;
continue;
} else {
var role = cljs.core.first(seq__45127__$1);
var temp__5735__auto___45377__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45377__$2)){
var spec_45378 = temp__5735__auto___45377__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45378)], 0));
} else {
}


var G__45379 = cljs.core.next(seq__45127__$1);
var G__45380 = null;
var G__45381 = (0);
var G__45382 = (0);
seq__45127 = G__45379;
chunk__45128 = G__45380;
count__45129 = G__45381;
i__45130 = G__45382;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45383 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45384 = cljs.core.ex_cause(t);
via = G__45383;
t = G__45384;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45138 = datafied_throwable;
var map__45138__$1 = (((((!((map__45138 == null))))?(((((map__45138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45138):map__45138);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45138__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45138__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45138__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45139 = cljs.core.last(via);
var map__45139__$1 = (((((!((map__45139 == null))))?(((((map__45139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45139):map__45139);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45139__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45139__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45139__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45140 = data;
var map__45140__$1 = (((((!((map__45140 == null))))?(((((map__45140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45140):map__45140);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45141 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45141__$1 = (((((!((map__45141 == null))))?(((((map__45141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45141):map__45141);
var top_data = map__45141__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45141__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45163 = phase;
var G__45163__$1 = (((G__45163 instanceof cljs.core.Keyword))?G__45163.fqn:null);
switch (G__45163__$1) {
case "read-source":
var map__45164 = data;
var map__45164__$1 = (((((!((map__45164 == null))))?(((((map__45164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45164):map__45164);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45164__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45164__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45166 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45166__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45166,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45166);
var G__45166__$2 = (cljs.core.truth_((function (){var fexpr__45171 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45171.cljs$core$IFn$_invoke$arity$1 ? fexpr__45171.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45171.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45166__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45166__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45166__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45166__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45175 = top_data;
var G__45175__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45175,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45175);
var G__45175__$2 = (cljs.core.truth_((function (){var fexpr__45176 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45176.cljs$core$IFn$_invoke$arity$1 ? fexpr__45176.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45176.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45175__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45175__$1);
var G__45175__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45175__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45175__$2);
var G__45175__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45175__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45175__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45175__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45175__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45177 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45177,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45177,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45177,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45177,(3),null);
var G__45180 = top_data;
var G__45180__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45180,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45180);
var G__45180__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45180__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45180__$1);
var G__45180__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45180__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45180__$2);
var G__45180__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45180__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45180__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45180__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45180__$4;
}

break;
case "execution":
var vec__45195 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45195,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45195,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45195,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45195,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45137_SHARP_){
var or__4185__auto__ = (p1__45137_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45199 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45199.cljs$core$IFn$_invoke$arity$1 ? fexpr__45199.cljs$core$IFn$_invoke$arity$1(p1__45137_SHARP_) : fexpr__45199.call(null,p1__45137_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45208 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45208__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45208,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45208);
var G__45208__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45208__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45208__$1);
var G__45208__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45208__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45208__$2);
var G__45208__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45208__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45208__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45208__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45208__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45163__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45227){
var map__45228 = p__45227;
var map__45228__$1 = (((((!((map__45228 == null))))?(((((map__45228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45228):map__45228);
var triage_data = map__45228__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45244 = phase;
var G__45244__$1 = (((G__45244 instanceof cljs.core.Keyword))?G__45244.fqn:null);
switch (G__45244__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45252 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45253 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45254 = loc;
var G__45255 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45256_45389 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45257_45390 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45258_45391 = true;
var _STAR_print_fn_STAR__temp_val__45259_45392 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45258_45391);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45259_45392);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45225_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45225_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45257_45390);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45256_45389);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45252,G__45253,G__45254,G__45255) : format.call(null,G__45252,G__45253,G__45254,G__45255));

break;
case "macroexpansion":
var G__45274 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45275 = cause_type;
var G__45276 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45277 = loc;
var G__45278 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45274,G__45275,G__45276,G__45277,G__45278) : format.call(null,G__45274,G__45275,G__45276,G__45277,G__45278));

break;
case "compile-syntax-check":
var G__45279 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45280 = cause_type;
var G__45281 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45282 = loc;
var G__45283 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45279,G__45280,G__45281,G__45282,G__45283) : format.call(null,G__45279,G__45280,G__45281,G__45282,G__45283));

break;
case "compilation":
var G__45284 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45285 = cause_type;
var G__45286 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45287 = loc;
var G__45288 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45284,G__45285,G__45286,G__45287,G__45288) : format.call(null,G__45284,G__45285,G__45286,G__45287,G__45288));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45289 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45290 = symbol;
var G__45291 = loc;
var G__45292 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45293_45393 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45294_45394 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45295_45395 = true;
var _STAR_print_fn_STAR__temp_val__45296_45396 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45295_45395);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45296_45396);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45226_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45226_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45294_45394);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45293_45393);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45289,G__45290,G__45291,G__45292) : format.call(null,G__45289,G__45290,G__45291,G__45292));
} else {
var G__45298 = "Execution error%s at %s(%s).\n%s\n";
var G__45299 = cause_type;
var G__45300 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45301 = loc;
var G__45302 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45298,G__45299,G__45300,G__45301,G__45302) : format.call(null,G__45298,G__45299,G__45300,G__45301,G__45302));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45244__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
