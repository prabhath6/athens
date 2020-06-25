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
var G__34325 = arguments.length;
switch (G__34325) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34326 = (function (f,blockable,meta34327){
this.f = f;
this.blockable = blockable;
this.meta34327 = meta34327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34328,meta34327__$1){
var self__ = this;
var _34328__$1 = this;
return (new cljs.core.async.t_cljs$core$async34326(self__.f,self__.blockable,meta34327__$1));
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34328){
var self__ = this;
var _34328__$1 = this;
return self__.meta34327;
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34327","meta34327",-813329371,null)], null);
}));

(cljs.core.async.t_cljs$core$async34326.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34326");

(cljs.core.async.t_cljs$core$async34326.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34326");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34326.
 */
cljs.core.async.__GT_t_cljs$core$async34326 = (function cljs$core$async$__GT_t_cljs$core$async34326(f__$1,blockable__$1,meta34327){
return (new cljs.core.async.t_cljs$core$async34326(f__$1,blockable__$1,meta34327));
});

}

return (new cljs.core.async.t_cljs$core$async34326(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var val_36863 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36863) : fn1.call(null,val_36863));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36863) : fn1.call(null,val_36863));
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
var n__4666__auto___36869 = n;
var x_36870 = (0);
while(true){
if((x_36870 < n__4666__auto___36869)){
(a[x_36870] = x_36870);

var G__36872 = (x_36870 + (1));
x_36870 = G__36872;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34340 = (function (flag,meta34341){
this.flag = flag;
this.meta34341 = meta34341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34342,meta34341__$1){
var self__ = this;
var _34342__$1 = this;
return (new cljs.core.async.t_cljs$core$async34340(self__.flag,meta34341__$1));
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34342){
var self__ = this;
var _34342__$1 = this;
return self__.meta34341;
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34341","meta34341",1249706960,null)], null);
}));

(cljs.core.async.t_cljs$core$async34340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34340");

(cljs.core.async.t_cljs$core$async34340.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34340.
 */
cljs.core.async.__GT_t_cljs$core$async34340 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34340(flag__$1,meta34341){
return (new cljs.core.async.t_cljs$core$async34340(flag__$1,meta34341));
});

}

return (new cljs.core.async.t_cljs$core$async34340(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34344 = (function (flag,cb,meta34345){
this.flag = flag;
this.cb = cb;
this.meta34345 = meta34345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34346,meta34345__$1){
var self__ = this;
var _34346__$1 = this;
return (new cljs.core.async.t_cljs$core$async34344(self__.flag,self__.cb,meta34345__$1));
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34346){
var self__ = this;
var _34346__$1 = this;
return self__.meta34345;
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34345","meta34345",1950465517,null)], null);
}));

(cljs.core.async.t_cljs$core$async34344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34344");

(cljs.core.async.t_cljs$core$async34344.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34344.
 */
cljs.core.async.__GT_t_cljs$core$async34344 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34344(flag__$1,cb__$1,meta34345){
return (new cljs.core.async.t_cljs$core$async34344(flag__$1,cb__$1,meta34345));
});

}

return (new cljs.core.async.t_cljs$core$async34344(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34351_SHARP_){
var G__34357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34351_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34357) : fret.call(null,G__34357));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34352_SHARP_){
var G__34358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34352_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34358) : fret.call(null,G__34358));
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
var G__36882 = (i + (1));
i = G__36882;
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
var len__4789__auto___36884 = arguments.length;
var i__4790__auto___36885 = (0);
while(true){
if((i__4790__auto___36885 < len__4789__auto___36884)){
args__4795__auto__.push((arguments[i__4790__auto___36885]));

var G__36886 = (i__4790__auto___36885 + (1));
i__4790__auto___36885 = G__36886;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34361){
var map__34362 = p__34361;
var map__34362__$1 = (((((!((map__34362 == null))))?(((((map__34362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34362):map__34362);
var opts = map__34362__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34359){
var G__34360 = cljs.core.first(seq34359);
var seq34359__$1 = cljs.core.next(seq34359);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34360,seq34359__$1);
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
var G__34374 = arguments.length;
switch (G__34374) {
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
var c__34267__auto___36892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34404){
var state_val_34405 = (state_34404[(1)]);
if((state_val_34405 === (7))){
var inst_34400 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34406_36894 = state_34404__$1;
(statearr_34406_36894[(2)] = inst_34400);

(statearr_34406_36894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (1))){
var state_34404__$1 = state_34404;
var statearr_34407_36895 = state_34404__$1;
(statearr_34407_36895[(2)] = null);

(statearr_34407_36895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (4))){
var inst_34383 = (state_34404[(7)]);
var inst_34383__$1 = (state_34404[(2)]);
var inst_34384 = (inst_34383__$1 == null);
var state_34404__$1 = (function (){var statearr_34414 = state_34404;
(statearr_34414[(7)] = inst_34383__$1);

return statearr_34414;
})();
if(cljs.core.truth_(inst_34384)){
var statearr_34415_36897 = state_34404__$1;
(statearr_34415_36897[(1)] = (5));

} else {
var statearr_34416_36898 = state_34404__$1;
(statearr_34416_36898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (13))){
var state_34404__$1 = state_34404;
var statearr_34423_36900 = state_34404__$1;
(statearr_34423_36900[(2)] = null);

(statearr_34423_36900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (6))){
var inst_34383 = (state_34404[(7)]);
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34404__$1,(11),to,inst_34383);
} else {
if((state_val_34405 === (3))){
var inst_34402 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34404__$1,inst_34402);
} else {
if((state_val_34405 === (12))){
var state_34404__$1 = state_34404;
var statearr_34424_36902 = state_34404__$1;
(statearr_34424_36902[(2)] = null);

(statearr_34424_36902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (2))){
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34404__$1,(4),from);
} else {
if((state_val_34405 === (11))){
var inst_34393 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
if(cljs.core.truth_(inst_34393)){
var statearr_34425_36903 = state_34404__$1;
(statearr_34425_36903[(1)] = (12));

} else {
var statearr_34426_36905 = state_34404__$1;
(statearr_34426_36905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (9))){
var state_34404__$1 = state_34404;
var statearr_34427_36906 = state_34404__$1;
(statearr_34427_36906[(2)] = null);

(statearr_34427_36906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (5))){
var state_34404__$1 = state_34404;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34428_36907 = state_34404__$1;
(statearr_34428_36907[(1)] = (8));

} else {
var statearr_34429_36909 = state_34404__$1;
(statearr_34429_36909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (14))){
var inst_34398 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34430_36910 = state_34404__$1;
(statearr_34430_36910[(2)] = inst_34398);

(statearr_34430_36910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (10))){
var inst_34390 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34431_36911 = state_34404__$1;
(statearr_34431_36911[(2)] = inst_34390);

(statearr_34431_36911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (8))){
var inst_34387 = cljs.core.async.close_BANG_(to);
var state_34404__$1 = state_34404;
var statearr_34432_36913 = state_34404__$1;
(statearr_34432_36913[(2)] = inst_34387);

(statearr_34432_36913[(1)] = (10));


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
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34404){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34404);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34434){if((e34434 instanceof Object)){
var ex__34203__auto__ = e34434;
var statearr_34435_36915 = state_34404;
(statearr_34435_36915[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36917 = state_34404;
state_34404 = G__36917;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34436 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34436[(6)] = c__34267__auto___36892);

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
var process = (function (p__34437){
var vec__34438 = p__34437;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34438,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34438,(1),null);
var job = vec__34438;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34267__auto___36923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34445){
var state_val_34446 = (state_34445[(1)]);
if((state_val_34446 === (1))){
var state_34445__$1 = state_34445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34445__$1,(2),res,v);
} else {
if((state_val_34446 === (2))){
var inst_34442 = (state_34445[(2)]);
var inst_34443 = cljs.core.async.close_BANG_(res);
var state_34445__$1 = (function (){var statearr_34447 = state_34445;
(statearr_34447[(7)] = inst_34442);

return statearr_34447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34445__$1,inst_34443);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34448 = [null,null,null,null,null,null,null,null];
(statearr_34448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34448[(1)] = (1));

return statearr_34448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34445){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34445);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34449){if((e34449 instanceof Object)){
var ex__34203__auto__ = e34449;
var statearr_34450_36927 = state_34445;
(statearr_34450_36927[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36928 = state_34445;
state_34445 = G__36928;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34451 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34451[(6)] = c__34267__auto___36923);

return statearr_34451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34452){
var vec__34453 = p__34452;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34453,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34453,(1),null);
var job = vec__34453;
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
var n__4666__auto___36933 = n;
var __36934 = (0);
while(true){
if((__36934 < n__4666__auto___36933)){
var G__34456_36935 = type;
var G__34456_36936__$1 = (((G__34456_36935 instanceof cljs.core.Keyword))?G__34456_36935.fqn:null);
switch (G__34456_36936__$1) {
case "compute":
var c__34267__auto___36939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36934,c__34267__auto___36939,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36934,c__34267__auto___36939,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async){
return (function (state_34473){
var state_val_34474 = (state_34473[(1)]);
if((state_val_34474 === (1))){
var state_34473__$1 = state_34473;
var statearr_34475_36943 = state_34473__$1;
(statearr_34475_36943[(2)] = null);

(statearr_34475_36943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (2))){
var state_34473__$1 = state_34473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34473__$1,(4),jobs);
} else {
if((state_val_34474 === (3))){
var inst_34471 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34473__$1,inst_34471);
} else {
if((state_val_34474 === (4))){
var inst_34463 = (state_34473[(2)]);
var inst_34464 = process(inst_34463);
var state_34473__$1 = state_34473;
if(cljs.core.truth_(inst_34464)){
var statearr_34477_36947 = state_34473__$1;
(statearr_34477_36947[(1)] = (5));

} else {
var statearr_34478_36948 = state_34473__$1;
(statearr_34478_36948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (5))){
var state_34473__$1 = state_34473;
var statearr_34479_36949 = state_34473__$1;
(statearr_34479_36949[(2)] = null);

(statearr_34479_36949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (6))){
var state_34473__$1 = state_34473;
var statearr_34480_36950 = state_34473__$1;
(statearr_34480_36950[(2)] = null);

(statearr_34480_36950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (7))){
var inst_34469 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34481_36951 = state_34473__$1;
(statearr_34481_36951[(2)] = inst_34469);

(statearr_34481_36951[(1)] = (3));


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
});})(__36934,c__34267__auto___36939,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async))
;
return ((function (__36934,switch__34199__auto__,c__34267__auto___36939,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34482 = [null,null,null,null,null,null,null];
(statearr_34482[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34482[(1)] = (1));

return statearr_34482;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34473){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34473);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34483){if((e34483 instanceof Object)){
var ex__34203__auto__ = e34483;
var statearr_34484_36956 = state_34473;
(statearr_34484_36956[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36959 = state_34473;
state_34473 = G__36959;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34473){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36934,switch__34199__auto__,c__34267__auto___36939,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34486 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34486[(6)] = c__34267__auto___36939);

return statearr_34486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36934,c__34267__auto___36939,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async))
);


break;
case "async":
var c__34267__auto___36960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36934,c__34267__auto___36960,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36934,c__34267__auto___36960,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async){
return (function (state_34500){
var state_val_34501 = (state_34500[(1)]);
if((state_val_34501 === (1))){
var state_34500__$1 = state_34500;
var statearr_34502_36963 = state_34500__$1;
(statearr_34502_36963[(2)] = null);

(statearr_34502_36963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (2))){
var state_34500__$1 = state_34500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34500__$1,(4),jobs);
} else {
if((state_val_34501 === (3))){
var inst_34498 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34500__$1,inst_34498);
} else {
if((state_val_34501 === (4))){
var inst_34489 = (state_34500[(2)]);
var inst_34491 = async(inst_34489);
var state_34500__$1 = state_34500;
if(cljs.core.truth_(inst_34491)){
var statearr_34504_36970 = state_34500__$1;
(statearr_34504_36970[(1)] = (5));

} else {
var statearr_34505_36972 = state_34500__$1;
(statearr_34505_36972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (5))){
var state_34500__$1 = state_34500;
var statearr_34506_36973 = state_34500__$1;
(statearr_34506_36973[(2)] = null);

(statearr_34506_36973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (6))){
var state_34500__$1 = state_34500;
var statearr_34507_36976 = state_34500__$1;
(statearr_34507_36976[(2)] = null);

(statearr_34507_36976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (7))){
var inst_34496 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34510_36979 = state_34500__$1;
(statearr_34510_36979[(2)] = inst_34496);

(statearr_34510_36979[(1)] = (3));


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
});})(__36934,c__34267__auto___36960,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async))
;
return ((function (__36934,switch__34199__auto__,c__34267__auto___36960,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34514 = [null,null,null,null,null,null,null];
(statearr_34514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34514[(1)] = (1));

return statearr_34514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34500){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34500);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34517){if((e34517 instanceof Object)){
var ex__34203__auto__ = e34517;
var statearr_34518_36990 = state_34500;
(statearr_34518_36990[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36994 = state_34500;
state_34500 = G__36994;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36934,switch__34199__auto__,c__34267__auto___36960,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34519 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34519[(6)] = c__34267__auto___36960);

return statearr_34519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36934,c__34267__auto___36960,G__34456_36935,G__34456_36936__$1,n__4666__auto___36933,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34456_36936__$1)].join('')));

}

var G__36997 = (__36934 + (1));
__36934 = G__36997;
continue;
} else {
}
break;
}

var c__34267__auto___36998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34542){
var state_val_34543 = (state_34542[(1)]);
if((state_val_34543 === (7))){
var inst_34537 = (state_34542[(2)]);
var state_34542__$1 = state_34542;
var statearr_34548_37004 = state_34542__$1;
(statearr_34548_37004[(2)] = inst_34537);

(statearr_34548_37004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (1))){
var state_34542__$1 = state_34542;
var statearr_34549_37007 = state_34542__$1;
(statearr_34549_37007[(2)] = null);

(statearr_34549_37007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (4))){
var inst_34522 = (state_34542[(7)]);
var inst_34522__$1 = (state_34542[(2)]);
var inst_34523 = (inst_34522__$1 == null);
var state_34542__$1 = (function (){var statearr_34553 = state_34542;
(statearr_34553[(7)] = inst_34522__$1);

return statearr_34553;
})();
if(cljs.core.truth_(inst_34523)){
var statearr_34554_37012 = state_34542__$1;
(statearr_34554_37012[(1)] = (5));

} else {
var statearr_34555_37013 = state_34542__$1;
(statearr_34555_37013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (6))){
var inst_34527 = (state_34542[(8)]);
var inst_34522 = (state_34542[(7)]);
var inst_34527__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34529 = [inst_34522,inst_34527__$1];
var inst_34530 = (new cljs.core.PersistentVector(null,2,(5),inst_34528,inst_34529,null));
var state_34542__$1 = (function (){var statearr_34556 = state_34542;
(statearr_34556[(8)] = inst_34527__$1);

return statearr_34556;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34542__$1,(8),jobs,inst_34530);
} else {
if((state_val_34543 === (3))){
var inst_34539 = (state_34542[(2)]);
var state_34542__$1 = state_34542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34542__$1,inst_34539);
} else {
if((state_val_34543 === (2))){
var state_34542__$1 = state_34542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34542__$1,(4),from);
} else {
if((state_val_34543 === (9))){
var inst_34534 = (state_34542[(2)]);
var state_34542__$1 = (function (){var statearr_34557 = state_34542;
(statearr_34557[(9)] = inst_34534);

return statearr_34557;
})();
var statearr_34558_37027 = state_34542__$1;
(statearr_34558_37027[(2)] = null);

(statearr_34558_37027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (5))){
var inst_34525 = cljs.core.async.close_BANG_(jobs);
var state_34542__$1 = state_34542;
var statearr_34559_37030 = state_34542__$1;
(statearr_34559_37030[(2)] = inst_34525);

(statearr_34559_37030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (8))){
var inst_34527 = (state_34542[(8)]);
var inst_34532 = (state_34542[(2)]);
var state_34542__$1 = (function (){var statearr_34560 = state_34542;
(statearr_34560[(10)] = inst_34532);

return statearr_34560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34542__$1,(9),results,inst_34527);
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
var statearr_34561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34561[(1)] = (1));

return statearr_34561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34542){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34542);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34562){if((e34562 instanceof Object)){
var ex__34203__auto__ = e34562;
var statearr_34563_37034 = state_34542;
(statearr_34563_37034[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37038 = state_34542;
state_34542 = G__37038;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34542){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34564 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34564[(6)] = c__34267__auto___36998);

return statearr_34564;
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
var statearr_34607_37044 = state_34605__$1;
(statearr_34607_37044[(2)] = inst_34601);

(statearr_34607_37044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (20))){
var state_34605__$1 = state_34605;
var statearr_34608_37051 = state_34605__$1;
(statearr_34608_37051[(2)] = null);

(statearr_34608_37051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34609_37054 = state_34605__$1;
(statearr_34609_37054[(2)] = null);

(statearr_34609_37054[(1)] = (2));


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
var statearr_34611_37057 = state_34605__$1;
(statearr_34611_37057[(1)] = (5));

} else {
var statearr_34612_37058 = state_34605__$1;
(statearr_34612_37058[(1)] = (6));

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
var statearr_34613_37060 = state_34605__$1;
(statearr_34613_37060[(2)] = inst_34596);

(statearr_34613_37060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (13))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34614 = state_34605;
(statearr_34614[(9)] = inst_34598);

return statearr_34614;
})();
var statearr_34615_37063 = state_34605__$1;
(statearr_34615_37063[(2)] = null);

(statearr_34615_37063[(1)] = (2));


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
var statearr_34616_37066 = state_34605__$1;
(statearr_34616_37066[(1)] = (19));

} else {
var statearr_34617_37068 = state_34605__$1;
(statearr_34617_37068[(1)] = (20));

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
var statearr_34618_37071 = state_34605__$1;
(statearr_34618_37071[(2)] = null);

(statearr_34618_37071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (11))){
var inst_34580 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34619 = state_34605;
(statearr_34619[(10)] = inst_34580);

return statearr_34619;
})();
var statearr_34620_37079 = state_34605__$1;
(statearr_34620_37079[(2)] = null);

(statearr_34620_37079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var state_34605__$1 = state_34605;
var statearr_34621_37080 = state_34605__$1;
(statearr_34621_37080[(2)] = null);

(statearr_34621_37080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var state_34605__$1 = state_34605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34622_37082 = state_34605__$1;
(statearr_34622_37082[(1)] = (8));

} else {
var statearr_34623_37083 = state_34605__$1;
(statearr_34623_37083[(1)] = (9));

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
var statearr_34625_37087 = state_34605__$1;
(statearr_34625_37087[(1)] = (15));

} else {
var statearr_34626_37088 = state_34605__$1;
(statearr_34626_37088[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (16))){
var state_34605__$1 = state_34605;
var statearr_34627_37089 = state_34605__$1;
(statearr_34627_37089[(2)] = false);

(statearr_34627_37089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34577 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34628_37093 = state_34605__$1;
(statearr_34628_37093[(2)] = inst_34577);

(statearr_34628_37093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (18))){
var inst_34588 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34629_37098 = state_34605__$1;
(statearr_34629_37098[(2)] = inst_34588);

(statearr_34629_37098[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34574 = cljs.core.async.close_BANG_(to);
var state_34605__$1 = state_34605;
var statearr_34630_37099 = state_34605__$1;
(statearr_34630_37099[(2)] = inst_34574);

(statearr_34630_37099[(1)] = (10));


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
var statearr_34633_37103 = state_34605;
(statearr_34633_37103[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37105 = state_34605;
state_34605 = G__37105;
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
var G__34640 = arguments.length;
switch (G__34640) {
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
var c__34267__auto___37130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34666){
var state_val_34667 = (state_34666[(1)]);
if((state_val_34667 === (7))){
var inst_34662 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34668_37135 = state_34666__$1;
(statearr_34668_37135[(2)] = inst_34662);

(statearr_34668_37135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (1))){
var state_34666__$1 = state_34666;
var statearr_34669_37139 = state_34666__$1;
(statearr_34669_37139[(2)] = null);

(statearr_34669_37139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (4))){
var inst_34643 = (state_34666[(7)]);
var inst_34643__$1 = (state_34666[(2)]);
var inst_34644 = (inst_34643__$1 == null);
var state_34666__$1 = (function (){var statearr_34670 = state_34666;
(statearr_34670[(7)] = inst_34643__$1);

return statearr_34670;
})();
if(cljs.core.truth_(inst_34644)){
var statearr_34671_37144 = state_34666__$1;
(statearr_34671_37144[(1)] = (5));

} else {
var statearr_34672_37146 = state_34666__$1;
(statearr_34672_37146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (13))){
var state_34666__$1 = state_34666;
var statearr_34673_37149 = state_34666__$1;
(statearr_34673_37149[(2)] = null);

(statearr_34673_37149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (6))){
var inst_34643 = (state_34666[(7)]);
var inst_34649 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34643) : p.call(null,inst_34643));
var state_34666__$1 = state_34666;
if(cljs.core.truth_(inst_34649)){
var statearr_34677_37155 = state_34666__$1;
(statearr_34677_37155[(1)] = (9));

} else {
var statearr_34678_37156 = state_34666__$1;
(statearr_34678_37156[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (3))){
var inst_34664 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34666__$1,inst_34664);
} else {
if((state_val_34667 === (12))){
var state_34666__$1 = state_34666;
var statearr_34679_37159 = state_34666__$1;
(statearr_34679_37159[(2)] = null);

(statearr_34679_37159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (2))){
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34666__$1,(4),ch);
} else {
if((state_val_34667 === (11))){
var inst_34643 = (state_34666[(7)]);
var inst_34653 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34666__$1,(8),inst_34653,inst_34643);
} else {
if((state_val_34667 === (9))){
var state_34666__$1 = state_34666;
var statearr_34680_37164 = state_34666__$1;
(statearr_34680_37164[(2)] = tc);

(statearr_34680_37164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (5))){
var inst_34646 = cljs.core.async.close_BANG_(tc);
var inst_34647 = cljs.core.async.close_BANG_(fc);
var state_34666__$1 = (function (){var statearr_34684 = state_34666;
(statearr_34684[(8)] = inst_34646);

return statearr_34684;
})();
var statearr_34685_37171 = state_34666__$1;
(statearr_34685_37171[(2)] = inst_34647);

(statearr_34685_37171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (14))){
var inst_34660 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34688_37177 = state_34666__$1;
(statearr_34688_37177[(2)] = inst_34660);

(statearr_34688_37177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (10))){
var state_34666__$1 = state_34666;
var statearr_34689_37178 = state_34666__$1;
(statearr_34689_37178[(2)] = fc);

(statearr_34689_37178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (8))){
var inst_34655 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
if(cljs.core.truth_(inst_34655)){
var statearr_34690_37181 = state_34666__$1;
(statearr_34690_37181[(1)] = (12));

} else {
var statearr_34692_37182 = state_34666__$1;
(statearr_34692_37182[(1)] = (13));

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
var statearr_34693 = [null,null,null,null,null,null,null,null,null];
(statearr_34693[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34693[(1)] = (1));

return statearr_34693;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34666){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34666);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34694){if((e34694 instanceof Object)){
var ex__34203__auto__ = e34694;
var statearr_34695_37186 = state_34666;
(statearr_34695_37186[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34694;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37187 = state_34666;
state_34666 = G__37187;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34698 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34698[(6)] = c__34267__auto___37130);

return statearr_34698;
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34720){
var state_val_34721 = (state_34720[(1)]);
if((state_val_34721 === (7))){
var inst_34716 = (state_34720[(2)]);
var state_34720__$1 = state_34720;
var statearr_34723_37194 = state_34720__$1;
(statearr_34723_37194[(2)] = inst_34716);

(statearr_34723_37194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (1))){
var inst_34699 = init;
var state_34720__$1 = (function (){var statearr_34724 = state_34720;
(statearr_34724[(7)] = inst_34699);

return statearr_34724;
})();
var statearr_34725_37196 = state_34720__$1;
(statearr_34725_37196[(2)] = null);

(statearr_34725_37196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (4))){
var inst_34703 = (state_34720[(8)]);
var inst_34703__$1 = (state_34720[(2)]);
var inst_34704 = (inst_34703__$1 == null);
var state_34720__$1 = (function (){var statearr_34728 = state_34720;
(statearr_34728[(8)] = inst_34703__$1);

return statearr_34728;
})();
if(cljs.core.truth_(inst_34704)){
var statearr_34729_37200 = state_34720__$1;
(statearr_34729_37200[(1)] = (5));

} else {
var statearr_34730_37202 = state_34720__$1;
(statearr_34730_37202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (6))){
var inst_34703 = (state_34720[(8)]);
var inst_34699 = (state_34720[(7)]);
var inst_34707 = (state_34720[(9)]);
var inst_34707__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34699,inst_34703) : f.call(null,inst_34699,inst_34703));
var inst_34708 = cljs.core.reduced_QMARK_(inst_34707__$1);
var state_34720__$1 = (function (){var statearr_34732 = state_34720;
(statearr_34732[(9)] = inst_34707__$1);

return statearr_34732;
})();
if(inst_34708){
var statearr_34735_37204 = state_34720__$1;
(statearr_34735_37204[(1)] = (8));

} else {
var statearr_34736_37205 = state_34720__$1;
(statearr_34736_37205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (3))){
var inst_34718 = (state_34720[(2)]);
var state_34720__$1 = state_34720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34720__$1,inst_34718);
} else {
if((state_val_34721 === (2))){
var state_34720__$1 = state_34720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34720__$1,(4),ch);
} else {
if((state_val_34721 === (9))){
var inst_34707 = (state_34720[(9)]);
var inst_34699 = inst_34707;
var state_34720__$1 = (function (){var statearr_34737 = state_34720;
(statearr_34737[(7)] = inst_34699);

return statearr_34737;
})();
var statearr_34738_37213 = state_34720__$1;
(statearr_34738_37213[(2)] = null);

(statearr_34738_37213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (5))){
var inst_34699 = (state_34720[(7)]);
var state_34720__$1 = state_34720;
var statearr_34739_37215 = state_34720__$1;
(statearr_34739_37215[(2)] = inst_34699);

(statearr_34739_37215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (10))){
var inst_34714 = (state_34720[(2)]);
var state_34720__$1 = state_34720;
var statearr_34740_37220 = state_34720__$1;
(statearr_34740_37220[(2)] = inst_34714);

(statearr_34740_37220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34721 === (8))){
var inst_34707 = (state_34720[(9)]);
var inst_34710 = cljs.core.deref(inst_34707);
var state_34720__$1 = state_34720;
var statearr_34742_37222 = state_34720__$1;
(statearr_34742_37222[(2)] = inst_34710);

(statearr_34742_37222[(1)] = (10));


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
var statearr_34743 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34743[(0)] = cljs$core$async$reduce_$_state_machine__34200__auto__);

(statearr_34743[(1)] = (1));

return statearr_34743;
});
var cljs$core$async$reduce_$_state_machine__34200__auto____1 = (function (state_34720){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34720);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34744){if((e34744 instanceof Object)){
var ex__34203__auto__ = e34744;
var statearr_34745_37230 = state_34720;
(statearr_34745_37230[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37234 = state_34720;
state_34720 = G__37234;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34200__auto__ = function(state_34720){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34200__auto____1.call(this,state_34720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34200__auto____0;
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34200__auto____1;
return cljs$core$async$reduce_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34746 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34746[(6)] = c__34267__auto__);

return statearr_34746;
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34755){
var state_val_34756 = (state_34755[(1)]);
if((state_val_34756 === (1))){
var inst_34750 = cljs.core.async.reduce(f__$1,init,ch);
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34755__$1,(2),inst_34750);
} else {
if((state_val_34756 === (2))){
var inst_34752 = (state_34755[(2)]);
var inst_34753 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34752) : f__$1.call(null,inst_34752));
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34755__$1,inst_34753);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34200__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34200__auto____0 = (function (){
var statearr_34760 = [null,null,null,null,null,null,null];
(statearr_34760[(0)] = cljs$core$async$transduce_$_state_machine__34200__auto__);

(statearr_34760[(1)] = (1));

return statearr_34760;
});
var cljs$core$async$transduce_$_state_machine__34200__auto____1 = (function (state_34755){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34755);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34761){if((e34761 instanceof Object)){
var ex__34203__auto__ = e34761;
var statearr_34762_37251 = state_34755;
(statearr_34762_37251[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37253 = state_34755;
state_34755 = G__37253;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34200__auto__ = function(state_34755){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34200__auto____1.call(this,state_34755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34200__auto____0;
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34200__auto____1;
return cljs$core$async$transduce_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34763 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34763[(6)] = c__34267__auto__);

return statearr_34763;
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34793){
var state_val_34794 = (state_34793[(1)]);
if((state_val_34794 === (7))){
var inst_34775 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34795_37261 = state_34793__$1;
(statearr_34795_37261[(2)] = inst_34775);

(statearr_34795_37261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (1))){
var inst_34769 = cljs.core.seq(coll);
var inst_34770 = inst_34769;
var state_34793__$1 = (function (){var statearr_34796 = state_34793;
(statearr_34796[(7)] = inst_34770);

return statearr_34796;
})();
var statearr_34797_37262 = state_34793__$1;
(statearr_34797_37262[(2)] = null);

(statearr_34797_37262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (4))){
var inst_34770 = (state_34793[(7)]);
var inst_34773 = cljs.core.first(inst_34770);
var state_34793__$1 = state_34793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34793__$1,(7),ch,inst_34773);
} else {
if((state_val_34794 === (13))){
var inst_34787 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34798_37264 = state_34793__$1;
(statearr_34798_37264[(2)] = inst_34787);

(statearr_34798_37264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (6))){
var inst_34778 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
if(cljs.core.truth_(inst_34778)){
var statearr_34799_37268 = state_34793__$1;
(statearr_34799_37268[(1)] = (8));

} else {
var statearr_34800_37269 = state_34793__$1;
(statearr_34800_37269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (3))){
var inst_34791 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34793__$1,inst_34791);
} else {
if((state_val_34794 === (12))){
var state_34793__$1 = state_34793;
var statearr_34801_37275 = state_34793__$1;
(statearr_34801_37275[(2)] = null);

(statearr_34801_37275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (2))){
var inst_34770 = (state_34793[(7)]);
var state_34793__$1 = state_34793;
if(cljs.core.truth_(inst_34770)){
var statearr_34802_37278 = state_34793__$1;
(statearr_34802_37278[(1)] = (4));

} else {
var statearr_34803_37279 = state_34793__$1;
(statearr_34803_37279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (11))){
var inst_34784 = cljs.core.async.close_BANG_(ch);
var state_34793__$1 = state_34793;
var statearr_34804_37282 = state_34793__$1;
(statearr_34804_37282[(2)] = inst_34784);

(statearr_34804_37282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (9))){
var state_34793__$1 = state_34793;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34805_37284 = state_34793__$1;
(statearr_34805_37284[(1)] = (11));

} else {
var statearr_34806_37286 = state_34793__$1;
(statearr_34806_37286[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (5))){
var inst_34770 = (state_34793[(7)]);
var state_34793__$1 = state_34793;
var statearr_34810_37291 = state_34793__$1;
(statearr_34810_37291[(2)] = inst_34770);

(statearr_34810_37291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (10))){
var inst_34789 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34811_37297 = state_34793__$1;
(statearr_34811_37297[(2)] = inst_34789);

(statearr_34811_37297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (8))){
var inst_34770 = (state_34793[(7)]);
var inst_34780 = cljs.core.next(inst_34770);
var inst_34770__$1 = inst_34780;
var state_34793__$1 = (function (){var statearr_34815 = state_34793;
(statearr_34815[(7)] = inst_34770__$1);

return statearr_34815;
})();
var statearr_34816_37300 = state_34793__$1;
(statearr_34816_37300[(2)] = null);

(statearr_34816_37300[(1)] = (2));


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
var statearr_34818 = [null,null,null,null,null,null,null,null];
(statearr_34818[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34818[(1)] = (1));

return statearr_34818;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34793){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34793);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34819){if((e34819 instanceof Object)){
var ex__34203__auto__ = e34819;
var statearr_34820_37310 = state_34793;
(statearr_34820_37310[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37311 = state_34793;
state_34793 = G__37311;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34821 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34821[(6)] = c__34267__auto__);

return statearr_34821;
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
var c__34267__auto___37362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34971){
var state_val_34972 = (state_34971[(1)]);
if((state_val_34972 === (7))){
var inst_34967 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34973_37364 = state_34971__$1;
(statearr_34973_37364[(2)] = inst_34967);

(statearr_34973_37364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (20))){
var inst_34870 = (state_34971[(7)]);
var inst_34882 = cljs.core.first(inst_34870);
var inst_34883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(0),null);
var inst_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(1),null);
var state_34971__$1 = (function (){var statearr_34974 = state_34971;
(statearr_34974[(8)] = inst_34883);

return statearr_34974;
})();
if(cljs.core.truth_(inst_34884)){
var statearr_34975_37367 = state_34971__$1;
(statearr_34975_37367[(1)] = (22));

} else {
var statearr_34976_37368 = state_34971__$1;
(statearr_34976_37368[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (27))){
var inst_34914 = (state_34971[(9)]);
var inst_34919 = (state_34971[(10)]);
var inst_34912 = (state_34971[(11)]);
var inst_34839 = (state_34971[(12)]);
var inst_34919__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34912,inst_34914);
var inst_34920 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34919__$1,inst_34839,done);
var state_34971__$1 = (function (){var statearr_34980 = state_34971;
(statearr_34980[(10)] = inst_34919__$1);

return statearr_34980;
})();
if(cljs.core.truth_(inst_34920)){
var statearr_34982_37376 = state_34971__$1;
(statearr_34982_37376[(1)] = (30));

} else {
var statearr_34984_37377 = state_34971__$1;
(statearr_34984_37377[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (1))){
var state_34971__$1 = state_34971;
var statearr_34986_37378 = state_34971__$1;
(statearr_34986_37378[(2)] = null);

(statearr_34986_37378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (24))){
var inst_34870 = (state_34971[(7)]);
var inst_34889 = (state_34971[(2)]);
var inst_34890 = cljs.core.next(inst_34870);
var inst_34848 = inst_34890;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34971__$1 = (function (){var statearr_34987 = state_34971;
(statearr_34987[(13)] = inst_34848);

(statearr_34987[(14)] = inst_34849);

(statearr_34987[(15)] = inst_34851);

(statearr_34987[(16)] = inst_34850);

(statearr_34987[(17)] = inst_34889);

return statearr_34987;
})();
var statearr_34988_37383 = state_34971__$1;
(statearr_34988_37383[(2)] = null);

(statearr_34988_37383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (39))){
var state_34971__$1 = state_34971;
var statearr_34992_37385 = state_34971__$1;
(statearr_34992_37385[(2)] = null);

(statearr_34992_37385[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (4))){
var inst_34839 = (state_34971[(12)]);
var inst_34839__$1 = (state_34971[(2)]);
var inst_34840 = (inst_34839__$1 == null);
var state_34971__$1 = (function (){var statearr_34993 = state_34971;
(statearr_34993[(12)] = inst_34839__$1);

return statearr_34993;
})();
if(cljs.core.truth_(inst_34840)){
var statearr_34994_37387 = state_34971__$1;
(statearr_34994_37387[(1)] = (5));

} else {
var statearr_34995_37390 = state_34971__$1;
(statearr_34995_37390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (15))){
var inst_34848 = (state_34971[(13)]);
var inst_34849 = (state_34971[(14)]);
var inst_34851 = (state_34971[(15)]);
var inst_34850 = (state_34971[(16)]);
var inst_34866 = (state_34971[(2)]);
var inst_34867 = (inst_34851 + (1));
var tmp34989 = inst_34848;
var tmp34990 = inst_34849;
var tmp34991 = inst_34850;
var inst_34848__$1 = tmp34989;
var inst_34849__$1 = tmp34990;
var inst_34850__$1 = tmp34991;
var inst_34851__$1 = inst_34867;
var state_34971__$1 = (function (){var statearr_35000 = state_34971;
(statearr_35000[(13)] = inst_34848__$1);

(statearr_35000[(18)] = inst_34866);

(statearr_35000[(14)] = inst_34849__$1);

(statearr_35000[(15)] = inst_34851__$1);

(statearr_35000[(16)] = inst_34850__$1);

return statearr_35000;
})();
var statearr_35002_37397 = state_34971__$1;
(statearr_35002_37397[(2)] = null);

(statearr_35002_37397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (21))){
var inst_34893 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35007_37398 = state_34971__$1;
(statearr_35007_37398[(2)] = inst_34893);

(statearr_35007_37398[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (31))){
var inst_34919 = (state_34971[(10)]);
var inst_34923 = done(null);
var inst_34924 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34919);
var state_34971__$1 = (function (){var statearr_35008 = state_34971;
(statearr_35008[(19)] = inst_34923);

return statearr_35008;
})();
var statearr_35009_37402 = state_34971__$1;
(statearr_35009_37402[(2)] = inst_34924);

(statearr_35009_37402[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (32))){
var inst_34914 = (state_34971[(9)]);
var inst_34913 = (state_34971[(20)]);
var inst_34912 = (state_34971[(11)]);
var inst_34911 = (state_34971[(21)]);
var inst_34926 = (state_34971[(2)]);
var inst_34927 = (inst_34914 + (1));
var tmp35004 = inst_34913;
var tmp35005 = inst_34912;
var tmp35006 = inst_34911;
var inst_34911__$1 = tmp35006;
var inst_34912__$1 = tmp35005;
var inst_34913__$1 = tmp35004;
var inst_34914__$1 = inst_34927;
var state_34971__$1 = (function (){var statearr_35010 = state_34971;
(statearr_35010[(9)] = inst_34914__$1);

(statearr_35010[(22)] = inst_34926);

(statearr_35010[(20)] = inst_34913__$1);

(statearr_35010[(11)] = inst_34912__$1);

(statearr_35010[(21)] = inst_34911__$1);

return statearr_35010;
})();
var statearr_35013_37415 = state_34971__$1;
(statearr_35013_37415[(2)] = null);

(statearr_35013_37415[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (40))){
var inst_34939 = (state_34971[(23)]);
var inst_34943 = done(null);
var inst_34944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34939);
var state_34971__$1 = (function (){var statearr_35016 = state_34971;
(statearr_35016[(24)] = inst_34943);

return statearr_35016;
})();
var statearr_35017_37421 = state_34971__$1;
(statearr_35017_37421[(2)] = inst_34944);

(statearr_35017_37421[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (33))){
var inst_34930 = (state_34971[(25)]);
var inst_34932 = cljs.core.chunked_seq_QMARK_(inst_34930);
var state_34971__$1 = state_34971;
if(inst_34932){
var statearr_35020_37429 = state_34971__$1;
(statearr_35020_37429[(1)] = (36));

} else {
var statearr_35021_37431 = state_34971__$1;
(statearr_35021_37431[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (13))){
var inst_34860 = (state_34971[(26)]);
var inst_34863 = cljs.core.async.close_BANG_(inst_34860);
var state_34971__$1 = state_34971;
var statearr_35022_37433 = state_34971__$1;
(statearr_35022_37433[(2)] = inst_34863);

(statearr_35022_37433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (22))){
var inst_34883 = (state_34971[(8)]);
var inst_34886 = cljs.core.async.close_BANG_(inst_34883);
var state_34971__$1 = state_34971;
var statearr_35023_37436 = state_34971__$1;
(statearr_35023_37436[(2)] = inst_34886);

(statearr_35023_37436[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (36))){
var inst_34930 = (state_34971[(25)]);
var inst_34934 = cljs.core.chunk_first(inst_34930);
var inst_34935 = cljs.core.chunk_rest(inst_34930);
var inst_34936 = cljs.core.count(inst_34934);
var inst_34911 = inst_34935;
var inst_34912 = inst_34934;
var inst_34913 = inst_34936;
var inst_34914 = (0);
var state_34971__$1 = (function (){var statearr_35024 = state_34971;
(statearr_35024[(9)] = inst_34914);

(statearr_35024[(20)] = inst_34913);

(statearr_35024[(11)] = inst_34912);

(statearr_35024[(21)] = inst_34911);

return statearr_35024;
})();
var statearr_35027_37448 = state_34971__$1;
(statearr_35027_37448[(2)] = null);

(statearr_35027_37448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (41))){
var inst_34930 = (state_34971[(25)]);
var inst_34946 = (state_34971[(2)]);
var inst_34947 = cljs.core.next(inst_34930);
var inst_34911 = inst_34947;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34971__$1 = (function (){var statearr_35030 = state_34971;
(statearr_35030[(27)] = inst_34946);

(statearr_35030[(9)] = inst_34914);

(statearr_35030[(20)] = inst_34913);

(statearr_35030[(11)] = inst_34912);

(statearr_35030[(21)] = inst_34911);

return statearr_35030;
})();
var statearr_35033_37456 = state_34971__$1;
(statearr_35033_37456[(2)] = null);

(statearr_35033_37456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (43))){
var state_34971__$1 = state_34971;
var statearr_35034_37458 = state_34971__$1;
(statearr_35034_37458[(2)] = null);

(statearr_35034_37458[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (29))){
var inst_34955 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35035_37460 = state_34971__$1;
(statearr_35035_37460[(2)] = inst_34955);

(statearr_35035_37460[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (44))){
var inst_34964 = (state_34971[(2)]);
var state_34971__$1 = (function (){var statearr_35037 = state_34971;
(statearr_35037[(28)] = inst_34964);

return statearr_35037;
})();
var statearr_35040_37466 = state_34971__$1;
(statearr_35040_37466[(2)] = null);

(statearr_35040_37466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (6))){
var inst_34903 = (state_34971[(29)]);
var inst_34902 = cljs.core.deref(cs);
var inst_34903__$1 = cljs.core.keys(inst_34902);
var inst_34904 = cljs.core.count(inst_34903__$1);
var inst_34905 = cljs.core.reset_BANG_(dctr,inst_34904);
var inst_34910 = cljs.core.seq(inst_34903__$1);
var inst_34911 = inst_34910;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34971__$1 = (function (){var statearr_35042 = state_34971;
(statearr_35042[(30)] = inst_34905);

(statearr_35042[(9)] = inst_34914);

(statearr_35042[(20)] = inst_34913);

(statearr_35042[(29)] = inst_34903__$1);

(statearr_35042[(11)] = inst_34912);

(statearr_35042[(21)] = inst_34911);

return statearr_35042;
})();
var statearr_35056_37475 = state_34971__$1;
(statearr_35056_37475[(2)] = null);

(statearr_35056_37475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (28))){
var inst_34930 = (state_34971[(25)]);
var inst_34911 = (state_34971[(21)]);
var inst_34930__$1 = cljs.core.seq(inst_34911);
var state_34971__$1 = (function (){var statearr_35059 = state_34971;
(statearr_35059[(25)] = inst_34930__$1);

return statearr_35059;
})();
if(inst_34930__$1){
var statearr_35060_37479 = state_34971__$1;
(statearr_35060_37479[(1)] = (33));

} else {
var statearr_35062_37480 = state_34971__$1;
(statearr_35062_37480[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (25))){
var inst_34914 = (state_34971[(9)]);
var inst_34913 = (state_34971[(20)]);
var inst_34916 = (inst_34914 < inst_34913);
var inst_34917 = inst_34916;
var state_34971__$1 = state_34971;
if(cljs.core.truth_(inst_34917)){
var statearr_35066_37487 = state_34971__$1;
(statearr_35066_37487[(1)] = (27));

} else {
var statearr_35067_37488 = state_34971__$1;
(statearr_35067_37488[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (34))){
var state_34971__$1 = state_34971;
var statearr_35074_37490 = state_34971__$1;
(statearr_35074_37490[(2)] = null);

(statearr_35074_37490[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (17))){
var state_34971__$1 = state_34971;
var statearr_35079_37492 = state_34971__$1;
(statearr_35079_37492[(2)] = null);

(statearr_35079_37492[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (3))){
var inst_34969 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34971__$1,inst_34969);
} else {
if((state_val_34972 === (12))){
var inst_34898 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35087_37499 = state_34971__$1;
(statearr_35087_37499[(2)] = inst_34898);

(statearr_35087_37499[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (2))){
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34971__$1,(4),ch);
} else {
if((state_val_34972 === (23))){
var state_34971__$1 = state_34971;
var statearr_35098_37502 = state_34971__$1;
(statearr_35098_37502[(2)] = null);

(statearr_35098_37502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (35))){
var inst_34953 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35102_37505 = state_34971__$1;
(statearr_35102_37505[(2)] = inst_34953);

(statearr_35102_37505[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (19))){
var inst_34870 = (state_34971[(7)]);
var inst_34874 = cljs.core.chunk_first(inst_34870);
var inst_34875 = cljs.core.chunk_rest(inst_34870);
var inst_34876 = cljs.core.count(inst_34874);
var inst_34848 = inst_34875;
var inst_34849 = inst_34874;
var inst_34850 = inst_34876;
var inst_34851 = (0);
var state_34971__$1 = (function (){var statearr_35111 = state_34971;
(statearr_35111[(13)] = inst_34848);

(statearr_35111[(14)] = inst_34849);

(statearr_35111[(15)] = inst_34851);

(statearr_35111[(16)] = inst_34850);

return statearr_35111;
})();
var statearr_35113_37516 = state_34971__$1;
(statearr_35113_37516[(2)] = null);

(statearr_35113_37516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (11))){
var inst_34848 = (state_34971[(13)]);
var inst_34870 = (state_34971[(7)]);
var inst_34870__$1 = cljs.core.seq(inst_34848);
var state_34971__$1 = (function (){var statearr_35121 = state_34971;
(statearr_35121[(7)] = inst_34870__$1);

return statearr_35121;
})();
if(inst_34870__$1){
var statearr_35125_37523 = state_34971__$1;
(statearr_35125_37523[(1)] = (16));

} else {
var statearr_35128_37526 = state_34971__$1;
(statearr_35128_37526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (9))){
var inst_34900 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35132_37528 = state_34971__$1;
(statearr_35132_37528[(2)] = inst_34900);

(statearr_35132_37528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (5))){
var inst_34846 = cljs.core.deref(cs);
var inst_34847 = cljs.core.seq(inst_34846);
var inst_34848 = inst_34847;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34971__$1 = (function (){var statearr_35138 = state_34971;
(statearr_35138[(13)] = inst_34848);

(statearr_35138[(14)] = inst_34849);

(statearr_35138[(15)] = inst_34851);

(statearr_35138[(16)] = inst_34850);

return statearr_35138;
})();
var statearr_35144_37539 = state_34971__$1;
(statearr_35144_37539[(2)] = null);

(statearr_35144_37539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (14))){
var state_34971__$1 = state_34971;
var statearr_35149_37542 = state_34971__$1;
(statearr_35149_37542[(2)] = null);

(statearr_35149_37542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (45))){
var inst_34961 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35154_37550 = state_34971__$1;
(statearr_35154_37550[(2)] = inst_34961);

(statearr_35154_37550[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (26))){
var inst_34903 = (state_34971[(29)]);
var inst_34957 = (state_34971[(2)]);
var inst_34958 = cljs.core.seq(inst_34903);
var state_34971__$1 = (function (){var statearr_35161 = state_34971;
(statearr_35161[(31)] = inst_34957);

return statearr_35161;
})();
if(inst_34958){
var statearr_35162_37555 = state_34971__$1;
(statearr_35162_37555[(1)] = (42));

} else {
var statearr_35163_37556 = state_34971__$1;
(statearr_35163_37556[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (16))){
var inst_34870 = (state_34971[(7)]);
var inst_34872 = cljs.core.chunked_seq_QMARK_(inst_34870);
var state_34971__$1 = state_34971;
if(inst_34872){
var statearr_35164_37559 = state_34971__$1;
(statearr_35164_37559[(1)] = (19));

} else {
var statearr_35165_37560 = state_34971__$1;
(statearr_35165_37560[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (38))){
var inst_34950 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35166_37568 = state_34971__$1;
(statearr_35166_37568[(2)] = inst_34950);

(statearr_35166_37568[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (30))){
var state_34971__$1 = state_34971;
var statearr_35167_37571 = state_34971__$1;
(statearr_35167_37571[(2)] = null);

(statearr_35167_37571[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (10))){
var inst_34849 = (state_34971[(14)]);
var inst_34851 = (state_34971[(15)]);
var inst_34859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34849,inst_34851);
var inst_34860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(0),null);
var inst_34861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(1),null);
var state_34971__$1 = (function (){var statearr_35170 = state_34971;
(statearr_35170[(26)] = inst_34860);

return statearr_35170;
})();
if(cljs.core.truth_(inst_34861)){
var statearr_35171_37578 = state_34971__$1;
(statearr_35171_37578[(1)] = (13));

} else {
var statearr_35172_37580 = state_34971__$1;
(statearr_35172_37580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (18))){
var inst_34896 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35175_37584 = state_34971__$1;
(statearr_35175_37584[(2)] = inst_34896);

(statearr_35175_37584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (42))){
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34971__$1,(45),dchan);
} else {
if((state_val_34972 === (37))){
var inst_34930 = (state_34971[(25)]);
var inst_34839 = (state_34971[(12)]);
var inst_34939 = (state_34971[(23)]);
var inst_34939__$1 = cljs.core.first(inst_34930);
var inst_34940 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34939__$1,inst_34839,done);
var state_34971__$1 = (function (){var statearr_35199 = state_34971;
(statearr_35199[(23)] = inst_34939__$1);

return statearr_35199;
})();
if(cljs.core.truth_(inst_34940)){
var statearr_35200_37591 = state_34971__$1;
(statearr_35200_37591[(1)] = (39));

} else {
var statearr_35201_37596 = state_34971__$1;
(statearr_35201_37596[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (8))){
var inst_34851 = (state_34971[(15)]);
var inst_34850 = (state_34971[(16)]);
var inst_34853 = (inst_34851 < inst_34850);
var inst_34854 = inst_34853;
var state_34971__$1 = state_34971;
if(cljs.core.truth_(inst_34854)){
var statearr_35206_37599 = state_34971__$1;
(statearr_35206_37599[(1)] = (10));

} else {
var statearr_35207_37601 = state_34971__$1;
(statearr_35207_37601[(1)] = (11));

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
var statearr_35209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35209[(0)] = cljs$core$async$mult_$_state_machine__34200__auto__);

(statearr_35209[(1)] = (1));

return statearr_35209;
});
var cljs$core$async$mult_$_state_machine__34200__auto____1 = (function (state_34971){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34971);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35215){if((e35215 instanceof Object)){
var ex__34203__auto__ = e35215;
var statearr_35218_37611 = state_34971;
(statearr_35218_37611[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37613 = state_34971;
state_34971 = G__37613;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34200__auto__ = function(state_34971){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34200__auto____1.call(this,state_34971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34200__auto____0;
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34200__auto____1;
return cljs$core$async$mult_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35225 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35225[(6)] = c__34267__auto___37362);

return statearr_35225;
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
var G__35241 = arguments.length;
switch (G__35241) {
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
var len__4789__auto___37652 = arguments.length;
var i__4790__auto___37654 = (0);
while(true){
if((i__4790__auto___37654 < len__4789__auto___37652)){
args__4795__auto__.push((arguments[i__4790__auto___37654]));

var G__37658 = (i__4790__auto___37654 + (1));
i__4790__auto___37654 = G__37658;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35356){
var map__35357 = p__35356;
var map__35357__$1 = (((((!((map__35357 == null))))?(((((map__35357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35357):map__35357);
var opts = map__35357__$1;
var statearr_35361_37662 = state;
(statearr_35361_37662[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35362_37663 = state;
(statearr_35362_37663[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35363_37665 = state;
(statearr_35363_37665[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35352){
var G__35353 = cljs.core.first(seq35352);
var seq35352__$1 = cljs.core.next(seq35352);
var G__35354 = cljs.core.first(seq35352__$1);
var seq35352__$2 = cljs.core.next(seq35352__$1);
var G__35355 = cljs.core.first(seq35352__$2);
var seq35352__$3 = cljs.core.next(seq35352__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35353,G__35354,G__35355,seq35352__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35392 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35393){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35393 = meta35393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35394,meta35393__$1){
var self__ = this;
var _35394__$1 = this;
return (new cljs.core.async.t_cljs$core$async35392(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35393__$1));
}));

(cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35394){
var self__ = this;
var _35394__$1 = this;
return self__.meta35393;
}));

(cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35393","meta35393",-1930964008,null)], null);
}));

(cljs.core.async.t_cljs$core$async35392.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35392");

(cljs.core.async.t_cljs$core$async35392.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35392");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35392.
 */
cljs.core.async.__GT_t_cljs$core$async35392 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35392(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35393){
return (new cljs.core.async.t_cljs$core$async35392(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35393));
});

}

return (new cljs.core.async.t_cljs$core$async35392(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35578){
var state_val_35579 = (state_35578[(1)]);
if((state_val_35579 === (7))){
var inst_35462 = (state_35578[(2)]);
var state_35578__$1 = state_35578;
var statearr_35593_37713 = state_35578__$1;
(statearr_35593_37713[(2)] = inst_35462);

(statearr_35593_37713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (20))){
var inst_35474 = (state_35578[(7)]);
var state_35578__$1 = state_35578;
var statearr_35597_37716 = state_35578__$1;
(statearr_35597_37716[(2)] = inst_35474);

(statearr_35597_37716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (27))){
var state_35578__$1 = state_35578;
var statearr_35602_37723 = state_35578__$1;
(statearr_35602_37723[(2)] = null);

(statearr_35602_37723[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (1))){
var inst_35428 = (state_35578[(8)]);
var inst_35428__$1 = calc_state();
var inst_35440 = (inst_35428__$1 == null);
var inst_35443 = cljs.core.not(inst_35440);
var state_35578__$1 = (function (){var statearr_35609 = state_35578;
(statearr_35609[(8)] = inst_35428__$1);

return statearr_35609;
})();
if(inst_35443){
var statearr_35611_37726 = state_35578__$1;
(statearr_35611_37726[(1)] = (2));

} else {
var statearr_35614_37727 = state_35578__$1;
(statearr_35614_37727[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (24))){
var inst_35511 = (state_35578[(9)]);
var inst_35538 = (state_35578[(10)]);
var inst_35502 = (state_35578[(11)]);
var inst_35538__$1 = (inst_35502.cljs$core$IFn$_invoke$arity$1 ? inst_35502.cljs$core$IFn$_invoke$arity$1(inst_35511) : inst_35502.call(null,inst_35511));
var state_35578__$1 = (function (){var statearr_35621 = state_35578;
(statearr_35621[(10)] = inst_35538__$1);

return statearr_35621;
})();
if(cljs.core.truth_(inst_35538__$1)){
var statearr_35623_37731 = state_35578__$1;
(statearr_35623_37731[(1)] = (29));

} else {
var statearr_35625_37735 = state_35578__$1;
(statearr_35625_37735[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (4))){
var inst_35465 = (state_35578[(2)]);
var state_35578__$1 = state_35578;
if(cljs.core.truth_(inst_35465)){
var statearr_35635_37739 = state_35578__$1;
(statearr_35635_37739[(1)] = (8));

} else {
var statearr_35643_37740 = state_35578__$1;
(statearr_35643_37740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (15))){
var inst_35496 = (state_35578[(2)]);
var state_35578__$1 = state_35578;
if(cljs.core.truth_(inst_35496)){
var statearr_35648_37742 = state_35578__$1;
(statearr_35648_37742[(1)] = (19));

} else {
var statearr_35651_37743 = state_35578__$1;
(statearr_35651_37743[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (21))){
var inst_35501 = (state_35578[(12)]);
var inst_35501__$1 = (state_35578[(2)]);
var inst_35502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35501__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35501__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35501__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35578__$1 = (function (){var statearr_35659 = state_35578;
(statearr_35659[(13)] = inst_35503);

(statearr_35659[(12)] = inst_35501__$1);

(statearr_35659[(11)] = inst_35502);

return statearr_35659;
})();
return cljs.core.async.ioc_alts_BANG_(state_35578__$1,(22),inst_35504);
} else {
if((state_val_35579 === (31))){
var inst_35551 = (state_35578[(2)]);
var state_35578__$1 = state_35578;
if(cljs.core.truth_(inst_35551)){
var statearr_35668_37753 = state_35578__$1;
(statearr_35668_37753[(1)] = (32));

} else {
var statearr_35671_37754 = state_35578__$1;
(statearr_35671_37754[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (32))){
var inst_35510 = (state_35578[(14)]);
var state_35578__$1 = state_35578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35578__$1,(35),out,inst_35510);
} else {
if((state_val_35579 === (33))){
var inst_35501 = (state_35578[(12)]);
var inst_35474 = inst_35501;
var state_35578__$1 = (function (){var statearr_35678 = state_35578;
(statearr_35678[(7)] = inst_35474);

return statearr_35678;
})();
var statearr_35682_37757 = state_35578__$1;
(statearr_35682_37757[(2)] = null);

(statearr_35682_37757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (13))){
var inst_35474 = (state_35578[(7)]);
var inst_35483 = inst_35474.cljs$lang$protocol_mask$partition0$;
var inst_35484 = (inst_35483 & (64));
var inst_35485 = inst_35474.cljs$core$ISeq$;
var inst_35487 = (cljs.core.PROTOCOL_SENTINEL === inst_35485);
var inst_35488 = ((inst_35484) || (inst_35487));
var state_35578__$1 = state_35578;
if(cljs.core.truth_(inst_35488)){
var statearr_35686_37766 = state_35578__$1;
(statearr_35686_37766[(1)] = (16));

} else {
var statearr_35687_37767 = state_35578__$1;
(statearr_35687_37767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (22))){
var inst_35511 = (state_35578[(9)]);
var inst_35510 = (state_35578[(14)]);
var inst_35509 = (state_35578[(2)]);
var inst_35510__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35509,(0),null);
var inst_35511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35509,(1),null);
var inst_35512 = (inst_35510__$1 == null);
var inst_35513 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35511__$1,change);
var inst_35514 = ((inst_35512) || (inst_35513));
var state_35578__$1 = (function (){var statearr_35688 = state_35578;
(statearr_35688[(9)] = inst_35511__$1);

(statearr_35688[(14)] = inst_35510__$1);

return statearr_35688;
})();
if(cljs.core.truth_(inst_35514)){
var statearr_35689_37771 = state_35578__$1;
(statearr_35689_37771[(1)] = (23));

} else {
var statearr_35690_37773 = state_35578__$1;
(statearr_35690_37773[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (36))){
var inst_35501 = (state_35578[(12)]);
var inst_35474 = inst_35501;
var state_35578__$1 = (function (){var statearr_35691 = state_35578;
(statearr_35691[(7)] = inst_35474);

return statearr_35691;
})();
var statearr_35692_37775 = state_35578__$1;
(statearr_35692_37775[(2)] = null);

(statearr_35692_37775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (29))){
var inst_35538 = (state_35578[(10)]);
var state_35578__$1 = state_35578;
var statearr_35695_37780 = state_35578__$1;
(statearr_35695_37780[(2)] = inst_35538);

(statearr_35695_37780[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (6))){
var state_35578__$1 = state_35578;
var statearr_35696_37781 = state_35578__$1;
(statearr_35696_37781[(2)] = false);

(statearr_35696_37781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (28))){
var inst_35531 = (state_35578[(2)]);
var inst_35534 = calc_state();
var inst_35474 = inst_35534;
var state_35578__$1 = (function (){var statearr_35697 = state_35578;
(statearr_35697[(7)] = inst_35474);

(statearr_35697[(15)] = inst_35531);

return statearr_35697;
})();
var statearr_35698_37786 = state_35578__$1;
(statearr_35698_37786[(2)] = null);

(statearr_35698_37786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (25))){
var inst_35569 = (state_35578[(2)]);
var state_35578__$1 = state_35578;
var statearr_35701_37791 = state_35578__$1;
(statearr_35701_37791[(2)] = inst_35569);

(statearr_35701_37791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (34))){
var inst_35567 = (state_35578[(2)]);
var state_35578__$1 = state_35578;
var statearr_35704_37792 = state_35578__$1;
(statearr_35704_37792[(2)] = inst_35567);

(statearr_35704_37792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (17))){
var state_35578__$1 = state_35578;
var statearr_35705_37793 = state_35578__$1;
(statearr_35705_37793[(2)] = false);

(statearr_35705_37793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (3))){
var state_35578__$1 = state_35578;
var statearr_35708_37796 = state_35578__$1;
(statearr_35708_37796[(2)] = false);

(statearr_35708_37796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (12))){
var inst_35571 = (state_35578[(2)]);
var state_35578__$1 = state_35578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35578__$1,inst_35571);
} else {
if((state_val_35579 === (2))){
var inst_35428 = (state_35578[(8)]);
var inst_35453 = inst_35428.cljs$lang$protocol_mask$partition0$;
var inst_35454 = (inst_35453 & (64));
var inst_35456 = inst_35428.cljs$core$ISeq$;
var inst_35457 = (cljs.core.PROTOCOL_SENTINEL === inst_35456);
var inst_35458 = ((inst_35454) || (inst_35457));
var state_35578__$1 = state_35578;
if(cljs.core.truth_(inst_35458)){
var statearr_35713_37803 = state_35578__$1;
(statearr_35713_37803[(1)] = (5));

} else {
var statearr_35714_37804 = state_35578__$1;
(statearr_35714_37804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (23))){
var inst_35510 = (state_35578[(14)]);
var inst_35517 = (inst_35510 == null);
var state_35578__$1 = state_35578;
if(cljs.core.truth_(inst_35517)){
var statearr_35715_37808 = state_35578__$1;
(statearr_35715_37808[(1)] = (26));

} else {
var statearr_35716_37809 = state_35578__$1;
(statearr_35716_37809[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (35))){
var inst_35557 = (state_35578[(2)]);
var state_35578__$1 = state_35578;
if(cljs.core.truth_(inst_35557)){
var statearr_35717_37813 = state_35578__$1;
(statearr_35717_37813[(1)] = (36));

} else {
var statearr_35718_37815 = state_35578__$1;
(statearr_35718_37815[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (19))){
var inst_35474 = (state_35578[(7)]);
var inst_35498 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35474);
var state_35578__$1 = state_35578;
var statearr_35721_37817 = state_35578__$1;
(statearr_35721_37817[(2)] = inst_35498);

(statearr_35721_37817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (11))){
var inst_35474 = (state_35578[(7)]);
var inst_35479 = (inst_35474 == null);
var inst_35481 = cljs.core.not(inst_35479);
var state_35578__$1 = state_35578;
if(inst_35481){
var statearr_35724_37821 = state_35578__$1;
(statearr_35724_37821[(1)] = (13));

} else {
var statearr_35725_37823 = state_35578__$1;
(statearr_35725_37823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (9))){
var inst_35428 = (state_35578[(8)]);
var state_35578__$1 = state_35578;
var statearr_35728_37827 = state_35578__$1;
(statearr_35728_37827[(2)] = inst_35428);

(statearr_35728_37827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (5))){
var state_35578__$1 = state_35578;
var statearr_35731_37828 = state_35578__$1;
(statearr_35731_37828[(2)] = true);

(statearr_35731_37828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (14))){
var state_35578__$1 = state_35578;
var statearr_35733_37832 = state_35578__$1;
(statearr_35733_37832[(2)] = false);

(statearr_35733_37832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (26))){
var inst_35511 = (state_35578[(9)]);
var inst_35528 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35511);
var state_35578__$1 = state_35578;
var statearr_35734_37834 = state_35578__$1;
(statearr_35734_37834[(2)] = inst_35528);

(statearr_35734_37834[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (16))){
var state_35578__$1 = state_35578;
var statearr_35736_37839 = state_35578__$1;
(statearr_35736_37839[(2)] = true);

(statearr_35736_37839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (38))){
var inst_35563 = (state_35578[(2)]);
var state_35578__$1 = state_35578;
var statearr_35738_37841 = state_35578__$1;
(statearr_35738_37841[(2)] = inst_35563);

(statearr_35738_37841[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (30))){
var inst_35503 = (state_35578[(13)]);
var inst_35511 = (state_35578[(9)]);
var inst_35502 = (state_35578[(11)]);
var inst_35546 = cljs.core.empty_QMARK_(inst_35502);
var inst_35547 = (inst_35503.cljs$core$IFn$_invoke$arity$1 ? inst_35503.cljs$core$IFn$_invoke$arity$1(inst_35511) : inst_35503.call(null,inst_35511));
var inst_35548 = cljs.core.not(inst_35547);
var inst_35549 = ((inst_35546) && (inst_35548));
var state_35578__$1 = state_35578;
var statearr_35740_37845 = state_35578__$1;
(statearr_35740_37845[(2)] = inst_35549);

(statearr_35740_37845[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (10))){
var inst_35428 = (state_35578[(8)]);
var inst_35470 = (state_35578[(2)]);
var inst_35471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35470,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35470,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35470,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35474 = inst_35428;
var state_35578__$1 = (function (){var statearr_35741 = state_35578;
(statearr_35741[(7)] = inst_35474);

(statearr_35741[(16)] = inst_35472);

(statearr_35741[(17)] = inst_35471);

(statearr_35741[(18)] = inst_35473);

return statearr_35741;
})();
var statearr_35743_37848 = state_35578__$1;
(statearr_35743_37848[(2)] = null);

(statearr_35743_37848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (18))){
var inst_35493 = (state_35578[(2)]);
var state_35578__$1 = state_35578;
var statearr_35744_37851 = state_35578__$1;
(statearr_35744_37851[(2)] = inst_35493);

(statearr_35744_37851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (37))){
var state_35578__$1 = state_35578;
var statearr_35746_37854 = state_35578__$1;
(statearr_35746_37854[(2)] = null);

(statearr_35746_37854[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35579 === (8))){
var inst_35428 = (state_35578[(8)]);
var inst_35467 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35428);
var state_35578__$1 = state_35578;
var statearr_35747_37856 = state_35578__$1;
(statearr_35747_37856[(2)] = inst_35467);

(statearr_35747_37856[(1)] = (10));


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
var statearr_35752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35752[(0)] = cljs$core$async$mix_$_state_machine__34200__auto__);

(statearr_35752[(1)] = (1));

return statearr_35752;
});
var cljs$core$async$mix_$_state_machine__34200__auto____1 = (function (state_35578){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35578);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35755){if((e35755 instanceof Object)){
var ex__34203__auto__ = e35755;
var statearr_35756_37862 = state_35578;
(statearr_35756_37862[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37867 = state_35578;
state_35578 = G__37867;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34200__auto__ = function(state_35578){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34200__auto____1.call(this,state_35578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34200__auto____0;
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34200__auto____1;
return cljs$core$async$mix_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35761 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35761[(6)] = c__34267__auto___37711);

return statearr_35761;
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
var G__35793 = arguments.length;
switch (G__35793) {
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
var G__35807 = arguments.length;
switch (G__35807) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35802_SHARP_){
if(cljs.core.truth_((p1__35802_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35802_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35802_SHARP_.call(null,topic)))){
return p1__35802_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35802_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35817 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35818){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35818 = meta35818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35819,meta35818__$1){
var self__ = this;
var _35819__$1 = this;
return (new cljs.core.async.t_cljs$core$async35817(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35818__$1));
}));

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35819){
var self__ = this;
var _35819__$1 = this;
return self__.meta35818;
}));

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35818","meta35818",135183639,null)], null);
}));

(cljs.core.async.t_cljs$core$async35817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35817");

(cljs.core.async.t_cljs$core$async35817.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35817.
 */
cljs.core.async.__GT_t_cljs$core$async35817 = (function cljs$core$async$__GT_t_cljs$core$async35817(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35818){
return (new cljs.core.async.t_cljs$core$async35817(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35818));
});

}

return (new cljs.core.async.t_cljs$core$async35817(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35935){
var state_val_35936 = (state_35935[(1)]);
if((state_val_35936 === (7))){
var inst_35927 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35940_37917 = state_35935__$1;
(statearr_35940_37917[(2)] = inst_35927);

(statearr_35940_37917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (20))){
var state_35935__$1 = state_35935;
var statearr_35941_37918 = state_35935__$1;
(statearr_35941_37918[(2)] = null);

(statearr_35941_37918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (1))){
var state_35935__$1 = state_35935;
var statearr_35944_37919 = state_35935__$1;
(statearr_35944_37919[(2)] = null);

(statearr_35944_37919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (24))){
var inst_35910 = (state_35935[(7)]);
var inst_35919 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35910);
var state_35935__$1 = state_35935;
var statearr_35947_37920 = state_35935__$1;
(statearr_35947_37920[(2)] = inst_35919);

(statearr_35947_37920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (4))){
var inst_35855 = (state_35935[(8)]);
var inst_35855__$1 = (state_35935[(2)]);
var inst_35856 = (inst_35855__$1 == null);
var state_35935__$1 = (function (){var statearr_35951 = state_35935;
(statearr_35951[(8)] = inst_35855__$1);

return statearr_35951;
})();
if(cljs.core.truth_(inst_35856)){
var statearr_35952_37921 = state_35935__$1;
(statearr_35952_37921[(1)] = (5));

} else {
var statearr_35953_37922 = state_35935__$1;
(statearr_35953_37922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (15))){
var inst_35904 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35955_37923 = state_35935__$1;
(statearr_35955_37923[(2)] = inst_35904);

(statearr_35955_37923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (21))){
var inst_35924 = (state_35935[(2)]);
var state_35935__$1 = (function (){var statearr_35956 = state_35935;
(statearr_35956[(9)] = inst_35924);

return statearr_35956;
})();
var statearr_35960_37927 = state_35935__$1;
(statearr_35960_37927[(2)] = null);

(statearr_35960_37927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (13))){
var inst_35882 = (state_35935[(10)]);
var inst_35886 = cljs.core.chunked_seq_QMARK_(inst_35882);
var state_35935__$1 = state_35935;
if(inst_35886){
var statearr_35963_37928 = state_35935__$1;
(statearr_35963_37928[(1)] = (16));

} else {
var statearr_35964_37929 = state_35935__$1;
(statearr_35964_37929[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (22))){
var inst_35916 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
if(cljs.core.truth_(inst_35916)){
var statearr_35966_37934 = state_35935__$1;
(statearr_35966_37934[(1)] = (23));

} else {
var statearr_35968_37935 = state_35935__$1;
(statearr_35968_37935[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (6))){
var inst_35912 = (state_35935[(11)]);
var inst_35910 = (state_35935[(7)]);
var inst_35855 = (state_35935[(8)]);
var inst_35910__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35855) : topic_fn.call(null,inst_35855));
var inst_35911 = cljs.core.deref(mults);
var inst_35912__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35911,inst_35910__$1);
var state_35935__$1 = (function (){var statearr_35970 = state_35935;
(statearr_35970[(11)] = inst_35912__$1);

(statearr_35970[(7)] = inst_35910__$1);

return statearr_35970;
})();
if(cljs.core.truth_(inst_35912__$1)){
var statearr_35971_37936 = state_35935__$1;
(statearr_35971_37936[(1)] = (19));

} else {
var statearr_35972_37937 = state_35935__$1;
(statearr_35972_37937[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (25))){
var inst_35921 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35973_37938 = state_35935__$1;
(statearr_35973_37938[(2)] = inst_35921);

(statearr_35973_37938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (17))){
var inst_35882 = (state_35935[(10)]);
var inst_35895 = cljs.core.first(inst_35882);
var inst_35896 = cljs.core.async.muxch_STAR_(inst_35895);
var inst_35897 = cljs.core.async.close_BANG_(inst_35896);
var inst_35898 = cljs.core.next(inst_35882);
var inst_35865 = inst_35898;
var inst_35866 = null;
var inst_35867 = (0);
var inst_35868 = (0);
var state_35935__$1 = (function (){var statearr_35976 = state_35935;
(statearr_35976[(12)] = inst_35867);

(statearr_35976[(13)] = inst_35865);

(statearr_35976[(14)] = inst_35868);

(statearr_35976[(15)] = inst_35866);

(statearr_35976[(16)] = inst_35897);

return statearr_35976;
})();
var statearr_35978_37940 = state_35935__$1;
(statearr_35978_37940[(2)] = null);

(statearr_35978_37940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (3))){
var inst_35929 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35935__$1,inst_35929);
} else {
if((state_val_35936 === (12))){
var inst_35906 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35979_37941 = state_35935__$1;
(statearr_35979_37941[(2)] = inst_35906);

(statearr_35979_37941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (2))){
var state_35935__$1 = state_35935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35935__$1,(4),ch);
} else {
if((state_val_35936 === (23))){
var state_35935__$1 = state_35935;
var statearr_35982_37946 = state_35935__$1;
(statearr_35982_37946[(2)] = null);

(statearr_35982_37946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (19))){
var inst_35912 = (state_35935[(11)]);
var inst_35855 = (state_35935[(8)]);
var inst_35914 = cljs.core.async.muxch_STAR_(inst_35912);
var state_35935__$1 = state_35935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35935__$1,(22),inst_35914,inst_35855);
} else {
if((state_val_35936 === (11))){
var inst_35882 = (state_35935[(10)]);
var inst_35865 = (state_35935[(13)]);
var inst_35882__$1 = cljs.core.seq(inst_35865);
var state_35935__$1 = (function (){var statearr_35984 = state_35935;
(statearr_35984[(10)] = inst_35882__$1);

return statearr_35984;
})();
if(inst_35882__$1){
var statearr_35987_37947 = state_35935__$1;
(statearr_35987_37947[(1)] = (13));

} else {
var statearr_35989_37948 = state_35935__$1;
(statearr_35989_37948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (9))){
var inst_35908 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_35990_37949 = state_35935__$1;
(statearr_35990_37949[(2)] = inst_35908);

(statearr_35990_37949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (5))){
var inst_35862 = cljs.core.deref(mults);
var inst_35863 = cljs.core.vals(inst_35862);
var inst_35864 = cljs.core.seq(inst_35863);
var inst_35865 = inst_35864;
var inst_35866 = null;
var inst_35867 = (0);
var inst_35868 = (0);
var state_35935__$1 = (function (){var statearr_35991 = state_35935;
(statearr_35991[(12)] = inst_35867);

(statearr_35991[(13)] = inst_35865);

(statearr_35991[(14)] = inst_35868);

(statearr_35991[(15)] = inst_35866);

return statearr_35991;
})();
var statearr_35995_37950 = state_35935__$1;
(statearr_35995_37950[(2)] = null);

(statearr_35995_37950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (14))){
var state_35935__$1 = state_35935;
var statearr_36002_37951 = state_35935__$1;
(statearr_36002_37951[(2)] = null);

(statearr_36002_37951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (16))){
var inst_35882 = (state_35935[(10)]);
var inst_35888 = cljs.core.chunk_first(inst_35882);
var inst_35890 = cljs.core.chunk_rest(inst_35882);
var inst_35891 = cljs.core.count(inst_35888);
var inst_35865 = inst_35890;
var inst_35866 = inst_35888;
var inst_35867 = inst_35891;
var inst_35868 = (0);
var state_35935__$1 = (function (){var statearr_36004 = state_35935;
(statearr_36004[(12)] = inst_35867);

(statearr_36004[(13)] = inst_35865);

(statearr_36004[(14)] = inst_35868);

(statearr_36004[(15)] = inst_35866);

return statearr_36004;
})();
var statearr_36008_37956 = state_35935__$1;
(statearr_36008_37956[(2)] = null);

(statearr_36008_37956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (10))){
var inst_35867 = (state_35935[(12)]);
var inst_35865 = (state_35935[(13)]);
var inst_35868 = (state_35935[(14)]);
var inst_35866 = (state_35935[(15)]);
var inst_35875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35866,inst_35868);
var inst_35877 = cljs.core.async.muxch_STAR_(inst_35875);
var inst_35878 = cljs.core.async.close_BANG_(inst_35877);
var inst_35879 = (inst_35868 + (1));
var tmp35998 = inst_35867;
var tmp35999 = inst_35865;
var tmp36000 = inst_35866;
var inst_35865__$1 = tmp35999;
var inst_35866__$1 = tmp36000;
var inst_35867__$1 = tmp35998;
var inst_35868__$1 = inst_35879;
var state_35935__$1 = (function (){var statearr_36014 = state_35935;
(statearr_36014[(12)] = inst_35867__$1);

(statearr_36014[(13)] = inst_35865__$1);

(statearr_36014[(14)] = inst_35868__$1);

(statearr_36014[(15)] = inst_35866__$1);

(statearr_36014[(17)] = inst_35878);

return statearr_36014;
})();
var statearr_36015_37960 = state_35935__$1;
(statearr_36015_37960[(2)] = null);

(statearr_36015_37960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (18))){
var inst_35901 = (state_35935[(2)]);
var state_35935__$1 = state_35935;
var statearr_36018_37961 = state_35935__$1;
(statearr_36018_37961[(2)] = inst_35901);

(statearr_36018_37961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35936 === (8))){
var inst_35867 = (state_35935[(12)]);
var inst_35868 = (state_35935[(14)]);
var inst_35872 = (inst_35868 < inst_35867);
var inst_35873 = inst_35872;
var state_35935__$1 = state_35935;
if(cljs.core.truth_(inst_35873)){
var statearr_36021_37963 = state_35935__$1;
(statearr_36021_37963[(1)] = (10));

} else {
var statearr_36023_37966 = state_35935__$1;
(statearr_36023_37966[(1)] = (11));

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
var statearr_36027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36027[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36027[(1)] = (1));

return statearr_36027;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35935){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35935);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36028){if((e36028 instanceof Object)){
var ex__34203__auto__ = e36028;
var statearr_36029_37968 = state_35935;
(statearr_36029_37968[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37972 = state_35935;
state_35935 = G__37972;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36032 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36032[(6)] = c__34267__auto___37916);

return statearr_36032;
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
var G__36038 = arguments.length;
switch (G__36038) {
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
var G__36044 = arguments.length;
switch (G__36044) {
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
var G__36046 = arguments.length;
switch (G__36046) {
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
var c__34267__auto___37986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36095){
var state_val_36096 = (state_36095[(1)]);
if((state_val_36096 === (7))){
var state_36095__$1 = state_36095;
var statearr_36102_37990 = state_36095__$1;
(statearr_36102_37990[(2)] = null);

(statearr_36102_37990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (1))){
var state_36095__$1 = state_36095;
var statearr_36105_37991 = state_36095__$1;
(statearr_36105_37991[(2)] = null);

(statearr_36105_37991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (4))){
var inst_36050 = (state_36095[(7)]);
var inst_36052 = (inst_36050 < cnt);
var state_36095__$1 = state_36095;
if(cljs.core.truth_(inst_36052)){
var statearr_36107_37992 = state_36095__$1;
(statearr_36107_37992[(1)] = (6));

} else {
var statearr_36108_37993 = state_36095__$1;
(statearr_36108_37993[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (15))){
var inst_36091 = (state_36095[(2)]);
var state_36095__$1 = state_36095;
var statearr_36109_37996 = state_36095__$1;
(statearr_36109_37996[(2)] = inst_36091);

(statearr_36109_37996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (13))){
var inst_36083 = cljs.core.async.close_BANG_(out);
var state_36095__$1 = state_36095;
var statearr_36111_37997 = state_36095__$1;
(statearr_36111_37997[(2)] = inst_36083);

(statearr_36111_37997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (6))){
var state_36095__$1 = state_36095;
var statearr_36114_38000 = state_36095__$1;
(statearr_36114_38000[(2)] = null);

(statearr_36114_38000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (3))){
var inst_36093 = (state_36095[(2)]);
var state_36095__$1 = state_36095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36095__$1,inst_36093);
} else {
if((state_val_36096 === (12))){
var inst_36080 = (state_36095[(8)]);
var inst_36080__$1 = (state_36095[(2)]);
var inst_36081 = cljs.core.some(cljs.core.nil_QMARK_,inst_36080__$1);
var state_36095__$1 = (function (){var statearr_36117 = state_36095;
(statearr_36117[(8)] = inst_36080__$1);

return statearr_36117;
})();
if(cljs.core.truth_(inst_36081)){
var statearr_36118_38001 = state_36095__$1;
(statearr_36118_38001[(1)] = (13));

} else {
var statearr_36119_38002 = state_36095__$1;
(statearr_36119_38002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (2))){
var inst_36049 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36050 = (0);
var state_36095__$1 = (function (){var statearr_36120 = state_36095;
(statearr_36120[(9)] = inst_36049);

(statearr_36120[(7)] = inst_36050);

return statearr_36120;
})();
var statearr_36121_38005 = state_36095__$1;
(statearr_36121_38005[(2)] = null);

(statearr_36121_38005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (11))){
var inst_36050 = (state_36095[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36095,(10),Object,null,(9));
var inst_36064 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36050) : chs__$1.call(null,inst_36050));
var inst_36065 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36050) : done.call(null,inst_36050));
var inst_36066 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36064,inst_36065);
var state_36095__$1 = state_36095;
var statearr_36122_38006 = state_36095__$1;
(statearr_36122_38006[(2)] = inst_36066);


cljs.core.async.impl.ioc_helpers.process_exception(state_36095__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (9))){
var inst_36050 = (state_36095[(7)]);
var inst_36068 = (state_36095[(2)]);
var inst_36069 = (inst_36050 + (1));
var inst_36050__$1 = inst_36069;
var state_36095__$1 = (function (){var statearr_36127 = state_36095;
(statearr_36127[(10)] = inst_36068);

(statearr_36127[(7)] = inst_36050__$1);

return statearr_36127;
})();
var statearr_36128_38009 = state_36095__$1;
(statearr_36128_38009[(2)] = null);

(statearr_36128_38009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (5))){
var inst_36078 = (state_36095[(2)]);
var state_36095__$1 = (function (){var statearr_36130 = state_36095;
(statearr_36130[(11)] = inst_36078);

return statearr_36130;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36095__$1,(12),dchan);
} else {
if((state_val_36096 === (14))){
var inst_36080 = (state_36095[(8)]);
var inst_36085 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36080);
var state_36095__$1 = state_36095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36095__$1,(16),out,inst_36085);
} else {
if((state_val_36096 === (16))){
var inst_36087 = (state_36095[(2)]);
var state_36095__$1 = (function (){var statearr_36133 = state_36095;
(statearr_36133[(12)] = inst_36087);

return statearr_36133;
})();
var statearr_36134_38011 = state_36095__$1;
(statearr_36134_38011[(2)] = null);

(statearr_36134_38011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (10))){
var inst_36055 = (state_36095[(2)]);
var inst_36060 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36095__$1 = (function (){var statearr_36135 = state_36095;
(statearr_36135[(13)] = inst_36055);

return statearr_36135;
})();
var statearr_36137_38015 = state_36095__$1;
(statearr_36137_38015[(2)] = inst_36060);


cljs.core.async.impl.ioc_helpers.process_exception(state_36095__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36096 === (8))){
var inst_36076 = (state_36095[(2)]);
var state_36095__$1 = state_36095;
var statearr_36139_38016 = state_36095__$1;
(statearr_36139_38016[(2)] = inst_36076);

(statearr_36139_38016[(1)] = (5));


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
var statearr_36143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36143[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36143[(1)] = (1));

return statearr_36143;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36095){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36095);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36144){if((e36144 instanceof Object)){
var ex__34203__auto__ = e36144;
var statearr_36145_38020 = state_36095;
(statearr_36145_38020[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38021 = state_36095;
state_36095 = G__38021;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36148 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36148[(6)] = c__34267__auto___37986);

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
var G__36164 = arguments.length;
switch (G__36164) {
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
var c__34267__auto___38026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36213){
var state_val_36214 = (state_36213[(1)]);
if((state_val_36214 === (7))){
var inst_36186 = (state_36213[(7)]);
var inst_36187 = (state_36213[(8)]);
var inst_36186__$1 = (state_36213[(2)]);
var inst_36187__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36186__$1,(0),null);
var inst_36188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36186__$1,(1),null);
var inst_36189 = (inst_36187__$1 == null);
var state_36213__$1 = (function (){var statearr_36217 = state_36213;
(statearr_36217[(9)] = inst_36188);

(statearr_36217[(7)] = inst_36186__$1);

(statearr_36217[(8)] = inst_36187__$1);

return statearr_36217;
})();
if(cljs.core.truth_(inst_36189)){
var statearr_36218_38029 = state_36213__$1;
(statearr_36218_38029[(1)] = (8));

} else {
var statearr_36219_38031 = state_36213__$1;
(statearr_36219_38031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (1))){
var inst_36175 = cljs.core.vec(chs);
var inst_36176 = inst_36175;
var state_36213__$1 = (function (){var statearr_36222 = state_36213;
(statearr_36222[(10)] = inst_36176);

return statearr_36222;
})();
var statearr_36224_38032 = state_36213__$1;
(statearr_36224_38032[(2)] = null);

(statearr_36224_38032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (4))){
var inst_36176 = (state_36213[(10)]);
var state_36213__$1 = state_36213;
return cljs.core.async.ioc_alts_BANG_(state_36213__$1,(7),inst_36176);
} else {
if((state_val_36214 === (6))){
var inst_36209 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
var statearr_36226_38034 = state_36213__$1;
(statearr_36226_38034[(2)] = inst_36209);

(statearr_36226_38034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (3))){
var inst_36211 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36213__$1,inst_36211);
} else {
if((state_val_36214 === (2))){
var inst_36176 = (state_36213[(10)]);
var inst_36178 = cljs.core.count(inst_36176);
var inst_36179 = (inst_36178 > (0));
var state_36213__$1 = state_36213;
if(cljs.core.truth_(inst_36179)){
var statearr_36236_38037 = state_36213__$1;
(statearr_36236_38037[(1)] = (4));

} else {
var statearr_36237_38038 = state_36213__$1;
(statearr_36237_38038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (11))){
var inst_36176 = (state_36213[(10)]);
var inst_36202 = (state_36213[(2)]);
var tmp36227 = inst_36176;
var inst_36176__$1 = tmp36227;
var state_36213__$1 = (function (){var statearr_36238 = state_36213;
(statearr_36238[(10)] = inst_36176__$1);

(statearr_36238[(11)] = inst_36202);

return statearr_36238;
})();
var statearr_36240_38040 = state_36213__$1;
(statearr_36240_38040[(2)] = null);

(statearr_36240_38040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (9))){
var inst_36187 = (state_36213[(8)]);
var state_36213__$1 = state_36213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36213__$1,(11),out,inst_36187);
} else {
if((state_val_36214 === (5))){
var inst_36207 = cljs.core.async.close_BANG_(out);
var state_36213__$1 = state_36213;
var statearr_36245_38043 = state_36213__$1;
(statearr_36245_38043[(2)] = inst_36207);

(statearr_36245_38043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (10))){
var inst_36205 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
var statearr_36248_38044 = state_36213__$1;
(statearr_36248_38044[(2)] = inst_36205);

(statearr_36248_38044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (8))){
var inst_36176 = (state_36213[(10)]);
var inst_36188 = (state_36213[(9)]);
var inst_36186 = (state_36213[(7)]);
var inst_36187 = (state_36213[(8)]);
var inst_36197 = (function (){var cs = inst_36176;
var vec__36182 = inst_36186;
var v = inst_36187;
var c = inst_36188;
return (function (p1__36149_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36149_SHARP_);
});
})();
var inst_36198 = cljs.core.filterv(inst_36197,inst_36176);
var inst_36176__$1 = inst_36198;
var state_36213__$1 = (function (){var statearr_36249 = state_36213;
(statearr_36249[(10)] = inst_36176__$1);

return statearr_36249;
})();
var statearr_36250_38048 = state_36213__$1;
(statearr_36250_38048[(2)] = null);

(statearr_36250_38048[(1)] = (2));


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
var statearr_36253 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36253[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36253[(1)] = (1));

return statearr_36253;
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
}catch (e36254){if((e36254 instanceof Object)){
var ex__34203__auto__ = e36254;
var statearr_36255_38050 = state_36213;
(statearr_36255_38050[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38053 = state_36213;
state_36213 = G__38053;
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
var state__34269__auto__ = (function (){var statearr_36257 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36257[(6)] = c__34267__auto___38026);

return statearr_36257;
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
var G__36270 = arguments.length;
switch (G__36270) {
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
var c__34267__auto___38058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36298){
var state_val_36299 = (state_36298[(1)]);
if((state_val_36299 === (7))){
var inst_36279 = (state_36298[(7)]);
var inst_36279__$1 = (state_36298[(2)]);
var inst_36280 = (inst_36279__$1 == null);
var inst_36281 = cljs.core.not(inst_36280);
var state_36298__$1 = (function (){var statearr_36302 = state_36298;
(statearr_36302[(7)] = inst_36279__$1);

return statearr_36302;
})();
if(inst_36281){
var statearr_36304_38060 = state_36298__$1;
(statearr_36304_38060[(1)] = (8));

} else {
var statearr_36305_38062 = state_36298__$1;
(statearr_36305_38062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (1))){
var inst_36273 = (0);
var state_36298__$1 = (function (){var statearr_36306 = state_36298;
(statearr_36306[(8)] = inst_36273);

return statearr_36306;
})();
var statearr_36307_38064 = state_36298__$1;
(statearr_36307_38064[(2)] = null);

(statearr_36307_38064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (4))){
var state_36298__$1 = state_36298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36298__$1,(7),ch);
} else {
if((state_val_36299 === (6))){
var inst_36293 = (state_36298[(2)]);
var state_36298__$1 = state_36298;
var statearr_36308_38065 = state_36298__$1;
(statearr_36308_38065[(2)] = inst_36293);

(statearr_36308_38065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (3))){
var inst_36295 = (state_36298[(2)]);
var inst_36296 = cljs.core.async.close_BANG_(out);
var state_36298__$1 = (function (){var statearr_36311 = state_36298;
(statearr_36311[(9)] = inst_36295);

return statearr_36311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36298__$1,inst_36296);
} else {
if((state_val_36299 === (2))){
var inst_36273 = (state_36298[(8)]);
var inst_36276 = (inst_36273 < n);
var state_36298__$1 = state_36298;
if(cljs.core.truth_(inst_36276)){
var statearr_36312_38069 = state_36298__$1;
(statearr_36312_38069[(1)] = (4));

} else {
var statearr_36313_38070 = state_36298__$1;
(statearr_36313_38070[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (11))){
var inst_36273 = (state_36298[(8)]);
var inst_36284 = (state_36298[(2)]);
var inst_36285 = (inst_36273 + (1));
var inst_36273__$1 = inst_36285;
var state_36298__$1 = (function (){var statearr_36316 = state_36298;
(statearr_36316[(8)] = inst_36273__$1);

(statearr_36316[(10)] = inst_36284);

return statearr_36316;
})();
var statearr_36317_38072 = state_36298__$1;
(statearr_36317_38072[(2)] = null);

(statearr_36317_38072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (9))){
var state_36298__$1 = state_36298;
var statearr_36319_38074 = state_36298__$1;
(statearr_36319_38074[(2)] = null);

(statearr_36319_38074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (5))){
var state_36298__$1 = state_36298;
var statearr_36326_38076 = state_36298__$1;
(statearr_36326_38076[(2)] = null);

(statearr_36326_38076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (10))){
var inst_36290 = (state_36298[(2)]);
var state_36298__$1 = state_36298;
var statearr_36327_38077 = state_36298__$1;
(statearr_36327_38077[(2)] = inst_36290);

(statearr_36327_38077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (8))){
var inst_36279 = (state_36298[(7)]);
var state_36298__$1 = state_36298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36298__$1,(11),out,inst_36279);
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
var statearr_36330 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36330[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36330[(1)] = (1));

return statearr_36330;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36298){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36298);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36332){if((e36332 instanceof Object)){
var ex__34203__auto__ = e36332;
var statearr_36334_38081 = state_36298;
(statearr_36334_38081[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38082 = state_36298;
state_36298 = G__38082;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36336 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36336[(6)] = c__34267__auto___38058);

return statearr_36336;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36340 = (function (f,ch,meta36341){
this.f = f;
this.ch = ch;
this.meta36341 = meta36341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36342,meta36341__$1){
var self__ = this;
var _36342__$1 = this;
return (new cljs.core.async.t_cljs$core$async36340(self__.f,self__.ch,meta36341__$1));
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36342){
var self__ = this;
var _36342__$1 = this;
return self__.meta36341;
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36349 = (function (f,ch,meta36341,_,fn1,meta36350){
this.f = f;
this.ch = ch;
this.meta36341 = meta36341;
this._ = _;
this.fn1 = fn1;
this.meta36350 = meta36350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36351,meta36350__$1){
var self__ = this;
var _36351__$1 = this;
return (new cljs.core.async.t_cljs$core$async36349(self__.f,self__.ch,self__.meta36341,self__._,self__.fn1,meta36350__$1));
}));

(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36351){
var self__ = this;
var _36351__$1 = this;
return self__.meta36350;
}));

(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36338_SHARP_){
var G__36363 = (((p1__36338_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36338_SHARP_) : self__.f.call(null,p1__36338_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36363) : f1.call(null,G__36363));
});
}));

(cljs.core.async.t_cljs$core$async36349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36341","meta36341",-1745304593,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36340","cljs.core.async/t_cljs$core$async36340",149439839,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36350","meta36350",620264329,null)], null);
}));

(cljs.core.async.t_cljs$core$async36349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36349");

(cljs.core.async.t_cljs$core$async36349.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36349.
 */
cljs.core.async.__GT_t_cljs$core$async36349 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36349(f__$1,ch__$1,meta36341__$1,___$2,fn1__$1,meta36350){
return (new cljs.core.async.t_cljs$core$async36349(f__$1,ch__$1,meta36341__$1,___$2,fn1__$1,meta36350));
});

}

return (new cljs.core.async.t_cljs$core$async36349(self__.f,self__.ch,self__.meta36341,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36367 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36367) : self__.f.call(null,G__36367));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36341","meta36341",-1745304593,null)], null);
}));

(cljs.core.async.t_cljs$core$async36340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36340");

(cljs.core.async.t_cljs$core$async36340.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36340.
 */
cljs.core.async.__GT_t_cljs$core$async36340 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36340(f__$1,ch__$1,meta36341){
return (new cljs.core.async.t_cljs$core$async36340(f__$1,ch__$1,meta36341));
});

}

return (new cljs.core.async.t_cljs$core$async36340(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36376 = (function (f,ch,meta36377){
this.f = f;
this.ch = ch;
this.meta36377 = meta36377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36378,meta36377__$1){
var self__ = this;
var _36378__$1 = this;
return (new cljs.core.async.t_cljs$core$async36376(self__.f,self__.ch,meta36377__$1));
}));

(cljs.core.async.t_cljs$core$async36376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36378){
var self__ = this;
var _36378__$1 = this;
return self__.meta36377;
}));

(cljs.core.async.t_cljs$core$async36376.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36376.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36376.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36377","meta36377",1417581904,null)], null);
}));

(cljs.core.async.t_cljs$core$async36376.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36376");

(cljs.core.async.t_cljs$core$async36376.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36376");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36376.
 */
cljs.core.async.__GT_t_cljs$core$async36376 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36376(f__$1,ch__$1,meta36377){
return (new cljs.core.async.t_cljs$core$async36376(f__$1,ch__$1,meta36377));
});

}

return (new cljs.core.async.t_cljs$core$async36376(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async36403 = (function (p,ch,meta36404){
this.p = p;
this.ch = ch;
this.meta36404 = meta36404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36405,meta36404__$1){
var self__ = this;
var _36405__$1 = this;
return (new cljs.core.async.t_cljs$core$async36403(self__.p,self__.ch,meta36404__$1));
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
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36404","meta36404",-1876211909,null)], null);
}));

(cljs.core.async.t_cljs$core$async36403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36403");

(cljs.core.async.t_cljs$core$async36403.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36403.
 */
cljs.core.async.__GT_t_cljs$core$async36403 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36403(p__$1,ch__$1,meta36404){
return (new cljs.core.async.t_cljs$core$async36403(p__$1,ch__$1,meta36404));
});

}

return (new cljs.core.async.t_cljs$core$async36403(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36422 = arguments.length;
switch (G__36422) {
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
var c__34267__auto___38111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36451){
var state_val_36452 = (state_36451[(1)]);
if((state_val_36452 === (7))){
var inst_36447 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
var statearr_36454_38112 = state_36451__$1;
(statearr_36454_38112[(2)] = inst_36447);

(statearr_36454_38112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (1))){
var state_36451__$1 = state_36451;
var statearr_36455_38114 = state_36451__$1;
(statearr_36455_38114[(2)] = null);

(statearr_36455_38114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (4))){
var inst_36427 = (state_36451[(7)]);
var inst_36427__$1 = (state_36451[(2)]);
var inst_36428 = (inst_36427__$1 == null);
var state_36451__$1 = (function (){var statearr_36457 = state_36451;
(statearr_36457[(7)] = inst_36427__$1);

return statearr_36457;
})();
if(cljs.core.truth_(inst_36428)){
var statearr_36458_38117 = state_36451__$1;
(statearr_36458_38117[(1)] = (5));

} else {
var statearr_36459_38118 = state_36451__$1;
(statearr_36459_38118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (6))){
var inst_36427 = (state_36451[(7)]);
var inst_36432 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36427) : p.call(null,inst_36427));
var state_36451__$1 = state_36451;
if(cljs.core.truth_(inst_36432)){
var statearr_36461_38119 = state_36451__$1;
(statearr_36461_38119[(1)] = (8));

} else {
var statearr_36462_38120 = state_36451__$1;
(statearr_36462_38120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (3))){
var inst_36449 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36451__$1,inst_36449);
} else {
if((state_val_36452 === (2))){
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36451__$1,(4),ch);
} else {
if((state_val_36452 === (11))){
var inst_36439 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
var statearr_36464_38122 = state_36451__$1;
(statearr_36464_38122[(2)] = inst_36439);

(statearr_36464_38122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (9))){
var state_36451__$1 = state_36451;
var statearr_36465_38125 = state_36451__$1;
(statearr_36465_38125[(2)] = null);

(statearr_36465_38125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (5))){
var inst_36430 = cljs.core.async.close_BANG_(out);
var state_36451__$1 = state_36451;
var statearr_36470_38126 = state_36451__$1;
(statearr_36470_38126[(2)] = inst_36430);

(statearr_36470_38126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (10))){
var inst_36442 = (state_36451[(2)]);
var state_36451__$1 = (function (){var statearr_36471 = state_36451;
(statearr_36471[(8)] = inst_36442);

return statearr_36471;
})();
var statearr_36472_38127 = state_36451__$1;
(statearr_36472_38127[(2)] = null);

(statearr_36472_38127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (8))){
var inst_36427 = (state_36451[(7)]);
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36451__$1,(11),out,inst_36427);
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
var statearr_36474 = [null,null,null,null,null,null,null,null,null];
(statearr_36474[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36474[(1)] = (1));

return statearr_36474;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36451){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36451);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36475){if((e36475 instanceof Object)){
var ex__34203__auto__ = e36475;
var statearr_36477_38130 = state_36451;
(statearr_36477_38130[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38132 = state_36451;
state_36451 = G__38132;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36478 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36478[(6)] = c__34267__auto___38111);

return statearr_36478;
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
var G__36482 = arguments.length;
switch (G__36482) {
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
var statearr_36554_38138 = state_36549__$1;
(statearr_36554_38138[(2)] = inst_36544);

(statearr_36554_38138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (20))){
var inst_36513 = (state_36549[(7)]);
var inst_36525 = (state_36549[(2)]);
var inst_36526 = cljs.core.next(inst_36513);
var inst_36499 = inst_36526;
var inst_36500 = null;
var inst_36501 = (0);
var inst_36502 = (0);
var state_36549__$1 = (function (){var statearr_36555 = state_36549;
(statearr_36555[(8)] = inst_36499);

(statearr_36555[(9)] = inst_36502);

(statearr_36555[(10)] = inst_36501);

(statearr_36555[(11)] = inst_36525);

(statearr_36555[(12)] = inst_36500);

return statearr_36555;
})();
var statearr_36557_38145 = state_36549__$1;
(statearr_36557_38145[(2)] = null);

(statearr_36557_38145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (1))){
var state_36549__$1 = state_36549;
var statearr_36558_38147 = state_36549__$1;
(statearr_36558_38147[(2)] = null);

(statearr_36558_38147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (4))){
var inst_36487 = (state_36549[(13)]);
var inst_36487__$1 = (state_36549[(2)]);
var inst_36488 = (inst_36487__$1 == null);
var state_36549__$1 = (function (){var statearr_36559 = state_36549;
(statearr_36559[(13)] = inst_36487__$1);

return statearr_36559;
})();
if(cljs.core.truth_(inst_36488)){
var statearr_36561_38148 = state_36549__$1;
(statearr_36561_38148[(1)] = (5));

} else {
var statearr_36562_38149 = state_36549__$1;
(statearr_36562_38149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (15))){
var state_36549__$1 = state_36549;
var statearr_36566_38150 = state_36549__$1;
(statearr_36566_38150[(2)] = null);

(statearr_36566_38150[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (21))){
var state_36549__$1 = state_36549;
var statearr_36568_38153 = state_36549__$1;
(statearr_36568_38153[(2)] = null);

(statearr_36568_38153[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (13))){
var inst_36499 = (state_36549[(8)]);
var inst_36502 = (state_36549[(9)]);
var inst_36501 = (state_36549[(10)]);
var inst_36500 = (state_36549[(12)]);
var inst_36509 = (state_36549[(2)]);
var inst_36510 = (inst_36502 + (1));
var tmp36563 = inst_36499;
var tmp36564 = inst_36501;
var tmp36565 = inst_36500;
var inst_36499__$1 = tmp36563;
var inst_36500__$1 = tmp36565;
var inst_36501__$1 = tmp36564;
var inst_36502__$1 = inst_36510;
var state_36549__$1 = (function (){var statearr_36570 = state_36549;
(statearr_36570[(14)] = inst_36509);

(statearr_36570[(8)] = inst_36499__$1);

(statearr_36570[(9)] = inst_36502__$1);

(statearr_36570[(10)] = inst_36501__$1);

(statearr_36570[(12)] = inst_36500__$1);

return statearr_36570;
})();
var statearr_36571_38155 = state_36549__$1;
(statearr_36571_38155[(2)] = null);

(statearr_36571_38155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (22))){
var state_36549__$1 = state_36549;
var statearr_36572_38156 = state_36549__$1;
(statearr_36572_38156[(2)] = null);

(statearr_36572_38156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (6))){
var inst_36487 = (state_36549[(13)]);
var inst_36497 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36487) : f.call(null,inst_36487));
var inst_36498 = cljs.core.seq(inst_36497);
var inst_36499 = inst_36498;
var inst_36500 = null;
var inst_36501 = (0);
var inst_36502 = (0);
var state_36549__$1 = (function (){var statearr_36574 = state_36549;
(statearr_36574[(8)] = inst_36499);

(statearr_36574[(9)] = inst_36502);

(statearr_36574[(10)] = inst_36501);

(statearr_36574[(12)] = inst_36500);

return statearr_36574;
})();
var statearr_36575_38160 = state_36549__$1;
(statearr_36575_38160[(2)] = null);

(statearr_36575_38160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (17))){
var inst_36513 = (state_36549[(7)]);
var inst_36518 = cljs.core.chunk_first(inst_36513);
var inst_36519 = cljs.core.chunk_rest(inst_36513);
var inst_36520 = cljs.core.count(inst_36518);
var inst_36499 = inst_36519;
var inst_36500 = inst_36518;
var inst_36501 = inst_36520;
var inst_36502 = (0);
var state_36549__$1 = (function (){var statearr_36577 = state_36549;
(statearr_36577[(8)] = inst_36499);

(statearr_36577[(9)] = inst_36502);

(statearr_36577[(10)] = inst_36501);

(statearr_36577[(12)] = inst_36500);

return statearr_36577;
})();
var statearr_36578_38161 = state_36549__$1;
(statearr_36578_38161[(2)] = null);

(statearr_36578_38161[(1)] = (8));


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
var statearr_36580_38163 = state_36549__$1;
(statearr_36580_38163[(2)] = inst_36534);

(statearr_36580_38163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (2))){
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36549__$1,(4),in$);
} else {
if((state_val_36550 === (23))){
var inst_36542 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36582_38164 = state_36549__$1;
(statearr_36582_38164[(2)] = inst_36542);

(statearr_36582_38164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (19))){
var inst_36529 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36583_38165 = state_36549__$1;
(statearr_36583_38165[(2)] = inst_36529);

(statearr_36583_38165[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (11))){
var inst_36499 = (state_36549[(8)]);
var inst_36513 = (state_36549[(7)]);
var inst_36513__$1 = cljs.core.seq(inst_36499);
var state_36549__$1 = (function (){var statearr_36585 = state_36549;
(statearr_36585[(7)] = inst_36513__$1);

return statearr_36585;
})();
if(inst_36513__$1){
var statearr_36586_38166 = state_36549__$1;
(statearr_36586_38166[(1)] = (14));

} else {
var statearr_36587_38169 = state_36549__$1;
(statearr_36587_38169[(1)] = (15));

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
var statearr_36589_38171 = state_36549__$1;
(statearr_36589_38171[(1)] = (21));

} else {
var statearr_36591_38172 = state_36549__$1;
(statearr_36591_38172[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (5))){
var inst_36490 = cljs.core.async.close_BANG_(out);
var state_36549__$1 = state_36549;
var statearr_36592_38173 = state_36549__$1;
(statearr_36592_38173[(2)] = inst_36490);

(statearr_36592_38173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (14))){
var inst_36513 = (state_36549[(7)]);
var inst_36516 = cljs.core.chunked_seq_QMARK_(inst_36513);
var state_36549__$1 = state_36549;
if(inst_36516){
var statearr_36594_38174 = state_36549__$1;
(statearr_36594_38174[(1)] = (17));

} else {
var statearr_36595_38177 = state_36549__$1;
(statearr_36595_38177[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (16))){
var inst_36532 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36596_38179 = state_36549__$1;
(statearr_36596_38179[(2)] = inst_36532);

(statearr_36596_38179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (10))){
var inst_36502 = (state_36549[(9)]);
var inst_36500 = (state_36549[(12)]);
var inst_36507 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36500,inst_36502);
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36549__$1,(13),out,inst_36507);
} else {
if((state_val_36550 === (18))){
var inst_36513 = (state_36549[(7)]);
var inst_36523 = cljs.core.first(inst_36513);
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36549__$1,(20),out,inst_36523);
} else {
if((state_val_36550 === (8))){
var inst_36502 = (state_36549[(9)]);
var inst_36501 = (state_36549[(10)]);
var inst_36504 = (inst_36502 < inst_36501);
var inst_36505 = inst_36504;
var state_36549__$1 = state_36549;
if(cljs.core.truth_(inst_36505)){
var statearr_36598_38180 = state_36549__$1;
(statearr_36598_38180[(1)] = (10));

} else {
var statearr_36600_38181 = state_36549__$1;
(statearr_36600_38181[(1)] = (11));

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
var statearr_36601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36601[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__);

(statearr_36601[(1)] = (1));

return statearr_36601;
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
}catch (e36603){if((e36603 instanceof Object)){
var ex__34203__auto__ = e36603;
var statearr_36604_38183 = state_36549;
(statearr_36604_38183[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38184 = state_36549;
state_36549 = G__38184;
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
var state__34269__auto__ = (function (){var statearr_36606 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36606[(6)] = c__34267__auto__);

return statearr_36606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36609 = arguments.length;
switch (G__36609) {
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
var G__36613 = arguments.length;
switch (G__36613) {
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
var G__36618 = arguments.length;
switch (G__36618) {
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
var c__34267__auto___38190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36644){
var state_val_36645 = (state_36644[(1)]);
if((state_val_36645 === (7))){
var inst_36639 = (state_36644[(2)]);
var state_36644__$1 = state_36644;
var statearr_36647_38191 = state_36644__$1;
(statearr_36647_38191[(2)] = inst_36639);

(statearr_36647_38191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (1))){
var inst_36620 = null;
var state_36644__$1 = (function (){var statearr_36648 = state_36644;
(statearr_36648[(7)] = inst_36620);

return statearr_36648;
})();
var statearr_36650_38192 = state_36644__$1;
(statearr_36650_38192[(2)] = null);

(statearr_36650_38192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (4))){
var inst_36624 = (state_36644[(8)]);
var inst_36624__$1 = (state_36644[(2)]);
var inst_36625 = (inst_36624__$1 == null);
var inst_36626 = cljs.core.not(inst_36625);
var state_36644__$1 = (function (){var statearr_36651 = state_36644;
(statearr_36651[(8)] = inst_36624__$1);

return statearr_36651;
})();
if(inst_36626){
var statearr_36652_38193 = state_36644__$1;
(statearr_36652_38193[(1)] = (5));

} else {
var statearr_36654_38195 = state_36644__$1;
(statearr_36654_38195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (6))){
var state_36644__$1 = state_36644;
var statearr_36655_38196 = state_36644__$1;
(statearr_36655_38196[(2)] = null);

(statearr_36655_38196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (3))){
var inst_36641 = (state_36644[(2)]);
var inst_36642 = cljs.core.async.close_BANG_(out);
var state_36644__$1 = (function (){var statearr_36656 = state_36644;
(statearr_36656[(9)] = inst_36641);

return statearr_36656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36644__$1,inst_36642);
} else {
if((state_val_36645 === (2))){
var state_36644__$1 = state_36644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36644__$1,(4),ch);
} else {
if((state_val_36645 === (11))){
var inst_36624 = (state_36644[(8)]);
var inst_36633 = (state_36644[(2)]);
var inst_36620 = inst_36624;
var state_36644__$1 = (function (){var statearr_36658 = state_36644;
(statearr_36658[(10)] = inst_36633);

(statearr_36658[(7)] = inst_36620);

return statearr_36658;
})();
var statearr_36659_38198 = state_36644__$1;
(statearr_36659_38198[(2)] = null);

(statearr_36659_38198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (9))){
var inst_36624 = (state_36644[(8)]);
var state_36644__$1 = state_36644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36644__$1,(11),out,inst_36624);
} else {
if((state_val_36645 === (5))){
var inst_36624 = (state_36644[(8)]);
var inst_36620 = (state_36644[(7)]);
var inst_36628 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36624,inst_36620);
var state_36644__$1 = state_36644;
if(inst_36628){
var statearr_36662_38199 = state_36644__$1;
(statearr_36662_38199[(1)] = (8));

} else {
var statearr_36663_38200 = state_36644__$1;
(statearr_36663_38200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (10))){
var inst_36636 = (state_36644[(2)]);
var state_36644__$1 = state_36644;
var statearr_36665_38202 = state_36644__$1;
(statearr_36665_38202[(2)] = inst_36636);

(statearr_36665_38202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (8))){
var inst_36620 = (state_36644[(7)]);
var tmp36661 = inst_36620;
var inst_36620__$1 = tmp36661;
var state_36644__$1 = (function (){var statearr_36666 = state_36644;
(statearr_36666[(7)] = inst_36620__$1);

return statearr_36666;
})();
var statearr_36667_38203 = state_36644__$1;
(statearr_36667_38203[(2)] = null);

(statearr_36667_38203[(1)] = (2));


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
var statearr_36669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36669[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36669[(1)] = (1));

return statearr_36669;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36644){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36644);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36670){if((e36670 instanceof Object)){
var ex__34203__auto__ = e36670;
var statearr_36672_38205 = state_36644;
(statearr_36672_38205[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38207 = state_36644;
state_36644 = G__38207;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36673 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36673[(6)] = c__34267__auto___38190);

return statearr_36673;
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
var G__36677 = arguments.length;
switch (G__36677) {
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
var c__34267__auto___38210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36718){
var state_val_36719 = (state_36718[(1)]);
if((state_val_36719 === (7))){
var inst_36714 = (state_36718[(2)]);
var state_36718__$1 = state_36718;
var statearr_36721_38212 = state_36718__$1;
(statearr_36721_38212[(2)] = inst_36714);

(statearr_36721_38212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (1))){
var inst_36680 = (new Array(n));
var inst_36681 = inst_36680;
var inst_36682 = (0);
var state_36718__$1 = (function (){var statearr_36722 = state_36718;
(statearr_36722[(7)] = inst_36682);

(statearr_36722[(8)] = inst_36681);

return statearr_36722;
})();
var statearr_36723_38213 = state_36718__$1;
(statearr_36723_38213[(2)] = null);

(statearr_36723_38213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (4))){
var inst_36685 = (state_36718[(9)]);
var inst_36685__$1 = (state_36718[(2)]);
var inst_36686 = (inst_36685__$1 == null);
var inst_36687 = cljs.core.not(inst_36686);
var state_36718__$1 = (function (){var statearr_36725 = state_36718;
(statearr_36725[(9)] = inst_36685__$1);

return statearr_36725;
})();
if(inst_36687){
var statearr_36726_38215 = state_36718__$1;
(statearr_36726_38215[(1)] = (5));

} else {
var statearr_36727_38216 = state_36718__$1;
(statearr_36727_38216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (15))){
var inst_36707 = (state_36718[(2)]);
var state_36718__$1 = state_36718;
var statearr_36729_38217 = state_36718__$1;
(statearr_36729_38217[(2)] = inst_36707);

(statearr_36729_38217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (13))){
var state_36718__$1 = state_36718;
var statearr_36730_38219 = state_36718__$1;
(statearr_36730_38219[(2)] = null);

(statearr_36730_38219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (6))){
var inst_36682 = (state_36718[(7)]);
var inst_36703 = (inst_36682 > (0));
var state_36718__$1 = state_36718;
if(cljs.core.truth_(inst_36703)){
var statearr_36732_38220 = state_36718__$1;
(statearr_36732_38220[(1)] = (12));

} else {
var statearr_36733_38221 = state_36718__$1;
(statearr_36733_38221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (3))){
var inst_36716 = (state_36718[(2)]);
var state_36718__$1 = state_36718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36718__$1,inst_36716);
} else {
if((state_val_36719 === (12))){
var inst_36681 = (state_36718[(8)]);
var inst_36705 = cljs.core.vec(inst_36681);
var state_36718__$1 = state_36718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36718__$1,(15),out,inst_36705);
} else {
if((state_val_36719 === (2))){
var state_36718__$1 = state_36718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36718__$1,(4),ch);
} else {
if((state_val_36719 === (11))){
var inst_36697 = (state_36718[(2)]);
var inst_36698 = (new Array(n));
var inst_36681 = inst_36698;
var inst_36682 = (0);
var state_36718__$1 = (function (){var statearr_36735 = state_36718;
(statearr_36735[(10)] = inst_36697);

(statearr_36735[(7)] = inst_36682);

(statearr_36735[(8)] = inst_36681);

return statearr_36735;
})();
var statearr_36736_38223 = state_36718__$1;
(statearr_36736_38223[(2)] = null);

(statearr_36736_38223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (9))){
var inst_36681 = (state_36718[(8)]);
var inst_36695 = cljs.core.vec(inst_36681);
var state_36718__$1 = state_36718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36718__$1,(11),out,inst_36695);
} else {
if((state_val_36719 === (5))){
var inst_36682 = (state_36718[(7)]);
var inst_36681 = (state_36718[(8)]);
var inst_36685 = (state_36718[(9)]);
var inst_36690 = (state_36718[(11)]);
var inst_36689 = (inst_36681[inst_36682] = inst_36685);
var inst_36690__$1 = (inst_36682 + (1));
var inst_36691 = (inst_36690__$1 < n);
var state_36718__$1 = (function (){var statearr_36738 = state_36718;
(statearr_36738[(11)] = inst_36690__$1);

(statearr_36738[(12)] = inst_36689);

return statearr_36738;
})();
if(cljs.core.truth_(inst_36691)){
var statearr_36740_38226 = state_36718__$1;
(statearr_36740_38226[(1)] = (8));

} else {
var statearr_36741_38227 = state_36718__$1;
(statearr_36741_38227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (14))){
var inst_36711 = (state_36718[(2)]);
var inst_36712 = cljs.core.async.close_BANG_(out);
var state_36718__$1 = (function (){var statearr_36743 = state_36718;
(statearr_36743[(13)] = inst_36711);

return statearr_36743;
})();
var statearr_36744_38228 = state_36718__$1;
(statearr_36744_38228[(2)] = inst_36712);

(statearr_36744_38228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (10))){
var inst_36701 = (state_36718[(2)]);
var state_36718__$1 = state_36718;
var statearr_36746_38229 = state_36718__$1;
(statearr_36746_38229[(2)] = inst_36701);

(statearr_36746_38229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (8))){
var inst_36681 = (state_36718[(8)]);
var inst_36690 = (state_36718[(11)]);
var tmp36742 = inst_36681;
var inst_36681__$1 = tmp36742;
var inst_36682 = inst_36690;
var state_36718__$1 = (function (){var statearr_36747 = state_36718;
(statearr_36747[(7)] = inst_36682);

(statearr_36747[(8)] = inst_36681__$1);

return statearr_36747;
})();
var statearr_36749_38231 = state_36718__$1;
(statearr_36749_38231[(2)] = null);

(statearr_36749_38231[(1)] = (2));


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
var statearr_36750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36750[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36750[(1)] = (1));

return statearr_36750;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36718){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36718);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36756){if((e36756 instanceof Object)){
var ex__34203__auto__ = e36756;
var statearr_36759_38233 = state_36718;
(statearr_36759_38233[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38234 = state_36718;
state_36718 = G__38234;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36761 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36761[(6)] = c__34267__auto___38210);

return statearr_36761;
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
var G__36764 = arguments.length;
switch (G__36764) {
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
var c__34267__auto___38238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36809){
var state_val_36810 = (state_36809[(1)]);
if((state_val_36810 === (7))){
var inst_36805 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
var statearr_36812_38239 = state_36809__$1;
(statearr_36812_38239[(2)] = inst_36805);

(statearr_36812_38239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (1))){
var inst_36767 = [];
var inst_36768 = inst_36767;
var inst_36769 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36809__$1 = (function (){var statearr_36814 = state_36809;
(statearr_36814[(7)] = inst_36768);

(statearr_36814[(8)] = inst_36769);

return statearr_36814;
})();
var statearr_36815_38241 = state_36809__$1;
(statearr_36815_38241[(2)] = null);

(statearr_36815_38241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (4))){
var inst_36772 = (state_36809[(9)]);
var inst_36772__$1 = (state_36809[(2)]);
var inst_36773 = (inst_36772__$1 == null);
var inst_36774 = cljs.core.not(inst_36773);
var state_36809__$1 = (function (){var statearr_36817 = state_36809;
(statearr_36817[(9)] = inst_36772__$1);

return statearr_36817;
})();
if(inst_36774){
var statearr_36818_38243 = state_36809__$1;
(statearr_36818_38243[(1)] = (5));

} else {
var statearr_36819_38244 = state_36809__$1;
(statearr_36819_38244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (15))){
var inst_36799 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
var statearr_36820_38245 = state_36809__$1;
(statearr_36820_38245[(2)] = inst_36799);

(statearr_36820_38245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (13))){
var state_36809__$1 = state_36809;
var statearr_36822_38246 = state_36809__$1;
(statearr_36822_38246[(2)] = null);

(statearr_36822_38246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (6))){
var inst_36768 = (state_36809[(7)]);
var inst_36794 = inst_36768.length;
var inst_36795 = (inst_36794 > (0));
var state_36809__$1 = state_36809;
if(cljs.core.truth_(inst_36795)){
var statearr_36823_38248 = state_36809__$1;
(statearr_36823_38248[(1)] = (12));

} else {
var statearr_36824_38249 = state_36809__$1;
(statearr_36824_38249[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (3))){
var inst_36807 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36809__$1,inst_36807);
} else {
if((state_val_36810 === (12))){
var inst_36768 = (state_36809[(7)]);
var inst_36797 = cljs.core.vec(inst_36768);
var state_36809__$1 = state_36809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36809__$1,(15),out,inst_36797);
} else {
if((state_val_36810 === (2))){
var state_36809__$1 = state_36809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36809__$1,(4),ch);
} else {
if((state_val_36810 === (11))){
var inst_36772 = (state_36809[(9)]);
var inst_36776 = (state_36809[(10)]);
var inst_36787 = (state_36809[(2)]);
var inst_36788 = [];
var inst_36789 = inst_36788.push(inst_36772);
var inst_36768 = inst_36788;
var inst_36769 = inst_36776;
var state_36809__$1 = (function (){var statearr_36827 = state_36809;
(statearr_36827[(11)] = inst_36789);

(statearr_36827[(7)] = inst_36768);

(statearr_36827[(8)] = inst_36769);

(statearr_36827[(12)] = inst_36787);

return statearr_36827;
})();
var statearr_36828_38251 = state_36809__$1;
(statearr_36828_38251[(2)] = null);

(statearr_36828_38251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (9))){
var inst_36768 = (state_36809[(7)]);
var inst_36785 = cljs.core.vec(inst_36768);
var state_36809__$1 = state_36809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36809__$1,(11),out,inst_36785);
} else {
if((state_val_36810 === (5))){
var inst_36772 = (state_36809[(9)]);
var inst_36769 = (state_36809[(8)]);
var inst_36776 = (state_36809[(10)]);
var inst_36776__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36772) : f.call(null,inst_36772));
var inst_36778 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36776__$1,inst_36769);
var inst_36779 = cljs.core.keyword_identical_QMARK_(inst_36769,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36780 = ((inst_36778) || (inst_36779));
var state_36809__$1 = (function (){var statearr_36831 = state_36809;
(statearr_36831[(10)] = inst_36776__$1);

return statearr_36831;
})();
if(cljs.core.truth_(inst_36780)){
var statearr_36832_38252 = state_36809__$1;
(statearr_36832_38252[(1)] = (8));

} else {
var statearr_36833_38253 = state_36809__$1;
(statearr_36833_38253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (14))){
var inst_36802 = (state_36809[(2)]);
var inst_36803 = cljs.core.async.close_BANG_(out);
var state_36809__$1 = (function (){var statearr_36835 = state_36809;
(statearr_36835[(13)] = inst_36802);

return statearr_36835;
})();
var statearr_36837_38254 = state_36809__$1;
(statearr_36837_38254[(2)] = inst_36803);

(statearr_36837_38254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (10))){
var inst_36792 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
var statearr_36838_38255 = state_36809__$1;
(statearr_36838_38255[(2)] = inst_36792);

(statearr_36838_38255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (8))){
var inst_36772 = (state_36809[(9)]);
var inst_36768 = (state_36809[(7)]);
var inst_36776 = (state_36809[(10)]);
var inst_36782 = inst_36768.push(inst_36772);
var tmp36834 = inst_36768;
var inst_36768__$1 = tmp36834;
var inst_36769 = inst_36776;
var state_36809__$1 = (function (){var statearr_36840 = state_36809;
(statearr_36840[(14)] = inst_36782);

(statearr_36840[(7)] = inst_36768__$1);

(statearr_36840[(8)] = inst_36769);

return statearr_36840;
})();
var statearr_36841_38256 = state_36809__$1;
(statearr_36841_38256[(2)] = null);

(statearr_36841_38256[(1)] = (2));


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
var statearr_36843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36843[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36843[(1)] = (1));

return statearr_36843;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36809){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36809);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36844){if((e36844 instanceof Object)){
var ex__34203__auto__ = e36844;
var statearr_36845_38257 = state_36809;
(statearr_36845_38257[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38258 = state_36809;
state_36809 = G__38258;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36847 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36847[(6)] = c__34267__auto___38238);

return statearr_36847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
