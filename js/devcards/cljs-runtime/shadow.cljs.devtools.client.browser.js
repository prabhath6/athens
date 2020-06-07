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
var len__4789__auto___49897 = arguments.length;
var i__4790__auto___49898 = (0);
while(true){
if((i__4790__auto___49898 < len__4789__auto___49897)){
args__4795__auto__.push((arguments[i__4790__auto___49898]));

var G__49899 = (i__4790__auto___49898 + (1));
i__4790__auto___49898 = G__49899;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49713){
var G__49714 = cljs.core.first(seq49713);
var seq49713__$1 = cljs.core.next(seq49713);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49714,seq49713__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49716){
var map__49717 = p__49716;
var map__49717__$1 = (((((!((map__49717 == null))))?(((((map__49717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49717):map__49717);
var src = map__49717__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49717__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49717__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__49722 = cljs.core.seq(sources);
var chunk__49723 = null;
var count__49724 = (0);
var i__49725 = (0);
while(true){
if((i__49725 < count__49724)){
var map__49733 = chunk__49723.cljs$core$IIndexed$_nth$arity$2(null,i__49725);
var map__49733__$1 = (((((!((map__49733 == null))))?(((((map__49733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49733):map__49733);
var src = map__49733__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49737){var e_49902 = e49737;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49902);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49902.message)].join('')));
}

var G__49903 = seq__49722;
var G__49904 = chunk__49723;
var G__49905 = count__49724;
var G__49906 = (i__49725 + (1));
seq__49722 = G__49903;
chunk__49723 = G__49904;
count__49724 = G__49905;
i__49725 = G__49906;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49722);
if(temp__5735__auto__){
var seq__49722__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49722__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49722__$1);
var G__49907 = cljs.core.chunk_rest(seq__49722__$1);
var G__49908 = c__4609__auto__;
var G__49909 = cljs.core.count(c__4609__auto__);
var G__49910 = (0);
seq__49722 = G__49907;
chunk__49723 = G__49908;
count__49724 = G__49909;
i__49725 = G__49910;
continue;
} else {
var map__49739 = cljs.core.first(seq__49722__$1);
var map__49739__$1 = (((((!((map__49739 == null))))?(((((map__49739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49739):map__49739);
var src = map__49739__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49739__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49739__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49739__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49739__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49742){var e_49911 = e49742;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49911);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49911.message)].join('')));
}

var G__49913 = cljs.core.next(seq__49722__$1);
var G__49914 = null;
var G__49915 = (0);
var G__49916 = (0);
seq__49722 = G__49913;
chunk__49723 = G__49914;
count__49724 = G__49915;
i__49725 = G__49916;
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
var seq__49745 = cljs.core.seq(js_requires);
var chunk__49746 = null;
var count__49747 = (0);
var i__49748 = (0);
while(true){
if((i__49748 < count__49747)){
var js_ns = chunk__49746.cljs$core$IIndexed$_nth$arity$2(null,i__49748);
var require_str_49917 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49917);


var G__49918 = seq__49745;
var G__49919 = chunk__49746;
var G__49920 = count__49747;
var G__49921 = (i__49748 + (1));
seq__49745 = G__49918;
chunk__49746 = G__49919;
count__49747 = G__49920;
i__49748 = G__49921;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49745);
if(temp__5735__auto__){
var seq__49745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49745__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49745__$1);
var G__49922 = cljs.core.chunk_rest(seq__49745__$1);
var G__49923 = c__4609__auto__;
var G__49924 = cljs.core.count(c__4609__auto__);
var G__49925 = (0);
seq__49745 = G__49922;
chunk__49746 = G__49923;
count__49747 = G__49924;
i__49748 = G__49925;
continue;
} else {
var js_ns = cljs.core.first(seq__49745__$1);
var require_str_49926 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49926);


var G__49928 = cljs.core.next(seq__49745__$1);
var G__49929 = null;
var G__49930 = (0);
var G__49931 = (0);
seq__49745 = G__49928;
chunk__49746 = G__49929;
count__49747 = G__49930;
i__49748 = G__49931;
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
var G__49751 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49751) : callback.call(null,G__49751));
} else {
var G__49752 = shadow.cljs.devtools.client.env.files_url();
var G__49753 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__49754 = "POST";
var G__49755 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49756 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49752,G__49753,G__49754,G__49755,G__49756);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49758){
var map__49759 = p__49758;
var map__49759__$1 = (((((!((map__49759 == null))))?(((((map__49759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49759):map__49759);
var msg = map__49759__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49759__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49759__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49762 = info;
var map__49762__$1 = (((((!((map__49762 == null))))?(((((map__49762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49762):map__49762);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49762__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49762__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49764(s__49765){
return (new cljs.core.LazySeq(null,(function (){
var s__49765__$1 = s__49765;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49765__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49770 = cljs.core.first(xs__6292__auto__);
var map__49770__$1 = (((((!((map__49770 == null))))?(((((map__49770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49770):map__49770);
var src = map__49770__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49770__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49770__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__49765__$1,map__49770,map__49770__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49762,map__49762__$1,sources,compiled,map__49759,map__49759__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49764_$_iter__49766(s__49767){
return (new cljs.core.LazySeq(null,((function (s__49765__$1,map__49770,map__49770__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49762,map__49762__$1,sources,compiled,map__49759,map__49759__$1,msg,info,reload_info){
return (function (){
var s__49767__$1 = s__49767;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49767__$1);
if(temp__5735__auto____$1){
var s__49767__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49767__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49767__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49769 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49768 = (0);
while(true){
if((i__49768 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49768);
cljs.core.chunk_append(b__49769,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49933 = (i__49768 + (1));
i__49768 = G__49933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49769),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49764_$_iter__49766(cljs.core.chunk_rest(s__49767__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49769),null);
}
} else {
var warning = cljs.core.first(s__49767__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49764_$_iter__49766(cljs.core.rest(s__49767__$2)));
}
} else {
return null;
}
break;
}
});})(s__49765__$1,map__49770,map__49770__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49762,map__49762__$1,sources,compiled,map__49759,map__49759__$1,msg,info,reload_info))
,null,null));
});})(s__49765__$1,map__49770,map__49770__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49762,map__49762__$1,sources,compiled,map__49759,map__49759__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49764(cljs.core.rest(s__49765__$1)));
} else {
var G__49935 = cljs.core.rest(s__49765__$1);
s__49765__$1 = G__49935;
continue;
}
} else {
var G__49936 = cljs.core.rest(s__49765__$1);
s__49765__$1 = G__49936;
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
var seq__49773_49937 = cljs.core.seq(warnings);
var chunk__49774_49938 = null;
var count__49775_49939 = (0);
var i__49776_49940 = (0);
while(true){
if((i__49776_49940 < count__49775_49939)){
var map__49782_49941 = chunk__49774_49938.cljs$core$IIndexed$_nth$arity$2(null,i__49776_49940);
var map__49782_49942__$1 = (((((!((map__49782_49941 == null))))?(((((map__49782_49941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49782_49941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49782_49941):map__49782_49941);
var w_49943 = map__49782_49942__$1;
var msg_49944__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782_49942__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782_49942__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782_49942__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782_49942__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49947)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49945),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49946),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49944__$1)].join(''));


var G__49948 = seq__49773_49937;
var G__49949 = chunk__49774_49938;
var G__49950 = count__49775_49939;
var G__49951 = (i__49776_49940 + (1));
seq__49773_49937 = G__49948;
chunk__49774_49938 = G__49949;
count__49775_49939 = G__49950;
i__49776_49940 = G__49951;
continue;
} else {
var temp__5735__auto___49952 = cljs.core.seq(seq__49773_49937);
if(temp__5735__auto___49952){
var seq__49773_49953__$1 = temp__5735__auto___49952;
if(cljs.core.chunked_seq_QMARK_(seq__49773_49953__$1)){
var c__4609__auto___49954 = cljs.core.chunk_first(seq__49773_49953__$1);
var G__49955 = cljs.core.chunk_rest(seq__49773_49953__$1);
var G__49956 = c__4609__auto___49954;
var G__49957 = cljs.core.count(c__4609__auto___49954);
var G__49958 = (0);
seq__49773_49937 = G__49955;
chunk__49774_49938 = G__49956;
count__49775_49939 = G__49957;
i__49776_49940 = G__49958;
continue;
} else {
var map__49784_49959 = cljs.core.first(seq__49773_49953__$1);
var map__49784_49960__$1 = (((((!((map__49784_49959 == null))))?(((((map__49784_49959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49784_49959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49784_49959):map__49784_49959);
var w_49961 = map__49784_49960__$1;
var msg_49962__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49784_49960__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49784_49960__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49784_49960__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49784_49960__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49965)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49963),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49964),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49962__$1)].join(''));


var G__49967 = cljs.core.next(seq__49773_49953__$1);
var G__49968 = null;
var G__49969 = (0);
var G__49970 = (0);
seq__49773_49937 = G__49967;
chunk__49774_49938 = G__49968;
count__49775_49939 = G__49969;
i__49776_49940 = G__49970;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49786){
var map__49787 = p__49786;
var map__49787__$1 = (((((!((map__49787 == null))))?(((((map__49787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49787):map__49787);
var src = map__49787__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49787__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49787__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49789){
var map__49790 = p__49789;
var map__49790__$1 = (((((!((map__49790 == null))))?(((((map__49790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49790):map__49790);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49792){
var map__49793 = p__49792;
var map__49793__$1 = (((((!((map__49793 == null))))?(((((map__49793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49793):map__49793);
var rc = map__49793__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49793__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__49757_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49757_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49799){
var map__49800 = p__49799;
var map__49800__$1 = (((((!((map__49800 == null))))?(((((map__49800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49800):map__49800);
var msg = map__49800__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49800__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49802 = cljs.core.seq(updates);
var chunk__49804 = null;
var count__49805 = (0);
var i__49806 = (0);
while(true){
if((i__49806 < count__49805)){
var path = chunk__49804.cljs$core$IIndexed$_nth$arity$2(null,i__49806);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49836_49973 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49839_49974 = null;
var count__49840_49975 = (0);
var i__49841_49976 = (0);
while(true){
if((i__49841_49976 < count__49840_49975)){
var node_49977 = chunk__49839_49974.cljs$core$IIndexed$_nth$arity$2(null,i__49841_49976);
var path_match_49978 = shadow.cljs.devtools.client.browser.match_paths(node_49977.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49978)){
var new_link_49979 = (function (){var G__49846 = node_49977.cloneNode(true);
G__49846.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49978),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49846;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49978], 0));

goog.dom.insertSiblingAfter(new_link_49979,node_49977);

goog.dom.removeNode(node_49977);


var G__49981 = seq__49836_49973;
var G__49982 = chunk__49839_49974;
var G__49983 = count__49840_49975;
var G__49984 = (i__49841_49976 + (1));
seq__49836_49973 = G__49981;
chunk__49839_49974 = G__49982;
count__49840_49975 = G__49983;
i__49841_49976 = G__49984;
continue;
} else {
var G__49985 = seq__49836_49973;
var G__49986 = chunk__49839_49974;
var G__49987 = count__49840_49975;
var G__49988 = (i__49841_49976 + (1));
seq__49836_49973 = G__49985;
chunk__49839_49974 = G__49986;
count__49840_49975 = G__49987;
i__49841_49976 = G__49988;
continue;
}
} else {
var temp__5735__auto___49989 = cljs.core.seq(seq__49836_49973);
if(temp__5735__auto___49989){
var seq__49836_49990__$1 = temp__5735__auto___49989;
if(cljs.core.chunked_seq_QMARK_(seq__49836_49990__$1)){
var c__4609__auto___49991 = cljs.core.chunk_first(seq__49836_49990__$1);
var G__49992 = cljs.core.chunk_rest(seq__49836_49990__$1);
var G__49993 = c__4609__auto___49991;
var G__49994 = cljs.core.count(c__4609__auto___49991);
var G__49995 = (0);
seq__49836_49973 = G__49992;
chunk__49839_49974 = G__49993;
count__49840_49975 = G__49994;
i__49841_49976 = G__49995;
continue;
} else {
var node_49996 = cljs.core.first(seq__49836_49990__$1);
var path_match_49997 = shadow.cljs.devtools.client.browser.match_paths(node_49996.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49997)){
var new_link_49998 = (function (){var G__49847 = node_49996.cloneNode(true);
G__49847.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49997),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49847;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49997], 0));

goog.dom.insertSiblingAfter(new_link_49998,node_49996);

goog.dom.removeNode(node_49996);


var G__49999 = cljs.core.next(seq__49836_49990__$1);
var G__50000 = null;
var G__50001 = (0);
var G__50002 = (0);
seq__49836_49973 = G__49999;
chunk__49839_49974 = G__50000;
count__49840_49975 = G__50001;
i__49841_49976 = G__50002;
continue;
} else {
var G__50003 = cljs.core.next(seq__49836_49990__$1);
var G__50004 = null;
var G__50005 = (0);
var G__50006 = (0);
seq__49836_49973 = G__50003;
chunk__49839_49974 = G__50004;
count__49840_49975 = G__50005;
i__49841_49976 = G__50006;
continue;
}
}
} else {
}
}
break;
}


var G__50007 = seq__49802;
var G__50008 = chunk__49804;
var G__50009 = count__49805;
var G__50010 = (i__49806 + (1));
seq__49802 = G__50007;
chunk__49804 = G__50008;
count__49805 = G__50009;
i__49806 = G__50010;
continue;
} else {
var G__50011 = seq__49802;
var G__50012 = chunk__49804;
var G__50013 = count__49805;
var G__50014 = (i__49806 + (1));
seq__49802 = G__50011;
chunk__49804 = G__50012;
count__49805 = G__50013;
i__49806 = G__50014;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49802);
if(temp__5735__auto__){
var seq__49802__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49802__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49802__$1);
var G__50016 = cljs.core.chunk_rest(seq__49802__$1);
var G__50017 = c__4609__auto__;
var G__50018 = cljs.core.count(c__4609__auto__);
var G__50019 = (0);
seq__49802 = G__50016;
chunk__49804 = G__50017;
count__49805 = G__50018;
i__49806 = G__50019;
continue;
} else {
var path = cljs.core.first(seq__49802__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49848_50020 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49851_50021 = null;
var count__49852_50022 = (0);
var i__49853_50023 = (0);
while(true){
if((i__49853_50023 < count__49852_50022)){
var node_50024 = chunk__49851_50021.cljs$core$IIndexed$_nth$arity$2(null,i__49853_50023);
var path_match_50025 = shadow.cljs.devtools.client.browser.match_paths(node_50024.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50025)){
var new_link_50026 = (function (){var G__49858 = node_50024.cloneNode(true);
G__49858.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50025),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49858;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50025], 0));

goog.dom.insertSiblingAfter(new_link_50026,node_50024);

goog.dom.removeNode(node_50024);


var G__50027 = seq__49848_50020;
var G__50028 = chunk__49851_50021;
var G__50029 = count__49852_50022;
var G__50030 = (i__49853_50023 + (1));
seq__49848_50020 = G__50027;
chunk__49851_50021 = G__50028;
count__49852_50022 = G__50029;
i__49853_50023 = G__50030;
continue;
} else {
var G__50031 = seq__49848_50020;
var G__50032 = chunk__49851_50021;
var G__50033 = count__49852_50022;
var G__50034 = (i__49853_50023 + (1));
seq__49848_50020 = G__50031;
chunk__49851_50021 = G__50032;
count__49852_50022 = G__50033;
i__49853_50023 = G__50034;
continue;
}
} else {
var temp__5735__auto___50035__$1 = cljs.core.seq(seq__49848_50020);
if(temp__5735__auto___50035__$1){
var seq__49848_50036__$1 = temp__5735__auto___50035__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49848_50036__$1)){
var c__4609__auto___50037 = cljs.core.chunk_first(seq__49848_50036__$1);
var G__50038 = cljs.core.chunk_rest(seq__49848_50036__$1);
var G__50039 = c__4609__auto___50037;
var G__50040 = cljs.core.count(c__4609__auto___50037);
var G__50041 = (0);
seq__49848_50020 = G__50038;
chunk__49851_50021 = G__50039;
count__49852_50022 = G__50040;
i__49853_50023 = G__50041;
continue;
} else {
var node_50042 = cljs.core.first(seq__49848_50036__$1);
var path_match_50043 = shadow.cljs.devtools.client.browser.match_paths(node_50042.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50043)){
var new_link_50045 = (function (){var G__49859 = node_50042.cloneNode(true);
G__49859.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50043),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49859;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50043], 0));

goog.dom.insertSiblingAfter(new_link_50045,node_50042);

goog.dom.removeNode(node_50042);


var G__50046 = cljs.core.next(seq__49848_50036__$1);
var G__50047 = null;
var G__50048 = (0);
var G__50049 = (0);
seq__49848_50020 = G__50046;
chunk__49851_50021 = G__50047;
count__49852_50022 = G__50048;
i__49853_50023 = G__50049;
continue;
} else {
var G__50050 = cljs.core.next(seq__49848_50036__$1);
var G__50051 = null;
var G__50052 = (0);
var G__50053 = (0);
seq__49848_50020 = G__50050;
chunk__49851_50021 = G__50051;
count__49852_50022 = G__50052;
i__49853_50023 = G__50053;
continue;
}
}
} else {
}
}
break;
}


var G__50054 = cljs.core.next(seq__49802__$1);
var G__50055 = null;
var G__50056 = (0);
var G__50057 = (0);
seq__49802 = G__50054;
chunk__49804 = G__50055;
count__49805 = G__50056;
i__49806 = G__50057;
continue;
} else {
var G__50058 = cljs.core.next(seq__49802__$1);
var G__50059 = null;
var G__50060 = (0);
var G__50061 = (0);
seq__49802 = G__50058;
chunk__49804 = G__50059;
count__49805 = G__50060;
i__49806 = G__50061;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49860){
var map__49861 = p__49860;
var map__49861__$1 = (((((!((map__49861 == null))))?(((((map__49861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49861):map__49861);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49864,done){
var map__49865 = p__49864;
var map__49865__$1 = (((((!((map__49865 == null))))?(((((map__49865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49865):map__49865);
var msg = map__49865__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49867){
var map__49868 = p__49867;
var map__49868__$1 = (((((!((map__49868 == null))))?(((((map__49868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49868):map__49868);
var src = map__49868__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49868__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e49871){var e = e49871;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49872,done){
var map__49873 = p__49872;
var map__49873__$1 = (((((!((map__49873 == null))))?(((((map__49873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49873):map__49873);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49873__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49873__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49877){
var map__49878 = p__49877;
var map__49878__$1 = (((((!((map__49878 == null))))?(((((map__49878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49878):map__49878);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49878__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49878__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49881,done){
var map__49882 = p__49881;
var map__49882__$1 = (((((!((map__49882 == null))))?(((((map__49882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49882):map__49882);
var msg = map__49882__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49884_50065 = type;
var G__49884_50066__$1 = (((G__49884_50065 instanceof cljs.core.Keyword))?G__49884_50065.fqn:null);
switch (G__49884_50066__$1) {
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
var G__49885 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__49886 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__49887 = "POST";
var G__49888 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__49889 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49885,G__49886,G__49887,G__49888,G__49889);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__49892 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__49891 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__49891.cljs$core$IFn$_invoke$arity$1 ? fexpr__49891.cljs$core$IFn$_invoke$arity$1(G__49892) : fexpr__49891.call(null,G__49892));
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
}catch (e49893){var e = e49893;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50074 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50074)){
var s_50075 = temp__5735__auto___50074;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50075.onclose = (function (e){
return null;
}));

s_50075.close();

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
