goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61545 = arguments.length;
var i__4790__auto___61546 = (0);
while(true){
if((i__4790__auto___61546 < len__4789__auto___61545)){
args__4795__auto__.push((arguments[i__4790__auto___61546]));

var G__61547 = (i__4790__auto___61546 + (1));
i__4790__auto___61546 = G__61547;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq61243){
var G__61244 = cljs.core.first(seq61243);
var seq61243__$1 = cljs.core.next(seq61243);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61244,seq61243__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__61254){
var map__61255 = p__61254;
var map__61255__$1 = (((((!((map__61255 == null))))?(((((map__61255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61255):map__61255);
var src = map__61255__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61255__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61255__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__61259 = cljs.core.seq(sources);
var chunk__61260 = null;
var count__61261 = (0);
var i__61262 = (0);
while(true){
if((i__61262 < count__61261)){
var map__61283 = chunk__61260.cljs$core$IIndexed$_nth$arity$2(null,i__61262);
var map__61283__$1 = (((((!((map__61283 == null))))?(((((map__61283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61283):map__61283);
var src = map__61283__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61283__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61283__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61283__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61283__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e61285){var e_61555 = e61285;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61555);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61555.message)].join('')));
}

var G__61557 = seq__61259;
var G__61558 = chunk__61260;
var G__61559 = count__61261;
var G__61560 = (i__61262 + (1));
seq__61259 = G__61557;
chunk__61260 = G__61558;
count__61261 = G__61559;
i__61262 = G__61560;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61259);
if(temp__5735__auto__){
var seq__61259__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61259__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61259__$1);
var G__61561 = cljs.core.chunk_rest(seq__61259__$1);
var G__61562 = c__4609__auto__;
var G__61563 = cljs.core.count(c__4609__auto__);
var G__61564 = (0);
seq__61259 = G__61561;
chunk__61260 = G__61562;
count__61261 = G__61563;
i__61262 = G__61564;
continue;
} else {
var map__61286 = cljs.core.first(seq__61259__$1);
var map__61286__$1 = (((((!((map__61286 == null))))?(((((map__61286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61286):map__61286);
var src = map__61286__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61286__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e61288){var e_61568 = e61288;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61568);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61568.message)].join('')));
}

var G__61570 = cljs.core.next(seq__61259__$1);
var G__61571 = null;
var G__61572 = (0);
var G__61573 = (0);
seq__61259 = G__61570;
chunk__61260 = G__61571;
count__61261 = G__61572;
i__61262 = G__61573;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__61300 = cljs.core.seq(js_requires);
var chunk__61302 = null;
var count__61303 = (0);
var i__61304 = (0);
while(true){
if((i__61304 < count__61303)){
var js_ns = chunk__61302.cljs$core$IIndexed$_nth$arity$2(null,i__61304);
var require_str_61578 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61578);


var G__61579 = seq__61300;
var G__61580 = chunk__61302;
var G__61581 = count__61303;
var G__61582 = (i__61304 + (1));
seq__61300 = G__61579;
chunk__61302 = G__61580;
count__61303 = G__61581;
i__61304 = G__61582;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61300);
if(temp__5735__auto__){
var seq__61300__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61300__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61300__$1);
var G__61583 = cljs.core.chunk_rest(seq__61300__$1);
var G__61584 = c__4609__auto__;
var G__61585 = cljs.core.count(c__4609__auto__);
var G__61586 = (0);
seq__61300 = G__61583;
chunk__61302 = G__61584;
count__61303 = G__61585;
i__61304 = G__61586;
continue;
} else {
var js_ns = cljs.core.first(seq__61300__$1);
var require_str_61587 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61587);


var G__61588 = cljs.core.next(seq__61300__$1);
var G__61589 = null;
var G__61590 = (0);
var G__61591 = (0);
seq__61300 = G__61588;
chunk__61302 = G__61589;
count__61303 = G__61590;
i__61304 = G__61591;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__61314 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__61314) : callback.call(null,G__61314));
} else {
var G__61315 = shadow.cljs.devtools.client.env.files_url();
var G__61316 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__61317 = "POST";
var G__61318 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__61319 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__61315,G__61316,G__61317,G__61318,G__61319);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__61329){
var map__61330 = p__61329;
var map__61330__$1 = (((((!((map__61330 == null))))?(((((map__61330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61330):map__61330);
var msg = map__61330__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__61334 = info;
var map__61334__$1 = (((((!((map__61334 == null))))?(((((map__61334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61334):map__61334);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61334__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61334__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61339(s__61340){
return (new cljs.core.LazySeq(null,(function (){
var s__61340__$1 = s__61340;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61340__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__61352 = cljs.core.first(xs__6292__auto__);
var map__61352__$1 = (((((!((map__61352 == null))))?(((((map__61352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61352):map__61352);
var src = map__61352__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__61340__$1,map__61352,map__61352__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61334,map__61334__$1,sources,compiled,map__61330,map__61330__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61339_$_iter__61341(s__61342){
return (new cljs.core.LazySeq(null,((function (s__61340__$1,map__61352,map__61352__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61334,map__61334__$1,sources,compiled,map__61330,map__61330__$1,msg,info,reload_info){
return (function (){
var s__61342__$1 = s__61342;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__61342__$1);
if(temp__5735__auto____$1){
var s__61342__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61342__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61342__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61344 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61343 = (0);
while(true){
if((i__61343 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61343);
cljs.core.chunk_append(b__61344,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__61595 = (i__61343 + (1));
i__61343 = G__61595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61344),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61339_$_iter__61341(cljs.core.chunk_rest(s__61342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61344),null);
}
} else {
var warning = cljs.core.first(s__61342__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61339_$_iter__61341(cljs.core.rest(s__61342__$2)));
}
} else {
return null;
}
break;
}
});})(s__61340__$1,map__61352,map__61352__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61334,map__61334__$1,sources,compiled,map__61330,map__61330__$1,msg,info,reload_info))
,null,null));
});})(s__61340__$1,map__61352,map__61352__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61334,map__61334__$1,sources,compiled,map__61330,map__61330__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61339(cljs.core.rest(s__61340__$1)));
} else {
var G__61596 = cljs.core.rest(s__61340__$1);
s__61340__$1 = G__61596;
continue;
}
} else {
var G__61597 = cljs.core.rest(s__61340__$1);
s__61340__$1 = G__61597;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__61357_61598 = cljs.core.seq(warnings);
var chunk__61358_61599 = null;
var count__61359_61600 = (0);
var i__61360_61601 = (0);
while(true){
if((i__61360_61601 < count__61359_61600)){
var map__61365_61602 = chunk__61358_61599.cljs$core$IIndexed$_nth$arity$2(null,i__61360_61601);
var map__61365_61603__$1 = (((((!((map__61365_61602 == null))))?(((((map__61365_61602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61365_61602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61365_61602):map__61365_61602);
var w_61604 = map__61365_61603__$1;
var msg_61605__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365_61603__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365_61603__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365_61603__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365_61603__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61608)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61606),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61607),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61605__$1)].join(''));


var G__61609 = seq__61357_61598;
var G__61610 = chunk__61358_61599;
var G__61611 = count__61359_61600;
var G__61612 = (i__61360_61601 + (1));
seq__61357_61598 = G__61609;
chunk__61358_61599 = G__61610;
count__61359_61600 = G__61611;
i__61360_61601 = G__61612;
continue;
} else {
var temp__5735__auto___61613 = cljs.core.seq(seq__61357_61598);
if(temp__5735__auto___61613){
var seq__61357_61614__$1 = temp__5735__auto___61613;
if(cljs.core.chunked_seq_QMARK_(seq__61357_61614__$1)){
var c__4609__auto___61615 = cljs.core.chunk_first(seq__61357_61614__$1);
var G__61616 = cljs.core.chunk_rest(seq__61357_61614__$1);
var G__61617 = c__4609__auto___61615;
var G__61618 = cljs.core.count(c__4609__auto___61615);
var G__61619 = (0);
seq__61357_61598 = G__61616;
chunk__61358_61599 = G__61617;
count__61359_61600 = G__61618;
i__61360_61601 = G__61619;
continue;
} else {
var map__61370_61620 = cljs.core.first(seq__61357_61614__$1);
var map__61370_61621__$1 = (((((!((map__61370_61620 == null))))?(((((map__61370_61620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61370_61620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61370_61620):map__61370_61620);
var w_61622 = map__61370_61621__$1;
var msg_61623__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61370_61621__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61370_61621__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61370_61621__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61370_61621__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61626)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61624),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61625),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61623__$1)].join(''));


var G__61627 = cljs.core.next(seq__61357_61614__$1);
var G__61628 = null;
var G__61629 = (0);
var G__61630 = (0);
seq__61357_61598 = G__61627;
chunk__61358_61599 = G__61628;
count__61359_61600 = G__61629;
i__61360_61601 = G__61630;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__61372){
var map__61373 = p__61372;
var map__61373__$1 = (((((!((map__61373 == null))))?(((((map__61373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61373):map__61373);
var src = map__61373__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61375){
var map__61376 = p__61375;
var map__61376__$1 = (((((!((map__61376 == null))))?(((((map__61376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61376):map__61376);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61376__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__61378){
var map__61379 = p__61378;
var map__61379__$1 = (((((!((map__61379 == null))))?(((((map__61379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61379):map__61379);
var rc = map__61379__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__61323_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__61323_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__61383){
var map__61384 = p__61383;
var map__61384__$1 = (((((!((map__61384 == null))))?(((((map__61384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61384):map__61384);
var msg = map__61384__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__61387 = cljs.core.seq(updates);
var chunk__61389 = null;
var count__61390 = (0);
var i__61391 = (0);
while(true){
if((i__61391 < count__61390)){
var path = chunk__61389.cljs$core$IIndexed$_nth$arity$2(null,i__61391);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61435_61631 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61438_61632 = null;
var count__61439_61633 = (0);
var i__61440_61634 = (0);
while(true){
if((i__61440_61634 < count__61439_61633)){
var node_61635 = chunk__61438_61632.cljs$core$IIndexed$_nth$arity$2(null,i__61440_61634);
var path_match_61636 = shadow.cljs.devtools.client.browser.match_paths(node_61635.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61636)){
var new_link_61637 = (function (){var G__61445 = node_61635.cloneNode(true);
G__61445.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61636),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61445;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61636], 0));

goog.dom.insertSiblingAfter(new_link_61637,node_61635);

goog.dom.removeNode(node_61635);


var G__61638 = seq__61435_61631;
var G__61639 = chunk__61438_61632;
var G__61640 = count__61439_61633;
var G__61641 = (i__61440_61634 + (1));
seq__61435_61631 = G__61638;
chunk__61438_61632 = G__61639;
count__61439_61633 = G__61640;
i__61440_61634 = G__61641;
continue;
} else {
var G__61642 = seq__61435_61631;
var G__61643 = chunk__61438_61632;
var G__61644 = count__61439_61633;
var G__61645 = (i__61440_61634 + (1));
seq__61435_61631 = G__61642;
chunk__61438_61632 = G__61643;
count__61439_61633 = G__61644;
i__61440_61634 = G__61645;
continue;
}
} else {
var temp__5735__auto___61646 = cljs.core.seq(seq__61435_61631);
if(temp__5735__auto___61646){
var seq__61435_61647__$1 = temp__5735__auto___61646;
if(cljs.core.chunked_seq_QMARK_(seq__61435_61647__$1)){
var c__4609__auto___61648 = cljs.core.chunk_first(seq__61435_61647__$1);
var G__61649 = cljs.core.chunk_rest(seq__61435_61647__$1);
var G__61650 = c__4609__auto___61648;
var G__61651 = cljs.core.count(c__4609__auto___61648);
var G__61652 = (0);
seq__61435_61631 = G__61649;
chunk__61438_61632 = G__61650;
count__61439_61633 = G__61651;
i__61440_61634 = G__61652;
continue;
} else {
var node_61653 = cljs.core.first(seq__61435_61647__$1);
var path_match_61654 = shadow.cljs.devtools.client.browser.match_paths(node_61653.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61654)){
var new_link_61655 = (function (){var G__61449 = node_61653.cloneNode(true);
G__61449.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61654),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61449;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61654], 0));

goog.dom.insertSiblingAfter(new_link_61655,node_61653);

goog.dom.removeNode(node_61653);


var G__61656 = cljs.core.next(seq__61435_61647__$1);
var G__61657 = null;
var G__61658 = (0);
var G__61659 = (0);
seq__61435_61631 = G__61656;
chunk__61438_61632 = G__61657;
count__61439_61633 = G__61658;
i__61440_61634 = G__61659;
continue;
} else {
var G__61660 = cljs.core.next(seq__61435_61647__$1);
var G__61661 = null;
var G__61662 = (0);
var G__61663 = (0);
seq__61435_61631 = G__61660;
chunk__61438_61632 = G__61661;
count__61439_61633 = G__61662;
i__61440_61634 = G__61663;
continue;
}
}
} else {
}
}
break;
}


var G__61664 = seq__61387;
var G__61665 = chunk__61389;
var G__61666 = count__61390;
var G__61667 = (i__61391 + (1));
seq__61387 = G__61664;
chunk__61389 = G__61665;
count__61390 = G__61666;
i__61391 = G__61667;
continue;
} else {
var G__61668 = seq__61387;
var G__61669 = chunk__61389;
var G__61670 = count__61390;
var G__61671 = (i__61391 + (1));
seq__61387 = G__61668;
chunk__61389 = G__61669;
count__61390 = G__61670;
i__61391 = G__61671;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61387);
if(temp__5735__auto__){
var seq__61387__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61387__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61387__$1);
var G__61672 = cljs.core.chunk_rest(seq__61387__$1);
var G__61673 = c__4609__auto__;
var G__61674 = cljs.core.count(c__4609__auto__);
var G__61675 = (0);
seq__61387 = G__61672;
chunk__61389 = G__61673;
count__61390 = G__61674;
i__61391 = G__61675;
continue;
} else {
var path = cljs.core.first(seq__61387__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61450_61676 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61453_61677 = null;
var count__61454_61678 = (0);
var i__61455_61679 = (0);
while(true){
if((i__61455_61679 < count__61454_61678)){
var node_61680 = chunk__61453_61677.cljs$core$IIndexed$_nth$arity$2(null,i__61455_61679);
var path_match_61681 = shadow.cljs.devtools.client.browser.match_paths(node_61680.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61681)){
var new_link_61682 = (function (){var G__61464 = node_61680.cloneNode(true);
G__61464.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61681),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61464;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61681], 0));

goog.dom.insertSiblingAfter(new_link_61682,node_61680);

goog.dom.removeNode(node_61680);


var G__61683 = seq__61450_61676;
var G__61684 = chunk__61453_61677;
var G__61685 = count__61454_61678;
var G__61686 = (i__61455_61679 + (1));
seq__61450_61676 = G__61683;
chunk__61453_61677 = G__61684;
count__61454_61678 = G__61685;
i__61455_61679 = G__61686;
continue;
} else {
var G__61687 = seq__61450_61676;
var G__61688 = chunk__61453_61677;
var G__61689 = count__61454_61678;
var G__61690 = (i__61455_61679 + (1));
seq__61450_61676 = G__61687;
chunk__61453_61677 = G__61688;
count__61454_61678 = G__61689;
i__61455_61679 = G__61690;
continue;
}
} else {
var temp__5735__auto___61691__$1 = cljs.core.seq(seq__61450_61676);
if(temp__5735__auto___61691__$1){
var seq__61450_61692__$1 = temp__5735__auto___61691__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61450_61692__$1)){
var c__4609__auto___61693 = cljs.core.chunk_first(seq__61450_61692__$1);
var G__61694 = cljs.core.chunk_rest(seq__61450_61692__$1);
var G__61695 = c__4609__auto___61693;
var G__61696 = cljs.core.count(c__4609__auto___61693);
var G__61697 = (0);
seq__61450_61676 = G__61694;
chunk__61453_61677 = G__61695;
count__61454_61678 = G__61696;
i__61455_61679 = G__61697;
continue;
} else {
var node_61698 = cljs.core.first(seq__61450_61692__$1);
var path_match_61699 = shadow.cljs.devtools.client.browser.match_paths(node_61698.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61699)){
var new_link_61700 = (function (){var G__61466 = node_61698.cloneNode(true);
G__61466.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61699),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61466;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61699], 0));

goog.dom.insertSiblingAfter(new_link_61700,node_61698);

goog.dom.removeNode(node_61698);


var G__61701 = cljs.core.next(seq__61450_61692__$1);
var G__61702 = null;
var G__61703 = (0);
var G__61704 = (0);
seq__61450_61676 = G__61701;
chunk__61453_61677 = G__61702;
count__61454_61678 = G__61703;
i__61455_61679 = G__61704;
continue;
} else {
var G__61705 = cljs.core.next(seq__61450_61692__$1);
var G__61706 = null;
var G__61707 = (0);
var G__61708 = (0);
seq__61450_61676 = G__61705;
chunk__61453_61677 = G__61706;
count__61454_61678 = G__61707;
i__61455_61679 = G__61708;
continue;
}
}
} else {
}
}
break;
}


var G__61712 = cljs.core.next(seq__61387__$1);
var G__61713 = null;
var G__61714 = (0);
var G__61715 = (0);
seq__61387 = G__61712;
chunk__61389 = G__61713;
count__61390 = G__61714;
i__61391 = G__61715;
continue;
} else {
var G__61716 = cljs.core.next(seq__61387__$1);
var G__61717 = null;
var G__61718 = (0);
var G__61719 = (0);
seq__61387 = G__61716;
chunk__61389 = G__61717;
count__61390 = G__61718;
i__61391 = G__61719;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__61480){
var map__61481 = p__61480;
var map__61481__$1 = (((((!((map__61481 == null))))?(((((map__61481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61481):map__61481);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61481__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61481__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__61483,done){
var map__61484 = p__61483;
var map__61484__$1 = (((((!((map__61484 == null))))?(((((map__61484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61484):map__61484);
var msg = map__61484__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61484__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61484__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61484__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61484__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61488){
var map__61489 = p__61488;
var map__61489__$1 = (((((!((map__61489 == null))))?(((((map__61489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61489):map__61489);
var src = map__61489__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61489__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e61493){var e = e61493;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__61499,done){
var map__61500 = p__61499;
var map__61500__$1 = (((((!((map__61500 == null))))?(((((map__61500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61500):map__61500);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61500__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61500__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__61503){
var map__61504 = p__61503;
var map__61504__$1 = (((((!((map__61504 == null))))?(((((map__61504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61504):map__61504);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61504__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61504__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__61511,done){
var map__61513 = p__61511;
var map__61513__$1 = (((((!((map__61513 == null))))?(((((map__61513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61513):map__61513);
var msg = map__61513__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61513__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__61518_61725 = type;
var G__61518_61726__$1 = (((G__61518_61725 instanceof cljs.core.Keyword))?G__61518_61725.fqn:null);
switch (G__61518_61726__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__61521 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__61522 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__61523 = "POST";
var G__61524 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__61525 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__61521,G__61522,G__61523,G__61524,G__61525);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__61532 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__61531 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__61531.cljs$core$IFn$_invoke$arity$1 ? fexpr__61531.cljs$core$IFn$_invoke$arity$1(G__61532) : fexpr__61531.call(null,G__61532));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e61538){var e = e61538;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___61729 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___61729)){
var s_61730 = temp__5735__auto___61729;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_61730.onclose = (function (e){
return null;
}));

s_61730.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
