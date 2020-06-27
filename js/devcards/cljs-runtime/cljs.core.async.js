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
var val_36782 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36782) : fn1.call(null,val_36782));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36782) : fn1.call(null,val_36782));
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
var n__4666__auto___36788 = n;
var x_36789 = (0);
while(true){
if((x_36789 < n__4666__auto___36788)){
(a[x_36789] = x_36789);

var G__36790 = (x_36789 + (1));
x_36789 = G__36790;
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
var G__36799 = (i + (1));
i = G__36799;
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
var len__4789__auto___36801 = arguments.length;
var i__4790__auto___36802 = (0);
while(true){
if((i__4790__auto___36802 < len__4789__auto___36801)){
args__4795__auto__.push((arguments[i__4790__auto___36802]));

var G__36803 = (i__4790__auto___36802 + (1));
i__4790__auto___36802 = G__36803;
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
var c__34274__auto___36808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34417){
var state_val_34421 = (state_34417[(1)]);
if((state_val_34421 === (7))){
var inst_34407 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34425_36810 = state_34417__$1;
(statearr_34425_36810[(2)] = inst_34407);

(statearr_34425_36810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (1))){
var state_34417__$1 = state_34417;
var statearr_34426_36811 = state_34417__$1;
(statearr_34426_36811[(2)] = null);

(statearr_34426_36811[(1)] = (2));


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
var statearr_34428_36812 = state_34417__$1;
(statearr_34428_36812[(1)] = (5));

} else {
var statearr_34429_36814 = state_34417__$1;
(statearr_34429_36814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (13))){
var state_34417__$1 = state_34417;
var statearr_34430_36815 = state_34417__$1;
(statearr_34430_36815[(2)] = null);

(statearr_34430_36815[(1)] = (14));


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
var statearr_34431_36817 = state_34417__$1;
(statearr_34431_36817[(2)] = null);

(statearr_34431_36817[(1)] = (2));


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
var statearr_34432_36818 = state_34417__$1;
(statearr_34432_36818[(1)] = (12));

} else {
var statearr_34433_36819 = state_34417__$1;
(statearr_34433_36819[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (9))){
var state_34417__$1 = state_34417;
var statearr_34434_36821 = state_34417__$1;
(statearr_34434_36821[(2)] = null);

(statearr_34434_36821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (5))){
var state_34417__$1 = state_34417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36822 = state_34417__$1;
(statearr_34435_36822[(1)] = (8));

} else {
var statearr_34436_36823 = state_34417__$1;
(statearr_34436_36823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (14))){
var inst_34405 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34437_36824 = state_34417__$1;
(statearr_34437_36824[(2)] = inst_34405);

(statearr_34437_36824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (10))){
var inst_34397 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34438_36826 = state_34417__$1;
(statearr_34438_36826[(2)] = inst_34397);

(statearr_34438_36826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34417__$1 = state_34417;
var statearr_34439_36827 = state_34417__$1;
(statearr_34439_36827[(2)] = inst_34394);

(statearr_34439_36827[(1)] = (10));


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
var statearr_34442_36829 = state_34417;
(statearr_34442_36829[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36831 = state_34417;
state_34417 = G__36831;
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
(statearr_34443[(6)] = c__34274__auto___36808);

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
var c__34274__auto___36833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34457_36836 = state_34452;
(statearr_34457_36836[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36838 = state_34452;
state_34452 = G__36838;
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
(statearr_34458[(6)] = c__34274__auto___36833);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34459){
var vec__34460 = p__34459;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(1),null);
var job = vec__34460;
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
var n__4666__auto___36840 = n;
var __36841 = (0);
while(true){
if((__36841 < n__4666__auto___36840)){
var G__34467_36842 = type;
var G__34467_36843__$1 = (((G__34467_36842 instanceof cljs.core.Keyword))?G__34467_36842.fqn:null);
switch (G__34467_36843__$1) {
case "compute":
var c__34274__auto___36846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36841,c__34274__auto___36846,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36841,c__34274__auto___36846,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async){
return (function (state_34480){
var state_val_34481 = (state_34480[(1)]);
if((state_val_34481 === (1))){
var state_34480__$1 = state_34480;
var statearr_34482_36847 = state_34480__$1;
(statearr_34482_36847[(2)] = null);

(statearr_34482_36847[(1)] = (2));


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
var statearr_34483_36849 = state_34480__$1;
(statearr_34483_36849[(1)] = (5));

} else {
var statearr_34484_36850 = state_34480__$1;
(statearr_34484_36850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (5))){
var state_34480__$1 = state_34480;
var statearr_34486_36852 = state_34480__$1;
(statearr_34486_36852[(2)] = null);

(statearr_34486_36852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (6))){
var state_34480__$1 = state_34480;
var statearr_34487_36853 = state_34480__$1;
(statearr_34487_36853[(2)] = null);

(statearr_34487_36853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (7))){
var inst_34476 = (state_34480[(2)]);
var state_34480__$1 = state_34480;
var statearr_34488_36854 = state_34480__$1;
(statearr_34488_36854[(2)] = inst_34476);

(statearr_34488_36854[(1)] = (3));


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
});})(__36841,c__34274__auto___36846,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async))
;
return ((function (__36841,switch__34206__auto__,c__34274__auto___36846,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async){
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
var statearr_34491_36856 = state_34480;
(statearr_34491_36856[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36858 = state_34480;
state_34480 = G__36858;
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
;})(__36841,switch__34206__auto__,c__34274__auto___36846,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34492 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34492[(6)] = c__34274__auto___36846);

return statearr_34492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36841,c__34274__auto___36846,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36841,c__34274__auto___36860,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36841,c__34274__auto___36860,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async){
return (function (state_34506){
var state_val_34507 = (state_34506[(1)]);
if((state_val_34507 === (1))){
var state_34506__$1 = state_34506;
var statearr_34509_36861 = state_34506__$1;
(statearr_34509_36861[(2)] = null);

(statearr_34509_36861[(1)] = (2));


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
var inst_34495 = (state_34506[(2)]);
var inst_34497 = async(inst_34495);
var state_34506__$1 = state_34506;
if(cljs.core.truth_(inst_34497)){
var statearr_34511_36863 = state_34506__$1;
(statearr_34511_36863[(1)] = (5));

} else {
var statearr_34512_36864 = state_34506__$1;
(statearr_34512_36864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34507 === (5))){
var state_34506__$1 = state_34506;
var statearr_34513_36866 = state_34506__$1;
(statearr_34513_36866[(2)] = null);

(statearr_34513_36866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34507 === (6))){
var state_34506__$1 = state_34506;
var statearr_34514_36867 = state_34506__$1;
(statearr_34514_36867[(2)] = null);

(statearr_34514_36867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34507 === (7))){
var inst_34502 = (state_34506[(2)]);
var state_34506__$1 = state_34506;
var statearr_34515_36868 = state_34506__$1;
(statearr_34515_36868[(2)] = inst_34502);

(statearr_34515_36868[(1)] = (3));


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
});})(__36841,c__34274__auto___36860,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async))
;
return ((function (__36841,switch__34206__auto__,c__34274__auto___36860,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async){
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
}catch (e34517){if((e34517 instanceof Object)){
var ex__34210__auto__ = e34517;
var statearr_34518_36871 = state_34506;
(statearr_34518_36871[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36872 = state_34506;
state_34506 = G__36872;
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
;})(__36841,switch__34206__auto__,c__34274__auto___36860,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34521 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34521[(6)] = c__34274__auto___36860);

return statearr_34521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36841,c__34274__auto___36860,G__34467_36842,G__34467_36843__$1,n__4666__auto___36840,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34467_36843__$1)].join('')));

}

var G__36874 = (__36841 + (1));
__36841 = G__36874;
continue;
} else {
}
break;
}

var c__34274__auto___36875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34548){
var state_val_34549 = (state_34548[(1)]);
if((state_val_34549 === (7))){
var inst_34544 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34550_36876 = state_34548__$1;
(statearr_34550_36876[(2)] = inst_34544);

(statearr_34550_36876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (1))){
var state_34548__$1 = state_34548;
var statearr_34551_36878 = state_34548__$1;
(statearr_34551_36878[(2)] = null);

(statearr_34551_36878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (4))){
var inst_34529 = (state_34548[(7)]);
var inst_34529__$1 = (state_34548[(2)]);
var inst_34530 = (inst_34529__$1 == null);
var state_34548__$1 = (function (){var statearr_34552 = state_34548;
(statearr_34552[(7)] = inst_34529__$1);

return statearr_34552;
})();
if(cljs.core.truth_(inst_34530)){
var statearr_34553_36879 = state_34548__$1;
(statearr_34553_36879[(1)] = (5));

} else {
var statearr_34554_36880 = state_34548__$1;
(statearr_34554_36880[(1)] = (6));

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
var state_34548__$1 = (function (){var statearr_34555 = state_34548;
(statearr_34555[(8)] = inst_34534__$1);

return statearr_34555;
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
var state_34548__$1 = (function (){var statearr_34557 = state_34548;
(statearr_34557[(9)] = inst_34541);

return statearr_34557;
})();
var statearr_34558_36883 = state_34548__$1;
(statearr_34558_36883[(2)] = null);

(statearr_34558_36883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (5))){
var inst_34532 = cljs.core.async.close_BANG_(jobs);
var state_34548__$1 = state_34548;
var statearr_34559_36884 = state_34548__$1;
(statearr_34559_36884[(2)] = inst_34532);

(statearr_34559_36884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (8))){
var inst_34534 = (state_34548[(8)]);
var inst_34539 = (state_34548[(2)]);
var state_34548__$1 = (function (){var statearr_34560 = state_34548;
(statearr_34560[(10)] = inst_34539);

return statearr_34560;
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
var statearr_34562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34562[(1)] = (1));

return statearr_34562;
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
}catch (e34566){if((e34566 instanceof Object)){
var ex__34210__auto__ = e34566;
var statearr_34567_36887 = state_34548;
(statearr_34567_36887[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36888 = state_34548;
state_34548 = G__36888;
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
(statearr_34571[(6)] = c__34274__auto___36875);

return statearr_34571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34609){
var state_val_34610 = (state_34609[(1)]);
if((state_val_34610 === (7))){
var inst_34605 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34611_36890 = state_34609__$1;
(statearr_34611_36890[(2)] = inst_34605);

(statearr_34611_36890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (20))){
var state_34609__$1 = state_34609;
var statearr_34612_36892 = state_34609__$1;
(statearr_34612_36892[(2)] = null);

(statearr_34612_36892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (1))){
var state_34609__$1 = state_34609;
var statearr_34613_36893 = state_34609__$1;
(statearr_34613_36893[(2)] = null);

(statearr_34613_36893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (4))){
var inst_34574 = (state_34609[(7)]);
var inst_34574__$1 = (state_34609[(2)]);
var inst_34575 = (inst_34574__$1 == null);
var state_34609__$1 = (function (){var statearr_34614 = state_34609;
(statearr_34614[(7)] = inst_34574__$1);

return statearr_34614;
})();
if(cljs.core.truth_(inst_34575)){
var statearr_34615_36895 = state_34609__$1;
(statearr_34615_36895[(1)] = (5));

} else {
var statearr_34616_36896 = state_34609__$1;
(statearr_34616_36896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (15))){
var inst_34587 = (state_34609[(8)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34609__$1,(18),to,inst_34587);
} else {
if((state_val_34610 === (21))){
var inst_34600 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34617_36897 = state_34609__$1;
(statearr_34617_36897[(2)] = inst_34600);

(statearr_34617_36897[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (13))){
var inst_34602 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34618 = state_34609;
(statearr_34618[(9)] = inst_34602);

return statearr_34618;
})();
var statearr_34619_36899 = state_34609__$1;
(statearr_34619_36899[(2)] = null);

(statearr_34619_36899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (6))){
var inst_34574 = (state_34609[(7)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34609__$1,(11),inst_34574);
} else {
if((state_val_34610 === (17))){
var inst_34595 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
if(cljs.core.truth_(inst_34595)){
var statearr_34620_36901 = state_34609__$1;
(statearr_34620_36901[(1)] = (19));

} else {
var statearr_34621_36902 = state_34609__$1;
(statearr_34621_36902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (3))){
var inst_34607 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34609__$1,inst_34607);
} else {
if((state_val_34610 === (12))){
var inst_34584 = (state_34609[(10)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34609__$1,(14),inst_34584);
} else {
if((state_val_34610 === (2))){
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34609__$1,(4),results);
} else {
if((state_val_34610 === (19))){
var state_34609__$1 = state_34609;
var statearr_34625_36903 = state_34609__$1;
(statearr_34625_36903[(2)] = null);

(statearr_34625_36903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (11))){
var inst_34584 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34626 = state_34609;
(statearr_34626[(10)] = inst_34584);

return statearr_34626;
})();
var statearr_34627_36905 = state_34609__$1;
(statearr_34627_36905[(2)] = null);

(statearr_34627_36905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (9))){
var state_34609__$1 = state_34609;
var statearr_34628_36906 = state_34609__$1;
(statearr_34628_36906[(2)] = null);

(statearr_34628_36906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (5))){
var state_34609__$1 = state_34609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36908 = state_34609__$1;
(statearr_34629_36908[(1)] = (8));

} else {
var statearr_34630_36909 = state_34609__$1;
(statearr_34630_36909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (14))){
var inst_34587 = (state_34609[(8)]);
var inst_34587__$1 = (state_34609[(2)]);
var inst_34588 = (inst_34587__$1 == null);
var inst_34589 = cljs.core.not(inst_34588);
var state_34609__$1 = (function (){var statearr_34631 = state_34609;
(statearr_34631[(8)] = inst_34587__$1);

return statearr_34631;
})();
if(inst_34589){
var statearr_34632_36910 = state_34609__$1;
(statearr_34632_36910[(1)] = (15));

} else {
var statearr_34633_36911 = state_34609__$1;
(statearr_34633_36911[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (16))){
var state_34609__$1 = state_34609;
var statearr_34634_36913 = state_34609__$1;
(statearr_34634_36913[(2)] = false);

(statearr_34634_36913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (10))){
var inst_34581 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34635_36914 = state_34609__$1;
(statearr_34635_36914[(2)] = inst_34581);

(statearr_34635_36914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (18))){
var inst_34592 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34636_36915 = state_34609__$1;
(statearr_34636_36915[(2)] = inst_34592);

(statearr_34636_36915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (8))){
var inst_34578 = cljs.core.async.close_BANG_(to);
var state_34609__$1 = state_34609;
var statearr_34637_36917 = state_34609__$1;
(statearr_34637_36917[(2)] = inst_34578);

(statearr_34637_36917[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34609){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34609);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34639){if((e34639 instanceof Object)){
var ex__34210__auto__ = e34639;
var statearr_34640_36919 = state_34609;
(statearr_34640_36919[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36920 = state_34609;
state_34609 = G__36920;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34609);
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
var c__34274__auto___36930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_36931 = state_34673__$1;
(statearr_34675_36931[(2)] = inst_34669);

(statearr_34675_36931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_36933 = state_34673__$1;
(statearr_34676_36933[(2)] = null);

(statearr_34676_36933[(1)] = (2));


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
var statearr_34678_36934 = state_34673__$1;
(statearr_34678_36934[(1)] = (5));

} else {
var statearr_34679_36935 = state_34673__$1;
(statearr_34679_36935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_36937 = state_34673__$1;
(statearr_34680_36937[(2)] = null);

(statearr_34680_36937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_36938 = state_34673__$1;
(statearr_34681_36938[(1)] = (9));

} else {
var statearr_34682_36939 = state_34673__$1;
(statearr_34682_36939[(1)] = (10));

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
var statearr_34683_36941 = state_34673__$1;
(statearr_34683_36941[(2)] = null);

(statearr_34683_36941[(1)] = (2));


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
var statearr_34684_36943 = state_34673__$1;
(statearr_34684_36943[(2)] = tc);

(statearr_34684_36943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_36944 = state_34673__$1;
(statearr_34686_36944[(2)] = inst_34654);

(statearr_34686_36944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_36945 = state_34673__$1;
(statearr_34687_36945[(2)] = inst_34667);

(statearr_34687_36945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_36947 = state_34673__$1;
(statearr_34688_36947[(2)] = fc);

(statearr_34688_36947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34689_36948 = state_34673__$1;
(statearr_34689_36948[(1)] = (12));

} else {
var statearr_34690_36949 = state_34673__$1;
(statearr_34690_36949[(1)] = (13));

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
var statearr_34691 = [null,null,null,null,null,null,null,null,null];
(statearr_34691[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34691[(1)] = (1));

return statearr_34691;
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
}catch (e34692){if((e34692 instanceof Object)){
var ex__34210__auto__ = e34692;
var statearr_34693_36951 = state_34673;
(statearr_34693_36951[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36952 = state_34673;
state_34673 = G__36952;
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
var state__34276__auto__ = (function (){var statearr_34694 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34694[(6)] = c__34274__auto___36930);

return statearr_34694;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (7))){
var inst_34711 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34717_36954 = state_34715__$1;
(statearr_34717_36954[(2)] = inst_34711);

(statearr_34717_36954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (1))){
var inst_34695 = init;
var state_34715__$1 = (function (){var statearr_34718 = state_34715;
(statearr_34718[(7)] = inst_34695);

return statearr_34718;
})();
var statearr_34719_36955 = state_34715__$1;
(statearr_34719_36955[(2)] = null);

(statearr_34719_36955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (4))){
var inst_34698 = (state_34715[(8)]);
var inst_34698__$1 = (state_34715[(2)]);
var inst_34699 = (inst_34698__$1 == null);
var state_34715__$1 = (function (){var statearr_34720 = state_34715;
(statearr_34720[(8)] = inst_34698__$1);

return statearr_34720;
})();
if(cljs.core.truth_(inst_34699)){
var statearr_34721_36957 = state_34715__$1;
(statearr_34721_36957[(1)] = (5));

} else {
var statearr_34722_36958 = state_34715__$1;
(statearr_34722_36958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (6))){
var inst_34698 = (state_34715[(8)]);
var inst_34695 = (state_34715[(7)]);
var inst_34702 = (state_34715[(9)]);
var inst_34702__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34695,inst_34698) : f.call(null,inst_34695,inst_34698));
var inst_34703 = cljs.core.reduced_QMARK_(inst_34702__$1);
var state_34715__$1 = (function (){var statearr_34726 = state_34715;
(statearr_34726[(9)] = inst_34702__$1);

return statearr_34726;
})();
if(inst_34703){
var statearr_34727_36960 = state_34715__$1;
(statearr_34727_36960[(1)] = (8));

} else {
var statearr_34728_36961 = state_34715__$1;
(statearr_34728_36961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (3))){
var inst_34713 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34715__$1,inst_34713);
} else {
if((state_val_34716 === (2))){
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34715__$1,(4),ch);
} else {
if((state_val_34716 === (9))){
var inst_34702 = (state_34715[(9)]);
var inst_34695 = inst_34702;
var state_34715__$1 = (function (){var statearr_34729 = state_34715;
(statearr_34729[(7)] = inst_34695);

return statearr_34729;
})();
var statearr_34730_36963 = state_34715__$1;
(statearr_34730_36963[(2)] = null);

(statearr_34730_36963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (5))){
var inst_34695 = (state_34715[(7)]);
var state_34715__$1 = state_34715;
var statearr_34734_36964 = state_34715__$1;
(statearr_34734_36964[(2)] = inst_34695);

(statearr_34734_36964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (10))){
var inst_34709 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34735_36966 = state_34715__$1;
(statearr_34735_36966[(2)] = inst_34709);

(statearr_34735_36966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (8))){
var inst_34702 = (state_34715[(9)]);
var inst_34705 = cljs.core.deref(inst_34702);
var state_34715__$1 = state_34715;
var statearr_34738_36967 = state_34715__$1;
(statearr_34738_36967[(2)] = inst_34705);

(statearr_34738_36967[(1)] = (10));


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
var statearr_34739 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34739[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34739[(1)] = (1));

return statearr_34739;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34715){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34715);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34740){if((e34740 instanceof Object)){
var ex__34210__auto__ = e34740;
var statearr_34741_36969 = state_34715;
(statearr_34741_36969[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36971 = state_34715;
state_34715 = G__36971;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34715){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34743 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34743[(6)] = c__34274__auto__);

return statearr_34743;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34751){
var state_val_34752 = (state_34751[(1)]);
if((state_val_34752 === (1))){
var inst_34746 = cljs.core.async.reduce(f__$1,init,ch);
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34751__$1,(2),inst_34746);
} else {
if((state_val_34752 === (2))){
var inst_34748 = (state_34751[(2)]);
var inst_34749 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34748) : f__$1.call(null,inst_34748));
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34751__$1,inst_34749);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34753 = [null,null,null,null,null,null,null];
(statearr_34753[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34753[(1)] = (1));

return statearr_34753;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34751){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34751);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34754){if((e34754 instanceof Object)){
var ex__34210__auto__ = e34754;
var statearr_34755_36974 = state_34751;
(statearr_34755_36974[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36976 = state_34751;
state_34751 = G__36976;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34751){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34757 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34757[(6)] = c__34274__auto__);

return statearr_34757;
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
var G__34760 = arguments.length;
switch (G__34760) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34787){
var state_val_34788 = (state_34787[(1)]);
if((state_val_34788 === (7))){
var inst_34769 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34792_36980 = state_34787__$1;
(statearr_34792_36980[(2)] = inst_34769);

(statearr_34792_36980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (1))){
var inst_34761 = cljs.core.seq(coll);
var inst_34763 = inst_34761;
var state_34787__$1 = (function (){var statearr_34793 = state_34787;
(statearr_34793[(7)] = inst_34763);

return statearr_34793;
})();
var statearr_34794_36982 = state_34787__$1;
(statearr_34794_36982[(2)] = null);

(statearr_34794_36982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (4))){
var inst_34763 = (state_34787[(7)]);
var inst_34767 = cljs.core.first(inst_34763);
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34787__$1,(7),ch,inst_34767);
} else {
if((state_val_34788 === (13))){
var inst_34781 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34795_36983 = state_34787__$1;
(statearr_34795_36983[(2)] = inst_34781);

(statearr_34795_36983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (6))){
var inst_34772 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
if(cljs.core.truth_(inst_34772)){
var statearr_34796_36985 = state_34787__$1;
(statearr_34796_36985[(1)] = (8));

} else {
var statearr_34797_36986 = state_34787__$1;
(statearr_34797_36986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (3))){
var inst_34785 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34787__$1,inst_34785);
} else {
if((state_val_34788 === (12))){
var state_34787__$1 = state_34787;
var statearr_34799_36987 = state_34787__$1;
(statearr_34799_36987[(2)] = null);

(statearr_34799_36987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (2))){
var inst_34763 = (state_34787[(7)]);
var state_34787__$1 = state_34787;
if(cljs.core.truth_(inst_34763)){
var statearr_34800_36989 = state_34787__$1;
(statearr_34800_36989[(1)] = (4));

} else {
var statearr_34801_36990 = state_34787__$1;
(statearr_34801_36990[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (11))){
var inst_34778 = cljs.core.async.close_BANG_(ch);
var state_34787__$1 = state_34787;
var statearr_34802_36991 = state_34787__$1;
(statearr_34802_36991[(2)] = inst_34778);

(statearr_34802_36991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (9))){
var state_34787__$1 = state_34787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34803_36992 = state_34787__$1;
(statearr_34803_36992[(1)] = (11));

} else {
var statearr_34804_36993 = state_34787__$1;
(statearr_34804_36993[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (5))){
var inst_34763 = (state_34787[(7)]);
var state_34787__$1 = state_34787;
var statearr_34805_36994 = state_34787__$1;
(statearr_34805_36994[(2)] = inst_34763);

(statearr_34805_36994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (10))){
var inst_34783 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34809_36996 = state_34787__$1;
(statearr_34809_36996[(2)] = inst_34783);

(statearr_34809_36996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (8))){
var inst_34763 = (state_34787[(7)]);
var inst_34774 = cljs.core.next(inst_34763);
var inst_34763__$1 = inst_34774;
var state_34787__$1 = (function (){var statearr_34810 = state_34787;
(statearr_34810[(7)] = inst_34763__$1);

return statearr_34810;
})();
var statearr_34811_36997 = state_34787__$1;
(statearr_34811_36997[(2)] = null);

(statearr_34811_36997[(1)] = (2));


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
var statearr_34812 = [null,null,null,null,null,null,null,null];
(statearr_34812[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34812[(1)] = (1));

return statearr_34812;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34787){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34787);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34813){if((e34813 instanceof Object)){
var ex__34210__auto__ = e34813;
var statearr_34814_36999 = state_34787;
(statearr_34814_36999[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37001 = state_34787;
state_34787 = G__37001;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34818 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34818[(6)] = c__34274__auto__);

return statearr_34818;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34822 = (function (ch,cs,meta34823){
this.ch = ch;
this.cs = cs;
this.meta34823 = meta34823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34824,meta34823__$1){
var self__ = this;
var _34824__$1 = this;
return (new cljs.core.async.t_cljs$core$async34822(self__.ch,self__.cs,meta34823__$1));
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34824){
var self__ = this;
var _34824__$1 = this;
return self__.meta34823;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34823","meta34823",-78265650,null)], null);
}));

(cljs.core.async.t_cljs$core$async34822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34822");

(cljs.core.async.t_cljs$core$async34822.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34822.
 */
cljs.core.async.__GT_t_cljs$core$async34822 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34822(ch__$1,cs__$1,meta34823){
return (new cljs.core.async.t_cljs$core$async34822(ch__$1,cs__$1,meta34823));
});

}

return (new cljs.core.async.t_cljs$core$async34822(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___37009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34972){
var state_val_34973 = (state_34972[(1)]);
if((state_val_34973 === (7))){
var inst_34968 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_34974_37011 = state_34972__$1;
(statearr_34974_37011[(2)] = inst_34968);

(statearr_34974_37011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (20))){
var inst_34865 = (state_34972[(7)]);
var inst_34877 = cljs.core.first(inst_34865);
var inst_34878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34877,(0),null);
var inst_34879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34877,(1),null);
var state_34972__$1 = (function (){var statearr_34975 = state_34972;
(statearr_34975[(8)] = inst_34878);

return statearr_34975;
})();
if(cljs.core.truth_(inst_34879)){
var statearr_34976_37013 = state_34972__$1;
(statearr_34976_37013[(1)] = (22));

} else {
var statearr_34977_37014 = state_34972__$1;
(statearr_34977_37014[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (27))){
var inst_34910 = (state_34972[(9)]);
var inst_34908 = (state_34972[(10)]);
var inst_34916 = (state_34972[(11)]);
var inst_34834 = (state_34972[(12)]);
var inst_34916__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34908,inst_34910);
var inst_34917 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34916__$1,inst_34834,done);
var state_34972__$1 = (function (){var statearr_34981 = state_34972;
(statearr_34981[(11)] = inst_34916__$1);

return statearr_34981;
})();
if(cljs.core.truth_(inst_34917)){
var statearr_34982_37015 = state_34972__$1;
(statearr_34982_37015[(1)] = (30));

} else {
var statearr_34983_37017 = state_34972__$1;
(statearr_34983_37017[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (1))){
var state_34972__$1 = state_34972;
var statearr_34984_37018 = state_34972__$1;
(statearr_34984_37018[(2)] = null);

(statearr_34984_37018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (24))){
var inst_34865 = (state_34972[(7)]);
var inst_34884 = (state_34972[(2)]);
var inst_34885 = cljs.core.next(inst_34865);
var inst_34843 = inst_34885;
var inst_34844 = null;
var inst_34845 = (0);
var inst_34846 = (0);
var state_34972__$1 = (function (){var statearr_34985 = state_34972;
(statearr_34985[(13)] = inst_34843);

(statearr_34985[(14)] = inst_34845);

(statearr_34985[(15)] = inst_34844);

(statearr_34985[(16)] = inst_34846);

(statearr_34985[(17)] = inst_34884);

return statearr_34985;
})();
var statearr_34989_37020 = state_34972__$1;
(statearr_34989_37020[(2)] = null);

(statearr_34989_37020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (39))){
var state_34972__$1 = state_34972;
var statearr_34993_37021 = state_34972__$1;
(statearr_34993_37021[(2)] = null);

(statearr_34993_37021[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (4))){
var inst_34834 = (state_34972[(12)]);
var inst_34834__$1 = (state_34972[(2)]);
var inst_34835 = (inst_34834__$1 == null);
var state_34972__$1 = (function (){var statearr_34994 = state_34972;
(statearr_34994[(12)] = inst_34834__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34835)){
var statearr_34995_37022 = state_34972__$1;
(statearr_34995_37022[(1)] = (5));

} else {
var statearr_34996_37023 = state_34972__$1;
(statearr_34996_37023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (15))){
var inst_34843 = (state_34972[(13)]);
var inst_34845 = (state_34972[(14)]);
var inst_34844 = (state_34972[(15)]);
var inst_34846 = (state_34972[(16)]);
var inst_34861 = (state_34972[(2)]);
var inst_34862 = (inst_34846 + (1));
var tmp34990 = inst_34843;
var tmp34991 = inst_34845;
var tmp34992 = inst_34844;
var inst_34843__$1 = tmp34990;
var inst_34844__$1 = tmp34992;
var inst_34845__$1 = tmp34991;
var inst_34846__$1 = inst_34862;
var state_34972__$1 = (function (){var statearr_34997 = state_34972;
(statearr_34997[(13)] = inst_34843__$1);

(statearr_34997[(14)] = inst_34845__$1);

(statearr_34997[(15)] = inst_34844__$1);

(statearr_34997[(16)] = inst_34846__$1);

(statearr_34997[(18)] = inst_34861);

return statearr_34997;
})();
var statearr_34998_37025 = state_34972__$1;
(statearr_34998_37025[(2)] = null);

(statearr_34998_37025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (21))){
var inst_34889 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35002_37027 = state_34972__$1;
(statearr_35002_37027[(2)] = inst_34889);

(statearr_35002_37027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (31))){
var inst_34916 = (state_34972[(11)]);
var inst_34921 = done(null);
var inst_34922 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34916);
var state_34972__$1 = (function (){var statearr_35003 = state_34972;
(statearr_35003[(19)] = inst_34921);

return statearr_35003;
})();
var statearr_35004_37028 = state_34972__$1;
(statearr_35004_37028[(2)] = inst_34922);

(statearr_35004_37028[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (32))){
var inst_34910 = (state_34972[(9)]);
var inst_34909 = (state_34972[(20)]);
var inst_34907 = (state_34972[(21)]);
var inst_34908 = (state_34972[(10)]);
var inst_34924 = (state_34972[(2)]);
var inst_34925 = (inst_34910 + (1));
var tmp34999 = inst_34909;
var tmp35000 = inst_34907;
var tmp35001 = inst_34908;
var inst_34907__$1 = tmp35000;
var inst_34908__$1 = tmp35001;
var inst_34909__$1 = tmp34999;
var inst_34910__$1 = inst_34925;
var state_34972__$1 = (function (){var statearr_35005 = state_34972;
(statearr_35005[(22)] = inst_34924);

(statearr_35005[(9)] = inst_34910__$1);

(statearr_35005[(20)] = inst_34909__$1);

(statearr_35005[(21)] = inst_34907__$1);

(statearr_35005[(10)] = inst_34908__$1);

return statearr_35005;
})();
var statearr_35006_37030 = state_34972__$1;
(statearr_35006_37030[(2)] = null);

(statearr_35006_37030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (40))){
var inst_34940 = (state_34972[(23)]);
var inst_34944 = done(null);
var inst_34945 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34940);
var state_34972__$1 = (function (){var statearr_35007 = state_34972;
(statearr_35007[(24)] = inst_34944);

return statearr_35007;
})();
var statearr_35008_37032 = state_34972__$1;
(statearr_35008_37032[(2)] = inst_34945);

(statearr_35008_37032[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (33))){
var inst_34928 = (state_34972[(25)]);
var inst_34932 = cljs.core.chunked_seq_QMARK_(inst_34928);
var state_34972__$1 = state_34972;
if(inst_34932){
var statearr_35009_37034 = state_34972__$1;
(statearr_35009_37034[(1)] = (36));

} else {
var statearr_35010_37035 = state_34972__$1;
(statearr_35010_37035[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (13))){
var inst_34855 = (state_34972[(26)]);
var inst_34858 = cljs.core.async.close_BANG_(inst_34855);
var state_34972__$1 = state_34972;
var statearr_35011_37036 = state_34972__$1;
(statearr_35011_37036[(2)] = inst_34858);

(statearr_35011_37036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (22))){
var inst_34878 = (state_34972[(8)]);
var inst_34881 = cljs.core.async.close_BANG_(inst_34878);
var state_34972__$1 = state_34972;
var statearr_35012_37038 = state_34972__$1;
(statearr_35012_37038[(2)] = inst_34881);

(statearr_35012_37038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (36))){
var inst_34928 = (state_34972[(25)]);
var inst_34934 = cljs.core.chunk_first(inst_34928);
var inst_34936 = cljs.core.chunk_rest(inst_34928);
var inst_34937 = cljs.core.count(inst_34934);
var inst_34907 = inst_34936;
var inst_34908 = inst_34934;
var inst_34909 = inst_34937;
var inst_34910 = (0);
var state_34972__$1 = (function (){var statearr_35013 = state_34972;
(statearr_35013[(9)] = inst_34910);

(statearr_35013[(20)] = inst_34909);

(statearr_35013[(21)] = inst_34907);

(statearr_35013[(10)] = inst_34908);

return statearr_35013;
})();
var statearr_35014_37039 = state_34972__$1;
(statearr_35014_37039[(2)] = null);

(statearr_35014_37039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (41))){
var inst_34928 = (state_34972[(25)]);
var inst_34947 = (state_34972[(2)]);
var inst_34948 = cljs.core.next(inst_34928);
var inst_34907 = inst_34948;
var inst_34908 = null;
var inst_34909 = (0);
var inst_34910 = (0);
var state_34972__$1 = (function (){var statearr_35015 = state_34972;
(statearr_35015[(27)] = inst_34947);

(statearr_35015[(9)] = inst_34910);

(statearr_35015[(20)] = inst_34909);

(statearr_35015[(21)] = inst_34907);

(statearr_35015[(10)] = inst_34908);

return statearr_35015;
})();
var statearr_35016_37042 = state_34972__$1;
(statearr_35016_37042[(2)] = null);

(statearr_35016_37042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (43))){
var state_34972__$1 = state_34972;
var statearr_35017_37043 = state_34972__$1;
(statearr_35017_37043[(2)] = null);

(statearr_35017_37043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (29))){
var inst_34956 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35018_37044 = state_34972__$1;
(statearr_35018_37044[(2)] = inst_34956);

(statearr_35018_37044[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (44))){
var inst_34965 = (state_34972[(2)]);
var state_34972__$1 = (function (){var statearr_35019 = state_34972;
(statearr_35019[(28)] = inst_34965);

return statearr_35019;
})();
var statearr_35020_37046 = state_34972__$1;
(statearr_35020_37046[(2)] = null);

(statearr_35020_37046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (6))){
var inst_34899 = (state_34972[(29)]);
var inst_34898 = cljs.core.deref(cs);
var inst_34899__$1 = cljs.core.keys(inst_34898);
var inst_34900 = cljs.core.count(inst_34899__$1);
var inst_34901 = cljs.core.reset_BANG_(dctr,inst_34900);
var inst_34906 = cljs.core.seq(inst_34899__$1);
var inst_34907 = inst_34906;
var inst_34908 = null;
var inst_34909 = (0);
var inst_34910 = (0);
var state_34972__$1 = (function (){var statearr_35021 = state_34972;
(statearr_35021[(30)] = inst_34901);

(statearr_35021[(29)] = inst_34899__$1);

(statearr_35021[(9)] = inst_34910);

(statearr_35021[(20)] = inst_34909);

(statearr_35021[(21)] = inst_34907);

(statearr_35021[(10)] = inst_34908);

return statearr_35021;
})();
var statearr_35022_37048 = state_34972__$1;
(statearr_35022_37048[(2)] = null);

(statearr_35022_37048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (28))){
var inst_34928 = (state_34972[(25)]);
var inst_34907 = (state_34972[(21)]);
var inst_34928__$1 = cljs.core.seq(inst_34907);
var state_34972__$1 = (function (){var statearr_35023 = state_34972;
(statearr_35023[(25)] = inst_34928__$1);

return statearr_35023;
})();
if(inst_34928__$1){
var statearr_35024_37050 = state_34972__$1;
(statearr_35024_37050[(1)] = (33));

} else {
var statearr_35025_37051 = state_34972__$1;
(statearr_35025_37051[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (25))){
var inst_34910 = (state_34972[(9)]);
var inst_34909 = (state_34972[(20)]);
var inst_34912 = (inst_34910 < inst_34909);
var inst_34913 = inst_34912;
var state_34972__$1 = state_34972;
if(cljs.core.truth_(inst_34913)){
var statearr_35026_37052 = state_34972__$1;
(statearr_35026_37052[(1)] = (27));

} else {
var statearr_35027_37054 = state_34972__$1;
(statearr_35027_37054[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (34))){
var state_34972__$1 = state_34972;
var statearr_35028_37055 = state_34972__$1;
(statearr_35028_37055[(2)] = null);

(statearr_35028_37055[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (17))){
var state_34972__$1 = state_34972;
var statearr_35029_37056 = state_34972__$1;
(statearr_35029_37056[(2)] = null);

(statearr_35029_37056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (3))){
var inst_34970 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34972__$1,inst_34970);
} else {
if((state_val_34973 === (12))){
var inst_34894 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35030_37058 = state_34972__$1;
(statearr_35030_37058[(2)] = inst_34894);

(statearr_35030_37058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (2))){
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34972__$1,(4),ch);
} else {
if((state_val_34973 === (23))){
var state_34972__$1 = state_34972;
var statearr_35031_37059 = state_34972__$1;
(statearr_35031_37059[(2)] = null);

(statearr_35031_37059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (35))){
var inst_34954 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35032_37061 = state_34972__$1;
(statearr_35032_37061[(2)] = inst_34954);

(statearr_35032_37061[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (19))){
var inst_34865 = (state_34972[(7)]);
var inst_34869 = cljs.core.chunk_first(inst_34865);
var inst_34870 = cljs.core.chunk_rest(inst_34865);
var inst_34871 = cljs.core.count(inst_34869);
var inst_34843 = inst_34870;
var inst_34844 = inst_34869;
var inst_34845 = inst_34871;
var inst_34846 = (0);
var state_34972__$1 = (function (){var statearr_35033 = state_34972;
(statearr_35033[(13)] = inst_34843);

(statearr_35033[(14)] = inst_34845);

(statearr_35033[(15)] = inst_34844);

(statearr_35033[(16)] = inst_34846);

return statearr_35033;
})();
var statearr_35034_37063 = state_34972__$1;
(statearr_35034_37063[(2)] = null);

(statearr_35034_37063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (11))){
var inst_34843 = (state_34972[(13)]);
var inst_34865 = (state_34972[(7)]);
var inst_34865__$1 = cljs.core.seq(inst_34843);
var state_34972__$1 = (function (){var statearr_35035 = state_34972;
(statearr_35035[(7)] = inst_34865__$1);

return statearr_35035;
})();
if(inst_34865__$1){
var statearr_35036_37064 = state_34972__$1;
(statearr_35036_37064[(1)] = (16));

} else {
var statearr_35037_37066 = state_34972__$1;
(statearr_35037_37066[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (9))){
var inst_34896 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35038_37067 = state_34972__$1;
(statearr_35038_37067[(2)] = inst_34896);

(statearr_35038_37067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (5))){
var inst_34841 = cljs.core.deref(cs);
var inst_34842 = cljs.core.seq(inst_34841);
var inst_34843 = inst_34842;
var inst_34844 = null;
var inst_34845 = (0);
var inst_34846 = (0);
var state_34972__$1 = (function (){var statearr_35039 = state_34972;
(statearr_35039[(13)] = inst_34843);

(statearr_35039[(14)] = inst_34845);

(statearr_35039[(15)] = inst_34844);

(statearr_35039[(16)] = inst_34846);

return statearr_35039;
})();
var statearr_35040_37069 = state_34972__$1;
(statearr_35040_37069[(2)] = null);

(statearr_35040_37069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (14))){
var state_34972__$1 = state_34972;
var statearr_35041_37070 = state_34972__$1;
(statearr_35041_37070[(2)] = null);

(statearr_35041_37070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (45))){
var inst_34962 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35042_37072 = state_34972__$1;
(statearr_35042_37072[(2)] = inst_34962);

(statearr_35042_37072[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (26))){
var inst_34899 = (state_34972[(29)]);
var inst_34958 = (state_34972[(2)]);
var inst_34959 = cljs.core.seq(inst_34899);
var state_34972__$1 = (function (){var statearr_35043 = state_34972;
(statearr_35043[(31)] = inst_34958);

return statearr_35043;
})();
if(inst_34959){
var statearr_35044_37073 = state_34972__$1;
(statearr_35044_37073[(1)] = (42));

} else {
var statearr_35045_37074 = state_34972__$1;
(statearr_35045_37074[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (16))){
var inst_34865 = (state_34972[(7)]);
var inst_34867 = cljs.core.chunked_seq_QMARK_(inst_34865);
var state_34972__$1 = state_34972;
if(inst_34867){
var statearr_35046_37076 = state_34972__$1;
(statearr_35046_37076[(1)] = (19));

} else {
var statearr_35047_37077 = state_34972__$1;
(statearr_35047_37077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (38))){
var inst_34951 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35048_37078 = state_34972__$1;
(statearr_35048_37078[(2)] = inst_34951);

(statearr_35048_37078[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (30))){
var state_34972__$1 = state_34972;
var statearr_35049_37080 = state_34972__$1;
(statearr_35049_37080[(2)] = null);

(statearr_35049_37080[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (10))){
var inst_34844 = (state_34972[(15)]);
var inst_34846 = (state_34972[(16)]);
var inst_34854 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34844,inst_34846);
var inst_34855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34854,(0),null);
var inst_34856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34854,(1),null);
var state_34972__$1 = (function (){var statearr_35050 = state_34972;
(statearr_35050[(26)] = inst_34855);

return statearr_35050;
})();
if(cljs.core.truth_(inst_34856)){
var statearr_35051_37082 = state_34972__$1;
(statearr_35051_37082[(1)] = (13));

} else {
var statearr_35052_37083 = state_34972__$1;
(statearr_35052_37083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (18))){
var inst_34892 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35055_37084 = state_34972__$1;
(statearr_35055_37084[(2)] = inst_34892);

(statearr_35055_37084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (42))){
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34972__$1,(45),dchan);
} else {
if((state_val_34973 === (37))){
var inst_34940 = (state_34972[(23)]);
var inst_34928 = (state_34972[(25)]);
var inst_34834 = (state_34972[(12)]);
var inst_34940__$1 = cljs.core.first(inst_34928);
var inst_34941 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34940__$1,inst_34834,done);
var state_34972__$1 = (function (){var statearr_35058 = state_34972;
(statearr_35058[(23)] = inst_34940__$1);

return statearr_35058;
})();
if(cljs.core.truth_(inst_34941)){
var statearr_35060_37085 = state_34972__$1;
(statearr_35060_37085[(1)] = (39));

} else {
var statearr_35062_37087 = state_34972__$1;
(statearr_35062_37087[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (8))){
var inst_34845 = (state_34972[(14)]);
var inst_34846 = (state_34972[(16)]);
var inst_34848 = (inst_34846 < inst_34845);
var inst_34849 = inst_34848;
var state_34972__$1 = state_34972;
if(cljs.core.truth_(inst_34849)){
var statearr_35063_37094 = state_34972__$1;
(statearr_35063_37094[(1)] = (10));

} else {
var statearr_35064_37095 = state_34972__$1;
(statearr_35064_37095[(1)] = (11));

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
var statearr_35065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35065[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35065[(1)] = (1));

return statearr_35065;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34972){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34972);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35066){if((e35066 instanceof Object)){
var ex__34210__auto__ = e35066;
var statearr_35067_37097 = state_34972;
(statearr_35067_37097[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37098 = state_34972;
state_34972 = G__37098;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34972){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35068 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35068[(6)] = c__34274__auto___37009);

return statearr_35068;
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
var G__35074 = arguments.length;
switch (G__35074) {
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
var len__4789__auto___37107 = arguments.length;
var i__4790__auto___37108 = (0);
while(true){
if((i__4790__auto___37108 < len__4789__auto___37107)){
args__4795__auto__.push((arguments[i__4790__auto___37108]));

var G__37109 = (i__4790__auto___37108 + (1));
i__4790__auto___37108 = G__37109;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35116){
var map__35117 = p__35116;
var map__35117__$1 = (((((!((map__35117 == null))))?(((((map__35117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35117):map__35117);
var opts = map__35117__$1;
var statearr_35120_37114 = state;
(statearr_35120_37114[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35128_37115 = state;
(statearr_35128_37115[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35131_37116 = state;
(statearr_35131_37116[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35108){
var G__35109 = cljs.core.first(seq35108);
var seq35108__$1 = cljs.core.next(seq35108);
var G__35110 = cljs.core.first(seq35108__$1);
var seq35108__$2 = cljs.core.next(seq35108__$1);
var G__35111 = cljs.core.first(seq35108__$2);
var seq35108__$3 = cljs.core.next(seq35108__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35109,G__35110,G__35111,seq35108__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35180 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35181){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35181 = meta35181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35182,meta35181__$1){
var self__ = this;
var _35182__$1 = this;
return (new cljs.core.async.t_cljs$core$async35180(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35181__$1));
}));

(cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35182){
var self__ = this;
var _35182__$1 = this;
return self__.meta35181;
}));

(cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35181","meta35181",1114589379,null)], null);
}));

(cljs.core.async.t_cljs$core$async35180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35180");

(cljs.core.async.t_cljs$core$async35180.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35180.
 */
cljs.core.async.__GT_t_cljs$core$async35180 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35180(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35181){
return (new cljs.core.async.t_cljs$core$async35180(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35181));
});

}

return (new cljs.core.async.t_cljs$core$async35180(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35397){
var state_val_35400 = (state_35397[(1)]);
if((state_val_35400 === (7))){
var inst_35250 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
var statearr_35409_37157 = state_35397__$1;
(statearr_35409_37157[(2)] = inst_35250);

(statearr_35409_37157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (20))){
var inst_35262 = (state_35397[(7)]);
var state_35397__$1 = state_35397;
var statearr_35413_37160 = state_35397__$1;
(statearr_35413_37160[(2)] = inst_35262);

(statearr_35413_37160[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (27))){
var state_35397__$1 = state_35397;
var statearr_35418_37163 = state_35397__$1;
(statearr_35418_37163[(2)] = null);

(statearr_35418_37163[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (1))){
var inst_35233 = (state_35397[(8)]);
var inst_35233__$1 = calc_state();
var inst_35237 = (inst_35233__$1 == null);
var inst_35238 = cljs.core.not(inst_35237);
var state_35397__$1 = (function (){var statearr_35422 = state_35397;
(statearr_35422[(8)] = inst_35233__$1);

return statearr_35422;
})();
if(inst_35238){
var statearr_35423_37166 = state_35397__$1;
(statearr_35423_37166[(1)] = (2));

} else {
var statearr_35424_37167 = state_35397__$1;
(statearr_35424_37167[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (24))){
var inst_35296 = (state_35397[(9)]);
var inst_35287 = (state_35397[(10)]);
var inst_35337 = (state_35397[(11)]);
var inst_35337__$1 = (inst_35287.cljs$core$IFn$_invoke$arity$1 ? inst_35287.cljs$core$IFn$_invoke$arity$1(inst_35296) : inst_35287.call(null,inst_35296));
var state_35397__$1 = (function (){var statearr_35426 = state_35397;
(statearr_35426[(11)] = inst_35337__$1);

return statearr_35426;
})();
if(cljs.core.truth_(inst_35337__$1)){
var statearr_35430_37174 = state_35397__$1;
(statearr_35430_37174[(1)] = (29));

} else {
var statearr_35432_37176 = state_35397__$1;
(statearr_35432_37176[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (4))){
var inst_35253 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
if(cljs.core.truth_(inst_35253)){
var statearr_35434_37180 = state_35397__$1;
(statearr_35434_37180[(1)] = (8));

} else {
var statearr_35437_37183 = state_35397__$1;
(statearr_35437_37183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (15))){
var inst_35281 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
if(cljs.core.truth_(inst_35281)){
var statearr_35441_37185 = state_35397__$1;
(statearr_35441_37185[(1)] = (19));

} else {
var statearr_35443_37186 = state_35397__$1;
(statearr_35443_37186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (21))){
var inst_35286 = (state_35397[(12)]);
var inst_35286__$1 = (state_35397[(2)]);
var inst_35287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35286__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35286__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35286__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35397__$1 = (function (){var statearr_35451 = state_35397;
(statearr_35451[(12)] = inst_35286__$1);

(statearr_35451[(13)] = inst_35288);

(statearr_35451[(10)] = inst_35287);

return statearr_35451;
})();
return cljs.core.async.ioc_alts_BANG_(state_35397__$1,(22),inst_35289);
} else {
if((state_val_35400 === (31))){
var inst_35350 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
if(cljs.core.truth_(inst_35350)){
var statearr_35458_37191 = state_35397__$1;
(statearr_35458_37191[(1)] = (32));

} else {
var statearr_35460_37192 = state_35397__$1;
(statearr_35460_37192[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (32))){
var inst_35295 = (state_35397[(14)]);
var state_35397__$1 = state_35397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35397__$1,(35),out,inst_35295);
} else {
if((state_val_35400 === (33))){
var inst_35286 = (state_35397[(12)]);
var inst_35262 = inst_35286;
var state_35397__$1 = (function (){var statearr_35466 = state_35397;
(statearr_35466[(7)] = inst_35262);

return statearr_35466;
})();
var statearr_35472_37194 = state_35397__$1;
(statearr_35472_37194[(2)] = null);

(statearr_35472_37194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (13))){
var inst_35262 = (state_35397[(7)]);
var inst_35270 = inst_35262.cljs$lang$protocol_mask$partition0$;
var inst_35271 = (inst_35270 & (64));
var inst_35272 = inst_35262.cljs$core$ISeq$;
var inst_35273 = (cljs.core.PROTOCOL_SENTINEL === inst_35272);
var inst_35274 = ((inst_35271) || (inst_35273));
var state_35397__$1 = state_35397;
if(cljs.core.truth_(inst_35274)){
var statearr_35486_37198 = state_35397__$1;
(statearr_35486_37198[(1)] = (16));

} else {
var statearr_35487_37199 = state_35397__$1;
(statearr_35487_37199[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (22))){
var inst_35296 = (state_35397[(9)]);
var inst_35295 = (state_35397[(14)]);
var inst_35294 = (state_35397[(2)]);
var inst_35295__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35294,(0),null);
var inst_35296__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35294,(1),null);
var inst_35306 = (inst_35295__$1 == null);
var inst_35307 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35296__$1,change);
var inst_35310 = ((inst_35306) || (inst_35307));
var state_35397__$1 = (function (){var statearr_35495 = state_35397;
(statearr_35495[(9)] = inst_35296__$1);

(statearr_35495[(14)] = inst_35295__$1);

return statearr_35495;
})();
if(cljs.core.truth_(inst_35310)){
var statearr_35496_37205 = state_35397__$1;
(statearr_35496_37205[(1)] = (23));

} else {
var statearr_35497_37206 = state_35397__$1;
(statearr_35497_37206[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (36))){
var inst_35286 = (state_35397[(12)]);
var inst_35262 = inst_35286;
var state_35397__$1 = (function (){var statearr_35498 = state_35397;
(statearr_35498[(7)] = inst_35262);

return statearr_35498;
})();
var statearr_35499_37213 = state_35397__$1;
(statearr_35499_37213[(2)] = null);

(statearr_35499_37213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (29))){
var inst_35337 = (state_35397[(11)]);
var state_35397__$1 = state_35397;
var statearr_35500_37216 = state_35397__$1;
(statearr_35500_37216[(2)] = inst_35337);

(statearr_35500_37216[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (6))){
var state_35397__$1 = state_35397;
var statearr_35501_37217 = state_35397__$1;
(statearr_35501_37217[(2)] = false);

(statearr_35501_37217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (28))){
var inst_35332 = (state_35397[(2)]);
var inst_35334 = calc_state();
var inst_35262 = inst_35334;
var state_35397__$1 = (function (){var statearr_35502 = state_35397;
(statearr_35502[(7)] = inst_35262);

(statearr_35502[(15)] = inst_35332);

return statearr_35502;
})();
var statearr_35503_37220 = state_35397__$1;
(statearr_35503_37220[(2)] = null);

(statearr_35503_37220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (25))){
var inst_35378 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
var statearr_35506_37221 = state_35397__$1;
(statearr_35506_37221[(2)] = inst_35378);

(statearr_35506_37221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (34))){
var inst_35376 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
var statearr_35507_37223 = state_35397__$1;
(statearr_35507_37223[(2)] = inst_35376);

(statearr_35507_37223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (17))){
var state_35397__$1 = state_35397;
var statearr_35509_37224 = state_35397__$1;
(statearr_35509_37224[(2)] = false);

(statearr_35509_37224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (3))){
var state_35397__$1 = state_35397;
var statearr_35513_37225 = state_35397__$1;
(statearr_35513_37225[(2)] = false);

(statearr_35513_37225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (12))){
var inst_35380 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35397__$1,inst_35380);
} else {
if((state_val_35400 === (2))){
var inst_35233 = (state_35397[(8)]);
var inst_35242 = inst_35233.cljs$lang$protocol_mask$partition0$;
var inst_35243 = (inst_35242 & (64));
var inst_35244 = inst_35233.cljs$core$ISeq$;
var inst_35245 = (cljs.core.PROTOCOL_SENTINEL === inst_35244);
var inst_35246 = ((inst_35243) || (inst_35245));
var state_35397__$1 = state_35397;
if(cljs.core.truth_(inst_35246)){
var statearr_35519_37230 = state_35397__$1;
(statearr_35519_37230[(1)] = (5));

} else {
var statearr_35520_37231 = state_35397__$1;
(statearr_35520_37231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (23))){
var inst_35295 = (state_35397[(14)]);
var inst_35312 = (inst_35295 == null);
var state_35397__$1 = state_35397;
if(cljs.core.truth_(inst_35312)){
var statearr_35523_37235 = state_35397__$1;
(statearr_35523_37235[(1)] = (26));

} else {
var statearr_35524_37236 = state_35397__$1;
(statearr_35524_37236[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (35))){
var inst_35355 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
if(cljs.core.truth_(inst_35355)){
var statearr_35526_37237 = state_35397__$1;
(statearr_35526_37237[(1)] = (36));

} else {
var statearr_35527_37238 = state_35397__$1;
(statearr_35527_37238[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (19))){
var inst_35262 = (state_35397[(7)]);
var inst_35283 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35262);
var state_35397__$1 = state_35397;
var statearr_35534_37239 = state_35397__$1;
(statearr_35534_37239[(2)] = inst_35283);

(statearr_35534_37239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (11))){
var inst_35262 = (state_35397[(7)]);
var inst_35266 = (inst_35262 == null);
var inst_35267 = cljs.core.not(inst_35266);
var state_35397__$1 = state_35397;
if(inst_35267){
var statearr_35539_37246 = state_35397__$1;
(statearr_35539_37246[(1)] = (13));

} else {
var statearr_35543_37247 = state_35397__$1;
(statearr_35543_37247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (9))){
var inst_35233 = (state_35397[(8)]);
var state_35397__$1 = state_35397;
var statearr_35547_37249 = state_35397__$1;
(statearr_35547_37249[(2)] = inst_35233);

(statearr_35547_37249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (5))){
var state_35397__$1 = state_35397;
var statearr_35548_37250 = state_35397__$1;
(statearr_35548_37250[(2)] = true);

(statearr_35548_37250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (14))){
var state_35397__$1 = state_35397;
var statearr_35549_37252 = state_35397__$1;
(statearr_35549_37252[(2)] = false);

(statearr_35549_37252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (26))){
var inst_35296 = (state_35397[(9)]);
var inst_35329 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35296);
var state_35397__$1 = state_35397;
var statearr_35552_37253 = state_35397__$1;
(statearr_35552_37253[(2)] = inst_35329);

(statearr_35552_37253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (16))){
var state_35397__$1 = state_35397;
var statearr_35555_37254 = state_35397__$1;
(statearr_35555_37254[(2)] = true);

(statearr_35555_37254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (38))){
var inst_35371 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
var statearr_35561_37257 = state_35397__$1;
(statearr_35561_37257[(2)] = inst_35371);

(statearr_35561_37257[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (30))){
var inst_35296 = (state_35397[(9)]);
var inst_35288 = (state_35397[(13)]);
var inst_35287 = (state_35397[(10)]);
var inst_35345 = cljs.core.empty_QMARK_(inst_35287);
var inst_35346 = (inst_35288.cljs$core$IFn$_invoke$arity$1 ? inst_35288.cljs$core$IFn$_invoke$arity$1(inst_35296) : inst_35288.call(null,inst_35296));
var inst_35347 = cljs.core.not(inst_35346);
var inst_35348 = ((inst_35345) && (inst_35347));
var state_35397__$1 = state_35397;
var statearr_35566_37259 = state_35397__$1;
(statearr_35566_37259[(2)] = inst_35348);

(statearr_35566_37259[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (10))){
var inst_35233 = (state_35397[(8)]);
var inst_35258 = (state_35397[(2)]);
var inst_35259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35258,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35258,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35258,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35262 = inst_35233;
var state_35397__$1 = (function (){var statearr_35570 = state_35397;
(statearr_35570[(16)] = inst_35261);

(statearr_35570[(7)] = inst_35262);

(statearr_35570[(17)] = inst_35260);

(statearr_35570[(18)] = inst_35259);

return statearr_35570;
})();
var statearr_35574_37267 = state_35397__$1;
(statearr_35574_37267[(2)] = null);

(statearr_35574_37267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (18))){
var inst_35278 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
var statearr_35579_37268 = state_35397__$1;
(statearr_35579_37268[(2)] = inst_35278);

(statearr_35579_37268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (37))){
var state_35397__$1 = state_35397;
var statearr_35583_37271 = state_35397__$1;
(statearr_35583_37271[(2)] = null);

(statearr_35583_37271[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35400 === (8))){
var inst_35233 = (state_35397[(8)]);
var inst_35255 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35233);
var state_35397__$1 = state_35397;
var statearr_35584_37272 = state_35397__$1;
(statearr_35584_37272[(2)] = inst_35255);

(statearr_35584_37272[(1)] = (10));


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
var statearr_35587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35587[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35587[(1)] = (1));

return statearr_35587;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35397){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35397);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35590){if((e35590 instanceof Object)){
var ex__34210__auto__ = e35590;
var statearr_35599_37275 = state_35397;
(statearr_35599_37275[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35590;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37276 = state_35397;
state_35397 = G__37276;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35397){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35613 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35613[(6)] = c__34274__auto___37151);

return statearr_35613;
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
var G__35683 = arguments.length;
switch (G__35683) {
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
var G__35723 = arguments.length;
switch (G__35723) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35708_SHARP_){
if(cljs.core.truth_((p1__35708_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35708_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35708_SHARP_.call(null,topic)))){
return p1__35708_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35708_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35738 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35739){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35739 = meta35739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35740,meta35739__$1){
var self__ = this;
var _35740__$1 = this;
return (new cljs.core.async.t_cljs$core$async35738(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35739__$1));
}));

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35740){
var self__ = this;
var _35740__$1 = this;
return self__.meta35739;
}));

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35739","meta35739",-761283003,null)], null);
}));

(cljs.core.async.t_cljs$core$async35738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35738");

(cljs.core.async.t_cljs$core$async35738.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35738.
 */
cljs.core.async.__GT_t_cljs$core$async35738 = (function cljs$core$async$__GT_t_cljs$core$async35738(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35739){
return (new cljs.core.async.t_cljs$core$async35738(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35739));
});

}

return (new cljs.core.async.t_cljs$core$async35738(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35832){
var state_val_35833 = (state_35832[(1)]);
if((state_val_35833 === (7))){
var inst_35828 = (state_35832[(2)]);
var state_35832__$1 = state_35832;
var statearr_35835_37341 = state_35832__$1;
(statearr_35835_37341[(2)] = inst_35828);

(statearr_35835_37341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (20))){
var state_35832__$1 = state_35832;
var statearr_35836_37342 = state_35832__$1;
(statearr_35836_37342[(2)] = null);

(statearr_35836_37342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (1))){
var state_35832__$1 = state_35832;
var statearr_35838_37343 = state_35832__$1;
(statearr_35838_37343[(2)] = null);

(statearr_35838_37343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (24))){
var inst_35811 = (state_35832[(7)]);
var inst_35820 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35811);
var state_35832__$1 = state_35832;
var statearr_35839_37344 = state_35832__$1;
(statearr_35839_37344[(2)] = inst_35820);

(statearr_35839_37344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (4))){
var inst_35761 = (state_35832[(8)]);
var inst_35761__$1 = (state_35832[(2)]);
var inst_35764 = (inst_35761__$1 == null);
var state_35832__$1 = (function (){var statearr_35840 = state_35832;
(statearr_35840[(8)] = inst_35761__$1);

return statearr_35840;
})();
if(cljs.core.truth_(inst_35764)){
var statearr_35841_37346 = state_35832__$1;
(statearr_35841_37346[(1)] = (5));

} else {
var statearr_35843_37347 = state_35832__$1;
(statearr_35843_37347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (15))){
var inst_35805 = (state_35832[(2)]);
var state_35832__$1 = state_35832;
var statearr_35844_37348 = state_35832__$1;
(statearr_35844_37348[(2)] = inst_35805);

(statearr_35844_37348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (21))){
var inst_35825 = (state_35832[(2)]);
var state_35832__$1 = (function (){var statearr_35845 = state_35832;
(statearr_35845[(9)] = inst_35825);

return statearr_35845;
})();
var statearr_35846_37350 = state_35832__$1;
(statearr_35846_37350[(2)] = null);

(statearr_35846_37350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (13))){
var inst_35787 = (state_35832[(10)]);
var inst_35789 = cljs.core.chunked_seq_QMARK_(inst_35787);
var state_35832__$1 = state_35832;
if(inst_35789){
var statearr_35848_37352 = state_35832__$1;
(statearr_35848_37352[(1)] = (16));

} else {
var statearr_35849_37355 = state_35832__$1;
(statearr_35849_37355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (22))){
var inst_35817 = (state_35832[(2)]);
var state_35832__$1 = state_35832;
if(cljs.core.truth_(inst_35817)){
var statearr_35850_37357 = state_35832__$1;
(statearr_35850_37357[(1)] = (23));

} else {
var statearr_35851_37359 = state_35832__$1;
(statearr_35851_37359[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (6))){
var inst_35813 = (state_35832[(11)]);
var inst_35761 = (state_35832[(8)]);
var inst_35811 = (state_35832[(7)]);
var inst_35811__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35761) : topic_fn.call(null,inst_35761));
var inst_35812 = cljs.core.deref(mults);
var inst_35813__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35812,inst_35811__$1);
var state_35832__$1 = (function (){var statearr_35853 = state_35832;
(statearr_35853[(11)] = inst_35813__$1);

(statearr_35853[(7)] = inst_35811__$1);

return statearr_35853;
})();
if(cljs.core.truth_(inst_35813__$1)){
var statearr_35854_37360 = state_35832__$1;
(statearr_35854_37360[(1)] = (19));

} else {
var statearr_35855_37362 = state_35832__$1;
(statearr_35855_37362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (25))){
var inst_35822 = (state_35832[(2)]);
var state_35832__$1 = state_35832;
var statearr_35857_37363 = state_35832__$1;
(statearr_35857_37363[(2)] = inst_35822);

(statearr_35857_37363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (17))){
var inst_35787 = (state_35832[(10)]);
var inst_35796 = cljs.core.first(inst_35787);
var inst_35797 = cljs.core.async.muxch_STAR_(inst_35796);
var inst_35798 = cljs.core.async.close_BANG_(inst_35797);
var inst_35799 = cljs.core.next(inst_35787);
var inst_35773 = inst_35799;
var inst_35774 = null;
var inst_35775 = (0);
var inst_35776 = (0);
var state_35832__$1 = (function (){var statearr_35858 = state_35832;
(statearr_35858[(12)] = inst_35775);

(statearr_35858[(13)] = inst_35773);

(statearr_35858[(14)] = inst_35776);

(statearr_35858[(15)] = inst_35774);

(statearr_35858[(16)] = inst_35798);

return statearr_35858;
})();
var statearr_35860_37369 = state_35832__$1;
(statearr_35860_37369[(2)] = null);

(statearr_35860_37369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (3))){
var inst_35830 = (state_35832[(2)]);
var state_35832__$1 = state_35832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35832__$1,inst_35830);
} else {
if((state_val_35833 === (12))){
var inst_35807 = (state_35832[(2)]);
var state_35832__$1 = state_35832;
var statearr_35866_37371 = state_35832__$1;
(statearr_35866_37371[(2)] = inst_35807);

(statearr_35866_37371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (2))){
var state_35832__$1 = state_35832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35832__$1,(4),ch);
} else {
if((state_val_35833 === (23))){
var state_35832__$1 = state_35832;
var statearr_35869_37375 = state_35832__$1;
(statearr_35869_37375[(2)] = null);

(statearr_35869_37375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (19))){
var inst_35813 = (state_35832[(11)]);
var inst_35761 = (state_35832[(8)]);
var inst_35815 = cljs.core.async.muxch_STAR_(inst_35813);
var state_35832__$1 = state_35832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35832__$1,(22),inst_35815,inst_35761);
} else {
if((state_val_35833 === (11))){
var inst_35773 = (state_35832[(13)]);
var inst_35787 = (state_35832[(10)]);
var inst_35787__$1 = cljs.core.seq(inst_35773);
var state_35832__$1 = (function (){var statearr_35872 = state_35832;
(statearr_35872[(10)] = inst_35787__$1);

return statearr_35872;
})();
if(inst_35787__$1){
var statearr_35874_37381 = state_35832__$1;
(statearr_35874_37381[(1)] = (13));

} else {
var statearr_35875_37382 = state_35832__$1;
(statearr_35875_37382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (9))){
var inst_35809 = (state_35832[(2)]);
var state_35832__$1 = state_35832;
var statearr_35882_37386 = state_35832__$1;
(statearr_35882_37386[(2)] = inst_35809);

(statearr_35882_37386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (5))){
var inst_35770 = cljs.core.deref(mults);
var inst_35771 = cljs.core.vals(inst_35770);
var inst_35772 = cljs.core.seq(inst_35771);
var inst_35773 = inst_35772;
var inst_35774 = null;
var inst_35775 = (0);
var inst_35776 = (0);
var state_35832__$1 = (function (){var statearr_35889 = state_35832;
(statearr_35889[(12)] = inst_35775);

(statearr_35889[(13)] = inst_35773);

(statearr_35889[(14)] = inst_35776);

(statearr_35889[(15)] = inst_35774);

return statearr_35889;
})();
var statearr_35893_37394 = state_35832__$1;
(statearr_35893_37394[(2)] = null);

(statearr_35893_37394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (14))){
var state_35832__$1 = state_35832;
var statearr_35900_37396 = state_35832__$1;
(statearr_35900_37396[(2)] = null);

(statearr_35900_37396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (16))){
var inst_35787 = (state_35832[(10)]);
var inst_35791 = cljs.core.chunk_first(inst_35787);
var inst_35792 = cljs.core.chunk_rest(inst_35787);
var inst_35793 = cljs.core.count(inst_35791);
var inst_35773 = inst_35792;
var inst_35774 = inst_35791;
var inst_35775 = inst_35793;
var inst_35776 = (0);
var state_35832__$1 = (function (){var statearr_35901 = state_35832;
(statearr_35901[(12)] = inst_35775);

(statearr_35901[(13)] = inst_35773);

(statearr_35901[(14)] = inst_35776);

(statearr_35901[(15)] = inst_35774);

return statearr_35901;
})();
var statearr_35904_37401 = state_35832__$1;
(statearr_35904_37401[(2)] = null);

(statearr_35904_37401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (10))){
var inst_35775 = (state_35832[(12)]);
var inst_35773 = (state_35832[(13)]);
var inst_35776 = (state_35832[(14)]);
var inst_35774 = (state_35832[(15)]);
var inst_35781 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35774,inst_35776);
var inst_35782 = cljs.core.async.muxch_STAR_(inst_35781);
var inst_35783 = cljs.core.async.close_BANG_(inst_35782);
var inst_35784 = (inst_35776 + (1));
var tmp35897 = inst_35775;
var tmp35898 = inst_35773;
var tmp35899 = inst_35774;
var inst_35773__$1 = tmp35898;
var inst_35774__$1 = tmp35899;
var inst_35775__$1 = tmp35897;
var inst_35776__$1 = inst_35784;
var state_35832__$1 = (function (){var statearr_35907 = state_35832;
(statearr_35907[(12)] = inst_35775__$1);

(statearr_35907[(13)] = inst_35773__$1);

(statearr_35907[(14)] = inst_35776__$1);

(statearr_35907[(17)] = inst_35783);

(statearr_35907[(15)] = inst_35774__$1);

return statearr_35907;
})();
var statearr_35908_37407 = state_35832__$1;
(statearr_35908_37407[(2)] = null);

(statearr_35908_37407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (18))){
var inst_35802 = (state_35832[(2)]);
var state_35832__$1 = state_35832;
var statearr_35909_37410 = state_35832__$1;
(statearr_35909_37410[(2)] = inst_35802);

(statearr_35909_37410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35833 === (8))){
var inst_35775 = (state_35832[(12)]);
var inst_35776 = (state_35832[(14)]);
var inst_35778 = (inst_35776 < inst_35775);
var inst_35779 = inst_35778;
var state_35832__$1 = state_35832;
if(cljs.core.truth_(inst_35779)){
var statearr_35911_37413 = state_35832__$1;
(statearr_35911_37413[(1)] = (10));

} else {
var statearr_35912_37414 = state_35832__$1;
(statearr_35912_37414[(1)] = (11));

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
var statearr_35914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35914[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35914[(1)] = (1));

return statearr_35914;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35832){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35832);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35917){if((e35917 instanceof Object)){
var ex__34210__auto__ = e35917;
var statearr_35918_37419 = state_35832;
(statearr_35918_37419[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35917;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37420 = state_35832;
state_35832 = G__37420;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35920 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35920[(6)] = c__34274__auto___37338);

return statearr_35920;
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
var G__35925 = arguments.length;
switch (G__35925) {
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
var G__35933 = arguments.length;
switch (G__35933) {
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
var G__35939 = arguments.length;
switch (G__35939) {
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
var c__34274__auto___37433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35991){
var state_val_35992 = (state_35991[(1)]);
if((state_val_35992 === (7))){
var state_35991__$1 = state_35991;
var statearr_35996_37435 = state_35991__$1;
(statearr_35996_37435[(2)] = null);

(statearr_35996_37435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (1))){
var state_35991__$1 = state_35991;
var statearr_35997_37438 = state_35991__$1;
(statearr_35997_37438[(2)] = null);

(statearr_35997_37438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (4))){
var inst_35951 = (state_35991[(7)]);
var inst_35953 = (inst_35951 < cnt);
var state_35991__$1 = state_35991;
if(cljs.core.truth_(inst_35953)){
var statearr_36000_37440 = state_35991__$1;
(statearr_36000_37440[(1)] = (6));

} else {
var statearr_36001_37441 = state_35991__$1;
(statearr_36001_37441[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (15))){
var inst_35987 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
var statearr_36003_37445 = state_35991__$1;
(statearr_36003_37445[(2)] = inst_35987);

(statearr_36003_37445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (13))){
var inst_35980 = cljs.core.async.close_BANG_(out);
var state_35991__$1 = state_35991;
var statearr_36006_37448 = state_35991__$1;
(statearr_36006_37448[(2)] = inst_35980);

(statearr_36006_37448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (6))){
var state_35991__$1 = state_35991;
var statearr_36007_37451 = state_35991__$1;
(statearr_36007_37451[(2)] = null);

(statearr_36007_37451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (3))){
var inst_35989 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35991__$1,inst_35989);
} else {
if((state_val_35992 === (12))){
var inst_35976 = (state_35991[(8)]);
var inst_35976__$1 = (state_35991[(2)]);
var inst_35978 = cljs.core.some(cljs.core.nil_QMARK_,inst_35976__$1);
var state_35991__$1 = (function (){var statearr_36017 = state_35991;
(statearr_36017[(8)] = inst_35976__$1);

return statearr_36017;
})();
if(cljs.core.truth_(inst_35978)){
var statearr_36020_37455 = state_35991__$1;
(statearr_36020_37455[(1)] = (13));

} else {
var statearr_36021_37456 = state_35991__$1;
(statearr_36021_37456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (2))){
var inst_35950 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35951 = (0);
var state_35991__$1 = (function (){var statearr_36022 = state_35991;
(statearr_36022[(9)] = inst_35950);

(statearr_36022[(7)] = inst_35951);

return statearr_36022;
})();
var statearr_36023_37462 = state_35991__$1;
(statearr_36023_37462[(2)] = null);

(statearr_36023_37462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (11))){
var inst_35951 = (state_35991[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35991,(10),Object,null,(9));
var inst_35963 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35951) : chs__$1.call(null,inst_35951));
var inst_35964 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35951) : done.call(null,inst_35951));
var inst_35965 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35963,inst_35964);
var state_35991__$1 = state_35991;
var statearr_36027_37470 = state_35991__$1;
(statearr_36027_37470[(2)] = inst_35965);


cljs.core.async.impl.ioc_helpers.process_exception(state_35991__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (9))){
var inst_35951 = (state_35991[(7)]);
var inst_35967 = (state_35991[(2)]);
var inst_35968 = (inst_35951 + (1));
var inst_35951__$1 = inst_35968;
var state_35991__$1 = (function (){var statearr_36028 = state_35991;
(statearr_36028[(10)] = inst_35967);

(statearr_36028[(7)] = inst_35951__$1);

return statearr_36028;
})();
var statearr_36031_37473 = state_35991__$1;
(statearr_36031_37473[(2)] = null);

(statearr_36031_37473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (5))){
var inst_35974 = (state_35991[(2)]);
var state_35991__$1 = (function (){var statearr_36033 = state_35991;
(statearr_36033[(11)] = inst_35974);

return statearr_36033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35991__$1,(12),dchan);
} else {
if((state_val_35992 === (14))){
var inst_35976 = (state_35991[(8)]);
var inst_35982 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35976);
var state_35991__$1 = state_35991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35991__$1,(16),out,inst_35982);
} else {
if((state_val_35992 === (16))){
var inst_35984 = (state_35991[(2)]);
var state_35991__$1 = (function (){var statearr_36038 = state_35991;
(statearr_36038[(12)] = inst_35984);

return statearr_36038;
})();
var statearr_36039_37481 = state_35991__$1;
(statearr_36039_37481[(2)] = null);

(statearr_36039_37481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (10))){
var inst_35958 = (state_35991[(2)]);
var inst_35959 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35991__$1 = (function (){var statearr_36040 = state_35991;
(statearr_36040[(13)] = inst_35958);

return statearr_36040;
})();
var statearr_36043_37485 = state_35991__$1;
(statearr_36043_37485[(2)] = inst_35959);


cljs.core.async.impl.ioc_helpers.process_exception(state_35991__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (8))){
var inst_35972 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
var statearr_36045_37487 = state_35991__$1;
(statearr_36045_37487[(2)] = inst_35972);

(statearr_36045_37487[(1)] = (5));


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
var statearr_36050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36050[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36050[(1)] = (1));

return statearr_36050;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35991){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35991);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36051){if((e36051 instanceof Object)){
var ex__34210__auto__ = e36051;
var statearr_36052_37495 = state_35991;
(statearr_36052_37495[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37502 = state_35991;
state_35991 = G__37502;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36054 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36054[(6)] = c__34274__auto___37433);

return statearr_36054;
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
var G__36060 = arguments.length;
switch (G__36060) {
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
var c__34274__auto___37508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36092){
var state_val_36093 = (state_36092[(1)]);
if((state_val_36093 === (7))){
var inst_36071 = (state_36092[(7)]);
var inst_36072 = (state_36092[(8)]);
var inst_36071__$1 = (state_36092[(2)]);
var inst_36072__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36071__$1,(0),null);
var inst_36073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36071__$1,(1),null);
var inst_36074 = (inst_36072__$1 == null);
var state_36092__$1 = (function (){var statearr_36094 = state_36092;
(statearr_36094[(9)] = inst_36073);

(statearr_36094[(7)] = inst_36071__$1);

(statearr_36094[(8)] = inst_36072__$1);

return statearr_36094;
})();
if(cljs.core.truth_(inst_36074)){
var statearr_36095_37511 = state_36092__$1;
(statearr_36095_37511[(1)] = (8));

} else {
var statearr_36096_37512 = state_36092__$1;
(statearr_36096_37512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (1))){
var inst_36061 = cljs.core.vec(chs);
var inst_36062 = inst_36061;
var state_36092__$1 = (function (){var statearr_36097 = state_36092;
(statearr_36097[(10)] = inst_36062);

return statearr_36097;
})();
var statearr_36098_37518 = state_36092__$1;
(statearr_36098_37518[(2)] = null);

(statearr_36098_37518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (4))){
var inst_36062 = (state_36092[(10)]);
var state_36092__$1 = state_36092;
return cljs.core.async.ioc_alts_BANG_(state_36092__$1,(7),inst_36062);
} else {
if((state_val_36093 === (6))){
var inst_36088 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
var statearr_36099_37520 = state_36092__$1;
(statearr_36099_37520[(2)] = inst_36088);

(statearr_36099_37520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (3))){
var inst_36090 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36092__$1,inst_36090);
} else {
if((state_val_36093 === (2))){
var inst_36062 = (state_36092[(10)]);
var inst_36064 = cljs.core.count(inst_36062);
var inst_36065 = (inst_36064 > (0));
var state_36092__$1 = state_36092;
if(cljs.core.truth_(inst_36065)){
var statearr_36104_37527 = state_36092__$1;
(statearr_36104_37527[(1)] = (4));

} else {
var statearr_36105_37528 = state_36092__$1;
(statearr_36105_37528[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (11))){
var inst_36062 = (state_36092[(10)]);
var inst_36081 = (state_36092[(2)]);
var tmp36100 = inst_36062;
var inst_36062__$1 = tmp36100;
var state_36092__$1 = (function (){var statearr_36106 = state_36092;
(statearr_36106[(10)] = inst_36062__$1);

(statearr_36106[(11)] = inst_36081);

return statearr_36106;
})();
var statearr_36107_37531 = state_36092__$1;
(statearr_36107_37531[(2)] = null);

(statearr_36107_37531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (9))){
var inst_36072 = (state_36092[(8)]);
var state_36092__$1 = state_36092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36092__$1,(11),out,inst_36072);
} else {
if((state_val_36093 === (5))){
var inst_36086 = cljs.core.async.close_BANG_(out);
var state_36092__$1 = state_36092;
var statearr_36115_37534 = state_36092__$1;
(statearr_36115_37534[(2)] = inst_36086);

(statearr_36115_37534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (10))){
var inst_36084 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
var statearr_36116_37536 = state_36092__$1;
(statearr_36116_37536[(2)] = inst_36084);

(statearr_36116_37536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (8))){
var inst_36073 = (state_36092[(9)]);
var inst_36071 = (state_36092[(7)]);
var inst_36062 = (state_36092[(10)]);
var inst_36072 = (state_36092[(8)]);
var inst_36076 = (function (){var cs = inst_36062;
var vec__36067 = inst_36071;
var v = inst_36072;
var c = inst_36073;
return (function (p1__36057_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36057_SHARP_);
});
})();
var inst_36077 = cljs.core.filterv(inst_36076,inst_36062);
var inst_36062__$1 = inst_36077;
var state_36092__$1 = (function (){var statearr_36121 = state_36092;
(statearr_36121[(10)] = inst_36062__$1);

return statearr_36121;
})();
var statearr_36123_37541 = state_36092__$1;
(statearr_36123_37541[(2)] = null);

(statearr_36123_37541[(1)] = (2));


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
var statearr_36125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36125[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36125[(1)] = (1));

return statearr_36125;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36092){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36092);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36127){if((e36127 instanceof Object)){
var ex__34210__auto__ = e36127;
var statearr_36129_37548 = state_36092;
(statearr_36129_37548[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37550 = state_36092;
state_36092 = G__37550;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36131 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36131[(6)] = c__34274__auto___37508);

return statearr_36131;
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
var G__36134 = arguments.length;
switch (G__36134) {
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
var c__34274__auto___37558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36162){
var state_val_36163 = (state_36162[(1)]);
if((state_val_36163 === (7))){
var inst_36144 = (state_36162[(7)]);
var inst_36144__$1 = (state_36162[(2)]);
var inst_36145 = (inst_36144__$1 == null);
var inst_36146 = cljs.core.not(inst_36145);
var state_36162__$1 = (function (){var statearr_36166 = state_36162;
(statearr_36166[(7)] = inst_36144__$1);

return statearr_36166;
})();
if(inst_36146){
var statearr_36169_37562 = state_36162__$1;
(statearr_36169_37562[(1)] = (8));

} else {
var statearr_36170_37563 = state_36162__$1;
(statearr_36170_37563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (1))){
var inst_36137 = (0);
var state_36162__$1 = (function (){var statearr_36171 = state_36162;
(statearr_36171[(8)] = inst_36137);

return statearr_36171;
})();
var statearr_36172_37564 = state_36162__$1;
(statearr_36172_37564[(2)] = null);

(statearr_36172_37564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (4))){
var state_36162__$1 = state_36162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36162__$1,(7),ch);
} else {
if((state_val_36163 === (6))){
var inst_36157 = (state_36162[(2)]);
var state_36162__$1 = state_36162;
var statearr_36173_37566 = state_36162__$1;
(statearr_36173_37566[(2)] = inst_36157);

(statearr_36173_37566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (3))){
var inst_36159 = (state_36162[(2)]);
var inst_36160 = cljs.core.async.close_BANG_(out);
var state_36162__$1 = (function (){var statearr_36179 = state_36162;
(statearr_36179[(9)] = inst_36159);

return statearr_36179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36162__$1,inst_36160);
} else {
if((state_val_36163 === (2))){
var inst_36137 = (state_36162[(8)]);
var inst_36140 = (inst_36137 < n);
var state_36162__$1 = state_36162;
if(cljs.core.truth_(inst_36140)){
var statearr_36182_37571 = state_36162__$1;
(statearr_36182_37571[(1)] = (4));

} else {
var statearr_36183_37572 = state_36162__$1;
(statearr_36183_37572[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (11))){
var inst_36137 = (state_36162[(8)]);
var inst_36149 = (state_36162[(2)]);
var inst_36150 = (inst_36137 + (1));
var inst_36137__$1 = inst_36150;
var state_36162__$1 = (function (){var statearr_36185 = state_36162;
(statearr_36185[(8)] = inst_36137__$1);

(statearr_36185[(10)] = inst_36149);

return statearr_36185;
})();
var statearr_36188_37574 = state_36162__$1;
(statearr_36188_37574[(2)] = null);

(statearr_36188_37574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (9))){
var state_36162__$1 = state_36162;
var statearr_36190_37577 = state_36162__$1;
(statearr_36190_37577[(2)] = null);

(statearr_36190_37577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (5))){
var state_36162__$1 = state_36162;
var statearr_36192_37578 = state_36162__$1;
(statearr_36192_37578[(2)] = null);

(statearr_36192_37578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (10))){
var inst_36154 = (state_36162[(2)]);
var state_36162__$1 = state_36162;
var statearr_36196_37579 = state_36162__$1;
(statearr_36196_37579[(2)] = inst_36154);

(statearr_36196_37579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36163 === (8))){
var inst_36144 = (state_36162[(7)]);
var state_36162__$1 = state_36162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36162__$1,(11),out,inst_36144);
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
var statearr_36200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36200[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36200[(1)] = (1));

return statearr_36200;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36162){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36162);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36202){if((e36202 instanceof Object)){
var ex__34210__auto__ = e36202;
var statearr_36203_37586 = state_36162;
(statearr_36203_37586[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37588 = state_36162;
state_36162 = G__37588;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36208 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36208[(6)] = c__34274__auto___37558);

return statearr_36208;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36210 = (function (f,ch,meta36211){
this.f = f;
this.ch = ch;
this.meta36211 = meta36211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36212,meta36211__$1){
var self__ = this;
var _36212__$1 = this;
return (new cljs.core.async.t_cljs$core$async36210(self__.f,self__.ch,meta36211__$1));
}));

(cljs.core.async.t_cljs$core$async36210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36212){
var self__ = this;
var _36212__$1 = this;
return self__.meta36211;
}));

(cljs.core.async.t_cljs$core$async36210.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36210.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36210.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36219 = (function (f,ch,meta36211,_,fn1,meta36220){
this.f = f;
this.ch = ch;
this.meta36211 = meta36211;
this._ = _;
this.fn1 = fn1;
this.meta36220 = meta36220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36221,meta36220__$1){
var self__ = this;
var _36221__$1 = this;
return (new cljs.core.async.t_cljs$core$async36219(self__.f,self__.ch,self__.meta36211,self__._,self__.fn1,meta36220__$1));
}));

(cljs.core.async.t_cljs$core$async36219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36221){
var self__ = this;
var _36221__$1 = this;
return self__.meta36220;
}));

(cljs.core.async.t_cljs$core$async36219.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36209_SHARP_){
var G__36226 = (((p1__36209_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36209_SHARP_) : self__.f.call(null,p1__36209_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36226) : f1.call(null,G__36226));
});
}));

(cljs.core.async.t_cljs$core$async36219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36211","meta36211",474339151,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36210","cljs.core.async/t_cljs$core$async36210",-1508704420,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36220","meta36220",-241302831,null)], null);
}));

(cljs.core.async.t_cljs$core$async36219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36219");

(cljs.core.async.t_cljs$core$async36219.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36219.
 */
cljs.core.async.__GT_t_cljs$core$async36219 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36219(f__$1,ch__$1,meta36211__$1,___$2,fn1__$1,meta36220){
return (new cljs.core.async.t_cljs$core$async36219(f__$1,ch__$1,meta36211__$1,___$2,fn1__$1,meta36220));
});

}

return (new cljs.core.async.t_cljs$core$async36219(self__.f,self__.ch,self__.meta36211,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36227 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36227) : self__.f.call(null,G__36227));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36210.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36211","meta36211",474339151,null)], null);
}));

(cljs.core.async.t_cljs$core$async36210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36210");

(cljs.core.async.t_cljs$core$async36210.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36210.
 */
cljs.core.async.__GT_t_cljs$core$async36210 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36210(f__$1,ch__$1,meta36211){
return (new cljs.core.async.t_cljs$core$async36210(f__$1,ch__$1,meta36211));
});

}

return (new cljs.core.async.t_cljs$core$async36210(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36229 = (function (f,ch,meta36230){
this.f = f;
this.ch = ch;
this.meta36230 = meta36230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36231,meta36230__$1){
var self__ = this;
var _36231__$1 = this;
return (new cljs.core.async.t_cljs$core$async36229(self__.f,self__.ch,meta36230__$1));
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36231){
var self__ = this;
var _36231__$1 = this;
return self__.meta36230;
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36230","meta36230",-1227852521,null)], null);
}));

(cljs.core.async.t_cljs$core$async36229.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36229");

(cljs.core.async.t_cljs$core$async36229.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36229");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36229.
 */
cljs.core.async.__GT_t_cljs$core$async36229 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36229(f__$1,ch__$1,meta36230){
return (new cljs.core.async.t_cljs$core$async36229(f__$1,ch__$1,meta36230));
});

}

return (new cljs.core.async.t_cljs$core$async36229(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36241 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36241 = (function (p,ch,meta36242){
this.p = p;
this.ch = ch;
this.meta36242 = meta36242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36243,meta36242__$1){
var self__ = this;
var _36243__$1 = this;
return (new cljs.core.async.t_cljs$core$async36241(self__.p,self__.ch,meta36242__$1));
}));

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36243){
var self__ = this;
var _36243__$1 = this;
return self__.meta36242;
}));

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36242","meta36242",-1061108286,null)], null);
}));

(cljs.core.async.t_cljs$core$async36241.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36241");

(cljs.core.async.t_cljs$core$async36241.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36241");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36241.
 */
cljs.core.async.__GT_t_cljs$core$async36241 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36241(p__$1,ch__$1,meta36242){
return (new cljs.core.async.t_cljs$core$async36241(p__$1,ch__$1,meta36242));
});

}

return (new cljs.core.async.t_cljs$core$async36241(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36258 = arguments.length;
switch (G__36258) {
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
var c__34274__auto___37666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36279){
var state_val_36280 = (state_36279[(1)]);
if((state_val_36280 === (7))){
var inst_36275 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
var statearr_36281_37672 = state_36279__$1;
(statearr_36281_37672[(2)] = inst_36275);

(statearr_36281_37672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (1))){
var state_36279__$1 = state_36279;
var statearr_36282_37674 = state_36279__$1;
(statearr_36282_37674[(2)] = null);

(statearr_36282_37674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (4))){
var inst_36261 = (state_36279[(7)]);
var inst_36261__$1 = (state_36279[(2)]);
var inst_36262 = (inst_36261__$1 == null);
var state_36279__$1 = (function (){var statearr_36283 = state_36279;
(statearr_36283[(7)] = inst_36261__$1);

return statearr_36283;
})();
if(cljs.core.truth_(inst_36262)){
var statearr_36284_37680 = state_36279__$1;
(statearr_36284_37680[(1)] = (5));

} else {
var statearr_36285_37681 = state_36279__$1;
(statearr_36285_37681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (6))){
var inst_36261 = (state_36279[(7)]);
var inst_36266 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36261) : p.call(null,inst_36261));
var state_36279__$1 = state_36279;
if(cljs.core.truth_(inst_36266)){
var statearr_36286_37688 = state_36279__$1;
(statearr_36286_37688[(1)] = (8));

} else {
var statearr_36287_37689 = state_36279__$1;
(statearr_36287_37689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (3))){
var inst_36277 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36279__$1,inst_36277);
} else {
if((state_val_36280 === (2))){
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36279__$1,(4),ch);
} else {
if((state_val_36280 === (11))){
var inst_36269 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
var statearr_36288_37692 = state_36279__$1;
(statearr_36288_37692[(2)] = inst_36269);

(statearr_36288_37692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (9))){
var state_36279__$1 = state_36279;
var statearr_36289_37697 = state_36279__$1;
(statearr_36289_37697[(2)] = null);

(statearr_36289_37697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (5))){
var inst_36264 = cljs.core.async.close_BANG_(out);
var state_36279__$1 = state_36279;
var statearr_36290_37702 = state_36279__$1;
(statearr_36290_37702[(2)] = inst_36264);

(statearr_36290_37702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (10))){
var inst_36272 = (state_36279[(2)]);
var state_36279__$1 = (function (){var statearr_36291 = state_36279;
(statearr_36291[(8)] = inst_36272);

return statearr_36291;
})();
var statearr_36292_37704 = state_36279__$1;
(statearr_36292_37704[(2)] = null);

(statearr_36292_37704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (8))){
var inst_36261 = (state_36279[(7)]);
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36279__$1,(11),out,inst_36261);
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
var statearr_36293 = [null,null,null,null,null,null,null,null,null];
(statearr_36293[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36293[(1)] = (1));

return statearr_36293;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36279){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36279);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36294){if((e36294 instanceof Object)){
var ex__34210__auto__ = e36294;
var statearr_36295_37716 = state_36279;
(statearr_36295_37716[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37718 = state_36279;
state_36279 = G__37718;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36300 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36300[(6)] = c__34274__auto___37666);

return statearr_36300;
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
var G__36305 = arguments.length;
switch (G__36305) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36374){
var state_val_36375 = (state_36374[(1)]);
if((state_val_36375 === (7))){
var inst_36370 = (state_36374[(2)]);
var state_36374__$1 = state_36374;
var statearr_36378_37735 = state_36374__$1;
(statearr_36378_37735[(2)] = inst_36370);

(statearr_36378_37735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (20))){
var inst_36339 = (state_36374[(7)]);
var inst_36351 = (state_36374[(2)]);
var inst_36352 = cljs.core.next(inst_36339);
var inst_36324 = inst_36352;
var inst_36325 = null;
var inst_36326 = (0);
var inst_36327 = (0);
var state_36374__$1 = (function (){var statearr_36380 = state_36374;
(statearr_36380[(8)] = inst_36324);

(statearr_36380[(9)] = inst_36325);

(statearr_36380[(10)] = inst_36326);

(statearr_36380[(11)] = inst_36327);

(statearr_36380[(12)] = inst_36351);

return statearr_36380;
})();
var statearr_36383_37743 = state_36374__$1;
(statearr_36383_37743[(2)] = null);

(statearr_36383_37743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (1))){
var state_36374__$1 = state_36374;
var statearr_36386_37745 = state_36374__$1;
(statearr_36386_37745[(2)] = null);

(statearr_36386_37745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (4))){
var inst_36313 = (state_36374[(13)]);
var inst_36313__$1 = (state_36374[(2)]);
var inst_36314 = (inst_36313__$1 == null);
var state_36374__$1 = (function (){var statearr_36390 = state_36374;
(statearr_36390[(13)] = inst_36313__$1);

return statearr_36390;
})();
if(cljs.core.truth_(inst_36314)){
var statearr_36392_37752 = state_36374__$1;
(statearr_36392_37752[(1)] = (5));

} else {
var statearr_36394_37754 = state_36374__$1;
(statearr_36394_37754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (15))){
var state_36374__$1 = state_36374;
var statearr_36398_37756 = state_36374__$1;
(statearr_36398_37756[(2)] = null);

(statearr_36398_37756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (21))){
var state_36374__$1 = state_36374;
var statearr_36399_37758 = state_36374__$1;
(statearr_36399_37758[(2)] = null);

(statearr_36399_37758[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (13))){
var inst_36324 = (state_36374[(8)]);
var inst_36325 = (state_36374[(9)]);
var inst_36326 = (state_36374[(10)]);
var inst_36327 = (state_36374[(11)]);
var inst_36334 = (state_36374[(2)]);
var inst_36336 = (inst_36327 + (1));
var tmp36395 = inst_36324;
var tmp36396 = inst_36325;
var tmp36397 = inst_36326;
var inst_36324__$1 = tmp36395;
var inst_36325__$1 = tmp36396;
var inst_36326__$1 = tmp36397;
var inst_36327__$1 = inst_36336;
var state_36374__$1 = (function (){var statearr_36411 = state_36374;
(statearr_36411[(8)] = inst_36324__$1);

(statearr_36411[(9)] = inst_36325__$1);

(statearr_36411[(10)] = inst_36326__$1);

(statearr_36411[(14)] = inst_36334);

(statearr_36411[(11)] = inst_36327__$1);

return statearr_36411;
})();
var statearr_36412_37770 = state_36374__$1;
(statearr_36412_37770[(2)] = null);

(statearr_36412_37770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (22))){
var state_36374__$1 = state_36374;
var statearr_36413_37772 = state_36374__$1;
(statearr_36413_37772[(2)] = null);

(statearr_36413_37772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (6))){
var inst_36313 = (state_36374[(13)]);
var inst_36322 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36313) : f.call(null,inst_36313));
var inst_36323 = cljs.core.seq(inst_36322);
var inst_36324 = inst_36323;
var inst_36325 = null;
var inst_36326 = (0);
var inst_36327 = (0);
var state_36374__$1 = (function (){var statearr_36415 = state_36374;
(statearr_36415[(8)] = inst_36324);

(statearr_36415[(9)] = inst_36325);

(statearr_36415[(10)] = inst_36326);

(statearr_36415[(11)] = inst_36327);

return statearr_36415;
})();
var statearr_36416_37779 = state_36374__$1;
(statearr_36416_37779[(2)] = null);

(statearr_36416_37779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (17))){
var inst_36339 = (state_36374[(7)]);
var inst_36344 = cljs.core.chunk_first(inst_36339);
var inst_36345 = cljs.core.chunk_rest(inst_36339);
var inst_36346 = cljs.core.count(inst_36344);
var inst_36324 = inst_36345;
var inst_36325 = inst_36344;
var inst_36326 = inst_36346;
var inst_36327 = (0);
var state_36374__$1 = (function (){var statearr_36419 = state_36374;
(statearr_36419[(8)] = inst_36324);

(statearr_36419[(9)] = inst_36325);

(statearr_36419[(10)] = inst_36326);

(statearr_36419[(11)] = inst_36327);

return statearr_36419;
})();
var statearr_36420_37784 = state_36374__$1;
(statearr_36420_37784[(2)] = null);

(statearr_36420_37784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (3))){
var inst_36372 = (state_36374[(2)]);
var state_36374__$1 = state_36374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36374__$1,inst_36372);
} else {
if((state_val_36375 === (12))){
var inst_36360 = (state_36374[(2)]);
var state_36374__$1 = state_36374;
var statearr_36423_37794 = state_36374__$1;
(statearr_36423_37794[(2)] = inst_36360);

(statearr_36423_37794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (2))){
var state_36374__$1 = state_36374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36374__$1,(4),in$);
} else {
if((state_val_36375 === (23))){
var inst_36368 = (state_36374[(2)]);
var state_36374__$1 = state_36374;
var statearr_36425_37797 = state_36374__$1;
(statearr_36425_37797[(2)] = inst_36368);

(statearr_36425_37797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (19))){
var inst_36355 = (state_36374[(2)]);
var state_36374__$1 = state_36374;
var statearr_36427_37799 = state_36374__$1;
(statearr_36427_37799[(2)] = inst_36355);

(statearr_36427_37799[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (11))){
var inst_36324 = (state_36374[(8)]);
var inst_36339 = (state_36374[(7)]);
var inst_36339__$1 = cljs.core.seq(inst_36324);
var state_36374__$1 = (function (){var statearr_36428 = state_36374;
(statearr_36428[(7)] = inst_36339__$1);

return statearr_36428;
})();
if(inst_36339__$1){
var statearr_36429_37805 = state_36374__$1;
(statearr_36429_37805[(1)] = (14));

} else {
var statearr_36430_37807 = state_36374__$1;
(statearr_36430_37807[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (9))){
var inst_36362 = (state_36374[(2)]);
var inst_36363 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36374__$1 = (function (){var statearr_36433 = state_36374;
(statearr_36433[(15)] = inst_36362);

return statearr_36433;
})();
if(cljs.core.truth_(inst_36363)){
var statearr_36434_37811 = state_36374__$1;
(statearr_36434_37811[(1)] = (21));

} else {
var statearr_36435_37812 = state_36374__$1;
(statearr_36435_37812[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (5))){
var inst_36316 = cljs.core.async.close_BANG_(out);
var state_36374__$1 = state_36374;
var statearr_36436_37814 = state_36374__$1;
(statearr_36436_37814[(2)] = inst_36316);

(statearr_36436_37814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (14))){
var inst_36339 = (state_36374[(7)]);
var inst_36342 = cljs.core.chunked_seq_QMARK_(inst_36339);
var state_36374__$1 = state_36374;
if(inst_36342){
var statearr_36438_37817 = state_36374__$1;
(statearr_36438_37817[(1)] = (17));

} else {
var statearr_36440_37821 = state_36374__$1;
(statearr_36440_37821[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (16))){
var inst_36358 = (state_36374[(2)]);
var state_36374__$1 = state_36374;
var statearr_36443_37824 = state_36374__$1;
(statearr_36443_37824[(2)] = inst_36358);

(statearr_36443_37824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36375 === (10))){
var inst_36325 = (state_36374[(9)]);
var inst_36327 = (state_36374[(11)]);
var inst_36332 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36325,inst_36327);
var state_36374__$1 = state_36374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36374__$1,(13),out,inst_36332);
} else {
if((state_val_36375 === (18))){
var inst_36339 = (state_36374[(7)]);
var inst_36349 = cljs.core.first(inst_36339);
var state_36374__$1 = state_36374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36374__$1,(20),out,inst_36349);
} else {
if((state_val_36375 === (8))){
var inst_36326 = (state_36374[(10)]);
var inst_36327 = (state_36374[(11)]);
var inst_36329 = (inst_36327 < inst_36326);
var inst_36330 = inst_36329;
var state_36374__$1 = state_36374;
if(cljs.core.truth_(inst_36330)){
var statearr_36449_37829 = state_36374__$1;
(statearr_36449_37829[(1)] = (10));

} else {
var statearr_36453_37830 = state_36374__$1;
(statearr_36453_37830[(1)] = (11));

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
var statearr_36454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36454[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36454[(1)] = (1));

return statearr_36454;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36374){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36374);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36456){if((e36456 instanceof Object)){
var ex__34210__auto__ = e36456;
var statearr_36457_37833 = state_36374;
(statearr_36457_37833[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37834 = state_36374;
state_36374 = G__37834;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36374){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36460 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36460[(6)] = c__34274__auto__);

return statearr_36460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36464 = arguments.length;
switch (G__36464) {
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
var G__36468 = arguments.length;
switch (G__36468) {
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
var G__36476 = arguments.length;
switch (G__36476) {
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
var c__34274__auto___37847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36508){
var state_val_36510 = (state_36508[(1)]);
if((state_val_36510 === (7))){
var inst_36503 = (state_36508[(2)]);
var state_36508__$1 = state_36508;
var statearr_36514_37849 = state_36508__$1;
(statearr_36514_37849[(2)] = inst_36503);

(statearr_36514_37849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (1))){
var inst_36485 = null;
var state_36508__$1 = (function (){var statearr_36515 = state_36508;
(statearr_36515[(7)] = inst_36485);

return statearr_36515;
})();
var statearr_36517_37851 = state_36508__$1;
(statearr_36517_37851[(2)] = null);

(statearr_36517_37851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (4))){
var inst_36488 = (state_36508[(8)]);
var inst_36488__$1 = (state_36508[(2)]);
var inst_36489 = (inst_36488__$1 == null);
var inst_36490 = cljs.core.not(inst_36489);
var state_36508__$1 = (function (){var statearr_36518 = state_36508;
(statearr_36518[(8)] = inst_36488__$1);

return statearr_36518;
})();
if(inst_36490){
var statearr_36520_37852 = state_36508__$1;
(statearr_36520_37852[(1)] = (5));

} else {
var statearr_36521_37853 = state_36508__$1;
(statearr_36521_37853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (6))){
var state_36508__$1 = state_36508;
var statearr_36523_37854 = state_36508__$1;
(statearr_36523_37854[(2)] = null);

(statearr_36523_37854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (3))){
var inst_36505 = (state_36508[(2)]);
var inst_36506 = cljs.core.async.close_BANG_(out);
var state_36508__$1 = (function (){var statearr_36524 = state_36508;
(statearr_36524[(9)] = inst_36505);

return statearr_36524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36508__$1,inst_36506);
} else {
if((state_val_36510 === (2))){
var state_36508__$1 = state_36508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36508__$1,(4),ch);
} else {
if((state_val_36510 === (11))){
var inst_36488 = (state_36508[(8)]);
var inst_36497 = (state_36508[(2)]);
var inst_36485 = inst_36488;
var state_36508__$1 = (function (){var statearr_36525 = state_36508;
(statearr_36525[(7)] = inst_36485);

(statearr_36525[(10)] = inst_36497);

return statearr_36525;
})();
var statearr_36528_37864 = state_36508__$1;
(statearr_36528_37864[(2)] = null);

(statearr_36528_37864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (9))){
var inst_36488 = (state_36508[(8)]);
var state_36508__$1 = state_36508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36508__$1,(11),out,inst_36488);
} else {
if((state_val_36510 === (5))){
var inst_36485 = (state_36508[(7)]);
var inst_36488 = (state_36508[(8)]);
var inst_36492 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36488,inst_36485);
var state_36508__$1 = state_36508;
if(inst_36492){
var statearr_36530_37869 = state_36508__$1;
(statearr_36530_37869[(1)] = (8));

} else {
var statearr_36531_37870 = state_36508__$1;
(statearr_36531_37870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (10))){
var inst_36500 = (state_36508[(2)]);
var state_36508__$1 = state_36508;
var statearr_36534_37871 = state_36508__$1;
(statearr_36534_37871[(2)] = inst_36500);

(statearr_36534_37871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (8))){
var inst_36485 = (state_36508[(7)]);
var tmp36529 = inst_36485;
var inst_36485__$1 = tmp36529;
var state_36508__$1 = (function (){var statearr_36535 = state_36508;
(statearr_36535[(7)] = inst_36485__$1);

return statearr_36535;
})();
var statearr_36536_37873 = state_36508__$1;
(statearr_36536_37873[(2)] = null);

(statearr_36536_37873[(1)] = (2));


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
var statearr_36544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36544[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36544[(1)] = (1));

return statearr_36544;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36508){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36508);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36545){if((e36545 instanceof Object)){
var ex__34210__auto__ = e36545;
var statearr_36546_37878 = state_36508;
(statearr_36546_37878[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37884 = state_36508;
state_36508 = G__37884;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36549 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36549[(6)] = c__34274__auto___37847);

return statearr_36549;
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
var G__36554 = arguments.length;
switch (G__36554) {
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
var c__34274__auto___37892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36595){
var state_val_36596 = (state_36595[(1)]);
if((state_val_36596 === (7))){
var inst_36591 = (state_36595[(2)]);
var state_36595__$1 = state_36595;
var statearr_36600_37899 = state_36595__$1;
(statearr_36600_37899[(2)] = inst_36591);

(statearr_36600_37899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (1))){
var inst_36556 = (new Array(n));
var inst_36558 = inst_36556;
var inst_36559 = (0);
var state_36595__$1 = (function (){var statearr_36601 = state_36595;
(statearr_36601[(7)] = inst_36559);

(statearr_36601[(8)] = inst_36558);

return statearr_36601;
})();
var statearr_36603_37902 = state_36595__$1;
(statearr_36603_37902[(2)] = null);

(statearr_36603_37902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (4))){
var inst_36562 = (state_36595[(9)]);
var inst_36562__$1 = (state_36595[(2)]);
var inst_36563 = (inst_36562__$1 == null);
var inst_36564 = cljs.core.not(inst_36563);
var state_36595__$1 = (function (){var statearr_36605 = state_36595;
(statearr_36605[(9)] = inst_36562__$1);

return statearr_36605;
})();
if(inst_36564){
var statearr_36606_37908 = state_36595__$1;
(statearr_36606_37908[(1)] = (5));

} else {
var statearr_36607_37910 = state_36595__$1;
(statearr_36607_37910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (15))){
var inst_36585 = (state_36595[(2)]);
var state_36595__$1 = state_36595;
var statearr_36609_37912 = state_36595__$1;
(statearr_36609_37912[(2)] = inst_36585);

(statearr_36609_37912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (13))){
var state_36595__$1 = state_36595;
var statearr_36610_37914 = state_36595__$1;
(statearr_36610_37914[(2)] = null);

(statearr_36610_37914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (6))){
var inst_36559 = (state_36595[(7)]);
var inst_36581 = (inst_36559 > (0));
var state_36595__$1 = state_36595;
if(cljs.core.truth_(inst_36581)){
var statearr_36613_37915 = state_36595__$1;
(statearr_36613_37915[(1)] = (12));

} else {
var statearr_36614_37916 = state_36595__$1;
(statearr_36614_37916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (3))){
var inst_36593 = (state_36595[(2)]);
var state_36595__$1 = state_36595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36595__$1,inst_36593);
} else {
if((state_val_36596 === (12))){
var inst_36558 = (state_36595[(8)]);
var inst_36583 = cljs.core.vec(inst_36558);
var state_36595__$1 = state_36595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36595__$1,(15),out,inst_36583);
} else {
if((state_val_36596 === (2))){
var state_36595__$1 = state_36595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36595__$1,(4),ch);
} else {
if((state_val_36596 === (11))){
var inst_36574 = (state_36595[(2)]);
var inst_36575 = (new Array(n));
var inst_36558 = inst_36575;
var inst_36559 = (0);
var state_36595__$1 = (function (){var statearr_36623 = state_36595;
(statearr_36623[(10)] = inst_36574);

(statearr_36623[(7)] = inst_36559);

(statearr_36623[(8)] = inst_36558);

return statearr_36623;
})();
var statearr_36624_37927 = state_36595__$1;
(statearr_36624_37927[(2)] = null);

(statearr_36624_37927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (9))){
var inst_36558 = (state_36595[(8)]);
var inst_36572 = cljs.core.vec(inst_36558);
var state_36595__$1 = state_36595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36595__$1,(11),out,inst_36572);
} else {
if((state_val_36596 === (5))){
var inst_36562 = (state_36595[(9)]);
var inst_36559 = (state_36595[(7)]);
var inst_36567 = (state_36595[(11)]);
var inst_36558 = (state_36595[(8)]);
var inst_36566 = (inst_36558[inst_36559] = inst_36562);
var inst_36567__$1 = (inst_36559 + (1));
var inst_36568 = (inst_36567__$1 < n);
var state_36595__$1 = (function (){var statearr_36628 = state_36595;
(statearr_36628[(11)] = inst_36567__$1);

(statearr_36628[(12)] = inst_36566);

return statearr_36628;
})();
if(cljs.core.truth_(inst_36568)){
var statearr_36629_37934 = state_36595__$1;
(statearr_36629_37934[(1)] = (8));

} else {
var statearr_36630_37935 = state_36595__$1;
(statearr_36630_37935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (14))){
var inst_36588 = (state_36595[(2)]);
var inst_36589 = cljs.core.async.close_BANG_(out);
var state_36595__$1 = (function (){var statearr_36632 = state_36595;
(statearr_36632[(13)] = inst_36588);

return statearr_36632;
})();
var statearr_36634_37939 = state_36595__$1;
(statearr_36634_37939[(2)] = inst_36589);

(statearr_36634_37939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (10))){
var inst_36579 = (state_36595[(2)]);
var state_36595__$1 = state_36595;
var statearr_36635_37941 = state_36595__$1;
(statearr_36635_37941[(2)] = inst_36579);

(statearr_36635_37941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36596 === (8))){
var inst_36567 = (state_36595[(11)]);
var inst_36558 = (state_36595[(8)]);
var tmp36631 = inst_36558;
var inst_36558__$1 = tmp36631;
var inst_36559 = inst_36567;
var state_36595__$1 = (function (){var statearr_36636 = state_36595;
(statearr_36636[(7)] = inst_36559);

(statearr_36636[(8)] = inst_36558__$1);

return statearr_36636;
})();
var statearr_36638_37943 = state_36595__$1;
(statearr_36638_37943[(2)] = null);

(statearr_36638_37943[(1)] = (2));


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
var statearr_36640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36640[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36640[(1)] = (1));

return statearr_36640;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36595){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36595);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36658){if((e36658 instanceof Object)){
var ex__34210__auto__ = e36658;
var statearr_36659_37952 = state_36595;
(statearr_36659_37952[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37954 = state_36595;
state_36595 = G__37954;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36666 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36666[(6)] = c__34274__auto___37892);

return statearr_36666;
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
var G__36671 = arguments.length;
switch (G__36671) {
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
var c__34274__auto___37965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36722){
var state_val_36723 = (state_36722[(1)]);
if((state_val_36723 === (7))){
var inst_36718 = (state_36722[(2)]);
var state_36722__$1 = state_36722;
var statearr_36729_37967 = state_36722__$1;
(statearr_36729_37967[(2)] = inst_36718);

(statearr_36729_37967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36723 === (1))){
var inst_36679 = [];
var inst_36680 = inst_36679;
var inst_36681 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36722__$1 = (function (){var statearr_36730 = state_36722;
(statearr_36730[(7)] = inst_36681);

(statearr_36730[(8)] = inst_36680);

return statearr_36730;
})();
var statearr_36731_37969 = state_36722__$1;
(statearr_36731_37969[(2)] = null);

(statearr_36731_37969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36723 === (4))){
var inst_36684 = (state_36722[(9)]);
var inst_36684__$1 = (state_36722[(2)]);
var inst_36685 = (inst_36684__$1 == null);
var inst_36686 = cljs.core.not(inst_36685);
var state_36722__$1 = (function (){var statearr_36734 = state_36722;
(statearr_36734[(9)] = inst_36684__$1);

return statearr_36734;
})();
if(inst_36686){
var statearr_36737_37973 = state_36722__$1;
(statearr_36737_37973[(1)] = (5));

} else {
var statearr_36738_37975 = state_36722__$1;
(statearr_36738_37975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36723 === (15))){
var inst_36712 = (state_36722[(2)]);
var state_36722__$1 = state_36722;
var statearr_36739_37979 = state_36722__$1;
(statearr_36739_37979[(2)] = inst_36712);

(statearr_36739_37979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36723 === (13))){
var state_36722__$1 = state_36722;
var statearr_36740_37980 = state_36722__$1;
(statearr_36740_37980[(2)] = null);

(statearr_36740_37980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36723 === (6))){
var inst_36680 = (state_36722[(8)]);
var inst_36707 = inst_36680.length;
var inst_36708 = (inst_36707 > (0));
var state_36722__$1 = state_36722;
if(cljs.core.truth_(inst_36708)){
var statearr_36742_37985 = state_36722__$1;
(statearr_36742_37985[(1)] = (12));

} else {
var statearr_36743_37986 = state_36722__$1;
(statearr_36743_37986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36723 === (3))){
var inst_36720 = (state_36722[(2)]);
var state_36722__$1 = state_36722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36722__$1,inst_36720);
} else {
if((state_val_36723 === (12))){
var inst_36680 = (state_36722[(8)]);
var inst_36710 = cljs.core.vec(inst_36680);
var state_36722__$1 = state_36722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36722__$1,(15),out,inst_36710);
} else {
if((state_val_36723 === (2))){
var state_36722__$1 = state_36722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36722__$1,(4),ch);
} else {
if((state_val_36723 === (11))){
var inst_36684 = (state_36722[(9)]);
var inst_36688 = (state_36722[(10)]);
var inst_36698 = (state_36722[(2)]);
var inst_36701 = [];
var inst_36702 = inst_36701.push(inst_36684);
var inst_36680 = inst_36701;
var inst_36681 = inst_36688;
var state_36722__$1 = (function (){var statearr_36744 = state_36722;
(statearr_36744[(11)] = inst_36698);

(statearr_36744[(7)] = inst_36681);

(statearr_36744[(12)] = inst_36702);

(statearr_36744[(8)] = inst_36680);

return statearr_36744;
})();
var statearr_36746_37992 = state_36722__$1;
(statearr_36746_37992[(2)] = null);

(statearr_36746_37992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36723 === (9))){
var inst_36680 = (state_36722[(8)]);
var inst_36696 = cljs.core.vec(inst_36680);
var state_36722__$1 = state_36722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36722__$1,(11),out,inst_36696);
} else {
if((state_val_36723 === (5))){
var inst_36684 = (state_36722[(9)]);
var inst_36688 = (state_36722[(10)]);
var inst_36681 = (state_36722[(7)]);
var inst_36688__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36684) : f.call(null,inst_36684));
var inst_36689 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36688__$1,inst_36681);
var inst_36690 = cljs.core.keyword_identical_QMARK_(inst_36681,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36691 = ((inst_36689) || (inst_36690));
var state_36722__$1 = (function (){var statearr_36751 = state_36722;
(statearr_36751[(10)] = inst_36688__$1);

return statearr_36751;
})();
if(cljs.core.truth_(inst_36691)){
var statearr_36752_38003 = state_36722__$1;
(statearr_36752_38003[(1)] = (8));

} else {
var statearr_36753_38004 = state_36722__$1;
(statearr_36753_38004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36723 === (14))){
var inst_36715 = (state_36722[(2)]);
var inst_36716 = cljs.core.async.close_BANG_(out);
var state_36722__$1 = (function (){var statearr_36755 = state_36722;
(statearr_36755[(13)] = inst_36715);

return statearr_36755;
})();
var statearr_36756_38009 = state_36722__$1;
(statearr_36756_38009[(2)] = inst_36716);

(statearr_36756_38009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36723 === (10))){
var inst_36705 = (state_36722[(2)]);
var state_36722__$1 = state_36722;
var statearr_36758_38010 = state_36722__$1;
(statearr_36758_38010[(2)] = inst_36705);

(statearr_36758_38010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36723 === (8))){
var inst_36684 = (state_36722[(9)]);
var inst_36688 = (state_36722[(10)]);
var inst_36680 = (state_36722[(8)]);
var inst_36693 = inst_36680.push(inst_36684);
var tmp36754 = inst_36680;
var inst_36680__$1 = tmp36754;
var inst_36681 = inst_36688;
var state_36722__$1 = (function (){var statearr_36759 = state_36722;
(statearr_36759[(14)] = inst_36693);

(statearr_36759[(7)] = inst_36681);

(statearr_36759[(8)] = inst_36680__$1);

return statearr_36759;
})();
var statearr_36760_38016 = state_36722__$1;
(statearr_36760_38016[(2)] = null);

(statearr_36760_38016[(1)] = (2));


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
var statearr_36762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36762[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36762[(1)] = (1));

return statearr_36762;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36722){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36722);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36763){if((e36763 instanceof Object)){
var ex__34210__auto__ = e36763;
var statearr_36764_38024 = state_36722;
(statearr_36764_38024[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38025 = state_36722;
state_36722 = G__38025;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36766 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36766[(6)] = c__34274__auto___37965);

return statearr_36766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
