goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___85130 = arguments.length;
var i__4790__auto___85132 = (0);
while(true){
if((i__4790__auto___85132 < len__4789__auto___85130)){
args__4795__auto__.push((arguments[i__4790__auto___85132]));

var G__85138 = (i__4790__auto___85132 + (1));
i__4790__auto___85132 = G__85138;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq85048){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq85048));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___85140 = arguments.length;
var i__4790__auto___85141 = (0);
while(true){
if((i__4790__auto___85141 < len__4789__auto___85140)){
args__4795__auto__.push((arguments[i__4790__auto___85141]));

var G__85143 = (i__4790__auto___85141 + (1));
i__4790__auto___85141 = G__85143;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq85089){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq85089));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__85098 = "";
var G__85098__$1 = (cljs.core.truth_(re.ignoreCase)?[G__85098,"i"].join(''):G__85098);
var G__85098__$2 = (cljs.core.truth_(re.multiline)?[G__85098__$1,"m"].join(''):G__85098__$1);
if(cljs.core.truth_(re.unicode)){
return [G__85098__$2,"u"].join('');
} else {
return G__85098__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
