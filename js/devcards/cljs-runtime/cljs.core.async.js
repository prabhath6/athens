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
var val_36815 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36815) : fn1.call(null,val_36815));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36815) : fn1.call(null,val_36815));
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
var n__4666__auto___36822 = n;
var x_36823 = (0);
while(true){
if((x_36823 < n__4666__auto___36822)){
(a[x_36823] = x_36823);

var G__36824 = (x_36823 + (1));
x_36823 = G__36824;
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
var G__34355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34353_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34355) : fret.call(null,G__34355));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34354_SHARP_){
var G__34356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34354_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34356) : fret.call(null,G__34356));
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
var G__36834 = (i + (1));
i = G__36834;
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34359){
var map__34360 = p__34359;
var map__34360__$1 = (((((!((map__34360 == null))))?(((((map__34360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34360):map__34360);
var opts = map__34360__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34357){
var G__34358 = cljs.core.first(seq34357);
var seq34357__$1 = cljs.core.next(seq34357);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34358,seq34357__$1);
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
var G__34367 = arguments.length;
switch (G__34367) {
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
var c__34271__auto___36845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_34405){
var state_val_34406 = (state_34405[(1)]);
if((state_val_34406 === (7))){
var inst_34398 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
var statearr_34410_36847 = state_34405__$1;
(statearr_34410_36847[(2)] = inst_34398);

(statearr_34410_36847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (1))){
var state_34405__$1 = state_34405;
var statearr_34411_36848 = state_34405__$1;
(statearr_34411_36848[(2)] = null);

(statearr_34411_36848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (4))){
var inst_34375 = (state_34405[(7)]);
var inst_34375__$1 = (state_34405[(2)]);
var inst_34376 = (inst_34375__$1 == null);
var state_34405__$1 = (function (){var statearr_34412 = state_34405;
(statearr_34412[(7)] = inst_34375__$1);

return statearr_34412;
})();
if(cljs.core.truth_(inst_34376)){
var statearr_34413_36850 = state_34405__$1;
(statearr_34413_36850[(1)] = (5));

} else {
var statearr_34414_36851 = state_34405__$1;
(statearr_34414_36851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (13))){
var state_34405__$1 = state_34405;
var statearr_34415_36852 = state_34405__$1;
(statearr_34415_36852[(2)] = null);

(statearr_34415_36852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (6))){
var inst_34375 = (state_34405[(7)]);
var state_34405__$1 = state_34405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34405__$1,(11),to,inst_34375);
} else {
if((state_val_34406 === (3))){
var inst_34403 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34405__$1,inst_34403);
} else {
if((state_val_34406 === (12))){
var state_34405__$1 = state_34405;
var statearr_34416_36854 = state_34405__$1;
(statearr_34416_36854[(2)] = null);

(statearr_34416_36854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (2))){
var state_34405__$1 = state_34405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34405__$1,(4),from);
} else {
if((state_val_34406 === (11))){
var inst_34388 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
if(cljs.core.truth_(inst_34388)){
var statearr_34420_36856 = state_34405__$1;
(statearr_34420_36856[(1)] = (12));

} else {
var statearr_34421_36857 = state_34405__$1;
(statearr_34421_36857[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (9))){
var state_34405__$1 = state_34405;
var statearr_34422_36859 = state_34405__$1;
(statearr_34422_36859[(2)] = null);

(statearr_34422_36859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (5))){
var state_34405__$1 = state_34405;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34423_36860 = state_34405__$1;
(statearr_34423_36860[(1)] = (8));

} else {
var statearr_34424_36861 = state_34405__$1;
(statearr_34424_36861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (14))){
var inst_34396 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
var statearr_34425_36863 = state_34405__$1;
(statearr_34425_36863[(2)] = inst_34396);

(statearr_34425_36863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (10))){
var inst_34385 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
var statearr_34426_36864 = state_34405__$1;
(statearr_34426_36864[(2)] = inst_34385);

(statearr_34426_36864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (8))){
var inst_34379 = cljs.core.async.close_BANG_(to);
var state_34405__$1 = state_34405;
var statearr_34427_36866 = state_34405__$1;
(statearr_34427_36866[(2)] = inst_34379);

(statearr_34427_36866[(1)] = (10));


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
var statearr_34428 = [null,null,null,null,null,null,null,null];
(statearr_34428[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34428[(1)] = (1));

return statearr_34428;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34405){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34405);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34429){if((e34429 instanceof Object)){
var ex__34210__auto__ = e34429;
var statearr_34430_36868 = state_34405;
(statearr_34430_36868[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34429;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36870 = state_34405;
state_34405 = G__36870;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_34431 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_34431[(6)] = c__34271__auto___36845);

return statearr_34431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
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
var process = (function (p__34432){
var vec__34433 = p__34432;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34433,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34433,(1),null);
var job = vec__34433;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34271__auto___36873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_34440){
var state_val_34441 = (state_34440[(1)]);
if((state_val_34441 === (1))){
var state_34440__$1 = state_34440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34440__$1,(2),res,v);
} else {
if((state_val_34441 === (2))){
var inst_34437 = (state_34440[(2)]);
var inst_34438 = cljs.core.async.close_BANG_(res);
var state_34440__$1 = (function (){var statearr_34445 = state_34440;
(statearr_34445[(7)] = inst_34437);

return statearr_34445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34440__$1,inst_34438);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34452 = [null,null,null,null,null,null,null,null];
(statearr_34452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34452[(1)] = (1));

return statearr_34452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34440){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34440);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34453){if((e34453 instanceof Object)){
var ex__34210__auto__ = e34453;
var statearr_34457_36876 = state_34440;
(statearr_34457_36876[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34453;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36877 = state_34440;
state_34440 = G__36877;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_34458 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_34458[(6)] = c__34271__auto___36873);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
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
var n__4666__auto___36880 = n;
var __36881 = (0);
while(true){
if((__36881 < n__4666__auto___36880)){
var G__34463_36882 = type;
var G__34463_36883__$1 = (((G__34463_36882 instanceof cljs.core.Keyword))?G__34463_36882.fqn:null);
switch (G__34463_36883__$1) {
case "compute":
var c__34271__auto___36886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36881,c__34271__auto___36886,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = ((function (__36881,c__34271__auto___36886,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34478_36887 = state_34476__$1;
(statearr_34478_36887[(2)] = null);

(statearr_34478_36887[(1)] = (2));


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
var statearr_34479_36889 = state_34476__$1;
(statearr_34479_36889[(1)] = (5));

} else {
var statearr_34480_36890 = state_34476__$1;
(statearr_34480_36890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34481_36892 = state_34476__$1;
(statearr_34481_36892[(2)] = null);

(statearr_34481_36892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var state_34476__$1 = state_34476;
var statearr_34482_36893 = state_34476__$1;
(statearr_34482_36893[(2)] = null);

(statearr_34482_36893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34483_36895 = state_34476__$1;
(statearr_34483_36895[(2)] = inst_34472);

(statearr_34483_36895[(1)] = (3));


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
});})(__36881,c__34271__auto___36886,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async))
;
return ((function (__36881,switch__34206__auto__,c__34271__auto___36886,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async){
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
var statearr_34486_36897 = state_34476;
(statearr_34486_36897[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36899 = state_34476;
state_34476 = G__36899;
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
;})(__36881,switch__34206__auto__,c__34271__auto___36886,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async))
})();
var state__34273__auto__ = (function (){var statearr_34487 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_34487[(6)] = c__34271__auto___36886);

return statearr_34487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
});})(__36881,c__34271__auto___36886,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async))
);


break;
case "async":
var c__34271__auto___36900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36881,c__34271__auto___36900,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = ((function (__36881,c__34271__auto___36900,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (state_34500){
var state_val_34501 = (state_34500[(1)]);
if((state_val_34501 === (1))){
var state_34500__$1 = state_34500;
var statearr_34502_36902 = state_34500__$1;
(statearr_34502_36902[(2)] = null);

(statearr_34502_36902[(1)] = (2));


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
var statearr_34503_36904 = state_34500__$1;
(statearr_34503_36904[(1)] = (5));

} else {
var statearr_34504_36906 = state_34500__$1;
(statearr_34504_36906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (5))){
var state_34500__$1 = state_34500;
var statearr_34505_36907 = state_34500__$1;
(statearr_34505_36907[(2)] = null);

(statearr_34505_36907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (6))){
var state_34500__$1 = state_34500;
var statearr_34506_36908 = state_34500__$1;
(statearr_34506_36908[(2)] = null);

(statearr_34506_36908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (7))){
var inst_34496 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34507_36910 = state_34500__$1;
(statearr_34507_36910[(2)] = inst_34496);

(statearr_34507_36910[(1)] = (3));


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
});})(__36881,c__34271__auto___36900,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async))
;
return ((function (__36881,switch__34206__auto__,c__34271__auto___36900,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34508 = [null,null,null,null,null,null,null];
(statearr_34508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34508[(1)] = (1));

return statearr_34508;
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
}catch (e34509){if((e34509 instanceof Object)){
var ex__34210__auto__ = e34509;
var statearr_34510_36912 = state_34500;
(statearr_34510_36912[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36914 = state_34500;
state_34500 = G__36914;
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
;})(__36881,switch__34206__auto__,c__34271__auto___36900,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async))
})();
var state__34273__auto__ = (function (){var statearr_34511 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_34511[(6)] = c__34271__auto___36900);

return statearr_34511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
});})(__36881,c__34271__auto___36900,G__34463_36882,G__34463_36883__$1,n__4666__auto___36880,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36883__$1)].join('')));

}

var G__36916 = (__36881 + (1));
__36881 = G__36916;
continue;
} else {
}
break;
}

var c__34271__auto___36917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_34533){
var state_val_34534 = (state_34533[(1)]);
if((state_val_34534 === (7))){
var inst_34529 = (state_34533[(2)]);
var state_34533__$1 = state_34533;
var statearr_34539_36918 = state_34533__$1;
(statearr_34539_36918[(2)] = inst_34529);

(statearr_34539_36918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (1))){
var state_34533__$1 = state_34533;
var statearr_34540_36920 = state_34533__$1;
(statearr_34540_36920[(2)] = null);

(statearr_34540_36920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (4))){
var inst_34514 = (state_34533[(7)]);
var inst_34514__$1 = (state_34533[(2)]);
var inst_34515 = (inst_34514__$1 == null);
var state_34533__$1 = (function (){var statearr_34541 = state_34533;
(statearr_34541[(7)] = inst_34514__$1);

return statearr_34541;
})();
if(cljs.core.truth_(inst_34515)){
var statearr_34542_36922 = state_34533__$1;
(statearr_34542_36922[(1)] = (5));

} else {
var statearr_34543_36923 = state_34533__$1;
(statearr_34543_36923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (6))){
var inst_34514 = (state_34533[(7)]);
var inst_34519 = (state_34533[(8)]);
var inst_34519__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34520 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34521 = [inst_34514,inst_34519__$1];
var inst_34522 = (new cljs.core.PersistentVector(null,2,(5),inst_34520,inst_34521,null));
var state_34533__$1 = (function (){var statearr_34544 = state_34533;
(statearr_34544[(8)] = inst_34519__$1);

return statearr_34544;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34533__$1,(8),jobs,inst_34522);
} else {
if((state_val_34534 === (3))){
var inst_34531 = (state_34533[(2)]);
var state_34533__$1 = state_34533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34533__$1,inst_34531);
} else {
if((state_val_34534 === (2))){
var state_34533__$1 = state_34533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34533__$1,(4),from);
} else {
if((state_val_34534 === (9))){
var inst_34526 = (state_34533[(2)]);
var state_34533__$1 = (function (){var statearr_34546 = state_34533;
(statearr_34546[(9)] = inst_34526);

return statearr_34546;
})();
var statearr_34547_36926 = state_34533__$1;
(statearr_34547_36926[(2)] = null);

(statearr_34547_36926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (5))){
var inst_34517 = cljs.core.async.close_BANG_(jobs);
var state_34533__$1 = state_34533;
var statearr_34548_36928 = state_34533__$1;
(statearr_34548_36928[(2)] = inst_34517);

(statearr_34548_36928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (8))){
var inst_34519 = (state_34533[(8)]);
var inst_34524 = (state_34533[(2)]);
var state_34533__$1 = (function (){var statearr_34549 = state_34533;
(statearr_34549[(10)] = inst_34524);

return statearr_34549;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34533__$1,(9),results,inst_34519);
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
var statearr_34550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34550[(1)] = (1));

return statearr_34550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34533){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34533);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34551){if((e34551 instanceof Object)){
var ex__34210__auto__ = e34551;
var statearr_34552_36931 = state_34533;
(statearr_34552_36931[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36932 = state_34533;
state_34533 = G__36932;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_34554 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_34554[(6)] = c__34271__auto___36917);

return statearr_34554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
}));


var c__34271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_34594){
var state_val_34595 = (state_34594[(1)]);
if((state_val_34595 === (7))){
var inst_34590 = (state_34594[(2)]);
var state_34594__$1 = state_34594;
var statearr_34596_36934 = state_34594__$1;
(statearr_34596_36934[(2)] = inst_34590);

(statearr_34596_36934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (20))){
var state_34594__$1 = state_34594;
var statearr_34597_36936 = state_34594__$1;
(statearr_34597_36936[(2)] = null);

(statearr_34597_36936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (1))){
var state_34594__$1 = state_34594;
var statearr_34600_36937 = state_34594__$1;
(statearr_34600_36937[(2)] = null);

(statearr_34600_36937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (4))){
var inst_34557 = (state_34594[(7)]);
var inst_34557__$1 = (state_34594[(2)]);
var inst_34559 = (inst_34557__$1 == null);
var state_34594__$1 = (function (){var statearr_34604 = state_34594;
(statearr_34604[(7)] = inst_34557__$1);

return statearr_34604;
})();
if(cljs.core.truth_(inst_34559)){
var statearr_34605_36939 = state_34594__$1;
(statearr_34605_36939[(1)] = (5));

} else {
var statearr_34608_36940 = state_34594__$1;
(statearr_34608_36940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (15))){
var inst_34571 = (state_34594[(8)]);
var state_34594__$1 = state_34594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34594__$1,(18),to,inst_34571);
} else {
if((state_val_34595 === (21))){
var inst_34584 = (state_34594[(2)]);
var state_34594__$1 = state_34594;
var statearr_34609_36942 = state_34594__$1;
(statearr_34609_36942[(2)] = inst_34584);

(statearr_34609_36942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (13))){
var inst_34586 = (state_34594[(2)]);
var state_34594__$1 = (function (){var statearr_34610 = state_34594;
(statearr_34610[(9)] = inst_34586);

return statearr_34610;
})();
var statearr_34611_36944 = state_34594__$1;
(statearr_34611_36944[(2)] = null);

(statearr_34611_36944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (6))){
var inst_34557 = (state_34594[(7)]);
var state_34594__$1 = state_34594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34594__$1,(11),inst_34557);
} else {
if((state_val_34595 === (17))){
var inst_34579 = (state_34594[(2)]);
var state_34594__$1 = state_34594;
if(cljs.core.truth_(inst_34579)){
var statearr_34612_36946 = state_34594__$1;
(statearr_34612_36946[(1)] = (19));

} else {
var statearr_34613_36947 = state_34594__$1;
(statearr_34613_36947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (3))){
var inst_34592 = (state_34594[(2)]);
var state_34594__$1 = state_34594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34594__$1,inst_34592);
} else {
if((state_val_34595 === (12))){
var inst_34568 = (state_34594[(10)]);
var state_34594__$1 = state_34594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34594__$1,(14),inst_34568);
} else {
if((state_val_34595 === (2))){
var state_34594__$1 = state_34594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34594__$1,(4),results);
} else {
if((state_val_34595 === (19))){
var state_34594__$1 = state_34594;
var statearr_34615_36949 = state_34594__$1;
(statearr_34615_36949[(2)] = null);

(statearr_34615_36949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (11))){
var inst_34568 = (state_34594[(2)]);
var state_34594__$1 = (function (){var statearr_34616 = state_34594;
(statearr_34616[(10)] = inst_34568);

return statearr_34616;
})();
var statearr_34617_36951 = state_34594__$1;
(statearr_34617_36951[(2)] = null);

(statearr_34617_36951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (9))){
var state_34594__$1 = state_34594;
var statearr_34618_36952 = state_34594__$1;
(statearr_34618_36952[(2)] = null);

(statearr_34618_36952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (5))){
var state_34594__$1 = state_34594;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34619_36954 = state_34594__$1;
(statearr_34619_36954[(1)] = (8));

} else {
var statearr_34620_36955 = state_34594__$1;
(statearr_34620_36955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (14))){
var inst_34571 = (state_34594[(8)]);
var inst_34571__$1 = (state_34594[(2)]);
var inst_34572 = (inst_34571__$1 == null);
var inst_34573 = cljs.core.not(inst_34572);
var state_34594__$1 = (function (){var statearr_34621 = state_34594;
(statearr_34621[(8)] = inst_34571__$1);

return statearr_34621;
})();
if(inst_34573){
var statearr_34623_36957 = state_34594__$1;
(statearr_34623_36957[(1)] = (15));

} else {
var statearr_34627_36958 = state_34594__$1;
(statearr_34627_36958[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (16))){
var state_34594__$1 = state_34594;
var statearr_34628_36959 = state_34594__$1;
(statearr_34628_36959[(2)] = false);

(statearr_34628_36959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (10))){
var inst_34565 = (state_34594[(2)]);
var state_34594__$1 = state_34594;
var statearr_34632_36961 = state_34594__$1;
(statearr_34632_36961[(2)] = inst_34565);

(statearr_34632_36961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (18))){
var inst_34576 = (state_34594[(2)]);
var state_34594__$1 = state_34594;
var statearr_34633_36962 = state_34594__$1;
(statearr_34633_36962[(2)] = inst_34576);

(statearr_34633_36962[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (8))){
var inst_34562 = cljs.core.async.close_BANG_(to);
var state_34594__$1 = state_34594;
var statearr_34634_36964 = state_34594__$1;
(statearr_34634_36964[(2)] = inst_34562);

(statearr_34634_36964[(1)] = (10));


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
var statearr_34635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34635[(1)] = (1));

return statearr_34635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34594){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34594);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34636){if((e34636 instanceof Object)){
var ex__34210__auto__ = e34636;
var statearr_34637_36966 = state_34594;
(statearr_34637_36966[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34636;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36968 = state_34594;
state_34594 = G__36968;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_34638 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_34638[(6)] = c__34271__auto__);

return statearr_34638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
}));

return c__34271__auto__;
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
var G__34640 = arguments.length;
switch (G__34640) {
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
var c__34271__auto___36978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_36980 = state_34673__$1;
(statearr_34675_36980[(2)] = inst_34669);

(statearr_34675_36980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_36981 = state_34673__$1;
(statearr_34676_36981[(2)] = null);

(statearr_34676_36981[(1)] = (2));


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
var statearr_34678_36983 = state_34673__$1;
(statearr_34678_36983[(1)] = (5));

} else {
var statearr_34679_36984 = state_34673__$1;
(statearr_34679_36984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_36985 = state_34673__$1;
(statearr_34680_36985[(2)] = null);

(statearr_34680_36985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_36987 = state_34673__$1;
(statearr_34681_36987[(1)] = (9));

} else {
var statearr_34682_36988 = state_34673__$1;
(statearr_34682_36988[(1)] = (10));

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
var statearr_34683_36990 = state_34673__$1;
(statearr_34683_36990[(2)] = null);

(statearr_34683_36990[(1)] = (2));


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
var statearr_34684_36992 = state_34673__$1;
(statearr_34684_36992[(2)] = tc);

(statearr_34684_36992[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_36994 = state_34673__$1;
(statearr_34686_36994[(2)] = inst_34654);

(statearr_34686_36994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_36995 = state_34673__$1;
(statearr_34687_36995[(2)] = inst_34667);

(statearr_34687_36995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_36996 = state_34673__$1;
(statearr_34688_36996[(2)] = fc);

(statearr_34688_36996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34689_36998 = state_34673__$1;
(statearr_34689_36998[(1)] = (12));

} else {
var statearr_34690_36999 = state_34673__$1;
(statearr_34690_36999[(1)] = (13));

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
var statearr_34693_37001 = state_34673;
(statearr_34693_37001[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37002 = state_34673;
state_34673 = G__37002;
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
var state__34273__auto__ = (function (){var statearr_34694 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_34694[(6)] = c__34271__auto___36978);

return statearr_34694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
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
var c__34271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (7))){
var inst_34711 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34717_37010 = state_34715__$1;
(statearr_34717_37010[(2)] = inst_34711);

(statearr_34717_37010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (1))){
var inst_34695 = init;
var state_34715__$1 = (function (){var statearr_34718 = state_34715;
(statearr_34718[(7)] = inst_34695);

return statearr_34718;
})();
var statearr_34719_37011 = state_34715__$1;
(statearr_34719_37011[(2)] = null);

(statearr_34719_37011[(1)] = (2));


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
var statearr_34721_37013 = state_34715__$1;
(statearr_34721_37013[(1)] = (5));

} else {
var statearr_34722_37014 = state_34715__$1;
(statearr_34722_37014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (6))){
var inst_34698 = (state_34715[(8)]);
var inst_34695 = (state_34715[(7)]);
var inst_34702 = (state_34715[(9)]);
var inst_34702__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34695,inst_34698) : f.call(null,inst_34695,inst_34698));
var inst_34703 = cljs.core.reduced_QMARK_(inst_34702__$1);
var state_34715__$1 = (function (){var statearr_34723 = state_34715;
(statearr_34723[(9)] = inst_34702__$1);

return statearr_34723;
})();
if(inst_34703){
var statearr_34724_37016 = state_34715__$1;
(statearr_34724_37016[(1)] = (8));

} else {
var statearr_34725_37018 = state_34715__$1;
(statearr_34725_37018[(1)] = (9));

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
var state_34715__$1 = (function (){var statearr_34726 = state_34715;
(statearr_34726[(7)] = inst_34695);

return statearr_34726;
})();
var statearr_34727_37021 = state_34715__$1;
(statearr_34727_37021[(2)] = null);

(statearr_34727_37021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (5))){
var inst_34695 = (state_34715[(7)]);
var state_34715__$1 = state_34715;
var statearr_34728_37022 = state_34715__$1;
(statearr_34728_37022[(2)] = inst_34695);

(statearr_34728_37022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (10))){
var inst_34709 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34729_37024 = state_34715__$1;
(statearr_34729_37024[(2)] = inst_34709);

(statearr_34729_37024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (8))){
var inst_34702 = (state_34715[(9)]);
var inst_34705 = cljs.core.deref(inst_34702);
var state_34715__$1 = state_34715;
var statearr_34730_37025 = state_34715__$1;
(statearr_34730_37025[(2)] = inst_34705);

(statearr_34730_37025[(1)] = (10));


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
var statearr_34731 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34731[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34731[(1)] = (1));

return statearr_34731;
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
}catch (e34732){if((e34732 instanceof Object)){
var ex__34210__auto__ = e34732;
var statearr_34733_37030 = state_34715;
(statearr_34733_37030[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37032 = state_34715;
state_34715 = G__37032;
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
var state__34273__auto__ = (function (){var statearr_34734 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_34734[(6)] = c__34271__auto__);

return statearr_34734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
}));

return c__34271__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_34743){
var state_val_34744 = (state_34743[(1)]);
if((state_val_34744 === (1))){
var inst_34738 = cljs.core.async.reduce(f__$1,init,ch);
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34743__$1,(2),inst_34738);
} else {
if((state_val_34744 === (2))){
var inst_34740 = (state_34743[(2)]);
var inst_34741 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34740) : f__$1.call(null,inst_34740));
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34743__$1,inst_34741);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34750 = [null,null,null,null,null,null,null];
(statearr_34750[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34750[(1)] = (1));

return statearr_34750;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34743){
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
}catch (e34751){if((e34751 instanceof Object)){
var ex__34210__auto__ = e34751;
var statearr_34752_37037 = state_34743;
(statearr_34752_37037[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37040 = state_34743;
state_34743 = G__37040;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34743){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_34754 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_34754[(6)] = c__34271__auto__);

return statearr_34754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
}));

return c__34271__auto__;
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
var G__34758 = arguments.length;
switch (G__34758) {
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
var c__34271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_34783){
var state_val_34784 = (state_34783[(1)]);
if((state_val_34784 === (7))){
var inst_34765 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34786_37047 = state_34783__$1;
(statearr_34786_37047[(2)] = inst_34765);

(statearr_34786_37047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (1))){
var inst_34759 = cljs.core.seq(coll);
var inst_34760 = inst_34759;
var state_34783__$1 = (function (){var statearr_34788 = state_34783;
(statearr_34788[(7)] = inst_34760);

return statearr_34788;
})();
var statearr_34789_37050 = state_34783__$1;
(statearr_34789_37050[(2)] = null);

(statearr_34789_37050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (4))){
var inst_34760 = (state_34783[(7)]);
var inst_34763 = cljs.core.first(inst_34760);
var state_34783__$1 = state_34783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34783__$1,(7),ch,inst_34763);
} else {
if((state_val_34784 === (13))){
var inst_34777 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34790_37056 = state_34783__$1;
(statearr_34790_37056[(2)] = inst_34777);

(statearr_34790_37056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (6))){
var inst_34768 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34768)){
var statearr_34791_37059 = state_34783__$1;
(statearr_34791_37059[(1)] = (8));

} else {
var statearr_34793_37060 = state_34783__$1;
(statearr_34793_37060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (3))){
var inst_34781 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34783__$1,inst_34781);
} else {
if((state_val_34784 === (12))){
var state_34783__$1 = state_34783;
var statearr_34795_37062 = state_34783__$1;
(statearr_34795_37062[(2)] = null);

(statearr_34795_37062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (2))){
var inst_34760 = (state_34783[(7)]);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34760)){
var statearr_34799_37068 = state_34783__$1;
(statearr_34799_37068[(1)] = (4));

} else {
var statearr_34800_37070 = state_34783__$1;
(statearr_34800_37070[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (11))){
var inst_34774 = cljs.core.async.close_BANG_(ch);
var state_34783__$1 = state_34783;
var statearr_34801_37074 = state_34783__$1;
(statearr_34801_37074[(2)] = inst_34774);

(statearr_34801_37074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (9))){
var state_34783__$1 = state_34783;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34802_37078 = state_34783__$1;
(statearr_34802_37078[(1)] = (11));

} else {
var statearr_34803_37079 = state_34783__$1;
(statearr_34803_37079[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (5))){
var inst_34760 = (state_34783[(7)]);
var state_34783__$1 = state_34783;
var statearr_34804_37080 = state_34783__$1;
(statearr_34804_37080[(2)] = inst_34760);

(statearr_34804_37080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (10))){
var inst_34779 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34805_37083 = state_34783__$1;
(statearr_34805_37083[(2)] = inst_34779);

(statearr_34805_37083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (8))){
var inst_34760 = (state_34783[(7)]);
var inst_34770 = cljs.core.next(inst_34760);
var inst_34760__$1 = inst_34770;
var state_34783__$1 = (function (){var statearr_34807 = state_34783;
(statearr_34807[(7)] = inst_34760__$1);

return statearr_34807;
})();
var statearr_34808_37089 = state_34783__$1;
(statearr_34808_37089[(2)] = null);

(statearr_34808_37089[(1)] = (2));


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
var statearr_34809 = [null,null,null,null,null,null,null,null];
(statearr_34809[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34809[(1)] = (1));

return statearr_34809;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34783){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34783);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34810){if((e34810 instanceof Object)){
var ex__34210__auto__ = e34810;
var statearr_34811_37096 = state_34783;
(statearr_34811_37096[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37097 = state_34783;
state_34783 = G__37097;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_34812 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_34812[(6)] = c__34271__auto__);

return statearr_34812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
}));

return c__34271__auto__;
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
var c__34271__auto___37142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_34972){
var state_val_34973 = (state_34972[(1)]);
if((state_val_34973 === (7))){
var inst_34968 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_34977_37143 = state_34972__$1;
(statearr_34977_37143[(2)] = inst_34968);

(statearr_34977_37143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (20))){
var inst_34864 = (state_34972[(7)]);
var inst_34877 = cljs.core.first(inst_34864);
var inst_34878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34877,(0),null);
var inst_34879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34877,(1),null);
var state_34972__$1 = (function (){var statearr_34978 = state_34972;
(statearr_34978[(8)] = inst_34878);

return statearr_34978;
})();
if(cljs.core.truth_(inst_34879)){
var statearr_34979_37151 = state_34972__$1;
(statearr_34979_37151[(1)] = (22));

} else {
var statearr_34983_37152 = state_34972__$1;
(statearr_34983_37152[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (27))){
var inst_34914 = (state_34972[(9)]);
var inst_34909 = (state_34972[(10)]);
var inst_34907 = (state_34972[(11)]);
var inst_34827 = (state_34972[(12)]);
var inst_34914__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34907,inst_34909);
var inst_34915 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34914__$1,inst_34827,done);
var state_34972__$1 = (function (){var statearr_34984 = state_34972;
(statearr_34984[(9)] = inst_34914__$1);

return statearr_34984;
})();
if(cljs.core.truth_(inst_34915)){
var statearr_34985_37154 = state_34972__$1;
(statearr_34985_37154[(1)] = (30));

} else {
var statearr_34986_37155 = state_34972__$1;
(statearr_34986_37155[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (1))){
var state_34972__$1 = state_34972;
var statearr_34987_37158 = state_34972__$1;
(statearr_34987_37158[(2)] = null);

(statearr_34987_37158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (24))){
var inst_34864 = (state_34972[(7)]);
var inst_34884 = (state_34972[(2)]);
var inst_34885 = cljs.core.next(inst_34864);
var inst_34836 = inst_34885;
var inst_34837 = null;
var inst_34838 = (0);
var inst_34839 = (0);
var state_34972__$1 = (function (){var statearr_34988 = state_34972;
(statearr_34988[(13)] = inst_34837);

(statearr_34988[(14)] = inst_34836);

(statearr_34988[(15)] = inst_34838);

(statearr_34988[(16)] = inst_34839);

(statearr_34988[(17)] = inst_34884);

return statearr_34988;
})();
var statearr_34989_37163 = state_34972__$1;
(statearr_34989_37163[(2)] = null);

(statearr_34989_37163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (39))){
var state_34972__$1 = state_34972;
var statearr_34993_37168 = state_34972__$1;
(statearr_34993_37168[(2)] = null);

(statearr_34993_37168[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (4))){
var inst_34827 = (state_34972[(12)]);
var inst_34827__$1 = (state_34972[(2)]);
var inst_34828 = (inst_34827__$1 == null);
var state_34972__$1 = (function (){var statearr_34994 = state_34972;
(statearr_34994[(12)] = inst_34827__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34828)){
var statearr_34995_37169 = state_34972__$1;
(statearr_34995_37169[(1)] = (5));

} else {
var statearr_34996_37171 = state_34972__$1;
(statearr_34996_37171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (15))){
var inst_34837 = (state_34972[(13)]);
var inst_34836 = (state_34972[(14)]);
var inst_34838 = (state_34972[(15)]);
var inst_34839 = (state_34972[(16)]);
var inst_34857 = (state_34972[(2)]);
var inst_34861 = (inst_34839 + (1));
var tmp34990 = inst_34837;
var tmp34991 = inst_34836;
var tmp34992 = inst_34838;
var inst_34836__$1 = tmp34991;
var inst_34837__$1 = tmp34990;
var inst_34838__$1 = tmp34992;
var inst_34839__$1 = inst_34861;
var state_34972__$1 = (function (){var statearr_34997 = state_34972;
(statearr_34997[(18)] = inst_34857);

(statearr_34997[(13)] = inst_34837__$1);

(statearr_34997[(14)] = inst_34836__$1);

(statearr_34997[(15)] = inst_34838__$1);

(statearr_34997[(16)] = inst_34839__$1);

return statearr_34997;
})();
var statearr_34998_37175 = state_34972__$1;
(statearr_34998_37175[(2)] = null);

(statearr_34998_37175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (21))){
var inst_34888 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35002_37177 = state_34972__$1;
(statearr_35002_37177[(2)] = inst_34888);

(statearr_35002_37177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (31))){
var inst_34914 = (state_34972[(9)]);
var inst_34919 = done(null);
var inst_34920 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34914);
var state_34972__$1 = (function (){var statearr_35003 = state_34972;
(statearr_35003[(19)] = inst_34919);

return statearr_35003;
})();
var statearr_35004_37183 = state_34972__$1;
(statearr_35004_37183[(2)] = inst_34920);

(statearr_35004_37183[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (32))){
var inst_34909 = (state_34972[(10)]);
var inst_34906 = (state_34972[(20)]);
var inst_34907 = (state_34972[(11)]);
var inst_34908 = (state_34972[(21)]);
var inst_34922 = (state_34972[(2)]);
var inst_34924 = (inst_34909 + (1));
var tmp34999 = inst_34906;
var tmp35000 = inst_34907;
var tmp35001 = inst_34908;
var inst_34906__$1 = tmp34999;
var inst_34907__$1 = tmp35000;
var inst_34908__$1 = tmp35001;
var inst_34909__$1 = inst_34924;
var state_34972__$1 = (function (){var statearr_35005 = state_34972;
(statearr_35005[(10)] = inst_34909__$1);

(statearr_35005[(20)] = inst_34906__$1);

(statearr_35005[(11)] = inst_34907__$1);

(statearr_35005[(21)] = inst_34908__$1);

(statearr_35005[(22)] = inst_34922);

return statearr_35005;
})();
var statearr_35006_37189 = state_34972__$1;
(statearr_35006_37189[(2)] = null);

(statearr_35006_37189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (40))){
var inst_34938 = (state_34972[(23)]);
var inst_34943 = done(null);
var inst_34944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34938);
var state_34972__$1 = (function (){var statearr_35007 = state_34972;
(statearr_35007[(24)] = inst_34943);

return statearr_35007;
})();
var statearr_35008_37190 = state_34972__$1;
(statearr_35008_37190[(2)] = inst_34944);

(statearr_35008_37190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (33))){
var inst_34928 = (state_34972[(25)]);
var inst_34930 = cljs.core.chunked_seq_QMARK_(inst_34928);
var state_34972__$1 = state_34972;
if(inst_34930){
var statearr_35009_37197 = state_34972__$1;
(statearr_35009_37197[(1)] = (36));

} else {
var statearr_35010_37198 = state_34972__$1;
(statearr_35010_37198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (13))){
var inst_34851 = (state_34972[(26)]);
var inst_34854 = cljs.core.async.close_BANG_(inst_34851);
var state_34972__$1 = state_34972;
var statearr_35011_37199 = state_34972__$1;
(statearr_35011_37199[(2)] = inst_34854);

(statearr_35011_37199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (22))){
var inst_34878 = (state_34972[(8)]);
var inst_34881 = cljs.core.async.close_BANG_(inst_34878);
var state_34972__$1 = state_34972;
var statearr_35012_37200 = state_34972__$1;
(statearr_35012_37200[(2)] = inst_34881);

(statearr_35012_37200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (36))){
var inst_34928 = (state_34972[(25)]);
var inst_34932 = cljs.core.chunk_first(inst_34928);
var inst_34933 = cljs.core.chunk_rest(inst_34928);
var inst_34934 = cljs.core.count(inst_34932);
var inst_34906 = inst_34933;
var inst_34907 = inst_34932;
var inst_34908 = inst_34934;
var inst_34909 = (0);
var state_34972__$1 = (function (){var statearr_35013 = state_34972;
(statearr_35013[(10)] = inst_34909);

(statearr_35013[(20)] = inst_34906);

(statearr_35013[(11)] = inst_34907);

(statearr_35013[(21)] = inst_34908);

return statearr_35013;
})();
var statearr_35014_37209 = state_34972__$1;
(statearr_35014_37209[(2)] = null);

(statearr_35014_37209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (41))){
var inst_34928 = (state_34972[(25)]);
var inst_34946 = (state_34972[(2)]);
var inst_34947 = cljs.core.next(inst_34928);
var inst_34906 = inst_34947;
var inst_34907 = null;
var inst_34908 = (0);
var inst_34909 = (0);
var state_34972__$1 = (function (){var statearr_35015 = state_34972;
(statearr_35015[(27)] = inst_34946);

(statearr_35015[(10)] = inst_34909);

(statearr_35015[(20)] = inst_34906);

(statearr_35015[(11)] = inst_34907);

(statearr_35015[(21)] = inst_34908);

return statearr_35015;
})();
var statearr_35016_37216 = state_34972__$1;
(statearr_35016_37216[(2)] = null);

(statearr_35016_37216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (43))){
var state_34972__$1 = state_34972;
var statearr_35017_37219 = state_34972__$1;
(statearr_35017_37219[(2)] = null);

(statearr_35017_37219[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (29))){
var inst_34956 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35018_37222 = state_34972__$1;
(statearr_35018_37222[(2)] = inst_34956);

(statearr_35018_37222[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (44))){
var inst_34965 = (state_34972[(2)]);
var state_34972__$1 = (function (){var statearr_35019 = state_34972;
(statearr_35019[(28)] = inst_34965);

return statearr_35019;
})();
var statearr_35020_37228 = state_34972__$1;
(statearr_35020_37228[(2)] = null);

(statearr_35020_37228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (6))){
var inst_34898 = (state_34972[(29)]);
var inst_34897 = cljs.core.deref(cs);
var inst_34898__$1 = cljs.core.keys(inst_34897);
var inst_34899 = cljs.core.count(inst_34898__$1);
var inst_34900 = cljs.core.reset_BANG_(dctr,inst_34899);
var inst_34905 = cljs.core.seq(inst_34898__$1);
var inst_34906 = inst_34905;
var inst_34907 = null;
var inst_34908 = (0);
var inst_34909 = (0);
var state_34972__$1 = (function (){var statearr_35021 = state_34972;
(statearr_35021[(29)] = inst_34898__$1);

(statearr_35021[(30)] = inst_34900);

(statearr_35021[(10)] = inst_34909);

(statearr_35021[(20)] = inst_34906);

(statearr_35021[(11)] = inst_34907);

(statearr_35021[(21)] = inst_34908);

return statearr_35021;
})();
var statearr_35022_37234 = state_34972__$1;
(statearr_35022_37234[(2)] = null);

(statearr_35022_37234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (28))){
var inst_34906 = (state_34972[(20)]);
var inst_34928 = (state_34972[(25)]);
var inst_34928__$1 = cljs.core.seq(inst_34906);
var state_34972__$1 = (function (){var statearr_35023 = state_34972;
(statearr_35023[(25)] = inst_34928__$1);

return statearr_35023;
})();
if(inst_34928__$1){
var statearr_35024_37241 = state_34972__$1;
(statearr_35024_37241[(1)] = (33));

} else {
var statearr_35025_37243 = state_34972__$1;
(statearr_35025_37243[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (25))){
var inst_34909 = (state_34972[(10)]);
var inst_34908 = (state_34972[(21)]);
var inst_34911 = (inst_34909 < inst_34908);
var inst_34912 = inst_34911;
var state_34972__$1 = state_34972;
if(cljs.core.truth_(inst_34912)){
var statearr_35026_37249 = state_34972__$1;
(statearr_35026_37249[(1)] = (27));

} else {
var statearr_35027_37250 = state_34972__$1;
(statearr_35027_37250[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (34))){
var state_34972__$1 = state_34972;
var statearr_35028_37251 = state_34972__$1;
(statearr_35028_37251[(2)] = null);

(statearr_35028_37251[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (17))){
var state_34972__$1 = state_34972;
var statearr_35029_37254 = state_34972__$1;
(statearr_35029_37254[(2)] = null);

(statearr_35029_37254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (3))){
var inst_34970 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34972__$1,inst_34970);
} else {
if((state_val_34973 === (12))){
var inst_34893 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35030_37257 = state_34972__$1;
(statearr_35030_37257[(2)] = inst_34893);

(statearr_35030_37257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (2))){
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34972__$1,(4),ch);
} else {
if((state_val_34973 === (23))){
var state_34972__$1 = state_34972;
var statearr_35033_37259 = state_34972__$1;
(statearr_35033_37259[(2)] = null);

(statearr_35033_37259[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (35))){
var inst_34954 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35035_37260 = state_34972__$1;
(statearr_35035_37260[(2)] = inst_34954);

(statearr_35035_37260[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (19))){
var inst_34864 = (state_34972[(7)]);
var inst_34869 = cljs.core.chunk_first(inst_34864);
var inst_34870 = cljs.core.chunk_rest(inst_34864);
var inst_34871 = cljs.core.count(inst_34869);
var inst_34836 = inst_34870;
var inst_34837 = inst_34869;
var inst_34838 = inst_34871;
var inst_34839 = (0);
var state_34972__$1 = (function (){var statearr_35039 = state_34972;
(statearr_35039[(13)] = inst_34837);

(statearr_35039[(14)] = inst_34836);

(statearr_35039[(15)] = inst_34838);

(statearr_35039[(16)] = inst_34839);

return statearr_35039;
})();
var statearr_35040_37266 = state_34972__$1;
(statearr_35040_37266[(2)] = null);

(statearr_35040_37266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (11))){
var inst_34864 = (state_34972[(7)]);
var inst_34836 = (state_34972[(14)]);
var inst_34864__$1 = cljs.core.seq(inst_34836);
var state_34972__$1 = (function (){var statearr_35041 = state_34972;
(statearr_35041[(7)] = inst_34864__$1);

return statearr_35041;
})();
if(inst_34864__$1){
var statearr_35042_37268 = state_34972__$1;
(statearr_35042_37268[(1)] = (16));

} else {
var statearr_35043_37270 = state_34972__$1;
(statearr_35043_37270[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (9))){
var inst_34895 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35044_37271 = state_34972__$1;
(statearr_35044_37271[(2)] = inst_34895);

(statearr_35044_37271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (5))){
var inst_34834 = cljs.core.deref(cs);
var inst_34835 = cljs.core.seq(inst_34834);
var inst_34836 = inst_34835;
var inst_34837 = null;
var inst_34838 = (0);
var inst_34839 = (0);
var state_34972__$1 = (function (){var statearr_35045 = state_34972;
(statearr_35045[(13)] = inst_34837);

(statearr_35045[(14)] = inst_34836);

(statearr_35045[(15)] = inst_34838);

(statearr_35045[(16)] = inst_34839);

return statearr_35045;
})();
var statearr_35046_37276 = state_34972__$1;
(statearr_35046_37276[(2)] = null);

(statearr_35046_37276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (14))){
var state_34972__$1 = state_34972;
var statearr_35049_37278 = state_34972__$1;
(statearr_35049_37278[(2)] = null);

(statearr_35049_37278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (45))){
var inst_34962 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35052_37280 = state_34972__$1;
(statearr_35052_37280[(2)] = inst_34962);

(statearr_35052_37280[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (26))){
var inst_34898 = (state_34972[(29)]);
var inst_34958 = (state_34972[(2)]);
var inst_34959 = cljs.core.seq(inst_34898);
var state_34972__$1 = (function (){var statearr_35055 = state_34972;
(statearr_35055[(31)] = inst_34958);

return statearr_35055;
})();
if(inst_34959){
var statearr_35056_37285 = state_34972__$1;
(statearr_35056_37285[(1)] = (42));

} else {
var statearr_35057_37288 = state_34972__$1;
(statearr_35057_37288[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (16))){
var inst_34864 = (state_34972[(7)]);
var inst_34866 = cljs.core.chunked_seq_QMARK_(inst_34864);
var state_34972__$1 = state_34972;
if(inst_34866){
var statearr_35058_37291 = state_34972__$1;
(statearr_35058_37291[(1)] = (19));

} else {
var statearr_35059_37292 = state_34972__$1;
(statearr_35059_37292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (38))){
var inst_34951 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35060_37296 = state_34972__$1;
(statearr_35060_37296[(2)] = inst_34951);

(statearr_35060_37296[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (30))){
var state_34972__$1 = state_34972;
var statearr_35061_37299 = state_34972__$1;
(statearr_35061_37299[(2)] = null);

(statearr_35061_37299[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (10))){
var inst_34837 = (state_34972[(13)]);
var inst_34839 = (state_34972[(16)]);
var inst_34847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34837,inst_34839);
var inst_34851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34847,(0),null);
var inst_34852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34847,(1),null);
var state_34972__$1 = (function (){var statearr_35062 = state_34972;
(statearr_35062[(26)] = inst_34851);

return statearr_35062;
})();
if(cljs.core.truth_(inst_34852)){
var statearr_35063_37306 = state_34972__$1;
(statearr_35063_37306[(1)] = (13));

} else {
var statearr_35064_37307 = state_34972__$1;
(statearr_35064_37307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (18))){
var inst_34891 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35067_37309 = state_34972__$1;
(statearr_35067_37309[(2)] = inst_34891);

(statearr_35067_37309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (42))){
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34972__$1,(45),dchan);
} else {
if((state_val_34973 === (37))){
var inst_34928 = (state_34972[(25)]);
var inst_34827 = (state_34972[(12)]);
var inst_34938 = (state_34972[(23)]);
var inst_34938__$1 = cljs.core.first(inst_34928);
var inst_34940 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34938__$1,inst_34827,done);
var state_34972__$1 = (function (){var statearr_35072 = state_34972;
(statearr_35072[(23)] = inst_34938__$1);

return statearr_35072;
})();
if(cljs.core.truth_(inst_34940)){
var statearr_35073_37317 = state_34972__$1;
(statearr_35073_37317[(1)] = (39));

} else {
var statearr_35074_37318 = state_34972__$1;
(statearr_35074_37318[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (8))){
var inst_34838 = (state_34972[(15)]);
var inst_34839 = (state_34972[(16)]);
var inst_34841 = (inst_34839 < inst_34838);
var inst_34842 = inst_34841;
var state_34972__$1 = state_34972;
if(cljs.core.truth_(inst_34842)){
var statearr_35075_37323 = state_34972__$1;
(statearr_35075_37323[(1)] = (10));

} else {
var statearr_35076_37324 = state_34972__$1;
(statearr_35076_37324[(1)] = (11));

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
var statearr_35077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35077[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35077[(1)] = (1));

return statearr_35077;
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
}catch (e35080){if((e35080 instanceof Object)){
var ex__34210__auto__ = e35080;
var statearr_35081_37333 = state_34972;
(statearr_35081_37333[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35080;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37334 = state_34972;
state_34972 = G__37334;
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
var state__34273__auto__ = (function (){var statearr_35085 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_35085[(6)] = c__34271__auto___37142);

return statearr_35085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
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
var G__35088 = arguments.length;
switch (G__35088) {
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
var len__4789__auto___37381 = arguments.length;
var i__4790__auto___37382 = (0);
while(true){
if((i__4790__auto___37382 < len__4789__auto___37381)){
args__4795__auto__.push((arguments[i__4790__auto___37382]));

var G__37383 = (i__4790__auto___37382 + (1));
i__4790__auto___37382 = G__37383;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35194){
var map__35195 = p__35194;
var map__35195__$1 = (((((!((map__35195 == null))))?(((((map__35195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35195):map__35195);
var opts = map__35195__$1;
var statearr_35199_37392 = state;
(statearr_35199_37392[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35200_37398 = state;
(statearr_35200_37398[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35203_37399 = state;
(statearr_35203_37399[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35190){
var G__35191 = cljs.core.first(seq35190);
var seq35190__$1 = cljs.core.next(seq35190);
var G__35192 = cljs.core.first(seq35190__$1);
var seq35190__$2 = cljs.core.next(seq35190__$1);
var G__35193 = cljs.core.first(seq35190__$2);
var seq35190__$3 = cljs.core.next(seq35190__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35191,G__35192,G__35193,seq35190__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35251 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35252){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35252 = meta35252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35253,meta35252__$1){
var self__ = this;
var _35253__$1 = this;
return (new cljs.core.async.t_cljs$core$async35251(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35252__$1));
}));

(cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35253){
var self__ = this;
var _35253__$1 = this;
return self__.meta35252;
}));

(cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35252","meta35252",1682826009,null)], null);
}));

(cljs.core.async.t_cljs$core$async35251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35251");

(cljs.core.async.t_cljs$core$async35251.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35251.
 */
cljs.core.async.__GT_t_cljs$core$async35251 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35251(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35252){
return (new cljs.core.async.t_cljs$core$async35251(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35252));
});

}

return (new cljs.core.async.t_cljs$core$async35251(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34271__auto___37437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_35472){
var state_val_35473 = (state_35472[(1)]);
if((state_val_35473 === (7))){
var inst_35344 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35475_37441 = state_35472__$1;
(statearr_35475_37441[(2)] = inst_35344);

(statearr_35475_37441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (20))){
var inst_35359 = (state_35472[(7)]);
var state_35472__$1 = state_35472;
var statearr_35476_37445 = state_35472__$1;
(statearr_35476_37445[(2)] = inst_35359);

(statearr_35476_37445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (27))){
var state_35472__$1 = state_35472;
var statearr_35477_37446 = state_35472__$1;
(statearr_35477_37446[(2)] = null);

(statearr_35477_37446[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (1))){
var inst_35324 = (state_35472[(8)]);
var inst_35324__$1 = calc_state();
var inst_35329 = (inst_35324__$1 == null);
var inst_35330 = cljs.core.not(inst_35329);
var state_35472__$1 = (function (){var statearr_35478 = state_35472;
(statearr_35478[(8)] = inst_35324__$1);

return statearr_35478;
})();
if(inst_35330){
var statearr_35479_37448 = state_35472__$1;
(statearr_35479_37448[(1)] = (2));

} else {
var statearr_35480_37449 = state_35472__$1;
(statearr_35480_37449[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (24))){
var inst_35429 = (state_35472[(9)]);
var inst_35405 = (state_35472[(10)]);
var inst_35390 = (state_35472[(11)]);
var inst_35429__$1 = (inst_35390.cljs$core$IFn$_invoke$arity$1 ? inst_35390.cljs$core$IFn$_invoke$arity$1(inst_35405) : inst_35390.call(null,inst_35405));
var state_35472__$1 = (function (){var statearr_35481 = state_35472;
(statearr_35481[(9)] = inst_35429__$1);

return statearr_35481;
})();
if(cljs.core.truth_(inst_35429__$1)){
var statearr_35482_37454 = state_35472__$1;
(statearr_35482_37454[(1)] = (29));

} else {
var statearr_35484_37455 = state_35472__$1;
(statearr_35484_37455[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (4))){
var inst_35347 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35347)){
var statearr_35486_37456 = state_35472__$1;
(statearr_35486_37456[(1)] = (8));

} else {
var statearr_35487_37460 = state_35472__$1;
(statearr_35487_37460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (15))){
var inst_35383 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35383)){
var statearr_35488_37461 = state_35472__$1;
(statearr_35488_37461[(1)] = (19));

} else {
var statearr_35489_37462 = state_35472__$1;
(statearr_35489_37462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (21))){
var inst_35389 = (state_35472[(12)]);
var inst_35389__$1 = (state_35472[(2)]);
var inst_35390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35389__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35389__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35389__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35472__$1 = (function (){var statearr_35490 = state_35472;
(statearr_35490[(13)] = inst_35394);

(statearr_35490[(12)] = inst_35389__$1);

(statearr_35490[(11)] = inst_35390);

return statearr_35490;
})();
return cljs.core.async.ioc_alts_BANG_(state_35472__$1,(22),inst_35395);
} else {
if((state_val_35473 === (31))){
var inst_35442 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35442)){
var statearr_35495_37469 = state_35472__$1;
(statearr_35495_37469[(1)] = (32));

} else {
var statearr_35497_37470 = state_35472__$1;
(statearr_35497_37470[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (32))){
var inst_35403 = (state_35472[(14)]);
var state_35472__$1 = state_35472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35472__$1,(35),out,inst_35403);
} else {
if((state_val_35473 === (33))){
var inst_35389 = (state_35472[(12)]);
var inst_35359 = inst_35389;
var state_35472__$1 = (function (){var statearr_35502 = state_35472;
(statearr_35502[(7)] = inst_35359);

return statearr_35502;
})();
var statearr_35505_37477 = state_35472__$1;
(statearr_35505_37477[(2)] = null);

(statearr_35505_37477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (13))){
var inst_35359 = (state_35472[(7)]);
var inst_35372 = inst_35359.cljs$lang$protocol_mask$partition0$;
var inst_35373 = (inst_35372 & (64));
var inst_35374 = inst_35359.cljs$core$ISeq$;
var inst_35375 = (cljs.core.PROTOCOL_SENTINEL === inst_35374);
var inst_35376 = ((inst_35373) || (inst_35375));
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35376)){
var statearr_35507_37486 = state_35472__$1;
(statearr_35507_37486[(1)] = (16));

} else {
var statearr_35509_37487 = state_35472__$1;
(statearr_35509_37487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (22))){
var inst_35403 = (state_35472[(14)]);
var inst_35405 = (state_35472[(10)]);
var inst_35402 = (state_35472[(2)]);
var inst_35403__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35402,(0),null);
var inst_35405__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35402,(1),null);
var inst_35408 = (inst_35403__$1 == null);
var inst_35410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35405__$1,change);
var inst_35411 = ((inst_35408) || (inst_35410));
var state_35472__$1 = (function (){var statearr_35519 = state_35472;
(statearr_35519[(14)] = inst_35403__$1);

(statearr_35519[(10)] = inst_35405__$1);

return statearr_35519;
})();
if(cljs.core.truth_(inst_35411)){
var statearr_35523_37494 = state_35472__$1;
(statearr_35523_37494[(1)] = (23));

} else {
var statearr_35526_37500 = state_35472__$1;
(statearr_35526_37500[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (36))){
var inst_35389 = (state_35472[(12)]);
var inst_35359 = inst_35389;
var state_35472__$1 = (function (){var statearr_35528 = state_35472;
(statearr_35528[(7)] = inst_35359);

return statearr_35528;
})();
var statearr_35529_37504 = state_35472__$1;
(statearr_35529_37504[(2)] = null);

(statearr_35529_37504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (29))){
var inst_35429 = (state_35472[(9)]);
var state_35472__$1 = state_35472;
var statearr_35532_37506 = state_35472__$1;
(statearr_35532_37506[(2)] = inst_35429);

(statearr_35532_37506[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (6))){
var state_35472__$1 = state_35472;
var statearr_35533_37507 = state_35472__$1;
(statearr_35533_37507[(2)] = false);

(statearr_35533_37507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (28))){
var inst_35423 = (state_35472[(2)]);
var inst_35424 = calc_state();
var inst_35359 = inst_35424;
var state_35472__$1 = (function (){var statearr_35538 = state_35472;
(statearr_35538[(15)] = inst_35423);

(statearr_35538[(7)] = inst_35359);

return statearr_35538;
})();
var statearr_35542_37515 = state_35472__$1;
(statearr_35542_37515[(2)] = null);

(statearr_35542_37515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (25))){
var inst_35468 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35543_37521 = state_35472__$1;
(statearr_35543_37521[(2)] = inst_35468);

(statearr_35543_37521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (34))){
var inst_35466 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35544_37523 = state_35472__$1;
(statearr_35544_37523[(2)] = inst_35466);

(statearr_35544_37523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (17))){
var state_35472__$1 = state_35472;
var statearr_35547_37525 = state_35472__$1;
(statearr_35547_37525[(2)] = false);

(statearr_35547_37525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (3))){
var state_35472__$1 = state_35472;
var statearr_35550_37528 = state_35472__$1;
(statearr_35550_37528[(2)] = false);

(statearr_35550_37528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (12))){
var inst_35470 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35472__$1,inst_35470);
} else {
if((state_val_35473 === (2))){
var inst_35324 = (state_35472[(8)]);
var inst_35334 = inst_35324.cljs$lang$protocol_mask$partition0$;
var inst_35335 = (inst_35334 & (64));
var inst_35337 = inst_35324.cljs$core$ISeq$;
var inst_35338 = (cljs.core.PROTOCOL_SENTINEL === inst_35337);
var inst_35339 = ((inst_35335) || (inst_35338));
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35339)){
var statearr_35557_37535 = state_35472__$1;
(statearr_35557_37535[(1)] = (5));

} else {
var statearr_35559_37536 = state_35472__$1;
(statearr_35559_37536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (23))){
var inst_35403 = (state_35472[(14)]);
var inst_35413 = (inst_35403 == null);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35413)){
var statearr_35566_37542 = state_35472__$1;
(statearr_35566_37542[(1)] = (26));

} else {
var statearr_35567_37544 = state_35472__$1;
(statearr_35567_37544[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (35))){
var inst_35447 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35447)){
var statearr_35568_37546 = state_35472__$1;
(statearr_35568_37546[(1)] = (36));

} else {
var statearr_35569_37547 = state_35472__$1;
(statearr_35569_37547[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (19))){
var inst_35359 = (state_35472[(7)]);
var inst_35386 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35359);
var state_35472__$1 = state_35472;
var statearr_35572_37549 = state_35472__$1;
(statearr_35572_37549[(2)] = inst_35386);

(statearr_35572_37549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (11))){
var inst_35359 = (state_35472[(7)]);
var inst_35365 = (inst_35359 == null);
var inst_35366 = cljs.core.not(inst_35365);
var state_35472__$1 = state_35472;
if(inst_35366){
var statearr_35575_37556 = state_35472__$1;
(statearr_35575_37556[(1)] = (13));

} else {
var statearr_35588_37558 = state_35472__$1;
(statearr_35588_37558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (9))){
var inst_35324 = (state_35472[(8)]);
var state_35472__$1 = state_35472;
var statearr_35598_37560 = state_35472__$1;
(statearr_35598_37560[(2)] = inst_35324);

(statearr_35598_37560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (5))){
var state_35472__$1 = state_35472;
var statearr_35599_37561 = state_35472__$1;
(statearr_35599_37561[(2)] = true);

(statearr_35599_37561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (14))){
var state_35472__$1 = state_35472;
var statearr_35602_37567 = state_35472__$1;
(statearr_35602_37567[(2)] = false);

(statearr_35602_37567[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (26))){
var inst_35405 = (state_35472[(10)]);
var inst_35415 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35405);
var state_35472__$1 = state_35472;
var statearr_35605_37570 = state_35472__$1;
(statearr_35605_37570[(2)] = inst_35415);

(statearr_35605_37570[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (16))){
var state_35472__$1 = state_35472;
var statearr_35606_37572 = state_35472__$1;
(statearr_35606_37572[(2)] = true);

(statearr_35606_37572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (38))){
var inst_35462 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35608_37575 = state_35472__$1;
(statearr_35608_37575[(2)] = inst_35462);

(statearr_35608_37575[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (30))){
var inst_35394 = (state_35472[(13)]);
var inst_35405 = (state_35472[(10)]);
var inst_35390 = (state_35472[(11)]);
var inst_35437 = cljs.core.empty_QMARK_(inst_35390);
var inst_35438 = (inst_35394.cljs$core$IFn$_invoke$arity$1 ? inst_35394.cljs$core$IFn$_invoke$arity$1(inst_35405) : inst_35394.call(null,inst_35405));
var inst_35439 = cljs.core.not(inst_35438);
var inst_35440 = ((inst_35437) && (inst_35439));
var state_35472__$1 = state_35472;
var statearr_35615_37582 = state_35472__$1;
(statearr_35615_37582[(2)] = inst_35440);

(statearr_35615_37582[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (10))){
var inst_35324 = (state_35472[(8)]);
var inst_35352 = (state_35472[(2)]);
var inst_35355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35352,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35352,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35352,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35359 = inst_35324;
var state_35472__$1 = (function (){var statearr_35625 = state_35472;
(statearr_35625[(16)] = inst_35355);

(statearr_35625[(17)] = inst_35356);

(statearr_35625[(18)] = inst_35357);

(statearr_35625[(7)] = inst_35359);

return statearr_35625;
})();
var statearr_35631_37594 = state_35472__$1;
(statearr_35631_37594[(2)] = null);

(statearr_35631_37594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (18))){
var inst_35380 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35636_37596 = state_35472__$1;
(statearr_35636_37596[(2)] = inst_35380);

(statearr_35636_37596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (37))){
var state_35472__$1 = state_35472;
var statearr_35639_37598 = state_35472__$1;
(statearr_35639_37598[(2)] = null);

(statearr_35639_37598[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (8))){
var inst_35324 = (state_35472[(8)]);
var inst_35349 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35324);
var state_35472__$1 = state_35472;
var statearr_35649_37606 = state_35472__$1;
(statearr_35649_37606[(2)] = inst_35349);

(statearr_35649_37606[(1)] = (10));


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
var statearr_35658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35658[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35658[(1)] = (1));

return statearr_35658;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35472){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35472);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35663){if((e35663 instanceof Object)){
var ex__34210__auto__ = e35663;
var statearr_35665_37618 = state_35472;
(statearr_35665_37618[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37621 = state_35472;
state_35472 = G__37621;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35472){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_35674 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_35674[(6)] = c__34271__auto___37437);

return statearr_35674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
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
var G__35734 = arguments.length;
switch (G__35734) {
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
var G__35745 = arguments.length;
switch (G__35745) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35739_SHARP_){
if(cljs.core.truth_((p1__35739_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35739_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35739_SHARP_.call(null,topic)))){
return p1__35739_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35739_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35750 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35751){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35751 = meta35751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35752,meta35751__$1){
var self__ = this;
var _35752__$1 = this;
return (new cljs.core.async.t_cljs$core$async35750(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35751__$1));
}));

(cljs.core.async.t_cljs$core$async35750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35752){
var self__ = this;
var _35752__$1 = this;
return self__.meta35751;
}));

(cljs.core.async.t_cljs$core$async35750.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35750.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35750.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35750.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35750.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35750.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35751","meta35751",-309705692,null)], null);
}));

(cljs.core.async.t_cljs$core$async35750.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35750");

(cljs.core.async.t_cljs$core$async35750.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35750");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35750.
 */
cljs.core.async.__GT_t_cljs$core$async35750 = (function cljs$core$async$__GT_t_cljs$core$async35750(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35751){
return (new cljs.core.async.t_cljs$core$async35750(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35751));
});

}

return (new cljs.core.async.t_cljs$core$async35750(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34271__auto___37710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_35842){
var state_val_35843 = (state_35842[(1)]);
if((state_val_35843 === (7))){
var inst_35838 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35847_37713 = state_35842__$1;
(statearr_35847_37713[(2)] = inst_35838);

(statearr_35847_37713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (20))){
var state_35842__$1 = state_35842;
var statearr_35849_37714 = state_35842__$1;
(statearr_35849_37714[(2)] = null);

(statearr_35849_37714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (1))){
var state_35842__$1 = state_35842;
var statearr_35852_37715 = state_35842__$1;
(statearr_35852_37715[(2)] = null);

(statearr_35852_37715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (24))){
var inst_35818 = (state_35842[(7)]);
var inst_35830 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35818);
var state_35842__$1 = state_35842;
var statearr_35854_37718 = state_35842__$1;
(statearr_35854_37718[(2)] = inst_35830);

(statearr_35854_37718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (4))){
var inst_35768 = (state_35842[(8)]);
var inst_35768__$1 = (state_35842[(2)]);
var inst_35769 = (inst_35768__$1 == null);
var state_35842__$1 = (function (){var statearr_35866 = state_35842;
(statearr_35866[(8)] = inst_35768__$1);

return statearr_35866;
})();
if(cljs.core.truth_(inst_35769)){
var statearr_35868_37721 = state_35842__$1;
(statearr_35868_37721[(1)] = (5));

} else {
var statearr_35869_37722 = state_35842__$1;
(statearr_35869_37722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (15))){
var inst_35812 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35876_37723 = state_35842__$1;
(statearr_35876_37723[(2)] = inst_35812);

(statearr_35876_37723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (21))){
var inst_35835 = (state_35842[(2)]);
var state_35842__$1 = (function (){var statearr_35877 = state_35842;
(statearr_35877[(9)] = inst_35835);

return statearr_35877;
})();
var statearr_35878_37728 = state_35842__$1;
(statearr_35878_37728[(2)] = null);

(statearr_35878_37728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (13))){
var inst_35793 = (state_35842[(10)]);
var inst_35795 = cljs.core.chunked_seq_QMARK_(inst_35793);
var state_35842__$1 = state_35842;
if(inst_35795){
var statearr_35881_37729 = state_35842__$1;
(statearr_35881_37729[(1)] = (16));

} else {
var statearr_35882_37730 = state_35842__$1;
(statearr_35882_37730[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (22))){
var inst_35826 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
if(cljs.core.truth_(inst_35826)){
var statearr_35885_37734 = state_35842__$1;
(statearr_35885_37734[(1)] = (23));

} else {
var statearr_35886_37735 = state_35842__$1;
(statearr_35886_37735[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (6))){
var inst_35818 = (state_35842[(7)]);
var inst_35768 = (state_35842[(8)]);
var inst_35820 = (state_35842[(11)]);
var inst_35818__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35768) : topic_fn.call(null,inst_35768));
var inst_35819 = cljs.core.deref(mults);
var inst_35820__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35819,inst_35818__$1);
var state_35842__$1 = (function (){var statearr_35887 = state_35842;
(statearr_35887[(7)] = inst_35818__$1);

(statearr_35887[(11)] = inst_35820__$1);

return statearr_35887;
})();
if(cljs.core.truth_(inst_35820__$1)){
var statearr_35889_37737 = state_35842__$1;
(statearr_35889_37737[(1)] = (19));

} else {
var statearr_35890_37738 = state_35842__$1;
(statearr_35890_37738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (25))){
var inst_35832 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35891_37740 = state_35842__$1;
(statearr_35891_37740[(2)] = inst_35832);

(statearr_35891_37740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (17))){
var inst_35793 = (state_35842[(10)]);
var inst_35803 = cljs.core.first(inst_35793);
var inst_35804 = cljs.core.async.muxch_STAR_(inst_35803);
var inst_35805 = cljs.core.async.close_BANG_(inst_35804);
var inst_35806 = cljs.core.next(inst_35793);
var inst_35778 = inst_35806;
var inst_35779 = null;
var inst_35780 = (0);
var inst_35781 = (0);
var state_35842__$1 = (function (){var statearr_35895 = state_35842;
(statearr_35895[(12)] = inst_35805);

(statearr_35895[(13)] = inst_35781);

(statearr_35895[(14)] = inst_35778);

(statearr_35895[(15)] = inst_35779);

(statearr_35895[(16)] = inst_35780);

return statearr_35895;
})();
var statearr_35896_37745 = state_35842__$1;
(statearr_35896_37745[(2)] = null);

(statearr_35896_37745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (3))){
var inst_35840 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35842__$1,inst_35840);
} else {
if((state_val_35843 === (12))){
var inst_35814 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35899_37751 = state_35842__$1;
(statearr_35899_37751[(2)] = inst_35814);

(statearr_35899_37751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (2))){
var state_35842__$1 = state_35842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35842__$1,(4),ch);
} else {
if((state_val_35843 === (23))){
var state_35842__$1 = state_35842;
var statearr_35902_37756 = state_35842__$1;
(statearr_35902_37756[(2)] = null);

(statearr_35902_37756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (19))){
var inst_35768 = (state_35842[(8)]);
var inst_35820 = (state_35842[(11)]);
var inst_35824 = cljs.core.async.muxch_STAR_(inst_35820);
var state_35842__$1 = state_35842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35842__$1,(22),inst_35824,inst_35768);
} else {
if((state_val_35843 === (11))){
var inst_35778 = (state_35842[(14)]);
var inst_35793 = (state_35842[(10)]);
var inst_35793__$1 = cljs.core.seq(inst_35778);
var state_35842__$1 = (function (){var statearr_35904 = state_35842;
(statearr_35904[(10)] = inst_35793__$1);

return statearr_35904;
})();
if(inst_35793__$1){
var statearr_35905_37761 = state_35842__$1;
(statearr_35905_37761[(1)] = (13));

} else {
var statearr_35906_37762 = state_35842__$1;
(statearr_35906_37762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (9))){
var inst_35816 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35907_37764 = state_35842__$1;
(statearr_35907_37764[(2)] = inst_35816);

(statearr_35907_37764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (5))){
var inst_35775 = cljs.core.deref(mults);
var inst_35776 = cljs.core.vals(inst_35775);
var inst_35777 = cljs.core.seq(inst_35776);
var inst_35778 = inst_35777;
var inst_35779 = null;
var inst_35780 = (0);
var inst_35781 = (0);
var state_35842__$1 = (function (){var statearr_35911 = state_35842;
(statearr_35911[(13)] = inst_35781);

(statearr_35911[(14)] = inst_35778);

(statearr_35911[(15)] = inst_35779);

(statearr_35911[(16)] = inst_35780);

return statearr_35911;
})();
var statearr_35914_37775 = state_35842__$1;
(statearr_35914_37775[(2)] = null);

(statearr_35914_37775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (14))){
var state_35842__$1 = state_35842;
var statearr_35919_37777 = state_35842__$1;
(statearr_35919_37777[(2)] = null);

(statearr_35919_37777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (16))){
var inst_35793 = (state_35842[(10)]);
var inst_35797 = cljs.core.chunk_first(inst_35793);
var inst_35798 = cljs.core.chunk_rest(inst_35793);
var inst_35799 = cljs.core.count(inst_35797);
var inst_35778 = inst_35798;
var inst_35779 = inst_35797;
var inst_35780 = inst_35799;
var inst_35781 = (0);
var state_35842__$1 = (function (){var statearr_35923 = state_35842;
(statearr_35923[(13)] = inst_35781);

(statearr_35923[(14)] = inst_35778);

(statearr_35923[(15)] = inst_35779);

(statearr_35923[(16)] = inst_35780);

return statearr_35923;
})();
var statearr_35924_37785 = state_35842__$1;
(statearr_35924_37785[(2)] = null);

(statearr_35924_37785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (10))){
var inst_35781 = (state_35842[(13)]);
var inst_35778 = (state_35842[(14)]);
var inst_35779 = (state_35842[(15)]);
var inst_35780 = (state_35842[(16)]);
var inst_35787 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35779,inst_35781);
var inst_35788 = cljs.core.async.muxch_STAR_(inst_35787);
var inst_35789 = cljs.core.async.close_BANG_(inst_35788);
var inst_35790 = (inst_35781 + (1));
var tmp35916 = inst_35778;
var tmp35917 = inst_35779;
var tmp35918 = inst_35780;
var inst_35778__$1 = tmp35916;
var inst_35779__$1 = tmp35917;
var inst_35780__$1 = tmp35918;
var inst_35781__$1 = inst_35790;
var state_35842__$1 = (function (){var statearr_35930 = state_35842;
(statearr_35930[(13)] = inst_35781__$1);

(statearr_35930[(14)] = inst_35778__$1);

(statearr_35930[(15)] = inst_35779__$1);

(statearr_35930[(16)] = inst_35780__$1);

(statearr_35930[(17)] = inst_35789);

return statearr_35930;
})();
var statearr_35933_37795 = state_35842__$1;
(statearr_35933_37795[(2)] = null);

(statearr_35933_37795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (18))){
var inst_35809 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35936_37798 = state_35842__$1;
(statearr_35936_37798[(2)] = inst_35809);

(statearr_35936_37798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (8))){
var inst_35781 = (state_35842[(13)]);
var inst_35780 = (state_35842[(16)]);
var inst_35783 = (inst_35781 < inst_35780);
var inst_35784 = inst_35783;
var state_35842__$1 = state_35842;
if(cljs.core.truth_(inst_35784)){
var statearr_35937_37805 = state_35842__$1;
(statearr_35937_37805[(1)] = (10));

} else {
var statearr_35938_37807 = state_35842__$1;
(statearr_35938_37807[(1)] = (11));

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
var statearr_35942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35942[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35942[(1)] = (1));

return statearr_35942;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35842){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35842);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35945){if((e35945 instanceof Object)){
var ex__34210__auto__ = e35945;
var statearr_35947_37810 = state_35842;
(statearr_35947_37810[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37816 = state_35842;
state_35842 = G__37816;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_35949 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_35949[(6)] = c__34271__auto___37710);

return statearr_35949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
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
var G__35956 = arguments.length;
switch (G__35956) {
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
var G__35969 = arguments.length;
switch (G__35969) {
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
var G__35976 = arguments.length;
switch (G__35976) {
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
var c__34271__auto___37847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_36030){
var state_val_36031 = (state_36030[(1)]);
if((state_val_36031 === (7))){
var state_36030__$1 = state_36030;
var statearr_36036_37849 = state_36030__$1;
(statearr_36036_37849[(2)] = null);

(statearr_36036_37849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (1))){
var state_36030__$1 = state_36030;
var statearr_36037_37853 = state_36030__$1;
(statearr_36037_37853[(2)] = null);

(statearr_36037_37853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (4))){
var inst_35991 = (state_36030[(7)]);
var inst_35993 = (inst_35991 < cnt);
var state_36030__$1 = state_36030;
if(cljs.core.truth_(inst_35993)){
var statearr_36038_37856 = state_36030__$1;
(statearr_36038_37856[(1)] = (6));

} else {
var statearr_36041_37859 = state_36030__$1;
(statearr_36041_37859[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (15))){
var inst_36026 = (state_36030[(2)]);
var state_36030__$1 = state_36030;
var statearr_36043_37861 = state_36030__$1;
(statearr_36043_37861[(2)] = inst_36026);

(statearr_36043_37861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (13))){
var inst_36019 = cljs.core.async.close_BANG_(out);
var state_36030__$1 = state_36030;
var statearr_36046_37866 = state_36030__$1;
(statearr_36046_37866[(2)] = inst_36019);

(statearr_36046_37866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (6))){
var state_36030__$1 = state_36030;
var statearr_36049_37867 = state_36030__$1;
(statearr_36049_37867[(2)] = null);

(statearr_36049_37867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (3))){
var inst_36028 = (state_36030[(2)]);
var state_36030__$1 = state_36030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36030__$1,inst_36028);
} else {
if((state_val_36031 === (12))){
var inst_36016 = (state_36030[(8)]);
var inst_36016__$1 = (state_36030[(2)]);
var inst_36017 = cljs.core.some(cljs.core.nil_QMARK_,inst_36016__$1);
var state_36030__$1 = (function (){var statearr_36059 = state_36030;
(statearr_36059[(8)] = inst_36016__$1);

return statearr_36059;
})();
if(cljs.core.truth_(inst_36017)){
var statearr_36060_37875 = state_36030__$1;
(statearr_36060_37875[(1)] = (13));

} else {
var statearr_36061_37876 = state_36030__$1;
(statearr_36061_37876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (2))){
var inst_35989 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35991 = (0);
var state_36030__$1 = (function (){var statearr_36062 = state_36030;
(statearr_36062[(9)] = inst_35989);

(statearr_36062[(7)] = inst_35991);

return statearr_36062;
})();
var statearr_36063_37881 = state_36030__$1;
(statearr_36063_37881[(2)] = null);

(statearr_36063_37881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (11))){
var inst_35991 = (state_36030[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36030,(10),Object,null,(9));
var inst_36002 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35991) : chs__$1.call(null,inst_35991));
var inst_36003 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35991) : done.call(null,inst_35991));
var inst_36004 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36002,inst_36003);
var state_36030__$1 = state_36030;
var statearr_36066_37886 = state_36030__$1;
(statearr_36066_37886[(2)] = inst_36004);


cljs.core.async.impl.ioc_helpers.process_exception(state_36030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (9))){
var inst_35991 = (state_36030[(7)]);
var inst_36006 = (state_36030[(2)]);
var inst_36008 = (inst_35991 + (1));
var inst_35991__$1 = inst_36008;
var state_36030__$1 = (function (){var statearr_36068 = state_36030;
(statearr_36068[(10)] = inst_36006);

(statearr_36068[(7)] = inst_35991__$1);

return statearr_36068;
})();
var statearr_36069_37891 = state_36030__$1;
(statearr_36069_37891[(2)] = null);

(statearr_36069_37891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (5))){
var inst_36014 = (state_36030[(2)]);
var state_36030__$1 = (function (){var statearr_36072 = state_36030;
(statearr_36072[(11)] = inst_36014);

return statearr_36072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36030__$1,(12),dchan);
} else {
if((state_val_36031 === (14))){
var inst_36016 = (state_36030[(8)]);
var inst_36021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36016);
var state_36030__$1 = state_36030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36030__$1,(16),out,inst_36021);
} else {
if((state_val_36031 === (16))){
var inst_36023 = (state_36030[(2)]);
var state_36030__$1 = (function (){var statearr_36074 = state_36030;
(statearr_36074[(12)] = inst_36023);

return statearr_36074;
})();
var statearr_36075_37900 = state_36030__$1;
(statearr_36075_37900[(2)] = null);

(statearr_36075_37900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (10))){
var inst_35995 = (state_36030[(2)]);
var inst_35996 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36030__$1 = (function (){var statearr_36078 = state_36030;
(statearr_36078[(13)] = inst_35995);

return statearr_36078;
})();
var statearr_36080_37905 = state_36030__$1;
(statearr_36080_37905[(2)] = inst_35996);


cljs.core.async.impl.ioc_helpers.process_exception(state_36030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (8))){
var inst_36012 = (state_36030[(2)]);
var state_36030__$1 = state_36030;
var statearr_36081_37907 = state_36030__$1;
(statearr_36081_37907[(2)] = inst_36012);

(statearr_36081_37907[(1)] = (5));


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
var statearr_36082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36082[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36082[(1)] = (1));

return statearr_36082;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36030){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36030);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36086){if((e36086 instanceof Object)){
var ex__34210__auto__ = e36086;
var statearr_36089_37912 = state_36030;
(statearr_36089_37912[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37913 = state_36030;
state_36030 = G__37913;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_36092 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_36092[(6)] = c__34271__auto___37847);

return statearr_36092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
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
var G__36099 = arguments.length;
switch (G__36099) {
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
var c__34271__auto___37922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_36131){
var state_val_36132 = (state_36131[(1)]);
if((state_val_36132 === (7))){
var inst_36110 = (state_36131[(7)]);
var inst_36111 = (state_36131[(8)]);
var inst_36110__$1 = (state_36131[(2)]);
var inst_36111__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36110__$1,(0),null);
var inst_36112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36110__$1,(1),null);
var inst_36113 = (inst_36111__$1 == null);
var state_36131__$1 = (function (){var statearr_36133 = state_36131;
(statearr_36133[(9)] = inst_36112);

(statearr_36133[(7)] = inst_36110__$1);

(statearr_36133[(8)] = inst_36111__$1);

return statearr_36133;
})();
if(cljs.core.truth_(inst_36113)){
var statearr_36134_37930 = state_36131__$1;
(statearr_36134_37930[(1)] = (8));

} else {
var statearr_36135_37932 = state_36131__$1;
(statearr_36135_37932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (1))){
var inst_36100 = cljs.core.vec(chs);
var inst_36101 = inst_36100;
var state_36131__$1 = (function (){var statearr_36136 = state_36131;
(statearr_36136[(10)] = inst_36101);

return statearr_36136;
})();
var statearr_36137_37933 = state_36131__$1;
(statearr_36137_37933[(2)] = null);

(statearr_36137_37933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (4))){
var inst_36101 = (state_36131[(10)]);
var state_36131__$1 = state_36131;
return cljs.core.async.ioc_alts_BANG_(state_36131__$1,(7),inst_36101);
} else {
if((state_val_36132 === (6))){
var inst_36127 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36141_37937 = state_36131__$1;
(statearr_36141_37937[(2)] = inst_36127);

(statearr_36141_37937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (3))){
var inst_36129 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36131__$1,inst_36129);
} else {
if((state_val_36132 === (2))){
var inst_36101 = (state_36131[(10)]);
var inst_36103 = cljs.core.count(inst_36101);
var inst_36104 = (inst_36103 > (0));
var state_36131__$1 = state_36131;
if(cljs.core.truth_(inst_36104)){
var statearr_36145_37945 = state_36131__$1;
(statearr_36145_37945[(1)] = (4));

} else {
var statearr_36148_37948 = state_36131__$1;
(statearr_36148_37948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (11))){
var inst_36101 = (state_36131[(10)]);
var inst_36120 = (state_36131[(2)]);
var tmp36143 = inst_36101;
var inst_36101__$1 = tmp36143;
var state_36131__$1 = (function (){var statearr_36150 = state_36131;
(statearr_36150[(10)] = inst_36101__$1);

(statearr_36150[(11)] = inst_36120);

return statearr_36150;
})();
var statearr_36152_37954 = state_36131__$1;
(statearr_36152_37954[(2)] = null);

(statearr_36152_37954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (9))){
var inst_36111 = (state_36131[(8)]);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36131__$1,(11),out,inst_36111);
} else {
if((state_val_36132 === (5))){
var inst_36125 = cljs.core.async.close_BANG_(out);
var state_36131__$1 = state_36131;
var statearr_36156_37958 = state_36131__$1;
(statearr_36156_37958[(2)] = inst_36125);

(statearr_36156_37958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (10))){
var inst_36123 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36157_37962 = state_36131__$1;
(statearr_36157_37962[(2)] = inst_36123);

(statearr_36157_37962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (8))){
var inst_36112 = (state_36131[(9)]);
var inst_36101 = (state_36131[(10)]);
var inst_36110 = (state_36131[(7)]);
var inst_36111 = (state_36131[(8)]);
var inst_36115 = (function (){var cs = inst_36101;
var vec__36106 = inst_36110;
var v = inst_36111;
var c = inst_36112;
return (function (p1__36097_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36097_SHARP_);
});
})();
var inst_36116 = cljs.core.filterv(inst_36115,inst_36101);
var inst_36101__$1 = inst_36116;
var state_36131__$1 = (function (){var statearr_36158 = state_36131;
(statearr_36158[(10)] = inst_36101__$1);

return statearr_36158;
})();
var statearr_36161_37968 = state_36131__$1;
(statearr_36161_37968[(2)] = null);

(statearr_36161_37968[(1)] = (2));


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
var statearr_36164 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36164[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36164[(1)] = (1));

return statearr_36164;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36131){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36131);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36167){if((e36167 instanceof Object)){
var ex__34210__auto__ = e36167;
var statearr_36168_37970 = state_36131;
(statearr_36168_37970[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37974 = state_36131;
state_36131 = G__37974;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_36169 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_36169[(6)] = c__34271__auto___37922);

return statearr_36169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
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
var G__36175 = arguments.length;
switch (G__36175) {
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
var c__34271__auto___37984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_36199){
var state_val_36200 = (state_36199[(1)]);
if((state_val_36200 === (7))){
var inst_36181 = (state_36199[(7)]);
var inst_36181__$1 = (state_36199[(2)]);
var inst_36182 = (inst_36181__$1 == null);
var inst_36183 = cljs.core.not(inst_36182);
var state_36199__$1 = (function (){var statearr_36201 = state_36199;
(statearr_36201[(7)] = inst_36181__$1);

return statearr_36201;
})();
if(inst_36183){
var statearr_36202_37986 = state_36199__$1;
(statearr_36202_37986[(1)] = (8));

} else {
var statearr_36203_37987 = state_36199__$1;
(statearr_36203_37987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (1))){
var inst_36176 = (0);
var state_36199__$1 = (function (){var statearr_36204 = state_36199;
(statearr_36204[(8)] = inst_36176);

return statearr_36204;
})();
var statearr_36205_37991 = state_36199__$1;
(statearr_36205_37991[(2)] = null);

(statearr_36205_37991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (4))){
var state_36199__$1 = state_36199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36199__$1,(7),ch);
} else {
if((state_val_36200 === (6))){
var inst_36194 = (state_36199[(2)]);
var state_36199__$1 = state_36199;
var statearr_36206_38006 = state_36199__$1;
(statearr_36206_38006[(2)] = inst_36194);

(statearr_36206_38006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (3))){
var inst_36196 = (state_36199[(2)]);
var inst_36197 = cljs.core.async.close_BANG_(out);
var state_36199__$1 = (function (){var statearr_36207 = state_36199;
(statearr_36207[(9)] = inst_36196);

return statearr_36207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36199__$1,inst_36197);
} else {
if((state_val_36200 === (2))){
var inst_36176 = (state_36199[(8)]);
var inst_36178 = (inst_36176 < n);
var state_36199__$1 = state_36199;
if(cljs.core.truth_(inst_36178)){
var statearr_36208_38007 = state_36199__$1;
(statearr_36208_38007[(1)] = (4));

} else {
var statearr_36209_38008 = state_36199__$1;
(statearr_36209_38008[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (11))){
var inst_36176 = (state_36199[(8)]);
var inst_36186 = (state_36199[(2)]);
var inst_36187 = (inst_36176 + (1));
var inst_36176__$1 = inst_36187;
var state_36199__$1 = (function (){var statearr_36211 = state_36199;
(statearr_36211[(8)] = inst_36176__$1);

(statearr_36211[(10)] = inst_36186);

return statearr_36211;
})();
var statearr_36212_38009 = state_36199__$1;
(statearr_36212_38009[(2)] = null);

(statearr_36212_38009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (9))){
var state_36199__$1 = state_36199;
var statearr_36213_38010 = state_36199__$1;
(statearr_36213_38010[(2)] = null);

(statearr_36213_38010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (5))){
var state_36199__$1 = state_36199;
var statearr_36215_38013 = state_36199__$1;
(statearr_36215_38013[(2)] = null);

(statearr_36215_38013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (10))){
var inst_36191 = (state_36199[(2)]);
var state_36199__$1 = state_36199;
var statearr_36217_38016 = state_36199__$1;
(statearr_36217_38016[(2)] = inst_36191);

(statearr_36217_38016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (8))){
var inst_36181 = (state_36199[(7)]);
var state_36199__$1 = state_36199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36199__$1,(11),out,inst_36181);
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
var statearr_36221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36221[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36221[(1)] = (1));

return statearr_36221;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36199){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36199);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36225){if((e36225 instanceof Object)){
var ex__34210__auto__ = e36225;
var statearr_36226_38020 = state_36199;
(statearr_36226_38020[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38021 = state_36199;
state_36199 = G__38021;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_36228 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_36228[(6)] = c__34271__auto___37984);

return statearr_36228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36231 = (function (f,ch,meta36232){
this.f = f;
this.ch = ch;
this.meta36232 = meta36232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36233,meta36232__$1){
var self__ = this;
var _36233__$1 = this;
return (new cljs.core.async.t_cljs$core$async36231(self__.f,self__.ch,meta36232__$1));
}));

(cljs.core.async.t_cljs$core$async36231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36233){
var self__ = this;
var _36233__$1 = this;
return self__.meta36232;
}));

(cljs.core.async.t_cljs$core$async36231.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36231.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36231.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36231.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36231.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36242 = (function (f,ch,meta36232,_,fn1,meta36243){
this.f = f;
this.ch = ch;
this.meta36232 = meta36232;
this._ = _;
this.fn1 = fn1;
this.meta36243 = meta36243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36244,meta36243__$1){
var self__ = this;
var _36244__$1 = this;
return (new cljs.core.async.t_cljs$core$async36242(self__.f,self__.ch,self__.meta36232,self__._,self__.fn1,meta36243__$1));
}));

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36244){
var self__ = this;
var _36244__$1 = this;
return self__.meta36243;
}));

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36229_SHARP_){
var G__36249 = (((p1__36229_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36229_SHARP_) : self__.f.call(null,p1__36229_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36249) : f1.call(null,G__36249));
});
}));

(cljs.core.async.t_cljs$core$async36242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36232","meta36232",169111747,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36231","cljs.core.async/t_cljs$core$async36231",-481478416,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36243","meta36243",-1189315507,null)], null);
}));

(cljs.core.async.t_cljs$core$async36242.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36242");

(cljs.core.async.t_cljs$core$async36242.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36242");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36242.
 */
cljs.core.async.__GT_t_cljs$core$async36242 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36242(f__$1,ch__$1,meta36232__$1,___$2,fn1__$1,meta36243){
return (new cljs.core.async.t_cljs$core$async36242(f__$1,ch__$1,meta36232__$1,___$2,fn1__$1,meta36243));
});

}

return (new cljs.core.async.t_cljs$core$async36242(self__.f,self__.ch,self__.meta36232,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36250 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36250) : self__.f.call(null,G__36250));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36231.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36231.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36232","meta36232",169111747,null)], null);
}));

(cljs.core.async.t_cljs$core$async36231.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36231");

(cljs.core.async.t_cljs$core$async36231.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36231");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36231.
 */
cljs.core.async.__GT_t_cljs$core$async36231 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36231(f__$1,ch__$1,meta36232){
return (new cljs.core.async.t_cljs$core$async36231(f__$1,ch__$1,meta36232));
});

}

return (new cljs.core.async.t_cljs$core$async36231(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36255 = (function (f,ch,meta36256){
this.f = f;
this.ch = ch;
this.meta36256 = meta36256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36257,meta36256__$1){
var self__ = this;
var _36257__$1 = this;
return (new cljs.core.async.t_cljs$core$async36255(self__.f,self__.ch,meta36256__$1));
}));

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36257){
var self__ = this;
var _36257__$1 = this;
return self__.meta36256;
}));

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36256","meta36256",-787218976,null)], null);
}));

(cljs.core.async.t_cljs$core$async36255.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36255");

(cljs.core.async.t_cljs$core$async36255.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36255");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36255.
 */
cljs.core.async.__GT_t_cljs$core$async36255 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36255(f__$1,ch__$1,meta36256){
return (new cljs.core.async.t_cljs$core$async36255(f__$1,ch__$1,meta36256));
});

}

return (new cljs.core.async.t_cljs$core$async36255(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36268 = (function (p,ch,meta36269){
this.p = p;
this.ch = ch;
this.meta36269 = meta36269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36270,meta36269__$1){
var self__ = this;
var _36270__$1 = this;
return (new cljs.core.async.t_cljs$core$async36268(self__.p,self__.ch,meta36269__$1));
}));

(cljs.core.async.t_cljs$core$async36268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36270){
var self__ = this;
var _36270__$1 = this;
return self__.meta36269;
}));

(cljs.core.async.t_cljs$core$async36268.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36268.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36268.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36268.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36269","meta36269",673416404,null)], null);
}));

(cljs.core.async.t_cljs$core$async36268.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36268");

(cljs.core.async.t_cljs$core$async36268.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36268");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36268.
 */
cljs.core.async.__GT_t_cljs$core$async36268 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36268(p__$1,ch__$1,meta36269){
return (new cljs.core.async.t_cljs$core$async36268(p__$1,ch__$1,meta36269));
});

}

return (new cljs.core.async.t_cljs$core$async36268(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36284 = arguments.length;
switch (G__36284) {
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
var c__34271__auto___38052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_36317){
var state_val_36318 = (state_36317[(1)]);
if((state_val_36318 === (7))){
var inst_36313 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
var statearr_36320_38053 = state_36317__$1;
(statearr_36320_38053[(2)] = inst_36313);

(statearr_36320_38053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (1))){
var state_36317__$1 = state_36317;
var statearr_36322_38054 = state_36317__$1;
(statearr_36322_38054[(2)] = null);

(statearr_36322_38054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (4))){
var inst_36298 = (state_36317[(7)]);
var inst_36298__$1 = (state_36317[(2)]);
var inst_36299 = (inst_36298__$1 == null);
var state_36317__$1 = (function (){var statearr_36324 = state_36317;
(statearr_36324[(7)] = inst_36298__$1);

return statearr_36324;
})();
if(cljs.core.truth_(inst_36299)){
var statearr_36326_38058 = state_36317__$1;
(statearr_36326_38058[(1)] = (5));

} else {
var statearr_36327_38059 = state_36317__$1;
(statearr_36327_38059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (6))){
var inst_36298 = (state_36317[(7)]);
var inst_36303 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36298) : p.call(null,inst_36298));
var state_36317__$1 = state_36317;
if(cljs.core.truth_(inst_36303)){
var statearr_36328_38060 = state_36317__$1;
(statearr_36328_38060[(1)] = (8));

} else {
var statearr_36329_38061 = state_36317__$1;
(statearr_36329_38061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (3))){
var inst_36315 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36317__$1,inst_36315);
} else {
if((state_val_36318 === (2))){
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36317__$1,(4),ch);
} else {
if((state_val_36318 === (11))){
var inst_36307 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
var statearr_36332_38065 = state_36317__$1;
(statearr_36332_38065[(2)] = inst_36307);

(statearr_36332_38065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (9))){
var state_36317__$1 = state_36317;
var statearr_36333_38066 = state_36317__$1;
(statearr_36333_38066[(2)] = null);

(statearr_36333_38066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (5))){
var inst_36301 = cljs.core.async.close_BANG_(out);
var state_36317__$1 = state_36317;
var statearr_36336_38067 = state_36317__$1;
(statearr_36336_38067[(2)] = inst_36301);

(statearr_36336_38067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (10))){
var inst_36310 = (state_36317[(2)]);
var state_36317__$1 = (function (){var statearr_36337 = state_36317;
(statearr_36337[(8)] = inst_36310);

return statearr_36337;
})();
var statearr_36338_38069 = state_36317__$1;
(statearr_36338_38069[(2)] = null);

(statearr_36338_38069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (8))){
var inst_36298 = (state_36317[(7)]);
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36317__$1,(11),out,inst_36298);
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
var statearr_36339 = [null,null,null,null,null,null,null,null,null];
(statearr_36339[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36339[(1)] = (1));

return statearr_36339;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36317){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36317);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36340){if((e36340 instanceof Object)){
var ex__34210__auto__ = e36340;
var statearr_36341_38072 = state_36317;
(statearr_36341_38072[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36340;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38075 = state_36317;
state_36317 = G__38075;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_36343 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_36343[(6)] = c__34271__auto___38052);

return statearr_36343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36348 = arguments.length;
switch (G__36348) {
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
var c__34271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_36421){
var state_val_36422 = (state_36421[(1)]);
if((state_val_36422 === (7))){
var inst_36417 = (state_36421[(2)]);
var state_36421__$1 = state_36421;
var statearr_36429_38081 = state_36421__$1;
(statearr_36429_38081[(2)] = inst_36417);

(statearr_36429_38081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (20))){
var inst_36387 = (state_36421[(7)]);
var inst_36398 = (state_36421[(2)]);
var inst_36399 = cljs.core.next(inst_36387);
var inst_36373 = inst_36399;
var inst_36374 = null;
var inst_36375 = (0);
var inst_36376 = (0);
var state_36421__$1 = (function (){var statearr_36430 = state_36421;
(statearr_36430[(8)] = inst_36375);

(statearr_36430[(9)] = inst_36373);

(statearr_36430[(10)] = inst_36374);

(statearr_36430[(11)] = inst_36398);

(statearr_36430[(12)] = inst_36376);

return statearr_36430;
})();
var statearr_36433_38085 = state_36421__$1;
(statearr_36433_38085[(2)] = null);

(statearr_36433_38085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (1))){
var state_36421__$1 = state_36421;
var statearr_36436_38086 = state_36421__$1;
(statearr_36436_38086[(2)] = null);

(statearr_36436_38086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (4))){
var inst_36361 = (state_36421[(13)]);
var inst_36361__$1 = (state_36421[(2)]);
var inst_36363 = (inst_36361__$1 == null);
var state_36421__$1 = (function (){var statearr_36437 = state_36421;
(statearr_36437[(13)] = inst_36361__$1);

return statearr_36437;
})();
if(cljs.core.truth_(inst_36363)){
var statearr_36438_38088 = state_36421__$1;
(statearr_36438_38088[(1)] = (5));

} else {
var statearr_36439_38089 = state_36421__$1;
(statearr_36439_38089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (15))){
var state_36421__$1 = state_36421;
var statearr_36448_38092 = state_36421__$1;
(statearr_36448_38092[(2)] = null);

(statearr_36448_38092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (21))){
var state_36421__$1 = state_36421;
var statearr_36452_38093 = state_36421__$1;
(statearr_36452_38093[(2)] = null);

(statearr_36452_38093[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (13))){
var inst_36375 = (state_36421[(8)]);
var inst_36373 = (state_36421[(9)]);
var inst_36374 = (state_36421[(10)]);
var inst_36376 = (state_36421[(12)]);
var inst_36383 = (state_36421[(2)]);
var inst_36384 = (inst_36376 + (1));
var tmp36441 = inst_36375;
var tmp36442 = inst_36373;
var tmp36443 = inst_36374;
var inst_36373__$1 = tmp36442;
var inst_36374__$1 = tmp36443;
var inst_36375__$1 = tmp36441;
var inst_36376__$1 = inst_36384;
var state_36421__$1 = (function (){var statearr_36454 = state_36421;
(statearr_36454[(8)] = inst_36375__$1);

(statearr_36454[(9)] = inst_36373__$1);

(statearr_36454[(10)] = inst_36374__$1);

(statearr_36454[(12)] = inst_36376__$1);

(statearr_36454[(14)] = inst_36383);

return statearr_36454;
})();
var statearr_36456_38097 = state_36421__$1;
(statearr_36456_38097[(2)] = null);

(statearr_36456_38097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (22))){
var state_36421__$1 = state_36421;
var statearr_36458_38098 = state_36421__$1;
(statearr_36458_38098[(2)] = null);

(statearr_36458_38098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (6))){
var inst_36361 = (state_36421[(13)]);
var inst_36371 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36361) : f.call(null,inst_36361));
var inst_36372 = cljs.core.seq(inst_36371);
var inst_36373 = inst_36372;
var inst_36374 = null;
var inst_36375 = (0);
var inst_36376 = (0);
var state_36421__$1 = (function (){var statearr_36460 = state_36421;
(statearr_36460[(8)] = inst_36375);

(statearr_36460[(9)] = inst_36373);

(statearr_36460[(10)] = inst_36374);

(statearr_36460[(12)] = inst_36376);

return statearr_36460;
})();
var statearr_36462_38102 = state_36421__$1;
(statearr_36462_38102[(2)] = null);

(statearr_36462_38102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (17))){
var inst_36387 = (state_36421[(7)]);
var inst_36391 = cljs.core.chunk_first(inst_36387);
var inst_36392 = cljs.core.chunk_rest(inst_36387);
var inst_36393 = cljs.core.count(inst_36391);
var inst_36373 = inst_36392;
var inst_36374 = inst_36391;
var inst_36375 = inst_36393;
var inst_36376 = (0);
var state_36421__$1 = (function (){var statearr_36464 = state_36421;
(statearr_36464[(8)] = inst_36375);

(statearr_36464[(9)] = inst_36373);

(statearr_36464[(10)] = inst_36374);

(statearr_36464[(12)] = inst_36376);

return statearr_36464;
})();
var statearr_36466_38104 = state_36421__$1;
(statearr_36466_38104[(2)] = null);

(statearr_36466_38104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (3))){
var inst_36419 = (state_36421[(2)]);
var state_36421__$1 = state_36421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36421__$1,inst_36419);
} else {
if((state_val_36422 === (12))){
var inst_36407 = (state_36421[(2)]);
var state_36421__$1 = state_36421;
var statearr_36467_38107 = state_36421__$1;
(statearr_36467_38107[(2)] = inst_36407);

(statearr_36467_38107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (2))){
var state_36421__$1 = state_36421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36421__$1,(4),in$);
} else {
if((state_val_36422 === (23))){
var inst_36415 = (state_36421[(2)]);
var state_36421__$1 = state_36421;
var statearr_36470_38109 = state_36421__$1;
(statearr_36470_38109[(2)] = inst_36415);

(statearr_36470_38109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (19))){
var inst_36402 = (state_36421[(2)]);
var state_36421__$1 = state_36421;
var statearr_36471_38111 = state_36421__$1;
(statearr_36471_38111[(2)] = inst_36402);

(statearr_36471_38111[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (11))){
var inst_36373 = (state_36421[(9)]);
var inst_36387 = (state_36421[(7)]);
var inst_36387__$1 = cljs.core.seq(inst_36373);
var state_36421__$1 = (function (){var statearr_36474 = state_36421;
(statearr_36474[(7)] = inst_36387__$1);

return statearr_36474;
})();
if(inst_36387__$1){
var statearr_36475_38113 = state_36421__$1;
(statearr_36475_38113[(1)] = (14));

} else {
var statearr_36476_38114 = state_36421__$1;
(statearr_36476_38114[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (9))){
var inst_36409 = (state_36421[(2)]);
var inst_36410 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36421__$1 = (function (){var statearr_36477 = state_36421;
(statearr_36477[(15)] = inst_36409);

return statearr_36477;
})();
if(cljs.core.truth_(inst_36410)){
var statearr_36483_38117 = state_36421__$1;
(statearr_36483_38117[(1)] = (21));

} else {
var statearr_36486_38119 = state_36421__$1;
(statearr_36486_38119[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (5))){
var inst_36365 = cljs.core.async.close_BANG_(out);
var state_36421__$1 = state_36421;
var statearr_36487_38120 = state_36421__$1;
(statearr_36487_38120[(2)] = inst_36365);

(statearr_36487_38120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (14))){
var inst_36387 = (state_36421[(7)]);
var inst_36389 = cljs.core.chunked_seq_QMARK_(inst_36387);
var state_36421__$1 = state_36421;
if(inst_36389){
var statearr_36489_38121 = state_36421__$1;
(statearr_36489_38121[(1)] = (17));

} else {
var statearr_36490_38122 = state_36421__$1;
(statearr_36490_38122[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (16))){
var inst_36405 = (state_36421[(2)]);
var state_36421__$1 = state_36421;
var statearr_36492_38124 = state_36421__$1;
(statearr_36492_38124[(2)] = inst_36405);

(statearr_36492_38124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36422 === (10))){
var inst_36374 = (state_36421[(10)]);
var inst_36376 = (state_36421[(12)]);
var inst_36381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36374,inst_36376);
var state_36421__$1 = state_36421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36421__$1,(13),out,inst_36381);
} else {
if((state_val_36422 === (18))){
var inst_36387 = (state_36421[(7)]);
var inst_36396 = cljs.core.first(inst_36387);
var state_36421__$1 = state_36421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36421__$1,(20),out,inst_36396);
} else {
if((state_val_36422 === (8))){
var inst_36375 = (state_36421[(8)]);
var inst_36376 = (state_36421[(12)]);
var inst_36378 = (inst_36376 < inst_36375);
var inst_36379 = inst_36378;
var state_36421__$1 = state_36421;
if(cljs.core.truth_(inst_36379)){
var statearr_36496_38127 = state_36421__$1;
(statearr_36496_38127[(1)] = (10));

} else {
var statearr_36497_38129 = state_36421__$1;
(statearr_36497_38129[(1)] = (11));

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
var statearr_36499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36499[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36499[(1)] = (1));

return statearr_36499;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36421){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36421);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36501){if((e36501 instanceof Object)){
var ex__34210__auto__ = e36501;
var statearr_36502_38132 = state_36421;
(statearr_36502_38132[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38133 = state_36421;
state_36421 = G__38133;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36421){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_36504 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_36504[(6)] = c__34271__auto__);

return statearr_36504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
}));

return c__34271__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36509 = arguments.length;
switch (G__36509) {
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
var G__36515 = arguments.length;
switch (G__36515) {
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
var G__36526 = arguments.length;
switch (G__36526) {
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
var c__34271__auto___38144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_36556){
var state_val_36557 = (state_36556[(1)]);
if((state_val_36557 === (7))){
var inst_36551 = (state_36556[(2)]);
var state_36556__$1 = state_36556;
var statearr_36560_38147 = state_36556__$1;
(statearr_36560_38147[(2)] = inst_36551);

(statearr_36560_38147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (1))){
var inst_36531 = null;
var state_36556__$1 = (function (){var statearr_36566 = state_36556;
(statearr_36566[(7)] = inst_36531);

return statearr_36566;
})();
var statearr_36570_38148 = state_36556__$1;
(statearr_36570_38148[(2)] = null);

(statearr_36570_38148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (4))){
var inst_36534 = (state_36556[(8)]);
var inst_36534__$1 = (state_36556[(2)]);
var inst_36536 = (inst_36534__$1 == null);
var inst_36537 = cljs.core.not(inst_36536);
var state_36556__$1 = (function (){var statearr_36574 = state_36556;
(statearr_36574[(8)] = inst_36534__$1);

return statearr_36574;
})();
if(inst_36537){
var statearr_36575_38149 = state_36556__$1;
(statearr_36575_38149[(1)] = (5));

} else {
var statearr_36576_38150 = state_36556__$1;
(statearr_36576_38150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (6))){
var state_36556__$1 = state_36556;
var statearr_36578_38151 = state_36556__$1;
(statearr_36578_38151[(2)] = null);

(statearr_36578_38151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (3))){
var inst_36553 = (state_36556[(2)]);
var inst_36554 = cljs.core.async.close_BANG_(out);
var state_36556__$1 = (function (){var statearr_36582 = state_36556;
(statearr_36582[(9)] = inst_36553);

return statearr_36582;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36556__$1,inst_36554);
} else {
if((state_val_36557 === (2))){
var state_36556__$1 = state_36556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36556__$1,(4),ch);
} else {
if((state_val_36557 === (11))){
var inst_36534 = (state_36556[(8)]);
var inst_36545 = (state_36556[(2)]);
var inst_36531 = inst_36534;
var state_36556__$1 = (function (){var statearr_36589 = state_36556;
(statearr_36589[(7)] = inst_36531);

(statearr_36589[(10)] = inst_36545);

return statearr_36589;
})();
var statearr_36590_38155 = state_36556__$1;
(statearr_36590_38155[(2)] = null);

(statearr_36590_38155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (9))){
var inst_36534 = (state_36556[(8)]);
var state_36556__$1 = state_36556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36556__$1,(11),out,inst_36534);
} else {
if((state_val_36557 === (5))){
var inst_36534 = (state_36556[(8)]);
var inst_36531 = (state_36556[(7)]);
var inst_36540 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36534,inst_36531);
var state_36556__$1 = state_36556;
if(inst_36540){
var statearr_36598_38156 = state_36556__$1;
(statearr_36598_38156[(1)] = (8));

} else {
var statearr_36600_38157 = state_36556__$1;
(statearr_36600_38157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (10))){
var inst_36548 = (state_36556[(2)]);
var state_36556__$1 = state_36556;
var statearr_36603_38159 = state_36556__$1;
(statearr_36603_38159[(2)] = inst_36548);

(statearr_36603_38159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36557 === (8))){
var inst_36531 = (state_36556[(7)]);
var tmp36592 = inst_36531;
var inst_36531__$1 = tmp36592;
var state_36556__$1 = (function (){var statearr_36605 = state_36556;
(statearr_36605[(7)] = inst_36531__$1);

return statearr_36605;
})();
var statearr_36606_38161 = state_36556__$1;
(statearr_36606_38161[(2)] = null);

(statearr_36606_38161[(1)] = (2));


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
var statearr_36607 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36607[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36607[(1)] = (1));

return statearr_36607;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36556){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36556);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36610){if((e36610 instanceof Object)){
var ex__34210__auto__ = e36610;
var statearr_36611_38166 = state_36556;
(statearr_36611_38166[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38170 = state_36556;
state_36556 = G__38170;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_36614 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_36614[(6)] = c__34271__auto___38144);

return statearr_36614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36619 = arguments.length;
switch (G__36619) {
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
var c__34271__auto___38175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_36662){
var state_val_36663 = (state_36662[(1)]);
if((state_val_36663 === (7))){
var inst_36658 = (state_36662[(2)]);
var state_36662__$1 = state_36662;
var statearr_36668_38177 = state_36662__$1;
(statearr_36668_38177[(2)] = inst_36658);

(statearr_36668_38177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (1))){
var inst_36624 = (new Array(n));
var inst_36625 = inst_36624;
var inst_36626 = (0);
var state_36662__$1 = (function (){var statearr_36670 = state_36662;
(statearr_36670[(7)] = inst_36625);

(statearr_36670[(8)] = inst_36626);

return statearr_36670;
})();
var statearr_36671_38180 = state_36662__$1;
(statearr_36671_38180[(2)] = null);

(statearr_36671_38180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (4))){
var inst_36630 = (state_36662[(9)]);
var inst_36630__$1 = (state_36662[(2)]);
var inst_36631 = (inst_36630__$1 == null);
var inst_36632 = cljs.core.not(inst_36631);
var state_36662__$1 = (function (){var statearr_36673 = state_36662;
(statearr_36673[(9)] = inst_36630__$1);

return statearr_36673;
})();
if(inst_36632){
var statearr_36674_38181 = state_36662__$1;
(statearr_36674_38181[(1)] = (5));

} else {
var statearr_36675_38182 = state_36662__$1;
(statearr_36675_38182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (15))){
var inst_36652 = (state_36662[(2)]);
var state_36662__$1 = state_36662;
var statearr_36677_38184 = state_36662__$1;
(statearr_36677_38184[(2)] = inst_36652);

(statearr_36677_38184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (13))){
var state_36662__$1 = state_36662;
var statearr_36678_38187 = state_36662__$1;
(statearr_36678_38187[(2)] = null);

(statearr_36678_38187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (6))){
var inst_36626 = (state_36662[(8)]);
var inst_36648 = (inst_36626 > (0));
var state_36662__$1 = state_36662;
if(cljs.core.truth_(inst_36648)){
var statearr_36680_38188 = state_36662__$1;
(statearr_36680_38188[(1)] = (12));

} else {
var statearr_36681_38189 = state_36662__$1;
(statearr_36681_38189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (3))){
var inst_36660 = (state_36662[(2)]);
var state_36662__$1 = state_36662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36662__$1,inst_36660);
} else {
if((state_val_36663 === (12))){
var inst_36625 = (state_36662[(7)]);
var inst_36650 = cljs.core.vec(inst_36625);
var state_36662__$1 = state_36662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36662__$1,(15),out,inst_36650);
} else {
if((state_val_36663 === (2))){
var state_36662__$1 = state_36662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36662__$1,(4),ch);
} else {
if((state_val_36663 === (11))){
var inst_36642 = (state_36662[(2)]);
var inst_36643 = (new Array(n));
var inst_36625 = inst_36643;
var inst_36626 = (0);
var state_36662__$1 = (function (){var statearr_36683 = state_36662;
(statearr_36683[(10)] = inst_36642);

(statearr_36683[(7)] = inst_36625);

(statearr_36683[(8)] = inst_36626);

return statearr_36683;
})();
var statearr_36685_38192 = state_36662__$1;
(statearr_36685_38192[(2)] = null);

(statearr_36685_38192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (9))){
var inst_36625 = (state_36662[(7)]);
var inst_36640 = cljs.core.vec(inst_36625);
var state_36662__$1 = state_36662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36662__$1,(11),out,inst_36640);
} else {
if((state_val_36663 === (5))){
var inst_36635 = (state_36662[(11)]);
var inst_36625 = (state_36662[(7)]);
var inst_36630 = (state_36662[(9)]);
var inst_36626 = (state_36662[(8)]);
var inst_36634 = (inst_36625[inst_36626] = inst_36630);
var inst_36635__$1 = (inst_36626 + (1));
var inst_36636 = (inst_36635__$1 < n);
var state_36662__$1 = (function (){var statearr_36687 = state_36662;
(statearr_36687[(11)] = inst_36635__$1);

(statearr_36687[(12)] = inst_36634);

return statearr_36687;
})();
if(cljs.core.truth_(inst_36636)){
var statearr_36688_38197 = state_36662__$1;
(statearr_36688_38197[(1)] = (8));

} else {
var statearr_36689_38198 = state_36662__$1;
(statearr_36689_38198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (14))){
var inst_36655 = (state_36662[(2)]);
var inst_36656 = cljs.core.async.close_BANG_(out);
var state_36662__$1 = (function (){var statearr_36692 = state_36662;
(statearr_36692[(13)] = inst_36655);

return statearr_36692;
})();
var statearr_36693_38199 = state_36662__$1;
(statearr_36693_38199[(2)] = inst_36656);

(statearr_36693_38199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (10))){
var inst_36646 = (state_36662[(2)]);
var state_36662__$1 = state_36662;
var statearr_36695_38200 = state_36662__$1;
(statearr_36695_38200[(2)] = inst_36646);

(statearr_36695_38200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (8))){
var inst_36635 = (state_36662[(11)]);
var inst_36625 = (state_36662[(7)]);
var tmp36691 = inst_36625;
var inst_36625__$1 = tmp36691;
var inst_36626 = inst_36635;
var state_36662__$1 = (function (){var statearr_36696 = state_36662;
(statearr_36696[(7)] = inst_36625__$1);

(statearr_36696[(8)] = inst_36626);

return statearr_36696;
})();
var statearr_36697_38208 = state_36662__$1;
(statearr_36697_38208[(2)] = null);

(statearr_36697_38208[(1)] = (2));


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
var statearr_36699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36699[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36699[(1)] = (1));

return statearr_36699;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36662){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36662);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36705){if((e36705 instanceof Object)){
var ex__34210__auto__ = e36705;
var statearr_36708_38209 = state_36662;
(statearr_36708_38209[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38211 = state_36662;
state_36662 = G__38211;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_36709 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_36709[(6)] = c__34271__auto___38175);

return statearr_36709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36713 = arguments.length;
switch (G__36713) {
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
var c__34271__auto___38215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34272__auto__ = (function (){var switch__34206__auto__ = (function (state_36758){
var state_val_36759 = (state_36758[(1)]);
if((state_val_36759 === (7))){
var inst_36754 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36762_38216 = state_36758__$1;
(statearr_36762_38216[(2)] = inst_36754);

(statearr_36762_38216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (1))){
var inst_36716 = [];
var inst_36717 = inst_36716;
var inst_36718 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36758__$1 = (function (){var statearr_36763 = state_36758;
(statearr_36763[(7)] = inst_36718);

(statearr_36763[(8)] = inst_36717);

return statearr_36763;
})();
var statearr_36765_38218 = state_36758__$1;
(statearr_36765_38218[(2)] = null);

(statearr_36765_38218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (4))){
var inst_36721 = (state_36758[(9)]);
var inst_36721__$1 = (state_36758[(2)]);
var inst_36722 = (inst_36721__$1 == null);
var inst_36723 = cljs.core.not(inst_36722);
var state_36758__$1 = (function (){var statearr_36766 = state_36758;
(statearr_36766[(9)] = inst_36721__$1);

return statearr_36766;
})();
if(inst_36723){
var statearr_36768_38222 = state_36758__$1;
(statearr_36768_38222[(1)] = (5));

} else {
var statearr_36769_38223 = state_36758__$1;
(statearr_36769_38223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (15))){
var inst_36748 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36770_38224 = state_36758__$1;
(statearr_36770_38224[(2)] = inst_36748);

(statearr_36770_38224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (13))){
var state_36758__$1 = state_36758;
var statearr_36772_38225 = state_36758__$1;
(statearr_36772_38225[(2)] = null);

(statearr_36772_38225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (6))){
var inst_36717 = (state_36758[(8)]);
var inst_36743 = inst_36717.length;
var inst_36744 = (inst_36743 > (0));
var state_36758__$1 = state_36758;
if(cljs.core.truth_(inst_36744)){
var statearr_36773_38227 = state_36758__$1;
(statearr_36773_38227[(1)] = (12));

} else {
var statearr_36774_38228 = state_36758__$1;
(statearr_36774_38228[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (3))){
var inst_36756 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36758__$1,inst_36756);
} else {
if((state_val_36759 === (12))){
var inst_36717 = (state_36758[(8)]);
var inst_36746 = cljs.core.vec(inst_36717);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36758__$1,(15),out,inst_36746);
} else {
if((state_val_36759 === (2))){
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36758__$1,(4),ch);
} else {
if((state_val_36759 === (11))){
var inst_36725 = (state_36758[(10)]);
var inst_36721 = (state_36758[(9)]);
var inst_36735 = (state_36758[(2)]);
var inst_36737 = [];
var inst_36738 = inst_36737.push(inst_36721);
var inst_36717 = inst_36737;
var inst_36718 = inst_36725;
var state_36758__$1 = (function (){var statearr_36777 = state_36758;
(statearr_36777[(11)] = inst_36738);

(statearr_36777[(7)] = inst_36718);

(statearr_36777[(12)] = inst_36735);

(statearr_36777[(8)] = inst_36717);

return statearr_36777;
})();
var statearr_36779_38231 = state_36758__$1;
(statearr_36779_38231[(2)] = null);

(statearr_36779_38231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (9))){
var inst_36717 = (state_36758[(8)]);
var inst_36733 = cljs.core.vec(inst_36717);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36758__$1,(11),out,inst_36733);
} else {
if((state_val_36759 === (5))){
var inst_36725 = (state_36758[(10)]);
var inst_36721 = (state_36758[(9)]);
var inst_36718 = (state_36758[(7)]);
var inst_36725__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36721) : f.call(null,inst_36721));
var inst_36726 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36725__$1,inst_36718);
var inst_36727 = cljs.core.keyword_identical_QMARK_(inst_36718,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36728 = ((inst_36726) || (inst_36727));
var state_36758__$1 = (function (){var statearr_36781 = state_36758;
(statearr_36781[(10)] = inst_36725__$1);

return statearr_36781;
})();
if(cljs.core.truth_(inst_36728)){
var statearr_36782_38233 = state_36758__$1;
(statearr_36782_38233[(1)] = (8));

} else {
var statearr_36783_38236 = state_36758__$1;
(statearr_36783_38236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (14))){
var inst_36751 = (state_36758[(2)]);
var inst_36752 = cljs.core.async.close_BANG_(out);
var state_36758__$1 = (function (){var statearr_36786 = state_36758;
(statearr_36786[(13)] = inst_36751);

return statearr_36786;
})();
var statearr_36787_38238 = state_36758__$1;
(statearr_36787_38238[(2)] = inst_36752);

(statearr_36787_38238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (10))){
var inst_36741 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36788_38239 = state_36758__$1;
(statearr_36788_38239[(2)] = inst_36741);

(statearr_36788_38239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (8))){
var inst_36725 = (state_36758[(10)]);
var inst_36721 = (state_36758[(9)]);
var inst_36717 = (state_36758[(8)]);
var inst_36730 = inst_36717.push(inst_36721);
var tmp36784 = inst_36717;
var inst_36717__$1 = tmp36784;
var inst_36718 = inst_36725;
var state_36758__$1 = (function (){var statearr_36790 = state_36758;
(statearr_36790[(14)] = inst_36730);

(statearr_36790[(7)] = inst_36718);

(statearr_36790[(8)] = inst_36717__$1);

return statearr_36790;
})();
var statearr_36791_38240 = state_36758__$1;
(statearr_36791_38240[(2)] = null);

(statearr_36791_38240[(1)] = (2));


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
var statearr_36793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36793[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36793[(1)] = (1));

return statearr_36793;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36758){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36758);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36794){if((e36794 instanceof Object)){
var ex__34210__auto__ = e36794;
var statearr_36796_38242 = state_36758;
(statearr_36796_38242[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38243 = state_36758;
state_36758 = G__38243;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34273__auto__ = (function (){var statearr_36798 = (f__34272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34272__auto__.cljs$core$IFn$_invoke$arity$0() : f__34272__auto__.call(null));
(statearr_36798[(6)] = c__34271__auto___38215);

return statearr_36798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34273__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
