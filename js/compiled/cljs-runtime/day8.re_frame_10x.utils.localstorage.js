goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__33601 = arguments.length;
switch (G__33601) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__33602 = cljs.core.seq(Object.keys(localStorage));
var chunk__33603 = null;
var count__33604 = (0);
var i__33605 = (0);
while(true){
if((i__33605 < count__33604)){
var k = chunk__33603.cljs$core$IIndexed$_nth$arity$2(null,i__33605);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33618 = seq__33602;
var G__33619 = chunk__33603;
var G__33620 = count__33604;
var G__33621 = (i__33605 + (1));
seq__33602 = G__33618;
chunk__33603 = G__33619;
count__33604 = G__33620;
i__33605 = G__33621;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33602);
if(temp__5735__auto__){
var seq__33602__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33602__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33602__$1);
var G__33622 = cljs.core.chunk_rest(seq__33602__$1);
var G__33623 = c__4609__auto__;
var G__33624 = cljs.core.count(c__4609__auto__);
var G__33625 = (0);
seq__33602 = G__33622;
chunk__33603 = G__33623;
count__33604 = G__33624;
i__33605 = G__33625;
continue;
} else {
var k = cljs.core.first(seq__33602__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33626 = cljs.core.next(seq__33602__$1);
var G__33627 = null;
var G__33628 = (0);
var G__33629 = (0);
seq__33602 = G__33626;
chunk__33603 = G__33627;
count__33604 = G__33628;
i__33605 = G__33629;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
