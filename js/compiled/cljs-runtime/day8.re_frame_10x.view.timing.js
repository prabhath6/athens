goog.provide('day8.re_frame_10x.view.timing');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.formatters.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('day8.re_frame_10x.common_styles');
goog.require('day8.re_frame_10x.view.components');
day8.re_frame_10x.view.timing.timing_styles = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#--re-frame-10x--","#--re-frame-10x--",-1788857107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".timing-details",".timing-details",-1912013482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),day8.re_frame_10x.common_styles.gs_31s,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.common_styles.gs_19s], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".timing-details--line",".timing-details--line",-1160642396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"1em 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"26em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, ["-webkit-padding-start","20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 1em 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".rft-tag__timing",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ECEDF0",new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",day8.re_frame_10x.common_styles.border_line_color].join(''),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"width","width",-384071477),"63px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".timing-elapsed-panel",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px 12px 12px 0px",new cljs.core.Keyword(null,"margin","margin",-995903681),day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.common_styles.gs_7s,"0px"], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".timing-part-panel",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.common_styles.panel_style("3px"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.common_styles.gs_12s,new cljs.core.Keyword(null,"margin","margin",-995903681),day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.common_styles.gs_7s,"0px"], 0)),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], 0))], null)], null);
day8.re_frame_10x.view.timing.timing_tag = (function day8$re_frame_10x$view$timing$timing_tag(label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.tag,"rft-tag__timing",label], null);
});
day8.re_frame_10x.view.timing.timing_section = (function day8$re_frame_10x$view$timing$timing_section(label,time){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"3px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-textbox-label",new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_tag,(((time == null))?"-":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,(0)))?"0ms":(((time < 0.1))?"<0.1ms":(((time < (1)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(time.toFixed((1))),"ms"].join(''):(((!((time == null))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(time)),"ms"].join(''):null)))))], null)], null)], null);
});
day8.re_frame_10x.view.timing.render = (function day8$re_frame_10x$view$timing$render(){
var timing_data_available_QMARK_ = cljs.core.deref((function (){var G__48416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48416) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__48416));
})());
var event_processing_time = cljs.core.deref((function (){var G__48420 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48420) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__48420));
})());
if(cljs.core.truth_(timing_data_available_QMARK_)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"timing-details",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"timing-elapsed-panel",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"elapsed",cljs.core.deref((function (){var G__48422 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48422) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__48422));
})())], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"guide me to greatness",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.common_styles.gs_19s], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/UnderstandingTiming.md"], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_12s,new cljs.core.Keyword(null,"class","class",-2030961996),"timing-part-panel",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.common_styles.gs_81s,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"event"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"processing"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"total",new cljs.core.Keyword("timing","event-total","timing/event-total",127009054).cljs$core$IFn$_invoke$arity$1(event_processing_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"="], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"handler",new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787).cljs$core$IFn$_invoke$arity$1(event_processing_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"effects",new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404).cljs$core$IFn$_invoke$arity$1(event_processing_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"misc",new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210).cljs$core$IFn$_invoke$arity$1(event_processing_time)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function day8$re_frame_10x$view$timing$render_$_iter__48424(s__48425){
return (new cljs.core.LazySeq(null,(function (){
var s__48425__$1 = s__48425;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48425__$1);
if(temp__5735__auto__){
var s__48425__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48425__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48425__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48427 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48426 = (0);
while(true){
if((i__48426 < size__4581__auto__)){
var frame = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48426);
var frame_time = cljs.core.deref((function (){var G__48434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593),frame], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48434) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__48434));
})());
cljs.core.chunk_append(b__48427,(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"timing-part-panel",new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_12s,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.common_styles.gs_81s,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"animation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"frame"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"#",frame], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"total",new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693).cljs$core$IFn$_invoke$arity$1(frame_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"="], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"subs",new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226).cljs$core$IFn$_invoke$arity$1(frame_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"views",new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151).cljs$core$IFn$_invoke$arity$1(frame_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"react, etc",new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573).cljs$core$IFn$_invoke$arity$1(frame_time)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["af",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame)].join('')], null)),null,(1),null)));

var G__48458 = (i__48426 + (1));
i__48426 = G__48458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48427),day8$re_frame_10x$view$timing$render_$_iter__48424(cljs.core.chunk_rest(s__48425__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48427),null);
}
} else {
var frame = cljs.core.first(s__48425__$2);
var frame_time = cljs.core.deref((function (){var G__48436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593),frame], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48436) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__48436));
})());
return cljs.core.cons((new cljs.core.List(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"timing-part-panel",new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_12s,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.common_styles.gs_81s,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"animation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"frame"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"#",frame], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"total",new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693).cljs$core$IFn$_invoke$arity$1(frame_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"="], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"subs",new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226).cljs$core$IFn$_invoke$arity$1(frame_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"views",new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151).cljs$core$IFn$_invoke$arity$1(frame_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.timing.timing_section,"react, etc",new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573).cljs$core$IFn$_invoke$arity$1(frame_time)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["af",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame)].join('')], null)),null,(1),null)),day8$re_frame_10x$view$timing$render_$_iter__48424(cljs.core.rest(s__48425__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.deref((function (){var G__48440 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__48440) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe.call(null,G__48440));
})()) + (1))));
})())], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"timing-details",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"No timing data currently available."], null)], null)], null);
}
});

//# sourceMappingURL=day8.re_frame_10x.view.timing.js.map
