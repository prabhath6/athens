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
var val_36854 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36854) : fn1.call(null,val_36854));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36854) : fn1.call(null,val_36854));
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
var n__4666__auto___36859 = n;
var x_36860 = (0);
while(true){
if((x_36860 < n__4666__auto___36859)){
(a[x_36860] = x_36860);

var G__36861 = (x_36860 + (1));
x_36860 = G__36861;
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
var G__34367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34362_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34367) : fret.call(null,G__34367));
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
var G__36870 = (i + (1));
i = G__36870;
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
var len__4789__auto___36872 = arguments.length;
var i__4790__auto___36873 = (0);
while(true){
if((i__4790__auto___36873 < len__4789__auto___36872)){
args__4795__auto__.push((arguments[i__4790__auto___36873]));

var G__36874 = (i__4790__auto___36873 + (1));
i__4790__auto___36873 = G__36874;
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
var c__34274__auto___36880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36882 = state_34423__$1;
(statearr_34425_36882[(2)] = inst_34419);

(statearr_34425_36882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36883 = state_34423__$1;
(statearr_34426_36883[(2)] = null);

(statearr_34426_36883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34402 = (state_34423[(7)]);
var inst_34402__$1 = (state_34423[(2)]);
var inst_34403 = (inst_34402__$1 == null);
var state_34423__$1 = (function (){var statearr_34427 = state_34423;
(statearr_34427[(7)] = inst_34402__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34403)){
var statearr_34428_36885 = state_34423__$1;
(statearr_34428_36885[(1)] = (5));

} else {
var statearr_34429_36886 = state_34423__$1;
(statearr_34429_36886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36887 = state_34423__$1;
(statearr_34430_36887[(2)] = null);

(statearr_34430_36887[(1)] = (14));


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
var statearr_34431_36889 = state_34423__$1;
(statearr_34431_36889[(2)] = null);

(statearr_34431_36889[(1)] = (2));


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
var statearr_34432_36890 = state_34423__$1;
(statearr_34432_36890[(1)] = (12));

} else {
var statearr_34433_36892 = state_34423__$1;
(statearr_34433_36892[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36893 = state_34423__$1;
(statearr_34434_36893[(2)] = null);

(statearr_34434_36893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36894 = state_34423__$1;
(statearr_34435_36894[(1)] = (8));

} else {
var statearr_34436_36895 = state_34423__$1;
(statearr_34436_36895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36897 = state_34423__$1;
(statearr_34437_36897[(2)] = inst_34417);

(statearr_34437_36897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36898 = state_34423__$1;
(statearr_34438_36898[(2)] = inst_34409);

(statearr_34438_36898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36899 = state_34423__$1;
(statearr_34439_36899[(2)] = inst_34406);

(statearr_34439_36899[(1)] = (10));


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
var statearr_34442_36902 = state_34423;
(statearr_34442_36902[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36903 = state_34423;
state_34423 = G__36903;
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
var state__34276__auto__ = (function (){var statearr_34447 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34447[(6)] = c__34274__auto___36880);

return statearr_34447;
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
var c__34274__auto___36906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34461 = [null,null,null,null,null,null,null,null];
(statearr_34461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34461[(1)] = (1));

return statearr_34461;
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
}catch (e34463){if((e34463 instanceof Object)){
var ex__34210__auto__ = e34463;
var statearr_34464_36909 = state_34457;
(statearr_34464_36909[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36910 = state_34457;
state_34457 = G__36910;
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
(statearr_34465[(6)] = c__34274__auto___36906);

return statearr_34465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34467){
var vec__34468 = p__34467;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(1),null);
var job = vec__34468;
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
var n__4666__auto___36912 = n;
var __36913 = (0);
while(true){
if((__36913 < n__4666__auto___36912)){
var G__34471_36915 = type;
var G__34471_36916__$1 = (((G__34471_36915 instanceof cljs.core.Keyword))?G__34471_36915.fqn:null);
switch (G__34471_36916__$1) {
case "compute":
var c__34274__auto___36918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36913,c__34274__auto___36918,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36913,c__34274__auto___36918,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async){
return (function (state_34486){
var state_val_34487 = (state_34486[(1)]);
if((state_val_34487 === (1))){
var state_34486__$1 = state_34486;
var statearr_34493_36919 = state_34486__$1;
(statearr_34493_36919[(2)] = null);

(statearr_34493_36919[(1)] = (2));


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
var inst_34476 = (state_34486[(2)]);
var inst_34477 = process(inst_34476);
var state_34486__$1 = state_34486;
if(cljs.core.truth_(inst_34477)){
var statearr_34494_36921 = state_34486__$1;
(statearr_34494_36921[(1)] = (5));

} else {
var statearr_34495_36923 = state_34486__$1;
(statearr_34495_36923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (5))){
var state_34486__$1 = state_34486;
var statearr_34496_36924 = state_34486__$1;
(statearr_34496_36924[(2)] = null);

(statearr_34496_36924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (6))){
var state_34486__$1 = state_34486;
var statearr_34497_36925 = state_34486__$1;
(statearr_34497_36925[(2)] = null);

(statearr_34497_36925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (7))){
var inst_34482 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
var statearr_34498_36927 = state_34486__$1;
(statearr_34498_36927[(2)] = inst_34482);

(statearr_34498_36927[(1)] = (3));


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
});})(__36913,c__34274__auto___36918,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async))
;
return ((function (__36913,switch__34206__auto__,c__34274__auto___36918,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34500 = [null,null,null,null,null,null,null];
(statearr_34500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34500[(1)] = (1));

return statearr_34500;
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
var statearr_34502_36929 = state_34486;
(statearr_34502_36929[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36930 = state_34486;
state_34486 = G__36930;
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
;})(__36913,switch__34206__auto__,c__34274__auto___36918,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34503 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34503[(6)] = c__34274__auto___36918);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36913,c__34274__auto___36918,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36913,c__34274__auto___36932,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36913,c__34274__auto___36932,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async){
return (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var state_34516__$1 = state_34516;
var statearr_34522_36934 = state_34516__$1;
(statearr_34522_36934[(2)] = null);

(statearr_34522_36934[(1)] = (2));


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
var statearr_34526_36936 = state_34516__$1;
(statearr_34526_36936[(1)] = (5));

} else {
var statearr_34527_36937 = state_34516__$1;
(statearr_34527_36937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (5))){
var state_34516__$1 = state_34516;
var statearr_34528_36938 = state_34516__$1;
(statearr_34528_36938[(2)] = null);

(statearr_34528_36938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34529_36940 = state_34516__$1;
(statearr_34529_36940[(2)] = null);

(statearr_34529_36940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (7))){
var inst_34512 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34530_36941 = state_34516__$1;
(statearr_34530_36941[(2)] = inst_34512);

(statearr_34530_36941[(1)] = (3));


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
});})(__36913,c__34274__auto___36932,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async))
;
return ((function (__36913,switch__34206__auto__,c__34274__auto___36932,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async){
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
var statearr_34533_36943 = state_34516;
(statearr_34533_36943[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36945 = state_34516;
state_34516 = G__36945;
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
;})(__36913,switch__34206__auto__,c__34274__auto___36932,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___36932);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36913,c__34274__auto___36932,G__34471_36915,G__34471_36916__$1,n__4666__auto___36912,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34471_36916__$1)].join('')));

}

var G__36946 = (__36913 + (1));
__36913 = G__36946;
continue;
} else {
}
break;
}

var c__34274__auto___36947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
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
var statearr_34568_36956 = state_34559__$1;
(statearr_34568_36956[(2)] = null);

(statearr_34568_36956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36957 = state_34559__$1;
(statearr_34569_36957[(2)] = inst_34543);

(statearr_34569_36957[(1)] = (7));


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
var statearr_34573_36959 = state_34559;
(statearr_34573_36959[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36960 = state_34559;
state_34559 = G__36960;
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
(statearr_34574[(6)] = c__34274__auto___36947);

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
var statearr_34614_36968 = state_34612__$1;
(statearr_34614_36968[(2)] = inst_34608);

(statearr_34614_36968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36969 = state_34612__$1;
(statearr_34615_36969[(2)] = null);

(statearr_34615_36969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36970 = state_34612__$1;
(statearr_34616_36970[(2)] = null);

(statearr_34616_36970[(1)] = (2));


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
var statearr_34618_36972 = state_34612__$1;
(statearr_34618_36972[(1)] = (5));

} else {
var statearr_34619_36973 = state_34612__$1;
(statearr_34619_36973[(1)] = (6));

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
var statearr_34620_36974 = state_34612__$1;
(statearr_34620_36974[(2)] = inst_34603);

(statearr_34620_36974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36975 = state_34612__$1;
(statearr_34622_36975[(2)] = null);

(statearr_34622_36975[(1)] = (2));


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
var statearr_34623_36980 = state_34612__$1;
(statearr_34623_36980[(1)] = (19));

} else {
var statearr_34624_36981 = state_34612__$1;
(statearr_34624_36981[(1)] = (20));

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
var statearr_34625_36982 = state_34612__$1;
(statearr_34625_36982[(2)] = null);

(statearr_34625_36982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36983 = state_34612__$1;
(statearr_34627_36983[(2)] = null);

(statearr_34627_36983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36985 = state_34612__$1;
(statearr_34628_36985[(2)] = null);

(statearr_34628_36985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36986 = state_34612__$1;
(statearr_34629_36986[(1)] = (8));

} else {
var statearr_34630_36987 = state_34612__$1;
(statearr_34630_36987[(1)] = (9));

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
var statearr_34632_36988 = state_34612__$1;
(statearr_34632_36988[(1)] = (15));

} else {
var statearr_34633_36990 = state_34612__$1;
(statearr_34633_36990[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36992 = state_34612__$1;
(statearr_34634_36992[(2)] = false);

(statearr_34634_36992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36995 = state_34612__$1;
(statearr_34635_36995[(2)] = inst_34584);

(statearr_34635_36995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36997 = state_34612__$1;
(statearr_34636_36997[(2)] = inst_34595);

(statearr_34636_36997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34640_36999 = state_34612__$1;
(statearr_34640_36999[(2)] = inst_34581);

(statearr_34640_36999[(1)] = (10));


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
var statearr_34641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34641[(1)] = (1));

return statearr_34641;
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
}catch (e34642){if((e34642 instanceof Object)){
var ex__34210__auto__ = e34642;
var statearr_34643_37000 = state_34612;
(statearr_34643_37000[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37001 = state_34612;
state_34612 = G__37001;
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
var state__34276__auto__ = (function (){var statearr_34647 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34647[(6)] = c__34274__auto__);

return statearr_34647;
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
var G__34651 = arguments.length;
switch (G__34651) {
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
var G__34656 = arguments.length;
switch (G__34656) {
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
var G__34660 = arguments.length;
switch (G__34660) {
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
var c__34274__auto___37020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34688){
var state_val_34689 = (state_34688[(1)]);
if((state_val_34689 === (7))){
var inst_34684 = (state_34688[(2)]);
var state_34688__$1 = state_34688;
var statearr_34693_37023 = state_34688__$1;
(statearr_34693_37023[(2)] = inst_34684);

(statearr_34693_37023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (1))){
var state_34688__$1 = state_34688;
var statearr_34694_37026 = state_34688__$1;
(statearr_34694_37026[(2)] = null);

(statearr_34694_37026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (4))){
var inst_34665 = (state_34688[(7)]);
var inst_34665__$1 = (state_34688[(2)]);
var inst_34666 = (inst_34665__$1 == null);
var state_34688__$1 = (function (){var statearr_34695 = state_34688;
(statearr_34695[(7)] = inst_34665__$1);

return statearr_34695;
})();
if(cljs.core.truth_(inst_34666)){
var statearr_34696_37028 = state_34688__$1;
(statearr_34696_37028[(1)] = (5));

} else {
var statearr_34697_37029 = state_34688__$1;
(statearr_34697_37029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (13))){
var state_34688__$1 = state_34688;
var statearr_34698_37032 = state_34688__$1;
(statearr_34698_37032[(2)] = null);

(statearr_34698_37032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (6))){
var inst_34665 = (state_34688[(7)]);
var inst_34671 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34665) : p.call(null,inst_34665));
var state_34688__$1 = state_34688;
if(cljs.core.truth_(inst_34671)){
var statearr_34700_37037 = state_34688__$1;
(statearr_34700_37037[(1)] = (9));

} else {
var statearr_34701_37041 = state_34688__$1;
(statearr_34701_37041[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (3))){
var inst_34686 = (state_34688[(2)]);
var state_34688__$1 = state_34688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34688__$1,inst_34686);
} else {
if((state_val_34689 === (12))){
var state_34688__$1 = state_34688;
var statearr_34702_37045 = state_34688__$1;
(statearr_34702_37045[(2)] = null);

(statearr_34702_37045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (2))){
var state_34688__$1 = state_34688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34688__$1,(4),ch);
} else {
if((state_val_34689 === (11))){
var inst_34665 = (state_34688[(7)]);
var inst_34675 = (state_34688[(2)]);
var state_34688__$1 = state_34688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34688__$1,(8),inst_34675,inst_34665);
} else {
if((state_val_34689 === (9))){
var state_34688__$1 = state_34688;
var statearr_34703_37048 = state_34688__$1;
(statearr_34703_37048[(2)] = tc);

(statearr_34703_37048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (5))){
var inst_34668 = cljs.core.async.close_BANG_(tc);
var inst_34669 = cljs.core.async.close_BANG_(fc);
var state_34688__$1 = (function (){var statearr_34704 = state_34688;
(statearr_34704[(8)] = inst_34668);

return statearr_34704;
})();
var statearr_34705_37051 = state_34688__$1;
(statearr_34705_37051[(2)] = inst_34669);

(statearr_34705_37051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (14))){
var inst_34682 = (state_34688[(2)]);
var state_34688__$1 = state_34688;
var statearr_34709_37057 = state_34688__$1;
(statearr_34709_37057[(2)] = inst_34682);

(statearr_34709_37057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (10))){
var state_34688__$1 = state_34688;
var statearr_34710_37058 = state_34688__$1;
(statearr_34710_37058[(2)] = fc);

(statearr_34710_37058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34689 === (8))){
var inst_34677 = (state_34688[(2)]);
var state_34688__$1 = state_34688;
if(cljs.core.truth_(inst_34677)){
var statearr_34711_37061 = state_34688__$1;
(statearr_34711_37061[(1)] = (12));

} else {
var statearr_34712_37062 = state_34688__$1;
(statearr_34712_37062[(1)] = (13));

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
var statearr_34713 = [null,null,null,null,null,null,null,null,null];
(statearr_34713[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34713[(1)] = (1));

return statearr_34713;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34688){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34688);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34717){if((e34717 instanceof Object)){
var ex__34210__auto__ = e34717;
var statearr_34718_37067 = state_34688;
(statearr_34718_37067[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34717;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37072 = state_34688;
state_34688 = G__37072;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34719 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34719[(6)] = c__34274__auto___37020);

return statearr_34719;
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
var inst_34739 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34745_37080 = state_34743__$1;
(statearr_34745_37080[(2)] = inst_34739);

(statearr_34745_37080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (1))){
var inst_34723 = init;
var state_34743__$1 = (function (){var statearr_34746 = state_34743;
(statearr_34746[(7)] = inst_34723);

return statearr_34746;
})();
var statearr_34747_37083 = state_34743__$1;
(statearr_34747_37083[(2)] = null);

(statearr_34747_37083[(1)] = (2));


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
var statearr_34749_37086 = state_34743__$1;
(statearr_34749_37086[(1)] = (5));

} else {
var statearr_34750_37087 = state_34743__$1;
(statearr_34750_37087[(1)] = (6));

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
var statearr_34752_37089 = state_34743__$1;
(statearr_34752_37089[(1)] = (8));

} else {
var statearr_34753_37090 = state_34743__$1;
(statearr_34753_37090[(1)] = (9));

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
var state_34743__$1 = (function (){var statearr_34754 = state_34743;
(statearr_34754[(7)] = inst_34723);

return statearr_34754;
})();
var statearr_34755_37099 = state_34743__$1;
(statearr_34755_37099[(2)] = null);

(statearr_34755_37099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (5))){
var inst_34723 = (state_34743[(7)]);
var state_34743__$1 = state_34743;
var statearr_34756_37100 = state_34743__$1;
(statearr_34756_37100[(2)] = inst_34723);

(statearr_34756_37100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (10))){
var inst_34737 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34757_37101 = state_34743__$1;
(statearr_34757_37101[(2)] = inst_34737);

(statearr_34757_37101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (8))){
var inst_34730 = (state_34743[(9)]);
var inst_34733 = cljs.core.deref(inst_34730);
var state_34743__$1 = state_34743;
var statearr_34758_37107 = state_34743__$1;
(statearr_34758_37107[(2)] = inst_34733);

(statearr_34758_37107[(1)] = (10));


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
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37111 = state_34743;
(statearr_34761_37111[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37114 = state_34743;
state_34743 = G__37114;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34771){
var state_val_34772 = (state_34771[(1)]);
if((state_val_34772 === (1))){
var inst_34766 = cljs.core.async.reduce(f__$1,init,ch);
var state_34771__$1 = state_34771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34771__$1,(2),inst_34766);
} else {
if((state_val_34772 === (2))){
var inst_34768 = (state_34771[(2)]);
var inst_34769 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34768) : f__$1.call(null,inst_34768));
var state_34771__$1 = state_34771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34771__$1,inst_34769);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34777 = [null,null,null,null,null,null,null];
(statearr_34777[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34777[(1)] = (1));

return statearr_34777;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34771){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34771);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34778){if((e34778 instanceof Object)){
var ex__34210__auto__ = e34778;
var statearr_34779_37123 = state_34771;
(statearr_34779_37123[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34778;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37124 = state_34771;
state_34771 = G__37124;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34771){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34780 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34780[(6)] = c__34274__auto__);

return statearr_34780;
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
var G__34783 = arguments.length;
switch (G__34783) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34813){
var state_val_34814 = (state_34813[(1)]);
if((state_val_34814 === (7))){
var inst_34795 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34815_37134 = state_34813__$1;
(statearr_34815_37134[(2)] = inst_34795);

(statearr_34815_37134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (1))){
var inst_34789 = cljs.core.seq(coll);
var inst_34790 = inst_34789;
var state_34813__$1 = (function (){var statearr_34816 = state_34813;
(statearr_34816[(7)] = inst_34790);

return statearr_34816;
})();
var statearr_34820_37137 = state_34813__$1;
(statearr_34820_37137[(2)] = null);

(statearr_34820_37137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (4))){
var inst_34790 = (state_34813[(7)]);
var inst_34793 = cljs.core.first(inst_34790);
var state_34813__$1 = state_34813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34813__$1,(7),ch,inst_34793);
} else {
if((state_val_34814 === (13))){
var inst_34807 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34823_37139 = state_34813__$1;
(statearr_34823_37139[(2)] = inst_34807);

(statearr_34823_37139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (6))){
var inst_34798 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
if(cljs.core.truth_(inst_34798)){
var statearr_34825_37142 = state_34813__$1;
(statearr_34825_37142[(1)] = (8));

} else {
var statearr_34826_37144 = state_34813__$1;
(statearr_34826_37144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (3))){
var inst_34811 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34813__$1,inst_34811);
} else {
if((state_val_34814 === (12))){
var state_34813__$1 = state_34813;
var statearr_34827_37149 = state_34813__$1;
(statearr_34827_37149[(2)] = null);

(statearr_34827_37149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (2))){
var inst_34790 = (state_34813[(7)]);
var state_34813__$1 = state_34813;
if(cljs.core.truth_(inst_34790)){
var statearr_34828_37150 = state_34813__$1;
(statearr_34828_37150[(1)] = (4));

} else {
var statearr_34829_37151 = state_34813__$1;
(statearr_34829_37151[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (11))){
var inst_34804 = cljs.core.async.close_BANG_(ch);
var state_34813__$1 = state_34813;
var statearr_34830_37154 = state_34813__$1;
(statearr_34830_37154[(2)] = inst_34804);

(statearr_34830_37154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (9))){
var state_34813__$1 = state_34813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37155 = state_34813__$1;
(statearr_34831_37155[(1)] = (11));

} else {
var statearr_34832_37156 = state_34813__$1;
(statearr_34832_37156[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (5))){
var inst_34790 = (state_34813[(7)]);
var state_34813__$1 = state_34813;
var statearr_34833_37157 = state_34813__$1;
(statearr_34833_37157[(2)] = inst_34790);

(statearr_34833_37157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (10))){
var inst_34809 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34834_37160 = state_34813__$1;
(statearr_34834_37160[(2)] = inst_34809);

(statearr_34834_37160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (8))){
var inst_34790 = (state_34813[(7)]);
var inst_34800 = cljs.core.next(inst_34790);
var inst_34790__$1 = inst_34800;
var state_34813__$1 = (function (){var statearr_34835 = state_34813;
(statearr_34835[(7)] = inst_34790__$1);

return statearr_34835;
})();
var statearr_34836_37161 = state_34813__$1;
(statearr_34836_37161[(2)] = null);

(statearr_34836_37161[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34813){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34813);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37165 = state_34813;
(statearr_34839_37165[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37170 = state_34813;
state_34813 = G__37170;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34813);
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
var c__34274__auto___37208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34990){
var state_val_34993 = (state_34990[(1)]);
if((state_val_34993 === (7))){
var inst_34986 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34997_37209 = state_34990__$1;
(statearr_34997_37209[(2)] = inst_34986);

(statearr_34997_37209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (20))){
var inst_34879 = (state_34990[(7)]);
var inst_34895 = cljs.core.first(inst_34879);
var inst_34896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(0),null);
var inst_34897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(1),null);
var state_34990__$1 = (function (){var statearr_34999 = state_34990;
(statearr_34999[(8)] = inst_34896);

return statearr_34999;
})();
if(cljs.core.truth_(inst_34897)){
var statearr_35000_37216 = state_34990__$1;
(statearr_35000_37216[(1)] = (22));

} else {
var statearr_35001_37218 = state_34990__$1;
(statearr_35001_37218[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (27))){
var inst_34927 = (state_34990[(9)]);
var inst_34846 = (state_34990[(10)]);
var inst_34925 = (state_34990[(11)]);
var inst_34932 = (state_34990[(12)]);
var inst_34932__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34925,inst_34927);
var inst_34933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34932__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35002 = state_34990;
(statearr_35002[(12)] = inst_34932__$1);

return statearr_35002;
})();
if(cljs.core.truth_(inst_34933)){
var statearr_35003_37225 = state_34990__$1;
(statearr_35003_37225[(1)] = (30));

} else {
var statearr_35004_37226 = state_34990__$1;
(statearr_35004_37226[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (1))){
var state_34990__$1 = state_34990;
var statearr_35005_37227 = state_34990__$1;
(statearr_35005_37227[(2)] = null);

(statearr_35005_37227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (24))){
var inst_34879 = (state_34990[(7)]);
var inst_34902 = (state_34990[(2)]);
var inst_34903 = cljs.core.next(inst_34879);
var inst_34855 = inst_34903;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35008 = state_34990;
(statearr_35008[(13)] = inst_34857);

(statearr_35008[(14)] = inst_34856);

(statearr_35008[(15)] = inst_34858);

(statearr_35008[(16)] = inst_34855);

(statearr_35008[(17)] = inst_34902);

return statearr_35008;
})();
var statearr_35010_37232 = state_34990__$1;
(statearr_35010_37232[(2)] = null);

(statearr_35010_37232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (39))){
var state_34990__$1 = state_34990;
var statearr_35017_37233 = state_34990__$1;
(statearr_35017_37233[(2)] = null);

(statearr_35017_37233[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (4))){
var inst_34846 = (state_34990[(10)]);
var inst_34846__$1 = (state_34990[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34990__$1 = (function (){var statearr_35018 = state_34990;
(statearr_35018[(10)] = inst_34846__$1);

return statearr_35018;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35019_37235 = state_34990__$1;
(statearr_35019_37235[(1)] = (5));

} else {
var statearr_35020_37236 = state_34990__$1;
(statearr_35020_37236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (15))){
var inst_34857 = (state_34990[(13)]);
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34855 = (state_34990[(16)]);
var inst_34873 = (state_34990[(2)]);
var inst_34875 = (inst_34858 + (1));
var tmp35013 = inst_34857;
var tmp35015 = inst_34856;
var tmp35016 = inst_34855;
var inst_34855__$1 = tmp35016;
var inst_34856__$1 = tmp35015;
var inst_34857__$1 = tmp35013;
var inst_34858__$1 = inst_34875;
var state_34990__$1 = (function (){var statearr_35024 = state_34990;
(statearr_35024[(18)] = inst_34873);

(statearr_35024[(13)] = inst_34857__$1);

(statearr_35024[(14)] = inst_34856__$1);

(statearr_35024[(15)] = inst_34858__$1);

(statearr_35024[(16)] = inst_34855__$1);

return statearr_35024;
})();
var statearr_35026_37241 = state_34990__$1;
(statearr_35026_37241[(2)] = null);

(statearr_35026_37241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (21))){
var inst_34906 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35038_37244 = state_34990__$1;
(statearr_35038_37244[(2)] = inst_34906);

(statearr_35038_37244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (31))){
var inst_34932 = (state_34990[(12)]);
var inst_34936 = done(null);
var inst_34937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34932);
var state_34990__$1 = (function (){var statearr_35046 = state_34990;
(statearr_35046[(19)] = inst_34936);

return statearr_35046;
})();
var statearr_35047_37246 = state_34990__$1;
(statearr_35047_37246[(2)] = inst_34937);

(statearr_35047_37246[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (32))){
var inst_34927 = (state_34990[(9)]);
var inst_34925 = (state_34990[(11)]);
var inst_34924 = (state_34990[(20)]);
var inst_34926 = (state_34990[(21)]);
var inst_34939 = (state_34990[(2)]);
var inst_34940 = (inst_34927 + (1));
var tmp35027 = inst_34925;
var tmp35028 = inst_34924;
var tmp35029 = inst_34926;
var inst_34924__$1 = tmp35028;
var inst_34925__$1 = tmp35027;
var inst_34926__$1 = tmp35029;
var inst_34927__$1 = inst_34940;
var state_34990__$1 = (function (){var statearr_35052 = state_34990;
(statearr_35052[(9)] = inst_34927__$1);

(statearr_35052[(11)] = inst_34925__$1);

(statearr_35052[(20)] = inst_34924__$1);

(statearr_35052[(21)] = inst_34926__$1);

(statearr_35052[(22)] = inst_34939);

return statearr_35052;
})();
var statearr_35054_37251 = state_34990__$1;
(statearr_35054_37251[(2)] = null);

(statearr_35054_37251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (40))){
var inst_34955 = (state_34990[(23)]);
var inst_34960 = done(null);
var inst_34961 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34955);
var state_34990__$1 = (function (){var statearr_35059 = state_34990;
(statearr_35059[(24)] = inst_34960);

return statearr_35059;
})();
var statearr_35063_37253 = state_34990__$1;
(statearr_35063_37253[(2)] = inst_34961);

(statearr_35063_37253[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (33))){
var inst_34945 = (state_34990[(25)]);
var inst_34947 = cljs.core.chunked_seq_QMARK_(inst_34945);
var state_34990__$1 = state_34990;
if(inst_34947){
var statearr_35068_37255 = state_34990__$1;
(statearr_35068_37255[(1)] = (36));

} else {
var statearr_35070_37257 = state_34990__$1;
(statearr_35070_37257[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (13))){
var inst_34867 = (state_34990[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34990__$1 = state_34990;
var statearr_35075_37260 = state_34990__$1;
(statearr_35075_37260[(2)] = inst_34870);

(statearr_35075_37260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (22))){
var inst_34896 = (state_34990[(8)]);
var inst_34899 = cljs.core.async.close_BANG_(inst_34896);
var state_34990__$1 = state_34990;
var statearr_35081_37264 = state_34990__$1;
(statearr_35081_37264[(2)] = inst_34899);

(statearr_35081_37264[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (36))){
var inst_34945 = (state_34990[(25)]);
var inst_34949 = cljs.core.chunk_first(inst_34945);
var inst_34950 = cljs.core.chunk_rest(inst_34945);
var inst_34952 = cljs.core.count(inst_34949);
var inst_34924 = inst_34950;
var inst_34925 = inst_34949;
var inst_34926 = inst_34952;
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35087 = state_34990;
(statearr_35087[(9)] = inst_34927);

(statearr_35087[(11)] = inst_34925);

(statearr_35087[(20)] = inst_34924);

(statearr_35087[(21)] = inst_34926);

return statearr_35087;
})();
var statearr_35090_37270 = state_34990__$1;
(statearr_35090_37270[(2)] = null);

(statearr_35090_37270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (41))){
var inst_34945 = (state_34990[(25)]);
var inst_34963 = (state_34990[(2)]);
var inst_34964 = cljs.core.next(inst_34945);
var inst_34924 = inst_34964;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35098 = state_34990;
(statearr_35098[(9)] = inst_34927);

(statearr_35098[(11)] = inst_34925);

(statearr_35098[(20)] = inst_34924);

(statearr_35098[(21)] = inst_34926);

(statearr_35098[(27)] = inst_34963);

return statearr_35098;
})();
var statearr_35101_37275 = state_34990__$1;
(statearr_35101_37275[(2)] = null);

(statearr_35101_37275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (43))){
var state_34990__$1 = state_34990;
var statearr_35105_37276 = state_34990__$1;
(statearr_35105_37276[(2)] = null);

(statearr_35105_37276[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (29))){
var inst_34973 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35111_37277 = state_34990__$1;
(statearr_35111_37277[(2)] = inst_34973);

(statearr_35111_37277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (44))){
var inst_34983 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_35117 = state_34990;
(statearr_35117[(28)] = inst_34983);

return statearr_35117;
})();
var statearr_35118_37279 = state_34990__$1;
(statearr_35118_37279[(2)] = null);

(statearr_35118_37279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (6))){
var inst_34916 = (state_34990[(29)]);
var inst_34915 = cljs.core.deref(cs);
var inst_34916__$1 = cljs.core.keys(inst_34915);
var inst_34917 = cljs.core.count(inst_34916__$1);
var inst_34918 = cljs.core.reset_BANG_(dctr,inst_34917);
var inst_34923 = cljs.core.seq(inst_34916__$1);
var inst_34924 = inst_34923;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35130 = state_34990;
(statearr_35130[(9)] = inst_34927);

(statearr_35130[(30)] = inst_34918);

(statearr_35130[(11)] = inst_34925);

(statearr_35130[(20)] = inst_34924);

(statearr_35130[(21)] = inst_34926);

(statearr_35130[(29)] = inst_34916__$1);

return statearr_35130;
})();
var statearr_35133_37287 = state_34990__$1;
(statearr_35133_37287[(2)] = null);

(statearr_35133_37287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (28))){
var inst_34924 = (state_34990[(20)]);
var inst_34945 = (state_34990[(25)]);
var inst_34945__$1 = cljs.core.seq(inst_34924);
var state_34990__$1 = (function (){var statearr_35139 = state_34990;
(statearr_35139[(25)] = inst_34945__$1);

return statearr_35139;
})();
if(inst_34945__$1){
var statearr_35142_37292 = state_34990__$1;
(statearr_35142_37292[(1)] = (33));

} else {
var statearr_35144_37293 = state_34990__$1;
(statearr_35144_37293[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (25))){
var inst_34927 = (state_34990[(9)]);
var inst_34926 = (state_34990[(21)]);
var inst_34929 = (inst_34927 < inst_34926);
var inst_34930 = inst_34929;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34930)){
var statearr_35151_37298 = state_34990__$1;
(statearr_35151_37298[(1)] = (27));

} else {
var statearr_35152_37299 = state_34990__$1;
(statearr_35152_37299[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (34))){
var state_34990__$1 = state_34990;
var statearr_35153_37301 = state_34990__$1;
(statearr_35153_37301[(2)] = null);

(statearr_35153_37301[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (17))){
var state_34990__$1 = state_34990;
var statearr_35154_37305 = state_34990__$1;
(statearr_35154_37305[(2)] = null);

(statearr_35154_37305[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (3))){
var inst_34988 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34990__$1,inst_34988);
} else {
if((state_val_34993 === (12))){
var inst_34911 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35157_37306 = state_34990__$1;
(statearr_35157_37306[(2)] = inst_34911);

(statearr_35157_37306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (2))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(4),ch);
} else {
if((state_val_34993 === (23))){
var state_34990__$1 = state_34990;
var statearr_35160_37308 = state_34990__$1;
(statearr_35160_37308[(2)] = null);

(statearr_35160_37308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (35))){
var inst_34971 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35161_37310 = state_34990__$1;
(statearr_35161_37310[(2)] = inst_34971);

(statearr_35161_37310[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (19))){
var inst_34879 = (state_34990[(7)]);
var inst_34886 = cljs.core.chunk_first(inst_34879);
var inst_34888 = cljs.core.chunk_rest(inst_34879);
var inst_34889 = cljs.core.count(inst_34886);
var inst_34855 = inst_34888;
var inst_34856 = inst_34886;
var inst_34857 = inst_34889;
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35185 = state_34990;
(statearr_35185[(13)] = inst_34857);

(statearr_35185[(14)] = inst_34856);

(statearr_35185[(15)] = inst_34858);

(statearr_35185[(16)] = inst_34855);

return statearr_35185;
})();
var statearr_35186_37313 = state_34990__$1;
(statearr_35186_37313[(2)] = null);

(statearr_35186_37313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (11))){
var inst_34879 = (state_34990[(7)]);
var inst_34855 = (state_34990[(16)]);
var inst_34879__$1 = cljs.core.seq(inst_34855);
var state_34990__$1 = (function (){var statearr_35189 = state_34990;
(statearr_35189[(7)] = inst_34879__$1);

return statearr_35189;
})();
if(inst_34879__$1){
var statearr_35191_37314 = state_34990__$1;
(statearr_35191_37314[(1)] = (16));

} else {
var statearr_35193_37315 = state_34990__$1;
(statearr_35193_37315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (9))){
var inst_34913 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35194_37317 = state_34990__$1;
(statearr_35194_37317[(2)] = inst_34913);

(statearr_35194_37317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35196 = state_34990;
(statearr_35196[(13)] = inst_34857);

(statearr_35196[(14)] = inst_34856);

(statearr_35196[(15)] = inst_34858);

(statearr_35196[(16)] = inst_34855);

return statearr_35196;
})();
var statearr_35197_37319 = state_34990__$1;
(statearr_35197_37319[(2)] = null);

(statearr_35197_37319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (14))){
var state_34990__$1 = state_34990;
var statearr_35203_37321 = state_34990__$1;
(statearr_35203_37321[(2)] = null);

(statearr_35203_37321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (45))){
var inst_34980 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35207_37324 = state_34990__$1;
(statearr_35207_37324[(2)] = inst_34980);

(statearr_35207_37324[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (26))){
var inst_34916 = (state_34990[(29)]);
var inst_34975 = (state_34990[(2)]);
var inst_34977 = cljs.core.seq(inst_34916);
var state_34990__$1 = (function (){var statearr_35213 = state_34990;
(statearr_35213[(31)] = inst_34975);

return statearr_35213;
})();
if(inst_34977){
var statearr_35215_37326 = state_34990__$1;
(statearr_35215_37326[(1)] = (42));

} else {
var statearr_35221_37327 = state_34990__$1;
(statearr_35221_37327[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (16))){
var inst_34879 = (state_34990[(7)]);
var inst_34881 = cljs.core.chunked_seq_QMARK_(inst_34879);
var state_34990__$1 = state_34990;
if(inst_34881){
var statearr_35229_37328 = state_34990__$1;
(statearr_35229_37328[(1)] = (19));

} else {
var statearr_35230_37329 = state_34990__$1;
(statearr_35230_37329[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (38))){
var inst_34967 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35232_37330 = state_34990__$1;
(statearr_35232_37330[(2)] = inst_34967);

(statearr_35232_37330[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (30))){
var state_34990__$1 = state_34990;
var statearr_35238_37332 = state_34990__$1;
(statearr_35238_37332[(2)] = null);

(statearr_35238_37332[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (10))){
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34990__$1 = (function (){var statearr_35245 = state_34990;
(statearr_35245[(26)] = inst_34867);

return statearr_35245;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35247_37339 = state_34990__$1;
(statearr_35247_37339[(1)] = (13));

} else {
var statearr_35249_37341 = state_34990__$1;
(statearr_35249_37341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (18))){
var inst_34909 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35255_37343 = state_34990__$1;
(statearr_35255_37343[(2)] = inst_34909);

(statearr_35255_37343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (42))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(45),dchan);
} else {
if((state_val_34993 === (37))){
var inst_34846 = (state_34990[(10)]);
var inst_34955 = (state_34990[(23)]);
var inst_34945 = (state_34990[(25)]);
var inst_34955__$1 = cljs.core.first(inst_34945);
var inst_34957 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34955__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35262 = state_34990;
(statearr_35262[(23)] = inst_34955__$1);

return statearr_35262;
})();
if(cljs.core.truth_(inst_34957)){
var statearr_35266_37348 = state_34990__$1;
(statearr_35266_37348[(1)] = (39));

} else {
var statearr_35267_37349 = state_34990__$1;
(statearr_35267_37349[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (8))){
var inst_34857 = (state_34990[(13)]);
var inst_34858 = (state_34990[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34861)){
var statearr_35271_37353 = state_34990__$1;
(statearr_35271_37353[(1)] = (10));

} else {
var statearr_35274_37355 = state_34990__$1;
(statearr_35274_37355[(1)] = (11));

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
var statearr_35284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35284[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35284[(1)] = (1));

return statearr_35284;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34990){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34990);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35287){if((e35287 instanceof Object)){
var ex__34210__auto__ = e35287;
var statearr_35290_37365 = state_34990;
(statearr_35290_37365[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37366 = state_34990;
state_34990 = G__37366;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34990){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35297 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35297[(6)] = c__34274__auto___37208);

return statearr_35297;
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
var G__35307 = arguments.length;
switch (G__35307) {
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
var len__4789__auto___37405 = arguments.length;
var i__4790__auto___37406 = (0);
while(true){
if((i__4790__auto___37406 < len__4789__auto___37405)){
args__4795__auto__.push((arguments[i__4790__auto___37406]));

var G__37408 = (i__4790__auto___37406 + (1));
i__4790__auto___37406 = G__37408;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35378){
var map__35382 = p__35378;
var map__35382__$1 = (((((!((map__35382 == null))))?(((((map__35382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35382):map__35382);
var opts = map__35382__$1;
var statearr_35390_37415 = state;
(statearr_35390_37415[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35397_37417 = state;
(statearr_35397_37417[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35398_37418 = state;
(statearr_35398_37418[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35368){
var G__35369 = cljs.core.first(seq35368);
var seq35368__$1 = cljs.core.next(seq35368);
var G__35370 = cljs.core.first(seq35368__$1);
var seq35368__$2 = cljs.core.next(seq35368__$1);
var G__35371 = cljs.core.first(seq35368__$2);
var seq35368__$3 = cljs.core.next(seq35368__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35369,G__35370,G__35371,seq35368__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35425 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35426){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35426 = meta35426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35427,meta35426__$1){
var self__ = this;
var _35427__$1 = this;
return (new cljs.core.async.t_cljs$core$async35425(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35426__$1));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35427){
var self__ = this;
var _35427__$1 = this;
return self__.meta35426;
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35426","meta35426",332097432,null)], null);
}));

(cljs.core.async.t_cljs$core$async35425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35425");

(cljs.core.async.t_cljs$core$async35425.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35425.
 */
cljs.core.async.__GT_t_cljs$core$async35425 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35425(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35426){
return (new cljs.core.async.t_cljs$core$async35425(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35426));
});

}

return (new cljs.core.async.t_cljs$core$async35425(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35628){
var state_val_35630 = (state_35628[(1)]);
if((state_val_35630 === (7))){
var inst_35501 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35646_37449 = state_35628__$1;
(statearr_35646_37449[(2)] = inst_35501);

(statearr_35646_37449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (20))){
var inst_35516 = (state_35628[(7)]);
var state_35628__$1 = state_35628;
var statearr_35649_37451 = state_35628__$1;
(statearr_35649_37451[(2)] = inst_35516);

(statearr_35649_37451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (27))){
var state_35628__$1 = state_35628;
var statearr_35656_37454 = state_35628__$1;
(statearr_35656_37454[(2)] = null);

(statearr_35656_37454[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (1))){
var inst_35482 = (state_35628[(8)]);
var inst_35482__$1 = calc_state();
var inst_35487 = (inst_35482__$1 == null);
var inst_35488 = cljs.core.not(inst_35487);
var state_35628__$1 = (function (){var statearr_35664 = state_35628;
(statearr_35664[(8)] = inst_35482__$1);

return statearr_35664;
})();
if(inst_35488){
var statearr_35667_37457 = state_35628__$1;
(statearr_35667_37457[(1)] = (2));

} else {
var statearr_35668_37458 = state_35628__$1;
(statearr_35668_37458[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (24))){
var inst_35562 = (state_35628[(9)]);
var inst_35594 = (state_35628[(10)]);
var inst_35551 = (state_35628[(11)]);
var inst_35594__$1 = (inst_35551.cljs$core$IFn$_invoke$arity$1 ? inst_35551.cljs$core$IFn$_invoke$arity$1(inst_35562) : inst_35551.call(null,inst_35562));
var state_35628__$1 = (function (){var statearr_35674 = state_35628;
(statearr_35674[(10)] = inst_35594__$1);

return statearr_35674;
})();
if(cljs.core.truth_(inst_35594__$1)){
var statearr_35676_37463 = state_35628__$1;
(statearr_35676_37463[(1)] = (29));

} else {
var statearr_35678_37464 = state_35628__$1;
(statearr_35678_37464[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (4))){
var inst_35504 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35504)){
var statearr_35684_37465 = state_35628__$1;
(statearr_35684_37465[(1)] = (8));

} else {
var statearr_35685_37467 = state_35628__$1;
(statearr_35685_37467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (15))){
var inst_35543 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35543)){
var statearr_35686_37468 = state_35628__$1;
(statearr_35686_37468[(1)] = (19));

} else {
var statearr_35687_37469 = state_35628__$1;
(statearr_35687_37469[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (21))){
var inst_35549 = (state_35628[(12)]);
var inst_35549__$1 = (state_35628[(2)]);
var inst_35551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35549__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35549__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35549__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35628__$1 = (function (){var statearr_35688 = state_35628;
(statearr_35688[(13)] = inst_35552);

(statearr_35688[(12)] = inst_35549__$1);

(statearr_35688[(11)] = inst_35551);

return statearr_35688;
})();
return cljs.core.async.ioc_alts_BANG_(state_35628__$1,(22),inst_35553);
} else {
if((state_val_35630 === (31))){
var inst_35605 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35605)){
var statearr_35689_37482 = state_35628__$1;
(statearr_35689_37482[(1)] = (32));

} else {
var statearr_35690_37483 = state_35628__$1;
(statearr_35690_37483[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (32))){
var inst_35561 = (state_35628[(14)]);
var state_35628__$1 = state_35628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35628__$1,(35),out,inst_35561);
} else {
if((state_val_35630 === (33))){
var inst_35549 = (state_35628[(12)]);
var inst_35516 = inst_35549;
var state_35628__$1 = (function (){var statearr_35693 = state_35628;
(statearr_35693[(7)] = inst_35516);

return statearr_35693;
})();
var statearr_35694_37486 = state_35628__$1;
(statearr_35694_37486[(2)] = null);

(statearr_35694_37486[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (13))){
var inst_35516 = (state_35628[(7)]);
var inst_35530 = inst_35516.cljs$lang$protocol_mask$partition0$;
var inst_35531 = (inst_35530 & (64));
var inst_35534 = inst_35516.cljs$core$ISeq$;
var inst_35535 = (cljs.core.PROTOCOL_SENTINEL === inst_35534);
var inst_35536 = ((inst_35531) || (inst_35535));
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35536)){
var statearr_35697_37492 = state_35628__$1;
(statearr_35697_37492[(1)] = (16));

} else {
var statearr_35698_37493 = state_35628__$1;
(statearr_35698_37493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (22))){
var inst_35562 = (state_35628[(9)]);
var inst_35561 = (state_35628[(14)]);
var inst_35559 = (state_35628[(2)]);
var inst_35561__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35559,(0),null);
var inst_35562__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35559,(1),null);
var inst_35566 = (inst_35561__$1 == null);
var inst_35567 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35562__$1,change);
var inst_35568 = ((inst_35566) || (inst_35567));
var state_35628__$1 = (function (){var statearr_35699 = state_35628;
(statearr_35699[(9)] = inst_35562__$1);

(statearr_35699[(14)] = inst_35561__$1);

return statearr_35699;
})();
if(cljs.core.truth_(inst_35568)){
var statearr_35700_37502 = state_35628__$1;
(statearr_35700_37502[(1)] = (23));

} else {
var statearr_35701_37504 = state_35628__$1;
(statearr_35701_37504[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (36))){
var inst_35549 = (state_35628[(12)]);
var inst_35516 = inst_35549;
var state_35628__$1 = (function (){var statearr_35702 = state_35628;
(statearr_35702[(7)] = inst_35516);

return statearr_35702;
})();
var statearr_35705_37505 = state_35628__$1;
(statearr_35705_37505[(2)] = null);

(statearr_35705_37505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (29))){
var inst_35594 = (state_35628[(10)]);
var state_35628__$1 = state_35628;
var statearr_35706_37508 = state_35628__$1;
(statearr_35706_37508[(2)] = inst_35594);

(statearr_35706_37508[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (6))){
var state_35628__$1 = state_35628;
var statearr_35709_37512 = state_35628__$1;
(statearr_35709_37512[(2)] = false);

(statearr_35709_37512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (28))){
var inst_35587 = (state_35628[(2)]);
var inst_35588 = calc_state();
var inst_35516 = inst_35588;
var state_35628__$1 = (function (){var statearr_35711 = state_35628;
(statearr_35711[(7)] = inst_35516);

(statearr_35711[(15)] = inst_35587);

return statearr_35711;
})();
var statearr_35714_37519 = state_35628__$1;
(statearr_35714_37519[(2)] = null);

(statearr_35714_37519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (25))){
var inst_35621 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35716_37522 = state_35628__$1;
(statearr_35716_37522[(2)] = inst_35621);

(statearr_35716_37522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (34))){
var inst_35618 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35717_37523 = state_35628__$1;
(statearr_35717_37523[(2)] = inst_35618);

(statearr_35717_37523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (17))){
var state_35628__$1 = state_35628;
var statearr_35720_37525 = state_35628__$1;
(statearr_35720_37525[(2)] = false);

(statearr_35720_37525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (3))){
var state_35628__$1 = state_35628;
var statearr_35723_37528 = state_35628__$1;
(statearr_35723_37528[(2)] = false);

(statearr_35723_37528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (12))){
var inst_35624 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35628__$1,inst_35624);
} else {
if((state_val_35630 === (2))){
var inst_35482 = (state_35628[(8)]);
var inst_35492 = inst_35482.cljs$lang$protocol_mask$partition0$;
var inst_35493 = (inst_35492 & (64));
var inst_35494 = inst_35482.cljs$core$ISeq$;
var inst_35495 = (cljs.core.PROTOCOL_SENTINEL === inst_35494);
var inst_35496 = ((inst_35493) || (inst_35495));
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35496)){
var statearr_35727_37535 = state_35628__$1;
(statearr_35727_37535[(1)] = (5));

} else {
var statearr_35729_37536 = state_35628__$1;
(statearr_35729_37536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (23))){
var inst_35561 = (state_35628[(14)]);
var inst_35571 = (inst_35561 == null);
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35571)){
var statearr_35731_37537 = state_35628__$1;
(statearr_35731_37537[(1)] = (26));

} else {
var statearr_35732_37540 = state_35628__$1;
(statearr_35732_37540[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (35))){
var inst_35609 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35609)){
var statearr_35733_37547 = state_35628__$1;
(statearr_35733_37547[(1)] = (36));

} else {
var statearr_35735_37548 = state_35628__$1;
(statearr_35735_37548[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (19))){
var inst_35516 = (state_35628[(7)]);
var inst_35546 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35516);
var state_35628__$1 = state_35628;
var statearr_35736_37549 = state_35628__$1;
(statearr_35736_37549[(2)] = inst_35546);

(statearr_35736_37549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (11))){
var inst_35516 = (state_35628[(7)]);
var inst_35525 = (inst_35516 == null);
var inst_35526 = cljs.core.not(inst_35525);
var state_35628__$1 = state_35628;
if(inst_35526){
var statearr_35738_37556 = state_35628__$1;
(statearr_35738_37556[(1)] = (13));

} else {
var statearr_35739_37557 = state_35628__$1;
(statearr_35739_37557[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (9))){
var inst_35482 = (state_35628[(8)]);
var state_35628__$1 = state_35628;
var statearr_35740_37559 = state_35628__$1;
(statearr_35740_37559[(2)] = inst_35482);

(statearr_35740_37559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (5))){
var state_35628__$1 = state_35628;
var statearr_35741_37561 = state_35628__$1;
(statearr_35741_37561[(2)] = true);

(statearr_35741_37561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (14))){
var state_35628__$1 = state_35628;
var statearr_35743_37562 = state_35628__$1;
(statearr_35743_37562[(2)] = false);

(statearr_35743_37562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (26))){
var inst_35562 = (state_35628[(9)]);
var inst_35584 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35562);
var state_35628__$1 = state_35628;
var statearr_35744_37569 = state_35628__$1;
(statearr_35744_37569[(2)] = inst_35584);

(statearr_35744_37569[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (16))){
var state_35628__$1 = state_35628;
var statearr_35746_37571 = state_35628__$1;
(statearr_35746_37571[(2)] = true);

(statearr_35746_37571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (38))){
var inst_35614 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35748_37573 = state_35628__$1;
(statearr_35748_37573[(2)] = inst_35614);

(statearr_35748_37573[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (30))){
var inst_35552 = (state_35628[(13)]);
var inst_35562 = (state_35628[(9)]);
var inst_35551 = (state_35628[(11)]);
var inst_35599 = cljs.core.empty_QMARK_(inst_35551);
var inst_35600 = (inst_35552.cljs$core$IFn$_invoke$arity$1 ? inst_35552.cljs$core$IFn$_invoke$arity$1(inst_35562) : inst_35552.call(null,inst_35562));
var inst_35601 = cljs.core.not(inst_35600);
var inst_35602 = ((inst_35599) && (inst_35601));
var state_35628__$1 = state_35628;
var statearr_35750_37579 = state_35628__$1;
(statearr_35750_37579[(2)] = inst_35602);

(statearr_35750_37579[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (10))){
var inst_35482 = (state_35628[(8)]);
var inst_35509 = (state_35628[(2)]);
var inst_35513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35509,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35509,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35509,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35516 = inst_35482;
var state_35628__$1 = (function (){var statearr_35754 = state_35628;
(statearr_35754[(16)] = inst_35514);

(statearr_35754[(17)] = inst_35515);

(statearr_35754[(7)] = inst_35516);

(statearr_35754[(18)] = inst_35513);

return statearr_35754;
})();
var statearr_35757_37583 = state_35628__$1;
(statearr_35757_37583[(2)] = null);

(statearr_35757_37583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (18))){
var inst_35540 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35759_37589 = state_35628__$1;
(statearr_35759_37589[(2)] = inst_35540);

(statearr_35759_37589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (37))){
var state_35628__$1 = state_35628;
var statearr_35761_37596 = state_35628__$1;
(statearr_35761_37596[(2)] = null);

(statearr_35761_37596[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (8))){
var inst_35482 = (state_35628[(8)]);
var inst_35506 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35482);
var state_35628__$1 = state_35628;
var statearr_35764_37598 = state_35628__$1;
(statearr_35764_37598[(2)] = inst_35506);

(statearr_35764_37598[(1)] = (10));


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
var statearr_35772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35772[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35772[(1)] = (1));

return statearr_35772;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35628){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35628);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35778){if((e35778 instanceof Object)){
var ex__34210__auto__ = e35778;
var statearr_35780_37608 = state_35628;
(statearr_35780_37608[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35778;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37610 = state_35628;
state_35628 = G__37610;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35628){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35787 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35787[(6)] = c__34274__auto___37448);

return statearr_35787;
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
var G__35803 = arguments.length;
switch (G__35803) {
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
var G__35823 = arguments.length;
switch (G__35823) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35817_SHARP_){
if(cljs.core.truth_((p1__35817_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35817_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35817_SHARP_.call(null,topic)))){
return p1__35817_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35817_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35831 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35832){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35832 = meta35832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35833,meta35832__$1){
var self__ = this;
var _35833__$1 = this;
return (new cljs.core.async.t_cljs$core$async35831(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35832__$1));
}));

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35833){
var self__ = this;
var _35833__$1 = this;
return self__.meta35832;
}));

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35832","meta35832",-583861689,null)], null);
}));

(cljs.core.async.t_cljs$core$async35831.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35831");

(cljs.core.async.t_cljs$core$async35831.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35831");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35831.
 */
cljs.core.async.__GT_t_cljs$core$async35831 = (function cljs$core$async$__GT_t_cljs$core$async35831(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35832){
return (new cljs.core.async.t_cljs$core$async35831(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35832));
});

}

return (new cljs.core.async.t_cljs$core$async35831(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35945){
var state_val_35948 = (state_35945[(1)]);
if((state_val_35948 === (7))){
var inst_35940 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35952_37707 = state_35945__$1;
(statearr_35952_37707[(2)] = inst_35940);

(statearr_35952_37707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (20))){
var state_35945__$1 = state_35945;
var statearr_35955_37709 = state_35945__$1;
(statearr_35955_37709[(2)] = null);

(statearr_35955_37709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (1))){
var state_35945__$1 = state_35945;
var statearr_35956_37711 = state_35945__$1;
(statearr_35956_37711[(2)] = null);

(statearr_35956_37711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (24))){
var inst_35921 = (state_35945[(7)]);
var inst_35931 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35921);
var state_35945__$1 = state_35945;
var statearr_35958_37714 = state_35945__$1;
(statearr_35958_37714[(2)] = inst_35931);

(statearr_35958_37714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (4))){
var inst_35869 = (state_35945[(8)]);
var inst_35869__$1 = (state_35945[(2)]);
var inst_35870 = (inst_35869__$1 == null);
var state_35945__$1 = (function (){var statearr_35962 = state_35945;
(statearr_35962[(8)] = inst_35869__$1);

return statearr_35962;
})();
if(cljs.core.truth_(inst_35870)){
var statearr_35963_37717 = state_35945__$1;
(statearr_35963_37717[(1)] = (5));

} else {
var statearr_35965_37718 = state_35945__$1;
(statearr_35965_37718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (15))){
var inst_35915 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35967_37719 = state_35945__$1;
(statearr_35967_37719[(2)] = inst_35915);

(statearr_35967_37719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (21))){
var inst_35936 = (state_35945[(2)]);
var state_35945__$1 = (function (){var statearr_35968 = state_35945;
(statearr_35968[(9)] = inst_35936);

return statearr_35968;
})();
var statearr_35970_37722 = state_35945__$1;
(statearr_35970_37722[(2)] = null);

(statearr_35970_37722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (13))){
var inst_35895 = (state_35945[(10)]);
var inst_35898 = cljs.core.chunked_seq_QMARK_(inst_35895);
var state_35945__$1 = state_35945;
if(inst_35898){
var statearr_35973_37723 = state_35945__$1;
(statearr_35973_37723[(1)] = (16));

} else {
var statearr_35974_37724 = state_35945__$1;
(statearr_35974_37724[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (22))){
var inst_35928 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
if(cljs.core.truth_(inst_35928)){
var statearr_35975_37725 = state_35945__$1;
(statearr_35975_37725[(1)] = (23));

} else {
var statearr_35976_37728 = state_35945__$1;
(statearr_35976_37728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (6))){
var inst_35921 = (state_35945[(7)]);
var inst_35869 = (state_35945[(8)]);
var inst_35923 = (state_35945[(11)]);
var inst_35921__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35869) : topic_fn.call(null,inst_35869));
var inst_35922 = cljs.core.deref(mults);
var inst_35923__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35922,inst_35921__$1);
var state_35945__$1 = (function (){var statearr_35977 = state_35945;
(statearr_35977[(7)] = inst_35921__$1);

(statearr_35977[(11)] = inst_35923__$1);

return statearr_35977;
})();
if(cljs.core.truth_(inst_35923__$1)){
var statearr_35980_37729 = state_35945__$1;
(statearr_35980_37729[(1)] = (19));

} else {
var statearr_35981_37730 = state_35945__$1;
(statearr_35981_37730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (25))){
var inst_35933 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35983_37735 = state_35945__$1;
(statearr_35983_37735[(2)] = inst_35933);

(statearr_35983_37735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (17))){
var inst_35895 = (state_35945[(10)]);
var inst_35905 = cljs.core.first(inst_35895);
var inst_35906 = cljs.core.async.muxch_STAR_(inst_35905);
var inst_35907 = cljs.core.async.close_BANG_(inst_35906);
var inst_35909 = cljs.core.next(inst_35895);
var inst_35879 = inst_35909;
var inst_35880 = null;
var inst_35881 = (0);
var inst_35882 = (0);
var state_35945__$1 = (function (){var statearr_35985 = state_35945;
(statearr_35985[(12)] = inst_35879);

(statearr_35985[(13)] = inst_35881);

(statearr_35985[(14)] = inst_35882);

(statearr_35985[(15)] = inst_35907);

(statearr_35985[(16)] = inst_35880);

return statearr_35985;
})();
var statearr_35987_37739 = state_35945__$1;
(statearr_35987_37739[(2)] = null);

(statearr_35987_37739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (3))){
var inst_35942 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35945__$1,inst_35942);
} else {
if((state_val_35948 === (12))){
var inst_35917 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35989_37741 = state_35945__$1;
(statearr_35989_37741[(2)] = inst_35917);

(statearr_35989_37741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (2))){
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35945__$1,(4),ch);
} else {
if((state_val_35948 === (23))){
var state_35945__$1 = state_35945;
var statearr_35990_37742 = state_35945__$1;
(statearr_35990_37742[(2)] = null);

(statearr_35990_37742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (19))){
var inst_35869 = (state_35945[(8)]);
var inst_35923 = (state_35945[(11)]);
var inst_35926 = cljs.core.async.muxch_STAR_(inst_35923);
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35945__$1,(22),inst_35926,inst_35869);
} else {
if((state_val_35948 === (11))){
var inst_35879 = (state_35945[(12)]);
var inst_35895 = (state_35945[(10)]);
var inst_35895__$1 = cljs.core.seq(inst_35879);
var state_35945__$1 = (function (){var statearr_35994 = state_35945;
(statearr_35994[(10)] = inst_35895__$1);

return statearr_35994;
})();
if(inst_35895__$1){
var statearr_35995_37744 = state_35945__$1;
(statearr_35995_37744[(1)] = (13));

} else {
var statearr_35996_37745 = state_35945__$1;
(statearr_35996_37745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (9))){
var inst_35919 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35997_37746 = state_35945__$1;
(statearr_35997_37746[(2)] = inst_35919);

(statearr_35997_37746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (5))){
var inst_35876 = cljs.core.deref(mults);
var inst_35877 = cljs.core.vals(inst_35876);
var inst_35878 = cljs.core.seq(inst_35877);
var inst_35879 = inst_35878;
var inst_35880 = null;
var inst_35881 = (0);
var inst_35882 = (0);
var state_35945__$1 = (function (){var statearr_36002 = state_35945;
(statearr_36002[(12)] = inst_35879);

(statearr_36002[(13)] = inst_35881);

(statearr_36002[(14)] = inst_35882);

(statearr_36002[(16)] = inst_35880);

return statearr_36002;
})();
var statearr_36005_37756 = state_35945__$1;
(statearr_36005_37756[(2)] = null);

(statearr_36005_37756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (14))){
var state_35945__$1 = state_35945;
var statearr_36010_37757 = state_35945__$1;
(statearr_36010_37757[(2)] = null);

(statearr_36010_37757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (16))){
var inst_35895 = (state_35945[(10)]);
var inst_35900 = cljs.core.chunk_first(inst_35895);
var inst_35901 = cljs.core.chunk_rest(inst_35895);
var inst_35902 = cljs.core.count(inst_35900);
var inst_35879 = inst_35901;
var inst_35880 = inst_35900;
var inst_35881 = inst_35902;
var inst_35882 = (0);
var state_35945__$1 = (function (){var statearr_36014 = state_35945;
(statearr_36014[(12)] = inst_35879);

(statearr_36014[(13)] = inst_35881);

(statearr_36014[(14)] = inst_35882);

(statearr_36014[(16)] = inst_35880);

return statearr_36014;
})();
var statearr_36016_37762 = state_35945__$1;
(statearr_36016_37762[(2)] = null);

(statearr_36016_37762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (10))){
var inst_35879 = (state_35945[(12)]);
var inst_35881 = (state_35945[(13)]);
var inst_35882 = (state_35945[(14)]);
var inst_35880 = (state_35945[(16)]);
var inst_35887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35880,inst_35882);
var inst_35889 = cljs.core.async.muxch_STAR_(inst_35887);
var inst_35890 = cljs.core.async.close_BANG_(inst_35889);
var inst_35892 = (inst_35882 + (1));
var tmp36007 = inst_35879;
var tmp36008 = inst_35881;
var tmp36009 = inst_35880;
var inst_35879__$1 = tmp36007;
var inst_35880__$1 = tmp36009;
var inst_35881__$1 = tmp36008;
var inst_35882__$1 = inst_35892;
var state_35945__$1 = (function (){var statearr_36021 = state_35945;
(statearr_36021[(12)] = inst_35879__$1);

(statearr_36021[(13)] = inst_35881__$1);

(statearr_36021[(14)] = inst_35882__$1);

(statearr_36021[(17)] = inst_35890);

(statearr_36021[(16)] = inst_35880__$1);

return statearr_36021;
})();
var statearr_36023_37768 = state_35945__$1;
(statearr_36023_37768[(2)] = null);

(statearr_36023_37768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (18))){
var inst_35912 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_36027_37774 = state_35945__$1;
(statearr_36027_37774[(2)] = inst_35912);

(statearr_36027_37774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (8))){
var inst_35881 = (state_35945[(13)]);
var inst_35882 = (state_35945[(14)]);
var inst_35884 = (inst_35882 < inst_35881);
var inst_35885 = inst_35884;
var state_35945__$1 = state_35945;
if(cljs.core.truth_(inst_35885)){
var statearr_36029_37780 = state_35945__$1;
(statearr_36029_37780[(1)] = (10));

} else {
var statearr_36031_37781 = state_35945__$1;
(statearr_36031_37781[(1)] = (11));

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
var statearr_36034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36034[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36034[(1)] = (1));

return statearr_36034;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35945){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35945);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36035){if((e36035 instanceof Object)){
var ex__34210__auto__ = e36035;
var statearr_36036_37790 = state_35945;
(statearr_36036_37790[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37792 = state_35945;
state_35945 = G__37792;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36039 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36039[(6)] = c__34274__auto___37701);

return statearr_36039;
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
var G__36045 = arguments.length;
switch (G__36045) {
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
var c__34274__auto___37824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36102){
var state_val_36103 = (state_36102[(1)]);
if((state_val_36103 === (7))){
var state_36102__$1 = state_36102;
var statearr_36109_37826 = state_36102__$1;
(statearr_36109_37826[(2)] = null);

(statearr_36109_37826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (1))){
var state_36102__$1 = state_36102;
var statearr_36110_37828 = state_36102__$1;
(statearr_36110_37828[(2)] = null);

(statearr_36110_37828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (4))){
var inst_36057 = (state_36102[(7)]);
var inst_36059 = (inst_36057 < cnt);
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36059)){
var statearr_36113_37834 = state_36102__$1;
(statearr_36113_37834[(1)] = (6));

} else {
var statearr_36114_37835 = state_36102__$1;
(statearr_36114_37835[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (15))){
var inst_36097 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36116_37838 = state_36102__$1;
(statearr_36116_37838[(2)] = inst_36097);

(statearr_36116_37838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (13))){
var inst_36090 = cljs.core.async.close_BANG_(out);
var state_36102__$1 = state_36102;
var statearr_36117_37840 = state_36102__$1;
(statearr_36117_37840[(2)] = inst_36090);

(statearr_36117_37840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (6))){
var state_36102__$1 = state_36102;
var statearr_36119_37842 = state_36102__$1;
(statearr_36119_37842[(2)] = null);

(statearr_36119_37842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (3))){
var inst_36100 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36102__$1,inst_36100);
} else {
if((state_val_36103 === (12))){
var inst_36087 = (state_36102[(8)]);
var inst_36087__$1 = (state_36102[(2)]);
var inst_36088 = cljs.core.some(cljs.core.nil_QMARK_,inst_36087__$1);
var state_36102__$1 = (function (){var statearr_36124 = state_36102;
(statearr_36124[(8)] = inst_36087__$1);

return statearr_36124;
})();
if(cljs.core.truth_(inst_36088)){
var statearr_36125_37851 = state_36102__$1;
(statearr_36125_37851[(1)] = (13));

} else {
var statearr_36126_37852 = state_36102__$1;
(statearr_36126_37852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (2))){
var inst_36056 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36057 = (0);
var state_36102__$1 = (function (){var statearr_36127 = state_36102;
(statearr_36127[(7)] = inst_36057);

(statearr_36127[(9)] = inst_36056);

return statearr_36127;
})();
var statearr_36128_37853 = state_36102__$1;
(statearr_36128_37853[(2)] = null);

(statearr_36128_37853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (11))){
var inst_36057 = (state_36102[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36102,(10),Object,null,(9));
var inst_36071 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36057) : chs__$1.call(null,inst_36057));
var inst_36072 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36057) : done.call(null,inst_36057));
var inst_36073 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36071,inst_36072);
var state_36102__$1 = state_36102;
var statearr_36129_37856 = state_36102__$1;
(statearr_36129_37856[(2)] = inst_36073);


cljs.core.async.impl.ioc_helpers.process_exception(state_36102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (9))){
var inst_36057 = (state_36102[(7)]);
var inst_36075 = (state_36102[(2)]);
var inst_36079 = (inst_36057 + (1));
var inst_36057__$1 = inst_36079;
var state_36102__$1 = (function (){var statearr_36130 = state_36102;
(statearr_36130[(10)] = inst_36075);

(statearr_36130[(7)] = inst_36057__$1);

return statearr_36130;
})();
var statearr_36131_37860 = state_36102__$1;
(statearr_36131_37860[(2)] = null);

(statearr_36131_37860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (5))){
var inst_36085 = (state_36102[(2)]);
var state_36102__$1 = (function (){var statearr_36132 = state_36102;
(statearr_36132[(11)] = inst_36085);

return statearr_36132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36102__$1,(12),dchan);
} else {
if((state_val_36103 === (14))){
var inst_36087 = (state_36102[(8)]);
var inst_36092 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36087);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36102__$1,(16),out,inst_36092);
} else {
if((state_val_36103 === (16))){
var inst_36094 = (state_36102[(2)]);
var state_36102__$1 = (function (){var statearr_36137 = state_36102;
(statearr_36137[(12)] = inst_36094);

return statearr_36137;
})();
var statearr_36138_37868 = state_36102__$1;
(statearr_36138_37868[(2)] = null);

(statearr_36138_37868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (10))){
var inst_36066 = (state_36102[(2)]);
var inst_36067 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36102__$1 = (function (){var statearr_36139 = state_36102;
(statearr_36139[(13)] = inst_36066);

return statearr_36139;
})();
var statearr_36141_37871 = state_36102__$1;
(statearr_36141_37871[(2)] = inst_36067);


cljs.core.async.impl.ioc_helpers.process_exception(state_36102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (8))){
var inst_36083 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36144_37875 = state_36102__$1;
(statearr_36144_37875[(2)] = inst_36083);

(statearr_36144_37875[(1)] = (5));


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
var statearr_36145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36145[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36145[(1)] = (1));

return statearr_36145;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36102){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36102);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36146){if((e36146 instanceof Object)){
var ex__34210__auto__ = e36146;
var statearr_36147_37878 = state_36102;
(statearr_36147_37878[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37883 = state_36102;
state_36102 = G__37883;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36151 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36151[(6)] = c__34274__auto___37824);

return statearr_36151;
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
var G__36181 = arguments.length;
switch (G__36181) {
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
var c__34274__auto___37891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36216){
var state_val_36217 = (state_36216[(1)]);
if((state_val_36217 === (7))){
var inst_36194 = (state_36216[(7)]);
var inst_36193 = (state_36216[(8)]);
var inst_36193__$1 = (state_36216[(2)]);
var inst_36194__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36193__$1,(0),null);
var inst_36195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36193__$1,(1),null);
var inst_36197 = (inst_36194__$1 == null);
var state_36216__$1 = (function (){var statearr_36220 = state_36216;
(statearr_36220[(7)] = inst_36194__$1);

(statearr_36220[(9)] = inst_36195);

(statearr_36220[(8)] = inst_36193__$1);

return statearr_36220;
})();
if(cljs.core.truth_(inst_36197)){
var statearr_36222_37899 = state_36216__$1;
(statearr_36222_37899[(1)] = (8));

} else {
var statearr_36223_37900 = state_36216__$1;
(statearr_36223_37900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (1))){
var inst_36183 = cljs.core.vec(chs);
var inst_36184 = inst_36183;
var state_36216__$1 = (function (){var statearr_36225 = state_36216;
(statearr_36225[(10)] = inst_36184);

return statearr_36225;
})();
var statearr_36226_37904 = state_36216__$1;
(statearr_36226_37904[(2)] = null);

(statearr_36226_37904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (4))){
var inst_36184 = (state_36216[(10)]);
var state_36216__$1 = state_36216;
return cljs.core.async.ioc_alts_BANG_(state_36216__$1,(7),inst_36184);
} else {
if((state_val_36217 === (6))){
var inst_36212 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36227_37907 = state_36216__$1;
(statearr_36227_37907[(2)] = inst_36212);

(statearr_36227_37907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (3))){
var inst_36214 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36216__$1,inst_36214);
} else {
if((state_val_36217 === (2))){
var inst_36184 = (state_36216[(10)]);
var inst_36186 = cljs.core.count(inst_36184);
var inst_36187 = (inst_36186 > (0));
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36187)){
var statearr_36231_37914 = state_36216__$1;
(statearr_36231_37914[(1)] = (4));

} else {
var statearr_36232_37916 = state_36216__$1;
(statearr_36232_37916[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (11))){
var inst_36184 = (state_36216[(10)]);
var inst_36205 = (state_36216[(2)]);
var tmp36228 = inst_36184;
var inst_36184__$1 = tmp36228;
var state_36216__$1 = (function (){var statearr_36234 = state_36216;
(statearr_36234[(11)] = inst_36205);

(statearr_36234[(10)] = inst_36184__$1);

return statearr_36234;
})();
var statearr_36236_37918 = state_36216__$1;
(statearr_36236_37918[(2)] = null);

(statearr_36236_37918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (9))){
var inst_36194 = (state_36216[(7)]);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36216__$1,(11),out,inst_36194);
} else {
if((state_val_36217 === (5))){
var inst_36210 = cljs.core.async.close_BANG_(out);
var state_36216__$1 = state_36216;
var statearr_36244_37922 = state_36216__$1;
(statearr_36244_37922[(2)] = inst_36210);

(statearr_36244_37922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (10))){
var inst_36208 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36248_37923 = state_36216__$1;
(statearr_36248_37923[(2)] = inst_36208);

(statearr_36248_37923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (8))){
var inst_36194 = (state_36216[(7)]);
var inst_36195 = (state_36216[(9)]);
var inst_36184 = (state_36216[(10)]);
var inst_36193 = (state_36216[(8)]);
var inst_36199 = (function (){var cs = inst_36184;
var vec__36189 = inst_36193;
var v = inst_36194;
var c = inst_36195;
return (function (p1__36154_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36154_SHARP_);
});
})();
var inst_36200 = cljs.core.filterv(inst_36199,inst_36184);
var inst_36184__$1 = inst_36200;
var state_36216__$1 = (function (){var statearr_36250 = state_36216;
(statearr_36250[(10)] = inst_36184__$1);

return statearr_36250;
})();
var statearr_36251_37926 = state_36216__$1;
(statearr_36251_37926[(2)] = null);

(statearr_36251_37926[(1)] = (2));


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
var statearr_36253 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36253[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36253[(1)] = (1));

return statearr_36253;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36216){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36216);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36255){if((e36255 instanceof Object)){
var ex__34210__auto__ = e36255;
var statearr_36257_37931 = state_36216;
(statearr_36257_37931[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36255;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37933 = state_36216;
state_36216 = G__37933;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36259 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36259[(6)] = c__34274__auto___37891);

return statearr_36259;
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
var G__36263 = arguments.length;
switch (G__36263) {
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
var c__34274__auto___37942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36293){
var state_val_36294 = (state_36293[(1)]);
if((state_val_36294 === (7))){
var inst_36274 = (state_36293[(7)]);
var inst_36274__$1 = (state_36293[(2)]);
var inst_36275 = (inst_36274__$1 == null);
var inst_36276 = cljs.core.not(inst_36275);
var state_36293__$1 = (function (){var statearr_36300 = state_36293;
(statearr_36300[(7)] = inst_36274__$1);

return statearr_36300;
})();
if(inst_36276){
var statearr_36304_37945 = state_36293__$1;
(statearr_36304_37945[(1)] = (8));

} else {
var statearr_36305_37947 = state_36293__$1;
(statearr_36305_37947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (1))){
var inst_36267 = (0);
var state_36293__$1 = (function (){var statearr_36306 = state_36293;
(statearr_36306[(8)] = inst_36267);

return statearr_36306;
})();
var statearr_36307_37948 = state_36293__$1;
(statearr_36307_37948[(2)] = null);

(statearr_36307_37948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (4))){
var state_36293__$1 = state_36293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36293__$1,(7),ch);
} else {
if((state_val_36294 === (6))){
var inst_36288 = (state_36293[(2)]);
var state_36293__$1 = state_36293;
var statearr_36309_37953 = state_36293__$1;
(statearr_36309_37953[(2)] = inst_36288);

(statearr_36309_37953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (3))){
var inst_36290 = (state_36293[(2)]);
var inst_36291 = cljs.core.async.close_BANG_(out);
var state_36293__$1 = (function (){var statearr_36311 = state_36293;
(statearr_36311[(9)] = inst_36290);

return statearr_36311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36293__$1,inst_36291);
} else {
if((state_val_36294 === (2))){
var inst_36267 = (state_36293[(8)]);
var inst_36270 = (inst_36267 < n);
var state_36293__$1 = state_36293;
if(cljs.core.truth_(inst_36270)){
var statearr_36313_37960 = state_36293__$1;
(statearr_36313_37960[(1)] = (4));

} else {
var statearr_36314_37962 = state_36293__$1;
(statearr_36314_37962[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (11))){
var inst_36267 = (state_36293[(8)]);
var inst_36279 = (state_36293[(2)]);
var inst_36281 = (inst_36267 + (1));
var inst_36267__$1 = inst_36281;
var state_36293__$1 = (function (){var statearr_36316 = state_36293;
(statearr_36316[(10)] = inst_36279);

(statearr_36316[(8)] = inst_36267__$1);

return statearr_36316;
})();
var statearr_36318_37968 = state_36293__$1;
(statearr_36318_37968[(2)] = null);

(statearr_36318_37968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (9))){
var state_36293__$1 = state_36293;
var statearr_36319_37971 = state_36293__$1;
(statearr_36319_37971[(2)] = null);

(statearr_36319_37971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (5))){
var state_36293__$1 = state_36293;
var statearr_36320_37972 = state_36293__$1;
(statearr_36320_37972[(2)] = null);

(statearr_36320_37972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (10))){
var inst_36285 = (state_36293[(2)]);
var state_36293__$1 = state_36293;
var statearr_36322_37975 = state_36293__$1;
(statearr_36322_37975[(2)] = inst_36285);

(statearr_36322_37975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (8))){
var inst_36274 = (state_36293[(7)]);
var state_36293__$1 = state_36293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36293__$1,(11),out,inst_36274);
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
var statearr_36324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36324[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36324[(1)] = (1));

return statearr_36324;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36293){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36293);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36325){if((e36325 instanceof Object)){
var ex__34210__auto__ = e36325;
var statearr_36328_37981 = state_36293;
(statearr_36328_37981[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37984 = state_36293;
state_36293 = G__37984;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36329 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36329[(6)] = c__34274__auto___37942);

return statearr_36329;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36334 = (function (f,ch,meta36335){
this.f = f;
this.ch = ch;
this.meta36335 = meta36335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36336,meta36335__$1){
var self__ = this;
var _36336__$1 = this;
return (new cljs.core.async.t_cljs$core$async36334(self__.f,self__.ch,meta36335__$1));
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36336){
var self__ = this;
var _36336__$1 = this;
return self__.meta36335;
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36346 = (function (f,ch,meta36335,_,fn1,meta36347){
this.f = f;
this.ch = ch;
this.meta36335 = meta36335;
this._ = _;
this.fn1 = fn1;
this.meta36347 = meta36347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36348,meta36347__$1){
var self__ = this;
var _36348__$1 = this;
return (new cljs.core.async.t_cljs$core$async36346(self__.f,self__.ch,self__.meta36335,self__._,self__.fn1,meta36347__$1));
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36348){
var self__ = this;
var _36348__$1 = this;
return self__.meta36347;
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36332_SHARP_){
var G__36353 = (((p1__36332_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36332_SHARP_) : self__.f.call(null,p1__36332_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36353) : f1.call(null,G__36353));
});
}));

(cljs.core.async.t_cljs$core$async36346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36335","meta36335",622785842,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36334","cljs.core.async/t_cljs$core$async36334",-1572792361,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36347","meta36347",800743982,null)], null);
}));

(cljs.core.async.t_cljs$core$async36346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36346");

(cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36346.
 */
cljs.core.async.__GT_t_cljs$core$async36346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36346(f__$1,ch__$1,meta36335__$1,___$2,fn1__$1,meta36347){
return (new cljs.core.async.t_cljs$core$async36346(f__$1,ch__$1,meta36335__$1,___$2,fn1__$1,meta36347));
});

}

return (new cljs.core.async.t_cljs$core$async36346(self__.f,self__.ch,self__.meta36335,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36358 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36358) : self__.f.call(null,G__36358));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36335","meta36335",622785842,null)], null);
}));

(cljs.core.async.t_cljs$core$async36334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36334");

(cljs.core.async.t_cljs$core$async36334.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36334.
 */
cljs.core.async.__GT_t_cljs$core$async36334 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36334(f__$1,ch__$1,meta36335){
return (new cljs.core.async.t_cljs$core$async36334(f__$1,ch__$1,meta36335));
});

}

return (new cljs.core.async.t_cljs$core$async36334(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36365 = (function (f,ch,meta36366){
this.f = f;
this.ch = ch;
this.meta36366 = meta36366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36367,meta36366__$1){
var self__ = this;
var _36367__$1 = this;
return (new cljs.core.async.t_cljs$core$async36365(self__.f,self__.ch,meta36366__$1));
}));

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36367){
var self__ = this;
var _36367__$1 = this;
return self__.meta36366;
}));

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36366","meta36366",676356982,null)], null);
}));

(cljs.core.async.t_cljs$core$async36365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36365");

(cljs.core.async.t_cljs$core$async36365.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36365.
 */
cljs.core.async.__GT_t_cljs$core$async36365 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36365(f__$1,ch__$1,meta36366){
return (new cljs.core.async.t_cljs$core$async36365(f__$1,ch__$1,meta36366));
});

}

return (new cljs.core.async.t_cljs$core$async36365(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36381 = (function (p,ch,meta36382){
this.p = p;
this.ch = ch;
this.meta36382 = meta36382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36383,meta36382__$1){
var self__ = this;
var _36383__$1 = this;
return (new cljs.core.async.t_cljs$core$async36381(self__.p,self__.ch,meta36382__$1));
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36383){
var self__ = this;
var _36383__$1 = this;
return self__.meta36382;
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36382","meta36382",1356888983,null)], null);
}));

(cljs.core.async.t_cljs$core$async36381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36381");

(cljs.core.async.t_cljs$core$async36381.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36381.
 */
cljs.core.async.__GT_t_cljs$core$async36381 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36381(p__$1,ch__$1,meta36382){
return (new cljs.core.async.t_cljs$core$async36381(p__$1,ch__$1,meta36382));
});

}

return (new cljs.core.async.t_cljs$core$async36381(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36408 = arguments.length;
switch (G__36408) {
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
var c__34274__auto___38016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36439){
var state_val_36440 = (state_36439[(1)]);
if((state_val_36440 === (7))){
var inst_36435 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36441_38017 = state_36439__$1;
(statearr_36441_38017[(2)] = inst_36435);

(statearr_36441_38017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (1))){
var state_36439__$1 = state_36439;
var statearr_36444_38018 = state_36439__$1;
(statearr_36444_38018[(2)] = null);

(statearr_36444_38018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (4))){
var inst_36421 = (state_36439[(7)]);
var inst_36421__$1 = (state_36439[(2)]);
var inst_36422 = (inst_36421__$1 == null);
var state_36439__$1 = (function (){var statearr_36445 = state_36439;
(statearr_36445[(7)] = inst_36421__$1);

return statearr_36445;
})();
if(cljs.core.truth_(inst_36422)){
var statearr_36446_38019 = state_36439__$1;
(statearr_36446_38019[(1)] = (5));

} else {
var statearr_36447_38020 = state_36439__$1;
(statearr_36447_38020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (6))){
var inst_36421 = (state_36439[(7)]);
var inst_36426 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36421) : p.call(null,inst_36421));
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36426)){
var statearr_36450_38023 = state_36439__$1;
(statearr_36450_38023[(1)] = (8));

} else {
var statearr_36451_38026 = state_36439__$1;
(statearr_36451_38026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (3))){
var inst_36437 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36439__$1,inst_36437);
} else {
if((state_val_36440 === (2))){
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36439__$1,(4),ch);
} else {
if((state_val_36440 === (11))){
var inst_36429 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36455_38027 = state_36439__$1;
(statearr_36455_38027[(2)] = inst_36429);

(statearr_36455_38027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (9))){
var state_36439__$1 = state_36439;
var statearr_36456_38029 = state_36439__$1;
(statearr_36456_38029[(2)] = null);

(statearr_36456_38029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (5))){
var inst_36424 = cljs.core.async.close_BANG_(out);
var state_36439__$1 = state_36439;
var statearr_36462_38032 = state_36439__$1;
(statearr_36462_38032[(2)] = inst_36424);

(statearr_36462_38032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (10))){
var inst_36432 = (state_36439[(2)]);
var state_36439__$1 = (function (){var statearr_36464 = state_36439;
(statearr_36464[(8)] = inst_36432);

return statearr_36464;
})();
var statearr_36465_38033 = state_36439__$1;
(statearr_36465_38033[(2)] = null);

(statearr_36465_38033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (8))){
var inst_36421 = (state_36439[(7)]);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36439__$1,(11),out,inst_36421);
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
var statearr_36470 = [null,null,null,null,null,null,null,null,null];
(statearr_36470[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36470[(1)] = (1));

return statearr_36470;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36439){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36439);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36471){if((e36471 instanceof Object)){
var ex__34210__auto__ = e36471;
var statearr_36472_38035 = state_36439;
(statearr_36472_38035[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36471;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38038 = state_36439;
state_36439 = G__38038;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36474 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36474[(6)] = c__34274__auto___38016);

return statearr_36474;
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
var G__36477 = arguments.length;
switch (G__36477) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36544){
var state_val_36545 = (state_36544[(1)]);
if((state_val_36545 === (7))){
var inst_36539 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
var statearr_36548_38044 = state_36544__$1;
(statearr_36548_38044[(2)] = inst_36539);

(statearr_36548_38044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (20))){
var inst_36508 = (state_36544[(7)]);
var inst_36520 = (state_36544[(2)]);
var inst_36521 = cljs.core.next(inst_36508);
var inst_36494 = inst_36521;
var inst_36495 = null;
var inst_36496 = (0);
var inst_36497 = (0);
var state_36544__$1 = (function (){var statearr_36550 = state_36544;
(statearr_36550[(8)] = inst_36494);

(statearr_36550[(9)] = inst_36520);

(statearr_36550[(10)] = inst_36496);

(statearr_36550[(11)] = inst_36495);

(statearr_36550[(12)] = inst_36497);

return statearr_36550;
})();
var statearr_36551_38050 = state_36544__$1;
(statearr_36551_38050[(2)] = null);

(statearr_36551_38050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (1))){
var state_36544__$1 = state_36544;
var statearr_36553_38051 = state_36544__$1;
(statearr_36553_38051[(2)] = null);

(statearr_36553_38051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (4))){
var inst_36482 = (state_36544[(13)]);
var inst_36482__$1 = (state_36544[(2)]);
var inst_36483 = (inst_36482__$1 == null);
var state_36544__$1 = (function (){var statearr_36554 = state_36544;
(statearr_36554[(13)] = inst_36482__$1);

return statearr_36554;
})();
if(cljs.core.truth_(inst_36483)){
var statearr_36555_38052 = state_36544__$1;
(statearr_36555_38052[(1)] = (5));

} else {
var statearr_36556_38053 = state_36544__$1;
(statearr_36556_38053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (15))){
var state_36544__$1 = state_36544;
var statearr_36561_38054 = state_36544__$1;
(statearr_36561_38054[(2)] = null);

(statearr_36561_38054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (21))){
var state_36544__$1 = state_36544;
var statearr_36562_38056 = state_36544__$1;
(statearr_36562_38056[(2)] = null);

(statearr_36562_38056[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (13))){
var inst_36494 = (state_36544[(8)]);
var inst_36496 = (state_36544[(10)]);
var inst_36495 = (state_36544[(11)]);
var inst_36497 = (state_36544[(12)]);
var inst_36504 = (state_36544[(2)]);
var inst_36505 = (inst_36497 + (1));
var tmp36558 = inst_36494;
var tmp36559 = inst_36496;
var tmp36560 = inst_36495;
var inst_36494__$1 = tmp36558;
var inst_36495__$1 = tmp36560;
var inst_36496__$1 = tmp36559;
var inst_36497__$1 = inst_36505;
var state_36544__$1 = (function (){var statearr_36564 = state_36544;
(statearr_36564[(8)] = inst_36494__$1);

(statearr_36564[(14)] = inst_36504);

(statearr_36564[(10)] = inst_36496__$1);

(statearr_36564[(11)] = inst_36495__$1);

(statearr_36564[(12)] = inst_36497__$1);

return statearr_36564;
})();
var statearr_36565_38061 = state_36544__$1;
(statearr_36565_38061[(2)] = null);

(statearr_36565_38061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (22))){
var state_36544__$1 = state_36544;
var statearr_36567_38062 = state_36544__$1;
(statearr_36567_38062[(2)] = null);

(statearr_36567_38062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (6))){
var inst_36482 = (state_36544[(13)]);
var inst_36492 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36482) : f.call(null,inst_36482));
var inst_36493 = cljs.core.seq(inst_36492);
var inst_36494 = inst_36493;
var inst_36495 = null;
var inst_36496 = (0);
var inst_36497 = (0);
var state_36544__$1 = (function (){var statearr_36568 = state_36544;
(statearr_36568[(8)] = inst_36494);

(statearr_36568[(10)] = inst_36496);

(statearr_36568[(11)] = inst_36495);

(statearr_36568[(12)] = inst_36497);

return statearr_36568;
})();
var statearr_36570_38065 = state_36544__$1;
(statearr_36570_38065[(2)] = null);

(statearr_36570_38065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (17))){
var inst_36508 = (state_36544[(7)]);
var inst_36513 = cljs.core.chunk_first(inst_36508);
var inst_36514 = cljs.core.chunk_rest(inst_36508);
var inst_36515 = cljs.core.count(inst_36513);
var inst_36494 = inst_36514;
var inst_36495 = inst_36513;
var inst_36496 = inst_36515;
var inst_36497 = (0);
var state_36544__$1 = (function (){var statearr_36571 = state_36544;
(statearr_36571[(8)] = inst_36494);

(statearr_36571[(10)] = inst_36496);

(statearr_36571[(11)] = inst_36495);

(statearr_36571[(12)] = inst_36497);

return statearr_36571;
})();
var statearr_36572_38067 = state_36544__$1;
(statearr_36572_38067[(2)] = null);

(statearr_36572_38067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (3))){
var inst_36541 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36544__$1,inst_36541);
} else {
if((state_val_36545 === (12))){
var inst_36529 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
var statearr_36574_38070 = state_36544__$1;
(statearr_36574_38070[(2)] = inst_36529);

(statearr_36574_38070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (2))){
var state_36544__$1 = state_36544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36544__$1,(4),in$);
} else {
if((state_val_36545 === (23))){
var inst_36537 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
var statearr_36576_38071 = state_36544__$1;
(statearr_36576_38071[(2)] = inst_36537);

(statearr_36576_38071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (19))){
var inst_36524 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
var statearr_36577_38074 = state_36544__$1;
(statearr_36577_38074[(2)] = inst_36524);

(statearr_36577_38074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (11))){
var inst_36494 = (state_36544[(8)]);
var inst_36508 = (state_36544[(7)]);
var inst_36508__$1 = cljs.core.seq(inst_36494);
var state_36544__$1 = (function (){var statearr_36579 = state_36544;
(statearr_36579[(7)] = inst_36508__$1);

return statearr_36579;
})();
if(inst_36508__$1){
var statearr_36580_38075 = state_36544__$1;
(statearr_36580_38075[(1)] = (14));

} else {
var statearr_36581_38076 = state_36544__$1;
(statearr_36581_38076[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (9))){
var inst_36531 = (state_36544[(2)]);
var inst_36532 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36544__$1 = (function (){var statearr_36582 = state_36544;
(statearr_36582[(15)] = inst_36531);

return statearr_36582;
})();
if(cljs.core.truth_(inst_36532)){
var statearr_36584_38077 = state_36544__$1;
(statearr_36584_38077[(1)] = (21));

} else {
var statearr_36585_38078 = state_36544__$1;
(statearr_36585_38078[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (5))){
var inst_36486 = cljs.core.async.close_BANG_(out);
var state_36544__$1 = state_36544;
var statearr_36586_38080 = state_36544__$1;
(statearr_36586_38080[(2)] = inst_36486);

(statearr_36586_38080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (14))){
var inst_36508 = (state_36544[(7)]);
var inst_36511 = cljs.core.chunked_seq_QMARK_(inst_36508);
var state_36544__$1 = state_36544;
if(inst_36511){
var statearr_36588_38082 = state_36544__$1;
(statearr_36588_38082[(1)] = (17));

} else {
var statearr_36589_38083 = state_36544__$1;
(statearr_36589_38083[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (16))){
var inst_36527 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
var statearr_36590_38084 = state_36544__$1;
(statearr_36590_38084[(2)] = inst_36527);

(statearr_36590_38084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (10))){
var inst_36495 = (state_36544[(11)]);
var inst_36497 = (state_36544[(12)]);
var inst_36502 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36495,inst_36497);
var state_36544__$1 = state_36544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36544__$1,(13),out,inst_36502);
} else {
if((state_val_36545 === (18))){
var inst_36508 = (state_36544[(7)]);
var inst_36518 = cljs.core.first(inst_36508);
var state_36544__$1 = state_36544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36544__$1,(20),out,inst_36518);
} else {
if((state_val_36545 === (8))){
var inst_36496 = (state_36544[(10)]);
var inst_36497 = (state_36544[(12)]);
var inst_36499 = (inst_36497 < inst_36496);
var inst_36500 = inst_36499;
var state_36544__$1 = state_36544;
if(cljs.core.truth_(inst_36500)){
var statearr_36592_38086 = state_36544__$1;
(statearr_36592_38086[(1)] = (10));

} else {
var statearr_36593_38087 = state_36544__$1;
(statearr_36593_38087[(1)] = (11));

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
var statearr_36595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36595[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36595[(1)] = (1));

return statearr_36595;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36544){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36544);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36596){if((e36596 instanceof Object)){
var ex__34210__auto__ = e36596;
var statearr_36598_38090 = state_36544;
(statearr_36598_38090[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36596;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38091 = state_36544;
state_36544 = G__38091;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36544){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36599 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36599[(6)] = c__34274__auto__);

return statearr_36599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36602 = arguments.length;
switch (G__36602) {
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
var G__36607 = arguments.length;
switch (G__36607) {
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
var G__36611 = arguments.length;
switch (G__36611) {
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
var c__34274__auto___38101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36637){
var state_val_36638 = (state_36637[(1)]);
if((state_val_36638 === (7))){
var inst_36632 = (state_36637[(2)]);
var state_36637__$1 = state_36637;
var statearr_36640_38104 = state_36637__$1;
(statearr_36640_38104[(2)] = inst_36632);

(statearr_36640_38104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (1))){
var inst_36613 = null;
var state_36637__$1 = (function (){var statearr_36641 = state_36637;
(statearr_36641[(7)] = inst_36613);

return statearr_36641;
})();
var statearr_36642_38106 = state_36637__$1;
(statearr_36642_38106[(2)] = null);

(statearr_36642_38106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (4))){
var inst_36617 = (state_36637[(8)]);
var inst_36617__$1 = (state_36637[(2)]);
var inst_36618 = (inst_36617__$1 == null);
var inst_36619 = cljs.core.not(inst_36618);
var state_36637__$1 = (function (){var statearr_36644 = state_36637;
(statearr_36644[(8)] = inst_36617__$1);

return statearr_36644;
})();
if(inst_36619){
var statearr_36645_38107 = state_36637__$1;
(statearr_36645_38107[(1)] = (5));

} else {
var statearr_36646_38109 = state_36637__$1;
(statearr_36646_38109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (6))){
var state_36637__$1 = state_36637;
var statearr_36647_38111 = state_36637__$1;
(statearr_36647_38111[(2)] = null);

(statearr_36647_38111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (3))){
var inst_36634 = (state_36637[(2)]);
var inst_36635 = cljs.core.async.close_BANG_(out);
var state_36637__$1 = (function (){var statearr_36649 = state_36637;
(statearr_36649[(9)] = inst_36634);

return statearr_36649;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36637__$1,inst_36635);
} else {
if((state_val_36638 === (2))){
var state_36637__$1 = state_36637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36637__$1,(4),ch);
} else {
if((state_val_36638 === (11))){
var inst_36617 = (state_36637[(8)]);
var inst_36626 = (state_36637[(2)]);
var inst_36613 = inst_36617;
var state_36637__$1 = (function (){var statearr_36651 = state_36637;
(statearr_36651[(7)] = inst_36613);

(statearr_36651[(10)] = inst_36626);

return statearr_36651;
})();
var statearr_36652_38113 = state_36637__$1;
(statearr_36652_38113[(2)] = null);

(statearr_36652_38113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (9))){
var inst_36617 = (state_36637[(8)]);
var state_36637__$1 = state_36637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36637__$1,(11),out,inst_36617);
} else {
if((state_val_36638 === (5))){
var inst_36617 = (state_36637[(8)]);
var inst_36613 = (state_36637[(7)]);
var inst_36621 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36617,inst_36613);
var state_36637__$1 = state_36637;
if(inst_36621){
var statearr_36655_38117 = state_36637__$1;
(statearr_36655_38117[(1)] = (8));

} else {
var statearr_36656_38118 = state_36637__$1;
(statearr_36656_38118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (10))){
var inst_36629 = (state_36637[(2)]);
var state_36637__$1 = state_36637;
var statearr_36657_38119 = state_36637__$1;
(statearr_36657_38119[(2)] = inst_36629);

(statearr_36657_38119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36638 === (8))){
var inst_36613 = (state_36637[(7)]);
var tmp36653 = inst_36613;
var inst_36613__$1 = tmp36653;
var state_36637__$1 = (function (){var statearr_36658 = state_36637;
(statearr_36658[(7)] = inst_36613__$1);

return statearr_36658;
})();
var statearr_36660_38120 = state_36637__$1;
(statearr_36660_38120[(2)] = null);

(statearr_36660_38120[(1)] = (2));


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
var statearr_36661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36661[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36661[(1)] = (1));

return statearr_36661;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36637){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36637);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36662){if((e36662 instanceof Object)){
var ex__34210__auto__ = e36662;
var statearr_36664_38124 = state_36637;
(statearr_36664_38124[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36662;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38125 = state_36637;
state_36637 = G__38125;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36665 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36665[(6)] = c__34274__auto___38101);

return statearr_36665;
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
var G__36669 = arguments.length;
switch (G__36669) {
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
var c__34274__auto___38130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36709){
var state_val_36710 = (state_36709[(1)]);
if((state_val_36710 === (7))){
var inst_36705 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
var statearr_36712_38131 = state_36709__$1;
(statearr_36712_38131[(2)] = inst_36705);

(statearr_36712_38131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (1))){
var inst_36671 = (new Array(n));
var inst_36672 = inst_36671;
var inst_36673 = (0);
var state_36709__$1 = (function (){var statearr_36714 = state_36709;
(statearr_36714[(7)] = inst_36673);

(statearr_36714[(8)] = inst_36672);

return statearr_36714;
})();
var statearr_36715_38134 = state_36709__$1;
(statearr_36715_38134[(2)] = null);

(statearr_36715_38134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (4))){
var inst_36677 = (state_36709[(9)]);
var inst_36677__$1 = (state_36709[(2)]);
var inst_36678 = (inst_36677__$1 == null);
var inst_36679 = cljs.core.not(inst_36678);
var state_36709__$1 = (function (){var statearr_36716 = state_36709;
(statearr_36716[(9)] = inst_36677__$1);

return statearr_36716;
})();
if(inst_36679){
var statearr_36718_38136 = state_36709__$1;
(statearr_36718_38136[(1)] = (5));

} else {
var statearr_36719_38137 = state_36709__$1;
(statearr_36719_38137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (15))){
var inst_36699 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
var statearr_36720_38138 = state_36709__$1;
(statearr_36720_38138[(2)] = inst_36699);

(statearr_36720_38138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (13))){
var state_36709__$1 = state_36709;
var statearr_36721_38140 = state_36709__$1;
(statearr_36721_38140[(2)] = null);

(statearr_36721_38140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (6))){
var inst_36673 = (state_36709[(7)]);
var inst_36695 = (inst_36673 > (0));
var state_36709__$1 = state_36709;
if(cljs.core.truth_(inst_36695)){
var statearr_36723_38142 = state_36709__$1;
(statearr_36723_38142[(1)] = (12));

} else {
var statearr_36724_38144 = state_36709__$1;
(statearr_36724_38144[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (3))){
var inst_36707 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36709__$1,inst_36707);
} else {
if((state_val_36710 === (12))){
var inst_36672 = (state_36709[(8)]);
var inst_36697 = cljs.core.vec(inst_36672);
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36709__$1,(15),out,inst_36697);
} else {
if((state_val_36710 === (2))){
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36709__$1,(4),ch);
} else {
if((state_val_36710 === (11))){
var inst_36689 = (state_36709[(2)]);
var inst_36690 = (new Array(n));
var inst_36672 = inst_36690;
var inst_36673 = (0);
var state_36709__$1 = (function (){var statearr_36726 = state_36709;
(statearr_36726[(7)] = inst_36673);

(statearr_36726[(10)] = inst_36689);

(statearr_36726[(8)] = inst_36672);

return statearr_36726;
})();
var statearr_36728_38146 = state_36709__$1;
(statearr_36728_38146[(2)] = null);

(statearr_36728_38146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (9))){
var inst_36672 = (state_36709[(8)]);
var inst_36687 = cljs.core.vec(inst_36672);
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36709__$1,(11),out,inst_36687);
} else {
if((state_val_36710 === (5))){
var inst_36673 = (state_36709[(7)]);
var inst_36682 = (state_36709[(11)]);
var inst_36677 = (state_36709[(9)]);
var inst_36672 = (state_36709[(8)]);
var inst_36681 = (inst_36672[inst_36673] = inst_36677);
var inst_36682__$1 = (inst_36673 + (1));
var inst_36683 = (inst_36682__$1 < n);
var state_36709__$1 = (function (){var statearr_36730 = state_36709;
(statearr_36730[(11)] = inst_36682__$1);

(statearr_36730[(12)] = inst_36681);

return statearr_36730;
})();
if(cljs.core.truth_(inst_36683)){
var statearr_36731_38149 = state_36709__$1;
(statearr_36731_38149[(1)] = (8));

} else {
var statearr_36732_38150 = state_36709__$1;
(statearr_36732_38150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (14))){
var inst_36702 = (state_36709[(2)]);
var inst_36703 = cljs.core.async.close_BANG_(out);
var state_36709__$1 = (function (){var statearr_36734 = state_36709;
(statearr_36734[(13)] = inst_36702);

return statearr_36734;
})();
var statearr_36736_38151 = state_36709__$1;
(statearr_36736_38151[(2)] = inst_36703);

(statearr_36736_38151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (10))){
var inst_36693 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
var statearr_36737_38153 = state_36709__$1;
(statearr_36737_38153[(2)] = inst_36693);

(statearr_36737_38153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (8))){
var inst_36682 = (state_36709[(11)]);
var inst_36672 = (state_36709[(8)]);
var tmp36733 = inst_36672;
var inst_36672__$1 = tmp36733;
var inst_36673 = inst_36682;
var state_36709__$1 = (function (){var statearr_36738 = state_36709;
(statearr_36738[(7)] = inst_36673);

(statearr_36738[(8)] = inst_36672__$1);

return statearr_36738;
})();
var statearr_36740_38156 = state_36709__$1;
(statearr_36740_38156[(2)] = null);

(statearr_36740_38156[(1)] = (2));


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
var statearr_36741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36741[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36741[(1)] = (1));

return statearr_36741;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36709){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36709);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36750){if((e36750 instanceof Object)){
var ex__34210__auto__ = e36750;
var statearr_36751_38158 = state_36709;
(statearr_36751_38158[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38160 = state_36709;
state_36709 = G__38160;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36753 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36753[(6)] = c__34274__auto___38130);

return statearr_36753;
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
var G__36756 = arguments.length;
switch (G__36756) {
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
var c__34274__auto___38163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36802){
var state_val_36803 = (state_36802[(1)]);
if((state_val_36803 === (7))){
var inst_36798 = (state_36802[(2)]);
var state_36802__$1 = state_36802;
var statearr_36805_38167 = state_36802__$1;
(statearr_36805_38167[(2)] = inst_36798);

(statearr_36805_38167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (1))){
var inst_36759 = [];
var inst_36760 = inst_36759;
var inst_36761 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36802__$1 = (function (){var statearr_36806 = state_36802;
(statearr_36806[(7)] = inst_36761);

(statearr_36806[(8)] = inst_36760);

return statearr_36806;
})();
var statearr_36808_38168 = state_36802__$1;
(statearr_36808_38168[(2)] = null);

(statearr_36808_38168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (4))){
var inst_36764 = (state_36802[(9)]);
var inst_36764__$1 = (state_36802[(2)]);
var inst_36765 = (inst_36764__$1 == null);
var inst_36766 = cljs.core.not(inst_36765);
var state_36802__$1 = (function (){var statearr_36809 = state_36802;
(statearr_36809[(9)] = inst_36764__$1);

return statearr_36809;
})();
if(inst_36766){
var statearr_36810_38170 = state_36802__$1;
(statearr_36810_38170[(1)] = (5));

} else {
var statearr_36811_38171 = state_36802__$1;
(statearr_36811_38171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (15))){
var inst_36792 = (state_36802[(2)]);
var state_36802__$1 = state_36802;
var statearr_36813_38173 = state_36802__$1;
(statearr_36813_38173[(2)] = inst_36792);

(statearr_36813_38173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (13))){
var state_36802__$1 = state_36802;
var statearr_36814_38175 = state_36802__$1;
(statearr_36814_38175[(2)] = null);

(statearr_36814_38175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (6))){
var inst_36760 = (state_36802[(8)]);
var inst_36786 = inst_36760.length;
var inst_36787 = (inst_36786 > (0));
var state_36802__$1 = state_36802;
if(cljs.core.truth_(inst_36787)){
var statearr_36816_38176 = state_36802__$1;
(statearr_36816_38176[(1)] = (12));

} else {
var statearr_36817_38177 = state_36802__$1;
(statearr_36817_38177[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (3))){
var inst_36800 = (state_36802[(2)]);
var state_36802__$1 = state_36802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36802__$1,inst_36800);
} else {
if((state_val_36803 === (12))){
var inst_36760 = (state_36802[(8)]);
var inst_36790 = cljs.core.vec(inst_36760);
var state_36802__$1 = state_36802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36802__$1,(15),out,inst_36790);
} else {
if((state_val_36803 === (2))){
var state_36802__$1 = state_36802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36802__$1,(4),ch);
} else {
if((state_val_36803 === (11))){
var inst_36764 = (state_36802[(9)]);
var inst_36768 = (state_36802[(10)]);
var inst_36779 = (state_36802[(2)]);
var inst_36780 = [];
var inst_36781 = inst_36780.push(inst_36764);
var inst_36760 = inst_36780;
var inst_36761 = inst_36768;
var state_36802__$1 = (function (){var statearr_36819 = state_36802;
(statearr_36819[(11)] = inst_36779);

(statearr_36819[(7)] = inst_36761);

(statearr_36819[(8)] = inst_36760);

(statearr_36819[(12)] = inst_36781);

return statearr_36819;
})();
var statearr_36821_38181 = state_36802__$1;
(statearr_36821_38181[(2)] = null);

(statearr_36821_38181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (9))){
var inst_36760 = (state_36802[(8)]);
var inst_36777 = cljs.core.vec(inst_36760);
var state_36802__$1 = state_36802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36802__$1,(11),out,inst_36777);
} else {
if((state_val_36803 === (5))){
var inst_36764 = (state_36802[(9)]);
var inst_36768 = (state_36802[(10)]);
var inst_36761 = (state_36802[(7)]);
var inst_36768__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36764) : f.call(null,inst_36764));
var inst_36769 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36768__$1,inst_36761);
var inst_36770 = cljs.core.keyword_identical_QMARK_(inst_36761,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36771 = ((inst_36769) || (inst_36770));
var state_36802__$1 = (function (){var statearr_36823 = state_36802;
(statearr_36823[(10)] = inst_36768__$1);

return statearr_36823;
})();
if(cljs.core.truth_(inst_36771)){
var statearr_36824_38184 = state_36802__$1;
(statearr_36824_38184[(1)] = (8));

} else {
var statearr_36825_38186 = state_36802__$1;
(statearr_36825_38186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (14))){
var inst_36795 = (state_36802[(2)]);
var inst_36796 = cljs.core.async.close_BANG_(out);
var state_36802__$1 = (function (){var statearr_36828 = state_36802;
(statearr_36828[(13)] = inst_36795);

return statearr_36828;
})();
var statearr_36829_38187 = state_36802__$1;
(statearr_36829_38187[(2)] = inst_36796);

(statearr_36829_38187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (10))){
var inst_36784 = (state_36802[(2)]);
var state_36802__$1 = state_36802;
var statearr_36830_38188 = state_36802__$1;
(statearr_36830_38188[(2)] = inst_36784);

(statearr_36830_38188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (8))){
var inst_36764 = (state_36802[(9)]);
var inst_36768 = (state_36802[(10)]);
var inst_36760 = (state_36802[(8)]);
var inst_36773 = inst_36760.push(inst_36764);
var tmp36826 = inst_36760;
var inst_36760__$1 = tmp36826;
var inst_36761 = inst_36768;
var state_36802__$1 = (function (){var statearr_36832 = state_36802;
(statearr_36832[(14)] = inst_36773);

(statearr_36832[(7)] = inst_36761);

(statearr_36832[(8)] = inst_36760__$1);

return statearr_36832;
})();
var statearr_36833_38190 = state_36802__$1;
(statearr_36833_38190[(2)] = null);

(statearr_36833_38190[(1)] = (2));


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
var statearr_36835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36835[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36835[(1)] = (1));

return statearr_36835;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36802){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36802);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36836){if((e36836 instanceof Object)){
var ex__34210__auto__ = e36836;
var statearr_36837_38193 = state_36802;
(statearr_36837_38193[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38194 = state_36802;
state_36802 = G__38194;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36839 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36839[(6)] = c__34274__auto___38163);

return statearr_36839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
