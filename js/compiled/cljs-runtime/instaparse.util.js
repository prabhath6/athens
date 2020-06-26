goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63535 = arguments.length;
var i__4790__auto___63536 = (0);
while(true){
if((i__4790__auto___63536 < len__4789__auto___63535)){
args__4795__auto__.push((arguments[i__4790__auto___63536]));

var G__63537 = (i__4790__auto___63536 + (1));
i__4790__auto___63536 = G__63537;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq63499){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63499));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63538 = arguments.length;
var i__4790__auto___63539 = (0);
while(true){
if((i__4790__auto___63539 < len__4789__auto___63538)){
args__4795__auto__.push((arguments[i__4790__auto___63539]));

var G__63540 = (i__4790__auto___63539 + (1));
i__4790__auto___63539 = G__63540;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq63500){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63500));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__63517 = "";
var G__63517__$1 = (cljs.core.truth_(re.ignoreCase)?[G__63517,"i"].join(''):G__63517);
var G__63517__$2 = (cljs.core.truth_(re.multiline)?[G__63517__$1,"m"].join(''):G__63517__$1);
if(cljs.core.truth_(re.unicode)){
return [G__63517__$2,"u"].join('');
} else {
return G__63517__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
