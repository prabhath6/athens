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
var G__53088 = arguments.length;
switch (G__53088) {
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
var seq__53103 = cljs.core.seq(Object.keys(localStorage));
var chunk__53104 = null;
var count__53105 = (0);
var i__53106 = (0);
while(true){
if((i__53106 < count__53105)){
var k = chunk__53104.cljs$core$IIndexed$_nth$arity$2(null,i__53106);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53125 = seq__53103;
var G__53126 = chunk__53104;
var G__53127 = count__53105;
var G__53128 = (i__53106 + (1));
seq__53103 = G__53125;
chunk__53104 = G__53126;
count__53105 = G__53127;
i__53106 = G__53128;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53103);
if(temp__5735__auto__){
var seq__53103__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53103__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53103__$1);
var G__53135 = cljs.core.chunk_rest(seq__53103__$1);
var G__53136 = c__4609__auto__;
var G__53137 = cljs.core.count(c__4609__auto__);
var G__53138 = (0);
seq__53103 = G__53135;
chunk__53104 = G__53136;
count__53105 = G__53137;
i__53106 = G__53138;
continue;
} else {
var k = cljs.core.first(seq__53103__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53147 = cljs.core.next(seq__53103__$1);
var G__53148 = null;
var G__53149 = (0);
var G__53150 = (0);
seq__53103 = G__53147;
chunk__53104 = G__53148;
count__53105 = G__53149;
i__53106 = G__53150;
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
