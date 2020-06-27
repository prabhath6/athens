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
var val_36888 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36888) : fn1.call(null,val_36888));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36888) : fn1.call(null,val_36888));
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
var n__4666__auto___36894 = n;
var x_36895 = (0);
while(true){
if((x_36895 < n__4666__auto___36894)){
(a[x_36895] = x_36895);

var G__36896 = (x_36895 + (1));
x_36895 = G__36896;
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
var G__36903 = (i + (1));
i = G__36903;
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
var len__4789__auto___36905 = arguments.length;
var i__4790__auto___36907 = (0);
while(true){
if((i__4790__auto___36907 < len__4789__auto___36905)){
args__4795__auto__.push((arguments[i__4790__auto___36907]));

var G__36913 = (i__4790__auto___36907 + (1));
i__4790__auto___36907 = G__36913;
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
var c__34274__auto___36920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34415 = (state_34411[(1)]);
if((state_val_34415 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34425_36921 = state_34411__$1;
(statearr_34425_36921[(2)] = inst_34407);

(statearr_34425_36921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (1))){
var state_34411__$1 = state_34411;
var statearr_34426_36923 = state_34411__$1;
(statearr_34426_36923[(2)] = null);

(statearr_34426_36923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (4))){
var inst_34390 = (state_34411[(7)]);
var inst_34390__$1 = (state_34411[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34411__$1 = (function (){var statearr_34427 = state_34411;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36924 = state_34411__$1;
(statearr_34428_36924[(1)] = (5));

} else {
var statearr_34429_36925 = state_34411__$1;
(statearr_34429_36925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36926 = state_34411__$1;
(statearr_34430_36926[(2)] = null);

(statearr_34430_36926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (6))){
var inst_34390 = (state_34411[(7)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34411__$1,(11),to,inst_34390);
} else {
if((state_val_34415 === (3))){
var inst_34409 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34411__$1,inst_34409);
} else {
if((state_val_34415 === (12))){
var state_34411__$1 = state_34411;
var statearr_34431_36932 = state_34411__$1;
(statearr_34431_36932[(2)] = null);

(statearr_34431_36932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (2))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34411__$1,(4),from);
} else {
if((state_val_34415 === (11))){
var inst_34400 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36934 = state_34411__$1;
(statearr_34432_36934[(1)] = (12));

} else {
var statearr_34433_36935 = state_34411__$1;
(statearr_34433_36935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36936 = state_34411__$1;
(statearr_34434_36936[(2)] = null);

(statearr_34434_36936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36937 = state_34411__$1;
(statearr_34435_36937[(1)] = (8));

} else {
var statearr_34436_36938 = state_34411__$1;
(statearr_34436_36938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36939 = state_34411__$1;
(statearr_34437_36939[(2)] = inst_34405);

(statearr_34437_36939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36940 = state_34411__$1;
(statearr_34438_36940[(2)] = inst_34397);

(statearr_34438_36940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36943 = state_34411__$1;
(statearr_34439_36943[(2)] = inst_34394);

(statearr_34439_36943[(1)] = (10));


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
var statearr_34442_36948 = state_34411;
(statearr_34442_36948[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36949 = state_34411;
state_34411 = G__36949;
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
var state__34276__auto__ = (function (){var statearr_34443 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34443[(6)] = c__34274__auto___36920);

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
var c__34274__auto___36956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var state_34452__$1 = (function (){var statearr_34454 = state_34452;
(statearr_34454[(7)] = inst_34449);

return statearr_34454;
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
var statearr_34455 = [null,null,null,null,null,null,null,null];
(statearr_34455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34455[(1)] = (1));

return statearr_34455;
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
}catch (e34456){if((e34456 instanceof Object)){
var ex__34210__auto__ = e34456;
var statearr_34457_36965 = state_34452;
(statearr_34457_36965[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36968 = state_34452;
state_34452 = G__36968;
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
var state__34276__auto__ = (function (){var statearr_34458 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34458[(6)] = c__34274__auto___36956);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34460){
var vec__34464 = p__34460;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34464,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34464,(1),null);
var job = vec__34464;
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
var n__4666__auto___36972 = n;
var __36973 = (0);
while(true){
if((__36973 < n__4666__auto___36972)){
var G__34467_36975 = type;
var G__34467_36976__$1 = (((G__34467_36975 instanceof cljs.core.Keyword))?G__34467_36975.fqn:null);
switch (G__34467_36976__$1) {
case "compute":
var c__34274__auto___36981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36973,c__34274__auto___36981,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36973,c__34274__auto___36981,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async){
return (function (state_34480){
var state_val_34481 = (state_34480[(1)]);
if((state_val_34481 === (1))){
var state_34480__$1 = state_34480;
var statearr_34483_36985 = state_34480__$1;
(statearr_34483_36985[(2)] = null);

(statearr_34483_36985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (2))){
var state_34480__$1 = state_34480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34480__$1,(4),jobs);
} else {
if((state_val_34481 === (3))){
var inst_34478 = (state_34480[(2)]);
var state_34480__$1 = state_34480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34480__$1,inst_34478);
} else {
if((state_val_34481 === (4))){
var inst_34470 = (state_34480[(2)]);
var inst_34471 = process(inst_34470);
var state_34480__$1 = state_34480;
if(cljs.core.truth_(inst_34471)){
var statearr_34484_36990 = state_34480__$1;
(statearr_34484_36990[(1)] = (5));

} else {
var statearr_34485_36991 = state_34480__$1;
(statearr_34485_36991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (5))){
var state_34480__$1 = state_34480;
var statearr_34486_36996 = state_34480__$1;
(statearr_34486_36996[(2)] = null);

(statearr_34486_36996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (6))){
var state_34480__$1 = state_34480;
var statearr_34487_36998 = state_34480__$1;
(statearr_34487_36998[(2)] = null);

(statearr_34487_36998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (7))){
var inst_34476 = (state_34480[(2)]);
var state_34480__$1 = state_34480;
var statearr_34488_37001 = state_34480__$1;
(statearr_34488_37001[(2)] = inst_34476);

(statearr_34488_37001[(1)] = (3));


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
});})(__36973,c__34274__auto___36981,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async))
;
return ((function (__36973,switch__34206__auto__,c__34274__auto___36981,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34489 = [null,null,null,null,null,null,null];
(statearr_34489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34489[(1)] = (1));

return statearr_34489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34480){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34480);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34490){if((e34490 instanceof Object)){
var ex__34210__auto__ = e34490;
var statearr_34491_37010 = state_34480;
(statearr_34491_37010[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37013 = state_34480;
state_34480 = G__37013;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36973,switch__34206__auto__,c__34274__auto___36981,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34492 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34492[(6)] = c__34274__auto___36981);

return statearr_34492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36973,c__34274__auto___36981,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___37019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36973,c__34274__auto___37019,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36973,c__34274__auto___37019,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async){
return (function (state_34506){
var state_val_34507 = (state_34506[(1)]);
if((state_val_34507 === (1))){
var state_34506__$1 = state_34506;
var statearr_34509_37022 = state_34506__$1;
(statearr_34509_37022[(2)] = null);

(statearr_34509_37022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34507 === (2))){
var state_34506__$1 = state_34506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34506__$1,(4),jobs);
} else {
if((state_val_34507 === (3))){
var inst_34504 = (state_34506[(2)]);
var state_34506__$1 = state_34506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34506__$1,inst_34504);
} else {
if((state_val_34507 === (4))){
var inst_34496 = (state_34506[(2)]);
var inst_34497 = async(inst_34496);
var state_34506__$1 = state_34506;
if(cljs.core.truth_(inst_34497)){
var statearr_34510_37023 = state_34506__$1;
(statearr_34510_37023[(1)] = (5));

} else {
var statearr_34512_37026 = state_34506__$1;
(statearr_34512_37026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34507 === (5))){
var state_34506__$1 = state_34506;
var statearr_34513_37027 = state_34506__$1;
(statearr_34513_37027[(2)] = null);

(statearr_34513_37027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34507 === (6))){
var state_34506__$1 = state_34506;
var statearr_34514_37029 = state_34506__$1;
(statearr_34514_37029[(2)] = null);

(statearr_34514_37029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34507 === (7))){
var inst_34502 = (state_34506[(2)]);
var state_34506__$1 = state_34506;
var statearr_34515_37030 = state_34506__$1;
(statearr_34515_37030[(2)] = inst_34502);

(statearr_34515_37030[(1)] = (3));


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
});})(__36973,c__34274__auto___37019,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async))
;
return ((function (__36973,switch__34206__auto__,c__34274__auto___37019,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34516 = [null,null,null,null,null,null,null];
(statearr_34516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34516[(1)] = (1));

return statearr_34516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34506){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34506);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34519){if((e34519 instanceof Object)){
var ex__34210__auto__ = e34519;
var statearr_34520_37039 = state_34506;
(statearr_34520_37039[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37040 = state_34506;
state_34506 = G__37040;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36973,switch__34206__auto__,c__34274__auto___37019,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34526 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34526[(6)] = c__34274__auto___37019);

return statearr_34526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36973,c__34274__auto___37019,G__34467_36975,G__34467_36976__$1,n__4666__auto___36972,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34467_36976__$1)].join('')));

}

var G__37041 = (__36973 + (1));
__36973 = G__37041;
continue;
} else {
}
break;
}

var c__34274__auto___37042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34548){
var state_val_34549 = (state_34548[(1)]);
if((state_val_34549 === (7))){
var inst_34544 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34551_37043 = state_34548__$1;
(statearr_34551_37043[(2)] = inst_34544);

(statearr_34551_37043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (1))){
var state_34548__$1 = state_34548;
var statearr_34552_37044 = state_34548__$1;
(statearr_34552_37044[(2)] = null);

(statearr_34552_37044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (4))){
var inst_34529 = (state_34548[(7)]);
var inst_34529__$1 = (state_34548[(2)]);
var inst_34530 = (inst_34529__$1 == null);
var state_34548__$1 = (function (){var statearr_34553 = state_34548;
(statearr_34553[(7)] = inst_34529__$1);

return statearr_34553;
})();
if(cljs.core.truth_(inst_34530)){
var statearr_34554_37053 = state_34548__$1;
(statearr_34554_37053[(1)] = (5));

} else {
var statearr_34555_37054 = state_34548__$1;
(statearr_34555_37054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (6))){
var inst_34529 = (state_34548[(7)]);
var inst_34534 = (state_34548[(8)]);
var inst_34534__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34535 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34536 = [inst_34529,inst_34534__$1];
var inst_34537 = (new cljs.core.PersistentVector(null,2,(5),inst_34535,inst_34536,null));
var state_34548__$1 = (function (){var statearr_34560 = state_34548;
(statearr_34560[(8)] = inst_34534__$1);

return statearr_34560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34548__$1,(8),jobs,inst_34537);
} else {
if((state_val_34549 === (3))){
var inst_34546 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34548__$1,inst_34546);
} else {
if((state_val_34549 === (2))){
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34548__$1,(4),from);
} else {
if((state_val_34549 === (9))){
var inst_34541 = (state_34548[(2)]);
var state_34548__$1 = (function (){var statearr_34564 = state_34548;
(statearr_34564[(9)] = inst_34541);

return statearr_34564;
})();
var statearr_34565_37058 = state_34548__$1;
(statearr_34565_37058[(2)] = null);

(statearr_34565_37058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (5))){
var inst_34532 = cljs.core.async.close_BANG_(jobs);
var state_34548__$1 = state_34548;
var statearr_34566_37059 = state_34548__$1;
(statearr_34566_37059[(2)] = inst_34532);

(statearr_34566_37059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (8))){
var inst_34534 = (state_34548[(8)]);
var inst_34539 = (state_34548[(2)]);
var state_34548__$1 = (function (){var statearr_34567 = state_34548;
(statearr_34567[(10)] = inst_34539);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34548__$1,(9),results,inst_34534);
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
var statearr_34568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34568[(1)] = (1));

return statearr_34568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34548){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34548);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34569){if((e34569 instanceof Object)){
var ex__34210__auto__ = e34569;
var statearr_34570_37067 = state_34548;
(statearr_34570_37067[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34569;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37070 = state_34548;
state_34548 = G__37070;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34571 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34571[(6)] = c__34274__auto___37042);

return statearr_34571;
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
var statearr_34614_37077 = state_34612__$1;
(statearr_34614_37077[(2)] = inst_34608);

(statearr_34614_37077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_37078 = state_34612__$1;
(statearr_34615_37078[(2)] = null);

(statearr_34615_37078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_37081 = state_34612__$1;
(statearr_34616_37081[(2)] = null);

(statearr_34616_37081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (4))){
var inst_34574 = (state_34612[(7)]);
var inst_34574__$1 = (state_34612[(2)]);
var inst_34575 = (inst_34574__$1 == null);
var state_34612__$1 = (function (){var statearr_34617 = state_34612;
(statearr_34617[(7)] = inst_34574__$1);

return statearr_34617;
})();
if(cljs.core.truth_(inst_34575)){
var statearr_34618_37083 = state_34612__$1;
(statearr_34618_37083[(1)] = (5));

} else {
var statearr_34619_37086 = state_34612__$1;
(statearr_34619_37086[(1)] = (6));

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
var statearr_34620_37092 = state_34612__$1;
(statearr_34620_37092[(2)] = inst_34603);

(statearr_34620_37092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_37095 = state_34612__$1;
(statearr_34622_37095[(2)] = null);

(statearr_34622_37095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (6))){
var inst_34574 = (state_34612[(7)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(11),inst_34574);
} else {
if((state_val_34613 === (17))){
var inst_34598 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
if(cljs.core.truth_(inst_34598)){
var statearr_34623_37097 = state_34612__$1;
(statearr_34623_37097[(1)] = (19));

} else {
var statearr_34624_37099 = state_34612__$1;
(statearr_34624_37099[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (3))){
var inst_34610 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34612__$1,inst_34610);
} else {
if((state_val_34613 === (12))){
var inst_34586 = (state_34612[(10)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(14),inst_34586);
} else {
if((state_val_34613 === (2))){
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(4),results);
} else {
if((state_val_34613 === (19))){
var state_34612__$1 = state_34612;
var statearr_34625_37102 = state_34612__$1;
(statearr_34625_37102[(2)] = null);

(statearr_34625_37102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34586 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34586);

return statearr_34626;
})();
var statearr_34627_37107 = state_34612__$1;
(statearr_34627_37107[(2)] = null);

(statearr_34627_37107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37111 = state_34612__$1;
(statearr_34628_37111[(2)] = null);

(statearr_34628_37111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37114 = state_34612__$1;
(statearr_34629_37114[(1)] = (8));

} else {
var statearr_34630_37115 = state_34612__$1;
(statearr_34630_37115[(1)] = (9));

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
var statearr_34632_37116 = state_34612__$1;
(statearr_34632_37116[(1)] = (15));

} else {
var statearr_34633_37117 = state_34612__$1;
(statearr_34633_37117[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37118 = state_34612__$1;
(statearr_34634_37118[(2)] = false);

(statearr_34634_37118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34581 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37125 = state_34612__$1;
(statearr_34635_37125[(2)] = inst_34581);

(statearr_34635_37125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37126 = state_34612__$1;
(statearr_34636_37126[(2)] = inst_34595);

(statearr_34636_37126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34578 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37127 = state_34612__$1;
(statearr_34637_37127[(2)] = inst_34578);

(statearr_34637_37127[(1)] = (10));


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
var statearr_34640_37133 = state_34612;
(statearr_34640_37133[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37137 = state_34612;
state_34612 = G__37137;
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
var c__34274__auto___37173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_37176 = state_34673__$1;
(statearr_34675_37176[(2)] = inst_34669);

(statearr_34675_37176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_37177 = state_34673__$1;
(statearr_34676_37177[(2)] = null);

(statearr_34676_37177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (4))){
var inst_34650 = (state_34673[(7)]);
var inst_34650__$1 = (state_34673[(2)]);
var inst_34651 = (inst_34650__$1 == null);
var state_34673__$1 = (function (){var statearr_34677 = state_34673;
(statearr_34677[(7)] = inst_34650__$1);

return statearr_34677;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34678_37180 = state_34673__$1;
(statearr_34678_37180[(1)] = (5));

} else {
var statearr_34679_37181 = state_34673__$1;
(statearr_34679_37181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_37183 = state_34673__$1;
(statearr_34680_37183[(2)] = null);

(statearr_34680_37183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_37185 = state_34673__$1;
(statearr_34681_37185[(1)] = (9));

} else {
var statearr_34682_37186 = state_34673__$1;
(statearr_34682_37186[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (3))){
var inst_34671 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34673__$1,inst_34671);
} else {
if((state_val_34674 === (12))){
var state_34673__$1 = state_34673;
var statearr_34686_37191 = state_34673__$1;
(statearr_34686_37191[(2)] = null);

(statearr_34686_37191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (2))){
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34673__$1,(4),ch);
} else {
if((state_val_34674 === (11))){
var inst_34650 = (state_34673[(7)]);
var inst_34660 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34673__$1,(8),inst_34660,inst_34650);
} else {
if((state_val_34674 === (9))){
var state_34673__$1 = state_34673;
var statearr_34687_37194 = state_34673__$1;
(statearr_34687_37194[(2)] = tc);

(statearr_34687_37194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34688 = state_34673;
(statearr_34688[(8)] = inst_34653);

return statearr_34688;
})();
var statearr_34689_37198 = state_34673__$1;
(statearr_34689_37198[(2)] = inst_34654);

(statearr_34689_37198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34693_37200 = state_34673__$1;
(statearr_34693_37200[(2)] = inst_34667);

(statearr_34693_37200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34694_37202 = state_34673__$1;
(statearr_34694_37202[(2)] = fc);

(statearr_34694_37202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34697_37203 = state_34673__$1;
(statearr_34697_37203[(1)] = (12));

} else {
var statearr_34698_37205 = state_34673__$1;
(statearr_34698_37205[(1)] = (13));

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
var statearr_34699 = [null,null,null,null,null,null,null,null,null];
(statearr_34699[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34699[(1)] = (1));

return statearr_34699;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34673){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34673);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34701){if((e34701 instanceof Object)){
var ex__34210__auto__ = e34701;
var statearr_34702_37212 = state_34673;
(statearr_34702_37212[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37214 = state_34673;
state_34673 = G__37214;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34705 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34705[(6)] = c__34274__auto___37173);

return statearr_34705;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34728){
var state_val_34729 = (state_34728[(1)]);
if((state_val_34729 === (7))){
var inst_34724 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34730_37222 = state_34728__$1;
(statearr_34730_37222[(2)] = inst_34724);

(statearr_34730_37222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (1))){
var inst_34707 = init;
var state_34728__$1 = (function (){var statearr_34732 = state_34728;
(statearr_34732[(7)] = inst_34707);

return statearr_34732;
})();
var statearr_34734_37225 = state_34728__$1;
(statearr_34734_37225[(2)] = null);

(statearr_34734_37225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (4))){
var inst_34710 = (state_34728[(8)]);
var inst_34710__$1 = (state_34728[(2)]);
var inst_34711 = (inst_34710__$1 == null);
var state_34728__$1 = (function (){var statearr_34735 = state_34728;
(statearr_34735[(8)] = inst_34710__$1);

return statearr_34735;
})();
if(cljs.core.truth_(inst_34711)){
var statearr_34736_37229 = state_34728__$1;
(statearr_34736_37229[(1)] = (5));

} else {
var statearr_34737_37230 = state_34728__$1;
(statearr_34737_37230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (6))){
var inst_34710 = (state_34728[(8)]);
var inst_34715 = (state_34728[(9)]);
var inst_34707 = (state_34728[(7)]);
var inst_34715__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34707,inst_34710) : f.call(null,inst_34707,inst_34710));
var inst_34716 = cljs.core.reduced_QMARK_(inst_34715__$1);
var state_34728__$1 = (function (){var statearr_34741 = state_34728;
(statearr_34741[(9)] = inst_34715__$1);

return statearr_34741;
})();
if(inst_34716){
var statearr_34742_37237 = state_34728__$1;
(statearr_34742_37237[(1)] = (8));

} else {
var statearr_34743_37240 = state_34728__$1;
(statearr_34743_37240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (3))){
var inst_34726 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34728__$1,inst_34726);
} else {
if((state_val_34729 === (2))){
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34728__$1,(4),ch);
} else {
if((state_val_34729 === (9))){
var inst_34715 = (state_34728[(9)]);
var inst_34707 = inst_34715;
var state_34728__$1 = (function (){var statearr_34744 = state_34728;
(statearr_34744[(7)] = inst_34707);

return statearr_34744;
})();
var statearr_34745_37245 = state_34728__$1;
(statearr_34745_37245[(2)] = null);

(statearr_34745_37245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (5))){
var inst_34707 = (state_34728[(7)]);
var state_34728__$1 = state_34728;
var statearr_34746_37249 = state_34728__$1;
(statearr_34746_37249[(2)] = inst_34707);

(statearr_34746_37249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (10))){
var inst_34722 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34748_37251 = state_34728__$1;
(statearr_34748_37251[(2)] = inst_34722);

(statearr_34748_37251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (8))){
var inst_34715 = (state_34728[(9)]);
var inst_34718 = cljs.core.deref(inst_34715);
var state_34728__$1 = state_34728;
var statearr_34749_37256 = state_34728__$1;
(statearr_34749_37256[(2)] = inst_34718);

(statearr_34749_37256[(1)] = (10));


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
var statearr_34750 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34750[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34750[(1)] = (1));

return statearr_34750;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34728){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34728);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34751){if((e34751 instanceof Object)){
var ex__34210__auto__ = e34751;
var statearr_34752_37257 = state_34728;
(statearr_34752_37257[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37260 = state_34728;
state_34728 = G__37260;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34728){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34753 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34753[(6)] = c__34274__auto__);

return statearr_34753;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34762){
var state_val_34763 = (state_34762[(1)]);
if((state_val_34763 === (1))){
var inst_34757 = cljs.core.async.reduce(f__$1,init,ch);
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34762__$1,(2),inst_34757);
} else {
if((state_val_34763 === (2))){
var inst_34759 = (state_34762[(2)]);
var inst_34760 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34759) : f__$1.call(null,inst_34759));
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34762__$1,inst_34760);
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
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34762){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34762);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34771){if((e34771 instanceof Object)){
var ex__34210__auto__ = e34771;
var statearr_34772_37269 = state_34762;
(statearr_34772_37269[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37273 = state_34762;
state_34762 = G__37273;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34762){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34762);
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (7))){
var inst_34782 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34802_37287 = state_34800__$1;
(statearr_34802_37287[(2)] = inst_34782);

(statearr_34802_37287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34777);

return statearr_34803;
})();
var statearr_34804_37295 = state_34800__$1;
(statearr_34804_37295[(2)] = null);

(statearr_34804_37295[(1)] = (2));


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
var statearr_34805_37297 = state_34800__$1;
(statearr_34805_37297[(2)] = inst_34794);

(statearr_34805_37297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34809_37301 = state_34800__$1;
(statearr_34809_37301[(1)] = (8));

} else {
var statearr_34810_37302 = state_34800__$1;
(statearr_34810_37302[(1)] = (9));

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
var statearr_34814_37308 = state_34800__$1;
(statearr_34814_37308[(2)] = null);

(statearr_34814_37308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34815_37311 = state_34800__$1;
(statearr_34815_37311[(1)] = (4));

} else {
var statearr_34816_37312 = state_34800__$1;
(statearr_34816_37312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34818_37315 = state_34800__$1;
(statearr_34818_37315[(2)] = inst_34791);

(statearr_34818_37315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34819_37317 = state_34800__$1;
(statearr_34819_37317[(1)] = (11));

} else {
var statearr_34820_37319 = state_34800__$1;
(statearr_34820_37319[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34821_37324 = state_34800__$1;
(statearr_34821_37324[(2)] = inst_34777);

(statearr_34821_37324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34822_37329 = state_34800__$1;
(statearr_34822_37329[(2)] = inst_34796);

(statearr_34822_37329[(1)] = (3));


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
var statearr_34824_37333 = state_34800__$1;
(statearr_34824_37333[(2)] = null);

(statearr_34824_37333[(1)] = (2));


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
var statearr_34827_37338 = state_34800;
(statearr_34827_37338[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37340 = state_34800;
state_34800 = G__37340;
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
var state__34276__auto__ = (function (){var statearr_34829 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34829[(6)] = c__34274__auto__);

return statearr_34829;
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
var c__34274__auto___37380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37384 = state_34978__$1;
(statearr_34980_37384[(2)] = inst_34974);

(statearr_34980_37384[(1)] = (3));


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
var statearr_34983_37386 = state_34978__$1;
(statearr_34983_37386[(1)] = (22));

} else {
var statearr_34985_37387 = state_34978__$1;
(statearr_34985_37387[(1)] = (23));

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
var state_34978__$1 = (function (){var statearr_34988 = state_34978;
(statearr_34988[(10)] = inst_34926__$1);

return statearr_34988;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34990_37393 = state_34978__$1;
(statearr_34990_37393[(1)] = (30));

} else {
var statearr_34992_37394 = state_34978__$1;
(statearr_34992_37394[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34993_37396 = state_34978__$1;
(statearr_34993_37396[(2)] = null);

(statearr_34993_37396[(1)] = (2));


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
var statearr_34995_37401 = state_34978__$1;
(statearr_34995_37401[(2)] = null);

(statearr_34995_37401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34999_37407 = state_34978__$1;
(statearr_34999_37407[(2)] = null);

(statearr_34999_37407[(1)] = (41));


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
var statearr_35001_37414 = state_34978__$1;
(statearr_35001_37414[(1)] = (5));

} else {
var statearr_35003_37416 = state_34978__$1;
(statearr_35003_37416[(1)] = (6));

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
var state_34978__$1 = (function (){var statearr_35008 = state_34978;
(statearr_35008[(18)] = inst_34873);

(statearr_35008[(13)] = inst_34857__$1);

(statearr_35008[(14)] = inst_34856__$1);

(statearr_35008[(15)] = inst_34858__$1);

(statearr_35008[(17)] = inst_34855__$1);

return statearr_35008;
})();
var statearr_35010_37424 = state_34978__$1;
(statearr_35010_37424[(2)] = null);

(statearr_35010_37424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35014_37431 = state_34978__$1;
(statearr_35014_37431[(2)] = inst_34900);

(statearr_35014_37431[(1)] = (18));


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
var statearr_35016_37435 = state_34978__$1;
(statearr_35016_37435[(2)] = inst_34931);

(statearr_35016_37435[(1)] = (32));


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
var statearr_35020_37447 = state_34978__$1;
(statearr_35020_37447[(2)] = null);

(statearr_35020_37447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (40))){
var inst_34946 = (state_34978[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34978__$1 = (function (){var statearr_35023 = state_34978;
(statearr_35023[(24)] = inst_34950);

return statearr_35023;
})();
var statearr_35025_37451 = state_34978__$1;
(statearr_35025_37451[(2)] = inst_34951);

(statearr_35025_37451[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35027_37454 = state_34978__$1;
(statearr_35027_37454[(1)] = (36));

} else {
var statearr_35028_37455 = state_34978__$1;
(statearr_35028_37455[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35029_37460 = state_34978__$1;
(statearr_35029_37460[(2)] = inst_34870);

(statearr_35029_37460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35030_37462 = state_34978__$1;
(statearr_35030_37462[(2)] = inst_34893);

(statearr_35030_37462[(1)] = (24));


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
var state_34978__$1 = (function (){var statearr_35033 = state_34978;
(statearr_35033[(20)] = inst_34918);

(statearr_35033[(11)] = inst_34919);

(statearr_35033[(21)] = inst_34920);

(statearr_35033[(12)] = inst_34921);

return statearr_35033;
})();
var statearr_35034_37469 = state_34978__$1;
(statearr_35034_37469[(2)] = null);

(statearr_35034_37469[(1)] = (25));


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
var state_34978__$1 = (function (){var statearr_35039 = state_34978;
(statearr_35039[(20)] = inst_34918);

(statearr_35039[(11)] = inst_34919);

(statearr_35039[(21)] = inst_34920);

(statearr_35039[(27)] = inst_34953);

(statearr_35039[(12)] = inst_34921);

return statearr_35039;
})();
var statearr_35040_37473 = state_34978__$1;
(statearr_35040_37473[(2)] = null);

(statearr_35040_37473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35041_37479 = state_34978__$1;
(statearr_35041_37479[(2)] = null);

(statearr_35041_37479[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35043_37482 = state_34978__$1;
(statearr_35043_37482[(2)] = inst_34962);

(statearr_35043_37482[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35046 = state_34978;
(statearr_35046[(28)] = inst_34971);

return statearr_35046;
})();
var statearr_35048_37484 = state_34978__$1;
(statearr_35048_37484[(2)] = null);

(statearr_35048_37484[(1)] = (2));


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
var state_34978__$1 = (function (){var statearr_35063 = state_34978;
(statearr_35063[(20)] = inst_34918);

(statearr_35063[(29)] = inst_34910__$1);

(statearr_35063[(11)] = inst_34919);

(statearr_35063[(21)] = inst_34920);

(statearr_35063[(12)] = inst_34921);

(statearr_35063[(30)] = inst_34912);

return statearr_35063;
})();
var statearr_35065_37493 = state_34978__$1;
(statearr_35065_37493[(2)] = null);

(statearr_35065_37493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35068 = state_34978;
(statearr_35068[(25)] = inst_34937__$1);

return statearr_35068;
})();
if(inst_34937__$1){
var statearr_35069_37500 = state_34978__$1;
(statearr_35069_37500[(1)] = (33));

} else {
var statearr_35072_37501 = state_34978__$1;
(statearr_35072_37501[(1)] = (34));

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
var statearr_35073_37504 = state_34978__$1;
(statearr_35073_37504[(1)] = (27));

} else {
var statearr_35074_37505 = state_34978__$1;
(statearr_35074_37505[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35087_37508 = state_34978__$1;
(statearr_35087_37508[(2)] = null);

(statearr_35087_37508[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35090_37516 = state_34978__$1;
(statearr_35090_37516[(2)] = null);

(statearr_35090_37516[(1)] = (18));


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
var statearr_35094_37520 = state_34978__$1;
(statearr_35094_37520[(2)] = inst_34905);

(statearr_35094_37520[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35101_37522 = state_34978__$1;
(statearr_35101_37522[(2)] = null);

(statearr_35101_37522[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35107_37529 = state_34978__$1;
(statearr_35107_37529[(2)] = inst_34960);

(statearr_35107_37529[(1)] = (29));


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
var state_34978__$1 = (function (){var statearr_35113 = state_34978;
(statearr_35113[(13)] = inst_34857);

(statearr_35113[(14)] = inst_34856);

(statearr_35113[(15)] = inst_34858);

(statearr_35113[(17)] = inst_34855);

return statearr_35113;
})();
var statearr_35119_37535 = state_34978__$1;
(statearr_35119_37535[(2)] = null);

(statearr_35119_37535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35127 = state_34978;
(statearr_35127[(7)] = inst_34877__$1);

return statearr_35127;
})();
if(inst_34877__$1){
var statearr_35129_37545 = state_34978__$1;
(statearr_35129_37545[(1)] = (16));

} else {
var statearr_35131_37546 = state_34978__$1;
(statearr_35131_37546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35136_37549 = state_34978__$1;
(statearr_35136_37549[(2)] = inst_34907);

(statearr_35136_37549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35144 = state_34978;
(statearr_35144[(13)] = inst_34857);

(statearr_35144[(14)] = inst_34856);

(statearr_35144[(15)] = inst_34858);

(statearr_35144[(17)] = inst_34855);

return statearr_35144;
})();
var statearr_35149_37558 = state_34978__$1;
(statearr_35149_37558[(2)] = null);

(statearr_35149_37558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35153_37560 = state_34978__$1;
(statearr_35153_37560[(2)] = null);

(statearr_35153_37560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35160_37561 = state_34978__$1;
(statearr_35160_37561[(2)] = inst_34968);

(statearr_35160_37561[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35167 = state_34978;
(statearr_35167[(31)] = inst_34964);

return statearr_35167;
})();
if(inst_34965){
var statearr_35169_37573 = state_34978__$1;
(statearr_35169_37573[(1)] = (42));

} else {
var statearr_35170_37574 = state_34978__$1;
(statearr_35170_37574[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35171_37576 = state_34978__$1;
(statearr_35171_37576[(1)] = (19));

} else {
var statearr_35172_37578 = state_34978__$1;
(statearr_35172_37578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35173_37582 = state_34978__$1;
(statearr_35173_37582[(2)] = inst_34957);

(statearr_35173_37582[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35174_37587 = state_34978__$1;
(statearr_35174_37587[(2)] = null);

(statearr_35174_37587[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35177 = state_34978;
(statearr_35177[(26)] = inst_34867);

return statearr_35177;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35178_37590 = state_34978__$1;
(statearr_35178_37590[(1)] = (13));

} else {
var statearr_35179_37593 = state_34978__$1;
(statearr_35179_37593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35182_37601 = state_34978__$1;
(statearr_35182_37601[(2)] = inst_34903);

(statearr_35182_37601[(1)] = (12));


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
var state_34978__$1 = (function (){var statearr_35203 = state_34978;
(statearr_35203[(23)] = inst_34946__$1);

return statearr_35203;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35207_37606 = state_34978__$1;
(statearr_35207_37606[(1)] = (39));

} else {
var statearr_35208_37608 = state_34978__$1;
(statearr_35208_37608[(1)] = (40));

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
var statearr_35211_37616 = state_34978__$1;
(statearr_35211_37616[(1)] = (10));

} else {
var statearr_35212_37617 = state_34978__$1;
(statearr_35212_37617[(1)] = (11));

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
var statearr_35221_37630 = state_34978;
(statearr_35221_37630[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37632 = state_34978;
state_34978 = G__37632;
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
var state__34276__auto__ = (function (){var statearr_35230 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35230[(6)] = c__34274__auto___37380);

return statearr_35230;
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
var G__35247 = arguments.length;
switch (G__35247) {
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
var len__4789__auto___37666 = arguments.length;
var i__4790__auto___37667 = (0);
while(true){
if((i__4790__auto___37667 < len__4789__auto___37666)){
args__4795__auto__.push((arguments[i__4790__auto___37667]));

var G__37668 = (i__4790__auto___37667 + (1));
i__4790__auto___37667 = G__37668;
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
var statearr_35368_37670 = state;
(statearr_35368_37670[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35369_37672 = state;
(statearr_35369_37672[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35370_37673 = state;
(statearr_35370_37673[(2)] = cljs.core.deref(cb));


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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35399 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35399 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35400){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35400 = meta35400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35401,meta35400__$1){
var self__ = this;
var _35401__$1 = this;
return (new cljs.core.async.t_cljs$core$async35399(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35400__$1));
}));

(cljs.core.async.t_cljs$core$async35399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35401){
var self__ = this;
var _35401__$1 = this;
return self__.meta35400;
}));

(cljs.core.async.t_cljs$core$async35399.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35399.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35399.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35399.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35399.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35399.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35399.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35400","meta35400",1448542689,null)], null);
}));

(cljs.core.async.t_cljs$core$async35399.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35399");

(cljs.core.async.t_cljs$core$async35399.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35399");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35399.
 */
cljs.core.async.__GT_t_cljs$core$async35399 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35399(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35400){
return (new cljs.core.async.t_cljs$core$async35399(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35400));
});

}

return (new cljs.core.async.t_cljs$core$async35399(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35595){
var state_val_35597 = (state_35595[(1)]);
if((state_val_35597 === (7))){
var inst_35471 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35608_37725 = state_35595__$1;
(statearr_35608_37725[(2)] = inst_35471);

(statearr_35608_37725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (20))){
var inst_35485 = (state_35595[(7)]);
var state_35595__$1 = state_35595;
var statearr_35614_37729 = state_35595__$1;
(statearr_35614_37729[(2)] = inst_35485);

(statearr_35614_37729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (27))){
var state_35595__$1 = state_35595;
var statearr_35620_37732 = state_35595__$1;
(statearr_35620_37732[(2)] = null);

(statearr_35620_37732[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (1))){
var inst_35456 = (state_35595[(8)]);
var inst_35456__$1 = calc_state();
var inst_35458 = (inst_35456__$1 == null);
var inst_35459 = cljs.core.not(inst_35458);
var state_35595__$1 = (function (){var statearr_35627 = state_35595;
(statearr_35627[(8)] = inst_35456__$1);

return statearr_35627;
})();
if(inst_35459){
var statearr_35629_37734 = state_35595__$1;
(statearr_35629_37734[(1)] = (2));

} else {
var statearr_35631_37735 = state_35595__$1;
(statearr_35631_37735[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (24))){
var inst_35510 = (state_35595[(9)]);
var inst_35558 = (state_35595[(10)]);
var inst_35523 = (state_35595[(11)]);
var inst_35558__$1 = (inst_35510.cljs$core$IFn$_invoke$arity$1 ? inst_35510.cljs$core$IFn$_invoke$arity$1(inst_35523) : inst_35510.call(null,inst_35523));
var state_35595__$1 = (function (){var statearr_35637 = state_35595;
(statearr_35637[(10)] = inst_35558__$1);

return statearr_35637;
})();
if(cljs.core.truth_(inst_35558__$1)){
var statearr_35647_37744 = state_35595__$1;
(statearr_35647_37744[(1)] = (29));

} else {
var statearr_35650_37745 = state_35595__$1;
(statearr_35650_37745[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (4))){
var inst_35474 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35474)){
var statearr_35661_37747 = state_35595__$1;
(statearr_35661_37747[(1)] = (8));

} else {
var statearr_35664_37749 = state_35595__$1;
(statearr_35664_37749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (15))){
var inst_35504 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35504)){
var statearr_35669_37750 = state_35595__$1;
(statearr_35669_37750[(1)] = (19));

} else {
var statearr_35673_37751 = state_35595__$1;
(statearr_35673_37751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (21))){
var inst_35509 = (state_35595[(12)]);
var inst_35509__$1 = (state_35595[(2)]);
var inst_35510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35509__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35509__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35509__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35595__$1 = (function (){var statearr_35680 = state_35595;
(statearr_35680[(13)] = inst_35511);

(statearr_35680[(9)] = inst_35510);

(statearr_35680[(12)] = inst_35509__$1);

return statearr_35680;
})();
return cljs.core.async.ioc_alts_BANG_(state_35595__$1,(22),inst_35513);
} else {
if((state_val_35597 === (31))){
var inst_35568 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35568)){
var statearr_35687_37761 = state_35595__$1;
(statearr_35687_37761[(1)] = (32));

} else {
var statearr_35690_37763 = state_35595__$1;
(statearr_35690_37763[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (32))){
var inst_35522 = (state_35595[(14)]);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35595__$1,(35),out,inst_35522);
} else {
if((state_val_35597 === (33))){
var inst_35509 = (state_35595[(12)]);
var inst_35485 = inst_35509;
var state_35595__$1 = (function (){var statearr_35691 = state_35595;
(statearr_35691[(7)] = inst_35485);

return statearr_35691;
})();
var statearr_35692_37771 = state_35595__$1;
(statearr_35692_37771[(2)] = null);

(statearr_35692_37771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (13))){
var inst_35485 = (state_35595[(7)]);
var inst_35492 = inst_35485.cljs$lang$protocol_mask$partition0$;
var inst_35493 = (inst_35492 & (64));
var inst_35495 = inst_35485.cljs$core$ISeq$;
var inst_35496 = (cljs.core.PROTOCOL_SENTINEL === inst_35495);
var inst_35497 = ((inst_35493) || (inst_35496));
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35497)){
var statearr_35693_37773 = state_35595__$1;
(statearr_35693_37773[(1)] = (16));

} else {
var statearr_35694_37775 = state_35595__$1;
(statearr_35694_37775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (22))){
var inst_35523 = (state_35595[(11)]);
var inst_35522 = (state_35595[(14)]);
var inst_35520 = (state_35595[(2)]);
var inst_35522__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35520,(0),null);
var inst_35523__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35520,(1),null);
var inst_35526 = (inst_35522__$1 == null);
var inst_35527 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35523__$1,change);
var inst_35528 = ((inst_35526) || (inst_35527));
var state_35595__$1 = (function (){var statearr_35697 = state_35595;
(statearr_35697[(11)] = inst_35523__$1);

(statearr_35697[(14)] = inst_35522__$1);

return statearr_35697;
})();
if(cljs.core.truth_(inst_35528)){
var statearr_35698_37780 = state_35595__$1;
(statearr_35698_37780[(1)] = (23));

} else {
var statearr_35699_37781 = state_35595__$1;
(statearr_35699_37781[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (36))){
var inst_35509 = (state_35595[(12)]);
var inst_35485 = inst_35509;
var state_35595__$1 = (function (){var statearr_35700 = state_35595;
(statearr_35700[(7)] = inst_35485);

return statearr_35700;
})();
var statearr_35701_37786 = state_35595__$1;
(statearr_35701_37786[(2)] = null);

(statearr_35701_37786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (29))){
var inst_35558 = (state_35595[(10)]);
var state_35595__$1 = state_35595;
var statearr_35704_37790 = state_35595__$1;
(statearr_35704_37790[(2)] = inst_35558);

(statearr_35704_37790[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (6))){
var state_35595__$1 = state_35595;
var statearr_35705_37792 = state_35595__$1;
(statearr_35705_37792[(2)] = false);

(statearr_35705_37792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (28))){
var inst_35550 = (state_35595[(2)]);
var inst_35551 = calc_state();
var inst_35485 = inst_35551;
var state_35595__$1 = (function (){var statearr_35706 = state_35595;
(statearr_35706[(7)] = inst_35485);

(statearr_35706[(15)] = inst_35550);

return statearr_35706;
})();
var statearr_35710_37797 = state_35595__$1;
(statearr_35710_37797[(2)] = null);

(statearr_35710_37797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (25))){
var inst_35587 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35713_37798 = state_35595__$1;
(statearr_35713_37798[(2)] = inst_35587);

(statearr_35713_37798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (34))){
var inst_35584 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35716_37805 = state_35595__$1;
(statearr_35716_37805[(2)] = inst_35584);

(statearr_35716_37805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (17))){
var state_35595__$1 = state_35595;
var statearr_35718_37807 = state_35595__$1;
(statearr_35718_37807[(2)] = false);

(statearr_35718_37807[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (3))){
var state_35595__$1 = state_35595;
var statearr_35719_37809 = state_35595__$1;
(statearr_35719_37809[(2)] = false);

(statearr_35719_37809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (12))){
var inst_35589 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35595__$1,inst_35589);
} else {
if((state_val_35597 === (2))){
var inst_35456 = (state_35595[(8)]);
var inst_35463 = inst_35456.cljs$lang$protocol_mask$partition0$;
var inst_35464 = (inst_35463 & (64));
var inst_35465 = inst_35456.cljs$core$ISeq$;
var inst_35466 = (cljs.core.PROTOCOL_SENTINEL === inst_35465);
var inst_35467 = ((inst_35464) || (inst_35466));
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35467)){
var statearr_35722_37817 = state_35595__$1;
(statearr_35722_37817[(1)] = (5));

} else {
var statearr_35724_37818 = state_35595__$1;
(statearr_35724_37818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (23))){
var inst_35522 = (state_35595[(14)]);
var inst_35530 = (inst_35522 == null);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35530)){
var statearr_35726_37820 = state_35595__$1;
(statearr_35726_37820[(1)] = (26));

} else {
var statearr_35727_37823 = state_35595__$1;
(statearr_35727_37823[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (35))){
var inst_35574 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35574)){
var statearr_35730_37825 = state_35595__$1;
(statearr_35730_37825[(1)] = (36));

} else {
var statearr_35733_37827 = state_35595__$1;
(statearr_35733_37827[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (19))){
var inst_35485 = (state_35595[(7)]);
var inst_35506 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35485);
var state_35595__$1 = state_35595;
var statearr_35736_37831 = state_35595__$1;
(statearr_35736_37831[(2)] = inst_35506);

(statearr_35736_37831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (11))){
var inst_35485 = (state_35595[(7)]);
var inst_35489 = (inst_35485 == null);
var inst_35490 = cljs.core.not(inst_35489);
var state_35595__$1 = state_35595;
if(inst_35490){
var statearr_35738_37836 = state_35595__$1;
(statearr_35738_37836[(1)] = (13));

} else {
var statearr_35739_37837 = state_35595__$1;
(statearr_35739_37837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (9))){
var inst_35456 = (state_35595[(8)]);
var state_35595__$1 = state_35595;
var statearr_35740_37839 = state_35595__$1;
(statearr_35740_37839[(2)] = inst_35456);

(statearr_35740_37839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (5))){
var state_35595__$1 = state_35595;
var statearr_35744_37843 = state_35595__$1;
(statearr_35744_37843[(2)] = true);

(statearr_35744_37843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (14))){
var state_35595__$1 = state_35595;
var statearr_35745_37845 = state_35595__$1;
(statearr_35745_37845[(2)] = false);

(statearr_35745_37845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (26))){
var inst_35523 = (state_35595[(11)]);
var inst_35547 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35523);
var state_35595__$1 = state_35595;
var statearr_35751_37849 = state_35595__$1;
(statearr_35751_37849[(2)] = inst_35547);

(statearr_35751_37849[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (16))){
var state_35595__$1 = state_35595;
var statearr_35753_37850 = state_35595__$1;
(statearr_35753_37850[(2)] = true);

(statearr_35753_37850[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (38))){
var inst_35580 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35758_37852 = state_35595__$1;
(statearr_35758_37852[(2)] = inst_35580);

(statearr_35758_37852[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (30))){
var inst_35511 = (state_35595[(13)]);
var inst_35510 = (state_35595[(9)]);
var inst_35523 = (state_35595[(11)]);
var inst_35563 = cljs.core.empty_QMARK_(inst_35510);
var inst_35564 = (inst_35511.cljs$core$IFn$_invoke$arity$1 ? inst_35511.cljs$core$IFn$_invoke$arity$1(inst_35523) : inst_35511.call(null,inst_35523));
var inst_35565 = cljs.core.not(inst_35564);
var inst_35566 = ((inst_35563) && (inst_35565));
var state_35595__$1 = state_35595;
var statearr_35772_37855 = state_35595__$1;
(statearr_35772_37855[(2)] = inst_35566);

(statearr_35772_37855[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (10))){
var inst_35456 = (state_35595[(8)]);
var inst_35479 = (state_35595[(2)]);
var inst_35481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35479,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35479,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35479,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35485 = inst_35456;
var state_35595__$1 = (function (){var statearr_35779 = state_35595;
(statearr_35779[(16)] = inst_35484);

(statearr_35779[(17)] = inst_35481);

(statearr_35779[(7)] = inst_35485);

(statearr_35779[(18)] = inst_35483);

return statearr_35779;
})();
var statearr_35781_37862 = state_35595__$1;
(statearr_35781_37862[(2)] = null);

(statearr_35781_37862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (18))){
var inst_35501 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35783_37865 = state_35595__$1;
(statearr_35783_37865[(2)] = inst_35501);

(statearr_35783_37865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (37))){
var state_35595__$1 = state_35595;
var statearr_35786_37866 = state_35595__$1;
(statearr_35786_37866[(2)] = null);

(statearr_35786_37866[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (8))){
var inst_35456 = (state_35595[(8)]);
var inst_35476 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35456);
var state_35595__$1 = state_35595;
var statearr_35787_37870 = state_35595__$1;
(statearr_35787_37870[(2)] = inst_35476);

(statearr_35787_37870[(1)] = (10));


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
var statearr_35789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35789[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35789[(1)] = (1));

return statearr_35789;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35595){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35595);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35790){if((e35790 instanceof Object)){
var ex__34210__auto__ = e35790;
var statearr_35792_37874 = state_35595;
(statearr_35792_37874[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35790;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37877 = state_35595;
state_35595 = G__37877;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35595){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35799 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35799[(6)] = c__34274__auto___37719);

return statearr_35799;
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
var G__35829 = arguments.length;
switch (G__35829) {
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
var G__35863 = arguments.length;
switch (G__35863) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35856_SHARP_){
if(cljs.core.truth_((p1__35856_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35856_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35856_SHARP_.call(null,topic)))){
return p1__35856_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35856_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35871 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35872){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35872 = meta35872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35873,meta35872__$1){
var self__ = this;
var _35873__$1 = this;
return (new cljs.core.async.t_cljs$core$async35871(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35872__$1));
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35873){
var self__ = this;
var _35873__$1 = this;
return self__.meta35872;
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35872","meta35872",-1351325810,null)], null);
}));

(cljs.core.async.t_cljs$core$async35871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35871");

(cljs.core.async.t_cljs$core$async35871.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35871.
 */
cljs.core.async.__GT_t_cljs$core$async35871 = (function cljs$core$async$__GT_t_cljs$core$async35871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35872){
return (new cljs.core.async.t_cljs$core$async35871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35872));
});

}

return (new cljs.core.async.t_cljs$core$async35871(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35993){
var state_val_35994 = (state_35993[(1)]);
if((state_val_35994 === (7))){
var inst_35985 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_35997_37931 = state_35993__$1;
(statearr_35997_37931[(2)] = inst_35985);

(statearr_35997_37931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (20))){
var state_35993__$1 = state_35993;
var statearr_35999_37932 = state_35993__$1;
(statearr_35999_37932[(2)] = null);

(statearr_35999_37932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (1))){
var state_35993__$1 = state_35993;
var statearr_36002_37933 = state_35993__$1;
(statearr_36002_37933[(2)] = null);

(statearr_36002_37933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (24))){
var inst_35968 = (state_35993[(7)]);
var inst_35977 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35968);
var state_35993__$1 = state_35993;
var statearr_36004_37934 = state_35993__$1;
(statearr_36004_37934[(2)] = inst_35977);

(statearr_36004_37934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (4))){
var inst_35909 = (state_35993[(8)]);
var inst_35909__$1 = (state_35993[(2)]);
var inst_35910 = (inst_35909__$1 == null);
var state_35993__$1 = (function (){var statearr_36005 = state_35993;
(statearr_36005[(8)] = inst_35909__$1);

return statearr_36005;
})();
if(cljs.core.truth_(inst_35910)){
var statearr_36006_37936 = state_35993__$1;
(statearr_36006_37936[(1)] = (5));

} else {
var statearr_36007_37937 = state_35993__$1;
(statearr_36007_37937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (15))){
var inst_35960 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36011_37938 = state_35993__$1;
(statearr_36011_37938[(2)] = inst_35960);

(statearr_36011_37938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (21))){
var inst_35982 = (state_35993[(2)]);
var state_35993__$1 = (function (){var statearr_36013 = state_35993;
(statearr_36013[(9)] = inst_35982);

return statearr_36013;
})();
var statearr_36014_37943 = state_35993__$1;
(statearr_36014_37943[(2)] = null);

(statearr_36014_37943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (13))){
var inst_35940 = (state_35993[(10)]);
var inst_35942 = cljs.core.chunked_seq_QMARK_(inst_35940);
var state_35993__$1 = state_35993;
if(inst_35942){
var statearr_36015_37944 = state_35993__$1;
(statearr_36015_37944[(1)] = (16));

} else {
var statearr_36016_37945 = state_35993__$1;
(statearr_36016_37945[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (22))){
var inst_35974 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
if(cljs.core.truth_(inst_35974)){
var statearr_36017_37946 = state_35993__$1;
(statearr_36017_37946[(1)] = (23));

} else {
var statearr_36018_37947 = state_35993__$1;
(statearr_36018_37947[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (6))){
var inst_35909 = (state_35993[(8)]);
var inst_35968 = (state_35993[(7)]);
var inst_35970 = (state_35993[(11)]);
var inst_35968__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35909) : topic_fn.call(null,inst_35909));
var inst_35969 = cljs.core.deref(mults);
var inst_35970__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35969,inst_35968__$1);
var state_35993__$1 = (function (){var statearr_36019 = state_35993;
(statearr_36019[(7)] = inst_35968__$1);

(statearr_36019[(11)] = inst_35970__$1);

return statearr_36019;
})();
if(cljs.core.truth_(inst_35970__$1)){
var statearr_36020_37948 = state_35993__$1;
(statearr_36020_37948[(1)] = (19));

} else {
var statearr_36021_37949 = state_35993__$1;
(statearr_36021_37949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (25))){
var inst_35979 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36022_37950 = state_35993__$1;
(statearr_36022_37950[(2)] = inst_35979);

(statearr_36022_37950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (17))){
var inst_35940 = (state_35993[(10)]);
var inst_35950 = cljs.core.first(inst_35940);
var inst_35951 = cljs.core.async.muxch_STAR_(inst_35950);
var inst_35952 = cljs.core.async.close_BANG_(inst_35951);
var inst_35953 = cljs.core.next(inst_35940);
var inst_35922 = inst_35953;
var inst_35923 = null;
var inst_35924 = (0);
var inst_35925 = (0);
var state_35993__$1 = (function (){var statearr_36023 = state_35993;
(statearr_36023[(12)] = inst_35952);

(statearr_36023[(13)] = inst_35923);

(statearr_36023[(14)] = inst_35922);

(statearr_36023[(15)] = inst_35925);

(statearr_36023[(16)] = inst_35924);

return statearr_36023;
})();
var statearr_36024_37955 = state_35993__$1;
(statearr_36024_37955[(2)] = null);

(statearr_36024_37955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (3))){
var inst_35987 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35993__$1,inst_35987);
} else {
if((state_val_35994 === (12))){
var inst_35962 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36025_37959 = state_35993__$1;
(statearr_36025_37959[(2)] = inst_35962);

(statearr_36025_37959[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (2))){
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35993__$1,(4),ch);
} else {
if((state_val_35994 === (23))){
var state_35993__$1 = state_35993;
var statearr_36026_37960 = state_35993__$1;
(statearr_36026_37960[(2)] = null);

(statearr_36026_37960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (19))){
var inst_35909 = (state_35993[(8)]);
var inst_35970 = (state_35993[(11)]);
var inst_35972 = cljs.core.async.muxch_STAR_(inst_35970);
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35993__$1,(22),inst_35972,inst_35909);
} else {
if((state_val_35994 === (11))){
var inst_35940 = (state_35993[(10)]);
var inst_35922 = (state_35993[(14)]);
var inst_35940__$1 = cljs.core.seq(inst_35922);
var state_35993__$1 = (function (){var statearr_36028 = state_35993;
(statearr_36028[(10)] = inst_35940__$1);

return statearr_36028;
})();
if(inst_35940__$1){
var statearr_36029_37961 = state_35993__$1;
(statearr_36029_37961[(1)] = (13));

} else {
var statearr_36030_37962 = state_35993__$1;
(statearr_36030_37962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (9))){
var inst_35965 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36032_37964 = state_35993__$1;
(statearr_36032_37964[(2)] = inst_35965);

(statearr_36032_37964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (5))){
var inst_35919 = cljs.core.deref(mults);
var inst_35920 = cljs.core.vals(inst_35919);
var inst_35921 = cljs.core.seq(inst_35920);
var inst_35922 = inst_35921;
var inst_35923 = null;
var inst_35924 = (0);
var inst_35925 = (0);
var state_35993__$1 = (function (){var statearr_36040 = state_35993;
(statearr_36040[(13)] = inst_35923);

(statearr_36040[(14)] = inst_35922);

(statearr_36040[(15)] = inst_35925);

(statearr_36040[(16)] = inst_35924);

return statearr_36040;
})();
var statearr_36041_37967 = state_35993__$1;
(statearr_36041_37967[(2)] = null);

(statearr_36041_37967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (14))){
var state_35993__$1 = state_35993;
var statearr_36046_37969 = state_35993__$1;
(statearr_36046_37969[(2)] = null);

(statearr_36046_37969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (16))){
var inst_35940 = (state_35993[(10)]);
var inst_35944 = cljs.core.chunk_first(inst_35940);
var inst_35945 = cljs.core.chunk_rest(inst_35940);
var inst_35947 = cljs.core.count(inst_35944);
var inst_35922 = inst_35945;
var inst_35923 = inst_35944;
var inst_35924 = inst_35947;
var inst_35925 = (0);
var state_35993__$1 = (function (){var statearr_36047 = state_35993;
(statearr_36047[(13)] = inst_35923);

(statearr_36047[(14)] = inst_35922);

(statearr_36047[(15)] = inst_35925);

(statearr_36047[(16)] = inst_35924);

return statearr_36047;
})();
var statearr_36049_37973 = state_35993__$1;
(statearr_36049_37973[(2)] = null);

(statearr_36049_37973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (10))){
var inst_35923 = (state_35993[(13)]);
var inst_35922 = (state_35993[(14)]);
var inst_35925 = (state_35993[(15)]);
var inst_35924 = (state_35993[(16)]);
var inst_35931 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35923,inst_35925);
var inst_35933 = cljs.core.async.muxch_STAR_(inst_35931);
var inst_35935 = cljs.core.async.close_BANG_(inst_35933);
var inst_35936 = (inst_35925 + (1));
var tmp36042 = inst_35923;
var tmp36043 = inst_35922;
var tmp36044 = inst_35924;
var inst_35922__$1 = tmp36043;
var inst_35923__$1 = tmp36042;
var inst_35924__$1 = tmp36044;
var inst_35925__$1 = inst_35936;
var state_35993__$1 = (function (){var statearr_36054 = state_35993;
(statearr_36054[(13)] = inst_35923__$1);

(statearr_36054[(14)] = inst_35922__$1);

(statearr_36054[(15)] = inst_35925__$1);

(statearr_36054[(16)] = inst_35924__$1);

(statearr_36054[(17)] = inst_35935);

return statearr_36054;
})();
var statearr_36057_37979 = state_35993__$1;
(statearr_36057_37979[(2)] = null);

(statearr_36057_37979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (18))){
var inst_35957 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36058_37980 = state_35993__$1;
(statearr_36058_37980[(2)] = inst_35957);

(statearr_36058_37980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (8))){
var inst_35925 = (state_35993[(15)]);
var inst_35924 = (state_35993[(16)]);
var inst_35927 = (inst_35925 < inst_35924);
var inst_35929 = inst_35927;
var state_35993__$1 = state_35993;
if(cljs.core.truth_(inst_35929)){
var statearr_36060_37981 = state_35993__$1;
(statearr_36060_37981[(1)] = (10));

} else {
var statearr_36061_37982 = state_35993__$1;
(statearr_36061_37982[(1)] = (11));

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
var statearr_36064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36064[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36064[(1)] = (1));

return statearr_36064;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35993){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35993);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36068){if((e36068 instanceof Object)){
var ex__34210__auto__ = e36068;
var statearr_36069_37988 = state_35993;
(statearr_36069_37988[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37989 = state_35993;
state_35993 = G__37989;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36070 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36070[(6)] = c__34274__auto___37930);

return statearr_36070;
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
var G__36072 = arguments.length;
switch (G__36072) {
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
var G__36081 = arguments.length;
switch (G__36081) {
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
var G__36088 = arguments.length;
switch (G__36088) {
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
var c__34274__auto___38001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36141){
var state_val_36142 = (state_36141[(1)]);
if((state_val_36142 === (7))){
var state_36141__$1 = state_36141;
var statearr_36148_38003 = state_36141__$1;
(statearr_36148_38003[(2)] = null);

(statearr_36148_38003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (1))){
var state_36141__$1 = state_36141;
var statearr_36155_38004 = state_36141__$1;
(statearr_36155_38004[(2)] = null);

(statearr_36155_38004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (4))){
var inst_36095 = (state_36141[(7)]);
var inst_36097 = (inst_36095 < cnt);
var state_36141__$1 = state_36141;
if(cljs.core.truth_(inst_36097)){
var statearr_36156_38005 = state_36141__$1;
(statearr_36156_38005[(1)] = (6));

} else {
var statearr_36157_38006 = state_36141__$1;
(statearr_36157_38006[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (15))){
var inst_36131 = (state_36141[(2)]);
var state_36141__$1 = state_36141;
var statearr_36159_38007 = state_36141__$1;
(statearr_36159_38007[(2)] = inst_36131);

(statearr_36159_38007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (13))){
var inst_36123 = cljs.core.async.close_BANG_(out);
var state_36141__$1 = state_36141;
var statearr_36161_38009 = state_36141__$1;
(statearr_36161_38009[(2)] = inst_36123);

(statearr_36161_38009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (6))){
var state_36141__$1 = state_36141;
var statearr_36163_38011 = state_36141__$1;
(statearr_36163_38011[(2)] = null);

(statearr_36163_38011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (3))){
var inst_36133 = (state_36141[(2)]);
var state_36141__$1 = state_36141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36141__$1,inst_36133);
} else {
if((state_val_36142 === (12))){
var inst_36118 = (state_36141[(8)]);
var inst_36118__$1 = (state_36141[(2)]);
var inst_36119 = cljs.core.some(cljs.core.nil_QMARK_,inst_36118__$1);
var state_36141__$1 = (function (){var statearr_36168 = state_36141;
(statearr_36168[(8)] = inst_36118__$1);

return statearr_36168;
})();
if(cljs.core.truth_(inst_36119)){
var statearr_36169_38013 = state_36141__$1;
(statearr_36169_38013[(1)] = (13));

} else {
var statearr_36170_38014 = state_36141__$1;
(statearr_36170_38014[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (2))){
var inst_36094 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36095 = (0);
var state_36141__$1 = (function (){var statearr_36173 = state_36141;
(statearr_36173[(9)] = inst_36094);

(statearr_36173[(7)] = inst_36095);

return statearr_36173;
})();
var statearr_36174_38017 = state_36141__$1;
(statearr_36174_38017[(2)] = null);

(statearr_36174_38017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (11))){
var inst_36095 = (state_36141[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36141,(10),Object,null,(9));
var inst_36104 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36095) : chs__$1.call(null,inst_36095));
var inst_36105 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36095) : done.call(null,inst_36095));
var inst_36106 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36104,inst_36105);
var state_36141__$1 = state_36141;
var statearr_36175_38019 = state_36141__$1;
(statearr_36175_38019[(2)] = inst_36106);


cljs.core.async.impl.ioc_helpers.process_exception(state_36141__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (9))){
var inst_36095 = (state_36141[(7)]);
var inst_36108 = (state_36141[(2)]);
var inst_36109 = (inst_36095 + (1));
var inst_36095__$1 = inst_36109;
var state_36141__$1 = (function (){var statearr_36178 = state_36141;
(statearr_36178[(10)] = inst_36108);

(statearr_36178[(7)] = inst_36095__$1);

return statearr_36178;
})();
var statearr_36180_38021 = state_36141__$1;
(statearr_36180_38021[(2)] = null);

(statearr_36180_38021[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (5))){
var inst_36115 = (state_36141[(2)]);
var state_36141__$1 = (function (){var statearr_36182 = state_36141;
(statearr_36182[(11)] = inst_36115);

return statearr_36182;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36141__$1,(12),dchan);
} else {
if((state_val_36142 === (14))){
var inst_36118 = (state_36141[(8)]);
var inst_36125 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36118);
var state_36141__$1 = state_36141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36141__$1,(16),out,inst_36125);
} else {
if((state_val_36142 === (16))){
var inst_36128 = (state_36141[(2)]);
var state_36141__$1 = (function (){var statearr_36186 = state_36141;
(statearr_36186[(12)] = inst_36128);

return statearr_36186;
})();
var statearr_36190_38024 = state_36141__$1;
(statearr_36190_38024[(2)] = null);

(statearr_36190_38024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (10))){
var inst_36099 = (state_36141[(2)]);
var inst_36100 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36141__$1 = (function (){var statearr_36193 = state_36141;
(statearr_36193[(13)] = inst_36099);

return statearr_36193;
})();
var statearr_36194_38027 = state_36141__$1;
(statearr_36194_38027[(2)] = inst_36100);


cljs.core.async.impl.ioc_helpers.process_exception(state_36141__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36142 === (8))){
var inst_36113 = (state_36141[(2)]);
var state_36141__$1 = state_36141;
var statearr_36196_38029 = state_36141__$1;
(statearr_36196_38029[(2)] = inst_36113);

(statearr_36196_38029[(1)] = (5));


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
var statearr_36198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36198[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36198[(1)] = (1));

return statearr_36198;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36141){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36141);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36200){if((e36200 instanceof Object)){
var ex__34210__auto__ = e36200;
var statearr_36202_38030 = state_36141;
(statearr_36202_38030[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38033 = state_36141;
state_36141 = G__38033;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36204 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36204[(6)] = c__34274__auto___38001);

return statearr_36204;
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
var G__36225 = arguments.length;
switch (G__36225) {
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
var c__34274__auto___38037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36264){
var state_val_36265 = (state_36264[(1)]);
if((state_val_36265 === (7))){
var inst_36241 = (state_36264[(7)]);
var inst_36240 = (state_36264[(8)]);
var inst_36240__$1 = (state_36264[(2)]);
var inst_36241__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36240__$1,(0),null);
var inst_36242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36240__$1,(1),null);
var inst_36244 = (inst_36241__$1 == null);
var state_36264__$1 = (function (){var statearr_36269 = state_36264;
(statearr_36269[(7)] = inst_36241__$1);

(statearr_36269[(8)] = inst_36240__$1);

(statearr_36269[(9)] = inst_36242);

return statearr_36269;
})();
if(cljs.core.truth_(inst_36244)){
var statearr_36276_38040 = state_36264__$1;
(statearr_36276_38040[(1)] = (8));

} else {
var statearr_36277_38041 = state_36264__$1;
(statearr_36277_38041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (1))){
var inst_36229 = cljs.core.vec(chs);
var inst_36230 = inst_36229;
var state_36264__$1 = (function (){var statearr_36278 = state_36264;
(statearr_36278[(10)] = inst_36230);

return statearr_36278;
})();
var statearr_36280_38043 = state_36264__$1;
(statearr_36280_38043[(2)] = null);

(statearr_36280_38043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (4))){
var inst_36230 = (state_36264[(10)]);
var state_36264__$1 = state_36264;
return cljs.core.async.ioc_alts_BANG_(state_36264__$1,(7),inst_36230);
} else {
if((state_val_36265 === (6))){
var inst_36260 = (state_36264[(2)]);
var state_36264__$1 = state_36264;
var statearr_36282_38046 = state_36264__$1;
(statearr_36282_38046[(2)] = inst_36260);

(statearr_36282_38046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (3))){
var inst_36262 = (state_36264[(2)]);
var state_36264__$1 = state_36264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36264__$1,inst_36262);
} else {
if((state_val_36265 === (2))){
var inst_36230 = (state_36264[(10)]);
var inst_36232 = cljs.core.count(inst_36230);
var inst_36233 = (inst_36232 > (0));
var state_36264__$1 = state_36264;
if(cljs.core.truth_(inst_36233)){
var statearr_36287_38047 = state_36264__$1;
(statearr_36287_38047[(1)] = (4));

} else {
var statearr_36288_38048 = state_36264__$1;
(statearr_36288_38048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (11))){
var inst_36230 = (state_36264[(10)]);
var inst_36253 = (state_36264[(2)]);
var tmp36284 = inst_36230;
var inst_36230__$1 = tmp36284;
var state_36264__$1 = (function (){var statearr_36289 = state_36264;
(statearr_36289[(11)] = inst_36253);

(statearr_36289[(10)] = inst_36230__$1);

return statearr_36289;
})();
var statearr_36291_38052 = state_36264__$1;
(statearr_36291_38052[(2)] = null);

(statearr_36291_38052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (9))){
var inst_36241 = (state_36264[(7)]);
var state_36264__$1 = state_36264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36264__$1,(11),out,inst_36241);
} else {
if((state_val_36265 === (5))){
var inst_36258 = cljs.core.async.close_BANG_(out);
var state_36264__$1 = state_36264;
var statearr_36294_38053 = state_36264__$1;
(statearr_36294_38053[(2)] = inst_36258);

(statearr_36294_38053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (10))){
var inst_36256 = (state_36264[(2)]);
var state_36264__$1 = state_36264;
var statearr_36295_38054 = state_36264__$1;
(statearr_36295_38054[(2)] = inst_36256);

(statearr_36295_38054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (8))){
var inst_36241 = (state_36264[(7)]);
var inst_36240 = (state_36264[(8)]);
var inst_36230 = (state_36264[(10)]);
var inst_36242 = (state_36264[(9)]);
var inst_36248 = (function (){var cs = inst_36230;
var vec__36236 = inst_36240;
var v = inst_36241;
var c = inst_36242;
return (function (p1__36206_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36206_SHARP_);
});
})();
var inst_36249 = cljs.core.filterv(inst_36248,inst_36230);
var inst_36230__$1 = inst_36249;
var state_36264__$1 = (function (){var statearr_36299 = state_36264;
(statearr_36299[(10)] = inst_36230__$1);

return statearr_36299;
})();
var statearr_36300_38058 = state_36264__$1;
(statearr_36300_38058[(2)] = null);

(statearr_36300_38058[(1)] = (2));


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
var statearr_36303 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36303[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36303[(1)] = (1));

return statearr_36303;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36264){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36264);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36304){if((e36304 instanceof Object)){
var ex__34210__auto__ = e36304;
var statearr_36305_38062 = state_36264;
(statearr_36305_38062[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38063 = state_36264;
state_36264 = G__38063;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36307 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36307[(6)] = c__34274__auto___38037);

return statearr_36307;
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
var G__36319 = arguments.length;
switch (G__36319) {
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
var c__34274__auto___38068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36347){
var state_val_36348 = (state_36347[(1)]);
if((state_val_36348 === (7))){
var inst_36328 = (state_36347[(7)]);
var inst_36328__$1 = (state_36347[(2)]);
var inst_36330 = (inst_36328__$1 == null);
var inst_36331 = cljs.core.not(inst_36330);
var state_36347__$1 = (function (){var statearr_36351 = state_36347;
(statearr_36351[(7)] = inst_36328__$1);

return statearr_36351;
})();
if(inst_36331){
var statearr_36352_38070 = state_36347__$1;
(statearr_36352_38070[(1)] = (8));

} else {
var statearr_36353_38071 = state_36347__$1;
(statearr_36353_38071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (1))){
var inst_36323 = (0);
var state_36347__$1 = (function (){var statearr_36356 = state_36347;
(statearr_36356[(8)] = inst_36323);

return statearr_36356;
})();
var statearr_36357_38074 = state_36347__$1;
(statearr_36357_38074[(2)] = null);

(statearr_36357_38074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (4))){
var state_36347__$1 = state_36347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36347__$1,(7),ch);
} else {
if((state_val_36348 === (6))){
var inst_36342 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36366_38075 = state_36347__$1;
(statearr_36366_38075[(2)] = inst_36342);

(statearr_36366_38075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (3))){
var inst_36344 = (state_36347[(2)]);
var inst_36345 = cljs.core.async.close_BANG_(out);
var state_36347__$1 = (function (){var statearr_36369 = state_36347;
(statearr_36369[(9)] = inst_36344);

return statearr_36369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36347__$1,inst_36345);
} else {
if((state_val_36348 === (2))){
var inst_36323 = (state_36347[(8)]);
var inst_36325 = (inst_36323 < n);
var state_36347__$1 = state_36347;
if(cljs.core.truth_(inst_36325)){
var statearr_36370_38078 = state_36347__$1;
(statearr_36370_38078[(1)] = (4));

} else {
var statearr_36372_38080 = state_36347__$1;
(statearr_36372_38080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (11))){
var inst_36323 = (state_36347[(8)]);
var inst_36334 = (state_36347[(2)]);
var inst_36335 = (inst_36323 + (1));
var inst_36323__$1 = inst_36335;
var state_36347__$1 = (function (){var statearr_36373 = state_36347;
(statearr_36373[(10)] = inst_36334);

(statearr_36373[(8)] = inst_36323__$1);

return statearr_36373;
})();
var statearr_36374_38081 = state_36347__$1;
(statearr_36374_38081[(2)] = null);

(statearr_36374_38081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (9))){
var state_36347__$1 = state_36347;
var statearr_36379_38082 = state_36347__$1;
(statearr_36379_38082[(2)] = null);

(statearr_36379_38082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (5))){
var state_36347__$1 = state_36347;
var statearr_36380_38084 = state_36347__$1;
(statearr_36380_38084[(2)] = null);

(statearr_36380_38084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (10))){
var inst_36339 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36387_38086 = state_36347__$1;
(statearr_36387_38086[(2)] = inst_36339);

(statearr_36387_38086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (8))){
var inst_36328 = (state_36347[(7)]);
var state_36347__$1 = state_36347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36347__$1,(11),out,inst_36328);
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
var statearr_36388 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36388[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36388[(1)] = (1));

return statearr_36388;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36347){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36347);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36390){if((e36390 instanceof Object)){
var ex__34210__auto__ = e36390;
var statearr_36396_38089 = state_36347;
(statearr_36396_38089[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38092 = state_36347;
state_36347 = G__38092;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36400 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36400[(6)] = c__34274__auto___38068);

return statearr_36400;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36403 = (function (f,ch,meta36404){
this.f = f;
this.ch = ch;
this.meta36404 = meta36404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36405,meta36404__$1){
var self__ = this;
var _36405__$1 = this;
return (new cljs.core.async.t_cljs$core$async36403(self__.f,self__.ch,meta36404__$1));
}));

(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36405){
var self__ = this;
var _36405__$1 = this;
return self__.meta36404;
}));

(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36413 = (function (f,ch,meta36404,_,fn1,meta36414){
this.f = f;
this.ch = ch;
this.meta36404 = meta36404;
this._ = _;
this.fn1 = fn1;
this.meta36414 = meta36414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36415,meta36414__$1){
var self__ = this;
var _36415__$1 = this;
return (new cljs.core.async.t_cljs$core$async36413(self__.f,self__.ch,self__.meta36404,self__._,self__.fn1,meta36414__$1));
}));

(cljs.core.async.t_cljs$core$async36413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36415){
var self__ = this;
var _36415__$1 = this;
return self__.meta36414;
}));

(cljs.core.async.t_cljs$core$async36413.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36413.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36402_SHARP_){
var G__36421 = (((p1__36402_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36402_SHARP_) : self__.f.call(null,p1__36402_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36421) : f1.call(null,G__36421));
});
}));

(cljs.core.async.t_cljs$core$async36413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36404","meta36404",-1876211909,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36403","cljs.core.async/t_cljs$core$async36403",-34359117,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36414","meta36414",1739492065,null)], null);
}));

(cljs.core.async.t_cljs$core$async36413.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36413");

(cljs.core.async.t_cljs$core$async36413.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36413");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36413.
 */
cljs.core.async.__GT_t_cljs$core$async36413 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36413(f__$1,ch__$1,meta36404__$1,___$2,fn1__$1,meta36414){
return (new cljs.core.async.t_cljs$core$async36413(f__$1,ch__$1,meta36404__$1,___$2,fn1__$1,meta36414));
});

}

return (new cljs.core.async.t_cljs$core$async36413(self__.f,self__.ch,self__.meta36404,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36427 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36427) : self__.f.call(null,G__36427));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36404","meta36404",-1876211909,null)], null);
}));

(cljs.core.async.t_cljs$core$async36403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36403");

(cljs.core.async.t_cljs$core$async36403.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36403.
 */
cljs.core.async.__GT_t_cljs$core$async36403 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36403(f__$1,ch__$1,meta36404){
return (new cljs.core.async.t_cljs$core$async36403(f__$1,ch__$1,meta36404));
});

}

return (new cljs.core.async.t_cljs$core$async36403(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36431 = (function (f,ch,meta36432){
this.f = f;
this.ch = ch;
this.meta36432 = meta36432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36433,meta36432__$1){
var self__ = this;
var _36433__$1 = this;
return (new cljs.core.async.t_cljs$core$async36431(self__.f,self__.ch,meta36432__$1));
}));

(cljs.core.async.t_cljs$core$async36431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36433){
var self__ = this;
var _36433__$1 = this;
return self__.meta36432;
}));

(cljs.core.async.t_cljs$core$async36431.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36431.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36431.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36432","meta36432",944598668,null)], null);
}));

(cljs.core.async.t_cljs$core$async36431.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36431");

(cljs.core.async.t_cljs$core$async36431.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36431");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36431.
 */
cljs.core.async.__GT_t_cljs$core$async36431 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36431(f__$1,ch__$1,meta36432){
return (new cljs.core.async.t_cljs$core$async36431(f__$1,ch__$1,meta36432));
});

}

return (new cljs.core.async.t_cljs$core$async36431(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36439 = (function (p,ch,meta36440){
this.p = p;
this.ch = ch;
this.meta36440 = meta36440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36441,meta36440__$1){
var self__ = this;
var _36441__$1 = this;
return (new cljs.core.async.t_cljs$core$async36439(self__.p,self__.ch,meta36440__$1));
}));

(cljs.core.async.t_cljs$core$async36439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36441){
var self__ = this;
var _36441__$1 = this;
return self__.meta36440;
}));

(cljs.core.async.t_cljs$core$async36439.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36439.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36439.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36439.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36440","meta36440",931975115,null)], null);
}));

(cljs.core.async.t_cljs$core$async36439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36439");

(cljs.core.async.t_cljs$core$async36439.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36439.
 */
cljs.core.async.__GT_t_cljs$core$async36439 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36439(p__$1,ch__$1,meta36440){
return (new cljs.core.async.t_cljs$core$async36439(p__$1,ch__$1,meta36440));
});

}

return (new cljs.core.async.t_cljs$core$async36439(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36450 = arguments.length;
switch (G__36450) {
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
var c__34274__auto___38115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36476){
var state_val_36477 = (state_36476[(1)]);
if((state_val_36477 === (7))){
var inst_36472 = (state_36476[(2)]);
var state_36476__$1 = state_36476;
var statearr_36479_38119 = state_36476__$1;
(statearr_36479_38119[(2)] = inst_36472);

(statearr_36479_38119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36477 === (1))){
var state_36476__$1 = state_36476;
var statearr_36481_38120 = state_36476__$1;
(statearr_36481_38120[(2)] = null);

(statearr_36481_38120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36477 === (4))){
var inst_36454 = (state_36476[(7)]);
var inst_36454__$1 = (state_36476[(2)]);
var inst_36455 = (inst_36454__$1 == null);
var state_36476__$1 = (function (){var statearr_36482 = state_36476;
(statearr_36482[(7)] = inst_36454__$1);

return statearr_36482;
})();
if(cljs.core.truth_(inst_36455)){
var statearr_36483_38122 = state_36476__$1;
(statearr_36483_38122[(1)] = (5));

} else {
var statearr_36484_38124 = state_36476__$1;
(statearr_36484_38124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36477 === (6))){
var inst_36454 = (state_36476[(7)]);
var inst_36460 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36454) : p.call(null,inst_36454));
var state_36476__$1 = state_36476;
if(cljs.core.truth_(inst_36460)){
var statearr_36486_38126 = state_36476__$1;
(statearr_36486_38126[(1)] = (8));

} else {
var statearr_36487_38127 = state_36476__$1;
(statearr_36487_38127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36477 === (3))){
var inst_36474 = (state_36476[(2)]);
var state_36476__$1 = state_36476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36476__$1,inst_36474);
} else {
if((state_val_36477 === (2))){
var state_36476__$1 = state_36476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36476__$1,(4),ch);
} else {
if((state_val_36477 === (11))){
var inst_36465 = (state_36476[(2)]);
var state_36476__$1 = state_36476;
var statearr_36489_38128 = state_36476__$1;
(statearr_36489_38128[(2)] = inst_36465);

(statearr_36489_38128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36477 === (9))){
var state_36476__$1 = state_36476;
var statearr_36491_38130 = state_36476__$1;
(statearr_36491_38130[(2)] = null);

(statearr_36491_38130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36477 === (5))){
var inst_36458 = cljs.core.async.close_BANG_(out);
var state_36476__$1 = state_36476;
var statearr_36495_38132 = state_36476__$1;
(statearr_36495_38132[(2)] = inst_36458);

(statearr_36495_38132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36477 === (10))){
var inst_36468 = (state_36476[(2)]);
var state_36476__$1 = (function (){var statearr_36497 = state_36476;
(statearr_36497[(8)] = inst_36468);

return statearr_36497;
})();
var statearr_36498_38134 = state_36476__$1;
(statearr_36498_38134[(2)] = null);

(statearr_36498_38134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36477 === (8))){
var inst_36454 = (state_36476[(7)]);
var state_36476__$1 = state_36476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36476__$1,(11),out,inst_36454);
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
var statearr_36500 = [null,null,null,null,null,null,null,null,null];
(statearr_36500[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36500[(1)] = (1));

return statearr_36500;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36476){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36476);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36501){if((e36501 instanceof Object)){
var ex__34210__auto__ = e36501;
var statearr_36502_38136 = state_36476;
(statearr_36502_38136[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38137 = state_36476;
state_36476 = G__38137;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36504 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36504[(6)] = c__34274__auto___38115);

return statearr_36504;
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
var G__36507 = arguments.length;
switch (G__36507) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36574){
var state_val_36575 = (state_36574[(1)]);
if((state_val_36575 === (7))){
var inst_36570 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
var statearr_36579_38144 = state_36574__$1;
(statearr_36579_38144[(2)] = inst_36570);

(statearr_36579_38144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (20))){
var inst_36539 = (state_36574[(7)]);
var inst_36550 = (state_36574[(2)]);
var inst_36551 = cljs.core.next(inst_36539);
var inst_36524 = inst_36551;
var inst_36525 = null;
var inst_36526 = (0);
var inst_36527 = (0);
var state_36574__$1 = (function (){var statearr_36580 = state_36574;
(statearr_36580[(8)] = inst_36550);

(statearr_36580[(9)] = inst_36526);

(statearr_36580[(10)] = inst_36527);

(statearr_36580[(11)] = inst_36524);

(statearr_36580[(12)] = inst_36525);

return statearr_36580;
})();
var statearr_36582_38149 = state_36574__$1;
(statearr_36582_38149[(2)] = null);

(statearr_36582_38149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (1))){
var state_36574__$1 = state_36574;
var statearr_36583_38150 = state_36574__$1;
(statearr_36583_38150[(2)] = null);

(statearr_36583_38150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (4))){
var inst_36513 = (state_36574[(13)]);
var inst_36513__$1 = (state_36574[(2)]);
var inst_36514 = (inst_36513__$1 == null);
var state_36574__$1 = (function (){var statearr_36584 = state_36574;
(statearr_36584[(13)] = inst_36513__$1);

return statearr_36584;
})();
if(cljs.core.truth_(inst_36514)){
var statearr_36586_38154 = state_36574__$1;
(statearr_36586_38154[(1)] = (5));

} else {
var statearr_36587_38155 = state_36574__$1;
(statearr_36587_38155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (15))){
var state_36574__$1 = state_36574;
var statearr_36591_38156 = state_36574__$1;
(statearr_36591_38156[(2)] = null);

(statearr_36591_38156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (21))){
var state_36574__$1 = state_36574;
var statearr_36593_38157 = state_36574__$1;
(statearr_36593_38157[(2)] = null);

(statearr_36593_38157[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (13))){
var inst_36526 = (state_36574[(9)]);
var inst_36527 = (state_36574[(10)]);
var inst_36524 = (state_36574[(11)]);
var inst_36525 = (state_36574[(12)]);
var inst_36534 = (state_36574[(2)]);
var inst_36536 = (inst_36527 + (1));
var tmp36588 = inst_36526;
var tmp36589 = inst_36524;
var tmp36590 = inst_36525;
var inst_36524__$1 = tmp36589;
var inst_36525__$1 = tmp36590;
var inst_36526__$1 = tmp36588;
var inst_36527__$1 = inst_36536;
var state_36574__$1 = (function (){var statearr_36595 = state_36574;
(statearr_36595[(9)] = inst_36526__$1);

(statearr_36595[(10)] = inst_36527__$1);

(statearr_36595[(11)] = inst_36524__$1);

(statearr_36595[(14)] = inst_36534);

(statearr_36595[(12)] = inst_36525__$1);

return statearr_36595;
})();
var statearr_36596_38159 = state_36574__$1;
(statearr_36596_38159[(2)] = null);

(statearr_36596_38159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (22))){
var state_36574__$1 = state_36574;
var statearr_36598_38162 = state_36574__$1;
(statearr_36598_38162[(2)] = null);

(statearr_36598_38162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (6))){
var inst_36513 = (state_36574[(13)]);
var inst_36522 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36513) : f.call(null,inst_36513));
var inst_36523 = cljs.core.seq(inst_36522);
var inst_36524 = inst_36523;
var inst_36525 = null;
var inst_36526 = (0);
var inst_36527 = (0);
var state_36574__$1 = (function (){var statearr_36599 = state_36574;
(statearr_36599[(9)] = inst_36526);

(statearr_36599[(10)] = inst_36527);

(statearr_36599[(11)] = inst_36524);

(statearr_36599[(12)] = inst_36525);

return statearr_36599;
})();
var statearr_36600_38163 = state_36574__$1;
(statearr_36600_38163[(2)] = null);

(statearr_36600_38163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (17))){
var inst_36539 = (state_36574[(7)]);
var inst_36543 = cljs.core.chunk_first(inst_36539);
var inst_36544 = cljs.core.chunk_rest(inst_36539);
var inst_36545 = cljs.core.count(inst_36543);
var inst_36524 = inst_36544;
var inst_36525 = inst_36543;
var inst_36526 = inst_36545;
var inst_36527 = (0);
var state_36574__$1 = (function (){var statearr_36602 = state_36574;
(statearr_36602[(9)] = inst_36526);

(statearr_36602[(10)] = inst_36527);

(statearr_36602[(11)] = inst_36524);

(statearr_36602[(12)] = inst_36525);

return statearr_36602;
})();
var statearr_36604_38165 = state_36574__$1;
(statearr_36604_38165[(2)] = null);

(statearr_36604_38165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (3))){
var inst_36572 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36574__$1,inst_36572);
} else {
if((state_val_36575 === (12))){
var inst_36559 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
var statearr_36605_38168 = state_36574__$1;
(statearr_36605_38168[(2)] = inst_36559);

(statearr_36605_38168[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (2))){
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36574__$1,(4),in$);
} else {
if((state_val_36575 === (23))){
var inst_36567 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
var statearr_36607_38170 = state_36574__$1;
(statearr_36607_38170[(2)] = inst_36567);

(statearr_36607_38170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (19))){
var inst_36554 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
var statearr_36608_38171 = state_36574__$1;
(statearr_36608_38171[(2)] = inst_36554);

(statearr_36608_38171[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (11))){
var inst_36539 = (state_36574[(7)]);
var inst_36524 = (state_36574[(11)]);
var inst_36539__$1 = cljs.core.seq(inst_36524);
var state_36574__$1 = (function (){var statearr_36610 = state_36574;
(statearr_36610[(7)] = inst_36539__$1);

return statearr_36610;
})();
if(inst_36539__$1){
var statearr_36611_38172 = state_36574__$1;
(statearr_36611_38172[(1)] = (14));

} else {
var statearr_36612_38173 = state_36574__$1;
(statearr_36612_38173[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (9))){
var inst_36561 = (state_36574[(2)]);
var inst_36562 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36574__$1 = (function (){var statearr_36614 = state_36574;
(statearr_36614[(15)] = inst_36561);

return statearr_36614;
})();
if(cljs.core.truth_(inst_36562)){
var statearr_36615_38175 = state_36574__$1;
(statearr_36615_38175[(1)] = (21));

} else {
var statearr_36616_38176 = state_36574__$1;
(statearr_36616_38176[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (5))){
var inst_36516 = cljs.core.async.close_BANG_(out);
var state_36574__$1 = state_36574;
var statearr_36618_38177 = state_36574__$1;
(statearr_36618_38177[(2)] = inst_36516);

(statearr_36618_38177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (14))){
var inst_36539 = (state_36574[(7)]);
var inst_36541 = cljs.core.chunked_seq_QMARK_(inst_36539);
var state_36574__$1 = state_36574;
if(inst_36541){
var statearr_36619_38178 = state_36574__$1;
(statearr_36619_38178[(1)] = (17));

} else {
var statearr_36621_38179 = state_36574__$1;
(statearr_36621_38179[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (16))){
var inst_36557 = (state_36574[(2)]);
var state_36574__$1 = state_36574;
var statearr_36622_38180 = state_36574__$1;
(statearr_36622_38180[(2)] = inst_36557);

(statearr_36622_38180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36575 === (10))){
var inst_36527 = (state_36574[(10)]);
var inst_36525 = (state_36574[(12)]);
var inst_36532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36525,inst_36527);
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36574__$1,(13),out,inst_36532);
} else {
if((state_val_36575 === (18))){
var inst_36539 = (state_36574[(7)]);
var inst_36548 = cljs.core.first(inst_36539);
var state_36574__$1 = state_36574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36574__$1,(20),out,inst_36548);
} else {
if((state_val_36575 === (8))){
var inst_36526 = (state_36574[(9)]);
var inst_36527 = (state_36574[(10)]);
var inst_36529 = (inst_36527 < inst_36526);
var inst_36530 = inst_36529;
var state_36574__$1 = state_36574;
if(cljs.core.truth_(inst_36530)){
var statearr_36624_38185 = state_36574__$1;
(statearr_36624_38185[(1)] = (10));

} else {
var statearr_36626_38187 = state_36574__$1;
(statearr_36626_38187[(1)] = (11));

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
var statearr_36627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36627[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36627[(1)] = (1));

return statearr_36627;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36574){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36574);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36629){if((e36629 instanceof Object)){
var ex__34210__auto__ = e36629;
var statearr_36630_38189 = state_36574;
(statearr_36630_38189[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38190 = state_36574;
state_36574 = G__38190;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36574){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36632 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36632[(6)] = c__34274__auto__);

return statearr_36632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36635 = arguments.length;
switch (G__36635) {
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
var G__36644 = arguments.length;
switch (G__36644) {
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
var c__34274__auto___38195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36670){
var state_val_36671 = (state_36670[(1)]);
if((state_val_36671 === (7))){
var inst_36665 = (state_36670[(2)]);
var state_36670__$1 = state_36670;
var statearr_36673_38197 = state_36670__$1;
(statearr_36673_38197[(2)] = inst_36665);

(statearr_36673_38197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (1))){
var inst_36646 = null;
var state_36670__$1 = (function (){var statearr_36674 = state_36670;
(statearr_36674[(7)] = inst_36646);

return statearr_36674;
})();
var statearr_36675_38198 = state_36670__$1;
(statearr_36675_38198[(2)] = null);

(statearr_36675_38198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (4))){
var inst_36649 = (state_36670[(8)]);
var inst_36649__$1 = (state_36670[(2)]);
var inst_36650 = (inst_36649__$1 == null);
var inst_36652 = cljs.core.not(inst_36650);
var state_36670__$1 = (function (){var statearr_36677 = state_36670;
(statearr_36677[(8)] = inst_36649__$1);

return statearr_36677;
})();
if(inst_36652){
var statearr_36678_38200 = state_36670__$1;
(statearr_36678_38200[(1)] = (5));

} else {
var statearr_36679_38201 = state_36670__$1;
(statearr_36679_38201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (6))){
var state_36670__$1 = state_36670;
var statearr_36681_38202 = state_36670__$1;
(statearr_36681_38202[(2)] = null);

(statearr_36681_38202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (3))){
var inst_36667 = (state_36670[(2)]);
var inst_36668 = cljs.core.async.close_BANG_(out);
var state_36670__$1 = (function (){var statearr_36682 = state_36670;
(statearr_36682[(9)] = inst_36667);

return statearr_36682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36670__$1,inst_36668);
} else {
if((state_val_36671 === (2))){
var state_36670__$1 = state_36670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36670__$1,(4),ch);
} else {
if((state_val_36671 === (11))){
var inst_36649 = (state_36670[(8)]);
var inst_36659 = (state_36670[(2)]);
var inst_36646 = inst_36649;
var state_36670__$1 = (function (){var statearr_36684 = state_36670;
(statearr_36684[(10)] = inst_36659);

(statearr_36684[(7)] = inst_36646);

return statearr_36684;
})();
var statearr_36685_38203 = state_36670__$1;
(statearr_36685_38203[(2)] = null);

(statearr_36685_38203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (9))){
var inst_36649 = (state_36670[(8)]);
var state_36670__$1 = state_36670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36670__$1,(11),out,inst_36649);
} else {
if((state_val_36671 === (5))){
var inst_36649 = (state_36670[(8)]);
var inst_36646 = (state_36670[(7)]);
var inst_36654 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36649,inst_36646);
var state_36670__$1 = state_36670;
if(inst_36654){
var statearr_36688_38205 = state_36670__$1;
(statearr_36688_38205[(1)] = (8));

} else {
var statearr_36689_38206 = state_36670__$1;
(statearr_36689_38206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (10))){
var inst_36662 = (state_36670[(2)]);
var state_36670__$1 = state_36670;
var statearr_36691_38207 = state_36670__$1;
(statearr_36691_38207[(2)] = inst_36662);

(statearr_36691_38207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36671 === (8))){
var inst_36646 = (state_36670[(7)]);
var tmp36687 = inst_36646;
var inst_36646__$1 = tmp36687;
var state_36670__$1 = (function (){var statearr_36692 = state_36670;
(statearr_36692[(7)] = inst_36646__$1);

return statearr_36692;
})();
var statearr_36693_38208 = state_36670__$1;
(statearr_36693_38208[(2)] = null);

(statearr_36693_38208[(1)] = (2));


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
var statearr_36695 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36695[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36695[(1)] = (1));

return statearr_36695;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36670){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36670);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36696){if((e36696 instanceof Object)){
var ex__34210__auto__ = e36696;
var statearr_36698_38210 = state_36670;
(statearr_36698_38210[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38211 = state_36670;
state_36670 = G__38211;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36699 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36699[(6)] = c__34274__auto___38195);

return statearr_36699;
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
var G__36703 = arguments.length;
switch (G__36703) {
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
var c__34274__auto___38215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36744){
var state_val_36745 = (state_36744[(1)]);
if((state_val_36745 === (7))){
var inst_36739 = (state_36744[(2)]);
var state_36744__$1 = state_36744;
var statearr_36747_38216 = state_36744__$1;
(statearr_36747_38216[(2)] = inst_36739);

(statearr_36747_38216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36745 === (1))){
var inst_36706 = (new Array(n));
var inst_36707 = inst_36706;
var inst_36708 = (0);
var state_36744__$1 = (function (){var statearr_36748 = state_36744;
(statearr_36748[(7)] = inst_36708);

(statearr_36748[(8)] = inst_36707);

return statearr_36748;
})();
var statearr_36750_38218 = state_36744__$1;
(statearr_36750_38218[(2)] = null);

(statearr_36750_38218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36745 === (4))){
var inst_36711 = (state_36744[(9)]);
var inst_36711__$1 = (state_36744[(2)]);
var inst_36712 = (inst_36711__$1 == null);
var inst_36713 = cljs.core.not(inst_36712);
var state_36744__$1 = (function (){var statearr_36751 = state_36744;
(statearr_36751[(9)] = inst_36711__$1);

return statearr_36751;
})();
if(inst_36713){
var statearr_36752_38219 = state_36744__$1;
(statearr_36752_38219[(1)] = (5));

} else {
var statearr_36753_38220 = state_36744__$1;
(statearr_36753_38220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36745 === (15))){
var inst_36733 = (state_36744[(2)]);
var state_36744__$1 = state_36744;
var statearr_36755_38222 = state_36744__$1;
(statearr_36755_38222[(2)] = inst_36733);

(statearr_36755_38222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36745 === (13))){
var state_36744__$1 = state_36744;
var statearr_36756_38223 = state_36744__$1;
(statearr_36756_38223[(2)] = null);

(statearr_36756_38223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36745 === (6))){
var inst_36708 = (state_36744[(7)]);
var inst_36729 = (inst_36708 > (0));
var state_36744__$1 = state_36744;
if(cljs.core.truth_(inst_36729)){
var statearr_36758_38224 = state_36744__$1;
(statearr_36758_38224[(1)] = (12));

} else {
var statearr_36759_38225 = state_36744__$1;
(statearr_36759_38225[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36745 === (3))){
var inst_36741 = (state_36744[(2)]);
var state_36744__$1 = state_36744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36744__$1,inst_36741);
} else {
if((state_val_36745 === (12))){
var inst_36707 = (state_36744[(8)]);
var inst_36731 = cljs.core.vec(inst_36707);
var state_36744__$1 = state_36744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36744__$1,(15),out,inst_36731);
} else {
if((state_val_36745 === (2))){
var state_36744__$1 = state_36744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36744__$1,(4),ch);
} else {
if((state_val_36745 === (11))){
var inst_36723 = (state_36744[(2)]);
var inst_36724 = (new Array(n));
var inst_36707 = inst_36724;
var inst_36708 = (0);
var state_36744__$1 = (function (){var statearr_36761 = state_36744;
(statearr_36761[(7)] = inst_36708);

(statearr_36761[(8)] = inst_36707);

(statearr_36761[(10)] = inst_36723);

return statearr_36761;
})();
var statearr_36763_38227 = state_36744__$1;
(statearr_36763_38227[(2)] = null);

(statearr_36763_38227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36745 === (9))){
var inst_36707 = (state_36744[(8)]);
var inst_36721 = cljs.core.vec(inst_36707);
var state_36744__$1 = state_36744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36744__$1,(11),out,inst_36721);
} else {
if((state_val_36745 === (5))){
var inst_36708 = (state_36744[(7)]);
var inst_36707 = (state_36744[(8)]);
var inst_36711 = (state_36744[(9)]);
var inst_36716 = (state_36744[(11)]);
var inst_36715 = (inst_36707[inst_36708] = inst_36711);
var inst_36716__$1 = (inst_36708 + (1));
var inst_36717 = (inst_36716__$1 < n);
var state_36744__$1 = (function (){var statearr_36765 = state_36744;
(statearr_36765[(11)] = inst_36716__$1);

(statearr_36765[(12)] = inst_36715);

return statearr_36765;
})();
if(cljs.core.truth_(inst_36717)){
var statearr_36766_38229 = state_36744__$1;
(statearr_36766_38229[(1)] = (8));

} else {
var statearr_36767_38231 = state_36744__$1;
(statearr_36767_38231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36745 === (14))){
var inst_36736 = (state_36744[(2)]);
var inst_36737 = cljs.core.async.close_BANG_(out);
var state_36744__$1 = (function (){var statearr_36770 = state_36744;
(statearr_36770[(13)] = inst_36736);

return statearr_36770;
})();
var statearr_36771_38232 = state_36744__$1;
(statearr_36771_38232[(2)] = inst_36737);

(statearr_36771_38232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36745 === (10))){
var inst_36727 = (state_36744[(2)]);
var state_36744__$1 = state_36744;
var statearr_36772_38233 = state_36744__$1;
(statearr_36772_38233[(2)] = inst_36727);

(statearr_36772_38233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36745 === (8))){
var inst_36707 = (state_36744[(8)]);
var inst_36716 = (state_36744[(11)]);
var tmp36768 = inst_36707;
var inst_36707__$1 = tmp36768;
var inst_36708 = inst_36716;
var state_36744__$1 = (function (){var statearr_36774 = state_36744;
(statearr_36774[(7)] = inst_36708);

(statearr_36774[(8)] = inst_36707__$1);

return statearr_36774;
})();
var statearr_36775_38235 = state_36744__$1;
(statearr_36775_38235[(2)] = null);

(statearr_36775_38235[(1)] = (2));


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
var statearr_36777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36777[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36777[(1)] = (1));

return statearr_36777;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36744){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36744);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36783){if((e36783 instanceof Object)){
var ex__34210__auto__ = e36783;
var statearr_36785_38237 = state_36744;
(statearr_36785_38237[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38238 = state_36744;
state_36744 = G__38238;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36787 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36787[(6)] = c__34274__auto___38215);

return statearr_36787;
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
var G__36790 = arguments.length;
switch (G__36790) {
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
var c__34274__auto___38241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36836){
var state_val_36837 = (state_36836[(1)]);
if((state_val_36837 === (7))){
var inst_36832 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
var statearr_36839_38243 = state_36836__$1;
(statearr_36839_38243[(2)] = inst_36832);

(statearr_36839_38243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (1))){
var inst_36793 = [];
var inst_36794 = inst_36793;
var inst_36795 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36836__$1 = (function (){var statearr_36840 = state_36836;
(statearr_36840[(7)] = inst_36794);

(statearr_36840[(8)] = inst_36795);

return statearr_36840;
})();
var statearr_36842_38244 = state_36836__$1;
(statearr_36842_38244[(2)] = null);

(statearr_36842_38244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (4))){
var inst_36798 = (state_36836[(9)]);
var inst_36798__$1 = (state_36836[(2)]);
var inst_36799 = (inst_36798__$1 == null);
var inst_36800 = cljs.core.not(inst_36799);
var state_36836__$1 = (function (){var statearr_36843 = state_36836;
(statearr_36843[(9)] = inst_36798__$1);

return statearr_36843;
})();
if(inst_36800){
var statearr_36844_38246 = state_36836__$1;
(statearr_36844_38246[(1)] = (5));

} else {
var statearr_36846_38247 = state_36836__$1;
(statearr_36846_38247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (15))){
var inst_36826 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
var statearr_36847_38248 = state_36836__$1;
(statearr_36847_38248[(2)] = inst_36826);

(statearr_36847_38248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (13))){
var state_36836__$1 = state_36836;
var statearr_36848_38249 = state_36836__$1;
(statearr_36848_38249[(2)] = null);

(statearr_36848_38249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (6))){
var inst_36794 = (state_36836[(7)]);
var inst_36821 = inst_36794.length;
var inst_36822 = (inst_36821 > (0));
var state_36836__$1 = state_36836;
if(cljs.core.truth_(inst_36822)){
var statearr_36850_38251 = state_36836__$1;
(statearr_36850_38251[(1)] = (12));

} else {
var statearr_36851_38252 = state_36836__$1;
(statearr_36851_38252[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (3))){
var inst_36834 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36836__$1,inst_36834);
} else {
if((state_val_36837 === (12))){
var inst_36794 = (state_36836[(7)]);
var inst_36824 = cljs.core.vec(inst_36794);
var state_36836__$1 = state_36836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36836__$1,(15),out,inst_36824);
} else {
if((state_val_36837 === (2))){
var state_36836__$1 = state_36836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36836__$1,(4),ch);
} else {
if((state_val_36837 === (11))){
var inst_36802 = (state_36836[(10)]);
var inst_36798 = (state_36836[(9)]);
var inst_36813 = (state_36836[(2)]);
var inst_36814 = [];
var inst_36815 = inst_36814.push(inst_36798);
var inst_36794 = inst_36814;
var inst_36795 = inst_36802;
var state_36836__$1 = (function (){var statearr_36854 = state_36836;
(statearr_36854[(7)] = inst_36794);

(statearr_36854[(11)] = inst_36815);

(statearr_36854[(12)] = inst_36813);

(statearr_36854[(8)] = inst_36795);

return statearr_36854;
})();
var statearr_36855_38254 = state_36836__$1;
(statearr_36855_38254[(2)] = null);

(statearr_36855_38254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (9))){
var inst_36794 = (state_36836[(7)]);
var inst_36811 = cljs.core.vec(inst_36794);
var state_36836__$1 = state_36836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36836__$1,(11),out,inst_36811);
} else {
if((state_val_36837 === (5))){
var inst_36802 = (state_36836[(10)]);
var inst_36798 = (state_36836[(9)]);
var inst_36795 = (state_36836[(8)]);
var inst_36802__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36798) : f.call(null,inst_36798));
var inst_36804 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36802__$1,inst_36795);
var inst_36805 = cljs.core.keyword_identical_QMARK_(inst_36795,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36806 = ((inst_36804) || (inst_36805));
var state_36836__$1 = (function (){var statearr_36857 = state_36836;
(statearr_36857[(10)] = inst_36802__$1);

return statearr_36857;
})();
if(cljs.core.truth_(inst_36806)){
var statearr_36859_38256 = state_36836__$1;
(statearr_36859_38256[(1)] = (8));

} else {
var statearr_36860_38257 = state_36836__$1;
(statearr_36860_38257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (14))){
var inst_36829 = (state_36836[(2)]);
var inst_36830 = cljs.core.async.close_BANG_(out);
var state_36836__$1 = (function (){var statearr_36862 = state_36836;
(statearr_36862[(13)] = inst_36829);

return statearr_36862;
})();
var statearr_36863_38259 = state_36836__$1;
(statearr_36863_38259[(2)] = inst_36830);

(statearr_36863_38259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (10))){
var inst_36818 = (state_36836[(2)]);
var state_36836__$1 = state_36836;
var statearr_36865_38260 = state_36836__$1;
(statearr_36865_38260[(2)] = inst_36818);

(statearr_36865_38260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36837 === (8))){
var inst_36802 = (state_36836[(10)]);
var inst_36794 = (state_36836[(7)]);
var inst_36798 = (state_36836[(9)]);
var inst_36808 = inst_36794.push(inst_36798);
var tmp36861 = inst_36794;
var inst_36794__$1 = tmp36861;
var inst_36795 = inst_36802;
var state_36836__$1 = (function (){var statearr_36866 = state_36836;
(statearr_36866[(7)] = inst_36794__$1);

(statearr_36866[(14)] = inst_36808);

(statearr_36866[(8)] = inst_36795);

return statearr_36866;
})();
var statearr_36868_38262 = state_36836__$1;
(statearr_36868_38262[(2)] = null);

(statearr_36868_38262[(1)] = (2));


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
var statearr_36869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36869[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36869[(1)] = (1));

return statearr_36869;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36836){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36836);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36870){if((e36870 instanceof Object)){
var ex__34210__auto__ = e36870;
var statearr_36872_38263 = state_36836;
(statearr_36872_38263[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38264 = state_36836;
state_36836 = G__38264;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36873 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36873[(6)] = c__34274__auto___38241);

return statearr_36873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
