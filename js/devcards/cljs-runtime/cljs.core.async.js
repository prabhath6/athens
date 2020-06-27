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
var G__34334 = arguments.length;
switch (G__34334) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34335 = (function (f,blockable,meta34336){
this.f = f;
this.blockable = blockable;
this.meta34336 = meta34336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34337,meta34336__$1){
var self__ = this;
var _34337__$1 = this;
return (new cljs.core.async.t_cljs$core$async34335(self__.f,self__.blockable,meta34336__$1));
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34337){
var self__ = this;
var _34337__$1 = this;
return self__.meta34336;
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34336","meta34336",1337269977,null)], null);
}));

(cljs.core.async.t_cljs$core$async34335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34335");

(cljs.core.async.t_cljs$core$async34335.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34335.
 */
cljs.core.async.__GT_t_cljs$core$async34335 = (function cljs$core$async$__GT_t_cljs$core$async34335(f__$1,blockable__$1,meta34336){
return (new cljs.core.async.t_cljs$core$async34335(f__$1,blockable__$1,meta34336));
});

}

return (new cljs.core.async.t_cljs$core$async34335(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var val_36819 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36819) : fn1.call(null,val_36819));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36819) : fn1.call(null,val_36819));
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
var n__4666__auto___36824 = n;
var x_36826 = (0);
while(true){
if((x_36826 < n__4666__auto___36824)){
(a[x_36826] = x_36826);

var G__36827 = (x_36826 + (1));
x_36826 = G__36827;
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
var G__36836 = (i + (1));
i = G__36836;
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
var len__4789__auto___36838 = arguments.length;
var i__4790__auto___36839 = (0);
while(true){
if((i__4790__auto___36839 < len__4789__auto___36838)){
args__4795__auto__.push((arguments[i__4790__auto___36839]));

var G__36840 = (i__4790__auto___36839 + (1));
i__4790__auto___36839 = G__36840;
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
var c__34274__auto___36845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34410 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36846 = state_34423__$1;
(statearr_34425_36846[(2)] = inst_34410);

(statearr_34425_36846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36848 = state_34423__$1;
(statearr_34426_36848[(2)] = null);

(statearr_34426_36848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34390 = (state_34423[(7)]);
var inst_34390__$1 = (state_34423[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34423__$1 = (function (){var statearr_34427 = state_34423;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36850 = state_34423__$1;
(statearr_34428_36850[(1)] = (5));

} else {
var statearr_34429_36851 = state_34423__$1;
(statearr_34429_36851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36852 = state_34423__$1;
(statearr_34430_36852[(2)] = null);

(statearr_34430_36852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34390 = (state_34423[(7)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34423__$1,(11),to,inst_34390);
} else {
if((state_val_34424 === (3))){
var inst_34415 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34423__$1,inst_34415);
} else {
if((state_val_34424 === (12))){
var state_34423__$1 = state_34423;
var statearr_34431_36854 = state_34423__$1;
(statearr_34431_36854[(2)] = null);

(statearr_34431_36854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34423__$1,(4),from);
} else {
if((state_val_34424 === (11))){
var inst_34400 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36855 = state_34423__$1;
(statearr_34432_36855[(1)] = (12));

} else {
var statearr_34433_36856 = state_34423__$1;
(statearr_34433_36856[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36858 = state_34423__$1;
(statearr_34434_36858[(2)] = null);

(statearr_34434_36858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36859 = state_34423__$1;
(statearr_34435_36859[(1)] = (8));

} else {
var statearr_34436_36860 = state_34423__$1;
(statearr_34436_36860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34408 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36861 = state_34423__$1;
(statearr_34437_36861[(2)] = inst_34408);

(statearr_34437_36861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34397 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36863 = state_34423__$1;
(statearr_34438_36863[(2)] = inst_34397);

(statearr_34438_36863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36864 = state_34423__$1;
(statearr_34439_36864[(2)] = inst_34394);

(statearr_34439_36864[(1)] = (10));


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
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_36866 = state_34423;
(statearr_34442_36866[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36868 = state_34423;
state_34423 = G__36868;
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
var state__34276__auto__ = (function (){var statearr_34443 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34443[(6)] = c__34274__auto___36845);

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
var process = (function (p__34448){
var vec__34449 = p__34448;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34449,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34449,(1),null);
var job = vec__34449;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34274__auto___36871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34456){
var state_val_34457 = (state_34456[(1)]);
if((state_val_34457 === (1))){
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34456__$1,(2),res,v);
} else {
if((state_val_34457 === (2))){
var inst_34453 = (state_34456[(2)]);
var inst_34454 = cljs.core.async.close_BANG_(res);
var state_34456__$1 = (function (){var statearr_34459 = state_34456;
(statearr_34459[(7)] = inst_34453);

return statearr_34459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34456__$1,inst_34454);
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
var statearr_34462_36874 = state_34456;
(statearr_34462_36874[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36875 = state_34456;
state_34456 = G__36875;
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
(statearr_34463[(6)] = c__34274__auto___36871);

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
var n__4666__auto___36877 = n;
var __36878 = (0);
while(true){
if((__36878 < n__4666__auto___36877)){
var G__34470_36880 = type;
var G__34470_36881__$1 = (((G__34470_36880 instanceof cljs.core.Keyword))?G__34470_36880.fqn:null);
switch (G__34470_36881__$1) {
case "compute":
var c__34274__auto___36883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36878,c__34274__auto___36883,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36878,c__34274__auto___36883,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async){
return (function (state_34484){
var state_val_34485 = (state_34484[(1)]);
if((state_val_34485 === (1))){
var state_34484__$1 = state_34484;
var statearr_34486_36885 = state_34484__$1;
(statearr_34486_36885[(2)] = null);

(statearr_34486_36885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (2))){
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34484__$1,(4),jobs);
} else {
if((state_val_34485 === (3))){
var inst_34482 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34484__$1,inst_34482);
} else {
if((state_val_34485 === (4))){
var inst_34474 = (state_34484[(2)]);
var inst_34475 = process(inst_34474);
var state_34484__$1 = state_34484;
if(cljs.core.truth_(inst_34475)){
var statearr_34489_36886 = state_34484__$1;
(statearr_34489_36886[(1)] = (5));

} else {
var statearr_34493_36888 = state_34484__$1;
(statearr_34493_36888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (5))){
var state_34484__$1 = state_34484;
var statearr_34496_36889 = state_34484__$1;
(statearr_34496_36889[(2)] = null);

(statearr_34496_36889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (6))){
var state_34484__$1 = state_34484;
var statearr_34497_36890 = state_34484__$1;
(statearr_34497_36890[(2)] = null);

(statearr_34497_36890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (7))){
var inst_34480 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
var statearr_34498_36892 = state_34484__$1;
(statearr_34498_36892[(2)] = inst_34480);

(statearr_34498_36892[(1)] = (3));


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
});})(__36878,c__34274__auto___36883,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async))
;
return ((function (__36878,switch__34206__auto__,c__34274__auto___36883,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null];
(statearr_34499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34484){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34484);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34500){if((e34500 instanceof Object)){
var ex__34210__auto__ = e34500;
var statearr_34501_36894 = state_34484;
(statearr_34501_36894[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36895 = state_34484;
state_34484 = G__36895;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36878,switch__34206__auto__,c__34274__auto___36883,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34502 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34502[(6)] = c__34274__auto___36883);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36878,c__34274__auto___36883,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36878,c__34274__auto___36897,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36878,c__34274__auto___36897,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async){
return (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var state_34516__$1 = state_34516;
var statearr_34518_36899 = state_34516__$1;
(statearr_34518_36899[(2)] = null);

(statearr_34518_36899[(1)] = (2));


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
var inst_34505 = (state_34516[(2)]);
var inst_34506 = async(inst_34505);
var state_34516__$1 = state_34516;
if(cljs.core.truth_(inst_34506)){
var statearr_34523_36900 = state_34516__$1;
(statearr_34523_36900[(1)] = (5));

} else {
var statearr_34524_36902 = state_34516__$1;
(statearr_34524_36902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (5))){
var state_34516__$1 = state_34516;
var statearr_34525_36903 = state_34516__$1;
(statearr_34525_36903[(2)] = null);

(statearr_34525_36903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34529_36904 = state_34516__$1;
(statearr_34529_36904[(2)] = null);

(statearr_34529_36904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (7))){
var inst_34511 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34530_36906 = state_34516__$1;
(statearr_34530_36906[(2)] = inst_34511);

(statearr_34530_36906[(1)] = (3));


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
});})(__36878,c__34274__auto___36897,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async))
;
return ((function (__36878,switch__34206__auto__,c__34274__auto___36897,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async){
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
var statearr_34533_36908 = state_34516;
(statearr_34533_36908[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36909 = state_34516;
state_34516 = G__36909;
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
;})(__36878,switch__34206__auto__,c__34274__auto___36897,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___36897);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36878,c__34274__auto___36897,G__34470_36880,G__34470_36881__$1,n__4666__auto___36877,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34470_36881__$1)].join('')));

}

var G__36911 = (__36878 + (1));
__36878 = G__36911;
continue;
} else {
}
break;
}

var c__34274__auto___36912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34552 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36914 = state_34559__$1;
(statearr_34561_36914[(2)] = inst_34552);

(statearr_34561_36914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36915 = state_34559__$1;
(statearr_34562_36915[(2)] = null);

(statearr_34562_36915[(1)] = (2));


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
var statearr_34564_36917 = state_34559__$1;
(statearr_34564_36917[(1)] = (5));

} else {
var statearr_34565_36918 = state_34559__$1;
(statearr_34565_36918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (6))){
var inst_34542 = (state_34559[(8)]);
var inst_34537 = (state_34559[(7)]);
var inst_34542__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34544 = [inst_34537,inst_34542__$1];
var inst_34545 = (new cljs.core.PersistentVector(null,2,(5),inst_34543,inst_34544,null));
var state_34559__$1 = (function (){var statearr_34566 = state_34559;
(statearr_34566[(8)] = inst_34542__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(8),jobs,inst_34545);
} else {
if((state_val_34560 === (3))){
var inst_34554 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34559__$1,inst_34554);
} else {
if((state_val_34560 === (2))){
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34559__$1,(4),from);
} else {
if((state_val_34560 === (9))){
var inst_34549 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34567 = state_34559;
(statearr_34567[(9)] = inst_34549);

return statearr_34567;
})();
var statearr_34568_36920 = state_34559__$1;
(statearr_34568_36920[(2)] = null);

(statearr_34568_36920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36922 = state_34559__$1;
(statearr_34569_36922[(2)] = inst_34540);

(statearr_34569_36922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (8))){
var inst_34542 = (state_34559[(8)]);
var inst_34547 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34570 = state_34559;
(statearr_34570[(10)] = inst_34547);

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
var statearr_34573_36924 = state_34559;
(statearr_34573_36924[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36925 = state_34559;
state_34559 = G__36925;
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
var state__34276__auto__ = (function (){var statearr_34574 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34574[(6)] = c__34274__auto___36912);

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
var statearr_34614_36927 = state_34612__$1;
(statearr_34614_36927[(2)] = inst_34608);

(statearr_34614_36927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36929 = state_34612__$1;
(statearr_34615_36929[(2)] = null);

(statearr_34615_36929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36930 = state_34612__$1;
(statearr_34616_36930[(2)] = null);

(statearr_34616_36930[(1)] = (2));


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
var statearr_34618_36932 = state_34612__$1;
(statearr_34618_36932[(1)] = (5));

} else {
var statearr_34619_36933 = state_34612__$1;
(statearr_34619_36933[(1)] = (6));

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
var statearr_34620_36934 = state_34612__$1;
(statearr_34620_36934[(2)] = inst_34603);

(statearr_34620_36934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36936 = state_34612__$1;
(statearr_34622_36936[(2)] = null);

(statearr_34622_36936[(1)] = (2));


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
var statearr_34623_36938 = state_34612__$1;
(statearr_34623_36938[(1)] = (19));

} else {
var statearr_34624_36939 = state_34612__$1;
(statearr_34624_36939[(1)] = (20));

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
var statearr_34625_36941 = state_34612__$1;
(statearr_34625_36941[(2)] = null);

(statearr_34625_36941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36942 = state_34612__$1;
(statearr_34627_36942[(2)] = null);

(statearr_34627_36942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36943 = state_34612__$1;
(statearr_34628_36943[(2)] = null);

(statearr_34628_36943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36945 = state_34612__$1;
(statearr_34629_36945[(1)] = (8));

} else {
var statearr_34630_36946 = state_34612__$1;
(statearr_34630_36946[(1)] = (9));

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
var statearr_34632_36947 = state_34612__$1;
(statearr_34632_36947[(1)] = (15));

} else {
var statearr_34633_36948 = state_34612__$1;
(statearr_34633_36948[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36950 = state_34612__$1;
(statearr_34634_36950[(2)] = false);

(statearr_34634_36950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36951 = state_34612__$1;
(statearr_34635_36951[(2)] = inst_34584);

(statearr_34635_36951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36952 = state_34612__$1;
(statearr_34636_36952[(2)] = inst_34595);

(statearr_34636_36952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36954 = state_34612__$1;
(statearr_34637_36954[(2)] = inst_34581);

(statearr_34637_36954[(1)] = (10));


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
var statearr_34640_36956 = state_34612;
(statearr_34640_36956[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36957 = state_34612;
state_34612 = G__36957;
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
var G__34646 = arguments.length;
switch (G__34646) {
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
var G__34653 = arguments.length;
switch (G__34653) {
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
var G__34658 = arguments.length;
switch (G__34658) {
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
var c__34274__auto___36967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34687_36968 = state_34684__$1;
(statearr_34687_36968[(2)] = inst_34680);

(statearr_34687_36968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34689_36969 = state_34684__$1;
(statearr_34689_36969[(2)] = null);

(statearr_34689_36969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34661 = (state_34684[(7)]);
var inst_34661__$1 = (state_34684[(2)]);
var inst_34662 = (inst_34661__$1 == null);
var state_34684__$1 = (function (){var statearr_34690 = state_34684;
(statearr_34690[(7)] = inst_34661__$1);

return statearr_34690;
})();
if(cljs.core.truth_(inst_34662)){
var statearr_34691_36971 = state_34684__$1;
(statearr_34691_36971[(1)] = (5));

} else {
var statearr_34692_36972 = state_34684__$1;
(statearr_34692_36972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (13))){
var state_34684__$1 = state_34684;
var statearr_34693_36974 = state_34684__$1;
(statearr_34693_36974[(2)] = null);

(statearr_34693_36974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34661 = (state_34684[(7)]);
var inst_34667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34661) : p.call(null,inst_34661));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34667)){
var statearr_34696_36975 = state_34684__$1;
(statearr_34696_36975[(1)] = (9));

} else {
var statearr_34697_36976 = state_34684__$1;
(statearr_34697_36976[(1)] = (10));

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
var statearr_34698_36978 = state_34684__$1;
(statearr_34698_36978[(2)] = null);

(statearr_34698_36978[(1)] = (2));


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
var statearr_34702_36979 = state_34684__$1;
(statearr_34702_36979[(2)] = tc);

(statearr_34702_36979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34664 = cljs.core.async.close_BANG_(tc);
var inst_34665 = cljs.core.async.close_BANG_(fc);
var state_34684__$1 = (function (){var statearr_34703 = state_34684;
(statearr_34703[(8)] = inst_34664);

return statearr_34703;
})();
var statearr_34704_36981 = state_34684__$1;
(statearr_34704_36981[(2)] = inst_34665);

(statearr_34704_36981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34705_36982 = state_34684__$1;
(statearr_34705_36982[(2)] = inst_34678);

(statearr_34705_36982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var state_34684__$1 = state_34684;
var statearr_34706_36983 = state_34684__$1;
(statearr_34706_36983[(2)] = fc);

(statearr_34706_36983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34673 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34673)){
var statearr_34708_36985 = state_34684__$1;
(statearr_34708_36985[(1)] = (12));

} else {
var statearr_34709_36986 = state_34684__$1;
(statearr_34709_36986[(1)] = (13));

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
var statearr_34712_36987 = state_34684;
(statearr_34712_36987[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36989 = state_34684;
state_34684 = G__36989;
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
(statearr_34713[(6)] = c__34274__auto___36967);

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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34743){
var state_val_34744 = (state_34743[(1)]);
if((state_val_34744 === (7))){
var inst_34736 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34745_36991 = state_34743__$1;
(statearr_34745_36991[(2)] = inst_34736);

(statearr_34745_36991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (1))){
var inst_34720 = init;
var state_34743__$1 = (function (){var statearr_34746 = state_34743;
(statearr_34746[(7)] = inst_34720);

return statearr_34746;
})();
var statearr_34747_36992 = state_34743__$1;
(statearr_34747_36992[(2)] = null);

(statearr_34747_36992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (4))){
var inst_34723 = (state_34743[(8)]);
var inst_34723__$1 = (state_34743[(2)]);
var inst_34724 = (inst_34723__$1 == null);
var state_34743__$1 = (function (){var statearr_34748 = state_34743;
(statearr_34748[(8)] = inst_34723__$1);

return statearr_34748;
})();
if(cljs.core.truth_(inst_34724)){
var statearr_34749_36994 = state_34743__$1;
(statearr_34749_36994[(1)] = (5));

} else {
var statearr_34750_36995 = state_34743__$1;
(statearr_34750_36995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (6))){
var inst_34727 = (state_34743[(9)]);
var inst_34723 = (state_34743[(8)]);
var inst_34720 = (state_34743[(7)]);
var inst_34727__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34720,inst_34723) : f.call(null,inst_34720,inst_34723));
var inst_34728 = cljs.core.reduced_QMARK_(inst_34727__$1);
var state_34743__$1 = (function (){var statearr_34751 = state_34743;
(statearr_34751[(9)] = inst_34727__$1);

return statearr_34751;
})();
if(inst_34728){
var statearr_34752_36996 = state_34743__$1;
(statearr_34752_36996[(1)] = (8));

} else {
var statearr_34753_36997 = state_34743__$1;
(statearr_34753_36997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (3))){
var inst_34738 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34743__$1,inst_34738);
} else {
if((state_val_34744 === (2))){
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34743__$1,(4),ch);
} else {
if((state_val_34744 === (9))){
var inst_34727 = (state_34743[(9)]);
var inst_34720 = inst_34727;
var state_34743__$1 = (function (){var statearr_34754 = state_34743;
(statearr_34754[(7)] = inst_34720);

return statearr_34754;
})();
var statearr_34755_36999 = state_34743__$1;
(statearr_34755_36999[(2)] = null);

(statearr_34755_36999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (5))){
var inst_34720 = (state_34743[(7)]);
var state_34743__$1 = state_34743;
var statearr_34756_37000 = state_34743__$1;
(statearr_34756_37000[(2)] = inst_34720);

(statearr_34756_37000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (10))){
var inst_34734 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34757_37002 = state_34743__$1;
(statearr_34757_37002[(2)] = inst_34734);

(statearr_34757_37002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (8))){
var inst_34727 = (state_34743[(9)]);
var inst_34730 = cljs.core.deref(inst_34727);
var state_34743__$1 = state_34743;
var statearr_34758_37003 = state_34743__$1;
(statearr_34758_37003[(2)] = inst_34730);

(statearr_34758_37003[(1)] = (10));


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
var statearr_34762 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34762[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34762[(1)] = (1));

return statearr_34762;
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
}catch (e34766){if((e34766 instanceof Object)){
var ex__34210__auto__ = e34766;
var statearr_34767_37005 = state_34743;
(statearr_34767_37005[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37007 = state_34743;
state_34743 = G__37007;
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
var state__34276__auto__ = (function (){var statearr_34769 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34769[(6)] = c__34274__auto__);

return statearr_34769;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34775){
var state_val_34776 = (state_34775[(1)]);
if((state_val_34776 === (1))){
var inst_34770 = cljs.core.async.reduce(f__$1,init,ch);
var state_34775__$1 = state_34775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34775__$1,(2),inst_34770);
} else {
if((state_val_34776 === (2))){
var inst_34772 = (state_34775[(2)]);
var inst_34773 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34772) : f__$1.call(null,inst_34772));
var state_34775__$1 = state_34775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34775__$1,inst_34773);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34782 = [null,null,null,null,null,null,null];
(statearr_34782[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34782[(1)] = (1));

return statearr_34782;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34775){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34775);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34784){if((e34784 instanceof Object)){
var ex__34210__auto__ = e34784;
var statearr_34785_37011 = state_34775;
(statearr_34785_37011[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37012 = state_34775;
state_34775 = G__37012;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34775){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34786 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34786[(6)] = c__34274__auto__);

return statearr_34786;
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
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34819){
var state_val_34820 = (state_34819[(1)]);
if((state_val_34820 === (7))){
var inst_34801 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34821_37016 = state_34819__$1;
(statearr_34821_37016[(2)] = inst_34801);

(statearr_34821_37016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (1))){
var inst_34792 = cljs.core.seq(coll);
var inst_34793 = inst_34792;
var state_34819__$1 = (function (){var statearr_34822 = state_34819;
(statearr_34822[(7)] = inst_34793);

return statearr_34822;
})();
var statearr_34823_37018 = state_34819__$1;
(statearr_34823_37018[(2)] = null);

(statearr_34823_37018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (4))){
var inst_34793 = (state_34819[(7)]);
var inst_34799 = cljs.core.first(inst_34793);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34819__$1,(7),ch,inst_34799);
} else {
if((state_val_34820 === (13))){
var inst_34813 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34824_37019 = state_34819__$1;
(statearr_34824_37019[(2)] = inst_34813);

(statearr_34824_37019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (6))){
var inst_34804 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34804)){
var statearr_34825_37021 = state_34819__$1;
(statearr_34825_37021[(1)] = (8));

} else {
var statearr_34826_37022 = state_34819__$1;
(statearr_34826_37022[(1)] = (9));

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
var statearr_34827_37023 = state_34819__$1;
(statearr_34827_37023[(2)] = null);

(statearr_34827_37023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (2))){
var inst_34793 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34793)){
var statearr_34828_37024 = state_34819__$1;
(statearr_34828_37024[(1)] = (4));

} else {
var statearr_34829_37025 = state_34819__$1;
(statearr_34829_37025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (11))){
var inst_34810 = cljs.core.async.close_BANG_(ch);
var state_34819__$1 = state_34819;
var statearr_34830_37026 = state_34819__$1;
(statearr_34830_37026[(2)] = inst_34810);

(statearr_34830_37026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (9))){
var state_34819__$1 = state_34819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37028 = state_34819__$1;
(statearr_34831_37028[(1)] = (11));

} else {
var statearr_34832_37029 = state_34819__$1;
(statearr_34832_37029[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (5))){
var inst_34793 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
var statearr_34833_37036 = state_34819__$1;
(statearr_34833_37036[(2)] = inst_34793);

(statearr_34833_37036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (10))){
var inst_34815 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34834_37037 = state_34819__$1;
(statearr_34834_37037[(2)] = inst_34815);

(statearr_34834_37037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (8))){
var inst_34793 = (state_34819[(7)]);
var inst_34806 = cljs.core.next(inst_34793);
var inst_34793__$1 = inst_34806;
var state_34819__$1 = (function (){var statearr_34835 = state_34819;
(statearr_34835[(7)] = inst_34793__$1);

return statearr_34835;
})();
var statearr_34836_37038 = state_34819__$1;
(statearr_34836_37038[(2)] = null);

(statearr_34836_37038[(1)] = (2));


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
var statearr_34839_37040 = state_34819;
(statearr_34839_37040[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37041 = state_34819;
state_34819 = G__37041;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34847 = (function (ch,cs,meta34848){
this.ch = ch;
this.cs = cs;
this.meta34848 = meta34848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34849,meta34848__$1){
var self__ = this;
var _34849__$1 = this;
return (new cljs.core.async.t_cljs$core$async34847(self__.ch,self__.cs,meta34848__$1));
}));

(cljs.core.async.t_cljs$core$async34847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34849){
var self__ = this;
var _34849__$1 = this;
return self__.meta34848;
}));

(cljs.core.async.t_cljs$core$async34847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34847.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34847.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34847.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34847.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34848","meta34848",1717183931,null)], null);
}));

(cljs.core.async.t_cljs$core$async34847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34847");

(cljs.core.async.t_cljs$core$async34847.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34847.
 */
cljs.core.async.__GT_t_cljs$core$async34847 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34847(ch__$1,cs__$1,meta34848){
return (new cljs.core.async.t_cljs$core$async34847(ch__$1,cs__$1,meta34848));
});

}

return (new cljs.core.async.t_cljs$core$async34847(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___37053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35031){
var state_val_35045 = (state_35031[(1)]);
if((state_val_35045 === (7))){
var inst_35020 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35056_37054 = state_35031__$1;
(statearr_35056_37054[(2)] = inst_35020);

(statearr_35056_37054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (20))){
var inst_34895 = (state_35031[(7)]);
var inst_34907 = cljs.core.first(inst_34895);
var inst_34908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34907,(0),null);
var inst_34909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34907,(1),null);
var state_35031__$1 = (function (){var statearr_35064 = state_35031;
(statearr_35064[(8)] = inst_34908);

return statearr_35064;
})();
if(cljs.core.truth_(inst_34909)){
var statearr_35067_37055 = state_35031__$1;
(statearr_35067_37055[(1)] = (22));

} else {
var statearr_35068_37056 = state_35031__$1;
(statearr_35068_37056[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (27))){
var inst_34858 = (state_35031[(9)]);
var inst_34950 = (state_35031[(10)]);
var inst_34945 = (state_35031[(11)]);
var inst_34943 = (state_35031[(12)]);
var inst_34950__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34943,inst_34945);
var inst_34951 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34950__$1,inst_34858,done);
var state_35031__$1 = (function (){var statearr_35077 = state_35031;
(statearr_35077[(10)] = inst_34950__$1);

return statearr_35077;
})();
if(cljs.core.truth_(inst_34951)){
var statearr_35081_37057 = state_35031__$1;
(statearr_35081_37057[(1)] = (30));

} else {
var statearr_35084_37058 = state_35031__$1;
(statearr_35084_37058[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (1))){
var state_35031__$1 = state_35031;
var statearr_35088_37061 = state_35031__$1;
(statearr_35088_37061[(2)] = null);

(statearr_35088_37061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (24))){
var inst_34895 = (state_35031[(7)]);
var inst_34917 = (state_35031[(2)]);
var inst_34919 = cljs.core.next(inst_34895);
var inst_34868 = inst_34919;
var inst_34870 = null;
var inst_34871 = (0);
var inst_34872 = (0);
var state_35031__$1 = (function (){var statearr_35095 = state_35031;
(statearr_35095[(13)] = inst_34870);

(statearr_35095[(14)] = inst_34871);

(statearr_35095[(15)] = inst_34872);

(statearr_35095[(16)] = inst_34868);

(statearr_35095[(17)] = inst_34917);

return statearr_35095;
})();
var statearr_35100_37066 = state_35031__$1;
(statearr_35100_37066[(2)] = null);

(statearr_35100_37066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (39))){
var state_35031__$1 = state_35031;
var statearr_35112_37067 = state_35031__$1;
(statearr_35112_37067[(2)] = null);

(statearr_35112_37067[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (4))){
var inst_34858 = (state_35031[(9)]);
var inst_34858__$1 = (state_35031[(2)]);
var inst_34859 = (inst_34858__$1 == null);
var state_35031__$1 = (function (){var statearr_35119 = state_35031;
(statearr_35119[(9)] = inst_34858__$1);

return statearr_35119;
})();
if(cljs.core.truth_(inst_34859)){
var statearr_35120_37068 = state_35031__$1;
(statearr_35120_37068[(1)] = (5));

} else {
var statearr_35121_37069 = state_35031__$1;
(statearr_35121_37069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (15))){
var inst_34870 = (state_35031[(13)]);
var inst_34871 = (state_35031[(14)]);
var inst_34872 = (state_35031[(15)]);
var inst_34868 = (state_35031[(16)]);
var inst_34891 = (state_35031[(2)]);
var inst_34892 = (inst_34872 + (1));
var tmp35106 = inst_34870;
var tmp35107 = inst_34871;
var tmp35108 = inst_34868;
var inst_34868__$1 = tmp35108;
var inst_34870__$1 = tmp35106;
var inst_34871__$1 = tmp35107;
var inst_34872__$1 = inst_34892;
var state_35031__$1 = (function (){var statearr_35122 = state_35031;
(statearr_35122[(18)] = inst_34891);

(statearr_35122[(13)] = inst_34870__$1);

(statearr_35122[(14)] = inst_34871__$1);

(statearr_35122[(15)] = inst_34872__$1);

(statearr_35122[(16)] = inst_34868__$1);

return statearr_35122;
})();
var statearr_35123_37074 = state_35031__$1;
(statearr_35123_37074[(2)] = null);

(statearr_35123_37074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (21))){
var inst_34922 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35129_37078 = state_35031__$1;
(statearr_35129_37078[(2)] = inst_34922);

(statearr_35129_37078[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (31))){
var inst_34950 = (state_35031[(10)]);
var inst_34954 = done(null);
var inst_34959 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34950);
var state_35031__$1 = (function (){var statearr_35130 = state_35031;
(statearr_35130[(19)] = inst_34954);

return statearr_35130;
})();
var statearr_35131_37081 = state_35031__$1;
(statearr_35131_37081[(2)] = inst_34959);

(statearr_35131_37081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (32))){
var inst_34944 = (state_35031[(20)]);
var inst_34942 = (state_35031[(21)]);
var inst_34945 = (state_35031[(11)]);
var inst_34943 = (state_35031[(12)]);
var inst_34961 = (state_35031[(2)]);
var inst_34962 = (inst_34945 + (1));
var tmp35124 = inst_34944;
var tmp35125 = inst_34942;
var tmp35126 = inst_34943;
var inst_34942__$1 = tmp35125;
var inst_34943__$1 = tmp35126;
var inst_34944__$1 = tmp35124;
var inst_34945__$1 = inst_34962;
var state_35031__$1 = (function (){var statearr_35156 = state_35031;
(statearr_35156[(20)] = inst_34944__$1);

(statearr_35156[(21)] = inst_34942__$1);

(statearr_35156[(22)] = inst_34961);

(statearr_35156[(11)] = inst_34945__$1);

(statearr_35156[(12)] = inst_34943__$1);

return statearr_35156;
})();
var statearr_35158_37087 = state_35031__$1;
(statearr_35158_37087[(2)] = null);

(statearr_35158_37087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (40))){
var inst_34988 = (state_35031[(23)]);
var inst_34993 = done(null);
var inst_34994 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34988);
var state_35031__$1 = (function (){var statearr_35161 = state_35031;
(statearr_35161[(24)] = inst_34993);

return statearr_35161;
})();
var statearr_35164_37094 = state_35031__$1;
(statearr_35164_37094[(2)] = inst_34994);

(statearr_35164_37094[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (33))){
var inst_34965 = (state_35031[(25)]);
var inst_34971 = cljs.core.chunked_seq_QMARK_(inst_34965);
var state_35031__$1 = state_35031;
if(inst_34971){
var statearr_35165_37101 = state_35031__$1;
(statearr_35165_37101[(1)] = (36));

} else {
var statearr_35166_37102 = state_35031__$1;
(statearr_35166_37102[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (13))){
var inst_34885 = (state_35031[(26)]);
var inst_34888 = cljs.core.async.close_BANG_(inst_34885);
var state_35031__$1 = state_35031;
var statearr_35169_37103 = state_35031__$1;
(statearr_35169_37103[(2)] = inst_34888);

(statearr_35169_37103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (22))){
var inst_34908 = (state_35031[(8)]);
var inst_34914 = cljs.core.async.close_BANG_(inst_34908);
var state_35031__$1 = state_35031;
var statearr_35176_37106 = state_35031__$1;
(statearr_35176_37106[(2)] = inst_34914);

(statearr_35176_37106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (36))){
var inst_34965 = (state_35031[(25)]);
var inst_34981 = cljs.core.chunk_first(inst_34965);
var inst_34982 = cljs.core.chunk_rest(inst_34965);
var inst_34984 = cljs.core.count(inst_34981);
var inst_34942 = inst_34982;
var inst_34943 = inst_34981;
var inst_34944 = inst_34984;
var inst_34945 = (0);
var state_35031__$1 = (function (){var statearr_35183 = state_35031;
(statearr_35183[(20)] = inst_34944);

(statearr_35183[(21)] = inst_34942);

(statearr_35183[(11)] = inst_34945);

(statearr_35183[(12)] = inst_34943);

return statearr_35183;
})();
var statearr_35187_37114 = state_35031__$1;
(statearr_35187_37114[(2)] = null);

(statearr_35187_37114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (41))){
var inst_34965 = (state_35031[(25)]);
var inst_34996 = (state_35031[(2)]);
var inst_34997 = cljs.core.next(inst_34965);
var inst_34942 = inst_34997;
var inst_34943 = null;
var inst_34944 = (0);
var inst_34945 = (0);
var state_35031__$1 = (function (){var statearr_35198 = state_35031;
(statearr_35198[(20)] = inst_34944);

(statearr_35198[(21)] = inst_34942);

(statearr_35198[(27)] = inst_34996);

(statearr_35198[(11)] = inst_34945);

(statearr_35198[(12)] = inst_34943);

return statearr_35198;
})();
var statearr_35200_37119 = state_35031__$1;
(statearr_35200_37119[(2)] = null);

(statearr_35200_37119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (43))){
var state_35031__$1 = state_35031;
var statearr_35204_37120 = state_35031__$1;
(statearr_35204_37120[(2)] = null);

(statearr_35204_37120[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (29))){
var inst_35005 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35209_37123 = state_35031__$1;
(statearr_35209_37123[(2)] = inst_35005);

(statearr_35209_37123[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (44))){
var inst_35017 = (state_35031[(2)]);
var state_35031__$1 = (function (){var statearr_35215 = state_35031;
(statearr_35215[(28)] = inst_35017);

return statearr_35215;
})();
var statearr_35217_37129 = state_35031__$1;
(statearr_35217_37129[(2)] = null);

(statearr_35217_37129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (6))){
var inst_34933 = (state_35031[(29)]);
var inst_34932 = cljs.core.deref(cs);
var inst_34933__$1 = cljs.core.keys(inst_34932);
var inst_34935 = cljs.core.count(inst_34933__$1);
var inst_34936 = cljs.core.reset_BANG_(dctr,inst_34935);
var inst_34941 = cljs.core.seq(inst_34933__$1);
var inst_34942 = inst_34941;
var inst_34943 = null;
var inst_34944 = (0);
var inst_34945 = (0);
var state_35031__$1 = (function (){var statearr_35225 = state_35031;
(statearr_35225[(20)] = inst_34944);

(statearr_35225[(29)] = inst_34933__$1);

(statearr_35225[(21)] = inst_34942);

(statearr_35225[(30)] = inst_34936);

(statearr_35225[(11)] = inst_34945);

(statearr_35225[(12)] = inst_34943);

return statearr_35225;
})();
var statearr_35230_37136 = state_35031__$1;
(statearr_35230_37136[(2)] = null);

(statearr_35230_37136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (28))){
var inst_34942 = (state_35031[(21)]);
var inst_34965 = (state_35031[(25)]);
var inst_34965__$1 = cljs.core.seq(inst_34942);
var state_35031__$1 = (function (){var statearr_35236 = state_35031;
(statearr_35236[(25)] = inst_34965__$1);

return statearr_35236;
})();
if(inst_34965__$1){
var statearr_35238_37141 = state_35031__$1;
(statearr_35238_37141[(1)] = (33));

} else {
var statearr_35241_37142 = state_35031__$1;
(statearr_35241_37142[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (25))){
var inst_34944 = (state_35031[(20)]);
var inst_34945 = (state_35031[(11)]);
var inst_34947 = (inst_34945 < inst_34944);
var inst_34948 = inst_34947;
var state_35031__$1 = state_35031;
if(cljs.core.truth_(inst_34948)){
var statearr_35247_37144 = state_35031__$1;
(statearr_35247_37144[(1)] = (27));

} else {
var statearr_35251_37145 = state_35031__$1;
(statearr_35251_37145[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (34))){
var state_35031__$1 = state_35031;
var statearr_35265_37146 = state_35031__$1;
(statearr_35265_37146[(2)] = null);

(statearr_35265_37146[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (17))){
var state_35031__$1 = state_35031;
var statearr_35268_37147 = state_35031__$1;
(statearr_35268_37147[(2)] = null);

(statearr_35268_37147[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (3))){
var inst_35023 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35031__$1,inst_35023);
} else {
if((state_val_35045 === (12))){
var inst_34927 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35276_37151 = state_35031__$1;
(statearr_35276_37151[(2)] = inst_34927);

(statearr_35276_37151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (2))){
var state_35031__$1 = state_35031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35031__$1,(4),ch);
} else {
if((state_val_35045 === (23))){
var state_35031__$1 = state_35031;
var statearr_35284_37157 = state_35031__$1;
(statearr_35284_37157[(2)] = null);

(statearr_35284_37157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (35))){
var inst_35003 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35289_37158 = state_35031__$1;
(statearr_35289_37158[(2)] = inst_35003);

(statearr_35289_37158[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (19))){
var inst_34895 = (state_35031[(7)]);
var inst_34899 = cljs.core.chunk_first(inst_34895);
var inst_34900 = cljs.core.chunk_rest(inst_34895);
var inst_34901 = cljs.core.count(inst_34899);
var inst_34868 = inst_34900;
var inst_34870 = inst_34899;
var inst_34871 = inst_34901;
var inst_34872 = (0);
var state_35031__$1 = (function (){var statearr_35296 = state_35031;
(statearr_35296[(13)] = inst_34870);

(statearr_35296[(14)] = inst_34871);

(statearr_35296[(15)] = inst_34872);

(statearr_35296[(16)] = inst_34868);

return statearr_35296;
})();
var statearr_35302_37167 = state_35031__$1;
(statearr_35302_37167[(2)] = null);

(statearr_35302_37167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (11))){
var inst_34895 = (state_35031[(7)]);
var inst_34868 = (state_35031[(16)]);
var inst_34895__$1 = cljs.core.seq(inst_34868);
var state_35031__$1 = (function (){var statearr_35305 = state_35031;
(statearr_35305[(7)] = inst_34895__$1);

return statearr_35305;
})();
if(inst_34895__$1){
var statearr_35310_37168 = state_35031__$1;
(statearr_35310_37168[(1)] = (16));

} else {
var statearr_35313_37171 = state_35031__$1;
(statearr_35313_37171[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (9))){
var inst_34929 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35319_37172 = state_35031__$1;
(statearr_35319_37172[(2)] = inst_34929);

(statearr_35319_37172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (5))){
var inst_34865 = cljs.core.deref(cs);
var inst_34866 = cljs.core.seq(inst_34865);
var inst_34868 = inst_34866;
var inst_34870 = null;
var inst_34871 = (0);
var inst_34872 = (0);
var state_35031__$1 = (function (){var statearr_35327 = state_35031;
(statearr_35327[(13)] = inst_34870);

(statearr_35327[(14)] = inst_34871);

(statearr_35327[(15)] = inst_34872);

(statearr_35327[(16)] = inst_34868);

return statearr_35327;
})();
var statearr_35331_37174 = state_35031__$1;
(statearr_35331_37174[(2)] = null);

(statearr_35331_37174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (14))){
var state_35031__$1 = state_35031;
var statearr_35335_37177 = state_35031__$1;
(statearr_35335_37177[(2)] = null);

(statearr_35335_37177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (45))){
var inst_35013 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35336_37179 = state_35031__$1;
(statearr_35336_37179[(2)] = inst_35013);

(statearr_35336_37179[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (26))){
var inst_34933 = (state_35031[(29)]);
var inst_35007 = (state_35031[(2)]);
var inst_35010 = cljs.core.seq(inst_34933);
var state_35031__$1 = (function (){var statearr_35337 = state_35031;
(statearr_35337[(31)] = inst_35007);

return statearr_35337;
})();
if(inst_35010){
var statearr_35338_37182 = state_35031__$1;
(statearr_35338_37182[(1)] = (42));

} else {
var statearr_35339_37184 = state_35031__$1;
(statearr_35339_37184[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (16))){
var inst_34895 = (state_35031[(7)]);
var inst_34897 = cljs.core.chunked_seq_QMARK_(inst_34895);
var state_35031__$1 = state_35031;
if(inst_34897){
var statearr_35340_37186 = state_35031__$1;
(statearr_35340_37186[(1)] = (19));

} else {
var statearr_35341_37187 = state_35031__$1;
(statearr_35341_37187[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (38))){
var inst_35000 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35342_37188 = state_35031__$1;
(statearr_35342_37188[(2)] = inst_35000);

(statearr_35342_37188[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (30))){
var state_35031__$1 = state_35031;
var statearr_35343_37189 = state_35031__$1;
(statearr_35343_37189[(2)] = null);

(statearr_35343_37189[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (10))){
var inst_34870 = (state_35031[(13)]);
var inst_34872 = (state_35031[(15)]);
var inst_34881 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34870,inst_34872);
var inst_34885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34881,(0),null);
var inst_34886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34881,(1),null);
var state_35031__$1 = (function (){var statearr_35346 = state_35031;
(statearr_35346[(26)] = inst_34885);

return statearr_35346;
})();
if(cljs.core.truth_(inst_34886)){
var statearr_35347_37197 = state_35031__$1;
(statearr_35347_37197[(1)] = (13));

} else {
var statearr_35348_37198 = state_35031__$1;
(statearr_35348_37198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (18))){
var inst_34925 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35349_37200 = state_35031__$1;
(statearr_35349_37200[(2)] = inst_34925);

(statearr_35349_37200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (42))){
var state_35031__$1 = state_35031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35031__$1,(45),dchan);
} else {
if((state_val_35045 === (37))){
var inst_34988 = (state_35031[(23)]);
var inst_34858 = (state_35031[(9)]);
var inst_34965 = (state_35031[(25)]);
var inst_34988__$1 = cljs.core.first(inst_34965);
var inst_34990 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34988__$1,inst_34858,done);
var state_35031__$1 = (function (){var statearr_35354 = state_35031;
(statearr_35354[(23)] = inst_34988__$1);

return statearr_35354;
})();
if(cljs.core.truth_(inst_34990)){
var statearr_35357_37204 = state_35031__$1;
(statearr_35357_37204[(1)] = (39));

} else {
var statearr_35359_37205 = state_35031__$1;
(statearr_35359_37205[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (8))){
var inst_34871 = (state_35031[(14)]);
var inst_34872 = (state_35031[(15)]);
var inst_34874 = (inst_34872 < inst_34871);
var inst_34875 = inst_34874;
var state_35031__$1 = state_35031;
if(cljs.core.truth_(inst_34875)){
var statearr_35361_37206 = state_35031__$1;
(statearr_35361_37206[(1)] = (10));

} else {
var statearr_35363_37208 = state_35031__$1;
(statearr_35363_37208[(1)] = (11));

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
var statearr_35367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35367[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35367[(1)] = (1));

return statearr_35367;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_35031){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35031);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35372){if((e35372 instanceof Object)){
var ex__34210__auto__ = e35372;
var statearr_35375_37215 = state_35031;
(statearr_35375_37215[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37218 = state_35031;
state_35031 = G__37218;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_35031){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_35031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35383 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35383[(6)] = c__34274__auto___37053);

return statearr_35383;
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
var G__35388 = arguments.length;
switch (G__35388) {
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
var len__4789__auto___37243 = arguments.length;
var i__4790__auto___37244 = (0);
while(true){
if((i__4790__auto___37244 < len__4789__auto___37243)){
args__4795__auto__.push((arguments[i__4790__auto___37244]));

var G__37245 = (i__4790__auto___37244 + (1));
i__4790__auto___37244 = G__37245;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35490){
var map__35492 = p__35490;
var map__35492__$1 = (((((!((map__35492 == null))))?(((((map__35492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35492):map__35492);
var opts = map__35492__$1;
var statearr_35499_37256 = state;
(statearr_35499_37256[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35505_37257 = state;
(statearr_35505_37257[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35511_37258 = state;
(statearr_35511_37258[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35469){
var G__35471 = cljs.core.first(seq35469);
var seq35469__$1 = cljs.core.next(seq35469);
var G__35472 = cljs.core.first(seq35469__$1);
var seq35469__$2 = cljs.core.next(seq35469__$1);
var G__35473 = cljs.core.first(seq35469__$2);
var seq35469__$3 = cljs.core.next(seq35469__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35471,G__35472,G__35473,seq35469__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35569 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35570){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35570 = meta35570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35571,meta35570__$1){
var self__ = this;
var _35571__$1 = this;
return (new cljs.core.async.t_cljs$core$async35569(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35570__$1));
}));

(cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35571){
var self__ = this;
var _35571__$1 = this;
return self__.meta35570;
}));

(cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35569.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35570","meta35570",-1301930384,null)], null);
}));

(cljs.core.async.t_cljs$core$async35569.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35569");

(cljs.core.async.t_cljs$core$async35569.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35569");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35569.
 */
cljs.core.async.__GT_t_cljs$core$async35569 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35569(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35570){
return (new cljs.core.async.t_cljs$core$async35569(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35570));
});

}

return (new cljs.core.async.t_cljs$core$async35569(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35693){
var state_val_35694 = (state_35693[(1)]);
if((state_val_35694 === (7))){
var inst_35600 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35697_37294 = state_35693__$1;
(statearr_35697_37294[(2)] = inst_35600);

(statearr_35697_37294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (20))){
var inst_35612 = (state_35693[(7)]);
var state_35693__$1 = state_35693;
var statearr_35698_37298 = state_35693__$1;
(statearr_35698_37298[(2)] = inst_35612);

(statearr_35698_37298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (27))){
var state_35693__$1 = state_35693;
var statearr_35699_37299 = state_35693__$1;
(statearr_35699_37299[(2)] = null);

(statearr_35699_37299[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (1))){
var inst_35587 = (state_35693[(8)]);
var inst_35587__$1 = calc_state();
var inst_35589 = (inst_35587__$1 == null);
var inst_35590 = cljs.core.not(inst_35589);
var state_35693__$1 = (function (){var statearr_35701 = state_35693;
(statearr_35701[(8)] = inst_35587__$1);

return statearr_35701;
})();
if(inst_35590){
var statearr_35702_37301 = state_35693__$1;
(statearr_35702_37301[(1)] = (2));

} else {
var statearr_35703_37302 = state_35693__$1;
(statearr_35703_37302[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (24))){
var inst_35637 = (state_35693[(9)]);
var inst_35663 = (state_35693[(10)]);
var inst_35648 = (state_35693[(11)]);
var inst_35663__$1 = (inst_35637.cljs$core$IFn$_invoke$arity$1 ? inst_35637.cljs$core$IFn$_invoke$arity$1(inst_35648) : inst_35637.call(null,inst_35648));
var state_35693__$1 = (function (){var statearr_35705 = state_35693;
(statearr_35705[(10)] = inst_35663__$1);

return statearr_35705;
})();
if(cljs.core.truth_(inst_35663__$1)){
var statearr_35706_37307 = state_35693__$1;
(statearr_35706_37307[(1)] = (29));

} else {
var statearr_35707_37308 = state_35693__$1;
(statearr_35707_37308[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (4))){
var inst_35603 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35603)){
var statearr_35708_37309 = state_35693__$1;
(statearr_35708_37309[(1)] = (8));

} else {
var statearr_35709_37310 = state_35693__$1;
(statearr_35709_37310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (15))){
var inst_35630 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35630)){
var statearr_35711_37312 = state_35693__$1;
(statearr_35711_37312[(1)] = (19));

} else {
var statearr_35712_37313 = state_35693__$1;
(statearr_35712_37313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (21))){
var inst_35636 = (state_35693[(12)]);
var inst_35636__$1 = (state_35693[(2)]);
var inst_35637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35636__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35636__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35636__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35693__$1 = (function (){var statearr_35714 = state_35693;
(statearr_35714[(12)] = inst_35636__$1);

(statearr_35714[(13)] = inst_35638);

(statearr_35714[(9)] = inst_35637);

return statearr_35714;
})();
return cljs.core.async.ioc_alts_BANG_(state_35693__$1,(22),inst_35639);
} else {
if((state_val_35694 === (31))){
var inst_35671 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35671)){
var statearr_35715_37322 = state_35693__$1;
(statearr_35715_37322[(1)] = (32));

} else {
var statearr_35716_37323 = state_35693__$1;
(statearr_35716_37323[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (32))){
var inst_35647 = (state_35693[(14)]);
var state_35693__$1 = state_35693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35693__$1,(35),out,inst_35647);
} else {
if((state_val_35694 === (33))){
var inst_35636 = (state_35693[(12)]);
var inst_35612 = inst_35636;
var state_35693__$1 = (function (){var statearr_35718 = state_35693;
(statearr_35718[(7)] = inst_35612);

return statearr_35718;
})();
var statearr_35719_37328 = state_35693__$1;
(statearr_35719_37328[(2)] = null);

(statearr_35719_37328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (13))){
var inst_35612 = (state_35693[(7)]);
var inst_35619 = inst_35612.cljs$lang$protocol_mask$partition0$;
var inst_35620 = (inst_35619 & (64));
var inst_35621 = inst_35612.cljs$core$ISeq$;
var inst_35622 = (cljs.core.PROTOCOL_SENTINEL === inst_35621);
var inst_35623 = ((inst_35620) || (inst_35622));
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35623)){
var statearr_35725_37333 = state_35693__$1;
(statearr_35725_37333[(1)] = (16));

} else {
var statearr_35726_37334 = state_35693__$1;
(statearr_35726_37334[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (22))){
var inst_35647 = (state_35693[(14)]);
var inst_35648 = (state_35693[(11)]);
var inst_35646 = (state_35693[(2)]);
var inst_35647__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35646,(0),null);
var inst_35648__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35646,(1),null);
var inst_35650 = (inst_35647__$1 == null);
var inst_35651 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35648__$1,change);
var inst_35652 = ((inst_35650) || (inst_35651));
var state_35693__$1 = (function (){var statearr_35731 = state_35693;
(statearr_35731[(14)] = inst_35647__$1);

(statearr_35731[(11)] = inst_35648__$1);

return statearr_35731;
})();
if(cljs.core.truth_(inst_35652)){
var statearr_35732_37339 = state_35693__$1;
(statearr_35732_37339[(1)] = (23));

} else {
var statearr_35733_37341 = state_35693__$1;
(statearr_35733_37341[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (36))){
var inst_35636 = (state_35693[(12)]);
var inst_35612 = inst_35636;
var state_35693__$1 = (function (){var statearr_35736 = state_35693;
(statearr_35736[(7)] = inst_35612);

return statearr_35736;
})();
var statearr_35741_37345 = state_35693__$1;
(statearr_35741_37345[(2)] = null);

(statearr_35741_37345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (29))){
var inst_35663 = (state_35693[(10)]);
var state_35693__$1 = state_35693;
var statearr_35748_37347 = state_35693__$1;
(statearr_35748_37347[(2)] = inst_35663);

(statearr_35748_37347[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (6))){
var state_35693__$1 = state_35693;
var statearr_35750_37351 = state_35693__$1;
(statearr_35750_37351[(2)] = false);

(statearr_35750_37351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (28))){
var inst_35659 = (state_35693[(2)]);
var inst_35660 = calc_state();
var inst_35612 = inst_35660;
var state_35693__$1 = (function (){var statearr_35757 = state_35693;
(statearr_35757[(15)] = inst_35659);

(statearr_35757[(7)] = inst_35612);

return statearr_35757;
})();
var statearr_35758_37354 = state_35693__$1;
(statearr_35758_37354[(2)] = null);

(statearr_35758_37354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (25))){
var inst_35687 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35759_37357 = state_35693__$1;
(statearr_35759_37357[(2)] = inst_35687);

(statearr_35759_37357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (34))){
var inst_35685 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35760_37359 = state_35693__$1;
(statearr_35760_37359[(2)] = inst_35685);

(statearr_35760_37359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (17))){
var state_35693__$1 = state_35693;
var statearr_35761_37363 = state_35693__$1;
(statearr_35761_37363[(2)] = false);

(statearr_35761_37363[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (3))){
var state_35693__$1 = state_35693;
var statearr_35763_37364 = state_35693__$1;
(statearr_35763_37364[(2)] = false);

(statearr_35763_37364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (12))){
var inst_35689 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35693__$1,inst_35689);
} else {
if((state_val_35694 === (2))){
var inst_35587 = (state_35693[(8)]);
var inst_35592 = inst_35587.cljs$lang$protocol_mask$partition0$;
var inst_35593 = (inst_35592 & (64));
var inst_35594 = inst_35587.cljs$core$ISeq$;
var inst_35595 = (cljs.core.PROTOCOL_SENTINEL === inst_35594);
var inst_35596 = ((inst_35593) || (inst_35595));
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35596)){
var statearr_35767_37369 = state_35693__$1;
(statearr_35767_37369[(1)] = (5));

} else {
var statearr_35768_37370 = state_35693__$1;
(statearr_35768_37370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (23))){
var inst_35647 = (state_35693[(14)]);
var inst_35654 = (inst_35647 == null);
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35654)){
var statearr_35769_37371 = state_35693__$1;
(statearr_35769_37371[(1)] = (26));

} else {
var statearr_35770_37372 = state_35693__$1;
(statearr_35770_37372[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (35))){
var inst_35676 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35676)){
var statearr_35772_37375 = state_35693__$1;
(statearr_35772_37375[(1)] = (36));

} else {
var statearr_35773_37376 = state_35693__$1;
(statearr_35773_37376[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (19))){
var inst_35612 = (state_35693[(7)]);
var inst_35633 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35612);
var state_35693__$1 = state_35693;
var statearr_35775_37378 = state_35693__$1;
(statearr_35775_37378[(2)] = inst_35633);

(statearr_35775_37378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (11))){
var inst_35612 = (state_35693[(7)]);
var inst_35616 = (inst_35612 == null);
var inst_35617 = cljs.core.not(inst_35616);
var state_35693__$1 = state_35693;
if(inst_35617){
var statearr_35778_37381 = state_35693__$1;
(statearr_35778_37381[(1)] = (13));

} else {
var statearr_35779_37383 = state_35693__$1;
(statearr_35779_37383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (9))){
var inst_35587 = (state_35693[(8)]);
var state_35693__$1 = state_35693;
var statearr_35780_37384 = state_35693__$1;
(statearr_35780_37384[(2)] = inst_35587);

(statearr_35780_37384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (5))){
var state_35693__$1 = state_35693;
var statearr_35782_37385 = state_35693__$1;
(statearr_35782_37385[(2)] = true);

(statearr_35782_37385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (14))){
var state_35693__$1 = state_35693;
var statearr_35785_37386 = state_35693__$1;
(statearr_35785_37386[(2)] = false);

(statearr_35785_37386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (26))){
var inst_35648 = (state_35693[(11)]);
var inst_35656 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35648);
var state_35693__$1 = state_35693;
var statearr_35787_37387 = state_35693__$1;
(statearr_35787_37387[(2)] = inst_35656);

(statearr_35787_37387[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (16))){
var state_35693__$1 = state_35693;
var statearr_35788_37389 = state_35693__$1;
(statearr_35788_37389[(2)] = true);

(statearr_35788_37389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (38))){
var inst_35681 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35789_37392 = state_35693__$1;
(statearr_35789_37392[(2)] = inst_35681);

(statearr_35789_37392[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (30))){
var inst_35638 = (state_35693[(13)]);
var inst_35637 = (state_35693[(9)]);
var inst_35648 = (state_35693[(11)]);
var inst_35666 = cljs.core.empty_QMARK_(inst_35637);
var inst_35667 = (inst_35638.cljs$core$IFn$_invoke$arity$1 ? inst_35638.cljs$core$IFn$_invoke$arity$1(inst_35648) : inst_35638.call(null,inst_35648));
var inst_35668 = cljs.core.not(inst_35667);
var inst_35669 = ((inst_35666) && (inst_35668));
var state_35693__$1 = state_35693;
var statearr_35791_37399 = state_35693__$1;
(statearr_35791_37399[(2)] = inst_35669);

(statearr_35791_37399[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (10))){
var inst_35587 = (state_35693[(8)]);
var inst_35608 = (state_35693[(2)]);
var inst_35609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35608,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35608,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35608,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35612 = inst_35587;
var state_35693__$1 = (function (){var statearr_35792 = state_35693;
(statearr_35792[(16)] = inst_35610);

(statearr_35792[(7)] = inst_35612);

(statearr_35792[(17)] = inst_35609);

(statearr_35792[(18)] = inst_35611);

return statearr_35792;
})();
var statearr_35794_37404 = state_35693__$1;
(statearr_35794_37404[(2)] = null);

(statearr_35794_37404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (18))){
var inst_35627 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35797_37406 = state_35693__$1;
(statearr_35797_37406[(2)] = inst_35627);

(statearr_35797_37406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (37))){
var state_35693__$1 = state_35693;
var statearr_35800_37409 = state_35693__$1;
(statearr_35800_37409[(2)] = null);

(statearr_35800_37409[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (8))){
var inst_35587 = (state_35693[(8)]);
var inst_35605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35587);
var state_35693__$1 = state_35693;
var statearr_35802_37414 = state_35693__$1;
(statearr_35802_37414[(2)] = inst_35605);

(statearr_35802_37414[(1)] = (10));


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
var statearr_35806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35806[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35806[(1)] = (1));

return statearr_35806;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35693){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35693);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35807){if((e35807 instanceof Object)){
var ex__34210__auto__ = e35807;
var statearr_35808_37421 = state_35693;
(statearr_35808_37421[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35807;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37424 = state_35693;
state_35693 = G__37424;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35693){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35814 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35814[(6)] = c__34274__auto___37291);

return statearr_35814;
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
var G__35841 = arguments.length;
switch (G__35841) {
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
var G__35859 = arguments.length;
switch (G__35859) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35854_SHARP_){
if(cljs.core.truth_((p1__35854_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35854_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35854_SHARP_.call(null,topic)))){
return p1__35854_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35854_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35867 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35868){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35868 = meta35868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35869,meta35868__$1){
var self__ = this;
var _35869__$1 = this;
return (new cljs.core.async.t_cljs$core$async35867(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35868__$1));
}));

(cljs.core.async.t_cljs$core$async35867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35869){
var self__ = this;
var _35869__$1 = this;
return self__.meta35868;
}));

(cljs.core.async.t_cljs$core$async35867.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35867.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35867.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35867.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35867.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35867.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35867.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35868","meta35868",2059941867,null)], null);
}));

(cljs.core.async.t_cljs$core$async35867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35867");

(cljs.core.async.t_cljs$core$async35867.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35867.
 */
cljs.core.async.__GT_t_cljs$core$async35867 = (function cljs$core$async$__GT_t_cljs$core$async35867(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35868){
return (new cljs.core.async.t_cljs$core$async35867(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35868));
});

}

return (new cljs.core.async.t_cljs$core$async35867(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35961){
var state_val_35962 = (state_35961[(1)]);
if((state_val_35962 === (7))){
var inst_35957 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
var statearr_35965_37488 = state_35961__$1;
(statearr_35965_37488[(2)] = inst_35957);

(statearr_35965_37488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (20))){
var state_35961__$1 = state_35961;
var statearr_35966_37489 = state_35961__$1;
(statearr_35966_37489[(2)] = null);

(statearr_35966_37489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (1))){
var state_35961__$1 = state_35961;
var statearr_35968_37494 = state_35961__$1;
(statearr_35968_37494[(2)] = null);

(statearr_35968_37494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (24))){
var inst_35940 = (state_35961[(7)]);
var inst_35949 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35940);
var state_35961__$1 = state_35961;
var statearr_35970_37495 = state_35961__$1;
(statearr_35970_37495[(2)] = inst_35949);

(statearr_35970_37495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (4))){
var inst_35889 = (state_35961[(8)]);
var inst_35889__$1 = (state_35961[(2)]);
var inst_35890 = (inst_35889__$1 == null);
var state_35961__$1 = (function (){var statearr_35972 = state_35961;
(statearr_35972[(8)] = inst_35889__$1);

return statearr_35972;
})();
if(cljs.core.truth_(inst_35890)){
var statearr_35973_37499 = state_35961__$1;
(statearr_35973_37499[(1)] = (5));

} else {
var statearr_35975_37500 = state_35961__$1;
(statearr_35975_37500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (15))){
var inst_35934 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
var statearr_35976_37502 = state_35961__$1;
(statearr_35976_37502[(2)] = inst_35934);

(statearr_35976_37502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (21))){
var inst_35954 = (state_35961[(2)]);
var state_35961__$1 = (function (){var statearr_35977 = state_35961;
(statearr_35977[(9)] = inst_35954);

return statearr_35977;
})();
var statearr_35980_37503 = state_35961__$1;
(statearr_35980_37503[(2)] = null);

(statearr_35980_37503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (13))){
var inst_35916 = (state_35961[(10)]);
var inst_35918 = cljs.core.chunked_seq_QMARK_(inst_35916);
var state_35961__$1 = state_35961;
if(inst_35918){
var statearr_35982_37507 = state_35961__$1;
(statearr_35982_37507[(1)] = (16));

} else {
var statearr_35983_37509 = state_35961__$1;
(statearr_35983_37509[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (22))){
var inst_35946 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
if(cljs.core.truth_(inst_35946)){
var statearr_35984_37510 = state_35961__$1;
(statearr_35984_37510[(1)] = (23));

} else {
var statearr_35985_37511 = state_35961__$1;
(statearr_35985_37511[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (6))){
var inst_35942 = (state_35961[(11)]);
var inst_35940 = (state_35961[(7)]);
var inst_35889 = (state_35961[(8)]);
var inst_35940__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35889) : topic_fn.call(null,inst_35889));
var inst_35941 = cljs.core.deref(mults);
var inst_35942__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35941,inst_35940__$1);
var state_35961__$1 = (function (){var statearr_35990 = state_35961;
(statearr_35990[(11)] = inst_35942__$1);

(statearr_35990[(7)] = inst_35940__$1);

return statearr_35990;
})();
if(cljs.core.truth_(inst_35942__$1)){
var statearr_35992_37515 = state_35961__$1;
(statearr_35992_37515[(1)] = (19));

} else {
var statearr_35994_37516 = state_35961__$1;
(statearr_35994_37516[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (25))){
var inst_35951 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
var statearr_35996_37517 = state_35961__$1;
(statearr_35996_37517[(2)] = inst_35951);

(statearr_35996_37517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (17))){
var inst_35916 = (state_35961[(10)]);
var inst_35925 = cljs.core.first(inst_35916);
var inst_35926 = cljs.core.async.muxch_STAR_(inst_35925);
var inst_35927 = cljs.core.async.close_BANG_(inst_35926);
var inst_35928 = cljs.core.next(inst_35916);
var inst_35899 = inst_35928;
var inst_35900 = null;
var inst_35901 = (0);
var inst_35902 = (0);
var state_35961__$1 = (function (){var statearr_36001 = state_35961;
(statearr_36001[(12)] = inst_35901);

(statearr_36001[(13)] = inst_35900);

(statearr_36001[(14)] = inst_35927);

(statearr_36001[(15)] = inst_35899);

(statearr_36001[(16)] = inst_35902);

return statearr_36001;
})();
var statearr_36002_37524 = state_35961__$1;
(statearr_36002_37524[(2)] = null);

(statearr_36002_37524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (3))){
var inst_35959 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35961__$1,inst_35959);
} else {
if((state_val_35962 === (12))){
var inst_35936 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
var statearr_36007_37526 = state_35961__$1;
(statearr_36007_37526[(2)] = inst_35936);

(statearr_36007_37526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (2))){
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35961__$1,(4),ch);
} else {
if((state_val_35962 === (23))){
var state_35961__$1 = state_35961;
var statearr_36009_37532 = state_35961__$1;
(statearr_36009_37532[(2)] = null);

(statearr_36009_37532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (19))){
var inst_35942 = (state_35961[(11)]);
var inst_35889 = (state_35961[(8)]);
var inst_35944 = cljs.core.async.muxch_STAR_(inst_35942);
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35961__$1,(22),inst_35944,inst_35889);
} else {
if((state_val_35962 === (11))){
var inst_35916 = (state_35961[(10)]);
var inst_35899 = (state_35961[(15)]);
var inst_35916__$1 = cljs.core.seq(inst_35899);
var state_35961__$1 = (function (){var statearr_36014 = state_35961;
(statearr_36014[(10)] = inst_35916__$1);

return statearr_36014;
})();
if(inst_35916__$1){
var statearr_36016_37541 = state_35961__$1;
(statearr_36016_37541[(1)] = (13));

} else {
var statearr_36018_37542 = state_35961__$1;
(statearr_36018_37542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (9))){
var inst_35938 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
var statearr_36020_37544 = state_35961__$1;
(statearr_36020_37544[(2)] = inst_35938);

(statearr_36020_37544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (5))){
var inst_35896 = cljs.core.deref(mults);
var inst_35897 = cljs.core.vals(inst_35896);
var inst_35898 = cljs.core.seq(inst_35897);
var inst_35899 = inst_35898;
var inst_35900 = null;
var inst_35901 = (0);
var inst_35902 = (0);
var state_35961__$1 = (function (){var statearr_36021 = state_35961;
(statearr_36021[(12)] = inst_35901);

(statearr_36021[(13)] = inst_35900);

(statearr_36021[(15)] = inst_35899);

(statearr_36021[(16)] = inst_35902);

return statearr_36021;
})();
var statearr_36022_37550 = state_35961__$1;
(statearr_36022_37550[(2)] = null);

(statearr_36022_37550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (14))){
var state_35961__$1 = state_35961;
var statearr_36026_37556 = state_35961__$1;
(statearr_36026_37556[(2)] = null);

(statearr_36026_37556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (16))){
var inst_35916 = (state_35961[(10)]);
var inst_35920 = cljs.core.chunk_first(inst_35916);
var inst_35921 = cljs.core.chunk_rest(inst_35916);
var inst_35922 = cljs.core.count(inst_35920);
var inst_35899 = inst_35921;
var inst_35900 = inst_35920;
var inst_35901 = inst_35922;
var inst_35902 = (0);
var state_35961__$1 = (function (){var statearr_36030 = state_35961;
(statearr_36030[(12)] = inst_35901);

(statearr_36030[(13)] = inst_35900);

(statearr_36030[(15)] = inst_35899);

(statearr_36030[(16)] = inst_35902);

return statearr_36030;
})();
var statearr_36032_37561 = state_35961__$1;
(statearr_36032_37561[(2)] = null);

(statearr_36032_37561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (10))){
var inst_35901 = (state_35961[(12)]);
var inst_35900 = (state_35961[(13)]);
var inst_35899 = (state_35961[(15)]);
var inst_35902 = (state_35961[(16)]);
var inst_35908 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35900,inst_35902);
var inst_35910 = cljs.core.async.muxch_STAR_(inst_35908);
var inst_35911 = cljs.core.async.close_BANG_(inst_35910);
var inst_35912 = (inst_35902 + (1));
var tmp36023 = inst_35901;
var tmp36024 = inst_35900;
var tmp36025 = inst_35899;
var inst_35899__$1 = tmp36025;
var inst_35900__$1 = tmp36024;
var inst_35901__$1 = tmp36023;
var inst_35902__$1 = inst_35912;
var state_35961__$1 = (function (){var statearr_36035 = state_35961;
(statearr_36035[(12)] = inst_35901__$1);

(statearr_36035[(13)] = inst_35900__$1);

(statearr_36035[(17)] = inst_35911);

(statearr_36035[(15)] = inst_35899__$1);

(statearr_36035[(16)] = inst_35902__$1);

return statearr_36035;
})();
var statearr_36036_37572 = state_35961__$1;
(statearr_36036_37572[(2)] = null);

(statearr_36036_37572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (18))){
var inst_35931 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
var statearr_36037_37575 = state_35961__$1;
(statearr_36037_37575[(2)] = inst_35931);

(statearr_36037_37575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (8))){
var inst_35901 = (state_35961[(12)]);
var inst_35902 = (state_35961[(16)]);
var inst_35905 = (inst_35902 < inst_35901);
var inst_35906 = inst_35905;
var state_35961__$1 = state_35961;
if(cljs.core.truth_(inst_35906)){
var statearr_36041_37578 = state_35961__$1;
(statearr_36041_37578[(1)] = (10));

} else {
var statearr_36043_37579 = state_35961__$1;
(statearr_36043_37579[(1)] = (11));

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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35961){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35961);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36045){if((e36045 instanceof Object)){
var ex__34210__auto__ = e36045;
var statearr_36046_37587 = state_35961;
(statearr_36046_37587[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37589 = state_35961;
state_35961 = G__37589;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36047 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36047[(6)] = c__34274__auto___37486);

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
var G__36049 = arguments.length;
switch (G__36049) {
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
var G__36052 = arguments.length;
switch (G__36052) {
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
var G__36056 = arguments.length;
switch (G__36056) {
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
var c__34274__auto___37617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36103){
var state_val_36104 = (state_36103[(1)]);
if((state_val_36104 === (7))){
var state_36103__$1 = state_36103;
var statearr_36109_37623 = state_36103__$1;
(statearr_36109_37623[(2)] = null);

(statearr_36109_37623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (1))){
var state_36103__$1 = state_36103;
var statearr_36112_37625 = state_36103__$1;
(statearr_36112_37625[(2)] = null);

(statearr_36112_37625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (4))){
var inst_36066 = (state_36103[(7)]);
var inst_36068 = (inst_36066 < cnt);
var state_36103__$1 = state_36103;
if(cljs.core.truth_(inst_36068)){
var statearr_36114_37627 = state_36103__$1;
(statearr_36114_37627[(1)] = (6));

} else {
var statearr_36115_37629 = state_36103__$1;
(statearr_36115_37629[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (15))){
var inst_36099 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
var statearr_36116_37630 = state_36103__$1;
(statearr_36116_37630[(2)] = inst_36099);

(statearr_36116_37630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (13))){
var inst_36092 = cljs.core.async.close_BANG_(out);
var state_36103__$1 = state_36103;
var statearr_36117_37636 = state_36103__$1;
(statearr_36117_37636[(2)] = inst_36092);

(statearr_36117_37636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (6))){
var state_36103__$1 = state_36103;
var statearr_36119_37641 = state_36103__$1;
(statearr_36119_37641[(2)] = null);

(statearr_36119_37641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (3))){
var inst_36101 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36103__$1,inst_36101);
} else {
if((state_val_36104 === (12))){
var inst_36089 = (state_36103[(8)]);
var inst_36089__$1 = (state_36103[(2)]);
var inst_36090 = cljs.core.some(cljs.core.nil_QMARK_,inst_36089__$1);
var state_36103__$1 = (function (){var statearr_36124 = state_36103;
(statearr_36124[(8)] = inst_36089__$1);

return statearr_36124;
})();
if(cljs.core.truth_(inst_36090)){
var statearr_36125_37646 = state_36103__$1;
(statearr_36125_37646[(1)] = (13));

} else {
var statearr_36126_37647 = state_36103__$1;
(statearr_36126_37647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (2))){
var inst_36065 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36066 = (0);
var state_36103__$1 = (function (){var statearr_36127 = state_36103;
(statearr_36127[(7)] = inst_36066);

(statearr_36127[(9)] = inst_36065);

return statearr_36127;
})();
var statearr_36128_37655 = state_36103__$1;
(statearr_36128_37655[(2)] = null);

(statearr_36128_37655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (11))){
var inst_36066 = (state_36103[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36103,(10),Object,null,(9));
var inst_36076 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36066) : chs__$1.call(null,inst_36066));
var inst_36077 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36066) : done.call(null,inst_36066));
var inst_36078 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36076,inst_36077);
var state_36103__$1 = state_36103;
var statearr_36129_37658 = state_36103__$1;
(statearr_36129_37658[(2)] = inst_36078);


cljs.core.async.impl.ioc_helpers.process_exception(state_36103__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (9))){
var inst_36066 = (state_36103[(7)]);
var inst_36080 = (state_36103[(2)]);
var inst_36081 = (inst_36066 + (1));
var inst_36066__$1 = inst_36081;
var state_36103__$1 = (function (){var statearr_36130 = state_36103;
(statearr_36130[(7)] = inst_36066__$1);

(statearr_36130[(10)] = inst_36080);

return statearr_36130;
})();
var statearr_36131_37668 = state_36103__$1;
(statearr_36131_37668[(2)] = null);

(statearr_36131_37668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (5))){
var inst_36087 = (state_36103[(2)]);
var state_36103__$1 = (function (){var statearr_36132 = state_36103;
(statearr_36132[(11)] = inst_36087);

return statearr_36132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36103__$1,(12),dchan);
} else {
if((state_val_36104 === (14))){
var inst_36089 = (state_36103[(8)]);
var inst_36094 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36089);
var state_36103__$1 = state_36103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36103__$1,(16),out,inst_36094);
} else {
if((state_val_36104 === (16))){
var inst_36096 = (state_36103[(2)]);
var state_36103__$1 = (function (){var statearr_36133 = state_36103;
(statearr_36133[(12)] = inst_36096);

return statearr_36133;
})();
var statearr_36134_37674 = state_36103__$1;
(statearr_36134_37674[(2)] = null);

(statearr_36134_37674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (10))){
var inst_36070 = (state_36103[(2)]);
var inst_36071 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36103__$1 = (function (){var statearr_36135 = state_36103;
(statearr_36135[(13)] = inst_36070);

return statearr_36135;
})();
var statearr_36136_37682 = state_36103__$1;
(statearr_36136_37682[(2)] = inst_36071);


cljs.core.async.impl.ioc_helpers.process_exception(state_36103__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (8))){
var inst_36085 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
var statearr_36137_37684 = state_36103__$1;
(statearr_36137_37684[(2)] = inst_36085);

(statearr_36137_37684[(1)] = (5));


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
var statearr_36138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36138[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36138[(1)] = (1));

return statearr_36138;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36103){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36103);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36143){if((e36143 instanceof Object)){
var ex__34210__auto__ = e36143;
var statearr_36144_37695 = state_36103;
(statearr_36144_37695[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37697 = state_36103;
state_36103 = G__37697;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36146 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36146[(6)] = c__34274__auto___37617);

return statearr_36146;
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
var G__36151 = arguments.length;
switch (G__36151) {
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
var c__34274__auto___37709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36183){
var state_val_36184 = (state_36183[(1)]);
if((state_val_36184 === (7))){
var inst_36162 = (state_36183[(7)]);
var inst_36163 = (state_36183[(8)]);
var inst_36162__$1 = (state_36183[(2)]);
var inst_36163__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36162__$1,(0),null);
var inst_36164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36162__$1,(1),null);
var inst_36165 = (inst_36163__$1 == null);
var state_36183__$1 = (function (){var statearr_36185 = state_36183;
(statearr_36185[(7)] = inst_36162__$1);

(statearr_36185[(9)] = inst_36164);

(statearr_36185[(8)] = inst_36163__$1);

return statearr_36185;
})();
if(cljs.core.truth_(inst_36165)){
var statearr_36186_37720 = state_36183__$1;
(statearr_36186_37720[(1)] = (8));

} else {
var statearr_36187_37721 = state_36183__$1;
(statearr_36187_37721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (1))){
var inst_36152 = cljs.core.vec(chs);
var inst_36153 = inst_36152;
var state_36183__$1 = (function (){var statearr_36188 = state_36183;
(statearr_36188[(10)] = inst_36153);

return statearr_36188;
})();
var statearr_36189_37724 = state_36183__$1;
(statearr_36189_37724[(2)] = null);

(statearr_36189_37724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (4))){
var inst_36153 = (state_36183[(10)]);
var state_36183__$1 = state_36183;
return cljs.core.async.ioc_alts_BANG_(state_36183__$1,(7),inst_36153);
} else {
if((state_val_36184 === (6))){
var inst_36179 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
var statearr_36190_37727 = state_36183__$1;
(statearr_36190_37727[(2)] = inst_36179);

(statearr_36190_37727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (3))){
var inst_36181 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36183__$1,inst_36181);
} else {
if((state_val_36184 === (2))){
var inst_36153 = (state_36183[(10)]);
var inst_36155 = cljs.core.count(inst_36153);
var inst_36156 = (inst_36155 > (0));
var state_36183__$1 = state_36183;
if(cljs.core.truth_(inst_36156)){
var statearr_36192_37736 = state_36183__$1;
(statearr_36192_37736[(1)] = (4));

} else {
var statearr_36193_37737 = state_36183__$1;
(statearr_36193_37737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (11))){
var inst_36153 = (state_36183[(10)]);
var inst_36172 = (state_36183[(2)]);
var tmp36191 = inst_36153;
var inst_36153__$1 = tmp36191;
var state_36183__$1 = (function (){var statearr_36194 = state_36183;
(statearr_36194[(11)] = inst_36172);

(statearr_36194[(10)] = inst_36153__$1);

return statearr_36194;
})();
var statearr_36195_37741 = state_36183__$1;
(statearr_36195_37741[(2)] = null);

(statearr_36195_37741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (9))){
var inst_36163 = (state_36183[(8)]);
var state_36183__$1 = state_36183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36183__$1,(11),out,inst_36163);
} else {
if((state_val_36184 === (5))){
var inst_36177 = cljs.core.async.close_BANG_(out);
var state_36183__$1 = state_36183;
var statearr_36202_37751 = state_36183__$1;
(statearr_36202_37751[(2)] = inst_36177);

(statearr_36202_37751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (10))){
var inst_36175 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
var statearr_36204_37752 = state_36183__$1;
(statearr_36204_37752[(2)] = inst_36175);

(statearr_36204_37752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (8))){
var inst_36162 = (state_36183[(7)]);
var inst_36153 = (state_36183[(10)]);
var inst_36164 = (state_36183[(9)]);
var inst_36163 = (state_36183[(8)]);
var inst_36167 = (function (){var cs = inst_36153;
var vec__36158 = inst_36162;
var v = inst_36163;
var c = inst_36164;
return (function (p1__36149_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36149_SHARP_);
});
})();
var inst_36168 = cljs.core.filterv(inst_36167,inst_36153);
var inst_36153__$1 = inst_36168;
var state_36183__$1 = (function (){var statearr_36205 = state_36183;
(statearr_36205[(10)] = inst_36153__$1);

return statearr_36205;
})();
var statearr_36206_37762 = state_36183__$1;
(statearr_36206_37762[(2)] = null);

(statearr_36206_37762[(1)] = (2));


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
var statearr_36207 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36207[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36207[(1)] = (1));

return statearr_36207;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36183){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36183);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36220){if((e36220 instanceof Object)){
var ex__34210__auto__ = e36220;
var statearr_36222_37765 = state_36183;
(statearr_36222_37765[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37772 = state_36183;
state_36183 = G__37772;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36233 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36233[(6)] = c__34274__auto___37709);

return statearr_36233;
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
var G__36238 = arguments.length;
switch (G__36238) {
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
var c__34274__auto___37779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36265){
var state_val_36266 = (state_36265[(1)]);
if((state_val_36266 === (7))){
var inst_36247 = (state_36265[(7)]);
var inst_36247__$1 = (state_36265[(2)]);
var inst_36248 = (inst_36247__$1 == null);
var inst_36249 = cljs.core.not(inst_36248);
var state_36265__$1 = (function (){var statearr_36268 = state_36265;
(statearr_36268[(7)] = inst_36247__$1);

return statearr_36268;
})();
if(inst_36249){
var statearr_36269_37782 = state_36265__$1;
(statearr_36269_37782[(1)] = (8));

} else {
var statearr_36270_37783 = state_36265__$1;
(statearr_36270_37783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (1))){
var inst_36241 = (0);
var state_36265__$1 = (function (){var statearr_36271 = state_36265;
(statearr_36271[(8)] = inst_36241);

return statearr_36271;
})();
var statearr_36272_37784 = state_36265__$1;
(statearr_36272_37784[(2)] = null);

(statearr_36272_37784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (4))){
var state_36265__$1 = state_36265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36265__$1,(7),ch);
} else {
if((state_val_36266 === (6))){
var inst_36260 = (state_36265[(2)]);
var state_36265__$1 = state_36265;
var statearr_36275_37786 = state_36265__$1;
(statearr_36275_37786[(2)] = inst_36260);

(statearr_36275_37786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (3))){
var inst_36262 = (state_36265[(2)]);
var inst_36263 = cljs.core.async.close_BANG_(out);
var state_36265__$1 = (function (){var statearr_36276 = state_36265;
(statearr_36276[(9)] = inst_36262);

return statearr_36276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36265__$1,inst_36263);
} else {
if((state_val_36266 === (2))){
var inst_36241 = (state_36265[(8)]);
var inst_36243 = (inst_36241 < n);
var state_36265__$1 = state_36265;
if(cljs.core.truth_(inst_36243)){
var statearr_36278_37788 = state_36265__$1;
(statearr_36278_37788[(1)] = (4));

} else {
var statearr_36280_37789 = state_36265__$1;
(statearr_36280_37789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (11))){
var inst_36241 = (state_36265[(8)]);
var inst_36252 = (state_36265[(2)]);
var inst_36253 = (inst_36241 + (1));
var inst_36241__$1 = inst_36253;
var state_36265__$1 = (function (){var statearr_36283 = state_36265;
(statearr_36283[(10)] = inst_36252);

(statearr_36283[(8)] = inst_36241__$1);

return statearr_36283;
})();
var statearr_36284_37794 = state_36265__$1;
(statearr_36284_37794[(2)] = null);

(statearr_36284_37794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (9))){
var state_36265__$1 = state_36265;
var statearr_36285_37795 = state_36265__$1;
(statearr_36285_37795[(2)] = null);

(statearr_36285_37795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (5))){
var state_36265__$1 = state_36265;
var statearr_36287_37796 = state_36265__$1;
(statearr_36287_37796[(2)] = null);

(statearr_36287_37796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (10))){
var inst_36257 = (state_36265[(2)]);
var state_36265__$1 = state_36265;
var statearr_36295_37800 = state_36265__$1;
(statearr_36295_37800[(2)] = inst_36257);

(statearr_36295_37800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (8))){
var inst_36247 = (state_36265[(7)]);
var state_36265__$1 = state_36265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36265__$1,(11),out,inst_36247);
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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36265){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36265);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36298){if((e36298 instanceof Object)){
var ex__34210__auto__ = e36298;
var statearr_36300_37803 = state_36265;
(statearr_36300_37803[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37804 = state_36265;
state_36265 = G__37804;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36302 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36302[(6)] = c__34274__auto___37779);

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
var G__36325 = (((p1__36304_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36304_SHARP_) : self__.f.call(null,p1__36304_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36325) : f1.call(null,G__36325));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36337 = (function (f,ch,meta36338){
this.f = f;
this.ch = ch;
this.meta36338 = meta36338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36339,meta36338__$1){
var self__ = this;
var _36339__$1 = this;
return (new cljs.core.async.t_cljs$core$async36337(self__.f,self__.ch,meta36338__$1));
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36339){
var self__ = this;
var _36339__$1 = this;
return self__.meta36338;
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36338","meta36338",-1451819658,null)], null);
}));

(cljs.core.async.t_cljs$core$async36337.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36337");

(cljs.core.async.t_cljs$core$async36337.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36337");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36337.
 */
cljs.core.async.__GT_t_cljs$core$async36337 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36337(f__$1,ch__$1,meta36338){
return (new cljs.core.async.t_cljs$core$async36337(f__$1,ch__$1,meta36338));
});

}

return (new cljs.core.async.t_cljs$core$async36337(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36353 = (function (p,ch,meta36354){
this.p = p;
this.ch = ch;
this.meta36354 = meta36354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36355,meta36354__$1){
var self__ = this;
var _36355__$1 = this;
return (new cljs.core.async.t_cljs$core$async36353(self__.p,self__.ch,meta36354__$1));
}));

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36355){
var self__ = this;
var _36355__$1 = this;
return self__.meta36354;
}));

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36354","meta36354",1346918055,null)], null);
}));

(cljs.core.async.t_cljs$core$async36353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36353");

(cljs.core.async.t_cljs$core$async36353.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36353.
 */
cljs.core.async.__GT_t_cljs$core$async36353 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36353(p__$1,ch__$1,meta36354){
return (new cljs.core.async.t_cljs$core$async36353(p__$1,ch__$1,meta36354));
});

}

return (new cljs.core.async.t_cljs$core$async36353(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36368 = arguments.length;
switch (G__36368) {
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
var c__34274__auto___37873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36398){
var state_val_36399 = (state_36398[(1)]);
if((state_val_36399 === (7))){
var inst_36394 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
var statearr_36402_37879 = state_36398__$1;
(statearr_36402_37879[(2)] = inst_36394);

(statearr_36402_37879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (1))){
var state_36398__$1 = state_36398;
var statearr_36403_37882 = state_36398__$1;
(statearr_36403_37882[(2)] = null);

(statearr_36403_37882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (4))){
var inst_36379 = (state_36398[(7)]);
var inst_36379__$1 = (state_36398[(2)]);
var inst_36381 = (inst_36379__$1 == null);
var state_36398__$1 = (function (){var statearr_36404 = state_36398;
(statearr_36404[(7)] = inst_36379__$1);

return statearr_36404;
})();
if(cljs.core.truth_(inst_36381)){
var statearr_36407_37884 = state_36398__$1;
(statearr_36407_37884[(1)] = (5));

} else {
var statearr_36409_37886 = state_36398__$1;
(statearr_36409_37886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (6))){
var inst_36379 = (state_36398[(7)]);
var inst_36385 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36379) : p.call(null,inst_36379));
var state_36398__$1 = state_36398;
if(cljs.core.truth_(inst_36385)){
var statearr_36410_37891 = state_36398__$1;
(statearr_36410_37891[(1)] = (8));

} else {
var statearr_36411_37892 = state_36398__$1;
(statearr_36411_37892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (3))){
var inst_36396 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36398__$1,inst_36396);
} else {
if((state_val_36399 === (2))){
var state_36398__$1 = state_36398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36398__$1,(4),ch);
} else {
if((state_val_36399 === (11))){
var inst_36388 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
var statearr_36413_37897 = state_36398__$1;
(statearr_36413_37897[(2)] = inst_36388);

(statearr_36413_37897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (9))){
var state_36398__$1 = state_36398;
var statearr_36414_37898 = state_36398__$1;
(statearr_36414_37898[(2)] = null);

(statearr_36414_37898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (5))){
var inst_36383 = cljs.core.async.close_BANG_(out);
var state_36398__$1 = state_36398;
var statearr_36415_37900 = state_36398__$1;
(statearr_36415_37900[(2)] = inst_36383);

(statearr_36415_37900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (10))){
var inst_36391 = (state_36398[(2)]);
var state_36398__$1 = (function (){var statearr_36416 = state_36398;
(statearr_36416[(8)] = inst_36391);

return statearr_36416;
})();
var statearr_36417_37902 = state_36398__$1;
(statearr_36417_37902[(2)] = null);

(statearr_36417_37902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (8))){
var inst_36379 = (state_36398[(7)]);
var state_36398__$1 = state_36398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36398__$1,(11),out,inst_36379);
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
var statearr_36418 = [null,null,null,null,null,null,null,null,null];
(statearr_36418[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36418[(1)] = (1));

return statearr_36418;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36398){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36398);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36421){if((e36421 instanceof Object)){
var ex__34210__auto__ = e36421;
var statearr_36422_37910 = state_36398;
(statearr_36422_37910[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36421;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37911 = state_36398;
state_36398 = G__37911;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36425 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36425[(6)] = c__34274__auto___37873);

return statearr_36425;
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
var G__36435 = arguments.length;
switch (G__36435) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36504){
var state_val_36505 = (state_36504[(1)]);
if((state_val_36505 === (7))){
var inst_36500 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36506_37923 = state_36504__$1;
(statearr_36506_37923[(2)] = inst_36500);

(statearr_36506_37923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (20))){
var inst_36470 = (state_36504[(7)]);
var inst_36481 = (state_36504[(2)]);
var inst_36482 = cljs.core.next(inst_36470);
var inst_36456 = inst_36482;
var inst_36457 = null;
var inst_36458 = (0);
var inst_36459 = (0);
var state_36504__$1 = (function (){var statearr_36513 = state_36504;
(statearr_36513[(8)] = inst_36481);

(statearr_36513[(9)] = inst_36456);

(statearr_36513[(10)] = inst_36459);

(statearr_36513[(11)] = inst_36458);

(statearr_36513[(12)] = inst_36457);

return statearr_36513;
})();
var statearr_36514_37932 = state_36504__$1;
(statearr_36514_37932[(2)] = null);

(statearr_36514_37932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (1))){
var state_36504__$1 = state_36504;
var statearr_36515_37934 = state_36504__$1;
(statearr_36515_37934[(2)] = null);

(statearr_36515_37934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (4))){
var inst_36445 = (state_36504[(13)]);
var inst_36445__$1 = (state_36504[(2)]);
var inst_36446 = (inst_36445__$1 == null);
var state_36504__$1 = (function (){var statearr_36517 = state_36504;
(statearr_36517[(13)] = inst_36445__$1);

return statearr_36517;
})();
if(cljs.core.truth_(inst_36446)){
var statearr_36520_37939 = state_36504__$1;
(statearr_36520_37939[(1)] = (5));

} else {
var statearr_36524_37940 = state_36504__$1;
(statearr_36524_37940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (15))){
var state_36504__$1 = state_36504;
var statearr_36529_37942 = state_36504__$1;
(statearr_36529_37942[(2)] = null);

(statearr_36529_37942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (21))){
var state_36504__$1 = state_36504;
var statearr_36531_37946 = state_36504__$1;
(statearr_36531_37946[(2)] = null);

(statearr_36531_37946[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (13))){
var inst_36456 = (state_36504[(9)]);
var inst_36459 = (state_36504[(10)]);
var inst_36458 = (state_36504[(11)]);
var inst_36457 = (state_36504[(12)]);
var inst_36466 = (state_36504[(2)]);
var inst_36467 = (inst_36459 + (1));
var tmp36525 = inst_36456;
var tmp36526 = inst_36458;
var tmp36527 = inst_36457;
var inst_36456__$1 = tmp36525;
var inst_36457__$1 = tmp36527;
var inst_36458__$1 = tmp36526;
var inst_36459__$1 = inst_36467;
var state_36504__$1 = (function (){var statearr_36534 = state_36504;
(statearr_36534[(14)] = inst_36466);

(statearr_36534[(9)] = inst_36456__$1);

(statearr_36534[(10)] = inst_36459__$1);

(statearr_36534[(11)] = inst_36458__$1);

(statearr_36534[(12)] = inst_36457__$1);

return statearr_36534;
})();
var statearr_36535_37952 = state_36504__$1;
(statearr_36535_37952[(2)] = null);

(statearr_36535_37952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (22))){
var state_36504__$1 = state_36504;
var statearr_36536_37956 = state_36504__$1;
(statearr_36536_37956[(2)] = null);

(statearr_36536_37956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (6))){
var inst_36445 = (state_36504[(13)]);
var inst_36454 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36445) : f.call(null,inst_36445));
var inst_36455 = cljs.core.seq(inst_36454);
var inst_36456 = inst_36455;
var inst_36457 = null;
var inst_36458 = (0);
var inst_36459 = (0);
var state_36504__$1 = (function (){var statearr_36539 = state_36504;
(statearr_36539[(9)] = inst_36456);

(statearr_36539[(10)] = inst_36459);

(statearr_36539[(11)] = inst_36458);

(statearr_36539[(12)] = inst_36457);

return statearr_36539;
})();
var statearr_36540_37962 = state_36504__$1;
(statearr_36540_37962[(2)] = null);

(statearr_36540_37962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (17))){
var inst_36470 = (state_36504[(7)]);
var inst_36474 = cljs.core.chunk_first(inst_36470);
var inst_36475 = cljs.core.chunk_rest(inst_36470);
var inst_36476 = cljs.core.count(inst_36474);
var inst_36456 = inst_36475;
var inst_36457 = inst_36474;
var inst_36458 = inst_36476;
var inst_36459 = (0);
var state_36504__$1 = (function (){var statearr_36543 = state_36504;
(statearr_36543[(9)] = inst_36456);

(statearr_36543[(10)] = inst_36459);

(statearr_36543[(11)] = inst_36458);

(statearr_36543[(12)] = inst_36457);

return statearr_36543;
})();
var statearr_36545_37966 = state_36504__$1;
(statearr_36545_37966[(2)] = null);

(statearr_36545_37966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (3))){
var inst_36502 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36504__$1,inst_36502);
} else {
if((state_val_36505 === (12))){
var inst_36490 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36548_37968 = state_36504__$1;
(statearr_36548_37968[(2)] = inst_36490);

(statearr_36548_37968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (2))){
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36504__$1,(4),in$);
} else {
if((state_val_36505 === (23))){
var inst_36498 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36549_37970 = state_36504__$1;
(statearr_36549_37970[(2)] = inst_36498);

(statearr_36549_37970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (19))){
var inst_36485 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36553_37973 = state_36504__$1;
(statearr_36553_37973[(2)] = inst_36485);

(statearr_36553_37973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (11))){
var inst_36456 = (state_36504[(9)]);
var inst_36470 = (state_36504[(7)]);
var inst_36470__$1 = cljs.core.seq(inst_36456);
var state_36504__$1 = (function (){var statearr_36555 = state_36504;
(statearr_36555[(7)] = inst_36470__$1);

return statearr_36555;
})();
if(inst_36470__$1){
var statearr_36556_37976 = state_36504__$1;
(statearr_36556_37976[(1)] = (14));

} else {
var statearr_36557_37977 = state_36504__$1;
(statearr_36557_37977[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (9))){
var inst_36492 = (state_36504[(2)]);
var inst_36493 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36504__$1 = (function (){var statearr_36558 = state_36504;
(statearr_36558[(15)] = inst_36492);

return statearr_36558;
})();
if(cljs.core.truth_(inst_36493)){
var statearr_36559_37981 = state_36504__$1;
(statearr_36559_37981[(1)] = (21));

} else {
var statearr_36561_37984 = state_36504__$1;
(statearr_36561_37984[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (5))){
var inst_36448 = cljs.core.async.close_BANG_(out);
var state_36504__$1 = state_36504;
var statearr_36562_37985 = state_36504__$1;
(statearr_36562_37985[(2)] = inst_36448);

(statearr_36562_37985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (14))){
var inst_36470 = (state_36504[(7)]);
var inst_36472 = cljs.core.chunked_seq_QMARK_(inst_36470);
var state_36504__$1 = state_36504;
if(inst_36472){
var statearr_36563_37987 = state_36504__$1;
(statearr_36563_37987[(1)] = (17));

} else {
var statearr_36564_37988 = state_36504__$1;
(statearr_36564_37988[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (16))){
var inst_36488 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36566_37991 = state_36504__$1;
(statearr_36566_37991[(2)] = inst_36488);

(statearr_36566_37991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (10))){
var inst_36459 = (state_36504[(10)]);
var inst_36457 = (state_36504[(12)]);
var inst_36464 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36457,inst_36459);
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36504__$1,(13),out,inst_36464);
} else {
if((state_val_36505 === (18))){
var inst_36470 = (state_36504[(7)]);
var inst_36479 = cljs.core.first(inst_36470);
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36504__$1,(20),out,inst_36479);
} else {
if((state_val_36505 === (8))){
var inst_36459 = (state_36504[(10)]);
var inst_36458 = (state_36504[(11)]);
var inst_36461 = (inst_36459 < inst_36458);
var inst_36462 = inst_36461;
var state_36504__$1 = state_36504;
if(cljs.core.truth_(inst_36462)){
var statearr_36571_37995 = state_36504__$1;
(statearr_36571_37995[(1)] = (10));

} else {
var statearr_36572_37998 = state_36504__$1;
(statearr_36572_37998[(1)] = (11));

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
var statearr_36574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36574[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36574[(1)] = (1));

return statearr_36574;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36504){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36504);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36575){if((e36575 instanceof Object)){
var ex__34210__auto__ = e36575;
var statearr_36576_38002 = state_36504;
(statearr_36576_38002[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36575;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38009 = state_36504;
state_36504 = G__38009;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36504){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36578 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36578[(6)] = c__34274__auto__);

return statearr_36578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36581 = arguments.length;
switch (G__36581) {
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
var G__36586 = arguments.length;
switch (G__36586) {
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
var G__36590 = arguments.length;
switch (G__36590) {
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
var c__34274__auto___38029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36616){
var state_val_36617 = (state_36616[(1)]);
if((state_val_36617 === (7))){
var inst_36611 = (state_36616[(2)]);
var state_36616__$1 = state_36616;
var statearr_36619_38031 = state_36616__$1;
(statearr_36619_38031[(2)] = inst_36611);

(statearr_36619_38031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36617 === (1))){
var inst_36592 = null;
var state_36616__$1 = (function (){var statearr_36620 = state_36616;
(statearr_36620[(7)] = inst_36592);

return statearr_36620;
})();
var statearr_36621_38033 = state_36616__$1;
(statearr_36621_38033[(2)] = null);

(statearr_36621_38033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36617 === (4))){
var inst_36596 = (state_36616[(8)]);
var inst_36596__$1 = (state_36616[(2)]);
var inst_36597 = (inst_36596__$1 == null);
var inst_36598 = cljs.core.not(inst_36597);
var state_36616__$1 = (function (){var statearr_36623 = state_36616;
(statearr_36623[(8)] = inst_36596__$1);

return statearr_36623;
})();
if(inst_36598){
var statearr_36624_38037 = state_36616__$1;
(statearr_36624_38037[(1)] = (5));

} else {
var statearr_36625_38038 = state_36616__$1;
(statearr_36625_38038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36617 === (6))){
var state_36616__$1 = state_36616;
var statearr_36627_38039 = state_36616__$1;
(statearr_36627_38039[(2)] = null);

(statearr_36627_38039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36617 === (3))){
var inst_36613 = (state_36616[(2)]);
var inst_36614 = cljs.core.async.close_BANG_(out);
var state_36616__$1 = (function (){var statearr_36628 = state_36616;
(statearr_36628[(9)] = inst_36613);

return statearr_36628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36616__$1,inst_36614);
} else {
if((state_val_36617 === (2))){
var state_36616__$1 = state_36616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36616__$1,(4),ch);
} else {
if((state_val_36617 === (11))){
var inst_36596 = (state_36616[(8)]);
var inst_36605 = (state_36616[(2)]);
var inst_36592 = inst_36596;
var state_36616__$1 = (function (){var statearr_36630 = state_36616;
(statearr_36630[(10)] = inst_36605);

(statearr_36630[(7)] = inst_36592);

return statearr_36630;
})();
var statearr_36631_38047 = state_36616__$1;
(statearr_36631_38047[(2)] = null);

(statearr_36631_38047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36617 === (9))){
var inst_36596 = (state_36616[(8)]);
var state_36616__$1 = state_36616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36616__$1,(11),out,inst_36596);
} else {
if((state_val_36617 === (5))){
var inst_36592 = (state_36616[(7)]);
var inst_36596 = (state_36616[(8)]);
var inst_36600 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36596,inst_36592);
var state_36616__$1 = state_36616;
if(inst_36600){
var statearr_36634_38049 = state_36616__$1;
(statearr_36634_38049[(1)] = (8));

} else {
var statearr_36635_38050 = state_36616__$1;
(statearr_36635_38050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36617 === (10))){
var inst_36608 = (state_36616[(2)]);
var state_36616__$1 = state_36616;
var statearr_36636_38052 = state_36616__$1;
(statearr_36636_38052[(2)] = inst_36608);

(statearr_36636_38052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36617 === (8))){
var inst_36592 = (state_36616[(7)]);
var tmp36632 = inst_36592;
var inst_36592__$1 = tmp36632;
var state_36616__$1 = (function (){var statearr_36638 = state_36616;
(statearr_36638[(7)] = inst_36592__$1);

return statearr_36638;
})();
var statearr_36639_38057 = state_36616__$1;
(statearr_36639_38057[(2)] = null);

(statearr_36639_38057[(1)] = (2));


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
var statearr_36641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36641[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36641[(1)] = (1));

return statearr_36641;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36616){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36616);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36642){if((e36642 instanceof Object)){
var ex__34210__auto__ = e36642;
var statearr_36643_38058 = state_36616;
(statearr_36643_38058[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38059 = state_36616;
state_36616 = G__38059;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36645 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36645[(6)] = c__34274__auto___38029);

return statearr_36645;
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
var G__36648 = arguments.length;
switch (G__36648) {
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
var c__34274__auto___38068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36688){
var state_val_36689 = (state_36688[(1)]);
if((state_val_36689 === (7))){
var inst_36684 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36691_38069 = state_36688__$1;
(statearr_36691_38069[(2)] = inst_36684);

(statearr_36691_38069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (1))){
var inst_36651 = (new Array(n));
var inst_36652 = inst_36651;
var inst_36653 = (0);
var state_36688__$1 = (function (){var statearr_36693 = state_36688;
(statearr_36693[(7)] = inst_36653);

(statearr_36693[(8)] = inst_36652);

return statearr_36693;
})();
var statearr_36694_38070 = state_36688__$1;
(statearr_36694_38070[(2)] = null);

(statearr_36694_38070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (4))){
var inst_36656 = (state_36688[(9)]);
var inst_36656__$1 = (state_36688[(2)]);
var inst_36657 = (inst_36656__$1 == null);
var inst_36658 = cljs.core.not(inst_36657);
var state_36688__$1 = (function (){var statearr_36695 = state_36688;
(statearr_36695[(9)] = inst_36656__$1);

return statearr_36695;
})();
if(inst_36658){
var statearr_36696_38072 = state_36688__$1;
(statearr_36696_38072[(1)] = (5));

} else {
var statearr_36698_38073 = state_36688__$1;
(statearr_36698_38073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (15))){
var inst_36678 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36699_38074 = state_36688__$1;
(statearr_36699_38074[(2)] = inst_36678);

(statearr_36699_38074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (13))){
var state_36688__$1 = state_36688;
var statearr_36700_38075 = state_36688__$1;
(statearr_36700_38075[(2)] = null);

(statearr_36700_38075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (6))){
var inst_36653 = (state_36688[(7)]);
var inst_36674 = (inst_36653 > (0));
var state_36688__$1 = state_36688;
if(cljs.core.truth_(inst_36674)){
var statearr_36702_38080 = state_36688__$1;
(statearr_36702_38080[(1)] = (12));

} else {
var statearr_36703_38081 = state_36688__$1;
(statearr_36703_38081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (3))){
var inst_36686 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36688__$1,inst_36686);
} else {
if((state_val_36689 === (12))){
var inst_36652 = (state_36688[(8)]);
var inst_36676 = cljs.core.vec(inst_36652);
var state_36688__$1 = state_36688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36688__$1,(15),out,inst_36676);
} else {
if((state_val_36689 === (2))){
var state_36688__$1 = state_36688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36688__$1,(4),ch);
} else {
if((state_val_36689 === (11))){
var inst_36668 = (state_36688[(2)]);
var inst_36669 = (new Array(n));
var inst_36652 = inst_36669;
var inst_36653 = (0);
var state_36688__$1 = (function (){var statearr_36705 = state_36688;
(statearr_36705[(7)] = inst_36653);

(statearr_36705[(10)] = inst_36668);

(statearr_36705[(8)] = inst_36652);

return statearr_36705;
})();
var statearr_36706_38082 = state_36688__$1;
(statearr_36706_38082[(2)] = null);

(statearr_36706_38082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (9))){
var inst_36652 = (state_36688[(8)]);
var inst_36666 = cljs.core.vec(inst_36652);
var state_36688__$1 = state_36688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36688__$1,(11),out,inst_36666);
} else {
if((state_val_36689 === (5))){
var inst_36653 = (state_36688[(7)]);
var inst_36656 = (state_36688[(9)]);
var inst_36661 = (state_36688[(11)]);
var inst_36652 = (state_36688[(8)]);
var inst_36660 = (inst_36652[inst_36653] = inst_36656);
var inst_36661__$1 = (inst_36653 + (1));
var inst_36662 = (inst_36661__$1 < n);
var state_36688__$1 = (function (){var statearr_36708 = state_36688;
(statearr_36708[(11)] = inst_36661__$1);

(statearr_36708[(12)] = inst_36660);

return statearr_36708;
})();
if(cljs.core.truth_(inst_36662)){
var statearr_36710_38085 = state_36688__$1;
(statearr_36710_38085[(1)] = (8));

} else {
var statearr_36711_38088 = state_36688__$1;
(statearr_36711_38088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (14))){
var inst_36681 = (state_36688[(2)]);
var inst_36682 = cljs.core.async.close_BANG_(out);
var state_36688__$1 = (function (){var statearr_36713 = state_36688;
(statearr_36713[(13)] = inst_36681);

return statearr_36713;
})();
var statearr_36714_38089 = state_36688__$1;
(statearr_36714_38089[(2)] = inst_36682);

(statearr_36714_38089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (10))){
var inst_36672 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36716_38091 = state_36688__$1;
(statearr_36716_38091[(2)] = inst_36672);

(statearr_36716_38091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (8))){
var inst_36661 = (state_36688[(11)]);
var inst_36652 = (state_36688[(8)]);
var tmp36712 = inst_36652;
var inst_36652__$1 = tmp36712;
var inst_36653 = inst_36661;
var state_36688__$1 = (function (){var statearr_36717 = state_36688;
(statearr_36717[(7)] = inst_36653);

(statearr_36717[(8)] = inst_36652__$1);

return statearr_36717;
})();
var statearr_36718_38094 = state_36688__$1;
(statearr_36718_38094[(2)] = null);

(statearr_36718_38094[(1)] = (2));


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
var statearr_36720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36720[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36720[(1)] = (1));

return statearr_36720;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36688){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36688);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36721){if((e36721 instanceof Object)){
var ex__34210__auto__ = e36721;
var statearr_36722_38095 = state_36688;
(statearr_36722_38095[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38096 = state_36688;
state_36688 = G__38096;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36723 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36723[(6)] = c__34274__auto___38068);

return statearr_36723;
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
var G__36725 = arguments.length;
switch (G__36725) {
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
var c__34274__auto___38111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36768){
var state_val_36769 = (state_36768[(1)]);
if((state_val_36769 === (7))){
var inst_36764 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36771_38116 = state_36768__$1;
(statearr_36771_38116[(2)] = inst_36764);

(statearr_36771_38116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (1))){
var inst_36726 = [];
var inst_36727 = inst_36726;
var inst_36728 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36768__$1 = (function (){var statearr_36772 = state_36768;
(statearr_36772[(7)] = inst_36727);

(statearr_36772[(8)] = inst_36728);

return statearr_36772;
})();
var statearr_36774_38118 = state_36768__$1;
(statearr_36774_38118[(2)] = null);

(statearr_36774_38118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (4))){
var inst_36732 = (state_36768[(9)]);
var inst_36732__$1 = (state_36768[(2)]);
var inst_36733 = (inst_36732__$1 == null);
var inst_36734 = cljs.core.not(inst_36733);
var state_36768__$1 = (function (){var statearr_36775 = state_36768;
(statearr_36775[(9)] = inst_36732__$1);

return statearr_36775;
})();
if(inst_36734){
var statearr_36776_38121 = state_36768__$1;
(statearr_36776_38121[(1)] = (5));

} else {
var statearr_36777_38122 = state_36768__$1;
(statearr_36777_38122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (15))){
var inst_36758 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36779_38123 = state_36768__$1;
(statearr_36779_38123[(2)] = inst_36758);

(statearr_36779_38123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (13))){
var state_36768__$1 = state_36768;
var statearr_36780_38124 = state_36768__$1;
(statearr_36780_38124[(2)] = null);

(statearr_36780_38124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (6))){
var inst_36727 = (state_36768[(7)]);
var inst_36753 = inst_36727.length;
var inst_36754 = (inst_36753 > (0));
var state_36768__$1 = state_36768;
if(cljs.core.truth_(inst_36754)){
var statearr_36782_38126 = state_36768__$1;
(statearr_36782_38126[(1)] = (12));

} else {
var statearr_36783_38128 = state_36768__$1;
(statearr_36783_38128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (3))){
var inst_36766 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36768__$1,inst_36766);
} else {
if((state_val_36769 === (12))){
var inst_36727 = (state_36768[(7)]);
var inst_36756 = cljs.core.vec(inst_36727);
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36768__$1,(15),out,inst_36756);
} else {
if((state_val_36769 === (2))){
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36768__$1,(4),ch);
} else {
if((state_val_36769 === (11))){
var inst_36736 = (state_36768[(10)]);
var inst_36732 = (state_36768[(9)]);
var inst_36746 = (state_36768[(2)]);
var inst_36747 = [];
var inst_36748 = inst_36747.push(inst_36732);
var inst_36727 = inst_36747;
var inst_36728 = inst_36736;
var state_36768__$1 = (function (){var statearr_36785 = state_36768;
(statearr_36785[(7)] = inst_36727);

(statearr_36785[(11)] = inst_36748);

(statearr_36785[(8)] = inst_36728);

(statearr_36785[(12)] = inst_36746);

return statearr_36785;
})();
var statearr_36787_38131 = state_36768__$1;
(statearr_36787_38131[(2)] = null);

(statearr_36787_38131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (9))){
var inst_36727 = (state_36768[(7)]);
var inst_36744 = cljs.core.vec(inst_36727);
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36768__$1,(11),out,inst_36744);
} else {
if((state_val_36769 === (5))){
var inst_36736 = (state_36768[(10)]);
var inst_36732 = (state_36768[(9)]);
var inst_36728 = (state_36768[(8)]);
var inst_36736__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36732) : f.call(null,inst_36732));
var inst_36737 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36736__$1,inst_36728);
var inst_36738 = cljs.core.keyword_identical_QMARK_(inst_36728,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36739 = ((inst_36737) || (inst_36738));
var state_36768__$1 = (function (){var statearr_36789 = state_36768;
(statearr_36789[(10)] = inst_36736__$1);

return statearr_36789;
})();
if(cljs.core.truth_(inst_36739)){
var statearr_36790_38134 = state_36768__$1;
(statearr_36790_38134[(1)] = (8));

} else {
var statearr_36791_38135 = state_36768__$1;
(statearr_36791_38135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (14))){
var inst_36761 = (state_36768[(2)]);
var inst_36762 = cljs.core.async.close_BANG_(out);
var state_36768__$1 = (function (){var statearr_36793 = state_36768;
(statearr_36793[(13)] = inst_36761);

return statearr_36793;
})();
var statearr_36795_38136 = state_36768__$1;
(statearr_36795_38136[(2)] = inst_36762);

(statearr_36795_38136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (10))){
var inst_36751 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36796_38137 = state_36768__$1;
(statearr_36796_38137[(2)] = inst_36751);

(statearr_36796_38137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (8))){
var inst_36727 = (state_36768[(7)]);
var inst_36736 = (state_36768[(10)]);
var inst_36732 = (state_36768[(9)]);
var inst_36741 = inst_36727.push(inst_36732);
var tmp36792 = inst_36727;
var inst_36727__$1 = tmp36792;
var inst_36728 = inst_36736;
var state_36768__$1 = (function (){var statearr_36798 = state_36768;
(statearr_36798[(7)] = inst_36727__$1);

(statearr_36798[(14)] = inst_36741);

(statearr_36798[(8)] = inst_36728);

return statearr_36798;
})();
var statearr_36799_38139 = state_36768__$1;
(statearr_36799_38139[(2)] = null);

(statearr_36799_38139[(1)] = (2));


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
var statearr_36801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36801[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36801[(1)] = (1));

return statearr_36801;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36768){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36768);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36802){if((e36802 instanceof Object)){
var ex__34210__auto__ = e36802;
var statearr_36803_38142 = state_36768;
(statearr_36803_38142[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38143 = state_36768;
state_36768 = G__38143;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36805 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36805[(6)] = c__34274__auto___38111);

return statearr_36805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
