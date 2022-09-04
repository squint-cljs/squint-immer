(ns index
  (:refer-clojure :exclude [assoc
                            dissoc])
  (:require ["immer$default" :as produce]))

(defn assoc [m & args]
  (produce m #(apply assoc! m args)))

(defn dissoc [m & args]
  (produce m #(apply dissoc! m args)))
