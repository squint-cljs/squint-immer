import {  } from 'immer'
import { apply, assoc_BANG_, first, dissoc_BANG_ } from 'clavascript/core.js'
import produce from 'immer';
var assoc = (function () {
 let f1 = function (var_args) {
let args26 = [];
let len__22087__auto__7 = arguments["length"];
let i38 = 0;
while(true){
if ((i38 < len__22087__auto__7)) {
args26.push((arguments[i38]));
let G__9 = (i38 + 1);
i38 = G__9;
continue;
};break;
}
;
let argseq__22224__auto__10 = ((1 < args26["length"])) ? (args26.slice(1)) : (null);
return f1.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), argseq__22224__auto__10);
};
f1["cljs$core$IFn$_invoke$arity$variadic"] = function (m, args) {
return produce(m, function () {
return apply(assoc_BANG_, m, args);
});
};
f1["cljs$lang$maxFixedArity"] = 1;
f1["cljs$lang$applyTo"] = function (seq4) {
let G__511 = first(seq4);
let seq412 = next(seq4);
let self__22094__auto__13 = this;
return self__22094__auto__13.cljs$core$IFn$_invoke$arity$variadic(G__511, seq412);
};
return f1;
})();
var dissoc = (function () {
 let f14 = function (var_args) {
let args1519 = [];
let len__22087__auto__20 = arguments["length"];
let i1621 = 0;
while(true){
if ((i1621 < len__22087__auto__20)) {
args1519.push((arguments[i1621]));
let G__22 = (i1621 + 1);
i1621 = G__22;
continue;
};break;
}
;
let argseq__22224__auto__23 = ((1 < args1519["length"])) ? (args1519.slice(1)) : (null);
return f14.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), argseq__22224__auto__23);
};
f14["cljs$core$IFn$_invoke$arity$variadic"] = function (m, args) {
return produce(m, function () {
return apply(dissoc_BANG_, m, args);
});
};
f14["cljs$lang$maxFixedArity"] = 1;
f14["cljs$lang$applyTo"] = function (seq17) {
let G__1824 = first(seq17);
let seq1725 = next(seq17);
let self__22094__auto__26 = this;
return self__22094__auto__26.cljs$core$IFn$_invoke$arity$variadic(G__1824, seq1725);
};
return f14;
})();

export { assoc, dissoc }
