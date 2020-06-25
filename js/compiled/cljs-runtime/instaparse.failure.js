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
var G__63419 = (line + (1));
var G__63420 = (1);
var G__63421 = (counter + (1));
line = G__63419;
col = G__63420;
counter = G__63421;
continue;
} else {
var G__63422 = line;
var G__63423 = (col + (1));
var G__63424 = (counter + (1));
line = G__63422;
col = G__63423;
counter = G__63424;
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
var G__63425 = cljs.core.next(chars);
var G__63426 = (n__$1 - (1));
chars = G__63425;
n__$1 = G__63426;
continue;
} else {
var G__63427 = cljs.core.next(chars);
var G__63428 = n__$1;
chars = G__63427;
n__$1 = G__63428;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63405){
var map__63406 = p__63405;
var map__63406__$1 = (((((!((map__63406 == null))))?(((((map__63406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63406):map__63406);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63406__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63406__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63406__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63406__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63408_63435 = cljs.core.seq(full_reasons);
var chunk__63409_63436 = null;
var count__63410_63437 = (0);
var i__63411_63438 = (0);
while(true){
if((i__63411_63438 < count__63410_63437)){
var r_63439 = chunk__63409_63436.cljs$core$IIndexed$_nth$arity$2(null,i__63411_63438);
instaparse.failure.print_reason(r_63439);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63440 = seq__63408_63435;
var G__63441 = chunk__63409_63436;
var G__63442 = count__63410_63437;
var G__63443 = (i__63411_63438 + (1));
seq__63408_63435 = G__63440;
chunk__63409_63436 = G__63441;
count__63410_63437 = G__63442;
i__63411_63438 = G__63443;
continue;
} else {
var temp__5735__auto___63444 = cljs.core.seq(seq__63408_63435);
if(temp__5735__auto___63444){
var seq__63408_63445__$1 = temp__5735__auto___63444;
if(cljs.core.chunked_seq_QMARK_(seq__63408_63445__$1)){
var c__4609__auto___63446 = cljs.core.chunk_first(seq__63408_63445__$1);
var G__63447 = cljs.core.chunk_rest(seq__63408_63445__$1);
var G__63448 = c__4609__auto___63446;
var G__63449 = cljs.core.count(c__4609__auto___63446);
var G__63450 = (0);
seq__63408_63435 = G__63447;
chunk__63409_63436 = G__63448;
count__63410_63437 = G__63449;
i__63411_63438 = G__63450;
continue;
} else {
var r_63451 = cljs.core.first(seq__63408_63445__$1);
instaparse.failure.print_reason(r_63451);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63452 = cljs.core.next(seq__63408_63445__$1);
var G__63453 = null;
var G__63454 = (0);
var G__63455 = (0);
seq__63408_63435 = G__63452;
chunk__63409_63436 = G__63453;
count__63410_63437 = G__63454;
i__63411_63438 = G__63455;
continue;
}
} else {
}
}
break;
}

var seq__63414 = cljs.core.seq(partial_reasons);
var chunk__63415 = null;
var count__63416 = (0);
var i__63417 = (0);
while(true){
if((i__63417 < count__63416)){
var r = chunk__63415.cljs$core$IIndexed$_nth$arity$2(null,i__63417);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63456 = seq__63414;
var G__63457 = chunk__63415;
var G__63458 = count__63416;
var G__63459 = (i__63417 + (1));
seq__63414 = G__63456;
chunk__63415 = G__63457;
count__63416 = G__63458;
i__63417 = G__63459;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63414);
if(temp__5735__auto__){
var seq__63414__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63414__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63414__$1);
var G__63460 = cljs.core.chunk_rest(seq__63414__$1);
var G__63461 = c__4609__auto__;
var G__63462 = cljs.core.count(c__4609__auto__);
var G__63463 = (0);
seq__63414 = G__63460;
chunk__63415 = G__63461;
count__63416 = G__63462;
i__63417 = G__63463;
continue;
} else {
var r = cljs.core.first(seq__63414__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63464 = cljs.core.next(seq__63414__$1);
var G__63465 = null;
var G__63466 = (0);
var G__63467 = (0);
seq__63414 = G__63464;
chunk__63415 = G__63465;
count__63416 = G__63466;
i__63417 = G__63467;
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
