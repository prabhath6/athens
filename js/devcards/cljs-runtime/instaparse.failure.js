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
var G__55816 = (line + (1));
var G__55817 = (1);
var G__55818 = (counter + (1));
line = G__55816;
col = G__55817;
counter = G__55818;
continue;
} else {
var G__55819 = line;
var G__55820 = (col + (1));
var G__55821 = (counter + (1));
line = G__55819;
col = G__55820;
counter = G__55821;
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
var G__55822 = cljs.core.next(chars);
var G__55823 = (n__$1 - (1));
chars = G__55822;
n__$1 = G__55823;
continue;
} else {
var G__55824 = cljs.core.next(chars);
var G__55825 = n__$1;
chars = G__55824;
n__$1 = G__55825;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55799){
var map__55800 = p__55799;
var map__55800__$1 = (((((!((map__55800 == null))))?(((((map__55800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55800):map__55800);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55800__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55800__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55800__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55800__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55802_55826 = cljs.core.seq(full_reasons);
var chunk__55803_55827 = null;
var count__55804_55828 = (0);
var i__55805_55829 = (0);
while(true){
if((i__55805_55829 < count__55804_55828)){
var r_55830 = chunk__55803_55827.cljs$core$IIndexed$_nth$arity$2(null,i__55805_55829);
instaparse.failure.print_reason(r_55830);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55831 = seq__55802_55826;
var G__55832 = chunk__55803_55827;
var G__55833 = count__55804_55828;
var G__55834 = (i__55805_55829 + (1));
seq__55802_55826 = G__55831;
chunk__55803_55827 = G__55832;
count__55804_55828 = G__55833;
i__55805_55829 = G__55834;
continue;
} else {
var temp__5735__auto___55835 = cljs.core.seq(seq__55802_55826);
if(temp__5735__auto___55835){
var seq__55802_55836__$1 = temp__5735__auto___55835;
if(cljs.core.chunked_seq_QMARK_(seq__55802_55836__$1)){
var c__4609__auto___55837 = cljs.core.chunk_first(seq__55802_55836__$1);
var G__55838 = cljs.core.chunk_rest(seq__55802_55836__$1);
var G__55839 = c__4609__auto___55837;
var G__55840 = cljs.core.count(c__4609__auto___55837);
var G__55841 = (0);
seq__55802_55826 = G__55838;
chunk__55803_55827 = G__55839;
count__55804_55828 = G__55840;
i__55805_55829 = G__55841;
continue;
} else {
var r_55842 = cljs.core.first(seq__55802_55836__$1);
instaparse.failure.print_reason(r_55842);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55843 = cljs.core.next(seq__55802_55836__$1);
var G__55844 = null;
var G__55845 = (0);
var G__55846 = (0);
seq__55802_55826 = G__55843;
chunk__55803_55827 = G__55844;
count__55804_55828 = G__55845;
i__55805_55829 = G__55846;
continue;
}
} else {
}
}
break;
}

var seq__55809 = cljs.core.seq(partial_reasons);
var chunk__55810 = null;
var count__55811 = (0);
var i__55812 = (0);
while(true){
if((i__55812 < count__55811)){
var r = chunk__55810.cljs$core$IIndexed$_nth$arity$2(null,i__55812);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55847 = seq__55809;
var G__55848 = chunk__55810;
var G__55849 = count__55811;
var G__55850 = (i__55812 + (1));
seq__55809 = G__55847;
chunk__55810 = G__55848;
count__55811 = G__55849;
i__55812 = G__55850;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55809);
if(temp__5735__auto__){
var seq__55809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55809__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55809__$1);
var G__55851 = cljs.core.chunk_rest(seq__55809__$1);
var G__55852 = c__4609__auto__;
var G__55853 = cljs.core.count(c__4609__auto__);
var G__55854 = (0);
seq__55809 = G__55851;
chunk__55810 = G__55852;
count__55811 = G__55853;
i__55812 = G__55854;
continue;
} else {
var r = cljs.core.first(seq__55809__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55855 = cljs.core.next(seq__55809__$1);
var G__55856 = null;
var G__55857 = (0);
var G__55858 = (0);
seq__55809 = G__55855;
chunk__55810 = G__55856;
count__55811 = G__55857;
i__55812 = G__55858;
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
