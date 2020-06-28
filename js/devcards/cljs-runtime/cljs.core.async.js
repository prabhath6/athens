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
var val_36849 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36849) : fn1.call(null,val_36849));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36849) : fn1.call(null,val_36849));
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
var n__4666__auto___36856 = n;
var x_36857 = (0);
while(true){
if((x_36857 < n__4666__auto___36856)){
(a[x_36857] = x_36857);

var G__36858 = (x_36857 + (1));
x_36857 = G__36858;
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
return (function (p1__34353_SHARP_){
var G__34356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34353_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34356) : fret.call(null,G__34356));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34354_SHARP_){
var G__34357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34354_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34357) : fret.call(null,G__34357));
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
var G__36868 = (i + (1));
i = G__36868;
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
var len__4789__auto___36871 = arguments.length;
var i__4790__auto___36872 = (0);
while(true){
if((i__4790__auto___36872 < len__4789__auto___36871)){
args__4795__auto__.push((arguments[i__4790__auto___36872]));

var G__36873 = (i__4790__auto___36872 + (1));
i__4790__auto___36872 = G__36873;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34363){
var map__34364 = p__34363;
var map__34364__$1 = (((((!((map__34364 == null))))?(((((map__34364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34364):map__34364);
var opts = map__34364__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34358){
var G__34359 = cljs.core.first(seq34358);
var seq34358__$1 = cljs.core.next(seq34358);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34359,seq34358__$1);
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
var c__34272__auto___36879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_34408){
var state_val_34409 = (state_34408[(1)]);
if((state_val_34409 === (7))){
var inst_34404 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34413_36881 = state_34408__$1;
(statearr_34413_36881[(2)] = inst_34404);

(statearr_34413_36881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (1))){
var state_34408__$1 = state_34408;
var statearr_34414_36882 = state_34408__$1;
(statearr_34414_36882[(2)] = null);

(statearr_34414_36882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (4))){
var inst_34384 = (state_34408[(7)]);
var inst_34384__$1 = (state_34408[(2)]);
var inst_34385 = (inst_34384__$1 == null);
var state_34408__$1 = (function (){var statearr_34415 = state_34408;
(statearr_34415[(7)] = inst_34384__$1);

return statearr_34415;
})();
if(cljs.core.truth_(inst_34385)){
var statearr_34416_36884 = state_34408__$1;
(statearr_34416_36884[(1)] = (5));

} else {
var statearr_34417_36885 = state_34408__$1;
(statearr_34417_36885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (13))){
var state_34408__$1 = state_34408;
var statearr_34418_36887 = state_34408__$1;
(statearr_34418_36887[(2)] = null);

(statearr_34418_36887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (6))){
var inst_34384 = (state_34408[(7)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34408__$1,(11),to,inst_34384);
} else {
if((state_val_34409 === (3))){
var inst_34406 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34408__$1,inst_34406);
} else {
if((state_val_34409 === (12))){
var state_34408__$1 = state_34408;
var statearr_34419_36889 = state_34408__$1;
(statearr_34419_36889[(2)] = null);

(statearr_34419_36889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (2))){
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34408__$1,(4),from);
} else {
if((state_val_34409 === (11))){
var inst_34394 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
if(cljs.core.truth_(inst_34394)){
var statearr_34420_36890 = state_34408__$1;
(statearr_34420_36890[(1)] = (12));

} else {
var statearr_34421_36891 = state_34408__$1;
(statearr_34421_36891[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (9))){
var state_34408__$1 = state_34408;
var statearr_34422_36893 = state_34408__$1;
(statearr_34422_36893[(2)] = null);

(statearr_34422_36893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (5))){
var state_34408__$1 = state_34408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34423_36894 = state_34408__$1;
(statearr_34423_36894[(1)] = (8));

} else {
var statearr_34424_36895 = state_34408__$1;
(statearr_34424_36895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (14))){
var inst_34402 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34425_36897 = state_34408__$1;
(statearr_34425_36897[(2)] = inst_34402);

(statearr_34425_36897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (10))){
var inst_34391 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34426_36898 = state_34408__$1;
(statearr_34426_36898[(2)] = inst_34391);

(statearr_34426_36898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (8))){
var inst_34388 = cljs.core.async.close_BANG_(to);
var state_34408__$1 = state_34408;
var statearr_34427_36900 = state_34408__$1;
(statearr_34427_36900[(2)] = inst_34388);

(statearr_34427_36900[(1)] = (10));


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
var statearr_34434 = [null,null,null,null,null,null,null,null];
(statearr_34434[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34434[(1)] = (1));

return statearr_34434;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34408){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34408);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34436){if((e34436 instanceof Object)){
var ex__34210__auto__ = e34436;
var statearr_34439_36902 = state_34408;
(statearr_34439_36902[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36904 = state_34408;
state_34408 = G__36904;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_34443 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_34443[(6)] = c__34272__auto___36879);

return statearr_34443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
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
var c__34272__auto___36907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_34452){
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
var statearr_34457_36910 = state_34452;
(statearr_34457_36910[(5)] = ex__34210__auto__);


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
var state__34274__auto__ = (function (){var statearr_34458 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_34458[(6)] = c__34272__auto___36907);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
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
var c__34272__auto___36920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34272__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = ((function (__36916,c__34272__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34478_36922 = state_34476__$1;
(statearr_34478_36922[(2)] = null);

(statearr_34478_36922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (2))){
var state_34476__$1 = state_34476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34476__$1,(4),jobs);
} else {
if((state_val_34477 === (3))){
var inst_34474 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34476__$1,inst_34474);
} else {
if((state_val_34477 === (4))){
var inst_34466 = (state_34476[(2)]);
var inst_34467 = process(inst_34466);
var state_34476__$1 = state_34476;
if(cljs.core.truth_(inst_34467)){
var statearr_34479_36924 = state_34476__$1;
(statearr_34479_36924[(1)] = (5));

} else {
var statearr_34480_36925 = state_34476__$1;
(statearr_34480_36925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34481_36927 = state_34476__$1;
(statearr_34481_36927[(2)] = null);

(statearr_34481_36927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var state_34476__$1 = state_34476;
var statearr_34482_36928 = state_34476__$1;
(statearr_34482_36928[(2)] = null);

(statearr_34482_36928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34483_36930 = state_34476__$1;
(statearr_34483_36930[(2)] = inst_34472);

(statearr_34483_36930[(1)] = (3));


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
});})(__36916,c__34272__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34206__auto__,c__34272__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34484 = [null,null,null,null,null,null,null];
(statearr_34484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34484[(1)] = (1));

return statearr_34484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34476){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34476);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34485){if((e34485 instanceof Object)){
var ex__34210__auto__ = e34485;
var statearr_34486_36932 = state_34476;
(statearr_34486_36932[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36934 = state_34476;
state_34476 = G__36934;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36916,switch__34206__auto__,c__34272__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34274__auto__ = (function (){var statearr_34487 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_34487[(6)] = c__34272__auto___36920);

return statearr_34487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
});})(__36916,c__34272__auto___36920,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
case "async":
var c__34272__auto___36935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34272__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = ((function (__36916,c__34272__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (state_34500){
var state_val_34501 = (state_34500[(1)]);
if((state_val_34501 === (1))){
var state_34500__$1 = state_34500;
var statearr_34503_36937 = state_34500__$1;
(statearr_34503_36937[(2)] = null);

(statearr_34503_36937[(1)] = (2));


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
var inst_34490 = (state_34500[(2)]);
var inst_34491 = async(inst_34490);
var state_34500__$1 = state_34500;
if(cljs.core.truth_(inst_34491)){
var statearr_34507_36940 = state_34500__$1;
(statearr_34507_36940[(1)] = (5));

} else {
var statearr_34508_36941 = state_34500__$1;
(statearr_34508_36941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (5))){
var state_34500__$1 = state_34500;
var statearr_34509_36942 = state_34500__$1;
(statearr_34509_36942[(2)] = null);

(statearr_34509_36942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (6))){
var state_34500__$1 = state_34500;
var statearr_34510_36943 = state_34500__$1;
(statearr_34510_36943[(2)] = null);

(statearr_34510_36943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (7))){
var inst_34496 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34511_36945 = state_34500__$1;
(statearr_34511_36945[(2)] = inst_34496);

(statearr_34511_36945[(1)] = (3));


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
});})(__36916,c__34272__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34206__auto__,c__34272__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34513 = [null,null,null,null,null,null,null];
(statearr_34513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34513[(1)] = (1));

return statearr_34513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34500){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34500);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34514){if((e34514 instanceof Object)){
var ex__34210__auto__ = e34514;
var statearr_34515_36948 = state_34500;
(statearr_34515_36948[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36949 = state_34500;
state_34500 = G__36949;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36916,switch__34206__auto__,c__34272__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34274__auto__ = (function (){var statearr_34516 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_34516[(6)] = c__34272__auto___36935);

return statearr_34516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
});})(__36916,c__34272__auto___36935,G__34463_36917,G__34463_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36918__$1)].join('')));

}

var G__36951 = (__36916 + (1));
__36916 = G__36951;
continue;
} else {
}
break;
}

var c__34272__auto___36952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_34543){
var state_val_34544 = (state_34543[(1)]);
if((state_val_34544 === (7))){
var inst_34537 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34550_36953 = state_34543__$1;
(statearr_34550_36953[(2)] = inst_34537);

(statearr_34550_36953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (1))){
var state_34543__$1 = state_34543;
var statearr_34551_36954 = state_34543__$1;
(statearr_34551_36954[(2)] = null);

(statearr_34551_36954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (4))){
var inst_34519 = (state_34543[(7)]);
var inst_34519__$1 = (state_34543[(2)]);
var inst_34520 = (inst_34519__$1 == null);
var state_34543__$1 = (function (){var statearr_34552 = state_34543;
(statearr_34552[(7)] = inst_34519__$1);

return statearr_34552;
})();
if(cljs.core.truth_(inst_34520)){
var statearr_34553_36962 = state_34543__$1;
(statearr_34553_36962[(1)] = (5));

} else {
var statearr_34554_36963 = state_34543__$1;
(statearr_34554_36963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (6))){
var inst_34524 = (state_34543[(8)]);
var inst_34519 = (state_34543[(7)]);
var inst_34524__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34527 = [inst_34519,inst_34524__$1];
var inst_34528 = (new cljs.core.PersistentVector(null,2,(5),inst_34525,inst_34527,null));
var state_34543__$1 = (function (){var statearr_34555 = state_34543;
(statearr_34555[(8)] = inst_34524__$1);

return statearr_34555;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34543__$1,(8),jobs,inst_34528);
} else {
if((state_val_34544 === (3))){
var inst_34539 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34543__$1,inst_34539);
} else {
if((state_val_34544 === (2))){
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34543__$1,(4),from);
} else {
if((state_val_34544 === (9))){
var inst_34534 = (state_34543[(2)]);
var state_34543__$1 = (function (){var statearr_34556 = state_34543;
(statearr_34556[(9)] = inst_34534);

return statearr_34556;
})();
var statearr_34558_36965 = state_34543__$1;
(statearr_34558_36965[(2)] = null);

(statearr_34558_36965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (5))){
var inst_34522 = cljs.core.async.close_BANG_(jobs);
var state_34543__$1 = state_34543;
var statearr_34559_36967 = state_34543__$1;
(statearr_34559_36967[(2)] = inst_34522);

(statearr_34559_36967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (8))){
var inst_34524 = (state_34543[(8)]);
var inst_34530 = (state_34543[(2)]);
var state_34543__$1 = (function (){var statearr_34560 = state_34543;
(statearr_34560[(10)] = inst_34530);

return statearr_34560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34543__$1,(9),results,inst_34524);
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
var statearr_34561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34561[(1)] = (1));

return statearr_34561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34543){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34543);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34562){if((e34562 instanceof Object)){
var ex__34210__auto__ = e34562;
var statearr_34563_36972 = state_34543;
(statearr_34563_36972[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36973 = state_34543;
state_34543 = G__36973;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_34568 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_34568[(6)] = c__34272__auto___36952);

return statearr_34568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
}));


var c__34272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_34609){
var state_val_34610 = (state_34609[(1)]);
if((state_val_34610 === (7))){
var inst_34605 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34611_36980 = state_34609__$1;
(statearr_34611_36980[(2)] = inst_34605);

(statearr_34611_36980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (20))){
var state_34609__$1 = state_34609;
var statearr_34612_36981 = state_34609__$1;
(statearr_34612_36981[(2)] = null);

(statearr_34612_36981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (1))){
var state_34609__$1 = state_34609;
var statearr_34613_36982 = state_34609__$1;
(statearr_34613_36982[(2)] = null);

(statearr_34613_36982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (4))){
var inst_34571 = (state_34609[(7)]);
var inst_34571__$1 = (state_34609[(2)]);
var inst_34575 = (inst_34571__$1 == null);
var state_34609__$1 = (function (){var statearr_34614 = state_34609;
(statearr_34614[(7)] = inst_34571__$1);

return statearr_34614;
})();
if(cljs.core.truth_(inst_34575)){
var statearr_34615_36983 = state_34609__$1;
(statearr_34615_36983[(1)] = (5));

} else {
var statearr_34616_36984 = state_34609__$1;
(statearr_34616_36984[(1)] = (6));

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
var statearr_34617_36987 = state_34609__$1;
(statearr_34617_36987[(2)] = inst_34600);

(statearr_34617_36987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (13))){
var inst_34602 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34618 = state_34609;
(statearr_34618[(9)] = inst_34602);

return statearr_34618;
})();
var statearr_34621_36990 = state_34609__$1;
(statearr_34621_36990[(2)] = null);

(statearr_34621_36990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (6))){
var inst_34571 = (state_34609[(7)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34609__$1,(11),inst_34571);
} else {
if((state_val_34610 === (17))){
var inst_34595 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
if(cljs.core.truth_(inst_34595)){
var statearr_34623_36993 = state_34609__$1;
(statearr_34623_36993[(1)] = (19));

} else {
var statearr_34624_36994 = state_34609__$1;
(statearr_34624_36994[(1)] = (20));

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
var statearr_34625_36999 = state_34609__$1;
(statearr_34625_36999[(2)] = null);

(statearr_34625_36999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (11))){
var inst_34584 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34626 = state_34609;
(statearr_34626[(10)] = inst_34584);

return statearr_34626;
})();
var statearr_34627_37000 = state_34609__$1;
(statearr_34627_37000[(2)] = null);

(statearr_34627_37000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (9))){
var state_34609__$1 = state_34609;
var statearr_34628_37006 = state_34609__$1;
(statearr_34628_37006[(2)] = null);

(statearr_34628_37006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (5))){
var state_34609__$1 = state_34609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37007 = state_34609__$1;
(statearr_34629_37007[(1)] = (8));

} else {
var statearr_34630_37010 = state_34609__$1;
(statearr_34630_37010[(1)] = (9));

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
var statearr_34632_37013 = state_34609__$1;
(statearr_34632_37013[(1)] = (15));

} else {
var statearr_34633_37015 = state_34609__$1;
(statearr_34633_37015[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (16))){
var state_34609__$1 = state_34609;
var statearr_34634_37018 = state_34609__$1;
(statearr_34634_37018[(2)] = false);

(statearr_34634_37018[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (10))){
var inst_34581 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34635_37023 = state_34609__$1;
(statearr_34635_37023[(2)] = inst_34581);

(statearr_34635_37023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (18))){
var inst_34592 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34636_37030 = state_34609__$1;
(statearr_34636_37030[(2)] = inst_34592);

(statearr_34636_37030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (8))){
var inst_34578 = cljs.core.async.close_BANG_(to);
var state_34609__$1 = state_34609;
var statearr_34637_37031 = state_34609__$1;
(statearr_34637_37031[(2)] = inst_34578);

(statearr_34637_37031[(1)] = (10));


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
var statearr_34640_37039 = state_34609;
(statearr_34640_37039[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37042 = state_34609;
state_34609 = G__37042;
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
var state__34274__auto__ = (function (){var statearr_34641 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_34641[(6)] = c__34272__auto__);

return statearr_34641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
}));

return c__34272__auto__;
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
var c__34272__auto___37076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_37078 = state_34673__$1;
(statearr_34675_37078[(2)] = inst_34669);

(statearr_34675_37078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_37084 = state_34673__$1;
(statearr_34676_37084[(2)] = null);

(statearr_34676_37084[(1)] = (2));


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
var statearr_34678_37087 = state_34673__$1;
(statearr_34678_37087[(1)] = (5));

} else {
var statearr_34679_37088 = state_34673__$1;
(statearr_34679_37088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_37091 = state_34673__$1;
(statearr_34680_37091[(2)] = null);

(statearr_34680_37091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_37093 = state_34673__$1;
(statearr_34681_37093[(1)] = (9));

} else {
var statearr_34682_37094 = state_34673__$1;
(statearr_34682_37094[(1)] = (10));

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
var statearr_34683_37097 = state_34673__$1;
(statearr_34683_37097[(2)] = null);

(statearr_34683_37097[(1)] = (2));


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
var statearr_34684_37103 = state_34673__$1;
(statearr_34684_37103[(2)] = tc);

(statearr_34684_37103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_37104 = state_34673__$1;
(statearr_34686_37104[(2)] = inst_34654);

(statearr_34686_37104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_37111 = state_34673__$1;
(statearr_34687_37111[(2)] = inst_34667);

(statearr_34687_37111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_37113 = state_34673__$1;
(statearr_34688_37113[(2)] = fc);

(statearr_34688_37113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34689_37115 = state_34673__$1;
(statearr_34689_37115[(1)] = (12));

} else {
var statearr_34690_37116 = state_34673__$1;
(statearr_34690_37116[(1)] = (13));

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
var statearr_34693_37120 = state_34673;
(statearr_34693_37120[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37124 = state_34673;
state_34673 = G__37124;
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
var state__34274__auto__ = (function (){var statearr_34694 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_34694[(6)] = c__34272__auto___37076);

return statearr_34694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
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
var c__34272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (7))){
var inst_34711 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34720_37131 = state_34715__$1;
(statearr_34720_37131[(2)] = inst_34711);

(statearr_34720_37131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (1))){
var inst_34695 = init;
var state_34715__$1 = (function (){var statearr_34721 = state_34715;
(statearr_34721[(7)] = inst_34695);

return statearr_34721;
})();
var statearr_34722_37132 = state_34715__$1;
(statearr_34722_37132[(2)] = null);

(statearr_34722_37132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (4))){
var inst_34698 = (state_34715[(8)]);
var inst_34698__$1 = (state_34715[(2)]);
var inst_34699 = (inst_34698__$1 == null);
var state_34715__$1 = (function (){var statearr_34726 = state_34715;
(statearr_34726[(8)] = inst_34698__$1);

return statearr_34726;
})();
if(cljs.core.truth_(inst_34699)){
var statearr_34727_37135 = state_34715__$1;
(statearr_34727_37135[(1)] = (5));

} else {
var statearr_34728_37136 = state_34715__$1;
(statearr_34728_37136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (6))){
var inst_34698 = (state_34715[(8)]);
var inst_34695 = (state_34715[(7)]);
var inst_34702 = (state_34715[(9)]);
var inst_34702__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34695,inst_34698) : f.call(null,inst_34695,inst_34698));
var inst_34703 = cljs.core.reduced_QMARK_(inst_34702__$1);
var state_34715__$1 = (function (){var statearr_34731 = state_34715;
(statearr_34731[(9)] = inst_34702__$1);

return statearr_34731;
})();
if(inst_34703){
var statearr_34732_37143 = state_34715__$1;
(statearr_34732_37143[(1)] = (8));

} else {
var statearr_34733_37145 = state_34715__$1;
(statearr_34733_37145[(1)] = (9));

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
var state_34715__$1 = (function (){var statearr_34735 = state_34715;
(statearr_34735[(7)] = inst_34695);

return statearr_34735;
})();
var statearr_34736_37150 = state_34715__$1;
(statearr_34736_37150[(2)] = null);

(statearr_34736_37150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (5))){
var inst_34695 = (state_34715[(7)]);
var state_34715__$1 = state_34715;
var statearr_34737_37151 = state_34715__$1;
(statearr_34737_37151[(2)] = inst_34695);

(statearr_34737_37151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (10))){
var inst_34709 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34738_37152 = state_34715__$1;
(statearr_34738_37152[(2)] = inst_34709);

(statearr_34738_37152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (8))){
var inst_34702 = (state_34715[(9)]);
var inst_34705 = cljs.core.deref(inst_34702);
var state_34715__$1 = state_34715;
var statearr_34741_37159 = state_34715__$1;
(statearr_34741_37159[(2)] = inst_34705);

(statearr_34741_37159[(1)] = (10));


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
var statearr_34742 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34742[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34742[(1)] = (1));

return statearr_34742;
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
}catch (e34743){if((e34743 instanceof Object)){
var ex__34210__auto__ = e34743;
var statearr_34744_37164 = state_34715;
(statearr_34744_37164[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34743;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37165 = state_34715;
state_34715 = G__37165;
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
var state__34274__auto__ = (function (){var statearr_34745 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_34745[(6)] = c__34272__auto__);

return statearr_34745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
}));

return c__34272__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_34752){
var state_val_34753 = (state_34752[(1)]);
if((state_val_34753 === (1))){
var inst_34747 = cljs.core.async.reduce(f__$1,init,ch);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34752__$1,(2),inst_34747);
} else {
if((state_val_34753 === (2))){
var inst_34749 = (state_34752[(2)]);
var inst_34750 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34749) : f__$1.call(null,inst_34749));
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34752__$1,inst_34750);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34755 = [null,null,null,null,null,null,null];
(statearr_34755[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34755[(1)] = (1));

return statearr_34755;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34752){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34752);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34756){if((e34756 instanceof Object)){
var ex__34210__auto__ = e34756;
var statearr_34759_37185 = state_34752;
(statearr_34759_37185[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37187 = state_34752;
state_34752 = G__37187;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34752){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_34760 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_34760[(6)] = c__34272__auto__);

return statearr_34760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
}));

return c__34272__auto__;
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
var G__34765 = arguments.length;
switch (G__34765) {
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
var c__34272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_34791){
var state_val_34792 = (state_34791[(1)]);
if((state_val_34792 === (7))){
var inst_34772 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
var statearr_34793_37205 = state_34791__$1;
(statearr_34793_37205[(2)] = inst_34772);

(statearr_34793_37205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (1))){
var inst_34766 = cljs.core.seq(coll);
var inst_34767 = inst_34766;
var state_34791__$1 = (function (){var statearr_34794 = state_34791;
(statearr_34794[(7)] = inst_34767);

return statearr_34794;
})();
var statearr_34795_37208 = state_34791__$1;
(statearr_34795_37208[(2)] = null);

(statearr_34795_37208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (4))){
var inst_34767 = (state_34791[(7)]);
var inst_34770 = cljs.core.first(inst_34767);
var state_34791__$1 = state_34791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34791__$1,(7),ch,inst_34770);
} else {
if((state_val_34792 === (13))){
var inst_34784 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
var statearr_34796_37211 = state_34791__$1;
(statearr_34796_37211[(2)] = inst_34784);

(statearr_34796_37211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (6))){
var inst_34775 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
if(cljs.core.truth_(inst_34775)){
var statearr_34800_37213 = state_34791__$1;
(statearr_34800_37213[(1)] = (8));

} else {
var statearr_34801_37214 = state_34791__$1;
(statearr_34801_37214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (3))){
var inst_34789 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34791__$1,inst_34789);
} else {
if((state_val_34792 === (12))){
var state_34791__$1 = state_34791;
var statearr_34802_37216 = state_34791__$1;
(statearr_34802_37216[(2)] = null);

(statearr_34802_37216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (2))){
var inst_34767 = (state_34791[(7)]);
var state_34791__$1 = state_34791;
if(cljs.core.truth_(inst_34767)){
var statearr_34803_37218 = state_34791__$1;
(statearr_34803_37218[(1)] = (4));

} else {
var statearr_34804_37221 = state_34791__$1;
(statearr_34804_37221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (11))){
var inst_34781 = cljs.core.async.close_BANG_(ch);
var state_34791__$1 = state_34791;
var statearr_34805_37224 = state_34791__$1;
(statearr_34805_37224[(2)] = inst_34781);

(statearr_34805_37224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (9))){
var state_34791__$1 = state_34791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34809_37225 = state_34791__$1;
(statearr_34809_37225[(1)] = (11));

} else {
var statearr_34810_37226 = state_34791__$1;
(statearr_34810_37226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (5))){
var inst_34767 = (state_34791[(7)]);
var state_34791__$1 = state_34791;
var statearr_34811_37228 = state_34791__$1;
(statearr_34811_37228[(2)] = inst_34767);

(statearr_34811_37228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (10))){
var inst_34787 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
var statearr_34812_37232 = state_34791__$1;
(statearr_34812_37232[(2)] = inst_34787);

(statearr_34812_37232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (8))){
var inst_34767 = (state_34791[(7)]);
var inst_34777 = cljs.core.next(inst_34767);
var inst_34767__$1 = inst_34777;
var state_34791__$1 = (function (){var statearr_34816 = state_34791;
(statearr_34816[(7)] = inst_34767__$1);

return statearr_34816;
})();
var statearr_34817_37234 = state_34791__$1;
(statearr_34817_37234[(2)] = null);

(statearr_34817_37234[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34791){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34791);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34819){if((e34819 instanceof Object)){
var ex__34210__auto__ = e34819;
var statearr_34820_37240 = state_34791;
(statearr_34820_37240[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37244 = state_34791;
state_34791 = G__37244;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_34821 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_34821[(6)] = c__34272__auto__);

return statearr_34821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
}));

return c__34272__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34828 = (function (ch,cs,meta34829){
this.ch = ch;
this.cs = cs;
this.meta34829 = meta34829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34830,meta34829__$1){
var self__ = this;
var _34830__$1 = this;
return (new cljs.core.async.t_cljs$core$async34828(self__.ch,self__.cs,meta34829__$1));
}));

(cljs.core.async.t_cljs$core$async34828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34830){
var self__ = this;
var _34830__$1 = this;
return self__.meta34829;
}));

(cljs.core.async.t_cljs$core$async34828.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34828.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34828.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34828.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34828.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34829","meta34829",-927715109,null)], null);
}));

(cljs.core.async.t_cljs$core$async34828.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34828");

(cljs.core.async.t_cljs$core$async34828.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34828");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34828.
 */
cljs.core.async.__GT_t_cljs$core$async34828 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34828(ch__$1,cs__$1,meta34829){
return (new cljs.core.async.t_cljs$core$async34828(ch__$1,cs__$1,meta34829));
});

}

return (new cljs.core.async.t_cljs$core$async34828(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34272__auto___37288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_34972){
var state_val_34973 = (state_34972[(1)]);
if((state_val_34973 === (7))){
var inst_34968 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_34974_37294 = state_34972__$1;
(statearr_34974_37294[(2)] = inst_34968);

(statearr_34974_37294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (20))){
var inst_34871 = (state_34972[(7)]);
var inst_34883 = cljs.core.first(inst_34871);
var inst_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34883,(0),null);
var inst_34885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34883,(1),null);
var state_34972__$1 = (function (){var statearr_34975 = state_34972;
(statearr_34975[(8)] = inst_34884);

return statearr_34975;
})();
if(cljs.core.truth_(inst_34885)){
var statearr_34976_37299 = state_34972__$1;
(statearr_34976_37299[(1)] = (22));

} else {
var statearr_34977_37300 = state_34972__$1;
(statearr_34977_37300[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (27))){
var inst_34837 = (state_34972[(9)]);
var inst_34913 = (state_34972[(10)]);
var inst_34920 = (state_34972[(11)]);
var inst_34915 = (state_34972[(12)]);
var inst_34920__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34913,inst_34915);
var inst_34921 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34920__$1,inst_34837,done);
var state_34972__$1 = (function (){var statearr_34981 = state_34972;
(statearr_34981[(11)] = inst_34920__$1);

return statearr_34981;
})();
if(cljs.core.truth_(inst_34921)){
var statearr_34982_37308 = state_34972__$1;
(statearr_34982_37308[(1)] = (30));

} else {
var statearr_34983_37312 = state_34972__$1;
(statearr_34983_37312[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (1))){
var state_34972__$1 = state_34972;
var statearr_34984_37316 = state_34972__$1;
(statearr_34984_37316[(2)] = null);

(statearr_34984_37316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (24))){
var inst_34871 = (state_34972[(7)]);
var inst_34890 = (state_34972[(2)]);
var inst_34891 = cljs.core.next(inst_34871);
var inst_34848 = inst_34891;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34972__$1 = (function (){var statearr_34988 = state_34972;
(statearr_34988[(13)] = inst_34848);

(statearr_34988[(14)] = inst_34849);

(statearr_34988[(15)] = inst_34851);

(statearr_34988[(16)] = inst_34850);

(statearr_34988[(17)] = inst_34890);

return statearr_34988;
})();
var statearr_34989_37319 = state_34972__$1;
(statearr_34989_37319[(2)] = null);

(statearr_34989_37319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (39))){
var state_34972__$1 = state_34972;
var statearr_34993_37324 = state_34972__$1;
(statearr_34993_37324[(2)] = null);

(statearr_34993_37324[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (4))){
var inst_34837 = (state_34972[(9)]);
var inst_34837__$1 = (state_34972[(2)]);
var inst_34838 = (inst_34837__$1 == null);
var state_34972__$1 = (function (){var statearr_34994 = state_34972;
(statearr_34994[(9)] = inst_34837__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34838)){
var statearr_34995_37330 = state_34972__$1;
(statearr_34995_37330[(1)] = (5));

} else {
var statearr_34996_37331 = state_34972__$1;
(statearr_34996_37331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (15))){
var inst_34848 = (state_34972[(13)]);
var inst_34849 = (state_34972[(14)]);
var inst_34851 = (state_34972[(15)]);
var inst_34850 = (state_34972[(16)]);
var inst_34867 = (state_34972[(2)]);
var inst_34868 = (inst_34851 + (1));
var tmp34990 = inst_34848;
var tmp34991 = inst_34849;
var tmp34992 = inst_34850;
var inst_34848__$1 = tmp34990;
var inst_34849__$1 = tmp34991;
var inst_34850__$1 = tmp34992;
var inst_34851__$1 = inst_34868;
var state_34972__$1 = (function (){var statearr_34997 = state_34972;
(statearr_34997[(13)] = inst_34848__$1);

(statearr_34997[(14)] = inst_34849__$1);

(statearr_34997[(15)] = inst_34851__$1);

(statearr_34997[(16)] = inst_34850__$1);

(statearr_34997[(18)] = inst_34867);

return statearr_34997;
})();
var statearr_34998_37341 = state_34972__$1;
(statearr_34998_37341[(2)] = null);

(statearr_34998_37341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (21))){
var inst_34894 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35002_37348 = state_34972__$1;
(statearr_35002_37348[(2)] = inst_34894);

(statearr_35002_37348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (31))){
var inst_34920 = (state_34972[(11)]);
var inst_34924 = done(null);
var inst_34925 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34920);
var state_34972__$1 = (function (){var statearr_35003 = state_34972;
(statearr_35003[(19)] = inst_34924);

return statearr_35003;
})();
var statearr_35004_37351 = state_34972__$1;
(statearr_35004_37351[(2)] = inst_34925);

(statearr_35004_37351[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (32))){
var inst_34914 = (state_34972[(20)]);
var inst_34913 = (state_34972[(10)]);
var inst_34915 = (state_34972[(12)]);
var inst_34912 = (state_34972[(21)]);
var inst_34927 = (state_34972[(2)]);
var inst_34928 = (inst_34915 + (1));
var tmp34999 = inst_34914;
var tmp35000 = inst_34913;
var tmp35001 = inst_34912;
var inst_34912__$1 = tmp35001;
var inst_34913__$1 = tmp35000;
var inst_34914__$1 = tmp34999;
var inst_34915__$1 = inst_34928;
var state_34972__$1 = (function (){var statearr_35005 = state_34972;
(statearr_35005[(22)] = inst_34927);

(statearr_35005[(20)] = inst_34914__$1);

(statearr_35005[(10)] = inst_34913__$1);

(statearr_35005[(12)] = inst_34915__$1);

(statearr_35005[(21)] = inst_34912__$1);

return statearr_35005;
})();
var statearr_35006_37356 = state_34972__$1;
(statearr_35006_37356[(2)] = null);

(statearr_35006_37356[(1)] = (25));


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
var statearr_35008_37362 = state_34972__$1;
(statearr_35008_37362[(2)] = inst_34945);

(statearr_35008_37362[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (33))){
var inst_34931 = (state_34972[(25)]);
var inst_34933 = cljs.core.chunked_seq_QMARK_(inst_34931);
var state_34972__$1 = state_34972;
if(inst_34933){
var statearr_35009_37364 = state_34972__$1;
(statearr_35009_37364[(1)] = (36));

} else {
var statearr_35010_37366 = state_34972__$1;
(statearr_35010_37366[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (13))){
var inst_34861 = (state_34972[(26)]);
var inst_34864 = cljs.core.async.close_BANG_(inst_34861);
var state_34972__$1 = state_34972;
var statearr_35011_37372 = state_34972__$1;
(statearr_35011_37372[(2)] = inst_34864);

(statearr_35011_37372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (22))){
var inst_34884 = (state_34972[(8)]);
var inst_34887 = cljs.core.async.close_BANG_(inst_34884);
var state_34972__$1 = state_34972;
var statearr_35012_37374 = state_34972__$1;
(statearr_35012_37374[(2)] = inst_34887);

(statearr_35012_37374[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (36))){
var inst_34931 = (state_34972[(25)]);
var inst_34935 = cljs.core.chunk_first(inst_34931);
var inst_34936 = cljs.core.chunk_rest(inst_34931);
var inst_34937 = cljs.core.count(inst_34935);
var inst_34912 = inst_34936;
var inst_34913 = inst_34935;
var inst_34914 = inst_34937;
var inst_34915 = (0);
var state_34972__$1 = (function (){var statearr_35013 = state_34972;
(statearr_35013[(20)] = inst_34914);

(statearr_35013[(10)] = inst_34913);

(statearr_35013[(12)] = inst_34915);

(statearr_35013[(21)] = inst_34912);

return statearr_35013;
})();
var statearr_35014_37379 = state_34972__$1;
(statearr_35014_37379[(2)] = null);

(statearr_35014_37379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (41))){
var inst_34931 = (state_34972[(25)]);
var inst_34947 = (state_34972[(2)]);
var inst_34948 = cljs.core.next(inst_34931);
var inst_34912 = inst_34948;
var inst_34913 = null;
var inst_34914 = (0);
var inst_34915 = (0);
var state_34972__$1 = (function (){var statearr_35015 = state_34972;
(statearr_35015[(27)] = inst_34947);

(statearr_35015[(20)] = inst_34914);

(statearr_35015[(10)] = inst_34913);

(statearr_35015[(12)] = inst_34915);

(statearr_35015[(21)] = inst_34912);

return statearr_35015;
})();
var statearr_35016_37384 = state_34972__$1;
(statearr_35016_37384[(2)] = null);

(statearr_35016_37384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (43))){
var state_34972__$1 = state_34972;
var statearr_35017_37385 = state_34972__$1;
(statearr_35017_37385[(2)] = null);

(statearr_35017_37385[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (29))){
var inst_34956 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35018_37392 = state_34972__$1;
(statearr_35018_37392[(2)] = inst_34956);

(statearr_35018_37392[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (44))){
var inst_34965 = (state_34972[(2)]);
var state_34972__$1 = (function (){var statearr_35019 = state_34972;
(statearr_35019[(28)] = inst_34965);

return statearr_35019;
})();
var statearr_35020_37394 = state_34972__$1;
(statearr_35020_37394[(2)] = null);

(statearr_35020_37394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (6))){
var inst_34904 = (state_34972[(29)]);
var inst_34903 = cljs.core.deref(cs);
var inst_34904__$1 = cljs.core.keys(inst_34903);
var inst_34905 = cljs.core.count(inst_34904__$1);
var inst_34906 = cljs.core.reset_BANG_(dctr,inst_34905);
var inst_34911 = cljs.core.seq(inst_34904__$1);
var inst_34912 = inst_34911;
var inst_34913 = null;
var inst_34914 = (0);
var inst_34915 = (0);
var state_34972__$1 = (function (){var statearr_35021 = state_34972;
(statearr_35021[(20)] = inst_34914);

(statearr_35021[(10)] = inst_34913);

(statearr_35021[(30)] = inst_34906);

(statearr_35021[(12)] = inst_34915);

(statearr_35021[(21)] = inst_34912);

(statearr_35021[(29)] = inst_34904__$1);

return statearr_35021;
})();
var statearr_35022_37401 = state_34972__$1;
(statearr_35022_37401[(2)] = null);

(statearr_35022_37401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (28))){
var inst_34931 = (state_34972[(25)]);
var inst_34912 = (state_34972[(21)]);
var inst_34931__$1 = cljs.core.seq(inst_34912);
var state_34972__$1 = (function (){var statearr_35023 = state_34972;
(statearr_35023[(25)] = inst_34931__$1);

return statearr_35023;
})();
if(inst_34931__$1){
var statearr_35024_37405 = state_34972__$1;
(statearr_35024_37405[(1)] = (33));

} else {
var statearr_35025_37406 = state_34972__$1;
(statearr_35025_37406[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (25))){
var inst_34914 = (state_34972[(20)]);
var inst_34915 = (state_34972[(12)]);
var inst_34917 = (inst_34915 < inst_34914);
var inst_34918 = inst_34917;
var state_34972__$1 = state_34972;
if(cljs.core.truth_(inst_34918)){
var statearr_35026_37408 = state_34972__$1;
(statearr_35026_37408[(1)] = (27));

} else {
var statearr_35027_37409 = state_34972__$1;
(statearr_35027_37409[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (34))){
var state_34972__$1 = state_34972;
var statearr_35028_37410 = state_34972__$1;
(statearr_35028_37410[(2)] = null);

(statearr_35028_37410[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (17))){
var state_34972__$1 = state_34972;
var statearr_35029_37411 = state_34972__$1;
(statearr_35029_37411[(2)] = null);

(statearr_35029_37411[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (3))){
var inst_34970 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34972__$1,inst_34970);
} else {
if((state_val_34973 === (12))){
var inst_34899 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35030_37412 = state_34972__$1;
(statearr_35030_37412[(2)] = inst_34899);

(statearr_35030_37412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (2))){
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34972__$1,(4),ch);
} else {
if((state_val_34973 === (23))){
var state_34972__$1 = state_34972;
var statearr_35031_37413 = state_34972__$1;
(statearr_35031_37413[(2)] = null);

(statearr_35031_37413[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (35))){
var inst_34954 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35032_37417 = state_34972__$1;
(statearr_35032_37417[(2)] = inst_34954);

(statearr_35032_37417[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (19))){
var inst_34871 = (state_34972[(7)]);
var inst_34875 = cljs.core.chunk_first(inst_34871);
var inst_34876 = cljs.core.chunk_rest(inst_34871);
var inst_34877 = cljs.core.count(inst_34875);
var inst_34848 = inst_34876;
var inst_34849 = inst_34875;
var inst_34850 = inst_34877;
var inst_34851 = (0);
var state_34972__$1 = (function (){var statearr_35033 = state_34972;
(statearr_35033[(13)] = inst_34848);

(statearr_35033[(14)] = inst_34849);

(statearr_35033[(15)] = inst_34851);

(statearr_35033[(16)] = inst_34850);

return statearr_35033;
})();
var statearr_35034_37419 = state_34972__$1;
(statearr_35034_37419[(2)] = null);

(statearr_35034_37419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (11))){
var inst_34848 = (state_34972[(13)]);
var inst_34871 = (state_34972[(7)]);
var inst_34871__$1 = cljs.core.seq(inst_34848);
var state_34972__$1 = (function (){var statearr_35035 = state_34972;
(statearr_35035[(7)] = inst_34871__$1);

return statearr_35035;
})();
if(inst_34871__$1){
var statearr_35036_37423 = state_34972__$1;
(statearr_35036_37423[(1)] = (16));

} else {
var statearr_35037_37424 = state_34972__$1;
(statearr_35037_37424[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (9))){
var inst_34901 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35040_37427 = state_34972__$1;
(statearr_35040_37427[(2)] = inst_34901);

(statearr_35040_37427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (5))){
var inst_34846 = cljs.core.deref(cs);
var inst_34847 = cljs.core.seq(inst_34846);
var inst_34848 = inst_34847;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34972__$1 = (function (){var statearr_35043 = state_34972;
(statearr_35043[(13)] = inst_34848);

(statearr_35043[(14)] = inst_34849);

(statearr_35043[(15)] = inst_34851);

(statearr_35043[(16)] = inst_34850);

return statearr_35043;
})();
var statearr_35045_37432 = state_34972__$1;
(statearr_35045_37432[(2)] = null);

(statearr_35045_37432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (14))){
var state_34972__$1 = state_34972;
var statearr_35047_37434 = state_34972__$1;
(statearr_35047_37434[(2)] = null);

(statearr_35047_37434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (45))){
var inst_34962 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35048_37435 = state_34972__$1;
(statearr_35048_37435[(2)] = inst_34962);

(statearr_35048_37435[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (26))){
var inst_34904 = (state_34972[(29)]);
var inst_34958 = (state_34972[(2)]);
var inst_34959 = cljs.core.seq(inst_34904);
var state_34972__$1 = (function (){var statearr_35049 = state_34972;
(statearr_35049[(31)] = inst_34958);

return statearr_35049;
})();
if(inst_34959){
var statearr_35050_37446 = state_34972__$1;
(statearr_35050_37446[(1)] = (42));

} else {
var statearr_35051_37448 = state_34972__$1;
(statearr_35051_37448[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (16))){
var inst_34871 = (state_34972[(7)]);
var inst_34873 = cljs.core.chunked_seq_QMARK_(inst_34871);
var state_34972__$1 = state_34972;
if(inst_34873){
var statearr_35052_37451 = state_34972__$1;
(statearr_35052_37451[(1)] = (19));

} else {
var statearr_35053_37452 = state_34972__$1;
(statearr_35053_37452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (38))){
var inst_34951 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35054_37454 = state_34972__$1;
(statearr_35054_37454[(2)] = inst_34951);

(statearr_35054_37454[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (30))){
var state_34972__$1 = state_34972;
var statearr_35057_37457 = state_34972__$1;
(statearr_35057_37457[(2)] = null);

(statearr_35057_37457[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (10))){
var inst_34849 = (state_34972[(14)]);
var inst_34851 = (state_34972[(15)]);
var inst_34860 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34849,inst_34851);
var inst_34861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34860,(0),null);
var inst_34862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34860,(1),null);
var state_34972__$1 = (function (){var statearr_35060 = state_34972;
(statearr_35060[(26)] = inst_34861);

return statearr_35060;
})();
if(cljs.core.truth_(inst_34862)){
var statearr_35062_37469 = state_34972__$1;
(statearr_35062_37469[(1)] = (13));

} else {
var statearr_35064_37470 = state_34972__$1;
(statearr_35064_37470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (18))){
var inst_34897 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35065_37472 = state_34972__$1;
(statearr_35065_37472[(2)] = inst_34897);

(statearr_35065_37472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (42))){
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34972__$1,(45),dchan);
} else {
if((state_val_34973 === (37))){
var inst_34931 = (state_34972[(25)]);
var inst_34837 = (state_34972[(9)]);
var inst_34940 = (state_34972[(23)]);
var inst_34940__$1 = cljs.core.first(inst_34931);
var inst_34941 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34940__$1,inst_34837,done);
var state_34972__$1 = (function (){var statearr_35066 = state_34972;
(statearr_35066[(23)] = inst_34940__$1);

return statearr_35066;
})();
if(cljs.core.truth_(inst_34941)){
var statearr_35067_37480 = state_34972__$1;
(statearr_35067_37480[(1)] = (39));

} else {
var statearr_35068_37484 = state_34972__$1;
(statearr_35068_37484[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (8))){
var inst_34851 = (state_34972[(15)]);
var inst_34850 = (state_34972[(16)]);
var inst_34854 = (inst_34851 < inst_34850);
var inst_34855 = inst_34854;
var state_34972__$1 = state_34972;
if(cljs.core.truth_(inst_34855)){
var statearr_35069_37488 = state_34972__$1;
(statearr_35069_37488[(1)] = (10));

} else {
var statearr_35070_37489 = state_34972__$1;
(statearr_35070_37489[(1)] = (11));

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
var statearr_35074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35074[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35074[(1)] = (1));

return statearr_35074;
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
}catch (e35077){if((e35077 instanceof Object)){
var ex__34210__auto__ = e35077;
var statearr_35079_37498 = state_34972;
(statearr_35079_37498[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35077;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37500 = state_34972;
state_34972 = G__37500;
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
var state__34274__auto__ = (function (){var statearr_35080 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_35080[(6)] = c__34272__auto___37288);

return statearr_35080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
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
var G__35082 = arguments.length;
switch (G__35082) {
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
var len__4789__auto___37555 = arguments.length;
var i__4790__auto___37556 = (0);
while(true){
if((i__4790__auto___37556 < len__4789__auto___37555)){
args__4795__auto__.push((arguments[i__4790__auto___37556]));

var G__37557 = (i__4790__auto___37556 + (1));
i__4790__auto___37556 = G__37557;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35191){
var map__35192 = p__35191;
var map__35192__$1 = (((((!((map__35192 == null))))?(((((map__35192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35192):map__35192);
var opts = map__35192__$1;
var statearr_35197_37570 = state;
(statearr_35197_37570[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35198_37571 = state;
(statearr_35198_37571[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35199_37573 = state;
(statearr_35199_37573[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35170){
var G__35171 = cljs.core.first(seq35170);
var seq35170__$1 = cljs.core.next(seq35170);
var G__35172 = cljs.core.first(seq35170__$1);
var seq35170__$2 = cljs.core.next(seq35170__$1);
var G__35173 = cljs.core.first(seq35170__$2);
var seq35170__$3 = cljs.core.next(seq35170__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35171,G__35172,G__35173,seq35170__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35232 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35233){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35233 = meta35233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35234,meta35233__$1){
var self__ = this;
var _35234__$1 = this;
return (new cljs.core.async.t_cljs$core$async35232(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35233__$1));
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35234){
var self__ = this;
var _35234__$1 = this;
return self__.meta35233;
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35233","meta35233",-1323400345,null)], null);
}));

(cljs.core.async.t_cljs$core$async35232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35232");

(cljs.core.async.t_cljs$core$async35232.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35232.
 */
cljs.core.async.__GT_t_cljs$core$async35232 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35232(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35233){
return (new cljs.core.async.t_cljs$core$async35232(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35233));
});

}

return (new cljs.core.async.t_cljs$core$async35232(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34272__auto___37640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_35467){
var state_val_35469 = (state_35467[(1)]);
if((state_val_35469 === (7))){
var inst_35327 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
var statearr_35475_37646 = state_35467__$1;
(statearr_35475_37646[(2)] = inst_35327);

(statearr_35475_37646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (20))){
var inst_35343 = (state_35467[(7)]);
var state_35467__$1 = state_35467;
var statearr_35476_37651 = state_35467__$1;
(statearr_35476_37651[(2)] = inst_35343);

(statearr_35476_37651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (27))){
var state_35467__$1 = state_35467;
var statearr_35477_37653 = state_35467__$1;
(statearr_35477_37653[(2)] = null);

(statearr_35477_37653[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (1))){
var inst_35308 = (state_35467[(8)]);
var inst_35308__$1 = calc_state();
var inst_35313 = (inst_35308__$1 == null);
var inst_35314 = cljs.core.not(inst_35313);
var state_35467__$1 = (function (){var statearr_35478 = state_35467;
(statearr_35478[(8)] = inst_35308__$1);

return statearr_35478;
})();
if(inst_35314){
var statearr_35479_37660 = state_35467__$1;
(statearr_35479_37660[(1)] = (2));

} else {
var statearr_35480_37662 = state_35467__$1;
(statearr_35480_37662[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (24))){
var inst_35376 = (state_35467[(9)]);
var inst_35412 = (state_35467[(10)]);
var inst_35388 = (state_35467[(11)]);
var inst_35412__$1 = (inst_35376.cljs$core$IFn$_invoke$arity$1 ? inst_35376.cljs$core$IFn$_invoke$arity$1(inst_35388) : inst_35376.call(null,inst_35388));
var state_35467__$1 = (function (){var statearr_35483 = state_35467;
(statearr_35483[(10)] = inst_35412__$1);

return statearr_35483;
})();
if(cljs.core.truth_(inst_35412__$1)){
var statearr_35484_37665 = state_35467__$1;
(statearr_35484_37665[(1)] = (29));

} else {
var statearr_35485_37667 = state_35467__$1;
(statearr_35485_37667[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (4))){
var inst_35330 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
if(cljs.core.truth_(inst_35330)){
var statearr_35486_37669 = state_35467__$1;
(statearr_35486_37669[(1)] = (8));

} else {
var statearr_35487_37670 = state_35467__$1;
(statearr_35487_37670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (15))){
var inst_35367 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
if(cljs.core.truth_(inst_35367)){
var statearr_35490_37671 = state_35467__$1;
(statearr_35490_37671[(1)] = (19));

} else {
var statearr_35493_37672 = state_35467__$1;
(statearr_35493_37672[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (21))){
var inst_35373 = (state_35467[(12)]);
var inst_35373__$1 = (state_35467[(2)]);
var inst_35376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35373__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35373__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35373__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35467__$1 = (function (){var statearr_35497 = state_35467;
(statearr_35497[(9)] = inst_35376);

(statearr_35497[(12)] = inst_35373__$1);

(statearr_35497[(13)] = inst_35377);

return statearr_35497;
})();
return cljs.core.async.ioc_alts_BANG_(state_35467__$1,(22),inst_35378);
} else {
if((state_val_35469 === (31))){
var inst_35425 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
if(cljs.core.truth_(inst_35425)){
var statearr_35502_37677 = state_35467__$1;
(statearr_35502_37677[(1)] = (32));

} else {
var statearr_35503_37678 = state_35467__$1;
(statearr_35503_37678[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (32))){
var inst_35386 = (state_35467[(14)]);
var state_35467__$1 = state_35467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35467__$1,(35),out,inst_35386);
} else {
if((state_val_35469 === (33))){
var inst_35373 = (state_35467[(12)]);
var inst_35343 = inst_35373;
var state_35467__$1 = (function (){var statearr_35509 = state_35467;
(statearr_35509[(7)] = inst_35343);

return statearr_35509;
})();
var statearr_35512_37679 = state_35467__$1;
(statearr_35512_37679[(2)] = null);

(statearr_35512_37679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (13))){
var inst_35343 = (state_35467[(7)]);
var inst_35355 = inst_35343.cljs$lang$protocol_mask$partition0$;
var inst_35357 = (inst_35355 & (64));
var inst_35358 = inst_35343.cljs$core$ISeq$;
var inst_35359 = (cljs.core.PROTOCOL_SENTINEL === inst_35358);
var inst_35360 = ((inst_35357) || (inst_35359));
var state_35467__$1 = state_35467;
if(cljs.core.truth_(inst_35360)){
var statearr_35521_37684 = state_35467__$1;
(statearr_35521_37684[(1)] = (16));

} else {
var statearr_35524_37685 = state_35467__$1;
(statearr_35524_37685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (22))){
var inst_35388 = (state_35467[(11)]);
var inst_35386 = (state_35467[(14)]);
var inst_35385 = (state_35467[(2)]);
var inst_35386__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35385,(0),null);
var inst_35388__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35385,(1),null);
var inst_35392 = (inst_35386__$1 == null);
var inst_35394 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35388__$1,change);
var inst_35395 = ((inst_35392) || (inst_35394));
var state_35467__$1 = (function (){var statearr_35525 = state_35467;
(statearr_35525[(11)] = inst_35388__$1);

(statearr_35525[(14)] = inst_35386__$1);

return statearr_35525;
})();
if(cljs.core.truth_(inst_35395)){
var statearr_35528_37690 = state_35467__$1;
(statearr_35528_37690[(1)] = (23));

} else {
var statearr_35529_37691 = state_35467__$1;
(statearr_35529_37691[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (36))){
var inst_35373 = (state_35467[(12)]);
var inst_35343 = inst_35373;
var state_35467__$1 = (function (){var statearr_35532 = state_35467;
(statearr_35532[(7)] = inst_35343);

return statearr_35532;
})();
var statearr_35533_37693 = state_35467__$1;
(statearr_35533_37693[(2)] = null);

(statearr_35533_37693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (29))){
var inst_35412 = (state_35467[(10)]);
var state_35467__$1 = state_35467;
var statearr_35539_37694 = state_35467__$1;
(statearr_35539_37694[(2)] = inst_35412);

(statearr_35539_37694[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (6))){
var state_35467__$1 = state_35467;
var statearr_35542_37695 = state_35467__$1;
(statearr_35542_37695[(2)] = false);

(statearr_35542_37695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (28))){
var inst_35406 = (state_35467[(2)]);
var inst_35407 = calc_state();
var inst_35343 = inst_35407;
var state_35467__$1 = (function (){var statearr_35545 = state_35467;
(statearr_35545[(7)] = inst_35343);

(statearr_35545[(15)] = inst_35406);

return statearr_35545;
})();
var statearr_35546_37700 = state_35467__$1;
(statearr_35546_37700[(2)] = null);

(statearr_35546_37700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (25))){
var inst_35456 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
var statearr_35557_37706 = state_35467__$1;
(statearr_35557_37706[(2)] = inst_35456);

(statearr_35557_37706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (34))){
var inst_35454 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
var statearr_35561_37707 = state_35467__$1;
(statearr_35561_37707[(2)] = inst_35454);

(statearr_35561_37707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (17))){
var state_35467__$1 = state_35467;
var statearr_35562_37709 = state_35467__$1;
(statearr_35562_37709[(2)] = false);

(statearr_35562_37709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (3))){
var state_35467__$1 = state_35467;
var statearr_35565_37713 = state_35467__$1;
(statearr_35565_37713[(2)] = false);

(statearr_35565_37713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (12))){
var inst_35458 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35467__$1,inst_35458);
} else {
if((state_val_35469 === (2))){
var inst_35308 = (state_35467[(8)]);
var inst_35318 = inst_35308.cljs$lang$protocol_mask$partition0$;
var inst_35319 = (inst_35318 & (64));
var inst_35320 = inst_35308.cljs$core$ISeq$;
var inst_35321 = (cljs.core.PROTOCOL_SENTINEL === inst_35320);
var inst_35322 = ((inst_35319) || (inst_35321));
var state_35467__$1 = state_35467;
if(cljs.core.truth_(inst_35322)){
var statearr_35587_37718 = state_35467__$1;
(statearr_35587_37718[(1)] = (5));

} else {
var statearr_35590_37719 = state_35467__$1;
(statearr_35590_37719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (23))){
var inst_35386 = (state_35467[(14)]);
var inst_35398 = (inst_35386 == null);
var state_35467__$1 = state_35467;
if(cljs.core.truth_(inst_35398)){
var statearr_35591_37721 = state_35467__$1;
(statearr_35591_37721[(1)] = (26));

} else {
var statearr_35594_37724 = state_35467__$1;
(statearr_35594_37724[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (35))){
var inst_35429 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
if(cljs.core.truth_(inst_35429)){
var statearr_35597_37731 = state_35467__$1;
(statearr_35597_37731[(1)] = (36));

} else {
var statearr_35598_37732 = state_35467__$1;
(statearr_35598_37732[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (19))){
var inst_35343 = (state_35467[(7)]);
var inst_35370 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35343);
var state_35467__$1 = state_35467;
var statearr_35599_37735 = state_35467__$1;
(statearr_35599_37735[(2)] = inst_35370);

(statearr_35599_37735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (11))){
var inst_35343 = (state_35467[(7)]);
var inst_35349 = (inst_35343 == null);
var inst_35350 = cljs.core.not(inst_35349);
var state_35467__$1 = state_35467;
if(inst_35350){
var statearr_35603_37737 = state_35467__$1;
(statearr_35603_37737[(1)] = (13));

} else {
var statearr_35606_37740 = state_35467__$1;
(statearr_35606_37740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (9))){
var inst_35308 = (state_35467[(8)]);
var state_35467__$1 = state_35467;
var statearr_35609_37745 = state_35467__$1;
(statearr_35609_37745[(2)] = inst_35308);

(statearr_35609_37745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (5))){
var state_35467__$1 = state_35467;
var statearr_35615_37747 = state_35467__$1;
(statearr_35615_37747[(2)] = true);

(statearr_35615_37747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (14))){
var state_35467__$1 = state_35467;
var statearr_35620_37749 = state_35467__$1;
(statearr_35620_37749[(2)] = false);

(statearr_35620_37749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (26))){
var inst_35388 = (state_35467[(11)]);
var inst_35400 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35388);
var state_35467__$1 = state_35467;
var statearr_35627_37756 = state_35467__$1;
(statearr_35627_37756[(2)] = inst_35400);

(statearr_35627_37756[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (16))){
var state_35467__$1 = state_35467;
var statearr_35634_37758 = state_35467__$1;
(statearr_35634_37758[(2)] = true);

(statearr_35634_37758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (38))){
var inst_35446 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
var statearr_35647_37760 = state_35467__$1;
(statearr_35647_37760[(2)] = inst_35446);

(statearr_35647_37760[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (30))){
var inst_35376 = (state_35467[(9)]);
var inst_35388 = (state_35467[(11)]);
var inst_35377 = (state_35467[(13)]);
var inst_35419 = cljs.core.empty_QMARK_(inst_35376);
var inst_35420 = (inst_35377.cljs$core$IFn$_invoke$arity$1 ? inst_35377.cljs$core$IFn$_invoke$arity$1(inst_35388) : inst_35377.call(null,inst_35388));
var inst_35421 = cljs.core.not(inst_35420);
var inst_35422 = ((inst_35419) && (inst_35421));
var state_35467__$1 = state_35467;
var statearr_35656_37769 = state_35467__$1;
(statearr_35656_37769[(2)] = inst_35422);

(statearr_35656_37769[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (10))){
var inst_35308 = (state_35467[(8)]);
var inst_35337 = (state_35467[(2)]);
var inst_35338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35337,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35337,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35337,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35343 = inst_35308;
var state_35467__$1 = (function (){var statearr_35663 = state_35467;
(statearr_35663[(7)] = inst_35343);

(statearr_35663[(16)] = inst_35342);

(statearr_35663[(17)] = inst_35340);

(statearr_35663[(18)] = inst_35338);

return statearr_35663;
})();
var statearr_35668_37773 = state_35467__$1;
(statearr_35668_37773[(2)] = null);

(statearr_35668_37773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (18))){
var inst_35364 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
var statearr_35673_37779 = state_35467__$1;
(statearr_35673_37779[(2)] = inst_35364);

(statearr_35673_37779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (37))){
var state_35467__$1 = state_35467;
var statearr_35677_37783 = state_35467__$1;
(statearr_35677_37783[(2)] = null);

(statearr_35677_37783[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (8))){
var inst_35308 = (state_35467[(8)]);
var inst_35334 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35308);
var state_35467__$1 = state_35467;
var statearr_35683_37785 = state_35467__$1;
(statearr_35683_37785[(2)] = inst_35334);

(statearr_35683_37785[(1)] = (10));


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
var statearr_35698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35698[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35698[(1)] = (1));

return statearr_35698;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35467){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35467);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35703){if((e35703 instanceof Object)){
var ex__34210__auto__ = e35703;
var statearr_35708_37793 = state_35467;
(statearr_35708_37793[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37796 = state_35467;
state_35467 = G__37796;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35467){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_35716 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_35716[(6)] = c__34272__auto___37640);

return statearr_35716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
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
var G__35742 = arguments.length;
switch (G__35742) {
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
var G__35758 = arguments.length;
switch (G__35758) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35753_SHARP_){
if(cljs.core.truth_((p1__35753_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35753_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35753_SHARP_.call(null,topic)))){
return p1__35753_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35753_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35762 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35763){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35763 = meta35763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35764,meta35763__$1){
var self__ = this;
var _35764__$1 = this;
return (new cljs.core.async.t_cljs$core$async35762(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35763__$1));
}));

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35764){
var self__ = this;
var _35764__$1 = this;
return self__.meta35763;
}));

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35763","meta35763",1010903438,null)], null);
}));

(cljs.core.async.t_cljs$core$async35762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35762");

(cljs.core.async.t_cljs$core$async35762.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35762.
 */
cljs.core.async.__GT_t_cljs$core$async35762 = (function cljs$core$async$__GT_t_cljs$core$async35762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35763){
return (new cljs.core.async.t_cljs$core$async35762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35763));
});

}

return (new cljs.core.async.t_cljs$core$async35762(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34272__auto___37863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_35875){
var state_val_35877 = (state_35875[(1)]);
if((state_val_35877 === (7))){
var inst_35869 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
var statearr_35881_37868 = state_35875__$1;
(statearr_35881_37868[(2)] = inst_35869);

(statearr_35881_37868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (20))){
var state_35875__$1 = state_35875;
var statearr_35882_37869 = state_35875__$1;
(statearr_35882_37869[(2)] = null);

(statearr_35882_37869[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (1))){
var state_35875__$1 = state_35875;
var statearr_35884_37872 = state_35875__$1;
(statearr_35884_37872[(2)] = null);

(statearr_35884_37872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (24))){
var inst_35851 = (state_35875[(7)]);
var inst_35860 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35851);
var state_35875__$1 = state_35875;
var statearr_35885_37876 = state_35875__$1;
(statearr_35885_37876[(2)] = inst_35860);

(statearr_35885_37876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (4))){
var inst_35798 = (state_35875[(8)]);
var inst_35798__$1 = (state_35875[(2)]);
var inst_35801 = (inst_35798__$1 == null);
var state_35875__$1 = (function (){var statearr_35886 = state_35875;
(statearr_35886[(8)] = inst_35798__$1);

return statearr_35886;
})();
if(cljs.core.truth_(inst_35801)){
var statearr_35888_37878 = state_35875__$1;
(statearr_35888_37878[(1)] = (5));

} else {
var statearr_35889_37881 = state_35875__$1;
(statearr_35889_37881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (15))){
var inst_35845 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
var statearr_35894_37884 = state_35875__$1;
(statearr_35894_37884[(2)] = inst_35845);

(statearr_35894_37884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (21))){
var inst_35866 = (state_35875[(2)]);
var state_35875__$1 = (function (){var statearr_35896 = state_35875;
(statearr_35896[(9)] = inst_35866);

return statearr_35896;
})();
var statearr_35897_37885 = state_35875__$1;
(statearr_35897_37885[(2)] = null);

(statearr_35897_37885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (13))){
var inst_35826 = (state_35875[(10)]);
var inst_35828 = cljs.core.chunked_seq_QMARK_(inst_35826);
var state_35875__$1 = state_35875;
if(inst_35828){
var statearr_35900_37889 = state_35875__$1;
(statearr_35900_37889[(1)] = (16));

} else {
var statearr_35902_37890 = state_35875__$1;
(statearr_35902_37890[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (22))){
var inst_35857 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
if(cljs.core.truth_(inst_35857)){
var statearr_35903_37894 = state_35875__$1;
(statearr_35903_37894[(1)] = (23));

} else {
var statearr_35904_37895 = state_35875__$1;
(statearr_35904_37895[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (6))){
var inst_35851 = (state_35875[(7)]);
var inst_35798 = (state_35875[(8)]);
var inst_35853 = (state_35875[(11)]);
var inst_35851__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35798) : topic_fn.call(null,inst_35798));
var inst_35852 = cljs.core.deref(mults);
var inst_35853__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35852,inst_35851__$1);
var state_35875__$1 = (function (){var statearr_35910 = state_35875;
(statearr_35910[(7)] = inst_35851__$1);

(statearr_35910[(11)] = inst_35853__$1);

return statearr_35910;
})();
if(cljs.core.truth_(inst_35853__$1)){
var statearr_35913_37904 = state_35875__$1;
(statearr_35913_37904[(1)] = (19));

} else {
var statearr_35916_37909 = state_35875__$1;
(statearr_35916_37909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (25))){
var inst_35863 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
var statearr_35917_37911 = state_35875__$1;
(statearr_35917_37911[(2)] = inst_35863);

(statearr_35917_37911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (17))){
var inst_35826 = (state_35875[(10)]);
var inst_35836 = cljs.core.first(inst_35826);
var inst_35837 = cljs.core.async.muxch_STAR_(inst_35836);
var inst_35838 = cljs.core.async.close_BANG_(inst_35837);
var inst_35839 = cljs.core.next(inst_35826);
var inst_35812 = inst_35839;
var inst_35813 = null;
var inst_35814 = (0);
var inst_35815 = (0);
var state_35875__$1 = (function (){var statearr_35920 = state_35875;
(statearr_35920[(12)] = inst_35813);

(statearr_35920[(13)] = inst_35838);

(statearr_35920[(14)] = inst_35815);

(statearr_35920[(15)] = inst_35814);

(statearr_35920[(16)] = inst_35812);

return statearr_35920;
})();
var statearr_35922_37917 = state_35875__$1;
(statearr_35922_37917[(2)] = null);

(statearr_35922_37917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (3))){
var inst_35871 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35875__$1,inst_35871);
} else {
if((state_val_35877 === (12))){
var inst_35847 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
var statearr_35926_37922 = state_35875__$1;
(statearr_35926_37922[(2)] = inst_35847);

(statearr_35926_37922[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (2))){
var state_35875__$1 = state_35875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35875__$1,(4),ch);
} else {
if((state_val_35877 === (23))){
var state_35875__$1 = state_35875;
var statearr_35928_37923 = state_35875__$1;
(statearr_35928_37923[(2)] = null);

(statearr_35928_37923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (19))){
var inst_35798 = (state_35875[(8)]);
var inst_35853 = (state_35875[(11)]);
var inst_35855 = cljs.core.async.muxch_STAR_(inst_35853);
var state_35875__$1 = state_35875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35875__$1,(22),inst_35855,inst_35798);
} else {
if((state_val_35877 === (11))){
var inst_35826 = (state_35875[(10)]);
var inst_35812 = (state_35875[(16)]);
var inst_35826__$1 = cljs.core.seq(inst_35812);
var state_35875__$1 = (function (){var statearr_35932 = state_35875;
(statearr_35932[(10)] = inst_35826__$1);

return statearr_35932;
})();
if(inst_35826__$1){
var statearr_35934_37929 = state_35875__$1;
(statearr_35934_37929[(1)] = (13));

} else {
var statearr_35936_37930 = state_35875__$1;
(statearr_35936_37930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (9))){
var inst_35849 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
var statearr_35937_37931 = state_35875__$1;
(statearr_35937_37931[(2)] = inst_35849);

(statearr_35937_37931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (5))){
var inst_35808 = cljs.core.deref(mults);
var inst_35809 = cljs.core.vals(inst_35808);
var inst_35810 = cljs.core.seq(inst_35809);
var inst_35812 = inst_35810;
var inst_35813 = null;
var inst_35814 = (0);
var inst_35815 = (0);
var state_35875__$1 = (function (){var statearr_35942 = state_35875;
(statearr_35942[(12)] = inst_35813);

(statearr_35942[(14)] = inst_35815);

(statearr_35942[(15)] = inst_35814);

(statearr_35942[(16)] = inst_35812);

return statearr_35942;
})();
var statearr_35943_37937 = state_35875__$1;
(statearr_35943_37937[(2)] = null);

(statearr_35943_37937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (14))){
var state_35875__$1 = state_35875;
var statearr_35949_37940 = state_35875__$1;
(statearr_35949_37940[(2)] = null);

(statearr_35949_37940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (16))){
var inst_35826 = (state_35875[(10)]);
var inst_35830 = cljs.core.chunk_first(inst_35826);
var inst_35831 = cljs.core.chunk_rest(inst_35826);
var inst_35832 = cljs.core.count(inst_35830);
var inst_35812 = inst_35831;
var inst_35813 = inst_35830;
var inst_35814 = inst_35832;
var inst_35815 = (0);
var state_35875__$1 = (function (){var statearr_35953 = state_35875;
(statearr_35953[(12)] = inst_35813);

(statearr_35953[(14)] = inst_35815);

(statearr_35953[(15)] = inst_35814);

(statearr_35953[(16)] = inst_35812);

return statearr_35953;
})();
var statearr_35956_37942 = state_35875__$1;
(statearr_35956_37942[(2)] = null);

(statearr_35956_37942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (10))){
var inst_35813 = (state_35875[(12)]);
var inst_35815 = (state_35875[(14)]);
var inst_35814 = (state_35875[(15)]);
var inst_35812 = (state_35875[(16)]);
var inst_35820 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35813,inst_35815);
var inst_35821 = cljs.core.async.muxch_STAR_(inst_35820);
var inst_35822 = cljs.core.async.close_BANG_(inst_35821);
var inst_35823 = (inst_35815 + (1));
var tmp35944 = inst_35813;
var tmp35945 = inst_35814;
var tmp35946 = inst_35812;
var inst_35812__$1 = tmp35946;
var inst_35813__$1 = tmp35944;
var inst_35814__$1 = tmp35945;
var inst_35815__$1 = inst_35823;
var state_35875__$1 = (function (){var statearr_35959 = state_35875;
(statearr_35959[(12)] = inst_35813__$1);

(statearr_35959[(17)] = inst_35822);

(statearr_35959[(14)] = inst_35815__$1);

(statearr_35959[(15)] = inst_35814__$1);

(statearr_35959[(16)] = inst_35812__$1);

return statearr_35959;
})();
var statearr_35961_37948 = state_35875__$1;
(statearr_35961_37948[(2)] = null);

(statearr_35961_37948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (18))){
var inst_35842 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
var statearr_35962_37949 = state_35875__$1;
(statearr_35962_37949[(2)] = inst_35842);

(statearr_35962_37949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35877 === (8))){
var inst_35815 = (state_35875[(14)]);
var inst_35814 = (state_35875[(15)]);
var inst_35817 = (inst_35815 < inst_35814);
var inst_35818 = inst_35817;
var state_35875__$1 = state_35875;
if(cljs.core.truth_(inst_35818)){
var statearr_35966_37953 = state_35875__$1;
(statearr_35966_37953[(1)] = (10));

} else {
var statearr_35968_37954 = state_35875__$1;
(statearr_35968_37954[(1)] = (11));

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
var statearr_35972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35972[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35972[(1)] = (1));

return statearr_35972;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35875){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35875);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35973){if((e35973 instanceof Object)){
var ex__34210__auto__ = e35973;
var statearr_35975_37959 = state_35875;
(statearr_35975_37959[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37960 = state_35875;
state_35875 = G__37960;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_35979 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_35979[(6)] = c__34272__auto___37863);

return statearr_35979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
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
var G__35984 = arguments.length;
switch (G__35984) {
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
var G__35996 = arguments.length;
switch (G__35996) {
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
var G__36008 = arguments.length;
switch (G__36008) {
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
var c__34272__auto___37969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_36059){
var state_val_36060 = (state_36059[(1)]);
if((state_val_36060 === (7))){
var state_36059__$1 = state_36059;
var statearr_36065_37972 = state_36059__$1;
(statearr_36065_37972[(2)] = null);

(statearr_36065_37972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (1))){
var state_36059__$1 = state_36059;
var statearr_36068_37975 = state_36059__$1;
(statearr_36068_37975[(2)] = null);

(statearr_36068_37975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (4))){
var inst_36016 = (state_36059[(7)]);
var inst_36018 = (inst_36016 < cnt);
var state_36059__$1 = state_36059;
if(cljs.core.truth_(inst_36018)){
var statearr_36070_37977 = state_36059__$1;
(statearr_36070_37977[(1)] = (6));

} else {
var statearr_36072_37978 = state_36059__$1;
(statearr_36072_37978[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (15))){
var inst_36052 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
var statearr_36076_37981 = state_36059__$1;
(statearr_36076_37981[(2)] = inst_36052);

(statearr_36076_37981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (13))){
var inst_36045 = cljs.core.async.close_BANG_(out);
var state_36059__$1 = state_36059;
var statearr_36078_37982 = state_36059__$1;
(statearr_36078_37982[(2)] = inst_36045);

(statearr_36078_37982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (6))){
var state_36059__$1 = state_36059;
var statearr_36082_37983 = state_36059__$1;
(statearr_36082_37983[(2)] = null);

(statearr_36082_37983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (3))){
var inst_36054 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36059__$1,inst_36054);
} else {
if((state_val_36060 === (12))){
var inst_36041 = (state_36059[(8)]);
var inst_36041__$1 = (state_36059[(2)]);
var inst_36043 = cljs.core.some(cljs.core.nil_QMARK_,inst_36041__$1);
var state_36059__$1 = (function (){var statearr_36091 = state_36059;
(statearr_36091[(8)] = inst_36041__$1);

return statearr_36091;
})();
if(cljs.core.truth_(inst_36043)){
var statearr_36092_37984 = state_36059__$1;
(statearr_36092_37984[(1)] = (13));

} else {
var statearr_36093_37986 = state_36059__$1;
(statearr_36093_37986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (2))){
var inst_36015 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36016 = (0);
var state_36059__$1 = (function (){var statearr_36094 = state_36059;
(statearr_36094[(7)] = inst_36016);

(statearr_36094[(9)] = inst_36015);

return statearr_36094;
})();
var statearr_36095_37989 = state_36059__$1;
(statearr_36095_37989[(2)] = null);

(statearr_36095_37989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (11))){
var inst_36016 = (state_36059[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36059,(10),Object,null,(9));
var inst_36028 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36016) : chs__$1.call(null,inst_36016));
var inst_36029 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36016) : done.call(null,inst_36016));
var inst_36030 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36028,inst_36029);
var state_36059__$1 = state_36059;
var statearr_36099_37994 = state_36059__$1;
(statearr_36099_37994[(2)] = inst_36030);


cljs.core.async.impl.ioc_helpers.process_exception(state_36059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (9))){
var inst_36016 = (state_36059[(7)]);
var inst_36032 = (state_36059[(2)]);
var inst_36033 = (inst_36016 + (1));
var inst_36016__$1 = inst_36033;
var state_36059__$1 = (function (){var statearr_36103 = state_36059;
(statearr_36103[(7)] = inst_36016__$1);

(statearr_36103[(10)] = inst_36032);

return statearr_36103;
})();
var statearr_36104_37995 = state_36059__$1;
(statearr_36104_37995[(2)] = null);

(statearr_36104_37995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (5))){
var inst_36039 = (state_36059[(2)]);
var state_36059__$1 = (function (){var statearr_36105 = state_36059;
(statearr_36105[(11)] = inst_36039);

return statearr_36105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36059__$1,(12),dchan);
} else {
if((state_val_36060 === (14))){
var inst_36041 = (state_36059[(8)]);
var inst_36047 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36041);
var state_36059__$1 = state_36059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36059__$1,(16),out,inst_36047);
} else {
if((state_val_36060 === (16))){
var inst_36049 = (state_36059[(2)]);
var state_36059__$1 = (function (){var statearr_36108 = state_36059;
(statearr_36108[(12)] = inst_36049);

return statearr_36108;
})();
var statearr_36110_38001 = state_36059__$1;
(statearr_36110_38001[(2)] = null);

(statearr_36110_38001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (10))){
var inst_36021 = (state_36059[(2)]);
var inst_36022 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36059__$1 = (function (){var statearr_36112 = state_36059;
(statearr_36112[(13)] = inst_36021);

return statearr_36112;
})();
var statearr_36113_38002 = state_36059__$1;
(statearr_36113_38002[(2)] = inst_36022);


cljs.core.async.impl.ioc_helpers.process_exception(state_36059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (8))){
var inst_36037 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
var statearr_36114_38003 = state_36059__$1;
(statearr_36114_38003[(2)] = inst_36037);

(statearr_36114_38003[(1)] = (5));


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
var statearr_36115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36115[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36115[(1)] = (1));

return statearr_36115;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36059){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36059);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36116){if((e36116 instanceof Object)){
var ex__34210__auto__ = e36116;
var statearr_36117_38009 = state_36059;
(statearr_36117_38009[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38010 = state_36059;
state_36059 = G__38010;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_36118 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_36118[(6)] = c__34272__auto___37969);

return statearr_36118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
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
var c__34272__auto___38015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_36172){
var state_val_36173 = (state_36172[(1)]);
if((state_val_36173 === (7))){
var inst_36146 = (state_36172[(7)]);
var inst_36145 = (state_36172[(8)]);
var inst_36145__$1 = (state_36172[(2)]);
var inst_36146__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36145__$1,(0),null);
var inst_36147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36145__$1,(1),null);
var inst_36150 = (inst_36146__$1 == null);
var state_36172__$1 = (function (){var statearr_36178 = state_36172;
(statearr_36178[(9)] = inst_36147);

(statearr_36178[(7)] = inst_36146__$1);

(statearr_36178[(8)] = inst_36145__$1);

return statearr_36178;
})();
if(cljs.core.truth_(inst_36150)){
var statearr_36179_38018 = state_36172__$1;
(statearr_36179_38018[(1)] = (8));

} else {
var statearr_36180_38019 = state_36172__$1;
(statearr_36180_38019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (1))){
var inst_36133 = cljs.core.vec(chs);
var inst_36134 = inst_36133;
var state_36172__$1 = (function (){var statearr_36181 = state_36172;
(statearr_36181[(10)] = inst_36134);

return statearr_36181;
})();
var statearr_36182_38022 = state_36172__$1;
(statearr_36182_38022[(2)] = null);

(statearr_36182_38022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (4))){
var inst_36134 = (state_36172[(10)]);
var state_36172__$1 = state_36172;
return cljs.core.async.ioc_alts_BANG_(state_36172__$1,(7),inst_36134);
} else {
if((state_val_36173 === (6))){
var inst_36167 = (state_36172[(2)]);
var state_36172__$1 = state_36172;
var statearr_36183_38023 = state_36172__$1;
(statearr_36183_38023[(2)] = inst_36167);

(statearr_36183_38023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (3))){
var inst_36169 = (state_36172[(2)]);
var state_36172__$1 = state_36172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36172__$1,inst_36169);
} else {
if((state_val_36173 === (2))){
var inst_36134 = (state_36172[(10)]);
var inst_36136 = cljs.core.count(inst_36134);
var inst_36137 = (inst_36136 > (0));
var state_36172__$1 = state_36172;
if(cljs.core.truth_(inst_36137)){
var statearr_36185_38025 = state_36172__$1;
(statearr_36185_38025[(1)] = (4));

} else {
var statearr_36186_38027 = state_36172__$1;
(statearr_36186_38027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (11))){
var inst_36134 = (state_36172[(10)]);
var inst_36160 = (state_36172[(2)]);
var tmp36184 = inst_36134;
var inst_36134__$1 = tmp36184;
var state_36172__$1 = (function (){var statearr_36187 = state_36172;
(statearr_36187[(11)] = inst_36160);

(statearr_36187[(10)] = inst_36134__$1);

return statearr_36187;
})();
var statearr_36188_38028 = state_36172__$1;
(statearr_36188_38028[(2)] = null);

(statearr_36188_38028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (9))){
var inst_36146 = (state_36172[(7)]);
var state_36172__$1 = state_36172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36172__$1,(11),out,inst_36146);
} else {
if((state_val_36173 === (5))){
var inst_36165 = cljs.core.async.close_BANG_(out);
var state_36172__$1 = state_36172;
var statearr_36196_38029 = state_36172__$1;
(statearr_36196_38029[(2)] = inst_36165);

(statearr_36196_38029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (10))){
var inst_36163 = (state_36172[(2)]);
var state_36172__$1 = state_36172;
var statearr_36197_38030 = state_36172__$1;
(statearr_36197_38030[(2)] = inst_36163);

(statearr_36197_38030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36173 === (8))){
var inst_36147 = (state_36172[(9)]);
var inst_36146 = (state_36172[(7)]);
var inst_36145 = (state_36172[(8)]);
var inst_36134 = (state_36172[(10)]);
var inst_36155 = (function (){var cs = inst_36134;
var vec__36141 = inst_36145;
var v = inst_36146;
var c = inst_36147;
return (function (p1__36119_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36119_SHARP_);
});
})();
var inst_36156 = cljs.core.filterv(inst_36155,inst_36134);
var inst_36134__$1 = inst_36156;
var state_36172__$1 = (function (){var statearr_36201 = state_36172;
(statearr_36201[(10)] = inst_36134__$1);

return statearr_36201;
})();
var statearr_36202_38034 = state_36172__$1;
(statearr_36202_38034[(2)] = null);

(statearr_36202_38034[(1)] = (2));


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
var statearr_36205 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36205[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36205[(1)] = (1));

return statearr_36205;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36172){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36172);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36207){if((e36207 instanceof Object)){
var ex__34210__auto__ = e36207;
var statearr_36208_38037 = state_36172;
(statearr_36208_38037[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38039 = state_36172;
state_36172 = G__38039;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_36210 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_36210[(6)] = c__34272__auto___38015);

return statearr_36210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
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
var G__36214 = arguments.length;
switch (G__36214) {
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
var c__34272__auto___38044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_36248){
var state_val_36249 = (state_36248[(1)]);
if((state_val_36249 === (7))){
var inst_36226 = (state_36248[(7)]);
var inst_36226__$1 = (state_36248[(2)]);
var inst_36228 = (inst_36226__$1 == null);
var inst_36229 = cljs.core.not(inst_36228);
var state_36248__$1 = (function (){var statearr_36261 = state_36248;
(statearr_36261[(7)] = inst_36226__$1);

return statearr_36261;
})();
if(inst_36229){
var statearr_36262_38046 = state_36248__$1;
(statearr_36262_38046[(1)] = (8));

} else {
var statearr_36263_38048 = state_36248__$1;
(statearr_36263_38048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36249 === (1))){
var inst_36219 = (0);
var state_36248__$1 = (function (){var statearr_36264 = state_36248;
(statearr_36264[(8)] = inst_36219);

return statearr_36264;
})();
var statearr_36266_38050 = state_36248__$1;
(statearr_36266_38050[(2)] = null);

(statearr_36266_38050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36249 === (4))){
var state_36248__$1 = state_36248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36248__$1,(7),ch);
} else {
if((state_val_36249 === (6))){
var inst_36243 = (state_36248[(2)]);
var state_36248__$1 = state_36248;
var statearr_36268_38051 = state_36248__$1;
(statearr_36268_38051[(2)] = inst_36243);

(statearr_36268_38051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36249 === (3))){
var inst_36245 = (state_36248[(2)]);
var inst_36246 = cljs.core.async.close_BANG_(out);
var state_36248__$1 = (function (){var statearr_36271 = state_36248;
(statearr_36271[(9)] = inst_36245);

return statearr_36271;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36248__$1,inst_36246);
} else {
if((state_val_36249 === (2))){
var inst_36219 = (state_36248[(8)]);
var inst_36222 = (inst_36219 < n);
var state_36248__$1 = state_36248;
if(cljs.core.truth_(inst_36222)){
var statearr_36273_38055 = state_36248__$1;
(statearr_36273_38055[(1)] = (4));

} else {
var statearr_36274_38056 = state_36248__$1;
(statearr_36274_38056[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36249 === (11))){
var inst_36219 = (state_36248[(8)]);
var inst_36232 = (state_36248[(2)]);
var inst_36233 = (inst_36219 + (1));
var inst_36219__$1 = inst_36233;
var state_36248__$1 = (function (){var statearr_36277 = state_36248;
(statearr_36277[(10)] = inst_36232);

(statearr_36277[(8)] = inst_36219__$1);

return statearr_36277;
})();
var statearr_36278_38057 = state_36248__$1;
(statearr_36278_38057[(2)] = null);

(statearr_36278_38057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36249 === (9))){
var state_36248__$1 = state_36248;
var statearr_36279_38059 = state_36248__$1;
(statearr_36279_38059[(2)] = null);

(statearr_36279_38059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36249 === (5))){
var state_36248__$1 = state_36248;
var statearr_36280_38062 = state_36248__$1;
(statearr_36280_38062[(2)] = null);

(statearr_36280_38062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36249 === (10))){
var inst_36240 = (state_36248[(2)]);
var state_36248__$1 = state_36248;
var statearr_36283_38063 = state_36248__$1;
(statearr_36283_38063[(2)] = inst_36240);

(statearr_36283_38063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36249 === (8))){
var inst_36226 = (state_36248[(7)]);
var state_36248__$1 = state_36248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36248__$1,(11),out,inst_36226);
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
var statearr_36284 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36284[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36284[(1)] = (1));

return statearr_36284;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36248){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36248);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36285){if((e36285 instanceof Object)){
var ex__34210__auto__ = e36285;
var statearr_36287_38067 = state_36248;
(statearr_36287_38067[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38068 = state_36248;
state_36248 = G__38068;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_36291 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_36291[(6)] = c__34272__auto___38044);

return statearr_36291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36301 = (function (f,ch,meta36302){
this.f = f;
this.ch = ch;
this.meta36302 = meta36302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36303,meta36302__$1){
var self__ = this;
var _36303__$1 = this;
return (new cljs.core.async.t_cljs$core$async36301(self__.f,self__.ch,meta36302__$1));
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36303){
var self__ = this;
var _36303__$1 = this;
return self__.meta36302;
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36309 = (function (f,ch,meta36302,_,fn1,meta36310){
this.f = f;
this.ch = ch;
this.meta36302 = meta36302;
this._ = _;
this.fn1 = fn1;
this.meta36310 = meta36310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36311,meta36310__$1){
var self__ = this;
var _36311__$1 = this;
return (new cljs.core.async.t_cljs$core$async36309(self__.f,self__.ch,self__.meta36302,self__._,self__.fn1,meta36310__$1));
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36311){
var self__ = this;
var _36311__$1 = this;
return self__.meta36310;
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36293_SHARP_){
var G__36316 = (((p1__36293_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36293_SHARP_) : self__.f.call(null,p1__36293_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36316) : f1.call(null,G__36316));
});
}));

(cljs.core.async.t_cljs$core$async36309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36302","meta36302",-20229454,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36301","cljs.core.async/t_cljs$core$async36301",886856746,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36310","meta36310",-1787906238,null)], null);
}));

(cljs.core.async.t_cljs$core$async36309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36309");

(cljs.core.async.t_cljs$core$async36309.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36309.
 */
cljs.core.async.__GT_t_cljs$core$async36309 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36309(f__$1,ch__$1,meta36302__$1,___$2,fn1__$1,meta36310){
return (new cljs.core.async.t_cljs$core$async36309(f__$1,ch__$1,meta36302__$1,___$2,fn1__$1,meta36310));
});

}

return (new cljs.core.async.t_cljs$core$async36309(self__.f,self__.ch,self__.meta36302,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36321 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36321) : self__.f.call(null,G__36321));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36302","meta36302",-20229454,null)], null);
}));

(cljs.core.async.t_cljs$core$async36301.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36301");

(cljs.core.async.t_cljs$core$async36301.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36301");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36301.
 */
cljs.core.async.__GT_t_cljs$core$async36301 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36301(f__$1,ch__$1,meta36302){
return (new cljs.core.async.t_cljs$core$async36301(f__$1,ch__$1,meta36302));
});

}

return (new cljs.core.async.t_cljs$core$async36301(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
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

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
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
cljs.core.async.__GT_t_cljs$core$async36334 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36334(f__$1,ch__$1,meta36335){
return (new cljs.core.async.t_cljs$core$async36334(f__$1,ch__$1,meta36335));
});

}

return (new cljs.core.async.t_cljs$core$async36334(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36347 = (function (p,ch,meta36348){
this.p = p;
this.ch = ch;
this.meta36348 = meta36348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36349,meta36348__$1){
var self__ = this;
var _36349__$1 = this;
return (new cljs.core.async.t_cljs$core$async36347(self__.p,self__.ch,meta36348__$1));
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36349){
var self__ = this;
var _36349__$1 = this;
return self__.meta36348;
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36348","meta36348",1966817187,null)], null);
}));

(cljs.core.async.t_cljs$core$async36347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36347");

(cljs.core.async.t_cljs$core$async36347.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36347.
 */
cljs.core.async.__GT_t_cljs$core$async36347 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36347(p__$1,ch__$1,meta36348){
return (new cljs.core.async.t_cljs$core$async36347(p__$1,ch__$1,meta36348));
});

}

return (new cljs.core.async.t_cljs$core$async36347(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36366 = arguments.length;
switch (G__36366) {
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
var c__34272__auto___38097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_36391){
var state_val_36393 = (state_36391[(1)]);
if((state_val_36393 === (7))){
var inst_36386 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
var statearr_36402_38098 = state_36391__$1;
(statearr_36402_38098[(2)] = inst_36386);

(statearr_36402_38098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (1))){
var state_36391__$1 = state_36391;
var statearr_36403_38099 = state_36391__$1;
(statearr_36403_38099[(2)] = null);

(statearr_36403_38099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (4))){
var inst_36371 = (state_36391[(7)]);
var inst_36371__$1 = (state_36391[(2)]);
var inst_36372 = (inst_36371__$1 == null);
var state_36391__$1 = (function (){var statearr_36405 = state_36391;
(statearr_36405[(7)] = inst_36371__$1);

return statearr_36405;
})();
if(cljs.core.truth_(inst_36372)){
var statearr_36408_38102 = state_36391__$1;
(statearr_36408_38102[(1)] = (5));

} else {
var statearr_36409_38104 = state_36391__$1;
(statearr_36409_38104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (6))){
var inst_36371 = (state_36391[(7)]);
var inst_36377 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36371) : p.call(null,inst_36371));
var state_36391__$1 = state_36391;
if(cljs.core.truth_(inst_36377)){
var statearr_36410_38105 = state_36391__$1;
(statearr_36410_38105[(1)] = (8));

} else {
var statearr_36411_38106 = state_36391__$1;
(statearr_36411_38106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (3))){
var inst_36389 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36391__$1,inst_36389);
} else {
if((state_val_36393 === (2))){
var state_36391__$1 = state_36391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36391__$1,(4),ch);
} else {
if((state_val_36393 === (11))){
var inst_36380 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
var statearr_36413_38108 = state_36391__$1;
(statearr_36413_38108[(2)] = inst_36380);

(statearr_36413_38108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (9))){
var state_36391__$1 = state_36391;
var statearr_36416_38109 = state_36391__$1;
(statearr_36416_38109[(2)] = null);

(statearr_36416_38109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (5))){
var inst_36374 = cljs.core.async.close_BANG_(out);
var state_36391__$1 = state_36391;
var statearr_36424_38112 = state_36391__$1;
(statearr_36424_38112[(2)] = inst_36374);

(statearr_36424_38112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (10))){
var inst_36383 = (state_36391[(2)]);
var state_36391__$1 = (function (){var statearr_36429 = state_36391;
(statearr_36429[(8)] = inst_36383);

return statearr_36429;
})();
var statearr_36431_38113 = state_36391__$1;
(statearr_36431_38113[(2)] = null);

(statearr_36431_38113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (8))){
var inst_36371 = (state_36391[(7)]);
var state_36391__$1 = state_36391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36391__$1,(11),out,inst_36371);
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
var statearr_36433 = [null,null,null,null,null,null,null,null,null];
(statearr_36433[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36433[(1)] = (1));

return statearr_36433;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36391){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36391);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36434){if((e36434 instanceof Object)){
var ex__34210__auto__ = e36434;
var statearr_36436_38115 = state_36391;
(statearr_36436_38115[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38117 = state_36391;
state_36391 = G__38117;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_36440 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_36440[(6)] = c__34272__auto___38097);

return statearr_36440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36448 = arguments.length;
switch (G__36448) {
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
var c__34272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_36532){
var state_val_36533 = (state_36532[(1)]);
if((state_val_36533 === (7))){
var inst_36527 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36539_38121 = state_36532__$1;
(statearr_36539_38121[(2)] = inst_36527);

(statearr_36539_38121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (20))){
var inst_36497 = (state_36532[(7)]);
var inst_36508 = (state_36532[(2)]);
var inst_36509 = cljs.core.next(inst_36497);
var inst_36472 = inst_36509;
var inst_36473 = null;
var inst_36474 = (0);
var inst_36475 = (0);
var state_36532__$1 = (function (){var statearr_36541 = state_36532;
(statearr_36541[(8)] = inst_36508);

(statearr_36541[(9)] = inst_36475);

(statearr_36541[(10)] = inst_36473);

(statearr_36541[(11)] = inst_36472);

(statearr_36541[(12)] = inst_36474);

return statearr_36541;
})();
var statearr_36542_38127 = state_36532__$1;
(statearr_36542_38127[(2)] = null);

(statearr_36542_38127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (1))){
var state_36532__$1 = state_36532;
var statearr_36544_38128 = state_36532__$1;
(statearr_36544_38128[(2)] = null);

(statearr_36544_38128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (4))){
var inst_36461 = (state_36532[(13)]);
var inst_36461__$1 = (state_36532[(2)]);
var inst_36462 = (inst_36461__$1 == null);
var state_36532__$1 = (function (){var statearr_36545 = state_36532;
(statearr_36545[(13)] = inst_36461__$1);

return statearr_36545;
})();
if(cljs.core.truth_(inst_36462)){
var statearr_36546_38132 = state_36532__$1;
(statearr_36546_38132[(1)] = (5));

} else {
var statearr_36547_38133 = state_36532__$1;
(statearr_36547_38133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (15))){
var state_36532__$1 = state_36532;
var statearr_36552_38134 = state_36532__$1;
(statearr_36552_38134[(2)] = null);

(statearr_36552_38134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (21))){
var state_36532__$1 = state_36532;
var statearr_36553_38135 = state_36532__$1;
(statearr_36553_38135[(2)] = null);

(statearr_36553_38135[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (13))){
var inst_36475 = (state_36532[(9)]);
var inst_36473 = (state_36532[(10)]);
var inst_36472 = (state_36532[(11)]);
var inst_36474 = (state_36532[(12)]);
var inst_36493 = (state_36532[(2)]);
var inst_36494 = (inst_36475 + (1));
var tmp36549 = inst_36473;
var tmp36550 = inst_36472;
var tmp36551 = inst_36474;
var inst_36472__$1 = tmp36550;
var inst_36473__$1 = tmp36549;
var inst_36474__$1 = tmp36551;
var inst_36475__$1 = inst_36494;
var state_36532__$1 = (function (){var statearr_36555 = state_36532;
(statearr_36555[(9)] = inst_36475__$1);

(statearr_36555[(14)] = inst_36493);

(statearr_36555[(10)] = inst_36473__$1);

(statearr_36555[(11)] = inst_36472__$1);

(statearr_36555[(12)] = inst_36474__$1);

return statearr_36555;
})();
var statearr_36556_38140 = state_36532__$1;
(statearr_36556_38140[(2)] = null);

(statearr_36556_38140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (22))){
var state_36532__$1 = state_36532;
var statearr_36558_38143 = state_36532__$1;
(statearr_36558_38143[(2)] = null);

(statearr_36558_38143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (6))){
var inst_36461 = (state_36532[(13)]);
var inst_36470 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36461) : f.call(null,inst_36461));
var inst_36471 = cljs.core.seq(inst_36470);
var inst_36472 = inst_36471;
var inst_36473 = null;
var inst_36474 = (0);
var inst_36475 = (0);
var state_36532__$1 = (function (){var statearr_36560 = state_36532;
(statearr_36560[(9)] = inst_36475);

(statearr_36560[(10)] = inst_36473);

(statearr_36560[(11)] = inst_36472);

(statearr_36560[(12)] = inst_36474);

return statearr_36560;
})();
var statearr_36561_38144 = state_36532__$1;
(statearr_36561_38144[(2)] = null);

(statearr_36561_38144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (17))){
var inst_36497 = (state_36532[(7)]);
var inst_36501 = cljs.core.chunk_first(inst_36497);
var inst_36502 = cljs.core.chunk_rest(inst_36497);
var inst_36503 = cljs.core.count(inst_36501);
var inst_36472 = inst_36502;
var inst_36473 = inst_36501;
var inst_36474 = inst_36503;
var inst_36475 = (0);
var state_36532__$1 = (function (){var statearr_36563 = state_36532;
(statearr_36563[(9)] = inst_36475);

(statearr_36563[(10)] = inst_36473);

(statearr_36563[(11)] = inst_36472);

(statearr_36563[(12)] = inst_36474);

return statearr_36563;
})();
var statearr_36564_38148 = state_36532__$1;
(statearr_36564_38148[(2)] = null);

(statearr_36564_38148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (3))){
var inst_36529 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36532__$1,inst_36529);
} else {
if((state_val_36533 === (12))){
var inst_36517 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36566_38149 = state_36532__$1;
(statearr_36566_38149[(2)] = inst_36517);

(statearr_36566_38149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (2))){
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36532__$1,(4),in$);
} else {
if((state_val_36533 === (23))){
var inst_36525 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36567_38151 = state_36532__$1;
(statearr_36567_38151[(2)] = inst_36525);

(statearr_36567_38151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (19))){
var inst_36512 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36569_38152 = state_36532__$1;
(statearr_36569_38152[(2)] = inst_36512);

(statearr_36569_38152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (11))){
var inst_36472 = (state_36532[(11)]);
var inst_36497 = (state_36532[(7)]);
var inst_36497__$1 = cljs.core.seq(inst_36472);
var state_36532__$1 = (function (){var statearr_36570 = state_36532;
(statearr_36570[(7)] = inst_36497__$1);

return statearr_36570;
})();
if(inst_36497__$1){
var statearr_36572_38154 = state_36532__$1;
(statearr_36572_38154[(1)] = (14));

} else {
var statearr_36573_38156 = state_36532__$1;
(statearr_36573_38156[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (9))){
var inst_36519 = (state_36532[(2)]);
var inst_36520 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36532__$1 = (function (){var statearr_36574 = state_36532;
(statearr_36574[(15)] = inst_36519);

return statearr_36574;
})();
if(cljs.core.truth_(inst_36520)){
var statearr_36576_38157 = state_36532__$1;
(statearr_36576_38157[(1)] = (21));

} else {
var statearr_36577_38159 = state_36532__$1;
(statearr_36577_38159[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (5))){
var inst_36464 = cljs.core.async.close_BANG_(out);
var state_36532__$1 = state_36532;
var statearr_36578_38160 = state_36532__$1;
(statearr_36578_38160[(2)] = inst_36464);

(statearr_36578_38160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (14))){
var inst_36497 = (state_36532[(7)]);
var inst_36499 = cljs.core.chunked_seq_QMARK_(inst_36497);
var state_36532__$1 = state_36532;
if(inst_36499){
var statearr_36580_38163 = state_36532__$1;
(statearr_36580_38163[(1)] = (17));

} else {
var statearr_36581_38164 = state_36532__$1;
(statearr_36581_38164[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (16))){
var inst_36515 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36582_38165 = state_36532__$1;
(statearr_36582_38165[(2)] = inst_36515);

(statearr_36582_38165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (10))){
var inst_36475 = (state_36532[(9)]);
var inst_36473 = (state_36532[(10)]);
var inst_36490 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36473,inst_36475);
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36532__$1,(13),out,inst_36490);
} else {
if((state_val_36533 === (18))){
var inst_36497 = (state_36532[(7)]);
var inst_36506 = cljs.core.first(inst_36497);
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36532__$1,(20),out,inst_36506);
} else {
if((state_val_36533 === (8))){
var inst_36475 = (state_36532[(9)]);
var inst_36474 = (state_36532[(12)]);
var inst_36484 = (inst_36475 < inst_36474);
var inst_36485 = inst_36484;
var state_36532__$1 = state_36532;
if(cljs.core.truth_(inst_36485)){
var statearr_36585_38173 = state_36532__$1;
(statearr_36585_38173[(1)] = (10));

} else {
var statearr_36586_38174 = state_36532__$1;
(statearr_36586_38174[(1)] = (11));

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
var statearr_36588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36588[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36588[(1)] = (1));

return statearr_36588;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36532){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36532);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36589){if((e36589 instanceof Object)){
var ex__34210__auto__ = e36589;
var statearr_36590_38176 = state_36532;
(statearr_36590_38176[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38177 = state_36532;
state_36532 = G__38177;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36532){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_36592 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_36592[(6)] = c__34272__auto__);

return statearr_36592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
}));

return c__34272__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36595 = arguments.length;
switch (G__36595) {
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
var G__36599 = arguments.length;
switch (G__36599) {
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
var G__36604 = arguments.length;
switch (G__36604) {
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
var c__34272__auto___38187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_36630){
var state_val_36631 = (state_36630[(1)]);
if((state_val_36631 === (7))){
var inst_36625 = (state_36630[(2)]);
var state_36630__$1 = state_36630;
var statearr_36634_38188 = state_36630__$1;
(statearr_36634_38188[(2)] = inst_36625);

(statearr_36634_38188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (1))){
var inst_36607 = null;
var state_36630__$1 = (function (){var statearr_36635 = state_36630;
(statearr_36635[(7)] = inst_36607);

return statearr_36635;
})();
var statearr_36636_38190 = state_36630__$1;
(statearr_36636_38190[(2)] = null);

(statearr_36636_38190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (4))){
var inst_36610 = (state_36630[(8)]);
var inst_36610__$1 = (state_36630[(2)]);
var inst_36611 = (inst_36610__$1 == null);
var inst_36612 = cljs.core.not(inst_36611);
var state_36630__$1 = (function (){var statearr_36638 = state_36630;
(statearr_36638[(8)] = inst_36610__$1);

return statearr_36638;
})();
if(inst_36612){
var statearr_36639_38191 = state_36630__$1;
(statearr_36639_38191[(1)] = (5));

} else {
var statearr_36640_38192 = state_36630__$1;
(statearr_36640_38192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (6))){
var state_36630__$1 = state_36630;
var statearr_36641_38193 = state_36630__$1;
(statearr_36641_38193[(2)] = null);

(statearr_36641_38193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (3))){
var inst_36627 = (state_36630[(2)]);
var inst_36628 = cljs.core.async.close_BANG_(out);
var state_36630__$1 = (function (){var statearr_36643 = state_36630;
(statearr_36643[(9)] = inst_36627);

return statearr_36643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36630__$1,inst_36628);
} else {
if((state_val_36631 === (2))){
var state_36630__$1 = state_36630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36630__$1,(4),ch);
} else {
if((state_val_36631 === (11))){
var inst_36610 = (state_36630[(8)]);
var inst_36619 = (state_36630[(2)]);
var inst_36607 = inst_36610;
var state_36630__$1 = (function (){var statearr_36645 = state_36630;
(statearr_36645[(7)] = inst_36607);

(statearr_36645[(10)] = inst_36619);

return statearr_36645;
})();
var statearr_36646_38197 = state_36630__$1;
(statearr_36646_38197[(2)] = null);

(statearr_36646_38197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (9))){
var inst_36610 = (state_36630[(8)]);
var state_36630__$1 = state_36630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36630__$1,(11),out,inst_36610);
} else {
if((state_val_36631 === (5))){
var inst_36610 = (state_36630[(8)]);
var inst_36607 = (state_36630[(7)]);
var inst_36614 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36610,inst_36607);
var state_36630__$1 = state_36630;
if(inst_36614){
var statearr_36649_38200 = state_36630__$1;
(statearr_36649_38200[(1)] = (8));

} else {
var statearr_36650_38202 = state_36630__$1;
(statearr_36650_38202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (10))){
var inst_36622 = (state_36630[(2)]);
var state_36630__$1 = state_36630;
var statearr_36651_38203 = state_36630__$1;
(statearr_36651_38203[(2)] = inst_36622);

(statearr_36651_38203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (8))){
var inst_36607 = (state_36630[(7)]);
var tmp36647 = inst_36607;
var inst_36607__$1 = tmp36647;
var state_36630__$1 = (function (){var statearr_36653 = state_36630;
(statearr_36653[(7)] = inst_36607__$1);

return statearr_36653;
})();
var statearr_36654_38204 = state_36630__$1;
(statearr_36654_38204[(2)] = null);

(statearr_36654_38204[(1)] = (2));


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
var statearr_36655 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36655[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36655[(1)] = (1));

return statearr_36655;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36630){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36630);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36657){if((e36657 instanceof Object)){
var ex__34210__auto__ = e36657;
var statearr_36658_38205 = state_36630;
(statearr_36658_38205[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38206 = state_36630;
state_36630 = G__38206;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_36660 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_36660[(6)] = c__34272__auto___38187);

return statearr_36660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36663 = arguments.length;
switch (G__36663) {
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
var c__34272__auto___38209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_36704){
var state_val_36705 = (state_36704[(1)]);
if((state_val_36705 === (7))){
var inst_36700 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
var statearr_36707_38211 = state_36704__$1;
(statearr_36707_38211[(2)] = inst_36700);

(statearr_36707_38211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (1))){
var inst_36666 = (new Array(n));
var inst_36667 = inst_36666;
var inst_36668 = (0);
var state_36704__$1 = (function (){var statearr_36709 = state_36704;
(statearr_36709[(7)] = inst_36668);

(statearr_36709[(8)] = inst_36667);

return statearr_36709;
})();
var statearr_36710_38212 = state_36704__$1;
(statearr_36710_38212[(2)] = null);

(statearr_36710_38212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (4))){
var inst_36671 = (state_36704[(9)]);
var inst_36671__$1 = (state_36704[(2)]);
var inst_36672 = (inst_36671__$1 == null);
var inst_36673 = cljs.core.not(inst_36672);
var state_36704__$1 = (function (){var statearr_36711 = state_36704;
(statearr_36711[(9)] = inst_36671__$1);

return statearr_36711;
})();
if(inst_36673){
var statearr_36713_38214 = state_36704__$1;
(statearr_36713_38214[(1)] = (5));

} else {
var statearr_36714_38215 = state_36704__$1;
(statearr_36714_38215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (15))){
var inst_36694 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
var statearr_36715_38216 = state_36704__$1;
(statearr_36715_38216[(2)] = inst_36694);

(statearr_36715_38216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (13))){
var state_36704__$1 = state_36704;
var statearr_36717_38217 = state_36704__$1;
(statearr_36717_38217[(2)] = null);

(statearr_36717_38217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (6))){
var inst_36668 = (state_36704[(7)]);
var inst_36690 = (inst_36668 > (0));
var state_36704__$1 = state_36704;
if(cljs.core.truth_(inst_36690)){
var statearr_36718_38218 = state_36704__$1;
(statearr_36718_38218[(1)] = (12));

} else {
var statearr_36719_38219 = state_36704__$1;
(statearr_36719_38219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (3))){
var inst_36702 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36704__$1,inst_36702);
} else {
if((state_val_36705 === (12))){
var inst_36667 = (state_36704[(8)]);
var inst_36692 = cljs.core.vec(inst_36667);
var state_36704__$1 = state_36704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36704__$1,(15),out,inst_36692);
} else {
if((state_val_36705 === (2))){
var state_36704__$1 = state_36704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36704__$1,(4),ch);
} else {
if((state_val_36705 === (11))){
var inst_36684 = (state_36704[(2)]);
var inst_36685 = (new Array(n));
var inst_36667 = inst_36685;
var inst_36668 = (0);
var state_36704__$1 = (function (){var statearr_36722 = state_36704;
(statearr_36722[(10)] = inst_36684);

(statearr_36722[(7)] = inst_36668);

(statearr_36722[(8)] = inst_36667);

return statearr_36722;
})();
var statearr_36723_38221 = state_36704__$1;
(statearr_36723_38221[(2)] = null);

(statearr_36723_38221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (9))){
var inst_36667 = (state_36704[(8)]);
var inst_36682 = cljs.core.vec(inst_36667);
var state_36704__$1 = state_36704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36704__$1,(11),out,inst_36682);
} else {
if((state_val_36705 === (5))){
var inst_36668 = (state_36704[(7)]);
var inst_36671 = (state_36704[(9)]);
var inst_36676 = (state_36704[(11)]);
var inst_36667 = (state_36704[(8)]);
var inst_36675 = (inst_36667[inst_36668] = inst_36671);
var inst_36676__$1 = (inst_36668 + (1));
var inst_36677 = (inst_36676__$1 < n);
var state_36704__$1 = (function (){var statearr_36725 = state_36704;
(statearr_36725[(11)] = inst_36676__$1);

(statearr_36725[(12)] = inst_36675);

return statearr_36725;
})();
if(cljs.core.truth_(inst_36677)){
var statearr_36726_38224 = state_36704__$1;
(statearr_36726_38224[(1)] = (8));

} else {
var statearr_36728_38225 = state_36704__$1;
(statearr_36728_38225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (14))){
var inst_36697 = (state_36704[(2)]);
var inst_36698 = cljs.core.async.close_BANG_(out);
var state_36704__$1 = (function (){var statearr_36730 = state_36704;
(statearr_36730[(13)] = inst_36697);

return statearr_36730;
})();
var statearr_36731_38226 = state_36704__$1;
(statearr_36731_38226[(2)] = inst_36698);

(statearr_36731_38226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (10))){
var inst_36688 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
var statearr_36733_38227 = state_36704__$1;
(statearr_36733_38227[(2)] = inst_36688);

(statearr_36733_38227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (8))){
var inst_36676 = (state_36704[(11)]);
var inst_36667 = (state_36704[(8)]);
var tmp36729 = inst_36667;
var inst_36667__$1 = tmp36729;
var inst_36668 = inst_36676;
var state_36704__$1 = (function (){var statearr_36734 = state_36704;
(statearr_36734[(7)] = inst_36668);

(statearr_36734[(8)] = inst_36667__$1);

return statearr_36734;
})();
var statearr_36736_38229 = state_36704__$1;
(statearr_36736_38229[(2)] = null);

(statearr_36736_38229[(1)] = (2));


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
var statearr_36737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36737[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36737[(1)] = (1));

return statearr_36737;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36704){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36704);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36742){if((e36742 instanceof Object)){
var ex__34210__auto__ = e36742;
var statearr_36744_38231 = state_36704;
(statearr_36744_38231[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38233 = state_36704;
state_36704 = G__38233;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_36745 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_36745[(6)] = c__34272__auto___38209);

return statearr_36745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36749 = arguments.length;
switch (G__36749) {
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
var c__34272__auto___38236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34273__auto__ = (function (){var switch__34206__auto__ = (function (state_36794){
var state_val_36795 = (state_36794[(1)]);
if((state_val_36795 === (7))){
var inst_36790 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
var statearr_36798_38238 = state_36794__$1;
(statearr_36798_38238[(2)] = inst_36790);

(statearr_36798_38238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (1))){
var inst_36752 = [];
var inst_36753 = inst_36752;
var inst_36754 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36794__$1 = (function (){var statearr_36799 = state_36794;
(statearr_36799[(7)] = inst_36754);

(statearr_36799[(8)] = inst_36753);

return statearr_36799;
})();
var statearr_36800_38239 = state_36794__$1;
(statearr_36800_38239[(2)] = null);

(statearr_36800_38239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (4))){
var inst_36757 = (state_36794[(9)]);
var inst_36757__$1 = (state_36794[(2)]);
var inst_36758 = (inst_36757__$1 == null);
var inst_36759 = cljs.core.not(inst_36758);
var state_36794__$1 = (function (){var statearr_36802 = state_36794;
(statearr_36802[(9)] = inst_36757__$1);

return statearr_36802;
})();
if(inst_36759){
var statearr_36803_38241 = state_36794__$1;
(statearr_36803_38241[(1)] = (5));

} else {
var statearr_36804_38242 = state_36794__$1;
(statearr_36804_38242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (15))){
var inst_36784 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
var statearr_36806_38243 = state_36794__$1;
(statearr_36806_38243[(2)] = inst_36784);

(statearr_36806_38243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (13))){
var state_36794__$1 = state_36794;
var statearr_36807_38245 = state_36794__$1;
(statearr_36807_38245[(2)] = null);

(statearr_36807_38245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (6))){
var inst_36753 = (state_36794[(8)]);
var inst_36779 = inst_36753.length;
var inst_36780 = (inst_36779 > (0));
var state_36794__$1 = state_36794;
if(cljs.core.truth_(inst_36780)){
var statearr_36808_38246 = state_36794__$1;
(statearr_36808_38246[(1)] = (12));

} else {
var statearr_36810_38247 = state_36794__$1;
(statearr_36810_38247[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (3))){
var inst_36792 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36794__$1,inst_36792);
} else {
if((state_val_36795 === (12))){
var inst_36753 = (state_36794[(8)]);
var inst_36782 = cljs.core.vec(inst_36753);
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36794__$1,(15),out,inst_36782);
} else {
if((state_val_36795 === (2))){
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36794__$1,(4),ch);
} else {
if((state_val_36795 === (11))){
var inst_36757 = (state_36794[(9)]);
var inst_36761 = (state_36794[(10)]);
var inst_36772 = (state_36794[(2)]);
var inst_36773 = [];
var inst_36774 = inst_36773.push(inst_36757);
var inst_36753 = inst_36773;
var inst_36754 = inst_36761;
var state_36794__$1 = (function (){var statearr_36812 = state_36794;
(statearr_36812[(11)] = inst_36772);

(statearr_36812[(7)] = inst_36754);

(statearr_36812[(12)] = inst_36774);

(statearr_36812[(8)] = inst_36753);

return statearr_36812;
})();
var statearr_36813_38250 = state_36794__$1;
(statearr_36813_38250[(2)] = null);

(statearr_36813_38250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (9))){
var inst_36753 = (state_36794[(8)]);
var inst_36770 = cljs.core.vec(inst_36753);
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36794__$1,(11),out,inst_36770);
} else {
if((state_val_36795 === (5))){
var inst_36757 = (state_36794[(9)]);
var inst_36754 = (state_36794[(7)]);
var inst_36761 = (state_36794[(10)]);
var inst_36761__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36757) : f.call(null,inst_36757));
var inst_36762 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36761__$1,inst_36754);
var inst_36764 = cljs.core.keyword_identical_QMARK_(inst_36754,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36765 = ((inst_36762) || (inst_36764));
var state_36794__$1 = (function (){var statearr_36815 = state_36794;
(statearr_36815[(10)] = inst_36761__$1);

return statearr_36815;
})();
if(cljs.core.truth_(inst_36765)){
var statearr_36817_38252 = state_36794__$1;
(statearr_36817_38252[(1)] = (8));

} else {
var statearr_36818_38253 = state_36794__$1;
(statearr_36818_38253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (14))){
var inst_36787 = (state_36794[(2)]);
var inst_36788 = cljs.core.async.close_BANG_(out);
var state_36794__$1 = (function (){var statearr_36821 = state_36794;
(statearr_36821[(13)] = inst_36787);

return statearr_36821;
})();
var statearr_36822_38255 = state_36794__$1;
(statearr_36822_38255[(2)] = inst_36788);

(statearr_36822_38255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (10))){
var inst_36777 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
var statearr_36823_38256 = state_36794__$1;
(statearr_36823_38256[(2)] = inst_36777);

(statearr_36823_38256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (8))){
var inst_36757 = (state_36794[(9)]);
var inst_36753 = (state_36794[(8)]);
var inst_36761 = (state_36794[(10)]);
var inst_36767 = inst_36753.push(inst_36757);
var tmp36820 = inst_36753;
var inst_36753__$1 = tmp36820;
var inst_36754 = inst_36761;
var state_36794__$1 = (function (){var statearr_36825 = state_36794;
(statearr_36825[(7)] = inst_36754);

(statearr_36825[(8)] = inst_36753__$1);

(statearr_36825[(14)] = inst_36767);

return statearr_36825;
})();
var statearr_36826_38258 = state_36794__$1;
(statearr_36826_38258[(2)] = null);

(statearr_36826_38258[(1)] = (2));


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
var statearr_36828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36828[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36828[(1)] = (1));

return statearr_36828;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36794){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36794);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36830){if((e36830 instanceof Object)){
var ex__34210__auto__ = e36830;
var statearr_36831_38260 = state_36794;
(statearr_36831_38260[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36830;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38261 = state_36794;
state_36794 = G__38261;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34274__auto__ = (function (){var statearr_36833 = (f__34273__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34273__auto__.cljs$core$IFn$_invoke$arity$0() : f__34273__auto__.call(null));
(statearr_36833[(6)] = c__34272__auto___38236);

return statearr_36833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34274__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
