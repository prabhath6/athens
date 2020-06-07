goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__60285_60293 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60286_60294 = (function (datoms){
var G__60288 = cljs.core.deref(re_posh.db.store);
var G__60289 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__60288,G__60289) : posh.reagent.transact_BANG_.call(null,G__60288,G__60289));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60285_60293,G__60286_60294) : re_frame.core.reg_fx.call(null,G__60285_60293,G__60286_60294));

//# sourceMappingURL=re_posh.effects.js.map
