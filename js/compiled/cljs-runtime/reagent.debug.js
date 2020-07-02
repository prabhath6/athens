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
var G__50576__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__50576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50577__i = 0, G__50577__a = new Array(arguments.length -  0);
while (G__50577__i < G__50577__a.length) {G__50577__a[G__50577__i] = arguments[G__50577__i + 0]; ++G__50577__i;}
  args = new cljs.core.IndexedSeq(G__50577__a,0,null);
} 
return G__50576__delegate.call(this,args);};
G__50576.cljs$lang$maxFixedArity = 0;
G__50576.cljs$lang$applyTo = (function (arglist__50578){
var args = cljs.core.seq(arglist__50578);
return G__50576__delegate(args);
});
G__50576.cljs$core$IFn$_invoke$arity$variadic = G__50576__delegate;
return G__50576;
})()
);

(o.error = (function() { 
var G__50579__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__50579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50584__i = 0, G__50584__a = new Array(arguments.length -  0);
while (G__50584__i < G__50584__a.length) {G__50584__a[G__50584__i] = arguments[G__50584__i + 0]; ++G__50584__i;}
  args = new cljs.core.IndexedSeq(G__50584__a,0,null);
} 
return G__50579__delegate.call(this,args);};
G__50579.cljs$lang$maxFixedArity = 0;
G__50579.cljs$lang$applyTo = (function (arglist__50585){
var args = cljs.core.seq(arglist__50585);
return G__50579__delegate(args);
});
G__50579.cljs$core$IFn$_invoke$arity$variadic = G__50579__delegate;
return G__50579;
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