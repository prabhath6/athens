goog.provide('reitit.trie');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reitit.exception');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_(x)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.core.set(x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,x);

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48229,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48233 = k48229;
var G__48233__$1 = (((G__48233 instanceof cljs.core.Keyword))?G__48233.fqn:null);
switch (G__48233__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48229,else__4442__auto__);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48234){
var vec__48235 = p__48234;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48235,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48235,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.trie.Wild{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48228){
var self__ = this;
var G__48228__$1 = this;
return (new cljs.core.RecordIter((0),G__48228__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48241 = (function (coll__4436__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48241(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48230,other48231){
var self__ = this;
var this48230__$1 = this;
return (((!((other48231 == null)))) && ((this48230__$1.constructor === other48231.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48230__$1.value,other48231.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48230__$1.__extmap,other48231.__extmap)));
}));

(reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48228){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48243 = cljs.core.keyword_identical_QMARK_;
var expr__48244 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48246 = new cljs.core.Keyword(null,"value","value",305978217);
var G__48247 = expr__48244;
return (pred__48243.cljs$core$IFn$_invoke$arity$2 ? pred__48243.cljs$core$IFn$_invoke$arity$2(G__48246,G__48247) : pred__48243.call(null,G__48246,G__48247));
})())){
return (new reitit.trie.Wild(G__48228,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48228),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48228){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__48228,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.Wild.cljs$lang$type = true);

(reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
}));

(reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.trie/Wild");
}));

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__48232){
var extmap__4478__auto__ = (function (){var G__48256 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48232,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__48232)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48256);
} else {
return G__48256;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__48232),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48258,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48272 = k48258;
var G__48272__$1 = (((G__48272 instanceof cljs.core.Keyword))?G__48272.fqn:null);
switch (G__48272__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48258,else__4442__auto__);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48278){
var vec__48283 = p__48278;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48283,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48283,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.trie.CatchAll{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48257){
var self__ = this;
var G__48257__$1 = this;
return (new cljs.core.RecordIter((0),G__48257__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48302 = (function (coll__4436__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48302(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48259,other48260){
var self__ = this;
var this48259__$1 = this;
return (((!((other48260 == null)))) && ((this48259__$1.constructor === other48260.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48259__$1.value,other48260.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48259__$1.__extmap,other48260.__extmap)));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48257){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48314 = cljs.core.keyword_identical_QMARK_;
var expr__48315 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48317 = new cljs.core.Keyword(null,"value","value",305978217);
var G__48318 = expr__48315;
return (pred__48314.cljs$core$IFn$_invoke$arity$2 ? pred__48314.cljs$core$IFn$_invoke$arity$2(G__48317,G__48318) : pred__48314.call(null,G__48317,G__48318));
})())){
return (new reitit.trie.CatchAll(G__48257,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48257),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48257){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__48257,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.CatchAll.cljs$lang$type = true);

(reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
}));

(reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.trie/CatchAll");
}));

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__48265){
var extmap__4478__auto__ = (function (){var G__48343 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48265,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__48265)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48343);
} else {
return G__48343;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__48265),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48345,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48364 = k48345;
var G__48364__$1 = (((G__48364 instanceof cljs.core.Keyword))?G__48364.fqn:null);
switch (G__48364__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48345,else__4442__auto__);

}
}));

(reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48377){
var vec__48378 = p__48377;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48378,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48378,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.trie.Match{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48344){
var self__ = this;
var G__48344__$1 = this;
return (new cljs.core.RecordIter((0),G__48344__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48400 = (function (coll__4436__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48400(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48346,other48347){
var self__ = this;
var this48346__$1 = this;
return (((!((other48347 == null)))) && ((this48346__$1.constructor === other48347.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48346__$1.params,other48347.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48346__$1.data,other48347.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48346__$1.__extmap,other48347.__extmap)));
}));

(reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48344){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48423 = cljs.core.keyword_identical_QMARK_;
var expr__48424 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48426 = new cljs.core.Keyword(null,"params","params",710516235);
var G__48427 = expr__48424;
return (pred__48423.cljs$core$IFn$_invoke$arity$2 ? pred__48423.cljs$core$IFn$_invoke$arity$2(G__48426,G__48427) : pred__48423.call(null,G__48426,G__48427));
})())){
return (new reitit.trie.Match(G__48344,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48428 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__48429 = expr__48424;
return (pred__48423.cljs$core$IFn$_invoke$arity$2 ? pred__48423.cljs$core$IFn$_invoke$arity$2(G__48428,G__48429) : pred__48423.call(null,G__48428,G__48429));
})())){
return (new reitit.trie.Match(self__.params,G__48344,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48344),null));
}
}
}));

(reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48344){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__48344,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Match.cljs$lang$type = true);

(reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
}));

(reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.trie/Match");
}));

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__48355){
var extmap__4478__auto__ = (function (){var G__48455 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48355,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__48355)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48455);
} else {
return G__48455;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__48355),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__48355),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48457,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48466 = k48457;
var G__48466__$1 = (((G__48466 instanceof cljs.core.Keyword))?G__48466.fqn:null);
switch (G__48466__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48457,else__4442__auto__);

}
}));

(reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48469){
var vec__48470 = p__48469;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48470,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48470,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.trie.Node{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48456){
var self__ = this;
var G__48456__$1 = this;
return (new cljs.core.RecordIter((0),G__48456__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48478 = (function (coll__4436__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48478(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48458,other48459){
var self__ = this;
var this48458__$1 = this;
return (((!((other48459 == null)))) && ((this48458__$1.constructor === other48459.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48458__$1.children,other48459.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48458__$1.wilds,other48459.wilds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48458__$1.catch_all,other48459.catch_all)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48458__$1.params,other48459.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48458__$1.data,other48459.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48458__$1.__extmap,other48459.__extmap)));
}));

(reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48456){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48479 = cljs.core.keyword_identical_QMARK_;
var expr__48480 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48482 = new cljs.core.Keyword(null,"children","children",-940561982);
var G__48483 = expr__48480;
return (pred__48479.cljs$core$IFn$_invoke$arity$2 ? pred__48479.cljs$core$IFn$_invoke$arity$2(G__48482,G__48483) : pred__48479.call(null,G__48482,G__48483));
})())){
return (new reitit.trie.Node(G__48456,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48484 = new cljs.core.Keyword(null,"wilds","wilds",132271223);
var G__48485 = expr__48480;
return (pred__48479.cljs$core$IFn$_invoke$arity$2 ? pred__48479.cljs$core$IFn$_invoke$arity$2(G__48484,G__48485) : pred__48479.call(null,G__48484,G__48485));
})())){
return (new reitit.trie.Node(self__.children,G__48456,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48486 = new cljs.core.Keyword(null,"catch-all","catch-all",1184112570);
var G__48487 = expr__48480;
return (pred__48479.cljs$core$IFn$_invoke$arity$2 ? pred__48479.cljs$core$IFn$_invoke$arity$2(G__48486,G__48487) : pred__48479.call(null,G__48486,G__48487));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,G__48456,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48488 = new cljs.core.Keyword(null,"params","params",710516235);
var G__48489 = expr__48480;
return (pred__48479.cljs$core$IFn$_invoke$arity$2 ? pred__48479.cljs$core$IFn$_invoke$arity$2(G__48488,G__48489) : pred__48479.call(null,G__48488,G__48489));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__48456,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48490 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__48491 = expr__48480;
return (pred__48479.cljs$core$IFn$_invoke$arity$2 ? pred__48479.cljs$core$IFn$_invoke$arity$2(G__48490,G__48491) : pred__48479.call(null,G__48490,G__48491));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__48456,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48456),null));
}
}
}
}
}
}));

(reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48456){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__48456,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Node.cljs$lang$type = true);

(reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
}));

(reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.trie/Node");
}));

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__48460){
var extmap__4478__auto__ = (function (){var G__48495 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48460,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__48460)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48495);
} else {
return G__48495;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__48460),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__48460),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__48460),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__48460),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__48460),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.trie.match[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4488__auto__.call(null,this$,i,max,path));
} else {
var m__4485__auto__ = (reitit.trie.match["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4485__auto__.call(null,this$,i,max,path));
} else {
throw cljs.core.missing_protocol("Matcher.match",this$);
}
}
}
});

reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.trie.view[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.trie.view["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.view",this$);
}
}
}
});

reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.trie.depth[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.trie.depth["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.depth",this$);
}
}
}
});

reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.trie.length[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.trie.length["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.length",this$);
}
}
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4488__auto__.call(null,this$,params,data));
} else {
var m__4485__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4485__auto__.call(null,this$,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.data-matcher",this$);
}
}
}
});

reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4488__auto__.call(null,this$,path,matcher));
} else {
var m__4485__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4485__auto__.call(null,this$,path,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.static-matcher",this$);
}
}
}
});

reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4488__auto__.call(null,this$,key,end,matcher));
} else {
var m__4485__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4485__auto__.call(null,this$,key,end,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.wild-matcher",this$);
}
}
}
});

reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4488__auto__.call(null,this$,key,params,data));
} else {
var m__4485__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4485__auto__.call(null,this$,key,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.catch-all-matcher",this$);
}
}
}
});

reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4488__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
var m__4485__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4485__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
throw cljs.core.missing_protocol("TrieCompiler.linear-matcher",this$);
}
}
}
});

reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.trie._pretty[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4488__auto__.call(null,this$,matcher));
} else {
var m__4485__auto__ = (reitit.trie._pretty["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4485__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-pretty",this$);
}
}
}
});

reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4488__auto__.call(null,this$,matcher));
} else {
var m__4485__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4485__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-path-matcher",this$);
}
}
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__4276__auto__ = cljs.core.count(s1);
var y__4277__auto__ = cljs.core.count(s2);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),max);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s2,i))){
if((!((i === (0))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),i);
} else {
return null;
}
} else {
var G__48935 = (i + (1));
i = G__48935;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5733__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"/");
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__48524){
var map__48525 = p__48524;
var map__48525__$1 = (((((!((map__48525 == null))))?(((((map__48525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48525):map__48525);
var syntax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48525__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var _static = (function (from,to){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,from,to)], null);
} else {
return null;
}
});
var _wild = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild(reitit.trie._keyword(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var _catch_all = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.count(s))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ss,_static(from,to));
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,to);
if(cljs.core.truth_((function (){var and__4174__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",c);
} else {
return and__4174__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4185__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"}",to);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(to + (1))))){
var G__48963 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all((to + (1)),to_SINGLEQUOTE_)], 0));
var G__48964 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__48965 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__48963;
from = G__48964;
to = G__48965;
continue;
} else {
var G__48967 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__48968 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__48969 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__48967;
from = G__48968;
to = G__48969;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",c);
} else {
return and__4174__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4185__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"/",to);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.count(s);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(to_SINGLEQUOTE_ - to))){
var G__48970 = ss;
var G__48971 = from;
var G__48972 = (to + (1));
ss = G__48970;
from = G__48971;
to = G__48972;
continue;
} else {
var G__48974 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__48975 = cljs.core.long$(to_SINGLEQUOTE_);
var G__48976 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__48974;
from = G__48975;
to = G__48976;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",c);
} else {
return and__4174__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count(s);
var G__48983 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all(to,to_SINGLEQUOTE_)], 0));
var G__48984 = cljs.core.long$(to_SINGLEQUOTE_);
var G__48985 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__48983;
from = G__48984;
to = G__48985;
continue;
} else {
var G__48987 = ss;
var G__48988 = from;
var G__48989 = (to + (1));
ss = G__48987;
from = G__48988;
to = G__48989;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path(reitit.trie.split_path(s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__48544,p__48545){
var vec__48546 = p__48544;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48546,(0),null);
var p1s = vec__48546;
var vec__48549 = p__48545;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48549,(0),null);
var p2s = vec__48549;
var _split = (function (p){
var temp__5733__auto__ = (function (){var and__4174__auto__ = p;
if(cljs.core.truth_(and__4174__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});
var _slash = (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(((cp).length),cljs.core.count(p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not(cp)))){
return _split(p);
} else {
return null;
}
}
}
});
var _postcut = (function (p__48553){
var vec__48554 = p__48553;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48554,(0),null);
var pps = vec__48554;
var i = (function (){var and__4174__auto__ = p;
if(cljs.core.truth_(and__4174__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = i;
if(cljs.core.truth_(and__4174__auto__)){
return (i > (0));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null),cljs.core.rest(pps));
} else {
return pps;
}
});
var _tailcut = (function (cp,p__48557){
var vec__48558 = p__48557;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48558,(0),null);
var ps = vec__48558;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(_slash(cp,p),cljs.core.rest(ps));
});
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut(p1s),_postcut(p2s)], null);
} else {
var temp__5733__auto__ = ((typeof p1 === 'string')?((typeof p2 === 'string')?reitit.trie.common_prefix(p1,p2):false):false);
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut(cp,p1s),_tailcut(cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
var parts1 = reitit.trie.split_path(path1,opts);
var parts2 = reitit.trie.split_path(path2,opts);
while(true){
var vec__48570 = reitit.trie._slice_start(parts1,parts2);
var vec__48573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48570,(0),null);
var seq__48574 = cljs.core.seq(vec__48573);
var first__48575 = cljs.core.first(seq__48574);
var seq__48574__$1 = cljs.core.next(seq__48574);
var s1 = first__48575;
var ss1 = seq__48574__$1;
var vec__48576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48570,(1),null);
var seq__48577 = cljs.core.seq(vec__48576);
var first__48578 = cljs.core.first(seq__48577);
var seq__48577__$1 = cljs.core.next(seq__48577);
var s2 = first__48578;
var ss2 = seq__48577__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_(s1)) || (reitit.trie.catch_all_QMARK_(s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_(s1)) || (reitit.trie.wild_QMARK_(s2)))){
var G__49002 = reitit.trie._slice_end(s1,ss1);
var G__49003 = reitit.trie._slice_end(s2,ss2);
parts1 = G__49002;
parts2 = G__49003;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return false;
} else {
var G__49005 = ss1;
var G__49006 = ss2;
parts1 = G__49005;
parts2 = G__49006;
continue;

}
}
}
}
}
break;
}
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m], 0)));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__48588,fp,params,data){
var vec__48589 = p__48588;
var seq__48590 = cljs.core.seq(vec__48589);
var first__48591 = cljs.core.first(seq__48590);
var seq__48590__$1 = cljs.core.next(seq__48590);
var path = first__48591;
var ps = seq__48590__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"data","data",-232669377),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),params], 0)):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first(ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),(function (n){
var G__48599 = (function (){var or__4185__auto__ = n;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__48600 = ps;
var G__48601 = fp;
var G__48602 = params;
var G__48603 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__48599,G__48600,G__48601,G__48602,G__48603) : reitit.trie._insert.call(null,G__48599,G__48600,G__48601,G__48602,G__48603));
}));
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((clojure.string.blank_QMARK_(path))?(reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(node,ps,fp,params,data) : reitit.trie._insert.call(null,node,ps,fp,params,data)):(function (){var or__4185__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p__48642){
var vec__48643 = p__48642;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48643,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48643,(1),null);
var temp__5733__auto__ = reitit.trie.common_prefix(p,path);
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cp,p)){
var n_SINGLEQUOTE_ = (function (){var G__48647 = n;
var G__48648 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(p)));
var G__48649 = fp;
var G__48650 = params;
var G__48651 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__48647,G__48648,G__48649,G__48650,G__48651) : reitit.trie._insert.call(null,G__48647,G__48648,G__48649,G__48650,G__48651));
})();
return cljs.core.reduced(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,((cp).length));
var rp_SINGLEQUOTE_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,((cp).length));
var n_SINGLEQUOTE_ = (function (){var G__48655 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__48656 = ps;
var G__48657 = fp;
var G__48658 = params;
var G__48659 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__48655,G__48656,G__48657,G__48658,G__48659) : reitit.trie._insert.call(null,G__48655,G__48656,G__48657,G__48658,G__48659));
})();
var n_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__48660 = reitit.trie._node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null));
var G__48661 = null;
var G__48662 = null;
var G__48663 = null;
var G__48664 = null;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__48660,G__48661,G__48662,G__48663,G__48664) : reitit.trie._insert.call(null,G__48660,G__48661,G__48662,G__48663,G__48664));
})();
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
})));
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),(function (){var G__48669 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__48670 = ps;
var G__48671 = fp;
var G__48672 = params;
var G__48673 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__48669,G__48670,G__48671,G__48672,G__48673) : reitit.trie._insert.call(null,G__48669,G__48670,G__48671,G__48672,G__48673));
})());
}
})()
))));
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child], 0)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie48682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie48682 = (function (meta48683){
this.meta48683 = meta48683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie48682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48684,meta48683__$1){
var self__ = this;
var _48684__$1 = this;
return (new reitit.trie.t_reitit$trie48682(meta48683__$1));
}));

(reitit.trie.t_reitit$trie48682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48684){
var self__ = this;
var _48684__$1 = this;
return self__.meta48683;
}));

(reitit.trie.t_reitit$trie48682.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie48682.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie48694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie48694 = (function (meta48683,_,params,data,match,meta48695){
this.meta48683 = meta48683;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta48695 = meta48695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie48694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48696,meta48695__$1){
var self__ = this;
var _48696__$1 = this;
return (new reitit.trie.t_reitit$trie48694(self__.meta48683,self__._,self__.params,self__.data,self__.match,meta48695__$1));
}));

(reitit.trie.t_reitit$trie48694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48696){
var self__ = this;
var _48696__$1 = this;
return self__.meta48695;
}));

(reitit.trie.t_reitit$trie48694.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie48694.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return self__.match;
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie48694.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
}));

(reitit.trie.t_reitit$trie48694.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie48694.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie48694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48683","meta48683",-750755052,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie48682","reitit.trie/t_reitit$trie48682",581013519,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta48695","meta48695",513637547,null)], null);
}));

(reitit.trie.t_reitit$trie48694.cljs$lang$type = true);

(reitit.trie.t_reitit$trie48694.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie48694");

(reitit.trie.t_reitit$trie48694.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/t_reitit$trie48694");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie48694.
 */
reitit.trie.__GT_t_reitit$trie48694 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie48694(meta48683__$1,___$2,params__$1,data__$1,match__$1,meta48695){
return (new reitit.trie.t_reitit$trie48694(meta48683__$1,___$2,params__$1,data__$1,match__$1,meta48695));
});

}

return (new reitit.trie.t_reitit$trie48694(self__.meta48683,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie48682.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count(path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie48712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie48712 = (function (meta48683,_,path,matcher,size,meta48713){
this.meta48683 = meta48683;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta48713 = meta48713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie48712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48714,meta48713__$1){
var self__ = this;
var _48714__$1 = this;
return (new reitit.trie.t_reitit$trie48712(self__.meta48683,self__._,self__.path,self__.matcher,self__.size,meta48713__$1));
}));

(reitit.trie.t_reitit$trie48712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48714){
var self__ = this;
var _48714__$1 = this;
return self__.meta48713;
}));

(reitit.trie.t_reitit$trie48712.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie48712.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,self__.size)){
return reitit.trie.match(self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(i + j)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.path,j))){
var G__49034 = (j + (1));
j = G__49034;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie48712.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie48712.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie48712.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count(self__.path);
}));

(reitit.trie.t_reitit$trie48712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48683","meta48683",-750755052,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie48682","reitit.trie/t_reitit$trie48682",581013519,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta48713","meta48713",1116832204,null)], null);
}));

(reitit.trie.t_reitit$trie48712.cljs$lang$type = true);

(reitit.trie.t_reitit$trie48712.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie48712");

(reitit.trie.t_reitit$trie48712.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/t_reitit$trie48712");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie48712.
 */
reitit.trie.__GT_t_reitit$trie48712 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie48712(meta48683__$1,___$2,path__$1,matcher__$1,size__$1,meta48713){
return (new reitit.trie.t_reitit$trie48712(meta48683__$1,___$2,path__$1,matcher__$1,size__$1,meta48713));
});

}

return (new reitit.trie.t_reitit$trie48712(self__.meta48683,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie48682.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie48724 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie48724 = (function (meta48683,_,key,end,matcher,meta48725){
this.meta48683 = meta48683;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta48725 = meta48725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie48724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48726,meta48725__$1){
var self__ = this;
var _48726__$1 = this;
return (new reitit.trie.t_reitit$trie48724(self__.meta48683,self__._,self__.key,self__.end,self__.matcher,meta48725__$1));
}));

(reitit.trie.t_reitit$trie48724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48726){
var self__ = this;
var _48726__$1 = this;
return self__.meta48725;
}));

(reitit.trie.t_reitit$trie48724.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie48724.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,j)){
var temp__5733__auto__ = reitit.trie.match(self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,j);
var pred__48733 = cljs.core._EQ_;
var expr__48734 = c;
if(cljs.core.truth_((pred__48733.cljs$core$IFn$_invoke$arity$2 ? pred__48733.cljs$core$IFn$_invoke$arity$2(self__.end,expr__48734) : pred__48733.call(null,self__.end,expr__48734)))){
var temp__5733__auto__ = reitit.trie.match(self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__48736 = "%";
var G__48737 = expr__48734;
return (pred__48733.cljs$core$IFn$_invoke$arity$2 ? pred__48733.cljs$core$IFn$_invoke$arity$2(G__48736,G__48737) : pred__48733.call(null,G__48736,G__48737));
})())){
var G__49049 = true;
var G__49050 = (j + (1));
percent_QMARK_ = G__49049;
j = G__49050;
continue;
} else {
var G__49051 = percent_QMARK_;
var G__49052 = (j + (1));
percent_QMARK_ = G__49051;
j = G__49052;
continue;
}
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie48724.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie48724.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie48724.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie48724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48683","meta48683",-750755052,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie48682","reitit.trie/t_reitit$trie48682",581013519,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta48725","meta48725",1071013719,null)], null);
}));

(reitit.trie.t_reitit$trie48724.cljs$lang$type = true);

(reitit.trie.t_reitit$trie48724.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie48724");

(reitit.trie.t_reitit$trie48724.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/t_reitit$trie48724");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie48724.
 */
reitit.trie.__GT_t_reitit$trie48724 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie48724(meta48683__$1,___$2,key__$1,end__$1,matcher__$1,meta48725){
return (new reitit.trie.t_reitit$trie48724(meta48683__$1,___$2,key__$1,end__$1,matcher__$1,meta48725));
});

}

return (new reitit.trie.t_reitit$trie48724(self__.meta48683,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie48682.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie48741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie48741 = (function (meta48683,_,key,params,data,match,meta48742){
this.meta48683 = meta48683;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta48742 = meta48742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie48741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48743,meta48742__$1){
var self__ = this;
var _48743__$1 = this;
return (new reitit.trie.t_reitit$trie48741(self__.meta48683,self__._,self__.key,self__.params,self__.data,self__.match,meta48742__$1));
}));

(reitit.trie.t_reitit$trie48741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48743){
var self__ = this;
var _48743__$1 = this;
return self__.meta48742;
}));

(reitit.trie.t_reitit$trie48741.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie48741.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param(self__.match,self__.key,reitit.trie.decode(path,i,max,true));
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie48741.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
}));

(reitit.trie.t_reitit$trie48741.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie48741.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie48741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48683","meta48683",-750755052,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie48682","reitit.trie/t_reitit$trie48682",581013519,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta48742","meta48742",103171795,null)], null);
}));

(reitit.trie.t_reitit$trie48741.cljs$lang$type = true);

(reitit.trie.t_reitit$trie48741.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie48741");

(reitit.trie.t_reitit$trie48741.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/t_reitit$trie48741");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie48741.
 */
reitit.trie.__GT_t_reitit$trie48741 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie48741(meta48683__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta48742){
return (new reitit.trie.t_reitit$trie48741(meta48683__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta48742));
});

}

return (new reitit.trie.t_reitit$trie48741(self__.meta48683,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie48682.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec((cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count(matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie48751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie48751 = (function (meta48683,_,matchers,ordered_QMARK_,size,meta48752){
this.meta48683 = meta48683;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta48752 = meta48752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie48751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48753,meta48752__$1){
var self__ = this;
var _48753__$1 = this;
return (new reitit.trie.t_reitit$trie48751(self__.meta48683,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta48752__$1));
}));

(reitit.trie.t_reitit$trie48751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48753){
var self__ = this;
var _48753__$1 = this;
return self__.meta48752;
}));

(reitit.trie.t_reitit$trie48751.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie48751.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__4185__auto__ = reitit.trie.match(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__49071 = (j + (1));
j = G__49071;
continue;
}
} else {
return null;
}
break;
}
}));

(reitit.trie.t_reitit$trie48751.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reitit.trie.view,self__.matchers);
}));

(reitit.trie.t_reitit$trie48751.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,self__.matchers)) + (1));
}));

(reitit.trie.t_reitit$trie48751.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie48751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48683","meta48683",-750755052,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie48682","reitit.trie/t_reitit$trie48682",581013519,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta48752","meta48752",1187584339,null)], null);
}));

(reitit.trie.t_reitit$trie48751.cljs$lang$type = true);

(reitit.trie.t_reitit$trie48751.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie48751");

(reitit.trie.t_reitit$trie48751.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/t_reitit$trie48751");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie48751.
 */
reitit.trie.__GT_t_reitit$trie48751 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie48751(meta48683__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta48752){
return (new reitit.trie.t_reitit$trie48751(meta48683__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta48752));
});

}

return (new reitit.trie.t_reitit$trie48751(self__.meta48683,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie48682.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view(matcher);
}));

(reitit.trie.t_reitit$trie48682.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return (function (path){
var temp__5733__auto__ = reitit.trie.match(matcher,(0),cljs.core.count(path),path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.__GT_Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
}));

(reitit.trie.t_reitit$trie48682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48683","meta48683",-750755052,null)], null);
}));

(reitit.trie.t_reitit$trie48682.cljs$lang$type = true);

(reitit.trie.t_reitit$trie48682.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie48682");

(reitit.trie.t_reitit$trie48682.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/t_reitit$trie48682");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie48682.
 */
reitit.trie.__GT_t_reitit$trie48682 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie48682(meta48683){
return (new reitit.trie.t_reitit$trie48682(meta48683));
});

}

return (new reitit.trie.t_reitit$trie48682(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__48776 = arguments.length;
switch (G__48776) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2(null,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__48784){
var vec__48787 = p__48784;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48787,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48787,(1),null);
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3(acc,p,d);
}),node,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(node,path,data,null);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__48790){
var map__48791 = p__48790;
var map__48791__$1 = (((((!((map__48791 == null))))?(((((map__48791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48791):map__48791);
var opts = map__48791__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48791__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path(path,opts);
var params = (function (){var G__48793 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,parts));
return (parameters.cljs$core$IFn$_invoke$arity$1 ? parameters.cljs$core$IFn$_invoke$arity$1(G__48793) : parameters.call(null,G__48793));
})();
return reitit.trie._insert((function (){var or__4185__auto__ = node;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path(path,opts),path,params,data);
}));

(reitit.trie.insert.cljs$lang$maxFixedArity = 4);

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler();
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__48797 = arguments.length;
switch (G__48797) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(options,reitit.trie.compiler());
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(options,compiler,cljs.core.PersistentVector.EMPTY);
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__48798,compiler,cp){
var map__48799 = p__48798;
var map__48799__$1 = (((((!((map__48799 == null))))?(((((map__48799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48799):map__48799);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48799__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48799__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48799__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48799__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48799__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = (function (p__48801){
var map__48802 = p__48801;
var map__48802__$1 = (((((!((map__48802 == null))))?(((((map__48802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48802):map__48802);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48802__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4185__auto__ = cljs.core.keys(children__$1);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});
var matchers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__48804 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48804,reitit.trie.data_matcher(compiler,params,data));
} else {
return G__48804;
}
})(),(function (){var iter__4582__auto__ = (function reitit$trie$iter__48805(s__48806){
return (new cljs.core.LazySeq(null,(function (){
var s__48806__$1 = s__48806;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48806__$1);
if(temp__5735__auto__){
var s__48806__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48806__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48806__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48808 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48807 = (0);
while(true){
if((i__48807 < size__4581__auto__)){
var vec__48809 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48807);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48809,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48809,(1),null);
cljs.core.chunk_append(b__48808,reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))));

var G__49095 = (i__48807 + (1));
i__48807 = G__49095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48808),reitit$trie$iter__48805(cljs.core.chunk_rest(s__48806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48808),null);
}
} else {
var vec__48812 = cljs.core.first(s__48806__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48812,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48812,(1),null);
return cljs.core.cons(reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))),reitit$trie$iter__48805(cljs.core.rest(s__48806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()),(function (){var iter__4582__auto__ = (function reitit$trie$iter__48815(s__48816){
return (new cljs.core.LazySeq(null,(function (){
var s__48816__$1 = s__48816;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48816__$1);
if(temp__5735__auto__){
var s__48816__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48816__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48816__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48818 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48817 = (0);
while(true){
if((i__48817 < size__4581__auto__)){
var vec__48819 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48817);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48819,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48819,(1),null);
cljs.core.chunk_append(b__48818,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})());

var G__49111 = (i__48817 + (1));
i__48817 = G__49111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48818),reitit$trie$iter__48815(cljs.core.chunk_rest(s__48816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48818),null);
}
} else {
var vec__48822 = cljs.core.first(s__48816__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48822,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48822,(1),null);
return cljs.core.cons((function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})(),reitit$trie$iter__48815(cljs.core.rest(s__48816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(wilds);
})()),(function (){var iter__4582__auto__ = (function reitit$trie$iter__48825(s__48827){
return (new cljs.core.LazySeq(null,(function (){
var s__48827__$1 = s__48827;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48827__$1);
if(temp__5735__auto__){
var s__48827__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48827__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48827__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48829 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48828 = (0);
while(true){
if((i__48828 < size__4581__auto__)){
var vec__48830 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48828);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48830,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48830,(1),null);
cljs.core.chunk_append(b__48829,reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__49126 = (i__48828 + (1));
i__48828 = G__49126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48829),reitit$trie$iter__48825(cljs.core.chunk_rest(s__48827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48829),null);
}
} else {
var vec__48841 = cljs.core.first(s__48827__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48841,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48841,(1),null);
return cljs.core.cons(reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__48825(cljs.core.rest(s__48827__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(catch_all);
})());
if((cljs.core.count(matchers) > (1))){
return reitit.trie.linear_matcher(compiler,matchers,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matchers),(1))){
return cljs.core.first(matchers);
} else {
return reitit.trie.data_matcher(compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
}));

(reitit.trie.compile.cljs$lang$maxFixedArity = 3);

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__48860 = arguments.length;
switch (G__48860) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty(compiler,compiled_trie);
}));

(reitit.trie.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__48866 = arguments.length;
switch (G__48866) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher(compiler,compiled_trie);
}));

(reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.trie.js.map