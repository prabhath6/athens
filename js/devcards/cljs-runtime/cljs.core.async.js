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
var G__34332 = arguments.length;
switch (G__34332) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34333 = (function (f,blockable,meta34334){
this.f = f;
this.blockable = blockable;
this.meta34334 = meta34334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34335,meta34334__$1){
var self__ = this;
var _34335__$1 = this;
return (new cljs.core.async.t_cljs$core$async34333(self__.f,self__.blockable,meta34334__$1));
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34335){
var self__ = this;
var _34335__$1 = this;
return self__.meta34334;
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34334","meta34334",-578887715,null)], null);
}));

(cljs.core.async.t_cljs$core$async34333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34333");

(cljs.core.async.t_cljs$core$async34333.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34333.
 */
cljs.core.async.__GT_t_cljs$core$async34333 = (function cljs$core$async$__GT_t_cljs$core$async34333(f__$1,blockable__$1,meta34334){
return (new cljs.core.async.t_cljs$core$async34333(f__$1,blockable__$1,meta34334));
});

}

return (new cljs.core.async.t_cljs$core$async34333(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34340 = arguments.length;
switch (G__34340) {
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
var G__34342 = arguments.length;
switch (G__34342) {
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
var G__34344 = arguments.length;
switch (G__34344) {
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
var val_36778 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36778) : fn1.call(null,val_36778));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36778) : fn1.call(null,val_36778));
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
var G__34346 = arguments.length;
switch (G__34346) {
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
var n__4666__auto___36783 = n;
var x_36784 = (0);
while(true){
if((x_36784 < n__4666__auto___36783)){
(a[x_36784] = x_36784);

var G__36785 = (x_36784 + (1));
x_36784 = G__36785;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34347 = (function (flag,meta34348){
this.flag = flag;
this.meta34348 = meta34348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34349,meta34348__$1){
var self__ = this;
var _34349__$1 = this;
return (new cljs.core.async.t_cljs$core$async34347(self__.flag,meta34348__$1));
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34349){
var self__ = this;
var _34349__$1 = this;
return self__.meta34348;
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34348","meta34348",2664160,null)], null);
}));

(cljs.core.async.t_cljs$core$async34347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34347");

(cljs.core.async.t_cljs$core$async34347.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34347.
 */
cljs.core.async.__GT_t_cljs$core$async34347 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34347(flag__$1,meta34348){
return (new cljs.core.async.t_cljs$core$async34347(flag__$1,meta34348));
});

}

return (new cljs.core.async.t_cljs$core$async34347(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34354 = (function (flag,cb,meta34355){
this.flag = flag;
this.cb = cb;
this.meta34355 = meta34355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34356,meta34355__$1){
var self__ = this;
var _34356__$1 = this;
return (new cljs.core.async.t_cljs$core$async34354(self__.flag,self__.cb,meta34355__$1));
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34356){
var self__ = this;
var _34356__$1 = this;
return self__.meta34355;
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34355","meta34355",-157438434,null)], null);
}));

(cljs.core.async.t_cljs$core$async34354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34354");

(cljs.core.async.t_cljs$core$async34354.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34354.
 */
cljs.core.async.__GT_t_cljs$core$async34354 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34354(flag__$1,cb__$1,meta34355){
return (new cljs.core.async.t_cljs$core$async34354(flag__$1,cb__$1,meta34355));
});

}

return (new cljs.core.async.t_cljs$core$async34354(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34362_SHARP_){
var G__34364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34362_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34364) : fret.call(null,G__34364));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34363_SHARP_){
var G__34365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34363_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34365) : fret.call(null,G__34365));
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
var G__36790 = (i + (1));
i = G__36790;
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
var len__4789__auto___36792 = arguments.length;
var i__4790__auto___36793 = (0);
while(true){
if((i__4790__auto___36793 < len__4789__auto___36792)){
args__4795__auto__.push((arguments[i__4790__auto___36793]));

var G__36795 = (i__4790__auto___36793 + (1));
i__4790__auto___36793 = G__36795;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34371){
var map__34372 = p__34371;
var map__34372__$1 = (((((!((map__34372 == null))))?(((((map__34372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34372):map__34372);
var opts = map__34372__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34366){
var G__34367 = cljs.core.first(seq34366);
var seq34366__$1 = cljs.core.next(seq34366);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34367,seq34366__$1);
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
var G__34384 = arguments.length;
switch (G__34384) {
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
var c__34273__auto___36800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34420){
var state_val_34421 = (state_34420[(1)]);
if((state_val_34421 === (7))){
var inst_34407 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34425_36801 = state_34420__$1;
(statearr_34425_36801[(2)] = inst_34407);

(statearr_34425_36801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (1))){
var state_34420__$1 = state_34420;
var statearr_34426_36803 = state_34420__$1;
(statearr_34426_36803[(2)] = null);

(statearr_34426_36803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (4))){
var inst_34390 = (state_34420[(7)]);
var inst_34390__$1 = (state_34420[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34420__$1 = (function (){var statearr_34427 = state_34420;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36804 = state_34420__$1;
(statearr_34428_36804[(1)] = (5));

} else {
var statearr_34429_36806 = state_34420__$1;
(statearr_34429_36806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (13))){
var state_34420__$1 = state_34420;
var statearr_34430_36807 = state_34420__$1;
(statearr_34430_36807[(2)] = null);

(statearr_34430_36807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (6))){
var inst_34390 = (state_34420[(7)]);
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34420__$1,(11),to,inst_34390);
} else {
if((state_val_34421 === (3))){
var inst_34412 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34420__$1,inst_34412);
} else {
if((state_val_34421 === (12))){
var state_34420__$1 = state_34420;
var statearr_34431_36809 = state_34420__$1;
(statearr_34431_36809[(2)] = null);

(statearr_34431_36809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (2))){
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34420__$1,(4),from);
} else {
if((state_val_34421 === (11))){
var inst_34400 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36810 = state_34420__$1;
(statearr_34432_36810[(1)] = (12));

} else {
var statearr_34433_36811 = state_34420__$1;
(statearr_34433_36811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (9))){
var state_34420__$1 = state_34420;
var statearr_34434_36812 = state_34420__$1;
(statearr_34434_36812[(2)] = null);

(statearr_34434_36812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (5))){
var state_34420__$1 = state_34420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36814 = state_34420__$1;
(statearr_34435_36814[(1)] = (8));

} else {
var statearr_34436_36815 = state_34420__$1;
(statearr_34436_36815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (14))){
var inst_34405 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34437_36816 = state_34420__$1;
(statearr_34437_36816[(2)] = inst_34405);

(statearr_34437_36816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (10))){
var inst_34397 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34438_36817 = state_34420__$1;
(statearr_34438_36817[(2)] = inst_34397);

(statearr_34438_36817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34420__$1 = state_34420;
var statearr_34439_36819 = state_34420__$1;
(statearr_34439_36819[(2)] = inst_34394);

(statearr_34439_36819[(1)] = (10));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_34440 = [null,null,null,null,null,null,null,null];
(statearr_34440[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34440[(1)] = (1));

return statearr_34440;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34420){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34420);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_36821 = state_34420;
(statearr_34442_36821[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36822 = state_34420;
state_34420 = G__36822;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34443 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34443[(6)] = c__34273__auto___36800);

return statearr_34443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var process = (function (p__34444){
var vec__34445 = p__34444;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(1),null);
var job = vec__34445;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34273__auto___36824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34452){
var state_val_34453 = (state_34452[(1)]);
if((state_val_34453 === (1))){
var state_34452__$1 = state_34452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34452__$1,(2),res,v);
} else {
if((state_val_34453 === (2))){
var inst_34449 = (state_34452[(2)]);
var inst_34450 = cljs.core.async.close_BANG_(res);
var state_34452__$1 = (function (){var statearr_34458 = state_34452;
(statearr_34458[(7)] = inst_34449);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34452__$1,inst_34450);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34459 = [null,null,null,null,null,null,null,null];
(statearr_34459[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34459[(1)] = (1));

return statearr_34459;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34452){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34452);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34460){if((e34460 instanceof Object)){
var ex__34210__auto__ = e34460;
var statearr_34461_36827 = state_34452;
(statearr_34461_36827[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36828 = state_34452;
state_34452 = G__36828;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34463 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34463[(6)] = c__34273__auto___36824);

return statearr_34463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34464){
var vec__34465 = p__34464;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34465,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34465,(1),null);
var job = vec__34465;
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
var n__4666__auto___36831 = n;
var __36832 = (0);
while(true){
if((__36832 < n__4666__auto___36831)){
var G__34468_36833 = type;
var G__34468_36834__$1 = (((G__34468_36833 instanceof cljs.core.Keyword))?G__34468_36833.fqn:null);
switch (G__34468_36834__$1) {
case "compute":
var c__34273__auto___36836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36832,c__34273__auto___36836,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36832,c__34273__auto___36836,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async){
return (function (state_34481){
var state_val_34482 = (state_34481[(1)]);
if((state_val_34482 === (1))){
var state_34481__$1 = state_34481;
var statearr_34485_36838 = state_34481__$1;
(statearr_34485_36838[(2)] = null);

(statearr_34485_36838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (2))){
var state_34481__$1 = state_34481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34481__$1,(4),jobs);
} else {
if((state_val_34482 === (3))){
var inst_34479 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34481__$1,inst_34479);
} else {
if((state_val_34482 === (4))){
var inst_34471 = (state_34481[(2)]);
var inst_34472 = process(inst_34471);
var state_34481__$1 = state_34481;
if(cljs.core.truth_(inst_34472)){
var statearr_34486_36840 = state_34481__$1;
(statearr_34486_36840[(1)] = (5));

} else {
var statearr_34487_36841 = state_34481__$1;
(statearr_34487_36841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (5))){
var state_34481__$1 = state_34481;
var statearr_34488_36842 = state_34481__$1;
(statearr_34488_36842[(2)] = null);

(statearr_34488_36842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (6))){
var state_34481__$1 = state_34481;
var statearr_34490_36844 = state_34481__$1;
(statearr_34490_36844[(2)] = null);

(statearr_34490_36844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (7))){
var inst_34477 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
var statearr_34491_36845 = state_34481__$1;
(statearr_34491_36845[(2)] = inst_34477);

(statearr_34491_36845[(1)] = (3));


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
});})(__36832,c__34273__auto___36836,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async))
;
return ((function (__36832,switch__34206__auto__,c__34273__auto___36836,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34492 = [null,null,null,null,null,null,null];
(statearr_34492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34492[(1)] = (1));

return statearr_34492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34481){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34481);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34493){if((e34493 instanceof Object)){
var ex__34210__auto__ = e34493;
var statearr_34495_36847 = state_34481;
(statearr_34495_36847[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36849 = state_34481;
state_34481 = G__36849;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36832,switch__34206__auto__,c__34273__auto___36836,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34500 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34500[(6)] = c__34273__auto___36836);

return statearr_34500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36832,c__34273__auto___36836,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36832,c__34273__auto___36851,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36832,c__34273__auto___36851,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34517_36852 = state_34515__$1;
(statearr_34517_36852[(2)] = null);

(statearr_34517_36852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (2))){
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34515__$1,(4),jobs);
} else {
if((state_val_34516 === (3))){
var inst_34513 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34515__$1,inst_34513);
} else {
if((state_val_34516 === (4))){
var inst_34505 = (state_34515[(2)]);
var inst_34506 = async(inst_34505);
var state_34515__$1 = state_34515;
if(cljs.core.truth_(inst_34506)){
var statearr_34518_36854 = state_34515__$1;
(statearr_34518_36854[(1)] = (5));

} else {
var statearr_34519_36855 = state_34515__$1;
(statearr_34519_36855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var state_34515__$1 = state_34515;
var statearr_34520_36857 = state_34515__$1;
(statearr_34520_36857[(2)] = null);

(statearr_34520_36857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34521_36858 = state_34515__$1;
(statearr_34521_36858[(2)] = null);

(statearr_34521_36858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34523_36860 = state_34515__$1;
(statearr_34523_36860[(2)] = inst_34511);

(statearr_34523_36860[(1)] = (3));


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
});})(__36832,c__34273__auto___36851,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async))
;
return ((function (__36832,switch__34206__auto__,c__34273__auto___36851,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34524 = [null,null,null,null,null,null,null];
(statearr_34524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34524[(1)] = (1));

return statearr_34524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34515){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34515);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34525){if((e34525 instanceof Object)){
var ex__34210__auto__ = e34525;
var statearr_34526_36862 = state_34515;
(statearr_34526_36862[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36863 = state_34515;
state_34515 = G__36863;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36832,switch__34206__auto__,c__34273__auto___36851,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34527 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34527[(6)] = c__34273__auto___36851);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36832,c__34273__auto___36851,G__34468_36833,G__34468_36834__$1,n__4666__auto___36831,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_36834__$1)].join('')));

}

var G__36865 = (__36832 + (1));
__36832 = G__36865;
continue;
} else {
}
break;
}

var c__34273__auto___36866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_36868 = state_34556__$1;
(statearr_34558_36868[(2)] = inst_34552);

(statearr_34558_36868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34559_36869 = state_34556__$1;
(statearr_34559_36869[(2)] = null);

(statearr_34559_36869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34534 = (state_34556[(7)]);
var inst_34534__$1 = (state_34556[(2)]);
var inst_34535 = (inst_34534__$1 == null);
var state_34556__$1 = (function (){var statearr_34560 = state_34556;
(statearr_34560[(7)] = inst_34534__$1);

return statearr_34560;
})();
if(cljs.core.truth_(inst_34535)){
var statearr_34561_36871 = state_34556__$1;
(statearr_34561_36871[(1)] = (5));

} else {
var statearr_34562_36872 = state_34556__$1;
(statearr_34562_36872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34534 = (state_34556[(7)]);
var inst_34539 = (state_34556[(8)]);
var inst_34539__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34544 = [inst_34534,inst_34539__$1];
var inst_34545 = (new cljs.core.PersistentVector(null,2,(5),inst_34540,inst_34544,null));
var state_34556__$1 = (function (){var statearr_34566 = state_34556;
(statearr_34566[(8)] = inst_34539__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(8),jobs,inst_34545);
} else {
if((state_val_34557 === (3))){
var inst_34554 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34556__$1,inst_34554);
} else {
if((state_val_34557 === (2))){
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34556__$1,(4),from);
} else {
if((state_val_34557 === (9))){
var inst_34549 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34567 = state_34556;
(statearr_34567[(9)] = inst_34549);

return statearr_34567;
})();
var statearr_34568_36875 = state_34556__$1;
(statearr_34568_36875[(2)] = null);

(statearr_34568_36875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34537 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36876 = state_34556__$1;
(statearr_34569_36876[(2)] = inst_34537);

(statearr_34569_36876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34539 = (state_34556[(8)]);
var inst_34547 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34570 = state_34556;
(statearr_34570[(10)] = inst_34547);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(9),results,inst_34539);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34571[(1)] = (1));

return statearr_34571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34556){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34556);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34572){if((e34572 instanceof Object)){
var ex__34210__auto__ = e34572;
var statearr_34573_36878 = state_34556;
(statearr_34573_36878[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36880 = state_34556;
state_34556 = G__36880;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34574 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34574[(6)] = c__34273__auto___36866);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34612){
var state_val_34613 = (state_34612[(1)]);
if((state_val_34613 === (7))){
var inst_34608 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34614_36882 = state_34612__$1;
(statearr_34614_36882[(2)] = inst_34608);

(statearr_34614_36882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36883 = state_34612__$1;
(statearr_34615_36883[(2)] = null);

(statearr_34615_36883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36885 = state_34612__$1;
(statearr_34616_36885[(2)] = null);

(statearr_34616_36885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (4))){
var inst_34577 = (state_34612[(7)]);
var inst_34577__$1 = (state_34612[(2)]);
var inst_34578 = (inst_34577__$1 == null);
var state_34612__$1 = (function (){var statearr_34617 = state_34612;
(statearr_34617[(7)] = inst_34577__$1);

return statearr_34617;
})();
if(cljs.core.truth_(inst_34578)){
var statearr_34618_36886 = state_34612__$1;
(statearr_34618_36886[(1)] = (5));

} else {
var statearr_34619_36887 = state_34612__$1;
(statearr_34619_36887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (15))){
var inst_34590 = (state_34612[(8)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34612__$1,(18),to,inst_34590);
} else {
if((state_val_34613 === (21))){
var inst_34603 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34620_36889 = state_34612__$1;
(statearr_34620_36889[(2)] = inst_34603);

(statearr_34620_36889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36891 = state_34612__$1;
(statearr_34622_36891[(2)] = null);

(statearr_34622_36891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (6))){
var inst_34577 = (state_34612[(7)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(11),inst_34577);
} else {
if((state_val_34613 === (17))){
var inst_34598 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
if(cljs.core.truth_(inst_34598)){
var statearr_34623_36892 = state_34612__$1;
(statearr_34623_36892[(1)] = (19));

} else {
var statearr_34624_36893 = state_34612__$1;
(statearr_34624_36893[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (3))){
var inst_34610 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34612__$1,inst_34610);
} else {
if((state_val_34613 === (12))){
var inst_34587 = (state_34612[(10)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(14),inst_34587);
} else {
if((state_val_34613 === (2))){
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(4),results);
} else {
if((state_val_34613 === (19))){
var state_34612__$1 = state_34612;
var statearr_34625_36895 = state_34612__$1;
(statearr_34625_36895[(2)] = null);

(statearr_34625_36895[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36897 = state_34612__$1;
(statearr_34627_36897[(2)] = null);

(statearr_34627_36897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36898 = state_34612__$1;
(statearr_34628_36898[(2)] = null);

(statearr_34628_36898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36900 = state_34612__$1;
(statearr_34629_36900[(1)] = (8));

} else {
var statearr_34630_36901 = state_34612__$1;
(statearr_34630_36901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (14))){
var inst_34590 = (state_34612[(8)]);
var inst_34590__$1 = (state_34612[(2)]);
var inst_34591 = (inst_34590__$1 == null);
var inst_34592 = cljs.core.not(inst_34591);
var state_34612__$1 = (function (){var statearr_34631 = state_34612;
(statearr_34631[(8)] = inst_34590__$1);

return statearr_34631;
})();
if(inst_34592){
var statearr_34632_36902 = state_34612__$1;
(statearr_34632_36902[(1)] = (15));

} else {
var statearr_34633_36904 = state_34612__$1;
(statearr_34633_36904[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36905 = state_34612__$1;
(statearr_34634_36905[(2)] = false);

(statearr_34634_36905[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36906 = state_34612__$1;
(statearr_34635_36906[(2)] = inst_34584);

(statearr_34635_36906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36908 = state_34612__$1;
(statearr_34636_36908[(2)] = inst_34595);

(statearr_34636_36908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36909 = state_34612__$1;
(statearr_34637_36909[(2)] = inst_34581);

(statearr_34637_36909[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34638[(1)] = (1));

return statearr_34638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34612){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34612);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34639){if((e34639 instanceof Object)){
var ex__34210__auto__ = e34639;
var statearr_34640_36911 = state_34612;
(statearr_34640_36911[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36913 = state_34612;
state_34612 = G__36913;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34641 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34641[(6)] = c__34273__auto__);

return statearr_34641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
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
var G__34643 = arguments.length;
switch (G__34643) {
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
var G__34645 = arguments.length;
switch (G__34645) {
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
var G__34647 = arguments.length;
switch (G__34647) {
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
var c__34273__auto___36922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34676){
var state_val_34677 = (state_34676[(1)]);
if((state_val_34677 === (7))){
var inst_34672 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34678_36923 = state_34676__$1;
(statearr_34678_36923[(2)] = inst_34672);

(statearr_34678_36923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (1))){
var state_34676__$1 = state_34676;
var statearr_34679_36925 = state_34676__$1;
(statearr_34679_36925[(2)] = null);

(statearr_34679_36925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (4))){
var inst_34650 = (state_34676[(7)]);
var inst_34650__$1 = (state_34676[(2)]);
var inst_34651 = (inst_34650__$1 == null);
var state_34676__$1 = (function (){var statearr_34683 = state_34676;
(statearr_34683[(7)] = inst_34650__$1);

return statearr_34683;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34684_36926 = state_34676__$1;
(statearr_34684_36926[(1)] = (5));

} else {
var statearr_34685_36928 = state_34676__$1;
(statearr_34685_36928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (13))){
var state_34676__$1 = state_34676;
var statearr_34688_36929 = state_34676__$1;
(statearr_34688_36929[(2)] = null);

(statearr_34688_36929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (6))){
var inst_34650 = (state_34676[(7)]);
var inst_34659 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34659)){
var statearr_34689_36930 = state_34676__$1;
(statearr_34689_36930[(1)] = (9));

} else {
var statearr_34690_36932 = state_34676__$1;
(statearr_34690_36932[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (3))){
var inst_34674 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34676__$1,inst_34674);
} else {
if((state_val_34677 === (12))){
var state_34676__$1 = state_34676;
var statearr_34692_36933 = state_34676__$1;
(statearr_34692_36933[(2)] = null);

(statearr_34692_36933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (2))){
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34676__$1,(4),ch);
} else {
if((state_val_34677 === (11))){
var inst_34650 = (state_34676[(7)]);
var inst_34663 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34676__$1,(8),inst_34663,inst_34650);
} else {
if((state_val_34677 === (9))){
var state_34676__$1 = state_34676;
var statearr_34693_36935 = state_34676__$1;
(statearr_34693_36935[(2)] = tc);

(statearr_34693_36935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34676__$1 = (function (){var statearr_34694 = state_34676;
(statearr_34694[(8)] = inst_34653);

return statearr_34694;
})();
var statearr_34697_36937 = state_34676__$1;
(statearr_34697_36937[(2)] = inst_34654);

(statearr_34697_36937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (14))){
var inst_34670 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34698_36938 = state_34676__$1;
(statearr_34698_36938[(2)] = inst_34670);

(statearr_34698_36938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (10))){
var state_34676__$1 = state_34676;
var statearr_34699_36939 = state_34676__$1;
(statearr_34699_36939[(2)] = fc);

(statearr_34699_36939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (8))){
var inst_34665 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34665)){
var statearr_34700_36941 = state_34676__$1;
(statearr_34700_36941[(1)] = (12));

} else {
var statearr_34701_36942 = state_34676__$1;
(statearr_34701_36942[(1)] = (13));

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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_34702 = [null,null,null,null,null,null,null,null,null];
(statearr_34702[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34702[(1)] = (1));

return statearr_34702;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34676){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34676);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34703){if((e34703 instanceof Object)){
var ex__34210__auto__ = e34703;
var statearr_34704_36944 = state_34676;
(statearr_34704_36944[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36946 = state_34676;
state_34676 = G__36946;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34707 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34707[(6)] = c__34273__auto___36922);

return statearr_34707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34733){
var state_val_34734 = (state_34733[(1)]);
if((state_val_34734 === (7))){
var inst_34726 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34735_36948 = state_34733__$1;
(statearr_34735_36948[(2)] = inst_34726);

(statearr_34735_36948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (1))){
var inst_34710 = init;
var state_34733__$1 = (function (){var statearr_34736 = state_34733;
(statearr_34736[(7)] = inst_34710);

return statearr_34736;
})();
var statearr_34737_36950 = state_34733__$1;
(statearr_34737_36950[(2)] = null);

(statearr_34737_36950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (4))){
var inst_34713 = (state_34733[(8)]);
var inst_34713__$1 = (state_34733[(2)]);
var inst_34714 = (inst_34713__$1 == null);
var state_34733__$1 = (function (){var statearr_34738 = state_34733;
(statearr_34738[(8)] = inst_34713__$1);

return statearr_34738;
})();
if(cljs.core.truth_(inst_34714)){
var statearr_34739_36952 = state_34733__$1;
(statearr_34739_36952[(1)] = (5));

} else {
var statearr_34741_36953 = state_34733__$1;
(statearr_34741_36953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (6))){
var inst_34713 = (state_34733[(8)]);
var inst_34710 = (state_34733[(7)]);
var inst_34717 = (state_34733[(9)]);
var inst_34717__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34710,inst_34713) : f.call(null,inst_34710,inst_34713));
var inst_34718 = cljs.core.reduced_QMARK_(inst_34717__$1);
var state_34733__$1 = (function (){var statearr_34742 = state_34733;
(statearr_34742[(9)] = inst_34717__$1);

return statearr_34742;
})();
if(inst_34718){
var statearr_34743_36955 = state_34733__$1;
(statearr_34743_36955[(1)] = (8));

} else {
var statearr_34744_36956 = state_34733__$1;
(statearr_34744_36956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (3))){
var inst_34728 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34733__$1,inst_34728);
} else {
if((state_val_34734 === (2))){
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34733__$1,(4),ch);
} else {
if((state_val_34734 === (9))){
var inst_34717 = (state_34733[(9)]);
var inst_34710 = inst_34717;
var state_34733__$1 = (function (){var statearr_34745 = state_34733;
(statearr_34745[(7)] = inst_34710);

return statearr_34745;
})();
var statearr_34746_36958 = state_34733__$1;
(statearr_34746_36958[(2)] = null);

(statearr_34746_36958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (5))){
var inst_34710 = (state_34733[(7)]);
var state_34733__$1 = state_34733;
var statearr_34747_36959 = state_34733__$1;
(statearr_34747_36959[(2)] = inst_34710);

(statearr_34747_36959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (10))){
var inst_34724 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34751_36961 = state_34733__$1;
(statearr_34751_36961[(2)] = inst_34724);

(statearr_34751_36961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (8))){
var inst_34717 = (state_34733[(9)]);
var inst_34720 = cljs.core.deref(inst_34717);
var state_34733__$1 = state_34733;
var statearr_34752_36962 = state_34733__$1;
(statearr_34752_36962[(2)] = inst_34720);

(statearr_34752_36962[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34753 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34753[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34753[(1)] = (1));

return statearr_34753;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34733){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34733);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34754){if((e34754 instanceof Object)){
var ex__34210__auto__ = e34754;
var statearr_34755_36964 = state_34733;
(statearr_34755_36964[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36966 = state_34733;
state_34733 = G__36966;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34733){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34759 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34759[(6)] = c__34273__auto__);

return statearr_34759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34765){
var state_val_34766 = (state_34765[(1)]);
if((state_val_34766 === (1))){
var inst_34760 = cljs.core.async.reduce(f__$1,init,ch);
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34765__$1,(2),inst_34760);
} else {
if((state_val_34766 === (2))){
var inst_34762 = (state_34765[(2)]);
var inst_34763 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34762) : f__$1.call(null,inst_34762));
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34765__$1,inst_34763);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34770 = [null,null,null,null,null,null,null];
(statearr_34770[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34770[(1)] = (1));

return statearr_34770;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34765){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34765);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34771){if((e34771 instanceof Object)){
var ex__34210__auto__ = e34771;
var statearr_34772_36970 = state_34765;
(statearr_34772_36970[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36971 = state_34765;
state_34765 = G__36971;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34765){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34773 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34773[(6)] = c__34273__auto__);

return statearr_34773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
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
var G__34775 = arguments.length;
switch (G__34775) {
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
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (7))){
var inst_34782 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34802_36976 = state_34800__$1;
(statearr_34802_36976[(2)] = inst_34782);

(statearr_34802_36976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34777);

return statearr_34803;
})();
var statearr_34804_36977 = state_34800__$1;
(statearr_34804_36977[(2)] = null);

(statearr_34804_36977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (4))){
var inst_34777 = (state_34800[(7)]);
var inst_34780 = cljs.core.first(inst_34777);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34800__$1,(7),ch,inst_34780);
} else {
if((state_val_34801 === (13))){
var inst_34794 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34805_36979 = state_34800__$1;
(statearr_34805_36979[(2)] = inst_34794);

(statearr_34805_36979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34806_36980 = state_34800__$1;
(statearr_34806_36980[(1)] = (8));

} else {
var statearr_34807_36981 = state_34800__$1;
(statearr_34807_36981[(1)] = (9));

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
var statearr_34808_36983 = state_34800__$1;
(statearr_34808_36983[(2)] = null);

(statearr_34808_36983[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34812_36984 = state_34800__$1;
(statearr_34812_36984[(1)] = (4));

} else {
var statearr_34813_36986 = state_34800__$1;
(statearr_34813_36986[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34814_36987 = state_34800__$1;
(statearr_34814_36987[(2)] = inst_34791);

(statearr_34814_36987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34818_36988 = state_34800__$1;
(statearr_34818_36988[(1)] = (11));

} else {
var statearr_34819_36989 = state_34800__$1;
(statearr_34819_36989[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34821_36991 = state_34800__$1;
(statearr_34821_36991[(2)] = inst_34777);

(statearr_34821_36991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34822_36992 = state_34800__$1;
(statearr_34822_36992[(2)] = inst_34796);

(statearr_34822_36992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34777 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34823 = state_34800;
(statearr_34823[(7)] = inst_34777__$1);

return statearr_34823;
})();
var statearr_34824_36994 = state_34800__$1;
(statearr_34824_36994[(2)] = null);

(statearr_34824_36994[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_34825 = [null,null,null,null,null,null,null,null];
(statearr_34825[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34825[(1)] = (1));

return statearr_34825;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34800){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34800);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34826){if((e34826 instanceof Object)){
var ex__34210__auto__ = e34826;
var statearr_34827_36996 = state_34800;
(statearr_34827_36996[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36997 = state_34800;
state_34800 = G__36997;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34829 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34829[(6)] = c__34273__auto__);

return statearr_34829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34841 = (function (ch,cs,meta34842){
this.ch = ch;
this.cs = cs;
this.meta34842 = meta34842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34843,meta34842__$1){
var self__ = this;
var _34843__$1 = this;
return (new cljs.core.async.t_cljs$core$async34841(self__.ch,self__.cs,meta34842__$1));
}));

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34843){
var self__ = this;
var _34843__$1 = this;
return self__.meta34842;
}));

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34842","meta34842",1188200688,null)], null);
}));

(cljs.core.async.t_cljs$core$async34841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34841");

(cljs.core.async.t_cljs$core$async34841.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34841.
 */
cljs.core.async.__GT_t_cljs$core$async34841 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34841(ch__$1,cs__$1,meta34842){
return (new cljs.core.async.t_cljs$core$async34841(ch__$1,cs__$1,meta34842));
});

}

return (new cljs.core.async.t_cljs$core$async34841(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34273__auto___37007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37009 = state_34978__$1;
(statearr_34980_37009[(2)] = inst_34974);

(statearr_34980_37009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (20))){
var inst_34877 = (state_34978[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34978__$1 = (function (){var statearr_34981 = state_34978;
(statearr_34981[(8)] = inst_34890);

return statearr_34981;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34984_37010 = state_34978__$1;
(statearr_34984_37010[(1)] = (22));

} else {
var statearr_34985_37012 = state_34978__$1;
(statearr_34985_37012[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (27))){
var inst_34846 = (state_34978[(9)]);
var inst_34926 = (state_34978[(10)]);
var inst_34919 = (state_34978[(11)]);
var inst_34921 = (state_34978[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34846,done);
var state_34978__$1 = (function (){var statearr_34989 = state_34978;
(statearr_34989[(10)] = inst_34926__$1);

return statearr_34989;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34991_37014 = state_34978__$1;
(statearr_34991_37014[(1)] = (30));

} else {
var statearr_34992_37015 = state_34978__$1;
(statearr_34992_37015[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34993_37016 = state_34978__$1;
(statearr_34993_37016[(2)] = null);

(statearr_34993_37016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (24))){
var inst_34877 = (state_34978[(7)]);
var inst_34896 = (state_34978[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_34994 = state_34978;
(statearr_34994[(13)] = inst_34857);

(statearr_34994[(14)] = inst_34856);

(statearr_34994[(15)] = inst_34858);

(statearr_34994[(16)] = inst_34896);

(statearr_34994[(17)] = inst_34855);

return statearr_34994;
})();
var statearr_34995_37018 = state_34978__$1;
(statearr_34995_37018[(2)] = null);

(statearr_34995_37018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34999_37019 = state_34978__$1;
(statearr_34999_37019[(2)] = null);

(statearr_34999_37019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (4))){
var inst_34846 = (state_34978[(9)]);
var inst_34846__$1 = (state_34978[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34978__$1 = (function (){var statearr_35000 = state_34978;
(statearr_35000[(9)] = inst_34846__$1);

return statearr_35000;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35001_37021 = state_34978__$1;
(statearr_35001_37021[(1)] = (5));

} else {
var statearr_35002_37022 = state_34978__$1;
(statearr_35002_37022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (15))){
var inst_34857 = (state_34978[(13)]);
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34855 = (state_34978[(17)]);
var inst_34873 = (state_34978[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp34996 = inst_34857;
var tmp34997 = inst_34856;
var tmp34998 = inst_34855;
var inst_34855__$1 = tmp34998;
var inst_34856__$1 = tmp34997;
var inst_34857__$1 = tmp34996;
var inst_34858__$1 = inst_34874;
var state_34978__$1 = (function (){var statearr_35007 = state_34978;
(statearr_35007[(18)] = inst_34873);

(statearr_35007[(13)] = inst_34857__$1);

(statearr_35007[(14)] = inst_34856__$1);

(statearr_35007[(15)] = inst_34858__$1);

(statearr_35007[(17)] = inst_34855__$1);

return statearr_35007;
})();
var statearr_35009_37024 = state_34978__$1;
(statearr_35009_37024[(2)] = null);

(statearr_35009_37024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35014_37026 = state_34978__$1;
(statearr_35014_37026[(2)] = inst_34900);

(statearr_35014_37026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (31))){
var inst_34926 = (state_34978[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34978__$1 = (function (){var statearr_35015 = state_34978;
(statearr_35015[(19)] = inst_34930);

return statearr_35015;
})();
var statearr_35016_37027 = state_34978__$1;
(statearr_35016_37027[(2)] = inst_34931);

(statearr_35016_37027[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (32))){
var inst_34918 = (state_34978[(20)]);
var inst_34919 = (state_34978[(11)]);
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34933 = (state_34978[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35011 = inst_34918;
var tmp35012 = inst_34919;
var tmp35013 = inst_34920;
var inst_34918__$1 = tmp35011;
var inst_34919__$1 = tmp35012;
var inst_34920__$1 = tmp35013;
var inst_34921__$1 = inst_34934;
var state_34978__$1 = (function (){var statearr_35017 = state_34978;
(statearr_35017[(20)] = inst_34918__$1);

(statearr_35017[(22)] = inst_34933);

(statearr_35017[(11)] = inst_34919__$1);

(statearr_35017[(21)] = inst_34920__$1);

(statearr_35017[(12)] = inst_34921__$1);

return statearr_35017;
})();
var statearr_35018_37030 = state_34978__$1;
(statearr_35018_37030[(2)] = null);

(statearr_35018_37030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (40))){
var inst_34946 = (state_34978[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34978__$1 = (function (){var statearr_35021 = state_34978;
(statearr_35021[(24)] = inst_34950);

return statearr_35021;
})();
var statearr_35023_37032 = state_34978__$1;
(statearr_35023_37032[(2)] = inst_34951);

(statearr_35023_37032[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35027_37033 = state_34978__$1;
(statearr_35027_37033[(1)] = (36));

} else {
var statearr_35028_37034 = state_34978__$1;
(statearr_35028_37034[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35029_37036 = state_34978__$1;
(statearr_35029_37036[(2)] = inst_34870);

(statearr_35029_37036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35030_37037 = state_34978__$1;
(statearr_35030_37037[(2)] = inst_34893);

(statearr_35030_37037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (36))){
var inst_34937 = (state_34978[(25)]);
var inst_34941 = cljs.core.chunk_first(inst_34937);
var inst_34942 = cljs.core.chunk_rest(inst_34937);
var inst_34943 = cljs.core.count(inst_34941);
var inst_34918 = inst_34942;
var inst_34919 = inst_34941;
var inst_34920 = inst_34943;
var inst_34921 = (0);
var state_34978__$1 = (function (){var statearr_35031 = state_34978;
(statearr_35031[(20)] = inst_34918);

(statearr_35031[(11)] = inst_34919);

(statearr_35031[(21)] = inst_34920);

(statearr_35031[(12)] = inst_34921);

return statearr_35031;
})();
var statearr_35032_37039 = state_34978__$1;
(statearr_35032_37039[(2)] = null);

(statearr_35032_37039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (41))){
var inst_34937 = (state_34978[(25)]);
var inst_34953 = (state_34978[(2)]);
var inst_34954 = cljs.core.next(inst_34937);
var inst_34918 = inst_34954;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34978__$1 = (function (){var statearr_35035 = state_34978;
(statearr_35035[(20)] = inst_34918);

(statearr_35035[(11)] = inst_34919);

(statearr_35035[(21)] = inst_34920);

(statearr_35035[(27)] = inst_34953);

(statearr_35035[(12)] = inst_34921);

return statearr_35035;
})();
var statearr_35038_37041 = state_34978__$1;
(statearr_35038_37041[(2)] = null);

(statearr_35038_37041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35041_37043 = state_34978__$1;
(statearr_35041_37043[(2)] = null);

(statearr_35041_37043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35042_37044 = state_34978__$1;
(statearr_35042_37044[(2)] = inst_34962);

(statearr_35042_37044[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35043 = state_34978;
(statearr_35043[(28)] = inst_34971);

return statearr_35043;
})();
var statearr_35044_37046 = state_34978__$1;
(statearr_35044_37046[(2)] = null);

(statearr_35044_37046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (6))){
var inst_34910 = (state_34978[(29)]);
var inst_34909 = cljs.core.deref(cs);
var inst_34910__$1 = cljs.core.keys(inst_34909);
var inst_34911 = cljs.core.count(inst_34910__$1);
var inst_34912 = cljs.core.reset_BANG_(dctr,inst_34911);
var inst_34917 = cljs.core.seq(inst_34910__$1);
var inst_34918 = inst_34917;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34978__$1 = (function (){var statearr_35049 = state_34978;
(statearr_35049[(20)] = inst_34918);

(statearr_35049[(29)] = inst_34910__$1);

(statearr_35049[(11)] = inst_34919);

(statearr_35049[(21)] = inst_34920);

(statearr_35049[(12)] = inst_34921);

(statearr_35049[(30)] = inst_34912);

return statearr_35049;
})();
var statearr_35050_37048 = state_34978__$1;
(statearr_35050_37048[(2)] = null);

(statearr_35050_37048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35065 = state_34978;
(statearr_35065[(25)] = inst_34937__$1);

return statearr_35065;
})();
if(inst_34937__$1){
var statearr_35067_37050 = state_34978__$1;
(statearr_35067_37050[(1)] = (33));

} else {
var statearr_35068_37051 = state_34978__$1;
(statearr_35068_37051[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (25))){
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34924)){
var statearr_35071_37052 = state_34978__$1;
(statearr_35071_37052[(1)] = (27));

} else {
var statearr_35072_37054 = state_34978__$1;
(statearr_35072_37054[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35076_37055 = state_34978__$1;
(statearr_35076_37055[(2)] = null);

(statearr_35076_37055[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35082_37056 = state_34978__$1;
(statearr_35082_37056[(2)] = null);

(statearr_35082_37056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (3))){
var inst_34976 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34978__$1,inst_34976);
} else {
if((state_val_34979 === (12))){
var inst_34905 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35090_37058 = state_34978__$1;
(statearr_35090_37058[(2)] = inst_34905);

(statearr_35090_37058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35099_37059 = state_34978__$1;
(statearr_35099_37059[(2)] = null);

(statearr_35099_37059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35104_37061 = state_34978__$1;
(statearr_35104_37061[(2)] = inst_34960);

(statearr_35104_37061[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (19))){
var inst_34877 = (state_34978[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35112 = state_34978;
(statearr_35112[(13)] = inst_34857);

(statearr_35112[(14)] = inst_34856);

(statearr_35112[(15)] = inst_34858);

(statearr_35112[(17)] = inst_34855);

return statearr_35112;
})();
var statearr_35115_37063 = state_34978__$1;
(statearr_35115_37063[(2)] = null);

(statearr_35115_37063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35121 = state_34978;
(statearr_35121[(7)] = inst_34877__$1);

return statearr_35121;
})();
if(inst_34877__$1){
var statearr_35126_37065 = state_34978__$1;
(statearr_35126_37065[(1)] = (16));

} else {
var statearr_35129_37066 = state_34978__$1;
(statearr_35129_37066[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35132_37067 = state_34978__$1;
(statearr_35132_37067[(2)] = inst_34907);

(statearr_35132_37067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35138 = state_34978;
(statearr_35138[(13)] = inst_34857);

(statearr_35138[(14)] = inst_34856);

(statearr_35138[(15)] = inst_34858);

(statearr_35138[(17)] = inst_34855);

return statearr_35138;
})();
var statearr_35145_37069 = state_34978__$1;
(statearr_35145_37069[(2)] = null);

(statearr_35145_37069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35148_37070 = state_34978__$1;
(statearr_35148_37070[(2)] = null);

(statearr_35148_37070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35153_37072 = state_34978__$1;
(statearr_35153_37072[(2)] = inst_34968);

(statearr_35153_37072[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35161 = state_34978;
(statearr_35161[(31)] = inst_34964);

return statearr_35161;
})();
if(inst_34965){
var statearr_35163_37073 = state_34978__$1;
(statearr_35163_37073[(1)] = (42));

} else {
var statearr_35164_37075 = state_34978__$1;
(statearr_35164_37075[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35171_37076 = state_34978__$1;
(statearr_35171_37076[(1)] = (19));

} else {
var statearr_35172_37077 = state_34978__$1;
(statearr_35172_37077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35173_37078 = state_34978__$1;
(statearr_35173_37078[(2)] = inst_34957);

(statearr_35173_37078[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35174_37080 = state_34978__$1;
(statearr_35174_37080[(2)] = null);

(statearr_35174_37080[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35175 = state_34978;
(statearr_35175[(26)] = inst_34867);

return statearr_35175;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35176_37082 = state_34978__$1;
(statearr_35176_37082[(1)] = (13));

} else {
var statearr_35177_37083 = state_34978__$1;
(statearr_35177_37083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35180_37084 = state_34978__$1;
(statearr_35180_37084[(2)] = inst_34903);

(statearr_35180_37084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (42))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(45),dchan);
} else {
if((state_val_34979 === (37))){
var inst_34946 = (state_34978[(23)]);
var inst_34846 = (state_34978[(9)]);
var inst_34937 = (state_34978[(25)]);
var inst_34946__$1 = cljs.core.first(inst_34937);
var inst_34947 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34946__$1,inst_34846,done);
var state_34978__$1 = (function (){var statearr_35183 = state_34978;
(statearr_35183[(23)] = inst_34946__$1);

return statearr_35183;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35200_37085 = state_34978__$1;
(statearr_35200_37085[(1)] = (39));

} else {
var statearr_35206_37087 = state_34978__$1;
(statearr_35206_37087[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (8))){
var inst_34857 = (state_34978[(13)]);
var inst_34858 = (state_34978[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34861)){
var statearr_35209_37094 = state_34978__$1;
(statearr_35209_37094[(1)] = (10));

} else {
var statearr_35210_37095 = state_34978__$1;
(statearr_35210_37095[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34207__auto__ = null;
var cljs$core$async$mult_$_state_machine__34207__auto____0 = (function (){
var statearr_35215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35215[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35215[(1)] = (1));

return statearr_35215;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34978){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34978);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35217){if((e35217 instanceof Object)){
var ex__34210__auto__ = e35217;
var statearr_35218_37097 = state_34978;
(statearr_35218_37097[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37098 = state_34978;
state_34978 = G__37098;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34978){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35227 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35227[(6)] = c__34273__auto___37007);

return statearr_35227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var G__35244 = arguments.length;
switch (G__35244) {
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
var len__4789__auto___37105 = arguments.length;
var i__4790__auto___37106 = (0);
while(true){
if((i__4790__auto___37106 < len__4789__auto___37105)){
args__4795__auto__.push((arguments[i__4790__auto___37106]));

var G__37107 = (i__4790__auto___37106 + (1));
i__4790__auto___37106 = G__37107;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35363){
var map__35364 = p__35363;
var map__35364__$1 = (((((!((map__35364 == null))))?(((((map__35364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35364):map__35364);
var opts = map__35364__$1;
var statearr_35366_37108 = state;
(statearr_35366_37108[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35368_37111 = state;
(statearr_35368_37111[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35370_37113 = state;
(statearr_35370_37113[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35359){
var G__35360 = cljs.core.first(seq35359);
var seq35359__$1 = cljs.core.next(seq35359);
var G__35361 = cljs.core.first(seq35359__$1);
var seq35359__$2 = cljs.core.next(seq35359__$1);
var G__35362 = cljs.core.first(seq35359__$2);
var seq35359__$3 = cljs.core.next(seq35359__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35360,G__35361,G__35362,seq35359__$3);
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
var c__34273__auto___37136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35558){
var state_val_35559 = (state_35558[(1)]);
if((state_val_35559 === (7))){
var inst_35464 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
var statearr_35560_37138 = state_35558__$1;
(statearr_35560_37138[(2)] = inst_35464);

(statearr_35560_37138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (20))){
var inst_35480 = (state_35558[(7)]);
var state_35558__$1 = state_35558;
var statearr_35561_37143 = state_35558__$1;
(statearr_35561_37143[(2)] = inst_35480);

(statearr_35561_37143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (27))){
var state_35558__$1 = state_35558;
var statearr_35562_37146 = state_35558__$1;
(statearr_35562_37146[(2)] = null);

(statearr_35562_37146[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (1))){
var inst_35435 = (state_35558[(8)]);
var inst_35435__$1 = calc_state();
var inst_35437 = (inst_35435__$1 == null);
var inst_35438 = cljs.core.not(inst_35437);
var state_35558__$1 = (function (){var statearr_35564 = state_35558;
(statearr_35564[(8)] = inst_35435__$1);

return statearr_35564;
})();
if(inst_35438){
var statearr_35567_37153 = state_35558__$1;
(statearr_35567_37153[(1)] = (2));

} else {
var statearr_35570_37154 = state_35558__$1;
(statearr_35570_37154[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (24))){
var inst_35507 = (state_35558[(9)]);
var inst_35518 = (state_35558[(10)]);
var inst_35532 = (state_35558[(11)]);
var inst_35532__$1 = (inst_35507.cljs$core$IFn$_invoke$arity$1 ? inst_35507.cljs$core$IFn$_invoke$arity$1(inst_35518) : inst_35507.call(null,inst_35518));
var state_35558__$1 = (function (){var statearr_35574 = state_35558;
(statearr_35574[(11)] = inst_35532__$1);

return statearr_35574;
})();
if(cljs.core.truth_(inst_35532__$1)){
var statearr_35578_37156 = state_35558__$1;
(statearr_35578_37156[(1)] = (29));

} else {
var statearr_35580_37158 = state_35558__$1;
(statearr_35580_37158[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (4))){
var inst_35469 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
if(cljs.core.truth_(inst_35469)){
var statearr_35606_37159 = state_35558__$1;
(statearr_35606_37159[(1)] = (8));

} else {
var statearr_35607_37162 = state_35558__$1;
(statearr_35607_37162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (15))){
var inst_35500 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
if(cljs.core.truth_(inst_35500)){
var statearr_35613_37166 = state_35558__$1;
(statearr_35613_37166[(1)] = (19));

} else {
var statearr_35615_37168 = state_35558__$1;
(statearr_35615_37168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (21))){
var inst_35506 = (state_35558[(12)]);
var inst_35506__$1 = (state_35558[(2)]);
var inst_35507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35506__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35506__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35506__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35558__$1 = (function (){var statearr_35622 = state_35558;
(statearr_35622[(13)] = inst_35508);

(statearr_35622[(9)] = inst_35507);

(statearr_35622[(12)] = inst_35506__$1);

return statearr_35622;
})();
return cljs.core.async.ioc_alts_BANG_(state_35558__$1,(22),inst_35509);
} else {
if((state_val_35559 === (31))){
var inst_35540 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
if(cljs.core.truth_(inst_35540)){
var statearr_35629_37174 = state_35558__$1;
(statearr_35629_37174[(1)] = (32));

} else {
var statearr_35632_37175 = state_35558__$1;
(statearr_35632_37175[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (32))){
var inst_35517 = (state_35558[(14)]);
var state_35558__$1 = state_35558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35558__$1,(35),out,inst_35517);
} else {
if((state_val_35559 === (33))){
var inst_35506 = (state_35558[(12)]);
var inst_35480 = inst_35506;
var state_35558__$1 = (function (){var statearr_35640 = state_35558;
(statearr_35640[(7)] = inst_35480);

return statearr_35640;
})();
var statearr_35642_37182 = state_35558__$1;
(statearr_35642_37182[(2)] = null);

(statearr_35642_37182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (13))){
var inst_35480 = (state_35558[(7)]);
var inst_35488 = inst_35480.cljs$lang$protocol_mask$partition0$;
var inst_35489 = (inst_35488 & (64));
var inst_35490 = inst_35480.cljs$core$ISeq$;
var inst_35491 = (cljs.core.PROTOCOL_SENTINEL === inst_35490);
var inst_35492 = ((inst_35489) || (inst_35491));
var state_35558__$1 = state_35558;
if(cljs.core.truth_(inst_35492)){
var statearr_35649_37190 = state_35558__$1;
(statearr_35649_37190[(1)] = (16));

} else {
var statearr_35652_37191 = state_35558__$1;
(statearr_35652_37191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (22))){
var inst_35517 = (state_35558[(14)]);
var inst_35518 = (state_35558[(10)]);
var inst_35515 = (state_35558[(2)]);
var inst_35517__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35515,(0),null);
var inst_35518__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35515,(1),null);
var inst_35519 = (inst_35517__$1 == null);
var inst_35520 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35518__$1,change);
var inst_35521 = ((inst_35519) || (inst_35520));
var state_35558__$1 = (function (){var statearr_35666 = state_35558;
(statearr_35666[(14)] = inst_35517__$1);

(statearr_35666[(10)] = inst_35518__$1);

return statearr_35666;
})();
if(cljs.core.truth_(inst_35521)){
var statearr_35667_37194 = state_35558__$1;
(statearr_35667_37194[(1)] = (23));

} else {
var statearr_35668_37197 = state_35558__$1;
(statearr_35668_37197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (36))){
var inst_35506 = (state_35558[(12)]);
var inst_35480 = inst_35506;
var state_35558__$1 = (function (){var statearr_35669 = state_35558;
(statearr_35669[(7)] = inst_35480);

return statearr_35669;
})();
var statearr_35670_37198 = state_35558__$1;
(statearr_35670_37198[(2)] = null);

(statearr_35670_37198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (29))){
var inst_35532 = (state_35558[(11)]);
var state_35558__$1 = state_35558;
var statearr_35671_37200 = state_35558__$1;
(statearr_35671_37200[(2)] = inst_35532);

(statearr_35671_37200[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (6))){
var state_35558__$1 = state_35558;
var statearr_35672_37201 = state_35558__$1;
(statearr_35672_37201[(2)] = false);

(statearr_35672_37201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (28))){
var inst_35528 = (state_35558[(2)]);
var inst_35529 = calc_state();
var inst_35480 = inst_35529;
var state_35558__$1 = (function (){var statearr_35673 = state_35558;
(statearr_35673[(7)] = inst_35480);

(statearr_35673[(15)] = inst_35528);

return statearr_35673;
})();
var statearr_35674_37205 = state_35558__$1;
(statearr_35674_37205[(2)] = null);

(statearr_35674_37205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (25))){
var inst_35554 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
var statearr_35675_37211 = state_35558__$1;
(statearr_35675_37211[(2)] = inst_35554);

(statearr_35675_37211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (34))){
var inst_35552 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
var statearr_35676_37212 = state_35558__$1;
(statearr_35676_37212[(2)] = inst_35552);

(statearr_35676_37212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (17))){
var state_35558__$1 = state_35558;
var statearr_35677_37213 = state_35558__$1;
(statearr_35677_37213[(2)] = false);

(statearr_35677_37213[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (3))){
var state_35558__$1 = state_35558;
var statearr_35678_37216 = state_35558__$1;
(statearr_35678_37216[(2)] = false);

(statearr_35678_37216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (12))){
var inst_35556 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35558__$1,inst_35556);
} else {
if((state_val_35559 === (2))){
var inst_35435 = (state_35558[(8)]);
var inst_35448 = inst_35435.cljs$lang$protocol_mask$partition0$;
var inst_35449 = (inst_35448 & (64));
var inst_35454 = inst_35435.cljs$core$ISeq$;
var inst_35455 = (cljs.core.PROTOCOL_SENTINEL === inst_35454);
var inst_35456 = ((inst_35449) || (inst_35455));
var state_35558__$1 = state_35558;
if(cljs.core.truth_(inst_35456)){
var statearr_35681_37223 = state_35558__$1;
(statearr_35681_37223[(1)] = (5));

} else {
var statearr_35683_37224 = state_35558__$1;
(statearr_35683_37224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (23))){
var inst_35517 = (state_35558[(14)]);
var inst_35523 = (inst_35517 == null);
var state_35558__$1 = state_35558;
if(cljs.core.truth_(inst_35523)){
var statearr_35693_37225 = state_35558__$1;
(statearr_35693_37225[(1)] = (26));

} else {
var statearr_35694_37226 = state_35558__$1;
(statearr_35694_37226[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (35))){
var inst_35543 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
if(cljs.core.truth_(inst_35543)){
var statearr_35700_37227 = state_35558__$1;
(statearr_35700_37227[(1)] = (36));

} else {
var statearr_35702_37229 = state_35558__$1;
(statearr_35702_37229[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (19))){
var inst_35480 = (state_35558[(7)]);
var inst_35503 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35480);
var state_35558__$1 = state_35558;
var statearr_35708_37231 = state_35558__$1;
(statearr_35708_37231[(2)] = inst_35503);

(statearr_35708_37231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (11))){
var inst_35480 = (state_35558[(7)]);
var inst_35485 = (inst_35480 == null);
var inst_35486 = cljs.core.not(inst_35485);
var state_35558__$1 = state_35558;
if(inst_35486){
var statearr_35715_37233 = state_35558__$1;
(statearr_35715_37233[(1)] = (13));

} else {
var statearr_35716_37234 = state_35558__$1;
(statearr_35716_37234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (9))){
var inst_35435 = (state_35558[(8)]);
var state_35558__$1 = state_35558;
var statearr_35717_37235 = state_35558__$1;
(statearr_35717_37235[(2)] = inst_35435);

(statearr_35717_37235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (5))){
var state_35558__$1 = state_35558;
var statearr_35718_37238 = state_35558__$1;
(statearr_35718_37238[(2)] = true);

(statearr_35718_37238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (14))){
var state_35558__$1 = state_35558;
var statearr_35719_37240 = state_35558__$1;
(statearr_35719_37240[(2)] = false);

(statearr_35719_37240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (26))){
var inst_35518 = (state_35558[(10)]);
var inst_35525 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35518);
var state_35558__$1 = state_35558;
var statearr_35720_37242 = state_35558__$1;
(statearr_35720_37242[(2)] = inst_35525);

(statearr_35720_37242[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (16))){
var state_35558__$1 = state_35558;
var statearr_35721_37246 = state_35558__$1;
(statearr_35721_37246[(2)] = true);

(statearr_35721_37246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (38))){
var inst_35548 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
var statearr_35722_37247 = state_35558__$1;
(statearr_35722_37247[(2)] = inst_35548);

(statearr_35722_37247[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (30))){
var inst_35508 = (state_35558[(13)]);
var inst_35507 = (state_35558[(9)]);
var inst_35518 = (state_35558[(10)]);
var inst_35535 = cljs.core.empty_QMARK_(inst_35507);
var inst_35536 = (inst_35508.cljs$core$IFn$_invoke$arity$1 ? inst_35508.cljs$core$IFn$_invoke$arity$1(inst_35518) : inst_35508.call(null,inst_35518));
var inst_35537 = cljs.core.not(inst_35536);
var inst_35538 = ((inst_35535) && (inst_35537));
var state_35558__$1 = state_35558;
var statearr_35723_37250 = state_35558__$1;
(statearr_35723_37250[(2)] = inst_35538);

(statearr_35723_37250[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (10))){
var inst_35435 = (state_35558[(8)]);
var inst_35474 = (state_35558[(2)]);
var inst_35476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35474,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35474,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35474,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35480 = inst_35435;
var state_35558__$1 = (function (){var statearr_35724 = state_35558;
(statearr_35724[(16)] = inst_35476);

(statearr_35724[(7)] = inst_35480);

(statearr_35724[(17)] = inst_35477);

(statearr_35724[(18)] = inst_35478);

return statearr_35724;
})();
var statearr_35727_37257 = state_35558__$1;
(statearr_35727_37257[(2)] = null);

(statearr_35727_37257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (18))){
var inst_35497 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
var statearr_35728_37258 = state_35558__$1;
(statearr_35728_37258[(2)] = inst_35497);

(statearr_35728_37258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (37))){
var state_35558__$1 = state_35558;
var statearr_35729_37261 = state_35558__$1;
(statearr_35729_37261[(2)] = null);

(statearr_35729_37261[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (8))){
var inst_35435 = (state_35558[(8)]);
var inst_35471 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35435);
var state_35558__$1 = state_35558;
var statearr_35730_37263 = state_35558__$1;
(statearr_35730_37263[(2)] = inst_35471);

(statearr_35730_37263[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__34207__auto__ = null;
var cljs$core$async$mix_$_state_machine__34207__auto____0 = (function (){
var statearr_35733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35733[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35733[(1)] = (1));

return statearr_35733;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35558){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35558);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35734){if((e35734 instanceof Object)){
var ex__34210__auto__ = e35734;
var statearr_35735_37270 = state_35558;
(statearr_35735_37270[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37272 = state_35558;
state_35558 = G__37272;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35558){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35738 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35738[(6)] = c__34273__auto___37136);

return statearr_35738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var G__35757 = arguments.length;
switch (G__35757) {
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
var G__35771 = arguments.length;
switch (G__35771) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35762_SHARP_){
if(cljs.core.truth_((p1__35762_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35762_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35762_SHARP_.call(null,topic)))){
return p1__35762_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35762_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
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
var c__34273__auto___37322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35876){
var state_val_35877 = (state_35876[(1)]);
if((state_val_35877 === (7))){
var inst_35872 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35878_37324 = state_35876__$1;
(statearr_35878_37324[(2)] = inst_35872);

(statearr_35878_37324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (20))){
var state_35876__$1 = state_35876;
var statearr_35879_37327 = state_35876__$1;
(statearr_35879_37327[(2)] = null);

(statearr_35879_37327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (1))){
var state_35876__$1 = state_35876;
var statearr_35880_37331 = state_35876__$1;
(statearr_35880_37331[(2)] = null);

(statearr_35880_37331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (24))){
var inst_35855 = (state_35876[(7)]);
var inst_35864 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35855);
var state_35876__$1 = state_35876;
var statearr_35882_37337 = state_35876__$1;
(statearr_35882_37337[(2)] = inst_35864);

(statearr_35882_37337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (4))){
var inst_35807 = (state_35876[(8)]);
var inst_35807__$1 = (state_35876[(2)]);
var inst_35808 = (inst_35807__$1 == null);
var state_35876__$1 = (function (){var statearr_35884 = state_35876;
(statearr_35884[(8)] = inst_35807__$1);

return statearr_35884;
})();
if(cljs.core.truth_(inst_35808)){
var statearr_35886_37341 = state_35876__$1;
(statearr_35886_37341[(1)] = (5));

} else {
var statearr_35887_37342 = state_35876__$1;
(statearr_35887_37342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (15))){
var inst_35849 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35888_37345 = state_35876__$1;
(statearr_35888_37345[(2)] = inst_35849);

(statearr_35888_37345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (21))){
var inst_35869 = (state_35876[(2)]);
var state_35876__$1 = (function (){var statearr_35889 = state_35876;
(statearr_35889[(9)] = inst_35869);

return statearr_35889;
})();
var statearr_35890_37348 = state_35876__$1;
(statearr_35890_37348[(2)] = null);

(statearr_35890_37348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (13))){
var inst_35831 = (state_35876[(10)]);
var inst_35833 = cljs.core.chunked_seq_QMARK_(inst_35831);
var state_35876__$1 = state_35876;
if(inst_35833){
var statearr_35892_37349 = state_35876__$1;
(statearr_35892_37349[(1)] = (16));

} else {
var statearr_35893_37350 = state_35876__$1;
(statearr_35893_37350[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (22))){
var inst_35861 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
if(cljs.core.truth_(inst_35861)){
var statearr_35894_37352 = state_35876__$1;
(statearr_35894_37352[(1)] = (23));

} else {
var statearr_35895_37353 = state_35876__$1;
(statearr_35895_37353[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (6))){
var inst_35857 = (state_35876[(11)]);
var inst_35807 = (state_35876[(8)]);
var inst_35855 = (state_35876[(7)]);
var inst_35855__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35807) : topic_fn.call(null,inst_35807));
var inst_35856 = cljs.core.deref(mults);
var inst_35857__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35856,inst_35855__$1);
var state_35876__$1 = (function (){var statearr_35897 = state_35876;
(statearr_35897[(11)] = inst_35857__$1);

(statearr_35897[(7)] = inst_35855__$1);

return statearr_35897;
})();
if(cljs.core.truth_(inst_35857__$1)){
var statearr_35899_37355 = state_35876__$1;
(statearr_35899_37355[(1)] = (19));

} else {
var statearr_35901_37356 = state_35876__$1;
(statearr_35901_37356[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (25))){
var inst_35866 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35904_37357 = state_35876__$1;
(statearr_35904_37357[(2)] = inst_35866);

(statearr_35904_37357[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (17))){
var inst_35831 = (state_35876[(10)]);
var inst_35840 = cljs.core.first(inst_35831);
var inst_35841 = cljs.core.async.muxch_STAR_(inst_35840);
var inst_35842 = cljs.core.async.close_BANG_(inst_35841);
var inst_35843 = cljs.core.next(inst_35831);
var inst_35817 = inst_35843;
var inst_35818 = null;
var inst_35819 = (0);
var inst_35820 = (0);
var state_35876__$1 = (function (){var statearr_35906 = state_35876;
(statearr_35906[(12)] = inst_35817);

(statearr_35906[(13)] = inst_35819);

(statearr_35906[(14)] = inst_35818);

(statearr_35906[(15)] = inst_35842);

(statearr_35906[(16)] = inst_35820);

return statearr_35906;
})();
var statearr_35908_37359 = state_35876__$1;
(statearr_35908_37359[(2)] = null);

(statearr_35908_37359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (3))){
var inst_35874 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35876__$1,inst_35874);
} else {
if((state_val_35877 === (12))){
var inst_35851 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35911_37360 = state_35876__$1;
(statearr_35911_37360[(2)] = inst_35851);

(statearr_35911_37360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (2))){
var state_35876__$1 = state_35876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35876__$1,(4),ch);
} else {
if((state_val_35877 === (23))){
var state_35876__$1 = state_35876;
var statearr_35912_37363 = state_35876__$1;
(statearr_35912_37363[(2)] = null);

(statearr_35912_37363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (19))){
var inst_35857 = (state_35876[(11)]);
var inst_35807 = (state_35876[(8)]);
var inst_35859 = cljs.core.async.muxch_STAR_(inst_35857);
var state_35876__$1 = state_35876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35876__$1,(22),inst_35859,inst_35807);
} else {
if((state_val_35877 === (11))){
var inst_35817 = (state_35876[(12)]);
var inst_35831 = (state_35876[(10)]);
var inst_35831__$1 = cljs.core.seq(inst_35817);
var state_35876__$1 = (function (){var statearr_35918 = state_35876;
(statearr_35918[(10)] = inst_35831__$1);

return statearr_35918;
})();
if(inst_35831__$1){
var statearr_35921_37366 = state_35876__$1;
(statearr_35921_37366[(1)] = (13));

} else {
var statearr_35922_37367 = state_35876__$1;
(statearr_35922_37367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (9))){
var inst_35853 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35925_37368 = state_35876__$1;
(statearr_35925_37368[(2)] = inst_35853);

(statearr_35925_37368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (5))){
var inst_35814 = cljs.core.deref(mults);
var inst_35815 = cljs.core.vals(inst_35814);
var inst_35816 = cljs.core.seq(inst_35815);
var inst_35817 = inst_35816;
var inst_35818 = null;
var inst_35819 = (0);
var inst_35820 = (0);
var state_35876__$1 = (function (){var statearr_35926 = state_35876;
(statearr_35926[(12)] = inst_35817);

(statearr_35926[(13)] = inst_35819);

(statearr_35926[(14)] = inst_35818);

(statearr_35926[(16)] = inst_35820);

return statearr_35926;
})();
var statearr_35929_37370 = state_35876__$1;
(statearr_35929_37370[(2)] = null);

(statearr_35929_37370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (14))){
var state_35876__$1 = state_35876;
var statearr_35934_37371 = state_35876__$1;
(statearr_35934_37371[(2)] = null);

(statearr_35934_37371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (16))){
var inst_35831 = (state_35876[(10)]);
var inst_35835 = cljs.core.chunk_first(inst_35831);
var inst_35836 = cljs.core.chunk_rest(inst_35831);
var inst_35837 = cljs.core.count(inst_35835);
var inst_35817 = inst_35836;
var inst_35818 = inst_35835;
var inst_35819 = inst_35837;
var inst_35820 = (0);
var state_35876__$1 = (function (){var statearr_35938 = state_35876;
(statearr_35938[(12)] = inst_35817);

(statearr_35938[(13)] = inst_35819);

(statearr_35938[(14)] = inst_35818);

(statearr_35938[(16)] = inst_35820);

return statearr_35938;
})();
var statearr_35940_37376 = state_35876__$1;
(statearr_35940_37376[(2)] = null);

(statearr_35940_37376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (10))){
var inst_35817 = (state_35876[(12)]);
var inst_35819 = (state_35876[(13)]);
var inst_35818 = (state_35876[(14)]);
var inst_35820 = (state_35876[(16)]);
var inst_35825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35818,inst_35820);
var inst_35826 = cljs.core.async.muxch_STAR_(inst_35825);
var inst_35827 = cljs.core.async.close_BANG_(inst_35826);
var inst_35828 = (inst_35820 + (1));
var tmp35931 = inst_35817;
var tmp35932 = inst_35819;
var tmp35933 = inst_35818;
var inst_35817__$1 = tmp35931;
var inst_35818__$1 = tmp35933;
var inst_35819__$1 = tmp35932;
var inst_35820__$1 = inst_35828;
var state_35876__$1 = (function (){var statearr_35943 = state_35876;
(statearr_35943[(12)] = inst_35817__$1);

(statearr_35943[(13)] = inst_35819__$1);

(statearr_35943[(14)] = inst_35818__$1);

(statearr_35943[(17)] = inst_35827);

(statearr_35943[(16)] = inst_35820__$1);

return statearr_35943;
})();
var statearr_35945_37382 = state_35876__$1;
(statearr_35945_37382[(2)] = null);

(statearr_35945_37382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (18))){
var inst_35846 = (state_35876[(2)]);
var state_35876__$1 = state_35876;
var statearr_35947_37384 = state_35876__$1;
(statearr_35947_37384[(2)] = inst_35846);

(statearr_35947_37384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (8))){
var inst_35819 = (state_35876[(13)]);
var inst_35820 = (state_35876[(16)]);
var inst_35822 = (inst_35820 < inst_35819);
var inst_35823 = inst_35822;
var state_35876__$1 = state_35876;
if(cljs.core.truth_(inst_35823)){
var statearr_35949_37388 = state_35876__$1;
(statearr_35949_37388[(1)] = (10));

} else {
var statearr_35950_37389 = state_35876__$1;
(statearr_35950_37389[(1)] = (11));

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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_35955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35955[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35955[(1)] = (1));

return statearr_35955;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35876){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35876);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35956){if((e35956 instanceof Object)){
var ex__34210__auto__ = e35956;
var statearr_35957_37394 = state_35876;
(statearr_35957_37394[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35956;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37398 = state_35876;
state_35876 = G__37398;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35961 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35961[(6)] = c__34273__auto___37322);

return statearr_35961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var G__35967 = arguments.length;
switch (G__35967) {
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
var G__35979 = arguments.length;
switch (G__35979) {
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
var G__35988 = arguments.length;
switch (G__35988) {
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
var c__34273__auto___37423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36038){
var state_val_36039 = (state_36038[(1)]);
if((state_val_36039 === (7))){
var state_36038__$1 = state_36038;
var statearr_36043_37424 = state_36038__$1;
(statearr_36043_37424[(2)] = null);

(statearr_36043_37424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (1))){
var state_36038__$1 = state_36038;
var statearr_36044_37425 = state_36038__$1;
(statearr_36044_37425[(2)] = null);

(statearr_36044_37425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (4))){
var inst_35998 = (state_36038[(7)]);
var inst_36000 = (inst_35998 < cnt);
var state_36038__$1 = state_36038;
if(cljs.core.truth_(inst_36000)){
var statearr_36046_37427 = state_36038__$1;
(statearr_36046_37427[(1)] = (6));

} else {
var statearr_36047_37429 = state_36038__$1;
(statearr_36047_37429[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (15))){
var inst_36033 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36051_37432 = state_36038__$1;
(statearr_36051_37432[(2)] = inst_36033);

(statearr_36051_37432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (13))){
var inst_36026 = cljs.core.async.close_BANG_(out);
var state_36038__$1 = state_36038;
var statearr_36054_37433 = state_36038__$1;
(statearr_36054_37433[(2)] = inst_36026);

(statearr_36054_37433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (6))){
var state_36038__$1 = state_36038;
var statearr_36055_37434 = state_36038__$1;
(statearr_36055_37434[(2)] = null);

(statearr_36055_37434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (3))){
var inst_36035 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36038__$1,inst_36035);
} else {
if((state_val_36039 === (12))){
var inst_36023 = (state_36038[(8)]);
var inst_36023__$1 = (state_36038[(2)]);
var inst_36024 = cljs.core.some(cljs.core.nil_QMARK_,inst_36023__$1);
var state_36038__$1 = (function (){var statearr_36059 = state_36038;
(statearr_36059[(8)] = inst_36023__$1);

return statearr_36059;
})();
if(cljs.core.truth_(inst_36024)){
var statearr_36062_37437 = state_36038__$1;
(statearr_36062_37437[(1)] = (13));

} else {
var statearr_36063_37438 = state_36038__$1;
(statearr_36063_37438[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (2))){
var inst_35997 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35998 = (0);
var state_36038__$1 = (function (){var statearr_36065 = state_36038;
(statearr_36065[(7)] = inst_35998);

(statearr_36065[(9)] = inst_35997);

return statearr_36065;
})();
var statearr_36066_37442 = state_36038__$1;
(statearr_36066_37442[(2)] = null);

(statearr_36066_37442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (11))){
var inst_35998 = (state_36038[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36038,(10),Object,null,(9));
var inst_36010 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35998) : chs__$1.call(null,inst_35998));
var inst_36011 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35998) : done.call(null,inst_35998));
var inst_36012 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36010,inst_36011);
var state_36038__$1 = state_36038;
var statearr_36069_37444 = state_36038__$1;
(statearr_36069_37444[(2)] = inst_36012);


cljs.core.async.impl.ioc_helpers.process_exception(state_36038__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (9))){
var inst_35998 = (state_36038[(7)]);
var inst_36014 = (state_36038[(2)]);
var inst_36015 = (inst_35998 + (1));
var inst_35998__$1 = inst_36015;
var state_36038__$1 = (function (){var statearr_36070 = state_36038;
(statearr_36070[(7)] = inst_35998__$1);

(statearr_36070[(10)] = inst_36014);

return statearr_36070;
})();
var statearr_36072_37445 = state_36038__$1;
(statearr_36072_37445[(2)] = null);

(statearr_36072_37445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (5))){
var inst_36021 = (state_36038[(2)]);
var state_36038__$1 = (function (){var statearr_36073 = state_36038;
(statearr_36073[(11)] = inst_36021);

return statearr_36073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36038__$1,(12),dchan);
} else {
if((state_val_36039 === (14))){
var inst_36023 = (state_36038[(8)]);
var inst_36028 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36023);
var state_36038__$1 = state_36038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36038__$1,(16),out,inst_36028);
} else {
if((state_val_36039 === (16))){
var inst_36030 = (state_36038[(2)]);
var state_36038__$1 = (function (){var statearr_36077 = state_36038;
(statearr_36077[(12)] = inst_36030);

return statearr_36077;
})();
var statearr_36078_37450 = state_36038__$1;
(statearr_36078_37450[(2)] = null);

(statearr_36078_37450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (10))){
var inst_36004 = (state_36038[(2)]);
var inst_36005 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36038__$1 = (function (){var statearr_36079 = state_36038;
(statearr_36079[(13)] = inst_36004);

return statearr_36079;
})();
var statearr_36080_37454 = state_36038__$1;
(statearr_36080_37454[(2)] = inst_36005);


cljs.core.async.impl.ioc_helpers.process_exception(state_36038__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (8))){
var inst_36019 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36081_37457 = state_36038__$1;
(statearr_36081_37457[(2)] = inst_36019);

(statearr_36081_37457[(1)] = (5));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36087[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36087[(1)] = (1));

return statearr_36087;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36038){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36038);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36090){if((e36090 instanceof Object)){
var ex__34210__auto__ = e36090;
var statearr_36091_37458 = state_36038;
(statearr_36091_37458[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36090;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37459 = state_36038;
state_36038 = G__37459;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36096 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36096[(6)] = c__34273__auto___37423);

return statearr_36096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var G__36103 = arguments.length;
switch (G__36103) {
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
var c__34273__auto___37461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36135){
var state_val_36136 = (state_36135[(1)]);
if((state_val_36136 === (7))){
var inst_36114 = (state_36135[(7)]);
var inst_36115 = (state_36135[(8)]);
var inst_36114__$1 = (state_36135[(2)]);
var inst_36115__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36114__$1,(0),null);
var inst_36116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36114__$1,(1),null);
var inst_36117 = (inst_36115__$1 == null);
var state_36135__$1 = (function (){var statearr_36137 = state_36135;
(statearr_36137[(7)] = inst_36114__$1);

(statearr_36137[(8)] = inst_36115__$1);

(statearr_36137[(9)] = inst_36116);

return statearr_36137;
})();
if(cljs.core.truth_(inst_36117)){
var statearr_36138_37464 = state_36135__$1;
(statearr_36138_37464[(1)] = (8));

} else {
var statearr_36139_37465 = state_36135__$1;
(statearr_36139_37465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36136 === (1))){
var inst_36104 = cljs.core.vec(chs);
var inst_36105 = inst_36104;
var state_36135__$1 = (function (){var statearr_36140 = state_36135;
(statearr_36140[(10)] = inst_36105);

return statearr_36140;
})();
var statearr_36141_37468 = state_36135__$1;
(statearr_36141_37468[(2)] = null);

(statearr_36141_37468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36136 === (4))){
var inst_36105 = (state_36135[(10)]);
var state_36135__$1 = state_36135;
return cljs.core.async.ioc_alts_BANG_(state_36135__$1,(7),inst_36105);
} else {
if((state_val_36136 === (6))){
var inst_36131 = (state_36135[(2)]);
var state_36135__$1 = state_36135;
var statearr_36142_37474 = state_36135__$1;
(statearr_36142_37474[(2)] = inst_36131);

(statearr_36142_37474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36136 === (3))){
var inst_36133 = (state_36135[(2)]);
var state_36135__$1 = state_36135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36135__$1,inst_36133);
} else {
if((state_val_36136 === (2))){
var inst_36105 = (state_36135[(10)]);
var inst_36107 = cljs.core.count(inst_36105);
var inst_36108 = (inst_36107 > (0));
var state_36135__$1 = state_36135;
if(cljs.core.truth_(inst_36108)){
var statearr_36145_37483 = state_36135__$1;
(statearr_36145_37483[(1)] = (4));

} else {
var statearr_36146_37484 = state_36135__$1;
(statearr_36146_37484[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36136 === (11))){
var inst_36105 = (state_36135[(10)]);
var inst_36124 = (state_36135[(2)]);
var tmp36143 = inst_36105;
var inst_36105__$1 = tmp36143;
var state_36135__$1 = (function (){var statearr_36150 = state_36135;
(statearr_36150[(11)] = inst_36124);

(statearr_36150[(10)] = inst_36105__$1);

return statearr_36150;
})();
var statearr_36151_37485 = state_36135__$1;
(statearr_36151_37485[(2)] = null);

(statearr_36151_37485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36136 === (9))){
var inst_36115 = (state_36135[(8)]);
var state_36135__$1 = state_36135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36135__$1,(11),out,inst_36115);
} else {
if((state_val_36136 === (5))){
var inst_36129 = cljs.core.async.close_BANG_(out);
var state_36135__$1 = state_36135;
var statearr_36156_37490 = state_36135__$1;
(statearr_36156_37490[(2)] = inst_36129);

(statearr_36156_37490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36136 === (10))){
var inst_36127 = (state_36135[(2)]);
var state_36135__$1 = state_36135;
var statearr_36157_37494 = state_36135__$1;
(statearr_36157_37494[(2)] = inst_36127);

(statearr_36157_37494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36136 === (8))){
var inst_36114 = (state_36135[(7)]);
var inst_36115 = (state_36135[(8)]);
var inst_36105 = (state_36135[(10)]);
var inst_36116 = (state_36135[(9)]);
var inst_36119 = (function (){var cs = inst_36105;
var vec__36110 = inst_36114;
var v = inst_36115;
var c = inst_36116;
return (function (p1__36098_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36098_SHARP_);
});
})();
var inst_36120 = cljs.core.filterv(inst_36119,inst_36105);
var inst_36105__$1 = inst_36120;
var state_36135__$1 = (function (){var statearr_36161 = state_36135;
(statearr_36161[(10)] = inst_36105__$1);

return statearr_36161;
})();
var statearr_36163_37501 = state_36135__$1;
(statearr_36163_37501[(2)] = null);

(statearr_36163_37501[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36166[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36166[(1)] = (1));

return statearr_36166;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36135){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36135);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36167){if((e36167 instanceof Object)){
var ex__34210__auto__ = e36167;
var statearr_36168_37508 = state_36135;
(statearr_36168_37508[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37513 = state_36135;
state_36135 = G__37513;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36169 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36169[(6)] = c__34273__auto___37461);

return statearr_36169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var G__36175 = arguments.length;
switch (G__36175) {
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
var c__34273__auto___37522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36199){
var state_val_36200 = (state_36199[(1)]);
if((state_val_36200 === (7))){
var inst_36181 = (state_36199[(7)]);
var inst_36181__$1 = (state_36199[(2)]);
var inst_36182 = (inst_36181__$1 == null);
var inst_36183 = cljs.core.not(inst_36182);
var state_36199__$1 = (function (){var statearr_36201 = state_36199;
(statearr_36201[(7)] = inst_36181__$1);

return statearr_36201;
})();
if(inst_36183){
var statearr_36202_37525 = state_36199__$1;
(statearr_36202_37525[(1)] = (8));

} else {
var statearr_36203_37526 = state_36199__$1;
(statearr_36203_37526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (1))){
var inst_36176 = (0);
var state_36199__$1 = (function (){var statearr_36204 = state_36199;
(statearr_36204[(8)] = inst_36176);

return statearr_36204;
})();
var statearr_36205_37532 = state_36199__$1;
(statearr_36205_37532[(2)] = null);

(statearr_36205_37532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (4))){
var state_36199__$1 = state_36199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36199__$1,(7),ch);
} else {
if((state_val_36200 === (6))){
var inst_36194 = (state_36199[(2)]);
var state_36199__$1 = state_36199;
var statearr_36206_37534 = state_36199__$1;
(statearr_36206_37534[(2)] = inst_36194);

(statearr_36206_37534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (3))){
var inst_36196 = (state_36199[(2)]);
var inst_36197 = cljs.core.async.close_BANG_(out);
var state_36199__$1 = (function (){var statearr_36207 = state_36199;
(statearr_36207[(9)] = inst_36196);

return statearr_36207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36199__$1,inst_36197);
} else {
if((state_val_36200 === (2))){
var inst_36176 = (state_36199[(8)]);
var inst_36178 = (inst_36176 < n);
var state_36199__$1 = state_36199;
if(cljs.core.truth_(inst_36178)){
var statearr_36208_37536 = state_36199__$1;
(statearr_36208_37536[(1)] = (4));

} else {
var statearr_36209_37537 = state_36199__$1;
(statearr_36209_37537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (11))){
var inst_36176 = (state_36199[(8)]);
var inst_36186 = (state_36199[(2)]);
var inst_36187 = (inst_36176 + (1));
var inst_36176__$1 = inst_36187;
var state_36199__$1 = (function (){var statearr_36210 = state_36199;
(statearr_36210[(8)] = inst_36176__$1);

(statearr_36210[(10)] = inst_36186);

return statearr_36210;
})();
var statearr_36212_37544 = state_36199__$1;
(statearr_36212_37544[(2)] = null);

(statearr_36212_37544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (9))){
var state_36199__$1 = state_36199;
var statearr_36213_37546 = state_36199__$1;
(statearr_36213_37546[(2)] = null);

(statearr_36213_37546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (5))){
var state_36199__$1 = state_36199;
var statearr_36214_37547 = state_36199__$1;
(statearr_36214_37547[(2)] = null);

(statearr_36214_37547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (10))){
var inst_36191 = (state_36199[(2)]);
var state_36199__$1 = state_36199;
var statearr_36216_37550 = state_36199__$1;
(statearr_36216_37550[(2)] = inst_36191);

(statearr_36216_37550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (8))){
var inst_36181 = (state_36199[(7)]);
var state_36199__$1 = state_36199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36199__$1,(11),out,inst_36181);
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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36217[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36217[(1)] = (1));

return statearr_36217;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36199){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36199);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36219){if((e36219 instanceof Object)){
var ex__34210__auto__ = e36219;
var statearr_36221_37556 = state_36199;
(statearr_36221_37556[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37557 = state_36199;
state_36199 = G__37557;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36224 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36224[(6)] = c__34273__auto___37522);

return statearr_36224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36229 = (function (f,ch,meta36230){
this.f = f;
this.ch = ch;
this.meta36230 = meta36230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36231,meta36230__$1){
var self__ = this;
var _36231__$1 = this;
return (new cljs.core.async.t_cljs$core$async36229(self__.f,self__.ch,meta36230__$1));
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36231){
var self__ = this;
var _36231__$1 = this;
return self__.meta36230;
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36240 = (function (f,ch,meta36230,_,fn1,meta36241){
this.f = f;
this.ch = ch;
this.meta36230 = meta36230;
this._ = _;
this.fn1 = fn1;
this.meta36241 = meta36241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36242,meta36241__$1){
var self__ = this;
var _36242__$1 = this;
return (new cljs.core.async.t_cljs$core$async36240(self__.f,self__.ch,self__.meta36230,self__._,self__.fn1,meta36241__$1));
}));

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36242){
var self__ = this;
var _36242__$1 = this;
return self__.meta36241;
}));

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36228_SHARP_){
var G__36249 = (((p1__36228_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36228_SHARP_) : self__.f.call(null,p1__36228_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36249) : f1.call(null,G__36249));
});
}));

(cljs.core.async.t_cljs$core$async36240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36230","meta36230",-1227852521,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36229","cljs.core.async/t_cljs$core$async36229",-1821929093,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36241","meta36241",-1651397265,null)], null);
}));

(cljs.core.async.t_cljs$core$async36240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36240");

(cljs.core.async.t_cljs$core$async36240.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36240.
 */
cljs.core.async.__GT_t_cljs$core$async36240 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36240(f__$1,ch__$1,meta36230__$1,___$2,fn1__$1,meta36241){
return (new cljs.core.async.t_cljs$core$async36240(f__$1,ch__$1,meta36230__$1,___$2,fn1__$1,meta36241));
});

}

return (new cljs.core.async.t_cljs$core$async36240(self__.f,self__.ch,self__.meta36230,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36250 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36250) : self__.f.call(null,G__36250));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36230","meta36230",-1227852521,null)], null);
}));

(cljs.core.async.t_cljs$core$async36229.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36229");

(cljs.core.async.t_cljs$core$async36229.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36229");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36229.
 */
cljs.core.async.__GT_t_cljs$core$async36229 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36229(f__$1,ch__$1,meta36230){
return (new cljs.core.async.t_cljs$core$async36229(f__$1,ch__$1,meta36230));
});

}

return (new cljs.core.async.t_cljs$core$async36229(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36277 = arguments.length;
switch (G__36277) {
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
var c__34273__auto___37617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36305){
var state_val_36306 = (state_36305[(1)]);
if((state_val_36306 === (7))){
var inst_36301 = (state_36305[(2)]);
var state_36305__$1 = state_36305;
var statearr_36318_37619 = state_36305__$1;
(statearr_36318_37619[(2)] = inst_36301);

(statearr_36318_37619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (1))){
var state_36305__$1 = state_36305;
var statearr_36319_37622 = state_36305__$1;
(statearr_36319_37622[(2)] = null);

(statearr_36319_37622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (4))){
var inst_36287 = (state_36305[(7)]);
var inst_36287__$1 = (state_36305[(2)]);
var inst_36288 = (inst_36287__$1 == null);
var state_36305__$1 = (function (){var statearr_36320 = state_36305;
(statearr_36320[(7)] = inst_36287__$1);

return statearr_36320;
})();
if(cljs.core.truth_(inst_36288)){
var statearr_36322_37628 = state_36305__$1;
(statearr_36322_37628[(1)] = (5));

} else {
var statearr_36323_37632 = state_36305__$1;
(statearr_36323_37632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (6))){
var inst_36287 = (state_36305[(7)]);
var inst_36292 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36287) : p.call(null,inst_36287));
var state_36305__$1 = state_36305;
if(cljs.core.truth_(inst_36292)){
var statearr_36325_37636 = state_36305__$1;
(statearr_36325_37636[(1)] = (8));

} else {
var statearr_36326_37637 = state_36305__$1;
(statearr_36326_37637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (3))){
var inst_36303 = (state_36305[(2)]);
var state_36305__$1 = state_36305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36305__$1,inst_36303);
} else {
if((state_val_36306 === (2))){
var state_36305__$1 = state_36305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36305__$1,(4),ch);
} else {
if((state_val_36306 === (11))){
var inst_36295 = (state_36305[(2)]);
var state_36305__$1 = state_36305;
var statearr_36329_37641 = state_36305__$1;
(statearr_36329_37641[(2)] = inst_36295);

(statearr_36329_37641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (9))){
var state_36305__$1 = state_36305;
var statearr_36331_37648 = state_36305__$1;
(statearr_36331_37648[(2)] = null);

(statearr_36331_37648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (5))){
var inst_36290 = cljs.core.async.close_BANG_(out);
var state_36305__$1 = state_36305;
var statearr_36332_37651 = state_36305__$1;
(statearr_36332_37651[(2)] = inst_36290);

(statearr_36332_37651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (10))){
var inst_36298 = (state_36305[(2)]);
var state_36305__$1 = (function (){var statearr_36333 = state_36305;
(statearr_36333[(8)] = inst_36298);

return statearr_36333;
})();
var statearr_36334_37656 = state_36305__$1;
(statearr_36334_37656[(2)] = null);

(statearr_36334_37656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (8))){
var inst_36287 = (state_36305[(7)]);
var state_36305__$1 = state_36305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36305__$1,(11),out,inst_36287);
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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36335 = [null,null,null,null,null,null,null,null,null];
(statearr_36335[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36335[(1)] = (1));

return statearr_36335;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36305){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36305);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36336){if((e36336 instanceof Object)){
var ex__34210__auto__ = e36336;
var statearr_36337_37664 = state_36305;
(statearr_36337_37664[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37667 = state_36305;
state_36305 = G__37667;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36339 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36339[(6)] = c__34273__auto___37617);

return statearr_36339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36342 = arguments.length;
switch (G__36342) {
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
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36410){
var state_val_36411 = (state_36410[(1)]);
if((state_val_36411 === (7))){
var inst_36406 = (state_36410[(2)]);
var state_36410__$1 = state_36410;
var statearr_36412_37678 = state_36410__$1;
(statearr_36412_37678[(2)] = inst_36406);

(statearr_36412_37678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (20))){
var inst_36376 = (state_36410[(7)]);
var inst_36387 = (state_36410[(2)]);
var inst_36388 = cljs.core.next(inst_36376);
var inst_36362 = inst_36388;
var inst_36363 = null;
var inst_36364 = (0);
var inst_36365 = (0);
var state_36410__$1 = (function (){var statearr_36413 = state_36410;
(statearr_36413[(8)] = inst_36363);

(statearr_36413[(9)] = inst_36362);

(statearr_36413[(10)] = inst_36364);

(statearr_36413[(11)] = inst_36365);

(statearr_36413[(12)] = inst_36387);

return statearr_36413;
})();
var statearr_36419_37686 = state_36410__$1;
(statearr_36419_37686[(2)] = null);

(statearr_36419_37686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (1))){
var state_36410__$1 = state_36410;
var statearr_36423_37688 = state_36410__$1;
(statearr_36423_37688[(2)] = null);

(statearr_36423_37688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (4))){
var inst_36351 = (state_36410[(13)]);
var inst_36351__$1 = (state_36410[(2)]);
var inst_36352 = (inst_36351__$1 == null);
var state_36410__$1 = (function (){var statearr_36424 = state_36410;
(statearr_36424[(13)] = inst_36351__$1);

return statearr_36424;
})();
if(cljs.core.truth_(inst_36352)){
var statearr_36425_37694 = state_36410__$1;
(statearr_36425_37694[(1)] = (5));

} else {
var statearr_36426_37699 = state_36410__$1;
(statearr_36426_37699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (15))){
var state_36410__$1 = state_36410;
var statearr_36431_37701 = state_36410__$1;
(statearr_36431_37701[(2)] = null);

(statearr_36431_37701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (21))){
var state_36410__$1 = state_36410;
var statearr_36433_37703 = state_36410__$1;
(statearr_36433_37703[(2)] = null);

(statearr_36433_37703[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (13))){
var inst_36363 = (state_36410[(8)]);
var inst_36362 = (state_36410[(9)]);
var inst_36364 = (state_36410[(10)]);
var inst_36365 = (state_36410[(11)]);
var inst_36372 = (state_36410[(2)]);
var inst_36373 = (inst_36365 + (1));
var tmp36428 = inst_36363;
var tmp36429 = inst_36362;
var tmp36430 = inst_36364;
var inst_36362__$1 = tmp36429;
var inst_36363__$1 = tmp36428;
var inst_36364__$1 = tmp36430;
var inst_36365__$1 = inst_36373;
var state_36410__$1 = (function (){var statearr_36436 = state_36410;
(statearr_36436[(14)] = inst_36372);

(statearr_36436[(8)] = inst_36363__$1);

(statearr_36436[(9)] = inst_36362__$1);

(statearr_36436[(10)] = inst_36364__$1);

(statearr_36436[(11)] = inst_36365__$1);

return statearr_36436;
})();
var statearr_36438_37714 = state_36410__$1;
(statearr_36438_37714[(2)] = null);

(statearr_36438_37714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (22))){
var state_36410__$1 = state_36410;
var statearr_36439_37716 = state_36410__$1;
(statearr_36439_37716[(2)] = null);

(statearr_36439_37716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (6))){
var inst_36351 = (state_36410[(13)]);
var inst_36360 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36351) : f.call(null,inst_36351));
var inst_36361 = cljs.core.seq(inst_36360);
var inst_36362 = inst_36361;
var inst_36363 = null;
var inst_36364 = (0);
var inst_36365 = (0);
var state_36410__$1 = (function (){var statearr_36441 = state_36410;
(statearr_36441[(8)] = inst_36363);

(statearr_36441[(9)] = inst_36362);

(statearr_36441[(10)] = inst_36364);

(statearr_36441[(11)] = inst_36365);

return statearr_36441;
})();
var statearr_36443_37727 = state_36410__$1;
(statearr_36443_37727[(2)] = null);

(statearr_36443_37727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (17))){
var inst_36376 = (state_36410[(7)]);
var inst_36380 = cljs.core.chunk_first(inst_36376);
var inst_36381 = cljs.core.chunk_rest(inst_36376);
var inst_36382 = cljs.core.count(inst_36380);
var inst_36362 = inst_36381;
var inst_36363 = inst_36380;
var inst_36364 = inst_36382;
var inst_36365 = (0);
var state_36410__$1 = (function (){var statearr_36446 = state_36410;
(statearr_36446[(8)] = inst_36363);

(statearr_36446[(9)] = inst_36362);

(statearr_36446[(10)] = inst_36364);

(statearr_36446[(11)] = inst_36365);

return statearr_36446;
})();
var statearr_36447_37731 = state_36410__$1;
(statearr_36447_37731[(2)] = null);

(statearr_36447_37731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (3))){
var inst_36408 = (state_36410[(2)]);
var state_36410__$1 = state_36410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36410__$1,inst_36408);
} else {
if((state_val_36411 === (12))){
var inst_36396 = (state_36410[(2)]);
var state_36410__$1 = state_36410;
var statearr_36448_37739 = state_36410__$1;
(statearr_36448_37739[(2)] = inst_36396);

(statearr_36448_37739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (2))){
var state_36410__$1 = state_36410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36410__$1,(4),in$);
} else {
if((state_val_36411 === (23))){
var inst_36404 = (state_36410[(2)]);
var state_36410__$1 = state_36410;
var statearr_36452_37742 = state_36410__$1;
(statearr_36452_37742[(2)] = inst_36404);

(statearr_36452_37742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (19))){
var inst_36391 = (state_36410[(2)]);
var state_36410__$1 = state_36410;
var statearr_36454_37743 = state_36410__$1;
(statearr_36454_37743[(2)] = inst_36391);

(statearr_36454_37743[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (11))){
var inst_36362 = (state_36410[(9)]);
var inst_36376 = (state_36410[(7)]);
var inst_36376__$1 = cljs.core.seq(inst_36362);
var state_36410__$1 = (function (){var statearr_36455 = state_36410;
(statearr_36455[(7)] = inst_36376__$1);

return statearr_36455;
})();
if(inst_36376__$1){
var statearr_36456_37753 = state_36410__$1;
(statearr_36456_37753[(1)] = (14));

} else {
var statearr_36458_37756 = state_36410__$1;
(statearr_36458_37756[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (9))){
var inst_36398 = (state_36410[(2)]);
var inst_36399 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36410__$1 = (function (){var statearr_36466 = state_36410;
(statearr_36466[(15)] = inst_36398);

return statearr_36466;
})();
if(cljs.core.truth_(inst_36399)){
var statearr_36467_37758 = state_36410__$1;
(statearr_36467_37758[(1)] = (21));

} else {
var statearr_36468_37759 = state_36410__$1;
(statearr_36468_37759[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (5))){
var inst_36354 = cljs.core.async.close_BANG_(out);
var state_36410__$1 = state_36410;
var statearr_36469_37761 = state_36410__$1;
(statearr_36469_37761[(2)] = inst_36354);

(statearr_36469_37761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (14))){
var inst_36376 = (state_36410[(7)]);
var inst_36378 = cljs.core.chunked_seq_QMARK_(inst_36376);
var state_36410__$1 = state_36410;
if(inst_36378){
var statearr_36471_37769 = state_36410__$1;
(statearr_36471_37769[(1)] = (17));

} else {
var statearr_36472_37770 = state_36410__$1;
(statearr_36472_37770[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (16))){
var inst_36394 = (state_36410[(2)]);
var state_36410__$1 = state_36410;
var statearr_36474_37772 = state_36410__$1;
(statearr_36474_37772[(2)] = inst_36394);

(statearr_36474_37772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (10))){
var inst_36363 = (state_36410[(8)]);
var inst_36365 = (state_36410[(11)]);
var inst_36370 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36363,inst_36365);
var state_36410__$1 = state_36410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36410__$1,(13),out,inst_36370);
} else {
if((state_val_36411 === (18))){
var inst_36376 = (state_36410[(7)]);
var inst_36385 = cljs.core.first(inst_36376);
var state_36410__$1 = state_36410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36410__$1,(20),out,inst_36385);
} else {
if((state_val_36411 === (8))){
var inst_36364 = (state_36410[(10)]);
var inst_36365 = (state_36410[(11)]);
var inst_36367 = (inst_36365 < inst_36364);
var inst_36368 = inst_36367;
var state_36410__$1 = state_36410;
if(cljs.core.truth_(inst_36368)){
var statearr_36478_37785 = state_36410__$1;
(statearr_36478_37785[(1)] = (10));

} else {
var statearr_36479_37786 = state_36410__$1;
(statearr_36479_37786[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_36482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36482[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36482[(1)] = (1));

return statearr_36482;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36410){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36410);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36483){if((e36483 instanceof Object)){
var ex__34210__auto__ = e36483;
var statearr_36484_37793 = state_36410;
(statearr_36484_37793[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37798 = state_36410;
state_36410 = G__37798;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36410){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36485 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36485[(6)] = c__34273__auto__);

return statearr_36485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36487 = arguments.length;
switch (G__36487) {
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
var G__36491 = arguments.length;
switch (G__36491) {
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
var G__36500 = arguments.length;
switch (G__36500) {
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
var c__34273__auto___37825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36527){
var state_val_36528 = (state_36527[(1)]);
if((state_val_36528 === (7))){
var inst_36522 = (state_36527[(2)]);
var state_36527__$1 = state_36527;
var statearr_36531_37828 = state_36527__$1;
(statearr_36531_37828[(2)] = inst_36522);

(statearr_36531_37828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (1))){
var inst_36503 = null;
var state_36527__$1 = (function (){var statearr_36533 = state_36527;
(statearr_36533[(7)] = inst_36503);

return statearr_36533;
})();
var statearr_36535_37833 = state_36527__$1;
(statearr_36535_37833[(2)] = null);

(statearr_36535_37833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (4))){
var inst_36506 = (state_36527[(8)]);
var inst_36506__$1 = (state_36527[(2)]);
var inst_36508 = (inst_36506__$1 == null);
var inst_36509 = cljs.core.not(inst_36508);
var state_36527__$1 = (function (){var statearr_36536 = state_36527;
(statearr_36536[(8)] = inst_36506__$1);

return statearr_36536;
})();
if(inst_36509){
var statearr_36537_37836 = state_36527__$1;
(statearr_36537_37836[(1)] = (5));

} else {
var statearr_36538_37837 = state_36527__$1;
(statearr_36538_37837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (6))){
var state_36527__$1 = state_36527;
var statearr_36539_37840 = state_36527__$1;
(statearr_36539_37840[(2)] = null);

(statearr_36539_37840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (3))){
var inst_36524 = (state_36527[(2)]);
var inst_36525 = cljs.core.async.close_BANG_(out);
var state_36527__$1 = (function (){var statearr_36540 = state_36527;
(statearr_36540[(9)] = inst_36524);

return statearr_36540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36527__$1,inst_36525);
} else {
if((state_val_36528 === (2))){
var state_36527__$1 = state_36527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36527__$1,(4),ch);
} else {
if((state_val_36528 === (11))){
var inst_36506 = (state_36527[(8)]);
var inst_36516 = (state_36527[(2)]);
var inst_36503 = inst_36506;
var state_36527__$1 = (function (){var statearr_36542 = state_36527;
(statearr_36542[(10)] = inst_36516);

(statearr_36542[(7)] = inst_36503);

return statearr_36542;
})();
var statearr_36543_37843 = state_36527__$1;
(statearr_36543_37843[(2)] = null);

(statearr_36543_37843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (9))){
var inst_36506 = (state_36527[(8)]);
var state_36527__$1 = state_36527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36527__$1,(11),out,inst_36506);
} else {
if((state_val_36528 === (5))){
var inst_36503 = (state_36527[(7)]);
var inst_36506 = (state_36527[(8)]);
var inst_36511 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36506,inst_36503);
var state_36527__$1 = state_36527;
if(inst_36511){
var statearr_36546_37845 = state_36527__$1;
(statearr_36546_37845[(1)] = (8));

} else {
var statearr_36547_37846 = state_36527__$1;
(statearr_36547_37846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (10))){
var inst_36519 = (state_36527[(2)]);
var state_36527__$1 = state_36527;
var statearr_36549_37849 = state_36527__$1;
(statearr_36549_37849[(2)] = inst_36519);

(statearr_36549_37849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (8))){
var inst_36503 = (state_36527[(7)]);
var tmp36544 = inst_36503;
var inst_36503__$1 = tmp36544;
var state_36527__$1 = (function (){var statearr_36550 = state_36527;
(statearr_36550[(7)] = inst_36503__$1);

return statearr_36550;
})();
var statearr_36551_37850 = state_36527__$1;
(statearr_36551_37850[(2)] = null);

(statearr_36551_37850[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36552[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36552[(1)] = (1));

return statearr_36552;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36527){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36527);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36556){if((e36556 instanceof Object)){
var ex__34210__auto__ = e36556;
var statearr_36557_37855 = state_36527;
(statearr_36557_37855[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37856 = state_36527;
state_36527 = G__37856;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36558 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36558[(6)] = c__34273__auto___37825);

return statearr_36558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var c__34273__auto___37862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36611){
var state_val_36612 = (state_36611[(1)]);
if((state_val_36612 === (7))){
var inst_36607 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36616_37868 = state_36611__$1;
(statearr_36616_37868[(2)] = inst_36607);

(statearr_36616_37868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (1))){
var inst_36572 = (new Array(n));
var inst_36573 = inst_36572;
var inst_36574 = (0);
var state_36611__$1 = (function (){var statearr_36617 = state_36611;
(statearr_36617[(7)] = inst_36574);

(statearr_36617[(8)] = inst_36573);

return statearr_36617;
})();
var statearr_36618_37874 = state_36611__$1;
(statearr_36618_37874[(2)] = null);

(statearr_36618_37874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (4))){
var inst_36577 = (state_36611[(9)]);
var inst_36577__$1 = (state_36611[(2)]);
var inst_36578 = (inst_36577__$1 == null);
var inst_36579 = cljs.core.not(inst_36578);
var state_36611__$1 = (function (){var statearr_36620 = state_36611;
(statearr_36620[(9)] = inst_36577__$1);

return statearr_36620;
})();
if(inst_36579){
var statearr_36621_37879 = state_36611__$1;
(statearr_36621_37879[(1)] = (5));

} else {
var statearr_36622_37880 = state_36611__$1;
(statearr_36622_37880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (15))){
var inst_36601 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36624_37882 = state_36611__$1;
(statearr_36624_37882[(2)] = inst_36601);

(statearr_36624_37882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (13))){
var state_36611__$1 = state_36611;
var statearr_36626_37886 = state_36611__$1;
(statearr_36626_37886[(2)] = null);

(statearr_36626_37886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (6))){
var inst_36574 = (state_36611[(7)]);
var inst_36597 = (inst_36574 > (0));
var state_36611__$1 = state_36611;
if(cljs.core.truth_(inst_36597)){
var statearr_36627_37888 = state_36611__$1;
(statearr_36627_37888[(1)] = (12));

} else {
var statearr_36628_37889 = state_36611__$1;
(statearr_36628_37889[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (3))){
var inst_36609 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36611__$1,inst_36609);
} else {
if((state_val_36612 === (12))){
var inst_36573 = (state_36611[(8)]);
var inst_36599 = cljs.core.vec(inst_36573);
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36611__$1,(15),out,inst_36599);
} else {
if((state_val_36612 === (2))){
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36611__$1,(4),ch);
} else {
if((state_val_36612 === (11))){
var inst_36591 = (state_36611[(2)]);
var inst_36592 = (new Array(n));
var inst_36573 = inst_36592;
var inst_36574 = (0);
var state_36611__$1 = (function (){var statearr_36640 = state_36611;
(statearr_36640[(7)] = inst_36574);

(statearr_36640[(8)] = inst_36573);

(statearr_36640[(10)] = inst_36591);

return statearr_36640;
})();
var statearr_36642_37901 = state_36611__$1;
(statearr_36642_37901[(2)] = null);

(statearr_36642_37901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (9))){
var inst_36573 = (state_36611[(8)]);
var inst_36589 = cljs.core.vec(inst_36573);
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36611__$1,(11),out,inst_36589);
} else {
if((state_val_36612 === (5))){
var inst_36574 = (state_36611[(7)]);
var inst_36577 = (state_36611[(9)]);
var inst_36583 = (state_36611[(11)]);
var inst_36573 = (state_36611[(8)]);
var inst_36581 = (inst_36573[inst_36574] = inst_36577);
var inst_36583__$1 = (inst_36574 + (1));
var inst_36585 = (inst_36583__$1 < n);
var state_36611__$1 = (function (){var statearr_36644 = state_36611;
(statearr_36644[(11)] = inst_36583__$1);

(statearr_36644[(12)] = inst_36581);

return statearr_36644;
})();
if(cljs.core.truth_(inst_36585)){
var statearr_36645_37910 = state_36611__$1;
(statearr_36645_37910[(1)] = (8));

} else {
var statearr_36646_37913 = state_36611__$1;
(statearr_36646_37913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (14))){
var inst_36604 = (state_36611[(2)]);
var inst_36605 = cljs.core.async.close_BANG_(out);
var state_36611__$1 = (function (){var statearr_36652 = state_36611;
(statearr_36652[(13)] = inst_36604);

return statearr_36652;
})();
var statearr_36653_37919 = state_36611__$1;
(statearr_36653_37919[(2)] = inst_36605);

(statearr_36653_37919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (10))){
var inst_36595 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36654_37921 = state_36611__$1;
(statearr_36654_37921[(2)] = inst_36595);

(statearr_36654_37921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (8))){
var inst_36583 = (state_36611[(11)]);
var inst_36573 = (state_36611[(8)]);
var tmp36647 = inst_36573;
var inst_36573__$1 = tmp36647;
var inst_36574 = inst_36583;
var state_36611__$1 = (function (){var statearr_36661 = state_36611;
(statearr_36661[(7)] = inst_36574);

(statearr_36661[(8)] = inst_36573__$1);

return statearr_36661;
})();
var statearr_36662_37927 = state_36611__$1;
(statearr_36662_37927[(2)] = null);

(statearr_36662_37927[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36664[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36664[(1)] = (1));

return statearr_36664;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36611){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36611);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36665){if((e36665 instanceof Object)){
var ex__34210__auto__ = e36665;
var statearr_36666_37933 = state_36611;
(statearr_36666_37933[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37934 = state_36611;
state_36611 = G__37934;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36667 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36667[(6)] = c__34273__auto___37862);

return statearr_36667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36669 = arguments.length;
switch (G__36669) {
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
var c__34273__auto___37946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36720){
var state_val_36721 = (state_36720[(1)]);
if((state_val_36721 === (7))){
var inst_36715 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36722_37948 = state_36720__$1;
(statearr_36722_37948[(2)] = inst_36715);

(statearr_36722_37948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (1))){
var inst_36670 = [];
var inst_36673 = inst_36670;
var inst_36674 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36720__$1 = (function (){var statearr_36725 = state_36720;
(statearr_36725[(7)] = inst_36674);

(statearr_36725[(8)] = inst_36673);

return statearr_36725;
})();
var statearr_36726_37950 = state_36720__$1;
(statearr_36726_37950[(2)] = null);

(statearr_36726_37950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (4))){
var inst_36677 = (state_36720[(9)]);
var inst_36677__$1 = (state_36720[(2)]);
var inst_36681 = (inst_36677__$1 == null);
var inst_36682 = cljs.core.not(inst_36681);
var state_36720__$1 = (function (){var statearr_36727 = state_36720;
(statearr_36727[(9)] = inst_36677__$1);

return statearr_36727;
})();
if(inst_36682){
var statearr_36728_37958 = state_36720__$1;
(statearr_36728_37958[(1)] = (5));

} else {
var statearr_36729_37960 = state_36720__$1;
(statearr_36729_37960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (15))){
var inst_36709 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36733_37962 = state_36720__$1;
(statearr_36733_37962[(2)] = inst_36709);

(statearr_36733_37962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (13))){
var state_36720__$1 = state_36720;
var statearr_36735_37964 = state_36720__$1;
(statearr_36735_37964[(2)] = null);

(statearr_36735_37964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (6))){
var inst_36673 = (state_36720[(8)]);
var inst_36704 = inst_36673.length;
var inst_36705 = (inst_36704 > (0));
var state_36720__$1 = state_36720;
if(cljs.core.truth_(inst_36705)){
var statearr_36737_37972 = state_36720__$1;
(statearr_36737_37972[(1)] = (12));

} else {
var statearr_36738_37973 = state_36720__$1;
(statearr_36738_37973[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (3))){
var inst_36717 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36720__$1,inst_36717);
} else {
if((state_val_36721 === (12))){
var inst_36673 = (state_36720[(8)]);
var inst_36707 = cljs.core.vec(inst_36673);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36720__$1,(15),out,inst_36707);
} else {
if((state_val_36721 === (2))){
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36720__$1,(4),ch);
} else {
if((state_val_36721 === (11))){
var inst_36684 = (state_36720[(10)]);
var inst_36677 = (state_36720[(9)]);
var inst_36696 = (state_36720[(2)]);
var inst_36698 = [];
var inst_36699 = inst_36698.push(inst_36677);
var inst_36673 = inst_36698;
var inst_36674 = inst_36684;
var state_36720__$1 = (function (){var statearr_36743 = state_36720;
(statearr_36743[(7)] = inst_36674);

(statearr_36743[(11)] = inst_36699);

(statearr_36743[(8)] = inst_36673);

(statearr_36743[(12)] = inst_36696);

return statearr_36743;
})();
var statearr_36745_37979 = state_36720__$1;
(statearr_36745_37979[(2)] = null);

(statearr_36745_37979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (9))){
var inst_36673 = (state_36720[(8)]);
var inst_36694 = cljs.core.vec(inst_36673);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36720__$1,(11),out,inst_36694);
} else {
if((state_val_36721 === (5))){
var inst_36684 = (state_36720[(10)]);
var inst_36674 = (state_36720[(7)]);
var inst_36677 = (state_36720[(9)]);
var inst_36684__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36677) : f.call(null,inst_36677));
var inst_36686 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36684__$1,inst_36674);
var inst_36687 = cljs.core.keyword_identical_QMARK_(inst_36674,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36688 = ((inst_36686) || (inst_36687));
var state_36720__$1 = (function (){var statearr_36747 = state_36720;
(statearr_36747[(10)] = inst_36684__$1);

return statearr_36747;
})();
if(cljs.core.truth_(inst_36688)){
var statearr_36748_37985 = state_36720__$1;
(statearr_36748_37985[(1)] = (8));

} else {
var statearr_36749_37988 = state_36720__$1;
(statearr_36749_37988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (14))){
var inst_36712 = (state_36720[(2)]);
var inst_36713 = cljs.core.async.close_BANG_(out);
var state_36720__$1 = (function (){var statearr_36755 = state_36720;
(statearr_36755[(13)] = inst_36712);

return statearr_36755;
})();
var statearr_36756_37991 = state_36720__$1;
(statearr_36756_37991[(2)] = inst_36713);

(statearr_36756_37991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (10))){
var inst_36702 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36757_37995 = state_36720__$1;
(statearr_36757_37995[(2)] = inst_36702);

(statearr_36757_37995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (8))){
var inst_36684 = (state_36720[(10)]);
var inst_36673 = (state_36720[(8)]);
var inst_36677 = (state_36720[(9)]);
var inst_36690 = inst_36673.push(inst_36677);
var tmp36752 = inst_36673;
var inst_36673__$1 = tmp36752;
var inst_36674 = inst_36684;
var state_36720__$1 = (function (){var statearr_36759 = state_36720;
(statearr_36759[(7)] = inst_36674);

(statearr_36759[(8)] = inst_36673__$1);

(statearr_36759[(14)] = inst_36690);

return statearr_36759;
})();
var statearr_36760_37996 = state_36720__$1;
(statearr_36760_37996[(2)] = null);

(statearr_36760_37996[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36762[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36762[(1)] = (1));

return statearr_36762;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36720){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36720);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36763){if((e36763 instanceof Object)){
var ex__34210__auto__ = e36763;
var statearr_36764_38004 = state_36720;
(statearr_36764_38004[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38006 = state_36720;
state_36720 = G__38006;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36766 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36766[(6)] = c__34273__auto___37946);

return statearr_36766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
