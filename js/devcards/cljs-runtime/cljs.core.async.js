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

var G__36859 = (x_36857 + (1));
x_36857 = G__36859;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34351 = (function (flag,meta34352){
this.flag = flag;
this.meta34352 = meta34352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34353,meta34352__$1){
var self__ = this;
var _34353__$1 = this;
return (new cljs.core.async.t_cljs$core$async34351(self__.flag,meta34352__$1));
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
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34352","meta34352",58586617,null)], null);
}));

(cljs.core.async.t_cljs$core$async34351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34351");

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34351.
 */
cljs.core.async.__GT_t_cljs$core$async34351 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34351(flag__$1,meta34352){
return (new cljs.core.async.t_cljs$core$async34351(flag__$1,meta34352));
});

}

return (new cljs.core.async.t_cljs$core$async34351(flag,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34362_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34373) : fret.call(null,G__34373));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34363_SHARP_){
var G__34374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34363_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34374) : fret.call(null,G__34374));
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
var len__4789__auto___36873 = arguments.length;
var i__4790__auto___36874 = (0);
while(true){
if((i__4790__auto___36874 < len__4789__auto___36873)){
args__4795__auto__.push((arguments[i__4790__auto___36874]));

var G__36875 = (i__4790__auto___36874 + (1));
i__4790__auto___36874 = G__36875;
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
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34378){
var G__34379 = cljs.core.first(seq34378);
var seq34378__$1 = cljs.core.next(seq34378);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34379,seq34378__$1);
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
var c__34274__auto___36882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36884 = state_34423__$1;
(statearr_34425_36884[(2)] = inst_34419);

(statearr_34425_36884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36885 = state_34423__$1;
(statearr_34426_36885[(2)] = null);

(statearr_34426_36885[(1)] = (2));


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
var statearr_34428_36887 = state_34423__$1;
(statearr_34428_36887[(1)] = (5));

} else {
var statearr_34429_36889 = state_34423__$1;
(statearr_34429_36889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36890 = state_34423__$1;
(statearr_34430_36890[(2)] = null);

(statearr_34430_36890[(1)] = (14));


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
var statearr_34431_36892 = state_34423__$1;
(statearr_34431_36892[(2)] = null);

(statearr_34431_36892[(1)] = (2));


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
var statearr_34432_36894 = state_34423__$1;
(statearr_34432_36894[(1)] = (12));

} else {
var statearr_34433_36895 = state_34423__$1;
(statearr_34433_36895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36896 = state_34423__$1;
(statearr_34434_36896[(2)] = null);

(statearr_34434_36896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36898 = state_34423__$1;
(statearr_34435_36898[(1)] = (8));

} else {
var statearr_34436_36899 = state_34423__$1;
(statearr_34436_36899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36901 = state_34423__$1;
(statearr_34437_36901[(2)] = inst_34417);

(statearr_34437_36901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34439_36902 = state_34423__$1;
(statearr_34439_36902[(2)] = inst_34409);

(statearr_34439_36902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34443_36904 = state_34423__$1;
(statearr_34443_36904[(2)] = inst_34406);

(statearr_34443_36904[(1)] = (10));


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
var statearr_34444 = [null,null,null,null,null,null,null,null];
(statearr_34444[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34444[(1)] = (1));

return statearr_34444;
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
}catch (e34445){if((e34445 instanceof Object)){
var ex__34210__auto__ = e34445;
var statearr_34446_36906 = state_34423;
(statearr_34446_36906[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36908 = state_34423;
state_34423 = G__36908;
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
var state__34276__auto__ = (function (){var statearr_34448 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34448[(6)] = c__34274__auto___36882);

return statearr_34448;
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
var c__34274__auto___36911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34458){
var state_val_34459 = (state_34458[(1)]);
if((state_val_34459 === (1))){
var state_34458__$1 = state_34458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34458__$1,(2),res,v);
} else {
if((state_val_34459 === (2))){
var inst_34455 = (state_34458[(2)]);
var inst_34456 = cljs.core.async.close_BANG_(res);
var state_34458__$1 = (function (){var statearr_34461 = state_34458;
(statearr_34461[(7)] = inst_34455);

return statearr_34461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34458__$1,inst_34456);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34463 = [null,null,null,null,null,null,null,null];
(statearr_34463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34463[(1)] = (1));

return statearr_34463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34458){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34458);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34464){if((e34464 instanceof Object)){
var ex__34210__auto__ = e34464;
var statearr_34465_36915 = state_34458;
(statearr_34465_36915[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36916 = state_34458;
state_34458 = G__36916;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34466 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34466[(6)] = c__34274__auto___36911);

return statearr_34466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34469){
var vec__34470 = p__34469;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,(1),null);
var job = vec__34470;
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
var n__4666__auto___36919 = n;
var __36920 = (0);
while(true){
if((__36920 < n__4666__auto___36919)){
var G__34478_36921 = type;
var G__34478_36922__$1 = (((G__34478_36921 instanceof cljs.core.Keyword))?G__34478_36921.fqn:null);
switch (G__34478_36922__$1) {
case "compute":
var c__34274__auto___36925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36920,c__34274__auto___36925,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36920,c__34274__auto___36925,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async){
return (function (state_34491){
var state_val_34492 = (state_34491[(1)]);
if((state_val_34492 === (1))){
var state_34491__$1 = state_34491;
var statearr_34493_36927 = state_34491__$1;
(statearr_34493_36927[(2)] = null);

(statearr_34493_36927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (2))){
var state_34491__$1 = state_34491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34491__$1,(4),jobs);
} else {
if((state_val_34492 === (3))){
var inst_34489 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34491__$1,inst_34489);
} else {
if((state_val_34492 === (4))){
var inst_34481 = (state_34491[(2)]);
var inst_34482 = process(inst_34481);
var state_34491__$1 = state_34491;
if(cljs.core.truth_(inst_34482)){
var statearr_34495_36929 = state_34491__$1;
(statearr_34495_36929[(1)] = (5));

} else {
var statearr_34496_36930 = state_34491__$1;
(statearr_34496_36930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (5))){
var state_34491__$1 = state_34491;
var statearr_34497_36931 = state_34491__$1;
(statearr_34497_36931[(2)] = null);

(statearr_34497_36931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (6))){
var state_34491__$1 = state_34491;
var statearr_34498_36933 = state_34491__$1;
(statearr_34498_36933[(2)] = null);

(statearr_34498_36933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (7))){
var inst_34487 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
var statearr_34499_36934 = state_34491__$1;
(statearr_34499_36934[(2)] = inst_34487);

(statearr_34499_36934[(1)] = (3));


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
});})(__36920,c__34274__auto___36925,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async))
;
return ((function (__36920,switch__34206__auto__,c__34274__auto___36925,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34500 = [null,null,null,null,null,null,null];
(statearr_34500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34500[(1)] = (1));

return statearr_34500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34491){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34491);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34502){if((e34502 instanceof Object)){
var ex__34210__auto__ = e34502;
var statearr_34506_36937 = state_34491;
(statearr_34506_36937[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36939 = state_34491;
state_34491 = G__36939;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36920,switch__34206__auto__,c__34274__auto___36925,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34507 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34507[(6)] = c__34274__auto___36925);

return statearr_34507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36920,c__34274__auto___36925,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36920,c__34274__auto___36940,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36920,c__34274__auto___36940,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async){
return (function (state_34523){
var state_val_34524 = (state_34523[(1)]);
if((state_val_34524 === (1))){
var state_34523__$1 = state_34523;
var statearr_34525_36943 = state_34523__$1;
(statearr_34525_36943[(2)] = null);

(statearr_34525_36943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (2))){
var state_34523__$1 = state_34523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34523__$1,(4),jobs);
} else {
if((state_val_34524 === (3))){
var inst_34521 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34523__$1,inst_34521);
} else {
if((state_val_34524 === (4))){
var inst_34513 = (state_34523[(2)]);
var inst_34514 = async(inst_34513);
var state_34523__$1 = state_34523;
if(cljs.core.truth_(inst_34514)){
var statearr_34526_36944 = state_34523__$1;
(statearr_34526_36944[(1)] = (5));

} else {
var statearr_34527_36945 = state_34523__$1;
(statearr_34527_36945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (5))){
var state_34523__$1 = state_34523;
var statearr_34528_36946 = state_34523__$1;
(statearr_34528_36946[(2)] = null);

(statearr_34528_36946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (6))){
var state_34523__$1 = state_34523;
var statearr_34529_36947 = state_34523__$1;
(statearr_34529_36947[(2)] = null);

(statearr_34529_36947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (7))){
var inst_34519 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
var statearr_34530_36955 = state_34523__$1;
(statearr_34530_36955[(2)] = inst_34519);

(statearr_34530_36955[(1)] = (3));


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
});})(__36920,c__34274__auto___36940,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async))
;
return ((function (__36920,switch__34206__auto__,c__34274__auto___36940,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34531 = [null,null,null,null,null,null,null];
(statearr_34531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34531[(1)] = (1));

return statearr_34531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34523){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34523);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34533){if((e34533 instanceof Object)){
var ex__34210__auto__ = e34533;
var statearr_34535_36957 = state_34523;
(statearr_34535_36957[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36958 = state_34523;
state_34523 = G__36958;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34523){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36920,switch__34206__auto__,c__34274__auto___36940,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34537 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34537[(6)] = c__34274__auto___36940);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36920,c__34274__auto___36940,G__34478_36921,G__34478_36922__$1,n__4666__auto___36919,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34478_36922__$1)].join('')));

}

var G__36959 = (__36920 + (1));
__36920 = G__36959;
continue;
} else {
}
break;
}

var c__34274__auto___36961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36962 = state_34559__$1;
(statearr_34561_36962[(2)] = inst_34555);

(statearr_34561_36962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36966 = state_34559__$1;
(statearr_34562_36966[(2)] = null);

(statearr_34562_36966[(1)] = (2));


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
var statearr_34564_36967 = state_34559__$1;
(statearr_34564_36967[(1)] = (5));

} else {
var statearr_34565_36968 = state_34559__$1;
(statearr_34565_36968[(1)] = (6));

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
var statearr_34568_36970 = state_34559__$1;
(statearr_34568_36970[(2)] = null);

(statearr_34568_36970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36971 = state_34559__$1;
(statearr_34569_36971[(2)] = inst_34543);

(statearr_34569_36971[(1)] = (7));


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
var statearr_34573_36972 = state_34559;
(statearr_34573_36972[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36973 = state_34559;
state_34559 = G__36973;
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
(statearr_34574[(6)] = c__34274__auto___36961);

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
var statearr_34614_36974 = state_34612__$1;
(statearr_34614_36974[(2)] = inst_34608);

(statearr_34614_36974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36975 = state_34612__$1;
(statearr_34615_36975[(2)] = null);

(statearr_34615_36975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36976 = state_34612__$1;
(statearr_34616_36976[(2)] = null);

(statearr_34616_36976[(1)] = (2));


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
var statearr_34618_36981 = state_34612__$1;
(statearr_34618_36981[(1)] = (5));

} else {
var statearr_34619_36982 = state_34612__$1;
(statearr_34619_36982[(1)] = (6));

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
var statearr_34620_36991 = state_34612__$1;
(statearr_34620_36991[(2)] = inst_34603);

(statearr_34620_36991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36992 = state_34612__$1;
(statearr_34622_36992[(2)] = null);

(statearr_34622_36992[(1)] = (2));


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
var statearr_34623_36994 = state_34612__$1;
(statearr_34623_36994[(1)] = (19));

} else {
var statearr_34624_36995 = state_34612__$1;
(statearr_34624_36995[(1)] = (20));

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
var statearr_34625_37002 = state_34612__$1;
(statearr_34625_37002[(2)] = null);

(statearr_34625_37002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_37005 = state_34612__$1;
(statearr_34627_37005[(2)] = null);

(statearr_34627_37005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37008 = state_34612__$1;
(statearr_34628_37008[(2)] = null);

(statearr_34628_37008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37011 = state_34612__$1;
(statearr_34629_37011[(1)] = (8));

} else {
var statearr_34630_37012 = state_34612__$1;
(statearr_34630_37012[(1)] = (9));

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
var statearr_34632_37018 = state_34612__$1;
(statearr_34632_37018[(1)] = (15));

} else {
var statearr_34633_37020 = state_34612__$1;
(statearr_34633_37020[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37022 = state_34612__$1;
(statearr_34634_37022[(2)] = false);

(statearr_34634_37022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37029 = state_34612__$1;
(statearr_34635_37029[(2)] = inst_34584);

(statearr_34635_37029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37030 = state_34612__$1;
(statearr_34636_37030[(2)] = inst_34595);

(statearr_34636_37030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37033 = state_34612__$1;
(statearr_34637_37033[(2)] = inst_34581);

(statearr_34637_37033[(1)] = (10));


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
var statearr_34640_37041 = state_34612;
(statearr_34640_37041[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37044 = state_34612;
state_34612 = G__37044;
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
var state__34276__auto__ = (function (){var statearr_34644 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34644[(6)] = c__34274__auto__);

return statearr_34644;
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
var G__34654 = arguments.length;
switch (G__34654) {
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
var c__34274__auto___37076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34686){
var state_val_34687 = (state_34686[(1)]);
if((state_val_34687 === (7))){
var inst_34681 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
var statearr_34688_37082 = state_34686__$1;
(statearr_34688_37082[(2)] = inst_34681);

(statearr_34688_37082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (1))){
var state_34686__$1 = state_34686;
var statearr_34689_37086 = state_34686__$1;
(statearr_34689_37086[(2)] = null);

(statearr_34689_37086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (4))){
var inst_34662 = (state_34686[(7)]);
var inst_34662__$1 = (state_34686[(2)]);
var inst_34663 = (inst_34662__$1 == null);
var state_34686__$1 = (function (){var statearr_34692 = state_34686;
(statearr_34692[(7)] = inst_34662__$1);

return statearr_34692;
})();
if(cljs.core.truth_(inst_34663)){
var statearr_34693_37089 = state_34686__$1;
(statearr_34693_37089[(1)] = (5));

} else {
var statearr_34694_37090 = state_34686__$1;
(statearr_34694_37090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (13))){
var state_34686__$1 = state_34686;
var statearr_34695_37091 = state_34686__$1;
(statearr_34695_37091[(2)] = null);

(statearr_34695_37091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (6))){
var inst_34662 = (state_34686[(7)]);
var inst_34668 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34662) : p.call(null,inst_34662));
var state_34686__$1 = state_34686;
if(cljs.core.truth_(inst_34668)){
var statearr_34699_37093 = state_34686__$1;
(statearr_34699_37093[(1)] = (9));

} else {
var statearr_34700_37094 = state_34686__$1;
(statearr_34700_37094[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (3))){
var inst_34684 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34686__$1,inst_34684);
} else {
if((state_val_34687 === (12))){
var state_34686__$1 = state_34686;
var statearr_34701_37098 = state_34686__$1;
(statearr_34701_37098[(2)] = null);

(statearr_34701_37098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (2))){
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34686__$1,(4),ch);
} else {
if((state_val_34687 === (11))){
var inst_34662 = (state_34686[(7)]);
var inst_34672 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34686__$1,(8),inst_34672,inst_34662);
} else {
if((state_val_34687 === (9))){
var state_34686__$1 = state_34686;
var statearr_34702_37103 = state_34686__$1;
(statearr_34702_37103[(2)] = tc);

(statearr_34702_37103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (5))){
var inst_34665 = cljs.core.async.close_BANG_(tc);
var inst_34666 = cljs.core.async.close_BANG_(fc);
var state_34686__$1 = (function (){var statearr_34704 = state_34686;
(statearr_34704[(8)] = inst_34665);

return statearr_34704;
})();
var statearr_34705_37104 = state_34686__$1;
(statearr_34705_37104[(2)] = inst_34666);

(statearr_34705_37104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (14))){
var inst_34679 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
var statearr_34706_37111 = state_34686__$1;
(statearr_34706_37111[(2)] = inst_34679);

(statearr_34706_37111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (10))){
var state_34686__$1 = state_34686;
var statearr_34707_37113 = state_34686__$1;
(statearr_34707_37113[(2)] = fc);

(statearr_34707_37113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (8))){
var inst_34674 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
if(cljs.core.truth_(inst_34674)){
var statearr_34708_37115 = state_34686__$1;
(statearr_34708_37115[(1)] = (12));

} else {
var statearr_34709_37116 = state_34686__$1;
(statearr_34709_37116[(1)] = (13));

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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34686){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34686);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34714){if((e34714 instanceof Object)){
var ex__34210__auto__ = e34714;
var statearr_34715_37120 = state_34686;
(statearr_34715_37120[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37121 = state_34686;
state_34686 = G__37121;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34716 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34716[(6)] = c__34274__auto___37076);

return statearr_34716;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34740){
var state_val_34741 = (state_34740[(1)]);
if((state_val_34741 === (7))){
var inst_34736 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34745_37130 = state_34740__$1;
(statearr_34745_37130[(2)] = inst_34736);

(statearr_34745_37130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (1))){
var inst_34720 = init;
var state_34740__$1 = (function (){var statearr_34746 = state_34740;
(statearr_34746[(7)] = inst_34720);

return statearr_34746;
})();
var statearr_34747_37132 = state_34740__$1;
(statearr_34747_37132[(2)] = null);

(statearr_34747_37132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (4))){
var inst_34723 = (state_34740[(8)]);
var inst_34723__$1 = (state_34740[(2)]);
var inst_34724 = (inst_34723__$1 == null);
var state_34740__$1 = (function (){var statearr_34748 = state_34740;
(statearr_34748[(8)] = inst_34723__$1);

return statearr_34748;
})();
if(cljs.core.truth_(inst_34724)){
var statearr_34749_37135 = state_34740__$1;
(statearr_34749_37135[(1)] = (5));

} else {
var statearr_34750_37136 = state_34740__$1;
(statearr_34750_37136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (6))){
var inst_34727 = (state_34740[(9)]);
var inst_34723 = (state_34740[(8)]);
var inst_34720 = (state_34740[(7)]);
var inst_34727__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34720,inst_34723) : f.call(null,inst_34720,inst_34723));
var inst_34728 = cljs.core.reduced_QMARK_(inst_34727__$1);
var state_34740__$1 = (function (){var statearr_34751 = state_34740;
(statearr_34751[(9)] = inst_34727__$1);

return statearr_34751;
})();
if(inst_34728){
var statearr_34752_37138 = state_34740__$1;
(statearr_34752_37138[(1)] = (8));

} else {
var statearr_34753_37139 = state_34740__$1;
(statearr_34753_37139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (3))){
var inst_34738 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34740__$1,inst_34738);
} else {
if((state_val_34741 === (2))){
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34740__$1,(4),ch);
} else {
if((state_val_34741 === (9))){
var inst_34727 = (state_34740[(9)]);
var inst_34720 = inst_34727;
var state_34740__$1 = (function (){var statearr_34754 = state_34740;
(statearr_34754[(7)] = inst_34720);

return statearr_34754;
})();
var statearr_34755_37147 = state_34740__$1;
(statearr_34755_37147[(2)] = null);

(statearr_34755_37147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (5))){
var inst_34720 = (state_34740[(7)]);
var state_34740__$1 = state_34740;
var statearr_34756_37149 = state_34740__$1;
(statearr_34756_37149[(2)] = inst_34720);

(statearr_34756_37149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (10))){
var inst_34734 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34757_37152 = state_34740__$1;
(statearr_34757_37152[(2)] = inst_34734);

(statearr_34757_37152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (8))){
var inst_34727 = (state_34740[(9)]);
var inst_34730 = cljs.core.deref(inst_34727);
var state_34740__$1 = state_34740;
var statearr_34758_37153 = state_34740__$1;
(statearr_34758_37153[(2)] = inst_34730);

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
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34740){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34740);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37155 = state_34740;
(statearr_34761_37155[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37161 = state_34740;
state_34740 = G__37161;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34740){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34740);
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
var statearr_34773 = [null,null,null,null,null,null,null];
(statearr_34773[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34773[(1)] = (1));

return statearr_34773;
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
}catch (e34777){if((e34777 instanceof Object)){
var ex__34210__auto__ = e34777;
var statearr_34778_37177 = state_34768;
(statearr_34778_37177[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37181 = state_34768;
state_34768 = G__37181;
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
var G__34782 = arguments.length;
switch (G__34782) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34808){
var state_val_34809 = (state_34808[(1)]);
if((state_val_34809 === (7))){
var inst_34790 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34812_37193 = state_34808__$1;
(statearr_34812_37193[(2)] = inst_34790);

(statearr_34812_37193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (1))){
var inst_34783 = cljs.core.seq(coll);
var inst_34785 = inst_34783;
var state_34808__$1 = (function (){var statearr_34816 = state_34808;
(statearr_34816[(7)] = inst_34785);

return statearr_34816;
})();
var statearr_34817_37199 = state_34808__$1;
(statearr_34817_37199[(2)] = null);

(statearr_34817_37199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (4))){
var inst_34785 = (state_34808[(7)]);
var inst_34788 = cljs.core.first(inst_34785);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34808__$1,(7),ch,inst_34788);
} else {
if((state_val_34809 === (13))){
var inst_34802 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34818_37207 = state_34808__$1;
(statearr_34818_37207[(2)] = inst_34802);

(statearr_34818_37207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (6))){
var inst_34793 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34793)){
var statearr_34819_37208 = state_34808__$1;
(statearr_34819_37208[(1)] = (8));

} else {
var statearr_34820_37211 = state_34808__$1;
(statearr_34820_37211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (3))){
var inst_34806 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34808__$1,inst_34806);
} else {
if((state_val_34809 === (12))){
var state_34808__$1 = state_34808;
var statearr_34821_37214 = state_34808__$1;
(statearr_34821_37214[(2)] = null);

(statearr_34821_37214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (2))){
var inst_34785 = (state_34808[(7)]);
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34785)){
var statearr_34822_37215 = state_34808__$1;
(statearr_34822_37215[(1)] = (4));

} else {
var statearr_34823_37216 = state_34808__$1;
(statearr_34823_37216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (11))){
var inst_34799 = cljs.core.async.close_BANG_(ch);
var state_34808__$1 = state_34808;
var statearr_34824_37218 = state_34808__$1;
(statearr_34824_37218[(2)] = inst_34799);

(statearr_34824_37218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (9))){
var state_34808__$1 = state_34808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34825_37219 = state_34808__$1;
(statearr_34825_37219[(1)] = (11));

} else {
var statearr_34826_37221 = state_34808__$1;
(statearr_34826_37221[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (5))){
var inst_34785 = (state_34808[(7)]);
var state_34808__$1 = state_34808;
var statearr_34830_37223 = state_34808__$1;
(statearr_34830_37223[(2)] = inst_34785);

(statearr_34830_37223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (10))){
var inst_34804 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34831_37226 = state_34808__$1;
(statearr_34831_37226[(2)] = inst_34804);

(statearr_34831_37226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (8))){
var inst_34785 = (state_34808[(7)]);
var inst_34795 = cljs.core.next(inst_34785);
var inst_34785__$1 = inst_34795;
var state_34808__$1 = (function (){var statearr_34835 = state_34808;
(statearr_34835[(7)] = inst_34785__$1);

return statearr_34835;
})();
var statearr_34836_37229 = state_34808__$1;
(statearr_34836_37229[(2)] = null);

(statearr_34836_37229[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34808){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34808);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37235 = state_34808;
(statearr_34839_37235[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37236 = state_34808;
state_34808 = G__37236;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34808);
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
var c__34274__auto___37280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34990){
var state_val_34991 = (state_34990[(1)]);
if((state_val_34991 === (7))){
var inst_34983 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34996_37283 = state_34990__$1;
(statearr_34996_37283[(2)] = inst_34983);

(statearr_34996_37283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (20))){
var inst_34877 = (state_34990[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34990__$1 = (function (){var statearr_34999 = state_34990;
(statearr_34999[(8)] = inst_34890);

return statearr_34999;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_35000_37286 = state_34990__$1;
(statearr_35000_37286[(1)] = (22));

} else {
var statearr_35001_37287 = state_34990__$1;
(statearr_35001_37287[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (27))){
var inst_34923 = (state_34990[(9)]);
var inst_34846 = (state_34990[(10)]);
var inst_34921 = (state_34990[(11)]);
var inst_34928 = (state_34990[(12)]);
var inst_34928__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34921,inst_34923);
var inst_34929 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34928__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35002 = state_34990;
(statearr_35002[(12)] = inst_34928__$1);

return statearr_35002;
})();
if(cljs.core.truth_(inst_34929)){
var statearr_35003_37288 = state_34990__$1;
(statearr_35003_37288[(1)] = (30));

} else {
var statearr_35004_37290 = state_34990__$1;
(statearr_35004_37290[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (1))){
var state_34990__$1 = state_34990;
var statearr_35005_37293 = state_34990__$1;
(statearr_35005_37293[(2)] = null);

(statearr_35005_37293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (24))){
var inst_34877 = (state_34990[(7)]);
var inst_34896 = (state_34990[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35008 = state_34990;
(statearr_35008[(13)] = inst_34857);

(statearr_35008[(14)] = inst_34856);

(statearr_35008[(15)] = inst_34858);

(statearr_35008[(16)] = inst_34896);

(statearr_35008[(17)] = inst_34855);

return statearr_35008;
})();
var statearr_35011_37300 = state_34990__$1;
(statearr_35011_37300[(2)] = null);

(statearr_35011_37300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (39))){
var state_34990__$1 = state_34990;
var statearr_35017_37303 = state_34990__$1;
(statearr_35017_37303[(2)] = null);

(statearr_35017_37303[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (4))){
var inst_34846 = (state_34990[(10)]);
var inst_34846__$1 = (state_34990[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34990__$1 = (function (){var statearr_35018 = state_34990;
(statearr_35018[(10)] = inst_34846__$1);

return statearr_35018;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35020_37306 = state_34990__$1;
(statearr_35020_37306[(1)] = (5));

} else {
var statearr_35022_37308 = state_34990__$1;
(statearr_35022_37308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (15))){
var inst_34857 = (state_34990[(13)]);
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34855 = (state_34990[(17)]);
var inst_34873 = (state_34990[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35014 = inst_34857;
var tmp35015 = inst_34856;
var tmp35016 = inst_34855;
var inst_34855__$1 = tmp35016;
var inst_34856__$1 = tmp35015;
var inst_34857__$1 = tmp35014;
var inst_34858__$1 = inst_34874;
var state_34990__$1 = (function (){var statearr_35040 = state_34990;
(statearr_35040[(18)] = inst_34873);

(statearr_35040[(13)] = inst_34857__$1);

(statearr_35040[(14)] = inst_34856__$1);

(statearr_35040[(15)] = inst_34858__$1);

(statearr_35040[(17)] = inst_34855__$1);

return statearr_35040;
})();
var statearr_35041_37321 = state_34990__$1;
(statearr_35041_37321[(2)] = null);

(statearr_35041_37321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (21))){
var inst_34900 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35047_37322 = state_34990__$1;
(statearr_35047_37322[(2)] = inst_34900);

(statearr_35047_37322[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (31))){
var inst_34928 = (state_34990[(12)]);
var inst_34936 = done(null);
var inst_34937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34928);
var state_34990__$1 = (function (){var statearr_35050 = state_34990;
(statearr_35050[(19)] = inst_34936);

return statearr_35050;
})();
var statearr_35051_37327 = state_34990__$1;
(statearr_35051_37327[(2)] = inst_34937);

(statearr_35051_37327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (32))){
var inst_34923 = (state_34990[(9)]);
var inst_34920 = (state_34990[(20)]);
var inst_34921 = (state_34990[(11)]);
var inst_34922 = (state_34990[(21)]);
var inst_34939 = (state_34990[(2)]);
var inst_34940 = (inst_34923 + (1));
var tmp35042 = inst_34920;
var tmp35043 = inst_34921;
var tmp35044 = inst_34922;
var inst_34920__$1 = tmp35042;
var inst_34921__$1 = tmp35043;
var inst_34922__$1 = tmp35044;
var inst_34923__$1 = inst_34940;
var state_34990__$1 = (function (){var statearr_35064 = state_34990;
(statearr_35064[(9)] = inst_34923__$1);

(statearr_35064[(20)] = inst_34920__$1);

(statearr_35064[(11)] = inst_34921__$1);

(statearr_35064[(21)] = inst_34922__$1);

(statearr_35064[(22)] = inst_34939);

return statearr_35064;
})();
var statearr_35068_37337 = state_34990__$1;
(statearr_35068_37337[(2)] = null);

(statearr_35068_37337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (40))){
var inst_34952 = (state_34990[(23)]);
var inst_34956 = done(null);
var inst_34957 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34952);
var state_34990__$1 = (function (){var statearr_35076 = state_34990;
(statearr_35076[(24)] = inst_34956);

return statearr_35076;
})();
var statearr_35078_37342 = state_34990__$1;
(statearr_35078_37342[(2)] = inst_34957);

(statearr_35078_37342[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (33))){
var inst_34943 = (state_34990[(25)]);
var inst_34945 = cljs.core.chunked_seq_QMARK_(inst_34943);
var state_34990__$1 = state_34990;
if(inst_34945){
var statearr_35085_37349 = state_34990__$1;
(statearr_35085_37349[(1)] = (36));

} else {
var statearr_35088_37352 = state_34990__$1;
(statearr_35088_37352[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (13))){
var inst_34867 = (state_34990[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34990__$1 = state_34990;
var statearr_35096_37354 = state_34990__$1;
(statearr_35096_37354[(2)] = inst_34870);

(statearr_35096_37354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (22))){
var inst_34890 = (state_34990[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34990__$1 = state_34990;
var statearr_35104_37357 = state_34990__$1;
(statearr_35104_37357[(2)] = inst_34893);

(statearr_35104_37357[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (36))){
var inst_34943 = (state_34990[(25)]);
var inst_34947 = cljs.core.chunk_first(inst_34943);
var inst_34948 = cljs.core.chunk_rest(inst_34943);
var inst_34949 = cljs.core.count(inst_34947);
var inst_34920 = inst_34948;
var inst_34921 = inst_34947;
var inst_34922 = inst_34949;
var inst_34923 = (0);
var state_34990__$1 = (function (){var statearr_35112 = state_34990;
(statearr_35112[(9)] = inst_34923);

(statearr_35112[(20)] = inst_34920);

(statearr_35112[(11)] = inst_34921);

(statearr_35112[(21)] = inst_34922);

return statearr_35112;
})();
var statearr_35119_37361 = state_34990__$1;
(statearr_35119_37361[(2)] = null);

(statearr_35119_37361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (41))){
var inst_34943 = (state_34990[(25)]);
var inst_34959 = (state_34990[(2)]);
var inst_34960 = cljs.core.next(inst_34943);
var inst_34920 = inst_34960;
var inst_34921 = null;
var inst_34922 = (0);
var inst_34923 = (0);
var state_34990__$1 = (function (){var statearr_35126 = state_34990;
(statearr_35126[(9)] = inst_34923);

(statearr_35126[(27)] = inst_34959);

(statearr_35126[(20)] = inst_34920);

(statearr_35126[(11)] = inst_34921);

(statearr_35126[(21)] = inst_34922);

return statearr_35126;
})();
var statearr_35131_37368 = state_34990__$1;
(statearr_35131_37368[(2)] = null);

(statearr_35131_37368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (43))){
var state_34990__$1 = state_34990;
var statearr_35137_37370 = state_34990__$1;
(statearr_35137_37370[(2)] = null);

(statearr_35137_37370[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (29))){
var inst_34968 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35143_37372 = state_34990__$1;
(statearr_35143_37372[(2)] = inst_34968);

(statearr_35143_37372[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (44))){
var inst_34980 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_35144 = state_34990;
(statearr_35144[(28)] = inst_34980);

return statearr_35144;
})();
var statearr_35145_37378 = state_34990__$1;
(statearr_35145_37378[(2)] = null);

(statearr_35145_37378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (6))){
var inst_34910 = (state_34990[(29)]);
var inst_34909 = cljs.core.deref(cs);
var inst_34910__$1 = cljs.core.keys(inst_34909);
var inst_34912 = cljs.core.count(inst_34910__$1);
var inst_34913 = cljs.core.reset_BANG_(dctr,inst_34912);
var inst_34919 = cljs.core.seq(inst_34910__$1);
var inst_34920 = inst_34919;
var inst_34921 = null;
var inst_34922 = (0);
var inst_34923 = (0);
var state_34990__$1 = (function (){var statearr_35147 = state_34990;
(statearr_35147[(9)] = inst_34923);

(statearr_35147[(30)] = inst_34913);

(statearr_35147[(29)] = inst_34910__$1);

(statearr_35147[(20)] = inst_34920);

(statearr_35147[(11)] = inst_34921);

(statearr_35147[(21)] = inst_34922);

return statearr_35147;
})();
var statearr_35149_37384 = state_34990__$1;
(statearr_35149_37384[(2)] = null);

(statearr_35149_37384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (28))){
var inst_34920 = (state_34990[(20)]);
var inst_34943 = (state_34990[(25)]);
var inst_34943__$1 = cljs.core.seq(inst_34920);
var state_34990__$1 = (function (){var statearr_35150 = state_34990;
(statearr_35150[(25)] = inst_34943__$1);

return statearr_35150;
})();
if(inst_34943__$1){
var statearr_35153_37388 = state_34990__$1;
(statearr_35153_37388[(1)] = (33));

} else {
var statearr_35154_37390 = state_34990__$1;
(statearr_35154_37390[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (25))){
var inst_34923 = (state_34990[(9)]);
var inst_34922 = (state_34990[(21)]);
var inst_34925 = (inst_34923 < inst_34922);
var inst_34926 = inst_34925;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34926)){
var statearr_35178_37391 = state_34990__$1;
(statearr_35178_37391[(1)] = (27));

} else {
var statearr_35179_37392 = state_34990__$1;
(statearr_35179_37392[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (34))){
var state_34990__$1 = state_34990;
var statearr_35184_37398 = state_34990__$1;
(statearr_35184_37398[(2)] = null);

(statearr_35184_37398[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (17))){
var state_34990__$1 = state_34990;
var statearr_35186_37401 = state_34990__$1;
(statearr_35186_37401[(2)] = null);

(statearr_35186_37401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (3))){
var inst_34985 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34990__$1,inst_34985);
} else {
if((state_val_34991 === (12))){
var inst_34905 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35195_37403 = state_34990__$1;
(statearr_35195_37403[(2)] = inst_34905);

(statearr_35195_37403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (2))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(4),ch);
} else {
if((state_val_34991 === (23))){
var state_34990__$1 = state_34990;
var statearr_35208_37406 = state_34990__$1;
(statearr_35208_37406[(2)] = null);

(statearr_35208_37406[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (35))){
var inst_34966 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35216_37410 = state_34990__$1;
(statearr_35216_37410[(2)] = inst_34966);

(statearr_35216_37410[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (19))){
var inst_34877 = (state_34990[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35224 = state_34990;
(statearr_35224[(13)] = inst_34857);

(statearr_35224[(14)] = inst_34856);

(statearr_35224[(15)] = inst_34858);

(statearr_35224[(17)] = inst_34855);

return statearr_35224;
})();
var statearr_35229_37414 = state_34990__$1;
(statearr_35229_37414[(2)] = null);

(statearr_35229_37414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (11))){
var inst_34855 = (state_34990[(17)]);
var inst_34877 = (state_34990[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34990__$1 = (function (){var statearr_35237 = state_34990;
(statearr_35237[(7)] = inst_34877__$1);

return statearr_35237;
})();
if(inst_34877__$1){
var statearr_35239_37416 = state_34990__$1;
(statearr_35239_37416[(1)] = (16));

} else {
var statearr_35242_37420 = state_34990__$1;
(statearr_35242_37420[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (9))){
var inst_34907 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35247_37422 = state_34990__$1;
(statearr_35247_37422[(2)] = inst_34907);

(statearr_35247_37422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35257 = state_34990;
(statearr_35257[(13)] = inst_34857);

(statearr_35257[(14)] = inst_34856);

(statearr_35257[(15)] = inst_34858);

(statearr_35257[(17)] = inst_34855);

return statearr_35257;
})();
var statearr_35261_37426 = state_34990__$1;
(statearr_35261_37426[(2)] = null);

(statearr_35261_37426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (14))){
var state_34990__$1 = state_34990;
var statearr_35267_37427 = state_34990__$1;
(statearr_35267_37427[(2)] = null);

(statearr_35267_37427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (45))){
var inst_34977 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35273_37430 = state_34990__$1;
(statearr_35273_37430[(2)] = inst_34977);

(statearr_35273_37430[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (26))){
var inst_34910 = (state_34990[(29)]);
var inst_34970 = (state_34990[(2)]);
var inst_34973 = cljs.core.seq(inst_34910);
var state_34990__$1 = (function (){var statearr_35280 = state_34990;
(statearr_35280[(31)] = inst_34970);

return statearr_35280;
})();
if(inst_34973){
var statearr_35282_37435 = state_34990__$1;
(statearr_35282_37435[(1)] = (42));

} else {
var statearr_35285_37436 = state_34990__$1;
(statearr_35285_37436[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (16))){
var inst_34877 = (state_34990[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34990__$1 = state_34990;
if(inst_34879){
var statearr_35292_37438 = state_34990__$1;
(statearr_35292_37438[(1)] = (19));

} else {
var statearr_35295_37439 = state_34990__$1;
(statearr_35295_37439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (38))){
var inst_34963 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35300_37445 = state_34990__$1;
(statearr_35300_37445[(2)] = inst_34963);

(statearr_35300_37445[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (30))){
var state_34990__$1 = state_34990;
var statearr_35304_37448 = state_34990__$1;
(statearr_35304_37448[(2)] = null);

(statearr_35304_37448[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (10))){
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34990__$1 = (function (){var statearr_35313 = state_34990;
(statearr_35313[(26)] = inst_34867);

return statearr_35313;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35319_37455 = state_34990__$1;
(statearr_35319_37455[(1)] = (13));

} else {
var statearr_35321_37457 = state_34990__$1;
(statearr_35321_37457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (18))){
var inst_34903 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35327_37458 = state_34990__$1;
(statearr_35327_37458[(2)] = inst_34903);

(statearr_35327_37458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (42))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(45),dchan);
} else {
if((state_val_34991 === (37))){
var inst_34952 = (state_34990[(23)]);
var inst_34846 = (state_34990[(10)]);
var inst_34943 = (state_34990[(25)]);
var inst_34952__$1 = cljs.core.first(inst_34943);
var inst_34953 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34952__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35341 = state_34990;
(statearr_35341[(23)] = inst_34952__$1);

return statearr_35341;
})();
if(cljs.core.truth_(inst_34953)){
var statearr_35343_37472 = state_34990__$1;
(statearr_35343_37472[(1)] = (39));

} else {
var statearr_35347_37473 = state_34990__$1;
(statearr_35347_37473[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (8))){
var inst_34857 = (state_34990[(13)]);
var inst_34858 = (state_34990[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34861)){
var statearr_35351_37475 = state_34990__$1;
(statearr_35351_37475[(1)] = (10));

} else {
var statearr_35352_37476 = state_34990__$1;
(statearr_35352_37476[(1)] = (11));

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
var statearr_35353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35353[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35353[(1)] = (1));

return statearr_35353;
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
}catch (e35354){if((e35354 instanceof Object)){
var ex__34210__auto__ = e35354;
var statearr_35355_37490 = state_34990;
(statearr_35355_37490[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37492 = state_34990;
state_34990 = G__37492;
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
var state__34276__auto__ = (function (){var statearr_35358 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35358[(6)] = c__34274__auto___37280);

return statearr_35358;
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
var G__35360 = arguments.length;
switch (G__35360) {
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
var len__4789__auto___37546 = arguments.length;
var i__4790__auto___37547 = (0);
while(true){
if((i__4790__auto___37547 < len__4789__auto___37546)){
args__4795__auto__.push((arguments[i__4790__auto___37547]));

var G__37549 = (i__4790__auto___37547 + (1));
i__4790__auto___37547 = G__37549;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35449){
var map__35450 = p__35449;
var map__35450__$1 = (((((!((map__35450 == null))))?(((((map__35450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35450):map__35450);
var opts = map__35450__$1;
var statearr_35458_37558 = state;
(statearr_35458_37558[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35464_37560 = state;
(statearr_35464_37560[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35471_37561 = state;
(statearr_35471_37561[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35440){
var G__35441 = cljs.core.first(seq35440);
var seq35440__$1 = cljs.core.next(seq35440);
var G__35442 = cljs.core.first(seq35440__$1);
var seq35440__$2 = cljs.core.next(seq35440__$1);
var G__35443 = cljs.core.first(seq35440__$2);
var seq35440__$3 = cljs.core.next(seq35440__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35441,G__35442,G__35443,seq35440__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35562 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35563){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35563 = meta35563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35564,meta35563__$1){
var self__ = this;
var _35564__$1 = this;
return (new cljs.core.async.t_cljs$core$async35562(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35563__$1));
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35564){
var self__ = this;
var _35564__$1 = this;
return self__.meta35563;
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35563","meta35563",-1486850583,null)], null);
}));

(cljs.core.async.t_cljs$core$async35562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35562");

(cljs.core.async.t_cljs$core$async35562.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35562.
 */
cljs.core.async.__GT_t_cljs$core$async35562 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35562(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35563){
return (new cljs.core.async.t_cljs$core$async35562(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35563));
});

}

return (new cljs.core.async.t_cljs$core$async35562(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35693){
var state_val_35694 = (state_35693[(1)]);
if((state_val_35694 === (7))){
var inst_35596 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35697_37634 = state_35693__$1;
(statearr_35697_37634[(2)] = inst_35596);

(statearr_35697_37634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (20))){
var inst_35609 = (state_35693[(7)]);
var state_35693__$1 = state_35693;
var statearr_35698_37641 = state_35693__$1;
(statearr_35698_37641[(2)] = inst_35609);

(statearr_35698_37641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (27))){
var state_35693__$1 = state_35693;
var statearr_35699_37643 = state_35693__$1;
(statearr_35699_37643[(2)] = null);

(statearr_35699_37643[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (1))){
var inst_35581 = (state_35693[(8)]);
var inst_35581__$1 = calc_state();
var inst_35584 = (inst_35581__$1 == null);
var inst_35585 = cljs.core.not(inst_35584);
var state_35693__$1 = (function (){var statearr_35701 = state_35693;
(statearr_35701[(8)] = inst_35581__$1);

return statearr_35701;
})();
if(inst_35585){
var statearr_35702_37649 = state_35693__$1;
(statearr_35702_37649[(1)] = (2));

} else {
var statearr_35703_37652 = state_35693__$1;
(statearr_35703_37652[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (24))){
var inst_35636 = (state_35693[(9)]);
var inst_35663 = (state_35693[(10)]);
var inst_35645 = (state_35693[(11)]);
var inst_35663__$1 = (inst_35636.cljs$core$IFn$_invoke$arity$1 ? inst_35636.cljs$core$IFn$_invoke$arity$1(inst_35645) : inst_35636.call(null,inst_35645));
var state_35693__$1 = (function (){var statearr_35705 = state_35693;
(statearr_35705[(10)] = inst_35663__$1);

return statearr_35705;
})();
if(cljs.core.truth_(inst_35663__$1)){
var statearr_35706_37656 = state_35693__$1;
(statearr_35706_37656[(1)] = (29));

} else {
var statearr_35707_37659 = state_35693__$1;
(statearr_35707_37659[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (4))){
var inst_35599 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35599)){
var statearr_35709_37664 = state_35693__$1;
(statearr_35709_37664[(1)] = (8));

} else {
var statearr_35711_37666 = state_35693__$1;
(statearr_35711_37666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (15))){
var inst_35630 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35630)){
var statearr_35712_37668 = state_35693__$1;
(statearr_35712_37668[(1)] = (19));

} else {
var statearr_35713_37669 = state_35693__$1;
(statearr_35713_37669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (21))){
var inst_35635 = (state_35693[(12)]);
var inst_35635__$1 = (state_35693[(2)]);
var inst_35636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35635__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35635__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35635__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35693__$1 = (function (){var statearr_35715 = state_35693;
(statearr_35715[(9)] = inst_35636);

(statearr_35715[(12)] = inst_35635__$1);

(statearr_35715[(13)] = inst_35637);

return statearr_35715;
})();
return cljs.core.async.ioc_alts_BANG_(state_35693__$1,(22),inst_35638);
} else {
if((state_val_35694 === (31))){
var inst_35671 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35671)){
var statearr_35719_37673 = state_35693__$1;
(statearr_35719_37673[(1)] = (32));

} else {
var statearr_35722_37674 = state_35693__$1;
(statearr_35722_37674[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (32))){
var inst_35644 = (state_35693[(14)]);
var state_35693__$1 = state_35693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35693__$1,(35),out,inst_35644);
} else {
if((state_val_35694 === (33))){
var inst_35635 = (state_35693[(12)]);
var inst_35609 = inst_35635;
var state_35693__$1 = (function (){var statearr_35725 = state_35693;
(statearr_35725[(7)] = inst_35609);

return statearr_35725;
})();
var statearr_35726_37677 = state_35693__$1;
(statearr_35726_37677[(2)] = null);

(statearr_35726_37677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (13))){
var inst_35609 = (state_35693[(7)]);
var inst_35618 = inst_35609.cljs$lang$protocol_mask$partition0$;
var inst_35619 = (inst_35618 & (64));
var inst_35621 = inst_35609.cljs$core$ISeq$;
var inst_35622 = (cljs.core.PROTOCOL_SENTINEL === inst_35621);
var inst_35623 = ((inst_35619) || (inst_35622));
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35623)){
var statearr_35729_37680 = state_35693__$1;
(statearr_35729_37680[(1)] = (16));

} else {
var statearr_35731_37681 = state_35693__$1;
(statearr_35731_37681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (22))){
var inst_35644 = (state_35693[(14)]);
var inst_35645 = (state_35693[(11)]);
var inst_35643 = (state_35693[(2)]);
var inst_35644__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35643,(0),null);
var inst_35645__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35643,(1),null);
var inst_35646 = (inst_35644__$1 == null);
var inst_35647 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35645__$1,change);
var inst_35648 = ((inst_35646) || (inst_35647));
var state_35693__$1 = (function (){var statearr_35743 = state_35693;
(statearr_35743[(14)] = inst_35644__$1);

(statearr_35743[(11)] = inst_35645__$1);

return statearr_35743;
})();
if(cljs.core.truth_(inst_35648)){
var statearr_35745_37686 = state_35693__$1;
(statearr_35745_37686[(1)] = (23));

} else {
var statearr_35746_37687 = state_35693__$1;
(statearr_35746_37687[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (36))){
var inst_35635 = (state_35693[(12)]);
var inst_35609 = inst_35635;
var state_35693__$1 = (function (){var statearr_35753 = state_35693;
(statearr_35753[(7)] = inst_35609);

return statearr_35753;
})();
var statearr_35754_37691 = state_35693__$1;
(statearr_35754_37691[(2)] = null);

(statearr_35754_37691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (29))){
var inst_35663 = (state_35693[(10)]);
var state_35693__$1 = state_35693;
var statearr_35755_37692 = state_35693__$1;
(statearr_35755_37692[(2)] = inst_35663);

(statearr_35755_37692[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (6))){
var state_35693__$1 = state_35693;
var statearr_35756_37694 = state_35693__$1;
(statearr_35756_37694[(2)] = false);

(statearr_35756_37694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (28))){
var inst_35658 = (state_35693[(2)]);
var inst_35660 = calc_state();
var inst_35609 = inst_35660;
var state_35693__$1 = (function (){var statearr_35759 = state_35693;
(statearr_35759[(7)] = inst_35609);

(statearr_35759[(15)] = inst_35658);

return statearr_35759;
})();
var statearr_35762_37696 = state_35693__$1;
(statearr_35762_37696[(2)] = null);

(statearr_35762_37696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (25))){
var inst_35687 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35764_37697 = state_35693__$1;
(statearr_35764_37697[(2)] = inst_35687);

(statearr_35764_37697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (34))){
var inst_35685 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35765_37698 = state_35693__$1;
(statearr_35765_37698[(2)] = inst_35685);

(statearr_35765_37698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (17))){
var state_35693__$1 = state_35693;
var statearr_35767_37700 = state_35693__$1;
(statearr_35767_37700[(2)] = false);

(statearr_35767_37700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (3))){
var state_35693__$1 = state_35693;
var statearr_35769_37704 = state_35693__$1;
(statearr_35769_37704[(2)] = false);

(statearr_35769_37704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (12))){
var inst_35689 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35693__$1,inst_35689);
} else {
if((state_val_35694 === (2))){
var inst_35581 = (state_35693[(8)]);
var inst_35588 = inst_35581.cljs$lang$protocol_mask$partition0$;
var inst_35589 = (inst_35588 & (64));
var inst_35590 = inst_35581.cljs$core$ISeq$;
var inst_35591 = (cljs.core.PROTOCOL_SENTINEL === inst_35590);
var inst_35592 = ((inst_35589) || (inst_35591));
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35592)){
var statearr_35772_37711 = state_35693__$1;
(statearr_35772_37711[(1)] = (5));

} else {
var statearr_35773_37713 = state_35693__$1;
(statearr_35773_37713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (23))){
var inst_35644 = (state_35693[(14)]);
var inst_35650 = (inst_35644 == null);
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35650)){
var statearr_35776_37716 = state_35693__$1;
(statearr_35776_37716[(1)] = (26));

} else {
var statearr_35777_37717 = state_35693__$1;
(statearr_35777_37717[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (35))){
var inst_35674 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
if(cljs.core.truth_(inst_35674)){
var statearr_35779_37719 = state_35693__$1;
(statearr_35779_37719[(1)] = (36));

} else {
var statearr_35780_37722 = state_35693__$1;
(statearr_35780_37722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (19))){
var inst_35609 = (state_35693[(7)]);
var inst_35632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35609);
var state_35693__$1 = state_35693;
var statearr_35781_37725 = state_35693__$1;
(statearr_35781_37725[(2)] = inst_35632);

(statearr_35781_37725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (11))){
var inst_35609 = (state_35693[(7)]);
var inst_35614 = (inst_35609 == null);
var inst_35615 = cljs.core.not(inst_35614);
var state_35693__$1 = state_35693;
if(inst_35615){
var statearr_35783_37731 = state_35693__$1;
(statearr_35783_37731[(1)] = (13));

} else {
var statearr_35784_37735 = state_35693__$1;
(statearr_35784_37735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (9))){
var inst_35581 = (state_35693[(8)]);
var state_35693__$1 = state_35693;
var statearr_35785_37737 = state_35693__$1;
(statearr_35785_37737[(2)] = inst_35581);

(statearr_35785_37737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (5))){
var state_35693__$1 = state_35693;
var statearr_35787_37739 = state_35693__$1;
(statearr_35787_37739[(2)] = true);

(statearr_35787_37739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (14))){
var state_35693__$1 = state_35693;
var statearr_35788_37741 = state_35693__$1;
(statearr_35788_37741[(2)] = false);

(statearr_35788_37741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (26))){
var inst_35645 = (state_35693[(11)]);
var inst_35655 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35645);
var state_35693__$1 = state_35693;
var statearr_35793_37748 = state_35693__$1;
(statearr_35793_37748[(2)] = inst_35655);

(statearr_35793_37748[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (16))){
var state_35693__$1 = state_35693;
var statearr_35795_37750 = state_35693__$1;
(statearr_35795_37750[(2)] = true);

(statearr_35795_37750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (38))){
var inst_35680 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35799_37752 = state_35693__$1;
(statearr_35799_37752[(2)] = inst_35680);

(statearr_35799_37752[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (30))){
var inst_35636 = (state_35693[(9)]);
var inst_35637 = (state_35693[(13)]);
var inst_35645 = (state_35693[(11)]);
var inst_35666 = cljs.core.empty_QMARK_(inst_35636);
var inst_35667 = (inst_35637.cljs$core$IFn$_invoke$arity$1 ? inst_35637.cljs$core$IFn$_invoke$arity$1(inst_35645) : inst_35637.call(null,inst_35645));
var inst_35668 = cljs.core.not(inst_35667);
var inst_35669 = ((inst_35666) && (inst_35668));
var state_35693__$1 = state_35693;
var statearr_35805_37760 = state_35693__$1;
(statearr_35805_37760[(2)] = inst_35669);

(statearr_35805_37760[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (10))){
var inst_35581 = (state_35693[(8)]);
var inst_35604 = (state_35693[(2)]);
var inst_35605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35604,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35604,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35604,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35609 = inst_35581;
var state_35693__$1 = (function (){var statearr_35810 = state_35693;
(statearr_35810[(16)] = inst_35605);

(statearr_35810[(17)] = inst_35608);

(statearr_35810[(7)] = inst_35609);

(statearr_35810[(18)] = inst_35606);

return statearr_35810;
})();
var statearr_35811_37770 = state_35693__$1;
(statearr_35811_37770[(2)] = null);

(statearr_35811_37770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (18))){
var inst_35627 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35812_37772 = state_35693__$1;
(statearr_35812_37772[(2)] = inst_35627);

(statearr_35812_37772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (37))){
var state_35693__$1 = state_35693;
var statearr_35815_37774 = state_35693__$1;
(statearr_35815_37774[(2)] = null);

(statearr_35815_37774[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (8))){
var inst_35581 = (state_35693[(8)]);
var inst_35601 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35581);
var state_35693__$1 = state_35693;
var statearr_35817_37776 = state_35693__$1;
(statearr_35817_37776[(2)] = inst_35601);

(statearr_35817_37776[(1)] = (10));


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
var statearr_35822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35822[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35822[(1)] = (1));

return statearr_35822;
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
}catch (e35823){if((e35823 instanceof Object)){
var ex__34210__auto__ = e35823;
var statearr_35824_37786 = state_35693;
(statearr_35824_37786[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37788 = state_35693;
state_35693 = G__37788;
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
var state__34276__auto__ = (function (){var statearr_35828 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35828[(6)] = c__34274__auto___37628);

return statearr_35828;
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
var G__35854 = arguments.length;
switch (G__35854) {
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
var G__35873 = arguments.length;
switch (G__35873) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35868_SHARP_){
if(cljs.core.truth_((p1__35868_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35868_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35868_SHARP_.call(null,topic)))){
return p1__35868_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35868_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35882 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35883){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35883 = meta35883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35884,meta35883__$1){
var self__ = this;
var _35884__$1 = this;
return (new cljs.core.async.t_cljs$core$async35882(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35883__$1));
}));

(cljs.core.async.t_cljs$core$async35882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35884){
var self__ = this;
var _35884__$1 = this;
return self__.meta35883;
}));

(cljs.core.async.t_cljs$core$async35882.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35882.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35882.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35882.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35882.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35882.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35882.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35883","meta35883",-126102997,null)], null);
}));

(cljs.core.async.t_cljs$core$async35882.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35882");

(cljs.core.async.t_cljs$core$async35882.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35882");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35882.
 */
cljs.core.async.__GT_t_cljs$core$async35882 = (function cljs$core$async$__GT_t_cljs$core$async35882(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35883){
return (new cljs.core.async.t_cljs$core$async35882(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35883));
});

}

return (new cljs.core.async.t_cljs$core$async35882(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35985){
var state_val_35986 = (state_35985[(1)]);
if((state_val_35986 === (7))){
var inst_35979 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
var statearr_35991_37837 = state_35985__$1;
(statearr_35991_37837[(2)] = inst_35979);

(statearr_35991_37837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (20))){
var state_35985__$1 = state_35985;
var statearr_35993_37839 = state_35985__$1;
(statearr_35993_37839[(2)] = null);

(statearr_35993_37839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (1))){
var state_35985__$1 = state_35985;
var statearr_35996_37841 = state_35985__$1;
(statearr_35996_37841[(2)] = null);

(statearr_35996_37841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (24))){
var inst_35960 = (state_35985[(7)]);
var inst_35970 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35960);
var state_35985__$1 = state_35985;
var statearr_35998_37845 = state_35985__$1;
(statearr_35998_37845[(2)] = inst_35970);

(statearr_35998_37845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (4))){
var inst_35908 = (state_35985[(8)]);
var inst_35908__$1 = (state_35985[(2)]);
var inst_35909 = (inst_35908__$1 == null);
var state_35985__$1 = (function (){var statearr_35999 = state_35985;
(statearr_35999[(8)] = inst_35908__$1);

return statearr_35999;
})();
if(cljs.core.truth_(inst_35909)){
var statearr_36000_37850 = state_35985__$1;
(statearr_36000_37850[(1)] = (5));

} else {
var statearr_36001_37852 = state_35985__$1;
(statearr_36001_37852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (15))){
var inst_35954 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
var statearr_36002_37856 = state_35985__$1;
(statearr_36002_37856[(2)] = inst_35954);

(statearr_36002_37856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (21))){
var inst_35975 = (state_35985[(2)]);
var state_35985__$1 = (function (){var statearr_36003 = state_35985;
(statearr_36003[(9)] = inst_35975);

return statearr_36003;
})();
var statearr_36005_37860 = state_35985__$1;
(statearr_36005_37860[(2)] = null);

(statearr_36005_37860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (13))){
var inst_35933 = (state_35985[(10)]);
var inst_35936 = cljs.core.chunked_seq_QMARK_(inst_35933);
var state_35985__$1 = state_35985;
if(inst_35936){
var statearr_36008_37863 = state_35985__$1;
(statearr_36008_37863[(1)] = (16));

} else {
var statearr_36010_37866 = state_35985__$1;
(statearr_36010_37866[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (22))){
var inst_35967 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
if(cljs.core.truth_(inst_35967)){
var statearr_36013_37868 = state_35985__$1;
(statearr_36013_37868[(1)] = (23));

} else {
var statearr_36014_37870 = state_35985__$1;
(statearr_36014_37870[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (6))){
var inst_35963 = (state_35985[(11)]);
var inst_35908 = (state_35985[(8)]);
var inst_35960 = (state_35985[(7)]);
var inst_35960__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35908) : topic_fn.call(null,inst_35908));
var inst_35962 = cljs.core.deref(mults);
var inst_35963__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35962,inst_35960__$1);
var state_35985__$1 = (function (){var statearr_36015 = state_35985;
(statearr_36015[(11)] = inst_35963__$1);

(statearr_36015[(7)] = inst_35960__$1);

return statearr_36015;
})();
if(cljs.core.truth_(inst_35963__$1)){
var statearr_36016_37874 = state_35985__$1;
(statearr_36016_37874[(1)] = (19));

} else {
var statearr_36017_37876 = state_35985__$1;
(statearr_36017_37876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (25))){
var inst_35972 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
var statearr_36019_37877 = state_35985__$1;
(statearr_36019_37877[(2)] = inst_35972);

(statearr_36019_37877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (17))){
var inst_35933 = (state_35985[(10)]);
var inst_35945 = cljs.core.first(inst_35933);
var inst_35946 = cljs.core.async.muxch_STAR_(inst_35945);
var inst_35947 = cljs.core.async.close_BANG_(inst_35946);
var inst_35948 = cljs.core.next(inst_35933);
var inst_35918 = inst_35948;
var inst_35919 = null;
var inst_35920 = (0);
var inst_35921 = (0);
var state_35985__$1 = (function (){var statearr_36023 = state_35985;
(statearr_36023[(12)] = inst_35921);

(statearr_36023[(13)] = inst_35947);

(statearr_36023[(14)] = inst_35920);

(statearr_36023[(15)] = inst_35918);

(statearr_36023[(16)] = inst_35919);

return statearr_36023;
})();
var statearr_36024_37883 = state_35985__$1;
(statearr_36024_37883[(2)] = null);

(statearr_36024_37883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (3))){
var inst_35981 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35985__$1,inst_35981);
} else {
if((state_val_35986 === (12))){
var inst_35956 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
var statearr_36025_37889 = state_35985__$1;
(statearr_36025_37889[(2)] = inst_35956);

(statearr_36025_37889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (2))){
var state_35985__$1 = state_35985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35985__$1,(4),ch);
} else {
if((state_val_35986 === (23))){
var state_35985__$1 = state_35985;
var statearr_36026_37890 = state_35985__$1;
(statearr_36026_37890[(2)] = null);

(statearr_36026_37890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (19))){
var inst_35963 = (state_35985[(11)]);
var inst_35908 = (state_35985[(8)]);
var inst_35965 = cljs.core.async.muxch_STAR_(inst_35963);
var state_35985__$1 = state_35985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35985__$1,(22),inst_35965,inst_35908);
} else {
if((state_val_35986 === (11))){
var inst_35933 = (state_35985[(10)]);
var inst_35918 = (state_35985[(15)]);
var inst_35933__$1 = cljs.core.seq(inst_35918);
var state_35985__$1 = (function (){var statearr_36027 = state_35985;
(statearr_36027[(10)] = inst_35933__$1);

return statearr_36027;
})();
if(inst_35933__$1){
var statearr_36028_37896 = state_35985__$1;
(statearr_36028_37896[(1)] = (13));

} else {
var statearr_36029_37897 = state_35985__$1;
(statearr_36029_37897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (9))){
var inst_35958 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
var statearr_36030_37899 = state_35985__$1;
(statearr_36030_37899[(2)] = inst_35958);

(statearr_36030_37899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (5))){
var inst_35915 = cljs.core.deref(mults);
var inst_35916 = cljs.core.vals(inst_35915);
var inst_35917 = cljs.core.seq(inst_35916);
var inst_35918 = inst_35917;
var inst_35919 = null;
var inst_35920 = (0);
var inst_35921 = (0);
var state_35985__$1 = (function (){var statearr_36031 = state_35985;
(statearr_36031[(12)] = inst_35921);

(statearr_36031[(14)] = inst_35920);

(statearr_36031[(15)] = inst_35918);

(statearr_36031[(16)] = inst_35919);

return statearr_36031;
})();
var statearr_36032_37905 = state_35985__$1;
(statearr_36032_37905[(2)] = null);

(statearr_36032_37905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (14))){
var state_35985__$1 = state_35985;
var statearr_36036_37912 = state_35985__$1;
(statearr_36036_37912[(2)] = null);

(statearr_36036_37912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (16))){
var inst_35933 = (state_35985[(10)]);
var inst_35939 = cljs.core.chunk_first(inst_35933);
var inst_35941 = cljs.core.chunk_rest(inst_35933);
var inst_35942 = cljs.core.count(inst_35939);
var inst_35918 = inst_35941;
var inst_35919 = inst_35939;
var inst_35920 = inst_35942;
var inst_35921 = (0);
var state_35985__$1 = (function (){var statearr_36037 = state_35985;
(statearr_36037[(12)] = inst_35921);

(statearr_36037[(14)] = inst_35920);

(statearr_36037[(15)] = inst_35918);

(statearr_36037[(16)] = inst_35919);

return statearr_36037;
})();
var statearr_36038_37920 = state_35985__$1;
(statearr_36038_37920[(2)] = null);

(statearr_36038_37920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (10))){
var inst_35921 = (state_35985[(12)]);
var inst_35920 = (state_35985[(14)]);
var inst_35918 = (state_35985[(15)]);
var inst_35919 = (state_35985[(16)]);
var inst_35926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35919,inst_35921);
var inst_35927 = cljs.core.async.muxch_STAR_(inst_35926);
var inst_35928 = cljs.core.async.close_BANG_(inst_35927);
var inst_35929 = (inst_35921 + (1));
var tmp36033 = inst_35920;
var tmp36034 = inst_35918;
var tmp36035 = inst_35919;
var inst_35918__$1 = tmp36034;
var inst_35919__$1 = tmp36035;
var inst_35920__$1 = tmp36033;
var inst_35921__$1 = inst_35929;
var state_35985__$1 = (function (){var statearr_36040 = state_35985;
(statearr_36040[(12)] = inst_35921__$1);

(statearr_36040[(17)] = inst_35928);

(statearr_36040[(14)] = inst_35920__$1);

(statearr_36040[(15)] = inst_35918__$1);

(statearr_36040[(16)] = inst_35919__$1);

return statearr_36040;
})();
var statearr_36041_37927 = state_35985__$1;
(statearr_36041_37927[(2)] = null);

(statearr_36041_37927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (18))){
var inst_35951 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
var statearr_36043_37931 = state_35985__$1;
(statearr_36043_37931[(2)] = inst_35951);

(statearr_36043_37931[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (8))){
var inst_35921 = (state_35985[(12)]);
var inst_35920 = (state_35985[(14)]);
var inst_35923 = (inst_35921 < inst_35920);
var inst_35924 = inst_35923;
var state_35985__$1 = state_35985;
if(cljs.core.truth_(inst_35924)){
var statearr_36044_37932 = state_35985__$1;
(statearr_36044_37932[(1)] = (10));

} else {
var statearr_36045_37934 = state_35985__$1;
(statearr_36045_37934[(1)] = (11));

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
var statearr_36049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36049[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36049[(1)] = (1));

return statearr_36049;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35985){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35985);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36051){if((e36051 instanceof Object)){
var ex__34210__auto__ = e36051;
var statearr_36052_37939 = state_35985;
(statearr_36052_37939[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37941 = state_35985;
state_35985 = G__37941;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36056 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36056[(6)] = c__34274__auto___37836);

return statearr_36056;
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
var G__36059 = arguments.length;
switch (G__36059) {
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
var G__36068 = arguments.length;
switch (G__36068) {
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
var G__36072 = arguments.length;
switch (G__36072) {
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
var c__34274__auto___37957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36115){
var state_val_36116 = (state_36115[(1)]);
if((state_val_36116 === (7))){
var state_36115__$1 = state_36115;
var statearr_36117_37958 = state_36115__$1;
(statearr_36117_37958[(2)] = null);

(statearr_36117_37958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (1))){
var state_36115__$1 = state_36115;
var statearr_36118_37959 = state_36115__$1;
(statearr_36118_37959[(2)] = null);

(statearr_36118_37959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (4))){
var inst_36079 = (state_36115[(7)]);
var inst_36081 = (inst_36079 < cnt);
var state_36115__$1 = state_36115;
if(cljs.core.truth_(inst_36081)){
var statearr_36119_37960 = state_36115__$1;
(statearr_36119_37960[(1)] = (6));

} else {
var statearr_36120_37961 = state_36115__$1;
(statearr_36120_37961[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (15))){
var inst_36111 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36121_37962 = state_36115__$1;
(statearr_36121_37962[(2)] = inst_36111);

(statearr_36121_37962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (13))){
var inst_36104 = cljs.core.async.close_BANG_(out);
var state_36115__$1 = state_36115;
var statearr_36122_37963 = state_36115__$1;
(statearr_36122_37963[(2)] = inst_36104);

(statearr_36122_37963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (6))){
var state_36115__$1 = state_36115;
var statearr_36123_37964 = state_36115__$1;
(statearr_36123_37964[(2)] = null);

(statearr_36123_37964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (3))){
var inst_36113 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36115__$1,inst_36113);
} else {
if((state_val_36116 === (12))){
var inst_36101 = (state_36115[(8)]);
var inst_36101__$1 = (state_36115[(2)]);
var inst_36102 = cljs.core.some(cljs.core.nil_QMARK_,inst_36101__$1);
var state_36115__$1 = (function (){var statearr_36131 = state_36115;
(statearr_36131[(8)] = inst_36101__$1);

return statearr_36131;
})();
if(cljs.core.truth_(inst_36102)){
var statearr_36132_37965 = state_36115__$1;
(statearr_36132_37965[(1)] = (13));

} else {
var statearr_36133_37966 = state_36115__$1;
(statearr_36133_37966[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (2))){
var inst_36078 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36079 = (0);
var state_36115__$1 = (function (){var statearr_36134 = state_36115;
(statearr_36134[(9)] = inst_36078);

(statearr_36134[(7)] = inst_36079);

return statearr_36134;
})();
var statearr_36135_37967 = state_36115__$1;
(statearr_36135_37967[(2)] = null);

(statearr_36135_37967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (11))){
var inst_36079 = (state_36115[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36115,(10),Object,null,(9));
var inst_36088 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36079) : chs__$1.call(null,inst_36079));
var inst_36089 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36079) : done.call(null,inst_36079));
var inst_36090 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36088,inst_36089);
var state_36115__$1 = state_36115;
var statearr_36137_37971 = state_36115__$1;
(statearr_36137_37971[(2)] = inst_36090);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (9))){
var inst_36079 = (state_36115[(7)]);
var inst_36092 = (state_36115[(2)]);
var inst_36093 = (inst_36079 + (1));
var inst_36079__$1 = inst_36093;
var state_36115__$1 = (function (){var statearr_36140 = state_36115;
(statearr_36140[(10)] = inst_36092);

(statearr_36140[(7)] = inst_36079__$1);

return statearr_36140;
})();
var statearr_36142_37972 = state_36115__$1;
(statearr_36142_37972[(2)] = null);

(statearr_36142_37972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (5))){
var inst_36099 = (state_36115[(2)]);
var state_36115__$1 = (function (){var statearr_36144 = state_36115;
(statearr_36144[(11)] = inst_36099);

return statearr_36144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36115__$1,(12),dchan);
} else {
if((state_val_36116 === (14))){
var inst_36101 = (state_36115[(8)]);
var inst_36106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36101);
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36115__$1,(16),out,inst_36106);
} else {
if((state_val_36116 === (16))){
var inst_36108 = (state_36115[(2)]);
var state_36115__$1 = (function (){var statearr_36146 = state_36115;
(statearr_36146[(12)] = inst_36108);

return statearr_36146;
})();
var statearr_36148_37977 = state_36115__$1;
(statearr_36148_37977[(2)] = null);

(statearr_36148_37977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (10))){
var inst_36083 = (state_36115[(2)]);
var inst_36084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36115__$1 = (function (){var statearr_36149 = state_36115;
(statearr_36149[(13)] = inst_36083);

return statearr_36149;
})();
var statearr_36150_37978 = state_36115__$1;
(statearr_36150_37978[(2)] = inst_36084);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (8))){
var inst_36097 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36151_37979 = state_36115__$1;
(statearr_36151_37979[(2)] = inst_36097);

(statearr_36151_37979[(1)] = (5));


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
var statearr_36152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36152[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36152[(1)] = (1));

return statearr_36152;
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
}catch (e36155){if((e36155 instanceof Object)){
var ex__34210__auto__ = e36155;
var statearr_36156_37981 = state_36115;
(statearr_36156_37981[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37982 = state_36115;
state_36115 = G__37982;
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
var state__34276__auto__ = (function (){var statearr_36157 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36157[(6)] = c__34274__auto___37957);

return statearr_36157;
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
var G__36161 = arguments.length;
switch (G__36161) {
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
var c__34274__auto___37988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36193){
var state_val_36194 = (state_36193[(1)]);
if((state_val_36194 === (7))){
var inst_36173 = (state_36193[(7)]);
var inst_36172 = (state_36193[(8)]);
var inst_36172__$1 = (state_36193[(2)]);
var inst_36173__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36172__$1,(0),null);
var inst_36174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36172__$1,(1),null);
var inst_36175 = (inst_36173__$1 == null);
var state_36193__$1 = (function (){var statearr_36195 = state_36193;
(statearr_36195[(7)] = inst_36173__$1);

(statearr_36195[(9)] = inst_36174);

(statearr_36195[(8)] = inst_36172__$1);

return statearr_36195;
})();
if(cljs.core.truth_(inst_36175)){
var statearr_36196_37991 = state_36193__$1;
(statearr_36196_37991[(1)] = (8));

} else {
var statearr_36197_37994 = state_36193__$1;
(statearr_36197_37994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (1))){
var inst_36162 = cljs.core.vec(chs);
var inst_36163 = inst_36162;
var state_36193__$1 = (function (){var statearr_36198 = state_36193;
(statearr_36198[(10)] = inst_36163);

return statearr_36198;
})();
var statearr_36199_37995 = state_36193__$1;
(statearr_36199_37995[(2)] = null);

(statearr_36199_37995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (4))){
var inst_36163 = (state_36193[(10)]);
var state_36193__$1 = state_36193;
return cljs.core.async.ioc_alts_BANG_(state_36193__$1,(7),inst_36163);
} else {
if((state_val_36194 === (6))){
var inst_36189 = (state_36193[(2)]);
var state_36193__$1 = state_36193;
var statearr_36200_37998 = state_36193__$1;
(statearr_36200_37998[(2)] = inst_36189);

(statearr_36200_37998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (3))){
var inst_36191 = (state_36193[(2)]);
var state_36193__$1 = state_36193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36193__$1,inst_36191);
} else {
if((state_val_36194 === (2))){
var inst_36163 = (state_36193[(10)]);
var inst_36165 = cljs.core.count(inst_36163);
var inst_36166 = (inst_36165 > (0));
var state_36193__$1 = state_36193;
if(cljs.core.truth_(inst_36166)){
var statearr_36202_38000 = state_36193__$1;
(statearr_36202_38000[(1)] = (4));

} else {
var statearr_36203_38001 = state_36193__$1;
(statearr_36203_38001[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (11))){
var inst_36163 = (state_36193[(10)]);
var inst_36182 = (state_36193[(2)]);
var tmp36201 = inst_36163;
var inst_36163__$1 = tmp36201;
var state_36193__$1 = (function (){var statearr_36206 = state_36193;
(statearr_36206[(11)] = inst_36182);

(statearr_36206[(10)] = inst_36163__$1);

return statearr_36206;
})();
var statearr_36209_38002 = state_36193__$1;
(statearr_36209_38002[(2)] = null);

(statearr_36209_38002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (9))){
var inst_36173 = (state_36193[(7)]);
var state_36193__$1 = state_36193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36193__$1,(11),out,inst_36173);
} else {
if((state_val_36194 === (5))){
var inst_36187 = cljs.core.async.close_BANG_(out);
var state_36193__$1 = state_36193;
var statearr_36214_38004 = state_36193__$1;
(statearr_36214_38004[(2)] = inst_36187);

(statearr_36214_38004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (10))){
var inst_36185 = (state_36193[(2)]);
var state_36193__$1 = state_36193;
var statearr_36216_38007 = state_36193__$1;
(statearr_36216_38007[(2)] = inst_36185);

(statearr_36216_38007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (8))){
var inst_36173 = (state_36193[(7)]);
var inst_36174 = (state_36193[(9)]);
var inst_36172 = (state_36193[(8)]);
var inst_36163 = (state_36193[(10)]);
var inst_36177 = (function (){var cs = inst_36163;
var vec__36168 = inst_36172;
var v = inst_36173;
var c = inst_36174;
return (function (p1__36158_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36158_SHARP_);
});
})();
var inst_36178 = cljs.core.filterv(inst_36177,inst_36163);
var inst_36163__$1 = inst_36178;
var state_36193__$1 = (function (){var statearr_36218 = state_36193;
(statearr_36218[(10)] = inst_36163__$1);

return statearr_36218;
})();
var statearr_36220_38012 = state_36193__$1;
(statearr_36220_38012[(2)] = null);

(statearr_36220_38012[(1)] = (2));


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
var statearr_36230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36230[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36230[(1)] = (1));

return statearr_36230;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36193){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36193);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36231){if((e36231 instanceof Object)){
var ex__34210__auto__ = e36231;
var statearr_36232_38014 = state_36193;
(statearr_36232_38014[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36231;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38019 = state_36193;
state_36193 = G__38019;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36233 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36233[(6)] = c__34274__auto___37988);

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
var c__34274__auto___38022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36265){
var state_val_36266 = (state_36265[(1)]);
if((state_val_36266 === (7))){
var inst_36246 = (state_36265[(7)]);
var inst_36246__$1 = (state_36265[(2)]);
var inst_36247 = (inst_36246__$1 == null);
var inst_36248 = cljs.core.not(inst_36247);
var state_36265__$1 = (function (){var statearr_36268 = state_36265;
(statearr_36268[(7)] = inst_36246__$1);

return statearr_36268;
})();
if(inst_36248){
var statearr_36269_38027 = state_36265__$1;
(statearr_36269_38027[(1)] = (8));

} else {
var statearr_36270_38028 = state_36265__$1;
(statearr_36270_38028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (1))){
var inst_36241 = (0);
var state_36265__$1 = (function (){var statearr_36271 = state_36265;
(statearr_36271[(8)] = inst_36241);

return statearr_36271;
})();
var statearr_36274_38029 = state_36265__$1;
(statearr_36274_38029[(2)] = null);

(statearr_36274_38029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (4))){
var state_36265__$1 = state_36265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36265__$1,(7),ch);
} else {
if((state_val_36266 === (6))){
var inst_36259 = (state_36265[(2)]);
var state_36265__$1 = state_36265;
var statearr_36275_38030 = state_36265__$1;
(statearr_36275_38030[(2)] = inst_36259);

(statearr_36275_38030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (3))){
var inst_36261 = (state_36265[(2)]);
var inst_36262 = cljs.core.async.close_BANG_(out);
var state_36265__$1 = (function (){var statearr_36276 = state_36265;
(statearr_36276[(9)] = inst_36261);

return statearr_36276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36265__$1,inst_36262);
} else {
if((state_val_36266 === (2))){
var inst_36241 = (state_36265[(8)]);
var inst_36243 = (inst_36241 < n);
var state_36265__$1 = state_36265;
if(cljs.core.truth_(inst_36243)){
var statearr_36280_38034 = state_36265__$1;
(statearr_36280_38034[(1)] = (4));

} else {
var statearr_36281_38035 = state_36265__$1;
(statearr_36281_38035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (11))){
var inst_36241 = (state_36265[(8)]);
var inst_36251 = (state_36265[(2)]);
var inst_36252 = (inst_36241 + (1));
var inst_36241__$1 = inst_36252;
var state_36265__$1 = (function (){var statearr_36283 = state_36265;
(statearr_36283[(8)] = inst_36241__$1);

(statearr_36283[(10)] = inst_36251);

return statearr_36283;
})();
var statearr_36284_38036 = state_36265__$1;
(statearr_36284_38036[(2)] = null);

(statearr_36284_38036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (9))){
var state_36265__$1 = state_36265;
var statearr_36286_38037 = state_36265__$1;
(statearr_36286_38037[(2)] = null);

(statearr_36286_38037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (5))){
var state_36265__$1 = state_36265;
var statearr_36294_38040 = state_36265__$1;
(statearr_36294_38040[(2)] = null);

(statearr_36294_38040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (10))){
var inst_36256 = (state_36265[(2)]);
var state_36265__$1 = state_36265;
var statearr_36295_38041 = state_36265__$1;
(statearr_36295_38041[(2)] = inst_36256);

(statearr_36295_38041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (8))){
var inst_36246 = (state_36265[(7)]);
var state_36265__$1 = state_36265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36265__$1,(11),out,inst_36246);
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
var statearr_36297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36297[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36297[(1)] = (1));

return statearr_36297;
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
}catch (e36299){if((e36299 instanceof Object)){
var ex__34210__auto__ = e36299;
var statearr_36300_38044 = state_36265;
(statearr_36300_38044[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38046 = state_36265;
state_36265 = G__38046;
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
var state__34276__auto__ = (function (){var statearr_36303 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36303[(6)] = c__34274__auto___38022);

return statearr_36303;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36307 = (function (f,ch,meta36308){
this.f = f;
this.ch = ch;
this.meta36308 = meta36308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36309,meta36308__$1){
var self__ = this;
var _36309__$1 = this;
return (new cljs.core.async.t_cljs$core$async36307(self__.f,self__.ch,meta36308__$1));
}));

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36309){
var self__ = this;
var _36309__$1 = this;
return self__.meta36308;
}));

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
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
cljs.core.async.t_cljs$core$async36313 = (function (f,ch,meta36308,_,fn1,meta36314){
this.f = f;
this.ch = ch;
this.meta36308 = meta36308;
this._ = _;
this.fn1 = fn1;
this.meta36314 = meta36314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36315,meta36314__$1){
var self__ = this;
var _36315__$1 = this;
return (new cljs.core.async.t_cljs$core$async36313(self__.f,self__.ch,self__.meta36308,self__._,self__.fn1,meta36314__$1));
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
return (function (p1__36305_SHARP_){
var G__36325 = (((p1__36305_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36305_SHARP_) : self__.f.call(null,p1__36305_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36325) : f1.call(null,G__36325));
});
}));

(cljs.core.async.t_cljs$core$async36313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36308","meta36308",-1902506456,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36307","cljs.core.async/t_cljs$core$async36307",-1553210153,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36314","meta36314",-1949065285,null)], null);
}));

(cljs.core.async.t_cljs$core$async36313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36313");

(cljs.core.async.t_cljs$core$async36313.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36313.
 */
cljs.core.async.__GT_t_cljs$core$async36313 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36313(f__$1,ch__$1,meta36308__$1,___$2,fn1__$1,meta36314){
return (new cljs.core.async.t_cljs$core$async36313(f__$1,ch__$1,meta36308__$1,___$2,fn1__$1,meta36314));
});

}

return (new cljs.core.async.t_cljs$core$async36313(self__.f,self__.ch,self__.meta36308,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36308","meta36308",-1902506456,null)], null);
}));

(cljs.core.async.t_cljs$core$async36307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36307");

(cljs.core.async.t_cljs$core$async36307.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36307.
 */
cljs.core.async.__GT_t_cljs$core$async36307 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36307(f__$1,ch__$1,meta36308){
return (new cljs.core.async.t_cljs$core$async36307(f__$1,ch__$1,meta36308));
});

}

return (new cljs.core.async.t_cljs$core$async36307(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36354 = (function (p,ch,meta36355){
this.p = p;
this.ch = ch;
this.meta36355 = meta36355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36356,meta36355__$1){
var self__ = this;
var _36356__$1 = this;
return (new cljs.core.async.t_cljs$core$async36354(self__.p,self__.ch,meta36355__$1));
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36356){
var self__ = this;
var _36356__$1 = this;
return self__.meta36355;
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36355","meta36355",673399743,null)], null);
}));

(cljs.core.async.t_cljs$core$async36354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36354");

(cljs.core.async.t_cljs$core$async36354.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36354.
 */
cljs.core.async.__GT_t_cljs$core$async36354 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36354(p__$1,ch__$1,meta36355){
return (new cljs.core.async.t_cljs$core$async36354(p__$1,ch__$1,meta36355));
});

}

return (new cljs.core.async.t_cljs$core$async36354(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36369 = arguments.length;
switch (G__36369) {
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
var c__34274__auto___38070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36400){
var state_val_36401 = (state_36400[(1)]);
if((state_val_36401 === (7))){
var inst_36396 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
var statearr_36402_38071 = state_36400__$1;
(statearr_36402_38071[(2)] = inst_36396);

(statearr_36402_38071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (1))){
var state_36400__$1 = state_36400;
var statearr_36406_38072 = state_36400__$1;
(statearr_36406_38072[(2)] = null);

(statearr_36406_38072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (4))){
var inst_36381 = (state_36400[(7)]);
var inst_36381__$1 = (state_36400[(2)]);
var inst_36383 = (inst_36381__$1 == null);
var state_36400__$1 = (function (){var statearr_36407 = state_36400;
(statearr_36407[(7)] = inst_36381__$1);

return statearr_36407;
})();
if(cljs.core.truth_(inst_36383)){
var statearr_36408_38074 = state_36400__$1;
(statearr_36408_38074[(1)] = (5));

} else {
var statearr_36409_38076 = state_36400__$1;
(statearr_36409_38076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (6))){
var inst_36381 = (state_36400[(7)]);
var inst_36387 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36381) : p.call(null,inst_36381));
var state_36400__$1 = state_36400;
if(cljs.core.truth_(inst_36387)){
var statearr_36411_38078 = state_36400__$1;
(statearr_36411_38078[(1)] = (8));

} else {
var statearr_36412_38079 = state_36400__$1;
(statearr_36412_38079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (3))){
var inst_36398 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36400__$1,inst_36398);
} else {
if((state_val_36401 === (2))){
var state_36400__$1 = state_36400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36400__$1,(4),ch);
} else {
if((state_val_36401 === (11))){
var inst_36390 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
var statearr_36415_38080 = state_36400__$1;
(statearr_36415_38080[(2)] = inst_36390);

(statearr_36415_38080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (9))){
var state_36400__$1 = state_36400;
var statearr_36416_38083 = state_36400__$1;
(statearr_36416_38083[(2)] = null);

(statearr_36416_38083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (5))){
var inst_36385 = cljs.core.async.close_BANG_(out);
var state_36400__$1 = state_36400;
var statearr_36419_38085 = state_36400__$1;
(statearr_36419_38085[(2)] = inst_36385);

(statearr_36419_38085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (10))){
var inst_36393 = (state_36400[(2)]);
var state_36400__$1 = (function (){var statearr_36420 = state_36400;
(statearr_36420[(8)] = inst_36393);

return statearr_36420;
})();
var statearr_36421_38086 = state_36400__$1;
(statearr_36421_38086[(2)] = null);

(statearr_36421_38086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (8))){
var inst_36381 = (state_36400[(7)]);
var state_36400__$1 = state_36400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36400__$1,(11),out,inst_36381);
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
var statearr_36422 = [null,null,null,null,null,null,null,null,null];
(statearr_36422[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36422[(1)] = (1));

return statearr_36422;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36400){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36400);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36423){if((e36423 instanceof Object)){
var ex__34210__auto__ = e36423;
var statearr_36427_38090 = state_36400;
(statearr_36427_38090[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38091 = state_36400;
state_36400 = G__38091;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36434 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36434[(6)] = c__34274__auto___38070);

return statearr_36434;
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
var G__36438 = arguments.length;
switch (G__36438) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36520){
var state_val_36521 = (state_36520[(1)]);
if((state_val_36521 === (7))){
var inst_36515 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36522_38096 = state_36520__$1;
(statearr_36522_38096[(2)] = inst_36515);

(statearr_36522_38096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (20))){
var inst_36482 = (state_36520[(7)]);
var inst_36496 = (state_36520[(2)]);
var inst_36497 = cljs.core.next(inst_36482);
var inst_36463 = inst_36497;
var inst_36464 = null;
var inst_36465 = (0);
var inst_36466 = (0);
var state_36520__$1 = (function (){var statearr_36525 = state_36520;
(statearr_36525[(8)] = inst_36466);

(statearr_36525[(9)] = inst_36465);

(statearr_36525[(10)] = inst_36463);

(statearr_36525[(11)] = inst_36496);

(statearr_36525[(12)] = inst_36464);

return statearr_36525;
})();
var statearr_36526_38100 = state_36520__$1;
(statearr_36526_38100[(2)] = null);

(statearr_36526_38100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (1))){
var state_36520__$1 = state_36520;
var statearr_36528_38101 = state_36520__$1;
(statearr_36528_38101[(2)] = null);

(statearr_36528_38101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (4))){
var inst_36451 = (state_36520[(13)]);
var inst_36451__$1 = (state_36520[(2)]);
var inst_36452 = (inst_36451__$1 == null);
var state_36520__$1 = (function (){var statearr_36531 = state_36520;
(statearr_36531[(13)] = inst_36451__$1);

return statearr_36531;
})();
if(cljs.core.truth_(inst_36452)){
var statearr_36532_38102 = state_36520__$1;
(statearr_36532_38102[(1)] = (5));

} else {
var statearr_36533_38104 = state_36520__$1;
(statearr_36533_38104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (15))){
var state_36520__$1 = state_36520;
var statearr_36539_38106 = state_36520__$1;
(statearr_36539_38106[(2)] = null);

(statearr_36539_38106[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (21))){
var state_36520__$1 = state_36520;
var statearr_36540_38108 = state_36520__$1;
(statearr_36540_38108[(2)] = null);

(statearr_36540_38108[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (13))){
var inst_36466 = (state_36520[(8)]);
var inst_36465 = (state_36520[(9)]);
var inst_36463 = (state_36520[(10)]);
var inst_36464 = (state_36520[(12)]);
var inst_36474 = (state_36520[(2)]);
var inst_36476 = (inst_36466 + (1));
var tmp36536 = inst_36465;
var tmp36537 = inst_36463;
var tmp36538 = inst_36464;
var inst_36463__$1 = tmp36537;
var inst_36464__$1 = tmp36538;
var inst_36465__$1 = tmp36536;
var inst_36466__$1 = inst_36476;
var state_36520__$1 = (function (){var statearr_36545 = state_36520;
(statearr_36545[(8)] = inst_36466__$1);

(statearr_36545[(9)] = inst_36465__$1);

(statearr_36545[(10)] = inst_36463__$1);

(statearr_36545[(14)] = inst_36474);

(statearr_36545[(12)] = inst_36464__$1);

return statearr_36545;
})();
var statearr_36546_38110 = state_36520__$1;
(statearr_36546_38110[(2)] = null);

(statearr_36546_38110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (22))){
var state_36520__$1 = state_36520;
var statearr_36547_38112 = state_36520__$1;
(statearr_36547_38112[(2)] = null);

(statearr_36547_38112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (6))){
var inst_36451 = (state_36520[(13)]);
var inst_36460 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36451) : f.call(null,inst_36451));
var inst_36461 = cljs.core.seq(inst_36460);
var inst_36463 = inst_36461;
var inst_36464 = null;
var inst_36465 = (0);
var inst_36466 = (0);
var state_36520__$1 = (function (){var statearr_36549 = state_36520;
(statearr_36549[(8)] = inst_36466);

(statearr_36549[(9)] = inst_36465);

(statearr_36549[(10)] = inst_36463);

(statearr_36549[(12)] = inst_36464);

return statearr_36549;
})();
var statearr_36550_38114 = state_36520__$1;
(statearr_36550_38114[(2)] = null);

(statearr_36550_38114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (17))){
var inst_36482 = (state_36520[(7)]);
var inst_36487 = cljs.core.chunk_first(inst_36482);
var inst_36489 = cljs.core.chunk_rest(inst_36482);
var inst_36490 = cljs.core.count(inst_36487);
var inst_36463 = inst_36489;
var inst_36464 = inst_36487;
var inst_36465 = inst_36490;
var inst_36466 = (0);
var state_36520__$1 = (function (){var statearr_36552 = state_36520;
(statearr_36552[(8)] = inst_36466);

(statearr_36552[(9)] = inst_36465);

(statearr_36552[(10)] = inst_36463);

(statearr_36552[(12)] = inst_36464);

return statearr_36552;
})();
var statearr_36553_38118 = state_36520__$1;
(statearr_36553_38118[(2)] = null);

(statearr_36553_38118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (3))){
var inst_36518 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36520__$1,inst_36518);
} else {
if((state_val_36521 === (12))){
var inst_36505 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36558_38119 = state_36520__$1;
(statearr_36558_38119[(2)] = inst_36505);

(statearr_36558_38119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (2))){
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36520__$1,(4),in$);
} else {
if((state_val_36521 === (23))){
var inst_36513 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36559_38121 = state_36520__$1;
(statearr_36559_38121[(2)] = inst_36513);

(statearr_36559_38121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (19))){
var inst_36500 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36561_38123 = state_36520__$1;
(statearr_36561_38123[(2)] = inst_36500);

(statearr_36561_38123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (11))){
var inst_36482 = (state_36520[(7)]);
var inst_36463 = (state_36520[(10)]);
var inst_36482__$1 = cljs.core.seq(inst_36463);
var state_36520__$1 = (function (){var statearr_36563 = state_36520;
(statearr_36563[(7)] = inst_36482__$1);

return statearr_36563;
})();
if(inst_36482__$1){
var statearr_36564_38125 = state_36520__$1;
(statearr_36564_38125[(1)] = (14));

} else {
var statearr_36565_38126 = state_36520__$1;
(statearr_36565_38126[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (9))){
var inst_36507 = (state_36520[(2)]);
var inst_36508 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36520__$1 = (function (){var statearr_36566 = state_36520;
(statearr_36566[(15)] = inst_36507);

return statearr_36566;
})();
if(cljs.core.truth_(inst_36508)){
var statearr_36568_38127 = state_36520__$1;
(statearr_36568_38127[(1)] = (21));

} else {
var statearr_36569_38129 = state_36520__$1;
(statearr_36569_38129[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (5))){
var inst_36454 = cljs.core.async.close_BANG_(out);
var state_36520__$1 = state_36520;
var statearr_36570_38131 = state_36520__$1;
(statearr_36570_38131[(2)] = inst_36454);

(statearr_36570_38131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (14))){
var inst_36482 = (state_36520[(7)]);
var inst_36485 = cljs.core.chunked_seq_QMARK_(inst_36482);
var state_36520__$1 = state_36520;
if(inst_36485){
var statearr_36572_38133 = state_36520__$1;
(statearr_36572_38133[(1)] = (17));

} else {
var statearr_36573_38134 = state_36520__$1;
(statearr_36573_38134[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (16))){
var inst_36503 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36574_38135 = state_36520__$1;
(statearr_36574_38135[(2)] = inst_36503);

(statearr_36574_38135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (10))){
var inst_36466 = (state_36520[(8)]);
var inst_36464 = (state_36520[(12)]);
var inst_36471 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36464,inst_36466);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36520__$1,(13),out,inst_36471);
} else {
if((state_val_36521 === (18))){
var inst_36482 = (state_36520[(7)]);
var inst_36493 = cljs.core.first(inst_36482);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36520__$1,(20),out,inst_36493);
} else {
if((state_val_36521 === (8))){
var inst_36466 = (state_36520[(8)]);
var inst_36465 = (state_36520[(9)]);
var inst_36468 = (inst_36466 < inst_36465);
var inst_36469 = inst_36468;
var state_36520__$1 = state_36520;
if(cljs.core.truth_(inst_36469)){
var statearr_36577_38138 = state_36520__$1;
(statearr_36577_38138[(1)] = (10));

} else {
var statearr_36578_38140 = state_36520__$1;
(statearr_36578_38140[(1)] = (11));

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
var statearr_36580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36580[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36580[(1)] = (1));

return statearr_36580;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36520){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36520);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36582){if((e36582 instanceof Object)){
var ex__34210__auto__ = e36582;
var statearr_36583_38141 = state_36520;
(statearr_36583_38141[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38142 = state_36520;
state_36520 = G__38142;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36520){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36585 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36585[(6)] = c__34274__auto__);

return statearr_36585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36588 = arguments.length;
switch (G__36588) {
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
var G__36593 = arguments.length;
switch (G__36593) {
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
var G__36598 = arguments.length;
switch (G__36598) {
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
var c__34274__auto___38149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36624){
var state_val_36625 = (state_36624[(1)]);
if((state_val_36625 === (7))){
var inst_36618 = (state_36624[(2)]);
var state_36624__$1 = state_36624;
var statearr_36626_38151 = state_36624__$1;
(statearr_36626_38151[(2)] = inst_36618);

(statearr_36626_38151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36625 === (1))){
var inst_36600 = null;
var state_36624__$1 = (function (){var statearr_36628 = state_36624;
(statearr_36628[(7)] = inst_36600);

return statearr_36628;
})();
var statearr_36629_38157 = state_36624__$1;
(statearr_36629_38157[(2)] = null);

(statearr_36629_38157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36625 === (4))){
var inst_36603 = (state_36624[(8)]);
var inst_36603__$1 = (state_36624[(2)]);
var inst_36604 = (inst_36603__$1 == null);
var inst_36605 = cljs.core.not(inst_36604);
var state_36624__$1 = (function (){var statearr_36631 = state_36624;
(statearr_36631[(8)] = inst_36603__$1);

return statearr_36631;
})();
if(inst_36605){
var statearr_36632_38158 = state_36624__$1;
(statearr_36632_38158[(1)] = (5));

} else {
var statearr_36633_38159 = state_36624__$1;
(statearr_36633_38159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36625 === (6))){
var state_36624__$1 = state_36624;
var statearr_36634_38160 = state_36624__$1;
(statearr_36634_38160[(2)] = null);

(statearr_36634_38160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36625 === (3))){
var inst_36620 = (state_36624[(2)]);
var inst_36622 = cljs.core.async.close_BANG_(out);
var state_36624__$1 = (function (){var statearr_36636 = state_36624;
(statearr_36636[(9)] = inst_36620);

return statearr_36636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36624__$1,inst_36622);
} else {
if((state_val_36625 === (2))){
var state_36624__$1 = state_36624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36624__$1,(4),ch);
} else {
if((state_val_36625 === (11))){
var inst_36603 = (state_36624[(8)]);
var inst_36612 = (state_36624[(2)]);
var inst_36600 = inst_36603;
var state_36624__$1 = (function (){var statearr_36638 = state_36624;
(statearr_36638[(7)] = inst_36600);

(statearr_36638[(10)] = inst_36612);

return statearr_36638;
})();
var statearr_36639_38167 = state_36624__$1;
(statearr_36639_38167[(2)] = null);

(statearr_36639_38167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36625 === (9))){
var inst_36603 = (state_36624[(8)]);
var state_36624__$1 = state_36624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36624__$1,(11),out,inst_36603);
} else {
if((state_val_36625 === (5))){
var inst_36600 = (state_36624[(7)]);
var inst_36603 = (state_36624[(8)]);
var inst_36607 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36603,inst_36600);
var state_36624__$1 = state_36624;
if(inst_36607){
var statearr_36642_38169 = state_36624__$1;
(statearr_36642_38169[(1)] = (8));

} else {
var statearr_36643_38170 = state_36624__$1;
(statearr_36643_38170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36625 === (10))){
var inst_36615 = (state_36624[(2)]);
var state_36624__$1 = state_36624;
var statearr_36644_38173 = state_36624__$1;
(statearr_36644_38173[(2)] = inst_36615);

(statearr_36644_38173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36625 === (8))){
var inst_36600 = (state_36624[(7)]);
var tmp36641 = inst_36600;
var inst_36600__$1 = tmp36641;
var state_36624__$1 = (function (){var statearr_36646 = state_36624;
(statearr_36646[(7)] = inst_36600__$1);

return statearr_36646;
})();
var statearr_36647_38174 = state_36624__$1;
(statearr_36647_38174[(2)] = null);

(statearr_36647_38174[(1)] = (2));


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
var statearr_36649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36649[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36649[(1)] = (1));

return statearr_36649;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36624){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36624);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36650){if((e36650 instanceof Object)){
var ex__34210__auto__ = e36650;
var statearr_36651_38176 = state_36624;
(statearr_36651_38176[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38178 = state_36624;
state_36624 = G__38178;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36653 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36653[(6)] = c__34274__auto___38149);

return statearr_36653;
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
var G__36656 = arguments.length;
switch (G__36656) {
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
var c__34274__auto___38181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36697){
var state_val_36698 = (state_36697[(1)]);
if((state_val_36698 === (7))){
var inst_36693 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
var statearr_36700_38183 = state_36697__$1;
(statearr_36700_38183[(2)] = inst_36693);

(statearr_36700_38183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (1))){
var inst_36659 = (new Array(n));
var inst_36660 = inst_36659;
var inst_36661 = (0);
var state_36697__$1 = (function (){var statearr_36701 = state_36697;
(statearr_36701[(7)] = inst_36661);

(statearr_36701[(8)] = inst_36660);

return statearr_36701;
})();
var statearr_36703_38185 = state_36697__$1;
(statearr_36703_38185[(2)] = null);

(statearr_36703_38185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (4))){
var inst_36664 = (state_36697[(9)]);
var inst_36664__$1 = (state_36697[(2)]);
var inst_36665 = (inst_36664__$1 == null);
var inst_36666 = cljs.core.not(inst_36665);
var state_36697__$1 = (function (){var statearr_36705 = state_36697;
(statearr_36705[(9)] = inst_36664__$1);

return statearr_36705;
})();
if(inst_36666){
var statearr_36706_38187 = state_36697__$1;
(statearr_36706_38187[(1)] = (5));

} else {
var statearr_36707_38188 = state_36697__$1;
(statearr_36707_38188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (15))){
var inst_36687 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
var statearr_36709_38190 = state_36697__$1;
(statearr_36709_38190[(2)] = inst_36687);

(statearr_36709_38190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (13))){
var state_36697__$1 = state_36697;
var statearr_36710_38191 = state_36697__$1;
(statearr_36710_38191[(2)] = null);

(statearr_36710_38191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (6))){
var inst_36661 = (state_36697[(7)]);
var inst_36683 = (inst_36661 > (0));
var state_36697__$1 = state_36697;
if(cljs.core.truth_(inst_36683)){
var statearr_36712_38194 = state_36697__$1;
(statearr_36712_38194[(1)] = (12));

} else {
var statearr_36713_38195 = state_36697__$1;
(statearr_36713_38195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (3))){
var inst_36695 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36697__$1,inst_36695);
} else {
if((state_val_36698 === (12))){
var inst_36660 = (state_36697[(8)]);
var inst_36685 = cljs.core.vec(inst_36660);
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36697__$1,(15),out,inst_36685);
} else {
if((state_val_36698 === (2))){
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36697__$1,(4),ch);
} else {
if((state_val_36698 === (11))){
var inst_36676 = (state_36697[(2)]);
var inst_36678 = (new Array(n));
var inst_36660 = inst_36678;
var inst_36661 = (0);
var state_36697__$1 = (function (){var statearr_36716 = state_36697;
(statearr_36716[(7)] = inst_36661);

(statearr_36716[(10)] = inst_36676);

(statearr_36716[(8)] = inst_36660);

return statearr_36716;
})();
var statearr_36717_38203 = state_36697__$1;
(statearr_36717_38203[(2)] = null);

(statearr_36717_38203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (9))){
var inst_36660 = (state_36697[(8)]);
var inst_36674 = cljs.core.vec(inst_36660);
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36697__$1,(11),out,inst_36674);
} else {
if((state_val_36698 === (5))){
var inst_36669 = (state_36697[(11)]);
var inst_36661 = (state_36697[(7)]);
var inst_36664 = (state_36697[(9)]);
var inst_36660 = (state_36697[(8)]);
var inst_36668 = (inst_36660[inst_36661] = inst_36664);
var inst_36669__$1 = (inst_36661 + (1));
var inst_36670 = (inst_36669__$1 < n);
var state_36697__$1 = (function (){var statearr_36720 = state_36697;
(statearr_36720[(11)] = inst_36669__$1);

(statearr_36720[(12)] = inst_36668);

return statearr_36720;
})();
if(cljs.core.truth_(inst_36670)){
var statearr_36721_38204 = state_36697__$1;
(statearr_36721_38204[(1)] = (8));

} else {
var statearr_36722_38206 = state_36697__$1;
(statearr_36722_38206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (14))){
var inst_36690 = (state_36697[(2)]);
var inst_36691 = cljs.core.async.close_BANG_(out);
var state_36697__$1 = (function (){var statearr_36725 = state_36697;
(statearr_36725[(13)] = inst_36690);

return statearr_36725;
})();
var statearr_36726_38207 = state_36697__$1;
(statearr_36726_38207[(2)] = inst_36691);

(statearr_36726_38207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (10))){
var inst_36681 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
var statearr_36727_38208 = state_36697__$1;
(statearr_36727_38208[(2)] = inst_36681);

(statearr_36727_38208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (8))){
var inst_36669 = (state_36697[(11)]);
var inst_36660 = (state_36697[(8)]);
var tmp36723 = inst_36660;
var inst_36660__$1 = tmp36723;
var inst_36661 = inst_36669;
var state_36697__$1 = (function (){var statearr_36729 = state_36697;
(statearr_36729[(7)] = inst_36661);

(statearr_36729[(8)] = inst_36660__$1);

return statearr_36729;
})();
var statearr_36730_38211 = state_36697__$1;
(statearr_36730_38211[(2)] = null);

(statearr_36730_38211[(1)] = (2));


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
var statearr_36732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36732[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36732[(1)] = (1));

return statearr_36732;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36697){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36697);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36733){if((e36733 instanceof Object)){
var ex__34210__auto__ = e36733;
var statearr_36734_38213 = state_36697;
(statearr_36734_38213[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38214 = state_36697;
state_36697 = G__38214;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36735 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36735[(6)] = c__34274__auto___38181);

return statearr_36735;
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
var G__36738 = arguments.length;
switch (G__36738) {
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
var c__34274__auto___38219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36784){
var state_val_36785 = (state_36784[(1)]);
if((state_val_36785 === (7))){
var inst_36780 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36788_38220 = state_36784__$1;
(statearr_36788_38220[(2)] = inst_36780);

(statearr_36788_38220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (1))){
var inst_36742 = [];
var inst_36743 = inst_36742;
var inst_36744 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36784__$1 = (function (){var statearr_36790 = state_36784;
(statearr_36790[(7)] = inst_36744);

(statearr_36790[(8)] = inst_36743);

return statearr_36790;
})();
var statearr_36791_38222 = state_36784__$1;
(statearr_36791_38222[(2)] = null);

(statearr_36791_38222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (4))){
var inst_36747 = (state_36784[(9)]);
var inst_36747__$1 = (state_36784[(2)]);
var inst_36748 = (inst_36747__$1 == null);
var inst_36749 = cljs.core.not(inst_36748);
var state_36784__$1 = (function (){var statearr_36793 = state_36784;
(statearr_36793[(9)] = inst_36747__$1);

return statearr_36793;
})();
if(inst_36749){
var statearr_36794_38223 = state_36784__$1;
(statearr_36794_38223[(1)] = (5));

} else {
var statearr_36795_38224 = state_36784__$1;
(statearr_36795_38224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (15))){
var inst_36774 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36797_38225 = state_36784__$1;
(statearr_36797_38225[(2)] = inst_36774);

(statearr_36797_38225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (13))){
var state_36784__$1 = state_36784;
var statearr_36798_38226 = state_36784__$1;
(statearr_36798_38226[(2)] = null);

(statearr_36798_38226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (6))){
var inst_36743 = (state_36784[(8)]);
var inst_36769 = inst_36743.length;
var inst_36770 = (inst_36769 > (0));
var state_36784__$1 = state_36784;
if(cljs.core.truth_(inst_36770)){
var statearr_36800_38229 = state_36784__$1;
(statearr_36800_38229[(1)] = (12));

} else {
var statearr_36801_38231 = state_36784__$1;
(statearr_36801_38231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (3))){
var inst_36782 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36784__$1,inst_36782);
} else {
if((state_val_36785 === (12))){
var inst_36743 = (state_36784[(8)]);
var inst_36772 = cljs.core.vec(inst_36743);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36784__$1,(15),out,inst_36772);
} else {
if((state_val_36785 === (2))){
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36784__$1,(4),ch);
} else {
if((state_val_36785 === (11))){
var inst_36751 = (state_36784[(10)]);
var inst_36747 = (state_36784[(9)]);
var inst_36761 = (state_36784[(2)]);
var inst_36763 = [];
var inst_36764 = inst_36763.push(inst_36747);
var inst_36743 = inst_36763;
var inst_36744 = inst_36751;
var state_36784__$1 = (function (){var statearr_36805 = state_36784;
(statearr_36805[(11)] = inst_36764);

(statearr_36805[(7)] = inst_36744);

(statearr_36805[(12)] = inst_36761);

(statearr_36805[(8)] = inst_36743);

return statearr_36805;
})();
var statearr_36807_38235 = state_36784__$1;
(statearr_36807_38235[(2)] = null);

(statearr_36807_38235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (9))){
var inst_36743 = (state_36784[(8)]);
var inst_36759 = cljs.core.vec(inst_36743);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36784__$1,(11),out,inst_36759);
} else {
if((state_val_36785 === (5))){
var inst_36751 = (state_36784[(10)]);
var inst_36744 = (state_36784[(7)]);
var inst_36747 = (state_36784[(9)]);
var inst_36751__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36747) : f.call(null,inst_36747));
var inst_36752 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36751__$1,inst_36744);
var inst_36753 = cljs.core.keyword_identical_QMARK_(inst_36744,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36754 = ((inst_36752) || (inst_36753));
var state_36784__$1 = (function (){var statearr_36809 = state_36784;
(statearr_36809[(10)] = inst_36751__$1);

return statearr_36809;
})();
if(cljs.core.truth_(inst_36754)){
var statearr_36810_38236 = state_36784__$1;
(statearr_36810_38236[(1)] = (8));

} else {
var statearr_36811_38237 = state_36784__$1;
(statearr_36811_38237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (14))){
var inst_36777 = (state_36784[(2)]);
var inst_36778 = cljs.core.async.close_BANG_(out);
var state_36784__$1 = (function (){var statearr_36814 = state_36784;
(statearr_36814[(13)] = inst_36777);

return statearr_36814;
})();
var statearr_36815_38239 = state_36784__$1;
(statearr_36815_38239[(2)] = inst_36778);

(statearr_36815_38239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (10))){
var inst_36767 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36817_38240 = state_36784__$1;
(statearr_36817_38240[(2)] = inst_36767);

(statearr_36817_38240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (8))){
var inst_36751 = (state_36784[(10)]);
var inst_36747 = (state_36784[(9)]);
var inst_36743 = (state_36784[(8)]);
var inst_36756 = inst_36743.push(inst_36747);
var tmp36813 = inst_36743;
var inst_36743__$1 = tmp36813;
var inst_36744 = inst_36751;
var state_36784__$1 = (function (){var statearr_36818 = state_36784;
(statearr_36818[(7)] = inst_36744);

(statearr_36818[(14)] = inst_36756);

(statearr_36818[(8)] = inst_36743__$1);

return statearr_36818;
})();
var statearr_36820_38241 = state_36784__$1;
(statearr_36820_38241[(2)] = null);

(statearr_36820_38241[(1)] = (2));


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
var statearr_36821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36821[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36821[(1)] = (1));

return statearr_36821;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36784){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36784);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36824){if((e36824 instanceof Object)){
var ex__34210__auto__ = e36824;
var statearr_36825_38244 = state_36784;
(statearr_36825_38244[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38245 = state_36784;
state_36784 = G__38245;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36827 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36827[(6)] = c__34274__auto___38219);

return statearr_36827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
