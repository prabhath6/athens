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
var val_36851 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36851) : fn1.call(null,val_36851));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36851) : fn1.call(null,val_36851));
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
var n__4666__auto___36858 = n;
var x_36859 = (0);
while(true){
if((x_36859 < n__4666__auto___36858)){
(a[x_36859] = x_36859);

var G__36860 = (x_36859 + (1));
x_36859 = G__36860;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34350 = (function (flag,cb,meta34351){
this.flag = flag;
this.cb = cb;
this.meta34351 = meta34351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34352,meta34351__$1){
var self__ = this;
var _34352__$1 = this;
return (new cljs.core.async.t_cljs$core$async34350(self__.flag,self__.cb,meta34351__$1));
}));

(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34352){
var self__ = this;
var _34352__$1 = this;
return self__.meta34351;
}));

(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34351","meta34351",-207253899,null)], null);
}));

(cljs.core.async.t_cljs$core$async34350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34350");

(cljs.core.async.t_cljs$core$async34350.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34350.
 */
cljs.core.async.__GT_t_cljs$core$async34350 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34350(flag__$1,cb__$1,meta34351){
return (new cljs.core.async.t_cljs$core$async34350(flag__$1,cb__$1,meta34351));
});

}

return (new cljs.core.async.t_cljs$core$async34350(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34354_SHARP_){
var G__34359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34354_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34359) : fret.call(null,G__34359));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34355_SHARP_){
var G__34360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34355_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34360) : fret.call(null,G__34360));
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
var G__34372 = arguments.length;
switch (G__34372) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34404 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34413_36882 = state_34411__$1;
(statearr_34413_36882[(2)] = inst_34404);

(statearr_34413_36882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34414_36883 = state_34411__$1;
(statearr_34414_36883[(2)] = null);

(statearr_34414_36883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (4))){
var inst_34387 = (state_34411[(7)]);
var inst_34387__$1 = (state_34411[(2)]);
var inst_34388 = (inst_34387__$1 == null);
var state_34411__$1 = (function (){var statearr_34415 = state_34411;
(statearr_34415[(7)] = inst_34387__$1);

return statearr_34415;
})();
if(cljs.core.truth_(inst_34388)){
var statearr_34416_36885 = state_34411__$1;
(statearr_34416_36885[(1)] = (5));

} else {
var statearr_34419_36886 = state_34411__$1;
(statearr_34419_36886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34424_36888 = state_34411__$1;
(statearr_34424_36888[(2)] = null);

(statearr_34424_36888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (6))){
var inst_34387 = (state_34411[(7)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34411__$1,(11),to,inst_34387);
} else {
if((state_val_34412 === (3))){
var inst_34409 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34411__$1,inst_34409);
} else {
if((state_val_34412 === (12))){
var state_34411__$1 = state_34411;
var statearr_34431_36890 = state_34411__$1;
(statearr_34431_36890[(2)] = null);

(statearr_34431_36890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (2))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34411__$1,(4),from);
} else {
if((state_val_34412 === (11))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
if(cljs.core.truth_(inst_34397)){
var statearr_34432_36891 = state_34411__$1;
(statearr_34432_36891[(1)] = (12));

} else {
var statearr_34433_36893 = state_34411__$1;
(statearr_34433_36893[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36894 = state_34411__$1;
(statearr_34434_36894[(2)] = null);

(statearr_34434_36894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36895 = state_34411__$1;
(statearr_34435_36895[(1)] = (8));

} else {
var statearr_34436_36896 = state_34411__$1;
(statearr_34436_36896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34402 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36898 = state_34411__$1;
(statearr_34437_36898[(2)] = inst_34402);

(statearr_34437_36898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34394 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36899 = state_34411__$1;
(statearr_34438_36899[(2)] = inst_34394);

(statearr_34438_36899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34391 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36901 = state_34411__$1;
(statearr_34439_36901[(2)] = inst_34391);

(statearr_34439_36901[(1)] = (10));


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
var statearr_34442_36903 = state_34411;
(statearr_34442_36903[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36904 = state_34411;
state_34411 = G__36904;
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
(statearr_34443[(6)] = c__34274__auto___36880);

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
var c__34274__auto___36907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34457_36911 = state_34452;
(statearr_34457_36911[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36912 = state_34452;
state_34452 = G__36912;
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
(statearr_34458[(6)] = c__34274__auto___36907);

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
var n__4666__auto___36915 = n;
var __36916 = (0);
while(true){
if((__36916 < n__4666__auto___36915)){
var G__34463_36917 = type;
var G__34463_36918__$1 = (((G__34463_36917 instanceof cljs.core.Keyword))?G__34463_36917.fqn:null);
switch (G__34463_36918__$1) {
case "compute":
var c__34274__auto___36920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34274__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36916,c__34274__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (state_34477){
var state_val_34478 = (state_34477[(1)]);
if((state_val_34478 === (1))){
var state_34477__$1 = state_34477;
var statearr_34482_36922 = state_34477__$1;
(statearr_34482_36922[(2)] = null);

(statearr_34482_36922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (2))){
var state_34477__$1 = state_34477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34477__$1,(4),jobs);
} else {
if((state_val_34478 === (3))){
var inst_34474 = (state_34477[(2)]);
var state_34477__$1 = state_34477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34477__$1,inst_34474);
} else {
if((state_val_34478 === (4))){
var inst_34466 = (state_34477[(2)]);
var inst_34467 = process(inst_34466);
var state_34477__$1 = state_34477;
if(cljs.core.truth_(inst_34467)){
var statearr_34483_36924 = state_34477__$1;
(statearr_34483_36924[(1)] = (5));

} else {
var statearr_34485_36926 = state_34477__$1;
(statearr_34485_36926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (5))){
var state_34477__$1 = state_34477;
var statearr_34486_36927 = state_34477__$1;
(statearr_34486_36927[(2)] = null);

(statearr_34486_36927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (6))){
var state_34477__$1 = state_34477;
var statearr_34487_36928 = state_34477__$1;
(statearr_34487_36928[(2)] = null);

(statearr_34487_36928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (7))){
var inst_34472 = (state_34477[(2)]);
var state_34477__$1 = state_34477;
var statearr_34488_36930 = state_34477__$1;
(statearr_34488_36930[(2)] = inst_34472);

(statearr_34488_36930[(1)] = (3));


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
});})(__36916,c__34274__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34206__auto__,c__34274__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34489 = [null,null,null,null,null,null,null];
(statearr_34489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34489[(1)] = (1));

return statearr_34489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34477){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34477);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34490){if((e34490 instanceof Object)){
var ex__34210__auto__ = e34490;
var statearr_34491_36932 = state_34477;
(statearr_34491_36932[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36934 = state_34477;
state_34477 = G__36934;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36916,switch__34206__auto__,c__34274__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34492 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34492[(6)] = c__34274__auto___36920);

return statearr_34492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36916,c__34274__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34274__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36916,c__34274__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (state_34506){
var state_val_34507 = (state_34506[(1)]);
if((state_val_34507 === (1))){
var state_34506__$1 = state_34506;
var statearr_34509_36937 = state_34506__$1;
(statearr_34509_36937[(2)] = null);

(statearr_34509_36937[(1)] = (2));


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
var statearr_34511_36939 = state_34506__$1;
(statearr_34511_36939[(1)] = (5));

} else {
var statearr_34512_36940 = state_34506__$1;
(statearr_34512_36940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34507 === (5))){
var state_34506__$1 = state_34506;
var statearr_34513_36942 = state_34506__$1;
(statearr_34513_36942[(2)] = null);

(statearr_34513_36942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34507 === (6))){
var state_34506__$1 = state_34506;
var statearr_34514_36943 = state_34506__$1;
(statearr_34514_36943[(2)] = null);

(statearr_34514_36943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34507 === (7))){
var inst_34502 = (state_34506[(2)]);
var state_34506__$1 = state_34506;
var statearr_34515_36944 = state_34506__$1;
(statearr_34515_36944[(2)] = inst_34502);

(statearr_34515_36944[(1)] = (3));


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
});})(__36916,c__34274__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34206__auto__,c__34274__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34518 = [null,null,null,null,null,null,null];
(statearr_34518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34518[(1)] = (1));

return statearr_34518;
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
var statearr_34523_36947 = state_34506;
(statearr_34523_36947[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36948 = state_34506;
state_34506 = G__36948;
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
;})(__36916,switch__34206__auto__,c__34274__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34526 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34526[(6)] = c__34274__auto___36935);

return statearr_34526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36916,c__34274__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36918__$1)].join('')));

}

var G__36950 = (__36916 + (1));
__36916 = G__36950;
continue;
} else {
}
break;
}

var c__34274__auto___36951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34548){
var state_val_34549 = (state_34548[(1)]);
if((state_val_34549 === (7))){
var inst_34544 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34551_36953 = state_34548__$1;
(statearr_34551_36953[(2)] = inst_34544);

(statearr_34551_36953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (1))){
var state_34548__$1 = state_34548;
var statearr_34552_36954 = state_34548__$1;
(statearr_34552_36954[(2)] = null);

(statearr_34552_36954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (4))){
var inst_34529 = (state_34548[(7)]);
var inst_34529__$1 = (state_34548[(2)]);
var inst_34530 = (inst_34529__$1 == null);
var state_34548__$1 = (function (){var statearr_34554 = state_34548;
(statearr_34554[(7)] = inst_34529__$1);

return statearr_34554;
})();
if(cljs.core.truth_(inst_34530)){
var statearr_34558_36955 = state_34548__$1;
(statearr_34558_36955[(1)] = (5));

} else {
var statearr_34559_36956 = state_34548__$1;
(statearr_34559_36956[(1)] = (6));

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
var statearr_34565_36964 = state_34548__$1;
(statearr_34565_36964[(2)] = null);

(statearr_34565_36964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (5))){
var inst_34532 = cljs.core.async.close_BANG_(jobs);
var state_34548__$1 = state_34548;
var statearr_34566_36966 = state_34548__$1;
(statearr_34566_36966[(2)] = inst_34532);

(statearr_34566_36966[(1)] = (7));


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
var statearr_34570_36971 = state_34548;
(statearr_34570_36971[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34569;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36972 = state_34548;
state_34548 = G__36972;
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
(statearr_34571[(6)] = c__34274__auto___36951);

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
var statearr_34614_36974 = state_34612__$1;
(statearr_34614_36974[(2)] = inst_34608);

(statearr_34614_36974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36977 = state_34612__$1;
(statearr_34615_36977[(2)] = null);

(statearr_34615_36977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36979 = state_34612__$1;
(statearr_34616_36979[(2)] = null);

(statearr_34616_36979[(1)] = (2));


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
var statearr_34618_36983 = state_34612__$1;
(statearr_34618_36983[(1)] = (5));

} else {
var statearr_34619_36984 = state_34612__$1;
(statearr_34619_36984[(1)] = (6));

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
var statearr_34620_36985 = state_34612__$1;
(statearr_34620_36985[(2)] = inst_34603);

(statearr_34620_36985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36986 = state_34612__$1;
(statearr_34622_36986[(2)] = null);

(statearr_34622_36986[(1)] = (2));


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
var statearr_34623_36987 = state_34612__$1;
(statearr_34623_36987[(1)] = (19));

} else {
var statearr_34624_36988 = state_34612__$1;
(statearr_34624_36988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (3))){
var inst_34610 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34612__$1,inst_34610);
} else {
if((state_val_34613 === (12))){
var inst_34584 = (state_34612[(10)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(14),inst_34584);
} else {
if((state_val_34613 === (2))){
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(4),results);
} else {
if((state_val_34613 === (19))){
var state_34612__$1 = state_34612;
var statearr_34625_36995 = state_34612__$1;
(statearr_34625_36995[(2)] = null);

(statearr_34625_36995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34584);

return statearr_34626;
})();
var statearr_34627_36996 = state_34612__$1;
(statearr_34627_36996[(2)] = null);

(statearr_34627_36996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36997 = state_34612__$1;
(statearr_34628_36997[(2)] = null);

(statearr_34628_36997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36998 = state_34612__$1;
(statearr_34629_36998[(1)] = (8));

} else {
var statearr_34630_37000 = state_34612__$1;
(statearr_34630_37000[(1)] = (9));

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
var statearr_34632_37004 = state_34612__$1;
(statearr_34632_37004[(1)] = (15));

} else {
var statearr_34633_37005 = state_34612__$1;
(statearr_34633_37005[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37008 = state_34612__$1;
(statearr_34634_37008[(2)] = false);

(statearr_34634_37008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34581 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37012 = state_34612__$1;
(statearr_34635_37012[(2)] = inst_34581);

(statearr_34635_37012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37015 = state_34612__$1;
(statearr_34636_37015[(2)] = inst_34595);

(statearr_34636_37015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34578 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37018 = state_34612__$1;
(statearr_34637_37018[(2)] = inst_34578);

(statearr_34637_37018[(1)] = (10));


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
var statearr_34640_37026 = state_34612;
(statearr_34640_37026[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37033 = state_34612;
state_34612 = G__37033;
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
var c__34274__auto___37065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_37068 = state_34673__$1;
(statearr_34675_37068[(2)] = inst_34669);

(statearr_34675_37068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_37070 = state_34673__$1;
(statearr_34676_37070[(2)] = null);

(statearr_34676_37070[(1)] = (2));


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
var statearr_34678_37071 = state_34673__$1;
(statearr_34678_37071[(1)] = (5));

} else {
var statearr_34679_37072 = state_34673__$1;
(statearr_34679_37072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_37076 = state_34673__$1;
(statearr_34680_37076[(2)] = null);

(statearr_34680_37076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_37082 = state_34673__$1;
(statearr_34681_37082[(1)] = (9));

} else {
var statearr_34682_37083 = state_34673__$1;
(statearr_34682_37083[(1)] = (10));

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
var statearr_34683_37084 = state_34673__$1;
(statearr_34683_37084[(2)] = null);

(statearr_34683_37084[(1)] = (2));


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
var statearr_34684_37093 = state_34673__$1;
(statearr_34684_37093[(2)] = tc);

(statearr_34684_37093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_37094 = state_34673__$1;
(statearr_34686_37094[(2)] = inst_34654);

(statearr_34686_37094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34690_37097 = state_34673__$1;
(statearr_34690_37097[(2)] = inst_34667);

(statearr_34690_37097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34691_37099 = state_34673__$1;
(statearr_34691_37099[(2)] = fc);

(statearr_34691_37099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34692_37100 = state_34673__$1;
(statearr_34692_37100[(1)] = (12));

} else {
var statearr_34693_37101 = state_34673__$1;
(statearr_34693_37101[(1)] = (13));

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
var statearr_34694 = [null,null,null,null,null,null,null,null,null];
(statearr_34694[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34694[(1)] = (1));

return statearr_34694;
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
}catch (e34698){if((e34698 instanceof Object)){
var ex__34210__auto__ = e34698;
var statearr_34699_37109 = state_34673;
(statearr_34699_37109[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34698;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37110 = state_34673;
state_34673 = G__37110;
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
var state__34276__auto__ = (function (){var statearr_34702 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34702[(6)] = c__34274__auto___37065);

return statearr_34702;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34726){
var state_val_34727 = (state_34726[(1)]);
if((state_val_34727 === (7))){
var inst_34722 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
var statearr_34728_37118 = state_34726__$1;
(statearr_34728_37118[(2)] = inst_34722);

(statearr_34728_37118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (1))){
var inst_34706 = init;
var state_34726__$1 = (function (){var statearr_34729 = state_34726;
(statearr_34729[(7)] = inst_34706);

return statearr_34729;
})();
var statearr_34730_37120 = state_34726__$1;
(statearr_34730_37120[(2)] = null);

(statearr_34730_37120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (4))){
var inst_34709 = (state_34726[(8)]);
var inst_34709__$1 = (state_34726[(2)]);
var inst_34710 = (inst_34709__$1 == null);
var state_34726__$1 = (function (){var statearr_34731 = state_34726;
(statearr_34731[(8)] = inst_34709__$1);

return statearr_34731;
})();
if(cljs.core.truth_(inst_34710)){
var statearr_34733_37124 = state_34726__$1;
(statearr_34733_37124[(1)] = (5));

} else {
var statearr_34734_37125 = state_34726__$1;
(statearr_34734_37125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (6))){
var inst_34713 = (state_34726[(9)]);
var inst_34706 = (state_34726[(7)]);
var inst_34709 = (state_34726[(8)]);
var inst_34713__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34706,inst_34709) : f.call(null,inst_34706,inst_34709));
var inst_34714 = cljs.core.reduced_QMARK_(inst_34713__$1);
var state_34726__$1 = (function (){var statearr_34735 = state_34726;
(statearr_34735[(9)] = inst_34713__$1);

return statearr_34735;
})();
if(inst_34714){
var statearr_34736_37129 = state_34726__$1;
(statearr_34736_37129[(1)] = (8));

} else {
var statearr_34738_37130 = state_34726__$1;
(statearr_34738_37130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (3))){
var inst_34724 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34726__$1,inst_34724);
} else {
if((state_val_34727 === (2))){
var state_34726__$1 = state_34726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34726__$1,(4),ch);
} else {
if((state_val_34727 === (9))){
var inst_34713 = (state_34726[(9)]);
var inst_34706 = inst_34713;
var state_34726__$1 = (function (){var statearr_34739 = state_34726;
(statearr_34739[(7)] = inst_34706);

return statearr_34739;
})();
var statearr_34740_37137 = state_34726__$1;
(statearr_34740_37137[(2)] = null);

(statearr_34740_37137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (5))){
var inst_34706 = (state_34726[(7)]);
var state_34726__$1 = state_34726;
var statearr_34741_37138 = state_34726__$1;
(statearr_34741_37138[(2)] = inst_34706);

(statearr_34741_37138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (10))){
var inst_34720 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
var statearr_34744_37139 = state_34726__$1;
(statearr_34744_37139[(2)] = inst_34720);

(statearr_34744_37139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (8))){
var inst_34713 = (state_34726[(9)]);
var inst_34716 = cljs.core.deref(inst_34713);
var state_34726__$1 = state_34726;
var statearr_34745_37142 = state_34726__$1;
(statearr_34745_37142[(2)] = inst_34716);

(statearr_34745_37142[(1)] = (10));


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
var statearr_34749 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34749[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34749[(1)] = (1));

return statearr_34749;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34726){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34726);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34750){if((e34750 instanceof Object)){
var ex__34210__auto__ = e34750;
var statearr_34751_37146 = state_34726;
(statearr_34751_37146[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37150 = state_34726;
state_34726 = G__37150;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34726){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34752 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34752[(6)] = c__34274__auto__);

return statearr_34752;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34759){
var state_val_34760 = (state_34759[(1)]);
if((state_val_34760 === (1))){
var inst_34754 = cljs.core.async.reduce(f__$1,init,ch);
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34759__$1,(2),inst_34754);
} else {
if((state_val_34760 === (2))){
var inst_34756 = (state_34759[(2)]);
var inst_34757 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34756) : f__$1.call(null,inst_34756));
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34759__$1,inst_34757);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34761 = [null,null,null,null,null,null,null];
(statearr_34761[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34761[(1)] = (1));

return statearr_34761;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34759){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34759);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34762){if((e34762 instanceof Object)){
var ex__34210__auto__ = e34762;
var statearr_34766_37162 = state_34759;
(statearr_34766_37162[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37163 = state_34759;
state_34759 = G__37163;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34759){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34767 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34767[(6)] = c__34274__auto__);

return statearr_34767;
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
var G__34772 = arguments.length;
switch (G__34772) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34797){
var state_val_34798 = (state_34797[(1)]);
if((state_val_34798 === (7))){
var inst_34779 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34802_37176 = state_34797__$1;
(statearr_34802_37176[(2)] = inst_34779);

(statearr_34802_37176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (1))){
var inst_34773 = cljs.core.seq(coll);
var inst_34774 = inst_34773;
var state_34797__$1 = (function (){var statearr_34803 = state_34797;
(statearr_34803[(7)] = inst_34774);

return statearr_34803;
})();
var statearr_34804_37181 = state_34797__$1;
(statearr_34804_37181[(2)] = null);

(statearr_34804_37181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (4))){
var inst_34774 = (state_34797[(7)]);
var inst_34777 = cljs.core.first(inst_34774);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34797__$1,(7),ch,inst_34777);
} else {
if((state_val_34798 === (13))){
var inst_34791 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34805_37185 = state_34797__$1;
(statearr_34805_37185[(2)] = inst_34791);

(statearr_34805_37185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (6))){
var inst_34782 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34782)){
var statearr_34806_37191 = state_34797__$1;
(statearr_34806_37191[(1)] = (8));

} else {
var statearr_34807_37192 = state_34797__$1;
(statearr_34807_37192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (3))){
var inst_34795 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34797__$1,inst_34795);
} else {
if((state_val_34798 === (12))){
var state_34797__$1 = state_34797;
var statearr_34808_37196 = state_34797__$1;
(statearr_34808_37196[(2)] = null);

(statearr_34808_37196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (2))){
var inst_34774 = (state_34797[(7)]);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34774)){
var statearr_34809_37198 = state_34797__$1;
(statearr_34809_37198[(1)] = (4));

} else {
var statearr_34810_37200 = state_34797__$1;
(statearr_34810_37200[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (11))){
var inst_34788 = cljs.core.async.close_BANG_(ch);
var state_34797__$1 = state_34797;
var statearr_34811_37205 = state_34797__$1;
(statearr_34811_37205[(2)] = inst_34788);

(statearr_34811_37205[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (9))){
var state_34797__$1 = state_34797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34812_37208 = state_34797__$1;
(statearr_34812_37208[(1)] = (11));

} else {
var statearr_34813_37210 = state_34797__$1;
(statearr_34813_37210[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (5))){
var inst_34774 = (state_34797[(7)]);
var state_34797__$1 = state_34797;
var statearr_34814_37216 = state_34797__$1;
(statearr_34814_37216[(2)] = inst_34774);

(statearr_34814_37216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (10))){
var inst_34793 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34815_37217 = state_34797__$1;
(statearr_34815_37217[(2)] = inst_34793);

(statearr_34815_37217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (8))){
var inst_34774 = (state_34797[(7)]);
var inst_34784 = cljs.core.next(inst_34774);
var inst_34774__$1 = inst_34784;
var state_34797__$1 = (function (){var statearr_34816 = state_34797;
(statearr_34816[(7)] = inst_34774__$1);

return statearr_34816;
})();
var statearr_34817_37220 = state_34797__$1;
(statearr_34817_37220[(2)] = null);

(statearr_34817_37220[(1)] = (2));


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
var statearr_34818 = [null,null,null,null,null,null,null,null];
(statearr_34818[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34818[(1)] = (1));

return statearr_34818;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34797){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34797);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34819){if((e34819 instanceof Object)){
var ex__34210__auto__ = e34819;
var statearr_34820_37224 = state_34797;
(statearr_34820_37224[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37225 = state_34797;
state_34797 = G__37225;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34821 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34821[(6)] = c__34274__auto__);

return statearr_34821;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34835 = (function (ch,cs,meta34836){
this.ch = ch;
this.cs = cs;
this.meta34836 = meta34836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34837,meta34836__$1){
var self__ = this;
var _34837__$1 = this;
return (new cljs.core.async.t_cljs$core$async34835(self__.ch,self__.cs,meta34836__$1));
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34837){
var self__ = this;
var _34837__$1 = this;
return self__.meta34836;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34836","meta34836",-820760856,null)], null);
}));

(cljs.core.async.t_cljs$core$async34835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34835");

(cljs.core.async.t_cljs$core$async34835.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34835.
 */
cljs.core.async.__GT_t_cljs$core$async34835 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34835(ch__$1,cs__$1,meta34836){
return (new cljs.core.async.t_cljs$core$async34835(ch__$1,cs__$1,meta34836));
});

}

return (new cljs.core.async.t_cljs$core$async34835(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___37270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37275 = state_34978__$1;
(statearr_34980_37275[(2)] = inst_34974);

(statearr_34980_37275[(1)] = (3));


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
var statearr_34982_37280 = state_34978__$1;
(statearr_34982_37280[(1)] = (22));

} else {
var statearr_34983_37281 = state_34978__$1;
(statearr_34983_37281[(1)] = (23));

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
var state_34978__$1 = (function (){var statearr_34984 = state_34978;
(statearr_34984[(10)] = inst_34926__$1);

return statearr_34984;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34985_37282 = state_34978__$1;
(statearr_34985_37282[(1)] = (30));

} else {
var statearr_34986_37283 = state_34978__$1;
(statearr_34986_37283[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34987_37286 = state_34978__$1;
(statearr_34987_37286[(2)] = null);

(statearr_34987_37286[(1)] = (2));


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
var state_34978__$1 = (function (){var statearr_34988 = state_34978;
(statearr_34988[(13)] = inst_34857);

(statearr_34988[(14)] = inst_34856);

(statearr_34988[(15)] = inst_34858);

(statearr_34988[(16)] = inst_34896);

(statearr_34988[(17)] = inst_34855);

return statearr_34988;
})();
var statearr_34989_37291 = state_34978__$1;
(statearr_34989_37291[(2)] = null);

(statearr_34989_37291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34993_37292 = state_34978__$1;
(statearr_34993_37292[(2)] = null);

(statearr_34993_37292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (4))){
var inst_34846 = (state_34978[(9)]);
var inst_34846__$1 = (state_34978[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34978__$1 = (function (){var statearr_34994 = state_34978;
(statearr_34994[(9)] = inst_34846__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_34995_37293 = state_34978__$1;
(statearr_34995_37293[(1)] = (5));

} else {
var statearr_34996_37294 = state_34978__$1;
(statearr_34996_37294[(1)] = (6));

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
var tmp34990 = inst_34857;
var tmp34991 = inst_34856;
var tmp34992 = inst_34855;
var inst_34855__$1 = tmp34992;
var inst_34856__$1 = tmp34991;
var inst_34857__$1 = tmp34990;
var inst_34858__$1 = inst_34874;
var state_34978__$1 = (function (){var statearr_34997 = state_34978;
(statearr_34997[(18)] = inst_34873);

(statearr_34997[(13)] = inst_34857__$1);

(statearr_34997[(14)] = inst_34856__$1);

(statearr_34997[(15)] = inst_34858__$1);

(statearr_34997[(17)] = inst_34855__$1);

return statearr_34997;
})();
var statearr_34998_37304 = state_34978__$1;
(statearr_34998_37304[(2)] = null);

(statearr_34998_37304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35002_37307 = state_34978__$1;
(statearr_35002_37307[(2)] = inst_34900);

(statearr_35002_37307[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (31))){
var inst_34926 = (state_34978[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34978__$1 = (function (){var statearr_35003 = state_34978;
(statearr_35003[(19)] = inst_34930);

return statearr_35003;
})();
var statearr_35004_37310 = state_34978__$1;
(statearr_35004_37310[(2)] = inst_34931);

(statearr_35004_37310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (32))){
var inst_34918 = (state_34978[(20)]);
var inst_34919 = (state_34978[(11)]);
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34933 = (state_34978[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp34999 = inst_34918;
var tmp35000 = inst_34919;
var tmp35001 = inst_34920;
var inst_34918__$1 = tmp34999;
var inst_34919__$1 = tmp35000;
var inst_34920__$1 = tmp35001;
var inst_34921__$1 = inst_34934;
var state_34978__$1 = (function (){var statearr_35005 = state_34978;
(statearr_35005[(20)] = inst_34918__$1);

(statearr_35005[(22)] = inst_34933);

(statearr_35005[(11)] = inst_34919__$1);

(statearr_35005[(21)] = inst_34920__$1);

(statearr_35005[(12)] = inst_34921__$1);

return statearr_35005;
})();
var statearr_35006_37324 = state_34978__$1;
(statearr_35006_37324[(2)] = null);

(statearr_35006_37324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (40))){
var inst_34946 = (state_34978[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34978__$1 = (function (){var statearr_35007 = state_34978;
(statearr_35007[(24)] = inst_34950);

return statearr_35007;
})();
var statearr_35008_37325 = state_34978__$1;
(statearr_35008_37325[(2)] = inst_34951);

(statearr_35008_37325[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35009_37330 = state_34978__$1;
(statearr_35009_37330[(1)] = (36));

} else {
var statearr_35010_37331 = state_34978__$1;
(statearr_35010_37331[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35011_37337 = state_34978__$1;
(statearr_35011_37337[(2)] = inst_34870);

(statearr_35011_37337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35012_37340 = state_34978__$1;
(statearr_35012_37340[(2)] = inst_34893);

(statearr_35012_37340[(1)] = (24));


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
var state_34978__$1 = (function (){var statearr_35013 = state_34978;
(statearr_35013[(20)] = inst_34918);

(statearr_35013[(11)] = inst_34919);

(statearr_35013[(21)] = inst_34920);

(statearr_35013[(12)] = inst_34921);

return statearr_35013;
})();
var statearr_35014_37346 = state_34978__$1;
(statearr_35014_37346[(2)] = null);

(statearr_35014_37346[(1)] = (25));


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
var state_34978__$1 = (function (){var statearr_35015 = state_34978;
(statearr_35015[(20)] = inst_34918);

(statearr_35015[(11)] = inst_34919);

(statearr_35015[(21)] = inst_34920);

(statearr_35015[(27)] = inst_34953);

(statearr_35015[(12)] = inst_34921);

return statearr_35015;
})();
var statearr_35016_37357 = state_34978__$1;
(statearr_35016_37357[(2)] = null);

(statearr_35016_37357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35017_37358 = state_34978__$1;
(statearr_35017_37358[(2)] = null);

(statearr_35017_37358[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35018_37361 = state_34978__$1;
(statearr_35018_37361[(2)] = inst_34962);

(statearr_35018_37361[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35019 = state_34978;
(statearr_35019[(28)] = inst_34971);

return statearr_35019;
})();
var statearr_35020_37364 = state_34978__$1;
(statearr_35020_37364[(2)] = null);

(statearr_35020_37364[(1)] = (2));


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
var state_34978__$1 = (function (){var statearr_35022 = state_34978;
(statearr_35022[(20)] = inst_34918);

(statearr_35022[(29)] = inst_34910__$1);

(statearr_35022[(11)] = inst_34919);

(statearr_35022[(21)] = inst_34920);

(statearr_35022[(12)] = inst_34921);

(statearr_35022[(30)] = inst_34912);

return statearr_35022;
})();
var statearr_35024_37372 = state_34978__$1;
(statearr_35024_37372[(2)] = null);

(statearr_35024_37372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35028 = state_34978;
(statearr_35028[(25)] = inst_34937__$1);

return statearr_35028;
})();
if(inst_34937__$1){
var statearr_35029_37374 = state_34978__$1;
(statearr_35029_37374[(1)] = (33));

} else {
var statearr_35031_37376 = state_34978__$1;
(statearr_35031_37376[(1)] = (34));

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
var statearr_35032_37382 = state_34978__$1;
(statearr_35032_37382[(1)] = (27));

} else {
var statearr_35033_37384 = state_34978__$1;
(statearr_35033_37384[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35034_37385 = state_34978__$1;
(statearr_35034_37385[(2)] = null);

(statearr_35034_37385[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35035_37387 = state_34978__$1;
(statearr_35035_37387[(2)] = null);

(statearr_35035_37387[(1)] = (18));


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
var statearr_35040_37391 = state_34978__$1;
(statearr_35040_37391[(2)] = inst_34905);

(statearr_35040_37391[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35043_37394 = state_34978__$1;
(statearr_35043_37394[(2)] = null);

(statearr_35043_37394[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35044_37397 = state_34978__$1;
(statearr_35044_37397[(2)] = inst_34960);

(statearr_35044_37397[(1)] = (29));


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
var state_34978__$1 = (function (){var statearr_35045 = state_34978;
(statearr_35045[(13)] = inst_34857);

(statearr_35045[(14)] = inst_34856);

(statearr_35045[(15)] = inst_34858);

(statearr_35045[(17)] = inst_34855);

return statearr_35045;
})();
var statearr_35046_37405 = state_34978__$1;
(statearr_35046_37405[(2)] = null);

(statearr_35046_37405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35047 = state_34978;
(statearr_35047[(7)] = inst_34877__$1);

return statearr_35047;
})();
if(inst_34877__$1){
var statearr_35048_37407 = state_34978__$1;
(statearr_35048_37407[(1)] = (16));

} else {
var statearr_35049_37408 = state_34978__$1;
(statearr_35049_37408[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35052_37410 = state_34978__$1;
(statearr_35052_37410[(2)] = inst_34907);

(statearr_35052_37410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35055 = state_34978;
(statearr_35055[(13)] = inst_34857);

(statearr_35055[(14)] = inst_34856);

(statearr_35055[(15)] = inst_34858);

(statearr_35055[(17)] = inst_34855);

return statearr_35055;
})();
var statearr_35058_37415 = state_34978__$1;
(statearr_35058_37415[(2)] = null);

(statearr_35058_37415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35059_37419 = state_34978__$1;
(statearr_35059_37419[(2)] = null);

(statearr_35059_37419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35060_37420 = state_34978__$1;
(statearr_35060_37420[(2)] = inst_34968);

(statearr_35060_37420[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35061 = state_34978;
(statearr_35061[(31)] = inst_34964);

return statearr_35061;
})();
if(inst_34965){
var statearr_35062_37422 = state_34978__$1;
(statearr_35062_37422[(1)] = (42));

} else {
var statearr_35063_37423 = state_34978__$1;
(statearr_35063_37423[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35064_37428 = state_34978__$1;
(statearr_35064_37428[(1)] = (19));

} else {
var statearr_35067_37429 = state_34978__$1;
(statearr_35067_37429[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35069_37430 = state_34978__$1;
(statearr_35069_37430[(2)] = inst_34957);

(statearr_35069_37430[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35073_37431 = state_34978__$1;
(statearr_35073_37431[(2)] = null);

(statearr_35073_37431[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35074 = state_34978;
(statearr_35074[(26)] = inst_34867);

return statearr_35074;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35075_37437 = state_34978__$1;
(statearr_35075_37437[(1)] = (13));

} else {
var statearr_35076_37438 = state_34978__$1;
(statearr_35076_37438[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35080_37440 = state_34978__$1;
(statearr_35080_37440[(2)] = inst_34903);

(statearr_35080_37440[(1)] = (12));


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
var state_34978__$1 = (function (){var statearr_35082 = state_34978;
(statearr_35082[(23)] = inst_34946__$1);

return statearr_35082;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35091_37445 = state_34978__$1;
(statearr_35091_37445[(1)] = (39));

} else {
var statearr_35097_37448 = state_34978__$1;
(statearr_35097_37448[(1)] = (40));

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
var statearr_35100_37454 = state_34978__$1;
(statearr_35100_37454[(1)] = (10));

} else {
var statearr_35101_37458 = state_34978__$1;
(statearr_35101_37458[(1)] = (11));

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
var statearr_35106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35106[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35106[(1)] = (1));

return statearr_35106;
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
}catch (e35107){if((e35107 instanceof Object)){
var ex__34210__auto__ = e35107;
var statearr_35109_37463 = state_34978;
(statearr_35109_37463[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37464 = state_34978;
state_34978 = G__37464;
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
var state__34276__auto__ = (function (){var statearr_35117 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35117[(6)] = c__34274__auto___37270);

return statearr_35117;
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
var G__35130 = arguments.length;
switch (G__35130) {
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
var len__4789__auto___37493 = arguments.length;
var i__4790__auto___37494 = (0);
while(true){
if((i__4790__auto___37494 < len__4789__auto___37493)){
args__4795__auto__.push((arguments[i__4790__auto___37494]));

var G__37496 = (i__4790__auto___37494 + (1));
i__4790__auto___37494 = G__37496;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35238){
var map__35240 = p__35238;
var map__35240__$1 = (((((!((map__35240 == null))))?(((((map__35240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35240):map__35240);
var opts = map__35240__$1;
var statearr_35250_37504 = state;
(statearr_35250_37504[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35257_37506 = state;
(statearr_35257_37506[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35263_37507 = state;
(statearr_35263_37507[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35221){
var G__35222 = cljs.core.first(seq35221);
var seq35221__$1 = cljs.core.next(seq35221);
var G__35223 = cljs.core.first(seq35221__$1);
var seq35221__$2 = cljs.core.next(seq35221__$1);
var G__35224 = cljs.core.first(seq35221__$2);
var seq35221__$3 = cljs.core.next(seq35221__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35222,G__35223,G__35224,seq35221__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35310 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35311){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35311 = meta35311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35312,meta35311__$1){
var self__ = this;
var _35312__$1 = this;
return (new cljs.core.async.t_cljs$core$async35310(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35311__$1));
}));

(cljs.core.async.t_cljs$core$async35310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35312){
var self__ = this;
var _35312__$1 = this;
return self__.meta35311;
}));

(cljs.core.async.t_cljs$core$async35310.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35310.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35310.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35310.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35310.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35310.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35310.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35311","meta35311",1504689739,null)], null);
}));

(cljs.core.async.t_cljs$core$async35310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35310");

(cljs.core.async.t_cljs$core$async35310.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35310.
 */
cljs.core.async.__GT_t_cljs$core$async35310 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35310(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35311){
return (new cljs.core.async.t_cljs$core$async35310(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35311));
});

}

return (new cljs.core.async.t_cljs$core$async35310(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35486){
var state_val_35487 = (state_35486[(1)]);
if((state_val_35487 === (7))){
var inst_35388 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35499_37555 = state_35486__$1;
(statearr_35499_37555[(2)] = inst_35388);

(statearr_35499_37555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (20))){
var inst_35400 = (state_35486[(7)]);
var state_35486__$1 = state_35486;
var statearr_35505_37562 = state_35486__$1;
(statearr_35505_37562[(2)] = inst_35400);

(statearr_35505_37562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (27))){
var state_35486__$1 = state_35486;
var statearr_35507_37564 = state_35486__$1;
(statearr_35507_37564[(2)] = null);

(statearr_35507_37564[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (1))){
var inst_35375 = (state_35486[(8)]);
var inst_35375__$1 = calc_state();
var inst_35377 = (inst_35375__$1 == null);
var inst_35378 = cljs.core.not(inst_35377);
var state_35486__$1 = (function (){var statearr_35508 = state_35486;
(statearr_35508[(8)] = inst_35375__$1);

return statearr_35508;
})();
if(inst_35378){
var statearr_35511_37568 = state_35486__$1;
(statearr_35511_37568[(1)] = (2));

} else {
var statearr_35512_37572 = state_35486__$1;
(statearr_35512_37572[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (24))){
var inst_35424 = (state_35486[(9)]);
var inst_35449 = (state_35486[(10)]);
var inst_35433 = (state_35486[(11)]);
var inst_35449__$1 = (inst_35424.cljs$core$IFn$_invoke$arity$1 ? inst_35424.cljs$core$IFn$_invoke$arity$1(inst_35433) : inst_35424.call(null,inst_35433));
var state_35486__$1 = (function (){var statearr_35515 = state_35486;
(statearr_35515[(10)] = inst_35449__$1);

return statearr_35515;
})();
if(cljs.core.truth_(inst_35449__$1)){
var statearr_35518_37580 = state_35486__$1;
(statearr_35518_37580[(1)] = (29));

} else {
var statearr_35522_37581 = state_35486__$1;
(statearr_35522_37581[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (4))){
var inst_35391 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35391)){
var statearr_35525_37583 = state_35486__$1;
(statearr_35525_37583[(1)] = (8));

} else {
var statearr_35528_37585 = state_35486__$1;
(statearr_35528_37585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (15))){
var inst_35418 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35418)){
var statearr_35529_37592 = state_35486__$1;
(statearr_35529_37592[(1)] = (19));

} else {
var statearr_35531_37594 = state_35486__$1;
(statearr_35531_37594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (21))){
var inst_35423 = (state_35486[(12)]);
var inst_35423__$1 = (state_35486[(2)]);
var inst_35424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35423__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35423__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35423__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35486__$1 = (function (){var statearr_35536 = state_35486;
(statearr_35536[(12)] = inst_35423__$1);

(statearr_35536[(9)] = inst_35424);

(statearr_35536[(13)] = inst_35425);

return statearr_35536;
})();
return cljs.core.async.ioc_alts_BANG_(state_35486__$1,(22),inst_35426);
} else {
if((state_val_35487 === (31))){
var inst_35458 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35458)){
var statearr_35542_37607 = state_35486__$1;
(statearr_35542_37607[(1)] = (32));

} else {
var statearr_35546_37608 = state_35486__$1;
(statearr_35546_37608[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (32))){
var inst_35432 = (state_35486[(14)]);
var state_35486__$1 = state_35486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35486__$1,(35),out,inst_35432);
} else {
if((state_val_35487 === (33))){
var inst_35423 = (state_35486[(12)]);
var inst_35400 = inst_35423;
var state_35486__$1 = (function (){var statearr_35547 = state_35486;
(statearr_35547[(7)] = inst_35400);

return statearr_35547;
})();
var statearr_35550_37611 = state_35486__$1;
(statearr_35550_37611[(2)] = null);

(statearr_35550_37611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (13))){
var inst_35400 = (state_35486[(7)]);
var inst_35407 = inst_35400.cljs$lang$protocol_mask$partition0$;
var inst_35408 = (inst_35407 & (64));
var inst_35409 = inst_35400.cljs$core$ISeq$;
var inst_35410 = (cljs.core.PROTOCOL_SENTINEL === inst_35409);
var inst_35411 = ((inst_35408) || (inst_35410));
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35411)){
var statearr_35553_37620 = state_35486__$1;
(statearr_35553_37620[(1)] = (16));

} else {
var statearr_35554_37621 = state_35486__$1;
(statearr_35554_37621[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (22))){
var inst_35432 = (state_35486[(14)]);
var inst_35433 = (state_35486[(11)]);
var inst_35431 = (state_35486[(2)]);
var inst_35432__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35431,(0),null);
var inst_35433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35431,(1),null);
var inst_35436 = (inst_35432__$1 == null);
var inst_35437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35433__$1,change);
var inst_35438 = ((inst_35436) || (inst_35437));
var state_35486__$1 = (function (){var statearr_35576 = state_35486;
(statearr_35576[(14)] = inst_35432__$1);

(statearr_35576[(11)] = inst_35433__$1);

return statearr_35576;
})();
if(cljs.core.truth_(inst_35438)){
var statearr_35577_37634 = state_35486__$1;
(statearr_35577_37634[(1)] = (23));

} else {
var statearr_35579_37635 = state_35486__$1;
(statearr_35579_37635[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (36))){
var inst_35423 = (state_35486[(12)]);
var inst_35400 = inst_35423;
var state_35486__$1 = (function (){var statearr_35582 = state_35486;
(statearr_35582[(7)] = inst_35400);

return statearr_35582;
})();
var statearr_35584_37638 = state_35486__$1;
(statearr_35584_37638[(2)] = null);

(statearr_35584_37638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (29))){
var inst_35449 = (state_35486[(10)]);
var state_35486__$1 = state_35486;
var statearr_35585_37642 = state_35486__$1;
(statearr_35585_37642[(2)] = inst_35449);

(statearr_35585_37642[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (6))){
var state_35486__$1 = state_35486;
var statearr_35587_37645 = state_35486__$1;
(statearr_35587_37645[(2)] = false);

(statearr_35587_37645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (28))){
var inst_35445 = (state_35486[(2)]);
var inst_35446 = calc_state();
var inst_35400 = inst_35446;
var state_35486__$1 = (function (){var statearr_35592 = state_35486;
(statearr_35592[(15)] = inst_35445);

(statearr_35592[(7)] = inst_35400);

return statearr_35592;
})();
var statearr_35598_37649 = state_35486__$1;
(statearr_35598_37649[(2)] = null);

(statearr_35598_37649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (25))){
var inst_35480 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35614_37651 = state_35486__$1;
(statearr_35614_37651[(2)] = inst_35480);

(statearr_35614_37651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (34))){
var inst_35478 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35621_37657 = state_35486__$1;
(statearr_35621_37657[(2)] = inst_35478);

(statearr_35621_37657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (17))){
var state_35486__$1 = state_35486;
var statearr_35628_37664 = state_35486__$1;
(statearr_35628_37664[(2)] = false);

(statearr_35628_37664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (3))){
var state_35486__$1 = state_35486;
var statearr_35634_37666 = state_35486__$1;
(statearr_35634_37666[(2)] = false);

(statearr_35634_37666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (12))){
var inst_35482 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35486__$1,inst_35482);
} else {
if((state_val_35487 === (2))){
var inst_35375 = (state_35486[(8)]);
var inst_35380 = inst_35375.cljs$lang$protocol_mask$partition0$;
var inst_35381 = (inst_35380 & (64));
var inst_35382 = inst_35375.cljs$core$ISeq$;
var inst_35383 = (cljs.core.PROTOCOL_SENTINEL === inst_35382);
var inst_35384 = ((inst_35381) || (inst_35383));
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35384)){
var statearr_35644_37677 = state_35486__$1;
(statearr_35644_37677[(1)] = (5));

} else {
var statearr_35647_37678 = state_35486__$1;
(statearr_35647_37678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (23))){
var inst_35432 = (state_35486[(14)]);
var inst_35440 = (inst_35432 == null);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35440)){
var statearr_35652_37679 = state_35486__$1;
(statearr_35652_37679[(1)] = (26));

} else {
var statearr_35654_37680 = state_35486__$1;
(statearr_35654_37680[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (35))){
var inst_35462 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35462)){
var statearr_35659_37681 = state_35486__$1;
(statearr_35659_37681[(1)] = (36));

} else {
var statearr_35662_37682 = state_35486__$1;
(statearr_35662_37682[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (19))){
var inst_35400 = (state_35486[(7)]);
var inst_35420 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35400);
var state_35486__$1 = state_35486;
var statearr_35667_37683 = state_35486__$1;
(statearr_35667_37683[(2)] = inst_35420);

(statearr_35667_37683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (11))){
var inst_35400 = (state_35486[(7)]);
var inst_35404 = (inst_35400 == null);
var inst_35405 = cljs.core.not(inst_35404);
var state_35486__$1 = state_35486;
if(inst_35405){
var statearr_35673_37684 = state_35486__$1;
(statearr_35673_37684[(1)] = (13));

} else {
var statearr_35680_37685 = state_35486__$1;
(statearr_35680_37685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (9))){
var inst_35375 = (state_35486[(8)]);
var state_35486__$1 = state_35486;
var statearr_35685_37686 = state_35486__$1;
(statearr_35685_37686[(2)] = inst_35375);

(statearr_35685_37686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (5))){
var state_35486__$1 = state_35486;
var statearr_35691_37692 = state_35486__$1;
(statearr_35691_37692[(2)] = true);

(statearr_35691_37692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (14))){
var state_35486__$1 = state_35486;
var statearr_35696_37694 = state_35486__$1;
(statearr_35696_37694[(2)] = false);

(statearr_35696_37694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (26))){
var inst_35433 = (state_35486[(11)]);
var inst_35442 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35433);
var state_35486__$1 = state_35486;
var statearr_35703_37697 = state_35486__$1;
(statearr_35703_37697[(2)] = inst_35442);

(statearr_35703_37697[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (16))){
var state_35486__$1 = state_35486;
var statearr_35709_37700 = state_35486__$1;
(statearr_35709_37700[(2)] = true);

(statearr_35709_37700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (38))){
var inst_35474 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35722_37702 = state_35486__$1;
(statearr_35722_37702[(2)] = inst_35474);

(statearr_35722_37702[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (30))){
var inst_35424 = (state_35486[(9)]);
var inst_35425 = (state_35486[(13)]);
var inst_35433 = (state_35486[(11)]);
var inst_35452 = cljs.core.empty_QMARK_(inst_35424);
var inst_35453 = (inst_35425.cljs$core$IFn$_invoke$arity$1 ? inst_35425.cljs$core$IFn$_invoke$arity$1(inst_35433) : inst_35425.call(null,inst_35433));
var inst_35454 = cljs.core.not(inst_35453);
var inst_35455 = ((inst_35452) && (inst_35454));
var state_35486__$1 = state_35486;
var statearr_35723_37703 = state_35486__$1;
(statearr_35723_37703[(2)] = inst_35455);

(statearr_35723_37703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (10))){
var inst_35375 = (state_35486[(8)]);
var inst_35396 = (state_35486[(2)]);
var inst_35397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35396,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35396,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35396,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35400 = inst_35375;
var state_35486__$1 = (function (){var statearr_35724 = state_35486;
(statearr_35724[(16)] = inst_35399);

(statearr_35724[(17)] = inst_35398);

(statearr_35724[(18)] = inst_35397);

(statearr_35724[(7)] = inst_35400);

return statearr_35724;
})();
var statearr_35725_37706 = state_35486__$1;
(statearr_35725_37706[(2)] = null);

(statearr_35725_37706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (18))){
var inst_35415 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35726_37709 = state_35486__$1;
(statearr_35726_37709[(2)] = inst_35415);

(statearr_35726_37709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (37))){
var state_35486__$1 = state_35486;
var statearr_35728_37710 = state_35486__$1;
(statearr_35728_37710[(2)] = null);

(statearr_35728_37710[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (8))){
var inst_35375 = (state_35486[(8)]);
var inst_35393 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35375);
var state_35486__$1 = state_35486;
var statearr_35730_37711 = state_35486__$1;
(statearr_35730_37711[(2)] = inst_35393);

(statearr_35730_37711[(1)] = (10));


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
var statearr_35731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35731[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35731[(1)] = (1));

return statearr_35731;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35486){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35486);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35734){if((e35734 instanceof Object)){
var ex__34210__auto__ = e35734;
var statearr_35735_37719 = state_35486;
(statearr_35735_37719[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37721 = state_35486;
state_35486 = G__37721;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35486){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35736 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35736[(6)] = c__34274__auto___37540);

return statearr_35736;
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
var G__35757 = arguments.length;
switch (G__35757) {
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
var G__35791 = arguments.length;
switch (G__35791) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35777_SHARP_){
if(cljs.core.truth_((p1__35777_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35777_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35777_SHARP_.call(null,topic)))){
return p1__35777_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35777_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35797 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35797 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35798){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35798 = meta35798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35799,meta35798__$1){
var self__ = this;
var _35799__$1 = this;
return (new cljs.core.async.t_cljs$core$async35797(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35798__$1));
}));

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35799){
var self__ = this;
var _35799__$1 = this;
return self__.meta35798;
}));

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35797.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35798","meta35798",1559338746,null)], null);
}));

(cljs.core.async.t_cljs$core$async35797.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35797");

(cljs.core.async.t_cljs$core$async35797.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35797");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35797.
 */
cljs.core.async.__GT_t_cljs$core$async35797 = (function cljs$core$async$__GT_t_cljs$core$async35797(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35798){
return (new cljs.core.async.t_cljs$core$async35797(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35798));
});

}

return (new cljs.core.async.t_cljs$core$async35797(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35896){
var state_val_35898 = (state_35896[(1)]);
if((state_val_35898 === (7))){
var inst_35890 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35900_37809 = state_35896__$1;
(statearr_35900_37809[(2)] = inst_35890);

(statearr_35900_37809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (20))){
var state_35896__$1 = state_35896;
var statearr_35904_37811 = state_35896__$1;
(statearr_35904_37811[(2)] = null);

(statearr_35904_37811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (1))){
var state_35896__$1 = state_35896;
var statearr_35905_37812 = state_35896__$1;
(statearr_35905_37812[(2)] = null);

(statearr_35905_37812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (24))){
var inst_35869 = (state_35896[(7)]);
var inst_35882 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35869);
var state_35896__$1 = state_35896;
var statearr_35910_37816 = state_35896__$1;
(statearr_35910_37816[(2)] = inst_35882);

(statearr_35910_37816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (4))){
var inst_35817 = (state_35896[(8)]);
var inst_35817__$1 = (state_35896[(2)]);
var inst_35818 = (inst_35817__$1 == null);
var state_35896__$1 = (function (){var statearr_35911 = state_35896;
(statearr_35911[(8)] = inst_35817__$1);

return statearr_35911;
})();
if(cljs.core.truth_(inst_35818)){
var statearr_35912_37820 = state_35896__$1;
(statearr_35912_37820[(1)] = (5));

} else {
var statearr_35913_37823 = state_35896__$1;
(statearr_35913_37823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (15))){
var inst_35862 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35916_37825 = state_35896__$1;
(statearr_35916_37825[(2)] = inst_35862);

(statearr_35916_37825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (21))){
var inst_35887 = (state_35896[(2)]);
var state_35896__$1 = (function (){var statearr_35919 = state_35896;
(statearr_35919[(9)] = inst_35887);

return statearr_35919;
})();
var statearr_35920_37830 = state_35896__$1;
(statearr_35920_37830[(2)] = null);

(statearr_35920_37830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (13))){
var inst_35844 = (state_35896[(10)]);
var inst_35846 = cljs.core.chunked_seq_QMARK_(inst_35844);
var state_35896__$1 = state_35896;
if(inst_35846){
var statearr_35922_37835 = state_35896__$1;
(statearr_35922_37835[(1)] = (16));

} else {
var statearr_35925_37836 = state_35896__$1;
(statearr_35925_37836[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (22))){
var inst_35878 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
if(cljs.core.truth_(inst_35878)){
var statearr_35930_37837 = state_35896__$1;
(statearr_35930_37837[(1)] = (23));

} else {
var statearr_35932_37838 = state_35896__$1;
(statearr_35932_37838[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (6))){
var inst_35817 = (state_35896[(8)]);
var inst_35869 = (state_35896[(7)]);
var inst_35871 = (state_35896[(11)]);
var inst_35869__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35817) : topic_fn.call(null,inst_35817));
var inst_35870 = cljs.core.deref(mults);
var inst_35871__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35870,inst_35869__$1);
var state_35896__$1 = (function (){var statearr_35937 = state_35896;
(statearr_35937[(7)] = inst_35869__$1);

(statearr_35937[(11)] = inst_35871__$1);

return statearr_35937;
})();
if(cljs.core.truth_(inst_35871__$1)){
var statearr_35938_37846 = state_35896__$1;
(statearr_35938_37846[(1)] = (19));

} else {
var statearr_35939_37848 = state_35896__$1;
(statearr_35939_37848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (25))){
var inst_35884 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35941_37852 = state_35896__$1;
(statearr_35941_37852[(2)] = inst_35884);

(statearr_35941_37852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (17))){
var inst_35844 = (state_35896[(10)]);
var inst_35853 = cljs.core.first(inst_35844);
var inst_35854 = cljs.core.async.muxch_STAR_(inst_35853);
var inst_35855 = cljs.core.async.close_BANG_(inst_35854);
var inst_35856 = cljs.core.next(inst_35844);
var inst_35827 = inst_35856;
var inst_35828 = null;
var inst_35829 = (0);
var inst_35830 = (0);
var state_35896__$1 = (function (){var statearr_35944 = state_35896;
(statearr_35944[(12)] = inst_35829);

(statearr_35944[(13)] = inst_35828);

(statearr_35944[(14)] = inst_35827);

(statearr_35944[(15)] = inst_35830);

(statearr_35944[(16)] = inst_35855);

return statearr_35944;
})();
var statearr_35945_37859 = state_35896__$1;
(statearr_35945_37859[(2)] = null);

(statearr_35945_37859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (3))){
var inst_35892 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35896__$1,inst_35892);
} else {
if((state_val_35898 === (12))){
var inst_35864 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35951_37863 = state_35896__$1;
(statearr_35951_37863[(2)] = inst_35864);

(statearr_35951_37863[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (2))){
var state_35896__$1 = state_35896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35896__$1,(4),ch);
} else {
if((state_val_35898 === (23))){
var state_35896__$1 = state_35896;
var statearr_35954_37867 = state_35896__$1;
(statearr_35954_37867[(2)] = null);

(statearr_35954_37867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (19))){
var inst_35817 = (state_35896[(8)]);
var inst_35871 = (state_35896[(11)]);
var inst_35876 = cljs.core.async.muxch_STAR_(inst_35871);
var state_35896__$1 = state_35896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35896__$1,(22),inst_35876,inst_35817);
} else {
if((state_val_35898 === (11))){
var inst_35844 = (state_35896[(10)]);
var inst_35827 = (state_35896[(14)]);
var inst_35844__$1 = cljs.core.seq(inst_35827);
var state_35896__$1 = (function (){var statearr_35958 = state_35896;
(statearr_35958[(10)] = inst_35844__$1);

return statearr_35958;
})();
if(inst_35844__$1){
var statearr_35959_37876 = state_35896__$1;
(statearr_35959_37876[(1)] = (13));

} else {
var statearr_35961_37877 = state_35896__$1;
(statearr_35961_37877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (9))){
var inst_35866 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35965_37881 = state_35896__$1;
(statearr_35965_37881[(2)] = inst_35866);

(statearr_35965_37881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (5))){
var inst_35824 = cljs.core.deref(mults);
var inst_35825 = cljs.core.vals(inst_35824);
var inst_35826 = cljs.core.seq(inst_35825);
var inst_35827 = inst_35826;
var inst_35828 = null;
var inst_35829 = (0);
var inst_35830 = (0);
var state_35896__$1 = (function (){var statearr_35966 = state_35896;
(statearr_35966[(12)] = inst_35829);

(statearr_35966[(13)] = inst_35828);

(statearr_35966[(14)] = inst_35827);

(statearr_35966[(15)] = inst_35830);

return statearr_35966;
})();
var statearr_35968_37884 = state_35896__$1;
(statearr_35968_37884[(2)] = null);

(statearr_35968_37884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (14))){
var state_35896__$1 = state_35896;
var statearr_35974_37885 = state_35896__$1;
(statearr_35974_37885[(2)] = null);

(statearr_35974_37885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (16))){
var inst_35844 = (state_35896[(10)]);
var inst_35848 = cljs.core.chunk_first(inst_35844);
var inst_35849 = cljs.core.chunk_rest(inst_35844);
var inst_35850 = cljs.core.count(inst_35848);
var inst_35827 = inst_35849;
var inst_35828 = inst_35848;
var inst_35829 = inst_35850;
var inst_35830 = (0);
var state_35896__$1 = (function (){var statearr_35977 = state_35896;
(statearr_35977[(12)] = inst_35829);

(statearr_35977[(13)] = inst_35828);

(statearr_35977[(14)] = inst_35827);

(statearr_35977[(15)] = inst_35830);

return statearr_35977;
})();
var statearr_35980_37891 = state_35896__$1;
(statearr_35980_37891[(2)] = null);

(statearr_35980_37891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (10))){
var inst_35829 = (state_35896[(12)]);
var inst_35828 = (state_35896[(13)]);
var inst_35827 = (state_35896[(14)]);
var inst_35830 = (state_35896[(15)]);
var inst_35837 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35828,inst_35830);
var inst_35839 = cljs.core.async.muxch_STAR_(inst_35837);
var inst_35840 = cljs.core.async.close_BANG_(inst_35839);
var inst_35841 = (inst_35830 + (1));
var tmp35970 = inst_35829;
var tmp35971 = inst_35828;
var tmp35972 = inst_35827;
var inst_35827__$1 = tmp35972;
var inst_35828__$1 = tmp35971;
var inst_35829__$1 = tmp35970;
var inst_35830__$1 = inst_35841;
var state_35896__$1 = (function (){var statearr_35983 = state_35896;
(statearr_35983[(12)] = inst_35829__$1);

(statearr_35983[(13)] = inst_35828__$1);

(statearr_35983[(14)] = inst_35827__$1);

(statearr_35983[(15)] = inst_35830__$1);

(statearr_35983[(17)] = inst_35840);

return statearr_35983;
})();
var statearr_35985_37898 = state_35896__$1;
(statearr_35985_37898[(2)] = null);

(statearr_35985_37898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (18))){
var inst_35859 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35986_37902 = state_35896__$1;
(statearr_35986_37902[(2)] = inst_35859);

(statearr_35986_37902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (8))){
var inst_35829 = (state_35896[(12)]);
var inst_35830 = (state_35896[(15)]);
var inst_35833 = (inst_35830 < inst_35829);
var inst_35834 = inst_35833;
var state_35896__$1 = state_35896;
if(cljs.core.truth_(inst_35834)){
var statearr_35990_37904 = state_35896__$1;
(statearr_35990_37904[(1)] = (10));

} else {
var statearr_35992_37905 = state_35896__$1;
(statearr_35992_37905[(1)] = (11));

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
var statearr_35994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35994[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35994[(1)] = (1));

return statearr_35994;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35896){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35896);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35996){if((e35996 instanceof Object)){
var ex__34210__auto__ = e35996;
var statearr_35999_37912 = state_35896;
(statearr_35999_37912[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37918 = state_35896;
state_35896 = G__37918;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36002 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36002[(6)] = c__34274__auto___37801);

return statearr_36002;
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
var G__36007 = arguments.length;
switch (G__36007) {
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
var G__36014 = arguments.length;
switch (G__36014) {
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
var G__36021 = arguments.length;
switch (G__36021) {
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
var c__34274__auto___37951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36084){
var state_val_36085 = (state_36084[(1)]);
if((state_val_36085 === (7))){
var state_36084__$1 = state_36084;
var statearr_36090_37953 = state_36084__$1;
(statearr_36090_37953[(2)] = null);

(statearr_36090_37953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (1))){
var state_36084__$1 = state_36084;
var statearr_36091_37955 = state_36084__$1;
(statearr_36091_37955[(2)] = null);

(statearr_36091_37955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (4))){
var inst_36038 = (state_36084[(7)]);
var inst_36041 = (inst_36038 < cnt);
var state_36084__$1 = state_36084;
if(cljs.core.truth_(inst_36041)){
var statearr_36092_37960 = state_36084__$1;
(statearr_36092_37960[(1)] = (6));

} else {
var statearr_36093_37961 = state_36084__$1;
(statearr_36093_37961[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (15))){
var inst_36078 = (state_36084[(2)]);
var state_36084__$1 = state_36084;
var statearr_36098_37962 = state_36084__$1;
(statearr_36098_37962[(2)] = inst_36078);

(statearr_36098_37962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (13))){
var inst_36071 = cljs.core.async.close_BANG_(out);
var state_36084__$1 = state_36084;
var statearr_36099_37963 = state_36084__$1;
(statearr_36099_37963[(2)] = inst_36071);

(statearr_36099_37963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (6))){
var state_36084__$1 = state_36084;
var statearr_36100_37964 = state_36084__$1;
(statearr_36100_37964[(2)] = null);

(statearr_36100_37964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (3))){
var inst_36080 = (state_36084[(2)]);
var state_36084__$1 = state_36084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36084__$1,inst_36080);
} else {
if((state_val_36085 === (12))){
var inst_36068 = (state_36084[(8)]);
var inst_36068__$1 = (state_36084[(2)]);
var inst_36069 = cljs.core.some(cljs.core.nil_QMARK_,inst_36068__$1);
var state_36084__$1 = (function (){var statearr_36101 = state_36084;
(statearr_36101[(8)] = inst_36068__$1);

return statearr_36101;
})();
if(cljs.core.truth_(inst_36069)){
var statearr_36102_37968 = state_36084__$1;
(statearr_36102_37968[(1)] = (13));

} else {
var statearr_36103_37969 = state_36084__$1;
(statearr_36103_37969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (2))){
var inst_36037 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36038 = (0);
var state_36084__$1 = (function (){var statearr_36104 = state_36084;
(statearr_36104[(9)] = inst_36037);

(statearr_36104[(7)] = inst_36038);

return statearr_36104;
})();
var statearr_36105_37974 = state_36084__$1;
(statearr_36105_37974[(2)] = null);

(statearr_36105_37974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (11))){
var inst_36038 = (state_36084[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36084,(10),Object,null,(9));
var inst_36052 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36038) : chs__$1.call(null,inst_36038));
var inst_36053 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36038) : done.call(null,inst_36038));
var inst_36054 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36052,inst_36053);
var state_36084__$1 = state_36084;
var statearr_36106_37975 = state_36084__$1;
(statearr_36106_37975[(2)] = inst_36054);


cljs.core.async.impl.ioc_helpers.process_exception(state_36084__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (9))){
var inst_36038 = (state_36084[(7)]);
var inst_36056 = (state_36084[(2)]);
var inst_36058 = (inst_36038 + (1));
var inst_36038__$1 = inst_36058;
var state_36084__$1 = (function (){var statearr_36107 = state_36084;
(statearr_36107[(7)] = inst_36038__$1);

(statearr_36107[(10)] = inst_36056);

return statearr_36107;
})();
var statearr_36109_37976 = state_36084__$1;
(statearr_36109_37976[(2)] = null);

(statearr_36109_37976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (5))){
var inst_36065 = (state_36084[(2)]);
var state_36084__$1 = (function (){var statearr_36110 = state_36084;
(statearr_36110[(11)] = inst_36065);

return statearr_36110;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36084__$1,(12),dchan);
} else {
if((state_val_36085 === (14))){
var inst_36068 = (state_36084[(8)]);
var inst_36073 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36068);
var state_36084__$1 = state_36084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36084__$1,(16),out,inst_36073);
} else {
if((state_val_36085 === (16))){
var inst_36075 = (state_36084[(2)]);
var state_36084__$1 = (function (){var statearr_36112 = state_36084;
(statearr_36112[(12)] = inst_36075);

return statearr_36112;
})();
var statearr_36113_37982 = state_36084__$1;
(statearr_36113_37982[(2)] = null);

(statearr_36113_37982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (10))){
var inst_36046 = (state_36084[(2)]);
var inst_36047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36084__$1 = (function (){var statearr_36118 = state_36084;
(statearr_36118[(13)] = inst_36046);

return statearr_36118;
})();
var statearr_36119_37983 = state_36084__$1;
(statearr_36119_37983[(2)] = inst_36047);


cljs.core.async.impl.ioc_helpers.process_exception(state_36084__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (8))){
var inst_36063 = (state_36084[(2)]);
var state_36084__$1 = state_36084;
var statearr_36123_37984 = state_36084__$1;
(statearr_36123_37984[(2)] = inst_36063);

(statearr_36123_37984[(1)] = (5));


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
var statearr_36124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36124[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36124[(1)] = (1));

return statearr_36124;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36084){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36084);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36126){if((e36126 instanceof Object)){
var ex__34210__auto__ = e36126;
var statearr_36127_37985 = state_36084;
(statearr_36127_37985[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37990 = state_36084;
state_36084 = G__37990;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36128 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36128[(6)] = c__34274__auto___37951);

return statearr_36128;
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
var c__34274__auto___37995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_36179_37999 = state_36176__$1;
(statearr_36179_37999[(1)] = (8));

} else {
var statearr_36184_38000 = state_36176__$1;
(statearr_36184_38000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (1))){
var inst_36145 = cljs.core.vec(chs);
var inst_36146 = inst_36145;
var state_36176__$1 = (function (){var statearr_36185 = state_36176;
(statearr_36185[(10)] = inst_36146);

return statearr_36185;
})();
var statearr_36186_38001 = state_36176__$1;
(statearr_36186_38001[(2)] = null);

(statearr_36186_38001[(1)] = (2));


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
var statearr_36196_38006 = state_36176__$1;
(statearr_36196_38006[(2)] = inst_36172);

(statearr_36196_38006[(1)] = (3));


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
var statearr_36199_38007 = state_36176__$1;
(statearr_36199_38007[(1)] = (4));

} else {
var statearr_36200_38009 = state_36176__$1;
(statearr_36200_38009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (11))){
var inst_36146 = (state_36176[(10)]);
var inst_36165 = (state_36176[(2)]);
var tmp36198 = inst_36146;
var inst_36146__$1 = tmp36198;
var state_36176__$1 = (function (){var statearr_36201 = state_36176;
(statearr_36201[(11)] = inst_36165);

(statearr_36201[(10)] = inst_36146__$1);

return statearr_36201;
})();
var statearr_36202_38014 = state_36176__$1;
(statearr_36202_38014[(2)] = null);

(statearr_36202_38014[(1)] = (2));


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
var statearr_36205_38015 = state_36176__$1;
(statearr_36205_38015[(2)] = inst_36170);

(statearr_36205_38015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (10))){
var inst_36168 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
var statearr_36206_38016 = state_36176__$1;
(statearr_36206_38016[(2)] = inst_36168);

(statearr_36206_38016[(1)] = (6));


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
return (function (p1__36130_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36130_SHARP_);
});
})();
var inst_36161 = cljs.core.filterv(inst_36160,inst_36146);
var inst_36146__$1 = inst_36161;
var state_36176__$1 = (function (){var statearr_36211 = state_36176;
(statearr_36211[(10)] = inst_36146__$1);

return statearr_36211;
})();
var statearr_36213_38018 = state_36176__$1;
(statearr_36213_38018[(2)] = null);

(statearr_36213_38018[(1)] = (2));


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
}catch (e36220){if((e36220 instanceof Object)){
var ex__34210__auto__ = e36220;
var statearr_36221_38023 = state_36176;
(statearr_36221_38023[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38024 = state_36176;
state_36176 = G__38024;
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
var state__34276__auto__ = (function (){var statearr_36223 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36223[(6)] = c__34274__auto___37995);

return statearr_36223;
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
var G__36237 = arguments.length;
switch (G__36237) {
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
var c__34274__auto___38029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36266){
var state_val_36267 = (state_36266[(1)]);
if((state_val_36267 === (7))){
var inst_36246 = (state_36266[(7)]);
var inst_36246__$1 = (state_36266[(2)]);
var inst_36247 = (inst_36246__$1 == null);
var inst_36248 = cljs.core.not(inst_36247);
var state_36266__$1 = (function (){var statearr_36268 = state_36266;
(statearr_36268[(7)] = inst_36246__$1);

return statearr_36268;
})();
if(inst_36248){
var statearr_36271_38032 = state_36266__$1;
(statearr_36271_38032[(1)] = (8));

} else {
var statearr_36272_38033 = state_36266__$1;
(statearr_36272_38033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (1))){
var inst_36241 = (0);
var state_36266__$1 = (function (){var statearr_36273 = state_36266;
(statearr_36273[(8)] = inst_36241);

return statearr_36273;
})();
var statearr_36274_38034 = state_36266__$1;
(statearr_36274_38034[(2)] = null);

(statearr_36274_38034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (4))){
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36266__$1,(7),ch);
} else {
if((state_val_36267 === (6))){
var inst_36260 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36276_38037 = state_36266__$1;
(statearr_36276_38037[(2)] = inst_36260);

(statearr_36276_38037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (3))){
var inst_36262 = (state_36266[(2)]);
var inst_36264 = cljs.core.async.close_BANG_(out);
var state_36266__$1 = (function (){var statearr_36280 = state_36266;
(statearr_36280[(9)] = inst_36262);

return statearr_36280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36266__$1,inst_36264);
} else {
if((state_val_36267 === (2))){
var inst_36241 = (state_36266[(8)]);
var inst_36243 = (inst_36241 < n);
var state_36266__$1 = state_36266;
if(cljs.core.truth_(inst_36243)){
var statearr_36281_38038 = state_36266__$1;
(statearr_36281_38038[(1)] = (4));

} else {
var statearr_36282_38040 = state_36266__$1;
(statearr_36282_38040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (11))){
var inst_36241 = (state_36266[(8)]);
var inst_36251 = (state_36266[(2)]);
var inst_36252 = (inst_36241 + (1));
var inst_36241__$1 = inst_36252;
var state_36266__$1 = (function (){var statearr_36288 = state_36266;
(statearr_36288[(8)] = inst_36241__$1);

(statearr_36288[(10)] = inst_36251);

return statearr_36288;
})();
var statearr_36292_38042 = state_36266__$1;
(statearr_36292_38042[(2)] = null);

(statearr_36292_38042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (9))){
var state_36266__$1 = state_36266;
var statearr_36293_38043 = state_36266__$1;
(statearr_36293_38043[(2)] = null);

(statearr_36293_38043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (5))){
var state_36266__$1 = state_36266;
var statearr_36294_38044 = state_36266__$1;
(statearr_36294_38044[(2)] = null);

(statearr_36294_38044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (10))){
var inst_36257 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36296_38045 = state_36266__$1;
(statearr_36296_38045[(2)] = inst_36257);

(statearr_36296_38045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (8))){
var inst_36246 = (state_36266[(7)]);
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36266__$1,(11),out,inst_36246);
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
var statearr_36299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36299[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36299[(1)] = (1));

return statearr_36299;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36266){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36266);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36301){if((e36301 instanceof Object)){
var ex__34210__auto__ = e36301;
var statearr_36303_38049 = state_36266;
(statearr_36303_38049[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38050 = state_36266;
state_36266 = G__38050;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36304 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36304[(6)] = c__34274__auto___38029);

return statearr_36304;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36308 = (function (f,ch,meta36309){
this.f = f;
this.ch = ch;
this.meta36309 = meta36309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36310,meta36309__$1){
var self__ = this;
var _36310__$1 = this;
return (new cljs.core.async.t_cljs$core$async36308(self__.f,self__.ch,meta36309__$1));
}));

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36310){
var self__ = this;
var _36310__$1 = this;
return self__.meta36309;
}));

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36317 = (function (f,ch,meta36309,_,fn1,meta36318){
this.f = f;
this.ch = ch;
this.meta36309 = meta36309;
this._ = _;
this.fn1 = fn1;
this.meta36318 = meta36318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36319,meta36318__$1){
var self__ = this;
var _36319__$1 = this;
return (new cljs.core.async.t_cljs$core$async36317(self__.f,self__.ch,self__.meta36309,self__._,self__.fn1,meta36318__$1));
}));

(cljs.core.async.t_cljs$core$async36317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36319){
var self__ = this;
var _36319__$1 = this;
return self__.meta36318;
}));

(cljs.core.async.t_cljs$core$async36317.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36317.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36307_SHARP_){
var G__36330 = (((p1__36307_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36307_SHARP_) : self__.f.call(null,p1__36307_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36330) : f1.call(null,G__36330));
});
}));

(cljs.core.async.t_cljs$core$async36317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36309","meta36309",1642335137,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36308","cljs.core.async/t_cljs$core$async36308",-1482953877,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36318","meta36318",229954225,null)], null);
}));

(cljs.core.async.t_cljs$core$async36317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36317");

(cljs.core.async.t_cljs$core$async36317.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36317.
 */
cljs.core.async.__GT_t_cljs$core$async36317 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36317(f__$1,ch__$1,meta36309__$1,___$2,fn1__$1,meta36318){
return (new cljs.core.async.t_cljs$core$async36317(f__$1,ch__$1,meta36309__$1,___$2,fn1__$1,meta36318));
});

}

return (new cljs.core.async.t_cljs$core$async36317(self__.f,self__.ch,self__.meta36309,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36336 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36336) : self__.f.call(null,G__36336));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36309","meta36309",1642335137,null)], null);
}));

(cljs.core.async.t_cljs$core$async36308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36308");

(cljs.core.async.t_cljs$core$async36308.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36308.
 */
cljs.core.async.__GT_t_cljs$core$async36308 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36308(f__$1,ch__$1,meta36309){
return (new cljs.core.async.t_cljs$core$async36308(f__$1,ch__$1,meta36309));
});

}

return (new cljs.core.async.t_cljs$core$async36308(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36341 = (function (f,ch,meta36342){
this.f = f;
this.ch = ch;
this.meta36342 = meta36342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36343,meta36342__$1){
var self__ = this;
var _36343__$1 = this;
return (new cljs.core.async.t_cljs$core$async36341(self__.f,self__.ch,meta36342__$1));
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36343){
var self__ = this;
var _36343__$1 = this;
return self__.meta36342;
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36342","meta36342",1426951232,null)], null);
}));

(cljs.core.async.t_cljs$core$async36341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36341");

(cljs.core.async.t_cljs$core$async36341.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36341.
 */
cljs.core.async.__GT_t_cljs$core$async36341 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36341(f__$1,ch__$1,meta36342){
return (new cljs.core.async.t_cljs$core$async36341(f__$1,ch__$1,meta36342));
});

}

return (new cljs.core.async.t_cljs$core$async36341(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36357 = (function (p,ch,meta36358){
this.p = p;
this.ch = ch;
this.meta36358 = meta36358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36359,meta36358__$1){
var self__ = this;
var _36359__$1 = this;
return (new cljs.core.async.t_cljs$core$async36357(self__.p,self__.ch,meta36358__$1));
}));

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36359){
var self__ = this;
var _36359__$1 = this;
return self__.meta36358;
}));

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36358","meta36358",-234645916,null)], null);
}));

(cljs.core.async.t_cljs$core$async36357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36357");

(cljs.core.async.t_cljs$core$async36357.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36357.
 */
cljs.core.async.__GT_t_cljs$core$async36357 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36357(p__$1,ch__$1,meta36358){
return (new cljs.core.async.t_cljs$core$async36357(p__$1,ch__$1,meta36358));
});

}

return (new cljs.core.async.t_cljs$core$async36357(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36378 = arguments.length;
switch (G__36378) {
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
var c__34274__auto___38079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36409){
var state_val_36410 = (state_36409[(1)]);
if((state_val_36410 === (7))){
var inst_36402 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
var statearr_36420_38080 = state_36409__$1;
(statearr_36420_38080[(2)] = inst_36402);

(statearr_36420_38080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (1))){
var state_36409__$1 = state_36409;
var statearr_36421_38081 = state_36409__$1;
(statearr_36421_38081[(2)] = null);

(statearr_36421_38081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (4))){
var inst_36385 = (state_36409[(7)]);
var inst_36385__$1 = (state_36409[(2)]);
var inst_36386 = (inst_36385__$1 == null);
var state_36409__$1 = (function (){var statearr_36423 = state_36409;
(statearr_36423[(7)] = inst_36385__$1);

return statearr_36423;
})();
if(cljs.core.truth_(inst_36386)){
var statearr_36424_38084 = state_36409__$1;
(statearr_36424_38084[(1)] = (5));

} else {
var statearr_36425_38085 = state_36409__$1;
(statearr_36425_38085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (6))){
var inst_36385 = (state_36409[(7)]);
var inst_36390 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36385) : p.call(null,inst_36385));
var state_36409__$1 = state_36409;
if(cljs.core.truth_(inst_36390)){
var statearr_36430_38087 = state_36409__$1;
(statearr_36430_38087[(1)] = (8));

} else {
var statearr_36431_38088 = state_36409__$1;
(statearr_36431_38088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (3))){
var inst_36404 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36409__$1,inst_36404);
} else {
if((state_val_36410 === (2))){
var state_36409__$1 = state_36409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36409__$1,(4),ch);
} else {
if((state_val_36410 === (11))){
var inst_36396 = (state_36409[(2)]);
var state_36409__$1 = state_36409;
var statearr_36438_38092 = state_36409__$1;
(statearr_36438_38092[(2)] = inst_36396);

(statearr_36438_38092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (9))){
var state_36409__$1 = state_36409;
var statearr_36439_38093 = state_36409__$1;
(statearr_36439_38093[(2)] = null);

(statearr_36439_38093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (5))){
var inst_36388 = cljs.core.async.close_BANG_(out);
var state_36409__$1 = state_36409;
var statearr_36452_38094 = state_36409__$1;
(statearr_36452_38094[(2)] = inst_36388);

(statearr_36452_38094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (10))){
var inst_36399 = (state_36409[(2)]);
var state_36409__$1 = (function (){var statearr_36453 = state_36409;
(statearr_36453[(8)] = inst_36399);

return statearr_36453;
})();
var statearr_36454_38096 = state_36409__$1;
(statearr_36454_38096[(2)] = null);

(statearr_36454_38096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36410 === (8))){
var inst_36385 = (state_36409[(7)]);
var state_36409__$1 = state_36409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36409__$1,(11),out,inst_36385);
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
var statearr_36458 = [null,null,null,null,null,null,null,null,null];
(statearr_36458[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36458[(1)] = (1));

return statearr_36458;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36409){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36409);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36459){if((e36459 instanceof Object)){
var ex__34210__auto__ = e36459;
var statearr_36462_38099 = state_36409;
(statearr_36462_38099[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38102 = state_36409;
state_36409 = G__38102;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36463 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36463[(6)] = c__34274__auto___38079);

return statearr_36463;
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
var G__36469 = arguments.length;
switch (G__36469) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36540){
var state_val_36541 = (state_36540[(1)]);
if((state_val_36541 === (7))){
var inst_36535 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36545_38108 = state_36540__$1;
(statearr_36545_38108[(2)] = inst_36535);

(statearr_36545_38108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (20))){
var inst_36504 = (state_36540[(7)]);
var inst_36516 = (state_36540[(2)]);
var inst_36517 = cljs.core.next(inst_36504);
var inst_36489 = inst_36517;
var inst_36490 = null;
var inst_36491 = (0);
var inst_36492 = (0);
var state_36540__$1 = (function (){var statearr_36547 = state_36540;
(statearr_36547[(8)] = inst_36516);

(statearr_36547[(9)] = inst_36489);

(statearr_36547[(10)] = inst_36492);

(statearr_36547[(11)] = inst_36491);

(statearr_36547[(12)] = inst_36490);

return statearr_36547;
})();
var statearr_36548_38112 = state_36540__$1;
(statearr_36548_38112[(2)] = null);

(statearr_36548_38112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (1))){
var state_36540__$1 = state_36540;
var statearr_36549_38113 = state_36540__$1;
(statearr_36549_38113[(2)] = null);

(statearr_36549_38113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (4))){
var inst_36476 = (state_36540[(13)]);
var inst_36476__$1 = (state_36540[(2)]);
var inst_36477 = (inst_36476__$1 == null);
var state_36540__$1 = (function (){var statearr_36551 = state_36540;
(statearr_36551[(13)] = inst_36476__$1);

return statearr_36551;
})();
if(cljs.core.truth_(inst_36477)){
var statearr_36552_38114 = state_36540__$1;
(statearr_36552_38114[(1)] = (5));

} else {
var statearr_36553_38115 = state_36540__$1;
(statearr_36553_38115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (15))){
var state_36540__$1 = state_36540;
var statearr_36558_38118 = state_36540__$1;
(statearr_36558_38118[(2)] = null);

(statearr_36558_38118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (21))){
var state_36540__$1 = state_36540;
var statearr_36559_38120 = state_36540__$1;
(statearr_36559_38120[(2)] = null);

(statearr_36559_38120[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (13))){
var inst_36489 = (state_36540[(9)]);
var inst_36492 = (state_36540[(10)]);
var inst_36491 = (state_36540[(11)]);
var inst_36490 = (state_36540[(12)]);
var inst_36500 = (state_36540[(2)]);
var inst_36501 = (inst_36492 + (1));
var tmp36554 = inst_36489;
var tmp36555 = inst_36491;
var tmp36556 = inst_36490;
var inst_36489__$1 = tmp36554;
var inst_36490__$1 = tmp36556;
var inst_36491__$1 = tmp36555;
var inst_36492__$1 = inst_36501;
var state_36540__$1 = (function (){var statearr_36561 = state_36540;
(statearr_36561[(9)] = inst_36489__$1);

(statearr_36561[(10)] = inst_36492__$1);

(statearr_36561[(11)] = inst_36491__$1);

(statearr_36561[(12)] = inst_36490__$1);

(statearr_36561[(14)] = inst_36500);

return statearr_36561;
})();
var statearr_36562_38122 = state_36540__$1;
(statearr_36562_38122[(2)] = null);

(statearr_36562_38122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (22))){
var state_36540__$1 = state_36540;
var statearr_36564_38123 = state_36540__$1;
(statearr_36564_38123[(2)] = null);

(statearr_36564_38123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (6))){
var inst_36476 = (state_36540[(13)]);
var inst_36486 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36476) : f.call(null,inst_36476));
var inst_36487 = cljs.core.seq(inst_36486);
var inst_36489 = inst_36487;
var inst_36490 = null;
var inst_36491 = (0);
var inst_36492 = (0);
var state_36540__$1 = (function (){var statearr_36565 = state_36540;
(statearr_36565[(9)] = inst_36489);

(statearr_36565[(10)] = inst_36492);

(statearr_36565[(11)] = inst_36491);

(statearr_36565[(12)] = inst_36490);

return statearr_36565;
})();
var statearr_36567_38126 = state_36540__$1;
(statearr_36567_38126[(2)] = null);

(statearr_36567_38126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (17))){
var inst_36504 = (state_36540[(7)]);
var inst_36509 = cljs.core.chunk_first(inst_36504);
var inst_36510 = cljs.core.chunk_rest(inst_36504);
var inst_36511 = cljs.core.count(inst_36509);
var inst_36489 = inst_36510;
var inst_36490 = inst_36509;
var inst_36491 = inst_36511;
var inst_36492 = (0);
var state_36540__$1 = (function (){var statearr_36568 = state_36540;
(statearr_36568[(9)] = inst_36489);

(statearr_36568[(10)] = inst_36492);

(statearr_36568[(11)] = inst_36491);

(statearr_36568[(12)] = inst_36490);

return statearr_36568;
})();
var statearr_36570_38127 = state_36540__$1;
(statearr_36570_38127[(2)] = null);

(statearr_36570_38127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (3))){
var inst_36537 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36540__$1,inst_36537);
} else {
if((state_val_36541 === (12))){
var inst_36525 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36571_38131 = state_36540__$1;
(statearr_36571_38131[(2)] = inst_36525);

(statearr_36571_38131[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (2))){
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36540__$1,(4),in$);
} else {
if((state_val_36541 === (23))){
var inst_36533 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36573_38132 = state_36540__$1;
(statearr_36573_38132[(2)] = inst_36533);

(statearr_36573_38132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (19))){
var inst_36520 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36574_38133 = state_36540__$1;
(statearr_36574_38133[(2)] = inst_36520);

(statearr_36574_38133[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (11))){
var inst_36489 = (state_36540[(9)]);
var inst_36504 = (state_36540[(7)]);
var inst_36504__$1 = cljs.core.seq(inst_36489);
var state_36540__$1 = (function (){var statearr_36576 = state_36540;
(statearr_36576[(7)] = inst_36504__$1);

return statearr_36576;
})();
if(inst_36504__$1){
var statearr_36577_38134 = state_36540__$1;
(statearr_36577_38134[(1)] = (14));

} else {
var statearr_36578_38135 = state_36540__$1;
(statearr_36578_38135[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (9))){
var inst_36527 = (state_36540[(2)]);
var inst_36528 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36540__$1 = (function (){var statearr_36580 = state_36540;
(statearr_36580[(15)] = inst_36527);

return statearr_36580;
})();
if(cljs.core.truth_(inst_36528)){
var statearr_36581_38137 = state_36540__$1;
(statearr_36581_38137[(1)] = (21));

} else {
var statearr_36582_38138 = state_36540__$1;
(statearr_36582_38138[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (5))){
var inst_36479 = cljs.core.async.close_BANG_(out);
var state_36540__$1 = state_36540;
var statearr_36584_38140 = state_36540__$1;
(statearr_36584_38140[(2)] = inst_36479);

(statearr_36584_38140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (14))){
var inst_36504 = (state_36540[(7)]);
var inst_36507 = cljs.core.chunked_seq_QMARK_(inst_36504);
var state_36540__$1 = state_36540;
if(inst_36507){
var statearr_36585_38145 = state_36540__$1;
(statearr_36585_38145[(1)] = (17));

} else {
var statearr_36586_38146 = state_36540__$1;
(statearr_36586_38146[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (16))){
var inst_36523 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36588_38147 = state_36540__$1;
(statearr_36588_38147[(2)] = inst_36523);

(statearr_36588_38147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (10))){
var inst_36492 = (state_36540[(10)]);
var inst_36490 = (state_36540[(12)]);
var inst_36498 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36490,inst_36492);
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36540__$1,(13),out,inst_36498);
} else {
if((state_val_36541 === (18))){
var inst_36504 = (state_36540[(7)]);
var inst_36514 = cljs.core.first(inst_36504);
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36540__$1,(20),out,inst_36514);
} else {
if((state_val_36541 === (8))){
var inst_36492 = (state_36540[(10)]);
var inst_36491 = (state_36540[(11)]);
var inst_36495 = (inst_36492 < inst_36491);
var inst_36496 = inst_36495;
var state_36540__$1 = state_36540;
if(cljs.core.truth_(inst_36496)){
var statearr_36590_38151 = state_36540__$1;
(statearr_36590_38151[(1)] = (10));

} else {
var statearr_36591_38152 = state_36540__$1;
(statearr_36591_38152[(1)] = (11));

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
var statearr_36593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36593[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36593[(1)] = (1));

return statearr_36593;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36540){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36540);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36594){if((e36594 instanceof Object)){
var ex__34210__auto__ = e36594;
var statearr_36595_38157 = state_36540;
(statearr_36595_38157[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38159 = state_36540;
state_36540 = G__38159;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36540){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36597 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36597[(6)] = c__34274__auto__);

return statearr_36597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36600 = arguments.length;
switch (G__36600) {
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
var G__36604 = arguments.length;
switch (G__36604) {
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
var G__36609 = arguments.length;
switch (G__36609) {
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
var c__34274__auto___38168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36635){
var state_val_36636 = (state_36635[(1)]);
if((state_val_36636 === (7))){
var inst_36630 = (state_36635[(2)]);
var state_36635__$1 = state_36635;
var statearr_36638_38170 = state_36635__$1;
(statearr_36638_38170[(2)] = inst_36630);

(statearr_36638_38170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36636 === (1))){
var inst_36611 = null;
var state_36635__$1 = (function (){var statearr_36640 = state_36635;
(statearr_36640[(7)] = inst_36611);

return statearr_36640;
})();
var statearr_36641_38172 = state_36635__$1;
(statearr_36641_38172[(2)] = null);

(statearr_36641_38172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36636 === (4))){
var inst_36614 = (state_36635[(8)]);
var inst_36614__$1 = (state_36635[(2)]);
var inst_36616 = (inst_36614__$1 == null);
var inst_36617 = cljs.core.not(inst_36616);
var state_36635__$1 = (function (){var statearr_36642 = state_36635;
(statearr_36642[(8)] = inst_36614__$1);

return statearr_36642;
})();
if(inst_36617){
var statearr_36643_38174 = state_36635__$1;
(statearr_36643_38174[(1)] = (5));

} else {
var statearr_36645_38175 = state_36635__$1;
(statearr_36645_38175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36636 === (6))){
var state_36635__$1 = state_36635;
var statearr_36646_38178 = state_36635__$1;
(statearr_36646_38178[(2)] = null);

(statearr_36646_38178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36636 === (3))){
var inst_36632 = (state_36635[(2)]);
var inst_36633 = cljs.core.async.close_BANG_(out);
var state_36635__$1 = (function (){var statearr_36647 = state_36635;
(statearr_36647[(9)] = inst_36632);

return statearr_36647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36635__$1,inst_36633);
} else {
if((state_val_36636 === (2))){
var state_36635__$1 = state_36635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36635__$1,(4),ch);
} else {
if((state_val_36636 === (11))){
var inst_36614 = (state_36635[(8)]);
var inst_36624 = (state_36635[(2)]);
var inst_36611 = inst_36614;
var state_36635__$1 = (function (){var statearr_36649 = state_36635;
(statearr_36649[(7)] = inst_36611);

(statearr_36649[(10)] = inst_36624);

return statearr_36649;
})();
var statearr_36650_38183 = state_36635__$1;
(statearr_36650_38183[(2)] = null);

(statearr_36650_38183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36636 === (9))){
var inst_36614 = (state_36635[(8)]);
var state_36635__$1 = state_36635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36635__$1,(11),out,inst_36614);
} else {
if((state_val_36636 === (5))){
var inst_36611 = (state_36635[(7)]);
var inst_36614 = (state_36635[(8)]);
var inst_36619 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36614,inst_36611);
var state_36635__$1 = state_36635;
if(inst_36619){
var statearr_36653_38187 = state_36635__$1;
(statearr_36653_38187[(1)] = (8));

} else {
var statearr_36655_38188 = state_36635__$1;
(statearr_36655_38188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36636 === (10))){
var inst_36627 = (state_36635[(2)]);
var state_36635__$1 = state_36635;
var statearr_36656_38190 = state_36635__$1;
(statearr_36656_38190[(2)] = inst_36627);

(statearr_36656_38190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36636 === (8))){
var inst_36611 = (state_36635[(7)]);
var tmp36652 = inst_36611;
var inst_36611__$1 = tmp36652;
var state_36635__$1 = (function (){var statearr_36657 = state_36635;
(statearr_36657[(7)] = inst_36611__$1);

return statearr_36657;
})();
var statearr_36658_38191 = state_36635__$1;
(statearr_36658_38191[(2)] = null);

(statearr_36658_38191[(1)] = (2));


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
var statearr_36660 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36660[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36660[(1)] = (1));

return statearr_36660;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36635){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36635);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36661){if((e36661 instanceof Object)){
var ex__34210__auto__ = e36661;
var statearr_36663_38194 = state_36635;
(statearr_36663_38194[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38195 = state_36635;
state_36635 = G__38195;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36664 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36664[(6)] = c__34274__auto___38168);

return statearr_36664;
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
var G__36668 = arguments.length;
switch (G__36668) {
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
var c__34274__auto___38201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36709){
var state_val_36710 = (state_36709[(1)]);
if((state_val_36710 === (7))){
var inst_36704 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
var statearr_36712_38202 = state_36709__$1;
(statearr_36712_38202[(2)] = inst_36704);

(statearr_36712_38202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (1))){
var inst_36670 = (new Array(n));
var inst_36672 = inst_36670;
var inst_36673 = (0);
var state_36709__$1 = (function (){var statearr_36713 = state_36709;
(statearr_36713[(7)] = inst_36673);

(statearr_36713[(8)] = inst_36672);

return statearr_36713;
})();
var statearr_36714_38203 = state_36709__$1;
(statearr_36714_38203[(2)] = null);

(statearr_36714_38203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (4))){
var inst_36676 = (state_36709[(9)]);
var inst_36676__$1 = (state_36709[(2)]);
var inst_36677 = (inst_36676__$1 == null);
var inst_36678 = cljs.core.not(inst_36677);
var state_36709__$1 = (function (){var statearr_36716 = state_36709;
(statearr_36716[(9)] = inst_36676__$1);

return statearr_36716;
})();
if(inst_36678){
var statearr_36717_38205 = state_36709__$1;
(statearr_36717_38205[(1)] = (5));

} else {
var statearr_36718_38206 = state_36709__$1;
(statearr_36718_38206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (15))){
var inst_36698 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
var statearr_36720_38207 = state_36709__$1;
(statearr_36720_38207[(2)] = inst_36698);

(statearr_36720_38207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (13))){
var state_36709__$1 = state_36709;
var statearr_36721_38208 = state_36709__$1;
(statearr_36721_38208[(2)] = null);

(statearr_36721_38208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (6))){
var inst_36673 = (state_36709[(7)]);
var inst_36694 = (inst_36673 > (0));
var state_36709__$1 = state_36709;
if(cljs.core.truth_(inst_36694)){
var statearr_36723_38209 = state_36709__$1;
(statearr_36723_38209[(1)] = (12));

} else {
var statearr_36724_38210 = state_36709__$1;
(statearr_36724_38210[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (3))){
var inst_36706 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36709__$1,inst_36706);
} else {
if((state_val_36710 === (12))){
var inst_36672 = (state_36709[(8)]);
var inst_36696 = cljs.core.vec(inst_36672);
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36709__$1,(15),out,inst_36696);
} else {
if((state_val_36710 === (2))){
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36709__$1,(4),ch);
} else {
if((state_val_36710 === (11))){
var inst_36688 = (state_36709[(2)]);
var inst_36689 = (new Array(n));
var inst_36672 = inst_36689;
var inst_36673 = (0);
var state_36709__$1 = (function (){var statearr_36726 = state_36709;
(statearr_36726[(7)] = inst_36673);

(statearr_36726[(10)] = inst_36688);

(statearr_36726[(8)] = inst_36672);

return statearr_36726;
})();
var statearr_36727_38214 = state_36709__$1;
(statearr_36727_38214[(2)] = null);

(statearr_36727_38214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (9))){
var inst_36672 = (state_36709[(8)]);
var inst_36686 = cljs.core.vec(inst_36672);
var state_36709__$1 = state_36709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36709__$1,(11),out,inst_36686);
} else {
if((state_val_36710 === (5))){
var inst_36676 = (state_36709[(9)]);
var inst_36673 = (state_36709[(7)]);
var inst_36681 = (state_36709[(11)]);
var inst_36672 = (state_36709[(8)]);
var inst_36680 = (inst_36672[inst_36673] = inst_36676);
var inst_36681__$1 = (inst_36673 + (1));
var inst_36682 = (inst_36681__$1 < n);
var state_36709__$1 = (function (){var statearr_36729 = state_36709;
(statearr_36729[(11)] = inst_36681__$1);

(statearr_36729[(12)] = inst_36680);

return statearr_36729;
})();
if(cljs.core.truth_(inst_36682)){
var statearr_36731_38218 = state_36709__$1;
(statearr_36731_38218[(1)] = (8));

} else {
var statearr_36732_38219 = state_36709__$1;
(statearr_36732_38219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (14))){
var inst_36701 = (state_36709[(2)]);
var inst_36702 = cljs.core.async.close_BANG_(out);
var state_36709__$1 = (function (){var statearr_36734 = state_36709;
(statearr_36734[(13)] = inst_36701);

return statearr_36734;
})();
var statearr_36735_38220 = state_36709__$1;
(statearr_36735_38220[(2)] = inst_36702);

(statearr_36735_38220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (10))){
var inst_36692 = (state_36709[(2)]);
var state_36709__$1 = state_36709;
var statearr_36737_38221 = state_36709__$1;
(statearr_36737_38221[(2)] = inst_36692);

(statearr_36737_38221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36710 === (8))){
var inst_36681 = (state_36709[(11)]);
var inst_36672 = (state_36709[(8)]);
var tmp36733 = inst_36672;
var inst_36672__$1 = tmp36733;
var inst_36673 = inst_36681;
var state_36709__$1 = (function (){var statearr_36738 = state_36709;
(statearr_36738[(7)] = inst_36673);

(statearr_36738[(8)] = inst_36672__$1);

return statearr_36738;
})();
var statearr_36740_38222 = state_36709__$1;
(statearr_36740_38222[(2)] = null);

(statearr_36740_38222[(1)] = (2));


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
}catch (e36747){if((e36747 instanceof Object)){
var ex__34210__auto__ = e36747;
var statearr_36748_38224 = state_36709;
(statearr_36748_38224[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38225 = state_36709;
state_36709 = G__38225;
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
var state__34276__auto__ = (function (){var statearr_36750 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36750[(6)] = c__34274__auto___38201);

return statearr_36750;
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
var G__36753 = arguments.length;
switch (G__36753) {
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
var c__34274__auto___38229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36798){
var state_val_36799 = (state_36798[(1)]);
if((state_val_36799 === (7))){
var inst_36794 = (state_36798[(2)]);
var state_36798__$1 = state_36798;
var statearr_36801_38230 = state_36798__$1;
(statearr_36801_38230[(2)] = inst_36794);

(statearr_36801_38230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36799 === (1))){
var inst_36756 = [];
var inst_36757 = inst_36756;
var inst_36758 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36798__$1 = (function (){var statearr_36803 = state_36798;
(statearr_36803[(7)] = inst_36757);

(statearr_36803[(8)] = inst_36758);

return statearr_36803;
})();
var statearr_36804_38231 = state_36798__$1;
(statearr_36804_38231[(2)] = null);

(statearr_36804_38231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36799 === (4))){
var inst_36761 = (state_36798[(9)]);
var inst_36761__$1 = (state_36798[(2)]);
var inst_36762 = (inst_36761__$1 == null);
var inst_36763 = cljs.core.not(inst_36762);
var state_36798__$1 = (function (){var statearr_36805 = state_36798;
(statearr_36805[(9)] = inst_36761__$1);

return statearr_36805;
})();
if(inst_36763){
var statearr_36806_38232 = state_36798__$1;
(statearr_36806_38232[(1)] = (5));

} else {
var statearr_36808_38234 = state_36798__$1;
(statearr_36808_38234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36799 === (15))){
var inst_36788 = (state_36798[(2)]);
var state_36798__$1 = state_36798;
var statearr_36809_38235 = state_36798__$1;
(statearr_36809_38235[(2)] = inst_36788);

(statearr_36809_38235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36799 === (13))){
var state_36798__$1 = state_36798;
var statearr_36810_38236 = state_36798__$1;
(statearr_36810_38236[(2)] = null);

(statearr_36810_38236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36799 === (6))){
var inst_36757 = (state_36798[(7)]);
var inst_36783 = inst_36757.length;
var inst_36784 = (inst_36783 > (0));
var state_36798__$1 = state_36798;
if(cljs.core.truth_(inst_36784)){
var statearr_36812_38237 = state_36798__$1;
(statearr_36812_38237[(1)] = (12));

} else {
var statearr_36813_38238 = state_36798__$1;
(statearr_36813_38238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36799 === (3))){
var inst_36796 = (state_36798[(2)]);
var state_36798__$1 = state_36798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36798__$1,inst_36796);
} else {
if((state_val_36799 === (12))){
var inst_36757 = (state_36798[(7)]);
var inst_36786 = cljs.core.vec(inst_36757);
var state_36798__$1 = state_36798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36798__$1,(15),out,inst_36786);
} else {
if((state_val_36799 === (2))){
var state_36798__$1 = state_36798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36798__$1,(4),ch);
} else {
if((state_val_36799 === (11))){
var inst_36765 = (state_36798[(10)]);
var inst_36761 = (state_36798[(9)]);
var inst_36776 = (state_36798[(2)]);
var inst_36777 = [];
var inst_36778 = inst_36777.push(inst_36761);
var inst_36757 = inst_36777;
var inst_36758 = inst_36765;
var state_36798__$1 = (function (){var statearr_36816 = state_36798;
(statearr_36816[(7)] = inst_36757);

(statearr_36816[(8)] = inst_36758);

(statearr_36816[(11)] = inst_36778);

(statearr_36816[(12)] = inst_36776);

return statearr_36816;
})();
var statearr_36817_38241 = state_36798__$1;
(statearr_36817_38241[(2)] = null);

(statearr_36817_38241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36799 === (9))){
var inst_36757 = (state_36798[(7)]);
var inst_36774 = cljs.core.vec(inst_36757);
var state_36798__$1 = state_36798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36798__$1,(11),out,inst_36774);
} else {
if((state_val_36799 === (5))){
var inst_36765 = (state_36798[(10)]);
var inst_36758 = (state_36798[(8)]);
var inst_36761 = (state_36798[(9)]);
var inst_36765__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36761) : f.call(null,inst_36761));
var inst_36766 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36765__$1,inst_36758);
var inst_36767 = cljs.core.keyword_identical_QMARK_(inst_36758,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36768 = ((inst_36766) || (inst_36767));
var state_36798__$1 = (function (){var statearr_36819 = state_36798;
(statearr_36819[(10)] = inst_36765__$1);

return statearr_36819;
})();
if(cljs.core.truth_(inst_36768)){
var statearr_36820_38243 = state_36798__$1;
(statearr_36820_38243[(1)] = (8));

} else {
var statearr_36821_38244 = state_36798__$1;
(statearr_36821_38244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36799 === (14))){
var inst_36791 = (state_36798[(2)]);
var inst_36792 = cljs.core.async.close_BANG_(out);
var state_36798__$1 = (function (){var statearr_36824 = state_36798;
(statearr_36824[(13)] = inst_36791);

return statearr_36824;
})();
var statearr_36825_38246 = state_36798__$1;
(statearr_36825_38246[(2)] = inst_36792);

(statearr_36825_38246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36799 === (10))){
var inst_36781 = (state_36798[(2)]);
var state_36798__$1 = state_36798;
var statearr_36826_38247 = state_36798__$1;
(statearr_36826_38247[(2)] = inst_36781);

(statearr_36826_38247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36799 === (8))){
var inst_36757 = (state_36798[(7)]);
var inst_36765 = (state_36798[(10)]);
var inst_36761 = (state_36798[(9)]);
var inst_36770 = inst_36757.push(inst_36761);
var tmp36823 = inst_36757;
var inst_36757__$1 = tmp36823;
var inst_36758 = inst_36765;
var state_36798__$1 = (function (){var statearr_36828 = state_36798;
(statearr_36828[(7)] = inst_36757__$1);

(statearr_36828[(8)] = inst_36758);

(statearr_36828[(14)] = inst_36770);

return statearr_36828;
})();
var statearr_36829_38249 = state_36798__$1;
(statearr_36829_38249[(2)] = null);

(statearr_36829_38249[(1)] = (2));


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
var statearr_36831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36831[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36831[(1)] = (1));

return statearr_36831;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36798){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36798);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36832){if((e36832 instanceof Object)){
var ex__34210__auto__ = e36832;
var statearr_36834_38251 = state_36798;
(statearr_36834_38251[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38252 = state_36798;
state_36798 = G__38252;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36835 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36835[(6)] = c__34274__auto___38229);

return statearr_36835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
