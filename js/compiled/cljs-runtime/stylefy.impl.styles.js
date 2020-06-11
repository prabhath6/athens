goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('stylefy.impl.dom');
goog.require('stylefy.impl.hashing');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.state');
goog.require('stylefy.impl.conversion');
goog.require('stylefy.impl.log');
goog.require('clojure.set');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(style))], null)], 0));
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__52406,style_created_handler){
var map__52407 = p__52406;
var map__52407__$1 = (((((!((map__52407 == null))))?(((((map__52407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52407):map__52407);
var style = map__52407__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52407__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52407__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var style_css = stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(style);
var G__52409_52491 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),style_css,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null);
(style_created_handler.cljs$core$IFn$_invoke$arity$1 ? style_created_handler.cljs$core$IFn$_invoke$arity$1(G__52409_52491) : style_created_handler.call(null,G__52409_52491));

var seq__52410 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__52411 = null;
var count__52412 = (0);
var i__52413 = (0);
while(true){
if((i__52413 < count__52412)){
var sub_style = chunk__52411.cljs$core$IIndexed$_nth$arity$2(null,i__52413);
var G__52422_52492 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
var G__52423_52493 = style_created_handler;
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2(G__52422_52492,G__52423_52493) : stylefy.impl.styles.create_style_BANG_.call(null,G__52422_52492,G__52423_52493));


var G__52494 = seq__52410;
var G__52495 = chunk__52411;
var G__52496 = count__52412;
var G__52497 = (i__52413 + (1));
seq__52410 = G__52494;
chunk__52411 = G__52495;
count__52412 = G__52496;
i__52413 = G__52497;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52410);
if(temp__5735__auto__){
var seq__52410__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52410__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52410__$1);
var G__52500 = cljs.core.chunk_rest(seq__52410__$1);
var G__52501 = c__4609__auto__;
var G__52502 = cljs.core.count(c__4609__auto__);
var G__52503 = (0);
seq__52410 = G__52500;
chunk__52411 = G__52501;
count__52412 = G__52502;
i__52413 = G__52503;
continue;
} else {
var sub_style = cljs.core.first(seq__52410__$1);
var G__52432_52504 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
var G__52433_52505 = style_created_handler;
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2(G__52432_52504,G__52433_52505) : stylefy.impl.styles.create_style_BANG_.call(null,G__52432_52504,G__52433_52505));


var G__52523 = cljs.core.next(seq__52410__$1);
var G__52524 = null;
var G__52525 = (0);
var G__52526 = (0);
seq__52410 = G__52523;
chunk__52411 = G__52524;
count__52412 = G__52525;
i__52413 = G__52526;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Return class definition as string, or nil if the argument is nil.
 */
stylefy.impl.styles.class_into_string = (function stylefy$impl$styles$class_into_string(class$){
if(cljs.core.truth_(class$)){
if(typeof class$ === 'string'){
return class$;
} else {
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.name(class$);
} else {
if(cljs.core.vector_QMARK_(class$)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stylefy.impl.styles.class_into_string,class$)));
} else {
return null;
}
}
}
} else {
return null;
}
});
stylefy.impl.styles.validate_class_definition = (function stylefy$impl$styles$validate_class_definition(class$,origin){
if((((class$ == null)) || (typeof class$ === 'string') || ((class$ instanceof cljs.core.Keyword)) || (((cljs.core.vector_QMARK_(class$)) && (cljs.core.every_QMARK_((function (p1__52435_SHARP_){
return ((typeof p1__52435_SHARP_ === 'string') || ((p1__52435_SHARP_ instanceof cljs.core.Keyword)) || ((p1__52435_SHARP_ == null)));
}),class$)))))){
return null;
} else {
throw (new Error(["Assert failed: ",["Unsupported ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(origin)," type. It should be nil, keyword, string or vector of strings/keywords). Got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class$], 0))].join(''),"\n","(or (nil? class) (string? class) (keyword? class) (and (vector? class) (every? (fn* [p1__52435#] (or (string? p1__52435#) (keyword? p1__52435#) (nil? p1__52435#))) class)))"].join('')));
}
});
/**
 * Given a style, hash and options, returns HTML attributes for a Hiccup component,
 * or nil if there are not any attributes.
 */
stylefy.impl.styles.prepare_style_return_value = (function stylefy$impl$styles$prepare_style_return_value(style,style_hash,options){
if(cljs.core.truth_(new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options))){
stylefy.impl.log.warn(":stylefy.core/with-classes is deprecated in options map (since 1.3.0, removed in 2.0.0), use :class instead.");
} else {
}

var style_with_classes = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style);
var html_attributes = stylefy.impl.utils.remove_special_keywords(options);
var html_attributes_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(html_attributes);
stylefy.impl.styles.validate_class_definition(html_attributes_class,":class");

stylefy.impl.styles.validate_class_definition(style_with_classes,":stylefy.core/with-classes");

if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

var class_as_string = stylefy.impl.styles.class_into_string(html_attributes_class);
var style_with_classes_as_string = stylefy.impl.styles.class_into_string(style_with_classes);
var final_class = clojure.string.trim([cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_hash)," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_as_string,style_with_classes_as_string], null)))].join(''));
var final_html_attributes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes,(((!(cljs.core.empty_QMARK_(final_class))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),final_class], null):null)], 0));
if((!(cljs.core.empty_QMARK_(final_html_attributes)))){
return final_html_attributes;
} else {
return null;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var return_map = stylefy.impl.styles.prepare_style_return_value(style,style_hash,options);
if(((cljs.core.empty_QMARK_(style)) || (stylefy.impl.dom.style_in_dom_QMARK_(style_hash)))){
return return_map;
} else {
var contains_media_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_feature_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_manual_mode_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(style) == null)));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null), null);
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(style);
var mode_names = ((cljs.core.map_QMARK_(modes))?cljs.core.set(cljs.core.keys(modes)):((cljs.core.vector_QMARK_(modes))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,modes)):cljs.core.PersistentHashSet.EMPTY
));
var contains_modes_not_excluded_QMARK_ = (!(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,excluded_modes),mode_names))));
var inline_style = stylefy.impl.conversion.garden_units__GT_css(stylefy.impl.utils.remove_special_keywords(style));
if(((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_manual_mode_QMARK_) || (contains_modes_not_excluded_QMARK_))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], 0))], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),inline_style], null)], 0));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options,style_created_handler){
stylefy.impl.state.check_stylefy_initialisation();

var style_with_global_vendors = ((cljs.core.empty_QMARK_(style))?null:stylefy.impl.styles.add_global_vendors(style));
var style_hash = stylefy.impl.hashing.hash_style(style_with_global_vendors);
var already_created = stylefy.impl.dom.style_by_hash(style_hash);
if((((!(cljs.core.empty_QMARK_(style_with_global_vendors)))) && ((!((style_hash == null)))) && (cljs.core.not(already_created)))){
stylefy.impl.styles.create_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),style_with_global_vendors,new cljs.core.Keyword(null,"hash","hash",-13781596),style_hash], null),style_created_handler);
} else {
}

return stylefy.impl.styles.style_return_value(style_with_global_vendors,style_hash,options);
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options,style_created_handler){
var resolved_sub_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_(resolved_sub_style,options,style_created_handler);
} else {
return stylefy.impl.log.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_style], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__4795__auto__ = [];
var len__4789__auto___52587 = arguments.length;
var i__4790__auto___52588 = (0);
while(true){
if((i__4790__auto___52588 < len__4789__auto___52587)){
args__4795__auto__.push((arguments[i__4790__auto___52588]));

var G__52589 = (i__4790__auto___52588 + (1));
i__4790__auto___52588 = G__52589;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__52446_SHARP_,p2__52447_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__52446_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__52447_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return stylefy.impl.log.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_styles], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
}));

(stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq52449){
var G__52450 = cljs.core.first(seq52449);
var seq52449__$1 = cljs.core.next(seq52449);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52450,seq52449__$1);
}));

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(var_args){
var G__52459 = arguments.length;
switch (G__52459) {
case 1:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),true], null));
}));

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,p__52460){
var map__52461 = p__52460;
var map__52461__$1 = (((((!((map__52461 == null))))?(((((map__52461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52461):map__52461);
var options = map__52461__$1;
var request_dom_update_after_done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52461__$1,new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510));
var styles_52635__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,styles);
var seq__52463_52636 = cljs.core.seq(styles_52635__$1);
var chunk__52464_52637 = null;
var count__52465_52638 = (0);
var i__52466_52639 = (0);
while(true){
if((i__52466_52639 < count__52465_52638)){
var style_52640 = chunk__52464_52637.cljs$core$IIndexed$_nth$arity$2(null,i__52466_52639);
stylefy.impl.styles.use_style_BANG_(style_52640,cljs.core.PersistentArrayMap.EMPTY,stylefy.impl.dom.save_style_BANG_);

var temp__5735__auto___52641 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_52640));
if(cljs.core.truth_(temp__5735__auto___52641)){
var sub_styles_52642 = temp__5735__auto___52641;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_52642,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__52643 = seq__52463_52636;
var G__52644 = chunk__52464_52637;
var G__52645 = count__52465_52638;
var G__52646 = (i__52466_52639 + (1));
seq__52463_52636 = G__52643;
chunk__52464_52637 = G__52644;
count__52465_52638 = G__52645;
i__52466_52639 = G__52646;
continue;
} else {
var temp__5735__auto___52647 = cljs.core.seq(seq__52463_52636);
if(temp__5735__auto___52647){
var seq__52463_52648__$1 = temp__5735__auto___52647;
if(cljs.core.chunked_seq_QMARK_(seq__52463_52648__$1)){
var c__4609__auto___52649 = cljs.core.chunk_first(seq__52463_52648__$1);
var G__52650 = cljs.core.chunk_rest(seq__52463_52648__$1);
var G__52651 = c__4609__auto___52649;
var G__52652 = cljs.core.count(c__4609__auto___52649);
var G__52653 = (0);
seq__52463_52636 = G__52650;
chunk__52464_52637 = G__52651;
count__52465_52638 = G__52652;
i__52466_52639 = G__52653;
continue;
} else {
var style_52654 = cljs.core.first(seq__52463_52648__$1);
stylefy.impl.styles.use_style_BANG_(style_52654,cljs.core.PersistentArrayMap.EMPTY,stylefy.impl.dom.save_style_BANG_);

var temp__5735__auto___52660__$1 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_52654));
if(cljs.core.truth_(temp__5735__auto___52660__$1)){
var sub_styles_52663 = temp__5735__auto___52660__$1;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_52663,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__52669 = cljs.core.next(seq__52463_52648__$1);
var G__52670 = null;
var G__52671 = (0);
var G__52672 = (0);
seq__52463_52636 = G__52669;
chunk__52464_52637 = G__52670;
count__52465_52638 = G__52671;
i__52466_52639 = G__52672;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(request_dom_update_after_done_QMARK_)){
return stylefy.impl.dom.update_dom_if_requested();
} else {
return null;
}
}));

(stylefy.impl.styles.prepare_styles.cljs$lang$maxFixedArity = 2);

stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_(stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});

//# sourceMappingURL=stylefy.impl.styles.js.map
