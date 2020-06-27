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
var val_36860 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36860) : fn1.call(null,val_36860));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36860) : fn1.call(null,val_36860));
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
var n__4666__auto___36866 = n;
var x_36867 = (0);
while(true){
if((x_36867 < n__4666__auto___36866)){
(a[x_36867] = x_36867);

var G__36869 = (x_36867 + (1));
x_36867 = G__36869;
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
var G__36879 = (i + (1));
i = G__36879;
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
var len__4789__auto___36881 = arguments.length;
var i__4790__auto___36882 = (0);
while(true){
if((i__4790__auto___36882 < len__4789__auto___36881)){
args__4795__auto__.push((arguments[i__4790__auto___36882]));

var G__36884 = (i__4790__auto___36882 + (1));
i__4790__auto___36882 = G__36884;
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
var c__34274__auto___36890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34417){
var state_val_34421 = (state_34417[(1)]);
if((state_val_34421 === (7))){
var inst_34407 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34425_36891 = state_34417__$1;
(statearr_34425_36891[(2)] = inst_34407);

(statearr_34425_36891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (1))){
var state_34417__$1 = state_34417;
var statearr_34426_36893 = state_34417__$1;
(statearr_34426_36893[(2)] = null);

(statearr_34426_36893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (4))){
var inst_34390 = (state_34417[(7)]);
var inst_34390__$1 = (state_34417[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34417__$1 = (function (){var statearr_34427 = state_34417;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36895 = state_34417__$1;
(statearr_34428_36895[(1)] = (5));

} else {
var statearr_34429_36896 = state_34417__$1;
(statearr_34429_36896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (13))){
var state_34417__$1 = state_34417;
var statearr_34430_36897 = state_34417__$1;
(statearr_34430_36897[(2)] = null);

(statearr_34430_36897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (6))){
var inst_34390 = (state_34417[(7)]);
var state_34417__$1 = state_34417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34417__$1,(11),to,inst_34390);
} else {
if((state_val_34421 === (3))){
var inst_34409 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34417__$1,inst_34409);
} else {
if((state_val_34421 === (12))){
var state_34417__$1 = state_34417;
var statearr_34431_36899 = state_34417__$1;
(statearr_34431_36899[(2)] = null);

(statearr_34431_36899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (2))){
var state_34417__$1 = state_34417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34417__$1,(4),from);
} else {
if((state_val_34421 === (11))){
var inst_34400 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36901 = state_34417__$1;
(statearr_34432_36901[(1)] = (12));

} else {
var statearr_34433_36902 = state_34417__$1;
(statearr_34433_36902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (9))){
var state_34417__$1 = state_34417;
var statearr_34434_36903 = state_34417__$1;
(statearr_34434_36903[(2)] = null);

(statearr_34434_36903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (5))){
var state_34417__$1 = state_34417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36905 = state_34417__$1;
(statearr_34435_36905[(1)] = (8));

} else {
var statearr_34436_36906 = state_34417__$1;
(statearr_34436_36906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (14))){
var inst_34405 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34437_36907 = state_34417__$1;
(statearr_34437_36907[(2)] = inst_34405);

(statearr_34437_36907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (10))){
var inst_34397 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34438_36909 = state_34417__$1;
(statearr_34438_36909[(2)] = inst_34397);

(statearr_34438_36909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34417__$1 = state_34417;
var statearr_34439_36910 = state_34417__$1;
(statearr_34439_36910[(2)] = inst_34394);

(statearr_34439_36910[(1)] = (10));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34417){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34417);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_36913 = state_34417;
(statearr_34442_36913[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36914 = state_34417;
state_34417 = G__36914;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34443 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34443[(6)] = c__34274__auto___36890);

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
var c__34274__auto___36917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34456){
var state_val_34457 = (state_34456[(1)]);
if((state_val_34457 === (1))){
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34456__$1,(2),res,v);
} else {
if((state_val_34457 === (2))){
var inst_34450 = (state_34456[(2)]);
var inst_34451 = cljs.core.async.close_BANG_(res);
var state_34456__$1 = (function (){var statearr_34458 = state_34456;
(statearr_34458[(7)] = inst_34450);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34456__$1,inst_34451);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34456){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34456);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34461){if((e34461 instanceof Object)){
var ex__34210__auto__ = e34461;
var statearr_34462_36921 = state_34456;
(statearr_34462_36921[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36922 = state_34456;
state_34456 = G__36922;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34463 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34463[(6)] = c__34274__auto___36917);

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
var n__4666__auto___36925 = n;
var __36926 = (0);
while(true){
if((__36926 < n__4666__auto___36925)){
var G__34468_36927 = type;
var G__34468_36928__$1 = (((G__34468_36927 instanceof cljs.core.Keyword))?G__34468_36927.fqn:null);
switch (G__34468_36928__$1) {
case "compute":
var c__34274__auto___36931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36926,c__34274__auto___36931,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36926,c__34274__auto___36931,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
return (function (state_34483){
var state_val_34484 = (state_34483[(1)]);
if((state_val_34484 === (1))){
var state_34483__$1 = state_34483;
var statearr_34485_36933 = state_34483__$1;
(statearr_34485_36933[(2)] = null);

(statearr_34485_36933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (2))){
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34483__$1,(4),jobs);
} else {
if((state_val_34484 === (3))){
var inst_34480 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34483__$1,inst_34480);
} else {
if((state_val_34484 === (4))){
var inst_34472 = (state_34483[(2)]);
var inst_34473 = process(inst_34472);
var state_34483__$1 = state_34483;
if(cljs.core.truth_(inst_34473)){
var statearr_34487_36935 = state_34483__$1;
(statearr_34487_36935[(1)] = (5));

} else {
var statearr_34488_36936 = state_34483__$1;
(statearr_34488_36936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (5))){
var state_34483__$1 = state_34483;
var statearr_34489_36937 = state_34483__$1;
(statearr_34489_36937[(2)] = null);

(statearr_34489_36937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (6))){
var state_34483__$1 = state_34483;
var statearr_34490_36938 = state_34483__$1;
(statearr_34490_36938[(2)] = null);

(statearr_34490_36938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (7))){
var inst_34478 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34491_36939 = state_34483__$1;
(statearr_34491_36939[(2)] = inst_34478);

(statearr_34491_36939[(1)] = (3));


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
});})(__36926,c__34274__auto___36931,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
;
return ((function (__36926,switch__34206__auto__,c__34274__auto___36931,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34494 = [null,null,null,null,null,null,null];
(statearr_34494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34494[(1)] = (1));

return statearr_34494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34483){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34483);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34498){if((e34498 instanceof Object)){
var ex__34210__auto__ = e34498;
var statearr_34501_36947 = state_34483;
(statearr_34501_36947[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36948 = state_34483;
state_34483 = G__36948;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36926,switch__34206__auto__,c__34274__auto___36931,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34502 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34502[(6)] = c__34274__auto___36931);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36926,c__34274__auto___36931,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36926,c__34274__auto___36950,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36926,c__34274__auto___36950,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34517_36951 = state_34515__$1;
(statearr_34517_36951[(2)] = null);

(statearr_34517_36951[(1)] = (2));


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
var statearr_34519_36956 = state_34515__$1;
(statearr_34519_36956[(1)] = (5));

} else {
var statearr_34520_36957 = state_34515__$1;
(statearr_34520_36957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var state_34515__$1 = state_34515;
var statearr_34521_36958 = state_34515__$1;
(statearr_34521_36958[(2)] = null);

(statearr_34521_36958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34522_36960 = state_34515__$1;
(statearr_34522_36960[(2)] = null);

(statearr_34522_36960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34523_36961 = state_34515__$1;
(statearr_34523_36961[(2)] = inst_34511);

(statearr_34523_36961[(1)] = (3));


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
});})(__36926,c__34274__auto___36950,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
;
return ((function (__36926,switch__34206__auto__,c__34274__auto___36950,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
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
}catch (e34529){if((e34529 instanceof Object)){
var ex__34210__auto__ = e34529;
var statearr_34530_36966 = state_34515;
(statearr_34530_36966[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36968 = state_34515;
state_34515 = G__36968;
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
;})(__36926,switch__34206__auto__,c__34274__auto___36950,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___36950);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36926,c__34274__auto___36950,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_36928__$1)].join('')));

}

var G__36970 = (__36926 + (1));
__36926 = G__36970;
continue;
} else {
}
break;
}

var c__34274__auto___36971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_36972 = state_34556__$1;
(statearr_34558_36972[(2)] = inst_34552);

(statearr_34558_36972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34561_36973 = state_34556__$1;
(statearr_34561_36973[(2)] = null);

(statearr_34561_36973[(1)] = (2));


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
var statearr_34564_36974 = state_34556__$1;
(statearr_34564_36974[(1)] = (5));

} else {
var statearr_34565_36975 = state_34556__$1;
(statearr_34565_36975[(1)] = (6));

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
var statearr_34568_36976 = state_34556__$1;
(statearr_34568_36976[(2)] = null);

(statearr_34568_36976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36977 = state_34556__$1;
(statearr_34569_36977[(2)] = inst_34540);

(statearr_34569_36977[(1)] = (7));


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
var statearr_34573_36984 = state_34556;
(statearr_34573_36984[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36985 = state_34556;
state_34556 = G__36985;
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
(statearr_34574[(6)] = c__34274__auto___36971);

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
var statearr_34614_36990 = state_34612__$1;
(statearr_34614_36990[(2)] = inst_34608);

(statearr_34614_36990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36991 = state_34612__$1;
(statearr_34615_36991[(2)] = null);

(statearr_34615_36991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36997 = state_34612__$1;
(statearr_34616_36997[(2)] = null);

(statearr_34616_36997[(1)] = (2));


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
var statearr_34618_37000 = state_34612__$1;
(statearr_34618_37000[(1)] = (5));

} else {
var statearr_34619_37001 = state_34612__$1;
(statearr_34619_37001[(1)] = (6));

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
var statearr_34620_37005 = state_34612__$1;
(statearr_34620_37005[(2)] = inst_34603);

(statearr_34620_37005[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_37011 = state_34612__$1;
(statearr_34622_37011[(2)] = null);

(statearr_34622_37011[(1)] = (2));


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
var statearr_34623_37019 = state_34612__$1;
(statearr_34623_37019[(1)] = (19));

} else {
var statearr_34624_37020 = state_34612__$1;
(statearr_34624_37020[(1)] = (20));

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
var statearr_34625_37025 = state_34612__$1;
(statearr_34625_37025[(2)] = null);

(statearr_34625_37025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_37031 = state_34612__$1;
(statearr_34627_37031[(2)] = null);

(statearr_34627_37031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37032 = state_34612__$1;
(statearr_34628_37032[(2)] = null);

(statearr_34628_37032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37036 = state_34612__$1;
(statearr_34629_37036[(1)] = (8));

} else {
var statearr_34630_37038 = state_34612__$1;
(statearr_34630_37038[(1)] = (9));

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
var statearr_34632_37041 = state_34612__$1;
(statearr_34632_37041[(1)] = (15));

} else {
var statearr_34633_37044 = state_34612__$1;
(statearr_34633_37044[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37048 = state_34612__$1;
(statearr_34634_37048[(2)] = false);

(statearr_34634_37048[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37054 = state_34612__$1;
(statearr_34635_37054[(2)] = inst_34584);

(statearr_34635_37054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37056 = state_34612__$1;
(statearr_34636_37056[(2)] = inst_34595);

(statearr_34636_37056[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37057 = state_34612__$1;
(statearr_34637_37057[(2)] = inst_34581);

(statearr_34637_37057[(1)] = (10));


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
var statearr_34640_37063 = state_34612;
(statearr_34640_37063[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37064 = state_34612;
state_34612 = G__37064;
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
var G__34650 = arguments.length;
switch (G__34650) {
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
var c__34274__auto___37094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34681){
var state_val_34682 = (state_34681[(1)]);
if((state_val_34682 === (7))){
var inst_34677 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
var statearr_34684_37095 = state_34681__$1;
(statearr_34684_37095[(2)] = inst_34677);

(statearr_34684_37095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (1))){
var state_34681__$1 = state_34681;
var statearr_34685_37101 = state_34681__$1;
(statearr_34685_37101[(2)] = null);

(statearr_34685_37101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (4))){
var inst_34656 = (state_34681[(7)]);
var inst_34656__$1 = (state_34681[(2)]);
var inst_34657 = (inst_34656__$1 == null);
var state_34681__$1 = (function (){var statearr_34686 = state_34681;
(statearr_34686[(7)] = inst_34656__$1);

return statearr_34686;
})();
if(cljs.core.truth_(inst_34657)){
var statearr_34687_37104 = state_34681__$1;
(statearr_34687_37104[(1)] = (5));

} else {
var statearr_34688_37106 = state_34681__$1;
(statearr_34688_37106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (13))){
var state_34681__$1 = state_34681;
var statearr_34691_37107 = state_34681__$1;
(statearr_34691_37107[(2)] = null);

(statearr_34691_37107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (6))){
var inst_34656 = (state_34681[(7)]);
var inst_34662 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34656) : p.call(null,inst_34656));
var state_34681__$1 = state_34681;
if(cljs.core.truth_(inst_34662)){
var statearr_34692_37110 = state_34681__$1;
(statearr_34692_37110[(1)] = (9));

} else {
var statearr_34693_37112 = state_34681__$1;
(statearr_34693_37112[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (3))){
var inst_34679 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34681__$1,inst_34679);
} else {
if((state_val_34682 === (12))){
var state_34681__$1 = state_34681;
var statearr_34694_37113 = state_34681__$1;
(statearr_34694_37113[(2)] = null);

(statearr_34694_37113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (2))){
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34681__$1,(4),ch);
} else {
if((state_val_34682 === (11))){
var inst_34656 = (state_34681[(7)]);
var inst_34666 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34681__$1,(8),inst_34666,inst_34656);
} else {
if((state_val_34682 === (9))){
var state_34681__$1 = state_34681;
var statearr_34695_37121 = state_34681__$1;
(statearr_34695_37121[(2)] = tc);

(statearr_34695_37121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (5))){
var inst_34659 = cljs.core.async.close_BANG_(tc);
var inst_34660 = cljs.core.async.close_BANG_(fc);
var state_34681__$1 = (function (){var statearr_34696 = state_34681;
(statearr_34696[(8)] = inst_34659);

return statearr_34696;
})();
var statearr_34698_37124 = state_34681__$1;
(statearr_34698_37124[(2)] = inst_34660);

(statearr_34698_37124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (14))){
var inst_34675 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
var statearr_34699_37125 = state_34681__$1;
(statearr_34699_37125[(2)] = inst_34675);

(statearr_34699_37125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (10))){
var state_34681__$1 = state_34681;
var statearr_34700_37126 = state_34681__$1;
(statearr_34700_37126[(2)] = fc);

(statearr_34700_37126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (8))){
var inst_34668 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
if(cljs.core.truth_(inst_34668)){
var statearr_34702_37129 = state_34681__$1;
(statearr_34702_37129[(1)] = (12));

} else {
var statearr_34703_37130 = state_34681__$1;
(statearr_34703_37130[(1)] = (13));

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
var statearr_34704 = [null,null,null,null,null,null,null,null,null];
(statearr_34704[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34704[(1)] = (1));

return statearr_34704;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34681){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34681);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34705){if((e34705 instanceof Object)){
var ex__34210__auto__ = e34705;
var statearr_34707_37134 = state_34681;
(statearr_34707_37134[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37139 = state_34681;
state_34681 = G__37139;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34710 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34710[(6)] = c__34274__auto___37094);

return statearr_34710;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34734){
var state_val_34735 = (state_34734[(1)]);
if((state_val_34735 === (7))){
var inst_34730 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34736_37144 = state_34734__$1;
(statearr_34736_37144[(2)] = inst_34730);

(statearr_34736_37144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (1))){
var inst_34713 = init;
var state_34734__$1 = (function (){var statearr_34737 = state_34734;
(statearr_34737[(7)] = inst_34713);

return statearr_34737;
})();
var statearr_34738_37145 = state_34734__$1;
(statearr_34738_37145[(2)] = null);

(statearr_34738_37145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (4))){
var inst_34716 = (state_34734[(8)]);
var inst_34716__$1 = (state_34734[(2)]);
var inst_34717 = (inst_34716__$1 == null);
var state_34734__$1 = (function (){var statearr_34739 = state_34734;
(statearr_34739[(8)] = inst_34716__$1);

return statearr_34739;
})();
if(cljs.core.truth_(inst_34717)){
var statearr_34740_37152 = state_34734__$1;
(statearr_34740_37152[(1)] = (5));

} else {
var statearr_34741_37153 = state_34734__$1;
(statearr_34741_37153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (6))){
var inst_34713 = (state_34734[(7)]);
var inst_34716 = (state_34734[(8)]);
var inst_34720 = (state_34734[(9)]);
var inst_34720__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34713,inst_34716) : f.call(null,inst_34713,inst_34716));
var inst_34721 = cljs.core.reduced_QMARK_(inst_34720__$1);
var state_34734__$1 = (function (){var statearr_34745 = state_34734;
(statearr_34745[(9)] = inst_34720__$1);

return statearr_34745;
})();
if(inst_34721){
var statearr_34746_37158 = state_34734__$1;
(statearr_34746_37158[(1)] = (8));

} else {
var statearr_34747_37159 = state_34734__$1;
(statearr_34747_37159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (3))){
var inst_34732 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34734__$1,inst_34732);
} else {
if((state_val_34735 === (2))){
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34734__$1,(4),ch);
} else {
if((state_val_34735 === (9))){
var inst_34720 = (state_34734[(9)]);
var inst_34713 = inst_34720;
var state_34734__$1 = (function (){var statearr_34748 = state_34734;
(statearr_34748[(7)] = inst_34713);

return statearr_34748;
})();
var statearr_34752_37164 = state_34734__$1;
(statearr_34752_37164[(2)] = null);

(statearr_34752_37164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (5))){
var inst_34713 = (state_34734[(7)]);
var state_34734__$1 = state_34734;
var statearr_34753_37169 = state_34734__$1;
(statearr_34753_37169[(2)] = inst_34713);

(statearr_34753_37169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (10))){
var inst_34728 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34754_37172 = state_34734__$1;
(statearr_34754_37172[(2)] = inst_34728);

(statearr_34754_37172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (8))){
var inst_34720 = (state_34734[(9)]);
var inst_34724 = cljs.core.deref(inst_34720);
var state_34734__$1 = state_34734;
var statearr_34755_37176 = state_34734__$1;
(statearr_34755_37176[(2)] = inst_34724);

(statearr_34755_37176[(1)] = (10));


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
var statearr_34756 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34756[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34756[(1)] = (1));

return statearr_34756;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34734){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34734);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34757){if((e34757 instanceof Object)){
var ex__34210__auto__ = e34757;
var statearr_34758_37183 = state_34734;
(statearr_34758_37183[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37186 = state_34734;
state_34734 = G__37186;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34734){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34734);
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
var statearr_34772_37204 = state_34768;
(statearr_34772_37204[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37207 = state_34768;
state_34768 = G__37207;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (7))){
var inst_34782 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34805_37212 = state_34800__$1;
(statearr_34805_37212[(2)] = inst_34782);

(statearr_34805_37212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34806 = state_34800;
(statearr_34806[(7)] = inst_34777);

return statearr_34806;
})();
var statearr_34810_37217 = state_34800__$1;
(statearr_34810_37217[(2)] = null);

(statearr_34810_37217[(1)] = (2));


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
var statearr_34812_37219 = state_34800__$1;
(statearr_34812_37219[(2)] = inst_34794);

(statearr_34812_37219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34813_37220 = state_34800__$1;
(statearr_34813_37220[(1)] = (8));

} else {
var statearr_34814_37224 = state_34800__$1;
(statearr_34814_37224[(1)] = (9));

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
var statearr_34815_37226 = state_34800__$1;
(statearr_34815_37226[(2)] = null);

(statearr_34815_37226[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34816_37228 = state_34800__$1;
(statearr_34816_37228[(1)] = (4));

} else {
var statearr_34817_37229 = state_34800__$1;
(statearr_34817_37229[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34818_37233 = state_34800__$1;
(statearr_34818_37233[(2)] = inst_34791);

(statearr_34818_37233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34819_37235 = state_34800__$1;
(statearr_34819_37235[(1)] = (11));

} else {
var statearr_34821_37236 = state_34800__$1;
(statearr_34821_37236[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34822_37237 = state_34800__$1;
(statearr_34822_37237[(2)] = inst_34777);

(statearr_34822_37237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34823_37238 = state_34800__$1;
(statearr_34823_37238[(2)] = inst_34796);

(statearr_34823_37238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34777 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34826 = state_34800;
(statearr_34826[(7)] = inst_34777__$1);

return statearr_34826;
})();
var statearr_34827_37239 = state_34800__$1;
(statearr_34827_37239[(2)] = null);

(statearr_34827_37239[(1)] = (2));


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
}catch (e34832){if((e34832 instanceof Object)){
var ex__34210__auto__ = e34832;
var statearr_34833_37240 = state_34800;
(statearr_34833_37240[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37241 = state_34800;
state_34800 = G__37241;
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
var state__34276__auto__ = (function (){var statearr_34834 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34834[(6)] = c__34274__auto__);

return statearr_34834;
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
var c__34274__auto___37283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34984){
var state_val_34989 = (state_34984[(1)]);
if((state_val_34989 === (7))){
var inst_34980 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_34992_37285 = state_34984__$1;
(statearr_34992_37285[(2)] = inst_34980);

(statearr_34992_37285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (20))){
var inst_34877 = (state_34984[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34984__$1 = (function (){var statearr_34993 = state_34984;
(statearr_34993[(8)] = inst_34890);

return statearr_34993;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34994_37286 = state_34984__$1;
(statearr_34994_37286[(1)] = (22));

} else {
var statearr_34995_37287 = state_34984__$1;
(statearr_34995_37287[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (27))){
var inst_34846 = (state_34984[(9)]);
var inst_34926 = (state_34984[(10)]);
var inst_34919 = (state_34984[(11)]);
var inst_34921 = (state_34984[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_34996 = state_34984;
(statearr_34996[(10)] = inst_34926__$1);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34997_37291 = state_34984__$1;
(statearr_34997_37291[(1)] = (30));

} else {
var statearr_35000_37293 = state_34984__$1;
(statearr_35000_37293[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (1))){
var state_34984__$1 = state_34984;
var statearr_35001_37294 = state_34984__$1;
(statearr_35001_37294[(2)] = null);

(statearr_35001_37294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (24))){
var inst_34877 = (state_34984[(7)]);
var inst_34896 = (state_34984[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35005 = state_34984;
(statearr_35005[(13)] = inst_34857);

(statearr_35005[(14)] = inst_34856);

(statearr_35005[(15)] = inst_34858);

(statearr_35005[(16)] = inst_34896);

(statearr_35005[(17)] = inst_34855);

return statearr_35005;
})();
var statearr_35007_37302 = state_34984__$1;
(statearr_35007_37302[(2)] = null);

(statearr_35007_37302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (39))){
var state_34984__$1 = state_34984;
var statearr_35011_37305 = state_34984__$1;
(statearr_35011_37305[(2)] = null);

(statearr_35011_37305[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (4))){
var inst_34846 = (state_34984[(9)]);
var inst_34846__$1 = (state_34984[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34984__$1 = (function (){var statearr_35012 = state_34984;
(statearr_35012[(9)] = inst_34846__$1);

return statearr_35012;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35013_37309 = state_34984__$1;
(statearr_35013_37309[(1)] = (5));

} else {
var statearr_35014_37312 = state_34984__$1;
(statearr_35014_37312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (15))){
var inst_34857 = (state_34984[(13)]);
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34855 = (state_34984[(17)]);
var inst_34873 = (state_34984[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35008 = inst_34857;
var tmp35009 = inst_34856;
var tmp35010 = inst_34855;
var inst_34855__$1 = tmp35010;
var inst_34856__$1 = tmp35009;
var inst_34857__$1 = tmp35008;
var inst_34858__$1 = inst_34874;
var state_34984__$1 = (function (){var statearr_35020 = state_34984;
(statearr_35020[(18)] = inst_34873);

(statearr_35020[(13)] = inst_34857__$1);

(statearr_35020[(14)] = inst_34856__$1);

(statearr_35020[(15)] = inst_34858__$1);

(statearr_35020[(17)] = inst_34855__$1);

return statearr_35020;
})();
var statearr_35022_37321 = state_34984__$1;
(statearr_35022_37321[(2)] = null);

(statearr_35022_37321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (21))){
var inst_34900 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35026_37324 = state_34984__$1;
(statearr_35026_37324[(2)] = inst_34900);

(statearr_35026_37324[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (31))){
var inst_34926 = (state_34984[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34984__$1 = (function (){var statearr_35028 = state_34984;
(statearr_35028[(19)] = inst_34930);

return statearr_35028;
})();
var statearr_35029_37332 = state_34984__$1;
(statearr_35029_37332[(2)] = inst_34931);

(statearr_35029_37332[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (32))){
var inst_34918 = (state_34984[(20)]);
var inst_34919 = (state_34984[(11)]);
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34933 = (state_34984[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35023 = inst_34918;
var tmp35024 = inst_34919;
var tmp35025 = inst_34920;
var inst_34918__$1 = tmp35023;
var inst_34919__$1 = tmp35024;
var inst_34920__$1 = tmp35025;
var inst_34921__$1 = inst_34934;
var state_34984__$1 = (function (){var statearr_35048 = state_34984;
(statearr_35048[(20)] = inst_34918__$1);

(statearr_35048[(22)] = inst_34933);

(statearr_35048[(11)] = inst_34919__$1);

(statearr_35048[(21)] = inst_34920__$1);

(statearr_35048[(12)] = inst_34921__$1);

return statearr_35048;
})();
var statearr_35049_37338 = state_34984__$1;
(statearr_35049_37338[(2)] = null);

(statearr_35049_37338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (40))){
var inst_34949 = (state_34984[(23)]);
var inst_34954 = done(null);
var inst_34955 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34949);
var state_34984__$1 = (function (){var statearr_35054 = state_34984;
(statearr_35054[(24)] = inst_34954);

return statearr_35054;
})();
var statearr_35055_37345 = state_34984__$1;
(statearr_35055_37345[(2)] = inst_34955);

(statearr_35055_37345[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (33))){
var inst_34939 = (state_34984[(25)]);
var inst_34941 = cljs.core.chunked_seq_QMARK_(inst_34939);
var state_34984__$1 = state_34984;
if(inst_34941){
var statearr_35057_37352 = state_34984__$1;
(statearr_35057_37352[(1)] = (36));

} else {
var statearr_35058_37353 = state_34984__$1;
(statearr_35058_37353[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (13))){
var inst_34867 = (state_34984[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34984__$1 = state_34984;
var statearr_35066_37356 = state_34984__$1;
(statearr_35066_37356[(2)] = inst_34870);

(statearr_35066_37356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (22))){
var inst_34890 = (state_34984[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34984__$1 = state_34984;
var statearr_35071_37359 = state_34984__$1;
(statearr_35071_37359[(2)] = inst_34893);

(statearr_35071_37359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (36))){
var inst_34939 = (state_34984[(25)]);
var inst_34943 = cljs.core.chunk_first(inst_34939);
var inst_34944 = cljs.core.chunk_rest(inst_34939);
var inst_34945 = cljs.core.count(inst_34943);
var inst_34918 = inst_34944;
var inst_34919 = inst_34943;
var inst_34920 = inst_34945;
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35079 = state_34984;
(statearr_35079[(20)] = inst_34918);

(statearr_35079[(11)] = inst_34919);

(statearr_35079[(21)] = inst_34920);

(statearr_35079[(12)] = inst_34921);

return statearr_35079;
})();
var statearr_35083_37362 = state_34984__$1;
(statearr_35083_37362[(2)] = null);

(statearr_35083_37362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (41))){
var inst_34939 = (state_34984[(25)]);
var inst_34957 = (state_34984[(2)]);
var inst_34958 = cljs.core.next(inst_34939);
var inst_34918 = inst_34958;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35090 = state_34984;
(statearr_35090[(20)] = inst_34918);

(statearr_35090[(27)] = inst_34957);

(statearr_35090[(11)] = inst_34919);

(statearr_35090[(21)] = inst_34920);

(statearr_35090[(12)] = inst_34921);

return statearr_35090;
})();
var statearr_35095_37369 = state_34984__$1;
(statearr_35095_37369[(2)] = null);

(statearr_35095_37369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (43))){
var state_34984__$1 = state_34984;
var statearr_35100_37371 = state_34984__$1;
(statearr_35100_37371[(2)] = null);

(statearr_35100_37371[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (29))){
var inst_34967 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35106_37378 = state_34984__$1;
(statearr_35106_37378[(2)] = inst_34967);

(statearr_35106_37378[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (44))){
var inst_34977 = (state_34984[(2)]);
var state_34984__$1 = (function (){var statearr_35112 = state_34984;
(statearr_35112[(28)] = inst_34977);

return statearr_35112;
})();
var statearr_35113_37380 = state_34984__$1;
(statearr_35113_37380[(2)] = null);

(statearr_35113_37380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (6))){
var inst_34910 = (state_34984[(29)]);
var inst_34909 = cljs.core.deref(cs);
var inst_34910__$1 = cljs.core.keys(inst_34909);
var inst_34911 = cljs.core.count(inst_34910__$1);
var inst_34912 = cljs.core.reset_BANG_(dctr,inst_34911);
var inst_34917 = cljs.core.seq(inst_34910__$1);
var inst_34918 = inst_34917;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35124 = state_34984;
(statearr_35124[(20)] = inst_34918);

(statearr_35124[(29)] = inst_34910__$1);

(statearr_35124[(11)] = inst_34919);

(statearr_35124[(21)] = inst_34920);

(statearr_35124[(12)] = inst_34921);

(statearr_35124[(30)] = inst_34912);

return statearr_35124;
})();
var statearr_35128_37386 = state_34984__$1;
(statearr_35128_37386[(2)] = null);

(statearr_35128_37386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (28))){
var inst_34918 = (state_34984[(20)]);
var inst_34939 = (state_34984[(25)]);
var inst_34939__$1 = cljs.core.seq(inst_34918);
var state_34984__$1 = (function (){var statearr_35134 = state_34984;
(statearr_35134[(25)] = inst_34939__$1);

return statearr_35134;
})();
if(inst_34939__$1){
var statearr_35138_37389 = state_34984__$1;
(statearr_35138_37389[(1)] = (33));

} else {
var statearr_35141_37390 = state_34984__$1;
(statearr_35141_37390[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (25))){
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34924)){
var statearr_35148_37397 = state_34984__$1;
(statearr_35148_37397[(1)] = (27));

} else {
var statearr_35151_37399 = state_34984__$1;
(statearr_35151_37399[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (34))){
var state_34984__$1 = state_34984;
var statearr_35153_37400 = state_34984__$1;
(statearr_35153_37400[(2)] = null);

(statearr_35153_37400[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (17))){
var state_34984__$1 = state_34984;
var statearr_35154_37401 = state_34984__$1;
(statearr_35154_37401[(2)] = null);

(statearr_35154_37401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (3))){
var inst_34982 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34984__$1,inst_34982);
} else {
if((state_val_34989 === (12))){
var inst_34905 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35157_37404 = state_34984__$1;
(statearr_35157_37404[(2)] = inst_34905);

(statearr_35157_37404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (2))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(4),ch);
} else {
if((state_val_34989 === (23))){
var state_34984__$1 = state_34984;
var statearr_35160_37409 = state_34984__$1;
(statearr_35160_37409[(2)] = null);

(statearr_35160_37409[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (35))){
var inst_34965 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35181_37413 = state_34984__$1;
(statearr_35181_37413[(2)] = inst_34965);

(statearr_35181_37413[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (19))){
var inst_34877 = (state_34984[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35185 = state_34984;
(statearr_35185[(13)] = inst_34857);

(statearr_35185[(14)] = inst_34856);

(statearr_35185[(15)] = inst_34858);

(statearr_35185[(17)] = inst_34855);

return statearr_35185;
})();
var statearr_35188_37415 = state_34984__$1;
(statearr_35188_37415[(2)] = null);

(statearr_35188_37415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (11))){
var inst_34855 = (state_34984[(17)]);
var inst_34877 = (state_34984[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34984__$1 = (function (){var statearr_35191 = state_34984;
(statearr_35191[(7)] = inst_34877__$1);

return statearr_35191;
})();
if(inst_34877__$1){
var statearr_35192_37420 = state_34984__$1;
(statearr_35192_37420[(1)] = (16));

} else {
var statearr_35193_37421 = state_34984__$1;
(statearr_35193_37421[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (9))){
var inst_34907 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35195_37422 = state_34984__$1;
(statearr_35195_37422[(2)] = inst_34907);

(statearr_35195_37422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35201 = state_34984;
(statearr_35201[(13)] = inst_34857);

(statearr_35201[(14)] = inst_34856);

(statearr_35201[(15)] = inst_34858);

(statearr_35201[(17)] = inst_34855);

return statearr_35201;
})();
var statearr_35205_37426 = state_34984__$1;
(statearr_35205_37426[(2)] = null);

(statearr_35205_37426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (14))){
var state_34984__$1 = state_34984;
var statearr_35211_37429 = state_34984__$1;
(statearr_35211_37429[(2)] = null);

(statearr_35211_37429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (45))){
var inst_34974 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35218_37432 = state_34984__$1;
(statearr_35218_37432[(2)] = inst_34974);

(statearr_35218_37432[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (26))){
var inst_34910 = (state_34984[(29)]);
var inst_34969 = (state_34984[(2)]);
var inst_34971 = cljs.core.seq(inst_34910);
var state_34984__$1 = (function (){var statearr_35226 = state_34984;
(statearr_35226[(31)] = inst_34969);

return statearr_35226;
})();
if(inst_34971){
var statearr_35228_37436 = state_34984__$1;
(statearr_35228_37436[(1)] = (42));

} else {
var statearr_35229_37437 = state_34984__$1;
(statearr_35229_37437[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (16))){
var inst_34877 = (state_34984[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34984__$1 = state_34984;
if(inst_34879){
var statearr_35237_37443 = state_34984__$1;
(statearr_35237_37443[(1)] = (19));

} else {
var statearr_35238_37444 = state_34984__$1;
(statearr_35238_37444[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (38))){
var inst_34962 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35244_37451 = state_34984__$1;
(statearr_35244_37451[(2)] = inst_34962);

(statearr_35244_37451[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (30))){
var state_34984__$1 = state_34984;
var statearr_35249_37454 = state_34984__$1;
(statearr_35249_37454[(2)] = null);

(statearr_35249_37454[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (10))){
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34984__$1 = (function (){var statearr_35256 = state_34984;
(statearr_35256[(26)] = inst_34867);

return statearr_35256;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35259_37461 = state_34984__$1;
(statearr_35259_37461[(1)] = (13));

} else {
var statearr_35260_37462 = state_34984__$1;
(statearr_35260_37462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (18))){
var inst_34903 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35266_37469 = state_34984__$1;
(statearr_35266_37469[(2)] = inst_34903);

(statearr_35266_37469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (42))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(45),dchan);
} else {
if((state_val_34989 === (37))){
var inst_34846 = (state_34984[(9)]);
var inst_34949 = (state_34984[(23)]);
var inst_34939 = (state_34984[(25)]);
var inst_34949__$1 = cljs.core.first(inst_34939);
var inst_34951 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34949__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_35276 = state_34984;
(statearr_35276[(23)] = inst_34949__$1);

return statearr_35276;
})();
if(cljs.core.truth_(inst_34951)){
var statearr_35281_37473 = state_34984__$1;
(statearr_35281_37473[(1)] = (39));

} else {
var statearr_35282_37476 = state_34984__$1;
(statearr_35282_37476[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (8))){
var inst_34857 = (state_34984[(13)]);
var inst_34858 = (state_34984[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34861)){
var statearr_35288_37485 = state_34984__$1;
(statearr_35288_37485[(1)] = (10));

} else {
var statearr_35290_37487 = state_34984__$1;
(statearr_35290_37487[(1)] = (11));

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
var statearr_35302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35302[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35302[(1)] = (1));

return statearr_35302;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34984){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34984);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35307){if((e35307 instanceof Object)){
var ex__34210__auto__ = e35307;
var statearr_35309_37496 = state_34984;
(statearr_35309_37496[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35307;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37499 = state_34984;
state_34984 = G__37499;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34984){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35316 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35316[(6)] = c__34274__auto___37283);

return statearr_35316;
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
var G__35332 = arguments.length;
switch (G__35332) {
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
var len__4789__auto___37551 = arguments.length;
var i__4790__auto___37552 = (0);
while(true){
if((i__4790__auto___37552 < len__4789__auto___37551)){
args__4795__auto__.push((arguments[i__4790__auto___37552]));

var G__37556 = (i__4790__auto___37552 + (1));
i__4790__auto___37552 = G__37556;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35403){
var map__35405 = p__35403;
var map__35405__$1 = (((((!((map__35405 == null))))?(((((map__35405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35405):map__35405);
var opts = map__35405__$1;
var statearr_35409_37561 = state;
(statearr_35409_37561[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35413_37569 = state;
(statearr_35413_37569[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35418_37572 = state;
(statearr_35418_37572[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35389){
var G__35391 = cljs.core.first(seq35389);
var seq35389__$1 = cljs.core.next(seq35389);
var G__35392 = cljs.core.first(seq35389__$1);
var seq35389__$2 = cljs.core.next(seq35389__$1);
var G__35393 = cljs.core.first(seq35389__$2);
var seq35389__$3 = cljs.core.next(seq35389__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35391,G__35392,G__35393,seq35389__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35455 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35456){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35456 = meta35456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35457,meta35456__$1){
var self__ = this;
var _35457__$1 = this;
return (new cljs.core.async.t_cljs$core$async35455(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35456__$1));
}));

(cljs.core.async.t_cljs$core$async35455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35457){
var self__ = this;
var _35457__$1 = this;
return self__.meta35456;
}));

(cljs.core.async.t_cljs$core$async35455.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35455.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35455.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35455.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35455.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35455.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35455.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35456","meta35456",-886744466,null)], null);
}));

(cljs.core.async.t_cljs$core$async35455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35455");

(cljs.core.async.t_cljs$core$async35455.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35455.
 */
cljs.core.async.__GT_t_cljs$core$async35455 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35455(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35456){
return (new cljs.core.async.t_cljs$core$async35455(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35456));
});

}

return (new cljs.core.async.t_cljs$core$async35455(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35673){
var state_val_35674 = (state_35673[(1)]);
if((state_val_35674 === (7))){
var inst_35556 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35677_37642 = state_35673__$1;
(statearr_35677_37642[(2)] = inst_35556);

(statearr_35677_37642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (20))){
var inst_35571 = (state_35673[(7)]);
var state_35673__$1 = state_35673;
var statearr_35678_37648 = state_35673__$1;
(statearr_35678_37648[(2)] = inst_35571);

(statearr_35678_37648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (27))){
var state_35673__$1 = state_35673;
var statearr_35679_37652 = state_35673__$1;
(statearr_35679_37652[(2)] = null);

(statearr_35679_37652[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (1))){
var inst_35530 = (state_35673[(8)]);
var inst_35530__$1 = calc_state();
var inst_35535 = (inst_35530__$1 == null);
var inst_35536 = cljs.core.not(inst_35535);
var state_35673__$1 = (function (){var statearr_35682 = state_35673;
(statearr_35682[(8)] = inst_35530__$1);

return statearr_35682;
})();
if(inst_35536){
var statearr_35683_37654 = state_35673__$1;
(statearr_35683_37654[(1)] = (2));

} else {
var statearr_35684_37657 = state_35673__$1;
(statearr_35684_37657[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (24))){
var inst_35647 = (state_35673[(9)]);
var inst_35606 = (state_35673[(10)]);
var inst_35619 = (state_35673[(11)]);
var inst_35647__$1 = (inst_35606.cljs$core$IFn$_invoke$arity$1 ? inst_35606.cljs$core$IFn$_invoke$arity$1(inst_35619) : inst_35606.call(null,inst_35619));
var state_35673__$1 = (function (){var statearr_35685 = state_35673;
(statearr_35685[(9)] = inst_35647__$1);

return statearr_35685;
})();
if(cljs.core.truth_(inst_35647__$1)){
var statearr_35686_37663 = state_35673__$1;
(statearr_35686_37663[(1)] = (29));

} else {
var statearr_35687_37665 = state_35673__$1;
(statearr_35687_37665[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (4))){
var inst_35559 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35559)){
var statearr_35692_37668 = state_35673__$1;
(statearr_35692_37668[(1)] = (8));

} else {
var statearr_35693_37669 = state_35673__$1;
(statearr_35693_37669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (15))){
var inst_35600 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35600)){
var statearr_35696_37671 = state_35673__$1;
(statearr_35696_37671[(1)] = (19));

} else {
var statearr_35697_37672 = state_35673__$1;
(statearr_35697_37672[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (21))){
var inst_35605 = (state_35673[(12)]);
var inst_35605__$1 = (state_35673[(2)]);
var inst_35606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35605__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35605__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35605__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35673__$1 = (function (){var statearr_35700 = state_35673;
(statearr_35700[(12)] = inst_35605__$1);

(statearr_35700[(13)] = inst_35608);

(statearr_35700[(10)] = inst_35606);

return statearr_35700;
})();
return cljs.core.async.ioc_alts_BANG_(state_35673__$1,(22),inst_35609);
} else {
if((state_val_35674 === (31))){
var inst_35655 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35655)){
var statearr_35701_37675 = state_35673__$1;
(statearr_35701_37675[(1)] = (32));

} else {
var statearr_35702_37676 = state_35673__$1;
(statearr_35702_37676[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (32))){
var inst_35618 = (state_35673[(14)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35673__$1,(35),out,inst_35618);
} else {
if((state_val_35674 === (33))){
var inst_35605 = (state_35673[(12)]);
var inst_35571 = inst_35605;
var state_35673__$1 = (function (){var statearr_35706 = state_35673;
(statearr_35706[(7)] = inst_35571);

return statearr_35706;
})();
var statearr_35708_37679 = state_35673__$1;
(statearr_35708_37679[(2)] = null);

(statearr_35708_37679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (13))){
var inst_35571 = (state_35673[(7)]);
var inst_35585 = inst_35571.cljs$lang$protocol_mask$partition0$;
var inst_35587 = (inst_35585 & (64));
var inst_35588 = inst_35571.cljs$core$ISeq$;
var inst_35589 = (cljs.core.PROTOCOL_SENTINEL === inst_35588);
var inst_35590 = ((inst_35587) || (inst_35589));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35590)){
var statearr_35711_37684 = state_35673__$1;
(statearr_35711_37684[(1)] = (16));

} else {
var statearr_35712_37685 = state_35673__$1;
(statearr_35712_37685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (22))){
var inst_35618 = (state_35673[(14)]);
var inst_35619 = (state_35673[(11)]);
var inst_35615 = (state_35673[(2)]);
var inst_35618__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35615,(0),null);
var inst_35619__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35615,(1),null);
var inst_35622 = (inst_35618__$1 == null);
var inst_35623 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35619__$1,change);
var inst_35624 = ((inst_35622) || (inst_35623));
var state_35673__$1 = (function (){var statearr_35716 = state_35673;
(statearr_35716[(14)] = inst_35618__$1);

(statearr_35716[(11)] = inst_35619__$1);

return statearr_35716;
})();
if(cljs.core.truth_(inst_35624)){
var statearr_35717_37689 = state_35673__$1;
(statearr_35717_37689[(1)] = (23));

} else {
var statearr_35718_37690 = state_35673__$1;
(statearr_35718_37690[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (36))){
var inst_35605 = (state_35673[(12)]);
var inst_35571 = inst_35605;
var state_35673__$1 = (function (){var statearr_35720 = state_35673;
(statearr_35720[(7)] = inst_35571);

return statearr_35720;
})();
var statearr_35721_37692 = state_35673__$1;
(statearr_35721_37692[(2)] = null);

(statearr_35721_37692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (29))){
var inst_35647 = (state_35673[(9)]);
var state_35673__$1 = state_35673;
var statearr_35722_37694 = state_35673__$1;
(statearr_35722_37694[(2)] = inst_35647);

(statearr_35722_37694[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (6))){
var state_35673__$1 = state_35673;
var statearr_35724_37695 = state_35673__$1;
(statearr_35724_37695[(2)] = false);

(statearr_35724_37695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (28))){
var inst_35643 = (state_35673[(2)]);
var inst_35644 = calc_state();
var inst_35571 = inst_35644;
var state_35673__$1 = (function (){var statearr_35725 = state_35673;
(statearr_35725[(7)] = inst_35571);

(statearr_35725[(15)] = inst_35643);

return statearr_35725;
})();
var statearr_35728_37696 = state_35673__$1;
(statearr_35728_37696[(2)] = null);

(statearr_35728_37696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (25))){
var inst_35669 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35730_37701 = state_35673__$1;
(statearr_35730_37701[(2)] = inst_35669);

(statearr_35730_37701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (34))){
var inst_35667 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35731_37706 = state_35673__$1;
(statearr_35731_37706[(2)] = inst_35667);

(statearr_35731_37706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (17))){
var state_35673__$1 = state_35673;
var statearr_35733_37708 = state_35673__$1;
(statearr_35733_37708[(2)] = false);

(statearr_35733_37708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (3))){
var state_35673__$1 = state_35673;
var statearr_35736_37710 = state_35673__$1;
(statearr_35736_37710[(2)] = false);

(statearr_35736_37710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (12))){
var inst_35671 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35673__$1,inst_35671);
} else {
if((state_val_35674 === (2))){
var inst_35530 = (state_35673[(8)]);
var inst_35547 = inst_35530.cljs$lang$protocol_mask$partition0$;
var inst_35548 = (inst_35547 & (64));
var inst_35550 = inst_35530.cljs$core$ISeq$;
var inst_35551 = (cljs.core.PROTOCOL_SENTINEL === inst_35550);
var inst_35552 = ((inst_35548) || (inst_35551));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35552)){
var statearr_35742_37715 = state_35673__$1;
(statearr_35742_37715[(1)] = (5));

} else {
var statearr_35743_37718 = state_35673__$1;
(statearr_35743_37718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (23))){
var inst_35618 = (state_35673[(14)]);
var inst_35627 = (inst_35618 == null);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35627)){
var statearr_35746_37720 = state_35673__$1;
(statearr_35746_37720[(1)] = (26));

} else {
var statearr_35747_37722 = state_35673__$1;
(statearr_35747_37722[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (35))){
var inst_35658 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35658)){
var statearr_35750_37723 = state_35673__$1;
(statearr_35750_37723[(1)] = (36));

} else {
var statearr_35755_37726 = state_35673__$1;
(statearr_35755_37726[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (19))){
var inst_35571 = (state_35673[(7)]);
var inst_35602 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35571);
var state_35673__$1 = state_35673;
var statearr_35762_37733 = state_35673__$1;
(statearr_35762_37733[(2)] = inst_35602);

(statearr_35762_37733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (11))){
var inst_35571 = (state_35673[(7)]);
var inst_35578 = (inst_35571 == null);
var inst_35579 = cljs.core.not(inst_35578);
var state_35673__$1 = state_35673;
if(inst_35579){
var statearr_35769_37736 = state_35673__$1;
(statearr_35769_37736[(1)] = (13));

} else {
var statearr_35771_37737 = state_35673__$1;
(statearr_35771_37737[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (9))){
var inst_35530 = (state_35673[(8)]);
var state_35673__$1 = state_35673;
var statearr_35772_37739 = state_35673__$1;
(statearr_35772_37739[(2)] = inst_35530);

(statearr_35772_37739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (5))){
var state_35673__$1 = state_35673;
var statearr_35773_37745 = state_35673__$1;
(statearr_35773_37745[(2)] = true);

(statearr_35773_37745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (14))){
var state_35673__$1 = state_35673;
var statearr_35776_37748 = state_35673__$1;
(statearr_35776_37748[(2)] = false);

(statearr_35776_37748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (26))){
var inst_35619 = (state_35673[(11)]);
var inst_35640 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35619);
var state_35673__$1 = state_35673;
var statearr_35779_37750 = state_35673__$1;
(statearr_35779_37750[(2)] = inst_35640);

(statearr_35779_37750[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (16))){
var state_35673__$1 = state_35673;
var statearr_35780_37756 = state_35673__$1;
(statearr_35780_37756[(2)] = true);

(statearr_35780_37756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (38))){
var inst_35663 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35782_37759 = state_35673__$1;
(statearr_35782_37759[(2)] = inst_35663);

(statearr_35782_37759[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (30))){
var inst_35608 = (state_35673[(13)]);
var inst_35606 = (state_35673[(10)]);
var inst_35619 = (state_35673[(11)]);
var inst_35650 = cljs.core.empty_QMARK_(inst_35606);
var inst_35651 = (inst_35608.cljs$core$IFn$_invoke$arity$1 ? inst_35608.cljs$core$IFn$_invoke$arity$1(inst_35619) : inst_35608.call(null,inst_35619));
var inst_35652 = cljs.core.not(inst_35651);
var inst_35653 = ((inst_35650) && (inst_35652));
var state_35673__$1 = state_35673;
var statearr_35784_37763 = state_35673__$1;
(statearr_35784_37763[(2)] = inst_35653);

(statearr_35784_37763[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (10))){
var inst_35530 = (state_35673[(8)]);
var inst_35564 = (state_35673[(2)]);
var inst_35566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35564,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35564,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35564,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35571 = inst_35530;
var state_35673__$1 = (function (){var statearr_35787 = state_35673;
(statearr_35787[(16)] = inst_35569);

(statearr_35787[(7)] = inst_35571);

(statearr_35787[(17)] = inst_35566);

(statearr_35787[(18)] = inst_35570);

return statearr_35787;
})();
var statearr_35788_37772 = state_35673__$1;
(statearr_35788_37772[(2)] = null);

(statearr_35788_37772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (18))){
var inst_35597 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35790_37774 = state_35673__$1;
(statearr_35790_37774[(2)] = inst_35597);

(statearr_35790_37774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (37))){
var state_35673__$1 = state_35673;
var statearr_35792_37777 = state_35673__$1;
(statearr_35792_37777[(2)] = null);

(statearr_35792_37777[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (8))){
var inst_35530 = (state_35673[(8)]);
var inst_35561 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35530);
var state_35673__$1 = state_35673;
var statearr_35795_37785 = state_35673__$1;
(statearr_35795_37785[(2)] = inst_35561);

(statearr_35795_37785[(1)] = (10));


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
var statearr_35797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35797[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35797[(1)] = (1));

return statearr_35797;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35673){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35673);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35798){if((e35798 instanceof Object)){
var ex__34210__auto__ = e35798;
var statearr_35799_37794 = state_35673;
(statearr_35799_37794[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37796 = state_35673;
state_35673 = G__37796;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35673){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35803 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35803[(6)] = c__34274__auto___37639);

return statearr_35803;
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
var G__35832 = arguments.length;
switch (G__35832) {
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
var G__35852 = arguments.length;
switch (G__35852) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35847_SHARP_){
if(cljs.core.truth_((p1__35847_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35847_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35847_SHARP_.call(null,topic)))){
return p1__35847_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35847_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35862 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35863){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35863 = meta35863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35864,meta35863__$1){
var self__ = this;
var _35864__$1 = this;
return (new cljs.core.async.t_cljs$core$async35862(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35863__$1));
}));

(cljs.core.async.t_cljs$core$async35862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35864){
var self__ = this;
var _35864__$1 = this;
return self__.meta35863;
}));

(cljs.core.async.t_cljs$core$async35862.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35862.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35862.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35862.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35863","meta35863",-2087051191,null)], null);
}));

(cljs.core.async.t_cljs$core$async35862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35862");

(cljs.core.async.t_cljs$core$async35862.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35862.
 */
cljs.core.async.__GT_t_cljs$core$async35862 = (function cljs$core$async$__GT_t_cljs$core$async35862(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35863){
return (new cljs.core.async.t_cljs$core$async35862(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35863));
});

}

return (new cljs.core.async.t_cljs$core$async35862(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35970){
var state_val_35971 = (state_35970[(1)]);
if((state_val_35971 === (7))){
var inst_35966 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_35979_37866 = state_35970__$1;
(statearr_35979_37866[(2)] = inst_35966);

(statearr_35979_37866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (20))){
var state_35970__$1 = state_35970;
var statearr_35981_37869 = state_35970__$1;
(statearr_35981_37869[(2)] = null);

(statearr_35981_37869[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (1))){
var state_35970__$1 = state_35970;
var statearr_35985_37871 = state_35970__$1;
(statearr_35985_37871[(2)] = null);

(statearr_35985_37871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (24))){
var inst_35948 = (state_35970[(7)]);
var inst_35958 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35948);
var state_35970__$1 = state_35970;
var statearr_35988_37876 = state_35970__$1;
(statearr_35988_37876[(2)] = inst_35958);

(statearr_35988_37876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (4))){
var inst_35895 = (state_35970[(8)]);
var inst_35895__$1 = (state_35970[(2)]);
var inst_35896 = (inst_35895__$1 == null);
var state_35970__$1 = (function (){var statearr_35991 = state_35970;
(statearr_35991[(8)] = inst_35895__$1);

return statearr_35991;
})();
if(cljs.core.truth_(inst_35896)){
var statearr_35993_37878 = state_35970__$1;
(statearr_35993_37878[(1)] = (5));

} else {
var statearr_35994_37879 = state_35970__$1;
(statearr_35994_37879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (15))){
var inst_35940 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_35998_37884 = state_35970__$1;
(statearr_35998_37884[(2)] = inst_35940);

(statearr_35998_37884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (21))){
var inst_35963 = (state_35970[(2)]);
var state_35970__$1 = (function (){var statearr_36000 = state_35970;
(statearr_36000[(9)] = inst_35963);

return statearr_36000;
})();
var statearr_36003_37885 = state_35970__$1;
(statearr_36003_37885[(2)] = null);

(statearr_36003_37885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (13))){
var inst_35922 = (state_35970[(10)]);
var inst_35924 = cljs.core.chunked_seq_QMARK_(inst_35922);
var state_35970__$1 = state_35970;
if(inst_35924){
var statearr_36005_37887 = state_35970__$1;
(statearr_36005_37887[(1)] = (16));

} else {
var statearr_36006_37890 = state_35970__$1;
(statearr_36006_37890[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (22))){
var inst_35955 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
if(cljs.core.truth_(inst_35955)){
var statearr_36007_37894 = state_35970__$1;
(statearr_36007_37894[(1)] = (23));

} else {
var statearr_36008_37895 = state_35970__$1;
(statearr_36008_37895[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (6))){
var inst_35895 = (state_35970[(8)]);
var inst_35948 = (state_35970[(7)]);
var inst_35950 = (state_35970[(11)]);
var inst_35948__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35895) : topic_fn.call(null,inst_35895));
var inst_35949 = cljs.core.deref(mults);
var inst_35950__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35949,inst_35948__$1);
var state_35970__$1 = (function (){var statearr_36011 = state_35970;
(statearr_36011[(7)] = inst_35948__$1);

(statearr_36011[(11)] = inst_35950__$1);

return statearr_36011;
})();
if(cljs.core.truth_(inst_35950__$1)){
var statearr_36013_37904 = state_35970__$1;
(statearr_36013_37904[(1)] = (19));

} else {
var statearr_36015_37908 = state_35970__$1;
(statearr_36015_37908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (25))){
var inst_35960 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_36018_37911 = state_35970__$1;
(statearr_36018_37911[(2)] = inst_35960);

(statearr_36018_37911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (17))){
var inst_35922 = (state_35970[(10)]);
var inst_35931 = cljs.core.first(inst_35922);
var inst_35932 = cljs.core.async.muxch_STAR_(inst_35931);
var inst_35933 = cljs.core.async.close_BANG_(inst_35932);
var inst_35934 = cljs.core.next(inst_35922);
var inst_35907 = inst_35934;
var inst_35908 = null;
var inst_35909 = (0);
var inst_35910 = (0);
var state_35970__$1 = (function (){var statearr_36019 = state_35970;
(statearr_36019[(12)] = inst_35933);

(statearr_36019[(13)] = inst_35908);

(statearr_36019[(14)] = inst_35909);

(statearr_36019[(15)] = inst_35907);

(statearr_36019[(16)] = inst_35910);

return statearr_36019;
})();
var statearr_36020_37916 = state_35970__$1;
(statearr_36020_37916[(2)] = null);

(statearr_36020_37916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (3))){
var inst_35968 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35970__$1,inst_35968);
} else {
if((state_val_35971 === (12))){
var inst_35942 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_36024_37920 = state_35970__$1;
(statearr_36024_37920[(2)] = inst_35942);

(statearr_36024_37920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (2))){
var state_35970__$1 = state_35970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35970__$1,(4),ch);
} else {
if((state_val_35971 === (23))){
var state_35970__$1 = state_35970;
var statearr_36026_37923 = state_35970__$1;
(statearr_36026_37923[(2)] = null);

(statearr_36026_37923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (19))){
var inst_35895 = (state_35970[(8)]);
var inst_35950 = (state_35970[(11)]);
var inst_35953 = cljs.core.async.muxch_STAR_(inst_35950);
var state_35970__$1 = state_35970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35970__$1,(22),inst_35953,inst_35895);
} else {
if((state_val_35971 === (11))){
var inst_35922 = (state_35970[(10)]);
var inst_35907 = (state_35970[(15)]);
var inst_35922__$1 = cljs.core.seq(inst_35907);
var state_35970__$1 = (function (){var statearr_36027 = state_35970;
(statearr_36027[(10)] = inst_35922__$1);

return statearr_36027;
})();
if(inst_35922__$1){
var statearr_36028_37929 = state_35970__$1;
(statearr_36028_37929[(1)] = (13));

} else {
var statearr_36029_37930 = state_35970__$1;
(statearr_36029_37930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (9))){
var inst_35944 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_36030_37931 = state_35970__$1;
(statearr_36030_37931[(2)] = inst_35944);

(statearr_36030_37931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (5))){
var inst_35904 = cljs.core.deref(mults);
var inst_35905 = cljs.core.vals(inst_35904);
var inst_35906 = cljs.core.seq(inst_35905);
var inst_35907 = inst_35906;
var inst_35908 = null;
var inst_35909 = (0);
var inst_35910 = (0);
var state_35970__$1 = (function (){var statearr_36031 = state_35970;
(statearr_36031[(13)] = inst_35908);

(statearr_36031[(14)] = inst_35909);

(statearr_36031[(15)] = inst_35907);

(statearr_36031[(16)] = inst_35910);

return statearr_36031;
})();
var statearr_36032_37937 = state_35970__$1;
(statearr_36032_37937[(2)] = null);

(statearr_36032_37937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (14))){
var state_35970__$1 = state_35970;
var statearr_36036_37940 = state_35970__$1;
(statearr_36036_37940[(2)] = null);

(statearr_36036_37940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (16))){
var inst_35922 = (state_35970[(10)]);
var inst_35926 = cljs.core.chunk_first(inst_35922);
var inst_35927 = cljs.core.chunk_rest(inst_35922);
var inst_35928 = cljs.core.count(inst_35926);
var inst_35907 = inst_35927;
var inst_35908 = inst_35926;
var inst_35909 = inst_35928;
var inst_35910 = (0);
var state_35970__$1 = (function (){var statearr_36037 = state_35970;
(statearr_36037[(13)] = inst_35908);

(statearr_36037[(14)] = inst_35909);

(statearr_36037[(15)] = inst_35907);

(statearr_36037[(16)] = inst_35910);

return statearr_36037;
})();
var statearr_36038_37942 = state_35970__$1;
(statearr_36038_37942[(2)] = null);

(statearr_36038_37942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (10))){
var inst_35908 = (state_35970[(13)]);
var inst_35909 = (state_35970[(14)]);
var inst_35907 = (state_35970[(15)]);
var inst_35910 = (state_35970[(16)]);
var inst_35915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35908,inst_35910);
var inst_35916 = cljs.core.async.muxch_STAR_(inst_35915);
var inst_35917 = cljs.core.async.close_BANG_(inst_35916);
var inst_35918 = (inst_35910 + (1));
var tmp36033 = inst_35908;
var tmp36034 = inst_35909;
var tmp36035 = inst_35907;
var inst_35907__$1 = tmp36035;
var inst_35908__$1 = tmp36033;
var inst_35909__$1 = tmp36034;
var inst_35910__$1 = inst_35918;
var state_35970__$1 = (function (){var statearr_36039 = state_35970;
(statearr_36039[(17)] = inst_35917);

(statearr_36039[(13)] = inst_35908__$1);

(statearr_36039[(14)] = inst_35909__$1);

(statearr_36039[(15)] = inst_35907__$1);

(statearr_36039[(16)] = inst_35910__$1);

return statearr_36039;
})();
var statearr_36040_37948 = state_35970__$1;
(statearr_36040_37948[(2)] = null);

(statearr_36040_37948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (18))){
var inst_35937 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_36042_37949 = state_35970__$1;
(statearr_36042_37949[(2)] = inst_35937);

(statearr_36042_37949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (8))){
var inst_35909 = (state_35970[(14)]);
var inst_35910 = (state_35970[(16)]);
var inst_35912 = (inst_35910 < inst_35909);
var inst_35913 = inst_35912;
var state_35970__$1 = state_35970;
if(cljs.core.truth_(inst_35913)){
var statearr_36043_37950 = state_35970__$1;
(statearr_36043_37950[(1)] = (10));

} else {
var statearr_36044_37951 = state_35970__$1;
(statearr_36044_37951[(1)] = (11));

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
var statearr_36052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36052[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36052[(1)] = (1));

return statearr_36052;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35970){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35970);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36054){if((e36054 instanceof Object)){
var ex__34210__auto__ = e36054;
var statearr_36055_37955 = state_35970;
(statearr_36055_37955[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37960 = state_35970;
state_35970 = G__37960;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36057 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36057[(6)] = c__34274__auto___37862);

return statearr_36057;
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
var G__36060 = arguments.length;
switch (G__36060) {
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
var G__36070 = arguments.length;
switch (G__36070) {
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
var G__36076 = arguments.length;
switch (G__36076) {
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
var c__34274__auto___37969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36127){
var state_val_36128 = (state_36127[(1)]);
if((state_val_36128 === (7))){
var state_36127__$1 = state_36127;
var statearr_36131_37970 = state_36127__$1;
(statearr_36131_37970[(2)] = null);

(statearr_36131_37970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (1))){
var state_36127__$1 = state_36127;
var statearr_36132_37975 = state_36127__$1;
(statearr_36132_37975[(2)] = null);

(statearr_36132_37975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (4))){
var inst_36084 = (state_36127[(7)]);
var inst_36087 = (inst_36084 < cnt);
var state_36127__$1 = state_36127;
if(cljs.core.truth_(inst_36087)){
var statearr_36133_37976 = state_36127__$1;
(statearr_36133_37976[(1)] = (6));

} else {
var statearr_36136_37977 = state_36127__$1;
(statearr_36136_37977[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (15))){
var inst_36121 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
var statearr_36137_37979 = state_36127__$1;
(statearr_36137_37979[(2)] = inst_36121);

(statearr_36137_37979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (13))){
var inst_36113 = cljs.core.async.close_BANG_(out);
var state_36127__$1 = state_36127;
var statearr_36138_37982 = state_36127__$1;
(statearr_36138_37982[(2)] = inst_36113);

(statearr_36138_37982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (6))){
var state_36127__$1 = state_36127;
var statearr_36139_37983 = state_36127__$1;
(statearr_36139_37983[(2)] = null);

(statearr_36139_37983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (3))){
var inst_36123 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36127__$1,inst_36123);
} else {
if((state_val_36128 === (12))){
var inst_36108 = (state_36127[(8)]);
var inst_36108__$1 = (state_36127[(2)]);
var inst_36110 = cljs.core.some(cljs.core.nil_QMARK_,inst_36108__$1);
var state_36127__$1 = (function (){var statearr_36150 = state_36127;
(statearr_36150[(8)] = inst_36108__$1);

return statearr_36150;
})();
if(cljs.core.truth_(inst_36110)){
var statearr_36151_37984 = state_36127__$1;
(statearr_36151_37984[(1)] = (13));

} else {
var statearr_36152_37985 = state_36127__$1;
(statearr_36152_37985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (2))){
var inst_36082 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36084 = (0);
var state_36127__$1 = (function (){var statearr_36154 = state_36127;
(statearr_36154[(7)] = inst_36084);

(statearr_36154[(9)] = inst_36082);

return statearr_36154;
})();
var statearr_36159_37989 = state_36127__$1;
(statearr_36159_37989[(2)] = null);

(statearr_36159_37989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (11))){
var inst_36084 = (state_36127[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36127,(10),Object,null,(9));
var inst_36095 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36084) : chs__$1.call(null,inst_36084));
var inst_36096 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36084) : done.call(null,inst_36084));
var inst_36097 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36095,inst_36096);
var state_36127__$1 = state_36127;
var statearr_36166_37990 = state_36127__$1;
(statearr_36166_37990[(2)] = inst_36097);


cljs.core.async.impl.ioc_helpers.process_exception(state_36127__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (9))){
var inst_36084 = (state_36127[(7)]);
var inst_36099 = (state_36127[(2)]);
var inst_36100 = (inst_36084 + (1));
var inst_36084__$1 = inst_36100;
var state_36127__$1 = (function (){var statearr_36167 = state_36127;
(statearr_36167[(7)] = inst_36084__$1);

(statearr_36167[(10)] = inst_36099);

return statearr_36167;
})();
var statearr_36169_37995 = state_36127__$1;
(statearr_36169_37995[(2)] = null);

(statearr_36169_37995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (5))){
var inst_36106 = (state_36127[(2)]);
var state_36127__$1 = (function (){var statearr_36170 = state_36127;
(statearr_36170[(11)] = inst_36106);

return statearr_36170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36127__$1,(12),dchan);
} else {
if((state_val_36128 === (14))){
var inst_36108 = (state_36127[(8)]);
var inst_36116 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36108);
var state_36127__$1 = state_36127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36127__$1,(16),out,inst_36116);
} else {
if((state_val_36128 === (16))){
var inst_36118 = (state_36127[(2)]);
var state_36127__$1 = (function (){var statearr_36173 = state_36127;
(statearr_36173[(12)] = inst_36118);

return statearr_36173;
})();
var statearr_36174_38001 = state_36127__$1;
(statearr_36174_38001[(2)] = null);

(statearr_36174_38001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (10))){
var inst_36090 = (state_36127[(2)]);
var inst_36091 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36127__$1 = (function (){var statearr_36177 = state_36127;
(statearr_36177[(13)] = inst_36090);

return statearr_36177;
})();
var statearr_36178_38002 = state_36127__$1;
(statearr_36178_38002[(2)] = inst_36091);


cljs.core.async.impl.ioc_helpers.process_exception(state_36127__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (8))){
var inst_36104 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
var statearr_36179_38003 = state_36127__$1;
(statearr_36179_38003[(2)] = inst_36104);

(statearr_36179_38003[(1)] = (5));


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
var statearr_36182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36182[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36182[(1)] = (1));

return statearr_36182;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36127){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36127);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36183){if((e36183 instanceof Object)){
var ex__34210__auto__ = e36183;
var statearr_36184_38009 = state_36127;
(statearr_36184_38009[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36183;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38010 = state_36127;
state_36127 = G__38010;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36187 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36187[(6)] = c__34274__auto___37969);

return statearr_36187;
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
var G__36207 = arguments.length;
switch (G__36207) {
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
var c__34274__auto___38013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36247){
var state_val_36248 = (state_36247[(1)]);
if((state_val_36248 === (7))){
var inst_36221 = (state_36247[(7)]);
var inst_36220 = (state_36247[(8)]);
var inst_36220__$1 = (state_36247[(2)]);
var inst_36221__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36220__$1,(0),null);
var inst_36222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36220__$1,(1),null);
var inst_36223 = (inst_36221__$1 == null);
var state_36247__$1 = (function (){var statearr_36257 = state_36247;
(statearr_36257[(9)] = inst_36222);

(statearr_36257[(7)] = inst_36221__$1);

(statearr_36257[(8)] = inst_36220__$1);

return statearr_36257;
})();
if(cljs.core.truth_(inst_36223)){
var statearr_36258_38016 = state_36247__$1;
(statearr_36258_38016[(1)] = (8));

} else {
var statearr_36259_38017 = state_36247__$1;
(statearr_36259_38017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (1))){
var inst_36210 = cljs.core.vec(chs);
var inst_36211 = inst_36210;
var state_36247__$1 = (function (){var statearr_36261 = state_36247;
(statearr_36261[(10)] = inst_36211);

return statearr_36261;
})();
var statearr_36262_38018 = state_36247__$1;
(statearr_36262_38018[(2)] = null);

(statearr_36262_38018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (4))){
var inst_36211 = (state_36247[(10)]);
var state_36247__$1 = state_36247;
return cljs.core.async.ioc_alts_BANG_(state_36247__$1,(7),inst_36211);
} else {
if((state_val_36248 === (6))){
var inst_36243 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36265_38021 = state_36247__$1;
(statearr_36265_38021[(2)] = inst_36243);

(statearr_36265_38021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (3))){
var inst_36245 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36247__$1,inst_36245);
} else {
if((state_val_36248 === (2))){
var inst_36211 = (state_36247[(10)]);
var inst_36213 = cljs.core.count(inst_36211);
var inst_36214 = (inst_36213 > (0));
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36214)){
var statearr_36269_38024 = state_36247__$1;
(statearr_36269_38024[(1)] = (4));

} else {
var statearr_36270_38025 = state_36247__$1;
(statearr_36270_38025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (11))){
var inst_36211 = (state_36247[(10)]);
var inst_36236 = (state_36247[(2)]);
var tmp36267 = inst_36211;
var inst_36211__$1 = tmp36267;
var state_36247__$1 = (function (){var statearr_36273 = state_36247;
(statearr_36273[(10)] = inst_36211__$1);

(statearr_36273[(11)] = inst_36236);

return statearr_36273;
})();
var statearr_36274_38026 = state_36247__$1;
(statearr_36274_38026[(2)] = null);

(statearr_36274_38026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (9))){
var inst_36221 = (state_36247[(7)]);
var state_36247__$1 = state_36247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36247__$1,(11),out,inst_36221);
} else {
if((state_val_36248 === (5))){
var inst_36241 = cljs.core.async.close_BANG_(out);
var state_36247__$1 = state_36247;
var statearr_36277_38029 = state_36247__$1;
(statearr_36277_38029[(2)] = inst_36241);

(statearr_36277_38029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (10))){
var inst_36239 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36278_38030 = state_36247__$1;
(statearr_36278_38030[(2)] = inst_36239);

(statearr_36278_38030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (8))){
var inst_36222 = (state_36247[(9)]);
var inst_36221 = (state_36247[(7)]);
var inst_36211 = (state_36247[(10)]);
var inst_36220 = (state_36247[(8)]);
var inst_36230 = (function (){var cs = inst_36211;
var vec__36216 = inst_36220;
var v = inst_36221;
var c = inst_36222;
return (function (p1__36188_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36188_SHARP_);
});
})();
var inst_36232 = cljs.core.filterv(inst_36230,inst_36211);
var inst_36211__$1 = inst_36232;
var state_36247__$1 = (function (){var statearr_36281 = state_36247;
(statearr_36281[(10)] = inst_36211__$1);

return statearr_36281;
})();
var statearr_36282_38032 = state_36247__$1;
(statearr_36282_38032[(2)] = null);

(statearr_36282_38032[(1)] = (2));


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
var statearr_36290 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36290[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36290[(1)] = (1));

return statearr_36290;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36247){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36247);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36291){if((e36291 instanceof Object)){
var ex__34210__auto__ = e36291;
var statearr_36294_38035 = state_36247;
(statearr_36294_38035[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38036 = state_36247;
state_36247 = G__38036;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36296 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36296[(6)] = c__34274__auto___38013);

return statearr_36296;
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
var G__36302 = arguments.length;
switch (G__36302) {
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
var c__34274__auto___38042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36330){
var state_val_36331 = (state_36330[(1)]);
if((state_val_36331 === (7))){
var inst_36309 = (state_36330[(7)]);
var inst_36309__$1 = (state_36330[(2)]);
var inst_36311 = (inst_36309__$1 == null);
var inst_36312 = cljs.core.not(inst_36311);
var state_36330__$1 = (function (){var statearr_36333 = state_36330;
(statearr_36333[(7)] = inst_36309__$1);

return statearr_36333;
})();
if(inst_36312){
var statearr_36335_38045 = state_36330__$1;
(statearr_36335_38045[(1)] = (8));

} else {
var statearr_36336_38046 = state_36330__$1;
(statearr_36336_38046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (1))){
var inst_36304 = (0);
var state_36330__$1 = (function (){var statearr_36337 = state_36330;
(statearr_36337[(8)] = inst_36304);

return statearr_36337;
})();
var statearr_36338_38047 = state_36330__$1;
(statearr_36338_38047[(2)] = null);

(statearr_36338_38047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (4))){
var state_36330__$1 = state_36330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36330__$1,(7),ch);
} else {
if((state_val_36331 === (6))){
var inst_36325 = (state_36330[(2)]);
var state_36330__$1 = state_36330;
var statearr_36340_38050 = state_36330__$1;
(statearr_36340_38050[(2)] = inst_36325);

(statearr_36340_38050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (3))){
var inst_36327 = (state_36330[(2)]);
var inst_36328 = cljs.core.async.close_BANG_(out);
var state_36330__$1 = (function (){var statearr_36342 = state_36330;
(statearr_36342[(9)] = inst_36327);

return statearr_36342;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36330__$1,inst_36328);
} else {
if((state_val_36331 === (2))){
var inst_36304 = (state_36330[(8)]);
var inst_36306 = (inst_36304 < n);
var state_36330__$1 = state_36330;
if(cljs.core.truth_(inst_36306)){
var statearr_36349_38052 = state_36330__$1;
(statearr_36349_38052[(1)] = (4));

} else {
var statearr_36351_38053 = state_36330__$1;
(statearr_36351_38053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (11))){
var inst_36304 = (state_36330[(8)]);
var inst_36317 = (state_36330[(2)]);
var inst_36318 = (inst_36304 + (1));
var inst_36304__$1 = inst_36318;
var state_36330__$1 = (function (){var statearr_36354 = state_36330;
(statearr_36354[(8)] = inst_36304__$1);

(statearr_36354[(10)] = inst_36317);

return statearr_36354;
})();
var statearr_36355_38056 = state_36330__$1;
(statearr_36355_38056[(2)] = null);

(statearr_36355_38056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (9))){
var state_36330__$1 = state_36330;
var statearr_36356_38058 = state_36330__$1;
(statearr_36356_38058[(2)] = null);

(statearr_36356_38058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (5))){
var state_36330__$1 = state_36330;
var statearr_36357_38059 = state_36330__$1;
(statearr_36357_38059[(2)] = null);

(statearr_36357_38059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (10))){
var inst_36322 = (state_36330[(2)]);
var state_36330__$1 = state_36330;
var statearr_36360_38060 = state_36330__$1;
(statearr_36360_38060[(2)] = inst_36322);

(statearr_36360_38060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36331 === (8))){
var inst_36309 = (state_36330[(7)]);
var state_36330__$1 = state_36330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36330__$1,(11),out,inst_36309);
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
var statearr_36362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36362[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36362[(1)] = (1));

return statearr_36362;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36330){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36330);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36364){if((e36364 instanceof Object)){
var ex__34210__auto__ = e36364;
var statearr_36365_38064 = state_36330;
(statearr_36365_38064[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38065 = state_36330;
state_36330 = G__38065;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36368 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36368[(6)] = c__34274__auto___38042);

return statearr_36368;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36372 = (function (f,ch,meta36373){
this.f = f;
this.ch = ch;
this.meta36373 = meta36373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36374,meta36373__$1){
var self__ = this;
var _36374__$1 = this;
return (new cljs.core.async.t_cljs$core$async36372(self__.f,self__.ch,meta36373__$1));
}));

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36374){
var self__ = this;
var _36374__$1 = this;
return self__.meta36373;
}));

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36387 = (function (f,ch,meta36373,_,fn1,meta36388){
this.f = f;
this.ch = ch;
this.meta36373 = meta36373;
this._ = _;
this.fn1 = fn1;
this.meta36388 = meta36388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36389,meta36388__$1){
var self__ = this;
var _36389__$1 = this;
return (new cljs.core.async.t_cljs$core$async36387(self__.f,self__.ch,self__.meta36373,self__._,self__.fn1,meta36388__$1));
}));

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36389){
var self__ = this;
var _36389__$1 = this;
return self__.meta36388;
}));

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36369_SHARP_){
var G__36405 = (((p1__36369_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36369_SHARP_) : self__.f.call(null,p1__36369_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36405) : f1.call(null,G__36405));
});
}));

(cljs.core.async.t_cljs$core$async36387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36373","meta36373",-1580334979,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36372","cljs.core.async/t_cljs$core$async36372",-1040453367,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36388","meta36388",571122377,null)], null);
}));

(cljs.core.async.t_cljs$core$async36387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36387");

(cljs.core.async.t_cljs$core$async36387.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36387.
 */
cljs.core.async.__GT_t_cljs$core$async36387 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36387(f__$1,ch__$1,meta36373__$1,___$2,fn1__$1,meta36388){
return (new cljs.core.async.t_cljs$core$async36387(f__$1,ch__$1,meta36373__$1,___$2,fn1__$1,meta36388));
});

}

return (new cljs.core.async.t_cljs$core$async36387(self__.f,self__.ch,self__.meta36373,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36412 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36412) : self__.f.call(null,G__36412));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36373","meta36373",-1580334979,null)], null);
}));

(cljs.core.async.t_cljs$core$async36372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36372");

(cljs.core.async.t_cljs$core$async36372.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36372.
 */
cljs.core.async.__GT_t_cljs$core$async36372 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36372(f__$1,ch__$1,meta36373){
return (new cljs.core.async.t_cljs$core$async36372(f__$1,ch__$1,meta36373));
});

}

return (new cljs.core.async.t_cljs$core$async36372(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36420 = (function (f,ch,meta36421){
this.f = f;
this.ch = ch;
this.meta36421 = meta36421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36422,meta36421__$1){
var self__ = this;
var _36422__$1 = this;
return (new cljs.core.async.t_cljs$core$async36420(self__.f,self__.ch,meta36421__$1));
}));

(cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36422){
var self__ = this;
var _36422__$1 = this;
return self__.meta36421;
}));

(cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36421","meta36421",-689858959,null)], null);
}));

(cljs.core.async.t_cljs$core$async36420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36420");

(cljs.core.async.t_cljs$core$async36420.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36420.
 */
cljs.core.async.__GT_t_cljs$core$async36420 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36420(f__$1,ch__$1,meta36421){
return (new cljs.core.async.t_cljs$core$async36420(f__$1,ch__$1,meta36421));
});

}

return (new cljs.core.async.t_cljs$core$async36420(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36432 = (function (p,ch,meta36433){
this.p = p;
this.ch = ch;
this.meta36433 = meta36433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36434,meta36433__$1){
var self__ = this;
var _36434__$1 = this;
return (new cljs.core.async.t_cljs$core$async36432(self__.p,self__.ch,meta36433__$1));
}));

(cljs.core.async.t_cljs$core$async36432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36434){
var self__ = this;
var _36434__$1 = this;
return self__.meta36433;
}));

(cljs.core.async.t_cljs$core$async36432.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36432.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36432.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36432.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36433","meta36433",141225489,null)], null);
}));

(cljs.core.async.t_cljs$core$async36432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36432");

(cljs.core.async.t_cljs$core$async36432.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36432.
 */
cljs.core.async.__GT_t_cljs$core$async36432 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36432(p__$1,ch__$1,meta36433){
return (new cljs.core.async.t_cljs$core$async36432(p__$1,ch__$1,meta36433));
});

}

return (new cljs.core.async.t_cljs$core$async36432(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36442 = arguments.length;
switch (G__36442) {
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
var c__34274__auto___38091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36466){
var state_val_36467 = (state_36466[(1)]);
if((state_val_36467 === (7))){
var inst_36462 = (state_36466[(2)]);
var state_36466__$1 = state_36466;
var statearr_36468_38092 = state_36466__$1;
(statearr_36468_38092[(2)] = inst_36462);

(statearr_36468_38092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (1))){
var state_36466__$1 = state_36466;
var statearr_36469_38094 = state_36466__$1;
(statearr_36469_38094[(2)] = null);

(statearr_36469_38094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (4))){
var inst_36447 = (state_36466[(7)]);
var inst_36447__$1 = (state_36466[(2)]);
var inst_36448 = (inst_36447__$1 == null);
var state_36466__$1 = (function (){var statearr_36470 = state_36466;
(statearr_36470[(7)] = inst_36447__$1);

return statearr_36470;
})();
if(cljs.core.truth_(inst_36448)){
var statearr_36472_38097 = state_36466__$1;
(statearr_36472_38097[(1)] = (5));

} else {
var statearr_36473_38098 = state_36466__$1;
(statearr_36473_38098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (6))){
var inst_36447 = (state_36466[(7)]);
var inst_36452 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36447) : p.call(null,inst_36447));
var state_36466__$1 = state_36466;
if(cljs.core.truth_(inst_36452)){
var statearr_36474_38099 = state_36466__$1;
(statearr_36474_38099[(1)] = (8));

} else {
var statearr_36475_38100 = state_36466__$1;
(statearr_36475_38100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (3))){
var inst_36464 = (state_36466[(2)]);
var state_36466__$1 = state_36466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36466__$1,inst_36464);
} else {
if((state_val_36467 === (2))){
var state_36466__$1 = state_36466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36466__$1,(4),ch);
} else {
if((state_val_36467 === (11))){
var inst_36456 = (state_36466[(2)]);
var state_36466__$1 = state_36466;
var statearr_36477_38104 = state_36466__$1;
(statearr_36477_38104[(2)] = inst_36456);

(statearr_36477_38104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (9))){
var state_36466__$1 = state_36466;
var statearr_36479_38105 = state_36466__$1;
(statearr_36479_38105[(2)] = null);

(statearr_36479_38105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (5))){
var inst_36450 = cljs.core.async.close_BANG_(out);
var state_36466__$1 = state_36466;
var statearr_36480_38106 = state_36466__$1;
(statearr_36480_38106[(2)] = inst_36450);

(statearr_36480_38106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (10))){
var inst_36459 = (state_36466[(2)]);
var state_36466__$1 = (function (){var statearr_36481 = state_36466;
(statearr_36481[(8)] = inst_36459);

return statearr_36481;
})();
var statearr_36482_38110 = state_36466__$1;
(statearr_36482_38110[(2)] = null);

(statearr_36482_38110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (8))){
var inst_36447 = (state_36466[(7)]);
var state_36466__$1 = state_36466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36466__$1,(11),out,inst_36447);
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
var statearr_36483 = [null,null,null,null,null,null,null,null,null];
(statearr_36483[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36483[(1)] = (1));

return statearr_36483;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36466){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36466);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36484){if((e36484 instanceof Object)){
var ex__34210__auto__ = e36484;
var statearr_36485_38111 = state_36466;
(statearr_36485_38111[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38113 = state_36466;
state_36466 = G__38113;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36487 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36487[(6)] = c__34274__auto___38091);

return statearr_36487;
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
var G__36490 = arguments.length;
switch (G__36490) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36557){
var state_val_36558 = (state_36557[(1)]);
if((state_val_36558 === (7))){
var inst_36552 = (state_36557[(2)]);
var state_36557__$1 = state_36557;
var statearr_36559_38117 = state_36557__$1;
(statearr_36559_38117[(2)] = inst_36552);

(statearr_36559_38117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (20))){
var inst_36522 = (state_36557[(7)]);
var inst_36533 = (state_36557[(2)]);
var inst_36534 = cljs.core.next(inst_36522);
var inst_36507 = inst_36534;
var inst_36508 = null;
var inst_36509 = (0);
var inst_36510 = (0);
var state_36557__$1 = (function (){var statearr_36561 = state_36557;
(statearr_36561[(8)] = inst_36533);

(statearr_36561[(9)] = inst_36509);

(statearr_36561[(10)] = inst_36510);

(statearr_36561[(11)] = inst_36507);

(statearr_36561[(12)] = inst_36508);

return statearr_36561;
})();
var statearr_36562_38121 = state_36557__$1;
(statearr_36562_38121[(2)] = null);

(statearr_36562_38121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (1))){
var state_36557__$1 = state_36557;
var statearr_36564_38122 = state_36557__$1;
(statearr_36564_38122[(2)] = null);

(statearr_36564_38122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (4))){
var inst_36496 = (state_36557[(13)]);
var inst_36496__$1 = (state_36557[(2)]);
var inst_36497 = (inst_36496__$1 == null);
var state_36557__$1 = (function (){var statearr_36565 = state_36557;
(statearr_36565[(13)] = inst_36496__$1);

return statearr_36565;
})();
if(cljs.core.truth_(inst_36497)){
var statearr_36566_38123 = state_36557__$1;
(statearr_36566_38123[(1)] = (5));

} else {
var statearr_36567_38124 = state_36557__$1;
(statearr_36567_38124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (15))){
var state_36557__$1 = state_36557;
var statearr_36572_38125 = state_36557__$1;
(statearr_36572_38125[(2)] = null);

(statearr_36572_38125[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (21))){
var state_36557__$1 = state_36557;
var statearr_36573_38126 = state_36557__$1;
(statearr_36573_38126[(2)] = null);

(statearr_36573_38126[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (13))){
var inst_36509 = (state_36557[(9)]);
var inst_36510 = (state_36557[(10)]);
var inst_36507 = (state_36557[(11)]);
var inst_36508 = (state_36557[(12)]);
var inst_36517 = (state_36557[(2)]);
var inst_36519 = (inst_36510 + (1));
var tmp36569 = inst_36509;
var tmp36570 = inst_36507;
var tmp36571 = inst_36508;
var inst_36507__$1 = tmp36570;
var inst_36508__$1 = tmp36571;
var inst_36509__$1 = tmp36569;
var inst_36510__$1 = inst_36519;
var state_36557__$1 = (function (){var statearr_36575 = state_36557;
(statearr_36575[(9)] = inst_36509__$1);

(statearr_36575[(10)] = inst_36510__$1);

(statearr_36575[(11)] = inst_36507__$1);

(statearr_36575[(12)] = inst_36508__$1);

(statearr_36575[(14)] = inst_36517);

return statearr_36575;
})();
var statearr_36576_38133 = state_36557__$1;
(statearr_36576_38133[(2)] = null);

(statearr_36576_38133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (22))){
var state_36557__$1 = state_36557;
var statearr_36578_38134 = state_36557__$1;
(statearr_36578_38134[(2)] = null);

(statearr_36578_38134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (6))){
var inst_36496 = (state_36557[(13)]);
var inst_36505 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36496) : f.call(null,inst_36496));
var inst_36506 = cljs.core.seq(inst_36505);
var inst_36507 = inst_36506;
var inst_36508 = null;
var inst_36509 = (0);
var inst_36510 = (0);
var state_36557__$1 = (function (){var statearr_36586 = state_36557;
(statearr_36586[(9)] = inst_36509);

(statearr_36586[(10)] = inst_36510);

(statearr_36586[(11)] = inst_36507);

(statearr_36586[(12)] = inst_36508);

return statearr_36586;
})();
var statearr_36587_38138 = state_36557__$1;
(statearr_36587_38138[(2)] = null);

(statearr_36587_38138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (17))){
var inst_36522 = (state_36557[(7)]);
var inst_36526 = cljs.core.chunk_first(inst_36522);
var inst_36527 = cljs.core.chunk_rest(inst_36522);
var inst_36528 = cljs.core.count(inst_36526);
var inst_36507 = inst_36527;
var inst_36508 = inst_36526;
var inst_36509 = inst_36528;
var inst_36510 = (0);
var state_36557__$1 = (function (){var statearr_36589 = state_36557;
(statearr_36589[(9)] = inst_36509);

(statearr_36589[(10)] = inst_36510);

(statearr_36589[(11)] = inst_36507);

(statearr_36589[(12)] = inst_36508);

return statearr_36589;
})();
var statearr_36591_38142 = state_36557__$1;
(statearr_36591_38142[(2)] = null);

(statearr_36591_38142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (3))){
var inst_36554 = (state_36557[(2)]);
var state_36557__$1 = state_36557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36557__$1,inst_36554);
} else {
if((state_val_36558 === (12))){
var inst_36542 = (state_36557[(2)]);
var state_36557__$1 = state_36557;
var statearr_36592_38143 = state_36557__$1;
(statearr_36592_38143[(2)] = inst_36542);

(statearr_36592_38143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (2))){
var state_36557__$1 = state_36557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36557__$1,(4),in$);
} else {
if((state_val_36558 === (23))){
var inst_36550 = (state_36557[(2)]);
var state_36557__$1 = state_36557;
var statearr_36594_38146 = state_36557__$1;
(statearr_36594_38146[(2)] = inst_36550);

(statearr_36594_38146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (19))){
var inst_36537 = (state_36557[(2)]);
var state_36557__$1 = state_36557;
var statearr_36595_38148 = state_36557__$1;
(statearr_36595_38148[(2)] = inst_36537);

(statearr_36595_38148[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (11))){
var inst_36507 = (state_36557[(11)]);
var inst_36522 = (state_36557[(7)]);
var inst_36522__$1 = cljs.core.seq(inst_36507);
var state_36557__$1 = (function (){var statearr_36597 = state_36557;
(statearr_36597[(7)] = inst_36522__$1);

return statearr_36597;
})();
if(inst_36522__$1){
var statearr_36598_38149 = state_36557__$1;
(statearr_36598_38149[(1)] = (14));

} else {
var statearr_36599_38150 = state_36557__$1;
(statearr_36599_38150[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (9))){
var inst_36544 = (state_36557[(2)]);
var inst_36545 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36557__$1 = (function (){var statearr_36601 = state_36557;
(statearr_36601[(15)] = inst_36544);

return statearr_36601;
})();
if(cljs.core.truth_(inst_36545)){
var statearr_36602_38152 = state_36557__$1;
(statearr_36602_38152[(1)] = (21));

} else {
var statearr_36603_38154 = state_36557__$1;
(statearr_36603_38154[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (5))){
var inst_36499 = cljs.core.async.close_BANG_(out);
var state_36557__$1 = state_36557;
var statearr_36605_38156 = state_36557__$1;
(statearr_36605_38156[(2)] = inst_36499);

(statearr_36605_38156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (14))){
var inst_36522 = (state_36557[(7)]);
var inst_36524 = cljs.core.chunked_seq_QMARK_(inst_36522);
var state_36557__$1 = state_36557;
if(inst_36524){
var statearr_36606_38157 = state_36557__$1;
(statearr_36606_38157[(1)] = (17));

} else {
var statearr_36607_38158 = state_36557__$1;
(statearr_36607_38158[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (16))){
var inst_36540 = (state_36557[(2)]);
var state_36557__$1 = state_36557;
var statearr_36609_38159 = state_36557__$1;
(statearr_36609_38159[(2)] = inst_36540);

(statearr_36609_38159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36558 === (10))){
var inst_36510 = (state_36557[(10)]);
var inst_36508 = (state_36557[(12)]);
var inst_36515 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36508,inst_36510);
var state_36557__$1 = state_36557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36557__$1,(13),out,inst_36515);
} else {
if((state_val_36558 === (18))){
var inst_36522 = (state_36557[(7)]);
var inst_36531 = cljs.core.first(inst_36522);
var state_36557__$1 = state_36557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36557__$1,(20),out,inst_36531);
} else {
if((state_val_36558 === (8))){
var inst_36509 = (state_36557[(9)]);
var inst_36510 = (state_36557[(10)]);
var inst_36512 = (inst_36510 < inst_36509);
var inst_36513 = inst_36512;
var state_36557__$1 = state_36557;
if(cljs.core.truth_(inst_36513)){
var statearr_36611_38162 = state_36557__$1;
(statearr_36611_38162[(1)] = (10));

} else {
var statearr_36612_38163 = state_36557__$1;
(statearr_36612_38163[(1)] = (11));

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
var statearr_36614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36614[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36614[(1)] = (1));

return statearr_36614;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36557){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36557);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36615){if((e36615 instanceof Object)){
var ex__34210__auto__ = e36615;
var statearr_36617_38166 = state_36557;
(statearr_36617_38166[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38169 = state_36557;
state_36557 = G__38169;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36557){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36618 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36618[(6)] = c__34274__auto__);

return statearr_36618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36621 = arguments.length;
switch (G__36621) {
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
var G__36626 = arguments.length;
switch (G__36626) {
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
var G__36630 = arguments.length;
switch (G__36630) {
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
var c__34274__auto___38181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36656){
var state_val_36657 = (state_36656[(1)]);
if((state_val_36657 === (7))){
var inst_36651 = (state_36656[(2)]);
var state_36656__$1 = state_36656;
var statearr_36659_38184 = state_36656__$1;
(statearr_36659_38184[(2)] = inst_36651);

(statearr_36659_38184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36657 === (1))){
var inst_36632 = null;
var state_36656__$1 = (function (){var statearr_36660 = state_36656;
(statearr_36660[(7)] = inst_36632);

return statearr_36660;
})();
var statearr_36661_38185 = state_36656__$1;
(statearr_36661_38185[(2)] = null);

(statearr_36661_38185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36657 === (4))){
var inst_36635 = (state_36656[(8)]);
var inst_36635__$1 = (state_36656[(2)]);
var inst_36636 = (inst_36635__$1 == null);
var inst_36637 = cljs.core.not(inst_36636);
var state_36656__$1 = (function (){var statearr_36663 = state_36656;
(statearr_36663[(8)] = inst_36635__$1);

return statearr_36663;
})();
if(inst_36637){
var statearr_36664_38187 = state_36656__$1;
(statearr_36664_38187[(1)] = (5));

} else {
var statearr_36665_38188 = state_36656__$1;
(statearr_36665_38188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36657 === (6))){
var state_36656__$1 = state_36656;
var statearr_36667_38189 = state_36656__$1;
(statearr_36667_38189[(2)] = null);

(statearr_36667_38189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36657 === (3))){
var inst_36653 = (state_36656[(2)]);
var inst_36654 = cljs.core.async.close_BANG_(out);
var state_36656__$1 = (function (){var statearr_36668 = state_36656;
(statearr_36668[(9)] = inst_36653);

return statearr_36668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36656__$1,inst_36654);
} else {
if((state_val_36657 === (2))){
var state_36656__$1 = state_36656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36656__$1,(4),ch);
} else {
if((state_val_36657 === (11))){
var inst_36635 = (state_36656[(8)]);
var inst_36645 = (state_36656[(2)]);
var inst_36632 = inst_36635;
var state_36656__$1 = (function (){var statearr_36670 = state_36656;
(statearr_36670[(10)] = inst_36645);

(statearr_36670[(7)] = inst_36632);

return statearr_36670;
})();
var statearr_36671_38193 = state_36656__$1;
(statearr_36671_38193[(2)] = null);

(statearr_36671_38193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36657 === (9))){
var inst_36635 = (state_36656[(8)]);
var state_36656__$1 = state_36656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36656__$1,(11),out,inst_36635);
} else {
if((state_val_36657 === (5))){
var inst_36632 = (state_36656[(7)]);
var inst_36635 = (state_36656[(8)]);
var inst_36640 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36635,inst_36632);
var state_36656__$1 = state_36656;
if(inst_36640){
var statearr_36674_38195 = state_36656__$1;
(statearr_36674_38195[(1)] = (8));

} else {
var statearr_36675_38196 = state_36656__$1;
(statearr_36675_38196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36657 === (10))){
var inst_36648 = (state_36656[(2)]);
var state_36656__$1 = state_36656;
var statearr_36677_38197 = state_36656__$1;
(statearr_36677_38197[(2)] = inst_36648);

(statearr_36677_38197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36657 === (8))){
var inst_36632 = (state_36656[(7)]);
var tmp36673 = inst_36632;
var inst_36632__$1 = tmp36673;
var state_36656__$1 = (function (){var statearr_36678 = state_36656;
(statearr_36678[(7)] = inst_36632__$1);

return statearr_36678;
})();
var statearr_36679_38198 = state_36656__$1;
(statearr_36679_38198[(2)] = null);

(statearr_36679_38198[(1)] = (2));


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
var statearr_36681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36681[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36681[(1)] = (1));

return statearr_36681;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36656){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36656);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36682){if((e36682 instanceof Object)){
var ex__34210__auto__ = e36682;
var statearr_36683_38202 = state_36656;
(statearr_36683_38202[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38203 = state_36656;
state_36656 = G__38203;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36685 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36685[(6)] = c__34274__auto___38181);

return statearr_36685;
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
var G__36689 = arguments.length;
switch (G__36689) {
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
var c__34274__auto___38208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36729){
var state_val_36730 = (state_36729[(1)]);
if((state_val_36730 === (7))){
var inst_36725 = (state_36729[(2)]);
var state_36729__$1 = state_36729;
var statearr_36732_38209 = state_36729__$1;
(statearr_36732_38209[(2)] = inst_36725);

(statearr_36732_38209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (1))){
var inst_36691 = (new Array(n));
var inst_36692 = inst_36691;
var inst_36693 = (0);
var state_36729__$1 = (function (){var statearr_36733 = state_36729;
(statearr_36733[(7)] = inst_36693);

(statearr_36733[(8)] = inst_36692);

return statearr_36733;
})();
var statearr_36734_38210 = state_36729__$1;
(statearr_36734_38210[(2)] = null);

(statearr_36734_38210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (4))){
var inst_36696 = (state_36729[(9)]);
var inst_36696__$1 = (state_36729[(2)]);
var inst_36697 = (inst_36696__$1 == null);
var inst_36698 = cljs.core.not(inst_36697);
var state_36729__$1 = (function (){var statearr_36736 = state_36729;
(statearr_36736[(9)] = inst_36696__$1);

return statearr_36736;
})();
if(inst_36698){
var statearr_36737_38211 = state_36729__$1;
(statearr_36737_38211[(1)] = (5));

} else {
var statearr_36738_38213 = state_36729__$1;
(statearr_36738_38213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (15))){
var inst_36719 = (state_36729[(2)]);
var state_36729__$1 = state_36729;
var statearr_36740_38214 = state_36729__$1;
(statearr_36740_38214[(2)] = inst_36719);

(statearr_36740_38214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (13))){
var state_36729__$1 = state_36729;
var statearr_36741_38215 = state_36729__$1;
(statearr_36741_38215[(2)] = null);

(statearr_36741_38215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (6))){
var inst_36693 = (state_36729[(7)]);
var inst_36715 = (inst_36693 > (0));
var state_36729__$1 = state_36729;
if(cljs.core.truth_(inst_36715)){
var statearr_36743_38216 = state_36729__$1;
(statearr_36743_38216[(1)] = (12));

} else {
var statearr_36744_38217 = state_36729__$1;
(statearr_36744_38217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (3))){
var inst_36727 = (state_36729[(2)]);
var state_36729__$1 = state_36729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36729__$1,inst_36727);
} else {
if((state_val_36730 === (12))){
var inst_36692 = (state_36729[(8)]);
var inst_36717 = cljs.core.vec(inst_36692);
var state_36729__$1 = state_36729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36729__$1,(15),out,inst_36717);
} else {
if((state_val_36730 === (2))){
var state_36729__$1 = state_36729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36729__$1,(4),ch);
} else {
if((state_val_36730 === (11))){
var inst_36708 = (state_36729[(2)]);
var inst_36709 = (new Array(n));
var inst_36692 = inst_36709;
var inst_36693 = (0);
var state_36729__$1 = (function (){var statearr_36746 = state_36729;
(statearr_36746[(10)] = inst_36708);

(statearr_36746[(7)] = inst_36693);

(statearr_36746[(8)] = inst_36692);

return statearr_36746;
})();
var statearr_36747_38219 = state_36729__$1;
(statearr_36747_38219[(2)] = null);

(statearr_36747_38219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (9))){
var inst_36692 = (state_36729[(8)]);
var inst_36706 = cljs.core.vec(inst_36692);
var state_36729__$1 = state_36729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36729__$1,(11),out,inst_36706);
} else {
if((state_val_36730 === (5))){
var inst_36693 = (state_36729[(7)]);
var inst_36692 = (state_36729[(8)]);
var inst_36701 = (state_36729[(11)]);
var inst_36696 = (state_36729[(9)]);
var inst_36700 = (inst_36692[inst_36693] = inst_36696);
var inst_36701__$1 = (inst_36693 + (1));
var inst_36702 = (inst_36701__$1 < n);
var state_36729__$1 = (function (){var statearr_36748 = state_36729;
(statearr_36748[(12)] = inst_36700);

(statearr_36748[(11)] = inst_36701__$1);

return statearr_36748;
})();
if(cljs.core.truth_(inst_36702)){
var statearr_36749_38221 = state_36729__$1;
(statearr_36749_38221[(1)] = (8));

} else {
var statearr_36750_38222 = state_36729__$1;
(statearr_36750_38222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (14))){
var inst_36722 = (state_36729[(2)]);
var inst_36723 = cljs.core.async.close_BANG_(out);
var state_36729__$1 = (function (){var statearr_36752 = state_36729;
(statearr_36752[(13)] = inst_36722);

return statearr_36752;
})();
var statearr_36753_38223 = state_36729__$1;
(statearr_36753_38223[(2)] = inst_36723);

(statearr_36753_38223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (10))){
var inst_36713 = (state_36729[(2)]);
var state_36729__$1 = state_36729;
var statearr_36754_38225 = state_36729__$1;
(statearr_36754_38225[(2)] = inst_36713);

(statearr_36754_38225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (8))){
var inst_36692 = (state_36729[(8)]);
var inst_36701 = (state_36729[(11)]);
var tmp36751 = inst_36692;
var inst_36692__$1 = tmp36751;
var inst_36693 = inst_36701;
var state_36729__$1 = (function (){var statearr_36755 = state_36729;
(statearr_36755[(7)] = inst_36693);

(statearr_36755[(8)] = inst_36692__$1);

return statearr_36755;
})();
var statearr_36756_38226 = state_36729__$1;
(statearr_36756_38226[(2)] = null);

(statearr_36756_38226[(1)] = (2));


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
var statearr_36758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36758[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36758[(1)] = (1));

return statearr_36758;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36729){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36729);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36759){if((e36759 instanceof Object)){
var ex__34210__auto__ = e36759;
var statearr_36760_38228 = state_36729;
(statearr_36760_38228[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38229 = state_36729;
state_36729 = G__38229;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36761 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36761[(6)] = c__34274__auto___38208);

return statearr_36761;
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
var G__36763 = arguments.length;
switch (G__36763) {
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
var c__34274__auto___38233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36806){
var state_val_36807 = (state_36806[(1)]);
if((state_val_36807 === (7))){
var inst_36802 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
var statearr_36809_38234 = state_36806__$1;
(statearr_36809_38234[(2)] = inst_36802);

(statearr_36809_38234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (1))){
var inst_36764 = [];
var inst_36765 = inst_36764;
var inst_36766 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36806__$1 = (function (){var statearr_36811 = state_36806;
(statearr_36811[(7)] = inst_36765);

(statearr_36811[(8)] = inst_36766);

return statearr_36811;
})();
var statearr_36812_38236 = state_36806__$1;
(statearr_36812_38236[(2)] = null);

(statearr_36812_38236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (4))){
var inst_36769 = (state_36806[(9)]);
var inst_36769__$1 = (state_36806[(2)]);
var inst_36770 = (inst_36769__$1 == null);
var inst_36771 = cljs.core.not(inst_36770);
var state_36806__$1 = (function (){var statearr_36814 = state_36806;
(statearr_36814[(9)] = inst_36769__$1);

return statearr_36814;
})();
if(inst_36771){
var statearr_36815_38238 = state_36806__$1;
(statearr_36815_38238[(1)] = (5));

} else {
var statearr_36816_38239 = state_36806__$1;
(statearr_36816_38239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (15))){
var inst_36796 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
var statearr_36817_38240 = state_36806__$1;
(statearr_36817_38240[(2)] = inst_36796);

(statearr_36817_38240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (13))){
var state_36806__$1 = state_36806;
var statearr_36819_38241 = state_36806__$1;
(statearr_36819_38241[(2)] = null);

(statearr_36819_38241[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (6))){
var inst_36765 = (state_36806[(7)]);
var inst_36791 = inst_36765.length;
var inst_36792 = (inst_36791 > (0));
var state_36806__$1 = state_36806;
if(cljs.core.truth_(inst_36792)){
var statearr_36820_38243 = state_36806__$1;
(statearr_36820_38243[(1)] = (12));

} else {
var statearr_36821_38244 = state_36806__$1;
(statearr_36821_38244[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (3))){
var inst_36804 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36806__$1,inst_36804);
} else {
if((state_val_36807 === (12))){
var inst_36765 = (state_36806[(7)]);
var inst_36794 = cljs.core.vec(inst_36765);
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36806__$1,(15),out,inst_36794);
} else {
if((state_val_36807 === (2))){
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36806__$1,(4),ch);
} else {
if((state_val_36807 === (11))){
var inst_36773 = (state_36806[(10)]);
var inst_36769 = (state_36806[(9)]);
var inst_36784 = (state_36806[(2)]);
var inst_36785 = [];
var inst_36786 = inst_36785.push(inst_36769);
var inst_36765 = inst_36785;
var inst_36766 = inst_36773;
var state_36806__$1 = (function (){var statearr_36824 = state_36806;
(statearr_36824[(7)] = inst_36765);

(statearr_36824[(11)] = inst_36786);

(statearr_36824[(12)] = inst_36784);

(statearr_36824[(8)] = inst_36766);

return statearr_36824;
})();
var statearr_36825_38247 = state_36806__$1;
(statearr_36825_38247[(2)] = null);

(statearr_36825_38247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (9))){
var inst_36765 = (state_36806[(7)]);
var inst_36782 = cljs.core.vec(inst_36765);
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36806__$1,(11),out,inst_36782);
} else {
if((state_val_36807 === (5))){
var inst_36773 = (state_36806[(10)]);
var inst_36766 = (state_36806[(8)]);
var inst_36769 = (state_36806[(9)]);
var inst_36773__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36769) : f.call(null,inst_36769));
var inst_36774 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36773__$1,inst_36766);
var inst_36775 = cljs.core.keyword_identical_QMARK_(inst_36766,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36776 = ((inst_36774) || (inst_36775));
var state_36806__$1 = (function (){var statearr_36828 = state_36806;
(statearr_36828[(10)] = inst_36773__$1);

return statearr_36828;
})();
if(cljs.core.truth_(inst_36776)){
var statearr_36829_38249 = state_36806__$1;
(statearr_36829_38249[(1)] = (8));

} else {
var statearr_36830_38250 = state_36806__$1;
(statearr_36830_38250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (14))){
var inst_36799 = (state_36806[(2)]);
var inst_36800 = cljs.core.async.close_BANG_(out);
var state_36806__$1 = (function (){var statearr_36832 = state_36806;
(statearr_36832[(13)] = inst_36799);

return statearr_36832;
})();
var statearr_36834_38251 = state_36806__$1;
(statearr_36834_38251[(2)] = inst_36800);

(statearr_36834_38251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (10))){
var inst_36789 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
var statearr_36835_38253 = state_36806__$1;
(statearr_36835_38253[(2)] = inst_36789);

(statearr_36835_38253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (8))){
var inst_36765 = (state_36806[(7)]);
var inst_36773 = (state_36806[(10)]);
var inst_36769 = (state_36806[(9)]);
var inst_36778 = inst_36765.push(inst_36769);
var tmp36831 = inst_36765;
var inst_36765__$1 = tmp36831;
var inst_36766 = inst_36773;
var state_36806__$1 = (function (){var statearr_36837 = state_36806;
(statearr_36837[(7)] = inst_36765__$1);

(statearr_36837[(8)] = inst_36766);

(statearr_36837[(14)] = inst_36778);

return statearr_36837;
})();
var statearr_36838_38255 = state_36806__$1;
(statearr_36838_38255[(2)] = null);

(statearr_36838_38255[(1)] = (2));


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
var statearr_36840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36840[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36840[(1)] = (1));

return statearr_36840;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36806){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36806);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36841){if((e36841 instanceof Object)){
var ex__34210__auto__ = e36841;
var statearr_36842_38257 = state_36806;
(statearr_36842_38257[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36841;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38258 = state_36806;
state_36806 = G__38258;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36844 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36844[(6)] = c__34274__auto___38233);

return statearr_36844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
