goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34327 = arguments.length;
switch (G__34327) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34328 = (function (f,blockable,meta34329){
this.f = f;
this.blockable = blockable;
this.meta34329 = meta34329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34330,meta34329__$1){
var self__ = this;
var _34330__$1 = this;
return (new cljs.core.async.t_cljs$core$async34328(self__.f,self__.blockable,meta34329__$1));
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34330){
var self__ = this;
var _34330__$1 = this;
return self__.meta34329;
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34329","meta34329",-1253183027,null)], null);
}));

(cljs.core.async.t_cljs$core$async34328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34328");

(cljs.core.async.t_cljs$core$async34328.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34328.
 */
cljs.core.async.__GT_t_cljs$core$async34328 = (function cljs$core$async$__GT_t_cljs$core$async34328(f__$1,blockable__$1,meta34329){
return (new cljs.core.async.t_cljs$core$async34328(f__$1,blockable__$1,meta34329));
});

}

return (new cljs.core.async.t_cljs$core$async34328(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34333 = arguments.length;
switch (G__34333) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34335 = arguments.length;
switch (G__34335) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34337 = arguments.length;
switch (G__34337) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36772 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36772) : fn1.call(null,val_36772));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36772) : fn1.call(null,val_36772));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34339 = arguments.length;
switch (G__34339) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___36777 = n;
var x_36778 = (0);
while(true){
if((x_36778 < n__4666__auto___36777)){
(a[x_36778] = x_36778);

var G__36779 = (x_36778 + (1));
x_36778 = G__36779;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34341 = (function (flag,meta34342){
this.flag = flag;
this.meta34342 = meta34342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34343,meta34342__$1){
var self__ = this;
var _34343__$1 = this;
return (new cljs.core.async.t_cljs$core$async34341(self__.flag,meta34342__$1));
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34343){
var self__ = this;
var _34343__$1 = this;
return self__.meta34342;
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34342","meta34342",817471502,null)], null);
}));

(cljs.core.async.t_cljs$core$async34341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34341");

(cljs.core.async.t_cljs$core$async34341.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34341.
 */
cljs.core.async.__GT_t_cljs$core$async34341 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34341(flag__$1,meta34342){
return (new cljs.core.async.t_cljs$core$async34341(flag__$1,meta34342));
});

}

return (new cljs.core.async.t_cljs$core$async34341(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34352 = (function (flag,cb,meta34353){
this.flag = flag;
this.cb = cb;
this.meta34353 = meta34353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34354,meta34353__$1){
var self__ = this;
var _34354__$1 = this;
return (new cljs.core.async.t_cljs$core$async34352(self__.flag,self__.cb,meta34353__$1));
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34354){
var self__ = this;
var _34354__$1 = this;
return self__.meta34353;
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34353","meta34353",-42975121,null)], null);
}));

(cljs.core.async.t_cljs$core$async34352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34352");

(cljs.core.async.t_cljs$core$async34352.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34352.
 */
cljs.core.async.__GT_t_cljs$core$async34352 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34352(flag__$1,cb__$1,meta34353){
return (new cljs.core.async.t_cljs$core$async34352(flag__$1,cb__$1,meta34353));
});

}

return (new cljs.core.async.t_cljs$core$async34352(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34355_SHARP_){
var G__34357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34355_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34357) : fret.call(null,G__34357));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34356_SHARP_){
var G__34361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34356_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34361) : fret.call(null,G__34361));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36788 = (i + (1));
i = G__36788;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36790 = arguments.length;
var i__4790__auto___36791 = (0);
while(true){
if((i__4790__auto___36791 < len__4789__auto___36790)){
args__4795__auto__.push((arguments[i__4790__auto___36791]));

var G__36792 = (i__4790__auto___36791 + (1));
i__4790__auto___36791 = G__36792;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34373){
var map__34374 = p__34373;
var map__34374__$1 = (((((!((map__34374 == null))))?(((((map__34374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34374):map__34374);
var opts = map__34374__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34368){
var G__34369 = cljs.core.first(seq34368);
var seq34368__$1 = cljs.core.next(seq34368);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34369,seq34368__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34380 = arguments.length;
switch (G__34380) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34267__auto___36797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34416){
var state_val_34417 = (state_34416[(1)]);
if((state_val_34417 === (7))){
var inst_34412 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34418_36799 = state_34416__$1;
(statearr_34418_36799[(2)] = inst_34412);

(statearr_34418_36799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (1))){
var state_34416__$1 = state_34416;
var statearr_34419_36800 = state_34416__$1;
(statearr_34419_36800[(2)] = null);

(statearr_34419_36800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (4))){
var inst_34395 = (state_34416[(7)]);
var inst_34395__$1 = (state_34416[(2)]);
var inst_34396 = (inst_34395__$1 == null);
var state_34416__$1 = (function (){var statearr_34420 = state_34416;
(statearr_34420[(7)] = inst_34395__$1);

return statearr_34420;
})();
if(cljs.core.truth_(inst_34396)){
var statearr_34421_36802 = state_34416__$1;
(statearr_34421_36802[(1)] = (5));

} else {
var statearr_34422_36803 = state_34416__$1;
(statearr_34422_36803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (13))){
var state_34416__$1 = state_34416;
var statearr_34423_36804 = state_34416__$1;
(statearr_34423_36804[(2)] = null);

(statearr_34423_36804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (6))){
var inst_34395 = (state_34416[(7)]);
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34416__$1,(11),to,inst_34395);
} else {
if((state_val_34417 === (3))){
var inst_34414 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34416__$1,inst_34414);
} else {
if((state_val_34417 === (12))){
var state_34416__$1 = state_34416;
var statearr_34424_36806 = state_34416__$1;
(statearr_34424_36806[(2)] = null);

(statearr_34424_36806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (2))){
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34416__$1,(4),from);
} else {
if((state_val_34417 === (11))){
var inst_34405 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
if(cljs.core.truth_(inst_34405)){
var statearr_34425_36807 = state_34416__$1;
(statearr_34425_36807[(1)] = (12));

} else {
var statearr_34426_36809 = state_34416__$1;
(statearr_34426_36809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (9))){
var state_34416__$1 = state_34416;
var statearr_34427_36810 = state_34416__$1;
(statearr_34427_36810[(2)] = null);

(statearr_34427_36810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (5))){
var state_34416__$1 = state_34416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34428_36811 = state_34416__$1;
(statearr_34428_36811[(1)] = (8));

} else {
var statearr_34429_36812 = state_34416__$1;
(statearr_34429_36812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (14))){
var inst_34410 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34430_36814 = state_34416__$1;
(statearr_34430_36814[(2)] = inst_34410);

(statearr_34430_36814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (10))){
var inst_34402 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34431_36815 = state_34416__$1;
(statearr_34431_36815[(2)] = inst_34402);

(statearr_34431_36815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (8))){
var inst_34399 = cljs.core.async.close_BANG_(to);
var state_34416__$1 = state_34416;
var statearr_34432_36816 = state_34416__$1;
(statearr_34432_36816[(2)] = inst_34399);

(statearr_34432_36816[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_34433 = [null,null,null,null,null,null,null,null];
(statearr_34433[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34433[(1)] = (1));

return statearr_34433;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34416){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34416);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34434){if((e34434 instanceof Object)){
var ex__34203__auto__ = e34434;
var statearr_34435_36818 = state_34416;
(statearr_34435_36818[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36820 = state_34416;
state_34416 = G__36820;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34436 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34436[(6)] = c__34267__auto___36797);

return statearr_34436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__34442){
var vec__34443 = p__34442;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34443,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34443,(1),null);
var job = vec__34443;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34267__auto___36822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34450){
var state_val_34451 = (state_34450[(1)]);
if((state_val_34451 === (1))){
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34450__$1,(2),res,v);
} else {
if((state_val_34451 === (2))){
var inst_34447 = (state_34450[(2)]);
var inst_34448 = cljs.core.async.close_BANG_(res);
var state_34450__$1 = (function (){var statearr_34452 = state_34450;
(statearr_34452[(7)] = inst_34447);

return statearr_34452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34450__$1,inst_34448);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34454 = [null,null,null,null,null,null,null,null];
(statearr_34454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34454[(1)] = (1));

return statearr_34454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34450){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34450);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34455){if((e34455 instanceof Object)){
var ex__34203__auto__ = e34455;
var statearr_34456_36825 = state_34450;
(statearr_34456_36825[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36826 = state_34450;
state_34450 = G__36826;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34458 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34458[(6)] = c__34267__auto___36822);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34459){
var vec__34461 = p__34459;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34461,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34461,(1),null);
var job = vec__34461;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___36829 = n;
var __36830 = (0);
while(true){
if((__36830 < n__4666__auto___36829)){
var G__34464_36831 = type;
var G__34464_36832__$1 = (((G__34464_36831 instanceof cljs.core.Keyword))?G__34464_36831.fqn:null);
switch (G__34464_36832__$1) {
case "compute":
var c__34267__auto___36834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36830,c__34267__auto___36834,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36830,c__34267__auto___36834,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async){
return (function (state_34479){
var state_val_34480 = (state_34479[(1)]);
if((state_val_34480 === (1))){
var state_34479__$1 = state_34479;
var statearr_34486_36836 = state_34479__$1;
(statearr_34486_36836[(2)] = null);

(statearr_34486_36836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (2))){
var state_34479__$1 = state_34479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34479__$1,(4),jobs);
} else {
if((state_val_34480 === (3))){
var inst_34477 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34479__$1,inst_34477);
} else {
if((state_val_34480 === (4))){
var inst_34467 = (state_34479[(2)]);
var inst_34468 = process(inst_34467);
var state_34479__$1 = state_34479;
if(cljs.core.truth_(inst_34468)){
var statearr_34487_36838 = state_34479__$1;
(statearr_34487_36838[(1)] = (5));

} else {
var statearr_34488_36839 = state_34479__$1;
(statearr_34488_36839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (5))){
var state_34479__$1 = state_34479;
var statearr_34489_36840 = state_34479__$1;
(statearr_34489_36840[(2)] = null);

(statearr_34489_36840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (6))){
var state_34479__$1 = state_34479;
var statearr_34490_36842 = state_34479__$1;
(statearr_34490_36842[(2)] = null);

(statearr_34490_36842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (7))){
var inst_34475 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
var statearr_34491_36843 = state_34479__$1;
(statearr_34491_36843[(2)] = inst_34475);

(statearr_34491_36843[(1)] = (3));


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
});})(__36830,c__34267__auto___36834,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async))
;
return ((function (__36830,switch__34199__auto__,c__34267__auto___36834,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34492 = [null,null,null,null,null,null,null];
(statearr_34492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34492[(1)] = (1));

return statearr_34492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34479){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34479);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34493){if((e34493 instanceof Object)){
var ex__34203__auto__ = e34493;
var statearr_34495_36845 = state_34479;
(statearr_34495_36845[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36847 = state_34479;
state_34479 = G__36847;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36830,switch__34199__auto__,c__34267__auto___36834,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34496 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34496[(6)] = c__34267__auto___36834);

return statearr_34496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36830,c__34267__auto___36834,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async))
);


break;
case "async":
var c__34267__auto___36848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36830,c__34267__auto___36848,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36830,c__34267__auto___36848,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async){
return (function (state_34509){
var state_val_34510 = (state_34509[(1)]);
if((state_val_34510 === (1))){
var state_34509__$1 = state_34509;
var statearr_34515_36850 = state_34509__$1;
(statearr_34515_36850[(2)] = null);

(statearr_34515_36850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (2))){
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34509__$1,(4),jobs);
} else {
if((state_val_34510 === (3))){
var inst_34507 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34509__$1,inst_34507);
} else {
if((state_val_34510 === (4))){
var inst_34499 = (state_34509[(2)]);
var inst_34500 = async(inst_34499);
var state_34509__$1 = state_34509;
if(cljs.core.truth_(inst_34500)){
var statearr_34519_36852 = state_34509__$1;
(statearr_34519_36852[(1)] = (5));

} else {
var statearr_34520_36853 = state_34509__$1;
(statearr_34520_36853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (5))){
var state_34509__$1 = state_34509;
var statearr_34521_36854 = state_34509__$1;
(statearr_34521_36854[(2)] = null);

(statearr_34521_36854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (6))){
var state_34509__$1 = state_34509;
var statearr_34522_36856 = state_34509__$1;
(statearr_34522_36856[(2)] = null);

(statearr_34522_36856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (7))){
var inst_34505 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34523_36857 = state_34509__$1;
(statearr_34523_36857[(2)] = inst_34505);

(statearr_34523_36857[(1)] = (3));


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
});})(__36830,c__34267__auto___36848,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async))
;
return ((function (__36830,switch__34199__auto__,c__34267__auto___36848,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34524 = [null,null,null,null,null,null,null];
(statearr_34524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34524[(1)] = (1));

return statearr_34524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34509){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34509);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34525){if((e34525 instanceof Object)){
var ex__34203__auto__ = e34525;
var statearr_34526_36859 = state_34509;
(statearr_34526_36859[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36861 = state_34509;
state_34509 = G__36861;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36830,switch__34199__auto__,c__34267__auto___36848,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34527 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34527[(6)] = c__34267__auto___36848);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36830,c__34267__auto___36848,G__34464_36831,G__34464_36832__$1,n__4666__auto___36829,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34464_36832__$1)].join('')));

}

var G__36863 = (__36830 + (1));
__36830 = G__36863;
continue;
} else {
}
break;
}

var c__34267__auto___36864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34552){
var state_val_34553 = (state_34552[(1)]);
if((state_val_34553 === (7))){
var inst_34548 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
var statearr_34554_36865 = state_34552__$1;
(statearr_34554_36865[(2)] = inst_34548);

(statearr_34554_36865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (1))){
var state_34552__$1 = state_34552;
var statearr_34555_36867 = state_34552__$1;
(statearr_34555_36867[(2)] = null);

(statearr_34555_36867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (4))){
var inst_34530 = (state_34552[(7)]);
var inst_34530__$1 = (state_34552[(2)]);
var inst_34531 = (inst_34530__$1 == null);
var state_34552__$1 = (function (){var statearr_34556 = state_34552;
(statearr_34556[(7)] = inst_34530__$1);

return statearr_34556;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34557_36868 = state_34552__$1;
(statearr_34557_36868[(1)] = (5));

} else {
var statearr_34558_36869 = state_34552__$1;
(statearr_34558_36869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (6))){
var inst_34537 = (state_34552[(8)]);
var inst_34530 = (state_34552[(7)]);
var inst_34537__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34539 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34540 = [inst_34530,inst_34537__$1];
var inst_34541 = (new cljs.core.PersistentVector(null,2,(5),inst_34539,inst_34540,null));
var state_34552__$1 = (function (){var statearr_34559 = state_34552;
(statearr_34559[(8)] = inst_34537__$1);

return statearr_34559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34552__$1,(8),jobs,inst_34541);
} else {
if((state_val_34553 === (3))){
var inst_34550 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34552__$1,inst_34550);
} else {
if((state_val_34553 === (2))){
var state_34552__$1 = state_34552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34552__$1,(4),from);
} else {
if((state_val_34553 === (9))){
var inst_34545 = (state_34552[(2)]);
var state_34552__$1 = (function (){var statearr_34560 = state_34552;
(statearr_34560[(9)] = inst_34545);

return statearr_34560;
})();
var statearr_34561_36872 = state_34552__$1;
(statearr_34561_36872[(2)] = null);

(statearr_34561_36872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (5))){
var inst_34533 = cljs.core.async.close_BANG_(jobs);
var state_34552__$1 = state_34552;
var statearr_34562_36873 = state_34552__$1;
(statearr_34562_36873[(2)] = inst_34533);

(statearr_34562_36873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (8))){
var inst_34537 = (state_34552[(8)]);
var inst_34543 = (state_34552[(2)]);
var state_34552__$1 = (function (){var statearr_34563 = state_34552;
(statearr_34563[(10)] = inst_34543);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34552__$1,(9),results,inst_34537);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34564[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34564[(1)] = (1));

return statearr_34564;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34552){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34552);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34565){if((e34565 instanceof Object)){
var ex__34203__auto__ = e34565;
var statearr_34566_36876 = state_34552;
(statearr_34566_36876[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36877 = state_34552;
state_34552 = G__36877;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34567 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34567[(6)] = c__34267__auto___36864);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34605){
var state_val_34606 = (state_34605[(1)]);
if((state_val_34606 === (7))){
var inst_34601 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34607_36879 = state_34605__$1;
(statearr_34607_36879[(2)] = inst_34601);

(statearr_34607_36879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (20))){
var state_34605__$1 = state_34605;
var statearr_34608_36881 = state_34605__$1;
(statearr_34608_36881[(2)] = null);

(statearr_34608_36881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34609_36882 = state_34605__$1;
(statearr_34609_36882[(2)] = null);

(statearr_34609_36882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (4))){
var inst_34570 = (state_34605[(7)]);
var inst_34570__$1 = (state_34605[(2)]);
var inst_34571 = (inst_34570__$1 == null);
var state_34605__$1 = (function (){var statearr_34610 = state_34605;
(statearr_34610[(7)] = inst_34570__$1);

return statearr_34610;
})();
if(cljs.core.truth_(inst_34571)){
var statearr_34611_36884 = state_34605__$1;
(statearr_34611_36884[(1)] = (5));

} else {
var statearr_34612_36885 = state_34605__$1;
(statearr_34612_36885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (15))){
var inst_34583 = (state_34605[(8)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34605__$1,(18),to,inst_34583);
} else {
if((state_val_34606 === (21))){
var inst_34596 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34613_36886 = state_34605__$1;
(statearr_34613_36886[(2)] = inst_34596);

(statearr_34613_36886[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (13))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34614 = state_34605;
(statearr_34614[(9)] = inst_34598);

return statearr_34614;
})();
var statearr_34615_36888 = state_34605__$1;
(statearr_34615_36888[(2)] = null);

(statearr_34615_36888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (6))){
var inst_34570 = (state_34605[(7)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34605__$1,(11),inst_34570);
} else {
if((state_val_34606 === (17))){
var inst_34591 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
if(cljs.core.truth_(inst_34591)){
var statearr_34616_36890 = state_34605__$1;
(statearr_34616_36890[(1)] = (19));

} else {
var statearr_34617_36891 = state_34605__$1;
(statearr_34617_36891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (3))){
var inst_34603 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34605__$1,inst_34603);
} else {
if((state_val_34606 === (12))){
var inst_34580 = (state_34605[(10)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34605__$1,(14),inst_34580);
} else {
if((state_val_34606 === (2))){
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34605__$1,(4),results);
} else {
if((state_val_34606 === (19))){
var state_34605__$1 = state_34605;
var statearr_34618_36893 = state_34605__$1;
(statearr_34618_36893[(2)] = null);

(statearr_34618_36893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (11))){
var inst_34580 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34619 = state_34605;
(statearr_34619[(10)] = inst_34580);

return statearr_34619;
})();
var statearr_34620_36894 = state_34605__$1;
(statearr_34620_36894[(2)] = null);

(statearr_34620_36894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var state_34605__$1 = state_34605;
var statearr_34621_36896 = state_34605__$1;
(statearr_34621_36896[(2)] = null);

(statearr_34621_36896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var state_34605__$1 = state_34605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34622_36897 = state_34605__$1;
(statearr_34622_36897[(1)] = (8));

} else {
var statearr_34623_36898 = state_34605__$1;
(statearr_34623_36898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (14))){
var inst_34583 = (state_34605[(8)]);
var inst_34583__$1 = (state_34605[(2)]);
var inst_34584 = (inst_34583__$1 == null);
var inst_34585 = cljs.core.not(inst_34584);
var state_34605__$1 = (function (){var statearr_34624 = state_34605;
(statearr_34624[(8)] = inst_34583__$1);

return statearr_34624;
})();
if(inst_34585){
var statearr_34625_36900 = state_34605__$1;
(statearr_34625_36900[(1)] = (15));

} else {
var statearr_34626_36901 = state_34605__$1;
(statearr_34626_36901[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (16))){
var state_34605__$1 = state_34605;
var statearr_34627_36902 = state_34605__$1;
(statearr_34627_36902[(2)] = false);

(statearr_34627_36902[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34577 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34628_36903 = state_34605__$1;
(statearr_34628_36903[(2)] = inst_34577);

(statearr_34628_36903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (18))){
var inst_34588 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34629_36905 = state_34605__$1;
(statearr_34629_36905[(2)] = inst_34588);

(statearr_34629_36905[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34574 = cljs.core.async.close_BANG_(to);
var state_34605__$1 = state_34605;
var statearr_34630_36906 = state_34605__$1;
(statearr_34630_36906[(2)] = inst_34574);

(statearr_34630_36906[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34631[(1)] = (1));

return statearr_34631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34605){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34605);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34632){if((e34632 instanceof Object)){
var ex__34203__auto__ = e34632;
var statearr_34633_36908 = state_34605;
(statearr_34633_36908[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36909 = state_34605;
state_34605 = G__36909;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34634 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34634[(6)] = c__34267__auto__);

return statearr_34634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34636 = arguments.length;
switch (G__34636) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34641 = arguments.length;
switch (G__34641) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34648 = arguments.length;
switch (G__34648) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34267__auto___36919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34675){
var state_val_34677 = (state_34675[(1)]);
if((state_val_34677 === (7))){
var inst_34671 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34679_36920 = state_34675__$1;
(statearr_34679_36920[(2)] = inst_34671);

(statearr_34679_36920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (1))){
var state_34675__$1 = state_34675;
var statearr_34680_36922 = state_34675__$1;
(statearr_34680_36922[(2)] = null);

(statearr_34680_36922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (4))){
var inst_34652 = (state_34675[(7)]);
var inst_34652__$1 = (state_34675[(2)]);
var inst_34653 = (inst_34652__$1 == null);
var state_34675__$1 = (function (){var statearr_34681 = state_34675;
(statearr_34681[(7)] = inst_34652__$1);

return statearr_34681;
})();
if(cljs.core.truth_(inst_34653)){
var statearr_34682_36923 = state_34675__$1;
(statearr_34682_36923[(1)] = (5));

} else {
var statearr_34683_36924 = state_34675__$1;
(statearr_34683_36924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (13))){
var state_34675__$1 = state_34675;
var statearr_34684_36926 = state_34675__$1;
(statearr_34684_36926[(2)] = null);

(statearr_34684_36926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (6))){
var inst_34652 = (state_34675[(7)]);
var inst_34658 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34652) : p.call(null,inst_34652));
var state_34675__$1 = state_34675;
if(cljs.core.truth_(inst_34658)){
var statearr_34686_36927 = state_34675__$1;
(statearr_34686_36927[(1)] = (9));

} else {
var statearr_34687_36928 = state_34675__$1;
(statearr_34687_36928[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (3))){
var inst_34673 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34675__$1,inst_34673);
} else {
if((state_val_34677 === (12))){
var state_34675__$1 = state_34675;
var statearr_34688_36930 = state_34675__$1;
(statearr_34688_36930[(2)] = null);

(statearr_34688_36930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (2))){
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34675__$1,(4),ch);
} else {
if((state_val_34677 === (11))){
var inst_34652 = (state_34675[(7)]);
var inst_34662 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34675__$1,(8),inst_34662,inst_34652);
} else {
if((state_val_34677 === (9))){
var state_34675__$1 = state_34675;
var statearr_34690_36932 = state_34675__$1;
(statearr_34690_36932[(2)] = tc);

(statearr_34690_36932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (5))){
var inst_34655 = cljs.core.async.close_BANG_(tc);
var inst_34656 = cljs.core.async.close_BANG_(fc);
var state_34675__$1 = (function (){var statearr_34691 = state_34675;
(statearr_34691[(8)] = inst_34655);

return statearr_34691;
})();
var statearr_34692_36933 = state_34675__$1;
(statearr_34692_36933[(2)] = inst_34656);

(statearr_34692_36933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (14))){
var inst_34669 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34695_36935 = state_34675__$1;
(statearr_34695_36935[(2)] = inst_34669);

(statearr_34695_36935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (10))){
var state_34675__$1 = state_34675;
var statearr_34696_36936 = state_34675__$1;
(statearr_34696_36936[(2)] = fc);

(statearr_34696_36936[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (8))){
var inst_34664 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
if(cljs.core.truth_(inst_34664)){
var statearr_34697_36937 = state_34675__$1;
(statearr_34697_36937[(1)] = (12));

} else {
var statearr_34698_36939 = state_34675__$1;
(statearr_34698_36939[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_34702 = [null,null,null,null,null,null,null,null,null];
(statearr_34702[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34702[(1)] = (1));

return statearr_34702;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34675){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34675);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34703){if((e34703 instanceof Object)){
var ex__34203__auto__ = e34703;
var statearr_34704_36941 = state_34675;
(statearr_34704_36941[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36942 = state_34675;
state_34675 = G__36942;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34706 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34706[(6)] = c__34267__auto___36919);

return statearr_34706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34730){
var state_val_34731 = (state_34730[(1)]);
if((state_val_34731 === (7))){
var inst_34726 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34732_36944 = state_34730__$1;
(statearr_34732_36944[(2)] = inst_34726);

(statearr_34732_36944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (1))){
var inst_34707 = init;
var state_34730__$1 = (function (){var statearr_34733 = state_34730;
(statearr_34733[(7)] = inst_34707);

return statearr_34733;
})();
var statearr_34737_36946 = state_34730__$1;
(statearr_34737_36946[(2)] = null);

(statearr_34737_36946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (4))){
var inst_34710 = (state_34730[(8)]);
var inst_34710__$1 = (state_34730[(2)]);
var inst_34711 = (inst_34710__$1 == null);
var state_34730__$1 = (function (){var statearr_34738 = state_34730;
(statearr_34738[(8)] = inst_34710__$1);

return statearr_34738;
})();
if(cljs.core.truth_(inst_34711)){
var statearr_34739_36947 = state_34730__$1;
(statearr_34739_36947[(1)] = (5));

} else {
var statearr_34740_36949 = state_34730__$1;
(statearr_34740_36949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (6))){
var inst_34710 = (state_34730[(8)]);
var inst_34714 = (state_34730[(9)]);
var inst_34707 = (state_34730[(7)]);
var inst_34714__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34707,inst_34710) : f.call(null,inst_34707,inst_34710));
var inst_34715 = cljs.core.reduced_QMARK_(inst_34714__$1);
var state_34730__$1 = (function (){var statearr_34741 = state_34730;
(statearr_34741[(9)] = inst_34714__$1);

return statearr_34741;
})();
if(inst_34715){
var statearr_34742_36950 = state_34730__$1;
(statearr_34742_36950[(1)] = (8));

} else {
var statearr_34743_36952 = state_34730__$1;
(statearr_34743_36952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (3))){
var inst_34728 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34730__$1,inst_34728);
} else {
if((state_val_34731 === (2))){
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34730__$1,(4),ch);
} else {
if((state_val_34731 === (9))){
var inst_34714 = (state_34730[(9)]);
var inst_34707 = inst_34714;
var state_34730__$1 = (function (){var statearr_34744 = state_34730;
(statearr_34744[(7)] = inst_34707);

return statearr_34744;
})();
var statearr_34745_36953 = state_34730__$1;
(statearr_34745_36953[(2)] = null);

(statearr_34745_36953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (5))){
var inst_34707 = (state_34730[(7)]);
var state_34730__$1 = state_34730;
var statearr_34746_36955 = state_34730__$1;
(statearr_34746_36955[(2)] = inst_34707);

(statearr_34746_36955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (10))){
var inst_34724 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34750_36956 = state_34730__$1;
(statearr_34750_36956[(2)] = inst_34724);

(statearr_34750_36956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (8))){
var inst_34714 = (state_34730[(9)]);
var inst_34717 = cljs.core.deref(inst_34714);
var state_34730__$1 = state_34730;
var statearr_34751_36958 = state_34730__$1;
(statearr_34751_36958[(2)] = inst_34717);

(statearr_34751_36958[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34200__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34200__auto____0 = (function (){
var statearr_34752 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34752[(0)] = cljs$core$async$reduce_$_state_machine__34200__auto__);

(statearr_34752[(1)] = (1));

return statearr_34752;
});
var cljs$core$async$reduce_$_state_machine__34200__auto____1 = (function (state_34730){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34730);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34753){if((e34753 instanceof Object)){
var ex__34203__auto__ = e34753;
var statearr_34754_36960 = state_34730;
(statearr_34754_36960[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36961 = state_34730;
state_34730 = G__36961;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34200__auto__ = function(state_34730){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34200__auto____1.call(this,state_34730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34200__auto____0;
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34200__auto____1;
return cljs$core$async$reduce_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34755 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34755[(6)] = c__34267__auto__);

return statearr_34755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34761){
var state_val_34762 = (state_34761[(1)]);
if((state_val_34762 === (1))){
var inst_34756 = cljs.core.async.reduce(f__$1,init,ch);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34761__$1,(2),inst_34756);
} else {
if((state_val_34762 === (2))){
var inst_34758 = (state_34761[(2)]);
var inst_34759 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34758) : f__$1.call(null,inst_34758));
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34761__$1,inst_34759);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34200__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34200__auto____0 = (function (){
var statearr_34763 = [null,null,null,null,null,null,null];
(statearr_34763[(0)] = cljs$core$async$transduce_$_state_machine__34200__auto__);

(statearr_34763[(1)] = (1));

return statearr_34763;
});
var cljs$core$async$transduce_$_state_machine__34200__auto____1 = (function (state_34761){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34761);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34764){if((e34764 instanceof Object)){
var ex__34203__auto__ = e34764;
var statearr_34765_36965 = state_34761;
(statearr_34765_36965[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36966 = state_34761;
state_34761 = G__36966;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34200__auto__ = function(state_34761){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34200__auto____1.call(this,state_34761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34200__auto____0;
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34200__auto____1;
return cljs$core$async$transduce_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34766 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34766[(6)] = c__34267__auto__);

return statearr_34766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34768 = arguments.length;
switch (G__34768) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (7))){
var inst_34782 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34802_36970 = state_34800__$1;
(statearr_34802_36970[(2)] = inst_34782);

(statearr_34802_36970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34769 = cljs.core.seq(coll);
var inst_34770 = inst_34769;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34770);

return statearr_34803;
})();
var statearr_34804_36972 = state_34800__$1;
(statearr_34804_36972[(2)] = null);

(statearr_34804_36972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (4))){
var inst_34770 = (state_34800[(7)]);
var inst_34780 = cljs.core.first(inst_34770);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34800__$1,(7),ch,inst_34780);
} else {
if((state_val_34801 === (13))){
var inst_34794 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34806_36974 = state_34800__$1;
(statearr_34806_36974[(2)] = inst_34794);

(statearr_34806_36974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34809_36975 = state_34800__$1;
(statearr_34809_36975[(1)] = (8));

} else {
var statearr_34810_36976 = state_34800__$1;
(statearr_34810_36976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (3))){
var inst_34798 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34800__$1,inst_34798);
} else {
if((state_val_34801 === (12))){
var state_34800__$1 = state_34800;
var statearr_34814_36978 = state_34800__$1;
(statearr_34814_36978[(2)] = null);

(statearr_34814_36978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34770 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34770)){
var statearr_34815_36979 = state_34800__$1;
(statearr_34815_36979[(1)] = (4));

} else {
var statearr_34816_36980 = state_34800__$1;
(statearr_34816_36980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34817_36982 = state_34800__$1;
(statearr_34817_36982[(2)] = inst_34791);

(statearr_34817_36982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34818_36983 = state_34800__$1;
(statearr_34818_36983[(1)] = (11));

} else {
var statearr_34819_36984 = state_34800__$1;
(statearr_34819_36984[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34770 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34820_36985 = state_34800__$1;
(statearr_34820_36985[(2)] = inst_34770);

(statearr_34820_36985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34821_36987 = state_34800__$1;
(statearr_34821_36987[(2)] = inst_34796);

(statearr_34821_36987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34770 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34770);
var inst_34770__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34822 = state_34800;
(statearr_34822[(7)] = inst_34770__$1);

return statearr_34822;
})();
var statearr_34823_36988 = state_34800__$1;
(statearr_34823_36988[(2)] = null);

(statearr_34823_36988[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_34827 = [null,null,null,null,null,null,null,null];
(statearr_34827[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34827[(1)] = (1));

return statearr_34827;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34800){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34800);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34828){if((e34828 instanceof Object)){
var ex__34203__auto__ = e34828;
var statearr_34829_36990 = state_34800;
(statearr_34829_36990[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36992 = state_34800;
state_34800 = G__36992;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34833 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34833[(6)] = c__34267__auto__);

return statearr_34833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34834 = (function (ch,cs,meta34835){
this.ch = ch;
this.cs = cs;
this.meta34835 = meta34835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34836,meta34835__$1){
var self__ = this;
var _34836__$1 = this;
return (new cljs.core.async.t_cljs$core$async34834(self__.ch,self__.cs,meta34835__$1));
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34836){
var self__ = this;
var _34836__$1 = this;
return self__.meta34835;
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34835","meta34835",783644828,null)], null);
}));

(cljs.core.async.t_cljs$core$async34834.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34834");

(cljs.core.async.t_cljs$core$async34834.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34834");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34834.
 */
cljs.core.async.__GT_t_cljs$core$async34834 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34834(ch__$1,cs__$1,meta34835){
return (new cljs.core.async.t_cljs$core$async34834(ch__$1,cs__$1,meta34835));
});

}

return (new cljs.core.async.t_cljs$core$async34834(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34267__auto___37001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34977){
var state_val_34980 = (state_34977[(1)]);
if((state_val_34980 === (7))){
var inst_34973 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_34985_37002 = state_34977__$1;
(statearr_34985_37002[(2)] = inst_34973);

(statearr_34985_37002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (20))){
var inst_34870 = (state_34977[(7)]);
var inst_34882 = cljs.core.first(inst_34870);
var inst_34883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(0),null);
var inst_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(1),null);
var state_34977__$1 = (function (){var statearr_34986 = state_34977;
(statearr_34986[(8)] = inst_34883);

return statearr_34986;
})();
if(cljs.core.truth_(inst_34884)){
var statearr_34987_37004 = state_34977__$1;
(statearr_34987_37004[(1)] = (22));

} else {
var statearr_34988_37005 = state_34977__$1;
(statearr_34988_37005[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (27))){
var inst_34914 = (state_34977[(9)]);
var inst_34919 = (state_34977[(10)]);
var inst_34912 = (state_34977[(11)]);
var inst_34839 = (state_34977[(12)]);
var inst_34919__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34912,inst_34914);
var inst_34920 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34919__$1,inst_34839,done);
var state_34977__$1 = (function (){var statearr_34989 = state_34977;
(statearr_34989[(10)] = inst_34919__$1);

return statearr_34989;
})();
if(cljs.core.truth_(inst_34920)){
var statearr_34990_37007 = state_34977__$1;
(statearr_34990_37007[(1)] = (30));

} else {
var statearr_34991_37008 = state_34977__$1;
(statearr_34991_37008[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (1))){
var state_34977__$1 = state_34977;
var statearr_34992_37010 = state_34977__$1;
(statearr_34992_37010[(2)] = null);

(statearr_34992_37010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (24))){
var inst_34870 = (state_34977[(7)]);
var inst_34889 = (state_34977[(2)]);
var inst_34890 = cljs.core.next(inst_34870);
var inst_34848 = inst_34890;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34977__$1 = (function (){var statearr_34993 = state_34977;
(statearr_34993[(13)] = inst_34848);

(statearr_34993[(14)] = inst_34849);

(statearr_34993[(15)] = inst_34851);

(statearr_34993[(16)] = inst_34850);

(statearr_34993[(17)] = inst_34889);

return statearr_34993;
})();
var statearr_34996_37012 = state_34977__$1;
(statearr_34996_37012[(2)] = null);

(statearr_34996_37012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (39))){
var state_34977__$1 = state_34977;
var statearr_35003_37013 = state_34977__$1;
(statearr_35003_37013[(2)] = null);

(statearr_35003_37013[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (4))){
var inst_34839 = (state_34977[(12)]);
var inst_34839__$1 = (state_34977[(2)]);
var inst_34840 = (inst_34839__$1 == null);
var state_34977__$1 = (function (){var statearr_35005 = state_34977;
(statearr_35005[(12)] = inst_34839__$1);

return statearr_35005;
})();
if(cljs.core.truth_(inst_34840)){
var statearr_35006_37015 = state_34977__$1;
(statearr_35006_37015[(1)] = (5));

} else {
var statearr_35007_37016 = state_34977__$1;
(statearr_35007_37016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (15))){
var inst_34848 = (state_34977[(13)]);
var inst_34849 = (state_34977[(14)]);
var inst_34851 = (state_34977[(15)]);
var inst_34850 = (state_34977[(16)]);
var inst_34866 = (state_34977[(2)]);
var inst_34867 = (inst_34851 + (1));
var tmp34998 = inst_34848;
var tmp35000 = inst_34849;
var tmp35001 = inst_34850;
var inst_34848__$1 = tmp34998;
var inst_34849__$1 = tmp35000;
var inst_34850__$1 = tmp35001;
var inst_34851__$1 = inst_34867;
var state_34977__$1 = (function (){var statearr_35008 = state_34977;
(statearr_35008[(13)] = inst_34848__$1);

(statearr_35008[(18)] = inst_34866);

(statearr_35008[(14)] = inst_34849__$1);

(statearr_35008[(15)] = inst_34851__$1);

(statearr_35008[(16)] = inst_34850__$1);

return statearr_35008;
})();
var statearr_35009_37018 = state_34977__$1;
(statearr_35009_37018[(2)] = null);

(statearr_35009_37018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (21))){
var inst_34893 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35013_37020 = state_34977__$1;
(statearr_35013_37020[(2)] = inst_34893);

(statearr_35013_37020[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (31))){
var inst_34919 = (state_34977[(10)]);
var inst_34923 = done(null);
var inst_34924 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34919);
var state_34977__$1 = (function (){var statearr_35016 = state_34977;
(statearr_35016[(19)] = inst_34923);

return statearr_35016;
})();
var statearr_35017_37021 = state_34977__$1;
(statearr_35017_37021[(2)] = inst_34924);

(statearr_35017_37021[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (32))){
var inst_34914 = (state_34977[(9)]);
var inst_34913 = (state_34977[(20)]);
var inst_34912 = (state_34977[(11)]);
var inst_34911 = (state_34977[(21)]);
var inst_34928 = (state_34977[(2)]);
var inst_34929 = (inst_34914 + (1));
var tmp35010 = inst_34913;
var tmp35011 = inst_34912;
var tmp35012 = inst_34911;
var inst_34911__$1 = tmp35012;
var inst_34912__$1 = tmp35011;
var inst_34913__$1 = tmp35010;
var inst_34914__$1 = inst_34929;
var state_34977__$1 = (function (){var statearr_35022 = state_34977;
(statearr_35022[(9)] = inst_34914__$1);

(statearr_35022[(20)] = inst_34913__$1);

(statearr_35022[(22)] = inst_34928);

(statearr_35022[(11)] = inst_34912__$1);

(statearr_35022[(21)] = inst_34911__$1);

return statearr_35022;
})();
var statearr_35023_37024 = state_34977__$1;
(statearr_35023_37024[(2)] = null);

(statearr_35023_37024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (40))){
var inst_34943 = (state_34977[(23)]);
var inst_34948 = done(null);
var inst_34949 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34943);
var state_34977__$1 = (function (){var statearr_35025 = state_34977;
(statearr_35025[(24)] = inst_34948);

return statearr_35025;
})();
var statearr_35028_37025 = state_34977__$1;
(statearr_35028_37025[(2)] = inst_34949);

(statearr_35028_37025[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (33))){
var inst_34932 = (state_34977[(25)]);
var inst_34934 = cljs.core.chunked_seq_QMARK_(inst_34932);
var state_34977__$1 = state_34977;
if(inst_34934){
var statearr_35030_37027 = state_34977__$1;
(statearr_35030_37027[(1)] = (36));

} else {
var statearr_35031_37028 = state_34977__$1;
(statearr_35031_37028[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (13))){
var inst_34860 = (state_34977[(26)]);
var inst_34863 = cljs.core.async.close_BANG_(inst_34860);
var state_34977__$1 = state_34977;
var statearr_35045_37029 = state_34977__$1;
(statearr_35045_37029[(2)] = inst_34863);

(statearr_35045_37029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (22))){
var inst_34883 = (state_34977[(8)]);
var inst_34886 = cljs.core.async.close_BANG_(inst_34883);
var state_34977__$1 = state_34977;
var statearr_35048_37031 = state_34977__$1;
(statearr_35048_37031[(2)] = inst_34886);

(statearr_35048_37031[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (36))){
var inst_34932 = (state_34977[(25)]);
var inst_34937 = cljs.core.chunk_first(inst_34932);
var inst_34938 = cljs.core.chunk_rest(inst_34932);
var inst_34939 = cljs.core.count(inst_34937);
var inst_34911 = inst_34938;
var inst_34912 = inst_34937;
var inst_34913 = inst_34939;
var inst_34914 = (0);
var state_34977__$1 = (function (){var statearr_35051 = state_34977;
(statearr_35051[(9)] = inst_34914);

(statearr_35051[(20)] = inst_34913);

(statearr_35051[(11)] = inst_34912);

(statearr_35051[(21)] = inst_34911);

return statearr_35051;
})();
var statearr_35054_37033 = state_34977__$1;
(statearr_35054_37033[(2)] = null);

(statearr_35054_37033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (41))){
var inst_34932 = (state_34977[(25)]);
var inst_34951 = (state_34977[(2)]);
var inst_34952 = cljs.core.next(inst_34932);
var inst_34911 = inst_34952;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34977__$1 = (function (){var statearr_35055 = state_34977;
(statearr_35055[(27)] = inst_34951);

(statearr_35055[(9)] = inst_34914);

(statearr_35055[(20)] = inst_34913);

(statearr_35055[(11)] = inst_34912);

(statearr_35055[(21)] = inst_34911);

return statearr_35055;
})();
var statearr_35057_37035 = state_34977__$1;
(statearr_35057_37035[(2)] = null);

(statearr_35057_37035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (43))){
var state_34977__$1 = state_34977;
var statearr_35061_37036 = state_34977__$1;
(statearr_35061_37036[(2)] = null);

(statearr_35061_37036[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (29))){
var inst_34960 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35067_37038 = state_34977__$1;
(statearr_35067_37038[(2)] = inst_34960);

(statearr_35067_37038[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (44))){
var inst_34970 = (state_34977[(2)]);
var state_34977__$1 = (function (){var statearr_35071 = state_34977;
(statearr_35071[(28)] = inst_34970);

return statearr_35071;
})();
var statearr_35074_37039 = state_34977__$1;
(statearr_35074_37039[(2)] = null);

(statearr_35074_37039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (6))){
var inst_34903 = (state_34977[(29)]);
var inst_34902 = cljs.core.deref(cs);
var inst_34903__$1 = cljs.core.keys(inst_34902);
var inst_34904 = cljs.core.count(inst_34903__$1);
var inst_34905 = cljs.core.reset_BANG_(dctr,inst_34904);
var inst_34910 = cljs.core.seq(inst_34903__$1);
var inst_34911 = inst_34910;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34977__$1 = (function (){var statearr_35083 = state_34977;
(statearr_35083[(30)] = inst_34905);

(statearr_35083[(9)] = inst_34914);

(statearr_35083[(20)] = inst_34913);

(statearr_35083[(29)] = inst_34903__$1);

(statearr_35083[(11)] = inst_34912);

(statearr_35083[(21)] = inst_34911);

return statearr_35083;
})();
var statearr_35088_37041 = state_34977__$1;
(statearr_35088_37041[(2)] = null);

(statearr_35088_37041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (28))){
var inst_34932 = (state_34977[(25)]);
var inst_34911 = (state_34977[(21)]);
var inst_34932__$1 = cljs.core.seq(inst_34911);
var state_34977__$1 = (function (){var statearr_35092 = state_34977;
(statearr_35092[(25)] = inst_34932__$1);

return statearr_35092;
})();
if(inst_34932__$1){
var statearr_35096_37043 = state_34977__$1;
(statearr_35096_37043[(1)] = (33));

} else {
var statearr_35098_37044 = state_34977__$1;
(statearr_35098_37044[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (25))){
var inst_34914 = (state_34977[(9)]);
var inst_34913 = (state_34977[(20)]);
var inst_34916 = (inst_34914 < inst_34913);
var inst_34917 = inst_34916;
var state_34977__$1 = state_34977;
if(cljs.core.truth_(inst_34917)){
var statearr_35104_37046 = state_34977__$1;
(statearr_35104_37046[(1)] = (27));

} else {
var statearr_35105_37047 = state_34977__$1;
(statearr_35105_37047[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (34))){
var state_34977__$1 = state_34977;
var statearr_35122_37048 = state_34977__$1;
(statearr_35122_37048[(2)] = null);

(statearr_35122_37048[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (17))){
var state_34977__$1 = state_34977;
var statearr_35127_37049 = state_34977__$1;
(statearr_35127_37049[(2)] = null);

(statearr_35127_37049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (3))){
var inst_34975 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34977__$1,inst_34975);
} else {
if((state_val_34980 === (12))){
var inst_34898 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35134_37051 = state_34977__$1;
(statearr_35134_37051[(2)] = inst_34898);

(statearr_35134_37051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (2))){
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34977__$1,(4),ch);
} else {
if((state_val_34980 === (23))){
var state_34977__$1 = state_34977;
var statearr_35143_37053 = state_34977__$1;
(statearr_35143_37053[(2)] = null);

(statearr_35143_37053[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (35))){
var inst_34958 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35150_37054 = state_34977__$1;
(statearr_35150_37054[(2)] = inst_34958);

(statearr_35150_37054[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (19))){
var inst_34870 = (state_34977[(7)]);
var inst_34874 = cljs.core.chunk_first(inst_34870);
var inst_34875 = cljs.core.chunk_rest(inst_34870);
var inst_34876 = cljs.core.count(inst_34874);
var inst_34848 = inst_34875;
var inst_34849 = inst_34874;
var inst_34850 = inst_34876;
var inst_34851 = (0);
var state_34977__$1 = (function (){var statearr_35151 = state_34977;
(statearr_35151[(13)] = inst_34848);

(statearr_35151[(14)] = inst_34849);

(statearr_35151[(15)] = inst_34851);

(statearr_35151[(16)] = inst_34850);

return statearr_35151;
})();
var statearr_35152_37056 = state_34977__$1;
(statearr_35152_37056[(2)] = null);

(statearr_35152_37056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (11))){
var inst_34848 = (state_34977[(13)]);
var inst_34870 = (state_34977[(7)]);
var inst_34870__$1 = cljs.core.seq(inst_34848);
var state_34977__$1 = (function (){var statearr_35153 = state_34977;
(statearr_35153[(7)] = inst_34870__$1);

return statearr_35153;
})();
if(inst_34870__$1){
var statearr_35154_37058 = state_34977__$1;
(statearr_35154_37058[(1)] = (16));

} else {
var statearr_35155_37059 = state_34977__$1;
(statearr_35155_37059[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (9))){
var inst_34900 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35158_37060 = state_34977__$1;
(statearr_35158_37060[(2)] = inst_34900);

(statearr_35158_37060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (5))){
var inst_34846 = cljs.core.deref(cs);
var inst_34847 = cljs.core.seq(inst_34846);
var inst_34848 = inst_34847;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34977__$1 = (function (){var statearr_35159 = state_34977;
(statearr_35159[(13)] = inst_34848);

(statearr_35159[(14)] = inst_34849);

(statearr_35159[(15)] = inst_34851);

(statearr_35159[(16)] = inst_34850);

return statearr_35159;
})();
var statearr_35160_37062 = state_34977__$1;
(statearr_35160_37062[(2)] = null);

(statearr_35160_37062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (14))){
var state_34977__$1 = state_34977;
var statearr_35163_37063 = state_34977__$1;
(statearr_35163_37063[(2)] = null);

(statearr_35163_37063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (45))){
var inst_34967 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35172_37065 = state_34977__$1;
(statearr_35172_37065[(2)] = inst_34967);

(statearr_35172_37065[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (26))){
var inst_34903 = (state_34977[(29)]);
var inst_34962 = (state_34977[(2)]);
var inst_34964 = cljs.core.seq(inst_34903);
var state_34977__$1 = (function (){var statearr_35188 = state_34977;
(statearr_35188[(31)] = inst_34962);

return statearr_35188;
})();
if(inst_34964){
var statearr_35189_37066 = state_34977__$1;
(statearr_35189_37066[(1)] = (42));

} else {
var statearr_35190_37068 = state_34977__$1;
(statearr_35190_37068[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (16))){
var inst_34870 = (state_34977[(7)]);
var inst_34872 = cljs.core.chunked_seq_QMARK_(inst_34870);
var state_34977__$1 = state_34977;
if(inst_34872){
var statearr_35193_37069 = state_34977__$1;
(statearr_35193_37069[(1)] = (19));

} else {
var statearr_35194_37070 = state_34977__$1;
(statearr_35194_37070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (38))){
var inst_34955 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35197_37071 = state_34977__$1;
(statearr_35197_37071[(2)] = inst_34955);

(statearr_35197_37071[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (30))){
var state_34977__$1 = state_34977;
var statearr_35198_37073 = state_34977__$1;
(statearr_35198_37073[(2)] = null);

(statearr_35198_37073[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (10))){
var inst_34849 = (state_34977[(14)]);
var inst_34851 = (state_34977[(15)]);
var inst_34859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34849,inst_34851);
var inst_34860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(0),null);
var inst_34861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(1),null);
var state_34977__$1 = (function (){var statearr_35200 = state_34977;
(statearr_35200[(26)] = inst_34860);

return statearr_35200;
})();
if(cljs.core.truth_(inst_34861)){
var statearr_35201_37075 = state_34977__$1;
(statearr_35201_37075[(1)] = (13));

} else {
var statearr_35205_37076 = state_34977__$1;
(statearr_35205_37076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (18))){
var inst_34896 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35210_37077 = state_34977__$1;
(statearr_35210_37077[(2)] = inst_34896);

(statearr_35210_37077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (42))){
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34977__$1,(45),dchan);
} else {
if((state_val_34980 === (37))){
var inst_34932 = (state_34977[(25)]);
var inst_34943 = (state_34977[(23)]);
var inst_34839 = (state_34977[(12)]);
var inst_34943__$1 = cljs.core.first(inst_34932);
var inst_34944 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34943__$1,inst_34839,done);
var state_34977__$1 = (function (){var statearr_35217 = state_34977;
(statearr_35217[(23)] = inst_34943__$1);

return statearr_35217;
})();
if(cljs.core.truth_(inst_34944)){
var statearr_35224_37078 = state_34977__$1;
(statearr_35224_37078[(1)] = (39));

} else {
var statearr_35225_37079 = state_34977__$1;
(statearr_35225_37079[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34980 === (8))){
var inst_34851 = (state_34977[(15)]);
var inst_34850 = (state_34977[(16)]);
var inst_34853 = (inst_34851 < inst_34850);
var inst_34854 = inst_34853;
var state_34977__$1 = state_34977;
if(cljs.core.truth_(inst_34854)){
var statearr_35233_37082 = state_34977__$1;
(statearr_35233_37082[(1)] = (10));

} else {
var statearr_35234_37088 = state_34977__$1;
(statearr_35234_37088[(1)] = (11));

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34200__auto__ = null;
var cljs$core$async$mult_$_state_machine__34200__auto____0 = (function (){
var statearr_35243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35243[(0)] = cljs$core$async$mult_$_state_machine__34200__auto__);

(statearr_35243[(1)] = (1));

return statearr_35243;
});
var cljs$core$async$mult_$_state_machine__34200__auto____1 = (function (state_34977){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34977);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35249){if((e35249 instanceof Object)){
var ex__34203__auto__ = e35249;
var statearr_35251_37090 = state_34977;
(statearr_35251_37090[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35249;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37091 = state_34977;
state_34977 = G__37091;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34200__auto__ = function(state_34977){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34200__auto____1.call(this,state_34977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34200__auto____0;
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34200__auto____1;
return cljs$core$async$mult_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35258 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35258[(6)] = c__34267__auto___37001);

return statearr_35258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35271 = arguments.length;
switch (G__35271) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37098 = arguments.length;
var i__4790__auto___37099 = (0);
while(true){
if((i__4790__auto___37099 < len__4789__auto___37098)){
args__4795__auto__.push((arguments[i__4790__auto___37099]));

var G__37100 = (i__4790__auto___37099 + (1));
i__4790__auto___37099 = G__37100;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35358){
var map__35361 = p__35358;
var map__35361__$1 = (((((!((map__35361 == null))))?(((((map__35361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35361):map__35361);
var opts = map__35361__$1;
var statearr_35366_37103 = state;
(statearr_35366_37103[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35369_37104 = state;
(statearr_35369_37104[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35372_37106 = state;
(statearr_35372_37106[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35354){
var G__35355 = cljs.core.first(seq35354);
var seq35354__$1 = cljs.core.next(seq35354);
var G__35356 = cljs.core.first(seq35354__$1);
var seq35354__$2 = cljs.core.next(seq35354__$1);
var G__35357 = cljs.core.first(seq35354__$2);
var seq35354__$3 = cljs.core.next(seq35354__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35355,G__35356,G__35357,seq35354__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35396 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35397){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35397 = meta35397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35398,meta35397__$1){
var self__ = this;
var _35398__$1 = this;
return (new cljs.core.async.t_cljs$core$async35396(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35397__$1));
}));

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35398){
var self__ = this;
var _35398__$1 = this;
return self__.meta35397;
}));

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35396.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35397","meta35397",-575033888,null)], null);
}));

(cljs.core.async.t_cljs$core$async35396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35396");

(cljs.core.async.t_cljs$core$async35396.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35396.
 */
cljs.core.async.__GT_t_cljs$core$async35396 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35396(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35397){
return (new cljs.core.async.t_cljs$core$async35396(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35397));
});

}

return (new cljs.core.async.t_cljs$core$async35396(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35561){
var state_val_35562 = (state_35561[(1)]);
if((state_val_35562 === (7))){
var inst_35462 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
var statearr_35575_37130 = state_35561__$1;
(statearr_35575_37130[(2)] = inst_35462);

(statearr_35575_37130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (20))){
var inst_35476 = (state_35561[(7)]);
var state_35561__$1 = state_35561;
var statearr_35581_37132 = state_35561__$1;
(statearr_35581_37132[(2)] = inst_35476);

(statearr_35581_37132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (27))){
var state_35561__$1 = state_35561;
var statearr_35586_37137 = state_35561__$1;
(statearr_35586_37137[(2)] = null);

(statearr_35586_37137[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (1))){
var inst_35449 = (state_35561[(8)]);
var inst_35449__$1 = calc_state();
var inst_35451 = (inst_35449__$1 == null);
var inst_35452 = cljs.core.not(inst_35451);
var state_35561__$1 = (function (){var statearr_35593 = state_35561;
(statearr_35593[(8)] = inst_35449__$1);

return statearr_35593;
})();
if(inst_35452){
var statearr_35597_37143 = state_35561__$1;
(statearr_35597_37143[(1)] = (2));

} else {
var statearr_35599_37146 = state_35561__$1;
(statearr_35599_37146[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (24))){
var inst_35511 = (state_35561[(9)]);
var inst_35502 = (state_35561[(10)]);
var inst_35527 = (state_35561[(11)]);
var inst_35527__$1 = (inst_35502.cljs$core$IFn$_invoke$arity$1 ? inst_35502.cljs$core$IFn$_invoke$arity$1(inst_35511) : inst_35502.call(null,inst_35511));
var state_35561__$1 = (function (){var statearr_35603 = state_35561;
(statearr_35603[(11)] = inst_35527__$1);

return statearr_35603;
})();
if(cljs.core.truth_(inst_35527__$1)){
var statearr_35607_37148 = state_35561__$1;
(statearr_35607_37148[(1)] = (29));

} else {
var statearr_35609_37149 = state_35561__$1;
(statearr_35609_37149[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (4))){
var inst_35465 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
if(cljs.core.truth_(inst_35465)){
var statearr_35611_37150 = state_35561__$1;
(statearr_35611_37150[(1)] = (8));

} else {
var statearr_35612_37153 = state_35561__$1;
(statearr_35612_37153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (15))){
var inst_35496 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
if(cljs.core.truth_(inst_35496)){
var statearr_35617_37154 = state_35561__$1;
(statearr_35617_37154[(1)] = (19));

} else {
var statearr_35618_37155 = state_35561__$1;
(statearr_35618_37155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (21))){
var inst_35501 = (state_35561[(12)]);
var inst_35501__$1 = (state_35561[(2)]);
var inst_35502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35501__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35501__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35501__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35561__$1 = (function (){var statearr_35625 = state_35561;
(statearr_35625[(13)] = inst_35503);

(statearr_35625[(12)] = inst_35501__$1);

(statearr_35625[(10)] = inst_35502);

return statearr_35625;
})();
return cljs.core.async.ioc_alts_BANG_(state_35561__$1,(22),inst_35504);
} else {
if((state_val_35562 === (31))){
var inst_35537 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
if(cljs.core.truth_(inst_35537)){
var statearr_35631_37163 = state_35561__$1;
(statearr_35631_37163[(1)] = (32));

} else {
var statearr_35633_37164 = state_35561__$1;
(statearr_35633_37164[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (32))){
var inst_35510 = (state_35561[(14)]);
var state_35561__$1 = state_35561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35561__$1,(35),out,inst_35510);
} else {
if((state_val_35562 === (33))){
var inst_35501 = (state_35561[(12)]);
var inst_35476 = inst_35501;
var state_35561__$1 = (function (){var statearr_35642 = state_35561;
(statearr_35642[(7)] = inst_35476);

return statearr_35642;
})();
var statearr_35643_37169 = state_35561__$1;
(statearr_35643_37169[(2)] = null);

(statearr_35643_37169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (13))){
var inst_35476 = (state_35561[(7)]);
var inst_35485 = inst_35476.cljs$lang$protocol_mask$partition0$;
var inst_35486 = (inst_35485 & (64));
var inst_35487 = inst_35476.cljs$core$ISeq$;
var inst_35488 = (cljs.core.PROTOCOL_SENTINEL === inst_35487);
var inst_35489 = ((inst_35486) || (inst_35488));
var state_35561__$1 = state_35561;
if(cljs.core.truth_(inst_35489)){
var statearr_35646_37171 = state_35561__$1;
(statearr_35646_37171[(1)] = (16));

} else {
var statearr_35647_37172 = state_35561__$1;
(statearr_35647_37172[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (22))){
var inst_35511 = (state_35561[(9)]);
var inst_35510 = (state_35561[(14)]);
var inst_35509 = (state_35561[(2)]);
var inst_35510__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35509,(0),null);
var inst_35511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35509,(1),null);
var inst_35513 = (inst_35510__$1 == null);
var inst_35514 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35511__$1,change);
var inst_35515 = ((inst_35513) || (inst_35514));
var state_35561__$1 = (function (){var statearr_35656 = state_35561;
(statearr_35656[(9)] = inst_35511__$1);

(statearr_35656[(14)] = inst_35510__$1);

return statearr_35656;
})();
if(cljs.core.truth_(inst_35515)){
var statearr_35660_37184 = state_35561__$1;
(statearr_35660_37184[(1)] = (23));

} else {
var statearr_35661_37186 = state_35561__$1;
(statearr_35661_37186[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (36))){
var inst_35501 = (state_35561[(12)]);
var inst_35476 = inst_35501;
var state_35561__$1 = (function (){var statearr_35665 = state_35561;
(statearr_35665[(7)] = inst_35476);

return statearr_35665;
})();
var statearr_35669_37187 = state_35561__$1;
(statearr_35669_37187[(2)] = null);

(statearr_35669_37187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (29))){
var inst_35527 = (state_35561[(11)]);
var state_35561__$1 = state_35561;
var statearr_35676_37188 = state_35561__$1;
(statearr_35676_37188[(2)] = inst_35527);

(statearr_35676_37188[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (6))){
var state_35561__$1 = state_35561;
var statearr_35680_37191 = state_35561__$1;
(statearr_35680_37191[(2)] = false);

(statearr_35680_37191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (28))){
var inst_35523 = (state_35561[(2)]);
var inst_35524 = calc_state();
var inst_35476 = inst_35524;
var state_35561__$1 = (function (){var statearr_35685 = state_35561;
(statearr_35685[(7)] = inst_35476);

(statearr_35685[(15)] = inst_35523);

return statearr_35685;
})();
var statearr_35688_37194 = state_35561__$1;
(statearr_35688_37194[(2)] = null);

(statearr_35688_37194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (25))){
var inst_35553 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
var statearr_35689_37195 = state_35561__$1;
(statearr_35689_37195[(2)] = inst_35553);

(statearr_35689_37195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (34))){
var inst_35551 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
var statearr_35690_37197 = state_35561__$1;
(statearr_35690_37197[(2)] = inst_35551);

(statearr_35690_37197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (17))){
var state_35561__$1 = state_35561;
var statearr_35692_37198 = state_35561__$1;
(statearr_35692_37198[(2)] = false);

(statearr_35692_37198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (3))){
var state_35561__$1 = state_35561;
var statearr_35697_37199 = state_35561__$1;
(statearr_35697_37199[(2)] = false);

(statearr_35697_37199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (12))){
var inst_35555 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35561__$1,inst_35555);
} else {
if((state_val_35562 === (2))){
var inst_35449 = (state_35561[(8)]);
var inst_35454 = inst_35449.cljs$lang$protocol_mask$partition0$;
var inst_35455 = (inst_35454 & (64));
var inst_35456 = inst_35449.cljs$core$ISeq$;
var inst_35457 = (cljs.core.PROTOCOL_SENTINEL === inst_35456);
var inst_35458 = ((inst_35455) || (inst_35457));
var state_35561__$1 = state_35561;
if(cljs.core.truth_(inst_35458)){
var statearr_35701_37208 = state_35561__$1;
(statearr_35701_37208[(1)] = (5));

} else {
var statearr_35702_37209 = state_35561__$1;
(statearr_35702_37209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (23))){
var inst_35510 = (state_35561[(14)]);
var inst_35517 = (inst_35510 == null);
var state_35561__$1 = state_35561;
if(cljs.core.truth_(inst_35517)){
var statearr_35703_37210 = state_35561__$1;
(statearr_35703_37210[(1)] = (26));

} else {
var statearr_35704_37211 = state_35561__$1;
(statearr_35704_37211[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (35))){
var inst_35541 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
if(cljs.core.truth_(inst_35541)){
var statearr_35705_37212 = state_35561__$1;
(statearr_35705_37212[(1)] = (36));

} else {
var statearr_35706_37215 = state_35561__$1;
(statearr_35706_37215[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (19))){
var inst_35476 = (state_35561[(7)]);
var inst_35498 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35476);
var state_35561__$1 = state_35561;
var statearr_35707_37221 = state_35561__$1;
(statearr_35707_37221[(2)] = inst_35498);

(statearr_35707_37221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (11))){
var inst_35476 = (state_35561[(7)]);
var inst_35481 = (inst_35476 == null);
var inst_35482 = cljs.core.not(inst_35481);
var state_35561__$1 = state_35561;
if(inst_35482){
var statearr_35710_37223 = state_35561__$1;
(statearr_35710_37223[(1)] = (13));

} else {
var statearr_35711_37224 = state_35561__$1;
(statearr_35711_37224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (9))){
var inst_35449 = (state_35561[(8)]);
var state_35561__$1 = state_35561;
var statearr_35712_37225 = state_35561__$1;
(statearr_35712_37225[(2)] = inst_35449);

(statearr_35712_37225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (5))){
var state_35561__$1 = state_35561;
var statearr_35713_37228 = state_35561__$1;
(statearr_35713_37228[(2)] = true);

(statearr_35713_37228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (14))){
var state_35561__$1 = state_35561;
var statearr_35714_37229 = state_35561__$1;
(statearr_35714_37229[(2)] = false);

(statearr_35714_37229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (26))){
var inst_35511 = (state_35561[(9)]);
var inst_35520 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35511);
var state_35561__$1 = state_35561;
var statearr_35717_37231 = state_35561__$1;
(statearr_35717_37231[(2)] = inst_35520);

(statearr_35717_37231[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (16))){
var state_35561__$1 = state_35561;
var statearr_35718_37232 = state_35561__$1;
(statearr_35718_37232[(2)] = true);

(statearr_35718_37232[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (38))){
var inst_35547 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
var statearr_35719_37234 = state_35561__$1;
(statearr_35719_37234[(2)] = inst_35547);

(statearr_35719_37234[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (30))){
var inst_35503 = (state_35561[(13)]);
var inst_35511 = (state_35561[(9)]);
var inst_35502 = (state_35561[(10)]);
var inst_35531 = cljs.core.empty_QMARK_(inst_35502);
var inst_35533 = (inst_35503.cljs$core$IFn$_invoke$arity$1 ? inst_35503.cljs$core$IFn$_invoke$arity$1(inst_35511) : inst_35503.call(null,inst_35511));
var inst_35534 = cljs.core.not(inst_35533);
var inst_35535 = ((inst_35531) && (inst_35534));
var state_35561__$1 = state_35561;
var statearr_35720_37237 = state_35561__$1;
(statearr_35720_37237[(2)] = inst_35535);

(statearr_35720_37237[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (10))){
var inst_35449 = (state_35561[(8)]);
var inst_35470 = (state_35561[(2)]);
var inst_35472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35470,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35470,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35470,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35476 = inst_35449;
var state_35561__$1 = (function (){var statearr_35723 = state_35561;
(statearr_35723[(7)] = inst_35476);

(statearr_35723[(16)] = inst_35475);

(statearr_35723[(17)] = inst_35472);

(statearr_35723[(18)] = inst_35473);

return statearr_35723;
})();
var statearr_35724_37242 = state_35561__$1;
(statearr_35724_37242[(2)] = null);

(statearr_35724_37242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (18))){
var inst_35493 = (state_35561[(2)]);
var state_35561__$1 = state_35561;
var statearr_35727_37243 = state_35561__$1;
(statearr_35727_37243[(2)] = inst_35493);

(statearr_35727_37243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (37))){
var state_35561__$1 = state_35561;
var statearr_35728_37246 = state_35561__$1;
(statearr_35728_37246[(2)] = null);

(statearr_35728_37246[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35562 === (8))){
var inst_35449 = (state_35561[(8)]);
var inst_35467 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35449);
var state_35561__$1 = state_35561;
var statearr_35731_37252 = state_35561__$1;
(statearr_35731_37252[(2)] = inst_35467);

(statearr_35731_37252[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__34200__auto__ = null;
var cljs$core$async$mix_$_state_machine__34200__auto____0 = (function (){
var statearr_35734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35734[(0)] = cljs$core$async$mix_$_state_machine__34200__auto__);

(statearr_35734[(1)] = (1));

return statearr_35734;
});
var cljs$core$async$mix_$_state_machine__34200__auto____1 = (function (state_35561){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35561);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35735){if((e35735 instanceof Object)){
var ex__34203__auto__ = e35735;
var statearr_35736_37254 = state_35561;
(statearr_35736_37254[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37257 = state_35561;
state_35561 = G__37257;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34200__auto__ = function(state_35561){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34200__auto____1.call(this,state_35561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34200__auto____0;
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34200__auto____1;
return cljs$core$async$mix_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35737 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35737[(6)] = c__34267__auto___37129);

return statearr_35737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35753 = arguments.length;
switch (G__35753) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35780 = arguments.length;
switch (G__35780) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35765_SHARP_){
if(cljs.core.truth_((p1__35765_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35765_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35765_SHARP_.call(null,topic)))){
return p1__35765_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35765_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35790 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35791){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35791 = meta35791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35792,meta35791__$1){
var self__ = this;
var _35792__$1 = this;
return (new cljs.core.async.t_cljs$core$async35790(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35791__$1));
}));

(cljs.core.async.t_cljs$core$async35790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35792){
var self__ = this;
var _35792__$1 = this;
return self__.meta35791;
}));

(cljs.core.async.t_cljs$core$async35790.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35790.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35790.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35790.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35790.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35790.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35790.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35791","meta35791",291633402,null)], null);
}));

(cljs.core.async.t_cljs$core$async35790.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35790");

(cljs.core.async.t_cljs$core$async35790.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35790");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35790.
 */
cljs.core.async.__GT_t_cljs$core$async35790 = (function cljs$core$async$__GT_t_cljs$core$async35790(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35791){
return (new cljs.core.async.t_cljs$core$async35790(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35791));
});

}

return (new cljs.core.async.t_cljs$core$async35790(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35876){
var state_val_35877 = (state_35876[(1)]);
if((state_val_35877 === (7))){
var inst_35872 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35881_37306 = state_35876__$1;
(statearr_35881_37306[(2)] = inst_35872);

(statearr_35881_37306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (20))){
var state_35876__$1 = state_35876;
var statearr_35882_37309 = state_35876__$1;
(statearr_35882_37309[(2)] = null);

(statearr_35882_37309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (1))){
var state_35876__$1 = state_35876;
var statearr_35885_37310 = state_35876__$1;
(statearr_35885_37310[(2)] = null);

(statearr_35885_37310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (24))){
var inst_35853 = (state_35876[(7)]);
var inst_35864 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35853);
var state_35876__$1 = state_35876;
var statearr_35887_37316 = state_35876__$1;
(statearr_35887_37316[(2)] = inst_35864);

(statearr_35887_37316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (4))){
var inst_35803 = (state_35876[(8)]);
var inst_35803__$1 = (state_35876[(2)]);
var inst_35804 = (inst_35803__$1 == null);
var state_35876__$1 = (function (){var statearr_35888 = state_35876;
(statearr_35888[(8)] = inst_35803__$1);

return statearr_35888;
})();
if(cljs.core.truth_(inst_35804)){
var statearr_35889_37319 = state_35876__$1;
(statearr_35889_37319[(1)] = (5));

} else {
var statearr_35891_37320 = state_35876__$1;
(statearr_35891_37320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (15))){
var inst_35847 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35896_37323 = state_35876__$1;
(statearr_35896_37323[(2)] = inst_35847);

(statearr_35896_37323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (21))){
var inst_35869 = (state_35876[(2)]);
var state_35876__$1 = (function (){var statearr_35899 = state_35876;
(statearr_35899[(9)] = inst_35869);

return statearr_35899;
})();
var statearr_35902_37324 = state_35876__$1;
(statearr_35902_37324[(2)] = null);

(statearr_35902_37324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (13))){
var inst_35828 = (state_35876[(10)]);
var inst_35830 = cljs.core.chunked_seq_QMARK_(inst_35828);
var state_35876__$1 = state_35876;
if(inst_35830){
var statearr_35903_37328 = state_35876__$1;
(statearr_35903_37328[(1)] = (16));

} else {
var statearr_35904_37331 = state_35876__$1;
(statearr_35904_37331[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (22))){
var inst_35860 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
if(cljs.core.truth_(inst_35860)){
var statearr_35905_37334 = state_35876__$1;
(statearr_35905_37334[(1)] = (23));

} else {
var statearr_35908_37336 = state_35876__$1;
(statearr_35908_37336[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (6))){
var inst_35803 = (state_35876[(8)]);
var inst_35853 = (state_35876[(7)]);
var inst_35855 = (state_35876[(11)]);
var inst_35853__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35803) : topic_fn.call(null,inst_35803));
var inst_35854 = cljs.core.deref(mults);
var inst_35855__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35854,inst_35853__$1);
var state_35876__$1 = (function (){var statearr_35910 = state_35876;
(statearr_35910[(7)] = inst_35853__$1);

(statearr_35910[(11)] = inst_35855__$1);

return statearr_35910;
})();
if(cljs.core.truth_(inst_35855__$1)){
var statearr_35911_37342 = state_35876__$1;
(statearr_35911_37342[(1)] = (19));

} else {
var statearr_35913_37343 = state_35876__$1;
(statearr_35913_37343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (25))){
var inst_35866 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35917_37346 = state_35876__$1;
(statearr_35917_37346[(2)] = inst_35866);

(statearr_35917_37346[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (17))){
var inst_35828 = (state_35876[(10)]);
var inst_35837 = cljs.core.first(inst_35828);
var inst_35838 = cljs.core.async.muxch_STAR_(inst_35837);
var inst_35839 = cljs.core.async.close_BANG_(inst_35838);
var inst_35841 = cljs.core.next(inst_35828);
var inst_35814 = inst_35841;
var inst_35815 = null;
var inst_35816 = (0);
var inst_35817 = (0);
var state_35876__$1 = (function (){var statearr_35918 = state_35876;
(statearr_35918[(12)] = inst_35817);

(statearr_35918[(13)] = inst_35815);

(statearr_35918[(14)] = inst_35814);

(statearr_35918[(15)] = inst_35839);

(statearr_35918[(16)] = inst_35816);

return statearr_35918;
})();
var statearr_35921_37349 = state_35876__$1;
(statearr_35921_37349[(2)] = null);

(statearr_35921_37349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (3))){
var inst_35874 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35876__$1,inst_35874);
} else {
if((state_val_35877 === (12))){
var inst_35849 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35924_37351 = state_35876__$1;
(statearr_35924_37351[(2)] = inst_35849);

(statearr_35924_37351[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (2))){
var state_35876__$1 = state_35876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35876__$1,(4),ch);
} else {
if((state_val_35877 === (23))){
var state_35876__$1 = state_35876;
var statearr_35926_37353 = state_35876__$1;
(statearr_35926_37353[(2)] = null);

(statearr_35926_37353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (19))){
var inst_35803 = (state_35876[(8)]);
var inst_35855 = (state_35876[(11)]);
var inst_35858 = cljs.core.async.muxch_STAR_(inst_35855);
var state_35876__$1 = state_35876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35876__$1,(22),inst_35858,inst_35803);
} else {
if((state_val_35877 === (11))){
var inst_35814 = (state_35876[(14)]);
var inst_35828 = (state_35876[(10)]);
var inst_35828__$1 = cljs.core.seq(inst_35814);
var state_35876__$1 = (function (){var statearr_35931 = state_35876;
(statearr_35931[(10)] = inst_35828__$1);

return statearr_35931;
})();
if(inst_35828__$1){
var statearr_35932_37358 = state_35876__$1;
(statearr_35932_37358[(1)] = (13));

} else {
var statearr_35933_37360 = state_35876__$1;
(statearr_35933_37360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (9))){
var inst_35851 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35934_37361 = state_35876__$1;
(statearr_35934_37361[(2)] = inst_35851);

(statearr_35934_37361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (5))){
var inst_35810 = cljs.core.deref(mults);
var inst_35811 = cljs.core.vals(inst_35810);
var inst_35812 = cljs.core.seq(inst_35811);
var inst_35814 = inst_35812;
var inst_35815 = null;
var inst_35816 = (0);
var inst_35817 = (0);
var state_35876__$1 = (function (){var statearr_35938 = state_35876;
(statearr_35938[(12)] = inst_35817);

(statearr_35938[(13)] = inst_35815);

(statearr_35938[(14)] = inst_35814);

(statearr_35938[(16)] = inst_35816);

return statearr_35938;
})();
var statearr_35941_37363 = state_35876__$1;
(statearr_35941_37363[(2)] = null);

(statearr_35941_37363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (14))){
var state_35876__$1 = state_35876;
var statearr_35947_37367 = state_35876__$1;
(statearr_35947_37367[(2)] = null);

(statearr_35947_37367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (16))){
var inst_35828 = (state_35876[(10)]);
var inst_35832 = cljs.core.chunk_first(inst_35828);
var inst_35833 = cljs.core.chunk_rest(inst_35828);
var inst_35834 = cljs.core.count(inst_35832);
var inst_35814 = inst_35833;
var inst_35815 = inst_35832;
var inst_35816 = inst_35834;
var inst_35817 = (0);
var state_35876__$1 = (function (){var statearr_35948 = state_35876;
(statearr_35948[(12)] = inst_35817);

(statearr_35948[(13)] = inst_35815);

(statearr_35948[(14)] = inst_35814);

(statearr_35948[(16)] = inst_35816);

return statearr_35948;
})();
var statearr_35952_37369 = state_35876__$1;
(statearr_35952_37369[(2)] = null);

(statearr_35952_37369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (10))){
var inst_35817 = (state_35876[(12)]);
var inst_35815 = (state_35876[(13)]);
var inst_35814 = (state_35876[(14)]);
var inst_35816 = (state_35876[(16)]);
var inst_35822 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35815,inst_35817);
var inst_35823 = cljs.core.async.muxch_STAR_(inst_35822);
var inst_35824 = cljs.core.async.close_BANG_(inst_35823);
var inst_35825 = (inst_35817 + (1));
var tmp35944 = inst_35815;
var tmp35945 = inst_35814;
var tmp35946 = inst_35816;
var inst_35814__$1 = tmp35945;
var inst_35815__$1 = tmp35944;
var inst_35816__$1 = tmp35946;
var inst_35817__$1 = inst_35825;
var state_35876__$1 = (function (){var statearr_35953 = state_35876;
(statearr_35953[(12)] = inst_35817__$1);

(statearr_35953[(13)] = inst_35815__$1);

(statearr_35953[(14)] = inst_35814__$1);

(statearr_35953[(16)] = inst_35816__$1);

(statearr_35953[(17)] = inst_35824);

return statearr_35953;
})();
var statearr_35956_37376 = state_35876__$1;
(statearr_35956_37376[(2)] = null);

(statearr_35956_37376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (18))){
var inst_35844 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35960_37380 = state_35876__$1;
(statearr_35960_37380[(2)] = inst_35844);

(statearr_35960_37380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (8))){
var inst_35817 = (state_35876[(12)]);
var inst_35816 = (state_35876[(16)]);
var inst_35819 = (inst_35817 < inst_35816);
var inst_35820 = inst_35819;
var state_35876__$1 = state_35876;
if(cljs.core.truth_(inst_35820)){
var statearr_35963_37382 = state_35876__$1;
(statearr_35963_37382[(1)] = (10));

} else {
var statearr_35964_37385 = state_35876__$1;
(statearr_35964_37385[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_35967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35967[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_35967[(1)] = (1));

return statearr_35967;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35876){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35876);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35969){if((e35969 instanceof Object)){
var ex__34203__auto__ = e35969;
var statearr_35970_37391 = state_35876;
(statearr_35970_37391[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35969;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37393 = state_35876;
state_35876 = G__37393;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35975 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35975[(6)] = c__34267__auto___37303);

return statearr_35975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35980 = arguments.length;
switch (G__35980) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35990 = arguments.length;
switch (G__35990) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35997 = arguments.length;
switch (G__35997) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34267__auto___37420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36046){
var state_val_36047 = (state_36046[(1)]);
if((state_val_36047 === (7))){
var state_36046__$1 = state_36046;
var statearr_36048_37421 = state_36046__$1;
(statearr_36048_37421[(2)] = null);

(statearr_36048_37421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (1))){
var state_36046__$1 = state_36046;
var statearr_36050_37422 = state_36046__$1;
(statearr_36050_37422[(2)] = null);

(statearr_36050_37422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (4))){
var inst_36007 = (state_36046[(7)]);
var inst_36009 = (inst_36007 < cnt);
var state_36046__$1 = state_36046;
if(cljs.core.truth_(inst_36009)){
var statearr_36052_37423 = state_36046__$1;
(statearr_36052_37423[(1)] = (6));

} else {
var statearr_36053_37425 = state_36046__$1;
(statearr_36053_37425[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (15))){
var inst_36041 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
var statearr_36055_37427 = state_36046__$1;
(statearr_36055_37427[(2)] = inst_36041);

(statearr_36055_37427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (13))){
var inst_36034 = cljs.core.async.close_BANG_(out);
var state_36046__$1 = state_36046;
var statearr_36056_37430 = state_36046__$1;
(statearr_36056_37430[(2)] = inst_36034);

(statearr_36056_37430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (6))){
var state_36046__$1 = state_36046;
var statearr_36059_37432 = state_36046__$1;
(statearr_36059_37432[(2)] = null);

(statearr_36059_37432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (3))){
var inst_36043 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36046__$1,inst_36043);
} else {
if((state_val_36047 === (12))){
var inst_36031 = (state_36046[(8)]);
var inst_36031__$1 = (state_36046[(2)]);
var inst_36032 = cljs.core.some(cljs.core.nil_QMARK_,inst_36031__$1);
var state_36046__$1 = (function (){var statearr_36068 = state_36046;
(statearr_36068[(8)] = inst_36031__$1);

return statearr_36068;
})();
if(cljs.core.truth_(inst_36032)){
var statearr_36069_37434 = state_36046__$1;
(statearr_36069_37434[(1)] = (13));

} else {
var statearr_36070_37435 = state_36046__$1;
(statearr_36070_37435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (2))){
var inst_36006 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36007 = (0);
var state_36046__$1 = (function (){var statearr_36072 = state_36046;
(statearr_36072[(7)] = inst_36007);

(statearr_36072[(9)] = inst_36006);

return statearr_36072;
})();
var statearr_36075_37436 = state_36046__$1;
(statearr_36075_37436[(2)] = null);

(statearr_36075_37436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (11))){
var inst_36007 = (state_36046[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36046,(10),Object,null,(9));
var inst_36018 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36007) : chs__$1.call(null,inst_36007));
var inst_36019 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36007) : done.call(null,inst_36007));
var inst_36020 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36018,inst_36019);
var state_36046__$1 = state_36046;
var statearr_36078_37440 = state_36046__$1;
(statearr_36078_37440[(2)] = inst_36020);


cljs.core.async.impl.ioc_helpers.process_exception(state_36046__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (9))){
var inst_36007 = (state_36046[(7)]);
var inst_36022 = (state_36046[(2)]);
var inst_36023 = (inst_36007 + (1));
var inst_36007__$1 = inst_36023;
var state_36046__$1 = (function (){var statearr_36082 = state_36046;
(statearr_36082[(7)] = inst_36007__$1);

(statearr_36082[(10)] = inst_36022);

return statearr_36082;
})();
var statearr_36083_37444 = state_36046__$1;
(statearr_36083_37444[(2)] = null);

(statearr_36083_37444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (5))){
var inst_36029 = (state_36046[(2)]);
var state_36046__$1 = (function (){var statearr_36086 = state_36046;
(statearr_36086[(11)] = inst_36029);

return statearr_36086;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36046__$1,(12),dchan);
} else {
if((state_val_36047 === (14))){
var inst_36031 = (state_36046[(8)]);
var inst_36036 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36031);
var state_36046__$1 = state_36046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36046__$1,(16),out,inst_36036);
} else {
if((state_val_36047 === (16))){
var inst_36038 = (state_36046[(2)]);
var state_36046__$1 = (function (){var statearr_36090 = state_36046;
(statearr_36090[(12)] = inst_36038);

return statearr_36090;
})();
var statearr_36091_37452 = state_36046__$1;
(statearr_36091_37452[(2)] = null);

(statearr_36091_37452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (10))){
var inst_36011 = (state_36046[(2)]);
var inst_36012 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36046__$1 = (function (){var statearr_36095 = state_36046;
(statearr_36095[(13)] = inst_36011);

return statearr_36095;
})();
var statearr_36096_37454 = state_36046__$1;
(statearr_36096_37454[(2)] = inst_36012);


cljs.core.async.impl.ioc_helpers.process_exception(state_36046__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (8))){
var inst_36027 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
var statearr_36097_37457 = state_36046__$1;
(statearr_36097_37457[(2)] = inst_36027);

(statearr_36097_37457[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36098[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36098[(1)] = (1));

return statearr_36098;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36046){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36046);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36099){if((e36099 instanceof Object)){
var ex__34203__auto__ = e36099;
var statearr_36102_37468 = state_36046;
(statearr_36102_37468[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37469 = state_36046;
state_36046 = G__37469;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36105 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36105[(6)] = c__34267__auto___37420);

return statearr_36105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36110 = arguments.length;
switch (G__36110) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___37480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36142){
var state_val_36143 = (state_36142[(1)]);
if((state_val_36143 === (7))){
var inst_36122 = (state_36142[(7)]);
var inst_36121 = (state_36142[(8)]);
var inst_36121__$1 = (state_36142[(2)]);
var inst_36122__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36121__$1,(0),null);
var inst_36123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36121__$1,(1),null);
var inst_36124 = (inst_36122__$1 == null);
var state_36142__$1 = (function (){var statearr_36144 = state_36142;
(statearr_36144[(7)] = inst_36122__$1);

(statearr_36144[(8)] = inst_36121__$1);

(statearr_36144[(9)] = inst_36123);

return statearr_36144;
})();
if(cljs.core.truth_(inst_36124)){
var statearr_36145_37485 = state_36142__$1;
(statearr_36145_37485[(1)] = (8));

} else {
var statearr_36146_37487 = state_36142__$1;
(statearr_36146_37487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (1))){
var inst_36111 = cljs.core.vec(chs);
var inst_36112 = inst_36111;
var state_36142__$1 = (function (){var statearr_36147 = state_36142;
(statearr_36147[(10)] = inst_36112);

return statearr_36147;
})();
var statearr_36148_37492 = state_36142__$1;
(statearr_36148_37492[(2)] = null);

(statearr_36148_37492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (4))){
var inst_36112 = (state_36142[(10)]);
var state_36142__$1 = state_36142;
return cljs.core.async.ioc_alts_BANG_(state_36142__$1,(7),inst_36112);
} else {
if((state_val_36143 === (6))){
var inst_36138 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36149_37499 = state_36142__$1;
(statearr_36149_37499[(2)] = inst_36138);

(statearr_36149_37499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (3))){
var inst_36140 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36142__$1,inst_36140);
} else {
if((state_val_36143 === (2))){
var inst_36112 = (state_36142[(10)]);
var inst_36114 = cljs.core.count(inst_36112);
var inst_36115 = (inst_36114 > (0));
var state_36142__$1 = state_36142;
if(cljs.core.truth_(inst_36115)){
var statearr_36151_37502 = state_36142__$1;
(statearr_36151_37502[(1)] = (4));

} else {
var statearr_36152_37503 = state_36142__$1;
(statearr_36152_37503[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (11))){
var inst_36112 = (state_36142[(10)]);
var inst_36131 = (state_36142[(2)]);
var tmp36150 = inst_36112;
var inst_36112__$1 = tmp36150;
var state_36142__$1 = (function (){var statearr_36153 = state_36142;
(statearr_36153[(10)] = inst_36112__$1);

(statearr_36153[(11)] = inst_36131);

return statearr_36153;
})();
var statearr_36154_37508 = state_36142__$1;
(statearr_36154_37508[(2)] = null);

(statearr_36154_37508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (9))){
var inst_36122 = (state_36142[(7)]);
var state_36142__$1 = state_36142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36142__$1,(11),out,inst_36122);
} else {
if((state_val_36143 === (5))){
var inst_36136 = cljs.core.async.close_BANG_(out);
var state_36142__$1 = state_36142;
var statearr_36159_37510 = state_36142__$1;
(statearr_36159_37510[(2)] = inst_36136);

(statearr_36159_37510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (10))){
var inst_36134 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36160_37512 = state_36142__$1;
(statearr_36160_37512[(2)] = inst_36134);

(statearr_36160_37512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (8))){
var inst_36112 = (state_36142[(10)]);
var inst_36122 = (state_36142[(7)]);
var inst_36121 = (state_36142[(8)]);
var inst_36123 = (state_36142[(9)]);
var inst_36126 = (function (){var cs = inst_36112;
var vec__36117 = inst_36121;
var v = inst_36122;
var c = inst_36123;
return (function (p1__36108_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36108_SHARP_);
});
})();
var inst_36127 = cljs.core.filterv(inst_36126,inst_36112);
var inst_36112__$1 = inst_36127;
var state_36142__$1 = (function (){var statearr_36161 = state_36142;
(statearr_36161[(10)] = inst_36112__$1);

return statearr_36161;
})();
var statearr_36162_37519 = state_36142__$1;
(statearr_36162_37519[(2)] = null);

(statearr_36162_37519[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36163 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36163[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36163[(1)] = (1));

return statearr_36163;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36142){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36142);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36164){if((e36164 instanceof Object)){
var ex__34203__auto__ = e36164;
var statearr_36165_37526 = state_36142;
(statearr_36165_37526[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37528 = state_36142;
state_36142 = G__37528;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36166 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36166[(6)] = c__34267__auto___37480);

return statearr_36166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36168 = arguments.length;
switch (G__36168) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___37535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36194){
var state_val_36195 = (state_36194[(1)]);
if((state_val_36195 === (7))){
var inst_36176 = (state_36194[(7)]);
var inst_36176__$1 = (state_36194[(2)]);
var inst_36177 = (inst_36176__$1 == null);
var inst_36178 = cljs.core.not(inst_36177);
var state_36194__$1 = (function (){var statearr_36196 = state_36194;
(statearr_36196[(7)] = inst_36176__$1);

return statearr_36196;
})();
if(inst_36178){
var statearr_36197_37539 = state_36194__$1;
(statearr_36197_37539[(1)] = (8));

} else {
var statearr_36198_37540 = state_36194__$1;
(statearr_36198_37540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (1))){
var inst_36171 = (0);
var state_36194__$1 = (function (){var statearr_36200 = state_36194;
(statearr_36200[(8)] = inst_36171);

return statearr_36200;
})();
var statearr_36201_37543 = state_36194__$1;
(statearr_36201_37543[(2)] = null);

(statearr_36201_37543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (4))){
var state_36194__$1 = state_36194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36194__$1,(7),ch);
} else {
if((state_val_36195 === (6))){
var inst_36189 = (state_36194[(2)]);
var state_36194__$1 = state_36194;
var statearr_36205_37549 = state_36194__$1;
(statearr_36205_37549[(2)] = inst_36189);

(statearr_36205_37549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (3))){
var inst_36191 = (state_36194[(2)]);
var inst_36192 = cljs.core.async.close_BANG_(out);
var state_36194__$1 = (function (){var statearr_36209 = state_36194;
(statearr_36209[(9)] = inst_36191);

return statearr_36209;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36194__$1,inst_36192);
} else {
if((state_val_36195 === (2))){
var inst_36171 = (state_36194[(8)]);
var inst_36173 = (inst_36171 < n);
var state_36194__$1 = state_36194;
if(cljs.core.truth_(inst_36173)){
var statearr_36210_37551 = state_36194__$1;
(statearr_36210_37551[(1)] = (4));

} else {
var statearr_36211_37552 = state_36194__$1;
(statearr_36211_37552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (11))){
var inst_36171 = (state_36194[(8)]);
var inst_36181 = (state_36194[(2)]);
var inst_36182 = (inst_36171 + (1));
var inst_36171__$1 = inst_36182;
var state_36194__$1 = (function (){var statearr_36213 = state_36194;
(statearr_36213[(10)] = inst_36181);

(statearr_36213[(8)] = inst_36171__$1);

return statearr_36213;
})();
var statearr_36214_37555 = state_36194__$1;
(statearr_36214_37555[(2)] = null);

(statearr_36214_37555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (9))){
var state_36194__$1 = state_36194;
var statearr_36215_37559 = state_36194__$1;
(statearr_36215_37559[(2)] = null);

(statearr_36215_37559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (5))){
var state_36194__$1 = state_36194;
var statearr_36216_37560 = state_36194__$1;
(statearr_36216_37560[(2)] = null);

(statearr_36216_37560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (10))){
var inst_36186 = (state_36194[(2)]);
var state_36194__$1 = state_36194;
var statearr_36217_37564 = state_36194__$1;
(statearr_36217_37564[(2)] = inst_36186);

(statearr_36217_37564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36195 === (8))){
var inst_36176 = (state_36194[(7)]);
var state_36194__$1 = state_36194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36194__$1,(11),out,inst_36176);
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
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36221[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36221[(1)] = (1));

return statearr_36221;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36194){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36194);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36224){if((e36224 instanceof Object)){
var ex__34203__auto__ = e36224;
var statearr_36225_37566 = state_36194;
(statearr_36225_37566[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36224;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37567 = state_36194;
state_36194 = G__37567;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36228 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36228[(6)] = c__34267__auto___37535);

return statearr_36228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36232 = (function (f,ch,meta36233){
this.f = f;
this.ch = ch;
this.meta36233 = meta36233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36234,meta36233__$1){
var self__ = this;
var _36234__$1 = this;
return (new cljs.core.async.t_cljs$core$async36232(self__.f,self__.ch,meta36233__$1));
}));

(cljs.core.async.t_cljs$core$async36232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36234){
var self__ = this;
var _36234__$1 = this;
return self__.meta36233;
}));

(cljs.core.async.t_cljs$core$async36232.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36232.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36232.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36239 = (function (f,ch,meta36233,_,fn1,meta36240){
this.f = f;
this.ch = ch;
this.meta36233 = meta36233;
this._ = _;
this.fn1 = fn1;
this.meta36240 = meta36240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36241,meta36240__$1){
var self__ = this;
var _36241__$1 = this;
return (new cljs.core.async.t_cljs$core$async36239(self__.f,self__.ch,self__.meta36233,self__._,self__.fn1,meta36240__$1));
}));

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36241){
var self__ = this;
var _36241__$1 = this;
return self__.meta36240;
}));

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36230_SHARP_){
var G__36242 = (((p1__36230_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36230_SHARP_) : self__.f.call(null,p1__36230_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36242) : f1.call(null,G__36242));
});
}));

(cljs.core.async.t_cljs$core$async36239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36233","meta36233",1988699957,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36232","cljs.core.async/t_cljs$core$async36232",-2144189711,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36240","meta36240",-1696893342,null)], null);
}));

(cljs.core.async.t_cljs$core$async36239.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36239");

(cljs.core.async.t_cljs$core$async36239.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36239");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36239.
 */
cljs.core.async.__GT_t_cljs$core$async36239 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36239(f__$1,ch__$1,meta36233__$1,___$2,fn1__$1,meta36240){
return (new cljs.core.async.t_cljs$core$async36239(f__$1,ch__$1,meta36233__$1,___$2,fn1__$1,meta36240));
});

}

return (new cljs.core.async.t_cljs$core$async36239(self__.f,self__.ch,self__.meta36233,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36243 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36243) : self__.f.call(null,G__36243));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36232.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36233","meta36233",1988699957,null)], null);
}));

(cljs.core.async.t_cljs$core$async36232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36232");

(cljs.core.async.t_cljs$core$async36232.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36232.
 */
cljs.core.async.__GT_t_cljs$core$async36232 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36232(f__$1,ch__$1,meta36233){
return (new cljs.core.async.t_cljs$core$async36232(f__$1,ch__$1,meta36233));
});

}

return (new cljs.core.async.t_cljs$core$async36232(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36251 = (function (f,ch,meta36252){
this.f = f;
this.ch = ch;
this.meta36252 = meta36252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36253,meta36252__$1){
var self__ = this;
var _36253__$1 = this;
return (new cljs.core.async.t_cljs$core$async36251(self__.f,self__.ch,meta36252__$1));
}));

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36253){
var self__ = this;
var _36253__$1 = this;
return self__.meta36252;
}));

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36252","meta36252",1362345826,null)], null);
}));

(cljs.core.async.t_cljs$core$async36251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36251");

(cljs.core.async.t_cljs$core$async36251.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36251.
 */
cljs.core.async.__GT_t_cljs$core$async36251 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36251(f__$1,ch__$1,meta36252){
return (new cljs.core.async.t_cljs$core$async36251(f__$1,ch__$1,meta36252));
});

}

return (new cljs.core.async.t_cljs$core$async36251(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36261 = (function (p,ch,meta36262){
this.p = p;
this.ch = ch;
this.meta36262 = meta36262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36263,meta36262__$1){
var self__ = this;
var _36263__$1 = this;
return (new cljs.core.async.t_cljs$core$async36261(self__.p,self__.ch,meta36262__$1));
}));

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36263){
var self__ = this;
var _36263__$1 = this;
return self__.meta36262;
}));

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36262","meta36262",1528439859,null)], null);
}));

(cljs.core.async.t_cljs$core$async36261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36261");

(cljs.core.async.t_cljs$core$async36261.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36261.
 */
cljs.core.async.__GT_t_cljs$core$async36261 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36261(p__$1,ch__$1,meta36262){
return (new cljs.core.async.t_cljs$core$async36261(p__$1,ch__$1,meta36262));
});

}

return (new cljs.core.async.t_cljs$core$async36261(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36288 = arguments.length;
switch (G__36288) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___37641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36312){
var state_val_36313 = (state_36312[(1)]);
if((state_val_36313 === (7))){
var inst_36308 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
var statearr_36316_37648 = state_36312__$1;
(statearr_36316_37648[(2)] = inst_36308);

(statearr_36316_37648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (1))){
var state_36312__$1 = state_36312;
var statearr_36317_37650 = state_36312__$1;
(statearr_36317_37650[(2)] = null);

(statearr_36317_37650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (4))){
var inst_36293 = (state_36312[(7)]);
var inst_36293__$1 = (state_36312[(2)]);
var inst_36294 = (inst_36293__$1 == null);
var state_36312__$1 = (function (){var statearr_36318 = state_36312;
(statearr_36318[(7)] = inst_36293__$1);

return statearr_36318;
})();
if(cljs.core.truth_(inst_36294)){
var statearr_36319_37652 = state_36312__$1;
(statearr_36319_37652[(1)] = (5));

} else {
var statearr_36320_37653 = state_36312__$1;
(statearr_36320_37653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (6))){
var inst_36293 = (state_36312[(7)]);
var inst_36299 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36293) : p.call(null,inst_36293));
var state_36312__$1 = state_36312;
if(cljs.core.truth_(inst_36299)){
var statearr_36322_37660 = state_36312__$1;
(statearr_36322_37660[(1)] = (8));

} else {
var statearr_36324_37661 = state_36312__$1;
(statearr_36324_37661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (3))){
var inst_36310 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36312__$1,inst_36310);
} else {
if((state_val_36313 === (2))){
var state_36312__$1 = state_36312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36312__$1,(4),ch);
} else {
if((state_val_36313 === (11))){
var inst_36302 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
var statearr_36325_37664 = state_36312__$1;
(statearr_36325_37664[(2)] = inst_36302);

(statearr_36325_37664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (9))){
var state_36312__$1 = state_36312;
var statearr_36326_37667 = state_36312__$1;
(statearr_36326_37667[(2)] = null);

(statearr_36326_37667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (5))){
var inst_36297 = cljs.core.async.close_BANG_(out);
var state_36312__$1 = state_36312;
var statearr_36327_37672 = state_36312__$1;
(statearr_36327_37672[(2)] = inst_36297);

(statearr_36327_37672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (10))){
var inst_36305 = (state_36312[(2)]);
var state_36312__$1 = (function (){var statearr_36328 = state_36312;
(statearr_36328[(8)] = inst_36305);

return statearr_36328;
})();
var statearr_36329_37674 = state_36312__$1;
(statearr_36329_37674[(2)] = null);

(statearr_36329_37674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (8))){
var inst_36293 = (state_36312[(7)]);
var state_36312__$1 = state_36312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36312__$1,(11),out,inst_36293);
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
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36330 = [null,null,null,null,null,null,null,null,null];
(statearr_36330[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36330[(1)] = (1));

return statearr_36330;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36312){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36312);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36333){if((e36333 instanceof Object)){
var ex__34203__auto__ = e36333;
var statearr_36334_37687 = state_36312;
(statearr_36334_37687[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36333;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37688 = state_36312;
state_36312 = G__37688;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36335 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36335[(6)] = c__34267__auto___37641);

return statearr_36335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36341 = arguments.length;
switch (G__36341) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36412){
var state_val_36413 = (state_36412[(1)]);
if((state_val_36413 === (7))){
var inst_36408 = (state_36412[(2)]);
var state_36412__$1 = state_36412;
var statearr_36414_37703 = state_36412__$1;
(statearr_36414_37703[(2)] = inst_36408);

(statearr_36414_37703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (20))){
var inst_36378 = (state_36412[(7)]);
var inst_36389 = (state_36412[(2)]);
var inst_36390 = cljs.core.next(inst_36378);
var inst_36364 = inst_36390;
var inst_36365 = null;
var inst_36366 = (0);
var inst_36367 = (0);
var state_36412__$1 = (function (){var statearr_36415 = state_36412;
(statearr_36415[(8)] = inst_36366);

(statearr_36415[(9)] = inst_36364);

(statearr_36415[(10)] = inst_36389);

(statearr_36415[(11)] = inst_36365);

(statearr_36415[(12)] = inst_36367);

return statearr_36415;
})();
var statearr_36416_37711 = state_36412__$1;
(statearr_36416_37711[(2)] = null);

(statearr_36416_37711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (1))){
var state_36412__$1 = state_36412;
var statearr_36417_37712 = state_36412__$1;
(statearr_36417_37712[(2)] = null);

(statearr_36417_37712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (4))){
var inst_36352 = (state_36412[(13)]);
var inst_36352__$1 = (state_36412[(2)]);
var inst_36353 = (inst_36352__$1 == null);
var state_36412__$1 = (function (){var statearr_36418 = state_36412;
(statearr_36418[(13)] = inst_36352__$1);

return statearr_36418;
})();
if(cljs.core.truth_(inst_36353)){
var statearr_36419_37713 = state_36412__$1;
(statearr_36419_37713[(1)] = (5));

} else {
var statearr_36420_37714 = state_36412__$1;
(statearr_36420_37714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (15))){
var state_36412__$1 = state_36412;
var statearr_36424_37715 = state_36412__$1;
(statearr_36424_37715[(2)] = null);

(statearr_36424_37715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (21))){
var state_36412__$1 = state_36412;
var statearr_36425_37716 = state_36412__$1;
(statearr_36425_37716[(2)] = null);

(statearr_36425_37716[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (13))){
var inst_36366 = (state_36412[(8)]);
var inst_36364 = (state_36412[(9)]);
var inst_36365 = (state_36412[(11)]);
var inst_36367 = (state_36412[(12)]);
var inst_36374 = (state_36412[(2)]);
var inst_36375 = (inst_36367 + (1));
var tmp36421 = inst_36366;
var tmp36422 = inst_36364;
var tmp36423 = inst_36365;
var inst_36364__$1 = tmp36422;
var inst_36365__$1 = tmp36423;
var inst_36366__$1 = tmp36421;
var inst_36367__$1 = inst_36375;
var state_36412__$1 = (function (){var statearr_36428 = state_36412;
(statearr_36428[(14)] = inst_36374);

(statearr_36428[(8)] = inst_36366__$1);

(statearr_36428[(9)] = inst_36364__$1);

(statearr_36428[(11)] = inst_36365__$1);

(statearr_36428[(12)] = inst_36367__$1);

return statearr_36428;
})();
var statearr_36429_37721 = state_36412__$1;
(statearr_36429_37721[(2)] = null);

(statearr_36429_37721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (22))){
var state_36412__$1 = state_36412;
var statearr_36431_37722 = state_36412__$1;
(statearr_36431_37722[(2)] = null);

(statearr_36431_37722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (6))){
var inst_36352 = (state_36412[(13)]);
var inst_36362 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36352) : f.call(null,inst_36352));
var inst_36363 = cljs.core.seq(inst_36362);
var inst_36364 = inst_36363;
var inst_36365 = null;
var inst_36366 = (0);
var inst_36367 = (0);
var state_36412__$1 = (function (){var statearr_36433 = state_36412;
(statearr_36433[(8)] = inst_36366);

(statearr_36433[(9)] = inst_36364);

(statearr_36433[(11)] = inst_36365);

(statearr_36433[(12)] = inst_36367);

return statearr_36433;
})();
var statearr_36434_37731 = state_36412__$1;
(statearr_36434_37731[(2)] = null);

(statearr_36434_37731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (17))){
var inst_36378 = (state_36412[(7)]);
var inst_36382 = cljs.core.chunk_first(inst_36378);
var inst_36383 = cljs.core.chunk_rest(inst_36378);
var inst_36384 = cljs.core.count(inst_36382);
var inst_36364 = inst_36383;
var inst_36365 = inst_36382;
var inst_36366 = inst_36384;
var inst_36367 = (0);
var state_36412__$1 = (function (){var statearr_36437 = state_36412;
(statearr_36437[(8)] = inst_36366);

(statearr_36437[(9)] = inst_36364);

(statearr_36437[(11)] = inst_36365);

(statearr_36437[(12)] = inst_36367);

return statearr_36437;
})();
var statearr_36438_37738 = state_36412__$1;
(statearr_36438_37738[(2)] = null);

(statearr_36438_37738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (3))){
var inst_36410 = (state_36412[(2)]);
var state_36412__$1 = state_36412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36412__$1,inst_36410);
} else {
if((state_val_36413 === (12))){
var inst_36398 = (state_36412[(2)]);
var state_36412__$1 = state_36412;
var statearr_36439_37745 = state_36412__$1;
(statearr_36439_37745[(2)] = inst_36398);

(statearr_36439_37745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (2))){
var state_36412__$1 = state_36412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36412__$1,(4),in$);
} else {
if((state_val_36413 === (23))){
var inst_36406 = (state_36412[(2)]);
var state_36412__$1 = state_36412;
var statearr_36440_37748 = state_36412__$1;
(statearr_36440_37748[(2)] = inst_36406);

(statearr_36440_37748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (19))){
var inst_36393 = (state_36412[(2)]);
var state_36412__$1 = state_36412;
var statearr_36443_37753 = state_36412__$1;
(statearr_36443_37753[(2)] = inst_36393);

(statearr_36443_37753[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (11))){
var inst_36364 = (state_36412[(9)]);
var inst_36378 = (state_36412[(7)]);
var inst_36378__$1 = cljs.core.seq(inst_36364);
var state_36412__$1 = (function (){var statearr_36444 = state_36412;
(statearr_36444[(7)] = inst_36378__$1);

return statearr_36444;
})();
if(inst_36378__$1){
var statearr_36445_37758 = state_36412__$1;
(statearr_36445_37758[(1)] = (14));

} else {
var statearr_36446_37759 = state_36412__$1;
(statearr_36446_37759[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (9))){
var inst_36400 = (state_36412[(2)]);
var inst_36401 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36412__$1 = (function (){var statearr_36448 = state_36412;
(statearr_36448[(15)] = inst_36400);

return statearr_36448;
})();
if(cljs.core.truth_(inst_36401)){
var statearr_36450_37761 = state_36412__$1;
(statearr_36450_37761[(1)] = (21));

} else {
var statearr_36452_37762 = state_36412__$1;
(statearr_36452_37762[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (5))){
var inst_36356 = cljs.core.async.close_BANG_(out);
var state_36412__$1 = state_36412;
var statearr_36454_37768 = state_36412__$1;
(statearr_36454_37768[(2)] = inst_36356);

(statearr_36454_37768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (14))){
var inst_36378 = (state_36412[(7)]);
var inst_36380 = cljs.core.chunked_seq_QMARK_(inst_36378);
var state_36412__$1 = state_36412;
if(inst_36380){
var statearr_36455_37775 = state_36412__$1;
(statearr_36455_37775[(1)] = (17));

} else {
var statearr_36456_37776 = state_36412__$1;
(statearr_36456_37776[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (16))){
var inst_36396 = (state_36412[(2)]);
var state_36412__$1 = state_36412;
var statearr_36458_37778 = state_36412__$1;
(statearr_36458_37778[(2)] = inst_36396);

(statearr_36458_37778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36413 === (10))){
var inst_36365 = (state_36412[(11)]);
var inst_36367 = (state_36412[(12)]);
var inst_36372 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36365,inst_36367);
var state_36412__$1 = state_36412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36412__$1,(13),out,inst_36372);
} else {
if((state_val_36413 === (18))){
var inst_36378 = (state_36412[(7)]);
var inst_36387 = cljs.core.first(inst_36378);
var state_36412__$1 = state_36412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36412__$1,(20),out,inst_36387);
} else {
if((state_val_36413 === (8))){
var inst_36366 = (state_36412[(8)]);
var inst_36367 = (state_36412[(12)]);
var inst_36369 = (inst_36367 < inst_36366);
var inst_36370 = inst_36369;
var state_36412__$1 = state_36412;
if(cljs.core.truth_(inst_36370)){
var statearr_36466_37788 = state_36412__$1;
(statearr_36466_37788[(1)] = (10));

} else {
var statearr_36467_37789 = state_36412__$1;
(statearr_36467_37789[(1)] = (11));

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
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_36470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36470[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__);

(statearr_36470[(1)] = (1));

return statearr_36470;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1 = (function (state_36412){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36412);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36472){if((e36472 instanceof Object)){
var ex__34203__auto__ = e36472;
var statearr_36473_37800 = state_36412;
(statearr_36473_37800[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37803 = state_36412;
state_36412 = G__37803;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = function(state_36412){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1.call(this,state_36412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36475 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36475[(6)] = c__34267__auto__);

return statearr_36475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36480 = arguments.length;
switch (G__36480) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36484 = arguments.length;
switch (G__36484) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36495 = arguments.length;
switch (G__36495) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___37826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36519){
var state_val_36520 = (state_36519[(1)]);
if((state_val_36520 === (7))){
var inst_36514 = (state_36519[(2)]);
var state_36519__$1 = state_36519;
var statearr_36523_37828 = state_36519__$1;
(statearr_36523_37828[(2)] = inst_36514);

(statearr_36523_37828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (1))){
var inst_36496 = null;
var state_36519__$1 = (function (){var statearr_36525 = state_36519;
(statearr_36525[(7)] = inst_36496);

return statearr_36525;
})();
var statearr_36526_37831 = state_36519__$1;
(statearr_36526_37831[(2)] = null);

(statearr_36526_37831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (4))){
var inst_36499 = (state_36519[(8)]);
var inst_36499__$1 = (state_36519[(2)]);
var inst_36500 = (inst_36499__$1 == null);
var inst_36501 = cljs.core.not(inst_36500);
var state_36519__$1 = (function (){var statearr_36529 = state_36519;
(statearr_36529[(8)] = inst_36499__$1);

return statearr_36529;
})();
if(inst_36501){
var statearr_36530_37832 = state_36519__$1;
(statearr_36530_37832[(1)] = (5));

} else {
var statearr_36531_37833 = state_36519__$1;
(statearr_36531_37833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (6))){
var state_36519__$1 = state_36519;
var statearr_36532_37834 = state_36519__$1;
(statearr_36532_37834[(2)] = null);

(statearr_36532_37834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (3))){
var inst_36516 = (state_36519[(2)]);
var inst_36517 = cljs.core.async.close_BANG_(out);
var state_36519__$1 = (function (){var statearr_36534 = state_36519;
(statearr_36534[(9)] = inst_36516);

return statearr_36534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36519__$1,inst_36517);
} else {
if((state_val_36520 === (2))){
var state_36519__$1 = state_36519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36519__$1,(4),ch);
} else {
if((state_val_36520 === (11))){
var inst_36499 = (state_36519[(8)]);
var inst_36508 = (state_36519[(2)]);
var inst_36496 = inst_36499;
var state_36519__$1 = (function (){var statearr_36535 = state_36519;
(statearr_36535[(10)] = inst_36508);

(statearr_36535[(7)] = inst_36496);

return statearr_36535;
})();
var statearr_36537_37839 = state_36519__$1;
(statearr_36537_37839[(2)] = null);

(statearr_36537_37839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (9))){
var inst_36499 = (state_36519[(8)]);
var state_36519__$1 = state_36519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36519__$1,(11),out,inst_36499);
} else {
if((state_val_36520 === (5))){
var inst_36499 = (state_36519[(8)]);
var inst_36496 = (state_36519[(7)]);
var inst_36503 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36499,inst_36496);
var state_36519__$1 = state_36519;
if(inst_36503){
var statearr_36540_37840 = state_36519__$1;
(statearr_36540_37840[(1)] = (8));

} else {
var statearr_36541_37841 = state_36519__$1;
(statearr_36541_37841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (10))){
var inst_36511 = (state_36519[(2)]);
var state_36519__$1 = state_36519;
var statearr_36542_37846 = state_36519__$1;
(statearr_36542_37846[(2)] = inst_36511);

(statearr_36542_37846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (8))){
var inst_36496 = (state_36519[(7)]);
var tmp36538 = inst_36496;
var inst_36496__$1 = tmp36538;
var state_36519__$1 = (function (){var statearr_36546 = state_36519;
(statearr_36546[(7)] = inst_36496__$1);

return statearr_36546;
})();
var statearr_36547_37847 = state_36519__$1;
(statearr_36547_37847[(2)] = null);

(statearr_36547_37847[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36548[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36548[(1)] = (1));

return statearr_36548;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36519){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36519);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36550){if((e36550 instanceof Object)){
var ex__34203__auto__ = e36550;
var statearr_36552_37851 = state_36519;
(statearr_36552_37851[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36550;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37853 = state_36519;
state_36519 = G__37853;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36553 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36553[(6)] = c__34267__auto___37826);

return statearr_36553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36563 = arguments.length;
switch (G__36563) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___37856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36607){
var state_val_36608 = (state_36607[(1)]);
if((state_val_36608 === (7))){
var inst_36603 = (state_36607[(2)]);
var state_36607__$1 = state_36607;
var statearr_36610_37857 = state_36607__$1;
(statearr_36610_37857[(2)] = inst_36603);

(statearr_36610_37857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (1))){
var inst_36567 = (new Array(n));
var inst_36568 = inst_36567;
var inst_36569 = (0);
var state_36607__$1 = (function (){var statearr_36611 = state_36607;
(statearr_36611[(7)] = inst_36569);

(statearr_36611[(8)] = inst_36568);

return statearr_36611;
})();
var statearr_36612_37862 = state_36607__$1;
(statearr_36612_37862[(2)] = null);

(statearr_36612_37862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (4))){
var inst_36572 = (state_36607[(9)]);
var inst_36572__$1 = (state_36607[(2)]);
var inst_36573 = (inst_36572__$1 == null);
var inst_36574 = cljs.core.not(inst_36573);
var state_36607__$1 = (function (){var statearr_36615 = state_36607;
(statearr_36615[(9)] = inst_36572__$1);

return statearr_36615;
})();
if(inst_36574){
var statearr_36616_37868 = state_36607__$1;
(statearr_36616_37868[(1)] = (5));

} else {
var statearr_36617_37869 = state_36607__$1;
(statearr_36617_37869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (15))){
var inst_36597 = (state_36607[(2)]);
var state_36607__$1 = state_36607;
var statearr_36618_37871 = state_36607__$1;
(statearr_36618_37871[(2)] = inst_36597);

(statearr_36618_37871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (13))){
var state_36607__$1 = state_36607;
var statearr_36621_37875 = state_36607__$1;
(statearr_36621_37875[(2)] = null);

(statearr_36621_37875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (6))){
var inst_36569 = (state_36607[(7)]);
var inst_36593 = (inst_36569 > (0));
var state_36607__$1 = state_36607;
if(cljs.core.truth_(inst_36593)){
var statearr_36625_37876 = state_36607__$1;
(statearr_36625_37876[(1)] = (12));

} else {
var statearr_36626_37877 = state_36607__$1;
(statearr_36626_37877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (3))){
var inst_36605 = (state_36607[(2)]);
var state_36607__$1 = state_36607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36607__$1,inst_36605);
} else {
if((state_val_36608 === (12))){
var inst_36568 = (state_36607[(8)]);
var inst_36595 = cljs.core.vec(inst_36568);
var state_36607__$1 = state_36607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36607__$1,(15),out,inst_36595);
} else {
if((state_val_36608 === (2))){
var state_36607__$1 = state_36607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36607__$1,(4),ch);
} else {
if((state_val_36608 === (11))){
var inst_36586 = (state_36607[(2)]);
var inst_36587 = (new Array(n));
var inst_36568 = inst_36587;
var inst_36569 = (0);
var state_36607__$1 = (function (){var statearr_36634 = state_36607;
(statearr_36634[(10)] = inst_36586);

(statearr_36634[(7)] = inst_36569);

(statearr_36634[(8)] = inst_36568);

return statearr_36634;
})();
var statearr_36636_37883 = state_36607__$1;
(statearr_36636_37883[(2)] = null);

(statearr_36636_37883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (9))){
var inst_36568 = (state_36607[(8)]);
var inst_36584 = cljs.core.vec(inst_36568);
var state_36607__$1 = state_36607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36607__$1,(11),out,inst_36584);
} else {
if((state_val_36608 === (5))){
var inst_36577 = (state_36607[(11)]);
var inst_36572 = (state_36607[(9)]);
var inst_36569 = (state_36607[(7)]);
var inst_36568 = (state_36607[(8)]);
var inst_36576 = (inst_36568[inst_36569] = inst_36572);
var inst_36577__$1 = (inst_36569 + (1));
var inst_36578 = (inst_36577__$1 < n);
var state_36607__$1 = (function (){var statearr_36641 = state_36607;
(statearr_36641[(11)] = inst_36577__$1);

(statearr_36641[(12)] = inst_36576);

return statearr_36641;
})();
if(cljs.core.truth_(inst_36578)){
var statearr_36642_37893 = state_36607__$1;
(statearr_36642_37893[(1)] = (8));

} else {
var statearr_36643_37895 = state_36607__$1;
(statearr_36643_37895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (14))){
var inst_36600 = (state_36607[(2)]);
var inst_36601 = cljs.core.async.close_BANG_(out);
var state_36607__$1 = (function (){var statearr_36651 = state_36607;
(statearr_36651[(13)] = inst_36600);

return statearr_36651;
})();
var statearr_36652_37897 = state_36607__$1;
(statearr_36652_37897[(2)] = inst_36601);

(statearr_36652_37897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (10))){
var inst_36590 = (state_36607[(2)]);
var state_36607__$1 = state_36607;
var statearr_36653_37898 = state_36607__$1;
(statearr_36653_37898[(2)] = inst_36590);

(statearr_36653_37898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (8))){
var inst_36577 = (state_36607[(11)]);
var inst_36568 = (state_36607[(8)]);
var tmp36644 = inst_36568;
var inst_36568__$1 = tmp36644;
var inst_36569 = inst_36577;
var state_36607__$1 = (function (){var statearr_36654 = state_36607;
(statearr_36654[(7)] = inst_36569);

(statearr_36654[(8)] = inst_36568__$1);

return statearr_36654;
})();
var statearr_36656_37906 = state_36607__$1;
(statearr_36656_37906[(2)] = null);

(statearr_36656_37906[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36664[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36664[(1)] = (1));

return statearr_36664;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36607){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36607);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36666){if((e36666 instanceof Object)){
var ex__34203__auto__ = e36666;
var statearr_36667_37913 = state_36607;
(statearr_36667_37913[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36666;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37916 = state_36607;
state_36607 = G__37916;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36668 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36668[(6)] = c__34267__auto___37856);

return statearr_36668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36670 = arguments.length;
switch (G__36670) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___37927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36713){
var state_val_36714 = (state_36713[(1)]);
if((state_val_36714 === (7))){
var inst_36709 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36717_37929 = state_36713__$1;
(statearr_36717_37929[(2)] = inst_36709);

(statearr_36717_37929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (1))){
var inst_36671 = [];
var inst_36672 = inst_36671;
var inst_36673 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36713__$1 = (function (){var statearr_36718 = state_36713;
(statearr_36718[(7)] = inst_36673);

(statearr_36718[(8)] = inst_36672);

return statearr_36718;
})();
var statearr_36719_37931 = state_36713__$1;
(statearr_36719_37931[(2)] = null);

(statearr_36719_37931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (4))){
var inst_36676 = (state_36713[(9)]);
var inst_36676__$1 = (state_36713[(2)]);
var inst_36678 = (inst_36676__$1 == null);
var inst_36679 = cljs.core.not(inst_36678);
var state_36713__$1 = (function (){var statearr_36722 = state_36713;
(statearr_36722[(9)] = inst_36676__$1);

return statearr_36722;
})();
if(inst_36679){
var statearr_36724_37935 = state_36713__$1;
(statearr_36724_37935[(1)] = (5));

} else {
var statearr_36725_37939 = state_36713__$1;
(statearr_36725_37939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (15))){
var inst_36703 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36727_37943 = state_36713__$1;
(statearr_36727_37943[(2)] = inst_36703);

(statearr_36727_37943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (13))){
var state_36713__$1 = state_36713;
var statearr_36729_37944 = state_36713__$1;
(statearr_36729_37944[(2)] = null);

(statearr_36729_37944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (6))){
var inst_36672 = (state_36713[(8)]);
var inst_36698 = inst_36672.length;
var inst_36699 = (inst_36698 > (0));
var state_36713__$1 = state_36713;
if(cljs.core.truth_(inst_36699)){
var statearr_36730_37946 = state_36713__$1;
(statearr_36730_37946[(1)] = (12));

} else {
var statearr_36732_37948 = state_36713__$1;
(statearr_36732_37948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (3))){
var inst_36711 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36713__$1,inst_36711);
} else {
if((state_val_36714 === (12))){
var inst_36672 = (state_36713[(8)]);
var inst_36701 = cljs.core.vec(inst_36672);
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36713__$1,(15),out,inst_36701);
} else {
if((state_val_36714 === (2))){
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36713__$1,(4),ch);
} else {
if((state_val_36714 === (11))){
var inst_36676 = (state_36713[(9)]);
var inst_36681 = (state_36713[(10)]);
var inst_36691 = (state_36713[(2)]);
var inst_36692 = [];
var inst_36693 = inst_36692.push(inst_36676);
var inst_36672 = inst_36692;
var inst_36673 = inst_36681;
var state_36713__$1 = (function (){var statearr_36736 = state_36713;
(statearr_36736[(11)] = inst_36691);

(statearr_36736[(12)] = inst_36693);

(statearr_36736[(7)] = inst_36673);

(statearr_36736[(8)] = inst_36672);

return statearr_36736;
})();
var statearr_36737_37957 = state_36713__$1;
(statearr_36737_37957[(2)] = null);

(statearr_36737_37957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (9))){
var inst_36672 = (state_36713[(8)]);
var inst_36689 = cljs.core.vec(inst_36672);
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36713__$1,(11),out,inst_36689);
} else {
if((state_val_36714 === (5))){
var inst_36676 = (state_36713[(9)]);
var inst_36673 = (state_36713[(7)]);
var inst_36681 = (state_36713[(10)]);
var inst_36681__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36676) : f.call(null,inst_36676));
var inst_36682 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36681__$1,inst_36673);
var inst_36683 = cljs.core.keyword_identical_QMARK_(inst_36673,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36684 = ((inst_36682) || (inst_36683));
var state_36713__$1 = (function (){var statearr_36739 = state_36713;
(statearr_36739[(10)] = inst_36681__$1);

return statearr_36739;
})();
if(cljs.core.truth_(inst_36684)){
var statearr_36740_37967 = state_36713__$1;
(statearr_36740_37967[(1)] = (8));

} else {
var statearr_36741_37968 = state_36713__$1;
(statearr_36741_37968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (14))){
var inst_36706 = (state_36713[(2)]);
var inst_36707 = cljs.core.async.close_BANG_(out);
var state_36713__$1 = (function (){var statearr_36744 = state_36713;
(statearr_36744[(13)] = inst_36706);

return statearr_36744;
})();
var statearr_36745_37970 = state_36713__$1;
(statearr_36745_37970[(2)] = inst_36707);

(statearr_36745_37970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (10))){
var inst_36696 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36748_37971 = state_36713__$1;
(statearr_36748_37971[(2)] = inst_36696);

(statearr_36748_37971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (8))){
var inst_36676 = (state_36713[(9)]);
var inst_36681 = (state_36713[(10)]);
var inst_36672 = (state_36713[(8)]);
var inst_36686 = inst_36672.push(inst_36676);
var tmp36743 = inst_36672;
var inst_36672__$1 = tmp36743;
var inst_36673 = inst_36681;
var state_36713__$1 = (function (){var statearr_36751 = state_36713;
(statearr_36751[(14)] = inst_36686);

(statearr_36751[(7)] = inst_36673);

(statearr_36751[(8)] = inst_36672__$1);

return statearr_36751;
})();
var statearr_36752_37974 = state_36713__$1;
(statearr_36752_37974[(2)] = null);

(statearr_36752_37974[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36754[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36754[(1)] = (1));

return statearr_36754;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36713){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36713);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36755){if((e36755 instanceof Object)){
var ex__34203__auto__ = e36755;
var statearr_36756_37981 = state_36713;
(statearr_36756_37981[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37983 = state_36713;
state_36713 = G__37983;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36758 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36758[(6)] = c__34267__auto___37927);

return statearr_36758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
