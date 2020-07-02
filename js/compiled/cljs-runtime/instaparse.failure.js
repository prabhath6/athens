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
var G__85144 = (line + (1));
var G__85145 = (1);
var G__85146 = (counter + (1));
line = G__85144;
col = G__85145;
counter = G__85146;
continue;
} else {
var G__85147 = line;
var G__85148 = (col + (1));
var G__85149 = (counter + (1));
line = G__85147;
col = G__85148;
counter = G__85149;
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
var G__85151 = cljs.core.next(chars);
var G__85152 = (n__$1 - (1));
chars = G__85151;
n__$1 = G__85152;
continue;
} else {
var G__85153 = cljs.core.next(chars);
var G__85154 = n__$1;
chars = G__85153;
n__$1 = G__85154;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__85106){
var map__85108 = p__85106;
var map__85108__$1 = (((((!((map__85108 == null))))?(((((map__85108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85108):map__85108);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85108__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85108__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85108__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85108__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__85117_85167 = cljs.core.seq(full_reasons);
var chunk__85118_85168 = null;
var count__85119_85169 = (0);
var i__85120_85170 = (0);
while(true){
if((i__85120_85170 < count__85119_85169)){
var r_85171 = chunk__85118_85168.cljs$core$IIndexed$_nth$arity$2(null,i__85120_85170);
instaparse.failure.print_reason(r_85171);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__85172 = seq__85117_85167;
var G__85173 = chunk__85118_85168;
var G__85174 = count__85119_85169;
var G__85175 = (i__85120_85170 + (1));
seq__85117_85167 = G__85172;
chunk__85118_85168 = G__85173;
count__85119_85169 = G__85174;
i__85120_85170 = G__85175;
continue;
} else {
var temp__5735__auto___85177 = cljs.core.seq(seq__85117_85167);
if(temp__5735__auto___85177){
var seq__85117_85179__$1 = temp__5735__auto___85177;
if(cljs.core.chunked_seq_QMARK_(seq__85117_85179__$1)){
var c__4609__auto___85180 = cljs.core.chunk_first(seq__85117_85179__$1);
var G__85182 = cljs.core.chunk_rest(seq__85117_85179__$1);
var G__85183 = c__4609__auto___85180;
var G__85184 = cljs.core.count(c__4609__auto___85180);
var G__85185 = (0);
seq__85117_85167 = G__85182;
chunk__85118_85168 = G__85183;
count__85119_85169 = G__85184;
i__85120_85170 = G__85185;
continue;
} else {
var r_85187 = cljs.core.first(seq__85117_85179__$1);
instaparse.failure.print_reason(r_85187);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__85188 = cljs.core.next(seq__85117_85179__$1);
var G__85189 = null;
var G__85190 = (0);
var G__85191 = (0);
seq__85117_85167 = G__85188;
chunk__85118_85168 = G__85189;
count__85119_85169 = G__85190;
i__85120_85170 = G__85191;
continue;
}
} else {
}
}
break;
}

var seq__85133 = cljs.core.seq(partial_reasons);
var chunk__85134 = null;
var count__85135 = (0);
var i__85136 = (0);
while(true){
if((i__85136 < count__85135)){
var r = chunk__85134.cljs$core$IIndexed$_nth$arity$2(null,i__85136);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__85194 = seq__85133;
var G__85195 = chunk__85134;
var G__85196 = count__85135;
var G__85197 = (i__85136 + (1));
seq__85133 = G__85194;
chunk__85134 = G__85195;
count__85135 = G__85196;
i__85136 = G__85197;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__85133);
if(temp__5735__auto__){
var seq__85133__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__85133__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__85133__$1);
var G__85199 = cljs.core.chunk_rest(seq__85133__$1);
var G__85200 = c__4609__auto__;
var G__85201 = cljs.core.count(c__4609__auto__);
var G__85202 = (0);
seq__85133 = G__85199;
chunk__85134 = G__85200;
count__85135 = G__85201;
i__85136 = G__85202;
continue;
} else {
var r = cljs.core.first(seq__85133__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__85204 = cljs.core.next(seq__85133__$1);
var G__85205 = null;
var G__85206 = (0);
var G__85207 = (0);
seq__85133 = G__85204;
chunk__85134 = G__85205;
count__85135 = G__85206;
i__85136 = G__85207;
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
