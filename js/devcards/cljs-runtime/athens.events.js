goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('datascript.core');
goog.require('day8.re_frame.async_flow_fx');
goog.require('day8.re_frame.tracing');
goog.require('posh.reagent');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null));

var opts__49248__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__49249__auto__;
}catch (e51266){var e = e51266;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"athena","athena",-1523991628),cljs.core.not(new cljs.core.Keyword(null,"athena","athena",-1523991628).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,error){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__49248__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = cljs.core.assoc_in((function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto__;
})(),(function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto__;
})(),(function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__49249__auto__;
}catch (e51267){var e = e51267;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__51268){
var vec__51269 = p__51268;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51269,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51269,(1),null);
var _PLUS_debux_dbg_opts_PLUS__51373 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))));

var opts__49248__auto___51374 = _PLUS_debux_dbg_opts_PLUS__51373;
var result__49249__auto___51375 = datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS__51373;
var result__49249__auto___51375 = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto___51375,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto___51375;
})(),(function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS__51373;
var result__49249__auto___51375 = (function (){var G__51273 = (function (){var opts__49248__auto____$2 = _PLUS_debux_dbg_opts_PLUS__51373;
var result__49249__auto___51375 = athens.db.schema;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto___51375,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__49249__auto___51375;
})();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__51273) : datascript.core.empty_db.call(null,G__51273));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto___51375,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto___51375;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto___51375,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e51272){var e_51376 = e51272;
throw e_51376;
}
var _PLUS_debux_dbg_opts_PLUS__51377 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"transact!","transact!",817805717,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null))));

var opts__49248__auto___51378 = _PLUS_debux_dbg_opts_PLUS__51377;
var result__49249__auto___51379 = (function (){var G__51275 = (function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS__51377;
var result__49249__auto___51379 = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto___51379,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto___51379;
})();
var G__51276 = (function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS__51377;
var result__49249__auto___51379 = athens.db.str_to_db_tx((function (){var opts__49248__auto____$2 = _PLUS_debux_dbg_opts_PLUS__51377;
var result__49249__auto___51379 = json_str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto___51379,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__49249__auto___51379;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto___51379,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto___51379;
})();
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__51275,G__51276) : posh.reagent.transact_BANG_.call(null,G__51275,G__51276));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto___51379,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"transact!","transact!",817805717,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e51274){var e_51380 = e51274;
throw e_51380;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"loading","loading",-737050189),false));

var opts__49248__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto__;
})(),new cljs.core.Keyword(null,"loading","loading",-737050189),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__49249__auto__;
}catch (e51277){var e = e51277;
throw e;
}}):(function (db,p__51278){
var vec__51279 = p__51278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51279,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51279,(1),null);
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));

var G__51282_51381 = athens.db.dsdb;
var G__51283_51382 = athens.db.str_to_db_tx(json_str);
(posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__51282_51381,G__51283_51382) : posh.reagent.transact_BANG_.call(null,G__51282_51381,G__51283_51382));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__49248__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = cljs.core.assoc_in((function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto__;
})(),(function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto__;
})(),(function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__49249__auto__;
}catch (e51284){var e = e51284;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__49248__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = cljs.core.assoc_in((function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto__;
})(),(function (){var opts__49248__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__49249__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__49249__auto__;
}catch (e51285){var e = e51285;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
})));
var G__51286_51383 = new cljs.core.Keyword(null,"http","http",382524695);
var G__51287_51384 = (function (p__51288){
var map__51289 = p__51288;
var map__51289__$1 = (((((!((map__51289 == null))))?(((((map__51289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51289):map__51289);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_51333){
var state_val_51334 = (state_51333[(1)]);
if((state_val_51334 === (7))){
var inst_51300 = (state_51333[(7)]);
var inst_51300__$1 = (state_51333[(2)]);
var inst_51302 = (inst_51300__$1 == null);
var inst_51303 = cljs.core.not(inst_51302);
var state_51333__$1 = (function (){var statearr_51335 = state_51333;
(statearr_51335[(7)] = inst_51300__$1);

return statearr_51335;
})();
if(inst_51303){
var statearr_51336_51385 = state_51333__$1;
(statearr_51336_51385[(1)] = (8));

} else {
var statearr_51337_51386 = state_51333__$1;
(statearr_51337_51386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (1))){
var state_51333__$1 = state_51333;
var G__51338_51387 = method;
var G__51338_51388__$1 = (((G__51338_51387 instanceof cljs.core.Keyword))?G__51338_51387.fqn:null);
switch (G__51338_51388__$1) {
case "post":
var statearr_51339_51390 = state_51333__$1;
(statearr_51339_51390[(1)] = (3));


break;
case "get":
var statearr_51340_51391 = state_51333__$1;
(statearr_51340_51391[(1)] = (4));


break;
case "put":
var statearr_51341_51392 = state_51333__$1;
(statearr_51341_51392[(1)] = (5));


break;
case "delete":
var statearr_51342_51393 = state_51333__$1;
(statearr_51342_51393[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51338_51388__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (4))){
var state_51333__$1 = state_51333;
var statearr_51343_51394 = state_51333__$1;
(statearr_51343_51394[(2)] = cljs_http.client.get);

(statearr_51343_51394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (15))){
var inst_51300 = (state_51333[(7)]);
var state_51333__$1 = state_51333;
var statearr_51344_51395 = state_51333__$1;
(statearr_51344_51395[(2)] = inst_51300);

(statearr_51344_51395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (13))){
var inst_51313 = (state_51333[(2)]);
var state_51333__$1 = state_51333;
var statearr_51345_51396 = state_51333__$1;
(statearr_51345_51396[(2)] = inst_51313);

(statearr_51345_51396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (6))){
var state_51333__$1 = state_51333;
var statearr_51346_51397 = state_51333__$1;
(statearr_51346_51397[(2)] = cljs_http.client.delete$);

(statearr_51346_51397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (17))){
var inst_51323 = (state_51333[(8)]);
var inst_51325 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_51323);
var inst_51326 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_51325) : re_frame.core.dispatch.call(null,inst_51325));
var state_51333__$1 = state_51333;
var statearr_51347_51398 = state_51333__$1;
(statearr_51347_51398[(2)] = inst_51326);

(statearr_51347_51398[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (3))){
var state_51333__$1 = state_51333;
var statearr_51348_51399 = state_51333__$1;
(statearr_51348_51399[(2)] = cljs_http.client.post);

(statearr_51348_51399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (12))){
var state_51333__$1 = state_51333;
var statearr_51349_51400 = state_51333__$1;
(statearr_51349_51400[(2)] = false);

(statearr_51349_51400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (2))){
var inst_51297 = (state_51333[(2)]);
var inst_51298 = (inst_51297.cljs$core$IFn$_invoke$arity$2 ? inst_51297.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_51297.call(null,url,opts));
var state_51333__$1 = state_51333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51333__$1,(7),inst_51298);
} else {
if((state_val_51334 === (19))){
var inst_51331 = (state_51333[(2)]);
var state_51333__$1 = state_51333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51333__$1,inst_51331);
} else {
if((state_val_51334 === (11))){
var state_51333__$1 = state_51333;
var statearr_51350_51401 = state_51333__$1;
(statearr_51350_51401[(2)] = true);

(statearr_51350_51401[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (9))){
var state_51333__$1 = state_51333;
var statearr_51351_51402 = state_51333__$1;
(statearr_51351_51402[(2)] = false);

(statearr_51351_51402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (5))){
var state_51333__$1 = state_51333;
var statearr_51352_51403 = state_51333__$1;
(statearr_51352_51403[(2)] = cljs_http.client.put);

(statearr_51352_51403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (14))){
var inst_51300 = (state_51333[(7)]);
var inst_51318 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51300);
var state_51333__$1 = state_51333;
var statearr_51353_51404 = state_51333__$1;
(statearr_51353_51404[(2)] = inst_51318);

(statearr_51353_51404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (16))){
var inst_51321 = (state_51333[(9)]);
var inst_51321__$1 = (state_51333[(2)]);
var inst_51322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51321__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_51323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51321__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_51333__$1 = (function (){var statearr_51354 = state_51333;
(statearr_51354[(8)] = inst_51323);

(statearr_51354[(9)] = inst_51321__$1);

return statearr_51354;
})();
if(cljs.core.truth_(inst_51322)){
var statearr_51355_51405 = state_51333__$1;
(statearr_51355_51405[(1)] = (17));

} else {
var statearr_51356_51406 = state_51333__$1;
(statearr_51356_51406[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (10))){
var inst_51316 = (state_51333[(2)]);
var state_51333__$1 = state_51333;
if(cljs.core.truth_(inst_51316)){
var statearr_51357_51407 = state_51333__$1;
(statearr_51357_51407[(1)] = (14));

} else {
var statearr_51358_51408 = state_51333__$1;
(statearr_51358_51408[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (18))){
var inst_51321 = (state_51333[(9)]);
var inst_51328 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_51321);
var inst_51329 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_51328) : re_frame.core.dispatch.call(null,inst_51328));
var state_51333__$1 = state_51333;
var statearr_51359_51409 = state_51333__$1;
(statearr_51359_51409[(2)] = inst_51329);

(statearr_51359_51409[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (8))){
var inst_51300 = (state_51333[(7)]);
var inst_51305 = inst_51300.cljs$lang$protocol_mask$partition0$;
var inst_51306 = (inst_51305 & (64));
var inst_51307 = inst_51300.cljs$core$ISeq$;
var inst_51308 = (cljs.core.PROTOCOL_SENTINEL === inst_51307);
var inst_51309 = ((inst_51306) || (inst_51308));
var state_51333__$1 = state_51333;
if(cljs.core.truth_(inst_51309)){
var statearr_51360_51410 = state_51333__$1;
(statearr_51360_51410[(1)] = (11));

} else {
var statearr_51361_51411 = state_51333__$1;
(statearr_51361_51411[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$events$state_machine__39593__auto__ = null;
var athens$events$state_machine__39593__auto____0 = (function (){
var statearr_51362 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51362[(0)] = athens$events$state_machine__39593__auto__);

(statearr_51362[(1)] = (1));

return statearr_51362;
});
var athens$events$state_machine__39593__auto____1 = (function (state_51333){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_51333);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e51363){if((e51363 instanceof Object)){
var ex__39596__auto__ = e51363;
var statearr_51364_51412 = state_51333;
(statearr_51364_51412[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51413 = state_51333;
state_51333 = G__51413;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$events$state_machine__39593__auto__ = function(state_51333){
switch(arguments.length){
case 0:
return athens$events$state_machine__39593__auto____0.call(this);
case 1:
return athens$events$state_machine__39593__auto____1.call(this,state_51333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$events$state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$events$state_machine__39593__auto____0;
athens$events$state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$events$state_machine__39593__auto____1;
return athens$events$state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_51365 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_51365[(6)] = c__39615__auto__);

return statearr_51365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

return c__39615__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__51286_51383,G__51287_51384) : re_frame.core.reg_fx.call(null,G__51286_51383,G__51287_51384));
var G__51366_51414 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__51367_51415 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__51368){
var map__51369 = p__51368;
var map__51369__$1 = (((((!((map__51369 == null))))?(((((map__51369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51369):map__51369);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51369__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51369__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51369__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51369__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__51371 = action;
var G__51371__$1 = (((G__51371 instanceof cljs.core.Keyword))?G__51371.fqn:null);
switch (G__51371__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51371__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__51366_51414,G__51367_51415) : re_frame.core.reg_fx.call(null,G__51366_51414,G__51367_51415));
athens.events.boot_flow = (function athens$events$boot_flow(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boot","boot",2007860585),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null));

var opts__49248__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__49249__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__49249__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__49249__auto__;
}catch (e51372){var e = e51372;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
})));

//# sourceMappingURL=athens.events.js.map
