goog.provide('athens.views');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.all_pages');
goog.require('athens.devcards.athena');
goog.require('athens.devcards.block_page');
goog.require('athens.devcards.left_sidebar');
goog.require('athens.devcards.node_page');
goog.require('athens.style');
goog.require('athens.subs');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('stylefy.core');
athens.views.loading_message_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"50vh",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null);
athens.views.app_wrapper_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null);
athens.views.match_panel_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5rem auto",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"500px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"900px"], null);
athens.views.main_content_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null);
/**
 * When `:errors` subscription is updated, global alert will be called with its contents and then cleared.
 */
athens.views.alert = (function athens$views$alert(){
var errors = (function (){var G__53690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53690) : re_frame.core.subscribe.call(null,G__53690));
})();
if(cljs.core.seq(cljs.core.deref(errors))){
alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(errors)));

var G__53691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53691) : re_frame.core.dispatch.call(null,G__53691));
} else {
return null;
}
});
athens.views.file_cb = (function athens$views$file_cb(e){
var fr = (new FileReader());
var file = e.target.files.item((0));
(fr.onload = (function (p1__53692_SHARP_){
var G__53693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),p1__53692_SHARP_.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53693) : re_frame.core.dispatch.call(null,G__53693));
}));

return fr.readAsText(file);
});
athens.views.about_panel = (function athens$views$about_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About Panel"], null)], null);
});
athens.views.pages_panel = (function athens$views$pages_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Upload your DB ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),""], null),"(tutorial)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-file","input.input-file",1705944641),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return athens.views.file_cb(e);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.all_pages.table,athens.db.dsdb], null)], null);
});
});
athens.views.page_panel = (function athens$views$page_panel(){
var current_route = (function (){var G__53694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53694) : re_frame.core.subscribe.call(null,G__53694));
})();
var uid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route)));
var node_or_block = cljs.core.deref((function (){var G__53695 = athens.db.dsdb;
var G__53696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__53697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__53695,G__53696,G__53697) : posh.reagent.pull.call(null,G__53695,G__53696,G__53697));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"40px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"40px"], null)], null),(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node_or_block))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node_or_block)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.block_page.block_page_component,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node_or_block)], null))], null);
});
athens.views.match_panel = (function athens$views$match_panel(name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.match_panel_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53698 = name;
var G__53698__$1 = (((G__53698 instanceof cljs.core.Keyword))?G__53698.fqn:null);
switch (G__53698__$1) {
case "about":
return athens.views.about_panel;

break;
case "pages":
return athens.views.pages_panel;

break;
case "page":
return athens.views.page_panel;

break;
default:
return athens.views.pages_panel;

}
})()], null)], null);
});
athens.views.main_panel = (function athens$views$main_panel(){
var current_route = (function (){var G__53699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53699) : re_frame.core.subscribe.call(null,G__53699));
})();
var loading = (function (){var G__53700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__53700) : re_frame.core.subscribe.call(null,G__53700));
})();
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.alert], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena_component], null),(cljs.core.truth_(cljs.core.deref(loading))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.loading_message_style),"Loading Athens \uD83D\uDE08"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.app_wrapper_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.left_sidebar.left_sidebar,athens.db.dsdb], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.main_content_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.match_panel,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route)))], null)], null)], null))], null);
});
});

//# sourceMappingURL=athens.views.js.map
