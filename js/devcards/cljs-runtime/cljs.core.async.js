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
var val_36805 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36805) : fn1.call(null,val_36805));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36805) : fn1.call(null,val_36805));
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
var n__4666__auto___36811 = n;
var x_36812 = (0);
while(true){
if((x_36812 < n__4666__auto___36811)){
(a[x_36812] = x_36812);

var G__36814 = (x_36812 + (1));
x_36812 = G__36814;
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
return (function (p1__34355_SHARP_){
var G__34357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34355_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34357) : fret.call(null,G__34357));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34356_SHARP_){
var G__34358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34356_SHARP_,port], null);
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
var G__36824 = (i + (1));
i = G__36824;
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
var len__4789__auto___36827 = arguments.length;
var i__4790__auto___36828 = (0);
while(true){
if((i__4790__auto___36828 < len__4789__auto___36827)){
args__4795__auto__.push((arguments[i__4790__auto___36828]));

var G__36829 = (i__4790__auto___36828 + (1));
i__4790__auto___36828 = G__36829;
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
var c__34267__auto___36833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34404){
var state_val_34405 = (state_34404[(1)]);
if((state_val_34405 === (7))){
var inst_34400 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34418_36834 = state_34404__$1;
(statearr_34418_36834[(2)] = inst_34400);

(statearr_34418_36834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (1))){
var state_34404__$1 = state_34404;
var statearr_34419_36836 = state_34404__$1;
(statearr_34419_36836[(2)] = null);

(statearr_34419_36836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (4))){
var inst_34383 = (state_34404[(7)]);
var inst_34383__$1 = (state_34404[(2)]);
var inst_34384 = (inst_34383__$1 == null);
var state_34404__$1 = (function (){var statearr_34420 = state_34404;
(statearr_34420[(7)] = inst_34383__$1);

return statearr_34420;
})();
if(cljs.core.truth_(inst_34384)){
var statearr_34421_36837 = state_34404__$1;
(statearr_34421_36837[(1)] = (5));

} else {
var statearr_34422_36838 = state_34404__$1;
(statearr_34422_36838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (13))){
var state_34404__$1 = state_34404;
var statearr_34423_36840 = state_34404__$1;
(statearr_34423_36840[(2)] = null);

(statearr_34423_36840[(1)] = (14));


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
var statearr_34424_36842 = state_34404__$1;
(statearr_34424_36842[(2)] = null);

(statearr_34424_36842[(1)] = (2));


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
var statearr_34425_36844 = state_34404__$1;
(statearr_34425_36844[(1)] = (12));

} else {
var statearr_34426_36845 = state_34404__$1;
(statearr_34426_36845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (9))){
var state_34404__$1 = state_34404;
var statearr_34427_36846 = state_34404__$1;
(statearr_34427_36846[(2)] = null);

(statearr_34427_36846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (5))){
var state_34404__$1 = state_34404;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34428_36848 = state_34404__$1;
(statearr_34428_36848[(1)] = (8));

} else {
var statearr_34429_36849 = state_34404__$1;
(statearr_34429_36849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (14))){
var inst_34398 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34430_36850 = state_34404__$1;
(statearr_34430_36850[(2)] = inst_34398);

(statearr_34430_36850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (10))){
var inst_34390 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34431_36852 = state_34404__$1;
(statearr_34431_36852[(2)] = inst_34390);

(statearr_34431_36852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (8))){
var inst_34387 = cljs.core.async.close_BANG_(to);
var state_34404__$1 = state_34404;
var statearr_34432_36853 = state_34404__$1;
(statearr_34432_36853[(2)] = inst_34387);

(statearr_34432_36853[(1)] = (10));


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
var statearr_34435_36856 = state_34404;
(statearr_34435_36856[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36858 = state_34404;
state_34404 = G__36858;
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
(statearr_34436[(6)] = c__34267__auto___36833);

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
var c__34267__auto___36861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
}catch (e34453){if((e34453 instanceof Object)){
var ex__34203__auto__ = e34453;
var statearr_34454_36865 = state_34445;
(statearr_34454_36865[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34453;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36867 = state_34445;
state_34445 = G__36867;
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
var state__34269__auto__ = (function (){var statearr_34455 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34455[(6)] = c__34267__auto___36861);

return statearr_34455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34456){
var vec__34457 = p__34456;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34457,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34457,(1),null);
var job = vec__34457;
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
var n__4666__auto___36870 = n;
var __36871 = (0);
while(true){
if((__36871 < n__4666__auto___36870)){
var G__34461_36872 = type;
var G__34461_36873__$1 = (((G__34461_36872 instanceof cljs.core.Keyword))?G__34461_36872.fqn:null);
switch (G__34461_36873__$1) {
case "compute":
var c__34267__auto___36875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36871,c__34267__auto___36875,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36871,c__34267__auto___36875,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async){
return (function (state_34474){
var state_val_34475 = (state_34474[(1)]);
if((state_val_34475 === (1))){
var state_34474__$1 = state_34474;
var statearr_34476_36877 = state_34474__$1;
(statearr_34476_36877[(2)] = null);

(statearr_34476_36877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (2))){
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34474__$1,(4),jobs);
} else {
if((state_val_34475 === (3))){
var inst_34472 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34474__$1,inst_34472);
} else {
if((state_val_34475 === (4))){
var inst_34464 = (state_34474[(2)]);
var inst_34465 = process(inst_34464);
var state_34474__$1 = state_34474;
if(cljs.core.truth_(inst_34465)){
var statearr_34478_36880 = state_34474__$1;
(statearr_34478_36880[(1)] = (5));

} else {
var statearr_34479_36881 = state_34474__$1;
(statearr_34479_36881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (5))){
var state_34474__$1 = state_34474;
var statearr_34480_36882 = state_34474__$1;
(statearr_34480_36882[(2)] = null);

(statearr_34480_36882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (6))){
var state_34474__$1 = state_34474;
var statearr_34482_36884 = state_34474__$1;
(statearr_34482_36884[(2)] = null);

(statearr_34482_36884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (7))){
var inst_34470 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
var statearr_34483_36885 = state_34474__$1;
(statearr_34483_36885[(2)] = inst_34470);

(statearr_34483_36885[(1)] = (3));


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
});})(__36871,c__34267__auto___36875,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async))
;
return ((function (__36871,switch__34199__auto__,c__34267__auto___36875,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34484 = [null,null,null,null,null,null,null];
(statearr_34484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34484[(1)] = (1));

return statearr_34484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34474){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34474);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34485){if((e34485 instanceof Object)){
var ex__34203__auto__ = e34485;
var statearr_34487_36888 = state_34474;
(statearr_34487_36888[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36889 = state_34474;
state_34474 = G__36889;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34474){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36871,switch__34199__auto__,c__34267__auto___36875,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34488 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34488[(6)] = c__34267__auto___36875);

return statearr_34488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36871,c__34267__auto___36875,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async))
);


break;
case "async":
var c__34267__auto___36891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36871,c__34267__auto___36891,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36871,c__34267__auto___36891,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async){
return (function (state_34501){
var state_val_34502 = (state_34501[(1)]);
if((state_val_34502 === (1))){
var state_34501__$1 = state_34501;
var statearr_34508_36893 = state_34501__$1;
(statearr_34508_36893[(2)] = null);

(statearr_34508_36893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34502 === (2))){
var state_34501__$1 = state_34501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34501__$1,(4),jobs);
} else {
if((state_val_34502 === (3))){
var inst_34499 = (state_34501[(2)]);
var state_34501__$1 = state_34501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34501__$1,inst_34499);
} else {
if((state_val_34502 === (4))){
var inst_34491 = (state_34501[(2)]);
var inst_34492 = async(inst_34491);
var state_34501__$1 = state_34501;
if(cljs.core.truth_(inst_34492)){
var statearr_34511_36896 = state_34501__$1;
(statearr_34511_36896[(1)] = (5));

} else {
var statearr_34512_36897 = state_34501__$1;
(statearr_34512_36897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34502 === (5))){
var state_34501__$1 = state_34501;
var statearr_34513_36898 = state_34501__$1;
(statearr_34513_36898[(2)] = null);

(statearr_34513_36898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34502 === (6))){
var state_34501__$1 = state_34501;
var statearr_34514_36900 = state_34501__$1;
(statearr_34514_36900[(2)] = null);

(statearr_34514_36900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34502 === (7))){
var inst_34497 = (state_34501[(2)]);
var state_34501__$1 = state_34501;
var statearr_34516_36901 = state_34501__$1;
(statearr_34516_36901[(2)] = inst_34497);

(statearr_34516_36901[(1)] = (3));


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
});})(__36871,c__34267__auto___36891,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async))
;
return ((function (__36871,switch__34199__auto__,c__34267__auto___36891,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34517 = [null,null,null,null,null,null,null];
(statearr_34517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34517[(1)] = (1));

return statearr_34517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34501){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34501);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34518){if((e34518 instanceof Object)){
var ex__34203__auto__ = e34518;
var statearr_34519_36904 = state_34501;
(statearr_34519_36904[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36905 = state_34501;
state_34501 = G__36905;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36871,switch__34199__auto__,c__34267__auto___36891,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34524 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34524[(6)] = c__34267__auto___36891);

return statearr_34524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36871,c__34267__auto___36891,G__34461_36872,G__34461_36873__$1,n__4666__auto___36870,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34461_36873__$1)].join('')));

}

var G__36907 = (__36871 + (1));
__36871 = G__36907;
continue;
} else {
}
break;
}

var c__34267__auto___36909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34549){
var state_val_34550 = (state_34549[(1)]);
if((state_val_34550 === (7))){
var inst_34545 = (state_34549[(2)]);
var state_34549__$1 = state_34549;
var statearr_34551_36910 = state_34549__$1;
(statearr_34551_36910[(2)] = inst_34545);

(statearr_34551_36910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (1))){
var state_34549__$1 = state_34549;
var statearr_34552_36912 = state_34549__$1;
(statearr_34552_36912[(2)] = null);

(statearr_34552_36912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (4))){
var inst_34527 = (state_34549[(7)]);
var inst_34527__$1 = (state_34549[(2)]);
var inst_34531 = (inst_34527__$1 == null);
var state_34549__$1 = (function (){var statearr_34556 = state_34549;
(statearr_34556[(7)] = inst_34527__$1);

return statearr_34556;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34557_36913 = state_34549__$1;
(statearr_34557_36913[(1)] = (5));

} else {
var statearr_34558_36915 = state_34549__$1;
(statearr_34558_36915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (6))){
var inst_34535 = (state_34549[(8)]);
var inst_34527 = (state_34549[(7)]);
var inst_34535__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34537 = [inst_34527,inst_34535__$1];
var inst_34538 = (new cljs.core.PersistentVector(null,2,(5),inst_34536,inst_34537,null));
var state_34549__$1 = (function (){var statearr_34559 = state_34549;
(statearr_34559[(8)] = inst_34535__$1);

return statearr_34559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34549__$1,(8),jobs,inst_34538);
} else {
if((state_val_34550 === (3))){
var inst_34547 = (state_34549[(2)]);
var state_34549__$1 = state_34549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34549__$1,inst_34547);
} else {
if((state_val_34550 === (2))){
var state_34549__$1 = state_34549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34549__$1,(4),from);
} else {
if((state_val_34550 === (9))){
var inst_34542 = (state_34549[(2)]);
var state_34549__$1 = (function (){var statearr_34560 = state_34549;
(statearr_34560[(9)] = inst_34542);

return statearr_34560;
})();
var statearr_34561_36918 = state_34549__$1;
(statearr_34561_36918[(2)] = null);

(statearr_34561_36918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (5))){
var inst_34533 = cljs.core.async.close_BANG_(jobs);
var state_34549__$1 = state_34549;
var statearr_34562_36920 = state_34549__$1;
(statearr_34562_36920[(2)] = inst_34533);

(statearr_34562_36920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (8))){
var inst_34535 = (state_34549[(8)]);
var inst_34540 = (state_34549[(2)]);
var state_34549__$1 = (function (){var statearr_34563 = state_34549;
(statearr_34563[(10)] = inst_34540);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34549__$1,(9),results,inst_34535);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34549){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34549);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34565){if((e34565 instanceof Object)){
var ex__34203__auto__ = e34565;
var statearr_34566_36923 = state_34549;
(statearr_34566_36923[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36924 = state_34549;
state_34549 = G__36924;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34567 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34567[(6)] = c__34267__auto___36909);

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
var statearr_34607_36927 = state_34605__$1;
(statearr_34607_36927[(2)] = inst_34601);

(statearr_34607_36927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (20))){
var state_34605__$1 = state_34605;
var statearr_34608_36928 = state_34605__$1;
(statearr_34608_36928[(2)] = null);

(statearr_34608_36928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34609_36930 = state_34605__$1;
(statearr_34609_36930[(2)] = null);

(statearr_34609_36930[(1)] = (2));


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
var statearr_34611_36932 = state_34605__$1;
(statearr_34611_36932[(1)] = (5));

} else {
var statearr_34612_36933 = state_34605__$1;
(statearr_34612_36933[(1)] = (6));

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
var statearr_34613_36935 = state_34605__$1;
(statearr_34613_36935[(2)] = inst_34596);

(statearr_34613_36935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (13))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34614 = state_34605;
(statearr_34614[(9)] = inst_34598);

return statearr_34614;
})();
var statearr_34615_36936 = state_34605__$1;
(statearr_34615_36936[(2)] = null);

(statearr_34615_36936[(1)] = (2));


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
var statearr_34616_36938 = state_34605__$1;
(statearr_34616_36938[(1)] = (19));

} else {
var statearr_34617_36939 = state_34605__$1;
(statearr_34617_36939[(1)] = (20));

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
var statearr_34618_36942 = state_34605__$1;
(statearr_34618_36942[(2)] = null);

(statearr_34618_36942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (11))){
var inst_34580 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34619 = state_34605;
(statearr_34619[(10)] = inst_34580);

return statearr_34619;
})();
var statearr_34620_36943 = state_34605__$1;
(statearr_34620_36943[(2)] = null);

(statearr_34620_36943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var state_34605__$1 = state_34605;
var statearr_34621_36945 = state_34605__$1;
(statearr_34621_36945[(2)] = null);

(statearr_34621_36945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var state_34605__$1 = state_34605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34622_36946 = state_34605__$1;
(statearr_34622_36946[(1)] = (8));

} else {
var statearr_34623_36948 = state_34605__$1;
(statearr_34623_36948[(1)] = (9));

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
var statearr_34625_36950 = state_34605__$1;
(statearr_34625_36950[(1)] = (15));

} else {
var statearr_34626_36951 = state_34605__$1;
(statearr_34626_36951[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (16))){
var state_34605__$1 = state_34605;
var statearr_34627_36952 = state_34605__$1;
(statearr_34627_36952[(2)] = false);

(statearr_34627_36952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34577 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34628_36954 = state_34605__$1;
(statearr_34628_36954[(2)] = inst_34577);

(statearr_34628_36954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (18))){
var inst_34588 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34629_36955 = state_34605__$1;
(statearr_34629_36955[(2)] = inst_34588);

(statearr_34629_36955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34574 = cljs.core.async.close_BANG_(to);
var state_34605__$1 = state_34605;
var statearr_34630_36957 = state_34605__$1;
(statearr_34630_36957[(2)] = inst_34574);

(statearr_34630_36957[(1)] = (10));


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
var statearr_34633_36959 = state_34605;
(statearr_34633_36959[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36961 = state_34605;
state_34605 = G__36961;
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
var G__34649 = arguments.length;
switch (G__34649) {
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
var c__34267__auto___36972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34677){
var state_val_34678 = (state_34677[(1)]);
if((state_val_34678 === (7))){
var inst_34673 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
var statearr_34679_36974 = state_34677__$1;
(statearr_34679_36974[(2)] = inst_34673);

(statearr_34679_36974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (1))){
var state_34677__$1 = state_34677;
var statearr_34680_36976 = state_34677__$1;
(statearr_34680_36976[(2)] = null);

(statearr_34680_36976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (4))){
var inst_34654 = (state_34677[(7)]);
var inst_34654__$1 = (state_34677[(2)]);
var inst_34655 = (inst_34654__$1 == null);
var state_34677__$1 = (function (){var statearr_34681 = state_34677;
(statearr_34681[(7)] = inst_34654__$1);

return statearr_34681;
})();
if(cljs.core.truth_(inst_34655)){
var statearr_34683_36978 = state_34677__$1;
(statearr_34683_36978[(1)] = (5));

} else {
var statearr_34684_36979 = state_34677__$1;
(statearr_34684_36979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (13))){
var state_34677__$1 = state_34677;
var statearr_34685_36980 = state_34677__$1;
(statearr_34685_36980[(2)] = null);

(statearr_34685_36980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (6))){
var inst_34654 = (state_34677[(7)]);
var inst_34660 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34654) : p.call(null,inst_34654));
var state_34677__$1 = state_34677;
if(cljs.core.truth_(inst_34660)){
var statearr_34686_36982 = state_34677__$1;
(statearr_34686_36982[(1)] = (9));

} else {
var statearr_34688_36983 = state_34677__$1;
(statearr_34688_36983[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (3))){
var inst_34675 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34677__$1,inst_34675);
} else {
if((state_val_34678 === (12))){
var state_34677__$1 = state_34677;
var statearr_34689_36985 = state_34677__$1;
(statearr_34689_36985[(2)] = null);

(statearr_34689_36985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (2))){
var state_34677__$1 = state_34677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34677__$1,(4),ch);
} else {
if((state_val_34678 === (11))){
var inst_34654 = (state_34677[(7)]);
var inst_34664 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34677__$1,(8),inst_34664,inst_34654);
} else {
if((state_val_34678 === (9))){
var state_34677__$1 = state_34677;
var statearr_34691_36987 = state_34677__$1;
(statearr_34691_36987[(2)] = tc);

(statearr_34691_36987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (5))){
var inst_34657 = cljs.core.async.close_BANG_(tc);
var inst_34658 = cljs.core.async.close_BANG_(fc);
var state_34677__$1 = (function (){var statearr_34693 = state_34677;
(statearr_34693[(8)] = inst_34657);

return statearr_34693;
})();
var statearr_34694_36989 = state_34677__$1;
(statearr_34694_36989[(2)] = inst_34658);

(statearr_34694_36989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (14))){
var inst_34671 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
var statearr_34695_36990 = state_34677__$1;
(statearr_34695_36990[(2)] = inst_34671);

(statearr_34695_36990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (10))){
var state_34677__$1 = state_34677;
var statearr_34699_36991 = state_34677__$1;
(statearr_34699_36991[(2)] = fc);

(statearr_34699_36991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (8))){
var inst_34666 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
if(cljs.core.truth_(inst_34666)){
var statearr_34700_36993 = state_34677__$1;
(statearr_34700_36993[(1)] = (12));

} else {
var statearr_34701_36994 = state_34677__$1;
(statearr_34701_36994[(1)] = (13));

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
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34677){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34677);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34703){if((e34703 instanceof Object)){
var ex__34203__auto__ = e34703;
var statearr_34704_37001 = state_34677;
(statearr_34704_37001[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37003 = state_34677;
state_34677 = G__37003;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34706 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34706[(6)] = c__34267__auto___36972);

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
var statearr_34732_37008 = state_34730__$1;
(statearr_34732_37008[(2)] = inst_34726);

(statearr_34732_37008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (1))){
var inst_34707 = init;
var state_34730__$1 = (function (){var statearr_34733 = state_34730;
(statearr_34733[(7)] = inst_34707);

return statearr_34733;
})();
var statearr_34737_37009 = state_34730__$1;
(statearr_34737_37009[(2)] = null);

(statearr_34737_37009[(1)] = (2));


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
var statearr_34739_37011 = state_34730__$1;
(statearr_34739_37011[(1)] = (5));

} else {
var statearr_34740_37012 = state_34730__$1;
(statearr_34740_37012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (6))){
var inst_34710 = (state_34730[(8)]);
var inst_34714 = (state_34730[(9)]);
var inst_34707 = (state_34730[(7)]);
var inst_34714__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34707,inst_34710) : f.call(null,inst_34707,inst_34710));
var inst_34715 = cljs.core.reduced_QMARK_(inst_34714__$1);
var state_34730__$1 = (function (){var statearr_34744 = state_34730;
(statearr_34744[(9)] = inst_34714__$1);

return statearr_34744;
})();
if(inst_34715){
var statearr_34745_37013 = state_34730__$1;
(statearr_34745_37013[(1)] = (8));

} else {
var statearr_34746_37014 = state_34730__$1;
(statearr_34746_37014[(1)] = (9));

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
var state_34730__$1 = (function (){var statearr_34747 = state_34730;
(statearr_34747[(7)] = inst_34707);

return statearr_34747;
})();
var statearr_34748_37015 = state_34730__$1;
(statearr_34748_37015[(2)] = null);

(statearr_34748_37015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (5))){
var inst_34707 = (state_34730[(7)]);
var state_34730__$1 = state_34730;
var statearr_34749_37016 = state_34730__$1;
(statearr_34749_37016[(2)] = inst_34707);

(statearr_34749_37016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (10))){
var inst_34724 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34750_37017 = state_34730__$1;
(statearr_34750_37017[(2)] = inst_34724);

(statearr_34750_37017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (8))){
var inst_34714 = (state_34730[(9)]);
var inst_34720 = cljs.core.deref(inst_34714);
var state_34730__$1 = state_34730;
var statearr_34751_37018 = state_34730__$1;
(statearr_34751_37018[(2)] = inst_34720);

(statearr_34751_37018[(1)] = (10));


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
var statearr_34754_37019 = state_34730;
(statearr_34754_37019[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37020 = state_34730;
state_34730 = G__37020;
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
var statearr_34765_37027 = state_34761;
(statearr_34765_37027[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37028 = state_34761;
state_34761 = G__37028;
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
var statearr_34802_37030 = state_34800__$1;
(statearr_34802_37030[(2)] = inst_34782);

(statearr_34802_37030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34775 = cljs.core.seq(coll);
var inst_34776 = inst_34775;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34776);

return statearr_34803;
})();
var statearr_34804_37031 = state_34800__$1;
(statearr_34804_37031[(2)] = null);

(statearr_34804_37031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (4))){
var inst_34776 = (state_34800[(7)]);
var inst_34780 = cljs.core.first(inst_34776);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34800__$1,(7),ch,inst_34780);
} else {
if((state_val_34801 === (13))){
var inst_34794 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34806_37036 = state_34800__$1;
(statearr_34806_37036[(2)] = inst_34794);

(statearr_34806_37036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34809_37039 = state_34800__$1;
(statearr_34809_37039[(1)] = (8));

} else {
var statearr_34810_37040 = state_34800__$1;
(statearr_34810_37040[(1)] = (9));

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
var statearr_34813_37041 = state_34800__$1;
(statearr_34813_37041[(2)] = null);

(statearr_34813_37041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34776 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34776)){
var statearr_34815_37043 = state_34800__$1;
(statearr_34815_37043[(1)] = (4));

} else {
var statearr_34816_37046 = state_34800__$1;
(statearr_34816_37046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34817_37048 = state_34800__$1;
(statearr_34817_37048[(2)] = inst_34791);

(statearr_34817_37048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34818_37054 = state_34800__$1;
(statearr_34818_37054[(1)] = (11));

} else {
var statearr_34819_37056 = state_34800__$1;
(statearr_34819_37056[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34776 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34820_37060 = state_34800__$1;
(statearr_34820_37060[(2)] = inst_34776);

(statearr_34820_37060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34821_37061 = state_34800__$1;
(statearr_34821_37061[(2)] = inst_34796);

(statearr_34821_37061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34776 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34776);
var inst_34776__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34822 = state_34800;
(statearr_34822[(7)] = inst_34776__$1);

return statearr_34822;
})();
var statearr_34823_37069 = state_34800__$1;
(statearr_34823_37069[(2)] = null);

(statearr_34823_37069[(1)] = (2));


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
}catch (e34825){if((e34825 instanceof Object)){
var ex__34203__auto__ = e34825;
var statearr_34826_37076 = state_34800;
(statearr_34826_37076[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37079 = state_34800;
state_34800 = G__37079;
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
var c__34267__auto___37132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34977){
var state_val_34978 = (state_34977[(1)]);
if((state_val_34978 === (7))){
var inst_34969 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_34979_37136 = state_34977__$1;
(statearr_34979_37136[(2)] = inst_34969);

(statearr_34979_37136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (20))){
var inst_34870 = (state_34977[(7)]);
var inst_34882 = cljs.core.first(inst_34870);
var inst_34883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(0),null);
var inst_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(1),null);
var state_34977__$1 = (function (){var statearr_34983 = state_34977;
(statearr_34983[(8)] = inst_34883);

return statearr_34983;
})();
if(cljs.core.truth_(inst_34884)){
var statearr_34985_37144 = state_34977__$1;
(statearr_34985_37144[(1)] = (22));

} else {
var statearr_34987_37145 = state_34977__$1;
(statearr_34987_37145[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (27))){
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
var statearr_34990_37147 = state_34977__$1;
(statearr_34990_37147[(1)] = (30));

} else {
var statearr_34991_37150 = state_34977__$1;
(statearr_34991_37150[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (1))){
var state_34977__$1 = state_34977;
var statearr_34992_37152 = state_34977__$1;
(statearr_34992_37152[(2)] = null);

(statearr_34992_37152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (24))){
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
var statearr_34994_37160 = state_34977__$1;
(statearr_34994_37160[(2)] = null);

(statearr_34994_37160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (39))){
var state_34977__$1 = state_34977;
var statearr_35001_37161 = state_34977__$1;
(statearr_35001_37161[(2)] = null);

(statearr_35001_37161[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (4))){
var inst_34839 = (state_34977[(12)]);
var inst_34839__$1 = (state_34977[(2)]);
var inst_34840 = (inst_34839__$1 == null);
var state_34977__$1 = (function (){var statearr_35003 = state_34977;
(statearr_35003[(12)] = inst_34839__$1);

return statearr_35003;
})();
if(cljs.core.truth_(inst_34840)){
var statearr_35004_37164 = state_34977__$1;
(statearr_35004_37164[(1)] = (5));

} else {
var statearr_35005_37165 = state_34977__$1;
(statearr_35005_37165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (15))){
var inst_34848 = (state_34977[(13)]);
var inst_34849 = (state_34977[(14)]);
var inst_34851 = (state_34977[(15)]);
var inst_34850 = (state_34977[(16)]);
var inst_34866 = (state_34977[(2)]);
var inst_34867 = (inst_34851 + (1));
var tmp34995 = inst_34848;
var tmp34996 = inst_34849;
var tmp34997 = inst_34850;
var inst_34848__$1 = tmp34995;
var inst_34849__$1 = tmp34996;
var inst_34850__$1 = tmp34997;
var inst_34851__$1 = inst_34867;
var state_34977__$1 = (function (){var statearr_35008 = state_34977;
(statearr_35008[(13)] = inst_34848__$1);

(statearr_35008[(18)] = inst_34866);

(statearr_35008[(14)] = inst_34849__$1);

(statearr_35008[(15)] = inst_34851__$1);

(statearr_35008[(16)] = inst_34850__$1);

return statearr_35008;
})();
var statearr_35009_37174 = state_34977__$1;
(statearr_35009_37174[(2)] = null);

(statearr_35009_37174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (21))){
var inst_34893 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35013_37179 = state_34977__$1;
(statearr_35013_37179[(2)] = inst_34893);

(statearr_35013_37179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (31))){
var inst_34919 = (state_34977[(10)]);
var inst_34923 = done(null);
var inst_34924 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34919);
var state_34977__$1 = (function (){var statearr_35014 = state_34977;
(statearr_35014[(19)] = inst_34923);

return statearr_35014;
})();
var statearr_35015_37181 = state_34977__$1;
(statearr_35015_37181[(2)] = inst_34924);

(statearr_35015_37181[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (32))){
var inst_34914 = (state_34977[(9)]);
var inst_34913 = (state_34977[(20)]);
var inst_34912 = (state_34977[(11)]);
var inst_34911 = (state_34977[(21)]);
var inst_34926 = (state_34977[(2)]);
var inst_34927 = (inst_34914 + (1));
var tmp35010 = inst_34913;
var tmp35011 = inst_34912;
var tmp35012 = inst_34911;
var inst_34911__$1 = tmp35012;
var inst_34912__$1 = tmp35011;
var inst_34913__$1 = tmp35010;
var inst_34914__$1 = inst_34927;
var state_34977__$1 = (function (){var statearr_35021 = state_34977;
(statearr_35021[(9)] = inst_34914__$1);

(statearr_35021[(22)] = inst_34926);

(statearr_35021[(20)] = inst_34913__$1);

(statearr_35021[(11)] = inst_34912__$1);

(statearr_35021[(21)] = inst_34911__$1);

return statearr_35021;
})();
var statearr_35023_37188 = state_34977__$1;
(statearr_35023_37188[(2)] = null);

(statearr_35023_37188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (40))){
var inst_34939 = (state_34977[(23)]);
var inst_34943 = done(null);
var inst_34944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34939);
var state_34977__$1 = (function (){var statearr_35024 = state_34977;
(statearr_35024[(24)] = inst_34943);

return statearr_35024;
})();
var statearr_35025_37193 = state_34977__$1;
(statearr_35025_37193[(2)] = inst_34944);

(statearr_35025_37193[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (33))){
var inst_34930 = (state_34977[(25)]);
var inst_34932 = cljs.core.chunked_seq_QMARK_(inst_34930);
var state_34977__$1 = state_34977;
if(inst_34932){
var statearr_35027_37194 = state_34977__$1;
(statearr_35027_37194[(1)] = (36));

} else {
var statearr_35030_37196 = state_34977__$1;
(statearr_35030_37196[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (13))){
var inst_34860 = (state_34977[(26)]);
var inst_34863 = cljs.core.async.close_BANG_(inst_34860);
var state_34977__$1 = state_34977;
var statearr_35032_37203 = state_34977__$1;
(statearr_35032_37203[(2)] = inst_34863);

(statearr_35032_37203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (22))){
var inst_34883 = (state_34977[(8)]);
var inst_34886 = cljs.core.async.close_BANG_(inst_34883);
var state_34977__$1 = state_34977;
var statearr_35047_37207 = state_34977__$1;
(statearr_35047_37207[(2)] = inst_34886);

(statearr_35047_37207[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (36))){
var inst_34930 = (state_34977[(25)]);
var inst_34934 = cljs.core.chunk_first(inst_34930);
var inst_34935 = cljs.core.chunk_rest(inst_34930);
var inst_34936 = cljs.core.count(inst_34934);
var inst_34911 = inst_34935;
var inst_34912 = inst_34934;
var inst_34913 = inst_34936;
var inst_34914 = (0);
var state_34977__$1 = (function (){var statearr_35049 = state_34977;
(statearr_35049[(9)] = inst_34914);

(statearr_35049[(20)] = inst_34913);

(statearr_35049[(11)] = inst_34912);

(statearr_35049[(21)] = inst_34911);

return statearr_35049;
})();
var statearr_35052_37208 = state_34977__$1;
(statearr_35052_37208[(2)] = null);

(statearr_35052_37208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (41))){
var inst_34930 = (state_34977[(25)]);
var inst_34946 = (state_34977[(2)]);
var inst_34947 = cljs.core.next(inst_34930);
var inst_34911 = inst_34947;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34977__$1 = (function (){var statearr_35055 = state_34977;
(statearr_35055[(27)] = inst_34946);

(statearr_35055[(9)] = inst_34914);

(statearr_35055[(20)] = inst_34913);

(statearr_35055[(11)] = inst_34912);

(statearr_35055[(21)] = inst_34911);

return statearr_35055;
})();
var statearr_35057_37209 = state_34977__$1;
(statearr_35057_37209[(2)] = null);

(statearr_35057_37209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (43))){
var state_34977__$1 = state_34977;
var statearr_35061_37210 = state_34977__$1;
(statearr_35061_37210[(2)] = null);

(statearr_35061_37210[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (29))){
var inst_34955 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35067_37211 = state_34977__$1;
(statearr_35067_37211[(2)] = inst_34955);

(statearr_35067_37211[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (44))){
var inst_34966 = (state_34977[(2)]);
var state_34977__$1 = (function (){var statearr_35072 = state_34977;
(statearr_35072[(28)] = inst_34966);

return statearr_35072;
})();
var statearr_35074_37216 = state_34977__$1;
(statearr_35074_37216[(2)] = null);

(statearr_35074_37216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (6))){
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
var statearr_35089_37224 = state_34977__$1;
(statearr_35089_37224[(2)] = null);

(statearr_35089_37224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (28))){
var inst_34930 = (state_34977[(25)]);
var inst_34911 = (state_34977[(21)]);
var inst_34930__$1 = cljs.core.seq(inst_34911);
var state_34977__$1 = (function (){var statearr_35094 = state_34977;
(statearr_35094[(25)] = inst_34930__$1);

return statearr_35094;
})();
if(inst_34930__$1){
var statearr_35096_37227 = state_34977__$1;
(statearr_35096_37227[(1)] = (33));

} else {
var statearr_35098_37229 = state_34977__$1;
(statearr_35098_37229[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (25))){
var inst_34914 = (state_34977[(9)]);
var inst_34913 = (state_34977[(20)]);
var inst_34916 = (inst_34914 < inst_34913);
var inst_34917 = inst_34916;
var state_34977__$1 = state_34977;
if(cljs.core.truth_(inst_34917)){
var statearr_35104_37235 = state_34977__$1;
(statearr_35104_37235[(1)] = (27));

} else {
var statearr_35106_37237 = state_34977__$1;
(statearr_35106_37237[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (34))){
var state_34977__$1 = state_34977;
var statearr_35120_37243 = state_34977__$1;
(statearr_35120_37243[(2)] = null);

(statearr_35120_37243[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (17))){
var state_34977__$1 = state_34977;
var statearr_35127_37245 = state_34977__$1;
(statearr_35127_37245[(2)] = null);

(statearr_35127_37245[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (3))){
var inst_34971 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34977__$1,inst_34971);
} else {
if((state_val_34978 === (12))){
var inst_34898 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35134_37248 = state_34977__$1;
(statearr_35134_37248[(2)] = inst_34898);

(statearr_35134_37248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (2))){
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34977__$1,(4),ch);
} else {
if((state_val_34978 === (23))){
var state_34977__$1 = state_34977;
var statearr_35143_37251 = state_34977__$1;
(statearr_35143_37251[(2)] = null);

(statearr_35143_37251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (35))){
var inst_34953 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35150_37252 = state_34977__$1;
(statearr_35150_37252[(2)] = inst_34953);

(statearr_35150_37252[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (19))){
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
var statearr_35152_37255 = state_34977__$1;
(statearr_35152_37255[(2)] = null);

(statearr_35152_37255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (11))){
var inst_34848 = (state_34977[(13)]);
var inst_34870 = (state_34977[(7)]);
var inst_34870__$1 = cljs.core.seq(inst_34848);
var state_34977__$1 = (function (){var statearr_35153 = state_34977;
(statearr_35153[(7)] = inst_34870__$1);

return statearr_35153;
})();
if(inst_34870__$1){
var statearr_35154_37260 = state_34977__$1;
(statearr_35154_37260[(1)] = (16));

} else {
var statearr_35155_37262 = state_34977__$1;
(statearr_35155_37262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (9))){
var inst_34900 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35158_37263 = state_34977__$1;
(statearr_35158_37263[(2)] = inst_34900);

(statearr_35158_37263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (5))){
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
var statearr_35160_37268 = state_34977__$1;
(statearr_35160_37268[(2)] = null);

(statearr_35160_37268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (14))){
var state_34977__$1 = state_34977;
var statearr_35163_37270 = state_34977__$1;
(statearr_35163_37270[(2)] = null);

(statearr_35163_37270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (45))){
var inst_34963 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35178_37271 = state_34977__$1;
(statearr_35178_37271[(2)] = inst_34963);

(statearr_35178_37271[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (26))){
var inst_34903 = (state_34977[(29)]);
var inst_34957 = (state_34977[(2)]);
var inst_34960 = cljs.core.seq(inst_34903);
var state_34977__$1 = (function (){var statearr_35188 = state_34977;
(statearr_35188[(31)] = inst_34957);

return statearr_35188;
})();
if(inst_34960){
var statearr_35189_37277 = state_34977__$1;
(statearr_35189_37277[(1)] = (42));

} else {
var statearr_35190_37279 = state_34977__$1;
(statearr_35190_37279[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (16))){
var inst_34870 = (state_34977[(7)]);
var inst_34872 = cljs.core.chunked_seq_QMARK_(inst_34870);
var state_34977__$1 = state_34977;
if(inst_34872){
var statearr_35193_37287 = state_34977__$1;
(statearr_35193_37287[(1)] = (19));

} else {
var statearr_35196_37288 = state_34977__$1;
(statearr_35196_37288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (38))){
var inst_34950 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35197_37293 = state_34977__$1;
(statearr_35197_37293[(2)] = inst_34950);

(statearr_35197_37293[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (30))){
var state_34977__$1 = state_34977;
var statearr_35198_37295 = state_34977__$1;
(statearr_35198_37295[(2)] = null);

(statearr_35198_37295[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (10))){
var inst_34849 = (state_34977[(14)]);
var inst_34851 = (state_34977[(15)]);
var inst_34859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34849,inst_34851);
var inst_34860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(0),null);
var inst_34861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(1),null);
var state_34977__$1 = (function (){var statearr_35204 = state_34977;
(statearr_35204[(26)] = inst_34860);

return statearr_35204;
})();
if(cljs.core.truth_(inst_34861)){
var statearr_35208_37302 = state_34977__$1;
(statearr_35208_37302[(1)] = (13));

} else {
var statearr_35210_37304 = state_34977__$1;
(statearr_35210_37304[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (18))){
var inst_34896 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35214_37306 = state_34977__$1;
(statearr_35214_37306[(2)] = inst_34896);

(statearr_35214_37306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (42))){
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34977__$1,(45),dchan);
} else {
if((state_val_34978 === (37))){
var inst_34930 = (state_34977[(25)]);
var inst_34839 = (state_34977[(12)]);
var inst_34939 = (state_34977[(23)]);
var inst_34939__$1 = cljs.core.first(inst_34930);
var inst_34940 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34939__$1,inst_34839,done);
var state_34977__$1 = (function (){var statearr_35225 = state_34977;
(statearr_35225[(23)] = inst_34939__$1);

return statearr_35225;
})();
if(cljs.core.truth_(inst_34940)){
var statearr_35231_37314 = state_34977__$1;
(statearr_35231_37314[(1)] = (39));

} else {
var statearr_35232_37315 = state_34977__$1;
(statearr_35232_37315[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (8))){
var inst_34851 = (state_34977[(15)]);
var inst_34850 = (state_34977[(16)]);
var inst_34853 = (inst_34851 < inst_34850);
var inst_34854 = inst_34853;
var state_34977__$1 = state_34977;
if(cljs.core.truth_(inst_34854)){
var statearr_35235_37320 = state_34977__$1;
(statearr_35235_37320[(1)] = (10));

} else {
var statearr_35240_37321 = state_34977__$1;
(statearr_35240_37321[(1)] = (11));

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
var statearr_35249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35249[(0)] = cljs$core$async$mult_$_state_machine__34200__auto__);

(statearr_35249[(1)] = (1));

return statearr_35249;
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
}catch (e35255){if((e35255 instanceof Object)){
var ex__34203__auto__ = e35255;
var statearr_35256_37326 = state_34977;
(statearr_35256_37326[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35255;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37327 = state_34977;
state_34977 = G__37327;
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
var state__34269__auto__ = (function (){var statearr_35263 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35263[(6)] = c__34267__auto___37132);

return statearr_35263;
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
var G__35277 = arguments.length;
switch (G__35277) {
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
var len__4789__auto___37370 = arguments.length;
var i__4790__auto___37371 = (0);
while(true){
if((i__4790__auto___37371 < len__4789__auto___37370)){
args__4795__auto__.push((arguments[i__4790__auto___37371]));

var G__37372 = (i__4790__auto___37371 + (1));
i__4790__auto___37371 = G__37372;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35362){
var map__35364 = p__35362;
var map__35364__$1 = (((((!((map__35364 == null))))?(((((map__35364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35364):map__35364);
var opts = map__35364__$1;
var statearr_35368_37378 = state;
(statearr_35368_37378[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35371_37382 = state;
(statearr_35371_37382[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35374_37386 = state;
(statearr_35374_37386[(2)] = cljs.core.deref(cb));


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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35403 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35404){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35404 = meta35404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35405,meta35404__$1){
var self__ = this;
var _35405__$1 = this;
return (new cljs.core.async.t_cljs$core$async35403(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35404__$1));
}));

(cljs.core.async.t_cljs$core$async35403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35405){
var self__ = this;
var _35405__$1 = this;
return self__.meta35404;
}));

(cljs.core.async.t_cljs$core$async35403.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35403.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35403.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35403.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35403.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35403.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35403.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35403.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35404","meta35404",1988561601,null)], null);
}));

(cljs.core.async.t_cljs$core$async35403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35403");

(cljs.core.async.t_cljs$core$async35403.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35403.
 */
cljs.core.async.__GT_t_cljs$core$async35403 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35403(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35404){
return (new cljs.core.async.t_cljs$core$async35403(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35404));
});

}

return (new cljs.core.async.t_cljs$core$async35403(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35593){
var state_val_35595 = (state_35593[(1)]);
if((state_val_35595 === (7))){
var inst_35467 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
var statearr_35606_37438 = state_35593__$1;
(statearr_35606_37438[(2)] = inst_35467);

(statearr_35606_37438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (20))){
var inst_35480 = (state_35593[(7)]);
var state_35593__$1 = state_35593;
var statearr_35611_37439 = state_35593__$1;
(statearr_35611_37439[(2)] = inst_35480);

(statearr_35611_37439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (27))){
var state_35593__$1 = state_35593;
var statearr_35614_37443 = state_35593__$1;
(statearr_35614_37443[(2)] = null);

(statearr_35614_37443[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (1))){
var inst_35453 = (state_35593[(8)]);
var inst_35453__$1 = calc_state();
var inst_35455 = (inst_35453__$1 == null);
var inst_35456 = cljs.core.not(inst_35455);
var state_35593__$1 = (function (){var statearr_35621 = state_35593;
(statearr_35621[(8)] = inst_35453__$1);

return statearr_35621;
})();
if(inst_35456){
var statearr_35623_37445 = state_35593__$1;
(statearr_35623_37445[(1)] = (2));

} else {
var statearr_35626_37446 = state_35593__$1;
(statearr_35626_37446[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (24))){
var inst_35557 = (state_35593[(9)]);
var inst_35512 = (state_35593[(10)]);
var inst_35523 = (state_35593[(11)]);
var inst_35557__$1 = (inst_35512.cljs$core$IFn$_invoke$arity$1 ? inst_35512.cljs$core$IFn$_invoke$arity$1(inst_35523) : inst_35512.call(null,inst_35523));
var state_35593__$1 = (function (){var statearr_35632 = state_35593;
(statearr_35632[(9)] = inst_35557__$1);

return statearr_35632;
})();
if(cljs.core.truth_(inst_35557__$1)){
var statearr_35640_37450 = state_35593__$1;
(statearr_35640_37450[(1)] = (29));

} else {
var statearr_35643_37451 = state_35593__$1;
(statearr_35643_37451[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (4))){
var inst_35470 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
if(cljs.core.truth_(inst_35470)){
var statearr_35651_37455 = state_35593__$1;
(statearr_35651_37455[(1)] = (8));

} else {
var statearr_35655_37456 = state_35593__$1;
(statearr_35655_37456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (15))){
var inst_35504 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
if(cljs.core.truth_(inst_35504)){
var statearr_35662_37460 = state_35593__$1;
(statearr_35662_37460[(1)] = (19));

} else {
var statearr_35663_37461 = state_35593__$1;
(statearr_35663_37461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (21))){
var inst_35511 = (state_35593[(12)]);
var inst_35511__$1 = (state_35593[(2)]);
var inst_35512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35511__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35511__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35511__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35593__$1 = (function (){var statearr_35670 = state_35593;
(statearr_35670[(12)] = inst_35511__$1);

(statearr_35670[(10)] = inst_35512);

(statearr_35670[(13)] = inst_35513);

return statearr_35670;
})();
return cljs.core.async.ioc_alts_BANG_(state_35593__$1,(22),inst_35515);
} else {
if((state_val_35595 === (31))){
var inst_35570 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
if(cljs.core.truth_(inst_35570)){
var statearr_35676_37474 = state_35593__$1;
(statearr_35676_37474[(1)] = (32));

} else {
var statearr_35680_37476 = state_35593__$1;
(statearr_35680_37476[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (32))){
var inst_35522 = (state_35593[(14)]);
var state_35593__$1 = state_35593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35593__$1,(35),out,inst_35522);
} else {
if((state_val_35595 === (33))){
var inst_35511 = (state_35593[(12)]);
var inst_35480 = inst_35511;
var state_35593__$1 = (function (){var statearr_35684 = state_35593;
(statearr_35684[(7)] = inst_35480);

return statearr_35684;
})();
var statearr_35685_37479 = state_35593__$1;
(statearr_35685_37479[(2)] = null);

(statearr_35685_37479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (13))){
var inst_35480 = (state_35593[(7)]);
var inst_35492 = inst_35480.cljs$lang$protocol_mask$partition0$;
var inst_35493 = (inst_35492 & (64));
var inst_35494 = inst_35480.cljs$core$ISeq$;
var inst_35495 = (cljs.core.PROTOCOL_SENTINEL === inst_35494);
var inst_35496 = ((inst_35493) || (inst_35495));
var state_35593__$1 = state_35593;
if(cljs.core.truth_(inst_35496)){
var statearr_35686_37490 = state_35593__$1;
(statearr_35686_37490[(1)] = (16));

} else {
var statearr_35687_37492 = state_35593__$1;
(statearr_35687_37492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (22))){
var inst_35523 = (state_35593[(11)]);
var inst_35522 = (state_35593[(14)]);
var inst_35521 = (state_35593[(2)]);
var inst_35522__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35521,(0),null);
var inst_35523__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35521,(1),null);
var inst_35528 = (inst_35522__$1 == null);
var inst_35529 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35523__$1,change);
var inst_35530 = ((inst_35528) || (inst_35529));
var state_35593__$1 = (function (){var statearr_35688 = state_35593;
(statearr_35688[(11)] = inst_35523__$1);

(statearr_35688[(14)] = inst_35522__$1);

return statearr_35688;
})();
if(cljs.core.truth_(inst_35530)){
var statearr_35689_37498 = state_35593__$1;
(statearr_35689_37498[(1)] = (23));

} else {
var statearr_35690_37499 = state_35593__$1;
(statearr_35690_37499[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (36))){
var inst_35511 = (state_35593[(12)]);
var inst_35480 = inst_35511;
var state_35593__$1 = (function (){var statearr_35693 = state_35593;
(statearr_35693[(7)] = inst_35480);

return statearr_35693;
})();
var statearr_35694_37508 = state_35593__$1;
(statearr_35694_37508[(2)] = null);

(statearr_35694_37508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (29))){
var inst_35557 = (state_35593[(9)]);
var state_35593__$1 = state_35593;
var statearr_35695_37511 = state_35593__$1;
(statearr_35695_37511[(2)] = inst_35557);

(statearr_35695_37511[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (6))){
var state_35593__$1 = state_35593;
var statearr_35696_37513 = state_35593__$1;
(statearr_35696_37513[(2)] = false);

(statearr_35696_37513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (28))){
var inst_35549 = (state_35593[(2)]);
var inst_35553 = calc_state();
var inst_35480 = inst_35553;
var state_35593__$1 = (function (){var statearr_35699 = state_35593;
(statearr_35699[(7)] = inst_35480);

(statearr_35699[(15)] = inst_35549);

return statearr_35699;
})();
var statearr_35700_37520 = state_35593__$1;
(statearr_35700_37520[(2)] = null);

(statearr_35700_37520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (25))){
var inst_35585 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
var statearr_35703_37523 = state_35593__$1;
(statearr_35703_37523[(2)] = inst_35585);

(statearr_35703_37523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (34))){
var inst_35583 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
var statearr_35706_37525 = state_35593__$1;
(statearr_35706_37525[(2)] = inst_35583);

(statearr_35706_37525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (17))){
var state_35593__$1 = state_35593;
var statearr_35707_37528 = state_35593__$1;
(statearr_35707_37528[(2)] = false);

(statearr_35707_37528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (3))){
var state_35593__$1 = state_35593;
var statearr_35710_37534 = state_35593__$1;
(statearr_35710_37534[(2)] = false);

(statearr_35710_37534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (12))){
var inst_35589 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35593__$1,inst_35589);
} else {
if((state_val_35595 === (2))){
var inst_35453 = (state_35593[(8)]);
var inst_35459 = inst_35453.cljs$lang$protocol_mask$partition0$;
var inst_35460 = (inst_35459 & (64));
var inst_35461 = inst_35453.cljs$core$ISeq$;
var inst_35462 = (cljs.core.PROTOCOL_SENTINEL === inst_35461);
var inst_35463 = ((inst_35460) || (inst_35462));
var state_35593__$1 = state_35593;
if(cljs.core.truth_(inst_35463)){
var statearr_35713_37543 = state_35593__$1;
(statearr_35713_37543[(1)] = (5));

} else {
var statearr_35714_37545 = state_35593__$1;
(statearr_35714_37545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (23))){
var inst_35522 = (state_35593[(14)]);
var inst_35534 = (inst_35522 == null);
var state_35593__$1 = state_35593;
if(cljs.core.truth_(inst_35534)){
var statearr_35715_37548 = state_35593__$1;
(statearr_35715_37548[(1)] = (26));

} else {
var statearr_35716_37552 = state_35593__$1;
(statearr_35716_37552[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (35))){
var inst_35573 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
if(cljs.core.truth_(inst_35573)){
var statearr_35718_37555 = state_35593__$1;
(statearr_35718_37555[(1)] = (36));

} else {
var statearr_35719_37556 = state_35593__$1;
(statearr_35719_37556[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (19))){
var inst_35480 = (state_35593[(7)]);
var inst_35508 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35480);
var state_35593__$1 = state_35593;
var statearr_35723_37558 = state_35593__$1;
(statearr_35723_37558[(2)] = inst_35508);

(statearr_35723_37558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (11))){
var inst_35480 = (state_35593[(7)]);
var inst_35488 = (inst_35480 == null);
var inst_35489 = cljs.core.not(inst_35488);
var state_35593__$1 = state_35593;
if(inst_35489){
var statearr_35726_37566 = state_35593__$1;
(statearr_35726_37566[(1)] = (13));

} else {
var statearr_35727_37567 = state_35593__$1;
(statearr_35727_37567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (9))){
var inst_35453 = (state_35593[(8)]);
var state_35593__$1 = state_35593;
var statearr_35730_37569 = state_35593__$1;
(statearr_35730_37569[(2)] = inst_35453);

(statearr_35730_37569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (5))){
var state_35593__$1 = state_35593;
var statearr_35732_37575 = state_35593__$1;
(statearr_35732_37575[(2)] = true);

(statearr_35732_37575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (14))){
var state_35593__$1 = state_35593;
var statearr_35733_37582 = state_35593__$1;
(statearr_35733_37582[(2)] = false);

(statearr_35733_37582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (26))){
var inst_35523 = (state_35593[(11)]);
var inst_35546 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35523);
var state_35593__$1 = state_35593;
var statearr_35735_37584 = state_35593__$1;
(statearr_35735_37584[(2)] = inst_35546);

(statearr_35735_37584[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (16))){
var state_35593__$1 = state_35593;
var statearr_35736_37586 = state_35593__$1;
(statearr_35736_37586[(2)] = true);

(statearr_35736_37586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (38))){
var inst_35578 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
var statearr_35738_37592 = state_35593__$1;
(statearr_35738_37592[(2)] = inst_35578);

(statearr_35738_37592[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (30))){
var inst_35512 = (state_35593[(10)]);
var inst_35523 = (state_35593[(11)]);
var inst_35513 = (state_35593[(13)]);
var inst_35564 = cljs.core.empty_QMARK_(inst_35512);
var inst_35565 = (inst_35513.cljs$core$IFn$_invoke$arity$1 ? inst_35513.cljs$core$IFn$_invoke$arity$1(inst_35523) : inst_35513.call(null,inst_35523));
var inst_35567 = cljs.core.not(inst_35565);
var inst_35568 = ((inst_35564) && (inst_35567));
var state_35593__$1 = state_35593;
var statearr_35740_37597 = state_35593__$1;
(statearr_35740_37597[(2)] = inst_35568);

(statearr_35740_37597[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (10))){
var inst_35453 = (state_35593[(8)]);
var inst_35475 = (state_35593[(2)]);
var inst_35476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35475,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35475,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35475,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35480 = inst_35453;
var state_35593__$1 = (function (){var statearr_35742 = state_35593;
(statearr_35742[(16)] = inst_35476);

(statearr_35742[(7)] = inst_35480);

(statearr_35742[(17)] = inst_35478);

(statearr_35742[(18)] = inst_35479);

return statearr_35742;
})();
var statearr_35743_37610 = state_35593__$1;
(statearr_35743_37610[(2)] = null);

(statearr_35743_37610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (18))){
var inst_35501 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
var statearr_35745_37615 = state_35593__$1;
(statearr_35745_37615[(2)] = inst_35501);

(statearr_35745_37615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (37))){
var state_35593__$1 = state_35593;
var statearr_35746_37620 = state_35593__$1;
(statearr_35746_37620[(2)] = null);

(statearr_35746_37620[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35595 === (8))){
var inst_35453 = (state_35593[(8)]);
var inst_35472 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35453);
var state_35593__$1 = state_35593;
var statearr_35747_37623 = state_35593__$1;
(statearr_35747_37623[(2)] = inst_35472);

(statearr_35747_37623[(1)] = (10));


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
var statearr_35751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35751[(0)] = cljs$core$async$mix_$_state_machine__34200__auto__);

(statearr_35751[(1)] = (1));

return statearr_35751;
});
var cljs$core$async$mix_$_state_machine__34200__auto____1 = (function (state_35593){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35593);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35755){if((e35755 instanceof Object)){
var ex__34203__auto__ = e35755;
var statearr_35756_37636 = state_35593;
(statearr_35756_37636[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37638 = state_35593;
state_35593 = G__37638;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34200__auto__ = function(state_35593){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34200__auto____1.call(this,state_35593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34200__auto____0;
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34200__auto____1;
return cljs$core$async$mix_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35760 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35760[(6)] = c__34267__auto___37436);

return statearr_35760;
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
var G__35791 = arguments.length;
switch (G__35791) {
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
var G__35804 = arguments.length;
switch (G__35804) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35798_SHARP_){
if(cljs.core.truth_((p1__35798_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35798_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35798_SHARP_.call(null,topic)))){
return p1__35798_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35798_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35809 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35810){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35810 = meta35810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35811,meta35810__$1){
var self__ = this;
var _35811__$1 = this;
return (new cljs.core.async.t_cljs$core$async35809(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35810__$1));
}));

(cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35811){
var self__ = this;
var _35811__$1 = this;
return self__.meta35810;
}));

(cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35810","meta35810",4292776,null)], null);
}));

(cljs.core.async.t_cljs$core$async35809.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35809");

(cljs.core.async.t_cljs$core$async35809.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35809");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35809.
 */
cljs.core.async.__GT_t_cljs$core$async35809 = (function cljs$core$async$__GT_t_cljs$core$async35809(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35810){
return (new cljs.core.async.t_cljs$core$async35809(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35810));
});

}

return (new cljs.core.async.t_cljs$core$async35809(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35917){
var state_val_35918 = (state_35917[(1)]);
if((state_val_35918 === (7))){
var inst_35913 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35926_37718 = state_35917__$1;
(statearr_35926_37718[(2)] = inst_35913);

(statearr_35926_37718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (20))){
var state_35917__$1 = state_35917;
var statearr_35927_37719 = state_35917__$1;
(statearr_35927_37719[(2)] = null);

(statearr_35927_37719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (1))){
var state_35917__$1 = state_35917;
var statearr_35928_37721 = state_35917__$1;
(statearr_35928_37721[(2)] = null);

(statearr_35928_37721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (24))){
var inst_35896 = (state_35917[(7)]);
var inst_35905 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35896);
var state_35917__$1 = state_35917;
var statearr_35931_37722 = state_35917__$1;
(statearr_35931_37722[(2)] = inst_35905);

(statearr_35931_37722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (4))){
var inst_35845 = (state_35917[(8)]);
var inst_35845__$1 = (state_35917[(2)]);
var inst_35846 = (inst_35845__$1 == null);
var state_35917__$1 = (function (){var statearr_35934 = state_35917;
(statearr_35934[(8)] = inst_35845__$1);

return statearr_35934;
})();
if(cljs.core.truth_(inst_35846)){
var statearr_35936_37727 = state_35917__$1;
(statearr_35936_37727[(1)] = (5));

} else {
var statearr_35939_37728 = state_35917__$1;
(statearr_35939_37728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (15))){
var inst_35890 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35940_37729 = state_35917__$1;
(statearr_35940_37729[(2)] = inst_35890);

(statearr_35940_37729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (21))){
var inst_35910 = (state_35917[(2)]);
var state_35917__$1 = (function (){var statearr_35941 = state_35917;
(statearr_35941[(9)] = inst_35910);

return statearr_35941;
})();
var statearr_35942_37730 = state_35917__$1;
(statearr_35942_37730[(2)] = null);

(statearr_35942_37730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (13))){
var inst_35869 = (state_35917[(10)]);
var inst_35871 = cljs.core.chunked_seq_QMARK_(inst_35869);
var state_35917__$1 = state_35917;
if(inst_35871){
var statearr_35945_37736 = state_35917__$1;
(statearr_35945_37736[(1)] = (16));

} else {
var statearr_35946_37737 = state_35917__$1;
(statearr_35946_37737[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (22))){
var inst_35902 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
if(cljs.core.truth_(inst_35902)){
var statearr_35948_37738 = state_35917__$1;
(statearr_35948_37738[(1)] = (23));

} else {
var statearr_35950_37740 = state_35917__$1;
(statearr_35950_37740[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (6))){
var inst_35845 = (state_35917[(8)]);
var inst_35898 = (state_35917[(11)]);
var inst_35896 = (state_35917[(7)]);
var inst_35896__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35845) : topic_fn.call(null,inst_35845));
var inst_35897 = cljs.core.deref(mults);
var inst_35898__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35897,inst_35896__$1);
var state_35917__$1 = (function (){var statearr_35954 = state_35917;
(statearr_35954[(11)] = inst_35898__$1);

(statearr_35954[(7)] = inst_35896__$1);

return statearr_35954;
})();
if(cljs.core.truth_(inst_35898__$1)){
var statearr_35955_37745 = state_35917__$1;
(statearr_35955_37745[(1)] = (19));

} else {
var statearr_35956_37748 = state_35917__$1;
(statearr_35956_37748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (25))){
var inst_35907 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35957_37750 = state_35917__$1;
(statearr_35957_37750[(2)] = inst_35907);

(statearr_35957_37750[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (17))){
var inst_35869 = (state_35917[(10)]);
var inst_35880 = cljs.core.first(inst_35869);
var inst_35881 = cljs.core.async.muxch_STAR_(inst_35880);
var inst_35882 = cljs.core.async.close_BANG_(inst_35881);
var inst_35884 = cljs.core.next(inst_35869);
var inst_35855 = inst_35884;
var inst_35856 = null;
var inst_35857 = (0);
var inst_35858 = (0);
var state_35917__$1 = (function (){var statearr_35961 = state_35917;
(statearr_35961[(12)] = inst_35856);

(statearr_35961[(13)] = inst_35857);

(statearr_35961[(14)] = inst_35882);

(statearr_35961[(15)] = inst_35858);

(statearr_35961[(16)] = inst_35855);

return statearr_35961;
})();
var statearr_35963_37761 = state_35917__$1;
(statearr_35963_37761[(2)] = null);

(statearr_35963_37761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (3))){
var inst_35915 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35917__$1,inst_35915);
} else {
if((state_val_35918 === (12))){
var inst_35892 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35967_37764 = state_35917__$1;
(statearr_35967_37764[(2)] = inst_35892);

(statearr_35967_37764[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (2))){
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35917__$1,(4),ch);
} else {
if((state_val_35918 === (23))){
var state_35917__$1 = state_35917;
var statearr_35969_37772 = state_35917__$1;
(statearr_35969_37772[(2)] = null);

(statearr_35969_37772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (19))){
var inst_35845 = (state_35917[(8)]);
var inst_35898 = (state_35917[(11)]);
var inst_35900 = cljs.core.async.muxch_STAR_(inst_35898);
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35917__$1,(22),inst_35900,inst_35845);
} else {
if((state_val_35918 === (11))){
var inst_35869 = (state_35917[(10)]);
var inst_35855 = (state_35917[(16)]);
var inst_35869__$1 = cljs.core.seq(inst_35855);
var state_35917__$1 = (function (){var statearr_35975 = state_35917;
(statearr_35975[(10)] = inst_35869__$1);

return statearr_35975;
})();
if(inst_35869__$1){
var statearr_35976_37781 = state_35917__$1;
(statearr_35976_37781[(1)] = (13));

} else {
var statearr_35977_37782 = state_35917__$1;
(statearr_35977_37782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (9))){
var inst_35894 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35979_37784 = state_35917__$1;
(statearr_35979_37784[(2)] = inst_35894);

(statearr_35979_37784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (5))){
var inst_35852 = cljs.core.deref(mults);
var inst_35853 = cljs.core.vals(inst_35852);
var inst_35854 = cljs.core.seq(inst_35853);
var inst_35855 = inst_35854;
var inst_35856 = null;
var inst_35857 = (0);
var inst_35858 = (0);
var state_35917__$1 = (function (){var statearr_35982 = state_35917;
(statearr_35982[(12)] = inst_35856);

(statearr_35982[(13)] = inst_35857);

(statearr_35982[(15)] = inst_35858);

(statearr_35982[(16)] = inst_35855);

return statearr_35982;
})();
var statearr_35983_37794 = state_35917__$1;
(statearr_35983_37794[(2)] = null);

(statearr_35983_37794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (14))){
var state_35917__$1 = state_35917;
var statearr_35987_37796 = state_35917__$1;
(statearr_35987_37796[(2)] = null);

(statearr_35987_37796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (16))){
var inst_35869 = (state_35917[(10)]);
var inst_35873 = cljs.core.chunk_first(inst_35869);
var inst_35874 = cljs.core.chunk_rest(inst_35869);
var inst_35875 = cljs.core.count(inst_35873);
var inst_35855 = inst_35874;
var inst_35856 = inst_35873;
var inst_35857 = inst_35875;
var inst_35858 = (0);
var state_35917__$1 = (function (){var statearr_35990 = state_35917;
(statearr_35990[(12)] = inst_35856);

(statearr_35990[(13)] = inst_35857);

(statearr_35990[(15)] = inst_35858);

(statearr_35990[(16)] = inst_35855);

return statearr_35990;
})();
var statearr_35991_37806 = state_35917__$1;
(statearr_35991_37806[(2)] = null);

(statearr_35991_37806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (10))){
var inst_35856 = (state_35917[(12)]);
var inst_35857 = (state_35917[(13)]);
var inst_35858 = (state_35917[(15)]);
var inst_35855 = (state_35917[(16)]);
var inst_35863 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35856,inst_35858);
var inst_35864 = cljs.core.async.muxch_STAR_(inst_35863);
var inst_35865 = cljs.core.async.close_BANG_(inst_35864);
var inst_35866 = (inst_35858 + (1));
var tmp35984 = inst_35856;
var tmp35985 = inst_35857;
var tmp35986 = inst_35855;
var inst_35855__$1 = tmp35986;
var inst_35856__$1 = tmp35984;
var inst_35857__$1 = tmp35985;
var inst_35858__$1 = inst_35866;
var state_35917__$1 = (function (){var statearr_35993 = state_35917;
(statearr_35993[(12)] = inst_35856__$1);

(statearr_35993[(13)] = inst_35857__$1);

(statearr_35993[(17)] = inst_35865);

(statearr_35993[(15)] = inst_35858__$1);

(statearr_35993[(16)] = inst_35855__$1);

return statearr_35993;
})();
var statearr_35996_37811 = state_35917__$1;
(statearr_35996_37811[(2)] = null);

(statearr_35996_37811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (18))){
var inst_35887 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35997_37818 = state_35917__$1;
(statearr_35997_37818[(2)] = inst_35887);

(statearr_35997_37818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (8))){
var inst_35857 = (state_35917[(13)]);
var inst_35858 = (state_35917[(15)]);
var inst_35860 = (inst_35858 < inst_35857);
var inst_35861 = inst_35860;
var state_35917__$1 = state_35917;
if(cljs.core.truth_(inst_35861)){
var statearr_35999_37821 = state_35917__$1;
(statearr_35999_37821[(1)] = (10));

} else {
var statearr_36000_37822 = state_35917__$1;
(statearr_36000_37822[(1)] = (11));

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
var statearr_36004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36004[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36004[(1)] = (1));

return statearr_36004;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35917){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35917);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36005){if((e36005 instanceof Object)){
var ex__34203__auto__ = e36005;
var statearr_36006_37831 = state_35917;
(statearr_36006_37831[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36005;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37833 = state_35917;
state_35917 = G__37833;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36007 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36007[(6)] = c__34267__auto___37716);

return statearr_36007;
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
var G__36016 = arguments.length;
switch (G__36016) {
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
var G__36030 = arguments.length;
switch (G__36030) {
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
var c__34267__auto___37868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36085){
var state_val_36086 = (state_36085[(1)]);
if((state_val_36086 === (7))){
var state_36085__$1 = state_36085;
var statearr_36087_37873 = state_36085__$1;
(statearr_36087_37873[(2)] = null);

(statearr_36087_37873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (1))){
var state_36085__$1 = state_36085;
var statearr_36088_37875 = state_36085__$1;
(statearr_36088_37875[(2)] = null);

(statearr_36088_37875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (4))){
var inst_36045 = (state_36085[(7)]);
var inst_36047 = (inst_36045 < cnt);
var state_36085__$1 = state_36085;
if(cljs.core.truth_(inst_36047)){
var statearr_36089_37879 = state_36085__$1;
(statearr_36089_37879[(1)] = (6));

} else {
var statearr_36090_37881 = state_36085__$1;
(statearr_36090_37881[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (15))){
var inst_36081 = (state_36085[(2)]);
var state_36085__$1 = state_36085;
var statearr_36091_37885 = state_36085__$1;
(statearr_36091_37885[(2)] = inst_36081);

(statearr_36091_37885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (13))){
var inst_36074 = cljs.core.async.close_BANG_(out);
var state_36085__$1 = state_36085;
var statearr_36092_37890 = state_36085__$1;
(statearr_36092_37890[(2)] = inst_36074);

(statearr_36092_37890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (6))){
var state_36085__$1 = state_36085;
var statearr_36093_37892 = state_36085__$1;
(statearr_36093_37892[(2)] = null);

(statearr_36093_37892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (3))){
var inst_36083 = (state_36085[(2)]);
var state_36085__$1 = state_36085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36085__$1,inst_36083);
} else {
if((state_val_36086 === (12))){
var inst_36071 = (state_36085[(8)]);
var inst_36071__$1 = (state_36085[(2)]);
var inst_36072 = cljs.core.some(cljs.core.nil_QMARK_,inst_36071__$1);
var state_36085__$1 = (function (){var statearr_36094 = state_36085;
(statearr_36094[(8)] = inst_36071__$1);

return statearr_36094;
})();
if(cljs.core.truth_(inst_36072)){
var statearr_36095_37896 = state_36085__$1;
(statearr_36095_37896[(1)] = (13));

} else {
var statearr_36096_37898 = state_36085__$1;
(statearr_36096_37898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (2))){
var inst_36044 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36045 = (0);
var state_36085__$1 = (function (){var statearr_36098 = state_36085;
(statearr_36098[(9)] = inst_36044);

(statearr_36098[(7)] = inst_36045);

return statearr_36098;
})();
var statearr_36099_37900 = state_36085__$1;
(statearr_36099_37900[(2)] = null);

(statearr_36099_37900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (11))){
var inst_36045 = (state_36085[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36085,(10),Object,null,(9));
var inst_36058 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36045) : chs__$1.call(null,inst_36045));
var inst_36059 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36045) : done.call(null,inst_36045));
var inst_36060 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36058,inst_36059);
var state_36085__$1 = state_36085;
var statearr_36101_37906 = state_36085__$1;
(statearr_36101_37906[(2)] = inst_36060);


cljs.core.async.impl.ioc_helpers.process_exception(state_36085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (9))){
var inst_36045 = (state_36085[(7)]);
var inst_36062 = (state_36085[(2)]);
var inst_36063 = (inst_36045 + (1));
var inst_36045__$1 = inst_36063;
var state_36085__$1 = (function (){var statearr_36102 = state_36085;
(statearr_36102[(10)] = inst_36062);

(statearr_36102[(7)] = inst_36045__$1);

return statearr_36102;
})();
var statearr_36103_37911 = state_36085__$1;
(statearr_36103_37911[(2)] = null);

(statearr_36103_37911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (5))){
var inst_36069 = (state_36085[(2)]);
var state_36085__$1 = (function (){var statearr_36104 = state_36085;
(statearr_36104[(11)] = inst_36069);

return statearr_36104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36085__$1,(12),dchan);
} else {
if((state_val_36086 === (14))){
var inst_36071 = (state_36085[(8)]);
var inst_36076 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36071);
var state_36085__$1 = state_36085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36085__$1,(16),out,inst_36076);
} else {
if((state_val_36086 === (16))){
var inst_36078 = (state_36085[(2)]);
var state_36085__$1 = (function (){var statearr_36109 = state_36085;
(statearr_36109[(12)] = inst_36078);

return statearr_36109;
})();
var statearr_36110_37917 = state_36085__$1;
(statearr_36110_37917[(2)] = null);

(statearr_36110_37917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (10))){
var inst_36050 = (state_36085[(2)]);
var inst_36051 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36085__$1 = (function (){var statearr_36114 = state_36085;
(statearr_36114[(13)] = inst_36050);

return statearr_36114;
})();
var statearr_36115_37921 = state_36085__$1;
(statearr_36115_37921[(2)] = inst_36051);


cljs.core.async.impl.ioc_helpers.process_exception(state_36085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (8))){
var inst_36067 = (state_36085[(2)]);
var state_36085__$1 = state_36085;
var statearr_36116_37925 = state_36085__$1;
(statearr_36116_37925[(2)] = inst_36067);

(statearr_36116_37925[(1)] = (5));


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
var statearr_36118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36118[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36118[(1)] = (1));

return statearr_36118;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36085){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36085);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36119){if((e36119 instanceof Object)){
var ex__34203__auto__ = e36119;
var statearr_36120_37937 = state_36085;
(statearr_36120_37937[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37940 = state_36085;
state_36085 = G__37940;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36122 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36122[(6)] = c__34267__auto___37868);

return statearr_36122;
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
var G__36131 = arguments.length;
switch (G__36131) {
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
var c__34267__auto___37949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36163){
var state_val_36164 = (state_36163[(1)]);
if((state_val_36164 === (7))){
var inst_36142 = (state_36163[(7)]);
var inst_36143 = (state_36163[(8)]);
var inst_36142__$1 = (state_36163[(2)]);
var inst_36143__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36142__$1,(0),null);
var inst_36144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36142__$1,(1),null);
var inst_36145 = (inst_36143__$1 == null);
var state_36163__$1 = (function (){var statearr_36165 = state_36163;
(statearr_36165[(7)] = inst_36142__$1);

(statearr_36165[(8)] = inst_36143__$1);

(statearr_36165[(9)] = inst_36144);

return statearr_36165;
})();
if(cljs.core.truth_(inst_36145)){
var statearr_36166_37954 = state_36163__$1;
(statearr_36166_37954[(1)] = (8));

} else {
var statearr_36167_37956 = state_36163__$1;
(statearr_36167_37956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (1))){
var inst_36132 = cljs.core.vec(chs);
var inst_36133 = inst_36132;
var state_36163__$1 = (function (){var statearr_36168 = state_36163;
(statearr_36168[(10)] = inst_36133);

return statearr_36168;
})();
var statearr_36169_37959 = state_36163__$1;
(statearr_36169_37959[(2)] = null);

(statearr_36169_37959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (4))){
var inst_36133 = (state_36163[(10)]);
var state_36163__$1 = state_36163;
return cljs.core.async.ioc_alts_BANG_(state_36163__$1,(7),inst_36133);
} else {
if((state_val_36164 === (6))){
var inst_36159 = (state_36163[(2)]);
var state_36163__$1 = state_36163;
var statearr_36171_37962 = state_36163__$1;
(statearr_36171_37962[(2)] = inst_36159);

(statearr_36171_37962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (3))){
var inst_36161 = (state_36163[(2)]);
var state_36163__$1 = state_36163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36163__$1,inst_36161);
} else {
if((state_val_36164 === (2))){
var inst_36133 = (state_36163[(10)]);
var inst_36135 = cljs.core.count(inst_36133);
var inst_36136 = (inst_36135 > (0));
var state_36163__$1 = state_36163;
if(cljs.core.truth_(inst_36136)){
var statearr_36174_37968 = state_36163__$1;
(statearr_36174_37968[(1)] = (4));

} else {
var statearr_36175_37969 = state_36163__$1;
(statearr_36175_37969[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (11))){
var inst_36133 = (state_36163[(10)]);
var inst_36152 = (state_36163[(2)]);
var tmp36172 = inst_36133;
var inst_36133__$1 = tmp36172;
var state_36163__$1 = (function (){var statearr_36178 = state_36163;
(statearr_36178[(11)] = inst_36152);

(statearr_36178[(10)] = inst_36133__$1);

return statearr_36178;
})();
var statearr_36179_37971 = state_36163__$1;
(statearr_36179_37971[(2)] = null);

(statearr_36179_37971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (9))){
var inst_36143 = (state_36163[(8)]);
var state_36163__$1 = state_36163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36163__$1,(11),out,inst_36143);
} else {
if((state_val_36164 === (5))){
var inst_36157 = cljs.core.async.close_BANG_(out);
var state_36163__$1 = state_36163;
var statearr_36182_37975 = state_36163__$1;
(statearr_36182_37975[(2)] = inst_36157);

(statearr_36182_37975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (10))){
var inst_36155 = (state_36163[(2)]);
var state_36163__$1 = state_36163;
var statearr_36183_37978 = state_36163__$1;
(statearr_36183_37978[(2)] = inst_36155);

(statearr_36183_37978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (8))){
var inst_36142 = (state_36163[(7)]);
var inst_36133 = (state_36163[(10)]);
var inst_36143 = (state_36163[(8)]);
var inst_36144 = (state_36163[(9)]);
var inst_36147 = (function (){var cs = inst_36133;
var vec__36138 = inst_36142;
var v = inst_36143;
var c = inst_36144;
return (function (p1__36127_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36127_SHARP_);
});
})();
var inst_36148 = cljs.core.filterv(inst_36147,inst_36133);
var inst_36133__$1 = inst_36148;
var state_36163__$1 = (function (){var statearr_36184 = state_36163;
(statearr_36184[(10)] = inst_36133__$1);

return statearr_36184;
})();
var statearr_36185_37979 = state_36163__$1;
(statearr_36185_37979[(2)] = null);

(statearr_36185_37979[(1)] = (2));


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
var statearr_36186 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36186[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36186[(1)] = (1));

return statearr_36186;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36163){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36163);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36187){if((e36187 instanceof Object)){
var ex__34203__auto__ = e36187;
var statearr_36188_37983 = state_36163;
(statearr_36188_37983[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37988 = state_36163;
state_36163 = G__37988;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36189 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36189[(6)] = c__34267__auto___37949);

return statearr_36189;
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
var G__36191 = arguments.length;
switch (G__36191) {
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
var c__34267__auto___37991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36219){
var state_val_36220 = (state_36219[(1)]);
if((state_val_36220 === (7))){
var inst_36201 = (state_36219[(7)]);
var inst_36201__$1 = (state_36219[(2)]);
var inst_36202 = (inst_36201__$1 == null);
var inst_36203 = cljs.core.not(inst_36202);
var state_36219__$1 = (function (){var statearr_36224 = state_36219;
(statearr_36224[(7)] = inst_36201__$1);

return statearr_36224;
})();
if(inst_36203){
var statearr_36225_37996 = state_36219__$1;
(statearr_36225_37996[(1)] = (8));

} else {
var statearr_36226_37997 = state_36219__$1;
(statearr_36226_37997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (1))){
var inst_36196 = (0);
var state_36219__$1 = (function (){var statearr_36227 = state_36219;
(statearr_36227[(8)] = inst_36196);

return statearr_36227;
})();
var statearr_36229_37998 = state_36219__$1;
(statearr_36229_37998[(2)] = null);

(statearr_36229_37998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (4))){
var state_36219__$1 = state_36219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36219__$1,(7),ch);
} else {
if((state_val_36220 === (6))){
var inst_36214 = (state_36219[(2)]);
var state_36219__$1 = state_36219;
var statearr_36233_37999 = state_36219__$1;
(statearr_36233_37999[(2)] = inst_36214);

(statearr_36233_37999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (3))){
var inst_36216 = (state_36219[(2)]);
var inst_36217 = cljs.core.async.close_BANG_(out);
var state_36219__$1 = (function (){var statearr_36235 = state_36219;
(statearr_36235[(9)] = inst_36216);

return statearr_36235;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36219__$1,inst_36217);
} else {
if((state_val_36220 === (2))){
var inst_36196 = (state_36219[(8)]);
var inst_36198 = (inst_36196 < n);
var state_36219__$1 = state_36219;
if(cljs.core.truth_(inst_36198)){
var statearr_36237_38000 = state_36219__$1;
(statearr_36237_38000[(1)] = (4));

} else {
var statearr_36238_38001 = state_36219__$1;
(statearr_36238_38001[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (11))){
var inst_36196 = (state_36219[(8)]);
var inst_36206 = (state_36219[(2)]);
var inst_36207 = (inst_36196 + (1));
var inst_36196__$1 = inst_36207;
var state_36219__$1 = (function (){var statearr_36240 = state_36219;
(statearr_36240[(8)] = inst_36196__$1);

(statearr_36240[(10)] = inst_36206);

return statearr_36240;
})();
var statearr_36241_38006 = state_36219__$1;
(statearr_36241_38006[(2)] = null);

(statearr_36241_38006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (9))){
var state_36219__$1 = state_36219;
var statearr_36242_38008 = state_36219__$1;
(statearr_36242_38008[(2)] = null);

(statearr_36242_38008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (5))){
var state_36219__$1 = state_36219;
var statearr_36243_38011 = state_36219__$1;
(statearr_36243_38011[(2)] = null);

(statearr_36243_38011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (10))){
var inst_36211 = (state_36219[(2)]);
var state_36219__$1 = state_36219;
var statearr_36246_38012 = state_36219__$1;
(statearr_36246_38012[(2)] = inst_36211);

(statearr_36246_38012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36220 === (8))){
var inst_36201 = (state_36219[(7)]);
var state_36219__$1 = state_36219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36219__$1,(11),out,inst_36201);
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
var statearr_36247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36247[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36247[(1)] = (1));

return statearr_36247;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36219){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36219);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36248){if((e36248 instanceof Object)){
var ex__34203__auto__ = e36248;
var statearr_36249_38014 = state_36219;
(statearr_36249_38014[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38017 = state_36219;
state_36219 = G__38017;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36251 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36251[(6)] = c__34267__auto___37991);

return statearr_36251;
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
cljs.core.async.t_cljs$core$async36261 = (function (f,ch,meta36262){
this.f = f;
this.ch = ch;
this.meta36262 = meta36262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36263,meta36262__$1){
var self__ = this;
var _36263__$1 = this;
return (new cljs.core.async.t_cljs$core$async36261(self__.f,self__.ch,meta36262__$1));
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
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36276 = (function (f,ch,meta36262,_,fn1,meta36277){
this.f = f;
this.ch = ch;
this.meta36262 = meta36262;
this._ = _;
this.fn1 = fn1;
this.meta36277 = meta36277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36278,meta36277__$1){
var self__ = this;
var _36278__$1 = this;
return (new cljs.core.async.t_cljs$core$async36276(self__.f,self__.ch,self__.meta36262,self__._,self__.fn1,meta36277__$1));
}));

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36278){
var self__ = this;
var _36278__$1 = this;
return self__.meta36277;
}));

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36256_SHARP_){
var G__36284 = (((p1__36256_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36256_SHARP_) : self__.f.call(null,p1__36256_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36284) : f1.call(null,G__36284));
});
}));

(cljs.core.async.t_cljs$core$async36276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36262","meta36262",1528439859,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36261","cljs.core.async/t_cljs$core$async36261",-957449882,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36277","meta36277",-642684287,null)], null);
}));

(cljs.core.async.t_cljs$core$async36276.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36276");

(cljs.core.async.t_cljs$core$async36276.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36276");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36276.
 */
cljs.core.async.__GT_t_cljs$core$async36276 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36276(f__$1,ch__$1,meta36262__$1,___$2,fn1__$1,meta36277){
return (new cljs.core.async.t_cljs$core$async36276(f__$1,ch__$1,meta36262__$1,___$2,fn1__$1,meta36277));
});

}

return (new cljs.core.async.t_cljs$core$async36276(self__.f,self__.ch,self__.meta36262,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36287 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36287) : self__.f.call(null,G__36287));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36262","meta36262",1528439859,null)], null);
}));

(cljs.core.async.t_cljs$core$async36261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36261");

(cljs.core.async.t_cljs$core$async36261.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36261.
 */
cljs.core.async.__GT_t_cljs$core$async36261 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36261(f__$1,ch__$1,meta36262){
return (new cljs.core.async.t_cljs$core$async36261(f__$1,ch__$1,meta36262));
});

}

return (new cljs.core.async.t_cljs$core$async36261(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36294 = (function (f,ch,meta36295){
this.f = f;
this.ch = ch;
this.meta36295 = meta36295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36296,meta36295__$1){
var self__ = this;
var _36296__$1 = this;
return (new cljs.core.async.t_cljs$core$async36294(self__.f,self__.ch,meta36295__$1));
}));

(cljs.core.async.t_cljs$core$async36294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36296){
var self__ = this;
var _36296__$1 = this;
return self__.meta36295;
}));

(cljs.core.async.t_cljs$core$async36294.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36295","meta36295",-1817205732,null)], null);
}));

(cljs.core.async.t_cljs$core$async36294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36294");

(cljs.core.async.t_cljs$core$async36294.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36294.
 */
cljs.core.async.__GT_t_cljs$core$async36294 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36294(f__$1,ch__$1,meta36295){
return (new cljs.core.async.t_cljs$core$async36294(f__$1,ch__$1,meta36295));
});

}

return (new cljs.core.async.t_cljs$core$async36294(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36312 = (function (p,ch,meta36313){
this.p = p;
this.ch = ch;
this.meta36313 = meta36313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36314,meta36313__$1){
var self__ = this;
var _36314__$1 = this;
return (new cljs.core.async.t_cljs$core$async36312(self__.p,self__.ch,meta36313__$1));
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36314){
var self__ = this;
var _36314__$1 = this;
return self__.meta36313;
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36313","meta36313",-1855059289,null)], null);
}));

(cljs.core.async.t_cljs$core$async36312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36312");

(cljs.core.async.t_cljs$core$async36312.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36312.
 */
cljs.core.async.__GT_t_cljs$core$async36312 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36312(p__$1,ch__$1,meta36313){
return (new cljs.core.async.t_cljs$core$async36312(p__$1,ch__$1,meta36313));
});

}

return (new cljs.core.async.t_cljs$core$async36312(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36334 = arguments.length;
switch (G__36334) {
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
var c__34267__auto___38048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36358){
var state_val_36359 = (state_36358[(1)]);
if((state_val_36359 === (7))){
var inst_36354 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36360_38051 = state_36358__$1;
(statearr_36360_38051[(2)] = inst_36354);

(statearr_36360_38051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (1))){
var state_36358__$1 = state_36358;
var statearr_36363_38053 = state_36358__$1;
(statearr_36363_38053[(2)] = null);

(statearr_36363_38053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (4))){
var inst_36340 = (state_36358[(7)]);
var inst_36340__$1 = (state_36358[(2)]);
var inst_36341 = (inst_36340__$1 == null);
var state_36358__$1 = (function (){var statearr_36364 = state_36358;
(statearr_36364[(7)] = inst_36340__$1);

return statearr_36364;
})();
if(cljs.core.truth_(inst_36341)){
var statearr_36365_38054 = state_36358__$1;
(statearr_36365_38054[(1)] = (5));

} else {
var statearr_36366_38055 = state_36358__$1;
(statearr_36366_38055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (6))){
var inst_36340 = (state_36358[(7)]);
var inst_36345 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36340) : p.call(null,inst_36340));
var state_36358__$1 = state_36358;
if(cljs.core.truth_(inst_36345)){
var statearr_36369_38058 = state_36358__$1;
(statearr_36369_38058[(1)] = (8));

} else {
var statearr_36370_38060 = state_36358__$1;
(statearr_36370_38060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (3))){
var inst_36356 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36358__$1,inst_36356);
} else {
if((state_val_36359 === (2))){
var state_36358__$1 = state_36358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36358__$1,(4),ch);
} else {
if((state_val_36359 === (11))){
var inst_36348 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36378_38061 = state_36358__$1;
(statearr_36378_38061[(2)] = inst_36348);

(statearr_36378_38061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (9))){
var state_36358__$1 = state_36358;
var statearr_36379_38063 = state_36358__$1;
(statearr_36379_38063[(2)] = null);

(statearr_36379_38063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (5))){
var inst_36343 = cljs.core.async.close_BANG_(out);
var state_36358__$1 = state_36358;
var statearr_36380_38066 = state_36358__$1;
(statearr_36380_38066[(2)] = inst_36343);

(statearr_36380_38066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (10))){
var inst_36351 = (state_36358[(2)]);
var state_36358__$1 = (function (){var statearr_36381 = state_36358;
(statearr_36381[(8)] = inst_36351);

return statearr_36381;
})();
var statearr_36382_38067 = state_36358__$1;
(statearr_36382_38067[(2)] = null);

(statearr_36382_38067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (8))){
var inst_36340 = (state_36358[(7)]);
var state_36358__$1 = state_36358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36358__$1,(11),out,inst_36340);
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
var statearr_36383 = [null,null,null,null,null,null,null,null,null];
(statearr_36383[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36383[(1)] = (1));

return statearr_36383;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36358){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36358);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36385){if((e36385 instanceof Object)){
var ex__34203__auto__ = e36385;
var statearr_36387_38071 = state_36358;
(statearr_36387_38071[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36385;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38072 = state_36358;
state_36358 = G__38072;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36390 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36390[(6)] = c__34267__auto___38048);

return statearr_36390;
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
var G__36393 = arguments.length;
switch (G__36393) {
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36463){
var state_val_36464 = (state_36463[(1)]);
if((state_val_36464 === (7))){
var inst_36459 = (state_36463[(2)]);
var state_36463__$1 = state_36463;
var statearr_36465_38080 = state_36463__$1;
(statearr_36465_38080[(2)] = inst_36459);

(statearr_36465_38080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (20))){
var inst_36427 = (state_36463[(7)]);
var inst_36439 = (state_36463[(2)]);
var inst_36440 = cljs.core.next(inst_36427);
var inst_36410 = inst_36440;
var inst_36411 = null;
var inst_36412 = (0);
var inst_36413 = (0);
var state_36463__$1 = (function (){var statearr_36467 = state_36463;
(statearr_36467[(8)] = inst_36413);

(statearr_36467[(9)] = inst_36410);

(statearr_36467[(10)] = inst_36411);

(statearr_36467[(11)] = inst_36412);

(statearr_36467[(12)] = inst_36439);

return statearr_36467;
})();
var statearr_36469_38083 = state_36463__$1;
(statearr_36469_38083[(2)] = null);

(statearr_36469_38083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (1))){
var state_36463__$1 = state_36463;
var statearr_36471_38085 = state_36463__$1;
(statearr_36471_38085[(2)] = null);

(statearr_36471_38085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (4))){
var inst_36399 = (state_36463[(13)]);
var inst_36399__$1 = (state_36463[(2)]);
var inst_36400 = (inst_36399__$1 == null);
var state_36463__$1 = (function (){var statearr_36478 = state_36463;
(statearr_36478[(13)] = inst_36399__$1);

return statearr_36478;
})();
if(cljs.core.truth_(inst_36400)){
var statearr_36479_38087 = state_36463__$1;
(statearr_36479_38087[(1)] = (5));

} else {
var statearr_36482_38088 = state_36463__$1;
(statearr_36482_38088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (15))){
var state_36463__$1 = state_36463;
var statearr_36486_38091 = state_36463__$1;
(statearr_36486_38091[(2)] = null);

(statearr_36486_38091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (21))){
var state_36463__$1 = state_36463;
var statearr_36487_38092 = state_36463__$1;
(statearr_36487_38092[(2)] = null);

(statearr_36487_38092[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (13))){
var inst_36413 = (state_36463[(8)]);
var inst_36410 = (state_36463[(9)]);
var inst_36411 = (state_36463[(10)]);
var inst_36412 = (state_36463[(11)]);
var inst_36423 = (state_36463[(2)]);
var inst_36424 = (inst_36413 + (1));
var tmp36483 = inst_36410;
var tmp36484 = inst_36411;
var tmp36485 = inst_36412;
var inst_36410__$1 = tmp36483;
var inst_36411__$1 = tmp36484;
var inst_36412__$1 = tmp36485;
var inst_36413__$1 = inst_36424;
var state_36463__$1 = (function (){var statearr_36491 = state_36463;
(statearr_36491[(8)] = inst_36413__$1);

(statearr_36491[(9)] = inst_36410__$1);

(statearr_36491[(10)] = inst_36411__$1);

(statearr_36491[(14)] = inst_36423);

(statearr_36491[(11)] = inst_36412__$1);

return statearr_36491;
})();
var statearr_36492_38096 = state_36463__$1;
(statearr_36492_38096[(2)] = null);

(statearr_36492_38096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (22))){
var state_36463__$1 = state_36463;
var statearr_36494_38097 = state_36463__$1;
(statearr_36494_38097[(2)] = null);

(statearr_36494_38097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (6))){
var inst_36399 = (state_36463[(13)]);
var inst_36408 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36399) : f.call(null,inst_36399));
var inst_36409 = cljs.core.seq(inst_36408);
var inst_36410 = inst_36409;
var inst_36411 = null;
var inst_36412 = (0);
var inst_36413 = (0);
var state_36463__$1 = (function (){var statearr_36495 = state_36463;
(statearr_36495[(8)] = inst_36413);

(statearr_36495[(9)] = inst_36410);

(statearr_36495[(10)] = inst_36411);

(statearr_36495[(11)] = inst_36412);

return statearr_36495;
})();
var statearr_36497_38101 = state_36463__$1;
(statearr_36497_38101[(2)] = null);

(statearr_36497_38101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (17))){
var inst_36427 = (state_36463[(7)]);
var inst_36431 = cljs.core.chunk_first(inst_36427);
var inst_36432 = cljs.core.chunk_rest(inst_36427);
var inst_36433 = cljs.core.count(inst_36431);
var inst_36410 = inst_36432;
var inst_36411 = inst_36431;
var inst_36412 = inst_36433;
var inst_36413 = (0);
var state_36463__$1 = (function (){var statearr_36499 = state_36463;
(statearr_36499[(8)] = inst_36413);

(statearr_36499[(9)] = inst_36410);

(statearr_36499[(10)] = inst_36411);

(statearr_36499[(11)] = inst_36412);

return statearr_36499;
})();
var statearr_36501_38103 = state_36463__$1;
(statearr_36501_38103[(2)] = null);

(statearr_36501_38103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (3))){
var inst_36461 = (state_36463[(2)]);
var state_36463__$1 = state_36463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36463__$1,inst_36461);
} else {
if((state_val_36464 === (12))){
var inst_36449 = (state_36463[(2)]);
var state_36463__$1 = state_36463;
var statearr_36506_38106 = state_36463__$1;
(statearr_36506_38106[(2)] = inst_36449);

(statearr_36506_38106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (2))){
var state_36463__$1 = state_36463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36463__$1,(4),in$);
} else {
if((state_val_36464 === (23))){
var inst_36457 = (state_36463[(2)]);
var state_36463__$1 = state_36463;
var statearr_36514_38107 = state_36463__$1;
(statearr_36514_38107[(2)] = inst_36457);

(statearr_36514_38107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (19))){
var inst_36444 = (state_36463[(2)]);
var state_36463__$1 = state_36463;
var statearr_36515_38109 = state_36463__$1;
(statearr_36515_38109[(2)] = inst_36444);

(statearr_36515_38109[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (11))){
var inst_36410 = (state_36463[(9)]);
var inst_36427 = (state_36463[(7)]);
var inst_36427__$1 = cljs.core.seq(inst_36410);
var state_36463__$1 = (function (){var statearr_36517 = state_36463;
(statearr_36517[(7)] = inst_36427__$1);

return statearr_36517;
})();
if(inst_36427__$1){
var statearr_36518_38112 = state_36463__$1;
(statearr_36518_38112[(1)] = (14));

} else {
var statearr_36519_38113 = state_36463__$1;
(statearr_36519_38113[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (9))){
var inst_36451 = (state_36463[(2)]);
var inst_36452 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36463__$1 = (function (){var statearr_36524 = state_36463;
(statearr_36524[(15)] = inst_36451);

return statearr_36524;
})();
if(cljs.core.truth_(inst_36452)){
var statearr_36525_38115 = state_36463__$1;
(statearr_36525_38115[(1)] = (21));

} else {
var statearr_36526_38116 = state_36463__$1;
(statearr_36526_38116[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (5))){
var inst_36402 = cljs.core.async.close_BANG_(out);
var state_36463__$1 = state_36463;
var statearr_36533_38119 = state_36463__$1;
(statearr_36533_38119[(2)] = inst_36402);

(statearr_36533_38119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (14))){
var inst_36427 = (state_36463[(7)]);
var inst_36429 = cljs.core.chunked_seq_QMARK_(inst_36427);
var state_36463__$1 = state_36463;
if(inst_36429){
var statearr_36534_38120 = state_36463__$1;
(statearr_36534_38120[(1)] = (17));

} else {
var statearr_36535_38121 = state_36463__$1;
(statearr_36535_38121[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (16))){
var inst_36447 = (state_36463[(2)]);
var state_36463__$1 = state_36463;
var statearr_36537_38122 = state_36463__$1;
(statearr_36537_38122[(2)] = inst_36447);

(statearr_36537_38122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36464 === (10))){
var inst_36413 = (state_36463[(8)]);
var inst_36411 = (state_36463[(10)]);
var inst_36421 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36411,inst_36413);
var state_36463__$1 = state_36463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36463__$1,(13),out,inst_36421);
} else {
if((state_val_36464 === (18))){
var inst_36427 = (state_36463[(7)]);
var inst_36436 = cljs.core.first(inst_36427);
var state_36463__$1 = state_36463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36463__$1,(20),out,inst_36436);
} else {
if((state_val_36464 === (8))){
var inst_36413 = (state_36463[(8)]);
var inst_36412 = (state_36463[(11)]);
var inst_36415 = (inst_36413 < inst_36412);
var inst_36416 = inst_36415;
var state_36463__$1 = state_36463;
if(cljs.core.truth_(inst_36416)){
var statearr_36547_38126 = state_36463__$1;
(statearr_36547_38126[(1)] = (10));

} else {
var statearr_36548_38127 = state_36463__$1;
(statearr_36548_38127[(1)] = (11));

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
var statearr_36549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36549[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__);

(statearr_36549[(1)] = (1));

return statearr_36549;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1 = (function (state_36463){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36463);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36552){if((e36552 instanceof Object)){
var ex__34203__auto__ = e36552;
var statearr_36553_38131 = state_36463;
(statearr_36553_38131[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36552;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38132 = state_36463;
state_36463 = G__38132;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = function(state_36463){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1.call(this,state_36463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36559 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36559[(6)] = c__34267__auto__);

return statearr_36559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36565 = arguments.length;
switch (G__36565) {
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
var G__36568 = arguments.length;
switch (G__36568) {
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
var G__36575 = arguments.length;
switch (G__36575) {
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
var c__34267__auto___38142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36601){
var state_val_36602 = (state_36601[(1)]);
if((state_val_36602 === (7))){
var inst_36595 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
var statearr_36603_38143 = state_36601__$1;
(statearr_36603_38143[(2)] = inst_36595);

(statearr_36603_38143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (1))){
var inst_36577 = null;
var state_36601__$1 = (function (){var statearr_36604 = state_36601;
(statearr_36604[(7)] = inst_36577);

return statearr_36604;
})();
var statearr_36605_38144 = state_36601__$1;
(statearr_36605_38144[(2)] = null);

(statearr_36605_38144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (4))){
var inst_36580 = (state_36601[(8)]);
var inst_36580__$1 = (state_36601[(2)]);
var inst_36581 = (inst_36580__$1 == null);
var inst_36582 = cljs.core.not(inst_36581);
var state_36601__$1 = (function (){var statearr_36607 = state_36601;
(statearr_36607[(8)] = inst_36580__$1);

return statearr_36607;
})();
if(inst_36582){
var statearr_36608_38147 = state_36601__$1;
(statearr_36608_38147[(1)] = (5));

} else {
var statearr_36609_38148 = state_36601__$1;
(statearr_36609_38148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (6))){
var state_36601__$1 = state_36601;
var statearr_36611_38153 = state_36601__$1;
(statearr_36611_38153[(2)] = null);

(statearr_36611_38153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (3))){
var inst_36597 = (state_36601[(2)]);
var inst_36598 = cljs.core.async.close_BANG_(out);
var state_36601__$1 = (function (){var statearr_36612 = state_36601;
(statearr_36612[(9)] = inst_36597);

return statearr_36612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36601__$1,inst_36598);
} else {
if((state_val_36602 === (2))){
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36601__$1,(4),ch);
} else {
if((state_val_36602 === (11))){
var inst_36580 = (state_36601[(8)]);
var inst_36589 = (state_36601[(2)]);
var inst_36577 = inst_36580;
var state_36601__$1 = (function (){var statearr_36614 = state_36601;
(statearr_36614[(7)] = inst_36577);

(statearr_36614[(10)] = inst_36589);

return statearr_36614;
})();
var statearr_36615_38157 = state_36601__$1;
(statearr_36615_38157[(2)] = null);

(statearr_36615_38157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (9))){
var inst_36580 = (state_36601[(8)]);
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36601__$1,(11),out,inst_36580);
} else {
if((state_val_36602 === (5))){
var inst_36577 = (state_36601[(7)]);
var inst_36580 = (state_36601[(8)]);
var inst_36584 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36580,inst_36577);
var state_36601__$1 = state_36601;
if(inst_36584){
var statearr_36618_38161 = state_36601__$1;
(statearr_36618_38161[(1)] = (8));

} else {
var statearr_36619_38162 = state_36601__$1;
(statearr_36619_38162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (10))){
var inst_36592 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
var statearr_36621_38163 = state_36601__$1;
(statearr_36621_38163[(2)] = inst_36592);

(statearr_36621_38163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (8))){
var inst_36577 = (state_36601[(7)]);
var tmp36617 = inst_36577;
var inst_36577__$1 = tmp36617;
var state_36601__$1 = (function (){var statearr_36622 = state_36601;
(statearr_36622[(7)] = inst_36577__$1);

return statearr_36622;
})();
var statearr_36623_38167 = state_36601__$1;
(statearr_36623_38167[(2)] = null);

(statearr_36623_38167[(1)] = (2));


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
var statearr_36625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36625[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36625[(1)] = (1));

return statearr_36625;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36601){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36601);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36626){if((e36626 instanceof Object)){
var ex__34203__auto__ = e36626;
var statearr_36627_38168 = state_36601;
(statearr_36627_38168[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36626;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38170 = state_36601;
state_36601 = G__38170;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36629 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36629[(6)] = c__34267__auto___38142);

return statearr_36629;
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
var G__36633 = arguments.length;
switch (G__36633) {
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
var c__34267__auto___38175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36672){
var state_val_36673 = (state_36672[(1)]);
if((state_val_36673 === (7))){
var inst_36668 = (state_36672[(2)]);
var state_36672__$1 = state_36672;
var statearr_36676_38177 = state_36672__$1;
(statearr_36676_38177[(2)] = inst_36668);

(statearr_36676_38177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (1))){
var inst_36635 = (new Array(n));
var inst_36636 = inst_36635;
var inst_36637 = (0);
var state_36672__$1 = (function (){var statearr_36677 = state_36672;
(statearr_36677[(7)] = inst_36636);

(statearr_36677[(8)] = inst_36637);

return statearr_36677;
})();
var statearr_36678_38179 = state_36672__$1;
(statearr_36678_38179[(2)] = null);

(statearr_36678_38179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (4))){
var inst_36640 = (state_36672[(9)]);
var inst_36640__$1 = (state_36672[(2)]);
var inst_36641 = (inst_36640__$1 == null);
var inst_36642 = cljs.core.not(inst_36641);
var state_36672__$1 = (function (){var statearr_36680 = state_36672;
(statearr_36680[(9)] = inst_36640__$1);

return statearr_36680;
})();
if(inst_36642){
var statearr_36681_38181 = state_36672__$1;
(statearr_36681_38181[(1)] = (5));

} else {
var statearr_36682_38184 = state_36672__$1;
(statearr_36682_38184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (15))){
var inst_36662 = (state_36672[(2)]);
var state_36672__$1 = state_36672;
var statearr_36684_38185 = state_36672__$1;
(statearr_36684_38185[(2)] = inst_36662);

(statearr_36684_38185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (13))){
var state_36672__$1 = state_36672;
var statearr_36685_38186 = state_36672__$1;
(statearr_36685_38186[(2)] = null);

(statearr_36685_38186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (6))){
var inst_36637 = (state_36672[(8)]);
var inst_36658 = (inst_36637 > (0));
var state_36672__$1 = state_36672;
if(cljs.core.truth_(inst_36658)){
var statearr_36686_38191 = state_36672__$1;
(statearr_36686_38191[(1)] = (12));

} else {
var statearr_36688_38192 = state_36672__$1;
(statearr_36688_38192[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (3))){
var inst_36670 = (state_36672[(2)]);
var state_36672__$1 = state_36672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36672__$1,inst_36670);
} else {
if((state_val_36673 === (12))){
var inst_36636 = (state_36672[(7)]);
var inst_36660 = cljs.core.vec(inst_36636);
var state_36672__$1 = state_36672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36672__$1,(15),out,inst_36660);
} else {
if((state_val_36673 === (2))){
var state_36672__$1 = state_36672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36672__$1,(4),ch);
} else {
if((state_val_36673 === (11))){
var inst_36652 = (state_36672[(2)]);
var inst_36653 = (new Array(n));
var inst_36636 = inst_36653;
var inst_36637 = (0);
var state_36672__$1 = (function (){var statearr_36690 = state_36672;
(statearr_36690[(7)] = inst_36636);

(statearr_36690[(10)] = inst_36652);

(statearr_36690[(8)] = inst_36637);

return statearr_36690;
})();
var statearr_36691_38197 = state_36672__$1;
(statearr_36691_38197[(2)] = null);

(statearr_36691_38197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (9))){
var inst_36636 = (state_36672[(7)]);
var inst_36650 = cljs.core.vec(inst_36636);
var state_36672__$1 = state_36672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36672__$1,(11),out,inst_36650);
} else {
if((state_val_36673 === (5))){
var inst_36645 = (state_36672[(11)]);
var inst_36636 = (state_36672[(7)]);
var inst_36640 = (state_36672[(9)]);
var inst_36637 = (state_36672[(8)]);
var inst_36644 = (inst_36636[inst_36637] = inst_36640);
var inst_36645__$1 = (inst_36637 + (1));
var inst_36646 = (inst_36645__$1 < n);
var state_36672__$1 = (function (){var statearr_36694 = state_36672;
(statearr_36694[(11)] = inst_36645__$1);

(statearr_36694[(12)] = inst_36644);

return statearr_36694;
})();
if(cljs.core.truth_(inst_36646)){
var statearr_36695_38200 = state_36672__$1;
(statearr_36695_38200[(1)] = (8));

} else {
var statearr_36696_38201 = state_36672__$1;
(statearr_36696_38201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (14))){
var inst_36665 = (state_36672[(2)]);
var inst_36666 = cljs.core.async.close_BANG_(out);
var state_36672__$1 = (function (){var statearr_36698 = state_36672;
(statearr_36698[(13)] = inst_36665);

return statearr_36698;
})();
var statearr_36700_38202 = state_36672__$1;
(statearr_36700_38202[(2)] = inst_36666);

(statearr_36700_38202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (10))){
var inst_36656 = (state_36672[(2)]);
var state_36672__$1 = state_36672;
var statearr_36701_38204 = state_36672__$1;
(statearr_36701_38204[(2)] = inst_36656);

(statearr_36701_38204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (8))){
var inst_36645 = (state_36672[(11)]);
var inst_36636 = (state_36672[(7)]);
var tmp36697 = inst_36636;
var inst_36636__$1 = tmp36697;
var inst_36637 = inst_36645;
var state_36672__$1 = (function (){var statearr_36703 = state_36672;
(statearr_36703[(7)] = inst_36636__$1);

(statearr_36703[(8)] = inst_36637);

return statearr_36703;
})();
var statearr_36704_38206 = state_36672__$1;
(statearr_36704_38206[(2)] = null);

(statearr_36704_38206[(1)] = (2));


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
var statearr_36705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36705[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36705[(1)] = (1));

return statearr_36705;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36672){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36672);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36707){if((e36707 instanceof Object)){
var ex__34203__auto__ = e36707;
var statearr_36708_38209 = state_36672;
(statearr_36708_38209[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36707;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38210 = state_36672;
state_36672 = G__38210;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36709 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36709[(6)] = c__34267__auto___38175);

return statearr_36709;
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
var G__36711 = arguments.length;
switch (G__36711) {
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
var c__34267__auto___38213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36754){
var state_val_36755 = (state_36754[(1)]);
if((state_val_36755 === (7))){
var inst_36750 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
var statearr_36756_38215 = state_36754__$1;
(statearr_36756_38215[(2)] = inst_36750);

(statearr_36756_38215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (1))){
var inst_36712 = [];
var inst_36713 = inst_36712;
var inst_36714 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36754__$1 = (function (){var statearr_36757 = state_36754;
(statearr_36757[(7)] = inst_36714);

(statearr_36757[(8)] = inst_36713);

return statearr_36757;
})();
var statearr_36758_38218 = state_36754__$1;
(statearr_36758_38218[(2)] = null);

(statearr_36758_38218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (4))){
var inst_36717 = (state_36754[(9)]);
var inst_36717__$1 = (state_36754[(2)]);
var inst_36718 = (inst_36717__$1 == null);
var inst_36719 = cljs.core.not(inst_36718);
var state_36754__$1 = (function (){var statearr_36759 = state_36754;
(statearr_36759[(9)] = inst_36717__$1);

return statearr_36759;
})();
if(inst_36719){
var statearr_36760_38220 = state_36754__$1;
(statearr_36760_38220[(1)] = (5));

} else {
var statearr_36762_38222 = state_36754__$1;
(statearr_36762_38222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (15))){
var inst_36744 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
var statearr_36763_38224 = state_36754__$1;
(statearr_36763_38224[(2)] = inst_36744);

(statearr_36763_38224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (13))){
var state_36754__$1 = state_36754;
var statearr_36764_38225 = state_36754__$1;
(statearr_36764_38225[(2)] = null);

(statearr_36764_38225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (6))){
var inst_36713 = (state_36754[(8)]);
var inst_36739 = inst_36713.length;
var inst_36740 = (inst_36739 > (0));
var state_36754__$1 = state_36754;
if(cljs.core.truth_(inst_36740)){
var statearr_36766_38226 = state_36754__$1;
(statearr_36766_38226[(1)] = (12));

} else {
var statearr_36767_38227 = state_36754__$1;
(statearr_36767_38227[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (3))){
var inst_36752 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36754__$1,inst_36752);
} else {
if((state_val_36755 === (12))){
var inst_36713 = (state_36754[(8)]);
var inst_36742 = cljs.core.vec(inst_36713);
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36754__$1,(15),out,inst_36742);
} else {
if((state_val_36755 === (2))){
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36754__$1,(4),ch);
} else {
if((state_val_36755 === (11))){
var inst_36721 = (state_36754[(10)]);
var inst_36717 = (state_36754[(9)]);
var inst_36731 = (state_36754[(2)]);
var inst_36733 = [];
var inst_36734 = inst_36733.push(inst_36717);
var inst_36713 = inst_36733;
var inst_36714 = inst_36721;
var state_36754__$1 = (function (){var statearr_36770 = state_36754;
(statearr_36770[(7)] = inst_36714);

(statearr_36770[(11)] = inst_36731);

(statearr_36770[(12)] = inst_36734);

(statearr_36770[(8)] = inst_36713);

return statearr_36770;
})();
var statearr_36771_38229 = state_36754__$1;
(statearr_36771_38229[(2)] = null);

(statearr_36771_38229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (9))){
var inst_36713 = (state_36754[(8)]);
var inst_36729 = cljs.core.vec(inst_36713);
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36754__$1,(11),out,inst_36729);
} else {
if((state_val_36755 === (5))){
var inst_36714 = (state_36754[(7)]);
var inst_36721 = (state_36754[(10)]);
var inst_36717 = (state_36754[(9)]);
var inst_36721__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36717) : f.call(null,inst_36717));
var inst_36722 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36721__$1,inst_36714);
var inst_36723 = cljs.core.keyword_identical_QMARK_(inst_36714,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36724 = ((inst_36722) || (inst_36723));
var state_36754__$1 = (function (){var statearr_36773 = state_36754;
(statearr_36773[(10)] = inst_36721__$1);

return statearr_36773;
})();
if(cljs.core.truth_(inst_36724)){
var statearr_36774_38231 = state_36754__$1;
(statearr_36774_38231[(1)] = (8));

} else {
var statearr_36776_38232 = state_36754__$1;
(statearr_36776_38232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (14))){
var inst_36747 = (state_36754[(2)]);
var inst_36748 = cljs.core.async.close_BANG_(out);
var state_36754__$1 = (function (){var statearr_36778 = state_36754;
(statearr_36778[(13)] = inst_36747);

return statearr_36778;
})();
var statearr_36779_38234 = state_36754__$1;
(statearr_36779_38234[(2)] = inst_36748);

(statearr_36779_38234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (10))){
var inst_36737 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
var statearr_36781_38235 = state_36754__$1;
(statearr_36781_38235[(2)] = inst_36737);

(statearr_36781_38235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (8))){
var inst_36721 = (state_36754[(10)]);
var inst_36717 = (state_36754[(9)]);
var inst_36713 = (state_36754[(8)]);
var inst_36726 = inst_36713.push(inst_36717);
var tmp36777 = inst_36713;
var inst_36713__$1 = tmp36777;
var inst_36714 = inst_36721;
var state_36754__$1 = (function (){var statearr_36782 = state_36754;
(statearr_36782[(7)] = inst_36714);

(statearr_36782[(14)] = inst_36726);

(statearr_36782[(8)] = inst_36713__$1);

return statearr_36782;
})();
var statearr_36783_38236 = state_36754__$1;
(statearr_36783_38236[(2)] = null);

(statearr_36783_38236[(1)] = (2));


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
var statearr_36785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36785[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36785[(1)] = (1));

return statearr_36785;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36754){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36754);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36786){if((e36786 instanceof Object)){
var ex__34203__auto__ = e36786;
var statearr_36788_38238 = state_36754;
(statearr_36788_38238[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38239 = state_36754;
state_36754 = G__38239;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36789 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36789[(6)] = c__34267__auto___38213);

return statearr_36789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
