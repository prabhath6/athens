goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__63538 = (line + (1));
var G__63539 = (1);
var G__63540 = (counter + (1));
line = G__63538;
col = G__63539;
counter = G__63540;
continue;
} else {
var G__63542 = line;
var G__63543 = (col + (1));
var G__63544 = (counter + (1));
line = G__63542;
col = G__63543;
counter = G__63544;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__63547 = cljs.core.next(chars);
var G__63548 = (n__$1 - (1));
chars = G__63547;
n__$1 = G__63548;
continue;
} else {
var G__63550 = cljs.core.next(chars);
var G__63551 = n__$1;
chars = G__63550;
n__$1 = G__63551;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63523){
var map__63524 = p__63523;
var map__63524__$1 = (((((!((map__63524 == null))))?(((((map__63524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63524):map__63524);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63524__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63524__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63524__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63524__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__63527_63552 = cljs.core.seq(full_reasons);
var chunk__63528_63553 = null;
var count__63529_63554 = (0);
var i__63530_63555 = (0);
while(true){
if((i__63530_63555 < count__63529_63554)){
var r_63556 = chunk__63528_63553.cljs$core$IIndexed$_nth$arity$2(null,i__63530_63555);
instaparse.failure.print_reason(r_63556);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63557 = seq__63527_63552;
var G__63558 = chunk__63528_63553;
var G__63559 = count__63529_63554;
var G__63560 = (i__63530_63555 + (1));
seq__63527_63552 = G__63557;
chunk__63528_63553 = G__63558;
count__63529_63554 = G__63559;
i__63530_63555 = G__63560;
continue;
} else {
var temp__5735__auto___63561 = cljs.core.seq(seq__63527_63552);
if(temp__5735__auto___63561){
var seq__63527_63562__$1 = temp__5735__auto___63561;
if(cljs.core.chunked_seq_QMARK_(seq__63527_63562__$1)){
var c__4609__auto___63563 = cljs.core.chunk_first(seq__63527_63562__$1);
var G__63564 = cljs.core.chunk_rest(seq__63527_63562__$1);
var G__63565 = c__4609__auto___63563;
var G__63566 = cljs.core.count(c__4609__auto___63563);
var G__63567 = (0);
seq__63527_63552 = G__63564;
chunk__63528_63553 = G__63565;
count__63529_63554 = G__63566;
i__63530_63555 = G__63567;
continue;
} else {
var r_63568 = cljs.core.first(seq__63527_63562__$1);
instaparse.failure.print_reason(r_63568);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63569 = cljs.core.next(seq__63527_63562__$1);
var G__63570 = null;
var G__63571 = (0);
var G__63572 = (0);
seq__63527_63552 = G__63569;
chunk__63528_63553 = G__63570;
count__63529_63554 = G__63571;
i__63530_63555 = G__63572;
continue;
}
} else {
}
}
break;
}

var seq__63532 = cljs.core.seq(partial_reasons);
var chunk__63533 = null;
var count__63534 = (0);
var i__63535 = (0);
while(true){
if((i__63535 < count__63534)){
var r = chunk__63533.cljs$core$IIndexed$_nth$arity$2(null,i__63535);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63573 = seq__63532;
var G__63574 = chunk__63533;
var G__63575 = count__63534;
var G__63576 = (i__63535 + (1));
seq__63532 = G__63573;
chunk__63533 = G__63574;
count__63534 = G__63575;
i__63535 = G__63576;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63532);
if(temp__5735__auto__){
var seq__63532__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63532__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63532__$1);
var G__63577 = cljs.core.chunk_rest(seq__63532__$1);
var G__63578 = c__4609__auto__;
var G__63579 = cljs.core.count(c__4609__auto__);
var G__63580 = (0);
seq__63532 = G__63577;
chunk__63533 = G__63578;
count__63534 = G__63579;
i__63535 = G__63580;
continue;
} else {
var r = cljs.core.first(seq__63532__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63581 = cljs.core.next(seq__63532__$1);
var G__63582 = null;
var G__63583 = (0);
var G__63584 = (0);
seq__63532 = G__63581;
chunk__63533 = G__63582;
count__63534 = G__63583;
i__63535 = G__63584;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
