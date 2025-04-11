# Module Theory

Modules were pioneered by Emmy Noether (of the Noether's Theorem fame). Vector spaces are just special types of modules that arise when the
underlying field is a ring.

## Basic Definitions and Examples

*Definition*. Let $R$ be a ring (not necessarily commutative nor with $1$). A left $R$-module is an abelian group $(M, +)$ and an action of $R$ on $M$ which satisfies

1. $(r + s)m = rm + sm$, for all $r, s \in R$ and $m \in M$,
2. $(rs)m = r(sm)$, for all $r, s \in R$, $m \in M$ and
3. $r(m + n) = rm + rn$, for all $r \in R$, $m, n \in M$.

If the ring $R$ has $1$, we impose the axiom

4. $1m = m$, for all $m \in M$.

*Note*: "Right" $R$-modules can be described analogously.

If the ring $R$ is commutative both left and right $R$-modules are equivalent. Define, $mr = rm$ for $m \in M$ and $r\in R$. If $R$ is non-commutative then axiom $2$ will not hold in general (Every "left" module is not equivalent to a "right" module).

If a module satisfies axiom $4$, it is called *unital* module. This assumption is very important to prevent situations such as $rm = 0$ for all $r \in R$ and $m \in M$.

> Modules over a field $F$ and vector spaces over a field $F$ are the same.

*Definition*. Let $R$ be a ring and let $M$ be an $R$-module. A $R$-submodule of $M$ is a subgroup $N$ of $M$ which is closed under the action of ring elements, i.e, $rn \in N$ for all $r \in R$ and $n \in N$.

In particular, if $R = F$ is a field, submodules are the same as subspaces. Every $R$-module $M$ has two submodules $M$ and $0$.

*Example*. 

---

# References

- Abstract Algebra, *Dummit, Foote*
