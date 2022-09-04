(ns scratch
  (:require ["./index.mjs" :as ci]))

(let [init {:a 1}
      with-b (ci/assoc init :b 2)
      _ (prn with-b)
      without-b (ci/dissoc {:a 1 :b 2} :b)]
  (prn without-b)
  (prn (= init without-b)))
