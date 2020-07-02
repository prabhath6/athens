goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44957){
var map__44958 = p__44957;
var map__44958__$1 = (((((!((map__44958 == null))))?(((((map__44958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44958):map__44958);
var m = map__44958__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44958__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44958__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__44966_45160 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44967_45161 = null;
var count__44968_45162 = (0);
var i__44969_45163 = (0);
while(true){
if((i__44969_45163 < count__44968_45162)){
var f_45167 = chunk__44967_45161.cljs$core$IIndexed$_nth$arity$2(null,i__44969_45163);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45167], 0));


var G__45169 = seq__44966_45160;
var G__45170 = chunk__44967_45161;
var G__45171 = count__44968_45162;
var G__45172 = (i__44969_45163 + (1));
seq__44966_45160 = G__45169;
chunk__44967_45161 = G__45170;
count__44968_45162 = G__45171;
i__44969_45163 = G__45172;
continue;
} else {
var temp__5735__auto___45176 = cljs.core.seq(seq__44966_45160);
if(temp__5735__auto___45176){
var seq__44966_45177__$1 = temp__5735__auto___45176;
if(cljs.core.chunked_seq_QMARK_(seq__44966_45177__$1)){
var c__4609__auto___45179 = cljs.core.chunk_first(seq__44966_45177__$1);
var G__45180 = cljs.core.chunk_rest(seq__44966_45177__$1);
var G__45181 = c__4609__auto___45179;
var G__45182 = cljs.core.count(c__4609__auto___45179);
var G__45183 = (0);
seq__44966_45160 = G__45180;
chunk__44967_45161 = G__45181;
count__44968_45162 = G__45182;
i__44969_45163 = G__45183;
continue;
} else {
var f_45184 = cljs.core.first(seq__44966_45177__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45184], 0));


var G__45185 = cljs.core.next(seq__44966_45177__$1);
var G__45186 = null;
var G__45187 = (0);
var G__45188 = (0);
seq__44966_45160 = G__45185;
chunk__44967_45161 = G__45186;
count__44968_45162 = G__45187;
i__44969_45163 = G__45188;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45189 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45189], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45189)))?cljs.core.second(arglists_45189):arglists_45189)], 0));
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
var seq__44976_45196 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44977_45197 = null;
var count__44978_45198 = (0);
var i__44979_45199 = (0);
while(true){
if((i__44979_45199 < count__44978_45198)){
var vec__44990_45200 = chunk__44977_45197.cljs$core$IIndexed$_nth$arity$2(null,i__44979_45199);
var name_45201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44990_45200,(0),null);
var map__44993_45202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44990_45200,(1),null);
var map__44993_45203__$1 = (((((!((map__44993_45202 == null))))?(((((map__44993_45202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44993_45202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44993_45202):map__44993_45202);
var doc_45204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44993_45203__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44993_45203__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45201], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45205], 0));

if(cljs.core.truth_(doc_45204)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45204], 0));
} else {
}


var G__45210 = seq__44976_45196;
var G__45211 = chunk__44977_45197;
var G__45212 = count__44978_45198;
var G__45213 = (i__44979_45199 + (1));
seq__44976_45196 = G__45210;
chunk__44977_45197 = G__45211;
count__44978_45198 = G__45212;
i__44979_45199 = G__45213;
continue;
} else {
var temp__5735__auto___45214 = cljs.core.seq(seq__44976_45196);
if(temp__5735__auto___45214){
var seq__44976_45215__$1 = temp__5735__auto___45214;
if(cljs.core.chunked_seq_QMARK_(seq__44976_45215__$1)){
var c__4609__auto___45216 = cljs.core.chunk_first(seq__44976_45215__$1);
var G__45217 = cljs.core.chunk_rest(seq__44976_45215__$1);
var G__45218 = c__4609__auto___45216;
var G__45219 = cljs.core.count(c__4609__auto___45216);
var G__45220 = (0);
seq__44976_45196 = G__45217;
chunk__44977_45197 = G__45218;
count__44978_45198 = G__45219;
i__44979_45199 = G__45220;
continue;
} else {
var vec__44996_45221 = cljs.core.first(seq__44976_45215__$1);
var name_45222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44996_45221,(0),null);
var map__44999_45223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44996_45221,(1),null);
var map__44999_45224__$1 = (((((!((map__44999_45223 == null))))?(((((map__44999_45223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44999_45223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44999_45223):map__44999_45223);
var doc_45225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999_45224__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44999_45224__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45222], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45226], 0));

if(cljs.core.truth_(doc_45225)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45225], 0));
} else {
}


var G__45227 = cljs.core.next(seq__44976_45215__$1);
var G__45228 = null;
var G__45229 = (0);
var G__45230 = (0);
seq__44976_45196 = G__45227;
chunk__44977_45197 = G__45228;
count__44978_45198 = G__45229;
i__44979_45199 = G__45230;
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

var seq__45002 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45003 = null;
var count__45004 = (0);
var i__45005 = (0);
while(true){
if((i__45005 < count__45004)){
var role = chunk__45003.cljs$core$IIndexed$_nth$arity$2(null,i__45005);
var temp__5735__auto___45235__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45235__$1)){
var spec_45236 = temp__5735__auto___45235__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45236)], 0));
} else {
}


var G__45237 = seq__45002;
var G__45238 = chunk__45003;
var G__45239 = count__45004;
var G__45240 = (i__45005 + (1));
seq__45002 = G__45237;
chunk__45003 = G__45238;
count__45004 = G__45239;
i__45005 = G__45240;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45002);
if(temp__5735__auto____$1){
var seq__45002__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45002__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45002__$1);
var G__45241 = cljs.core.chunk_rest(seq__45002__$1);
var G__45242 = c__4609__auto__;
var G__45243 = cljs.core.count(c__4609__auto__);
var G__45244 = (0);
seq__45002 = G__45241;
chunk__45003 = G__45242;
count__45004 = G__45243;
i__45005 = G__45244;
continue;
} else {
var role = cljs.core.first(seq__45002__$1);
var temp__5735__auto___45245__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45245__$2)){
var spec_45246 = temp__5735__auto___45245__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45246)], 0));
} else {
}


var G__45248 = cljs.core.next(seq__45002__$1);
var G__45249 = null;
var G__45250 = (0);
var G__45251 = (0);
seq__45002 = G__45248;
chunk__45003 = G__45249;
count__45004 = G__45250;
i__45005 = G__45251;
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
var G__45255 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45256 = cljs.core.ex_cause(t);
via = G__45255;
t = G__45256;
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
var map__45032 = datafied_throwable;
var map__45032__$1 = (((((!((map__45032 == null))))?(((((map__45032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45032):map__45032);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45032__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45032__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45032__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45033 = cljs.core.last(via);
var map__45033__$1 = (((((!((map__45033 == null))))?(((((map__45033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45033):map__45033);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45033__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45033__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45033__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45034 = data;
var map__45034__$1 = (((((!((map__45034 == null))))?(((((map__45034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45034):map__45034);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45034__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45034__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45034__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45038 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45038__$1 = (((((!((map__45038 == null))))?(((((map__45038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45038):map__45038);
var top_data = map__45038__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45038__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45048 = phase;
var G__45048__$1 = (((G__45048 instanceof cljs.core.Keyword))?G__45048.fqn:null);
switch (G__45048__$1) {
case "read-source":
var map__45051 = data;
var map__45051__$1 = (((((!((map__45051 == null))))?(((((map__45051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45051):map__45051);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45051__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45051__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45053 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45053__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45053,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45053);
var G__45053__$2 = (cljs.core.truth_((function (){var fexpr__45054 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45054.cljs$core$IFn$_invoke$arity$1 ? fexpr__45054.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45054.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45053__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45053__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45053__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45056 = top_data;
var G__45056__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45056,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45056);
var G__45056__$2 = (cljs.core.truth_((function (){var fexpr__45058 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45058.cljs$core$IFn$_invoke$arity$1 ? fexpr__45058.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45058.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45056__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45056__$1);
var G__45056__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45056__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45056__$2);
var G__45056__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45056__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45056__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45056__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45056__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45059 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45059,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45059,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45059,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45059,(3),null);
var G__45063 = top_data;
var G__45063__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45063,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45063);
var G__45063__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45063__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45063__$1);
var G__45063__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45063__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45063__$2);
var G__45063__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45063__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45063__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45063__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45063__$4;
}

break;
case "execution":
var vec__45068 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45068,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45068,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45068,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45068,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45028_SHARP_){
var or__4185__auto__ = (p1__45028_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45072 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45072.cljs$core$IFn$_invoke$arity$1 ? fexpr__45072.cljs$core$IFn$_invoke$arity$1(p1__45028_SHARP_) : fexpr__45072.call(null,p1__45028_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45078 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45078__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45078,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45078);
var G__45078__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45078__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45078__$1);
var G__45078__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45078__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45078__$2);
var G__45078__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45078__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45078__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45078__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45078__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45048__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45088){
var map__45089 = p__45088;
var map__45089__$1 = (((((!((map__45089 == null))))?(((((map__45089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45089):map__45089);
var triage_data = map__45089__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45097 = phase;
var G__45097__$1 = (((G__45097 instanceof cljs.core.Keyword))?G__45097.fqn:null);
switch (G__45097__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45098 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45099 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45100 = loc;
var G__45101 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45106_45303 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45107_45304 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45109_45305 = true;
var _STAR_print_fn_STAR__temp_val__45110_45306 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45109_45305);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45110_45306);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45085_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45085_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45107_45304);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45106_45303);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45098,G__45099,G__45100,G__45101) : format.call(null,G__45098,G__45099,G__45100,G__45101));

break;
case "macroexpansion":
var G__45111 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45112 = cause_type;
var G__45113 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45114 = loc;
var G__45115 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45111,G__45112,G__45113,G__45114,G__45115) : format.call(null,G__45111,G__45112,G__45113,G__45114,G__45115));

break;
case "compile-syntax-check":
var G__45118 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45121 = cause_type;
var G__45122 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45123 = loc;
var G__45124 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45118,G__45121,G__45122,G__45123,G__45124) : format.call(null,G__45118,G__45121,G__45122,G__45123,G__45124));

break;
case "compilation":
var G__45126 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45127 = cause_type;
var G__45128 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45129 = loc;
var G__45130 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45126,G__45127,G__45128,G__45129,G__45130) : format.call(null,G__45126,G__45127,G__45128,G__45129,G__45130));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45131 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45132 = symbol;
var G__45133 = loc;
var G__45134 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45135_45319 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45136_45320 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45137_45321 = true;
var _STAR_print_fn_STAR__temp_val__45138_45322 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45137_45321);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45138_45322);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45086_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45086_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45136_45320);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45135_45319);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45131,G__45132,G__45133,G__45134) : format.call(null,G__45131,G__45132,G__45133,G__45134));
} else {
var G__45144 = "Execution error%s at %s(%s).\n%s\n";
var G__45145 = cause_type;
var G__45146 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45147 = loc;
var G__45148 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45144,G__45145,G__45146,G__45147,G__45148) : format.call(null,G__45144,G__45145,G__45146,G__45147,G__45148));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45097__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
