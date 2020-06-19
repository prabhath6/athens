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

var opts__47858__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47859__auto__;
}catch (e47939){var e = e47939;
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

var opts__47858__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = cljs.core.assoc_in((function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto__;
})(),(function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto__;
})(),(function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47859__auto__;
}catch (e47949){var e = e47949;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__47959){
var vec__47961 = p__47959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47961,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47961,(1),null);
var _PLUS_debux_dbg_opts_PLUS__48314 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))));

var opts__47858__auto___48315 = _PLUS_debux_dbg_opts_PLUS__48314;
var result__47859__auto___48316 = datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS__48314;
var result__47859__auto___48316 = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto___48316,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto___48316;
})(),(function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS__48314;
var result__47859__auto___48316 = (function (){var G__47972 = (function (){var opts__47858__auto____$2 = _PLUS_debux_dbg_opts_PLUS__48314;
var result__47859__auto___48316 = athens.db.schema;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto___48316,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47859__auto___48316;
})();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__47972) : datascript.core.empty_db.call(null,G__47972));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto___48316,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto___48316;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto___48316,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e47966){var e_48319 = e47966;
throw e_48319;
}
var _PLUS_debux_dbg_opts_PLUS__48320 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"transact!","transact!",817805717,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null))));

var opts__47858__auto___48321 = _PLUS_debux_dbg_opts_PLUS__48320;
var result__47859__auto___48322 = (function (){var G__47981 = (function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS__48320;
var result__47859__auto___48322 = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto___48322,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto___48322;
})();
var G__47982 = (function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS__48320;
var result__47859__auto___48322 = athens.db.str_to_db_tx((function (){var opts__47858__auto____$2 = _PLUS_debux_dbg_opts_PLUS__48320;
var result__47859__auto___48322 = json_str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto___48322,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47859__auto___48322;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto___48322,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto___48322;
})();
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__47981,G__47982) : posh.reagent.transact_BANG_.call(null,G__47981,G__47982));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto___48322,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"transact!","transact!",817805717,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e47980){var e_48336 = e47980;
throw e_48336;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"loading","loading",-737050189),false));

var opts__47858__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto__;
})(),new cljs.core.Keyword(null,"loading","loading",-737050189),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47859__auto__;
}catch (e47989){var e = e47989;
throw e;
}}):(function (db,p__47999){
var vec__48000 = p__47999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48000,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48000,(1),null);
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));

var G__48005_48337 = athens.db.dsdb;
var G__48006_48338 = athens.db.str_to_db_tx(json_str);
(posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__48005_48337,G__48006_48338) : posh.reagent.transact_BANG_.call(null,G__48005_48337,G__48006_48338));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__47858__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = cljs.core.assoc_in((function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto__;
})(),(function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto__;
})(),(function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47859__auto__;
}catch (e48040){var e = e48040;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__47858__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = cljs.core.assoc_in((function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto__;
})(),(function (){var opts__47858__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47859__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47859__auto__;
}catch (e48057){var e = e48057;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
})));
var G__48074_48352 = new cljs.core.Keyword(null,"http","http",382524695);
var G__48075_48353 = (function (p__48076){
var map__48077 = p__48076;
var map__48077__$1 = (((((!((map__48077 == null))))?(((((map__48077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48077):map__48077);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48077__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48077__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48077__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48077__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48077__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_48150){
var state_val_48153 = (state_48150[(1)]);
if((state_val_48153 === (7))){
var inst_48103 = (state_48150[(7)]);
var inst_48103__$1 = (state_48150[(2)]);
var inst_48105 = (inst_48103__$1 == null);
var inst_48106 = cljs.core.not(inst_48105);
var state_48150__$1 = (function (){var statearr_48155 = state_48150;
(statearr_48155[(7)] = inst_48103__$1);

return statearr_48155;
})();
if(inst_48106){
var statearr_48156_48355 = state_48150__$1;
(statearr_48156_48355[(1)] = (8));

} else {
var statearr_48157_48356 = state_48150__$1;
(statearr_48157_48356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (1))){
var state_48150__$1 = state_48150;
var G__48159_48358 = method;
var G__48159_48359__$1 = (((G__48159_48358 instanceof cljs.core.Keyword))?G__48159_48358.fqn:null);
switch (G__48159_48359__$1) {
case "post":
var statearr_48162_48361 = state_48150__$1;
(statearr_48162_48361[(1)] = (3));


break;
case "get":
var statearr_48163_48362 = state_48150__$1;
(statearr_48163_48362[(1)] = (4));


break;
case "put":
var statearr_48165_48363 = state_48150__$1;
(statearr_48165_48363[(1)] = (5));


break;
case "delete":
var statearr_48194_48364 = state_48150__$1;
(statearr_48194_48364[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48159_48359__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (4))){
var state_48150__$1 = state_48150;
var statearr_48200_48365 = state_48150__$1;
(statearr_48200_48365[(2)] = cljs_http.client.get);

(statearr_48200_48365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (15))){
var inst_48103 = (state_48150[(7)]);
var state_48150__$1 = state_48150;
var statearr_48201_48366 = state_48150__$1;
(statearr_48201_48366[(2)] = inst_48103);

(statearr_48201_48366[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (13))){
var inst_48126 = (state_48150[(2)]);
var state_48150__$1 = state_48150;
var statearr_48205_48367 = state_48150__$1;
(statearr_48205_48367[(2)] = inst_48126);

(statearr_48205_48367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (6))){
var state_48150__$1 = state_48150;
var statearr_48206_48368 = state_48150__$1;
(statearr_48206_48368[(2)] = cljs_http.client.delete$);

(statearr_48206_48368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (17))){
var inst_48139 = (state_48150[(8)]);
var inst_48141 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_48139);
var inst_48142 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_48141) : re_frame.core.dispatch.call(null,inst_48141));
var state_48150__$1 = state_48150;
var statearr_48210_48369 = state_48150__$1;
(statearr_48210_48369[(2)] = inst_48142);

(statearr_48210_48369[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (3))){
var state_48150__$1 = state_48150;
var statearr_48213_48370 = state_48150__$1;
(statearr_48213_48370[(2)] = cljs_http.client.post);

(statearr_48213_48370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (12))){
var state_48150__$1 = state_48150;
var statearr_48214_48383 = state_48150__$1;
(statearr_48214_48383[(2)] = false);

(statearr_48214_48383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (2))){
var inst_48098 = (state_48150[(2)]);
var inst_48101 = (inst_48098.cljs$core$IFn$_invoke$arity$2 ? inst_48098.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_48098.call(null,url,opts));
var state_48150__$1 = state_48150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48150__$1,(7),inst_48101);
} else {
if((state_val_48153 === (19))){
var inst_48147 = (state_48150[(2)]);
var state_48150__$1 = state_48150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48150__$1,inst_48147);
} else {
if((state_val_48153 === (11))){
var state_48150__$1 = state_48150;
var statearr_48215_48387 = state_48150__$1;
(statearr_48215_48387[(2)] = true);

(statearr_48215_48387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (9))){
var state_48150__$1 = state_48150;
var statearr_48216_48388 = state_48150__$1;
(statearr_48216_48388[(2)] = false);

(statearr_48216_48388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (5))){
var state_48150__$1 = state_48150;
var statearr_48217_48389 = state_48150__$1;
(statearr_48217_48389[(2)] = cljs_http.client.put);

(statearr_48217_48389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (14))){
var inst_48103 = (state_48150[(7)]);
var inst_48133 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48103);
var state_48150__$1 = state_48150;
var statearr_48221_48390 = state_48150__$1;
(statearr_48221_48390[(2)] = inst_48133);

(statearr_48221_48390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (16))){
var inst_48136 = (state_48150[(9)]);
var inst_48136__$1 = (state_48150[(2)]);
var inst_48138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48136__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_48139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48136__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_48150__$1 = (function (){var statearr_48234 = state_48150;
(statearr_48234[(9)] = inst_48136__$1);

(statearr_48234[(8)] = inst_48139);

return statearr_48234;
})();
if(cljs.core.truth_(inst_48138)){
var statearr_48235_48391 = state_48150__$1;
(statearr_48235_48391[(1)] = (17));

} else {
var statearr_48236_48392 = state_48150__$1;
(statearr_48236_48392[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (10))){
var inst_48131 = (state_48150[(2)]);
var state_48150__$1 = state_48150;
if(cljs.core.truth_(inst_48131)){
var statearr_48237_48393 = state_48150__$1;
(statearr_48237_48393[(1)] = (14));

} else {
var statearr_48238_48394 = state_48150__$1;
(statearr_48238_48394[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (18))){
var inst_48136 = (state_48150[(9)]);
var inst_48144 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_48136);
var inst_48145 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_48144) : re_frame.core.dispatch.call(null,inst_48144));
var state_48150__$1 = state_48150;
var statearr_48239_48395 = state_48150__$1;
(statearr_48239_48395[(2)] = inst_48145);

(statearr_48239_48395[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48153 === (8))){
var inst_48103 = (state_48150[(7)]);
var inst_48117 = inst_48103.cljs$lang$protocol_mask$partition0$;
var inst_48118 = (inst_48117 & (64));
var inst_48119 = inst_48103.cljs$core$ISeq$;
var inst_48120 = (cljs.core.PROTOCOL_SENTINEL === inst_48119);
var inst_48121 = ((inst_48118) || (inst_48120));
var state_48150__$1 = state_48150;
if(cljs.core.truth_(inst_48121)){
var statearr_48240_48396 = state_48150__$1;
(statearr_48240_48396[(1)] = (11));

} else {
var statearr_48257_48397 = state_48150__$1;
(statearr_48257_48397[(1)] = (12));

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
var athens$events$state_machine__41713__auto__ = null;
var athens$events$state_machine__41713__auto____0 = (function (){
var statearr_48258 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48258[(0)] = athens$events$state_machine__41713__auto__);

(statearr_48258[(1)] = (1));

return statearr_48258;
});
var athens$events$state_machine__41713__auto____1 = (function (state_48150){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_48150);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e48259){if((e48259 instanceof Object)){
var ex__41716__auto__ = e48259;
var statearr_48260_48403 = state_48150;
(statearr_48260_48403[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48405 = state_48150;
state_48150 = G__48405;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$events$state_machine__41713__auto__ = function(state_48150){
switch(arguments.length){
case 0:
return athens$events$state_machine__41713__auto____0.call(this);
case 1:
return athens$events$state_machine__41713__auto____1.call(this,state_48150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$events$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$events$state_machine__41713__auto____0;
athens$events$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$events$state_machine__41713__auto____1;
return athens$events$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_48261 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_48261[(6)] = c__41735__auto__);

return statearr_48261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__48074_48352,G__48075_48353) : re_frame.core.reg_fx.call(null,G__48074_48352,G__48075_48353));
var G__48262_48409 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__48263_48410 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__48264){
var map__48265 = p__48264;
var map__48265__$1 = (((((!((map__48265 == null))))?(((((map__48265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48265):map__48265);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48265__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48265__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48265__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__48280 = action;
var G__48280__$1 = (((G__48280 instanceof cljs.core.Keyword))?G__48280.fqn:null);
switch (G__48280__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48280__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__48262_48409,G__48263_48410) : re_frame.core.reg_fx.call(null,G__48262_48409,G__48263_48410));
athens.events.boot_flow = (function athens$events$boot_flow(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boot","boot",2007860585),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null));

var opts__47858__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47859__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47859__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47859__auto__;
}catch (e48286){var e = e48286;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
})));

//# sourceMappingURL=athens.events.js.map
