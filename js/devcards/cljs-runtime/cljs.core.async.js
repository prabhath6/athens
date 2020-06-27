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
var val_36844 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36844) : fn1.call(null,val_36844));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36844) : fn1.call(null,val_36844));
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
var n__4666__auto___36851 = n;
var x_36852 = (0);
while(true){
if((x_36852 < n__4666__auto___36851)){
(a[x_36852] = x_36852);

var G__36853 = (x_36852 + (1));
x_36852 = G__36853;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34351 = (function (flag,meta34352){
this.flag = flag;
this.meta34352 = meta34352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34353,meta34352__$1){
var self__ = this;
var _34353__$1 = this;
return (new cljs.core.async.t_cljs$core$async34351(self__.flag,meta34352__$1));
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
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34352","meta34352",58586617,null)], null);
}));

(cljs.core.async.t_cljs$core$async34351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34351");

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34351.
 */
cljs.core.async.__GT_t_cljs$core$async34351 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34351(flag__$1,meta34352){
return (new cljs.core.async.t_cljs$core$async34351(flag__$1,meta34352));
});

}

return (new cljs.core.async.t_cljs$core$async34351(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34359 = (function (flag,cb,meta34360){
this.flag = flag;
this.cb = cb;
this.meta34360 = meta34360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34361,meta34360__$1){
var self__ = this;
var _34361__$1 = this;
return (new cljs.core.async.t_cljs$core$async34359(self__.flag,self__.cb,meta34360__$1));
}));

(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34361){
var self__ = this;
var _34361__$1 = this;
return self__.meta34360;
}));

(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34360","meta34360",2057262825,null)], null);
}));

(cljs.core.async.t_cljs$core$async34359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34359");

(cljs.core.async.t_cljs$core$async34359.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34359.
 */
cljs.core.async.__GT_t_cljs$core$async34359 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34359(flag__$1,cb__$1,meta34360){
return (new cljs.core.async.t_cljs$core$async34359(flag__$1,cb__$1,meta34360));
});

}

return (new cljs.core.async.t_cljs$core$async34359(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34365_SHARP_){
var G__34373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34365_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34373) : fret.call(null,G__34373));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34366_SHARP_){
var G__34374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34366_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34374) : fret.call(null,G__34374));
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
var G__36863 = (i + (1));
i = G__36863;
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
var len__4789__auto___36866 = arguments.length;
var i__4790__auto___36867 = (0);
while(true){
if((i__4790__auto___36867 < len__4789__auto___36866)){
args__4795__auto__.push((arguments[i__4790__auto___36867]));

var G__36868 = (i__4790__auto___36867 + (1));
i__4790__auto___36867 = G__36868;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34380){
var map__34381 = p__34380;
var map__34381__$1 = (((((!((map__34381 == null))))?(((((map__34381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34381):map__34381);
var opts = map__34381__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34378){
var G__34379 = cljs.core.first(seq34378);
var seq34378__$1 = cljs.core.next(seq34378);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34379,seq34378__$1);
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
var G__34387 = arguments.length;
switch (G__34387) {
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
var c__34273__auto___36875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34429_36876 = state_34423__$1;
(statearr_34429_36876[(2)] = inst_34419);

(statearr_34429_36876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34430_36878 = state_34423__$1;
(statearr_34430_36878[(2)] = null);

(statearr_34430_36878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34402 = (state_34423[(7)]);
var inst_34402__$1 = (state_34423[(2)]);
var inst_34403 = (inst_34402__$1 == null);
var state_34423__$1 = (function (){var statearr_34431 = state_34423;
(statearr_34431[(7)] = inst_34402__$1);

return statearr_34431;
})();
if(cljs.core.truth_(inst_34403)){
var statearr_34433_36880 = state_34423__$1;
(statearr_34433_36880[(1)] = (5));

} else {
var statearr_34434_36881 = state_34423__$1;
(statearr_34434_36881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34435_36882 = state_34423__$1;
(statearr_34435_36882[(2)] = null);

(statearr_34435_36882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34402 = (state_34423[(7)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34423__$1,(11),to,inst_34402);
} else {
if((state_val_34424 === (3))){
var inst_34421 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34423__$1,inst_34421);
} else {
if((state_val_34424 === (12))){
var state_34423__$1 = state_34423;
var statearr_34436_36884 = state_34423__$1;
(statearr_34436_36884[(2)] = null);

(statearr_34436_36884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34423__$1,(4),from);
} else {
if((state_val_34424 === (11))){
var inst_34412 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
if(cljs.core.truth_(inst_34412)){
var statearr_34437_36886 = state_34423__$1;
(statearr_34437_36886[(1)] = (12));

} else {
var statearr_34439_36887 = state_34423__$1;
(statearr_34439_36887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34440_36888 = state_34423__$1;
(statearr_34440_36888[(2)] = null);

(statearr_34440_36888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34442_36890 = state_34423__$1;
(statearr_34442_36890[(1)] = (8));

} else {
var statearr_34443_36891 = state_34423__$1;
(statearr_34443_36891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34444_36892 = state_34423__$1;
(statearr_34444_36892[(2)] = inst_34417);

(statearr_34444_36892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34445_36894 = state_34423__$1;
(statearr_34445_36894[(2)] = inst_34409);

(statearr_34445_36894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34447_36895 = state_34423__$1;
(statearr_34447_36895[(2)] = inst_34406);

(statearr_34447_36895[(1)] = (10));


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
var statearr_34448 = [null,null,null,null,null,null,null,null];
(statearr_34448[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34448[(1)] = (1));

return statearr_34448;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34423){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34423);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34449){if((e34449 instanceof Object)){
var ex__34210__auto__ = e34449;
var statearr_34450_36898 = state_34423;
(statearr_34450_36898[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36899 = state_34423;
state_34423 = G__36899;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34453 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34453[(6)] = c__34273__auto___36875);

return statearr_34453;
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
var process = (function (p__34459){
var vec__34460 = p__34459;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(1),null);
var job = vec__34460;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34273__auto___36902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34468){
var state_val_34469 = (state_34468[(1)]);
if((state_val_34469 === (1))){
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34468__$1,(2),res,v);
} else {
if((state_val_34469 === (2))){
var inst_34465 = (state_34468[(2)]);
var inst_34466 = cljs.core.async.close_BANG_(res);
var state_34468__$1 = (function (){var statearr_34470 = state_34468;
(statearr_34470[(7)] = inst_34465);

return statearr_34470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34468__$1,inst_34466);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34471 = [null,null,null,null,null,null,null,null];
(statearr_34471[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34471[(1)] = (1));

return statearr_34471;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34468){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34468);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34476){if((e34476 instanceof Object)){
var ex__34210__auto__ = e34476;
var statearr_34477_36906 = state_34468;
(statearr_34477_36906[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34476;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36907 = state_34468;
state_34468 = G__36907;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34468){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34481 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34481[(6)] = c__34273__auto___36902);

return statearr_34481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34482){
var vec__34483 = p__34482;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34483,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34483,(1),null);
var job = vec__34483;
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
var n__4666__auto___36910 = n;
var __36911 = (0);
while(true){
if((__36911 < n__4666__auto___36910)){
var G__34486_36912 = type;
var G__34486_36913__$1 = (((G__34486_36912 instanceof cljs.core.Keyword))?G__34486_36912.fqn:null);
switch (G__34486_36913__$1) {
case "compute":
var c__34273__auto___36915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36911,c__34273__auto___36915,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36911,c__34273__auto___36915,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function (state_34499){
var state_val_34500 = (state_34499[(1)]);
if((state_val_34500 === (1))){
var state_34499__$1 = state_34499;
var statearr_34501_36917 = state_34499__$1;
(statearr_34501_36917[(2)] = null);

(statearr_34501_36917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (2))){
var state_34499__$1 = state_34499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34499__$1,(4),jobs);
} else {
if((state_val_34500 === (3))){
var inst_34497 = (state_34499[(2)]);
var state_34499__$1 = state_34499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34499__$1,inst_34497);
} else {
if((state_val_34500 === (4))){
var inst_34489 = (state_34499[(2)]);
var inst_34490 = process(inst_34489);
var state_34499__$1 = state_34499;
if(cljs.core.truth_(inst_34490)){
var statearr_34505_36919 = state_34499__$1;
(statearr_34505_36919[(1)] = (5));

} else {
var statearr_34506_36920 = state_34499__$1;
(statearr_34506_36920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (5))){
var state_34499__$1 = state_34499;
var statearr_34507_36922 = state_34499__$1;
(statearr_34507_36922[(2)] = null);

(statearr_34507_36922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (6))){
var state_34499__$1 = state_34499;
var statearr_34508_36923 = state_34499__$1;
(statearr_34508_36923[(2)] = null);

(statearr_34508_36923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (7))){
var inst_34495 = (state_34499[(2)]);
var state_34499__$1 = state_34499;
var statearr_34509_36925 = state_34499__$1;
(statearr_34509_36925[(2)] = inst_34495);

(statearr_34509_36925[(1)] = (3));


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
});})(__36911,c__34273__auto___36915,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async))
;
return ((function (__36911,switch__34206__auto__,c__34273__auto___36915,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34510 = [null,null,null,null,null,null,null];
(statearr_34510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34510[(1)] = (1));

return statearr_34510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34499){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34499);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34511){if((e34511 instanceof Object)){
var ex__34210__auto__ = e34511;
var statearr_34512_36927 = state_34499;
(statearr_34512_36927[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34511;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36929 = state_34499;
state_34499 = G__36929;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36911,switch__34206__auto__,c__34273__auto___36915,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34513 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34513[(6)] = c__34273__auto___36915);

return statearr_34513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36911,c__34273__auto___36915,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36911,c__34273__auto___36931,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36911,c__34273__auto___36931,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function (state_34526){
var state_val_34527 = (state_34526[(1)]);
if((state_val_34527 === (1))){
var state_34526__$1 = state_34526;
var statearr_34528_36932 = state_34526__$1;
(statearr_34528_36932[(2)] = null);

(statearr_34528_36932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (2))){
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34526__$1,(4),jobs);
} else {
if((state_val_34527 === (3))){
var inst_34524 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34526__$1,inst_34524);
} else {
if((state_val_34527 === (4))){
var inst_34516 = (state_34526[(2)]);
var inst_34517 = async(inst_34516);
var state_34526__$1 = state_34526;
if(cljs.core.truth_(inst_34517)){
var statearr_34529_36935 = state_34526__$1;
(statearr_34529_36935[(1)] = (5));

} else {
var statearr_34530_36936 = state_34526__$1;
(statearr_34530_36936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (5))){
var state_34526__$1 = state_34526;
var statearr_34531_36937 = state_34526__$1;
(statearr_34531_36937[(2)] = null);

(statearr_34531_36937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (6))){
var state_34526__$1 = state_34526;
var statearr_34532_36938 = state_34526__$1;
(statearr_34532_36938[(2)] = null);

(statearr_34532_36938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (7))){
var inst_34522 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34533_36940 = state_34526__$1;
(statearr_34533_36940[(2)] = inst_34522);

(statearr_34533_36940[(1)] = (3));


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
});})(__36911,c__34273__auto___36931,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async))
;
return ((function (__36911,switch__34206__auto__,c__34273__auto___36931,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34534 = [null,null,null,null,null,null,null];
(statearr_34534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34534[(1)] = (1));

return statearr_34534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34526){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34526);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34535){if((e34535 instanceof Object)){
var ex__34210__auto__ = e34535;
var statearr_34536_36943 = state_34526;
(statearr_34536_36943[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36944 = state_34526;
state_34526 = G__36944;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36911,switch__34206__auto__,c__34273__auto___36931,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34537 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34537[(6)] = c__34273__auto___36931);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36911,c__34273__auto___36931,G__34486_36912,G__34486_36913__$1,n__4666__auto___36910,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34486_36913__$1)].join('')));

}

var G__36946 = (__36911 + (1));
__36911 = G__36946;
continue;
} else {
}
break;
}

var c__34273__auto___36947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36949 = state_34559__$1;
(statearr_34561_36949[(2)] = inst_34555);

(statearr_34561_36949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36950 = state_34559__$1;
(statearr_34562_36950[(2)] = null);

(statearr_34562_36950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (4))){
var inst_34540 = (state_34559[(7)]);
var inst_34540__$1 = (state_34559[(2)]);
var inst_34541 = (inst_34540__$1 == null);
var state_34559__$1 = (function (){var statearr_34563 = state_34559;
(statearr_34563[(7)] = inst_34540__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34541)){
var statearr_34564_36952 = state_34559__$1;
(statearr_34564_36952[(1)] = (5));

} else {
var statearr_34565_36953 = state_34559__$1;
(statearr_34565_36953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (6))){
var inst_34540 = (state_34559[(7)]);
var inst_34545 = (state_34559[(8)]);
var inst_34545__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34547 = [inst_34540,inst_34545__$1];
var inst_34548 = (new cljs.core.PersistentVector(null,2,(5),inst_34546,inst_34547,null));
var state_34559__$1 = (function (){var statearr_34566 = state_34559;
(statearr_34566[(8)] = inst_34545__$1);

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
var statearr_34568_36957 = state_34559__$1;
(statearr_34568_36957[(2)] = null);

(statearr_34568_36957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36958 = state_34559__$1;
(statearr_34569_36958[(2)] = inst_34543);

(statearr_34569_36958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (8))){
var inst_34545 = (state_34559[(8)]);
var inst_34550 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34570 = state_34559;
(statearr_34570[(10)] = inst_34550);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(9),results,inst_34545);
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
var statearr_34573_36966 = state_34559;
(statearr_34573_36966[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36968 = state_34559;
state_34559 = G__36968;
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
var state__34276__auto__ = (function (){var statearr_34574 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34574[(6)] = c__34273__auto___36947);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34612){
var state_val_34613 = (state_34612[(1)]);
if((state_val_34613 === (7))){
var inst_34608 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34614_36969 = state_34612__$1;
(statearr_34614_36969[(2)] = inst_34608);

(statearr_34614_36969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36973 = state_34612__$1;
(statearr_34615_36973[(2)] = null);

(statearr_34615_36973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36975 = state_34612__$1;
(statearr_34616_36975[(2)] = null);

(statearr_34616_36975[(1)] = (2));


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
var statearr_34618_36976 = state_34612__$1;
(statearr_34618_36976[(1)] = (5));

} else {
var statearr_34619_36978 = state_34612__$1;
(statearr_34619_36978[(1)] = (6));

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
var statearr_34620_36981 = state_34612__$1;
(statearr_34620_36981[(2)] = inst_34603);

(statearr_34620_36981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36985 = state_34612__$1;
(statearr_34622_36985[(2)] = null);

(statearr_34622_36985[(1)] = (2));


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
var statearr_34623_36987 = state_34612__$1;
(statearr_34623_36987[(1)] = (19));

} else {
var statearr_34627_36988 = state_34612__$1;
(statearr_34627_36988[(1)] = (20));

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
var statearr_34628_36989 = state_34612__$1;
(statearr_34628_36989[(2)] = null);

(statearr_34628_36989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34629 = state_34612;
(statearr_34629[(10)] = inst_34587);

return statearr_34629;
})();
var statearr_34630_36992 = state_34612__$1;
(statearr_34630_36992[(2)] = null);

(statearr_34630_36992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34631_36994 = state_34612__$1;
(statearr_34631_36994[(2)] = null);

(statearr_34631_36994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34635_36997 = state_34612__$1;
(statearr_34635_36997[(1)] = (8));

} else {
var statearr_34636_36999 = state_34612__$1;
(statearr_34636_36999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (14))){
var inst_34590 = (state_34612[(8)]);
var inst_34590__$1 = (state_34612[(2)]);
var inst_34591 = (inst_34590__$1 == null);
var inst_34592 = cljs.core.not(inst_34591);
var state_34612__$1 = (function (){var statearr_34639 = state_34612;
(statearr_34639[(8)] = inst_34590__$1);

return statearr_34639;
})();
if(inst_34592){
var statearr_34640_37000 = state_34612__$1;
(statearr_34640_37000[(1)] = (15));

} else {
var statearr_34641_37001 = state_34612__$1;
(statearr_34641_37001[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34642_37002 = state_34612__$1;
(statearr_34642_37002[(2)] = false);

(statearr_34642_37002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34644_37006 = state_34612__$1;
(statearr_34644_37006[(2)] = inst_34584);

(statearr_34644_37006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34645_37008 = state_34612__$1;
(statearr_34645_37008[(2)] = inst_34595);

(statearr_34645_37008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34646_37012 = state_34612__$1;
(statearr_34646_37012[(2)] = inst_34581);

(statearr_34646_37012[(1)] = (10));


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
var statearr_34649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34649[(1)] = (1));

return statearr_34649;
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
}catch (e34650){if((e34650 instanceof Object)){
var ex__34210__auto__ = e34650;
var statearr_34651_37019 = state_34612;
(statearr_34651_37019[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37021 = state_34612;
state_34612 = G__37021;
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
var state__34276__auto__ = (function (){var statearr_34652 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34652[(6)] = c__34273__auto__);

return statearr_34652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__34654 = arguments.length;
switch (G__34654) {
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
var G__34658 = arguments.length;
switch (G__34658) {
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
var G__34665 = arguments.length;
switch (G__34665) {
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
var c__34273__auto___37063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34692){
var state_val_34693 = (state_34692[(1)]);
if((state_val_34693 === (7))){
var inst_34688 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34697_37066 = state_34692__$1;
(statearr_34697_37066[(2)] = inst_34688);

(statearr_34697_37066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (1))){
var state_34692__$1 = state_34692;
var statearr_34698_37067 = state_34692__$1;
(statearr_34698_37067[(2)] = null);

(statearr_34698_37067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (4))){
var inst_34669 = (state_34692[(7)]);
var inst_34669__$1 = (state_34692[(2)]);
var inst_34670 = (inst_34669__$1 == null);
var state_34692__$1 = (function (){var statearr_34699 = state_34692;
(statearr_34699[(7)] = inst_34669__$1);

return statearr_34699;
})();
if(cljs.core.truth_(inst_34670)){
var statearr_34700_37071 = state_34692__$1;
(statearr_34700_37071[(1)] = (5));

} else {
var statearr_34701_37072 = state_34692__$1;
(statearr_34701_37072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (13))){
var state_34692__$1 = state_34692;
var statearr_34702_37073 = state_34692__$1;
(statearr_34702_37073[(2)] = null);

(statearr_34702_37073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (6))){
var inst_34669 = (state_34692[(7)]);
var inst_34675 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34669) : p.call(null,inst_34669));
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34675)){
var statearr_34706_37077 = state_34692__$1;
(statearr_34706_37077[(1)] = (9));

} else {
var statearr_34707_37078 = state_34692__$1;
(statearr_34707_37078[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (3))){
var inst_34690 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34692__$1,inst_34690);
} else {
if((state_val_34693 === (12))){
var state_34692__$1 = state_34692;
var statearr_34708_37084 = state_34692__$1;
(statearr_34708_37084[(2)] = null);

(statearr_34708_37084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (2))){
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34692__$1,(4),ch);
} else {
if((state_val_34693 === (11))){
var inst_34669 = (state_34692[(7)]);
var inst_34679 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34692__$1,(8),inst_34679,inst_34669);
} else {
if((state_val_34693 === (9))){
var state_34692__$1 = state_34692;
var statearr_34709_37091 = state_34692__$1;
(statearr_34709_37091[(2)] = tc);

(statearr_34709_37091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (5))){
var inst_34672 = cljs.core.async.close_BANG_(tc);
var inst_34673 = cljs.core.async.close_BANG_(fc);
var state_34692__$1 = (function (){var statearr_34710 = state_34692;
(statearr_34710[(8)] = inst_34672);

return statearr_34710;
})();
var statearr_34711_37094 = state_34692__$1;
(statearr_34711_37094[(2)] = inst_34673);

(statearr_34711_37094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (14))){
var inst_34686 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34715_37097 = state_34692__$1;
(statearr_34715_37097[(2)] = inst_34686);

(statearr_34715_37097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (10))){
var state_34692__$1 = state_34692;
var statearr_34716_37098 = state_34692__$1;
(statearr_34716_37098[(2)] = fc);

(statearr_34716_37098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (8))){
var inst_34681 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34681)){
var statearr_34717_37100 = state_34692__$1;
(statearr_34717_37100[(1)] = (12));

} else {
var statearr_34718_37101 = state_34692__$1;
(statearr_34718_37101[(1)] = (13));

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
var statearr_34719 = [null,null,null,null,null,null,null,null,null];
(statearr_34719[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34719[(1)] = (1));

return statearr_34719;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34692){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34692);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34720){if((e34720 instanceof Object)){
var ex__34210__auto__ = e34720;
var statearr_34721_37106 = state_34692;
(statearr_34721_37106[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37110 = state_34692;
state_34692 = G__37110;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34722 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34722[(6)] = c__34273__auto___37063);

return statearr_34722;
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
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34743){
var state_val_34744 = (state_34743[(1)]);
if((state_val_34744 === (7))){
var inst_34739 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34745_37118 = state_34743__$1;
(statearr_34745_37118[(2)] = inst_34739);

(statearr_34745_37118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (1))){
var inst_34723 = init;
var state_34743__$1 = (function (){var statearr_34746 = state_34743;
(statearr_34746[(7)] = inst_34723);

return statearr_34746;
})();
var statearr_34747_37120 = state_34743__$1;
(statearr_34747_37120[(2)] = null);

(statearr_34747_37120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (4))){
var inst_34726 = (state_34743[(8)]);
var inst_34726__$1 = (state_34743[(2)]);
var inst_34727 = (inst_34726__$1 == null);
var state_34743__$1 = (function (){var statearr_34748 = state_34743;
(statearr_34748[(8)] = inst_34726__$1);

return statearr_34748;
})();
if(cljs.core.truth_(inst_34727)){
var statearr_34749_37123 = state_34743__$1;
(statearr_34749_37123[(1)] = (5));

} else {
var statearr_34750_37124 = state_34743__$1;
(statearr_34750_37124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (6))){
var inst_34730 = (state_34743[(9)]);
var inst_34726 = (state_34743[(8)]);
var inst_34723 = (state_34743[(7)]);
var inst_34730__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34723,inst_34726) : f.call(null,inst_34723,inst_34726));
var inst_34731 = cljs.core.reduced_QMARK_(inst_34730__$1);
var state_34743__$1 = (function (){var statearr_34751 = state_34743;
(statearr_34751[(9)] = inst_34730__$1);

return statearr_34751;
})();
if(inst_34731){
var statearr_34752_37126 = state_34743__$1;
(statearr_34752_37126[(1)] = (8));

} else {
var statearr_34753_37128 = state_34743__$1;
(statearr_34753_37128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (3))){
var inst_34741 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34743__$1,inst_34741);
} else {
if((state_val_34744 === (2))){
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34743__$1,(4),ch);
} else {
if((state_val_34744 === (9))){
var inst_34730 = (state_34743[(9)]);
var inst_34723 = inst_34730;
var state_34743__$1 = (function (){var statearr_34757 = state_34743;
(statearr_34757[(7)] = inst_34723);

return statearr_34757;
})();
var statearr_34758_37135 = state_34743__$1;
(statearr_34758_37135[(2)] = null);

(statearr_34758_37135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (5))){
var inst_34723 = (state_34743[(7)]);
var state_34743__$1 = state_34743;
var statearr_34762_37138 = state_34743__$1;
(statearr_34762_37138[(2)] = inst_34723);

(statearr_34762_37138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (10))){
var inst_34737 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34763_37139 = state_34743__$1;
(statearr_34763_37139[(2)] = inst_34737);

(statearr_34763_37139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (8))){
var inst_34730 = (state_34743[(9)]);
var inst_34733 = cljs.core.deref(inst_34730);
var state_34743__$1 = state_34743;
var statearr_34764_37141 = state_34743__$1;
(statearr_34764_37141[(2)] = inst_34733);

(statearr_34764_37141[(1)] = (10));


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
var statearr_34766 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34766[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34766[(1)] = (1));

return statearr_34766;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34743){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34743);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34767){if((e34767 instanceof Object)){
var ex__34210__auto__ = e34767;
var statearr_34768_37145 = state_34743;
(statearr_34768_37145[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37150 = state_34743;
state_34743 = G__37150;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34743){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34769 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34769[(6)] = c__34273__auto__);

return statearr_34769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34776){
var state_val_34777 = (state_34776[(1)]);
if((state_val_34777 === (1))){
var inst_34771 = cljs.core.async.reduce(f__$1,init,ch);
var state_34776__$1 = state_34776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34776__$1,(2),inst_34771);
} else {
if((state_val_34777 === (2))){
var inst_34773 = (state_34776[(2)]);
var inst_34774 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34773) : f__$1.call(null,inst_34773));
var state_34776__$1 = state_34776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34776__$1,inst_34774);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34783 = [null,null,null,null,null,null,null];
(statearr_34783[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34783[(1)] = (1));

return statearr_34783;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34776){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34776);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34784){if((e34784 instanceof Object)){
var ex__34210__auto__ = e34784;
var statearr_34785_37162 = state_34776;
(statearr_34785_37162[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37163 = state_34776;
state_34776 = G__37163;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34776){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34786 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34786[(6)] = c__34273__auto__);

return statearr_34786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__34788 = arguments.length;
switch (G__34788) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34819){
var state_val_34820 = (state_34819[(1)]);
if((state_val_34820 === (7))){
var inst_34801 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34821_37179 = state_34819__$1;
(statearr_34821_37179[(2)] = inst_34801);

(statearr_34821_37179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (1))){
var inst_34789 = cljs.core.seq(coll);
var inst_34790 = inst_34789;
var state_34819__$1 = (function (){var statearr_34822 = state_34819;
(statearr_34822[(7)] = inst_34790);

return statearr_34822;
})();
var statearr_34823_37183 = state_34819__$1;
(statearr_34823_37183[(2)] = null);

(statearr_34823_37183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (4))){
var inst_34790 = (state_34819[(7)]);
var inst_34799 = cljs.core.first(inst_34790);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34819__$1,(7),ch,inst_34799);
} else {
if((state_val_34820 === (13))){
var inst_34813 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34824_37188 = state_34819__$1;
(statearr_34824_37188[(2)] = inst_34813);

(statearr_34824_37188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (6))){
var inst_34804 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34804)){
var statearr_34825_37191 = state_34819__$1;
(statearr_34825_37191[(1)] = (8));

} else {
var statearr_34826_37193 = state_34819__$1;
(statearr_34826_37193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (3))){
var inst_34817 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34819__$1,inst_34817);
} else {
if((state_val_34820 === (12))){
var state_34819__$1 = state_34819;
var statearr_34827_37197 = state_34819__$1;
(statearr_34827_37197[(2)] = null);

(statearr_34827_37197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (2))){
var inst_34790 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34790)){
var statearr_34828_37199 = state_34819__$1;
(statearr_34828_37199[(1)] = (4));

} else {
var statearr_34829_37201 = state_34819__$1;
(statearr_34829_37201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (11))){
var inst_34810 = cljs.core.async.close_BANG_(ch);
var state_34819__$1 = state_34819;
var statearr_34830_37206 = state_34819__$1;
(statearr_34830_37206[(2)] = inst_34810);

(statearr_34830_37206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (9))){
var state_34819__$1 = state_34819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37211 = state_34819__$1;
(statearr_34831_37211[(1)] = (11));

} else {
var statearr_34832_37214 = state_34819__$1;
(statearr_34832_37214[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (5))){
var inst_34790 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
var statearr_34833_37216 = state_34819__$1;
(statearr_34833_37216[(2)] = inst_34790);

(statearr_34833_37216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (10))){
var inst_34815 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34834_37218 = state_34819__$1;
(statearr_34834_37218[(2)] = inst_34815);

(statearr_34834_37218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (8))){
var inst_34790 = (state_34819[(7)]);
var inst_34806 = cljs.core.next(inst_34790);
var inst_34790__$1 = inst_34806;
var state_34819__$1 = (function (){var statearr_34835 = state_34819;
(statearr_34835[(7)] = inst_34790__$1);

return statearr_34835;
})();
var statearr_34836_37222 = state_34819__$1;
(statearr_34836_37222[(2)] = null);

(statearr_34836_37222[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34819){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34819);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37224 = state_34819;
(statearr_34839_37224[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37226 = state_34819;
state_34819 = G__37226;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34840 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34840[(6)] = c__34273__auto__);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34842 = (function (ch,cs,meta34843){
this.ch = ch;
this.cs = cs;
this.meta34843 = meta34843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34844,meta34843__$1){
var self__ = this;
var _34844__$1 = this;
return (new cljs.core.async.t_cljs$core$async34842(self__.ch,self__.cs,meta34843__$1));
}));

(cljs.core.async.t_cljs$core$async34842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34844){
var self__ = this;
var _34844__$1 = this;
return self__.meta34843;
}));

(cljs.core.async.t_cljs$core$async34842.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34842.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34842.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34842.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34842.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34843","meta34843",490109686,null)], null);
}));

(cljs.core.async.t_cljs$core$async34842.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34842");

(cljs.core.async.t_cljs$core$async34842.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34842");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34842.
 */
cljs.core.async.__GT_t_cljs$core$async34842 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34842(ch__$1,cs__$1,meta34843){
return (new cljs.core.async.t_cljs$core$async34842(ch__$1,cs__$1,meta34843));
});

}

return (new cljs.core.async.t_cljs$core$async34842(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34273__auto___37274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35002){
var state_val_35007 = (state_35002[(1)]);
if((state_val_35007 === (7))){
var inst_34995 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35023_37278 = state_35002__$1;
(statearr_35023_37278[(2)] = inst_34995);

(statearr_35023_37278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (20))){
var inst_34889 = (state_35002[(7)]);
var inst_34901 = cljs.core.first(inst_34889);
var inst_34902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34901,(0),null);
var inst_34903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34901,(1),null);
var state_35002__$1 = (function (){var statearr_35026 = state_35002;
(statearr_35026[(8)] = inst_34902);

return statearr_35026;
})();
if(cljs.core.truth_(inst_34903)){
var statearr_35027_37280 = state_35002__$1;
(statearr_35027_37280[(1)] = (22));

} else {
var statearr_35030_37281 = state_35002__$1;
(statearr_35030_37281[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (27))){
var inst_34852 = (state_35002[(9)]);
var inst_34933 = (state_35002[(10)]);
var inst_34942 = (state_35002[(11)]);
var inst_34935 = (state_35002[(12)]);
var inst_34942__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34933,inst_34935);
var inst_34943 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34942__$1,inst_34852,done);
var state_35002__$1 = (function (){var statearr_35031 = state_35002;
(statearr_35031[(11)] = inst_34942__$1);

return statearr_35031;
})();
if(cljs.core.truth_(inst_34943)){
var statearr_35033_37284 = state_35002__$1;
(statearr_35033_37284[(1)] = (30));

} else {
var statearr_35034_37286 = state_35002__$1;
(statearr_35034_37286[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (1))){
var state_35002__$1 = state_35002;
var statearr_35040_37288 = state_35002__$1;
(statearr_35040_37288[(2)] = null);

(statearr_35040_37288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (24))){
var inst_34889 = (state_35002[(7)]);
var inst_34908 = (state_35002[(2)]);
var inst_34909 = cljs.core.next(inst_34889);
var inst_34861 = inst_34909;
var inst_34862 = null;
var inst_34863 = (0);
var inst_34864 = (0);
var state_35002__$1 = (function (){var statearr_35047 = state_35002;
(statearr_35047[(13)] = inst_34863);

(statearr_35047[(14)] = inst_34862);

(statearr_35047[(15)] = inst_34864);

(statearr_35047[(16)] = inst_34908);

(statearr_35047[(17)] = inst_34861);

return statearr_35047;
})();
var statearr_35051_37291 = state_35002__$1;
(statearr_35051_37291[(2)] = null);

(statearr_35051_37291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (39))){
var state_35002__$1 = state_35002;
var statearr_35067_37292 = state_35002__$1;
(statearr_35067_37292[(2)] = null);

(statearr_35067_37292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (4))){
var inst_34852 = (state_35002[(9)]);
var inst_34852__$1 = (state_35002[(2)]);
var inst_34853 = (inst_34852__$1 == null);
var state_35002__$1 = (function (){var statearr_35072 = state_35002;
(statearr_35072[(9)] = inst_34852__$1);

return statearr_35072;
})();
if(cljs.core.truth_(inst_34853)){
var statearr_35074_37296 = state_35002__$1;
(statearr_35074_37296[(1)] = (5));

} else {
var statearr_35076_37298 = state_35002__$1;
(statearr_35076_37298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (15))){
var inst_34863 = (state_35002[(13)]);
var inst_34862 = (state_35002[(14)]);
var inst_34864 = (state_35002[(15)]);
var inst_34861 = (state_35002[(17)]);
var inst_34884 = (state_35002[(2)]);
var inst_34885 = (inst_34864 + (1));
var tmp35058 = inst_34863;
var tmp35059 = inst_34862;
var tmp35060 = inst_34861;
var inst_34861__$1 = tmp35060;
var inst_34862__$1 = tmp35059;
var inst_34863__$1 = tmp35058;
var inst_34864__$1 = inst_34885;
var state_35002__$1 = (function (){var statearr_35087 = state_35002;
(statearr_35087[(13)] = inst_34863__$1);

(statearr_35087[(14)] = inst_34862__$1);

(statearr_35087[(15)] = inst_34864__$1);

(statearr_35087[(17)] = inst_34861__$1);

(statearr_35087[(18)] = inst_34884);

return statearr_35087;
})();
var statearr_35091_37306 = state_35002__$1;
(statearr_35091_37306[(2)] = null);

(statearr_35091_37306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (21))){
var inst_34912 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35100_37309 = state_35002__$1;
(statearr_35100_37309[(2)] = inst_34912);

(statearr_35100_37309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (31))){
var inst_34942 = (state_35002[(11)]);
var inst_34947 = done(null);
var inst_34949 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34942);
var state_35002__$1 = (function (){var statearr_35108 = state_35002;
(statearr_35108[(19)] = inst_34947);

return statearr_35108;
})();
var statearr_35110_37316 = state_35002__$1;
(statearr_35110_37316[(2)] = inst_34949);

(statearr_35110_37316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (32))){
var inst_34934 = (state_35002[(20)]);
var inst_34933 = (state_35002[(10)]);
var inst_34935 = (state_35002[(12)]);
var inst_34932 = (state_35002[(21)]);
var inst_34951 = (state_35002[(2)]);
var inst_34952 = (inst_34935 + (1));
var tmp35095 = inst_34934;
var tmp35096 = inst_34933;
var tmp35097 = inst_34932;
var inst_34932__$1 = tmp35097;
var inst_34933__$1 = tmp35096;
var inst_34934__$1 = tmp35095;
var inst_34935__$1 = inst_34952;
var state_35002__$1 = (function (){var statearr_35127 = state_35002;
(statearr_35127[(22)] = inst_34951);

(statearr_35127[(20)] = inst_34934__$1);

(statearr_35127[(10)] = inst_34933__$1);

(statearr_35127[(12)] = inst_34935__$1);

(statearr_35127[(21)] = inst_34932__$1);

return statearr_35127;
})();
var statearr_35131_37324 = state_35002__$1;
(statearr_35131_37324[(2)] = null);

(statearr_35131_37324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (40))){
var inst_34964 = (state_35002[(23)]);
var inst_34968 = done(null);
var inst_34969 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34964);
var state_35002__$1 = (function (){var statearr_35132 = state_35002;
(statearr_35132[(24)] = inst_34968);

return statearr_35132;
})();
var statearr_35133_37329 = state_35002__$1;
(statearr_35133_37329[(2)] = inst_34969);

(statearr_35133_37329[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (33))){
var inst_34955 = (state_35002[(25)]);
var inst_34957 = cljs.core.chunked_seq_QMARK_(inst_34955);
var state_35002__$1 = state_35002;
if(inst_34957){
var statearr_35134_37335 = state_35002__$1;
(statearr_35134_37335[(1)] = (36));

} else {
var statearr_35135_37336 = state_35002__$1;
(statearr_35135_37336[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (13))){
var inst_34877 = (state_35002[(26)]);
var inst_34881 = cljs.core.async.close_BANG_(inst_34877);
var state_35002__$1 = state_35002;
var statearr_35138_37339 = state_35002__$1;
(statearr_35138_37339[(2)] = inst_34881);

(statearr_35138_37339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (22))){
var inst_34902 = (state_35002[(8)]);
var inst_34905 = cljs.core.async.close_BANG_(inst_34902);
var state_35002__$1 = state_35002;
var statearr_35139_37342 = state_35002__$1;
(statearr_35139_37342[(2)] = inst_34905);

(statearr_35139_37342[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (36))){
var inst_34955 = (state_35002[(25)]);
var inst_34959 = cljs.core.chunk_first(inst_34955);
var inst_34960 = cljs.core.chunk_rest(inst_34955);
var inst_34961 = cljs.core.count(inst_34959);
var inst_34932 = inst_34960;
var inst_34933 = inst_34959;
var inst_34934 = inst_34961;
var inst_34935 = (0);
var state_35002__$1 = (function (){var statearr_35142 = state_35002;
(statearr_35142[(20)] = inst_34934);

(statearr_35142[(10)] = inst_34933);

(statearr_35142[(12)] = inst_34935);

(statearr_35142[(21)] = inst_34932);

return statearr_35142;
})();
var statearr_35164_37351 = state_35002__$1;
(statearr_35164_37351[(2)] = null);

(statearr_35164_37351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (41))){
var inst_34955 = (state_35002[(25)]);
var inst_34971 = (state_35002[(2)]);
var inst_34972 = cljs.core.next(inst_34955);
var inst_34932 = inst_34972;
var inst_34933 = null;
var inst_34934 = (0);
var inst_34935 = (0);
var state_35002__$1 = (function (){var statearr_35167 = state_35002;
(statearr_35167[(27)] = inst_34971);

(statearr_35167[(20)] = inst_34934);

(statearr_35167[(10)] = inst_34933);

(statearr_35167[(12)] = inst_34935);

(statearr_35167[(21)] = inst_34932);

return statearr_35167;
})();
var statearr_35170_37359 = state_35002__$1;
(statearr_35170_37359[(2)] = null);

(statearr_35170_37359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (43))){
var state_35002__$1 = state_35002;
var statearr_35173_37362 = state_35002__$1;
(statearr_35173_37362[(2)] = null);

(statearr_35173_37362[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (29))){
var inst_34980 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35174_37363 = state_35002__$1;
(statearr_35174_37363[(2)] = inst_34980);

(statearr_35174_37363[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (44))){
var inst_34992 = (state_35002[(2)]);
var state_35002__$1 = (function (){var statearr_35176 = state_35002;
(statearr_35176[(28)] = inst_34992);

return statearr_35176;
})();
var statearr_35180_37366 = state_35002__$1;
(statearr_35180_37366[(2)] = null);

(statearr_35180_37366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (6))){
var inst_34924 = (state_35002[(29)]);
var inst_34923 = cljs.core.deref(cs);
var inst_34924__$1 = cljs.core.keys(inst_34923);
var inst_34925 = cljs.core.count(inst_34924__$1);
var inst_34926 = cljs.core.reset_BANG_(dctr,inst_34925);
var inst_34931 = cljs.core.seq(inst_34924__$1);
var inst_34932 = inst_34931;
var inst_34933 = null;
var inst_34934 = (0);
var inst_34935 = (0);
var state_35002__$1 = (function (){var statearr_35189 = state_35002;
(statearr_35189[(20)] = inst_34934);

(statearr_35189[(29)] = inst_34924__$1);

(statearr_35189[(10)] = inst_34933);

(statearr_35189[(30)] = inst_34926);

(statearr_35189[(12)] = inst_34935);

(statearr_35189[(21)] = inst_34932);

return statearr_35189;
})();
var statearr_35198_37374 = state_35002__$1;
(statearr_35198_37374[(2)] = null);

(statearr_35198_37374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (28))){
var inst_34955 = (state_35002[(25)]);
var inst_34932 = (state_35002[(21)]);
var inst_34955__$1 = cljs.core.seq(inst_34932);
var state_35002__$1 = (function (){var statearr_35207 = state_35002;
(statearr_35207[(25)] = inst_34955__$1);

return statearr_35207;
})();
if(inst_34955__$1){
var statearr_35208_37381 = state_35002__$1;
(statearr_35208_37381[(1)] = (33));

} else {
var statearr_35209_37382 = state_35002__$1;
(statearr_35209_37382[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (25))){
var inst_34934 = (state_35002[(20)]);
var inst_34935 = (state_35002[(12)]);
var inst_34938 = (inst_34935 < inst_34934);
var inst_34939 = inst_34938;
var state_35002__$1 = state_35002;
if(cljs.core.truth_(inst_34939)){
var statearr_35217_37385 = state_35002__$1;
(statearr_35217_37385[(1)] = (27));

} else {
var statearr_35218_37387 = state_35002__$1;
(statearr_35218_37387[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (34))){
var state_35002__$1 = state_35002;
var statearr_35233_37389 = state_35002__$1;
(statearr_35233_37389[(2)] = null);

(statearr_35233_37389[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (17))){
var state_35002__$1 = state_35002;
var statearr_35237_37391 = state_35002__$1;
(statearr_35237_37391[(2)] = null);

(statearr_35237_37391[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (3))){
var inst_34998 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35002__$1,inst_34998);
} else {
if((state_val_35007 === (12))){
var inst_34917 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35247_37395 = state_35002__$1;
(statearr_35247_37395[(2)] = inst_34917);

(statearr_35247_37395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (2))){
var state_35002__$1 = state_35002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35002__$1,(4),ch);
} else {
if((state_val_35007 === (23))){
var state_35002__$1 = state_35002;
var statearr_35257_37398 = state_35002__$1;
(statearr_35257_37398[(2)] = null);

(statearr_35257_37398[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (35))){
var inst_34978 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35262_37403 = state_35002__$1;
(statearr_35262_37403[(2)] = inst_34978);

(statearr_35262_37403[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (19))){
var inst_34889 = (state_35002[(7)]);
var inst_34893 = cljs.core.chunk_first(inst_34889);
var inst_34894 = cljs.core.chunk_rest(inst_34889);
var inst_34895 = cljs.core.count(inst_34893);
var inst_34861 = inst_34894;
var inst_34862 = inst_34893;
var inst_34863 = inst_34895;
var inst_34864 = (0);
var state_35002__$1 = (function (){var statearr_35270 = state_35002;
(statearr_35270[(13)] = inst_34863);

(statearr_35270[(14)] = inst_34862);

(statearr_35270[(15)] = inst_34864);

(statearr_35270[(17)] = inst_34861);

return statearr_35270;
})();
var statearr_35275_37406 = state_35002__$1;
(statearr_35275_37406[(2)] = null);

(statearr_35275_37406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (11))){
var inst_34861 = (state_35002[(17)]);
var inst_34889 = (state_35002[(7)]);
var inst_34889__$1 = cljs.core.seq(inst_34861);
var state_35002__$1 = (function (){var statearr_35281 = state_35002;
(statearr_35281[(7)] = inst_34889__$1);

return statearr_35281;
})();
if(inst_34889__$1){
var statearr_35284_37412 = state_35002__$1;
(statearr_35284_37412[(1)] = (16));

} else {
var statearr_35286_37413 = state_35002__$1;
(statearr_35286_37413[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (9))){
var inst_34919 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35291_37417 = state_35002__$1;
(statearr_35291_37417[(2)] = inst_34919);

(statearr_35291_37417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (5))){
var inst_34859 = cljs.core.deref(cs);
var inst_34860 = cljs.core.seq(inst_34859);
var inst_34861 = inst_34860;
var inst_34862 = null;
var inst_34863 = (0);
var inst_34864 = (0);
var state_35002__$1 = (function (){var statearr_35298 = state_35002;
(statearr_35298[(13)] = inst_34863);

(statearr_35298[(14)] = inst_34862);

(statearr_35298[(15)] = inst_34864);

(statearr_35298[(17)] = inst_34861);

return statearr_35298;
})();
var statearr_35303_37419 = state_35002__$1;
(statearr_35303_37419[(2)] = null);

(statearr_35303_37419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (14))){
var state_35002__$1 = state_35002;
var statearr_35309_37420 = state_35002__$1;
(statearr_35309_37420[(2)] = null);

(statearr_35309_37420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (45))){
var inst_34989 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35311_37424 = state_35002__$1;
(statearr_35311_37424[(2)] = inst_34989);

(statearr_35311_37424[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (26))){
var inst_34924 = (state_35002[(29)]);
var inst_34982 = (state_35002[(2)]);
var inst_34985 = cljs.core.seq(inst_34924);
var state_35002__$1 = (function (){var statearr_35319 = state_35002;
(statearr_35319[(31)] = inst_34982);

return statearr_35319;
})();
if(inst_34985){
var statearr_35321_37426 = state_35002__$1;
(statearr_35321_37426[(1)] = (42));

} else {
var statearr_35326_37427 = state_35002__$1;
(statearr_35326_37427[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (16))){
var inst_34889 = (state_35002[(7)]);
var inst_34891 = cljs.core.chunked_seq_QMARK_(inst_34889);
var state_35002__$1 = state_35002;
if(inst_34891){
var statearr_35334_37431 = state_35002__$1;
(statearr_35334_37431[(1)] = (19));

} else {
var statearr_35336_37432 = state_35002__$1;
(statearr_35336_37432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (38))){
var inst_34975 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35342_37434 = state_35002__$1;
(statearr_35342_37434[(2)] = inst_34975);

(statearr_35342_37434[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (30))){
var state_35002__$1 = state_35002;
var statearr_35343_37436 = state_35002__$1;
(statearr_35343_37436[(2)] = null);

(statearr_35343_37436[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (10))){
var inst_34862 = (state_35002[(14)]);
var inst_34864 = (state_35002[(15)]);
var inst_34874 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34862,inst_34864);
var inst_34877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34874,(0),null);
var inst_34878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34874,(1),null);
var state_35002__$1 = (function (){var statearr_35344 = state_35002;
(statearr_35344[(26)] = inst_34877);

return statearr_35344;
})();
if(cljs.core.truth_(inst_34878)){
var statearr_35345_37442 = state_35002__$1;
(statearr_35345_37442[(1)] = (13));

} else {
var statearr_35346_37443 = state_35002__$1;
(statearr_35346_37443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (18))){
var inst_34915 = (state_35002[(2)]);
var state_35002__$1 = state_35002;
var statearr_35347_37446 = state_35002__$1;
(statearr_35347_37446[(2)] = inst_34915);

(statearr_35347_37446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (42))){
var state_35002__$1 = state_35002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35002__$1,(45),dchan);
} else {
if((state_val_35007 === (37))){
var inst_34852 = (state_35002[(9)]);
var inst_34964 = (state_35002[(23)]);
var inst_34955 = (state_35002[(25)]);
var inst_34964__$1 = cljs.core.first(inst_34955);
var inst_34965 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34964__$1,inst_34852,done);
var state_35002__$1 = (function (){var statearr_35350 = state_35002;
(statearr_35350[(23)] = inst_34964__$1);

return statearr_35350;
})();
if(cljs.core.truth_(inst_34965)){
var statearr_35351_37457 = state_35002__$1;
(statearr_35351_37457[(1)] = (39));

} else {
var statearr_35352_37459 = state_35002__$1;
(statearr_35352_37459[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35007 === (8))){
var inst_34863 = (state_35002[(13)]);
var inst_34864 = (state_35002[(15)]);
var inst_34867 = (inst_34864 < inst_34863);
var inst_34868 = inst_34867;
var state_35002__$1 = state_35002;
if(cljs.core.truth_(inst_34868)){
var statearr_35353_37461 = state_35002__$1;
(statearr_35353_37461[(1)] = (10));

} else {
var statearr_35354_37462 = state_35002__$1;
(statearr_35354_37462[(1)] = (11));

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
var statearr_35357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35357[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35357[(1)] = (1));

return statearr_35357;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_35002){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35002);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35363){if((e35363 instanceof Object)){
var ex__34210__auto__ = e35363;
var statearr_35364_37476 = state_35002;
(statearr_35364_37476[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37478 = state_35002;
state_35002 = G__37478;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_35002){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_35002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35367 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35367[(6)] = c__34273__auto___37274);

return statearr_35367;
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
var G__35376 = arguments.length;
switch (G__35376) {
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
var len__4789__auto___37526 = arguments.length;
var i__4790__auto___37527 = (0);
while(true){
if((i__4790__auto___37527 < len__4789__auto___37526)){
args__4795__auto__.push((arguments[i__4790__auto___37527]));

var G__37530 = (i__4790__auto___37527 + (1));
i__4790__auto___37527 = G__37530;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35495){
var map__35497 = p__35495;
var map__35497__$1 = (((((!((map__35497 == null))))?(((((map__35497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35497):map__35497);
var opts = map__35497__$1;
var statearr_35504_37537 = state;
(statearr_35504_37537[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35511_37539 = state;
(statearr_35511_37539[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35516_37544 = state;
(statearr_35516_37544[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35480){
var G__35481 = cljs.core.first(seq35480);
var seq35480__$1 = cljs.core.next(seq35480);
var G__35482 = cljs.core.first(seq35480__$1);
var seq35480__$2 = cljs.core.next(seq35480__$1);
var G__35483 = cljs.core.first(seq35480__$2);
var seq35480__$3 = cljs.core.next(seq35480__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35481,G__35482,G__35483,seq35480__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35557 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35558){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35558 = meta35558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35559,meta35558__$1){
var self__ = this;
var _35559__$1 = this;
return (new cljs.core.async.t_cljs$core$async35557(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35558__$1));
}));

(cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35559){
var self__ = this;
var _35559__$1 = this;
return self__.meta35558;
}));

(cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35557.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35558","meta35558",1982814315,null)], null);
}));

(cljs.core.async.t_cljs$core$async35557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35557");

(cljs.core.async.t_cljs$core$async35557.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35557.
 */
cljs.core.async.__GT_t_cljs$core$async35557 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35557(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35558){
return (new cljs.core.async.t_cljs$core$async35557(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35558));
});

}

return (new cljs.core.async.t_cljs$core$async35557(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35688){
var state_val_35690 = (state_35688[(1)]);
if((state_val_35690 === (7))){
var inst_35594 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35693_37618 = state_35688__$1;
(statearr_35693_37618[(2)] = inst_35594);

(statearr_35693_37618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (20))){
var inst_35608 = (state_35688[(7)]);
var state_35688__$1 = state_35688;
var statearr_35696_37620 = state_35688__$1;
(statearr_35696_37620[(2)] = inst_35608);

(statearr_35696_37620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (27))){
var state_35688__$1 = state_35688;
var statearr_35698_37622 = state_35688__$1;
(statearr_35698_37622[(2)] = null);

(statearr_35698_37622[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (1))){
var inst_35579 = (state_35688[(8)]);
var inst_35579__$1 = calc_state();
var inst_35583 = (inst_35579__$1 == null);
var inst_35584 = cljs.core.not(inst_35583);
var state_35688__$1 = (function (){var statearr_35700 = state_35688;
(statearr_35700[(8)] = inst_35579__$1);

return statearr_35700;
})();
if(inst_35584){
var statearr_35701_37630 = state_35688__$1;
(statearr_35701_37630[(1)] = (2));

} else {
var statearr_35702_37631 = state_35688__$1;
(statearr_35702_37631[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (24))){
var inst_35659 = (state_35688[(9)]);
var inst_35635 = (state_35688[(10)]);
var inst_35645 = (state_35688[(11)]);
var inst_35659__$1 = (inst_35635.cljs$core$IFn$_invoke$arity$1 ? inst_35635.cljs$core$IFn$_invoke$arity$1(inst_35645) : inst_35635.call(null,inst_35645));
var state_35688__$1 = (function (){var statearr_35704 = state_35688;
(statearr_35704[(9)] = inst_35659__$1);

return statearr_35704;
})();
if(cljs.core.truth_(inst_35659__$1)){
var statearr_35705_37634 = state_35688__$1;
(statearr_35705_37634[(1)] = (29));

} else {
var statearr_35706_37635 = state_35688__$1;
(statearr_35706_37635[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (4))){
var inst_35598 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35598)){
var statearr_35707_37645 = state_35688__$1;
(statearr_35707_37645[(1)] = (8));

} else {
var statearr_35708_37647 = state_35688__$1;
(statearr_35708_37647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (15))){
var inst_35628 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35628)){
var statearr_35710_37649 = state_35688__$1;
(statearr_35710_37649[(1)] = (19));

} else {
var statearr_35711_37651 = state_35688__$1;
(statearr_35711_37651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (21))){
var inst_35633 = (state_35688[(12)]);
var inst_35633__$1 = (state_35688[(2)]);
var inst_35635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35633__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35633__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35633__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35688__$1 = (function (){var statearr_35713 = state_35688;
(statearr_35713[(13)] = inst_35636);

(statearr_35713[(10)] = inst_35635);

(statearr_35713[(12)] = inst_35633__$1);

return statearr_35713;
})();
return cljs.core.async.ioc_alts_BANG_(state_35688__$1,(22),inst_35637);
} else {
if((state_val_35690 === (31))){
var inst_35667 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35667)){
var statearr_35715_37661 = state_35688__$1;
(statearr_35715_37661[(1)] = (32));

} else {
var statearr_35716_37662 = state_35688__$1;
(statearr_35716_37662[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (32))){
var inst_35644 = (state_35688[(14)]);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35688__$1,(35),out,inst_35644);
} else {
if((state_val_35690 === (33))){
var inst_35633 = (state_35688[(12)]);
var inst_35608 = inst_35633;
var state_35688__$1 = (function (){var statearr_35718 = state_35688;
(statearr_35718[(7)] = inst_35608);

return statearr_35718;
})();
var statearr_35722_37669 = state_35688__$1;
(statearr_35722_37669[(2)] = null);

(statearr_35722_37669[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (13))){
var inst_35608 = (state_35688[(7)]);
var inst_35617 = inst_35608.cljs$lang$protocol_mask$partition0$;
var inst_35618 = (inst_35617 & (64));
var inst_35619 = inst_35608.cljs$core$ISeq$;
var inst_35620 = (cljs.core.PROTOCOL_SENTINEL === inst_35619);
var inst_35621 = ((inst_35618) || (inst_35620));
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35621)){
var statearr_35726_37673 = state_35688__$1;
(statearr_35726_37673[(1)] = (16));

} else {
var statearr_35728_37674 = state_35688__$1;
(statearr_35728_37674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (22))){
var inst_35644 = (state_35688[(14)]);
var inst_35645 = (state_35688[(11)]);
var inst_35643 = (state_35688[(2)]);
var inst_35644__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35643,(0),null);
var inst_35645__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35643,(1),null);
var inst_35646 = (inst_35644__$1 == null);
var inst_35647 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35645__$1,change);
var inst_35648 = ((inst_35646) || (inst_35647));
var state_35688__$1 = (function (){var statearr_35731 = state_35688;
(statearr_35731[(14)] = inst_35644__$1);

(statearr_35731[(11)] = inst_35645__$1);

return statearr_35731;
})();
if(cljs.core.truth_(inst_35648)){
var statearr_35733_37678 = state_35688__$1;
(statearr_35733_37678[(1)] = (23));

} else {
var statearr_35734_37679 = state_35688__$1;
(statearr_35734_37679[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (36))){
var inst_35633 = (state_35688[(12)]);
var inst_35608 = inst_35633;
var state_35688__$1 = (function (){var statearr_35741 = state_35688;
(statearr_35741[(7)] = inst_35608);

return statearr_35741;
})();
var statearr_35747_37682 = state_35688__$1;
(statearr_35747_37682[(2)] = null);

(statearr_35747_37682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (29))){
var inst_35659 = (state_35688[(9)]);
var state_35688__$1 = state_35688;
var statearr_35749_37683 = state_35688__$1;
(statearr_35749_37683[(2)] = inst_35659);

(statearr_35749_37683[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (6))){
var state_35688__$1 = state_35688;
var statearr_35756_37684 = state_35688__$1;
(statearr_35756_37684[(2)] = false);

(statearr_35756_37684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (28))){
var inst_35655 = (state_35688[(2)]);
var inst_35656 = calc_state();
var inst_35608 = inst_35656;
var state_35688__$1 = (function (){var statearr_35757 = state_35688;
(statearr_35757[(7)] = inst_35608);

(statearr_35757[(15)] = inst_35655);

return statearr_35757;
})();
var statearr_35758_37687 = state_35688__$1;
(statearr_35758_37687[(2)] = null);

(statearr_35758_37687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (25))){
var inst_35682 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35759_37688 = state_35688__$1;
(statearr_35759_37688[(2)] = inst_35682);

(statearr_35759_37688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (34))){
var inst_35680 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35760_37693 = state_35688__$1;
(statearr_35760_37693[(2)] = inst_35680);

(statearr_35760_37693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (17))){
var state_35688__$1 = state_35688;
var statearr_35761_37694 = state_35688__$1;
(statearr_35761_37694[(2)] = false);

(statearr_35761_37694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (3))){
var state_35688__$1 = state_35688;
var statearr_35764_37695 = state_35688__$1;
(statearr_35764_37695[(2)] = false);

(statearr_35764_37695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (12))){
var inst_35684 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35688__$1,inst_35684);
} else {
if((state_val_35690 === (2))){
var inst_35579 = (state_35688[(8)]);
var inst_35586 = inst_35579.cljs$lang$protocol_mask$partition0$;
var inst_35587 = (inst_35586 & (64));
var inst_35588 = inst_35579.cljs$core$ISeq$;
var inst_35589 = (cljs.core.PROTOCOL_SENTINEL === inst_35588);
var inst_35590 = ((inst_35587) || (inst_35589));
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35590)){
var statearr_35767_37700 = state_35688__$1;
(statearr_35767_37700[(1)] = (5));

} else {
var statearr_35768_37701 = state_35688__$1;
(statearr_35768_37701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (23))){
var inst_35644 = (state_35688[(14)]);
var inst_35650 = (inst_35644 == null);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35650)){
var statearr_35770_37702 = state_35688__$1;
(statearr_35770_37702[(1)] = (26));

} else {
var statearr_35771_37703 = state_35688__$1;
(statearr_35771_37703[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (35))){
var inst_35670 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35670)){
var statearr_35772_37705 = state_35688__$1;
(statearr_35772_37705[(1)] = (36));

} else {
var statearr_35774_37706 = state_35688__$1;
(statearr_35774_37706[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (19))){
var inst_35608 = (state_35688[(7)]);
var inst_35630 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35608);
var state_35688__$1 = state_35688;
var statearr_35777_37707 = state_35688__$1;
(statearr_35777_37707[(2)] = inst_35630);

(statearr_35777_37707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (11))){
var inst_35608 = (state_35688[(7)]);
var inst_35612 = (inst_35608 == null);
var inst_35613 = cljs.core.not(inst_35612);
var state_35688__$1 = state_35688;
if(inst_35613){
var statearr_35778_37712 = state_35688__$1;
(statearr_35778_37712[(1)] = (13));

} else {
var statearr_35779_37713 = state_35688__$1;
(statearr_35779_37713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (9))){
var inst_35579 = (state_35688[(8)]);
var state_35688__$1 = state_35688;
var statearr_35781_37715 = state_35688__$1;
(statearr_35781_37715[(2)] = inst_35579);

(statearr_35781_37715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (5))){
var state_35688__$1 = state_35688;
var statearr_35784_37720 = state_35688__$1;
(statearr_35784_37720[(2)] = true);

(statearr_35784_37720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (14))){
var state_35688__$1 = state_35688;
var statearr_35786_37721 = state_35688__$1;
(statearr_35786_37721[(2)] = false);

(statearr_35786_37721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (26))){
var inst_35645 = (state_35688[(11)]);
var inst_35652 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35645);
var state_35688__$1 = state_35688;
var statearr_35787_37726 = state_35688__$1;
(statearr_35787_37726[(2)] = inst_35652);

(statearr_35787_37726[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (16))){
var state_35688__$1 = state_35688;
var statearr_35788_37728 = state_35688__$1;
(statearr_35788_37728[(2)] = true);

(statearr_35788_37728[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (38))){
var inst_35676 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35790_37731 = state_35688__$1;
(statearr_35790_37731[(2)] = inst_35676);

(statearr_35790_37731[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (30))){
var inst_35636 = (state_35688[(13)]);
var inst_35635 = (state_35688[(10)]);
var inst_35645 = (state_35688[(11)]);
var inst_35662 = cljs.core.empty_QMARK_(inst_35635);
var inst_35663 = (inst_35636.cljs$core$IFn$_invoke$arity$1 ? inst_35636.cljs$core$IFn$_invoke$arity$1(inst_35645) : inst_35636.call(null,inst_35645));
var inst_35664 = cljs.core.not(inst_35663);
var inst_35665 = ((inst_35662) && (inst_35664));
var state_35688__$1 = state_35688;
var statearr_35791_37734 = state_35688__$1;
(statearr_35791_37734[(2)] = inst_35665);

(statearr_35791_37734[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (10))){
var inst_35579 = (state_35688[(8)]);
var inst_35603 = (state_35688[(2)]);
var inst_35605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35603,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35603,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35603,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35608 = inst_35579;
var state_35688__$1 = (function (){var statearr_35795 = state_35688;
(statearr_35795[(16)] = inst_35605);

(statearr_35795[(7)] = inst_35608);

(statearr_35795[(17)] = inst_35606);

(statearr_35795[(18)] = inst_35607);

return statearr_35795;
})();
var statearr_35799_37745 = state_35688__$1;
(statearr_35799_37745[(2)] = null);

(statearr_35799_37745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (18))){
var inst_35625 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35800_37747 = state_35688__$1;
(statearr_35800_37747[(2)] = inst_35625);

(statearr_35800_37747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (37))){
var state_35688__$1 = state_35688;
var statearr_35804_37748 = state_35688__$1;
(statearr_35804_37748[(2)] = null);

(statearr_35804_37748[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (8))){
var inst_35579 = (state_35688[(8)]);
var inst_35600 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35579);
var state_35688__$1 = state_35688;
var statearr_35805_37756 = state_35688__$1;
(statearr_35805_37756[(2)] = inst_35600);

(statearr_35805_37756[(1)] = (10));


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
var statearr_35811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35811[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35811[(1)] = (1));

return statearr_35811;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35688){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35688);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35816){if((e35816 instanceof Object)){
var ex__34210__auto__ = e35816;
var statearr_35817_37765 = state_35688;
(statearr_35817_37765[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37767 = state_35688;
state_35688 = G__37767;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35688){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35818 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35818[(6)] = c__34273__auto___37608);

return statearr_35818;
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
var G__35846 = arguments.length;
switch (G__35846) {
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
var G__35866 = arguments.length;
switch (G__35866) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35861_SHARP_){
if(cljs.core.truth_((p1__35861_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35861_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35861_SHARP_.call(null,topic)))){
return p1__35861_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35861_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35874 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35875){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35875 = meta35875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35876,meta35875__$1){
var self__ = this;
var _35876__$1 = this;
return (new cljs.core.async.t_cljs$core$async35874(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35875__$1));
}));

(cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35876){
var self__ = this;
var _35876__$1 = this;
return self__.meta35875;
}));

(cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35875","meta35875",503371791,null)], null);
}));

(cljs.core.async.t_cljs$core$async35874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35874");

(cljs.core.async.t_cljs$core$async35874.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35874.
 */
cljs.core.async.__GT_t_cljs$core$async35874 = (function cljs$core$async$__GT_t_cljs$core$async35874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35875){
return (new cljs.core.async.t_cljs$core$async35874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35875));
});

}

return (new cljs.core.async.t_cljs$core$async35874(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35967){
var state_val_35968 = (state_35967[(1)]);
if((state_val_35968 === (7))){
var inst_35963 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_35969_37839 = state_35967__$1;
(statearr_35969_37839[(2)] = inst_35963);

(statearr_35969_37839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (20))){
var state_35967__$1 = state_35967;
var statearr_35973_37843 = state_35967__$1;
(statearr_35973_37843[(2)] = null);

(statearr_35973_37843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (1))){
var state_35967__$1 = state_35967;
var statearr_35974_37845 = state_35967__$1;
(statearr_35974_37845[(2)] = null);

(statearr_35974_37845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (24))){
var inst_35945 = (state_35967[(7)]);
var inst_35955 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35945);
var state_35967__$1 = state_35967;
var statearr_35975_37849 = state_35967__$1;
(statearr_35975_37849[(2)] = inst_35955);

(statearr_35975_37849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (4))){
var inst_35895 = (state_35967[(8)]);
var inst_35895__$1 = (state_35967[(2)]);
var inst_35896 = (inst_35895__$1 == null);
var state_35967__$1 = (function (){var statearr_35978 = state_35967;
(statearr_35978[(8)] = inst_35895__$1);

return statearr_35978;
})();
if(cljs.core.truth_(inst_35896)){
var statearr_35981_37854 = state_35967__$1;
(statearr_35981_37854[(1)] = (5));

} else {
var statearr_35983_37855 = state_35967__$1;
(statearr_35983_37855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (15))){
var inst_35939 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_35986_37858 = state_35967__$1;
(statearr_35986_37858[(2)] = inst_35939);

(statearr_35986_37858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (21))){
var inst_35960 = (state_35967[(2)]);
var state_35967__$1 = (function (){var statearr_35987 = state_35967;
(statearr_35987[(9)] = inst_35960);

return statearr_35987;
})();
var statearr_35988_37862 = state_35967__$1;
(statearr_35988_37862[(2)] = null);

(statearr_35988_37862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (13))){
var inst_35919 = (state_35967[(10)]);
var inst_35921 = cljs.core.chunked_seq_QMARK_(inst_35919);
var state_35967__$1 = state_35967;
if(inst_35921){
var statearr_35993_37866 = state_35967__$1;
(statearr_35993_37866[(1)] = (16));

} else {
var statearr_35994_37868 = state_35967__$1;
(statearr_35994_37868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (22))){
var inst_35952 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
if(cljs.core.truth_(inst_35952)){
var statearr_35997_37872 = state_35967__$1;
(statearr_35997_37872[(1)] = (23));

} else {
var statearr_36000_37873 = state_35967__$1;
(statearr_36000_37873[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (6))){
var inst_35895 = (state_35967[(8)]);
var inst_35947 = (state_35967[(11)]);
var inst_35945 = (state_35967[(7)]);
var inst_35945__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35895) : topic_fn.call(null,inst_35895));
var inst_35946 = cljs.core.deref(mults);
var inst_35947__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35946,inst_35945__$1);
var state_35967__$1 = (function (){var statearr_36002 = state_35967;
(statearr_36002[(11)] = inst_35947__$1);

(statearr_36002[(7)] = inst_35945__$1);

return statearr_36002;
})();
if(cljs.core.truth_(inst_35947__$1)){
var statearr_36005_37875 = state_35967__$1;
(statearr_36005_37875[(1)] = (19));

} else {
var statearr_36007_37876 = state_35967__$1;
(statearr_36007_37876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (25))){
var inst_35957 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_36008_37878 = state_35967__$1;
(statearr_36008_37878[(2)] = inst_35957);

(statearr_36008_37878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (17))){
var inst_35919 = (state_35967[(10)]);
var inst_35930 = cljs.core.first(inst_35919);
var inst_35931 = cljs.core.async.muxch_STAR_(inst_35930);
var inst_35932 = cljs.core.async.close_BANG_(inst_35931);
var inst_35933 = cljs.core.next(inst_35919);
var inst_35905 = inst_35933;
var inst_35906 = null;
var inst_35907 = (0);
var inst_35908 = (0);
var state_35967__$1 = (function (){var statearr_36013 = state_35967;
(statearr_36013[(12)] = inst_35932);

(statearr_36013[(13)] = inst_35908);

(statearr_36013[(14)] = inst_35906);

(statearr_36013[(15)] = inst_35907);

(statearr_36013[(16)] = inst_35905);

return statearr_36013;
})();
var statearr_36014_37884 = state_35967__$1;
(statearr_36014_37884[(2)] = null);

(statearr_36014_37884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (3))){
var inst_35965 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35967__$1,inst_35965);
} else {
if((state_val_35968 === (12))){
var inst_35941 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_36015_37889 = state_35967__$1;
(statearr_36015_37889[(2)] = inst_35941);

(statearr_36015_37889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (2))){
var state_35967__$1 = state_35967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35967__$1,(4),ch);
} else {
if((state_val_35968 === (23))){
var state_35967__$1 = state_35967;
var statearr_36019_37891 = state_35967__$1;
(statearr_36019_37891[(2)] = null);

(statearr_36019_37891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (19))){
var inst_35895 = (state_35967[(8)]);
var inst_35947 = (state_35967[(11)]);
var inst_35949 = cljs.core.async.muxch_STAR_(inst_35947);
var state_35967__$1 = state_35967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35967__$1,(22),inst_35949,inst_35895);
} else {
if((state_val_35968 === (11))){
var inst_35919 = (state_35967[(10)]);
var inst_35905 = (state_35967[(16)]);
var inst_35919__$1 = cljs.core.seq(inst_35905);
var state_35967__$1 = (function (){var statearr_36023 = state_35967;
(statearr_36023[(10)] = inst_35919__$1);

return statearr_36023;
})();
if(inst_35919__$1){
var statearr_36024_37896 = state_35967__$1;
(statearr_36024_37896[(1)] = (13));

} else {
var statearr_36025_37898 = state_35967__$1;
(statearr_36025_37898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (9))){
var inst_35943 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_36026_37899 = state_35967__$1;
(statearr_36026_37899[(2)] = inst_35943);

(statearr_36026_37899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (5))){
var inst_35902 = cljs.core.deref(mults);
var inst_35903 = cljs.core.vals(inst_35902);
var inst_35904 = cljs.core.seq(inst_35903);
var inst_35905 = inst_35904;
var inst_35906 = null;
var inst_35907 = (0);
var inst_35908 = (0);
var state_35967__$1 = (function (){var statearr_36030 = state_35967;
(statearr_36030[(13)] = inst_35908);

(statearr_36030[(14)] = inst_35906);

(statearr_36030[(15)] = inst_35907);

(statearr_36030[(16)] = inst_35905);

return statearr_36030;
})();
var statearr_36032_37905 = state_35967__$1;
(statearr_36032_37905[(2)] = null);

(statearr_36032_37905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (14))){
var state_35967__$1 = state_35967;
var statearr_36036_37912 = state_35967__$1;
(statearr_36036_37912[(2)] = null);

(statearr_36036_37912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (16))){
var inst_35919 = (state_35967[(10)]);
var inst_35924 = cljs.core.chunk_first(inst_35919);
var inst_35925 = cljs.core.chunk_rest(inst_35919);
var inst_35927 = cljs.core.count(inst_35924);
var inst_35905 = inst_35925;
var inst_35906 = inst_35924;
var inst_35907 = inst_35927;
var inst_35908 = (0);
var state_35967__$1 = (function (){var statearr_36037 = state_35967;
(statearr_36037[(13)] = inst_35908);

(statearr_36037[(14)] = inst_35906);

(statearr_36037[(15)] = inst_35907);

(statearr_36037[(16)] = inst_35905);

return statearr_36037;
})();
var statearr_36038_37920 = state_35967__$1;
(statearr_36038_37920[(2)] = null);

(statearr_36038_37920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (10))){
var inst_35908 = (state_35967[(13)]);
var inst_35906 = (state_35967[(14)]);
var inst_35907 = (state_35967[(15)]);
var inst_35905 = (state_35967[(16)]);
var inst_35913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35906,inst_35908);
var inst_35914 = cljs.core.async.muxch_STAR_(inst_35913);
var inst_35915 = cljs.core.async.close_BANG_(inst_35914);
var inst_35916 = (inst_35908 + (1));
var tmp36033 = inst_35906;
var tmp36034 = inst_35907;
var tmp36035 = inst_35905;
var inst_35905__$1 = tmp36035;
var inst_35906__$1 = tmp36033;
var inst_35907__$1 = tmp36034;
var inst_35908__$1 = inst_35916;
var state_35967__$1 = (function (){var statearr_36039 = state_35967;
(statearr_36039[(13)] = inst_35908__$1);

(statearr_36039[(14)] = inst_35906__$1);

(statearr_36039[(15)] = inst_35907__$1);

(statearr_36039[(16)] = inst_35905__$1);

(statearr_36039[(17)] = inst_35915);

return statearr_36039;
})();
var statearr_36040_37928 = state_35967__$1;
(statearr_36040_37928[(2)] = null);

(statearr_36040_37928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (18))){
var inst_35936 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_36041_37931 = state_35967__$1;
(statearr_36041_37931[(2)] = inst_35936);

(statearr_36041_37931[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (8))){
var inst_35908 = (state_35967[(13)]);
var inst_35907 = (state_35967[(15)]);
var inst_35910 = (inst_35908 < inst_35907);
var inst_35911 = inst_35910;
var state_35967__$1 = state_35967;
if(cljs.core.truth_(inst_35911)){
var statearr_36042_37933 = state_35967__$1;
(statearr_36042_37933[(1)] = (10));

} else {
var statearr_36043_37934 = state_35967__$1;
(statearr_36043_37934[(1)] = (11));

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
var statearr_36044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36044[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36044[(1)] = (1));

return statearr_36044;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35967){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35967);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36045){if((e36045 instanceof Object)){
var ex__34210__auto__ = e36045;
var statearr_36046_37939 = state_35967;
(statearr_36046_37939[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37941 = state_35967;
state_35967 = G__37941;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36047 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36047[(6)] = c__34273__auto___37837);

return statearr_36047;
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
var G__36050 = arguments.length;
switch (G__36050) {
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
var G__36054 = arguments.length;
switch (G__36054) {
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
var G__36062 = arguments.length;
switch (G__36062) {
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
var c__34273__auto___37969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36110){
var state_val_36111 = (state_36110[(1)]);
if((state_val_36111 === (7))){
var state_36110__$1 = state_36110;
var statearr_36113_37970 = state_36110__$1;
(statearr_36113_37970[(2)] = null);

(statearr_36113_37970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (1))){
var state_36110__$1 = state_36110;
var statearr_36116_37971 = state_36110__$1;
(statearr_36116_37971[(2)] = null);

(statearr_36116_37971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (4))){
var inst_36069 = (state_36110[(7)]);
var inst_36073 = (inst_36069 < cnt);
var state_36110__$1 = state_36110;
if(cljs.core.truth_(inst_36073)){
var statearr_36119_37972 = state_36110__$1;
(statearr_36119_37972[(1)] = (6));

} else {
var statearr_36120_37973 = state_36110__$1;
(statearr_36120_37973[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (15))){
var inst_36106 = (state_36110[(2)]);
var state_36110__$1 = state_36110;
var statearr_36121_37974 = state_36110__$1;
(statearr_36121_37974[(2)] = inst_36106);

(statearr_36121_37974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (13))){
var inst_36099 = cljs.core.async.close_BANG_(out);
var state_36110__$1 = state_36110;
var statearr_36122_37975 = state_36110__$1;
(statearr_36122_37975[(2)] = inst_36099);

(statearr_36122_37975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (6))){
var state_36110__$1 = state_36110;
var statearr_36123_37978 = state_36110__$1;
(statearr_36123_37978[(2)] = null);

(statearr_36123_37978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (3))){
var inst_36108 = (state_36110[(2)]);
var state_36110__$1 = state_36110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36110__$1,inst_36108);
} else {
if((state_val_36111 === (12))){
var inst_36096 = (state_36110[(8)]);
var inst_36096__$1 = (state_36110[(2)]);
var inst_36097 = cljs.core.some(cljs.core.nil_QMARK_,inst_36096__$1);
var state_36110__$1 = (function (){var statearr_36124 = state_36110;
(statearr_36124[(8)] = inst_36096__$1);

return statearr_36124;
})();
if(cljs.core.truth_(inst_36097)){
var statearr_36125_37984 = state_36110__$1;
(statearr_36125_37984[(1)] = (13));

} else {
var statearr_36126_37985 = state_36110__$1;
(statearr_36126_37985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (2))){
var inst_36068 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36069 = (0);
var state_36110__$1 = (function (){var statearr_36127 = state_36110;
(statearr_36127[(7)] = inst_36069);

(statearr_36127[(9)] = inst_36068);

return statearr_36127;
})();
var statearr_36128_37986 = state_36110__$1;
(statearr_36128_37986[(2)] = null);

(statearr_36128_37986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (11))){
var inst_36069 = (state_36110[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36110,(10),Object,null,(9));
var inst_36083 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36069) : chs__$1.call(null,inst_36069));
var inst_36084 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36069) : done.call(null,inst_36069));
var inst_36085 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36083,inst_36084);
var state_36110__$1 = state_36110;
var statearr_36129_37990 = state_36110__$1;
(statearr_36129_37990[(2)] = inst_36085);


cljs.core.async.impl.ioc_helpers.process_exception(state_36110__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (9))){
var inst_36069 = (state_36110[(7)]);
var inst_36087 = (state_36110[(2)]);
var inst_36088 = (inst_36069 + (1));
var inst_36069__$1 = inst_36088;
var state_36110__$1 = (function (){var statearr_36130 = state_36110;
(statearr_36130[(7)] = inst_36069__$1);

(statearr_36130[(10)] = inst_36087);

return statearr_36130;
})();
var statearr_36135_37991 = state_36110__$1;
(statearr_36135_37991[(2)] = null);

(statearr_36135_37991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (5))){
var inst_36094 = (state_36110[(2)]);
var state_36110__$1 = (function (){var statearr_36136 = state_36110;
(statearr_36136[(11)] = inst_36094);

return statearr_36136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36110__$1,(12),dchan);
} else {
if((state_val_36111 === (14))){
var inst_36096 = (state_36110[(8)]);
var inst_36101 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36096);
var state_36110__$1 = state_36110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36110__$1,(16),out,inst_36101);
} else {
if((state_val_36111 === (16))){
var inst_36103 = (state_36110[(2)]);
var state_36110__$1 = (function (){var statearr_36140 = state_36110;
(statearr_36140[(12)] = inst_36103);

return statearr_36140;
})();
var statearr_36141_37996 = state_36110__$1;
(statearr_36141_37996[(2)] = null);

(statearr_36141_37996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (10))){
var inst_36077 = (state_36110[(2)]);
var inst_36078 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36110__$1 = (function (){var statearr_36142 = state_36110;
(statearr_36142[(13)] = inst_36077);

return statearr_36142;
})();
var statearr_36143_38002 = state_36110__$1;
(statearr_36143_38002[(2)] = inst_36078);


cljs.core.async.impl.ioc_helpers.process_exception(state_36110__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (8))){
var inst_36092 = (state_36110[(2)]);
var state_36110__$1 = state_36110;
var statearr_36144_38003 = state_36110__$1;
(statearr_36144_38003[(2)] = inst_36092);

(statearr_36144_38003[(1)] = (5));


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
var statearr_36147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36147[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36147[(1)] = (1));

return statearr_36147;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36110){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36110);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36150){if((e36150 instanceof Object)){
var ex__34210__auto__ = e36150;
var statearr_36152_38004 = state_36110;
(statearr_36152_38004[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36150;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38010 = state_36110;
state_36110 = G__38010;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36153 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36153[(6)] = c__34273__auto___37969);

return statearr_36153;
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
var G__36158 = arguments.length;
switch (G__36158) {
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
var c__34273__auto___38015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36190){
var state_val_36191 = (state_36190[(1)]);
if((state_val_36191 === (7))){
var inst_36169 = (state_36190[(7)]);
var inst_36170 = (state_36190[(8)]);
var inst_36169__$1 = (state_36190[(2)]);
var inst_36170__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36169__$1,(0),null);
var inst_36171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36169__$1,(1),null);
var inst_36172 = (inst_36170__$1 == null);
var state_36190__$1 = (function (){var statearr_36192 = state_36190;
(statearr_36192[(7)] = inst_36169__$1);

(statearr_36192[(9)] = inst_36171);

(statearr_36192[(8)] = inst_36170__$1);

return statearr_36192;
})();
if(cljs.core.truth_(inst_36172)){
var statearr_36193_38018 = state_36190__$1;
(statearr_36193_38018[(1)] = (8));

} else {
var statearr_36194_38019 = state_36190__$1;
(statearr_36194_38019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (1))){
var inst_36159 = cljs.core.vec(chs);
var inst_36160 = inst_36159;
var state_36190__$1 = (function (){var statearr_36195 = state_36190;
(statearr_36195[(10)] = inst_36160);

return statearr_36195;
})();
var statearr_36196_38020 = state_36190__$1;
(statearr_36196_38020[(2)] = null);

(statearr_36196_38020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (4))){
var inst_36160 = (state_36190[(10)]);
var state_36190__$1 = state_36190;
return cljs.core.async.ioc_alts_BANG_(state_36190__$1,(7),inst_36160);
} else {
if((state_val_36191 === (6))){
var inst_36186 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36199_38023 = state_36190__$1;
(statearr_36199_38023[(2)] = inst_36186);

(statearr_36199_38023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (3))){
var inst_36188 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36190__$1,inst_36188);
} else {
if((state_val_36191 === (2))){
var inst_36160 = (state_36190[(10)]);
var inst_36162 = cljs.core.count(inst_36160);
var inst_36163 = (inst_36162 > (0));
var state_36190__$1 = state_36190;
if(cljs.core.truth_(inst_36163)){
var statearr_36201_38025 = state_36190__$1;
(statearr_36201_38025[(1)] = (4));

} else {
var statearr_36202_38026 = state_36190__$1;
(statearr_36202_38026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (11))){
var inst_36160 = (state_36190[(10)]);
var inst_36179 = (state_36190[(2)]);
var tmp36200 = inst_36160;
var inst_36160__$1 = tmp36200;
var state_36190__$1 = (function (){var statearr_36204 = state_36190;
(statearr_36204[(10)] = inst_36160__$1);

(statearr_36204[(11)] = inst_36179);

return statearr_36204;
})();
var statearr_36206_38028 = state_36190__$1;
(statearr_36206_38028[(2)] = null);

(statearr_36206_38028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (9))){
var inst_36170 = (state_36190[(8)]);
var state_36190__$1 = state_36190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36190__$1,(11),out,inst_36170);
} else {
if((state_val_36191 === (5))){
var inst_36184 = cljs.core.async.close_BANG_(out);
var state_36190__$1 = state_36190;
var statearr_36213_38029 = state_36190__$1;
(statearr_36213_38029[(2)] = inst_36184);

(statearr_36213_38029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (10))){
var inst_36182 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36214_38030 = state_36190__$1;
(statearr_36214_38030[(2)] = inst_36182);

(statearr_36214_38030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (8))){
var inst_36160 = (state_36190[(10)]);
var inst_36169 = (state_36190[(7)]);
var inst_36171 = (state_36190[(9)]);
var inst_36170 = (state_36190[(8)]);
var inst_36174 = (function (){var cs = inst_36160;
var vec__36165 = inst_36169;
var v = inst_36170;
var c = inst_36171;
return (function (p1__36156_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36156_SHARP_);
});
})();
var inst_36175 = cljs.core.filterv(inst_36174,inst_36160);
var inst_36160__$1 = inst_36175;
var state_36190__$1 = (function (){var statearr_36215 = state_36190;
(statearr_36215[(10)] = inst_36160__$1);

return statearr_36215;
})();
var statearr_36216_38034 = state_36190__$1;
(statearr_36216_38034[(2)] = null);

(statearr_36216_38034[(1)] = (2));


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
var statearr_36218 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36218[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36218[(1)] = (1));

return statearr_36218;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36190){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36190);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36220){if((e36220 instanceof Object)){
var ex__34210__auto__ = e36220;
var statearr_36221_38036 = state_36190;
(statearr_36221_38036[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38039 = state_36190;
state_36190 = G__38039;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36222 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36222[(6)] = c__34273__auto___38015);

return statearr_36222;
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
var G__36236 = arguments.length;
switch (G__36236) {
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
var c__34273__auto___38044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36264){
var state_val_36265 = (state_36264[(1)]);
if((state_val_36265 === (7))){
var inst_36246 = (state_36264[(7)]);
var inst_36246__$1 = (state_36264[(2)]);
var inst_36247 = (inst_36246__$1 == null);
var inst_36248 = cljs.core.not(inst_36247);
var state_36264__$1 = (function (){var statearr_36268 = state_36264;
(statearr_36268[(7)] = inst_36246__$1);

return statearr_36268;
})();
if(inst_36248){
var statearr_36269_38046 = state_36264__$1;
(statearr_36269_38046[(1)] = (8));

} else {
var statearr_36270_38047 = state_36264__$1;
(statearr_36270_38047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (1))){
var inst_36241 = (0);
var state_36264__$1 = (function (){var statearr_36271 = state_36264;
(statearr_36271[(8)] = inst_36241);

return statearr_36271;
})();
var statearr_36272_38050 = state_36264__$1;
(statearr_36272_38050[(2)] = null);

(statearr_36272_38050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (4))){
var state_36264__$1 = state_36264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36264__$1,(7),ch);
} else {
if((state_val_36265 === (6))){
var inst_36259 = (state_36264[(2)]);
var state_36264__$1 = state_36264;
var statearr_36275_38051 = state_36264__$1;
(statearr_36275_38051[(2)] = inst_36259);

(statearr_36275_38051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (3))){
var inst_36261 = (state_36264[(2)]);
var inst_36262 = cljs.core.async.close_BANG_(out);
var state_36264__$1 = (function (){var statearr_36276 = state_36264;
(statearr_36276[(9)] = inst_36261);

return statearr_36276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36264__$1,inst_36262);
} else {
if((state_val_36265 === (2))){
var inst_36241 = (state_36264[(8)]);
var inst_36243 = (inst_36241 < n);
var state_36264__$1 = state_36264;
if(cljs.core.truth_(inst_36243)){
var statearr_36277_38055 = state_36264__$1;
(statearr_36277_38055[(1)] = (4));

} else {
var statearr_36278_38056 = state_36264__$1;
(statearr_36278_38056[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (11))){
var inst_36241 = (state_36264[(8)]);
var inst_36251 = (state_36264[(2)]);
var inst_36252 = (inst_36241 + (1));
var inst_36241__$1 = inst_36252;
var state_36264__$1 = (function (){var statearr_36282 = state_36264;
(statearr_36282[(8)] = inst_36241__$1);

(statearr_36282[(10)] = inst_36251);

return statearr_36282;
})();
var statearr_36284_38057 = state_36264__$1;
(statearr_36284_38057[(2)] = null);

(statearr_36284_38057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (9))){
var state_36264__$1 = state_36264;
var statearr_36285_38059 = state_36264__$1;
(statearr_36285_38059[(2)] = null);

(statearr_36285_38059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (5))){
var state_36264__$1 = state_36264;
var statearr_36286_38062 = state_36264__$1;
(statearr_36286_38062[(2)] = null);

(statearr_36286_38062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (10))){
var inst_36256 = (state_36264[(2)]);
var state_36264__$1 = state_36264;
var statearr_36292_38063 = state_36264__$1;
(statearr_36292_38063[(2)] = inst_36256);

(statearr_36292_38063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (8))){
var inst_36246 = (state_36264[(7)]);
var state_36264__$1 = state_36264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36264__$1,(11),out,inst_36246);
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
var statearr_36296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36296[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36296[(1)] = (1));

return statearr_36296;
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
}catch (e36298){if((e36298 instanceof Object)){
var ex__34210__auto__ = e36298;
var statearr_36299_38066 = state_36264;
(statearr_36299_38066[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38068 = state_36264;
state_36264 = G__38068;
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
var state__34276__auto__ = (function (){var statearr_36302 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36302[(6)] = c__34273__auto___38044);

return statearr_36302;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36306 = (function (f,ch,meta36307){
this.f = f;
this.ch = ch;
this.meta36307 = meta36307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36308,meta36307__$1){
var self__ = this;
var _36308__$1 = this;
return (new cljs.core.async.t_cljs$core$async36306(self__.f,self__.ch,meta36307__$1));
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36308){
var self__ = this;
var _36308__$1 = this;
return self__.meta36307;
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36313 = (function (f,ch,meta36307,_,fn1,meta36314){
this.f = f;
this.ch = ch;
this.meta36307 = meta36307;
this._ = _;
this.fn1 = fn1;
this.meta36314 = meta36314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36315,meta36314__$1){
var self__ = this;
var _36315__$1 = this;
return (new cljs.core.async.t_cljs$core$async36313(self__.f,self__.ch,self__.meta36307,self__._,self__.fn1,meta36314__$1));
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36315){
var self__ = this;
var _36315__$1 = this;
return self__.meta36314;
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36304_SHARP_){
var G__36327 = (((p1__36304_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36304_SHARP_) : self__.f.call(null,p1__36304_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36327) : f1.call(null,G__36327));
});
}));

(cljs.core.async.t_cljs$core$async36313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36307","meta36307",348116198,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36306","cljs.core.async/t_cljs$core$async36306",1077785870,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36314","meta36314",-1949065285,null)], null);
}));

(cljs.core.async.t_cljs$core$async36313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36313");

(cljs.core.async.t_cljs$core$async36313.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36313.
 */
cljs.core.async.__GT_t_cljs$core$async36313 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36313(f__$1,ch__$1,meta36307__$1,___$2,fn1__$1,meta36314){
return (new cljs.core.async.t_cljs$core$async36313(f__$1,ch__$1,meta36307__$1,___$2,fn1__$1,meta36314));
});

}

return (new cljs.core.async.t_cljs$core$async36313(self__.f,self__.ch,self__.meta36307,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36332 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36332) : self__.f.call(null,G__36332));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36307","meta36307",348116198,null)], null);
}));

(cljs.core.async.t_cljs$core$async36306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36306");

(cljs.core.async.t_cljs$core$async36306.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36306.
 */
cljs.core.async.__GT_t_cljs$core$async36306 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36306(f__$1,ch__$1,meta36307){
return (new cljs.core.async.t_cljs$core$async36306(f__$1,ch__$1,meta36307));
});

}

return (new cljs.core.async.t_cljs$core$async36306(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36339 = (function (f,ch,meta36340){
this.f = f;
this.ch = ch;
this.meta36340 = meta36340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36341,meta36340__$1){
var self__ = this;
var _36341__$1 = this;
return (new cljs.core.async.t_cljs$core$async36339(self__.f,self__.ch,meta36340__$1));
}));

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36341){
var self__ = this;
var _36341__$1 = this;
return self__.meta36340;
}));

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36340","meta36340",2120143757,null)], null);
}));

(cljs.core.async.t_cljs$core$async36339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36339");

(cljs.core.async.t_cljs$core$async36339.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36339.
 */
cljs.core.async.__GT_t_cljs$core$async36339 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36339(f__$1,ch__$1,meta36340){
return (new cljs.core.async.t_cljs$core$async36339(f__$1,ch__$1,meta36340));
});

}

return (new cljs.core.async.t_cljs$core$async36339(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36356 = (function (p,ch,meta36357){
this.p = p;
this.ch = ch;
this.meta36357 = meta36357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36358,meta36357__$1){
var self__ = this;
var _36358__$1 = this;
return (new cljs.core.async.t_cljs$core$async36356(self__.p,self__.ch,meta36357__$1));
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36358){
var self__ = this;
var _36358__$1 = this;
return self__.meta36357;
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36357","meta36357",948392194,null)], null);
}));

(cljs.core.async.t_cljs$core$async36356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36356");

(cljs.core.async.t_cljs$core$async36356.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36356.
 */
cljs.core.async.__GT_t_cljs$core$async36356 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36356(p__$1,ch__$1,meta36357){
return (new cljs.core.async.t_cljs$core$async36356(p__$1,ch__$1,meta36357));
});

}

return (new cljs.core.async.t_cljs$core$async36356(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36377 = arguments.length;
switch (G__36377) {
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
var c__34273__auto___38100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36403){
var state_val_36404 = (state_36403[(1)]);
if((state_val_36404 === (7))){
var inst_36399 = (state_36403[(2)]);
var state_36403__$1 = state_36403;
var statearr_36405_38101 = state_36403__$1;
(statearr_36405_38101[(2)] = inst_36399);

(statearr_36405_38101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (1))){
var state_36403__$1 = state_36403;
var statearr_36406_38102 = state_36403__$1;
(statearr_36406_38102[(2)] = null);

(statearr_36406_38102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (4))){
var inst_36383 = (state_36403[(7)]);
var inst_36383__$1 = (state_36403[(2)]);
var inst_36385 = (inst_36383__$1 == null);
var state_36403__$1 = (function (){var statearr_36408 = state_36403;
(statearr_36408[(7)] = inst_36383__$1);

return statearr_36408;
})();
if(cljs.core.truth_(inst_36385)){
var statearr_36409_38104 = state_36403__$1;
(statearr_36409_38104[(1)] = (5));

} else {
var statearr_36410_38105 = state_36403__$1;
(statearr_36410_38105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (6))){
var inst_36383 = (state_36403[(7)]);
var inst_36389 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36383) : p.call(null,inst_36383));
var state_36403__$1 = state_36403;
if(cljs.core.truth_(inst_36389)){
var statearr_36413_38108 = state_36403__$1;
(statearr_36413_38108[(1)] = (8));

} else {
var statearr_36414_38109 = state_36403__$1;
(statearr_36414_38109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (3))){
var inst_36401 = (state_36403[(2)]);
var state_36403__$1 = state_36403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36403__$1,inst_36401);
} else {
if((state_val_36404 === (2))){
var state_36403__$1 = state_36403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36403__$1,(4),ch);
} else {
if((state_val_36404 === (11))){
var inst_36393 = (state_36403[(2)]);
var state_36403__$1 = state_36403;
var statearr_36417_38110 = state_36403__$1;
(statearr_36417_38110[(2)] = inst_36393);

(statearr_36417_38110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (9))){
var state_36403__$1 = state_36403;
var statearr_36421_38111 = state_36403__$1;
(statearr_36421_38111[(2)] = null);

(statearr_36421_38111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (5))){
var inst_36387 = cljs.core.async.close_BANG_(out);
var state_36403__$1 = state_36403;
var statearr_36424_38112 = state_36403__$1;
(statearr_36424_38112[(2)] = inst_36387);

(statearr_36424_38112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (10))){
var inst_36396 = (state_36403[(2)]);
var state_36403__$1 = (function (){var statearr_36425 = state_36403;
(statearr_36425[(8)] = inst_36396);

return statearr_36425;
})();
var statearr_36426_38115 = state_36403__$1;
(statearr_36426_38115[(2)] = null);

(statearr_36426_38115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (8))){
var inst_36383 = (state_36403[(7)]);
var state_36403__$1 = state_36403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36403__$1,(11),out,inst_36383);
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
var statearr_36427 = [null,null,null,null,null,null,null,null,null];
(statearr_36427[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36427[(1)] = (1));

return statearr_36427;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36403){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36403);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36431){if((e36431 instanceof Object)){
var ex__34210__auto__ = e36431;
var statearr_36433_38117 = state_36403;
(statearr_36433_38117[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36431;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38118 = state_36403;
state_36403 = G__38118;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36435 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36435[(6)] = c__34273__auto___38100);

return statearr_36435;
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
var G__36442 = arguments.length;
switch (G__36442) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36516){
var state_val_36517 = (state_36516[(1)]);
if((state_val_36517 === (7))){
var inst_36512 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
var statearr_36521_38126 = state_36516__$1;
(statearr_36521_38126[(2)] = inst_36512);

(statearr_36521_38126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (20))){
var inst_36482 = (state_36516[(7)]);
var inst_36493 = (state_36516[(2)]);
var inst_36494 = cljs.core.next(inst_36482);
var inst_36468 = inst_36494;
var inst_36469 = null;
var inst_36470 = (0);
var inst_36471 = (0);
var state_36516__$1 = (function (){var statearr_36523 = state_36516;
(statearr_36523[(8)] = inst_36471);

(statearr_36523[(9)] = inst_36468);

(statearr_36523[(10)] = inst_36493);

(statearr_36523[(11)] = inst_36470);

(statearr_36523[(12)] = inst_36469);

return statearr_36523;
})();
var statearr_36524_38130 = state_36516__$1;
(statearr_36524_38130[(2)] = null);

(statearr_36524_38130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (1))){
var state_36516__$1 = state_36516;
var statearr_36526_38131 = state_36516__$1;
(statearr_36526_38131[(2)] = null);

(statearr_36526_38131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (4))){
var inst_36452 = (state_36516[(13)]);
var inst_36452__$1 = (state_36516[(2)]);
var inst_36455 = (inst_36452__$1 == null);
var state_36516__$1 = (function (){var statearr_36528 = state_36516;
(statearr_36528[(13)] = inst_36452__$1);

return statearr_36528;
})();
if(cljs.core.truth_(inst_36455)){
var statearr_36529_38135 = state_36516__$1;
(statearr_36529_38135[(1)] = (5));

} else {
var statearr_36530_38136 = state_36516__$1;
(statearr_36530_38136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (15))){
var state_36516__$1 = state_36516;
var statearr_36537_38137 = state_36516__$1;
(statearr_36537_38137[(2)] = null);

(statearr_36537_38137[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (21))){
var state_36516__$1 = state_36516;
var statearr_36538_38139 = state_36516__$1;
(statearr_36538_38139[(2)] = null);

(statearr_36538_38139[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (13))){
var inst_36471 = (state_36516[(8)]);
var inst_36468 = (state_36516[(9)]);
var inst_36470 = (state_36516[(11)]);
var inst_36469 = (state_36516[(12)]);
var inst_36478 = (state_36516[(2)]);
var inst_36479 = (inst_36471 + (1));
var tmp36533 = inst_36468;
var tmp36534 = inst_36470;
var tmp36535 = inst_36469;
var inst_36468__$1 = tmp36533;
var inst_36469__$1 = tmp36535;
var inst_36470__$1 = tmp36534;
var inst_36471__$1 = inst_36479;
var state_36516__$1 = (function (){var statearr_36541 = state_36516;
(statearr_36541[(8)] = inst_36471__$1);

(statearr_36541[(14)] = inst_36478);

(statearr_36541[(9)] = inst_36468__$1);

(statearr_36541[(11)] = inst_36470__$1);

(statearr_36541[(12)] = inst_36469__$1);

return statearr_36541;
})();
var statearr_36544_38142 = state_36516__$1;
(statearr_36544_38142[(2)] = null);

(statearr_36544_38142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (22))){
var state_36516__$1 = state_36516;
var statearr_36547_38143 = state_36516__$1;
(statearr_36547_38143[(2)] = null);

(statearr_36547_38143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (6))){
var inst_36452 = (state_36516[(13)]);
var inst_36466 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36452) : f.call(null,inst_36452));
var inst_36467 = cljs.core.seq(inst_36466);
var inst_36468 = inst_36467;
var inst_36469 = null;
var inst_36470 = (0);
var inst_36471 = (0);
var state_36516__$1 = (function (){var statearr_36548 = state_36516;
(statearr_36548[(8)] = inst_36471);

(statearr_36548[(9)] = inst_36468);

(statearr_36548[(11)] = inst_36470);

(statearr_36548[(12)] = inst_36469);

return statearr_36548;
})();
var statearr_36549_38147 = state_36516__$1;
(statearr_36549_38147[(2)] = null);

(statearr_36549_38147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (17))){
var inst_36482 = (state_36516[(7)]);
var inst_36486 = cljs.core.chunk_first(inst_36482);
var inst_36487 = cljs.core.chunk_rest(inst_36482);
var inst_36488 = cljs.core.count(inst_36486);
var inst_36468 = inst_36487;
var inst_36469 = inst_36486;
var inst_36470 = inst_36488;
var inst_36471 = (0);
var state_36516__$1 = (function (){var statearr_36551 = state_36516;
(statearr_36551[(8)] = inst_36471);

(statearr_36551[(9)] = inst_36468);

(statearr_36551[(11)] = inst_36470);

(statearr_36551[(12)] = inst_36469);

return statearr_36551;
})();
var statearr_36552_38149 = state_36516__$1;
(statearr_36552_38149[(2)] = null);

(statearr_36552_38149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (3))){
var inst_36514 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36516__$1,inst_36514);
} else {
if((state_val_36517 === (12))){
var inst_36502 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
var statearr_36554_38150 = state_36516__$1;
(statearr_36554_38150[(2)] = inst_36502);

(statearr_36554_38150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (2))){
var state_36516__$1 = state_36516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36516__$1,(4),in$);
} else {
if((state_val_36517 === (23))){
var inst_36510 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
var statearr_36557_38152 = state_36516__$1;
(statearr_36557_38152[(2)] = inst_36510);

(statearr_36557_38152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (19))){
var inst_36497 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
var statearr_36560_38154 = state_36516__$1;
(statearr_36560_38154[(2)] = inst_36497);

(statearr_36560_38154[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (11))){
var inst_36468 = (state_36516[(9)]);
var inst_36482 = (state_36516[(7)]);
var inst_36482__$1 = cljs.core.seq(inst_36468);
var state_36516__$1 = (function (){var statearr_36561 = state_36516;
(statearr_36561[(7)] = inst_36482__$1);

return statearr_36561;
})();
if(inst_36482__$1){
var statearr_36563_38156 = state_36516__$1;
(statearr_36563_38156[(1)] = (14));

} else {
var statearr_36564_38159 = state_36516__$1;
(statearr_36564_38159[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (9))){
var inst_36504 = (state_36516[(2)]);
var inst_36505 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36516__$1 = (function (){var statearr_36565 = state_36516;
(statearr_36565[(15)] = inst_36504);

return statearr_36565;
})();
if(cljs.core.truth_(inst_36505)){
var statearr_36566_38160 = state_36516__$1;
(statearr_36566_38160[(1)] = (21));

} else {
var statearr_36567_38161 = state_36516__$1;
(statearr_36567_38161[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (5))){
var inst_36457 = cljs.core.async.close_BANG_(out);
var state_36516__$1 = state_36516;
var statearr_36569_38162 = state_36516__$1;
(statearr_36569_38162[(2)] = inst_36457);

(statearr_36569_38162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (14))){
var inst_36482 = (state_36516[(7)]);
var inst_36484 = cljs.core.chunked_seq_QMARK_(inst_36482);
var state_36516__$1 = state_36516;
if(inst_36484){
var statearr_36570_38167 = state_36516__$1;
(statearr_36570_38167[(1)] = (17));

} else {
var statearr_36571_38168 = state_36516__$1;
(statearr_36571_38168[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (16))){
var inst_36500 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
var statearr_36573_38169 = state_36516__$1;
(statearr_36573_38169[(2)] = inst_36500);

(statearr_36573_38169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (10))){
var inst_36471 = (state_36516[(8)]);
var inst_36469 = (state_36516[(12)]);
var inst_36476 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36469,inst_36471);
var state_36516__$1 = state_36516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36516__$1,(13),out,inst_36476);
} else {
if((state_val_36517 === (18))){
var inst_36482 = (state_36516[(7)]);
var inst_36491 = cljs.core.first(inst_36482);
var state_36516__$1 = state_36516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36516__$1,(20),out,inst_36491);
} else {
if((state_val_36517 === (8))){
var inst_36471 = (state_36516[(8)]);
var inst_36470 = (state_36516[(11)]);
var inst_36473 = (inst_36471 < inst_36470);
var inst_36474 = inst_36473;
var state_36516__$1 = state_36516;
if(cljs.core.truth_(inst_36474)){
var statearr_36575_38174 = state_36516__$1;
(statearr_36575_38174[(1)] = (10));

} else {
var statearr_36576_38175 = state_36516__$1;
(statearr_36576_38175[(1)] = (11));

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
var statearr_36578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36578[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36578[(1)] = (1));

return statearr_36578;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36516){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36516);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36579){if((e36579 instanceof Object)){
var ex__34210__auto__ = e36579;
var statearr_36581_38177 = state_36516;
(statearr_36581_38177[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38179 = state_36516;
state_36516 = G__38179;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36516){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36582 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36582[(6)] = c__34273__auto__);

return statearr_36582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36586 = arguments.length;
switch (G__36586) {
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
var G__36590 = arguments.length;
switch (G__36590) {
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
var G__36594 = arguments.length;
switch (G__36594) {
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
var c__34273__auto___38188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36621){
var state_val_36622 = (state_36621[(1)]);
if((state_val_36622 === (7))){
var inst_36616 = (state_36621[(2)]);
var state_36621__$1 = state_36621;
var statearr_36624_38189 = state_36621__$1;
(statearr_36624_38189[(2)] = inst_36616);

(statearr_36624_38189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (1))){
var inst_36597 = null;
var state_36621__$1 = (function (){var statearr_36625 = state_36621;
(statearr_36625[(7)] = inst_36597);

return statearr_36625;
})();
var statearr_36626_38190 = state_36621__$1;
(statearr_36626_38190[(2)] = null);

(statearr_36626_38190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (4))){
var inst_36600 = (state_36621[(8)]);
var inst_36600__$1 = (state_36621[(2)]);
var inst_36601 = (inst_36600__$1 == null);
var inst_36602 = cljs.core.not(inst_36601);
var state_36621__$1 = (function (){var statearr_36628 = state_36621;
(statearr_36628[(8)] = inst_36600__$1);

return statearr_36628;
})();
if(inst_36602){
var statearr_36629_38193 = state_36621__$1;
(statearr_36629_38193[(1)] = (5));

} else {
var statearr_36630_38195 = state_36621__$1;
(statearr_36630_38195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (6))){
var state_36621__$1 = state_36621;
var statearr_36632_38196 = state_36621__$1;
(statearr_36632_38196[(2)] = null);

(statearr_36632_38196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (3))){
var inst_36618 = (state_36621[(2)]);
var inst_36619 = cljs.core.async.close_BANG_(out);
var state_36621__$1 = (function (){var statearr_36633 = state_36621;
(statearr_36633[(9)] = inst_36618);

return statearr_36633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36621__$1,inst_36619);
} else {
if((state_val_36622 === (2))){
var state_36621__$1 = state_36621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36621__$1,(4),ch);
} else {
if((state_val_36622 === (11))){
var inst_36600 = (state_36621[(8)]);
var inst_36610 = (state_36621[(2)]);
var inst_36597 = inst_36600;
var state_36621__$1 = (function (){var statearr_36635 = state_36621;
(statearr_36635[(10)] = inst_36610);

(statearr_36635[(7)] = inst_36597);

return statearr_36635;
})();
var statearr_36636_38199 = state_36621__$1;
(statearr_36636_38199[(2)] = null);

(statearr_36636_38199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (9))){
var inst_36600 = (state_36621[(8)]);
var state_36621__$1 = state_36621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36621__$1,(11),out,inst_36600);
} else {
if((state_val_36622 === (5))){
var inst_36600 = (state_36621[(8)]);
var inst_36597 = (state_36621[(7)]);
var inst_36604 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36600,inst_36597);
var state_36621__$1 = state_36621;
if(inst_36604){
var statearr_36639_38201 = state_36621__$1;
(statearr_36639_38201[(1)] = (8));

} else {
var statearr_36640_38202 = state_36621__$1;
(statearr_36640_38202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (10))){
var inst_36613 = (state_36621[(2)]);
var state_36621__$1 = state_36621;
var statearr_36642_38203 = state_36621__$1;
(statearr_36642_38203[(2)] = inst_36613);

(statearr_36642_38203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36622 === (8))){
var inst_36597 = (state_36621[(7)]);
var tmp36638 = inst_36597;
var inst_36597__$1 = tmp36638;
var state_36621__$1 = (function (){var statearr_36643 = state_36621;
(statearr_36643[(7)] = inst_36597__$1);

return statearr_36643;
})();
var statearr_36644_38204 = state_36621__$1;
(statearr_36644_38204[(2)] = null);

(statearr_36644_38204[(1)] = (2));


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
var statearr_36646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36646[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36646[(1)] = (1));

return statearr_36646;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36621){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36621);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36648){if((e36648 instanceof Object)){
var ex__34210__auto__ = e36648;
var statearr_36649_38206 = state_36621;
(statearr_36649_38206[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38207 = state_36621;
state_36621 = G__38207;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36651 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36651[(6)] = c__34273__auto___38188);

return statearr_36651;
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
var G__36654 = arguments.length;
switch (G__36654) {
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
var c__34273__auto___38210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36695){
var state_val_36696 = (state_36695[(1)]);
if((state_val_36696 === (7))){
var inst_36691 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36698_38211 = state_36695__$1;
(statearr_36698_38211[(2)] = inst_36691);

(statearr_36698_38211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (1))){
var inst_36657 = (new Array(n));
var inst_36658 = inst_36657;
var inst_36659 = (0);
var state_36695__$1 = (function (){var statearr_36699 = state_36695;
(statearr_36699[(7)] = inst_36659);

(statearr_36699[(8)] = inst_36658);

return statearr_36699;
})();
var statearr_36700_38213 = state_36695__$1;
(statearr_36700_38213[(2)] = null);

(statearr_36700_38213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (4))){
var inst_36662 = (state_36695[(9)]);
var inst_36662__$1 = (state_36695[(2)]);
var inst_36663 = (inst_36662__$1 == null);
var inst_36664 = cljs.core.not(inst_36663);
var state_36695__$1 = (function (){var statearr_36702 = state_36695;
(statearr_36702[(9)] = inst_36662__$1);

return statearr_36702;
})();
if(inst_36664){
var statearr_36703_38214 = state_36695__$1;
(statearr_36703_38214[(1)] = (5));

} else {
var statearr_36704_38215 = state_36695__$1;
(statearr_36704_38215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (15))){
var inst_36685 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36706_38216 = state_36695__$1;
(statearr_36706_38216[(2)] = inst_36685);

(statearr_36706_38216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (13))){
var state_36695__$1 = state_36695;
var statearr_36707_38217 = state_36695__$1;
(statearr_36707_38217[(2)] = null);

(statearr_36707_38217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (6))){
var inst_36659 = (state_36695[(7)]);
var inst_36680 = (inst_36659 > (0));
var state_36695__$1 = state_36695;
if(cljs.core.truth_(inst_36680)){
var statearr_36708_38222 = state_36695__$1;
(statearr_36708_38222[(1)] = (12));

} else {
var statearr_36709_38223 = state_36695__$1;
(statearr_36709_38223[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (3))){
var inst_36693 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36695__$1,inst_36693);
} else {
if((state_val_36696 === (12))){
var inst_36658 = (state_36695[(8)]);
var inst_36683 = cljs.core.vec(inst_36658);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36695__$1,(15),out,inst_36683);
} else {
if((state_val_36696 === (2))){
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36695__$1,(4),ch);
} else {
if((state_val_36696 === (11))){
var inst_36674 = (state_36695[(2)]);
var inst_36675 = (new Array(n));
var inst_36658 = inst_36675;
var inst_36659 = (0);
var state_36695__$1 = (function (){var statearr_36712 = state_36695;
(statearr_36712[(10)] = inst_36674);

(statearr_36712[(7)] = inst_36659);

(statearr_36712[(8)] = inst_36658);

return statearr_36712;
})();
var statearr_36713_38226 = state_36695__$1;
(statearr_36713_38226[(2)] = null);

(statearr_36713_38226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (9))){
var inst_36658 = (state_36695[(8)]);
var inst_36672 = cljs.core.vec(inst_36658);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36695__$1,(11),out,inst_36672);
} else {
if((state_val_36696 === (5))){
var inst_36662 = (state_36695[(9)]);
var inst_36659 = (state_36695[(7)]);
var inst_36658 = (state_36695[(8)]);
var inst_36667 = (state_36695[(11)]);
var inst_36666 = (inst_36658[inst_36659] = inst_36662);
var inst_36667__$1 = (inst_36659 + (1));
var inst_36668 = (inst_36667__$1 < n);
var state_36695__$1 = (function (){var statearr_36715 = state_36695;
(statearr_36715[(12)] = inst_36666);

(statearr_36715[(11)] = inst_36667__$1);

return statearr_36715;
})();
if(cljs.core.truth_(inst_36668)){
var statearr_36716_38228 = state_36695__$1;
(statearr_36716_38228[(1)] = (8));

} else {
var statearr_36717_38229 = state_36695__$1;
(statearr_36717_38229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (14))){
var inst_36688 = (state_36695[(2)]);
var inst_36689 = cljs.core.async.close_BANG_(out);
var state_36695__$1 = (function (){var statearr_36720 = state_36695;
(statearr_36720[(13)] = inst_36688);

return statearr_36720;
})();
var statearr_36721_38231 = state_36695__$1;
(statearr_36721_38231[(2)] = inst_36689);

(statearr_36721_38231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (10))){
var inst_36678 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36722_38232 = state_36695__$1;
(statearr_36722_38232[(2)] = inst_36678);

(statearr_36722_38232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (8))){
var inst_36658 = (state_36695[(8)]);
var inst_36667 = (state_36695[(11)]);
var tmp36719 = inst_36658;
var inst_36658__$1 = tmp36719;
var inst_36659 = inst_36667;
var state_36695__$1 = (function (){var statearr_36724 = state_36695;
(statearr_36724[(7)] = inst_36659);

(statearr_36724[(8)] = inst_36658__$1);

return statearr_36724;
})();
var statearr_36725_38234 = state_36695__$1;
(statearr_36725_38234[(2)] = null);

(statearr_36725_38234[(1)] = (2));


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
var statearr_36727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36727[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36727[(1)] = (1));

return statearr_36727;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36695){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36695);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36732){if((e36732 instanceof Object)){
var ex__34210__auto__ = e36732;
var statearr_36733_38241 = state_36695;
(statearr_36733_38241[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38243 = state_36695;
state_36695 = G__38243;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36735 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36735[(6)] = c__34273__auto___38210);

return statearr_36735;
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
var G__36739 = arguments.length;
switch (G__36739) {
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
var c__34273__auto___38247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36790){
var state_val_36791 = (state_36790[(1)]);
if((state_val_36791 === (7))){
var inst_36786 = (state_36790[(2)]);
var state_36790__$1 = state_36790;
var statearr_36793_38248 = state_36790__$1;
(statearr_36793_38248[(2)] = inst_36786);

(statearr_36793_38248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (1))){
var inst_36748 = [];
var inst_36749 = inst_36748;
var inst_36750 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36790__$1 = (function (){var statearr_36795 = state_36790;
(statearr_36795[(7)] = inst_36749);

(statearr_36795[(8)] = inst_36750);

return statearr_36795;
})();
var statearr_36796_38249 = state_36790__$1;
(statearr_36796_38249[(2)] = null);

(statearr_36796_38249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (4))){
var inst_36753 = (state_36790[(9)]);
var inst_36753__$1 = (state_36790[(2)]);
var inst_36754 = (inst_36753__$1 == null);
var inst_36755 = cljs.core.not(inst_36754);
var state_36790__$1 = (function (){var statearr_36797 = state_36790;
(statearr_36797[(9)] = inst_36753__$1);

return statearr_36797;
})();
if(inst_36755){
var statearr_36799_38252 = state_36790__$1;
(statearr_36799_38252[(1)] = (5));

} else {
var statearr_36800_38253 = state_36790__$1;
(statearr_36800_38253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (15))){
var inst_36780 = (state_36790[(2)]);
var state_36790__$1 = state_36790;
var statearr_36801_38254 = state_36790__$1;
(statearr_36801_38254[(2)] = inst_36780);

(statearr_36801_38254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (13))){
var state_36790__$1 = state_36790;
var statearr_36803_38255 = state_36790__$1;
(statearr_36803_38255[(2)] = null);

(statearr_36803_38255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (6))){
var inst_36749 = (state_36790[(7)]);
var inst_36775 = inst_36749.length;
var inst_36776 = (inst_36775 > (0));
var state_36790__$1 = state_36790;
if(cljs.core.truth_(inst_36776)){
var statearr_36804_38256 = state_36790__$1;
(statearr_36804_38256[(1)] = (12));

} else {
var statearr_36805_38257 = state_36790__$1;
(statearr_36805_38257[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (3))){
var inst_36788 = (state_36790[(2)]);
var state_36790__$1 = state_36790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36790__$1,inst_36788);
} else {
if((state_val_36791 === (12))){
var inst_36749 = (state_36790[(7)]);
var inst_36778 = cljs.core.vec(inst_36749);
var state_36790__$1 = state_36790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36790__$1,(15),out,inst_36778);
} else {
if((state_val_36791 === (2))){
var state_36790__$1 = state_36790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36790__$1,(4),ch);
} else {
if((state_val_36791 === (11))){
var inst_36757 = (state_36790[(10)]);
var inst_36753 = (state_36790[(9)]);
var inst_36767 = (state_36790[(2)]);
var inst_36768 = [];
var inst_36770 = inst_36768.push(inst_36753);
var inst_36749 = inst_36768;
var inst_36750 = inst_36757;
var state_36790__$1 = (function (){var statearr_36808 = state_36790;
(statearr_36808[(7)] = inst_36749);

(statearr_36808[(11)] = inst_36770);

(statearr_36808[(8)] = inst_36750);

(statearr_36808[(12)] = inst_36767);

return statearr_36808;
})();
var statearr_36810_38259 = state_36790__$1;
(statearr_36810_38259[(2)] = null);

(statearr_36810_38259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (9))){
var inst_36749 = (state_36790[(7)]);
var inst_36765 = cljs.core.vec(inst_36749);
var state_36790__$1 = state_36790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36790__$1,(11),out,inst_36765);
} else {
if((state_val_36791 === (5))){
var inst_36757 = (state_36790[(10)]);
var inst_36753 = (state_36790[(9)]);
var inst_36750 = (state_36790[(8)]);
var inst_36757__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36753) : f.call(null,inst_36753));
var inst_36758 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36757__$1,inst_36750);
var inst_36759 = cljs.core.keyword_identical_QMARK_(inst_36750,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36760 = ((inst_36758) || (inst_36759));
var state_36790__$1 = (function (){var statearr_36812 = state_36790;
(statearr_36812[(10)] = inst_36757__$1);

return statearr_36812;
})();
if(cljs.core.truth_(inst_36760)){
var statearr_36813_38262 = state_36790__$1;
(statearr_36813_38262[(1)] = (8));

} else {
var statearr_36814_38263 = state_36790__$1;
(statearr_36814_38263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (14))){
var inst_36783 = (state_36790[(2)]);
var inst_36784 = cljs.core.async.close_BANG_(out);
var state_36790__$1 = (function (){var statearr_36817 = state_36790;
(statearr_36817[(13)] = inst_36783);

return statearr_36817;
})();
var statearr_36818_38264 = state_36790__$1;
(statearr_36818_38264[(2)] = inst_36784);

(statearr_36818_38264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (10))){
var inst_36773 = (state_36790[(2)]);
var state_36790__$1 = state_36790;
var statearr_36819_38265 = state_36790__$1;
(statearr_36819_38265[(2)] = inst_36773);

(statearr_36819_38265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36791 === (8))){
var inst_36757 = (state_36790[(10)]);
var inst_36753 = (state_36790[(9)]);
var inst_36749 = (state_36790[(7)]);
var inst_36762 = inst_36749.push(inst_36753);
var tmp36815 = inst_36749;
var inst_36749__$1 = tmp36815;
var inst_36750 = inst_36757;
var state_36790__$1 = (function (){var statearr_36821 = state_36790;
(statearr_36821[(7)] = inst_36749__$1);

(statearr_36821[(8)] = inst_36750);

(statearr_36821[(14)] = inst_36762);

return statearr_36821;
})();
var statearr_36822_38269 = state_36790__$1;
(statearr_36822_38269[(2)] = null);

(statearr_36822_38269[(1)] = (2));


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
var statearr_36823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36823[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36823[(1)] = (1));

return statearr_36823;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36790){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36790);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36825){if((e36825 instanceof Object)){
var ex__34210__auto__ = e36825;
var statearr_36826_38270 = state_36790;
(statearr_36826_38270[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38271 = state_36790;
state_36790 = G__38271;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36828 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36828[(6)] = c__34273__auto___38247);

return statearr_36828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
