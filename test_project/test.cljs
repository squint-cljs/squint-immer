(ns test
  (:require ["clava-immer" :as ci]))

(prn (ci/assoc {:a 1} :b 2 :c 3))
