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
var x_36825 = (0);
while(true){
if((x_36825 < n__4666__auto___36824)){
(a[x_36825] = x_36825);

var G__36826 = (x_36825 + (1));
x_36825 = G__36826;
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
return (function (p1__34361_SHARP_){
var G__34364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34361_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34364) : fret.call(null,G__34364));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34362_SHARP_){
var G__34365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34362_SHARP_,port], null);
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
var G__36835 = (i + (1));
i = G__36835;
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
var len__4789__auto___36837 = arguments.length;
var i__4790__auto___36838 = (0);
while(true){
if((i__4790__auto___36838 < len__4789__auto___36837)){
args__4795__auto__.push((arguments[i__4790__auto___36838]));

var G__36839 = (i__4790__auto___36838 + (1));
i__4790__auto___36838 = G__36839;
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
var c__34274__auto___36844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34425_36845 = state_34411__$1;
(statearr_34425_36845[(2)] = inst_34407);

(statearr_34425_36845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34426_36847 = state_34411__$1;
(statearr_34426_36847[(2)] = null);

(statearr_34426_36847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (4))){
var inst_34390 = (state_34411[(7)]);
var inst_34390__$1 = (state_34411[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34411__$1 = (function (){var statearr_34427 = state_34411;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36848 = state_34411__$1;
(statearr_34428_36848[(1)] = (5));

} else {
var statearr_34429_36849 = state_34411__$1;
(statearr_34429_36849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36851 = state_34411__$1;
(statearr_34430_36851[(2)] = null);

(statearr_34430_36851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (6))){
var inst_34390 = (state_34411[(7)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34411__$1,(11),to,inst_34390);
} else {
if((state_val_34412 === (3))){
var inst_34409 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34411__$1,inst_34409);
} else {
if((state_val_34412 === (12))){
var state_34411__$1 = state_34411;
var statearr_34431_36852 = state_34411__$1;
(statearr_34431_36852[(2)] = null);

(statearr_34431_36852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (2))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34411__$1,(4),from);
} else {
if((state_val_34412 === (11))){
var inst_34400 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36854 = state_34411__$1;
(statearr_34432_36854[(1)] = (12));

} else {
var statearr_34433_36855 = state_34411__$1;
(statearr_34433_36855[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36856 = state_34411__$1;
(statearr_34434_36856[(2)] = null);

(statearr_34434_36856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36858 = state_34411__$1;
(statearr_34435_36858[(1)] = (8));

} else {
var statearr_34436_36859 = state_34411__$1;
(statearr_34436_36859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36860 = state_34411__$1;
(statearr_34437_36860[(2)] = inst_34405);

(statearr_34437_36860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36861 = state_34411__$1;
(statearr_34438_36861[(2)] = inst_34397);

(statearr_34438_36861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36863 = state_34411__$1;
(statearr_34439_36863[(2)] = inst_34394);

(statearr_34439_36863[(1)] = (10));


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
var statearr_34442_36865 = state_34411;
(statearr_34442_36865[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36866 = state_34411;
state_34411 = G__36866;
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
(statearr_34443[(6)] = c__34274__auto___36844);

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
var c__34274__auto___36869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34458_36871 = state_34452;
(statearr_34458_36871[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36873 = state_34452;
state_34452 = G__36873;
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
var state__34276__auto__ = (function (){var statearr_34462 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34462[(6)] = c__34274__auto___36869);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34463){
var vec__34464 = p__34463;
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
var n__4666__auto___36875 = n;
var __36876 = (0);
while(true){
if((__36876 < n__4666__auto___36875)){
var G__34468_36877 = type;
var G__34468_36878__$1 = (((G__34468_36877 instanceof cljs.core.Keyword))?G__34468_36877.fqn:null);
switch (G__34468_36878__$1) {
case "compute":
var c__34274__auto___36881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36876,c__34274__auto___36881,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36876,c__34274__auto___36881,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async){
return (function (state_34481){
var state_val_34482 = (state_34481[(1)]);
if((state_val_34482 === (1))){
var state_34481__$1 = state_34481;
var statearr_34483_36882 = state_34481__$1;
(statearr_34483_36882[(2)] = null);

(statearr_34483_36882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (2))){
var state_34481__$1 = state_34481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34481__$1,(4),jobs);
} else {
if((state_val_34482 === (3))){
var inst_34479 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34481__$1,inst_34479);
} else {
if((state_val_34482 === (4))){
var inst_34471 = (state_34481[(2)]);
var inst_34472 = process(inst_34471);
var state_34481__$1 = state_34481;
if(cljs.core.truth_(inst_34472)){
var statearr_34485_36884 = state_34481__$1;
(statearr_34485_36884[(1)] = (5));

} else {
var statearr_34486_36885 = state_34481__$1;
(statearr_34486_36885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (5))){
var state_34481__$1 = state_34481;
var statearr_34487_36887 = state_34481__$1;
(statearr_34487_36887[(2)] = null);

(statearr_34487_36887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (6))){
var state_34481__$1 = state_34481;
var statearr_34489_36888 = state_34481__$1;
(statearr_34489_36888[(2)] = null);

(statearr_34489_36888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (7))){
var inst_34477 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
var statearr_34490_36889 = state_34481__$1;
(statearr_34490_36889[(2)] = inst_34477);

(statearr_34490_36889[(1)] = (3));


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
});})(__36876,c__34274__auto___36881,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async))
;
return ((function (__36876,switch__34206__auto__,c__34274__auto___36881,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34491 = [null,null,null,null,null,null,null];
(statearr_34491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34491[(1)] = (1));

return statearr_34491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34481){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34481);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34492){if((e34492 instanceof Object)){
var ex__34210__auto__ = e34492;
var statearr_34494_36892 = state_34481;
(statearr_34494_36892[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36893 = state_34481;
state_34481 = G__36893;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36876,switch__34206__auto__,c__34274__auto___36881,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34495 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34495[(6)] = c__34274__auto___36881);

return statearr_34495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36876,c__34274__auto___36881,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36876,c__34274__auto___36895,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36876,c__34274__auto___36895,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async){
return (function (state_34508){
var state_val_34509 = (state_34508[(1)]);
if((state_val_34509 === (1))){
var state_34508__$1 = state_34508;
var statearr_34512_36896 = state_34508__$1;
(statearr_34512_36896[(2)] = null);

(statearr_34512_36896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (2))){
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34508__$1,(4),jobs);
} else {
if((state_val_34509 === (3))){
var inst_34506 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34508__$1,inst_34506);
} else {
if((state_val_34509 === (4))){
var inst_34498 = (state_34508[(2)]);
var inst_34499 = async(inst_34498);
var state_34508__$1 = state_34508;
if(cljs.core.truth_(inst_34499)){
var statearr_34518_36898 = state_34508__$1;
(statearr_34518_36898[(1)] = (5));

} else {
var statearr_34519_36899 = state_34508__$1;
(statearr_34519_36899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (5))){
var state_34508__$1 = state_34508;
var statearr_34520_36901 = state_34508__$1;
(statearr_34520_36901[(2)] = null);

(statearr_34520_36901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (6))){
var state_34508__$1 = state_34508;
var statearr_34521_36902 = state_34508__$1;
(statearr_34521_36902[(2)] = null);

(statearr_34521_36902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (7))){
var inst_34504 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
var statearr_34522_36903 = state_34508__$1;
(statearr_34522_36903[(2)] = inst_34504);

(statearr_34522_36903[(1)] = (3));


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
});})(__36876,c__34274__auto___36895,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async))
;
return ((function (__36876,switch__34206__auto__,c__34274__auto___36895,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34523 = [null,null,null,null,null,null,null];
(statearr_34523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34523[(1)] = (1));

return statearr_34523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34508){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34508);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34524){if((e34524 instanceof Object)){
var ex__34210__auto__ = e34524;
var statearr_34525_36906 = state_34508;
(statearr_34525_36906[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36907 = state_34508;
state_34508 = G__36907;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36876,switch__34206__auto__,c__34274__auto___36895,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34527 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34527[(6)] = c__34274__auto___36895);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36876,c__34274__auto___36895,G__34468_36877,G__34468_36878__$1,n__4666__auto___36875,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_36878__$1)].join('')));

}

var G__36909 = (__36876 + (1));
__36876 = G__36909;
continue;
} else {
}
break;
}

var c__34274__auto___36910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34553){
var state_val_34554 = (state_34553[(1)]);
if((state_val_34554 === (7))){
var inst_34545 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
var statearr_34558_36911 = state_34553__$1;
(statearr_34558_36911[(2)] = inst_34545);

(statearr_34558_36911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (1))){
var state_34553__$1 = state_34553;
var statearr_34559_36912 = state_34553__$1;
(statearr_34559_36912[(2)] = null);

(statearr_34559_36912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (4))){
var inst_34530 = (state_34553[(7)]);
var inst_34530__$1 = (state_34553[(2)]);
var inst_34531 = (inst_34530__$1 == null);
var state_34553__$1 = (function (){var statearr_34560 = state_34553;
(statearr_34560[(7)] = inst_34530__$1);

return statearr_34560;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34561_36914 = state_34553__$1;
(statearr_34561_36914[(1)] = (5));

} else {
var statearr_34562_36915 = state_34553__$1;
(statearr_34562_36915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (6))){
var inst_34535 = (state_34553[(8)]);
var inst_34530 = (state_34553[(7)]);
var inst_34535__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34537 = [inst_34530,inst_34535__$1];
var inst_34538 = (new cljs.core.PersistentVector(null,2,(5),inst_34536,inst_34537,null));
var state_34553__$1 = (function (){var statearr_34563 = state_34553;
(statearr_34563[(8)] = inst_34535__$1);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34553__$1,(8),jobs,inst_34538);
} else {
if((state_val_34554 === (3))){
var inst_34547 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34553__$1,inst_34547);
} else {
if((state_val_34554 === (2))){
var state_34553__$1 = state_34553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34553__$1,(4),from);
} else {
if((state_val_34554 === (9))){
var inst_34542 = (state_34553[(2)]);
var state_34553__$1 = (function (){var statearr_34567 = state_34553;
(statearr_34567[(9)] = inst_34542);

return statearr_34567;
})();
var statearr_34568_36918 = state_34553__$1;
(statearr_34568_36918[(2)] = null);

(statearr_34568_36918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (5))){
var inst_34533 = cljs.core.async.close_BANG_(jobs);
var state_34553__$1 = state_34553;
var statearr_34569_36919 = state_34553__$1;
(statearr_34569_36919[(2)] = inst_34533);

(statearr_34569_36919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (8))){
var inst_34535 = (state_34553[(8)]);
var inst_34540 = (state_34553[(2)]);
var state_34553__$1 = (function (){var statearr_34570 = state_34553;
(statearr_34570[(10)] = inst_34540);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34553__$1,(9),results,inst_34535);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34553){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34553);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34572){if((e34572 instanceof Object)){
var ex__34210__auto__ = e34572;
var statearr_34573_36922 = state_34553;
(statearr_34573_36922[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36923 = state_34553;
state_34553 = G__36923;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34574 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34574[(6)] = c__34274__auto___36910);

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
var statearr_34614_36925 = state_34612__$1;
(statearr_34614_36925[(2)] = inst_34608);

(statearr_34614_36925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36927 = state_34612__$1;
(statearr_34615_36927[(2)] = null);

(statearr_34615_36927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36928 = state_34612__$1;
(statearr_34616_36928[(2)] = null);

(statearr_34616_36928[(1)] = (2));


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
var statearr_34618_36929 = state_34612__$1;
(statearr_34618_36929[(1)] = (5));

} else {
var statearr_34619_36930 = state_34612__$1;
(statearr_34619_36930[(1)] = (6));

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
var statearr_34620_36932 = state_34612__$1;
(statearr_34620_36932[(2)] = inst_34603);

(statearr_34620_36932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36933 = state_34612__$1;
(statearr_34622_36933[(2)] = null);

(statearr_34622_36933[(1)] = (2));


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
var statearr_34623_36935 = state_34612__$1;
(statearr_34623_36935[(1)] = (19));

} else {
var statearr_34624_36936 = state_34612__$1;
(statearr_34624_36936[(1)] = (20));

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
var statearr_34625_36938 = state_34612__$1;
(statearr_34625_36938[(2)] = null);

(statearr_34625_36938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36940 = state_34612__$1;
(statearr_34627_36940[(2)] = null);

(statearr_34627_36940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36941 = state_34612__$1;
(statearr_34628_36941[(2)] = null);

(statearr_34628_36941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36942 = state_34612__$1;
(statearr_34629_36942[(1)] = (8));

} else {
var statearr_34630_36943 = state_34612__$1;
(statearr_34630_36943[(1)] = (9));

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
var statearr_34632_36945 = state_34612__$1;
(statearr_34632_36945[(1)] = (15));

} else {
var statearr_34633_36946 = state_34612__$1;
(statearr_34633_36946[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36947 = state_34612__$1;
(statearr_34634_36947[(2)] = false);

(statearr_34634_36947[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36949 = state_34612__$1;
(statearr_34635_36949[(2)] = inst_34584);

(statearr_34635_36949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36950 = state_34612__$1;
(statearr_34636_36950[(2)] = inst_34595);

(statearr_34636_36950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36952 = state_34612__$1;
(statearr_34637_36952[(2)] = inst_34581);

(statearr_34637_36952[(1)] = (10));


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
var statearr_34640_36954 = state_34612;
(statearr_34640_36954[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36955 = state_34612;
state_34612 = G__36955;
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
var c__34274__auto___36964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34678_36966 = state_34673__$1;
(statearr_34678_36966[(2)] = inst_34669);

(statearr_34678_36966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34679_36967 = state_34673__$1;
(statearr_34679_36967[(2)] = null);

(statearr_34679_36967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (4))){
var inst_34650 = (state_34673[(7)]);
var inst_34650__$1 = (state_34673[(2)]);
var inst_34651 = (inst_34650__$1 == null);
var state_34673__$1 = (function (){var statearr_34680 = state_34673;
(statearr_34680[(7)] = inst_34650__$1);

return statearr_34680;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34681_36969 = state_34673__$1;
(statearr_34681_36969[(1)] = (5));

} else {
var statearr_34682_36970 = state_34673__$1;
(statearr_34682_36970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34686_36971 = state_34673__$1;
(statearr_34686_36971[(2)] = null);

(statearr_34686_36971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34687_36973 = state_34673__$1;
(statearr_34687_36973[(1)] = (9));

} else {
var statearr_34688_36974 = state_34673__$1;
(statearr_34688_36974[(1)] = (10));

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
var statearr_34691_36975 = state_34673__$1;
(statearr_34691_36975[(2)] = null);

(statearr_34691_36975[(1)] = (2));


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
var statearr_34693_36977 = state_34673__$1;
(statearr_34693_36977[(2)] = tc);

(statearr_34693_36977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34694 = state_34673;
(statearr_34694[(8)] = inst_34653);

return statearr_34694;
})();
var statearr_34695_36979 = state_34673__$1;
(statearr_34695_36979[(2)] = inst_34654);

(statearr_34695_36979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34696_36980 = state_34673__$1;
(statearr_34696_36980[(2)] = inst_34667);

(statearr_34696_36980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34699_36982 = state_34673__$1;
(statearr_34699_36982[(2)] = fc);

(statearr_34699_36982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34700_36983 = state_34673__$1;
(statearr_34700_36983[(1)] = (12));

} else {
var statearr_34701_36984 = state_34673__$1;
(statearr_34701_36984[(1)] = (13));

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
var statearr_34702 = [null,null,null,null,null,null,null,null,null];
(statearr_34702[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34702[(1)] = (1));

return statearr_34702;
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
}catch (e34703){if((e34703 instanceof Object)){
var ex__34210__auto__ = e34703;
var statearr_34704_36986 = state_34673;
(statearr_34704_36986[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36987 = state_34673;
state_34673 = G__36987;
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
var state__34276__auto__ = (function (){var statearr_34706 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34706[(6)] = c__34274__auto___36964);

return statearr_34706;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34730){
var state_val_34731 = (state_34730[(1)]);
if((state_val_34731 === (7))){
var inst_34725 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34735_36990 = state_34730__$1;
(statearr_34735_36990[(2)] = inst_34725);

(statearr_34735_36990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (1))){
var inst_34708 = init;
var state_34730__$1 = (function (){var statearr_34736 = state_34730;
(statearr_34736[(7)] = inst_34708);

return statearr_34736;
})();
var statearr_34737_36991 = state_34730__$1;
(statearr_34737_36991[(2)] = null);

(statearr_34737_36991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (4))){
var inst_34711 = (state_34730[(8)]);
var inst_34711__$1 = (state_34730[(2)]);
var inst_34712 = (inst_34711__$1 == null);
var state_34730__$1 = (function (){var statearr_34738 = state_34730;
(statearr_34738[(8)] = inst_34711__$1);

return statearr_34738;
})();
if(cljs.core.truth_(inst_34712)){
var statearr_34739_36993 = state_34730__$1;
(statearr_34739_36993[(1)] = (5));

} else {
var statearr_34740_36994 = state_34730__$1;
(statearr_34740_36994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (6))){
var inst_34711 = (state_34730[(8)]);
var inst_34708 = (state_34730[(7)]);
var inst_34715 = (state_34730[(9)]);
var inst_34715__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34708,inst_34711) : f.call(null,inst_34708,inst_34711));
var inst_34716 = cljs.core.reduced_QMARK_(inst_34715__$1);
var state_34730__$1 = (function (){var statearr_34741 = state_34730;
(statearr_34741[(9)] = inst_34715__$1);

return statearr_34741;
})();
if(inst_34716){
var statearr_34742_36996 = state_34730__$1;
(statearr_34742_36996[(1)] = (8));

} else {
var statearr_34744_36997 = state_34730__$1;
(statearr_34744_36997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (3))){
var inst_34727 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34730__$1,inst_34727);
} else {
if((state_val_34731 === (2))){
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34730__$1,(4),ch);
} else {
if((state_val_34731 === (9))){
var inst_34715 = (state_34730[(9)]);
var inst_34708 = inst_34715;
var state_34730__$1 = (function (){var statearr_34745 = state_34730;
(statearr_34745[(7)] = inst_34708);

return statearr_34745;
})();
var statearr_34746_36999 = state_34730__$1;
(statearr_34746_36999[(2)] = null);

(statearr_34746_36999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (5))){
var inst_34708 = (state_34730[(7)]);
var state_34730__$1 = state_34730;
var statearr_34747_37000 = state_34730__$1;
(statearr_34747_37000[(2)] = inst_34708);

(statearr_34747_37000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (10))){
var inst_34723 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34748_37002 = state_34730__$1;
(statearr_34748_37002[(2)] = inst_34723);

(statearr_34748_37002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (8))){
var inst_34715 = (state_34730[(9)]);
var inst_34719 = cljs.core.deref(inst_34715);
var state_34730__$1 = state_34730;
var statearr_34749_37003 = state_34730__$1;
(statearr_34749_37003[(2)] = inst_34719);

(statearr_34749_37003[(1)] = (10));


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
var statearr_34753 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34753[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34753[(1)] = (1));

return statearr_34753;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34730){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34730);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34754){if((e34754 instanceof Object)){
var ex__34210__auto__ = e34754;
var statearr_34755_37005 = state_34730;
(statearr_34755_37005[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37007 = state_34730;
state_34730 = G__37007;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34730){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34756 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34756[(6)] = c__34274__auto__);

return statearr_34756;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34765){
var state_val_34766 = (state_34765[(1)]);
if((state_val_34766 === (1))){
var inst_34760 = cljs.core.async.reduce(f__$1,init,ch);
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34765__$1,(2),inst_34760);
} else {
if((state_val_34766 === (2))){
var inst_34762 = (state_34765[(2)]);
var inst_34763 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34762) : f__$1.call(null,inst_34762));
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34765__$1,inst_34763);
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
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34765){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34765);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34771){if((e34771 instanceof Object)){
var ex__34210__auto__ = e34771;
var statearr_34772_37010 = state_34765;
(statearr_34772_37010[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37012 = state_34765;
state_34765 = G__37012;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34765){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34765);
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
var statearr_34802_37016 = state_34800__$1;
(statearr_34802_37016[(2)] = inst_34782);

(statearr_34802_37016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34777);

return statearr_34803;
})();
var statearr_34804_37017 = state_34800__$1;
(statearr_34804_37017[(2)] = null);

(statearr_34804_37017[(1)] = (2));


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
var statearr_34805_37019 = state_34800__$1;
(statearr_34805_37019[(2)] = inst_34794);

(statearr_34805_37019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34806_37020 = state_34800__$1;
(statearr_34806_37020[(1)] = (8));

} else {
var statearr_34807_37021 = state_34800__$1;
(statearr_34807_37021[(1)] = (9));

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
var statearr_34811_37023 = state_34800__$1;
(statearr_34811_37023[(2)] = null);

(statearr_34811_37023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34812_37024 = state_34800__$1;
(statearr_34812_37024[(1)] = (4));

} else {
var statearr_34816_37025 = state_34800__$1;
(statearr_34816_37025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34817_37026 = state_34800__$1;
(statearr_34817_37026[(2)] = inst_34791);

(statearr_34817_37026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34819_37027 = state_34800__$1;
(statearr_34819_37027[(1)] = (11));

} else {
var statearr_34820_37028 = state_34800__$1;
(statearr_34820_37028[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34821_37030 = state_34800__$1;
(statearr_34821_37030[(2)] = inst_34777);

(statearr_34821_37030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34822_37037 = state_34800__$1;
(statearr_34822_37037[(2)] = inst_34796);

(statearr_34822_37037[(1)] = (3));


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
var statearr_34824_37038 = state_34800__$1;
(statearr_34824_37038[(2)] = null);

(statearr_34824_37038[(1)] = (2));


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
}catch (e34827){if((e34827 instanceof Object)){
var ex__34210__auto__ = e34827;
var statearr_34828_37040 = state_34800;
(statearr_34828_37040[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37041 = state_34800;
state_34800 = G__37041;
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
var state__34276__auto__ = (function (){var statearr_34831 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34831[(6)] = c__34274__auto__);

return statearr_34831;
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
var c__34274__auto___37059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34984){
var state_val_34990 = (state_34984[(1)]);
if((state_val_34990 === (7))){
var inst_34980 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_34992_37060 = state_34984__$1;
(statearr_34992_37060[(2)] = inst_34980);

(statearr_34992_37060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (20))){
var inst_34877 = (state_34984[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34984__$1 = (function (){var statearr_34993 = state_34984;
(statearr_34993[(8)] = inst_34890);

return statearr_34993;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34994_37062 = state_34984__$1;
(statearr_34994_37062[(1)] = (22));

} else {
var statearr_34995_37065 = state_34984__$1;
(statearr_34995_37065[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (27))){
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
var statearr_34998_37069 = state_34984__$1;
(statearr_34998_37069[(1)] = (30));

} else {
var statearr_35000_37071 = state_34984__$1;
(statearr_35000_37071[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (1))){
var state_34984__$1 = state_34984;
var statearr_35002_37074 = state_34984__$1;
(statearr_35002_37074[(2)] = null);

(statearr_35002_37074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (24))){
var inst_34877 = (state_34984[(7)]);
var inst_34896 = (state_34984[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35011 = state_34984;
(statearr_35011[(13)] = inst_34857);

(statearr_35011[(14)] = inst_34856);

(statearr_35011[(15)] = inst_34858);

(statearr_35011[(16)] = inst_34896);

(statearr_35011[(17)] = inst_34855);

return statearr_35011;
})();
var statearr_35013_37079 = state_34984__$1;
(statearr_35013_37079[(2)] = null);

(statearr_35013_37079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (39))){
var state_34984__$1 = state_34984;
var statearr_35017_37080 = state_34984__$1;
(statearr_35017_37080[(2)] = null);

(statearr_35017_37080[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (4))){
var inst_34846 = (state_34984[(9)]);
var inst_34846__$1 = (state_34984[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34984__$1 = (function (){var statearr_35021 = state_34984;
(statearr_35021[(9)] = inst_34846__$1);

return statearr_35021;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35023_37086 = state_34984__$1;
(statearr_35023_37086[(1)] = (5));

} else {
var statearr_35024_37088 = state_34984__$1;
(statearr_35024_37088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (15))){
var inst_34857 = (state_34984[(13)]);
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34855 = (state_34984[(17)]);
var inst_34873 = (state_34984[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35014 = inst_34857;
var tmp35015 = inst_34856;
var tmp35016 = inst_34855;
var inst_34855__$1 = tmp35016;
var inst_34856__$1 = tmp35015;
var inst_34857__$1 = tmp35014;
var inst_34858__$1 = inst_34874;
var state_34984__$1 = (function (){var statearr_35039 = state_34984;
(statearr_35039[(18)] = inst_34873);

(statearr_35039[(13)] = inst_34857__$1);

(statearr_35039[(14)] = inst_34856__$1);

(statearr_35039[(15)] = inst_34858__$1);

(statearr_35039[(17)] = inst_34855__$1);

return statearr_35039;
})();
var statearr_35041_37096 = state_34984__$1;
(statearr_35041_37096[(2)] = null);

(statearr_35041_37096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (21))){
var inst_34900 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35049_37098 = state_34984__$1;
(statearr_35049_37098[(2)] = inst_34900);

(statearr_35049_37098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (31))){
var inst_34926 = (state_34984[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34984__$1 = (function (){var statearr_35051 = state_34984;
(statearr_35051[(19)] = inst_34930);

return statearr_35051;
})();
var statearr_35052_37102 = state_34984__$1;
(statearr_35052_37102[(2)] = inst_34931);

(statearr_35052_37102[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (32))){
var inst_34918 = (state_34984[(20)]);
var inst_34919 = (state_34984[(11)]);
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34933 = (state_34984[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35042 = inst_34918;
var tmp35043 = inst_34919;
var tmp35044 = inst_34920;
var inst_34918__$1 = tmp35042;
var inst_34919__$1 = tmp35043;
var inst_34920__$1 = tmp35044;
var inst_34921__$1 = inst_34934;
var state_34984__$1 = (function (){var statearr_35066 = state_34984;
(statearr_35066[(20)] = inst_34918__$1);

(statearr_35066[(22)] = inst_34933);

(statearr_35066[(11)] = inst_34919__$1);

(statearr_35066[(21)] = inst_34920__$1);

(statearr_35066[(12)] = inst_34921__$1);

return statearr_35066;
})();
var statearr_35074_37112 = state_34984__$1;
(statearr_35074_37112[(2)] = null);

(statearr_35074_37112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (40))){
var inst_34948 = (state_34984[(23)]);
var inst_34953 = done(null);
var inst_34954 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34948);
var state_34984__$1 = (function (){var statearr_35090 = state_34984;
(statearr_35090[(24)] = inst_34953);

return statearr_35090;
})();
var statearr_35093_37114 = state_34984__$1;
(statearr_35093_37114[(2)] = inst_34954);

(statearr_35093_37114[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (33))){
var inst_34937 = (state_34984[(25)]);
var inst_34941 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34984__$1 = state_34984;
if(inst_34941){
var statearr_35099_37119 = state_34984__$1;
(statearr_35099_37119[(1)] = (36));

} else {
var statearr_35102_37121 = state_34984__$1;
(statearr_35102_37121[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (13))){
var inst_34867 = (state_34984[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34984__$1 = state_34984;
var statearr_35109_37126 = state_34984__$1;
(statearr_35109_37126[(2)] = inst_34870);

(statearr_35109_37126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (22))){
var inst_34890 = (state_34984[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34984__$1 = state_34984;
var statearr_35115_37130 = state_34984__$1;
(statearr_35115_37130[(2)] = inst_34893);

(statearr_35115_37130[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (36))){
var inst_34937 = (state_34984[(25)]);
var inst_34943 = cljs.core.chunk_first(inst_34937);
var inst_34944 = cljs.core.chunk_rest(inst_34937);
var inst_34945 = cljs.core.count(inst_34943);
var inst_34918 = inst_34944;
var inst_34919 = inst_34943;
var inst_34920 = inst_34945;
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35123 = state_34984;
(statearr_35123[(20)] = inst_34918);

(statearr_35123[(11)] = inst_34919);

(statearr_35123[(21)] = inst_34920);

(statearr_35123[(12)] = inst_34921);

return statearr_35123;
})();
var statearr_35126_37133 = state_34984__$1;
(statearr_35126_37133[(2)] = null);

(statearr_35126_37133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (41))){
var inst_34937 = (state_34984[(25)]);
var inst_34956 = (state_34984[(2)]);
var inst_34958 = cljs.core.next(inst_34937);
var inst_34918 = inst_34958;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35134 = state_34984;
(statearr_35134[(20)] = inst_34918);

(statearr_35134[(27)] = inst_34956);

(statearr_35134[(11)] = inst_34919);

(statearr_35134[(21)] = inst_34920);

(statearr_35134[(12)] = inst_34921);

return statearr_35134;
})();
var statearr_35139_37137 = state_34984__$1;
(statearr_35139_37137[(2)] = null);

(statearr_35139_37137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (43))){
var state_34984__$1 = state_34984;
var statearr_35142_37138 = state_34984__$1;
(statearr_35142_37138[(2)] = null);

(statearr_35142_37138[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (29))){
var inst_34966 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35143_37139 = state_34984__$1;
(statearr_35143_37139[(2)] = inst_34966);

(statearr_35143_37139[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (44))){
var inst_34977 = (state_34984[(2)]);
var state_34984__$1 = (function (){var statearr_35144 = state_34984;
(statearr_35144[(28)] = inst_34977);

return statearr_35144;
})();
var statearr_35145_37144 = state_34984__$1;
(statearr_35145_37144[(2)] = null);

(statearr_35145_37144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (6))){
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
var state_34984__$1 = (function (){var statearr_35148 = state_34984;
(statearr_35148[(20)] = inst_34918);

(statearr_35148[(29)] = inst_34910__$1);

(statearr_35148[(11)] = inst_34919);

(statearr_35148[(21)] = inst_34920);

(statearr_35148[(12)] = inst_34921);

(statearr_35148[(30)] = inst_34912);

return statearr_35148;
})();
var statearr_35149_37151 = state_34984__$1;
(statearr_35149_37151[(2)] = null);

(statearr_35149_37151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (28))){
var inst_34918 = (state_34984[(20)]);
var inst_34937 = (state_34984[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34984__$1 = (function (){var statearr_35150 = state_34984;
(statearr_35150[(25)] = inst_34937__$1);

return statearr_35150;
})();
if(inst_34937__$1){
var statearr_35153_37158 = state_34984__$1;
(statearr_35153_37158[(1)] = (33));

} else {
var statearr_35154_37159 = state_34984__$1;
(statearr_35154_37159[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (25))){
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34924)){
var statearr_35175_37160 = state_34984__$1;
(statearr_35175_37160[(1)] = (27));

} else {
var statearr_35178_37163 = state_34984__$1;
(statearr_35178_37163[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (34))){
var state_34984__$1 = state_34984;
var statearr_35184_37164 = state_34984__$1;
(statearr_35184_37164[(2)] = null);

(statearr_35184_37164[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (17))){
var state_34984__$1 = state_34984;
var statearr_35185_37165 = state_34984__$1;
(statearr_35185_37165[(2)] = null);

(statearr_35185_37165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (3))){
var inst_34982 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34984__$1,inst_34982);
} else {
if((state_val_34990 === (12))){
var inst_34905 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35188_37167 = state_34984__$1;
(statearr_35188_37167[(2)] = inst_34905);

(statearr_35188_37167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (2))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(4),ch);
} else {
if((state_val_34990 === (23))){
var state_34984__$1 = state_34984;
var statearr_35196_37171 = state_34984__$1;
(statearr_35196_37171[(2)] = null);

(statearr_35196_37171[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (35))){
var inst_34964 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35202_37172 = state_34984__$1;
(statearr_35202_37172[(2)] = inst_34964);

(statearr_35202_37172[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (19))){
var inst_34877 = (state_34984[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35216 = state_34984;
(statearr_35216[(13)] = inst_34857);

(statearr_35216[(14)] = inst_34856);

(statearr_35216[(15)] = inst_34858);

(statearr_35216[(17)] = inst_34855);

return statearr_35216;
})();
var statearr_35218_37177 = state_34984__$1;
(statearr_35218_37177[(2)] = null);

(statearr_35218_37177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (11))){
var inst_34855 = (state_34984[(17)]);
var inst_34877 = (state_34984[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34984__$1 = (function (){var statearr_35224 = state_34984;
(statearr_35224[(7)] = inst_34877__$1);

return statearr_35224;
})();
if(inst_34877__$1){
var statearr_35227_37180 = state_34984__$1;
(statearr_35227_37180[(1)] = (16));

} else {
var statearr_35228_37184 = state_34984__$1;
(statearr_35228_37184[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (9))){
var inst_34907 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35233_37187 = state_34984__$1;
(statearr_35233_37187[(2)] = inst_34907);

(statearr_35233_37187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35240 = state_34984;
(statearr_35240[(13)] = inst_34857);

(statearr_35240[(14)] = inst_34856);

(statearr_35240[(15)] = inst_34858);

(statearr_35240[(17)] = inst_34855);

return statearr_35240;
})();
var statearr_35243_37189 = state_34984__$1;
(statearr_35243_37189[(2)] = null);

(statearr_35243_37189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (14))){
var state_34984__$1 = state_34984;
var statearr_35248_37190 = state_34984__$1;
(statearr_35248_37190[(2)] = null);

(statearr_35248_37190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (45))){
var inst_34974 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35253_37193 = state_34984__$1;
(statearr_35253_37193[(2)] = inst_34974);

(statearr_35253_37193[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (26))){
var inst_34910 = (state_34984[(29)]);
var inst_34968 = (state_34984[(2)]);
var inst_34971 = cljs.core.seq(inst_34910);
var state_34984__$1 = (function (){var statearr_35259 = state_34984;
(statearr_35259[(31)] = inst_34968);

return statearr_35259;
})();
if(inst_34971){
var statearr_35262_37195 = state_34984__$1;
(statearr_35262_37195[(1)] = (42));

} else {
var statearr_35265_37196 = state_34984__$1;
(statearr_35265_37196[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (16))){
var inst_34877 = (state_34984[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34984__$1 = state_34984;
if(inst_34879){
var statearr_35270_37200 = state_34984__$1;
(statearr_35270_37200[(1)] = (19));

} else {
var statearr_35273_37201 = state_34984__$1;
(statearr_35273_37201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (38))){
var inst_34961 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35277_37206 = state_34984__$1;
(statearr_35277_37206[(2)] = inst_34961);

(statearr_35277_37206[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (30))){
var state_34984__$1 = state_34984;
var statearr_35281_37207 = state_34984__$1;
(statearr_35281_37207[(2)] = null);

(statearr_35281_37207[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (10))){
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34984__$1 = (function (){var statearr_35288 = state_34984;
(statearr_35288[(26)] = inst_34867);

return statearr_35288;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35291_37210 = state_34984__$1;
(statearr_35291_37210[(1)] = (13));

} else {
var statearr_35294_37211 = state_34984__$1;
(statearr_35294_37211[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (18))){
var inst_34903 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35299_37212 = state_34984__$1;
(statearr_35299_37212[(2)] = inst_34903);

(statearr_35299_37212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (42))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(45),dchan);
} else {
if((state_val_34990 === (37))){
var inst_34846 = (state_34984[(9)]);
var inst_34937 = (state_34984[(25)]);
var inst_34948 = (state_34984[(23)]);
var inst_34948__$1 = cljs.core.first(inst_34937);
var inst_34950 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34948__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_35307 = state_34984;
(statearr_35307[(23)] = inst_34948__$1);

return statearr_35307;
})();
if(cljs.core.truth_(inst_34950)){
var statearr_35309_37215 = state_34984__$1;
(statearr_35309_37215[(1)] = (39));

} else {
var statearr_35313_37216 = state_34984__$1;
(statearr_35313_37216[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (8))){
var inst_34857 = (state_34984[(13)]);
var inst_34858 = (state_34984[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34861)){
var statearr_35317_37218 = state_34984__$1;
(statearr_35317_37218[(1)] = (10));

} else {
var statearr_35321_37221 = state_34984__$1;
(statearr_35321_37221[(1)] = (11));

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
var statearr_35331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35331[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35331[(1)] = (1));

return statearr_35331;
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
}catch (e35336){if((e35336 instanceof Object)){
var ex__34210__auto__ = e35336;
var statearr_35342_37230 = state_34984;
(statearr_35342_37230[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37231 = state_34984;
state_34984 = G__37231;
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
var state__34276__auto__ = (function (){var statearr_35350 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35350[(6)] = c__34274__auto___37059);

return statearr_35350;
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
var G__35358 = arguments.length;
switch (G__35358) {
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
var len__4789__auto___37264 = arguments.length;
var i__4790__auto___37265 = (0);
while(true){
if((i__4790__auto___37265 < len__4789__auto___37264)){
args__4795__auto__.push((arguments[i__4790__auto___37265]));

var G__37268 = (i__4790__auto___37265 + (1));
i__4790__auto___37265 = G__37268;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35419){
var map__35420 = p__35419;
var map__35420__$1 = (((((!((map__35420 == null))))?(((((map__35420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35420):map__35420);
var opts = map__35420__$1;
var statearr_35422_37273 = state;
(statearr_35422_37273[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35425_37276 = state;
(statearr_35425_37276[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35428_37279 = state;
(statearr_35428_37279[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35403){
var G__35404 = cljs.core.first(seq35403);
var seq35403__$1 = cljs.core.next(seq35403);
var G__35405 = cljs.core.first(seq35403__$1);
var seq35403__$2 = cljs.core.next(seq35403__$1);
var G__35406 = cljs.core.first(seq35403__$2);
var seq35403__$3 = cljs.core.next(seq35403__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35404,G__35405,G__35406,seq35403__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35476 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35477){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35477 = meta35477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35478,meta35477__$1){
var self__ = this;
var _35478__$1 = this;
return (new cljs.core.async.t_cljs$core$async35476(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35477__$1));
}));

(cljs.core.async.t_cljs$core$async35476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35478){
var self__ = this;
var _35478__$1 = this;
return self__.meta35477;
}));

(cljs.core.async.t_cljs$core$async35476.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35476.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35476.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35476.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35476.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35476.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35476.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35477","meta35477",276099288,null)], null);
}));

(cljs.core.async.t_cljs$core$async35476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35476");

(cljs.core.async.t_cljs$core$async35476.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35476.
 */
cljs.core.async.__GT_t_cljs$core$async35476 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35476(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35477){
return (new cljs.core.async.t_cljs$core$async35476(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35477));
});

}

return (new cljs.core.async.t_cljs$core$async35476(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35673){
var state_val_35674 = (state_35673[(1)]);
if((state_val_35674 === (7))){
var inst_35574 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35677_37311 = state_35673__$1;
(statearr_35677_37311[(2)] = inst_35574);

(statearr_35677_37311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (20))){
var inst_35588 = (state_35673[(7)]);
var state_35673__$1 = state_35673;
var statearr_35678_37313 = state_35673__$1;
(statearr_35678_37313[(2)] = inst_35588);

(statearr_35678_37313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (27))){
var state_35673__$1 = state_35673;
var statearr_35679_37317 = state_35673__$1;
(statearr_35679_37317[(2)] = null);

(statearr_35679_37317[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (1))){
var inst_35557 = (state_35673[(8)]);
var inst_35557__$1 = calc_state();
var inst_35560 = (inst_35557__$1 == null);
var inst_35561 = cljs.core.not(inst_35560);
var state_35673__$1 = (function (){var statearr_35682 = state_35673;
(statearr_35682[(8)] = inst_35557__$1);

return statearr_35682;
})();
if(inst_35561){
var statearr_35683_37321 = state_35673__$1;
(statearr_35683_37321[(1)] = (2));

} else {
var statearr_35684_37323 = state_35673__$1;
(statearr_35684_37323[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (24))){
var inst_35647 = (state_35673[(9)]);
var inst_35618 = (state_35673[(10)]);
var inst_35633 = (state_35673[(11)]);
var inst_35647__$1 = (inst_35618.cljs$core$IFn$_invoke$arity$1 ? inst_35618.cljs$core$IFn$_invoke$arity$1(inst_35633) : inst_35618.call(null,inst_35633));
var state_35673__$1 = (function (){var statearr_35685 = state_35673;
(statearr_35685[(9)] = inst_35647__$1);

return statearr_35685;
})();
if(cljs.core.truth_(inst_35647__$1)){
var statearr_35686_37328 = state_35673__$1;
(statearr_35686_37328[(1)] = (29));

} else {
var statearr_35687_37329 = state_35673__$1;
(statearr_35687_37329[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (4))){
var inst_35577 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35577)){
var statearr_35690_37331 = state_35673__$1;
(statearr_35690_37331[(1)] = (8));

} else {
var statearr_35691_37334 = state_35673__$1;
(statearr_35691_37334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (15))){
var inst_35612 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35612)){
var statearr_35694_37336 = state_35673__$1;
(statearr_35694_37336[(1)] = (19));

} else {
var statearr_35695_37337 = state_35673__$1;
(statearr_35695_37337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (21))){
var inst_35617 = (state_35673[(12)]);
var inst_35617__$1 = (state_35673[(2)]);
var inst_35618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35617__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35617__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35617__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35673__$1 = (function (){var statearr_35699 = state_35673;
(statearr_35699[(12)] = inst_35617__$1);

(statearr_35699[(10)] = inst_35618);

(statearr_35699[(13)] = inst_35620);

return statearr_35699;
})();
return cljs.core.async.ioc_alts_BANG_(state_35673__$1,(22),inst_35621);
} else {
if((state_val_35674 === (31))){
var inst_35655 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35655)){
var statearr_35701_37346 = state_35673__$1;
(statearr_35701_37346[(1)] = (32));

} else {
var statearr_35702_37347 = state_35673__$1;
(statearr_35702_37347[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (32))){
var inst_35632 = (state_35673[(14)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35673__$1,(35),out,inst_35632);
} else {
if((state_val_35674 === (33))){
var inst_35617 = (state_35673[(12)]);
var inst_35588 = inst_35617;
var state_35673__$1 = (function (){var statearr_35703 = state_35673;
(statearr_35703[(7)] = inst_35588);

return statearr_35703;
})();
var statearr_35704_37352 = state_35673__$1;
(statearr_35704_37352[(2)] = null);

(statearr_35704_37352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (13))){
var inst_35588 = (state_35673[(7)]);
var inst_35600 = inst_35588.cljs$lang$protocol_mask$partition0$;
var inst_35601 = (inst_35600 & (64));
var inst_35603 = inst_35588.cljs$core$ISeq$;
var inst_35604 = (cljs.core.PROTOCOL_SENTINEL === inst_35603);
var inst_35605 = ((inst_35601) || (inst_35604));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35605)){
var statearr_35708_37357 = state_35673__$1;
(statearr_35708_37357[(1)] = (16));

} else {
var statearr_35710_37358 = state_35673__$1;
(statearr_35710_37358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (22))){
var inst_35633 = (state_35673[(11)]);
var inst_35632 = (state_35673[(14)]);
var inst_35630 = (state_35673[(2)]);
var inst_35632__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35630,(0),null);
var inst_35633__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35630,(1),null);
var inst_35634 = (inst_35632__$1 == null);
var inst_35635 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35633__$1,change);
var inst_35636 = ((inst_35634) || (inst_35635));
var state_35673__$1 = (function (){var statearr_35713 = state_35673;
(statearr_35713[(11)] = inst_35633__$1);

(statearr_35713[(14)] = inst_35632__$1);

return statearr_35713;
})();
if(cljs.core.truth_(inst_35636)){
var statearr_35715_37359 = state_35673__$1;
(statearr_35715_37359[(1)] = (23));

} else {
var statearr_35717_37360 = state_35673__$1;
(statearr_35717_37360[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (36))){
var inst_35617 = (state_35673[(12)]);
var inst_35588 = inst_35617;
var state_35673__$1 = (function (){var statearr_35719 = state_35673;
(statearr_35719[(7)] = inst_35588);

return statearr_35719;
})();
var statearr_35720_37363 = state_35673__$1;
(statearr_35720_37363[(2)] = null);

(statearr_35720_37363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (29))){
var inst_35647 = (state_35673[(9)]);
var state_35673__$1 = state_35673;
var statearr_35722_37365 = state_35673__$1;
(statearr_35722_37365[(2)] = inst_35647);

(statearr_35722_37365[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (6))){
var state_35673__$1 = state_35673;
var statearr_35723_37367 = state_35673__$1;
(statearr_35723_37367[(2)] = false);

(statearr_35723_37367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (28))){
var inst_35643 = (state_35673[(2)]);
var inst_35644 = calc_state();
var inst_35588 = inst_35644;
var state_35673__$1 = (function (){var statearr_35724 = state_35673;
(statearr_35724[(7)] = inst_35588);

(statearr_35724[(15)] = inst_35643);

return statearr_35724;
})();
var statearr_35726_37370 = state_35673__$1;
(statearr_35726_37370[(2)] = null);

(statearr_35726_37370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (25))){
var inst_35669 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35727_37371 = state_35673__$1;
(statearr_35727_37371[(2)] = inst_35669);

(statearr_35727_37371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (34))){
var inst_35667 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35728_37372 = state_35673__$1;
(statearr_35728_37372[(2)] = inst_35667);

(statearr_35728_37372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (17))){
var state_35673__$1 = state_35673;
var statearr_35729_37373 = state_35673__$1;
(statearr_35729_37373[(2)] = false);

(statearr_35729_37373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (3))){
var state_35673__$1 = state_35673;
var statearr_35730_37375 = state_35673__$1;
(statearr_35730_37375[(2)] = false);

(statearr_35730_37375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (12))){
var inst_35671 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35673__$1,inst_35671);
} else {
if((state_val_35674 === (2))){
var inst_35557 = (state_35673[(8)]);
var inst_35564 = inst_35557.cljs$lang$protocol_mask$partition0$;
var inst_35565 = (inst_35564 & (64));
var inst_35568 = inst_35557.cljs$core$ISeq$;
var inst_35569 = (cljs.core.PROTOCOL_SENTINEL === inst_35568);
var inst_35570 = ((inst_35565) || (inst_35569));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35570)){
var statearr_35732_37381 = state_35673__$1;
(statearr_35732_37381[(1)] = (5));

} else {
var statearr_35733_37384 = state_35673__$1;
(statearr_35733_37384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (23))){
var inst_35632 = (state_35673[(14)]);
var inst_35638 = (inst_35632 == null);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35638)){
var statearr_35735_37386 = state_35673__$1;
(statearr_35735_37386[(1)] = (26));

} else {
var statearr_35736_37387 = state_35673__$1;
(statearr_35736_37387[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (35))){
var inst_35658 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35658)){
var statearr_35738_37390 = state_35673__$1;
(statearr_35738_37390[(1)] = (36));

} else {
var statearr_35739_37393 = state_35673__$1;
(statearr_35739_37393[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (19))){
var inst_35588 = (state_35673[(7)]);
var inst_35614 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35588);
var state_35673__$1 = state_35673;
var statearr_35740_37394 = state_35673__$1;
(statearr_35740_37394[(2)] = inst_35614);

(statearr_35740_37394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (11))){
var inst_35588 = (state_35673[(7)]);
var inst_35594 = (inst_35588 == null);
var inst_35595 = cljs.core.not(inst_35594);
var state_35673__$1 = state_35673;
if(inst_35595){
var statearr_35742_37399 = state_35673__$1;
(statearr_35742_37399[(1)] = (13));

} else {
var statearr_35743_37401 = state_35673__$1;
(statearr_35743_37401[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (9))){
var inst_35557 = (state_35673[(8)]);
var state_35673__$1 = state_35673;
var statearr_35746_37404 = state_35673__$1;
(statearr_35746_37404[(2)] = inst_35557);

(statearr_35746_37404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (5))){
var state_35673__$1 = state_35673;
var statearr_35750_37410 = state_35673__$1;
(statearr_35750_37410[(2)] = true);

(statearr_35750_37410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (14))){
var state_35673__$1 = state_35673;
var statearr_35751_37412 = state_35673__$1;
(statearr_35751_37412[(2)] = false);

(statearr_35751_37412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (26))){
var inst_35633 = (state_35673[(11)]);
var inst_35640 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35633);
var state_35673__$1 = state_35673;
var statearr_35756_37413 = state_35673__$1;
(statearr_35756_37413[(2)] = inst_35640);

(statearr_35756_37413[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (16))){
var state_35673__$1 = state_35673;
var statearr_35757_37416 = state_35673__$1;
(statearr_35757_37416[(2)] = true);

(statearr_35757_37416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (38))){
var inst_35663 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35759_37419 = state_35673__$1;
(statearr_35759_37419[(2)] = inst_35663);

(statearr_35759_37419[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (30))){
var inst_35618 = (state_35673[(10)]);
var inst_35633 = (state_35673[(11)]);
var inst_35620 = (state_35673[(13)]);
var inst_35650 = cljs.core.empty_QMARK_(inst_35618);
var inst_35651 = (inst_35620.cljs$core$IFn$_invoke$arity$1 ? inst_35620.cljs$core$IFn$_invoke$arity$1(inst_35633) : inst_35620.call(null,inst_35633));
var inst_35652 = cljs.core.not(inst_35651);
var inst_35653 = ((inst_35650) && (inst_35652));
var state_35673__$1 = state_35673;
var statearr_35767_37425 = state_35673__$1;
(statearr_35767_37425[(2)] = inst_35653);

(statearr_35767_37425[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (10))){
var inst_35557 = (state_35673[(8)]);
var inst_35583 = (state_35673[(2)]);
var inst_35585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35583,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35583,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35583,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35588 = inst_35557;
var state_35673__$1 = (function (){var statearr_35776 = state_35673;
(statearr_35776[(16)] = inst_35586);

(statearr_35776[(17)] = inst_35585);

(statearr_35776[(7)] = inst_35588);

(statearr_35776[(18)] = inst_35587);

return statearr_35776;
})();
var statearr_35780_37431 = state_35673__$1;
(statearr_35780_37431[(2)] = null);

(statearr_35780_37431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (18))){
var inst_35609 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35781_37433 = state_35673__$1;
(statearr_35781_37433[(2)] = inst_35609);

(statearr_35781_37433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (37))){
var state_35673__$1 = state_35673;
var statearr_35782_37438 = state_35673__$1;
(statearr_35782_37438[(2)] = null);

(statearr_35782_37438[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (8))){
var inst_35557 = (state_35673[(8)]);
var inst_35580 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35557);
var state_35673__$1 = state_35673;
var statearr_35785_37443 = state_35673__$1;
(statearr_35785_37443[(2)] = inst_35580);

(statearr_35785_37443[(1)] = (10));


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
var statearr_35788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35788[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35788[(1)] = (1));

return statearr_35788;
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
}catch (e35789){if((e35789 instanceof Object)){
var ex__34210__auto__ = e35789;
var statearr_35790_37449 = state_35673;
(statearr_35790_37449[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35789;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37452 = state_35673;
state_35673 = G__37452;
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
var state__34276__auto__ = (function (){var statearr_35792 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35792[(6)] = c__34274__auto___37307);

return statearr_35792;
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
var G__35811 = arguments.length;
switch (G__35811) {
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
var G__35833 = arguments.length;
switch (G__35833) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35828_SHARP_){
if(cljs.core.truth_((p1__35828_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35828_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35828_SHARP_.call(null,topic)))){
return p1__35828_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35828_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35840 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35840 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35841){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35841 = meta35841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35842,meta35841__$1){
var self__ = this;
var _35842__$1 = this;
return (new cljs.core.async.t_cljs$core$async35840(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35841__$1));
}));

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35842){
var self__ = this;
var _35842__$1 = this;
return self__.meta35841;
}));

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35841","meta35841",1949056966,null)], null);
}));

(cljs.core.async.t_cljs$core$async35840.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35840");

(cljs.core.async.t_cljs$core$async35840.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35840");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35840.
 */
cljs.core.async.__GT_t_cljs$core$async35840 = (function cljs$core$async$__GT_t_cljs$core$async35840(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35841){
return (new cljs.core.async.t_cljs$core$async35840(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35841));
});

}

return (new cljs.core.async.t_cljs$core$async35840(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35940){
var state_val_35941 = (state_35940[(1)]);
if((state_val_35941 === (7))){
var inst_35936 = (state_35940[(2)]);
var state_35940__$1 = state_35940;
var statearr_35943_37500 = state_35940__$1;
(statearr_35943_37500[(2)] = inst_35936);

(statearr_35943_37500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (20))){
var state_35940__$1 = state_35940;
var statearr_35945_37501 = state_35940__$1;
(statearr_35945_37501[(2)] = null);

(statearr_35945_37501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (1))){
var state_35940__$1 = state_35940;
var statearr_35948_37505 = state_35940__$1;
(statearr_35948_37505[(2)] = null);

(statearr_35948_37505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (24))){
var inst_35917 = (state_35940[(7)]);
var inst_35926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35917);
var state_35940__$1 = state_35940;
var statearr_35950_37506 = state_35940__$1;
(statearr_35950_37506[(2)] = inst_35926);

(statearr_35950_37506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (4))){
var inst_35864 = (state_35940[(8)]);
var inst_35864__$1 = (state_35940[(2)]);
var inst_35865 = (inst_35864__$1 == null);
var state_35940__$1 = (function (){var statearr_35951 = state_35940;
(statearr_35951[(8)] = inst_35864__$1);

return statearr_35951;
})();
if(cljs.core.truth_(inst_35865)){
var statearr_35954_37509 = state_35940__$1;
(statearr_35954_37509[(1)] = (5));

} else {
var statearr_35955_37510 = state_35940__$1;
(statearr_35955_37510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (15))){
var inst_35911 = (state_35940[(2)]);
var state_35940__$1 = state_35940;
var statearr_35957_37513 = state_35940__$1;
(statearr_35957_37513[(2)] = inst_35911);

(statearr_35957_37513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (21))){
var inst_35932 = (state_35940[(2)]);
var state_35940__$1 = (function (){var statearr_35959 = state_35940;
(statearr_35959[(9)] = inst_35932);

return statearr_35959;
})();
var statearr_35961_37516 = state_35940__$1;
(statearr_35961_37516[(2)] = null);

(statearr_35961_37516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (13))){
var inst_35892 = (state_35940[(10)]);
var inst_35895 = cljs.core.chunked_seq_QMARK_(inst_35892);
var state_35940__$1 = state_35940;
if(inst_35895){
var statearr_35964_37518 = state_35940__$1;
(statearr_35964_37518[(1)] = (16));

} else {
var statearr_35965_37519 = state_35940__$1;
(statearr_35965_37519[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (22))){
var inst_35923 = (state_35940[(2)]);
var state_35940__$1 = state_35940;
if(cljs.core.truth_(inst_35923)){
var statearr_35967_37525 = state_35940__$1;
(statearr_35967_37525[(1)] = (23));

} else {
var statearr_35968_37526 = state_35940__$1;
(statearr_35968_37526[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (6))){
var inst_35917 = (state_35940[(7)]);
var inst_35919 = (state_35940[(11)]);
var inst_35864 = (state_35940[(8)]);
var inst_35917__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35864) : topic_fn.call(null,inst_35864));
var inst_35918 = cljs.core.deref(mults);
var inst_35919__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35918,inst_35917__$1);
var state_35940__$1 = (function (){var statearr_35974 = state_35940;
(statearr_35974[(7)] = inst_35917__$1);

(statearr_35974[(11)] = inst_35919__$1);

return statearr_35974;
})();
if(cljs.core.truth_(inst_35919__$1)){
var statearr_35975_37535 = state_35940__$1;
(statearr_35975_37535[(1)] = (19));

} else {
var statearr_35976_37536 = state_35940__$1;
(statearr_35976_37536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (25))){
var inst_35928 = (state_35940[(2)]);
var state_35940__$1 = state_35940;
var statearr_35978_37538 = state_35940__$1;
(statearr_35978_37538[(2)] = inst_35928);

(statearr_35978_37538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (17))){
var inst_35892 = (state_35940[(10)]);
var inst_35902 = cljs.core.first(inst_35892);
var inst_35903 = cljs.core.async.muxch_STAR_(inst_35902);
var inst_35904 = cljs.core.async.close_BANG_(inst_35903);
var inst_35905 = cljs.core.next(inst_35892);
var inst_35875 = inst_35905;
var inst_35876 = null;
var inst_35877 = (0);
var inst_35878 = (0);
var state_35940__$1 = (function (){var statearr_35981 = state_35940;
(statearr_35981[(12)] = inst_35876);

(statearr_35981[(13)] = inst_35875);

(statearr_35981[(14)] = inst_35877);

(statearr_35981[(15)] = inst_35878);

(statearr_35981[(16)] = inst_35904);

return statearr_35981;
})();
var statearr_35982_37546 = state_35940__$1;
(statearr_35982_37546[(2)] = null);

(statearr_35982_37546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (3))){
var inst_35938 = (state_35940[(2)]);
var state_35940__$1 = state_35940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35940__$1,inst_35938);
} else {
if((state_val_35941 === (12))){
var inst_35913 = (state_35940[(2)]);
var state_35940__$1 = state_35940;
var statearr_35983_37553 = state_35940__$1;
(statearr_35983_37553[(2)] = inst_35913);

(statearr_35983_37553[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (2))){
var state_35940__$1 = state_35940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35940__$1,(4),ch);
} else {
if((state_val_35941 === (23))){
var state_35940__$1 = state_35940;
var statearr_35986_37555 = state_35940__$1;
(statearr_35986_37555[(2)] = null);

(statearr_35986_37555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (19))){
var inst_35919 = (state_35940[(11)]);
var inst_35864 = (state_35940[(8)]);
var inst_35921 = cljs.core.async.muxch_STAR_(inst_35919);
var state_35940__$1 = state_35940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35940__$1,(22),inst_35921,inst_35864);
} else {
if((state_val_35941 === (11))){
var inst_35892 = (state_35940[(10)]);
var inst_35875 = (state_35940[(13)]);
var inst_35892__$1 = cljs.core.seq(inst_35875);
var state_35940__$1 = (function (){var statearr_35988 = state_35940;
(statearr_35988[(10)] = inst_35892__$1);

return statearr_35988;
})();
if(inst_35892__$1){
var statearr_35989_37561 = state_35940__$1;
(statearr_35989_37561[(1)] = (13));

} else {
var statearr_35992_37562 = state_35940__$1;
(statearr_35992_37562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (9))){
var inst_35915 = (state_35940[(2)]);
var state_35940__$1 = state_35940;
var statearr_35993_37568 = state_35940__$1;
(statearr_35993_37568[(2)] = inst_35915);

(statearr_35993_37568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (5))){
var inst_35872 = cljs.core.deref(mults);
var inst_35873 = cljs.core.vals(inst_35872);
var inst_35874 = cljs.core.seq(inst_35873);
var inst_35875 = inst_35874;
var inst_35876 = null;
var inst_35877 = (0);
var inst_35878 = (0);
var state_35940__$1 = (function (){var statearr_35995 = state_35940;
(statearr_35995[(12)] = inst_35876);

(statearr_35995[(13)] = inst_35875);

(statearr_35995[(14)] = inst_35877);

(statearr_35995[(15)] = inst_35878);

return statearr_35995;
})();
var statearr_35996_37573 = state_35940__$1;
(statearr_35996_37573[(2)] = null);

(statearr_35996_37573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (14))){
var state_35940__$1 = state_35940;
var statearr_36003_37574 = state_35940__$1;
(statearr_36003_37574[(2)] = null);

(statearr_36003_37574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (16))){
var inst_35892 = (state_35940[(10)]);
var inst_35897 = cljs.core.chunk_first(inst_35892);
var inst_35898 = cljs.core.chunk_rest(inst_35892);
var inst_35899 = cljs.core.count(inst_35897);
var inst_35875 = inst_35898;
var inst_35876 = inst_35897;
var inst_35877 = inst_35899;
var inst_35878 = (0);
var state_35940__$1 = (function (){var statearr_36004 = state_35940;
(statearr_36004[(12)] = inst_35876);

(statearr_36004[(13)] = inst_35875);

(statearr_36004[(14)] = inst_35877);

(statearr_36004[(15)] = inst_35878);

return statearr_36004;
})();
var statearr_36005_37582 = state_35940__$1;
(statearr_36005_37582[(2)] = null);

(statearr_36005_37582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (10))){
var inst_35876 = (state_35940[(12)]);
var inst_35875 = (state_35940[(13)]);
var inst_35877 = (state_35940[(14)]);
var inst_35878 = (state_35940[(15)]);
var inst_35884 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35876,inst_35878);
var inst_35885 = cljs.core.async.muxch_STAR_(inst_35884);
var inst_35886 = cljs.core.async.close_BANG_(inst_35885);
var inst_35888 = (inst_35878 + (1));
var tmp35998 = inst_35876;
var tmp35999 = inst_35875;
var tmp36000 = inst_35877;
var inst_35875__$1 = tmp35999;
var inst_35876__$1 = tmp35998;
var inst_35877__$1 = tmp36000;
var inst_35878__$1 = inst_35888;
var state_35940__$1 = (function (){var statearr_36010 = state_35940;
(statearr_36010[(12)] = inst_35876__$1);

(statearr_36010[(13)] = inst_35875__$1);

(statearr_36010[(17)] = inst_35886);

(statearr_36010[(14)] = inst_35877__$1);

(statearr_36010[(15)] = inst_35878__$1);

return statearr_36010;
})();
var statearr_36013_37591 = state_35940__$1;
(statearr_36013_37591[(2)] = null);

(statearr_36013_37591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (18))){
var inst_35908 = (state_35940[(2)]);
var state_35940__$1 = state_35940;
var statearr_36015_37593 = state_35940__$1;
(statearr_36015_37593[(2)] = inst_35908);

(statearr_36015_37593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35941 === (8))){
var inst_35877 = (state_35940[(14)]);
var inst_35878 = (state_35940[(15)]);
var inst_35880 = (inst_35878 < inst_35877);
var inst_35881 = inst_35880;
var state_35940__$1 = state_35940;
if(cljs.core.truth_(inst_35881)){
var statearr_36017_37596 = state_35940__$1;
(statearr_36017_37596[(1)] = (10));

} else {
var statearr_36020_37600 = state_35940__$1;
(statearr_36020_37600[(1)] = (11));

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
var statearr_36024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36024[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36024[(1)] = (1));

return statearr_36024;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35940){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35940);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36027){if((e36027 instanceof Object)){
var ex__34210__auto__ = e36027;
var statearr_36028_37604 = state_35940;
(statearr_36028_37604[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37607 = state_35940;
state_35940 = G__37607;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36033 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36033[(6)] = c__34274__auto___37499);

return statearr_36033;
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
var G__36039 = arguments.length;
switch (G__36039) {
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
var G__36047 = arguments.length;
switch (G__36047) {
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
var c__34274__auto___37638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36092){
var state_val_36093 = (state_36092[(1)]);
if((state_val_36093 === (7))){
var state_36092__$1 = state_36092;
var statearr_36094_37644 = state_36092__$1;
(statearr_36094_37644[(2)] = null);

(statearr_36094_37644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (1))){
var state_36092__$1 = state_36092;
var statearr_36095_37648 = state_36092__$1;
(statearr_36095_37648[(2)] = null);

(statearr_36095_37648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (4))){
var inst_36056 = (state_36092[(7)]);
var inst_36058 = (inst_36056 < cnt);
var state_36092__$1 = state_36092;
if(cljs.core.truth_(inst_36058)){
var statearr_36096_37650 = state_36092__$1;
(statearr_36096_37650[(1)] = (6));

} else {
var statearr_36098_37651 = state_36092__$1;
(statearr_36098_37651[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (15))){
var inst_36088 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
var statearr_36099_37652 = state_36092__$1;
(statearr_36099_37652[(2)] = inst_36088);

(statearr_36099_37652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (13))){
var inst_36081 = cljs.core.async.close_BANG_(out);
var state_36092__$1 = state_36092;
var statearr_36100_37662 = state_36092__$1;
(statearr_36100_37662[(2)] = inst_36081);

(statearr_36100_37662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (6))){
var state_36092__$1 = state_36092;
var statearr_36102_37665 = state_36092__$1;
(statearr_36102_37665[(2)] = null);

(statearr_36102_37665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (3))){
var inst_36090 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36092__$1,inst_36090);
} else {
if((state_val_36093 === (12))){
var inst_36078 = (state_36092[(8)]);
var inst_36078__$1 = (state_36092[(2)]);
var inst_36079 = cljs.core.some(cljs.core.nil_QMARK_,inst_36078__$1);
var state_36092__$1 = (function (){var statearr_36107 = state_36092;
(statearr_36107[(8)] = inst_36078__$1);

return statearr_36107;
})();
if(cljs.core.truth_(inst_36079)){
var statearr_36108_37668 = state_36092__$1;
(statearr_36108_37668[(1)] = (13));

} else {
var statearr_36112_37670 = state_36092__$1;
(statearr_36112_37670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (2))){
var inst_36055 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36056 = (0);
var state_36092__$1 = (function (){var statearr_36113 = state_36092;
(statearr_36113[(9)] = inst_36055);

(statearr_36113[(7)] = inst_36056);

return statearr_36113;
})();
var statearr_36114_37678 = state_36092__$1;
(statearr_36114_37678[(2)] = null);

(statearr_36114_37678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (11))){
var inst_36056 = (state_36092[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36092,(10),Object,null,(9));
var inst_36065 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36056) : chs__$1.call(null,inst_36056));
var inst_36066 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36056) : done.call(null,inst_36056));
var inst_36067 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36065,inst_36066);
var state_36092__$1 = state_36092;
var statearr_36116_37680 = state_36092__$1;
(statearr_36116_37680[(2)] = inst_36067);


cljs.core.async.impl.ioc_helpers.process_exception(state_36092__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (9))){
var inst_36056 = (state_36092[(7)]);
var inst_36069 = (state_36092[(2)]);
var inst_36070 = (inst_36056 + (1));
var inst_36056__$1 = inst_36070;
var state_36092__$1 = (function (){var statearr_36117 = state_36092;
(statearr_36117[(10)] = inst_36069);

(statearr_36117[(7)] = inst_36056__$1);

return statearr_36117;
})();
var statearr_36118_37691 = state_36092__$1;
(statearr_36118_37691[(2)] = null);

(statearr_36118_37691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (5))){
var inst_36076 = (state_36092[(2)]);
var state_36092__$1 = (function (){var statearr_36120 = state_36092;
(statearr_36120[(11)] = inst_36076);

return statearr_36120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36092__$1,(12),dchan);
} else {
if((state_val_36093 === (14))){
var inst_36078 = (state_36092[(8)]);
var inst_36083 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36078);
var state_36092__$1 = state_36092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36092__$1,(16),out,inst_36083);
} else {
if((state_val_36093 === (16))){
var inst_36085 = (state_36092[(2)]);
var state_36092__$1 = (function (){var statearr_36125 = state_36092;
(statearr_36125[(12)] = inst_36085);

return statearr_36125;
})();
var statearr_36126_37696 = state_36092__$1;
(statearr_36126_37696[(2)] = null);

(statearr_36126_37696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (10))){
var inst_36060 = (state_36092[(2)]);
var inst_36061 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36092__$1 = (function (){var statearr_36129 = state_36092;
(statearr_36129[(13)] = inst_36060);

return statearr_36129;
})();
var statearr_36130_37704 = state_36092__$1;
(statearr_36130_37704[(2)] = inst_36061);


cljs.core.async.impl.ioc_helpers.process_exception(state_36092__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (8))){
var inst_36074 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
var statearr_36132_37706 = state_36092__$1;
(statearr_36132_37706[(2)] = inst_36074);

(statearr_36132_37706[(1)] = (5));


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
var statearr_36133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36133[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36133[(1)] = (1));

return statearr_36133;
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
}catch (e36135){if((e36135 instanceof Object)){
var ex__34210__auto__ = e36135;
var statearr_36136_37716 = state_36092;
(statearr_36136_37716[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37719 = state_36092;
state_36092 = G__37719;
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
var state__34276__auto__ = (function (){var statearr_36141 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36141[(6)] = c__34274__auto___37638);

return statearr_36141;
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
var G__36144 = arguments.length;
switch (G__36144) {
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
var c__34274__auto___37730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36176){
var state_val_36177 = (state_36176[(1)]);
if((state_val_36177 === (7))){
var inst_36155 = (state_36176[(7)]);
var inst_36156 = (state_36176[(8)]);
var inst_36155__$1 = (state_36176[(2)]);
var inst_36156__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36155__$1,(0),null);
var inst_36157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36155__$1,(1),null);
var inst_36158 = (inst_36156__$1 == null);
var state_36176__$1 = (function (){var statearr_36178 = state_36176;
(statearr_36178[(7)] = inst_36155__$1);

(statearr_36178[(8)] = inst_36156__$1);

(statearr_36178[(9)] = inst_36157);

return statearr_36178;
})();
if(cljs.core.truth_(inst_36158)){
var statearr_36179_37735 = state_36176__$1;
(statearr_36179_37735[(1)] = (8));

} else {
var statearr_36180_37739 = state_36176__$1;
(statearr_36180_37739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (1))){
var inst_36145 = cljs.core.vec(chs);
var inst_36146 = inst_36145;
var state_36176__$1 = (function (){var statearr_36181 = state_36176;
(statearr_36181[(10)] = inst_36146);

return statearr_36181;
})();
var statearr_36182_37746 = state_36176__$1;
(statearr_36182_37746[(2)] = null);

(statearr_36182_37746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (4))){
var inst_36146 = (state_36176[(10)]);
var state_36176__$1 = state_36176;
return cljs.core.async.ioc_alts_BANG_(state_36176__$1,(7),inst_36146);
} else {
if((state_val_36177 === (6))){
var inst_36172 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
var statearr_36183_37749 = state_36176__$1;
(statearr_36183_37749[(2)] = inst_36172);

(statearr_36183_37749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (3))){
var inst_36174 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36176__$1,inst_36174);
} else {
if((state_val_36177 === (2))){
var inst_36146 = (state_36176[(10)]);
var inst_36148 = cljs.core.count(inst_36146);
var inst_36149 = (inst_36148 > (0));
var state_36176__$1 = state_36176;
if(cljs.core.truth_(inst_36149)){
var statearr_36185_37757 = state_36176__$1;
(statearr_36185_37757[(1)] = (4));

} else {
var statearr_36186_37758 = state_36176__$1;
(statearr_36186_37758[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (11))){
var inst_36146 = (state_36176[(10)]);
var inst_36165 = (state_36176[(2)]);
var tmp36184 = inst_36146;
var inst_36146__$1 = tmp36184;
var state_36176__$1 = (function (){var statearr_36187 = state_36176;
(statearr_36187[(11)] = inst_36165);

(statearr_36187[(10)] = inst_36146__$1);

return statearr_36187;
})();
var statearr_36188_37761 = state_36176__$1;
(statearr_36188_37761[(2)] = null);

(statearr_36188_37761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (9))){
var inst_36156 = (state_36176[(8)]);
var state_36176__$1 = state_36176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36176__$1,(11),out,inst_36156);
} else {
if((state_val_36177 === (5))){
var inst_36170 = cljs.core.async.close_BANG_(out);
var state_36176__$1 = state_36176;
var statearr_36189_37767 = state_36176__$1;
(statearr_36189_37767[(2)] = inst_36170);

(statearr_36189_37767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (10))){
var inst_36168 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
var statearr_36190_37769 = state_36176__$1;
(statearr_36190_37769[(2)] = inst_36168);

(statearr_36190_37769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (8))){
var inst_36146 = (state_36176[(10)]);
var inst_36155 = (state_36176[(7)]);
var inst_36156 = (state_36176[(8)]);
var inst_36157 = (state_36176[(9)]);
var inst_36160 = (function (){var cs = inst_36146;
var vec__36151 = inst_36155;
var v = inst_36156;
var c = inst_36157;
return (function (p1__36142_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36142_SHARP_);
});
})();
var inst_36161 = cljs.core.filterv(inst_36160,inst_36146);
var inst_36146__$1 = inst_36161;
var state_36176__$1 = (function (){var statearr_36195 = state_36176;
(statearr_36195[(10)] = inst_36146__$1);

return statearr_36195;
})();
var statearr_36196_37775 = state_36176__$1;
(statearr_36196_37775[(2)] = null);

(statearr_36196_37775[(1)] = (2));


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
var statearr_36197 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36197[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36197[(1)] = (1));

return statearr_36197;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36176){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36176);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36198){if((e36198 instanceof Object)){
var ex__34210__auto__ = e36198;
var statearr_36199_37776 = state_36176;
(statearr_36199_37776[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37779 = state_36176;
state_36176 = G__37779;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36200 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36200[(6)] = c__34274__auto___37730);

return statearr_36200;
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
var G__36205 = arguments.length;
switch (G__36205) {
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
var c__34274__auto___37783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36232){
var state_val_36233 = (state_36232[(1)]);
if((state_val_36233 === (7))){
var inst_36213 = (state_36232[(7)]);
var inst_36213__$1 = (state_36232[(2)]);
var inst_36214 = (inst_36213__$1 == null);
var inst_36215 = cljs.core.not(inst_36214);
var state_36232__$1 = (function (){var statearr_36234 = state_36232;
(statearr_36234[(7)] = inst_36213__$1);

return statearr_36234;
})();
if(inst_36215){
var statearr_36236_37788 = state_36232__$1;
(statearr_36236_37788[(1)] = (8));

} else {
var statearr_36237_37789 = state_36232__$1;
(statearr_36237_37789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (1))){
var inst_36207 = (0);
var state_36232__$1 = (function (){var statearr_36238 = state_36232;
(statearr_36238[(8)] = inst_36207);

return statearr_36238;
})();
var statearr_36239_37790 = state_36232__$1;
(statearr_36239_37790[(2)] = null);

(statearr_36239_37790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (4))){
var state_36232__$1 = state_36232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36232__$1,(7),ch);
} else {
if((state_val_36233 === (6))){
var inst_36227 = (state_36232[(2)]);
var state_36232__$1 = state_36232;
var statearr_36241_37794 = state_36232__$1;
(statearr_36241_37794[(2)] = inst_36227);

(statearr_36241_37794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (3))){
var inst_36229 = (state_36232[(2)]);
var inst_36230 = cljs.core.async.close_BANG_(out);
var state_36232__$1 = (function (){var statearr_36244 = state_36232;
(statearr_36244[(9)] = inst_36229);

return statearr_36244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36232__$1,inst_36230);
} else {
if((state_val_36233 === (2))){
var inst_36207 = (state_36232[(8)]);
var inst_36209 = (inst_36207 < n);
var state_36232__$1 = state_36232;
if(cljs.core.truth_(inst_36209)){
var statearr_36245_37796 = state_36232__$1;
(statearr_36245_37796[(1)] = (4));

} else {
var statearr_36246_37797 = state_36232__$1;
(statearr_36246_37797[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (11))){
var inst_36207 = (state_36232[(8)]);
var inst_36219 = (state_36232[(2)]);
var inst_36220 = (inst_36207 + (1));
var inst_36207__$1 = inst_36220;
var state_36232__$1 = (function (){var statearr_36247 = state_36232;
(statearr_36247[(8)] = inst_36207__$1);

(statearr_36247[(10)] = inst_36219);

return statearr_36247;
})();
var statearr_36248_37799 = state_36232__$1;
(statearr_36248_37799[(2)] = null);

(statearr_36248_37799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (9))){
var state_36232__$1 = state_36232;
var statearr_36251_37800 = state_36232__$1;
(statearr_36251_37800[(2)] = null);

(statearr_36251_37800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (5))){
var state_36232__$1 = state_36232;
var statearr_36252_37801 = state_36232__$1;
(statearr_36252_37801[(2)] = null);

(statearr_36252_37801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (10))){
var inst_36224 = (state_36232[(2)]);
var state_36232__$1 = state_36232;
var statearr_36253_37802 = state_36232__$1;
(statearr_36253_37802[(2)] = inst_36224);

(statearr_36253_37802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (8))){
var inst_36213 = (state_36232[(7)]);
var state_36232__$1 = state_36232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36232__$1,(11),out,inst_36213);
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
var statearr_36257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36257[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36257[(1)] = (1));

return statearr_36257;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36232){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36232);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36261){if((e36261 instanceof Object)){
var ex__34210__auto__ = e36261;
var statearr_36263_37812 = state_36232;
(statearr_36263_37812[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37813 = state_36232;
state_36232 = G__37813;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36267 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36267[(6)] = c__34274__auto___37783);

return statearr_36267;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36274 = (function (f,ch,meta36275){
this.f = f;
this.ch = ch;
this.meta36275 = meta36275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36276,meta36275__$1){
var self__ = this;
var _36276__$1 = this;
return (new cljs.core.async.t_cljs$core$async36274(self__.f,self__.ch,meta36275__$1));
}));

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36276){
var self__ = this;
var _36276__$1 = this;
return self__.meta36275;
}));

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36286 = (function (f,ch,meta36275,_,fn1,meta36287){
this.f = f;
this.ch = ch;
this.meta36275 = meta36275;
this._ = _;
this.fn1 = fn1;
this.meta36287 = meta36287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36288,meta36287__$1){
var self__ = this;
var _36288__$1 = this;
return (new cljs.core.async.t_cljs$core$async36286(self__.f,self__.ch,self__.meta36275,self__._,self__.fn1,meta36287__$1));
}));

(cljs.core.async.t_cljs$core$async36286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36288){
var self__ = this;
var _36288__$1 = this;
return self__.meta36287;
}));

(cljs.core.async.t_cljs$core$async36286.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36286.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36268_SHARP_){
var G__36293 = (((p1__36268_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36268_SHARP_) : self__.f.call(null,p1__36268_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36293) : f1.call(null,G__36293));
});
}));

(cljs.core.async.t_cljs$core$async36286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36275","meta36275",-112810055,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36274","cljs.core.async/t_cljs$core$async36274",897982280,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36287","meta36287",120519076,null)], null);
}));

(cljs.core.async.t_cljs$core$async36286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36286");

(cljs.core.async.t_cljs$core$async36286.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36286.
 */
cljs.core.async.__GT_t_cljs$core$async36286 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36286(f__$1,ch__$1,meta36275__$1,___$2,fn1__$1,meta36287){
return (new cljs.core.async.t_cljs$core$async36286(f__$1,ch__$1,meta36275__$1,___$2,fn1__$1,meta36287));
});

}

return (new cljs.core.async.t_cljs$core$async36286(self__.f,self__.ch,self__.meta36275,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36296 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36296) : self__.f.call(null,G__36296));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36275","meta36275",-112810055,null)], null);
}));

(cljs.core.async.t_cljs$core$async36274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36274");

(cljs.core.async.t_cljs$core$async36274.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36274.
 */
cljs.core.async.__GT_t_cljs$core$async36274 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36274(f__$1,ch__$1,meta36275){
return (new cljs.core.async.t_cljs$core$async36274(f__$1,ch__$1,meta36275));
});

}

return (new cljs.core.async.t_cljs$core$async36274(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36309 = (function (f,ch,meta36310){
this.f = f;
this.ch = ch;
this.meta36310 = meta36310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36311,meta36310__$1){
var self__ = this;
var _36311__$1 = this;
return (new cljs.core.async.t_cljs$core$async36309(self__.f,self__.ch,meta36310__$1));
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36311){
var self__ = this;
var _36311__$1 = this;
return self__.meta36310;
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36310","meta36310",-1787906238,null)], null);
}));

(cljs.core.async.t_cljs$core$async36309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36309");

(cljs.core.async.t_cljs$core$async36309.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36309.
 */
cljs.core.async.__GT_t_cljs$core$async36309 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36309(f__$1,ch__$1,meta36310){
return (new cljs.core.async.t_cljs$core$async36309(f__$1,ch__$1,meta36310));
});

}

return (new cljs.core.async.t_cljs$core$async36309(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36321 = (function (p,ch,meta36322){
this.p = p;
this.ch = ch;
this.meta36322 = meta36322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36323,meta36322__$1){
var self__ = this;
var _36323__$1 = this;
return (new cljs.core.async.t_cljs$core$async36321(self__.p,self__.ch,meta36322__$1));
}));

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36323){
var self__ = this;
var _36323__$1 = this;
return self__.meta36322;
}));

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36322","meta36322",-1265685795,null)], null);
}));

(cljs.core.async.t_cljs$core$async36321.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36321");

(cljs.core.async.t_cljs$core$async36321.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36321");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36321.
 */
cljs.core.async.__GT_t_cljs$core$async36321 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36321(p__$1,ch__$1,meta36322){
return (new cljs.core.async.t_cljs$core$async36321(p__$1,ch__$1,meta36322));
});

}

return (new cljs.core.async.t_cljs$core$async36321(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36342 = arguments.length;
switch (G__36342) {
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
var c__34274__auto___37883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36365){
var state_val_36366 = (state_36365[(1)]);
if((state_val_36366 === (7))){
var inst_36361 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
var statearr_36369_37890 = state_36365__$1;
(statearr_36369_37890[(2)] = inst_36361);

(statearr_36369_37890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (1))){
var state_36365__$1 = state_36365;
var statearr_36370_37892 = state_36365__$1;
(statearr_36370_37892[(2)] = null);

(statearr_36370_37892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (4))){
var inst_36347 = (state_36365[(7)]);
var inst_36347__$1 = (state_36365[(2)]);
var inst_36348 = (inst_36347__$1 == null);
var state_36365__$1 = (function (){var statearr_36372 = state_36365;
(statearr_36372[(7)] = inst_36347__$1);

return statearr_36372;
})();
if(cljs.core.truth_(inst_36348)){
var statearr_36374_37893 = state_36365__$1;
(statearr_36374_37893[(1)] = (5));

} else {
var statearr_36375_37895 = state_36365__$1;
(statearr_36375_37895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (6))){
var inst_36347 = (state_36365[(7)]);
var inst_36352 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36347) : p.call(null,inst_36347));
var state_36365__$1 = state_36365;
if(cljs.core.truth_(inst_36352)){
var statearr_36376_37897 = state_36365__$1;
(statearr_36376_37897[(1)] = (8));

} else {
var statearr_36377_37898 = state_36365__$1;
(statearr_36377_37898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (3))){
var inst_36363 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36365__$1,inst_36363);
} else {
if((state_val_36366 === (2))){
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36365__$1,(4),ch);
} else {
if((state_val_36366 === (11))){
var inst_36355 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
var statearr_36385_37902 = state_36365__$1;
(statearr_36385_37902[(2)] = inst_36355);

(statearr_36385_37902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (9))){
var state_36365__$1 = state_36365;
var statearr_36387_37906 = state_36365__$1;
(statearr_36387_37906[(2)] = null);

(statearr_36387_37906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (5))){
var inst_36350 = cljs.core.async.close_BANG_(out);
var state_36365__$1 = state_36365;
var statearr_36388_37908 = state_36365__$1;
(statearr_36388_37908[(2)] = inst_36350);

(statearr_36388_37908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (10))){
var inst_36358 = (state_36365[(2)]);
var state_36365__$1 = (function (){var statearr_36389 = state_36365;
(statearr_36389[(8)] = inst_36358);

return statearr_36389;
})();
var statearr_36390_37913 = state_36365__$1;
(statearr_36390_37913[(2)] = null);

(statearr_36390_37913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (8))){
var inst_36347 = (state_36365[(7)]);
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36365__$1,(11),out,inst_36347);
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
var statearr_36391 = [null,null,null,null,null,null,null,null,null];
(statearr_36391[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36391[(1)] = (1));

return statearr_36391;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36365){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36365);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36393){if((e36393 instanceof Object)){
var ex__34210__auto__ = e36393;
var statearr_36394_37918 = state_36365;
(statearr_36394_37918[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37919 = state_36365;
state_36365 = G__37919;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36397 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36397[(6)] = c__34274__auto___37883);

return statearr_36397;
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
var G__36400 = arguments.length;
switch (G__36400) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36465){
var state_val_36466 = (state_36465[(1)]);
if((state_val_36466 === (7))){
var inst_36461 = (state_36465[(2)]);
var state_36465__$1 = state_36465;
var statearr_36467_37936 = state_36465__$1;
(statearr_36467_37936[(2)] = inst_36461);

(statearr_36467_37936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (20))){
var inst_36431 = (state_36465[(7)]);
var inst_36442 = (state_36465[(2)]);
var inst_36443 = cljs.core.next(inst_36431);
var inst_36417 = inst_36443;
var inst_36418 = null;
var inst_36419 = (0);
var inst_36420 = (0);
var state_36465__$1 = (function (){var statearr_36471 = state_36465;
(statearr_36471[(8)] = inst_36418);

(statearr_36471[(9)] = inst_36442);

(statearr_36471[(10)] = inst_36420);

(statearr_36471[(11)] = inst_36419);

(statearr_36471[(12)] = inst_36417);

return statearr_36471;
})();
var statearr_36472_37941 = state_36465__$1;
(statearr_36472_37941[(2)] = null);

(statearr_36472_37941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (1))){
var state_36465__$1 = state_36465;
var statearr_36475_37944 = state_36465__$1;
(statearr_36475_37944[(2)] = null);

(statearr_36475_37944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (4))){
var inst_36406 = (state_36465[(13)]);
var inst_36406__$1 = (state_36465[(2)]);
var inst_36407 = (inst_36406__$1 == null);
var state_36465__$1 = (function (){var statearr_36476 = state_36465;
(statearr_36476[(13)] = inst_36406__$1);

return statearr_36476;
})();
if(cljs.core.truth_(inst_36407)){
var statearr_36477_37948 = state_36465__$1;
(statearr_36477_37948[(1)] = (5));

} else {
var statearr_36478_37950 = state_36465__$1;
(statearr_36478_37950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (15))){
var state_36465__$1 = state_36465;
var statearr_36483_37953 = state_36465__$1;
(statearr_36483_37953[(2)] = null);

(statearr_36483_37953[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (21))){
var state_36465__$1 = state_36465;
var statearr_36484_37955 = state_36465__$1;
(statearr_36484_37955[(2)] = null);

(statearr_36484_37955[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (13))){
var inst_36418 = (state_36465[(8)]);
var inst_36420 = (state_36465[(10)]);
var inst_36419 = (state_36465[(11)]);
var inst_36417 = (state_36465[(12)]);
var inst_36427 = (state_36465[(2)]);
var inst_36428 = (inst_36420 + (1));
var tmp36479 = inst_36418;
var tmp36480 = inst_36419;
var tmp36481 = inst_36417;
var inst_36417__$1 = tmp36481;
var inst_36418__$1 = tmp36479;
var inst_36419__$1 = tmp36480;
var inst_36420__$1 = inst_36428;
var state_36465__$1 = (function (){var statearr_36489 = state_36465;
(statearr_36489[(8)] = inst_36418__$1);

(statearr_36489[(10)] = inst_36420__$1);

(statearr_36489[(11)] = inst_36419__$1);

(statearr_36489[(14)] = inst_36427);

(statearr_36489[(12)] = inst_36417__$1);

return statearr_36489;
})();
var statearr_36494_37963 = state_36465__$1;
(statearr_36494_37963[(2)] = null);

(statearr_36494_37963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (22))){
var state_36465__$1 = state_36465;
var statearr_36497_37964 = state_36465__$1;
(statearr_36497_37964[(2)] = null);

(statearr_36497_37964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (6))){
var inst_36406 = (state_36465[(13)]);
var inst_36415 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36406) : f.call(null,inst_36406));
var inst_36416 = cljs.core.seq(inst_36415);
var inst_36417 = inst_36416;
var inst_36418 = null;
var inst_36419 = (0);
var inst_36420 = (0);
var state_36465__$1 = (function (){var statearr_36502 = state_36465;
(statearr_36502[(8)] = inst_36418);

(statearr_36502[(10)] = inst_36420);

(statearr_36502[(11)] = inst_36419);

(statearr_36502[(12)] = inst_36417);

return statearr_36502;
})();
var statearr_36503_37966 = state_36465__$1;
(statearr_36503_37966[(2)] = null);

(statearr_36503_37966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (17))){
var inst_36431 = (state_36465[(7)]);
var inst_36435 = cljs.core.chunk_first(inst_36431);
var inst_36436 = cljs.core.chunk_rest(inst_36431);
var inst_36437 = cljs.core.count(inst_36435);
var inst_36417 = inst_36436;
var inst_36418 = inst_36435;
var inst_36419 = inst_36437;
var inst_36420 = (0);
var state_36465__$1 = (function (){var statearr_36505 = state_36465;
(statearr_36505[(8)] = inst_36418);

(statearr_36505[(10)] = inst_36420);

(statearr_36505[(11)] = inst_36419);

(statearr_36505[(12)] = inst_36417);

return statearr_36505;
})();
var statearr_36507_37972 = state_36465__$1;
(statearr_36507_37972[(2)] = null);

(statearr_36507_37972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (3))){
var inst_36463 = (state_36465[(2)]);
var state_36465__$1 = state_36465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36465__$1,inst_36463);
} else {
if((state_val_36466 === (12))){
var inst_36451 = (state_36465[(2)]);
var state_36465__$1 = state_36465;
var statearr_36508_37974 = state_36465__$1;
(statearr_36508_37974[(2)] = inst_36451);

(statearr_36508_37974[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (2))){
var state_36465__$1 = state_36465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36465__$1,(4),in$);
} else {
if((state_val_36466 === (23))){
var inst_36459 = (state_36465[(2)]);
var state_36465__$1 = state_36465;
var statearr_36514_37979 = state_36465__$1;
(statearr_36514_37979[(2)] = inst_36459);

(statearr_36514_37979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (19))){
var inst_36446 = (state_36465[(2)]);
var state_36465__$1 = state_36465;
var statearr_36517_37980 = state_36465__$1;
(statearr_36517_37980[(2)] = inst_36446);

(statearr_36517_37980[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (11))){
var inst_36431 = (state_36465[(7)]);
var inst_36417 = (state_36465[(12)]);
var inst_36431__$1 = cljs.core.seq(inst_36417);
var state_36465__$1 = (function (){var statearr_36522 = state_36465;
(statearr_36522[(7)] = inst_36431__$1);

return statearr_36522;
})();
if(inst_36431__$1){
var statearr_36524_37984 = state_36465__$1;
(statearr_36524_37984[(1)] = (14));

} else {
var statearr_36525_37985 = state_36465__$1;
(statearr_36525_37985[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (9))){
var inst_36453 = (state_36465[(2)]);
var inst_36454 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36465__$1 = (function (){var statearr_36526 = state_36465;
(statearr_36526[(15)] = inst_36453);

return statearr_36526;
})();
if(cljs.core.truth_(inst_36454)){
var statearr_36528_37988 = state_36465__$1;
(statearr_36528_37988[(1)] = (21));

} else {
var statearr_36529_37989 = state_36465__$1;
(statearr_36529_37989[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (5))){
var inst_36409 = cljs.core.async.close_BANG_(out);
var state_36465__$1 = state_36465;
var statearr_36530_37990 = state_36465__$1;
(statearr_36530_37990[(2)] = inst_36409);

(statearr_36530_37990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (14))){
var inst_36431 = (state_36465[(7)]);
var inst_36433 = cljs.core.chunked_seq_QMARK_(inst_36431);
var state_36465__$1 = state_36465;
if(inst_36433){
var statearr_36535_37992 = state_36465__$1;
(statearr_36535_37992[(1)] = (17));

} else {
var statearr_36536_37995 = state_36465__$1;
(statearr_36536_37995[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (16))){
var inst_36449 = (state_36465[(2)]);
var state_36465__$1 = state_36465;
var statearr_36537_37998 = state_36465__$1;
(statearr_36537_37998[(2)] = inst_36449);

(statearr_36537_37998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36466 === (10))){
var inst_36418 = (state_36465[(8)]);
var inst_36420 = (state_36465[(10)]);
var inst_36425 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36418,inst_36420);
var state_36465__$1 = state_36465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36465__$1,(13),out,inst_36425);
} else {
if((state_val_36466 === (18))){
var inst_36431 = (state_36465[(7)]);
var inst_36440 = cljs.core.first(inst_36431);
var state_36465__$1 = state_36465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36465__$1,(20),out,inst_36440);
} else {
if((state_val_36466 === (8))){
var inst_36420 = (state_36465[(10)]);
var inst_36419 = (state_36465[(11)]);
var inst_36422 = (inst_36420 < inst_36419);
var inst_36423 = inst_36422;
var state_36465__$1 = state_36465;
if(cljs.core.truth_(inst_36423)){
var statearr_36544_38006 = state_36465__$1;
(statearr_36544_38006[(1)] = (10));

} else {
var statearr_36545_38007 = state_36465__$1;
(statearr_36545_38007[(1)] = (11));

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
var statearr_36552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36552[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36552[(1)] = (1));

return statearr_36552;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36465){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36465);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36555){if((e36555 instanceof Object)){
var ex__34210__auto__ = e36555;
var statearr_36557_38017 = state_36465;
(statearr_36557_38017[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36555;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38020 = state_36465;
state_36465 = G__38020;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36465){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36559 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36559[(6)] = c__34274__auto__);

return statearr_36559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36563 = arguments.length;
switch (G__36563) {
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
var G__36570 = arguments.length;
switch (G__36570) {
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
var G__36576 = arguments.length;
switch (G__36576) {
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
var c__34274__auto___38034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36606){
var state_val_36607 = (state_36606[(1)]);
if((state_val_36607 === (7))){
var inst_36601 = (state_36606[(2)]);
var state_36606__$1 = state_36606;
var statearr_36609_38036 = state_36606__$1;
(statearr_36609_38036[(2)] = inst_36601);

(statearr_36609_38036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36607 === (1))){
var inst_36579 = null;
var state_36606__$1 = (function (){var statearr_36610 = state_36606;
(statearr_36610[(7)] = inst_36579);

return statearr_36610;
})();
var statearr_36611_38039 = state_36606__$1;
(statearr_36611_38039[(2)] = null);

(statearr_36611_38039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36607 === (4))){
var inst_36586 = (state_36606[(8)]);
var inst_36586__$1 = (state_36606[(2)]);
var inst_36587 = (inst_36586__$1 == null);
var inst_36588 = cljs.core.not(inst_36587);
var state_36606__$1 = (function (){var statearr_36613 = state_36606;
(statearr_36613[(8)] = inst_36586__$1);

return statearr_36613;
})();
if(inst_36588){
var statearr_36614_38044 = state_36606__$1;
(statearr_36614_38044[(1)] = (5));

} else {
var statearr_36615_38045 = state_36606__$1;
(statearr_36615_38045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36607 === (6))){
var state_36606__$1 = state_36606;
var statearr_36616_38046 = state_36606__$1;
(statearr_36616_38046[(2)] = null);

(statearr_36616_38046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36607 === (3))){
var inst_36603 = (state_36606[(2)]);
var inst_36604 = cljs.core.async.close_BANG_(out);
var state_36606__$1 = (function (){var statearr_36618 = state_36606;
(statearr_36618[(9)] = inst_36603);

return statearr_36618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36606__$1,inst_36604);
} else {
if((state_val_36607 === (2))){
var state_36606__$1 = state_36606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36606__$1,(4),ch);
} else {
if((state_val_36607 === (11))){
var inst_36586 = (state_36606[(8)]);
var inst_36595 = (state_36606[(2)]);
var inst_36579 = inst_36586;
var state_36606__$1 = (function (){var statearr_36620 = state_36606;
(statearr_36620[(7)] = inst_36579);

(statearr_36620[(10)] = inst_36595);

return statearr_36620;
})();
var statearr_36621_38049 = state_36606__$1;
(statearr_36621_38049[(2)] = null);

(statearr_36621_38049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36607 === (9))){
var inst_36586 = (state_36606[(8)]);
var state_36606__$1 = state_36606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36606__$1,(11),out,inst_36586);
} else {
if((state_val_36607 === (5))){
var inst_36586 = (state_36606[(8)]);
var inst_36579 = (state_36606[(7)]);
var inst_36590 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36586,inst_36579);
var state_36606__$1 = state_36606;
if(inst_36590){
var statearr_36624_38054 = state_36606__$1;
(statearr_36624_38054[(1)] = (8));

} else {
var statearr_36625_38055 = state_36606__$1;
(statearr_36625_38055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36607 === (10))){
var inst_36598 = (state_36606[(2)]);
var state_36606__$1 = state_36606;
var statearr_36626_38056 = state_36606__$1;
(statearr_36626_38056[(2)] = inst_36598);

(statearr_36626_38056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36607 === (8))){
var inst_36579 = (state_36606[(7)]);
var tmp36622 = inst_36579;
var inst_36579__$1 = tmp36622;
var state_36606__$1 = (function (){var statearr_36628 = state_36606;
(statearr_36628[(7)] = inst_36579__$1);

return statearr_36628;
})();
var statearr_36629_38057 = state_36606__$1;
(statearr_36629_38057[(2)] = null);

(statearr_36629_38057[(1)] = (2));


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
var statearr_36630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36630[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36630[(1)] = (1));

return statearr_36630;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36606){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36606);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36632){if((e36632 instanceof Object)){
var ex__34210__auto__ = e36632;
var statearr_36633_38061 = state_36606;
(statearr_36633_38061[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38062 = state_36606;
state_36606 = G__38062;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36635 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36635[(6)] = c__34274__auto___38034);

return statearr_36635;
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
var G__36638 = arguments.length;
switch (G__36638) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36679){
var state_val_36680 = (state_36679[(1)]);
if((state_val_36680 === (7))){
var inst_36674 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36682_38069 = state_36679__$1;
(statearr_36682_38069[(2)] = inst_36674);

(statearr_36682_38069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (1))){
var inst_36641 = (new Array(n));
var inst_36642 = inst_36641;
var inst_36643 = (0);
var state_36679__$1 = (function (){var statearr_36683 = state_36679;
(statearr_36683[(7)] = inst_36643);

(statearr_36683[(8)] = inst_36642);

return statearr_36683;
})();
var statearr_36684_38070 = state_36679__$1;
(statearr_36684_38070[(2)] = null);

(statearr_36684_38070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (4))){
var inst_36646 = (state_36679[(9)]);
var inst_36646__$1 = (state_36679[(2)]);
var inst_36647 = (inst_36646__$1 == null);
var inst_36648 = cljs.core.not(inst_36647);
var state_36679__$1 = (function (){var statearr_36686 = state_36679;
(statearr_36686[(9)] = inst_36646__$1);

return statearr_36686;
})();
if(inst_36648){
var statearr_36687_38072 = state_36679__$1;
(statearr_36687_38072[(1)] = (5));

} else {
var statearr_36688_38073 = state_36679__$1;
(statearr_36688_38073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (15))){
var inst_36668 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36689_38074 = state_36679__$1;
(statearr_36689_38074[(2)] = inst_36668);

(statearr_36689_38074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (13))){
var state_36679__$1 = state_36679;
var statearr_36691_38079 = state_36679__$1;
(statearr_36691_38079[(2)] = null);

(statearr_36691_38079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (6))){
var inst_36643 = (state_36679[(7)]);
var inst_36664 = (inst_36643 > (0));
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36664)){
var statearr_36692_38080 = state_36679__$1;
(statearr_36692_38080[(1)] = (12));

} else {
var statearr_36693_38081 = state_36679__$1;
(statearr_36693_38081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (3))){
var inst_36676 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36679__$1,inst_36676);
} else {
if((state_val_36680 === (12))){
var inst_36642 = (state_36679[(8)]);
var inst_36666 = cljs.core.vec(inst_36642);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36679__$1,(15),out,inst_36666);
} else {
if((state_val_36680 === (2))){
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36679__$1,(4),ch);
} else {
if((state_val_36680 === (11))){
var inst_36658 = (state_36679[(2)]);
var inst_36659 = (new Array(n));
var inst_36642 = inst_36659;
var inst_36643 = (0);
var state_36679__$1 = (function (){var statearr_36696 = state_36679;
(statearr_36696[(7)] = inst_36643);

(statearr_36696[(8)] = inst_36642);

(statearr_36696[(10)] = inst_36658);

return statearr_36696;
})();
var statearr_36697_38082 = state_36679__$1;
(statearr_36697_38082[(2)] = null);

(statearr_36697_38082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (9))){
var inst_36642 = (state_36679[(8)]);
var inst_36656 = cljs.core.vec(inst_36642);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36679__$1,(11),out,inst_36656);
} else {
if((state_val_36680 === (5))){
var inst_36643 = (state_36679[(7)]);
var inst_36642 = (state_36679[(8)]);
var inst_36646 = (state_36679[(9)]);
var inst_36651 = (state_36679[(11)]);
var inst_36650 = (inst_36642[inst_36643] = inst_36646);
var inst_36651__$1 = (inst_36643 + (1));
var inst_36652 = (inst_36651__$1 < n);
var state_36679__$1 = (function (){var statearr_36699 = state_36679;
(statearr_36699[(11)] = inst_36651__$1);

(statearr_36699[(12)] = inst_36650);

return statearr_36699;
})();
if(cljs.core.truth_(inst_36652)){
var statearr_36700_38087 = state_36679__$1;
(statearr_36700_38087[(1)] = (8));

} else {
var statearr_36701_38088 = state_36679__$1;
(statearr_36701_38088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (14))){
var inst_36671 = (state_36679[(2)]);
var inst_36672 = cljs.core.async.close_BANG_(out);
var state_36679__$1 = (function (){var statearr_36704 = state_36679;
(statearr_36704[(13)] = inst_36671);

return statearr_36704;
})();
var statearr_36705_38090 = state_36679__$1;
(statearr_36705_38090[(2)] = inst_36672);

(statearr_36705_38090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (10))){
var inst_36662 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36706_38093 = state_36679__$1;
(statearr_36706_38093[(2)] = inst_36662);

(statearr_36706_38093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (8))){
var inst_36642 = (state_36679[(8)]);
var inst_36651 = (state_36679[(11)]);
var tmp36702 = inst_36642;
var inst_36642__$1 = tmp36702;
var inst_36643 = inst_36651;
var state_36679__$1 = (function (){var statearr_36708 = state_36679;
(statearr_36708[(7)] = inst_36643);

(statearr_36708[(8)] = inst_36642__$1);

return statearr_36708;
})();
var statearr_36709_38094 = state_36679__$1;
(statearr_36709_38094[(2)] = null);

(statearr_36709_38094[(1)] = (2));


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
var statearr_36711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36711[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36711[(1)] = (1));

return statearr_36711;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36679){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36679);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36717){if((e36717 instanceof Object)){
var ex__34210__auto__ = e36717;
var statearr_36719_38095 = state_36679;
(statearr_36719_38095[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36717;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38097 = state_36679;
state_36679 = G__38097;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36720 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36720[(6)] = c__34274__auto___38068);

return statearr_36720;
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
var G__36724 = arguments.length;
switch (G__36724) {
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
var c__34274__auto___38102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36768){
var state_val_36769 = (state_36768[(1)]);
if((state_val_36769 === (7))){
var inst_36764 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36771_38106 = state_36768__$1;
(statearr_36771_38106[(2)] = inst_36764);

(statearr_36771_38106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (1))){
var inst_36726 = [];
var inst_36727 = inst_36726;
var inst_36728 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36768__$1 = (function (){var statearr_36773 = state_36768;
(statearr_36773[(7)] = inst_36727);

(statearr_36773[(8)] = inst_36728);

return statearr_36773;
})();
var statearr_36774_38107 = state_36768__$1;
(statearr_36774_38107[(2)] = null);

(statearr_36774_38107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (4))){
var inst_36732 = (state_36768[(9)]);
var inst_36732__$1 = (state_36768[(2)]);
var inst_36733 = (inst_36732__$1 == null);
var inst_36734 = cljs.core.not(inst_36733);
var state_36768__$1 = (function (){var statearr_36776 = state_36768;
(statearr_36776[(9)] = inst_36732__$1);

return statearr_36776;
})();
if(inst_36734){
var statearr_36777_38113 = state_36768__$1;
(statearr_36777_38113[(1)] = (5));

} else {
var statearr_36778_38114 = state_36768__$1;
(statearr_36778_38114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (15))){
var inst_36758 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36780_38115 = state_36768__$1;
(statearr_36780_38115[(2)] = inst_36758);

(statearr_36780_38115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (13))){
var state_36768__$1 = state_36768;
var statearr_36781_38116 = state_36768__$1;
(statearr_36781_38116[(2)] = null);

(statearr_36781_38116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (6))){
var inst_36727 = (state_36768[(7)]);
var inst_36753 = inst_36727.length;
var inst_36754 = (inst_36753 > (0));
var state_36768__$1 = state_36768;
if(cljs.core.truth_(inst_36754)){
var statearr_36783_38117 = state_36768__$1;
(statearr_36783_38117[(1)] = (12));

} else {
var statearr_36784_38118 = state_36768__$1;
(statearr_36784_38118[(1)] = (13));

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
var state_36768__$1 = (function (){var statearr_36786 = state_36768;
(statearr_36786[(7)] = inst_36727);

(statearr_36786[(11)] = inst_36748);

(statearr_36786[(8)] = inst_36728);

(statearr_36786[(12)] = inst_36746);

return statearr_36786;
})();
var statearr_36788_38124 = state_36768__$1;
(statearr_36788_38124[(2)] = null);

(statearr_36788_38124[(1)] = (2));


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
var state_36768__$1 = (function (){var statearr_36790 = state_36768;
(statearr_36790[(10)] = inst_36736__$1);

return statearr_36790;
})();
if(cljs.core.truth_(inst_36739)){
var statearr_36791_38126 = state_36768__$1;
(statearr_36791_38126[(1)] = (8));

} else {
var statearr_36792_38128 = state_36768__$1;
(statearr_36792_38128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (14))){
var inst_36761 = (state_36768[(2)]);
var inst_36762 = cljs.core.async.close_BANG_(out);
var state_36768__$1 = (function (){var statearr_36794 = state_36768;
(statearr_36794[(13)] = inst_36761);

return statearr_36794;
})();
var statearr_36796_38130 = state_36768__$1;
(statearr_36796_38130[(2)] = inst_36762);

(statearr_36796_38130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (10))){
var inst_36751 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36797_38131 = state_36768__$1;
(statearr_36797_38131[(2)] = inst_36751);

(statearr_36797_38131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (8))){
var inst_36727 = (state_36768[(7)]);
var inst_36736 = (state_36768[(10)]);
var inst_36732 = (state_36768[(9)]);
var inst_36741 = inst_36727.push(inst_36732);
var tmp36793 = inst_36727;
var inst_36727__$1 = tmp36793;
var inst_36728 = inst_36736;
var state_36768__$1 = (function (){var statearr_36799 = state_36768;
(statearr_36799[(7)] = inst_36727__$1);

(statearr_36799[(14)] = inst_36741);

(statearr_36799[(8)] = inst_36728);

return statearr_36799;
})();
var statearr_36800_38134 = state_36768__$1;
(statearr_36800_38134[(2)] = null);

(statearr_36800_38134[(1)] = (2));


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
}catch (e36803){if((e36803 instanceof Object)){
var ex__34210__auto__ = e36803;
var statearr_36804_38137 = state_36768;
(statearr_36804_38137[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36803;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38138 = state_36768;
state_36768 = G__38138;
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
var state__34276__auto__ = (function (){var statearr_36806 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36806[(6)] = c__34274__auto___38102);

return statearr_36806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
