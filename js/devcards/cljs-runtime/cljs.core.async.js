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
var val_36868 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36868) : fn1.call(null,val_36868));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36868) : fn1.call(null,val_36868));
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
var n__4666__auto___36874 = n;
var x_36875 = (0);
while(true){
if((x_36875 < n__4666__auto___36874)){
(a[x_36875] = x_36875);

var G__36876 = (x_36875 + (1));
x_36875 = G__36876;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34348 = (function (flag,meta34349){
this.flag = flag;
this.meta34349 = meta34349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34350,meta34349__$1){
var self__ = this;
var _34350__$1 = this;
return (new cljs.core.async.t_cljs$core$async34348(self__.flag,meta34349__$1));
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34350){
var self__ = this;
var _34350__$1 = this;
return self__.meta34349;
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34349","meta34349",1097138592,null)], null);
}));

(cljs.core.async.t_cljs$core$async34348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34348");

(cljs.core.async.t_cljs$core$async34348.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34348.
 */
cljs.core.async.__GT_t_cljs$core$async34348 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34348(flag__$1,meta34349){
return (new cljs.core.async.t_cljs$core$async34348(flag__$1,meta34349));
});

}

return (new cljs.core.async.t_cljs$core$async34348(flag,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34362_SHARP_){
var G__34364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34362_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34364) : fret.call(null,G__34364));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34363_SHARP_){
var G__34368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34363_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34368) : fret.call(null,G__34368));
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
var G__36884 = (i + (1));
i = G__36884;
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
var len__4789__auto___36887 = arguments.length;
var i__4790__auto___36888 = (0);
while(true){
if((i__4790__auto___36888 < len__4789__auto___36887)){
args__4795__auto__.push((arguments[i__4790__auto___36888]));

var G__36889 = (i__4790__auto___36888 + (1));
i__4790__auto___36888 = G__36889;
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
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34375){
var G__34376 = cljs.core.first(seq34375);
var seq34375__$1 = cljs.core.next(seq34375);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34376,seq34375__$1);
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
var c__34274__auto___36894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36896 = state_34423__$1;
(statearr_34425_36896[(2)] = inst_34419);

(statearr_34425_36896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36897 = state_34423__$1;
(statearr_34426_36897[(2)] = null);

(statearr_34426_36897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34399 = (state_34423[(7)]);
var inst_34399__$1 = (state_34423[(2)]);
var inst_34403 = (inst_34399__$1 == null);
var state_34423__$1 = (function (){var statearr_34427 = state_34423;
(statearr_34427[(7)] = inst_34399__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34403)){
var statearr_34428_36899 = state_34423__$1;
(statearr_34428_36899[(1)] = (5));

} else {
var statearr_34429_36900 = state_34423__$1;
(statearr_34429_36900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36901 = state_34423__$1;
(statearr_34430_36901[(2)] = null);

(statearr_34430_36901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34399 = (state_34423[(7)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34423__$1,(11),to,inst_34399);
} else {
if((state_val_34424 === (3))){
var inst_34421 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34423__$1,inst_34421);
} else {
if((state_val_34424 === (12))){
var state_34423__$1 = state_34423;
var statearr_34431_36903 = state_34423__$1;
(statearr_34431_36903[(2)] = null);

(statearr_34431_36903[(1)] = (2));


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
var statearr_34432_36905 = state_34423__$1;
(statearr_34432_36905[(1)] = (12));

} else {
var statearr_34433_36906 = state_34423__$1;
(statearr_34433_36906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36907 = state_34423__$1;
(statearr_34434_36907[(2)] = null);

(statearr_34434_36907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36908 = state_34423__$1;
(statearr_34435_36908[(1)] = (8));

} else {
var statearr_34436_36909 = state_34423__$1;
(statearr_34436_36909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36911 = state_34423__$1;
(statearr_34437_36911[(2)] = inst_34417);

(statearr_34437_36911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36912 = state_34423__$1;
(statearr_34438_36912[(2)] = inst_34409);

(statearr_34438_36912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36914 = state_34423__$1;
(statearr_34439_36914[(2)] = inst_34406);

(statearr_34439_36914[(1)] = (10));


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
var statearr_34442_36916 = state_34423;
(statearr_34442_36916[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36917 = state_34423;
state_34423 = G__36917;
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
(statearr_34443[(6)] = c__34274__auto___36894);

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
var c__34274__auto___36920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34457){
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
}catch (e34462){if((e34462 instanceof Object)){
var ex__34210__auto__ = e34462;
var statearr_34463_36923 = state_34457;
(statearr_34463_36923[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36924 = state_34457;
state_34457 = G__36924;
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
var state__34276__auto__ = (function (){var statearr_34465 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34465[(6)] = c__34274__auto___36920);

return statearr_34465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var n__4666__auto___36927 = n;
var __36928 = (0);
while(true){
if((__36928 < n__4666__auto___36927)){
var G__34471_36929 = type;
var G__34471_36930__$1 = (((G__34471_36929 instanceof cljs.core.Keyword))?G__34471_36929.fqn:null);
switch (G__34471_36930__$1) {
case "compute":
var c__34274__auto___36932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36928,c__34274__auto___36932,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36928,c__34274__auto___36932,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async){
return (function (state_34484){
var state_val_34485 = (state_34484[(1)]);
if((state_val_34485 === (1))){
var state_34484__$1 = state_34484;
var statearr_34491_36934 = state_34484__$1;
(statearr_34491_36934[(2)] = null);

(statearr_34491_36934[(1)] = (2));


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
var statearr_34494_36935 = state_34484__$1;
(statearr_34494_36935[(1)] = (5));

} else {
var statearr_34495_36936 = state_34484__$1;
(statearr_34495_36936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (5))){
var state_34484__$1 = state_34484;
var statearr_34496_36937 = state_34484__$1;
(statearr_34496_36937[(2)] = null);

(statearr_34496_36937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (6))){
var state_34484__$1 = state_34484;
var statearr_34497_36938 = state_34484__$1;
(statearr_34497_36938[(2)] = null);

(statearr_34497_36938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (7))){
var inst_34480 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
var statearr_34498_36939 = state_34484__$1;
(statearr_34498_36939[(2)] = inst_34480);

(statearr_34498_36939[(1)] = (3));


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
});})(__36928,c__34274__auto___36932,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async))
;
return ((function (__36928,switch__34206__auto__,c__34274__auto___36932,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async){
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
var statearr_34501_36947 = state_34484;
(statearr_34501_36947[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36948 = state_34484;
state_34484 = G__36948;
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
;})(__36928,switch__34206__auto__,c__34274__auto___36932,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34503 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34503[(6)] = c__34274__auto___36932);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36928,c__34274__auto___36932,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36928,c__34274__auto___36950,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36928,c__34274__auto___36950,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async){
return (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var state_34516__$1 = state_34516;
var statearr_34518_36951 = state_34516__$1;
(statearr_34518_36951[(2)] = null);

(statearr_34518_36951[(1)] = (2));


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
var statearr_34523_36956 = state_34516__$1;
(statearr_34523_36956[(1)] = (5));

} else {
var statearr_34527_36957 = state_34516__$1;
(statearr_34527_36957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (5))){
var state_34516__$1 = state_34516;
var statearr_34528_36958 = state_34516__$1;
(statearr_34528_36958[(2)] = null);

(statearr_34528_36958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34529_36959 = state_34516__$1;
(statearr_34529_36959[(2)] = null);

(statearr_34529_36959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (7))){
var inst_34512 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34530_36960 = state_34516__$1;
(statearr_34530_36960[(2)] = inst_34512);

(statearr_34530_36960[(1)] = (3));


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
});})(__36928,c__34274__auto___36950,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async))
;
return ((function (__36928,switch__34206__auto__,c__34274__auto___36950,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async){
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
var statearr_34533_36964 = state_34516;
(statearr_34533_36964[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36967 = state_34516;
state_34516 = G__36967;
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
;})(__36928,switch__34206__auto__,c__34274__auto___36950,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___36950);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36928,c__34274__auto___36950,G__34471_36929,G__34471_36930__$1,n__4666__auto___36927,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34471_36930__$1)].join('')));

}

var G__36970 = (__36928 + (1));
__36928 = G__36970;
continue;
} else {
}
break;
}

var c__34274__auto___36971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36972 = state_34559__$1;
(statearr_34561_36972[(2)] = inst_34555);

(statearr_34561_36972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36973 = state_34559__$1;
(statearr_34562_36973[(2)] = null);

(statearr_34562_36973[(1)] = (2));


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
var statearr_34564_36974 = state_34559__$1;
(statearr_34564_36974[(1)] = (5));

} else {
var statearr_34565_36975 = state_34559__$1;
(statearr_34565_36975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (6))){
var inst_34542 = (state_34559[(8)]);
var inst_34537 = (state_34559[(7)]);
var inst_34542__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34546 = [inst_34537,inst_34542__$1];
var inst_34547 = (new cljs.core.PersistentVector(null,2,(5),inst_34543,inst_34546,null));
var state_34559__$1 = (function (){var statearr_34566 = state_34559;
(statearr_34566[(8)] = inst_34542__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(8),jobs,inst_34547);
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
var inst_34551 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34567 = state_34559;
(statearr_34567[(9)] = inst_34551);

return statearr_34567;
})();
var statearr_34568_36981 = state_34559__$1;
(statearr_34568_36981[(2)] = null);

(statearr_34568_36981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36983 = state_34559__$1;
(statearr_34569_36983[(2)] = inst_34540);

(statearr_34569_36983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (8))){
var inst_34542 = (state_34559[(8)]);
var inst_34549 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34570 = state_34559;
(statearr_34570[(10)] = inst_34549);

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
var statearr_34573_36986 = state_34559;
(statearr_34573_36986[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36989 = state_34559;
state_34559 = G__36989;
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
var statearr_34614_36995 = state_34612__$1;
(statearr_34614_36995[(2)] = inst_34608);

(statearr_34614_36995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36998 = state_34612__$1;
(statearr_34615_36998[(2)] = null);

(statearr_34615_36998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_37001 = state_34612__$1;
(statearr_34616_37001[(2)] = null);

(statearr_34616_37001[(1)] = (2));


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
var statearr_34618_37003 = state_34612__$1;
(statearr_34618_37003[(1)] = (5));

} else {
var statearr_34619_37004 = state_34612__$1;
(statearr_34619_37004[(1)] = (6));

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
var statearr_34620_37011 = state_34612__$1;
(statearr_34620_37011[(2)] = inst_34603);

(statearr_34620_37011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_37017 = state_34612__$1;
(statearr_34622_37017[(2)] = null);

(statearr_34622_37017[(1)] = (2));


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
var statearr_34629_37035 = state_34612__$1;
(statearr_34629_37035[(1)] = (8));

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
var statearr_34632_37040 = state_34612__$1;
(statearr_34632_37040[(1)] = (15));

} else {
var statearr_34633_37041 = state_34612__$1;
(statearr_34633_37041[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37045 = state_34612__$1;
(statearr_34634_37045[(2)] = false);

(statearr_34634_37045[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37049 = state_34612__$1;
(statearr_34635_37049[(2)] = inst_34584);

(statearr_34635_37049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37055 = state_34612__$1;
(statearr_34636_37055[(2)] = inst_34595);

(statearr_34636_37055[(1)] = (17));


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
var statearr_34640_37062 = state_34612;
(statearr_34640_37062[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37063 = state_34612;
state_34612 = G__37063;
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
var G__34653 = arguments.length;
switch (G__34653) {
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
var c__34274__auto___37087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34682){
var state_val_34683 = (state_34682[(1)]);
if((state_val_34683 === (7))){
var inst_34678 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34686_37090 = state_34682__$1;
(statearr_34686_37090[(2)] = inst_34678);

(statearr_34686_37090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (1))){
var state_34682__$1 = state_34682;
var statearr_34687_37092 = state_34682__$1;
(statearr_34687_37092[(2)] = null);

(statearr_34687_37092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (4))){
var inst_34659 = (state_34682[(7)]);
var inst_34659__$1 = (state_34682[(2)]);
var inst_34660 = (inst_34659__$1 == null);
var state_34682__$1 = (function (){var statearr_34688 = state_34682;
(statearr_34688[(7)] = inst_34659__$1);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34660)){
var statearr_34689_37096 = state_34682__$1;
(statearr_34689_37096[(1)] = (5));

} else {
var statearr_34690_37098 = state_34682__$1;
(statearr_34690_37098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (13))){
var state_34682__$1 = state_34682;
var statearr_34691_37099 = state_34682__$1;
(statearr_34691_37099[(2)] = null);

(statearr_34691_37099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (6))){
var inst_34659 = (state_34682[(7)]);
var inst_34665 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34659) : p.call(null,inst_34659));
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34665)){
var statearr_34692_37100 = state_34682__$1;
(statearr_34692_37100[(1)] = (9));

} else {
var statearr_34693_37101 = state_34682__$1;
(statearr_34693_37101[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (3))){
var inst_34680 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34682__$1,inst_34680);
} else {
if((state_val_34683 === (12))){
var state_34682__$1 = state_34682;
var statearr_34695_37109 = state_34682__$1;
(statearr_34695_37109[(2)] = null);

(statearr_34695_37109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (2))){
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34682__$1,(4),ch);
} else {
if((state_val_34683 === (11))){
var inst_34659 = (state_34682[(7)]);
var inst_34669 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34682__$1,(8),inst_34669,inst_34659);
} else {
if((state_val_34683 === (9))){
var state_34682__$1 = state_34682;
var statearr_34697_37111 = state_34682__$1;
(statearr_34697_37111[(2)] = tc);

(statearr_34697_37111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (5))){
var inst_34662 = cljs.core.async.close_BANG_(tc);
var inst_34663 = cljs.core.async.close_BANG_(fc);
var state_34682__$1 = (function (){var statearr_34698 = state_34682;
(statearr_34698[(8)] = inst_34662);

return statearr_34698;
})();
var statearr_34699_37113 = state_34682__$1;
(statearr_34699_37113[(2)] = inst_34663);

(statearr_34699_37113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (14))){
var inst_34676 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34700_37116 = state_34682__$1;
(statearr_34700_37116[(2)] = inst_34676);

(statearr_34700_37116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (10))){
var state_34682__$1 = state_34682;
var statearr_34701_37117 = state_34682__$1;
(statearr_34701_37117[(2)] = fc);

(statearr_34701_37117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (8))){
var inst_34671 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34671)){
var statearr_34704_37118 = state_34682__$1;
(statearr_34704_37118[(1)] = (12));

} else {
var statearr_34705_37120 = state_34682__$1;
(statearr_34705_37120[(1)] = (13));

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
var statearr_34706 = [null,null,null,null,null,null,null,null,null];
(statearr_34706[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34706[(1)] = (1));

return statearr_34706;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34682){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34682);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34710){if((e34710 instanceof Object)){
var ex__34210__auto__ = e34710;
var statearr_34711_37127 = state_34682;
(statearr_34711_37127[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37129 = state_34682;
state_34682 = G__37129;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34712 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34712[(6)] = c__34274__auto___37087);

return statearr_34712;
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
var statearr_34739_37133 = state_34734__$1;
(statearr_34739_37133[(2)] = inst_34730);

(statearr_34739_37133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (1))){
var inst_34714 = init;
var state_34734__$1 = (function (){var statearr_34740 = state_34734;
(statearr_34740[(7)] = inst_34714);

return statearr_34740;
})();
var statearr_34741_37134 = state_34734__$1;
(statearr_34741_37134[(2)] = null);

(statearr_34741_37134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (4))){
var inst_34717 = (state_34734[(8)]);
var inst_34717__$1 = (state_34734[(2)]);
var inst_34718 = (inst_34717__$1 == null);
var state_34734__$1 = (function (){var statearr_34742 = state_34734;
(statearr_34742[(8)] = inst_34717__$1);

return statearr_34742;
})();
if(cljs.core.truth_(inst_34718)){
var statearr_34743_37136 = state_34734__$1;
(statearr_34743_37136[(1)] = (5));

} else {
var statearr_34744_37139 = state_34734__$1;
(statearr_34744_37139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (6))){
var inst_34721 = (state_34734[(9)]);
var inst_34717 = (state_34734[(8)]);
var inst_34714 = (state_34734[(7)]);
var inst_34721__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34714,inst_34717) : f.call(null,inst_34714,inst_34717));
var inst_34722 = cljs.core.reduced_QMARK_(inst_34721__$1);
var state_34734__$1 = (function (){var statearr_34748 = state_34734;
(statearr_34748[(9)] = inst_34721__$1);

return statearr_34748;
})();
if(inst_34722){
var statearr_34749_37145 = state_34734__$1;
(statearr_34749_37145[(1)] = (8));

} else {
var statearr_34750_37146 = state_34734__$1;
(statearr_34750_37146[(1)] = (9));

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
var inst_34721 = (state_34734[(9)]);
var inst_34714 = inst_34721;
var state_34734__$1 = (function (){var statearr_34751 = state_34734;
(statearr_34751[(7)] = inst_34714);

return statearr_34751;
})();
var statearr_34752_37150 = state_34734__$1;
(statearr_34752_37150[(2)] = null);

(statearr_34752_37150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (5))){
var inst_34714 = (state_34734[(7)]);
var state_34734__$1 = state_34734;
var statearr_34753_37151 = state_34734__$1;
(statearr_34753_37151[(2)] = inst_34714);

(statearr_34753_37151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (10))){
var inst_34728 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34757_37152 = state_34734__$1;
(statearr_34757_37152[(2)] = inst_34728);

(statearr_34757_37152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (8))){
var inst_34721 = (state_34734[(9)]);
var inst_34724 = cljs.core.deref(inst_34721);
var state_34734__$1 = state_34734;
var statearr_34758_37153 = state_34734__$1;
(statearr_34758_37153[(2)] = inst_34724);

(statearr_34758_37153[(1)] = (10));


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
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37160 = state_34734;
(statearr_34761_37160[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37161 = state_34734;
state_34734 = G__37161;
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
var statearr_34772_37176 = state_34768;
(statearr_34772_37176[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37180 = state_34768;
state_34768 = G__37180;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34806){
var state_val_34807 = (state_34806[(1)]);
if((state_val_34807 === (7))){
var inst_34785 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34809_37192 = state_34806__$1;
(statearr_34809_37192[(2)] = inst_34785);

(statearr_34809_37192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34806__$1 = (function (){var statearr_34810 = state_34806;
(statearr_34810[(7)] = inst_34777);

return statearr_34810;
})();
var statearr_34811_37194 = state_34806__$1;
(statearr_34811_37194[(2)] = null);

(statearr_34811_37194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (4))){
var inst_34777 = (state_34806[(7)]);
var inst_34783 = cljs.core.first(inst_34777);
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34806__$1,(7),ch,inst_34783);
} else {
if((state_val_34807 === (13))){
var inst_34800 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34812_37201 = state_34806__$1;
(statearr_34812_37201[(2)] = inst_34800);

(statearr_34812_37201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (6))){
var inst_34788 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
if(cljs.core.truth_(inst_34788)){
var statearr_34813_37208 = state_34806__$1;
(statearr_34813_37208[(1)] = (8));

} else {
var statearr_34815_37209 = state_34806__$1;
(statearr_34815_37209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (3))){
var inst_34804 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34806__$1,inst_34804);
} else {
if((state_val_34807 === (12))){
var state_34806__$1 = state_34806;
var statearr_34816_37210 = state_34806__$1;
(statearr_34816_37210[(2)] = null);

(statearr_34816_37210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (2))){
var inst_34777 = (state_34806[(7)]);
var state_34806__$1 = state_34806;
if(cljs.core.truth_(inst_34777)){
var statearr_34819_37213 = state_34806__$1;
(statearr_34819_37213[(1)] = (4));

} else {
var statearr_34820_37214 = state_34806__$1;
(statearr_34820_37214[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (11))){
var inst_34797 = cljs.core.async.close_BANG_(ch);
var state_34806__$1 = state_34806;
var statearr_34824_37217 = state_34806__$1;
(statearr_34824_37217[(2)] = inst_34797);

(statearr_34824_37217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (9))){
var state_34806__$1 = state_34806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34825_37218 = state_34806__$1;
(statearr_34825_37218[(1)] = (11));

} else {
var statearr_34826_37219 = state_34806__$1;
(statearr_34826_37219[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (5))){
var inst_34777 = (state_34806[(7)]);
var state_34806__$1 = state_34806;
var statearr_34827_37221 = state_34806__$1;
(statearr_34827_37221[(2)] = inst_34777);

(statearr_34827_37221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (10))){
var inst_34802 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34828_37222 = state_34806__$1;
(statearr_34828_37222[(2)] = inst_34802);

(statearr_34828_37222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (8))){
var inst_34777 = (state_34806[(7)]);
var inst_34793 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34793;
var state_34806__$1 = (function (){var statearr_34829 = state_34806;
(statearr_34829[(7)] = inst_34777__$1);

return statearr_34829;
})();
var statearr_34830_37224 = state_34806__$1;
(statearr_34830_37224[(2)] = null);

(statearr_34830_37224[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34806){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34806);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34832){if((e34832 instanceof Object)){
var ex__34210__auto__ = e34832;
var statearr_34833_37230 = state_34806;
(statearr_34833_37230[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37231 = state_34806;
state_34806 = G__37231;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34837 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34837[(6)] = c__34274__auto__);

return statearr_34837;
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
var c__34274__auto___37273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34984){
var state_val_34985 = (state_34984[(1)]);
if((state_val_34985 === (7))){
var inst_34977 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_34986_37276 = state_34984__$1;
(statearr_34986_37276[(2)] = inst_34977);

(statearr_34986_37276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (20))){
var inst_34877 = (state_34984[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34984__$1 = (function (){var statearr_34990 = state_34984;
(statearr_34990[(8)] = inst_34890);

return statearr_34990;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34992_37280 = state_34984__$1;
(statearr_34992_37280[(1)] = (22));

} else {
var statearr_34994_37281 = state_34984__$1;
(statearr_34994_37281[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (27))){
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
var statearr_34997_37282 = state_34984__$1;
(statearr_34997_37282[(1)] = (30));

} else {
var statearr_34998_37283 = state_34984__$1;
(statearr_34998_37283[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (1))){
var state_34984__$1 = state_34984;
var statearr_34999_37286 = state_34984__$1;
(statearr_34999_37286[(2)] = null);

(statearr_34999_37286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (24))){
var inst_34877 = (state_34984[(7)]);
var inst_34896 = (state_34984[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35000 = state_34984;
(statearr_35000[(13)] = inst_34857);

(statearr_35000[(14)] = inst_34856);

(statearr_35000[(15)] = inst_34858);

(statearr_35000[(16)] = inst_34896);

(statearr_35000[(17)] = inst_34855);

return statearr_35000;
})();
var statearr_35001_37291 = state_34984__$1;
(statearr_35001_37291[(2)] = null);

(statearr_35001_37291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (39))){
var state_34984__$1 = state_34984;
var statearr_35005_37292 = state_34984__$1;
(statearr_35005_37292[(2)] = null);

(statearr_35005_37292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (4))){
var inst_34846 = (state_34984[(9)]);
var inst_34846__$1 = (state_34984[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34984__$1 = (function (){var statearr_35009 = state_34984;
(statearr_35009[(9)] = inst_34846__$1);

return statearr_35009;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35011_37293 = state_34984__$1;
(statearr_35011_37293[(1)] = (5));

} else {
var statearr_35012_37294 = state_34984__$1;
(statearr_35012_37294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (15))){
var inst_34857 = (state_34984[(13)]);
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34855 = (state_34984[(17)]);
var inst_34873 = (state_34984[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35002 = inst_34857;
var tmp35003 = inst_34856;
var tmp35004 = inst_34855;
var inst_34855__$1 = tmp35004;
var inst_34856__$1 = tmp35003;
var inst_34857__$1 = tmp35002;
var inst_34858__$1 = inst_34874;
var state_34984__$1 = (function (){var statearr_35015 = state_34984;
(statearr_35015[(18)] = inst_34873);

(statearr_35015[(13)] = inst_34857__$1);

(statearr_35015[(14)] = inst_34856__$1);

(statearr_35015[(15)] = inst_34858__$1);

(statearr_35015[(17)] = inst_34855__$1);

return statearr_35015;
})();
var statearr_35016_37299 = state_34984__$1;
(statearr_35016_37299[(2)] = null);

(statearr_35016_37299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (21))){
var inst_34900 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35020_37300 = state_34984__$1;
(statearr_35020_37300[(2)] = inst_34900);

(statearr_35020_37300[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (31))){
var inst_34926 = (state_34984[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34984__$1 = (function (){var statearr_35021 = state_34984;
(statearr_35021[(19)] = inst_34930);

return statearr_35021;
})();
var statearr_35022_37306 = state_34984__$1;
(statearr_35022_37306[(2)] = inst_34931);

(statearr_35022_37306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (32))){
var inst_34918 = (state_34984[(20)]);
var inst_34919 = (state_34984[(11)]);
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34933 = (state_34984[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35017 = inst_34918;
var tmp35018 = inst_34919;
var tmp35019 = inst_34920;
var inst_34918__$1 = tmp35017;
var inst_34919__$1 = tmp35018;
var inst_34920__$1 = tmp35019;
var inst_34921__$1 = inst_34934;
var state_34984__$1 = (function (){var statearr_35028 = state_34984;
(statearr_35028[(20)] = inst_34918__$1);

(statearr_35028[(22)] = inst_34933);

(statearr_35028[(11)] = inst_34919__$1);

(statearr_35028[(21)] = inst_34920__$1);

(statearr_35028[(12)] = inst_34921__$1);

return statearr_35028;
})();
var statearr_35030_37314 = state_34984__$1;
(statearr_35030_37314[(2)] = null);

(statearr_35030_37314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (40))){
var inst_34946 = (state_34984[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34984__$1 = (function (){var statearr_35031 = state_34984;
(statearr_35031[(24)] = inst_34950);

return statearr_35031;
})();
var statearr_35032_37322 = state_34984__$1;
(statearr_35032_37322[(2)] = inst_34951);

(statearr_35032_37322[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (33))){
var inst_34937 = (state_34984[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34984__$1 = state_34984;
if(inst_34939){
var statearr_35034_37326 = state_34984__$1;
(statearr_35034_37326[(1)] = (36));

} else {
var statearr_35036_37327 = state_34984__$1;
(statearr_35036_37327[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (13))){
var inst_34867 = (state_34984[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34984__$1 = state_34984;
var statearr_35039_37328 = state_34984__$1;
(statearr_35039_37328[(2)] = inst_34870);

(statearr_35039_37328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (22))){
var inst_34890 = (state_34984[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34984__$1 = state_34984;
var statearr_35052_37331 = state_34984__$1;
(statearr_35052_37331[(2)] = inst_34893);

(statearr_35052_37331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (36))){
var inst_34937 = (state_34984[(25)]);
var inst_34941 = cljs.core.chunk_first(inst_34937);
var inst_34942 = cljs.core.chunk_rest(inst_34937);
var inst_34943 = cljs.core.count(inst_34941);
var inst_34918 = inst_34942;
var inst_34919 = inst_34941;
var inst_34920 = inst_34943;
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35056 = state_34984;
(statearr_35056[(20)] = inst_34918);

(statearr_35056[(11)] = inst_34919);

(statearr_35056[(21)] = inst_34920);

(statearr_35056[(12)] = inst_34921);

return statearr_35056;
})();
var statearr_35059_37341 = state_34984__$1;
(statearr_35059_37341[(2)] = null);

(statearr_35059_37341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (41))){
var inst_34937 = (state_34984[(25)]);
var inst_34953 = (state_34984[(2)]);
var inst_34954 = cljs.core.next(inst_34937);
var inst_34918 = inst_34954;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35062 = state_34984;
(statearr_35062[(20)] = inst_34918);

(statearr_35062[(11)] = inst_34919);

(statearr_35062[(21)] = inst_34920);

(statearr_35062[(27)] = inst_34953);

(statearr_35062[(12)] = inst_34921);

return statearr_35062;
})();
var statearr_35063_37345 = state_34984__$1;
(statearr_35063_37345[(2)] = null);

(statearr_35063_37345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (43))){
var state_34984__$1 = state_34984;
var statearr_35065_37349 = state_34984__$1;
(statearr_35065_37349[(2)] = null);

(statearr_35065_37349[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (29))){
var inst_34962 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35071_37353 = state_34984__$1;
(statearr_35071_37353[(2)] = inst_34962);

(statearr_35071_37353[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (44))){
var inst_34974 = (state_34984[(2)]);
var state_34984__$1 = (function (){var statearr_35075 = state_34984;
(statearr_35075[(28)] = inst_34974);

return statearr_35075;
})();
var statearr_35077_37360 = state_34984__$1;
(statearr_35077_37360[(2)] = null);

(statearr_35077_37360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (6))){
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
var state_34984__$1 = (function (){var statearr_35087 = state_34984;
(statearr_35087[(20)] = inst_34918);

(statearr_35087[(29)] = inst_34910__$1);

(statearr_35087[(11)] = inst_34919);

(statearr_35087[(21)] = inst_34920);

(statearr_35087[(12)] = inst_34921);

(statearr_35087[(30)] = inst_34912);

return statearr_35087;
})();
var statearr_35091_37365 = state_34984__$1;
(statearr_35091_37365[(2)] = null);

(statearr_35091_37365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (28))){
var inst_34918 = (state_34984[(20)]);
var inst_34937 = (state_34984[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34984__$1 = (function (){var statearr_35097 = state_34984;
(statearr_35097[(25)] = inst_34937__$1);

return statearr_35097;
})();
if(inst_34937__$1){
var statearr_35098_37367 = state_34984__$1;
(statearr_35098_37367[(1)] = (33));

} else {
var statearr_35101_37368 = state_34984__$1;
(statearr_35101_37368[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (25))){
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34924)){
var statearr_35106_37370 = state_34984__$1;
(statearr_35106_37370[(1)] = (27));

} else {
var statearr_35110_37373 = state_34984__$1;
(statearr_35110_37373[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (34))){
var state_34984__$1 = state_34984;
var statearr_35124_37377 = state_34984__$1;
(statearr_35124_37377[(2)] = null);

(statearr_35124_37377[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (17))){
var state_34984__$1 = state_34984;
var statearr_35128_37378 = state_34984__$1;
(statearr_35128_37378[(2)] = null);

(statearr_35128_37378[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (3))){
var inst_34979 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34984__$1,inst_34979);
} else {
if((state_val_34985 === (12))){
var inst_34905 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35136_37381 = state_34984__$1;
(statearr_35136_37381[(2)] = inst_34905);

(statearr_35136_37381[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (2))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(4),ch);
} else {
if((state_val_34985 === (23))){
var state_34984__$1 = state_34984;
var statearr_35145_37387 = state_34984__$1;
(statearr_35145_37387[(2)] = null);

(statearr_35145_37387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (35))){
var inst_34960 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35151_37389 = state_34984__$1;
(statearr_35151_37389[(2)] = inst_34960);

(statearr_35151_37389[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (19))){
var inst_34877 = (state_34984[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35158 = state_34984;
(statearr_35158[(13)] = inst_34857);

(statearr_35158[(14)] = inst_34856);

(statearr_35158[(15)] = inst_34858);

(statearr_35158[(17)] = inst_34855);

return statearr_35158;
})();
var statearr_35159_37393 = state_34984__$1;
(statearr_35159_37393[(2)] = null);

(statearr_35159_37393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (11))){
var inst_34855 = (state_34984[(17)]);
var inst_34877 = (state_34984[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34984__$1 = (function (){var statearr_35160 = state_34984;
(statearr_35160[(7)] = inst_34877__$1);

return statearr_35160;
})();
if(inst_34877__$1){
var statearr_35161_37396 = state_34984__$1;
(statearr_35161_37396[(1)] = (16));

} else {
var statearr_35162_37397 = state_34984__$1;
(statearr_35162_37397[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (9))){
var inst_34907 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35163_37400 = state_34984__$1;
(statearr_35163_37400[(2)] = inst_34907);

(statearr_35163_37400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35166 = state_34984;
(statearr_35166[(13)] = inst_34857);

(statearr_35166[(14)] = inst_34856);

(statearr_35166[(15)] = inst_34858);

(statearr_35166[(17)] = inst_34855);

return statearr_35166;
})();
var statearr_35167_37402 = state_34984__$1;
(statearr_35167_37402[(2)] = null);

(statearr_35167_37402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (14))){
var state_34984__$1 = state_34984;
var statearr_35168_37408 = state_34984__$1;
(statearr_35168_37408[(2)] = null);

(statearr_35168_37408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (45))){
var inst_34971 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35171_37411 = state_34984__$1;
(statearr_35171_37411[(2)] = inst_34971);

(statearr_35171_37411[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (26))){
var inst_34910 = (state_34984[(29)]);
var inst_34964 = (state_34984[(2)]);
var inst_34967 = cljs.core.seq(inst_34910);
var state_34984__$1 = (function (){var statearr_35195 = state_34984;
(statearr_35195[(31)] = inst_34964);

return statearr_35195;
})();
if(inst_34967){
var statearr_35196_37412 = state_34984__$1;
(statearr_35196_37412[(1)] = (42));

} else {
var statearr_35197_37414 = state_34984__$1;
(statearr_35197_37414[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (16))){
var inst_34877 = (state_34984[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34984__$1 = state_34984;
if(inst_34879){
var statearr_35200_37416 = state_34984__$1;
(statearr_35200_37416[(1)] = (19));

} else {
var statearr_35201_37417 = state_34984__$1;
(statearr_35201_37417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (38))){
var inst_34957 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35204_37419 = state_34984__$1;
(statearr_35204_37419[(2)] = inst_34957);

(statearr_35204_37419[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (30))){
var state_34984__$1 = state_34984;
var statearr_35205_37423 = state_34984__$1;
(statearr_35205_37423[(2)] = null);

(statearr_35205_37423[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (10))){
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34984__$1 = (function (){var statearr_35208 = state_34984;
(statearr_35208[(26)] = inst_34867);

return statearr_35208;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35211_37427 = state_34984__$1;
(statearr_35211_37427[(1)] = (13));

} else {
var statearr_35214_37428 = state_34984__$1;
(statearr_35214_37428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (18))){
var inst_34903 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35218_37429 = state_34984__$1;
(statearr_35218_37429[(2)] = inst_34903);

(statearr_35218_37429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (42))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(45),dchan);
} else {
if((state_val_34985 === (37))){
var inst_34946 = (state_34984[(23)]);
var inst_34846 = (state_34984[(9)]);
var inst_34937 = (state_34984[(25)]);
var inst_34946__$1 = cljs.core.first(inst_34937);
var inst_34947 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34946__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_35230 = state_34984;
(statearr_35230[(23)] = inst_34946__$1);

return statearr_35230;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35232_37434 = state_34984__$1;
(statearr_35232_37434[(1)] = (39));

} else {
var statearr_35234_37436 = state_34984__$1;
(statearr_35234_37436[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (8))){
var inst_34857 = (state_34984[(13)]);
var inst_34858 = (state_34984[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34861)){
var statearr_35241_37437 = state_34984__$1;
(statearr_35241_37437[(1)] = (10));

} else {
var statearr_35242_37438 = state_34984__$1;
(statearr_35242_37438[(1)] = (11));

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
var statearr_35252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35252[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35252[(1)] = (1));

return statearr_35252;
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
}catch (e35257){if((e35257 instanceof Object)){
var ex__34210__auto__ = e35257;
var statearr_35261_37443 = state_34984;
(statearr_35261_37443[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35257;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37445 = state_34984;
state_34984 = G__37445;
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
var state__34276__auto__ = (function (){var statearr_35268 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35268[(6)] = c__34274__auto___37273);

return statearr_35268;
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
var G__35281 = arguments.length;
switch (G__35281) {
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
var i__4790__auto___37493 = (0);
while(true){
if((i__4790__auto___37493 < len__4789__auto___37492)){
args__4795__auto__.push((arguments[i__4790__auto___37493]));

var G__37495 = (i__4790__auto___37493 + (1));
i__4790__auto___37493 = G__37495;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35372){
var map__35373 = p__35372;
var map__35373__$1 = (((((!((map__35373 == null))))?(((((map__35373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35373):map__35373);
var opts = map__35373__$1;
var statearr_35377_37502 = state;
(statearr_35377_37502[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35380_37504 = state;
(statearr_35380_37504[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35382_37506 = state;
(statearr_35382_37506[(2)] = cljs.core.deref(cb));


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
var G__35363 = cljs.core.first(seq35361__$1);
var seq35361__$2 = cljs.core.next(seq35361__$1);
var G__35364 = cljs.core.first(seq35361__$2);
var seq35361__$3 = cljs.core.next(seq35361__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35362,G__35363,G__35364,seq35361__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35412 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35413){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35413 = meta35413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35414,meta35413__$1){
var self__ = this;
var _35414__$1 = this;
return (new cljs.core.async.t_cljs$core$async35412(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35413__$1));
}));

(cljs.core.async.t_cljs$core$async35412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35414){
var self__ = this;
var _35414__$1 = this;
return self__.meta35413;
}));

(cljs.core.async.t_cljs$core$async35412.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35412.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35412.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35412.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35412.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35412.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35412.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35413","meta35413",-1505147325,null)], null);
}));

(cljs.core.async.t_cljs$core$async35412.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35412");

(cljs.core.async.t_cljs$core$async35412.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35412");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35412.
 */
cljs.core.async.__GT_t_cljs$core$async35412 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35412(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35413){
return (new cljs.core.async.t_cljs$core$async35412(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35413));
});

}

return (new cljs.core.async.t_cljs$core$async35412(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35611){
var state_val_35612 = (state_35611[(1)]);
if((state_val_35612 === (7))){
var inst_35480 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
var statearr_35623_37558 = state_35611__$1;
(statearr_35623_37558[(2)] = inst_35480);

(statearr_35623_37558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (20))){
var inst_35495 = (state_35611[(7)]);
var state_35611__$1 = state_35611;
var statearr_35626_37562 = state_35611__$1;
(statearr_35626_37562[(2)] = inst_35495);

(statearr_35626_37562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (27))){
var state_35611__$1 = state_35611;
var statearr_35632_37564 = state_35611__$1;
(statearr_35632_37564[(2)] = null);

(statearr_35632_37564[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (1))){
var inst_35464 = (state_35611[(8)]);
var inst_35464__$1 = calc_state();
var inst_35468 = (inst_35464__$1 == null);
var inst_35469 = cljs.core.not(inst_35468);
var state_35611__$1 = (function (){var statearr_35646 = state_35611;
(statearr_35646[(8)] = inst_35464__$1);

return statearr_35646;
})();
if(inst_35469){
var statearr_35648_37568 = state_35611__$1;
(statearr_35648_37568[(1)] = (2));

} else {
var statearr_35651_37569 = state_35611__$1;
(statearr_35651_37569[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (24))){
var inst_35574 = (state_35611[(9)]);
var inst_35530 = (state_35611[(10)]);
var inst_35540 = (state_35611[(11)]);
var inst_35574__$1 = (inst_35530.cljs$core$IFn$_invoke$arity$1 ? inst_35530.cljs$core$IFn$_invoke$arity$1(inst_35540) : inst_35530.call(null,inst_35540));
var state_35611__$1 = (function (){var statearr_35655 = state_35611;
(statearr_35655[(9)] = inst_35574__$1);

return statearr_35655;
})();
if(cljs.core.truth_(inst_35574__$1)){
var statearr_35660_37579 = state_35611__$1;
(statearr_35660_37579[(1)] = (29));

} else {
var statearr_35662_37580 = state_35611__$1;
(statearr_35662_37580[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (4))){
var inst_35483 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
if(cljs.core.truth_(inst_35483)){
var statearr_35672_37582 = state_35611__$1;
(statearr_35672_37582[(1)] = (8));

} else {
var statearr_35675_37583 = state_35611__$1;
(statearr_35675_37583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (15))){
var inst_35521 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
if(cljs.core.truth_(inst_35521)){
var statearr_35680_37585 = state_35611__$1;
(statearr_35680_37585[(1)] = (19));

} else {
var statearr_35681_37587 = state_35611__$1;
(statearr_35681_37587[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (21))){
var inst_35529 = (state_35611[(12)]);
var inst_35529__$1 = (state_35611[(2)]);
var inst_35530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35529__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35529__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35529__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35611__$1 = (function (){var statearr_35688 = state_35611;
(statearr_35688[(13)] = inst_35531);

(statearr_35688[(12)] = inst_35529__$1);

(statearr_35688[(10)] = inst_35530);

return statearr_35688;
})();
return cljs.core.async.ioc_alts_BANG_(state_35611__$1,(22),inst_35532);
} else {
if((state_val_35612 === (31))){
var inst_35586 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
if(cljs.core.truth_(inst_35586)){
var statearr_35689_37596 = state_35611__$1;
(statearr_35689_37596[(1)] = (32));

} else {
var statearr_35690_37597 = state_35611__$1;
(statearr_35690_37597[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (32))){
var inst_35539 = (state_35611[(14)]);
var state_35611__$1 = state_35611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35611__$1,(35),out,inst_35539);
} else {
if((state_val_35612 === (33))){
var inst_35529 = (state_35611[(12)]);
var inst_35495 = inst_35529;
var state_35611__$1 = (function (){var statearr_35691 = state_35611;
(statearr_35691[(7)] = inst_35495);

return statearr_35691;
})();
var statearr_35692_37608 = state_35611__$1;
(statearr_35692_37608[(2)] = null);

(statearr_35692_37608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (13))){
var inst_35495 = (state_35611[(7)]);
var inst_35508 = inst_35495.cljs$lang$protocol_mask$partition0$;
var inst_35509 = (inst_35508 & (64));
var inst_35511 = inst_35495.cljs$core$ISeq$;
var inst_35512 = (cljs.core.PROTOCOL_SENTINEL === inst_35511);
var inst_35513 = ((inst_35509) || (inst_35512));
var state_35611__$1 = state_35611;
if(cljs.core.truth_(inst_35513)){
var statearr_35695_37611 = state_35611__$1;
(statearr_35695_37611[(1)] = (16));

} else {
var statearr_35696_37613 = state_35611__$1;
(statearr_35696_37613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (22))){
var inst_35539 = (state_35611[(14)]);
var inst_35540 = (state_35611[(11)]);
var inst_35538 = (state_35611[(2)]);
var inst_35539__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35538,(0),null);
var inst_35540__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35538,(1),null);
var inst_35545 = (inst_35539__$1 == null);
var inst_35547 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35540__$1,change);
var inst_35548 = ((inst_35545) || (inst_35547));
var state_35611__$1 = (function (){var statearr_35697 = state_35611;
(statearr_35697[(14)] = inst_35539__$1);

(statearr_35697[(11)] = inst_35540__$1);

return statearr_35697;
})();
if(cljs.core.truth_(inst_35548)){
var statearr_35698_37622 = state_35611__$1;
(statearr_35698_37622[(1)] = (23));

} else {
var statearr_35699_37624 = state_35611__$1;
(statearr_35699_37624[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (36))){
var inst_35529 = (state_35611[(12)]);
var inst_35495 = inst_35529;
var state_35611__$1 = (function (){var statearr_35702 = state_35611;
(statearr_35702[(7)] = inst_35495);

return statearr_35702;
})();
var statearr_35703_37625 = state_35611__$1;
(statearr_35703_37625[(2)] = null);

(statearr_35703_37625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (29))){
var inst_35574 = (state_35611[(9)]);
var state_35611__$1 = state_35611;
var statearr_35704_37631 = state_35611__$1;
(statearr_35704_37631[(2)] = inst_35574);

(statearr_35704_37631[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (6))){
var state_35611__$1 = state_35611;
var statearr_35705_37638 = state_35611__$1;
(statearr_35705_37638[(2)] = false);

(statearr_35705_37638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (28))){
var inst_35568 = (state_35611[(2)]);
var inst_35571 = calc_state();
var inst_35495 = inst_35571;
var state_35611__$1 = (function (){var statearr_35708 = state_35611;
(statearr_35708[(7)] = inst_35495);

(statearr_35708[(15)] = inst_35568);

return statearr_35708;
})();
var statearr_35712_37640 = state_35611__$1;
(statearr_35712_37640[(2)] = null);

(statearr_35712_37640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (25))){
var inst_35602 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
var statearr_35716_37642 = state_35611__$1;
(statearr_35716_37642[(2)] = inst_35602);

(statearr_35716_37642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (34))){
var inst_35600 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
var statearr_35717_37648 = state_35611__$1;
(statearr_35717_37648[(2)] = inst_35600);

(statearr_35717_37648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (17))){
var state_35611__$1 = state_35611;
var statearr_35718_37652 = state_35611__$1;
(statearr_35718_37652[(2)] = false);

(statearr_35718_37652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (3))){
var state_35611__$1 = state_35611;
var statearr_35719_37653 = state_35611__$1;
(statearr_35719_37653[(2)] = false);

(statearr_35719_37653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (12))){
var inst_35604 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35611__$1,inst_35604);
} else {
if((state_val_35612 === (2))){
var inst_35464 = (state_35611[(8)]);
var inst_35472 = inst_35464.cljs$lang$protocol_mask$partition0$;
var inst_35473 = (inst_35472 & (64));
var inst_35474 = inst_35464.cljs$core$ISeq$;
var inst_35475 = (cljs.core.PROTOCOL_SENTINEL === inst_35474);
var inst_35476 = ((inst_35473) || (inst_35475));
var state_35611__$1 = state_35611;
if(cljs.core.truth_(inst_35476)){
var statearr_35724_37660 = state_35611__$1;
(statearr_35724_37660[(1)] = (5));

} else {
var statearr_35725_37665 = state_35611__$1;
(statearr_35725_37665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (23))){
var inst_35539 = (state_35611[(14)]);
var inst_35550 = (inst_35539 == null);
var state_35611__$1 = state_35611;
if(cljs.core.truth_(inst_35550)){
var statearr_35728_37668 = state_35611__$1;
(statearr_35728_37668[(1)] = (26));

} else {
var statearr_35729_37669 = state_35611__$1;
(statearr_35729_37669[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (35))){
var inst_35590 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
if(cljs.core.truth_(inst_35590)){
var statearr_35732_37671 = state_35611__$1;
(statearr_35732_37671[(1)] = (36));

} else {
var statearr_35734_37673 = state_35611__$1;
(statearr_35734_37673[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (19))){
var inst_35495 = (state_35611[(7)]);
var inst_35523 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35495);
var state_35611__$1 = state_35611;
var statearr_35735_37678 = state_35611__$1;
(statearr_35735_37678[(2)] = inst_35523);

(statearr_35735_37678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (11))){
var inst_35495 = (state_35611[(7)]);
var inst_35501 = (inst_35495 == null);
var inst_35502 = cljs.core.not(inst_35501);
var state_35611__$1 = state_35611;
if(inst_35502){
var statearr_35737_37683 = state_35611__$1;
(statearr_35737_37683[(1)] = (13));

} else {
var statearr_35738_37684 = state_35611__$1;
(statearr_35738_37684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (9))){
var inst_35464 = (state_35611[(8)]);
var state_35611__$1 = state_35611;
var statearr_35739_37686 = state_35611__$1;
(statearr_35739_37686[(2)] = inst_35464);

(statearr_35739_37686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (5))){
var state_35611__$1 = state_35611;
var statearr_35741_37687 = state_35611__$1;
(statearr_35741_37687[(2)] = true);

(statearr_35741_37687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (14))){
var state_35611__$1 = state_35611;
var statearr_35742_37690 = state_35611__$1;
(statearr_35742_37690[(2)] = false);

(statearr_35742_37690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (26))){
var inst_35540 = (state_35611[(11)]);
var inst_35565 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35540);
var state_35611__$1 = state_35611;
var statearr_35743_37696 = state_35611__$1;
(statearr_35743_37696[(2)] = inst_35565);

(statearr_35743_37696[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (16))){
var state_35611__$1 = state_35611;
var statearr_35745_37698 = state_35611__$1;
(statearr_35745_37698[(2)] = true);

(statearr_35745_37698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (38))){
var inst_35596 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
var statearr_35747_37699 = state_35611__$1;
(statearr_35747_37699[(2)] = inst_35596);

(statearr_35747_37699[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (30))){
var inst_35531 = (state_35611[(13)]);
var inst_35530 = (state_35611[(10)]);
var inst_35540 = (state_35611[(11)]);
var inst_35581 = cljs.core.empty_QMARK_(inst_35530);
var inst_35582 = (inst_35531.cljs$core$IFn$_invoke$arity$1 ? inst_35531.cljs$core$IFn$_invoke$arity$1(inst_35540) : inst_35531.call(null,inst_35540));
var inst_35583 = cljs.core.not(inst_35582);
var inst_35584 = ((inst_35581) && (inst_35583));
var state_35611__$1 = state_35611;
var statearr_35749_37703 = state_35611__$1;
(statearr_35749_37703[(2)] = inst_35584);

(statearr_35749_37703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (10))){
var inst_35464 = (state_35611[(8)]);
var inst_35489 = (state_35611[(2)]);
var inst_35492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35489,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35489,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35489,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35495 = inst_35464;
var state_35611__$1 = (function (){var statearr_35750 = state_35611;
(statearr_35750[(7)] = inst_35495);

(statearr_35750[(16)] = inst_35492);

(statearr_35750[(17)] = inst_35493);

(statearr_35750[(18)] = inst_35494);

return statearr_35750;
})();
var statearr_35752_37706 = state_35611__$1;
(statearr_35752_37706[(2)] = null);

(statearr_35752_37706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (18))){
var inst_35518 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
var statearr_35756_37707 = state_35611__$1;
(statearr_35756_37707[(2)] = inst_35518);

(statearr_35756_37707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (37))){
var state_35611__$1 = state_35611;
var statearr_35759_37708 = state_35611__$1;
(statearr_35759_37708[(2)] = null);

(statearr_35759_37708[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (8))){
var inst_35464 = (state_35611[(8)]);
var inst_35486 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35464);
var state_35611__$1 = state_35611;
var statearr_35762_37711 = state_35611__$1;
(statearr_35762_37711[(2)] = inst_35486);

(statearr_35762_37711[(1)] = (10));


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
var statearr_35766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35766[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35766[(1)] = (1));

return statearr_35766;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35611){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35611);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35768){if((e35768 instanceof Object)){
var ex__34210__auto__ = e35768;
var statearr_35773_37716 = state_35611;
(statearr_35773_37716[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37717 = state_35611;
state_35611 = G__37717;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35611){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35781 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35781[(6)] = c__34274__auto___37553);

return statearr_35781;
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
var G__35802 = arguments.length;
switch (G__35802) {
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
var G__35819 = arguments.length;
switch (G__35819) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35812_SHARP_){
if(cljs.core.truth_((p1__35812_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35812_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35812_SHARP_.call(null,topic)))){
return p1__35812_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35812_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35827 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35828){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35828 = meta35828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35829,meta35828__$1){
var self__ = this;
var _35829__$1 = this;
return (new cljs.core.async.t_cljs$core$async35827(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35828__$1));
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35829){
var self__ = this;
var _35829__$1 = this;
return self__.meta35828;
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35828","meta35828",885589779,null)], null);
}));

(cljs.core.async.t_cljs$core$async35827.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35827");

(cljs.core.async.t_cljs$core$async35827.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35827");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35827.
 */
cljs.core.async.__GT_t_cljs$core$async35827 = (function cljs$core$async$__GT_t_cljs$core$async35827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35828){
return (new cljs.core.async.t_cljs$core$async35827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35828));
});

}

return (new cljs.core.async.t_cljs$core$async35827(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35943){
var state_val_35945 = (state_35943[(1)]);
if((state_val_35945 === (7))){
var inst_35936 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_35947_37773 = state_35943__$1;
(statearr_35947_37773[(2)] = inst_35936);

(statearr_35947_37773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (20))){
var state_35943__$1 = state_35943;
var statearr_35950_37780 = state_35943__$1;
(statearr_35950_37780[(2)] = null);

(statearr_35950_37780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (1))){
var state_35943__$1 = state_35943;
var statearr_35952_37782 = state_35943__$1;
(statearr_35952_37782[(2)] = null);

(statearr_35952_37782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (24))){
var inst_35917 = (state_35943[(7)]);
var inst_35928 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35917);
var state_35943__$1 = state_35943;
var statearr_35955_37784 = state_35943__$1;
(statearr_35955_37784[(2)] = inst_35928);

(statearr_35955_37784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (4))){
var inst_35864 = (state_35943[(8)]);
var inst_35864__$1 = (state_35943[(2)]);
var inst_35865 = (inst_35864__$1 == null);
var state_35943__$1 = (function (){var statearr_35958 = state_35943;
(statearr_35958[(8)] = inst_35864__$1);

return statearr_35958;
})();
if(cljs.core.truth_(inst_35865)){
var statearr_35959_37786 = state_35943__$1;
(statearr_35959_37786[(1)] = (5));

} else {
var statearr_35961_37787 = state_35943__$1;
(statearr_35961_37787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (15))){
var inst_35911 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_35962_37788 = state_35943__$1;
(statearr_35962_37788[(2)] = inst_35911);

(statearr_35962_37788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (21))){
var inst_35933 = (state_35943[(2)]);
var state_35943__$1 = (function (){var statearr_35966 = state_35943;
(statearr_35966[(9)] = inst_35933);

return statearr_35966;
})();
var statearr_35968_37794 = state_35943__$1;
(statearr_35968_37794[(2)] = null);

(statearr_35968_37794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (13))){
var inst_35893 = (state_35943[(10)]);
var inst_35895 = cljs.core.chunked_seq_QMARK_(inst_35893);
var state_35943__$1 = state_35943;
if(inst_35895){
var statearr_35970_37798 = state_35943__$1;
(statearr_35970_37798[(1)] = (16));

} else {
var statearr_35971_37800 = state_35943__$1;
(statearr_35971_37800[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (22))){
var inst_35924 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
if(cljs.core.truth_(inst_35924)){
var statearr_35973_37801 = state_35943__$1;
(statearr_35973_37801[(1)] = (23));

} else {
var statearr_35975_37803 = state_35943__$1;
(statearr_35975_37803[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (6))){
var inst_35917 = (state_35943[(7)]);
var inst_35919 = (state_35943[(11)]);
var inst_35864 = (state_35943[(8)]);
var inst_35917__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35864) : topic_fn.call(null,inst_35864));
var inst_35918 = cljs.core.deref(mults);
var inst_35919__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35918,inst_35917__$1);
var state_35943__$1 = (function (){var statearr_35977 = state_35943;
(statearr_35977[(7)] = inst_35917__$1);

(statearr_35977[(11)] = inst_35919__$1);

return statearr_35977;
})();
if(cljs.core.truth_(inst_35919__$1)){
var statearr_35978_37806 = state_35943__$1;
(statearr_35978_37806[(1)] = (19));

} else {
var statearr_35979_37811 = state_35943__$1;
(statearr_35979_37811[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (25))){
var inst_35930 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_35980_37814 = state_35943__$1;
(statearr_35980_37814[(2)] = inst_35930);

(statearr_35980_37814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (17))){
var inst_35893 = (state_35943[(10)]);
var inst_35902 = cljs.core.first(inst_35893);
var inst_35903 = cljs.core.async.muxch_STAR_(inst_35902);
var inst_35904 = cljs.core.async.close_BANG_(inst_35903);
var inst_35905 = cljs.core.next(inst_35893);
var inst_35875 = inst_35905;
var inst_35876 = null;
var inst_35877 = (0);
var inst_35878 = (0);
var state_35943__$1 = (function (){var statearr_35983 = state_35943;
(statearr_35983[(12)] = inst_35876);

(statearr_35983[(13)] = inst_35875);

(statearr_35983[(14)] = inst_35877);

(statearr_35983[(15)] = inst_35878);

(statearr_35983[(16)] = inst_35904);

return statearr_35983;
})();
var statearr_35985_37817 = state_35943__$1;
(statearr_35985_37817[(2)] = null);

(statearr_35985_37817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (3))){
var inst_35938 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35943__$1,inst_35938);
} else {
if((state_val_35945 === (12))){
var inst_35913 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_35986_37826 = state_35943__$1;
(statearr_35986_37826[(2)] = inst_35913);

(statearr_35986_37826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (2))){
var state_35943__$1 = state_35943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35943__$1,(4),ch);
} else {
if((state_val_35945 === (23))){
var state_35943__$1 = state_35943;
var statearr_35989_37827 = state_35943__$1;
(statearr_35989_37827[(2)] = null);

(statearr_35989_37827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (19))){
var inst_35919 = (state_35943[(11)]);
var inst_35864 = (state_35943[(8)]);
var inst_35922 = cljs.core.async.muxch_STAR_(inst_35919);
var state_35943__$1 = state_35943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35943__$1,(22),inst_35922,inst_35864);
} else {
if((state_val_35945 === (11))){
var inst_35875 = (state_35943[(13)]);
var inst_35893 = (state_35943[(10)]);
var inst_35893__$1 = cljs.core.seq(inst_35875);
var state_35943__$1 = (function (){var statearr_35991 = state_35943;
(statearr_35991[(10)] = inst_35893__$1);

return statearr_35991;
})();
if(inst_35893__$1){
var statearr_35992_37830 = state_35943__$1;
(statearr_35992_37830[(1)] = (13));

} else {
var statearr_35995_37833 = state_35943__$1;
(statearr_35995_37833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (9))){
var inst_35915 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_35997_37835 = state_35943__$1;
(statearr_35997_37835[(2)] = inst_35915);

(statearr_35997_37835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (5))){
var inst_35872 = cljs.core.deref(mults);
var inst_35873 = cljs.core.vals(inst_35872);
var inst_35874 = cljs.core.seq(inst_35873);
var inst_35875 = inst_35874;
var inst_35876 = null;
var inst_35877 = (0);
var inst_35878 = (0);
var state_35943__$1 = (function (){var statearr_35998 = state_35943;
(statearr_35998[(12)] = inst_35876);

(statearr_35998[(13)] = inst_35875);

(statearr_35998[(14)] = inst_35877);

(statearr_35998[(15)] = inst_35878);

return statearr_35998;
})();
var statearr_35999_37840 = state_35943__$1;
(statearr_35999_37840[(2)] = null);

(statearr_35999_37840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (14))){
var state_35943__$1 = state_35943;
var statearr_36008_37842 = state_35943__$1;
(statearr_36008_37842[(2)] = null);

(statearr_36008_37842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (16))){
var inst_35893 = (state_35943[(10)]);
var inst_35897 = cljs.core.chunk_first(inst_35893);
var inst_35898 = cljs.core.chunk_rest(inst_35893);
var inst_35899 = cljs.core.count(inst_35897);
var inst_35875 = inst_35898;
var inst_35876 = inst_35897;
var inst_35877 = inst_35899;
var inst_35878 = (0);
var state_35943__$1 = (function (){var statearr_36011 = state_35943;
(statearr_36011[(12)] = inst_35876);

(statearr_36011[(13)] = inst_35875);

(statearr_36011[(14)] = inst_35877);

(statearr_36011[(15)] = inst_35878);

return statearr_36011;
})();
var statearr_36013_37850 = state_35943__$1;
(statearr_36013_37850[(2)] = null);

(statearr_36013_37850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (10))){
var inst_35876 = (state_35943[(12)]);
var inst_35875 = (state_35943[(13)]);
var inst_35877 = (state_35943[(14)]);
var inst_35878 = (state_35943[(15)]);
var inst_35885 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35876,inst_35878);
var inst_35887 = cljs.core.async.muxch_STAR_(inst_35885);
var inst_35888 = cljs.core.async.close_BANG_(inst_35887);
var inst_35890 = (inst_35878 + (1));
var tmp36003 = inst_35876;
var tmp36004 = inst_35875;
var tmp36005 = inst_35877;
var inst_35875__$1 = tmp36004;
var inst_35876__$1 = tmp36003;
var inst_35877__$1 = tmp36005;
var inst_35878__$1 = inst_35890;
var state_35943__$1 = (function (){var statearr_36018 = state_35943;
(statearr_36018[(17)] = inst_35888);

(statearr_36018[(12)] = inst_35876__$1);

(statearr_36018[(13)] = inst_35875__$1);

(statearr_36018[(14)] = inst_35877__$1);

(statearr_36018[(15)] = inst_35878__$1);

return statearr_36018;
})();
var statearr_36022_37857 = state_35943__$1;
(statearr_36022_37857[(2)] = null);

(statearr_36022_37857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (18))){
var inst_35908 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_36023_37859 = state_35943__$1;
(statearr_36023_37859[(2)] = inst_35908);

(statearr_36023_37859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35945 === (8))){
var inst_35877 = (state_35943[(14)]);
var inst_35878 = (state_35943[(15)]);
var inst_35881 = (inst_35878 < inst_35877);
var inst_35882 = inst_35881;
var state_35943__$1 = state_35943;
if(cljs.core.truth_(inst_35882)){
var statearr_36027_37864 = state_35943__$1;
(statearr_36027_37864[(1)] = (10));

} else {
var statearr_36029_37865 = state_35943__$1;
(statearr_36029_37865[(1)] = (11));

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
var statearr_36033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36033[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36033[(1)] = (1));

return statearr_36033;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35943){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35943);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36035){if((e36035 instanceof Object)){
var ex__34210__auto__ = e36035;
var statearr_36036_37871 = state_35943;
(statearr_36036_37871[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37875 = state_35943;
state_35943 = G__37875;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36037 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36037[(6)] = c__34274__auto___37770);

return statearr_36037;
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
var G__36043 = arguments.length;
switch (G__36043) {
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
var G__36051 = arguments.length;
switch (G__36051) {
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
var G__36053 = arguments.length;
switch (G__36053) {
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
var c__34274__auto___37897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36115){
var state_val_36116 = (state_36115[(1)]);
if((state_val_36116 === (7))){
var state_36115__$1 = state_36115;
var statearr_36117_37900 = state_36115__$1;
(statearr_36117_37900[(2)] = null);

(statearr_36117_37900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (1))){
var state_36115__$1 = state_36115;
var statearr_36118_37903 = state_36115__$1;
(statearr_36118_37903[(2)] = null);

(statearr_36118_37903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (4))){
var inst_36066 = (state_36115[(7)]);
var inst_36068 = (inst_36066 < cnt);
var state_36115__$1 = state_36115;
if(cljs.core.truth_(inst_36068)){
var statearr_36119_37905 = state_36115__$1;
(statearr_36119_37905[(1)] = (6));

} else {
var statearr_36120_37906 = state_36115__$1;
(statearr_36120_37906[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (15))){
var inst_36111 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36128_37909 = state_36115__$1;
(statearr_36128_37909[(2)] = inst_36111);

(statearr_36128_37909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (13))){
var inst_36104 = cljs.core.async.close_BANG_(out);
var state_36115__$1 = state_36115;
var statearr_36129_37912 = state_36115__$1;
(statearr_36129_37912[(2)] = inst_36104);

(statearr_36129_37912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (6))){
var state_36115__$1 = state_36115;
var statearr_36130_37913 = state_36115__$1;
(statearr_36130_37913[(2)] = null);

(statearr_36130_37913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (3))){
var inst_36113 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36115__$1,inst_36113);
} else {
if((state_val_36116 === (12))){
var inst_36095 = (state_36115[(8)]);
var inst_36095__$1 = (state_36115[(2)]);
var inst_36096 = cljs.core.some(cljs.core.nil_QMARK_,inst_36095__$1);
var state_36115__$1 = (function (){var statearr_36138 = state_36115;
(statearr_36138[(8)] = inst_36095__$1);

return statearr_36138;
})();
if(cljs.core.truth_(inst_36096)){
var statearr_36139_37919 = state_36115__$1;
(statearr_36139_37919[(1)] = (13));

} else {
var statearr_36140_37920 = state_36115__$1;
(statearr_36140_37920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (2))){
var inst_36065 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36066 = (0);
var state_36115__$1 = (function (){var statearr_36143 = state_36115;
(statearr_36143[(7)] = inst_36066);

(statearr_36143[(9)] = inst_36065);

return statearr_36143;
})();
var statearr_36144_37922 = state_36115__$1;
(statearr_36144_37922[(2)] = null);

(statearr_36144_37922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (11))){
var inst_36066 = (state_36115[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36115,(10),Object,null,(9));
var inst_36078 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36066) : chs__$1.call(null,inst_36066));
var inst_36079 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36066) : done.call(null,inst_36066));
var inst_36080 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36078,inst_36079);
var state_36115__$1 = state_36115;
var statearr_36146_37927 = state_36115__$1;
(statearr_36146_37927[(2)] = inst_36080);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (9))){
var inst_36066 = (state_36115[(7)]);
var inst_36082 = (state_36115[(2)]);
var inst_36083 = (inst_36066 + (1));
var inst_36066__$1 = inst_36083;
var state_36115__$1 = (function (){var statearr_36149 = state_36115;
(statearr_36149[(7)] = inst_36066__$1);

(statearr_36149[(10)] = inst_36082);

return statearr_36149;
})();
var statearr_36151_37933 = state_36115__$1;
(statearr_36151_37933[(2)] = null);

(statearr_36151_37933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (5))){
var inst_36093 = (state_36115[(2)]);
var state_36115__$1 = (function (){var statearr_36155 = state_36115;
(statearr_36155[(11)] = inst_36093);

return statearr_36155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36115__$1,(12),dchan);
} else {
if((state_val_36116 === (14))){
var inst_36095 = (state_36115[(8)]);
var inst_36106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36095);
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36115__$1,(16),out,inst_36106);
} else {
if((state_val_36116 === (16))){
var inst_36108 = (state_36115[(2)]);
var state_36115__$1 = (function (){var statearr_36159 = state_36115;
(statearr_36159[(12)] = inst_36108);

return statearr_36159;
})();
var statearr_36160_37943 = state_36115__$1;
(statearr_36160_37943[(2)] = null);

(statearr_36160_37943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (10))){
var inst_36071 = (state_36115[(2)]);
var inst_36072 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36115__$1 = (function (){var statearr_36162 = state_36115;
(statearr_36162[(13)] = inst_36071);

return statearr_36162;
})();
var statearr_36167_37947 = state_36115__$1;
(statearr_36167_37947[(2)] = inst_36072);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (8))){
var inst_36091 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36174_37949 = state_36115__$1;
(statearr_36174_37949[(2)] = inst_36091);

(statearr_36174_37949[(1)] = (5));


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
var statearr_36175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36175[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36175[(1)] = (1));

return statearr_36175;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36115){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36115);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36176){if((e36176 instanceof Object)){
var ex__34210__auto__ = e36176;
var statearr_36178_37953 = state_36115;
(statearr_36178_37953[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36176;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37956 = state_36115;
state_36115 = G__37956;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36180 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36180[(6)] = c__34274__auto___37897);

return statearr_36180;
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
var G__36201 = arguments.length;
switch (G__36201) {
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
var c__34274__auto___37961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36238){
var state_val_36239 = (state_36238[(1)]);
if((state_val_36239 === (7))){
var inst_36215 = (state_36238[(7)]);
var inst_36216 = (state_36238[(8)]);
var inst_36215__$1 = (state_36238[(2)]);
var inst_36216__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36215__$1,(0),null);
var inst_36217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36215__$1,(1),null);
var inst_36218 = (inst_36216__$1 == null);
var state_36238__$1 = (function (){var statearr_36242 = state_36238;
(statearr_36242[(7)] = inst_36215__$1);

(statearr_36242[(8)] = inst_36216__$1);

(statearr_36242[(9)] = inst_36217);

return statearr_36242;
})();
if(cljs.core.truth_(inst_36218)){
var statearr_36244_37965 = state_36238__$1;
(statearr_36244_37965[(1)] = (8));

} else {
var statearr_36245_37966 = state_36238__$1;
(statearr_36245_37966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (1))){
var inst_36204 = cljs.core.vec(chs);
var inst_36205 = inst_36204;
var state_36238__$1 = (function (){var statearr_36246 = state_36238;
(statearr_36246[(10)] = inst_36205);

return statearr_36246;
})();
var statearr_36247_37971 = state_36238__$1;
(statearr_36247_37971[(2)] = null);

(statearr_36247_37971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (4))){
var inst_36205 = (state_36238[(10)]);
var state_36238__$1 = state_36238;
return cljs.core.async.ioc_alts_BANG_(state_36238__$1,(7),inst_36205);
} else {
if((state_val_36239 === (6))){
var inst_36233 = (state_36238[(2)]);
var state_36238__$1 = state_36238;
var statearr_36248_37974 = state_36238__$1;
(statearr_36248_37974[(2)] = inst_36233);

(statearr_36248_37974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (3))){
var inst_36235 = (state_36238[(2)]);
var state_36238__$1 = state_36238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36238__$1,inst_36235);
} else {
if((state_val_36239 === (2))){
var inst_36205 = (state_36238[(10)]);
var inst_36207 = cljs.core.count(inst_36205);
var inst_36208 = (inst_36207 > (0));
var state_36238__$1 = state_36238;
if(cljs.core.truth_(inst_36208)){
var statearr_36252_37976 = state_36238__$1;
(statearr_36252_37976[(1)] = (4));

} else {
var statearr_36254_37977 = state_36238__$1;
(statearr_36254_37977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (11))){
var inst_36205 = (state_36238[(10)]);
var inst_36226 = (state_36238[(2)]);
var tmp36251 = inst_36205;
var inst_36205__$1 = tmp36251;
var state_36238__$1 = (function (){var statearr_36258 = state_36238;
(statearr_36258[(10)] = inst_36205__$1);

(statearr_36258[(11)] = inst_36226);

return statearr_36258;
})();
var statearr_36259_37978 = state_36238__$1;
(statearr_36259_37978[(2)] = null);

(statearr_36259_37978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (9))){
var inst_36216 = (state_36238[(8)]);
var state_36238__$1 = state_36238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36238__$1,(11),out,inst_36216);
} else {
if((state_val_36239 === (5))){
var inst_36231 = cljs.core.async.close_BANG_(out);
var state_36238__$1 = state_36238;
var statearr_36268_37982 = state_36238__$1;
(statearr_36268_37982[(2)] = inst_36231);

(statearr_36268_37982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (10))){
var inst_36229 = (state_36238[(2)]);
var state_36238__$1 = state_36238;
var statearr_36269_37985 = state_36238__$1;
(statearr_36269_37985[(2)] = inst_36229);

(statearr_36269_37985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (8))){
var inst_36215 = (state_36238[(7)]);
var inst_36216 = (state_36238[(8)]);
var inst_36217 = (state_36238[(9)]);
var inst_36205 = (state_36238[(10)]);
var inst_36221 = (function (){var cs = inst_36205;
var vec__36211 = inst_36215;
var v = inst_36216;
var c = inst_36217;
return (function (p1__36182_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36182_SHARP_);
});
})();
var inst_36222 = cljs.core.filterv(inst_36221,inst_36205);
var inst_36205__$1 = inst_36222;
var state_36238__$1 = (function (){var statearr_36272 = state_36238;
(statearr_36272[(10)] = inst_36205__$1);

return statearr_36272;
})();
var statearr_36274_37986 = state_36238__$1;
(statearr_36274_37986[(2)] = null);

(statearr_36274_37986[(1)] = (2));


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
var statearr_36276 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36276[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36276[(1)] = (1));

return statearr_36276;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36238){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36238);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36278){if((e36278 instanceof Object)){
var ex__34210__auto__ = e36278;
var statearr_36279_37990 = state_36238;
(statearr_36279_37990[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37991 = state_36238;
state_36238 = G__37991;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36281 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36281[(6)] = c__34274__auto___37961);

return statearr_36281;
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
var G__36286 = arguments.length;
switch (G__36286) {
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
var c__34274__auto___37997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36319){
var state_val_36320 = (state_36319[(1)]);
if((state_val_36320 === (7))){
var inst_36301 = (state_36319[(7)]);
var inst_36301__$1 = (state_36319[(2)]);
var inst_36302 = (inst_36301__$1 == null);
var inst_36303 = cljs.core.not(inst_36302);
var state_36319__$1 = (function (){var statearr_36324 = state_36319;
(statearr_36324[(7)] = inst_36301__$1);

return statearr_36324;
})();
if(inst_36303){
var statearr_36325_37999 = state_36319__$1;
(statearr_36325_37999[(1)] = (8));

} else {
var statearr_36327_38000 = state_36319__$1;
(statearr_36327_38000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (1))){
var inst_36296 = (0);
var state_36319__$1 = (function (){var statearr_36329 = state_36319;
(statearr_36329[(8)] = inst_36296);

return statearr_36329;
})();
var statearr_36330_38001 = state_36319__$1;
(statearr_36330_38001[(2)] = null);

(statearr_36330_38001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (4))){
var state_36319__$1 = state_36319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36319__$1,(7),ch);
} else {
if((state_val_36320 === (6))){
var inst_36314 = (state_36319[(2)]);
var state_36319__$1 = state_36319;
var statearr_36331_38006 = state_36319__$1;
(statearr_36331_38006[(2)] = inst_36314);

(statearr_36331_38006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (3))){
var inst_36316 = (state_36319[(2)]);
var inst_36317 = cljs.core.async.close_BANG_(out);
var state_36319__$1 = (function (){var statearr_36333 = state_36319;
(statearr_36333[(9)] = inst_36316);

return statearr_36333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36319__$1,inst_36317);
} else {
if((state_val_36320 === (2))){
var inst_36296 = (state_36319[(8)]);
var inst_36298 = (inst_36296 < n);
var state_36319__$1 = state_36319;
if(cljs.core.truth_(inst_36298)){
var statearr_36335_38007 = state_36319__$1;
(statearr_36335_38007[(1)] = (4));

} else {
var statearr_36336_38008 = state_36319__$1;
(statearr_36336_38008[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (11))){
var inst_36296 = (state_36319[(8)]);
var inst_36306 = (state_36319[(2)]);
var inst_36307 = (inst_36296 + (1));
var inst_36296__$1 = inst_36307;
var state_36319__$1 = (function (){var statearr_36338 = state_36319;
(statearr_36338[(10)] = inst_36306);

(statearr_36338[(8)] = inst_36296__$1);

return statearr_36338;
})();
var statearr_36339_38009 = state_36319__$1;
(statearr_36339_38009[(2)] = null);

(statearr_36339_38009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (9))){
var state_36319__$1 = state_36319;
var statearr_36340_38010 = state_36319__$1;
(statearr_36340_38010[(2)] = null);

(statearr_36340_38010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (5))){
var state_36319__$1 = state_36319;
var statearr_36341_38011 = state_36319__$1;
(statearr_36341_38011[(2)] = null);

(statearr_36341_38011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (10))){
var inst_36311 = (state_36319[(2)]);
var state_36319__$1 = state_36319;
var statearr_36345_38012 = state_36319__$1;
(statearr_36345_38012[(2)] = inst_36311);

(statearr_36345_38012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (8))){
var inst_36301 = (state_36319[(7)]);
var state_36319__$1 = state_36319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36319__$1,(11),out,inst_36301);
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
var statearr_36347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36347[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36347[(1)] = (1));

return statearr_36347;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36319){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36319);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36349){if((e36349 instanceof Object)){
var ex__34210__auto__ = e36349;
var statearr_36350_38017 = state_36319;
(statearr_36350_38017[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38019 = state_36319;
state_36319 = G__38019;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36352 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36352[(6)] = c__34274__auto___37997);

return statearr_36352;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36358 = (function (f,ch,meta36359){
this.f = f;
this.ch = ch;
this.meta36359 = meta36359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36360,meta36359__$1){
var self__ = this;
var _36360__$1 = this;
return (new cljs.core.async.t_cljs$core$async36358(self__.f,self__.ch,meta36359__$1));
}));

(cljs.core.async.t_cljs$core$async36358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36360){
var self__ = this;
var _36360__$1 = this;
return self__.meta36359;
}));

(cljs.core.async.t_cljs$core$async36358.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36358.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36358.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36358.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36358.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36370 = (function (f,ch,meta36359,_,fn1,meta36371){
this.f = f;
this.ch = ch;
this.meta36359 = meta36359;
this._ = _;
this.fn1 = fn1;
this.meta36371 = meta36371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36372,meta36371__$1){
var self__ = this;
var _36372__$1 = this;
return (new cljs.core.async.t_cljs$core$async36370(self__.f,self__.ch,self__.meta36359,self__._,self__.fn1,meta36371__$1));
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36372){
var self__ = this;
var _36372__$1 = this;
return self__.meta36371;
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36354_SHARP_){
var G__36376 = (((p1__36354_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36354_SHARP_) : self__.f.call(null,p1__36354_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36376) : f1.call(null,G__36376));
});
}));

(cljs.core.async.t_cljs$core$async36370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36359","meta36359",-784498897,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36358","cljs.core.async/t_cljs$core$async36358",-544882635,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36371","meta36371",1376530487,null)], null);
}));

(cljs.core.async.t_cljs$core$async36370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36370");

(cljs.core.async.t_cljs$core$async36370.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36370.
 */
cljs.core.async.__GT_t_cljs$core$async36370 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36370(f__$1,ch__$1,meta36359__$1,___$2,fn1__$1,meta36371){
return (new cljs.core.async.t_cljs$core$async36370(f__$1,ch__$1,meta36359__$1,___$2,fn1__$1,meta36371));
});

}

return (new cljs.core.async.t_cljs$core$async36370(self__.f,self__.ch,self__.meta36359,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36389 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36389) : self__.f.call(null,G__36389));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36358.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36358.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36359","meta36359",-784498897,null)], null);
}));

(cljs.core.async.t_cljs$core$async36358.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36358");

(cljs.core.async.t_cljs$core$async36358.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36358");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36358.
 */
cljs.core.async.__GT_t_cljs$core$async36358 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36358(f__$1,ch__$1,meta36359){
return (new cljs.core.async.t_cljs$core$async36358(f__$1,ch__$1,meta36359));
});

}

return (new cljs.core.async.t_cljs$core$async36358(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36401 = (function (f,ch,meta36402){
this.f = f;
this.ch = ch;
this.meta36402 = meta36402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36403,meta36402__$1){
var self__ = this;
var _36403__$1 = this;
return (new cljs.core.async.t_cljs$core$async36401(self__.f,self__.ch,meta36402__$1));
}));

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36403){
var self__ = this;
var _36403__$1 = this;
return self__.meta36402;
}));

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36402","meta36402",-21403131,null)], null);
}));

(cljs.core.async.t_cljs$core$async36401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36401");

(cljs.core.async.t_cljs$core$async36401.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36401.
 */
cljs.core.async.__GT_t_cljs$core$async36401 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36401(f__$1,ch__$1,meta36402){
return (new cljs.core.async.t_cljs$core$async36401(f__$1,ch__$1,meta36402));
});

}

return (new cljs.core.async.t_cljs$core$async36401(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36419 = (function (p,ch,meta36420){
this.p = p;
this.ch = ch;
this.meta36420 = meta36420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36421,meta36420__$1){
var self__ = this;
var _36421__$1 = this;
return (new cljs.core.async.t_cljs$core$async36419(self__.p,self__.ch,meta36420__$1));
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36421){
var self__ = this;
var _36421__$1 = this;
return self__.meta36420;
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36420","meta36420",191534355,null)], null);
}));

(cljs.core.async.t_cljs$core$async36419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36419");

(cljs.core.async.t_cljs$core$async36419.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36419.
 */
cljs.core.async.__GT_t_cljs$core$async36419 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36419(p__$1,ch__$1,meta36420){
return (new cljs.core.async.t_cljs$core$async36419(p__$1,ch__$1,meta36420));
});

}

return (new cljs.core.async.t_cljs$core$async36419(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36435 = arguments.length;
switch (G__36435) {
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
var c__34274__auto___38047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36461){
var state_val_36462 = (state_36461[(1)]);
if((state_val_36462 === (7))){
var inst_36457 = (state_36461[(2)]);
var state_36461__$1 = state_36461;
var statearr_36464_38049 = state_36461__$1;
(statearr_36464_38049[(2)] = inst_36457);

(statearr_36464_38049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (1))){
var state_36461__$1 = state_36461;
var statearr_36466_38051 = state_36461__$1;
(statearr_36466_38051[(2)] = null);

(statearr_36466_38051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (4))){
var inst_36440 = (state_36461[(7)]);
var inst_36440__$1 = (state_36461[(2)]);
var inst_36441 = (inst_36440__$1 == null);
var state_36461__$1 = (function (){var statearr_36467 = state_36461;
(statearr_36467[(7)] = inst_36440__$1);

return statearr_36467;
})();
if(cljs.core.truth_(inst_36441)){
var statearr_36468_38052 = state_36461__$1;
(statearr_36468_38052[(1)] = (5));

} else {
var statearr_36469_38053 = state_36461__$1;
(statearr_36469_38053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (6))){
var inst_36440 = (state_36461[(7)]);
var inst_36445 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36440) : p.call(null,inst_36440));
var state_36461__$1 = state_36461;
if(cljs.core.truth_(inst_36445)){
var statearr_36471_38054 = state_36461__$1;
(statearr_36471_38054[(1)] = (8));

} else {
var statearr_36472_38055 = state_36461__$1;
(statearr_36472_38055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (3))){
var inst_36459 = (state_36461[(2)]);
var state_36461__$1 = state_36461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36461__$1,inst_36459);
} else {
if((state_val_36462 === (2))){
var state_36461__$1 = state_36461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36461__$1,(4),ch);
} else {
if((state_val_36462 === (11))){
var inst_36450 = (state_36461[(2)]);
var state_36461__$1 = state_36461;
var statearr_36474_38058 = state_36461__$1;
(statearr_36474_38058[(2)] = inst_36450);

(statearr_36474_38058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (9))){
var state_36461__$1 = state_36461;
var statearr_36475_38060 = state_36461__$1;
(statearr_36475_38060[(2)] = null);

(statearr_36475_38060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (5))){
var inst_36443 = cljs.core.async.close_BANG_(out);
var state_36461__$1 = state_36461;
var statearr_36479_38061 = state_36461__$1;
(statearr_36479_38061[(2)] = inst_36443);

(statearr_36479_38061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (10))){
var inst_36453 = (state_36461[(2)]);
var state_36461__$1 = (function (){var statearr_36481 = state_36461;
(statearr_36481[(8)] = inst_36453);

return statearr_36481;
})();
var statearr_36482_38062 = state_36461__$1;
(statearr_36482_38062[(2)] = null);

(statearr_36482_38062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (8))){
var inst_36440 = (state_36461[(7)]);
var state_36461__$1 = state_36461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36461__$1,(11),out,inst_36440);
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
var statearr_36484 = [null,null,null,null,null,null,null,null,null];
(statearr_36484[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36484[(1)] = (1));

return statearr_36484;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36461){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36461);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36485){if((e36485 instanceof Object)){
var ex__34210__auto__ = e36485;
var statearr_36486_38066 = state_36461;
(statearr_36486_38066[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38067 = state_36461;
state_36461 = G__38067;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36488 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36488[(6)] = c__34274__auto___38047);

return statearr_36488;
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
var G__36491 = arguments.length;
switch (G__36491) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36558){
var state_val_36559 = (state_36558[(1)]);
if((state_val_36559 === (7))){
var inst_36553 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36563_38073 = state_36558__$1;
(statearr_36563_38073[(2)] = inst_36553);

(statearr_36563_38073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (20))){
var inst_36523 = (state_36558[(7)]);
var inst_36534 = (state_36558[(2)]);
var inst_36535 = cljs.core.next(inst_36523);
var inst_36508 = inst_36535;
var inst_36509 = null;
var inst_36510 = (0);
var inst_36511 = (0);
var state_36558__$1 = (function (){var statearr_36564 = state_36558;
(statearr_36564[(8)] = inst_36509);

(statearr_36564[(9)] = inst_36510);

(statearr_36564[(10)] = inst_36511);

(statearr_36564[(11)] = inst_36534);

(statearr_36564[(12)] = inst_36508);

return statearr_36564;
})();
var statearr_36566_38076 = state_36558__$1;
(statearr_36566_38076[(2)] = null);

(statearr_36566_38076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (1))){
var state_36558__$1 = state_36558;
var statearr_36567_38077 = state_36558__$1;
(statearr_36567_38077[(2)] = null);

(statearr_36567_38077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (4))){
var inst_36497 = (state_36558[(13)]);
var inst_36497__$1 = (state_36558[(2)]);
var inst_36498 = (inst_36497__$1 == null);
var state_36558__$1 = (function (){var statearr_36568 = state_36558;
(statearr_36568[(13)] = inst_36497__$1);

return statearr_36568;
})();
if(cljs.core.truth_(inst_36498)){
var statearr_36569_38079 = state_36558__$1;
(statearr_36569_38079[(1)] = (5));

} else {
var statearr_36571_38081 = state_36558__$1;
(statearr_36571_38081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (15))){
var state_36558__$1 = state_36558;
var statearr_36575_38083 = state_36558__$1;
(statearr_36575_38083[(2)] = null);

(statearr_36575_38083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (21))){
var state_36558__$1 = state_36558;
var statearr_36576_38084 = state_36558__$1;
(statearr_36576_38084[(2)] = null);

(statearr_36576_38084[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (13))){
var inst_36509 = (state_36558[(8)]);
var inst_36510 = (state_36558[(9)]);
var inst_36511 = (state_36558[(10)]);
var inst_36508 = (state_36558[(12)]);
var inst_36518 = (state_36558[(2)]);
var inst_36519 = (inst_36511 + (1));
var tmp36572 = inst_36509;
var tmp36573 = inst_36510;
var tmp36574 = inst_36508;
var inst_36508__$1 = tmp36574;
var inst_36509__$1 = tmp36572;
var inst_36510__$1 = tmp36573;
var inst_36511__$1 = inst_36519;
var state_36558__$1 = (function (){var statearr_36578 = state_36558;
(statearr_36578[(8)] = inst_36509__$1);

(statearr_36578[(9)] = inst_36510__$1);

(statearr_36578[(10)] = inst_36511__$1);

(statearr_36578[(12)] = inst_36508__$1);

(statearr_36578[(14)] = inst_36518);

return statearr_36578;
})();
var statearr_36580_38087 = state_36558__$1;
(statearr_36580_38087[(2)] = null);

(statearr_36580_38087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (22))){
var state_36558__$1 = state_36558;
var statearr_36581_38089 = state_36558__$1;
(statearr_36581_38089[(2)] = null);

(statearr_36581_38089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (6))){
var inst_36497 = (state_36558[(13)]);
var inst_36506 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36497) : f.call(null,inst_36497));
var inst_36507 = cljs.core.seq(inst_36506);
var inst_36508 = inst_36507;
var inst_36509 = null;
var inst_36510 = (0);
var inst_36511 = (0);
var state_36558__$1 = (function (){var statearr_36583 = state_36558;
(statearr_36583[(8)] = inst_36509);

(statearr_36583[(9)] = inst_36510);

(statearr_36583[(10)] = inst_36511);

(statearr_36583[(12)] = inst_36508);

return statearr_36583;
})();
var statearr_36584_38091 = state_36558__$1;
(statearr_36584_38091[(2)] = null);

(statearr_36584_38091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (17))){
var inst_36523 = (state_36558[(7)]);
var inst_36527 = cljs.core.chunk_first(inst_36523);
var inst_36528 = cljs.core.chunk_rest(inst_36523);
var inst_36529 = cljs.core.count(inst_36527);
var inst_36508 = inst_36528;
var inst_36509 = inst_36527;
var inst_36510 = inst_36529;
var inst_36511 = (0);
var state_36558__$1 = (function (){var statearr_36586 = state_36558;
(statearr_36586[(8)] = inst_36509);

(statearr_36586[(9)] = inst_36510);

(statearr_36586[(10)] = inst_36511);

(statearr_36586[(12)] = inst_36508);

return statearr_36586;
})();
var statearr_36587_38094 = state_36558__$1;
(statearr_36587_38094[(2)] = null);

(statearr_36587_38094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (3))){
var inst_36555 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36558__$1,inst_36555);
} else {
if((state_val_36559 === (12))){
var inst_36543 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36588_38095 = state_36558__$1;
(statearr_36588_38095[(2)] = inst_36543);

(statearr_36588_38095[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (2))){
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36558__$1,(4),in$);
} else {
if((state_val_36559 === (23))){
var inst_36551 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36590_38098 = state_36558__$1;
(statearr_36590_38098[(2)] = inst_36551);

(statearr_36590_38098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (19))){
var inst_36538 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36591_38100 = state_36558__$1;
(statearr_36591_38100[(2)] = inst_36538);

(statearr_36591_38100[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (11))){
var inst_36508 = (state_36558[(12)]);
var inst_36523 = (state_36558[(7)]);
var inst_36523__$1 = cljs.core.seq(inst_36508);
var state_36558__$1 = (function (){var statearr_36593 = state_36558;
(statearr_36593[(7)] = inst_36523__$1);

return statearr_36593;
})();
if(inst_36523__$1){
var statearr_36594_38101 = state_36558__$1;
(statearr_36594_38101[(1)] = (14));

} else {
var statearr_36595_38102 = state_36558__$1;
(statearr_36595_38102[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (9))){
var inst_36545 = (state_36558[(2)]);
var inst_36546 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36558__$1 = (function (){var statearr_36596 = state_36558;
(statearr_36596[(15)] = inst_36545);

return statearr_36596;
})();
if(cljs.core.truth_(inst_36546)){
var statearr_36598_38104 = state_36558__$1;
(statearr_36598_38104[(1)] = (21));

} else {
var statearr_36599_38106 = state_36558__$1;
(statearr_36599_38106[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (5))){
var inst_36500 = cljs.core.async.close_BANG_(out);
var state_36558__$1 = state_36558;
var statearr_36600_38108 = state_36558__$1;
(statearr_36600_38108[(2)] = inst_36500);

(statearr_36600_38108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (14))){
var inst_36523 = (state_36558[(7)]);
var inst_36525 = cljs.core.chunked_seq_QMARK_(inst_36523);
var state_36558__$1 = state_36558;
if(inst_36525){
var statearr_36602_38109 = state_36558__$1;
(statearr_36602_38109[(1)] = (17));

} else {
var statearr_36603_38110 = state_36558__$1;
(statearr_36603_38110[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (16))){
var inst_36541 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36604_38111 = state_36558__$1;
(statearr_36604_38111[(2)] = inst_36541);

(statearr_36604_38111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (10))){
var inst_36509 = (state_36558[(8)]);
var inst_36511 = (state_36558[(10)]);
var inst_36516 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36509,inst_36511);
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36558__$1,(13),out,inst_36516);
} else {
if((state_val_36559 === (18))){
var inst_36523 = (state_36558[(7)]);
var inst_36532 = cljs.core.first(inst_36523);
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36558__$1,(20),out,inst_36532);
} else {
if((state_val_36559 === (8))){
var inst_36510 = (state_36558[(9)]);
var inst_36511 = (state_36558[(10)]);
var inst_36513 = (inst_36511 < inst_36510);
var inst_36514 = inst_36513;
var state_36558__$1 = state_36558;
if(cljs.core.truth_(inst_36514)){
var statearr_36606_38115 = state_36558__$1;
(statearr_36606_38115[(1)] = (10));

} else {
var statearr_36607_38116 = state_36558__$1;
(statearr_36607_38116[(1)] = (11));

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
var statearr_36609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36609[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36609[(1)] = (1));

return statearr_36609;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36558){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36558);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36610){if((e36610 instanceof Object)){
var ex__34210__auto__ = e36610;
var statearr_36612_38119 = state_36558;
(statearr_36612_38119[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38121 = state_36558;
state_36558 = G__38121;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36558){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36613 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36613[(6)] = c__34274__auto__);

return statearr_36613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36616 = arguments.length;
switch (G__36616) {
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
var G__36620 = arguments.length;
switch (G__36620) {
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
var G__36625 = arguments.length;
switch (G__36625) {
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
var c__34274__auto___38131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36651){
var state_val_36652 = (state_36651[(1)]);
if((state_val_36652 === (7))){
var inst_36646 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
var statearr_36654_38132 = state_36651__$1;
(statearr_36654_38132[(2)] = inst_36646);

(statearr_36654_38132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (1))){
var inst_36627 = null;
var state_36651__$1 = (function (){var statearr_36655 = state_36651;
(statearr_36655[(7)] = inst_36627);

return statearr_36655;
})();
var statearr_36656_38134 = state_36651__$1;
(statearr_36656_38134[(2)] = null);

(statearr_36656_38134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (4))){
var inst_36630 = (state_36651[(8)]);
var inst_36630__$1 = (state_36651[(2)]);
var inst_36632 = (inst_36630__$1 == null);
var inst_36633 = cljs.core.not(inst_36632);
var state_36651__$1 = (function (){var statearr_36658 = state_36651;
(statearr_36658[(8)] = inst_36630__$1);

return statearr_36658;
})();
if(inst_36633){
var statearr_36659_38137 = state_36651__$1;
(statearr_36659_38137[(1)] = (5));

} else {
var statearr_36660_38138 = state_36651__$1;
(statearr_36660_38138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (6))){
var state_36651__$1 = state_36651;
var statearr_36662_38139 = state_36651__$1;
(statearr_36662_38139[(2)] = null);

(statearr_36662_38139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (3))){
var inst_36648 = (state_36651[(2)]);
var inst_36649 = cljs.core.async.close_BANG_(out);
var state_36651__$1 = (function (){var statearr_36663 = state_36651;
(statearr_36663[(9)] = inst_36648);

return statearr_36663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36651__$1,inst_36649);
} else {
if((state_val_36652 === (2))){
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36651__$1,(4),ch);
} else {
if((state_val_36652 === (11))){
var inst_36630 = (state_36651[(8)]);
var inst_36640 = (state_36651[(2)]);
var inst_36627 = inst_36630;
var state_36651__$1 = (function (){var statearr_36665 = state_36651;
(statearr_36665[(10)] = inst_36640);

(statearr_36665[(7)] = inst_36627);

return statearr_36665;
})();
var statearr_36666_38143 = state_36651__$1;
(statearr_36666_38143[(2)] = null);

(statearr_36666_38143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (9))){
var inst_36630 = (state_36651[(8)]);
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36651__$1,(11),out,inst_36630);
} else {
if((state_val_36652 === (5))){
var inst_36630 = (state_36651[(8)]);
var inst_36627 = (state_36651[(7)]);
var inst_36635 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36630,inst_36627);
var state_36651__$1 = state_36651;
if(inst_36635){
var statearr_36669_38144 = state_36651__$1;
(statearr_36669_38144[(1)] = (8));

} else {
var statearr_36670_38146 = state_36651__$1;
(statearr_36670_38146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (10))){
var inst_36643 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
var statearr_36671_38148 = state_36651__$1;
(statearr_36671_38148[(2)] = inst_36643);

(statearr_36671_38148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (8))){
var inst_36627 = (state_36651[(7)]);
var tmp36667 = inst_36627;
var inst_36627__$1 = tmp36667;
var state_36651__$1 = (function (){var statearr_36673 = state_36651;
(statearr_36673[(7)] = inst_36627__$1);

return statearr_36673;
})();
var statearr_36674_38150 = state_36651__$1;
(statearr_36674_38150[(2)] = null);

(statearr_36674_38150[(1)] = (2));


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
var statearr_36675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36675[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36675[(1)] = (1));

return statearr_36675;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36651){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36651);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36677){if((e36677 instanceof Object)){
var ex__34210__auto__ = e36677;
var statearr_36678_38154 = state_36651;
(statearr_36678_38154[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38155 = state_36651;
state_36651 = G__38155;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36679 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36679[(6)] = c__34274__auto___38131);

return statearr_36679;
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
var G__36683 = arguments.length;
switch (G__36683) {
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
var c__34274__auto___38158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36723){
var state_val_36725 = (state_36723[(1)]);
if((state_val_36725 === (7))){
var inst_36719 = (state_36723[(2)]);
var state_36723__$1 = state_36723;
var statearr_36727_38161 = state_36723__$1;
(statearr_36727_38161[(2)] = inst_36719);

(statearr_36727_38161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (1))){
var inst_36685 = (new Array(n));
var inst_36686 = inst_36685;
var inst_36687 = (0);
var state_36723__$1 = (function (){var statearr_36728 = state_36723;
(statearr_36728[(7)] = inst_36686);

(statearr_36728[(8)] = inst_36687);

return statearr_36728;
})();
var statearr_36729_38162 = state_36723__$1;
(statearr_36729_38162[(2)] = null);

(statearr_36729_38162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (4))){
var inst_36691 = (state_36723[(9)]);
var inst_36691__$1 = (state_36723[(2)]);
var inst_36692 = (inst_36691__$1 == null);
var inst_36693 = cljs.core.not(inst_36692);
var state_36723__$1 = (function (){var statearr_36731 = state_36723;
(statearr_36731[(9)] = inst_36691__$1);

return statearr_36731;
})();
if(inst_36693){
var statearr_36732_38163 = state_36723__$1;
(statearr_36732_38163[(1)] = (5));

} else {
var statearr_36733_38164 = state_36723__$1;
(statearr_36733_38164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (15))){
var inst_36713 = (state_36723[(2)]);
var state_36723__$1 = state_36723;
var statearr_36734_38165 = state_36723__$1;
(statearr_36734_38165[(2)] = inst_36713);

(statearr_36734_38165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (13))){
var state_36723__$1 = state_36723;
var statearr_36736_38167 = state_36723__$1;
(statearr_36736_38167[(2)] = null);

(statearr_36736_38167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (6))){
var inst_36687 = (state_36723[(8)]);
var inst_36709 = (inst_36687 > (0));
var state_36723__$1 = state_36723;
if(cljs.core.truth_(inst_36709)){
var statearr_36737_38169 = state_36723__$1;
(statearr_36737_38169[(1)] = (12));

} else {
var statearr_36738_38170 = state_36723__$1;
(statearr_36738_38170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (3))){
var inst_36721 = (state_36723[(2)]);
var state_36723__$1 = state_36723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36723__$1,inst_36721);
} else {
if((state_val_36725 === (12))){
var inst_36686 = (state_36723[(7)]);
var inst_36711 = cljs.core.vec(inst_36686);
var state_36723__$1 = state_36723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36723__$1,(15),out,inst_36711);
} else {
if((state_val_36725 === (2))){
var state_36723__$1 = state_36723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36723__$1,(4),ch);
} else {
if((state_val_36725 === (11))){
var inst_36703 = (state_36723[(2)]);
var inst_36704 = (new Array(n));
var inst_36686 = inst_36704;
var inst_36687 = (0);
var state_36723__$1 = (function (){var statearr_36741 = state_36723;
(statearr_36741[(10)] = inst_36703);

(statearr_36741[(7)] = inst_36686);

(statearr_36741[(8)] = inst_36687);

return statearr_36741;
})();
var statearr_36742_38172 = state_36723__$1;
(statearr_36742_38172[(2)] = null);

(statearr_36742_38172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (9))){
var inst_36686 = (state_36723[(7)]);
var inst_36701 = cljs.core.vec(inst_36686);
var state_36723__$1 = state_36723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36723__$1,(11),out,inst_36701);
} else {
if((state_val_36725 === (5))){
var inst_36691 = (state_36723[(9)]);
var inst_36686 = (state_36723[(7)]);
var inst_36687 = (state_36723[(8)]);
var inst_36696 = (state_36723[(11)]);
var inst_36695 = (inst_36686[inst_36687] = inst_36691);
var inst_36696__$1 = (inst_36687 + (1));
var inst_36697 = (inst_36696__$1 < n);
var state_36723__$1 = (function (){var statearr_36744 = state_36723;
(statearr_36744[(11)] = inst_36696__$1);

(statearr_36744[(12)] = inst_36695);

return statearr_36744;
})();
if(cljs.core.truth_(inst_36697)){
var statearr_36745_38174 = state_36723__$1;
(statearr_36745_38174[(1)] = (8));

} else {
var statearr_36746_38175 = state_36723__$1;
(statearr_36746_38175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (14))){
var inst_36716 = (state_36723[(2)]);
var inst_36717 = cljs.core.async.close_BANG_(out);
var state_36723__$1 = (function (){var statearr_36748 = state_36723;
(statearr_36748[(13)] = inst_36716);

return statearr_36748;
})();
var statearr_36749_38177 = state_36723__$1;
(statearr_36749_38177[(2)] = inst_36717);

(statearr_36749_38177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (10))){
var inst_36707 = (state_36723[(2)]);
var state_36723__$1 = state_36723;
var statearr_36751_38182 = state_36723__$1;
(statearr_36751_38182[(2)] = inst_36707);

(statearr_36751_38182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (8))){
var inst_36686 = (state_36723[(7)]);
var inst_36696 = (state_36723[(11)]);
var tmp36747 = inst_36686;
var inst_36686__$1 = tmp36747;
var inst_36687 = inst_36696;
var state_36723__$1 = (function (){var statearr_36752 = state_36723;
(statearr_36752[(7)] = inst_36686__$1);

(statearr_36752[(8)] = inst_36687);

return statearr_36752;
})();
var statearr_36753_38183 = state_36723__$1;
(statearr_36753_38183[(2)] = null);

(statearr_36753_38183[(1)] = (2));


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
var statearr_36755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36755[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36755[(1)] = (1));

return statearr_36755;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36723){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36723);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36761){if((e36761 instanceof Object)){
var ex__34210__auto__ = e36761;
var statearr_36766_38187 = state_36723;
(statearr_36766_38187[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38188 = state_36723;
state_36723 = G__38188;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36768 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36768[(6)] = c__34274__auto___38158);

return statearr_36768;
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
var G__36772 = arguments.length;
switch (G__36772) {
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
var c__34274__auto___38195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36816){
var state_val_36817 = (state_36816[(1)]);
if((state_val_36817 === (7))){
var inst_36812 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
var statearr_36820_38197 = state_36816__$1;
(statearr_36820_38197[(2)] = inst_36812);

(statearr_36820_38197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (1))){
var inst_36774 = [];
var inst_36775 = inst_36774;
var inst_36776 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36816__$1 = (function (){var statearr_36822 = state_36816;
(statearr_36822[(7)] = inst_36776);

(statearr_36822[(8)] = inst_36775);

return statearr_36822;
})();
var statearr_36823_38198 = state_36816__$1;
(statearr_36823_38198[(2)] = null);

(statearr_36823_38198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (4))){
var inst_36779 = (state_36816[(9)]);
var inst_36779__$1 = (state_36816[(2)]);
var inst_36780 = (inst_36779__$1 == null);
var inst_36781 = cljs.core.not(inst_36780);
var state_36816__$1 = (function (){var statearr_36824 = state_36816;
(statearr_36824[(9)] = inst_36779__$1);

return statearr_36824;
})();
if(inst_36781){
var statearr_36826_38200 = state_36816__$1;
(statearr_36826_38200[(1)] = (5));

} else {
var statearr_36827_38202 = state_36816__$1;
(statearr_36827_38202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (15))){
var inst_36806 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
var statearr_36828_38204 = state_36816__$1;
(statearr_36828_38204[(2)] = inst_36806);

(statearr_36828_38204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (13))){
var state_36816__$1 = state_36816;
var statearr_36829_38205 = state_36816__$1;
(statearr_36829_38205[(2)] = null);

(statearr_36829_38205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (6))){
var inst_36775 = (state_36816[(8)]);
var inst_36801 = inst_36775.length;
var inst_36802 = (inst_36801 > (0));
var state_36816__$1 = state_36816;
if(cljs.core.truth_(inst_36802)){
var statearr_36831_38206 = state_36816__$1;
(statearr_36831_38206[(1)] = (12));

} else {
var statearr_36832_38207 = state_36816__$1;
(statearr_36832_38207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (3))){
var inst_36814 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36816__$1,inst_36814);
} else {
if((state_val_36817 === (12))){
var inst_36775 = (state_36816[(8)]);
var inst_36804 = cljs.core.vec(inst_36775);
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36816__$1,(15),out,inst_36804);
} else {
if((state_val_36817 === (2))){
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36816__$1,(4),ch);
} else {
if((state_val_36817 === (11))){
var inst_36779 = (state_36816[(9)]);
var inst_36783 = (state_36816[(10)]);
var inst_36794 = (state_36816[(2)]);
var inst_36795 = [];
var inst_36796 = inst_36795.push(inst_36779);
var inst_36775 = inst_36795;
var inst_36776 = inst_36783;
var state_36816__$1 = (function (){var statearr_36835 = state_36816;
(statearr_36835[(11)] = inst_36796);

(statearr_36835[(12)] = inst_36794);

(statearr_36835[(7)] = inst_36776);

(statearr_36835[(8)] = inst_36775);

return statearr_36835;
})();
var statearr_36836_38210 = state_36816__$1;
(statearr_36836_38210[(2)] = null);

(statearr_36836_38210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (9))){
var inst_36775 = (state_36816[(8)]);
var inst_36792 = cljs.core.vec(inst_36775);
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36816__$1,(11),out,inst_36792);
} else {
if((state_val_36817 === (5))){
var inst_36779 = (state_36816[(9)]);
var inst_36783 = (state_36816[(10)]);
var inst_36776 = (state_36816[(7)]);
var inst_36783__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36779) : f.call(null,inst_36779));
var inst_36785 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36783__$1,inst_36776);
var inst_36786 = cljs.core.keyword_identical_QMARK_(inst_36776,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36787 = ((inst_36785) || (inst_36786));
var state_36816__$1 = (function (){var statearr_36838 = state_36816;
(statearr_36838[(10)] = inst_36783__$1);

return statearr_36838;
})();
if(cljs.core.truth_(inst_36787)){
var statearr_36839_38213 = state_36816__$1;
(statearr_36839_38213[(1)] = (8));

} else {
var statearr_36840_38214 = state_36816__$1;
(statearr_36840_38214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (14))){
var inst_36809 = (state_36816[(2)]);
var inst_36810 = cljs.core.async.close_BANG_(out);
var state_36816__$1 = (function (){var statearr_36843 = state_36816;
(statearr_36843[(13)] = inst_36809);

return statearr_36843;
})();
var statearr_36844_38217 = state_36816__$1;
(statearr_36844_38217[(2)] = inst_36810);

(statearr_36844_38217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (10))){
var inst_36799 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
var statearr_36845_38218 = state_36816__$1;
(statearr_36845_38218[(2)] = inst_36799);

(statearr_36845_38218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (8))){
var inst_36779 = (state_36816[(9)]);
var inst_36783 = (state_36816[(10)]);
var inst_36775 = (state_36816[(8)]);
var inst_36789 = inst_36775.push(inst_36779);
var tmp36841 = inst_36775;
var inst_36775__$1 = tmp36841;
var inst_36776 = inst_36783;
var state_36816__$1 = (function (){var statearr_36847 = state_36816;
(statearr_36847[(14)] = inst_36789);

(statearr_36847[(7)] = inst_36776);

(statearr_36847[(8)] = inst_36775__$1);

return statearr_36847;
})();
var statearr_36848_38223 = state_36816__$1;
(statearr_36848_38223[(2)] = null);

(statearr_36848_38223[(1)] = (2));


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
var statearr_36850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36850[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36850[(1)] = (1));

return statearr_36850;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36816){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36816);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36851){if((e36851 instanceof Object)){
var ex__34210__auto__ = e36851;
var statearr_36852_38227 = state_36816;
(statearr_36852_38227[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38228 = state_36816;
state_36816 = G__38228;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36854 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36854[(6)] = c__34274__auto___38195);

return statearr_36854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
