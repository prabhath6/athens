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
var len__4789__auto___45132 = arguments.length;
var i__4790__auto___45133 = (0);
while(true){
if((i__4790__auto___45133 < len__4789__auto___45132)){
args__4795__auto__.push((arguments[i__4790__auto___45133]));

var G__45134 = (i__4790__auto___45133 + (1));
i__4790__auto___45133 = G__45134;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44782){
var G__44783 = cljs.core.first(seq44782);
var seq44782__$1 = cljs.core.next(seq44782);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44783,seq44782__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__44787){
var map__44788 = p__44787;
var map__44788__$1 = (((((!((map__44788 == null))))?(((((map__44788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44788):map__44788);
var src = map__44788__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44788__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44788__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__44790 = cljs.core.seq(sources);
var chunk__44791 = null;
var count__44792 = (0);
var i__44793 = (0);
while(true){
if((i__44793 < count__44792)){
var map__44802 = chunk__44791.cljs$core$IIndexed$_nth$arity$2(null,i__44793);
var map__44802__$1 = (((((!((map__44802 == null))))?(((((map__44802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44802):map__44802);
var src = map__44802__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44802__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44802__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44802__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44802__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e44806){var e_45154 = e44806;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45154);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45154.message)].join('')));
}

var G__45155 = seq__44790;
var G__45156 = chunk__44791;
var G__45157 = count__44792;
var G__45158 = (i__44793 + (1));
seq__44790 = G__45155;
chunk__44791 = G__45156;
count__44792 = G__45157;
i__44793 = G__45158;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44790);
if(temp__5735__auto__){
var seq__44790__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44790__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44790__$1);
var G__45161 = cljs.core.chunk_rest(seq__44790__$1);
var G__45162 = c__4609__auto__;
var G__45163 = cljs.core.count(c__4609__auto__);
var G__45164 = (0);
seq__44790 = G__45161;
chunk__44791 = G__45162;
count__44792 = G__45163;
i__44793 = G__45164;
continue;
} else {
var map__44809 = cljs.core.first(seq__44790__$1);
var map__44809__$1 = (((((!((map__44809 == null))))?(((((map__44809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44809):map__44809);
var src = map__44809__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44809__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44809__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44809__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44809__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e44811){var e_45169 = e44811;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45169);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45169.message)].join('')));
}

var G__45172 = cljs.core.next(seq__44790__$1);
var G__45173 = null;
var G__45174 = (0);
var G__45175 = (0);
seq__44790 = G__45172;
chunk__44791 = G__45173;
count__44792 = G__45174;
i__44793 = G__45175;
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
var seq__44814 = cljs.core.seq(js_requires);
var chunk__44815 = null;
var count__44816 = (0);
var i__44817 = (0);
while(true){
if((i__44817 < count__44816)){
var js_ns = chunk__44815.cljs$core$IIndexed$_nth$arity$2(null,i__44817);
var require_str_45181 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45181);


var G__45184 = seq__44814;
var G__45185 = chunk__44815;
var G__45186 = count__44816;
var G__45187 = (i__44817 + (1));
seq__44814 = G__45184;
chunk__44815 = G__45185;
count__44816 = G__45186;
i__44817 = G__45187;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44814);
if(temp__5735__auto__){
var seq__44814__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44814__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44814__$1);
var G__45188 = cljs.core.chunk_rest(seq__44814__$1);
var G__45189 = c__4609__auto__;
var G__45190 = cljs.core.count(c__4609__auto__);
var G__45191 = (0);
seq__44814 = G__45188;
chunk__44815 = G__45189;
count__44816 = G__45190;
i__44817 = G__45191;
continue;
} else {
var js_ns = cljs.core.first(seq__44814__$1);
var require_str_45192 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45192);


var G__45193 = cljs.core.next(seq__44814__$1);
var G__45194 = null;
var G__45195 = (0);
var G__45196 = (0);
seq__44814 = G__45193;
chunk__44815 = G__45194;
count__44816 = G__45195;
i__44817 = G__45196;
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
var G__44828 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__44828) : callback.call(null,G__44828));
} else {
var G__44832 = shadow.cljs.devtools.client.env.files_url();
var G__44833 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__44834 = "POST";
var G__44835 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__44836 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__44832,G__44833,G__44834,G__44835,G__44836);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__44846){
var map__44848 = p__44846;
var map__44848__$1 = (((((!((map__44848 == null))))?(((((map__44848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44848):map__44848);
var msg = map__44848__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44848__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44848__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__44859 = info;
var map__44859__$1 = (((((!((map__44859 == null))))?(((((map__44859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44859):map__44859);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44859__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44859__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44862(s__44863){
return (new cljs.core.LazySeq(null,(function (){
var s__44863__$1 = s__44863;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44863__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__44870 = cljs.core.first(xs__6292__auto__);
var map__44870__$1 = (((((!((map__44870 == null))))?(((((map__44870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44870):map__44870);
var src = map__44870__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44870__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44870__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__44863__$1,map__44870,map__44870__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44859,map__44859__$1,sources,compiled,map__44848,map__44848__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44862_$_iter__44864(s__44865){
return (new cljs.core.LazySeq(null,((function (s__44863__$1,map__44870,map__44870__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44859,map__44859__$1,sources,compiled,map__44848,map__44848__$1,msg,info,reload_info){
return (function (){
var s__44865__$1 = s__44865;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__44865__$1);
if(temp__5735__auto____$1){
var s__44865__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44865__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__44865__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__44867 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__44866 = (0);
while(true){
if((i__44866 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__44866);
cljs.core.chunk_append(b__44867,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45206 = (i__44866 + (1));
i__44866 = G__45206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44867),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44862_$_iter__44864(cljs.core.chunk_rest(s__44865__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44867),null);
}
} else {
var warning = cljs.core.first(s__44865__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44862_$_iter__44864(cljs.core.rest(s__44865__$2)));
}
} else {
return null;
}
break;
}
});})(s__44863__$1,map__44870,map__44870__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44859,map__44859__$1,sources,compiled,map__44848,map__44848__$1,msg,info,reload_info))
,null,null));
});})(s__44863__$1,map__44870,map__44870__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44859,map__44859__$1,sources,compiled,map__44848,map__44848__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44862(cljs.core.rest(s__44863__$1)));
} else {
var G__45211 = cljs.core.rest(s__44863__$1);
s__44863__$1 = G__45211;
continue;
}
} else {
var G__45212 = cljs.core.rest(s__44863__$1);
s__44863__$1 = G__45212;
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
var seq__44885_45214 = cljs.core.seq(warnings);
var chunk__44887_45215 = null;
var count__44888_45216 = (0);
var i__44889_45217 = (0);
while(true){
if((i__44889_45217 < count__44888_45216)){
var map__44897_45219 = chunk__44887_45215.cljs$core$IIndexed$_nth$arity$2(null,i__44889_45217);
var map__44897_45220__$1 = (((((!((map__44897_45219 == null))))?(((((map__44897_45219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44897_45219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44897_45219):map__44897_45219);
var w_45221 = map__44897_45220__$1;
var msg_45222__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44897_45220__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44897_45220__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44897_45220__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44897_45220__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45225)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45223),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45224),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45222__$1)].join(''));


var G__45227 = seq__44885_45214;
var G__45228 = chunk__44887_45215;
var G__45229 = count__44888_45216;
var G__45230 = (i__44889_45217 + (1));
seq__44885_45214 = G__45227;
chunk__44887_45215 = G__45228;
count__44888_45216 = G__45229;
i__44889_45217 = G__45230;
continue;
} else {
var temp__5735__auto___45231 = cljs.core.seq(seq__44885_45214);
if(temp__5735__auto___45231){
var seq__44885_45232__$1 = temp__5735__auto___45231;
if(cljs.core.chunked_seq_QMARK_(seq__44885_45232__$1)){
var c__4609__auto___45235 = cljs.core.chunk_first(seq__44885_45232__$1);
var G__45236 = cljs.core.chunk_rest(seq__44885_45232__$1);
var G__45237 = c__4609__auto___45235;
var G__45238 = cljs.core.count(c__4609__auto___45235);
var G__45239 = (0);
seq__44885_45214 = G__45236;
chunk__44887_45215 = G__45237;
count__44888_45216 = G__45238;
i__44889_45217 = G__45239;
continue;
} else {
var map__44901_45240 = cljs.core.first(seq__44885_45232__$1);
var map__44901_45241__$1 = (((((!((map__44901_45240 == null))))?(((((map__44901_45240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44901_45240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44901_45240):map__44901_45240);
var w_45242 = map__44901_45241__$1;
var msg_45243__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44901_45241__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44901_45241__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44901_45241__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44901_45241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45246)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45244),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45245),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45243__$1)].join(''));


var G__45251 = cljs.core.next(seq__44885_45232__$1);
var G__45252 = null;
var G__45253 = (0);
var G__45254 = (0);
seq__44885_45214 = G__45251;
chunk__44887_45215 = G__45252;
count__44888_45216 = G__45253;
i__44889_45217 = G__45254;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__44907){
var map__44908 = p__44907;
var map__44908__$1 = (((((!((map__44908 == null))))?(((((map__44908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44908):map__44908);
var src = map__44908__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44908__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44908__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44910){
var map__44911 = p__44910;
var map__44911__$1 = (((((!((map__44911 == null))))?(((((map__44911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44911):map__44911);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44911__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__44914){
var map__44915 = p__44914;
var map__44915__$1 = (((((!((map__44915 == null))))?(((((map__44915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44915):map__44915);
var rc = map__44915__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44915__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__44841_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44841_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__44925){
var map__44926 = p__44925;
var map__44926__$1 = (((((!((map__44926 == null))))?(((((map__44926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44926):map__44926);
var msg = map__44926__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44926__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__44928 = cljs.core.seq(updates);
var chunk__44930 = null;
var count__44931 = (0);
var i__44932 = (0);
while(true){
if((i__44932 < count__44931)){
var path = chunk__44930.cljs$core$IIndexed$_nth$arity$2(null,i__44932);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44986_45265 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44989_45266 = null;
var count__44990_45267 = (0);
var i__44991_45268 = (0);
while(true){
if((i__44991_45268 < count__44990_45267)){
var node_45270 = chunk__44989_45266.cljs$core$IIndexed$_nth$arity$2(null,i__44991_45268);
var path_match_45271 = shadow.cljs.devtools.client.browser.match_paths(node_45270.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45271)){
var new_link_45272 = (function (){var G__45012 = node_45270.cloneNode(true);
G__45012.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45271),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45012;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45271], 0));

goog.dom.insertSiblingAfter(new_link_45272,node_45270);

goog.dom.removeNode(node_45270);


var G__45274 = seq__44986_45265;
var G__45275 = chunk__44989_45266;
var G__45276 = count__44990_45267;
var G__45277 = (i__44991_45268 + (1));
seq__44986_45265 = G__45274;
chunk__44989_45266 = G__45275;
count__44990_45267 = G__45276;
i__44991_45268 = G__45277;
continue;
} else {
var G__45278 = seq__44986_45265;
var G__45279 = chunk__44989_45266;
var G__45280 = count__44990_45267;
var G__45281 = (i__44991_45268 + (1));
seq__44986_45265 = G__45278;
chunk__44989_45266 = G__45279;
count__44990_45267 = G__45280;
i__44991_45268 = G__45281;
continue;
}
} else {
var temp__5735__auto___45282 = cljs.core.seq(seq__44986_45265);
if(temp__5735__auto___45282){
var seq__44986_45284__$1 = temp__5735__auto___45282;
if(cljs.core.chunked_seq_QMARK_(seq__44986_45284__$1)){
var c__4609__auto___45285 = cljs.core.chunk_first(seq__44986_45284__$1);
var G__45286 = cljs.core.chunk_rest(seq__44986_45284__$1);
var G__45287 = c__4609__auto___45285;
var G__45288 = cljs.core.count(c__4609__auto___45285);
var G__45289 = (0);
seq__44986_45265 = G__45286;
chunk__44989_45266 = G__45287;
count__44990_45267 = G__45288;
i__44991_45268 = G__45289;
continue;
} else {
var node_45290 = cljs.core.first(seq__44986_45284__$1);
var path_match_45291 = shadow.cljs.devtools.client.browser.match_paths(node_45290.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45291)){
var new_link_45292 = (function (){var G__45024 = node_45290.cloneNode(true);
G__45024.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45291),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45024;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45291], 0));

goog.dom.insertSiblingAfter(new_link_45292,node_45290);

goog.dom.removeNode(node_45290);


var G__45293 = cljs.core.next(seq__44986_45284__$1);
var G__45294 = null;
var G__45295 = (0);
var G__45296 = (0);
seq__44986_45265 = G__45293;
chunk__44989_45266 = G__45294;
count__44990_45267 = G__45295;
i__44991_45268 = G__45296;
continue;
} else {
var G__45298 = cljs.core.next(seq__44986_45284__$1);
var G__45299 = null;
var G__45300 = (0);
var G__45301 = (0);
seq__44986_45265 = G__45298;
chunk__44989_45266 = G__45299;
count__44990_45267 = G__45300;
i__44991_45268 = G__45301;
continue;
}
}
} else {
}
}
break;
}


var G__45302 = seq__44928;
var G__45303 = chunk__44930;
var G__45304 = count__44931;
var G__45305 = (i__44932 + (1));
seq__44928 = G__45302;
chunk__44930 = G__45303;
count__44931 = G__45304;
i__44932 = G__45305;
continue;
} else {
var G__45308 = seq__44928;
var G__45309 = chunk__44930;
var G__45310 = count__44931;
var G__45311 = (i__44932 + (1));
seq__44928 = G__45308;
chunk__44930 = G__45309;
count__44931 = G__45310;
i__44932 = G__45311;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44928);
if(temp__5735__auto__){
var seq__44928__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44928__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44928__$1);
var G__45312 = cljs.core.chunk_rest(seq__44928__$1);
var G__45313 = c__4609__auto__;
var G__45314 = cljs.core.count(c__4609__auto__);
var G__45315 = (0);
seq__44928 = G__45312;
chunk__44930 = G__45313;
count__44931 = G__45314;
i__44932 = G__45315;
continue;
} else {
var path = cljs.core.first(seq__44928__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45027_45317 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45030_45318 = null;
var count__45031_45319 = (0);
var i__45032_45320 = (0);
while(true){
if((i__45032_45320 < count__45031_45319)){
var node_45325 = chunk__45030_45318.cljs$core$IIndexed$_nth$arity$2(null,i__45032_45320);
var path_match_45326 = shadow.cljs.devtools.client.browser.match_paths(node_45325.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45326)){
var new_link_45331 = (function (){var G__45037 = node_45325.cloneNode(true);
G__45037.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45326),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45037;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45326], 0));

goog.dom.insertSiblingAfter(new_link_45331,node_45325);

goog.dom.removeNode(node_45325);


var G__45332 = seq__45027_45317;
var G__45333 = chunk__45030_45318;
var G__45334 = count__45031_45319;
var G__45335 = (i__45032_45320 + (1));
seq__45027_45317 = G__45332;
chunk__45030_45318 = G__45333;
count__45031_45319 = G__45334;
i__45032_45320 = G__45335;
continue;
} else {
var G__45336 = seq__45027_45317;
var G__45337 = chunk__45030_45318;
var G__45338 = count__45031_45319;
var G__45339 = (i__45032_45320 + (1));
seq__45027_45317 = G__45336;
chunk__45030_45318 = G__45337;
count__45031_45319 = G__45338;
i__45032_45320 = G__45339;
continue;
}
} else {
var temp__5735__auto___45340__$1 = cljs.core.seq(seq__45027_45317);
if(temp__5735__auto___45340__$1){
var seq__45027_45341__$1 = temp__5735__auto___45340__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45027_45341__$1)){
var c__4609__auto___45342 = cljs.core.chunk_first(seq__45027_45341__$1);
var G__45343 = cljs.core.chunk_rest(seq__45027_45341__$1);
var G__45344 = c__4609__auto___45342;
var G__45345 = cljs.core.count(c__4609__auto___45342);
var G__45346 = (0);
seq__45027_45317 = G__45343;
chunk__45030_45318 = G__45344;
count__45031_45319 = G__45345;
i__45032_45320 = G__45346;
continue;
} else {
var node_45347 = cljs.core.first(seq__45027_45341__$1);
var path_match_45349 = shadow.cljs.devtools.client.browser.match_paths(node_45347.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45349)){
var new_link_45350 = (function (){var G__45043 = node_45347.cloneNode(true);
G__45043.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45349),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45043;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45349], 0));

goog.dom.insertSiblingAfter(new_link_45350,node_45347);

goog.dom.removeNode(node_45347);


var G__45351 = cljs.core.next(seq__45027_45341__$1);
var G__45352 = null;
var G__45353 = (0);
var G__45354 = (0);
seq__45027_45317 = G__45351;
chunk__45030_45318 = G__45352;
count__45031_45319 = G__45353;
i__45032_45320 = G__45354;
continue;
} else {
var G__45355 = cljs.core.next(seq__45027_45341__$1);
var G__45356 = null;
var G__45357 = (0);
var G__45358 = (0);
seq__45027_45317 = G__45355;
chunk__45030_45318 = G__45356;
count__45031_45319 = G__45357;
i__45032_45320 = G__45358;
continue;
}
}
} else {
}
}
break;
}


var G__45359 = cljs.core.next(seq__44928__$1);
var G__45360 = null;
var G__45361 = (0);
var G__45362 = (0);
seq__44928 = G__45359;
chunk__44930 = G__45360;
count__44931 = G__45361;
i__44932 = G__45362;
continue;
} else {
var G__45364 = cljs.core.next(seq__44928__$1);
var G__45365 = null;
var G__45366 = (0);
var G__45367 = (0);
seq__44928 = G__45364;
chunk__44930 = G__45365;
count__44931 = G__45366;
i__44932 = G__45367;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__45059){
var map__45060 = p__45059;
var map__45060__$1 = (((((!((map__45060 == null))))?(((((map__45060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45060):map__45060);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45060__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45060__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__45067,done){
var map__45068 = p__45067;
var map__45068__$1 = (((((!((map__45068 == null))))?(((((map__45068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45068):map__45068);
var msg = map__45068__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45070){
var map__45073 = p__45070;
var map__45073__$1 = (((((!((map__45073 == null))))?(((((map__45073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45073):map__45073);
var src = map__45073__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45073__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e45078){var e = e45078;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__45083,done){
var map__45084 = p__45083;
var map__45084__$1 = (((((!((map__45084 == null))))?(((((map__45084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45084):map__45084);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45084__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45084__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__45091){
var map__45093 = p__45091;
var map__45093__$1 = (((((!((map__45093 == null))))?(((((map__45093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45093):map__45093);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45093__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45093__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__45104,done){
var map__45105 = p__45104;
var map__45105__$1 = (((((!((map__45105 == null))))?(((((map__45105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45105):map__45105);
var msg = map__45105__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45105__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__45107_45376 = type;
var G__45107_45377__$1 = (((G__45107_45376 instanceof cljs.core.Keyword))?G__45107_45376.fqn:null);
switch (G__45107_45377__$1) {
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
var G__45113 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__45114 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__45115 = "POST";
var G__45116 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__45117 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__45113,G__45114,G__45115,G__45116,G__45117);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__45122 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__45121 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__45121.cljs$core$IFn$_invoke$arity$1 ? fexpr__45121.cljs$core$IFn$_invoke$arity$1(G__45122) : fexpr__45121.call(null,G__45122));
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
}catch (e45126){var e = e45126;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___45396 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___45396)){
var s_45398 = temp__5735__auto___45396;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_45398.onclose = (function (e){
return null;
}));

s_45398.close();

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
