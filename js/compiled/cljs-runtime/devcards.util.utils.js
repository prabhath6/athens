goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__68976_68990 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__68977_68991 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__68978_68992 = true;
var _STAR_print_fn_STAR__temp_val__68979_68993 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68978_68992);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68979_68993);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68977_68991);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68976_68990);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
}catch (e68971){if((e68971 instanceof Error)){
var e1 = e68971;
try{return obj.toString();
}catch (e68972){if((e68972 instanceof Error)){
var e2 = e68972;
return "<<Un-printable Type>>";
} else {
throw e68972;

}
}} else {
throw e68971;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__68980 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__68981 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__68981);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__68980);
}});

//# sourceMappingURL=devcards.util.utils.js.map
