# clava-immer

## Usage

Create a `package.json`:

``` javascript
{"dependencies":
 {"clava-immer":"git://github.com/clavascript/clava-immer.git#c303a4744f136137cf2612e440958ca9e55ee721",
  "clavascript":"^0.0.0-alpha.40"}}
```

Then you can use `"clava-immer"`:

``` clojure
(ns test
  (:require ["clava-immer" :as ci]))

(prn (ci/assoc {:a 1} :b 2 :c 3))
(prn (ci/dissoc {:a 1 :b 2} :b))
```
