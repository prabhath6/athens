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
var G__37081 = arguments.length;
switch (G__37081) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37082 = (function (f,blockable,meta37083){
this.f = f;
this.blockable = blockable;
this.meta37083 = meta37083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37084,meta37083__$1){
var self__ = this;
var _37084__$1 = this;
return (new cljs.core.async.t_cljs$core$async37082(self__.f,self__.blockable,meta37083__$1));
}));

(cljs.core.async.t_cljs$core$async37082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37084){
var self__ = this;
var _37084__$1 = this;
return self__.meta37083;
}));

(cljs.core.async.t_cljs$core$async37082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37083","meta37083",259797301,null)], null);
}));

(cljs.core.async.t_cljs$core$async37082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37082");

(cljs.core.async.t_cljs$core$async37082.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37082.
 */
cljs.core.async.__GT_t_cljs$core$async37082 = (function cljs$core$async$__GT_t_cljs$core$async37082(f__$1,blockable__$1,meta37083){
return (new cljs.core.async.t_cljs$core$async37082(f__$1,blockable__$1,meta37083));
});

}

return (new cljs.core.async.t_cljs$core$async37082(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37099 = arguments.length;
switch (G__37099) {
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
var G__37101 = arguments.length;
switch (G__37101) {
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
var G__37103 = arguments.length;
switch (G__37103) {
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
var val_38661 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38661) : fn1.call(null,val_38661));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38661) : fn1.call(null,val_38661));
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
var G__37105 = arguments.length;
switch (G__37105) {
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
var n__4666__auto___38663 = n;
var x_38664 = (0);
while(true){
if((x_38664 < n__4666__auto___38663)){
(a[x_38664] = x_38664);

var G__38665 = (x_38664 + (1));
x_38664 = G__38665;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37111 = (function (flag,meta37112){
this.flag = flag;
this.meta37112 = meta37112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37113,meta37112__$1){
var self__ = this;
var _37113__$1 = this;
return (new cljs.core.async.t_cljs$core$async37111(self__.flag,meta37112__$1));
}));

(cljs.core.async.t_cljs$core$async37111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37113){
var self__ = this;
var _37113__$1 = this;
return self__.meta37112;
}));

(cljs.core.async.t_cljs$core$async37111.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37111.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37112","meta37112",-1628863145,null)], null);
}));

(cljs.core.async.t_cljs$core$async37111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37111");

(cljs.core.async.t_cljs$core$async37111.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37111.
 */
cljs.core.async.__GT_t_cljs$core$async37111 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37111(flag__$1,meta37112){
return (new cljs.core.async.t_cljs$core$async37111(flag__$1,meta37112));
});

}

return (new cljs.core.async.t_cljs$core$async37111(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37116 = (function (flag,cb,meta37117){
this.flag = flag;
this.cb = cb;
this.meta37117 = meta37117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37118,meta37117__$1){
var self__ = this;
var _37118__$1 = this;
return (new cljs.core.async.t_cljs$core$async37116(self__.flag,self__.cb,meta37117__$1));
}));

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37118){
var self__ = this;
var _37118__$1 = this;
return self__.meta37117;
}));

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37117","meta37117",714277370,null)], null);
}));

(cljs.core.async.t_cljs$core$async37116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37116");

(cljs.core.async.t_cljs$core$async37116.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37116.
 */
cljs.core.async.__GT_t_cljs$core$async37116 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37116(flag__$1,cb__$1,meta37117){
return (new cljs.core.async.t_cljs$core$async37116(flag__$1,cb__$1,meta37117));
});

}

return (new cljs.core.async.t_cljs$core$async37116(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37127_SHARP_){
var G__37130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37127_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37130) : fret.call(null,G__37130));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37128_SHARP_){
var G__37131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37128_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37131) : fret.call(null,G__37131));
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
var G__38666 = (i + (1));
i = G__38666;
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
var len__4789__auto___38667 = arguments.length;
var i__4790__auto___38668 = (0);
while(true){
if((i__4790__auto___38668 < len__4789__auto___38667)){
args__4795__auto__.push((arguments[i__4790__auto___38668]));

var G__38669 = (i__4790__auto___38668 + (1));
i__4790__auto___38668 = G__38669;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37141){
var map__37142 = p__37141;
var map__37142__$1 = (((((!((map__37142 == null))))?(((((map__37142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37142):map__37142);
var opts = map__37142__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37139){
var G__37140 = cljs.core.first(seq37139);
var seq37139__$1 = cljs.core.next(seq37139);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37140,seq37139__$1);
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
var G__37148 = arguments.length;
switch (G__37148) {
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
var c__37008__auto___38671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_37172){
var state_val_37173 = (state_37172[(1)]);
if((state_val_37173 === (7))){
var inst_37168 = (state_37172[(2)]);
var state_37172__$1 = state_37172;
var statearr_37174_38672 = state_37172__$1;
(statearr_37174_38672[(2)] = inst_37168);

(statearr_37174_38672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37173 === (1))){
var state_37172__$1 = state_37172;
var statearr_37175_38673 = state_37172__$1;
(statearr_37175_38673[(2)] = null);

(statearr_37175_38673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37173 === (4))){
var inst_37151 = (state_37172[(7)]);
var inst_37151__$1 = (state_37172[(2)]);
var inst_37152 = (inst_37151__$1 == null);
var state_37172__$1 = (function (){var statearr_37176 = state_37172;
(statearr_37176[(7)] = inst_37151__$1);

return statearr_37176;
})();
if(cljs.core.truth_(inst_37152)){
var statearr_37177_38674 = state_37172__$1;
(statearr_37177_38674[(1)] = (5));

} else {
var statearr_37178_38675 = state_37172__$1;
(statearr_37178_38675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37173 === (13))){
var state_37172__$1 = state_37172;
var statearr_37179_38676 = state_37172__$1;
(statearr_37179_38676[(2)] = null);

(statearr_37179_38676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37173 === (6))){
var inst_37151 = (state_37172[(7)]);
var state_37172__$1 = state_37172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37172__$1,(11),to,inst_37151);
} else {
if((state_val_37173 === (3))){
var inst_37170 = (state_37172[(2)]);
var state_37172__$1 = state_37172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37172__$1,inst_37170);
} else {
if((state_val_37173 === (12))){
var state_37172__$1 = state_37172;
var statearr_37180_38677 = state_37172__$1;
(statearr_37180_38677[(2)] = null);

(statearr_37180_38677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37173 === (2))){
var state_37172__$1 = state_37172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37172__$1,(4),from);
} else {
if((state_val_37173 === (11))){
var inst_37161 = (state_37172[(2)]);
var state_37172__$1 = state_37172;
if(cljs.core.truth_(inst_37161)){
var statearr_37181_38678 = state_37172__$1;
(statearr_37181_38678[(1)] = (12));

} else {
var statearr_37182_38679 = state_37172__$1;
(statearr_37182_38679[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37173 === (9))){
var state_37172__$1 = state_37172;
var statearr_37183_38680 = state_37172__$1;
(statearr_37183_38680[(2)] = null);

(statearr_37183_38680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37173 === (5))){
var state_37172__$1 = state_37172;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37184_38681 = state_37172__$1;
(statearr_37184_38681[(1)] = (8));

} else {
var statearr_37185_38682 = state_37172__$1;
(statearr_37185_38682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37173 === (14))){
var inst_37166 = (state_37172[(2)]);
var state_37172__$1 = state_37172;
var statearr_37186_38683 = state_37172__$1;
(statearr_37186_38683[(2)] = inst_37166);

(statearr_37186_38683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37173 === (10))){
var inst_37158 = (state_37172[(2)]);
var state_37172__$1 = state_37172;
var statearr_37187_38684 = state_37172__$1;
(statearr_37187_38684[(2)] = inst_37158);

(statearr_37187_38684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37173 === (8))){
var inst_37155 = cljs.core.async.close_BANG_(to);
var state_37172__$1 = state_37172;
var statearr_37188_38685 = state_37172__$1;
(statearr_37188_38685[(2)] = inst_37155);

(statearr_37188_38685[(1)] = (10));


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
var cljs$core$async$state_machine__36812__auto__ = null;
var cljs$core$async$state_machine__36812__auto____0 = (function (){
var statearr_37189 = [null,null,null,null,null,null,null,null];
(statearr_37189[(0)] = cljs$core$async$state_machine__36812__auto__);

(statearr_37189[(1)] = (1));

return statearr_37189;
});
var cljs$core$async$state_machine__36812__auto____1 = (function (state_37172){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37172);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37190){if((e37190 instanceof Object)){
var ex__36815__auto__ = e37190;
var statearr_37191_38686 = state_37172;
(statearr_37191_38686[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38687 = state_37172;
state_37172 = G__38687;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$state_machine__36812__auto__ = function(state_37172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36812__auto____1.call(this,state_37172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36812__auto____0;
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36812__auto____1;
return cljs$core$async$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_37192 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37192[(6)] = c__37008__auto___38671);

return statearr_37192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
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
var process = (function (p__37193){
var vec__37194 = p__37193;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37194,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37194,(1),null);
var job = vec__37194;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37008__auto___38688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_37201){
var state_val_37202 = (state_37201[(1)]);
if((state_val_37202 === (1))){
var state_37201__$1 = state_37201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37201__$1,(2),res,v);
} else {
if((state_val_37202 === (2))){
var inst_37198 = (state_37201[(2)]);
var inst_37199 = cljs.core.async.close_BANG_(res);
var state_37201__$1 = (function (){var statearr_37203 = state_37201;
(statearr_37203[(7)] = inst_37198);

return statearr_37203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37201__$1,inst_37199);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0 = (function (){
var statearr_37204 = [null,null,null,null,null,null,null,null];
(statearr_37204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__);

(statearr_37204[(1)] = (1));

return statearr_37204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1 = (function (state_37201){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37201);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37205){if((e37205 instanceof Object)){
var ex__36815__auto__ = e37205;
var statearr_37206_38689 = state_37201;
(statearr_37206_38689[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38690 = state_37201;
state_37201 = G__38690;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__ = function(state_37201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1.call(this,state_37201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_37207 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37207[(6)] = c__37008__auto___38688);

return statearr_37207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37208){
var vec__37209 = p__37208;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37209,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37209,(1),null);
var job = vec__37209;
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
var n__4666__auto___38691 = n;
var __38692 = (0);
while(true){
if((__38692 < n__4666__auto___38691)){
var G__37212_38693 = type;
var G__37212_38694__$1 = (((G__37212_38693 instanceof cljs.core.Keyword))?G__37212_38693.fqn:null);
switch (G__37212_38694__$1) {
case "compute":
var c__37008__auto___38696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38692,c__37008__auto___38696,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async){
return (function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = ((function (__38692,c__37008__auto___38696,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async){
return (function (state_37225){
var state_val_37226 = (state_37225[(1)]);
if((state_val_37226 === (1))){
var state_37225__$1 = state_37225;
var statearr_37227_38697 = state_37225__$1;
(statearr_37227_38697[(2)] = null);

(statearr_37227_38697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (2))){
var state_37225__$1 = state_37225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37225__$1,(4),jobs);
} else {
if((state_val_37226 === (3))){
var inst_37223 = (state_37225[(2)]);
var state_37225__$1 = state_37225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37225__$1,inst_37223);
} else {
if((state_val_37226 === (4))){
var inst_37215 = (state_37225[(2)]);
var inst_37216 = process(inst_37215);
var state_37225__$1 = state_37225;
if(cljs.core.truth_(inst_37216)){
var statearr_37228_38698 = state_37225__$1;
(statearr_37228_38698[(1)] = (5));

} else {
var statearr_37229_38699 = state_37225__$1;
(statearr_37229_38699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (5))){
var state_37225__$1 = state_37225;
var statearr_37230_38700 = state_37225__$1;
(statearr_37230_38700[(2)] = null);

(statearr_37230_38700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (6))){
var state_37225__$1 = state_37225;
var statearr_37231_38701 = state_37225__$1;
(statearr_37231_38701[(2)] = null);

(statearr_37231_38701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (7))){
var inst_37221 = (state_37225[(2)]);
var state_37225__$1 = state_37225;
var statearr_37232_38702 = state_37225__$1;
(statearr_37232_38702[(2)] = inst_37221);

(statearr_37232_38702[(1)] = (3));


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
});})(__38692,c__37008__auto___38696,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async))
;
return ((function (__38692,switch__36811__auto__,c__37008__auto___38696,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0 = (function (){
var statearr_37233 = [null,null,null,null,null,null,null];
(statearr_37233[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__);

(statearr_37233[(1)] = (1));

return statearr_37233;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1 = (function (state_37225){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37225);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37234){if((e37234 instanceof Object)){
var ex__36815__auto__ = e37234;
var statearr_37235_38703 = state_37225;
(statearr_37235_38703[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38704 = state_37225;
state_37225 = G__38704;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__ = function(state_37225){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1.call(this,state_37225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__;
})()
;})(__38692,switch__36811__auto__,c__37008__auto___38696,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async))
})();
var state__37010__auto__ = (function (){var statearr_37236 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37236[(6)] = c__37008__auto___38696);

return statearr_37236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
});})(__38692,c__37008__auto___38696,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async))
);


break;
case "async":
var c__37008__auto___38705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38692,c__37008__auto___38705,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async){
return (function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = ((function (__38692,c__37008__auto___38705,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async){
return (function (state_37249){
var state_val_37250 = (state_37249[(1)]);
if((state_val_37250 === (1))){
var state_37249__$1 = state_37249;
var statearr_37251_38706 = state_37249__$1;
(statearr_37251_38706[(2)] = null);

(statearr_37251_38706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (2))){
var state_37249__$1 = state_37249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37249__$1,(4),jobs);
} else {
if((state_val_37250 === (3))){
var inst_37247 = (state_37249[(2)]);
var state_37249__$1 = state_37249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37249__$1,inst_37247);
} else {
if((state_val_37250 === (4))){
var inst_37239 = (state_37249[(2)]);
var inst_37240 = async(inst_37239);
var state_37249__$1 = state_37249;
if(cljs.core.truth_(inst_37240)){
var statearr_37252_38707 = state_37249__$1;
(statearr_37252_38707[(1)] = (5));

} else {
var statearr_37253_38708 = state_37249__$1;
(statearr_37253_38708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (5))){
var state_37249__$1 = state_37249;
var statearr_37254_38709 = state_37249__$1;
(statearr_37254_38709[(2)] = null);

(statearr_37254_38709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (6))){
var state_37249__$1 = state_37249;
var statearr_37255_38710 = state_37249__$1;
(statearr_37255_38710[(2)] = null);

(statearr_37255_38710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (7))){
var inst_37245 = (state_37249[(2)]);
var state_37249__$1 = state_37249;
var statearr_37256_38711 = state_37249__$1;
(statearr_37256_38711[(2)] = inst_37245);

(statearr_37256_38711[(1)] = (3));


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
});})(__38692,c__37008__auto___38705,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async))
;
return ((function (__38692,switch__36811__auto__,c__37008__auto___38705,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0 = (function (){
var statearr_37257 = [null,null,null,null,null,null,null];
(statearr_37257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__);

(statearr_37257[(1)] = (1));

return statearr_37257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1 = (function (state_37249){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37249);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37258){if((e37258 instanceof Object)){
var ex__36815__auto__ = e37258;
var statearr_37259_38712 = state_37249;
(statearr_37259_38712[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38713 = state_37249;
state_37249 = G__38713;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__ = function(state_37249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1.call(this,state_37249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__;
})()
;})(__38692,switch__36811__auto__,c__37008__auto___38705,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async))
})();
var state__37010__auto__ = (function (){var statearr_37260 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37260[(6)] = c__37008__auto___38705);

return statearr_37260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
});})(__38692,c__37008__auto___38705,G__37212_38693,G__37212_38694__$1,n__4666__auto___38691,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37212_38694__$1)].join('')));

}

var G__38714 = (__38692 + (1));
__38692 = G__38714;
continue;
} else {
}
break;
}

var c__37008__auto___38715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_37282){
var state_val_37283 = (state_37282[(1)]);
if((state_val_37283 === (7))){
var inst_37278 = (state_37282[(2)]);
var state_37282__$1 = state_37282;
var statearr_37284_38716 = state_37282__$1;
(statearr_37284_38716[(2)] = inst_37278);

(statearr_37284_38716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (1))){
var state_37282__$1 = state_37282;
var statearr_37285_38717 = state_37282__$1;
(statearr_37285_38717[(2)] = null);

(statearr_37285_38717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (4))){
var inst_37263 = (state_37282[(7)]);
var inst_37263__$1 = (state_37282[(2)]);
var inst_37264 = (inst_37263__$1 == null);
var state_37282__$1 = (function (){var statearr_37286 = state_37282;
(statearr_37286[(7)] = inst_37263__$1);

return statearr_37286;
})();
if(cljs.core.truth_(inst_37264)){
var statearr_37287_38718 = state_37282__$1;
(statearr_37287_38718[(1)] = (5));

} else {
var statearr_37288_38719 = state_37282__$1;
(statearr_37288_38719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (6))){
var inst_37263 = (state_37282[(7)]);
var inst_37268 = (state_37282[(8)]);
var inst_37268__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37269 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37270 = [inst_37263,inst_37268__$1];
var inst_37271 = (new cljs.core.PersistentVector(null,2,(5),inst_37269,inst_37270,null));
var state_37282__$1 = (function (){var statearr_37289 = state_37282;
(statearr_37289[(8)] = inst_37268__$1);

return statearr_37289;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37282__$1,(8),jobs,inst_37271);
} else {
if((state_val_37283 === (3))){
var inst_37280 = (state_37282[(2)]);
var state_37282__$1 = state_37282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37282__$1,inst_37280);
} else {
if((state_val_37283 === (2))){
var state_37282__$1 = state_37282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37282__$1,(4),from);
} else {
if((state_val_37283 === (9))){
var inst_37275 = (state_37282[(2)]);
var state_37282__$1 = (function (){var statearr_37290 = state_37282;
(statearr_37290[(9)] = inst_37275);

return statearr_37290;
})();
var statearr_37291_38720 = state_37282__$1;
(statearr_37291_38720[(2)] = null);

(statearr_37291_38720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (5))){
var inst_37266 = cljs.core.async.close_BANG_(jobs);
var state_37282__$1 = state_37282;
var statearr_37292_38721 = state_37282__$1;
(statearr_37292_38721[(2)] = inst_37266);

(statearr_37292_38721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (8))){
var inst_37268 = (state_37282[(8)]);
var inst_37273 = (state_37282[(2)]);
var state_37282__$1 = (function (){var statearr_37293 = state_37282;
(statearr_37293[(10)] = inst_37273);

return statearr_37293;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37282__$1,(9),results,inst_37268);
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
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0 = (function (){
var statearr_37294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__);

(statearr_37294[(1)] = (1));

return statearr_37294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1 = (function (state_37282){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37282);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37295){if((e37295 instanceof Object)){
var ex__36815__auto__ = e37295;
var statearr_37296_38722 = state_37282;
(statearr_37296_38722[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38723 = state_37282;
state_37282 = G__38723;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__ = function(state_37282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1.call(this,state_37282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_37297 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37297[(6)] = c__37008__auto___38715);

return statearr_37297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));


var c__37008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_37335){
var state_val_37336 = (state_37335[(1)]);
if((state_val_37336 === (7))){
var inst_37331 = (state_37335[(2)]);
var state_37335__$1 = state_37335;
var statearr_37337_38724 = state_37335__$1;
(statearr_37337_38724[(2)] = inst_37331);

(statearr_37337_38724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (20))){
var state_37335__$1 = state_37335;
var statearr_37338_38725 = state_37335__$1;
(statearr_37338_38725[(2)] = null);

(statearr_37338_38725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (1))){
var state_37335__$1 = state_37335;
var statearr_37339_38726 = state_37335__$1;
(statearr_37339_38726[(2)] = null);

(statearr_37339_38726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (4))){
var inst_37300 = (state_37335[(7)]);
var inst_37300__$1 = (state_37335[(2)]);
var inst_37301 = (inst_37300__$1 == null);
var state_37335__$1 = (function (){var statearr_37340 = state_37335;
(statearr_37340[(7)] = inst_37300__$1);

return statearr_37340;
})();
if(cljs.core.truth_(inst_37301)){
var statearr_37341_38727 = state_37335__$1;
(statearr_37341_38727[(1)] = (5));

} else {
var statearr_37342_38728 = state_37335__$1;
(statearr_37342_38728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (15))){
var inst_37313 = (state_37335[(8)]);
var state_37335__$1 = state_37335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37335__$1,(18),to,inst_37313);
} else {
if((state_val_37336 === (21))){
var inst_37326 = (state_37335[(2)]);
var state_37335__$1 = state_37335;
var statearr_37343_38729 = state_37335__$1;
(statearr_37343_38729[(2)] = inst_37326);

(statearr_37343_38729[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (13))){
var inst_37328 = (state_37335[(2)]);
var state_37335__$1 = (function (){var statearr_37344 = state_37335;
(statearr_37344[(9)] = inst_37328);

return statearr_37344;
})();
var statearr_37345_38730 = state_37335__$1;
(statearr_37345_38730[(2)] = null);

(statearr_37345_38730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (6))){
var inst_37300 = (state_37335[(7)]);
var state_37335__$1 = state_37335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37335__$1,(11),inst_37300);
} else {
if((state_val_37336 === (17))){
var inst_37321 = (state_37335[(2)]);
var state_37335__$1 = state_37335;
if(cljs.core.truth_(inst_37321)){
var statearr_37346_38731 = state_37335__$1;
(statearr_37346_38731[(1)] = (19));

} else {
var statearr_37347_38732 = state_37335__$1;
(statearr_37347_38732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (3))){
var inst_37333 = (state_37335[(2)]);
var state_37335__$1 = state_37335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37335__$1,inst_37333);
} else {
if((state_val_37336 === (12))){
var inst_37310 = (state_37335[(10)]);
var state_37335__$1 = state_37335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37335__$1,(14),inst_37310);
} else {
if((state_val_37336 === (2))){
var state_37335__$1 = state_37335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37335__$1,(4),results);
} else {
if((state_val_37336 === (19))){
var state_37335__$1 = state_37335;
var statearr_37348_38733 = state_37335__$1;
(statearr_37348_38733[(2)] = null);

(statearr_37348_38733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (11))){
var inst_37310 = (state_37335[(2)]);
var state_37335__$1 = (function (){var statearr_37349 = state_37335;
(statearr_37349[(10)] = inst_37310);

return statearr_37349;
})();
var statearr_37350_38734 = state_37335__$1;
(statearr_37350_38734[(2)] = null);

(statearr_37350_38734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (9))){
var state_37335__$1 = state_37335;
var statearr_37351_38735 = state_37335__$1;
(statearr_37351_38735[(2)] = null);

(statearr_37351_38735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (5))){
var state_37335__$1 = state_37335;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37352_38736 = state_37335__$1;
(statearr_37352_38736[(1)] = (8));

} else {
var statearr_37353_38737 = state_37335__$1;
(statearr_37353_38737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (14))){
var inst_37313 = (state_37335[(8)]);
var inst_37313__$1 = (state_37335[(2)]);
var inst_37314 = (inst_37313__$1 == null);
var inst_37315 = cljs.core.not(inst_37314);
var state_37335__$1 = (function (){var statearr_37354 = state_37335;
(statearr_37354[(8)] = inst_37313__$1);

return statearr_37354;
})();
if(inst_37315){
var statearr_37355_38738 = state_37335__$1;
(statearr_37355_38738[(1)] = (15));

} else {
var statearr_37356_38739 = state_37335__$1;
(statearr_37356_38739[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (16))){
var state_37335__$1 = state_37335;
var statearr_37357_38740 = state_37335__$1;
(statearr_37357_38740[(2)] = false);

(statearr_37357_38740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (10))){
var inst_37307 = (state_37335[(2)]);
var state_37335__$1 = state_37335;
var statearr_37358_38741 = state_37335__$1;
(statearr_37358_38741[(2)] = inst_37307);

(statearr_37358_38741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (18))){
var inst_37318 = (state_37335[(2)]);
var state_37335__$1 = state_37335;
var statearr_37359_38742 = state_37335__$1;
(statearr_37359_38742[(2)] = inst_37318);

(statearr_37359_38742[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37336 === (8))){
var inst_37304 = cljs.core.async.close_BANG_(to);
var state_37335__$1 = state_37335;
var statearr_37360_38743 = state_37335__$1;
(statearr_37360_38743[(2)] = inst_37304);

(statearr_37360_38743[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0 = (function (){
var statearr_37361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37361[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__);

(statearr_37361[(1)] = (1));

return statearr_37361;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1 = (function (state_37335){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37335);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37362){if((e37362 instanceof Object)){
var ex__36815__auto__ = e37362;
var statearr_37363_38744 = state_37335;
(statearr_37363_38744[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37362;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38745 = state_37335;
state_37335 = G__38745;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__ = function(state_37335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1.call(this,state_37335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_37364 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37364[(6)] = c__37008__auto__);

return statearr_37364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));

return c__37008__auto__;
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
var G__37366 = arguments.length;
switch (G__37366) {
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
var G__37368 = arguments.length;
switch (G__37368) {
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
var G__37370 = arguments.length;
switch (G__37370) {
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
var c__37008__auto___38749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_37396){
var state_val_37397 = (state_37396[(1)]);
if((state_val_37397 === (7))){
var inst_37392 = (state_37396[(2)]);
var state_37396__$1 = state_37396;
var statearr_37398_38750 = state_37396__$1;
(statearr_37398_38750[(2)] = inst_37392);

(statearr_37398_38750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (1))){
var state_37396__$1 = state_37396;
var statearr_37399_38751 = state_37396__$1;
(statearr_37399_38751[(2)] = null);

(statearr_37399_38751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (4))){
var inst_37373 = (state_37396[(7)]);
var inst_37373__$1 = (state_37396[(2)]);
var inst_37374 = (inst_37373__$1 == null);
var state_37396__$1 = (function (){var statearr_37400 = state_37396;
(statearr_37400[(7)] = inst_37373__$1);

return statearr_37400;
})();
if(cljs.core.truth_(inst_37374)){
var statearr_37401_38752 = state_37396__$1;
(statearr_37401_38752[(1)] = (5));

} else {
var statearr_37402_38753 = state_37396__$1;
(statearr_37402_38753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (13))){
var state_37396__$1 = state_37396;
var statearr_37403_38754 = state_37396__$1;
(statearr_37403_38754[(2)] = null);

(statearr_37403_38754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (6))){
var inst_37373 = (state_37396[(7)]);
var inst_37379 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37373) : p.call(null,inst_37373));
var state_37396__$1 = state_37396;
if(cljs.core.truth_(inst_37379)){
var statearr_37404_38755 = state_37396__$1;
(statearr_37404_38755[(1)] = (9));

} else {
var statearr_37405_38756 = state_37396__$1;
(statearr_37405_38756[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (3))){
var inst_37394 = (state_37396[(2)]);
var state_37396__$1 = state_37396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37396__$1,inst_37394);
} else {
if((state_val_37397 === (12))){
var state_37396__$1 = state_37396;
var statearr_37406_38757 = state_37396__$1;
(statearr_37406_38757[(2)] = null);

(statearr_37406_38757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (2))){
var state_37396__$1 = state_37396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37396__$1,(4),ch);
} else {
if((state_val_37397 === (11))){
var inst_37373 = (state_37396[(7)]);
var inst_37383 = (state_37396[(2)]);
var state_37396__$1 = state_37396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37396__$1,(8),inst_37383,inst_37373);
} else {
if((state_val_37397 === (9))){
var state_37396__$1 = state_37396;
var statearr_37407_38758 = state_37396__$1;
(statearr_37407_38758[(2)] = tc);

(statearr_37407_38758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (5))){
var inst_37376 = cljs.core.async.close_BANG_(tc);
var inst_37377 = cljs.core.async.close_BANG_(fc);
var state_37396__$1 = (function (){var statearr_37408 = state_37396;
(statearr_37408[(8)] = inst_37376);

return statearr_37408;
})();
var statearr_37409_38759 = state_37396__$1;
(statearr_37409_38759[(2)] = inst_37377);

(statearr_37409_38759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (14))){
var inst_37390 = (state_37396[(2)]);
var state_37396__$1 = state_37396;
var statearr_37410_38760 = state_37396__$1;
(statearr_37410_38760[(2)] = inst_37390);

(statearr_37410_38760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (10))){
var state_37396__$1 = state_37396;
var statearr_37411_38761 = state_37396__$1;
(statearr_37411_38761[(2)] = fc);

(statearr_37411_38761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37397 === (8))){
var inst_37385 = (state_37396[(2)]);
var state_37396__$1 = state_37396;
if(cljs.core.truth_(inst_37385)){
var statearr_37412_38762 = state_37396__$1;
(statearr_37412_38762[(1)] = (12));

} else {
var statearr_37413_38763 = state_37396__$1;
(statearr_37413_38763[(1)] = (13));

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
var cljs$core$async$state_machine__36812__auto__ = null;
var cljs$core$async$state_machine__36812__auto____0 = (function (){
var statearr_37414 = [null,null,null,null,null,null,null,null,null];
(statearr_37414[(0)] = cljs$core$async$state_machine__36812__auto__);

(statearr_37414[(1)] = (1));

return statearr_37414;
});
var cljs$core$async$state_machine__36812__auto____1 = (function (state_37396){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37396);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37415){if((e37415 instanceof Object)){
var ex__36815__auto__ = e37415;
var statearr_37416_38764 = state_37396;
(statearr_37416_38764[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38765 = state_37396;
state_37396 = G__38765;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$state_machine__36812__auto__ = function(state_37396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36812__auto____1.call(this,state_37396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36812__auto____0;
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36812__auto____1;
return cljs$core$async$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_37417 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37417[(6)] = c__37008__auto___38749);

return statearr_37417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
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
var c__37008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_37438){
var state_val_37439 = (state_37438[(1)]);
if((state_val_37439 === (7))){
var inst_37434 = (state_37438[(2)]);
var state_37438__$1 = state_37438;
var statearr_37440_38766 = state_37438__$1;
(statearr_37440_38766[(2)] = inst_37434);

(statearr_37440_38766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (1))){
var inst_37418 = init;
var state_37438__$1 = (function (){var statearr_37441 = state_37438;
(statearr_37441[(7)] = inst_37418);

return statearr_37441;
})();
var statearr_37442_38767 = state_37438__$1;
(statearr_37442_38767[(2)] = null);

(statearr_37442_38767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (4))){
var inst_37421 = (state_37438[(8)]);
var inst_37421__$1 = (state_37438[(2)]);
var inst_37422 = (inst_37421__$1 == null);
var state_37438__$1 = (function (){var statearr_37443 = state_37438;
(statearr_37443[(8)] = inst_37421__$1);

return statearr_37443;
})();
if(cljs.core.truth_(inst_37422)){
var statearr_37444_38768 = state_37438__$1;
(statearr_37444_38768[(1)] = (5));

} else {
var statearr_37445_38769 = state_37438__$1;
(statearr_37445_38769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (6))){
var inst_37421 = (state_37438[(8)]);
var inst_37418 = (state_37438[(7)]);
var inst_37425 = (state_37438[(9)]);
var inst_37425__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37418,inst_37421) : f.call(null,inst_37418,inst_37421));
var inst_37426 = cljs.core.reduced_QMARK_(inst_37425__$1);
var state_37438__$1 = (function (){var statearr_37446 = state_37438;
(statearr_37446[(9)] = inst_37425__$1);

return statearr_37446;
})();
if(inst_37426){
var statearr_37447_38770 = state_37438__$1;
(statearr_37447_38770[(1)] = (8));

} else {
var statearr_37448_38771 = state_37438__$1;
(statearr_37448_38771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (3))){
var inst_37436 = (state_37438[(2)]);
var state_37438__$1 = state_37438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37438__$1,inst_37436);
} else {
if((state_val_37439 === (2))){
var state_37438__$1 = state_37438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37438__$1,(4),ch);
} else {
if((state_val_37439 === (9))){
var inst_37425 = (state_37438[(9)]);
var inst_37418 = inst_37425;
var state_37438__$1 = (function (){var statearr_37449 = state_37438;
(statearr_37449[(7)] = inst_37418);

return statearr_37449;
})();
var statearr_37450_38772 = state_37438__$1;
(statearr_37450_38772[(2)] = null);

(statearr_37450_38772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (5))){
var inst_37418 = (state_37438[(7)]);
var state_37438__$1 = state_37438;
var statearr_37451_38773 = state_37438__$1;
(statearr_37451_38773[(2)] = inst_37418);

(statearr_37451_38773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (10))){
var inst_37432 = (state_37438[(2)]);
var state_37438__$1 = state_37438;
var statearr_37452_38774 = state_37438__$1;
(statearr_37452_38774[(2)] = inst_37432);

(statearr_37452_38774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37439 === (8))){
var inst_37425 = (state_37438[(9)]);
var inst_37428 = cljs.core.deref(inst_37425);
var state_37438__$1 = state_37438;
var statearr_37453_38775 = state_37438__$1;
(statearr_37453_38775[(2)] = inst_37428);

(statearr_37453_38775[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__36812__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36812__auto____0 = (function (){
var statearr_37454 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37454[(0)] = cljs$core$async$reduce_$_state_machine__36812__auto__);

(statearr_37454[(1)] = (1));

return statearr_37454;
});
var cljs$core$async$reduce_$_state_machine__36812__auto____1 = (function (state_37438){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37438);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37455){if((e37455 instanceof Object)){
var ex__36815__auto__ = e37455;
var statearr_37456_38776 = state_37438;
(statearr_37456_38776[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38777 = state_37438;
state_37438 = G__38777;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36812__auto__ = function(state_37438){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36812__auto____1.call(this,state_37438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36812__auto____0;
cljs$core$async$reduce_$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36812__auto____1;
return cljs$core$async$reduce_$_state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_37457 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37457[(6)] = c__37008__auto__);

return statearr_37457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));

return c__37008__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_37463){
var state_val_37464 = (state_37463[(1)]);
if((state_val_37464 === (1))){
var inst_37458 = cljs.core.async.reduce(f__$1,init,ch);
var state_37463__$1 = state_37463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37463__$1,(2),inst_37458);
} else {
if((state_val_37464 === (2))){
var inst_37460 = (state_37463[(2)]);
var inst_37461 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37460) : f__$1.call(null,inst_37460));
var state_37463__$1 = state_37463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37463__$1,inst_37461);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36812__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36812__auto____0 = (function (){
var statearr_37465 = [null,null,null,null,null,null,null];
(statearr_37465[(0)] = cljs$core$async$transduce_$_state_machine__36812__auto__);

(statearr_37465[(1)] = (1));

return statearr_37465;
});
var cljs$core$async$transduce_$_state_machine__36812__auto____1 = (function (state_37463){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37463);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37466){if((e37466 instanceof Object)){
var ex__36815__auto__ = e37466;
var statearr_37467_38778 = state_37463;
(statearr_37467_38778[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38779 = state_37463;
state_37463 = G__38779;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36812__auto__ = function(state_37463){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36812__auto____1.call(this,state_37463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36812__auto____0;
cljs$core$async$transduce_$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36812__auto____1;
return cljs$core$async$transduce_$_state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_37468 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37468[(6)] = c__37008__auto__);

return statearr_37468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));

return c__37008__auto__;
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
var G__37470 = arguments.length;
switch (G__37470) {
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
var c__37008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_37495){
var state_val_37496 = (state_37495[(1)]);
if((state_val_37496 === (7))){
var inst_37477 = (state_37495[(2)]);
var state_37495__$1 = state_37495;
var statearr_37497_38781 = state_37495__$1;
(statearr_37497_38781[(2)] = inst_37477);

(statearr_37497_38781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (1))){
var inst_37471 = cljs.core.seq(coll);
var inst_37472 = inst_37471;
var state_37495__$1 = (function (){var statearr_37498 = state_37495;
(statearr_37498[(7)] = inst_37472);

return statearr_37498;
})();
var statearr_37499_38782 = state_37495__$1;
(statearr_37499_38782[(2)] = null);

(statearr_37499_38782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (4))){
var inst_37472 = (state_37495[(7)]);
var inst_37475 = cljs.core.first(inst_37472);
var state_37495__$1 = state_37495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37495__$1,(7),ch,inst_37475);
} else {
if((state_val_37496 === (13))){
var inst_37489 = (state_37495[(2)]);
var state_37495__$1 = state_37495;
var statearr_37500_38783 = state_37495__$1;
(statearr_37500_38783[(2)] = inst_37489);

(statearr_37500_38783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (6))){
var inst_37480 = (state_37495[(2)]);
var state_37495__$1 = state_37495;
if(cljs.core.truth_(inst_37480)){
var statearr_37501_38784 = state_37495__$1;
(statearr_37501_38784[(1)] = (8));

} else {
var statearr_37502_38785 = state_37495__$1;
(statearr_37502_38785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (3))){
var inst_37493 = (state_37495[(2)]);
var state_37495__$1 = state_37495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37495__$1,inst_37493);
} else {
if((state_val_37496 === (12))){
var state_37495__$1 = state_37495;
var statearr_37503_38786 = state_37495__$1;
(statearr_37503_38786[(2)] = null);

(statearr_37503_38786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (2))){
var inst_37472 = (state_37495[(7)]);
var state_37495__$1 = state_37495;
if(cljs.core.truth_(inst_37472)){
var statearr_37504_38787 = state_37495__$1;
(statearr_37504_38787[(1)] = (4));

} else {
var statearr_37505_38788 = state_37495__$1;
(statearr_37505_38788[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (11))){
var inst_37486 = cljs.core.async.close_BANG_(ch);
var state_37495__$1 = state_37495;
var statearr_37506_38789 = state_37495__$1;
(statearr_37506_38789[(2)] = inst_37486);

(statearr_37506_38789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (9))){
var state_37495__$1 = state_37495;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37507_38790 = state_37495__$1;
(statearr_37507_38790[(1)] = (11));

} else {
var statearr_37508_38791 = state_37495__$1;
(statearr_37508_38791[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (5))){
var inst_37472 = (state_37495[(7)]);
var state_37495__$1 = state_37495;
var statearr_37509_38792 = state_37495__$1;
(statearr_37509_38792[(2)] = inst_37472);

(statearr_37509_38792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (10))){
var inst_37491 = (state_37495[(2)]);
var state_37495__$1 = state_37495;
var statearr_37510_38793 = state_37495__$1;
(statearr_37510_38793[(2)] = inst_37491);

(statearr_37510_38793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (8))){
var inst_37472 = (state_37495[(7)]);
var inst_37482 = cljs.core.next(inst_37472);
var inst_37472__$1 = inst_37482;
var state_37495__$1 = (function (){var statearr_37511 = state_37495;
(statearr_37511[(7)] = inst_37472__$1);

return statearr_37511;
})();
var statearr_37512_38794 = state_37495__$1;
(statearr_37512_38794[(2)] = null);

(statearr_37512_38794[(1)] = (2));


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
var cljs$core$async$state_machine__36812__auto__ = null;
var cljs$core$async$state_machine__36812__auto____0 = (function (){
var statearr_37513 = [null,null,null,null,null,null,null,null];
(statearr_37513[(0)] = cljs$core$async$state_machine__36812__auto__);

(statearr_37513[(1)] = (1));

return statearr_37513;
});
var cljs$core$async$state_machine__36812__auto____1 = (function (state_37495){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37495);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37514){if((e37514 instanceof Object)){
var ex__36815__auto__ = e37514;
var statearr_37515_38795 = state_37495;
(statearr_37515_38795[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38796 = state_37495;
state_37495 = G__38796;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$state_machine__36812__auto__ = function(state_37495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36812__auto____1.call(this,state_37495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36812__auto____0;
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36812__auto____1;
return cljs$core$async$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_37516 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37516[(6)] = c__37008__auto__);

return statearr_37516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));

return c__37008__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37517 = (function (ch,cs,meta37518){
this.ch = ch;
this.cs = cs;
this.meta37518 = meta37518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37519,meta37518__$1){
var self__ = this;
var _37519__$1 = this;
return (new cljs.core.async.t_cljs$core$async37517(self__.ch,self__.cs,meta37518__$1));
}));

(cljs.core.async.t_cljs$core$async37517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37519){
var self__ = this;
var _37519__$1 = this;
return self__.meta37518;
}));

(cljs.core.async.t_cljs$core$async37517.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37517.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37517.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37517.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37517.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37517.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37518","meta37518",-1138347618,null)], null);
}));

(cljs.core.async.t_cljs$core$async37517.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37517");

(cljs.core.async.t_cljs$core$async37517.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37517");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37517.
 */
cljs.core.async.__GT_t_cljs$core$async37517 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37517(ch__$1,cs__$1,meta37518){
return (new cljs.core.async.t_cljs$core$async37517(ch__$1,cs__$1,meta37518));
});

}

return (new cljs.core.async.t_cljs$core$async37517(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37008__auto___38797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_37654){
var state_val_37655 = (state_37654[(1)]);
if((state_val_37655 === (7))){
var inst_37650 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37656_38798 = state_37654__$1;
(statearr_37656_38798[(2)] = inst_37650);

(statearr_37656_38798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (20))){
var inst_37553 = (state_37654[(7)]);
var inst_37565 = cljs.core.first(inst_37553);
var inst_37566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37565,(0),null);
var inst_37567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37565,(1),null);
var state_37654__$1 = (function (){var statearr_37657 = state_37654;
(statearr_37657[(8)] = inst_37566);

return statearr_37657;
})();
if(cljs.core.truth_(inst_37567)){
var statearr_37658_38799 = state_37654__$1;
(statearr_37658_38799[(1)] = (22));

} else {
var statearr_37659_38800 = state_37654__$1;
(statearr_37659_38800[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (27))){
var inst_37522 = (state_37654[(9)]);
var inst_37597 = (state_37654[(10)]);
var inst_37602 = (state_37654[(11)]);
var inst_37595 = (state_37654[(12)]);
var inst_37602__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37595,inst_37597);
var inst_37603 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37602__$1,inst_37522,done);
var state_37654__$1 = (function (){var statearr_37660 = state_37654;
(statearr_37660[(11)] = inst_37602__$1);

return statearr_37660;
})();
if(cljs.core.truth_(inst_37603)){
var statearr_37661_38801 = state_37654__$1;
(statearr_37661_38801[(1)] = (30));

} else {
var statearr_37662_38802 = state_37654__$1;
(statearr_37662_38802[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (1))){
var state_37654__$1 = state_37654;
var statearr_37663_38803 = state_37654__$1;
(statearr_37663_38803[(2)] = null);

(statearr_37663_38803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (24))){
var inst_37553 = (state_37654[(7)]);
var inst_37572 = (state_37654[(2)]);
var inst_37573 = cljs.core.next(inst_37553);
var inst_37531 = inst_37573;
var inst_37532 = null;
var inst_37533 = (0);
var inst_37534 = (0);
var state_37654__$1 = (function (){var statearr_37664 = state_37654;
(statearr_37664[(13)] = inst_37534);

(statearr_37664[(14)] = inst_37533);

(statearr_37664[(15)] = inst_37531);

(statearr_37664[(16)] = inst_37572);

(statearr_37664[(17)] = inst_37532);

return statearr_37664;
})();
var statearr_37665_38804 = state_37654__$1;
(statearr_37665_38804[(2)] = null);

(statearr_37665_38804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (39))){
var state_37654__$1 = state_37654;
var statearr_37669_38805 = state_37654__$1;
(statearr_37669_38805[(2)] = null);

(statearr_37669_38805[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (4))){
var inst_37522 = (state_37654[(9)]);
var inst_37522__$1 = (state_37654[(2)]);
var inst_37523 = (inst_37522__$1 == null);
var state_37654__$1 = (function (){var statearr_37670 = state_37654;
(statearr_37670[(9)] = inst_37522__$1);

return statearr_37670;
})();
if(cljs.core.truth_(inst_37523)){
var statearr_37671_38806 = state_37654__$1;
(statearr_37671_38806[(1)] = (5));

} else {
var statearr_37672_38807 = state_37654__$1;
(statearr_37672_38807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (15))){
var inst_37534 = (state_37654[(13)]);
var inst_37533 = (state_37654[(14)]);
var inst_37531 = (state_37654[(15)]);
var inst_37532 = (state_37654[(17)]);
var inst_37549 = (state_37654[(2)]);
var inst_37550 = (inst_37534 + (1));
var tmp37666 = inst_37533;
var tmp37667 = inst_37531;
var tmp37668 = inst_37532;
var inst_37531__$1 = tmp37667;
var inst_37532__$1 = tmp37668;
var inst_37533__$1 = tmp37666;
var inst_37534__$1 = inst_37550;
var state_37654__$1 = (function (){var statearr_37673 = state_37654;
(statearr_37673[(18)] = inst_37549);

(statearr_37673[(13)] = inst_37534__$1);

(statearr_37673[(14)] = inst_37533__$1);

(statearr_37673[(15)] = inst_37531__$1);

(statearr_37673[(17)] = inst_37532__$1);

return statearr_37673;
})();
var statearr_37674_38808 = state_37654__$1;
(statearr_37674_38808[(2)] = null);

(statearr_37674_38808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (21))){
var inst_37576 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37678_38809 = state_37654__$1;
(statearr_37678_38809[(2)] = inst_37576);

(statearr_37678_38809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (31))){
var inst_37602 = (state_37654[(11)]);
var inst_37606 = done(null);
var inst_37607 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37602);
var state_37654__$1 = (function (){var statearr_37679 = state_37654;
(statearr_37679[(19)] = inst_37606);

return statearr_37679;
})();
var statearr_37680_38810 = state_37654__$1;
(statearr_37680_38810[(2)] = inst_37607);

(statearr_37680_38810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (32))){
var inst_37597 = (state_37654[(10)]);
var inst_37596 = (state_37654[(20)]);
var inst_37594 = (state_37654[(21)]);
var inst_37595 = (state_37654[(12)]);
var inst_37609 = (state_37654[(2)]);
var inst_37610 = (inst_37597 + (1));
var tmp37675 = inst_37596;
var tmp37676 = inst_37594;
var tmp37677 = inst_37595;
var inst_37594__$1 = tmp37676;
var inst_37595__$1 = tmp37677;
var inst_37596__$1 = tmp37675;
var inst_37597__$1 = inst_37610;
var state_37654__$1 = (function (){var statearr_37681 = state_37654;
(statearr_37681[(10)] = inst_37597__$1);

(statearr_37681[(20)] = inst_37596__$1);

(statearr_37681[(22)] = inst_37609);

(statearr_37681[(21)] = inst_37594__$1);

(statearr_37681[(12)] = inst_37595__$1);

return statearr_37681;
})();
var statearr_37682_38811 = state_37654__$1;
(statearr_37682_38811[(2)] = null);

(statearr_37682_38811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (40))){
var inst_37622 = (state_37654[(23)]);
var inst_37626 = done(null);
var inst_37627 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37622);
var state_37654__$1 = (function (){var statearr_37683 = state_37654;
(statearr_37683[(24)] = inst_37626);

return statearr_37683;
})();
var statearr_37684_38812 = state_37654__$1;
(statearr_37684_38812[(2)] = inst_37627);

(statearr_37684_38812[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (33))){
var inst_37613 = (state_37654[(25)]);
var inst_37615 = cljs.core.chunked_seq_QMARK_(inst_37613);
var state_37654__$1 = state_37654;
if(inst_37615){
var statearr_37685_38813 = state_37654__$1;
(statearr_37685_38813[(1)] = (36));

} else {
var statearr_37686_38814 = state_37654__$1;
(statearr_37686_38814[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (13))){
var inst_37543 = (state_37654[(26)]);
var inst_37546 = cljs.core.async.close_BANG_(inst_37543);
var state_37654__$1 = state_37654;
var statearr_37687_38815 = state_37654__$1;
(statearr_37687_38815[(2)] = inst_37546);

(statearr_37687_38815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (22))){
var inst_37566 = (state_37654[(8)]);
var inst_37569 = cljs.core.async.close_BANG_(inst_37566);
var state_37654__$1 = state_37654;
var statearr_37688_38816 = state_37654__$1;
(statearr_37688_38816[(2)] = inst_37569);

(statearr_37688_38816[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (36))){
var inst_37613 = (state_37654[(25)]);
var inst_37617 = cljs.core.chunk_first(inst_37613);
var inst_37618 = cljs.core.chunk_rest(inst_37613);
var inst_37619 = cljs.core.count(inst_37617);
var inst_37594 = inst_37618;
var inst_37595 = inst_37617;
var inst_37596 = inst_37619;
var inst_37597 = (0);
var state_37654__$1 = (function (){var statearr_37689 = state_37654;
(statearr_37689[(10)] = inst_37597);

(statearr_37689[(20)] = inst_37596);

(statearr_37689[(21)] = inst_37594);

(statearr_37689[(12)] = inst_37595);

return statearr_37689;
})();
var statearr_37690_38817 = state_37654__$1;
(statearr_37690_38817[(2)] = null);

(statearr_37690_38817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (41))){
var inst_37613 = (state_37654[(25)]);
var inst_37629 = (state_37654[(2)]);
var inst_37630 = cljs.core.next(inst_37613);
var inst_37594 = inst_37630;
var inst_37595 = null;
var inst_37596 = (0);
var inst_37597 = (0);
var state_37654__$1 = (function (){var statearr_37691 = state_37654;
(statearr_37691[(10)] = inst_37597);

(statearr_37691[(20)] = inst_37596);

(statearr_37691[(27)] = inst_37629);

(statearr_37691[(21)] = inst_37594);

(statearr_37691[(12)] = inst_37595);

return statearr_37691;
})();
var statearr_37692_38818 = state_37654__$1;
(statearr_37692_38818[(2)] = null);

(statearr_37692_38818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (43))){
var state_37654__$1 = state_37654;
var statearr_37693_38819 = state_37654__$1;
(statearr_37693_38819[(2)] = null);

(statearr_37693_38819[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (29))){
var inst_37638 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37694_38820 = state_37654__$1;
(statearr_37694_38820[(2)] = inst_37638);

(statearr_37694_38820[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (44))){
var inst_37647 = (state_37654[(2)]);
var state_37654__$1 = (function (){var statearr_37695 = state_37654;
(statearr_37695[(28)] = inst_37647);

return statearr_37695;
})();
var statearr_37696_38821 = state_37654__$1;
(statearr_37696_38821[(2)] = null);

(statearr_37696_38821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (6))){
var inst_37586 = (state_37654[(29)]);
var inst_37585 = cljs.core.deref(cs);
var inst_37586__$1 = cljs.core.keys(inst_37585);
var inst_37587 = cljs.core.count(inst_37586__$1);
var inst_37588 = cljs.core.reset_BANG_(dctr,inst_37587);
var inst_37593 = cljs.core.seq(inst_37586__$1);
var inst_37594 = inst_37593;
var inst_37595 = null;
var inst_37596 = (0);
var inst_37597 = (0);
var state_37654__$1 = (function (){var statearr_37697 = state_37654;
(statearr_37697[(29)] = inst_37586__$1);

(statearr_37697[(30)] = inst_37588);

(statearr_37697[(10)] = inst_37597);

(statearr_37697[(20)] = inst_37596);

(statearr_37697[(21)] = inst_37594);

(statearr_37697[(12)] = inst_37595);

return statearr_37697;
})();
var statearr_37698_38822 = state_37654__$1;
(statearr_37698_38822[(2)] = null);

(statearr_37698_38822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (28))){
var inst_37613 = (state_37654[(25)]);
var inst_37594 = (state_37654[(21)]);
var inst_37613__$1 = cljs.core.seq(inst_37594);
var state_37654__$1 = (function (){var statearr_37699 = state_37654;
(statearr_37699[(25)] = inst_37613__$1);

return statearr_37699;
})();
if(inst_37613__$1){
var statearr_37700_38823 = state_37654__$1;
(statearr_37700_38823[(1)] = (33));

} else {
var statearr_37701_38824 = state_37654__$1;
(statearr_37701_38824[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (25))){
var inst_37597 = (state_37654[(10)]);
var inst_37596 = (state_37654[(20)]);
var inst_37599 = (inst_37597 < inst_37596);
var inst_37600 = inst_37599;
var state_37654__$1 = state_37654;
if(cljs.core.truth_(inst_37600)){
var statearr_37702_38825 = state_37654__$1;
(statearr_37702_38825[(1)] = (27));

} else {
var statearr_37703_38826 = state_37654__$1;
(statearr_37703_38826[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (34))){
var state_37654__$1 = state_37654;
var statearr_37704_38827 = state_37654__$1;
(statearr_37704_38827[(2)] = null);

(statearr_37704_38827[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (17))){
var state_37654__$1 = state_37654;
var statearr_37705_38828 = state_37654__$1;
(statearr_37705_38828[(2)] = null);

(statearr_37705_38828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (3))){
var inst_37652 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37654__$1,inst_37652);
} else {
if((state_val_37655 === (12))){
var inst_37581 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37706_38829 = state_37654__$1;
(statearr_37706_38829[(2)] = inst_37581);

(statearr_37706_38829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (2))){
var state_37654__$1 = state_37654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37654__$1,(4),ch);
} else {
if((state_val_37655 === (23))){
var state_37654__$1 = state_37654;
var statearr_37707_38830 = state_37654__$1;
(statearr_37707_38830[(2)] = null);

(statearr_37707_38830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (35))){
var inst_37636 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37708_38831 = state_37654__$1;
(statearr_37708_38831[(2)] = inst_37636);

(statearr_37708_38831[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (19))){
var inst_37553 = (state_37654[(7)]);
var inst_37557 = cljs.core.chunk_first(inst_37553);
var inst_37558 = cljs.core.chunk_rest(inst_37553);
var inst_37559 = cljs.core.count(inst_37557);
var inst_37531 = inst_37558;
var inst_37532 = inst_37557;
var inst_37533 = inst_37559;
var inst_37534 = (0);
var state_37654__$1 = (function (){var statearr_37709 = state_37654;
(statearr_37709[(13)] = inst_37534);

(statearr_37709[(14)] = inst_37533);

(statearr_37709[(15)] = inst_37531);

(statearr_37709[(17)] = inst_37532);

return statearr_37709;
})();
var statearr_37710_38832 = state_37654__$1;
(statearr_37710_38832[(2)] = null);

(statearr_37710_38832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (11))){
var inst_37531 = (state_37654[(15)]);
var inst_37553 = (state_37654[(7)]);
var inst_37553__$1 = cljs.core.seq(inst_37531);
var state_37654__$1 = (function (){var statearr_37711 = state_37654;
(statearr_37711[(7)] = inst_37553__$1);

return statearr_37711;
})();
if(inst_37553__$1){
var statearr_37712_38833 = state_37654__$1;
(statearr_37712_38833[(1)] = (16));

} else {
var statearr_37713_38834 = state_37654__$1;
(statearr_37713_38834[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (9))){
var inst_37583 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37714_38835 = state_37654__$1;
(statearr_37714_38835[(2)] = inst_37583);

(statearr_37714_38835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (5))){
var inst_37529 = cljs.core.deref(cs);
var inst_37530 = cljs.core.seq(inst_37529);
var inst_37531 = inst_37530;
var inst_37532 = null;
var inst_37533 = (0);
var inst_37534 = (0);
var state_37654__$1 = (function (){var statearr_37715 = state_37654;
(statearr_37715[(13)] = inst_37534);

(statearr_37715[(14)] = inst_37533);

(statearr_37715[(15)] = inst_37531);

(statearr_37715[(17)] = inst_37532);

return statearr_37715;
})();
var statearr_37716_38836 = state_37654__$1;
(statearr_37716_38836[(2)] = null);

(statearr_37716_38836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (14))){
var state_37654__$1 = state_37654;
var statearr_37717_38837 = state_37654__$1;
(statearr_37717_38837[(2)] = null);

(statearr_37717_38837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (45))){
var inst_37644 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37718_38838 = state_37654__$1;
(statearr_37718_38838[(2)] = inst_37644);

(statearr_37718_38838[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (26))){
var inst_37586 = (state_37654[(29)]);
var inst_37640 = (state_37654[(2)]);
var inst_37641 = cljs.core.seq(inst_37586);
var state_37654__$1 = (function (){var statearr_37719 = state_37654;
(statearr_37719[(31)] = inst_37640);

return statearr_37719;
})();
if(inst_37641){
var statearr_37720_38839 = state_37654__$1;
(statearr_37720_38839[(1)] = (42));

} else {
var statearr_37721_38840 = state_37654__$1;
(statearr_37721_38840[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (16))){
var inst_37553 = (state_37654[(7)]);
var inst_37555 = cljs.core.chunked_seq_QMARK_(inst_37553);
var state_37654__$1 = state_37654;
if(inst_37555){
var statearr_37722_38841 = state_37654__$1;
(statearr_37722_38841[(1)] = (19));

} else {
var statearr_37723_38842 = state_37654__$1;
(statearr_37723_38842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (38))){
var inst_37633 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37724_38843 = state_37654__$1;
(statearr_37724_38843[(2)] = inst_37633);

(statearr_37724_38843[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (30))){
var state_37654__$1 = state_37654;
var statearr_37725_38844 = state_37654__$1;
(statearr_37725_38844[(2)] = null);

(statearr_37725_38844[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (10))){
var inst_37534 = (state_37654[(13)]);
var inst_37532 = (state_37654[(17)]);
var inst_37542 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37532,inst_37534);
var inst_37543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37542,(0),null);
var inst_37544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37542,(1),null);
var state_37654__$1 = (function (){var statearr_37726 = state_37654;
(statearr_37726[(26)] = inst_37543);

return statearr_37726;
})();
if(cljs.core.truth_(inst_37544)){
var statearr_37727_38845 = state_37654__$1;
(statearr_37727_38845[(1)] = (13));

} else {
var statearr_37728_38846 = state_37654__$1;
(statearr_37728_38846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (18))){
var inst_37579 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37729_38847 = state_37654__$1;
(statearr_37729_38847[(2)] = inst_37579);

(statearr_37729_38847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (42))){
var state_37654__$1 = state_37654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37654__$1,(45),dchan);
} else {
if((state_val_37655 === (37))){
var inst_37622 = (state_37654[(23)]);
var inst_37522 = (state_37654[(9)]);
var inst_37613 = (state_37654[(25)]);
var inst_37622__$1 = cljs.core.first(inst_37613);
var inst_37623 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37622__$1,inst_37522,done);
var state_37654__$1 = (function (){var statearr_37730 = state_37654;
(statearr_37730[(23)] = inst_37622__$1);

return statearr_37730;
})();
if(cljs.core.truth_(inst_37623)){
var statearr_37731_38848 = state_37654__$1;
(statearr_37731_38848[(1)] = (39));

} else {
var statearr_37732_38849 = state_37654__$1;
(statearr_37732_38849[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (8))){
var inst_37534 = (state_37654[(13)]);
var inst_37533 = (state_37654[(14)]);
var inst_37536 = (inst_37534 < inst_37533);
var inst_37537 = inst_37536;
var state_37654__$1 = state_37654;
if(cljs.core.truth_(inst_37537)){
var statearr_37733_38850 = state_37654__$1;
(statearr_37733_38850[(1)] = (10));

} else {
var statearr_37734_38851 = state_37654__$1;
(statearr_37734_38851[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__36812__auto__ = null;
var cljs$core$async$mult_$_state_machine__36812__auto____0 = (function (){
var statearr_37735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37735[(0)] = cljs$core$async$mult_$_state_machine__36812__auto__);

(statearr_37735[(1)] = (1));

return statearr_37735;
});
var cljs$core$async$mult_$_state_machine__36812__auto____1 = (function (state_37654){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37654);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37736){if((e37736 instanceof Object)){
var ex__36815__auto__ = e37736;
var statearr_37737_38852 = state_37654;
(statearr_37737_38852[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37736;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38853 = state_37654;
state_37654 = G__38853;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36812__auto__ = function(state_37654){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36812__auto____1.call(this,state_37654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36812__auto____0;
cljs$core$async$mult_$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36812__auto____1;
return cljs$core$async$mult_$_state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_37738 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37738[(6)] = c__37008__auto___38797);

return statearr_37738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
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
var G__37740 = arguments.length;
switch (G__37740) {
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
var len__4789__auto___38855 = arguments.length;
var i__4790__auto___38856 = (0);
while(true){
if((i__4790__auto___38856 < len__4789__auto___38855)){
args__4795__auto__.push((arguments[i__4790__auto___38856]));

var G__38857 = (i__4790__auto___38856 + (1));
i__4790__auto___38856 = G__38857;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37745){
var map__37746 = p__37745;
var map__37746__$1 = (((((!((map__37746 == null))))?(((((map__37746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37746):map__37746);
var opts = map__37746__$1;
var statearr_37748_38858 = state;
(statearr_37748_38858[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37749_38859 = state;
(statearr_37749_38859[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37750_38860 = state;
(statearr_37750_38860[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37741){
var G__37742 = cljs.core.first(seq37741);
var seq37741__$1 = cljs.core.next(seq37741);
var G__37743 = cljs.core.first(seq37741__$1);
var seq37741__$2 = cljs.core.next(seq37741__$1);
var G__37744 = cljs.core.first(seq37741__$2);
var seq37741__$3 = cljs.core.next(seq37741__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37742,G__37743,G__37744,seq37741__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37751 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37752){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37752 = meta37752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37753,meta37752__$1){
var self__ = this;
var _37753__$1 = this;
return (new cljs.core.async.t_cljs$core$async37751(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37752__$1));
}));

(cljs.core.async.t_cljs$core$async37751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37753){
var self__ = this;
var _37753__$1 = this;
return self__.meta37752;
}));

(cljs.core.async.t_cljs$core$async37751.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37751.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37751.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37751.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37751.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37751.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37751.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37752","meta37752",-897838269,null)], null);
}));

(cljs.core.async.t_cljs$core$async37751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37751");

(cljs.core.async.t_cljs$core$async37751.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37751.
 */
cljs.core.async.__GT_t_cljs$core$async37751 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37751(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37752){
return (new cljs.core.async.t_cljs$core$async37751(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37752));
});

}

return (new cljs.core.async.t_cljs$core$async37751(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37008__auto___38861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_37855){
var state_val_37856 = (state_37855[(1)]);
if((state_val_37856 === (7))){
var inst_37770 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
var statearr_37857_38862 = state_37855__$1;
(statearr_37857_38862[(2)] = inst_37770);

(statearr_37857_38862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (20))){
var inst_37782 = (state_37855[(7)]);
var state_37855__$1 = state_37855;
var statearr_37858_38863 = state_37855__$1;
(statearr_37858_38863[(2)] = inst_37782);

(statearr_37858_38863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (27))){
var state_37855__$1 = state_37855;
var statearr_37859_38864 = state_37855__$1;
(statearr_37859_38864[(2)] = null);

(statearr_37859_38864[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (1))){
var inst_37757 = (state_37855[(8)]);
var inst_37757__$1 = calc_state();
var inst_37759 = (inst_37757__$1 == null);
var inst_37760 = cljs.core.not(inst_37759);
var state_37855__$1 = (function (){var statearr_37860 = state_37855;
(statearr_37860[(8)] = inst_37757__$1);

return statearr_37860;
})();
if(inst_37760){
var statearr_37861_38865 = state_37855__$1;
(statearr_37861_38865[(1)] = (2));

} else {
var statearr_37862_38866 = state_37855__$1;
(statearr_37862_38866[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (24))){
var inst_37815 = (state_37855[(9)]);
var inst_37829 = (state_37855[(10)]);
var inst_37806 = (state_37855[(11)]);
var inst_37829__$1 = (inst_37806.cljs$core$IFn$_invoke$arity$1 ? inst_37806.cljs$core$IFn$_invoke$arity$1(inst_37815) : inst_37806.call(null,inst_37815));
var state_37855__$1 = (function (){var statearr_37863 = state_37855;
(statearr_37863[(10)] = inst_37829__$1);

return statearr_37863;
})();
if(cljs.core.truth_(inst_37829__$1)){
var statearr_37864_38867 = state_37855__$1;
(statearr_37864_38867[(1)] = (29));

} else {
var statearr_37865_38868 = state_37855__$1;
(statearr_37865_38868[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (4))){
var inst_37773 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
if(cljs.core.truth_(inst_37773)){
var statearr_37866_38869 = state_37855__$1;
(statearr_37866_38869[(1)] = (8));

} else {
var statearr_37867_38870 = state_37855__$1;
(statearr_37867_38870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (15))){
var inst_37800 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
if(cljs.core.truth_(inst_37800)){
var statearr_37868_38871 = state_37855__$1;
(statearr_37868_38871[(1)] = (19));

} else {
var statearr_37869_38872 = state_37855__$1;
(statearr_37869_38872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (21))){
var inst_37805 = (state_37855[(12)]);
var inst_37805__$1 = (state_37855[(2)]);
var inst_37806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37805__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37805__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37805__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37855__$1 = (function (){var statearr_37870 = state_37855;
(statearr_37870[(13)] = inst_37807);

(statearr_37870[(11)] = inst_37806);

(statearr_37870[(12)] = inst_37805__$1);

return statearr_37870;
})();
return cljs.core.async.ioc_alts_BANG_(state_37855__$1,(22),inst_37808);
} else {
if((state_val_37856 === (31))){
var inst_37837 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
if(cljs.core.truth_(inst_37837)){
var statearr_37871_38873 = state_37855__$1;
(statearr_37871_38873[(1)] = (32));

} else {
var statearr_37872_38874 = state_37855__$1;
(statearr_37872_38874[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (32))){
var inst_37814 = (state_37855[(14)]);
var state_37855__$1 = state_37855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37855__$1,(35),out,inst_37814);
} else {
if((state_val_37856 === (33))){
var inst_37805 = (state_37855[(12)]);
var inst_37782 = inst_37805;
var state_37855__$1 = (function (){var statearr_37873 = state_37855;
(statearr_37873[(7)] = inst_37782);

return statearr_37873;
})();
var statearr_37874_38875 = state_37855__$1;
(statearr_37874_38875[(2)] = null);

(statearr_37874_38875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (13))){
var inst_37782 = (state_37855[(7)]);
var inst_37789 = inst_37782.cljs$lang$protocol_mask$partition0$;
var inst_37790 = (inst_37789 & (64));
var inst_37791 = inst_37782.cljs$core$ISeq$;
var inst_37792 = (cljs.core.PROTOCOL_SENTINEL === inst_37791);
var inst_37793 = ((inst_37790) || (inst_37792));
var state_37855__$1 = state_37855;
if(cljs.core.truth_(inst_37793)){
var statearr_37875_38876 = state_37855__$1;
(statearr_37875_38876[(1)] = (16));

} else {
var statearr_37876_38877 = state_37855__$1;
(statearr_37876_38877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (22))){
var inst_37815 = (state_37855[(9)]);
var inst_37814 = (state_37855[(14)]);
var inst_37813 = (state_37855[(2)]);
var inst_37814__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37813,(0),null);
var inst_37815__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37813,(1),null);
var inst_37816 = (inst_37814__$1 == null);
var inst_37817 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37815__$1,change);
var inst_37818 = ((inst_37816) || (inst_37817));
var state_37855__$1 = (function (){var statearr_37877 = state_37855;
(statearr_37877[(9)] = inst_37815__$1);

(statearr_37877[(14)] = inst_37814__$1);

return statearr_37877;
})();
if(cljs.core.truth_(inst_37818)){
var statearr_37878_38878 = state_37855__$1;
(statearr_37878_38878[(1)] = (23));

} else {
var statearr_37879_38879 = state_37855__$1;
(statearr_37879_38879[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (36))){
var inst_37805 = (state_37855[(12)]);
var inst_37782 = inst_37805;
var state_37855__$1 = (function (){var statearr_37880 = state_37855;
(statearr_37880[(7)] = inst_37782);

return statearr_37880;
})();
var statearr_37881_38880 = state_37855__$1;
(statearr_37881_38880[(2)] = null);

(statearr_37881_38880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (29))){
var inst_37829 = (state_37855[(10)]);
var state_37855__$1 = state_37855;
var statearr_37882_38881 = state_37855__$1;
(statearr_37882_38881[(2)] = inst_37829);

(statearr_37882_38881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (6))){
var state_37855__$1 = state_37855;
var statearr_37883_38882 = state_37855__$1;
(statearr_37883_38882[(2)] = false);

(statearr_37883_38882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (28))){
var inst_37825 = (state_37855[(2)]);
var inst_37826 = calc_state();
var inst_37782 = inst_37826;
var state_37855__$1 = (function (){var statearr_37884 = state_37855;
(statearr_37884[(7)] = inst_37782);

(statearr_37884[(15)] = inst_37825);

return statearr_37884;
})();
var statearr_37885_38883 = state_37855__$1;
(statearr_37885_38883[(2)] = null);

(statearr_37885_38883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (25))){
var inst_37851 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
var statearr_37886_38884 = state_37855__$1;
(statearr_37886_38884[(2)] = inst_37851);

(statearr_37886_38884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (34))){
var inst_37849 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
var statearr_37887_38885 = state_37855__$1;
(statearr_37887_38885[(2)] = inst_37849);

(statearr_37887_38885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (17))){
var state_37855__$1 = state_37855;
var statearr_37888_38886 = state_37855__$1;
(statearr_37888_38886[(2)] = false);

(statearr_37888_38886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (3))){
var state_37855__$1 = state_37855;
var statearr_37889_38887 = state_37855__$1;
(statearr_37889_38887[(2)] = false);

(statearr_37889_38887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (12))){
var inst_37853 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37855__$1,inst_37853);
} else {
if((state_val_37856 === (2))){
var inst_37757 = (state_37855[(8)]);
var inst_37762 = inst_37757.cljs$lang$protocol_mask$partition0$;
var inst_37763 = (inst_37762 & (64));
var inst_37764 = inst_37757.cljs$core$ISeq$;
var inst_37765 = (cljs.core.PROTOCOL_SENTINEL === inst_37764);
var inst_37766 = ((inst_37763) || (inst_37765));
var state_37855__$1 = state_37855;
if(cljs.core.truth_(inst_37766)){
var statearr_37890_38888 = state_37855__$1;
(statearr_37890_38888[(1)] = (5));

} else {
var statearr_37891_38889 = state_37855__$1;
(statearr_37891_38889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (23))){
var inst_37814 = (state_37855[(14)]);
var inst_37820 = (inst_37814 == null);
var state_37855__$1 = state_37855;
if(cljs.core.truth_(inst_37820)){
var statearr_37892_38890 = state_37855__$1;
(statearr_37892_38890[(1)] = (26));

} else {
var statearr_37893_38891 = state_37855__$1;
(statearr_37893_38891[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (35))){
var inst_37840 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
if(cljs.core.truth_(inst_37840)){
var statearr_37894_38892 = state_37855__$1;
(statearr_37894_38892[(1)] = (36));

} else {
var statearr_37895_38893 = state_37855__$1;
(statearr_37895_38893[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (19))){
var inst_37782 = (state_37855[(7)]);
var inst_37802 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37782);
var state_37855__$1 = state_37855;
var statearr_37896_38894 = state_37855__$1;
(statearr_37896_38894[(2)] = inst_37802);

(statearr_37896_38894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (11))){
var inst_37782 = (state_37855[(7)]);
var inst_37786 = (inst_37782 == null);
var inst_37787 = cljs.core.not(inst_37786);
var state_37855__$1 = state_37855;
if(inst_37787){
var statearr_37897_38895 = state_37855__$1;
(statearr_37897_38895[(1)] = (13));

} else {
var statearr_37898_38896 = state_37855__$1;
(statearr_37898_38896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (9))){
var inst_37757 = (state_37855[(8)]);
var state_37855__$1 = state_37855;
var statearr_37899_38897 = state_37855__$1;
(statearr_37899_38897[(2)] = inst_37757);

(statearr_37899_38897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (5))){
var state_37855__$1 = state_37855;
var statearr_37900_38898 = state_37855__$1;
(statearr_37900_38898[(2)] = true);

(statearr_37900_38898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (14))){
var state_37855__$1 = state_37855;
var statearr_37901_38899 = state_37855__$1;
(statearr_37901_38899[(2)] = false);

(statearr_37901_38899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (26))){
var inst_37815 = (state_37855[(9)]);
var inst_37822 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37815);
var state_37855__$1 = state_37855;
var statearr_37902_38900 = state_37855__$1;
(statearr_37902_38900[(2)] = inst_37822);

(statearr_37902_38900[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (16))){
var state_37855__$1 = state_37855;
var statearr_37903_38901 = state_37855__$1;
(statearr_37903_38901[(2)] = true);

(statearr_37903_38901[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (38))){
var inst_37845 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
var statearr_37904_38902 = state_37855__$1;
(statearr_37904_38902[(2)] = inst_37845);

(statearr_37904_38902[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (30))){
var inst_37815 = (state_37855[(9)]);
var inst_37807 = (state_37855[(13)]);
var inst_37806 = (state_37855[(11)]);
var inst_37832 = cljs.core.empty_QMARK_(inst_37806);
var inst_37833 = (inst_37807.cljs$core$IFn$_invoke$arity$1 ? inst_37807.cljs$core$IFn$_invoke$arity$1(inst_37815) : inst_37807.call(null,inst_37815));
var inst_37834 = cljs.core.not(inst_37833);
var inst_37835 = ((inst_37832) && (inst_37834));
var state_37855__$1 = state_37855;
var statearr_37905_38903 = state_37855__$1;
(statearr_37905_38903[(2)] = inst_37835);

(statearr_37905_38903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (10))){
var inst_37757 = (state_37855[(8)]);
var inst_37778 = (state_37855[(2)]);
var inst_37779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37778,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37778,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37778,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37782 = inst_37757;
var state_37855__$1 = (function (){var statearr_37906 = state_37855;
(statearr_37906[(16)] = inst_37779);

(statearr_37906[(17)] = inst_37781);

(statearr_37906[(7)] = inst_37782);

(statearr_37906[(18)] = inst_37780);

return statearr_37906;
})();
var statearr_37907_38904 = state_37855__$1;
(statearr_37907_38904[(2)] = null);

(statearr_37907_38904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (18))){
var inst_37797 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
var statearr_37908_38905 = state_37855__$1;
(statearr_37908_38905[(2)] = inst_37797);

(statearr_37908_38905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (37))){
var state_37855__$1 = state_37855;
var statearr_37909_38906 = state_37855__$1;
(statearr_37909_38906[(2)] = null);

(statearr_37909_38906[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (8))){
var inst_37757 = (state_37855[(8)]);
var inst_37775 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37757);
var state_37855__$1 = state_37855;
var statearr_37910_38907 = state_37855__$1;
(statearr_37910_38907[(2)] = inst_37775);

(statearr_37910_38907[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__36812__auto__ = null;
var cljs$core$async$mix_$_state_machine__36812__auto____0 = (function (){
var statearr_37911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37911[(0)] = cljs$core$async$mix_$_state_machine__36812__auto__);

(statearr_37911[(1)] = (1));

return statearr_37911;
});
var cljs$core$async$mix_$_state_machine__36812__auto____1 = (function (state_37855){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_37855);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e37912){if((e37912 instanceof Object)){
var ex__36815__auto__ = e37912;
var statearr_37913_38908 = state_37855;
(statearr_37913_38908[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37912;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38909 = state_37855;
state_37855 = G__38909;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36812__auto__ = function(state_37855){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36812__auto____1.call(this,state_37855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36812__auto____0;
cljs$core$async$mix_$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36812__auto____1;
return cljs$core$async$mix_$_state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_37914 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_37914[(6)] = c__37008__auto___38861);

return statearr_37914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
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
var G__37926 = arguments.length;
switch (G__37926) {
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
var G__37949 = arguments.length;
switch (G__37949) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37945_SHARP_){
if(cljs.core.truth_((p1__37945_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37945_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37945_SHARP_.call(null,topic)))){
return p1__37945_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37945_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37956 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37957){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37957 = meta37957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37958,meta37957__$1){
var self__ = this;
var _37958__$1 = this;
return (new cljs.core.async.t_cljs$core$async37956(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37957__$1));
}));

(cljs.core.async.t_cljs$core$async37956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37958){
var self__ = this;
var _37958__$1 = this;
return self__.meta37957;
}));

(cljs.core.async.t_cljs$core$async37956.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37956.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37956.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37956.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async37956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37957","meta37957",-1945951035,null)], null);
}));

(cljs.core.async.t_cljs$core$async37956.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37956");

(cljs.core.async.t_cljs$core$async37956.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37956");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37956.
 */
cljs.core.async.__GT_t_cljs$core$async37956 = (function cljs$core$async$__GT_t_cljs$core$async37956(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37957){
return (new cljs.core.async.t_cljs$core$async37956(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37957));
});

}

return (new cljs.core.async.t_cljs$core$async37956(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37008__auto___38912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_38053){
var state_val_38054 = (state_38053[(1)]);
if((state_val_38054 === (7))){
var inst_38049 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38060_38913 = state_38053__$1;
(statearr_38060_38913[(2)] = inst_38049);

(statearr_38060_38913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (20))){
var state_38053__$1 = state_38053;
var statearr_38061_38914 = state_38053__$1;
(statearr_38061_38914[(2)] = null);

(statearr_38061_38914[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (1))){
var state_38053__$1 = state_38053;
var statearr_38062_38915 = state_38053__$1;
(statearr_38062_38915[(2)] = null);

(statearr_38062_38915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (24))){
var inst_38030 = (state_38053[(7)]);
var inst_38041 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38030);
var state_38053__$1 = state_38053;
var statearr_38065_38916 = state_38053__$1;
(statearr_38065_38916[(2)] = inst_38041);

(statearr_38065_38916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (4))){
var inst_37970 = (state_38053[(8)]);
var inst_37970__$1 = (state_38053[(2)]);
var inst_37978 = (inst_37970__$1 == null);
var state_38053__$1 = (function (){var statearr_38066 = state_38053;
(statearr_38066[(8)] = inst_37970__$1);

return statearr_38066;
})();
if(cljs.core.truth_(inst_37978)){
var statearr_38067_38917 = state_38053__$1;
(statearr_38067_38917[(1)] = (5));

} else {
var statearr_38068_38918 = state_38053__$1;
(statearr_38068_38918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (15))){
var inst_38024 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38069_38919 = state_38053__$1;
(statearr_38069_38919[(2)] = inst_38024);

(statearr_38069_38919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (21))){
var inst_38046 = (state_38053[(2)]);
var state_38053__$1 = (function (){var statearr_38070 = state_38053;
(statearr_38070[(9)] = inst_38046);

return statearr_38070;
})();
var statearr_38071_38920 = state_38053__$1;
(statearr_38071_38920[(2)] = null);

(statearr_38071_38920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (13))){
var inst_38001 = (state_38053[(10)]);
var inst_38003 = cljs.core.chunked_seq_QMARK_(inst_38001);
var state_38053__$1 = state_38053;
if(inst_38003){
var statearr_38072_38921 = state_38053__$1;
(statearr_38072_38921[(1)] = (16));

} else {
var statearr_38073_38922 = state_38053__$1;
(statearr_38073_38922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (22))){
var inst_38036 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
if(cljs.core.truth_(inst_38036)){
var statearr_38074_38923 = state_38053__$1;
(statearr_38074_38923[(1)] = (23));

} else {
var statearr_38075_38924 = state_38053__$1;
(statearr_38075_38924[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (6))){
var inst_37970 = (state_38053[(8)]);
var inst_38032 = (state_38053[(11)]);
var inst_38030 = (state_38053[(7)]);
var inst_38030__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37970) : topic_fn.call(null,inst_37970));
var inst_38031 = cljs.core.deref(mults);
var inst_38032__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38031,inst_38030__$1);
var state_38053__$1 = (function (){var statearr_38077 = state_38053;
(statearr_38077[(11)] = inst_38032__$1);

(statearr_38077[(7)] = inst_38030__$1);

return statearr_38077;
})();
if(cljs.core.truth_(inst_38032__$1)){
var statearr_38079_38925 = state_38053__$1;
(statearr_38079_38925[(1)] = (19));

} else {
var statearr_38080_38926 = state_38053__$1;
(statearr_38080_38926[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (25))){
var inst_38043 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38081_38927 = state_38053__$1;
(statearr_38081_38927[(2)] = inst_38043);

(statearr_38081_38927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (17))){
var inst_38001 = (state_38053[(10)]);
var inst_38010 = cljs.core.first(inst_38001);
var inst_38011 = cljs.core.async.muxch_STAR_(inst_38010);
var inst_38012 = cljs.core.async.close_BANG_(inst_38011);
var inst_38018 = cljs.core.next(inst_38001);
var inst_37987 = inst_38018;
var inst_37988 = null;
var inst_37989 = (0);
var inst_37990 = (0);
var state_38053__$1 = (function (){var statearr_38083 = state_38053;
(statearr_38083[(12)] = inst_37987);

(statearr_38083[(13)] = inst_37988);

(statearr_38083[(14)] = inst_38012);

(statearr_38083[(15)] = inst_37989);

(statearr_38083[(16)] = inst_37990);

return statearr_38083;
})();
var statearr_38085_38928 = state_38053__$1;
(statearr_38085_38928[(2)] = null);

(statearr_38085_38928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (3))){
var inst_38051 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38053__$1,inst_38051);
} else {
if((state_val_38054 === (12))){
var inst_38026 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38089_38929 = state_38053__$1;
(statearr_38089_38929[(2)] = inst_38026);

(statearr_38089_38929[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (2))){
var state_38053__$1 = state_38053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38053__$1,(4),ch);
} else {
if((state_val_38054 === (23))){
var state_38053__$1 = state_38053;
var statearr_38090_38930 = state_38053__$1;
(statearr_38090_38930[(2)] = null);

(statearr_38090_38930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (19))){
var inst_37970 = (state_38053[(8)]);
var inst_38032 = (state_38053[(11)]);
var inst_38034 = cljs.core.async.muxch_STAR_(inst_38032);
var state_38053__$1 = state_38053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38053__$1,(22),inst_38034,inst_37970);
} else {
if((state_val_38054 === (11))){
var inst_37987 = (state_38053[(12)]);
var inst_38001 = (state_38053[(10)]);
var inst_38001__$1 = cljs.core.seq(inst_37987);
var state_38053__$1 = (function (){var statearr_38091 = state_38053;
(statearr_38091[(10)] = inst_38001__$1);

return statearr_38091;
})();
if(inst_38001__$1){
var statearr_38093_38931 = state_38053__$1;
(statearr_38093_38931[(1)] = (13));

} else {
var statearr_38094_38932 = state_38053__$1;
(statearr_38094_38932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (9))){
var inst_38028 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38095_38933 = state_38053__$1;
(statearr_38095_38933[(2)] = inst_38028);

(statearr_38095_38933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (5))){
var inst_37984 = cljs.core.deref(mults);
var inst_37985 = cljs.core.vals(inst_37984);
var inst_37986 = cljs.core.seq(inst_37985);
var inst_37987 = inst_37986;
var inst_37988 = null;
var inst_37989 = (0);
var inst_37990 = (0);
var state_38053__$1 = (function (){var statearr_38096 = state_38053;
(statearr_38096[(12)] = inst_37987);

(statearr_38096[(13)] = inst_37988);

(statearr_38096[(15)] = inst_37989);

(statearr_38096[(16)] = inst_37990);

return statearr_38096;
})();
var statearr_38097_38934 = state_38053__$1;
(statearr_38097_38934[(2)] = null);

(statearr_38097_38934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (14))){
var state_38053__$1 = state_38053;
var statearr_38101_38935 = state_38053__$1;
(statearr_38101_38935[(2)] = null);

(statearr_38101_38935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (16))){
var inst_38001 = (state_38053[(10)]);
var inst_38005 = cljs.core.chunk_first(inst_38001);
var inst_38006 = cljs.core.chunk_rest(inst_38001);
var inst_38007 = cljs.core.count(inst_38005);
var inst_37987 = inst_38006;
var inst_37988 = inst_38005;
var inst_37989 = inst_38007;
var inst_37990 = (0);
var state_38053__$1 = (function (){var statearr_38102 = state_38053;
(statearr_38102[(12)] = inst_37987);

(statearr_38102[(13)] = inst_37988);

(statearr_38102[(15)] = inst_37989);

(statearr_38102[(16)] = inst_37990);

return statearr_38102;
})();
var statearr_38106_38936 = state_38053__$1;
(statearr_38106_38936[(2)] = null);

(statearr_38106_38936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (10))){
var inst_37987 = (state_38053[(12)]);
var inst_37988 = (state_38053[(13)]);
var inst_37989 = (state_38053[(15)]);
var inst_37990 = (state_38053[(16)]);
var inst_37995 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37988,inst_37990);
var inst_37996 = cljs.core.async.muxch_STAR_(inst_37995);
var inst_37997 = cljs.core.async.close_BANG_(inst_37996);
var inst_37998 = (inst_37990 + (1));
var tmp38098 = inst_37987;
var tmp38099 = inst_37988;
var tmp38100 = inst_37989;
var inst_37987__$1 = tmp38098;
var inst_37988__$1 = tmp38099;
var inst_37989__$1 = tmp38100;
var inst_37990__$1 = inst_37998;
var state_38053__$1 = (function (){var statearr_38107 = state_38053;
(statearr_38107[(17)] = inst_37997);

(statearr_38107[(12)] = inst_37987__$1);

(statearr_38107[(13)] = inst_37988__$1);

(statearr_38107[(15)] = inst_37989__$1);

(statearr_38107[(16)] = inst_37990__$1);

return statearr_38107;
})();
var statearr_38108_38937 = state_38053__$1;
(statearr_38108_38937[(2)] = null);

(statearr_38108_38937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (18))){
var inst_38021 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38109_38938 = state_38053__$1;
(statearr_38109_38938[(2)] = inst_38021);

(statearr_38109_38938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (8))){
var inst_37989 = (state_38053[(15)]);
var inst_37990 = (state_38053[(16)]);
var inst_37992 = (inst_37990 < inst_37989);
var inst_37993 = inst_37992;
var state_38053__$1 = state_38053;
if(cljs.core.truth_(inst_37993)){
var statearr_38113_38939 = state_38053__$1;
(statearr_38113_38939[(1)] = (10));

} else {
var statearr_38114_38940 = state_38053__$1;
(statearr_38114_38940[(1)] = (11));

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
var cljs$core$async$state_machine__36812__auto__ = null;
var cljs$core$async$state_machine__36812__auto____0 = (function (){
var statearr_38115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38115[(0)] = cljs$core$async$state_machine__36812__auto__);

(statearr_38115[(1)] = (1));

return statearr_38115;
});
var cljs$core$async$state_machine__36812__auto____1 = (function (state_38053){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_38053);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e38116){if((e38116 instanceof Object)){
var ex__36815__auto__ = e38116;
var statearr_38117_38941 = state_38053;
(statearr_38117_38941[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38942 = state_38053;
state_38053 = G__38942;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$state_machine__36812__auto__ = function(state_38053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36812__auto____1.call(this,state_38053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36812__auto____0;
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36812__auto____1;
return cljs$core$async$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_38118 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_38118[(6)] = c__37008__auto___38912);

return statearr_38118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
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
var G__38123 = arguments.length;
switch (G__38123) {
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
var G__38125 = arguments.length;
switch (G__38125) {
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
var G__38127 = arguments.length;
switch (G__38127) {
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
var c__37008__auto___38946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_38173){
var state_val_38174 = (state_38173[(1)]);
if((state_val_38174 === (7))){
var state_38173__$1 = state_38173;
var statearr_38175_38947 = state_38173__$1;
(statearr_38175_38947[(2)] = null);

(statearr_38175_38947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (1))){
var state_38173__$1 = state_38173;
var statearr_38176_38948 = state_38173__$1;
(statearr_38176_38948[(2)] = null);

(statearr_38176_38948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (4))){
var inst_38130 = (state_38173[(7)]);
var inst_38132 = (inst_38130 < cnt);
var state_38173__$1 = state_38173;
if(cljs.core.truth_(inst_38132)){
var statearr_38177_38949 = state_38173__$1;
(statearr_38177_38949[(1)] = (6));

} else {
var statearr_38178_38950 = state_38173__$1;
(statearr_38178_38950[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (15))){
var inst_38168 = (state_38173[(2)]);
var state_38173__$1 = state_38173;
var statearr_38180_38951 = state_38173__$1;
(statearr_38180_38951[(2)] = inst_38168);

(statearr_38180_38951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (13))){
var inst_38161 = cljs.core.async.close_BANG_(out);
var state_38173__$1 = state_38173;
var statearr_38183_38952 = state_38173__$1;
(statearr_38183_38952[(2)] = inst_38161);

(statearr_38183_38952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (6))){
var state_38173__$1 = state_38173;
var statearr_38185_38953 = state_38173__$1;
(statearr_38185_38953[(2)] = null);

(statearr_38185_38953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (3))){
var inst_38170 = (state_38173[(2)]);
var state_38173__$1 = state_38173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38173__$1,inst_38170);
} else {
if((state_val_38174 === (12))){
var inst_38155 = (state_38173[(8)]);
var inst_38155__$1 = (state_38173[(2)]);
var inst_38156 = cljs.core.some(cljs.core.nil_QMARK_,inst_38155__$1);
var state_38173__$1 = (function (){var statearr_38188 = state_38173;
(statearr_38188[(8)] = inst_38155__$1);

return statearr_38188;
})();
if(cljs.core.truth_(inst_38156)){
var statearr_38189_38954 = state_38173__$1;
(statearr_38189_38954[(1)] = (13));

} else {
var statearr_38190_38955 = state_38173__$1;
(statearr_38190_38955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (2))){
var inst_38129 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38130 = (0);
var state_38173__$1 = (function (){var statearr_38191 = state_38173;
(statearr_38191[(7)] = inst_38130);

(statearr_38191[(9)] = inst_38129);

return statearr_38191;
})();
var statearr_38192_38956 = state_38173__$1;
(statearr_38192_38956[(2)] = null);

(statearr_38192_38956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (11))){
var inst_38130 = (state_38173[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38173,(10),Object,null,(9));
var inst_38142 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38130) : chs__$1.call(null,inst_38130));
var inst_38143 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38130) : done.call(null,inst_38130));
var inst_38144 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38142,inst_38143);
var state_38173__$1 = state_38173;
var statearr_38196_38957 = state_38173__$1;
(statearr_38196_38957[(2)] = inst_38144);


cljs.core.async.impl.ioc_helpers.process_exception(state_38173__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (9))){
var inst_38130 = (state_38173[(7)]);
var inst_38146 = (state_38173[(2)]);
var inst_38147 = (inst_38130 + (1));
var inst_38130__$1 = inst_38147;
var state_38173__$1 = (function (){var statearr_38200 = state_38173;
(statearr_38200[(7)] = inst_38130__$1);

(statearr_38200[(10)] = inst_38146);

return statearr_38200;
})();
var statearr_38201_38958 = state_38173__$1;
(statearr_38201_38958[(2)] = null);

(statearr_38201_38958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (5))){
var inst_38153 = (state_38173[(2)]);
var state_38173__$1 = (function (){var statearr_38202 = state_38173;
(statearr_38202[(11)] = inst_38153);

return statearr_38202;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38173__$1,(12),dchan);
} else {
if((state_val_38174 === (14))){
var inst_38155 = (state_38173[(8)]);
var inst_38163 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38155);
var state_38173__$1 = state_38173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38173__$1,(16),out,inst_38163);
} else {
if((state_val_38174 === (16))){
var inst_38165 = (state_38173[(2)]);
var state_38173__$1 = (function (){var statearr_38203 = state_38173;
(statearr_38203[(12)] = inst_38165);

return statearr_38203;
})();
var statearr_38204_38959 = state_38173__$1;
(statearr_38204_38959[(2)] = null);

(statearr_38204_38959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (10))){
var inst_38134 = (state_38173[(2)]);
var inst_38135 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38173__$1 = (function (){var statearr_38205 = state_38173;
(statearr_38205[(13)] = inst_38134);

return statearr_38205;
})();
var statearr_38206_38960 = state_38173__$1;
(statearr_38206_38960[(2)] = inst_38135);


cljs.core.async.impl.ioc_helpers.process_exception(state_38173__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38174 === (8))){
var inst_38151 = (state_38173[(2)]);
var state_38173__$1 = state_38173;
var statearr_38207_38961 = state_38173__$1;
(statearr_38207_38961[(2)] = inst_38151);

(statearr_38207_38961[(1)] = (5));


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
var cljs$core$async$state_machine__36812__auto__ = null;
var cljs$core$async$state_machine__36812__auto____0 = (function (){
var statearr_38208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38208[(0)] = cljs$core$async$state_machine__36812__auto__);

(statearr_38208[(1)] = (1));

return statearr_38208;
});
var cljs$core$async$state_machine__36812__auto____1 = (function (state_38173){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_38173);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e38209){if((e38209 instanceof Object)){
var ex__36815__auto__ = e38209;
var statearr_38210_38962 = state_38173;
(statearr_38210_38962[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38963 = state_38173;
state_38173 = G__38963;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$state_machine__36812__auto__ = function(state_38173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36812__auto____1.call(this,state_38173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36812__auto____0;
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36812__auto____1;
return cljs$core$async$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_38211 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_38211[(6)] = c__37008__auto___38946);

return statearr_38211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
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
var G__38214 = arguments.length;
switch (G__38214) {
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
var c__37008__auto___38965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_38246){
var state_val_38247 = (state_38246[(1)]);
if((state_val_38247 === (7))){
var inst_38225 = (state_38246[(7)]);
var inst_38226 = (state_38246[(8)]);
var inst_38225__$1 = (state_38246[(2)]);
var inst_38226__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38225__$1,(0),null);
var inst_38227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38225__$1,(1),null);
var inst_38228 = (inst_38226__$1 == null);
var state_38246__$1 = (function (){var statearr_38248 = state_38246;
(statearr_38248[(9)] = inst_38227);

(statearr_38248[(7)] = inst_38225__$1);

(statearr_38248[(8)] = inst_38226__$1);

return statearr_38248;
})();
if(cljs.core.truth_(inst_38228)){
var statearr_38249_38966 = state_38246__$1;
(statearr_38249_38966[(1)] = (8));

} else {
var statearr_38250_38967 = state_38246__$1;
(statearr_38250_38967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (1))){
var inst_38215 = cljs.core.vec(chs);
var inst_38216 = inst_38215;
var state_38246__$1 = (function (){var statearr_38251 = state_38246;
(statearr_38251[(10)] = inst_38216);

return statearr_38251;
})();
var statearr_38252_38968 = state_38246__$1;
(statearr_38252_38968[(2)] = null);

(statearr_38252_38968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (4))){
var inst_38216 = (state_38246[(10)]);
var state_38246__$1 = state_38246;
return cljs.core.async.ioc_alts_BANG_(state_38246__$1,(7),inst_38216);
} else {
if((state_val_38247 === (6))){
var inst_38242 = (state_38246[(2)]);
var state_38246__$1 = state_38246;
var statearr_38253_38969 = state_38246__$1;
(statearr_38253_38969[(2)] = inst_38242);

(statearr_38253_38969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (3))){
var inst_38244 = (state_38246[(2)]);
var state_38246__$1 = state_38246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38246__$1,inst_38244);
} else {
if((state_val_38247 === (2))){
var inst_38216 = (state_38246[(10)]);
var inst_38218 = cljs.core.count(inst_38216);
var inst_38219 = (inst_38218 > (0));
var state_38246__$1 = state_38246;
if(cljs.core.truth_(inst_38219)){
var statearr_38255_38970 = state_38246__$1;
(statearr_38255_38970[(1)] = (4));

} else {
var statearr_38256_38971 = state_38246__$1;
(statearr_38256_38971[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (11))){
var inst_38216 = (state_38246[(10)]);
var inst_38235 = (state_38246[(2)]);
var tmp38254 = inst_38216;
var inst_38216__$1 = tmp38254;
var state_38246__$1 = (function (){var statearr_38257 = state_38246;
(statearr_38257[(10)] = inst_38216__$1);

(statearr_38257[(11)] = inst_38235);

return statearr_38257;
})();
var statearr_38258_38972 = state_38246__$1;
(statearr_38258_38972[(2)] = null);

(statearr_38258_38972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (9))){
var inst_38226 = (state_38246[(8)]);
var state_38246__$1 = state_38246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38246__$1,(11),out,inst_38226);
} else {
if((state_val_38247 === (5))){
var inst_38240 = cljs.core.async.close_BANG_(out);
var state_38246__$1 = state_38246;
var statearr_38259_38973 = state_38246__$1;
(statearr_38259_38973[(2)] = inst_38240);

(statearr_38259_38973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (10))){
var inst_38238 = (state_38246[(2)]);
var state_38246__$1 = state_38246;
var statearr_38260_38974 = state_38246__$1;
(statearr_38260_38974[(2)] = inst_38238);

(statearr_38260_38974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38247 === (8))){
var inst_38216 = (state_38246[(10)]);
var inst_38227 = (state_38246[(9)]);
var inst_38225 = (state_38246[(7)]);
var inst_38226 = (state_38246[(8)]);
var inst_38230 = (function (){var cs = inst_38216;
var vec__38221 = inst_38225;
var v = inst_38226;
var c = inst_38227;
return (function (p1__38212_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38212_SHARP_);
});
})();
var inst_38231 = cljs.core.filterv(inst_38230,inst_38216);
var inst_38216__$1 = inst_38231;
var state_38246__$1 = (function (){var statearr_38261 = state_38246;
(statearr_38261[(10)] = inst_38216__$1);

return statearr_38261;
})();
var statearr_38262_38975 = state_38246__$1;
(statearr_38262_38975[(2)] = null);

(statearr_38262_38975[(1)] = (2));


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
var cljs$core$async$state_machine__36812__auto__ = null;
var cljs$core$async$state_machine__36812__auto____0 = (function (){
var statearr_38263 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38263[(0)] = cljs$core$async$state_machine__36812__auto__);

(statearr_38263[(1)] = (1));

return statearr_38263;
});
var cljs$core$async$state_machine__36812__auto____1 = (function (state_38246){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_38246);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e38264){if((e38264 instanceof Object)){
var ex__36815__auto__ = e38264;
var statearr_38265_38976 = state_38246;
(statearr_38265_38976[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38977 = state_38246;
state_38246 = G__38977;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$state_machine__36812__auto__ = function(state_38246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36812__auto____1.call(this,state_38246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36812__auto____0;
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36812__auto____1;
return cljs$core$async$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_38266 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_38266[(6)] = c__37008__auto___38965);

return statearr_38266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
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
var G__38268 = arguments.length;
switch (G__38268) {
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
var c__37008__auto___38979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_38292){
var state_val_38293 = (state_38292[(1)]);
if((state_val_38293 === (7))){
var inst_38274 = (state_38292[(7)]);
var inst_38274__$1 = (state_38292[(2)]);
var inst_38275 = (inst_38274__$1 == null);
var inst_38276 = cljs.core.not(inst_38275);
var state_38292__$1 = (function (){var statearr_38294 = state_38292;
(statearr_38294[(7)] = inst_38274__$1);

return statearr_38294;
})();
if(inst_38276){
var statearr_38295_38980 = state_38292__$1;
(statearr_38295_38980[(1)] = (8));

} else {
var statearr_38296_38981 = state_38292__$1;
(statearr_38296_38981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38293 === (1))){
var inst_38269 = (0);
var state_38292__$1 = (function (){var statearr_38297 = state_38292;
(statearr_38297[(8)] = inst_38269);

return statearr_38297;
})();
var statearr_38298_38982 = state_38292__$1;
(statearr_38298_38982[(2)] = null);

(statearr_38298_38982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38293 === (4))){
var state_38292__$1 = state_38292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38292__$1,(7),ch);
} else {
if((state_val_38293 === (6))){
var inst_38287 = (state_38292[(2)]);
var state_38292__$1 = state_38292;
var statearr_38299_38983 = state_38292__$1;
(statearr_38299_38983[(2)] = inst_38287);

(statearr_38299_38983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38293 === (3))){
var inst_38289 = (state_38292[(2)]);
var inst_38290 = cljs.core.async.close_BANG_(out);
var state_38292__$1 = (function (){var statearr_38300 = state_38292;
(statearr_38300[(9)] = inst_38289);

return statearr_38300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38292__$1,inst_38290);
} else {
if((state_val_38293 === (2))){
var inst_38269 = (state_38292[(8)]);
var inst_38271 = (inst_38269 < n);
var state_38292__$1 = state_38292;
if(cljs.core.truth_(inst_38271)){
var statearr_38301_38984 = state_38292__$1;
(statearr_38301_38984[(1)] = (4));

} else {
var statearr_38302_38985 = state_38292__$1;
(statearr_38302_38985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38293 === (11))){
var inst_38269 = (state_38292[(8)]);
var inst_38279 = (state_38292[(2)]);
var inst_38280 = (inst_38269 + (1));
var inst_38269__$1 = inst_38280;
var state_38292__$1 = (function (){var statearr_38303 = state_38292;
(statearr_38303[(8)] = inst_38269__$1);

(statearr_38303[(10)] = inst_38279);

return statearr_38303;
})();
var statearr_38304_38986 = state_38292__$1;
(statearr_38304_38986[(2)] = null);

(statearr_38304_38986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38293 === (9))){
var state_38292__$1 = state_38292;
var statearr_38305_38987 = state_38292__$1;
(statearr_38305_38987[(2)] = null);

(statearr_38305_38987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38293 === (5))){
var state_38292__$1 = state_38292;
var statearr_38306_38988 = state_38292__$1;
(statearr_38306_38988[(2)] = null);

(statearr_38306_38988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38293 === (10))){
var inst_38284 = (state_38292[(2)]);
var state_38292__$1 = state_38292;
var statearr_38307_38989 = state_38292__$1;
(statearr_38307_38989[(2)] = inst_38284);

(statearr_38307_38989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38293 === (8))){
var inst_38274 = (state_38292[(7)]);
var state_38292__$1 = state_38292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38292__$1,(11),out,inst_38274);
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
var cljs$core$async$state_machine__36812__auto__ = null;
var cljs$core$async$state_machine__36812__auto____0 = (function (){
var statearr_38308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38308[(0)] = cljs$core$async$state_machine__36812__auto__);

(statearr_38308[(1)] = (1));

return statearr_38308;
});
var cljs$core$async$state_machine__36812__auto____1 = (function (state_38292){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_38292);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e38309){if((e38309 instanceof Object)){
var ex__36815__auto__ = e38309;
var statearr_38310_38990 = state_38292;
(statearr_38310_38990[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38991 = state_38292;
state_38292 = G__38991;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$state_machine__36812__auto__ = function(state_38292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36812__auto____1.call(this,state_38292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36812__auto____0;
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36812__auto____1;
return cljs$core$async$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_38311 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_38311[(6)] = c__37008__auto___38979);

return statearr_38311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38313 = (function (f,ch,meta38314){
this.f = f;
this.ch = ch;
this.meta38314 = meta38314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38315,meta38314__$1){
var self__ = this;
var _38315__$1 = this;
return (new cljs.core.async.t_cljs$core$async38313(self__.f,self__.ch,meta38314__$1));
}));

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38315){
var self__ = this;
var _38315__$1 = this;
return self__.meta38314;
}));

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38316 = (function (f,ch,meta38314,_,fn1,meta38317){
this.f = f;
this.ch = ch;
this.meta38314 = meta38314;
this._ = _;
this.fn1 = fn1;
this.meta38317 = meta38317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38318,meta38317__$1){
var self__ = this;
var _38318__$1 = this;
return (new cljs.core.async.t_cljs$core$async38316(self__.f,self__.ch,self__.meta38314,self__._,self__.fn1,meta38317__$1));
}));

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38318){
var self__ = this;
var _38318__$1 = this;
return self__.meta38317;
}));

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38312_SHARP_){
var G__38319 = (((p1__38312_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38312_SHARP_) : self__.f.call(null,p1__38312_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38319) : f1.call(null,G__38319));
});
}));

(cljs.core.async.t_cljs$core$async38316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38314","meta38314",2051999168,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38313","cljs.core.async/t_cljs$core$async38313",1422812735,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38317","meta38317",-385638790,null)], null);
}));

(cljs.core.async.t_cljs$core$async38316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38316");

(cljs.core.async.t_cljs$core$async38316.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38316.
 */
cljs.core.async.__GT_t_cljs$core$async38316 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38316(f__$1,ch__$1,meta38314__$1,___$2,fn1__$1,meta38317){
return (new cljs.core.async.t_cljs$core$async38316(f__$1,ch__$1,meta38314__$1,___$2,fn1__$1,meta38317));
});

}

return (new cljs.core.async.t_cljs$core$async38316(self__.f,self__.ch,self__.meta38314,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38320 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38320) : self__.f.call(null,G__38320));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38314","meta38314",2051999168,null)], null);
}));

(cljs.core.async.t_cljs$core$async38313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38313");

(cljs.core.async.t_cljs$core$async38313.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38313.
 */
cljs.core.async.__GT_t_cljs$core$async38313 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38313(f__$1,ch__$1,meta38314){
return (new cljs.core.async.t_cljs$core$async38313(f__$1,ch__$1,meta38314));
});

}

return (new cljs.core.async.t_cljs$core$async38313(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38321 = (function (f,ch,meta38322){
this.f = f;
this.ch = ch;
this.meta38322 = meta38322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38323,meta38322__$1){
var self__ = this;
var _38323__$1 = this;
return (new cljs.core.async.t_cljs$core$async38321(self__.f,self__.ch,meta38322__$1));
}));

(cljs.core.async.t_cljs$core$async38321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38323){
var self__ = this;
var _38323__$1 = this;
return self__.meta38322;
}));

(cljs.core.async.t_cljs$core$async38321.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38321.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38321.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38322","meta38322",-706225738,null)], null);
}));

(cljs.core.async.t_cljs$core$async38321.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38321");

(cljs.core.async.t_cljs$core$async38321.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38321");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38321.
 */
cljs.core.async.__GT_t_cljs$core$async38321 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38321(f__$1,ch__$1,meta38322){
return (new cljs.core.async.t_cljs$core$async38321(f__$1,ch__$1,meta38322));
});

}

return (new cljs.core.async.t_cljs$core$async38321(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38324 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38324 = (function (p,ch,meta38325){
this.p = p;
this.ch = ch;
this.meta38325 = meta38325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38326,meta38325__$1){
var self__ = this;
var _38326__$1 = this;
return (new cljs.core.async.t_cljs$core$async38324(self__.p,self__.ch,meta38325__$1));
}));

(cljs.core.async.t_cljs$core$async38324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38326){
var self__ = this;
var _38326__$1 = this;
return self__.meta38325;
}));

(cljs.core.async.t_cljs$core$async38324.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38324.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38324.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38324.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38324.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38324.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38324.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38325","meta38325",1595749514,null)], null);
}));

(cljs.core.async.t_cljs$core$async38324.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38324");

(cljs.core.async.t_cljs$core$async38324.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38324");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38324.
 */
cljs.core.async.__GT_t_cljs$core$async38324 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38324(p__$1,ch__$1,meta38325){
return (new cljs.core.async.t_cljs$core$async38324(p__$1,ch__$1,meta38325));
});

}

return (new cljs.core.async.t_cljs$core$async38324(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38328 = arguments.length;
switch (G__38328) {
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
var c__37008__auto___38993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_38349){
var state_val_38350 = (state_38349[(1)]);
if((state_val_38350 === (7))){
var inst_38345 = (state_38349[(2)]);
var state_38349__$1 = state_38349;
var statearr_38351_38994 = state_38349__$1;
(statearr_38351_38994[(2)] = inst_38345);

(statearr_38351_38994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (1))){
var state_38349__$1 = state_38349;
var statearr_38352_38995 = state_38349__$1;
(statearr_38352_38995[(2)] = null);

(statearr_38352_38995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (4))){
var inst_38331 = (state_38349[(7)]);
var inst_38331__$1 = (state_38349[(2)]);
var inst_38332 = (inst_38331__$1 == null);
var state_38349__$1 = (function (){var statearr_38353 = state_38349;
(statearr_38353[(7)] = inst_38331__$1);

return statearr_38353;
})();
if(cljs.core.truth_(inst_38332)){
var statearr_38354_38996 = state_38349__$1;
(statearr_38354_38996[(1)] = (5));

} else {
var statearr_38355_38997 = state_38349__$1;
(statearr_38355_38997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (6))){
var inst_38331 = (state_38349[(7)]);
var inst_38336 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38331) : p.call(null,inst_38331));
var state_38349__$1 = state_38349;
if(cljs.core.truth_(inst_38336)){
var statearr_38356_38998 = state_38349__$1;
(statearr_38356_38998[(1)] = (8));

} else {
var statearr_38357_38999 = state_38349__$1;
(statearr_38357_38999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (3))){
var inst_38347 = (state_38349[(2)]);
var state_38349__$1 = state_38349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38349__$1,inst_38347);
} else {
if((state_val_38350 === (2))){
var state_38349__$1 = state_38349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38349__$1,(4),ch);
} else {
if((state_val_38350 === (11))){
var inst_38339 = (state_38349[(2)]);
var state_38349__$1 = state_38349;
var statearr_38358_39000 = state_38349__$1;
(statearr_38358_39000[(2)] = inst_38339);

(statearr_38358_39000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (9))){
var state_38349__$1 = state_38349;
var statearr_38359_39001 = state_38349__$1;
(statearr_38359_39001[(2)] = null);

(statearr_38359_39001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (5))){
var inst_38334 = cljs.core.async.close_BANG_(out);
var state_38349__$1 = state_38349;
var statearr_38360_39002 = state_38349__$1;
(statearr_38360_39002[(2)] = inst_38334);

(statearr_38360_39002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (10))){
var inst_38342 = (state_38349[(2)]);
var state_38349__$1 = (function (){var statearr_38361 = state_38349;
(statearr_38361[(8)] = inst_38342);

return statearr_38361;
})();
var statearr_38362_39003 = state_38349__$1;
(statearr_38362_39003[(2)] = null);

(statearr_38362_39003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (8))){
var inst_38331 = (state_38349[(7)]);
var state_38349__$1 = state_38349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38349__$1,(11),out,inst_38331);
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
var cljs$core$async$state_machine__36812__auto__ = null;
var cljs$core$async$state_machine__36812__auto____0 = (function (){
var statearr_38363 = [null,null,null,null,null,null,null,null,null];
(statearr_38363[(0)] = cljs$core$async$state_machine__36812__auto__);

(statearr_38363[(1)] = (1));

return statearr_38363;
});
var cljs$core$async$state_machine__36812__auto____1 = (function (state_38349){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_38349);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e38364){if((e38364 instanceof Object)){
var ex__36815__auto__ = e38364;
var statearr_38365_39004 = state_38349;
(statearr_38365_39004[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39005 = state_38349;
state_38349 = G__39005;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$state_machine__36812__auto__ = function(state_38349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36812__auto____1.call(this,state_38349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36812__auto____0;
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36812__auto____1;
return cljs$core$async$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_38366 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_38366[(6)] = c__37008__auto___38993);

return statearr_38366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38368 = arguments.length;
switch (G__38368) {
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
var c__37008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_38430){
var state_val_38431 = (state_38430[(1)]);
if((state_val_38431 === (7))){
var inst_38426 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38432_39007 = state_38430__$1;
(statearr_38432_39007[(2)] = inst_38426);

(statearr_38432_39007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (20))){
var inst_38396 = (state_38430[(7)]);
var inst_38407 = (state_38430[(2)]);
var inst_38408 = cljs.core.next(inst_38396);
var inst_38382 = inst_38408;
var inst_38383 = null;
var inst_38384 = (0);
var inst_38385 = (0);
var state_38430__$1 = (function (){var statearr_38433 = state_38430;
(statearr_38433[(8)] = inst_38383);

(statearr_38433[(9)] = inst_38385);

(statearr_38433[(10)] = inst_38384);

(statearr_38433[(11)] = inst_38382);

(statearr_38433[(12)] = inst_38407);

return statearr_38433;
})();
var statearr_38434_39008 = state_38430__$1;
(statearr_38434_39008[(2)] = null);

(statearr_38434_39008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (1))){
var state_38430__$1 = state_38430;
var statearr_38435_39009 = state_38430__$1;
(statearr_38435_39009[(2)] = null);

(statearr_38435_39009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (4))){
var inst_38371 = (state_38430[(13)]);
var inst_38371__$1 = (state_38430[(2)]);
var inst_38372 = (inst_38371__$1 == null);
var state_38430__$1 = (function (){var statearr_38436 = state_38430;
(statearr_38436[(13)] = inst_38371__$1);

return statearr_38436;
})();
if(cljs.core.truth_(inst_38372)){
var statearr_38437_39010 = state_38430__$1;
(statearr_38437_39010[(1)] = (5));

} else {
var statearr_38438_39011 = state_38430__$1;
(statearr_38438_39011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (15))){
var state_38430__$1 = state_38430;
var statearr_38442_39012 = state_38430__$1;
(statearr_38442_39012[(2)] = null);

(statearr_38442_39012[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (21))){
var state_38430__$1 = state_38430;
var statearr_38443_39013 = state_38430__$1;
(statearr_38443_39013[(2)] = null);

(statearr_38443_39013[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (13))){
var inst_38383 = (state_38430[(8)]);
var inst_38385 = (state_38430[(9)]);
var inst_38384 = (state_38430[(10)]);
var inst_38382 = (state_38430[(11)]);
var inst_38392 = (state_38430[(2)]);
var inst_38393 = (inst_38385 + (1));
var tmp38439 = inst_38383;
var tmp38440 = inst_38384;
var tmp38441 = inst_38382;
var inst_38382__$1 = tmp38441;
var inst_38383__$1 = tmp38439;
var inst_38384__$1 = tmp38440;
var inst_38385__$1 = inst_38393;
var state_38430__$1 = (function (){var statearr_38444 = state_38430;
(statearr_38444[(8)] = inst_38383__$1);

(statearr_38444[(9)] = inst_38385__$1);

(statearr_38444[(14)] = inst_38392);

(statearr_38444[(10)] = inst_38384__$1);

(statearr_38444[(11)] = inst_38382__$1);

return statearr_38444;
})();
var statearr_38445_39014 = state_38430__$1;
(statearr_38445_39014[(2)] = null);

(statearr_38445_39014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (22))){
var state_38430__$1 = state_38430;
var statearr_38446_39015 = state_38430__$1;
(statearr_38446_39015[(2)] = null);

(statearr_38446_39015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (6))){
var inst_38371 = (state_38430[(13)]);
var inst_38380 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38371) : f.call(null,inst_38371));
var inst_38381 = cljs.core.seq(inst_38380);
var inst_38382 = inst_38381;
var inst_38383 = null;
var inst_38384 = (0);
var inst_38385 = (0);
var state_38430__$1 = (function (){var statearr_38447 = state_38430;
(statearr_38447[(8)] = inst_38383);

(statearr_38447[(9)] = inst_38385);

(statearr_38447[(10)] = inst_38384);

(statearr_38447[(11)] = inst_38382);

return statearr_38447;
})();
var statearr_38448_39016 = state_38430__$1;
(statearr_38448_39016[(2)] = null);

(statearr_38448_39016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (17))){
var inst_38396 = (state_38430[(7)]);
var inst_38400 = cljs.core.chunk_first(inst_38396);
var inst_38401 = cljs.core.chunk_rest(inst_38396);
var inst_38402 = cljs.core.count(inst_38400);
var inst_38382 = inst_38401;
var inst_38383 = inst_38400;
var inst_38384 = inst_38402;
var inst_38385 = (0);
var state_38430__$1 = (function (){var statearr_38449 = state_38430;
(statearr_38449[(8)] = inst_38383);

(statearr_38449[(9)] = inst_38385);

(statearr_38449[(10)] = inst_38384);

(statearr_38449[(11)] = inst_38382);

return statearr_38449;
})();
var statearr_38450_39017 = state_38430__$1;
(statearr_38450_39017[(2)] = null);

(statearr_38450_39017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (3))){
var inst_38428 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38430__$1,inst_38428);
} else {
if((state_val_38431 === (12))){
var inst_38416 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38451_39018 = state_38430__$1;
(statearr_38451_39018[(2)] = inst_38416);

(statearr_38451_39018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (2))){
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38430__$1,(4),in$);
} else {
if((state_val_38431 === (23))){
var inst_38424 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38452_39019 = state_38430__$1;
(statearr_38452_39019[(2)] = inst_38424);

(statearr_38452_39019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (19))){
var inst_38411 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38453_39020 = state_38430__$1;
(statearr_38453_39020[(2)] = inst_38411);

(statearr_38453_39020[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (11))){
var inst_38396 = (state_38430[(7)]);
var inst_38382 = (state_38430[(11)]);
var inst_38396__$1 = cljs.core.seq(inst_38382);
var state_38430__$1 = (function (){var statearr_38454 = state_38430;
(statearr_38454[(7)] = inst_38396__$1);

return statearr_38454;
})();
if(inst_38396__$1){
var statearr_38455_39021 = state_38430__$1;
(statearr_38455_39021[(1)] = (14));

} else {
var statearr_38456_39022 = state_38430__$1;
(statearr_38456_39022[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (9))){
var inst_38418 = (state_38430[(2)]);
var inst_38419 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38430__$1 = (function (){var statearr_38457 = state_38430;
(statearr_38457[(15)] = inst_38418);

return statearr_38457;
})();
if(cljs.core.truth_(inst_38419)){
var statearr_38458_39023 = state_38430__$1;
(statearr_38458_39023[(1)] = (21));

} else {
var statearr_38459_39024 = state_38430__$1;
(statearr_38459_39024[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (5))){
var inst_38374 = cljs.core.async.close_BANG_(out);
var state_38430__$1 = state_38430;
var statearr_38460_39025 = state_38430__$1;
(statearr_38460_39025[(2)] = inst_38374);

(statearr_38460_39025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (14))){
var inst_38396 = (state_38430[(7)]);
var inst_38398 = cljs.core.chunked_seq_QMARK_(inst_38396);
var state_38430__$1 = state_38430;
if(inst_38398){
var statearr_38461_39026 = state_38430__$1;
(statearr_38461_39026[(1)] = (17));

} else {
var statearr_38462_39027 = state_38430__$1;
(statearr_38462_39027[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (16))){
var inst_38414 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38463_39028 = state_38430__$1;
(statearr_38463_39028[(2)] = inst_38414);

(statearr_38463_39028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (10))){
var inst_38383 = (state_38430[(8)]);
var inst_38385 = (state_38430[(9)]);
var inst_38390 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38383,inst_38385);
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38430__$1,(13),out,inst_38390);
} else {
if((state_val_38431 === (18))){
var inst_38396 = (state_38430[(7)]);
var inst_38405 = cljs.core.first(inst_38396);
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38430__$1,(20),out,inst_38405);
} else {
if((state_val_38431 === (8))){
var inst_38385 = (state_38430[(9)]);
var inst_38384 = (state_38430[(10)]);
var inst_38387 = (inst_38385 < inst_38384);
var inst_38388 = inst_38387;
var state_38430__$1 = state_38430;
if(cljs.core.truth_(inst_38388)){
var statearr_38464_39029 = state_38430__$1;
(statearr_38464_39029[(1)] = (10));

} else {
var statearr_38465_39030 = state_38430__$1;
(statearr_38465_39030[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__36812__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36812__auto____0 = (function (){
var statearr_38466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38466[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36812__auto__);

(statearr_38466[(1)] = (1));

return statearr_38466;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36812__auto____1 = (function (state_38430){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_38430);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e38467){if((e38467 instanceof Object)){
var ex__36815__auto__ = e38467;
var statearr_38468_39031 = state_38430;
(statearr_38468_39031[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39032 = state_38430;
state_38430 = G__39032;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36812__auto__ = function(state_38430){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36812__auto____1.call(this,state_38430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36812__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36812__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_38469 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_38469[(6)] = c__37008__auto__);

return statearr_38469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));

return c__37008__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38471 = arguments.length;
switch (G__38471) {
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
var G__38473 = arguments.length;
switch (G__38473) {
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
var G__38475 = arguments.length;
switch (G__38475) {
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
var c__37008__auto___39036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_38499){
var state_val_38500 = (state_38499[(1)]);
if((state_val_38500 === (7))){
var inst_38494 = (state_38499[(2)]);
var state_38499__$1 = state_38499;
var statearr_38501_39037 = state_38499__$1;
(statearr_38501_39037[(2)] = inst_38494);

(statearr_38501_39037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38500 === (1))){
var inst_38476 = null;
var state_38499__$1 = (function (){var statearr_38502 = state_38499;
(statearr_38502[(7)] = inst_38476);

return statearr_38502;
})();
var statearr_38503_39038 = state_38499__$1;
(statearr_38503_39038[(2)] = null);

(statearr_38503_39038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38500 === (4))){
var inst_38479 = (state_38499[(8)]);
var inst_38479__$1 = (state_38499[(2)]);
var inst_38480 = (inst_38479__$1 == null);
var inst_38481 = cljs.core.not(inst_38480);
var state_38499__$1 = (function (){var statearr_38504 = state_38499;
(statearr_38504[(8)] = inst_38479__$1);

return statearr_38504;
})();
if(inst_38481){
var statearr_38505_39041 = state_38499__$1;
(statearr_38505_39041[(1)] = (5));

} else {
var statearr_38506_39042 = state_38499__$1;
(statearr_38506_39042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38500 === (6))){
var state_38499__$1 = state_38499;
var statearr_38507_39044 = state_38499__$1;
(statearr_38507_39044[(2)] = null);

(statearr_38507_39044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38500 === (3))){
var inst_38496 = (state_38499[(2)]);
var inst_38497 = cljs.core.async.close_BANG_(out);
var state_38499__$1 = (function (){var statearr_38508 = state_38499;
(statearr_38508[(9)] = inst_38496);

return statearr_38508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38499__$1,inst_38497);
} else {
if((state_val_38500 === (2))){
var state_38499__$1 = state_38499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38499__$1,(4),ch);
} else {
if((state_val_38500 === (11))){
var inst_38479 = (state_38499[(8)]);
var inst_38488 = (state_38499[(2)]);
var inst_38476 = inst_38479;
var state_38499__$1 = (function (){var statearr_38509 = state_38499;
(statearr_38509[(7)] = inst_38476);

(statearr_38509[(10)] = inst_38488);

return statearr_38509;
})();
var statearr_38510_39048 = state_38499__$1;
(statearr_38510_39048[(2)] = null);

(statearr_38510_39048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38500 === (9))){
var inst_38479 = (state_38499[(8)]);
var state_38499__$1 = state_38499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38499__$1,(11),out,inst_38479);
} else {
if((state_val_38500 === (5))){
var inst_38476 = (state_38499[(7)]);
var inst_38479 = (state_38499[(8)]);
var inst_38483 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38479,inst_38476);
var state_38499__$1 = state_38499;
if(inst_38483){
var statearr_38512_39049 = state_38499__$1;
(statearr_38512_39049[(1)] = (8));

} else {
var statearr_38513_39051 = state_38499__$1;
(statearr_38513_39051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38500 === (10))){
var inst_38491 = (state_38499[(2)]);
var state_38499__$1 = state_38499;
var statearr_38514_39054 = state_38499__$1;
(statearr_38514_39054[(2)] = inst_38491);

(statearr_38514_39054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38500 === (8))){
var inst_38476 = (state_38499[(7)]);
var tmp38511 = inst_38476;
var inst_38476__$1 = tmp38511;
var state_38499__$1 = (function (){var statearr_38515 = state_38499;
(statearr_38515[(7)] = inst_38476__$1);

return statearr_38515;
})();
var statearr_38516_39056 = state_38499__$1;
(statearr_38516_39056[(2)] = null);

(statearr_38516_39056[(1)] = (2));


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
var cljs$core$async$state_machine__36812__auto__ = null;
var cljs$core$async$state_machine__36812__auto____0 = (function (){
var statearr_38517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38517[(0)] = cljs$core$async$state_machine__36812__auto__);

(statearr_38517[(1)] = (1));

return statearr_38517;
});
var cljs$core$async$state_machine__36812__auto____1 = (function (state_38499){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_38499);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e38518){if((e38518 instanceof Object)){
var ex__36815__auto__ = e38518;
var statearr_38519_39057 = state_38499;
(statearr_38519_39057[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39059 = state_38499;
state_38499 = G__39059;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$state_machine__36812__auto__ = function(state_38499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36812__auto____1.call(this,state_38499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36812__auto____0;
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36812__auto____1;
return cljs$core$async$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_38520 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_38520[(6)] = c__37008__auto___39036);

return statearr_38520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38522 = arguments.length;
switch (G__38522) {
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
var c__37008__auto___39067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_38560){
var state_val_38561 = (state_38560[(1)]);
if((state_val_38561 === (7))){
var inst_38556 = (state_38560[(2)]);
var state_38560__$1 = state_38560;
var statearr_38562_39070 = state_38560__$1;
(statearr_38562_39070[(2)] = inst_38556);

(statearr_38562_39070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (1))){
var inst_38523 = (new Array(n));
var inst_38524 = inst_38523;
var inst_38525 = (0);
var state_38560__$1 = (function (){var statearr_38563 = state_38560;
(statearr_38563[(7)] = inst_38525);

(statearr_38563[(8)] = inst_38524);

return statearr_38563;
})();
var statearr_38564_39071 = state_38560__$1;
(statearr_38564_39071[(2)] = null);

(statearr_38564_39071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (4))){
var inst_38528 = (state_38560[(9)]);
var inst_38528__$1 = (state_38560[(2)]);
var inst_38529 = (inst_38528__$1 == null);
var inst_38530 = cljs.core.not(inst_38529);
var state_38560__$1 = (function (){var statearr_38565 = state_38560;
(statearr_38565[(9)] = inst_38528__$1);

return statearr_38565;
})();
if(inst_38530){
var statearr_38566_39072 = state_38560__$1;
(statearr_38566_39072[(1)] = (5));

} else {
var statearr_38567_39073 = state_38560__$1;
(statearr_38567_39073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (15))){
var inst_38550 = (state_38560[(2)]);
var state_38560__$1 = state_38560;
var statearr_38568_39074 = state_38560__$1;
(statearr_38568_39074[(2)] = inst_38550);

(statearr_38568_39074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (13))){
var state_38560__$1 = state_38560;
var statearr_38569_39075 = state_38560__$1;
(statearr_38569_39075[(2)] = null);

(statearr_38569_39075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (6))){
var inst_38525 = (state_38560[(7)]);
var inst_38546 = (inst_38525 > (0));
var state_38560__$1 = state_38560;
if(cljs.core.truth_(inst_38546)){
var statearr_38570_39076 = state_38560__$1;
(statearr_38570_39076[(1)] = (12));

} else {
var statearr_38571_39077 = state_38560__$1;
(statearr_38571_39077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (3))){
var inst_38558 = (state_38560[(2)]);
var state_38560__$1 = state_38560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38560__$1,inst_38558);
} else {
if((state_val_38561 === (12))){
var inst_38524 = (state_38560[(8)]);
var inst_38548 = cljs.core.vec(inst_38524);
var state_38560__$1 = state_38560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38560__$1,(15),out,inst_38548);
} else {
if((state_val_38561 === (2))){
var state_38560__$1 = state_38560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38560__$1,(4),ch);
} else {
if((state_val_38561 === (11))){
var inst_38540 = (state_38560[(2)]);
var inst_38541 = (new Array(n));
var inst_38524 = inst_38541;
var inst_38525 = (0);
var state_38560__$1 = (function (){var statearr_38572 = state_38560;
(statearr_38572[(7)] = inst_38525);

(statearr_38572[(8)] = inst_38524);

(statearr_38572[(10)] = inst_38540);

return statearr_38572;
})();
var statearr_38573_39078 = state_38560__$1;
(statearr_38573_39078[(2)] = null);

(statearr_38573_39078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (9))){
var inst_38524 = (state_38560[(8)]);
var inst_38538 = cljs.core.vec(inst_38524);
var state_38560__$1 = state_38560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38560__$1,(11),out,inst_38538);
} else {
if((state_val_38561 === (5))){
var inst_38533 = (state_38560[(11)]);
var inst_38525 = (state_38560[(7)]);
var inst_38528 = (state_38560[(9)]);
var inst_38524 = (state_38560[(8)]);
var inst_38532 = (inst_38524[inst_38525] = inst_38528);
var inst_38533__$1 = (inst_38525 + (1));
var inst_38534 = (inst_38533__$1 < n);
var state_38560__$1 = (function (){var statearr_38574 = state_38560;
(statearr_38574[(12)] = inst_38532);

(statearr_38574[(11)] = inst_38533__$1);

return statearr_38574;
})();
if(cljs.core.truth_(inst_38534)){
var statearr_38575_39079 = state_38560__$1;
(statearr_38575_39079[(1)] = (8));

} else {
var statearr_38576_39080 = state_38560__$1;
(statearr_38576_39080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (14))){
var inst_38553 = (state_38560[(2)]);
var inst_38554 = cljs.core.async.close_BANG_(out);
var state_38560__$1 = (function (){var statearr_38578 = state_38560;
(statearr_38578[(13)] = inst_38553);

return statearr_38578;
})();
var statearr_38579_39081 = state_38560__$1;
(statearr_38579_39081[(2)] = inst_38554);

(statearr_38579_39081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (10))){
var inst_38544 = (state_38560[(2)]);
var state_38560__$1 = state_38560;
var statearr_38580_39082 = state_38560__$1;
(statearr_38580_39082[(2)] = inst_38544);

(statearr_38580_39082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (8))){
var inst_38533 = (state_38560[(11)]);
var inst_38524 = (state_38560[(8)]);
var tmp38577 = inst_38524;
var inst_38524__$1 = tmp38577;
var inst_38525 = inst_38533;
var state_38560__$1 = (function (){var statearr_38581 = state_38560;
(statearr_38581[(7)] = inst_38525);

(statearr_38581[(8)] = inst_38524__$1);

return statearr_38581;
})();
var statearr_38582_39087 = state_38560__$1;
(statearr_38582_39087[(2)] = null);

(statearr_38582_39087[(1)] = (2));


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
var cljs$core$async$state_machine__36812__auto__ = null;
var cljs$core$async$state_machine__36812__auto____0 = (function (){
var statearr_38583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38583[(0)] = cljs$core$async$state_machine__36812__auto__);

(statearr_38583[(1)] = (1));

return statearr_38583;
});
var cljs$core$async$state_machine__36812__auto____1 = (function (state_38560){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_38560);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e38584){if((e38584 instanceof Object)){
var ex__36815__auto__ = e38584;
var statearr_38585_39088 = state_38560;
(statearr_38585_39088[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38584;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39089 = state_38560;
state_38560 = G__39089;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$state_machine__36812__auto__ = function(state_38560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36812__auto____1.call(this,state_38560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36812__auto____0;
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36812__auto____1;
return cljs$core$async$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_38586 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_38586[(6)] = c__37008__auto___39067);

return statearr_38586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38588 = arguments.length;
switch (G__38588) {
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
var c__37008__auto___39091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37009__auto__ = (function (){var switch__36811__auto__ = (function (state_38630){
var state_val_38631 = (state_38630[(1)]);
if((state_val_38631 === (7))){
var inst_38626 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
var statearr_38632_39092 = state_38630__$1;
(statearr_38632_39092[(2)] = inst_38626);

(statearr_38632_39092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (1))){
var inst_38589 = [];
var inst_38590 = inst_38589;
var inst_38591 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38630__$1 = (function (){var statearr_38633 = state_38630;
(statearr_38633[(7)] = inst_38591);

(statearr_38633[(8)] = inst_38590);

return statearr_38633;
})();
var statearr_38634_39093 = state_38630__$1;
(statearr_38634_39093[(2)] = null);

(statearr_38634_39093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (4))){
var inst_38594 = (state_38630[(9)]);
var inst_38594__$1 = (state_38630[(2)]);
var inst_38595 = (inst_38594__$1 == null);
var inst_38596 = cljs.core.not(inst_38595);
var state_38630__$1 = (function (){var statearr_38635 = state_38630;
(statearr_38635[(9)] = inst_38594__$1);

return statearr_38635;
})();
if(inst_38596){
var statearr_38636_39094 = state_38630__$1;
(statearr_38636_39094[(1)] = (5));

} else {
var statearr_38637_39095 = state_38630__$1;
(statearr_38637_39095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (15))){
var inst_38620 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
var statearr_38638_39096 = state_38630__$1;
(statearr_38638_39096[(2)] = inst_38620);

(statearr_38638_39096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (13))){
var state_38630__$1 = state_38630;
var statearr_38639_39097 = state_38630__$1;
(statearr_38639_39097[(2)] = null);

(statearr_38639_39097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (6))){
var inst_38590 = (state_38630[(8)]);
var inst_38615 = inst_38590.length;
var inst_38616 = (inst_38615 > (0));
var state_38630__$1 = state_38630;
if(cljs.core.truth_(inst_38616)){
var statearr_38640_39098 = state_38630__$1;
(statearr_38640_39098[(1)] = (12));

} else {
var statearr_38641_39099 = state_38630__$1;
(statearr_38641_39099[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (3))){
var inst_38628 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38630__$1,inst_38628);
} else {
if((state_val_38631 === (12))){
var inst_38590 = (state_38630[(8)]);
var inst_38618 = cljs.core.vec(inst_38590);
var state_38630__$1 = state_38630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38630__$1,(15),out,inst_38618);
} else {
if((state_val_38631 === (2))){
var state_38630__$1 = state_38630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38630__$1,(4),ch);
} else {
if((state_val_38631 === (11))){
var inst_38598 = (state_38630[(10)]);
var inst_38594 = (state_38630[(9)]);
var inst_38608 = (state_38630[(2)]);
var inst_38609 = [];
var inst_38610 = inst_38609.push(inst_38594);
var inst_38590 = inst_38609;
var inst_38591 = inst_38598;
var state_38630__$1 = (function (){var statearr_38642 = state_38630;
(statearr_38642[(7)] = inst_38591);

(statearr_38642[(11)] = inst_38608);

(statearr_38642[(12)] = inst_38610);

(statearr_38642[(8)] = inst_38590);

return statearr_38642;
})();
var statearr_38643_39101 = state_38630__$1;
(statearr_38643_39101[(2)] = null);

(statearr_38643_39101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (9))){
var inst_38590 = (state_38630[(8)]);
var inst_38606 = cljs.core.vec(inst_38590);
var state_38630__$1 = state_38630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38630__$1,(11),out,inst_38606);
} else {
if((state_val_38631 === (5))){
var inst_38598 = (state_38630[(10)]);
var inst_38591 = (state_38630[(7)]);
var inst_38594 = (state_38630[(9)]);
var inst_38598__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38594) : f.call(null,inst_38594));
var inst_38599 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38598__$1,inst_38591);
var inst_38600 = cljs.core.keyword_identical_QMARK_(inst_38591,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38601 = ((inst_38599) || (inst_38600));
var state_38630__$1 = (function (){var statearr_38644 = state_38630;
(statearr_38644[(10)] = inst_38598__$1);

return statearr_38644;
})();
if(cljs.core.truth_(inst_38601)){
var statearr_38645_39106 = state_38630__$1;
(statearr_38645_39106[(1)] = (8));

} else {
var statearr_38646_39107 = state_38630__$1;
(statearr_38646_39107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (14))){
var inst_38623 = (state_38630[(2)]);
var inst_38624 = cljs.core.async.close_BANG_(out);
var state_38630__$1 = (function (){var statearr_38648 = state_38630;
(statearr_38648[(13)] = inst_38623);

return statearr_38648;
})();
var statearr_38649_39108 = state_38630__$1;
(statearr_38649_39108[(2)] = inst_38624);

(statearr_38649_39108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (10))){
var inst_38613 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
var statearr_38650_39109 = state_38630__$1;
(statearr_38650_39109[(2)] = inst_38613);

(statearr_38650_39109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (8))){
var inst_38598 = (state_38630[(10)]);
var inst_38594 = (state_38630[(9)]);
var inst_38590 = (state_38630[(8)]);
var inst_38603 = inst_38590.push(inst_38594);
var tmp38647 = inst_38590;
var inst_38590__$1 = tmp38647;
var inst_38591 = inst_38598;
var state_38630__$1 = (function (){var statearr_38651 = state_38630;
(statearr_38651[(7)] = inst_38591);

(statearr_38651[(14)] = inst_38603);

(statearr_38651[(8)] = inst_38590__$1);

return statearr_38651;
})();
var statearr_38652_39111 = state_38630__$1;
(statearr_38652_39111[(2)] = null);

(statearr_38652_39111[(1)] = (2));


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
var cljs$core$async$state_machine__36812__auto__ = null;
var cljs$core$async$state_machine__36812__auto____0 = (function (){
var statearr_38653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38653[(0)] = cljs$core$async$state_machine__36812__auto__);

(statearr_38653[(1)] = (1));

return statearr_38653;
});
var cljs$core$async$state_machine__36812__auto____1 = (function (state_38630){
while(true){
var ret_value__36813__auto__ = (function (){try{while(true){
var result__36814__auto__ = switch__36811__auto__(state_38630);
if(cljs.core.keyword_identical_QMARK_(result__36814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36814__auto__;
}
break;
}
}catch (e38654){if((e38654 instanceof Object)){
var ex__36815__auto__ = e38654;
var statearr_38655_39114 = state_38630;
(statearr_38655_39114[(5)] = ex__36815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39116 = state_38630;
state_38630 = G__39116;
continue;
} else {
return ret_value__36813__auto__;
}
break;
}
});
cljs$core$async$state_machine__36812__auto__ = function(state_38630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36812__auto____1.call(this,state_38630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36812__auto____0;
cljs$core$async$state_machine__36812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36812__auto____1;
return cljs$core$async$state_machine__36812__auto__;
})()
})();
var state__37010__auto__ = (function (){var statearr_38656 = (f__37009__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37009__auto__.cljs$core$IFn$_invoke$arity$0() : f__37009__auto__.call(null));
(statearr_38656[(6)] = c__37008__auto___39091);

return statearr_38656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37010__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
