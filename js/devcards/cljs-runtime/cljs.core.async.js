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
var val_36856 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36856) : fn1.call(null,val_36856));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36856) : fn1.call(null,val_36856));
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
var n__4666__auto___36861 = n;
var x_36862 = (0);
while(true){
if((x_36862 < n__4666__auto___36861)){
(a[x_36862] = x_36862);

var G__36863 = (x_36862 + (1));
x_36862 = G__36863;
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
var G__34360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34355_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34360) : fret.call(null,G__34360));
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
var G__36872 = (i + (1));
i = G__36872;
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
var len__4789__auto___36874 = arguments.length;
var i__4790__auto___36876 = (0);
while(true){
if((i__4790__auto___36876 < len__4789__auto___36874)){
args__4795__auto__.push((arguments[i__4790__auto___36876]));

var G__36877 = (i__4790__auto___36876 + (1));
i__4790__auto___36876 = G__36877;
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
var c__34267__auto___36882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34416){
var state_val_34417 = (state_34416[(1)]);
if((state_val_34417 === (7))){
var inst_34412 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34418_36884 = state_34416__$1;
(statearr_34418_36884[(2)] = inst_34412);

(statearr_34418_36884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (1))){
var state_34416__$1 = state_34416;
var statearr_34419_36885 = state_34416__$1;
(statearr_34419_36885[(2)] = null);

(statearr_34419_36885[(1)] = (2));


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
var statearr_34421_36887 = state_34416__$1;
(statearr_34421_36887[(1)] = (5));

} else {
var statearr_34422_36888 = state_34416__$1;
(statearr_34422_36888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (13))){
var state_34416__$1 = state_34416;
var statearr_34423_36889 = state_34416__$1;
(statearr_34423_36889[(2)] = null);

(statearr_34423_36889[(1)] = (14));


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
var statearr_34424_36891 = state_34416__$1;
(statearr_34424_36891[(2)] = null);

(statearr_34424_36891[(1)] = (2));


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
var statearr_34425_36892 = state_34416__$1;
(statearr_34425_36892[(1)] = (12));

} else {
var statearr_34426_36894 = state_34416__$1;
(statearr_34426_36894[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (9))){
var state_34416__$1 = state_34416;
var statearr_34427_36895 = state_34416__$1;
(statearr_34427_36895[(2)] = null);

(statearr_34427_36895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (5))){
var state_34416__$1 = state_34416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34428_36896 = state_34416__$1;
(statearr_34428_36896[(1)] = (8));

} else {
var statearr_34429_36897 = state_34416__$1;
(statearr_34429_36897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (14))){
var inst_34410 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34430_36899 = state_34416__$1;
(statearr_34430_36899[(2)] = inst_34410);

(statearr_34430_36899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (10))){
var inst_34402 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34431_36900 = state_34416__$1;
(statearr_34431_36900[(2)] = inst_34402);

(statearr_34431_36900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (8))){
var inst_34399 = cljs.core.async.close_BANG_(to);
var state_34416__$1 = state_34416;
var statearr_34432_36902 = state_34416__$1;
(statearr_34432_36902[(2)] = inst_34399);

(statearr_34432_36902[(1)] = (10));


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
var statearr_34435_36904 = state_34416;
(statearr_34435_36904[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36905 = state_34416;
state_34416 = G__36905;
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
(statearr_34436[(6)] = c__34267__auto___36882);

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
var c__34267__auto___36908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34456_36911 = state_34450;
(statearr_34456_36911[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36912 = state_34450;
state_34450 = G__36912;
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
(statearr_34458[(6)] = c__34267__auto___36908);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34459){
var vec__34460 = p__34459;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(1),null);
var job = vec__34460;
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
var n__4666__auto___36915 = n;
var __36916 = (0);
while(true){
if((__36916 < n__4666__auto___36915)){
var G__34464_36917 = type;
var G__34464_36918__$1 = (((G__34464_36917 instanceof cljs.core.Keyword))?G__34464_36917.fqn:null);
switch (G__34464_36918__$1) {
case "compute":
var c__34267__auto___36920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34267__auto___36920,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36916,c__34267__auto___36920,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (state_34477){
var state_val_34479 = (state_34477[(1)]);
if((state_val_34479 === (1))){
var state_34477__$1 = state_34477;
var statearr_34484_36922 = state_34477__$1;
(statearr_34484_36922[(2)] = null);

(statearr_34484_36922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (2))){
var state_34477__$1 = state_34477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34477__$1,(4),jobs);
} else {
if((state_val_34479 === (3))){
var inst_34475 = (state_34477[(2)]);
var state_34477__$1 = state_34477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34477__$1,inst_34475);
} else {
if((state_val_34479 === (4))){
var inst_34467 = (state_34477[(2)]);
var inst_34468 = process(inst_34467);
var state_34477__$1 = state_34477;
if(cljs.core.truth_(inst_34468)){
var statearr_34487_36924 = state_34477__$1;
(statearr_34487_36924[(1)] = (5));

} else {
var statearr_34488_36925 = state_34477__$1;
(statearr_34488_36925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (5))){
var state_34477__$1 = state_34477;
var statearr_34489_36926 = state_34477__$1;
(statearr_34489_36926[(2)] = null);

(statearr_34489_36926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (6))){
var state_34477__$1 = state_34477;
var statearr_34490_36928 = state_34477__$1;
(statearr_34490_36928[(2)] = null);

(statearr_34490_36928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (7))){
var inst_34473 = (state_34477[(2)]);
var state_34477__$1 = state_34477;
var statearr_34491_36929 = state_34477__$1;
(statearr_34491_36929[(2)] = inst_34473);

(statearr_34491_36929[(1)] = (3));


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
});})(__36916,c__34267__auto___36920,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34199__auto__,c__34267__auto___36920,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34492 = [null,null,null,null,null,null,null];
(statearr_34492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34492[(1)] = (1));

return statearr_34492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34477){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34477);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34493){if((e34493 instanceof Object)){
var ex__34203__auto__ = e34493;
var statearr_34495_36931 = state_34477;
(statearr_34495_36931[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36933 = state_34477;
state_34477 = G__36933;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36916,switch__34199__auto__,c__34267__auto___36920,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34496 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34496[(6)] = c__34267__auto___36920);

return statearr_34496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36916,c__34267__auto___36920,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
case "async":
var c__34267__auto___36934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34267__auto___36934,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36916,c__34267__auto___36934,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (state_34509){
var state_val_34510 = (state_34509[(1)]);
if((state_val_34510 === (1))){
var state_34509__$1 = state_34509;
var statearr_34512_36936 = state_34509__$1;
(statearr_34512_36936[(2)] = null);

(statearr_34512_36936[(1)] = (2));


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
var statearr_34519_36937 = state_34509__$1;
(statearr_34519_36937[(1)] = (5));

} else {
var statearr_34520_36938 = state_34509__$1;
(statearr_34520_36938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (5))){
var state_34509__$1 = state_34509;
var statearr_34521_36940 = state_34509__$1;
(statearr_34521_36940[(2)] = null);

(statearr_34521_36940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (6))){
var state_34509__$1 = state_34509;
var statearr_34522_36942 = state_34509__$1;
(statearr_34522_36942[(2)] = null);

(statearr_34522_36942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (7))){
var inst_34505 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34523_36948 = state_34509__$1;
(statearr_34523_36948[(2)] = inst_34505);

(statearr_34523_36948[(1)] = (3));


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
});})(__36916,c__34267__auto___36934,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34199__auto__,c__34267__auto___36934,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async){
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
var statearr_34526_36950 = state_34509;
(statearr_34526_36950[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36951 = state_34509;
state_34509 = G__36951;
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
;})(__36916,switch__34199__auto__,c__34267__auto___36934,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34527 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34527[(6)] = c__34267__auto___36934);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36916,c__34267__auto___36934,G__34464_36917,G__34464_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34464_36918__$1)].join('')));

}

var G__36952 = (__36916 + (1));
__36916 = G__36952;
continue;
} else {
}
break;
}

var c__34267__auto___36954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34552){
var state_val_34553 = (state_34552[(1)]);
if((state_val_34553 === (7))){
var inst_34548 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
var statearr_34554_36958 = state_34552__$1;
(statearr_34554_36958[(2)] = inst_34548);

(statearr_34554_36958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (1))){
var state_34552__$1 = state_34552;
var statearr_34555_36959 = state_34552__$1;
(statearr_34555_36959[(2)] = null);

(statearr_34555_36959[(1)] = (2));


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
var statearr_34557_36960 = state_34552__$1;
(statearr_34557_36960[(1)] = (5));

} else {
var statearr_34558_36961 = state_34552__$1;
(statearr_34558_36961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (6))){
var inst_34535 = (state_34552[(8)]);
var inst_34530 = (state_34552[(7)]);
var inst_34535__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34540 = [inst_34530,inst_34535__$1];
var inst_34541 = (new cljs.core.PersistentVector(null,2,(5),inst_34538,inst_34540,null));
var state_34552__$1 = (function (){var statearr_34559 = state_34552;
(statearr_34559[(8)] = inst_34535__$1);

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
var statearr_34561_36967 = state_34552__$1;
(statearr_34561_36967[(2)] = null);

(statearr_34561_36967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (5))){
var inst_34533 = cljs.core.async.close_BANG_(jobs);
var state_34552__$1 = state_34552;
var statearr_34562_36970 = state_34552__$1;
(statearr_34562_36970[(2)] = inst_34533);

(statearr_34562_36970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (8))){
var inst_34535 = (state_34552[(8)]);
var inst_34543 = (state_34552[(2)]);
var state_34552__$1 = (function (){var statearr_34563 = state_34552;
(statearr_34563[(10)] = inst_34543);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34552__$1,(9),results,inst_34535);
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
var statearr_34566_36971 = state_34552;
(statearr_34566_36971[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36972 = state_34552;
state_34552 = G__36972;
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
(statearr_34567[(6)] = c__34267__auto___36954);

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
var statearr_34607_36975 = state_34605__$1;
(statearr_34607_36975[(2)] = inst_34601);

(statearr_34607_36975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (20))){
var state_34605__$1 = state_34605;
var statearr_34608_36977 = state_34605__$1;
(statearr_34608_36977[(2)] = null);

(statearr_34608_36977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34609_36980 = state_34605__$1;
(statearr_34609_36980[(2)] = null);

(statearr_34609_36980[(1)] = (2));


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
var statearr_34611_36982 = state_34605__$1;
(statearr_34611_36982[(1)] = (5));

} else {
var statearr_34612_36983 = state_34605__$1;
(statearr_34612_36983[(1)] = (6));

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
var statearr_34613_36984 = state_34605__$1;
(statearr_34613_36984[(2)] = inst_34596);

(statearr_34613_36984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (13))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34614 = state_34605;
(statearr_34614[(9)] = inst_34598);

return statearr_34614;
})();
var statearr_34615_36986 = state_34605__$1;
(statearr_34615_36986[(2)] = null);

(statearr_34615_36986[(1)] = (2));


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
var statearr_34616_36990 = state_34605__$1;
(statearr_34616_36990[(1)] = (19));

} else {
var statearr_34617_36991 = state_34605__$1;
(statearr_34617_36991[(1)] = (20));

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
var statearr_34618_36997 = state_34605__$1;
(statearr_34618_36997[(2)] = null);

(statearr_34618_36997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (11))){
var inst_34580 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34619 = state_34605;
(statearr_34619[(10)] = inst_34580);

return statearr_34619;
})();
var statearr_34620_37002 = state_34605__$1;
(statearr_34620_37002[(2)] = null);

(statearr_34620_37002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var state_34605__$1 = state_34605;
var statearr_34621_37003 = state_34605__$1;
(statearr_34621_37003[(2)] = null);

(statearr_34621_37003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var state_34605__$1 = state_34605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34622_37005 = state_34605__$1;
(statearr_34622_37005[(1)] = (8));

} else {
var statearr_34623_37006 = state_34605__$1;
(statearr_34623_37006[(1)] = (9));

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
var statearr_34625_37013 = state_34605__$1;
(statearr_34625_37013[(1)] = (15));

} else {
var statearr_34626_37015 = state_34605__$1;
(statearr_34626_37015[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (16))){
var state_34605__$1 = state_34605;
var statearr_34627_37021 = state_34605__$1;
(statearr_34627_37021[(2)] = false);

(statearr_34627_37021[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34577 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34628_37022 = state_34605__$1;
(statearr_34628_37022[(2)] = inst_34577);

(statearr_34628_37022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (18))){
var inst_34588 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34629_37023 = state_34605__$1;
(statearr_34629_37023[(2)] = inst_34588);

(statearr_34629_37023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34574 = cljs.core.async.close_BANG_(to);
var state_34605__$1 = state_34605;
var statearr_34630_37026 = state_34605__$1;
(statearr_34630_37026[(2)] = inst_34574);

(statearr_34630_37026[(1)] = (10));


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
var statearr_34633_37034 = state_34605;
(statearr_34633_37034[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37037 = state_34605;
state_34605 = G__37037;
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
var G__34638 = arguments.length;
switch (G__34638) {
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
var c__34267__auto___37064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34675){
var state_val_34676 = (state_34675[(1)]);
if((state_val_34676 === (7))){
var inst_34671 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34679_37070 = state_34675__$1;
(statearr_34679_37070[(2)] = inst_34671);

(statearr_34679_37070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (1))){
var state_34675__$1 = state_34675;
var statearr_34680_37071 = state_34675__$1;
(statearr_34680_37071[(2)] = null);

(statearr_34680_37071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (4))){
var inst_34652 = (state_34675[(7)]);
var inst_34652__$1 = (state_34675[(2)]);
var inst_34653 = (inst_34652__$1 == null);
var state_34675__$1 = (function (){var statearr_34681 = state_34675;
(statearr_34681[(7)] = inst_34652__$1);

return statearr_34681;
})();
if(cljs.core.truth_(inst_34653)){
var statearr_34682_37074 = state_34675__$1;
(statearr_34682_37074[(1)] = (5));

} else {
var statearr_34683_37079 = state_34675__$1;
(statearr_34683_37079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (13))){
var state_34675__$1 = state_34675;
var statearr_34684_37081 = state_34675__$1;
(statearr_34684_37081[(2)] = null);

(statearr_34684_37081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (6))){
var inst_34652 = (state_34675[(7)]);
var inst_34658 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34652) : p.call(null,inst_34652));
var state_34675__$1 = state_34675;
if(cljs.core.truth_(inst_34658)){
var statearr_34685_37083 = state_34675__$1;
(statearr_34685_37083[(1)] = (9));

} else {
var statearr_34686_37084 = state_34675__$1;
(statearr_34686_37084[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (3))){
var inst_34673 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34675__$1,inst_34673);
} else {
if((state_val_34676 === (12))){
var state_34675__$1 = state_34675;
var statearr_34688_37087 = state_34675__$1;
(statearr_34688_37087[(2)] = null);

(statearr_34688_37087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (2))){
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34675__$1,(4),ch);
} else {
if((state_val_34676 === (11))){
var inst_34652 = (state_34675[(7)]);
var inst_34662 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34675__$1,(8),inst_34662,inst_34652);
} else {
if((state_val_34676 === (9))){
var state_34675__$1 = state_34675;
var statearr_34690_37089 = state_34675__$1;
(statearr_34690_37089[(2)] = tc);

(statearr_34690_37089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (5))){
var inst_34655 = cljs.core.async.close_BANG_(tc);
var inst_34656 = cljs.core.async.close_BANG_(fc);
var state_34675__$1 = (function (){var statearr_34691 = state_34675;
(statearr_34691[(8)] = inst_34655);

return statearr_34691;
})();
var statearr_34692_37093 = state_34675__$1;
(statearr_34692_37093[(2)] = inst_34656);

(statearr_34692_37093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (14))){
var inst_34669 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34693_37095 = state_34675__$1;
(statearr_34693_37095[(2)] = inst_34669);

(statearr_34693_37095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (10))){
var state_34675__$1 = state_34675;
var statearr_34695_37098 = state_34675__$1;
(statearr_34695_37098[(2)] = fc);

(statearr_34695_37098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (8))){
var inst_34664 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
if(cljs.core.truth_(inst_34664)){
var statearr_34697_37100 = state_34675__$1;
(statearr_34697_37100[(1)] = (12));

} else {
var statearr_34698_37101 = state_34675__$1;
(statearr_34698_37101[(1)] = (13));

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
var statearr_34704_37109 = state_34675;
(statearr_34704_37109[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37111 = state_34675;
state_34675 = G__37111;
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
var state__34269__auto__ = (function (){var statearr_34705 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34705[(6)] = c__34267__auto___37064);

return statearr_34705;
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34727){
var state_val_34728 = (state_34727[(1)]);
if((state_val_34728 === (7))){
var inst_34723 = (state_34727[(2)]);
var state_34727__$1 = state_34727;
var statearr_34732_37115 = state_34727__$1;
(statearr_34732_37115[(2)] = inst_34723);

(statearr_34732_37115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (1))){
var inst_34707 = init;
var state_34727__$1 = (function (){var statearr_34733 = state_34727;
(statearr_34733[(7)] = inst_34707);

return statearr_34733;
})();
var statearr_34734_37117 = state_34727__$1;
(statearr_34734_37117[(2)] = null);

(statearr_34734_37117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (4))){
var inst_34710 = (state_34727[(8)]);
var inst_34710__$1 = (state_34727[(2)]);
var inst_34711 = (inst_34710__$1 == null);
var state_34727__$1 = (function (){var statearr_34735 = state_34727;
(statearr_34735[(8)] = inst_34710__$1);

return statearr_34735;
})();
if(cljs.core.truth_(inst_34711)){
var statearr_34736_37126 = state_34727__$1;
(statearr_34736_37126[(1)] = (5));

} else {
var statearr_34740_37127 = state_34727__$1;
(statearr_34740_37127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (6))){
var inst_34710 = (state_34727[(8)]);
var inst_34714 = (state_34727[(9)]);
var inst_34707 = (state_34727[(7)]);
var inst_34714__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34707,inst_34710) : f.call(null,inst_34707,inst_34710));
var inst_34715 = cljs.core.reduced_QMARK_(inst_34714__$1);
var state_34727__$1 = (function (){var statearr_34741 = state_34727;
(statearr_34741[(9)] = inst_34714__$1);

return statearr_34741;
})();
if(inst_34715){
var statearr_34742_37130 = state_34727__$1;
(statearr_34742_37130[(1)] = (8));

} else {
var statearr_34743_37131 = state_34727__$1;
(statearr_34743_37131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (3))){
var inst_34725 = (state_34727[(2)]);
var state_34727__$1 = state_34727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34727__$1,inst_34725);
} else {
if((state_val_34728 === (2))){
var state_34727__$1 = state_34727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34727__$1,(4),ch);
} else {
if((state_val_34728 === (9))){
var inst_34714 = (state_34727[(9)]);
var inst_34707 = inst_34714;
var state_34727__$1 = (function (){var statearr_34744 = state_34727;
(statearr_34744[(7)] = inst_34707);

return statearr_34744;
})();
var statearr_34745_37135 = state_34727__$1;
(statearr_34745_37135[(2)] = null);

(statearr_34745_37135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (5))){
var inst_34707 = (state_34727[(7)]);
var state_34727__$1 = state_34727;
var statearr_34746_37139 = state_34727__$1;
(statearr_34746_37139[(2)] = inst_34707);

(statearr_34746_37139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (10))){
var inst_34721 = (state_34727[(2)]);
var state_34727__$1 = state_34727;
var statearr_34747_37142 = state_34727__$1;
(statearr_34747_37142[(2)] = inst_34721);

(statearr_34747_37142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (8))){
var inst_34714 = (state_34727[(9)]);
var inst_34717 = cljs.core.deref(inst_34714);
var state_34727__$1 = state_34727;
var statearr_34751_37146 = state_34727__$1;
(statearr_34751_37146[(2)] = inst_34717);

(statearr_34751_37146[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34200__auto____1 = (function (state_34727){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34727);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34753){if((e34753 instanceof Object)){
var ex__34203__auto__ = e34753;
var statearr_34754_37147 = state_34727;
(statearr_34754_37147[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37148 = state_34727;
state_34727 = G__37148;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34200__auto__ = function(state_34727){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34200__auto____1.call(this,state_34727);
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
var statearr_34765_37159 = state_34761;
(statearr_34765_37159[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37164 = state_34761;
state_34761 = G__37164;
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34799){
var state_val_34800 = (state_34799[(1)]);
if((state_val_34800 === (7))){
var inst_34781 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34802_37176 = state_34799__$1;
(statearr_34802_37176[(2)] = inst_34781);

(statearr_34802_37176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (1))){
var inst_34769 = cljs.core.seq(coll);
var inst_34770 = inst_34769;
var state_34799__$1 = (function (){var statearr_34803 = state_34799;
(statearr_34803[(7)] = inst_34770);

return statearr_34803;
})();
var statearr_34804_37182 = state_34799__$1;
(statearr_34804_37182[(2)] = null);

(statearr_34804_37182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (4))){
var inst_34770 = (state_34799[(7)]);
var inst_34778 = cljs.core.first(inst_34770);
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34799__$1,(7),ch,inst_34778);
} else {
if((state_val_34800 === (13))){
var inst_34793 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34805_37185 = state_34799__$1;
(statearr_34805_37185[(2)] = inst_34793);

(statearr_34805_37185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (6))){
var inst_34784 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
if(cljs.core.truth_(inst_34784)){
var statearr_34807_37188 = state_34799__$1;
(statearr_34807_37188[(1)] = (8));

} else {
var statearr_34808_37189 = state_34799__$1;
(statearr_34808_37189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (3))){
var inst_34797 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34799__$1,inst_34797);
} else {
if((state_val_34800 === (12))){
var state_34799__$1 = state_34799;
var statearr_34810_37192 = state_34799__$1;
(statearr_34810_37192[(2)] = null);

(statearr_34810_37192[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (2))){
var inst_34770 = (state_34799[(7)]);
var state_34799__$1 = state_34799;
if(cljs.core.truth_(inst_34770)){
var statearr_34812_37197 = state_34799__$1;
(statearr_34812_37197[(1)] = (4));

} else {
var statearr_34814_37199 = state_34799__$1;
(statearr_34814_37199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (11))){
var inst_34790 = cljs.core.async.close_BANG_(ch);
var state_34799__$1 = state_34799;
var statearr_34817_37203 = state_34799__$1;
(statearr_34817_37203[(2)] = inst_34790);

(statearr_34817_37203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (9))){
var state_34799__$1 = state_34799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34818_37207 = state_34799__$1;
(statearr_34818_37207[(1)] = (11));

} else {
var statearr_34819_37208 = state_34799__$1;
(statearr_34819_37208[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (5))){
var inst_34770 = (state_34799[(7)]);
var state_34799__$1 = state_34799;
var statearr_34820_37209 = state_34799__$1;
(statearr_34820_37209[(2)] = inst_34770);

(statearr_34820_37209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (10))){
var inst_34795 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34821_37212 = state_34799__$1;
(statearr_34821_37212[(2)] = inst_34795);

(statearr_34821_37212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (8))){
var inst_34770 = (state_34799[(7)]);
var inst_34786 = cljs.core.next(inst_34770);
var inst_34770__$1 = inst_34786;
var state_34799__$1 = (function (){var statearr_34822 = state_34799;
(statearr_34822[(7)] = inst_34770__$1);

return statearr_34822;
})();
var statearr_34823_37215 = state_34799__$1;
(statearr_34823_37215[(2)] = null);

(statearr_34823_37215[(1)] = (2));


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
var statearr_34824 = [null,null,null,null,null,null,null,null];
(statearr_34824[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34824[(1)] = (1));

return statearr_34824;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34799){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34799);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34825){if((e34825 instanceof Object)){
var ex__34203__auto__ = e34825;
var statearr_34826_37217 = state_34799;
(statearr_34826_37217[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37218 = state_34799;
state_34799 = G__37218;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34830 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34830[(6)] = c__34267__auto__);

return statearr_34830;
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
var c__34267__auto___37267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34977){
var state_val_34983 = (state_34977[(1)]);
if((state_val_34983 === (7))){
var inst_34973 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_34985_37269 = state_34977__$1;
(statearr_34985_37269[(2)] = inst_34973);

(statearr_34985_37269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (20))){
var inst_34870 = (state_34977[(7)]);
var inst_34882 = cljs.core.first(inst_34870);
var inst_34883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(0),null);
var inst_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(1),null);
var state_34977__$1 = (function (){var statearr_34986 = state_34977;
(statearr_34986[(8)] = inst_34883);

return statearr_34986;
})();
if(cljs.core.truth_(inst_34884)){
var statearr_34987_37273 = state_34977__$1;
(statearr_34987_37273[(1)] = (22));

} else {
var statearr_34988_37274 = state_34977__$1;
(statearr_34988_37274[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (27))){
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
var statearr_34990_37281 = state_34977__$1;
(statearr_34990_37281[(1)] = (30));

} else {
var statearr_34992_37282 = state_34977__$1;
(statearr_34992_37282[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (1))){
var state_34977__$1 = state_34977;
var statearr_34994_37283 = state_34977__$1;
(statearr_34994_37283[(2)] = null);

(statearr_34994_37283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (24))){
var inst_34870 = (state_34977[(7)]);
var inst_34889 = (state_34977[(2)]);
var inst_34890 = cljs.core.next(inst_34870);
var inst_34848 = inst_34890;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34977__$1 = (function (){var statearr_34997 = state_34977;
(statearr_34997[(13)] = inst_34848);

(statearr_34997[(14)] = inst_34849);

(statearr_34997[(15)] = inst_34851);

(statearr_34997[(16)] = inst_34850);

(statearr_34997[(17)] = inst_34889);

return statearr_34997;
})();
var statearr_35000_37284 = state_34977__$1;
(statearr_35000_37284[(2)] = null);

(statearr_35000_37284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (39))){
var state_34977__$1 = state_34977;
var statearr_35004_37288 = state_34977__$1;
(statearr_35004_37288[(2)] = null);

(statearr_35004_37288[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (4))){
var inst_34839 = (state_34977[(12)]);
var inst_34839__$1 = (state_34977[(2)]);
var inst_34840 = (inst_34839__$1 == null);
var state_34977__$1 = (function (){var statearr_35005 = state_34977;
(statearr_35005[(12)] = inst_34839__$1);

return statearr_35005;
})();
if(cljs.core.truth_(inst_34840)){
var statearr_35006_37292 = state_34977__$1;
(statearr_35006_37292[(1)] = (5));

} else {
var statearr_35007_37294 = state_34977__$1;
(statearr_35007_37294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (15))){
var inst_34848 = (state_34977[(13)]);
var inst_34849 = (state_34977[(14)]);
var inst_34851 = (state_34977[(15)]);
var inst_34850 = (state_34977[(16)]);
var inst_34866 = (state_34977[(2)]);
var inst_34867 = (inst_34851 + (1));
var tmp35001 = inst_34848;
var tmp35002 = inst_34849;
var tmp35003 = inst_34850;
var inst_34848__$1 = tmp35001;
var inst_34849__$1 = tmp35002;
var inst_34850__$1 = tmp35003;
var inst_34851__$1 = inst_34867;
var state_34977__$1 = (function (){var statearr_35010 = state_34977;
(statearr_35010[(13)] = inst_34848__$1);

(statearr_35010[(18)] = inst_34866);

(statearr_35010[(14)] = inst_34849__$1);

(statearr_35010[(15)] = inst_34851__$1);

(statearr_35010[(16)] = inst_34850__$1);

return statearr_35010;
})();
var statearr_35012_37301 = state_34977__$1;
(statearr_35012_37301[(2)] = null);

(statearr_35012_37301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (21))){
var inst_34893 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35019_37303 = state_34977__$1;
(statearr_35019_37303[(2)] = inst_34893);

(statearr_35019_37303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (31))){
var inst_34919 = (state_34977[(10)]);
var inst_34923 = done(null);
var inst_34926 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34919);
var state_34977__$1 = (function (){var statearr_35020 = state_34977;
(statearr_35020[(19)] = inst_34923);

return statearr_35020;
})();
var statearr_35021_37309 = state_34977__$1;
(statearr_35021_37309[(2)] = inst_34926);

(statearr_35021_37309[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (32))){
var inst_34914 = (state_34977[(9)]);
var inst_34913 = (state_34977[(20)]);
var inst_34912 = (state_34977[(11)]);
var inst_34911 = (state_34977[(21)]);
var inst_34929 = (state_34977[(2)]);
var inst_34931 = (inst_34914 + (1));
var tmp35015 = inst_34913;
var tmp35016 = inst_34912;
var tmp35017 = inst_34911;
var inst_34911__$1 = tmp35017;
var inst_34912__$1 = tmp35016;
var inst_34913__$1 = tmp35015;
var inst_34914__$1 = inst_34931;
var state_34977__$1 = (function (){var statearr_35026 = state_34977;
(statearr_35026[(22)] = inst_34929);

(statearr_35026[(9)] = inst_34914__$1);

(statearr_35026[(20)] = inst_34913__$1);

(statearr_35026[(11)] = inst_34912__$1);

(statearr_35026[(21)] = inst_34911__$1);

return statearr_35026;
})();
var statearr_35039_37317 = state_34977__$1;
(statearr_35039_37317[(2)] = null);

(statearr_35039_37317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (40))){
var inst_34945 = (state_34977[(23)]);
var inst_34949 = done(null);
var inst_34950 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34945);
var state_34977__$1 = (function (){var statearr_35043 = state_34977;
(statearr_35043[(24)] = inst_34949);

return statearr_35043;
})();
var statearr_35044_37322 = state_34977__$1;
(statearr_35044_37322[(2)] = inst_34950);

(statearr_35044_37322[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (33))){
var inst_34934 = (state_34977[(25)]);
var inst_34937 = cljs.core.chunked_seq_QMARK_(inst_34934);
var state_34977__$1 = state_34977;
if(inst_34937){
var statearr_35048_37328 = state_34977__$1;
(statearr_35048_37328[(1)] = (36));

} else {
var statearr_35050_37329 = state_34977__$1;
(statearr_35050_37329[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (13))){
var inst_34860 = (state_34977[(26)]);
var inst_34863 = cljs.core.async.close_BANG_(inst_34860);
var state_34977__$1 = state_34977;
var statearr_35051_37331 = state_34977__$1;
(statearr_35051_37331[(2)] = inst_34863);

(statearr_35051_37331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (22))){
var inst_34883 = (state_34977[(8)]);
var inst_34886 = cljs.core.async.close_BANG_(inst_34883);
var state_34977__$1 = state_34977;
var statearr_35054_37335 = state_34977__$1;
(statearr_35054_37335[(2)] = inst_34886);

(statearr_35054_37335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (36))){
var inst_34934 = (state_34977[(25)]);
var inst_34940 = cljs.core.chunk_first(inst_34934);
var inst_34941 = cljs.core.chunk_rest(inst_34934);
var inst_34942 = cljs.core.count(inst_34940);
var inst_34911 = inst_34941;
var inst_34912 = inst_34940;
var inst_34913 = inst_34942;
var inst_34914 = (0);
var state_34977__$1 = (function (){var statearr_35062 = state_34977;
(statearr_35062[(9)] = inst_34914);

(statearr_35062[(20)] = inst_34913);

(statearr_35062[(11)] = inst_34912);

(statearr_35062[(21)] = inst_34911);

return statearr_35062;
})();
var statearr_35066_37341 = state_34977__$1;
(statearr_35066_37341[(2)] = null);

(statearr_35066_37341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (41))){
var inst_34934 = (state_34977[(25)]);
var inst_34952 = (state_34977[(2)]);
var inst_34953 = cljs.core.next(inst_34934);
var inst_34911 = inst_34953;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34977__$1 = (function (){var statearr_35072 = state_34977;
(statearr_35072[(27)] = inst_34952);

(statearr_35072[(9)] = inst_34914);

(statearr_35072[(20)] = inst_34913);

(statearr_35072[(11)] = inst_34912);

(statearr_35072[(21)] = inst_34911);

return statearr_35072;
})();
var statearr_35078_37350 = state_34977__$1;
(statearr_35078_37350[(2)] = null);

(statearr_35078_37350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (43))){
var state_34977__$1 = state_34977;
var statearr_35082_37351 = state_34977__$1;
(statearr_35082_37351[(2)] = null);

(statearr_35082_37351[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (29))){
var inst_34961 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35087_37354 = state_34977__$1;
(statearr_35087_37354[(2)] = inst_34961);

(statearr_35087_37354[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (44))){
var inst_34970 = (state_34977[(2)]);
var state_34977__$1 = (function (){var statearr_35092 = state_34977;
(statearr_35092[(28)] = inst_34970);

return statearr_35092;
})();
var statearr_35094_37357 = state_34977__$1;
(statearr_35094_37357[(2)] = null);

(statearr_35094_37357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (6))){
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
var state_34977__$1 = (function (){var statearr_35104 = state_34977;
(statearr_35104[(30)] = inst_34905);

(statearr_35104[(9)] = inst_34914);

(statearr_35104[(20)] = inst_34913);

(statearr_35104[(29)] = inst_34903__$1);

(statearr_35104[(11)] = inst_34912);

(statearr_35104[(21)] = inst_34911);

return statearr_35104;
})();
var statearr_35108_37362 = state_34977__$1;
(statearr_35108_37362[(2)] = null);

(statearr_35108_37362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (28))){
var inst_34934 = (state_34977[(25)]);
var inst_34911 = (state_34977[(21)]);
var inst_34934__$1 = cljs.core.seq(inst_34911);
var state_34977__$1 = (function (){var statearr_35114 = state_34977;
(statearr_35114[(25)] = inst_34934__$1);

return statearr_35114;
})();
if(inst_34934__$1){
var statearr_35118_37366 = state_34977__$1;
(statearr_35118_37366[(1)] = (33));

} else {
var statearr_35120_37368 = state_34977__$1;
(statearr_35120_37368[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (25))){
var inst_34914 = (state_34977[(9)]);
var inst_34913 = (state_34977[(20)]);
var inst_34916 = (inst_34914 < inst_34913);
var inst_34917 = inst_34916;
var state_34977__$1 = state_34977;
if(cljs.core.truth_(inst_34917)){
var statearr_35126_37370 = state_34977__$1;
(statearr_35126_37370[(1)] = (27));

} else {
var statearr_35129_37371 = state_34977__$1;
(statearr_35129_37371[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (34))){
var state_34977__$1 = state_34977;
var statearr_35145_37376 = state_34977__$1;
(statearr_35145_37376[(2)] = null);

(statearr_35145_37376[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (17))){
var state_34977__$1 = state_34977;
var statearr_35147_37379 = state_34977__$1;
(statearr_35147_37379[(2)] = null);

(statearr_35147_37379[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (3))){
var inst_34975 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34977__$1,inst_34975);
} else {
if((state_val_34983 === (12))){
var inst_34898 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35148_37381 = state_34977__$1;
(statearr_35148_37381[(2)] = inst_34898);

(statearr_35148_37381[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (2))){
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34977__$1,(4),ch);
} else {
if((state_val_34983 === (23))){
var state_34977__$1 = state_34977;
var statearr_35149_37384 = state_34977__$1;
(statearr_35149_37384[(2)] = null);

(statearr_35149_37384[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (35))){
var inst_34959 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35152_37386 = state_34977__$1;
(statearr_35152_37386[(2)] = inst_34959);

(statearr_35152_37386[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (19))){
var inst_34870 = (state_34977[(7)]);
var inst_34874 = cljs.core.chunk_first(inst_34870);
var inst_34875 = cljs.core.chunk_rest(inst_34870);
var inst_34876 = cljs.core.count(inst_34874);
var inst_34848 = inst_34875;
var inst_34849 = inst_34874;
var inst_34850 = inst_34876;
var inst_34851 = (0);
var state_34977__$1 = (function (){var statearr_35153 = state_34977;
(statearr_35153[(13)] = inst_34848);

(statearr_35153[(14)] = inst_34849);

(statearr_35153[(15)] = inst_34851);

(statearr_35153[(16)] = inst_34850);

return statearr_35153;
})();
var statearr_35156_37391 = state_34977__$1;
(statearr_35156_37391[(2)] = null);

(statearr_35156_37391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (11))){
var inst_34848 = (state_34977[(13)]);
var inst_34870 = (state_34977[(7)]);
var inst_34870__$1 = cljs.core.seq(inst_34848);
var state_34977__$1 = (function (){var statearr_35177 = state_34977;
(statearr_35177[(7)] = inst_34870__$1);

return statearr_35177;
})();
if(inst_34870__$1){
var statearr_35181_37392 = state_34977__$1;
(statearr_35181_37392[(1)] = (16));

} else {
var statearr_35182_37395 = state_34977__$1;
(statearr_35182_37395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (9))){
var inst_34900 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35183_37400 = state_34977__$1;
(statearr_35183_37400[(2)] = inst_34900);

(statearr_35183_37400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (5))){
var inst_34846 = cljs.core.deref(cs);
var inst_34847 = cljs.core.seq(inst_34846);
var inst_34848 = inst_34847;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34977__$1 = (function (){var statearr_35188 = state_34977;
(statearr_35188[(13)] = inst_34848);

(statearr_35188[(14)] = inst_34849);

(statearr_35188[(15)] = inst_34851);

(statearr_35188[(16)] = inst_34850);

return statearr_35188;
})();
var statearr_35189_37403 = state_34977__$1;
(statearr_35189_37403[(2)] = null);

(statearr_35189_37403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (14))){
var state_34977__$1 = state_34977;
var statearr_35190_37404 = state_34977__$1;
(statearr_35190_37404[(2)] = null);

(statearr_35190_37404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (45))){
var inst_34967 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35192_37406 = state_34977__$1;
(statearr_35192_37406[(2)] = inst_34967);

(statearr_35192_37406[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (26))){
var inst_34903 = (state_34977[(29)]);
var inst_34963 = (state_34977[(2)]);
var inst_34964 = cljs.core.seq(inst_34903);
var state_34977__$1 = (function (){var statearr_35198 = state_34977;
(statearr_35198[(31)] = inst_34963);

return statearr_35198;
})();
if(inst_34964){
var statearr_35201_37411 = state_34977__$1;
(statearr_35201_37411[(1)] = (42));

} else {
var statearr_35203_37412 = state_34977__$1;
(statearr_35203_37412[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (16))){
var inst_34870 = (state_34977[(7)]);
var inst_34872 = cljs.core.chunked_seq_QMARK_(inst_34870);
var state_34977__$1 = state_34977;
if(inst_34872){
var statearr_35209_37416 = state_34977__$1;
(statearr_35209_37416[(1)] = (19));

} else {
var statearr_35210_37417 = state_34977__$1;
(statearr_35210_37417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (38))){
var inst_34956 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35217_37418 = state_34977__$1;
(statearr_35217_37418[(2)] = inst_34956);

(statearr_35217_37418[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (30))){
var state_34977__$1 = state_34977;
var statearr_35225_37419 = state_34977__$1;
(statearr_35225_37419[(2)] = null);

(statearr_35225_37419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (10))){
var inst_34849 = (state_34977[(14)]);
var inst_34851 = (state_34977[(15)]);
var inst_34859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34849,inst_34851);
var inst_34860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(0),null);
var inst_34861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(1),null);
var state_34977__$1 = (function (){var statearr_35227 = state_34977;
(statearr_35227[(26)] = inst_34860);

return statearr_35227;
})();
if(cljs.core.truth_(inst_34861)){
var statearr_35233_37421 = state_34977__$1;
(statearr_35233_37421[(1)] = (13));

} else {
var statearr_35235_37425 = state_34977__$1;
(statearr_35235_37425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (18))){
var inst_34896 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35239_37427 = state_34977__$1;
(statearr_35239_37427[(2)] = inst_34896);

(statearr_35239_37427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (42))){
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34977__$1,(45),dchan);
} else {
if((state_val_34983 === (37))){
var inst_34934 = (state_34977[(25)]);
var inst_34945 = (state_34977[(23)]);
var inst_34839 = (state_34977[(12)]);
var inst_34945__$1 = cljs.core.first(inst_34934);
var inst_34946 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34945__$1,inst_34839,done);
var state_34977__$1 = (function (){var statearr_35249 = state_34977;
(statearr_35249[(23)] = inst_34945__$1);

return statearr_35249;
})();
if(cljs.core.truth_(inst_34946)){
var statearr_35250_37429 = state_34977__$1;
(statearr_35250_37429[(1)] = (39));

} else {
var statearr_35253_37432 = state_34977__$1;
(statearr_35253_37432[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (8))){
var inst_34851 = (state_34977[(15)]);
var inst_34850 = (state_34977[(16)]);
var inst_34853 = (inst_34851 < inst_34850);
var inst_34854 = inst_34853;
var state_34977__$1 = state_34977;
if(cljs.core.truth_(inst_34854)){
var statearr_35258_37433 = state_34977__$1;
(statearr_35258_37433[(1)] = (10));

} else {
var statearr_35260_37434 = state_34977__$1;
(statearr_35260_37434[(1)] = (11));

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
var statearr_35272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35272[(0)] = cljs$core$async$mult_$_state_machine__34200__auto__);

(statearr_35272[(1)] = (1));

return statearr_35272;
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
}catch (e35277){if((e35277 instanceof Object)){
var ex__34203__auto__ = e35277;
var statearr_35280_37441 = state_34977;
(statearr_35280_37441[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37443 = state_34977;
state_34977 = G__37443;
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
var state__34269__auto__ = (function (){var statearr_35287 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35287[(6)] = c__34267__auto___37267);

return statearr_35287;
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
var G__35300 = arguments.length;
switch (G__35300) {
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
var len__4789__auto___37492 = arguments.length;
var i__4790__auto___37494 = (0);
while(true){
if((i__4790__auto___37494 < len__4789__auto___37492)){
args__4795__auto__.push((arguments[i__4790__auto___37494]));

var G__37495 = (i__4790__auto___37494 + (1));
i__4790__auto___37494 = G__37495;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35371){
var map__35375 = p__35371;
var map__35375__$1 = (((((!((map__35375 == null))))?(((((map__35375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35375):map__35375);
var opts = map__35375__$1;
var statearr_35383_37500 = state;
(statearr_35383_37500[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35390_37504 = state;
(statearr_35390_37504[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35391_37506 = state;
(statearr_35391_37506[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35361){
var G__35362 = cljs.core.first(seq35361);
var seq35361__$1 = cljs.core.next(seq35361);
var G__35364 = cljs.core.first(seq35361__$1);
var seq35361__$2 = cljs.core.next(seq35361__$1);
var G__35365 = cljs.core.first(seq35361__$2);
var seq35361__$3 = cljs.core.next(seq35361__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35362,G__35364,G__35365,seq35361__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35418 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35419){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35419 = meta35419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35420,meta35419__$1){
var self__ = this;
var _35420__$1 = this;
return (new cljs.core.async.t_cljs$core$async35418(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35419__$1));
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35420){
var self__ = this;
var _35420__$1 = this;
return self__.meta35419;
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35419","meta35419",-169025107,null)], null);
}));

(cljs.core.async.t_cljs$core$async35418.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35418");

(cljs.core.async.t_cljs$core$async35418.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35418");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35418.
 */
cljs.core.async.__GT_t_cljs$core$async35418 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35418(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35419){
return (new cljs.core.async.t_cljs$core$async35418(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35419));
});

}

return (new cljs.core.async.t_cljs$core$async35418(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35622){
var state_val_35625 = (state_35622[(1)]);
if((state_val_35625 === (7))){
var inst_35497 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35641_37556 = state_35622__$1;
(statearr_35641_37556[(2)] = inst_35497);

(statearr_35641_37556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (20))){
var inst_35511 = (state_35622[(7)]);
var state_35622__$1 = state_35622;
var statearr_35648_37562 = state_35622__$1;
(statearr_35648_37562[(2)] = inst_35511);

(statearr_35648_37562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (27))){
var state_35622__$1 = state_35622;
var statearr_35653_37569 = state_35622__$1;
(statearr_35653_37569[(2)] = null);

(statearr_35653_37569[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (1))){
var inst_35478 = (state_35622[(8)]);
var inst_35478__$1 = calc_state();
var inst_35482 = (inst_35478__$1 == null);
var inst_35483 = cljs.core.not(inst_35482);
var state_35622__$1 = (function (){var statearr_35660 = state_35622;
(statearr_35660[(8)] = inst_35478__$1);

return statearr_35660;
})();
if(inst_35483){
var statearr_35662_37571 = state_35622__$1;
(statearr_35662_37571[(1)] = (2));

} else {
var statearr_35665_37573 = state_35622__$1;
(statearr_35665_37573[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (24))){
var inst_35544 = (state_35622[(9)]);
var inst_35556 = (state_35622[(10)]);
var inst_35588 = (state_35622[(11)]);
var inst_35588__$1 = (inst_35544.cljs$core$IFn$_invoke$arity$1 ? inst_35544.cljs$core$IFn$_invoke$arity$1(inst_35556) : inst_35544.call(null,inst_35556));
var state_35622__$1 = (function (){var statearr_35671 = state_35622;
(statearr_35671[(11)] = inst_35588__$1);

return statearr_35671;
})();
if(cljs.core.truth_(inst_35588__$1)){
var statearr_35675_37581 = state_35622__$1;
(statearr_35675_37581[(1)] = (29));

} else {
var statearr_35676_37582 = state_35622__$1;
(statearr_35676_37582[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (4))){
var inst_35500 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
if(cljs.core.truth_(inst_35500)){
var statearr_35677_37584 = state_35622__$1;
(statearr_35677_37584[(1)] = (8));

} else {
var statearr_35678_37586 = state_35622__$1;
(statearr_35678_37586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (15))){
var inst_35538 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
if(cljs.core.truth_(inst_35538)){
var statearr_35679_37587 = state_35622__$1;
(statearr_35679_37587[(1)] = (19));

} else {
var statearr_35680_37588 = state_35622__$1;
(statearr_35680_37588[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (21))){
var inst_35543 = (state_35622[(12)]);
var inst_35543__$1 = (state_35622[(2)]);
var inst_35544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35543__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35543__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35543__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35622__$1 = (function (){var statearr_35681 = state_35622;
(statearr_35681[(13)] = inst_35545);

(statearr_35681[(9)] = inst_35544);

(statearr_35681[(12)] = inst_35543__$1);

return statearr_35681;
})();
return cljs.core.async.ioc_alts_BANG_(state_35622__$1,(22),inst_35546);
} else {
if((state_val_35625 === (31))){
var inst_35598 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
if(cljs.core.truth_(inst_35598)){
var statearr_35684_37601 = state_35622__$1;
(statearr_35684_37601[(1)] = (32));

} else {
var statearr_35685_37602 = state_35622__$1;
(statearr_35685_37602[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (32))){
var inst_35554 = (state_35622[(14)]);
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35622__$1,(35),out,inst_35554);
} else {
if((state_val_35625 === (33))){
var inst_35543 = (state_35622[(12)]);
var inst_35511 = inst_35543;
var state_35622__$1 = (function (){var statearr_35686 = state_35622;
(statearr_35686[(7)] = inst_35511);

return statearr_35686;
})();
var statearr_35687_37609 = state_35622__$1;
(statearr_35687_37609[(2)] = null);

(statearr_35687_37609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (13))){
var inst_35511 = (state_35622[(7)]);
var inst_35525 = inst_35511.cljs$lang$protocol_mask$partition0$;
var inst_35526 = (inst_35525 & (64));
var inst_35527 = inst_35511.cljs$core$ISeq$;
var inst_35528 = (cljs.core.PROTOCOL_SENTINEL === inst_35527);
var inst_35529 = ((inst_35526) || (inst_35528));
var state_35622__$1 = state_35622;
if(cljs.core.truth_(inst_35529)){
var statearr_35690_37614 = state_35622__$1;
(statearr_35690_37614[(1)] = (16));

} else {
var statearr_35691_37615 = state_35622__$1;
(statearr_35691_37615[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (22))){
var inst_35554 = (state_35622[(14)]);
var inst_35556 = (state_35622[(10)]);
var inst_35553 = (state_35622[(2)]);
var inst_35554__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35553,(0),null);
var inst_35556__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35553,(1),null);
var inst_35559 = (inst_35554__$1 == null);
var inst_35560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35556__$1,change);
var inst_35561 = ((inst_35559) || (inst_35560));
var state_35622__$1 = (function (){var statearr_35692 = state_35622;
(statearr_35692[(14)] = inst_35554__$1);

(statearr_35692[(10)] = inst_35556__$1);

return statearr_35692;
})();
if(cljs.core.truth_(inst_35561)){
var statearr_35695_37627 = state_35622__$1;
(statearr_35695_37627[(1)] = (23));

} else {
var statearr_35696_37628 = state_35622__$1;
(statearr_35696_37628[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (36))){
var inst_35543 = (state_35622[(12)]);
var inst_35511 = inst_35543;
var state_35622__$1 = (function (){var statearr_35698 = state_35622;
(statearr_35698[(7)] = inst_35511);

return statearr_35698;
})();
var statearr_35700_37630 = state_35622__$1;
(statearr_35700_37630[(2)] = null);

(statearr_35700_37630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (29))){
var inst_35588 = (state_35622[(11)]);
var state_35622__$1 = state_35622;
var statearr_35702_37632 = state_35622__$1;
(statearr_35702_37632[(2)] = inst_35588);

(statearr_35702_37632[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (6))){
var state_35622__$1 = state_35622;
var statearr_35704_37638 = state_35622__$1;
(statearr_35704_37638[(2)] = false);

(statearr_35704_37638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (28))){
var inst_35580 = (state_35622[(2)]);
var inst_35581 = calc_state();
var inst_35511 = inst_35581;
var state_35622__$1 = (function (){var statearr_35707 = state_35622;
(statearr_35707[(15)] = inst_35580);

(statearr_35707[(7)] = inst_35511);

return statearr_35707;
})();
var statearr_35708_37643 = state_35622__$1;
(statearr_35708_37643[(2)] = null);

(statearr_35708_37643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (25))){
var inst_35615 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35712_37644 = state_35622__$1;
(statearr_35712_37644[(2)] = inst_35615);

(statearr_35712_37644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (34))){
var inst_35613 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35714_37647 = state_35622__$1;
(statearr_35714_37647[(2)] = inst_35613);

(statearr_35714_37647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (17))){
var state_35622__$1 = state_35622;
var statearr_35717_37655 = state_35622__$1;
(statearr_35717_37655[(2)] = false);

(statearr_35717_37655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (3))){
var state_35622__$1 = state_35622;
var statearr_35720_37658 = state_35622__$1;
(statearr_35720_37658[(2)] = false);

(statearr_35720_37658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (12))){
var inst_35617 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35622__$1,inst_35617);
} else {
if((state_val_35625 === (2))){
var inst_35478 = (state_35622[(8)]);
var inst_35486 = inst_35478.cljs$lang$protocol_mask$partition0$;
var inst_35487 = (inst_35486 & (64));
var inst_35491 = inst_35478.cljs$core$ISeq$;
var inst_35492 = (cljs.core.PROTOCOL_SENTINEL === inst_35491);
var inst_35493 = ((inst_35487) || (inst_35492));
var state_35622__$1 = state_35622;
if(cljs.core.truth_(inst_35493)){
var statearr_35723_37661 = state_35622__$1;
(statearr_35723_37661[(1)] = (5));

} else {
var statearr_35724_37666 = state_35622__$1;
(statearr_35724_37666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (23))){
var inst_35554 = (state_35622[(14)]);
var inst_35564 = (inst_35554 == null);
var state_35622__$1 = state_35622;
if(cljs.core.truth_(inst_35564)){
var statearr_35725_37670 = state_35622__$1;
(statearr_35725_37670[(1)] = (26));

} else {
var statearr_35726_37672 = state_35622__$1;
(statearr_35726_37672[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (35))){
var inst_35602 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
if(cljs.core.truth_(inst_35602)){
var statearr_35728_37674 = state_35622__$1;
(statearr_35728_37674[(1)] = (36));

} else {
var statearr_35730_37675 = state_35622__$1;
(statearr_35730_37675[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (19))){
var inst_35511 = (state_35622[(7)]);
var inst_35540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35511);
var state_35622__$1 = state_35622;
var statearr_35733_37678 = state_35622__$1;
(statearr_35733_37678[(2)] = inst_35540);

(statearr_35733_37678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (11))){
var inst_35511 = (state_35622[(7)]);
var inst_35519 = (inst_35511 == null);
var inst_35520 = cljs.core.not(inst_35519);
var state_35622__$1 = state_35622;
if(inst_35520){
var statearr_35735_37683 = state_35622__$1;
(statearr_35735_37683[(1)] = (13));

} else {
var statearr_35736_37685 = state_35622__$1;
(statearr_35736_37685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (9))){
var inst_35478 = (state_35622[(8)]);
var state_35622__$1 = state_35622;
var statearr_35742_37687 = state_35622__$1;
(statearr_35742_37687[(2)] = inst_35478);

(statearr_35742_37687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (5))){
var state_35622__$1 = state_35622;
var statearr_35745_37688 = state_35622__$1;
(statearr_35745_37688[(2)] = true);

(statearr_35745_37688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (14))){
var state_35622__$1 = state_35622;
var statearr_35748_37691 = state_35622__$1;
(statearr_35748_37691[(2)] = false);

(statearr_35748_37691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (26))){
var inst_35556 = (state_35622[(10)]);
var inst_35576 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35556);
var state_35622__$1 = state_35622;
var statearr_35750_37693 = state_35622__$1;
(statearr_35750_37693[(2)] = inst_35576);

(statearr_35750_37693[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (16))){
var state_35622__$1 = state_35622;
var statearr_35756_37694 = state_35622__$1;
(statearr_35756_37694[(2)] = true);

(statearr_35756_37694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (38))){
var inst_35609 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35770_37695 = state_35622__$1;
(statearr_35770_37695[(2)] = inst_35609);

(statearr_35770_37695[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (30))){
var inst_35545 = (state_35622[(13)]);
var inst_35544 = (state_35622[(9)]);
var inst_35556 = (state_35622[(10)]);
var inst_35593 = cljs.core.empty_QMARK_(inst_35544);
var inst_35594 = (inst_35545.cljs$core$IFn$_invoke$arity$1 ? inst_35545.cljs$core$IFn$_invoke$arity$1(inst_35556) : inst_35545.call(null,inst_35556));
var inst_35595 = cljs.core.not(inst_35594);
var inst_35596 = ((inst_35593) && (inst_35595));
var state_35622__$1 = state_35622;
var statearr_35775_37698 = state_35622__$1;
(statearr_35775_37698[(2)] = inst_35596);

(statearr_35775_37698[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (10))){
var inst_35478 = (state_35622[(8)]);
var inst_35505 = (state_35622[(2)]);
var inst_35507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35505,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35505,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35505,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35511 = inst_35478;
var state_35622__$1 = (function (){var statearr_35776 = state_35622;
(statearr_35776[(7)] = inst_35511);

(statearr_35776[(16)] = inst_35507);

(statearr_35776[(17)] = inst_35510);

(statearr_35776[(18)] = inst_35509);

return statearr_35776;
})();
var statearr_35777_37701 = state_35622__$1;
(statearr_35777_37701[(2)] = null);

(statearr_35777_37701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (18))){
var inst_35534 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35779_37702 = state_35622__$1;
(statearr_35779_37702[(2)] = inst_35534);

(statearr_35779_37702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (37))){
var state_35622__$1 = state_35622;
var statearr_35780_37703 = state_35622__$1;
(statearr_35780_37703[(2)] = null);

(statearr_35780_37703[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (8))){
var inst_35478 = (state_35622[(8)]);
var inst_35502 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35478);
var state_35622__$1 = state_35622;
var statearr_35781_37708 = state_35622__$1;
(statearr_35781_37708[(2)] = inst_35502);

(statearr_35781_37708[(1)] = (10));


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
var statearr_35785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35785[(0)] = cljs$core$async$mix_$_state_machine__34200__auto__);

(statearr_35785[(1)] = (1));

return statearr_35785;
});
var cljs$core$async$mix_$_state_machine__34200__auto____1 = (function (state_35622){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35622);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35790){if((e35790 instanceof Object)){
var ex__34203__auto__ = e35790;
var statearr_35791_37712 = state_35622;
(statearr_35791_37712[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35790;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37714 = state_35622;
state_35622 = G__37714;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34200__auto__ = function(state_35622){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34200__auto____1.call(this,state_35622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34200__auto____0;
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34200__auto____1;
return cljs$core$async$mix_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35793 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35793[(6)] = c__34267__auto___37555);

return statearr_35793;
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
var G__35823 = arguments.length;
switch (G__35823) {
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
var G__35826 = arguments.length;
switch (G__35826) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35824_SHARP_){
if(cljs.core.truth_((p1__35824_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35824_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35824_SHARP_.call(null,topic)))){
return p1__35824_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35824_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35833 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35834){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35834 = meta35834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35835,meta35834__$1){
var self__ = this;
var _35835__$1 = this;
return (new cljs.core.async.t_cljs$core$async35833(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35834__$1));
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35835){
var self__ = this;
var _35835__$1 = this;
return self__.meta35834;
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35834","meta35834",736940433,null)], null);
}));

(cljs.core.async.t_cljs$core$async35833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35833");

(cljs.core.async.t_cljs$core$async35833.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35833.
 */
cljs.core.async.__GT_t_cljs$core$async35833 = (function cljs$core$async$__GT_t_cljs$core$async35833(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35834){
return (new cljs.core.async.t_cljs$core$async35833(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35834));
});

}

return (new cljs.core.async.t_cljs$core$async35833(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35927){
var state_val_35928 = (state_35927[(1)]);
if((state_val_35928 === (7))){
var inst_35922 = (state_35927[(2)]);
var state_35927__$1 = state_35927;
var statearr_35931_37775 = state_35927__$1;
(statearr_35931_37775[(2)] = inst_35922);

(statearr_35931_37775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (20))){
var state_35927__$1 = state_35927;
var statearr_35934_37776 = state_35927__$1;
(statearr_35934_37776[(2)] = null);

(statearr_35934_37776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (1))){
var state_35927__$1 = state_35927;
var statearr_35935_37779 = state_35927__$1;
(statearr_35935_37779[(2)] = null);

(statearr_35935_37779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (24))){
var inst_35903 = (state_35927[(7)]);
var inst_35914 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35903);
var state_35927__$1 = state_35927;
var statearr_35937_37786 = state_35927__$1;
(statearr_35937_37786[(2)] = inst_35914);

(statearr_35937_37786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (4))){
var inst_35851 = (state_35927[(8)]);
var inst_35851__$1 = (state_35927[(2)]);
var inst_35852 = (inst_35851__$1 == null);
var state_35927__$1 = (function (){var statearr_35940 = state_35927;
(statearr_35940[(8)] = inst_35851__$1);

return statearr_35940;
})();
if(cljs.core.truth_(inst_35852)){
var statearr_35941_37788 = state_35927__$1;
(statearr_35941_37788[(1)] = (5));

} else {
var statearr_35942_37789 = state_35927__$1;
(statearr_35942_37789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (15))){
var inst_35897 = (state_35927[(2)]);
var state_35927__$1 = state_35927;
var statearr_35945_37791 = state_35927__$1;
(statearr_35945_37791[(2)] = inst_35897);

(statearr_35945_37791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (21))){
var inst_35919 = (state_35927[(2)]);
var state_35927__$1 = (function (){var statearr_35948 = state_35927;
(statearr_35948[(9)] = inst_35919);

return statearr_35948;
})();
var statearr_35949_37793 = state_35927__$1;
(statearr_35949_37793[(2)] = null);

(statearr_35949_37793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (13))){
var inst_35879 = (state_35927[(10)]);
var inst_35881 = cljs.core.chunked_seq_QMARK_(inst_35879);
var state_35927__$1 = state_35927;
if(inst_35881){
var statearr_35950_37800 = state_35927__$1;
(statearr_35950_37800[(1)] = (16));

} else {
var statearr_35951_37802 = state_35927__$1;
(statearr_35951_37802[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (22))){
var inst_35911 = (state_35927[(2)]);
var state_35927__$1 = state_35927;
if(cljs.core.truth_(inst_35911)){
var statearr_35955_37803 = state_35927__$1;
(statearr_35955_37803[(1)] = (23));

} else {
var statearr_35956_37805 = state_35927__$1;
(statearr_35956_37805[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (6))){
var inst_35851 = (state_35927[(8)]);
var inst_35903 = (state_35927[(7)]);
var inst_35905 = (state_35927[(11)]);
var inst_35903__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35851) : topic_fn.call(null,inst_35851));
var inst_35904 = cljs.core.deref(mults);
var inst_35905__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35904,inst_35903__$1);
var state_35927__$1 = (function (){var statearr_35959 = state_35927;
(statearr_35959[(7)] = inst_35903__$1);

(statearr_35959[(11)] = inst_35905__$1);

return statearr_35959;
})();
if(cljs.core.truth_(inst_35905__$1)){
var statearr_35962_37812 = state_35927__$1;
(statearr_35962_37812[(1)] = (19));

} else {
var statearr_35963_37815 = state_35927__$1;
(statearr_35963_37815[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (25))){
var inst_35916 = (state_35927[(2)]);
var state_35927__$1 = state_35927;
var statearr_35964_37817 = state_35927__$1;
(statearr_35964_37817[(2)] = inst_35916);

(statearr_35964_37817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (17))){
var inst_35879 = (state_35927[(10)]);
var inst_35888 = cljs.core.first(inst_35879);
var inst_35889 = cljs.core.async.muxch_STAR_(inst_35888);
var inst_35890 = cljs.core.async.close_BANG_(inst_35889);
var inst_35891 = cljs.core.next(inst_35879);
var inst_35861 = inst_35891;
var inst_35862 = null;
var inst_35863 = (0);
var inst_35864 = (0);
var state_35927__$1 = (function (){var statearr_35968 = state_35927;
(statearr_35968[(12)] = inst_35861);

(statearr_35968[(13)] = inst_35862);

(statearr_35968[(14)] = inst_35863);

(statearr_35968[(15)] = inst_35890);

(statearr_35968[(16)] = inst_35864);

return statearr_35968;
})();
var statearr_35971_37819 = state_35927__$1;
(statearr_35971_37819[(2)] = null);

(statearr_35971_37819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (3))){
var inst_35924 = (state_35927[(2)]);
var state_35927__$1 = state_35927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35927__$1,inst_35924);
} else {
if((state_val_35928 === (12))){
var inst_35899 = (state_35927[(2)]);
var state_35927__$1 = state_35927;
var statearr_35973_37824 = state_35927__$1;
(statearr_35973_37824[(2)] = inst_35899);

(statearr_35973_37824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (2))){
var state_35927__$1 = state_35927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35927__$1,(4),ch);
} else {
if((state_val_35928 === (23))){
var state_35927__$1 = state_35927;
var statearr_35977_37827 = state_35927__$1;
(statearr_35977_37827[(2)] = null);

(statearr_35977_37827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (19))){
var inst_35851 = (state_35927[(8)]);
var inst_35905 = (state_35927[(11)]);
var inst_35909 = cljs.core.async.muxch_STAR_(inst_35905);
var state_35927__$1 = state_35927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35927__$1,(22),inst_35909,inst_35851);
} else {
if((state_val_35928 === (11))){
var inst_35879 = (state_35927[(10)]);
var inst_35861 = (state_35927[(12)]);
var inst_35879__$1 = cljs.core.seq(inst_35861);
var state_35927__$1 = (function (){var statearr_35978 = state_35927;
(statearr_35978[(10)] = inst_35879__$1);

return statearr_35978;
})();
if(inst_35879__$1){
var statearr_35979_37834 = state_35927__$1;
(statearr_35979_37834[(1)] = (13));

} else {
var statearr_35980_37835 = state_35927__$1;
(statearr_35980_37835[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (9))){
var inst_35901 = (state_35927[(2)]);
var state_35927__$1 = state_35927;
var statearr_35981_37839 = state_35927__$1;
(statearr_35981_37839[(2)] = inst_35901);

(statearr_35981_37839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (5))){
var inst_35858 = cljs.core.deref(mults);
var inst_35859 = cljs.core.vals(inst_35858);
var inst_35860 = cljs.core.seq(inst_35859);
var inst_35861 = inst_35860;
var inst_35862 = null;
var inst_35863 = (0);
var inst_35864 = (0);
var state_35927__$1 = (function (){var statearr_35985 = state_35927;
(statearr_35985[(12)] = inst_35861);

(statearr_35985[(13)] = inst_35862);

(statearr_35985[(14)] = inst_35863);

(statearr_35985[(16)] = inst_35864);

return statearr_35985;
})();
var statearr_35986_37841 = state_35927__$1;
(statearr_35986_37841[(2)] = null);

(statearr_35986_37841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (14))){
var state_35927__$1 = state_35927;
var statearr_35990_37844 = state_35927__$1;
(statearr_35990_37844[(2)] = null);

(statearr_35990_37844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (16))){
var inst_35879 = (state_35927[(10)]);
var inst_35883 = cljs.core.chunk_first(inst_35879);
var inst_35884 = cljs.core.chunk_rest(inst_35879);
var inst_35885 = cljs.core.count(inst_35883);
var inst_35861 = inst_35884;
var inst_35862 = inst_35883;
var inst_35863 = inst_35885;
var inst_35864 = (0);
var state_35927__$1 = (function (){var statearr_35993 = state_35927;
(statearr_35993[(12)] = inst_35861);

(statearr_35993[(13)] = inst_35862);

(statearr_35993[(14)] = inst_35863);

(statearr_35993[(16)] = inst_35864);

return statearr_35993;
})();
var statearr_35995_37851 = state_35927__$1;
(statearr_35995_37851[(2)] = null);

(statearr_35995_37851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (10))){
var inst_35861 = (state_35927[(12)]);
var inst_35862 = (state_35927[(13)]);
var inst_35863 = (state_35927[(14)]);
var inst_35864 = (state_35927[(16)]);
var inst_35871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35862,inst_35864);
var inst_35872 = cljs.core.async.muxch_STAR_(inst_35871);
var inst_35873 = cljs.core.async.close_BANG_(inst_35872);
var inst_35875 = (inst_35864 + (1));
var tmp35987 = inst_35861;
var tmp35988 = inst_35862;
var tmp35989 = inst_35863;
var inst_35861__$1 = tmp35987;
var inst_35862__$1 = tmp35988;
var inst_35863__$1 = tmp35989;
var inst_35864__$1 = inst_35875;
var state_35927__$1 = (function (){var statearr_35998 = state_35927;
(statearr_35998[(12)] = inst_35861__$1);

(statearr_35998[(13)] = inst_35862__$1);

(statearr_35998[(17)] = inst_35873);

(statearr_35998[(14)] = inst_35863__$1);

(statearr_35998[(16)] = inst_35864__$1);

return statearr_35998;
})();
var statearr_36000_37860 = state_35927__$1;
(statearr_36000_37860[(2)] = null);

(statearr_36000_37860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (18))){
var inst_35894 = (state_35927[(2)]);
var state_35927__$1 = state_35927;
var statearr_36001_37864 = state_35927__$1;
(statearr_36001_37864[(2)] = inst_35894);

(statearr_36001_37864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (8))){
var inst_35863 = (state_35927[(14)]);
var inst_35864 = (state_35927[(16)]);
var inst_35867 = (inst_35864 < inst_35863);
var inst_35868 = inst_35867;
var state_35927__$1 = state_35927;
if(cljs.core.truth_(inst_35868)){
var statearr_36002_37867 = state_35927__$1;
(statearr_36002_37867[(1)] = (10));

} else {
var statearr_36003_37869 = state_35927__$1;
(statearr_36003_37869[(1)] = (11));

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
var statearr_36010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36010[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36010[(1)] = (1));

return statearr_36010;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35927){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35927);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36012){if((e36012 instanceof Object)){
var ex__34203__auto__ = e36012;
var statearr_36013_37875 = state_35927;
(statearr_36013_37875[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37880 = state_35927;
state_35927 = G__37880;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36018 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36018[(6)] = c__34267__auto___37773);

return statearr_36018;
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
var G__36025 = arguments.length;
switch (G__36025) {
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
var G__36034 = arguments.length;
switch (G__36034) {
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
var G__36036 = arguments.length;
switch (G__36036) {
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
var c__34267__auto___37899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36094){
var state_val_36095 = (state_36094[(1)]);
if((state_val_36095 === (7))){
var state_36094__$1 = state_36094;
var statearr_36097_37901 = state_36094__$1;
(statearr_36097_37901[(2)] = null);

(statearr_36097_37901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (1))){
var state_36094__$1 = state_36094;
var statearr_36099_37904 = state_36094__$1;
(statearr_36099_37904[(2)] = null);

(statearr_36099_37904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (4))){
var inst_36049 = (state_36094[(7)]);
var inst_36051 = (inst_36049 < cnt);
var state_36094__$1 = state_36094;
if(cljs.core.truth_(inst_36051)){
var statearr_36100_37907 = state_36094__$1;
(statearr_36100_37907[(1)] = (6));

} else {
var statearr_36103_37908 = state_36094__$1;
(statearr_36103_37908[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (15))){
var inst_36081 = (state_36094[(2)]);
var state_36094__$1 = state_36094;
var statearr_36106_37909 = state_36094__$1;
(statearr_36106_37909[(2)] = inst_36081);

(statearr_36106_37909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (13))){
var inst_36074 = cljs.core.async.close_BANG_(out);
var state_36094__$1 = state_36094;
var statearr_36109_37911 = state_36094__$1;
(statearr_36109_37911[(2)] = inst_36074);

(statearr_36109_37911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (6))){
var state_36094__$1 = state_36094;
var statearr_36110_37915 = state_36094__$1;
(statearr_36110_37915[(2)] = null);

(statearr_36110_37915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (3))){
var inst_36083 = (state_36094[(2)]);
var state_36094__$1 = state_36094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36094__$1,inst_36083);
} else {
if((state_val_36095 === (12))){
var inst_36071 = (state_36094[(8)]);
var inst_36071__$1 = (state_36094[(2)]);
var inst_36072 = cljs.core.some(cljs.core.nil_QMARK_,inst_36071__$1);
var state_36094__$1 = (function (){var statearr_36117 = state_36094;
(statearr_36117[(8)] = inst_36071__$1);

return statearr_36117;
})();
if(cljs.core.truth_(inst_36072)){
var statearr_36118_37922 = state_36094__$1;
(statearr_36118_37922[(1)] = (13));

} else {
var statearr_36119_37924 = state_36094__$1;
(statearr_36119_37924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (2))){
var inst_36044 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36049 = (0);
var state_36094__$1 = (function (){var statearr_36120 = state_36094;
(statearr_36120[(9)] = inst_36044);

(statearr_36120[(7)] = inst_36049);

return statearr_36120;
})();
var statearr_36121_37928 = state_36094__$1;
(statearr_36121_37928[(2)] = null);

(statearr_36121_37928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (11))){
var inst_36049 = (state_36094[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36094,(10),Object,null,(9));
var inst_36058 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36049) : chs__$1.call(null,inst_36049));
var inst_36059 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36049) : done.call(null,inst_36049));
var inst_36060 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36058,inst_36059);
var state_36094__$1 = state_36094;
var statearr_36122_37934 = state_36094__$1;
(statearr_36122_37934[(2)] = inst_36060);


cljs.core.async.impl.ioc_helpers.process_exception(state_36094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (9))){
var inst_36049 = (state_36094[(7)]);
var inst_36062 = (state_36094[(2)]);
var inst_36063 = (inst_36049 + (1));
var inst_36049__$1 = inst_36063;
var state_36094__$1 = (function (){var statearr_36123 = state_36094;
(statearr_36123[(7)] = inst_36049__$1);

(statearr_36123[(10)] = inst_36062);

return statearr_36123;
})();
var statearr_36124_37939 = state_36094__$1;
(statearr_36124_37939[(2)] = null);

(statearr_36124_37939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (5))){
var inst_36069 = (state_36094[(2)]);
var state_36094__$1 = (function (){var statearr_36125 = state_36094;
(statearr_36125[(11)] = inst_36069);

return statearr_36125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36094__$1,(12),dchan);
} else {
if((state_val_36095 === (14))){
var inst_36071 = (state_36094[(8)]);
var inst_36076 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36071);
var state_36094__$1 = state_36094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36094__$1,(16),out,inst_36076);
} else {
if((state_val_36095 === (16))){
var inst_36078 = (state_36094[(2)]);
var state_36094__$1 = (function (){var statearr_36130 = state_36094;
(statearr_36130[(12)] = inst_36078);

return statearr_36130;
})();
var statearr_36132_37945 = state_36094__$1;
(statearr_36132_37945[(2)] = null);

(statearr_36132_37945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (10))){
var inst_36053 = (state_36094[(2)]);
var inst_36054 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36094__$1 = (function (){var statearr_36135 = state_36094;
(statearr_36135[(13)] = inst_36053);

return statearr_36135;
})();
var statearr_36136_37946 = state_36094__$1;
(statearr_36136_37946[(2)] = inst_36054);


cljs.core.async.impl.ioc_helpers.process_exception(state_36094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (8))){
var inst_36067 = (state_36094[(2)]);
var state_36094__$1 = state_36094;
var statearr_36137_37948 = state_36094__$1;
(statearr_36137_37948[(2)] = inst_36067);

(statearr_36137_37948[(1)] = (5));


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
var statearr_36141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36141[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36141[(1)] = (1));

return statearr_36141;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36094){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36094);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36145){if((e36145 instanceof Object)){
var ex__34203__auto__ = e36145;
var statearr_36146_37953 = state_36094;
(statearr_36146_37953[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37954 = state_36094;
state_36094 = G__37954;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36148 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36148[(6)] = c__34267__auto___37899);

return statearr_36148;
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
var G__36174 = arguments.length;
switch (G__36174) {
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
var c__34267__auto___37963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36213){
var state_val_36214 = (state_36213[(1)]);
if((state_val_36214 === (7))){
var inst_36190 = (state_36213[(7)]);
var inst_36189 = (state_36213[(8)]);
var inst_36189__$1 = (state_36213[(2)]);
var inst_36190__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36189__$1,(0),null);
var inst_36191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36189__$1,(1),null);
var inst_36192 = (inst_36190__$1 == null);
var state_36213__$1 = (function (){var statearr_36217 = state_36213;
(statearr_36217[(7)] = inst_36190__$1);

(statearr_36217[(9)] = inst_36191);

(statearr_36217[(8)] = inst_36189__$1);

return statearr_36217;
})();
if(cljs.core.truth_(inst_36192)){
var statearr_36218_37965 = state_36213__$1;
(statearr_36218_37965[(1)] = (8));

} else {
var statearr_36219_37966 = state_36213__$1;
(statearr_36219_37966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (1))){
var inst_36178 = cljs.core.vec(chs);
var inst_36179 = inst_36178;
var state_36213__$1 = (function (){var statearr_36220 = state_36213;
(statearr_36220[(10)] = inst_36179);

return statearr_36220;
})();
var statearr_36221_37968 = state_36213__$1;
(statearr_36221_37968[(2)] = null);

(statearr_36221_37968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (4))){
var inst_36179 = (state_36213[(10)]);
var state_36213__$1 = state_36213;
return cljs.core.async.ioc_alts_BANG_(state_36213__$1,(7),inst_36179);
} else {
if((state_val_36214 === (6))){
var inst_36209 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
var statearr_36225_37973 = state_36213__$1;
(statearr_36225_37973[(2)] = inst_36209);

(statearr_36225_37973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (3))){
var inst_36211 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36213__$1,inst_36211);
} else {
if((state_val_36214 === (2))){
var inst_36179 = (state_36213[(10)]);
var inst_36181 = cljs.core.count(inst_36179);
var inst_36182 = (inst_36181 > (0));
var state_36213__$1 = state_36213;
if(cljs.core.truth_(inst_36182)){
var statearr_36228_37974 = state_36213__$1;
(statearr_36228_37974[(1)] = (4));

} else {
var statearr_36229_37975 = state_36213__$1;
(statearr_36229_37975[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (11))){
var inst_36179 = (state_36213[(10)]);
var inst_36202 = (state_36213[(2)]);
var tmp36227 = inst_36179;
var inst_36179__$1 = tmp36227;
var state_36213__$1 = (function (){var statearr_36237 = state_36213;
(statearr_36237[(11)] = inst_36202);

(statearr_36237[(10)] = inst_36179__$1);

return statearr_36237;
})();
var statearr_36239_37976 = state_36213__$1;
(statearr_36239_37976[(2)] = null);

(statearr_36239_37976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (9))){
var inst_36190 = (state_36213[(7)]);
var state_36213__$1 = state_36213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36213__$1,(11),out,inst_36190);
} else {
if((state_val_36214 === (5))){
var inst_36207 = cljs.core.async.close_BANG_(out);
var state_36213__$1 = state_36213;
var statearr_36242_37980 = state_36213__$1;
(statearr_36242_37980[(2)] = inst_36207);

(statearr_36242_37980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (10))){
var inst_36205 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
var statearr_36244_37981 = state_36213__$1;
(statearr_36244_37981[(2)] = inst_36205);

(statearr_36244_37981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (8))){
var inst_36190 = (state_36213[(7)]);
var inst_36191 = (state_36213[(9)]);
var inst_36189 = (state_36213[(8)]);
var inst_36179 = (state_36213[(10)]);
var inst_36195 = (function (){var cs = inst_36179;
var vec__36185 = inst_36189;
var v = inst_36190;
var c = inst_36191;
return (function (p1__36149_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36149_SHARP_);
});
})();
var inst_36197 = cljs.core.filterv(inst_36195,inst_36179);
var inst_36179__$1 = inst_36197;
var state_36213__$1 = (function (){var statearr_36247 = state_36213;
(statearr_36247[(10)] = inst_36179__$1);

return statearr_36247;
})();
var statearr_36248_37986 = state_36213__$1;
(statearr_36248_37986[(2)] = null);

(statearr_36248_37986[(1)] = (2));


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
var statearr_36250 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36250[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36250[(1)] = (1));

return statearr_36250;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36213){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36213);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36252){if((e36252 instanceof Object)){
var ex__34203__auto__ = e36252;
var statearr_36253_37987 = state_36213;
(statearr_36253_37987[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37988 = state_36213;
state_36213 = G__37988;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36254 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36254[(6)] = c__34267__auto___37963);

return statearr_36254;
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
var G__36262 = arguments.length;
switch (G__36262) {
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
var c__34267__auto___37995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36294){
var state_val_36295 = (state_36294[(1)]);
if((state_val_36295 === (7))){
var inst_36276 = (state_36294[(7)]);
var inst_36276__$1 = (state_36294[(2)]);
var inst_36277 = (inst_36276__$1 == null);
var inst_36278 = cljs.core.not(inst_36277);
var state_36294__$1 = (function (){var statearr_36299 = state_36294;
(statearr_36299[(7)] = inst_36276__$1);

return statearr_36299;
})();
if(inst_36278){
var statearr_36300_37996 = state_36294__$1;
(statearr_36300_37996[(1)] = (8));

} else {
var statearr_36301_37997 = state_36294__$1;
(statearr_36301_37997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36295 === (1))){
var inst_36271 = (0);
var state_36294__$1 = (function (){var statearr_36303 = state_36294;
(statearr_36303[(8)] = inst_36271);

return statearr_36303;
})();
var statearr_36304_37998 = state_36294__$1;
(statearr_36304_37998[(2)] = null);

(statearr_36304_37998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36295 === (4))){
var state_36294__$1 = state_36294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36294__$1,(7),ch);
} else {
if((state_val_36295 === (6))){
var inst_36289 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
var statearr_36306_37999 = state_36294__$1;
(statearr_36306_37999[(2)] = inst_36289);

(statearr_36306_37999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36295 === (3))){
var inst_36291 = (state_36294[(2)]);
var inst_36292 = cljs.core.async.close_BANG_(out);
var state_36294__$1 = (function (){var statearr_36309 = state_36294;
(statearr_36309[(9)] = inst_36291);

return statearr_36309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36294__$1,inst_36292);
} else {
if((state_val_36295 === (2))){
var inst_36271 = (state_36294[(8)]);
var inst_36273 = (inst_36271 < n);
var state_36294__$1 = state_36294;
if(cljs.core.truth_(inst_36273)){
var statearr_36310_38004 = state_36294__$1;
(statearr_36310_38004[(1)] = (4));

} else {
var statearr_36311_38005 = state_36294__$1;
(statearr_36311_38005[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36295 === (11))){
var inst_36271 = (state_36294[(8)]);
var inst_36281 = (state_36294[(2)]);
var inst_36282 = (inst_36271 + (1));
var inst_36271__$1 = inst_36282;
var state_36294__$1 = (function (){var statearr_36312 = state_36294;
(statearr_36312[(10)] = inst_36281);

(statearr_36312[(8)] = inst_36271__$1);

return statearr_36312;
})();
var statearr_36313_38006 = state_36294__$1;
(statearr_36313_38006[(2)] = null);

(statearr_36313_38006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36295 === (9))){
var state_36294__$1 = state_36294;
var statearr_36316_38008 = state_36294__$1;
(statearr_36316_38008[(2)] = null);

(statearr_36316_38008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36295 === (5))){
var state_36294__$1 = state_36294;
var statearr_36317_38011 = state_36294__$1;
(statearr_36317_38011[(2)] = null);

(statearr_36317_38011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36295 === (10))){
var inst_36286 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
var statearr_36318_38012 = state_36294__$1;
(statearr_36318_38012[(2)] = inst_36286);

(statearr_36318_38012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36295 === (8))){
var inst_36276 = (state_36294[(7)]);
var state_36294__$1 = state_36294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36294__$1,(11),out,inst_36276);
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
var statearr_36321 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36321[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36321[(1)] = (1));

return statearr_36321;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36294){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36294);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36327){if((e36327 instanceof Object)){
var ex__34203__auto__ = e36327;
var statearr_36330_38013 = state_36294;
(statearr_36330_38013[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38015 = state_36294;
state_36294 = G__38015;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36331 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36331[(6)] = c__34267__auto___37995);

return statearr_36331;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36336 = (function (f,ch,meta36337){
this.f = f;
this.ch = ch;
this.meta36337 = meta36337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36338,meta36337__$1){
var self__ = this;
var _36338__$1 = this;
return (new cljs.core.async.t_cljs$core$async36336(self__.f,self__.ch,meta36337__$1));
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36338){
var self__ = this;
var _36338__$1 = this;
return self__.meta36337;
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36343 = (function (f,ch,meta36337,_,fn1,meta36344){
this.f = f;
this.ch = ch;
this.meta36337 = meta36337;
this._ = _;
this.fn1 = fn1;
this.meta36344 = meta36344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36345,meta36344__$1){
var self__ = this;
var _36345__$1 = this;
return (new cljs.core.async.t_cljs$core$async36343(self__.f,self__.ch,self__.meta36337,self__._,self__.fn1,meta36344__$1));
}));

(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36345){
var self__ = this;
var _36345__$1 = this;
return self__.meta36344;
}));

(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36334_SHARP_){
var G__36352 = (((p1__36334_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36334_SHARP_) : self__.f.call(null,p1__36334_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36352) : f1.call(null,G__36352));
});
}));

(cljs.core.async.t_cljs$core$async36343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36337","meta36337",-22991669,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36336","cljs.core.async/t_cljs$core$async36336",-1116160702,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36344","meta36344",-849983698,null)], null);
}));

(cljs.core.async.t_cljs$core$async36343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36343");

(cljs.core.async.t_cljs$core$async36343.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36343.
 */
cljs.core.async.__GT_t_cljs$core$async36343 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36343(f__$1,ch__$1,meta36337__$1,___$2,fn1__$1,meta36344){
return (new cljs.core.async.t_cljs$core$async36343(f__$1,ch__$1,meta36337__$1,___$2,fn1__$1,meta36344));
});

}

return (new cljs.core.async.t_cljs$core$async36343(self__.f,self__.ch,self__.meta36337,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36358 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36358) : self__.f.call(null,G__36358));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36337","meta36337",-22991669,null)], null);
}));

(cljs.core.async.t_cljs$core$async36336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36336");

(cljs.core.async.t_cljs$core$async36336.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36336.
 */
cljs.core.async.__GT_t_cljs$core$async36336 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36336(f__$1,ch__$1,meta36337){
return (new cljs.core.async.t_cljs$core$async36336(f__$1,ch__$1,meta36337));
});

}

return (new cljs.core.async.t_cljs$core$async36336(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36368 = (function (f,ch,meta36369){
this.f = f;
this.ch = ch;
this.meta36369 = meta36369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36370,meta36369__$1){
var self__ = this;
var _36370__$1 = this;
return (new cljs.core.async.t_cljs$core$async36368(self__.f,self__.ch,meta36369__$1));
}));

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36370){
var self__ = this;
var _36370__$1 = this;
return self__.meta36369;
}));

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36369","meta36369",-2060633949,null)], null);
}));

(cljs.core.async.t_cljs$core$async36368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36368");

(cljs.core.async.t_cljs$core$async36368.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36368.
 */
cljs.core.async.__GT_t_cljs$core$async36368 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36368(f__$1,ch__$1,meta36369){
return (new cljs.core.async.t_cljs$core$async36368(f__$1,ch__$1,meta36369));
});

}

return (new cljs.core.async.t_cljs$core$async36368(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36387 = (function (p,ch,meta36388){
this.p = p;
this.ch = ch;
this.meta36388 = meta36388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36389,meta36388__$1){
var self__ = this;
var _36389__$1 = this;
return (new cljs.core.async.t_cljs$core$async36387(self__.p,self__.ch,meta36388__$1));
}));

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36389){
var self__ = this;
var _36389__$1 = this;
return self__.meta36388;
}));

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36388","meta36388",571122377,null)], null);
}));

(cljs.core.async.t_cljs$core$async36387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36387");

(cljs.core.async.t_cljs$core$async36387.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36387.
 */
cljs.core.async.__GT_t_cljs$core$async36387 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36387(p__$1,ch__$1,meta36388){
return (new cljs.core.async.t_cljs$core$async36387(p__$1,ch__$1,meta36388));
});

}

return (new cljs.core.async.t_cljs$core$async36387(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36413 = arguments.length;
switch (G__36413) {
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
var c__34267__auto___38042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36445){
var state_val_36446 = (state_36445[(1)]);
if((state_val_36446 === (7))){
var inst_36440 = (state_36445[(2)]);
var state_36445__$1 = state_36445;
var statearr_36451_38045 = state_36445__$1;
(statearr_36451_38045[(2)] = inst_36440);

(statearr_36451_38045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (1))){
var state_36445__$1 = state_36445;
var statearr_36452_38047 = state_36445__$1;
(statearr_36452_38047[(2)] = null);

(statearr_36452_38047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (4))){
var inst_36421 = (state_36445[(7)]);
var inst_36421__$1 = (state_36445[(2)]);
var inst_36422 = (inst_36421__$1 == null);
var state_36445__$1 = (function (){var statearr_36454 = state_36445;
(statearr_36454[(7)] = inst_36421__$1);

return statearr_36454;
})();
if(cljs.core.truth_(inst_36422)){
var statearr_36455_38048 = state_36445__$1;
(statearr_36455_38048[(1)] = (5));

} else {
var statearr_36456_38049 = state_36445__$1;
(statearr_36456_38049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (6))){
var inst_36421 = (state_36445[(7)]);
var inst_36426 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36421) : p.call(null,inst_36421));
var state_36445__$1 = state_36445;
if(cljs.core.truth_(inst_36426)){
var statearr_36458_38051 = state_36445__$1;
(statearr_36458_38051[(1)] = (8));

} else {
var statearr_36459_38052 = state_36445__$1;
(statearr_36459_38052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (3))){
var inst_36442 = (state_36445[(2)]);
var state_36445__$1 = state_36445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36445__$1,inst_36442);
} else {
if((state_val_36446 === (2))){
var state_36445__$1 = state_36445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36445__$1,(4),ch);
} else {
if((state_val_36446 === (11))){
var inst_36434 = (state_36445[(2)]);
var state_36445__$1 = state_36445;
var statearr_36460_38055 = state_36445__$1;
(statearr_36460_38055[(2)] = inst_36434);

(statearr_36460_38055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (9))){
var state_36445__$1 = state_36445;
var statearr_36462_38056 = state_36445__$1;
(statearr_36462_38056[(2)] = null);

(statearr_36462_38056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (5))){
var inst_36424 = cljs.core.async.close_BANG_(out);
var state_36445__$1 = state_36445;
var statearr_36466_38057 = state_36445__$1;
(statearr_36466_38057[(2)] = inst_36424);

(statearr_36466_38057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (10))){
var inst_36437 = (state_36445[(2)]);
var state_36445__$1 = (function (){var statearr_36467 = state_36445;
(statearr_36467[(8)] = inst_36437);

return statearr_36467;
})();
var statearr_36469_38060 = state_36445__$1;
(statearr_36469_38060[(2)] = null);

(statearr_36469_38060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (8))){
var inst_36421 = (state_36445[(7)]);
var state_36445__$1 = state_36445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36445__$1,(11),out,inst_36421);
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
var statearr_36471 = [null,null,null,null,null,null,null,null,null];
(statearr_36471[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36471[(1)] = (1));

return statearr_36471;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36445){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36445);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36472){if((e36472 instanceof Object)){
var ex__34203__auto__ = e36472;
var statearr_36473_38062 = state_36445;
(statearr_36473_38062[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38064 = state_36445;
state_36445 = G__38064;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36475 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36475[(6)] = c__34267__auto___38042);

return statearr_36475;
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
var G__36478 = arguments.length;
switch (G__36478) {
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36549){
var state_val_36550 = (state_36549[(1)]);
if((state_val_36550 === (7))){
var inst_36544 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36554_38071 = state_36549__$1;
(statearr_36554_38071[(2)] = inst_36544);

(statearr_36554_38071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (20))){
var inst_36514 = (state_36549[(7)]);
var inst_36525 = (state_36549[(2)]);
var inst_36526 = cljs.core.next(inst_36514);
var inst_36495 = inst_36526;
var inst_36496 = null;
var inst_36497 = (0);
var inst_36498 = (0);
var state_36549__$1 = (function (){var statearr_36555 = state_36549;
(statearr_36555[(8)] = inst_36525);

(statearr_36555[(9)] = inst_36496);

(statearr_36555[(10)] = inst_36495);

(statearr_36555[(11)] = inst_36497);

(statearr_36555[(12)] = inst_36498);

return statearr_36555;
})();
var statearr_36557_38072 = state_36549__$1;
(statearr_36557_38072[(2)] = null);

(statearr_36557_38072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (1))){
var state_36549__$1 = state_36549;
var statearr_36558_38074 = state_36549__$1;
(statearr_36558_38074[(2)] = null);

(statearr_36558_38074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (4))){
var inst_36484 = (state_36549[(13)]);
var inst_36484__$1 = (state_36549[(2)]);
var inst_36485 = (inst_36484__$1 == null);
var state_36549__$1 = (function (){var statearr_36559 = state_36549;
(statearr_36559[(13)] = inst_36484__$1);

return statearr_36559;
})();
if(cljs.core.truth_(inst_36485)){
var statearr_36561_38077 = state_36549__$1;
(statearr_36561_38077[(1)] = (5));

} else {
var statearr_36562_38078 = state_36549__$1;
(statearr_36562_38078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (15))){
var state_36549__$1 = state_36549;
var statearr_36566_38079 = state_36549__$1;
(statearr_36566_38079[(2)] = null);

(statearr_36566_38079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (21))){
var state_36549__$1 = state_36549;
var statearr_36567_38080 = state_36549__$1;
(statearr_36567_38080[(2)] = null);

(statearr_36567_38080[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (13))){
var inst_36496 = (state_36549[(9)]);
var inst_36495 = (state_36549[(10)]);
var inst_36497 = (state_36549[(11)]);
var inst_36498 = (state_36549[(12)]);
var inst_36509 = (state_36549[(2)]);
var inst_36510 = (inst_36498 + (1));
var tmp36563 = inst_36496;
var tmp36564 = inst_36495;
var tmp36565 = inst_36497;
var inst_36495__$1 = tmp36564;
var inst_36496__$1 = tmp36563;
var inst_36497__$1 = tmp36565;
var inst_36498__$1 = inst_36510;
var state_36549__$1 = (function (){var statearr_36569 = state_36549;
(statearr_36569[(14)] = inst_36509);

(statearr_36569[(9)] = inst_36496__$1);

(statearr_36569[(10)] = inst_36495__$1);

(statearr_36569[(11)] = inst_36497__$1);

(statearr_36569[(12)] = inst_36498__$1);

return statearr_36569;
})();
var statearr_36571_38084 = state_36549__$1;
(statearr_36571_38084[(2)] = null);

(statearr_36571_38084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (22))){
var state_36549__$1 = state_36549;
var statearr_36572_38085 = state_36549__$1;
(statearr_36572_38085[(2)] = null);

(statearr_36572_38085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (6))){
var inst_36484 = (state_36549[(13)]);
var inst_36493 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36484) : f.call(null,inst_36484));
var inst_36494 = cljs.core.seq(inst_36493);
var inst_36495 = inst_36494;
var inst_36496 = null;
var inst_36497 = (0);
var inst_36498 = (0);
var state_36549__$1 = (function (){var statearr_36574 = state_36549;
(statearr_36574[(9)] = inst_36496);

(statearr_36574[(10)] = inst_36495);

(statearr_36574[(11)] = inst_36497);

(statearr_36574[(12)] = inst_36498);

return statearr_36574;
})();
var statearr_36575_38088 = state_36549__$1;
(statearr_36575_38088[(2)] = null);

(statearr_36575_38088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (17))){
var inst_36514 = (state_36549[(7)]);
var inst_36518 = cljs.core.chunk_first(inst_36514);
var inst_36519 = cljs.core.chunk_rest(inst_36514);
var inst_36520 = cljs.core.count(inst_36518);
var inst_36495 = inst_36519;
var inst_36496 = inst_36518;
var inst_36497 = inst_36520;
var inst_36498 = (0);
var state_36549__$1 = (function (){var statearr_36577 = state_36549;
(statearr_36577[(9)] = inst_36496);

(statearr_36577[(10)] = inst_36495);

(statearr_36577[(11)] = inst_36497);

(statearr_36577[(12)] = inst_36498);

return statearr_36577;
})();
var statearr_36578_38090 = state_36549__$1;
(statearr_36578_38090[(2)] = null);

(statearr_36578_38090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (3))){
var inst_36546 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36549__$1,inst_36546);
} else {
if((state_val_36550 === (12))){
var inst_36534 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36580_38093 = state_36549__$1;
(statearr_36580_38093[(2)] = inst_36534);

(statearr_36580_38093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (2))){
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36549__$1,(4),in$);
} else {
if((state_val_36550 === (23))){
var inst_36542 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36581_38095 = state_36549__$1;
(statearr_36581_38095[(2)] = inst_36542);

(statearr_36581_38095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (19))){
var inst_36529 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36583_38096 = state_36549__$1;
(statearr_36583_38096[(2)] = inst_36529);

(statearr_36583_38096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (11))){
var inst_36514 = (state_36549[(7)]);
var inst_36495 = (state_36549[(10)]);
var inst_36514__$1 = cljs.core.seq(inst_36495);
var state_36549__$1 = (function (){var statearr_36584 = state_36549;
(statearr_36584[(7)] = inst_36514__$1);

return statearr_36584;
})();
if(inst_36514__$1){
var statearr_36585_38098 = state_36549__$1;
(statearr_36585_38098[(1)] = (14));

} else {
var statearr_36586_38099 = state_36549__$1;
(statearr_36586_38099[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (9))){
var inst_36536 = (state_36549[(2)]);
var inst_36537 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36549__$1 = (function (){var statearr_36588 = state_36549;
(statearr_36588[(15)] = inst_36536);

return statearr_36588;
})();
if(cljs.core.truth_(inst_36537)){
var statearr_36589_38102 = state_36549__$1;
(statearr_36589_38102[(1)] = (21));

} else {
var statearr_36590_38103 = state_36549__$1;
(statearr_36590_38103[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (5))){
var inst_36487 = cljs.core.async.close_BANG_(out);
var state_36549__$1 = state_36549;
var statearr_36591_38104 = state_36549__$1;
(statearr_36591_38104[(2)] = inst_36487);

(statearr_36591_38104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (14))){
var inst_36514 = (state_36549[(7)]);
var inst_36516 = cljs.core.chunked_seq_QMARK_(inst_36514);
var state_36549__$1 = state_36549;
if(inst_36516){
var statearr_36593_38105 = state_36549__$1;
(statearr_36593_38105[(1)] = (17));

} else {
var statearr_36594_38106 = state_36549__$1;
(statearr_36594_38106[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (16))){
var inst_36532 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36595_38108 = state_36549__$1;
(statearr_36595_38108[(2)] = inst_36532);

(statearr_36595_38108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (10))){
var inst_36496 = (state_36549[(9)]);
var inst_36498 = (state_36549[(12)]);
var inst_36507 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36496,inst_36498);
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36549__$1,(13),out,inst_36507);
} else {
if((state_val_36550 === (18))){
var inst_36514 = (state_36549[(7)]);
var inst_36523 = cljs.core.first(inst_36514);
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36549__$1,(20),out,inst_36523);
} else {
if((state_val_36550 === (8))){
var inst_36497 = (state_36549[(11)]);
var inst_36498 = (state_36549[(12)]);
var inst_36504 = (inst_36498 < inst_36497);
var inst_36505 = inst_36504;
var state_36549__$1 = state_36549;
if(cljs.core.truth_(inst_36505)){
var statearr_36598_38112 = state_36549__$1;
(statearr_36598_38112[(1)] = (10));

} else {
var statearr_36599_38113 = state_36549__$1;
(statearr_36599_38113[(1)] = (11));

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
var statearr_36600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36600[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__);

(statearr_36600[(1)] = (1));

return statearr_36600;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1 = (function (state_36549){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36549);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36602){if((e36602 instanceof Object)){
var ex__34203__auto__ = e36602;
var statearr_36603_38116 = state_36549;
(statearr_36603_38116[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38117 = state_36549;
state_36549 = G__38117;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = function(state_36549){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1.call(this,state_36549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36605 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36605[(6)] = c__34267__auto__);

return statearr_36605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36608 = arguments.length;
switch (G__36608) {
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
var G__36612 = arguments.length;
switch (G__36612) {
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
var G__36616 = arguments.length;
switch (G__36616) {
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
var c__34267__auto___38128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36642){
var state_val_36643 = (state_36642[(1)]);
if((state_val_36643 === (7))){
var inst_36637 = (state_36642[(2)]);
var state_36642__$1 = state_36642;
var statearr_36645_38131 = state_36642__$1;
(statearr_36645_38131[(2)] = inst_36637);

(statearr_36645_38131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (1))){
var inst_36619 = null;
var state_36642__$1 = (function (){var statearr_36647 = state_36642;
(statearr_36647[(7)] = inst_36619);

return statearr_36647;
})();
var statearr_36648_38132 = state_36642__$1;
(statearr_36648_38132[(2)] = null);

(statearr_36648_38132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (4))){
var inst_36622 = (state_36642[(8)]);
var inst_36622__$1 = (state_36642[(2)]);
var inst_36623 = (inst_36622__$1 == null);
var inst_36624 = cljs.core.not(inst_36623);
var state_36642__$1 = (function (){var statearr_36650 = state_36642;
(statearr_36650[(8)] = inst_36622__$1);

return statearr_36650;
})();
if(inst_36624){
var statearr_36651_38133 = state_36642__$1;
(statearr_36651_38133[(1)] = (5));

} else {
var statearr_36652_38135 = state_36642__$1;
(statearr_36652_38135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (6))){
var state_36642__$1 = state_36642;
var statearr_36653_38136 = state_36642__$1;
(statearr_36653_38136[(2)] = null);

(statearr_36653_38136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (3))){
var inst_36639 = (state_36642[(2)]);
var inst_36640 = cljs.core.async.close_BANG_(out);
var state_36642__$1 = (function (){var statearr_36655 = state_36642;
(statearr_36655[(9)] = inst_36639);

return statearr_36655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36642__$1,inst_36640);
} else {
if((state_val_36643 === (2))){
var state_36642__$1 = state_36642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36642__$1,(4),ch);
} else {
if((state_val_36643 === (11))){
var inst_36622 = (state_36642[(8)]);
var inst_36631 = (state_36642[(2)]);
var inst_36619 = inst_36622;
var state_36642__$1 = (function (){var statearr_36656 = state_36642;
(statearr_36656[(7)] = inst_36619);

(statearr_36656[(10)] = inst_36631);

return statearr_36656;
})();
var statearr_36658_38139 = state_36642__$1;
(statearr_36658_38139[(2)] = null);

(statearr_36658_38139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (9))){
var inst_36622 = (state_36642[(8)]);
var state_36642__$1 = state_36642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36642__$1,(11),out,inst_36622);
} else {
if((state_val_36643 === (5))){
var inst_36622 = (state_36642[(8)]);
var inst_36619 = (state_36642[(7)]);
var inst_36626 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36622,inst_36619);
var state_36642__$1 = state_36642;
if(inst_36626){
var statearr_36660_38143 = state_36642__$1;
(statearr_36660_38143[(1)] = (8));

} else {
var statearr_36662_38144 = state_36642__$1;
(statearr_36662_38144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (10))){
var inst_36634 = (state_36642[(2)]);
var state_36642__$1 = state_36642;
var statearr_36663_38145 = state_36642__$1;
(statearr_36663_38145[(2)] = inst_36634);

(statearr_36663_38145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (8))){
var inst_36619 = (state_36642[(7)]);
var tmp36659 = inst_36619;
var inst_36619__$1 = tmp36659;
var state_36642__$1 = (function (){var statearr_36664 = state_36642;
(statearr_36664[(7)] = inst_36619__$1);

return statearr_36664;
})();
var statearr_36665_38146 = state_36642__$1;
(statearr_36665_38146[(2)] = null);

(statearr_36665_38146[(1)] = (2));


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
var statearr_36667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36667[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36667[(1)] = (1));

return statearr_36667;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36642){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36642);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36668){if((e36668 instanceof Object)){
var ex__34203__auto__ = e36668;
var statearr_36670_38148 = state_36642;
(statearr_36670_38148[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36668;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38151 = state_36642;
state_36642 = G__38151;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36671 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36671[(6)] = c__34267__auto___38128);

return statearr_36671;
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
var G__36675 = arguments.length;
switch (G__36675) {
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
var c__34267__auto___38153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36715){
var state_val_36716 = (state_36715[(1)]);
if((state_val_36716 === (7))){
var inst_36711 = (state_36715[(2)]);
var state_36715__$1 = state_36715;
var statearr_36718_38155 = state_36715__$1;
(statearr_36718_38155[(2)] = inst_36711);

(statearr_36718_38155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36716 === (1))){
var inst_36677 = (new Array(n));
var inst_36678 = inst_36677;
var inst_36679 = (0);
var state_36715__$1 = (function (){var statearr_36720 = state_36715;
(statearr_36720[(7)] = inst_36679);

(statearr_36720[(8)] = inst_36678);

return statearr_36720;
})();
var statearr_36721_38157 = state_36715__$1;
(statearr_36721_38157[(2)] = null);

(statearr_36721_38157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36716 === (4))){
var inst_36683 = (state_36715[(9)]);
var inst_36683__$1 = (state_36715[(2)]);
var inst_36684 = (inst_36683__$1 == null);
var inst_36685 = cljs.core.not(inst_36684);
var state_36715__$1 = (function (){var statearr_36723 = state_36715;
(statearr_36723[(9)] = inst_36683__$1);

return statearr_36723;
})();
if(inst_36685){
var statearr_36724_38159 = state_36715__$1;
(statearr_36724_38159[(1)] = (5));

} else {
var statearr_36725_38160 = state_36715__$1;
(statearr_36725_38160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36716 === (15))){
var inst_36705 = (state_36715[(2)]);
var state_36715__$1 = state_36715;
var statearr_36726_38161 = state_36715__$1;
(statearr_36726_38161[(2)] = inst_36705);

(statearr_36726_38161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36716 === (13))){
var state_36715__$1 = state_36715;
var statearr_36728_38162 = state_36715__$1;
(statearr_36728_38162[(2)] = null);

(statearr_36728_38162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36716 === (6))){
var inst_36679 = (state_36715[(7)]);
var inst_36701 = (inst_36679 > (0));
var state_36715__$1 = state_36715;
if(cljs.core.truth_(inst_36701)){
var statearr_36729_38163 = state_36715__$1;
(statearr_36729_38163[(1)] = (12));

} else {
var statearr_36730_38164 = state_36715__$1;
(statearr_36730_38164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36716 === (3))){
var inst_36713 = (state_36715[(2)]);
var state_36715__$1 = state_36715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36715__$1,inst_36713);
} else {
if((state_val_36716 === (12))){
var inst_36678 = (state_36715[(8)]);
var inst_36703 = cljs.core.vec(inst_36678);
var state_36715__$1 = state_36715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36715__$1,(15),out,inst_36703);
} else {
if((state_val_36716 === (2))){
var state_36715__$1 = state_36715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36715__$1,(4),ch);
} else {
if((state_val_36716 === (11))){
var inst_36695 = (state_36715[(2)]);
var inst_36696 = (new Array(n));
var inst_36678 = inst_36696;
var inst_36679 = (0);
var state_36715__$1 = (function (){var statearr_36733 = state_36715;
(statearr_36733[(7)] = inst_36679);

(statearr_36733[(10)] = inst_36695);

(statearr_36733[(8)] = inst_36678);

return statearr_36733;
})();
var statearr_36734_38167 = state_36715__$1;
(statearr_36734_38167[(2)] = null);

(statearr_36734_38167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36716 === (9))){
var inst_36678 = (state_36715[(8)]);
var inst_36693 = cljs.core.vec(inst_36678);
var state_36715__$1 = state_36715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36715__$1,(11),out,inst_36693);
} else {
if((state_val_36716 === (5))){
var inst_36679 = (state_36715[(7)]);
var inst_36683 = (state_36715[(9)]);
var inst_36688 = (state_36715[(11)]);
var inst_36678 = (state_36715[(8)]);
var inst_36687 = (inst_36678[inst_36679] = inst_36683);
var inst_36688__$1 = (inst_36679 + (1));
var inst_36689 = (inst_36688__$1 < n);
var state_36715__$1 = (function (){var statearr_36736 = state_36715;
(statearr_36736[(12)] = inst_36687);

(statearr_36736[(11)] = inst_36688__$1);

return statearr_36736;
})();
if(cljs.core.truth_(inst_36689)){
var statearr_36737_38172 = state_36715__$1;
(statearr_36737_38172[(1)] = (8));

} else {
var statearr_36738_38173 = state_36715__$1;
(statearr_36738_38173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36716 === (14))){
var inst_36708 = (state_36715[(2)]);
var inst_36709 = cljs.core.async.close_BANG_(out);
var state_36715__$1 = (function (){var statearr_36741 = state_36715;
(statearr_36741[(13)] = inst_36708);

return statearr_36741;
})();
var statearr_36742_38177 = state_36715__$1;
(statearr_36742_38177[(2)] = inst_36709);

(statearr_36742_38177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36716 === (10))){
var inst_36699 = (state_36715[(2)]);
var state_36715__$1 = state_36715;
var statearr_36743_38178 = state_36715__$1;
(statearr_36743_38178[(2)] = inst_36699);

(statearr_36743_38178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36716 === (8))){
var inst_36688 = (state_36715[(11)]);
var inst_36678 = (state_36715[(8)]);
var tmp36739 = inst_36678;
var inst_36678__$1 = tmp36739;
var inst_36679 = inst_36688;
var state_36715__$1 = (function (){var statearr_36744 = state_36715;
(statearr_36744[(7)] = inst_36679);

(statearr_36744[(8)] = inst_36678__$1);

return statearr_36744;
})();
var statearr_36745_38182 = state_36715__$1;
(statearr_36745_38182[(2)] = null);

(statearr_36745_38182[(1)] = (2));


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
var statearr_36747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36747[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36747[(1)] = (1));

return statearr_36747;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36715){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36715);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36752){if((e36752 instanceof Object)){
var ex__34203__auto__ = e36752;
var statearr_36754_38185 = state_36715;
(statearr_36754_38185[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36752;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38187 = state_36715;
state_36715 = G__38187;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36756 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36756[(6)] = c__34267__auto___38153);

return statearr_36756;
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
var G__36759 = arguments.length;
switch (G__36759) {
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
var c__34267__auto___38191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36804){
var state_val_36805 = (state_36804[(1)]);
if((state_val_36805 === (7))){
var inst_36800 = (state_36804[(2)]);
var state_36804__$1 = state_36804;
var statearr_36807_38193 = state_36804__$1;
(statearr_36807_38193[(2)] = inst_36800);

(statearr_36807_38193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36805 === (1))){
var inst_36762 = [];
var inst_36763 = inst_36762;
var inst_36764 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36804__$1 = (function (){var statearr_36809 = state_36804;
(statearr_36809[(7)] = inst_36764);

(statearr_36809[(8)] = inst_36763);

return statearr_36809;
})();
var statearr_36810_38194 = state_36804__$1;
(statearr_36810_38194[(2)] = null);

(statearr_36810_38194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36805 === (4))){
var inst_36767 = (state_36804[(9)]);
var inst_36767__$1 = (state_36804[(2)]);
var inst_36768 = (inst_36767__$1 == null);
var inst_36769 = cljs.core.not(inst_36768);
var state_36804__$1 = (function (){var statearr_36812 = state_36804;
(statearr_36812[(9)] = inst_36767__$1);

return statearr_36812;
})();
if(inst_36769){
var statearr_36813_38196 = state_36804__$1;
(statearr_36813_38196[(1)] = (5));

} else {
var statearr_36814_38197 = state_36804__$1;
(statearr_36814_38197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36805 === (15))){
var inst_36794 = (state_36804[(2)]);
var state_36804__$1 = state_36804;
var statearr_36815_38198 = state_36804__$1;
(statearr_36815_38198[(2)] = inst_36794);

(statearr_36815_38198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36805 === (13))){
var state_36804__$1 = state_36804;
var statearr_36817_38200 = state_36804__$1;
(statearr_36817_38200[(2)] = null);

(statearr_36817_38200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36805 === (6))){
var inst_36763 = (state_36804[(8)]);
var inst_36789 = inst_36763.length;
var inst_36790 = (inst_36789 > (0));
var state_36804__$1 = state_36804;
if(cljs.core.truth_(inst_36790)){
var statearr_36818_38201 = state_36804__$1;
(statearr_36818_38201[(1)] = (12));

} else {
var statearr_36819_38202 = state_36804__$1;
(statearr_36819_38202[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36805 === (3))){
var inst_36802 = (state_36804[(2)]);
var state_36804__$1 = state_36804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36804__$1,inst_36802);
} else {
if((state_val_36805 === (12))){
var inst_36763 = (state_36804[(8)]);
var inst_36792 = cljs.core.vec(inst_36763);
var state_36804__$1 = state_36804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36804__$1,(15),out,inst_36792);
} else {
if((state_val_36805 === (2))){
var state_36804__$1 = state_36804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36804__$1,(4),ch);
} else {
if((state_val_36805 === (11))){
var inst_36771 = (state_36804[(10)]);
var inst_36767 = (state_36804[(9)]);
var inst_36782 = (state_36804[(2)]);
var inst_36783 = [];
var inst_36784 = inst_36783.push(inst_36767);
var inst_36763 = inst_36783;
var inst_36764 = inst_36771;
var state_36804__$1 = (function (){var statearr_36822 = state_36804;
(statearr_36822[(11)] = inst_36782);

(statearr_36822[(12)] = inst_36784);

(statearr_36822[(7)] = inst_36764);

(statearr_36822[(8)] = inst_36763);

return statearr_36822;
})();
var statearr_36823_38207 = state_36804__$1;
(statearr_36823_38207[(2)] = null);

(statearr_36823_38207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36805 === (9))){
var inst_36763 = (state_36804[(8)]);
var inst_36780 = cljs.core.vec(inst_36763);
var state_36804__$1 = state_36804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36804__$1,(11),out,inst_36780);
} else {
if((state_val_36805 === (5))){
var inst_36764 = (state_36804[(7)]);
var inst_36771 = (state_36804[(10)]);
var inst_36767 = (state_36804[(9)]);
var inst_36771__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36767) : f.call(null,inst_36767));
var inst_36772 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36771__$1,inst_36764);
var inst_36773 = cljs.core.keyword_identical_QMARK_(inst_36764,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36774 = ((inst_36772) || (inst_36773));
var state_36804__$1 = (function (){var statearr_36825 = state_36804;
(statearr_36825[(10)] = inst_36771__$1);

return statearr_36825;
})();
if(cljs.core.truth_(inst_36774)){
var statearr_36826_38212 = state_36804__$1;
(statearr_36826_38212[(1)] = (8));

} else {
var statearr_36827_38213 = state_36804__$1;
(statearr_36827_38213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36805 === (14))){
var inst_36797 = (state_36804[(2)]);
var inst_36798 = cljs.core.async.close_BANG_(out);
var state_36804__$1 = (function (){var statearr_36830 = state_36804;
(statearr_36830[(13)] = inst_36797);

return statearr_36830;
})();
var statearr_36831_38217 = state_36804__$1;
(statearr_36831_38217[(2)] = inst_36798);

(statearr_36831_38217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36805 === (10))){
var inst_36787 = (state_36804[(2)]);
var state_36804__$1 = state_36804;
var statearr_36832_38218 = state_36804__$1;
(statearr_36832_38218[(2)] = inst_36787);

(statearr_36832_38218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36805 === (8))){
var inst_36771 = (state_36804[(10)]);
var inst_36763 = (state_36804[(8)]);
var inst_36767 = (state_36804[(9)]);
var inst_36776 = inst_36763.push(inst_36767);
var tmp36829 = inst_36763;
var inst_36763__$1 = tmp36829;
var inst_36764 = inst_36771;
var state_36804__$1 = (function (){var statearr_36834 = state_36804;
(statearr_36834[(7)] = inst_36764);

(statearr_36834[(8)] = inst_36763__$1);

(statearr_36834[(14)] = inst_36776);

return statearr_36834;
})();
var statearr_36835_38220 = state_36804__$1;
(statearr_36835_38220[(2)] = null);

(statearr_36835_38220[(1)] = (2));


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
var statearr_36837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36837[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36837[(1)] = (1));

return statearr_36837;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36804){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36804);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36838){if((e36838 instanceof Object)){
var ex__34203__auto__ = e36838;
var statearr_36840_38223 = state_36804;
(statearr_36840_38223[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38224 = state_36804;
state_36804 = G__38224;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36841 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36841[(6)] = c__34267__auto___38191);

return statearr_36841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
