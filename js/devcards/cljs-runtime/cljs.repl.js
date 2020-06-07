goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50945){
var map__50946 = p__50945;
var map__50946__$1 = (((((!((map__50946 == null))))?(((((map__50946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50946):map__50946);
var m = map__50946__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50946__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50946__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50949_51144 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50950_51145 = null;
var count__50951_51146 = (0);
var i__50952_51147 = (0);
while(true){
if((i__50952_51147 < count__50951_51146)){
var f_51148 = chunk__50950_51145.cljs$core$IIndexed$_nth$arity$2(null,i__50952_51147);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51148], 0));


var G__51149 = seq__50949_51144;
var G__51150 = chunk__50950_51145;
var G__51151 = count__50951_51146;
var G__51152 = (i__50952_51147 + (1));
seq__50949_51144 = G__51149;
chunk__50950_51145 = G__51150;
count__50951_51146 = G__51151;
i__50952_51147 = G__51152;
continue;
} else {
var temp__5735__auto___51153 = cljs.core.seq(seq__50949_51144);
if(temp__5735__auto___51153){
var seq__50949_51154__$1 = temp__5735__auto___51153;
if(cljs.core.chunked_seq_QMARK_(seq__50949_51154__$1)){
var c__4609__auto___51155 = cljs.core.chunk_first(seq__50949_51154__$1);
var G__51156 = cljs.core.chunk_rest(seq__50949_51154__$1);
var G__51157 = c__4609__auto___51155;
var G__51158 = cljs.core.count(c__4609__auto___51155);
var G__51159 = (0);
seq__50949_51144 = G__51156;
chunk__50950_51145 = G__51157;
count__50951_51146 = G__51158;
i__50952_51147 = G__51159;
continue;
} else {
var f_51160 = cljs.core.first(seq__50949_51154__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51160], 0));


var G__51161 = cljs.core.next(seq__50949_51154__$1);
var G__51162 = null;
var G__51163 = (0);
var G__51164 = (0);
seq__50949_51144 = G__51161;
chunk__50950_51145 = G__51162;
count__50951_51146 = G__51163;
i__50952_51147 = G__51164;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51165 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51165], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51165)))?cljs.core.second(arglists_51165):arglists_51165)], 0));
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
var seq__50953_51166 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50954_51167 = null;
var count__50955_51168 = (0);
var i__50956_51169 = (0);
while(true){
if((i__50956_51169 < count__50955_51168)){
var vec__50967_51170 = chunk__50954_51167.cljs$core$IIndexed$_nth$arity$2(null,i__50956_51169);
var name_51171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50967_51170,(0),null);
var map__50970_51172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50967_51170,(1),null);
var map__50970_51173__$1 = (((((!((map__50970_51172 == null))))?(((((map__50970_51172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50970_51172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50970_51172):map__50970_51172);
var doc_51174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50970_51173__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50970_51173__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51171], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51175], 0));

if(cljs.core.truth_(doc_51174)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51174], 0));
} else {
}


var G__51181 = seq__50953_51166;
var G__51182 = chunk__50954_51167;
var G__51183 = count__50955_51168;
var G__51184 = (i__50956_51169 + (1));
seq__50953_51166 = G__51181;
chunk__50954_51167 = G__51182;
count__50955_51168 = G__51183;
i__50956_51169 = G__51184;
continue;
} else {
var temp__5735__auto___51191 = cljs.core.seq(seq__50953_51166);
if(temp__5735__auto___51191){
var seq__50953_51192__$1 = temp__5735__auto___51191;
if(cljs.core.chunked_seq_QMARK_(seq__50953_51192__$1)){
var c__4609__auto___51193 = cljs.core.chunk_first(seq__50953_51192__$1);
var G__51203 = cljs.core.chunk_rest(seq__50953_51192__$1);
var G__51204 = c__4609__auto___51193;
var G__51205 = cljs.core.count(c__4609__auto___51193);
var G__51206 = (0);
seq__50953_51166 = G__51203;
chunk__50954_51167 = G__51204;
count__50955_51168 = G__51205;
i__50956_51169 = G__51206;
continue;
} else {
var vec__50976_51207 = cljs.core.first(seq__50953_51192__$1);
var name_51208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50976_51207,(0),null);
var map__50979_51209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50976_51207,(1),null);
var map__50979_51210__$1 = (((((!((map__50979_51209 == null))))?(((((map__50979_51209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50979_51209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50979_51209):map__50979_51209);
var doc_51211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50979_51210__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50979_51210__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51208], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51212], 0));

if(cljs.core.truth_(doc_51211)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51211], 0));
} else {
}


var G__51213 = cljs.core.next(seq__50953_51192__$1);
var G__51214 = null;
var G__51215 = (0);
var G__51216 = (0);
seq__50953_51166 = G__51213;
chunk__50954_51167 = G__51214;
count__50955_51168 = G__51215;
i__50956_51169 = G__51216;
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

var seq__50984 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50985 = null;
var count__50986 = (0);
var i__50987 = (0);
while(true){
if((i__50987 < count__50986)){
var role = chunk__50985.cljs$core$IIndexed$_nth$arity$2(null,i__50987);
var temp__5735__auto___51224__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51224__$1)){
var spec_51225 = temp__5735__auto___51224__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51225)], 0));
} else {
}


var G__51226 = seq__50984;
var G__51227 = chunk__50985;
var G__51228 = count__50986;
var G__51229 = (i__50987 + (1));
seq__50984 = G__51226;
chunk__50985 = G__51227;
count__50986 = G__51228;
i__50987 = G__51229;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50984);
if(temp__5735__auto____$1){
var seq__50984__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50984__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50984__$1);
var G__51230 = cljs.core.chunk_rest(seq__50984__$1);
var G__51231 = c__4609__auto__;
var G__51232 = cljs.core.count(c__4609__auto__);
var G__51233 = (0);
seq__50984 = G__51230;
chunk__50985 = G__51231;
count__50986 = G__51232;
i__50987 = G__51233;
continue;
} else {
var role = cljs.core.first(seq__50984__$1);
var temp__5735__auto___51234__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51234__$2)){
var spec_51235 = temp__5735__auto___51234__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51235)], 0));
} else {
}


var G__51236 = cljs.core.next(seq__50984__$1);
var G__51237 = null;
var G__51238 = (0);
var G__51239 = (0);
seq__50984 = G__51236;
chunk__50985 = G__51237;
count__50986 = G__51238;
i__50987 = G__51239;
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
var G__51240 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51241 = cljs.core.ex_cause(t);
via = G__51240;
t = G__51241;
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
var map__51023 = datafied_throwable;
var map__51023__$1 = (((((!((map__51023 == null))))?(((((map__51023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51023):map__51023);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51023__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51023__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51023__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51024 = cljs.core.last(via);
var map__51024__$1 = (((((!((map__51024 == null))))?(((((map__51024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51024):map__51024);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51024__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51024__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51024__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51025 = data;
var map__51025__$1 = (((((!((map__51025 == null))))?(((((map__51025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51025):map__51025);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51026 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51026__$1 = (((((!((map__51026 == null))))?(((((map__51026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51026):map__51026);
var top_data = map__51026__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51026__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51038 = phase;
var G__51038__$1 = (((G__51038 instanceof cljs.core.Keyword))?G__51038.fqn:null);
switch (G__51038__$1) {
case "read-source":
var map__51039 = data;
var map__51039__$1 = (((((!((map__51039 == null))))?(((((map__51039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51039):map__51039);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51039__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51039__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51044 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51044__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51044,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51044);
var G__51044__$2 = (cljs.core.truth_((function (){var fexpr__51045 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51045.cljs$core$IFn$_invoke$arity$1 ? fexpr__51045.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51045.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51044__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51044__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51044__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51044__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51047 = top_data;
var G__51047__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51047,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51047);
var G__51047__$2 = (cljs.core.truth_((function (){var fexpr__51048 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51048.cljs$core$IFn$_invoke$arity$1 ? fexpr__51048.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51048.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51047__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51047__$1);
var G__51047__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51047__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51047__$2);
var G__51047__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51047__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51047__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51047__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51047__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51049 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51049,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51049,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51049,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51049,(3),null);
var G__51052 = top_data;
var G__51052__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51052,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51052);
var G__51052__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51052__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51052__$1);
var G__51052__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51052__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51052__$2);
var G__51052__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51052__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51052__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51052__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51052__$4;
}

break;
case "execution":
var vec__51053 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51053,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51053,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51053,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51053,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51014_SHARP_){
var or__4185__auto__ = (p1__51014_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__51057 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51057.cljs$core$IFn$_invoke$arity$1 ? fexpr__51057.cljs$core$IFn$_invoke$arity$1(p1__51014_SHARP_) : fexpr__51057.call(null,p1__51014_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__51058 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51058__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51058,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51058);
var G__51058__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51058__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51058__$1);
var G__51058__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51058__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51058__$2);
var G__51058__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51058__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51058__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51058__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51058__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51038__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51078){
var map__51079 = p__51078;
var map__51079__$1 = (((((!((map__51079 == null))))?(((((map__51079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51079):map__51079);
var triage_data = map__51079__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__51089 = phase;
var G__51089__$1 = (((G__51089 instanceof cljs.core.Keyword))?G__51089.fqn:null);
switch (G__51089__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51090 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51091 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51092 = loc;
var G__51093 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51094_51272 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51095_51273 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51096_51274 = true;
var _STAR_print_fn_STAR__temp_val__51097_51275 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51096_51274);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51097_51275);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51076_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51076_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51095_51273);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51094_51272);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51090,G__51091,G__51092,G__51093) : format.call(null,G__51090,G__51091,G__51092,G__51093));

break;
case "macroexpansion":
var G__51105 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51106 = cause_type;
var G__51107 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51108 = loc;
var G__51109 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51105,G__51106,G__51107,G__51108,G__51109) : format.call(null,G__51105,G__51106,G__51107,G__51108,G__51109));

break;
case "compile-syntax-check":
var G__51110 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51111 = cause_type;
var G__51112 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51113 = loc;
var G__51114 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51110,G__51111,G__51112,G__51113,G__51114) : format.call(null,G__51110,G__51111,G__51112,G__51113,G__51114));

break;
case "compilation":
var G__51115 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51116 = cause_type;
var G__51117 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51118 = loc;
var G__51119 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51115,G__51116,G__51117,G__51118,G__51119) : format.call(null,G__51115,G__51116,G__51117,G__51118,G__51119));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51120 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51121 = symbol;
var G__51122 = loc;
var G__51123 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51124_51283 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51125_51284 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51126_51285 = true;
var _STAR_print_fn_STAR__temp_val__51127_51286 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51126_51285);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51127_51286);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51077_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51077_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51125_51284);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51124_51283);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51120,G__51121,G__51122,G__51123) : format.call(null,G__51120,G__51121,G__51122,G__51123));
} else {
var G__51128 = "Execution error%s at %s(%s).\n%s\n";
var G__51129 = cause_type;
var G__51130 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51131 = loc;
var G__51132 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51128,G__51129,G__51130,G__51131,G__51132) : format.call(null,G__51128,G__51129,G__51130,G__51131,G__51132));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51089__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
