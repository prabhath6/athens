goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__54272__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__54272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54273__i = 0, G__54273__a = new Array(arguments.length -  0);
while (G__54273__i < G__54273__a.length) {G__54273__a[G__54273__i] = arguments[G__54273__i + 0]; ++G__54273__i;}
  args = new cljs.core.IndexedSeq(G__54273__a,0,null);
} 
return G__54272__delegate.call(this,args);};
G__54272.cljs$lang$maxFixedArity = 0;
G__54272.cljs$lang$applyTo = (function (arglist__54274){
var args = cljs.core.seq(arglist__54274);
return G__54272__delegate(args);
});
G__54272.cljs$core$IFn$_invoke$arity$variadic = G__54272__delegate;
return G__54272;
})()
);

(o.error = (function() { 
var G__54275__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__54275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54276__i = 0, G__54276__a = new Array(arguments.length -  0);
while (G__54276__i < G__54276__a.length) {G__54276__a[G__54276__i] = arguments[G__54276__i + 0]; ++G__54276__i;}
  args = new cljs.core.IndexedSeq(G__54276__a,0,null);
} 
return G__54275__delegate.call(this,args);};
G__54275.cljs$lang$maxFixedArity = 0;
G__54275.cljs$lang$applyTo = (function (arglist__54277){
var args = cljs.core.seq(arglist__54277);
return G__54275__delegate(args);
});
G__54275.cljs$core$IFn$_invoke$arity$variadic = G__54275__delegate;
return G__54275;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
