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
var val_36898 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36898) : fn1.call(null,val_36898));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36898) : fn1.call(null,val_36898));
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
var n__4666__auto___36908 = n;
var x_36909 = (0);
while(true){
if((x_36909 < n__4666__auto___36908)){
(a[x_36909] = x_36909);

var G__36910 = (x_36909 + (1));
x_36909 = G__36910;
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
var G__36928 = (i + (1));
i = G__36928;
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
var len__4789__auto___36930 = arguments.length;
var i__4790__auto___36931 = (0);
while(true){
if((i__4790__auto___36931 < len__4789__auto___36930)){
args__4795__auto__.push((arguments[i__4790__auto___36931]));

var G__36934 = (i__4790__auto___36931 + (1));
i__4790__auto___36931 = G__36934;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34368){
var map__34372 = p__34368;
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
var c__34274__auto___36952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34414){
var state_val_34415 = (state_34414[(1)]);
if((state_val_34415 === (7))){
var inst_34407 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34425_36959 = state_34414__$1;
(statearr_34425_36959[(2)] = inst_34407);

(statearr_34425_36959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (1))){
var state_34414__$1 = state_34414;
var statearr_34426_36961 = state_34414__$1;
(statearr_34426_36961[(2)] = null);

(statearr_34426_36961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (4))){
var inst_34390 = (state_34414[(7)]);
var inst_34390__$1 = (state_34414[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34414__$1 = (function (){var statearr_34427 = state_34414;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36964 = state_34414__$1;
(statearr_34428_36964[(1)] = (5));

} else {
var statearr_34429_36965 = state_34414__$1;
(statearr_34429_36965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (13))){
var state_34414__$1 = state_34414;
var statearr_34430_36966 = state_34414__$1;
(statearr_34430_36966[(2)] = null);

(statearr_34430_36966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (6))){
var inst_34390 = (state_34414[(7)]);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34414__$1,(11),to,inst_34390);
} else {
if((state_val_34415 === (3))){
var inst_34409 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34414__$1,inst_34409);
} else {
if((state_val_34415 === (12))){
var state_34414__$1 = state_34414;
var statearr_34431_36974 = state_34414__$1;
(statearr_34431_36974[(2)] = null);

(statearr_34431_36974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (2))){
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34414__$1,(4),from);
} else {
if((state_val_34415 === (11))){
var inst_34400 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36979 = state_34414__$1;
(statearr_34432_36979[(1)] = (12));

} else {
var statearr_34433_36980 = state_34414__$1;
(statearr_34433_36980[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (9))){
var state_34414__$1 = state_34414;
var statearr_34434_36981 = state_34414__$1;
(statearr_34434_36981[(2)] = null);

(statearr_34434_36981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (5))){
var state_34414__$1 = state_34414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36983 = state_34414__$1;
(statearr_34435_36983[(1)] = (8));

} else {
var statearr_34436_36986 = state_34414__$1;
(statearr_34436_36986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (14))){
var inst_34405 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34437_36990 = state_34414__$1;
(statearr_34437_36990[(2)] = inst_34405);

(statearr_34437_36990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (10))){
var inst_34397 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34438_36995 = state_34414__$1;
(statearr_34438_36995[(2)] = inst_34397);

(statearr_34438_36995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34414__$1 = state_34414;
var statearr_34439_36999 = state_34414__$1;
(statearr_34439_36999[(2)] = inst_34394);

(statearr_34439_36999[(1)] = (10));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34414){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34414);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_37004 = state_34414;
(statearr_34442_37004[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37005 = state_34414;
state_34414 = G__37005;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34443 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34443[(6)] = c__34274__auto___36952);

return statearr_34443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var c__34274__auto___37015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34452){
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
var statearr_34462_37024 = state_34452;
(statearr_34462_37024[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37027 = state_34452;
state_34452 = G__37027;
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
var state__34276__auto__ = (function (){var statearr_34463 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34463[(6)] = c__34274__auto___37015);

return statearr_34463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var n__4666__auto___37032 = n;
var __37034 = (0);
while(true){
if((__37034 < n__4666__auto___37032)){
var G__34468_37035 = type;
var G__34468_37036__$1 = (((G__34468_37035 instanceof cljs.core.Keyword))?G__34468_37035.fqn:null);
switch (G__34468_37036__$1) {
case "compute":
var c__34274__auto___37041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37034,c__34274__auto___37041,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__37034,c__34274__auto___37041,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async){
return (function (state_34482){
var state_val_34483 = (state_34482[(1)]);
if((state_val_34483 === (1))){
var state_34482__$1 = state_34482;
var statearr_34485_37042 = state_34482__$1;
(statearr_34485_37042[(2)] = null);

(statearr_34485_37042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (2))){
var state_34482__$1 = state_34482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34482__$1,(4),jobs);
} else {
if((state_val_34483 === (3))){
var inst_34480 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34482__$1,inst_34480);
} else {
if((state_val_34483 === (4))){
var inst_34472 = (state_34482[(2)]);
var inst_34473 = process(inst_34472);
var state_34482__$1 = state_34482;
if(cljs.core.truth_(inst_34473)){
var statearr_34487_37050 = state_34482__$1;
(statearr_34487_37050[(1)] = (5));

} else {
var statearr_34488_37051 = state_34482__$1;
(statearr_34488_37051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (5))){
var state_34482__$1 = state_34482;
var statearr_34489_37053 = state_34482__$1;
(statearr_34489_37053[(2)] = null);

(statearr_34489_37053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (6))){
var state_34482__$1 = state_34482;
var statearr_34490_37054 = state_34482__$1;
(statearr_34490_37054[(2)] = null);

(statearr_34490_37054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (7))){
var inst_34478 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
var statearr_34491_37057 = state_34482__$1;
(statearr_34491_37057[(2)] = inst_34478);

(statearr_34491_37057[(1)] = (3));


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
});})(__37034,c__34274__auto___37041,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async))
;
return ((function (__37034,switch__34206__auto__,c__34274__auto___37041,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34494 = [null,null,null,null,null,null,null];
(statearr_34494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34494[(1)] = (1));

return statearr_34494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34482){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34482);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34498){if((e34498 instanceof Object)){
var ex__34210__auto__ = e34498;
var statearr_34501_37063 = state_34482;
(statearr_34501_37063[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37067 = state_34482;
state_34482 = G__37067;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__37034,switch__34206__auto__,c__34274__auto___37041,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34502 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34502[(6)] = c__34274__auto___37041);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__37034,c__34274__auto___37041,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___37070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37034,c__34274__auto___37070,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__37034,c__34274__auto___37070,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34517_37072 = state_34515__$1;
(statearr_34517_37072[(2)] = null);

(statearr_34517_37072[(1)] = (2));


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
var statearr_34519_37075 = state_34515__$1;
(statearr_34519_37075[(1)] = (5));

} else {
var statearr_34520_37076 = state_34515__$1;
(statearr_34520_37076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var state_34515__$1 = state_34515;
var statearr_34521_37079 = state_34515__$1;
(statearr_34521_37079[(2)] = null);

(statearr_34521_37079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34522_37083 = state_34515__$1;
(statearr_34522_37083[(2)] = null);

(statearr_34522_37083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34523_37087 = state_34515__$1;
(statearr_34523_37087[(2)] = inst_34511);

(statearr_34523_37087[(1)] = (3));


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
});})(__37034,c__34274__auto___37070,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async))
;
return ((function (__37034,switch__34206__auto__,c__34274__auto___37070,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34528 = [null,null,null,null,null,null,null];
(statearr_34528[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34528[(1)] = (1));

return statearr_34528;
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
}catch (e34529){if((e34529 instanceof Object)){
var ex__34210__auto__ = e34529;
var statearr_34530_37090 = state_34515;
(statearr_34530_37090[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37091 = state_34515;
state_34515 = G__37091;
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
;})(__37034,switch__34206__auto__,c__34274__auto___37070,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___37070);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__37034,c__34274__auto___37070,G__34468_37035,G__34468_37036__$1,n__4666__auto___37032,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_37036__$1)].join('')));

}

var G__37098 = (__37034 + (1));
__37034 = G__37098;
continue;
} else {
}
break;
}

var c__34274__auto___37099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34561_37100 = state_34556__$1;
(statearr_34561_37100[(2)] = inst_34552);

(statearr_34561_37100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34562_37105 = state_34556__$1;
(statearr_34562_37105[(2)] = null);

(statearr_34562_37105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34537 = (state_34556[(7)]);
var inst_34537__$1 = (state_34556[(2)]);
var inst_34538 = (inst_34537__$1 == null);
var state_34556__$1 = (function (){var statearr_34563 = state_34556;
(statearr_34563[(7)] = inst_34537__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34538)){
var statearr_34564_37106 = state_34556__$1;
(statearr_34564_37106[(1)] = (5));

} else {
var statearr_34565_37108 = state_34556__$1;
(statearr_34565_37108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34542 = (state_34556[(8)]);
var inst_34537 = (state_34556[(7)]);
var inst_34542__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34544 = [inst_34537,inst_34542__$1];
var inst_34545 = (new cljs.core.PersistentVector(null,2,(5),inst_34543,inst_34544,null));
var state_34556__$1 = (function (){var statearr_34566 = state_34556;
(statearr_34566[(8)] = inst_34542__$1);

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
var statearr_34568_37121 = state_34556__$1;
(statearr_34568_37121[(2)] = null);

(statearr_34568_37121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_37123 = state_34556__$1;
(statearr_34569_37123[(2)] = inst_34540);

(statearr_34569_37123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34542 = (state_34556[(8)]);
var inst_34547 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34570 = state_34556;
(statearr_34570[(10)] = inst_34547);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(9),results,inst_34542);
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
var statearr_34573_37133 = state_34556;
(statearr_34573_37133[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37135 = state_34556;
state_34556 = G__37135;
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
var state__34276__auto__ = (function (){var statearr_34574 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34574[(6)] = c__34274__auto___37099);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34612){
var state_val_34613 = (state_34612[(1)]);
if((state_val_34613 === (7))){
var inst_34608 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34614_37148 = state_34612__$1;
(statearr_34614_37148[(2)] = inst_34608);

(statearr_34614_37148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_37149 = state_34612__$1;
(statearr_34615_37149[(2)] = null);

(statearr_34615_37149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_37150 = state_34612__$1;
(statearr_34616_37150[(2)] = null);

(statearr_34616_37150[(1)] = (2));


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
var statearr_34618_37155 = state_34612__$1;
(statearr_34618_37155[(1)] = (5));

} else {
var statearr_34619_37156 = state_34612__$1;
(statearr_34619_37156[(1)] = (6));

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
var statearr_34620_37157 = state_34612__$1;
(statearr_34620_37157[(2)] = inst_34603);

(statearr_34620_37157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_37159 = state_34612__$1;
(statearr_34622_37159[(2)] = null);

(statearr_34622_37159[(1)] = (2));


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
var statearr_34623_37162 = state_34612__$1;
(statearr_34623_37162[(1)] = (19));

} else {
var statearr_34624_37163 = state_34612__$1;
(statearr_34624_37163[(1)] = (20));

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
var statearr_34625_37168 = state_34612__$1;
(statearr_34625_37168[(2)] = null);

(statearr_34625_37168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_37170 = state_34612__$1;
(statearr_34627_37170[(2)] = null);

(statearr_34627_37170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37175 = state_34612__$1;
(statearr_34628_37175[(2)] = null);

(statearr_34628_37175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37176 = state_34612__$1;
(statearr_34629_37176[(1)] = (8));

} else {
var statearr_34630_37177 = state_34612__$1;
(statearr_34630_37177[(1)] = (9));

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
var statearr_34632_37180 = state_34612__$1;
(statearr_34632_37180[(1)] = (15));

} else {
var statearr_34633_37183 = state_34612__$1;
(statearr_34633_37183[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37185 = state_34612__$1;
(statearr_34634_37185[(2)] = false);

(statearr_34634_37185[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37188 = state_34612__$1;
(statearr_34635_37188[(2)] = inst_34584);

(statearr_34635_37188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37191 = state_34612__$1;
(statearr_34636_37191[(2)] = inst_34595);

(statearr_34636_37191[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37196 = state_34612__$1;
(statearr_34637_37196[(2)] = inst_34581);

(statearr_34637_37196[(1)] = (10));


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
var statearr_34640_37204 = state_34612;
(statearr_34640_37204[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37206 = state_34612;
state_34612 = G__37206;
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
var state__34276__auto__ = (function (){var statearr_34641 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34641[(6)] = c__34274__auto__);

return statearr_34641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
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
var G__34655 = arguments.length;
switch (G__34655) {
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
var c__34274__auto___37234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34686_37237 = state_34684__$1;
(statearr_34686_37237[(2)] = inst_34680);

(statearr_34686_37237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34687_37238 = state_34684__$1;
(statearr_34687_37238[(2)] = null);

(statearr_34687_37238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34659 = (state_34684[(7)]);
var inst_34659__$1 = (state_34684[(2)]);
var inst_34660 = (inst_34659__$1 == null);
var state_34684__$1 = (function (){var statearr_34688 = state_34684;
(statearr_34688[(7)] = inst_34659__$1);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34660)){
var statearr_34689_37239 = state_34684__$1;
(statearr_34689_37239[(1)] = (5));

} else {
var statearr_34690_37241 = state_34684__$1;
(statearr_34690_37241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (13))){
var state_34684__$1 = state_34684;
var statearr_34691_37244 = state_34684__$1;
(statearr_34691_37244[(2)] = null);

(statearr_34691_37244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34659 = (state_34684[(7)]);
var inst_34665 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34659) : p.call(null,inst_34659));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34665)){
var statearr_34693_37248 = state_34684__$1;
(statearr_34693_37248[(1)] = (9));

} else {
var statearr_34694_37250 = state_34684__$1;
(statearr_34694_37250[(1)] = (10));

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
var statearr_34696_37254 = state_34684__$1;
(statearr_34696_37254[(2)] = null);

(statearr_34696_37254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (2))){
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34684__$1,(4),ch);
} else {
if((state_val_34685 === (11))){
var inst_34659 = (state_34684[(7)]);
var inst_34669 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34684__$1,(8),inst_34669,inst_34659);
} else {
if((state_val_34685 === (9))){
var state_34684__$1 = state_34684;
var statearr_34697_37259 = state_34684__$1;
(statearr_34697_37259[(2)] = tc);

(statearr_34697_37259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34662 = cljs.core.async.close_BANG_(tc);
var inst_34663 = cljs.core.async.close_BANG_(fc);
var state_34684__$1 = (function (){var statearr_34699 = state_34684;
(statearr_34699[(8)] = inst_34662);

return statearr_34699;
})();
var statearr_34701_37265 = state_34684__$1;
(statearr_34701_37265[(2)] = inst_34663);

(statearr_34701_37265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34705_37270 = state_34684__$1;
(statearr_34705_37270[(2)] = inst_34678);

(statearr_34705_37270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var state_34684__$1 = state_34684;
var statearr_34706_37274 = state_34684__$1;
(statearr_34706_37274[(2)] = fc);

(statearr_34706_37274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34671 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34671)){
var statearr_34707_37275 = state_34684__$1;
(statearr_34707_37275[(1)] = (12));

} else {
var statearr_34708_37276 = state_34684__$1;
(statearr_34708_37276[(1)] = (13));

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
var statearr_34709 = [null,null,null,null,null,null,null,null,null];
(statearr_34709[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34709[(1)] = (1));

return statearr_34709;
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
}catch (e34710){if((e34710 instanceof Object)){
var ex__34210__auto__ = e34710;
var statearr_34712_37286 = state_34684;
(statearr_34712_37286[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37287 = state_34684;
state_34684 = G__37287;
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
var state__34276__auto__ = (function (){var statearr_34713 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34713[(6)] = c__34274__auto___37234);

return statearr_34713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34737){
var state_val_34738 = (state_34737[(1)]);
if((state_val_34738 === (7))){
var inst_34733 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
var statearr_34742_37297 = state_34737__$1;
(statearr_34742_37297[(2)] = inst_34733);

(statearr_34742_37297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (1))){
var inst_34717 = init;
var state_34737__$1 = (function (){var statearr_34743 = state_34737;
(statearr_34743[(7)] = inst_34717);

return statearr_34743;
})();
var statearr_34744_37303 = state_34737__$1;
(statearr_34744_37303[(2)] = null);

(statearr_34744_37303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (4))){
var inst_34720 = (state_34737[(8)]);
var inst_34720__$1 = (state_34737[(2)]);
var inst_34721 = (inst_34720__$1 == null);
var state_34737__$1 = (function (){var statearr_34745 = state_34737;
(statearr_34745[(8)] = inst_34720__$1);

return statearr_34745;
})();
if(cljs.core.truth_(inst_34721)){
var statearr_34746_37307 = state_34737__$1;
(statearr_34746_37307[(1)] = (5));

} else {
var statearr_34747_37308 = state_34737__$1;
(statearr_34747_37308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (6))){
var inst_34724 = (state_34737[(9)]);
var inst_34717 = (state_34737[(7)]);
var inst_34720 = (state_34737[(8)]);
var inst_34724__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34717,inst_34720) : f.call(null,inst_34717,inst_34720));
var inst_34725 = cljs.core.reduced_QMARK_(inst_34724__$1);
var state_34737__$1 = (function (){var statearr_34748 = state_34737;
(statearr_34748[(9)] = inst_34724__$1);

return statearr_34748;
})();
if(inst_34725){
var statearr_34749_37313 = state_34737__$1;
(statearr_34749_37313[(1)] = (8));

} else {
var statearr_34753_37314 = state_34737__$1;
(statearr_34753_37314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (3))){
var inst_34735 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34737__$1,inst_34735);
} else {
if((state_val_34738 === (2))){
var state_34737__$1 = state_34737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34737__$1,(4),ch);
} else {
if((state_val_34738 === (9))){
var inst_34724 = (state_34737[(9)]);
var inst_34717 = inst_34724;
var state_34737__$1 = (function (){var statearr_34754 = state_34737;
(statearr_34754[(7)] = inst_34717);

return statearr_34754;
})();
var statearr_34755_37320 = state_34737__$1;
(statearr_34755_37320[(2)] = null);

(statearr_34755_37320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (5))){
var inst_34717 = (state_34737[(7)]);
var state_34737__$1 = state_34737;
var statearr_34756_37323 = state_34737__$1;
(statearr_34756_37323[(2)] = inst_34717);

(statearr_34756_37323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (10))){
var inst_34731 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
var statearr_34757_37325 = state_34737__$1;
(statearr_34757_37325[(2)] = inst_34731);

(statearr_34757_37325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (8))){
var inst_34724 = (state_34737[(9)]);
var inst_34727 = cljs.core.deref(inst_34724);
var state_34737__$1 = state_34737;
var statearr_34758_37327 = state_34737__$1;
(statearr_34758_37327[(2)] = inst_34727);

(statearr_34758_37327[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34737){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34737);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37335 = state_34737;
(statearr_34761_37335[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37337 = state_34737;
state_34737 = G__37337;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34737){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34762 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34762[(6)] = c__34274__auto__);

return statearr_34762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34768){
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
var statearr_34772_37346 = state_34768;
(statearr_34772_37346[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37347 = state_34768;
state_34768 = G__37347;
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
var state__34276__auto__ = (function (){var statearr_34773 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34773[(6)] = c__34274__auto__);

return statearr_34773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
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
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34807){
var state_val_34808 = (state_34807[(1)]);
if((state_val_34808 === (7))){
var inst_34788 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34809_37356 = state_34807__$1;
(statearr_34809_37356[(2)] = inst_34788);

(statearr_34809_37356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34807__$1 = (function (){var statearr_34810 = state_34807;
(statearr_34810[(7)] = inst_34777);

return statearr_34810;
})();
var statearr_34811_37361 = state_34807__$1;
(statearr_34811_37361[(2)] = null);

(statearr_34811_37361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (4))){
var inst_34777 = (state_34807[(7)]);
var inst_34786 = cljs.core.first(inst_34777);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34807__$1,(7),ch,inst_34786);
} else {
if((state_val_34808 === (13))){
var inst_34801 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34812_37365 = state_34807__$1;
(statearr_34812_37365[(2)] = inst_34801);

(statearr_34812_37365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (6))){
var inst_34791 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34791)){
var statearr_34814_37367 = state_34807__$1;
(statearr_34814_37367[(1)] = (8));

} else {
var statearr_34815_37368 = state_34807__$1;
(statearr_34815_37368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (3))){
var inst_34805 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34807__$1,inst_34805);
} else {
if((state_val_34808 === (12))){
var state_34807__$1 = state_34807;
var statearr_34818_37372 = state_34807__$1;
(statearr_34818_37372[(2)] = null);

(statearr_34818_37372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (2))){
var inst_34777 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34777)){
var statearr_34821_37374 = state_34807__$1;
(statearr_34821_37374[(1)] = (4));

} else {
var statearr_34823_37375 = state_34807__$1;
(statearr_34823_37375[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (11))){
var inst_34798 = cljs.core.async.close_BANG_(ch);
var state_34807__$1 = state_34807;
var statearr_34824_37376 = state_34807__$1;
(statearr_34824_37376[(2)] = inst_34798);

(statearr_34824_37376[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (9))){
var state_34807__$1 = state_34807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34825_37377 = state_34807__$1;
(statearr_34825_37377[(1)] = (11));

} else {
var statearr_34826_37381 = state_34807__$1;
(statearr_34826_37381[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (5))){
var inst_34777 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
var statearr_34827_37382 = state_34807__$1;
(statearr_34827_37382[(2)] = inst_34777);

(statearr_34827_37382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (10))){
var inst_34803 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34828_37384 = state_34807__$1;
(statearr_34828_37384[(2)] = inst_34803);

(statearr_34828_37384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (8))){
var inst_34777 = (state_34807[(7)]);
var inst_34793 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34793;
var state_34807__$1 = (function (){var statearr_34829 = state_34807;
(statearr_34829[(7)] = inst_34777__$1);

return statearr_34829;
})();
var statearr_34830_37387 = state_34807__$1;
(statearr_34830_37387[(2)] = null);

(statearr_34830_37387[(1)] = (2));


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
var statearr_34831 = [null,null,null,null,null,null,null,null];
(statearr_34831[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34831[(1)] = (1));

return statearr_34831;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34807){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34807);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34832){if((e34832 instanceof Object)){
var ex__34210__auto__ = e34832;
var statearr_34833_37392 = state_34807;
(statearr_34833_37392[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37398 = state_34807;
state_34807 = G__37398;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34840 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34840[(6)] = c__34274__auto__);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
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
var c__34274__auto___37451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34996){
var state_val_34997 = (state_34996[(1)]);
if((state_val_34997 === (7))){
var inst_34992 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_34998_37453 = state_34996__$1;
(statearr_34998_37453[(2)] = inst_34992);

(statearr_34998_37453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (20))){
var inst_34883 = (state_34996[(7)]);
var inst_34895 = cljs.core.first(inst_34883);
var inst_34896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(0),null);
var inst_34897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(1),null);
var state_34996__$1 = (function (){var statearr_35002 = state_34996;
(statearr_35002[(8)] = inst_34896);

return statearr_35002;
})();
if(cljs.core.truth_(inst_34897)){
var statearr_35004_37461 = state_34996__$1;
(statearr_35004_37461[(1)] = (22));

} else {
var statearr_35006_37462 = state_34996__$1;
(statearr_35006_37462[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (27))){
var inst_34931 = (state_34996[(9)]);
var inst_34846 = (state_34996[(10)]);
var inst_34933 = (state_34996[(11)]);
var inst_34938 = (state_34996[(12)]);
var inst_34938__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34931,inst_34933);
var inst_34939 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34938__$1,inst_34846,done);
var state_34996__$1 = (function (){var statearr_35012 = state_34996;
(statearr_35012[(12)] = inst_34938__$1);

return statearr_35012;
})();
if(cljs.core.truth_(inst_34939)){
var statearr_35017_37469 = state_34996__$1;
(statearr_35017_37469[(1)] = (30));

} else {
var statearr_35026_37471 = state_34996__$1;
(statearr_35026_37471[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (1))){
var state_34996__$1 = state_34996;
var statearr_35030_37473 = state_34996__$1;
(statearr_35030_37473[(2)] = null);

(statearr_35030_37473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (24))){
var inst_34883 = (state_34996[(7)]);
var inst_34908 = (state_34996[(2)]);
var inst_34909 = cljs.core.next(inst_34883);
var inst_34855 = inst_34909;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34996__$1 = (function (){var statearr_35033 = state_34996;
(statearr_35033[(13)] = inst_34857);

(statearr_35033[(14)] = inst_34856);

(statearr_35033[(15)] = inst_34858);

(statearr_35033[(16)] = inst_34855);

(statearr_35033[(17)] = inst_34908);

return statearr_35033;
})();
var statearr_35036_37480 = state_34996__$1;
(statearr_35036_37480[(2)] = null);

(statearr_35036_37480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (39))){
var state_34996__$1 = state_34996;
var statearr_35061_37482 = state_34996__$1;
(statearr_35061_37482[(2)] = null);

(statearr_35061_37482[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (4))){
var inst_34846 = (state_34996[(10)]);
var inst_34846__$1 = (state_34996[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34996__$1 = (function (){var statearr_35067 = state_34996;
(statearr_35067[(10)] = inst_34846__$1);

return statearr_35067;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35069_37485 = state_34996__$1;
(statearr_35069_37485[(1)] = (5));

} else {
var statearr_35072_37486 = state_34996__$1;
(statearr_35072_37486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (15))){
var inst_34857 = (state_34996[(13)]);
var inst_34856 = (state_34996[(14)]);
var inst_34858 = (state_34996[(15)]);
var inst_34855 = (state_34996[(16)]);
var inst_34875 = (state_34996[(2)]);
var inst_34876 = (inst_34858 + (1));
var tmp35051 = inst_34857;
var tmp35052 = inst_34856;
var tmp35053 = inst_34855;
var inst_34855__$1 = tmp35053;
var inst_34856__$1 = tmp35052;
var inst_34857__$1 = tmp35051;
var inst_34858__$1 = inst_34876;
var state_34996__$1 = (function (){var statearr_35095 = state_34996;
(statearr_35095[(13)] = inst_34857__$1);

(statearr_35095[(14)] = inst_34856__$1);

(statearr_35095[(15)] = inst_34858__$1);

(statearr_35095[(18)] = inst_34875);

(statearr_35095[(16)] = inst_34855__$1);

return statearr_35095;
})();
var statearr_35103_37498 = state_34996__$1;
(statearr_35103_37498[(2)] = null);

(statearr_35103_37498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (21))){
var inst_34912 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35112_37500 = state_34996__$1;
(statearr_35112_37500[(2)] = inst_34912);

(statearr_35112_37500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (31))){
var inst_34938 = (state_34996[(12)]);
var inst_34943 = done(null);
var inst_34945 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34938);
var state_34996__$1 = (function (){var statearr_35121 = state_34996;
(statearr_35121[(19)] = inst_34943);

return statearr_35121;
})();
var statearr_35123_37503 = state_34996__$1;
(statearr_35123_37503[(2)] = inst_34945);

(statearr_35123_37503[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (32))){
var inst_34931 = (state_34996[(9)]);
var inst_34933 = (state_34996[(11)]);
var inst_34930 = (state_34996[(20)]);
var inst_34932 = (state_34996[(21)]);
var inst_34947 = (state_34996[(2)]);
var inst_34948 = (inst_34933 + (1));
var tmp35105 = inst_34931;
var tmp35106 = inst_34930;
var tmp35107 = inst_34932;
var inst_34930__$1 = tmp35106;
var inst_34931__$1 = tmp35105;
var inst_34932__$1 = tmp35107;
var inst_34933__$1 = inst_34948;
var state_34996__$1 = (function (){var statearr_35132 = state_34996;
(statearr_35132[(22)] = inst_34947);

(statearr_35132[(9)] = inst_34931__$1);

(statearr_35132[(11)] = inst_34933__$1);

(statearr_35132[(20)] = inst_34930__$1);

(statearr_35132[(21)] = inst_34932__$1);

return statearr_35132;
})();
var statearr_35133_37512 = state_34996__$1;
(statearr_35133_37512[(2)] = null);

(statearr_35133_37512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (40))){
var inst_34963 = (state_34996[(23)]);
var inst_34967 = done(null);
var inst_34968 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34963);
var state_34996__$1 = (function (){var statearr_35136 = state_34996;
(statearr_35136[(24)] = inst_34967);

return statearr_35136;
})();
var statearr_35137_37522 = state_34996__$1;
(statearr_35137_37522[(2)] = inst_34968);

(statearr_35137_37522[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (33))){
var inst_34951 = (state_34996[(25)]);
var inst_34955 = cljs.core.chunked_seq_QMARK_(inst_34951);
var state_34996__$1 = state_34996;
if(inst_34955){
var statearr_35161_37525 = state_34996__$1;
(statearr_35161_37525[(1)] = (36));

} else {
var statearr_35162_37527 = state_34996__$1;
(statearr_35162_37527[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (13))){
var inst_34867 = (state_34996[(26)]);
var inst_34872 = cljs.core.async.close_BANG_(inst_34867);
var state_34996__$1 = state_34996;
var statearr_35194_37529 = state_34996__$1;
(statearr_35194_37529[(2)] = inst_34872);

(statearr_35194_37529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (22))){
var inst_34896 = (state_34996[(8)]);
var inst_34905 = cljs.core.async.close_BANG_(inst_34896);
var state_34996__$1 = state_34996;
var statearr_35202_37535 = state_34996__$1;
(statearr_35202_37535[(2)] = inst_34905);

(statearr_35202_37535[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (36))){
var inst_34951 = (state_34996[(25)]);
var inst_34957 = cljs.core.chunk_first(inst_34951);
var inst_34958 = cljs.core.chunk_rest(inst_34951);
var inst_34959 = cljs.core.count(inst_34957);
var inst_34930 = inst_34958;
var inst_34931 = inst_34957;
var inst_34932 = inst_34959;
var inst_34933 = (0);
var state_34996__$1 = (function (){var statearr_35209 = state_34996;
(statearr_35209[(9)] = inst_34931);

(statearr_35209[(11)] = inst_34933);

(statearr_35209[(20)] = inst_34930);

(statearr_35209[(21)] = inst_34932);

return statearr_35209;
})();
var statearr_35214_37542 = state_34996__$1;
(statearr_35214_37542[(2)] = null);

(statearr_35214_37542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (41))){
var inst_34951 = (state_34996[(25)]);
var inst_34970 = (state_34996[(2)]);
var inst_34972 = cljs.core.next(inst_34951);
var inst_34930 = inst_34972;
var inst_34931 = null;
var inst_34932 = (0);
var inst_34933 = (0);
var state_34996__$1 = (function (){var statearr_35221 = state_34996;
(statearr_35221[(9)] = inst_34931);

(statearr_35221[(11)] = inst_34933);

(statearr_35221[(20)] = inst_34930);

(statearr_35221[(21)] = inst_34932);

(statearr_35221[(27)] = inst_34970);

return statearr_35221;
})();
var statearr_35224_37553 = state_34996__$1;
(statearr_35224_37553[(2)] = null);

(statearr_35224_37553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (43))){
var state_34996__$1 = state_34996;
var statearr_35230_37555 = state_34996__$1;
(statearr_35230_37555[(2)] = null);

(statearr_35230_37555[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (29))){
var inst_34980 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35238_37560 = state_34996__$1;
(statearr_35238_37560[(2)] = inst_34980);

(statearr_35238_37560[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (44))){
var inst_34989 = (state_34996[(2)]);
var state_34996__$1 = (function (){var statearr_35243 = state_34996;
(statearr_35243[(28)] = inst_34989);

return statearr_35243;
})();
var statearr_35246_37565 = state_34996__$1;
(statearr_35246_37565[(2)] = null);

(statearr_35246_37565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (6))){
var inst_34922 = (state_34996[(29)]);
var inst_34921 = cljs.core.deref(cs);
var inst_34922__$1 = cljs.core.keys(inst_34921);
var inst_34923 = cljs.core.count(inst_34922__$1);
var inst_34924 = cljs.core.reset_BANG_(dctr,inst_34923);
var inst_34929 = cljs.core.seq(inst_34922__$1);
var inst_34930 = inst_34929;
var inst_34931 = null;
var inst_34932 = (0);
var inst_34933 = (0);
var state_34996__$1 = (function (){var statearr_35253 = state_34996;
(statearr_35253[(9)] = inst_34931);

(statearr_35253[(30)] = inst_34924);

(statearr_35253[(11)] = inst_34933);

(statearr_35253[(20)] = inst_34930);

(statearr_35253[(21)] = inst_34932);

(statearr_35253[(29)] = inst_34922__$1);

return statearr_35253;
})();
var statearr_35259_37576 = state_34996__$1;
(statearr_35259_37576[(2)] = null);

(statearr_35259_37576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (28))){
var inst_34951 = (state_34996[(25)]);
var inst_34930 = (state_34996[(20)]);
var inst_34951__$1 = cljs.core.seq(inst_34930);
var state_34996__$1 = (function (){var statearr_35265 = state_34996;
(statearr_35265[(25)] = inst_34951__$1);

return statearr_35265;
})();
if(inst_34951__$1){
var statearr_35267_37580 = state_34996__$1;
(statearr_35267_37580[(1)] = (33));

} else {
var statearr_35271_37582 = state_34996__$1;
(statearr_35271_37582[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (25))){
var inst_34933 = (state_34996[(11)]);
var inst_34932 = (state_34996[(21)]);
var inst_34935 = (inst_34933 < inst_34932);
var inst_34936 = inst_34935;
var state_34996__$1 = state_34996;
if(cljs.core.truth_(inst_34936)){
var statearr_35277_37586 = state_34996__$1;
(statearr_35277_37586[(1)] = (27));

} else {
var statearr_35280_37588 = state_34996__$1;
(statearr_35280_37588[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (34))){
var state_34996__$1 = state_34996;
var statearr_35297_37592 = state_34996__$1;
(statearr_35297_37592[(2)] = null);

(statearr_35297_37592[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (17))){
var state_34996__$1 = state_34996;
var statearr_35303_37594 = state_34996__$1;
(statearr_35303_37594[(2)] = null);

(statearr_35303_37594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (3))){
var inst_34994 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34996__$1,inst_34994);
} else {
if((state_val_34997 === (12))){
var inst_34917 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35313_37596 = state_34996__$1;
(statearr_35313_37596[(2)] = inst_34917);

(statearr_35313_37596[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (2))){
var state_34996__$1 = state_34996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34996__$1,(4),ch);
} else {
if((state_val_34997 === (23))){
var state_34996__$1 = state_34996;
var statearr_35325_37597 = state_34996__$1;
(statearr_35325_37597[(2)] = null);

(statearr_35325_37597[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (35))){
var inst_34978 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35326_37598 = state_34996__$1;
(statearr_35326_37598[(2)] = inst_34978);

(statearr_35326_37598[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (19))){
var inst_34883 = (state_34996[(7)]);
var inst_34887 = cljs.core.chunk_first(inst_34883);
var inst_34888 = cljs.core.chunk_rest(inst_34883);
var inst_34889 = cljs.core.count(inst_34887);
var inst_34855 = inst_34888;
var inst_34856 = inst_34887;
var inst_34857 = inst_34889;
var inst_34858 = (0);
var state_34996__$1 = (function (){var statearr_35327 = state_34996;
(statearr_35327[(13)] = inst_34857);

(statearr_35327[(14)] = inst_34856);

(statearr_35327[(15)] = inst_34858);

(statearr_35327[(16)] = inst_34855);

return statearr_35327;
})();
var statearr_35328_37608 = state_34996__$1;
(statearr_35328_37608[(2)] = null);

(statearr_35328_37608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (11))){
var inst_34883 = (state_34996[(7)]);
var inst_34855 = (state_34996[(16)]);
var inst_34883__$1 = cljs.core.seq(inst_34855);
var state_34996__$1 = (function (){var statearr_35329 = state_34996;
(statearr_35329[(7)] = inst_34883__$1);

return statearr_35329;
})();
if(inst_34883__$1){
var statearr_35330_37612 = state_34996__$1;
(statearr_35330_37612[(1)] = (16));

} else {
var statearr_35331_37613 = state_34996__$1;
(statearr_35331_37613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (9))){
var inst_34919 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35333_37615 = state_34996__$1;
(statearr_35333_37615[(2)] = inst_34919);

(statearr_35333_37615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34996__$1 = (function (){var statearr_35335 = state_34996;
(statearr_35335[(13)] = inst_34857);

(statearr_35335[(14)] = inst_34856);

(statearr_35335[(15)] = inst_34858);

(statearr_35335[(16)] = inst_34855);

return statearr_35335;
})();
var statearr_35336_37624 = state_34996__$1;
(statearr_35336_37624[(2)] = null);

(statearr_35336_37624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (14))){
var state_34996__$1 = state_34996;
var statearr_35337_37626 = state_34996__$1;
(statearr_35337_37626[(2)] = null);

(statearr_35337_37626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (45))){
var inst_34986 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35340_37627 = state_34996__$1;
(statearr_35340_37627[(2)] = inst_34986);

(statearr_35340_37627[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (26))){
var inst_34922 = (state_34996[(29)]);
var inst_34982 = (state_34996[(2)]);
var inst_34983 = cljs.core.seq(inst_34922);
var state_34996__$1 = (function (){var statearr_35346 = state_34996;
(statearr_35346[(31)] = inst_34982);

return statearr_35346;
})();
if(inst_34983){
var statearr_35347_37634 = state_34996__$1;
(statearr_35347_37634[(1)] = (42));

} else {
var statearr_35348_37636 = state_34996__$1;
(statearr_35348_37636[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (16))){
var inst_34883 = (state_34996[(7)]);
var inst_34885 = cljs.core.chunked_seq_QMARK_(inst_34883);
var state_34996__$1 = state_34996;
if(inst_34885){
var statearr_35351_37638 = state_34996__$1;
(statearr_35351_37638[(1)] = (19));

} else {
var statearr_35354_37639 = state_34996__$1;
(statearr_35354_37639[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (38))){
var inst_34975 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35355_37645 = state_34996__$1;
(statearr_35355_37645[(2)] = inst_34975);

(statearr_35355_37645[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (30))){
var state_34996__$1 = state_34996;
var statearr_35357_37646 = state_34996__$1;
(statearr_35357_37646[(2)] = null);

(statearr_35357_37646[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (10))){
var inst_34856 = (state_34996[(14)]);
var inst_34858 = (state_34996[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34996__$1 = (function (){var statearr_35367 = state_34996;
(statearr_35367[(26)] = inst_34867);

return statearr_35367;
})();
if(cljs.core.truth_(inst_34869)){
var statearr_35369_37649 = state_34996__$1;
(statearr_35369_37649[(1)] = (13));

} else {
var statearr_35373_37650 = state_34996__$1;
(statearr_35373_37650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (18))){
var inst_34915 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35377_37651 = state_34996__$1;
(statearr_35377_37651[(2)] = inst_34915);

(statearr_35377_37651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (42))){
var state_34996__$1 = state_34996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34996__$1,(45),dchan);
} else {
if((state_val_34997 === (37))){
var inst_34951 = (state_34996[(25)]);
var inst_34846 = (state_34996[(10)]);
var inst_34963 = (state_34996[(23)]);
var inst_34963__$1 = cljs.core.first(inst_34951);
var inst_34964 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34963__$1,inst_34846,done);
var state_34996__$1 = (function (){var statearr_35380 = state_34996;
(statearr_35380[(23)] = inst_34963__$1);

return statearr_35380;
})();
if(cljs.core.truth_(inst_34964)){
var statearr_35381_37656 = state_34996__$1;
(statearr_35381_37656[(1)] = (39));

} else {
var statearr_35382_37660 = state_34996__$1;
(statearr_35382_37660[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (8))){
var inst_34857 = (state_34996[(13)]);
var inst_34858 = (state_34996[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34996__$1 = state_34996;
if(cljs.core.truth_(inst_34861)){
var statearr_35389_37661 = state_34996__$1;
(statearr_35389_37661[(1)] = (10));

} else {
var statearr_35391_37663 = state_34996__$1;
(statearr_35391_37663[(1)] = (11));

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
var statearr_35396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35396[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35396[(1)] = (1));

return statearr_35396;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34996){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34996);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35397){if((e35397 instanceof Object)){
var ex__34210__auto__ = e35397;
var statearr_35399_37665 = state_34996;
(statearr_35399_37665[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35397;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37666 = state_34996;
state_34996 = G__37666;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34996){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35409 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35409[(6)] = c__34274__auto___37451);

return statearr_35409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__35416 = arguments.length;
switch (G__35416) {
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
var len__4789__auto___37713 = arguments.length;
var i__4790__auto___37714 = (0);
while(true){
if((i__4790__auto___37714 < len__4789__auto___37713)){
args__4795__auto__.push((arguments[i__4790__auto___37714]));

var G__37715 = (i__4790__auto___37714 + (1));
i__4790__auto___37714 = G__37715;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35563){
var map__35564 = p__35563;
var map__35564__$1 = (((((!((map__35564 == null))))?(((((map__35564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35564):map__35564);
var opts = map__35564__$1;
var statearr_35566_37724 = state;
(statearr_35566_37724[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35567_37725 = state;
(statearr_35567_37725[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35568_37727 = state;
(statearr_35568_37727[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35545){
var G__35546 = cljs.core.first(seq35545);
var seq35545__$1 = cljs.core.next(seq35545);
var G__35547 = cljs.core.first(seq35545__$1);
var seq35545__$2 = cljs.core.next(seq35545__$1);
var G__35548 = cljs.core.first(seq35545__$2);
var seq35545__$3 = cljs.core.next(seq35545__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35546,G__35547,G__35548,seq35545__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35579 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35580){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35580 = meta35580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35581,meta35580__$1){
var self__ = this;
var _35581__$1 = this;
return (new cljs.core.async.t_cljs$core$async35579(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35580__$1));
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35581){
var self__ = this;
var _35581__$1 = this;
return self__.meta35580;
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35579.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35580","meta35580",1935752774,null)], null);
}));

(cljs.core.async.t_cljs$core$async35579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35579");

(cljs.core.async.t_cljs$core$async35579.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35579.
 */
cljs.core.async.__GT_t_cljs$core$async35579 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35579(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35580){
return (new cljs.core.async.t_cljs$core$async35579(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35580));
});

}

return (new cljs.core.async.t_cljs$core$async35579(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35730){
var state_val_35731 = (state_35730[(1)]);
if((state_val_35731 === (7))){
var inst_35613 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35734_37768 = state_35730__$1;
(statearr_35734_37768[(2)] = inst_35613);

(statearr_35734_37768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (20))){
var inst_35625 = (state_35730[(7)]);
var state_35730__$1 = state_35730;
var statearr_35736_37773 = state_35730__$1;
(statearr_35736_37773[(2)] = inst_35625);

(statearr_35736_37773[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (27))){
var state_35730__$1 = state_35730;
var statearr_35737_37774 = state_35730__$1;
(statearr_35737_37774[(2)] = null);

(statearr_35737_37774[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (1))){
var inst_35599 = (state_35730[(8)]);
var inst_35599__$1 = calc_state();
var inst_35601 = (inst_35599__$1 == null);
var inst_35602 = cljs.core.not(inst_35601);
var state_35730__$1 = (function (){var statearr_35740 = state_35730;
(statearr_35740[(8)] = inst_35599__$1);

return statearr_35740;
})();
if(inst_35602){
var statearr_35742_37779 = state_35730__$1;
(statearr_35742_37779[(1)] = (2));

} else {
var statearr_35743_37780 = state_35730__$1;
(statearr_35743_37780[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (24))){
var inst_35683 = (state_35730[(9)]);
var inst_35650 = (state_35730[(10)]);
var inst_35660 = (state_35730[(11)]);
var inst_35683__$1 = (inst_35650.cljs$core$IFn$_invoke$arity$1 ? inst_35650.cljs$core$IFn$_invoke$arity$1(inst_35660) : inst_35650.call(null,inst_35660));
var state_35730__$1 = (function (){var statearr_35745 = state_35730;
(statearr_35745[(9)] = inst_35683__$1);

return statearr_35745;
})();
if(cljs.core.truth_(inst_35683__$1)){
var statearr_35746_37787 = state_35730__$1;
(statearr_35746_37787[(1)] = (29));

} else {
var statearr_35748_37788 = state_35730__$1;
(statearr_35748_37788[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (4))){
var inst_35616 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
if(cljs.core.truth_(inst_35616)){
var statearr_35751_37790 = state_35730__$1;
(statearr_35751_37790[(1)] = (8));

} else {
var statearr_35752_37792 = state_35730__$1;
(statearr_35752_37792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (15))){
var inst_35644 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
if(cljs.core.truth_(inst_35644)){
var statearr_35754_37796 = state_35730__$1;
(statearr_35754_37796[(1)] = (19));

} else {
var statearr_35755_37797 = state_35730__$1;
(statearr_35755_37797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (21))){
var inst_35649 = (state_35730[(12)]);
var inst_35649__$1 = (state_35730[(2)]);
var inst_35650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35649__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35649__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35649__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35730__$1 = (function (){var statearr_35756 = state_35730;
(statearr_35756[(10)] = inst_35650);

(statearr_35756[(12)] = inst_35649__$1);

(statearr_35756[(13)] = inst_35651);

return statearr_35756;
})();
return cljs.core.async.ioc_alts_BANG_(state_35730__$1,(22),inst_35652);
} else {
if((state_val_35731 === (31))){
var inst_35692 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
if(cljs.core.truth_(inst_35692)){
var statearr_35758_37806 = state_35730__$1;
(statearr_35758_37806[(1)] = (32));

} else {
var statearr_35761_37807 = state_35730__$1;
(statearr_35761_37807[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (32))){
var inst_35659 = (state_35730[(14)]);
var state_35730__$1 = state_35730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35730__$1,(35),out,inst_35659);
} else {
if((state_val_35731 === (33))){
var inst_35649 = (state_35730[(12)]);
var inst_35625 = inst_35649;
var state_35730__$1 = (function (){var statearr_35765 = state_35730;
(statearr_35765[(7)] = inst_35625);

return statearr_35765;
})();
var statearr_35766_37812 = state_35730__$1;
(statearr_35766_37812[(2)] = null);

(statearr_35766_37812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (13))){
var inst_35625 = (state_35730[(7)]);
var inst_35633 = inst_35625.cljs$lang$protocol_mask$partition0$;
var inst_35634 = (inst_35633 & (64));
var inst_35635 = inst_35625.cljs$core$ISeq$;
var inst_35636 = (cljs.core.PROTOCOL_SENTINEL === inst_35635);
var inst_35637 = ((inst_35634) || (inst_35636));
var state_35730__$1 = state_35730;
if(cljs.core.truth_(inst_35637)){
var statearr_35770_37817 = state_35730__$1;
(statearr_35770_37817[(1)] = (16));

} else {
var statearr_35771_37819 = state_35730__$1;
(statearr_35771_37819[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (22))){
var inst_35659 = (state_35730[(14)]);
var inst_35660 = (state_35730[(11)]);
var inst_35658 = (state_35730[(2)]);
var inst_35659__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35658,(0),null);
var inst_35660__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35658,(1),null);
var inst_35663 = (inst_35659__$1 == null);
var inst_35664 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35660__$1,change);
var inst_35666 = ((inst_35663) || (inst_35664));
var state_35730__$1 = (function (){var statearr_35776 = state_35730;
(statearr_35776[(14)] = inst_35659__$1);

(statearr_35776[(11)] = inst_35660__$1);

return statearr_35776;
})();
if(cljs.core.truth_(inst_35666)){
var statearr_35778_37827 = state_35730__$1;
(statearr_35778_37827[(1)] = (23));

} else {
var statearr_35780_37828 = state_35730__$1;
(statearr_35780_37828[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (36))){
var inst_35649 = (state_35730[(12)]);
var inst_35625 = inst_35649;
var state_35730__$1 = (function (){var statearr_35784 = state_35730;
(statearr_35784[(7)] = inst_35625);

return statearr_35784;
})();
var statearr_35785_37829 = state_35730__$1;
(statearr_35785_37829[(2)] = null);

(statearr_35785_37829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (29))){
var inst_35683 = (state_35730[(9)]);
var state_35730__$1 = state_35730;
var statearr_35787_37831 = state_35730__$1;
(statearr_35787_37831[(2)] = inst_35683);

(statearr_35787_37831[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (6))){
var state_35730__$1 = state_35730;
var statearr_35790_37832 = state_35730__$1;
(statearr_35790_37832[(2)] = false);

(statearr_35790_37832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (28))){
var inst_35679 = (state_35730[(2)]);
var inst_35680 = calc_state();
var inst_35625 = inst_35680;
var state_35730__$1 = (function (){var statearr_35791 = state_35730;
(statearr_35791[(15)] = inst_35679);

(statearr_35791[(7)] = inst_35625);

return statearr_35791;
})();
var statearr_35796_37836 = state_35730__$1;
(statearr_35796_37836[(2)] = null);

(statearr_35796_37836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (25))){
var inst_35721 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35799_37839 = state_35730__$1;
(statearr_35799_37839[(2)] = inst_35721);

(statearr_35799_37839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (34))){
var inst_35717 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35800_37841 = state_35730__$1;
(statearr_35800_37841[(2)] = inst_35717);

(statearr_35800_37841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (17))){
var state_35730__$1 = state_35730;
var statearr_35801_37844 = state_35730__$1;
(statearr_35801_37844[(2)] = false);

(statearr_35801_37844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (3))){
var state_35730__$1 = state_35730;
var statearr_35802_37847 = state_35730__$1;
(statearr_35802_37847[(2)] = false);

(statearr_35802_37847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (12))){
var inst_35723 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35730__$1,inst_35723);
} else {
if((state_val_35731 === (2))){
var inst_35599 = (state_35730[(8)]);
var inst_35605 = inst_35599.cljs$lang$protocol_mask$partition0$;
var inst_35606 = (inst_35605 & (64));
var inst_35607 = inst_35599.cljs$core$ISeq$;
var inst_35608 = (cljs.core.PROTOCOL_SENTINEL === inst_35607);
var inst_35609 = ((inst_35606) || (inst_35608));
var state_35730__$1 = state_35730;
if(cljs.core.truth_(inst_35609)){
var statearr_35806_37851 = state_35730__$1;
(statearr_35806_37851[(1)] = (5));

} else {
var statearr_35807_37852 = state_35730__$1;
(statearr_35807_37852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (23))){
var inst_35659 = (state_35730[(14)]);
var inst_35670 = (inst_35659 == null);
var state_35730__$1 = state_35730;
if(cljs.core.truth_(inst_35670)){
var statearr_35811_37855 = state_35730__$1;
(statearr_35811_37855[(1)] = (26));

} else {
var statearr_35813_37856 = state_35730__$1;
(statearr_35813_37856[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (35))){
var inst_35696 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
if(cljs.core.truth_(inst_35696)){
var statearr_35814_37858 = state_35730__$1;
(statearr_35814_37858[(1)] = (36));

} else {
var statearr_35815_37859 = state_35730__$1;
(statearr_35815_37859[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (19))){
var inst_35625 = (state_35730[(7)]);
var inst_35646 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35625);
var state_35730__$1 = state_35730;
var statearr_35818_37862 = state_35730__$1;
(statearr_35818_37862[(2)] = inst_35646);

(statearr_35818_37862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (11))){
var inst_35625 = (state_35730[(7)]);
var inst_35630 = (inst_35625 == null);
var inst_35631 = cljs.core.not(inst_35630);
var state_35730__$1 = state_35730;
if(inst_35631){
var statearr_35820_37866 = state_35730__$1;
(statearr_35820_37866[(1)] = (13));

} else {
var statearr_35822_37867 = state_35730__$1;
(statearr_35822_37867[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (9))){
var inst_35599 = (state_35730[(8)]);
var state_35730__$1 = state_35730;
var statearr_35826_37872 = state_35730__$1;
(statearr_35826_37872[(2)] = inst_35599);

(statearr_35826_37872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (5))){
var state_35730__$1 = state_35730;
var statearr_35827_37875 = state_35730__$1;
(statearr_35827_37875[(2)] = true);

(statearr_35827_37875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (14))){
var state_35730__$1 = state_35730;
var statearr_35828_37881 = state_35730__$1;
(statearr_35828_37881[(2)] = false);

(statearr_35828_37881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (26))){
var inst_35660 = (state_35730[(11)]);
var inst_35676 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35660);
var state_35730__$1 = state_35730;
var statearr_35834_37884 = state_35730__$1;
(statearr_35834_37884[(2)] = inst_35676);

(statearr_35834_37884[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (16))){
var state_35730__$1 = state_35730;
var statearr_35837_37885 = state_35730__$1;
(statearr_35837_37885[(2)] = true);

(statearr_35837_37885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (38))){
var inst_35712 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35841_37890 = state_35730__$1;
(statearr_35841_37890[(2)] = inst_35712);

(statearr_35841_37890[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (30))){
var inst_35650 = (state_35730[(10)]);
var inst_35660 = (state_35730[(11)]);
var inst_35651 = (state_35730[(13)]);
var inst_35687 = cljs.core.empty_QMARK_(inst_35650);
var inst_35688 = (inst_35651.cljs$core$IFn$_invoke$arity$1 ? inst_35651.cljs$core$IFn$_invoke$arity$1(inst_35660) : inst_35651.call(null,inst_35660));
var inst_35689 = cljs.core.not(inst_35688);
var inst_35690 = ((inst_35687) && (inst_35689));
var state_35730__$1 = state_35730;
var statearr_35846_37893 = state_35730__$1;
(statearr_35846_37893[(2)] = inst_35690);

(statearr_35846_37893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (10))){
var inst_35599 = (state_35730[(8)]);
var inst_35621 = (state_35730[(2)]);
var inst_35622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35621,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35621,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35621,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35625 = inst_35599;
var state_35730__$1 = (function (){var statearr_35850 = state_35730;
(statearr_35850[(7)] = inst_35625);

(statearr_35850[(16)] = inst_35624);

(statearr_35850[(17)] = inst_35623);

(statearr_35850[(18)] = inst_35622);

return statearr_35850;
})();
var statearr_35851_37898 = state_35730__$1;
(statearr_35851_37898[(2)] = null);

(statearr_35851_37898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (18))){
var inst_35641 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35854_37901 = state_35730__$1;
(statearr_35854_37901[(2)] = inst_35641);

(statearr_35854_37901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (37))){
var state_35730__$1 = state_35730;
var statearr_35856_37904 = state_35730__$1;
(statearr_35856_37904[(2)] = null);

(statearr_35856_37904[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (8))){
var inst_35599 = (state_35730[(8)]);
var inst_35618 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35599);
var state_35730__$1 = state_35730;
var statearr_35858_37905 = state_35730__$1;
(statearr_35858_37905[(2)] = inst_35618);

(statearr_35858_37905[(1)] = (10));


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
var statearr_35862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35862[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35862[(1)] = (1));

return statearr_35862;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35730){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35730);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35863){if((e35863 instanceof Object)){
var ex__34210__auto__ = e35863;
var statearr_35866_37911 = state_35730;
(statearr_35866_37911[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37914 = state_35730;
state_35730 = G__37914;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35730){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35868 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35868[(6)] = c__34274__auto___37766);

return statearr_35868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__35889 = arguments.length;
switch (G__35889) {
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
var G__35911 = arguments.length;
switch (G__35911) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35904_SHARP_){
if(cljs.core.truth_((p1__35904_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35904_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35904_SHARP_.call(null,topic)))){
return p1__35904_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35904_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35919 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35920){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35920 = meta35920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35921,meta35920__$1){
var self__ = this;
var _35921__$1 = this;
return (new cljs.core.async.t_cljs$core$async35919(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35920__$1));
}));

(cljs.core.async.t_cljs$core$async35919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35921){
var self__ = this;
var _35921__$1 = this;
return self__.meta35920;
}));

(cljs.core.async.t_cljs$core$async35919.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35919.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35919.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35919.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35919.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35919.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35920","meta35920",-1730005707,null)], null);
}));

(cljs.core.async.t_cljs$core$async35919.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35919");

(cljs.core.async.t_cljs$core$async35919.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35919");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35919.
 */
cljs.core.async.__GT_t_cljs$core$async35919 = (function cljs$core$async$__GT_t_cljs$core$async35919(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35920){
return (new cljs.core.async.t_cljs$core$async35919(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35920));
});

}

return (new cljs.core.async.t_cljs$core$async35919(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36018){
var state_val_36021 = (state_36018[(1)]);
if((state_val_36021 === (7))){
var inst_36010 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36023_37943 = state_36018__$1;
(statearr_36023_37943[(2)] = inst_36010);

(statearr_36023_37943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (20))){
var state_36018__$1 = state_36018;
var statearr_36024_37944 = state_36018__$1;
(statearr_36024_37944[(2)] = null);

(statearr_36024_37944[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (1))){
var state_36018__$1 = state_36018;
var statearr_36026_37945 = state_36018__$1;
(statearr_36026_37945[(2)] = null);

(statearr_36026_37945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (24))){
var inst_35992 = (state_36018[(7)]);
var inst_36002 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35992);
var state_36018__$1 = state_36018;
var statearr_36029_37946 = state_36018__$1;
(statearr_36029_37946[(2)] = inst_36002);

(statearr_36029_37946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (4))){
var inst_35935 = (state_36018[(8)]);
var inst_35935__$1 = (state_36018[(2)]);
var inst_35936 = (inst_35935__$1 == null);
var state_36018__$1 = (function (){var statearr_36032 = state_36018;
(statearr_36032[(8)] = inst_35935__$1);

return statearr_36032;
})();
if(cljs.core.truth_(inst_35936)){
var statearr_36033_37948 = state_36018__$1;
(statearr_36033_37948[(1)] = (5));

} else {
var statearr_36034_37951 = state_36018__$1;
(statearr_36034_37951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (15))){
var inst_35985 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36035_37952 = state_36018__$1;
(statearr_36035_37952[(2)] = inst_35985);

(statearr_36035_37952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (21))){
var inst_36007 = (state_36018[(2)]);
var state_36018__$1 = (function (){var statearr_36036 = state_36018;
(statearr_36036[(9)] = inst_36007);

return statearr_36036;
})();
var statearr_36037_37953 = state_36018__$1;
(statearr_36037_37953[(2)] = null);

(statearr_36037_37953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (13))){
var inst_35967 = (state_36018[(10)]);
var inst_35969 = cljs.core.chunked_seq_QMARK_(inst_35967);
var state_36018__$1 = state_36018;
if(inst_35969){
var statearr_36038_37958 = state_36018__$1;
(statearr_36038_37958[(1)] = (16));

} else {
var statearr_36039_37959 = state_36018__$1;
(statearr_36039_37959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (22))){
var inst_35998 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
if(cljs.core.truth_(inst_35998)){
var statearr_36040_37960 = state_36018__$1;
(statearr_36040_37960[(1)] = (23));

} else {
var statearr_36041_37961 = state_36018__$1;
(statearr_36041_37961[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (6))){
var inst_35992 = (state_36018[(7)]);
var inst_35994 = (state_36018[(11)]);
var inst_35935 = (state_36018[(8)]);
var inst_35992__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35935) : topic_fn.call(null,inst_35935));
var inst_35993 = cljs.core.deref(mults);
var inst_35994__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35993,inst_35992__$1);
var state_36018__$1 = (function (){var statearr_36042 = state_36018;
(statearr_36042[(7)] = inst_35992__$1);

(statearr_36042[(11)] = inst_35994__$1);

return statearr_36042;
})();
if(cljs.core.truth_(inst_35994__$1)){
var statearr_36047_37967 = state_36018__$1;
(statearr_36047_37967[(1)] = (19));

} else {
var statearr_36048_37968 = state_36018__$1;
(statearr_36048_37968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (25))){
var inst_36004 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36049_37969 = state_36018__$1;
(statearr_36049_37969[(2)] = inst_36004);

(statearr_36049_37969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (17))){
var inst_35967 = (state_36018[(10)]);
var inst_35976 = cljs.core.first(inst_35967);
var inst_35977 = cljs.core.async.muxch_STAR_(inst_35976);
var inst_35978 = cljs.core.async.close_BANG_(inst_35977);
var inst_35979 = cljs.core.next(inst_35967);
var inst_35946 = inst_35979;
var inst_35947 = null;
var inst_35948 = (0);
var inst_35949 = (0);
var state_36018__$1 = (function (){var statearr_36053 = state_36018;
(statearr_36053[(12)] = inst_35948);

(statearr_36053[(13)] = inst_35978);

(statearr_36053[(14)] = inst_35947);

(statearr_36053[(15)] = inst_35949);

(statearr_36053[(16)] = inst_35946);

return statearr_36053;
})();
var statearr_36054_37970 = state_36018__$1;
(statearr_36054_37970[(2)] = null);

(statearr_36054_37970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (3))){
var inst_36012 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36018__$1,inst_36012);
} else {
if((state_val_36021 === (12))){
var inst_35987 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36055_37972 = state_36018__$1;
(statearr_36055_37972[(2)] = inst_35987);

(statearr_36055_37972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (2))){
var state_36018__$1 = state_36018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36018__$1,(4),ch);
} else {
if((state_val_36021 === (23))){
var state_36018__$1 = state_36018;
var statearr_36058_37977 = state_36018__$1;
(statearr_36058_37977[(2)] = null);

(statearr_36058_37977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (19))){
var inst_35994 = (state_36018[(11)]);
var inst_35935 = (state_36018[(8)]);
var inst_35996 = cljs.core.async.muxch_STAR_(inst_35994);
var state_36018__$1 = state_36018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36018__$1,(22),inst_35996,inst_35935);
} else {
if((state_val_36021 === (11))){
var inst_35967 = (state_36018[(10)]);
var inst_35946 = (state_36018[(16)]);
var inst_35967__$1 = cljs.core.seq(inst_35946);
var state_36018__$1 = (function (){var statearr_36062 = state_36018;
(statearr_36062[(10)] = inst_35967__$1);

return statearr_36062;
})();
if(inst_35967__$1){
var statearr_36063_37978 = state_36018__$1;
(statearr_36063_37978[(1)] = (13));

} else {
var statearr_36064_37979 = state_36018__$1;
(statearr_36064_37979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (9))){
var inst_35989 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36066_37981 = state_36018__$1;
(statearr_36066_37981[(2)] = inst_35989);

(statearr_36066_37981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (5))){
var inst_35943 = cljs.core.deref(mults);
var inst_35944 = cljs.core.vals(inst_35943);
var inst_35945 = cljs.core.seq(inst_35944);
var inst_35946 = inst_35945;
var inst_35947 = null;
var inst_35948 = (0);
var inst_35949 = (0);
var state_36018__$1 = (function (){var statearr_36068 = state_36018;
(statearr_36068[(12)] = inst_35948);

(statearr_36068[(14)] = inst_35947);

(statearr_36068[(15)] = inst_35949);

(statearr_36068[(16)] = inst_35946);

return statearr_36068;
})();
var statearr_36069_37984 = state_36018__$1;
(statearr_36069_37984[(2)] = null);

(statearr_36069_37984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (14))){
var state_36018__$1 = state_36018;
var statearr_36073_37985 = state_36018__$1;
(statearr_36073_37985[(2)] = null);

(statearr_36073_37985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (16))){
var inst_35967 = (state_36018[(10)]);
var inst_35971 = cljs.core.chunk_first(inst_35967);
var inst_35972 = cljs.core.chunk_rest(inst_35967);
var inst_35973 = cljs.core.count(inst_35971);
var inst_35946 = inst_35972;
var inst_35947 = inst_35971;
var inst_35948 = inst_35973;
var inst_35949 = (0);
var state_36018__$1 = (function (){var statearr_36076 = state_36018;
(statearr_36076[(12)] = inst_35948);

(statearr_36076[(14)] = inst_35947);

(statearr_36076[(15)] = inst_35949);

(statearr_36076[(16)] = inst_35946);

return statearr_36076;
})();
var statearr_36077_37988 = state_36018__$1;
(statearr_36077_37988[(2)] = null);

(statearr_36077_37988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (10))){
var inst_35948 = (state_36018[(12)]);
var inst_35947 = (state_36018[(14)]);
var inst_35949 = (state_36018[(15)]);
var inst_35946 = (state_36018[(16)]);
var inst_35958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35947,inst_35949);
var inst_35959 = cljs.core.async.muxch_STAR_(inst_35958);
var inst_35960 = cljs.core.async.close_BANG_(inst_35959);
var inst_35961 = (inst_35949 + (1));
var tmp36070 = inst_35948;
var tmp36071 = inst_35947;
var tmp36072 = inst_35946;
var inst_35946__$1 = tmp36072;
var inst_35947__$1 = tmp36071;
var inst_35948__$1 = tmp36070;
var inst_35949__$1 = inst_35961;
var state_36018__$1 = (function (){var statearr_36078 = state_36018;
(statearr_36078[(12)] = inst_35948__$1);

(statearr_36078[(14)] = inst_35947__$1);

(statearr_36078[(17)] = inst_35960);

(statearr_36078[(15)] = inst_35949__$1);

(statearr_36078[(16)] = inst_35946__$1);

return statearr_36078;
})();
var statearr_36080_37991 = state_36018__$1;
(statearr_36080_37991[(2)] = null);

(statearr_36080_37991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (18))){
var inst_35982 = (state_36018[(2)]);
var state_36018__$1 = state_36018;
var statearr_36082_37994 = state_36018__$1;
(statearr_36082_37994[(2)] = inst_35982);

(statearr_36082_37994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (8))){
var inst_35948 = (state_36018[(12)]);
var inst_35949 = (state_36018[(15)]);
var inst_35951 = (inst_35949 < inst_35948);
var inst_35952 = inst_35951;
var state_36018__$1 = state_36018;
if(cljs.core.truth_(inst_35952)){
var statearr_36085_37995 = state_36018__$1;
(statearr_36085_37995[(1)] = (10));

} else {
var statearr_36087_37996 = state_36018__$1;
(statearr_36087_37996[(1)] = (11));

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
var statearr_36093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36093[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36093[(1)] = (1));

return statearr_36093;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36018){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36018);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36094){if((e36094 instanceof Object)){
var ex__34210__auto__ = e36094;
var statearr_36095_37998 = state_36018;
(statearr_36095_37998[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38001 = state_36018;
state_36018 = G__38001;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36101 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36101[(6)] = c__34274__auto___37940);

return statearr_36101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__36109 = arguments.length;
switch (G__36109) {
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
var G__36116 = arguments.length;
switch (G__36116) {
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
var G__36120 = arguments.length;
switch (G__36120) {
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
var c__34274__auto___38013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36177){
var state_val_36178 = (state_36177[(1)]);
if((state_val_36178 === (7))){
var state_36177__$1 = state_36177;
var statearr_36181_38015 = state_36177__$1;
(statearr_36181_38015[(2)] = null);

(statearr_36181_38015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (1))){
var state_36177__$1 = state_36177;
var statearr_36183_38016 = state_36177__$1;
(statearr_36183_38016[(2)] = null);

(statearr_36183_38016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (4))){
var inst_36129 = (state_36177[(7)]);
var inst_36132 = (inst_36129 < cnt);
var state_36177__$1 = state_36177;
if(cljs.core.truth_(inst_36132)){
var statearr_36184_38017 = state_36177__$1;
(statearr_36184_38017[(1)] = (6));

} else {
var statearr_36185_38018 = state_36177__$1;
(statearr_36185_38018[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (15))){
var inst_36171 = (state_36177[(2)]);
var state_36177__$1 = state_36177;
var statearr_36186_38020 = state_36177__$1;
(statearr_36186_38020[(2)] = inst_36171);

(statearr_36186_38020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (13))){
var inst_36164 = cljs.core.async.close_BANG_(out);
var state_36177__$1 = state_36177;
var statearr_36189_38023 = state_36177__$1;
(statearr_36189_38023[(2)] = inst_36164);

(statearr_36189_38023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (6))){
var state_36177__$1 = state_36177;
var statearr_36190_38024 = state_36177__$1;
(statearr_36190_38024[(2)] = null);

(statearr_36190_38024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (3))){
var inst_36173 = (state_36177[(2)]);
var state_36177__$1 = state_36177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36177__$1,inst_36173);
} else {
if((state_val_36178 === (12))){
var inst_36160 = (state_36177[(8)]);
var inst_36160__$1 = (state_36177[(2)]);
var inst_36161 = cljs.core.some(cljs.core.nil_QMARK_,inst_36160__$1);
var state_36177__$1 = (function (){var statearr_36195 = state_36177;
(statearr_36195[(8)] = inst_36160__$1);

return statearr_36195;
})();
if(cljs.core.truth_(inst_36161)){
var statearr_36197_38025 = state_36177__$1;
(statearr_36197_38025[(1)] = (13));

} else {
var statearr_36200_38026 = state_36177__$1;
(statearr_36200_38026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (2))){
var inst_36128 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36129 = (0);
var state_36177__$1 = (function (){var statearr_36206 = state_36177;
(statearr_36206[(7)] = inst_36129);

(statearr_36206[(9)] = inst_36128);

return statearr_36206;
})();
var statearr_36207_38029 = state_36177__$1;
(statearr_36207_38029[(2)] = null);

(statearr_36207_38029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (11))){
var inst_36129 = (state_36177[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36177,(10),Object,null,(9));
var inst_36146 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36129) : chs__$1.call(null,inst_36129));
var inst_36147 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36129) : done.call(null,inst_36129));
var inst_36148 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36146,inst_36147);
var state_36177__$1 = state_36177;
var statearr_36209_38031 = state_36177__$1;
(statearr_36209_38031[(2)] = inst_36148);


cljs.core.async.impl.ioc_helpers.process_exception(state_36177__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (9))){
var inst_36129 = (state_36177[(7)]);
var inst_36150 = (state_36177[(2)]);
var inst_36151 = (inst_36129 + (1));
var inst_36129__$1 = inst_36151;
var state_36177__$1 = (function (){var statearr_36211 = state_36177;
(statearr_36211[(10)] = inst_36150);

(statearr_36211[(7)] = inst_36129__$1);

return statearr_36211;
})();
var statearr_36212_38034 = state_36177__$1;
(statearr_36212_38034[(2)] = null);

(statearr_36212_38034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (5))){
var inst_36158 = (state_36177[(2)]);
var state_36177__$1 = (function (){var statearr_36214 = state_36177;
(statearr_36214[(11)] = inst_36158);

return statearr_36214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36177__$1,(12),dchan);
} else {
if((state_val_36178 === (14))){
var inst_36160 = (state_36177[(8)]);
var inst_36166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36160);
var state_36177__$1 = state_36177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36177__$1,(16),out,inst_36166);
} else {
if((state_val_36178 === (16))){
var inst_36168 = (state_36177[(2)]);
var state_36177__$1 = (function (){var statearr_36216 = state_36177;
(statearr_36216[(12)] = inst_36168);

return statearr_36216;
})();
var statearr_36218_38036 = state_36177__$1;
(statearr_36218_38036[(2)] = null);

(statearr_36218_38036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (10))){
var inst_36141 = (state_36177[(2)]);
var inst_36142 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36177__$1 = (function (){var statearr_36219 = state_36177;
(statearr_36219[(13)] = inst_36141);

return statearr_36219;
})();
var statearr_36220_38039 = state_36177__$1;
(statearr_36220_38039[(2)] = inst_36142);


cljs.core.async.impl.ioc_helpers.process_exception(state_36177__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36178 === (8))){
var inst_36156 = (state_36177[(2)]);
var state_36177__$1 = state_36177;
var statearr_36223_38041 = state_36177__$1;
(statearr_36223_38041[(2)] = inst_36156);

(statearr_36223_38041[(1)] = (5));


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
var statearr_36224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36224[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36224[(1)] = (1));

return statearr_36224;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36177){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36177);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36225){if((e36225 instanceof Object)){
var ex__34210__auto__ = e36225;
var statearr_36226_38043 = state_36177;
(statearr_36226_38043[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38046 = state_36177;
state_36177 = G__38046;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36229 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36229[(6)] = c__34274__auto___38013);

return statearr_36229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__36249 = arguments.length;
switch (G__36249) {
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
var c__34274__auto___38049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36287){
var state_val_36288 = (state_36287[(1)]);
if((state_val_36288 === (7))){
var inst_36266 = (state_36287[(7)]);
var inst_36265 = (state_36287[(8)]);
var inst_36265__$1 = (state_36287[(2)]);
var inst_36266__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36265__$1,(0),null);
var inst_36267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36265__$1,(1),null);
var inst_36268 = (inst_36266__$1 == null);
var state_36287__$1 = (function (){var statearr_36297 = state_36287;
(statearr_36297[(7)] = inst_36266__$1);

(statearr_36297[(9)] = inst_36267);

(statearr_36297[(8)] = inst_36265__$1);

return statearr_36297;
})();
if(cljs.core.truth_(inst_36268)){
var statearr_36300_38052 = state_36287__$1;
(statearr_36300_38052[(1)] = (8));

} else {
var statearr_36301_38053 = state_36287__$1;
(statearr_36301_38053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (1))){
var inst_36253 = cljs.core.vec(chs);
var inst_36254 = inst_36253;
var state_36287__$1 = (function (){var statearr_36302 = state_36287;
(statearr_36302[(10)] = inst_36254);

return statearr_36302;
})();
var statearr_36303_38054 = state_36287__$1;
(statearr_36303_38054[(2)] = null);

(statearr_36303_38054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (4))){
var inst_36254 = (state_36287[(10)]);
var state_36287__$1 = state_36287;
return cljs.core.async.ioc_alts_BANG_(state_36287__$1,(7),inst_36254);
} else {
if((state_val_36288 === (6))){
var inst_36283 = (state_36287[(2)]);
var state_36287__$1 = state_36287;
var statearr_36306_38055 = state_36287__$1;
(statearr_36306_38055[(2)] = inst_36283);

(statearr_36306_38055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (3))){
var inst_36285 = (state_36287[(2)]);
var state_36287__$1 = state_36287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36287__$1,inst_36285);
} else {
if((state_val_36288 === (2))){
var inst_36254 = (state_36287[(10)]);
var inst_36257 = cljs.core.count(inst_36254);
var inst_36258 = (inst_36257 > (0));
var state_36287__$1 = state_36287;
if(cljs.core.truth_(inst_36258)){
var statearr_36309_38057 = state_36287__$1;
(statearr_36309_38057[(1)] = (4));

} else {
var statearr_36310_38058 = state_36287__$1;
(statearr_36310_38058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (11))){
var inst_36254 = (state_36287[(10)]);
var inst_36275 = (state_36287[(2)]);
var tmp36308 = inst_36254;
var inst_36254__$1 = tmp36308;
var state_36287__$1 = (function (){var statearr_36312 = state_36287;
(statearr_36312[(10)] = inst_36254__$1);

(statearr_36312[(11)] = inst_36275);

return statearr_36312;
})();
var statearr_36313_38060 = state_36287__$1;
(statearr_36313_38060[(2)] = null);

(statearr_36313_38060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (9))){
var inst_36266 = (state_36287[(7)]);
var state_36287__$1 = state_36287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36287__$1,(11),out,inst_36266);
} else {
if((state_val_36288 === (5))){
var inst_36280 = cljs.core.async.close_BANG_(out);
var state_36287__$1 = state_36287;
var statearr_36318_38062 = state_36287__$1;
(statearr_36318_38062[(2)] = inst_36280);

(statearr_36318_38062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (10))){
var inst_36278 = (state_36287[(2)]);
var state_36287__$1 = state_36287;
var statearr_36320_38063 = state_36287__$1;
(statearr_36320_38063[(2)] = inst_36278);

(statearr_36320_38063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (8))){
var inst_36254 = (state_36287[(10)]);
var inst_36266 = (state_36287[(7)]);
var inst_36267 = (state_36287[(9)]);
var inst_36265 = (state_36287[(8)]);
var inst_36270 = (function (){var cs = inst_36254;
var vec__36261 = inst_36265;
var v = inst_36266;
var c = inst_36267;
return (function (p1__36230_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36230_SHARP_);
});
})();
var inst_36271 = cljs.core.filterv(inst_36270,inst_36254);
var inst_36254__$1 = inst_36271;
var state_36287__$1 = (function (){var statearr_36329 = state_36287;
(statearr_36329[(10)] = inst_36254__$1);

return statearr_36329;
})();
var statearr_36331_38067 = state_36287__$1;
(statearr_36331_38067[(2)] = null);

(statearr_36331_38067[(1)] = (2));


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
var statearr_36333 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36333[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36333[(1)] = (1));

return statearr_36333;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36287){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36287);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36334){if((e36334 instanceof Object)){
var ex__34210__auto__ = e36334;
var statearr_36335_38070 = state_36287;
(statearr_36335_38070[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38072 = state_36287;
state_36287 = G__38072;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36340 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36340[(6)] = c__34274__auto___38049);

return statearr_36340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__36354 = arguments.length;
switch (G__36354) {
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
var c__34274__auto___38077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36382){
var state_val_36383 = (state_36382[(1)]);
if((state_val_36383 === (7))){
var inst_36364 = (state_36382[(7)]);
var inst_36364__$1 = (state_36382[(2)]);
var inst_36365 = (inst_36364__$1 == null);
var inst_36366 = cljs.core.not(inst_36365);
var state_36382__$1 = (function (){var statearr_36388 = state_36382;
(statearr_36388[(7)] = inst_36364__$1);

return statearr_36388;
})();
if(inst_36366){
var statearr_36389_38079 = state_36382__$1;
(statearr_36389_38079[(1)] = (8));

} else {
var statearr_36391_38080 = state_36382__$1;
(statearr_36391_38080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (1))){
var inst_36359 = (0);
var state_36382__$1 = (function (){var statearr_36392 = state_36382;
(statearr_36392[(8)] = inst_36359);

return statearr_36392;
})();
var statearr_36394_38083 = state_36382__$1;
(statearr_36394_38083[(2)] = null);

(statearr_36394_38083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (4))){
var state_36382__$1 = state_36382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36382__$1,(7),ch);
} else {
if((state_val_36383 === (6))){
var inst_36377 = (state_36382[(2)]);
var state_36382__$1 = state_36382;
var statearr_36396_38084 = state_36382__$1;
(statearr_36396_38084[(2)] = inst_36377);

(statearr_36396_38084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (3))){
var inst_36379 = (state_36382[(2)]);
var inst_36380 = cljs.core.async.close_BANG_(out);
var state_36382__$1 = (function (){var statearr_36399 = state_36382;
(statearr_36399[(9)] = inst_36379);

return statearr_36399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36382__$1,inst_36380);
} else {
if((state_val_36383 === (2))){
var inst_36359 = (state_36382[(8)]);
var inst_36361 = (inst_36359 < n);
var state_36382__$1 = state_36382;
if(cljs.core.truth_(inst_36361)){
var statearr_36402_38088 = state_36382__$1;
(statearr_36402_38088[(1)] = (4));

} else {
var statearr_36403_38089 = state_36382__$1;
(statearr_36403_38089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (11))){
var inst_36359 = (state_36382[(8)]);
var inst_36369 = (state_36382[(2)]);
var inst_36370 = (inst_36359 + (1));
var inst_36359__$1 = inst_36370;
var state_36382__$1 = (function (){var statearr_36404 = state_36382;
(statearr_36404[(10)] = inst_36369);

(statearr_36404[(8)] = inst_36359__$1);

return statearr_36404;
})();
var statearr_36405_38090 = state_36382__$1;
(statearr_36405_38090[(2)] = null);

(statearr_36405_38090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (9))){
var state_36382__$1 = state_36382;
var statearr_36407_38092 = state_36382__$1;
(statearr_36407_38092[(2)] = null);

(statearr_36407_38092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (5))){
var state_36382__$1 = state_36382;
var statearr_36408_38095 = state_36382__$1;
(statearr_36408_38095[(2)] = null);

(statearr_36408_38095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (10))){
var inst_36374 = (state_36382[(2)]);
var state_36382__$1 = state_36382;
var statearr_36409_38096 = state_36382__$1;
(statearr_36409_38096[(2)] = inst_36374);

(statearr_36409_38096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (8))){
var inst_36364 = (state_36382[(7)]);
var state_36382__$1 = state_36382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36382__$1,(11),out,inst_36364);
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
var statearr_36411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36411[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36411[(1)] = (1));

return statearr_36411;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36382){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36382);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36414){if((e36414 instanceof Object)){
var ex__34210__auto__ = e36414;
var statearr_36417_38098 = state_36382;
(statearr_36417_38098[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36414;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38099 = state_36382;
state_36382 = G__38099;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36418 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36418[(6)] = c__34274__auto___38077);

return statearr_36418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36422 = (function (f,ch,meta36423){
this.f = f;
this.ch = ch;
this.meta36423 = meta36423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36424,meta36423__$1){
var self__ = this;
var _36424__$1 = this;
return (new cljs.core.async.t_cljs$core$async36422(self__.f,self__.ch,meta36423__$1));
}));

(cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36424){
var self__ = this;
var _36424__$1 = this;
return self__.meta36423;
}));

(cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36427 = (function (f,ch,meta36423,_,fn1,meta36428){
this.f = f;
this.ch = ch;
this.meta36423 = meta36423;
this._ = _;
this.fn1 = fn1;
this.meta36428 = meta36428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36429,meta36428__$1){
var self__ = this;
var _36429__$1 = this;
return (new cljs.core.async.t_cljs$core$async36427(self__.f,self__.ch,self__.meta36423,self__._,self__.fn1,meta36428__$1));
}));

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36429){
var self__ = this;
var _36429__$1 = this;
return self__.meta36428;
}));

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36420_SHARP_){
var G__36433 = (((p1__36420_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36420_SHARP_) : self__.f.call(null,p1__36420_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36433) : f1.call(null,G__36433));
});
}));

(cljs.core.async.t_cljs$core$async36427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36423","meta36423",1135376041,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36422","cljs.core.async/t_cljs$core$async36422",-96553192,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36428","meta36428",292341908,null)], null);
}));

(cljs.core.async.t_cljs$core$async36427.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36427");

(cljs.core.async.t_cljs$core$async36427.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36427");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36427.
 */
cljs.core.async.__GT_t_cljs$core$async36427 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36427(f__$1,ch__$1,meta36423__$1,___$2,fn1__$1,meta36428){
return (new cljs.core.async.t_cljs$core$async36427(f__$1,ch__$1,meta36423__$1,___$2,fn1__$1,meta36428));
});

}

return (new cljs.core.async.t_cljs$core$async36427(self__.f,self__.ch,self__.meta36423,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36436 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36436) : self__.f.call(null,G__36436));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36423","meta36423",1135376041,null)], null);
}));

(cljs.core.async.t_cljs$core$async36422.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36422");

(cljs.core.async.t_cljs$core$async36422.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36422");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36422.
 */
cljs.core.async.__GT_t_cljs$core$async36422 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36422(f__$1,ch__$1,meta36423){
return (new cljs.core.async.t_cljs$core$async36422(f__$1,ch__$1,meta36423));
});

}

return (new cljs.core.async.t_cljs$core$async36422(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36440 = (function (f,ch,meta36441){
this.f = f;
this.ch = ch;
this.meta36441 = meta36441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36442,meta36441__$1){
var self__ = this;
var _36442__$1 = this;
return (new cljs.core.async.t_cljs$core$async36440(self__.f,self__.ch,meta36441__$1));
}));

(cljs.core.async.t_cljs$core$async36440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36442){
var self__ = this;
var _36442__$1 = this;
return self__.meta36441;
}));

(cljs.core.async.t_cljs$core$async36440.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36440.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36440.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36441","meta36441",-1650803776,null)], null);
}));

(cljs.core.async.t_cljs$core$async36440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36440");

(cljs.core.async.t_cljs$core$async36440.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36440.
 */
cljs.core.async.__GT_t_cljs$core$async36440 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36440(f__$1,ch__$1,meta36441){
return (new cljs.core.async.t_cljs$core$async36440(f__$1,ch__$1,meta36441));
});

}

return (new cljs.core.async.t_cljs$core$async36440(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36448 = (function (p,ch,meta36449){
this.p = p;
this.ch = ch;
this.meta36449 = meta36449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36450,meta36449__$1){
var self__ = this;
var _36450__$1 = this;
return (new cljs.core.async.t_cljs$core$async36448(self__.p,self__.ch,meta36449__$1));
}));

(cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36450){
var self__ = this;
var _36450__$1 = this;
return self__.meta36449;
}));

(cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36448.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36449","meta36449",-1747461729,null)], null);
}));

(cljs.core.async.t_cljs$core$async36448.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36448");

(cljs.core.async.t_cljs$core$async36448.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36448");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36448.
 */
cljs.core.async.__GT_t_cljs$core$async36448 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36448(p__$1,ch__$1,meta36449){
return (new cljs.core.async.t_cljs$core$async36448(p__$1,ch__$1,meta36449));
});

}

return (new cljs.core.async.t_cljs$core$async36448(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36458 = arguments.length;
switch (G__36458) {
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
var c__34274__auto___38127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36483){
var state_val_36485 = (state_36483[(1)]);
if((state_val_36485 === (7))){
var inst_36479 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
var statearr_36486_38129 = state_36483__$1;
(statearr_36486_38129[(2)] = inst_36479);

(statearr_36486_38129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (1))){
var state_36483__$1 = state_36483;
var statearr_36488_38132 = state_36483__$1;
(statearr_36488_38132[(2)] = null);

(statearr_36488_38132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (4))){
var inst_36463 = (state_36483[(7)]);
var inst_36463__$1 = (state_36483[(2)]);
var inst_36464 = (inst_36463__$1 == null);
var state_36483__$1 = (function (){var statearr_36489 = state_36483;
(statearr_36489[(7)] = inst_36463__$1);

return statearr_36489;
})();
if(cljs.core.truth_(inst_36464)){
var statearr_36490_38134 = state_36483__$1;
(statearr_36490_38134[(1)] = (5));

} else {
var statearr_36492_38138 = state_36483__$1;
(statearr_36492_38138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (6))){
var inst_36463 = (state_36483[(7)]);
var inst_36468 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36463) : p.call(null,inst_36463));
var state_36483__$1 = state_36483;
if(cljs.core.truth_(inst_36468)){
var statearr_36493_38142 = state_36483__$1;
(statearr_36493_38142[(1)] = (8));

} else {
var statearr_36494_38143 = state_36483__$1;
(statearr_36494_38143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (3))){
var inst_36481 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36483__$1,inst_36481);
} else {
if((state_val_36485 === (2))){
var state_36483__$1 = state_36483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36483__$1,(4),ch);
} else {
if((state_val_36485 === (11))){
var inst_36473 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
var statearr_36496_38144 = state_36483__$1;
(statearr_36496_38144[(2)] = inst_36473);

(statearr_36496_38144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (9))){
var state_36483__$1 = state_36483;
var statearr_36497_38146 = state_36483__$1;
(statearr_36497_38146[(2)] = null);

(statearr_36497_38146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (5))){
var inst_36466 = cljs.core.async.close_BANG_(out);
var state_36483__$1 = state_36483;
var statearr_36499_38147 = state_36483__$1;
(statearr_36499_38147[(2)] = inst_36466);

(statearr_36499_38147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (10))){
var inst_36476 = (state_36483[(2)]);
var state_36483__$1 = (function (){var statearr_36500 = state_36483;
(statearr_36500[(8)] = inst_36476);

return statearr_36500;
})();
var statearr_36502_38148 = state_36483__$1;
(statearr_36502_38148[(2)] = null);

(statearr_36502_38148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (8))){
var inst_36463 = (state_36483[(7)]);
var state_36483__$1 = state_36483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36483__$1,(11),out,inst_36463);
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
var statearr_36504 = [null,null,null,null,null,null,null,null,null];
(statearr_36504[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36504[(1)] = (1));

return statearr_36504;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36483){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36483);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36506){if((e36506 instanceof Object)){
var ex__34210__auto__ = e36506;
var statearr_36507_38152 = state_36483;
(statearr_36507_38152[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38153 = state_36483;
state_36483 = G__38153;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36508 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36508[(6)] = c__34274__auto___38127);

return statearr_36508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36510 = arguments.length;
switch (G__36510) {
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
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36575){
var state_val_36576 = (state_36575[(1)]);
if((state_val_36576 === (7))){
var inst_36571 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
var statearr_36579_38159 = state_36575__$1;
(statearr_36579_38159[(2)] = inst_36571);

(statearr_36579_38159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (20))){
var inst_36540 = (state_36575[(7)]);
var inst_36552 = (state_36575[(2)]);
var inst_36553 = cljs.core.next(inst_36540);
var inst_36525 = inst_36553;
var inst_36527 = null;
var inst_36528 = (0);
var inst_36529 = (0);
var state_36575__$1 = (function (){var statearr_36580 = state_36575;
(statearr_36580[(8)] = inst_36552);

(statearr_36580[(9)] = inst_36527);

(statearr_36580[(10)] = inst_36525);

(statearr_36580[(11)] = inst_36529);

(statearr_36580[(12)] = inst_36528);

return statearr_36580;
})();
var statearr_36581_38160 = state_36575__$1;
(statearr_36581_38160[(2)] = null);

(statearr_36581_38160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (1))){
var state_36575__$1 = state_36575;
var statearr_36582_38161 = state_36575__$1;
(statearr_36582_38161[(2)] = null);

(statearr_36582_38161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (4))){
var inst_36514 = (state_36575[(13)]);
var inst_36514__$1 = (state_36575[(2)]);
var inst_36515 = (inst_36514__$1 == null);
var state_36575__$1 = (function (){var statearr_36583 = state_36575;
(statearr_36583[(13)] = inst_36514__$1);

return statearr_36583;
})();
if(cljs.core.truth_(inst_36515)){
var statearr_36584_38165 = state_36575__$1;
(statearr_36584_38165[(1)] = (5));

} else {
var statearr_36586_38166 = state_36575__$1;
(statearr_36586_38166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (15))){
var state_36575__$1 = state_36575;
var statearr_36590_38167 = state_36575__$1;
(statearr_36590_38167[(2)] = null);

(statearr_36590_38167[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (21))){
var state_36575__$1 = state_36575;
var statearr_36591_38168 = state_36575__$1;
(statearr_36591_38168[(2)] = null);

(statearr_36591_38168[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (13))){
var inst_36527 = (state_36575[(9)]);
var inst_36525 = (state_36575[(10)]);
var inst_36529 = (state_36575[(11)]);
var inst_36528 = (state_36575[(12)]);
var inst_36536 = (state_36575[(2)]);
var inst_36537 = (inst_36529 + (1));
var tmp36587 = inst_36527;
var tmp36588 = inst_36525;
var tmp36589 = inst_36528;
var inst_36525__$1 = tmp36588;
var inst_36527__$1 = tmp36587;
var inst_36528__$1 = tmp36589;
var inst_36529__$1 = inst_36537;
var state_36575__$1 = (function (){var statearr_36593 = state_36575;
(statearr_36593[(9)] = inst_36527__$1);

(statearr_36593[(14)] = inst_36536);

(statearr_36593[(10)] = inst_36525__$1);

(statearr_36593[(11)] = inst_36529__$1);

(statearr_36593[(12)] = inst_36528__$1);

return statearr_36593;
})();
var statearr_36594_38172 = state_36575__$1;
(statearr_36594_38172[(2)] = null);

(statearr_36594_38172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (22))){
var state_36575__$1 = state_36575;
var statearr_36595_38173 = state_36575__$1;
(statearr_36595_38173[(2)] = null);

(statearr_36595_38173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (6))){
var inst_36514 = (state_36575[(13)]);
var inst_36523 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36514) : f.call(null,inst_36514));
var inst_36524 = cljs.core.seq(inst_36523);
var inst_36525 = inst_36524;
var inst_36527 = null;
var inst_36528 = (0);
var inst_36529 = (0);
var state_36575__$1 = (function (){var statearr_36598 = state_36575;
(statearr_36598[(9)] = inst_36527);

(statearr_36598[(10)] = inst_36525);

(statearr_36598[(11)] = inst_36529);

(statearr_36598[(12)] = inst_36528);

return statearr_36598;
})();
var statearr_36599_38174 = state_36575__$1;
(statearr_36599_38174[(2)] = null);

(statearr_36599_38174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (17))){
var inst_36540 = (state_36575[(7)]);
var inst_36544 = cljs.core.chunk_first(inst_36540);
var inst_36546 = cljs.core.chunk_rest(inst_36540);
var inst_36547 = cljs.core.count(inst_36544);
var inst_36525 = inst_36546;
var inst_36527 = inst_36544;
var inst_36528 = inst_36547;
var inst_36529 = (0);
var state_36575__$1 = (function (){var statearr_36601 = state_36575;
(statearr_36601[(9)] = inst_36527);

(statearr_36601[(10)] = inst_36525);

(statearr_36601[(11)] = inst_36529);

(statearr_36601[(12)] = inst_36528);

return statearr_36601;
})();
var statearr_36602_38176 = state_36575__$1;
(statearr_36602_38176[(2)] = null);

(statearr_36602_38176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (3))){
var inst_36573 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36575__$1,inst_36573);
} else {
if((state_val_36576 === (12))){
var inst_36561 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
var statearr_36604_38177 = state_36575__$1;
(statearr_36604_38177[(2)] = inst_36561);

(statearr_36604_38177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (2))){
var state_36575__$1 = state_36575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36575__$1,(4),in$);
} else {
if((state_val_36576 === (23))){
var inst_36569 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
var statearr_36605_38178 = state_36575__$1;
(statearr_36605_38178[(2)] = inst_36569);

(statearr_36605_38178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (19))){
var inst_36556 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
var statearr_36606_38180 = state_36575__$1;
(statearr_36606_38180[(2)] = inst_36556);

(statearr_36606_38180[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (11))){
var inst_36540 = (state_36575[(7)]);
var inst_36525 = (state_36575[(10)]);
var inst_36540__$1 = cljs.core.seq(inst_36525);
var state_36575__$1 = (function (){var statearr_36608 = state_36575;
(statearr_36608[(7)] = inst_36540__$1);

return statearr_36608;
})();
if(inst_36540__$1){
var statearr_36609_38181 = state_36575__$1;
(statearr_36609_38181[(1)] = (14));

} else {
var statearr_36610_38182 = state_36575__$1;
(statearr_36610_38182[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (9))){
var inst_36563 = (state_36575[(2)]);
var inst_36564 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36575__$1 = (function (){var statearr_36612 = state_36575;
(statearr_36612[(15)] = inst_36563);

return statearr_36612;
})();
if(cljs.core.truth_(inst_36564)){
var statearr_36613_38184 = state_36575__$1;
(statearr_36613_38184[(1)] = (21));

} else {
var statearr_36614_38185 = state_36575__$1;
(statearr_36614_38185[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (5))){
var inst_36517 = cljs.core.async.close_BANG_(out);
var state_36575__$1 = state_36575;
var statearr_36616_38186 = state_36575__$1;
(statearr_36616_38186[(2)] = inst_36517);

(statearr_36616_38186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (14))){
var inst_36540 = (state_36575[(7)]);
var inst_36542 = cljs.core.chunked_seq_QMARK_(inst_36540);
var state_36575__$1 = state_36575;
if(inst_36542){
var statearr_36618_38187 = state_36575__$1;
(statearr_36618_38187[(1)] = (17));

} else {
var statearr_36619_38188 = state_36575__$1;
(statearr_36619_38188[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (16))){
var inst_36559 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
var statearr_36620_38189 = state_36575__$1;
(statearr_36620_38189[(2)] = inst_36559);

(statearr_36620_38189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (10))){
var inst_36527 = (state_36575[(9)]);
var inst_36529 = (state_36575[(11)]);
var inst_36534 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36527,inst_36529);
var state_36575__$1 = state_36575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36575__$1,(13),out,inst_36534);
} else {
if((state_val_36576 === (18))){
var inst_36540 = (state_36575[(7)]);
var inst_36550 = cljs.core.first(inst_36540);
var state_36575__$1 = state_36575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36575__$1,(20),out,inst_36550);
} else {
if((state_val_36576 === (8))){
var inst_36529 = (state_36575[(11)]);
var inst_36528 = (state_36575[(12)]);
var inst_36531 = (inst_36529 < inst_36528);
var inst_36532 = inst_36531;
var state_36575__$1 = state_36575;
if(cljs.core.truth_(inst_36532)){
var statearr_36623_38191 = state_36575__$1;
(statearr_36623_38191[(1)] = (10));

} else {
var statearr_36624_38192 = state_36575__$1;
(statearr_36624_38192[(1)] = (11));

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
var statearr_36626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36626[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36626[(1)] = (1));

return statearr_36626;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36575){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36575);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36627){if((e36627 instanceof Object)){
var ex__34210__auto__ = e36627;
var statearr_36628_38194 = state_36575;
(statearr_36628_38194[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38195 = state_36575;
state_36575 = G__38195;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36575){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36630 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36630[(6)] = c__34274__auto__);

return statearr_36630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36634 = arguments.length;
switch (G__36634) {
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
var G__36639 = arguments.length;
switch (G__36639) {
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
var G__36643 = arguments.length;
switch (G__36643) {
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
var c__34274__auto___38203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36669){
var state_val_36670 = (state_36669[(1)]);
if((state_val_36670 === (7))){
var inst_36664 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36672_38204 = state_36669__$1;
(statearr_36672_38204[(2)] = inst_36664);

(statearr_36672_38204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (1))){
var inst_36645 = null;
var state_36669__$1 = (function (){var statearr_36673 = state_36669;
(statearr_36673[(7)] = inst_36645);

return statearr_36673;
})();
var statearr_36674_38206 = state_36669__$1;
(statearr_36674_38206[(2)] = null);

(statearr_36674_38206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (4))){
var inst_36648 = (state_36669[(8)]);
var inst_36648__$1 = (state_36669[(2)]);
var inst_36649 = (inst_36648__$1 == null);
var inst_36651 = cljs.core.not(inst_36649);
var state_36669__$1 = (function (){var statearr_36677 = state_36669;
(statearr_36677[(8)] = inst_36648__$1);

return statearr_36677;
})();
if(inst_36651){
var statearr_36678_38208 = state_36669__$1;
(statearr_36678_38208[(1)] = (5));

} else {
var statearr_36679_38209 = state_36669__$1;
(statearr_36679_38209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (6))){
var state_36669__$1 = state_36669;
var statearr_36680_38210 = state_36669__$1;
(statearr_36680_38210[(2)] = null);

(statearr_36680_38210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (3))){
var inst_36666 = (state_36669[(2)]);
var inst_36667 = cljs.core.async.close_BANG_(out);
var state_36669__$1 = (function (){var statearr_36682 = state_36669;
(statearr_36682[(9)] = inst_36666);

return statearr_36682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36669__$1,inst_36667);
} else {
if((state_val_36670 === (2))){
var state_36669__$1 = state_36669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36669__$1,(4),ch);
} else {
if((state_val_36670 === (11))){
var inst_36648 = (state_36669[(8)]);
var inst_36658 = (state_36669[(2)]);
var inst_36645 = inst_36648;
var state_36669__$1 = (function (){var statearr_36684 = state_36669;
(statearr_36684[(7)] = inst_36645);

(statearr_36684[(10)] = inst_36658);

return statearr_36684;
})();
var statearr_36685_38212 = state_36669__$1;
(statearr_36685_38212[(2)] = null);

(statearr_36685_38212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (9))){
var inst_36648 = (state_36669[(8)]);
var state_36669__$1 = state_36669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36669__$1,(11),out,inst_36648);
} else {
if((state_val_36670 === (5))){
var inst_36645 = (state_36669[(7)]);
var inst_36648 = (state_36669[(8)]);
var inst_36653 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36648,inst_36645);
var state_36669__$1 = state_36669;
if(inst_36653){
var statearr_36688_38214 = state_36669__$1;
(statearr_36688_38214[(1)] = (8));

} else {
var statearr_36689_38215 = state_36669__$1;
(statearr_36689_38215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (10))){
var inst_36661 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36691_38216 = state_36669__$1;
(statearr_36691_38216[(2)] = inst_36661);

(statearr_36691_38216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (8))){
var inst_36645 = (state_36669[(7)]);
var tmp36687 = inst_36645;
var inst_36645__$1 = tmp36687;
var state_36669__$1 = (function (){var statearr_36695 = state_36669;
(statearr_36695[(7)] = inst_36645__$1);

return statearr_36695;
})();
var statearr_36697_38218 = state_36669__$1;
(statearr_36697_38218[(2)] = null);

(statearr_36697_38218[(1)] = (2));


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
var statearr_36699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36699[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36699[(1)] = (1));

return statearr_36699;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36669){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36669);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36700){if((e36700 instanceof Object)){
var ex__34210__auto__ = e36700;
var statearr_36702_38220 = state_36669;
(statearr_36702_38220[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38221 = state_36669;
state_36669 = G__38221;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36703 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36703[(6)] = c__34274__auto___38203);

return statearr_36703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36707 = arguments.length;
switch (G__36707) {
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
var c__34274__auto___38225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36753){
var state_val_36754 = (state_36753[(1)]);
if((state_val_36754 === (7))){
var inst_36749 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
var statearr_36757_38226 = state_36753__$1;
(statearr_36757_38226[(2)] = inst_36749);

(statearr_36757_38226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (1))){
var inst_36715 = (new Array(n));
var inst_36716 = inst_36715;
var inst_36717 = (0);
var state_36753__$1 = (function (){var statearr_36758 = state_36753;
(statearr_36758[(7)] = inst_36716);

(statearr_36758[(8)] = inst_36717);

return statearr_36758;
})();
var statearr_36759_38228 = state_36753__$1;
(statearr_36759_38228[(2)] = null);

(statearr_36759_38228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (4))){
var inst_36720 = (state_36753[(9)]);
var inst_36720__$1 = (state_36753[(2)]);
var inst_36722 = (inst_36720__$1 == null);
var inst_36723 = cljs.core.not(inst_36722);
var state_36753__$1 = (function (){var statearr_36761 = state_36753;
(statearr_36761[(9)] = inst_36720__$1);

return statearr_36761;
})();
if(inst_36723){
var statearr_36762_38230 = state_36753__$1;
(statearr_36762_38230[(1)] = (5));

} else {
var statearr_36763_38231 = state_36753__$1;
(statearr_36763_38231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (15))){
var inst_36743 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
var statearr_36764_38232 = state_36753__$1;
(statearr_36764_38232[(2)] = inst_36743);

(statearr_36764_38232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (13))){
var state_36753__$1 = state_36753;
var statearr_36765_38233 = state_36753__$1;
(statearr_36765_38233[(2)] = null);

(statearr_36765_38233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (6))){
var inst_36717 = (state_36753[(8)]);
var inst_36739 = (inst_36717 > (0));
var state_36753__$1 = state_36753;
if(cljs.core.truth_(inst_36739)){
var statearr_36766_38235 = state_36753__$1;
(statearr_36766_38235[(1)] = (12));

} else {
var statearr_36767_38236 = state_36753__$1;
(statearr_36767_38236[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (3))){
var inst_36751 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36753__$1,inst_36751);
} else {
if((state_val_36754 === (12))){
var inst_36716 = (state_36753[(7)]);
var inst_36741 = cljs.core.vec(inst_36716);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36753__$1,(15),out,inst_36741);
} else {
if((state_val_36754 === (2))){
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36753__$1,(4),ch);
} else {
if((state_val_36754 === (11))){
var inst_36733 = (state_36753[(2)]);
var inst_36734 = (new Array(n));
var inst_36716 = inst_36734;
var inst_36717 = (0);
var state_36753__$1 = (function (){var statearr_36769 = state_36753;
(statearr_36769[(7)] = inst_36716);

(statearr_36769[(8)] = inst_36717);

(statearr_36769[(10)] = inst_36733);

return statearr_36769;
})();
var statearr_36771_38238 = state_36753__$1;
(statearr_36771_38238[(2)] = null);

(statearr_36771_38238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (9))){
var inst_36716 = (state_36753[(7)]);
var inst_36731 = cljs.core.vec(inst_36716);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36753__$1,(11),out,inst_36731);
} else {
if((state_val_36754 === (5))){
var inst_36720 = (state_36753[(9)]);
var inst_36726 = (state_36753[(11)]);
var inst_36716 = (state_36753[(7)]);
var inst_36717 = (state_36753[(8)]);
var inst_36725 = (inst_36716[inst_36717] = inst_36720);
var inst_36726__$1 = (inst_36717 + (1));
var inst_36727 = (inst_36726__$1 < n);
var state_36753__$1 = (function (){var statearr_36773 = state_36753;
(statearr_36773[(12)] = inst_36725);

(statearr_36773[(11)] = inst_36726__$1);

return statearr_36773;
})();
if(cljs.core.truth_(inst_36727)){
var statearr_36774_38240 = state_36753__$1;
(statearr_36774_38240[(1)] = (8));

} else {
var statearr_36775_38241 = state_36753__$1;
(statearr_36775_38241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (14))){
var inst_36746 = (state_36753[(2)]);
var inst_36747 = cljs.core.async.close_BANG_(out);
var state_36753__$1 = (function (){var statearr_36778 = state_36753;
(statearr_36778[(13)] = inst_36746);

return statearr_36778;
})();
var statearr_36779_38242 = state_36753__$1;
(statearr_36779_38242[(2)] = inst_36747);

(statearr_36779_38242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (10))){
var inst_36737 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
var statearr_36780_38243 = state_36753__$1;
(statearr_36780_38243[(2)] = inst_36737);

(statearr_36780_38243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (8))){
var inst_36726 = (state_36753[(11)]);
var inst_36716 = (state_36753[(7)]);
var tmp36776 = inst_36716;
var inst_36716__$1 = tmp36776;
var inst_36717 = inst_36726;
var state_36753__$1 = (function (){var statearr_36782 = state_36753;
(statearr_36782[(7)] = inst_36716__$1);

(statearr_36782[(8)] = inst_36717);

return statearr_36782;
})();
var statearr_36783_38245 = state_36753__$1;
(statearr_36783_38245[(2)] = null);

(statearr_36783_38245[(1)] = (2));


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
var statearr_36785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36785[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36785[(1)] = (1));

return statearr_36785;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36753){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36753);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36791){if((e36791 instanceof Object)){
var ex__34210__auto__ = e36791;
var statearr_36793_38246 = state_36753;
(statearr_36793_38246[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38247 = state_36753;
state_36753 = G__38247;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36794 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36794[(6)] = c__34274__auto___38225);

return statearr_36794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36798 = arguments.length;
switch (G__36798) {
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
var c__34274__auto___38249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36843){
var state_val_36844 = (state_36843[(1)]);
if((state_val_36844 === (7))){
var inst_36839 = (state_36843[(2)]);
var state_36843__$1 = state_36843;
var statearr_36847_38250 = state_36843__$1;
(statearr_36847_38250[(2)] = inst_36839);

(statearr_36847_38250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (1))){
var inst_36801 = [];
var inst_36802 = inst_36801;
var inst_36803 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36843__$1 = (function (){var statearr_36848 = state_36843;
(statearr_36848[(7)] = inst_36802);

(statearr_36848[(8)] = inst_36803);

return statearr_36848;
})();
var statearr_36849_38251 = state_36843__$1;
(statearr_36849_38251[(2)] = null);

(statearr_36849_38251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (4))){
var inst_36806 = (state_36843[(9)]);
var inst_36806__$1 = (state_36843[(2)]);
var inst_36807 = (inst_36806__$1 == null);
var inst_36808 = cljs.core.not(inst_36807);
var state_36843__$1 = (function (){var statearr_36851 = state_36843;
(statearr_36851[(9)] = inst_36806__$1);

return statearr_36851;
})();
if(inst_36808){
var statearr_36852_38253 = state_36843__$1;
(statearr_36852_38253[(1)] = (5));

} else {
var statearr_36853_38254 = state_36843__$1;
(statearr_36853_38254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (15))){
var inst_36833 = (state_36843[(2)]);
var state_36843__$1 = state_36843;
var statearr_36855_38255 = state_36843__$1;
(statearr_36855_38255[(2)] = inst_36833);

(statearr_36855_38255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (13))){
var state_36843__$1 = state_36843;
var statearr_36856_38256 = state_36843__$1;
(statearr_36856_38256[(2)] = null);

(statearr_36856_38256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (6))){
var inst_36802 = (state_36843[(7)]);
var inst_36828 = inst_36802.length;
var inst_36829 = (inst_36828 > (0));
var state_36843__$1 = state_36843;
if(cljs.core.truth_(inst_36829)){
var statearr_36858_38257 = state_36843__$1;
(statearr_36858_38257[(1)] = (12));

} else {
var statearr_36859_38258 = state_36843__$1;
(statearr_36859_38258[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (3))){
var inst_36841 = (state_36843[(2)]);
var state_36843__$1 = state_36843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36843__$1,inst_36841);
} else {
if((state_val_36844 === (12))){
var inst_36802 = (state_36843[(7)]);
var inst_36831 = cljs.core.vec(inst_36802);
var state_36843__$1 = state_36843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36843__$1,(15),out,inst_36831);
} else {
if((state_val_36844 === (2))){
var state_36843__$1 = state_36843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36843__$1,(4),ch);
} else {
if((state_val_36844 === (11))){
var inst_36810 = (state_36843[(10)]);
var inst_36806 = (state_36843[(9)]);
var inst_36821 = (state_36843[(2)]);
var inst_36822 = [];
var inst_36823 = inst_36822.push(inst_36806);
var inst_36802 = inst_36822;
var inst_36803 = inst_36810;
var state_36843__$1 = (function (){var statearr_36861 = state_36843;
(statearr_36861[(7)] = inst_36802);

(statearr_36861[(8)] = inst_36803);

(statearr_36861[(11)] = inst_36821);

(statearr_36861[(12)] = inst_36823);

return statearr_36861;
})();
var statearr_36863_38261 = state_36843__$1;
(statearr_36863_38261[(2)] = null);

(statearr_36863_38261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (9))){
var inst_36802 = (state_36843[(7)]);
var inst_36819 = cljs.core.vec(inst_36802);
var state_36843__$1 = state_36843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36843__$1,(11),out,inst_36819);
} else {
if((state_val_36844 === (5))){
var inst_36803 = (state_36843[(8)]);
var inst_36810 = (state_36843[(10)]);
var inst_36806 = (state_36843[(9)]);
var inst_36810__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36806) : f.call(null,inst_36806));
var inst_36812 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36810__$1,inst_36803);
var inst_36813 = cljs.core.keyword_identical_QMARK_(inst_36803,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36814 = ((inst_36812) || (inst_36813));
var state_36843__$1 = (function (){var statearr_36865 = state_36843;
(statearr_36865[(10)] = inst_36810__$1);

return statearr_36865;
})();
if(cljs.core.truth_(inst_36814)){
var statearr_36866_38262 = state_36843__$1;
(statearr_36866_38262[(1)] = (8));

} else {
var statearr_36867_38263 = state_36843__$1;
(statearr_36867_38263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (14))){
var inst_36836 = (state_36843[(2)]);
var inst_36837 = cljs.core.async.close_BANG_(out);
var state_36843__$1 = (function (){var statearr_36870 = state_36843;
(statearr_36870[(13)] = inst_36836);

return statearr_36870;
})();
var statearr_36871_38264 = state_36843__$1;
(statearr_36871_38264[(2)] = inst_36837);

(statearr_36871_38264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (10))){
var inst_36826 = (state_36843[(2)]);
var state_36843__$1 = state_36843;
var statearr_36872_38265 = state_36843__$1;
(statearr_36872_38265[(2)] = inst_36826);

(statearr_36872_38265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (8))){
var inst_36802 = (state_36843[(7)]);
var inst_36810 = (state_36843[(10)]);
var inst_36806 = (state_36843[(9)]);
var inst_36816 = inst_36802.push(inst_36806);
var tmp36868 = inst_36802;
var inst_36802__$1 = tmp36868;
var inst_36803 = inst_36810;
var state_36843__$1 = (function (){var statearr_36874 = state_36843;
(statearr_36874[(7)] = inst_36802__$1);

(statearr_36874[(8)] = inst_36803);

(statearr_36874[(14)] = inst_36816);

return statearr_36874;
})();
var statearr_36875_38269 = state_36843__$1;
(statearr_36875_38269[(2)] = null);

(statearr_36875_38269[(1)] = (2));


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
var statearr_36877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36877[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36877[(1)] = (1));

return statearr_36877;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36843){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36843);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36878){if((e36878 instanceof Object)){
var ex__34210__auto__ = e36878;
var statearr_36880_38270 = state_36843;
(statearr_36880_38270[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36878;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38271 = state_36843;
state_36843 = G__38271;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36881 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36881[(6)] = c__34274__auto___38249);

return statearr_36881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
