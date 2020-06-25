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
var val_36906 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36906) : fn1.call(null,val_36906));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36906) : fn1.call(null,val_36906));
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
var n__4666__auto___36917 = n;
var x_36918 = (0);
while(true){
if((x_36918 < n__4666__auto___36917)){
(a[x_36918] = x_36918);

var G__36920 = (x_36918 + (1));
x_36918 = G__36920;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34351 = (function (flag,cb,meta34352){
this.flag = flag;
this.cb = cb;
this.meta34352 = meta34352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34353,meta34352__$1){
var self__ = this;
var _34353__$1 = this;
return (new cljs.core.async.t_cljs$core$async34351(self__.flag,self__.cb,meta34352__$1));
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34353){
var self__ = this;
var _34353__$1 = this;
return self__.meta34352;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34352","meta34352",58586617,null)], null);
}));

(cljs.core.async.t_cljs$core$async34351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34351");

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34351.
 */
cljs.core.async.__GT_t_cljs$core$async34351 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34351(flag__$1,cb__$1,meta34352){
return (new cljs.core.async.t_cljs$core$async34351(flag__$1,cb__$1,meta34352));
});

}

return (new cljs.core.async.t_cljs$core$async34351(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36953 = (i + (1));
i = G__36953;
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
var len__4789__auto___36957 = arguments.length;
var i__4790__auto___36958 = (0);
while(true){
if((i__4790__auto___36958 < len__4789__auto___36957)){
args__4795__auto__.push((arguments[i__4790__auto___36958]));

var G__36961 = (i__4790__auto___36958 + (1));
i__4790__auto___36958 = G__36961;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34368){
var map__34369 = p__34368;
var map__34369__$1 = (((((!((map__34369 == null))))?(((((map__34369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34369):map__34369);
var opts = map__34369__$1;
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
var G__34381 = arguments.length;
switch (G__34381) {
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
var c__34273__auto___36985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34425_36988 = state_34411__$1;
(statearr_34425_36988[(2)] = inst_34407);

(statearr_34425_36988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34426_36991 = state_34411__$1;
(statearr_34426_36991[(2)] = null);

(statearr_34426_36991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (4))){
var inst_34390 = (state_34411[(7)]);
var inst_34390__$1 = (state_34411[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34411__$1 = (function (){var statearr_34427 = state_34411;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36993 = state_34411__$1;
(statearr_34428_36993[(1)] = (5));

} else {
var statearr_34429_36994 = state_34411__$1;
(statearr_34429_36994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36998 = state_34411__$1;
(statearr_34430_36998[(2)] = null);

(statearr_34430_36998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (6))){
var inst_34390 = (state_34411[(7)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34411__$1,(11),to,inst_34390);
} else {
if((state_val_34412 === (3))){
var inst_34409 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34411__$1,inst_34409);
} else {
if((state_val_34412 === (12))){
var state_34411__$1 = state_34411;
var statearr_34431_37004 = state_34411__$1;
(statearr_34431_37004[(2)] = null);

(statearr_34431_37004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (2))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34411__$1,(4),from);
} else {
if((state_val_34412 === (11))){
var inst_34400 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_37011 = state_34411__$1;
(statearr_34432_37011[(1)] = (12));

} else {
var statearr_34433_37013 = state_34411__$1;
(statearr_34433_37013[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_37015 = state_34411__$1;
(statearr_34434_37015[(2)] = null);

(statearr_34434_37015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_37016 = state_34411__$1;
(statearr_34435_37016[(1)] = (8));

} else {
var statearr_34436_37017 = state_34411__$1;
(statearr_34436_37017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_37020 = state_34411__$1;
(statearr_34437_37020[(2)] = inst_34405);

(statearr_34437_37020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_37022 = state_34411__$1;
(statearr_34438_37022[(2)] = inst_34397);

(statearr_34438_37022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_37023 = state_34411__$1;
(statearr_34439_37023[(2)] = inst_34394);

(statearr_34439_37023[(1)] = (10));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34411){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34411);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_37030 = state_34411;
(statearr_34442_37030[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37032 = state_34411;
state_34411 = G__37032;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34443 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34443[(6)] = c__34273__auto___36985);

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
var process = (function (p__34449){
var vec__34450 = p__34449;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34450,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34450,(1),null);
var job = vec__34450;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34273__auto___37041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34457){
var state_val_34458 = (state_34457[(1)]);
if((state_val_34458 === (1))){
var state_34457__$1 = state_34457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34457__$1,(2),res,v);
} else {
if((state_val_34458 === (2))){
var inst_34454 = (state_34457[(2)]);
var inst_34455 = cljs.core.async.close_BANG_(res);
var state_34457__$1 = (function (){var statearr_34459 = state_34457;
(statearr_34459[(7)] = inst_34454);

return statearr_34459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34457__$1,inst_34455);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34460 = [null,null,null,null,null,null,null,null];
(statearr_34460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34460[(1)] = (1));

return statearr_34460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34457){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34457);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34461){if((e34461 instanceof Object)){
var ex__34210__auto__ = e34461;
var statearr_34463_37052 = state_34457;
(statearr_34463_37052[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37053 = state_34457;
state_34457 = G__37053;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34465 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34465[(6)] = c__34273__auto___37041);

return statearr_34465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34466){
var vec__34467 = p__34466;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34467,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34467,(1),null);
var job = vec__34467;
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
var n__4666__auto___37058 = n;
var __37059 = (0);
while(true){
if((__37059 < n__4666__auto___37058)){
var G__34471_37060 = type;
var G__34471_37061__$1 = (((G__34471_37060 instanceof cljs.core.Keyword))?G__34471_37060.fqn:null);
switch (G__34471_37061__$1) {
case "compute":
var c__34273__auto___37063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37059,c__34273__auto___37063,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__37059,c__34273__auto___37063,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async){
return (function (state_34486){
var state_val_34487 = (state_34486[(1)]);
if((state_val_34487 === (1))){
var state_34486__$1 = state_34486;
var statearr_34493_37067 = state_34486__$1;
(statearr_34493_37067[(2)] = null);

(statearr_34493_37067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (2))){
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34486__$1,(4),jobs);
} else {
if((state_val_34487 === (3))){
var inst_34484 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34486__$1,inst_34484);
} else {
if((state_val_34487 === (4))){
var inst_34474 = (state_34486[(2)]);
var inst_34476 = process(inst_34474);
var state_34486__$1 = state_34486;
if(cljs.core.truth_(inst_34476)){
var statearr_34494_37076 = state_34486__$1;
(statearr_34494_37076[(1)] = (5));

} else {
var statearr_34495_37077 = state_34486__$1;
(statearr_34495_37077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (5))){
var state_34486__$1 = state_34486;
var statearr_34496_37078 = state_34486__$1;
(statearr_34496_37078[(2)] = null);

(statearr_34496_37078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (6))){
var state_34486__$1 = state_34486;
var statearr_34497_37079 = state_34486__$1;
(statearr_34497_37079[(2)] = null);

(statearr_34497_37079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (7))){
var inst_34482 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
var statearr_34498_37080 = state_34486__$1;
(statearr_34498_37080[(2)] = inst_34482);

(statearr_34498_37080[(1)] = (3));


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
});})(__37059,c__34273__auto___37063,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async))
;
return ((function (__37059,switch__34206__auto__,c__34273__auto___37063,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null];
(statearr_34499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34486){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34486);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34501){if((e34501 instanceof Object)){
var ex__34210__auto__ = e34501;
var statearr_34502_37087 = state_34486;
(statearr_34502_37087[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37092 = state_34486;
state_34486 = G__37092;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34486){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__37059,switch__34206__auto__,c__34273__auto___37063,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34503 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34503[(6)] = c__34273__auto___37063);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__37059,c__34273__auto___37063,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___37094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37059,c__34273__auto___37094,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__37059,c__34273__auto___37094,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async){
return (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var state_34516__$1 = state_34516;
var statearr_34522_37104 = state_34516__$1;
(statearr_34522_37104[(2)] = null);

(statearr_34522_37104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (2))){
var state_34516__$1 = state_34516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34516__$1,(4),jobs);
} else {
if((state_val_34517 === (3))){
var inst_34514 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34516__$1,inst_34514);
} else {
if((state_val_34517 === (4))){
var inst_34506 = (state_34516[(2)]);
var inst_34507 = async(inst_34506);
var state_34516__$1 = state_34516;
if(cljs.core.truth_(inst_34507)){
var statearr_34526_37109 = state_34516__$1;
(statearr_34526_37109[(1)] = (5));

} else {
var statearr_34527_37110 = state_34516__$1;
(statearr_34527_37110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (5))){
var state_34516__$1 = state_34516;
var statearr_34528_37113 = state_34516__$1;
(statearr_34528_37113[(2)] = null);

(statearr_34528_37113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34529_37117 = state_34516__$1;
(statearr_34529_37117[(2)] = null);

(statearr_34529_37117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (7))){
var inst_34512 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34530_37120 = state_34516__$1;
(statearr_34530_37120[(2)] = inst_34512);

(statearr_34530_37120[(1)] = (3));


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
});})(__37059,c__34273__auto___37094,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async))
;
return ((function (__37059,switch__34206__auto__,c__34273__auto___37094,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34531 = [null,null,null,null,null,null,null];
(statearr_34531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34531[(1)] = (1));

return statearr_34531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34516){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34516);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34532){if((e34532 instanceof Object)){
var ex__34210__auto__ = e34532;
var statearr_34533_37129 = state_34516;
(statearr_34533_37129[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37134 = state_34516;
state_34516 = G__37134;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__37059,switch__34206__auto__,c__34273__auto___37094,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34534 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34534[(6)] = c__34273__auto___37094);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__37059,c__34273__auto___37094,G__34471_37060,G__34471_37061__$1,n__4666__auto___37058,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34471_37061__$1)].join('')));

}

var G__37138 = (__37059 + (1));
__37059 = G__37138;
continue;
} else {
}
break;
}

var c__34273__auto___37140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_37142 = state_34559__$1;
(statearr_34561_37142[(2)] = inst_34555);

(statearr_34561_37142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_37145 = state_34559__$1;
(statearr_34562_37145[(2)] = null);

(statearr_34562_37145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (4))){
var inst_34537 = (state_34559[(7)]);
var inst_34537__$1 = (state_34559[(2)]);
var inst_34538 = (inst_34537__$1 == null);
var state_34559__$1 = (function (){var statearr_34563 = state_34559;
(statearr_34563[(7)] = inst_34537__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34538)){
var statearr_34564_37147 = state_34559__$1;
(statearr_34564_37147[(1)] = (5));

} else {
var statearr_34565_37148 = state_34559__$1;
(statearr_34565_37148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (6))){
var inst_34542 = (state_34559[(8)]);
var inst_34537 = (state_34559[(7)]);
var inst_34542__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34547 = [inst_34537,inst_34542__$1];
var inst_34548 = (new cljs.core.PersistentVector(null,2,(5),inst_34546,inst_34547,null));
var state_34559__$1 = (function (){var statearr_34566 = state_34559;
(statearr_34566[(8)] = inst_34542__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(8),jobs,inst_34548);
} else {
if((state_val_34560 === (3))){
var inst_34557 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34559__$1,inst_34557);
} else {
if((state_val_34560 === (2))){
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34559__$1,(4),from);
} else {
if((state_val_34560 === (9))){
var inst_34552 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34567 = state_34559;
(statearr_34567[(9)] = inst_34552);

return statearr_34567;
})();
var statearr_34568_37155 = state_34559__$1;
(statearr_34568_37155[(2)] = null);

(statearr_34568_37155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_37157 = state_34559__$1;
(statearr_34569_37157[(2)] = inst_34540);

(statearr_34569_37157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (8))){
var inst_34542 = (state_34559[(8)]);
var inst_34550 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34570 = state_34559;
(statearr_34570[(10)] = inst_34550);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(9),results,inst_34542);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34559){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34559);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34572){if((e34572 instanceof Object)){
var ex__34210__auto__ = e34572;
var statearr_34573_37163 = state_34559;
(statearr_34573_37163[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37167 = state_34559;
state_34559 = G__37167;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34559){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34574 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34574[(6)] = c__34273__auto___37140);

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
var statearr_34614_37173 = state_34612__$1;
(statearr_34614_37173[(2)] = inst_34608);

(statearr_34614_37173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_37178 = state_34612__$1;
(statearr_34615_37178[(2)] = null);

(statearr_34615_37178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_37179 = state_34612__$1;
(statearr_34616_37179[(2)] = null);

(statearr_34616_37179[(1)] = (2));


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
var statearr_34618_37185 = state_34612__$1;
(statearr_34618_37185[(1)] = (5));

} else {
var statearr_34619_37188 = state_34612__$1;
(statearr_34619_37188[(1)] = (6));

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
var statearr_34620_37192 = state_34612__$1;
(statearr_34620_37192[(2)] = inst_34603);

(statearr_34620_37192[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_37196 = state_34612__$1;
(statearr_34622_37196[(2)] = null);

(statearr_34622_37196[(1)] = (2));


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
var statearr_34623_37201 = state_34612__$1;
(statearr_34623_37201[(1)] = (19));

} else {
var statearr_34624_37204 = state_34612__$1;
(statearr_34624_37204[(1)] = (20));

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
var statearr_34625_37210 = state_34612__$1;
(statearr_34625_37210[(2)] = null);

(statearr_34625_37210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_37215 = state_34612__$1;
(statearr_34627_37215[(2)] = null);

(statearr_34627_37215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37216 = state_34612__$1;
(statearr_34628_37216[(2)] = null);

(statearr_34628_37216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37217 = state_34612__$1;
(statearr_34629_37217[(1)] = (8));

} else {
var statearr_34630_37218 = state_34612__$1;
(statearr_34630_37218[(1)] = (9));

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
var statearr_34632_37221 = state_34612__$1;
(statearr_34632_37221[(1)] = (15));

} else {
var statearr_34633_37222 = state_34612__$1;
(statearr_34633_37222[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37225 = state_34612__$1;
(statearr_34634_37225[(2)] = false);

(statearr_34634_37225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37228 = state_34612__$1;
(statearr_34635_37228[(2)] = inst_34584);

(statearr_34635_37228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37229 = state_34612__$1;
(statearr_34636_37229[(2)] = inst_34595);

(statearr_34636_37229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37230 = state_34612__$1;
(statearr_34637_37230[(2)] = inst_34581);

(statearr_34637_37230[(1)] = (10));


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
var statearr_34640_37237 = state_34612;
(statearr_34640_37237[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37241 = state_34612;
state_34612 = G__37241;
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
var G__34648 = arguments.length;
switch (G__34648) {
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
var G__34656 = arguments.length;
switch (G__34656) {
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
var c__34273__auto___37281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34686_37289 = state_34684__$1;
(statearr_34686_37289[(2)] = inst_34680);

(statearr_34686_37289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34688_37290 = state_34684__$1;
(statearr_34688_37290[(2)] = null);

(statearr_34688_37290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34661 = (state_34684[(7)]);
var inst_34661__$1 = (state_34684[(2)]);
var inst_34662 = (inst_34661__$1 == null);
var state_34684__$1 = (function (){var statearr_34689 = state_34684;
(statearr_34689[(7)] = inst_34661__$1);

return statearr_34689;
})();
if(cljs.core.truth_(inst_34662)){
var statearr_34691_37293 = state_34684__$1;
(statearr_34691_37293[(1)] = (5));

} else {
var statearr_34692_37296 = state_34684__$1;
(statearr_34692_37296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (13))){
var state_34684__$1 = state_34684;
var statearr_34693_37297 = state_34684__$1;
(statearr_34693_37297[(2)] = null);

(statearr_34693_37297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34661 = (state_34684[(7)]);
var inst_34667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34661) : p.call(null,inst_34661));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34667)){
var statearr_34694_37300 = state_34684__$1;
(statearr_34694_37300[(1)] = (9));

} else {
var statearr_34695_37301 = state_34684__$1;
(statearr_34695_37301[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (3))){
var inst_34682 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34684__$1,inst_34682);
} else {
if((state_val_34685 === (12))){
var state_34684__$1 = state_34684;
var statearr_34698_37307 = state_34684__$1;
(statearr_34698_37307[(2)] = null);

(statearr_34698_37307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (2))){
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34684__$1,(4),ch);
} else {
if((state_val_34685 === (11))){
var inst_34661 = (state_34684[(7)]);
var inst_34671 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34684__$1,(8),inst_34671,inst_34661);
} else {
if((state_val_34685 === (9))){
var state_34684__$1 = state_34684;
var statearr_34702_37310 = state_34684__$1;
(statearr_34702_37310[(2)] = tc);

(statearr_34702_37310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34664 = cljs.core.async.close_BANG_(tc);
var inst_34665 = cljs.core.async.close_BANG_(fc);
var state_34684__$1 = (function (){var statearr_34703 = state_34684;
(statearr_34703[(8)] = inst_34664);

return statearr_34703;
})();
var statearr_34704_37317 = state_34684__$1;
(statearr_34704_37317[(2)] = inst_34665);

(statearr_34704_37317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34705_37319 = state_34684__$1;
(statearr_34705_37319[(2)] = inst_34678);

(statearr_34705_37319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var state_34684__$1 = state_34684;
var statearr_34706_37321 = state_34684__$1;
(statearr_34706_37321[(2)] = fc);

(statearr_34706_37321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34673 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34673)){
var statearr_34707_37324 = state_34684__$1;
(statearr_34707_37324[(1)] = (12));

} else {
var statearr_34708_37325 = state_34684__$1;
(statearr_34708_37325[(1)] = (13));

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
var statearr_34710 = [null,null,null,null,null,null,null,null,null];
(statearr_34710[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34710[(1)] = (1));

return statearr_34710;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34684){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34684);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34711){if((e34711 instanceof Object)){
var ex__34210__auto__ = e34711;
var statearr_34712_37330 = state_34684;
(statearr_34712_37330[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37333 = state_34684;
state_34684 = G__37333;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34713 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34713[(6)] = c__34273__auto___37281);

return statearr_34713;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34740){
var state_val_34741 = (state_34740[(1)]);
if((state_val_34741 === (7))){
var inst_34736 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34742_37340 = state_34740__$1;
(statearr_34742_37340[(2)] = inst_34736);

(statearr_34742_37340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (1))){
var inst_34717 = init;
var state_34740__$1 = (function (){var statearr_34743 = state_34740;
(statearr_34743[(7)] = inst_34717);

return statearr_34743;
})();
var statearr_34744_37343 = state_34740__$1;
(statearr_34744_37343[(2)] = null);

(statearr_34744_37343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (4))){
var inst_34720 = (state_34740[(8)]);
var inst_34720__$1 = (state_34740[(2)]);
var inst_34721 = (inst_34720__$1 == null);
var state_34740__$1 = (function (){var statearr_34745 = state_34740;
(statearr_34745[(8)] = inst_34720__$1);

return statearr_34745;
})();
if(cljs.core.truth_(inst_34721)){
var statearr_34746_37349 = state_34740__$1;
(statearr_34746_37349[(1)] = (5));

} else {
var statearr_34750_37351 = state_34740__$1;
(statearr_34750_37351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (6))){
var inst_34727 = (state_34740[(9)]);
var inst_34717 = (state_34740[(7)]);
var inst_34720 = (state_34740[(8)]);
var inst_34727__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34717,inst_34720) : f.call(null,inst_34717,inst_34720));
var inst_34728 = cljs.core.reduced_QMARK_(inst_34727__$1);
var state_34740__$1 = (function (){var statearr_34751 = state_34740;
(statearr_34751[(9)] = inst_34727__$1);

return statearr_34751;
})();
if(inst_34728){
var statearr_34752_37353 = state_34740__$1;
(statearr_34752_37353[(1)] = (8));

} else {
var statearr_34753_37354 = state_34740__$1;
(statearr_34753_37354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (3))){
var inst_34738 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34740__$1,inst_34738);
} else {
if((state_val_34741 === (2))){
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34740__$1,(4),ch);
} else {
if((state_val_34741 === (9))){
var inst_34727 = (state_34740[(9)]);
var inst_34717 = inst_34727;
var state_34740__$1 = (function (){var statearr_34754 = state_34740;
(statearr_34754[(7)] = inst_34717);

return statearr_34754;
})();
var statearr_34755_37359 = state_34740__$1;
(statearr_34755_37359[(2)] = null);

(statearr_34755_37359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (5))){
var inst_34717 = (state_34740[(7)]);
var state_34740__$1 = state_34740;
var statearr_34756_37360 = state_34740__$1;
(statearr_34756_37360[(2)] = inst_34717);

(statearr_34756_37360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (10))){
var inst_34734 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34757_37364 = state_34740__$1;
(statearr_34757_37364[(2)] = inst_34734);

(statearr_34757_37364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (8))){
var inst_34727 = (state_34740[(9)]);
var inst_34730 = cljs.core.deref(inst_34727);
var state_34740__$1 = state_34740;
var statearr_34758_37365 = state_34740__$1;
(statearr_34758_37365[(2)] = inst_34730);

(statearr_34758_37365[(1)] = (10));


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
var statearr_34759 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34759[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34759[(1)] = (1));

return statearr_34759;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34740){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34740);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37372 = state_34740;
(statearr_34761_37372[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37374 = state_34740;
state_34740 = G__37374;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34740){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34762 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34762[(6)] = c__34273__auto__);

return statearr_34762;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34768){
var state_val_34769 = (state_34768[(1)]);
if((state_val_34769 === (1))){
var inst_34763 = cljs.core.async.reduce(f__$1,init,ch);
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34768__$1,(2),inst_34763);
} else {
if((state_val_34769 === (2))){
var inst_34765 = (state_34768[(2)]);
var inst_34766 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34765) : f__$1.call(null,inst_34765));
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34768__$1,inst_34766);
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
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34768){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34768);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34771){if((e34771 instanceof Object)){
var ex__34210__auto__ = e34771;
var statearr_34772_37401 = state_34768;
(statearr_34772_37401[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37403 = state_34768;
state_34768 = G__37403;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34768){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34776 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34776[(6)] = c__34273__auto__);

return statearr_34776;
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
var G__34781 = arguments.length;
switch (G__34781) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34808){
var state_val_34809 = (state_34808[(1)]);
if((state_val_34809 === (7))){
var inst_34790 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34812_37419 = state_34808__$1;
(statearr_34812_37419[(2)] = inst_34790);

(statearr_34812_37419[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (1))){
var inst_34783 = cljs.core.seq(coll);
var inst_34784 = inst_34783;
var state_34808__$1 = (function (){var statearr_34816 = state_34808;
(statearr_34816[(7)] = inst_34784);

return statearr_34816;
})();
var statearr_34817_37423 = state_34808__$1;
(statearr_34817_37423[(2)] = null);

(statearr_34817_37423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (4))){
var inst_34784 = (state_34808[(7)]);
var inst_34787 = cljs.core.first(inst_34784);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34808__$1,(7),ch,inst_34787);
} else {
if((state_val_34809 === (13))){
var inst_34802 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34818_37430 = state_34808__$1;
(statearr_34818_37430[(2)] = inst_34802);

(statearr_34818_37430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (6))){
var inst_34793 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34793)){
var statearr_34819_37433 = state_34808__$1;
(statearr_34819_37433[(1)] = (8));

} else {
var statearr_34820_37437 = state_34808__$1;
(statearr_34820_37437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (3))){
var inst_34806 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34808__$1,inst_34806);
} else {
if((state_val_34809 === (12))){
var state_34808__$1 = state_34808;
var statearr_34821_37440 = state_34808__$1;
(statearr_34821_37440[(2)] = null);

(statearr_34821_37440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (2))){
var inst_34784 = (state_34808[(7)]);
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34784)){
var statearr_34822_37442 = state_34808__$1;
(statearr_34822_37442[(1)] = (4));

} else {
var statearr_34823_37443 = state_34808__$1;
(statearr_34823_37443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (11))){
var inst_34799 = cljs.core.async.close_BANG_(ch);
var state_34808__$1 = state_34808;
var statearr_34824_37449 = state_34808__$1;
(statearr_34824_37449[(2)] = inst_34799);

(statearr_34824_37449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (9))){
var state_34808__$1 = state_34808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34825_37452 = state_34808__$1;
(statearr_34825_37452[(1)] = (11));

} else {
var statearr_34829_37453 = state_34808__$1;
(statearr_34829_37453[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (5))){
var inst_34784 = (state_34808[(7)]);
var state_34808__$1 = state_34808;
var statearr_34830_37455 = state_34808__$1;
(statearr_34830_37455[(2)] = inst_34784);

(statearr_34830_37455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (10))){
var inst_34804 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34831_37461 = state_34808__$1;
(statearr_34831_37461[(2)] = inst_34804);

(statearr_34831_37461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (8))){
var inst_34784 = (state_34808[(7)]);
var inst_34795 = cljs.core.next(inst_34784);
var inst_34784__$1 = inst_34795;
var state_34808__$1 = (function (){var statearr_34835 = state_34808;
(statearr_34835[(7)] = inst_34784__$1);

return statearr_34835;
})();
var statearr_34836_37464 = state_34808__$1;
(statearr_34836_37464[(2)] = null);

(statearr_34836_37464[(1)] = (2));


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
var statearr_34837 = [null,null,null,null,null,null,null,null];
(statearr_34837[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34837[(1)] = (1));

return statearr_34837;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34808){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34808);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37472 = state_34808;
(statearr_34839_37472[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37475 = state_34808;
state_34808 = G__37475;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34840 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34840[(6)] = c__34273__auto__);

return statearr_34840;
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
var c__34273__auto___37553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34995){
var state_val_34997 = (state_34995[(1)]);
if((state_val_34997 === (7))){
var inst_34986 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_34998_37555 = state_34995__$1;
(statearr_34998_37555[(2)] = inst_34986);

(statearr_34998_37555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (20))){
var inst_34879 = (state_34995[(7)]);
var inst_34895 = cljs.core.first(inst_34879);
var inst_34896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(0),null);
var inst_34897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(1),null);
var state_34995__$1 = (function (){var statearr_35003 = state_34995;
(statearr_35003[(8)] = inst_34896);

return statearr_35003;
})();
if(cljs.core.truth_(inst_34897)){
var statearr_35005_37564 = state_34995__$1;
(statearr_35005_37564[(1)] = (22));

} else {
var statearr_35007_37566 = state_34995__$1;
(statearr_35007_37566[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (27))){
var inst_34927 = (state_34995[(9)]);
var inst_34846 = (state_34995[(10)]);
var inst_34925 = (state_34995[(11)]);
var inst_34932 = (state_34995[(12)]);
var inst_34932__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34925,inst_34927);
var inst_34933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34932__$1,inst_34846,done);
var state_34995__$1 = (function (){var statearr_35008 = state_34995;
(statearr_35008[(12)] = inst_34932__$1);

return statearr_35008;
})();
if(cljs.core.truth_(inst_34933)){
var statearr_35009_37573 = state_34995__$1;
(statearr_35009_37573[(1)] = (30));

} else {
var statearr_35010_37578 = state_34995__$1;
(statearr_35010_37578[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (1))){
var state_34995__$1 = state_34995;
var statearr_35014_37581 = state_34995__$1;
(statearr_35014_37581[(2)] = null);

(statearr_35014_37581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (24))){
var inst_34879 = (state_34995[(7)]);
var inst_34902 = (state_34995[(2)]);
var inst_34903 = cljs.core.next(inst_34879);
var inst_34855 = inst_34903;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34995__$1 = (function (){var statearr_35016 = state_34995;
(statearr_35016[(13)] = inst_34857);

(statearr_35016[(14)] = inst_34856);

(statearr_35016[(15)] = inst_34858);

(statearr_35016[(16)] = inst_34855);

(statearr_35016[(17)] = inst_34902);

return statearr_35016;
})();
var statearr_35030_37588 = state_34995__$1;
(statearr_35030_37588[(2)] = null);

(statearr_35030_37588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (39))){
var state_34995__$1 = state_34995;
var statearr_35038_37592 = state_34995__$1;
(statearr_35038_37592[(2)] = null);

(statearr_35038_37592[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (4))){
var inst_34846 = (state_34995[(10)]);
var inst_34846__$1 = (state_34995[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34995__$1 = (function (){var statearr_35041 = state_34995;
(statearr_35041[(10)] = inst_34846__$1);

return statearr_35041;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35042_37595 = state_34995__$1;
(statearr_35042_37595[(1)] = (5));

} else {
var statearr_35043_37596 = state_34995__$1;
(statearr_35043_37596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (15))){
var inst_34857 = (state_34995[(13)]);
var inst_34856 = (state_34995[(14)]);
var inst_34858 = (state_34995[(15)]);
var inst_34855 = (state_34995[(16)]);
var inst_34875 = (state_34995[(2)]);
var inst_34876 = (inst_34858 + (1));
var tmp35033 = inst_34857;
var tmp35034 = inst_34856;
var tmp35035 = inst_34855;
var inst_34855__$1 = tmp35035;
var inst_34856__$1 = tmp35034;
var inst_34857__$1 = tmp35033;
var inst_34858__$1 = inst_34876;
var state_34995__$1 = (function (){var statearr_35052 = state_34995;
(statearr_35052[(13)] = inst_34857__$1);

(statearr_35052[(14)] = inst_34856__$1);

(statearr_35052[(15)] = inst_34858__$1);

(statearr_35052[(18)] = inst_34875);

(statearr_35052[(16)] = inst_34855__$1);

return statearr_35052;
})();
var statearr_35055_37606 = state_34995__$1;
(statearr_35055_37606[(2)] = null);

(statearr_35055_37606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (21))){
var inst_34906 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35066_37609 = state_34995__$1;
(statearr_35066_37609[(2)] = inst_34906);

(statearr_35066_37609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (31))){
var inst_34932 = (state_34995[(12)]);
var inst_34936 = done(null);
var inst_34941 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34932);
var state_34995__$1 = (function (){var statearr_35073 = state_34995;
(statearr_35073[(19)] = inst_34936);

return statearr_35073;
})();
var statearr_35076_37610 = state_34995__$1;
(statearr_35076_37610[(2)] = inst_34941);

(statearr_35076_37610[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (32))){
var inst_34927 = (state_34995[(9)]);
var inst_34925 = (state_34995[(11)]);
var inst_34924 = (state_34995[(20)]);
var inst_34926 = (state_34995[(21)]);
var inst_34944 = (state_34995[(2)]);
var inst_34945 = (inst_34927 + (1));
var tmp35060 = inst_34925;
var tmp35061 = inst_34924;
var tmp35062 = inst_34926;
var inst_34924__$1 = tmp35061;
var inst_34925__$1 = tmp35060;
var inst_34926__$1 = tmp35062;
var inst_34927__$1 = inst_34945;
var state_34995__$1 = (function (){var statearr_35090 = state_34995;
(statearr_35090[(9)] = inst_34927__$1);

(statearr_35090[(22)] = inst_34944);

(statearr_35090[(11)] = inst_34925__$1);

(statearr_35090[(20)] = inst_34924__$1);

(statearr_35090[(21)] = inst_34926__$1);

return statearr_35090;
})();
var statearr_35096_37615 = state_34995__$1;
(statearr_35096_37615[(2)] = null);

(statearr_35096_37615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (40))){
var inst_34958 = (state_34995[(23)]);
var inst_34962 = done(null);
var inst_34963 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34958);
var state_34995__$1 = (function (){var statearr_35104 = state_34995;
(statearr_35104[(24)] = inst_34962);

return statearr_35104;
})();
var statearr_35106_37616 = state_34995__$1;
(statearr_35106_37616[(2)] = inst_34963);

(statearr_35106_37616[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (33))){
var inst_34949 = (state_34995[(25)]);
var inst_34951 = cljs.core.chunked_seq_QMARK_(inst_34949);
var state_34995__$1 = state_34995;
if(inst_34951){
var statearr_35114_37621 = state_34995__$1;
(statearr_35114_37621[(1)] = (36));

} else {
var statearr_35116_37622 = state_34995__$1;
(statearr_35116_37622[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (13))){
var inst_34867 = (state_34995[(26)]);
var inst_34872 = cljs.core.async.close_BANG_(inst_34867);
var state_34995__$1 = state_34995;
var statearr_35123_37624 = state_34995__$1;
(statearr_35123_37624[(2)] = inst_34872);

(statearr_35123_37624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (22))){
var inst_34896 = (state_34995[(8)]);
var inst_34899 = cljs.core.async.close_BANG_(inst_34896);
var state_34995__$1 = state_34995;
var statearr_35131_37627 = state_34995__$1;
(statearr_35131_37627[(2)] = inst_34899);

(statearr_35131_37627[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (36))){
var inst_34949 = (state_34995[(25)]);
var inst_34953 = cljs.core.chunk_first(inst_34949);
var inst_34954 = cljs.core.chunk_rest(inst_34949);
var inst_34955 = cljs.core.count(inst_34953);
var inst_34924 = inst_34954;
var inst_34925 = inst_34953;
var inst_34926 = inst_34955;
var inst_34927 = (0);
var state_34995__$1 = (function (){var statearr_35138 = state_34995;
(statearr_35138[(9)] = inst_34927);

(statearr_35138[(11)] = inst_34925);

(statearr_35138[(20)] = inst_34924);

(statearr_35138[(21)] = inst_34926);

return statearr_35138;
})();
var statearr_35139_37630 = state_34995__$1;
(statearr_35139_37630[(2)] = null);

(statearr_35139_37630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (41))){
var inst_34949 = (state_34995[(25)]);
var inst_34965 = (state_34995[(2)]);
var inst_34966 = cljs.core.next(inst_34949);
var inst_34924 = inst_34966;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34995__$1 = (function (){var statearr_35140 = state_34995;
(statearr_35140[(9)] = inst_34927);

(statearr_35140[(11)] = inst_34925);

(statearr_35140[(20)] = inst_34924);

(statearr_35140[(21)] = inst_34926);

(statearr_35140[(27)] = inst_34965);

return statearr_35140;
})();
var statearr_35141_37635 = state_34995__$1;
(statearr_35141_37635[(2)] = null);

(statearr_35141_37635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (43))){
var state_34995__$1 = state_34995;
var statearr_35144_37636 = state_34995__$1;
(statearr_35144_37636[(2)] = null);

(statearr_35144_37636[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (29))){
var inst_34974 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35145_37642 = state_34995__$1;
(statearr_35145_37642[(2)] = inst_34974);

(statearr_35145_37642[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (44))){
var inst_34983 = (state_34995[(2)]);
var state_34995__$1 = (function (){var statearr_35147 = state_34995;
(statearr_35147[(28)] = inst_34983);

return statearr_35147;
})();
var statearr_35149_37645 = state_34995__$1;
(statearr_35149_37645[(2)] = null);

(statearr_35149_37645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (6))){
var inst_34916 = (state_34995[(29)]);
var inst_34915 = cljs.core.deref(cs);
var inst_34916__$1 = cljs.core.keys(inst_34915);
var inst_34917 = cljs.core.count(inst_34916__$1);
var inst_34918 = cljs.core.reset_BANG_(dctr,inst_34917);
var inst_34923 = cljs.core.seq(inst_34916__$1);
var inst_34924 = inst_34923;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34995__$1 = (function (){var statearr_35173 = state_34995;
(statearr_35173[(9)] = inst_34927);

(statearr_35173[(30)] = inst_34918);

(statearr_35173[(11)] = inst_34925);

(statearr_35173[(20)] = inst_34924);

(statearr_35173[(21)] = inst_34926);

(statearr_35173[(29)] = inst_34916__$1);

return statearr_35173;
})();
var statearr_35174_37652 = state_34995__$1;
(statearr_35174_37652[(2)] = null);

(statearr_35174_37652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (28))){
var inst_34924 = (state_34995[(20)]);
var inst_34949 = (state_34995[(25)]);
var inst_34949__$1 = cljs.core.seq(inst_34924);
var state_34995__$1 = (function (){var statearr_35179 = state_34995;
(statearr_35179[(25)] = inst_34949__$1);

return statearr_35179;
})();
if(inst_34949__$1){
var statearr_35180_37659 = state_34995__$1;
(statearr_35180_37659[(1)] = (33));

} else {
var statearr_35181_37660 = state_34995__$1;
(statearr_35181_37660[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (25))){
var inst_34927 = (state_34995[(9)]);
var inst_34926 = (state_34995[(21)]);
var inst_34929 = (inst_34927 < inst_34926);
var inst_34930 = inst_34929;
var state_34995__$1 = state_34995;
if(cljs.core.truth_(inst_34930)){
var statearr_35183_37666 = state_34995__$1;
(statearr_35183_37666[(1)] = (27));

} else {
var statearr_35184_37667 = state_34995__$1;
(statearr_35184_37667[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (34))){
var state_34995__$1 = state_34995;
var statearr_35198_37669 = state_34995__$1;
(statearr_35198_37669[(2)] = null);

(statearr_35198_37669[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (17))){
var state_34995__$1 = state_34995;
var statearr_35206_37672 = state_34995__$1;
(statearr_35206_37672[(2)] = null);

(statearr_35206_37672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (3))){
var inst_34988 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34995__$1,inst_34988);
} else {
if((state_val_34997 === (12))){
var inst_34911 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35214_37678 = state_34995__$1;
(statearr_35214_37678[(2)] = inst_34911);

(statearr_35214_37678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (2))){
var state_34995__$1 = state_34995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34995__$1,(4),ch);
} else {
if((state_val_34997 === (23))){
var state_34995__$1 = state_34995;
var statearr_35227_37682 = state_34995__$1;
(statearr_35227_37682[(2)] = null);

(statearr_35227_37682[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (35))){
var inst_34972 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35234_37688 = state_34995__$1;
(statearr_35234_37688[(2)] = inst_34972);

(statearr_35234_37688[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (19))){
var inst_34879 = (state_34995[(7)]);
var inst_34887 = cljs.core.chunk_first(inst_34879);
var inst_34888 = cljs.core.chunk_rest(inst_34879);
var inst_34889 = cljs.core.count(inst_34887);
var inst_34855 = inst_34888;
var inst_34856 = inst_34887;
var inst_34857 = inst_34889;
var inst_34858 = (0);
var state_34995__$1 = (function (){var statearr_35241 = state_34995;
(statearr_35241[(13)] = inst_34857);

(statearr_35241[(14)] = inst_34856);

(statearr_35241[(15)] = inst_34858);

(statearr_35241[(16)] = inst_34855);

return statearr_35241;
})();
var statearr_35245_37695 = state_34995__$1;
(statearr_35245_37695[(2)] = null);

(statearr_35245_37695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (11))){
var inst_34879 = (state_34995[(7)]);
var inst_34855 = (state_34995[(16)]);
var inst_34879__$1 = cljs.core.seq(inst_34855);
var state_34995__$1 = (function (){var statearr_35253 = state_34995;
(statearr_35253[(7)] = inst_34879__$1);

return statearr_35253;
})();
if(inst_34879__$1){
var statearr_35256_37701 = state_34995__$1;
(statearr_35256_37701[(1)] = (16));

} else {
var statearr_35258_37702 = state_34995__$1;
(statearr_35258_37702[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (9))){
var inst_34913 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35264_37704 = state_34995__$1;
(statearr_35264_37704[(2)] = inst_34913);

(statearr_35264_37704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34995__$1 = (function (){var statearr_35271 = state_34995;
(statearr_35271[(13)] = inst_34857);

(statearr_35271[(14)] = inst_34856);

(statearr_35271[(15)] = inst_34858);

(statearr_35271[(16)] = inst_34855);

return statearr_35271;
})();
var statearr_35275_37713 = state_34995__$1;
(statearr_35275_37713[(2)] = null);

(statearr_35275_37713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (14))){
var state_34995__$1 = state_34995;
var statearr_35280_37715 = state_34995__$1;
(statearr_35280_37715[(2)] = null);

(statearr_35280_37715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (45))){
var inst_34980 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35285_37717 = state_34995__$1;
(statearr_35285_37717[(2)] = inst_34980);

(statearr_35285_37717[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (26))){
var inst_34916 = (state_34995[(29)]);
var inst_34976 = (state_34995[(2)]);
var inst_34977 = cljs.core.seq(inst_34916);
var state_34995__$1 = (function (){var statearr_35292 = state_34995;
(statearr_35292[(31)] = inst_34976);

return statearr_35292;
})();
if(inst_34977){
var statearr_35295_37719 = state_34995__$1;
(statearr_35295_37719[(1)] = (42));

} else {
var statearr_35298_37721 = state_34995__$1;
(statearr_35298_37721[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (16))){
var inst_34879 = (state_34995[(7)]);
var inst_34884 = cljs.core.chunked_seq_QMARK_(inst_34879);
var state_34995__$1 = state_34995;
if(inst_34884){
var statearr_35304_37728 = state_34995__$1;
(statearr_35304_37728[(1)] = (19));

} else {
var statearr_35306_37729 = state_34995__$1;
(statearr_35306_37729[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (38))){
var inst_34969 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35312_37731 = state_34995__$1;
(statearr_35312_37731[(2)] = inst_34969);

(statearr_35312_37731[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (30))){
var state_34995__$1 = state_34995;
var statearr_35318_37733 = state_34995__$1;
(statearr_35318_37733[(2)] = null);

(statearr_35318_37733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (10))){
var inst_34856 = (state_34995[(14)]);
var inst_34858 = (state_34995[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34995__$1 = (function (){var statearr_35326 = state_34995;
(statearr_35326[(26)] = inst_34867);

return statearr_35326;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35327_37742 = state_34995__$1;
(statearr_35327_37742[(1)] = (13));

} else {
var statearr_35329_37743 = state_34995__$1;
(statearr_35329_37743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (18))){
var inst_34909 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35335_37745 = state_34995__$1;
(statearr_35335_37745[(2)] = inst_34909);

(statearr_35335_37745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (42))){
var state_34995__$1 = state_34995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34995__$1,(45),dchan);
} else {
if((state_val_34997 === (37))){
var inst_34958 = (state_34995[(23)]);
var inst_34846 = (state_34995[(10)]);
var inst_34949 = (state_34995[(25)]);
var inst_34958__$1 = cljs.core.first(inst_34949);
var inst_34959 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34958__$1,inst_34846,done);
var state_34995__$1 = (function (){var statearr_35346 = state_34995;
(statearr_35346[(23)] = inst_34958__$1);

return statearr_35346;
})();
if(cljs.core.truth_(inst_34959)){
var statearr_35349_37750 = state_34995__$1;
(statearr_35349_37750[(1)] = (39));

} else {
var statearr_35350_37752 = state_34995__$1;
(statearr_35350_37752[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (8))){
var inst_34857 = (state_34995[(13)]);
var inst_34858 = (state_34995[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34995__$1 = state_34995;
if(cljs.core.truth_(inst_34861)){
var statearr_35351_37756 = state_34995__$1;
(statearr_35351_37756[(1)] = (10));

} else {
var statearr_35352_37758 = state_34995__$1;
(statearr_35352_37758[(1)] = (11));

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
var statearr_35353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35353[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35353[(1)] = (1));

return statearr_35353;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34995){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34995);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35354){if((e35354 instanceof Object)){
var ex__34210__auto__ = e35354;
var statearr_35355_37766 = state_34995;
(statearr_35355_37766[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37767 = state_34995;
state_34995 = G__37767;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34995){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35358 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35358[(6)] = c__34273__auto___37553);

return statearr_35358;
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
var G__35361 = arguments.length;
switch (G__35361) {
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
var len__4789__auto___37811 = arguments.length;
var i__4790__auto___37812 = (0);
while(true){
if((i__4790__auto___37812 < len__4789__auto___37811)){
args__4795__auto__.push((arguments[i__4790__auto___37812]));

var G__37815 = (i__4790__auto___37812 + (1));
i__4790__auto___37812 = G__37815;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35460){
var map__35461 = p__35460;
var map__35461__$1 = (((((!((map__35461 == null))))?(((((map__35461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35461):map__35461);
var opts = map__35461__$1;
var statearr_35472_37819 = state;
(statearr_35472_37819[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35479_37822 = state;
(statearr_35479_37822[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35486_37825 = state;
(statearr_35486_37825[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35444){
var G__35445 = cljs.core.first(seq35444);
var seq35444__$1 = cljs.core.next(seq35444);
var G__35446 = cljs.core.first(seq35444__$1);
var seq35444__$2 = cljs.core.next(seq35444__$1);
var G__35447 = cljs.core.first(seq35444__$2);
var seq35444__$3 = cljs.core.next(seq35444__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35445,G__35446,G__35447,seq35444__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35542 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35543){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35543 = meta35543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35544,meta35543__$1){
var self__ = this;
var _35544__$1 = this;
return (new cljs.core.async.t_cljs$core$async35542(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35543__$1));
}));

(cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35544){
var self__ = this;
var _35544__$1 = this;
return self__.meta35543;
}));

(cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35543","meta35543",175951904,null)], null);
}));

(cljs.core.async.t_cljs$core$async35542.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35542");

(cljs.core.async.t_cljs$core$async35542.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35542");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35542.
 */
cljs.core.async.__GT_t_cljs$core$async35542 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35542(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35543){
return (new cljs.core.async.t_cljs$core$async35542(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35543));
});

}

return (new cljs.core.async.t_cljs$core$async35542(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35689){
var state_val_35690 = (state_35689[(1)]);
if((state_val_35690 === (7))){
var inst_35592 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
var statearr_35695_37868 = state_35689__$1;
(statearr_35695_37868[(2)] = inst_35592);

(statearr_35695_37868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (20))){
var inst_35604 = (state_35689[(7)]);
var state_35689__$1 = state_35689;
var statearr_35697_37870 = state_35689__$1;
(statearr_35697_37870[(2)] = inst_35604);

(statearr_35697_37870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (27))){
var state_35689__$1 = state_35689;
var statearr_35699_37875 = state_35689__$1;
(statearr_35699_37875[(2)] = null);

(statearr_35699_37875[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (1))){
var inst_35579 = (state_35689[(8)]);
var inst_35579__$1 = calc_state();
var inst_35581 = (inst_35579__$1 == null);
var inst_35582 = cljs.core.not(inst_35581);
var state_35689__$1 = (function (){var statearr_35700 = state_35689;
(statearr_35700[(8)] = inst_35579__$1);

return statearr_35700;
})();
if(inst_35582){
var statearr_35701_37876 = state_35689__$1;
(statearr_35701_37876[(1)] = (2));

} else {
var statearr_35703_37877 = state_35689__$1;
(statearr_35703_37877[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (24))){
var inst_35659 = (state_35689[(9)]);
var inst_35641 = (state_35689[(10)]);
var inst_35631 = (state_35689[(11)]);
var inst_35659__$1 = (inst_35631.cljs$core$IFn$_invoke$arity$1 ? inst_35631.cljs$core$IFn$_invoke$arity$1(inst_35641) : inst_35631.call(null,inst_35641));
var state_35689__$1 = (function (){var statearr_35704 = state_35689;
(statearr_35704[(9)] = inst_35659__$1);

return statearr_35704;
})();
if(cljs.core.truth_(inst_35659__$1)){
var statearr_35705_37878 = state_35689__$1;
(statearr_35705_37878[(1)] = (29));

} else {
var statearr_35707_37882 = state_35689__$1;
(statearr_35707_37882[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (4))){
var inst_35595 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
if(cljs.core.truth_(inst_35595)){
var statearr_35709_37883 = state_35689__$1;
(statearr_35709_37883[(1)] = (8));

} else {
var statearr_35710_37884 = state_35689__$1;
(statearr_35710_37884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (15))){
var inst_35624 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
if(cljs.core.truth_(inst_35624)){
var statearr_35712_37885 = state_35689__$1;
(statearr_35712_37885[(1)] = (19));

} else {
var statearr_35713_37886 = state_35689__$1;
(statearr_35713_37886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (21))){
var inst_35630 = (state_35689[(12)]);
var inst_35630__$1 = (state_35689[(2)]);
var inst_35631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35630__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35630__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35630__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35689__$1 = (function (){var statearr_35715 = state_35689;
(statearr_35715[(12)] = inst_35630__$1);

(statearr_35715[(11)] = inst_35631);

(statearr_35715[(13)] = inst_35633);

return statearr_35715;
})();
return cljs.core.async.ioc_alts_BANG_(state_35689__$1,(22),inst_35634);
} else {
if((state_val_35690 === (31))){
var inst_35667 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
if(cljs.core.truth_(inst_35667)){
var statearr_35719_37891 = state_35689__$1;
(statearr_35719_37891[(1)] = (32));

} else {
var statearr_35722_37892 = state_35689__$1;
(statearr_35722_37892[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (32))){
var inst_35640 = (state_35689[(14)]);
var state_35689__$1 = state_35689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35689__$1,(35),out,inst_35640);
} else {
if((state_val_35690 === (33))){
var inst_35630 = (state_35689[(12)]);
var inst_35604 = inst_35630;
var state_35689__$1 = (function (){var statearr_35725 = state_35689;
(statearr_35725[(7)] = inst_35604);

return statearr_35725;
})();
var statearr_35728_37893 = state_35689__$1;
(statearr_35728_37893[(2)] = null);

(statearr_35728_37893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (13))){
var inst_35604 = (state_35689[(7)]);
var inst_35613 = inst_35604.cljs$lang$protocol_mask$partition0$;
var inst_35614 = (inst_35613 & (64));
var inst_35615 = inst_35604.cljs$core$ISeq$;
var inst_35616 = (cljs.core.PROTOCOL_SENTINEL === inst_35615);
var inst_35617 = ((inst_35614) || (inst_35616));
var state_35689__$1 = state_35689;
if(cljs.core.truth_(inst_35617)){
var statearr_35730_37895 = state_35689__$1;
(statearr_35730_37895[(1)] = (16));

} else {
var statearr_35736_37896 = state_35689__$1;
(statearr_35736_37896[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (22))){
var inst_35641 = (state_35689[(10)]);
var inst_35640 = (state_35689[(14)]);
var inst_35639 = (state_35689[(2)]);
var inst_35640__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35639,(0),null);
var inst_35641__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35639,(1),null);
var inst_35643 = (inst_35640__$1 == null);
var inst_35644 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35641__$1,change);
var inst_35645 = ((inst_35643) || (inst_35644));
var state_35689__$1 = (function (){var statearr_35745 = state_35689;
(statearr_35745[(10)] = inst_35641__$1);

(statearr_35745[(14)] = inst_35640__$1);

return statearr_35745;
})();
if(cljs.core.truth_(inst_35645)){
var statearr_35750_37901 = state_35689__$1;
(statearr_35750_37901[(1)] = (23));

} else {
var statearr_35752_37902 = state_35689__$1;
(statearr_35752_37902[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (36))){
var inst_35630 = (state_35689[(12)]);
var inst_35604 = inst_35630;
var state_35689__$1 = (function (){var statearr_35753 = state_35689;
(statearr_35753[(7)] = inst_35604);

return statearr_35753;
})();
var statearr_35754_37903 = state_35689__$1;
(statearr_35754_37903[(2)] = null);

(statearr_35754_37903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (29))){
var inst_35659 = (state_35689[(9)]);
var state_35689__$1 = state_35689;
var statearr_35757_37904 = state_35689__$1;
(statearr_35757_37904[(2)] = inst_35659);

(statearr_35757_37904[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (6))){
var state_35689__$1 = state_35689;
var statearr_35760_37905 = state_35689__$1;
(statearr_35760_37905[(2)] = false);

(statearr_35760_37905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (28))){
var inst_35655 = (state_35689[(2)]);
var inst_35656 = calc_state();
var inst_35604 = inst_35656;
var state_35689__$1 = (function (){var statearr_35761 = state_35689;
(statearr_35761[(15)] = inst_35655);

(statearr_35761[(7)] = inst_35604);

return statearr_35761;
})();
var statearr_35763_37910 = state_35689__$1;
(statearr_35763_37910[(2)] = null);

(statearr_35763_37910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (25))){
var inst_35682 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
var statearr_35766_37911 = state_35689__$1;
(statearr_35766_37911[(2)] = inst_35682);

(statearr_35766_37911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (34))){
var inst_35680 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
var statearr_35768_37912 = state_35689__$1;
(statearr_35768_37912[(2)] = inst_35680);

(statearr_35768_37912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (17))){
var state_35689__$1 = state_35689;
var statearr_35770_37914 = state_35689__$1;
(statearr_35770_37914[(2)] = false);

(statearr_35770_37914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (3))){
var state_35689__$1 = state_35689;
var statearr_35773_37917 = state_35689__$1;
(statearr_35773_37917[(2)] = false);

(statearr_35773_37917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (12))){
var inst_35684 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35689__$1,inst_35684);
} else {
if((state_val_35690 === (2))){
var inst_35579 = (state_35689[(8)]);
var inst_35584 = inst_35579.cljs$lang$protocol_mask$partition0$;
var inst_35585 = (inst_35584 & (64));
var inst_35586 = inst_35579.cljs$core$ISeq$;
var inst_35587 = (cljs.core.PROTOCOL_SENTINEL === inst_35586);
var inst_35588 = ((inst_35585) || (inst_35587));
var state_35689__$1 = state_35689;
if(cljs.core.truth_(inst_35588)){
var statearr_35775_37918 = state_35689__$1;
(statearr_35775_37918[(1)] = (5));

} else {
var statearr_35776_37919 = state_35689__$1;
(statearr_35776_37919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (23))){
var inst_35640 = (state_35689[(14)]);
var inst_35648 = (inst_35640 == null);
var state_35689__$1 = state_35689;
if(cljs.core.truth_(inst_35648)){
var statearr_35778_37920 = state_35689__$1;
(statearr_35778_37920[(1)] = (26));

} else {
var statearr_35779_37921 = state_35689__$1;
(statearr_35779_37921[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (35))){
var inst_35670 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
if(cljs.core.truth_(inst_35670)){
var statearr_35780_37925 = state_35689__$1;
(statearr_35780_37925[(1)] = (36));

} else {
var statearr_35782_37926 = state_35689__$1;
(statearr_35782_37926[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (19))){
var inst_35604 = (state_35689[(7)]);
var inst_35627 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35604);
var state_35689__$1 = state_35689;
var statearr_35785_37927 = state_35689__$1;
(statearr_35785_37927[(2)] = inst_35627);

(statearr_35785_37927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (11))){
var inst_35604 = (state_35689[(7)]);
var inst_35609 = (inst_35604 == null);
var inst_35611 = cljs.core.not(inst_35609);
var state_35689__$1 = state_35689;
if(inst_35611){
var statearr_35789_37929 = state_35689__$1;
(statearr_35789_37929[(1)] = (13));

} else {
var statearr_35790_37933 = state_35689__$1;
(statearr_35790_37933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (9))){
var inst_35579 = (state_35689[(8)]);
var state_35689__$1 = state_35689;
var statearr_35793_37934 = state_35689__$1;
(statearr_35793_37934[(2)] = inst_35579);

(statearr_35793_37934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (5))){
var state_35689__$1 = state_35689;
var statearr_35795_37935 = state_35689__$1;
(statearr_35795_37935[(2)] = true);

(statearr_35795_37935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (14))){
var state_35689__$1 = state_35689;
var statearr_35796_37936 = state_35689__$1;
(statearr_35796_37936[(2)] = false);

(statearr_35796_37936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (26))){
var inst_35641 = (state_35689[(10)]);
var inst_35652 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35641);
var state_35689__$1 = state_35689;
var statearr_35801_37942 = state_35689__$1;
(statearr_35801_37942[(2)] = inst_35652);

(statearr_35801_37942[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (16))){
var state_35689__$1 = state_35689;
var statearr_35805_37943 = state_35689__$1;
(statearr_35805_37943[(2)] = true);

(statearr_35805_37943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (38))){
var inst_35676 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
var statearr_35808_37944 = state_35689__$1;
(statearr_35808_37944[(2)] = inst_35676);

(statearr_35808_37944[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (30))){
var inst_35641 = (state_35689[(10)]);
var inst_35631 = (state_35689[(11)]);
var inst_35633 = (state_35689[(13)]);
var inst_35662 = cljs.core.empty_QMARK_(inst_35631);
var inst_35663 = (inst_35633.cljs$core$IFn$_invoke$arity$1 ? inst_35633.cljs$core$IFn$_invoke$arity$1(inst_35641) : inst_35633.call(null,inst_35641));
var inst_35664 = cljs.core.not(inst_35663);
var inst_35665 = ((inst_35662) && (inst_35664));
var state_35689__$1 = state_35689;
var statearr_35812_37945 = state_35689__$1;
(statearr_35812_37945[(2)] = inst_35665);

(statearr_35812_37945[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (10))){
var inst_35579 = (state_35689[(8)]);
var inst_35600 = (state_35689[(2)]);
var inst_35601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35604 = inst_35579;
var state_35689__$1 = (function (){var statearr_35815 = state_35689;
(statearr_35815[(16)] = inst_35602);

(statearr_35815[(17)] = inst_35601);

(statearr_35815[(18)] = inst_35603);

(statearr_35815[(7)] = inst_35604);

return statearr_35815;
})();
var statearr_35818_37951 = state_35689__$1;
(statearr_35818_37951[(2)] = null);

(statearr_35818_37951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (18))){
var inst_35621 = (state_35689[(2)]);
var state_35689__$1 = state_35689;
var statearr_35819_37952 = state_35689__$1;
(statearr_35819_37952[(2)] = inst_35621);

(statearr_35819_37952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (37))){
var state_35689__$1 = state_35689;
var statearr_35822_37953 = state_35689__$1;
(statearr_35822_37953[(2)] = null);

(statearr_35822_37953[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (8))){
var inst_35579 = (state_35689[(8)]);
var inst_35597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35579);
var state_35689__$1 = state_35689;
var statearr_35824_37954 = state_35689__$1;
(statearr_35824_37954[(2)] = inst_35597);

(statearr_35824_37954[(1)] = (10));


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
var statearr_35829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35829[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35829[(1)] = (1));

return statearr_35829;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35689){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35689);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35832){if((e35832 instanceof Object)){
var ex__34210__auto__ = e35832;
var statearr_35833_37958 = state_35689;
(statearr_35833_37958[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37959 = state_35689;
state_35689 = G__37959;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35689){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35836 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35836[(6)] = c__34273__auto___37867);

return statearr_35836;
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
var G__35867 = arguments.length;
switch (G__35867) {
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
var G__35886 = arguments.length;
switch (G__35886) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35881_SHARP_){
if(cljs.core.truth_((p1__35881_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35881_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35881_SHARP_.call(null,topic)))){
return p1__35881_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35881_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35890 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35891){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35891 = meta35891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35892,meta35891__$1){
var self__ = this;
var _35892__$1 = this;
return (new cljs.core.async.t_cljs$core$async35890(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35891__$1));
}));

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35892){
var self__ = this;
var _35892__$1 = this;
return self__.meta35891;
}));

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35891","meta35891",-266876071,null)], null);
}));

(cljs.core.async.t_cljs$core$async35890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35890");

(cljs.core.async.t_cljs$core$async35890.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35890.
 */
cljs.core.async.__GT_t_cljs$core$async35890 = (function cljs$core$async$__GT_t_cljs$core$async35890(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35891){
return (new cljs.core.async.t_cljs$core$async35890(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35891));
});

}

return (new cljs.core.async.t_cljs$core$async35890(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36003){
var state_val_36004 = (state_36003[(1)]);
if((state_val_36004 === (7))){
var inst_35999 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36005_37987 = state_36003__$1;
(statearr_36005_37987[(2)] = inst_35999);

(statearr_36005_37987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (20))){
var state_36003__$1 = state_36003;
var statearr_36006_37988 = state_36003__$1;
(statearr_36006_37988[(2)] = null);

(statearr_36006_37988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (1))){
var state_36003__$1 = state_36003;
var statearr_36007_37989 = state_36003__$1;
(statearr_36007_37989[(2)] = null);

(statearr_36007_37989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (24))){
var inst_35982 = (state_36003[(7)]);
var inst_35991 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35982);
var state_36003__$1 = state_36003;
var statearr_36008_37990 = state_36003__$1;
(statearr_36008_37990[(2)] = inst_35991);

(statearr_36008_37990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (4))){
var inst_35928 = (state_36003[(8)]);
var inst_35928__$1 = (state_36003[(2)]);
var inst_35930 = (inst_35928__$1 == null);
var state_36003__$1 = (function (){var statearr_36009 = state_36003;
(statearr_36009[(8)] = inst_35928__$1);

return statearr_36009;
})();
if(cljs.core.truth_(inst_35930)){
var statearr_36010_37994 = state_36003__$1;
(statearr_36010_37994[(1)] = (5));

} else {
var statearr_36011_37995 = state_36003__$1;
(statearr_36011_37995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (15))){
var inst_35975 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36012_37996 = state_36003__$1;
(statearr_36012_37996[(2)] = inst_35975);

(statearr_36012_37996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (21))){
var inst_35996 = (state_36003[(2)]);
var state_36003__$1 = (function (){var statearr_36014 = state_36003;
(statearr_36014[(9)] = inst_35996);

return statearr_36014;
})();
var statearr_36015_37998 = state_36003__$1;
(statearr_36015_37998[(2)] = null);

(statearr_36015_37998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (13))){
var inst_35954 = (state_36003[(10)]);
var inst_35956 = cljs.core.chunked_seq_QMARK_(inst_35954);
var state_36003__$1 = state_36003;
if(inst_35956){
var statearr_36016_38001 = state_36003__$1;
(statearr_36016_38001[(1)] = (16));

} else {
var statearr_36017_38002 = state_36003__$1;
(statearr_36017_38002[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (22))){
var inst_35988 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
if(cljs.core.truth_(inst_35988)){
var statearr_36019_38003 = state_36003__$1;
(statearr_36019_38003[(1)] = (23));

} else {
var statearr_36024_38004 = state_36003__$1;
(statearr_36024_38004[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (6))){
var inst_35928 = (state_36003[(8)]);
var inst_35984 = (state_36003[(11)]);
var inst_35982 = (state_36003[(7)]);
var inst_35982__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35928) : topic_fn.call(null,inst_35928));
var inst_35983 = cljs.core.deref(mults);
var inst_35984__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35983,inst_35982__$1);
var state_36003__$1 = (function (){var statearr_36028 = state_36003;
(statearr_36028[(11)] = inst_35984__$1);

(statearr_36028[(7)] = inst_35982__$1);

return statearr_36028;
})();
if(cljs.core.truth_(inst_35984__$1)){
var statearr_36029_38008 = state_36003__$1;
(statearr_36029_38008[(1)] = (19));

} else {
var statearr_36031_38009 = state_36003__$1;
(statearr_36031_38009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (25))){
var inst_35993 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36032_38010 = state_36003__$1;
(statearr_36032_38010[(2)] = inst_35993);

(statearr_36032_38010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (17))){
var inst_35954 = (state_36003[(10)]);
var inst_35964 = cljs.core.first(inst_35954);
var inst_35966 = cljs.core.async.muxch_STAR_(inst_35964);
var inst_35967 = cljs.core.async.close_BANG_(inst_35966);
var inst_35969 = cljs.core.next(inst_35954);
var inst_35940 = inst_35969;
var inst_35941 = null;
var inst_35942 = (0);
var inst_35943 = (0);
var state_36003__$1 = (function (){var statearr_36034 = state_36003;
(statearr_36034[(12)] = inst_35942);

(statearr_36034[(13)] = inst_35940);

(statearr_36034[(14)] = inst_35941);

(statearr_36034[(15)] = inst_35967);

(statearr_36034[(16)] = inst_35943);

return statearr_36034;
})();
var statearr_36037_38014 = state_36003__$1;
(statearr_36037_38014[(2)] = null);

(statearr_36037_38014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (3))){
var inst_36001 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36003__$1,inst_36001);
} else {
if((state_val_36004 === (12))){
var inst_35977 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36042_38015 = state_36003__$1;
(statearr_36042_38015[(2)] = inst_35977);

(statearr_36042_38015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (2))){
var state_36003__$1 = state_36003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36003__$1,(4),ch);
} else {
if((state_val_36004 === (23))){
var state_36003__$1 = state_36003;
var statearr_36044_38018 = state_36003__$1;
(statearr_36044_38018[(2)] = null);

(statearr_36044_38018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (19))){
var inst_35928 = (state_36003[(8)]);
var inst_35984 = (state_36003[(11)]);
var inst_35986 = cljs.core.async.muxch_STAR_(inst_35984);
var state_36003__$1 = state_36003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36003__$1,(22),inst_35986,inst_35928);
} else {
if((state_val_36004 === (11))){
var inst_35940 = (state_36003[(13)]);
var inst_35954 = (state_36003[(10)]);
var inst_35954__$1 = cljs.core.seq(inst_35940);
var state_36003__$1 = (function (){var statearr_36046 = state_36003;
(statearr_36046[(10)] = inst_35954__$1);

return statearr_36046;
})();
if(inst_35954__$1){
var statearr_36049_38020 = state_36003__$1;
(statearr_36049_38020[(1)] = (13));

} else {
var statearr_36050_38021 = state_36003__$1;
(statearr_36050_38021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (9))){
var inst_35979 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36053_38022 = state_36003__$1;
(statearr_36053_38022[(2)] = inst_35979);

(statearr_36053_38022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (5))){
var inst_35937 = cljs.core.deref(mults);
var inst_35938 = cljs.core.vals(inst_35937);
var inst_35939 = cljs.core.seq(inst_35938);
var inst_35940 = inst_35939;
var inst_35941 = null;
var inst_35942 = (0);
var inst_35943 = (0);
var state_36003__$1 = (function (){var statearr_36054 = state_36003;
(statearr_36054[(12)] = inst_35942);

(statearr_36054[(13)] = inst_35940);

(statearr_36054[(14)] = inst_35941);

(statearr_36054[(16)] = inst_35943);

return statearr_36054;
})();
var statearr_36055_38023 = state_36003__$1;
(statearr_36055_38023[(2)] = null);

(statearr_36055_38023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (14))){
var state_36003__$1 = state_36003;
var statearr_36059_38024 = state_36003__$1;
(statearr_36059_38024[(2)] = null);

(statearr_36059_38024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (16))){
var inst_35954 = (state_36003[(10)]);
var inst_35959 = cljs.core.chunk_first(inst_35954);
var inst_35960 = cljs.core.chunk_rest(inst_35954);
var inst_35961 = cljs.core.count(inst_35959);
var inst_35940 = inst_35960;
var inst_35941 = inst_35959;
var inst_35942 = inst_35961;
var inst_35943 = (0);
var state_36003__$1 = (function (){var statearr_36060 = state_36003;
(statearr_36060[(12)] = inst_35942);

(statearr_36060[(13)] = inst_35940);

(statearr_36060[(14)] = inst_35941);

(statearr_36060[(16)] = inst_35943);

return statearr_36060;
})();
var statearr_36061_38028 = state_36003__$1;
(statearr_36061_38028[(2)] = null);

(statearr_36061_38028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (10))){
var inst_35942 = (state_36003[(12)]);
var inst_35940 = (state_36003[(13)]);
var inst_35941 = (state_36003[(14)]);
var inst_35943 = (state_36003[(16)]);
var inst_35948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35941,inst_35943);
var inst_35949 = cljs.core.async.muxch_STAR_(inst_35948);
var inst_35950 = cljs.core.async.close_BANG_(inst_35949);
var inst_35951 = (inst_35943 + (1));
var tmp36056 = inst_35942;
var tmp36057 = inst_35940;
var tmp36058 = inst_35941;
var inst_35940__$1 = tmp36057;
var inst_35941__$1 = tmp36058;
var inst_35942__$1 = tmp36056;
var inst_35943__$1 = inst_35951;
var state_36003__$1 = (function (){var statearr_36062 = state_36003;
(statearr_36062[(12)] = inst_35942__$1);

(statearr_36062[(13)] = inst_35940__$1);

(statearr_36062[(14)] = inst_35941__$1);

(statearr_36062[(16)] = inst_35943__$1);

(statearr_36062[(17)] = inst_35950);

return statearr_36062;
})();
var statearr_36063_38032 = state_36003__$1;
(statearr_36063_38032[(2)] = null);

(statearr_36063_38032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (18))){
var inst_35972 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36068_38033 = state_36003__$1;
(statearr_36068_38033[(2)] = inst_35972);

(statearr_36068_38033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (8))){
var inst_35942 = (state_36003[(12)]);
var inst_35943 = (state_36003[(16)]);
var inst_35945 = (inst_35943 < inst_35942);
var inst_35946 = inst_35945;
var state_36003__$1 = state_36003;
if(cljs.core.truth_(inst_35946)){
var statearr_36070_38034 = state_36003__$1;
(statearr_36070_38034[(1)] = (10));

} else {
var statearr_36073_38036 = state_36003__$1;
(statearr_36073_38036[(1)] = (11));

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
var statearr_36074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36074[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36074[(1)] = (1));

return statearr_36074;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36003){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36003);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36075){if((e36075 instanceof Object)){
var ex__34210__auto__ = e36075;
var statearr_36076_38039 = state_36003;
(statearr_36076_38039[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36075;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38041 = state_36003;
state_36003 = G__38041;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36080 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36080[(6)] = c__34273__auto___37984);

return statearr_36080;
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
var G__36085 = arguments.length;
switch (G__36085) {
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
var G__36090 = arguments.length;
switch (G__36090) {
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
var G__36102 = arguments.length;
switch (G__36102) {
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
var c__34273__auto___38053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36159){
var state_val_36160 = (state_36159[(1)]);
if((state_val_36160 === (7))){
var state_36159__$1 = state_36159;
var statearr_36163_38055 = state_36159__$1;
(statearr_36163_38055[(2)] = null);

(statearr_36163_38055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (1))){
var state_36159__$1 = state_36159;
var statearr_36164_38058 = state_36159__$1;
(statearr_36164_38058[(2)] = null);

(statearr_36164_38058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (4))){
var inst_36118 = (state_36159[(7)]);
var inst_36121 = (inst_36118 < cnt);
var state_36159__$1 = state_36159;
if(cljs.core.truth_(inst_36121)){
var statearr_36168_38059 = state_36159__$1;
(statearr_36168_38059[(1)] = (6));

} else {
var statearr_36170_38060 = state_36159__$1;
(statearr_36170_38060[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (15))){
var inst_36155 = (state_36159[(2)]);
var state_36159__$1 = state_36159;
var statearr_36171_38061 = state_36159__$1;
(statearr_36171_38061[(2)] = inst_36155);

(statearr_36171_38061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (13))){
var inst_36148 = cljs.core.async.close_BANG_(out);
var state_36159__$1 = state_36159;
var statearr_36173_38062 = state_36159__$1;
(statearr_36173_38062[(2)] = inst_36148);

(statearr_36173_38062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (6))){
var state_36159__$1 = state_36159;
var statearr_36181_38063 = state_36159__$1;
(statearr_36181_38063[(2)] = null);

(statearr_36181_38063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (3))){
var inst_36157 = (state_36159[(2)]);
var state_36159__$1 = state_36159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36159__$1,inst_36157);
} else {
if((state_val_36160 === (12))){
var inst_36143 = (state_36159[(8)]);
var inst_36143__$1 = (state_36159[(2)]);
var inst_36144 = cljs.core.some(cljs.core.nil_QMARK_,inst_36143__$1);
var state_36159__$1 = (function (){var statearr_36186 = state_36159;
(statearr_36186[(8)] = inst_36143__$1);

return statearr_36186;
})();
if(cljs.core.truth_(inst_36144)){
var statearr_36187_38067 = state_36159__$1;
(statearr_36187_38067[(1)] = (13));

} else {
var statearr_36189_38068 = state_36159__$1;
(statearr_36189_38068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (2))){
var inst_36117 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36118 = (0);
var state_36159__$1 = (function (){var statearr_36190 = state_36159;
(statearr_36190[(9)] = inst_36117);

(statearr_36190[(7)] = inst_36118);

return statearr_36190;
})();
var statearr_36192_38069 = state_36159__$1;
(statearr_36192_38069[(2)] = null);

(statearr_36192_38069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (11))){
var inst_36118 = (state_36159[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36159,(10),Object,null,(9));
var inst_36130 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36118) : chs__$1.call(null,inst_36118));
var inst_36131 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36118) : done.call(null,inst_36118));
var inst_36132 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36130,inst_36131);
var state_36159__$1 = state_36159;
var statearr_36194_38070 = state_36159__$1;
(statearr_36194_38070[(2)] = inst_36132);


cljs.core.async.impl.ioc_helpers.process_exception(state_36159__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (9))){
var inst_36118 = (state_36159[(7)]);
var inst_36134 = (state_36159[(2)]);
var inst_36135 = (inst_36118 + (1));
var inst_36118__$1 = inst_36135;
var state_36159__$1 = (function (){var statearr_36195 = state_36159;
(statearr_36195[(7)] = inst_36118__$1);

(statearr_36195[(10)] = inst_36134);

return statearr_36195;
})();
var statearr_36196_38072 = state_36159__$1;
(statearr_36196_38072[(2)] = null);

(statearr_36196_38072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (5))){
var inst_36141 = (state_36159[(2)]);
var state_36159__$1 = (function (){var statearr_36199 = state_36159;
(statearr_36199[(11)] = inst_36141);

return statearr_36199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36159__$1,(12),dchan);
} else {
if((state_val_36160 === (14))){
var inst_36143 = (state_36159[(8)]);
var inst_36150 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36143);
var state_36159__$1 = state_36159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36159__$1,(16),out,inst_36150);
} else {
if((state_val_36160 === (16))){
var inst_36152 = (state_36159[(2)]);
var state_36159__$1 = (function (){var statearr_36200 = state_36159;
(statearr_36200[(12)] = inst_36152);

return statearr_36200;
})();
var statearr_36202_38078 = state_36159__$1;
(statearr_36202_38078[(2)] = null);

(statearr_36202_38078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (10))){
var inst_36124 = (state_36159[(2)]);
var inst_36125 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36159__$1 = (function (){var statearr_36206 = state_36159;
(statearr_36206[(13)] = inst_36124);

return statearr_36206;
})();
var statearr_36207_38082 = state_36159__$1;
(statearr_36207_38082[(2)] = inst_36125);


cljs.core.async.impl.ioc_helpers.process_exception(state_36159__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36160 === (8))){
var inst_36139 = (state_36159[(2)]);
var state_36159__$1 = state_36159;
var statearr_36208_38083 = state_36159__$1;
(statearr_36208_38083[(2)] = inst_36139);

(statearr_36208_38083[(1)] = (5));


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
var statearr_36214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36214[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36214[(1)] = (1));

return statearr_36214;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36159){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36159);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36218){if((e36218 instanceof Object)){
var ex__34210__auto__ = e36218;
var statearr_36219_38087 = state_36159;
(statearr_36219_38087[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38088 = state_36159;
state_36159 = G__38088;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36221 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36221[(6)] = c__34273__auto___38053);

return statearr_36221;
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
var G__36243 = arguments.length;
switch (G__36243) {
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
var c__34273__auto___38093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36280){
var state_val_36281 = (state_36280[(1)]);
if((state_val_36281 === (7))){
var inst_36258 = (state_36280[(7)]);
var inst_36257 = (state_36280[(8)]);
var inst_36257__$1 = (state_36280[(2)]);
var inst_36258__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36257__$1,(0),null);
var inst_36259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36257__$1,(1),null);
var inst_36260 = (inst_36258__$1 == null);
var state_36280__$1 = (function (){var statearr_36283 = state_36280;
(statearr_36283[(7)] = inst_36258__$1);

(statearr_36283[(8)] = inst_36257__$1);

(statearr_36283[(9)] = inst_36259);

return statearr_36283;
})();
if(cljs.core.truth_(inst_36260)){
var statearr_36287_38097 = state_36280__$1;
(statearr_36287_38097[(1)] = (8));

} else {
var statearr_36288_38098 = state_36280__$1;
(statearr_36288_38098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (1))){
var inst_36247 = cljs.core.vec(chs);
var inst_36248 = inst_36247;
var state_36280__$1 = (function (){var statearr_36289 = state_36280;
(statearr_36289[(10)] = inst_36248);

return statearr_36289;
})();
var statearr_36291_38099 = state_36280__$1;
(statearr_36291_38099[(2)] = null);

(statearr_36291_38099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (4))){
var inst_36248 = (state_36280[(10)]);
var state_36280__$1 = state_36280;
return cljs.core.async.ioc_alts_BANG_(state_36280__$1,(7),inst_36248);
} else {
if((state_val_36281 === (6))){
var inst_36275 = (state_36280[(2)]);
var state_36280__$1 = state_36280;
var statearr_36293_38101 = state_36280__$1;
(statearr_36293_38101[(2)] = inst_36275);

(statearr_36293_38101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (3))){
var inst_36278 = (state_36280[(2)]);
var state_36280__$1 = state_36280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36280__$1,inst_36278);
} else {
if((state_val_36281 === (2))){
var inst_36248 = (state_36280[(10)]);
var inst_36250 = cljs.core.count(inst_36248);
var inst_36251 = (inst_36250 > (0));
var state_36280__$1 = state_36280;
if(cljs.core.truth_(inst_36251)){
var statearr_36296_38103 = state_36280__$1;
(statearr_36296_38103[(1)] = (4));

} else {
var statearr_36298_38104 = state_36280__$1;
(statearr_36298_38104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (11))){
var inst_36248 = (state_36280[(10)]);
var inst_36268 = (state_36280[(2)]);
var tmp36294 = inst_36248;
var inst_36248__$1 = tmp36294;
var state_36280__$1 = (function (){var statearr_36301 = state_36280;
(statearr_36301[(11)] = inst_36268);

(statearr_36301[(10)] = inst_36248__$1);

return statearr_36301;
})();
var statearr_36307_38106 = state_36280__$1;
(statearr_36307_38106[(2)] = null);

(statearr_36307_38106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (9))){
var inst_36258 = (state_36280[(7)]);
var state_36280__$1 = state_36280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36280__$1,(11),out,inst_36258);
} else {
if((state_val_36281 === (5))){
var inst_36273 = cljs.core.async.close_BANG_(out);
var state_36280__$1 = state_36280;
var statearr_36310_38108 = state_36280__$1;
(statearr_36310_38108[(2)] = inst_36273);

(statearr_36310_38108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (10))){
var inst_36271 = (state_36280[(2)]);
var state_36280__$1 = state_36280;
var statearr_36314_38111 = state_36280__$1;
(statearr_36314_38111[(2)] = inst_36271);

(statearr_36314_38111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (8))){
var inst_36248 = (state_36280[(10)]);
var inst_36258 = (state_36280[(7)]);
var inst_36257 = (state_36280[(8)]);
var inst_36259 = (state_36280[(9)]);
var inst_36263 = (function (){var cs = inst_36248;
var vec__36253 = inst_36257;
var v = inst_36258;
var c = inst_36259;
return (function (p1__36224_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36224_SHARP_);
});
})();
var inst_36264 = cljs.core.filterv(inst_36263,inst_36248);
var inst_36248__$1 = inst_36264;
var state_36280__$1 = (function (){var statearr_36315 = state_36280;
(statearr_36315[(10)] = inst_36248__$1);

return statearr_36315;
})();
var statearr_36317_38116 = state_36280__$1;
(statearr_36317_38116[(2)] = null);

(statearr_36317_38116[(1)] = (2));


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
var statearr_36318 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36318[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36318[(1)] = (1));

return statearr_36318;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36280){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36280);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36321){if((e36321 instanceof Object)){
var ex__34210__auto__ = e36321;
var statearr_36322_38120 = state_36280;
(statearr_36322_38120[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38121 = state_36280;
state_36280 = G__38121;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36325 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36325[(6)] = c__34273__auto___38093);

return statearr_36325;
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
var G__36338 = arguments.length;
switch (G__36338) {
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
var c__34273__auto___38126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36372){
var state_val_36373 = (state_36372[(1)]);
if((state_val_36373 === (7))){
var inst_36354 = (state_36372[(7)]);
var inst_36354__$1 = (state_36372[(2)]);
var inst_36355 = (inst_36354__$1 == null);
var inst_36356 = cljs.core.not(inst_36355);
var state_36372__$1 = (function (){var statearr_36381 = state_36372;
(statearr_36381[(7)] = inst_36354__$1);

return statearr_36381;
})();
if(inst_36356){
var statearr_36383_38128 = state_36372__$1;
(statearr_36383_38128[(1)] = (8));

} else {
var statearr_36385_38129 = state_36372__$1;
(statearr_36385_38129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (1))){
var inst_36343 = (0);
var state_36372__$1 = (function (){var statearr_36387 = state_36372;
(statearr_36387[(8)] = inst_36343);

return statearr_36387;
})();
var statearr_36388_38130 = state_36372__$1;
(statearr_36388_38130[(2)] = null);

(statearr_36388_38130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (4))){
var state_36372__$1 = state_36372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36372__$1,(7),ch);
} else {
if((state_val_36373 === (6))){
var inst_36367 = (state_36372[(2)]);
var state_36372__$1 = state_36372;
var statearr_36389_38134 = state_36372__$1;
(statearr_36389_38134[(2)] = inst_36367);

(statearr_36389_38134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (3))){
var inst_36369 = (state_36372[(2)]);
var inst_36370 = cljs.core.async.close_BANG_(out);
var state_36372__$1 = (function (){var statearr_36392 = state_36372;
(statearr_36392[(9)] = inst_36369);

return statearr_36392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36372__$1,inst_36370);
} else {
if((state_val_36373 === (2))){
var inst_36343 = (state_36372[(8)]);
var inst_36345 = (inst_36343 < n);
var state_36372__$1 = state_36372;
if(cljs.core.truth_(inst_36345)){
var statearr_36393_38135 = state_36372__$1;
(statearr_36393_38135[(1)] = (4));

} else {
var statearr_36394_38136 = state_36372__$1;
(statearr_36394_38136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (11))){
var inst_36343 = (state_36372[(8)]);
var inst_36359 = (state_36372[(2)]);
var inst_36360 = (inst_36343 + (1));
var inst_36343__$1 = inst_36360;
var state_36372__$1 = (function (){var statearr_36398 = state_36372;
(statearr_36398[(10)] = inst_36359);

(statearr_36398[(8)] = inst_36343__$1);

return statearr_36398;
})();
var statearr_36399_38138 = state_36372__$1;
(statearr_36399_38138[(2)] = null);

(statearr_36399_38138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (9))){
var state_36372__$1 = state_36372;
var statearr_36400_38139 = state_36372__$1;
(statearr_36400_38139[(2)] = null);

(statearr_36400_38139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (5))){
var state_36372__$1 = state_36372;
var statearr_36403_38140 = state_36372__$1;
(statearr_36403_38140[(2)] = null);

(statearr_36403_38140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (10))){
var inst_36364 = (state_36372[(2)]);
var state_36372__$1 = state_36372;
var statearr_36404_38141 = state_36372__$1;
(statearr_36404_38141[(2)] = inst_36364);

(statearr_36404_38141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (8))){
var inst_36354 = (state_36372[(7)]);
var state_36372__$1 = state_36372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36372__$1,(11),out,inst_36354);
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
var statearr_36409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36409[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36409[(1)] = (1));

return statearr_36409;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36372){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36372);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36410){if((e36410 instanceof Object)){
var ex__34210__auto__ = e36410;
var statearr_36411_38145 = state_36372;
(statearr_36411_38145[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38146 = state_36372;
state_36372 = G__38146;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36413 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36413[(6)] = c__34273__auto___38126);

return statearr_36413;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36416 = (function (f,ch,meta36417){
this.f = f;
this.ch = ch;
this.meta36417 = meta36417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36418,meta36417__$1){
var self__ = this;
var _36418__$1 = this;
return (new cljs.core.async.t_cljs$core$async36416(self__.f,self__.ch,meta36417__$1));
}));

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36418){
var self__ = this;
var _36418__$1 = this;
return self__.meta36417;
}));

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36425 = (function (f,ch,meta36417,_,fn1,meta36426){
this.f = f;
this.ch = ch;
this.meta36417 = meta36417;
this._ = _;
this.fn1 = fn1;
this.meta36426 = meta36426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36427,meta36426__$1){
var self__ = this;
var _36427__$1 = this;
return (new cljs.core.async.t_cljs$core$async36425(self__.f,self__.ch,self__.meta36417,self__._,self__.fn1,meta36426__$1));
}));

(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36427){
var self__ = this;
var _36427__$1 = this;
return self__.meta36426;
}));

(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36414_SHARP_){
var G__36431 = (((p1__36414_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36414_SHARP_) : self__.f.call(null,p1__36414_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36431) : f1.call(null,G__36431));
});
}));

(cljs.core.async.t_cljs$core$async36425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36417","meta36417",-2081266497,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36416","cljs.core.async/t_cljs$core$async36416",-1277102326,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36426","meta36426",-298898492,null)], null);
}));

(cljs.core.async.t_cljs$core$async36425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36425");

(cljs.core.async.t_cljs$core$async36425.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36425.
 */
cljs.core.async.__GT_t_cljs$core$async36425 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36425(f__$1,ch__$1,meta36417__$1,___$2,fn1__$1,meta36426){
return (new cljs.core.async.t_cljs$core$async36425(f__$1,ch__$1,meta36417__$1,___$2,fn1__$1,meta36426));
});

}

return (new cljs.core.async.t_cljs$core$async36425(self__.f,self__.ch,self__.meta36417,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36434 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36434) : self__.f.call(null,G__36434));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36417","meta36417",-2081266497,null)], null);
}));

(cljs.core.async.t_cljs$core$async36416.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36416");

(cljs.core.async.t_cljs$core$async36416.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36416");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36416.
 */
cljs.core.async.__GT_t_cljs$core$async36416 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36416(f__$1,ch__$1,meta36417){
return (new cljs.core.async.t_cljs$core$async36416(f__$1,ch__$1,meta36417));
});

}

return (new cljs.core.async.t_cljs$core$async36416(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36438 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36438 = (function (f,ch,meta36439){
this.f = f;
this.ch = ch;
this.meta36439 = meta36439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36440,meta36439__$1){
var self__ = this;
var _36440__$1 = this;
return (new cljs.core.async.t_cljs$core$async36438(self__.f,self__.ch,meta36439__$1));
}));

(cljs.core.async.t_cljs$core$async36438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36440){
var self__ = this;
var _36440__$1 = this;
return self__.meta36439;
}));

(cljs.core.async.t_cljs$core$async36438.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36438.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36438.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36438.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36438.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36438.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36439","meta36439",1392202204,null)], null);
}));

(cljs.core.async.t_cljs$core$async36438.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36438");

(cljs.core.async.t_cljs$core$async36438.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36438");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36438.
 */
cljs.core.async.__GT_t_cljs$core$async36438 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36438(f__$1,ch__$1,meta36439){
return (new cljs.core.async.t_cljs$core$async36438(f__$1,ch__$1,meta36439));
});

}

return (new cljs.core.async.t_cljs$core$async36438(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36446 = (function (p,ch,meta36447){
this.p = p;
this.ch = ch;
this.meta36447 = meta36447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36448,meta36447__$1){
var self__ = this;
var _36448__$1 = this;
return (new cljs.core.async.t_cljs$core$async36446(self__.p,self__.ch,meta36447__$1));
}));

(cljs.core.async.t_cljs$core$async36446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36448){
var self__ = this;
var _36448__$1 = this;
return self__.meta36447;
}));

(cljs.core.async.t_cljs$core$async36446.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36446.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36446.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36446.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36447","meta36447",-995418785,null)], null);
}));

(cljs.core.async.t_cljs$core$async36446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36446");

(cljs.core.async.t_cljs$core$async36446.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36446.
 */
cljs.core.async.__GT_t_cljs$core$async36446 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36446(p__$1,ch__$1,meta36447){
return (new cljs.core.async.t_cljs$core$async36446(p__$1,ch__$1,meta36447));
});

}

return (new cljs.core.async.t_cljs$core$async36446(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36457 = arguments.length;
switch (G__36457) {
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
var c__34273__auto___38159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36484){
var state_val_36485 = (state_36484[(1)]);
if((state_val_36485 === (7))){
var inst_36479 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36487_38160 = state_36484__$1;
(statearr_36487_38160[(2)] = inst_36479);

(statearr_36487_38160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (1))){
var state_36484__$1 = state_36484;
var statearr_36488_38161 = state_36484__$1;
(statearr_36488_38161[(2)] = null);

(statearr_36488_38161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (4))){
var inst_36462 = (state_36484[(7)]);
var inst_36462__$1 = (state_36484[(2)]);
var inst_36463 = (inst_36462__$1 == null);
var state_36484__$1 = (function (){var statearr_36490 = state_36484;
(statearr_36490[(7)] = inst_36462__$1);

return statearr_36490;
})();
if(cljs.core.truth_(inst_36463)){
var statearr_36491_38163 = state_36484__$1;
(statearr_36491_38163[(1)] = (5));

} else {
var statearr_36492_38164 = state_36484__$1;
(statearr_36492_38164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (6))){
var inst_36462 = (state_36484[(7)]);
var inst_36467 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36462) : p.call(null,inst_36462));
var state_36484__$1 = state_36484;
if(cljs.core.truth_(inst_36467)){
var statearr_36494_38165 = state_36484__$1;
(statearr_36494_38165[(1)] = (8));

} else {
var statearr_36495_38167 = state_36484__$1;
(statearr_36495_38167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (3))){
var inst_36481 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36484__$1,inst_36481);
} else {
if((state_val_36485 === (2))){
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36484__$1,(4),ch);
} else {
if((state_val_36485 === (11))){
var inst_36473 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36497_38168 = state_36484__$1;
(statearr_36497_38168[(2)] = inst_36473);

(statearr_36497_38168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (9))){
var state_36484__$1 = state_36484;
var statearr_36498_38170 = state_36484__$1;
(statearr_36498_38170[(2)] = null);

(statearr_36498_38170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (5))){
var inst_36465 = cljs.core.async.close_BANG_(out);
var state_36484__$1 = state_36484;
var statearr_36502_38171 = state_36484__$1;
(statearr_36502_38171[(2)] = inst_36465);

(statearr_36502_38171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (10))){
var inst_36476 = (state_36484[(2)]);
var state_36484__$1 = (function (){var statearr_36503 = state_36484;
(statearr_36503[(8)] = inst_36476);

return statearr_36503;
})();
var statearr_36504_38172 = state_36484__$1;
(statearr_36504_38172[(2)] = null);

(statearr_36504_38172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (8))){
var inst_36462 = (state_36484[(7)]);
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36484__$1,(11),out,inst_36462);
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
var statearr_36506 = [null,null,null,null,null,null,null,null,null];
(statearr_36506[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36506[(1)] = (1));

return statearr_36506;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36484){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36484);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36508){if((e36508 instanceof Object)){
var ex__34210__auto__ = e36508;
var statearr_36509_38175 = state_36484;
(statearr_36509_38175[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38176 = state_36484;
state_36484 = G__38176;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36511 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36511[(6)] = c__34273__auto___38159);

return statearr_36511;
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
var G__36514 = arguments.length;
switch (G__36514) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36582){
var state_val_36583 = (state_36582[(1)]);
if((state_val_36583 === (7))){
var inst_36577 = (state_36582[(2)]);
var state_36582__$1 = state_36582;
var statearr_36587_38180 = state_36582__$1;
(statearr_36587_38180[(2)] = inst_36577);

(statearr_36587_38180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (20))){
var inst_36546 = (state_36582[(7)]);
var inst_36558 = (state_36582[(2)]);
var inst_36559 = cljs.core.next(inst_36546);
var inst_36531 = inst_36559;
var inst_36533 = null;
var inst_36534 = (0);
var inst_36535 = (0);
var state_36582__$1 = (function (){var statearr_36588 = state_36582;
(statearr_36588[(8)] = inst_36533);

(statearr_36588[(9)] = inst_36535);

(statearr_36588[(10)] = inst_36534);

(statearr_36588[(11)] = inst_36531);

(statearr_36588[(12)] = inst_36558);

return statearr_36588;
})();
var statearr_36590_38182 = state_36582__$1;
(statearr_36590_38182[(2)] = null);

(statearr_36590_38182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (1))){
var state_36582__$1 = state_36582;
var statearr_36591_38183 = state_36582__$1;
(statearr_36591_38183[(2)] = null);

(statearr_36591_38183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (4))){
var inst_36520 = (state_36582[(13)]);
var inst_36520__$1 = (state_36582[(2)]);
var inst_36521 = (inst_36520__$1 == null);
var state_36582__$1 = (function (){var statearr_36593 = state_36582;
(statearr_36593[(13)] = inst_36520__$1);

return statearr_36593;
})();
if(cljs.core.truth_(inst_36521)){
var statearr_36594_38184 = state_36582__$1;
(statearr_36594_38184[(1)] = (5));

} else {
var statearr_36595_38186 = state_36582__$1;
(statearr_36595_38186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (15))){
var state_36582__$1 = state_36582;
var statearr_36600_38187 = state_36582__$1;
(statearr_36600_38187[(2)] = null);

(statearr_36600_38187[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (21))){
var state_36582__$1 = state_36582;
var statearr_36601_38188 = state_36582__$1;
(statearr_36601_38188[(2)] = null);

(statearr_36601_38188[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (13))){
var inst_36533 = (state_36582[(8)]);
var inst_36535 = (state_36582[(9)]);
var inst_36534 = (state_36582[(10)]);
var inst_36531 = (state_36582[(11)]);
var inst_36542 = (state_36582[(2)]);
var inst_36543 = (inst_36535 + (1));
var tmp36596 = inst_36533;
var tmp36597 = inst_36534;
var tmp36598 = inst_36531;
var inst_36531__$1 = tmp36598;
var inst_36533__$1 = tmp36596;
var inst_36534__$1 = tmp36597;
var inst_36535__$1 = inst_36543;
var state_36582__$1 = (function (){var statearr_36603 = state_36582;
(statearr_36603[(8)] = inst_36533__$1);

(statearr_36603[(9)] = inst_36535__$1);

(statearr_36603[(10)] = inst_36534__$1);

(statearr_36603[(14)] = inst_36542);

(statearr_36603[(11)] = inst_36531__$1);

return statearr_36603;
})();
var statearr_36604_38190 = state_36582__$1;
(statearr_36604_38190[(2)] = null);

(statearr_36604_38190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (22))){
var state_36582__$1 = state_36582;
var statearr_36606_38192 = state_36582__$1;
(statearr_36606_38192[(2)] = null);

(statearr_36606_38192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (6))){
var inst_36520 = (state_36582[(13)]);
var inst_36529 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36520) : f.call(null,inst_36520));
var inst_36530 = cljs.core.seq(inst_36529);
var inst_36531 = inst_36530;
var inst_36533 = null;
var inst_36534 = (0);
var inst_36535 = (0);
var state_36582__$1 = (function (){var statearr_36607 = state_36582;
(statearr_36607[(8)] = inst_36533);

(statearr_36607[(9)] = inst_36535);

(statearr_36607[(10)] = inst_36534);

(statearr_36607[(11)] = inst_36531);

return statearr_36607;
})();
var statearr_36609_38194 = state_36582__$1;
(statearr_36609_38194[(2)] = null);

(statearr_36609_38194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (17))){
var inst_36546 = (state_36582[(7)]);
var inst_36550 = cljs.core.chunk_first(inst_36546);
var inst_36551 = cljs.core.chunk_rest(inst_36546);
var inst_36553 = cljs.core.count(inst_36550);
var inst_36531 = inst_36551;
var inst_36533 = inst_36550;
var inst_36534 = inst_36553;
var inst_36535 = (0);
var state_36582__$1 = (function (){var statearr_36611 = state_36582;
(statearr_36611[(8)] = inst_36533);

(statearr_36611[(9)] = inst_36535);

(statearr_36611[(10)] = inst_36534);

(statearr_36611[(11)] = inst_36531);

return statearr_36611;
})();
var statearr_36612_38195 = state_36582__$1;
(statearr_36612_38195[(2)] = null);

(statearr_36612_38195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (3))){
var inst_36579 = (state_36582[(2)]);
var state_36582__$1 = state_36582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36582__$1,inst_36579);
} else {
if((state_val_36583 === (12))){
var inst_36567 = (state_36582[(2)]);
var state_36582__$1 = state_36582;
var statearr_36614_38197 = state_36582__$1;
(statearr_36614_38197[(2)] = inst_36567);

(statearr_36614_38197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (2))){
var state_36582__$1 = state_36582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36582__$1,(4),in$);
} else {
if((state_val_36583 === (23))){
var inst_36575 = (state_36582[(2)]);
var state_36582__$1 = state_36582;
var statearr_36615_38198 = state_36582__$1;
(statearr_36615_38198[(2)] = inst_36575);

(statearr_36615_38198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (19))){
var inst_36562 = (state_36582[(2)]);
var state_36582__$1 = state_36582;
var statearr_36617_38200 = state_36582__$1;
(statearr_36617_38200[(2)] = inst_36562);

(statearr_36617_38200[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (11))){
var inst_36546 = (state_36582[(7)]);
var inst_36531 = (state_36582[(11)]);
var inst_36546__$1 = cljs.core.seq(inst_36531);
var state_36582__$1 = (function (){var statearr_36618 = state_36582;
(statearr_36618[(7)] = inst_36546__$1);

return statearr_36618;
})();
if(inst_36546__$1){
var statearr_36620_38201 = state_36582__$1;
(statearr_36620_38201[(1)] = (14));

} else {
var statearr_36621_38202 = state_36582__$1;
(statearr_36621_38202[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (9))){
var inst_36569 = (state_36582[(2)]);
var inst_36570 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36582__$1 = (function (){var statearr_36622 = state_36582;
(statearr_36622[(15)] = inst_36569);

return statearr_36622;
})();
if(cljs.core.truth_(inst_36570)){
var statearr_36624_38203 = state_36582__$1;
(statearr_36624_38203[(1)] = (21));

} else {
var statearr_36625_38204 = state_36582__$1;
(statearr_36625_38204[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (5))){
var inst_36523 = cljs.core.async.close_BANG_(out);
var state_36582__$1 = state_36582;
var statearr_36626_38205 = state_36582__$1;
(statearr_36626_38205[(2)] = inst_36523);

(statearr_36626_38205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (14))){
var inst_36546 = (state_36582[(7)]);
var inst_36548 = cljs.core.chunked_seq_QMARK_(inst_36546);
var state_36582__$1 = state_36582;
if(inst_36548){
var statearr_36628_38207 = state_36582__$1;
(statearr_36628_38207[(1)] = (17));

} else {
var statearr_36629_38208 = state_36582__$1;
(statearr_36629_38208[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (16))){
var inst_36565 = (state_36582[(2)]);
var state_36582__$1 = state_36582;
var statearr_36630_38209 = state_36582__$1;
(statearr_36630_38209[(2)] = inst_36565);

(statearr_36630_38209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (10))){
var inst_36533 = (state_36582[(8)]);
var inst_36535 = (state_36582[(9)]);
var inst_36540 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36533,inst_36535);
var state_36582__$1 = state_36582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36582__$1,(13),out,inst_36540);
} else {
if((state_val_36583 === (18))){
var inst_36546 = (state_36582[(7)]);
var inst_36556 = cljs.core.first(inst_36546);
var state_36582__$1 = state_36582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36582__$1,(20),out,inst_36556);
} else {
if((state_val_36583 === (8))){
var inst_36535 = (state_36582[(9)]);
var inst_36534 = (state_36582[(10)]);
var inst_36537 = (inst_36535 < inst_36534);
var inst_36538 = inst_36537;
var state_36582__$1 = state_36582;
if(cljs.core.truth_(inst_36538)){
var statearr_36633_38210 = state_36582__$1;
(statearr_36633_38210[(1)] = (10));

} else {
var statearr_36634_38211 = state_36582__$1;
(statearr_36634_38211[(1)] = (11));

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
var statearr_36636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36636[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36636[(1)] = (1));

return statearr_36636;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36582){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36582);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36637){if((e36637 instanceof Object)){
var ex__34210__auto__ = e36637;
var statearr_36638_38212 = state_36582;
(statearr_36638_38212[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38213 = state_36582;
state_36582 = G__38213;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36582){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36640 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36640[(6)] = c__34273__auto__);

return statearr_36640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36643 = arguments.length;
switch (G__36643) {
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
var G__36648 = arguments.length;
switch (G__36648) {
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
var G__36652 = arguments.length;
switch (G__36652) {
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
var c__34273__auto___38219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36679){
var state_val_36680 = (state_36679[(1)]);
if((state_val_36680 === (7))){
var inst_36673 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36682_38220 = state_36679__$1;
(statearr_36682_38220[(2)] = inst_36673);

(statearr_36682_38220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (1))){
var inst_36655 = null;
var state_36679__$1 = (function (){var statearr_36683 = state_36679;
(statearr_36683[(7)] = inst_36655);

return statearr_36683;
})();
var statearr_36684_38221 = state_36679__$1;
(statearr_36684_38221[(2)] = null);

(statearr_36684_38221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (4))){
var inst_36658 = (state_36679[(8)]);
var inst_36658__$1 = (state_36679[(2)]);
var inst_36659 = (inst_36658__$1 == null);
var inst_36660 = cljs.core.not(inst_36659);
var state_36679__$1 = (function (){var statearr_36686 = state_36679;
(statearr_36686[(8)] = inst_36658__$1);

return statearr_36686;
})();
if(inst_36660){
var statearr_36687_38223 = state_36679__$1;
(statearr_36687_38223[(1)] = (5));

} else {
var statearr_36688_38224 = state_36679__$1;
(statearr_36688_38224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (6))){
var state_36679__$1 = state_36679;
var statearr_36690_38225 = state_36679__$1;
(statearr_36690_38225[(2)] = null);

(statearr_36690_38225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (3))){
var inst_36675 = (state_36679[(2)]);
var inst_36676 = cljs.core.async.close_BANG_(out);
var state_36679__$1 = (function (){var statearr_36691 = state_36679;
(statearr_36691[(9)] = inst_36675);

return statearr_36691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36679__$1,inst_36676);
} else {
if((state_val_36680 === (2))){
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36679__$1,(4),ch);
} else {
if((state_val_36680 === (11))){
var inst_36658 = (state_36679[(8)]);
var inst_36667 = (state_36679[(2)]);
var inst_36655 = inst_36658;
var state_36679__$1 = (function (){var statearr_36693 = state_36679;
(statearr_36693[(7)] = inst_36655);

(statearr_36693[(10)] = inst_36667);

return statearr_36693;
})();
var statearr_36694_38226 = state_36679__$1;
(statearr_36694_38226[(2)] = null);

(statearr_36694_38226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (9))){
var inst_36658 = (state_36679[(8)]);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36679__$1,(11),out,inst_36658);
} else {
if((state_val_36680 === (5))){
var inst_36655 = (state_36679[(7)]);
var inst_36658 = (state_36679[(8)]);
var inst_36662 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36658,inst_36655);
var state_36679__$1 = state_36679;
if(inst_36662){
var statearr_36697_38230 = state_36679__$1;
(statearr_36697_38230[(1)] = (8));

} else {
var statearr_36698_38231 = state_36679__$1;
(statearr_36698_38231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (10))){
var inst_36670 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36700_38232 = state_36679__$1;
(statearr_36700_38232[(2)] = inst_36670);

(statearr_36700_38232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (8))){
var inst_36655 = (state_36679[(7)]);
var tmp36696 = inst_36655;
var inst_36655__$1 = tmp36696;
var state_36679__$1 = (function (){var statearr_36701 = state_36679;
(statearr_36701[(7)] = inst_36655__$1);

return statearr_36701;
})();
var statearr_36703_38233 = state_36679__$1;
(statearr_36703_38233[(2)] = null);

(statearr_36703_38233[(1)] = (2));


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
var statearr_36706 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36706[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36706[(1)] = (1));

return statearr_36706;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36679){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36679);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36708){if((e36708 instanceof Object)){
var ex__34210__auto__ = e36708;
var statearr_36709_38234 = state_36679;
(statearr_36709_38234[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36708;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38235 = state_36679;
state_36679 = G__38235;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36711 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36711[(6)] = c__34273__auto___38219);

return statearr_36711;
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
var G__36714 = arguments.length;
switch (G__36714) {
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
var c__34273__auto___38237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36756){
var state_val_36757 = (state_36756[(1)]);
if((state_val_36757 === (7))){
var inst_36751 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36759_38238 = state_36756__$1;
(statearr_36759_38238[(2)] = inst_36751);

(statearr_36759_38238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (1))){
var inst_36717 = (new Array(n));
var inst_36719 = inst_36717;
var inst_36720 = (0);
var state_36756__$1 = (function (){var statearr_36760 = state_36756;
(statearr_36760[(7)] = inst_36720);

(statearr_36760[(8)] = inst_36719);

return statearr_36760;
})();
var statearr_36762_38239 = state_36756__$1;
(statearr_36762_38239[(2)] = null);

(statearr_36762_38239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (4))){
var inst_36723 = (state_36756[(9)]);
var inst_36723__$1 = (state_36756[(2)]);
var inst_36724 = (inst_36723__$1 == null);
var inst_36725 = cljs.core.not(inst_36724);
var state_36756__$1 = (function (){var statearr_36763 = state_36756;
(statearr_36763[(9)] = inst_36723__$1);

return statearr_36763;
})();
if(inst_36725){
var statearr_36764_38240 = state_36756__$1;
(statearr_36764_38240[(1)] = (5));

} else {
var statearr_36765_38241 = state_36756__$1;
(statearr_36765_38241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (15))){
var inst_36745 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36767_38242 = state_36756__$1;
(statearr_36767_38242[(2)] = inst_36745);

(statearr_36767_38242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (13))){
var state_36756__$1 = state_36756;
var statearr_36768_38243 = state_36756__$1;
(statearr_36768_38243[(2)] = null);

(statearr_36768_38243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (6))){
var inst_36720 = (state_36756[(7)]);
var inst_36741 = (inst_36720 > (0));
var state_36756__$1 = state_36756;
if(cljs.core.truth_(inst_36741)){
var statearr_36770_38244 = state_36756__$1;
(statearr_36770_38244[(1)] = (12));

} else {
var statearr_36771_38245 = state_36756__$1;
(statearr_36771_38245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (3))){
var inst_36754 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36756__$1,inst_36754);
} else {
if((state_val_36757 === (12))){
var inst_36719 = (state_36756[(8)]);
var inst_36743 = cljs.core.vec(inst_36719);
var state_36756__$1 = state_36756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36756__$1,(15),out,inst_36743);
} else {
if((state_val_36757 === (2))){
var state_36756__$1 = state_36756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36756__$1,(4),ch);
} else {
if((state_val_36757 === (11))){
var inst_36735 = (state_36756[(2)]);
var inst_36736 = (new Array(n));
var inst_36719 = inst_36736;
var inst_36720 = (0);
var state_36756__$1 = (function (){var statearr_36774 = state_36756;
(statearr_36774[(7)] = inst_36720);

(statearr_36774[(10)] = inst_36735);

(statearr_36774[(8)] = inst_36719);

return statearr_36774;
})();
var statearr_36775_38246 = state_36756__$1;
(statearr_36775_38246[(2)] = null);

(statearr_36775_38246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (9))){
var inst_36719 = (state_36756[(8)]);
var inst_36733 = cljs.core.vec(inst_36719);
var state_36756__$1 = state_36756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36756__$1,(11),out,inst_36733);
} else {
if((state_val_36757 === (5))){
var inst_36720 = (state_36756[(7)]);
var inst_36723 = (state_36756[(9)]);
var inst_36728 = (state_36756[(11)]);
var inst_36719 = (state_36756[(8)]);
var inst_36727 = (inst_36719[inst_36720] = inst_36723);
var inst_36728__$1 = (inst_36720 + (1));
var inst_36729 = (inst_36728__$1 < n);
var state_36756__$1 = (function (){var statearr_36777 = state_36756;
(statearr_36777[(12)] = inst_36727);

(statearr_36777[(11)] = inst_36728__$1);

return statearr_36777;
})();
if(cljs.core.truth_(inst_36729)){
var statearr_36778_38247 = state_36756__$1;
(statearr_36778_38247[(1)] = (8));

} else {
var statearr_36779_38248 = state_36756__$1;
(statearr_36779_38248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (14))){
var inst_36748 = (state_36756[(2)]);
var inst_36749 = cljs.core.async.close_BANG_(out);
var state_36756__$1 = (function (){var statearr_36782 = state_36756;
(statearr_36782[(13)] = inst_36748);

return statearr_36782;
})();
var statearr_36783_38249 = state_36756__$1;
(statearr_36783_38249[(2)] = inst_36749);

(statearr_36783_38249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (10))){
var inst_36739 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36784_38250 = state_36756__$1;
(statearr_36784_38250[(2)] = inst_36739);

(statearr_36784_38250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (8))){
var inst_36728 = (state_36756[(11)]);
var inst_36719 = (state_36756[(8)]);
var tmp36780 = inst_36719;
var inst_36719__$1 = tmp36780;
var inst_36720 = inst_36728;
var state_36756__$1 = (function (){var statearr_36786 = state_36756;
(statearr_36786[(7)] = inst_36720);

(statearr_36786[(8)] = inst_36719__$1);

return statearr_36786;
})();
var statearr_36787_38251 = state_36756__$1;
(statearr_36787_38251[(2)] = null);

(statearr_36787_38251[(1)] = (2));


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
var statearr_36789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36789[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36789[(1)] = (1));

return statearr_36789;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36756){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36756);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36794){if((e36794 instanceof Object)){
var ex__34210__auto__ = e36794;
var statearr_36795_38252 = state_36756;
(statearr_36795_38252[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38253 = state_36756;
state_36756 = G__38253;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36797 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36797[(6)] = c__34273__auto___38237);

return statearr_36797;
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
var G__36801 = arguments.length;
switch (G__36801) {
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
var c__34273__auto___38255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36846){
var state_val_36847 = (state_36846[(1)]);
if((state_val_36847 === (7))){
var inst_36842 = (state_36846[(2)]);
var state_36846__$1 = state_36846;
var statearr_36849_38256 = state_36846__$1;
(statearr_36849_38256[(2)] = inst_36842);

(statearr_36849_38256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (1))){
var inst_36804 = [];
var inst_36805 = inst_36804;
var inst_36806 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36846__$1 = (function (){var statearr_36851 = state_36846;
(statearr_36851[(7)] = inst_36805);

(statearr_36851[(8)] = inst_36806);

return statearr_36851;
})();
var statearr_36852_38257 = state_36846__$1;
(statearr_36852_38257[(2)] = null);

(statearr_36852_38257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (4))){
var inst_36809 = (state_36846[(9)]);
var inst_36809__$1 = (state_36846[(2)]);
var inst_36810 = (inst_36809__$1 == null);
var inst_36811 = cljs.core.not(inst_36810);
var state_36846__$1 = (function (){var statearr_36853 = state_36846;
(statearr_36853[(9)] = inst_36809__$1);

return statearr_36853;
})();
if(inst_36811){
var statearr_36855_38258 = state_36846__$1;
(statearr_36855_38258[(1)] = (5));

} else {
var statearr_36856_38259 = state_36846__$1;
(statearr_36856_38259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (15))){
var inst_36836 = (state_36846[(2)]);
var state_36846__$1 = state_36846;
var statearr_36857_38260 = state_36846__$1;
(statearr_36857_38260[(2)] = inst_36836);

(statearr_36857_38260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (13))){
var state_36846__$1 = state_36846;
var statearr_36859_38261 = state_36846__$1;
(statearr_36859_38261[(2)] = null);

(statearr_36859_38261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (6))){
var inst_36805 = (state_36846[(7)]);
var inst_36831 = inst_36805.length;
var inst_36832 = (inst_36831 > (0));
var state_36846__$1 = state_36846;
if(cljs.core.truth_(inst_36832)){
var statearr_36860_38262 = state_36846__$1;
(statearr_36860_38262[(1)] = (12));

} else {
var statearr_36862_38263 = state_36846__$1;
(statearr_36862_38263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (3))){
var inst_36844 = (state_36846[(2)]);
var state_36846__$1 = state_36846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36846__$1,inst_36844);
} else {
if((state_val_36847 === (12))){
var inst_36805 = (state_36846[(7)]);
var inst_36834 = cljs.core.vec(inst_36805);
var state_36846__$1 = state_36846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36846__$1,(15),out,inst_36834);
} else {
if((state_val_36847 === (2))){
var state_36846__$1 = state_36846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36846__$1,(4),ch);
} else {
if((state_val_36847 === (11))){
var inst_36813 = (state_36846[(10)]);
var inst_36809 = (state_36846[(9)]);
var inst_36823 = (state_36846[(2)]);
var inst_36825 = [];
var inst_36826 = inst_36825.push(inst_36809);
var inst_36805 = inst_36825;
var inst_36806 = inst_36813;
var state_36846__$1 = (function (){var statearr_36864 = state_36846;
(statearr_36864[(7)] = inst_36805);

(statearr_36864[(8)] = inst_36806);

(statearr_36864[(11)] = inst_36826);

(statearr_36864[(12)] = inst_36823);

return statearr_36864;
})();
var statearr_36866_38264 = state_36846__$1;
(statearr_36866_38264[(2)] = null);

(statearr_36866_38264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (9))){
var inst_36805 = (state_36846[(7)]);
var inst_36821 = cljs.core.vec(inst_36805);
var state_36846__$1 = state_36846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36846__$1,(11),out,inst_36821);
} else {
if((state_val_36847 === (5))){
var inst_36806 = (state_36846[(8)]);
var inst_36813 = (state_36846[(10)]);
var inst_36809 = (state_36846[(9)]);
var inst_36813__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36809) : f.call(null,inst_36809));
var inst_36814 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36813__$1,inst_36806);
var inst_36815 = cljs.core.keyword_identical_QMARK_(inst_36806,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36816 = ((inst_36814) || (inst_36815));
var state_36846__$1 = (function (){var statearr_36868 = state_36846;
(statearr_36868[(10)] = inst_36813__$1);

return statearr_36868;
})();
if(cljs.core.truth_(inst_36816)){
var statearr_36869_38265 = state_36846__$1;
(statearr_36869_38265[(1)] = (8));

} else {
var statearr_36870_38266 = state_36846__$1;
(statearr_36870_38266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (14))){
var inst_36839 = (state_36846[(2)]);
var inst_36840 = cljs.core.async.close_BANG_(out);
var state_36846__$1 = (function (){var statearr_36873 = state_36846;
(statearr_36873[(13)] = inst_36839);

return statearr_36873;
})();
var statearr_36874_38267 = state_36846__$1;
(statearr_36874_38267[(2)] = inst_36840);

(statearr_36874_38267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (10))){
var inst_36829 = (state_36846[(2)]);
var state_36846__$1 = state_36846;
var statearr_36875_38268 = state_36846__$1;
(statearr_36875_38268[(2)] = inst_36829);

(statearr_36875_38268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (8))){
var inst_36805 = (state_36846[(7)]);
var inst_36813 = (state_36846[(10)]);
var inst_36809 = (state_36846[(9)]);
var inst_36818 = inst_36805.push(inst_36809);
var tmp36871 = inst_36805;
var inst_36805__$1 = tmp36871;
var inst_36806 = inst_36813;
var state_36846__$1 = (function (){var statearr_36877 = state_36846;
(statearr_36877[(7)] = inst_36805__$1);

(statearr_36877[(14)] = inst_36818);

(statearr_36877[(8)] = inst_36806);

return statearr_36877;
})();
var statearr_36878_38269 = state_36846__$1;
(statearr_36878_38269[(2)] = null);

(statearr_36878_38269[(1)] = (2));


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
var statearr_36880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36880[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36880[(1)] = (1));

return statearr_36880;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36846){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36846);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36882){if((e36882 instanceof Object)){
var ex__34210__auto__ = e36882;
var statearr_36883_38270 = state_36846;
(statearr_36883_38270[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38271 = state_36846;
state_36846 = G__38271;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36885 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36885[(6)] = c__34273__auto___38255);

return statearr_36885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
