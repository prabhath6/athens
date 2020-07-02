goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.max_or_throw');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__89741 = xs;
args__$2 = G__89741;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__89742 = xs;
args__$2 = G__89742;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4795__auto__ = [];
var len__4789__auto___89743 = arguments.length;
var i__4790__auto___89744 = (0);
while(true){
if((i__4790__auto___89744 < len__4789__auto___89743)){
args__4795__auto__.push((arguments[i__4790__auto___89744]));

var G__89745 = (i__4790__auto___89744 + (1));
i__4790__auto___89744 = G__89745;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__89746 = ctx__$2;
var G__89747 = rest_let_bindings;
ctx__$1 = G__89746;
let_bindings__$1 = G__89747;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__89748 = nexprs;
exprs__$1 = G__89748;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq89009){
var G__89010 = cljs.core.first(seq89009);
var seq89009__$1 = cljs.core.next(seq89009);
var G__89011 = cljs.core.first(seq89009__$1);
var seq89009__$2 = cljs.core.next(seq89009__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89010,G__89011,seq89009__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__89012){
var vec__89013 = p__89012;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89013,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89013,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89013,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89013,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((function (){var G__89016 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__89017 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__89016,G__89017) : sci.impl.utils.kw_identical_QMARK_.call(null,G__89016,G__89017));
})())?(function (){var G__89018 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__89018,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__89018;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__89019 = libspec;
var seq__89020 = cljs.core.seq(vec__89019);
var first__89021 = cljs.core.first(seq__89020);
var seq__89020__$1 = cljs.core.next(seq__89020);
var lib_name = first__89021;
var opts = seq__89020__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__89025 = opts;
var vec__89026 = G__89025;
var seq__89027 = cljs.core.seq(vec__89026);
var first__89028 = cljs.core.first(seq__89027);
var seq__89027__$1 = cljs.core.next(seq__89027);
var opt_name = first__89028;
var first__89028__$1 = cljs.core.first(seq__89027__$1);
var seq__89027__$2 = cljs.core.next(seq__89027__$1);
var fst_opt = first__89028__$1;
var rst_opts = seq__89027__$2;
var ret__$1 = ret;
var G__89025__$1 = G__89025;
while(true){
var ret__$2 = ret__$1;
var vec__89033 = G__89025__$1;
var seq__89034 = cljs.core.seq(vec__89033);
var first__89035 = cljs.core.first(seq__89034);
var seq__89034__$1 = cljs.core.next(seq__89034);
var opt_name__$1 = first__89035;
var first__89035__$1 = cljs.core.first(seq__89034__$1);
var seq__89034__$2 = cljs.core.next(seq__89034__$1);
var fst_opt__$1 = first__89035__$1;
var rst_opts__$1 = seq__89034__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__89036 = opt_name__$1;
var G__89036__$1 = (((G__89036 instanceof cljs.core.Keyword))?G__89036.fqn:null);
switch (G__89036__$1) {
case "as":
var G__89750 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__89751 = rst_opts__$1;
ret__$1 = G__89750;
G__89025__$1 = G__89751;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__89752 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__89753 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__89752;
G__89025__$1 = G__89753;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__89754 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__89755 = rst_opts__$1;
ret__$1 = G__89754;
G__89025__$1 = G__89755;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89036__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__89037){
var vec__89038 = p__89037;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89038,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89038,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4174__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4174__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__89041){
var map__89042 = p__89041;
var map__89042__$1 = (((((!((map__89042 == null))))?(((((map__89042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89042):map__89042);
var _parsed_libspec = map__89042__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89042__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89042__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89042__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89042__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89042__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4185__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__89046 = new cljs.core.Keyword(null,"all","all",892129742);
var G__89047 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__89046,G__89047) : sci.impl.utils.kw_identical_QMARK_.call(null,G__89046,G__89047));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__89048 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89048,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89048,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__89051 = sci.impl.interpreter.parse_libspec(libspec);
var map__89051__$1 = (((((!((map__89051 == null))))?(((((map__89051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89051):map__89051);
var parsed_libspec = map__89051__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89051__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89051__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__89053 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__89053) : load_fn.call(null,G__89053));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__89054 = temp__5733__auto____$2;
var map__89054__$1 = (((((!((map__89054 == null))))?(((((map__89054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89054):map__89054);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89054__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89054__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__89057_89756 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__89058_89757 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__89057_89756,G__89058_89757) : sci.impl.interpreter.eval_string_STAR_.call(null,G__89057_89756,G__89058_89757));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e89056){if((e89056 instanceof Error)){
var e_89758 = e89056;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_89758;
} else {
throw e89056;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4185__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4795__auto__ = [];
var len__4789__auto___89759 = arguments.length;
var i__4790__auto___89760 = (0);
while(true){
if((i__4790__auto___89760 < len__4789__auto___89759)){
args__4795__auto__.push((arguments[i__4790__auto___89760]));

var G__89761 = (i__4790__auto___89760 + (1));
i__4790__auto___89760 = G__89761;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__89067 = ctx;
var G__89068 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89067,G__89068) : sci.impl.interpreter.interpret.call(null,G__89067,G__89068));
})();
if((ret instanceof cljs.core.Symbol)){
var G__89762 = (function (){var G__89069 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__89069,current_libspec);
} else {
return G__89069;
}
})();
var G__89763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__89764 = cljs.core.next(args__$1);
libspecs = G__89762;
current_libspec = G__89763;
args__$1 = G__89764;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__89765 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__89766 = null;
var G__89767 = cljs.core.next(args__$1);
libspecs = G__89765;
current_libspec = G__89766;
args__$1 = G__89767;
continue;
} else {
var G__89768 = (function (){var G__89070 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__89070,current_libspec);
} else {
return G__89070;
}
})();
var G__89769 = ret;
var G__89770 = cljs.core.next(args__$1);
libspecs = G__89768;
current_libspec = G__89769;
args__$1 = G__89770;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__89071 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__89071,current_libspec);
} else {
return G__89071;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__89059_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__89059_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq89060){
var G__89061 = cljs.core.first(seq89060);
var seq89060__$1 = cljs.core.next(seq89060);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89061,seq89060__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___89771 = arguments.length;
var i__4790__auto___89772 = (0);
while(true){
if((i__4790__auto___89772 < len__4789__auto___89771)){
args__4795__auto__.push((arguments[i__4790__auto___89772]));

var G__89773 = (i__4790__auto___89772 + (1));
i__4790__auto___89772 = G__89773;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq89072){
var G__89073 = cljs.core.first(seq89072);
var seq89072__$1 = cljs.core.next(seq89072);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89073,seq89072__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__89074){
var vec__89075 = p__89074;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89075,(0),null);
var map__89078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89075,(1),null);
var map__89078__$1 = (((((!((map__89078 == null))))?(((((map__89078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89078):map__89078);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89078__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89078__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89078__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__89080 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89080,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89080,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__89083 = ctx;
var G__89084 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89083,G__89084) : sci.impl.interpreter.interpret.call(null,G__89083,G__89084));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__89085 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__89085__$1 = (((((!((map__89085 == null))))?(((((map__89085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89085):map__89085);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89085__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89085__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89085__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__89093 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__89094 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__89094);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__89093);
}}catch (e89087){if((e89087 instanceof Error)){
var e = e89087;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__89088 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__89089 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89088,G__89089) : sci.impl.interpreter.interpret.call(null,G__89088,G__89089));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__89090 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89090,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89090,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e89087;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__89095){
var vec__89096 = p__89095;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89096,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89096,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__89099_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__89099_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__89099_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__89101){
var vec__89102 = p__89101;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89102,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89102,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89102,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__89100_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__89100_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__89100_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__89107,p__89108){
var map__89109 = p__89107;
var map__89109__$1 = (((((!((map__89109 == null))))?(((((map__89109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89109):map__89109);
var ctx = map__89109__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89109__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__89110 = p__89108;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89110,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89110,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89110,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89110,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4185__auto__ = tag_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__89106_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__89106_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__89106_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__89114){
var vec__89115 = p__89114;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89115,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89115,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__89118){
var vec__89119 = p__89118;
var seq__89120 = cljs.core.seq(vec__89119);
var first__89121 = cljs.core.first(seq__89120);
var seq__89120__$1 = cljs.core.next(seq__89120);
var _ = first__89121;
var first__89121__$1 = cljs.core.first(seq__89120__$1);
var seq__89120__$2 = cljs.core.next(seq__89120__$1);
var ns_sym = first__89121__$1;
var exprs = seq__89120__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__89122 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89122,(1),null);
var G__89125_89803 = k;
var G__89125_89804__$1 = (((G__89125_89803 instanceof cljs.core.Keyword))?G__89125_89803.fqn:null);
switch (G__89125_89804__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__89125_89803,G__89125_89804__$1,vec__89122,k,v,ns_sym__$1,vec__89119,seq__89120,first__89121,seq__89120__$1,_,first__89121__$1,seq__89120__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__89125_89803,G__89125_89804__$1,vec__89122,k,v,ns_sym__$1,vec__89119,seq__89120,first__89121,seq__89120__$1,_,first__89121__$1,seq__89120__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89125_89804__$1)].join('')));

}

var G__89806 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__89806;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__89126){
var vec__89127 = p__89126;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89127,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89127,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89127,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__89133 = exprs;
var vec__89134 = G__89133;
var seq__89135 = cljs.core.seq(vec__89134);
var first__89136 = cljs.core.first(seq__89135);
var seq__89135__$1 = cljs.core.next(seq__89135);
var expr = first__89136;
var exprs__$1 = seq__89135__$1;
var G__89133__$1 = G__89133;
while(true){
var vec__89137 = G__89133__$1;
var seq__89138 = cljs.core.seq(vec__89137);
var first__89139 = cljs.core.first(seq__89138);
var seq__89138__$1 = cljs.core.next(seq__89138);
var expr__$1 = first__89139;
var exprs__$2 = seq__89138__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e89140){if((e89140 instanceof Error)){
var e = e89140;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e89140;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__89810 = exprs__$3;
G__89133__$1 = G__89810;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__89333 = cljs.core.count(args);
switch (G__89333) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg89143 = (function (){var G__89334 = ctx;
var G__89335 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89334,G__89335) : sci.impl.interpreter.interpret.call(null,G__89334,G__89335));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg89143) : f.call(null,arg89143));

break;
case (2):
var arg89144 = (function (){var G__89336 = ctx;
var G__89337 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89336,G__89337) : sci.impl.interpreter.interpret.call(null,G__89336,G__89337));
})();
var args__$1 = cljs.core.rest(args);
var arg89145 = (function (){var G__89338 = ctx;
var G__89339 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89338,G__89339) : sci.impl.interpreter.interpret.call(null,G__89338,G__89339));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg89144,arg89145) : f.call(null,arg89144,arg89145));

break;
case (3):
var arg89146 = (function (){var G__89340 = ctx;
var G__89341 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89340,G__89341) : sci.impl.interpreter.interpret.call(null,G__89340,G__89341));
})();
var args__$1 = cljs.core.rest(args);
var arg89147 = (function (){var G__89342 = ctx;
var G__89343 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89342,G__89343) : sci.impl.interpreter.interpret.call(null,G__89342,G__89343));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89148 = (function (){var G__89344 = ctx;
var G__89345 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89344,G__89345) : sci.impl.interpreter.interpret.call(null,G__89344,G__89345));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg89146,arg89147,arg89148) : f.call(null,arg89146,arg89147,arg89148));

break;
case (4):
var arg89149 = (function (){var G__89346 = ctx;
var G__89347 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89346,G__89347) : sci.impl.interpreter.interpret.call(null,G__89346,G__89347));
})();
var args__$1 = cljs.core.rest(args);
var arg89150 = (function (){var G__89348 = ctx;
var G__89349 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89348,G__89349) : sci.impl.interpreter.interpret.call(null,G__89348,G__89349));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89151 = (function (){var G__89350 = ctx;
var G__89351 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89350,G__89351) : sci.impl.interpreter.interpret.call(null,G__89350,G__89351));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89152 = (function (){var G__89352 = ctx;
var G__89353 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89352,G__89353) : sci.impl.interpreter.interpret.call(null,G__89352,G__89353));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg89149,arg89150,arg89151,arg89152) : f.call(null,arg89149,arg89150,arg89151,arg89152));

break;
case (5):
var arg89153 = (function (){var G__89354 = ctx;
var G__89355 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89354,G__89355) : sci.impl.interpreter.interpret.call(null,G__89354,G__89355));
})();
var args__$1 = cljs.core.rest(args);
var arg89154 = (function (){var G__89356 = ctx;
var G__89357 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89356,G__89357) : sci.impl.interpreter.interpret.call(null,G__89356,G__89357));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89155 = (function (){var G__89358 = ctx;
var G__89359 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89358,G__89359) : sci.impl.interpreter.interpret.call(null,G__89358,G__89359));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89156 = (function (){var G__89360 = ctx;
var G__89361 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89360,G__89361) : sci.impl.interpreter.interpret.call(null,G__89360,G__89361));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89157 = (function (){var G__89362 = ctx;
var G__89363 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89362,G__89363) : sci.impl.interpreter.interpret.call(null,G__89362,G__89363));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg89153,arg89154,arg89155,arg89156,arg89157) : f.call(null,arg89153,arg89154,arg89155,arg89156,arg89157));

break;
case (6):
var arg89158 = (function (){var G__89364 = ctx;
var G__89365 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89364,G__89365) : sci.impl.interpreter.interpret.call(null,G__89364,G__89365));
})();
var args__$1 = cljs.core.rest(args);
var arg89159 = (function (){var G__89366 = ctx;
var G__89367 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89366,G__89367) : sci.impl.interpreter.interpret.call(null,G__89366,G__89367));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89160 = (function (){var G__89368 = ctx;
var G__89369 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89368,G__89369) : sci.impl.interpreter.interpret.call(null,G__89368,G__89369));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89161 = (function (){var G__89370 = ctx;
var G__89371 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89370,G__89371) : sci.impl.interpreter.interpret.call(null,G__89370,G__89371));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89162 = (function (){var G__89372 = ctx;
var G__89373 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89372,G__89373) : sci.impl.interpreter.interpret.call(null,G__89372,G__89373));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89163 = (function (){var G__89374 = ctx;
var G__89375 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89374,G__89375) : sci.impl.interpreter.interpret.call(null,G__89374,G__89375));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg89158,arg89159,arg89160,arg89161,arg89162,arg89163) : f.call(null,arg89158,arg89159,arg89160,arg89161,arg89162,arg89163));

break;
case (7):
var arg89164 = (function (){var G__89376 = ctx;
var G__89377 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89376,G__89377) : sci.impl.interpreter.interpret.call(null,G__89376,G__89377));
})();
var args__$1 = cljs.core.rest(args);
var arg89165 = (function (){var G__89378 = ctx;
var G__89379 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89378,G__89379) : sci.impl.interpreter.interpret.call(null,G__89378,G__89379));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89166 = (function (){var G__89380 = ctx;
var G__89381 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89380,G__89381) : sci.impl.interpreter.interpret.call(null,G__89380,G__89381));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89167 = (function (){var G__89382 = ctx;
var G__89383 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89382,G__89383) : sci.impl.interpreter.interpret.call(null,G__89382,G__89383));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89168 = (function (){var G__89384 = ctx;
var G__89385 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89384,G__89385) : sci.impl.interpreter.interpret.call(null,G__89384,G__89385));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89169 = (function (){var G__89386 = ctx;
var G__89387 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89386,G__89387) : sci.impl.interpreter.interpret.call(null,G__89386,G__89387));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89170 = (function (){var G__89388 = ctx;
var G__89389 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89388,G__89389) : sci.impl.interpreter.interpret.call(null,G__89388,G__89389));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg89164,arg89165,arg89166,arg89167,arg89168,arg89169,arg89170) : f.call(null,arg89164,arg89165,arg89166,arg89167,arg89168,arg89169,arg89170));

break;
case (8):
var arg89171 = (function (){var G__89390 = ctx;
var G__89391 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89390,G__89391) : sci.impl.interpreter.interpret.call(null,G__89390,G__89391));
})();
var args__$1 = cljs.core.rest(args);
var arg89172 = (function (){var G__89392 = ctx;
var G__89393 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89392,G__89393) : sci.impl.interpreter.interpret.call(null,G__89392,G__89393));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89173 = (function (){var G__89394 = ctx;
var G__89395 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89394,G__89395) : sci.impl.interpreter.interpret.call(null,G__89394,G__89395));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89174 = (function (){var G__89396 = ctx;
var G__89397 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89396,G__89397) : sci.impl.interpreter.interpret.call(null,G__89396,G__89397));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89175 = (function (){var G__89398 = ctx;
var G__89399 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89398,G__89399) : sci.impl.interpreter.interpret.call(null,G__89398,G__89399));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89176 = (function (){var G__89400 = ctx;
var G__89401 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89400,G__89401) : sci.impl.interpreter.interpret.call(null,G__89400,G__89401));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89177 = (function (){var G__89402 = ctx;
var G__89403 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89402,G__89403) : sci.impl.interpreter.interpret.call(null,G__89402,G__89403));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89178 = (function (){var G__89404 = ctx;
var G__89405 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89404,G__89405) : sci.impl.interpreter.interpret.call(null,G__89404,G__89405));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg89171,arg89172,arg89173,arg89174,arg89175,arg89176,arg89177,arg89178) : f.call(null,arg89171,arg89172,arg89173,arg89174,arg89175,arg89176,arg89177,arg89178));

break;
case (9):
var arg89179 = (function (){var G__89406 = ctx;
var G__89407 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89406,G__89407) : sci.impl.interpreter.interpret.call(null,G__89406,G__89407));
})();
var args__$1 = cljs.core.rest(args);
var arg89180 = (function (){var G__89408 = ctx;
var G__89409 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89408,G__89409) : sci.impl.interpreter.interpret.call(null,G__89408,G__89409));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89181 = (function (){var G__89410 = ctx;
var G__89411 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89410,G__89411) : sci.impl.interpreter.interpret.call(null,G__89410,G__89411));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89182 = (function (){var G__89412 = ctx;
var G__89413 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89412,G__89413) : sci.impl.interpreter.interpret.call(null,G__89412,G__89413));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89183 = (function (){var G__89414 = ctx;
var G__89415 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89414,G__89415) : sci.impl.interpreter.interpret.call(null,G__89414,G__89415));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89184 = (function (){var G__89416 = ctx;
var G__89417 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89416,G__89417) : sci.impl.interpreter.interpret.call(null,G__89416,G__89417));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89185 = (function (){var G__89418 = ctx;
var G__89419 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89418,G__89419) : sci.impl.interpreter.interpret.call(null,G__89418,G__89419));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89186 = (function (){var G__89420 = ctx;
var G__89421 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89420,G__89421) : sci.impl.interpreter.interpret.call(null,G__89420,G__89421));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89187 = (function (){var G__89422 = ctx;
var G__89423 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89422,G__89423) : sci.impl.interpreter.interpret.call(null,G__89422,G__89423));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg89179,arg89180,arg89181,arg89182,arg89183,arg89184,arg89185,arg89186,arg89187) : f.call(null,arg89179,arg89180,arg89181,arg89182,arg89183,arg89184,arg89185,arg89186,arg89187));

break;
case (10):
var arg89188 = (function (){var G__89424 = ctx;
var G__89425 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89424,G__89425) : sci.impl.interpreter.interpret.call(null,G__89424,G__89425));
})();
var args__$1 = cljs.core.rest(args);
var arg89189 = (function (){var G__89426 = ctx;
var G__89427 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89426,G__89427) : sci.impl.interpreter.interpret.call(null,G__89426,G__89427));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89190 = (function (){var G__89428 = ctx;
var G__89429 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89428,G__89429) : sci.impl.interpreter.interpret.call(null,G__89428,G__89429));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89191 = (function (){var G__89430 = ctx;
var G__89431 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89430,G__89431) : sci.impl.interpreter.interpret.call(null,G__89430,G__89431));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89192 = (function (){var G__89432 = ctx;
var G__89433 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89432,G__89433) : sci.impl.interpreter.interpret.call(null,G__89432,G__89433));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89193 = (function (){var G__89434 = ctx;
var G__89435 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89434,G__89435) : sci.impl.interpreter.interpret.call(null,G__89434,G__89435));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89194 = (function (){var G__89436 = ctx;
var G__89437 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89436,G__89437) : sci.impl.interpreter.interpret.call(null,G__89436,G__89437));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89195 = (function (){var G__89438 = ctx;
var G__89439 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89438,G__89439) : sci.impl.interpreter.interpret.call(null,G__89438,G__89439));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89196 = (function (){var G__89440 = ctx;
var G__89441 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89440,G__89441) : sci.impl.interpreter.interpret.call(null,G__89440,G__89441));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89197 = (function (){var G__89442 = ctx;
var G__89443 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89442,G__89443) : sci.impl.interpreter.interpret.call(null,G__89442,G__89443));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg89188,arg89189,arg89190,arg89191,arg89192,arg89193,arg89194,arg89195,arg89196,arg89197) : f.call(null,arg89188,arg89189,arg89190,arg89191,arg89192,arg89193,arg89194,arg89195,arg89196,arg89197));

break;
case (11):
var arg89198 = (function (){var G__89444 = ctx;
var G__89445 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89444,G__89445) : sci.impl.interpreter.interpret.call(null,G__89444,G__89445));
})();
var args__$1 = cljs.core.rest(args);
var arg89199 = (function (){var G__89446 = ctx;
var G__89447 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89446,G__89447) : sci.impl.interpreter.interpret.call(null,G__89446,G__89447));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89200 = (function (){var G__89448 = ctx;
var G__89449 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89448,G__89449) : sci.impl.interpreter.interpret.call(null,G__89448,G__89449));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89201 = (function (){var G__89450 = ctx;
var G__89451 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89450,G__89451) : sci.impl.interpreter.interpret.call(null,G__89450,G__89451));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89202 = (function (){var G__89452 = ctx;
var G__89453 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89452,G__89453) : sci.impl.interpreter.interpret.call(null,G__89452,G__89453));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89203 = (function (){var G__89454 = ctx;
var G__89455 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89454,G__89455) : sci.impl.interpreter.interpret.call(null,G__89454,G__89455));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89204 = (function (){var G__89456 = ctx;
var G__89457 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89456,G__89457) : sci.impl.interpreter.interpret.call(null,G__89456,G__89457));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89205 = (function (){var G__89458 = ctx;
var G__89459 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89458,G__89459) : sci.impl.interpreter.interpret.call(null,G__89458,G__89459));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89206 = (function (){var G__89460 = ctx;
var G__89461 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89460,G__89461) : sci.impl.interpreter.interpret.call(null,G__89460,G__89461));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89207 = (function (){var G__89462 = ctx;
var G__89463 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89462,G__89463) : sci.impl.interpreter.interpret.call(null,G__89462,G__89463));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89208 = (function (){var G__89464 = ctx;
var G__89465 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89464,G__89465) : sci.impl.interpreter.interpret.call(null,G__89464,G__89465));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg89198,arg89199,arg89200,arg89201,arg89202,arg89203,arg89204,arg89205,arg89206,arg89207,arg89208) : f.call(null,arg89198,arg89199,arg89200,arg89201,arg89202,arg89203,arg89204,arg89205,arg89206,arg89207,arg89208));

break;
case (12):
var arg89209 = (function (){var G__89466 = ctx;
var G__89467 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89466,G__89467) : sci.impl.interpreter.interpret.call(null,G__89466,G__89467));
})();
var args__$1 = cljs.core.rest(args);
var arg89210 = (function (){var G__89468 = ctx;
var G__89469 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89468,G__89469) : sci.impl.interpreter.interpret.call(null,G__89468,G__89469));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89211 = (function (){var G__89470 = ctx;
var G__89471 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89470,G__89471) : sci.impl.interpreter.interpret.call(null,G__89470,G__89471));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89212 = (function (){var G__89472 = ctx;
var G__89473 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89472,G__89473) : sci.impl.interpreter.interpret.call(null,G__89472,G__89473));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89213 = (function (){var G__89474 = ctx;
var G__89475 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89474,G__89475) : sci.impl.interpreter.interpret.call(null,G__89474,G__89475));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89214 = (function (){var G__89476 = ctx;
var G__89477 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89476,G__89477) : sci.impl.interpreter.interpret.call(null,G__89476,G__89477));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89215 = (function (){var G__89478 = ctx;
var G__89479 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89478,G__89479) : sci.impl.interpreter.interpret.call(null,G__89478,G__89479));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89216 = (function (){var G__89480 = ctx;
var G__89481 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89480,G__89481) : sci.impl.interpreter.interpret.call(null,G__89480,G__89481));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89217 = (function (){var G__89482 = ctx;
var G__89483 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89482,G__89483) : sci.impl.interpreter.interpret.call(null,G__89482,G__89483));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89218 = (function (){var G__89484 = ctx;
var G__89485 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89484,G__89485) : sci.impl.interpreter.interpret.call(null,G__89484,G__89485));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89219 = (function (){var G__89486 = ctx;
var G__89487 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89486,G__89487) : sci.impl.interpreter.interpret.call(null,G__89486,G__89487));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg89220 = (function (){var G__89488 = ctx;
var G__89489 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89488,G__89489) : sci.impl.interpreter.interpret.call(null,G__89488,G__89489));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg89209,arg89210,arg89211,arg89212,arg89213,arg89214,arg89215,arg89216,arg89217,arg89218,arg89219,arg89220) : f.call(null,arg89209,arg89210,arg89211,arg89212,arg89213,arg89214,arg89215,arg89216,arg89217,arg89218,arg89219,arg89220));

break;
case (13):
var arg89221 = (function (){var G__89490 = ctx;
var G__89491 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89490,G__89491) : sci.impl.interpreter.interpret.call(null,G__89490,G__89491));
})();
var args__$1 = cljs.core.rest(args);
var arg89222 = (function (){var G__89492 = ctx;
var G__89493 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89492,G__89493) : sci.impl.interpreter.interpret.call(null,G__89492,G__89493));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89223 = (function (){var G__89494 = ctx;
var G__89495 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89494,G__89495) : sci.impl.interpreter.interpret.call(null,G__89494,G__89495));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89224 = (function (){var G__89496 = ctx;
var G__89497 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89496,G__89497) : sci.impl.interpreter.interpret.call(null,G__89496,G__89497));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89225 = (function (){var G__89498 = ctx;
var G__89499 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89498,G__89499) : sci.impl.interpreter.interpret.call(null,G__89498,G__89499));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89226 = (function (){var G__89500 = ctx;
var G__89501 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89500,G__89501) : sci.impl.interpreter.interpret.call(null,G__89500,G__89501));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89227 = (function (){var G__89502 = ctx;
var G__89503 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89502,G__89503) : sci.impl.interpreter.interpret.call(null,G__89502,G__89503));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89228 = (function (){var G__89504 = ctx;
var G__89505 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89504,G__89505) : sci.impl.interpreter.interpret.call(null,G__89504,G__89505));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89229 = (function (){var G__89506 = ctx;
var G__89507 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89506,G__89507) : sci.impl.interpreter.interpret.call(null,G__89506,G__89507));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89230 = (function (){var G__89508 = ctx;
var G__89509 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89508,G__89509) : sci.impl.interpreter.interpret.call(null,G__89508,G__89509));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89231 = (function (){var G__89510 = ctx;
var G__89511 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89510,G__89511) : sci.impl.interpreter.interpret.call(null,G__89510,G__89511));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg89232 = (function (){var G__89512 = ctx;
var G__89513 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89512,G__89513) : sci.impl.interpreter.interpret.call(null,G__89512,G__89513));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg89233 = (function (){var G__89514 = ctx;
var G__89515 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89514,G__89515) : sci.impl.interpreter.interpret.call(null,G__89514,G__89515));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg89221,arg89222,arg89223,arg89224,arg89225,arg89226,arg89227,arg89228,arg89229,arg89230,arg89231,arg89232,arg89233) : f.call(null,arg89221,arg89222,arg89223,arg89224,arg89225,arg89226,arg89227,arg89228,arg89229,arg89230,arg89231,arg89232,arg89233));

break;
case (14):
var arg89234 = (function (){var G__89516 = ctx;
var G__89517 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89516,G__89517) : sci.impl.interpreter.interpret.call(null,G__89516,G__89517));
})();
var args__$1 = cljs.core.rest(args);
var arg89235 = (function (){var G__89518 = ctx;
var G__89519 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89518,G__89519) : sci.impl.interpreter.interpret.call(null,G__89518,G__89519));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89236 = (function (){var G__89520 = ctx;
var G__89521 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89520,G__89521) : sci.impl.interpreter.interpret.call(null,G__89520,G__89521));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89237 = (function (){var G__89522 = ctx;
var G__89523 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89522,G__89523) : sci.impl.interpreter.interpret.call(null,G__89522,G__89523));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89238 = (function (){var G__89524 = ctx;
var G__89525 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89524,G__89525) : sci.impl.interpreter.interpret.call(null,G__89524,G__89525));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89239 = (function (){var G__89526 = ctx;
var G__89527 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89526,G__89527) : sci.impl.interpreter.interpret.call(null,G__89526,G__89527));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89240 = (function (){var G__89528 = ctx;
var G__89529 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89528,G__89529) : sci.impl.interpreter.interpret.call(null,G__89528,G__89529));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89241 = (function (){var G__89530 = ctx;
var G__89531 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89530,G__89531) : sci.impl.interpreter.interpret.call(null,G__89530,G__89531));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89242 = (function (){var G__89532 = ctx;
var G__89533 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89532,G__89533) : sci.impl.interpreter.interpret.call(null,G__89532,G__89533));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89243 = (function (){var G__89534 = ctx;
var G__89535 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89534,G__89535) : sci.impl.interpreter.interpret.call(null,G__89534,G__89535));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89244 = (function (){var G__89536 = ctx;
var G__89537 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89536,G__89537) : sci.impl.interpreter.interpret.call(null,G__89536,G__89537));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg89245 = (function (){var G__89538 = ctx;
var G__89539 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89538,G__89539) : sci.impl.interpreter.interpret.call(null,G__89538,G__89539));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg89246 = (function (){var G__89540 = ctx;
var G__89541 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89540,G__89541) : sci.impl.interpreter.interpret.call(null,G__89540,G__89541));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg89247 = (function (){var G__89542 = ctx;
var G__89543 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89542,G__89543) : sci.impl.interpreter.interpret.call(null,G__89542,G__89543));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg89234,arg89235,arg89236,arg89237,arg89238,arg89239,arg89240,arg89241,arg89242,arg89243,arg89244,arg89245,arg89246,arg89247) : f.call(null,arg89234,arg89235,arg89236,arg89237,arg89238,arg89239,arg89240,arg89241,arg89242,arg89243,arg89244,arg89245,arg89246,arg89247));

break;
case (15):
var arg89248 = (function (){var G__89544 = ctx;
var G__89545 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89544,G__89545) : sci.impl.interpreter.interpret.call(null,G__89544,G__89545));
})();
var args__$1 = cljs.core.rest(args);
var arg89249 = (function (){var G__89546 = ctx;
var G__89547 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89546,G__89547) : sci.impl.interpreter.interpret.call(null,G__89546,G__89547));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89250 = (function (){var G__89548 = ctx;
var G__89549 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89548,G__89549) : sci.impl.interpreter.interpret.call(null,G__89548,G__89549));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89251 = (function (){var G__89550 = ctx;
var G__89551 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89550,G__89551) : sci.impl.interpreter.interpret.call(null,G__89550,G__89551));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89252 = (function (){var G__89552 = ctx;
var G__89553 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89552,G__89553) : sci.impl.interpreter.interpret.call(null,G__89552,G__89553));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89253 = (function (){var G__89554 = ctx;
var G__89555 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89554,G__89555) : sci.impl.interpreter.interpret.call(null,G__89554,G__89555));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89254 = (function (){var G__89556 = ctx;
var G__89557 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89556,G__89557) : sci.impl.interpreter.interpret.call(null,G__89556,G__89557));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89255 = (function (){var G__89558 = ctx;
var G__89559 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89558,G__89559) : sci.impl.interpreter.interpret.call(null,G__89558,G__89559));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89256 = (function (){var G__89560 = ctx;
var G__89561 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89560,G__89561) : sci.impl.interpreter.interpret.call(null,G__89560,G__89561));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89257 = (function (){var G__89562 = ctx;
var G__89563 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89562,G__89563) : sci.impl.interpreter.interpret.call(null,G__89562,G__89563));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89258 = (function (){var G__89564 = ctx;
var G__89565 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89564,G__89565) : sci.impl.interpreter.interpret.call(null,G__89564,G__89565));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg89259 = (function (){var G__89566 = ctx;
var G__89567 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89566,G__89567) : sci.impl.interpreter.interpret.call(null,G__89566,G__89567));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg89260 = (function (){var G__89568 = ctx;
var G__89569 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89568,G__89569) : sci.impl.interpreter.interpret.call(null,G__89568,G__89569));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg89261 = (function (){var G__89570 = ctx;
var G__89571 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89570,G__89571) : sci.impl.interpreter.interpret.call(null,G__89570,G__89571));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg89262 = (function (){var G__89572 = ctx;
var G__89573 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89572,G__89573) : sci.impl.interpreter.interpret.call(null,G__89572,G__89573));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg89248,arg89249,arg89250,arg89251,arg89252,arg89253,arg89254,arg89255,arg89256,arg89257,arg89258,arg89259,arg89260,arg89261,arg89262) : f.call(null,arg89248,arg89249,arg89250,arg89251,arg89252,arg89253,arg89254,arg89255,arg89256,arg89257,arg89258,arg89259,arg89260,arg89261,arg89262));

break;
case (16):
var arg89263 = (function (){var G__89574 = ctx;
var G__89575 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89574,G__89575) : sci.impl.interpreter.interpret.call(null,G__89574,G__89575));
})();
var args__$1 = cljs.core.rest(args);
var arg89264 = (function (){var G__89576 = ctx;
var G__89577 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89576,G__89577) : sci.impl.interpreter.interpret.call(null,G__89576,G__89577));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89265 = (function (){var G__89578 = ctx;
var G__89579 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89578,G__89579) : sci.impl.interpreter.interpret.call(null,G__89578,G__89579));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89266 = (function (){var G__89580 = ctx;
var G__89581 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89580,G__89581) : sci.impl.interpreter.interpret.call(null,G__89580,G__89581));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89267 = (function (){var G__89582 = ctx;
var G__89583 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89582,G__89583) : sci.impl.interpreter.interpret.call(null,G__89582,G__89583));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89268 = (function (){var G__89584 = ctx;
var G__89585 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89584,G__89585) : sci.impl.interpreter.interpret.call(null,G__89584,G__89585));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89269 = (function (){var G__89586 = ctx;
var G__89587 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89586,G__89587) : sci.impl.interpreter.interpret.call(null,G__89586,G__89587));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89270 = (function (){var G__89588 = ctx;
var G__89589 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89588,G__89589) : sci.impl.interpreter.interpret.call(null,G__89588,G__89589));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89271 = (function (){var G__89590 = ctx;
var G__89591 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89590,G__89591) : sci.impl.interpreter.interpret.call(null,G__89590,G__89591));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89272 = (function (){var G__89592 = ctx;
var G__89593 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89592,G__89593) : sci.impl.interpreter.interpret.call(null,G__89592,G__89593));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89273 = (function (){var G__89594 = ctx;
var G__89595 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89594,G__89595) : sci.impl.interpreter.interpret.call(null,G__89594,G__89595));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg89274 = (function (){var G__89596 = ctx;
var G__89597 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89596,G__89597) : sci.impl.interpreter.interpret.call(null,G__89596,G__89597));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg89275 = (function (){var G__89598 = ctx;
var G__89599 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89598,G__89599) : sci.impl.interpreter.interpret.call(null,G__89598,G__89599));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg89276 = (function (){var G__89600 = ctx;
var G__89601 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89600,G__89601) : sci.impl.interpreter.interpret.call(null,G__89600,G__89601));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg89277 = (function (){var G__89602 = ctx;
var G__89603 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89602,G__89603) : sci.impl.interpreter.interpret.call(null,G__89602,G__89603));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg89278 = (function (){var G__89604 = ctx;
var G__89605 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89604,G__89605) : sci.impl.interpreter.interpret.call(null,G__89604,G__89605));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg89263,arg89264,arg89265,arg89266,arg89267,arg89268,arg89269,arg89270,arg89271,arg89272,arg89273,arg89274,arg89275,arg89276,arg89277,arg89278) : f.call(null,arg89263,arg89264,arg89265,arg89266,arg89267,arg89268,arg89269,arg89270,arg89271,arg89272,arg89273,arg89274,arg89275,arg89276,arg89277,arg89278));

break;
case (17):
var arg89279 = (function (){var G__89606 = ctx;
var G__89607 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89606,G__89607) : sci.impl.interpreter.interpret.call(null,G__89606,G__89607));
})();
var args__$1 = cljs.core.rest(args);
var arg89280 = (function (){var G__89608 = ctx;
var G__89609 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89608,G__89609) : sci.impl.interpreter.interpret.call(null,G__89608,G__89609));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89281 = (function (){var G__89610 = ctx;
var G__89611 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89610,G__89611) : sci.impl.interpreter.interpret.call(null,G__89610,G__89611));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89282 = (function (){var G__89612 = ctx;
var G__89613 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89612,G__89613) : sci.impl.interpreter.interpret.call(null,G__89612,G__89613));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89283 = (function (){var G__89614 = ctx;
var G__89615 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89614,G__89615) : sci.impl.interpreter.interpret.call(null,G__89614,G__89615));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89284 = (function (){var G__89616 = ctx;
var G__89617 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89616,G__89617) : sci.impl.interpreter.interpret.call(null,G__89616,G__89617));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89285 = (function (){var G__89618 = ctx;
var G__89619 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89618,G__89619) : sci.impl.interpreter.interpret.call(null,G__89618,G__89619));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89286 = (function (){var G__89620 = ctx;
var G__89621 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89620,G__89621) : sci.impl.interpreter.interpret.call(null,G__89620,G__89621));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89287 = (function (){var G__89622 = ctx;
var G__89623 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89622,G__89623) : sci.impl.interpreter.interpret.call(null,G__89622,G__89623));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89288 = (function (){var G__89624 = ctx;
var G__89625 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89624,G__89625) : sci.impl.interpreter.interpret.call(null,G__89624,G__89625));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89289 = (function (){var G__89626 = ctx;
var G__89627 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89626,G__89627) : sci.impl.interpreter.interpret.call(null,G__89626,G__89627));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg89290 = (function (){var G__89628 = ctx;
var G__89629 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89628,G__89629) : sci.impl.interpreter.interpret.call(null,G__89628,G__89629));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg89291 = (function (){var G__89630 = ctx;
var G__89631 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89630,G__89631) : sci.impl.interpreter.interpret.call(null,G__89630,G__89631));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg89292 = (function (){var G__89632 = ctx;
var G__89633 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89632,G__89633) : sci.impl.interpreter.interpret.call(null,G__89632,G__89633));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg89293 = (function (){var G__89634 = ctx;
var G__89635 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89634,G__89635) : sci.impl.interpreter.interpret.call(null,G__89634,G__89635));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg89294 = (function (){var G__89636 = ctx;
var G__89637 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89636,G__89637) : sci.impl.interpreter.interpret.call(null,G__89636,G__89637));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg89295 = (function (){var G__89638 = ctx;
var G__89639 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89638,G__89639) : sci.impl.interpreter.interpret.call(null,G__89638,G__89639));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg89279,arg89280,arg89281,arg89282,arg89283,arg89284,arg89285,arg89286,arg89287,arg89288,arg89289,arg89290,arg89291,arg89292,arg89293,arg89294,arg89295) : f.call(null,arg89279,arg89280,arg89281,arg89282,arg89283,arg89284,arg89285,arg89286,arg89287,arg89288,arg89289,arg89290,arg89291,arg89292,arg89293,arg89294,arg89295));

break;
case (18):
var arg89296 = (function (){var G__89640 = ctx;
var G__89641 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89640,G__89641) : sci.impl.interpreter.interpret.call(null,G__89640,G__89641));
})();
var args__$1 = cljs.core.rest(args);
var arg89297 = (function (){var G__89642 = ctx;
var G__89643 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89642,G__89643) : sci.impl.interpreter.interpret.call(null,G__89642,G__89643));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89298 = (function (){var G__89644 = ctx;
var G__89645 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89644,G__89645) : sci.impl.interpreter.interpret.call(null,G__89644,G__89645));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89299 = (function (){var G__89646 = ctx;
var G__89647 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89646,G__89647) : sci.impl.interpreter.interpret.call(null,G__89646,G__89647));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89300 = (function (){var G__89648 = ctx;
var G__89649 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89648,G__89649) : sci.impl.interpreter.interpret.call(null,G__89648,G__89649));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89301 = (function (){var G__89650 = ctx;
var G__89651 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89650,G__89651) : sci.impl.interpreter.interpret.call(null,G__89650,G__89651));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89302 = (function (){var G__89652 = ctx;
var G__89653 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89652,G__89653) : sci.impl.interpreter.interpret.call(null,G__89652,G__89653));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89303 = (function (){var G__89654 = ctx;
var G__89655 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89654,G__89655) : sci.impl.interpreter.interpret.call(null,G__89654,G__89655));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89304 = (function (){var G__89656 = ctx;
var G__89657 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89656,G__89657) : sci.impl.interpreter.interpret.call(null,G__89656,G__89657));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89305 = (function (){var G__89658 = ctx;
var G__89659 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89658,G__89659) : sci.impl.interpreter.interpret.call(null,G__89658,G__89659));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89306 = (function (){var G__89660 = ctx;
var G__89661 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89660,G__89661) : sci.impl.interpreter.interpret.call(null,G__89660,G__89661));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg89307 = (function (){var G__89662 = ctx;
var G__89663 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89662,G__89663) : sci.impl.interpreter.interpret.call(null,G__89662,G__89663));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg89308 = (function (){var G__89664 = ctx;
var G__89665 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89664,G__89665) : sci.impl.interpreter.interpret.call(null,G__89664,G__89665));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg89309 = (function (){var G__89666 = ctx;
var G__89667 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89666,G__89667) : sci.impl.interpreter.interpret.call(null,G__89666,G__89667));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg89310 = (function (){var G__89668 = ctx;
var G__89669 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89668,G__89669) : sci.impl.interpreter.interpret.call(null,G__89668,G__89669));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg89311 = (function (){var G__89670 = ctx;
var G__89671 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89670,G__89671) : sci.impl.interpreter.interpret.call(null,G__89670,G__89671));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg89312 = (function (){var G__89672 = ctx;
var G__89673 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89672,G__89673) : sci.impl.interpreter.interpret.call(null,G__89672,G__89673));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg89313 = (function (){var G__89674 = ctx;
var G__89675 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89674,G__89675) : sci.impl.interpreter.interpret.call(null,G__89674,G__89675));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg89296,arg89297,arg89298,arg89299,arg89300,arg89301,arg89302,arg89303,arg89304,arg89305,arg89306,arg89307,arg89308,arg89309,arg89310,arg89311,arg89312,arg89313) : f.call(null,arg89296,arg89297,arg89298,arg89299,arg89300,arg89301,arg89302,arg89303,arg89304,arg89305,arg89306,arg89307,arg89308,arg89309,arg89310,arg89311,arg89312,arg89313));

break;
case (19):
var arg89314 = (function (){var G__89676 = ctx;
var G__89677 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89676,G__89677) : sci.impl.interpreter.interpret.call(null,G__89676,G__89677));
})();
var args__$1 = cljs.core.rest(args);
var arg89315 = (function (){var G__89678 = ctx;
var G__89679 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89678,G__89679) : sci.impl.interpreter.interpret.call(null,G__89678,G__89679));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg89316 = (function (){var G__89680 = ctx;
var G__89681 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89680,G__89681) : sci.impl.interpreter.interpret.call(null,G__89680,G__89681));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg89317 = (function (){var G__89682 = ctx;
var G__89683 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89682,G__89683) : sci.impl.interpreter.interpret.call(null,G__89682,G__89683));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg89318 = (function (){var G__89684 = ctx;
var G__89685 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89684,G__89685) : sci.impl.interpreter.interpret.call(null,G__89684,G__89685));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg89319 = (function (){var G__89686 = ctx;
var G__89687 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89686,G__89687) : sci.impl.interpreter.interpret.call(null,G__89686,G__89687));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg89320 = (function (){var G__89688 = ctx;
var G__89689 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89688,G__89689) : sci.impl.interpreter.interpret.call(null,G__89688,G__89689));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg89321 = (function (){var G__89690 = ctx;
var G__89691 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89690,G__89691) : sci.impl.interpreter.interpret.call(null,G__89690,G__89691));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg89322 = (function (){var G__89692 = ctx;
var G__89693 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89692,G__89693) : sci.impl.interpreter.interpret.call(null,G__89692,G__89693));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg89323 = (function (){var G__89694 = ctx;
var G__89695 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89694,G__89695) : sci.impl.interpreter.interpret.call(null,G__89694,G__89695));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg89324 = (function (){var G__89696 = ctx;
var G__89697 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89696,G__89697) : sci.impl.interpreter.interpret.call(null,G__89696,G__89697));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg89325 = (function (){var G__89698 = ctx;
var G__89699 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89698,G__89699) : sci.impl.interpreter.interpret.call(null,G__89698,G__89699));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg89326 = (function (){var G__89700 = ctx;
var G__89701 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89700,G__89701) : sci.impl.interpreter.interpret.call(null,G__89700,G__89701));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg89327 = (function (){var G__89702 = ctx;
var G__89703 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89702,G__89703) : sci.impl.interpreter.interpret.call(null,G__89702,G__89703));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg89328 = (function (){var G__89704 = ctx;
var G__89705 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89704,G__89705) : sci.impl.interpreter.interpret.call(null,G__89704,G__89705));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg89329 = (function (){var G__89706 = ctx;
var G__89707 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89706,G__89707) : sci.impl.interpreter.interpret.call(null,G__89706,G__89707));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg89330 = (function (){var G__89708 = ctx;
var G__89709 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89708,G__89709) : sci.impl.interpreter.interpret.call(null,G__89708,G__89709));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg89331 = (function (){var G__89710 = ctx;
var G__89711 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89710,G__89711) : sci.impl.interpreter.interpret.call(null,G__89710,G__89711));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg89332 = (function (){var G__89712 = ctx;
var G__89713 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89712,G__89713) : sci.impl.interpreter.interpret.call(null,G__89712,G__89713));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg89314,arg89315,arg89316,arg89317,arg89318,arg89319,arg89320,arg89321,arg89322,arg89323,arg89324,arg89325,arg89326,arg89327,arg89328,arg89329,arg89330,arg89331,arg89332) : f.call(null,arg89314,arg89315,arg89316,arg89317,arg89318,arg89319,arg89320,arg89321,arg89322,arg89323,arg89324,arg89325,arg89326,arg89327,arg89328,arg89329,arg89330,arg89331,arg89332));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__89714 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__89714)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__89714)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__89714)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__89714)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__89714)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__89714)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__89715 = ctx;
var G__89716 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89715,G__89716) : sci.impl.interpreter.interpret.call(null,G__89715,G__89716));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__89714)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__89714)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__89714)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__89714)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__89714)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__89714)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__89714)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__89714)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__89714)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__89717 = ctx;
var G__89718 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89717,G__89718) : sci.impl.interpreter.interpret.call(null,G__89717,G__89718));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__89714)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__89714)){
return (new cljs.core.LazySeq(null,(function (){var G__89719 = ctx;
var G__89720 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__89719,G__89720) : sci.impl.interpreter.interpret.call(null,G__89719,G__89720));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__89714)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__89714)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__89714)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__89714)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89714)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((function (){var G__89722 = op;
var G__89723 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__89722,G__89723) : sci.impl.utils.kw_identical_QMARK_.call(null,G__89722,G__89723));
})())){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e89721){if((e89721 instanceof Error)){
var e = e89721;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e89721;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__89730 = op;
var G__89730__$1 = (((G__89730 instanceof cljs.core.Keyword))?G__89730.fqn:null);
switch (G__89730__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__89727_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__89727_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__89727_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__89728_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__89728_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__89728_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__89729_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__89729_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__89729_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__89818 = cljs.core.rest(exprs);
var G__89819 = (function (){var G__89733 = ctx;
var G__89734 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__89733,G__89734) : sci.impl.interpreter.eval_form.call(null,G__89733,G__89734));
})();
exprs = G__89818;
ret = G__89819;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((function (){var G__89737 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__89738 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__89737,G__89738) : sci.impl.utils.kw_identical_QMARK_.call(null,G__89737,G__89738));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__89820 = ret__$1;
ret = G__89820;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__89740 = arguments.length;
switch (G__89740) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
