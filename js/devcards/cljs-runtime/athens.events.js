goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('day8.re_frame.tracing');
goog.require('posh.reagent');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null));

var opts__46515__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46516__auto__;
}catch (e60481){var e = e60481;
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

var opts__46515__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = cljs.core.assoc_in((function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46516__auto__;
})(),(function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46516__auto__;
})(),(function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46516__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46516__auto__;
}catch (e60482){var e = e60482;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__46515__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = cljs.core.assoc_in((function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46516__auto__;
})(),(function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46516__auto__;
})(),(function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46516__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46516__auto__;
}catch (e60483){var e = e60483;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__46515__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = cljs.core.assoc_in((function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46516__auto__;
})(),(function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46516__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46516__auto__;
}catch (e60484){var e = e60484;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__60485){
var vec__60486 = p__60485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60486,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60486,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new cljs.core.Symbol(null,"uid","uid",192762127,null)));

var opts__46515__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46516__auto__;
})(),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),(function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46516__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),new cljs.core.Symbol(null,"uid","uid",192762127,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46516__auto__;
}catch (e60489){var e = e60489;
throw e;
}}):(function (db,p__60490){
var vec__60491 = p__60490;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60491,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60491,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377),uid);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),(function (db,p__60494){
var vec__60495 = p__60494;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60495,(0),null);
var map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60495,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"drag-bullet","drag-bullet",441161411),map);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),(function (db,p__60498){
var vec__60499 = p__60498;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60499,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60499,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tooltip-uid","tooltip-uid",-1719650452),uid);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boot","boot",2007860585),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null));

var opts__46515__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),athens.db.rfdb,new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46516__auto__;
}catch (e60502){var e = e60502;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),athens.db.rfdb,new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),(function (_,p__60503){
var vec__60504 = p__60503;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60504,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60504,(1),null);
var datoms = athens.db.str_to_db_tx(json_str);
var new_db = datascript.core.db_with((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)),datoms);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),new_db,new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-local-storage-db","get-local-storage-db",381131920),(function (p__60507){
var map__60508 = p__60507;
var map__60508__$1 = (((((!((map__60508 == null))))?(((((map__60508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60508):map__60508);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60508__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5733__auto__ = localStorage.getItem("datascript/DB");
if(cljs.core.truth_(temp__5733__auto__)){
var stored = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),datascript.transit.read_transit_str(stored),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),(function (_,p__60510){
var vec__60511 = p__60510;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60511,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60511,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),datoms], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo","undo",-1818036302),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_prev(cljs.core.deref(athens.db.history),(function (p1__60514_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__60514_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var prev = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),prev], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redo","redo",501190664),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_next(cljs.core.deref(athens.db.history),(function (p1__60516_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__60516_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var next = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),next], null);
} else {
return null;
}
}));
athens.events.get_block = (function athens$events$get_block(id){
return cljs.core.deref((function (){var G__60517 = athens.db.dsdb;
var G__60518 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437)], null)], null)], null);
var G__60519 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__60517,G__60518,G__60519) : posh.reagent.pull.call(null,G__60517,G__60518,G__60519));
})());
});
athens.events.get_parent = (function athens$events$get_parent(id){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1((function (){var G__60522 = cljs.core.deref(athens.db.dsdb);
var G__60523 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60522,G__60523) : datascript.core.entity.call(null,G__60522,G__60523));
})())));
return athens.events.get_block(eid);
});
athens.events.rules = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)),cljs.core.list(new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null)], null)], null)], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indent","indent",-148200125),(function (_,p__60528){
var vec__60529 = p__60528;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60529,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60529,(1),null);
var block = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var older_sib = athens.events.get_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60525_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) - (1)),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(p1__60525_SHARP_));
}),new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(parent)))));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.count(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(older_sib))], null);
var reindex_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60532){
var vec__60533 = p__60532;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60533,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60533,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__60536 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-o","?new-o",1710641600,null))], null);
var G__60537 = cljs.core.deref(athens.db.dsdb);
var G__60538 = athens.events.rules;
var G__60539 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__60540 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__60536,G__60537,G__60538,G__60539,G__60540) : datascript.core.q.call(null,G__60536,G__60537,G__60538,G__60539,G__60540));
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(older_sib),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_blocks], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unindent","unindent",-1291301718),(function (_,p__60541){
var vec__60542 = p__60541;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60542,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60542,(1),null);
var parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var grandpa = athens.events.get_parent(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent) + (1))], null);
var reindex_grandpa = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60545){
var vec__60546 = p__60545;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60546,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60546,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__60549 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?grandpa","?grandpa",-1807655486,null),new cljs.core.Symbol(null,"?parent-order","?parent-order",318887288,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?grandpa","?grandpa",-1807655486,null),new cljs.core.Symbol(null,"?parent-order","?parent-order",318887288,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__60550 = cljs.core.deref(athens.db.dsdb);
var G__60551 = athens.events.rules;
var G__60552 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa);
var G__60553 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__60549,G__60550,G__60551,G__60552,G__60553) : datascript.core.q.call(null,G__60549,G__60550,G__60551,G__60552,G__60553));
})()));
if(cljs.core.truth_(grandpa)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_grandpa], null)], null)], null);
} else {
return null;
}
}));
athens.events.target_child = (function athens$events$target_child(source,source_parent,target){
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(0)], null);
var new_parent_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60555){
var vec__60556 = p__60555;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60556,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60556,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__60559 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__60560 = cljs.core.deref(athens.db.dsdb);
var G__60561 = athens.events.rules;
var G__60562 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent);
var G__60563 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__60559,G__60560,G__60561,G__60562,G__60563) : datascript.core.q.call(null,G__60559,G__60560,G__60561,G__60562,G__60563));
})());
var new_target_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60564){
var vec__60565 = p__60564;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60565,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60565,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__60569 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?at","?at",-1287664470,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__60570 = cljs.core.deref(athens.db.dsdb);
var G__60571 = athens.events.rules;
var G__60572 = new cljs.core.Keyword(null,"dbid","dbid",-196647356).cljs$core$IFn$_invoke$arity$1(target);
var G__60573 = (0);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__60569,G__60570,G__60571,G__60572,G__60573) : datascript.core.q.call(null,G__60569,G__60570,G__60571,G__60572,G__60573));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new_parent_children], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword("block","children","block/children",-1040716209),new_target_children], null)], null);
});
/**
 * http://blog.jenkster.com/2013/11/clojure-less-than-greater-than-tip.html
 */
athens.events.between = (function athens$events$between(s,t,x){
if((s < t)){
return (((s < x)) && ((x < t)));
} else {
return (((t < x)) && ((x < s)));
}
});
athens.events.target_sibling_same_parent = (function athens$events$target_sibling_same_parent(source,target,parent){
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(t_order + (1))], null);
var inc_or_dec = (((s_order > t_order))?cljs.core.inc:cljs.core.dec);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60579){
var vec__60581 = p__60579;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60581,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60581,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__60584 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__60585 = cljs.core.deref(athens.db.dsdb);
var G__60586 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__60587 = s_order;
var G__60588 = t_order;
var G__60589 = athens.events.between;
var G__60590 = inc_or_dec;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$7 ? datascript.core.q.cljs$core$IFn$_invoke$arity$7(G__60584,G__60585,G__60586,G__60587,G__60588,G__60589,G__60590) : datascript.core.q.call(null,G__60584,G__60585,G__60586,G__60587,G__60588,G__60589,G__60590));
})()));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null);
});
athens.events.target_sibling_diff_parent = (function athens$events$target_sibling_diff_parent(source,target,source_parent,target_parent){
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target) + (1))], null);
var source_parent_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60594){
var vec__60595 = p__60594;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60595,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60595,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__60598 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"dec-after","dec-after",-2019085122,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?source-order","?source-order",-2138536659,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__60599 = cljs.core.deref(athens.db.dsdb);
var G__60600 = athens.events.rules;
var G__60601 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent);
var G__60602 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__60598,G__60599,G__60600,G__60601,G__60602) : datascript.core.q.call(null,G__60598,G__60599,G__60600,G__60601,G__60602));
})());
var target_parent_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60603){
var vec__60604 = p__60603;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60604,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60604,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}),(function (){var G__60607 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?target-order","?target-order",-692071803,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"inc-after","inc-after",1008662500,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?target-order","?target-order",-692071803,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null))], null);
var G__60608 = cljs.core.deref(athens.db.dsdb);
var G__60609 = athens.events.rules;
var G__60610 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent);
var G__60611 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__60607,G__60608,G__60609,G__60610,G__60611) : datascript.core.q.call(null,G__60607,G__60608,G__60609,G__60610,G__60611));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),source_parent_children], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),target_parent_children], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-bullet","drop-bullet",1177869489),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__60612){
var vec__60613 = p__60612;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60613,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60613,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60613,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60613,(3),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target","target",1893533248,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"child","child",623967545)),cljs.core.list(new cljs.core.Symbol(null,"target-child","target-child",-2004457132,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target","target",1893533248,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"source","source",1206599988,null)),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"target","target",1893533248,null))))),null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-same-parent","target-sibling-same-parent",326992955,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null)),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-diff-parent","target-sibling-diff-parent",-1933683421,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)))], null)));

var opts__46515__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = (function (){var source = (function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = athens.events.get_block((function (){var opts__46515__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__46515__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = source_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46516__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46516__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46516__auto__;
})();
var target = (function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = athens.events.get_block((function (){var opts__46515__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__46515__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = target_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46516__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46516__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46516__auto__;
})();
var source_parent = (function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = athens.events.get_parent((function (){var opts__46515__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__46515__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = source_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46516__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46516__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46516__auto__;
})();
var target_parent = (function (){var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = athens.events.get_parent((function (){var opts__46515__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),(function (){var opts__46515__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = target_uid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__46516__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46516__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46516__auto__;
})();
var opts__46515__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46516__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"child","child",623967545)))?athens.events.target_child(source,source_parent,target):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source) - new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target))))))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_same_parent(source,target,source_parent):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_diff_parent(source,target,source_parent,target_parent):null))))], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"child","child",623967545)),cljs.core.list(new cljs.core.Symbol(null,"target-child","target-child",-2004457132,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target","target",1893533248,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"source","source",1206599988,null)),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"target","target",1893533248,null))))),null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-same-parent","target-sibling-same-parent",326992955,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null)),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-diff-parent","target-sibling-diff-parent",-1933683421,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46516__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46516__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target","target",1893533248,null),cljs.core.list(new cljs.core.Symbol(null,"get-block","get-block",-1878521400,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null)),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"source-uid","source-uid",-1936151351,null)], null)),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null),cljs.core.list(new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"target-uid","target-uid",361434315,null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"child","child",623967545)),cljs.core.list(new cljs.core.Symbol(null,"target-child","target-child",-2004457132,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target","target",1893533248,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"source","source",1206599988,null)),cljs.core.list(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"target","target",1893533248,null))))),null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-same-parent","target-sibling-same-parent",326992955,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null)),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)),cljs.core.list(new cljs.core.Symbol(null,"target-sibling-diff-parent","target-sibling-diff-parent",-1933683421,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"source-parent","source-parent",-791655314,null),new cljs.core.Symbol(null,"target-parent","target-parent",1350954620,null)))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46516__auto__;
}catch (e60618){var e = e60618;
throw e;
}}):(function (_,p__60619){
var vec__60620 = p__60619;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60620,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60620,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60620,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60620,(3),null);
var source = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target = athens.events.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var source_parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target_parent = athens.events.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"child","child",623967545)))?athens.events.target_child(source,source_parent,target):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source) - new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target))))))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_same_parent(source,target,source_parent):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent))?athens.events.target_sibling_diff_parent(source,target,source_parent,target_parent):null))))], null);
})));

//# sourceMappingURL=athens.events.js.map
